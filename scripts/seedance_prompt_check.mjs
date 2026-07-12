#!/usr/bin/env node
import fs from "node:fs";

const args = process.argv.slice(2);

function usage() {
  console.error(`Usage:
  node seedance_prompt_check.mjs --story "一个机器人在废弃游乐园里找回童年的记忆，最后看见摩天轮重新亮起。"
  node seedance_prompt_check.mjs --prompt path/to/final-prompt.txt
  node seedance_prompt_check.mjs path/to/final-prompt.txt`);
}

function readStdin() {
  try {
    if (process.stdin.isTTY) return "";
    return fs.readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

function parseArgs(argv) {
  let mode = "prompt";
  const parts = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--story") {
      mode = "story";
      continue;
    }
    if (arg === "--prompt") {
      mode = "prompt";
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      usage();
      process.exit(0);
    }
    parts.push(arg);
  }

  return { mode, value: parts.join(" ").trim() };
}

function readInput(value) {
  if (!value) return readStdin().trim();
  if (fs.existsSync(value) && fs.statSync(value).isFile()) {
    return fs.readFileSync(value, "utf8").trim();
  }
  return value;
}

function report(title, checks, passScore) {
  const score = checks.filter((check) => check.pass).length;
  console.log(`${title}: ${score}/${checks.length}`);
  for (const check of checks) {
    console.log(`${check.pass ? "PASS" : "MISS"} ${check.label}${check.pass ? "" : ` - ${check.fix}`}`);
  }
  if (score < passScore) process.exit(1);
}

function hasAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function checkStory(story) {
  const hasChinese = /[\u4e00-\u9fff]/.test(story);
  const hasSubject = hasAny(story, [
    /(一个|一位|一名|这位|那个|小|老|年轻|机器人|女孩|男孩|男人|女人|孩子|老人|动物|产品|城市|房间|店|车|船|花|信|灯|玩具|角色)/,
    /[\u4e00-\u9fff]{1,8}在/
  ]);
  const hasEvent = hasAny(story, [
    /(寻找|找回|等待|等|守候|盼|看见|遇见|发现|变成|重新|亮起|打开|离开|到达|失去|获得|追逐|奔跑|走进|醒来|回忆|想起|保护|展示|出现|消失|转身|抬头|落下|飞起|穿过|靠近)/,
    /(最后|突然|随后|直到|当|然后|却|终于)/
  ]);
  const hasSceneOrMood = hasAny(story, [
    /(在|雨夜|夜晚|清晨|黄昏|城市|森林|海边|游乐园|房间|街道|舞台|天空|废弃|未来|古老|孤独|温暖|紧张|梦幻|悲伤|希望|浪漫|危险)/
  ]);
  const hasEndingOrArc = hasAny(story, [
    /(最后|终于|重新|变成|发现|看见|明白|回到|亮起|消失|留下|开始|结束|从.+到|逐渐)/
  ]);
  const isUsableLength = story.trim().length >= 6 && story.trim().length <= 500;

  const checks = [
    {
      label: "可读故事输入",
      pass: hasChinese && isUsableLength,
      fix: "输入应是6到500字之间的中文故事、概念或情绪句。"
    },
    {
      label: "可识别主体",
      pass: hasSubject,
      fix: "补充谁或什么是画面主体。"
    },
    {
      label: "可见事件",
      pass: hasEvent,
      fix: "补充等待、发现、变化、行动或结果。"
    },
    {
      label: "场景或情绪线索",
      pass: hasSceneOrMood,
      fix: "补充地点、时间、天气、氛围或情绪。"
    },
    {
      label: "结尾或转折潜力",
      pass: hasEndingOrArc,
      fix: "补充最终看见什么、发生什么、情绪如何落点。"
    }
  ];

  report("Seedance story convertibility check", checks, 3);
}

function checkPrompt(prompt) {
  const checks = [
    {
      label: "主体",
      pass: hasAny(prompt, [/(主体|人物|角色|产品|物体|动物|机器人|女孩|男孩|男人|女人|孩子|老人|@图\d|@视频\d|@原视频)/]),
      fix: "补充主体是谁/是什么，并写出稳定身份或产品特征。"
    },
    {
      label: "场景",
      pass: hasAny(prompt, [/(场景|环境|街|房间|室内|室外|森林|海边|城市|游乐园|工作室|舞台|天空|夜晚|清晨|黄昏|雨夜|背景|入口|门口)/]),
      fix: "补充具体地点、时间、环境或背景布局。"
    },
    {
      label: "动作/事件",
      pass: hasAny(prompt, [/(动作|走|跑|转身|抬头|移动|变化|过渡|展示|挥手|看向|推开|飞|落下|出现|消失|亮起|等待|发现|找回|环绕|推进|拉远|0-3秒|3-7秒|7-10秒)/]),
      fix: "补充可见动作或事件过程，最好有开始和结果。"
    },
    {
      label: "镜头",
      pass: hasAny(prompt, [/(镜头|近景|中景|远景|特写|俯拍|仰拍|推|拉|摇|移|环绕|跟拍|手持|景别|机位|低角度|高角度)/]),
      fix: "补充景别、机位或镜头运动。"
    },
    {
      label: "风格/光线",
      pass: hasAny(prompt, [/(风格|光线|色彩|氛围|质感|电影|写实|动画|柔和|冷色|暖色|霓虹|自然光|棚拍|胶片|水雾|尘埃|路灯|暖光|冷蓝)/]),
      fix: "补充光线、色彩、质感、情绪或视觉风格。"
    },
    {
      label: "保持/避免约束",
      pass: hasAny(prompt, [/(避免|不要|防止|无多余|不改变|保持|稳定|连续|身份漂移|画面闪烁|变形|跳切)/]),
      fix: "补充保持/避免规则，降低身份漂移、闪烁或变形风险。"
    },
    {
      label: "Seedance参数",
      pass: /Seedance 2\.0/.test(prompt) && /(文生视频|图生视频|多模态创意控制)/.test(prompt) && /(5s|10s)/.test(prompt) && /(16:9|9:16|1:1|4:3|3:4|21:9|9:21)/.test(prompt) && /(720p|1080p)/.test(prompt),
      fix: "补充模型、模式、时长、比例和清晰度。"
    }
  ];

  const refs = [...prompt.matchAll(/@(原视频|图\d+|视频\d+|素材\d+|image\d+|video\d+|[A-Za-z0-9_-]+)/gu)].map((match) => match[0]);
  if (refs.length > 0) {
    checks.push({
      label: "素材角色",
      pass: hasAny(prompt, [/(主体参考|身份参考|动作参考|场景参考|风格参考|构图参考|编辑基底|原视频|保留)/]),
      fix: "为每个 @素材 写明主体参考、动作参考、场景参考、风格参考或编辑基底。"
    });
    console.log(`Detected references: ${[...new Set(refs)].join(", ")}`);
  }

  report("Seedance final prompt check", checks, Math.ceil(checks.length * 0.85));
}

const { mode, value } = parseArgs(args);
const input = readInput(value);

if (!input) {
  usage();
  process.exit(2);
}

if (mode === "story") {
  checkStory(input);
} else {
  checkPrompt(input);
}
