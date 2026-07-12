# Seedance 2.0 Manual Notes

These notes summarize the public 即梦 / Seedance 2.0 manual and mirror pages used to build this skill. They are operational guidance, not a verbatim copy of the source.

Sources consulted:

- Original user-provided Lark wiki: `https://bytedance.larkoffice.com/wiki/Rx8pwmbXjirkvukCnCQcAtH1nSd`
- Public mirror: `https://www.qilinai.org/article/126.html`
- Public mirror: `https://www.sohu.com/a/986871445_121124358`

## Product Scope

Seedance 2.0 is positioned as 即梦AI's newer video model for multimodal creative control. The manual describes:

- Standard text-to-video and image-to-video workflows.
- Image and video materials as references through `@` mention or upload flows, depending on platform.
- Editing across subject, action, and scene dimensions.
- Better subject consistency, multi-image integration, motion control, emotional performance, lens/camera control, and short narrative execution.

## Entry Points And Inputs

- Web: enter 即梦AI, open AI视频, then use the Seedance 2.0 / 多模态创意控制 model options.
- App: use the AI video creation flow and reference materials through the input area where supported.
- Image references: mention or attach images through the prompt area, then describe each image's role.
- Video references: the manual notes web upload support and app-side `@` selection for some generated videos. Treat local video upload availability as platform-dependent and verify if the user reports a mismatch.

## Parameter Notes

Use these as defaults unless the user gives a target:

- Model: Seedance 2.0.
- Duration: 5s for simple motion, 10s for richer action or mini-narrative.
- Resolution: 1080p for final/high-detail output when available; 720p only for quick tests.
- Aspect ratios: 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21.
- Text-to-video default: if no ratio is specified, use 16:9 as a safe web default.
- Simple story default: use 10s, 16:9, 1080p, 文生视频. Switch to 9:16 for short-video/mobile/portrait delivery cues.
- Image-to-video: the first reference image can strongly affect generated dimensions and composition. Put the visual anchor first.

## Prompt Anatomy

A strong Seedance prompt usually contains:

- Main subject and stable identity details.
- Scene/environment and time of day.
- Action or event sequence.
- Camera framing and motion.
- Visual style, lighting, color, mood, and texture.
- Material references using `@` plus their role.
- Preservation/editing constraints.

Recommended order:

```text
主体 -> 场景 -> 动作 -> 镜头 -> 风格 -> @素材角色 -> 保留/修改/避免
```

## Reference Roles

Use explicit roles. Good labels include:

- `@图1` as 主体参考: identity, face, product shape, outfit, brand details.
- `@图2` as 场景参考: architecture, room, landscape, object placement.
- `@图3` as 风格参考: lighting, color palette, texture, art direction.
- `@视频1` as 动作参考: movement path, body motion, camera rhythm.
- `@原视频` as 编辑基底: preserve composition, identity, timing, and motion unless specified.

## Mode-Specific Rules

### 文生视频

Specify everything visible. Use concrete nouns, action verbs, and camera language. Avoid relying on platform intuition for important visual details.

### 图生视频

Treat the image as the anchor. Describe the added motion and camera path without changing identity, clothing, object shape, or scene unless requested.

### 多图一致性

Assign each image one job. Repeat the consistency anchors in text:

- Character: face shape, hairstyle, age range, outfit, color, posture.
- Product: silhouette, material, color, label/logo position, distinctive geometry.
- Scene: layout, architectural style, major objects, weather/lighting.

### 视频参考/视频编辑

Separate "preserve" and "change":

- Preserve identity, composition, rhythm, camera angle, or background when needed.
- Change only the target subject, action, atmosphere, outfit, material, or scene element.
- If using a motion reference video, say whether to imitate body movement, camera movement, pacing, or transformation structure.

## Failure Prevention

Add concise avoidance constraints for likely problems:

- Identity drift across frames.
- Extra fingers, limbs, faces, or duplicate subjects.
- Text and logo deformation.
- Flicker, sudden camera jumps, or inconsistent lighting.
- Contradictory references.
- Overly fast motion in short durations.

## Good Defaults

- Character cinematic shot: 10s, 16:9, 1080p if final, medium close-up to wide reveal.
- Social vertical: 5s or 10s, 9:16, 720p for iteration, 1080p for final.
- Product animation: 5s, 1:1 or 9:16, subtle controlled camera move, preserve logo and product geometry.
- Multi-image consistency: put the identity/product anchor first, then scene/style references.
