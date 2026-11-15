# DeepSeek 鲸鱼娘 3D 形象（开发中）

DeepSeek 的拟人化形象「蓝色大肥鱼」（女仆装鲸鱼娘），准备做成工作进程 3D 视图里可以简单互动的角色。代码和资源暂时只放在 `whale/` 目录下，还没有接入场景，插件的构建、测试、发布文件和 `dist/client.js` 都不受影响。

![四视图](docs/turnaround.webp)

## 进度

- [x] Tripo 输入图：在设计图基础上改成微笑、A 字姿势、手掌张开，去掉尾巴和呆毛圈（`assets/source/tripo_input.png`）
- [x] 身体：Tripo v3.1 图生模型（`assets/whale_body.glb`）
- [x] 尾巴和呆毛：程序生成（`src/tail.js`、`src/ahoge.js`）
- [x] 着色：赛璐璐两色调 + 边缘光 + 描边（`src/toon.js`）
- [ ] 绑骨和预设动作（Tripo 自动绑骨 v1.0）
- [ ] 脸部贴片：程序绘制的大眼睛和嘴，支持眨眼和 ^^、💢、犯困等表情
- [ ] 交互：悬停注视、摸头、点身体生气、点尾巴受惊、双击吃白饭、30 秒无操作犯困
- [ ] 接入场景：模型打包进懒加载的 `dist/client.whale.js`（插件资源路由只提供 svg/png/webp/jpg，不能直接放 .glb）
- [ ] 版权与署名：模型完成后再处理

## 目录

| 路径 | 内容 |
| --- | --- |
| `src/toon.js` | `toonMaterial()`、`outlineMaterial()`、`applyToon(root)`：不依赖场景灯光的两色调着色和反向外壳描边 |
| `src/tail.js` | `createTail()`：鲸尾网格 + 7 节骨骼，`update(t, { sway, swing, speed, curl })` 驱动摆动 |
| `src/ahoge.js` | `createAhoge()`：从头顶长出、向前卷的呆毛 |
| `preview/turntable.html` | 多视角预览页，参数写在文件开头的注释里 |
| `preview/cdp.mjs` | 用无头 Edge 渲染预览页并截图 |
| `assets/whale_body.glb` | Tripo 生成的身体（未绑骨）：75,753 个三角面，4096² 贴图 |
| `assets/landmarks.json` | 在归一化坐标里测得的头顶位置和头发颜色 |
| `assets/source/tripo_input.png` | 生成身体用的输入图 |
| `tools/` | 读取 GLB 和测量用的 Python 小工具（需要 numpy、Pillow） |
| `tripo/client.mjs` | Tripo v3 API 客户端 |
| `docs/` | 模型渲染图 |

## 预览

1. 在仓库根目录运行 `pnpm install`（预览页用的是 devDependencies 里的 three）。
2. 在仓库根目录启动静态文件服务，例如 `python -m http.server 8000`。
3. 打开 <http://localhost:8000/whale/preview/turntable.html?glb=../assets/whale_body.glb&tail=1&mode=toon&vib=0.8&crown=-0.0026,1.3265,0.0058&ac0=%23545f96&ac1=%236a91cc>

无头渲染（Windows，需要 Edge），图片保存在 `whale/preview/out/`（不提交）：

```
node whale/preview/cdp.mjs body.png "glb=../assets/whale_body.glb&tail=1&mode=toon&vib=0.8&crown=-0.0026,1.3265,0.0058&ac0=%23545f96&ac1=%236a91cc"
```

## 设计说明

- 坐标：身体加载后绕 Y 轴旋转 −90°（Tripo 模型朝 +x），等比缩放到身高 1.35 m，脚底在 y = 0，正面朝 +z，单位是米。尾巴和呆毛都用这个坐标系。
- 尾巴不交给 Tripo 生成：尾巴藏在双腿后面，Tripo 会把它和腿粘成一块，自动绑骨也没有尾巴骨骼。形状按参考视频：细长的深蓝色尾巴从裙子后摆下面伸出，贴着腿后面垂到地面附近，末端是水平的尾鳍，两端从脚踝两侧露出来。
- 呆毛也是程序生成的：输入图里的呆毛圈被 Tripo 做成了后脑勺上的两块实心圆片，所以先在输入图里把它抹掉了。
- 着色不依赖场景灯光，因为主场景主要靠环境贴图照明。Tripo 贴图里的头发偏灰，`vib` 只给偏蓝的颜色加饱和度，皮肤和白色不受影响。

## Tripo 生成参数

身体（图生模型任务 `4c4a9e9d-4afb-4042-a36e-eebcae7f9214`）：`model v3.1-20260211`、`texture_quality detailed`、`texture_version v3.5-20260815`、`delight true`、`geometry_quality detailed`、`face_limit 80000`、`orientation align_image`、`texture_alignment original_image`、`pbr true`、`model_seed 15233`、`texture_seed 15233`。

API 密钥不在仓库里：`tripo/client.mjs` 从环境变量 `TRIPO_KEY_FILE` 指向的文件或 `~/.tripo/api_key.txt` 读取。任务日志 `tripo/tasks.json` 和下载目录 `tripo/raw/` 已加入 `.gitignore`。

## 角色来源

形象的基础是上善无形的原创角色「溟月」（蓝色渐变长发、呆毛、鲸类头鳍、蓝眼睛、鲸尾），之后 B 站 ZipZipPipe 加入了 DeepSeek 元素和深蓝白女仆装。署名和使用许可在模型完成后确定。
