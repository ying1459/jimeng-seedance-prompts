---
name: jimeng-seedance-prompts
description: Generate, refine, translate, structure, and validate ready-to-paste prompts for 即梦AI / Jimeng / Seedance 2.0 video generation. Use when the user asks for 即梦提示词, Seedance 2.0 prompts, 故事转即梦提示词, 短故事生成视频提示词, simple story to Jimeng prompt, 文生视频, 图生视频, 多图一致性, 多模态创意控制, 视频编辑提示词, camera-motion prompts, storyboards for Jimeng, or prompt packs optimized for Jimeng/Seedance.
---

# Jimeng Seedance Prompts

Use this skill to turn a user's idea, assets, references, or rough draft into an 即梦 / Seedance 2.0 prompt that is ready to paste.

## Load Order

- Read `references/seedance-2-manual-notes.md` when the task depends on Seedance 2.0 capabilities, settings, multimodal inputs, `@` references, or platform constraints.
- Read `references/prompt-patterns.md` when drafting new prompts, simple-story prompts, prompt variants, shot lists, or reusable prompt templates.
- Use `scripts/seedance_prompt_check.mjs` only when validating a complex prompt or a batch of prompts.

## Default Behavior

- Reply in Chinese unless the user asks for another language.
- If the user asks for "只给提示词" or "直接输出", output only the final prompt and any essential parameter line.
- If details are missing, infer a strong default instead of asking, unless the missing detail changes the generation mode or requires unavailable assets.
- Preserve the user's requested subject, scene, mood, product, character identity, and narrative intent. Improve clarity and controllability without changing the creative goal.
- When the user provides a simple story, output one optimized ready-to-paste prompt by default. Do not show analysis, decomposition, or multiple options unless requested.
- For simple stories, default to Seedance 2.0, 文生视频, 10s, 16:9, and 1080p. Use 9:16 when the user implies short-video, mobile, portrait, Reels/TikTok/Douyin, or vertical delivery.

## Classify The Task

Choose one primary mode:

- **文生视频**: no image or video asset is supplied.
- **图生视频**: one image is the visual anchor; motion, camera, and atmosphere should respect the image.
- **多图一致性**: two or more images define character, product, outfit, scene, or style continuity.
- **视频参考/视频编辑**: a video is referenced for motion, structure, style, or direct edits.
- **提示词优化**: the user supplies a draft prompt and wants it improved.
- **分镜/批量生成**: the user wants multiple shots, variants, or a prompt pack.
- **简单故事编译**: the user gives a short story, premise, mood, or one-sentence narrative and wants an optimized 即梦 prompt.

## Simple Story Compiler

When the input is a simple story, silently compile it before writing the final prompt:

1. Identify the main subject and add stable visible details without changing the story.
2. Turn the setting into a concrete place, time, weather, and visual environment.
3. Preserve the emotional arc: opening mood, turning point, and final feeling.
4. Convert the plot into a visible 10-second sequence:
   - 0-3秒: establish the subject and scene.
   - 3-7秒: show the main action, memory, discovery, conflict, or transformation.
   - 7-10秒: land on the result, reveal, product beat, or emotional endpoint.
5. Add cinematic camera language: starting shot, movement, final shot, and pacing.
6. Add style defaults if missing: realistic cinematic visual style, expressive lighting, coherent color palette, and stable atmosphere.
7. Add concise failure prevention: avoid identity drift, flicker, extra subjects, distorted limbs, unreadable text, sudden camera jumps, and contradictions.

For stories, do not output the decomposition. Output only the final pasteable prompt and parameters.

Use these defaults unless the user says otherwise:

- Style: 写实电影感 with observable lighting, color, lens, and texture details.
- Duration: 10s for story, emotional arc, memory, reveal, or transformation; 5s only for a single simple motion.
- Ratio: 16:9 by default; 9:16 for mobile/short-video/social vertical use.
- Resolution: 1080p for final prompts; 720p only for quick tests.
- Mode: 文生视频 for text-only stories; 图生视频 or 多模态创意控制 when assets are supplied.

## Prompt Construction

Build prompts in this order:

1. **主体**: who or what is central, with stable identity details.
2. **场景**: where and when it happens, including environment details.
3. **动作**: clear action, transformation, interaction, or event sequence.
4. **镜头**: framing, camera movement, lens feel, pacing, and shot scale.
5. **风格**: visual style, lighting, color, texture, mood, genre, and realism level.
6. **素材引用**: use `@素材名` and state each reference's role.
7. **约束**: what to preserve, what to change, and what to avoid.
8. **参数建议**: model, duration, aspect ratio, resolution, and mode.

Prefer natural cinematic Chinese over keyword piles. Keep the prompt specific enough that a video model can simulate the scene without guessing.

## Output Format

For most requests, output:

```text
提示词：
...

参数建议：
模型：Seedance 2.0
模式：文生视频 / 图生视频 / 多模态创意控制
时长：10s
比例：16:9
清晰度：1080p
素材：@图1=主体参考；@图2=风格参考；@视频1=运动参考
```

Omit the `素材` line when no assets are used. For simple stories, keep exactly one prompt unless the user asks for variants or a storyboard pack.

If the user wants batch output, provide numbered prompts with the same compact structure. If the user wants a single pasteable block, merge parameters into one line after the prompt.

## Quality Rules

- Explicitly label each `@` reference by purpose: 主体参考, 动作参考, 场景参考, 风格参考, 构图参考, or 保留原视频.
- For identity consistency, repeat the stable identifiers: face, hair, outfit, silhouette, product shape, logo placement, color, and material.
- For image-to-video, do not contradict the source image. Add only plausible motion, camera movement, atmosphere, and time-based details.
- For video editing, state the edit target and preservation rules: "保持原视频构图、人物身份、镜头节奏不变，只将..."
- For multi-reference prompts, resolve conflicts. Do not ask Seedance to copy one image's lighting and another image's opposite lighting without priority.
- Use action verbs and visible outcomes. Replace vague words such as "高级", "好看", "震撼", or "电影感" with observable lighting, lens, motion, texture, and mood details.
- Include "避免..." constraints only when they prevent likely failure modes, such as extra limbs, identity drift, logo distortion, text artifacts, severe flicker, or unstable camera.

## Validation

For complex prompts, run:

```bash
node scripts/seedance_prompt_check.mjs --story "一个机器人在废弃游乐园里找回童年的记忆，最后看见摩天轮重新亮起。"
node scripts/seedance_prompt_check.mjs --prompt path/to/prompt.txt
```

Fix any missing essentials before presenting the final prompt.
