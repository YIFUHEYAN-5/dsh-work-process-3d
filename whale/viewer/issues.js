// Known problems of the current model, each with the clip, time and view that shows it (viewer "问题定位" list).
// Bad-triangle numbers come from whale/tools/rig/eval_skin.py (samples every 0.25 s; edge stretched > 1.35x or < 0.7x);
// the viewer's heat map counts the same way.
export const ISSUES = [
  { id: 'skirt', title: '裙子被大腿带着变形', sub: '挠头 2.0 s · 热图', clip: 'scratch', t: 2, view: 'skirt', shade: 'heat',
    html: '<p>裙子的权重上半部分跟腰、越往下越多地跟大腿。抬腿或扭胯幅度大时，裙摆一侧被拉长，另一侧挤在一起。</p><p>这一帧全身 14,036 个三角形变形过大（共 75,585），一半以上在裙子上。</p>' },
  { id: 'skirt-laugh', title: '同一问题：笑', sub: '笑 1.5 s · 热图', clip: 'laugh_01', t: 1.5, view: 'skirt', shade: 'heat',
    html: '<p>笑的时候身体前后晃得厉害，裙摆跟着大腿走。这一帧全身 12,291 个三角形变形过大，一半以上在裙子上。</p>' },
  { id: 'hair', title: '长发被拉长', sub: '受惊 2.0 s · 背面热图', clip: 'scared_01', t: 2, view: 'back', shade: 'heat',
    html: '<p>长发没有自己的骨骼，只能跟着头、脊椎和肩走。头和身体转动方向不同时，背后的头发被拉长或压扁（受惊、四处张望、笑、挠头里约 2,000–4,000 个三角形）。</p>' },
  { id: 'bow', title: '鞠躬最深处', sub: '鞠躬 3.25 s · 侧面热图', clip: 'bow', t: 3.25, view: 'side', shade: 'heat',
    html: '<p>这是唯一一处修复后比 Tripo 原始更差的地方：最深那一帧 5,358 个三角形变形过大，Tripo 原始是 5,166 个。整段的平均值仍从 2,909 降到 1,382。</p>' },
  { id: 'face', title: '脸不会变', sub: '生气 1.75 s · 脸', clip: 'angry_01', t: 1.75, view: 'face', shade: 'toon',
    html: '<p>眼睛和嘴是画在贴图上的，生气、笑的时候表情不变。计划中的第 4 步“脸部贴片”会解决：程序绘制大眼睛和嘴，能眨眼，能切换 ^^、💢、犯困等表情。</p>' },
  { id: 'compare', title: '对比：Tripo 原始权重', sub: '打招呼 1.75 s · 热图', clip: 'greet_01', t: 1.75, view: 'front', shade: 'heat', w: 'tripo',
    html: '<p>Tripo 自动绑骨的原始权重：头发和裙子侧面跟着手臂走，手和裙子之间有三角形连着。这一帧 18,113 个三角形变形过大；点左边“修复后”是 2,873 个。</p>' }
];
