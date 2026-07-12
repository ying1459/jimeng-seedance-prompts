# Jimeng Seedance Prompts

把简单故事、图生视频想法、多图参考、产品广告镜头和视频编辑需求，整理成可以直接粘贴到即梦 / Seedance 2.0 的高质量提示词。

这个仓库是一个 Codex skill。它的目标不是替代即梦，而是让 Codex 在帮你写提示词时自动遵循 Seedance 2.0 的视频生成逻辑：主体清楚、场景具体、动作可见、镜头可控、风格稳定、参数完整。

## 适合做什么

- 把一句简单故事改写成一条最优即梦 2.0 视频提示词
- 生成文生视频、图生视频、多图一致性和视频编辑提示词
- 为人物、产品、广告、情绪短片、科幻、奇幻、现实故事补齐镜头语言
- 给 `@图1`、`@视频1`、`@原视频` 这类素材引用标注清楚用途
- 检查提示词是否缺主体、场景、动作、镜头、风格、约束或参数

## 安装

把仓库克隆到 Codex skills 目录：

```bash
git clone https://github.com/ying1459/jimeng-seedance-prompts.git ~/.codex/skills/jimeng-seedance-prompts
```

Windows PowerShell 示例：

```powershell
git clone https://github.com/ying1459/jimeng-seedance-prompts.git "$env:USERPROFILE\.codex\skills\jimeng-seedance-prompts"
```

如果你已经有同名目录，先进入目录拉取更新：

```bash
cd ~/.codex/skills/jimeng-seedance-prompts
git pull
```

## 怎么用

在 Codex 里直接点名这个 skill：

```text
使用 $jimeng-seedance-prompts，把这个故事转成一条即梦2.0提示词：
一个机器人在废弃游乐园里找回童年的记忆，最后看见摩天轮重新亮起。
```

默认会输出一条可粘贴提示词，格式类似：

```text
提示词：
一个表面有轻微划痕的旧机器人站在雨后的废弃游乐园入口，地面积水倒映着锈迹斑斑的灯牌。0-3秒，镜头以中远景建立空荡游乐园和孤独的机器人；3-7秒，机器人缓慢走过破旧旋转木马，胸口的小灯随着零碎童年记忆一闪一闪亮起；7-10秒，它停在巨大的摩天轮前抬头，摩天轮一圈圈重新亮起暖黄色灯光，照亮机器人湿润反光的金属脸。镜头从低角度中景缓慢推进到近景，再拉出到摩天轮全景，写实电影感，雨后冷蓝色环境光与暖黄灯光形成对比，空气中有细小水雾和尘埃。保持机器人外观稳定，避免画面闪烁、主体变形、额外人物、无关文字和突然跳切。

参数建议：
模型：Seedance 2.0
模式：文生视频
时长：10s
比例：16:9
清晰度：1080p
```

## 常用调用方式

```text
使用 $jimeng-seedance-prompts，优化这条即梦提示词：小女孩在雨夜等一封信。
```

```text
使用 $jimeng-seedance-prompts，基于 @图1 做图生视频，保持人物不变，让她在雨中慢慢转身看向镜头。
```

```text
使用 $jimeng-seedance-prompts，@图1 是主体，@图2 是场景，@图3 是风格，帮我写一条多图一致性提示词。
```

```text
使用 $jimeng-seedance-prompts，以 @原视频 为基底，只把天空改成雨后晚霞，其他都保持不变。
```

## 自检脚本

检查一个自然故事是否适合转换：

```bash
node scripts/seedance_prompt_check.mjs --story "小女孩在雨夜等一封信。"
```

检查最终提示词是否完整：

```bash
node scripts/seedance_prompt_check.mjs --prompt path/to/final-prompt.txt
```

直接传文本或文件也可以：

```bash
node scripts/seedance_prompt_check.mjs path/to/final-prompt.txt
```

## 目录说明

- `SKILL.md`: Codex 读取的主技能说明
- `references/seedance-2-manual-notes.md`: Seedance 2.0 使用手册要点
- `references/prompt-patterns.md`: 故事、图生、多图、视频编辑等提示词模板
- `scripts/seedance_prompt_check.mjs`: 提示词/故事检查脚本
- `agents/openai.yaml`: Codex UI 元数据

## 说明

这个 skill 会尽量生成结构完整、可控、可直接粘贴的即梦 / Seedance 2.0 提示词。实际视频结果仍取决于即梦模型、素材质量、参数选择和生成随机性。
