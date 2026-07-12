# Prompt Patterns

Use these patterns to draft original ready-to-paste 即梦 / Seedance 2.0 prompts. Replace bracketed fields and keep only details relevant to the user's request.

## Universal Template

```text
[主体，稳定身份细节] 在 [场景/时间/环境] 中，[动作/事件/变化过程]。镜头采用 [景别/机位/镜头运动/节奏]，[光线/色彩/质感/风格/氛围]。使用 [@素材名] 作为 [参考角色]，保持 [必须保留内容]，只改变 [允许变化内容]。避免 [常见失败点]。
```

## Text-To-Video

```text
一位 [人物/主体] 在 [具体场景] 中 [主要动作]，[动作有开始、中段、结果]。镜头从 [起始景别] 缓慢 [推/拉/摇/移/环绕] 到 [结束景别]，画面具有 [光线、色彩、材质、风格]，[情绪氛围]。保持主体清晰稳定，避免画面闪烁、肢体变形和无关文字。
```

Use when no visual assets are supplied. Add more physical detail than feels necessary.

## Simple Story Compiler

Use this when the user gives a short story, one-sentence premise, mood sentence, or simple narrative. Output one best prompt by default.

First silently infer:

- 主体: the visible character, product, creature, place, or symbolic object.
- 场景: concrete location, time, weather, and background.
- 情绪弧线: opening mood, turning point, final feeling.
- 动作转折: the most visual action or transformation.
- 结尾画面: the image the viewer should remember.
- 镜头语言: starting shot, movement, final framing.
- 风格: realistic cinematic style unless the user asks for animation, fantasy, documentary, product ad, or another style.

Pasteable template:

```text
[主体和稳定外观] 在 [具体场景、时间、天气/光线] 中，[0-3秒建立主体和环境]；随后 [3-7秒主要动作、发现、回忆、冲突或变化]；最后 [7-10秒结果/揭示/情绪落点]。镜头从 [起始景别] [推进/拉远/横移/环绕/跟随] 到 [结束景别]，节奏 [缓慢/克制/紧张/梦幻/温暖]，[写实电影感或指定风格]，[具体光线、色彩、材质、氛围]。保持主体身份和场景连续，避免画面闪烁、主体变形、无关文字、额外人物和突然跳切。
```

Default parameters for simple stories:

```text
模型：Seedance 2.0
模式：文生视频
时长：10s
比例：16:9
清晰度：1080p
```

Use `9:16` instead of `16:9` when the user implies Douyin/TikTok/Reels, mobile, portrait, or short-video publishing.

Scenario defaults:

- 童话/奇幻: magical but physically visible details, warm or moonlit color, gentle camera motion, avoid clutter.
- 科幻: clear futuristic materials, screens/lights as atmosphere, controlled camera, avoid unreadable text-heavy UI.
- 现实情绪短片: grounded location, restrained acting, close-up or medium shot, natural light or motivated artificial light.
- 广告/产品故事: product is the subject, preserve shape/logo/material, story beat reveals the selling point.
- 动物/非人物主体: define silhouette, texture, movement style, and environment so identity stays stable.
- 抽象情绪: convert emotion into visible symbols, weather, color, body language, and camera movement.

Examples:

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

```text
提示词：
一个穿黄色雨衣的小女孩站在深夜老公寓门口的雨棚下，双手紧紧抱着一只旧信箱钥匙。0-3秒，镜头以中景建立雨夜、路灯和湿漉漉的台阶；3-7秒，她听见远处邮差自行车铃声，轻轻抬头，雨水从雨棚边缘连成银色线条；7-10秒，一封浅蓝色信件滑进信箱，她伸手取出，脸上从焦急变成安静的期待。镜头从侧后方中景缓慢横移到正面近景，写实电影感，柔和路灯暖光与雨夜冷色背景对比，氛围安静、细腻、克制。保持女孩外观和雨夜环境连续，避免面部漂移、手部变形、无关文字、额外人物和画面闪烁。

参数建议：
模型：Seedance 2.0
模式：文生视频
时长：10s
比例：16:9
清晰度：1080p
```

## Image-To-Video

```text
以 @图1 为主体与构图参考，保持 [主体身份/产品形状/服装/场景布局] 不变。让 [主体] 在原画面中 [可见动作]，环境出现 [轻微动态元素]。镜头 [轻微推进/横移/环绕/手持呼吸感]，光线保持 [原图光线或指定光线]，整体风格为 [风格]。避免改变主体外观、生成多余人物、Logo变形或背景跳变。
```

Use when the source image must remain recognizable.

## Multi-Reference Consistency

```text
使用 @图1 作为主体身份参考，保持 [脸型/发型/服装/产品轮廓/品牌细节]；使用 @图2 作为场景参考，采用 [空间布局/环境特征]；使用 @图3 作为风格参考，提取 [光线/色彩/材质/镜头语言]。生成 [主体] 在 [场景] 中 [动作] 的视频，镜头 [运动方式]，全程保持主体一致，避免参考图之间的风格冲突、身份漂移和画面闪烁。
```

Use one explicit role per reference. If references conflict, state priority.

## Video Motion Reference

```text
使用 @视频1 作为动作和镜头节奏参考，只借鉴 [动作轨迹/身体运动/镜头推进/转场结构]；主体使用 @图1 的身份与外观。生成 [主体] 在 [场景] 中完成 [动作] 的视频，保持 [必须保留内容]，画面风格为 [风格]。不要复制原视频人物身份或背景，避免动作过快、主体变形和镜头跳切。
```

Use when a video provides motion but not final identity or scene.

## Direct Video Editing

```text
以 @原视频 为编辑基底，保持原视频的 [人物身份/构图/镜头运动/节奏/背景] 不变，只将 [编辑对象] 改为 [目标变化]。变化应从 [起始状态] 自然过渡到 [结束状态]，光影和透视与原视频一致。避免改变未指定区域、人物漂移、边缘闪烁和风格突变。
```

Use when the user wants to modify an existing generated video.

## Character Performance

```text
[角色身份细节] 位于 [环境]，从 [初始情绪] 逐渐转为 [目标情绪]，通过 [眼神/呼吸/表情/手部动作/身体姿态] 表现情绪变化。镜头为 [近景/中近景/跟拍]，[光线] 强调 [情绪关键词]，动作自然克制，避免夸张表情、面部漂移和肢体畸形。
```

Use for emotional acting, dialogue-free story beats, and close-up shots.

## Product Or Commercial Shot

```text
@图1 中的产品作为唯一主体，保持 [轮廓/材质/颜色/Logo位置/文字] 完全一致。产品置于 [场景]，镜头 [环绕/推进/俯拍/微距] 展示 [卖点细节]，光线为 [棚拍/自然光/霓虹/晨光]，[背景动态] 衬托产品质感。避免Logo和文字变形、产品比例变化、边缘闪烁和无关物体遮挡。
```

Use for e-commerce, ad key visuals, and brand/product continuity.

## Mini Storyboard

For a 10-second clip, use three compact beats:

```text
0-3秒：[建立主体和场景]；
3-7秒：[主要动作或转折]；
7-10秒：[结果/情绪落点/产品展示]。
镜头 [整体运动方式]，风格 [统一风格]，保持 [一致性约束]，避免 [失败点]。
```

Use this when the user asks for narrative or a precise sequence.

## Variant Pack

When asked for multiple versions, vary only one dimension at a time:

- Version A: camera angle.
- Version B: lighting/mood.
- Version C: action intensity.
- Version D: scene environment.
- Version E: style reference.

Keep subject identity and parameter settings stable across the pack unless the user asks otherwise.
