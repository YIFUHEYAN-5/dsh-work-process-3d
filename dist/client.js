/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var Ey=Object.create;var ec=Object.defineProperty;var Ty=Object.getOwnPropertyDescriptor;var Ay=Object.getOwnPropertyNames;var Ry=Object.getPrototypeOf,Cy=Object.prototype.hasOwnProperty;var Py=(n,e)=>{for(var t in e)ec(n,t,{get:e[t],enumerable:!0})},Ap=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ay(e))!Cy.call(n,s)&&s!==t&&ec(n,s,{get:()=>e[s],enumerable:!(i=Ty(e,s))||i.enumerable});return n};var Rp=(n,e,t)=>(t=n!=null?Ey(Ry(n)):{},Ap(e||!n||!n.__esModule?ec(t,"default",{value:n,enumerable:!0}):t,n)),Iy=n=>Ap(ec({},"__esModule",{value:!0}),n);var uA={};Py(uA,{default:()=>cA});module.exports=Iy(uA);var wy=Rp(require("react"),1);var tc="dsh-work-process-3d",Ly={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"演示模式：画面由内置示例会话驱动，数字、文件和命令都是虚构的。在「显示」里把数据切回「实时」即可看本会话。","badge.live":"实时","badge.liveHint":"画面来自本会话的实时数据","live.unsupported":"这个 DSH 版本不提供会话投影，只能显示演示数据。","live.missing":"还没有收到本会话的实时数据。插件的主机部分可能尚未加载，重启 DSH 后生效。","live.showDemo":"先看演示","live.failed":"读取实时数据时出错，暂时显示演示数据。重启 DSH 后会重新尝试。","live.idle":"本会话还没有开始工作。发送一条消息后，机器会随对话运转。","source.label":"数据","source.live":"实时","source.demo":"演示","source.liveHint":"显示本会话的实时数据","source.demoHint":"显示内置的示例会话（虚构数据）","bal.loading":"读取中","bal.signedOut":"未登录账户","bal.failed":"查询失败","bal.unavailable":"不可用","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.living":"生活区","view.screens":"大屏","view.screensHint":"飞到大屏幕墙前，近距离查看三块屏幕；再点一次返回","screen.bar":"大屏查看","screen.flow":"令牌流量","screen.main":"工作总览","screen.cost":"成本与上下文","screen.descFlow":"实时生成速率、最近 60 秒的速率曲线，以及输入、缓存命中、输出和推理的累计用量。","screen.descMain":"当前阶段、轮次、工具调用、产出文件和模型请求；下面一排色块是最近的工具调用。","screen.descCost":"累计花费（分高峰和低谷）、最近 3 分钟的花费曲线、上下文占用和缓存节省。","screen.click":"点击近距离查看","screen.prev":"上一块","screen.next":"下一块","screen.back":"返回","screen.count":"{i}/{n}","screen.hint":"滚轮放大 · 拖动平移 · 点击屏幕外或「返回」退出 · ←/→ 切换","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.balanceTitle":"充值余额 {topped} · 赠金余额 {granted}","m.toppedUp":"充值余额","m.granted":"赠金余额","m.balanceViaKey":"通过 API 密钥查询","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸，留给以后入住的操作员角色。它不显示会话数据。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Dy={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Demo mode: a built-in sample session drives the scene; its numbers, files and commands are made up. Switch Data back to Live under Display to see this session.","badge.live":"Live","badge.liveHint":"The scene shows this session as it happens","live.unsupported":"This DSH release has no session projections, so only the demo can run.","live.missing":"No live data from this session yet. The plugin’s Host part may not be loaded; restart DSH to load it.","live.showDemo":"Show the demo","live.failed":"Reading live data failed, so the demo is shown for now. DSH tries again after a restart.","live.idle":"This session has not started working yet. Send a message and the machine runs with the conversation.","source.label":"Data","source.live":"Live","source.demo":"Demo","source.liveHint":"Show this session’s live data","source.demoHint":"Show the built-in sample session (made-up data)","bal.loading":"Loading","bal.signedOut":"Not signed in","bal.failed":"Query failed","bal.unavailable":"Unavailable","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.living":"Living","view.screens":"Screens","view.screensHint":"Fly up to the media wall and read the three screens up close; click again to go back","screen.bar":"Screen viewer","screen.flow":"Token flow","screen.main":"Work overview","screen.cost":"Cost and context","screen.descFlow":"Live generation rate, the last 60 seconds as a chart, and running totals for input, cache hits, output and reasoning.","screen.descMain":"Current phase, turn, tool calls, produced files and model requests; the strip of tiles below shows the latest tool calls.","screen.descCost":"Total cost split into peak and off-peak, the last 3 minutes of spend, context usage and cache savings.","screen.click":"Click to view up close","screen.prev":"Previous","screen.next":"Next","screen.back":"Back","screen.count":"{i}/{n}","screen.hint":"Scroll to zoom · drag to pan · click beside the screen or Back to leave · ←/→ to switch","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.balanceTitle":"Topped-up {topped} · granted {granted}","m.toppedUp":"Topped-up balance","m.granted":"Granted balance","m.balanceViaKey":"Queried with the API key","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium, kept for an operator character to move in later. It shows no session data.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},Cp={zh:Ly,en:Dy};var me=Rp(require("react"),1);var Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v0=0,Nh=1,_0=2;var ro=1,b0=2,da=3,zs=0,ri=1,nn=2,oo=0,Hs=1,jn=2,Oh=3,Fh=4,ha=5;var ao=100,M0=101,S0=102,w0=103,E0=104,mu=200,Lr=201,T0=202,A0=203,Uh=204,Dr=205,R0=206,C0=207,P0=208,I0=209,L0=210,D0=211,N0=212,O0=213,F0=214,Nc=0,Oc=1,Fc=2,Ko=3,Uc=4,kc=5,Bc=6,zc=7,kh=0,U0=1,k0=2,Gs=0,Bh=1,zh=2,Hh=3,Gh=4,Vh=5,Wh=6,bl=7;var Xh=300,lo=301,fa=302,gu=303,xu=304,tr=1e3,Fs=1001,Hc=1002,Jn=1003,B0=1004;var Ml=1005;var Rn=1006,yu=1007;var ms=1008;var Ci=1009,qh=1010,$h=1011,pa=1012,vu=1013,gs=1014,Zi=1015,Ei=1016,_u=1017,bu=1018,co=1020,Yh=35902,Kh=35899,Zh=1021,Jh=1022,xs=1023,nr=1026,cr=1027,Mu=1028,Su=1029,Nr=1030,wu=1031;var Eu=1033,Sl=33776,wl=33777,El=33778,Tl=33779,Tu=35840,Au=35841,Ru=35842,Cu=35843,Pu=36196,Iu=37492,Lu=37496,Du=37488,Nu=37489,Al=37490,Ou=37491,Fu=37808,Uu=37809,ku=37810,Bu=37811,zu=37812,Hu=37813,Gu=37814,Vu=37815,Wu=37816,Xu=37817,qu=37818,$u=37819,Yu=37820,Ku=37821,Zu=36492,Ju=36494,ju=36495,Qu=36283,ed=36284,Rl=36285,td=36286;var Wa=2300,Gc=2301,Lc=2302,Mh=2303,Sh=2400,wh=2401,Eh=2402;var z0=3200;var nd=0,H0=1,ur="",ni="srgb",Xa="srgb-linear",qa="linear",on="srgb";var Dc=7680;var G0=519,V0=512,W0=513,X0=514,jh=515,q0=516,$0=517,Qh=518,ef=519,tf=35044;var nf="300 es",Yi=2e3,Zo=2001;function Ny(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){let n=$a("canvas");return n.style.display="block",n}var Pp={},Jo=null;function Ya(...n){let e="THREE."+n.shift();Jo?Jo("log",e,...n):console.log(e,...n)}function K0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function St(...n){n=K0(n);let e="THREE."+n.shift();if(Jo)Jo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=K0(n);let e="THREE."+n.shift();if(Jo)Jo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qr(...n){let e=n.join(" ");e in Pp||(Pp[e]=!0,St(...n))}function Z0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var J0={[Nc]:Nc,[Fc]:Bc,[Uc]:Uc,[Ko]:kc,[Oc]:Oc,[Bc]:Fc,[zc]:zc,[kc]:Ko},hs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ip=1234567,za=Math.PI/180,jo=180/Math.PI;function dr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[i&255]+hi[i>>8&255]+hi[i>>16&255]+hi[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function sf(n,e){return(n%e+e)%e}function Fy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Uy(n,e,t){return n!==e?(t-n)/(e-n):0}function Ha(n,e,t){return(1-t)*n+t*e}function ky(n,e,t,i){return Ha(n,e,1-Math.exp(-t*i))}function By(n,e=1){return e-Math.abs(sf(n,e*2)-e)}function zy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vy(n,e){return n+Math.random()*(e-n)}function Wy(n){return n*(.5-Math.random())}function Xy(n){n!==void 0&&(Ip=n);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(n){return n*za}function $y(n){return n*jo}function Yy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ky(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zy(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:St("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function id(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function of(n,e){if(e.constructor===Float32Array)return n;let t=id(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function af(n,e){if(e.constructor===Float32Array)return n;let t=id(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Or={DEG2RAD:za,RAD2DEG:jo,generateUUID:dr,clamp:Nt,euclideanModulo:sf,mapLinear:Fy,inverseLerp:Uy,lerp:Ha,damp:ky,pingpong:By,smoothstep:zy,smootherstep:Hy,randInt:Gy,randFloat:Vy,randFloatSpread:Wy,seededRandom:Xy,degToRad:qy,radToDeg:$y,isPowerOfTwo:Yy,ceilPowerOfTwo:Ky,floorPowerOfTwo:rf,setQuaternionFromProperEuler:Zy,normalize:af,denormalize:of},Se=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,a=Math.sin(a*_)/b,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jd=new C,Lp=new Mn,At=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],_=s[1],b=s[4],y=s[7],M=s[2],w=s[5],v=s[8];return r[0]=o*x+a*_+l*M,r[3]=o*m+a*b+l*w,r[6]=o*g+a*y+l*v,r[1]=c*x+u*_+d*M,r[4]=c*m+u*b+d*w,r[7]=c*g+u*y+d*v,r[2]=h*x+f*_+p*M,r[5]=h*m+f*b+p*w,r[8]=h*g+f*y+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jd.makeScale(e,t)),this}rotate(e){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jd.makeRotation(-e)),this}translate(e,t){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jd=new At,Dp=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){let n={enabled:!0,workingColorSpace:Xa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===on&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===on&&(s.r=Yo(s.r),s.g=Yo(s.g),s.b=Yo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ur?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xa]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:on,toXYZ:Dp,fromXYZ:Np,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),n}var Xt=Jy();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Po,Vc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Po===void 0&&(Po=$a("canvas")),Po.width=e.width,Po.height=e.height;let s=Po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Po}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=er(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jy=0,Qo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qd(s[o].image)):r.push(Qd(s[o]))}else r=Qd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}var Qy=0,eh=new C,Mi=class n extends hs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fs,s=Fs,r=Rn,o=ms,a=xs,l=Ci,c=n.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=dr(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=Xh;Mi.DEFAULT_ANISOTROPY=1;var pn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,M=(g+1)/2,w=(u+h)/4,v=(d+x)/4,S=(p+m)/4;return b>y&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=v/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wc=class extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Mi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Wc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ka=class extends Mi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xc=class extends Mi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Io.setFromMatrixColumn(e,0).length(),r=1/Io.setFromMatrixColumn(e,1).length(),o=1/Io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,i){let s=this.elements;return Oi.subVectors(e,t),Oi.lengthSq()===0&&(Oi.z=1),Oi.normalize(),br.crossVectors(i,Oi),br.lengthSq()===0&&(Math.abs(i.z)===1?Oi.x+=1e-4:Oi.z+=1e-4,Oi.normalize(),br.crossVectors(i,Oi)),br.normalize(),nc.crossVectors(Oi,br),s[0]=br.x,s[4]=nc.x,s[8]=Oi.x,s[1]=br.y,s[5]=nc.y,s[9]=Oi.y,s[2]=br.z,s[6]=nc.z,s[10]=Oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],b=i[7],y=i[11],M=i[15],w=s[0],v=s[4],S=s[8],A=s[12],R=s[1],P=s[5],U=s[9],H=s[13],I=s[2],Y=s[6],ee=s[10],J=s[14],Q=s[3],z=s[7],W=s[11],O=s[15];return r[0]=o*w+a*R+l*I+c*Q,r[4]=o*v+a*P+l*Y+c*z,r[8]=o*S+a*U+l*ee+c*W,r[12]=o*A+a*H+l*J+c*O,r[1]=u*w+d*R+h*I+f*Q,r[5]=u*v+d*P+h*Y+f*z,r[9]=u*S+d*U+h*ee+f*W,r[13]=u*A+d*H+h*J+f*O,r[2]=p*w+x*R+m*I+g*Q,r[6]=p*v+x*P+m*Y+g*z,r[10]=p*S+x*U+m*ee+g*W,r[14]=p*A+x*H+m*J+g*O,r[3]=_*w+b*R+y*I+M*Q,r[7]=_*v+b*P+y*Y+M*z,r[11]=_*S+b*U+y*ee+M*W,r[15]=_*A+b*H+y*J+M*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*h,b=a*f-c*d,y=a*h-l*d,M=o*f-c*u,w=o*h-l*u,v=o*d-a*u;return t*(x*_-m*b+g*y)-i*(p*_-m*M+g*w)+s*(p*b-x*M+g*v)-r*(p*y-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,b=t*l-s*o,y=t*c-r*o,M=i*l-s*a,w=i*c-r*a,v=s*c-r*l,S=u*x-d*p,A=u*m-h*p,R=u*g-f*p,P=d*m-h*x,U=d*g-f*x,H=h*g-f*m,I=_*H-b*U+y*P+M*R-w*A+v*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/I;return e[0]=(a*H-l*U+c*P)*Y,e[1]=(s*U-i*H-r*P)*Y,e[2]=(x*v-m*w+g*M)*Y,e[3]=(h*w-d*v-f*M)*Y,e[4]=(l*R-o*H-c*A)*Y,e[5]=(t*H-s*R+r*A)*Y,e[6]=(m*y-p*v-g*b)*Y,e[7]=(u*v-h*y+f*b)*Y,e[8]=(o*U-a*R+c*S)*Y,e[9]=(i*R-t*U-r*S)*Y,e[10]=(p*w-x*y+g*_)*Y,e[11]=(d*y-u*w-f*_)*Y,e[12]=(a*A-o*P-l*S)*Y,e[13]=(t*P-i*A+s*S)*Y,e[14]=(x*b-p*M-m*_)*Y,e[15]=(u*M-d*b+h*_)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,_=l*c,b=l*u,y=l*d,M=i.x,w=i.y,v=i.z;return s[0]=(1-(x+g))*M,s[1]=(f+y)*M,s[2]=(p-b)*M,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+b)*v,s[9]=(m-_)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Io.set(s[0],s[1],s[2]).length(),a=Io.set(s[4],s[5],s[6]).length(),l=Io.set(s[8],s[9],s[10]).length();r<0&&(o=-o),cs.copy(this);let c=1/o,u=1/a,d=1/l;return cs.elements[0]*=c,cs.elements[1]*=c,cs.elements[2]*=c,cs.elements[4]*=u,cs.elements[5]*=u,cs.elements[6]*=u,cs.elements[8]*=d,cs.elements[9]*=d,cs.elements[10]*=d,t.setFromRotationMatrix(cs),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Yi,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Yi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Zo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Yi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Zo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Io=new C,cs=new wt,ev=new C(0,0,0),tv=new C(1,1,1),br=new C,nc=new C,Oi=new C,Op=new wt,Fp=new Mn,si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nv=0,Up=new C,Lo=new Mn,Ys=new wt,ic=new C,Ca=new C,iv=new C,sv=new Mn,kp=new C(1,0,0),Bp=new C(0,1,0),zp=new C(0,0,1),Hp={type:"added"},rv={type:"removed"},Do={type:"childadded",child:null},th={type:"childremoved",child:null},cn=class n extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new si,i=new Mn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new At}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,t){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ys.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ic.copy(e):ic.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ys.lookAt(Ca,ic,this.up):Ys.lookAt(ic,Ca,this.up),this.quaternion.setFromRotationMatrix(Ys),s&&(Ys.extractRotation(s.matrixWorld),Lo.setFromRotationMatrix(Ys),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Do.child=e,this.dispatchEvent(Do),Do.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rv),th.child=e,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ys.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ys.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ys),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new C(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ov={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},sc={h:0,s:0,l:0};function nh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Xt.workingColorSpace){if(e=sf(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nh(o,r,e+1/3),this.g=nh(o,r,e),this.b=nh(o,r,e-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(e,t=ni){function i(r){r!==void 0&&parseFloat(r)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){let i=j0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Xt.workingToColorSpace(fi.copy(this),e),Math.round(Nt(fi.r*255,0,255))*65536+Math.round(Nt(fi.g*255,0,255))*256+Math.round(Nt(fi.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(fi.copy(this),t);let i=fi.r,s=fi.g,r=fi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(fi.copy(this),t),e.r=fi.r,e.g=fi.g,e.b=fi.b,e}getStyle(e=ni){Xt.workingToColorSpace(fi.copy(this),e);let t=fi.r,i=fi.g,s=fi.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(sc);let i=Ha(Mr.h,sc.h,t),s=Ha(Mr.s,sc.s,t),r=Ha(Mr.l,sc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fi=new ze;ze.NAMES=j0;var eo=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},us=new C,Ks=new C,ih=new C,Zs=new C,No=new C,Oo=new C,Gp=new C,sh=new C,rh=new C,oh=new C,ah=new pn,lh=new pn,ch=new pn,Qs=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),us.subVectors(e,t),s.cross(us);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){us.subVectors(s,t),Ks.subVectors(i,t),ih.subVectors(e,t);let o=us.dot(us),a=us.dot(Ks),l=us.dot(ih),c=Ks.dot(Ks),u=Ks.dot(ih),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zs)===null?!1:Zs.x>=0&&Zs.y>=0&&Zs.x+Zs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Zs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zs.x),l.addScaledVector(o,Zs.y),l.addScaledVector(a,Zs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ah.setScalar(0),lh.setScalar(0),ch.setScalar(0),ah.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(lh,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(e,t,i,s){return us.subVectors(i,t),Ks.subVectors(e,t),us.cross(Ks).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return us.subVectors(this.c,this.b),Ks.subVectors(this.a,this.b),us.cross(Ks).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;No.subVectors(s,i),Oo.subVectors(r,i),sh.subVectors(e,i);let l=No.dot(sh),c=Oo.dot(sh);if(l<=0&&c<=0)return t.copy(i);rh.subVectors(e,s);let u=No.dot(rh),d=Oo.dot(rh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(No,o);oh.subVectors(e,r);let f=No.dot(oh),p=Oo.dot(oh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Oo,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Gp.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Gp,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(No,o).addScaledVector(Oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Si=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ds.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ds.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ds.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ds):ds.fromBufferAttribute(r,o),ds.applyMatrix4(e.matrixWorld),this.expandByPoint(ds);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ds),ds.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),oc.subVectors(this.max,Pa),Fo.subVectors(e.a,Pa),Uo.subVectors(e.b,Pa),ko.subVectors(e.c,Pa),Sr.subVectors(Uo,Fo),wr.subVectors(ko,Uo),Yr.subVectors(Fo,ko);let t=[0,-Sr.z,Sr.y,0,-wr.z,wr.y,0,-Yr.z,Yr.y,Sr.z,0,-Sr.x,wr.z,0,-wr.x,Yr.z,0,-Yr.x,-Sr.y,Sr.x,0,-wr.y,wr.x,0,-Yr.y,Yr.x,0];return!uh(t,Fo,Uo,ko,oc)||(t=[1,0,0,0,1,0,0,0,1],!uh(t,Fo,Uo,ko,oc))?!1:(ac.crossVectors(Sr,wr),t=[ac.x,ac.y,ac.z],uh(t,Fo,Uo,ko,oc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ds).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ds).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Js[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Js[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Js[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Js[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Js[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Js[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Js[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Js[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Js),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Js=[new C,new C,new C,new C,new C,new C,new C,new C],ds=new C,rc=new Si,Fo=new C,Uo=new C,ko=new C,Sr=new C,wr=new C,Yr=new C,Pa=new C,oc=new C,ac=new C,Kr=new C;function uh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Kr.fromArray(n,r);let a=s.x*Math.abs(Kr.x)+s.y*Math.abs(Kr.y)+s.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Fn=new C,lc=new Se,av=0,pi=class extends hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:av++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tf,this.updateRanges=[],this.gpuType=Zi,this.version=0,this._normalizationScale=e!==void 0?id(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix3(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):of(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):af(e,this.array)}};var Za=class extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ja=class extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}},lv=new Si,Ia=new C,dh=new C,Ki=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):lv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(dh)),this.expandByPoint(Ia.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cv=0,$i=new wt,hh=new cn,Bo=new C,Fi=new Si,La=new Si,Kn=new C,qt=class n extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ny(e)?Ja:Za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new At().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $i.makeRotationFromQuaternion(e),this.applyMatrix4($i),this}rotateX(e){return $i.makeRotationX(e),this.applyMatrix4($i),this}rotateY(e){return $i.makeRotationY(e),this.applyMatrix4($i),this}rotateZ(e){return $i.makeRotationZ(e),this.applyMatrix4($i),this}translate(e,t,i){return $i.makeTranslation(e,t,i),this.applyMatrix4($i),this}scale(e,t,i){return $i.makeScale(e,t,i),this.applyMatrix4($i),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];La.setFromBufferAttribute(a),this.morphTargetsRelative?(Kn.addVectors(Fi.min,La.min),Fi.expandByPoint(Kn),Kn.addVectors(Fi.max,La.max),Fi.expandByPoint(Kn)):(Fi.expandByPoint(La.min),Fi.expandByPoint(La.max))}Fi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Kn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Kn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kn.fromBufferAttribute(a,c),l&&(Bo.fromBufferAttribute(e,c),Kn.add(Bo)),s=Math.max(s,i.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new C,l[A]=new C;let u=new C,d=new C,h=new C,f=new Se,p=new Se,x=new Se,m=new C,g=new C;function _(A,R,P){c[A]=c[R]=c[P]=1,u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,P),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,P),d.sub(u),h.sub(u),p.sub(f),x.sub(f);let U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(U),a[A].add(m),a[R].add(m),a[P].add(m),l[A].add(g),l[R].add(g),l[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,R=b.length;A<R;++A){let P=b[A],U=P.start,H=P.count;for(let I=U,Y=U+H;I<Y;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new C,M=new C,w=new C,v=new C;function S(A){w.fromBufferAttribute(s,A),v.copy(w);let R=a[A];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(v,R);let U=M.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,U)}for(let A=0,R=i.count;A<R;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kn.fromBufferAttribute(e,t),Kn.normalize(),e.setXYZ(t,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new pi(h,u,d)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ja=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tf,this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Vp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Vp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=dr()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var _i=new C,na=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?id(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix4(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.applyNormalMatrix(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_i.fromBufferAttribute(this,t),_i.transformDirection(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):of(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):af(e,this.data.array)}},fh=new C,uv=new C,dv=new At,bi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=fh.subVectors(i,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(fh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||dv.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hv=0,fs=class extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Hs,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Dr,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Us=class extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zo,Da=new C,Ho=new C,Go=new C,Vo=new Se,Na=new Se,Q0=new wt,cc=new C,Oa=new C,uc=new C,Wp=new Se,ph=new Se,Xp=new Se,ir=class extends cn{constructor(e=new Us){if(super(),this.isSprite=!0,this.type="Sprite",zo===void 0){zo=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ja(t,5);zo.setIndex([0,1,2,0,2,3]),zo.setAttribute("position",new na(i,3,0,!1)),zo.setAttribute("uv",new na(i,2,3,!1))}this.geometry=zo,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ho.setFromMatrixScale(this.matrixWorld),Q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Go.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ho.multiplyScalar(-Go.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;dc(cc.set(-.5,-.5,0),Go,o,Ho,s,r),dc(Oa.set(.5,-.5,0),Go,o,Ho,s,r),dc(uc.set(.5,.5,0),Go,o,Ho,s,r),Wp.set(0,0),ph.set(1,0),Xp.set(1,1);let a=e.ray.intersectTriangle(cc,Oa,uc,!1,Da);if(a===null&&(dc(Oa.set(-.5,.5,0),Go,o,Ho,s,r),ph.set(0,1),a=e.ray.intersectTriangle(cc,uc,Oa,!1,Da),a===null))return;let l=e.ray.origin.distanceTo(Da);l<e.near||l>e.far||t.push({distance:l,point:Da.clone(),uv:Qs.getInterpolation(Da,cc,Oa,uc,Wp,ph,Xp,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function dc(n,e,t,i,s,r){Vo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Na.x=r*Vo.x-s*Vo.y,Na.y=s*Vo.x+r*Vo.y):Na.copy(Vo),n.copy(e),n.x+=Na.x,n.y+=Na.y,n.applyMatrix4(Q0)}var js=new C,mh=new C,hc=new C,fc=new C,sr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,js)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=js.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(js.copy(this.origin).addScaledVector(this.direction,t),js.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mh.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),fc.copy(this.origin).sub(mh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(hc),a=fc.dot(this.direction),l=-fc.dot(hc),c=fc.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mh).addScaledVector(hc,h),f}intersectSphere(e,t){if(e.radius<0)return null;js.subVectors(e.center,this.origin);let i=js.dot(this.direction),s=js.dot(js)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,js)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,b=i.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(u),v,S,A,R,P,U,H,I,Y,ee,J,Q;if(y>=M&&y>=w?(A=l,U=d,Y=p,Q=g,l>=0?(v=c,S=u,R=h,P=f,H=x,I=m,ee=_,J=b):(v=u,S=c,R=f,P=h,H=m,I=x,ee=b,J=_)):M>=w?(A=c,U=h,Y=x,Q=_,c>=0?(v=u,S=l,R=f,P=d,H=m,I=p,ee=b,J=g):(v=l,S=u,R=d,P=f,H=p,I=m,ee=g,J=b)):(A=u,U=f,Y=m,Q=b,u>=0?(v=l,S=c,R=d,P=h,H=p,I=x,ee=g,J=_):(v=c,S=l,R=h,P=d,H=x,I=p,ee=_,J=g)),A===0)return null;let z=v/A,W=S/A,O=1/A,V=R-z*U,oe=P-W*U,j=H-z*Y,he=I-W*Y,fe=ee-z*Q,ne=J-W*Q,xe=fe*he-ne*j,Le=V*ne-oe*fe,ct=j*oe-he*V;if(s){if(xe<0||Le<0||ct<0)return null}else if((xe<0||Le<0||ct<0)&&(xe>0||Le>0||ct>0))return null;let We=xe+Le+ct;if(We===0)return null;let et=O*(xe*U+Le*Y+ct*Q);return(We>0?et<0:et>0)?null:this.at(et/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qp=new wt,Zr=new sr,pc=new Ki,$p=new C,mc=new C,gc=new C,xc=new C,gh=new C,yc=new C,Yp=new C,vc=new C,rt=class extends cn{constructor(e=new qt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(gh.fromBufferAttribute(d,e),o?yc.addScaledVector(gh,u):yc.addScaledVector(gh.sub(t),u))}t.add(yc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),Zr.copy(e.ray).recast(e.near),!(pc.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(pc,$p)===null||Zr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(qp.copy(r).invert(),Zr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&Zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);s=_c(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=_c(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=y,v=y+1,S=y+2;s=_c(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,b=m+1,y=m+2;s=_c(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fv(n,e,t,i,s,r,o,a){let l;if(e.side===ri?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zs,a),l===null)return null;vc.copy(a),vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:n}}function _c(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mc),n.getVertexPosition(l,gc),n.getVertexPosition(c,xc);let u=fv(n,e,t,i,mc,gc,xc,Yp);if(u){let d=new C;Qs.getBarycoord(Yp,mc,gc,xc,d),s&&(u.uv=Qs.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=Qs.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=Qs.getInterpolatedAttribute(o,a,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new C,materialIndex:0};Qs.getNormal(mc,gc,xc,h.normal),u.face=h,u.barycoord=d}return u}var Qa=class extends Mi{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Jn,u=Jn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class extends pi{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wo=new wt,Kp=new wt,bc=[],Zp=new Si,pv=new wt,Fa=new rt,Ua=new Ki,Bn=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wo),Zp.copy(e.boundingBox).applyMatrix4(Wo),this.boundingBox.union(Zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wo),Ua.copy(e.boundingSphere).applyMatrix4(Wo),this.boundingSphere.union(Ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wo),Kp.multiplyMatrices(i,Wo),Fa.matrixWorld=Kp,Fa.raycast(e,bc);for(let o=0,a=bc.length;o<a;o++){let l=bc[o];l.instanceId=r,l.object=this,t.push(l)}bc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qa(new Float32Array(s*this.count),s,this.count,Mu,Zi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Jr=new Ki,mv=new Se(.5,.5),Mc=new C,Tr=class{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,g-p,M-_).normalize(),s[1].setComponents(c+o,f+u,g+p,M+_).normalize(),s[2].setComponents(c+a,f+d,g+x,M+b).normalize(),s[3].setComponents(c-a,f-d,g-x,M-b).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,g-m,M-y).normalize();else if(s[4].setComponents(c-l,f-h,g-m,M-y).normalize(),t===Yi)s[5].setComponents(c+l,f+h,g+m,M+y).normalize();else if(t===Zo)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);let t=mv.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Mc.x=s.normal.x>0?e.max.x:e.min.x,Mc.y=s.normal.y>0?e.max.y:e.min.y,Mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jp=new wt,qc=class n{constructor(){this.coordinateSystem=Yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Tr),i[s].setFromProjectionMatrix(Jp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Tr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ia=class extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$c=new C,Yc=new C,jp=new wt,ka=new sr,Sc=new Ki,xh=new C,Qp=new C,Kc=class extends cn{constructor(e=new qt,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$c.fromBufferAttribute(t,s-1),Yc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$c.distanceTo(Yc);e.setAttribute("lineDistance",new pt(i,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),Sc.radius+=r,e.ray.intersectsSphere(Sc)===!1)return;jp.copy(s).invert(),ka.copy(e.ray).applyMatrix4(jp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),_=u.getX(x+1),b=wc(this,e,ka,l,g,_,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=wc(this,e,ka,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=wc(this,e,ka,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=wc(this,e,ka,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if($c.fromBufferAttribute(a,s),Yc.fromBufferAttribute(a,r),t.distanceSqToSegment($c,Yc,xh,Qp)>i)return;xh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(xh);if(!(c<e.near||c>e.far))return{distance:c,point:Qp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var e0=new C,t0=new C,el=class extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)e0.fromBufferAttribute(t,s),t0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+e0.distanceTo(t0);e.setAttribute("lineDistance",new pt(i,1))}else St("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zc=class extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},n0=new wt,Th=new sr,Ec=new Ki,Tc=new C,tl=class extends cn{constructor(e=new qt,t=new Zc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;n0.copy(s).invert(),Th.copy(e.ray).applyMatrix4(n0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,x=f;p<x;p++){let m=c.getX(p);Tc.fromBufferAttribute(d,m),i0(Tc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,x=f;p<x;p++)Tc.fromBufferAttribute(d,p),i0(Tc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function i0(n,e,t,i,s,r,o){let a=Th.distanceSqToPoint(n);if(a<t){let l=new C;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends Mi{constructor(e=[],t=lo,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},il=class extends Mi{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rr=class extends Mi{constructor(e,t,i=gs,s,r,o,a=Jn,l=Jn,c,u=nr,d=1){if(u!==nr&&u!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sl=class extends rr{constructor(e,t=gs,i=lo,s,r,o=Jn,a=Jn,l,c=nr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},rl=class extends Mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$t=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function p(x,m,g,_,b,y,M,w,v,S,A){let R=y/v,P=M/S,U=y/2,H=M/2,I=w/2,Y=v+1,ee=S+1,J=0,Q=0,z=new C;for(let W=0;W<ee;W++){let O=W*P-H;for(let V=0;V<Y;V++){let oe=V*R-U;z[x]=oe*_,z[m]=O*b,z[g]=I,c.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[g]=w>0?1:-1,u.push(z.x,z.y,z.z),d.push(V/v),d.push(1-W/S),J+=1}}for(let W=0;W<S;W++)for(let O=0;O<v;O++){let V=h+O+Y*W,oe=h+O+Y*(W+1),j=h+(O+1)+Y*(W+1),he=h+(O+1)+Y*W;l.push(V,oe,he),l.push(oe,j,he),Q+=6}a.addGroup(f,Q,A),f+=Q,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Dn=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function _(){let y=new C,M=new C,w=0,v=(t-e)/i;for(let S=0;S<=r;S++){let A=[],R=S/r,P=R*(t-e)+e;for(let U=0;U<=s;U++){let H=U/s,I=H*l+a,Y=Math.sin(I),ee=Math.cos(I);M.x=P*Y,M.y=-R*i+m,M.z=P*ee,d.push(M.x,M.y,M.z),y.set(Y,v,ee).normalize(),h.push(y.x,y.y,y.z),f.push(H,1-R),A.push(p++)}x.push(A)}for(let S=0;S<s;S++)for(let A=0;A<r;A++){let R=x[A][S],P=x[A+1][S],U=x[A+1][S+1],H=x[A][S+1];(e>0||A!==0)&&(u.push(R,P,H),w+=3),(t>0||A!==r-1)&&(u.push(P,U,H),w+=3)}c.addGroup(g,w,0),g+=w}function b(y){let M=p,w=new Se,v=new C,S=0,A=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),p++;let P=p;for(let U=0;U<=s;U++){let I=U/s*l+a,Y=Math.cos(I),ee=Math.sin(I);v.x=A*ee,v.y=m*R,v.z=A*Y,d.push(v.x,v.y,v.z),h.push(0,R,0),w.x=Y*.5+.5,w.y=ee*.5*R+.5,f.push(w.x,w.y),p++}for(let U=0;U<s;U++){let H=M+U,I=P+U;y===!0?u.push(I,I+1,H):u.push(I+1,I,H),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ks=class n extends zn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){St("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new wt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},sa=class extends Ui{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jc=class extends sa{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var s0=new C,r0=new C,yh=new lf,vh=new lf,_h=new lf,jc=class extends Ui{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(r0.subVectors(s[0],s[1]).add(s[0]),c=r0);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(s0.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=s0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),yh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),vh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),_h.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(yh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),vh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_h.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(yh.calc(l),vh.calc(l),_h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function o0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function gv(n,e){let t=1-n;return t*t*e}function xv(n,e){return 2*(1-n)*n*e}function yv(n,e){return n*n*e}function Ga(n,e,t,i){return gv(n,e)+xv(n,t)+yv(n,i)}function vv(n,e){let t=1-n;return t*t*t*e}function _v(n,e){let t=1-n;return 3*t*t*n*e}function bv(n,e){return 3*(1-n)*n*n*e}function Mv(n,e){return n*n*n*e}function Va(n,e,t,i,s){return vv(n,e)+_v(n,t)+bv(n,i)+Mv(n,s)}var ol=class extends Ui{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qc=class extends Ui{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Va(e,s.x,r.x,o.x,a.x),Va(e,s.y,r.y,o.y,a.y),Va(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends Ui{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends Ui{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Ui{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ga(e,s.x,r.x,o.x),Ga(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends Ui{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ga(e,s.x,r.x,o.x),Ga(e,s.y,r.y,o.y),Ga(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(o0(a,l.x,c.x,u.x,d.x),o0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},eu=Object.freeze({__proto__:null,ArcCurve:Jc,CatmullRomCurve3:jc,CubicBezierCurve:ol,CubicBezierCurve3:Qc,EllipseCurve:sa,LineCurve:al,LineCurve3:to,QuadraticBezierCurve:ll,QuadraticBezierCurve3:no,SplineCurve:cl}),ra=class extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new eu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},or=class extends ra{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new al(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ll(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ol(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new cl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new sa(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ps=class extends or{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new or().fromJSON(s))}return this}};function Sv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=em(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Rv(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return ul(r,o,t,a,l,c,0),o}function em(n,e,t,i,s){let r;if(s===Bv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=a0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=a0(o/i|0,n[o],n[o+1],r);return r&&oa(r,r.next)&&(hl(r),r=r.next),r}function io(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(oa(t,t.next)||An(t.prev,t,t.next)===0)){if(hl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ul(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Dv(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ev(n,i,s,r):wv(n)){e.push(l.i,n.i,c.i),hl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Tv(io(n),e),ul(n,e,t,i,s,r,2)):o===2&&Av(n,e,t,i,s,r):ul(io(n),e,t,i,s,r,1);break}}}function wv(n){let e=n.prev,t=n,i=n.next;if(An(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Ba(s,a,r,l,o,c,p.x,p.y)&&An(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ev(n,e,t,i){let s=n.prev,r=n,o=n.next;if(An(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Ah(f,p,e,t,i),_=Ah(x,m,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=g&&y&&y.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Ba(a,u,l,d,c,h,b.x,b.y)&&An(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Ba(a,u,l,d,c,h,y.x,y.y)&&An(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&Ba(a,u,l,d,c,h,b.x,b.y)&&An(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&Ba(a,u,l,d,c,h,y.x,y.y)&&An(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Tv(n,e){let t=n;do{let i=t.prev,s=t.next.next;!oa(i,s)&&nm(i,t,t.next,s)&&dl(i,s)&&dl(s,i)&&(e.push(i.i,t.i,s.i),hl(t),hl(t.next),t=n=s),t=t.next}while(t!==n);return io(t)}function Av(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Fv(o,a)){let l=im(o,a);o=io(o,o.next),l=io(l,l.next),ul(o,e,t,i,s,r,0),ul(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Rv(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=em(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ov(c))}s.sort(Cv);for(let r=0;r<s.length;r++)t=Pv(s[r],t);return t}function Cv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Pv(n,e){let t=Iv(n,e);if(!t)return e;let i=im(t,n);return io(i,i.next),io(t,t.next)}function Iv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(oa(n,t))return t;do{if(oa(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);dl(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Lv(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Lv(n,e){return An(n.prev,n,e.prev)<0&&An(e.next,n,n.next)<0}function Dv(n,e,t,i){let s=n;do s.z===0&&(s.z=Ah(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Nv(s)}function Nv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Ah(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ov(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ba(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&tm(n,e,t,i,s,r,o,a)}function Fv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Uv(n,e)&&(dl(n,e)&&dl(e,n)&&kv(n,e)&&(An(n.prev,n,e.prev)||An(n,e.prev,e))||oa(n,e)&&An(n.prev,n,n.next)>0&&An(e.prev,e,e.next)>0)}function An(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function oa(n,e){return n.x===e.x&&n.y===e.y}function nm(n,e,t,i){let s=Rc(An(n,e,t)),r=Rc(An(n,e,i)),o=Rc(An(t,i,n)),a=Rc(An(t,i,e));return!!(s!==r&&o!==a||s===0&&Ac(n,t,e)||r===0&&Ac(n,i,e)||o===0&&Ac(t,n,i)||a===0&&Ac(t,e,i))}function Ac(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Rc(n){return n>0?1:n<0?-1:0}function Uv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&nm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dl(n,e){return An(n.prev,n,n.next)<0?An(n,e,n.next)>=0&&An(n,n.prev,e)>=0:An(n,e,n.prev)<0||An(n,n.next,e)<0}function kv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function im(n,e){let t=Rh(n.i,n.x,n.y),i=Rh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function a0(n,e,t,i){let s=Rh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ch=class{static triangulate(e,t,i=2){return Sv(e,t,i)}},jr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];l0(e),c0(i,e);let o=e.length;t.forEach(l0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,c0(i,t[l]);let a=Ch.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function l0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function c0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Bs=class n extends qt{constructor(e=new ps([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:zv,b,y=!1,M,w,v,S;if(g){b=g.getSpacedPoints(u),y=!0,h=!1;let K=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,K),w=new C,v=new C,S=new C}h||(m=0,f=0,p=0,x=0);let A=a.extractPoints(c),R=A.shape,P=A.holes;if(!jr.isClockWise(R)){R=R.reverse();for(let K=0,B=P.length;K<B;K++){let q=P[K];jr.isClockWise(q)&&(P[K]=q.reverse())}}function H(K){let q=10000000000000001e-36,se=K[0];for(let $=1;$<=K.length;$++){let ue=$%K.length,Pe=K[ue],F=Pe.x-se.x,re=Pe.y-se.y,de=F*F+re*re,N=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(se.x),Math.abs(se.y)),Je=q*N*N;if(de<=Je){K.splice(ue,1),$--;continue}se=Pe}}H(R),P.forEach(H);let I=P.length,Y=R;for(let K=0;K<I;K++){let B=P[K];R=R.concat(B)}function ee(K,B,q){return B||Et("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(B,q)}let J=R.length;function Q(K,B,q){let se,$,ue,Pe=K.x-B.x,F=K.y-B.y,re=q.x-K.x,de=q.y-K.y,N=Pe*Pe+F*F,Je=Pe*de-F*re;if(Math.abs(Je)>Number.EPSILON){let dt=Math.sqrt(N),_t=Math.sqrt(re*re+de*de),Re=B.x-F/dt,Ee=B.y+Pe/dt,Ae=q.x-de/_t,De=q.y+re/_t,L=((Ae-Re)*de-(De-Ee)*re)/(Pe*de-F*re);se=Re+Pe*L-K.x,$=Ee+F*L-K.y;let E=se*se+$*$;if(E<=2)return new Se(se,$);ue=Math.sqrt(E/2)}else{let dt=!1;Pe>Number.EPSILON?re>Number.EPSILON&&(dt=!0):Pe<-Number.EPSILON?re<-Number.EPSILON&&(dt=!0):Math.sign(F)===Math.sign(de)&&(dt=!0),dt?(se=-F,$=Pe,ue=Math.sqrt(N)):(se=Pe,$=F,ue=Math.sqrt(N/2))}return new Se(se/ue,$/ue)}let z=[];for(let K=0,B=Y.length,q=B-1,se=K+1;K<B;K++,q++,se++)q===B&&(q=0),se===B&&(se=0),z[K]=Q(Y[K],Y[q],Y[se]);let W=[],O,V=z.concat();for(let K=0,B=I;K<B;K++){let q=P[K];O=[];for(let se=0,$=q.length,ue=$-1,Pe=se+1;se<$;se++,ue++,Pe++)ue===$&&(ue=0),Pe===$&&(Pe=0),O[se]=Q(q[se],q[ue],q[Pe]);W.push(O),V=V.concat(O)}let oe;if(m===0)oe=jr.triangulateShape(Y,P);else{let K=[],B=[];for(let q=0;q<m;q++){let se=q/m,$=f*Math.cos(se*Math.PI/2),ue=p*Math.sin(se*Math.PI/2)+x;for(let Pe=0,F=Y.length;Pe<F;Pe++){let re=ee(Y[Pe],z[Pe],ue);Le(re.x,re.y,-$),se===0&&K.push(re)}for(let Pe=0,F=I;Pe<F;Pe++){let re=P[Pe];O=W[Pe];let de=[];for(let N=0,Je=re.length;N<Je;N++){let dt=ee(re[N],O[N],ue);Le(dt.x,dt.y,-$),se===0&&de.push(dt)}se===0&&B.push(de)}}oe=jr.triangulateShape(K,B)}let j=oe.length,he=p+x;for(let K=0;K<J;K++){let B=h?ee(R[K],V[K],he):R[K];y?(v.copy(M.normals[0]).multiplyScalar(B.x),w.copy(M.binormals[0]).multiplyScalar(B.y),S.copy(b[0]).add(v).add(w),Le(S.x,S.y,S.z)):Le(B.x,B.y,0)}for(let K=1;K<=u;K++)for(let B=0;B<J;B++){let q=h?ee(R[B],V[B],he):R[B];y?(v.copy(M.normals[K]).multiplyScalar(q.x),w.copy(M.binormals[K]).multiplyScalar(q.y),S.copy(b[K]).add(v).add(w),Le(S.x,S.y,S.z)):Le(q.x,q.y,d/u*K)}for(let K=m-1;K>=0;K--){let B=K/m,q=f*Math.cos(B*Math.PI/2),se=p*Math.sin(B*Math.PI/2)+x;for(let $=0,ue=Y.length;$<ue;$++){let Pe=ee(Y[$],z[$],se);Le(Pe.x,Pe.y,d+q)}for(let $=0,ue=P.length;$<ue;$++){let Pe=P[$];O=W[$];for(let F=0,re=Pe.length;F<re;F++){let de=ee(Pe[F],O[F],se);y?Le(de.x,de.y+b[u-1].y,b[u-1].x+q):Le(de.x,de.y,d+q)}}}fe(),ne();function fe(){let K=s.length/3;if(h){let B=0,q=J*B;for(let se=0;se<j;se++){let $=oe[se];ct($[2]+q,$[1]+q,$[0]+q)}B=u+m*2,q=J*B;for(let se=0;se<j;se++){let $=oe[se];ct($[0]+q,$[1]+q,$[2]+q)}}else{for(let B=0;B<j;B++){let q=oe[B];ct(q[2],q[1],q[0])}for(let B=0;B<j;B++){let q=oe[B];ct(q[0]+J*u,q[1]+J*u,q[2]+J*u)}}i.addGroup(K,s.length/3-K,0)}function ne(){let K=s.length/3,B=0;xe(Y,B),B+=Y.length;for(let q=0,se=P.length;q<se;q++){let $=P[q];xe($,B),B+=$.length}i.addGroup(K,s.length/3-K,1)}function xe(K,B){let q=K.length;for(;--q>=0;){let se=q,$=q-1;$<0&&($=K.length-1);for(let ue=0,Pe=u+m*2;ue<Pe;ue++){let F=J*ue,re=J*(ue+1),de=B+se+F,N=B+$+F,Je=B+$+re,dt=B+se+re;We(de,N,Je,dt)}}}function Le(K,B,q){l.push(K),l.push(B),l.push(q)}function ct(K,B,q){et(K),et(B),et(q);let se=s.length/3,$=_.generateTopUV(i,s,se-3,se-2,se-1);He($[0]),He($[1]),He($[2])}function We(K,B,q,se){et(K),et(B),et(se),et(B),et(q),et(se);let $=s.length/3,ue=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);He(ue[0]),He(ue[1]),He(ue[3]),He(ue[1]),He(ue[2]),He(ue[3])}function et(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function He(K){r.push(K.x),r.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Hv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eu[s.type]().fromJSON(s)),new n(i,e.options)}},zv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(h,1-p),new Se(x,1-g)]:[new Se(a,1-l),new Se(u,1-d),new Se(f,1-p),new Se(m,1-g)]}};function Hv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fl=class n extends qt{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Nt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new C,h=new Se,f=new C,p=new C,x=new C,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let b=i+_*u*s,y=Math.sin(b),M=Math.cos(b);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*M,o.push(d.x,d.y,d.z),h.x=_/t,h.y=w/(e.length-1),a.push(h.x,h.y);let v=l[3*w+0]*y,S=l[3*w+1],A=l[3*w+0]*M;c.push(v,S,A)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,M=y,w=y+e.length,v=y+e.length+1,S=y+1;r.push(M,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var vt=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let b=_+c*g,y=_+c*(g+1),M=_+1+c*(g+1),w=_+1+c*g;f.push(b,y,w),f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Cn=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new C,p=new Se;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,y=_+i+1,M=_+i+2,w=_+1;a.push(b,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nn=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new C,h=new C,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,y=o+b*a,M=e*Math.cos(y),w=Math.sqrt(e*e-M*M),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let A=S/t,R=s+A*r;d.x=-w*Math.cos(R),d.y=M,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+v,1-b),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=u[g][_+1],y=u[g][_],M=u[g+1][_],w=u[g+1][_+1];(g!==0||o>0)&&f.push(b,y,w),(g!==i-1||l<Math.PI)&&f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wi=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,p=new C;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pl=class n extends qt{constructor(e=new no(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Se,u=new C,d=[],h=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){u=e.getPointAt(b/t,u);let y=o.normals[b],M=o.binormals[b];for(let w=0;w<=s;w++){let v=w/s*Math.PI*2,S=Math.sin(v),A=-Math.cos(v);l.x=A*y.x+S*M.x,l.y=A*y.y+S*M.y,l.z=A*y.z+S*M.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let M=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),v=(s+1)*b+y,S=(s+1)*(b-1)+y;p.push(M,w,S),p.push(w,v,S)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new eu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function uo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(u0(s))s.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(u0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gi(n){let e={};for(let t=0;t<n.length;t++){let i=uo(n[t]);for(let s in i)e[s]=i[s]}return e}function u0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Gv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}var sd={clone:uo,merge:gi},Vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vv,this.fragmentShader=Wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new At().fromArray(s.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},aa=class extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ar=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var tu=class extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nu=class extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ar=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},iu=class extends Ar{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wh:r=e,a=2*t-i;break;case Eh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:o=e,l=2*i-t;break;case Eh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,b=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+_*o[c+M]+b*o[l+M]+y*o[d+M];return r}},su=class extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},ru=class extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ou=class extends Ar{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,_=d[g],b=d[g+1],y=e*h+p*2,M=u[y],w=u[y+1],v=qv(i,t,_,M,s);r[p]=sm(v,x,b,w,m)}return r}};function sm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Xv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function qv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=sm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Xv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ki=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Cc(e.settings)&&(i.settings={inTangents:Xo(e.settings.inTangents,Array),outTangents:Xo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ou(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Gc:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break;case Mh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return St("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Gc;case this.InterpolantFactoryMethodSmooth:return Lc;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Cc(this.settings)&&(d0(this.settings.inTangents,e),d0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Cc(this.settings)&&(h0(this.settings.inTangents,e),h0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Et("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Et("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Oy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Et("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function d0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function h0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Gc;var Rr=class extends ki{constructor(e,t,i){super(e,t,i)}};Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Wa;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}};au.prototype.ValueTypeName="color";var lu=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}};lu.prototype.ValueTypeName="number";var cu=class extends Ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ml=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cu(this.times,this.values,this.getValueSize(),e)}};ml.prototype.ValueTypeName="quaternion";ml.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends ki{constructor(e,t,i){super(e,t,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Wa;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}};uu.prototype.ValueTypeName="vector";var du=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new du,hu=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};hu.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xl=class extends gl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bh=new wt,f0=new C,p0=new C,fu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;f0.setFromMatrixPosition(e.matrixWorld),t.position.copy(f0),p0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(bh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Zo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pc=new C,Ic=new Mn,Os=new C,yl=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,Ic,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,Os.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Pc,Ic,Os),Os.x===1&&Os.y===1&&Os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,Ic,Os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Er=new C,m0=new Se,g0=new Se,Zn=class extends yl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,m0,g0),t.subVectors(g0,m0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var lr=class extends yl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ph=class extends fu{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},la=class extends gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var vl=class extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var qo=-90,$o=1,ca=class extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zn(qo,$o,e,t);s.layers=this.layers,this.add(s);let r=new Zn(qo,$o,e,t);r.layers=this.layers,this.add(r);let o=new Zn(qo,$o,e,t);o.layers=this.layers,this.add(o);let a=new Zn(qo,$o,e,t);a.layers=this.layers,this.add(a);let l=new Zn(qo,$o,e,t);l.layers=this.layers,this.add(l);let c=new Zn(qo,$o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},pu=class extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var uf="\\[\\]\\.:\\/",$v=new RegExp("["+uf+"]","g"),df="[^"+uf+"]",Yv="[^"+uf.replace("\\.","")+"]",Kv=/((?:WC+[\/:])*)/.source.replace("WC",df),Zv=/(WCOD+)?/.source.replace("WCOD",Yv),Jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),Qv=new RegExp("^"+Kv+Zv+Jv+jv+"$"),e_=["material","materials","bones","map"],Ih=class{constructor(e,t,i){let s=i||bn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($v,"")}static parseTrackName(e){let t=Qv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);e_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){St("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bn.Composite=Ih;bn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bn.prototype.GetterByBindingType=[bn.prototype._getValue_direct,bn.prototype._getValue_array,bn.prototype._getValue_arrayElement,bn.prototype._getValue_toArray];bn.prototype.SetterByBindingTypeAndVersioning=[[bn.prototype._setValue_direct,bn.prototype._setValue_direct_setNeedsUpdate,bn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_array,bn.prototype._setValue_array_setNeedsUpdate,bn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_arrayElement,bn.prototype._setValue_arrayElement_setNeedsUpdate,bn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bn.prototype._setValue_fromArray,bn.prototype._setValue_fromArray_setNeedsUpdate,bn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fA=new Float32Array(1);var x0=new wt,so=class{constructor(e,t,i=0,s=1/0){this.ray=new sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return x0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(x0),this}intersectObject(e,t=!0,i=[]){return Lh(e,this,i,t),i.sort(y0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,i,t);return i.sort(y0),i}};function y0(n,e){return n.distance-e.distance}function Lh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],e,t,!0)}}var ua=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var _l=class extends hs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hf(n,e,t,i){let s=t_(i);switch(t){case Zh:return n*e;case Mu:return n*e/s.components*s.byteLength;case Su:return n*e/s.components*s.byteLength;case Nr:return n*e*2/s.components*s.byteLength;case wu:return n*e*2/s.components*s.byteLength;case Jh:return n*e*3/s.components*s.byteLength;case xs:return n*e*4/s.components*s.byteLength;case Eu:return n*e*4/s.components*s.byteLength;case Sl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Au:case Cu:return Math.max(n,16)*Math.max(e,8)/4;case Tu:case Ru:return Math.max(n,8)*Math.max(e,8)/2;case Pu:case Iu:case Du:case Nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Al:case Ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $u:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zu:case Ju:case ju:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qu:case ed:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rl:case td:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t_(n){switch(n){case Ci:case qh:return{byteLength:1,components:1};case pa:case $h:case Ei:return{byteLength:2,components:1};case _u:case bu:return{byteLength:2,components:4};case gs:case vu:case Zi:return{byteLength:4,components:1};case Yh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Am(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function o_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,j_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:a_,alphahash_pars_fragment:l_,alphamap_fragment:c_,alphamap_pars_fragment:u_,alphatest_fragment:d_,alphatest_pars_fragment:h_,aomap_fragment:f_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:x_,beginnormal_vertex:y_,bsdfs:v_,iridescence_fragment:__,bumpmap_pars_fragment:b_,clipping_planes_fragment:M_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:w_,clipping_planes_vertex:E_,color_fragment:T_,color_pars_fragment:A_,color_pars_vertex:R_,color_vertex:C_,common:P_,defaultnormal_vertex:I_,displacementmap_pars_vertex:L_,displacementmap_vertex:D_,emissivemap_fragment:N_,emissivemap_pars_fragment:O_,colorspace_fragment:F_,colorspace_pars_fragment:U_,envmap_fragment:k_,envmap_common_pars_fragment:B_,envmap_pars_fragment:z_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:j_,envmap_vertex:G_,fog_vertex:V_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:q_,gradientmap_pars_fragment:$_,lightmap_pars_fragment:Y_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Z_,lights_pars_begin:J_,lights_toon_fragment:Q_,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:a1,lightprobes_pars_fragment:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:h1,map_fragment:f1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphinstance_vertex:v1,morphcolor_vertex:_1,morphnormal_vertex:b1,morphtarget_pars_vertex:M1,morphtarget_vertex:S1,normal_fragment_begin:w1,normal_fragment_maps:E1,normal_pars_fragment:T1,normal_pars_vertex:A1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:D1,opaque_fragment:N1,packing:O1,premultiplied_alpha_fragment:F1,project_vertex:U1,dithering_fragment:k1,dithering_pars_fragment:B1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:V1,shadowmap_vertex:W1,shadowmask_pars_fragment:X1,skinbase_vertex:q1,skinning_pars_vertex:$1,skinning_vertex:Y1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:J1,tonemapping_fragment:j1,tonemapping_pars_fragment:Q1,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:sb,worldpos_vertex:rb,background_vert:ob,background_frag:ab,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:db,depth_vert:hb,depth_frag:fb,distance_vert:pb,distance_frag:mb,equirect_vert:gb,equirect_frag:xb,linedashed_vert:yb,linedashed_frag:vb,meshbasic_vert:_b,meshbasic_frag:bb,meshlambert_vert:Mb,meshlambert_frag:Sb,meshmatcap_vert:wb,meshmatcap_frag:Eb,meshnormal_vert:Tb,meshnormal_frag:Ab,meshphong_vert:Rb,meshphong_frag:Cb,meshphysical_vert:Pb,meshphysical_frag:Ib,meshtoon_vert:Lb,meshtoon_frag:Db,points_vert:Nb,points_frag:Ob,shadow_vert:Fb,shadow_frag:Ub,sprite_vert:kb,sprite_frag:Bb},Qe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ws={basic:{uniforms:gi([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:gi([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:gi([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:gi([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:gi([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:gi([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:gi([Qe.points,Qe.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:gi([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:gi([Qe.common,Qe.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:gi([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:gi([Qe.sprite,Qe.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:gi([Qe.common,Qe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:gi([Qe.lights,Qe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ws.physical={uniforms:gi([Ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new At},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var rd={r:0,b:0,g:0},zb=new wt,Rm=new At;Rm.set(-1,0,0,0,1,0,0,0,1);function Hb(n,e,t,i,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1,y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new rt(new $t(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:uo(Ws.backgroundCube.uniforms),vertexShader:Ws.backgroundCube.vertexShader,fragmentShader:Ws.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rm),c.material.toneMapped=Xt.getTransfer(y.colorSpace)!==on,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new rt(new vt(2,2),new an({name:"BackgroundMaterial",uniforms:uo(Ws.background.uniforms),vertexShader:Ws.background.vertexShader,fragmentShader:Ws.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(y.colorSpace)!==on,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(rd,cf(n)),t.buffers.color.setClear(rd.r,rd.g,rd.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Gb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(P,U,H,I,Y){let ee=!1,J=d(P,I,H,U);r!==J&&(r=J,c(r.object)),ee=f(P,I,H,Y),ee&&p(P,I,H,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,y(P,U,H,I),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,U,H,I){let Y=I.wireframe===!0,ee=i[U.id];ee===void 0&&(ee={},i[U.id]=ee);let J=P.isInstancedMesh===!0?P.id:0,Q=ee[J];Q===void 0&&(Q={},ee[J]=Q);let z=Q[H.id];z===void 0&&(z={},Q[H.id]=z);let W=z[Y];return W===void 0&&(W=h(l()),z[Y]=W),W}function h(P){let U=[],H=[],I=[];for(let Y=0;Y<t;Y++)U[Y]=0,H[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,U,H,I){let Y=r.attributes,ee=U.attributes,J=0,Q=H.getAttributes();for(let z in Q)if(Q[z].location>=0){let O=Y[z],V=ee[z];if(V===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),O===void 0||O.attribute!==V||V&&O.data!==V.data)return!0;J++}return r.attributesNum!==J||r.index!==I}function p(P,U,H,I){let Y={},ee=U.attributes,J=0,Q=H.getAttributes();for(let z in Q)if(Q[z].location>=0){let O=ee[z];O===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(O=P.instanceColor));let V={};V.attribute=O,O&&O.data&&(V.data=O.data),Y[z]=V,J++}r.attributes=Y,r.attributesNum=J,r.index=I}function x(){let P=r.newAttributes;for(let U=0,H=P.length;U<H;U++)P[U]=0}function m(P){g(P,0)}function g(P,U){let H=r.newAttributes,I=r.enabledAttributes,Y=r.attributeDivisors;H[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),Y[P]!==U&&(n.vertexAttribDivisor(P,U),Y[P]=U)}function _(){let P=r.newAttributes,U=r.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==P[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function b(P,U,H,I,Y,ee,J){J===!0?n.vertexAttribIPointer(P,U,H,Y,ee):n.vertexAttribPointer(P,U,H,I,Y,ee)}function y(P,U,H,I){x();let Y=I.attributes,ee=H.getAttributes(),J=U.defaultAttributeValues;for(let Q in ee){let z=ee[Q];if(z.location>=0){let W=Y[Q];if(W===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let O=W.normalized,V=W.itemSize,oe=e.get(W);if(oe===void 0)continue;let j=oe.buffer,he=oe.type,fe=oe.bytesPerElement,ne=he===n.INT||he===n.UNSIGNED_INT||W.gpuType===vu;if(W.isInterleavedBufferAttribute){let xe=W.data,Le=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,ct=W.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let We=0;We<z.locationSize;We++)g(z.location+We,xe.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let We=0;We<z.locationSize;We++)m(z.location+We);n.bindBuffer(n.ARRAY_BUFFER,j);for(let We=0;We<z.locationSize;We++)b(z.location+We,V/z.locationSize,he,O,Le*fe,(ct+V/z.locationSize*We)*fe,ne)}else{if(W.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,W.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);n.bindBuffer(n.ARRAY_BUFFER,j);for(let xe=0;xe<z.locationSize;xe++)b(z.location+xe,V/z.locationSize,he,O,V*fe,V/z.locationSize*xe*fe,ne)}}else if(J!==void 0){let O=J[Q];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(z.location,O);break;case 3:n.vertexAttrib3fv(z.location,O);break;case 4:n.vertexAttrib4fv(z.location,O);break;default:n.vertexAttrib1fv(z.location,O)}}}}_()}function M(){A();for(let P in i){let U=i[P];for(let H in U){let I=U[H];for(let Y in I){let ee=I[Y];for(let J in ee)u(ee[J].object),delete ee[J];delete I[Y]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let U=i[P.id];for(let H in U){let I=U[H];for(let Y in I){let ee=I[Y];for(let J in ee)u(ee[J].object),delete ee[J];delete I[Y]}}delete i[P.id]}function v(P){for(let U in i){let H=i[U];for(let I in H){let Y=H[I];if(Y[P.id]===void 0)continue;let ee=Y[P.id];for(let J in ee)u(ee[J].object),delete ee[J];delete Y[P.id]}}}function S(P){for(let U in i){let H=i[U],I=P.isInstancedMesh===!0?P.id:0,Y=H[I];if(Y!==void 0){for(let ee in Y){let J=Y[ee];for(let Q in J)u(J[Q].object),delete J[Q];delete Y[ee]}delete H[I],Object.keys(H).length===0&&delete i[U]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Vb(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==xs&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ci&&v!==Zi&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(St("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&St("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:w}}function Xb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bi,a=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,y=g.clippingState||null;l.value=y,y=u(p,h,b,f);for(let M=0;M!==b;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Il=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:oo});r.uniforms.tEquirect.value=t;let o=new rt(s,r),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=Rn),new ca(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},om=256,qb=3,$b=20,Cm=256,Pm=16,Yb=3,Kb=new C,Zb=new ze,ga=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ca(1,10,null),this._boxMesh=new rt(new $t(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Kb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Zb));let m=new ca(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(om,rf(e))}_fromTexture(e,t){e.mapping===lo||e.mapping===fa?this._setSize(e.image.length===0?om:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=am(e,!1,!1),i=Math.log2(e)-qb;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=am(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===lo||e.mapping===fa?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Jb(),this._integrationMaterial=jb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pm);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Yb)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Cm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Qb());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function am(n,e,t){return new Il(n,{minFilter:ms,generateMipmaps:e,type:Ei,colorSpace:Xa,depthBuffer:t})}function Ll(n,e,t){return new an({name:n,uniforms:e,vertexShader:Bt.cube_vert,fragmentShader:t,side:ri,blending:oo,depthTest:!1,depthWrite:!1})}function Jb(){return Ll("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jb(){return Ll("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qb(){return Ll("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$b}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function lm(){return Ll("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cm(){return Ll("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===gu||f===xu)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new Il(p.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===gu||f===xu,x=f===lo||f===fa;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new ga(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new ga(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===gu?h.mapping=lo:f===xu&&(h.mapping=fa),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function tM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Qr("WebGLRenderer: "+i+" extension not supported."),s}}}function nM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?Ja:Za,y=new b(Math.ceil(_/3)*6,1),M=y.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,A=0;S<_;S+=3){let R=v[S+0],P=v[S+1],U=v[S+2];M[A++]=R,M[A++]=P,M[A++]=P,M[A++]=U,M[A++]=U,M[A++]=R}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let A=v+0,R=v+1,P=v+2;M[S++]=A,M[S++]=R,M[S++]=R,M[S++]=P,M[S++]=P,M[S++]=A}}y.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function h(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function iM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rM(n,e,t){let i=new WeakMap,s=new pn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let A=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*d),v=new Ka(w,y,M,d);v.type=Zi,v.needsUpdate=!0;let S=b*4;for(let R=0;R<d;R++){let P=m[R],U=g[R],H=_[R],I=y*M*4*R;for(let Y=0;Y<P.count;Y++){let ee=Y*S;f===!0&&(s.fromBufferAttribute(P,Y),w[I+ee+0]=s.x,w[I+ee+1]=s.y,w[I+ee+2]=s.z,w[I+ee+3]=0),p===!0&&(s.fromBufferAttribute(U,Y),w[I+ee+4]=s.x,w[I+ee+5]=s.y,w[I+ee+6]=s.z,w[I+ee+7]=0),x===!0&&(s.fromBufferAttribute(H,Y),w[I+ee+8]=s.x,w[I+ee+9]=s.y,w[I+ee+10]=s.z,w[I+ee+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Se(y,M)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function oM(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var aM={[Bh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Hh]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[bl]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function lM(n,e,t,i,s,r){let o=new ii(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new qt;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));let d=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new rt(u,d),f=new lr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,b=[],y=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(M,w)}},this.setEffects=function(M){b=M,y=b.length>0&&b[0].isRenderPass===!0;let w=o.width,v=o.height;b.length>0&&a===null&&(a=new ii(w,v,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ii(w,v,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(A=>A.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new rr(w,v),r===!0&&(c.format=cr,c.type=co)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let A=0;A<b.length;A++){let R=b[A];R.setSize&&R.setSize(w,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===Gs&&b.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Gs,!0},this.hasRenderPass=function(){return y},this.end=function(M,w){M.toneMapping=g,m=!0;let v=o,S=a;for(let A=0;A<b.length;A++){let R=b[A];R.enabled!==!1&&(R.render(M,S,v,w),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,d.defines={},Xt.getTransfer(p)===on&&(d.defines.SRGB_TRANSFER="");let A=aM[x];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Im=new Mi,Lm=new rr(1,1),Dm=new sl(1),Nm=new Ka,Om=new Xc,Fm=new nl,um=[],dm=[],hm=new Float32Array(16),fm=new Float32Array(9),pm=new Float32Array(4);function xa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Hn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ld(n,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;n.uniform2fv(this.addr,e),Gn(t,e)}}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;n.uniform3fv(this.addr,e),Gn(t,e)}}function hM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;n.uniform4fv(this.addr,e),Gn(t,e)}}function fM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,i))return;pm.set(i),n.uniformMatrix2fv(this.addr,!1,pm),Gn(t,i)}}function pM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,i))return;fm.set(i),n.uniformMatrix3fv(this.addr,!1,fm),Gn(t,i)}}function mM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(Hn(t,i))return;hm.set(i),n.uniformMatrix4fv(this.addr,!1,hm),Gn(t,i)}}function gM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;n.uniform2iv(this.addr,e),Gn(t,e)}}function yM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;n.uniform3iv(this.addr,e),Gn(t,e)}}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;n.uniform4iv(this.addr,e),Gn(t,e)}}function _M(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;n.uniform2uiv(this.addr,e),Gn(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;n.uniform3uiv(this.addr,e),Gn(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;n.uniform4uiv(this.addr,e),Gn(t,e)}}function cd(n){return n.version===0&&(n.compareFunction=ef,n.needsUpdate=!0),n}function wM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=cd(Lm):r=Im,t.setTexture2D(e||r,s)}function EM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Om,s)}function TM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=cd(Dm):r=Fm,t.setTextureCube(e||r,s)}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nm,s)}function RM(n){switch(n){case 5126:return cM;case 35664:return uM;case 35665:return dM;case 35666:return hM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return xM;case 35668:case 35672:return yM;case 35669:case 35673:return vM;case 5125:return _M;case 36294:return bM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function CM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){let t=xa(e,this.size,2);n.uniform2fv(this.addr,t)}function IM(n,e){let t=xa(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){let t=xa(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){let t=xa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NM(n,e){let t=xa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){let t=xa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function UM(n,e){n.uniform2iv(this.addr,e)}function kM(n,e){n.uniform3iv(this.addr,e)}function BM(n,e){n.uniform4iv(this.addr,e)}function zM(n,e){n.uniform1uiv(this.addr,e)}function HM(n,e){n.uniform2uiv(this.addr,e)}function GM(n,e){n.uniform3uiv(this.addr,e)}function VM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){let i=this.cache,s=e.length,r=ld(t,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=cd(Lm):o=Im;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XM(n,e,t){let i=this.cache,s=e.length,r=ld(t,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Om,r[o])}function qM(n,e,t){let i=this.cache,s=e.length,r=ld(t,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=cd(Dm):o=Fm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function $M(n,e,t){let i=this.cache,s=e.length,r=ld(t,s);Hn(i,r)||(n.uniform1iv(this.addr,r),Gn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nm,r[o])}function YM(n){switch(n){case 5126:return CM;case 35664:return PM;case 35665:return IM;case 35666:return LM;case 35674:return DM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return UM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return HM;case 36295:return GM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return $M}}var mf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}},gf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}},xf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ff=/(\w+)(\])?(\[|\.)?/g;function mm(n,e){n.seq.push(e),n.map[e.id]=e}function KM(n,e,t){let i=n.name,s=i.length;for(ff.lastIndex=0;;){let r=ff.exec(i),o=ff.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mm(t,c===void 0?new mf(a,n,e):new gf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xf(a),mm(t,d)),t=d}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);KM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function gm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ZM=37297,JM=0;function jM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var xm=new At;function QM(n){Xt._getMatrix(xm,Xt.workingColorSpace,n);let e=`mat3( ${xm.elements.map(t=>t.toFixed(4))} )`;switch(Xt.getTransfer(n)){case qa:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ym(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jM(n.getShaderSource(e),a)}else return r}function eS(n,e){let t=QM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tS={[Bh]:"Linear",[zh]:"Reinhard",[Hh]:"Cineon",[Gh]:"ACESFilmic",[Wh]:"AgX",[bl]:"Neutral",[Vh]:"Custom"};function nS(n,e){let t=tS[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var od=new C;function iS(){Xt.getLuminanceCoefficients(od);let n=od.x.toFixed(4),e=od.y.toFixed(4),t=od.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function rS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pl(n){return n!==""}function vm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _m(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(n){return n.replace(aS,lS)}function lS(n,e){let t=Bt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yf(t)}var cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(n){return n.replace(cS,uS)}function uS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var dS={[ro]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function hS(n){return dS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fS={[fa]:"ENVMAP_MODE_REFRACTION"};function pS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mS={[kh]:"ENVMAP_BLENDING_MULTIPLY",[U0]:"ENVMAP_BLENDING_MIX",[k0]:"ENVMAP_BLENDING_ADD"};function gS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mS[n.combine]||"ENVMAP_BLENDING_NONE"}function xS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pS(t),d=gS(t),h=sS(t),f=rS(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pl).join(`
`),m.length>0&&(m+=`
`)):(x=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gs?"#define TONE_MAPPING":"",t.toneMapping!==Gs?Bt.tonemapping_pars_fragment:"",t.toneMapping!==Gs?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),o=yf(o),o=vm(o,t),o=_m(o,t),a=yf(a),a=vm(a,t),a=_m(a,t),o=bm(o),a=bm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,b=g+m+a,y=gm(s,s.VERTEX_SHADER,_),M=gm(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(R){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(M)||"",I=P.trim(),Y=U.trim(),ee=H.trim(),J=!0,Q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,M);else{let z=ym(s,y,"vertex"),W=ym(s,M,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+z+`
`+W)}else I!==""?St("WebGLProgram: Program Info Log:",I):(Y===""||ee==="")&&(Q=!1);Q&&(R.diagnostics={runnable:J,programLog:I,vertexShader:{log:Y,prefix:x},fragmentShader:{log:ee,prefix:m}})}s.deleteShader(y),s.deleteShader(M),v=new ma(s,p),S=oS(s,p)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,ZM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=M,this}var yS=0,vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _f(e),t.set(e,i)),i}},_f=class{constructor(e){this.id=yS++,this.code=e,this.usedTimes=0}};function vS(n){return n===Nr||n===Al||n===Rl}function _S(n,e,t,i,s,r){let o=new ea,a=new vf,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,A,R,P,U){let H=R.fog,I=P.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,ee=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||Y,ee),Q=h[v.type],z=i.precision;v.precision!==null&&(z=i.getMaxPrecision(v.precision),z!==v.precision&&St("WebGLProgram.getParameters:",v.precision,"not supported, using",z,"instead."));let W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,O=W!==void 0?W.length:0,V=0;I.morphAttributes.position!==void 0&&(V=1),I.morphAttributes.normal!==void 0&&(V=2),I.morphAttributes.color!==void 0&&(V=3);let oe,j,he,fe;if(Q){let Ke=Ws[Q];oe=Ke.vertexShader,j=Ke.fragmentShader}else{oe=v.vertexShader,j=v.fragmentShader;let Ke=a.getVertexShaderStage(v),Wt=a.getFragmentShaderStage(v);a.update(v,Ke,Wt),he=Ke.id,fe=Wt.id}let ne=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,ct=P.isBatchedMesh===!0,We=!!v.map,et=!!v.matcap,He=!!J,K=He&&J.isPMREMTexture===!0,B=!!v.aoMap,q=!!v.lightMap,se=!!v.bumpMap&&v.wireframe===!1,$=!!v.normalMap,ue=!!v.displacementMap,Pe=!!v.emissiveMap,F=!!v.metalnessMap,re=!!v.roughnessMap,de=v.anisotropy>0,N=v.clearcoat>0,Je=v.diffuseRoughness>0,dt=v.dispersion>0,_t=v.retroreflectivity>0,Re=v.iridescence>0,Ee=v.sheen>0,Ae=v.transmission>0,De=de&&!!v.anisotropyMap,L=N&&!!v.clearcoatMap,E=N&&!!v.clearcoatNormalMap,Z=N&&!!v.clearcoatRoughnessMap,we=Je&&!!v.diffuseRoughnessMap,ve=Re&&!!v.iridescenceMap,Be=Re&&!!v.iridescenceThicknessMap,qe=Ee&&!!v.sheenColorMap,_e=Ee&&!!v.sheenRoughnessMap,ye=!!v.specularMap,Ge=!!v.specularColorMap,G=!!v.specularIntensityMap,be=Ae&&!!v.transmissionMap,ge=Ae&&!!v.thicknessMap,Ie=!!v.gradientMap,Ue=!!v.alphaMap,Ve=v.alphaTest>0,pe=!!v.alphaHash,Ct=!!v.extensions,Fe=Gs;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let mt=K?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,Tt={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:oe,fragmentShader:j,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:z,batching:ct,batchingColor:ct&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:et,envMap:He,envMapMode:He&&J.mapping,envMapPMREM:K,envMapMaxLod:K?mt.length-1:null,envMapSize:K?mt[0].width:null,aoMap:B,lightMap:q,bumpMap:se,normalMap:$,displacementMap:ue,emissiveMap:Pe,normalMapObjectSpace:$&&v.normalMapType===H0,normalMapTangentSpace:$&&v.normalMapType===nd,packedNormalMap:$&&v.normalMapType===nd&&vS(v.normalMap.format),metalnessMap:F,roughnessMap:re,anisotropy:de,anisotropyMap:De,clearcoat:N,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:Z,diffuseRoughness:Je,diffuseRoughnessMap:we,dispersion:dt,retroreflection:_t,iridescence:Re,iridescenceMap:ve,iridescenceThicknessMap:Be,sheen:Ee,sheenColorMap:qe,sheenRoughnessMap:_e,specularMap:ye,specularColorMap:Ge,specularIntensityMap:G,transmission:Ae,transmissionMap:be,thicknessMap:ge,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ve,alphaHash:pe,combine:v.combine,mapUv:We&&f(v.map.channel),aoMapUv:B&&f(v.aoMap.channel),lightMapUv:q&&f(v.lightMap.channel),bumpMapUv:se&&f(v.bumpMap.channel),normalMapUv:$&&f(v.normalMap.channel),displacementMapUv:ue&&f(v.displacementMap.channel),emissiveMapUv:Pe&&f(v.emissiveMap.channel),metalnessMapUv:F&&f(v.metalnessMap.channel),roughnessMapUv:re&&f(v.roughnessMap.channel),anisotropyMapUv:De&&f(v.anisotropyMap.channel),clearcoatMapUv:L&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&f(v.sheenRoughnessMap.channel),specularMapUv:ye&&f(v.specularMap.channel),specularColorMapUv:Ge&&f(v.specularColorMap.channel),specularIntensityMapUv:G&&f(v.specularIntensityMap.channel),transmissionMapUv:be&&f(v.transmissionMap.channel),thicknessMapUv:ge&&f(v.thicknessMap.channel),alphaMapUv:Ue&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($||de),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(We||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&$===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Ke=>Ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===on,decodeVideoTextureEmissive:Pe&&v.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(v.emissiveMap.colorSpace)===on,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===ri,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ct&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&v.extensions.multiDraw===!0||ct)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)S.push(A),S.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=h[v.type],A;if(S){let R=Ws[S];A=sd.clone(R.uniforms)}else A=v.uniforms;return A}function b(v,S){let A=u.get(S);return A!==void 0?++A.usedTimes:(A=new xS(n,S,v,s),c.push(A),u.set(S,A)),A}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:w}}function bS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function MS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let b=a(h,f,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(h,f,p,x,m,g){let _=a(h,f,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||MS),i.length>1&&i.sort(f||Sm),s.length>1&&s.sort(f||Sm)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function SS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new wm,n.set(i,[o])):s>=r.length?(o=new wm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new ze};break;case"SpotLight":t={position:new C,direction:new C,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function ES(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var TS=0;function AS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RS(n){let e=new wS,t=ES(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new wt,o=new wt;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,b=0,y=0,M=0,w=0,v=0,S=0,A=0,R=0;c.sort(AS);for(let U=0,H=c.length;U<H;U++){let I=c[U],Y=I.color,ee=I.intensity,J=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Nr?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=Y.r*ee,d+=Y.g*ee,h+=Y.b*ee;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],ee);R++}else if(I.isSunLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,O=t.get(I);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[p]=O,i.sunShadowMap[p]=Q;let V=W.getViewportCount();for(let oe=0;oe<V;oe++)i.sunShadowMatrix[x+oe]=W.getMatrix(oe),i.sunShadowCascade[x+oe]=W._cascadeData[oe];x+=V,p++}i.sun[f]=z,f++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,O=t.get(I);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=z,m++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Y).multiplyScalar(ee),z.distance=J,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[_]=z;let W=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,W.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=W.matrix,I.castShadow){let O=t.get(I);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=Q,v++}_++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(Y).multiplyScalar(ee),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=z,b++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let W=I.shadow,O=t.get(I);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=z,g++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(ee),z.groundColor.copy(I.groundColor).multiplyScalar(ee),i.hemi[y]=z,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Qe.LTC_FLOAT_1,i.rectAreaLTC2=Qe.LTC_FLOAT_2):(i.rectAreaLTC1=Qe.LTC_HALF_1,i.rectAreaLTC2=Qe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==p||P.numDirectionalShadows!==M||P.numPointShadows!==w||P.numSpotShadows!==v||P.numSpotMaps!==S||P.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=p,P.numDirectionalShadows=M,P.numPointShadows=w,P.numSpotShadows=v,P.numSpotMaps=S,P.numLightProbes=R,i.version=TS++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Em(n){let e=new RS(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function CS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Em(n),e.set(s,[a])):r>=o.length?(a=new Em(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],DS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Tm=new wt,Cl=new C,pf=new C;function NS(n,e,t){let i=new Tr,s=new Se,r=new Se,o=new pn,a=new tu,l=new nu,c={},u=t.maxTextureSize,d={[zs]:ri,[ri]:zs,[nn]:nn},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:PS,fragmentShader:IS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===b0&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let A=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(oo),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=w.length;I<Y;I++){let ee=w[I],J=ee.shadow;if(J===void 0){St("WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Q=J.getFrameExtents();s.multiply(Q),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,J.mapSize.y=r.y));let z=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=z,J.map===null||H===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===da){if(ee.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new ii(s.x,s.y,{format:Nr,type:Ei,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),J.map.texture.name=ee.name+".shadowMap",J.map.depthTexture=new rr(s.x,s.y,Zi),J.map.depthTexture.name=ee.name+".shadowMapDepth",J.map.depthTexture.format=nr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jn,J.map.depthTexture.magFilter=Jn}else ee.isPointLight?(J.map=new Il(s.x),J.map.depthTexture=new sl(s.x,gs)):(J.map=new ii(s.x,s.y),J.map.depthTexture=new rr(s.x,s.y,gs)),J.map.depthTexture.name=ee.name+".shadowMap",J.map.depthTexture.format=nr,this.type===ro?(J.map.depthTexture.compareFunction=z?Qh:jh,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jn,J.map.depthTexture.magFilter=Jn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let W=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ee.isPointLight!==!0&&J.updateMatrices(ee,S);let O=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:S.layers;for(let V=0;V<W;V++){let oe=J.getCamera(V);if(ee.isPointLight){let j=J.camera,he=J.matrix,fe=ee.distance||j.far;fe!==j.far&&(j.far=fe,j.updateProjectionMatrix()),Cl.setFromMatrixPosition(ee.matrixWorld),j.position.copy(Cl),pf.copy(j.position),pf.add(LS[V]),j.up.copy(DS[V]),j.lookAt(pf),j.updateMatrixWorld(),he.makeTranslation(-Cl.x,-Cl.y,-Cl.z),Tm.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Tm,j.coordinateSystem,j.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,V),n.clear();else{V===0&&(n.setRenderTarget(J.map),n.clear());let j=J.getViewport(V);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}i=J.getFrustum(V),y(v,S,oe,ee,O,this.type)}J.isPointLightShadow!==!0&&this.type===da&&_(J,S),J.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(A,R,P)};function _(w,v){let S=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ii(s.x,s.y,{format:Nr,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,S,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,S,f,x,null)}function b(w,v,S,A){let R=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let U=R.uuid,H=v.uuid,I=c[U];I===void 0&&(I={},c[U]=I);let Y=I[H];Y===void 0&&(Y=R.clone(),I[H]=Y,v.addEventListener("dispose",M)),R=Y}if(R.visible=v.visible,R.wireframe=v.wireframe,A===da?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=S}return R}function y(w,v,S,A,R,P){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===da)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=e.update(w),Y=w.material;if(Array.isArray(Y)){let ee=I.groups;for(let J=0,Q=ee.length;J<Q;J++){let z=ee[J],W=Y[z.materialIndex];if(W&&W.visible){let O=b(w,W,A,P);w.onBeforeShadow(n,w,v,S,I,O,z),n.renderBufferDirect(S,null,I,O,w,z),w.onAfterShadow(n,w,v,S,I,O,z)}}}else if(Y.visible){let ee=b(w,Y,A,P);w.onBeforeShadow(n,w,v,S,I,ee,null),n.renderBufferDirect(S,null,I,ee,w,null),w.onAfterShadow(n,w,v,S,I,ee,null)}}let H=w.children;for(let I=0,Y=H.length;I<Y;I++)y(H[I],v,S,A,R,P)}function M(w){w.target.removeEventListener("dispose",M);for(let S in c){let A=c[S],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function OS(n,e){function t(){let G=!1,be=new pn,ge=null,Ie=new pn(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!G&&(n.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Ve,pe,Ct,Fe){Fe===!0&&(Ue*=Ct,Ve*=Ct,pe*=Ct),be.set(Ue,Ve,pe,Ct),Ie.equals(be)===!1&&(n.clearColor(Ue,Ve,pe,Ct),Ie.copy(be))},reset:function(){G=!1,ge=null,Ie.set(-1,0,0,0)}}}function i(){let G=!1,be=!1,ge=null,Ie=null,Ue=null;return{setReversed:function(Ve){if(be!==Ve){let pe=e.get("EXT_clip_control");Ve?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),be=Ve;let Ct=Ue;Ue=null,this.setClear(Ct)}},getReversed:function(){return be},setTest:function(Ve){Ve?xe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Ve){ge!==Ve&&!G&&(n.depthMask(Ve),ge=Ve)},setFunc:function(Ve){if(be&&(Ve=J0[Ve]),Ie!==Ve){switch(Ve){case Nc:n.depthFunc(n.NEVER);break;case Oc:n.depthFunc(n.ALWAYS);break;case Fc:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case Uc:n.depthFunc(n.EQUAL);break;case kc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Ve}},setLocked:function(Ve){G=Ve},setClear:function(Ve){Ue!==Ve&&(Ue=Ve,be&&(Ve=1-Ve),n.clearDepth(Ve))},reset:function(){G=!1,ge=null,Ie=null,Ue=null,be=!1}}}function s(){let G=!1,be=null,ge=null,Ie=null,Ue=null,Ve=null,pe=null,Ct=null,Fe=null;return{setTest:function(mt){G||(mt?xe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(mt){be!==mt&&!G&&(n.stencilMask(mt),be=mt)},setFunc:function(mt,Tt,Ke){(ge!==mt||Ie!==Tt||Ue!==Ke)&&(n.stencilFunc(mt,Tt,Ke),ge=mt,Ie=Tt,Ue=Ke)},setOp:function(mt,Tt,Ke){(Ve!==mt||pe!==Tt||Ct!==Ke)&&(n.stencilOp(mt,Tt,Ke),Ve=mt,pe=Tt,Ct=Ke)},setLocked:function(mt){G=mt},setClear:function(mt){Fe!==mt&&(n.clearStencil(mt),Fe=mt)},reset:function(){G=!1,be=null,ge=null,Ie=null,Ue=null,Ve=null,pe=null,Ct=null,Fe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ze(0,0,0),A=0,R=!1,P=null,U=null,H=null,I=null,Y=null,ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Q=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),J=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),J=Q>=2);let W=null,O={},V=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),j=new pn().fromArray(V),he=new pn().fromArray(oe);function fe(G,be,ge,Ie){let Ue=new Uint8Array(4),Ve=n.createTexture();n.bindTexture(G,Ve),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ge;pe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(be+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Ve}let ne={};ne[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(Ko),se(!1),$(Nh),xe(n.CULL_FACE),B(oo);function xe(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Le(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ct(G,be){return h[G]!==be?(n.bindFramebuffer(G,be),h[G]=be,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function We(G,be){let ge=p,Ie=!1;if(G){ge=f.get(be),ge===void 0&&(ge=[],f.set(be,ge));let Ue=G.textures;if(ge.length!==Ue.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let Ve=0,pe=Ue.length;Ve<pe;Ve++)ge[Ve]=n.COLOR_ATTACHMENT0+Ve;ge.length=Ue.length,Ie=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ge)}function et(G){return x!==G?(n.useProgram(G),x=G,!0):!1}let He={[ao]:n.FUNC_ADD,[M0]:n.FUNC_SUBTRACT,[S0]:n.FUNC_REVERSE_SUBTRACT};He[w0]=n.MIN,He[E0]=n.MAX;let K={[mu]:n.ZERO,[Lr]:n.ONE,[T0]:n.SRC_COLOR,[Uh]:n.SRC_ALPHA,[L0]:n.SRC_ALPHA_SATURATE,[P0]:n.DST_COLOR,[R0]:n.DST_ALPHA,[A0]:n.ONE_MINUS_SRC_COLOR,[Dr]:n.ONE_MINUS_SRC_ALPHA,[I0]:n.ONE_MINUS_DST_COLOR,[C0]:n.ONE_MINUS_DST_ALPHA,[D0]:n.CONSTANT_COLOR,[N0]:n.ONE_MINUS_CONSTANT_COLOR,[O0]:n.CONSTANT_ALPHA,[F0]:n.ONE_MINUS_CONSTANT_ALPHA};function B(G,be,ge,Ie,Ue,Ve,pe,Ct,Fe,mt){if(G===oo){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(xe(n.BLEND),m=!0),G!==ha){if(G!==g||mt!==R){if((_!==ao||M!==ao)&&(n.blendEquation(n.FUNC_ADD),_=ao,M=ao),mt)switch(G){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFunc(n.ONE,n.ONE);break;case Oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",G);break}else switch(G){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oh:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",G);break}b=null,y=null,w=null,v=null,S.set(0,0,0),A=0,g=G,R=mt}return}Ue=Ue||be,Ve=Ve||ge,pe=pe||Ie,(be!==_||Ue!==M)&&(n.blendEquationSeparate(He[be],He[Ue]),_=be,M=Ue),(ge!==b||Ie!==y||Ve!==w||pe!==v)&&(n.blendFuncSeparate(K[ge],K[Ie],K[Ve],K[pe]),b=ge,y=Ie,w=Ve,v=pe),(Ct.equals(S)===!1||Fe!==A)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Fe),S.copy(Ct),A=Fe),g=G,R=!1}function q(G,be){G.side===nn?Le(n.CULL_FACE):xe(n.CULL_FACE);let ge=G.side===ri;be&&(ge=!ge),se(ge),G.blending===Hs&&G.transparent===!1?B(oo):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Ie=G.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(G){P!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),P=G)}function $(G){G!==v0?(xe(n.CULL_FACE),G!==U&&(G===Nh?n.cullFace(n.BACK):G===_0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),U=G}function ue(G){G!==H&&(J&&n.lineWidth(G),H=G)}function Pe(G,be,ge){G?(xe(n.POLYGON_OFFSET_FILL),(I!==be||Y!==ge)&&(I=be,Y=ge,o.getReversed()&&(be=-be,ge=-ge),n.polygonOffset(be,ge))):Le(n.POLYGON_OFFSET_FILL)}function F(G){G?xe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function re(G){G===void 0&&(G=n.TEXTURE0+ee-1),W!==G&&(n.activeTexture(G),W=G)}function de(G,be,ge){ge===void 0&&(W===null?ge=n.TEXTURE0+ee-1:ge=W);let Ie=O[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[ge]=Ie),(Ie.type!==G||Ie.texture!==be)&&(W!==ge&&(n.activeTexture(ge),W=ge),n.bindTexture(G,be||ne[G]),Ie.type=G,Ie.texture=be)}function N(){let G=O[W];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Je(){try{n.compressedTexImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function dt(){try{n.compressedTexImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function _t(){try{n.texSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Re(){try{n.texSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Ee(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function De(){try{n.texStorage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function L(){try{n.texStorage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function E(){try{n.texImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Z(){try{n.texImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function we(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function ve(G,be){d[G]!==be&&(n.pixelStorei(G,be),d[G]=be)}function Be(G){j.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),j.copy(G))}function qe(G){he.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),he.copy(G))}function _e(G,be){let ge=c.get(be);ge===void 0&&(ge=new WeakMap,c.set(be,ge));let Ie=ge.get(G);Ie===void 0&&(Ie=n.getUniformBlockIndex(be,G.name),n.uniformBlockBinding(be,Ie,Ie),ge.set(G,Ie))}function ye(G,be,ge){let Ue=c.get(be).get(G);l[Ue]!==ge&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ue,ge),l[Ue]=ge)}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},W=null,O={},h={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ze(0,0,0),A=0,R=!1,P=null,U=null,H=null,I=null,Y=null,j.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Le,bindFramebuffer:ct,drawBuffers:We,useProgram:et,setBlending:B,setMaterial:q,setFlipSided:se,setCullFace:$,setLineWidth:ue,setPolygonOffset:Pe,setScissorTest:F,activeTexture:re,bindTexture:de,unbindTexture:N,compressedTexImage2D:Je,compressedTexImage3D:dt,texImage2D:E,texImage3D:Z,pixelStorei:ve,getParameter:we,updateUBOMapping:_e,uniformBlockBinding:ye,texStorage2D:De,texStorage3D:L,texSubImage2D:_t,texSubImage3D:Re,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ae,scissor:Be,viewport:qe,reset:Ge}}function FS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,x=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return m?new OffscreenCanvas(L,E):$a("canvas")}function _(L,E,Z){let we=1,ve=De(L);if((ve.width>Z||ve.height>Z)&&(we=Z/Math.max(ve.width,ve.height)),we<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Be=Math.floor(we*ve.width),qe=Math.floor(we*ve.height);h===void 0&&(h=g(Be,qe));let _e=E?g(Be,qe):h;return _e.width=Be,_e.height=qe,_e.getContext("2d").drawImage(L,0,0,Be,qe),St("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Be+"x"+qe+")."),_e}else return"data"in L&&St("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function b(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(L,E,Z,we,ve,Be=!1){if(L!==null){if(n[L]!==void 0)return n[L];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let qe;we&&(qe=e.get("EXT_texture_norm16"),qe||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=E;if(E===n.RED&&(Z===n.FLOAT&&(_e=n.R32F),Z===n.HALF_FLOAT&&(_e=n.R16F),Z===n.UNSIGNED_BYTE&&(_e=n.R8),Z===n.UNSIGNED_SHORT&&qe&&(_e=qe.R16_EXT),Z===n.SHORT&&qe&&(_e=qe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(_e=n.R8UI),Z===n.UNSIGNED_SHORT&&(_e=n.R16UI),Z===n.UNSIGNED_INT&&(_e=n.R32UI),Z===n.BYTE&&(_e=n.R8I),Z===n.SHORT&&(_e=n.R16I),Z===n.INT&&(_e=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(_e=n.RG32F),Z===n.HALF_FLOAT&&(_e=n.RG16F),Z===n.UNSIGNED_BYTE&&(_e=n.RG8),Z===n.UNSIGNED_SHORT&&qe&&(_e=qe.RG16_EXT),Z===n.SHORT&&qe&&(_e=qe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(_e=n.RG8UI),Z===n.UNSIGNED_SHORT&&(_e=n.RG16UI),Z===n.UNSIGNED_INT&&(_e=n.RG32UI),Z===n.BYTE&&(_e=n.RG8I),Z===n.SHORT&&(_e=n.RG16I),Z===n.INT&&(_e=n.RG32I)),E===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(_e=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(_e=n.RGB16UI),Z===n.UNSIGNED_INT&&(_e=n.RGB32UI),Z===n.BYTE&&(_e=n.RGB8I),Z===n.SHORT&&(_e=n.RGB16I),Z===n.INT&&(_e=n.RGB32I)),E===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(_e=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(_e=n.RGBA16UI),Z===n.UNSIGNED_INT&&(_e=n.RGBA32UI),Z===n.BYTE&&(_e=n.RGBA8I),Z===n.SHORT&&(_e=n.RGBA16I),Z===n.INT&&(_e=n.RGBA32I)),E===n.RGB&&(Z===n.UNSIGNED_SHORT&&qe&&(_e=qe.RGB16_EXT),Z===n.SHORT&&qe&&(_e=qe.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(_e=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(_e=n.R11F_G11F_B10F)),E===n.RGBA){let ye=Be?qa:Xt.getTransfer(ve);Z===n.FLOAT&&(_e=n.RGBA32F),Z===n.HALF_FLOAT&&(_e=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(_e=ye===on?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&qe&&(_e=qe.RGBA16_EXT),Z===n.SHORT&&qe&&(_e=qe.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(_e=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(_e=n.RGB5_A1)}return(_e===n.R16F||_e===n.R32F||_e===n.RG16F||_e===n.RG32F||_e===n.RGBA16F||_e===n.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function v(L,E){let Z;return L?E===null||E===gs||E===co?Z=n.DEPTH24_STENCIL8:E===Zi?Z=n.DEPTH32F_STENCIL8:E===pa&&(Z=n.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gs||E===co?Z=n.DEPTH_COMPONENT24:E===Zi?Z=n.DEPTH_COMPONENT32F:E===pa&&(Z=n.DEPTH_COMPONENT16),Z}function S(L,E){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jn&&L.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function A(L){let E=new WeakRef(L);i.get(L).__ref=E,p.add(E),x.register(L,E,E)}function R(L){let E=i.get(L).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function P(L){H(L.target)}function U(L){I(L.target)}function H(L){L.removeEventListener("dispose",P),R(L),ee(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&d.delete(L)}function I(L){L.removeEventListener("dispose",U),R(L),Q(L)}function Y(){for(let L of p){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):H(E))}p.clear(),d.clear()}function ee(L){let E=i.get(L);if(E.__webglInit===void 0)return;let Z=L.source,we=f.get(Z);if(we){let ve=we[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&J(L),Object.keys(we).length===0&&f.delete(Z)}i.remove(L)}function J(L){let E=i.get(L);n.deleteTexture(E.__webglTexture);let Z=L.source,we=f.get(Z);delete we[E.__cacheKey],o.memory.textures--}function Q(L){let E=i.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&H(Z),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Be=0;Be<E.__webglFramebuffer[ve].length;Be++)n.deleteFramebuffer(E.__webglFramebuffer[ve][Be]);else n.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)n.deleteFramebuffer(E.__webglFramebuffer[ve]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let we=L.textures;for(let ve=0,Be=we.length;ve<Be;ve++){let qe=i.get(we[ve]);qe.__webglTexture&&(n.deleteTexture(qe.__webglTexture),o.memory.textures--),i.remove(we[ve])}i.remove(L)}let z=0;function W(){z=0}function O(){return z}function V(L){z=L}function oe(){let L=z;return L>=s.maxTextures&&St("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function j(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function he(L,E){let Z=i.get(L);if(L.isVideoTexture&&Ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let we=L.image;if(we===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,L,E);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function fe(L,E){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){q(Z,L,E);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function ne(L,E){let Z=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){q(Z,L,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function xe(L,E){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){se(Z,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let Le={[tr]:n.REPEAT,[Fs]:n.CLAMP_TO_EDGE,[Hc]:n.MIRRORED_REPEAT},ct={[Jn]:n.NEAREST,[B0]:n.NEAREST_MIPMAP_NEAREST,[Ml]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[yu]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},We={[V0]:n.NEVER,[ef]:n.ALWAYS,[W0]:n.LESS,[jh]:n.LEQUAL,[X0]:n.EQUAL,[Qh]:n.GEQUAL,[q0]:n.GREATER,[$0]:n.NOTEQUAL};function et(L,E){if(E.type===Zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===yu||E.magFilter===Ml||E.magFilter===ms||E.minFilter===Rn||E.minFilter===yu||E.minFilter===Ml||E.minFilter===ms)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Le[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Le[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Le[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ct[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ct[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jn||E.minFilter!==Ml&&E.minFilter!==ms||E.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function He(L,E){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P),A(E));let we=E.source,ve=f.get(we);ve===void 0&&(ve={},f.set(we,ve));let Be=j(E);if(Be!==L.__cacheKey){ve[Be]===void 0&&(ve[Be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ve[Be].usedTimes++;let qe=ve[L.__cacheKey];qe!==void 0&&(ve[L.__cacheKey].usedTimes--,qe.usedTimes===0&&J(E)),L.__cacheKey=Be,L.__webglTexture=ve[Be].texture}return Z}function K(L,E,Z){return Math.floor(Math.floor(L/Z)/E)}function B(L,E,Z,we){let Be=L.updateRanges;if(Be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Z,we,E.data);else{Be.sort((G,be)=>G.start-be.start);let qe=0;for(let G=1;G<Be.length;G++){let be=Be[qe],ge=Be[G],Ie=be.start+be.count,Ue=K(ge.start,E.width,4),Ve=K(be.start,E.width,4);ge.start<=Ie+1&&Ue===Ve&&K(ge.start+ge.count-1,E.width,4)===Ue?be.count=Math.max(be.count,ge.start+ge.count-be.start):(++qe,Be[qe]=ge)}Be.length=qe+1;let _e=t.getParameter(n.UNPACK_ROW_LENGTH),ye=t.getParameter(n.UNPACK_SKIP_PIXELS),Ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let G=0,be=Be.length;G<be;G++){let ge=Be[G],Ie=Math.floor(ge.start/4),Ue=Math.ceil(ge.count/4),Ve=Ie%E.width,pe=Math.floor(Ie/E.width),Ct=Ue,Fe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(n.TEXTURE_2D,0,Ve,pe,Ct,Fe,Z,we,E.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,_e),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge)}}function q(L,E,Z){let we=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(we=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(we=n.TEXTURE_3D);let ve=He(L,E),Be=E.source;t.bindTexture(we,L.__webglTexture,n.TEXTURE0+Z);let qe=i.get(Be);if(Be.version!==qe.__version||ve===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Fe=Xt.getPrimaries(Xt.workingColorSpace),mt=E.colorSpace===ur?null:Xt.getPrimaries(E.colorSpace),Tt=E.colorSpace===ur||Fe===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ye=_(E.image,!1,s.maxTextureSize);ye=Ae(E,ye);let Ge=r.convert(E.format,E.colorSpace),G=r.convert(E.type),be=w(E.internalFormat,Ge,G,E.normalized,E.colorSpace,E.isVideoTexture);et(we,E);let ge,Ie=E.mipmaps,Ue=E.isVideoTexture!==!0,Ve=qe.__version===void 0||ve===!0,pe=Be.dataReady,Ct=S(E,ye);if(E.isDepthTexture)be=v(E.format===cr,E.type),Ve&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,be,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,be,ye.width,ye.height,0,Ge,G,null));else if(E.isDataTexture)if(Ie.length>0){Ue&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,be,Ie[0].width,Ie[0].height);for(let Fe=0,mt=Ie.length;Fe<mt;Fe++)ge=Ie[Fe],Ue?pe&&t.texSubImage2D(n.TEXTURE_2D,Fe,0,0,ge.width,ge.height,Ge,G,ge.data):t.texImage2D(n.TEXTURE_2D,Fe,be,ge.width,ge.height,0,Ge,G,ge.data);E.generateMipmaps=!1}else Ue?(Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,be,ye.width,ye.height),pe&&B(E,ye,Ge,G)):t.texImage2D(n.TEXTURE_2D,0,be,ye.width,ye.height,0,Ge,G,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,be,Ie[0].width,Ie[0].height,ye.depth);for(let Fe=0,mt=Ie.length;Fe<mt;Fe++)if(ge=Ie[Fe],E.format!==xs)if(Ge!==null)if(Ue){if(pe)if(E.layerUpdates.size>0){let Tt=hf(ge.width,ge.height,E.format,E.type);for(let Ke of E.layerUpdates){let Wt=ge.data.subarray(Ke*Tt/ge.data.BYTES_PER_ELEMENT,(Ke+1)*Tt/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Fe,0,0,Ke,ge.width,ge.height,1,Ge,Wt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Fe,0,0,0,ge.width,ge.height,ye.depth,Ge,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Fe,be,ge.width,ge.height,ye.depth,0,ge.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Fe,0,0,0,ge.width,ge.height,ye.depth,Ge,G,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Fe,be,ge.width,ge.height,ye.depth,0,Ge,G,ge.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ue&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,be,Ie[0].width,Ie[0].height);for(let Fe=0,mt=Ie.length;Fe<mt;Fe++)ge=Ie[Fe],E.format!==xs?Ge!==null?Ue?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Fe,0,0,ge.width,ge.height,Ge,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Fe,be,ge.width,ge.height,0,ge.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?pe&&t.texSubImage2D(n.TEXTURE_2D,Fe,0,0,ge.width,ge.height,Ge,G,ge.data):t.texImage2D(n.TEXTURE_2D,Fe,be,ge.width,ge.height,0,Ge,G,ge.data)}else if(E.isDataArrayTexture)if(Ue){if(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,be,ye.width,ye.height,ye.depth),pe)if(E.layerUpdates.size>0){let Fe=hf(ye.width,ye.height,E.format,E.type);for(let mt of E.layerUpdates){let Tt=ye.data.subarray(mt*Fe/ye.data.BYTES_PER_ELEMENT,(mt+1)*Fe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,ye.width,ye.height,1,Ge,G,Tt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ge,G,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ye.width,ye.height,ye.depth,0,Ge,G,ye.data);else if(E.isData3DTexture)Ue?(Ve&&t.texStorage3D(n.TEXTURE_3D,Ct,be,ye.width,ye.height,ye.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ge,G,ye.data)):t.texImage3D(n.TEXTURE_3D,0,be,ye.width,ye.height,ye.depth,0,Ge,G,ye.data);else if(E.isFramebufferTexture){if(Ve)if(Ue)t.texStorage2D(n.TEXTURE_2D,Ct,be,ye.width,ye.height);else{let Fe=ye.width,mt=ye.height;for(let Tt=0;Tt<Ct;Tt++)t.texImage2D(n.TEXTURE_2D,Tt,be,Fe,mt,0,Ge,G,null),Fe>>=1,mt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Fe=n.canvas;if(Fe.hasAttribute("layoutsubtree")||Fe.setAttribute("layoutsubtree","true"),ye.parentNode!==Fe){Fe.appendChild(ye),d.add(E),Fe.onpaint=mt=>{let Tt=mt.changedElements;for(let Ke of d)Tt.includes(Ke.image)&&(Ke.needsUpdate=!0)},Fe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ye);else{let Tt=n.RGBA,Ke=n.RGBA,Wt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Tt,Ke,Wt,ye)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ue&&Ve){let Fe=De(Ie[0]);t.texStorage2D(n.TEXTURE_2D,Ct,be,Fe.width,Fe.height)}for(let Fe=0,mt=Ie.length;Fe<mt;Fe++)ge=Ie[Fe],Ue?pe&&t.texSubImage2D(n.TEXTURE_2D,Fe,0,0,Ge,G,ge):t.texImage2D(n.TEXTURE_2D,Fe,be,Ge,G,ge);E.generateMipmaps=!1}else if(Ue){if(Ve){let Fe=De(ye);t.texStorage2D(n.TEXTURE_2D,Ct,be,Fe.width,Fe.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,G,ye)}else t.texImage2D(n.TEXTURE_2D,0,be,Ge,G,ye);b(E)&&E.mipmapsAutoUpdate===!0&&y(we),qe.__version=Be.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,Z){if(E.image.length!==6)return;let we=He(L,E),ve=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);let Be=i.get(ve);if(ve.version!==Be.__version||we===!0){t.activeTexture(n.TEXTURE0+Z);let qe=Xt.getPrimaries(Xt.workingColorSpace),_e=E.colorSpace===ur?null:Xt.getPrimaries(E.colorSpace),ye=E.colorSpace===ur||qe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,G=E.image[0]&&E.image[0].isDataTexture,be=[];for(let Ke=0;Ke<6;Ke++)!Ge&&!G?be[Ke]=_(E.image[Ke],!0,s.maxCubemapSize):be[Ke]=G?E.image[Ke].image:E.image[Ke],be[Ke]=Ae(E,be[Ke]);let ge=be[0],Ie=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),Ve=w(E.internalFormat,Ie,Ue,E.normalized,E.colorSpace),pe=E.isVideoTexture!==!0,Ct=Be.__version===void 0||we===!0,Fe=ve.dataReady,mt=S(E,ge);et(n.TEXTURE_CUBE_MAP,E);let Tt;if(E.isDepthTexture){if(Ve=v(E.format===cr,E.type),Ct)if(pe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ve,ge.width,ge.height);else for(let Ke=0;Ke<6;Ke++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Ve,ge.width,ge.height,0,Ie,Ue,null)}else if(Ge){pe&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Ve,ge.width,ge.height);for(let Ke=0;Ke<6;Ke++){Tt=be[Ke].mipmaps;for(let Wt=0;Wt<Tt.length;Wt++){let Sn=Tt[Wt];E.format!==xs?Ie!==null?pe?Fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt,0,0,Sn.width,Sn.height,Ie,Sn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt,Ve,Sn.width,Sn.height,0,Sn.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt,0,0,Sn.width,Sn.height,Ie,Ue,Sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt,Ve,Sn.width,Sn.height,0,Ie,Ue,Sn.data)}}}else{if(Tt=E.mipmaps,pe&&Ct){Tt.length>0&&mt++;let Ke=De(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Ve,Ke.width,Ke.height)}for(let Ke=0;Ke<6;Ke++)if(G){pe?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,be[Ke].width,be[Ke].height,Ie,Ue,be[Ke].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Ve,be[Ke].width,be[Ke].height,0,Ie,Ue,be[Ke].data);for(let Wt=0;Wt<Tt.length;Wt++){let Yn=Tt[Wt].image[Ke].image;pe?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt+1,0,0,Yn.width,Yn.height,Ie,Ue,Yn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt+1,Ve,Yn.width,Yn.height,0,Ie,Ue,Yn.data)}}else{pe?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,Ie,Ue,be[Ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Ve,Ie,Ue,be[Ke]);for(let Wt=0;Wt<Tt.length;Wt++){let Sn=Tt[Wt];pe?Fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt+1,0,0,Ie,Ue,Sn.image[Ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,Wt+1,Ve,Ie,Ue,Sn.image[Ke])}}}b(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),Be.__version=ve.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function $(L,E,Z,we,ve,Be){let qe=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),ye=w(Z.internalFormat,qe,_e,Z.normalized,Z.colorSpace),Ge=i.get(E),G=i.get(Z);if(G.__renderTarget=E,!Ge.__hasExternalTextures){let be=Math.max(1,E.width>>Be),ge=Math.max(1,E.height>>Be);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,Be,ye,be,ge,E.depth,0,qe,_e,null):t.texImage2D(ve,Be,ye,be,ge,0,qe,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Re(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ve,G.__webglTexture,0,_t(E)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,we,ve,G.__webglTexture,Be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(L,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){let we=E.depthTexture,ve=we&&we.isDepthTexture?we.type:null,Be=v(E.stencilBuffer,ve),qe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),Be,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),Be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,qe,n.RENDERBUFFER,L)}else{let we=E.textures;for(let ve=0;ve<we.length;ve++){let Be=we[ve],qe=r.convert(Be.format,Be.colorSpace),_e=r.convert(Be.type),ye=w(Be.internalFormat,qe,_e,Be.normalized,Be.colorSpace);Re(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),ye,E.width,E.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),ye,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ye,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(L,E,Z){let we=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ve=i.get(E.depthTexture);ve.__renderTarget=E;let Be=we?E.depthTexture.image[0]:E.depthTexture.image;(!ve.__webglTexture||Be.width!==E.width||Be.height!==E.height)&&(Be.width=E.width,Be.height=E.height,E.depthTexture.needsUpdate=!0),we?xe(E.depthTexture,0):he(E.depthTexture,0);let qe=ve.__webglTexture,_e=_t(E),ye=we?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,Ge=E.depthTexture.format===cr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)Re(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ge,ye,qe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ge,ye,qe,0);else if(E.depthTexture.format===cr)Re(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ge,ye,qe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,Ge,ye,qe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(L){let E=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let we=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),we){let ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,we.removeEventListener("dispose",ve)};we.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=we}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let we=0;we<6;we++)Pe(E.__webglFramebuffer[we],L,we);else L.texture.mipmaps.length>0?Pe(E.__webglFramebuffer[0],L,0):Pe(E.__webglFramebuffer,L,0);else if(Z){E.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[we]),E.__webglDepthbuffer[we]===void 0)E.__webglDepthbuffer[we]=n.createRenderbuffer(),ue(E.__webglDepthbuffer[we],L,!1);else{let ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer[we];n.bindRenderbuffer(n.RENDERBUFFER,Be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,Be)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ue(E.__webglDepthbuffer,L,!1);else{let ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,Be)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(L,E,Z){let we=i.get(L);E!==void 0&&$(we.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&F(L)}function de(L){let E=L.texture,Z=i.get(L),we=i.get(E);L.addEventListener("dispose",U),A(L);let ve=L.textures,Be=L.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture()),we.__version=E.version,o.memory.textures++),Be){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let ye=0;ye<E.mipmaps.length;ye++)Z.__webglFramebuffer[_e][ye]=n.createFramebuffer()}else Z.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(qe)for(let _e=0,ye=ve.length;_e<ye;_e++){let Ge=i.get(ve[_e]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Re(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _e=0;_e<ve.length;_e++){let ye=ve[_e];Z.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[_e]);let Ge=r.convert(ye.format,ye.colorSpace),G=r.convert(ye.type),be=w(ye.internalFormat,Ge,G,ye.normalized,ye.colorSpace,L.isXRRenderTarget===!0),ge=_t(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Z.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Be){t.bindTexture(n.TEXTURE_CUBE_MAP,we.__webglTexture),et(n.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)$(Z.__webglFramebuffer[_e][ye],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else $(Z.__webglFramebuffer[_e],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);b(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(qe){for(let _e=0,ye=ve.length;_e<ye;_e++){let Ge=ve[_e],G=i.get(Ge),be=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,G.__webglTexture),et(be,Ge),$(Z.__webglFramebuffer,L,Ge,n.COLOR_ATTACHMENT0+_e,be,0),b(Ge)&&y(be)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,we.__webglTexture),et(_e,E),E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)$(Z.__webglFramebuffer[ye],L,E,n.COLOR_ATTACHMENT0,_e,ye);else $(Z.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,_e,0);b(E)?y(_e):E.mipmaps.length>0&&n.texParameteri(_e,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&F(L)}function N(L){let E=L.textures;for(let Z=0,we=E.length;Z<we;Z++){let ve=E[Z];if(b(ve)&&ve.mipmapsAutoUpdate===!0){let Be=M(L),qe=i.get(ve).__webglTexture;t.bindTexture(Be,qe),y(Be),t.unbindTexture()}}}let Je=[];function dt(L){if(L.samples>0){if(Re(L)===!1){let E=L.textures,Z=L.width,we=L.height,ve=n.COLOR_BUFFER_BIT,Be=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,qe=i.get(L),_e=E.length>1;if(_e)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);let G=i.get(E[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,Z,we,0,0,Z,we,ve,n.NEAREST),l===!0&&(Je.length=0,Je.push(n.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Je.push(Be),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,qe.__webglColorRenderbuffer[Ge]);let G=i.get(E[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,qe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,G,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function _t(L){return Math.min(s.maxSamples,L.samples)}function Re(L){let E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ae(L,E){let Z=L.colorSpace,we=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Xa&&Z!==ur&&(Xt.getTransfer(Z)===on?(we!==xs||ve!==Ci)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Z)),E}function De(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=oe,this.resetTextureUnits=W,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=he,this.setTexture2DArray=fe,this.setTexture3D=ne,this.setTextureCube=xe,this.rebindTextures=re,this.setupRenderTarget=de,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Re,this.dispose=Y}function US(n,e){function t(i,s=ur){let r,o=Xt.getTransfer(s);if(i===Ci)return n.UNSIGNED_BYTE;if(i===_u)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===$h)return n.SHORT;if(i===pa)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===Zi)return n.FLOAT;if(i===Ei)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===xs)return n.RGBA;if(i===nr)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===Mu)return n.RED;if(i===Su)return n.RED_INTEGER;if(i===Nr)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Eu)return n.RGBA_INTEGER;if(i===Sl||i===wl||i===El||i===Tl)if(o===on)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Sl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Sl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===El)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tu||i===Au||i===Ru||i===Cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pu||i===Iu||i===Lu||i===Du||i===Nu||i===Al||i===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pu||i===Iu)return o===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Du)return r.COMPRESSED_R11_EAC;if(i===Nu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Al)return r.COMPRESSED_RG11_EAC;if(i===Ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fu||i===Uu||i===ku||i===Bu||i===zu||i===Hu||i===Gu||i===Vu||i===Wu||i===Xu||i===qu||i===$u||i===Yu||i===Ku)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ku)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$u)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zu||i===Ju||i===ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zu)return o===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qu||i===ed||i===Rl||i===td)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new rl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new an({vertexShader:kS,fragmentShader:BS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mf=class extends hs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new bf,g={},_=t.getContextAttributes(),b=null,y=null,M=[],w=[],v=new Se,S=null,A=null,R=new Zn;R.viewport=new pn;let P=new Zn;P.viewport=new pn;let U=[R,P],H=new pu,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=M[j];return he===void 0&&(he=new ta,M[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=M[j];return he===void 0&&(he=new ta,M[j]=he),he.getGripSpace()},this.getHand=function(j){let he=M[j];return he===void 0&&(he=new ta,M[j]=he),he.getHandSpace()};function ee(j){let he=w.indexOf(j.inputSource);if(he===-1)return;let fe=M[he];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||o),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Q);for(let j=0;j<M.length;j++){let he=w[j];he!==null&&(w[j]=null,M[j].disconnect(he))}I=null,Y=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ne=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?cr:nr,ne=_.stencil?co:gs);let Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ii(h.textureWidth,h.textureHeight,{format:xs,type:Ci,depthTexture:new rr(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ii(f.framebufferWidth,f.framebufferHeight,{format:xs,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(j){for(let he=0;he<j.removed.length;he++){let fe=j.removed[he],ne=w.indexOf(fe);ne>=0&&(w[ne]=null,M[ne].disconnect(fe))}for(let he=0;he<j.added.length;he++){let fe=j.added[he],ne=w.indexOf(fe);if(ne===-1){for(let Le=0;Le<M.length;Le++)if(Le>=w.length){w.push(fe),ne=Le;break}else if(w[Le]===null){w[Le]=fe,ne=Le;break}if(ne===-1)break}let xe=M[ne];xe&&xe.connect(fe)}}function z(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let he=j.near,fe=j.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),H.near=P.near=R.near=he,H.far=P.far=R.far=fe,(I!==H.near||Y!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,Y=H.far),H.layers.mask=j.layers.mask|6,R.layers.mask=H.layers.mask&-5,P.layers.mask=H.layers.mask&-3;let ne=j.parent,xe=H.cameras;z(H,ne);for(let Le=0;Le<xe.length;Le++)z(xe[Le],ne);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),W(j,H,ne)};function W(j,he,fe){fe===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(j){return g[j]};let O=null;function V(j,he){if(u=he.getViewerPose(c||o),p=he,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ne=!1;fe.length!==H.cameras.length&&(H.cameras.length=0,ne=!0);for(let We=0;We<fe.length;We++){let et=fe[We],He=null;if(f!==null)He=f.getViewport(et);else{let B=d.getViewSubImage(h,et);He=B.viewport,We===0&&(e.setRenderTargetTextures(y,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(y))}let K=U[We];K===void 0&&(K=new Zn,K.layers.enable(We),K.viewport=new pn,U[We]=K),K.matrix.fromArray(et.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(et.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(He.x,He.y,He.width,He.height),We===0&&(H.matrix.copy(K.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ne===!0&&H.cameras.push(K)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let We=d.getDepthInformation(fe[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let We=0;We<fe.length;We++){let et=fe[We].camera;if(et){let He=g[et];He||(He=new rl,g[et]=He);let K=d.getCameraImage(et);He.sourceTexture=K}}}}for(let fe=0;fe<M.length;fe++){let ne=w[fe],xe=M[fe];ne!==null&&xe!==void 0&&xe.update(ne,he,c||o)}O&&O(j,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}let oe=new Am;oe.setAnimationLoop(V),this.setAnimationLoop=function(j){O=j},this.dispose=function(){}}},zS=new wt,Um=new At;Um.set(-1,0,0,0,1,0,0,0,1);function HS(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,cf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ri&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ri&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(zS.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Um),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ri&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GS(n,e,t,i){let s={},r={};function o(_,b){let y=b.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,b){let y=s[_.id];y===void 0&&(p(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let M=b.program;i.updateUBOMapping(_,M);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let b=n.createBuffer(),y=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,v=y.length;w<v;w++){let S=y[w];if(Array.isArray(S))for(let A=0,R=S.length;A<R;A++)u(S[A],w,A,M);else u(S,w,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,y,M){if(h(_,b,y,M)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let A=0;A<v.length;A++){let R=v[A],P=x(R,!0);d(R,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function d(_,b,y){typeof _=="number"||typeof _=="boolean"?b[y]=_:_.isMatrix3?(b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-y),y):_.toArray(b,y)}function h(_,b,y,M){let w=_.value,v=b+"_"+y;if(Array.isArray(w)){M[v]===void 0&&(M[v]=[]);let S=M[v],A=!1;for(let R=0;R<w.length;R++)f(w[R],S,R)===!0&&(A=!0);return A}return f(w,M,v)}function f(_,b,y){if(b[y]===void 0)return typeof _=="number"||typeof _=="boolean"?b[y]=_:ArrayBuffer.isView(_)?b[y]=_.slice():b[y]=_.clone(),!0;{let M=b[y];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return b[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function p(_){let b=_.uniforms,y=0,M=16;for(let v=0,S=b.length;v<S;v++){let A=Array.isArray(b[v])?b[v]:[b[v]];for(let R=0,P=A.length;R<P;R++){let U=A[R],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(b[v])||Array.isArray(U.value),Y=y;for(let J=0,Q=H.length;J<Q;J++){let z=H[J],W=x(z,I),O=y%M,V=O%W.boundary,oe=O+V;y+=V,oe!==0&&M-oe<W.storage&&(y+=M-oe),J===0&&(Y=y),y+=W.storage}let ee=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new ee((y-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let w=y%M;return w>0&&(y+=M-w),_.__size=y,_.__cache={},this}function x(_,b){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):St("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vs=null;function WS(){return Vs===null&&(Vs=new Qa(VS,16,16,Nr,Ei),Vs.name="DFG_LUT",Vs.minFilter=Rn,Vs.magFilter=Rn,Vs.wrapS=Fs,Vs.wrapT=Fs,Vs.generateMipmaps=!1,Vs.needsUpdate=!0),Vs}var ad=class{constructor(e={}){let{canvas:t=Y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ci}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Eu,wu,Su]),g=new Set([Ci,gs,pa,co,_u,bu]),_=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,w=null,v=[],S=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,U=null,H=null,I=null,Y=null;this._outputColorSpace=ni;let ee=0,J=0,Q=null,z=-1,W=null,O=new pn,V=new pn,oe=null,j=new ze(0),he=0,fe=t.width,ne=t.height,xe=1,Le=null,ct=null,We=new pn(0,0,fe,ne),et=new pn(0,0,fe,ne),He=!1,K=new Tr,B=new qc,q=!1,se=!1,$=new wt,ue=new C,Pe=new pn,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function de(){return Q===null?xe:1}let N=i;function Je(T,X){return t.getContext(T,X)}let dt,_t,Re,Ee,Ae,De,L,E,Z,we,ve,Be,qe,_e,ye,Ge,G,be,ge,Ie,Ue,Ve,pe;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),N===null){let X="webgl2";if(N=Je(X,T),N===null)throw Je(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(T){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),Et("WebGLRenderer: "+T.message),T}function Ct(){dt=new tM(N),dt.init(),Ue=new US(N,dt),_t=new Wb(N,dt,e,Ue),Re=new OS(N,dt),_t.reversedDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),H=N.createFramebuffer(),I=N.createFramebuffer(),Y=N.createFramebuffer(),Ee=new sM(N),Ae=new bS,De=new FS(N,dt,Re,Ae,_t,Ue,Ee),L=new eM(R),E=new o_(N),Ve=new Gb(N,E),Z=new nM(N,E,Ee,Ve),we=new oM(N,Z,E,Ve,Ee),be=new rM(N,_t,De),ye=new Xb(Ae),ve=new _S(R,L,dt,_t,Ve,ye),Be=new HS(R,Ae),qe=new SS,_e=new CS(dt),G=new Hb(R,L,Re,we,p,l),Ge=new NS(R,we,_t),pe=new GS(N,Ee,_t,Re),ge=new Vb(N,dt,Ee),Ie=new iM(N,dt,Ee),Ee.programs=ve.programs,R.capabilities=_t,R.extensions=dt,R.properties=Ae,R.renderLists=qe,R.shadowMap=Ge,R.state=Re,R.info=Ee}x!==Ci&&(A=new lM(x,t.width,t.height,a,s,r));let Fe=new Mf(R,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(T){T!==void 0&&(xe=T,this.setSize(fe,ne,!1))},this.getSize=function(T){return T.set(fe,ne)},this.setSize=function(T,X,le=!0){if(Fe.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=T,ne=X,t.width=Math.floor(T*xe),t.height=Math.floor(X*xe),le===!0&&(t.style.width=T+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(fe*xe,ne*xe).floor()},this.setDrawingBufferSize=function(T,X,le){fe=T,ne=X,xe=le,t.width=Math.floor(T*le),t.height=Math.floor(X*le),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(x===Ci){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(We)},this.setViewport=function(T,X,le,ie){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,X,le,ie),Re.viewport(O.copy(We).multiplyScalar(de()).round())},this.getScissor=function(T){return T.copy(et)},this.setScissor=function(T,X,le,ie){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,X,le,ie),Re.scissor(V.copy(et).multiplyScalar(de()).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){Re.setScissorTest(He=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,le=!0){let ie=0;if(T){let ae=!1;if(Q!==null){let Oe=Q.texture.format;ae=m.has(Oe)}if(ae){let Oe=Q.texture.type,st=g.has(Oe),Ye=G.getClearColor(),je=G.getClearAlpha(),lt=Ye.r,Mt=Ye.g,Ot=Ye.b;st?(_[0]=lt,_[1]=Mt,_[2]=Ot,_[3]=je,N.clearBufferuiv(N.COLOR,0,_)):(b[0]=lt,b[1]=Mt,b[2]=Ot,b[3]=je,N.clearBufferiv(N.COLOR,0,b))}else ie|=N.COLOR_BUFFER_BIT}X&&(ie|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ie|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&N.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),G.dispose(),qe.dispose(),_e.dispose(),De.dispose(),Ae.dispose(),L.dispose(),we.dispose(),Z.dispose(),Ve.dispose(),pe.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Xi),Fe.removeEventListener("sessionend",ei),Ni.stop()};function mt(T){T.preventDefault(),Ya("WebGLRenderer: Context Lost."),P=!0}function Tt(){Ya("WebGLRenderer: Context Restored."),P=!1;let T=Ee.autoReset,X=Ge.enabled,le=Ge.autoUpdate,ie=Ge.needsUpdate,ae=Ge.type;Ct(),Ee.autoReset=T,Ge.enabled=X,Ge.autoUpdate=le,Ge.needsUpdate=ie,Ge.type=ae}function Ke(T){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){let X=T.target;X.removeEventListener("dispose",Wt),Sn(X)}function Sn(T){Yn(T),Ae.remove(T)}function Yn(T){let X=Ae.get(T).programs;X!==void 0&&(X.forEach(function(le){ve.releaseProgram(le)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,le,ie,ae,Oe){X===null&&(X=F);let st=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Ye=To(T,X,le,ie,ae);Re.setMaterial(ie,st);let je=le.index,lt=1;if(ie.wireframe===!0){if(je=Z.getWireframeAttribute(le),je===void 0)return;lt=2}let Mt=le.drawRange,Ot=le.attributes.position,ot=Mt.start*lt,Ft=(Mt.start+Mt.count)*lt;Oe!==null&&(ot=Math.max(ot,Oe.start*lt),Ft=Math.min(Ft,(Oe.start+Oe.count)*lt)),je!==null?(ot=Math.max(ot,0),Ft=Math.min(Ft,je.count)):Ot!=null&&(ot=Math.max(ot,0),Ft=Math.min(Ft,Ot.count));let ht=Ft-ot;if(ht<0||ht===1/0)return;Ve.setup(ae,ie,Ye,le,je);let Pt,It=ge;if(je!==null&&(Pt=E.get(je),It=Ie,It.setIndex(Pt)),ae.isMesh)ie.wireframe===!0?(Re.setLineWidth(ie.wireframeLinewidth*de()),It.setMode(N.LINES)):It.setMode(N.TRIANGLES);else if(ae.isLine){let gn=ie.linewidth;gn===void 0&&(gn=1),Re.setLineWidth(gn*de()),ae.isLineSegments?It.setMode(N.LINES):ae.isLineLoop?It.setMode(N.LINE_LOOP):It.setMode(N.LINE_STRIP)}else ae.isPoints?It.setMode(N.POINTS):ae.isSprite&&It.setMode(N.TRIANGLES);if(ae.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))It.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{let gn=ae._multiDrawStarts,it=ae._multiDrawCounts,wn=ae._multiDrawCount,kt=je?E.get(je).bytesPerElement:1,ti=Ae.get(ie).currentProgram.getUniforms();for(let On=0;On<wn;On++)ti.setValue(N,"_gl_DrawID",On),It.render(gn[On]/kt,it[On])}else if(ae.isInstancedMesh)It.renderInstances(ot,ht,ae.count);else if(le.isInstancedBufferGeometry){let gn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,it=Math.min(le.instanceCount,gn);It.renderInstances(ot,ht,it)}else It.render(ot,ht)};function Rs(T,X,le,ie){U!==null&&T.isNodeMaterial&&U.setObject(ie,T),q===!0&&ye.setState(T,le,!1),T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=ri,T.needsUpdate=!0,os(T,X,ie),T.side=zs,T.needsUpdate=!0,os(T,X,ie),T.side=nn):os(T,X,ie)}this.compile=function(T,X,le=null){le===null&&(le=T),U!==null&&U.renderStart(T,X,le),w=_e.get(le),w.init(X),S.push(w),le.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),T!==le&&T.traverseVisible(function(ae){ae.isLight&&ae.layers.test(X.layers)&&(w.pushLight(ae),ae.castShadow&&w.pushShadow(ae))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),se=this.localClippingEnabled,q=ye.init(this.clippingPlanes,se),q===!0&&ye.setGlobalState(this.clippingPlanes,X),U!==null&&Ge.render(w.state.shadowsArray,le,X);let ie=new Set;return T.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;let Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let st=0;st<Oe.length;st++){let Ye=Oe[st];Rs(Ye,le,X,ae),ie.add(Ye)}else Rs(Oe,le,X,ae),ie.add(Oe)}),w=S.pop(),U!==null&&U.renderEnd(),ie},this.compileAsync=function(T,X,le=null){let ie=this.compile(T,X,le);return new Promise(ae=>{function Oe(){if(ie.forEach(function(st){let je=Ae.get(st).currentProgram;(je===void 0||je.isReady())&&ie.delete(st)}),ie.size===0){ae(T);return}setTimeout(Oe,10)}dt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Cs=null;function vr(T){Cs&&Cs(T)}function Xi(){Ni.stop()}function ei(){Ni.start()}let Ni=new Am;Ni.setAnimationLoop(vr),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){Cs=T,Fe.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},Fe.addEventListener("sessionstart",Xi),Fe.addEventListener("sessionend",ei),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(T,X);let le=Fe.enabled===!0&&Fe.isPresenting===!0,ie=A!==null&&(Q===null||le)&&A.begin(R,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,X,Q),w=_e.get(T,S.length),w.init(X),w.state.textureUnits=De.getTextureUnits(),S.push(w),$.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?B.setFromArrayCamera(X):K.setFromProjectionMatrix($,Yi,X.reversedDepth),se=this.localClippingEnabled,q=ye.init(this.clippingPlanes,se),M=qe.get(T,v.length),M.init(),v.push(M),this.info.render.frame++,Fe.enabled===!0&&Fe.isPresenting===!0){let st=R.xr.getDepthSensingMesh();st!==null&&vn(st,X,-1/0,R.sortObjects)}vn(T,X,0,R.sortObjects),M.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(Le,ct),re=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,re&&G.addToRenderList(M,T),this.info.autoReset===!0&&this.info.reset(),q===!0&&ye.beginShadows();let ae=w.state.shadowsArray;if(Ge.render(ae,T,X),q===!0&&ye.endShadows(),(ie&&A.hasRenderPass())===!1){let st=M.opaque,Ye=M.transmissive;if(w.setupLights(),X.isArrayCamera){let je=X.cameras;if(Ye.length>0)for(let lt=0,Mt=je.length;lt<Mt;lt++){let Ot=je[lt];kn(st,Ye,T,Ot)}re&&G.render(T);for(let lt=0,Mt=je.length;lt<Mt;lt++){let Ot=je[lt];$s(M,T,Ot,Ot.viewport)}}else Ye.length>0&&kn(st,Ye,T,X),re&&G.render(T),$s(M,T,X)}Q!==null&&J===0&&(De.updateMultisampleRenderTarget(Q),De.updateRenderTargetMipmap(Q)),ie&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,X),Ve.resetDefaultState(),z=-1,W=null,S.pop(),S.length>0?(w=S[S.length-1],De.setTextureUnits(w.state.textureUnits),q===!0&&ye.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,U!==null&&U.renderEnd()};function vn(T,X,le,ie){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)le=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let st=X.isArrayCamera?B:K;if(!T.frustumCulled||T.intersectsFrustum(st)){ie&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let Ye=we.update(T),je=T.material;je.visible&&M.push(T,Ye,je,le,Pe.z,null,X)}}else if(T.isMesh||T.isLine||T.isPoints){let st=X.isArrayCamera?B:K;if(!T.frustumCulled||T.intersectsFrustum(st)){let Ye=we.update(T),je=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Pe.copy(Ye.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(je)){let lt=Ye.groups;for(let Mt=0,Ot=lt.length;Mt<Ot;Mt++){let ot=lt[Mt],Ft=je[ot.materialIndex];Ft&&Ft.visible&&M.push(T,Ye,Ft,le,Pe.z,ot,X)}}else je.visible&&M.push(T,Ye,je,le,Pe.z,null,X)}}}let Oe=T.children;for(let st=0,Ye=Oe.length;st<Ye;st++)vn(Oe[st],X,le,ie)}function $s(T,X,le,ie){let{opaque:ae,transmissive:Oe,transparent:st}=T;w.setupLightsView(le),q===!0&&ye.setGlobalState(R.clippingPlanes,le),ie&&Re.viewport(O.copy(ie)),ae.length>0&&Ps(ae,X,le),Oe.length>0&&Ps(Oe,X,le),st.length>0&&Ps(st,X,le),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function kn(T,X,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ie.id]===void 0){let ot=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ie.id]=new ii(1,1,{generateMipmaps:!0,type:ot?Ei:Ci,minFilter:ms,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let Oe=w.state.transmissionRenderTarget[ie.id],st=ie.viewport||O;Oe.setSize(st.z*R.transmissionResolutionScale,st.w*R.transmissionResolutionScale);let Ye=R.getRenderTarget(),je=R.getActiveCubeFace(),lt=R.getActiveMipmapLevel();R.setRenderTarget(Oe),R.getClearColor(j),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),re&&G.render(le);let Mt=R.toneMapping;R.toneMapping=Gs;let Ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),w.setupLightsView(ie),q===!0&&ye.setGlobalState(R.clippingPlanes,ie),Ps(T,le,ie),De.updateMultisampleRenderTarget(Oe),De.updateRenderTargetMipmap(Oe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ft=0,ht=X.length;Ft<ht;Ft++){let Pt=X[Ft],{object:It,geometry:gn,material:it,group:wn}=Pt;if(it.side===nn&&It.layers.test(ie.layers)){let kt=it.side;it.side=ri,it.needsUpdate=!0,vi(It,le,ie,gn,it,wn),it.side=kt,it.needsUpdate=!0,ot=!0}}ot===!0&&(De.updateMultisampleRenderTarget(Oe),De.updateRenderTargetMipmap(Oe))}R.setRenderTarget(Ye,je,lt),R.setClearColor(j,he),Ot!==void 0&&(ie.viewport=Ot),R.toneMapping=Mt}function Ps(T,X,le){let ie=X.isScene===!0?X.overrideMaterial:null;for(let ae=0,Oe=T.length;ae<Oe;ae++){let st=T[ae],{object:Ye,geometry:je,group:lt}=st,Mt=st.material;Mt.allowOverride===!0&&ie!==null&&(Mt=ie),Ye.layers.test(le.layers)&&vi(Ye,X,le,je,Mt,lt)}}function vi(T,X,le,ie,ae,Oe){U!==null&&ae.isNodeMaterial&&U.setObject(T,ae),T.onBeforeRender(R,X,le,ie,ae,Oe),T.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ae.onBeforeRender(R,X,le,ie,T,Oe),ae.transparent===!0&&ae.side===nn&&ae.forceSinglePass===!1?(ae.side=ri,ae.needsUpdate=!0,R.renderBufferDirect(le,X,ie,ae,T,Oe),ae.side=zs,ae.needsUpdate=!0,R.renderBufferDirect(le,X,ie,ae,T,Oe),ae.side=nn):R.renderBufferDirect(le,X,ie,ae,T,Oe),T.onAfterRender(R,X,le,ie,ae,Oe)}function Is(T){let X=0;for(let le of T)le.texture!==null&&X++;return X}function os(T,X,le){X.isScene!==!0&&(X=F);let ie=Ae.get(T),ae=w.state.lights,Oe=w.state.shadowsArray,st=ae.state.version,Ye=ve.getParameters(T,ae.state,Oe,X,le,w.state.lightProbeGridArray),je=ve.getProgramCacheKey(Ye),lt=ie.programs;ie.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;let Mt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ie.envMap=L.get(T.envMap||ie.environment,Mt),ie.envMapRotation=ie.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",Wt),lt=new Map,ie.programs=lt,ie.programVariants=new Map);let Ot=lt.get(je);if(Ot!==void 0){if(ie.currentProgram===Ot&&ie.lightsStateVersion===st)return qi(T,Ye),Ot}else Ye.uniforms=ve.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,le,Ye),T.onBeforeCompile(Ye,R),Ot=ve.acquireProgram(Ye,je),lt.set(je,Ot),ie.uniforms=Ye.uniforms;let ot=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ot.clippingPlanes=ye.uniform),qi(T,Ye),ie.needsLights=Ls(T),ie.lightsStateVersion=st,ie.needsLights&&(ot.ambientLightColor.value=ae.state.ambient,ot.lightProbe.value=ae.state.probe,ot.sunLights.value=ae.state.sun,ot.sunLightShadows.value=ae.state.sunShadow,ot.directionalLights.value=ae.state.directional,ot.directionalLightShadows.value=ae.state.directionalShadow,ot.spotLights.value=ae.state.spot,ot.spotLightShadows.value=ae.state.spotShadow,ot.rectAreaLights.value=ae.state.rectArea,ot.ltc_1.value=ae.state.rectAreaLTC1,ot.ltc_2.value=ae.state.rectAreaLTC2,ot.pointLights.value=ae.state.point,ot.pointLightShadows.value=ae.state.pointShadow,ot.hemisphereLights.value=ae.state.hemi,ot.sunShadowMatrix.value=ae.state.sunShadowMatrix,ot.sunShadowCascade.value=ae.state.sunShadowCascade,ot.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ot.spotLightMatrix.value=ae.state.spotLightMatrix,ot.spotLightMap.value=ae.state.spotLightMap,ot.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.numLightProbeGrids=Is(w.state.lightProbeGridArray),ie.currentProgram=Ot,ie.uniformsList=null,Ot}function wo(T,X,le,ie,ae){let Oe=Ae.get(T),st=Oe.currentProgram.id+","+ie+","+ae,Ye=Oe.programVariants.get(st);return Ye===void 0?(Ye=os(T,X,le),Oe.programVariants.set(st,Ye)):(Oe.currentProgram=Ye,Oe.uniformsList=null,Oe.outputColorSpace=ie,Oe.toneMapping=ae),Ye}function Eo(T){if(T.uniformsList===null){let X=T.currentProgram.getUniforms();T.uniformsList=ma.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function qi(T,X){let le=Ae.get(T);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function To(T,X,le,ie,ae){X.isScene!==!0&&(X=F),De.resetTextureUnits();let Oe=X.fog,st=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ye=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xt.workingColorSpace,je=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,lt=L.get(ie.envMap||st,je),Mt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ot=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ot=!!le.morphAttributes.position,Ft=!!le.morphAttributes.normal,ht=!!le.morphAttributes.color,Pt=Gs;ie.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Pt=R.toneMapping);let It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,gn=It!==void 0?It.length:0,it=Ae.get(ie),wn=w.state.lights;if(q===!0&&(se===!0||T!==W)){let gt=T===W&&ie.id===z;ye.setState(ie,T,gt)}let kt=!1,ti=!1;ie.version===it.__version?it.needsLights&&it.lightsStateVersion!==wn.state.version||ae.isBatchedMesh&&it.batching===!1||!ae.isBatchedMesh&&it.batching===!0||ae.isBatchedMesh&&it.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&it.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&it.instancing===!1||!ae.isInstancedMesh&&it.instancing===!0||ae.isSkinnedMesh&&it.skinning===!1||!ae.isSkinnedMesh&&it.skinning===!0||ae.isInstancedMesh&&it.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&it.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&it.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&it.instancingMorph===!1&&ae.morphTexture!==null||it.envMap!==lt||ie.fog===!0&&it.fog!==Oe||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==ye.numPlanes||it.numIntersection!==ye.numIntersection)||it.vertexAlphas!==Mt||it.vertexTangents!==Ot||it.morphTargets!==ot||it.morphNormals!==Ft||it.morphColors!==ht||it.morphTargetsCount!==gn||it.numLightProbeGrids!==Is(w.state.lightProbeGridArray)?kt=!0:(it.outputColorSpace!==Ye||it.toneMapping!==Pt)&&(ti=!0):(kt=!0,it.__version=ie.version);let On=it.currentProgram;(kt===!0||ti===!0)&&(On=ti===!0?wo(ie,X,ae,Ye,Pt):os(ie,X,ae),U&&ie.isNodeMaterial&&U.onUpdateProgram(ie,On,it));let Ns=!1,ci=!1,ui=!1,Vt=On.getUniforms(),xn=it.uniforms;if(Re.useProgram(On.program)&&(Ns=!0,ci=!0,ui=!0),ie.id!==z&&(z=ie.id,ci=!0),Ns||W!==T){Re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Vt.setValue(N,"projectionMatrix",T.projectionMatrix),Vt.setValue(N,"viewMatrix",T.matrixWorldInverse);let Tn=Vt.map.cameraPosition;Tn!==void 0&&Tn.setValue(N,ue.setFromMatrixPosition(T.matrixWorld)),_t.logarithmicDepthBuffer&&Vt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Vt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,ci=!0,ui=!0)}if(it.needsLights&&(wn.state.sunShadowMap.length>0&&Vt.setValue(N,"sunShadowMap",wn.state.sunShadowMap,De),wn.state.directionalShadowMap.length>0&&Vt.setValue(N,"directionalShadowMap",wn.state.directionalShadowMap,De),wn.state.spotShadowMap.length>0&&Vt.setValue(N,"spotShadowMap",wn.state.spotShadowMap,De),wn.state.pointShadowMap.length>0&&Vt.setValue(N,"pointShadowMap",wn.state.pointShadowMap,De)),ae.isSkinnedMesh){Vt.setOptional(N,ae,"bindMatrix"),Vt.setOptional(N,ae,"bindMatrixInverse");let gt=ae.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Vt.setValue(N,"boneTexture",gt.boneTexture,De))}ae.isBatchedMesh&&(Vt.setOptional(N,ae,"batchingTexture"),Vt.setValue(N,"batchingTexture",ae._matricesTexture,De),Vt.setOptional(N,ae,"batchingIdTexture"),Vt.setValue(N,"batchingIdTexture",ae._indirectTexture,De),Vt.setOptional(N,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Vt.setValue(N,"batchingColorTexture",ae._colorsTexture,De));let Ln=le.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&be.update(ae,le,On),(ci||it.receiveShadow!==ae.receiveShadow)&&(it.receiveShadow=ae.receiveShadow,Vt.setValue(N,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(xn.envMapIntensity.value=X.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=WS()),ci){if(Vt.setValue(N,"toneMappingExposure",R.toneMappingExposure),it.needsLights&&li(xn,ui),Oe&&ie.fog===!0&&Be.refreshFogUniforms(xn,Oe),Be.refreshMaterialUniforms(xn,ie,xe,ne,w.state.transmissionRenderTarget[T.id]),it.needsLights&&it.numLightProbeGrids>0){let gt=y,Tn=0;for(let Ri of w.state.lightProbeGridArray)Ri.texture!==null&&(gt.textures[Tn]=Ri.texture,gt.min[Tn]=Ri.boundingBox.min,gt.max[Tn]=Ri.boundingBox.max,gt.resolution[Tn]=Ri.resolution,Tn++);for(let Ri in gt)gt[Ri].length=Tn;xn.probesSH.value=gt.textures,xn.probesMin.value=gt.min,xn.probesMax.value=gt.max,xn.probesResolution.value=gt.resolution}ma.upload(N,Eo(it),xn,De)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ma.upload(N,Eo(it),xn,De),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Vt.setValue(N,"center",ae.center),Vt.setValue(N,"modelViewMatrix",ae.modelViewMatrix),Vt.setValue(N,"normalMatrix",ae.normalMatrix),Vt.setValue(N,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){let gt=ie.uniformsGroups;for(let Tn=0,Ri=gt.length;Tn<Ri;Tn++){let $r=gt[Tn];pe.update($r,On),pe.bind($r,On)}}return On}function li(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Ls(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,X,le){let ie=Ae.get(T);ie.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Ae.get(T.texture).__webglTexture=X,Ae.get(T.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){let le=Ae.get(T);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,le=0){Q=T,ee=X,J=le;let ie=null,ae=!1,Oe=!1;if(T){let Ye=Ae.get(T);if(Ye.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(N.FRAMEBUFFER,Ye.__webglFramebuffer),O.copy(T.viewport),V.copy(T.scissor),oe=T.scissorTest,Re.viewport(O),Re.scissor(V),Re.setScissorTest(oe),z=-1;return}else if(Ye.__webglFramebuffer===void 0)De.setupRenderTarget(T);else if(Ye.__hasExternalTextures)De.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Mt=T.depthTexture;if(Ye.__boundDepthTexture!==Mt){if(Mt!==null&&Ae.has(Mt)&&(T.width!==Mt.image.width||T.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(T)}}let je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);let lt=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(lt[X])?ie=lt[X][le]:ie=lt[X],ae=!0):T.samples>0&&De.useMultisampledRTT(T)===!1?ie=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[le]:ie=lt,O.copy(T.viewport),V.copy(T.scissor),oe=T.scissorTest}else O.copy(We).multiplyScalar(xe).floor(),V.copy(et).multiplyScalar(xe).floor(),oe=He;if(le!==0&&(ie=H),Re.bindFramebuffer(N.FRAMEBUFFER,ie)&&Re.drawBuffers(T,ie),Re.viewport(O),Re.scissor(V),Re.setScissorTest(oe),ae){let Ye=Ae.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ye.__webglTexture,le)}else if(Oe){let Ye=X;for(let je=0;je<T.textures.length;je++){let lt=Ae.get(T.textures[je]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+je,lt.__webglTexture,le,Ye)}}else if(T!==null&&le!==0){let Ye=Ae.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ye.__webglTexture,le)}z=-1};function Ds(T){let X=Ae.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=_t.textureFormatReadable(T.format),X.__typeReadable=_t.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,le,ie,ae,Oe,st,Ye=0){if(!(T&&T.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(je=je[st],Array.isArray(je)&&(je=je[0])),je){Re.bindFramebuffer(N.FRAMEBUFFER,je);try{let lt=T.textures[Ye],Mt=lt.format,Ot=lt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ye);let ot=Ds(lt);if(ot.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-ie&&le>=0&&le<=T.height-ae&&N.readPixels(X,le,ie,ae,Ue.convert(Mt),Ue.convert(Ot),Oe)}finally{let lt=Q!==null?Ae.get(Q).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(T,X,le,ie,ae,Oe,st,Ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(je=je[st],Array.isArray(je)&&(je=je[0])),je)if(X>=0&&X<=T.width-ie&&le>=0&&le<=T.height-ae){Re.bindFramebuffer(N.FRAMEBUFFER,je);let lt=T.textures[Ye],Mt=lt.format,Ot=lt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ye);let ot=Ds(lt);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,Oe.byteLength,N.STREAM_READ),N.readPixels(X,le,ie,ae,Ue.convert(Mt),Ue.convert(Ot),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ht=Q!==null?Ae.get(Q).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,ht);let Pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Z0(N,Pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Oe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ft),N.deleteSync(Pt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,le=0){let ie=Math.pow(2,-le),ae=Math.floor(T.image.width*ie),Oe=Math.floor(T.image.height*ie),st=X!==null?X.x:0,Ye=X!==null?X.y:0;De.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,le,0,0,st,Ye,ae,Oe),Re.unbindTexture()},this.copyTextureToTexture=function(T,X,le=null,ie=null,ae=0,Oe=0){let st,Ye,je,lt,Mt,Ot,ot,Ft,ht,Pt=T.isCompressedTexture?T.mipmaps[Oe]:T.image;if(le!==null)st=le.max.x-le.min.x,Ye=le.max.y-le.min.y,je=le.isBox3?le.max.z-le.min.z:1,lt=le.min.x,Mt=le.min.y,Ot=le.isBox3?le.min.z:0;else{let Vt=Math.pow(2,-ae);st=Math.floor(Pt.width*Vt),Ye=Math.floor(Pt.height*Vt),T.isDataArrayTexture?je=Pt.depth:T.isData3DTexture?je=Math.floor(Pt.depth*Vt):je=1,lt=0,Mt=0,Ot=0}ie!==null?(ot=ie.x,Ft=ie.y,ht=ie.z):(ot=0,Ft=0,ht=0);let It=Ue.convert(X.format),gn=Ue.convert(X.type),it;X.isData3DTexture?(De.setTexture3D(X,0),it=N.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(De.setTexture2DArray(X,0),it=N.TEXTURE_2D_ARRAY):(De.setTexture2D(X,0),it=N.TEXTURE_2D),Re.activeTexture(N.TEXTURE0),Re.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),Re.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Re.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);let wn=Re.getParameter(N.UNPACK_ROW_LENGTH),kt=Re.getParameter(N.UNPACK_IMAGE_HEIGHT),ti=Re.getParameter(N.UNPACK_SKIP_PIXELS),On=Re.getParameter(N.UNPACK_SKIP_ROWS),Ns=Re.getParameter(N.UNPACK_SKIP_IMAGES);Re.pixelStorei(N.UNPACK_ROW_LENGTH,Pt.width),Re.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pt.height),Re.pixelStorei(N.UNPACK_SKIP_PIXELS,lt),Re.pixelStorei(N.UNPACK_SKIP_ROWS,Mt),Re.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);let ci=T.isDataArrayTexture||T.isData3DTexture,ui=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){let Vt=Ae.get(T),xn=Ae.get(X),Ln=Ae.get(Vt.__renderTarget),gt=Ae.get(xn.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Tn=0;Tn<je;Tn++)ci&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,ae,Ot+Tn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(X).__webglTexture,Oe,ht+Tn)),N.blitFramebuffer(lt,Mt,lt+st,Mt+Ye,ot,Ft,ot+st,Ft+Ye,N.DEPTH_BUFFER_BIT,N.NEAREST);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ae!==0||T.isRenderTargetTexture||Ae.has(T)){let Vt=Ae.get(T),xn=Ae.get(X);Re.bindFramebuffer(N.READ_FRAMEBUFFER,I),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Y);for(let Ln=0;Ln<je;Ln++)ci?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.__webglTexture,ae,Ot+Ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vt.__webglTexture,ae),ui?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,Oe,ht+Ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,Oe),ae!==0?N.blitFramebuffer(lt,Mt,lt+st,Mt+Ye,ot,Ft,ot+st,Ft+Ye,N.COLOR_BUFFER_BIT,N.NEAREST):ui?N.copyTexSubImage3D(it,Oe,ot,Ft,ht+Ln,lt,Mt,st,Ye):N.copyTexSubImage2D(it,Oe,ot,Ft,lt,Mt,st,Ye);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ui?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(it,Oe,ot,Ft,ht,st,Ye,je,It,gn,Pt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(it,Oe,ot,Ft,ht,st,Ye,je,It,Pt.data):N.texSubImage3D(it,Oe,ot,Ft,ht,st,Ye,je,It,gn,Pt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Oe,ot,Ft,st,Ye,It,gn,Pt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Oe,ot,Ft,Pt.width,Pt.height,It,Pt.data):N.texSubImage2D(N.TEXTURE_2D,Oe,ot,Ft,st,Ye,It,gn,Pt);Re.pixelStorei(N.UNPACK_ROW_LENGTH,wn),Re.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt),Re.pixelStorei(N.UNPACK_SKIP_PIXELS,ti),Re.pixelStorei(N.UNPACK_SKIP_ROWS,On),Re.pixelStorei(N.UNPACK_SKIP_IMAGES,Ns),Oe===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&N.generateMipmap(it),Re.unbindTexture()},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&De.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?De.setTextureCube(T,0):T.isData3DTexture?De.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?De.setTexture2DArray(T,0):De.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){ee=0,J=0,Q=null,Re.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xt._getUnpackColorSpace()}};var km={type:"change"},wf={type:"start"},zm={type:"end"},ud=new sr,Bm=new bi,XS=Math.cos(70*Or.DEG2RAD),Vn=new C,Pi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sf=1e-6,dd=class extends _l{constructor(e,t=null){super(e,t),this.state=sn.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Mn,this._lastTargetPosition=new C,this._quat=new Mn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ua,this._sphericalDelta=new ua,this._scale=1,this._panOffset=new C,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new C,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$S.bind(this),this._onPointerDown=qS.bind(this),this._onPointerUp=YS.bind(this),this._onContextMenu=tw.bind(this),this._onMouseWheel=JS.bind(this),this._onKeyDown=jS.bind(this),this._onTouchStart=QS.bind(this),this._onTouchMove=ew.bind(this),this._onMouseDown=KS.bind(this),this._onMouseMove=ZS.bind(this),this._interceptControlDown=nw.bind(this),this._interceptControlUp=iw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=sn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(km),this.update(),this.state=sn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Vn.copy(t).sub(this.target),Vn.applyQuaternion(this._quat),this._spherical.setFromVector3(Vn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Pi:i>Math.PI&&(i-=Pi),s<-Math.PI?s+=Pi:s>Math.PI&&(s-=Pi),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Vn.setFromSpherical(this._spherical),Vn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Vn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ud.origin.copy(this.object.position),ud.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ud.direction))<XS?this.object.lookAt(this.target):(Bm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ud.intersectPlane(Bm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sf||this._lastTargetPosition.distanceToSquared(this.target)>Sf?(this.dispatchEvent(km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pi/60*this.autoRotateSpeed*e:Pi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vn.setFromMatrixColumn(t,0),Vn.multiplyScalar(-e),this._panOffset.add(Vn)}_panUp(e,t){this.screenSpacePanning===!0?Vn.setFromMatrixColumn(t,1):(Vn.setFromMatrixColumn(t,0),Vn.crossVectors(this.object.up,Vn)),Vn.multiplyScalar(e),this._panOffset.add(Vn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Vn.copy(s).sub(this.target);let r=Vn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function qS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $S(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function YS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zm),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function KS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=sn.DOLLY;break;case Pr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=sn.ROTATE}break;case Pr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(wf)}function ZS(n){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function JS(n){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(n.preventDefault(),this.dispatchEvent(wf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zm))}function jS(n){this.enabled!==!1&&this._handleKeyDown(n)}function QS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1){this.state=sn.NONE;break}this._handleTouchStartRotate(n),this.state=sn.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1){this.state=sn.NONE;break}this._handleTouchStartPan(n),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=sn.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(wf)}function ew(n){switch(this._trackPointer(n),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=sn.NONE}}function tw(n){this.enabled!==!1&&n.preventDefault()}function nw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Dl=new C;function Ji(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Dl.copy(e),Dl[i]=0,Dl.normalize();let c=.5*o/(o+a),u=1-Dl.angleTo(n)/l;return Math.sign(Dl[t])===1?u*c:a/(o+a)+c+c*(1-u)}var hd=class n extends $t{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,u=new C(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new C,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[_+0]=Ji(x,c,"z","y",r,i),f[_+1]=1-Ji(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-Ji(x,c,"z","y",r,i),f[_+1]=1-Ji(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-Ji(x,c,"x","z",r,e),f[_+1]=Ji(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[_+0]=1-Ji(x,c,"x","z",r,e),f[_+1]=1-Ji(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[_+0]=1-Ji(x,c,"x","y",r,e),f[_+1]=1-Ji(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=Ji(x,c,"x","y",r,e),f[_+1]=1-Ji(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Gm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new qt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Hm(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let p=Hm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Hm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new pi(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let x=u.getComponent(h,p);a.setComponent(h+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var sw=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function rw(n,e){return sw(n,e)}function zt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=rw(n,e),a=o.getContext("2d"),l=new il(o);i&&(l.colorSpace=ni),l.anisotropy=r,s&&(l.wrapS=tr,l.wrapT=tr,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Yt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Ht='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Ut=Math.PI*2,ji=Math.PI/180,at=(n,e,t)=>n<e?e:n>t?t:n,Bi=(n,e,t)=>n+(e-n)*t,Ef=n=>{let e=at(n,0,1);return e*e*(3-2*e)},Qi=n=>{let e=at(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},en=(n,e,t,i)=>Bi(n,e,1-Math.exp(-t*i));function Ym(n,e,t){let i=(e-n)%Ut;return i>Math.PI&&(i-=Ut),i<-Math.PI&&(i+=Ut),n+i*t}function Tf(n,e){let t=(e-n)%Ut;return t>Math.PI&&(t-=Ut),t<-Math.PI&&(t+=Ut),t}var Vm=new wt,Wm=new Mn,Xm=new si,qm=new C,$m=new C;function D(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return Xm.set(t[0],t[1],t[2]),Wm.setFromEuler(Xm),qm.set(e[0],e[1],e[2]),$m.set(i[0],i[1],i[2]),Vm.compose(qm,Wm,$m),n.applyMatrix4(Vm),n}var Ne=(n,e,t,i=.02,s=2)=>new hd(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Te=(n,e,t)=>new $t(n,e,t),ce=(n,e,t,i=32,s=!1)=>new zn(n,e,t,i,1,s),es=(n,e=24,t=16)=>new Nn(n,e,t),ln=(n,e,t=12,i=48,s=Ut)=>new wi(n,e,t,i,s),zi=(n,e=48)=>new fl(n.map(([t,i])=>new Se(t,i)),e);function ya(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Ut;o.push(D(ce(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function Af(n,e,t,i,s=.02){let r=new ps,o=Ut/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,f]=u[d],p=Math.cos(f)*h,x=Math.sin(f)*h;l===0&&d===0?r.moveTo(p,x):r.lineTo(p,x)}}if(r.closePath(),s>0){let l=new or;l.absarc(0,0,s,0,Ut,!0),r.holes.push(l)}let a=new Bs(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function oi(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new C(l[0],l[1],l[2])),r=new ra,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),f=Math.min(t,d.length()/2,h.length()/2),p=c.clone().sub(d.normalize().multiplyScalar(f)),x=c.clone().add(h.normalize().multiplyScalar(f));p.distanceTo(o)>1e-5&&r.add(new to(o.clone(),p)),r.add(new no(p,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new to(o.clone(),c.clone()))}let a=r.getLength();return new pl(r,Math.max(16,Math.round(a*40)),e,i,!1)}var ut=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Qt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Gm(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new rt(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ze(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new rt(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Rt(n,e,t){let i=new Qt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var fd=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new C(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new C){let i=at(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function Km(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Gt(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let p=0;p<=a;p++){let x=p/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),_=Math.sin(m),b=n+t*g,y=e-t*_,M=l?-g:g,w=l?_:-_;c.push(b,r,y,b,o,y),u.push(M,0,w,M,0,w),d.push(x,0,x,1)}for(let p=0;p<a;p++){let x=p*2;h.push(x,x+2,x+3,x,x+3,x+1)}let f=new qt;return f.setAttribute("position",new pt(c,3)),f.setAttribute("normal",new pt(u,3)),f.setAttribute("uv",new pt(d,2)),f.setIndex(h),f}function ys(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let f=0;f<u;f++){let p=n[f],x=n[(f+1)%c],m=x[0]-p[0],g=x[1]-p[1],_=Math.hypot(m,g);if(_<1e-6)continue;let b=g/_,y=-m/_,M=!1;s&&!s((p[0]+x[0])/2,(p[1]+x[1])/2,b,y)&&(b=-b,y=-y,M=!0);let w=r.length/3;r.push(p[0],e,p[1],p[0],t,p[1],x[0],e,x[1],x[0],t,x[1]);for(let v=0;v<4;v++)o.push(b,0,y);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,M?l.push(w,w+2,w+3,w,w+3,w+1):l.push(w,w+1,w+3,w,w+3,w+2)}let h=new qt;return h.setAttribute("position",new pt(r,3)),h.setAttribute("normal",new pt(o,3)),h.setAttribute("uv",new pt(a,2)),h.setIndex(l),h}function Zm(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ow(){let n=Zm(7);return zt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function aw(){let n=Zm(23);return zt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Ut),e.stroke()},{anisotropy:8})}function lw(){return zt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function cw(){return zt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function uw(){return zt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var Pn=n=>new yt(n);function hr({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=zs,emissive:a=0,emissiveIntensity:l=0}={}){let c=new yt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=ha,c.blendSrc=Lr,c.blendDst=Dr,c.blendSrcAlpha=Lr,c.blendDstAlpha=Dr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function Jm(n="high"){let e={brushed:ow().tex,wafer:aw().tex,radial:lw().tex,hazard:cw().tex,grille:uw().tex};return{M:{alu:Pn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:Pn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:Pn({color:14936044,metalness:1,roughness:.08}),steel:Pn({color:11646654,metalness:1,roughness:.28}),darkSteel:Pn({color:6251886,metalness:1,roughness:.34}),brass:Pn({color:13876630,metalness:1,roughness:.3}),copper:Pn({color:12946278,metalness:1,roughness:.3}),gold:Pn({color:15320959,metalness:1,roughness:.22}),white:Pn({color:15856630,metalness:0,roughness:.32}),graphite:Pn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:Pn({color:5073918,metalness:.2,roughness:.35}),orange:Pn({color:13137466,metalness:.3,roughness:.36}),rubber:Pn({color:1382171,metalness:0,roughness:.8}),plastic:Pn({color:2303532,metalness:0,roughness:.45}),ceramic:Pn({color:15001579,metalness:0,roughness:.42}),grille:Pn({map:e.grille,metalness:.6,roughness:.45}),hazard:Pn({map:e.hazard,metalness:.2,roughness:.55}),glass:hr({color:14674421,opacity:.08,fresnel:.55}),smoke:hr({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:nn}),fuel:Pn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:Pn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:Pn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:Pn({color:13949150,metalness:0,roughness:.25}),wall:Pn({color:15133166,metalness:0,roughness:.5}),shadow:new Kt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new ar({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:Pn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function Zt(n,e=0){let t=new ze(n);return new yt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function Nl(n,e=1.25){return new yt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function Wn(n,e=.55){return new yt({map:n,metalness:e,roughness:.42})}var ho=Math.PI/180,$e={cx:.5,cz:-1,r:22,h:13.5},ts={panes:24,finDepth:.36,doorA0:263*ho,doorA1:277*ho,doorH:3.1},Fr={a0:236*ho,a1:304*ho,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},ns={r:22.35,groundY:-420},Qn={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*ho,targetR:17,targetYMin:.4,targetYMax:12},Lt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},md=.45,fo=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],nt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*ho,a1:142*ho,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Rf=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function kr(n,e,t=0,i=new C){return i.set($e.cx+e*Math.cos(n),t,$e.cz-e*Math.sin(n))}var Cf=Math.PI*2,pd=(n,e,t)=>Math.min(t,Math.max(e,n)),jm=(n,e)=>{let t=Math.abs(n-e)%Cf;return t>Math.PI?Cf-t:t};function Pf(n,e){let t=Math.atan2(-(e-$e.cz),n-$e.cx);return t<0?t+Cf:t}function Ur(n){let e=Qn,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-$e.cx,n.z-$e.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Pf(n.x,n.z);return i<=e.outerR+t?s>=ts.doorA0+e.edge-t&&s<=ts.doorA1-e.edge+t&&n.y<=ts.doorH-.25+t?"door":null:s>=Fr.a0+e.edge-t&&s<=Fr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function Qm(n,e,t){let i=n.x-$e.cx,s=n.z-$e.cz,r=Math.hypot(i,s),o=pd(r,e,t);r>1e-9&&o!==r&&(n.x=$e.cx+i*o/r,n.z=$e.cz+s*o/r)}function eg(n,e,t){let i=Pf(n.x,n.z);if(i>=e&&i<=t)return;let s=jm(i,e)<jm(i,t)?e:t,r=Math.hypot(n.x-$e.cx,n.z-$e.cz);n.x=$e.cx+r*Math.cos(s),n.z=$e.cz-r*Math.sin(s)}function If(n,e=null){if(Ur(n))return n;let t=Qn,i=e?Ur(e):null;if(!i){let s=Math.hypot(n.x-$e.cx,n.z-$e.cz),r=Pf(n.x,n.z);i=s>$e.r&&r>=Fr.a0&&r<=Fr.a1?"balcony":"hall"}if(i==="door"){if(eg(n,ts.doorA0+t.edge,ts.doorA1-t.edge),n.y=pd(n.y,t.yMin,ts.doorH-.25),Ur(n))return n;i=Math.hypot(e.x-$e.cx,e.z-$e.cz)>$e.r?"balcony":"hall"}return i==="balcony"?(eg(n,Fr.a0+t.edge,Fr.a1-t.edge),Qm(n,t.outerR+.001,t.balconyR),n.y=pd(n.y,t.yMin,t.balconyYMax)):(Qm(n,0,t.r),n.y=pd(n.y,t.yMin,t.yMax)),n}function gd(){let n=nt.screenR,e=Rf.reduce((i,s)=>i+s.w,0)+nt.gap*(Rf.length-1),t=Math.PI/2+e/n/2;return Rf.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-nt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:nt.screenY-a/2,y1:nt.screenY+a/2}})}function dw(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function hw(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function fw(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?dw(e,t,n.a,n.b,n.r):hw(e,t,n.c,n.h)}function ng(n,e,t=fo){let i=1/0;for(let s of t)i=Math.min(i,fw(s,n,e));return i}function ig(n,e){let t=Math.abs(n-Lt.cx)-Lt.hx+Lt.r,i=Math.abs(e-Lt.cz)-Lt.hz+Lt.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Lt.r}var Un=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function tg(n){return n.type==="circle"?`length(p - vec2(${Un(n.c[0])}, ${Un(n.c[1])})) - ${Un(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${Un(n.a[0])}, ${Un(n.a[1])}), vec2(${Un(n.b[0])}, ${Un(n.b[1])}), ${Un(n.r)})`:`lSdBox(p, vec2(${Un(n.c[0])}, ${Un(n.c[1])}), vec2(${Un(n.h[0])}, ${Un(n.h[1])}))`}function sg(){let n=fo.find(t=>t.id==="cell");return`
float lSdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h) - r;
}
float lSdBox(vec2 p, vec2 c, vec2 h) {
  vec2 q = abs(p - c) - h;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}
float sdIslands(vec2 p) {
${fo.map((t,i)=>i===0?`  float d = ${tg(t)};`:`  d = min(d, ${tg(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${Un(Lt.cx)}, ${Un(Lt.cz)})) - vec2(${Un(Lt.hx-Lt.r)}, ${Un(Lt.hz-Lt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${Un(Lt.r)};
}
const vec2 HUB_C = vec2(${Un(n.c[0])}, ${Un(n.c[1])});
const float HUB_R = ${Un(n.r)};
`}function rg(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Lt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,f)=>{let p=Math.max(1,Math.ceil(Math.hypot(h-u,f-d)/n));for(let x=0;x<p;x++)o.push([u+(h-u)*x/p,d+(f-d)*x/p])};for(let u=0;u<4;u++){let[d,h,f]=a[u];for(let M=0;M<l;M++){let w=f+Math.PI/2*M/l;o.push([d+r*Math.cos(w),h+r*Math.sin(w)])}let[p,x,m]=a[(u+1)%4],g=d+r*Math.cos(f+Math.PI/2),_=h+r*Math.sin(f+Math.PI/2),b=p+r*Math.cos(m),y=x+r*Math.sin(m);c(g,_,b,y)}return o}var Ol=Math.PI/180;function pw(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Hi(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function og(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function mw(n,e){return(n/(2*Math.PI)+.5)*e}function Fl(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,Hi(r,o)),a.addColorStop(.45,Hi(r,o*.42)),a.addColorStop(1,Hi(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function gw(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,y)=>{y(b-e),y(b),y(b+e)},l=pw(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=mw(Math.atan2(d[2],d[0]),e),f=o(Math.asin(d[1])/Ol);if(a(h,b=>{Fl(n,b,o(3),100*r,16*r,s.sunGlow,.55),Fl(n,b,f,60*r,60*r,s.sunGlow,.42),Fl(n,b,f,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>Fl(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let y=3+24*Math.pow(l(),1.6),M=l()*e,w=(8+42*l())*r,v=(.35+1.4*l())*r,S=Math.abs(M-h)%e;S=Math.min(S,e-S)/e;let A=Math.max(0,1-S/.28),R=og(s.cloudDark,s.cloudLit,A),P=s.clouds*(.18+.32*l())*(.6+.4*A);a(M,U=>Fl(n,U,o(y),w,v,R,P))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let y=Math.sin(16*Ol)+l()*(1-Math.sin(16*Ol)),M=Math.asin(y)/Ol,w=Math.min(1,Math.max(0,(M-16)/26)),v=s.stars*w*(.25+.7*l()*l());if(v<.03)continue;let S=.7+l()*1.1,A=1/Math.max(.12,Math.cos(M*Ol));n.fillStyle=l()<.2?Hi("#bcd2ff",v):Hi("#ffffff",v),n.fillRect(l()*e,o(M),S*A,S)}let p=s.far,x=og(p.body,p.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,M=o(y),w=o(-2.5);if(n.fillStyle=x,n.fillRect(m,M,b,w-M),y>2.1&&l()<.6&&n.fillRect(m+b/2-.5,M-3-l()*5,1,4+l()*5),p.windows>0){let v=Math.floor((w-M)*b*.05*p.windows);for(let S=0;S<v;S++){let A=l(),R=A<.62?"#ffc078":A<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=Hi(R,(.25+.4*l())*Math.min(1,p.windows*1.4)),n.fillRect(m+Math.floor(l()*b),M+Math.floor(l()*(w-M)),1,1)}}p.neon>0&&l()<.04&&(n.fillStyle=Hi(l()<.7?"#46e6ff":"#ffb347",.45*p.neon),n.fillRect(m,M-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,Hi(p.haze,0)),g.addColorStop(.45,Hi(p.haze,.38)),g.addColorStop(1,Hi(p.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let y=0;y<b;y++){let M=Math.pow(l(),1.3),w=-.3-3.9*M,v=l(),S=v<.6?"#ffb46a":v<.82?"#ffe2b0":v<.93?"#ffffff":"#55dcff";n.fillStyle=Hi(S,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*M)),n.fillRect(l()*e,o(w),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,Hi(s.groundHaze,.1)),_.addColorStop(1,Hi(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var xw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,yw=`
#include <common>
uniform sampler2D tSky;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunPower;
uniform float uIntensity;
varying vec3 vWorld;
void main() {
  vec3 d = normalize(vWorld - cameraPosition);
  vec2 uv = vec2(atan(d.z, d.x) * RECIPROCAL_PI2 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5);
  vec3 col = texture2D(tSky, uv).rgb * uIntensity;
  float s = max(dot(d, uSunDir), 0.0);
  float disc = smoothstep(0.999848, 0.999925, s);
  col += uSunColor * (disc * uSunPower + pow(s, 420.0) * 1.1 + pow(s, 28.0) * 0.1);
  gl_FragColor = vec4(col, 1.0);
}
`;function vw(n,e){let t=new eo;t.background=new ze(n.clear);let i=new rt(new Nn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Kt({side:nn,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let f=new rt(u,d);return f.position.set(h[0],h[1],h[2]),t.add(f),f},a=$e.cx,l=$e.cz;o(new Cn(6.4,$e.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,$e.h,l]),o(new wi(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,$e.h-.25,l]),o(new Dn($e.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new Cn($e.r-.6,$e.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,$e.h-.55,l]),o(Gt(a,l,$e.r-.6,0,Math.PI*2,$e.h-.55,$e.h,64,!0),r(s.column,.85)),o(Gt(a,l,nt.r,nt.a0,nt.a1,nt.bandY0,nt.bandY1,32,!0),r(s.media,1)),o(Gt(a,l,nt.r,nt.a0,nt.a1,nt.bandY1,nt.top,32,!0),r(s.column,.85)),o(Gt(a,l,nt.r-.3,nt.a0,nt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of gd())o(Gt(a,l,nt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function _w(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function ag(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=zt(i,s,null,{anisotropy:1});r.tex.wrapS=tr,r.tex.generateMipmaps=!1,r.tex.minFilter=Rn,r.tex.magFilter=Rn;let o=new an({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new ze(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:xw,fragmentShader:yw,side:ri,depthTest:!1,depthWrite:!1,fog:!1}),a=new rt(new Nn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=vw(c,o),f=new ga(n),p=f.fromScene(h,.035,.1,400,{size:256,position:new C($e.cx,1.6,$e.cz)});f.dispose(),_w(h,o),l&&l.dispose(),l=p}function d(h){c=h,r.redraw((f,p,x)=>gw(f,p,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var dn=1,bw=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,Mw=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,Sw=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,ww=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function lg(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new ii(16,16,{type:Ei,generateMipmaps:!0,minFilter:ms,magFilter:Rn,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new wt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new Zn;o.layers.set(0);let a=new C(0,1,0),l=new C(0,0,0),c=new C,u=new wt,d=new C,h=new C,f=new C,p=new bi,x=new pn,m=new pn,g=new Se,_=0;function b(M){M.uniforms.tReflect=r.tReflect,M.uniforms.uReflMatrix=r.uReflMatrix,M.uniforms.uReflStrength=r.uReflStrength,M.uniforms.uReflBlur=r.uReflBlur,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
${bw}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Mw}`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
${Sw}`).replace("#include <opaque_fragment>",`${ww}
#include <opaque_fragment>`)}function y(M,w){if(!n)return!1;n.getDrawingBufferSize(g);let v=Math.max(16,Math.round(g.x*e)),S=Math.max(16,Math.round(g.y*e));if((s.width!==v||s.height!==S)&&s.setSize(v,S),c.setFromMatrixPosition(w.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(w.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),f.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(f),o.far=w.far,o.updateMatrixWorld(),o.projectionMatrix.copy(w.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let A=r.uReflMatrix.value;A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(o.projectionMatrix),A.multiply(o.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(a,l),p.applyMatrix4(o.matrixWorldInverse),x.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let R=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+R[8])/R[0],m.y=(Math.sign(x.y)+R[9])/R[5],m.z=-1,m.w=(1+R[10])/R[14],x.multiplyScalar(2/x.dot(m)),R[2]=x.x,R[6]=x.y,R[10]=x.z+1-_,R[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let P=n.getRenderTarget(),U=n.autoClear,H=n.shadowMap.autoUpdate,I=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(M,o),n.autoClear=U,n.shadowMap.autoUpdate=H,n.shadowMap.needsUpdate=I,n.setRenderTarget(P),!0}return{uniforms:r,inject:b,update:y,setStrength(M){r.uReflStrength.value=M},dispose(){s.dispose()}}}var Ii=Math.PI*2,Nf=sg();function xd(n,e,t){let i=new Kt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var Of=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function ug(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function Ew(n){let e=new yt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{ug(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Of}
${Nf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float wellD = sdWell(vFloor);
if (wellD < 0.0) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
float px = length(fwidth(vFloor));
vec2 tc = vFloor / 2.4;
vec2 fr = fract(tc);
float tileN = fHash(floor(tc));
float seamD = min(min(fr.x, 1.0 - fr.x), min(fr.y, 1.0 - fr.y)) * 2.4;
float seam = fLine(seamD, 0.003, px);
diffuseColor.rgb *= (0.95 + 0.07 * tileN) * (1.0 - seam * 0.4);
float reflMask = 1.0 - seam;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp(roughnessFactor + (tileN - 0.5) * 0.04 + seam * 0.5, 0.03, 1.0);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float border = fLine(abs(wellD - 0.62), 0.011, px);
float ringD = length(vFloor - vec2(${$e.cx.toFixed(3)}, ${$e.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function Tw(n){let e=new yt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{ug(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Of}
${Nf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float islD = sdIslands(vFloor);
if (islD > 0.0 || sdWell(vFloor) > 0.0) discard;`).replace("#include <color_fragment>",`#include <color_fragment>
float px = length(fwidth(vFloor));
vec2 tc = vFloor / 1.2;
vec2 fr = fract(tc);
float tileN = fHash(floor(tc));
float seamD = min(min(fr.x, 1.0 - fr.x), min(fr.y, 1.0 - fr.y)) * 1.2;
float seam = fLine(seamD, 0.0028, px);
float hubD = length(vFloor - HUB_C);
float inHub = 1.0 - smoothstep(HUB_R - 0.64, HUB_R - 0.6, hubD);
float edge = smoothstep(-0.05, 0.0, islD);
diffuseColor.rgb *= mix(0.97 + 0.04 * tileN, 0.88, inHub) * (1.0 - seam * 0.45 * (1.0 - inHub)) * (1.0 - edge * 0.3);
float reflMask = (1.0 - seam * (1.0 - inHub)) * (1.0 - edge);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(clamp(roughnessFactor + (tileN - 0.5) * 0.03 + seam * 0.5, 0.03, 1.0), 0.035, inHub);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float rim = fLine(abs(islD + 0.07), 0.009, px);
float ring = fLine(abs(hubD - (HUB_R - 0.2)), 0.014, px);
float inner = fLine(abs(hubD - 1.08), 0.006, px);
float ang = atan(vFloor.y - HUB_C.y, vFloor.x - HUB_C.x + 1e-6);
float a72 = ang / 6.2831853 * 72.0;
float tickD = abs(a72 - floor(a72 + 0.5)) * 6.2831853 * hubD / 72.0;
float ticks = fLine(tickD, 0.006, px) * step(HUB_R - 0.52, hubD) * step(hubD, HUB_R - 0.36);
// The bright hub ring at HUB_R − 0.2 is the floor channel 'ring' (channels.js), driven by activity.
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var Aw=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,Rw=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${Of}
${Nf}
void main() {
  float wellD = sdWell(vFloor);
  if (wellD > 0.0) discard;
  float px = length(fwidth(vFloor));
  vec3 col = vec3(0.010, 0.026, 0.07);
  vec2 g = abs(fract(vFloor / 0.6 + 0.5) - 0.5) * 0.6;
  float grid = max(fLine(g.x, 0.005, px), fLine(g.y, 0.005, px));
  col += vec3(0.05, 0.22, 0.55) * grid * 0.45;
  float lane = floor(vFloor.y / 0.9);
  float lz = (fract(vFloor.y / 0.9) - 0.5) * 0.9;
  float lr = fHash(vec2(lane, 7.0));
  float on = step(0.35, fHash(vec2(lane, 3.1)));
  float dir = lr < 0.5 ? 1.0 : -1.0;
  float seg = vFloor.x / (2.2 + lr * 1.6) - uTravel * (0.5 + lr) * dir;
  float k = fract(seg + lr * 7.13);
  float comet = pow(dir > 0.0 ? k : 1.0 - k, 10.0);
  float laneLine = fLine(abs(lz), 0.011, px) * on;
  col += vec3(0.25, 0.75, 1.0) * laneLine * (0.1 + comet * 3.6 * uFlow);
  float isl = sdIslands(vFloor);
  col += vec3(0.2, 0.55, 1.0) * exp(-max(isl, 0.0) * 1.6) * 0.45 * uGlow;
  col += vec3(0.3, 0.8, 1.0) * fLine(abs(wellD + 0.14), 0.01, px) * 1.6;
  gl_FragColor = vec4(col, 1.0);
}`,Cw=`
attribute float aSeed;
varying vec2 vUv;
varying float vSeed;
void main() {
  vUv = uv;
  vSeed = aSeed;
  vec4 p = vec4(position, 1.0);
  #ifdef USE_INSTANCING
    p = instanceMatrix * p;
  #endif
  gl_Position = projectionMatrix * modelViewMatrix * p;
}`,Pw=`
uniform float uTime;
uniform float uActivity;
uniform vec2 uSize;
varying vec2 vUv;
varying float vSeed;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float dotMask(vec2 p, vec2 c, float r, float aa) {
  float rr = max(r, aa * 0.7);
  float d = length(p - c);
  return (1.0 - smoothstep(rr - aa * 0.5, rr + aa * 0.5, d)) * (r * r) / (rr * rr);
}
void main() {
  vec2 p = vUv * uSize;
  float aa = length(fwidth(p));
  float uh = uSize.y / 24.0;
  float ui = floor(p.y / uh);
  float fy = p.y - ui * uh;
  float cy = ui * uh + uh * 0.5;
  float r = h21(vec2(vSeed, ui));
  vec3 col = vec3(0.014, 0.02, 0.034) + vec3(0.02, 0.028, 0.04) * (p.y / uSize.y);
  col += (1.0 - smoothstep(0.0, 0.003 + aa, fy)) * vec3(0.03, 0.036, 0.046);
  float server = step(0.12, r);
  float storage = step(0.7, r) * (1.0 - step(0.86, r));
  float amber = step(0.9, r);
  float rate = (0.5 + h21(vec2(r, 3.7)) * 3.5) * (0.4 + uActivity * 1.2);
  float blink = step(0.35, h21(vec2(r * 17.0, floor(uTime * rate + r * 13.0))));
  vec3 c1 = mix(vec3(0.22, 0.62, 1.0), vec3(1.0, 0.55, 0.12), amber);
  vec3 led = dotMask(p, vec2(0.06, cy), 0.0075, aa) * blink * c1 * 4.0 * server;
  led += dotMask(p, vec2(0.09, cy), 0.0075, aa) * vec3(0.15, 0.9, 0.45) * 1.6 * step(0.3, r);
  float k = clamp(floor((p.x - 0.14) / 0.022), 0.0, 5.0);
  float inRow = step(0.14, p.x) * step(p.x, 0.272);
  float act = step(0.5 - uActivity * 0.25, h21(vec2(k + r * 31.0, floor(uTime * (3.0 + k)))));
  led += dotMask(p, vec2(0.151 + k * 0.022, cy), 0.005, aa) * act * vec3(0.3, 0.75, 1.0) * 3.0 * storage * inRow;
  float vent = step(0.36, p.x) * step(p.x, uSize.x - 0.07) * step(0.02, fy) * step(fy, uh - 0.02);
  col += vent * (0.5 + 0.5 * sin(p.x * 300.0)) * 0.01;
  float strip = 1.0 - smoothstep(0.004, 0.004 + aa * 1.5, abs(p.x - (uSize.x - 0.03)));
  col += strip * vec3(0.2, 0.6, 1.0) * (1.4 + uActivity * 1.4) + led;
  gl_FragColor = vec4(col, 1.0);
}`;function Iw(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(Ii*o/t));for(let l=0;l<a;l++){let c=l/a*Ii;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,f=n.r+e,p=Math.max(16,Math.ceil(Math.PI*f/t)),x=(g,_)=>{for(let b=0;b<=p;b++){let y=_-Math.PI*b/p;i.push([g[0]+f*(Math.cos(y)*c+Math.sin(y)*d),g[1]+f*(Math.cos(y)*u+Math.sin(y)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,_)=>{let b=at(((g-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function Lf(n,e,t,i){let{pts:s,center:r}=Iw(n,e);return ys(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function cg(n,e){let t=Lt.hx-Lt.r,i=Lt.hz-Lt.r;return n.map(([s,r])=>{let o=Lt.cx+at(s-Lt.cx,-t,t),a=Lt.cz+at(r-Lt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var Df=(n,e,t,i)=>(Lt.cx-n)*t+(Lt.cz-e)*i>0;function Lw(n){let e=fo.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function Dw(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of fo)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Lt.cx-Lt.hx),e=Math.min(e,Lt.cx+Lt.hx),t=Math.max(t,Lt.cz-Lt.hz),i=Math.min(i,Lt.cz+Lt.hz),{x0:n,x1:e,z0:t,z1:i}}function Nw(n,e,t,i=6){let s=new C().subVectors(e,n),r=s.length(),o=new zn(t,t,r,i,1,!0);return o.applyQuaternion(new Mn().setFromUnitVectors(new C(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function Ow({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=$e,l=Fr,c=l.a1-l.a0,u=(S,A)=>[r+A*Math.cos(S),o-A*Math.sin(S)],d=new rt(D(new Cn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(dn),n.add("white",D(new Cn(a+.2,ns.r,160,1,l.a1,Ii-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Gt(r,o,ns.r,l.a1,l.a0+Ii,-.45,0,160,!1)),e.add("glowCyan",Gt(r,o,ns.r+.004,l.a1,l.a0+Ii,-.24,-.21,160,!1)),e.add("white",Gt(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Gt(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Gt(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",D(Te(l.r1-ns.r,l.slab,.04),s(S,(ns.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,f=a+.05,p=[];for(let S=0;S<=4;S++)p.push(u(l.a0,f+(h-f)*S/4));let x=Math.ceil(c*h/.45);for(let S=1;S<=x;S++)p.push(u(l.a0+c*S/x,h));for(let S=3;S>=0;S--)p.push(u(l.a1,f+(h-f)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(S,A,R,P)=>(m[0]-S)*R+(m[1]-A)*P>0,_=(S,A,R,P)=>!g(S,A,R,P);t.add("rail",ys(p,.045,l.rail)),n.add("chrome",oi(p.map(([S,A])=>[S,l.rail+.026,A]),.026,.1,8)),n.add("silver",ys(p,0,.045,{facing:_})),n.add("glowCyan",ys(p,0,.04,{facing:g}));for(let S=0;S<p.length;S+=5)n.add("chrome",D(ce(.018,.018,l.rail,8),[p[S][0],l.rail/2,p[S][1]]));let b=l.canopyY,y=a+.02,M=l.r1+.35;n.add("white",D(new Cn(y,M,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",D(new Cn(y,M,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",D(new Cn(M-.13,M-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Gt(r,o,M,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Gt(r,o,M-.002,l.a0,l.a1,b,b+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",D(Te(M-y,.14,.04),s(S,(y+M)/2,b+.07),[0,S,0]));for(let[S,A]of[[23.3,17],[25.2,19]])for(let R=0;R<A;R++){let P=l.a0+(R+.5)*c/A;n.add("glowWhite",D(new Dn(.085,16),s(P,S,b-.003),[Math.PI/2,0,0])),n.add("chrome",D(new Cn(.085,.11,16,1),s(P,S,b-.002),[Math.PI/2,0,0]))}let w=new C,v=new C;for(let S=0;S<6;S++){let A=l.a0+(S+.5)*c/6;kr(A,M-.15,b+.14,w),kr(A,a+.03,b+3.4,v),n.add("silver",Nw(w,v,.014)),n.add("chrome",D(ce(.05,.05,.03,14),v.toArray(),[0,A,Math.PI/2]))}for(let S of[250,290]){let A=S*Math.PI/180;n.add("white",D(Ne(.5,.34,2.4,.05,3),s(A,23.4,.27),[0,A,0])),n.add("dark",D(Te(.32,.1,2.1),s(A,23.4,.05),[0,A,0])),n.add("glowCyan",D(Te(.33,.012,2.11),s(A,23.4,.094),[0,A,0]))}return{floor:d}}function dg(n,{reflection:e=null}={}){let t=new Qt;t.name="atrium";let{cx:i,cz:s,r,h:o}=$e,a={white:new yt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new yt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new yt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new yt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new yt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:xd(4641535,3,"atrium-glow-cyan"),glowBlue:xd(5213695,2.2,"atrium-glow-blue"),glowWhite:xd(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=xd(16777215,5,"atrium-ring-light"),u=hr({color:13623538,opacity:.045,fresnel:.5,side:nn}),d=hr({color:14083830,opacity:.1,fresnel:.6,side:nn}),h=hr({color:14214901,opacity:.08,fresnel:.5,side:nn}),f=hr({color:13623538,opacity:.04,fresnel:.4}),p=new ut,x=new ut,m=new ut,g=new C,_=(Ee,Ae,De)=>kr(Ee,Ae,De,g).toArray(),{doorA0:b,doorA1:y,doorH:M}=ts,w=M+.12,v=Ii/ts.panes,S=.006/r,A=Ee=>Ee>b+1e-6&&Ee<y-1e-6;for(let Ee=0;Ee<ts.panes;Ee++){let Ae=Ee*v+S,De=(Ee+1)*v-S,L=[Ae];for(let E of[b,y])E>Ae&&E<De&&L.push(E);L.push(De);for(let E=0;E+1<L.length;E++){let Z=L[E],we=L[E+1],ve=A((Z+we)/2)?w:.05,Be=Math.max(2,Math.ceil((we-Z)/v*16));m.add("glass",Gt(i,s,r,Z,we,ve,o,Be,!0))}}let R=ts.finDepth,P=o-.55,U=r-R/2-.004;for(let Ee=0;Ee<ts.panes;Ee++){let Ae=Ee*v;if(!A(Ae)){m.add("fin",D(Te(R,P,.022),_(Ae,U,P/2),[0,Ae,0])),p.add("silver",D(Te(R+.04,.06,.05),_(Ae,U,.03),[0,Ae,0])),p.add("silver",D(Te(R+.04,.06,.05),_(Ae,U,P-.03),[0,Ae,0]));for(let De of[1.1,4.7,8.3,11.9]){p.add("chrome",D(Te(.025,.09,.17),_(Ae,r-.0175,De),[0,Ae,0])),p.add("chrome",D(Te(.09,.09,.045),_(Ae,r-.075,De),[0,Ae,0]));for(let L of[-1,1])p.add("chrome",D(ce(.022,.022,.018,14),_(Ae+L*(.055/r),r-.039,De),[0,Ae,Math.PI/2]))}}}let H=o-.55;p.add("white",Gt(i,s,r-.6,0,Ii,H,o,160,!0)),p.add("satin",D(new Cn(r-.6,r-.01,160,1),[i,H,s],[Math.PI/2,0,0])),p.add("glowWhite",D(new Cn(r-.16,r-.1,160,1),[i,H-.004,s],[Math.PI/2,0,0])),p.add("glowCyan",Gt(i,s,r-.605,0,Ii,H+.02,H+.05,160,!0));let I=y,Y=Ii-(y-b);p.add("glowCyan",D(new Cn(r-.17,r-.13,160,1,I,Y),[i,.003,s],[-Math.PI/2,0,0])),p.add("silver",Gt(i,s,r-.03,I,I+Y,0,.05,160,!0));for(let Ee of[b,y])p.add("silver",D(Te(.14,w,.06),_(Ee,r-.03,w/2),[0,Ee,0]));let ee=y-b;p.add("silver",Gt(i,s,r-.06,b,y,M,w,16,!0)),p.add("silver",Gt(i,s,r+.04,b,y,M,w,16,!1)),p.add("silver",D(new Cn(r-.06,r+.04,16,1,-y,ee),[i,M,s],[Math.PI/2,0,0])),p.add("glowWhite",D(new Cn(r-.025,r+.005,16,1,-y,ee),[i,M-.002,s],[Math.PI/2,0,0])),p.add("silver",D(new Cn(r-.22,r+.24,16,1,b,ee),[i,.003,s],[-Math.PI/2,0,0]));let J=ee/2,Q=r-.09;for(let[Ee,Ae,De]of[[b-J,b,.9],[y,y+J,.1]]){m.add("fin",Gt(i,s,Q,Ee+.03/Q,Ae-.03/Q,.06,M-.06,12,!0)),p.add("silver",Gt(i,s,Q-.02,Ee,Ae,0,.06,12,!0)),p.add("silver",Gt(i,s,Q-.02,Ee,Ae,M-.06,M,12,!0));for(let L of[Ee,Ae])p.add("silver",D(Te(.05,M,.05),_(L,Q,M/2),[0,L,0]));p.add("chrome",D(ce(.012,.012,1.1,8),_(Ee+(Ae-Ee)*De,Q-.05,1.05)))}p.add("silver",Gt(i,s,Q-.035,b-J,y+J,M,M+.08,24,!0)),p.add("ceiling",D(new Cn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let Ee=0;Ee<16;Ee++){let Ae=Ee/16*Ii,De=(r+6.4)/2;p.add("white",D(Te(r-6.4,.34,.3),[i+De*Math.cos(Ae),o-.17,s-De*Math.sin(Ae)],[0,Ae,0]))}for(let Ee of[9,16.5])p.add("white",Gt(i,s,Ee,0,Ii,o-.34,o,160,!0)),p.add("white",Gt(i,s,Ee+.3,0,Ii,o-.34,o,160,!1)),p.add("white",D(new Cn(Ee,Ee+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let Ee of[11.15,11.85])p.add("satin",Gt(i,s,Ee,0,Ii,o-.24,o,160,!0)),p.add("satin",Gt(i,s,Ee,0,Ii,o-.24,o,160,!1));let z=new rt(D(ln(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);z.name="ring-light",z.position.set(i,o-.15,s),t.add(z),p.add("chrome",D(ln(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let Ee=0;Ee<4;Ee++)p.add("silver",D(Te(12.8,.12,.12),[i,o+.03,s],[0,Ee*Math.PI/4,0]));let W=new rt(D(new Dn(6.4,96),[0,0,0],[Math.PI/2,0,0]),f);W.name="skylight",W.position.set(i,o+.06,s),t.add(W);let{a0:O,a1:V}=nt,oe=nt.moduleR-.36;p.add("dark",Gt(i,s,nt.r,O,V,nt.bandY0,nt.bandY1,72,!0)),p.add("white",Gt(i,s,nt.r,O,V,nt.bandY1,nt.top,72,!0)),p.add("white",Gt(i,s,nt.r,O,V,2.3,nt.bandY0,72,!0)),p.add("satin",Gt(i,s,nt.r,O,V,0,2.3,72,!0)),p.add("white",Gt(i,s,nt.back,O,V,0,nt.top,72,!1)),p.add("white",D(new Cn(nt.r,nt.back,72,1,O,V-O),[i,nt.top,s],[-Math.PI/2,0,0])),p.add("white",D(new Cn(oe,nt.r,72,1,O,V-O),[i,2.3,s],[-Math.PI/2,0,0])),p.add("white",Gt(i,s,oe,O,V,2.22,2.3,72,!0)),p.add("glowBlue",Gt(i,s,oe-.004,O,V,2.245,2.265,72,!0)),p.add("glowCyan",Gt(i,s,nt.r-.012,O,V,7.1,7.14,72,!0)),p.add("glowCyan",Gt(i,s,nt.r-.012,O,V,2.64,2.68,72,!0));let j=nt.back-oe+.04,he=(nt.back+oe)/2;for(let[Ee,Ae]of[[O-.07/he,-1],[V+.07/he,1]]){p.add("white",D(Te(j,nt.top,.14),[i+he*Math.cos(Ee),nt.top/2,s-he*Math.sin(Ee)],[0,Ee,0]));let De=Ee-Ae*(.075/oe);p.add("glowCyan",D(Te(.04,nt.top-.4,.03),[i+(oe+.02)*Math.cos(De),nt.top/2,s-(oe+.02)*Math.sin(De)],[0,Ee,0]))}let fe=24,ne=new Bn(new $t(.62,2.22,.78),a.white,fe);ne.name="compute-modules";let xe=new Se(.7,2.08),Le=new vt(xe.x,xe.y),ct=new an({name:"module-doors",vertexShader:Cw,fragmentShader:Pw,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:xe}}}),We=new Bn(Le,ct,fe);We.name="module-doors";let et=new Float32Array(fe),He=new cn;for(let Ee=0;Ee<fe;Ee++){let Ae=O+(Ee+.5)*(V-O)/fe;kr(Ae,nt.moduleR,1.11,He.position),He.rotation.set(0,Ae,0),He.updateMatrix(),ne.setMatrixAt(Ee,He.matrix),kr(Ae,nt.moduleR-.316,1.11,He.position),He.rotation.set(0,Ae-Math.PI/2,0),He.updateMatrix(),We.setMatrixAt(Ee,He.matrix),et[Ee]=Ee*7.31+3.7,p.add("chrome",D(Te(.66,.03,.82),[He.position.x,.015,He.position.z],[0,Ae,0]))}Le.setAttribute("aSeed",new mi(et,1)),ne.instanceMatrix.needsUpdate=!0,We.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),We.computeBoundingSphere(),ne.receiveShadow=!0,t.add(ne,We);let K=Ew(e),B=new rt(D(new Dn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),K);B.name="atrium-floor",B.position.set(i,0,s),B.receiveShadow=!0,B.layers.set(dn);let q=Ow({kit:p,low:x,glassKit:m,floorMat:K,at:_});t.add(q.floor);let se=Dw(),$=new rt(D(new vt(se.x1-se.x0,se.z1-se.z0),[0,0,0],[-Math.PI/2,0,0]),Tw(e));$.name="island-tops",$.position.set((se.x0+se.x1)/2,0,(se.z0+se.z1)/2),$.receiveShadow=!0,$.layers.set(dn),t.add(B,$);for(let Ee of fo)x.add("satin",Lf(Ee,0,-md,0)),x.add("silver",Lf(Ee,.004,-.045,-.001)),x.add("glowCyan",Lf(Ee,.006,-md,-md+.05));let ue=rg(.5);x.add("satin",ys(ue,-Lt.depth,0,{closed:!0,facing:Df}));let Pe=cg(ue,.012);x.add("glowCyan",ys(Pe,-.17,-.13,{closed:!0,facing:Df})),x.add("glowBlue",ys(Pe,-Lt.depth+.1,-Lt.depth+.14,{closed:!0,facing:Df}));let F=new an({name:"data-pool",vertexShader:Aw,fragmentShader:Rw,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),re=new rt(D(new vt(Lt.hx*2,Lt.hz*2),[0,0,0],[-Math.PI/2,0,0]),F);re.name="data-pool",re.position.set(Lt.cx,-Lt.depth,Lt.cz),re.layers.set(dn),t.add(re);let de=cg(ue,-.06),N=[];for(let Ee of Lw(de)){N.push(ys(Ee,.035,1)),p.add("chrome",oi(Ee.map(([Ae,De])=>[Ae,1.01,De]),.022,.08,8)),p.add("glowCyan",ys(Ee,0,.035)),p.add("glowCyan",ys(Ee.slice().reverse(),0,.035));for(let Ae=0;Ae<Ee.length;Ae+=5)p.add("chrome",D(ce(.018,.018,1,8),[Ee[Ae][0],.5,Ee[Ae][1]]))}if(N.length){let Ee=new ut;for(let De of N)Ee.add("glass",De);let Ae=Ee.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(Ae)}let Je=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Je.traverse(Ee=>{Ee.isMesh&&(Ee.renderOrder=2)}),t.add(Je);let dt=p.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(dt);let _t=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});_t.traverse(Ee=>Ee.layers.set(dn)),t.add(_t);let Re=.3;return{root:t,reflectors:[B,$,q.floor],bounds:se,update(Ee,Ae,De={}){let L=at(De.activity||0,0,1);Re+=(.3+.7*L-Re)*Math.min(1,Ee*2),F.uniforms.uTravel.value=(F.uniforms.uTravel.value+Ee*(.25+1.4*L))%1e3,F.uniforms.uFlow.value=Re,ct.uniforms.uTime.value=Ae,ct.uniforms.uActivity.value=Re},setLook(Ee){let Ae=Ee.glow==null?1:Ee.glow;for(let De of l)De.color.setHex(De.userData.glow.hex).multiplyScalar(De.userData.glow.k*Ae);c.color.set(Ee.interior.ring).multiplyScalar(Ee.interior.ringPower),a.ceiling.emissiveIntensity=Ee.id==="day"?.16:.22,F.uniforms.uGlow.value=Ae}}}var fr=ns.groundY,pr={pitch:96,rot:18*Math.PI/180},Ff=Math.cos(pr.rot),Uf=Math.sin(pr.rot),hg=13*289,Ul=2400;function Br(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function fg(n,e,t=[0,0]){return t[0]=$e.cx+Ff*n+Uf*e,t[1]=$e.cz-Uf*n+Ff*e,t}function kf(n,e,t=[0,0]){return t[0]=$e.cx+e*Math.cos(n),t[1]=$e.cz-e*Math.sin(n),t}function pg(){return{uHaze:{value:new ze(2902638)},uHazeHigh:{value:new ze(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Se($e.cx,$e.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new ze(16777215)},uSunK:{value:.2},uSkyRefl:{value:new ze(3103372)}}}function vs(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var _s=["uHaze","uHazeHigh","uHazeDensity"],bs=`
#define GROUND_Y (${fr.toFixed(1)})
#define GRID_P ${pr.pitch.toFixed(1)}
#define GRID_C ${Ff.toFixed(7)}
#define GRID_S ${Uf.toFixed(7)}
uniform vec3 uHaze;
uniform vec3 uHazeHigh;
uniform float uHazeDensity;
float cHash(vec2 p) {
  p = mod(p, 289.0);
  p = fract(p * vec2(0.1031, 0.1030));
  p += dot(p, p.yx + 33.33);
  return fract((p.x + p.y) * p.x);
}
float cLine(float d, float w, float px) {
  px = max(px, 1e-4);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}
float cLow(float y) {
  return clamp(1.0 - (y - GROUND_Y) / 560.0, 0.0, 1.0);
}
float cHazeT(vec3 wp) {
  float dist = length(wp - cameraPosition);
  return exp(-dist * uHazeDensity * (0.55 + 1.5 * cLow(wp.y)));
}
vec3 cityHaze(vec3 col, vec3 wp) {
  return mix(mix(uHazeHigh, uHaze, cLow(wp.y)), col, cHazeT(wp));
}
`;var Fw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Uw=`
${bs}
uniform vec2 uCenter;
uniform float uTravel;
uniform float uLights;
uniform float uDensity;
uniform vec3 uBase;
uniform vec3 uStreet;
uniform vec3 uAvenue;
uniform vec3 uRoof;
uniform vec3 uPark;
varying vec3 vWorld;

#define PLAZA_R 77.0

const vec3 HEAD = vec3(1.0, 0.92, 0.8) * 2.4;
const vec3 TAIL = vec3(1.0, 0.12, 0.06) * 1.9;

// One family of parallel streets: centre lines at a = (k + 0.5) * GRID_P, traffic along b.
vec3 streetFamily(float a, float b, float px, float fam, inout float cov) {
  float k = floor(a / GRID_P);
  float off = a - (k + 0.5) * GRID_P;
  float d = abs(off);
  float avenue = 1.0 - step(0.5, mod(k, 4.0));
  float hw = mix(7.0, 11.0, avenue);
  float c = 1.0 - smoothstep(hw - px, hw + px, d);
  cov = max(cov, c);
  vec3 col = uStreet * (exp(-1.6 * d * d / (hw * hw)) * 0.5 * c);
  col += uAvenue * (avenue * cLine(d, 0.55, px) * 2.2);
  float near = 1.0 - smoothstep(1.5, 4.5, px);
  if (near > 0.001) {
    float lampSide = abs(d - (hw - 0.9));
    float lampAlong = abs(fract(b / 24.0 + 0.5) - 0.5) * 24.0;
    col += uStreet * (4.0 * cLine(lampSide, 0.45, px) * cLine(lampAlong, 0.45, px) * near);
    float laneOff = hw * 0.42;
    for (int i = 0; i < 2; i++) {
      float sgn = i == 0 ? 1.0 : -1.0;
      float t = b * sgn + uTravel * (18.0 + 6.0 * avenue);
      float slot = floor(t / 13.0);
      float u = t - slot * 13.0;
      float present = step(cHash(vec2(slot, k * 3.0 + fam * 1.7 + float(i) * 0.61)), uDensity * 0.85);
      float car = cLine(abs(u - 3.0), 2.0, px) * cLine(abs(off - sgn * laneOff), 0.75, px) * present;
      col += (i == 0 ? HEAD : TAIL) * (car * near);
    }
  }
  // Far away the cars melt into a slightly brighter street.
  col += uStreet * (c * (1.0 - near) * 0.22 * uDensity);
  return col;
}

void main() {
  vec2 rel = vWorld.xz - uCenter;
  vec2 q = vec2(GRID_C * rel.x - GRID_S * rel.y, GRID_S * rel.x + GRID_C * rel.y);
  float px = max(max(fwidth(q.x), fwidth(q.y)), 1e-3);
  float r = length(rel);

  // Blocks: low roofs, a few parks, scattered roof lights.
  vec2 blk = floor(q / GRID_P + 0.5);
  float park = step(cHash(blk + 0.37), 0.07);
  vec2 sub = floor(q / 12.0);
  float sh = cHash(sub + 0.11);
  vec3 col = mix(uBase * (0.7 + 0.6 * sh) + uRoof * (sh * 0.4), uPark * (0.8 + 0.4 * sh), park);
  float detail = 1.0 - smoothstep(2.0, 6.0, px);
  vec2 o = vec2(cHash(sub + 3.1), cHash(sub + 7.3)) - 0.5;
  float roofLight = cLine(length(q - (sub + 0.5 + o * 0.6) * 12.0), 0.6, px) * step(sh, 0.4) * (1.0 - park);
  vec3 emit = vec3(1.0, 0.76, 0.48) * (roofLight * 2.4 * detail + 0.03 * (1.0 - detail));

  // Streets in both directions, faded to their average once a block is a few pixels wide.
  float cov = 0.0;
  vec3 st = streetFamily(q.x, q.y, px, 0.0, cov) + streetFamily(q.y, q.x, px, 1.0, cov);
  float gf = smoothstep(GRID_P * 0.05, GRID_P * 0.22, px);
  st = mix(st, uStreet * 0.12 + uAvenue * 0.012, gf);
  cov = mix(cov, 0.3, gf);

  // The plaza at the tower's foot: no grid streets inside the ring road.
  float inPlaza = 1.0 - smoothstep(PLAZA_R - 2.0, PLAZA_R, r);
  st *= 1.0 - inPlaza;
  cov *= 1.0 - inPlaza;
  emit *= 1.0 - inPlaza;
  col = mix(col, uBase * 1.25 + uRoof * 0.2, inPlaza);
  emit += uAvenue * ((cLine(abs(r - 46.0), 0.5, px) + cLine(abs(r - 62.0), 0.4, px)) * 2.2);
  float rd = abs(r - PLAZA_R);
  float road = 1.0 - smoothstep(7.0 - px, 7.0 + px, rd);
  cov = max(cov, road);
  st += uStreet * (exp(-1.6 * rd * rd / 49.0) * 0.5 * road);
  float arc = atan(rel.y, rel.x) * PLAZA_R;
  for (int i = 0; i < 2; i++) {
    float sgn = i == 0 ? 1.0 : -1.0;
    float t = arc * sgn + uTravel * 20.0;
    float slot = floor(t / 13.0);
    float u = t - slot * 13.0;
    float present = step(cHash(vec2(slot, 91.0 + float(i))), uDensity * 0.85);
    float car = cLine(abs(u - 3.0), 2.0, px) * cLine(abs(r - PLAZA_R - sgn * 3.0), 0.75, px) * present;
    st += (i == 0 ? HEAD : TAIL) * car;
  }
  col = mix(col, uBase * 0.55, cov);
  col += (st + emit) * uLights;
  gl_FragColor = vec4(cityHaze(col, vWorld), 1.0);
}
`,kw=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Bw=`
${bs}
uniform vec2 uCenter;
uniform vec3 uFrame;
uniform vec3 uGlassC;
uniform vec3 uSkyRefl;
uniform vec3 uSpine;
uniform float uWindows;
uniform float uLights;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunK;
varying vec3 vWorld;
varying vec3 vNormalW;

#define COLS 64.0
#define FLOOR_H 4.2
#define TOWER_R ${ns.r.toFixed(3)}

void main() {
  vec2 rel = vWorld.xz - uCenter;
  float u = (atan(rel.y, rel.x) / 6.2831853 + 0.5) * COLS;
  float colW = 6.2831853 * TOWER_R / COLS;
  float depth = -vWorld.y;
  float px = max(length(fwidth(vWorld)), 1e-3);
  float ci = floor(u);
  float fu = u - ci;
  float fi = floor(depth / FLOOR_H);
  float fy = depth / FLOOR_H - fi;
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
  vec3 lightK = vec3(0.3) + uSunColor * (max(dot(n, uSunDir), 0.0) * uSunK);
  vec3 glass = uGlassC * lightK + uSkyRefl * (0.2 + 0.8 * fres);
  float dm = min(fu, 1.0 - fu) * colW;
  float df = min(fy, 1.0 - fy) * FLOOR_H;
  float frame = max(cLine(dm, 0.08, px), cLine(df, 0.35, px));
  float detail = 1.0 - smoothstep(0.5, 1.5, px);
  float lit = step(cHash(vec2(ci, fi) + 0.37), uWindows * 0.55);
  float tone = cHash(vec2(ci, fi) + 5.1);
  vec3 wc = tone < 0.6 ? vec3(1.0, 0.8, 0.56) : vec3(0.8, 0.88, 1.0);
  vec3 win = wc * ((0.8 + 0.9 * cHash(vec2(fi, ci) + 9.2)) * lit);
  vec3 emit = mix(vec3(0.92, 0.84, 0.74) * (1.25 * uWindows * 0.55), win, detail);
  vec3 c = mix(glass + emit * 0.9, uFrame * lightK, frame);
  float nb = fu < 0.5 ? ci : ci + 1.0;
  float spine = (1.0 - step(0.5, mod(nb, 8.0))) * cLine(dm, 0.12, px);
  float mech = cLine(abs(mod(depth + 60.0, 120.0) - 60.0), 0.9, px);
  float lobby = smoothstep(400.0, 416.0, depth);
  c += uSpine * (uLights * (spine * 3.0 + mech * 1.6)) + vec3(1.0, 0.82, 0.6) * (uLights * lobby * 1.2);
  gl_FragColor = vec4(cityHaze(c, vWorld), 1.0);
}
`;function mg(n,{quality:e="high"}={}){let t=vs(n,[..._s,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new ze(461846)},uStreet:{value:new ze(16752714)},uAvenue:{value:new ze(4641535)},uRoof:{value:new ze(1712690)},uPark:{value:new ze(463887)}}),i=new an({name:"city-ground",vertexShader:Fw,fragmentShader:Uw,uniforms:t}),s=e==="low"?4200:6e3,r=new Dn(s,96).rotateX(-Math.PI/2),o=new rt(r,i);return o.name="city-ground",o.position.set($e.cx,fr,$e.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(dn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function gg(n){let e=vs(n,[..._s,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new ze(1778996)},uGlassC:{value:new ze(660516)},uSpine:{value:new ze(4641535)}}),t=new an({name:"city-host-facade",vertexShader:kw,fragmentShader:Bw,uniforms:e}),i=-.45,s=i-fr,r=new zn(ns.r,ns.r,s,128,1,!0),o=new rt(r,t);return o.name="city-host-facade",o.position.set($e.cx,(i+fr)/2,$e.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(dn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var zw=`
${bs}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${Ul.toFixed(1)}

void main() {
  float visible = step(fract(aCar.z * 7.13), uDensity);
  float s = (fract(aCar.x + uAir * aLane.w / (2.0 * SPAN)) * 2.0 - 1.0) * SPAN;
  vec2 q = aLane.x < 0.5 ? vec2(aLane.y, s) : vec2(s, aLane.y);
  vec2 dq = (aLane.x < 0.5 ? vec2(0.0, 1.0) : vec2(1.0, 0.0)) * sign(aLane.w);
  vec2 p2 = uCenter + vec2(GRID_C * q.x + GRID_S * q.y, -GRID_S * q.x + GRID_C * q.y);
  vec2 d2 = vec2(GRID_C * dq.x + GRID_S * dq.y, -GRID_S * dq.x + GRID_C * dq.y);
  vec3 c = vec3(p2.x, aLane.z, p2.y);
  vec3 dir = vec3(d2.x, 0.0, d2.y);
  vec3 toCam = cameraPosition - c;
  float dist = length(toCam);
  vec3 side = cross(dir, toCam);
  side /= max(length(side), 1e-4);
  float grow = max(1.0, dist * 0.0022);
  vec3 p = c + dir * (position.x * aCar.y * grow) + side * (position.y * 1.2 * grow);
  vUv = position.xy + 0.5;
  // Fade toward the far end of the lane so the wrap-around is never seen.
  float ends = 1.0 - smoothstep(SPAN * 0.82, SPAN * 0.98, abs(s));
  vFade = cHazeT(c) * visible * ends;
  float k = aCar.w;
  vColor = k < 0.5 ? vec3(1.0, 0.93, 0.82) * 2.4
    : (k < 1.5 ? vec3(1.0, 0.1, 0.05) * 2.0
    : (k < 2.5 ? vec3(0.3, 0.9, 1.0) * 2.4 : vec3(1.0, 0.68, 0.25) * 2.2));
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  if (vFade < 0.002) gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
}
`,Hw=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function xg(n,{quality:e="high"}={}){let t=Br(91),i=pr.pitch,s=e==="low"?2:1,r=[];for(let f=-20;f<=20;f+=4){let p=(f+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:p-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:p+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let f of[-16,-12,12,16]){let p=(f+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:p,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let f of r){let p=Math.floor(2*Ul/f.spacing);for(let x=0;x<p;x++){o.push(f.axis,f.coord,f.y,f.speed);let m=t(),g=f.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/p,7+t()*8,t(),g)}}let l=o.length/4,c=new vt(1,1),u=new vl;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new mi(new Float32Array(o),4)),u.setAttribute("aCar",new mi(new Float32Array(a),4)),u.instanceCount=l;let d=new an({name:"city-traffic",vertexShader:zw,fragmentShader:Hw,uniforms:vs(n,[..._s,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:jn,side:nn}),h=new rt(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(dn),{mesh:h,count:l}}var bg=Math.PI/180,Bf=pr.pitch,Gw=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],Vw=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],Ww={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},Xw=`
attribute vec3 aSize;   // width (local x), height, depth (local z), metres
attribute vec3 aInfo;   // seed (0..1), style, flags
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;     // walls: (along the face, height above the base); roof: local x/z
varying vec3 vInfo;
varying vec3 vSize;
varying float vWall;
varying float vTop;
void main() {
  vec3 lp = position * aSize;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
  bool sideX = abs(normal.x) > 0.5;
  vTop = normal.y > 0.5 ? 1.0 : 0.0;
  vFace = vTop > 0.5 ? lp.xz : vec2(sideX ? lp.z : lp.x, lp.y);
  vWall = sideX ? aSize.z : aSize.x;
  vInfo = aInfo;
  vSize = aSize;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,qw=`
${bs}
uniform vec3 uBody;
uniform vec3 uGlass;
uniform vec3 uSkyRefl;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunK;
uniform float uWindows;
uniform float uNeon;
uniform float uLights;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying vec3 vInfo;
varying vec3 vSize;
varying float vWall;
varying float vTop;

vec3 neonColor(float s) {
  float k = fract(s * 3.17);
  return k < 0.45 ? vec3(0.27, 0.9, 1.0)
    : (k < 0.78 ? vec3(0.3, 0.48, 1.0)
    : (k < 0.95 ? vec3(1.0, 0.68, 0.26) : vec3(1.0, 0.32, 0.85)));
}
float flag(float flags, float b) {
  return mod(floor(flags / b + 0.01), 2.0);
}

void main() {
  float seed = vInfo.x;
  float style = vInfo.y;
  float flags = vInfo.z;
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float px = max(length(fwidth(vWorld)), 1e-3);
  float fres = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
  vec3 lightK = vec3(0.3 + 0.12 * n.y) + uSunColor * (max(dot(n, uSunDir), 0.0) * uSunK);
  vec3 neon = neonColor(seed);
  vec3 col;
  if (flag(flags, 4.0) > 0.5) {
    // Antenna mast.
    col = uBody * lightK * 0.8;
  } else if (vTop > 0.5) {
    // Roof: membrane patches, edge lights, helipad ring.
    vec2 rf = vFace;
    float rh = cHash(floor(rf / 4.0) + seed * 17.0);
    col = uBody * lightK * (0.5 + 0.3 * rh);
    float edge = min(vSize.x * 0.5 - abs(rf.x), vSize.z * 0.5 - abs(rf.y));
    col += neon * (uNeon * cLine(abs(edge - 0.6), 0.22, px) * 2.4 * flag(flags, 2.0));
    float pad = min(vSize.x, vSize.z) * 0.3;
    col += vec3(0.85, 0.95, 1.0) * (uLights * cLine(abs(length(rf) - pad), 0.35, px) * 2.2 * flag(flags, 1.0));
    col += vec3(1.0, 0.85, 0.6) * (uLights * 0.03);
  } else {
    // Walls: window grid by style, faded to its average once a cell is under a pixel or so.
    vec2 f = vFace;
    vec2 cell = style < 0.5 ? vec2(1.6, 3.6) : (style < 1.5 ? vec2(12.0, 3.6) : (style < 2.5 ? vec2(2.4, 3.6) : vec2(1.8, 4.0)));
    vec2 win = style < 0.5 ? vec2(0.86, 0.8) : (style < 1.5 ? vec2(0.96, 0.4) : (style < 2.5 ? vec2(0.5, 0.5) : vec2(0.9, 0.78)));
    vec2 g = f / cell;
    vec2 ci = floor(g);
    vec2 inner = win * 0.5 - abs(g - ci - 0.5);
    vec2 pxc = vec2(px) / cell;
    float wmask = smoothstep(-pxc.x, pxc.x, inner.x) * smoothstep(-pxc.y, pxc.y, inner.y);
    float cover = win.x * win.y;
    float detail = 1.0 - smoothstep(0.3, 0.75, px / min(cell.x, cell.y));
    float m = mix(cover, wmask, detail);
    float pLit = uWindows * (0.3 + 0.55 * fract(seed * 7.31));
    float lit = step(cHash(ci + seed * 13.1), pLit);
    float tone = cHash(ci * 1.37 + seed * 5.3);
    vec3 wc = tone < 0.55 ? vec3(1.0, 0.8, 0.55) : (tone < 0.9 ? vec3(0.8, 0.88, 1.0) : neon * 0.8);
    vec3 winLit = wc * ((0.8 + 0.9 * cHash(ci + 4.2 + seed)) * lit);
    vec3 winAvg = vec3(0.93, 0.84, 0.74) * (1.2 * pLit);
    vec3 emit = mix(winAvg * cover, winLit * wmask, detail);
    vec3 facade = uBody * lightK;
    vec3 glass = uGlass * lightK + uSkyRefl * (0.15 + 0.85 * fres);
    col = mix(facade, glass, m) + emit * 1.25;
    float crown = smoothstep(vSize.y - 3.2, vSize.y - 2.8, f.y) * (1.0 - smoothstep(vSize.y - 0.8, vSize.y - 0.4, f.y));
    col += neon * (uNeon * crown * 2.2 * flag(flags, 8.0));
    if (style > 2.5) {
      float corner = vWall * 0.5 - abs(f.x);
      float band = abs(fract(f.y / 40.0 + 0.5) - 0.5) * 40.0;
      col += neon * (uNeon * (cLine(corner, 0.35, px) * 2.6 + cLine(band, 0.45, px) * 1.8));
    }
  }
  gl_FragColor = vec4(cityHaze(col, vWorld), 1.0);
}
`;function $w(n,e){return Math.hypot(n-$e.cx,e-$e.cz)}function Yw(n,e){let t=Br(17),i=n==="low"?1500:2600,s=Math.ceil(i/Bf)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=Gw.map(c=>{let[u,d]=kf(c.a*bg,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let f=c*Bf+d,p=u*Bf+h,x=Math.hypot(f,p);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,_=12+t()*20,b=(t()-.5)*Math.max(0,37-g),y=(t()-.5)*Math.max(0,37-_);fg(f+b,p+y,a);let M=a[0],w=a[1];if(e.some(I=>Math.hypot(I.x-M,I.z-w)<I.rad))continue;let v=at((x-120)/650,0,1),S=22+Math.pow(t(),2.2)*(70+250*v),A=0;for(let I of o)A=Math.max(A,Math.exp(-((M-I.x)**2+(w-I.z)**2)/I.r2));S+=A*(140+220*t());let R=Math.min(fr+S,A>.3?60:-40),P=t(),U=A>.3?P<.3?0:P<.45?1:P<.6?2:3:P<.35?0:P<.6?1:P<.9?2:3,H=0;Math.min(g,_)>=22&&t()<.18&&(H|=1),t()<.45&&(H|=2),t()<.35&&(H|=8),l.push({x:M,z:w,w:g,d:_,base:fr-20,top:R,rot:pr.rot,seed:t(),style:U,flags:H})}return l}function Kw(n){let e=Br(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function Zw(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*bg,[d,h]=kf(u,c.r),f=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):pr.rot,p={x:d,z:h,w:c.w,d:c.d,base:fr-20,top:c.top,rot:f,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(p),p};for(let c of Vw){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(Ww);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function yg(n,e,t){let i=new $t(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Bn(i,e,s),l=new cn;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new mi(r,3)),i.setAttribute("aInfo",new mi(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var Jw=`
${bs}
attribute float aSeed;
uniform float uTime;
varying float vBlink;
varying float vFade;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_PointSize = clamp(1600.0 / max(-mv.z, 1.0), 1.5, 6.0);
  vBlink = step(0.55, fract(uTime * (0.45 + fract(aSeed * 3.1) * 0.3) + aSeed));
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * mv;
}
`,jw=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function Qw(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function eE(n,e,t,i){let s=Br(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,f]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...Qw(d,h*d.w/2.15,f*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new qt;l.setAttribute("position",new pt(r,3)),l.setAttribute("aSeed",new pi(a,1));let c=new an({name:"city-beacons",vertexShader:Jw,fragmentShader:jw,uniforms:vs(n,[..._s,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:jn}),u=new tl(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(dn),{points:u,count:o}}var yd=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],tE=6,nE=`
${bs}
attribute vec4 aCell;
attribute vec4 aTint;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
varying float vFade;
void main() {
  vUv = aCell.xy + uv * aCell.zw;
  vTint = aTint.rgb;
  vSeed = aTint.w;
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,iE=`
uniform sampler2D tAtlas;
uniform float uTime;
uniform float uNeon;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
varying float vFade;
void main() {
  float m = texture2D(tAtlas, vUv).a;
  float fl = vSeed > 0.82 ? step(0.16, fract(sin(floor(uTime * 9.0 + vSeed * 50.0) * 12.9898) * 43758.5453)) : 1.0;
  gl_FragColor = vec4(vTint * ((3.0 * m + 0.1) * fl * uNeon * vFade), 1.0);
}
`;function sE(){return{atlas:zt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),yd.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Yt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function rE(n,e){let t=Br(53),i=[],s=n.filter(o=>{let a=$w(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*yd.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[$e.cx-o.x,$e.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?tE:Math.floor(t()*yd.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function oE(n,e,t){let{atlas:i,cols:s,rows:r}=sE(),o=Br(61),a=rE(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new vt(1,1),h=new an({name:"city-signs",vertexShader:nE,fragmentShader:iE,uniforms:vs(n,[..._s,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:jn,side:nn}),f=new Bn(d,h,l);f.name="city-signs";let p=new cn,x=new ze;return a.forEach((m,g)=>{p.position.set(m.pos[0],m.pos[1],m.pos[2]),p.rotation.set(0,0,0),p.lookAt($e.cx,m.tilt?0:m.pos[1],$e.cz),p.scale.set(m.w,m.w/4,1),p.updateMatrix(),f.setMatrixAt(g,p.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],g*4),x.set(yd[_][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new mi(c,4)),d.setAttribute("aTint",new mi(u,4)),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,f.layers.set(dn),{mesh:f,count:l}}var vg={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function _g(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Yt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Yt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Yt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Yt}`,n.fillText(vg[i.phase]||vg.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Ht}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Yt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let f=(c-l)/a.length;a.forEach((p,x)=>{let m=(u-d)*p/h;n.fillRect(l+x*f+2,u-m,Math.max(2,f-4),m)})}function aE(n){let i=new Array(40).fill(0),s=zt(1024,Math.round(1024*40/96),(x,m,g)=>_g(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new Kt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Qt;o.name="city-billboard";let a=new rt(new vt(96,40),r);o.add(a);let l=new rt(new $t(98,42,1.2),new Kt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new Kt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new rt(new $t(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",f=1,p=0;return{group:o,update(x,m){p+=x,p>=1&&(p=0,i.shift(),i.push(m.tps||0)),f+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;f<1||g===h||(f=0,h=g,s.redraw((_,b,y)=>_g(_,b,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var lE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,cE=`
${bs}
uniform vec3 uColor;
uniform float uGain;
varying vec3 vWorld;
void main() {
#ifdef ADDITIVE
  gl_FragColor = vec4(uColor * (uGain * cHazeT(vWorld)), 1.0);
#else
  gl_FragColor = vec4(cityHaze(uColor * uGain, vWorld), 1.0);
#endif
}
`;function va(n,e,t,i=!1){return new an({name:i?"city-glow-add":"city-glow",vertexShader:lE,fragmentShader:cE,defines:i?{ADDITIVE:""}:{},uniforms:vs(n,_s,{uColor:{value:new ze(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?jn:Hs})}var uE=`
uniform float uLen;
varying float vAlong;
varying float vEdge;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normalize(vec3(position.x, 0.0, position.z) + vec3(1e-5, 0.0, 0.0)));
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,dE=`
uniform float uIntensity;
uniform float uTime;
uniform float uLen;
uniform float uCore;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.7) : pow(vEdge, 2.5) * 0.35;
  // Pulses evenly spaced in log distance, so they look evenly spaced on screen, moving toward the tank.
  float pulse = pow(fract(log(vAlong + 3.0) * 6.0 + uTime * 3.0), 8.0);
  float ends = smoothstep(0.0, 1.5, vAlong) * smoothstep(0.0, 6.0, uLen - vAlong);
  float k = prof * (0.55 + 2.2 * pulse) * ends * uIntensity;
  gl_FragColor = vec4(uColor * (3.0 * k), 1.0);
}
`,hE=`
${bs}
uniform float uLen;
varying float vAlong;
varying float vEdge;
varying float vFade;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normalize(vec3(position.x, 0.0, position.z) + vec3(1e-5, 0.0, 0.0)));
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  vFade = cHazeT(wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,fE=`
uniform float uTime;
uniform float uCore;
uniform float uGain;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
varying float vFade;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.8) : pow(vEdge, 2.5) * 0.3;
  float pulse = pow(fract(vAlong / 140.0 - uTime * 0.35), 10.0);
  float fade = exp(-vAlong / 1600.0) * smoothstep(0.0, 20.0, vAlong);
  gl_FragColor = vec4(uColor * (prof * (0.6 + 2.0 * pulse) * fade * uGain * vFade * 2.5), 1.0);
}
`;function Mg(n,e,t=16){return new zn(e,n,1,t,1,!0).translate(0,.5,0)}function pE(n,e,t){let i=new Qt;i.name="compute-tower";let s=va(n,4646655,4),r=va(n,10480383,5),o=va(n,5078015,4),a=va(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(w,v,S,A)=>{let R=new rt(new wi(w,v,10,160),A);return R.rotation.x=Math.PI/2,R.position.set(e.x,S,e.z),i.add(R),R};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new rt(new zn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let f=new Se(t.x-e.x,t.z-e.z).normalize(),p=new C(e.x+f.x*(c+2),100,e.z+f.y*(c+2)),x=new rt(new Nn(4,20,14),r);x.position.copy(p),i.add(x);let m=new C().subVectors(p,t),g=m.length(),_=new Mn().setFromUnitVectors(new C(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new ze(6282495)}};for(let[w,v,S]of[[.07,2,1],[.38,8,0]]){let A=new an({name:S?"beam-core":"beam-glow",vertexShader:uE,fragmentShader:dE,uniforms:{...b,uCore:{value:S}},transparent:!0,depthWrite:!1,blending:jn,side:nn}),R=new rt(Mg(w,v,16),A);R.position.copy(t),R.quaternion.copy(_),R.scale.set(1,g,1),R.frustumCulled=!1,R.renderOrder=3,i.add(R)}let y=new Kt({name:"beam-receiver"});y.color.setHex(6282495).multiplyScalar(4);let M=new rt(new wi(.5,.05,8,48),y);return M.rotation.x=Math.PI/2,M.position.copy(t),i.add(M),i.traverse(w=>{w.isMesh&&w.renderOrder===0&&(w.renderOrder=5)}),{group:i,setLook(w){s.uniforms.uGain.value=4*(.35+.65*w.neon),r.uniforms.uGain.value=5*(.4+.6*w.neon),o.uniforms.uGain.value=4*(.35+.65*w.neon),a.uniforms.uColor.value.set(w.body)},update(w,v,S){b.uIntensity.value=Math.max(.08,v)*S,x.scale.setScalar(.6+v*.8),M.scale.setScalar(.8+v*.6+Math.sin(w*6)*.05*v),d.rotation.z=w*.12},glows:l}}function mE(n,e){let t=new Qt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new ze(8378623)}};for(let[h,f]of[[5,1],[20,0]]){let p=new an({name:f?"tether-core":"tether-glow",vertexShader:hE,fragmentShader:fE,uniforms:vs(n,_s,{...r,uCore:{value:f}}),transparent:!0,depthWrite:!1,blending:jn,side:nn}),x=new rt(Mg(1,1,14),p);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new rt(new wi(a,1.6,8,192),va(n,4646655,3.2,!0)),c=new rt(new wi(a*.8,1.1,8,160),va(n,5078015,3,!0)),u=new Qt,d=new Qt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function Sg({quality:n="high",beamTarget:e=new C(-8,3,-.7)}={}){let t=new Qt;t.name="city";let i=pg(),s=Zw(),r=s.towers.filter(A=>A.mega).map(A=>({x:A.x,z:A.z,rad:Math.max(A.w,A.d)*.75+30})),o=Yw(n,r),a=Kw(o),l=vs(i,[..._s,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new ze(725538)},uGlass:{value:new ze(462106)}}),c=new an({name:"city-towers",vertexShader:Xw,fragmentShader:qw,uniforms:l}),u=yg(o.concat(a),c,"city-towers");u.layers.set(dn);let d=yg(s.towers,c,"city-megatowers"),h=eE(i,o,a,s),f=mg(i,{quality:n}),p=gg(i),x=xg(i,{quality:n}),m=oE(i,o,s),g=aE(s.billboard),_=pE(i,s.compute,e),b=mE(i,s);t.add(f.mesh,p.mesh,u,d,h.points,x.mesh,m.mesh,g.group,_.group,b.group);let y=0,M=0,w=0,v=1,S=1;return{root:t,update(A,R,P={}){let U=at(P.activity||0,0,1);y+=(U-y)*Math.min(1,A*1.5);let H=.5+1.5*y;M=(M+A*H)%hg,w=(w+A*H)%(2*Ul),i.uTime.value=R,i.uTravel.value=M,i.uAir.value=w,i.uDensity.value=(.3+.7*y)*v,_.update(R,y,S),b.update(R),g.update(A,P)},setLook(A){let R=A.city;i.uHaze.value.set(R.haze),i.uHazeHigh.value.set(R.hazeHigh),i.uHazeDensity.value=R.hazeDensity,i.uSkyRefl.value.set(R.skyRefl),i.uWindows.value=R.windows,i.uNeon.value=R.neon,i.uLights.value=R.lights,i.uBeacons.value=R.beacons,i.uTraffic.value=R.traffic,i.uSunK.value=R.sunK,i.uSunDir.value.fromArray(A.sun.dir).normalize(),i.uSunColor.value.set(A.sun.color),l.uBody.value.set(R.body),l.uGlass.value.set(R.glass),f.setLook(R),p.setLook(R),_.setLook(R),b.setLook(R),v=R.trafficScale??1,S=.45+.55*R.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var wg=724504;function zf(n,e=1){let t=new Kt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var gE={low:0,medium:1024,high:2048,ultra:4096};function xE(n,e){let t=gE[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var po=new C,vd=new C,_d=new lr;function yE(n,e,t,i=4.6){vd.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(vd).addScaledVector(e,60),n.target.position.copy(vd),n.updateMatrixWorld(),n.target.updateMatrixWorld(),_d.position.copy(n.position),_d.lookAt(vd),_d.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let f of[t.z0,t.z1])po.set(d,h,f).applyMatrix4(_d.matrixWorldInverse),s=Math.min(s,po.x),r=Math.max(r,po.x),o=Math.min(o,po.y),a=Math.max(a,po.y),l=Math.min(l,-po.z),c=Math.max(c,-po.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function ai(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ze(new vt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(dn),o}function Eg(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Qt;a.name="stage";let l=ag(i,s,{quality:t});a.add(l.dome);let c=dg(n,{reflection:r});a.add(c.root);let u=Sg({quality:t,beamTarget:o});a.add(u.root);let d=new la(16777215,3);d.name="sun",a.add(d,d.target);let h=new xl(16777215,8947848,1);h.name="sky-light";let f=new la(16777215,.5);f.name="fill",a.add(h,f,f.target),xE(d,t);let p=new C;function x(m){l.setLook(m),p.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,yE(d,p,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,f.color.set(m.fill.color),f.intensity=m.fill.intensity,f.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),f.target.position.set(0,0,-1),f.updateMatrixWorld(),f.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,_){c.update(m,g,_),u.update(m,g,_)},setLook:x,dispose(){l.dispose()}}}var Tg=Math.PI/180;function Ag(n,e){let t=n*Tg,i=e*Tg;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function Rg(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var mo=["dusk","day"],zr="dusk",mn={min:.6,max:1.6,step:.05,initial:1},Cg={dusk:{id:"dusk",clear:858675,sun:{dir:Ag(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:Rg([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:Ag(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:Rg([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function Hf(n){return Cg[n]||Cg[zr]}function Pg(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function kl(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function Bl({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return zt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,f=d%5===0,[p,x]=u(h,f?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=f?5:2,r.beginPath(),r.moveTo(p,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Yt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[f,p]=u(h/(t.length-1),136);r.fillText(d,f,p)}),r.font=`700 34px ${Yt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Yt}`,r.fillText(e,a,a+130)})}function Gf(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(Ut*e)));return zt(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Ht}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function Ms(n,e,t,i="#4d6bfe"){return zt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,Pg(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,Pg(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Ht}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",kl(s,n,r-170,46,700,Yt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",kl(s,e.toUpperCase(),r-170,24,600,Yt),s.fillText(e.toUpperCase(),152,100)})}function bd(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return zt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",kl(o,n,t-20,Math.round(i*.42),700,Yt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",kl(o,e,t-20,Math.round(i*.26),600,Yt),o.fillText(e,12,i*.76))})}function Md(n,e,{bg:t="#05070a",glow:i=0}={}){let s=zt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Ht:Yt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;kl(a,c.text,n-32,u,c.weight||600,c.mono?Ht:Yt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function Ig(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=zt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Ht}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function Lg(){return zt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Yt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function Dg(){return zt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Yt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var yn=new C(-8,0,-.7),go=.41,Ng=1.9,Vf=1.86;function vE(){return zt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function Og(n){let e=Rt("fuel"),t=Rt("tank",[yn.x,0,yn.z]);t.userData.solid="tank",e.add(t),e.add(ai(n,2.6,2.6,[yn.x,0,yn.z],.6));let i=new ut;i.add("graphite",D(Ne(1.8,.28,1.8,.05),[0,.2,0]));for(let[U,H]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",D(ce(.07,.08,.06,20),[U,.03,H]));for(let U of[.375,2.345])i.add("steel",D(ce(.83,.83,.07,72),[0,U,0])),i.add("chrome",ya(18,.775,U+(U<1?.04:-.04),.017,.016)),i.add("rubber",D(ce(.712,.712,.03,64),[0,U+(U<1?.05:-.05),0]));i.add("alu",zi([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let U=0;U<6;U++){let H=U/6*Ut+.26,I=Math.cos(H)*.79,Y=Math.sin(H)*.79;i.add("chrome",D(ce(.016,.016,2.04,12),[I,1.36,Y]));for(let ee of[.33,2.4])i.add("steel",D(ce(.03,.03,.03,6),[I,ee,Y]))}i.add("steel",D(ce(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",D(ce(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",D(Ne(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",D(ce(.07,.08,.05,24),[0,2.695,0])),i.add("steel",D(ce(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",D(ce(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",D(Ne(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ze(ce(.7,.7,Ng,72,!0),n.glass,[0,go+Ng/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ze(ce(.685,.685,1,72),n.fuel,[0,go+.5,0],null,null,{cast:!1}),o=Ze(new Dn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ze(ln(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Bn(new Nn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(U,H)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Ut,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Ut+H}));t.add(c);let d=Ze(new vt(.085,Vf),Wn(Lg().tex,.1),[0,go+.02+Vf/2,.892],null,null,{cast:!1}),h=Ze(new ks(.02,.05,3),Zt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let f=Zt(4054148,2.5),p=Ze(new Nn(.07,24,12,0,Ut,0,Math.PI/2),f,[0,2.72,0],null,null,{cast:!1});t.add(p);let x=Rt("fuel-hmi",[yn.x+.95,0,yn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new ut;m.add("graphite",D(Ne(.36,.04,.3,.015),[0,.02,0])),m.add("alu",D(ce(.035,.035,.95,16),[0,.5,0])),m.add("graphite",D(Ne(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Md(640,384,{bg:"#04070c"}),_=Ze(new vt(.66,.396),Nl(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(_),e.add(x),e.add(ai(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new ut,y=(U,H)=>new C(U,H,yn.z);b.add("steel",oi([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),b.add("steel",oi([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),b.add("steel",D(ce(.1,.1,.025,24),[-6.93,.375,yn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(U=>D(ce(.012,.012,.09,6),[-6.925,.375+Math.cos(U)*.075,yn.z+Math.sin(U)*.075],[0,0,Math.PI/2]))),b.add("blue",D(ce(.085,.085,.18,24),[-6.6,.375,yn.z],[0,0,Math.PI/2])),b.add("chrome",D(ce(.022,.022,.26,12),[-6.6,.52,yn.z])),b.add("steel",D(ce(.045,.05,.1,16),[-6.6,.47,yn.z])),b.add("orange",D(ln(.11,.012,8,40),[-6.6,.64,yn.z],[Math.PI/2,0,0]));for(let U=0;U<3;U++)b.add("orange",D(new $t(.21,.014,.014),[-6.6,.64,yn.z],[0,U/3*Math.PI,0]));for(let U of[.945,1.355])b.add("alu",D(ce(.085,.085,.05,32),[-6.05,U,yn.z]));b.add("chrome",...[0,1,2,3].map(U=>D(ce(.008,.008,.41,6),[-6.05+Math.cos(U*1.5708+.78)*.078,1.15,yn.z+Math.sin(U*1.5708+.78)*.078])));for(let U of[-6.8,-6.25])b.add("graphite",D(Ne(.12,.33,.16,.015),[U,.165,yn.z]));b.add("steel",D(Ne(.22,.09,.22,.02),[-4.75,2.1,yn.z])),b.add("chrome",ya(4,.12,2.15,.012,.012,.78).map(U=>U.translate(-4.75,0,yn.z))),e.add(b.build(n,{name:"feed"}));let M=Ze(ce(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,yn.z],null,null,{cast:!1,receive:!1}),w=vE().tex,v=new yt({color:330264,emissive:16777215,emissiveMap:w,emissiveIntensity:1.8,roughness:.3}),S=Ze(ce(.034,.034,.36,24,!0),v,[-6.05,1.15,yn.z],null,null,{cast:!1});e.add(M,S);let A=.5,R="",P=new cn;return{root:e,anchors:{tank:new C(yn.x,2.9,yn.z),hmi:new C(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(U){let H=JSON.stringify(U);H!==R&&(R=H,g.set(U))},update(U,H,I){A=en(A,at(I.level,.02,1),2.5,U);let Y=A*Vf;r.scale.y=Y,r.position.y=go+.012+Y/2,o.position.y=a.position.y=go+.012+Y+.001,h.position.y=go+.02+Y;let ee=at(I.flow,0,1);for(let J=0;J<l;J++){let Q=u[J];Q.y+=U*(.05+ee*.32)*Q.v/Math.max(.25,Y),Q.y>1&&(Q.y=0,Q.a=Math.random()*Ut,Q.r=Math.sqrt(Math.random())*.6);let z=Math.sin(H*3+Q.w)*.01;P.position.set(Math.cos(Q.a)*Q.r+z,go+.03+Q.y*Math.max(0,Y-.04),Math.sin(Q.a)*Q.r),P.scale.setScalar(Q.s*(.3+.7*Math.min(1,(Y-Q.y*Y)*10+.3))),P.updateMatrix(),c.setMatrixAt(J,P.matrix)}c.instanceMatrix.needsUpdate=!0,w.offset.y-=U*(.15+ee*2.6),v.emissiveIntensity=.5+ee*2.2,f.emissive.setHex(I.peak?16753978:4054148),f.emissiveIntensity=1.6+Math.sin(H*2.2)*.6}}}var Sd=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],xi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},tn={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},_a=new Set(["engraver","labeler"]),_E=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function Ug(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of _E)if(i.test(e))return t;return"generic"}function wd(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function Xf(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function zl(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function Hl(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=Hl(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function kg(n,e){let t=wd(e),i=Hl(t,["file_path","path","filePath","files"]);if(i)return zl(Xf(i)||i);let s=Hl(t,["command","cmd","script","code"]);if(s)return zl(s.split(`
`).find(a=>a.trim())||s);let r=Hl(t,["url"]);if(r)try{return zl(new URL(r).host||r)}catch{return zl(r)}let o=Hl(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?zl(o):""}function Wf(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function Fg(n,e){let t=Wf(n),i=Wf(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function Bg(n,e){let t=String(n||"").toLowerCase(),i=wd(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:Wf(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=Fg(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=Fg(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var Hr=new C(-4,0,-.7),ba=new C(-2.08,0,1.54),zg=1.45;function Hg(n,e,t,i,s,r=.02,o=0){let a=new ps,l=(u,d,h,f,p,x)=>{u.moveTo(d+x,h),u.lineTo(d+f-x,h),u.quadraticCurveTo(d+f,h,d+f,h+x),u.lineTo(d+f,h+p-x),u.quadraticCurveTo(d+f,h+p,d+f-x,h+p),u.lineTo(d+x,h+p),u.quadraticCurveTo(d,h+p,d,h+p-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new or;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new Bs(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function Gg(n,e,{x:t,y:i,r:s,face:r}){let o=new ut;o.add("chrome",D(ln(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",D(ce(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new yt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ze(new Dn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=Rt("needle",[t,i,.02]),c=new ut;return c.add("orange",new $t(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new $t(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",ce(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ze(new Dn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function Vg(n){let e=Rt("engine"),t=Rt("engine-body",[Hr.x,0,Hr.z]);t.userData.solid="engine",e.add(t),e.add(ai(n,4.8,2.7,[Hr.x+.35,0,Hr.z],.62));let i=new ut;i.add("graphite",D(Ne(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",D(Ne(3.94,.04,1.94,.015),[.35,.44,0]));for(let ue of[-1.45,2.15])for(let Pe of[-.8,.8])i.add("rubber",D(ce(.08,.09,.06,20),[ue,.03,Pe]));for(let ue of[-.72,.62])i.add("graphite",D(Ne(.22,.56,1,.03),[ue,.72,0])),i.add("steel",D(Ne(.26,.04,1.04,.01),[ue,.47,0])),i.add("chrome",...[-.4,.4].map(Pe=>D(ce(.02,.02,.03,6),[ue,.5,Pe])));i.add("graphite",D(Ne(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let ue of[1.435,2.165])i.add("graphite",D(Ne(.07,1.62,.82,.02),[ue,1.24,-.1]));for(let ue of[.46,2.02])i.add("graphite",D(Ne(.78,.06,.82,.02),[1.8,ue,-.1]));i.add("aluDark",Hg(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",D(new vt(.5,.18),[1.8,.6,.335])),i.add("chrome",D(ce(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",D(ce(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",D(ce(.05,.065,.12,20),[.8,2.12,0]));for(let ue=0;ue<4;ue++)i.add("chrome",D(ln(.034,.007,8,24),[.8,2.2+ue*.03,0],[Math.PI/2,0,0]));i.add("orange",D(ce(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",D(ce(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",D(ce(.05,.056,.03,20),[2,2.73,-.36]));for(let ue of[.12,.28])i.add("rubber",oi([[ue,.95,.42],[ue,.62,.86],[ue,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=Rt("turbine",[0,zg,0],[0,0,-Math.PI/2]);t.add(s);let r=new ut;r.add("alu",zi([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",D(ce(.6,.6,.56,64),[0,-.72,0]));for(let ue=0;ue<9;ue++)r.add("alu",D(ce(.665,.665,.022,64),[0,-.97+ue*.06,0]));r.add("steel",D(ce(.69,.69,.05,72),[0,-.445,0])),r.add("steel",D(ce(.69,.69,.05,72),[0,.405,0])),r.add("chrome",ya(20,.66,-.413,.016,.014)),r.add("chrome",ya(20,.66,.373,.016,.014,.157)),r.add("alu",D(ce(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",zi([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",D(ce(.06,.06,.26,24),[0,1.33,0])),r.add("grille",D(ce(.6,.6,.012,64),[0,-1.2,0]));for(let ue of[.22,.37,.52])r.add("chrome",D(ln(ue,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let ue=0;ue<6;ue++)r.add("chrome",D(new $t(1.18,.012,.028),[0,-1.205,0],[0,ue/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=Rt("rotor"),a=new ut;a.add("darkSteel",D(ce(.24,.24,.8,48),[0,-.02,0]));for(let[ue,Pe,F,re]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let de=0;de<ue;de++){let N=Ne(.32,re,.014,.004,1);N.rotateX(F),N.translate(.41,Pe,0),N.rotateY(de/ue*Ut),a.add("chrome",N)}a.add("chrome",zi([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=Zt(5078015,1),c=[-.33,-.02,.29].map(ue=>D(ce(.247,.247,.026,48,!0),[0,ue,0])),u=new ut().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ze(ce(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=Ms(tn.engine.zh,tn.engine.en,tn.engine.code);t.add(Ze(new vt(.5,.14),Wn(h.tex,.35),[.76,zg+.05,.628],null,null,{cast:!1}));let f=Ze(Af(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),p=Ze(Af(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*ji,m=-4*ji;t.add(f,p),t.add(Ze(new vt(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let _=[16726832,16753183,3461498,5078015].map((ue,Pe)=>{let F=Zt(ue,.15);return t.add(Ze(ce(.055,.055,.085,24),F,[2,2.66-Pe*.09,-.36],null,null,{cast:!1})),F}),b=Rt("console",[-.35,0,1.22]);t.add(b);let y=new ut;y.add("graphite",D(Ne(2.2,.82,.46,.03),[0,.41,0])),y.add("rubber",D(Ne(2.16,.06,.4,.02),[0,.03,.01])),b.add(y.build(n,{name:"console"}));let M=Ms(tn.console.zh,tn.console.en,tn.console.code);b.add(Ze(new vt(.72,.2),Wn(M.tex,.35),[0,.6,.232],null,null,{cast:!1}));let w=Rt("panel",[0,.98,.02],[-.62,0,0]);b.add(w);let v=new ut;v.add("aluDark",D(Ne(2.24,.62,.06,.02),[0,0,-.03])),v.add("graphite",Hg(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),w.add(v.build(n,{name:"panel"}));let S=Gg(n,w,{x:-.74,y:0,r:.205,face:Bl({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),A=Gg(n,w,{x:.86,y:.08,r:.13,face:Bl({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),R=.028,P=.04,U=ce(R,R,P,24).rotateZ(-Math.PI/2),H=Gf(P,R),I=Gf(P,R,{inverted:!0}),Y=ue=>new yt({map:ue.tex,emissive:16777215,emissiveMap:ue.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),ee=[.19,.095,0,-.095,-.19],J=[],Q=new Bn(U,Y(H),36),z=new Bn(U,Y(I),2);Q.castShadow=z.castShadow=!1;let W=0;for(let ue=0;ue<4;ue++)for(let Pe=0;Pe<8;Pe++)J.push({inst:Q,index:W++,x:.16+.163-Pe*.044,y:ee[ue],row:ue,power:Pe});for(let ue=0;ue<6;ue++){let Pe=ue<2;J.push({inst:Pe?z:Q,index:Pe?ue:W++,x:.16+.163-ue*.044-(Pe?0:.03),y:ee[4],row:4,power:ue})}w.add(Q,z),w.add(Ze(new Dn(.006,12),Zt(15855592,.6),[.16+.163-2*.044+.022-.015,ee[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([ue,Pe],F)=>{let re=bd(ue,Pe,{w:256,h:80}).tex;w.add(Ze(new vt(.2,.0625),Wn(re,.2),[.16-.29,ee[F],.012],null,null,{cast:!1}))}),w.add(Ze(new vt(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let oe=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([ue,Pe],F)=>{let re=.66+F*.13,de=new ut().add("chrome",D(ce(.032,.032,.014,24),[re,-.17,.007],[Math.PI/2,0,0]));w.add(de.build(n,{name:"lamp",castShadow:!1}));let N=Zt(Pe,.15);w.add(Ze(new Nn(.024,20,10,0,Ut,0,Math.PI/2),N,[re,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Je=bd(ue,"",{w:128,h:48}).tex;return w.add(Ze(new vt(.1,.0375),Wn(Je,.2),[re,-.235,.004],null,null,{cast:!1})),N}),j=[];for(let ue=0;ue<24;ue++){let Pe=new Us({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),F=new ir(Pe);F.visible=!1,t.add(F),j.push({sp:F,mat:Pe,life:0,vx:0,vz:0})}let he=0,fe=Rt("dispenser",[ba.x,0,ba.z]);fe.userData.solid="dispenser",e.add(fe);let ne=new ut;ne.add("white",D(Ne(.5,1.2,.56,.03),[0,.6,0])),ne.add("plastic",D(Te(.02,.05,.36),[.252,.922,0])),ne.add("aluDark",D(Ne(.54,.05,.6,.015),[0,1.225,0])),ne.add("grille",D(new vt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),fe.add(ne.build(n,{name:"dispenser"}));let xe=bd(tn.dispenser.zh,`${tn.dispenser.en} · ${tn.dispenser.code}`.toUpperCase(),{w:256,h:80});fe.add(Ze(new vt(.34,.106),Wn(xe.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let Le=Zt(5078015,.3);fe.add(Ze(new $t(.012,.012,.3),Le,[.256,.97,0],null,null,{cast:!1})),e.add(ai(n,.9,.9,[ba.x,0,ba.z],.5));let ct=new ut().add("rubber",oi([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(ct.build(n,{name:"conduit"}));let We=new Kt({visible:!1}),et=(ue,Pe,F,re)=>{let de=new rt(new $t(Pe[0],Pe[1],Pe[2]),We);return de.position.set(F[0],F[1],F[2]),de.userData.hoverId=ue,re.add(de),{id:ue,object:de}},He={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},K=new wt,B=new Float32Array(8),q=new ze,se={reasoning:new ze(10185727),generating:new ze(4160511),tool:new ze(16753183),idle:new ze(2838456)};function $(ue,Pe,F){let re=Math.max(0,Pe);for(let de=0;de<F;de++){let N=Math.pow(10,de),Je=Math.floor(re/N)%10,dt=re%N,_t=0;de===0?_t=re-Math.floor(re):dt>N-1&&(_t=dt-(N-1)),B[de]=-((Je+_t+.5)/10)*Ut}for(let de of J)de.row===ue&&(K.makeRotationX(B[de.power]),K.setPosition(de.x,de.y,.03),de.inst.setMatrixAt(de.index,K))}return{root:e,anchors:{engine:new C(Hr.x,2.5,Hr.z),console:new C(Hr.x-.35,1.45,Hr.z+1.22),dispenser:new C(ba.x,1.45,ba.z)},hover:[et("engine",[3.2,1.7,1.5],[.2,1.45,0],t),et("console",[2.3,1.35,.8],[-.35,.68,1.22],t),et("dispenser",[.6,1.3,.62],[0,.65,0],fe)],pulseDispenser(){He.dispPulse=1},update(ue,Pe,F){let re=F.phase,de=re==="generating"||re==="reasoning",N=.35+at(F.tps,0,140)*.16+(re==="thinking"?.8:0);He.rotorSpeed=en(He.rotorSpeed,N,1.4,ue),He.rotorAngle+=He.rotorSpeed*ue,o.rotation.y=He.rotorAngle,f.rotation.z=x+He.rotorAngle*.45,p.rotation.z=m-He.rotorAngle*.9;let Je=se[re]||se.idle;q.copy(l.emissive).lerp(Je,1-Math.exp(-4*ue)),l.emissive.copy(q);let dt=.85+.15*Math.sin(Pe*9),_t=de?(2.4+at(F.tps,0,120)/30)*dt:re==="tool"?.9:re==="thinking"?1.3:.45;l.emissiveIntensity=en(l.emissiveIntensity,_t,5,ue),He.ctx=en(He.ctx,at(F.ctx,0,1),2.5,ue);let Re=de?Math.sin(Pe*41)*.006:0;S.rotation.z=(135-270*He.ctx)*ji+Re,He.tach=en(He.tach,at(F.tps/120,0,1),3,ue),A.rotation.z=(135-270*He.tach)*ji+Re*2;let Ee=[F.counters.miss,F.counters.hit,F.counters.output,F.counters.reasoning,F.counters.cost*100];for(let Z=0;Z<5;Z++){let we=Ee[Z]||0,ve=He.disp[Z];we<ve||we-ve<.02?ve=we:ve=en(ve,we,3.2,ue),He.disp[Z]=ve,$(Z,ve,Z===4?6:8)}Q.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0;let Ae=[re==="reasoning"||re==="thinking",re==="generating",re==="tool",re==="idle"];oe.forEach((Z,we)=>{Z.emissiveIntensity=en(Z.emissiveIntensity,Ae[we]?3.2:.12,10,ue)}),He.err=Math.max(0,He.err-ue*.5),F.errorPulse&&(He.err=1);let De=Math.sin(Pe*12)>0?1:.2,L=[He.err>0?3.5*De:.1,re==="tool"?3:.1,de||re==="thinking"?3:.6,re==="reasoning"?3:.1];_.forEach((Z,we)=>{Z.emissiveIntensity=en(Z.emissiveIntensity,L[we],12,ue)}),He.dispPulse=Math.max(0,He.dispPulse-ue*2.5),Le.emissiveIntensity=.3+He.dispPulse*4;let E=at((He.ctx-.78)/.22,0,1);he+=ue*E*18;for(let Z of j)if(Z.life<=0&&he>=1&&(he-=1,Z.life=1,Z.vx=(Math.random()-.5)*.15,Z.vz=(Math.random()-.5)*.15,Z.sp.position.set(.8,2.36,0),Z.sp.visible=!0),Z.life>0){Z.life-=ue/1.7;let we=1-Z.life;Z.sp.position.x+=Z.vx*ue,Z.sp.position.z+=Z.vz*ue,Z.sp.position.y+=ue*(.55-we*.25),Z.sp.scale.setScalar(.08+we*.55),Z.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,we*1.2))*.32),Z.life<=0&&(Z.sp.visible=!1)}he>4&&(he=4)}}}var ws=new C(2.6,0,-1),Sa=3.1,Es=2.35,vo=.75,In=.922,Gl=.012,xo=1,Ma=1,Wg=.4,yo=235*ji,wa=305*ji,Ss=1.54;function is(n,e,t=0,i=new C){return i.set(ws.x+e*Math.cos(n),t,ws.z-e*Math.sin(n))}var Zg=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Ed(n){let e=Rt("pedestal"),t=new ut;t.add("graphite",D(ce(.15,.17,.04,40),[0,.02,0])),t.add("alu",D(ce(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",D(ce(.12,.1,.03,48),[0,.835,0])),t.add("chrome",D(ln(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Ut+.3;t.add("ceramic",D(ce(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=Zt(5078015,.25);return e.add(Ze(ln(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var Xn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},Xg={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},qg={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function Jg(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function bE(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=Jg(n,o,a),u=Math.PI/2-l,d=new ps;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new Bs(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function $g(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=Jg(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return D(Te(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function ME(){let n=new ps,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new Bs(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,Xn.forkY+.002,0),t}function SE(){let n=zt(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new yt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function wE(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function EE(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function TE(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function AE(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),TE(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Yt}`,n.fillStyle="#86a7c9",n.fillText(`${tn.robot.code} · ${tn.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${Ht}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Yt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${Ht}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${Ht}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Ut),n.fill(),n.font=`600 23px ${Yt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function RE(n){let e=Rt("robot",[ws.x,0,ws.z]),t=Zt(4641535,2.2),i=Zt(4641535,1.8),s=Zt(5078015,1.4),r={...n,carbon:SE(),led:t},o=new ut;o.add("white",zi([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",D(ce(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",D(ce(1.15,1.15,Xn.deckY-.4,112),[0,(.4+Xn.deckY)/2,0])),o.add("plastic",D(ce(.62,.62,.006,72),[0,Xn.deckY+.003,0])),o.add("chrome",D(ln(.62,.005,8,112),[0,Xn.deckY+.003,0],[Math.PI/2,0,0]));for(let z=0;z<12;z++){let W=z/12*Ut+.13;o.add("chrome",D(ce(.016,.016,.006,10),[Math.cos(W)*.92,Xn.deckY+.003,Math.sin(W)*.92]))}let a=Xn.drumTop-Xn.deckY;o.add("white",D(ce(.34,.37,a,72),[0,Xn.deckY+a/2,0])),o.add("chrome",D(ln(.342,.006,8,72),[0,Xn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",oi([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new ut;l.add("led",D(ln(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",D(ce(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Ze(ln(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=zt(1024,48,EE,{anisotropy:8}),u=new Kt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Ze(ce(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=hr({color:726566,opacity:.4,fresnel:.55}),f=Ze(ce(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});f.renderOrder=2,e.add(d,f);let p=zt(512,176,null,{anisotropy:8}),x=new Kt({map:p.tex,transparent:!0,depthWrite:!1,side:nn,name:"robot-holo"});x.color.setScalar(1.25);let m=Ze(new vt(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=Rt("arm");e.add(g),g.add(new ut().add("steel",D(ce(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let _=zt(512,64,wE,{anisotropy:8,repeat:[1,1]}),b=z=>new yt({map:z,emissiveMap:z,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=_.tex,M=_.tex.clone();function w(z,W,O,V){let oe=Rt(z),j=W.y+W.h,he=new ut;he.add("white",bE(O,W.r1,W.r2,W.y,W.h,W.bevel)),he.add("chrome",D(Ne(.66,.004,W.r2*.95,.002),[.5,j+.0015,0]));for(let xe of[-1,1])he.add("graphite",$g(.66,.026,.004,O/2,W.y+W.h/2,W,O,xe,5e-4));V(he,j),oe.add(he.build(r,{name:z}));let fe=new vt(.62,W.r2*.95-.022);fe.rotateX(-Math.PI/2),oe.add(Ze(fe,b(W===Xn.link1?y:M),[.5,j+.004,0],null,null,{cast:!1}));let ne=new ut;for(let xe of[-1,1])ne.add("led",$g(.6,.009,.005,O/2,W.y+W.h/2,W,O,xe,.0022));return oe.add(ne.build({led:i},{name:`${z}-strips`,castShadow:!1})),oe}let v=Xn.link1,S=w("link1",v,xo,(z,W)=>{z.add("alu",D(ce(.118,.124,.012,56),[0,W+.006,0])),z.add("chrome",D(ce(.034,.034,.008,24),[0,W+.016,0])),z.add("alu",D(ce(.1,.104,.012,56),[xo,W+.006,0])),z.add("graphite",D(ce(.11,.11,.01,48),[xo,v.y-.005,0])),z.add("led",D(ln(.127,.0045,6,72),[0,W+.003,0],[Math.PI/2,0,0])),z.add("led",D(ln(.107,.004,6,64),[xo,W+.003,0],[Math.PI/2,0,0]))});g.add(S);let A=Xn.link2,R=w("link2",A,Ma,(z,W)=>{z.add("alu",D(ce(.086,.09,.01,48),[0,W+.005,0])),z.add("chrome",D(ce(.028,.028,.007,20),[0,W+.0135,0])),z.add("white",D(ce(.07,.078,Xn.forkY-.01-W,48),[Ma,(W+Xn.forkY-.01)/2,0])),z.add("led",D(ln(.093,.0035,6,56),[0,W+.003,0],[Math.PI/2,0,0])),z.add("led",D(ln(.079,.0035,6,56),[Ma,W+.012,0],[Math.PI/2,0,0]))});R.position.x=xo,S.add(R);let P=Rt("fork",[Ma,0,0]);R.add(P);let U=new ut;U.add("alu",D(ce(.064,.064,.01,48),[0,Xn.forkY-.005,0])),U.add("carbon",ME()),U.add("graphite",D(Ne(.06,.016,.07,.005),[.07,Xn.forkY+.02,0]));for(let z of[.31,.5])for(let W of[-.075,.075])U.add("rubber",D(ce(.011,.011,.002,14),[z,Xn.forkY+.013,W]));P.add(U.build(r,{name:"fork",castShadow:!0}));let H=Zt(4641535,.8);P.add(Ze(Te(.004,.006,.044),H,[.1015,Xn.forkY+.02,0],null,null,{cast:!1}));let I={yaw:270*ji,reach:vo,lift:0},Y=new C;function ee(){let z=at(I.reach-Wg,.02,xo+Ma-1e-4),W=Math.acos(z/(xo+Ma));S.rotation.y=I.yaw+W,R.rotation.y=-2*W,P.rotation.y=W,g.position.y=I.lift,d.rotation.y=S.rotation.y,y.offset.x=-2*W*.08,M.offset.x=W*.065}ee();let J="";function Q(z="idle",W=null,O=null,V=null){let oe=`${z}|${W}|${O}|${V}`;if(oe===J)return;J=oe;let j=Xg[z]||Xg.idle,he=V?qg[V]||qg.normal:null,fe=he&&he.color?he.color:j.color;i.color.setHex(fe).multiplyScalar(.25),i.emissive.setHex(fe),p.redraw((ne,xe,Le)=>AE(ne,xe,Le,{st:j,carry:he,from:W,to:O}))}return Q(),{root:e,pose:I,setPose(z,W,O){I.yaw=z,I.reach=W,I.lift=O,ee()},carryPoint(z=Y){return e.updateMatrixWorld(!0),z.set(Wg,0,0),P.localToWorld(z),z.y=.921+I.lift,z},setBusy(z){H.emissiveIntensity=z?3:.8,s.emissiveIntensity=z?2.4:1.4,i.emissiveIntensity=z?2.6:1.8},setStatus:Q,parts:{arm:g,link1:S,link2:R,fork:P},hover:{id:"robot",object:e}}}function Yg(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Rt(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new ut;l.add("white",D(Ne(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",D(Ne(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",D(Ne(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",D(Te(.04,.3,.04),[m,1,g]));l.add("aluDark",D(Te(.84,.03,.04),[0,1.15,.4]),D(Te(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",D(Te(.04,.03,.84),[.4,1.15,0]),D(Te(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",D(ce(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Ut;l.add("ceramic",D(ce(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",D(Te(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",D(Te(.5,.2,.05),[o,.95,-.42])),l.add("steel",D(ce(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",D(ce(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[D(new vt(.76,.27),[0,1,.4]),D(new vt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),D(new vt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new ut().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ze(Ne(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ze(Ne(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let f=Ms(i,s,r);a.add(Ze(new vt(.56,.158),Wn(f.tex,.35),[0,.62,.402],null,null,{cast:!1}));let p=Zt(3461498,.6);a.add(Ze(Te(.6,.016,.01),p,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:p,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function Kg(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",D(Ne(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",D(Te(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Te(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),f=t.x+r*h,p=t.z+o*h;e.add("aluDark",D(Te(.05,.84,.05),[f,.43,p],[0,l,0])),e.add("graphite",D(Te(.16,.02,.16),[f,.01,p],[0,l,0]))}return{len:a,yaw:l,mid:c}}function jg(n){let e=Rt("cell"),t=RE(n);e.add(t.root),e.add(ai(n,2.9,2.9,[ws.x,0,ws.z],.6));let i=is(yo,Sa),s=is(wa,Sa),r=Yg(n,{center:i,side:-1,...tn.lock,hubDoorX:.18}),o=Yg(n,{center:s,side:1,...tn.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(ai(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(ai(n,1.3,1.3,[s.x,0,s.z],.5));let a=is(yo,Es,In),l=is(wa,Es,In),c=Ed(n);c.root.position.set(a.x,0,a.z);let u=Ed(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new ut,h=new C(-1.83,0,Ss),f=new C(i.x-.42,0,Ss),p=new C(s.x+.42,0,Ss),x=new C(7.18,0,Ss);Kg(n,d,h,f),Kg(n,d,p,x);let m=(M,w)=>{let v=w.x-M.x,S=w.z-M.z,A=Math.hypot(v,S);d.add("aluDark",D(Ne(A,.02,.2,.006),[(M.x+w.x)/2,.892,(M.z+w.z)/2],[0,Math.atan2(-S,v),0]))};m(new C(i.x+.18,0,i.z-.44),new C(a.x-.06,0,a.z+.1)),m(new C(s.x-.18,0,s.z-.44),new C(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=Zt(5078015,1.2),_=[];for(let[M,w]of[[h,f],[p,x]]){let v=w.x-M.x;_.push(D(Te(v,.008,.008),[(M.x+w.x)/2,.858,Ss+.185]))}e.add(new ut().add("led",_).build({led:g},{name:"track-led",castShadow:!1})),e.add(ai(n,f.x-h.x+.4,.7,[(h.x+f.x)/2,0,Ss],.4)),e.add(ai(n,x.x-p.x+.4,.7,[(p.x+x.x)/2,0,Ss],.4));let b=new Kt({visible:!1}),y=(M,w)=>{let v=new rt(new $t(.9,1.25,.9),b);return v.position.set(w.x,.62,w.z),v.userData.hoverId=M,e.add(v),{id:M,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new C(-1.95,In,Ss),lockCenter:new C(i.x,In,i.z),lockPort:a,outPort:l,outCenter:new C(s.x,In,s.z),trackEnd:new C(x.x-.08,In,Ss)},trackLed:g,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new C(ws.x,1.4,ws.z),lock:new C(i.x,1.45,i.z),unload:new C(s.x,1.45,s.z)}}}var Yf=n=>(200-n*24.4)*ji,Jt=Sa-Es,ft=.89,CE={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},PE={archive:[.46,.17],press:[-.44,.17]},Vl=(n,e=.6)=>new Kt({color:n,transparent:!0,opacity:e,blending:jn,depthWrite:!1});function IE(n,e,t,i=8){let s=new C(n[0],n[1],n[2]),r=new C(e[0],e[1],e[2]),o=ce(t,t,s.distanceTo(r),i);return o.applyQuaternion(new Mn().setFromUnitVectors(new C(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function Kf(n,e=1.36){n.add("aluDark",D(Te(.06,e,.07),[.4,e/2,Jt])),n.add("graphite",D(Te(.16,.03,.16),[.4,.015,Jt])),n.add("aluDark",D(Te(.48,.06,.08),[.16,e,Jt])),n.add("chrome",D(Te(.4,.01,.01),[.17,e-.035,Jt+.03]))}function LE(){return zt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Ht}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function DE(){return zt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function NE(n,e,t){t.add("graphite",D(Ne(.88,.8,.42,.02),[0,ft+.4,-.33])),t.add("aluDark",D(Ne(.9,.03,.44,.01),[0,ft+.815,-.33]));let i=LE().tex,s=new Bn(Ne(.26,.17,.3,.008),new yt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:ft+.13+x*.19,out:0,until:0});t.add("aluDark",D(Te(.06,.46,.06),[0,ft+.23,.16])),t.add("aluDark",D(Te(.07,.06,.88),[0,ft+.46,.56]));let o=Rt("scan-head",[0,ft+.4,Jt]);e.add(o),o.add(new ut().add("graphite",D(Ne(.38,.07,.09,.012),[0,-.035,0])).add("chrome",D(Te(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=Zt(7314431,.6);o.add(Ze(Te(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=ft+.4-.075-(In+.004),c=Vl(6130687,0),u=Ze(new vt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=Vl(10469631,0),h=Ze(Te(.3,.001,.008),d,[0,In+.006-(ft+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let f=new wt,p=0;return{update(x,m,g){let _=g.work;if(o.position.z=Jt+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,g.working&&m>p){p=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let y=r[b];y.out=en(y.out,m<y.until?.16:0,9,x),f.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(b,f)}s.instanceMatrix.needsUpdate=!0}}}function OE(n,e,t,i){t.add("graphite",D(Ne(.8,.34,.44,.02),[0,ft+.17,-.32]));for(let p=0;p<9;p++)t.add("alu",D(Te(.012,.1,.38),[-.32+p*.08,ft+.39,-.32]));t.add("rubber",oi([[.3,ft+.2,-.09],[.3,ft+.32,.12],[.37,1.5,Jt-.08]],.018,.12,8));for(let p of[-.37,.37])t.add("aluDark",D(Te(.07,1.44,.09),[p,.72,Jt])),t.add("graphite",D(Te(.16,.03,.18),[p,.015,Jt]));t.add("aluDark",D(Te(.84,.09,.11),[0,1.44,Jt])),t.add("chrome",D(Te(.76,.016,.016),[0,1.44,Jt+.062])),t.add("hazard",D(Te(.84,.02,.112),[0,1.494,Jt]));let s=new ar({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:nn,depthWrite:!1});for(let p of[-.335,.335])e.add(Ze(new vt(.5,.42),s,[p,1.17,Jt],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Rt("laser-head",[0,1.44,Jt]);e.add(r);let o=new ut;o.add("chrome",D(Ne(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",D(Ne(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",D(ce(.026,.02,.07,20),[0,-.24,0])),o.add("orange",D(Te(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(In+.004),c=Vl(12101375,0),u=Ze(ce(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new ir(new Us({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:jn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,In+.008-1.44,0),r.add(d);let h=new C,f=0;return{update(p,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=Jt+Math.sin(x*3.1+1)*.06*g;let _=m.working&&m.wafer?1:0;if(c.opacity=en(c.opacity,_*(.75+.25*Math.sin(x*60)),20,p),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(f+=p*40,d.getWorldPosition(h);f>1;)f-=1,i.sparks(h,1)}}}function FE(n,e,t){t.add("ceramic",D(Ne(.52,.42,.36,.03),[-.12,ft+.27,-.34])),t.add("ceramic",D(Ne(.4,.32,.18,.04),[-.12,ft+.27,-.5])),t.add("graphite",D(Ne(.3,.06,.24,.01),[-.12,ft+.03,-.34])),t.add("graphite",D(Ne(.48,.36,.01,.02),[-.12,ft+.27,-.158]));let i=Ig();e.add(Ze(new vt(.4,.3),Nl(i.tex,1.5),[-.12,ft+.27,-.151],null,null,{cast:!1})),t.add("plastic",D(Ne(.46,.03,.16,.008),[-.1,ft+.015,.1])),e.add(Ze(new vt(.44,.14),Wn(DE().tex,.1),[-.1,ft+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),Kf(t),t.add("steel",D(ce(.04,.04,.14,20),[0,1.26,Jt]));let s=Rt("probe",[0,1.1,Jt]);e.add(s),s.add(new ut().add("chrome",D(ce(.015,.015,.3,12),[0,.15,0])).add("graphite",D(ce(.13,.13,.018,48),[0,.009,0])).add("gold",D(ce(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=Zt(4063119,.2);s.add(Ze(ln(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=en(s.position.y,c.working&&c.wafer?In+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function UE(n,e,t){t.add("graphite",D(ce(.13,.15,.08,40),[0,ft+.04,-.3]));let i=Rt("pan",[0,ft+.08,-.3]);e.add(i);let s=new ut;s.add("white",D(ce(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",D(Te(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",D(Te(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Rt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=nn;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new ut;l.add("dish",zi(a,64)),l.add("chrome",D(ln(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",D(ce(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Ut+Math.PI/6;l.add("aluDark",IE([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",D(new ks(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",D(ce(.03,.03,.05,18),[0,.37,0]));let c=Rt("dish",[0,.07,0]);r.add(c),r.add(new ut().add("aluDark",D(ce(.05,.05,.08,20),[0,.03,0]),D(ce(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=Zt(10849535,.3);c.add(Ze(qf(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let _=Vl(10127103,0),b=Ze(ln(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:_,age:g/3}});Kf(t),t.add("graphite",D(Ne(.12,.08,.12,.012),[0,1.29,Jt])),t.add("white",D(ce(.004,.004,.18,6),[.03,1.42,Jt]));let h=Zt(10849535,.2);e.add(Ze(qf(.012),h,[.03,1.515,Jt],null,null,{cast:!1}));let f=0,p=0,x=0;return{update(m,g,_){_.working&&g>x&&(x=g+1.2+Math.random()*1.5,p=(Math.random()-.5)*1.6),_.working||(p=0),f=en(f,p,1.6,m),i.rotation.y=f,r.rotation.x=-.62+Math.sin(g*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let y=b.age;b.r.position.y=.42+y*.9,b.r.scale.setScalar(1+y*6),b.mat.opacity=_.work*(1-y)*.8}}}}var qf=n=>new Nn(n,16,10);function kE(n,e,t){t.add("graphite",D(Ne(.5,.32,.34,.02),[.18,ft+.16,-.36])),t.add("aluDark",D(Ne(.12,.18,.03,.01),[-.27,ft+.2,-.36]));let i=Zt(5078015,.5);e.add(Ze(Te(.3,.02,.005),i,[.18,ft+.25,-.188],null,null,{cast:!1}));let s=[-.05,ft,.12],r=.38,o=.36,a=.1;t.add("graphite",D(ce(.09,.095,.04,32),[s[0],ft+.02,s[2]]));let l=Rt("j0",[s[0],ft+.04,s[2]]);e.add(l),l.add(new ut().add("white",D(ce(.07,.075,.13,32),[0,.065,0])).add("graphite",D(ce(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Rt("j1",[0,.16,0]);l.add(c),c.add(new ut().add("white",D(Ne(.095,r,.095,.04),[0,r/2,0])).add("graphite",D(ce(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Rt("j2",[0,r,0]);c.add(u),u.add(new ut().add("white",D(Ne(.078,o,.078,.035),[0,o/2,0])).add("graphite",D(ce(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Rt("j3",[0,o,0]);u.add(d),d.add(new ut().add("graphite",D(ce(.035,.035,.05,24),[0,.025,0])).add("chrome",D(ce(.03,.03,.012,24),[0,.056,0])).add("aluDark",D(Te(.012,.045,.03),[-.02,.08,0]),D(Te(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=Zt(5078015,.6);d.add(Ze(ln(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let f=ft+.04+.16,p=new C(0,f+.25,.25),x=new C;function m(g,_,b){let y=g-s[0],M=b-s[2];l.rotation.y=Math.atan2(y,M);let w=Math.hypot(y,M),v=_+a-f,S=at(Math.hypot(w,v),.05,r+o-.001),A=Math.atan2(w,v),R=at((S*S-r*r-o*o)/(2*r*o),-1,1),P=Math.acos(R),U=A-Math.atan2(o*Math.sin(P),r+o*Math.cos(P));c.rotation.x=U,u.rotation.x=P,d.rotation.x=Math.PI-U-P}return m(p.x,p.y,p.z),{update(g,_,b){b.working&&b.wafer?x.set(.08*Math.cos(_*1.7),In+.03+.06*Math.max(0,Math.sin(_*3.4)),Jt-.04+.07*Math.sin(_*2.3)):b.working?x.set(.05*Math.sin(_*1.3),f+.12,Jt-.3):x.set(-.05+.04*Math.sin(_*.6),f+.22,.32),p.x=en(p.x,x.x,4,g),p.y=en(p.y,x.y,4,g),p.z=en(p.z,x.z,4,g),m(p.x,p.y,p.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(_*8))}}}function $f(n){return n<.22?Ef(n/.22):n<.42?1:1-Ef((n-.42)/.58)}function BE(n,e,t){t.add("graphite",D(Ne(.6,.28,.3,.02),[.14,ft+.14,-.38])),t.add("white",D(ce(.08,.08,.3,28),[.14,ft+.36,-.38],[0,0,Math.PI/2])),t.add("steel",D(ce(.06,.06,.24,24),[-.3,ft+.12,-.4])),t.add("blue",D(Ne(.3,.86,.26,.03),[0,ft+.43,.02])),t.add("blue",D(Ne(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",D(Te(.322,.04,.01),[0,1.6,.942])),t.add("steel",D(ce(.085,.085,.22,32),[0,1.45,Jt])),t.add("chrome",D(ln(.086,.008,8,32),[0,1.34,Jt],[Math.PI/2,0,0])),t.add("rubber",oi([[.06,1.5,Jt-.06],[.2,1.5,Jt-.3],[.2,1.2,.2],[.2,ft+.3,-.2]],.016,.1,8)),t.add("rubber",oi([[-.06,1.42,Jt-.06],[-.2,1.42,Jt-.3],[-.2,1.1,.2],[-.2,ft+.28,-.22]],.016,.1,8));let i=Rt("ram",[0,1.12,Jt]);e.add(i),i.add(new ut().add("chrome",D(ce(.035,.035,.42,20),[0,.21,0])).add("steel",D(Ne(.32,.05,.32,.012),[0,0,0])).add("darkSteel",D(ce(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>D(ce(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=Bl({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ze(new Dn(.07,40),new yt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ze(Te(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ze(ln(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?$f(o):0;i.position.y=1.12-.155*d,a=en(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*ji}}}function zE(n,e,t){for(let d of[-.42,.42])t.add("aluDark",D(Te(.035,.66,.035),[d,ft+.33,-.33]));t.add("alu",D(Ne(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",D(Te(.6,.03,.06),[0,1.16,-.3])),t.add("blue",D(ce(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",D(ce(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=Dg();e.add(Ze(new vt(.8,.6),new yt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Ne(.11,.075,.008,.004),o=s.map(d=>{let h=Ze(r,new yt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,f)=>h.forEach((p,x)=>{let[m,g]=l(f,x),_=o[p];_.userData.tx=m,_.userData.ty=g,d&&_.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=en(h.position.x,h.userData.tx,7,d),h.position.y=en(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function HE(n,e,t){t.add("graphite",D(ce(.07,.08,.04,28),[.3,ft+.02,-.35])),t.add("alu",D(ce(.028,.028,1,16),[.3,ft+.5,-.35])),t.add("graphite",D(ce(.09,.1,.06,32),[.3,ft+1.03,-.35]));let r=new ar({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ze(ce(.08,.08,.13,32,!0),r,[.3,ft+1.125,-.35],null,null,{cast:!1})),e.add(Ze(new Nn(.08,32,12,0,Ut,0,Math.PI/2),r,[.3,ft+1.19,-.35],null,null,{cast:!1}));let o=Rt("spin",[.3,ft+1.12,-.35]);e.add(o),o.add(Ze(new zn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=Zt(16756782,.2);e.add(Ze(qf(.022),a,[.3,ft+1.12,-.35],null,null,{cast:!1}));let l=Vl(16753978,0),c=new ks(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ze(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new ar({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",D(Ne(.36,.28,.12,.02),[-.2,ft+.14,.04])),t.add("grille",D(new vt(.12,.12),[-.28,ft+.15,.101])),t.add("steel",D(ce(.045,.045,.02,28),[-.1,ft+.15,.11],[Math.PI/2,0,0]));let d=Zt(3461498,.3);return e.add(Ze(new Nn(.038,24,10,0,Ut,0,Math.PI/2),d,[-.1,ft+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,f,p){let x=p.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(f*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(f*5)>0?1:.2)}}}function GE(n,e,t){t.add("aluDark",D(Ne(.72,.62,.04,.012),[0,ft+.31,-.4])),t.add("graphite",D(Ne(.72,.06,.3,.012),[0,ft+.03,-.3]));let i=Rt("unwind",[-.16,ft+.4,-.31],[Math.PI/2,0,0]),s=Rt("rewind",[.2,ft+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=zt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new yt({map:r,roughness:.7});i.add(new ut().add("roll",ce(.15,.15,.1,48)).add("gold",ce(.05,.05,.11,24)).add("chrome",ce(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new ut().add("ceramic",ce(.075,.075,.1,40)).add("gold",ce(.035,.035,.11,20)).add("chrome",ce(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,ft+.52],[.05,ft+.3],[.28,ft+.42]])t.add("chrome",D(ce(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));Kf(t),t.add("steel",D(ce(.042,.042,.18,22),[0,1.24,Jt])),t.add("chrome",D(ln(.043,.006,6,24),[0,1.16,Jt],[Math.PI/2,0,0]));let a=Rt("tamp",[0,1.08,Jt]);e.add(a),a.add(new ut().add("chrome",D(ce(.016,.016,.3,12),[0,.15,0])).add("graphite",D(Ne(.16,.025,.12,.006),[0,0,0])).add("gold",D(Te(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let f=l?$f(l):0;a.position.y=1.08-(1.08-(In+.03))*f,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function VE(n,e,t){t.add("graphite",D(Ne(.62,.86,.44,.02),[0,ft+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",D(Te(.016,.84,.01),[d,ft+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",D(Ne(.56,.085,.02,.006),[0,ft+.07+d*.1,-.095]));t.add("grille",D(new vt(.36,.5),[.311,ft+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Bn(Te(.014,.01,.004),new Kt({color:16777215}),i*s),o=new wt,a=[],l=[new ze(3461498),new ze(3461498),new ze(5078015),new ze(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,ft+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let f=l[(d*7+h*3)%l.length].clone();a.push(f),r.setColorAt(d*s+h,f)}e.add(r);let c=new ze,u=0;return{update(d,h,f){if(u+=d,!(u<.08)){u=0;for(let p=0;p<a.length;p++){let x=f.working?Math.random()>.45:(p+Math.floor(h*.7))%9===0;c.copy(a[p]).multiplyScalar(x?3.2:.25),r.setColorAt(p,c)}r.instanceColor.needsUpdate=!0}}}}var WE={archive:NE,engraver:OE,terminal:FE,satellite:UE,robot:kE,press:BE,kanban:zE,beacon:HE,labeler:GE,generic:VE};function XE(n,e,t,i){let s=xi[e],r=Yf(t),o=is(r,Sa),a=Rt(`station-${e}`,[o.x,0,o.z],[0,Zg(r),0]);a.userData.solid=`station:${e}`;let l=new ut,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,D(Ne(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",D(Ne(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",D(Ne(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",D(Te(.9,.01,.008),[0,.32,.252])),l.add("grille",D(new vt(.36,.1),[.24,.18,.251]));let[u,d]=PE[e]||[.44,-.5];l.add("alu",D(ce(.012,.012,.3,10),[u,ft+.15,d])),l.add("graphite",D(ce(.03,.03,.012,18),[u,ft+.46,d]));let h=WE[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let f=Ms(s.zh,s.en,s.code,CE[e]);a.add(Ze(new vt(.46,.13),Wn(f.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let p=Md(384,144,{bg:"#03060c",glow:4});a.add(Ze(new vt(.36,.135),Nl(p.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=Zt(5078015,.4);a.add(Ze(Te(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((P,U)=>{let H=Zt(P,.1);return a.add(Ze(ce(.028,.028,.045,18),H,[u,ft+.33+(2-U)*.05,d],null,null,{cast:!1})),H}),g=Ed(n);g.root.position.set(0,0,Jt),a.add(g.root),a.add(ai(n,1.25,1,[0,0,-.12],.55));let _=new Kt({visible:!1}),b=new rt(new $t(1.1,2,1.5),_);b.position.set(0,1,.1),a.add(b);let y={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},M=new ze,w=new ze(5078015),v=new ze(3461498),S=new ze(16726832),A=is(r,Es+.05,In+.08);function R(){let P=y.status==="working"?"加工中 RUN":y.status==="error"?"故障 FAULT":"待机 IDLE",U=`${P}|${y.label}`;U!==y.screenKey&&(y.screenKey=U,p.set([{text:`${s.code}  ${P}`,size:30,color:y.status==="error"?"#ff8a80":y.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:y.label||"—",size:34,color:"#e8eefc",gap:58}]))}return R(),{kind:e,index:t,theta:r,root:a,port:is(r,Es,In),anchor:is(r,Sa+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(P){y.label=P||"",R()},onStart(P){y.label=P.label||P.name,h.onStart?.(P),R()},onEnd(P,U){y.flash=U?.9:2.2,y.flashOk=U,U||i.puff(A,10),h.onEnd?.(P,U)},update(P,U,H){y.work=en(y.work,H.working?1:0,3,P),y.flash=Math.max(0,y.flash-P);let I=y.flash>0&&!y.flashOk;y.status=H.working?"working":I?"error":"idle",R(),h.update(P,U,{working:H.working,wafer:H.wafer,work:y.work});let Y;y.flash>0?(M.copy(y.flashOk?v:S),Y=3.2*(y.flashOk?Math.min(1,y.flash*2):Math.sin(U*14)>0?1:.25)):(M.copy(w),Y=.25+y.work*(2.2+Math.sin(U*6)*.6)),g.led.emissive.copy(M),g.led.emissiveIntensity=Y,x.emissive.copy(M),x.emissiveIntensity=.25+Y*.6,m[0].emissiveIntensity=I?Math.sin(U*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+y.work*3.5,m[2].emissiveIntensity=!H.working&&!I?1.6:.08}}}function Qg(n,e){let t=Rt("stations"),i=Sd.map((r,o)=>XE(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var Zf=n=>Ms(tn[n].zh,tn[n].en,tn[n].code),yi=new C(7.45,0,Ss),Xs=.83,Qf=13,Gr=.4,Li=.36,Ts=.4,ep=.02,tp=.062,np=.02,ip=[8.2,8.75,9.3],sp=[-.1,.45,1],ss=.55,Gi=2.45,Td=Li+.046,Jf=1.9,qE=1.3,_o=9,ex=n=>((n-1)%_o+_o)%_o,jf=(n,e=new C)=>e.set(ip[n%3],ss,sp[Math.floor(n/3)]),tx={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}},Ad=n=>n?typeof n.fileCount=="number"?n.fileCount:n.files?n.files.length:0:0;function $E(n,e,t,i){let s=i.info,r=s?tx[s.status]||tx.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Yt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Yt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Ht}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0;n.fillText(`CALLS ${o} · FILES ${Ad(s)}`,30,t*.64),n.fillStyle="#15171b";let a=30,l=(i.no||7)*2654435761;for(let c=0;a<e-16;c++){let u=1+((l>>>c%24^c)&3);c%2===0&&n.fillRect(a,t*.8,u,t*.13),a+=u+1}}function YE(n){let e=new ut,t=.03+(Li-.03)/2,i=Li-.03,s=-Gr/2+.008;e.add("graphite",D(Ne(Gr,.03,Ts,.008),[0,.015,0])),e.add("graphite",D(Te(.016,.022,Ts),[s,Li-.011,0]),D(Te(.016,i,.02),[s,t,Ts/2-.01]),D(Te(.016,i,.02),[s,t,-Ts/2+.01])),e.add("graphite",D(Te(.06,.026,.06),[0,Li+.013,0]),D(Ne(.17,.02,.17,.006),[0,Li+.036,0]));for(let l=0;l<Qf;l++){let c=tp+l*np-.005;for(let u of[-1,1])e.add("plastic",D(Te(.3,.004,.05),[ep,c,u*.165]))}let r=new ut().add("smoke",D(Te(Gr-.016,i,.01),[.008,t,Ts/2-.005]),D(Te(Gr-.016,i,.01),[.008,t,-Ts/2+.005]),D(Te(.01,i,Ts-.02),[Gr/2-.005,t,0]),D(Te(Gr-.016,.01,Ts-.02),[.008,Li-.005,0])),o=new Qt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new ut().add("white",D(Ne(.02,Li-.045,Ts-.03,.006),[0,0,0])).add("graphite",D(ce(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),D(ce(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(Li-.045)/2+.006,doorX:-Gr/2-.004}}function nx(n,e){let t=Rt("stocker"),i=new Kt({visible:!1}),s=new $t(Gr+.04,Li+.08,Ts+.04),r=new vt(.28,.1225),o=YE(n),a=Rt("load-port",[yi.x,0,yi.z]);a.userData.solid="load-port",t.add(a);let l=new ut;l.add("white",D(Ne(.56,Xs-.012,.62,.02),[0,(Xs-.012)/2,0])),l.add("graphite",D(Ne(.44,.012,.44,.004),[0,Xs-.006,0]),D(Te(.58,.06,.64),[0,.03,0]));for(let B=0;B<3;B++){let q=B/3*Math.PI*2+.5;l.add("chrome",D(ce(.008,.012,.012,12),[Math.cos(q)*.13,Xs+.004,Math.sin(q)*.13]))}l.add("aluDark",D(Te(.04,.22,.04),[.24,Xs+.11,.27]),D(Te(.08,.03,.05),[.21,Xs+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=Zf("loadport");a.add(Ze(new vt(.44,.124),Wn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((B,q)=>{let se=Zt(B,.15);return a.add(Ze(Te(.05,.016,.008),se,[-.12+q*.12,.46,.312],null,null,{cast:!1})),se});a.add(ai(n,.9,.95,[0,0,0],.5));let d=new rt(new $t(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new ut,f=(ip[0]+ip[2])/2,p=(sp[0]+sp[2])/2;h.add("graphite",D(Te(1.66,ss-.03,1.66),[f,(ss-.03)/2,p])),h.add("white",D(Ne(1.76,.03,1.76,.01),[f,ss-.015,p])),h.add("aluDark",D(Te(1.7,.05,1.7),[f,.025,p]));let x=[];for(let B=0;B<_o;B++){let q=jf(B);h.add("aluDark",D(Ne(.44,.008,.44,.003),[q.x,ss+.002,q.z]));for(let $=0;$<3;$++){let ue=$/3*Math.PI*2+.5;h.add("chrome",D(ce(.007,.01,.01,10),[q.x+Math.cos(ue)*.12,ss+.008,q.z+Math.sin(ue)*.12]))}let se=Zt(3134074,0);t.add(Ze(Te(.12,.006,.012),se,[q.x,ss+.004,q.z+.235],null,null,{cast:!1})),x.push(se)}t.add(h.build(n,{name:"buffer-table"}));let m=Zf("stocker");t.add(Ze(new vt(.62,.175),Wn(m.tex,.35),[f,ss*.55,p+.834],null,null,{cast:!1})),t.add(ai(n,2.3,2.3,[f,0,p],.55));let g=new rt(new $t(1.8,ss+.45,1.8),i);g.position.set(f,(ss+.45)/2,p),t.add(g);let _=new ut,b=[7,10],y=[-.45,1.95];for(let B of b){for(let q of y)_.add("white",D(Te(.1,Gi+.05,.1),[B,(Gi+.05)/2,q])),_.add("graphite",D(Te(.22,.03,.22),[B,.015,q]));_.add("aluDark",D(Te(.09,.09,y[1]-y[0]+.1),[B,Gi,(y[0]+y[1])/2]))}for(let B of y)_.add("steel",D(Te(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,Gi,B]));t.add(_.build(n,{name:"gantry"}));let M=Zf("gantry"),w=Ze(new vt(.9,.253),Wn(M.tex,.35),[(b[0]+b[1])/2,Gi-.2,y[1]+.047],null,null,{cast:!1});t.add(w),t.add(new ut().add("steel",D(Te(.02,.1,.02),[(b[0]+b[1])/2-.35,Gi-.06,y[1]+.04]),D(Te(.02,.1,.02),[(b[0]+b[1])/2+.35,Gi-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let v=Rt("bridge");t.add(v),v.add(new ut().add("blue",D(Te(.14,.12,y[1]-y[0]+.12),[0,Gi+.105,(y[0]+y[1])/2])).add("graphite",D(Te(.26,.1,.13),[0,Gi+.07,y[0]]),D(Te(.26,.1,.13),[0,Gi+.07,y[1]])).build(n,{name:"bridge-beam"}));let S=Rt("trolley");v.add(S),S.add(new ut().add("graphite",D(Ne(.28,.13,.26,.02),[0,Gi-.035,0])).add("steel",D(ce(.045,.045,.2,20),[0,Gi-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let A=ce(.0035,.0035,1,6),R=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([B,q])=>{let se=Ze(A,n.steel,[B,1,q],null,null,{cast:!1});return S.add(se),se}),P=Rt("gripper");S.add(P),P.add(new ut().add("graphite",D(Ne(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let U=[-1,1].map(B=>{let q=Ze(Te(.024,.06,.13),n.steel,[B*.115,-.01,0]);return P.add(q),q}),H=Zt(5078015,.3);P.add(Ze(Te(.1,.008,.01),H,[0,.03,.122],null,null,{cast:!1}));let I={x:yi.x,z:yi.z,hook:Jf,grip:0,carry:null},Y=()=>{v.position.x=I.x,S.position.z=I.z,P.position.y=I.hook;let B=Gi-.1,q=I.hook+.055,se=Math.max(.01,B-q);for(let ue of R)ue.scale.y=se,ue.position.y=q+se/2;let $=Bi(.115,.079,I.grip);U[0].position.x=-$,U[1].position.x=$,I.carry&&I.carry.g.position.set(I.x,I.hook-Td,I.z)},ee=new Set,J=new Array(_o).fill(null),Q=null;function z(){let B=o.g.clone();B.name="foup";let q=o.door.clone();B.add(q);let se=zt(256,112,()=>{}),$=new yt({map:se.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:se.tex,emissiveIntensity:.18});B.add(Ze(r,$,[.01,Li-.075,Ts/2+.002],null,null,{cast:!1}));let ue=new rt(s,i);ue.position.set(0,Li/2+.02,0),B.add(ue);let Pe={no:0,info:null,g:B,door:q,label:se,labelMat:$,labelKey:"",proxy:ue,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return W(Pe),ee.add(Pe),t.add(B),Pe}function W(B){let q=`${B.no}|${B.info?`${B.info.status}|${B.info.calls}|${Ad(B.info)}`:"-"}|${B.count}`;q!==B.labelKey&&(B.labelKey=q,B.proxy.userData.hoverId=B.no?`foup:${B.no}`:"loadport",B.label.redraw((se,$,ue)=>$E(se,$,ue,B)))}function O(B,q){let se=B.count;if(B.count+=1,B.looks.push(q),se<Qf){let $=e.create(q);$.position.set(ep,tp+se*np,0),B.g.add($),B.slots.push($)}W(B)}function V(B){ee.delete(B),t.remove(B.g),B.label.tex.dispose(),B.labelMat.dispose();for(let q=0;q<_o;q++)J[q]===B&&(J[q]=null);Q===B&&(Q=null)}function oe(B){let q=B.doorOpen,se=at(q/.25,0,1),$=Qi(at((q-.25)/.75,0,1));B.door.position.set(o.doorX-.018*se,o.doorY-.43*$,0)}function j(B=!1){let q=z();return q.g.position.set(yi.x,Xs,yi.z),q.state=B?"dock":"spawning",q.sp=B?1:0,q.doorOpen=B?1:0,oe(q),Q=q,q}function he(B,q){let se=J[q];se&&se!==B&&V(se),J[q]=B;let $=jf(q);B.g.position.copy($),B.state="nest",B.doorOpen=0,oe(B)}let fe=[],ne=null,xe=B=>({setup:()=>(B(),{d:0,fn:null})}),Le=(B,q,se=1.6)=>({setup(){let $=I.x,ue=I.z,Pe=Math.hypot(B-$,q-ue);return{d:Pe<.001?0:Math.max(.35,Pe/se),fn:F=>(I.x=Bi($,B,F),I.z=Bi(ue,q,F))}}}),ct=(B,q)=>({setup(){let se=I.hook;return{d:Math.abs(B-se)<.001?0:q,fn:$=>I.hook=Bi(se,B,$)}}}),We=(B,q=.3)=>({setup(){let se=I.grip;return{d:q,fn:$=>I.grip=Bi(se,B,$)}}}),et=(B,q,se=.55)=>({setup(){let $=B.doorOpen;return{d:se,fn:ue=>(B.doorOpen=Bi($,q,ue),oe(B))}}});function He(B){let q=ex(B.no),se=jf(q);return{i:0,steps:[xe(()=>B.state="closing"),et(B,0),Le(yi.x,yi.z),ct(Xs+Td,.6),We(1),xe(()=>(I.carry=B,B.state="carried",H.emissiveIntensity=2.2)),ct(qE+Td,.9),xe(()=>{Q===B&&(Q=null),j();let $=J[q];$&&$!==B&&($.state="sink",$.sp=0,J[q]=null)}),Le(se.x,se.z),ct(ss+Td,.8),xe(()=>{I.carry=null,H.emissiveIntensity=.3,J[q]&&J[q]!==B&&V(J[q]),he(B,q)}),We(0),ct(Jf,.5),Le(yi.x,yi.z)]}}let K={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new C(yi.x,1.1,yi.z),stocker:new C(f,.9,p)},speed:1,hoverObjects(B=[]){for(let q of ee)q.no&&B.push(q.proxy);return B},dockReady:()=>!!Q&&Q.state==="dock"&&Q.doorOpen>=1,dockTurn:()=>Q&&Q.no||null,dockCount:()=>Q?Q.count:0,bindDock(B,q){return!Q||Q.no?!1:(Q.no=B,Q.info=q||null,W(Q),!0)},slotPoint(B,q=new C){let se=Q?Q.g.position:new C(yi.x,Xs,yi.z);return q.set(se.x+ep,se.y+tp+Math.min(B,Qf-1)*np,se.z)},addWafer(B){Q&&O(Q,B)},addLate(B,q){for(let se of ee)if(se.no===B&&se.state!=="sink")return O(se,q),!0;return!1},updateInfo(B,q){for(let se of ee)se.no===B&&(se.info=q,W(se))},ship(B){return!Q||Q.no!==B||fe.includes(Q)||ne&&ne.foup===Q?!1:(fe.push(Q),!0)},shipped:B=>{for(let q of ee)if(q.no===B)return q.state==="carried"||q.state==="nest"||q.state==="sink"||fe.includes(q)||ne&&ne.foup===q;return!1},placeNest(B,q,se){let $=z();$.no=B,$.info=q;for(let ue of se)O($,ue);he($,ex(B)),W($)},resetDock(B,q,se){Q&&V(Q);let $=j(!0);if(B){$.no=B,$.info=q;for(let ue of se||[])O($,ue)}W($)},busy:()=>!!ne||fe.length>0,clear(){for(let B of[...ee])V(B);fe.length=0,ne=null,I.carry=null,I.grip=0,I.hook=Jf,I.x=yi.x,I.z=yi.z,H.emissiveIntensity=.3,Y()},update(B){if(!ne&&fe.length){let $=fe.shift();ne=He($),ne.foup=$}let q=B*K.speed;for(;ne&&q>0;){let $=ne.steps[ne.i];if(!$){ne=null;break}if($.run||($.run=$.setup(),$.t=0),!$.run.d){$.run.fn&&$.run.fn(1),ne.i+=1;continue}let ue=Math.min(q,$.run.d-$.t);$.t+=ue,q-=ue,$.run.fn&&$.run.fn(Qi(at($.t/$.run.d,0,1))),$.t>=$.run.d-1e-6&&(ne.i+=1)}Y();for(let $ of[...ee])$.state==="spawning"?($.sp=Math.min(1,$.sp+B/.8),$.g.position.y=Xs-(Li+.07)*(1-Qi($.sp)),$.sp>=1&&($.state="dock")):$.state==="dock"&&$.doorOpen<1?($.doorOpen=Math.min(1,$.doorOpen+B/.6),oe($)):$.state==="sink"&&($.sp=Math.min(1,$.sp+B/1.2),$.g.position.y=ss-(Li+.09)*Qi($.sp),$.sp>=1&&V($));for(let $=0;$<_o;$++)x[$].emissiveIntensity=J[$]?1.6:0;let se=!!ne;u[0].emissiveIntensity=K.dockReady()?1.8:.15,u[1].emissiveIntensity=Q&&Q.state==="closing"?2.2:.15,u[2].emissiveIntensity=se?1.8:.15},dispose(){for(let B of[...ee])V(B);for(let B of[o.g,o.door])B.traverse(q=>q.geometry&&q.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return Y(),K}function ix(n){let e=new Qt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new Us({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?jn:Hs}),h=new ir(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new C,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new C((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new C(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var sx=.15,KE=.006;function rx(n){let e=new zn(sx,sx,KE,40,1,!1),t=new yt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new rt(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var rp=.34,Rd=.17,ox=4,ZE=2.4,JE=.55,jE=.9,op=.03,QE=5,Cd=-.006,e2=12,t2=.4,n2=3,i2=1.5,s2=9,r2=new ze(16756768),o2=new ze(3461498),Wl=(n,e=n.kind)=>n.status==="error"?"bad":_a.has(e)?"gold":"normal";function ax(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=Wl(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,Ad(n)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var Pd=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new fd(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=rp-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-Rd,r=this.gateOut+Rd,o=this.items.find(p=>p.s>s+1e-6&&p.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let p of this.items){let x=d?d.s-rp:this.end,m=!d||d.s-rp>=r;if(p.cycled)p.s<r&&(p.s<=this.gateOut-Rd+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(p.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),p.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&p.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else p.s<this.gateIn+Rd&&(a=!0);p.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(p.dwell+=e*t,c=!0,p.dwell>=JE&&(p.cycled=!0))}let g=x-p.s;if(g<=1e-5)p.v=0;else{let _=Math.min(ZE*t,Math.sqrt(2*ox*g));p.v=Math.min(_,p.v+ox*t*e),p.s=Math.min(x,p.s+p.v*e),u=!0}p.arrivedAt==null&&p.s>=this.end-1e-4&&(p.arrivedAt=i),d=p}let f=5*e*t;this.doorIn=at(this.doorIn+(a?f:-f),0,1),this.doorOut=at(this.doorOut+(l?f:-f),0,1),this.cycling=c,this.moving=u}};function lx({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new C,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=at(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new Pd([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),f=at((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),p=new Pd([o.outPort,o.outCenter,o.trackEnd],{gateIn:f*h,gateOut:h+.45,stop:h}),x=F=>e.byKind[F.kind]?F.kind:"generic",m=new Map,g=new Set,_=new Map,b=Object.fromEntries(e.list.map(F=>[F.kind,new Array(QE).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},M={inbound:0,outbound:0,robot:!1,stocker:!1},w={},v=[],S=0,A=0,R=!0,P=0,U=1,H=null;function I(F){let re=_.get(F);return re||(re={no:F,status:"running",info:null,shipped:!1,pending:[]},_.set(F,re)),re}let Y=F=>F.status!=="running"||F.no<S,ee=F=>{for(let re of m.values())if(re.turn===F)return!0;return!1};function J(F){let re={id:F.id,call:F,kind:x(F),turn:F.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:In,waitT:0};return m.set(F.id,re),I(F.turn),re}function Q(F){F.mesh&&(r.remove(F.mesh),F.mesh=null)}function z(F){F.stage="stored",m.delete(F.id),g.add(F.id)}function W(F){F.signaled||(F.signaled=!0,e.byKind[F.kind].onEnd(F.call,F.call.status!=="error"))}function O(F,re){t.addLate(F,re)||I(F).pending.push(re)}function V(F){F.it&&(d.remove(F.it),p.remove(F.it),F.it=null),F.level>=0&&(b[F.kind][F.level]=null,F.level=-1),y.carry===F&&(y.carry=null),Q(F),W(F),O(F.turn,Wl(F.call,F.kind)),z(F)}let oe=F=>b[F].indexOf(null);function j(F,re){let de=e.byKind[F.kind];b[F.kind][re]=F,F.level=re,F.stage="station",F.arriveT=P,F.mesh||(F.mesh=s.create("raw"),r.add(F.mesh)),F.mesh.position.set(de.port.x,In+re*op,de.port.z)}function he(){for(let F of m.values())Q(F);m.clear(),g.clear(),_.clear(),d.items.length=0,p.items.length=0;for(let F of Object.keys(b))b[F].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),H=null}function fe(F){w={},v=[];for(let re of F.calls){if(re.status!=="running")continue;let de=x(re);w[de]=(w[de]||0)+1,v.push(re)}S=F.turns.length?F.turns[F.turns.length-1].no:0}function ne(F){he(),t.clear();for(let N of F.turns)Object.assign(I(N.no),{info:N,status:N.status});let re=F.turns.filter(N=>N.status!=="running");for(let N of re)I(N.no).shipped=!0;for(let N of re.slice(-s2))t.placeNest(N.no,N,ax(N,F.calls));let de=F.turns.find(N=>N.status==="running")||null;de?t.resetDock(de.no,de,ax(de,F.calls)):t.resetDock(null,null,[]);for(let N of F.calls){if(N.status!=="running"){g.add(N.id);continue}let Je=J(N),dt=oe(Je.kind);dt>=0&&j(Je,dt),e.byKind[Je.kind].onStart(N)}fe(F)}function xe(F){if(!F)return;if(R||F.turnCount<A){R=!1,A=F.turnCount,ne(F);return}A=F.turnCount;for(let de of F.turns){let N=I(de.no);N.info=de,N.status=de.status,t.updateInfo(de.no,de)}let re=new Set;for(let de of F.calls){re.add(de.id);let N=m.get(de.id);N?N.call=de:g.has(de.id)||(J(de),e.byKind[x(de)].onStart(de))}for(let de of g)re.has(de)||g.delete(de);fe(F)}let Le=(F,re)=>({yaw:F,reach:vo,lift:re,d:(de,N)=>Math.max(.18,Math.abs(Tf(de.yaw,N.yaw))/4)});function ct(F,re){let de=e.byKind[F.kind];b[F.kind][re]=F,F.level=re;let N=re*op;return{type:"deliver",job:F,from:tn.lock.code,to:xi[F.kind].code,steps:[Le(yo,Cd),{reach:Es,d:.38},{lift:Gl,d:.15,onStart(){d.remove(F.it),F.it=null,F.stage="carried",F.restY=In,y.carry=F},onEnd:()=>F.restY=0},{reach:vo,d:.32},Le(de.theta,N+Gl),{reach:Es,d:.38},{lift:N+Cd,d:.15,onStart:()=>F.restY=In+N,onEnd(){y.carry=null,j(F,re)}},{reach:vo,d:.32}]}}function We(F){let re=e.byKind[F.kind],de=F.level,N=de*op;return F.reserved=!0,{type:"collect",job:F,from:xi[F.kind].code,to:tn.unload.code,steps:[Le(re.theta,N+Cd),{reach:Es,d:.38},{lift:N+Gl,d:.15,onStart(){b[F.kind][de]=null,F.level=-1,F.stage="carried",F.restY=In+N,y.carry=F},onEnd:()=>F.restY=0},{reach:vo,d:.32},Le(wa,Gl),{reach:Es,d:.38},{lift:Cd,d:.15,onStart:()=>F.restY=In,onEnd(){y.carry=null,F.it=p.add(F),F.stage="out"}},{reach:vo,d:.32}]}}function et(){let F=null,re=d.head();if(d.atEnd(re)){let de=oe(re.job.kind);de>=0&&(F={type:"deliver",job:re.job,k:de,ready:re.arrivedAt??P})}if(p.tailFree())for(let de of m.values())de.stage==="station"&&de.processed&&!de.reserved&&(!F||de.processedAt<F.ready)&&(F={type:"collect",job:de,ready:de.processedAt});return F?F.type==="deliver"?ct(F.job,F.k):We(F.job):null}function He(F){let re=n.robot;if(!y.task){let Je=et();Je?(y.task=Je,y.steps=Je.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,re.setBusy(!0)):(y.idle+=F,y.idle>i2&&!y.homed&&!y.cur&&(y.steps=[Le(yo,0)],y.homed=!0))}let de=F,N=0;for(;de>0&&N++<32;){if(!y.cur){let Re=y.steps.shift();if(!Re)break;let Ee={yaw:re.pose.yaw,reach:re.pose.reach,lift:re.pose.lift},Ae={yaw:Re.yaw??Ee.yaw,reach:Re.reach??Ee.reach,lift:Re.lift??Ee.lift},De=typeof Re.d=="function"?Re.d(Ee,Ae):Re.d;y.cur={st:Re,from:Ee,to:Ae,d:De/U,t:0},Re.onStart&&Re.onStart()}let Je=y.cur,dt=Math.min(de,Je.d-Je.t);Je.t+=dt,de-=dt;let _t=Je.d>0?Qi(Je.t/Je.d):1;re.setPose(Je.from.yaw+Tf(Je.from.yaw,Je.to.yaw)*_t,Bi(Je.from.reach,Je.to.reach,_t),Bi(Je.from.lift,Je.to.lift,_t)),Je.t>=Je.d-1e-6&&(y.cur=null,Je.st.onEnd&&Je.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,re.setBusy(!1)),re.setStatus){let Je=y.task,dt=!!y.cur||y.steps.length>0,_t=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;Je?re.setStatus(Je.type,Je.from,Je.to,_t):re.setStatus(dt?"home":"idle",null,dt?tn.lock.code:null,null)}y.carry&&y.carry.mesh&&(re.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function K(){for(let F of m.values())F.stage!=="station"||F.processed||F.call.status==="running"||P<F.arriveT+jE/U||(F.processed=!0,F.processedAt=P,s.setLook(F.mesh,Wl(F.call,F.kind)),W(F))}function B(F,re){p.remove(re),F.it=null,F.stage="transfer",H={j:F,t:0,d:t2/U,from:F.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new C)}}function q(F){if(!H)return;H.t+=F;let re=Qi(H.t/H.d),de=H.j.mesh;if(de.position.lerpVectors(H.from,H.to,re),de.position.y+=Math.sin(Math.PI*re)*.025,H.t>=H.d){let N=H.j;H=null,Q(N),t.dockTurn()===N.turn?t.addWafer(Wl(N.call,N.kind)):O(N.turn,Wl(N.call,N.kind)),z(N)}}function se(F){if(t.dockReady()&&t.dockTurn()==null){let N=null;for(let Je of _.values())!Je.shipped&&(!N||Je.no<N.no)&&(N=Je);if(N){t.bindDock(N.no,N.info);for(let Je of N.pending.splice(0))t.addWafer(Je)}}let re=t.dockTurn();if(re!=null&&!H&&t.dockReady()){let N=I(re);!N.shipped&&Y(N)&&!ee(re)&&t.ship(re)&&(N.shipped=!0)}let de=p.head();if(!H&&p.atEnd(de)){let N=de.job;I(N.turn).shipped?V(N):t.dockReady()&&t.dockTurn()===N.turn?B(N,de):(N.waitT+=F,N.waitT>n2&&re!=null&&re!==N.turn&&t.dockReady()&&t.ship(re)&&(I(re).shipped=!0))}}function $(){let F=m.size-e2;if(!(F<=0))for(let re of m.values()){if(F<=0)break;re.stage==="spawn"&&re.call.status!=="running"&&(V(re),F-=1)}}function ue(){if(d.tailFree()){for(let F of m.values())if(F.stage==="spawn"){F.mesh=s.create("raw"),r.add(F.mesh),F.it=d.add(F),F.stage="in",d.path.at(0,F.mesh.position),i.pulseDispenser();return}}}function Pe(F,re,de){F.emissive.copy(re?r2:o2),F.emissiveIntensity=re?1.6+Math.sin(de*10)*.8:.6}return t.resetDock(null,null,[]),{sync:xe,reset(){he(),t.clear(),t.resetDock(null,null,[]),w={},v=[],S=0,A=0,R=!0},update(F,re){P=re,U=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=U,$(),ue(),d.update(F,U,P),p.update(F,U,P),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(p.doorOut,p.doorIn),Pe(n.lock.led,d.cycling,re),Pe(n.unload.led,p.cycling,re),n.trackLed.emissiveIntensity=d.moving||p.moving?1.8+Math.sin(re*8)*.4:1,K(),He(F),se(F),q(F);for(let de of d.items)d.path.at(de.s,de.job.mesh.position);for(let de of p.items)p.path.at(de.s,de.job.mesh.position);for(let de of e.list){let N=!1,Je=!1;for(let _t of b[de.kind])_t&&_t.stage==="station"&&(N=!0,_t.processed||(Je=!0));let dt=(w[de.kind]||0)>0||Je;de.active=dt,de.update(F,re,{working:dt,wafer:N})}t.update(F)},activity(){return M.inbound=d.items.length,M.outbound=p.items.length,M.robot=!!y.task||!!y.cur,M.stocker=!!H||t.busy(),M},focus(F){let re=null;for(let de of v)(!re||(de.startedAt||0)>=(re.startedAt||0))&&(re=de);if(re){let de=e.byKind[x(re)];return F.copy(de.anchor),`station:${de.kind}`}return y.task?(F.copy(n.anchors.robot),"robot"):H||t.busy()?(F.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!y.task||!!y.cur||y.steps.length>0||!!H||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:p.items.length,robot:y.task?y.task.type:"idle",transfer:!!H,dock:t.dockTurn(),rush:U,stages:[...m.values()].reduce((F,re)=>(F[re.stage]=(F[re.stage]||0)+1,F),{})}},dispose(){for(let F of m.values())Q(F);m.clear()}}}function rn(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function En(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function rs(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function cx(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function ux(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var ap={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function qs(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?ap["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?ap["deepseek-flash"]:null:t?ap["deepseek-flash"]:null}function mr(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function Xl(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Id(n){if(!n||typeof n!="object")return null;let e={miss:Xl(n.inputTokens),hit:Xl(n.cacheReadTokens),write:Xl(n.cacheWriteTokens),output:Xl(n.outputTokens),reasoning:Xl(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function Ld(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function dx(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Dd(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var a2=60,gx=40,l2=200,c2=40,u2=24,d2=8,h2=250,f2=16,p2=5e3;function Fd(){return{provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0,unpriced:0},sample:null,speed:{last:0,decodeTokens:0,decodeMs:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],agents:[],workflows:[],firstAt:0,lastAt:0}}var Di=n=>typeof n=="number"&&Number.isFinite(n),hx=n=>Di(n)&&n>0?n:0,Ti=(n,e=120)=>typeof n=="string"?n.slice(0,e):"",Vr=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:null;function xx(n){if(Di(n))return n;if(typeof n=="string"){let e=Date.parse(n);if(Number.isFinite(e))return e}return NaN}function m2(n,e){let t=xx(n.time);return Number.isFinite(t)?t:e.lastAt}function As(n,e){e>n.lastAt&&(n.lastAt=e),!n.firstAt&&e&&(n.firstAt=e)}function yx(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function ql(n,e,t){let i=n.slice();return i[e]=t,i}function up(n,e){return n.length>e?n.slice(n.length-e):n}function dp(n,e,t){let i=[...n,e];for(;i.length>t;){let s=i.findIndex(r=>r.status!=="running");i.splice(s>=0?s:0,1)}return i}function vx(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],fileCount:0,added:0,removed:0}}var Ud=n=>n.turns[n.turns.length-1]||null,bo=n=>{let e=Ud(n);return e&&e.status==="running"?e:null};function fx(n,e,t){let i=bo(n);if(!i)return;n.turns=yx(n.turns,r=>({...r,status:e,endedAt:t}));let s=0;n.calls.some(r=>r.status==="running"&&r.turn===i.no)&&(n.calls=n.calls.map(r=>r.status!=="running"||r.turn!==i.no?r:(s+=1,{...r,status:"error",endedAt:t}))),s&&(n.tools={...n.tools,running:Math.max(0,n.tools.running-s),errors:n.tools.errors+s})}function lp(n,e,t){if(bo(n))return;let i=n.turnCount+1;n.turnCount=i,n.turns=up([...n.turns,vx(i,Di(t)?t:i,e)],gx)}function g2(n,e){let t=n.files.findIndex(s=>s.path===e.path),i={...n,added:n.added+e.added,removed:n.removed+e.removed};if(t>=0){let s=n.files[t];i.files=ql(n.files,t,{path:s.path,added:s.added+e.added,removed:s.removed+e.removed})}else i.fileCount=n.fileCount+1,n.files.length<c2&&(i.files=[...n.files,{path:e.path,added:e.added,removed:e.removed}]);return i}function x2(n){if(!Array.isArray(n))return null;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t&&t.type==="chunk"&&t.chunk&&t.chunk.type==="usage"&&t.chunk.usage)return t.chunk.usage}return null}var y2=new Set(["text-delta","reasoning-delta","tool-call-delta"]);function v2(n){if(!Array.isArray(n))return null;let e=1/0,t=-1/0,i=s=>{Di(s)&&(s<e&&(e=s),s>t&&(t=s))};for(let s of n)if(!(!s||typeof s!="object"))if(s.type==="text-chunks"||s.type==="reasoning-chunks"||s.type==="tool-call-chunks"){let r=Array.isArray(s.texts)?s.texts:Array.isArray(s.args)?s.args:[],o=Array.isArray(s.dt)?s.dt:[],a=s.time0;if(!Di(a))continue;s.type==="tool-call-chunks"&&s.name&&i(a);for(let l=0;l<r.length;l++)l>0&&(a+=Di(o[l-1])?o[l-1]:0),typeof r[l]=="string"&&r[l].length&&i(a)}else s.type==="chunk"&&s.chunk&&y2.has(s.chunk.type)&&i(s.time);return t>e?{first:e,last:t}:null}var _2={miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,peak:!1,savings:0,priced:!0};function b2(n,e){return n.miss===e.miss&&n.hit===e.hit&&n.write===e.write&&n.output===e.output&&n.reasoning===e.reasoning&&n.cost===e.cost&&n.peak===e.peak&&n.priced===e.priced}function M2(n,e,t,i){let s=Vr(t.message)&&Vr(t.message.source),r=s&&typeof s.provider=="string"&&s.provider?s.provider:n.provider,o=s&&typeof s.model=="string"&&s.model?s.model:n.model,a=qs(r,o),l=mr(i),c=Di(t.turn)?t.turn:-1,u=Di(t.step)?t.step:-1,d=n.sample&&c>=0&&n.sample.turn===c&&n.sample.step===u?n.sample:null,h=bo(n)||Ud(n),f={turn:c,step:u,no:d?d.no:h?h.no:0,miss:e.miss,hit:e.hit,write:e.write,output:e.output,reasoning:e.reasoning,cost:Ld(e,a,l),peak:l,savings:dx(e,a,l),priced:!!a};if(d&&b2(d,f))return!1;let p=d||_2,x=d?0:1,m=n.totals;return n.totals={miss:m.miss-p.miss+f.miss,hit:m.hit-p.hit+f.hit,write:m.write-p.write+f.write,output:m.output-p.output+f.output,reasoning:m.reasoning-p.reasoning+f.reasoning,requests:m.requests+x,cost:Math.max(0,m.cost-p.cost+f.cost),costPeak:Math.max(0,m.costPeak-(p.peak?p.cost:0)+(l?f.cost:0)),costOffPeak:Math.max(0,m.costOffPeak-(p.peak?0:p.cost)+(l?0:f.cost)),savings:Math.max(0,m.savings-p.savings+f.savings),unpriced:m.unpriced-(d&&!d.priced?1:0)+(a?0:1)},n.sample=f,n.contextTokens=e.miss+e.hit+e.write+e.output,f.no&&(n.turns=n.turns.map(g=>g.no!==f.no?g:{...g,miss:g.miss-p.miss+f.miss,hit:g.hit-p.hit+f.hit,write:g.write-p.write+f.write,output:g.output-p.output+f.output,reasoning:g.reasoning-p.reasoning+f.reasoning,cost:Math.max(0,g.cost-p.cost+f.cost),requests:g.requests+x})),!0}function S2(n,e,t){if(e.output<f2)return;let i=v2(t);if(!i)return;let s=i.last-i.first;s<h2||(n.speed={last:Math.min(p2,e.output/(s/1e3)),decodeTokens:n.speed.decodeTokens+e.output,decodeMs:n.speed.decodeMs+s})}function cp(n){return n==null||n==="completed"?"done":n==="aborted"||n==="cancelled"?"stopped":"error"}function w2(n){return{id:"",name:"",label:"",kind:"subagent",mode:"",runId:"",seq:-1,phase:"",status:"running",startedAt:0,endedAt:0,turn:0,...n}}function Od(n,e,t){let i=n.agents[e],s=!1;for(let r of Object.keys(t))i[r]!==t[r]&&(s=!0);return s?{...n,agents:ql(n.agents,e,{...i,...t})}:n}function px(n,e,t){let i={...n},s=bo(i)||Ud(i);return i.agents=dp(i.agents,w2({turn:s?s.no:0,startedAt:t,...e}),u2),As(i,t),i}function E2(n,e,t,i){let s=n.agents.findIndex(o=>o.id===e);if(s<0||n.agents[s].status!=="running")return n;let r=Od(n,s,{status:t,endedAt:i});return r!==n&&As(r,i),r}function T2(n,e,t){if(typeof e!="string"||!e)return;let i=e.slice(e.lastIndexOf("/")+1),s=n.agents.findIndex(r=>r.kind==="subagent"&&r.status!=="running"&&(r.name&&(r.name===e||r.name===i)||r.label===e));s<0||(n.agents=ql(n.agents,s,{...n.agents[s],status:"running",endedAt:0,startedAt:t}))}function Nd(n,e,t){let i=n.workflows.findIndex(o=>o.runId===e);if(i<0)return n;let s=n.workflows[i],r=t(s);return r===s?n:{...n,workflows:ql(n.workflows,i,r)}}var A2=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function mx(n,{provider:e,model:t,effort:i,contextWindow:s}){let r={};return typeof e=="string"&&e&&e.slice(0,80)!==n.provider&&(r.provider=e.slice(0,80)),typeof t=="string"&&t&&t.slice(0,120)!==n.model&&(r.model=t.slice(0,120)),typeof i=="string"&&i.slice(0,40)!==n.effort&&(r.effort=i.slice(0,40)),Di(s)&&s>0&&s!==n.contextWindow&&(r.contextWindow=s),Object.keys(r).length?{...n,...r}:n}function R2(n,e){if(!e||typeof e.type!="string")return n;let t=Vr(e.data)||{},i=m2(e,n);switch(e.type){case"request/header":{let s=Vr(Vr(t.header)&&t.header.config);return s?mx(n,{provider:s.provider,model:s.model,effort:typeof s.reasoningEffort=="string"?s.reasoningEffort:""}):n}case"request/context":return mx(n,{provider:t.provider,model:t.model,contextWindow:t.contextWindow});case"turn/start":{let s={...n};fx(s,"ok",i);let r=s.turnCount+1;return s.turnCount=r,s.turns=up([...s.turns,vx(r,Di(t.turn)?t.turn:r,i)],gx),s.phase="thinking",As(s,i),s}case"step/start":{if(bo(n)&&n.phase==="thinking")return n;let s={...n};return lp(s,i,t.turn),s.phase="thinking",As(s,i),s}case"llm/retry-started":{let s=n.sample;return s&&s.turn===t.turn&&s.step===t.step?{...n,sample:null}:n}case"assistant/attempt":case"assistant/message":{let s=e.type==="assistant/message",r=Id(s&&t.usage||x2(t.stream)),o=n;if(s&&(!bo(n)||n.phase!=="idle")&&(o={...n},lp(o,i,t.turn),o.phase="idle"),r){let a=o===n?{...n}:o;M2(a,r,t,i)&&(s&&S2(a,r,t.stream),o=a)}return o!==n&&As(o,i),o}case"tool/call":{let s=t.callId??t.id,r=(typeof s=="string"||Di(s)?String(s):"").slice(0,200)||`call-${Di(e.seq)?e.seq:n.tools.calls+1}`;if(n.calls.some(f=>f.id===r))return n;let o={...n};lp(o,i,t.turn);let a=Ti(t.name,80)||"tool",l=Ug(a),c=wd(t.arguments),u=_a.has(l)?Bg(a,c):null,d=u?{path:Ti(u.path,400),added:hx(u.added),removed:hx(u.removed)}:null,h={id:r,name:a,kind:l,label:kg(a,c),turn:Ud(o).no,startedAt:i,endedAt:0,status:"running",change:d&&d.path?d:null};return o.calls=dp(o.calls,h,a2),o.tools={...o.tools,calls:o.tools.calls+1,running:o.tools.running+1,byKind:{...o.tools.byKind,[l]:(o.tools.byKind[l]||0)+1}},o.turns=yx(o.turns,f=>({...f,calls:f.calls+1})),o.phase="tool",a==="send_message"&&T2(o,c.agent,i),As(o,i),o}case"tool/result":{let s=Vr(t.message)||{},r=String(s.toolCallId??t.callId??""),o=n.calls.findIndex(h=>h.id===r);if(o<0||n.calls[o].status!=="running")return n;let a={...n},l=!!t.error||s.isError===!0,c={...a.calls[o],status:l?"error":"ok",endedAt:i};a.calls=ql(a.calls,o,c);let u=Math.max(0,a.tools.running-1);a.tools={...a.tools,running:u,errors:a.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=a.files.paths.includes(d.path);a.files={count:a.files.count+(h?0:1),added:a.files.added+d.added,removed:a.files.removed+d.removed,paths:h?a.files.paths:up([...a.files.paths,d.path],l2)}}return(l||d)&&(a.turns=a.turns.map(h=>{if(h.no!==c.turn)return h;let f=l?{...h,errors:h.errors+1}:h;return d?g2(f,d):f})),u===0&&a.phase==="tool"&&(a.phase="thinking"),As(a,i),a}case"turn/end":{let s=Vr(t.reason)?t.reason.kind:void 0;if(!bo(n)&&n.phase==="idle")return n;let r={...n};return fx(r,A2.has(s)?"rework":"ok",i),r.phase="idle",As(r,i),r}case"subagent/catalog":{let s=Ti(t.childId,200);if(!s)return n;let r=Ti(t.name,80),o=Ti(t.label,80),a=Ti(t.mode,20),l=n.agents.findIndex(u=>u.id===s);if(l>=0){let u=n.agents[l];return Od(n,l,{name:r||u.name,label:o||u.label,mode:a||u.mode})}let c=xx(t.childCreatedAt);return px(n,{id:s,name:r,label:o||r||"subagent",mode:a,startedAt:Number.isFinite(c)?c:i},i)}case"user/message":{let s=Vr(t.source);return!s||s.kind!=="subagent-settled"?n:E2(n,Ti(s.senderSessionId,200),cp(s.stopReason),i)}case"tool-workflow/run-start":{let s=Ti(t.runId,120);if(!s||n.workflows.some(a=>a.runId===s))return n;let r={...n},o={runId:s,name:Ti(t.name,80)||"workflow",status:"running",startedAt:i,endedAt:0,agents:0,done:0,failed:0,phase:""};return r.workflows=dp(r.workflows,o,d2),As(r,i),r}case"tool-workflow/agent-start":{let s=Ti(t.runId,120);if(!s)return n;let r=Di(t.seq)?t.seq:-1,o=Ti(t.childId,200)||`${s}#${r}`,a=Ti(t.label,80)||"agent",l=Ti(t.phase,60),c=n.agents.findIndex(d=>d.id===o),u=c>=0?Od(n,c,{kind:"workflow",runId:s,seq:r,phase:l,label:a}):px(n,{id:o,label:a,kind:"workflow",runId:s,seq:r,phase:l},i);return c<0?u=Nd(u,s,d=>({...d,agents:d.agents+1,phase:l||d.phase})):l&&(u=Nd(u,s,d=>d.phase===l?d:{...d,phase:l})),u}case"tool-workflow/agent-end":{let s=Ti(t.runId,120),r=Di(t.seq)?t.seq:-1,o=n.agents.findIndex(c=>c.runId===s&&c.seq===r);if(o<0||n.agents[o].status!=="running")return n;let a=cp(t.outcome==="failed"?"error":t.outcome),l=Od(n,o,{status:a,endedAt:i});return l=Nd(l,s,c=>({...c,done:c.done+(a==="done"?1:0),failed:c.failed+(a==="error"?1:0)})),l!==n&&As(l,i),l}case"tool-workflow/run-end":{let s=Ti(t.runId,120),r=Nd(n,s,o=>o.status!=="running"?o:{...o,status:cp(t.stopReason),endedAt:i});return r.agents.some(o=>o.runId===s&&o.status==="running")&&(r===n&&(r={...n}),r.agents=r.agents.map(o=>o.runId===s&&o.status==="running"?{...o,status:"stopped",endedAt:i}:o)),r!==n&&As(r,i),r}default:return n}}function hp(n,e){let t=n;for(let i of e)t=R2(t,i);return t}function kd(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output,r=n.turns.filter(a=>a.status!=="running"),o=n.tools.calls-n.tools.running;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:o>0?(o-n.tools.errors)/o:1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:r.length?r.filter(a=>a.status==="ok").length/r.length:1,decodeRate:n.speed&&n.speed.decodeMs>0?n.speed.decodeTokens/(n.speed.decodeMs/1e3):0}}var xt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},zd={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:xt.violet},reasoning:{zh:"推理",en:"REASONING",color:xt.violet},generating:{zh:"生成",en:"GENERATING",color:xt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:xt.amber}},fp=gd(),_x=120,bx=90,C2=[20,50,100,150,200,300,500,1e3,2e3],P2=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],Mx=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function Yl(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function pp(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function Sx(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Yt}`,n.fillStyle=xt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Ht}`,n.fillStyle=xt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Ht}`,n.fillStyle=o||xt.muted,n.fillText(r,e-36,39))}function gr(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Yt}`,n.fillStyle=xt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Ht}`,n.fillStyle=xt.dim,r==="left"&&n.fillText(s,e+a,t)}function wx(n,e,t,i,s,r=96,o="",a=xt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Ht}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Ht}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function Ex(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Ht}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),f=x=>t+s-s*at(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),f(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let p=n.createLinearGradient(0,t,0,t+s);p.addColorStop(0,a),p.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=p,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),f(r[x])):n.moveTo(h(x),f(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function Bd(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),gr(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Ht}`,n.fillStyle=xt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Ht}`,n.fillStyle=xt.muted,n.fillText(l,e+20,t+s-14))}function I2(n,e,t,i){Yl(n,e,t);let s=zd[i.phase]||zd.idle;Sx(n,e,"令牌流量","TOKEN FLOW",xt.cyan,`● ${s.zh} ${s.en}`,s.color),gr(n,36,122,"实时速率","LIVE RATE"),wx(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",xt.cyan,104,"tok/s"),gr(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Ht}`,n.fillStyle=xt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=Mx(Math.max(20,...i.tpsHist)*1.15,C2);Ex(n,470,104,e-470-40,236,i.tpsHist,{color:xt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Ht}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;Bd(n,36,a,o,l,"输入","INPUT",rn(c.miss+c.write),"未命中缓存 · MISS",xt.blue),Bd(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",rn(c.hit),`命中率 ${rs(i.hitRate)}`,xt.green),Bd(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",rn(c.output),`请求 ${c.requests}`,xt.cyan),Bd(n,36+(o+16)*3,a,o,l,"推理","REASONING",rn(c.reasoning),"思考链 · THINKING",xt.violet),pp(n,e,t,xt.cyan)}function $l(n,e,t,i,s,r,o,a,l){gr(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Ht}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Ht}`,n.fillStyle=xt.muted,n.fillText(a,e,t+112))}function L2(n,e,t,i){Yl(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,xt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Yt}`,n.fillStyle=xt.text,n.shadowColor=xt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Ht}`,n.fillStyle=xt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${Yt}`;let b=n.measureText(_).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,b,40),n.strokeStyle=xt.amber,n.lineWidth=2,n.strokeRect(y+1,29,b-2,38),n.fillStyle=xt.amber,n.fillText(_,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Ht}`,n.fillStyle=xt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=zd[i.phase]||zd.idle,a=(e-80)/5,l=148;$l(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),$l(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,xt.text),$l(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${rs(i.toolSuccess)}`,xt.cyan),$l(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,xt.gold),$l(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,xt.blue);let c=330;gr(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,f=116,p=c+22,x=i.recent.slice(-u),m=u-x.length;for(let _=0;_<u;_++){let b=40+_*(h+d),y=x[_-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,p+1,h-2,f-2);continue}let M=y.status==="running"?xt.cyan:y.status==="error"?xt.red:_a.has(y.kind)?xt.gold:xt.blue,w=n.createLinearGradient(0,p,0,p+f);w.addColorStop(0,M),w.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=w,n.fillRect(b,p,h,f),n.globalAlpha=1,n.fillStyle=M,n.fillRect(b,p+f-6,h,6);let v=xi[y.kind]||xi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Ht}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),b+h/2,p+f/2-6)}let g=x[x.length-1];if(g){let _=xi[g.kind]||xi.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Yt}`,n.fillStyle=xt.text;let y=String(g.label||g.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${y}`,40,p+f+52),n.textAlign="right",n.font=`700 22px ${Ht}`,n.fillStyle=g.status==="running"?xt.cyan:g.status==="error"?xt.red:xt.green,n.fillText(b,e-40,p+f+52)}pp(n,e,t,xt.cyan)}function D2(n,e,t,i){Yl(n,e,t),Sx(n,e,"成本与上下文","COST & CONTEXT",xt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?xt.amber:xt.green),gr(n,36,122,"累计花费","TOTAL COST"),wx(n,36,226,i.priced?En(i.cost):"—",xt.gold,90),n.font=`600 22px ${Ht}`,n.fillStyle=xt.muted,n.textAlign="left",n.fillText(`高峰 ${En(i.costPeak)} · 低谷 ${En(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=Mx(Math.max(.01,...i.costHist)*1.15,P2);Ex(n,480,104,e-480-40,200,i.costHist,{color:xt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>En(d)}),n.font=`600 17px ${Ht}`,n.fillStyle=xt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;gr(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Ht}`,n.fillStyle=xt.text,n.fillText(i.window?`${rn(i.ctx)} / ${rn(i.window)} · ${rs(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?xt.red:i.ratio>=.6?xt.amber:xt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*at(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;gr(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Ht}`,n.fillStyle=xt.green,n.fillText(i.priced?En(i.savings):"—",330,u+2),gr(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Ht}`,n.fillStyle=xt.text,n.fillText(rs(i.hitRate),e-36,u+2),pp(n,e,t,xt.gold)}var N2={flow:I2,main:L2,cost:D2};function Tx(n,e,{demo:t=!1}={}){let i=!!t,s=new Qt;s.name="screens";let r=[],o=new yt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),a=nt.screenR;for(let y of fp){let[M,w]=y.px,v=zt(M,w,(U,H,I)=>Yl(U,H,I),{anisotropy:8}),S=new Kt({map:v.tex,name:`screen-${y.id}`,toneMapped:!1});S.color.setScalar(1.25);let A=new rt(Gt($e.cx,$e.cz,a,y.a0,y.a1,y.y0,y.y1,48,!0),S);A.name=`screen-${y.id}`,A.userData.screenId=y.id,s.add(A);let R=.05/a,P=new rt(Gt($e.cx,$e.cz,a+.015,y.a0-R,y.a1+R,y.y0-.05,y.y1+.05,48,!0),o);P.name=`screen-bezel-${y.id}`,P.layers.set(dn),s.add(P),A.userData.noHighlight=!0,r.push({def:y,tex:v,sig:"",draw:N2[y.id],panel:A,scale:1})}let l=null,c=(y,M)=>y.tex.redraw(w=>{y.scale!==1&&w.scale(y.scale,y.scale),y.draw(w,y.def.px[0],y.def.px[1],M)}),u=new Array(_x).fill(0),d=new Array(bx).fill(0),h=0,f=0,p=0,x=0,m=0,g=!1;function _(y){let M=y.state,w=y.live||{},v=y.phase||(w.phase&&w.phase!=="idle"?w.phase:M?M.phase:"idle"),S=M?M.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},A=M?kd(M):{hitRate:0,toolSuccess:1,contextRatio:0},R=M?M.turns:[];return{demo:i,phase:v,tps:y.tps||0,peakTps:x,tpsHist:u,costHist:d,totals:S,hitRate:A.hitRate,toolSuccess:A.toolSuccess,model:M?M.model:"",effort:M?M.effort:"",turn:M?M.turnCount:0,ok:R.filter(P=>P.status==="ok").length,rework:R.filter(P=>P.status==="rework").length,calls:M?M.tools.calls:0,running:M?M.tools.running:0,files:M?M.files.count:0,added:M?M.files.added:0,removed:M?M.files.removed:0,requests:S.requests,recent:M?M.calls:[],peak:!!y.peak,priced:!M||!M.model||!!qs(M.provider,M.model),cost:S.cost,costPeak:S.costPeak,costOff:S.costOffPeak,savings:S.savings,ctx:M?M.contextTokens:0,window:M?M.contextWindow:0,ratio:A.contextRatio||0}}function b(y,M){if(y==="flow"){let w=M.totals;return`${M.phase}|${Math.round(M.tps*2)}|${w.miss+w.write}|${w.hit}|${w.output}|${w.reasoning}|${w.requests}|${m>0?h:"flat"}|${Math.round(M.peakTps)}`}if(y==="main"){let w=M.recent[M.recent.length-1];return`${M.demo}|${M.model}|${M.effort}|${M.phase}|${M.turn}|${M.ok}|${M.rework}|${M.calls}|${M.running}|${M.files}|${M.added}|${M.removed}|${M.requests}|${M.recent.length}|${w?`${w.id}:${w.status}`:""}|${Math.round(M.toolSuccess*1e3)}`}return`${M.cost.toFixed(5)}|${M.costPeak.toFixed(5)}|${M.savings.toFixed(5)}|${M.ctx}|${M.window}|${M.peak}|${M.requests}|${d[bx-1].toFixed(5)}|${Math.round(M.hitRate*1e3)}`}return{root:s,update(y,M,w){h+=y,f+=y,p+=y;let v=w.tps||0;x=Math.max(x,v),h>=.5&&(h=0,u.shift(),u.push(v),m=v>.5?_x:Math.max(0,m-1));let S=w.state?w.state.totals.cost:0;if(!g&&w.state&&(d.fill(S),g=!0),f>=2&&(f=0,d.shift(),d.push(S)),p<.5)return;p=0;let A=_(w);l=A;for(let R of r){let P=b(R.def.id,A);P!==R.sig&&(R.sig=P,c(R,A))}},hover:r.map(y=>({id:`screen:${y.def.id}`,object:y.panel})),setDetail(y,M=2){for(let w of r){let v=w.def.id===y?M:1;if(v===w.scale)continue;let[S,A]=w.def.px,R=w.tex;w.scale=v,w.tex=zt(S*v,A*v,P=>{P.scale(v,v),Yl(P,S,A)},{anisotropy:8}),w.panel.material.map=w.tex.tex,w.sig="",l&&(w.sig=b(w.def.id,l),c(w,l)),R.tex.dispose()}},setDemo(y){i=!!y;for(let M of r)M.sig=""},reset(){u.fill(0),d.fill(0),x=0,m=0,g=!1;for(let y of r)y.sig=""}}}var Wr=16,O2=.004,mp=.06,Hd=new ze(4164863),Ax=new ze(4641535),Rx=new ze(16762218),F2=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${Wr}];
uniform float uOffset[${Wr}];
uniform vec3 uColor[${Wr}];
varying float vS;
varying float vX;
varying float vLevel;
varying float vOffset;
varying vec3 vColor;
#include <fog_pars_vertex>
void main() {
  int c = int(aChan + 0.5);
  vLevel = uLevel[c];
  vOffset = uOffset[c];
  vColor = uColor[c];
  vS = aS;
  vX = aX;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,U2=`
varying float vS;
varying float vX;
varying float vLevel;
varying float vOffset;
varying vec3 vColor;
#include <fog_pars_fragment>
void main() {
  float ax = abs(vX);
  float core = 1.0 - smoothstep(0.15, 0.7, ax);
  // Dark glass groove under the light, so the channel reads on the white floor.
  float groove = (1.0 - smoothstep(0.85, 1.0, ax)) * 0.55;
  float k = fract((vS - vOffset) / 1.6);
  // A comet: sharp head, fading tail behind it.
  float pulse = pow(k, 7.0) * (1.0 - smoothstep(0.95, 1.0, k));
  float a = core * (0.25 + vLevel * (0.6 + pulse * 4.0));
  vec3 col = vColor * a;
  #ifdef USE_FOG
    float f = 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    col *= f;
    groove *= f;
  #endif
  // Premultiplied: dst · (1 − groove) + glow.
  gl_FragColor = vec4(col, groove);
}`;function k2(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=mp/2,f=r[0]-u*(s===0?0:h),p=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(mp/2),_=u*(mp/2),b=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),M=[[f-g,p-_,b,-1],[f+g,p+_,b,1],[x+g,m+_,y,1],[x-g,m-_,y,-1]];for(let w of[0,1,2,0,2,3]){let v=M[w];t.pos.push(v[0],O2,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var Cx=n=>[n.x,n.z];function Px(){let n={},e=[],t=[],i=(m,g,_)=>{n[m]=t.length,e.push(g),t.push(_)},s=[ws.x,ws.z],r=(m,g,_)=>[Cx(is(m,g)),Cx(is(m,_))];i("fuel",Ax,[[-7.45,-.7],[-4.6,-.7]]),i("feed",Hd,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,Hd,r(Yf(m),.95,2.12));i("lock",Ax,r(yo,.95,2.1)),i("unload",Rx,r(wa,.95,2.1)),i("out",Rx,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Ut;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",Hd,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>k2(m,g,a));let l=new qt;l.setAttribute("position",new pt(a.pos,3)),l.setAttribute("aS",new pt(a.s,1)),l.setAttribute("aX",new pt(a.x,1)),l.setAttribute("aChan",new pt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(Wr),u=new Float32Array(Wr),d=new Float32Array(Wr),h=new Float32Array(Wr),f=[];for(let m=0;m<Wr;m++)f.push((e[m]||Hd).clone());let p=new an({name:"floor-channels",vertexShader:F2,fragmentShader:U2,uniforms:sd.merge([Qe.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:f}}]),transparent:!0,blending:ha,blendSrc:Lr,blendDst:Dr,blendSrcAlpha:mu,blendDstAlpha:Lr,depthWrite:!1,fog:!0});p.uniforms.uLevel.value=c,p.uniforms.uOffset.value=u,p.uniforms.uColor.value=f;let x=new rt(l,p);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(dn),d.fill(.8),{root:x,ids:n,set(m,g,_){let b=n[m];b!=null&&(h[b]=g,_!=null&&(d[b]=_))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var gp=new C($e.cx,0,$e.cz-17),Vi={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},Dt=Vi.h,B2=[{id:"sofa",pose:"sit",p:[-1.2,Dt+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,Dt+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,Dt+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,Dt+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,Dt,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,Dt,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function z2(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function H2(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Ut),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Ut;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Ut),n.fill()}}function G2(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${Yt}`,n.textBaseline="top",n.fillText(`${tn.living.code} · ${tn.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${Yt}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${Ht}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function Ix(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function Kl(n,e,t,i,s,r=0){let o=new Qt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new rt(new $t(e,t,i),Lx);return a.position.y=t/2,o.add(a),o}var Lx=new Kt({visible:!1});function Dx(n){let e=new Qt;e.name="living",e.position.copy(gp);let t=zt(512,512,z2,{repeat:[3,2],anisotropy:8}),i=zt(512,512,H2,{anisotropy:8}),s={wood:new yt({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new yt({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new yt({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new yt({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new yt({name:"living-rug",map:i.tex,roughness:1}),leaf:new yt({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new yt({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new yt({name:"living-soil",color:3811870,roughness:1}),sand:new yt({name:"living-sand",color:14272931,roughness:.95}),rice:new yt({name:"living-rice",color:16513264,roughness:.7}),eye:new yt({name:"living-eye",color:1118999,roughness:.3}),bookA:new yt({name:"living-book-a",color:4020904,roughness:.7}),bookB:new yt({name:"living-book-b",color:13137466,roughness:.7}),bookC:new yt({name:"living-book-c",color:15327951,roughness:.7}),bookD:new yt({name:"living-book-d",color:3111538,roughness:.7}),warm:zf(16766624,2.8),cyan:zf(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new ut,o=(O,V,oe=[0,0,0],j=[0,0,0],he=[1,1,1])=>r.add(O,D(V,oe,j,he)),a=Vi.x1-Vi.x0,l=Vi.z1-Vi.z0;o("wood",Ne(a,Vi.h,l,.02,2),[0,Vi.h/2,0]),o("warm",Te(a-.1,.006,.012),[0,.004,Vi.z0-.004]),o("warm",Te(a-.1,.006,.012),[0,.004,Vi.z1+.004]),o("rug",new Dn(1.85,64),[-1.2,Dt+.004,-.35],[-Math.PI/2,0,0]);{let O=[-1.2,Dt,.9],V=(j,he,fe)=>[O[0]+j,O[1]+he,O[2]+fe];o("fabric",Ne(3,.28,.95,.08,3),V(0,.22,0));for(let j of[-1,0,1])o("fabric",Ne(.97,.16,.8,.07,3),V(j,.44,-.06)),o("fabric",Ne(.97,.44,.2,.09,3),V(j,.68,.36),[-.14,0,0]);for(let j of[-1.6,1.6])o("fabric",Ne(.2,.5,.95,.08,3),V(j,.33,0));o("fabricBlue",Ne(.5,.36,.14,.06,3),V(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Ne(.5,.36,.14,.06,3),V(.35,.66,.2),[-.3,-.2,0]);for(let j of[-1.42,1.42])for(let he of[-.38,.38])o("chrome",ce(.025,.02,.08,10),V(j,.04,he));o("warm",Te(2.7,.004,.7),V(0,.002,0));let oe=V(.92,.6,-.05);o("blue",es(1,20,14),oe,[0,.3,0],[.24,.17,.16]),o("white",es(1,16,10),[oe[0]+.02,oe[1]-.05,oe[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",es(1,12,8),[oe[0]-.26,oe[1]+.07,oe[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",es(1,10,8),[oe[0]+.05,oe[1]-.02,oe[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",es(.016,10,8),[oe[0]+.16,oe[1]+.03,oe[2]-.12]),o("eye",es(.016,10,8),[oe[0]+.2,oe[1]+.03,oe[2]+.03])}{let O=[-1.2,Dt,-.7];o("white",ce(.52,.52,.035,48),[O[0],O[1]+.4,O[2]]),o("chrome",ce(.05,.08,.36,20),[O[0],O[1]+.2,O[2]]),o("chrome",ce(.28,.3,.025,32),[O[0],O[1]+.012,O[2]]);let V=[O[0]+.16,O[1]+.418,O[2]+.08];o("white",zi([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),V),o("rice",es(1,20,10),[V[0],V[1]+.05,V[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Te(.22,.008,.008),[V[0]+.02,V[1]+.08,V[2]-.02],[0,.3,.12]),o("woodDark",Te(.22,.008,.008),[V[0]+.02,V[1]+.08,V[2]+.01],[0,.2,.12]),o("blue",ce(.038,.034,.09,20),[O[0]-.22,O[1]+.462,O[2]-.12])}{let O=[-3.15,Dt,1.45];o("chrome",ce(.2,.22,.04,32),[O[0],O[1]+.02,O[2]]),r.add("chrome",oi([[O[0],O[1]+.04,O[2]],[O[0],O[1]+1.95,O[2]],[-2.3,Dt+2.3,1.05],[-1.7,Dt+2.05,.6]],.016,.35,10)),o("white",new Nn(.24,28,12,0,Ut,0,Math.PI/2),[-1.7,Dt+1.86,.6]),o("warm",new Dn(.21,28),[-1.7,Dt+1.862,.6],[Math.PI/2,0,0])}{for(let fe of[-3.35,.95])for(let ne of[-2,2])o("white",Ne(.09,3,.09,.02),[fe,Dt+3/2,ne]);for(let fe of[-2,2])o("white",Ne(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,Dt+3,fe]);for(let fe of[-3.35,.95])o("white",Ne(.1,.1,4,.02),[fe,Dt+3,0]);for(let fe=1;fe<6;fe++){let ne=-3.35+4.3*fe/6;o("alu",Te(.05,.06,4-.1),[ne,Dt+3+.02,0])}for(let fe of[-2+.06,2-.06])o("warm",Te(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,Dt+3-.056,fe])}{let O=[3.35,Dt,1.6],V=(j,he,fe)=>[O[0]+j,O[1]+he,O[2]+fe];o("white",Ne(2.3,.26,1.4,.1,3),V(0,.23,0)),o("warm",Te(2.1,.004,1.2),V(0,.002,0)),o("fabric",Ne(2.12,.17,1.26,.07,3),V(0,.44,0)),o("fabricBlue",Ne(1.3,.05,1.28,.03,2),V(.36,.535,0)),o("fabric",Ne(.44,.11,.82,.05,3),V(-.78,.58,0)),o("white",Ne(.09,.56,1.36,.03,2),V(-1.13,.64,0));let oe=new zn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",oe,V(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Te(.03,.012,1.22),V(-.45,.36+.725,0))}{o("white",Ne(1.85,.86,.62,.03,2),[-3.8,Dt+.45,2.62]),o("graphite",Te(1.8,.06,.56),[-3.8,Dt+.03,2.62+.02]),o("wood",Ne(1.92,.045,.68,.015,2),[-3.8,Dt+.905,2.62]),o("ceramic",Ne(.7,1.95,.64,.04,2),[-2.5,Dt+.975,2.62]),o("chrome",Te(.02,.6,.03),[-2.2,Dt+1.2,2.62-.33]),o("wood",Te(1.8,.04,.28),[-3.8,Dt+1.72,2.62+.17]);for(let[oe,j,he]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(he,ce(.06,.06,j,18),[oe,Dt+1.74+j/2,2.62+.17]);o("soil",ce(.08,.06,.12,16),[-3.2,Dt+1.8,2.62+.17]),o("leaf2",es(.14,12,8),[-3.2,Dt+1.95,2.62+.17],[0,0,0],[1,.8,1]);let V=[-4,Dt+.93,2.62-.04];o("white",ce(.16,.15,.2,36),[V[0],V[1]+.1,V[2]]),o("graphite",zi([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[V[0],V[1]+.2,V[2]]),o("chrome",ce(.012,.012,.02,10),[V[0]+.05,V[1]+.29,V[2]]),o("graphite",Te(.08,.03,.03),[V[0],V[1]+.29,V[2]-.02]);for(let oe of[-4.4,-3.75])o("fabricBlue",ce(.18,.18,.06,28),[oe,Dt+.66,1.92]),o("chrome",ce(.025,.025,.6,12),[oe,Dt+.33,1.92]),o("chrome",ce(.2,.22,.025,28),[oe,Dt+.012,1.92]),o("chrome",new wi(.16,.012,8,28),[oe,Dt+.25,1.92],[Math.PI/2,0,0])}let c=Zt(4641535,1.6),u=new rt(Te(.035,.012,.006),c);u.position.set(-4,Dt+1.07,2.42),e.add(u);{let O=[3.4,Dt,-2.05];o("white",Ne(1.6,.04,.72,.015,2),[O[0],O[1]+.74,O[2]]);for(let oe of[-.76,.76])o("white",Ne(.04,.72,.64,.015,2),[O[0]+oe,O[1]+.36,O[2]]);o("cyan",Te(1.5,.006,.012),[O[0],O[1]+.718,O[2]-.35]),o("graphite",Ne(.48,.02,.16,.008,2),[O[0]-.1,O[1]+.77,O[2]+.12]),o("chrome",ce(.012,.014,.3,10),[O[0],O[1]+.91,O[2]-.22]),o("chrome",ce(.07,.08,.012,20),[O[0],O[1]+.766,O[2]-.22]);let V=[O[0],O[1],O[2]+.62];o("fabricBlue",Ne(.5,.08,.48,.04,2),[V[0],V[1]+.48,V[2]]),o("fabricBlue",Ne(.5,.52,.07,.04,2),[V[0],V[1]+.82,V[2]+.24],[.1,0,0]),o("chrome",ce(.025,.025,.4,12),[V[0],V[1]+.24,V[2]]);for(let oe=0;oe<5;oe++){let j=oe/5*Ut;o("graphite",Te(.32,.03,.04),[V[0]+Math.cos(j)*.16,V[1]+.04,V[2]+Math.sin(j)*.16],[0,-j,0]),o("rubber",es(.025,10,8),[V[0]+Math.cos(j)*.31,V[1]+.025,V[2]+Math.sin(j)*.31])}}let d=Ix(new Date),h=zt(512,288,(O,V,oe)=>G2(O,V,oe,d),{anisotropy:8}),f=new Kt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:nn});f.color.setScalar(1.3);let p=new rt(new vt(.88,.495),f);p.position.set(3.4,Dt+1.3,-2.27),p.rotation.x=-.08,p.renderOrder=3,e.add(p);let x=new C(-4,Dt,-2.05);o("white",ce(.5,.53,.36,48),[x.x,x.y+.18,x.z]),o("chrome",ce(.48,.48,.03,48),[x.x,x.y+.375,x.z]),o("sand",ce(.44,.44,.07,40),[x.x,x.y+.425,x.z]),o("chrome",ce(.48,.48,.03,48),[x.x,x.y+1.52,x.z]),o("cyan",new wi(.47,.008,6,64),[x.x,x.y+.4,x.z],[Math.PI/2,0,0]);for(let[O,V,oe,j]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(j,ce(.012,.03,oe,6),[x.x+O,x.y+.46+oe/2,x.z+V],[.15,0,.1]);let m=new rt(ce(.445,.445,1.05,40),new yt({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(x.x,x.y+.97,x.z),m.renderOrder=1,e.add(m);let g=new rt(ce(.47,.47,1.12,48,!0),n.glass);g.position.set(x.x,x.y+.96,x.z),g.renderOrder=2,e.add(g);let _=(()=>{let O=D(new Nn(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),V=D(new ks(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),oe=new qt,j=[O,V].map(ne=>ne.toNonIndexed()),he=[],fe=[];for(let ne of j)he.push(...ne.attributes.position.array),fe.push(...ne.attributes.normal.array);oe.setAttribute("position",new pt(he,3)),oe.setAttribute("normal",new pt(fe,3));for(let ne of j)ne.dispose();return O.dispose(),V.dispose(),oe})(),b=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],y=new Bn(_,new yt({name:"living-fish",roughness:.4,metalness:.1}),b.length);y.name="aquarium-fish",y.frustumCulled=!1;let M=new ze;b.forEach((O,V)=>y.setColorAt(V,M.setHex(O.c))),e.add(y);let w=new wt,v=new Mn,S=new C,A=new C(1,1,1),R=new si;function P(O){b.forEach((V,oe)=>{let j=V.ph+O*V.s;S.set(x.x+Math.cos(j)*V.r,x.y+V.y+Math.sin(O*.9+V.ph)*.03,x.z-Math.sin(j)*V.r),R.set(0,j+(V.s>0?Math.PI/2:-Math.PI/2),Math.sin(O*3+oe)*.08),v.setFromEuler(R),w.compose(S,v,A),y.setMatrixAt(oe,w)}),y.instanceMatrix.needsUpdate=!0}P(0);{let O=[.6,Dt,3.02],V=3.6,oe=.42;o("graphite",Te(V,.9,.03),[O[0],O[1]+.45,O[2]+oe/2-.015]),o("white",Te(V,.04,oe),[O[0],O[1]+.02,O[2]]),o("white",Te(V-.04,.03,oe-.02),[O[0],O[1]+.45,O[2]]),o("white",Ne(V+.02,.05,oe+.02,.015,2),[O[0],O[1]+.9,O[2]]);for(let ne of[-V/2+.015,-.9,0,.9,V/2-.015])o("white",Te(.03,.88,oe),[O[0]+ne,O[1]+.45,O[2]]);let j=["bookA","bookB","bookC","bookD"],he=[-V/2+.03,-.885,.015,.915],fe=0;for(let ne=0;ne<2;ne++)he.forEach((xe,Le)=>{if((Le+ne)%3===2)return;let ct=O[0]+xe+.02,We=5+(Le*3+ne)%5;for(let et=0;et<We;et++){let He=.04+fe*7%5*.008,K=(ne?.3:.32)-fe*11%4*.025;o(j[fe%4],Te(He,K,.24),[ct+He/2,O[1]+(ne?.465:.04)+K/2,O[2]+.02]),ct+=He+.004,fe+=1}});o("graphite",Ne(.34,.26,.03,.01,2),[O[0]-.9,O[1]+1.055,O[2]+.05]),o("cyan",Te(.3,.22,.002),[O[0]-.9,O[1]+1.055,O[2]+.034]),o("white",ce(.09,.07,.14,18),[O[0]+1.1,O[1]+.97,O[2]]),o("leaf",es(.15,12,8),[O[0]+1.1,O[1]+1.15,O[2]],[0,0,0],[1,.9,1])}for(let[O,V,oe]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",ce(.27*oe,.21*oe,.5*oe,28),[O,Dt+.25*oe,V]),o("soil",ce(.25*oe,.25*oe,.02,24),[O,Dt+.49*oe,V]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([he,fe,ne,xe],Le)=>o(Le%2?"leaf2":"leaf",es(xe*oe,12,8),[O+he*oe,Dt+fe*oe,V+ne*oe],[0,0,0],[1,.85,1])),o("woodDark",ce(.02*oe,.03*oe,.6*oe,6),[O,Dt+.75*oe,V]);let U=[-5.35,0,3.4],H=Math.atan2(-.7,.7);o("white",Ne(.5,1.4,.12,.03,2),[U[0],.7,U[2]],[0,H,0]),o("cyan",Te(.012,1.3,.13),[U[0]+Math.cos(H)*.26,.7,U[2]-Math.sin(H)*.26],[0,H,0]);let I=tn.living,Y=Ms(I.zh,I.en,I.code),ee=new rt(new vt(.46,.13),Wn(Y.tex,.2));ee.position.set(U[0]+Math.sin(H)*.062,1.12,U[2]+Math.cos(H)*.062),ee.rotation.y=H,e.add(ee);let J=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(J),e.add(Kl("bed",2.4,1.15,1.45,[3.35,0,1.6]),Kl("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),Kl("aquarium",1.08,1.56,1.08,[x.x,0,x.z]),Kl("bookshelf",3.62,.95,.46,[.6,0,3.02]),Kl("desk",1.62,1.6,.8,[3.4,0,-2.05]));let Q=new rt(new $t(Vi.x1-Vi.x0,1.2,Vi.z1-Vi.z0),Lx);Q.position.set(0,.6,0),Q.name="living-hover",e.add(Q);let z=B2.map(O=>{let V=new cn;return V.name=`mascot-anchor:${O.id}`,V.position.fromArray(O.p),V.rotation.y=O.yaw,V.userData={mascotAnchor:O.id,pose:O.pose},e.add(V),{id:O.id,pose:O.pose,position:new C().fromArray(O.p).add(gp),yaw:O.yaw}}),W=0;return{root:e,anchors:z,hover:[{id:"living",object:Q}],labelAnchor:new C(0,3.55,0).add(gp),update(O,V){if(P(V),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin(V*1.7)),W-=O,W<=0){W=1;let oe=Ix(new Date);oe!==d&&(d=oe,h.redraw())}},dispose(){_.dispose(),y.dispose()}}}var Xr=.3,yp=.65,V2=Math.PI*2,Ea=.16/nt.screenR,xp=nt.top+.05,Gd=nt.back+.05,Nx=.1;function Vd(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var Ox=[Vd("media-wall",12.36,Gd,nt.a0-Ea,nt.a1+Ea,0,xp),Vd("media-modules",11.78,Gd,nt.a0-Ea,nt.a1+Ea,0,2.34),Vd("media-cap-right",11.78,Gd,nt.a0-Ea,nt.a0,0,xp),Vd("media-cap-left",11.78,Gd,nt.a1,nt.a1+Ea,0,xp)],vp=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+V2:t};function Wd(n,e,t){n.x=$e.cx+t*Math.cos(e),n.z=$e.cz-t*Math.sin(e)}var $n=new C,Fx=new C,Ux=new C,qn=new C;function Mo(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-$e.cx,s=e.z-$e.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=vp(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return $n.copy(e).applyMatrix4(n.inv),$n.x>=n.min.x-t&&$n.x<=n.max.x+t&&$n.z>=n.min.z-t&&$n.z<=n.max.z+t&&$n.y>=n.min.y-t&&$n.y<=n.max.y+t}function kx(n,e,t){if(n.kind==="sector"){let u=e.x-$e.cx,d=e.z-$e.cz,h=Math.max(.001,Math.hypot(u,d)),f=vp(u,d),p=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(f-(n.a0-p)),_=h*(n.a1+p-f),b=n.y1+t-e.y,y=Math.min(x,m,g,_,b);y===x?Wd(e,f,Math.max(0,n.r0-t-1e-4)):y===m?Wd(e,f,n.r1+t+1e-4):y===g?Wd(e,n.a0-(t+1e-4)/h,h):y===_?Wd(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}$n.copy(e).applyMatrix4(n.inv);let s=$n.x-(n.min.x-t),r=n.max.x+t-$n.x,o=$n.z-(n.min.z-t),a=n.max.z+t-$n.z,l=n.max.y+t-$n.y,c=Math.min(s,r,o,a,l);c===s?$n.x=n.min.x-t-1e-4:c===r?$n.x=n.max.x+t+1e-4:c===o?$n.z=n.min.z-t-1e-4:c===a?$n.z=n.max.z+t+1e-4:$n.y=n.max.y+t+1e-4,e.copy($n).applyMatrix4(n.mat)}function W2(n,e,t,i,s){Fx.copy(e).applyMatrix4(n.inv),Ux.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=Fx[a],d=Ux[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,f=(c-u)/d;if(h>f&&([h,f]=[f,h]),r=Math.max(r,h),o=Math.min(o,f),r>o)return 1/0}return r}function Bx(n,e,t,i){let s=n.x-$e.cx,r=n.z-$e.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function zx(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new wt,i=new Si,s=r=>{if(r.userData&&r.userData.solid){let o=new wt().copy(r.matrixWorld).invert(),a=new Si;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(qn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function Hx(n=[]){let e=[...Ox,...n],t=[];function i(u,d,h=null){for(let f of e)if(f!==h&&Mo(f,u,d))return f;return null}function s(u,d=null){If(u,d);for(let h=0;h<4;h++){let f=!1;for(let p of e)Mo(p,u,Xr)&&(kx(p,u,Xr),f=!0);if(!f)return u;If(u,d)}return d&&Ur(d)&&!i(d,Xr-.001)&&u.copy(d),u}function r(u,d=yp){for(let h=0;h<3;h++){let f=!1;for(let p of e)p.block==="ray"&&Mo(p,u,d)&&(kx(p,u,d),f=!0);if(!f)break}return u}function o(u,d){let h=1/0;Bx(u,d,Qn.r,t);for(let f of t)h=Math.min(h,f);return d.y>1e-9?h=Math.min(h,(Qn.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(Qn.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,f=Xr,p=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=Nx;m<x;g+=Nx){let _=Math.min(g,x);if(qn.copy(u).addScaledVector(d,_),l(qn,f,u)){let b=m,y=_;for(let M=0;M<7;M++){let w=(b+y)/2;qn.copy(u).addScaledVector(d,w),l(qn,f,u)?y=w:b=w}x=b;break}m=_}if(!p)return Math.max(0,x);qn.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!Mo(g,qn,f)||Mo(g,u,0))continue;let _=W2(g,u,d,x,f);_<x&&(x=_)}return Math.max(0,x)}function l(u,d,h){for(let f of e)if(f.block==="ray"&&Mo(f,u,d)&&!Mo(f,h,d))return!0;return!1}function c(u,d,h=200){let f=h;if(d.y<-1e-6){let p=-u.y/d.y;p>0&&p<f&&(qn.copy(u).addScaledVector(d,p),ig(qn.x,qn.z)<0&&ng(qn.x,qn.z)>0&&(p=(-Lt.depth-u.y)/d.y),p>0&&p<f&&(f=p))}if(d.y>1e-6){let p=($e.h-u.y)/d.y;p>0&&p<f&&(f=p)}for(let p of[$e.r,nt.screenR,nt.back]){Bx(u,d,p,t);for(let x of t)if(!(x>=f)){if(qn.copy(u).addScaledVector(d,x),p!==$e.r){let m=vp(qn.x-$e.cx,qn.z-$e.cz);if(m<nt.a0||m>nt.a1||qn.y<0||qn.y>nt.top)continue}else if(qn.y<0||qn.y>$e.h)continue;f=x}}return f<h?f:1/0}return{get solids(){return e},setObjects(u){e=[...Ox,...u||[]]},contains:(u,d=Xr)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var X2={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},q2={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},$2=.15;function Y2(n,e){n.updateMatrixWorld(!0);let t=new Ki,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(dn),i+=1))}),i}var K2=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5],Gx={loading:"读取中 · loading","signed-out":"未登录账户 · not signed in",failed:"查询失败 · query failed",unavailable:"余额不可用 · balance unavailable"};function Vx(n,e,{environment:t=!0,demo:i=!1,look:s=zr,brightness:r=mn.initial}={}){let o=!!i,a=new eo;a.background=null;let l=Hf(s),c=at(r,mn.min,mn.max),u=t?n:null,d=q2[e]||null,h=u?d:null,f=h?lg(u,h):null,{M:p,tex:x}=Jm(e),m=Eg(p,x,e,{renderer:u,look:l,reflection:f,beamTarget:new C(yn.x,3,yn.z)});function g(){a.environment=m.envTexture,a.environmentIntensity=l.envIntensity}g();let _=ix(x),b=Og(p),y=Vg(p),M=jg(p),w=Qg(p,_),v=rx(p),S=nx(p,v),A=Tx(p,null,{demo:o}),R=Px(),P=Dx(p),U=new Qt;U.name="wafers",a.add(m.root,R.root,A.root,b.root,y.root,M.root,w.root,S.root,P.root,_.root,U);let H=lx({cell:M,stations:w,stocker:S,engine:y,wafers:v,root:U}),I=d?Y2(a,$2):0,Y={frame:0,matrix:new wt,proj:new wt,ready:!1},ee=zx(a),J=[];for(let K of[...b.hover,...y.hover,...M.hover,...w.list.flatMap(B=>B.hover),...S.hover,...P.hover,...A.hover])K.object.userData.hoverId=K.id,J.push(K.object);let Q=[{id:"tank",anchor:b.anchors.tank},{id:"engine",anchor:y.anchors.engine},{id:"robot",anchor:M.anchors.robot.clone().setY(1.75)},...w.list.map(K=>({id:`station:${K.kind}`,anchor:K.anchor})),{id:"loadport",anchor:S.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:S.anchors.stocker.clone().setY(1.25)},{id:"living",anchor:P.labelAnchor}],z={phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"unavailable"},W={state:null,live:z,tps:0,peak:!1},O={activity:0,tps:0,model:"",phase:"idle"},V=null,oe=0,j=!1,he=0,fe=0,ne=0,xe=1,Le=mr(Date.now());function ct(){Le=mr(Date.now());let K=V?qs(V.provider,V.model):null,B=typeof z.balance=="number"?z.balance:null,q=z.currency==="USD"?"$":"¥",se=[o?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(B==null)se.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),se.push({text:Gx[z.balanceStatus]||Gx.unavailable,size:28,color:"#8c97ad",gap:56});else{se.push({text:`${q} ${B.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let $=z.currency==="USD"?0:Dd(B,K,Le);se.push({text:K&&$?`≈ ${rn($)} tokens · ${K.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}se.push({text:Le?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:Le?"#ffb020":"#34d17a",weight:700,gap:72}),b.setReadout(se)}function We(){let K=typeof z.balance=="number"?z.balance:null;if(K==null)return .5;he=Math.max(he,K);let B=K2.find(q=>q>=he*1.25)||he*1.25;return at(K/B,0,1)}function et(K,B,q){let se=H.activity();R.set("fuel",.1+.9*B,.7+fe/28),R.set("feed",se.inbound>0?1:.1+.55*B,1.5),R.set("lock",se.inbound>0?.9:.08,-1.4);for(let $ of w.list)R.set(`spoke:${$.index}`,$.active?1:.06,1.2);R.set("unload",se.outbound>0?.9:.08,1.4),R.set("out",se.outbound>0||se.stocker?.9:.08,1.4),R.set("ring",se.robot?.75:q!=="idle"?.4:.22,.8),R.update(K)}function He(K){return K==="reasoning"||K==="generating"||K==="thinking"?.35+.65*at(fe/70,0,1):K==="tool"?.2:0}return{scene:a,key:m.key,presets:X2,labelAnchors:Q,solids:ee,mascotAnchors:P.anchors,screenDefs:fp,setScreenDetail:(K,B=2)=>A.setDetail(K,B),get post(){return{...l.post,exposure:l.exposure*c}},getLook:()=>l.id,setLook(K){let B=Hf(K);return B===l?!1:(l=B,m.setLook(l),g(),!0)},getBrightness:()=>c,setBrightness(K){c=at(Number(K)||mn.initial,mn.min,mn.max)},setState(K){K&&(V&&K.tools.errors>oe&&(j=!0),oe=K.tools.errors,V=K,H.sync(K),xe=Math.max(xe,.45))},setLive(K){K&&Object.assign(z,K)},isDemo:()=>o,setDemo(K){o!==!!K&&(o=!!K,A.setDemo(o),xe=1)},resetState(){V=null,oe=0,j=!1,he=0,H.reset(),A.reset(),xe=1},busy(){return H.busy()||z.phase&&z.phase!=="idle"||fe>1},update(K,B){fe=en(fe,z.tps||0,6,K),xe+=K,xe>=.5&&(xe=0,ct());let q=V?V.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},se=z.phase&&z.phase!=="idle"?z.phase:z.running===!1?"idle":V?V.phase:"idle",$=fe>.5?at(.2+fe/90,0,1):0;ne=en(ne,He(se),1.6,K),O.activity=ne,O.tps=fe,O.model=V?V.model:"",O.phase=se,m.update(K,B,O),b.update(K,B,{level:We(),flow:$,peak:Le}),y.update(K,B,{phase:se,tps:fe,ctx:V&&V.contextWindow>0?V.contextTokens/V.contextWindow:0,counters:{miss:q.miss,hit:q.hit,output:q.output,reasoning:q.reasoning,cost:q.cost},errorPulse:j}),j=!1,H.update(K,B),_.update(K),P.update(K,B),et(K,$,se),W.state=V,W.phase=se,W.tps=fe,W.peak=Le,A.update(K,B,W)},prerender(K){!f||(Y.frame+=1,(Y.ready&&Y.matrix.equals(K.matrixWorld)&&Y.proj.equals(K.projectionMatrix)||h.every>1)&&Y.ready&&Y.frame%2===1)||(f.update(a,K),Y.matrix.copy(K.matrixWorld),Y.proj.copy(K.projectionMatrix),Y.ready=!0)},reflectionInfo:()=>d?{...d,trimmed:I,active:!!f}:null,hoverTargets(){return S.hoverObjects(J.slice())},focus:K=>H.focus(K),stats:()=>H.stats(),dispose(){H.dispose(),S.dispose(),P.dispose(),m.dispose(),Km(a),v.dispose(),f&&f.dispose();for(let K of Object.values(p))K&&K.dispose&&K.dispose();for(let K of Object.values(x))K&&K.dispose&&K.dispose()}}}var Z2=new lr(-1,1,1,-1,0,1),_p=class extends qt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},J2=new _p,Xd=class{constructor(e){this._mesh=new rt(J2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var j2=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Q2=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uKnee;
varying vec2 vUv;
vec3 tap(vec2 o) { return texture2D(tSrc, vUv + o * uTexel).rgb; }
void main() {
  // Four bilinear taps cover a 4×4 block of the full-resolution image.
  vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
  c = min(c, vec3(24.0));
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-4);
  float w = max(soft, br - uThreshold) / max(br, 1e-4);
  gl_FragColor = vec4(c * w, 1.0);
}`,eT=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
  s += texture2D(tSrc, vUv + vec2(-1.0, -1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, -1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, 1.0) * uTexel).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, 1.0) * uTexel).rgb;
  gl_FragColor = vec4(s * 0.125, 1.0);
}`,tT=`
precision highp float;
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uWeight;
varying vec2 vUv;
void main() {
  vec2 h = uTexel * 0.5;
  vec3 s = texture2D(tSrc, vUv + vec2(-2.0, 0.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, 1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, 2.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, 1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(2.0, 0.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(1.0, -1.0) * h).rgb * 2.0;
  s += texture2D(tSrc, vUv + vec2(0.0, -2.0) * h).rgb;
  s += texture2D(tSrc, vUv + vec2(-1.0, -1.0) * h).rgb * 2.0;
  gl_FragColor = vec4(s * (uWeight / 12.0), 1.0);
}`,nT=`
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform float uBloom;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;
varying vec2 vUv;
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 c = texture2D(tScene, vUv).rgb;
  #ifdef USE_BLOOM
    c += texture2D(tBloom, vUv).rgb * uBloom;
  #endif
  c = NeutralToneMapping(c);
  vec2 d = (vUv - 0.5) * vec2(1.12, 1.0);
  c *= 1.0 - uVignette * smoothstep(0.32, 0.98, length(d) * 1.3);
  vec4 o = sRGBTransferOETF(vec4(c, 1.0));
  // Grain in display space also hides banding in the dark gradients.
  float n = hash(floor(gl_FragCoord.xy) + fract(uTime * 7.31) * 113.0) - 0.5;
  o.rgb += n * uGrain;
  gl_FragColor = vec4(o.rgb, 1.0);
}`;function Wx(n,e,t={}){let i=new ii(Math.max(1,n),Math.max(1,e),{type:Ei,minFilter:Rn,magFilter:Rn,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function qd(n,e,t={}){return new aa({vertexShader:j2,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function Xx(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new Xd(null),r=Wx(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(Wx(2,2));let a=qd(Q2,{tSrc:{value:null},uTexel:{value:new Se},uThreshold:{value:1},uKnee:{value:.45}}),l=qd(eT,{tSrc:{value:null},uTexel:{value:new Se}}),c=qd(tT,{tSrc:{value:null},uTexel:{value:new Se},uWeight:{value:1}},{blending:jn,transparent:!0}),u=qd(nT,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,f){n.setRenderTarget(f),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,f){r.setSize(Math.max(1,h),Math.max(1,f));let p=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(f/2));for(let m of o)m.setSize(p,x),p=Math.max(1,Math.floor(p/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:f,knee:p,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),f!=null&&(a.uniforms.uThreshold.value=f),p!=null&&(a.uniforms.uKnee.value=p),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,f,p=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,f),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=p,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var $d=1.6;function qx(n,e){let t=Math.tan(Or.degToRad(n/2));return{tv:t,th:t*Math.max(.2,e)}}var bp=n=>Math.atan2(-Math.cos(n),Math.sin(n)),Mp=(n,e)=>n.a-e/nt.screenR;function $x(n,e,t){let{tv:i,th:s}=qx(e,t),r=n.a1-n.a0,o=nt.screenR,a=2*o*Math.sin(r/2),l=o*(1-Math.cos(r/2)),c=n.y1-n.y0;return at(Math.max(l+a/2*1.08/s,l+c/2*1.22/i),$d+.4,16)}function Yx(n,e,t,i){let{tv:s,th:r}=qx(t,i);return{u:Math.max(0,(n.a1-n.a0)*nt.screenR/2-e*r*.9),v:Math.max(0,(n.y1-n.y0)/2-e*s*.9)}}function Kx(n,e,t,i,s=new C){return kr(Mp(n,e),nt.screenR-i,(n.y0+n.y1)/2+t,s)}var Yd=85*Math.PI/180,iT=1.65,sT=3.2,rT=2.6,oT={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Zx(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ne=>ne,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new si(0,0,0,"YXZ"),h=new Set,f=!1,p=new C,x=new C,m=0,g=null,_=null,b=0,y=new C,M=new C,w=new C,v=new C,S=new C,A=new so,R=new Se;function P(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function U(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=at(d.x,-Yd,Yd),P()}function H(ne){return y.copy(n.position),S.copy(y).add(ne),n.position.copy(S),s(n.position,y),n.position.distanceTo(S)}let I=()=>{b=performance.now(),a&&a()},Y=()=>{o&&o(),I()};function ee(ne){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let xe=ne.button===2||ne.button===0&&ne.shiftKey?"pan":ne.button===0?"look":null;if(xe){g={id:ne.pointerId,x:ne.clientX,y:ne.clientY,mode:xe},_=null;try{e.setPointerCapture(ne.pointerId)}catch{}Y()}}function J(ne){if(!l||!g||ne.pointerId!==g.id)return;let xe=ne.clientX-g.x,Le=ne.clientY-g.y;g.x=ne.clientX,g.y=ne.clientY;let ct=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let We=2.4/ct;c+=xe*We,u=at(u+Le*We,-Yd,Yd),P()}else{let We=6/ct;w.set(1,0,0).applyQuaternion(n.quaternion),v.copy(w).multiplyScalar(-xe*We),v.y+=Le*We,H(v)}I()}function Q(ne){if(!(!g||ne.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ne.pointerId)}catch{}I()}}function z(ne){if(!l)return;ne.preventDefault();let xe=ne.deltaMode===1?16:ne.deltaMode===2?400:1;m=at(m+at(-ne.deltaY*xe*.006,-4,4),-8,8),_=null,Y()}function W(ne){if(!l)return;let xe=e.getBoundingClientRect();R.set((ne.clientX-xe.left)/Math.max(1,xe.width)*2-1,-((ne.clientY-xe.top)/Math.max(1,xe.height))*2+1),n.updateMatrixWorld(),A.setFromCamera(R,n);let{origin:Le,direction:ct}=A.ray;if(ct.y>-.02)return;let We=(r-Le.y)/ct.y;if(We<=0||We>60)return;let et=new C().copy(ct).multiplyScalar(We).add(Le),He=et.x-n.position.x,K=et.z-n.position.z,B=Math.hypot(He,K);B>1.5&&(et.x-=He/B*1.2,et.z-=K/B*1.2),et.y=r+iT;let q=et.distanceTo(n.position);_={t:0,d:at(q/6,.45,1.6),p0:n.position.clone(),p1:et},Y()}function O(ne,xe){if(!l||ne.ctrlKey||ne.metaKey||ne.altKey)return;let Le=ne.target;if(Le&&(Le.tagName==="INPUT"||Le.tagName==="TEXTAREA"||Le.tagName==="SELECT"||Le.isContentEditable))return;f=!!ne.shiftKey;let ct=oT[ne.code];ct&&(ne.preventDefault(),ne.stopPropagation(),xe?h.add(ct):h.delete(ct),xe?(_=null,Y()):I())}let V=ne=>O(ne,!0),oe=ne=>O(ne,!1),j=()=>{h.clear(),f=!1},he=ne=>{l&&ne.preventDefault()};e.addEventListener("pointerdown",ee),e.addEventListener("pointermove",J),e.addEventListener("pointerup",Q),e.addEventListener("pointercancel",Q),e.addEventListener("wheel",z,{passive:!1}),e.addEventListener("dblclick",W),e.addEventListener("contextmenu",he),i&&(i.addEventListener("keydown",V),i.addEventListener("keyup",oe),i.addEventListener("blur",j));function fe(ne){if(!l)return!1;let xe=!1;if(_){_.t+=ne;let Le=Qi(Math.min(1,_.t/_.d));v.lerpVectors(_.p0,_.p1,Le).sub(n.position),(H(v)>.02||_.t>=_.d)&&(_=null),xe=!0}if(x.set(0,0,0),h.size&&(M.set(-Math.sin(c),0,-Math.cos(c)),w.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(M),h.has("b")&&x.sub(M),h.has("r")&&x.add(w),h.has("l")&&x.sub(w),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(sT*(f?rT:1))),p.set(en(p.x,x.x,9,ne),en(p.y,x.y,9,ne),en(p.z,x.z,9,ne)),p.lengthSq()>1e-6?(H(v.copy(p).multiplyScalar(ne)),xe=!0):p.set(0,0,0),Math.abs(m)>.001){let Le=m*(1-Math.exp(-9*ne));m-=Le,n.getWorldDirection(M),H(v.copy(M).multiplyScalar(Le))>.02&&(m=0),xe=!0}else m=0;return xe&&I(),xe}return{get enabled(){return l},enable(){l=!0,U()},disable(){l=!1,g=null,_=null,h.clear(),p.set(0,0,0),m=0},sync:U,active(){return l&&(!!g||!!_||h.size>0||Math.abs(m)>.001||p.lengthSq()>1e-4||performance.now()-b<300)},update:fe,dispose(){e.removeEventListener("pointerdown",ee),e.removeEventListener("pointermove",J),e.removeEventListener("pointerup",Q),e.removeEventListener("pointercancel",Q),e.removeEventListener("wheel",z),e.removeEventListener("dblclick",W),e.removeEventListener("contextmenu",he),i&&(i.removeEventListener("keydown",V),i.removeEventListener("keyup",oe),i.removeEventListener("blur",j))}}}var Sp=["orbit","look"],aT=12,lT=2,So=["low","medium","high","ultra"],Ta=["auto",30,60,120,0],Zl={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},cT=60,uT=30,Jx=150*(Math.PI/180),dT=.8,jx=30,hT=.45,Qx=.0013,fT=14,pT=7,mT=.25,gT=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,xT=/swiftshader|llvmpipe|softpipe|software|basic render/i;function yT(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(xT.test(t))return"low";if(gT.test(t))return"high"}catch{}return"medium"}function vT(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new qt;return t.setAttribute("position",new pt(e,3)),t}function _T(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function ey(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c,onScreen:u}=e,d=!!e.demo,h=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=new ad({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=yT(f.getContext()),x=Zl[e.quality]?e.quality:p,m=Ta.includes(e.fps)?e.fps:"auto";f.setClearColor(wg,1),f.toneMapping=bl,f.toneMappingExposure=1,f.outputColorSpace=ni,f.shadowMap.type=ro,f.shadowMap.autoUpdate=!1,f.info.autoReset=!1,f.debug.onShaderError=(k,Me,ke,Ce)=>{let Xe=k.getShaderSource(Ce)||"",bt=/#define SHADER_NAME (.*)/.exec(Xe),jt=bt&&bt[1].trim()||"shader",ls=[k.getShaderInfoLog(ke),k.getShaderInfoLog(Ce),k.getProgramInfoLog(Me)].map(Co=>(Co||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${jt}" failed to compile
${ls}`);let _r=ls.split(`
`).find(Co=>/error/i.test(Co))||ls.split(`
`)[0]||"";r&&r("shader",`${jt}: ${_r}`.slice(0,220))};let g=_T(f.getContext()),_=!1,b=f.domElement;b.className="dwp3d-gl",b.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",b.setAttribute("aria-hidden","true"),n.appendChild(b);let y=document.createElement("div");y.className="dwp3d-labels",n.appendChild(y);let M=new Zn(40,1,.2,9e3),w=new Zn(40,1,.2,9e3);M.layers.enable(dn),w.layers.enable(dn);let v=Hx(),S=new dd(M,b);S.enableDamping=!0,S.dampingFactor=.08,S.minDistance=.5,S.maxDistance=40,S.zoomToCursor=!1,S.maxPolarAngle=Jx,S.screenSpacePanning=!0,S.rotateSpeed=.7,S.zoomSpeed=.9,S.panSpeed=.8;let A=null,R=null,P=null,U=vT(),H=null,I=null,Y=0,ee=0,J=1,Q=1,z=null,W="orbit",O=!1,V,oe=0,j=0,he=0,fe=new C,ne=new C,xe=[],Le=[],ct=!0,We=!1,et=!1,He=!1,K=0,B=0,q=mo.includes(e.look)?e.look:zr,se=at(Number(e.brightness)||mn.initial,mn.min,mn.max),$={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function ue(){$.casters.clear(),$.pending=!1,!(!A||!f.shadowMap.enabled)&&(A.scene.updateMatrixWorld(!0),A.scene.traverse(k=>{k.castShadow&&(k.isMesh||k.isPoints||k.isLine)&&$.casters.set(k,{m:k.matrixWorld.clone(),v:k.isInstancedMesh?k.instanceMatrix.version:0})}),f.shadowMap.needsUpdate=!0,$.lastBake=B,$.bakes+=1)}function Pe(){if(!A||!f.shadowMap.enabled||B<$.next)return;$.next=B+.5;let k=!1;for(let[ke,Ce]of $.casters){if(!ke.castShadow||!It(ke)){$.casters.delete(ke),k=!0;continue}(!ke.matrixWorld.equals(Ce.m)||ke.isInstancedMesh&&ke.instanceMatrix.version!==Ce.v)&&(ke.castShadow=!1,$.casters.delete(ke),k=!0)}A.scene.traverse(ke=>{ke.castShadow&&!$.casters.has(ke)&&(ke.castShadow=!1)}),k&&($.pending=!0);let Me=$.bakes<4?.5:2;$.pending&&B-$.lastBake>=Me&&ue()}function F(){R&&(R.dispose(),R=null),P&&(P.removeFromParent(),P.material.dispose(),P=null),A&&(A.dispose(),A=null),$.casters.clear(),f.renderLists.dispose()}function re(){let k=Zl[x];f.shadowMap.enabled=x!=="low",A=Vx(f,x,{demo:d,look:q,brightness:se}),P=new el(U,new ia({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),P.name="hover-highlight",P.matrixAutoUpdate=!1,P.frustumCulled=!1,P.renderOrder=20,P.visible=!1,P.layers.set(dn),A.scene.add(P),R=Xx(f,{msaa:k.msaa,bloom:k.bloom}),N(),Q=1,Be(!0),H&&A.setState(H),I&&A.setLive(I),Ps(),v.setObjects(A.solids||[]),he=0,$.bakes=0,$.next=B+.5,ue(),de()}function de(){if(!(!A||typeof f.compileAsync!="function"))try{A.scene.updateMatrixWorld(!0);let k=f.compileAsync(A.scene,w);k&&typeof k.catch=="function"&&k.catch(()=>{})}catch{}}function N(){!R||!A||(A.post&&R.set(A.post),h&&R.set({grain:.006}))}let Je=new Se;function dt(k,Me,ke,Ce){Je.set(k.x-$e.cx,k.z-$e.cz),Je.length()>Me&&(Je.setLength(Me),k.x=$e.cx+Je.x,k.z=$e.cz+Je.y),k.y=at(k.y,ke,Ce)}function _t(k){return dt(k,Qn.targetR,Qn.targetYMin,Qn.targetYMax),v.keepClear(k,yp),dt(k,Qn.targetR,Qn.targetYMin,Qn.targetYMax),k}let Re=new C;function Ee(){let k=S.target;Re.copy(k),_t(k),(k.x!==Re.x||k.y!==Re.y||k.z!==Re.z)&&M.position.add(Re.subVectors(k,Re))}function Ae(){let k=S.target,Me=Math.max(.001,M.position.distanceTo(k)),ke=at((Qn.yMin+.02-k.y)/Me,-1,1),Ce=at((Qn.yMax-.02-k.y)/Me,-1,1);S.maxPolarAngle=Math.min(Jx,Math.acos(ke)),S.minPolarAngle=Math.min(Math.acos(Ce),S.maxPolarAngle)}let De={len:0,pulled:!1,easing:!1},L=new C;function E(){De.len=0,De.pulled=!1,De.easing=!1}function Z(k){let Me=!1;if(W==="orbit"&&!z){let ke=S.target;L.subVectors(M.position,ke);let Ce=L.length();if(Ce>1e-4){L.divideScalar(Ce);let Xe=Math.min(Ce,v.containerExit(ke,L)-.02);Xe=Math.min(Xe,v.armLength(ke,L,Xe,Xr)),Xe=Math.max(Xe,Math.min(Ce,mT)),!De.pulled||Xe<De.len?De.len=Xe:De.len=Math.min(Xe,en(De.len,Xe,pT,k)),De.len>Ce-.001&&Xe>=Ce-1e-4&&(De.len=Ce),De.pulled=De.len<Ce-1e-4,De.easing=De.pulled&&Xe>De.len+.001,w.position.copy(ke).addScaledVector(L,De.len),Me=!0}}Me||(w.position.copy(M.position),E()),w.quaternion.copy(M.quaternion),w.updateMatrixWorld()}function we(){W==="orbit"&&!z&&De.pulled&&(M.position.copy(w.position),E())}function ve(){R&&R.setSize(Math.round(Y*J*Q),Math.round(ee*J*Q))}function Be(k=!1){let Me=Math.max(1,Math.floor(n.clientWidth)),ke=Math.max(1,Math.floor(n.clientHeight)),Ce=Math.min(typeof window<"u"&&window.devicePixelRatio||1,Zl[x].dpr);if(!(!k&&Me===Y&&ke===ee&&Ce===J)&&(Y=Me,ee=ke,J=Ce,f.setPixelRatio(Ce),f.setSize(Me,ke,!1),ve(),M.aspect=w.aspect=Me/ke,M.updateProjectionMatrix(),w.updateProjectionMatrix(),he=0,pe.def)){let Xe=Math.abs(pe.td-pe.fit)<.001;pe.fit=Ke(pe.def),Xe&&(pe.td=pe.fit),Wt()}}function qe(k){let Me=A?A.presets:null,ke=Me&&(Me[k]||Me.overview)||{pos:[0,7,16],target:[0,2,-1]},Ce=new C().fromArray(ke.target),Xe=new C().fromArray(ke.pos),bt=ke.mode==="look"?"look":"orbit";if(bt==="orbit"){let jt=at(1.7/Math.max(.3,M.aspect),1,2.3);Xe.sub(Ce).multiplyScalar(jt).add(Ce),dt(Xe,Qn.r,Qn.yMin,Qn.yMax)}return{pos:Xe,target:Ce,mode:bt}}function _e(k,Me){let ke=Me.x-k.x,Ce=Me.y-k.y,Xe=Me.z-k.z;return{yaw:Math.atan2(-ke,-Xe),pitch:Math.atan2(Ce,Math.hypot(ke,Xe))}}let ye=new si(0,0,0,"YXZ"),Ge=new C;function G(k,Me){ye.set(Me,k,0,"YXZ"),M.quaternion.setFromEuler(ye)}function be(k){if(k===W)return;we(),Oe.log=0;let Me=W==="screen";W=k,k==="look"?(O=!1,S.enabled=!1,kn.enable()):k==="screen"?(O=!1,S.enabled=!1,kn.disable()):(kn.disable(),S.enabled=!0),y.style.visibility=k==="screen"?"hidden":"",Me&&Rs(),c&&c(k)}function ge(){let k=Ur(M.position)==="hall";if(be("orbit"),!k){Ue("overview");return}M.getWorldDirection(Ge),_t(S.target.copy(M.position).addScaledVector(Ge,6)),Ae(),S.update(),E()}function Ie(k){let{pos:Me,target:ke,mode:Ce}=qe(k);if(z=null,be(Ce),M.position.copy(Me),Ce==="look"){let Xe=_e(Me,ke);G(Xe.yaw,Xe.pitch),kn.sync()}else _t(S.target.copy(ke)),Ae(),S.update();E()}function Ue(k,Me=1.2){if(h){Ie(k);return}we(),Oe.log=0;let{pos:ke,target:Ce,mode:Xe}=qe(k);be(Xe);let bt=_e(ke,Ce);Ve(ke,bt.yaw,bt.pitch,Ce,Xe,Me)}function Ve(k,Me,ke,Ce,Xe,bt=1.2){ye.setFromQuaternion(M.quaternion,"YXZ"),z={t:0,d:h?.001:bt,p0:M.position.clone(),p1:k.clone(),yaw0:ye.y,pitch0:ye.x,yaw1:Me,pitch1:ke,target:Ce,mode:Xe}}let pe={id:null,def:null,u:0,v:0,d:0,tu:0,tv:0,td:0,fit:0,back:null,moving:!1},Ct=new C,Fe=()=>A&&A.screenDefs||[],mt=k=>Fe().find(Me=>Me.id===k)||null,Tt=()=>Math.tan(Or.degToRad(M.fov/2)),Ke=k=>$x(k,M.fov,M.aspect);function Wt(){let k=pe.def;if(!k)return;pe.td=at(pe.td,$d,pe.fit*1.05);let Me=Yx(k,pe.td,M.fov,M.aspect);pe.tu=at(pe.tu,-Me.u,Me.u),pe.tv=at(pe.tv,-Me.v,Me.v)}let Sn=(k,Me,ke,Ce)=>Kx(pe.def,Me,ke,Ce,k);function Yn(k){let Me=mt(k);return!Me||!A?!1:(W!=="screen"&&(we(),pe.back={mode:W,pos:M.position.clone(),quat:M.quaternion.clone(),target:S.target.clone()}),O=!1,be("screen"),pe.id=k,pe.def=Me,pe.fit=Ke(Me),pe.u=pe.tu=0,pe.v=pe.tv=0,pe.d=pe.td=pe.fit,pe.moving=!1,A.setScreenDetail(k,lT),Ve(Sn(Ct,0,0,pe.fit),bp(Me.a),0,null,"screen",1),u&&u(k),vn(),!0)}function Rs(){pe.id=null,pe.def=null,pe.back=null,pe.moving=!1,A&&A.setScreenDetail&&A.setScreenDetail(null,1),u&&u(null)}function Cs(){if(W!=="screen")return;let k=pe.back;if(be(k?k.mode:"orbit"),!k){Ue("overview");return}ye.setFromQuaternion(k.quat,"YXZ"),Ve(k.pos,ye.y,ye.x,k.target,k.mode,1),vn()}function vr(k){let Me=Fe();if(!Me.length)return;let ke=Math.max(0,Me.findIndex(Xe=>Xe.id===pe.id)),Ce=Me[(ke+k+Me.length)%Me.length];Yn(Ce.id)}function Xi(k){let Me=1-Math.exp(-aT*k);pe.u+=(pe.tu-pe.u)*Me,pe.v+=(pe.tv-pe.v)*Me,pe.d+=(pe.td-pe.d)*Me,pe.moving=Math.abs(pe.tu-pe.u)+Math.abs(pe.tv-pe.v)+Math.abs(pe.td-pe.d)>.001,Sn(M.position,pe.u,pe.v,pe.d),G(bp(Mp(pe.def,pe.u)),0)}function ei(k,Me){let ke=Tt(),Ce=ke*Math.max(.2,M.aspect),Xe=Me.x/Y*2-1,bt=-(Me.y/ee)*2+1,jt=pe.tu+Xe*Ce*pe.td,ls=pe.tv+bt*ke*pe.td,_r=at(pe.td*Math.exp(k),$d,pe.fit*1.05),Co=_r/pe.td;pe.tu=jt-(jt-pe.tu)*Co,pe.tv=ls-(ls-pe.tv)*Co,pe.td=_r,Wt()}function Ni(k,Me){let ke=2*pe.td*Tt()/Math.max(1,ee);pe.tu-=k*ke,pe.tv+=Me*ke,Wt()}let vn=()=>{K=performance.now()};function $s(){let k=z;if(!k)return;if(z=null,W==="look"){kn.sync();return}M.getWorldDirection(Ge);let Me=Math.max(1,M.position.distanceTo(k.target));_t(S.target.copy(M.position).addScaledVector(Ge,Me)),E()}S.addEventListener("start",()=>{$s(),vn()}),S.addEventListener("change",vn),S.addEventListener("end",vn);let kn=Zx(M,b,{keyTarget:n,clampPosition:(k,Me)=>v.resolve(k,Me),floorY:0,onStart:()=>{$s(),vn()},onChange:vn});function Ps(){for(let k of xe)k.el.remove();if(xe=[],!!A)for(let k of Le){let Me=A.labelAnchors.find(Xe=>Xe.id===k.id);if(!Me)continue;let ke=document.createElement("div");ke.className="dwp3d-label";let Ce=document.createElement("span");if(Ce.className="dwp3d-label-title",Ce.textContent=k.text,ke.appendChild(Ce),k.sub){let Xe=document.createElement("span");Xe.className="dwp3d-label-sub",Xe.textContent=k.sub,ke.appendChild(Xe)}y.appendChild(ke),xe.push({id:k.id,el:ke,anchor:Me.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let vi=new C,Is=[],os=[];function wo(k){k.shown!==!1&&(k.el.style.opacity="0",k.shown=!1)}function Eo(){if(ct){Is.length=0;for(let k of xe){if(vi.copy(k.anchor).project(w),!(vi.z<1&&Math.abs(vi.x)<1.05&&Math.abs(vi.y)<1.05)){wo(k);continue}k.sx=(vi.x*.5+.5)*Y,k.sy=(-vi.y*.5+.5)*ee,k.dist=w.position.distanceTo(k.anchor),Is.push(k)}Is.sort((k,Me)=>k.dist-Me.dist),os.length=0;for(let k of Is){k.w||(k.w=k.el.offsetWidth,k.h=k.el.offsetHeight);let Me={x0:k.sx-k.w/2-3,x1:k.sx+k.w/2+3,y0:k.sy-k.h-3,y1:k.sy+7};if(os.some(Xe=>Me.x0<Xe.x1&&Me.x1>Xe.x0&&Me.y0<Xe.y1&&Me.y1>Xe.y0)){wo(k);continue}os.push(Me);let ke=at(1.45-k.dist/24,.3,1).toFixed(2),Ce=`translate(${k.sx.toFixed(1)}px, ${k.sy.toFixed(1)}px) translate(-50%, -100%)`;Ce!==k.tf&&(k.el.style.transform=Ce,k.tf=Ce),k.shown!==ke&&(k.el.style.opacity=ke,k.shown=ke)}}}let qi=new so;qi.layers.enable(dn);let To=new Se,li=null,Ls=!1,Ds=0,T=null,X=null,le=null,ie=!1;function ae(k){if(!A)return null;To.set(k.x/Y*2-1,-(k.y/ee)*2+1),w.updateMatrixWorld(),qi.setFromCamera(To,w);let Me=qi.intersectObjects(A.hoverTargets(),!0);for(let ke of Me)for(let Ce=ke.object;Ce;Ce=Ce.parent)if(Ce.userData&&Ce.userData.hoverId)return{id:Ce.userData.hoverId,obj:Ce,distance:ke.distance};return null}let Oe={log:0,anchor:new C,anchored:!1},st=new C;function Ye(k){let Me=ae(k),ke=qi.ray,Ce=v.surfaceHit(ke.origin,ke.direction);return Me&&Me.distance<Ce&&(Ce=Me.distance),Number.isFinite(Ce)?(Oe.anchor.copy(ke.origin).addScaledVector(ke.direction,Ce),!0):!1}function je(k){if(!Oe.log)return;let Me=Oe.log*(1-Math.exp(-fT*k));Math.abs(Oe.log-Me)<.001&&(Me=Oe.log),Oe.log-=Me;let ke=S.target,Ce=M.position,Xe=Math.max(.001,Ce.distanceTo(ke)),bt=Math.exp(Me);if(Me<0){let jt=Oe.anchored?Oe.anchor:ke;if(bt=Math.max(bt,dT/Xe,hT/Math.max(.001,Ce.distanceTo(jt))),bt>=1){Oe.log=0;return}Ce.sub(jt).multiplyScalar(bt).add(jt),jt!==ke&&ke.sub(jt).multiplyScalar(bt).add(jt)}else{st.subVectors(Ce,ke).divideScalar(Xe);let jt=v.containerExit(ke,st)-.02,ls=v.armLength(ke,st,Math.min(jx,jt),Xr,!1);if(bt=Math.min(bt,jx/Xe,Math.max(1,(ls+.5)/Xe)),bt<=1){Oe.log=0;return}Ce.sub(ke).multiplyScalar(bt).add(ke)}}let lt=k=>{if(W==="screen"&&A){k.preventDefault(),k.stopPropagation();let Ce=k.deltaMode===1?16:k.deltaMode===2?400:1,Xe=at(k.deltaY*Ce*Qx,-.6,.6);Xe&&!z&&pe.def&&ei(Xe,Mt(k)),vn();return}if(W!=="orbit"||!A||!S.enabled)return;k.preventDefault(),k.stopPropagation();let Me=k.deltaMode===1?16:k.deltaMode===2?400:1,ke=at(k.deltaY*Me*Qx,-.6,.6);ke&&($s(),vn(),Oe.log&&Math.sign(ke)!==Math.sign(Oe.log)&&(Oe.log=0),ke<0&&(we(),Oe.anchored=!O&&Ye(Mt(k))),Oe.log=at(Oe.log+ke,-1.2,1.2))};n.addEventListener("wheel",lt,{passive:!1,capture:!0});let Mt=k=>{let Me=b.getBoundingClientRect();return{x:k.clientX-Me.left,y:k.clientY-Me.top}},Ot=k=>{li=Mt(k),Ls=!0,le&&Math.hypot(li.x-le.x,li.y-le.y)>5&&(ie=!0),le&&W==="screen"&&!z&&pe.def&&(Ni(li.x-le.lx,li.y-le.ly),vn()),le&&(le.lx=li.x,le.ly=li.y)},ot=()=>{li=null,Ls=!0},Ft=k=>{let Me=Mt(k);le={...Me,lx:Me.x,ly:Me.y,t:performance.now()},ie=!1,vn(),b.style.cursor="grabbing"},ht=k=>{let Me=Mt(k);if(le&&!ie&&performance.now()-le.t<450&&!z){let Ce=ae(Me),Xe=Ce&&String(Ce.id).startsWith("screen:")?String(Ce.id).slice(7):null;W==="screen"?Xe?Xe!==pe.id&&Yn(Xe):Cs():Xe?Yn(Xe):W==="orbit"&&i&&i(Ce?Ce.id:null)}le=null,ie=!1,Ls=!0,vn(),b.style.cursor=T?"pointer":"grab"};b.addEventListener("pointermove",Ot),b.addEventListener("pointerleave",ot),b.addEventListener("pointerdown",Ft),b.addEventListener("pointerup",ht);let Pt=k=>{W!=="screen"||k.ctrlKey||k.metaKey||k.altKey||k.key!=="ArrowLeft"&&k.key!=="ArrowRight"||(k.preventDefault(),k.stopPropagation(),z||vr(k.key==="ArrowLeft"?-1:1))};n.addEventListener("keydown",Pt);function It(k){let Me=k;for(;Me.parent;)Me=Me.parent;return!!A&&Me===A.scene}let gn=new C,it=new C,wn=new Mn,kt=new wt,ti=new Si;function On(k){if(!P)return;let Me=X;if(!Me||Me.userData.noHighlight||!It(Me)){P.visible=!1;return}Me.updateWorldMatrix(!0,!1),Me.geometry?(Me.geometry.boundingBox||Me.geometry.computeBoundingBox(),Me.geometry.boundingBox.getSize(gn),Me.geometry.boundingBox.getCenter(it),gn.multiplyScalar(1.06).addScalar(.03),kt.compose(it,wn.identity(),gn),P.matrix.multiplyMatrices(Me.matrixWorld,kt)):(ti.setFromObject(Me),ti.getSize(gn).multiplyScalar(1.06).addScalar(.03),ti.getCenter(it),P.matrix.compose(it,wn.identity(),gn)),P.matrixWorldNeedsUpdate=!0,P.material.opacity=h?.85:.62+.28*(.5+.5*Math.sin(k*5)),P.visible=!0}function Ns(){return m!=="auto"?m:!!z||O||!!le||!!Oe.log||De.easing||kn.active()||pe.moving||performance.now()-K<900||A&&A.busy()?cT:uT}let ci=0,ui=!1,Vt=0,xn=0,Ln=0,gt={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Tn=!0,Ri=typeof document>"u"||!document.hidden;function $r(){gt.frames=0,gt.ticks=0,gt.t=0,gt.capTime=0,gt.cpu=0}function Zd(){let k=gt.frames/gt.t,Me=gt.ticks/gt.t,ke=gt.capTime/gt.t,Ce=Math.max(1,Math.min(ke>0?ke:Me,Me)),Xe=k<Ce*.85,bt=Zl[x];Xe?(gt.good=0,gt.slow+=1,gt.slow>=2&&Q>bt.minScale&&(Q=Math.max(bt.minScale,Math.round((Q-.1)*100)/100),gt.slow=0,ve())):(gt.slow=0,k>=Ce*.95&&(gt.good+=1),gt.good>=5&&Q<1&&(Q=Math.min(1,Math.round((Q+.05)*100)/100),gt.good=0,ve())),g.poll(),s&&s({fps:k,target:Ce,slow:Xe,scale:Q,minScale:bt.minScale,cpuMs:gt.frames?gt.cpu/gt.frames:0,gpuMs:_?g.take():null,gpuTimer:g.supported,calls:gt.calls,triangles:gt.tris,width:Math.round(Y*J*Q),height:Math.round(ee*J*Q),cap:m}),$r()}function Ao(k){if(!ui)return;ci=requestAnimationFrame(Ao);let Me=Math.max(0,(k-Vt)/1e3);Vt=k,gt.ticks+=1,gt.t+=Me;let ke=Ns();if(gt.capTime+=ke*Me,gt.t>=1&&Zd(),ke>0){let bt=1e3/ke,jt=k-xn;if(jt<bt-1.5)return;xn=jt<bt*2?xn+bt:k}else xn=k;let Ce=performance.now(),Xe=Math.min(.1,Math.max(0,(k-Ln)/1e3));if(Ln=k,B+=Xe,z){z.t+=Xe;let bt=Qi(Math.min(1,z.t/z.d));if(M.position.lerpVectors(z.p0,z.p1,bt),G(Ym(z.yaw0,z.yaw1,bt),Bi(z.pitch0,z.pitch1,bt)),z.t>=z.d){let jt=z;z=null,jt.mode==="look"?kn.sync():jt.mode==="orbit"&&S.target.copy(jt.target)}}else if(O&&A){if(oe-=Xe,oe<=0){oe=.4;let bt=A.focus(fe);bt||fe.fromArray(A.presets.overview.target),bt!==V&&(V=bt,j=1.6,o&&o(bt))}if(ne.subVectors(M.position,S.target),S.target.lerp(fe,1-Math.exp(-2.4*Xe)),j>0){if(j-=Xe,!he){let bt=qe("overview");he=bt.pos.distanceTo(bt.target)}ne.setLength(en(ne.length(),V?6.8:he,2,Xe))}M.position.copy(S.target).add(ne)}if(z||(W==="orbit"?(je(Xe),Ae(),S.update(),Ee()):W==="screen"?pe.def&&Xi(Xe):kn.update(Xe)),Z(Xe),A&&A.update(Xe,B,w),Ds-=Xe,Ls&&Ds<=0){Ds=.08,Ls=!1;let bt=li&&!le?ae(li):null;bt&&W==="screen"&&bt.id===`screen:${pe.id}`&&(bt=null);let jt=bt?bt.id:null;X=bt?bt.obj:null,le||(b.style.cursor=jt?"pointer":"grab"),(jt||T)&&(T=jt,t&&t(jt?{id:jt,x:li.x,y:li.y}:null))}On(B),Pe(),f.info.reset(),_&&g.begin(),R&&A&&(w.updateMatrixWorld(),A.prerender(w),R.render(A.scene,w,h?0:B)),_&&g.end(),gt.calls=f.info.render.calls,gt.tris=f.info.render.triangles,Eo(),gt.frames+=1,gt.cpu+=performance.now()-Ce,He||(He=!0,l&&l())}function as(){let k=!We&&!et&&Tn&&Ri&&Y>1&&ee>1;k&&!ui?(ui=!0,Vt=xn=Ln=performance.now(),$r(),ci=requestAnimationFrame(Ao),a&&a(!0)):!k&&ui&&(ui=!1,cancelAnimationFrame(ci),a&&a(!1))}let Ql=new ResizeObserver(()=>{Be(),as()});Ql.observe(n);let Ro=typeof IntersectionObserver=="function"?new IntersectionObserver(k=>{Tn=k.some(Me=>Me.isIntersecting),as()}):null;Ro&&Ro.observe(n);let te=()=>{Ri=!document.hidden,as()};document.addEventListener("visibilitychange",te);let tt=k=>{k.preventDefault(),et=!0,as(),r&&r("context-lost")},_n=()=>{et=!1,F(),re(),as()};b.addEventListener("webglcontextlost",tt),b.addEventListener("webglcontextrestored",_n);function di(){if(!We){We=!0,ui=!1,cancelAnimationFrame(ci),Ql.disconnect(),Ro&&Ro.disconnect(),document.removeEventListener("visibilitychange",te),b.removeEventListener("pointermove",Ot),b.removeEventListener("pointerleave",ot),b.removeEventListener("pointerdown",Ft),b.removeEventListener("pointerup",ht),b.removeEventListener("webglcontextlost",tt),b.removeEventListener("webglcontextrestored",_n),n.removeEventListener("wheel",lt,{capture:!0}),n.removeEventListener("keydown",Pt),S.dispose(),kn.dispose();try{g.dispose(),F()}finally{U.dispose(),f.dispose(),f.forceContextLoss(),b.remove(),y.remove()}}}try{Be(!0),re(),Ie("overview")}catch(k){throw di(),k}return as(),{setState(k){H=k,A&&A.setState(k)},setLive(k){I={...I||{},...k},A&&A.setLive(k)},setDemo(k){d=!!k,A&&A.setDemo(d)},resetState(){H=null,A&&A.resetState()},getQuality:()=>x,autoQuality:()=>p,setQuality(k){!Zl[k]||k===x||(x=k,X=null,F(),re())},getFrameCap:()=>m,setFrameCap(k){Ta.includes(k)&&(m=k)},getLook:()=>q,setLook(k){!mo.includes(k)||k===q||(q=k,A&&A.setLook(k)&&(N(),ue()),vn())},getBrightness:()=>se,setBrightness(k){se=at(Number(k)||mn.initial,mn.min,mn.max),A&&(A.setBrightness(se),N()),vn()},setPerfDetail(k){_=!!k&&g.supported},setCameraPreset(k){O=!1,Ue(k),vn()},getMode:()=>W,setMode(k){!Sp.includes(k)||k===W||(z=null,k==="look"?be("look"):ge(),vn())},screens:()=>Fe().map(k=>k.id),getScreen:()=>pe.id,focusScreen:k=>Yn(k),stepScreen(k){W==="screen"&&!z&&vr(k<0?-1:1)},exitScreen:Cs,setFollow(k){k&&W==="screen"&&(z=null,be(pe.back?pe.back.mode:"orbit")),k&&W!=="orbit"&&(Ur(M.position)==="hall"?ge():Ie("overview")),O=!!k,V=void 0,oe=0,O&&(z=null)},setLabels(k){Le=Array.isArray(k)?k:[],Ps()},setLabelsVisible(k){ct=!!k,y.style.display=ct?"":"none"},stats:()=>A?A.stats():null,dispose:di}}var xr=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),bT=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:xr(3,"a"),new_string:xr(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:xr(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:xr(6,"c"),new_string:xr(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:xr(4,"v"),new_string:xr(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:xr(2,"b"),new_string:xr(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],Jl={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*MT(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:Jl.provider,model:Jl.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...Jl}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),f=Math.max(3,Math.round(h/.12));for(let p=0;p<f;p++){let x=d*(.82+.36*Math.abs(Math.sin(p*1.7+s)));e.streamed+=u/f,yield{live:{phase:c,tps:x}},yield{wait:h/f}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,f,p,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:f,secs:p,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,f)=>h.secs-f.secs),d=.08*c.length;for(let h of u){let f=Math.max(0,h.secs-d);f>0&&(yield{wait:f}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*ST(n){for(;;)for(let e of bT)yield*MT(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function ty({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=qs(Jl.provider,Jl.model),r=ST(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Id(u.usage);return h&&(i.balance=Math.max(0,i.balance-Ld(h,s,mr(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,f=0;for(;f<u;){let{value:p}=r.next();p.wait?h+=p.wait*1e3*3:p.event&&(d.push(l(p,h)),p.event==="turn/end"&&f++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:f}=r.next();if(f.wait){d.length&&n?.(d),o=setTimeout(u,f.wait*1e3/t);return}f.event?d.push(l(f,Date.now())):f.live&&e?.(c(f.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var wT="/api/dsh-work-process-3d/balance";var ET=n=>n>=11904&&n<=40959||n>=44032&&n<=55215||n>=63744&&n<=64255||n>=65280&&n<=65519;function TT(n){if(typeof n!="string"||!n)return 0;let e=0,t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<=32||(s>=55296&&s<=56319?(e++,i++):ET(s)?e++:t++)}return e*.6+t*.3}var ny=n=>n?n.kind==="tool-call"?n.argsRaw:n.kind==="text"||n.kind==="reasoning"?n.text:null:null;function iy({windowMs:n=2e3}={}){let e="",t=[],i=0,s="idle",r=[],o=0;function a(){e="",t=[],i=0,s="idle",r.length=0,o=0}function l(c){for(;r.length&&c-r[0][0]>n;)o-=r.shift()[1];if(!r.length)return o=0,0;let u=Math.max(500,Math.min(n,c-i));return o*1e3/u}return{push(c,u){let d=c&&Array.isArray(c.blocks)?c.blocks:null;if(!d)return a(),{phase:s,tps:0};let h=`${c.turn}:${c.step}`;h!==e&&(a(),e=h);let f=0;for(let x=0;x<d.length;x++){let m=ny(d[x]);if(typeof m!="string")continue;let g=t[x]||0;m.length>g&&(f+=TT(m.slice(g))),t[x]=m.length}f>0&&(!r.length&&!i&&(i=u),r.push([u,f]),o+=f);let p=d.length?d[d.length-1]:null;return s=!p||ny(p)==null?"idle":p.kind==="reasoning"?"reasoning":"generating",{phase:s,tps:l(u)}},tick(c){return{phase:s,tps:e?l(c):0}},reset:a}}var Aa=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0?n:null;function sy(n,e){if(!n)return null;if(!e||typeof e!="object")return n;let t=Aa(e.projectedTokens),i=t??Aa(e.pressureTokens),s=Aa(e.contextWindow);return i==null&&!s?n:{...n,contextTokens:i??n.contextTokens,contextWindow:s||n.contextWindow}}var jl={balance:null,currency:"CNY",toppedUp:null,granted:null,source:null},AT=new Set(["ready","failed","signed-out","unavailable"]);function RT(n){if(!n||n.ok!==!0)return{status:"failed",...jl};let e=AT.has(n.status)?n.status:"failed",t=Array.isArray(n.wallets)?n.wallets.filter(s=>s&&typeof s.currency=="string"):[],i=t.find(s=>s.currency==="CNY")||t[0];return e!=="ready"||!i||Aa(i.total)==null?{status:e==="ready"?"unavailable":e,...jl}:{status:"ready",balance:i.total,currency:i.currency,toppedUp:Aa(i.toppedUp),granted:Aa(i.granted),source:n.source==="account"||n.source==="api-key"?n.source:null}}function CT(n=typeof window<"u"?window:void 0){let e=n&&n.__DSH_BOOT__,t=e&&e.release&&e.release.version;return typeof t=="string"?t:""}async function ry({lang:n="en",version:e=CT(),fetchImpl:t,signal:i}={}){let s=t||(typeof fetch=="function"?fetch:null);if(!s)return{status:"unavailable",...jl};let r={version:e,locale:n==="zh"?"zh-CN":"en-US",timezoneOffsetSeconds:-new Date().getTimezoneOffset()*60},o;try{o=await s(wT,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),credentials:"same-origin",signal:i})}catch(l){if(i&&i.aborted)throw l;return{status:"failed",...jl}}if(o.status===404)return{status:"unavailable",...jl};let a=null;try{a=await o.json()}catch{a=null}return RT(a)}var oy=`
.dwp3d-root{position:relative;width:100%;height:100%;min-height:320px;overflow:hidden;background:#0a0b0e;color:#e6e9ef;font:inherit;font-size:12px;line-height:1.4;container-type:inline-size;container-name:dwp3d;isolation:isolate}
.dwp3d-root.fail{background:var(--dsw-alias-bg-base,#0a0b0e);color:var(--dsw-alias-label-primary,#e6e9ef)}
.dwp3d-root *{box-sizing:border-box}
.dwp3d-stage{position:absolute;inset:0;user-select:none;-webkit-user-select:none;outline:none}
.dwp3d-stage:focus-visible{box-shadow:inset 0 0 0 2px rgba(77,107,254,.85)}
.dwp3d-labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dwp3d-label{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;gap:1px;padding:3px 7px 4px;border-radius:6px;background:rgba(9,11,15,.7);border:1px solid rgba(255,255,255,.1);white-space:nowrap;opacity:0;transition:opacity .25s;will-change:transform}
.dwp3d-label:after{content:"";position:absolute;left:50%;bottom:-6px;width:1px;height:6px;background:rgba(255,255,255,.35)}
.dwp3d-label-title{font-size:11.5px;font-weight:600;color:#eef2fa}
.dwp3d-label-sub{font-size:10.5px;letter-spacing:.05em;color:#9aaacb;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace}
.dwp3d-panel{background:rgba(12,14,19,.68);border:1px solid rgba(255,255,255,.08);border-radius:10px;backdrop-filter:blur(10px) saturate(1.15);-webkit-backdrop-filter:blur(10px) saturate(1.15);box-shadow:0 6px 24px rgba(0,0,0,.32)}
.dwp3d-top{position:absolute;top:10px;left:10px;right:10px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none;flex-wrap:wrap;z-index:2}
.dwp3d-top>*{pointer-events:auto}
.dwp3d-title{display:flex;flex-direction:column;gap:3px;padding:6px 10px;max-width:min(520px,100%)}
.dwp3d-title-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-height:22px}
.dwp3d-title h2{margin:0;font-size:13px;font-weight:650;letter-spacing:.02em;color:#f3f5fa;white-space:nowrap}
.dwp3d-note{margin:0;font-size:11.5px;color:#ffc65c;line-height:1.4}
.dwp3d-warn{color:#ff9a9a;max-width:520px;overflow-wrap:anywhere;user-select:text}
.dwp3d-chip{display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 8px;border-radius:10px;font-size:11px;background:rgba(255,255,255,.07);color:#c9d2e3;white-space:nowrap}
.dwp3d-chip.demo{background:rgba(255,176,32,.18);color:#ffc65c;font-weight:600}
.dwp3d-chip.live{background:rgba(52,209,122,.16);color:#5fe39a;font-weight:600}
.dwp3d-link{background:none;border:0;padding:0;font:inherit;color:#8fb0ff;text-decoration:underline;cursor:pointer}
.dwp3d-link:focus-visible{outline:2px solid #4d6bfe;outline-offset:2px;border-radius:2px}
.dwp3d-dot{width:7px;height:7px;border-radius:50%;background:currentColor;box-shadow:0 0 6px currentColor;flex:none}
.dwp3d-tools{display:flex;align-items:center;gap:6px;padding:4px;flex-wrap:wrap;justify-content:flex-end}
.dwp3d-right{display:flex;flex-direction:column;align-items:flex-end;gap:8px;max-width:100%}
.dwp3d-perf{display:grid;grid-template-columns:auto auto;gap:3px 14px;padding:8px 11px;font-size:11.5px;color:#aab4c8;font-variant-numeric:tabular-nums;min-width:200px}
.dwp3d-perf-row{display:contents}
.dwp3d-perf-row b{font-weight:600;color:#eef2f8;text-align:right;font-family:"Cascadia Mono",Consolas,monospace}
.dwp3d-seg{display:inline-flex;gap:1px;background:rgba(255,255,255,.05);border-radius:7px;padding:2px;flex-wrap:wrap}
.dwp3d-group{display:inline-flex;align-items:center;gap:4px;flex-wrap:wrap}
.dwp3d-btn{appearance:none;border:0;background:transparent;color:#c9d2e3;font:inherit;font-size:12px;height:26px;padding:0 9px;border-radius:5px;cursor:pointer;white-space:nowrap}
.dwp3d-btn:hover{background:rgba(255,255,255,.09);color:#fff}
.dwp3d-btn.on{background:#4d6bfe;color:#fff}
.dwp3d-btn:disabled{opacity:.4;cursor:default;background:transparent}
.dwp3d-btn:focus-visible,.dwp3d-select:focus-visible,.dwp3d-x:focus-visible{outline:2px solid #8ea2ff;outline-offset:1px}
.dwp3d-select{appearance:none;-webkit-appearance:none;border:0;font:inherit;font-size:12px;height:26px;padding:0 22px 0 9px;border-radius:6px;color:#c9d2e3;cursor:pointer;background:rgba(255,255,255,.05) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%23c9d2e3' stroke-width='1.4'/%3E%3C/svg%3E") no-repeat right 7px center}
.dwp3d-select option{background:#16191f;color:#e6e9ef}
.dwp3d-bottom{position:absolute;left:10px;right:10px;bottom:10px;display:flex;flex-direction:column;gap:8px;pointer-events:none;z-index:2}
.dwp3d-mid{display:flex;align-items:flex-end;justify-content:space-between;gap:8px}
.dwp3d-mid>*{pointer-events:auto}
.dwp3d-ticker{padding:7px 10px 6px;width:min(400px,56%);min-width:0}
.dwp3d-ticker h3{margin:0 0 3px;font-size:11px;font-weight:600;color:#9aaacb;letter-spacing:.04em}
.dwp3d-tick{display:flex;align-items:center;gap:7px;height:20px;font-size:12px;color:#d6deec;min-width:0}
.dwp3d-tick code{flex:none;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace;font-size:11px;color:#9aaacb}
.dwp3d-tick .l{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.dwp3d-tick .st{flex:none;width:12px;text-align:center;font-size:11px}
.dwp3d-muted{color:#8f9ab0}
.dwp3d-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.dwp3d-legend{margin-left:auto;padding:6px 10px;display:flex;flex-direction:column;gap:4px;max-width:100%;font-size:11.5px;color:#c9d2e3}
.dwp3d-legend-row{display:flex;align-items:center;flex-wrap:wrap;gap:4px 10px}
.dwp3d-legend-k{color:#9aaacb;font-weight:600}
.dwp3d-legend-item{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.dwp3d-sw{width:11px;height:11px;border-radius:50%;flex:none;border:1px solid rgba(255,255,255,.25)}
.dwp3d-sw.raw{background:radial-gradient(circle at 35% 35%,#f2f4f8,#9aa1ad 70%)}
.dwp3d-sw.normal{background:conic-gradient(from 30deg,#6f8cff,#b98cff,#5fd3c7,#6f8cff)}
.dwp3d-sw.gold{background:radial-gradient(circle at 35% 35%,#ffe7a8,#e3a72c 75%)}
.dwp3d-sw.bad{background:radial-gradient(circle at 35% 35%,#d76a6a,#7a2222 75%)}
.dwp3d-hint{display:flex;align-items:center;gap:6px;color:#9aaacb}
.dwp3d-x{appearance:none;border:0;background:rgba(255,255,255,.06);color:#c9d2e3;width:18px;height:18px;line-height:16px;padding:0;border-radius:4px;cursor:pointer;font:inherit;font-size:13px;flex:none}
.dwp3d-x:hover{background:rgba(255,255,255,.14);color:#fff}
.dwp3d-x:disabled{opacity:.35;cursor:default;background:rgba(255,255,255,.06)}
.dwp3d-backdrop{position:absolute;inset:0;z-index:1}
.dwp3d-pop{display:flex;flex-direction:column;gap:8px;padding:10px 12px;min-width:260px}
.dwp3d-pop-row{display:flex;align-items:center;gap:10px}
.dwp3d-pop-k{flex:none;min-width:48px;color:#9aaacb;font-size:11.5px}
.dwp3d-pop-row .dwp3d-select,.dwp3d-pop-row .dwp3d-seg{margin-left:auto}
.dwp3d-pop-v{flex:none;min-width:38px;text-align:right;font-weight:600;color:#eef2f8;font-size:11.5px;font-family:"Cascadia Mono",Consolas,monospace}
.dwp3d-range{flex:1;min-width:110px;margin:0;accent-color:#4d6bfe;cursor:pointer}
.dwp3d-range:focus-visible,.dwp3d-check input:focus-visible{outline:2px solid #8ea2ff;outline-offset:2px}
.dwp3d-check{gap:8px;cursor:pointer;color:#c9d2e3}
.dwp3d-check input{margin:0;accent-color:#4d6bfe;cursor:pointer}
.dwp3d-cards{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:6px;pointer-events:auto}
.dwp3d-card{padding:7px 10px 8px;min-width:0}
.dwp3d-card .k{font-size:11px;color:#9aaacb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-card .v{font-size:16px;font-weight:650;color:#f1f4fa;font-variant-numeric:tabular-nums;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-card .s{font-size:11px;color:#a3afc5;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-bar{height:3px;border-radius:2px;background:rgba(255,255,255,.09);margin-top:5px;overflow:hidden}
.dwp3d-bar>i{display:block;height:100%;border-radius:2px;background:#4d6bfe;transition:width .4s}
.dwp3d-tip{position:absolute;z-index:4;width:max-content;max-width:300px;padding:9px 11px;pointer-events:none;font-size:12px;line-height:1.45}
.dwp3d-tip h4{margin:0 0 3px;font-size:12.5px;font-weight:650;color:#f3f5fa}
.dwp3d-tip p{margin:2px 0 0;color:#b8c3d8}
.dwp3d-tip .row{display:flex;justify-content:space-between;gap:14px;color:#cfd7e6;font-variant-numeric:tabular-nums}
.dwp3d-tip .row span:first-child{color:#9aaacb;flex:none}
.dwp3d-tip .row span:last-child{text-align:right;overflow-wrap:anywhere;min-width:0}
.dwp3d-toast-wrap{position:absolute;top:54px;left:50%;transform:translateX(-50%);z-index:3;pointer-events:none}
.dwp3d-toast{padding:6px 12px;font-size:12px;white-space:nowrap}
.dwp3d-screenbar-wrap{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none;max-width:calc(100% - 20px)}
.dwp3d-screenbar{display:flex;align-items:center;gap:4px;padding:4px;pointer-events:auto}
.dwp3d-screenbar-name{display:flex;align-items:baseline;gap:8px;padding:0 10px;min-width:150px;justify-content:center;white-space:nowrap}
.dwp3d-screenbar-name b{font-size:12.5px;font-weight:650;color:#f3f5fa}
.dwp3d-screenbar-name span{font-size:11px;color:#9aaacb;font-variant-numeric:tabular-nums}
.dwp3d-screenbar .sep{width:1px;height:18px;background:rgba(255,255,255,.12);margin:0 2px}
.dwp3d-screenbar-hint{margin:0;padding:3px 10px;border-radius:6px;background:rgba(12,14,19,.5);font-size:11px;color:#b8c3d8;text-align:center}
.dwp3d-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;z-index:5}
.dwp3d-center.dim{background:rgba(5,6,8,.55)}
.dwp3d-loading{display:flex;align-items:center;gap:10px;padding:12px 16px;font-size:12.5px;color:#d6deec}
.dwp3d-spin{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.18);border-top-color:#8ea2ff;animation:dwp3d-spin .9s linear infinite;flex:none}
@keyframes dwp3d-spin{to{transform:rotate(360deg)}}
.dwp3d-msg{padding:14px 18px;max-width:440px;text-align:center;color:#d6deec}
.dwp3d-fail{max-width:460px;padding:18px 20px;border-radius:12px;background:var(--dsw-alias-bg-layer-1,#16191f);border:1px solid var(--dsw-alias-border-l1,rgba(255,255,255,.12));color:var(--dsw-alias-label-primary,#e6e9ef)}
.dwp3d-fail h3{margin:0 0 6px;font-size:14px;font-weight:650}
.dwp3d-fail p{margin:0 0 14px;color:var(--dsw-alias-label-secondary,#a3afc5);line-height:1.5}
.dwp3d-fail button{appearance:none;border:0;border-radius:6px;height:28px;padding:0 14px;font:inherit;font-size:12.5px;cursor:pointer;background:var(--dsw-alias-brand-primary,#4d6bfe);color:#fff}
.dwp3d-fail button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#4d6bfe);outline-offset:2px}
@media (prefers-reduced-motion: reduce){
  .dwp3d-spin{animation:none}
  .dwp3d-label,.dwp3d-bar>i{transition:none}
}
@container dwp3d (max-width: 900px){
  .dwp3d-cards{grid-template-columns:repeat(4,minmax(0,1fr))}
}
@container dwp3d (max-width: 760px){
  .dwp3d-ticker{display:none}
  .dwp3d-card .v{font-size:15px}
}
@container dwp3d (max-width: 520px){
  .dwp3d-title h2{display:none}
  .dwp3d-btn{padding:0 7px}
  .dwp3d-hint,.dwp3d-screenbar-hint{display:none}
  .dwp3d-screenbar-name{min-width:0}
}
@container dwp3d (max-width: 420px){
  .dwp3d-cards{grid-template-columns:repeat(2,minmax(0,1fr))}
}
`;var{useEffect:Wi,useRef:hn,useState:fn,useReducer:xy,useCallback:Ai}=me,PT="workProcess3d",yy="dwp3d.source",IT=5e3,LT=12e4,DT=4e3,NT=250,Ep="dwp3d.quality",ay="dwp3d.hint",ly="dwp3d.hint.look",OT=["overview","fuel","engine","stations","products","living","balcony"],FT=["raw","normal","gold","bad"],cy={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},uy={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},UT=200,kT=4,Kd=3,vy="dwp3d.fps",dy="dwp3d.perf",_y="dwp3d.look",by="dwp3d.brightness";function qr(n){try{return window.localStorage.getItem(n)}catch{return null}}function yr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function hy(){let n=qr(Ep);return So.includes(n)?n:null}function BT(){let n=qr(vy),e=n==null?"auto":Number(n);return Ta.includes(e)?e:"auto"}function zT(){return typeof me.useId=="function"?me.useId():"dwp3d"}function HT(){let n=qr(_y);return mo.includes(n)?n:zr}function GT(){let n=Number(qr(by));return Number.isFinite(n)&&n>=mn.min&&n<=mn.max?n:mn.initial}function VT(){return qr(yy)==="demo"?"demo":"live"}var Ra=class extends me.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){this.props.onError&&this.props.onError(e)}render(){return this.state.failed?null:this.props.children}};function fy({use:n,name:e,onValue:t}){let i=n(e);return Wi(()=>t(i),[i,t]),null}var WT=n=>n?`${n.running?1:0}${n.blank?1:0}`:"";function XT({use:n,onValue:e}){let t=n(WT);return Wi(()=>e(t),[t,e]),null}var qT=n=>n&&n.legacy&&n.legacy.partial||null;function $T({use:n,onValue:e}){let t=n(qT);return Wi(()=>e(t),[t,e]),null}function YT(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function KT({t:n,perf:e}){if(!e)return me.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},me.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),rn(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return me.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>me.createElement("div",{key:s,className:"dwp3d-perf-row"},me.createElement("span",null,s),me.createElement("b",null,r))))}function ZT(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":"products":null}function JT(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function jT(n){let[e,t]=xy(i=>i+1,0);return Wi(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Tp=(n,e)=>n&&(n[e]||n.en)||"",wp=(n,e)=>`${Tp(n,e)} · ${n.code}`;function py(n){let e=t=>({id:t,text:Tp(tn[t],n),sub:tn[t].code});return[e("tank"),e("engine"),e("robot"),...Sd.map(t=>({id:`station:${t}`,text:Tp(xi[t],n),sub:xi[t].code})),e("loadport"),e("stocker"),e("living")]}var QT=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework",eA={loading:"bal.loading","signed-out":"bal.signedOut",failed:"bal.failed",unavailable:"bal.unavailable"},my=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now();function My(n,e,t,i){return e!=null?En(e,t):n(eA[i]||"bal.unavailable")}function gy(n,e){let t=typeof e.fileCount=="number"?e.fileCount:e.files.length,i=[[n("status."+QT(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:t})]];for(let r of e.files.slice(0,6))i.push([Xf(r.path),`+${r.added} −${r.removed}`]);t>6&&i.push(["…",`+${t-6}`]);let s=(e.endedAt||Date.now())-e.startedAt;return i.push(["",n("hover.batchCost",{cost:En(e.cost),time:cx(s)})]),i}function tA(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:wp(tn[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:En(d)});switch(n){case"tank":{let d=[[e.demo?t("m.balanceDemo"):t("m.balance"),My(t,e.balance,e.currency,s.balanceStatus)]];return!e.demo&&e.balance!=null&&s.toppedUp!=null&&(d.push([t("m.toppedUp"),En(s.toppedUp,e.currency)]),d.push([t("m.granted"),En(s.granted||0,e.currency)])),!e.demo&&e.balance!=null&&s.balanceSource==="api-key"&&d.push(["",t("m.balanceViaKey")]),o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${rs(l.contextRatio)} · ${rn(i.contextTokens)} / ${rn(i.contextWindow)}`],[t("row.miss"),rn(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),rn(i.totals.write)]),d.push([t("row.hit"),rn(i.totals.hit)],[t("row.output"),rn(i.totals.output)],[t("row.reasoning"),rn(i.totals.reasoning)],[t("row.cost"),En(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"stocker":{let d=i.turns.filter(f=>f.status!=="running"),h=d.filter(f=>f.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${wp(tn.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:gy(t,d)}}default:break}if(n.startsWith("screen:")){let d=n.slice(7),h={flow:"screen.descFlow",main:"screen.descMain",cost:"screen.descCost"}[d];return h?{title:t("screen."+d),body:t(h),rows:[["",t("screen.click")]]}:null}if(n.startsWith("station:")){let d=n.slice(8),h=xi[d];if(!h)return null;let f=i.calls.filter(_=>_.kind===d),p=f.filter(_=>_.status==="running").pop(),x=f[f.length-1],m=[];p?m.push([t("hover.working"),p.label||p.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=f.filter(_=>_.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:wp(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(f=>f.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?gy(t,h):[]}}return null}function nA({hover:n,data:e,rootRef:t}){let i=tA(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return me.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},me.createElement("h4",null,i.title),i.body?me.createElement("p",null,i.body):null,i.rows.length?me.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>me.createElement("div",{className:"row",key:h},me.createElement("span",null,u),me.createElement("span",null,d)))):null)}function iA({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return me.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},me.createElement("div",{className:"k"},n.k),me.createElement("div",{className:"v"},n.v),n.s?me.createElement("div",{className:"s"},n.s):null,n.bar!=null?me.createElement("div",{className:"dwp3d-bar"},me.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function sA({t:n,calls:e}){return me.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},me.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=uy[t.status]?t.status:"running",s=uy[i],r=xi[t.kind]||xi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return me.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},me.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),me.createElement("span",{className:"dwp3d-sr"},n("call."+i)),me.createElement("code",null,r.code),me.createElement("span",{className:"l"},o))}):me.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function rA({t:n,hintOn:e,hintKey:t,onDismiss:i}){return me.createElement("div",{className:"dwp3d-panel dwp3d-legend"},me.createElement("div",{className:"dwp3d-legend-row"},me.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),FT.map(s=>me.createElement("span",{className:"dwp3d-legend-item",key:s},me.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?me.createElement("div",{className:"dwp3d-hint"},me.createElement("span",null,n(t)),me.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}function oA({t:n,id:e,ids:t,onStep:i,onBack:s}){let r=Math.max(0,t.indexOf(e)),o=t.length>1;return me.createElement("div",{className:"dwp3d-screenbar-wrap"},me.createElement("div",{className:"dwp3d-panel dwp3d-screenbar",role:"toolbar","aria-label":n("screen.bar")},me.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.prev"),"aria-label":n("screen.prev"),onClick:()=>i(-1)},"◀"),me.createElement("div",{className:"dwp3d-screenbar-name","aria-live":"polite"},me.createElement("b",null,n("screen."+e)),me.createElement("span",null,n("screen.count",{i:r+1,n:t.length}))),me.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.next"),"aria-label":n("screen.next"),onClick:()=>i(1)},"▶"),me.createElement("span",{className:"sep","aria-hidden":"true"}),me.createElement("button",{type:"button",className:"dwp3d-btn",onClick:s},n("screen.back"))),me.createElement("p",{className:"dwp3d-screenbar-hint"},n("screen.hint")))}var aA=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function Sy(n){let{ctx:e}=n,t=jT(e),i=JT(e),s=n.tBound||n.t,r=Ai((te,tt)=>{let _n=typeof s=="function"?s(te):te,di=typeof _n=="string"&&_n?_n:te;return tt?ux(di,tt):di},[s]),o=hn(r);o.current=r;let a=hn(i);a.current=i;let l=hn(null),c=hn(null),u=hn(null),d=hn(Fd()),h=hn({phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"loading"}),f=hn(0),p=hn(!1),x=hn(!0),m=hn(0),g=hn({settle:Kd,low:0}),[,_]=xy(te=>te+1,0),[b,y]=fn(0),[M,w]=fn(()=>hy()!=null),v=hn(M),[S,A]=fn(()=>hy()||"medium"),R=hn(S),[P,U]=fn(BT),H=hn(P),[I,Y]=fn(()=>qr(dy)==="on"),ee=hn(I);ee.current=I;let[J,Q]=fn(null),[z,W]=fn(HT),O=hn(z),[V,oe]=fn(GT),j=hn(V),[he,fe]=fn(!1),ne=zT(),[xe,Le]=fn("overview"),[ct,We]=fn(!1),[et,He]=fn(!0),K=hn(et);K.current=et;let[B,q]=fn(!0),[se,$]=fn(()=>qr(ay)!=="off"),[ue,Pe]=fn(()=>qr(ly)!=="off"),[F,re]=fn("orbit"),[de,N]=fn(null),[Je,dt]=fn(!1),[_t,Re]=fn(null),[Ee,Ae]=fn(!0),[De,L]=fn(null),[E,Z]=fn(null),[we,ve]=fn(null),Be=typeof n.useProjection=="function"?n.useProjection:null,qe=typeof n.useSession=="function"?n.useSession:null,_e=typeof n.useChat=="function"?n.useChat:null,[ye,Ge]=fn(VT),[G,be]=fn(!1),ge=!!Be&&!G,Ie=ye==="demo"||!ge,Ue=hn(Ie);Ue.current=Ie;let Ve=n.sessionId||"",[pe,Ct]=fn(0),[Fe,mt]=fn(!1),[Tt,Ke]=fn(!1),Wt=hn(void 0),Sn=hn(void 0),Yn=hn(""),Rs=hn(null);Rs.current||(Rs.current=iy());let Cs=hn({status:"loading",balance:null,currency:"CNY",toppedUp:null,granted:null,source:null}),vr=hn(0),Xi=hn(null),ei=Ai(()=>{f.current||(f.current=setTimeout(()=>{f.current=0,x.current?_():p.current=!0},UT))},[]),Ni=Ai(te=>{ve(te),clearTimeout(m.current),m.current=setTimeout(()=>ve(null),3500)},[]),vn=Ai(te=>{So.includes(te)&&(R.current=te,A(te),g.current={settle:Kd,low:0},u.current&&u.current.setQuality(te))},[]),$s=hn({running:void 0,blank:!1}),kn=Ai(()=>{Ue.current||(d.current=sy(Wt.current,Sn.current)||Fd(),u.current&&u.current.setState(d.current),ei())},[ei]),Ps=Ai(te=>{Cs.current=te,!Ue.current&&(Object.assign(h.current,{balance:te.balance,currency:te.currency,balanceStatus:te.status,toppedUp:te.toppedUp,granted:te.granted,balanceSource:te.source}),u.current&&u.current.setLive({balance:te.balance,currency:te.currency,balanceStatus:te.status}),ei())},[ei]),vi=Ai(()=>{if(Ue.current)return;Xi.current&&Xi.current.abort();let te=typeof AbortController=="function"?new AbortController:null;Xi.current=te,ry({lang:a.current,signal:te?te.signal:void 0}).then(tt=>{te&&te.signal.aborted||(Xi.current=null,!(tt.status!=="ready"&&tt.status!=="signed-out"&&Cs.current.balance!=null)&&Ps(tt))},()=>{})},[Ps]),Is=Ai(te=>{clearTimeout(vr.current),vr.current=setTimeout(vi,te)},[vi]),os=Ai(te=>{Wt.current=te,te&&mt(!0),kn();let tt=te&&Array.isArray(te.turns)?te.turns:[],_n=tt.length?tt[tt.length-1]:null,di=_n?`${_n.no}:${_n.status}`:"";Yn.current&&di!==Yn.current&&_n&&_n.status!=="running"&&Is(DT),Yn.current=di},[kn,Is]),wo=Ai(te=>{Sn.current=te,kn()},[kn]),Eo=Ai(te=>{let tt=te?te[0]==="1":void 0;$s.current={running:tt,blank:te?te[1]==="1":!1},!Ue.current&&(h.current.running=tt,u.current&&u.current.setLive({running:tt}),ei())},[ei]),qi=Ai(te=>{if(Ue.current)return;let tt=h.current;tt.phase===te.phase&&Math.abs((tt.tps||0)-te.tps)<.05||(tt.phase=te.phase,tt.tps=te.tps,u.current&&u.current.setLive({phase:te.phase,tps:te.tps}),ei())},[ei]),To=Ai(te=>{qi(Rs.current.push(te,my()))},[qi]),li=Ai(te=>{be(!0),typeof console<"u"&&console.warn("[dsh-work-process-3d] live data unavailable:",te)},[]),Ls=Ai(te=>{te!=="live"&&te!=="demo"||(Ge(te),yr(yy,te==="demo"?"demo":null))},[]);Wi(()=>{let te=c.current;if(!te)return;let tt=null,_n=!1,di=0;Ae(!0),L(null),Z(null),Re(null),re("orbit"),N(null);let k=Ce=>{L(_r=>_r&&_r.kind==="lost"?null:_r),ee.current&&Q(Ce);let Xe=g.current;if(Xe.settle>0){Xe.settle-=1;return}if(v.current)return;let bt=Ce&&Ce.scale<=Ce.minScale+.001;if(Xe.low=Ce&&Ce.slow&&bt?Xe.low+1:0,Xe.low<kT)return;Xe.low=0;let jt=So.indexOf(R.current);if(jt<=0)return;let ls=So[jt-1];vn(ls),Ni(o.current("quality.downgraded",{q:o.current(`quality.${ls}`)}))},Me=()=>{try{tt=ey(te,{quality:v.current?R.current:"auto",fps:H.current,look:O.current,brightness:j.current,demo:Ue.current,onHover:Re,onSelect:Ce=>{let Xe=ZT(Ce);!Xe||!tt||(tt.setCameraPreset(Xe),Le(Xe),We(!1))},onPerf:k,onError:(Ce,Xe)=>{if(Ce==="shader"){Z(bt=>bt||String(Xe||""));return}Ce==="context-lost"&&(Re(null),L({kind:"lost"}))},onActive:Ce=>{x.current=Ce,Ce&&p.current&&(p.current=!1,_())},onReady:()=>Ae(!1),onMode:Ce=>{re(Ce),(Ce==="look"||Ce==="screen")&&We(!1)},onScreen:Ce=>{N(Ce),Ce&&Re(null)}})}catch(Ce){for(;te.firstChild;)te.removeChild(te.firstChild);Ae(!1),L({kind:"webgl",msg:String(Ce&&Ce.message||Ce)});return}u.current=tt,R.current=tt.getQuality(),A(R.current),g.current={settle:Kd,low:0},tt.setLabels(py(a.current)),tt.setLabelsVisible(K.current),tt.setPerfDetail(ee.current),Ct(Ce=>Ce+1),_()},ke=requestAnimationFrame(()=>{di=requestAnimationFrame(()=>{_n||Me()})});return()=>{_n=!0,cancelAnimationFrame(ke),cancelAnimationFrame(di),tt&&tt.dispose(),u.current=null,clearTimeout(f.current),f.current=0}},[b,vn,ei,Ni]),Wi(()=>{let te=u.current;if(!te)return;if(te.resetState(),te.setDemo(Ie),Rs.current.reset(),Ie){let _n=()=>u.current===te,di=ty({onEvents:k=>{_n()&&(d.current=hp(d.current,k),te.setState(d.current),ei())},onLive:k=>{_n()&&(Object.assign(h.current,k),te.setLive(k),ei())}});return d.current=hp(Fd(),di.prefill(2)),h.current={phase:"idle",tps:0,balance:di.balance,currency:"CNY",balanceStatus:"ready",running:void 0},te.setState(d.current),te.setLive(h.current),di.start(),_(),()=>di.stop()}let tt=Cs.current;h.current={phase:"idle",tps:0,balance:tt.balance,currency:tt.currency,balanceStatus:tt.status,toppedUp:tt.toppedUp,granted:tt.granted,balanceSource:tt.source,running:$s.current.running},te.setLive(h.current),Yn.current="",kn(),_()},[pe,Ie,Ve,ei,kn]),Wi(()=>{if(Ie)return;vi();let te=setInterval(()=>{let tt=typeof document<"u"&&document.visibilityState==="hidden";x.current&&!tt&&vi()},LT);return()=>{clearInterval(te),clearTimeout(vr.current),Xi.current&&Xi.current.abort(),Xi.current=null}},[Ie,vi]),Wi(()=>{if(Ie)return;let te=setInterval(()=>qi(Rs.current.tick(my())),NT);return()=>clearInterval(te)},[Ie,qi]),Wi(()=>{if(Ke(!1),Ie||Fe)return;let te=setTimeout(()=>Ke(!0),IT);return()=>clearTimeout(te)},[Ie,Fe]),Wi(()=>()=>clearTimeout(m.current),[]),Wi(()=>{u.current&&u.current.setLabels(py(i))},[i,t]),Wi(()=>{u.current&&u.current.setLabelsVisible(et)},[et]),Wi(()=>{let te=()=>dt(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",te),()=>document.removeEventListener("fullscreenchange",te)},[]);let Ds=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},T=te=>{let tt=u.current;tt&&(tt.setCameraPreset(te),Le(te),We(!1),tt.getMode()==="look"&&Ds())},X=()=>{let te=u.current;if(te){if(te.getScreen()){te.exitScreen();return}te.focusScreen("main")&&(We(!1),Ds())}},le=te=>{u.current&&u.current.stepScreen(te)},ie=()=>{u.current&&u.current.exitScreen()},ae=()=>{let te=!ct;We(te),u.current&&u.current.setFollow(te)},Oe=()=>{let te=l.current;if(!te)return;let tt=()=>Ni(o.current("error.fullscreen"));try{let _n=document.fullscreenElement?document.exitFullscreen():te.requestFullscreen();_n&&typeof _n.catch=="function"&&_n.catch(tt)}catch{tt()}},st=te=>{if(te==="auto"){yr(Ep,null),v.current=!1,w(!1),u.current&&vn(u.current.autoQuality());return}So.includes(te)&&(yr(Ep,te),v.current=!0,w(!0),vn(te))},Ye=te=>{let tt=te==="auto"?"auto":Number(te);Ta.includes(tt)&&(H.current=tt,U(tt),yr(vy,tt==="auto"?null:String(tt)),g.current={settle:Kd,low:0},u.current&&u.current.setFrameCap(tt))},je=()=>{let te=!I;Y(te),yr(dy,te?"on":null),te||Q(null),u.current&&u.current.setPerfDetail(te)},lt=te=>{mo.includes(te)&&(O.current=te,W(te),yr(_y,te===zr?null:te),u.current&&u.current.setLook(te))},Mt=te=>{let tt=Math.min(mn.max,Math.max(mn.min,Number(te)||mn.initial));j.current=tt,oe(tt),yr(by,Math.abs(tt-mn.initial)<.001?null:String(tt)),u.current&&u.current.setBrightness(tt)},Ot=()=>{F==="look"?(yr(ly,"off"),Pe(!1)):(yr(ay,"off"),$(!1))},ot=te=>{let tt=u.current;tt&&(tt.setMode(te),re(tt.getMode()),te==="look"&&(We(!1),Ds()))},Ft=()=>y(te=>te+1),ht=d.current,Pt=h.current,It=kd(ht),gn=qs(ht.provider,ht.model),it=mr(Date.now()),wn=Pt.phase&&Pt.phase!=="idle"?Pt.phase:Pt.running===!1?"idle":ht.phase,kt=typeof Pt.balance=="number"?Pt.balance:null,ti=Pt.currency||"CNY",On=kt!=null&&gn&&ti!=="USD"?Dd(kt,gn,it):0,Ns=ht.turns.filter(te=>te.status!=="running"),ci=Ns.filter(te=>te.status==="ok").length,ui=It.contextRatio>=.8?"#ff5d5d":It.contextRatio>=.6?"#ffb347":"#4d6bfe",Vt=Pt.tps>.5&&(wn==="generating"||wn==="reasoning")?` · ${r("unit.tps",{n:Math.round(Pt.tps)})}`:"",xn=ht.totals.miss+ht.totals.write,Ln=ht.files,gt=[{id:"balance",k:r(Ie?"m.balanceDemo":"m.balance"),v:My(r,kt,ti,Pt.balanceStatus),s:On?r("m.balanceSub",{tokens:rn(On)}):"",title:!Ie&&kt!=null&&Pt.toppedUp!=null?r("m.balanceTitle",{topped:En(Pt.toppedUp,ti),granted:En(Pt.granted||0,ti)}):void 0},{id:"context",k:r("m.context"),v:rs(It.contextRatio),s:`${rn(ht.contextTokens)} / ${rn(ht.contextWindow)}`,bar:It.contextRatio,barColor:ui,title:r("m.contextTitle",{pct:rs(It.contextRatio),used:rn(ht.contextTokens),window:rn(ht.contextWindow)})},{id:"input",k:r("m.input"),v:rn(It.prompt),s:r("m.inputSub",{rate:rs(It.hitRate),miss:rn(xn)}),title:r("m.inputTitle",{total:rn(It.prompt),hit:rn(ht.totals.hit),rate:rs(It.hitRate),miss:rn(xn),write:ht.totals.write>0?r("m.writeNote",{n:rn(ht.totals.write)}):"",saved:En(ht.totals.savings)})},{id:"output",k:r("m.output"),v:rn(ht.totals.output),s:r("m.outputSub",{n:rn(ht.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:En(ht.totals.cost),s:r("m.costSub",{peak:En(ht.totals.costPeak),off:En(ht.totals.costOffPeak)}),title:r("m.costTitle",{cost:En(ht.totals.cost),requests:ht.totals.requests,peak:En(ht.totals.costPeak),off:En(ht.totals.costOffPeak),saved:En(ht.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(ht.tools.calls),s:r("m.toolsSub",{n:ht.tools.errors,rate:rs(It.toolSuccess)}),title:r("m.toolsTitle",{calls:ht.tools.calls,running:ht.tools.running,n:ht.tools.errors})},{id:"products",k:r("m.products"),v:`${Ln.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:Ln.added,r:Ln.removed,ok:ci,done:Ns.length}),title:r("m.productsTitle",{n:Ln.count,a:Ln.added,r:Ln.removed,ok:ci,done:Ns.length})},{id:"efficiency",k:r("m.efficiency"),v:`${It.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:En(It.costPerFile)}),title:r("m.efficiencyHint")}],Tn=ht.calls.slice(-5).reverse(),Ri={t:r,s:ht,live:Pt,lang:i,price:gn,peak:it,m:It,phase:wn,balance:kt,currency:ti,demo:Ie},$r=!Ie&&!Fe&&Tt,Zd=!Ie&&Fe&&ht.turnCount===0&&!ht.calls.length,Ao=!!De&&De.kind==="webgl",as=!Ee&&!Ao,Ql=de&&u.current?u.current.screens():[],Ro=M?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return me.createElement("div",{ref:l,className:`dwp3d-root${Ao?" fail":""}`},me.createElement("style",null,oy),Ie?null:me.createElement(me.Fragment,null,me.createElement(Ra,{onError:li},me.createElement(fy,{use:Be,name:PT,onValue:os})),me.createElement(Ra,null,me.createElement(fy,{use:Be,name:"contextPressure",onValue:wo})),qe?me.createElement(Ra,null,me.createElement(XT,{use:qe,onValue:Eo})):null,_e?me.createElement(Ra,null,me.createElement($T,{use:_e,onValue:To})):null),me.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),he?me.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>fe(!1)}):null,as?me.createElement("div",{className:"dwp3d-top"},me.createElement("div",{className:"dwp3d-panel dwp3d-title"},me.createElement("div",{className:"dwp3d-title-row"},me.createElement("h2",null,r("title")),Ie?me.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):me.createElement("span",{className:"dwp3d-chip live",title:r("badge.liveHint")},r("badge.live")),ht.model?me.createElement("span",{className:"dwp3d-chip"},`${ht.model}${ht.effort?` · ${ht.effort}`:""}`):null,me.createElement("span",{className:"dwp3d-chip"},me.createElement("i",{className:"dwp3d-dot",style:{color:cy[wn]||cy.idle},"aria-hidden":"true"}),`${r("phase."+wn)}${Vt}`)),Ie?me.createElement("p",{className:"dwp3d-note"},r(ge?"badge.demoHint":G?"live.failed":"live.unsupported")):null,$r?me.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"status"},r("live.missing")," ",me.createElement("button",{type:"button",className:"dwp3d-link",onClick:()=>Ls("demo")},r("live.showDemo"))):null,Zd?me.createElement("p",{className:"dwp3d-note"},r("live.idle")):null,E?me.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:E})):null),me.createElement("div",{className:"dwp3d-right"},me.createElement("div",{className:"dwp3d-panel dwp3d-tools"},me.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},OT.map(te=>{let tt=!ct&&!de&&xe===te;return me.createElement("button",{key:te,type:"button",className:`dwp3d-btn${tt?" on":""}`,"aria-pressed":tt,onClick:()=>T(te)},r("view."+te))}),me.createElement("button",{type:"button",className:`dwp3d-btn${de?" on":""}`,title:r("view.screensHint"),"aria-pressed":!!de,onClick:X},r("view.screens"))),me.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},Sp.map(te=>me.createElement("button",{key:te,type:"button",className:`dwp3d-btn${F===te?" on":""}`,title:r(`mode.${te}Hint`),"aria-pressed":F===te,onClick:()=>ot(te)},r("mode."+te)))),me.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},me.createElement("button",{type:"button",className:`dwp3d-btn${ct?" on":""}`,title:r("ctl.followHint"),"aria-pressed":ct,onClick:ae},r("ctl.follow")),me.createElement("button",{type:"button",className:`dwp3d-btn${et?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":et,onClick:()=>He(te=>!te)},r("ctl.labels")),me.createElement("button",{type:"button",className:`dwp3d-btn${B?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":B,onClick:()=>q(te=>!te)},r("ctl.panels")),me.createElement("button",{type:"button",className:`dwp3d-btn${he?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":he,"aria-haspopup":"dialog",onClick:()=>fe(te=>!te)},r("ctl.display")),aA()?me.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":Je,onClick:Oe},r(Je?"ctl.exitFullscreen":"ctl.fullscreen")):null)),he?me.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},me.createElement("div",{className:"dwp3d-pop-row"},me.createElement("span",{className:"dwp3d-pop-k"},r("source.label")),me.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("source.label")},["live","demo"].map(te=>{let tt=te==="demo"?Ie:!Ie,_n=te==="live"&&!ge;return me.createElement("button",{key:te,type:"button",className:`dwp3d-btn${tt?" on":""}`,"aria-pressed":tt,disabled:_n,title:r(_n?"live.unsupported":"source."+te+"Hint"),onClick:()=>Ls(te)},r("source."+te))}))),me.createElement("div",{className:"dwp3d-pop-row"},me.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),me.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},mo.map(te=>me.createElement("button",{key:te,type:"button",className:`dwp3d-btn${z===te?" on":""}`,"aria-pressed":z===te,onClick:()=>lt(te)},r("look."+te))))),me.createElement("div",{className:"dwp3d-pop-row"},me.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-brightness`},r("ctl.brightness")),me.createElement("input",{id:`${ne}-brightness`,className:"dwp3d-range",type:"range",min:mn.min,max:mn.max,step:mn.step,value:V,onChange:te=>Mt(te.target.value)}),me.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(V*100)}%`),me.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(V-mn.initial)<.001,onClick:()=>Mt(mn.initial)},"↺")),me.createElement("div",{className:"dwp3d-pop-row"},me.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-quality`},r("ctl.quality")),me.createElement("select",{id:`${ne}-quality`,className:"dwp3d-select",value:M?S:"auto",onChange:te=>st(te.target.value)},me.createElement("option",{value:"auto"},Ro),So.map(te=>me.createElement("option",{key:te,value:te},r("quality."+te))))),me.createElement("div",{className:"dwp3d-pop-row"},me.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),me.createElement("select",{id:`${ne}-fps`,className:"dwp3d-select",value:String(P),title:r("ctl.fpsHint"),onChange:te=>Ye(te.target.value)},Ta.map(te=>me.createElement("option",{key:String(te),value:String(te)},YT(r,te))))),me.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},me.createElement("input",{type:"checkbox",checked:I,onChange:je}),me.createElement("span",null,r("ctl.perfShow")))):null,I?me.createElement(KT,{t:r,perf:J}):null)):null,me.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},we?me.createElement("div",{className:"dwp3d-panel dwp3d-toast"},we):null),as&&de?me.createElement(oA,{t:r,id:de,ids:Ql,onStep:le,onBack:ie}):null,as&&B&&!de?me.createElement("div",{className:"dwp3d-bottom"},me.createElement("div",{className:"dwp3d-mid"},me.createElement(sA,{t:r,calls:Tn}),me.createElement(rA,{t:r,hintOn:F==="look"?ue:se,hintKey:F==="look"?"hint.look":"hint.controls",onDismiss:Ot})),me.createElement("div",{className:"dwp3d-cards"},gt.map(te=>me.createElement(iA,{key:te.id,card:te})))):null,as&&_t&&!de?me.createElement(nA,{hover:_t,data:Ri,rootRef:l}):null,Ee&&!De?me.createElement("div",{className:"dwp3d-center"},me.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},me.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,Ao?me.createElement("div",{className:"dwp3d-center"},me.createElement("div",{className:"dwp3d-fail",role:"alert"},me.createElement("h3",null,r("error.webglTitle")),me.createElement("p",null,r("error.webgl",{msg:De.msg})),me.createElement("button",{type:"button",onClick:Ft},r("error.retry")))):null,De&&De.kind==="lost"?me.createElement("div",{className:"dwp3d-center dim",role:"alert"},me.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var lA="work-process-3d",cA={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(tc,Cp),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(tc);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:lA,order:15,locale:tc,label:()=>e("tab.label")},t=>wy.createElement(Sy,{...t,ctx:n,tBound:e})))}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

    return module.exports && module.exports.default ? module.exports.default : module.exports;
  },
});
