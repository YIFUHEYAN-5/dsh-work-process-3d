/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var sv=Object.create;var mc=Object.defineProperty;var rv=Object.getOwnPropertyDescriptor;var ov=Object.getOwnPropertyNames;var av=Object.getPrototypeOf,lv=Object.prototype.hasOwnProperty;var cv=(n,e)=>{for(var t in e)mc(n,t,{get:e[t],enumerable:!0})},Zp=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ov(e))!lv.call(n,s)&&s!==t&&mc(n,s,{get:()=>e[s],enumerable:!(i=rv(e,s))||i.enumerable});return n};var Jp=(n,e,t)=>(t=n!=null?sv(av(n)):{},Zp(e||!n||!n.__esModule?mc(t,"default",{value:n,enumerable:!0}):t,n)),uv=n=>Zp(mc({},"__esModule",{value:!0}),n);var o3={};cv(o3,{default:()=>r3});module.exports=uv(o3);var iv=Jp(require("react"),1);var gc="dsh-work-process-3d",dv={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"演示模式：画面由内置示例会话驱动，数字、文件和命令都是虚构的。在「显示」里把数据切回「实时」即可看本会话。","badge.live":"实时","badge.liveHint":"画面来自本会话的实时数据","live.unsupported":"这个 DSH 版本不提供会话投影，只能显示演示数据。","live.missing":"还没有收到本会话的实时数据。插件的主机部分可能尚未加载，重启 DSH 后生效。","live.showDemo":"先看演示","live.failed":"读取实时数据时出错，暂时显示演示数据。重启 DSH 后会重新尝试。","live.idle":"本会话还没有开始工作。发送一条消息后，机器会随对话运转。","source.label":"数据","source.live":"实时","source.demo":"演示","source.liveHint":"显示本会话的实时数据","source.demoHint":"显示内置的示例会话（虚构数据）","bal.loading":"读取中","bal.signedOut":"未登录账户","bal.failed":"查询失败","bal.unavailable":"不可用","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.living":"生活区","view.dock":"坞站","view.screens":"大屏","view.screensHint":"飞到大屏幕墙前，近距离查看三块屏幕；再点一次返回","screen.bar":"大屏查看","screen.flow":"令牌流量","screen.main":"工作总览","screen.cost":"成本与上下文","screen.descFlow":"实时生成速率、最近 60 秒的速率曲线，以及输入、缓存命中、输出和推理的累计用量。","screen.descMain":"当前阶段、轮次、工具调用、产出文件和模型请求；下面一排色块是最近的工具调用。","screen.descCost":"累计花费（分高峰和低谷）、最近 3 分钟的花费曲线、上下文占用和缓存节省。","screen.click":"点击近距离查看","screen.prev":"上一块","screen.next":"下一块","screen.back":"返回","screen.count":"{i}/{n}","screen.hint":"滚轮放大 · 拖动平移 · 点击屏幕外或「返回」退出 · ←/→ 切换","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.balanceTitle":"充值余额 {topped} · 赠金余额 {granted}","m.toppedUp":"充值余额","m.granted":"赠金余额","m.balanceViaKey":"通过 API 密钥查询","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸，留给以后入住的操作员角色。它不显示会话数据。","desc.dock":"每个运行中的子智能体或工作流成员占用一架无人机。无人机先到协作机器人工位领取任务胶囊，再绕坞站飞行；任务结束后带着结果降落：绿色完成，红色失败，灰色停止。","dock.none":"本会话还没有调用子智能体或工作流","dock.running":"运行中","dock.done":"已完成","dock.failed":"失败","dock.stopped":"已停止","dock.queued":"排队（无人机已满）","dock.workflow":"工作流","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},hv={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Demo mode: a built-in sample session drives the scene; its numbers, files and commands are made up. Switch Data back to Live under Display to see this session.","badge.live":"Live","badge.liveHint":"The scene shows this session as it happens","live.unsupported":"This DSH release has no session projections, so only the demo can run.","live.missing":"No live data from this session yet. The plugin’s Host part may not be loaded; restart DSH to load it.","live.showDemo":"Show the demo","live.failed":"Reading live data failed, so the demo is shown for now. DSH tries again after a restart.","live.idle":"This session has not started working yet. Send a message and the machine runs with the conversation.","source.label":"Data","source.live":"Live","source.demo":"Demo","source.liveHint":"Show this session’s live data","source.demoHint":"Show the built-in sample session (made-up data)","bal.loading":"Loading","bal.signedOut":"Not signed in","bal.failed":"Query failed","bal.unavailable":"Unavailable","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.living":"Living","view.dock":"Dock","view.screens":"Screens","view.screensHint":"Fly up to the media wall and read the three screens up close; click again to go back","screen.bar":"Screen viewer","screen.flow":"Token flow","screen.main":"Work overview","screen.cost":"Cost and context","screen.descFlow":"Live generation rate, the last 60 seconds as a chart, and running totals for input, cache hits, output and reasoning.","screen.descMain":"Current phase, turn, tool calls, produced files and model requests; the strip of tiles below shows the latest tool calls.","screen.descCost":"Total cost split into peak and off-peak, the last 3 minutes of spend, context usage and cache savings.","screen.click":"Click to view up close","screen.prev":"Previous","screen.next":"Next","screen.back":"Back","screen.count":"{i}/{n}","screen.hint":"Scroll to zoom · drag to pan · click beside the screen or Back to leave · ←/→ to switch","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.balanceTitle":"Topped-up {topped} · granted {granted}","m.toppedUp":"Topped-up balance","m.granted":"Granted balance","m.balanceViaKey":"Queried with the API key","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium, kept for an operator character to move in later. It shows no session data.","desc.dock":"Each running subagent or workflow member takes a drone. The drone picks up a task capsule at the cobot station, circles the dock while the agent works and lands with the result: green done, red failed, grey stopped.","dock.none":"No subagents or workflows in this session yet","dock.running":"Running","dock.done":"Done","dock.failed":"Failed","dock.stopped":"Stopped","dock.queued":"Queued (all drones busy)","dock.workflow":"Workflow","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},jp={zh:dv,en:hv};var xe=Jp(require("react"),1);var Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G0=0,ef=1,V0=2;var Mo=1,W0=2,Ea=3,qs=0,li=1,en=2,So=0,Ys=1,kn=2,tf=3,nf=4,Ta=5;var wo=100,X0=101,$0=102,q0=103,Y0=104,Pu=200,Hr=201,K0=202,Z0=203,sf=204,Gr=205,J0=206,j0=207,Q0=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,Kc=0,Zc=1,Jc=2,ca=3,jc=4,Qc=5,eu=6,tu=7,rf=0,om=1,am=2,Ks=0,of=1,af=2,lf=3,cf=4,uf=5,df=6,Ol=7;var hf=300,Eo=301,Aa=302,Iu=303,Lu=304,ur=1e3,Vs=1001,nu=1002,ti=1003,lm=1004;var Ul=1005;var Rn=1006,Du=1007;var _s=1008;var Ii=1009,ff=1010,pf=1011,Ra=1012,Nu=1013,bs=1014,rs=1015,Ai=1016,Ou=1017,Uu=1018,To=1020,mf=35902,gf=35899,xf=1021,yf=1022,Ms=1023,dr=1026,xr=1027,Fu=1028,ku=1029,Vr=1030,Bu=1031;var zu=1033,Fl=33776,kl=33777,Bl=33778,zl=33779,Hu=35840,Gu=35841,Vu=35842,Wu=35843,Xu=36196,$u=37492,qu=37496,Yu=37488,Ku=37489,Hl=37490,Zu=37491,Ju=37808,ju=37809,Qu=37810,ed=37811,td=37812,nd=37813,id=37814,sd=37815,rd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,dd=36492,hd=36494,fd=36495,pd=36283,md=36284,Gl=36285,gd=36286;var sl=2300,iu=2301,qc=2302,Gh=2303,Vh=2400,Wh=2401,Xh=2402;var cm=3200;var xd=0,um=1,yr="",oi="srgb",rl="srgb-linear",ol="linear",an="srgb";var Yc=7680;var dm=519,hm=512,fm=513,pm=514,vf=515,mm=516,gm=517,_f=518,bf=519,Mf=35044,yd=35048;var Sf="300 es",is=2e3,ua=2001;function fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function al(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xm(){let n=al("canvas");return n.style.display="block",n}var Qp={},da=null;function ll(...n){let e="THREE."+n.shift();da?da("log",e,...n):console.log(e,...n)}function ym(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function wt(...n){n=ym(n);let e="THREE."+n.shift();if(da)da("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=ym(n);let e="THREE."+n.shift();if(da)da("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function mo(...n){let e=n.join(" ");e in Qp||(Qp[e]=!0,wt(...n))}function vm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var _m={[Kc]:Kc,[Jc]:eu,[jc]:jc,[ca]:Qc,[Zc]:Zc,[eu]:Jc,[tu]:tu,[Qc]:ca},xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],e0=1234567,el=Math.PI/180,ha=180/Math.PI;function vr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mi[n&255]+mi[n>>8&255]+mi[n>>16&255]+mi[n>>24&255]+"-"+mi[e&255]+mi[e>>8&255]+"-"+mi[e>>16&15|64]+mi[e>>24&255]+"-"+mi[t&63|128]+mi[t>>8&255]+"-"+mi[t>>16&255]+mi[t>>24&255]+mi[i&255]+mi[i>>8&255]+mi[i>>16&255]+mi[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function mv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function gv(n,e,t){return n!==e?(t-n)/(e-n):0}function tl(n,e,t){return(1-t)*n+t*e}function xv(n,e,t,i){return tl(n,e,1-Math.exp(-t*i))}function yv(n,e=1){return e-Math.abs(wf(n,e*2)-e)}function vv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function _v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function bv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mv(n,e){return n+Math.random()*(e-n)}function Sv(n){return n*(.5-Math.random())}function wv(n){n!==void 0&&(e0=n);let e=e0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ev(n){return n*el}function Tv(n){return n*ha}function Av(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Rv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*u,a*c);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vd(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tf(n,e){if(e.constructor===Float32Array)return n;let t=vd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Af(n,e){if(e.constructor===Float32Array)return n;let t=vd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Wr={DEG2RAD:el,RAD2DEG:ha,generateUUID:vr,clamp:Ft,euclideanModulo:wf,mapLinear:mv,inverseLerp:gv,lerp:tl,damp:xv,pingpong:yv,smoothstep:vv,smootherstep:_v,randInt:bv,randFloat:Mv,randFloatSpread:Sv,seededRandom:wv,degToRad:Ev,radToDeg:Tv,isPowerOfTwo:Av,ceilPowerOfTwo:Rv,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Cv,normalize:Af,denormalize:Tf},Ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*x;m<0&&(h=-h,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-a*p,e[t+2]=c*f+u*p+a*h-l*d,e[t+3]=u*f-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xh=new P,t0=new un,Ct=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],x=s[0],m=s[3],g=s[6],_=s[1],M=s[4],y=s[7],b=s[2],w=s[5],v=s[8];return r[0]=o*x+a*_+l*b,r[3]=o*m+a*M+l*w,r[6]=o*g+a*y+l*v,r[1]=c*x+u*_+d*b,r[4]=c*m+u*M+d*w,r[7]=c*g+u*y+d*v,r[2]=h*x+p*_+f*b,r[5]=h*m+p*M+f*w,r[8]=h*g+p*y+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,f=t*d+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,t)),this}rotate(e){return mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yh=new Ct,n0=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){let n={enabled:!0,workingColorSpace:rl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(s.r=la(s.r),s.g=la(s.g),s.b=la(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yr?ol:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rl]:{primaries:e,whitePoint:i,transfer:ol,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:an,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}var Zt=Pv();function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wo,su=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=al("canvas")),Wo.width=e.width,Wo.height=e.height;let s=Wo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=al("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Iv=0,fa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vh(s[o].image)):r.push(vh(s[o]))}else r=vh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var Lv=0,_h=new P,wi=class n extends xs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vs,s=Vs,r=Rn,o=_s,a=Ms,l=Ii,c=n.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=vr(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case Vs:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case Vs:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=hf;wi.DEFAULT_ANISOTROPY=1;var mn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(p+1)/2,b=(g+1)/2,w=(u+h)/4,v=(d+x)/4,S=(f+m)/4;return M>y&&M>b?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=v/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=S/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=v/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ru=class extends xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new wi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends ru{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},cl=class extends wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ou=class extends wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _t=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xo.setFromMatrixColumn(e,0).length(),r=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=f*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Nv)}lookAt(e,t,i){let s=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),Cr.crossVectors(i,Hi),Cr.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),Cr.crossVectors(i,Hi)),Cr.normalize(),xc.crossVectors(Hi,Cr),s[0]=Cr.x,s[4]=xc.x,s[8]=Hi.x,s[1]=Cr.y,s[5]=xc.y,s[9]=Hi.y,s[2]=Cr.z,s[6]=xc.z,s[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],_=i[3],M=i[7],y=i[11],b=i[15],w=s[0],v=s[4],S=s[8],T=s[12],R=s[1],N=s[5],U=s[9],z=s[13],D=s[2],K=s[6],te=s[10],ee=s[14],ne=s[3],X=s[7],W=s[11],O=s[15];return r[0]=o*w+a*R+l*D+c*ne,r[4]=o*v+a*N+l*K+c*X,r[8]=o*S+a*U+l*te+c*W,r[12]=o*T+a*z+l*ee+c*O,r[1]=u*w+d*R+h*D+p*ne,r[5]=u*v+d*N+h*K+p*X,r[9]=u*S+d*U+h*te+p*W,r[13]=u*T+d*z+h*ee+p*O,r[2]=f*w+x*R+m*D+g*ne,r[6]=f*v+x*N+m*K+g*X,r[10]=f*S+x*U+m*te+g*W,r[14]=f*T+x*z+m*ee+g*O,r[3]=_*w+M*R+y*D+b*ne,r[7]=_*v+M*N+y*K+b*X,r[11]=_*S+M*U+y*te+b*W,r[15]=_*T+M*z+y*ee+b*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],_=l*p-c*h,M=a*p-c*d,y=a*h-l*d,b=o*p-c*u,w=o*h-l*u,v=o*d-a*u;return t*(x*_-m*M+g*y)-i*(f*_-m*b+g*w)+s*(f*M-x*b+g*v)-r*(f*y-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,M=t*l-s*o,y=t*c-r*o,b=i*l-s*a,w=i*c-r*a,v=s*c-r*l,S=u*x-d*f,T=u*m-h*f,R=u*g-p*f,N=d*m-h*x,U=d*g-p*x,z=h*g-p*m,D=_*z-M*U+y*N+b*R-w*T+v*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/D;return e[0]=(a*z-l*U+c*N)*K,e[1]=(s*U-i*z-r*N)*K,e[2]=(x*v-m*w+g*b)*K,e[3]=(h*w-d*v-p*b)*K,e[4]=(l*R-o*z-c*T)*K,e[5]=(t*z-s*R+r*T)*K,e[6]=(m*y-f*v-g*M)*K,e[7]=(u*v-h*y+p*M)*K,e[8]=(o*U-a*R+c*S)*K,e[9]=(i*R-t*U-r*S)*K,e[10]=(f*w-x*y+g*_)*K,e[11]=(d*y-u*w-p*_)*K,e[12]=(a*T-o*N-l*S)*K,e[13]=(t*N-i*T+s*S)*K,e[14]=(x*M-f*b-m*_)*K,e[15]=(u*b-d*M+h*_)*K,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,x=o*u,m=o*d,g=a*d,_=l*c,M=l*u,y=l*d,b=i.x,w=i.y,v=i.z;return s[0]=(1-(x+g))*b,s[1]=(p+y)*b,s[2]=(f-M)*b,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(h+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(f+M)*v,s[9]=(m-_)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xo.set(s[0],s[1],s[2]).length(),a=Xo.set(s[4],s[5],s[6]).length(),l=Xo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ps.copy(this);let c=1/o,u=1/a,d=1/l;return ps.elements[0]*=c,ps.elements[1]*=c,ps.elements[2]*=c,ps.elements[4]*=u,ps.elements[5]*=u,ps.elements[6]*=u,ps.elements[8]*=d,ps.elements[9]*=d,ps.elements[10]*=d,t.setFromRotationMatrix(ps),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=is,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===is)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ua)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=is,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===is)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===ua)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xo=new P,ps=new _t,Dv=new P(0,0,0),Nv=new P(1,1,1),Cr=new P,xc=new P,Hi=new P,s0=new _t,r0=new un,Gn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return s0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r0.setFromEuler(this),this.setFromQuaternion(r0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ov=0,o0=new P,$o=new un,ir=new _t,yc=new P,Va=new P,Uv=new P,Fv=new un,a0=new P(1,0,0),l0=new P(0,1,0),c0=new P(0,0,1),u0={type:"added"},kv={type:"removed"},qo={type:"childadded",child:null},bh={type:"childremoved",child:null},dn=class n extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Gn,i=new un,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ct}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(c0,e)}translateOnAxis(e,t){return o0.copy(e).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(c0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Va,yc,this.up):ir.lookAt(yc,Va,this.up),this.quaternion.setFromRotationMatrix(ir),s&&(ir.extractRotation(s.matrixWorld),$o.setFromRotationMatrix(ir),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u0),qo.child=e,this.dispatchEvent(qo),qo.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kv),bh.child=e,this.dispatchEvent(bh),bh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u0),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,Fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new P(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Mh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Zt.workingColorSpace){if(e=wf(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Mh(o,r,e+1/3),this.g=Mh(o,r,e),this.b=Mh(o,r,e-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(e,t=oi){function i(r){r!==void 0&&parseFloat(r)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let i=bm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Zt.workingToColorSpace(gi.copy(this),e),Math.round(Ft(gi.r*255,0,255))*65536+Math.round(Ft(gi.g*255,0,255))*256+Math.round(Ft(gi.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(gi.copy(this),t);let i=gi.r,s=gi.g,r=gi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(gi.copy(this),t),e.r=gi.r,e.g=gi.g,e.b=gi.b,e}getStyle(e=oi){Zt.workingToColorSpace(gi.copy(this),e);let t=gi.r,i=gi.g,s=gi.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(vc);let i=tl(Pr.h,vc.h,t),s=tl(Pr.s,vc.s,t),r=tl(Pr.l,vc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gi=new ze;ze.NAMES=bm;var go=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ms=new P,sr=new P,Sh=new P,rr=new P,Yo=new P,Ko=new P,d0=new P,wh=new P,Eh=new P,Th=new P,Ah=new mn,Rh=new mn,Ch=new mn,lr=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ms.subVectors(e,t),s.cross(ms);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ms.subVectors(s,t),sr.subVectors(i,t),Sh.subVectors(e,t);let o=ms.dot(ms),a=ms.dot(sr),l=ms.dot(Sh),c=sr.dot(sr),u=sr.dot(Sh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rr.x),l.addScaledVector(o,rr.y),l.addScaledVector(a,rr.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Rh,r.y),o.addScaledVector(Ch,r.z),o}static isFrontFacing(e,t,i,s){return ms.subVectors(i,t),sr.subVectors(e,t),ms.cross(sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ms.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),ms.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yo.subVectors(s,i),Ko.subVectors(r,i),wh.subVectors(e,i);let l=Yo.dot(wh),c=Ko.dot(wh);if(l<=0&&c<=0)return t.copy(i);Eh.subVectors(e,s);let u=Yo.dot(Eh),d=Ko.dot(Eh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Yo,o);Th.subVectors(e,r);let p=Yo.dot(Th),f=Ko.dot(Th);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Ko,a);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return d0.subVectors(r,s),a=(d-u)/(d-u+(p-f)),t.copy(s).addScaledVector(d0,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(Yo,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=gs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gs):gs.fromBufferAttribute(r,o),gs.applyMatrix4(e.matrixWorld),this.expandByPoint(gs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_c.copy(i.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gs),gs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),bc.subVectors(this.max,Wa),Zo.subVectors(e.a,Wa),Jo.subVectors(e.b,Wa),jo.subVectors(e.c,Wa),Ir.subVectors(Jo,Zo),Lr.subVectors(jo,Jo),co.subVectors(Zo,jo);let t=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-co.z,co.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,co.z,0,-co.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-co.y,co.x,0];return!Ph(t,Zo,Jo,jo,bc)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,Zo,Jo,jo,bc))?!1:(Mc.crossVectors(Ir,Lr),t=[Mc.x,Mc.y,Mc.z],Ph(t,Zo,Jo,jo,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new P,new P,new P,new P,new P,new P,new P,new P],gs=new P,_c=new Ei,Zo=new P,Jo=new P,jo=new P,Ir=new P,Lr=new P,co=new P,Wa=new P,bc=new P,Mc=new P,uo=new P;function Ph(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){uo.fromArray(n,r);let a=s.x*Math.abs(uo.x)+s.y*Math.abs(uo.y)+s.z*Math.abs(uo.z),l=e.dot(uo),c=t.dot(uo),u=i.dot(uo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var On=new P,Sc=new Ae,zv=0,ei=class extends xs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mf,this.updateRanges=[],this.gpuType=rs,this.version=0,this._normalizationScale=e!==void 0?vd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyMatrix3(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.array)}};var ul=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var dl=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hv=new Ei,Xa=new P,Ih=new P,ss=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);let t=Xa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Ih)),this.expandByPoint(Xa.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gv=0,ns=new _t,Lh=new dn,Qo=new P,Gi=new Ei,$a=new Ei,jn=new P,$t=class n extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?dl:ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ns.makeRotationFromQuaternion(e),this.applyMatrix4(ns),this}rotateX(e){return ns.makeRotationX(e),this.applyMatrix4(ns),this}rotateY(e){return ns.makeRotationY(e),this.applyMatrix4(ns),this}rotateZ(e){return ns.makeRotationZ(e),this.applyMatrix4(ns),this}translate(e,t,i){return ns.makeTranslation(e,t,i),this.applyMatrix4(ns),this}scale(e,t,i){return ns.makeScale(e,t,i),this.applyMatrix4(ns),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Gi.setFromBufferAttribute(r),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Gi.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Gi.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Gi.min),this.boundingBox.expandByPoint(Gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(jn.addVectors(Gi.min,$a.min),Gi.expandByPoint(jn),jn.addVectors(Gi.max,$a.max),Gi.expandByPoint(jn)):(Gi.expandByPoint($a.min),Gi.expandByPoint($a.max))}Gi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),jn.add(Qo)),s=Math.max(s,i.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let T=0;T<i.count;T++)a[T]=new P,l[T]=new P;let u=new P,d=new P,h=new P,p=new Ae,f=new Ae,x=new Ae,m=new P,g=new P;function _(T,R,N){c[T]=c[R]=c[N]=1,u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,N),p.fromBufferAttribute(r,T),f.fromBufferAttribute(r,R),x.fromBufferAttribute(r,N),d.sub(u),h.sub(u),f.sub(p),x.sub(p);let U=1/(f.x*x.y-x.x*f.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(U),a[T].add(m),a[R].add(m),a[N].add(m),l[T].add(g),l[R].add(g),l[N].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,R=M.length;T<R;++T){let N=M[T],U=N.start,z=N.count;for(let D=U,K=U+z;D<K;D+=3)_(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new P,b=new P,w=new P,v=new P;function S(T){w.fromBufferAttribute(s,T),v.copy(w);let R=a[T];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),b.crossVectors(v,R);let U=b.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,U)}for(let T=0,R=i.count;T<R;++T)c[T]&&S(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jn.fromBufferAttribute(e,t),jn.normalize(),e.setXYZ(t,jn.x,jn.y,jn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new ei(h,u,d)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mf,this.updateRanges=[],this.version=0,this.uuid=vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=h0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=h0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function h0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=vr()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Mi=new P,ga=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?vd(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix4(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.applyNormalMatrix(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.transformDirection(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ll("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ll("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Af(e,this.data.array)}},Dh=new P,Vv=new P,Wv=new Ct,Si=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Dh.subVectors(i,t).cross(Vv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wv.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Xv=0,ys=class extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ys,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=Gr,this.blendEquation=wo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ws=class extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ea,qa=new P,ta=new P,na=new P,ia=new Ae,Ya=new Ae,Mm=new _t,wc=new P,Ka=new P,Ec=new P,f0=new Ae,Nh=new Ae,p0=new Ae,hr=class extends dn{constructor(e=new Ws){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new $t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hl(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new ga(i,3,0,!1)),ea.setAttribute("uv",new ga(i,2,3,!1))}this.geometry=ea,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),Mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Tc(wc.set(-.5,-.5,0),na,o,ta,s,r),Tc(Ka.set(.5,-.5,0),na,o,ta,s,r),Tc(Ec.set(.5,.5,0),na,o,ta,s,r),f0.set(0,0),Nh.set(1,0),p0.set(1,1);let a=e.ray.intersectTriangle(wc,Ka,Ec,!1,qa);if(a===null&&(Tc(Ka.set(-.5,.5,0),na,o,ta,s,r),Nh.set(0,1),a=e.ray.intersectTriangle(wc,Ec,Ka,!1,qa),a===null))return;let l=e.ray.origin.distanceTo(qa);l<e.near||l>e.far||t.push({distance:l,point:qa.clone(),uv:lr.getInterpolation(qa,wc,Ka,Ec,f0,Nh,p0,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Tc(n,e,t,i,s,r){ia.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ya.x=r*ia.x-s*ia.y,Ya.y=s*ia.x+r*ia.y):Ya.copy(ia),n.copy(e),n.x+=Ya.x,n.y+=Ya.y,n.applyMatrix4(Mm)}var ar=new P,Oh=new P,Ac=new P,Rc=new P,fr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Oh.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),Rc.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ac),a=Rc.dot(this.direction),l=-Rc.dot(Ac),c=Rc.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Oh).addScaledVector(Ac,h),p}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);let i=ar.dot(this.direction),s=ar.dot(ar)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,M=i.z-o.z,y=Math.abs(l),b=Math.abs(c),w=Math.abs(u),v,S,T,R,N,U,z,D,K,te,ee,ne;if(y>=b&&y>=w?(T=l,U=d,K=f,ne=g,l>=0?(v=c,S=u,R=h,N=p,z=x,D=m,te=_,ee=M):(v=u,S=c,R=p,N=h,z=m,D=x,te=M,ee=_)):b>=w?(T=c,U=h,K=x,ne=_,c>=0?(v=u,S=l,R=p,N=d,z=m,D=f,te=M,ee=g):(v=l,S=u,R=d,N=p,z=f,D=m,te=g,ee=M)):(T=u,U=p,K=m,ne=M,u>=0?(v=l,S=c,R=d,N=h,z=f,D=x,te=g,ee=_):(v=c,S=l,R=h,N=d,z=x,D=f,te=_,ee=g)),T===0)return null;let X=v/T,W=S/T,O=1/T,Z=R-X*U,Y=N-W*U,q=z-X*K,le=D-W*K,he=te-X*ne,ie=ee-W*ne,fe=he*le-ie*q,Le=Z*ie-Y*he,tt=q*Y-le*Z;if(s){if(fe<0||Le<0||tt<0)return null}else if((fe<0||Le<0||tt<0)&&(fe>0||Le>0||tt>0))return null;let He=fe+Le+tt;if(He===0)return null;let Ze=O*(fe*U+Le*K+tt*ne);return(He>0?Ze<0:Ze>0)?null:this.at(Ze/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},m0=new _t,ho=new fr,Cc=new ss,g0=new P,Pc=new P,Ic=new P,Lc=new P,Uh=new P,Dc=new P,x0=new P,Nc=new P,nt=class extends dn{constructor(e=new $t,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Uh.fromBufferAttribute(d,e),o?Dc.addScaledVector(Uh,u):Dc.addScaledVector(Uh.sub(t),u))}t.add(Dc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(r),ho.copy(e.ray).recast(e.near),!(Cc.containsPoint(ho.origin)===!1&&(ho.intersectSphere(Cc,g0)===null||ho.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(r).invert(),ho.copy(e.ray).applyMatrix4(m0),!(i.boundingBox!==null&&ho.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ho)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,b=M;y<b;y+=3){let w=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);s=Oc(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Oc(this,o,e,i,c,u,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,b=M;y<b;y+=3){let w=y,v=y+1,S=y+2;s=Oc(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,M=m+1,y=m+2;s=Oc(this,o,e,i,c,u,d,_,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $v(n,e,t,i,s,r,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qs,a),l===null)return null;Nc.copy(a),Nc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Nc);return c<t.near||c>t.far?null:{distance:c,point:Nc.clone(),object:n}}function Oc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Pc),n.getVertexPosition(l,Ic),n.getVertexPosition(c,Lc);let u=$v(n,e,t,i,Pc,Ic,Lc,x0);if(u){let d=new P;lr.getBarycoord(x0,Pc,Ic,Lc,d),s&&(u.uv=lr.getInterpolatedAttribute(s,a,l,c,d,new Ae)),r&&(u.uv1=lr.getInterpolatedAttribute(r,a,l,c,d,new Ae)),o&&(u.normal=lr.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};lr.getNormal(Pc,Ic,Lc,h.normal),u.face=h,u.barycoord=d}return u}var fl=class extends wi{constructor(e=null,t=1,i=1,s,r,o,a,l,c=ti,u=ti,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class extends ei{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new _t,y0=new _t,Uc=[],v0=new Ei,qv=new _t,Za=new nt,Ja=new ss,Vn=class extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),v0.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(v0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),Ja.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(Ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Za.geometry=this.geometry,Za.material=this.material,Za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(i),e.ray.intersectsSphere(Ja)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sa),y0.multiplyMatrices(i,sa),Za.matrixWorld=y0,Za.raycast(e,Uc);for(let o=0,a=Uc.length;o<a;o++){let l=Uc[o];l.instanceId=r,l.object=this,t.push(l)}Uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fl(new Float32Array(s*this.count),s,this.count,Fu,rs));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fo=new ss,Yv=new Ae(.5,.5),Fc=new P,Nr=class{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=is,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],M=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-o,p-u,g-f,b-_).normalize(),s[1].setComponents(c+o,p+u,g+f,b+_).normalize(),s[2].setComponents(c+a,p+d,g+x,b+M).normalize(),s[3].setComponents(c-a,p-d,g-x,b-M).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,g-m,b-y).normalize();else if(s[4].setComponents(c-l,p-h,g-m,b-y).normalize(),t===is)s[5].setComponents(c+l,p+h,g+m,b+y).normalize();else if(t===ua)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(e){fo.center.set(0,0,0);let t=Yv.distanceTo(e.center);return fo.radius=.7071067811865476+t,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Fc.x=s.normal.x>0?e.max.x:e.min.x,Fc.y=s.normal.y>0?e.max.y:e.min.y,Fc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_0=new _t,au=class n{constructor(){this.coordinateSystem=is,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];_0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Nr),i[s].setFromProjectionMatrix(_0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Nr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Or=class extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lu=new P,cu=new P,b0=new _t,ja=new fr,kc=new ss,Fh=new P,M0=new P,uu=class extends dn{constructor(e=new $t,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)lu.fromBufferAttribute(t,s-1),cu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=lu.distanceTo(cu);e.setAttribute("lineDistance",new ft(i,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(s),kc.radius+=r,e.ray.intersectsSphere(kc)===!1)return;b0.copy(s).invert(),ja.copy(e.ray).applyMatrix4(b0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=u.getX(x),_=u.getX(x+1),M=Bc(this,e,ja,l,g,_,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(p),g=Bc(this,e,ja,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Bc(this,e,ja,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Bc(this,e,ja,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(lu.fromBufferAttribute(a,s),cu.fromBufferAttribute(a,r),t.distanceSqToSegment(lu,cu,Fh,M0)>i)return;Fh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fh);if(!(c<e.near||c>e.far))return{distance:c,point:M0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var S0=new P,w0=new P,xo=class extends uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)S0.fromBufferAttribute(t,s),w0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+S0.distanceTo(w0);e.setAttribute("lineDistance",new ft(i,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var du=class extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},E0=new _t,$h=new fr,zc=new ss,Hc=new P,pl=class extends dn{constructor(e=new $t,t=new du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(s),zc.radius+=r,e.ray.intersectsSphere(zc)===!1)return;E0.copy(s).invert(),$h.copy(e.ray).applyMatrix4(E0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=h,x=p;f<x;f++){let m=c.getX(f);Hc.fromBufferAttribute(d,m),T0(Hc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=h,x=p;f<x;f++)Hc.fromBufferAttribute(d,f),T0(Hc,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function T0(n,e,t,i,s,r,o){let a=$h.distanceSqToPoint(n);if(a<t){let l=new P;$h.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ml=class extends wi{constructor(e=[],t=Eo,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends wi{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pr=class extends wi{constructor(e,t,i=bs,s,r,o,a=ti,l=ti,c,u=dr,d=1){if(u!==dr&&u!==xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xl=class extends pr{constructor(e,t=bs,i=Eo,s,r,o=ti,a=ti,l,c=dr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yl=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class n extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function f(x,m,g,_,M,y,b,w,v,S,T){let R=y/v,N=b/S,U=y/2,z=b/2,D=w/2,K=v+1,te=S+1,ee=0,ne=0,X=new P;for(let W=0;W<te;W++){let O=W*N-z;for(let Z=0;Z<K;Z++){let Y=Z*R-U;X[x]=Y*_,X[m]=O*M,X[g]=D,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=w>0?1:-1,u.push(X.x,X.y,X.z),d.push(Z/v),d.push(1-W/S),ee+=1}}for(let W=0;W<S;W++)for(let O=0;O<v;O++){let Z=h+O+K*W,Y=h+O+K*(W+1),q=h+(O+1)+K*(W+1),le=h+(O+1)+K*W;l.push(Z,Y,le),l.push(Y,q,le),ne+=6}a.addGroup(p,ne,T),p+=ne,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class n extends $t{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,p=2*d+h,f=i*2+r,x=s+1,m=new P,g=new P;for(let _=0;_<=f;_++){let M=0,y=0,b=0,w=0;if(_<=i){let T=_/i,R=T*Math.PI/2;y=-u-e*Math.cos(R),b=e*Math.sin(R),w=-e*Math.cos(R),M=T*d}else if(_<=i+r){let T=(_-i)/r;y=-u+T*t,b=e,w=0,M=d+T*h}else{let T=(_-i-r)/i,R=T*Math.PI/2;y=u+e*Math.sin(R),b=e*Math.cos(R),w=e*Math.sin(R),M=d+h+T*d}let v=Math.max(0,Math.min(1,M/p)),S=0;_===0?S=.5/s:_===f&&(S=-.5/s);for(let T=0;T<=s;T++){let R=T/s,N=R*Math.PI*2,U=Math.sin(N),z=Math.cos(N);g.x=-b*z,g.y=y,g.z=b*U,a.push(g.x,g.y,g.z),m.set(-b*z,w,b*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,v)}if(_>0){let T=(_-1)*x;for(let R=0;R<s;R++){let N=T+R,U=T+R+1,z=_*x+R,D=_*x+R+1;o.push(N,U,z),o.push(U,D,z)}}}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Un=class n extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends $t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],f=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function _(){let y=new P,b=new P,w=0,v=(t-e)/i;for(let S=0;S<=r;S++){let T=[],R=S/r,N=R*(t-e)+e;for(let U=0;U<=s;U++){let z=U/s,D=z*l+a,K=Math.sin(D),te=Math.cos(D);b.x=N*K,b.y=-R*i+m,b.z=N*te,d.push(b.x,b.y,b.z),y.set(K,v,te).normalize(),h.push(y.x,y.y,y.z),p.push(z,1-R),T.push(f++)}x.push(T)}for(let S=0;S<s;S++)for(let T=0;T<r;T++){let R=x[T][S],N=x[T+1][S],U=x[T+1][S+1],z=x[T][S+1];(e>0||T!==0)&&(u.push(R,N,z),w+=3),(t>0||T!==r-1)&&(u.push(N,U,z),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){let b=f,w=new Ae,v=new P,S=0,T=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),f++;let N=f;for(let U=0;U<=s;U++){let D=U/s*l+a,K=Math.cos(D),te=Math.sin(D);v.x=T*te,v.y=m*R,v.z=T*K,d.push(v.x,v.y,v.z),h.push(0,R,0),w.x=K*.5+.5,w.y=te*.5*R+.5,p.push(w.x,w.y),f++}for(let U=0;U<s;U++){let z=b+U,D=N+U;y===!0?u.push(D,D+1,z):u.push(D+1,D,z),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){wt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new _t;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Ft(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ft(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ya=class extends Vi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hu=class extends ya{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var A0=new P,R0=new P,kh=new Rf,Bh=new Rf,zh=new Rf,fu=class extends Vi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(R0.subVectors(s[0],s[1]).add(s[0]),c=R0);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(A0.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=A0),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),kh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,x,m),Bh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,x,m),zh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(kh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Bh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),zh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(kh.calc(l),Bh.calc(l),zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function C0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Kv(n,e){let t=1-n;return t*t*e}function Zv(n,e){return 2*(1-n)*n*e}function Jv(n,e){return n*n*e}function nl(n,e,t,i){return Kv(n,e)+Zv(n,t)+Jv(n,i)}function jv(n,e){let t=1-n;return t*t*t*e}function Qv(n,e){let t=1-n;return 3*t*t*n*e}function e_(n,e){return 3*(1-n)*n*n*e}function t_(n,e){return n*n*n*e}function il(n,e,t,i,s){return jv(n,e)+Qv(n,t)+e_(n,i)+t_(n,s)}var vl=class extends Vi{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(il(e,s.x,r.x,o.x,a.x),il(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pu=class extends Vi{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(il(e,s.x,r.x,o.x,a.x),il(e,s.y,r.y,o.y,a.y),il(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_l=class extends Vi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Vi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Vi{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nl(e,s.x,r.x,o.x),nl(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Vi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(nl(e,s.x,r.x,o.x),nl(e,s.y,r.y,o.y),nl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ml=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(C0(a,l.x,c.x,u.x,d.x),C0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},mu=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:fu,CubicBezierCurve:vl,CubicBezierCurve3:pu,EllipseCurve:ya,LineCurve:_l,LineCurve3:yo,QuadraticBezierCurve:bl,QuadraticBezierCurve3:vo,SplineCurve:Ml}),va=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new mu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},mr=class extends va{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new _l(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new bl(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new vl(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ml(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ya(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vs=class extends mr{constructor(e){super(e),this.uuid=vr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new mr().fromJSON(s))}return this}};function n_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Sm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=a_(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let p=n[h],f=n[h+1];p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Sl(r,o,t,a,l,c,0),o}function Sm(n,e,t,i,s){let r;if(s===y_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=P0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=P0(o/i|0,n[o],n[o+1],r);return r&&_a(r,r.next)&&(El(r),r=r.next),r}function _o(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_a(t,t.next)||An(t.prev,t,t.next)===0)){if(El(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Sl(n,e,t,i,s,r,o){if(!n)return;!o&&r&&h_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?s_(n,i,s,r):i_(n)){e.push(l.i,n.i,c.i),El(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=r_(_o(n),e),Sl(n,e,t,i,s,r,2)):o===2&&o_(n,e,t,i,s,r):Sl(_o(n),e,t,i,s,r,1);break}}}function i_(n){let e=n.prev,t=n,i=n.next;if(An(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=d&&f.y<=p&&Qa(s,a,r,l,o,c,f.x,f.y)&&An(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function s_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(An(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,l,c),f=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=qh(p,f,e,t,i),_=qh(x,m,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=g&&y&&y.z<=_;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==s&&M!==o&&Qa(a,u,l,d,c,h,M.x,M.y)&&An(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&Qa(a,u,l,d,c,h,y.x,y.y)&&An(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=m&&M!==s&&M!==o&&Qa(a,u,l,d,c,h,M.x,M.y)&&An(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&Qa(a,u,l,d,c,h,y.x,y.y)&&An(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function r_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!_a(i,s)&&Em(i,t,t.next,s)&&wl(i,s)&&wl(s,i)&&(e.push(i.i,t.i,s.i),El(t),El(t.next),t=n=s),t=t.next}while(t!==n);return _o(t)}function o_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&m_(o,a)){let l=Tm(o,a);o=_o(o,o.next),l=_o(l,l.next),Sl(o,e,t,i,s,r,0),Sl(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function a_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Sm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(p_(c))}s.sort(l_);for(let r=0;r<s.length;r++)t=c_(s[r],t);return t}function l_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function c_(n,e){let t=u_(n,e);if(!t)return e;let i=Tm(t,n);return _o(i,i.next),_o(t,t.next)}function u_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(_a(n,t))return t;do{if(_a(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&wm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);wl(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&d_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function d_(n,e){return An(n.prev,n,e.prev)<0&&An(e.next,n,n.next)<0}function h_(n,e,t,i){let s=n;do s.z===0&&(s.z=qh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,f_(s)}function f_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function qh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function p_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Qa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wm(n,e,t,i,s,r,o,a)}function m_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!g_(n,e)&&(wl(n,e)&&wl(e,n)&&x_(n,e)&&(An(n.prev,n,e.prev)||An(n,e.prev,e))||_a(n,e)&&An(n.prev,n,n.next)>0&&An(e.prev,e,e.next)>0)}function An(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _a(n,e){return n.x===e.x&&n.y===e.y}function Em(n,e,t,i){let s=Vc(An(n,e,t)),r=Vc(An(n,e,i)),o=Vc(An(t,i,n)),a=Vc(An(t,i,e));return!!(s!==r&&o!==a||s===0&&Gc(n,t,e)||r===0&&Gc(n,i,e)||o===0&&Gc(t,n,i)||a===0&&Gc(t,e,i))}function Gc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vc(n){return n>0?1:n<0?-1:0}function g_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Em(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wl(n,e){return An(n.prev,n,n.next)<0?An(n,e,n.next)>=0&&An(n,n.prev,e)>=0:An(n,e,n.prev)<0||An(n,n.next,e)<0}function x_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Tm(n,e){let t=Yh(n.i,n.x,n.y),i=Yh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function P0(n,e,t,i){let s=Yh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function El(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Yh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Kh=class{static triangulate(e,t,i=2){return n_(e,t,i)}},po=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];I0(e),L0(i,e);let o=e.length;t.forEach(I0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,L0(i,t[l]);let a=Kh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function I0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function L0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var $s=class n extends $t{constructor(e=new vs([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:v_,M,y=!1,b,w,v,S;if(g){M=g.getSpacedPoints(u),y=!0,h=!1;let me=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(u,me),w=new P,v=new P,S=new P}h||(m=0,p=0,f=0,x=0);let T=a.extractPoints(c),R=T.shape,N=T.holes;if(!po.isClockWise(R)){R=R.reverse();for(let me=0,V=N.length;me<V;me++){let B=N[me];po.isClockWise(B)&&(N[me]=B.reverse())}}function z(me){let B=10000000000000001e-36,re=me[0];for(let G=1;G<=me.length;G++){let Re=G%me.length,Fe=me[Re],H=Fe.x-re.x,pe=Fe.y-re.y,Te=H*H+pe*pe,k=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(re.x),Math.abs(re.y)),et=B*k*k;if(Te<=et){me.splice(Re,1),G--;continue}re=Fe}}z(R),N.forEach(z);let D=N.length,K=R;for(let me=0;me<D;me++){let V=N[me];R=R.concat(V)}function te(me,V,B){return V||Tt("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(V,B)}let ee=R.length;function ne(me,V,B){let re,G,Re,Fe=me.x-V.x,H=me.y-V.y,pe=B.x-me.x,Te=B.y-me.y,k=Fe*Fe+H*H,et=Fe*Te-H*pe;if(Math.abs(et)>Number.EPSILON){let pt=Math.sqrt(k),Mt=Math.sqrt(pe*pe+Te*Te),Ce=V.x-H/pt,A=V.y+Fe/pt,J=B.x-Te/Mt,de=B.y+pe/Mt,I=((J-Ce)*Te-(de-A)*pe)/(Fe*Te-H*pe);re=Ce+Fe*I-me.x,G=A+H*I-me.y;let E=re*re+G*G;if(E<=2)return new Ae(re,G);Re=Math.sqrt(E/2)}else{let pt=!1;Fe>Number.EPSILON?pe>Number.EPSILON&&(pt=!0):Fe<-Number.EPSILON?pe<-Number.EPSILON&&(pt=!0):Math.sign(H)===Math.sign(Te)&&(pt=!0),pt?(re=-H,G=Fe,Re=Math.sqrt(k)):(re=Fe,G=H,Re=Math.sqrt(k/2))}return new Ae(re/Re,G/Re)}let X=[];for(let me=0,V=K.length,B=V-1,re=me+1;me<V;me++,B++,re++)B===V&&(B=0),re===V&&(re=0),X[me]=ne(K[me],K[B],K[re]);let W=[],O,Z=X.concat();for(let me=0,V=D;me<V;me++){let B=N[me];O=[];for(let re=0,G=B.length,Re=G-1,Fe=re+1;re<G;re++,Re++,Fe++)Re===G&&(Re=0),Fe===G&&(Fe=0),O[re]=ne(B[re],B[Re],B[Fe]);W.push(O),Z=Z.concat(O)}let Y;if(m===0)Y=po.triangulateShape(K,N);else{let me=[],V=[];for(let B=0;B<m;B++){let re=B/m,G=p*Math.cos(re*Math.PI/2),Re=f*Math.sin(re*Math.PI/2)+x;for(let Fe=0,H=K.length;Fe<H;Fe++){let pe=te(K[Fe],X[Fe],Re);Le(pe.x,pe.y,-G),re===0&&me.push(pe)}for(let Fe=0,H=D;Fe<H;Fe++){let pe=N[Fe];O=W[Fe];let Te=[];for(let k=0,et=pe.length;k<et;k++){let pt=te(pe[k],O[k],Re);Le(pt.x,pt.y,-G),re===0&&Te.push(pt)}re===0&&V.push(Te)}}Y=po.triangulateShape(me,V)}let q=Y.length,le=f+x;for(let me=0;me<ee;me++){let V=h?te(R[me],Z[me],le):R[me];y?(v.copy(b.normals[0]).multiplyScalar(V.x),w.copy(b.binormals[0]).multiplyScalar(V.y),S.copy(M[0]).add(v).add(w),Le(S.x,S.y,S.z)):Le(V.x,V.y,0)}for(let me=1;me<=u;me++)for(let V=0;V<ee;V++){let B=h?te(R[V],Z[V],le):R[V];y?(v.copy(b.normals[me]).multiplyScalar(B.x),w.copy(b.binormals[me]).multiplyScalar(B.y),S.copy(M[me]).add(v).add(w),Le(S.x,S.y,S.z)):Le(B.x,B.y,d/u*me)}for(let me=m-1;me>=0;me--){let V=me/m,B=p*Math.cos(V*Math.PI/2),re=f*Math.sin(V*Math.PI/2)+x;for(let G=0,Re=K.length;G<Re;G++){let Fe=te(K[G],X[G],re);Le(Fe.x,Fe.y,d+B)}for(let G=0,Re=N.length;G<Re;G++){let Fe=N[G];O=W[G];for(let H=0,pe=Fe.length;H<pe;H++){let Te=te(Fe[H],O[H],re);y?Le(Te.x,Te.y+M[u-1].y,M[u-1].x+B):Le(Te.x,Te.y,d+B)}}}he(),ie();function he(){let me=s.length/3;if(h){let V=0,B=ee*V;for(let re=0;re<q;re++){let G=Y[re];tt(G[2]+B,G[1]+B,G[0]+B)}V=u+m*2,B=ee*V;for(let re=0;re<q;re++){let G=Y[re];tt(G[0]+B,G[1]+B,G[2]+B)}}else{for(let V=0;V<q;V++){let B=Y[V];tt(B[2],B[1],B[0])}for(let V=0;V<q;V++){let B=Y[V];tt(B[0]+ee*u,B[1]+ee*u,B[2]+ee*u)}}i.addGroup(me,s.length/3-me,0)}function ie(){let me=s.length/3,V=0;fe(K,V),V+=K.length;for(let B=0,re=N.length;B<re;B++){let G=N[B];fe(G,V),V+=G.length}i.addGroup(me,s.length/3-me,1)}function fe(me,V){let B=me.length;for(;--B>=0;){let re=B,G=B-1;G<0&&(G=me.length-1);for(let Re=0,Fe=u+m*2;Re<Fe;Re++){let H=ee*Re,pe=ee*(Re+1),Te=V+re+H,k=V+G+H,et=V+G+pe,pt=V+re+pe;He(Te,k,et,pt)}}}function Le(me,V,B){l.push(me),l.push(V),l.push(B)}function tt(me,V,B){Ze(me),Ze(V),Ze(B);let re=s.length/3,G=_.generateTopUV(i,s,re-3,re-2,re-1);Ke(G[0]),Ke(G[1]),Ke(G[2])}function He(me,V,B,re){Ze(me),Ze(V),Ze(re),Ze(V),Ze(B),Ze(re);let G=s.length/3,Re=_.generateSideWallUV(i,s,G-6,G-3,G-2,G-1);Ke(Re[0]),Ke(Re[1]),Ke(Re[3]),Ke(Re[1]),Ke(Re[2]),Ke(Re[3])}function Ze(me){s.push(l[me*3+0]),s.push(l[me*3+1]),s.push(l[me*3+2])}function Ke(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return __(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new mu[s.type]().fromJSON(s)),new n(i,e.options)}},v_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-d),new Ae(h,1-f),new Ae(x,1-g)]:[new Ae(a,1-l),new Ae(u,1-d),new Ae(p,1-f),new Ae(m,1-g)]}};function __(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Tl=class n extends $t{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new P,h=new Ae,p=new P,f=new P,x=new P,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=t;_++){let M=i+_*u*s,y=Math.sin(M),b=Math.cos(M);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*b,o.push(d.x,d.y,d.z),h.x=_/t,h.y=w/(e.length-1),a.push(h.x,h.y);let v=l[3*w+0]*y,S=l[3*w+1],T=l[3*w+0]*b;c.push(v,S,T)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,b=y,w=y+e.length,v=y+e.length+1,S=y+1;r.push(b,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var vt=class n extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let M=0;M<c;M++){let y=M*d-r;f.push(y,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let M=_+c*g,y=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;p.push(M,y,w),p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Cn=class n extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new P,f=new Ae;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let _=g+m,M=_,y=_+i+1,b=_+i+2,w=_+1;a.push(M,y,w),a.push(y,b,w)}}this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Fn=class n extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new P,h=new P,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],M=g/i,y=o+M*a,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let T=S/t,R=s+T*r;d.x=-w*Math.cos(R),d.y=b,d.z=w*Math.sin(R),f.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(T+v,1-M),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let M=u[g][_+1],y=u[g][_],b=u[g+1][_],w=u[g+1][_+1];(g!==0||o>0)&&p.push(M,y,w),(g!==i-1||l<Math.PI)&&p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ti=class n extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new P,p=new P,f=new P;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,M=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Al=class n extends $t{constructor(e=new vo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Ae,u=new P,d=[],h=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(p,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),_(),g()}function m(M){u=e.getPointAt(M/t,u);let y=o.normals[M],b=o.binormals[M];for(let w=0;w<=s;w++){let v=w/s*Math.PI*2,S=Math.sin(v),T=-Math.cos(v);l.x=T*y.x+S*b.x,l.y=T*y.y+S*b.y,l.z=T*y.z+S*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let b=(s+1)*(M-1)+(y-1),w=(s+1)*M+(y-1),v=(s+1)*M+y,S=(s+1)*(M-1)+y;f.push(b,w,S),f.push(w,v,S)}}function _(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new mu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ao(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(D0(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(D0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yi(n){let e={};for(let t=0;t<n.length;t++){let i=Ao(n[t]);for(let s in i)e[s]=i[s]}return e}function D0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function b_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}var _d={clone:Ao,merge:yi},M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new mn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Et=class extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rl=class extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return mo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){mo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var gu=class extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xu=class extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ra(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ur=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yu=class extends Ur{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wh:r=e,a=2*t-i;break;case Xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:o=e,l=2*i-t;break;case Xh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),x=f*f,m=x*f,g=-h*m+2*h*x-h*f,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*f+1,M=(-1-p)*m+(1.5+p)*x+.5*f,y=p*m-p*x;for(let b=0;b!==a;++b)r[b]=g*o[u+b]+_*o[c+b]+M*o[l+b]+y*o[d+b];return r}},vu=class extends Ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},_u=class extends Ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bu=class extends Ur{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(s-t),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let h=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*h+f*2,_=d[g],M=d[g+1],y=e*h+f*2,b=u[y],w=u[y+1],v=E_(i,t,_,b,s);r[f]=Am(v,x,M,w,m)}return r}};function Am(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function w_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function E_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Am(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=w_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Wi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wc(e.settings)&&(i.settings={inTangents:ra(e.settings.inTangents,Array),outTangents:ra(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case sl:t=this.InterpolantFactoryMethodDiscrete;break;case iu:t=this.InterpolantFactoryMethodLinear;break;case qc:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return wt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sl;case this.InterpolantFactoryMethodLinear:return iu;case this.InterpolantFactoryMethodSmooth:return qc;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Wc(this.settings)&&(N0(this.settings.inTangents,e),N0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wc(this.settings)&&(O0(this.settings.inTangents,e),O0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Tt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Tt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Tt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&pv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Tt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let x=t[d+f];if(x!==t[h+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function N0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function O0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Wi.prototype.ValueTypeName="";Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=iu;var Fr=class extends Wi{constructor(e,t,i){super(e,t,i)}};Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=sl;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Wi{constructor(e,t,i,s){super(e,t,i,s)}};Mu.prototype.ValueTypeName="color";var Su=class extends Wi{constructor(e,t,i,s){super(e,t,i,s)}};Su.prototype.ValueTypeName="number";var wu=class extends Ur{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Cl=class extends Wi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}};Cl.prototype.ValueTypeName="quaternion";Cl.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends Wi{constructor(e,t,i){super(e,t,i)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=sl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends Wi{constructor(e,t,i,s){super(e,t,i,s)}};Eu.prototype.ValueTypeName="vector";var Tu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rm=new Tu,Au=class{constructor(e){this.manager=e!==void 0?e:Rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Au.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pl=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Il=class extends Pl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hh=new _t,U0=new P,F0=new P,Ru=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;U0.setFromMatrixPosition(e.matrixWorld),t.position.copy(U0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xc=new P,$c=new un,Gs=new P,Ll=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,$c,Gs),Gs.x===1&&Gs.y===1&&Gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,$c,Gs.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xc,$c,Gs),Gs.x===1&&Gs.y===1&&Gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,$c,Gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new P,k0=new Ae,B0=new Ae,Qn=class extends Ll{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,k0,B0),t.subVectors(B0,k0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(el*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gr=class extends Ll{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zh=class extends Ru{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends Pl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Dl=class extends $t{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var oa=-90,aa=1,Sa=class extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qn(oa,aa,e,t);s.layers=this.layers,this.add(s);let r=new Qn(oa,aa,e,t);r.layers=this.layers,this.add(r);let o=new Qn(oa,aa,e,t);o.layers=this.layers,this.add(o);let a=new Qn(oa,aa,e,t);a.layers=this.layers,this.add(a);let l=new Qn(oa,aa,e,t);l.layers=this.layers,this.add(l);let c=new Qn(oa,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===is)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Cu=class extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Pf="\\[\\]\\.:\\/",T_=new RegExp("["+Pf+"]","g"),If="[^"+Pf+"]",A_="[^"+Pf.replace("\\.","")+"]",R_=/((?:WC+[\/:])*)/.source.replace("WC",If),C_=/(WCOD+)?/.source.replace("WCOD",A_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),L_=new RegExp("^"+R_+C_+P_+I_+"$"),D_=["material","materials","bones","map"],Jh=class{constructor(e,t,i){let s=i||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(e){let t=L_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=Jh;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var c3=new Float32Array(1);var z0=new _t,bo=class{constructor(e,t,i=0,s=1/0){this.ray=new fr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return z0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(z0),this}intersectObject(e,t=!0,i=[]){return jh(e,this,i,t),i.sort(H0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jh(e[s],this,i,t);return i.sort(H0),i}};function H0(n,e){return n.distance-e.distance}function jh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)jh(r[o],e,t,!0)}}var wa=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Nl=class extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Lf(n,e,t,i){let s=N_(i);switch(t){case xf:return n*e;case Fu:return n*e/s.components*s.byteLength;case ku:return n*e/s.components*s.byteLength;case Vr:return n*e*2/s.components*s.byteLength;case Bu:return n*e*2/s.components*s.byteLength;case yf:return n*e*3/s.components*s.byteLength;case Ms:return n*e*4/s.components*s.byteLength;case zu:return n*e*4/s.components*s.byteLength;case Fl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gu:case Wu:return Math.max(n,16)*Math.max(e,8)/4;case Hu:case Vu:return Math.max(n,8)*Math.max(e,8)/2;case Xu:case $u:case Yu:case Ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qu:case Hl:case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dd:case hd:case fd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pd:case md:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gl:case gd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(n){switch(n){case Ii:case ff:return{byteLength:1,components:1};case Ra:case pf:case Ai:return{byteLength:2,components:1};case Ou:case Uu:return{byteLength:2,components:4};case bs:case Nu:case rs:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function B_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,V_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
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
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,u1=`vec3 transformedNormal = objectNormal;
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
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T1=`#ifdef USE_GRADIENTMAP
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
}`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,I1=`#ifdef USE_ENVMAP
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
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
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
#endif`,F1=`uniform sampler2D dfgLUT;
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
}`,k1=`
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q1=`#if defined( USE_MORPHCOLORS )
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
#endif`,eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`#ifdef USE_MORPHTARGETS
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
#endif`,nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wb=`float getShadowMask() {
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
}`,Eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Db=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform float backgroundBlurriness;
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`uniform float scale;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#define LAMBERT
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define MATCAP
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
}`,sM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,oM=`#define NORMAL
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
}`,aM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,uM=`#define STANDARD
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
}`,dM=`#define TOON
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
}`,hM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 color;
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
}`,xM=`uniform float rotation;
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
}`,yM=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:z_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:V_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:$_,aomap_pars_fragment:q_,batching_pars_vertex:Y_,batching_vertex:K_,begin_vertex:Z_,beginnormal_vertex:J_,bsdfs:j_,iridescence_fragment:Q_,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:s1,color_fragment:r1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:f1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:x1,envmap_common_pars_fragment:y1,envmap_pars_fragment:v1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:I1,envmap_vertex:b1,fog_vertex:M1,fog_pars_vertex:S1,fog_fragment:w1,fog_pars_fragment:E1,gradientmap_pars_fragment:T1,lightmap_pars_fragment:A1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:C1,lights_pars_begin:P1,lights_toon_fragment:L1,lights_toon_pars_fragment:D1,lights_phong_fragment:N1,lights_phong_pars_fragment:O1,lights_physical_fragment:U1,lights_physical_pars_fragment:F1,lights_fragment_begin:k1,lights_fragment_maps:B1,lights_fragment_end:z1,lightprobes_pars_fragment:H1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:$1,map_pars_fragment:q1,map_particle_fragment:Y1,map_particle_pars_fragment:K1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:J1,morphinstance_vertex:j1,morphcolor_vertex:Q1,morphnormal_vertex:eb,morphtarget_pars_vertex:tb,morphtarget_vertex:nb,normal_fragment_begin:ib,normal_fragment_maps:sb,normal_pars_fragment:rb,normal_pars_vertex:ob,normal_vertex:ab,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:db,iridescence_pars_fragment:hb,opaque_fragment:fb,packing:pb,premultiplied_alpha_fragment:mb,project_vertex:gb,dithering_fragment:xb,dithering_pars_fragment:yb,roughnessmap_fragment:vb,roughnessmap_pars_fragment:_b,shadowmap_pars_fragment:bb,shadowmap_pars_vertex:Mb,shadowmap_vertex:Sb,shadowmask_pars_fragment:wb,skinbase_vertex:Eb,skinning_pars_vertex:Tb,skinning_vertex:Ab,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:Pb,tonemapping_fragment:Ib,tonemapping_pars_fragment:Lb,transmission_fragment:Db,transmission_pars_fragment:Nb,uv_pars_fragment:Ob,uv_pars_vertex:Ub,uv_vertex:Fb,worldpos_vertex:kb,background_vert:Bb,background_frag:zb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:Wb,depth_vert:Xb,depth_frag:$b,distance_vert:qb,distance_frag:Yb,equirect_vert:Kb,equirect_frag:Zb,linedashed_vert:Jb,linedashed_frag:jb,meshbasic_vert:Qb,meshbasic_frag:eM,meshlambert_vert:tM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:rM,meshnormal_frag:oM,meshphong_vert:aM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:dM,meshtoon_frag:hM,points_vert:fM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:xM,sprite_frag:yM},je={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Js={basic:{uniforms:yi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:yi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:yi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:yi([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:yi([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new ze(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:yi([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:yi([je.points,je.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:yi([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:yi([je.common,je.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:yi([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:yi([je.sprite,je.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:yi([je.common,je.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:yi([je.lights,je.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Js.physical={uniforms:yi([Js.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var bd={r:0,b:0,g:0},vM=new _t,Jm=new Ct;Jm.set(-1,0,0,0,1,0,0,0,1);function _M(n,e,t,i,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function f(_){let M=!1,y=p(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,M){let y=p(M);y&&y.isCubeTexture?(c===void 0&&(c=new nt(new nn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ao(Js.backgroundCube.uniforms),vertexShader:Js.backgroundCube.vertexShader,fragmentShader:Js.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jm),c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==an,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new vt(2,2),new ln({name:"BackgroundMaterial",uniforms:Ao(Js.background.uniforms),vertexShader:Js.background.vertexShader,fragmentShader:Js.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==an,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(bd,Cf(n)),t.buffers.color.setClear(bd.r,bd.g,bd.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function bM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(N,U,z,D,K){let te=!1,ee=d(N,D,z,U);r!==ee&&(r=ee,c(r.object)),te=p(N,D,z,K),te&&f(N,D,z,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(N,U,z,D),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,U,z,D){let K=D.wireframe===!0,te=i[U.id];te===void 0&&(te={},i[U.id]=te);let ee=N.isInstancedMesh===!0?N.id:0,ne=te[ee];ne===void 0&&(ne={},te[ee]=ne);let X=ne[z.id];X===void 0&&(X={},ne[z.id]=X);let W=X[K];return W===void 0&&(W=h(l()),X[K]=W),W}function h(N){let U=[],z=[],D=[];for(let K=0;K<t;K++)U[K]=0,z[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:D,object:N,attributes:{},index:null}}function p(N,U,z,D){let K=r.attributes,te=U.attributes,ee=0,ne=z.getAttributes();for(let X in ne)if(ne[X].location>=0){let O=K[X],Z=te[X];if(Z===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;ee++}return r.attributesNum!==ee||r.index!==D}function f(N,U,z,D){let K={},te=U.attributes,ee=0,ne=z.getAttributes();for(let X in ne)if(ne[X].location>=0){let O=te[X];O===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(O=N.instanceColor));let Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),K[X]=Z,ee++}r.attributes=K,r.attributesNum=ee,r.index=D}function x(){let N=r.newAttributes;for(let U=0,z=N.length;U<z;U++)N[U]=0}function m(N){g(N,0)}function g(N,U){let z=r.newAttributes,D=r.enabledAttributes,K=r.attributeDivisors;z[N]=1,D[N]===0&&(n.enableVertexAttribArray(N),D[N]=1),K[N]!==U&&(n.vertexAttribDivisor(N,U),K[N]=U)}function _(){let N=r.newAttributes,U=r.enabledAttributes;for(let z=0,D=U.length;z<D;z++)U[z]!==N[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function M(N,U,z,D,K,te,ee){ee===!0?n.vertexAttribIPointer(N,U,z,K,te):n.vertexAttribPointer(N,U,z,D,K,te)}function y(N,U,z,D){x();let K=D.attributes,te=z.getAttributes(),ee=U.defaultAttributeValues;for(let ne in te){let X=te[ne];if(X.location>=0){let W=K[ne];if(W===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){let O=W.normalized,Z=W.itemSize,Y=e.get(W);if(Y===void 0)continue;let q=Y.buffer,le=Y.type,he=Y.bytesPerElement,ie=le===n.INT||le===n.UNSIGNED_INT||W.gpuType===Nu;if(W.isInterleavedBufferAttribute){let fe=W.data,Le=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,tt=W.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let He=0;He<X.locationSize;He++)g(X.location+He,fe.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<X.locationSize;He++)m(X.location+He);n.bindBuffer(n.ARRAY_BUFFER,q);for(let He=0;He<X.locationSize;He++)M(X.location+He,Z/X.locationSize,le,O,Le*he,(tt+Z/X.locationSize*He)*he,ie)}else{if(W.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)g(X.location+fe,W.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let fe=0;fe<X.locationSize;fe++)M(X.location+fe,Z/X.locationSize,le,O,Z*he,Z/X.locationSize*fe*he,ie)}}else if(ee!==void 0){let O=ee[ne];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(X.location,O);break;case 3:n.vertexAttrib3fv(X.location,O);break;case 4:n.vertexAttrib4fv(X.location,O);break;default:n.vertexAttrib1fv(X.location,O)}}}}_()}function b(){T();for(let N in i){let U=i[N];for(let z in U){let D=U[z];for(let K in D){let te=D[K];for(let ee in te)u(te[ee].object),delete te[ee];delete D[K]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let z in U){let D=U[z];for(let K in D){let te=D[K];for(let ee in te)u(te[ee].object),delete te[ee];delete D[K]}}delete i[N.id]}function v(N){for(let U in i){let z=i[U];for(let D in z){let K=z[D];if(K[N.id]===void 0)continue;let te=K[N.id];for(let ee in te)u(te[ee].object),delete te[ee];delete K[N.id]}}}function S(N){for(let U in i){let z=i[U],D=N.isInstancedMesh===!0?N.id:0,K=z[D];if(K!==void 0){for(let te in K){let ee=K[te];for(let ne in ee)u(ee[ne].object),delete ee[ne];delete K[te]}delete z[D],Object.keys(z).length===0&&delete i[U]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function MM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function SM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Ms&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ii&&v!==rs&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:w}}function wM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Si,a=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,M=_*4,y=g.clippingState||null;l.value=y,y=u(f,h,M,p);for(let b=0;b!==M;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=p;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Xl=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ml(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:So});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===_s&&(t.minFilter=Rn),new Sa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Cm=256,EM=3,TM=20,jm=256,Qm=16,AM=3,RM=new P,CM=new ze,Pa=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sa(1,10,null),this._boxMesh=new nt(new nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=RM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(CM));let m=new Sa(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Cm,Ef(e))}_fromTexture(e,t){e.mapping===Eo||e.mapping===Aa?this._setSize(e.image.length===0?Cm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Pm(e,!1,!1),i=Math.log2(e)-EM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Pm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Eo||e.mapping===Aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Im()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=PM(),this._integrationMaterial=IM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Qm);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-AM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(jm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=LM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Pm(n,e,t){return new Xl(n,{minFilter:_s,generateMipmaps:e,type:Ai,colorSpace:rl,depthBuffer:t})}function $l(n,e,t){return new ln({name:n,uniforms:e,vertexShader:Vt.cube_vert,fragmentShader:t,side:li,blending:So,depthTest:!1,depthWrite:!1})}function PM(){return $l("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jm}u

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
	`)}function IM(){return $l("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qm}},`

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
	`)}function LM(){return $l("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${TM}
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
	`)}function Im(){return $l("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Lm(){return $l("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function DM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Iu||p===Lu)if(e.has(h)){let f=e.get(h).texture;return a(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let x=new Xl(f.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===Iu||p===Lu,x=p===Eo||p===Aa;if(f||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Pa(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return f&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Pa(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Iu?h.mapping=Eo:p===Lu&&(h.mapping=Aa),h}function l(h){let p=0,f=6;for(let x=0;x<f;x++)h[x]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function NM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&mo("WebGLRenderer: "+i+" extension not supported."),s}}}function OM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(f){let x=f.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?dl:ul,y=new M(Math.ceil(_/3)*6,1),b=y.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,T=0;S<_;S+=3){let R=v[S+0],N=v[S+1],U=v[S+2];b[T++]=R,b[T++]=N,b[T++]=N,b[T++]=U,b[T++]=U,b[T++]=R}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let T=v+0,R=v+1,N=v+2;b[S++]=T,b[S++]=R,b[S++]=R,b[S++]=N,b[S++]=N,b[S++]=T}}y.version=g;let w=r.get(f);w&&e.remove(w),r.set(f,y)}function h(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function UM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function FM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kM(n,e,t){let i=new WeakMap,s=new mn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let T=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;p===!0&&(M=1),f===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*d),v=new cl(w,y,b,d);v.type=rs,v.needsUpdate=!0;let S=M*4;for(let R=0;R<d;R++){let N=m[R],U=g[R],z=_[R],D=y*b*4*R;for(let K=0;K<N.count;K++){let te=K*S;p===!0&&(s.fromBufferAttribute(N,K),w[D+te+0]=s.x,w[D+te+1]=s.y,w[D+te+2]=s.z,w[D+te+3]=0),f===!0&&(s.fromBufferAttribute(U,K),w[D+te+4]=s.x,w[D+te+5]=s.y,w[D+te+6]=s.z,w[D+te+7]=0),x===!0&&(s.fromBufferAttribute(z,K),w[D+te+8]=s.x,w[D+te+9]=s.y,w[D+te+10]=s.z,w[D+te+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Ae(y,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function BM(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var zM={[of]:"LINEAR_TONE_MAPPING",[af]:"REINHARD_TONE_MAPPING",[lf]:"CINEON_TONE_MAPPING",[cf]:"ACES_FILMIC_TONE_MAPPING",[df]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[uf]:"CUSTOM_TONE_MAPPING"};function HM(n,e,t,i,s,r){let o=new ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new $t;u.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ft([0,2,0,0,2,0],2));let d=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new nt(u,d),p=new gr(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,M=[],y=!1;this.setSize=function(b,w){o.setSize(b,w),a!==null&&a.setSize(b,w),l!==null&&l.setSize(b,w);for(let v=0;v<M.length;v++){let S=M[v];S.setSize&&S.setSize(b,w)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;let w=o.width,v=o.height;M.length>0&&a===null&&(a=new ai(w,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new ai(w,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(T=>T.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new pr(w,v),r===!0&&(c.format=xr,c.type=To)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let T=0;T<M.length;T++){let R=M[T];R.setSize&&R.setSize(w,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,w){if(m||b.toneMapping===Ks&&M.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Ks,!0},this.hasRenderPass=function(){return y},this.end=function(b,w){b.toneMapping=g,m=!0;let v=o,S=a;for(let T=0;T<M.length;T++){let R=M[T];R.enabled!==!1&&(R.render(b,S,v,w),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==b.outputColorSpace||x!==b.toneMapping){f=b.outputColorSpace,x=b.toneMapping,d.defines={},Zt.getTransfer(f)===an&&(d.defines.SRGB_TRANSFER="");let T=zM[x];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,b.setRenderTarget(_),b.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var eg=new wi,tg=new pr(1,1),ng=new xl(1),ig=new cl,sg=new ou,rg=new ml,Dm=[],Nm=[],Om=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function Ia(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Dm[s];if(r===void 0&&(r=new Float32Array(s),Dm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wd(n,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function GM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function VM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2fv(this.addr,e),Xn(t,e)}}function WM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wn(t,e))return;n.uniform3fv(this.addr,e),Xn(t,e)}}function XM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4fv(this.addr,e),Xn(t,e)}}function $M(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;Fm.set(i),n.uniformMatrix2fv(this.addr,!1,Fm),Xn(t,i)}}function qM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;Um.set(i),n.uniformMatrix3fv(this.addr,!1,Um),Xn(t,i)}}function YM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),Xn(t,i)}}function KM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2iv(this.addr,e),Xn(t,e)}}function JM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3iv(this.addr,e),Xn(t,e)}}function jM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4iv(this.addr,e),Xn(t,e)}}function QM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2uiv(this.addr,e),Xn(t,e)}}function tS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3uiv(this.addr,e),Xn(t,e)}}function nS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4uiv(this.addr,e),Xn(t,e)}}function Ed(n){return n.version===0&&(n.compareFunction=bf,n.needsUpdate=!0),n}function iS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ed(tg):r=eg,t.setTexture2D(e||r,s)}function sS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||sg,s)}function rS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ed(ng):r=rg,t.setTextureCube(e||r,s)}function oS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ig,s)}function aS(n){switch(n){case 5126:return GM;case 35664:return VM;case 35665:return WM;case 35666:return XM;case 35674:return $M;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return jM;case 5125:return QM;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}function lS(n,e){n.uniform1fv(this.addr,e)}function cS(n,e){let t=Ia(e,this.size,2);n.uniform2fv(this.addr,t)}function uS(n,e){let t=Ia(e,this.size,3);n.uniform3fv(this.addr,t)}function dS(n,e){let t=Ia(e,this.size,4);n.uniform4fv(this.addr,t)}function hS(n,e){let t=Ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fS(n,e){let t=Ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pS(n,e){let t=Ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mS(n,e){n.uniform1iv(this.addr,e)}function gS(n,e){n.uniform2iv(this.addr,e)}function xS(n,e){n.uniform3iv(this.addr,e)}function yS(n,e){n.uniform4iv(this.addr,e)}function vS(n,e){n.uniform1uiv(this.addr,e)}function _S(n,e){n.uniform2uiv(this.addr,e)}function bS(n,e){n.uniform3uiv(this.addr,e)}function MS(n,e){n.uniform4uiv(this.addr,e)}function SS(n,e,t){let i=this.cache,s=e.length,r=wd(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ed(tg):o=eg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function wS(n,e,t){let i=this.cache,s=e.length,r=wd(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sg,r[o])}function ES(n,e,t){let i=this.cache,s=e.length,r=wd(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ed(ng):o=rg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function TS(n,e,t){let i=this.cache,s=e.length,r=wd(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ig,r[o])}function AS(n){switch(n){case 5126:return lS;case 35664:return cS;case 35665:return uS;case 35666:return dS;case 35674:return hS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return xS;case 35669:case 35673:return yS;case 5125:return vS;case 36294:return _S;case 36295:return bS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return TS}}var Of=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aS(t.type)}},Uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AS(t.type)}},Ff=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Df=/(\w+)(\])?(\[|\.)?/g;function km(n,e){n.seq.push(e),n.map[e.id]=e}function RS(n,e,t){let i=n.name,s=i.length;for(Df.lastIndex=0;;){let r=Df.exec(i),o=Df.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){km(t,c===void 0?new Of(a,n,e):new Uf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ff(a),km(t,d)),t=d}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);RS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Bm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var CS=37297,PS=0;function IS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var zm=new Ct;function LS(n){Zt._getMatrix(zm,Zt.workingColorSpace,n);let e=`mat3( ${zm.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(n)){case ol:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+IS(n.getShaderSource(e),a)}else return r}function DS(n,e){let t=LS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var NS={[of]:"Linear",[af]:"Reinhard",[lf]:"Cineon",[cf]:"ACESFilmic",[df]:"AgX",[Ol]:"Neutral",[uf]:"Custom"};function OS(n,e){let t=NS[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Md=new P;function US(){Zt.getLuminanceCoefficients(Md);let n=Md.x.toFixed(4),e=Md.y.toFixed(4),t=Md.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function kS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wl(n){return n!==""}function Gm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(n){return n.replace(zS,HS)}function HS(n,e){let t=Vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kf(t)}var GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(n){return n.replace(GS,VS)}function VS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var WS={[Mo]:"SHADOWMAP_TYPE_PCF",[Ea]:"SHADOWMAP_TYPE_VSM"};function XS(n){return WS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $S={[Aa]:"ENVMAP_MODE_REFRACTION"};function qS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$S[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YS={[rf]:"ENVMAP_BLENDING_MULTIPLY",[om]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function KS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":YS[n.combine]||"ENVMAP_BLENDING_NONE"}function ZS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=XS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=qS(t),d=KS(t),h=FS(t),p=kS(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Wl).join(`
`),m.length>0&&(m+=`
`)):(x=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),m=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ks?"#define TONE_MAPPING":"",t.toneMapping!==Ks?Vt.tonemapping_pars_fragment:"",t.toneMapping!==Ks?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),US(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wl).join(`
`)),o=kf(o),o=Gm(o,t),o=Vm(o,t),a=kf(a),a=Gm(a,t),a=Vm(a,t),o=Wm(o),a=Wm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,M=g+m+a,y=Bm(s,s.VERTEX_SHADER,_),b=Bm(s,s.FRAGMENT_SHADER,M);s.attachShader(f,y),s.attachShader(f,b),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function w(R){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(f)||"",U=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(b)||"",D=N.trim(),K=U.trim(),te=z.trim(),ee=!0,ne=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,y,b);else{let X=Hm(s,y,"vertex"),W=Hm(s,b,"fragment");Tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+X+`
`+W)}else D!==""?wt("WebGLProgram: Program Info Log:",D):(K===""||te==="")&&(ne=!1);ne&&(R.diagnostics={runnable:ee,programLog:D,vertexShader:{log:K,prefix:x},fragmentShader:{log:te,prefix:m}})}s.deleteShader(y),s.deleteShader(b),v=new Ca(s,f),S=BS(s,f)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(f,CS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PS++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=b,this}var JS=0,Bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zf(e),t.set(e,i)),i}},zf=class{constructor(e){this.id=JS++,this.code=e,this.usedTimes=0}};function jS(n){return n===Vr||n===Hl||n===Gl}function QS(n,e,t,i,s,r){let o=new pa,a=new Bf,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,T,R,N,U){let z=R.fog,D=N.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||K,te),ne=h[v.type],X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&wt("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));let W=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,O=W!==void 0?W.length:0,Z=0;D.morphAttributes.position!==void 0&&(Z=1),D.morphAttributes.normal!==void 0&&(Z=2),D.morphAttributes.color!==void 0&&(Z=3);let Y,q,le,he;if(ne){let Ye=Js[ne];Y=Ye.vertexShader,q=Ye.fragmentShader}else{Y=v.vertexShader,q=v.fragmentShader;let Ye=a.getVertexShaderStage(v),Kt=a.getFragmentShaderStage(v);a.update(v,Ye,Kt),le=Ye.id,he=Kt.id}let ie=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,tt=N.isBatchedMesh===!0,He=!!v.map,Ze=!!v.matcap,Ke=!!ee,me=Ke&&ee.isPMREMTexture===!0,V=!!v.aoMap,B=!!v.lightMap,re=!!v.bumpMap&&v.wireframe===!1,G=!!v.normalMap,Re=!!v.displacementMap,Fe=!!v.emissiveMap,H=!!v.metalnessMap,pe=!!v.roughnessMap,Te=v.anisotropy>0,k=v.clearcoat>0,et=v.diffuseRoughness>0,pt=v.dispersion>0,Mt=v.retroreflectivity>0,Ce=v.iridescence>0,A=v.sheen>0,J=v.transmission>0,de=Te&&!!v.anisotropyMap,I=k&&!!v.clearcoatMap,E=k&&!!v.clearcoatNormalMap,j=k&&!!v.clearcoatRoughnessMap,_e=et&&!!v.diffuseRoughnessMap,be=Ce&&!!v.iridescenceMap,ke=Ce&&!!v.iridescenceThicknessMap,Ge=A&&!!v.sheenColorMap,Se=A&&!!v.sheenRoughnessMap,Me=!!v.specularMap,Ve=!!v.specularColorMap,$=!!v.specularIntensityMap,we=J&&!!v.transmissionMap,ye=J&&!!v.thicknessMap,Pe=!!v.gradientMap,Ue=!!v.alphaMap,We=v.alphaTest>0,ge=!!v.alphaHash,It=!!v.extensions,Oe=Ks;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let gt=me?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,Rt={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:q,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:tt,batchingColor:tt&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:He,matcap:Ze,envMap:Ke,envMapMode:Ke&&ee.mapping,envMapPMREM:me,envMapMaxLod:me?gt.length-1:null,envMapSize:me?gt[0].width:null,aoMap:V,lightMap:B,bumpMap:re,normalMap:G,displacementMap:Re,emissiveMap:Fe,normalMapObjectSpace:G&&v.normalMapType===um,normalMapTangentSpace:G&&v.normalMapType===xd,packedNormalMap:G&&v.normalMapType===xd&&jS(v.normalMap.format),metalnessMap:H,roughnessMap:pe,anisotropy:Te,anisotropyMap:de,clearcoat:k,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:j,diffuseRoughness:et,diffuseRoughnessMap:_e,dispersion:pt,retroreflection:Mt,iridescence:Ce,iridescenceMap:be,iridescenceThicknessMap:ke,sheen:A,sheenColorMap:Ge,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:Ve,specularIntensityMap:$,transmission:J,transmissionMap:we,thicknessMap:ye,gradientMap:Pe,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:We,alphaHash:ge,combine:v.combine,mapUv:He&&p(v.map.channel),aoMapUv:V&&p(v.aoMap.channel),lightMapUv:B&&p(v.lightMap.channel),bumpMapUv:re&&p(v.bumpMap.channel),normalMapUv:G&&p(v.normalMap.channel),displacementMapUv:Re&&p(v.displacementMap.channel),emissiveMapUv:Fe&&p(v.emissiveMap.channel),metalnessMapUv:H&&p(v.metalnessMap.channel),roughnessMapUv:pe&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:I&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&p(v.sheenRoughnessMap.channel),specularMapUv:Me&&p(v.specularMap.channel),specularColorMapUv:Ve&&p(v.specularColorMap.channel),specularIntensityMapUv:$&&p(v.specularIntensityMap.channel),transmissionMapUv:we&&p(v.transmissionMap.channel),thicknessMapUv:ye&&p(v.thicknessMap.channel),alphaMapUv:Ue&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(G||Te),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(He||Ue),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&G===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Ye=>Ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:He&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===an,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===an,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===en,flipSided:v.side===li,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=h[v.type],T;if(S){let R=Js[S];T=_d.clone(R.uniforms)}else T=v.uniforms;return T}function M(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new ZS(n,S,v,s),c.push(T),u.set(S,T)),T}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function w(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function ew(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,x,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=f,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let M=a(h,p,f,x,m,g);f.transmission>0?i.push(M):f.transparent===!0?s.push(M):t.push(M)}function c(h,p,f,x,m,g){let _=a(h,p,f,x,m,g);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,p){t.length>1&&t.sort(h||tw),i.length>1&&i.sort(p||$m),s.length>1&&s.sort(p||$m)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function nw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new qm,n.set(i,[o])):s>=r.length?(o=new qm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function sw(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var rw=0;function ow(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aw(n){let e=new iw,t=sw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,M=0,y=0,b=0,w=0,v=0,S=0,T=0,R=0;c.sort(ow);for(let U=0,z=c.length;U<z;U++){let D=c[U],K=D.color,te=D.intensity,ee=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vr?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=K.r*te,d+=K.g*te,h+=K.b*te;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],te);R++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,O=t.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),i.sunShadow[f]=O,i.sunShadowMap[f]=ne;let Z=W.getViewportCount();for(let Y=0;Y<Z;Y++)i.sunShadowMatrix[x+Y]=W.getMatrix(Y),i.sunShadowCascade[x+Y]=W._cascadeData[Y];x+=Z,f++}i.sun[p]=X,p++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,O=t.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=X,m++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(K).multiplyScalar(te),X.distance=ee,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;let W=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,W.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=W.matrix,D.castShadow){let O=t.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=ne,v++}_++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(K).multiplyScalar(te),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=X,M++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let W=D.shadow,O=t.get(D);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=X,g++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(te),X.groundColor.copy(D.groundColor).multiplyScalar(te),i.hemi[y]=X,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==M||N.hemiLength!==y||N.numSunShadows!==f||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==v||N.numSpotMaps!==S||N.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=g,i.hemi.length=y,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.sunLength=p,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=M,N.hemiLength=y,N.numSunShadows=f,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=v,N.numSpotMaps=S,N.numLightProbes=R,i.version=rw++)}function l(c,u){let d=0,h=0,p=0,f=0,x=0,m=0,g=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let y=c[_];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(y.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Ym(n){let e=new aw(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ym(n),e.set(s,[a])):r>=o.length?(a=new Ym(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
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
}`,dw=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],hw=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Km=new _t,Vl=new P,Nf=new P;function fw(n,e,t){let i=new Nr,s=new Ae,r=new Ae,o=new mn,a=new gu,l=new xu,c={},u=t.maxTextureSize,d={[qs]:li,[li]:qs,[en]:en},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:cw,fragmentShader:uw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new $t;f.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===W0&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(So),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=g!==this.type;z&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(K=>K.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,K=w.length;D<K;D++){let te=w[D],ee=te.shadow;if(ee===void 0){wt("WebGLShadowMap:",te,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;s.copy(ee.mapSize);let ne=ee.getFrameExtents();s.multiply(ne),r.copy(ee.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,ee.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,ee.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=X,ee.map===null||z===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ea){if(te.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new ai(s.x,s.y,{format:Vr,type:Ai,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),ee.map.texture.name=te.name+".shadowMap",ee.map.depthTexture=new pr(s.x,s.y,rs),ee.map.depthTexture.name=te.name+".shadowMapDepth",ee.map.depthTexture.format=dr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=ti,ee.map.depthTexture.magFilter=ti}else te.isPointLight?(ee.map=new Xl(s.x),ee.map.depthTexture=new xl(s.x,bs)):(ee.map=new ai(s.x,s.y),ee.map.depthTexture=new pr(s.x,s.y,bs)),ee.map.depthTexture.name=te.name+".shadowMap",ee.map.depthTexture.format=dr,this.type===Mo?(ee.map.depthTexture.compareFunction=X?_f:vf,ee.map.depthTexture.minFilter=Rn,ee.map.depthTexture.magFilter=Rn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=ti,ee.map.depthTexture.magFilter=ti);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==s.x||ee.map.height!==s.y)&&ee.map.setSize(s.x,s.y);let W=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();te.isPointLight!==!0&&ee.updateMatrices(te,S);let O=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:S.layers;for(let Z=0;Z<W;Z++){let Y=ee.getCamera(Z);if(te.isPointLight){let q=ee.camera,le=ee.matrix,he=te.distance||q.far;he!==q.far&&(q.far=he,q.updateProjectionMatrix()),Vl.setFromMatrixPosition(te.matrixWorld),q.position.copy(Vl),Nf.copy(q.position),Nf.add(dw[Z]),q.up.copy(hw[Z]),q.lookAt(Nf),q.updateMatrixWorld(),le.makeTranslation(-Vl.x,-Vl.y,-Vl.z),Km.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(Km,q.coordinateSystem,q.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)n.setRenderTarget(ee.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(ee.map),n.clear());let q=ee.getViewport(Z);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),U.viewport(o)}i=ee.getFrustum(Z),y(v,S,Y,te,O,this.type)}ee.isPointLightShadow!==!0&&this.type===Ea&&_(ee,S),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,N)};function _(w,v){let S=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ai(s.x,s.y,{format:Vr,type:Ai}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,S,h,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,S,p,x,null)}function M(w,v,S,T){let R=null,N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let U=R.uuid,z=v.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let K=D[z];K===void 0&&(K=R.clone(),D[z]=K,v.addEventListener("dispose",b)),R=K}if(R.visible=v.visible,R.wireframe=v.wireframe,T===Ea?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=S}return R}function y(w,v,S,T,R,N){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Ea)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let D=e.update(w),K=w.material;if(Array.isArray(K)){let te=D.groups;for(let ee=0,ne=te.length;ee<ne;ee++){let X=te[ee],W=K[X.materialIndex];if(W&&W.visible){let O=M(w,W,T,N);w.onBeforeShadow(n,w,v,S,D,O,X),n.renderBufferDirect(S,null,D,O,w,X),w.onAfterShadow(n,w,v,S,D,O,X)}}}else if(K.visible){let te=M(w,K,T,N);w.onBeforeShadow(n,w,v,S,D,te,null),n.renderBufferDirect(S,null,D,te,w,null),w.onAfterShadow(n,w,v,S,D,te,null)}}let z=w.children;for(let D=0,K=z.length;D<K;D++)y(z[D],v,S,T,R,N)}function b(w){w.target.removeEventListener("dispose",b);for(let S in c){let T=c[S],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function pw(n,e){function t(){let $=!1,we=new mn,ye=null,Pe=new mn(0,0,0,0);return{setMask:function(Ue){ye!==Ue&&!$&&(n.colorMask(Ue,Ue,Ue,Ue),ye=Ue)},setLocked:function(Ue){$=Ue},setClear:function(Ue,We,ge,It,Oe){Oe===!0&&(Ue*=It,We*=It,ge*=It),we.set(Ue,We,ge,It),Pe.equals(we)===!1&&(n.clearColor(Ue,We,ge,It),Pe.copy(we))},reset:function(){$=!1,ye=null,Pe.set(-1,0,0,0)}}}function i(){let $=!1,we=!1,ye=null,Pe=null,Ue=null;return{setReversed:function(We){if(we!==We){let ge=e.get("EXT_clip_control");We?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),we=We;let It=Ue;Ue=null,this.setClear(It)}},getReversed:function(){return we},setTest:function(We){We?fe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(We){ye!==We&&!$&&(n.depthMask(We),ye=We)},setFunc:function(We){if(we&&(We=_m[We]),Pe!==We){switch(We){case Kc:n.depthFunc(n.NEVER);break;case Zc:n.depthFunc(n.ALWAYS);break;case Jc:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case jc:n.depthFunc(n.EQUAL);break;case Qc:n.depthFunc(n.GEQUAL);break;case eu:n.depthFunc(n.GREATER);break;case tu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=We}},setLocked:function(We){$=We},setClear:function(We){Ue!==We&&(Ue=We,we&&(We=1-We),n.clearDepth(We))},reset:function(){$=!1,ye=null,Pe=null,Ue=null,we=!1}}}function s(){let $=!1,we=null,ye=null,Pe=null,Ue=null,We=null,ge=null,It=null,Oe=null;return{setTest:function(gt){$||(gt?fe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(gt){we!==gt&&!$&&(n.stencilMask(gt),we=gt)},setFunc:function(gt,Rt,Ye){(ye!==gt||Pe!==Rt||Ue!==Ye)&&(n.stencilFunc(gt,Rt,Ye),ye=gt,Pe=Rt,Ue=Ye)},setOp:function(gt,Rt,Ye){(We!==gt||ge!==Rt||It!==Ye)&&(n.stencilOp(gt,Rt,Ye),We=gt,ge=Rt,It=Ye)},setLocked:function(gt){$=gt},setClear:function(gt){Oe!==gt&&(n.clearStencil(gt),Oe=gt)},reset:function(){$=!1,we=null,ye=null,Pe=null,Ue=null,We=null,ge=null,It=null,Oe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,M=null,y=null,b=null,w=null,v=null,S=new ze(0,0,0),T=0,R=!1,N=null,U=null,z=null,D=null,K=null,te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,ne=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=ne>=2);let W=null,O={},Z=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),q=new mn().fromArray(Z),le=new mn().fromArray(Y);function he($,we,ye,Pe){let Ue=new Uint8Array(4),We=n.createTexture();n.bindTexture($,We),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<ye;ge++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(we+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return We}let ie={};ie[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(n.DEPTH_TEST),o.setFunc(ca),re(!1),G(ef),fe(n.CULL_FACE),V(So);function fe($){u[$]!==!0&&(n.enable($),u[$]=!0)}function Le($){u[$]!==!1&&(n.disable($),u[$]=!1)}function tt($,we){return h[$]!==we?(n.bindFramebuffer($,we),h[$]=we,$===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=we),$===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=we),!0):!1}function He($,we){let ye=f,Pe=!1;if($){ye=p.get(we),ye===void 0&&(ye=[],p.set(we,ye));let Ue=$.textures;if(ye.length!==Ue.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let We=0,ge=Ue.length;We<ge;We++)ye[We]=n.COLOR_ATTACHMENT0+We;ye.length=Ue.length,Pe=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ye)}function Ze($){return x!==$?(n.useProgram($),x=$,!0):!1}let Ke={[wo]:n.FUNC_ADD,[X0]:n.FUNC_SUBTRACT,[$0]:n.FUNC_REVERSE_SUBTRACT};Ke[q0]=n.MIN,Ke[Y0]=n.MAX;let me={[Pu]:n.ZERO,[Hr]:n.ONE,[K0]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Q0]:n.DST_COLOR,[J0]:n.DST_ALPHA,[Z0]:n.ONE_MINUS_SRC_COLOR,[Gr]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[j0]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function V($,we,ye,Pe,Ue,We,ge,It,Oe,gt){if($===So){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(fe(n.BLEND),m=!0),$!==Ta){if($!==g||gt!==R){if((_!==wo||b!==wo)&&(n.blendEquation(n.FUNC_ADD),_=wo,b=wo),gt)switch($){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kn:n.blendFunc(n.ONE,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",$);break}else switch($){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tf:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nf:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",$);break}M=null,y=null,w=null,v=null,S.set(0,0,0),T=0,g=$,R=gt}return}Ue=Ue||we,We=We||ye,ge=ge||Pe,(we!==_||Ue!==b)&&(n.blendEquationSeparate(Ke[we],Ke[Ue]),_=we,b=Ue),(ye!==M||Pe!==y||We!==w||ge!==v)&&(n.blendFuncSeparate(me[ye],me[Pe],me[We],me[ge]),M=ye,y=Pe,w=We,v=ge),(It.equals(S)===!1||Oe!==T)&&(n.blendColor(It.r,It.g,It.b,Oe),S.copy(It),T=Oe),g=$,R=!1}function B($,we){$.side===en?Le(n.CULL_FACE):fe(n.CULL_FACE);let ye=$.side===li;we&&(ye=!ye),re(ye),$.blending===Ys&&$.transparent===!1?V(So):V($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let Pe=$.stencilWrite;a.setTest(Pe),Pe&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Fe($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function re($){N!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),N=$)}function G($){$!==G0?(fe(n.CULL_FACE),$!==U&&($===ef?n.cullFace(n.BACK):$===V0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),U=$}function Re($){$!==z&&(ee&&n.lineWidth($),z=$)}function Fe($,we,ye){$?(fe(n.POLYGON_OFFSET_FILL),(D!==we||K!==ye)&&(D=we,K=ye,o.getReversed()&&(we=-we,ye=-ye),n.polygonOffset(we,ye))):Le(n.POLYGON_OFFSET_FILL)}function H($){$?fe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function pe($){$===void 0&&($=n.TEXTURE0+te-1),W!==$&&(n.activeTexture($),W=$)}function Te($,we,ye){ye===void 0&&(W===null?ye=n.TEXTURE0+te-1:ye=W);let Pe=O[ye];Pe===void 0&&(Pe={type:void 0,texture:void 0},O[ye]=Pe),(Pe.type!==$||Pe.texture!==we)&&(W!==ye&&(n.activeTexture(ye),W=ye),n.bindTexture($,we||ie[$]),Pe.type=$,Pe.texture=we)}function k(){let $=O[W];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function et(){try{n.compressedTexImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function Mt(){try{n.texSubImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function Ce(){try{n.texSubImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function A(){try{n.compressedTexSubImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function de(){try{n.texStorage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function I(){try{n.texStorage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function E(){try{n.texImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function j(){try{n.texImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function _e($){return d[$]!==void 0?d[$]:n.getParameter($)}function be($,we){d[$]!==we&&(n.pixelStorei($,we),d[$]=we)}function ke($){q.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),q.copy($))}function Ge($){le.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),le.copy($))}function Se($,we){let ye=c.get(we);ye===void 0&&(ye=new WeakMap,c.set(we,ye));let Pe=ye.get($);Pe===void 0&&(Pe=n.getUniformBlockIndex(we,$.name),n.uniformBlockBinding(we,Pe,Pe),ye.set($,Pe))}function Me($,we,ye){let Ue=c.get(we).get($);l[Ue]!==ye&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ue,ye),l[Ue]=ye)}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},W=null,O={},h={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,M=null,y=null,b=null,w=null,v=null,S=new ze(0,0,0),T=0,R=!1,N=null,U=null,z=null,D=null,K=null,q.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Le,bindFramebuffer:tt,drawBuffers:He,useProgram:Ze,setBlending:V,setMaterial:B,setFlipSided:re,setCullFace:G,setLineWidth:Re,setPolygonOffset:Fe,setScissorTest:H,activeTexture:pe,bindTexture:Te,unbindTexture:k,compressedTexImage2D:et,compressedTexImage3D:pt,texImage2D:E,texImage3D:j,pixelStorei:be,getParameter:_e,updateUBOMapping:Se,uniformBlockBinding:Me,texStorage2D:de,texStorage3D:I,texSubImage2D:Mt,texSubImage3D:Ce,compressedTexSubImage2D:A,compressedTexSubImage3D:J,scissor:ke,viewport:Ge,reset:Ve}}function mw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,x=new FinalizationRegistry(I=>f.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):al("canvas")}function _(I,E,j){let _e=1,be=de(I);if((be.width>j||be.height>j)&&(_e=j/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ke=Math.floor(_e*be.width),Ge=Math.floor(_e*be.height);h===void 0&&(h=g(ke,Ge));let Se=E?g(ke,Ge):h;return Se.width=ke,Se.height=Ge,Se.getContext("2d").drawImage(I,0,0,ke,Ge),wt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ke+"x"+Ge+")."),Se}else return"data"in I&&wt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),I;return I}function M(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,E,j,_e,be,ke=!1){if(I!==null){if(n[I]!==void 0)return n[I];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ge;_e&&(Ge=e.get("EXT_texture_norm16"),Ge||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=E;if(E===n.RED&&(j===n.FLOAT&&(Se=n.R32F),j===n.HALF_FLOAT&&(Se=n.R16F),j===n.UNSIGNED_BYTE&&(Se=n.R8),j===n.UNSIGNED_SHORT&&Ge&&(Se=Ge.R16_EXT),j===n.SHORT&&Ge&&(Se=Ge.R16_SNORM_EXT)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(Se=n.R8UI),j===n.UNSIGNED_SHORT&&(Se=n.R16UI),j===n.UNSIGNED_INT&&(Se=n.R32UI),j===n.BYTE&&(Se=n.R8I),j===n.SHORT&&(Se=n.R16I),j===n.INT&&(Se=n.R32I)),E===n.RG&&(j===n.FLOAT&&(Se=n.RG32F),j===n.HALF_FLOAT&&(Se=n.RG16F),j===n.UNSIGNED_BYTE&&(Se=n.RG8),j===n.UNSIGNED_SHORT&&Ge&&(Se=Ge.RG16_EXT),j===n.SHORT&&Ge&&(Se=Ge.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(Se=n.RG8UI),j===n.UNSIGNED_SHORT&&(Se=n.RG16UI),j===n.UNSIGNED_INT&&(Se=n.RG32UI),j===n.BYTE&&(Se=n.RG8I),j===n.SHORT&&(Se=n.RG16I),j===n.INT&&(Se=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(Se=n.RGB8UI),j===n.UNSIGNED_SHORT&&(Se=n.RGB16UI),j===n.UNSIGNED_INT&&(Se=n.RGB32UI),j===n.BYTE&&(Se=n.RGB8I),j===n.SHORT&&(Se=n.RGB16I),j===n.INT&&(Se=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(Se=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(Se=n.RGBA16UI),j===n.UNSIGNED_INT&&(Se=n.RGBA32UI),j===n.BYTE&&(Se=n.RGBA8I),j===n.SHORT&&(Se=n.RGBA16I),j===n.INT&&(Se=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGB16_EXT),j===n.SHORT&&Ge&&(Se=Ge.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(Se=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(Se=n.R11F_G11F_B10F)),E===n.RGBA){let Me=ke?ol:Zt.getTransfer(be);j===n.FLOAT&&(Se=n.RGBA32F),j===n.HALF_FLOAT&&(Se=n.RGBA16F),j===n.UNSIGNED_BYTE&&(Se=Me===an?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGBA16_EXT),j===n.SHORT&&Ge&&(Se=Ge.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(Se=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(Se=n.RGB5_A1)}return(Se===n.R16F||Se===n.R32F||Se===n.RG16F||Se===n.RG32F||Se===n.RGBA16F||Se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function v(I,E){let j;return I?E===null||E===bs||E===To?j=n.DEPTH24_STENCIL8:E===rs?j=n.DEPTH32F_STENCIL8:E===Ra&&(j=n.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bs||E===To?j=n.DEPTH_COMPONENT24:E===rs?j=n.DEPTH_COMPONENT32F:E===Ra&&(j=n.DEPTH_COMPONENT16),j}function S(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==ti&&I.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){let E=new WeakRef(I);i.get(I).__ref=E,f.add(E),x.register(I,E,E)}function R(I){let E=i.get(I).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function N(I){z(I.target)}function U(I){D(I.target)}function z(I){I.removeEventListener("dispose",N),R(I),te(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function D(I){I.removeEventListener("dispose",U),R(I),ne(I)}function K(){for(let I of f){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):z(E))}f.clear(),d.clear()}function te(I){let E=i.get(I);if(E.__webglInit===void 0)return;let j=I.source,_e=p.get(j);if(_e){let be=_e[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&ee(I),Object.keys(_e).length===0&&p.delete(j)}i.remove(I)}function ee(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let j=I.source,_e=p.get(j);delete _e[E.__cacheKey],o.memory.textures--}function ne(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let j=I.depthTexture;if(j&&j.renderTarget===I&&z(j),I.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(E.__webglFramebuffer[be]))for(let ke=0;ke<E.__webglFramebuffer[be].length;ke++)n.deleteFramebuffer(E.__webglFramebuffer[be][ke]);else n.deleteFramebuffer(E.__webglFramebuffer[be]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[be])}else{if(Array.isArray(E.__webglFramebuffer))for(let be=0;be<E.__webglFramebuffer.length;be++)n.deleteFramebuffer(E.__webglFramebuffer[be]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let be=0;be<E.__webglColorRenderbuffer.length;be++)E.__webglColorRenderbuffer[be]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[be]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let _e=I.textures;for(let be=0,ke=_e.length;be<ke;be++){let Ge=i.get(_e[be]);Ge.__webglTexture&&(n.deleteTexture(Ge.__webglTexture),o.memory.textures--),i.remove(_e[be])}i.remove(I)}let X=0;function W(){X=0}function O(){return X}function Z(I){X=I}function Y(){let I=X;return I>=s.maxTextures&&wt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,I}function q(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function le(I,E){let j=i.get(I);if(I.isVideoTexture&&A(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){let _e=I.image;if(_e===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{B(j,I,E);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function he(I,E){let j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){B(j,I,E);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function ie(I,E){let j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){B(j,I,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function fe(I,E){let j=i.get(I);if(I.version>0&&j.__version!==I.version){re(j,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}let Le={[ur]:n.REPEAT,[Vs]:n.CLAMP_TO_EDGE,[nu]:n.MIRRORED_REPEAT},tt={[ti]:n.NEAREST,[lm]:n.NEAREST_MIPMAP_NEAREST,[Ul]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Du]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},He={[hm]:n.NEVER,[bf]:n.ALWAYS,[fm]:n.LESS,[vf]:n.LEQUAL,[pm]:n.EQUAL,[_f]:n.GEQUAL,[mm]:n.GREATER,[gm]:n.NOTEQUAL};function Ze(I,E){if(E.type===rs&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Du||E.magFilter===Ul||E.magFilter===_s||E.minFilter===Rn||E.minFilter===Du||E.minFilter===Ul||E.minFilter===_s)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Le[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Le[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Le[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,tt[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==Ul&&E.minFilter!==_s||E.type===rs&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(I,E){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",N),T(E));let _e=E.source,be=p.get(_e);be===void 0&&(be={},p.set(_e,be));let ke=q(E);if(ke!==I.__cacheKey){be[ke]===void 0&&(be[ke]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),be[ke].usedTimes++;let Ge=be[I.__cacheKey];Ge!==void 0&&(be[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&ee(E)),I.__cacheKey=ke,I.__webglTexture=be[ke].texture}return j}function me(I,E,j){return Math.floor(Math.floor(I/j)/E)}function V(I,E,j,_e){let ke=I.updateRanges;if(ke.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,_e,E.data);else{ke.sort(($,we)=>$.start-we.start);let Ge=0;for(let $=1;$<ke.length;$++){let we=ke[Ge],ye=ke[$],Pe=we.start+we.count,Ue=me(ye.start,E.width,4),We=me(we.start,E.width,4);ye.start<=Pe+1&&Ue===We&&me(ye.start+ye.count-1,E.width,4)===Ue?we.count=Math.max(we.count,ye.start+ye.count-we.start):(++Ge,ke[Ge]=ye)}ke.length=Ge+1;let Se=t.getParameter(n.UNPACK_ROW_LENGTH),Me=t.getParameter(n.UNPACK_SKIP_PIXELS),Ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let $=0,we=ke.length;$<we;$++){let ye=ke[$],Pe=Math.floor(ye.start/4),Ue=Math.ceil(ye.count/4),We=Pe%E.width,ge=Math.floor(Pe/E.width),It=Ue,Oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,We),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge),t.texSubImage2D(n.TEXTURE_2D,0,We,ge,It,Oe,j,_e,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Se),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function B(I,E,j){let _e=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=n.TEXTURE_3D);let be=Ke(I,E),ke=E.source;t.bindTexture(_e,I.__webglTexture,n.TEXTURE0+j);let Ge=i.get(ke);if(ke.version!==Ge.__version||be===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Oe=Zt.getPrimaries(Zt.workingColorSpace),gt=E.colorSpace===yr?null:Zt.getPrimaries(E.colorSpace),Rt=E.colorSpace===yr||Oe===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Me=_(E.image,!1,s.maxTextureSize);Me=J(E,Me);let Ve=r.convert(E.format,E.colorSpace),$=r.convert(E.type),we=w(E.internalFormat,Ve,$,E.normalized,E.colorSpace,E.isVideoTexture);Ze(_e,E);let ye,Pe=E.mipmaps,Ue=E.isVideoTexture!==!0,We=Ge.__version===void 0||be===!0,ge=ke.dataReady,It=S(E,Me);if(E.isDepthTexture)we=v(E.format===xr,E.type),We&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,we,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,we,Me.width,Me.height,0,Ve,$,null));else if(E.isDataTexture)if(Pe.length>0){Ue&&We&&t.texStorage2D(n.TEXTURE_2D,It,we,Pe[0].width,Pe[0].height);for(let Oe=0,gt=Pe.length;Oe<gt;Oe++)ye=Pe[Oe],Ue?ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,ye.width,ye.height,Ve,$,ye.data):t.texImage2D(n.TEXTURE_2D,Oe,we,ye.width,ye.height,0,Ve,$,ye.data);E.generateMipmaps=!1}else Ue?(We&&t.texStorage2D(n.TEXTURE_2D,It,we,Me.width,Me.height),ge&&V(E,Me,Ve,$)):t.texImage2D(n.TEXTURE_2D,0,we,Me.width,Me.height,0,Ve,$,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,It,we,Pe[0].width,Pe[0].height,Me.depth);for(let Oe=0,gt=Pe.length;Oe<gt;Oe++)if(ye=Pe[Oe],E.format!==Ms)if(Ve!==null)if(Ue){if(ge)if(E.layerUpdates.size>0){let Rt=Lf(ye.width,ye.height,E.format,E.type);for(let Ye of E.layerUpdates){let Kt=ye.data.subarray(Ye*Rt/ye.data.BYTES_PER_ELEMENT,(Ye+1)*Rt/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,Ye,ye.width,ye.height,1,Ve,Kt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,ye.width,ye.height,Me.depth,Ve,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Oe,we,ye.width,ye.height,Me.depth,0,ye.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,ye.width,ye.height,Me.depth,Ve,$,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Oe,we,ye.width,ye.height,Me.depth,0,Ve,$,ye.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ue&&We&&t.texStorage2D(n.TEXTURE_2D,It,we,Pe[0].width,Pe[0].height);for(let Oe=0,gt=Pe.length;Oe<gt;Oe++)ye=Pe[Oe],E.format!==Ms?Ve!==null?Ue?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,Oe,0,0,ye.width,ye.height,Ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Oe,we,ye.width,ye.height,0,ye.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,ye.width,ye.height,Ve,$,ye.data):t.texImage2D(n.TEXTURE_2D,Oe,we,ye.width,ye.height,0,Ve,$,ye.data)}else if(E.isDataArrayTexture)if(Ue){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,It,we,Me.width,Me.height,Me.depth),ge)if(E.layerUpdates.size>0){let Oe=Lf(Me.width,Me.height,E.format,E.type);for(let gt of E.layerUpdates){let Rt=Me.data.subarray(gt*Oe/Me.data.BYTES_PER_ELEMENT,(gt+1)*Oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,gt,Me.width,Me.height,1,Ve,$,Rt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,$,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,Me.width,Me.height,Me.depth,0,Ve,$,Me.data);else if(E.isData3DTexture)Ue?(We&&t.texStorage3D(n.TEXTURE_3D,It,we,Me.width,Me.height,Me.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,$,Me.data)):t.texImage3D(n.TEXTURE_3D,0,we,Me.width,Me.height,Me.depth,0,Ve,$,Me.data);else if(E.isFramebufferTexture){if(We)if(Ue)t.texStorage2D(n.TEXTURE_2D,It,we,Me.width,Me.height);else{let Oe=Me.width,gt=Me.height;for(let Rt=0;Rt<It;Rt++)t.texImage2D(n.TEXTURE_2D,Rt,we,Oe,gt,0,Ve,$,null),Oe>>=1,gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Oe=n.canvas;if(Oe.hasAttribute("layoutsubtree")||Oe.setAttribute("layoutsubtree","true"),Me.parentNode!==Oe){Oe.appendChild(Me),d.add(E),Oe.onpaint=gt=>{let Rt=gt.changedElements;for(let Ye of d)Rt.includes(Ye.image)&&(Ye.needsUpdate=!0)},Oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Me);else{let Rt=n.RGBA,Ye=n.RGBA,Kt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,Ye,Kt,Me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ue&&We){let Oe=de(Pe[0]);t.texStorage2D(n.TEXTURE_2D,It,we,Oe.width,Oe.height)}for(let Oe=0,gt=Pe.length;Oe<gt;Oe++)ye=Pe[Oe],Ue?ge&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,Ve,$,ye):t.texImage2D(n.TEXTURE_2D,Oe,we,Ve,$,ye);E.generateMipmaps=!1}else if(Ue){if(We){let Oe=de(Me);t.texStorage2D(n.TEXTURE_2D,It,we,Oe.width,Oe.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,$,Me)}else t.texImage2D(n.TEXTURE_2D,0,we,Ve,$,Me);M(E)&&E.mipmapsAutoUpdate===!0&&y(_e),Ge.__version=ke.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function re(I,E,j){if(E.image.length!==6)return;let _e=Ke(I,E),be=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+j);let ke=i.get(be);if(be.version!==ke.__version||_e===!0){t.activeTexture(n.TEXTURE0+j);let Ge=Zt.getPrimaries(Zt.workingColorSpace),Se=E.colorSpace===yr?null:Zt.getPrimaries(E.colorSpace),Me=E.colorSpace===yr||Ge===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ve=E.isCompressedTexture||E.image[0].isCompressedTexture,$=E.image[0]&&E.image[0].isDataTexture,we=[];for(let Ye=0;Ye<6;Ye++)!Ve&&!$?we[Ye]=_(E.image[Ye],!0,s.maxCubemapSize):we[Ye]=$?E.image[Ye].image:E.image[Ye],we[Ye]=J(E,we[Ye]);let ye=we[0],Pe=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),We=w(E.internalFormat,Pe,Ue,E.normalized,E.colorSpace),ge=E.isVideoTexture!==!0,It=ke.__version===void 0||_e===!0,Oe=be.dataReady,gt=S(E,ye);Ze(n.TEXTURE_CUBE_MAP,E);let Rt;if(E.isDepthTexture){if(We=v(E.format===xr,E.type),It)if(ge)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,We,ye.width,ye.height);else for(let Ye=0;Ye<6;Ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,We,ye.width,ye.height,0,Pe,Ue,null)}else if(Ve){ge&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,We,ye.width,ye.height);for(let Ye=0;Ye<6;Ye++){Rt=we[Ye].mipmaps;for(let Kt=0;Kt<Rt.length;Kt++){let Sn=Rt[Kt];E.format!==Ms?Pe!==null?ge?Oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt,0,0,Sn.width,Sn.height,Pe,Sn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt,We,Sn.width,Sn.height,0,Sn.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt,0,0,Sn.width,Sn.height,Pe,Ue,Sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt,We,Sn.width,Sn.height,0,Pe,Ue,Sn.data)}}}else{if(Rt=E.mipmaps,ge&&It){Rt.length>0&&gt++;let Ye=de(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,We,Ye.width,Ye.height)}for(let Ye=0;Ye<6;Ye++)if($){ge?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,we[Ye].width,we[Ye].height,Pe,Ue,we[Ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,We,we[Ye].width,we[Ye].height,0,Pe,Ue,we[Ye].data);for(let Kt=0;Kt<Rt.length;Kt++){let Jn=Rt[Kt].image[Ye].image;ge?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt+1,0,0,Jn.width,Jn.height,Pe,Ue,Jn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt+1,We,Jn.width,Jn.height,0,Pe,Ue,Jn.data)}}else{ge?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,Pe,Ue,we[Ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,We,Pe,Ue,we[Ye]);for(let Kt=0;Kt<Rt.length;Kt++){let Sn=Rt[Kt];ge?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt+1,0,0,Pe,Ue,Sn.image[Ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Kt+1,We,Pe,Ue,Sn.image[Ye])}}}M(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ke.__version=be.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function G(I,E,j,_e,be,ke){let Ge=r.convert(j.format,j.colorSpace),Se=r.convert(j.type),Me=w(j.internalFormat,Ge,Se,j.normalized,j.colorSpace),Ve=i.get(E),$=i.get(j);if($.__renderTarget=E,!Ve.__hasExternalTextures){let we=Math.max(1,E.width>>ke),ye=Math.max(1,E.height>>ke);be===n.TEXTURE_3D||be===n.TEXTURE_2D_ARRAY?t.texImage3D(be,ke,Me,we,ye,E.depth,0,Ge,Se,null):t.texImage2D(be,ke,Me,we,ye,0,Ge,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,be,$.__webglTexture,0,Mt(E)):(be===n.TEXTURE_2D||be>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_e,be,$.__webglTexture,ke),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(I,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let _e=E.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,ke=v(E.stencilBuffer,be),Ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(E),ke,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(E),ke,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ke,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,I)}else{let _e=E.textures;for(let be=0;be<_e.length;be++){let ke=_e[be],Ge=r.convert(ke.format,ke.colorSpace),Se=r.convert(ke.type),Me=w(ke.internalFormat,Ge,Se,ke.normalized,ke.colorSpace);Ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(E),Me,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(E),Me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(I,E,j){let _e=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let be=i.get(E.depthTexture);be.__renderTarget=E;let ke=_e?E.depthTexture.image[0]:E.depthTexture.image;(!be.__webglTexture||ke.width!==E.width||ke.height!==E.height)&&(ke.width=E.width,ke.height=E.height,E.depthTexture.needsUpdate=!0),_e?fe(E.depthTexture,0):le(E.depthTexture,0);let Ge=be.__webglTexture,Se=Mt(E),Me=_e?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Ve=E.depthTexture.format===xr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===dr)Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Me,Ge,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Me,Ge,0);else if(E.depthTexture.format===xr)Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ve,Me,Ge,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Ve,Me,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(I){let E=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let _e=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){let be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=_e}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let _e=0;_e<6;_e++)Fe(E.__webglFramebuffer[_e],I,_e);else I.texture.mipmaps.length>0?Fe(E.__webglFramebuffer[0],I,0):Fe(E.__webglFramebuffer,I,0);else if(j){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=n.createRenderbuffer(),Re(E.__webglDepthbuffer[_e],I,!1);else{let be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer[_e];n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,ke)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Re(E.__webglDepthbuffer,I,!1);else{let be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,ke)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(I,E,j){let _e=i.get(I);E!==void 0&&G(_e.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&H(I)}function Te(I){let E=I.texture,j=i.get(I),_e=i.get(E);I.addEventListener("dispose",U),T(I);let be=I.textures,ke=I.isWebGLCubeRenderTarget===!0,Ge=be.length>1;if(Ge||(_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture()),_e.__version=E.version,o.memory.textures++),ke){j.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps.length>0){j.__webglFramebuffer[Se]=[];for(let Me=0;Me<E.mipmaps.length;Me++)j.__webglFramebuffer[Se][Me]=n.createFramebuffer()}else j.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(E.mipmaps.length>0){j.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)j.__webglFramebuffer[Se]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let Se=0,Me=be.length;Se<Me;Se++){let Ve=i.get(be[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ce(I)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Se=0;Se<be.length;Se++){let Me=be[Se];j.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Se]);let Ve=r.convert(Me.format,Me.colorSpace),$=r.convert(Me.type),we=w(Me.internalFormat,Ve,$,Me.normalized,Me.colorSpace,I.isXRRenderTarget===!0),ye=Mt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,we,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,j.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ke){t.bindTexture(n.TEXTURE_CUBE_MAP,_e.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)G(j.__webglFramebuffer[Se][Me],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Me);else G(j.__webglFramebuffer[Se],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);M(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ge){for(let Se=0,Me=be.length;Se<Me;Se++){let Ve=be[Se],$=i.get(Ve),we=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,$.__webglTexture),Ze(we,Ve),G(j.__webglFramebuffer,I,Ve,n.COLOR_ATTACHMENT0+Se,we,0),M(Ve)&&y(we)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,_e.__webglTexture),Ze(Se,E),E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)G(j.__webglFramebuffer[Me],I,E,n.COLOR_ATTACHMENT0,Se,Me);else G(j.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Se,0);M(E)?y(Se):E.mipmaps.length>0&&n.texParameteri(Se,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&H(I)}function k(I){let E=I.textures;for(let j=0,_e=E.length;j<_e;j++){let be=E[j];if(M(be)&&be.mipmapsAutoUpdate===!0){let ke=b(I),Ge=i.get(be).__webglTexture;t.bindTexture(ke,Ge),y(ke),t.unbindTexture()}}}let et=[];function pt(I){if(I.samples>0){if(Ce(I)===!1){let E=I.textures,j=I.width,_e=I.height,be=n.COLOR_BUFFER_BIT,ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=i.get(I),Se=E.length>1;if(Se)for(let Ve=0;Ve<E.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ve=0;Ve<E.length;Ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(be|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(be|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);let $=i.get(E[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,j,_e,0,0,j,_e,be,n.NEAREST),l===!0&&(et.length=0,et.push(n.COLOR_ATTACHMENT0+Ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&et.push(ke),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Ve=0;Ve<E.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);let $=i.get(E[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,$,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Mt(I){return Math.min(s.maxSamples,I.samples)}function Ce(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function A(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function J(I,E){let j=I.colorSpace,_e=I.format,be=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==rl&&j!==yr&&(Zt.getTransfer(j)===an?(_e!==Ms||be!==Ii)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",j)),E}function de(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=O,this.setTextureUnits=Z,this.setTexture2D=le,this.setTexture2DArray=he,this.setTexture3D=ie,this.setTextureCube=fe,this.rebindTextures=pe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Ce,this.dispose=K}function gw(n,e){function t(i,s=yr){let r,o=Zt.getTransfer(s);if(i===Ii)return n.UNSIGNED_BYTE;if(i===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ff)return n.BYTE;if(i===pf)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===rs)return n.FLOAT;if(i===Ai)return n.HALF_FLOAT;if(i===xf)return n.ALPHA;if(i===yf)return n.RGB;if(i===Ms)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===Fu)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===Vr)return n.RG;if(i===Bu)return n.RG_INTEGER;if(i===zu)return n.RGBA_INTEGER;if(i===Fl||i===kl||i===Bl||i===zl)if(o===an)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hu||i===Gu||i===Vu||i===Wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xu||i===$u||i===qu||i===Yu||i===Ku||i===Hl||i===Zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xu||i===$u)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yu)return r.COMPRESSED_R11_EAC;if(i===Ku)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Hl)return r.COMPRESSED_RG11_EAC;if(i===Zu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ju||i===ju||i===Qu||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad||i===ld||i===cd||i===ud)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ju)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ju)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ld)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dd||i===hd||i===fd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dd)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pd||i===md||i===Gl||i===gd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===md)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yw=`
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

}`,Hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ln({vertexShader:xw,fragmentShader:yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gf=class extends xs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new Hf,g={},_=t.getContextAttributes(),M=null,y=null,b=[],w=[],v=new Ae,S=null,T=null,R=new Qn;R.viewport=new mn;let N=new Qn;N.viewport=new mn;let U=[R,N],z=new Cu,D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let le=b[q];return le===void 0&&(le=new ma,b[q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(q){let le=b[q];return le===void 0&&(le=new ma,b[q]=le),le.getGripSpace()},this.getHand=function(q){let le=b[q];return le===void 0&&(le=new ma,b[q]=le),le.getHandSpace()};function te(q){let le=w.indexOf(q.inputSource);if(le===-1)return;let he=b[le];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function ee(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<b.length;q++){let le=w[q];le!==null&&(w[q]=null,b[q].disconnect(le))}D=null,K=null,m.reset();for(let q in g)delete g[q];if(e.setRenderTarget(M),p=null,h=null,d=null,s=null,y=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ie=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=_.stencil?xr:dr,ie=_.stencil?To:bs);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ai(h.textureWidth,h.textureHeight,{format:Ms,type:Ii,depthTexture:new pr(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ai(p.framebufferWidth,p.framebufferHeight,{format:Ms,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let le=0;le<q.removed.length;le++){let he=q.removed[le],ie=w.indexOf(he);ie>=0&&(w[ie]=null,b[ie].disconnect(he))}for(let le=0;le<q.added.length;le++){let he=q.added[le],ie=w.indexOf(he);if(ie===-1){for(let Le=0;Le<b.length;Le++)if(Le>=w.length){w.push(he),ie=Le;break}else if(w[Le]===null){w[Le]=he,ie=Le;break}if(ie===-1)break}let fe=b[ie];fe&&fe.connect(he)}}function X(q,le){le===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(le.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let le=q.near,he=q.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(he=m.depthFar)),z.near=N.near=R.near=le,z.far=N.far=R.far=he,(D!==z.near||K!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,K=z.far),z.layers.mask=q.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let ie=q.parent,fe=z.cameras;X(z,ie);for(let Le=0;Le<fe.length;Le++)X(fe[Le],ie);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),W(q,z,ie)};function W(q,le,he){he===null?q.matrix.copy(le.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(le.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(le.projectionMatrix),q.projectionMatrixInverse.copy(le.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ha*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return g[q]};let O=null;function Z(q,le){if(u=le.getViewerPose(c||o),f=le,u!==null){let he=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ie=!1;he.length!==z.cameras.length&&(z.cameras.length=0,ie=!0);for(let He=0;He<he.length;He++){let Ze=he[He],Ke=null;if(p!==null)Ke=p.getViewport(Ze);else{let V=d.getViewSubImage(h,Ze);Ke=V.viewport,He===0&&(e.setRenderTargetTextures(y,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(y))}let me=U[He];me===void 0&&(me=new Qn,me.layers.enable(He),me.viewport=new mn,U[He]=me),me.matrix.fromArray(Ze.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Ze.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),He===0&&(z.matrix.copy(me.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ie===!0&&z.cameras.push(me)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let He=d.getDepthInformation(he[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<he.length;He++){let Ze=he[He].camera;if(Ze){let Ke=g[Ze];Ke||(Ke=new yl,g[Ze]=Ke);let me=d.getCameraImage(Ze);Ke.sourceTexture=me}}}}for(let he=0;he<b.length;he++){let ie=w[he],fe=b[he];ie!==null&&fe!==void 0&&fe.update(ie,le,c||o)}O&&O(q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),f=null}let Y=new Zm;Y.setAnimationLoop(Z),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}},vw=new _t,og=new Ct;og.set(-1,0,0,0,1,0,0,0,1);function _w(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Cf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===li&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===li&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(og),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===li&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bw(n,e,t,i){let s={},r={};function o(_,M){let y=M.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,M){let y=s[_.id];y===void 0&&(f(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let b=M.program;i.updateUBOMapping(_,b);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let M=n.createBuffer(),y=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,y,b),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(_){let M=s[_.id],y=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,v=y.length;w<v;w++){let S=y[w];if(Array.isArray(S))for(let T=0,R=S.length;T<R;T++)u(S[T],w,T,b);else u(S,w,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,M,y,b){if(h(_,M,y,b)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let T=0;T<v.length;T++){let R=v[T],N=x(R,!0);d(R,_.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function d(_,M,y){typeof _=="number"||typeof _=="boolean"?M[y]=_:_.isMatrix3?(M[y]=_.elements[0],M[y+1]=_.elements[1],M[y+2]=_.elements[2],M[y+3]=0,M[y+4]=_.elements[3],M[y+5]=_.elements[4],M[y+6]=_.elements[5],M[y+7]=0,M[y+8]=_.elements[6],M[y+9]=_.elements[7],M[y+10]=_.elements[8],M[y+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-y),y):_.toArray(M,y)}function h(_,M,y,b){let w=_.value,v=M+"_"+y;if(Array.isArray(w)){b[v]===void 0&&(b[v]=[]);let S=b[v],T=!1;for(let R=0;R<w.length;R++)p(w[R],S,R)===!0&&(T=!0);return T}return p(w,b,v)}function p(_,M,y){if(M[y]===void 0)return typeof _=="number"||typeof _=="boolean"?M[y]=_:ArrayBuffer.isView(_)?M[y]=_.slice():M[y]=_.clone(),!0;{let b=M[y];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return M[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function f(_){let M=_.uniforms,y=0,b=16;for(let v=0,S=M.length;v<S;v++){let T=Array.isArray(M[v])?M[v]:[M[v]];for(let R=0,N=T.length;R<N;R++){let U=T[R],z=Array.isArray(U.value)?U.value:[U.value],D=Array.isArray(M[v])||Array.isArray(U.value),K=y;for(let ee=0,ne=z.length;ee<ne;ee++){let X=z[ee],W=x(X,D),O=y%b,Z=O%W.boundary,Y=O+Z;y+=Z,Y!==0&&b-Y<W.storage&&(y+=b-Y),ee===0&&(K=y),y+=W.storage}let te=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new te((y-K)/Float32Array.BYTES_PER_ELEMENT),U.__offset=K}}let w=y%b;return w>0&&(y+=b-w),_.__size=y,_.__cache={},this}function x(_,M){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let M=_.target;M.removeEventListener("dispose",m),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var Mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zs=null;function Sw(){return Zs===null&&(Zs=new fl(Mw,16,16,Vr,Ai),Zs.name="DFG_LUT",Zs.minFilter=Rn,Zs.magFilter=Rn,Zs.wrapS=Vs,Zs.wrapT=Vs,Zs.generateMipmaps=!1,Zs.needsUpdate=!0),Zs}var Sd=class{constructor(e={}){let{canvas:t=xm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ii}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=p,m=new Set([zu,Bu,ku]),g=new Set([Ii,bs,Ra,To,Ou,Uu]),_=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,w=null,v=[],S=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ks,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,z=null,D=null,K=null;this._outputColorSpace=oi;let te=0,ee=0,ne=null,X=-1,W=null,O=new mn,Z=new mn,Y=null,q=new ze(0),le=0,he=t.width,ie=t.height,fe=1,Le=null,tt=null,He=new mn(0,0,he,ie),Ze=new mn(0,0,he,ie),Ke=!1,me=new Nr,V=new au,B=!1,re=!1,G=new _t,Re=new P,Fe=new mn,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function Te(){return ne===null?fe:1}let k=i;function et(C,Q){return t.getContext(C,Q)}let pt,Mt,Ce,A,J,de,I,E,j,_e,be,ke,Ge,Se,Me,Ve,$,we,ye,Pe,Ue,We,ge;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),k===null){let Q="webgl2";if(k=et(Q,C),k===null)throw et(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(C){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),Tt("WebGLRenderer: "+C.message),C}function It(){pt=new NM(k),pt.init(),Ue=new gw(k,pt),Mt=new SM(k,pt,e,Ue),Ce=new pw(k,pt),Mt.reversedDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),z=k.createFramebuffer(),D=k.createFramebuffer(),K=k.createFramebuffer(),A=new FM(k),J=new ew,de=new mw(k,pt,Ce,J,Mt,Ue,A),I=new DM(R),E=new B_(k),We=new bM(k,E),j=new OM(k,E,A,We),_e=new BM(k,j,E,We,A),we=new kM(k,Mt,de),Me=new wM(J),be=new QS(R,I,pt,Mt,We,Me),ke=new _w(R,J),Ge=new nw,Se=new lw(pt),$=new _M(R,I,Ce,_e,f,l),Ve=new fw(R,_e,Mt),ge=new bw(k,A,Mt,Ce),ye=new MM(k,pt,A),Pe=new UM(k,pt,A),A.programs=be.programs,R.capabilities=Mt,R.extensions=pt,R.properties=J,R.renderLists=Ge,R.shadowMap=Ve,R.state=Ce,R.info=A}x!==Ii&&(T=new HM(x,t.width,t.height,a,s,r));let Oe=new Gf(R,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(he,ie,!1))},this.getSize=function(C){return C.set(he,ie)},this.setSize=function(C,Q,ue=!0){if(Oe.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=C,ie=Q,t.width=Math.floor(C*fe),t.height=Math.floor(Q*fe),ue===!0&&(t.style.width=C+"px",t.style.height=Q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(he*fe,ie*fe).floor()},this.setDrawingBufferSize=function(C,Q,ue){he=C,ie=Q,fe=ue,t.width=Math.floor(C*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,C,Q)},this.setEffects=function(C){if(x===Ii){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Q=0;Q<C.length;Q++)if(C[Q].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,Q,ue,oe){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,Q,ue,oe),Ce.viewport(O.copy(He).multiplyScalar(Te()).round())},this.getScissor=function(C){return C.copy(Ze)},this.setScissor=function(C,Q,ue,oe){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,Q,ue,oe),Ce.scissor(Z.copy(Ze).multiplyScalar(Te()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(C){Ce.setScissorTest(Ke=C)},this.setOpaqueSort=function(C){Le=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,ue=!0){let oe=0;if(C){let ce=!1;if(ne!==null){let De=ne.texture.format;ce=m.has(De)}if(ce){let De=ne.texture.type,at=g.has(De),$e=$.getClearColor(),Je=$.getClearAlpha(),ut=$e.r,St=$e.g,Bt=$e.b;at?(_[0]=ut,_[1]=St,_[2]=Bt,_[3]=Je,k.clearBufferuiv(k.COLOR,0,_)):(M[0]=ut,M[1]=St,M[2]=Bt,M[3]=Je,k.clearBufferiv(k.COLOR,0,M))}else oe|=k.COLOR_BUFFER_BIT}Q&&(oe|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),$.dispose(),Ge.dispose(),Se.dispose(),de.dispose(),J.dispose(),I.dispose(),_e.dispose(),j.dispose(),We.dispose(),ge.dispose(),be.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",es),Oe.removeEventListener("sessionend",si),zi.stop()};function gt(C){C.preventDefault(),ll("WebGLRenderer: Context Lost."),N=!0}function Rt(){ll("WebGLRenderer: Context Restored."),N=!1;let C=A.autoReset,Q=Ve.enabled,ue=Ve.autoUpdate,oe=Ve.needsUpdate,ce=Ve.type;It(),A.autoReset=C,Ve.enabled=Q,Ve.autoUpdate=ue,Ve.needsUpdate=oe,Ve.type=ce}function Ye(C){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Kt(C){let Q=C.target;Q.removeEventListener("dispose",Kt),Sn(Q)}function Sn(C){Jn(C),J.remove(C)}function Jn(C){let Q=J.get(C).programs;Q!==void 0&&(Q.forEach(function(ue){be.releaseProgram(ue)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,ue,oe,ce,De){Q===null&&(Q=H);let at=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,$e=Go(C,Q,ue,oe,ce);Ce.setMaterial(oe,at);let Je=ue.index,ut=1;if(oe.wireframe===!0){if(Je=j.getWireframeAttribute(ue),Je===void 0)return;ut=2}let St=ue.drawRange,Bt=ue.attributes.position,lt=St.start*ut,zt=(St.start+St.count)*ut;De!==null&&(lt=Math.max(lt,De.start*ut),zt=Math.min(zt,(De.start+De.count)*ut)),Je!==null?(lt=Math.max(lt,0),zt=Math.min(zt,Je.count)):Bt!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,Bt.count));let ht=zt-lt;if(ht<0||ht===1/0)return;We.setup(ce,oe,$e,ue,Je);let Lt,Dt=ye;if(Je!==null&&(Lt=E.get(Je),Dt=Pe,Dt.setIndex(Lt)),ce.isMesh)oe.wireframe===!0?(Ce.setLineWidth(oe.wireframeLinewidth*Te()),Dt.setMode(k.LINES)):Dt.setMode(k.TRIANGLES);else if(ce.isLine){let xn=oe.linewidth;xn===void 0&&(xn=1),Ce.setLineWidth(xn*Te()),ce.isLineSegments?Dt.setMode(k.LINES):ce.isLineLoop?Dt.setMode(k.LINE_LOOP):Dt.setMode(k.LINE_STRIP)}else ce.isPoints?Dt.setMode(k.POINTS):ce.isSprite&&Dt.setMode(k.TRIANGLES);if(ce.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{let xn=ce._multiDrawStarts,ot=ce._multiDrawCounts,wn=ce._multiDrawCount,Gt=Je?E.get(Je).bytesPerElement:1,ri=J.get(oe).currentProgram.getUniforms();for(let Dn=0;Dn<wn;Dn++)ri.setValue(k,"_gl_DrawID",Dn),Dt.render(xn[Dn]/Gt,ot[Dn])}else if(ce.isInstancedMesh)Dt.renderInstances(lt,ht,ce.count);else if(ue.isInstancedBufferGeometry){let xn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ot=Math.min(ue.instanceCount,xn);Dt.renderInstances(lt,ht,ot)}else Dt.render(lt,ht)};function Ds(C,Q,ue,oe){U!==null&&C.isNodeMaterial&&U.setObject(oe,C),B===!0&&Me.setState(C,ue,!1),C.transparent===!0&&C.side===en&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,hs(C,Q,oe),C.side=qs,C.needsUpdate=!0,hs(C,Q,oe),C.side=en):hs(C,Q,oe)}this.compile=function(C,Q,ue=null){ue===null&&(ue=C),U!==null&&U.renderStart(C,Q,ue),w=Se.get(ue),w.init(Q),S.push(w),ue.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(w.pushLight(ce),ce.castShadow&&w.pushShadow(ce))}),C!==ue&&C.traverseVisible(function(ce){ce.isLight&&ce.layers.test(Q.layers)&&(w.pushLight(ce),ce.castShadow&&w.pushShadow(ce))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),re=this.localClippingEnabled,B=Me.init(this.clippingPlanes,re),B===!0&&Me.setGlobalState(this.clippingPlanes,Q),U!==null&&Ve.render(w.state.shadowsArray,ue,Q);let oe=new Set;return C.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;let De=ce.material;if(De)if(Array.isArray(De))for(let at=0;at<De.length;at++){let $e=De[at];Ds($e,ue,Q,ce),oe.add($e)}else Ds(De,ue,Q,ce),oe.add(De)}),w=S.pop(),U!==null&&U.renderEnd(),oe},this.compileAsync=function(C,Q,ue=null){let oe=this.compile(C,Q,ue);return new Promise(ce=>{function De(){if(oe.forEach(function(at){let Je=J.get(at).currentProgram;(Je===void 0||Je.isReady())&&oe.delete(at)}),oe.size===0){ce(C);return}setTimeout(De,10)}pt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ns=null;function Rr(C){Ns&&Ns(C)}function es(){zi.stop()}function si(){zi.start()}let zi=new Zm;zi.setAnimationLoop(Rr),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(C){Ns=C,Oe.setAnimationLoop(C),C===null?zi.stop():zi.start()},Oe.addEventListener("sessionstart",es),Oe.addEventListener("sessionend",si),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(C,Q);let ue=Oe.enabled===!0&&Oe.isPresenting===!0,oe=T!==null&&(ne===null||ue)&&T.begin(R,ne);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Q),Q=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Q,ne),w=Se.get(C,S.length),w.init(Q),w.state.textureUnits=de.getTextureUnits(),S.push(w),G.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Q.isArrayCamera?V.setFromArrayCamera(Q):me.setFromProjectionMatrix(G,is,Q.reversedDepth),re=this.localClippingEnabled,B=Me.init(this.clippingPlanes,re),b=Ge.get(C,v.length),b.init(),v.push(b),this.info.render.frame++,Oe.enabled===!0&&Oe.isPresenting===!0){let at=R.xr.getDepthSensingMesh();at!==null&&_n(at,Q,-1/0,R.sortObjects)}_n(C,Q,0,R.sortObjects),b.finish(),U!==null&&U.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(Le,tt),pe=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,pe&&$.addToRenderList(b,C),this.info.autoReset===!0&&this.info.reset(),B===!0&&Me.beginShadows();let ce=w.state.shadowsArray;if(Ve.render(ce,C,Q),B===!0&&Me.endShadows(),(oe&&T.hasRenderPass())===!1){let at=b.opaque,$e=b.transmissive;if(w.setupLights(),Q.isArrayCamera){let Je=Q.cameras;if($e.length>0)for(let ut=0,St=Je.length;ut<St;ut++){let Bt=Je[ut];Hn(at,$e,C,Bt)}pe&&$.render(C);for(let ut=0,St=Je.length;ut<St;ut++){let Bt=Je[ut];nr(b,C,Bt,Bt.viewport)}}else $e.length>0&&Hn(at,$e,C,Q),pe&&$.render(C),nr(b,C,Q)}ne!==null&&ee===0&&(de.updateMultisampleRenderTarget(ne),de.updateRenderTargetMipmap(ne)),oe&&T.end(R),C.isScene===!0&&C.onAfterRender(R,C,Q),We.resetDefaultState(),X=-1,W=null,S.pop(),S.length>0?(w=S[S.length-1],de.setTextureUnits(w.state.textureUnits),B===!0&&Me.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?b=v[v.length-1]:b=null,U!==null&&U.renderEnd()};function _n(C,Q,ue,oe){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let at=Q.isArrayCamera?V:me;if(!C.frustumCulled||C.intersectsFrustum(at)){oe&&Fe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(G);let $e=_e.update(C),Je=C.material;Je.visible&&b.push(C,$e,Je,ue,Fe.z,null,Q)}}else if(C.isMesh||C.isLine||C.isPoints){let at=Q.isArrayCamera?V:me;if(!C.frustumCulled||C.intersectsFrustum(at)){let $e=_e.update(C),Je=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Fe.copy(C.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),Fe.copy($e.boundingSphere.center)),Fe.applyMatrix4(C.matrixWorld).applyMatrix4(G)),Array.isArray(Je)){let ut=$e.groups;for(let St=0,Bt=ut.length;St<Bt;St++){let lt=ut[St],zt=Je[lt.materialIndex];zt&&zt.visible&&b.push(C,$e,zt,ue,Fe.z,lt,Q)}}else Je.visible&&b.push(C,$e,Je,ue,Fe.z,null,Q)}}}let De=C.children;for(let at=0,$e=De.length;at<$e;at++)_n(De[at],Q,ue,oe)}function nr(C,Q,ue,oe){let{opaque:ce,transmissive:De,transparent:at}=C;w.setupLightsView(ue),B===!0&&Me.setGlobalState(R.clippingPlanes,ue),oe&&Ce.viewport(O.copy(oe)),ce.length>0&&Os(ce,Q,ue),De.length>0&&Os(De,Q,ue),at.length>0&&Os(at,Q,ue),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Hn(C,Q,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[oe.id]===void 0){let lt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[oe.id]=new ai(1,1,{generateMipmaps:!0,type:lt?Ai:Ii,minFilter:_s,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let De=w.state.transmissionRenderTarget[oe.id],at=oe.viewport||O;De.setSize(at.z*R.transmissionResolutionScale,at.w*R.transmissionResolutionScale);let $e=R.getRenderTarget(),Je=R.getActiveCubeFace(),ut=R.getActiveMipmapLevel();R.setRenderTarget(De),R.getClearColor(q),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),pe&&$.render(ue);let St=R.toneMapping;R.toneMapping=Ks;let Bt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),w.setupLightsView(oe),B===!0&&Me.setGlobalState(R.clippingPlanes,oe),Os(C,ue,oe),de.updateMultisampleRenderTarget(De),de.updateRenderTargetMipmap(De),pt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let zt=0,ht=Q.length;zt<ht;zt++){let Lt=Q[zt],{object:Dt,geometry:xn,material:ot,group:wn}=Lt;if(ot.side===en&&Dt.layers.test(oe.layers)){let Gt=ot.side;ot.side=li,ot.needsUpdate=!0,bi(Dt,ue,oe,xn,ot,wn),ot.side=Gt,ot.needsUpdate=!0,lt=!0}}lt===!0&&(de.updateMultisampleRenderTarget(De),de.updateRenderTargetMipmap(De))}R.setRenderTarget($e,Je,ut),R.setClearColor(q,le),Bt!==void 0&&(oe.viewport=Bt),R.toneMapping=St}function Os(C,Q,ue){let oe=Q.isScene===!0?Q.overrideMaterial:null;for(let ce=0,De=C.length;ce<De;ce++){let at=C[ce],{object:$e,geometry:Je,group:ut}=at,St=at.material;St.allowOverride===!0&&oe!==null&&(St=oe),$e.layers.test(ue.layers)&&bi($e,Q,ue,Je,St,ut)}}function bi(C,Q,ue,oe,ce,De){U!==null&&ce.isNodeMaterial&&U.setObject(C,ce),C.onBeforeRender(R,Q,ue,oe,ce,De),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ce.onBeforeRender(R,Q,ue,oe,C,De),ce.transparent===!0&&ce.side===en&&ce.forceSinglePass===!1?(ce.side=li,ce.needsUpdate=!0,R.renderBufferDirect(ue,Q,oe,ce,C,De),ce.side=qs,ce.needsUpdate=!0,R.renderBufferDirect(ue,Q,oe,ce,C,De),ce.side=en):R.renderBufferDirect(ue,Q,oe,ce,C,De),C.onAfterRender(R,Q,ue,oe,ce,De)}function Us(C){let Q=0;for(let ue of C)ue.texture!==null&&Q++;return Q}function hs(C,Q,ue){Q.isScene!==!0&&(Q=H);let oe=J.get(C),ce=w.state.lights,De=w.state.shadowsArray,at=ce.state.version,$e=be.getParameters(C,ce.state,De,Q,ue,w.state.lightProbeGridArray),Je=be.getProgramCacheKey($e),ut=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Q.environment:null,oe.fog=Q.fog;let St=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=I.get(C.envMap||oe.environment,St),oe.envMapRotation=oe.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,ut===void 0&&(C.addEventListener("dispose",Kt),ut=new Map,oe.programs=ut,oe.programVariants=new Map);let Bt=ut.get(Je);if(Bt!==void 0){if(oe.currentProgram===Bt&&oe.lightsStateVersion===at)return ts(C,$e),Bt}else $e.uniforms=be.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,ue,$e),C.onBeforeCompile($e,R),Bt=be.acquireProgram($e,Je),ut.set(Je,Bt),oe.uniforms=$e.uniforms;let lt=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(lt.clippingPlanes=Me.uniform),ts(C,$e),oe.needsLights=Fs(C),oe.lightsStateVersion=at,oe.needsLights&&(lt.ambientLightColor.value=ce.state.ambient,lt.lightProbe.value=ce.state.probe,lt.sunLights.value=ce.state.sun,lt.sunLightShadows.value=ce.state.sunShadow,lt.directionalLights.value=ce.state.directional,lt.directionalLightShadows.value=ce.state.directionalShadow,lt.spotLights.value=ce.state.spot,lt.spotLightShadows.value=ce.state.spotShadow,lt.rectAreaLights.value=ce.state.rectArea,lt.ltc_1.value=ce.state.rectAreaLTC1,lt.ltc_2.value=ce.state.rectAreaLTC2,lt.pointLights.value=ce.state.point,lt.pointLightShadows.value=ce.state.pointShadow,lt.hemisphereLights.value=ce.state.hemi,lt.sunShadowMatrix.value=ce.state.sunShadowMatrix,lt.sunShadowCascade.value=ce.state.sunShadowCascade,lt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,lt.spotLightMatrix.value=ce.state.spotLightMatrix,lt.spotLightMap.value=ce.state.spotLightMap,lt.pointShadowMatrix.value=ce.state.pointShadowMatrix),oe.numLightProbeGrids=Us(w.state.lightProbeGridArray),oe.currentProgram=Bt,oe.uniformsList=null,Bt}function ro(C,Q,ue,oe,ce){let De=J.get(C),at=De.currentProgram.id+","+oe+","+ce,$e=De.programVariants.get(at);return $e===void 0?($e=hs(C,Q,ue),De.programVariants.set(at,$e)):(De.currentProgram=$e,De.uniformsList=null,De.outputColorSpace=oe,De.toneMapping=ce),$e}function Ho(C){if(C.uniformsList===null){let Q=C.currentProgram.getUniforms();C.uniformsList=Ca.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function ts(C,Q){let ue=J.get(C);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function Go(C,Q,ue,oe,ce){Q.isScene!==!0&&(Q=H),de.resetTextureUnits();let De=Q.fog,at=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?Q.environment:null,$e=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Zt.workingColorSpace,Je=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,ut=I.get(oe.envMap||at,Je),St=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Bt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),lt=!!ue.morphAttributes.position,zt=!!ue.morphAttributes.normal,ht=!!ue.morphAttributes.color,Lt=Ks;oe.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Lt=R.toneMapping);let Dt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,xn=Dt!==void 0?Dt.length:0,ot=J.get(oe),wn=w.state.lights;if(B===!0&&(re===!0||C!==W)){let xt=C===W&&oe.id===X;Me.setState(oe,C,xt)}let Gt=!1,ri=!1;oe.version===ot.__version?ot.needsLights&&ot.lightsStateVersion!==wn.state.version||ce.isBatchedMesh&&ot.batching===!1||!ce.isBatchedMesh&&ot.batching===!0||ce.isBatchedMesh&&ot.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&ot.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&ot.instancing===!1||!ce.isInstancedMesh&&ot.instancing===!0||ce.isSkinnedMesh&&ot.skinning===!1||!ce.isSkinnedMesh&&ot.skinning===!0||ce.isInstancedMesh&&ot.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ot.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ot.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ot.instancingMorph===!1&&ce.morphTexture!==null||ot.envMap!==ut||oe.fog===!0&&ot.fog!==De||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Me.numPlanes||ot.numIntersection!==Me.numIntersection)||ot.vertexAlphas!==St||ot.vertexTangents!==Bt||ot.morphTargets!==lt||ot.morphNormals!==zt||ot.morphColors!==ht||ot.morphTargetsCount!==xn||ot.numLightProbeGrids!==Us(w.state.lightProbeGridArray)?Gt=!0:(ot.outputColorSpace!==$e||ot.toneMapping!==Lt)&&(ri=!0):(Gt=!0,ot.__version=oe.version);let Dn=ot.currentProgram;(Gt===!0||ri===!0)&&(Dn=ri===!0?ro(oe,Q,ce,$e,Lt):hs(oe,Q,ce),U&&oe.isNodeMaterial&&U.onUpdateProgram(oe,Dn,ot));let Bs=!1,fi=!1,pi=!1,Xt=Dn.getUniforms(),yn=ot.uniforms;if(Ce.useProgram(Dn.program)&&(Bs=!0,fi=!0,pi=!0),oe.id!==X&&(X=oe.id,fi=!0),Bs||W!==C){Ce.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(k,"projectionMatrix",C.projectionMatrix),Xt.setValue(k,"viewMatrix",C.matrixWorldInverse);let Tn=Xt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,Re.setFromMatrixPosition(C.matrixWorld)),Mt.logarithmicDepthBuffer&&Xt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Xt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,fi=!0,pi=!0)}if(ot.needsLights&&(wn.state.sunShadowMap.length>0&&Xt.setValue(k,"sunShadowMap",wn.state.sunShadowMap,de),wn.state.directionalShadowMap.length>0&&Xt.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,de),wn.state.spotShadowMap.length>0&&Xt.setValue(k,"spotShadowMap",wn.state.spotShadowMap,de),wn.state.pointShadowMap.length>0&&Xt.setValue(k,"pointShadowMap",wn.state.pointShadowMap,de)),ce.isSkinnedMesh){Xt.setOptional(k,ce,"bindMatrix"),Xt.setOptional(k,ce,"bindMatrixInverse");let xt=ce.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),Xt.setValue(k,"boneTexture",xt.boneTexture,de))}ce.isBatchedMesh&&(Xt.setOptional(k,ce,"batchingTexture"),Xt.setValue(k,"batchingTexture",ce._matricesTexture,de),Xt.setOptional(k,ce,"batchingIdTexture"),Xt.setValue(k,"batchingIdTexture",ce._indirectTexture,de),Xt.setOptional(k,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Xt.setValue(k,"batchingColorTexture",ce._colorsTexture,de));let Ln=ue.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&we.update(ce,ue,Dn),(fi||ot.receiveShadow!==ce.receiveShadow)&&(ot.receiveShadow=ce.receiveShadow,Xt.setValue(k,"receiveShadow",ce.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&Q.environment!==null&&(yn.envMapIntensity.value=Q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=Sw()),fi){if(Xt.setValue(k,"toneMappingExposure",R.toneMappingExposure),ot.needsLights&&hi(yn,pi),De&&oe.fog===!0&&ke.refreshFogUniforms(yn,De),ke.refreshMaterialUniforms(yn,oe,fe,ie,w.state.transmissionRenderTarget[C.id]),ot.needsLights&&ot.numLightProbeGrids>0){let xt=y,Tn=0;for(let Pi of w.state.lightProbeGridArray)Pi.texture!==null&&(xt.textures[Tn]=Pi.texture,xt.min[Tn]=Pi.boundingBox.min,xt.max[Tn]=Pi.boundingBox.max,xt.resolution[Tn]=Pi.resolution,Tn++);for(let Pi in xt)xt[Pi].length=Tn;yn.probesSH.value=xt.textures,yn.probesMin.value=xt.min,yn.probesMax.value=xt.max,yn.probesResolution.value=xt.resolution}Ca.upload(k,Ho(ot),yn,de)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ca.upload(k,Ho(ot),yn,de),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Xt.setValue(k,"center",ce.center),Xt.setValue(k,"modelViewMatrix",ce.modelViewMatrix),Xt.setValue(k,"normalMatrix",ce.normalMatrix),Xt.setValue(k,"modelMatrix",ce.matrixWorld),oe.uniformsGroups!==void 0){let xt=oe.uniformsGroups;for(let Tn=0,Pi=xt.length;Tn<Pi;Tn++){let oo=xt[Tn];ge.update(oo,Dn),ge.bind(oo,Dn)}}return Dn}function hi(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.sunLights.needsUpdate=Q,C.sunLightShadows.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function Fs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(C,Q,ue){let oe=J.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),J.get(C.texture).__webglTexture=Q,J.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){let ue=J.get(C);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,ue=0){ne=C,te=Q,ee=ue;let oe=null,ce=!1,De=!1;if(C){let $e=J.get(C);if($e.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(k.FRAMEBUFFER,$e.__webglFramebuffer),O.copy(C.viewport),Z.copy(C.scissor),Y=C.scissorTest,Ce.viewport(O),Ce.scissor(Z),Ce.setScissorTest(Y),X=-1;return}else if($e.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if($e.__hasExternalTextures)de.rebindTextures(C,J.get(C.texture).__webglTexture,J.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let St=C.depthTexture;if($e.__boundDepthTexture!==St){if(St!==null&&J.has(St)&&(C.width!==St.image.width||C.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}let Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);let ut=J.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ut[Q])?oe=ut[Q][ue]:oe=ut[Q],ce=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?oe=J.get(C).__webglMultisampledFramebuffer:Array.isArray(ut)?oe=ut[ue]:oe=ut,O.copy(C.viewport),Z.copy(C.scissor),Y=C.scissorTest}else O.copy(He).multiplyScalar(fe).floor(),Z.copy(Ze).multiplyScalar(fe).floor(),Y=Ke;if(ue!==0&&(oe=z),Ce.bindFramebuffer(k.FRAMEBUFFER,oe)&&Ce.drawBuffers(C,oe),Ce.viewport(O),Ce.scissor(Z),Ce.setScissorTest(Y),ce){let $e=J.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$e.__webglTexture,ue)}else if(De){let $e=Q;for(let Je=0;Je<C.textures.length;Je++){let ut=J.get(C.textures[Je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Je,ut.__webglTexture,ue,$e)}}else if(C!==null&&ue!==0){let $e=J.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$e.__webglTexture,ue)}X=-1};function ks(C){let Q=J.get(C);return(Q.__readFormat!==C.format||Q.__readType!==C.type)&&(Q.__readFormat=C.format,Q.__readType=C.type,Q.__formatReadable=Mt.textureFormatReadable(C.format),Q.__typeReadable=Mt.textureTypeReadable(C.type)),Q}this.readRenderTargetPixels=function(C,Q,ue,oe,ce,De,at,$e=0){if(!(C&&C.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&at!==void 0&&(Je=Je[at],Array.isArray(Je)&&(Je=Je[0])),Je){Ce.bindFramebuffer(k.FRAMEBUFFER,Je);try{let ut=C.textures[$e],St=ut.format,Bt=ut.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$e);let lt=ks(ut);if(lt.__formatReadable===!1){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt.__typeReadable===!1){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-oe&&ue>=0&&ue<=C.height-ce&&k.readPixels(Q,ue,oe,ce,Ue.convert(St),Ue.convert(Bt),De)}finally{let ut=ne!==null?J.get(ne).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(C,Q,ue,oe,ce,De,at,$e=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=J.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&at!==void 0&&(Je=Je[at],Array.isArray(Je)&&(Je=Je[0])),Je)if(Q>=0&&Q<=C.width-oe&&ue>=0&&ue<=C.height-ce){Ce.bindFramebuffer(k.FRAMEBUFFER,Je);let ut=C.textures[$e],St=ut.format,Bt=ut.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+$e);let lt=ks(ut);if(lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,zt),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),k.readPixels(Q,ue,oe,ce,Ue.convert(St),Ue.convert(Bt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let ht=ne!==null?J.get(ne).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,ht);let Lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await vm(k,Lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(zt),k.deleteSync(Lt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,ue=0){let oe=Math.pow(2,-ue),ce=Math.floor(C.image.width*oe),De=Math.floor(C.image.height*oe),at=Q!==null?Q.x:0,$e=Q!==null?Q.y:0;de.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,at,$e,ce,De),Ce.unbindTexture()},this.copyTextureToTexture=function(C,Q,ue=null,oe=null,ce=0,De=0){let at,$e,Je,ut,St,Bt,lt,zt,ht,Lt=C.isCompressedTexture?C.mipmaps[De]:C.image;if(ue!==null)at=ue.max.x-ue.min.x,$e=ue.max.y-ue.min.y,Je=ue.isBox3?ue.max.z-ue.min.z:1,ut=ue.min.x,St=ue.min.y,Bt=ue.isBox3?ue.min.z:0;else{let Xt=Math.pow(2,-ce);at=Math.floor(Lt.width*Xt),$e=Math.floor(Lt.height*Xt),C.isDataArrayTexture?Je=Lt.depth:C.isData3DTexture?Je=Math.floor(Lt.depth*Xt):Je=1,ut=0,St=0,Bt=0}oe!==null?(lt=oe.x,zt=oe.y,ht=oe.z):(lt=0,zt=0,ht=0);let Dt=Ue.convert(Q.format),xn=Ue.convert(Q.type),ot;Q.isData3DTexture?(de.setTexture3D(Q,0),ot=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(de.setTexture2DArray(Q,0),ot=k.TEXTURE_2D_ARRAY):(de.setTexture2D(Q,0),ot=k.TEXTURE_2D),Ce.activeTexture(k.TEXTURE0),Ce.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),Ce.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Ce.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);let wn=Ce.getParameter(k.UNPACK_ROW_LENGTH),Gt=Ce.getParameter(k.UNPACK_IMAGE_HEIGHT),ri=Ce.getParameter(k.UNPACK_SKIP_PIXELS),Dn=Ce.getParameter(k.UNPACK_SKIP_ROWS),Bs=Ce.getParameter(k.UNPACK_SKIP_IMAGES);Ce.pixelStorei(k.UNPACK_ROW_LENGTH,Lt.width),Ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Lt.height),Ce.pixelStorei(k.UNPACK_SKIP_PIXELS,ut),Ce.pixelStorei(k.UNPACK_SKIP_ROWS,St),Ce.pixelStorei(k.UNPACK_SKIP_IMAGES,Bt);let fi=C.isDataArrayTexture||C.isData3DTexture,pi=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){let Xt=J.get(C),yn=J.get(Q),Ln=J.get(Xt.__renderTarget),xt=J.get(yn.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Tn=0;Tn<Je;Tn++)fi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(C).__webglTexture,ce,Bt+Tn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(Q).__webglTexture,De,ht+Tn)),k.blitFramebuffer(ut,St,ut+at,St+$e,lt,zt,lt+at,zt+$e,k.DEPTH_BUFFER_BIT,k.NEAREST);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ce!==0||C.isRenderTargetTexture||J.has(C)){let Xt=J.get(C),yn=J.get(Q);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,D),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,K);for(let Ln=0;Ln<Je;Ln++)fi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.__webglTexture,ce,Bt+Ln):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xt.__webglTexture,ce),pi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,De,ht+Ln):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,De),ce!==0?k.blitFramebuffer(ut,St,ut+at,St+$e,lt,zt,lt+at,zt+$e,k.COLOR_BUFFER_BIT,k.NEAREST):pi?k.copyTexSubImage3D(ot,De,lt,zt,ht+Ln,ut,St,at,$e):k.copyTexSubImage2D(ot,De,lt,zt,ut,St,at,$e);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pi?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(ot,De,lt,zt,ht,at,$e,Je,Dt,xn,Lt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(ot,De,lt,zt,ht,at,$e,Je,Dt,Lt.data):k.texSubImage3D(ot,De,lt,zt,ht,at,$e,Je,Dt,xn,Lt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,lt,zt,at,$e,Dt,xn,Lt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,lt,zt,Lt.width,Lt.height,Dt,Lt.data):k.texSubImage2D(k.TEXTURE_2D,De,lt,zt,at,$e,Dt,xn,Lt);Ce.pixelStorei(k.UNPACK_ROW_LENGTH,wn),Ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt),Ce.pixelStorei(k.UNPACK_SKIP_PIXELS,ri),Ce.pixelStorei(k.UNPACK_SKIP_ROWS,Dn),Ce.pixelStorei(k.UNPACK_SKIP_IMAGES,Bs),De===0&&Q.generateMipmaps===!0&&Q.mipmapsAutoUpdate===!0&&k.generateMipmap(ot),Ce.unbindTexture()},this.initRenderTarget=function(C){J.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){te=0,ee=0,ne=null,Ce.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}};var ag={type:"change"},Wf={type:"start"},cg={type:"end"},Td=new fr,lg=new Si,ww=Math.cos(70*Wr.DEG2RAD),$n=new P,Li=2*Math.PI,rn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vf=1e-6,Ad=class extends Nl{constructor(e,t=null){super(e,t),this.state=rn.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wa,this._sphericalDelta=new wa,this._scale=1,this._panOffset=new P,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new P,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tw.bind(this),this._onPointerDown=Ew.bind(this),this._onPointerUp=Aw.bind(this),this._onContextMenu=Nw.bind(this),this._onMouseWheel=Pw.bind(this),this._onKeyDown=Iw.bind(this),this._onTouchStart=Lw.bind(this),this._onTouchMove=Dw.bind(this),this._onMouseDown=Rw.bind(this),this._onMouseMove=Cw.bind(this),this._interceptControlDown=Ow.bind(this),this._interceptControlUp=Uw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ag),this.update(),this.state=rn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;$n.copy(t).sub(this.target),$n.applyQuaternion(this._quat),this._spherical.setFromVector3($n),this.autoRotate&&this.state===rn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Li:i>Math.PI&&(i-=Li),s<-Math.PI?s+=Li:s>Math.PI&&(s-=Li),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if($n.setFromSpherical(this._spherical),$n.applyQuaternion(this._quatInverse),t.copy(this.target).add($n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$n.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=$n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Td.origin.copy(this.object.position),Td.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Td.direction))<ww?this.object.lookAt(this.target):(lg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Td.intersectPlane(lg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vf||this._lastTargetPosition.distanceToSquared(this.target)>Vf?(this.dispatchEvent(ag),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Li/60*this.autoRotateSpeed*e:Li/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$n.setFromMatrixColumn(t,0),$n.multiplyScalar(-e),this._panOffset.add($n)}_panUp(e,t){this.screenSpacePanning===!0?$n.setFromMatrixColumn(t,1):($n.setFromMatrixColumn(t,0),$n.crossVectors(this.object.up,$n)),$n.multiplyScalar(e),this._panOffset.add($n)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;$n.copy(s).sub(this.target);let r=$n.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/t.clientHeight),this._rotateUp(Li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/t.clientHeight),this._rotateUp(Li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Ew(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Tw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Aw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cg),this.state=rn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rn.DOLLY;break;case Br.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rn.ROTATE}break;case Br.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rn.PAN}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Wf)}function Cw(n){switch(this.state){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Pw(n){this.enabled===!1||this.enableZoom===!1||this.state!==rn.NONE||(n.preventDefault(),this.dispatchEvent(Wf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cg))}function Iw(n){this.enabled!==!1&&this._handleKeyDown(n)}function Lw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1){this.state=rn.NONE;break}this._handleTouchStartRotate(n),this.state=rn.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1){this.state=rn.NONE;break}this._handleTouchStartPan(n),this.state=rn.TOUCH_PAN;break;default:this.state=rn.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rn.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rn.TOUCH_DOLLY_ROTATE;break;default:this.state=rn.NONE}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Wf)}function Dw(n){switch(this._trackPointer(n),this.state){case rn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rn.NONE}}function Nw(n){this.enabled!==!1&&n.preventDefault()}function Ow(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ql=new P;function os(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ql.copy(e),ql[i]=0,ql.normalize();let c=.5*o/(o+a),u=1-ql.angleTo(n)/l;return Math.sign(ql[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Rd=class n extends nn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,u=new P(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new P,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:x.set(1,0,0),p[_+0]=os(x,c,"z","y",r,i),p[_+1]=1-os(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[_+0]=1-os(x,c,"z","y",r,i),p[_+1]=1-os(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[_+0]=1-os(x,c,"x","z",r,e),p[_+1]=os(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),p[_+0]=1-os(x,c,"x","z",r,e),p[_+1]=1-os(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),p[_+0]=1-os(x,c,"x","y",r,e),p[_+1]=1-os(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[_+0]=os(x,c,"x","y",r,e),p[_+1]=1-os(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Cd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new $t;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=ug(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);let f=ug(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}}return l}function ug(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ei(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){let x=u.getComponent(h,f);a.setComponent(h+d,f,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Fw=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function kw(n,e){return Fw(n,e)}function Pt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=kw(n,e),a=o.getContext("2d"),l=new gl(o);i&&(l.colorSpace=oi),l.anisotropy=r,s&&(l.wrapS=ur,l.wrapT=ur,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var At='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',bt='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Ht=Math.PI*2,js=Math.PI/180,st=(n,e,t)=>n<e?e:n>t?t:n,Xi=(n,e,t)=>n+(e-n)*t,Xf=n=>{let e=st(n,0,1);return e*e*(3-2*e)},as=n=>{let e=st(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},jt=(n,e,t,i)=>Xi(n,e,1-Math.exp(-t*i));function Yl(n,e,t){let i=(e-n)%Ht;return i>Math.PI&&(i-=Ht),i<-Math.PI&&(i+=Ht),n+i*t}function $f(n,e){let t=(e-n)%Ht;return t>Math.PI&&(t-=Ht),t<-Math.PI&&(t+=Ht),t}var dg=new _t,hg=new un,fg=new Gn,pg=new P,mg=new P;function L(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return fg.set(t[0],t[1],t[2]),hg.setFromEuler(fg),pg.set(e[0],e[1],e[2]),mg.set(i[0],i[1],i[2]),dg.compose(pg,hg,mg),n.applyMatrix4(dg),n}var Ie=(n,e,t,i=.02,s=2)=>new Rd(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Ee=(n,e,t)=>new nn(n,e,t),ae=(n,e,t,i=32,s=!1)=>new Nn(n,e,t,i,1,s),Di=(n,e=24,t=16)=>new Fn(n,e,t),Qt=(n,e,t=12,i=48,s=Ht)=>new Ti(n,e,t,i,s),ci=(n,e=48)=>new Tl(n.map(([t,i])=>new Ae(t,i)),e);function La(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Ht;o.push(L(ae(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function qf(n,e,t,i,s=.02){let r=new vs,o=Ht/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,p]=u[d],f=Math.cos(p)*h,x=Math.sin(p)*h;l===0&&d===0?r.moveTo(f,x):r.lineTo(f,x)}}if(r.closePath(),s>0){let l=new mr;l.absarc(0,0,s,0,Ht,!0),r.holes.push(l)}let a=new $s(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function ui(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new P(l[0],l[1],l[2])),r=new va,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),p=Math.min(t,d.length()/2,h.length()/2),f=c.clone().sub(d.normalize().multiplyScalar(p)),x=c.clone().add(h.normalize().multiplyScalar(p));f.distanceTo(o)>1e-5&&r.add(new yo(o.clone(),f)),r.add(new vo(f,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new yo(o.clone(),c.clone()))}let a=r.getLength();return new Al(r,Math.max(16,Math.round(a*40)),e,i,!1)}var dt=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Jt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Cd(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new nt(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Qe(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new nt(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Nt(n,e,t){let i=new Jt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Pd=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new P(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new P){let i=st(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function gg(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Wt(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let f=0;f<=a;f++){let x=f/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),_=Math.sin(m),M=n+t*g,y=e-t*_,b=l?-g:g,w=l?_:-_;c.push(M,r,y,M,o,y),u.push(b,0,w,b,0,w),d.push(x,0,x,1)}for(let f=0;f<a;f++){let x=f*2;h.push(x,x+2,x+3,x,x+3,x+1)}let p=new $t;return p.setAttribute("position",new ft(c,3)),p.setAttribute("normal",new ft(u,3)),p.setAttribute("uv",new ft(d,2)),p.setIndex(h),p}function Ss(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let p=0;p<u;p++){let f=n[p],x=n[(p+1)%c],m=x[0]-f[0],g=x[1]-f[1],_=Math.hypot(m,g);if(_<1e-6)continue;let M=g/_,y=-m/_,b=!1;s&&!s((f[0]+x[0])/2,(f[1]+x[1])/2,M,y)&&(M=-M,y=-y,b=!0);let w=r.length/3;r.push(f[0],e,f[1],f[0],t,f[1],x[0],e,x[1],x[0],t,x[1]);for(let v=0;v<4;v++)o.push(M,0,y);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,b?l.push(w,w+2,w+3,w,w+3,w+1):l.push(w,w+1,w+3,w,w+3,w+2)}let h=new $t;return h.setAttribute("position",new ft(r,3)),h.setAttribute("normal",new ft(o,3)),h.setAttribute("uv",new ft(a,2)),h.setIndex(l),h}function xg(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Bw(){let n=xg(7);return Pt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function zw(){let n=xg(23);return Pt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Ht),e.stroke()},{anisotropy:8})}function Hw(){return Pt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function Gw(){return Pt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function Vw(){return Pt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var Pn=n=>new Et(n);function Ni({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=qs,emissive:a=0,emissiveIntensity:l=0}={}){let c=new Et({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Ta,c.blendSrc=Hr,c.blendDst=Gr,c.blendSrcAlpha=Hr,c.blendDstAlpha=Gr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function yg(n="high"){let e={brushed:Bw().tex,wafer:zw().tex,radial:Hw().tex,hazard:Gw().tex,grille:Vw().tex};return{M:{alu:Pn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:Pn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:Pn({color:14936044,metalness:1,roughness:.08}),steel:Pn({color:11646654,metalness:1,roughness:.28}),darkSteel:Pn({color:6251886,metalness:1,roughness:.34}),brass:Pn({color:13876630,metalness:1,roughness:.3}),copper:Pn({color:12946278,metalness:1,roughness:.3}),gold:Pn({color:15320959,metalness:1,roughness:.22}),white:Pn({color:15856630,metalness:0,roughness:.32}),graphite:Pn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:Pn({color:5073918,metalness:.2,roughness:.35}),orange:Pn({color:13137466,metalness:.3,roughness:.36}),rubber:Pn({color:1382171,metalness:0,roughness:.8}),plastic:Pn({color:2303532,metalness:0,roughness:.45}),ceramic:Pn({color:15001579,metalness:0,roughness:.42}),grille:Pn({map:e.grille,metalness:.6,roughness:.45}),hazard:Pn({map:e.hazard,metalness:.2,roughness:.55}),glass:Ni({color:14674421,opacity:.08,fresnel:.55}),smoke:Ni({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:en}),fuel:Pn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:Pn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:Pn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:Pn({color:13949150,metalness:0,roughness:.25}),wall:Pn({color:15133166,metalness:0,roughness:.5}),shadow:new kt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new Rl({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:Pn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function qt(n,e=0){let t=new ze(n);return new Et({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function Da(n,e=1.25){return new Et({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function qn(n,e=.55){return new Et({map:n,metalness:e,roughness:.42})}var Ro=Math.PI/180,Xe={cx:.5,cz:-1,r:22,h:13.5},ls={panes:24,finDepth:.36,doorA0:263*Ro,doorA1:277*Ro,doorH:3.1},Xr={a0:236*Ro,a1:304*Ro,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},cs={r:22.35,groundY:-420},ni={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Ro,targetR:17,targetYMin:.4,targetYMax:12},Ot={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Ld=.45,_r=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],rt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Ro,a1:142*Ro,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Yf=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function qr(n,e,t=0,i=new P){return i.set(Xe.cx+e*Math.cos(n),t,Xe.cz-e*Math.sin(n))}var Kf=Math.PI*2,Id=(n,e,t)=>Math.min(t,Math.max(e,n)),vg=(n,e)=>{let t=Math.abs(n-e)%Kf;return t>Math.PI?Kf-t:t};function Zf(n,e){let t=Math.atan2(-(e-Xe.cz),n-Xe.cx);return t<0?t+Kf:t}function $r(n){let e=ni,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Zf(n.x,n.z);return i<=e.outerR+t?s>=ls.doorA0+e.edge-t&&s<=ls.doorA1-e.edge+t&&n.y<=ls.doorH-.25+t?"door":null:s>=Xr.a0+e.edge-t&&s<=Xr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function _g(n,e,t){let i=n.x-Xe.cx,s=n.z-Xe.cz,r=Math.hypot(i,s),o=Id(r,e,t);r>1e-9&&o!==r&&(n.x=Xe.cx+i*o/r,n.z=Xe.cz+s*o/r)}function bg(n,e,t){let i=Zf(n.x,n.z);if(i>=e&&i<=t)return;let s=vg(i,e)<vg(i,t)?e:t,r=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);n.x=Xe.cx+r*Math.cos(s),n.z=Xe.cz-r*Math.sin(s)}function Jf(n,e=null){if($r(n))return n;let t=ni,i=e?$r(e):null;if(!i){let s=Math.hypot(n.x-Xe.cx,n.z-Xe.cz),r=Zf(n.x,n.z);i=s>Xe.r&&r>=Xr.a0&&r<=Xr.a1?"balcony":"hall"}if(i==="door"){if(bg(n,ls.doorA0+t.edge,ls.doorA1-t.edge),n.y=Id(n.y,t.yMin,ls.doorH-.25),$r(n))return n;i=Math.hypot(e.x-Xe.cx,e.z-Xe.cz)>Xe.r?"balcony":"hall"}return i==="balcony"?(bg(n,Xr.a0+t.edge,Xr.a1-t.edge),_g(n,t.outerR+.001,t.balconyR),n.y=Id(n.y,t.yMin,t.balconyYMax)):(_g(n,0,t.r),n.y=Id(n.y,t.yMin,t.yMax)),n}function Dd(){let n=rt.screenR,e=Yf.reduce((i,s)=>i+s.w,0)+rt.gap*(Yf.length-1),t=Math.PI/2+e/n/2;return Yf.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-rt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:rt.screenY-a/2,y1:rt.screenY+a/2}})}function Ww(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function Xw(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function $w(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?Ww(e,t,n.a,n.b,n.r):Xw(e,t,n.c,n.h)}function Sg(n,e,t=_r){let i=1/0;for(let s of t)i=Math.min(i,$w(s,n,e));return i}function wg(n,e){let t=Math.abs(n-Ot.cx)-Ot.hx+Ot.r,i=Math.abs(e-Ot.cz)-Ot.hz+Ot.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Ot.r}var Bn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function Mg(n){return n.type==="circle"?`length(p - vec2(${Bn(n.c[0])}, ${Bn(n.c[1])})) - ${Bn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${Bn(n.a[0])}, ${Bn(n.a[1])}), vec2(${Bn(n.b[0])}, ${Bn(n.b[1])}), ${Bn(n.r)})`:`lSdBox(p, vec2(${Bn(n.c[0])}, ${Bn(n.c[1])}), vec2(${Bn(n.h[0])}, ${Bn(n.h[1])}))`}function Eg(){let n=_r.find(t=>t.id==="cell");return`
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
${_r.map((t,i)=>i===0?`  float d = ${Mg(t)};`:`  d = min(d, ${Mg(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${Bn(Ot.cx)}, ${Bn(Ot.cz)})) - vec2(${Bn(Ot.hx-Ot.r)}, ${Bn(Ot.hz-Ot.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${Bn(Ot.r)};
}
const vec2 HUB_C = vec2(${Bn(n.c[0])}, ${Bn(n.c[1])});
const float HUB_R = ${Bn(n.r)};
`}function Tg(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Ot,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,p)=>{let f=Math.max(1,Math.ceil(Math.hypot(h-u,p-d)/n));for(let x=0;x<f;x++)o.push([u+(h-u)*x/f,d+(p-d)*x/f])};for(let u=0;u<4;u++){let[d,h,p]=a[u];for(let b=0;b<l;b++){let w=p+Math.PI/2*b/l;o.push([d+r*Math.cos(w),h+r*Math.sin(w)])}let[f,x,m]=a[(u+1)%4],g=d+r*Math.cos(p+Math.PI/2),_=h+r*Math.sin(p+Math.PI/2),M=f+r*Math.cos(m),y=x+r*Math.sin(m);c(g,_,M,y)}return o}var Kl=Math.PI/180;function qw(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function $i(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function Ag(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function Yw(n,e){return(n/(2*Math.PI)+.5)*e}function Zl(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,$i(r,o)),a.addColorStop(.45,$i(r,o*.42)),a.addColorStop(1,$i(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function Kw(n,e,t,i){let s=i.sky,r=e/360,o=M=>(.5-M/180)*t,a=(M,y)=>{y(M-e),y(M),y(M+e)},l=qw(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[M,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(M)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=Yw(Math.atan2(d[2],d[0]),e),p=o(Math.asin(d[1])/Kl);if(a(h,M=>{Zl(n,M,o(3),100*r,16*r,s.sunGlow,.55),Zl(n,M,p,60*r,60*r,s.sunGlow,.42),Zl(n,M,p,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,M=>Zl(n,M,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let M=0;M<54;M++){let y=3+24*Math.pow(l(),1.6),b=l()*e,w=(8+42*l())*r,v=(.35+1.4*l())*r,S=Math.abs(b-h)%e;S=Math.min(S,e-S)/e;let T=Math.max(0,1-S/.28),R=Ag(s.cloudDark,s.cloudLit,T),N=s.clouds*(.18+.32*l())*(.6+.4*T);a(b,U=>Zl(n,U,o(y),w,v,R,N))}n.filter="none"}if(s.stars>0)for(let M=0;M<760;M++){let y=Math.sin(16*Kl)+l()*(1-Math.sin(16*Kl)),b=Math.asin(y)/Kl,w=Math.min(1,Math.max(0,(b-16)/26)),v=s.stars*w*(.25+.7*l()*l());if(v<.03)continue;let S=.7+l()*1.1,T=1/Math.max(.12,Math.cos(b*Kl));n.fillStyle=l()<.2?$i("#bcd2ff",v):$i("#ffffff",v),n.fillRect(l()*e,o(b),S*T,S)}let f=s.far,x=Ag(f.body,f.haze,.55),m=0;for(;m<e;){let M=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,b=o(y),w=o(-2.5);if(n.fillStyle=x,n.fillRect(m,b,M,w-b),y>2.1&&l()<.6&&n.fillRect(m+M/2-.5,b-3-l()*5,1,4+l()*5),f.windows>0){let v=Math.floor((w-b)*M*.05*f.windows);for(let S=0;S<v;S++){let T=l(),R=T<.62?"#ffc078":T<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=$i(R,(.25+.4*l())*Math.min(1,f.windows*1.4)),n.fillRect(m+Math.floor(l()*M),b+Math.floor(l()*(w-b)),1,1)}}f.neon>0&&l()<.04&&(n.fillStyle=$i(l()<.7?"#46e6ff":"#ffb347",.45*f.neon),n.fillRect(m,b-1,M,1)),m+=M+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,$i(f.haze,0)),g.addColorStop(.45,$i(f.haze,.38)),g.addColorStop(1,$i(f.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let M=Math.round(9e3*s.lights);for(let y=0;y<M;y++){let b=Math.pow(l(),1.3),w=-.3-3.9*b,v=l(),S=v<.6?"#ffb46a":v<.82?"#ffe2b0":v<.93?"#ffffff":"#55dcff";n.fillStyle=$i(S,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*b)),n.fillRect(l()*e,o(w),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,$i(s.groundHaze,.1)),_.addColorStop(1,$i(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var Zw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,Jw=`
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
`;function jw(n,e){let t=new go;t.background=new ze(n.clear);let i=new nt(new Fn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new kt({side:en,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let p=new nt(u,d);return p.position.set(h[0],h[1],h[2]),t.add(p),p},a=Xe.cx,l=Xe.cz;o(new Cn(6.4,Xe.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,Xe.h,l]),o(new Ti(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,Xe.h-.25,l]),o(new Un(Xe.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new Cn(Xe.r-.6,Xe.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,Xe.h-.55,l]),o(Wt(a,l,Xe.r-.6,0,Math.PI*2,Xe.h-.55,Xe.h,64,!0),r(s.column,.85)),o(Wt(a,l,rt.r,rt.a0,rt.a1,rt.bandY0,rt.bandY1,32,!0),r(s.media,1)),o(Wt(a,l,rt.r,rt.a0,rt.a1,rt.bandY1,rt.top,32,!0),r(s.column,.85)),o(Wt(a,l,rt.r-.3,rt.a0,rt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of Dd())o(Wt(a,l,rt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function Qw(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function Rg(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=Pt(i,s,null,{anisotropy:1});r.tex.wrapS=ur,r.tex.generateMipmaps=!1,r.tex.minFilter=Rn,r.tex.magFilter=Rn;let o=new ln({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new ze(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:Zw,fragmentShader:Jw,side:li,depthTest:!1,depthWrite:!1,fog:!1}),a=new nt(new Fn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=jw(c,o),p=new Pa(n),f=p.fromScene(h,.035,.1,400,{size:256,position:new P(Xe.cx,1.6,Xe.cz)});p.dispose(),Qw(h,o),l&&l.dispose(),l=f}function d(h){c=h,r.redraw((p,f,x)=>Kw(p,f,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var hn=1,eE=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,tE=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,nE=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,iE=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function Cg(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new ai(16,16,{type:Ai,generateMipmaps:!0,minFilter:_s,magFilter:Rn,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new _t},uReflStrength:{value:t},uReflBlur:{value:i}},o=new Qn;o.layers.set(0);let a=new P(0,1,0),l=new P(0,0,0),c=new P,u=new _t,d=new P,h=new P,p=new P,f=new Si,x=new mn,m=new mn,g=new Ae,_=0;function M(b){b.uniforms.tReflect=r.tReflect,b.uniforms.uReflMatrix=r.uReflMatrix,b.uniforms.uReflStrength=r.uReflStrength,b.uniforms.uReflBlur=r.uReflBlur,b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
${eE}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${tE}`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
${nE}`).replace("#include <opaque_fragment>",`${iE}
#include <opaque_fragment>`)}function y(b,w){if(!n)return!1;n.getDrawingBufferSize(g);let v=Math.max(16,Math.round(g.x*e)),S=Math.max(16,Math.round(g.y*e));if((s.width!==v||s.height!==S)&&s.setSize(v,S),c.setFromMatrixPosition(w.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(w.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),p.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(p),o.far=w.far,o.updateMatrixWorld(),o.projectionMatrix.copy(w.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let T=r.uReflMatrix.value;T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(o.projectionMatrix),T.multiply(o.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(a,l),f.applyMatrix4(o.matrixWorldInverse),x.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let R=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+R[8])/R[0],m.y=(Math.sign(x.y)+R[9])/R[5],m.z=-1,m.w=(1+R[10])/R[14],x.multiplyScalar(2/x.dot(m)),R[2]=x.x,R[6]=x.y,R[10]=x.z+1-_,R[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let N=n.getRenderTarget(),U=n.autoClear,z=n.shadowMap.autoUpdate,D=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(b,o),n.autoClear=U,n.shadowMap.autoUpdate=z,n.shadowMap.needsUpdate=D,n.setRenderTarget(N),!0}return{uniforms:r,inject:M,update:y,setStrength(b){r.uReflStrength.value=b},dispose(){s.dispose()}}}var Oi=Math.PI*2,ep=Eg();function Nd(n,e,t){let i=new kt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var tp=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function Ig(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function sE(n){let e=new Et({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{Ig(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${tp}
${ep}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
float ringD = length(vFloor - vec2(${Xe.cx.toFixed(3)}, ${Xe.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function rE(n){let e=new Et({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{Ig(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${tp}
${ep}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var oE=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,aE=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${tp}
${ep}
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
}`,lE=`
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
}`,cE=`
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
}`;function uE(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(Oi*o/t));for(let l=0;l<a;l++){let c=l/a*Oi;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,p=n.r+e,f=Math.max(16,Math.ceil(Math.PI*p/t)),x=(g,_)=>{for(let M=0;M<=f;M++){let y=_-Math.PI*M/f;i.push([g[0]+p*(Math.cos(y)*c+Math.sin(y)*d),g[1]+p*(Math.cos(y)*u+Math.sin(y)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,_)=>{let M=st(((g-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*M,n.a[1]+a*M]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function jf(n,e,t,i){let{pts:s,center:r}=uE(n,e);return Ss(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function Pg(n,e){let t=Ot.hx-Ot.r,i=Ot.hz-Ot.r;return n.map(([s,r])=>{let o=Ot.cx+st(s-Ot.cx,-t,t),a=Ot.cz+st(r-Ot.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var Qf=(n,e,t,i)=>(Ot.cx-n)*t+(Ot.cz-e)*i>0;function dE(n){let e=_r.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function hE(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of _r)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Ot.cx-Ot.hx),e=Math.min(e,Ot.cx+Ot.hx),t=Math.max(t,Ot.cz-Ot.hz),i=Math.min(i,Ot.cz+Ot.hz),{x0:n,x1:e,z0:t,z1:i}}function fE(n,e,t,i=6){let s=new P().subVectors(e,n),r=s.length(),o=new Nn(t,t,r,i,1,!0);return o.applyQuaternion(new un().setFromUnitVectors(new P(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function pE({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=Xe,l=Xr,c=l.a1-l.a0,u=(S,T)=>[r+T*Math.cos(S),o-T*Math.sin(S)],d=new nt(L(new Cn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(hn),n.add("white",L(new Cn(a+.2,cs.r,160,1,l.a1,Oi-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Wt(r,o,cs.r,l.a1,l.a0+Oi,-.45,0,160,!1)),e.add("glowCyan",Wt(r,o,cs.r+.004,l.a1,l.a0+Oi,-.24,-.21,160,!1)),e.add("white",Wt(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Wt(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Wt(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",L(Ee(l.r1-cs.r,l.slab,.04),s(S,(cs.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,p=a+.05,f=[];for(let S=0;S<=4;S++)f.push(u(l.a0,p+(h-p)*S/4));let x=Math.ceil(c*h/.45);for(let S=1;S<=x;S++)f.push(u(l.a0+c*S/x,h));for(let S=3;S>=0;S--)f.push(u(l.a1,p+(h-p)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(S,T,R,N)=>(m[0]-S)*R+(m[1]-T)*N>0,_=(S,T,R,N)=>!g(S,T,R,N);t.add("rail",Ss(f,.045,l.rail)),n.add("chrome",ui(f.map(([S,T])=>[S,l.rail+.026,T]),.026,.1,8)),n.add("silver",Ss(f,0,.045,{facing:_})),n.add("glowCyan",Ss(f,0,.04,{facing:g}));for(let S=0;S<f.length;S+=5)n.add("chrome",L(ae(.018,.018,l.rail,8),[f[S][0],l.rail/2,f[S][1]]));let M=l.canopyY,y=a+.02,b=l.r1+.35;n.add("white",L(new Cn(y,b,96,1,l.a0,c),[r,M+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",L(new Cn(y,b,96,1,-l.a1,c),[r,M,o],[Math.PI/2,0,0])),n.add("glowCyan",L(new Cn(b-.13,b-.09,96,1,-l.a1,c),[r,M-.003,o],[Math.PI/2,0,0])),n.add("silver",Wt(r,o,b,l.a0,l.a1,M,M+.14,72,!1)),n.add("silver",Wt(r,o,b-.002,l.a0,l.a1,M,M+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",L(Ee(b-y,.14,.04),s(S,(y+b)/2,M+.07),[0,S,0]));for(let[S,T]of[[23.3,17],[25.2,19]])for(let R=0;R<T;R++){let N=l.a0+(R+.5)*c/T;n.add("glowWhite",L(new Un(.085,16),s(N,S,M-.003),[Math.PI/2,0,0])),n.add("chrome",L(new Cn(.085,.11,16,1),s(N,S,M-.002),[Math.PI/2,0,0]))}let w=new P,v=new P;for(let S=0;S<6;S++){let T=l.a0+(S+.5)*c/6;qr(T,b-.15,M+.14,w),qr(T,a+.03,M+3.4,v),n.add("silver",fE(w,v,.014)),n.add("chrome",L(ae(.05,.05,.03,14),v.toArray(),[0,T,Math.PI/2]))}for(let S of[250,290]){let T=S*Math.PI/180;n.add("white",L(Ie(.5,.34,2.4,.05,3),s(T,23.4,.27),[0,T,0])),n.add("dark",L(Ee(.32,.1,2.1),s(T,23.4,.05),[0,T,0])),n.add("glowCyan",L(Ee(.33,.012,2.11),s(T,23.4,.094),[0,T,0]))}return{floor:d}}function Lg(n,{reflection:e=null}={}){let t=new Jt;t.name="atrium";let{cx:i,cz:s,r,h:o}=Xe,a={white:new Et({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new Et({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new Et({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new Et({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new Et({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Nd(4641535,3,"atrium-glow-cyan"),glowBlue:Nd(5213695,2.2,"atrium-glow-blue"),glowWhite:Nd(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Nd(16777215,5,"atrium-ring-light"),u=Ni({color:13623538,opacity:.045,fresnel:.5,side:en}),d=Ni({color:14083830,opacity:.1,fresnel:.6,side:en}),h=Ni({color:14214901,opacity:.08,fresnel:.5,side:en}),p=Ni({color:13623538,opacity:.04,fresnel:.4}),f=new dt,x=new dt,m=new dt,g=new P,_=(A,J,de)=>qr(A,J,de,g).toArray(),{doorA0:M,doorA1:y,doorH:b}=ls,w=b+.12,v=Oi/ls.panes,S=.006/r,T=A=>A>M+1e-6&&A<y-1e-6;for(let A=0;A<ls.panes;A++){let J=A*v+S,de=(A+1)*v-S,I=[J];for(let E of[M,y])E>J&&E<de&&I.push(E);I.push(de);for(let E=0;E+1<I.length;E++){let j=I[E],_e=I[E+1],be=T((j+_e)/2)?w:.05,ke=Math.max(2,Math.ceil((_e-j)/v*16));m.add("glass",Wt(i,s,r,j,_e,be,o,ke,!0))}}let R=ls.finDepth,N=o-.55,U=r-R/2-.004;for(let A=0;A<ls.panes;A++){let J=A*v;if(!T(J)){m.add("fin",L(Ee(R,N,.022),_(J,U,N/2),[0,J,0])),f.add("silver",L(Ee(R+.04,.06,.05),_(J,U,.03),[0,J,0])),f.add("silver",L(Ee(R+.04,.06,.05),_(J,U,N-.03),[0,J,0]));for(let de of[1.1,4.7,8.3,11.9]){f.add("chrome",L(Ee(.025,.09,.17),_(J,r-.0175,de),[0,J,0])),f.add("chrome",L(Ee(.09,.09,.045),_(J,r-.075,de),[0,J,0]));for(let I of[-1,1])f.add("chrome",L(ae(.022,.022,.018,14),_(J+I*(.055/r),r-.039,de),[0,J,Math.PI/2]))}}}let z=o-.55;f.add("white",Wt(i,s,r-.6,0,Oi,z,o,160,!0)),f.add("satin",L(new Cn(r-.6,r-.01,160,1),[i,z,s],[Math.PI/2,0,0])),f.add("glowWhite",L(new Cn(r-.16,r-.1,160,1),[i,z-.004,s],[Math.PI/2,0,0])),f.add("glowCyan",Wt(i,s,r-.605,0,Oi,z+.02,z+.05,160,!0));let D=y,K=Oi-(y-M);f.add("glowCyan",L(new Cn(r-.17,r-.13,160,1,D,K),[i,.003,s],[-Math.PI/2,0,0])),f.add("silver",Wt(i,s,r-.03,D,D+K,0,.05,160,!0));for(let A of[M,y])f.add("silver",L(Ee(.14,w,.06),_(A,r-.03,w/2),[0,A,0]));let te=y-M;f.add("silver",Wt(i,s,r-.06,M,y,b,w,16,!0)),f.add("silver",Wt(i,s,r+.04,M,y,b,w,16,!1)),f.add("silver",L(new Cn(r-.06,r+.04,16,1,-y,te),[i,b,s],[Math.PI/2,0,0])),f.add("glowWhite",L(new Cn(r-.025,r+.005,16,1,-y,te),[i,b-.002,s],[Math.PI/2,0,0])),f.add("silver",L(new Cn(r-.22,r+.24,16,1,M,te),[i,.003,s],[-Math.PI/2,0,0]));let ee=te/2,ne=r-.09;for(let[A,J,de]of[[M-ee,M,.9],[y,y+ee,.1]]){m.add("fin",Wt(i,s,ne,A+.03/ne,J-.03/ne,.06,b-.06,12,!0)),f.add("silver",Wt(i,s,ne-.02,A,J,0,.06,12,!0)),f.add("silver",Wt(i,s,ne-.02,A,J,b-.06,b,12,!0));for(let I of[A,J])f.add("silver",L(Ee(.05,b,.05),_(I,ne,b/2),[0,I,0]));f.add("chrome",L(ae(.012,.012,1.1,8),_(A+(J-A)*de,ne-.05,1.05)))}f.add("silver",Wt(i,s,ne-.035,M-ee,y+ee,b,b+.08,24,!0)),f.add("ceiling",L(new Cn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<16;A++){let J=A/16*Oi,de=(r+6.4)/2;f.add("white",L(Ee(r-6.4,.34,.3),[i+de*Math.cos(J),o-.17,s-de*Math.sin(J)],[0,J,0]))}for(let A of[9,16.5])f.add("white",Wt(i,s,A,0,Oi,o-.34,o,160,!0)),f.add("white",Wt(i,s,A+.3,0,Oi,o-.34,o,160,!1)),f.add("white",L(new Cn(A,A+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let A of[11.15,11.85])f.add("satin",Wt(i,s,A,0,Oi,o-.24,o,160,!0)),f.add("satin",Wt(i,s,A,0,Oi,o-.24,o,160,!1));let X=new nt(L(Qt(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);X.name="ring-light",X.position.set(i,o-.15,s),t.add(X),f.add("chrome",L(Qt(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<4;A++)f.add("silver",L(Ee(12.8,.12,.12),[i,o+.03,s],[0,A*Math.PI/4,0]));let W=new nt(L(new Un(6.4,96),[0,0,0],[Math.PI/2,0,0]),p);W.name="skylight",W.position.set(i,o+.06,s),t.add(W);let{a0:O,a1:Z}=rt,Y=rt.moduleR-.36;f.add("dark",Wt(i,s,rt.r,O,Z,rt.bandY0,rt.bandY1,72,!0)),f.add("white",Wt(i,s,rt.r,O,Z,rt.bandY1,rt.top,72,!0)),f.add("white",Wt(i,s,rt.r,O,Z,2.3,rt.bandY0,72,!0)),f.add("satin",Wt(i,s,rt.r,O,Z,0,2.3,72,!0)),f.add("white",Wt(i,s,rt.back,O,Z,0,rt.top,72,!1)),f.add("white",L(new Cn(rt.r,rt.back,72,1,O,Z-O),[i,rt.top,s],[-Math.PI/2,0,0])),f.add("white",L(new Cn(Y,rt.r,72,1,O,Z-O),[i,2.3,s],[-Math.PI/2,0,0])),f.add("white",Wt(i,s,Y,O,Z,2.22,2.3,72,!0)),f.add("glowBlue",Wt(i,s,Y-.004,O,Z,2.245,2.265,72,!0)),f.add("glowCyan",Wt(i,s,rt.r-.012,O,Z,7.1,7.14,72,!0)),f.add("glowCyan",Wt(i,s,rt.r-.012,O,Z,2.64,2.68,72,!0));let q=rt.back-Y+.04,le=(rt.back+Y)/2;for(let[A,J]of[[O-.07/le,-1],[Z+.07/le,1]]){f.add("white",L(Ee(q,rt.top,.14),[i+le*Math.cos(A),rt.top/2,s-le*Math.sin(A)],[0,A,0]));let de=A-J*(.075/Y);f.add("glowCyan",L(Ee(.04,rt.top-.4,.03),[i+(Y+.02)*Math.cos(de),rt.top/2,s-(Y+.02)*Math.sin(de)],[0,A,0]))}let he=24,ie=new Vn(new nn(.62,2.22,.78),a.white,he);ie.name="compute-modules";let fe=new Ae(.7,2.08),Le=new vt(fe.x,fe.y),tt=new ln({name:"module-doors",vertexShader:lE,fragmentShader:cE,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:fe}}}),He=new Vn(Le,tt,he);He.name="module-doors";let Ze=new Float32Array(he),Ke=new dn;for(let A=0;A<he;A++){let J=O+(A+.5)*(Z-O)/he;qr(J,rt.moduleR,1.11,Ke.position),Ke.rotation.set(0,J,0),Ke.updateMatrix(),ie.setMatrixAt(A,Ke.matrix),qr(J,rt.moduleR-.316,1.11,Ke.position),Ke.rotation.set(0,J-Math.PI/2,0),Ke.updateMatrix(),He.setMatrixAt(A,Ke.matrix),Ze[A]=A*7.31+3.7,f.add("chrome",L(Ee(.66,.03,.82),[Ke.position.x,.015,Ke.position.z],[0,J,0]))}Le.setAttribute("aSeed",new xi(Ze,1)),ie.instanceMatrix.needsUpdate=!0,He.instanceMatrix.needsUpdate=!0,ie.computeBoundingSphere(),He.computeBoundingSphere(),ie.receiveShadow=!0,t.add(ie,He);let me=sE(e),V=new nt(L(new Un(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),me);V.name="atrium-floor",V.position.set(i,0,s),V.receiveShadow=!0,V.layers.set(hn);let B=pE({kit:f,low:x,glassKit:m,floorMat:me,at:_});t.add(B.floor);let re=hE(),G=new nt(L(new vt(re.x1-re.x0,re.z1-re.z0),[0,0,0],[-Math.PI/2,0,0]),rE(e));G.name="island-tops",G.position.set((re.x0+re.x1)/2,0,(re.z0+re.z1)/2),G.receiveShadow=!0,G.layers.set(hn),t.add(V,G);for(let A of _r)x.add("satin",jf(A,0,-Ld,0)),x.add("silver",jf(A,.004,-.045,-.001)),x.add("glowCyan",jf(A,.006,-Ld,-Ld+.05));let Re=Tg(.5);x.add("satin",Ss(Re,-Ot.depth,0,{closed:!0,facing:Qf}));let Fe=Pg(Re,.012);x.add("glowCyan",Ss(Fe,-.17,-.13,{closed:!0,facing:Qf})),x.add("glowBlue",Ss(Fe,-Ot.depth+.1,-Ot.depth+.14,{closed:!0,facing:Qf}));let H=new ln({name:"data-pool",vertexShader:oE,fragmentShader:aE,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),pe=new nt(L(new vt(Ot.hx*2,Ot.hz*2),[0,0,0],[-Math.PI/2,0,0]),H);pe.name="data-pool",pe.position.set(Ot.cx,-Ot.depth,Ot.cz),pe.layers.set(hn),t.add(pe);let Te=Pg(Re,-.06),k=[];for(let A of dE(Te)){k.push(Ss(A,.035,1)),f.add("chrome",ui(A.map(([J,de])=>[J,1.01,de]),.022,.08,8)),f.add("glowCyan",Ss(A,0,.035)),f.add("glowCyan",Ss(A.slice().reverse(),0,.035));for(let J=0;J<A.length;J+=5)f.add("chrome",L(ae(.018,.018,1,8),[A[J][0],.5,A[J][1]]))}if(k.length){let A=new dt;for(let de of k)A.add("glass",de);let J=A.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(J)}let et=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});et.traverse(A=>{A.isMesh&&(A.renderOrder=2)}),t.add(et);let pt=f.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(pt);let Mt=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});Mt.traverse(A=>A.layers.set(hn)),t.add(Mt);let Ce=.3;return{root:t,reflectors:[V,G,B.floor],bounds:re,update(A,J,de={}){let I=st(de.activity||0,0,1);Ce+=(.3+.7*I-Ce)*Math.min(1,A*2),H.uniforms.uTravel.value=(H.uniforms.uTravel.value+A*(.25+1.4*I))%1e3,H.uniforms.uFlow.value=Ce,tt.uniforms.uTime.value=J,tt.uniforms.uActivity.value=Ce},setLook(A){let J=A.glow==null?1:A.glow;for(let de of l)de.color.setHex(de.userData.glow.hex).multiplyScalar(de.userData.glow.k*J);c.color.set(A.interior.ring).multiplyScalar(A.interior.ringPower),a.ceiling.emissiveIntensity=A.id==="day"?.16:.22,H.uniforms.uGlow.value=J}}}var br=cs.groundY,Mr={pitch:96,rot:18*Math.PI/180},np=Math.cos(Mr.rot),ip=Math.sin(Mr.rot),Dg=13*289,Jl=2400;function Yr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ng(n,e,t=[0,0]){return t[0]=Xe.cx+np*n+ip*e,t[1]=Xe.cz-ip*n+np*e,t}function sp(n,e,t=[0,0]){return t[0]=Xe.cx+e*Math.cos(n),t[1]=Xe.cz-e*Math.sin(n),t}function Og(){return{uHaze:{value:new ze(2902638)},uHazeHigh:{value:new ze(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Ae(Xe.cx,Xe.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new ze(16777215)},uSunK:{value:.2},uSkyRefl:{value:new ze(3103372)}}}function ws(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var Es=["uHaze","uHazeHigh","uHazeDensity"],Ts=`
#define GROUND_Y (${br.toFixed(1)})
#define GRID_P ${Mr.pitch.toFixed(1)}
#define GRID_C ${np.toFixed(7)}
#define GRID_S ${ip.toFixed(7)}
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
`;var mE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,gE=`
${Ts}
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
`,xE=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,yE=`
${Ts}
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
#define TOWER_R ${cs.r.toFixed(3)}

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
`;function Ug(n,{quality:e="high"}={}){let t=ws(n,[...Es,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new ze(461846)},uStreet:{value:new ze(16752714)},uAvenue:{value:new ze(4641535)},uRoof:{value:new ze(1712690)},uPark:{value:new ze(463887)}}),i=new ln({name:"city-ground",vertexShader:mE,fragmentShader:gE,uniforms:t}),s=e==="low"?4200:6e3,r=new Un(s,96).rotateX(-Math.PI/2),o=new nt(r,i);return o.name="city-ground",o.position.set(Xe.cx,br,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function Fg(n){let e=ws(n,[...Es,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new ze(1778996)},uGlassC:{value:new ze(660516)},uSpine:{value:new ze(4641535)}}),t=new ln({name:"city-host-facade",vertexShader:xE,fragmentShader:yE,uniforms:e}),i=-.45,s=i-br,r=new Nn(cs.r,cs.r,s,128,1,!0),o=new nt(r,t);return o.name="city-host-facade",o.position.set(Xe.cx,(i+br)/2,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var vE=`
${Ts}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${Jl.toFixed(1)}

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
`,_E=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function kg(n,{quality:e="high"}={}){let t=Yr(91),i=Mr.pitch,s=e==="low"?2:1,r=[];for(let p=-20;p<=20;p+=4){let f=(p+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:f-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:f+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let p of[-16,-12,12,16]){let f=(p+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:f,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let p of r){let f=Math.floor(2*Jl/p.spacing);for(let x=0;x<f;x++){o.push(p.axis,p.coord,p.y,p.speed);let m=t(),g=p.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/f,7+t()*8,t(),g)}}let l=o.length/4,c=new vt(1,1),u=new Dl;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new xi(new Float32Array(o),4)),u.setAttribute("aCar",new xi(new Float32Array(a),4)),u.instanceCount=l;let d=new ln({name:"city-traffic",vertexShader:vE,fragmentShader:_E,uniforms:ws(n,[...Es,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:kn,side:en}),h=new nt(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(hn),{mesh:h,count:l}}var Gg=Math.PI/180,rp=Mr.pitch,bE=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],ME=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],SE={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},wE=`
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
`,EE=`
${Ts}
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
`;function TE(n,e){return Math.hypot(n-Xe.cx,e-Xe.cz)}function AE(n,e){let t=Yr(17),i=n==="low"?1500:2600,s=Math.ceil(i/rp)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=bE.map(c=>{let[u,d]=sp(c.a*Gg,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let p=c*rp+d,f=u*rp+h,x=Math.hypot(p,f);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,_=12+t()*20,M=(t()-.5)*Math.max(0,37-g),y=(t()-.5)*Math.max(0,37-_);Ng(p+M,f+y,a);let b=a[0],w=a[1];if(e.some(D=>Math.hypot(D.x-b,D.z-w)<D.rad))continue;let v=st((x-120)/650,0,1),S=22+Math.pow(t(),2.2)*(70+250*v),T=0;for(let D of o)T=Math.max(T,Math.exp(-((b-D.x)**2+(w-D.z)**2)/D.r2));S+=T*(140+220*t());let R=Math.min(br+S,T>.3?60:-40),N=t(),U=T>.3?N<.3?0:N<.45?1:N<.6?2:3:N<.35?0:N<.6?1:N<.9?2:3,z=0;Math.min(g,_)>=22&&t()<.18&&(z|=1),t()<.45&&(z|=2),t()<.35&&(z|=8),l.push({x:b,z:w,w:g,d:_,base:br-20,top:R,rot:Mr.rot,seed:t(),style:U,flags:z})}return l}function RE(n){let e=Yr(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function CE(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*Gg,[d,h]=sp(u,c.r),p=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):Mr.rot,f={x:d,z:h,w:c.w,d:c.d,base:br-20,top:c.top,rot:p,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(f),f};for(let c of ME){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(SE);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function Bg(n,e,t){let i=new nn(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Vn(i,e,s),l=new dn;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new xi(r,3)),i.setAttribute("aInfo",new xi(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var PE=`
${Ts}
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
`,IE=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function LE(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function DE(n,e,t,i){let s=Yr(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,p]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...LE(d,h*d.w/2.15,p*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new $t;l.setAttribute("position",new ft(r,3)),l.setAttribute("aSeed",new ei(a,1));let c=new ln({name:"city-beacons",vertexShader:PE,fragmentShader:IE,uniforms:ws(n,[...Es,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:kn}),u=new pl(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(hn),{points:u,count:o}}var Od=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],NE=6,OE=`
${Ts}
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
`,UE=`
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
`;function FE(){return{atlas:Pt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),Od.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${At}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function kE(n,e){let t=Yr(53),i=[],s=n.filter(o=>{let a=TE(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*Od.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[Xe.cx-o.x,Xe.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?NE:Math.floor(t()*Od.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function BE(n,e,t){let{atlas:i,cols:s,rows:r}=FE(),o=Yr(61),a=kE(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new vt(1,1),h=new ln({name:"city-signs",vertexShader:OE,fragmentShader:UE,uniforms:ws(n,[...Es,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:kn,side:en}),p=new Vn(d,h,l);p.name="city-signs";let f=new dn,x=new ze;return a.forEach((m,g)=>{f.position.set(m.pos[0],m.pos[1],m.pos[2]),f.rotation.set(0,0,0),f.lookAt(Xe.cx,m.tilt?0:m.pos[1],Xe.cz),f.scale.set(m.w,m.w/4,1),f.updateMatrix(),p.setMatrixAt(g,f.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],g*4),x.set(Od[_][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new xi(c,4)),d.setAttribute("aTint",new xi(u,4)),p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!1,p.layers.set(hn),{mesh:p,count:l}}var zg={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function Hg(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${At}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${At}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${At}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${At}`,n.fillText(zg[i.phase]||zg.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${bt}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${At}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let p=(c-l)/a.length;a.forEach((f,x)=>{let m=(u-d)*f/h;n.fillRect(l+x*p+2,u-m,Math.max(2,p-4),m)})}function zE(n){let i=new Array(40).fill(0),s=Pt(1024,Math.round(1024*40/96),(x,m,g)=>Hg(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new kt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Jt;o.name="city-billboard";let a=new nt(new vt(96,40),r);o.add(a);let l=new nt(new nn(98,42,1.2),new kt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new kt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new nt(new nn(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",p=1,f=0;return{group:o,update(x,m){f+=x,f>=1&&(f=0,i.shift(),i.push(m.tps||0)),p+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;p<1||g===h||(p=0,h=g,s.redraw((_,M,y)=>Hg(_,M,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var HE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,GE=`
${Ts}
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
`;function Na(n,e,t,i=!1){return new ln({name:i?"city-glow-add":"city-glow",vertexShader:HE,fragmentShader:GE,defines:i?{ADDITIVE:""}:{},uniforms:ws(n,Es,{uColor:{value:new ze(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?kn:Ys})}var VE=`
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
`,WE=`
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
`,XE=`
${Ts}
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
`,$E=`
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
`;function Vg(n,e,t=16){return new Nn(e,n,1,t,1,!0).translate(0,.5,0)}function qE(n,e,t){let i=new Jt;i.name="compute-tower";let s=Na(n,4646655,4),r=Na(n,10480383,5),o=Na(n,5078015,4),a=Na(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(w,v,S,T)=>{let R=new nt(new Ti(w,v,10,160),T);return R.rotation.x=Math.PI/2,R.position.set(e.x,S,e.z),i.add(R),R};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new nt(new Nn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let p=new Ae(t.x-e.x,t.z-e.z).normalize(),f=new P(e.x+p.x*(c+2),100,e.z+p.y*(c+2)),x=new nt(new Fn(4,20,14),r);x.position.copy(f),i.add(x);let m=new P().subVectors(f,t),g=m.length(),_=new un().setFromUnitVectors(new P(0,1,0),m.clone().normalize()),M={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new ze(6282495)}};for(let[w,v,S]of[[.07,2,1],[.38,8,0]]){let T=new ln({name:S?"beam-core":"beam-glow",vertexShader:VE,fragmentShader:WE,uniforms:{...M,uCore:{value:S}},transparent:!0,depthWrite:!1,blending:kn,side:en}),R=new nt(Vg(w,v,16),T);R.position.copy(t),R.quaternion.copy(_),R.scale.set(1,g,1),R.frustumCulled=!1,R.renderOrder=3,i.add(R)}let y=new kt({name:"beam-receiver"});y.color.setHex(6282495).multiplyScalar(4);let b=new nt(new Ti(.5,.05,8,48),y);return b.rotation.x=Math.PI/2,b.position.copy(t),i.add(b),i.traverse(w=>{w.isMesh&&w.renderOrder===0&&(w.renderOrder=5)}),{group:i,setLook(w){s.uniforms.uGain.value=4*(.35+.65*w.neon),r.uniforms.uGain.value=5*(.4+.6*w.neon),o.uniforms.uGain.value=4*(.35+.65*w.neon),a.uniforms.uColor.value.set(w.body)},update(w,v,S){M.uIntensity.value=Math.max(.08,v)*S,x.scale.setScalar(.6+v*.8),b.scale.setScalar(.8+v*.6+Math.sin(w*6)*.05*v),d.rotation.z=w*.12},glows:l}}function YE(n,e){let t=new Jt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new ze(8378623)}};for(let[h,p]of[[5,1],[20,0]]){let f=new ln({name:p?"tether-core":"tether-glow",vertexShader:XE,fragmentShader:$E,uniforms:ws(n,Es,{...r,uCore:{value:p}}),transparent:!0,depthWrite:!1,blending:kn,side:en}),x=new nt(Vg(1,1,14),f);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new nt(new Ti(a,1.6,8,192),Na(n,4646655,3.2,!0)),c=new nt(new Ti(a*.8,1.1,8,160),Na(n,5078015,3,!0)),u=new Jt,d=new Jt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function Wg({quality:n="high",beamTarget:e=new P(-8,3,-.7)}={}){let t=new Jt;t.name="city";let i=Og(),s=CE(),r=s.towers.filter(T=>T.mega).map(T=>({x:T.x,z:T.z,rad:Math.max(T.w,T.d)*.75+30})),o=AE(n,r),a=RE(o),l=ws(i,[...Es,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new ze(725538)},uGlass:{value:new ze(462106)}}),c=new ln({name:"city-towers",vertexShader:wE,fragmentShader:EE,uniforms:l}),u=Bg(o.concat(a),c,"city-towers");u.layers.set(hn);let d=Bg(s.towers,c,"city-megatowers"),h=DE(i,o,a,s),p=Ug(i,{quality:n}),f=Fg(i),x=kg(i,{quality:n}),m=BE(i,o,s),g=zE(s.billboard),_=qE(i,s.compute,e),M=YE(i,s);t.add(p.mesh,f.mesh,u,d,h.points,x.mesh,m.mesh,g.group,_.group,M.group);let y=0,b=0,w=0,v=1,S=1;return{root:t,update(T,R,N={}){let U=st(N.activity||0,0,1);y+=(U-y)*Math.min(1,T*1.5);let z=.5+1.5*y;b=(b+T*z)%Dg,w=(w+T*z)%(2*Jl),i.uTime.value=R,i.uTravel.value=b,i.uAir.value=w,i.uDensity.value=(.3+.7*y)*v,_.update(R,y,S),M.update(R),g.update(T,N)},setLook(T){let R=T.city;i.uHaze.value.set(R.haze),i.uHazeHigh.value.set(R.hazeHigh),i.uHazeDensity.value=R.hazeDensity,i.uSkyRefl.value.set(R.skyRefl),i.uWindows.value=R.windows,i.uNeon.value=R.neon,i.uLights.value=R.lights,i.uBeacons.value=R.beacons,i.uTraffic.value=R.traffic,i.uSunK.value=R.sunK,i.uSunDir.value.fromArray(T.sun.dir).normalize(),i.uSunColor.value.set(T.sun.color),l.uBody.value.set(R.body),l.uGlass.value.set(R.glass),p.setLook(R),f.setLook(R),_.setLook(R),M.setLook(R),v=R.trafficScale??1,S=.45+.55*R.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var Xg=724504;function op(n,e=1){let t=new kt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var KE={low:0,medium:1024,high:2048,ultra:4096};function ZE(n,e){let t=KE[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Co=new P,Ud=new P,Fd=new gr;function JE(n,e,t,i=4.6){Ud.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Ud).addScaledVector(e,60),n.target.position.copy(Ud),n.updateMatrixWorld(),n.target.updateMatrixWorld(),Fd.position.copy(n.position),Fd.lookAt(Ud),Fd.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let p of[t.z0,t.z1])Co.set(d,h,p).applyMatrix4(Fd.matrixWorldInverse),s=Math.min(s,Co.x),r=Math.max(r,Co.x),o=Math.min(o,Co.y),a=Math.max(a,Co.y),l=Math.min(l,-Co.z),c=Math.max(c,-Co.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function di(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Qe(new vt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(hn),o}function $g(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Jt;a.name="stage";let l=Rg(i,s,{quality:t});a.add(l.dome);let c=Lg(n,{reflection:r});a.add(c.root);let u=Wg({quality:t,beamTarget:o});a.add(u.root);let d=new Ma(16777215,3);d.name="sun",a.add(d,d.target);let h=new Il(16777215,8947848,1);h.name="sky-light";let p=new Ma(16777215,.5);p.name="fill",a.add(h,p,p.target),ZE(d,t);let f=new P;function x(m){l.setLook(m),f.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,JE(d,f,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,p.color.set(m.fill.color),p.intensity=m.fill.intensity,p.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),p.target.position.set(0,0,-1),p.updateMatrixWorld(),p.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,_){c.update(m,g,_),u.update(m,g,_)},setLook:x,dispose(){l.dispose()}}}var qg=Math.PI/180;function Yg(n,e){let t=n*qg,i=e*qg;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function Kg(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var Po=["dusk","day"],Kr="dusk",gn={min:.6,max:1.6,step:.05,initial:1},Zg={dusk:{id:"dusk",clear:858675,sun:{dir:Yg(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:Kg([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:Yg(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:Kg([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function ap(n){return Zg[n]||Zg[Kr]}function qi(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Yi(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function Jg({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return Pt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,p=d%5===0,[f,x]=u(h,p?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=p?5:2,r.beginPath(),r.moveTo(f,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${At}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[p,f]=u(h/(t.length-1),136);r.fillText(d,p,f)}),r.font=`700 34px ${At}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${At}`,r.fillText(e,a,a+130)})}function Ki(n,e,t,i="#4d6bfe"){return Pt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,qi(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,qi(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${bt}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Yi(s,n,r-170,46,700,At),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Yi(s,e.toUpperCase(),r-170,24,600,At),s.fillText(e.toUpperCase(),152,100)})}function jg(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return Pt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Yi(o,n,t-20,Math.round(i*.42),700,At),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Yi(o,e,t-20,Math.round(i*.26),600,At),o.fillText(e,12,i*.76))})}function Qg(n,e,{bg:t="#05070a",glow:i=0}={}){let s=Pt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?bt:At}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Yi(a,c.text,n-32,u,c.weight||600,c.mono?bt:At),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function ex(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=Pt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${bt}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function tx(){return Pt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${At}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function nx(){return Pt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${At}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var vn=new P(-8,0,-.7),Io=.41,ix=1.9,lp=1.86;function jE(){return Pt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function sx(n){let e=Nt("fuel"),t=Nt("tank",[vn.x,0,vn.z]);t.userData.solid="tank",e.add(t),e.add(di(n,2.6,2.6,[vn.x,0,vn.z],.6));let i=new dt;i.add("graphite",L(Ie(1.8,.28,1.8,.05),[0,.2,0]));for(let[U,z]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",L(ae(.07,.08,.06,20),[U,.03,z]));for(let U of[.375,2.345])i.add("steel",L(ae(.83,.83,.07,72),[0,U,0])),i.add("chrome",La(18,.775,U+(U<1?.04:-.04),.017,.016)),i.add("rubber",L(ae(.712,.712,.03,64),[0,U+(U<1?.05:-.05),0]));i.add("alu",ci([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let U=0;U<6;U++){let z=U/6*Ht+.26,D=Math.cos(z)*.79,K=Math.sin(z)*.79;i.add("chrome",L(ae(.016,.016,2.04,12),[D,1.36,K]));for(let te of[.33,2.4])i.add("steel",L(ae(.03,.03,.03,6),[D,te,K]))}i.add("steel",L(ae(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",L(ae(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",L(Ie(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",L(ae(.07,.08,.05,24),[0,2.695,0])),i.add("steel",L(ae(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",L(ae(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",L(Ie(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Qe(ae(.7,.7,ix,72,!0),n.glass,[0,Io+ix/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Qe(ae(.685,.685,1,72),n.fuel,[0,Io+.5,0],null,null,{cast:!1}),o=Qe(new Un(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Qe(Qt(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Vn(new Fn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(U,z)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Ht,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Ht+z}));t.add(c);let d=Qe(new vt(.085,lp),qn(tx().tex,.1),[0,Io+.02+lp/2,.892],null,null,{cast:!1}),h=Qe(new Xs(.02,.05,3),qt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let p=qt(4054148,2.5),f=Qe(new Fn(.07,24,12,0,Ht,0,Math.PI/2),p,[0,2.72,0],null,null,{cast:!1});t.add(f);let x=Nt("fuel-hmi",[vn.x+.95,0,vn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new dt;m.add("graphite",L(Ie(.36,.04,.3,.015),[0,.02,0])),m.add("alu",L(ae(.035,.035,.95,16),[0,.5,0])),m.add("graphite",L(Ie(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Qg(640,384,{bg:"#04070c"}),_=Qe(new vt(.66,.396),Da(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(_),e.add(x),e.add(di(n,.8,.8,[x.position.x,0,x.position.z],.45));let M=new dt,y=(U,z)=>new P(U,z,vn.z);M.add("steel",ui([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),M.add("steel",ui([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),M.add("steel",L(ae(.1,.1,.025,24),[-6.93,.375,vn.z],[0,0,Math.PI/2])),M.add("chrome",...[0,1,2,3,4,5].map(U=>L(ae(.012,.012,.09,6),[-6.925,.375+Math.cos(U)*.075,vn.z+Math.sin(U)*.075],[0,0,Math.PI/2]))),M.add("blue",L(ae(.085,.085,.18,24),[-6.6,.375,vn.z],[0,0,Math.PI/2])),M.add("chrome",L(ae(.022,.022,.26,12),[-6.6,.52,vn.z])),M.add("steel",L(ae(.045,.05,.1,16),[-6.6,.47,vn.z])),M.add("orange",L(Qt(.11,.012,8,40),[-6.6,.64,vn.z],[Math.PI/2,0,0]));for(let U=0;U<3;U++)M.add("orange",L(new nn(.21,.014,.014),[-6.6,.64,vn.z],[0,U/3*Math.PI,0]));for(let U of[.945,1.355])M.add("alu",L(ae(.085,.085,.05,32),[-6.05,U,vn.z]));M.add("chrome",...[0,1,2,3].map(U=>L(ae(.008,.008,.41,6),[-6.05+Math.cos(U*1.5708+.78)*.078,1.15,vn.z+Math.sin(U*1.5708+.78)*.078])));for(let U of[-6.8,-6.25])M.add("graphite",L(Ie(.12,.33,.16,.015),[U,.165,vn.z]));M.add("steel",L(Ie(.22,.09,.22,.02),[-4.75,2.1,vn.z])),M.add("chrome",La(4,.12,2.15,.012,.012,.78).map(U=>U.translate(-4.75,0,vn.z))),e.add(M.build(n,{name:"feed"}));let b=Qe(ae(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,vn.z],null,null,{cast:!1,receive:!1}),w=jE().tex,v=new Et({color:330264,emissive:16777215,emissiveMap:w,emissiveIntensity:1.8,roughness:.3}),S=Qe(ae(.034,.034,.36,24,!0),v,[-6.05,1.15,vn.z],null,null,{cast:!1});e.add(b,S);let T=.5,R="",N=new dn;return{root:e,anchors:{tank:new P(vn.x,2.9,vn.z),hmi:new P(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(U){let z=JSON.stringify(U);z!==R&&(R=z,g.set(U))},update(U,z,D){T=jt(T,st(D.level,.02,1),2.5,U);let K=T*lp;r.scale.y=K,r.position.y=Io+.012+K/2,o.position.y=a.position.y=Io+.012+K+.001,h.position.y=Io+.02+K;let te=st(D.flow,0,1);for(let ee=0;ee<l;ee++){let ne=u[ee];ne.y+=U*(.05+te*.32)*ne.v/Math.max(.25,K),ne.y>1&&(ne.y=0,ne.a=Math.random()*Ht,ne.r=Math.sqrt(Math.random())*.6);let X=Math.sin(z*3+ne.w)*.01;N.position.set(Math.cos(ne.a)*ne.r+X,Io+.03+ne.y*Math.max(0,K-.04),Math.sin(ne.a)*ne.r),N.scale.setScalar(ne.s*(.3+.7*Math.min(1,(K-ne.y*K)*10+.3))),N.updateMatrix(),c.setMatrixAt(ee,N.matrix)}c.instanceMatrix.needsUpdate=!0,w.offset.y-=U*(.15+te*2.6),v.emissiveIntensity=.5+te*2.2,p.emissive.setHex(D.peak?16753978:4054148),p.emissiveIntensity=1.6+Math.sin(z*2.2)*.6}}}var kd=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],vi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},Yt={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},Oa=new Set(["engraver","labeler"]),QE=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function ox(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of QE)if(i.test(e))return t;return"generic"}function Bd(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function up(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function jl(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function Ql(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=Ql(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function ax(n,e){let t=Bd(e),i=Ql(t,["file_path","path","filePath","files"]);if(i)return jl(up(i)||i);let s=Ql(t,["command","cmd","script","code"]);if(s)return jl(s.split(`
`).find(a=>a.trim())||s);let r=Ql(t,["url"]);if(r)try{return jl(new URL(r).host||r)}catch{return jl(r)}let o=Ql(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?jl(o):""}function cp(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function rx(n,e){let t=cp(n),i=cp(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function lx(n,e){let t=String(n||"").toLowerCase(),i=Bd(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:cp(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=rx(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=rx(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var Zr=new P(-4,0,-.7),Ua=new P(-2.08,0,1.54),cx=1.45,ux=[1152,320],e2=[["思考","#9b6bff",n=>n==="reasoning"||n==="thinking"],["生成","#4d7bff",n=>n==="generating"],["工具","#ffa21f",n=>n==="tool"],["空闲","#aab3c5",n=>!n||n==="idle"]],zd=n=>Math.floor(Math.max(0,n)).toLocaleString("en-US"),t2=n=>n>=100?n.toFixed(2):n.toFixed(4);function dx(n,e,t,i,s,r,o,a,l){let c=.75*Math.PI,u=2.25*Math.PI;n.lineCap="round",n.lineWidth=14,n.strokeStyle="rgba(120, 150, 210, 0.16)",n.beginPath(),n.arc(e,t,i,c,u),n.stroke(),n.lineWidth=2,n.strokeStyle="rgba(160, 185, 235, 0.35)",n.beginPath();for(let d=0;d<=10;d++){let h=c+(u-c)*d/10,p=i+(d%5===0?25:20);n.moveTo(e+Math.cos(h)*(i+14),t+Math.sin(h)*(i+14)),n.lineTo(e+Math.cos(h)*p,t+Math.sin(h)*p)}n.stroke(),s>.002&&(n.lineWidth=14,n.strokeStyle=r,n.shadowColor=r,n.shadowBlur=16,n.beginPath(),n.arc(e,t,i,c,c+(u-c)*Math.min(1,s)),n.stroke(),n.shadowBlur=0),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#eef3ff",n.font=`700 52px ${bt}`,n.fillText(o,e,t-6),n.fillStyle="#9fb0cf",n.font=`600 20px ${At}`,n.fillText(a,e,t+42),n.fillStyle="#62739a",n.font=`600 14px ${bt}`,n.fillText(l,e,t+66),n.textAlign="left"}function hx(n,e,t,i){n.fillStyle="#040a14",n.fillRect(0,0,e,t),n.strokeStyle="rgba(90, 140, 255, 0.07)",n.lineWidth=1,n.beginPath();for(let d=16;d<e;d+=32)n.moveTo(d+.5,0),n.lineTo(d+.5,t);for(let d=16;d<t;d+=32)n.moveTo(0,d+.5),n.lineTo(e,d+.5);n.stroke();let s=i.ctx>.85?"#ff5a4f":i.ctx>.6?"#ffb340":"#5b8cff";dx(n,172,166,116,i.ctx,s,`${Math.round(i.ctx*100)}%`,"上下文压力","CONTEXT"),dx(n,e-172,166,116,i.tach,"#7fa8ff",`${Math.round(i.tps)}`,"生成速率","TOKEN / S");let r=342,o=e-342,a=[["未命中输入","MISS",zd(i.miss)],["缓存命中","HIT",zd(i.hit)],["输出","OUTPUT",zd(i.output)],["推理","REASON",zd(i.reasoning)],["花费","CNY",`¥ ${t2(i.cost)}`]];n.textBaseline="middle",a.forEach(([d,h,p],f)=>{let x=34+f*44;f&&(n.fillStyle="rgba(120, 150, 210, 0.12)",n.fillRect(r,x-22,o-r,1)),n.textAlign="left",n.fillStyle="#a9b8d6",n.font=`600 21px ${At}`,n.fillText(d,r,x);let m=n.measureText(d).width;n.fillStyle="#5f7095",n.font=`600 13px ${bt}`,n.fillText(h,r+m+8,x+2),n.textAlign="right",n.fillStyle=f===4?"#ffd38a":"#eaf1ff",Yi(n,p,250,30,700,bt),n.fillText(p,o,x)});let l=104,c=12,u=(e-(l*4+c*3))/2;n.textAlign="center";for(let[d,h,p]of e2){let f=p(i.phase);qi(n,u,258,l,40,20),f?(n.globalAlpha=.9,n.fillStyle=h,n.fill()):(n.globalAlpha=.3,n.lineWidth=2,n.strokeStyle=h,n.stroke()),n.globalAlpha=1,n.fillStyle=f?"#081020":"#8090b0",n.font=`700 19px ${At}`,n.fillText(d,u+l/2,278),u+=l+c}n.textAlign="left",i.err>0&&(n.lineWidth=5,n.strokeStyle=`rgba(255, 90, 79, ${(.25+.6*i.err).toFixed(3)})`,qi(n,4,4,e-8,t-8,14),n.stroke())}function n2(n,e,t,i,s,r=.02,o=0){let a=new vs,l=(u,d,h,p,f,x)=>{u.moveTo(d+x,h),u.lineTo(d+p-x,h),u.quadraticCurveTo(d+p,h,d+p,h+x),u.lineTo(d+p,h+f-x),u.quadraticCurveTo(d+p,h+f,d+p-x,h+f),u.lineTo(d+x,h+f),u.quadraticCurveTo(d,h+f,d,h+f-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new mr;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new $s(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function i2(n){return{...n,alu:n.white,aluDark:n.graphite,steel:n.graphite,darkSteel:n.graphite,rubber:n.graphite,plastic:n.graphite,brass:n.chrome,orange:qt(10185727,1.4)}}function fx(n){let e=i2(n),t=Nt("engine"),i=Nt("engine-body",[Zr.x,0,Zr.z]);i.userData.solid="engine",t.add(i),t.add(di(e,4.8,2.7,[Zr.x+.35,0,Zr.z],.62));let s=new dt;s.add("graphite",L(Ie(3.9,.36,1.9,.05),[.35,.24,0])),s.add("aluDark",L(Ie(3.94,.04,1.94,.015),[.35,.44,0]));for(let Y of[-1.45,2.15])for(let q of[-.8,.8])s.add("rubber",L(ae(.08,.09,.06,20),[Y,.03,q]));for(let Y of[-.72,.62])s.add("graphite",L(Ie(.22,.56,1,.03),[Y,.72,0])),s.add("steel",L(Ie(.26,.04,1.04,.01),[Y,.47,0])),s.add("chrome",...[-.4,.4].map(q=>L(ae(.02,.02,.03,6),[Y,.5,q])));s.add("white",L(Ie(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let Y of[1.435,2.165])s.add("white",L(Ie(.07,1.62,.82,.02),[Y,1.24,-.1]));for(let Y of[.46,2.02])s.add("white",L(Ie(.78,.06,.82,.02),[1.8,Y,-.1]));s.add("aluDark",n2(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),s.add("grille",L(new vt(.5,.18),[1.8,.6,.335])),s.add("chrome",L(ae(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),s.add("chrome",L(ae(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),s.add("steel",L(ae(.05,.065,.12,20),[.8,2.12,0]));for(let Y=0;Y<4;Y++)s.add("chrome",L(Qt(.034,.007,8,24),[.8,2.2+Y*.03,0],[Math.PI/2,0,0]));s.add("orange",L(ae(.045,.045,.03,20),[.8,2.32,0])),s.add("alu",L(ae(.022,.022,.3,12),[2,2.2,-.36])),s.add("graphite",L(ae(.05,.056,.03,20),[2,2.73,-.36]));for(let Y of[.12,.28])s.add("rubber",ui([[Y,.95,.42],[Y,.62,.86],[Y,.62,1.06]],.024,.18,10));i.add(s.build(e,{name:"engine-body"}));let r=Nt("turbine",[0,cx,0],[0,0,-Math.PI/2]);i.add(r);let o=new dt;o.add("alu",ci([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),o.add("aluDark",L(ae(.6,.6,.56,64),[0,-.72,0]));for(let Y=0;Y<9;Y++)o.add("alu",L(ae(.665,.665,.022,64),[0,-.97+Y*.06,0]));o.add("steel",L(ae(.69,.69,.05,72),[0,-.445,0])),o.add("steel",L(ae(.69,.69,.05,72),[0,.405,0])),o.add("chrome",La(20,.66,-.413,.016,.014)),o.add("chrome",La(20,.66,.373,.016,.014,.157)),o.add("alu",L(ae(.62,.62,.66,64),[0,.76,0])),o.add("aluDark",ci([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),o.add("chrome",L(ae(.06,.06,.26,24),[0,1.33,0])),o.add("grille",L(ae(.6,.6,.012,64),[0,-1.2,0]));for(let Y of[.22,.37,.52])o.add("chrome",L(Qt(Y,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let Y=0;Y<6;Y++)o.add("chrome",L(new nn(1.18,.012,.028),[0,-1.205,0],[0,Y/6*Math.PI,0]));r.add(o.build(e,{name:"casing"}));let a=Nt("rotor"),l=new dt;l.add("darkSteel",L(ae(.24,.24,.8,48),[0,-.02,0]));for(let[Y,q,le,he]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let ie=0;ie<Y;ie++){let fe=Ie(.32,he,.014,.004,1);fe.rotateX(le),fe.translate(.41,q,0),fe.rotateY(ie/Y*Ht),l.add("chrome",fe)}l.add("chrome",ci([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),a.add(l.build(e,{name:"rotor"}));let c=qt(5078015,1),u=[-.33,-.02,.29].map(Y=>L(ae(.247,.247,.026,48,!0),[0,Y,0])),d=new dt().add("core",u);a.add(d.build({core:c},{name:"core",castShadow:!1})),r.add(a);let h=Qe(ae(.632,.632,.81,72,!0),e.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});r.add(h);let p=Ki(Yt.engine.zh,Yt.engine.en,Yt.engine.code);i.add(Qe(new vt(.5,.14),qn(p.tex,.35),[.76,cx+.05,.628],null,null,{cast:!1}));let f=Qe(qf(24,.27,.31,.06,.06),e.brass,[1.74,1.5,.08]),x=Qe(qf(12,.125,.165,.06,.045),e.steel,[1.987,1.148,.08]),m=-7*js,g=-4*js;i.add(f,x),i.add(Qe(new vt(.62,1.1),e.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let M=[16726832,16753183,3461498,5078015].map((Y,q)=>{let le=qt(Y,.15);return i.add(Qe(ae(.055,.055,.085,24),le,[2,2.66-q*.09,-.36],null,null,{cast:!1})),le}),y=Nt("console",[-.35,0,1.22]);i.add(y);let b=new dt;b.add("white",L(Ie(2.2,.82,.46,.04),[0,.41,0])),b.add("rubber",L(Ie(2.16,.06,.4,.02),[0,.03,.01])),y.add(b.build(e,{name:"console"}));let w=Ki(Yt.console.zh,Yt.console.en,Yt.console.code);y.add(Qe(new vt(.72,.2),qn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let v=Nt("panel",[0,.98,.02],[-.62,0,0]);y.add(v);let S=new dt;S.add("aluDark",L(Ie(2.24,.62,.06,.02),[0,0,-.03])),v.add(S.build(e,{name:"panel"}));let T=Pt(ux[0],ux[1],null);v.add(Qe(new vt(2.16,.6),Da(T.tex,1.15),[0,0,.002],null,null,{cast:!1})),v.add(Qe(new vt(2.18,.61),e.glass,[0,0,.012],null,null,{cast:!1,receive:!1}));let R={sig:"",at:-1/0,data:{ctx:0,tach:0,tps:0,miss:0,hit:0,output:0,reasoning:0,cost:0,phase:"idle",err:0}};T.redraw((Y,q,le)=>hx(Y,q,le,R.data));let N=[];for(let Y=0;Y<24;Y++){let q=new Ws({map:e.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),le=new hr(q);le.visible=!1,i.add(le),N.push({sp:le,mat:q,life:0,vx:0,vz:0})}let U=0,z=Nt("dispenser",[Ua.x,0,Ua.z]);z.userData.solid="dispenser",t.add(z);let D=new dt;D.add("white",L(Ie(.5,1.2,.56,.03),[0,.6,0])),D.add("plastic",L(Ee(.02,.05,.36),[.252,.922,0])),D.add("aluDark",L(Ie(.54,.05,.6,.015),[0,1.225,0])),D.add("grille",L(new vt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),z.add(D.build(e,{name:"dispenser"}));let K=jg(Yt.dispenser.zh,`${Yt.dispenser.en} · ${Yt.dispenser.code}`.toUpperCase(),{w:256,h:80});z.add(Qe(new vt(.34,.106),qn(K.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let te=qt(5078015,.3);z.add(Qe(new nn(.012,.012,.3),te,[.256,.97,0],null,null,{cast:!1})),t.add(di(e,.9,.9,[Ua.x,0,Ua.z],.5));let ee=new dt().add("rubber",ui([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));t.add(ee.build(e,{name:"conduit"}));let ne=new kt({visible:!1}),X=(Y,q,le,he)=>{let ie=new nt(new nn(q[0],q[1],q[2]),ne);return ie.position.set(le[0],le[1],le[2]),ie.userData.hoverId=Y,he.add(ie),{id:Y,object:ie}},W={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},O=new ze,Z={reasoning:new ze(10185727),generating:new ze(4160511),tool:new ze(16753183),idle:new ze(2838456)};return{root:t,anchors:{engine:new P(Zr.x,2.5,Zr.z),console:new P(Zr.x-.35,1.45,Zr.z+1.22),dispenser:new P(Ua.x,1.45,Ua.z)},hover:[X("engine",[3.2,1.7,1.5],[.2,1.45,0],i),X("console",[2.3,1.35,.8],[-.35,.68,1.22],i),X("dispenser",[.6,1.3,.62],[0,.65,0],z)],pulseDispenser(){W.dispPulse=1},update(Y,q,le){let he=le.phase,ie=he==="generating"||he==="reasoning",fe=.35+st(le.tps,0,140)*.16+(he==="thinking"?.8:0);W.rotorSpeed=jt(W.rotorSpeed,fe,1.4,Y),W.rotorAngle+=W.rotorSpeed*Y,a.rotation.y=W.rotorAngle,f.rotation.z=m+W.rotorAngle*.45,x.rotation.z=g-W.rotorAngle*.9;let Le=Z[he]||Z.idle;O.copy(c.emissive).lerp(Le,1-Math.exp(-4*Y)),c.emissive.copy(O);let tt=.85+.15*Math.sin(q*9),He=ie?(2.4+st(le.tps,0,120)/30)*tt:he==="tool"?.9:he==="thinking"?1.3:.45;c.emissiveIntensity=jt(c.emissiveIntensity,He,5,Y),W.ctx=jt(W.ctx,st(le.ctx,0,1),2.5,Y),W.tach=jt(W.tach,st(le.tps/120,0,1),3,Y);let Ze=[le.counters.miss,le.counters.hit,le.counters.output,le.counters.reasoning,le.counters.cost];for(let G=0;G<5;G++){let Re=Ze[G]||0,Fe=W.disp[G];Re<Fe||Re-Fe<(G===4?1e-5:.5)?Fe=Re:Fe=jt(Fe,Re,3.2,Y),W.disp[G]=Fe}W.err=Math.max(0,W.err-Y*.5),le.errorPulse&&(W.err=1);let Ke=R.data;Ke.ctx=W.ctx,Ke.tach=W.tach,Ke.tps=le.tps,[Ke.miss,Ke.hit,Ke.output,Ke.reasoning,Ke.cost]=W.disp,Ke.phase=he,Ke.err=W.err;let me=`${Math.round(W.ctx*400)}|${Math.round(W.tach*240)}|${Math.round(le.tps)}|${W.disp.slice(0,4).map(Math.floor).join(",")}|${W.disp[4].toFixed(4)}|${he}|${Math.ceil(W.err*4)}`;me!==R.sig&&q-R.at>=.15&&(R.sig=me,R.at=q,T.redraw((G,Re,Fe)=>hx(G,Re,Fe,Ke)));let V=Math.sin(q*12)>0?1:.2,B=[W.err>0?3.5*V:.1,he==="tool"?3:.1,ie||he==="thinking"?3:.6,he==="reasoning"?3:.1];M.forEach((G,Re)=>{G.emissiveIntensity=jt(G.emissiveIntensity,B[Re],12,Y)}),W.dispPulse=Math.max(0,W.dispPulse-Y*2.5),te.emissiveIntensity=.3+W.dispPulse*4;let re=st((W.ctx-.78)/.22,0,1);U+=Y*re*18;for(let G of N)if(G.life<=0&&U>=1&&(U-=1,G.life=1,G.vx=(Math.random()-.5)*.15,G.vz=(Math.random()-.5)*.15,G.sp.position.set(.8,2.36,0),G.sp.visible=!0),G.life>0){G.life-=Y/1.7;let Re=1-G.life;G.sp.position.x+=G.vx*Y,G.sp.position.z+=G.vz*Y,G.sp.position.y+=Y*(.55-Re*.25),G.sp.scale.setScalar(.08+Re*.55),G.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,Re*1.2))*.32),G.life<=0&&(G.sp.visible=!1)}U>4&&(U=4)}}}var Rs=new P(2.6,0,-1),Jr=3.1,Cs=2.35,No=.75,In=.922,ec=.012,Lo=1,Fa=1,px=.4,Do=235*js,ka=305*js,As=1.54;function Ui(n,e,t=0,i=new P){return i.set(Rs.x+e*Math.cos(n),t,Rs.z-e*Math.sin(n))}var _x=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Hd(n){let e=Nt("pedestal"),t=new dt;t.add("graphite",L(ae(.15,.17,.04,40),[0,.02,0])),t.add("alu",L(ae(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",L(ae(.12,.1,.03,48),[0,.835,0])),t.add("chrome",L(Qt(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Ht+.3;t.add("ceramic",L(ae(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=qt(5078015,.25);return e.add(Qe(Qt(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var Yn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},mx={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},gx={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function bx(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function s2(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=bx(n,o,a),u=Math.PI/2-l,d=new vs;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new $s(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function xx(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=bx(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return L(Ee(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function r2(){let n=new vs,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new $s(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,Yn.forkY+.002,0),t}function o2(){let n=Pt(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new Et({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function a2(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function l2(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function c2(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function u2(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),c2(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${At}`,n.fillStyle="#86a7c9",n.fillText(`${Yt.robot.code} · ${Yt.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${bt}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${At}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${bt}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Ht),n.fill(),n.font=`600 23px ${At}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function d2(n){let e=Nt("robot",[Rs.x,0,Rs.z]),t=qt(4641535,2.2),i=qt(4641535,1.8),s=qt(5078015,1.4),r={...n,carbon:o2(),led:t},o=new dt;o.add("white",ci([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",L(ae(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",L(ae(1.15,1.15,Yn.deckY-.4,112),[0,(.4+Yn.deckY)/2,0])),o.add("plastic",L(ae(.62,.62,.006,72),[0,Yn.deckY+.003,0])),o.add("chrome",L(Qt(.62,.005,8,112),[0,Yn.deckY+.003,0],[Math.PI/2,0,0]));for(let X=0;X<12;X++){let W=X/12*Ht+.13;o.add("chrome",L(ae(.016,.016,.006,10),[Math.cos(W)*.92,Yn.deckY+.003,Math.sin(W)*.92]))}let a=Yn.drumTop-Yn.deckY;o.add("white",L(ae(.34,.37,a,72),[0,Yn.deckY+a/2,0])),o.add("chrome",L(Qt(.342,.006,8,72),[0,Yn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",ui([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new dt;l.add("led",L(Qt(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",L(ae(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Qe(Qt(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=Pt(1024,48,l2,{anisotropy:8}),u=new kt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Qe(ae(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=Ni({color:726566,opacity:.4,fresnel:.55}),p=Qe(ae(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});p.renderOrder=2,e.add(d,p);let f=Pt(512,176,null,{anisotropy:8}),x=new kt({map:f.tex,transparent:!0,depthWrite:!1,side:en,name:"robot-holo"});x.color.setScalar(1.25);let m=Qe(new vt(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=Nt("arm");e.add(g),g.add(new dt().add("steel",L(ae(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let _=Pt(512,64,a2,{anisotropy:8,repeat:[1,1]}),M=X=>new Et({map:X,emissiveMap:X,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=_.tex,b=_.tex.clone();function w(X,W,O,Z){let Y=Nt(X),q=W.y+W.h,le=new dt;le.add("white",s2(O,W.r1,W.r2,W.y,W.h,W.bevel)),le.add("chrome",L(Ie(.66,.004,W.r2*.95,.002),[.5,q+.0015,0]));for(let fe of[-1,1])le.add("graphite",xx(.66,.026,.004,O/2,W.y+W.h/2,W,O,fe,5e-4));Z(le,q),Y.add(le.build(r,{name:X}));let he=new vt(.62,W.r2*.95-.022);he.rotateX(-Math.PI/2),Y.add(Qe(he,M(W===Yn.link1?y:b),[.5,q+.004,0],null,null,{cast:!1}));let ie=new dt;for(let fe of[-1,1])ie.add("led",xx(.6,.009,.005,O/2,W.y+W.h/2,W,O,fe,.0022));return Y.add(ie.build({led:i},{name:`${X}-strips`,castShadow:!1})),Y}let v=Yn.link1,S=w("link1",v,Lo,(X,W)=>{X.add("alu",L(ae(.118,.124,.012,56),[0,W+.006,0])),X.add("chrome",L(ae(.034,.034,.008,24),[0,W+.016,0])),X.add("alu",L(ae(.1,.104,.012,56),[Lo,W+.006,0])),X.add("graphite",L(ae(.11,.11,.01,48),[Lo,v.y-.005,0])),X.add("led",L(Qt(.127,.0045,6,72),[0,W+.003,0],[Math.PI/2,0,0])),X.add("led",L(Qt(.107,.004,6,64),[Lo,W+.003,0],[Math.PI/2,0,0]))});g.add(S);let T=Yn.link2,R=w("link2",T,Fa,(X,W)=>{X.add("alu",L(ae(.086,.09,.01,48),[0,W+.005,0])),X.add("chrome",L(ae(.028,.028,.007,20),[0,W+.0135,0])),X.add("white",L(ae(.07,.078,Yn.forkY-.01-W,48),[Fa,(W+Yn.forkY-.01)/2,0])),X.add("led",L(Qt(.093,.0035,6,56),[0,W+.003,0],[Math.PI/2,0,0])),X.add("led",L(Qt(.079,.0035,6,56),[Fa,W+.012,0],[Math.PI/2,0,0]))});R.position.x=Lo,S.add(R);let N=Nt("fork",[Fa,0,0]);R.add(N);let U=new dt;U.add("alu",L(ae(.064,.064,.01,48),[0,Yn.forkY-.005,0])),U.add("carbon",r2()),U.add("graphite",L(Ie(.06,.016,.07,.005),[.07,Yn.forkY+.02,0]));for(let X of[.31,.5])for(let W of[-.075,.075])U.add("rubber",L(ae(.011,.011,.002,14),[X,Yn.forkY+.013,W]));N.add(U.build(r,{name:"fork",castShadow:!0}));let z=qt(4641535,.8);N.add(Qe(Ee(.004,.006,.044),z,[.1015,Yn.forkY+.02,0],null,null,{cast:!1}));let D={yaw:270*js,reach:No,lift:0},K=new P;function te(){let X=st(D.reach-px,.02,Lo+Fa-1e-4),W=Math.acos(X/(Lo+Fa));S.rotation.y=D.yaw+W,R.rotation.y=-2*W,N.rotation.y=W,g.position.y=D.lift,d.rotation.y=S.rotation.y,y.offset.x=-2*W*.08,b.offset.x=W*.065}te();let ee="";function ne(X="idle",W=null,O=null,Z=null){let Y=`${X}|${W}|${O}|${Z}`;if(Y===ee)return;ee=Y;let q=mx[X]||mx.idle,le=Z?gx[Z]||gx.normal:null,he=le&&le.color?le.color:q.color;i.color.setHex(he).multiplyScalar(.25),i.emissive.setHex(he),f.redraw((ie,fe,Le)=>u2(ie,fe,Le,{st:q,carry:le,from:W,to:O}))}return ne(),{root:e,pose:D,setPose(X,W,O){D.yaw=X,D.reach=W,D.lift=O,te()},carryPoint(X=K){return e.updateMatrixWorld(!0),X.set(px,0,0),N.localToWorld(X),X.y=.921+D.lift,X},setBusy(X){z.emissiveIntensity=X?3:.8,s.emissiveIntensity=X?2.4:1.4,i.emissiveIntensity=X?2.6:1.8},setStatus:ne,parts:{arm:g,link1:S,link2:R,fork:N},hover:{id:"robot",object:e}}}function yx(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Nt(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new dt;l.add("white",L(Ie(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",L(Ie(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",L(Ie(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",L(Ee(.04,.3,.04),[m,1,g]));l.add("aluDark",L(Ee(.84,.03,.04),[0,1.15,.4]),L(Ee(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",L(Ee(.04,.03,.84),[.4,1.15,0]),L(Ee(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",L(ae(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Ht;l.add("ceramic",L(ae(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",L(Ee(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",L(Ee(.5,.2,.05),[o,.95,-.42])),l.add("steel",L(ae(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",L(ae(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[L(new vt(.76,.27),[0,1,.4]),L(new vt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),L(new vt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new dt().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Qe(Ie(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Qe(Ie(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let p=Ki(i,s,r);a.add(Qe(new vt(.56,.158),qn(p.tex,.35),[0,.62,.402],null,null,{cast:!1}));let f=qt(3461498,.6);a.add(Qe(Ee(.6,.016,.01),f,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:f,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function vx(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",L(Ie(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",L(Ee(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Ee(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),p=t.x+r*h,f=t.z+o*h;e.add("aluDark",L(Ee(.05,.84,.05),[p,.43,f],[0,l,0])),e.add("graphite",L(Ee(.16,.02,.16),[p,.01,f],[0,l,0]))}return{len:a,yaw:l,mid:c}}function Mx(n){let e=Nt("cell"),t=d2(n);e.add(t.root),e.add(di(n,2.9,2.9,[Rs.x,0,Rs.z],.6));let i=Ui(Do,Jr),s=Ui(ka,Jr),r=yx(n,{center:i,side:-1,...Yt.lock,hubDoorX:.18}),o=yx(n,{center:s,side:1,...Yt.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(di(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(di(n,1.3,1.3,[s.x,0,s.z],.5));let a=Ui(Do,Cs,In),l=Ui(ka,Cs,In),c=Hd(n);c.root.position.set(a.x,0,a.z);let u=Hd(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new dt,h=new P(-1.83,0,As),p=new P(i.x-.42,0,As),f=new P(s.x+.42,0,As),x=new P(7.18,0,As);vx(n,d,h,p),vx(n,d,f,x);let m=(b,w)=>{let v=w.x-b.x,S=w.z-b.z,T=Math.hypot(v,S);d.add("aluDark",L(Ie(T,.02,.2,.006),[(b.x+w.x)/2,.892,(b.z+w.z)/2],[0,Math.atan2(-S,v),0]))};m(new P(i.x+.18,0,i.z-.44),new P(a.x-.06,0,a.z+.1)),m(new P(s.x-.18,0,s.z-.44),new P(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=qt(5078015,1.2),_=[];for(let[b,w]of[[h,p],[f,x]]){let v=w.x-b.x;_.push(L(Ee(v,.008,.008),[(b.x+w.x)/2,.858,As+.185]))}e.add(new dt().add("led",_).build({led:g},{name:"track-led",castShadow:!1})),e.add(di(n,p.x-h.x+.4,.7,[(h.x+p.x)/2,0,As],.4)),e.add(di(n,x.x-f.x+.4,.7,[(f.x+x.x)/2,0,As],.4));let M=new kt({visible:!1}),y=(b,w)=>{let v=new nt(new nn(.9,1.25,.9),M);return v.position.set(w.x,.62,w.z),v.userData.hoverId=b,e.add(v),{id:b,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new P(-1.95,In,As),lockCenter:new P(i.x,In,i.z),lockPort:a,outPort:l,outCenter:new P(s.x,In,s.z),trackEnd:new P(x.x-.08,In,As)},trackLed:g,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new P(Rs.x,1.4,Rs.z),lock:new P(i.x,1.45,i.z),unload:new P(s.x,1.45,s.z)}}}var pp=n=>(200-n*24.4)*js,sn=Jr-Cs,mt=.89,dp={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#3fb8d9"},tc=(n,e=.6)=>new kt({color:n,transparent:!0,opacity:e,blending:kn,depthWrite:!1});function h2(n,e,t,i=8){let s=new P(n[0],n[1],n[2]),r=new P(e[0],e[1],e[2]),o=ae(t,t,s.distanceTo(r),i);return o.applyQuaternion(new un().setFromUnitVectors(new P(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function mp(n,e=1.36){n.add("aluDark",L(Ee(.06,e,.07),[.4,e/2,sn])),n.add("graphite",L(Ee(.16,.03,.16),[.4,.015,sn])),n.add("aluDark",L(Ee(.48,.06,.08),[.16,e,sn])),n.add("chrome",L(Ee(.4,.01,.01),[.17,e-.035,sn+.03]))}function f2(){return Pt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${bt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function p2(){return Pt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function m2(n,e,t){t.add("graphite",L(Ie(.88,.8,.42,.02),[0,mt+.4,-.33])),t.add("aluDark",L(Ie(.9,.03,.44,.01),[0,mt+.815,-.33]));let i=f2().tex,s=new Vn(Ie(.26,.17,.3,.008),new Et({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:mt+.13+x*.19,out:0,until:0});t.add("aluDark",L(Ee(.06,.46,.06),[0,mt+.23,.16])),t.add("aluDark",L(Ee(.07,.06,.88),[0,mt+.46,.56]));let o=Nt("scan-head",[0,mt+.4,sn]);e.add(o),o.add(new dt().add("graphite",L(Ie(.38,.07,.09,.012),[0,-.035,0])).add("chrome",L(Ee(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=qt(7314431,.6);o.add(Qe(Ee(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=mt+.4-.075-(In+.004),c=tc(6130687,0),u=Qe(new vt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=tc(10469631,0),h=Qe(Ee(.3,.001,.008),d,[0,In+.006-(mt+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let p=new _t,f=0;return{update(x,m,g){let _=g.work;if(o.position.z=sn+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,g.working&&m>f){f=m+.25+Math.random()*.3;let M=r[Math.floor(Math.random()*r.length)];M.until=m+.5+Math.random()*.5}for(let M=0;M<r.length;M++){let y=r[M];y.out=jt(y.out,m<y.until?.16:0,9,x),p.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(M,p)}s.instanceMatrix.needsUpdate=!0}}}function g2(n,e,t,i){t.add("graphite",L(Ie(.8,.34,.44,.02),[0,mt+.17,-.32]));for(let f=0;f<9;f++)t.add("alu",L(Ee(.012,.1,.38),[-.32+f*.08,mt+.39,-.32]));t.add("rubber",ui([[.3,mt+.2,-.09],[.3,mt+.32,.12],[.37,1.5,sn-.08]],.018,.12,8));for(let f of[-.37,.37])t.add("aluDark",L(Ee(.07,1.44,.09),[f,.72,sn])),t.add("graphite",L(Ee(.16,.03,.18),[f,.015,sn]));t.add("aluDark",L(Ee(.84,.09,.11),[0,1.44,sn])),t.add("chrome",L(Ee(.76,.016,.016),[0,1.44,sn+.062])),t.add("hazard",L(Ee(.84,.02,.112),[0,1.494,sn]));let s=Ni({color:14673648,opacity:.1,fresnel:.45,side:en,emissive:16742943,emissiveIntensity:.06});for(let f of[-.335,.335])e.add(Qe(new vt(.5,.42),s,[f,1.17,sn],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Nt("laser-head",[0,1.44,sn]);e.add(r);let o=new dt;o.add("chrome",L(Ie(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",L(Ie(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",L(ae(.026,.02,.07,20),[0,-.24,0])),o.add("orange",L(Ee(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(In+.004),c=tc(12101375,0),u=Qe(ae(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new hr(new Ws({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:kn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,In+.008-1.44,0),r.add(d);let h=new P,p=0;return{update(f,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=sn+Math.sin(x*3.1+1)*.06*g;let _=m.working&&m.wafer?1:0;if(c.opacity=jt(c.opacity,_*(.75+.25*Math.sin(x*60)),20,f),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(p+=f*40,d.getWorldPosition(h);p>1;)p-=1,i.sparks(h,1)}}}function x2(n,e,t){t.add("graphite",L(Ie(.24,.012,.16,.006),[-.12,mt+.006,-.36])),t.add("graphite",L(Ee(.05,.16,.03),[-.12,mt+.09,-.38])),t.add("white",L(Ie(.56,.36,.034,.012),[-.12,mt+.33,-.36])),t.add("visor",L(Ee(.52,.32,.006),[-.12,mt+.33,-.3405]));let i=ex();e.add(Qe(new vt(.48,.29),Da(i.tex,1.5),[-.12,mt+.33,-.337],null,null,{cast:!1})),t.add("plastic",L(Ie(.46,.03,.16,.008),[-.1,mt+.015,.1])),e.add(Qe(new vt(.44,.14),qn(p2().tex,.1),[-.1,mt+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),mp(t),t.add("steel",L(ae(.04,.04,.14,20),[0,1.26,sn]));let s=Nt("probe",[0,1.1,sn]);e.add(s),s.add(new dt().add("chrome",L(ae(.015,.015,.3,12),[0,.15,0])).add("graphite",L(ae(.13,.13,.018,48),[0,.009,0])).add("gold",L(ae(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=qt(4063119,.2);s.add(Qe(Qt(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=jt(s.position.y,c.working&&c.wafer?In+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function y2(n,e,t){t.add("graphite",L(ae(.13,.15,.08,40),[0,mt+.04,-.3]));let i=Nt("pan",[0,mt+.08,-.3]);e.add(i);let s=new dt;s.add("white",L(ae(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",L(Ee(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",L(Ee(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Nt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=en;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new dt;l.add("dish",ci(a,64)),l.add("chrome",L(Qt(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",L(ae(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Ht+Math.PI/6;l.add("aluDark",h2([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",L(new Xs(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",L(ae(.03,.03,.05,18),[0,.37,0]));let c=Nt("dish",[0,.07,0]);r.add(c),r.add(new dt().add("aluDark",L(ae(.05,.05,.08,20),[0,.03,0]),L(ae(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=qt(10849535,.3);c.add(Qe(hp(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let _=tc(10127103,0),M=Qe(Qt(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(M),{r:M,mat:_,age:g/3}});mp(t),t.add("graphite",L(Ie(.12,.08,.12,.012),[0,1.29,sn])),t.add("white",L(ae(.004,.004,.18,6),[.03,1.42,sn]));let h=qt(10849535,.2);e.add(Qe(hp(.012),h,[.03,1.515,sn],null,null,{cast:!1}));let p=0,f=0,x=0;return{update(m,g,_){_.working&&g>x&&(x=g+1.2+Math.random()*1.5,f=(Math.random()-.5)*1.6),_.working||(f=0),p=jt(p,f,1.6,m),i.rotation.y=p,r.rotation.x=-.62+Math.sin(g*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(g*10)>0?4:.4)+.2;for(let M of d){M.age+=m*.8,M.age>1&&(M.age-=1);let y=M.age;M.r.position.y=.42+y*.9,M.r.scale.setScalar(1+y*6),M.mat.opacity=_.work*(1-y)*.8}}}}var hp=n=>new Fn(n,16,10);function v2(n,e,t){t.add("graphite",L(Ie(.5,.32,.34,.02),[.18,mt+.16,-.36])),t.add("aluDark",L(Ie(.12,.18,.03,.01),[-.27,mt+.2,-.36]));let i=qt(5078015,.5);e.add(Qe(Ee(.3,.02,.005),i,[.18,mt+.25,-.188],null,null,{cast:!1}));let s=[-.05,mt,.12],r=.38,o=.36,a=.1;t.add("graphite",L(ae(.09,.095,.04,32),[s[0],mt+.02,s[2]]));let l=Nt("j0",[s[0],mt+.04,s[2]]);e.add(l),l.add(new dt().add("white",L(ae(.07,.075,.13,32),[0,.065,0])).add("graphite",L(ae(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Nt("j1",[0,.16,0]);l.add(c),c.add(new dt().add("white",L(Ie(.095,r,.095,.04),[0,r/2,0])).add("graphite",L(ae(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Nt("j2",[0,r,0]);c.add(u),u.add(new dt().add("white",L(Ie(.078,o,.078,.035),[0,o/2,0])).add("graphite",L(ae(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Nt("j3",[0,o,0]);u.add(d),d.add(new dt().add("graphite",L(ae(.035,.035,.05,24),[0,.025,0])).add("chrome",L(ae(.03,.03,.012,24),[0,.056,0])).add("aluDark",L(Ee(.012,.045,.03),[-.02,.08,0]),L(Ee(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=qt(5078015,.6);d.add(Qe(Qt(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let p=mt+.04+.16,f=new P(0,p+.25,.25),x=new P;function m(g,_,M){let y=g-s[0],b=M-s[2];l.rotation.y=Math.atan2(y,b);let w=Math.hypot(y,b),v=_+a-p,S=st(Math.hypot(w,v),.05,r+o-.001),T=Math.atan2(w,v),R=st((S*S-r*r-o*o)/(2*r*o),-1,1),N=Math.acos(R),U=T-Math.atan2(o*Math.sin(N),r+o*Math.cos(N));c.rotation.x=U,u.rotation.x=N,d.rotation.x=Math.PI-U-N}return m(f.x,f.y,f.z),{update(g,_,M){M.working&&M.wafer?x.set(.08*Math.cos(_*1.7),In+.03+.06*Math.max(0,Math.sin(_*3.4)),sn-.04+.07*Math.sin(_*2.3)):M.working?x.set(.05*Math.sin(_*1.3),p+.12,sn-.3):x.set(-.05+.04*Math.sin(_*.6),p+.22,.32),f.x=jt(f.x,x.x,4,g),f.y=jt(f.y,x.y,4,g),f.z=jt(f.z,x.z,4,g),m(f.x,f.y,f.z),h.emissiveIntensity=.6+M.work*2.6,i.emissiveIntensity=.5+M.work*(1+Math.sin(_*8))}}}function fp(n){return n<.22?Xf(n/.22):n<.42?1:1-Xf((n-.42)/.58)}function _2(n,e,t){t.add("graphite",L(Ie(.6,.28,.3,.02),[.14,mt+.14,-.38])),t.add("white",L(ae(.08,.08,.3,28),[.14,mt+.36,-.38],[0,0,Math.PI/2])),t.add("steel",L(ae(.06,.06,.24,24),[-.3,mt+.12,-.4])),t.add("blue",L(Ie(.3,.86,.26,.03),[0,mt+.43,.02])),t.add("blue",L(Ie(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",L(Ee(.322,.04,.01),[0,1.6,.942])),t.add("steel",L(ae(.085,.085,.22,32),[0,1.45,sn])),t.add("chrome",L(Qt(.086,.008,8,32),[0,1.34,sn],[Math.PI/2,0,0])),t.add("rubber",ui([[.06,1.5,sn-.06],[.2,1.5,sn-.3],[.2,1.2,.2],[.2,mt+.3,-.2]],.016,.1,8)),t.add("rubber",ui([[-.06,1.42,sn-.06],[-.2,1.42,sn-.3],[-.2,1.1,.2],[-.2,mt+.28,-.22]],.016,.1,8));let i=Nt("ram",[0,1.12,sn]);e.add(i),i.add(new dt().add("chrome",L(ae(.035,.035,.42,20),[0,.21,0])).add("steel",L(Ie(.32,.05,.32,.012),[0,0,0])).add("darkSteel",L(ae(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>L(ae(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=Jg({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Qe(new Un(.07,40),new Et({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Qe(Ee(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Qe(Qt(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?fp(o):0;i.position.y=1.12-.155*d,a=jt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*js}}}function b2(n,e,t){for(let d of[-.42,.42])t.add("aluDark",L(Ee(.035,.66,.035),[d,mt+.33,-.33]));t.add("alu",L(Ie(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",L(Ee(.6,.03,.06),[0,1.16,-.3])),t.add("blue",L(ae(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",L(ae(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=nx();e.add(Qe(new vt(.8,.6),new Et({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Ie(.11,.075,.008,.004),o=s.map(d=>{let h=Qe(r,new Et({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,p)=>h.forEach((f,x)=>{let[m,g]=l(p,x),_=o[f];_.userData.tx=m,_.userData.ty=g,d&&_.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=jt(h.position.x,h.userData.tx,7,d),h.position.y=jt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function M2(n,e,t){t.add("graphite",L(ae(.07,.08,.04,28),[.3,mt+.02,-.35])),t.add("alu",L(ae(.028,.028,1,16),[.3,mt+.5,-.35])),t.add("graphite",L(ae(.09,.1,.06,32),[.3,mt+1.03,-.35]));let r=Ni({color:16771012,opacity:.14,fresnel:.5,emissive:16751150,emissiveIntensity:.1});e.add(Qe(ae(.08,.08,.13,32,!0),r,[.3,mt+1.125,-.35],null,null,{cast:!1})),e.add(Qe(new Fn(.08,32,12,0,Ht,0,Math.PI/2),r,[.3,mt+1.19,-.35],null,null,{cast:!1}));let o=Nt("spin",[.3,mt+1.12,-.35]);e.add(o),o.add(Qe(new Nn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=qt(16756782,.2);e.add(Qe(hp(.022),a,[.3,mt+1.12,-.35],null,null,{cast:!1}));let l=tc(16753978,0),c=new Xs(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Qe(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1})),t.add("callbox",L(Ie(.36,.28,.12,.02),[-.2,mt+.14,.04])),t.add("orange",L(Ee(.3,.008,.004),[-.2,mt+.255,.101])),t.add("grille",L(new vt(.12,.12),[-.28,mt+.15,.101])),t.add("steel",L(ae(.045,.045,.02,28),[-.1,mt+.15,.11],[Math.PI/2,0,0]));let u=qt(3461498,.3);return e.add(Qe(new Fn(.038,24,10,0,Ht,0,Math.PI/2),u,[-.1,mt+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:n.white},{update(d,h,p){let f=p.work;o.rotation.y+=d*(.4+7*f);let x=.6+.4*Math.sin(h*9);a.emissiveIntensity=.2+f*6*x,r.emissiveIntensity=.1+f*1.8*x,l.opacity=f*.16,u.emissiveIntensity=.3+f*3*(Math.sin(h*5)>0?1:.2)}}}function S2(n,e,t){t.add("aluDark",L(Ie(.72,.62,.04,.012),[0,mt+.31,-.4])),t.add("graphite",L(Ie(.72,.06,.3,.012),[0,mt+.03,-.3]));let i=Nt("unwind",[-.16,mt+.4,-.31],[Math.PI/2,0,0]),s=Nt("rewind",[.2,mt+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=Pt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new Et({map:r,roughness:.7});i.add(new dt().add("roll",ae(.15,.15,.1,48)).add("gold",ae(.05,.05,.11,24)).add("chrome",ae(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new dt().add("ceramic",ae(.075,.075,.1,40)).add("gold",ae(.035,.035,.11,20)).add("chrome",ae(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,mt+.52],[.05,mt+.3],[.28,mt+.42]])t.add("chrome",L(ae(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));mp(t),t.add("steel",L(ae(.042,.042,.18,22),[0,1.24,sn])),t.add("chrome",L(Qt(.043,.006,6,24),[0,1.16,sn],[Math.PI/2,0,0]));let a=Nt("tamp",[0,1.08,sn]);e.add(a),a.add(new dt().add("chrome",L(ae(.016,.016,.3,12),[0,.15,0])).add("graphite",L(Ie(.16,.025,.12,.006),[0,0,0])).add("gold",L(Ee(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let p=l?fp(l):0;a.position.y=1.08-(1.08-(In+.03))*p,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function w2(n,e,t){t.add("graphite",L(Ie(.62,.86,.44,.02),[0,mt+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",L(Ee(.016,.84,.01),[d,mt+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",L(Ie(.56,.085,.02,.006),[0,mt+.07+d*.1,-.095]));t.add("grille",L(new vt(.36,.5),[.311,mt+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Vn(Ee(.014,.01,.004),new kt({color:16777215}),i*s),o=new _t,a=[],l=[new ze(3461498),new ze(3461498),new ze(5078015),new ze(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,mt+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let p=l[(d*7+h*3)%l.length].clone();a.push(p),r.setColorAt(d*s+h,p)}e.add(r);let c=new ze,u=0;return{update(d,h,p){if(u+=d,!(u<.08)){u=0;for(let f=0;f<a.length;f++){let x=p.working?Math.random()>.45:(f+Math.floor(h*.7))%9===0;c.copy(a[f]).multiplyScalar(x?3.2:.25),r.setColorAt(f,c)}r.instanceColor.needsUpdate=!0}}}}var E2={archive:m2,engraver:g2,terminal:x2,satellite:y2,robot:v2,press:_2,kanban:b2,beacon:M2,labeler:S2,generic:w2};function T2(n,e){let t=qt(dp[e],1.1);return{...n,blue:n.white,ceramic:n.white,orange:t,hazard:t,rubber:n.graphite,darkSteel:n.graphite,aluDark:n.graphite,steel:n.graphite,plastic:n.graphite,visor:n.plastic,seam:qt(dp[e],1.8)}}var Gd=[384,144],Ex=.66,A2=Ex*Gd[1]/Gd[0],Sx=2.3,Tx=8,wx={idle:["待机","IDLE","#7fe0a8"],working:["运行","RUN","#8fb4ff"],error:["故障","FAULT","#ff8a80"]},R2={ok:"#34d17a",error:"#ff5a4f",running:"#6f9bff"};function C2(n,e,t,i,s,r){n.clearRect(0,0,e,t),n.fillStyle="rgba(5, 12, 24, 0.84)",qi(n,3,3,e-6,t-6,16),n.fill(),n.lineWidth=2,n.strokeStyle=s,n.globalAlpha=.75,n.stroke(),n.globalAlpha=1,n.fillStyle=s,qi(n,16,22,5,t-44,2.5),n.fill(),n.textBaseline="middle";let[o,a,l]=wx[r.status]||wx.idle;n.font=`700 19px ${bt}`;let c=`${o} ${a}`,u=n.measureText(c).width+22,d=e-18-u;n.fillStyle=l,n.globalAlpha=.16,qi(n,d,19,u,30,15),n.fill(),n.globalAlpha=1,n.fillText(c,d+11,35),n.fillStyle=s,n.font=`700 25px ${bt}`,n.fillText(i.code,32,35);let h=32+n.measureText(i.code).width+12;n.fillStyle="#eef3fd",Yi(n,i.zh,d-h-10,25,600,At),n.fillText(i.zh,h,35);let p=r.label||i.en;n.fillStyle=r.label?"#cfe0ff":"#7f8fae",Yi(n,p,e-52,27,r.label?600:500,At),n.fillText(p,32,76);for(let f=0;f<Tx;f++){let x=f<r.history.length?r.history[f]:null;n.fillStyle=x?R2[x]||"#8a94a8":"rgba(150, 170, 210, 0.18)",qi(n,32+f*24,106,18,14,3),n.fill()}n.fillStyle="#9fb0cf",n.font=`600 19px ${bt}`,n.textAlign="right",n.fillText(`CALLS ${r.count}`,e-20,113),n.textAlign="left"}function P2(n,e,t,i){let s=vi[e],r=dp[e],o=pp(t),a=Ui(o,Jr),l=Nt(`station-${e}`,[a.x,0,a.z],[0,_x(o),0]);l.userData.solid=`station:${e}`;let c=T2(n,e),u=new dt;u.add("graphite",L(Ie(.9,.07,.7,.02),[0,.035,-.15])),u.add("white",L(Ie(1,.8,.8,.05),[0,.47,-.15])),u.add("graphite",L(Ie(1.03,.026,.83,.012),[0,.877,-.15]));for(let[U,z,D,K]of[[.86,.006,0,.2],[.86,.006,0,-.5],[.006,.66,.45,-.15],[.006,.66,-.45,-.15]])u.add("seam",L(Ee(U,.012,z),[D,.05,K]));u.add("visor",L(Ie(.9,.21,.014,.006),[0,.62,.252]));let d=E2[e](c,l,u,i);l.add(u.build({...c,...u.extra||{}},{name:`station-${e}`}));let h=Ki(s.zh,s.en,s.code,r);l.add(Qe(new vt(.46,.13),qn(h.tex,.35),[-.19,.62,.2605],null,null,{cast:!1}));let p=qt(8380584,.6);l.add(Qe(Ee(.2,.03,.006),p,[.29,.62,.2605],null,null,{cast:!1}));let f=qt(5078015,.4);l.add(Qe(Ee(.92,.012,.008),f,[0,.83,.254],null,null,{cast:!1}));let x=Pt(Gd[0],Gd[1],null),m=new kt({map:x.tex,transparent:!0,depthWrite:!1,side:en,color:new ze().setScalar(1.2)}),g=Qe(new vt(Ex,A2),m,[0,Sx,-.1],null,null,{cast:!1,receive:!1});g.name=`holo-${e}`,g.renderOrder=3,g.userData.noSolid=!0,l.add(g);let _=Hd(c);_.root.position.set(0,0,sn),l.add(_.root),l.add(di(n,1.25,1,[0,0,-.12],.55));let M=new kt({visible:!1}),y=new nt(new nn(1.1,2,1.5),M);y.position.set(0,1,.1),l.add(y);let b={work:0,flash:0,flashOk:!0,label:"",status:"idle",count:0,history:[],sig:""},w=new ze,v=new ze(5078015),S=new ze(3461498),T=new ze(16726832),R=Ui(o,Cs+.05,In+.08);function N(){let U=`${b.status}|${b.label}|${b.count}|${b.history.join(",")}`;U!==b.sig&&(b.sig=U,x.redraw((z,D,K)=>C2(z,D,K,s,r,b)))}return N(),{kind:e,index:t,theta:o,root:l,accent:r,holo:g,port:Ui(o,Cs,In),anchor:Ui(o,Jr+.1,Sx+.42),hover:[{id:`station:${e}`,object:y}],setLabel(U){b.label=U||"",N()},setStats(U,z){b.count=U,b.history=z,N()},face(U){g.lookAt(U.position)},status:()=>b.status,readout:()=>({status:b.status,label:b.label,count:b.count,history:b.history.slice()}),onStart(U){b.label=U.label||U.name,d.onStart?.(U),N()},onEnd(U,z){b.flash=z?.9:2.2,b.flashOk=z,z||i.puff(R,10),d.onEnd?.(U,z)},update(U,z,D){b.work=jt(b.work,D.working?1:0,3,U),b.flash=Math.max(0,b.flash-U);let K=b.flash>0&&!b.flashOk;b.status=D.working?"working":K?"error":"idle",N(),d.update(U,z,{working:D.working,wafer:D.wafer,work:b.work});let te;b.flash>0?(w.copy(b.flashOk?S:T),te=3.2*(b.flashOk?Math.min(1,b.flash*2):Math.sin(z*14)>0?1:.25)):(w.copy(v),te=.25+b.work*(2.2+Math.sin(z*6)*.6)),_.led.emissive.copy(w),_.led.emissiveIntensity=te,f.emissive.copy(w),f.emissiveIntensity=.25+te*.6,p.emissive.copy(K?T:D.working?v:S),p.emissiveIntensity=K?Math.sin(z*12)>0?3.5:.3:D.working?1.2+b.work*2.2:.7}}}function Ax(n,e){let t=Nt("stations"),i=kd.map((o,a)=>P2(n,o,a,e));for(let o of i)t.add(o.root);let s=Object.fromEntries(i.map(o=>[o.kind,o])),r={};return{root:t,list:i,byKind:s,setStats(o){for(let a in r)r[a].length=0;if(o)for(let a of o.calls)(r[a.kind]||(r[a.kind]=[])).push(a.status);for(let a of i){let l=r[a.kind]||[];a.setStats(o&&o.tools.byKind[a.kind]||0,l.slice(-Tx))}},face(o){for(let a of i)a.face(o)}}}var gp=n=>Ki(Yt[n].zh,Yt[n].en,Yt[n].code),_i=new P(7.45,0,As),Qs=.83,vp=13,jr=.4,Fi=.36,Ps=.4,_p=.02,bp=.062,Mp=.02,Sp=[8.2,8.75,9.3],wp=[-.1,.45,1],us=.55,Zi=2.45,Vd=Fi+.046,xp=1.9,I2=1.3,Oo=9,Rx=n=>((n-1)%Oo+Oo)%Oo,yp=(n,e=new P)=>e.set(Sp[n%3],us,wp[Math.floor(n/3)]),Cx={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}},Wd=n=>n?typeof n.fileCount=="number"?n.fileCount:n.files?n.files.length:0:0;function L2(n,e,t,i){let s=i.info,r=s?Cx[s.status]||Cx.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${At}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${At}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${bt}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0;n.fillText(`CALLS ${o} · FILES ${Wd(s)}`,30,t*.64),n.fillStyle="#15171b";let a=30,l=(i.no||7)*2654435761;for(let c=0;a<e-16;c++){let u=1+((l>>>c%24^c)&3);c%2===0&&n.fillRect(a,t*.8,u,t*.13),a+=u+1}}function D2(n){let e=new dt,t=.03+(Fi-.03)/2,i=Fi-.03,s=-jr/2+.008;e.add("graphite",L(Ie(jr,.03,Ps,.008),[0,.015,0])),e.add("graphite",L(Ee(.016,.022,Ps),[s,Fi-.011,0]),L(Ee(.016,i,.02),[s,t,Ps/2-.01]),L(Ee(.016,i,.02),[s,t,-Ps/2+.01])),e.add("graphite",L(Ee(.06,.026,.06),[0,Fi+.013,0]),L(Ie(.17,.02,.17,.006),[0,Fi+.036,0]));for(let l=0;l<vp;l++){let c=bp+l*Mp-.005;for(let u of[-1,1])e.add("plastic",L(Ee(.3,.004,.05),[_p,c,u*.165]))}let r=new dt().add("smoke",L(Ee(jr-.016,i,.01),[.008,t,Ps/2-.005]),L(Ee(jr-.016,i,.01),[.008,t,-Ps/2+.005]),L(Ee(.01,i,Ps-.02),[jr/2-.005,t,0]),L(Ee(jr-.016,.01,Ps-.02),[.008,Fi-.005,0])),o=new Jt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new dt().add("white",L(Ie(.02,Fi-.045,Ps-.03,.006),[0,0,0])).add("graphite",L(ae(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),L(ae(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(Fi-.045)/2+.006,doorX:-jr/2-.004}}function Px(n,e){let t=Nt("stocker"),i=new kt({visible:!1}),s=new nn(jr+.04,Fi+.08,Ps+.04),r=new vt(.28,.1225),o=D2(n),a=Nt("load-port",[_i.x,0,_i.z]);a.userData.solid="load-port",t.add(a);let l=new dt;l.add("white",L(Ie(.56,Qs-.012,.62,.02),[0,(Qs-.012)/2,0])),l.add("graphite",L(Ie(.44,.012,.44,.004),[0,Qs-.006,0]),L(Ee(.58,.06,.64),[0,.03,0]));for(let V=0;V<3;V++){let B=V/3*Math.PI*2+.5;l.add("chrome",L(ae(.008,.012,.012,12),[Math.cos(B)*.13,Qs+.004,Math.sin(B)*.13]))}l.add("aluDark",L(Ee(.04,.22,.04),[.24,Qs+.11,.27]),L(Ee(.08,.03,.05),[.21,Qs+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=gp("loadport");a.add(Qe(new vt(.44,.124),qn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((V,B)=>{let re=qt(V,.15);return a.add(Qe(Ee(.05,.016,.008),re,[-.12+B*.12,.46,.312],null,null,{cast:!1})),re});a.add(di(n,.9,.95,[0,0,0],.5));let d=new nt(new nn(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new dt,p=(Sp[0]+Sp[2])/2,f=(wp[0]+wp[2])/2;h.add("graphite",L(Ee(1.66,us-.03,1.66),[p,(us-.03)/2,f])),h.add("white",L(Ie(1.76,.03,1.76,.01),[p,us-.015,f])),h.add("aluDark",L(Ee(1.7,.05,1.7),[p,.025,f]));let x=[];for(let V=0;V<Oo;V++){let B=yp(V);h.add("aluDark",L(Ie(.44,.008,.44,.003),[B.x,us+.002,B.z]));for(let G=0;G<3;G++){let Re=G/3*Math.PI*2+.5;h.add("chrome",L(ae(.007,.01,.01,10),[B.x+Math.cos(Re)*.12,us+.008,B.z+Math.sin(Re)*.12]))}let re=qt(3134074,0);t.add(Qe(Ee(.12,.006,.012),re,[B.x,us+.004,B.z+.235],null,null,{cast:!1})),x.push(re)}t.add(h.build(n,{name:"buffer-table"}));let m=gp("stocker");t.add(Qe(new vt(.62,.175),qn(m.tex,.35),[p,us*.55,f+.834],null,null,{cast:!1})),t.add(di(n,2.3,2.3,[p,0,f],.55));let g=new nt(new nn(1.8,us+.45,1.8),i);g.position.set(p,(us+.45)/2,f),t.add(g);let _=new dt,M=[7,10],y=[-.45,1.95];for(let V of M){for(let B of y)_.add("white",L(Ee(.1,Zi+.05,.1),[V,(Zi+.05)/2,B])),_.add("graphite",L(Ee(.22,.03,.22),[V,.015,B]));_.add("aluDark",L(Ee(.09,.09,y[1]-y[0]+.1),[V,Zi,(y[0]+y[1])/2]))}for(let V of y)_.add("steel",L(Ee(M[1]-M[0]+.1,.09,.09),[(M[0]+M[1])/2,Zi,V]));t.add(_.build(n,{name:"gantry"}));let b=gp("gantry"),w=Qe(new vt(.9,.253),qn(b.tex,.35),[(M[0]+M[1])/2,Zi-.2,y[1]+.047],null,null,{cast:!1});t.add(w),t.add(new dt().add("steel",L(Ee(.02,.1,.02),[(M[0]+M[1])/2-.35,Zi-.06,y[1]+.04]),L(Ee(.02,.1,.02),[(M[0]+M[1])/2+.35,Zi-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let v=Nt("bridge");t.add(v),v.add(new dt().add("blue",L(Ee(.14,.12,y[1]-y[0]+.12),[0,Zi+.105,(y[0]+y[1])/2])).add("graphite",L(Ee(.26,.1,.13),[0,Zi+.07,y[0]]),L(Ee(.26,.1,.13),[0,Zi+.07,y[1]])).build(n,{name:"bridge-beam"}));let S=Nt("trolley");v.add(S),S.add(new dt().add("graphite",L(Ie(.28,.13,.26,.02),[0,Zi-.035,0])).add("steel",L(ae(.045,.045,.2,20),[0,Zi-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let T=ae(.0035,.0035,1,6),R=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([V,B])=>{let re=Qe(T,n.steel,[V,1,B],null,null,{cast:!1});return S.add(re),re}),N=Nt("gripper");S.add(N),N.add(new dt().add("graphite",L(Ie(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let U=[-1,1].map(V=>{let B=Qe(Ee(.024,.06,.13),n.steel,[V*.115,-.01,0]);return N.add(B),B}),z=qt(5078015,.3);N.add(Qe(Ee(.1,.008,.01),z,[0,.03,.122],null,null,{cast:!1}));let D={x:_i.x,z:_i.z,hook:xp,grip:0,carry:null},K=()=>{v.position.x=D.x,S.position.z=D.z,N.position.y=D.hook;let V=Zi-.1,B=D.hook+.055,re=Math.max(.01,V-B);for(let Re of R)Re.scale.y=re,Re.position.y=B+re/2;let G=Xi(.115,.079,D.grip);U[0].position.x=-G,U[1].position.x=G,D.carry&&D.carry.g.position.set(D.x,D.hook-Vd,D.z)},te=new Set,ee=new Array(Oo).fill(null),ne=null;function X(){let V=o.g.clone();V.name="foup";let B=o.door.clone();V.add(B);let re=Pt(256,112,()=>{}),G=new Et({map:re.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:re.tex,emissiveIntensity:.18});V.add(Qe(r,G,[.01,Fi-.075,Ps/2+.002],null,null,{cast:!1}));let Re=new nt(s,i);Re.position.set(0,Fi/2+.02,0),V.add(Re);let Fe={no:0,info:null,g:V,door:B,label:re,labelMat:G,labelKey:"",proxy:Re,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return W(Fe),te.add(Fe),t.add(V),Fe}function W(V){let B=`${V.no}|${V.info?`${V.info.status}|${V.info.calls}|${Wd(V.info)}`:"-"}|${V.count}`;B!==V.labelKey&&(V.labelKey=B,V.proxy.userData.hoverId=V.no?`foup:${V.no}`:"loadport",V.label.redraw((re,G,Re)=>L2(re,G,Re,V)))}function O(V,B){let re=V.count;if(V.count+=1,V.looks.push(B),re<vp){let G=e.create(B);G.position.set(_p,bp+re*Mp,0),V.g.add(G),V.slots.push(G)}W(V)}function Z(V){te.delete(V),t.remove(V.g),V.label.tex.dispose(),V.labelMat.dispose();for(let B=0;B<Oo;B++)ee[B]===V&&(ee[B]=null);ne===V&&(ne=null)}function Y(V){let B=V.doorOpen,re=st(B/.25,0,1),G=as(st((B-.25)/.75,0,1));V.door.position.set(o.doorX-.018*re,o.doorY-.43*G,0)}function q(V=!1){let B=X();return B.g.position.set(_i.x,Qs,_i.z),B.state=V?"dock":"spawning",B.sp=V?1:0,B.doorOpen=V?1:0,Y(B),ne=B,B}function le(V,B){let re=ee[B];re&&re!==V&&Z(re),ee[B]=V;let G=yp(B);V.g.position.copy(G),V.state="nest",V.doorOpen=0,Y(V)}let he=[],ie=null,fe=V=>({setup:()=>(V(),{d:0,fn:null})}),Le=(V,B,re=1.6)=>({setup(){let G=D.x,Re=D.z,Fe=Math.hypot(V-G,B-Re);return{d:Fe<.001?0:Math.max(.35,Fe/re),fn:H=>(D.x=Xi(G,V,H),D.z=Xi(Re,B,H))}}}),tt=(V,B)=>({setup(){let re=D.hook;return{d:Math.abs(V-re)<.001?0:B,fn:G=>D.hook=Xi(re,V,G)}}}),He=(V,B=.3)=>({setup(){let re=D.grip;return{d:B,fn:G=>D.grip=Xi(re,V,G)}}}),Ze=(V,B,re=.55)=>({setup(){let G=V.doorOpen;return{d:re,fn:Re=>(V.doorOpen=Xi(G,B,Re),Y(V))}}});function Ke(V){let B=Rx(V.no),re=yp(B);return{i:0,steps:[fe(()=>V.state="closing"),Ze(V,0),Le(_i.x,_i.z),tt(Qs+Vd,.6),He(1),fe(()=>(D.carry=V,V.state="carried",z.emissiveIntensity=2.2)),tt(I2+Vd,.9),fe(()=>{ne===V&&(ne=null),q();let G=ee[B];G&&G!==V&&(G.state="sink",G.sp=0,ee[B]=null)}),Le(re.x,re.z),tt(us+Vd,.8),fe(()=>{D.carry=null,z.emissiveIntensity=.3,ee[B]&&ee[B]!==V&&Z(ee[B]),le(V,B)}),He(0),tt(xp,.5),Le(_i.x,_i.z)]}}let me={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new P(_i.x,1.1,_i.z),stocker:new P(p,.9,f)},speed:1,hoverObjects(V=[]){for(let B of te)B.no&&V.push(B.proxy);return V},dockReady:()=>!!ne&&ne.state==="dock"&&ne.doorOpen>=1,dockTurn:()=>ne&&ne.no||null,dockCount:()=>ne?ne.count:0,bindDock(V,B){return!ne||ne.no?!1:(ne.no=V,ne.info=B||null,W(ne),!0)},slotPoint(V,B=new P){let re=ne?ne.g.position:new P(_i.x,Qs,_i.z);return B.set(re.x+_p,re.y+bp+Math.min(V,vp-1)*Mp,re.z)},addWafer(V){ne&&O(ne,V)},addLate(V,B){for(let re of te)if(re.no===V&&re.state!=="sink")return O(re,B),!0;return!1},updateInfo(V,B){for(let re of te)re.no===V&&(re.info=B,W(re))},ship(V){return!ne||ne.no!==V||he.includes(ne)||ie&&ie.foup===ne?!1:(he.push(ne),!0)},shipped:V=>{for(let B of te)if(B.no===V)return B.state==="carried"||B.state==="nest"||B.state==="sink"||he.includes(B)||ie&&ie.foup===B;return!1},placeNest(V,B,re){let G=X();G.no=V,G.info=B;for(let Re of re)O(G,Re);le(G,Rx(V)),W(G)},resetDock(V,B,re){ne&&Z(ne);let G=q(!0);if(V){G.no=V,G.info=B;for(let Re of re||[])O(G,Re)}W(G)},busy:()=>!!ie||he.length>0,clear(){for(let V of[...te])Z(V);he.length=0,ie=null,D.carry=null,D.grip=0,D.hook=xp,D.x=_i.x,D.z=_i.z,z.emissiveIntensity=.3,K()},update(V){if(!ie&&he.length){let G=he.shift();ie=Ke(G),ie.foup=G}let B=V*me.speed;for(;ie&&B>0;){let G=ie.steps[ie.i];if(!G){ie=null;break}if(G.run||(G.run=G.setup(),G.t=0),!G.run.d){G.run.fn&&G.run.fn(1),ie.i+=1;continue}let Re=Math.min(B,G.run.d-G.t);G.t+=Re,B-=Re,G.run.fn&&G.run.fn(as(st(G.t/G.run.d,0,1))),G.t>=G.run.d-1e-6&&(ie.i+=1)}K();for(let G of[...te])G.state==="spawning"?(G.sp=Math.min(1,G.sp+V/.8),G.g.position.y=Qs-(Fi+.07)*(1-as(G.sp)),G.sp>=1&&(G.state="dock")):G.state==="dock"&&G.doorOpen<1?(G.doorOpen=Math.min(1,G.doorOpen+V/.6),Y(G)):G.state==="sink"&&(G.sp=Math.min(1,G.sp+V/1.2),G.g.position.y=us-(Fi+.09)*as(G.sp),G.sp>=1&&Z(G));for(let G=0;G<Oo;G++)x[G].emissiveIntensity=ee[G]?1.6:0;let re=!!ie;u[0].emissiveIntensity=me.dockReady()?1.8:.15,u[1].emissiveIntensity=ne&&ne.state==="closing"?2.2:.15,u[2].emissiveIntensity=re?1.8:.15},dispose(){for(let V of[...te])Z(V);for(let V of[o.g,o.door])V.traverse(B=>B.geometry&&B.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return K(),me}function Ix(n){let e=new Jt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new Ws({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?kn:Ys}),h=new hr(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new P,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new P((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new P(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var Lx=.15,N2=.006;function Dx(n){let e=new Nn(Lx,Lx,N2,40,1,!1),t=new Et({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new nt(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Ep=.34,Xd=.17,Nx=4,O2=2.4,U2=.55,F2=.9,Tp=.03,k2=5,$d=-.006,B2=12,z2=.4,H2=3,G2=1.5,V2=9,W2=new ze(16756768),X2=new ze(3461498),nc=(n,e=n.kind)=>n.status==="error"?"bad":Oa.has(e)?"gold":"normal";function Ox(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=nc(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,Wd(n)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var qd=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Pd(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Ep-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-Xd,r=this.gateOut+Xd,o=this.items.find(f=>f.s>s+1e-6&&f.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let f of this.items){let x=d?d.s-Ep:this.end,m=!d||d.s-Ep>=r;if(f.cycled)f.s<r&&(f.s<=this.gateOut-Xd+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(f.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),f.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&f.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else f.s<this.gateIn+Xd&&(a=!0);f.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(f.dwell+=e*t,c=!0,f.dwell>=U2&&(f.cycled=!0))}let g=x-f.s;if(g<=1e-5)f.v=0;else{let _=Math.min(O2*t,Math.sqrt(2*Nx*g));f.v=Math.min(_,f.v+Nx*t*e),f.s=Math.min(x,f.s+f.v*e),u=!0}f.arrivedAt==null&&f.s>=this.end-1e-4&&(f.arrivedAt=i),d=f}let p=5*e*t;this.doorIn=st(this.doorIn+(a?p:-p),0,1),this.doorOut=st(this.doorOut+(l?p:-p),0,1),this.cycling=c,this.moving=u}};function Ux({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new P,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=st(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new qd([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),p=st((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),f=new qd([o.outPort,o.outCenter,o.trackEnd],{gateIn:p*h,gateOut:h+.45,stop:h}),x=H=>e.byKind[H.kind]?H.kind:"generic",m=new Map,g=new Set,_=new Map,M=Object.fromEntries(e.list.map(H=>[H.kind,new Array(k2).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},b={inbound:0,outbound:0,robot:!1,stocker:!1},w={},v=[],S=0,T=0,R=!0,N=0,U=1,z=null;function D(H){let pe=_.get(H);return pe||(pe={no:H,status:"running",info:null,shipped:!1,pending:[]},_.set(H,pe)),pe}let K=H=>H.status!=="running"||H.no<S,te=H=>{for(let pe of m.values())if(pe.turn===H)return!0;return!1};function ee(H){let pe={id:H.id,call:H,kind:x(H),turn:H.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:In,waitT:0};return m.set(H.id,pe),D(H.turn),pe}function ne(H){H.mesh&&(r.remove(H.mesh),H.mesh=null)}function X(H){H.stage="stored",m.delete(H.id),g.add(H.id)}function W(H){H.signaled||(H.signaled=!0,e.byKind[H.kind].onEnd(H.call,H.call.status!=="error"))}function O(H,pe){t.addLate(H,pe)||D(H).pending.push(pe)}function Z(H){H.it&&(d.remove(H.it),f.remove(H.it),H.it=null),H.level>=0&&(M[H.kind][H.level]=null,H.level=-1),y.carry===H&&(y.carry=null),ne(H),W(H),O(H.turn,nc(H.call,H.kind)),X(H)}let Y=H=>M[H].indexOf(null);function q(H,pe){let Te=e.byKind[H.kind];M[H.kind][pe]=H,H.level=pe,H.stage="station",H.arriveT=N,H.mesh||(H.mesh=s.create("raw"),r.add(H.mesh)),H.mesh.position.set(Te.port.x,In+pe*Tp,Te.port.z)}function le(){for(let H of m.values())ne(H);m.clear(),g.clear(),_.clear(),d.items.length=0,f.items.length=0;for(let H of Object.keys(M))M[H].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),z=null}function he(H){w={},v=[];for(let pe of H.calls){if(pe.status!=="running")continue;let Te=x(pe);w[Te]=(w[Te]||0)+1,v.push(pe)}S=H.turns.length?H.turns[H.turns.length-1].no:0}function ie(H){le(),t.clear();for(let k of H.turns)Object.assign(D(k.no),{info:k,status:k.status});let pe=H.turns.filter(k=>k.status!=="running");for(let k of pe)D(k.no).shipped=!0;for(let k of pe.slice(-V2))t.placeNest(k.no,k,Ox(k,H.calls));let Te=H.turns.find(k=>k.status==="running")||null;Te?t.resetDock(Te.no,Te,Ox(Te,H.calls)):t.resetDock(null,null,[]);for(let k of H.calls){if(k.status!=="running"){g.add(k.id);continue}let et=ee(k),pt=Y(et.kind);pt>=0&&q(et,pt),e.byKind[et.kind].onStart(k)}he(H)}function fe(H){if(!H)return;if(R||H.turnCount<T){R=!1,T=H.turnCount,ie(H);return}T=H.turnCount;for(let Te of H.turns){let k=D(Te.no);k.info=Te,k.status=Te.status,t.updateInfo(Te.no,Te)}let pe=new Set;for(let Te of H.calls){pe.add(Te.id);let k=m.get(Te.id);k?k.call=Te:g.has(Te.id)||(ee(Te),e.byKind[x(Te)].onStart(Te))}for(let Te of g)pe.has(Te)||g.delete(Te);he(H)}let Le=(H,pe)=>({yaw:H,reach:No,lift:pe,d:(Te,k)=>Math.max(.18,Math.abs($f(Te.yaw,k.yaw))/4)});function tt(H,pe){let Te=e.byKind[H.kind];M[H.kind][pe]=H,H.level=pe;let k=pe*Tp;return{type:"deliver",job:H,from:Yt.lock.code,to:vi[H.kind].code,steps:[Le(Do,$d),{reach:Cs,d:.38},{lift:ec,d:.15,onStart(){d.remove(H.it),H.it=null,H.stage="carried",H.restY=In,y.carry=H},onEnd:()=>H.restY=0},{reach:No,d:.32},Le(Te.theta,k+ec),{reach:Cs,d:.38},{lift:k+$d,d:.15,onStart:()=>H.restY=In+k,onEnd(){y.carry=null,q(H,pe)}},{reach:No,d:.32}]}}function He(H){let pe=e.byKind[H.kind],Te=H.level,k=Te*Tp;return H.reserved=!0,{type:"collect",job:H,from:vi[H.kind].code,to:Yt.unload.code,steps:[Le(pe.theta,k+$d),{reach:Cs,d:.38},{lift:k+ec,d:.15,onStart(){M[H.kind][Te]=null,H.level=-1,H.stage="carried",H.restY=In+k,y.carry=H},onEnd:()=>H.restY=0},{reach:No,d:.32},Le(ka,ec),{reach:Cs,d:.38},{lift:$d,d:.15,onStart:()=>H.restY=In,onEnd(){y.carry=null,H.it=f.add(H),H.stage="out"}},{reach:No,d:.32}]}}function Ze(){let H=null,pe=d.head();if(d.atEnd(pe)){let Te=Y(pe.job.kind);Te>=0&&(H={type:"deliver",job:pe.job,k:Te,ready:pe.arrivedAt??N})}if(f.tailFree())for(let Te of m.values())Te.stage==="station"&&Te.processed&&!Te.reserved&&(!H||Te.processedAt<H.ready)&&(H={type:"collect",job:Te,ready:Te.processedAt});return H?H.type==="deliver"?tt(H.job,H.k):He(H.job):null}function Ke(H){let pe=n.robot;if(!y.task){let et=Ze();et?(y.task=et,y.steps=et.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,pe.setBusy(!0)):(y.idle+=H,y.idle>G2&&!y.homed&&!y.cur&&(y.steps=[Le(Do,0)],y.homed=!0))}let Te=H,k=0;for(;Te>0&&k++<32;){if(!y.cur){let Ce=y.steps.shift();if(!Ce)break;let A={yaw:pe.pose.yaw,reach:pe.pose.reach,lift:pe.pose.lift},J={yaw:Ce.yaw??A.yaw,reach:Ce.reach??A.reach,lift:Ce.lift??A.lift},de=typeof Ce.d=="function"?Ce.d(A,J):Ce.d;y.cur={st:Ce,from:A,to:J,d:de/U,t:0},Ce.onStart&&Ce.onStart()}let et=y.cur,pt=Math.min(Te,et.d-et.t);et.t+=pt,Te-=pt;let Mt=et.d>0?as(et.t/et.d):1;pe.setPose(et.from.yaw+$f(et.from.yaw,et.to.yaw)*Mt,Xi(et.from.reach,et.to.reach,Mt),Xi(et.from.lift,et.to.lift,Mt)),et.t>=et.d-1e-6&&(y.cur=null,et.st.onEnd&&et.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,pe.setBusy(!1)),pe.setStatus){let et=y.task,pt=!!y.cur||y.steps.length>0,Mt=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;et?pe.setStatus(et.type,et.from,et.to,Mt):pe.setStatus(pt?"home":"idle",null,pt?Yt.lock.code:null,null)}y.carry&&y.carry.mesh&&(pe.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function me(){for(let H of m.values())H.stage!=="station"||H.processed||H.call.status==="running"||N<H.arriveT+F2/U||(H.processed=!0,H.processedAt=N,s.setLook(H.mesh,nc(H.call,H.kind)),W(H))}function V(H,pe){f.remove(pe),H.it=null,H.stage="transfer",z={j:H,t:0,d:z2/U,from:H.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new P)}}function B(H){if(!z)return;z.t+=H;let pe=as(z.t/z.d),Te=z.j.mesh;if(Te.position.lerpVectors(z.from,z.to,pe),Te.position.y+=Math.sin(Math.PI*pe)*.025,z.t>=z.d){let k=z.j;z=null,ne(k),t.dockTurn()===k.turn?t.addWafer(nc(k.call,k.kind)):O(k.turn,nc(k.call,k.kind)),X(k)}}function re(H){if(t.dockReady()&&t.dockTurn()==null){let k=null;for(let et of _.values())!et.shipped&&(!k||et.no<k.no)&&(k=et);if(k){t.bindDock(k.no,k.info);for(let et of k.pending.splice(0))t.addWafer(et)}}let pe=t.dockTurn();if(pe!=null&&!z&&t.dockReady()){let k=D(pe);!k.shipped&&K(k)&&!te(pe)&&t.ship(pe)&&(k.shipped=!0)}let Te=f.head();if(!z&&f.atEnd(Te)){let k=Te.job;D(k.turn).shipped?Z(k):t.dockReady()&&t.dockTurn()===k.turn?V(k,Te):(k.waitT+=H,k.waitT>H2&&pe!=null&&pe!==k.turn&&t.dockReady()&&t.ship(pe)&&(D(pe).shipped=!0))}}function G(){let H=m.size-B2;if(!(H<=0))for(let pe of m.values()){if(H<=0)break;pe.stage==="spawn"&&pe.call.status!=="running"&&(Z(pe),H-=1)}}function Re(){if(d.tailFree()){for(let H of m.values())if(H.stage==="spawn"){H.mesh=s.create("raw"),r.add(H.mesh),H.it=d.add(H),H.stage="in",d.path.at(0,H.mesh.position),i.pulseDispenser();return}}}function Fe(H,pe,Te){H.emissive.copy(pe?W2:X2),H.emissiveIntensity=pe?1.6+Math.sin(Te*10)*.8:.6}return t.resetDock(null,null,[]),{sync:fe,reset(){le(),t.clear(),t.resetDock(null,null,[]),w={},v=[],S=0,T=0,R=!0},update(H,pe){N=pe,U=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=U,G(),Re(),d.update(H,U,N),f.update(H,U,N),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(f.doorOut,f.doorIn),Fe(n.lock.led,d.cycling,pe),Fe(n.unload.led,f.cycling,pe),n.trackLed.emissiveIntensity=d.moving||f.moving?1.8+Math.sin(pe*8)*.4:1,me(),Ke(H),re(H),B(H);for(let Te of d.items)d.path.at(Te.s,Te.job.mesh.position);for(let Te of f.items)f.path.at(Te.s,Te.job.mesh.position);for(let Te of e.list){let k=!1,et=!1;for(let Mt of M[Te.kind])Mt&&Mt.stage==="station"&&(k=!0,Mt.processed||(et=!0));let pt=(w[Te.kind]||0)>0||et;Te.active=pt,Te.update(H,pe,{working:pt,wafer:k})}t.update(H)},activity(){return b.inbound=d.items.length,b.outbound=f.items.length,b.robot=!!y.task||!!y.cur,b.stocker=!!z||t.busy(),b},focus(H){let pe=null;for(let Te of v)(!pe||(Te.startedAt||0)>=(pe.startedAt||0))&&(pe=Te);if(pe){let Te=e.byKind[x(pe)];return H.copy(Te.anchor),`station:${Te.kind}`}return y.task?(H.copy(n.anchors.robot),"robot"):z||t.busy()?(H.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!y.task||!!y.cur||y.steps.length>0||!!z||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:f.items.length,robot:y.task?y.task.type:"idle",transfer:!!z,dock:t.dockTurn(),rush:U,stages:[...m.values()].reduce((H,pe)=>(H[pe.stage]=(H[pe.stage]||0)+1,H),{})}},dispose(){for(let H of m.values())ne(H);m.clear()}}}function on(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function En(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function ds(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function Fx(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function kx(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var Ap={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function er(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?Ap["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?Ap["deepseek-flash"]:null:t?Ap["deepseek-flash"]:null}function Sr(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function ic(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Yd(n){if(!n||typeof n!="object")return null;let e={miss:ic(n.inputTokens),hit:ic(n.cacheReadTokens),write:ic(n.cacheWriteTokens),output:ic(n.outputTokens),reasoning:ic(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function Kd(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function Bx(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Zd(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var $2=60,Wx=40,q2=200,Y2=40,K2=24,Z2=8,J2=250,j2=16,Q2=5e3;function Qd(){return{provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0,unpriced:0},sample:null,speed:{last:0,decodeTokens:0,decodeMs:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],agents:[],workflows:[],firstAt:0,lastAt:0}}var ki=n=>typeof n=="number"&&Number.isFinite(n),zx=n=>ki(n)&&n>0?n:0,Ri=(n,e=120)=>typeof n=="string"?n.slice(0,e):"",Qr=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:null;function Xx(n){if(ki(n))return n;if(typeof n=="string"){let e=Date.parse(n);if(Number.isFinite(e))return e}return NaN}function eT(n,e){let t=Xx(n.time);return Number.isFinite(t)?t:e.lastAt}function Is(n,e){e>n.lastAt&&(n.lastAt=e),!n.firstAt&&e&&(n.firstAt=e)}function $x(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function sc(n,e,t){let i=n.slice();return i[e]=t,i}function Pp(n,e){return n.length>e?n.slice(n.length-e):n}function Ip(n,e,t){let i=[...n,e];for(;i.length>t;){let s=i.findIndex(r=>r.status!=="running");i.splice(s>=0?s:0,1)}return i}function qx(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],fileCount:0,added:0,removed:0}}var eh=n=>n.turns[n.turns.length-1]||null,Uo=n=>{let e=eh(n);return e&&e.status==="running"?e:null};function Hx(n,e,t){let i=Uo(n);if(!i)return;n.turns=$x(n.turns,r=>({...r,status:e,endedAt:t}));let s=0;n.calls.some(r=>r.status==="running"&&r.turn===i.no)&&(n.calls=n.calls.map(r=>r.status!=="running"||r.turn!==i.no?r:(s+=1,{...r,status:"error",endedAt:t}))),s&&(n.tools={...n.tools,running:Math.max(0,n.tools.running-s),errors:n.tools.errors+s})}function Rp(n,e,t){if(Uo(n))return;let i=n.turnCount+1;n.turnCount=i,n.turns=Pp([...n.turns,qx(i,ki(t)?t:i,e)],Wx)}function tT(n,e){let t=n.files.findIndex(s=>s.path===e.path),i={...n,added:n.added+e.added,removed:n.removed+e.removed};if(t>=0){let s=n.files[t];i.files=sc(n.files,t,{path:s.path,added:s.added+e.added,removed:s.removed+e.removed})}else i.fileCount=n.fileCount+1,n.files.length<Y2&&(i.files=[...n.files,{path:e.path,added:e.added,removed:e.removed}]);return i}function nT(n){if(!Array.isArray(n))return null;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t&&t.type==="chunk"&&t.chunk&&t.chunk.type==="usage"&&t.chunk.usage)return t.chunk.usage}return null}var iT=new Set(["text-delta","reasoning-delta","tool-call-delta"]);function sT(n){if(!Array.isArray(n))return null;let e=1/0,t=-1/0,i=s=>{ki(s)&&(s<e&&(e=s),s>t&&(t=s))};for(let s of n)if(!(!s||typeof s!="object"))if(s.type==="text-chunks"||s.type==="reasoning-chunks"||s.type==="tool-call-chunks"){let r=Array.isArray(s.texts)?s.texts:Array.isArray(s.args)?s.args:[],o=Array.isArray(s.dt)?s.dt:[],a=s.time0;if(!ki(a))continue;s.type==="tool-call-chunks"&&s.name&&i(a);for(let l=0;l<r.length;l++)l>0&&(a+=ki(o[l-1])?o[l-1]:0),typeof r[l]=="string"&&r[l].length&&i(a)}else s.type==="chunk"&&s.chunk&&iT.has(s.chunk.type)&&i(s.time);return t>e?{first:e,last:t}:null}var rT={miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,peak:!1,savings:0,priced:!0};function oT(n,e){return n.miss===e.miss&&n.hit===e.hit&&n.write===e.write&&n.output===e.output&&n.reasoning===e.reasoning&&n.cost===e.cost&&n.peak===e.peak&&n.priced===e.priced}function aT(n,e,t,i){let s=Qr(t.message)&&Qr(t.message.source),r=s&&typeof s.provider=="string"&&s.provider?s.provider:n.provider,o=s&&typeof s.model=="string"&&s.model?s.model:n.model,a=er(r,o),l=Sr(i),c=ki(t.turn)?t.turn:-1,u=ki(t.step)?t.step:-1,d=n.sample&&c>=0&&n.sample.turn===c&&n.sample.step===u?n.sample:null,h=Uo(n)||eh(n),p={turn:c,step:u,no:d?d.no:h?h.no:0,miss:e.miss,hit:e.hit,write:e.write,output:e.output,reasoning:e.reasoning,cost:Kd(e,a,l),peak:l,savings:Bx(e,a,l),priced:!!a};if(d&&oT(d,p))return!1;let f=d||rT,x=d?0:1,m=n.totals;return n.totals={miss:m.miss-f.miss+p.miss,hit:m.hit-f.hit+p.hit,write:m.write-f.write+p.write,output:m.output-f.output+p.output,reasoning:m.reasoning-f.reasoning+p.reasoning,requests:m.requests+x,cost:Math.max(0,m.cost-f.cost+p.cost),costPeak:Math.max(0,m.costPeak-(f.peak?f.cost:0)+(l?p.cost:0)),costOffPeak:Math.max(0,m.costOffPeak-(f.peak?0:f.cost)+(l?0:p.cost)),savings:Math.max(0,m.savings-f.savings+p.savings),unpriced:m.unpriced-(d&&!d.priced?1:0)+(a?0:1)},n.sample=p,n.contextTokens=e.miss+e.hit+e.write+e.output,p.no&&(n.turns=n.turns.map(g=>g.no!==p.no?g:{...g,miss:g.miss-f.miss+p.miss,hit:g.hit-f.hit+p.hit,write:g.write-f.write+p.write,output:g.output-f.output+p.output,reasoning:g.reasoning-f.reasoning+p.reasoning,cost:Math.max(0,g.cost-f.cost+p.cost),requests:g.requests+x})),!0}function lT(n,e,t){if(e.output<j2)return;let i=sT(t);if(!i)return;let s=i.last-i.first;s<J2||(n.speed={last:Math.min(Q2,e.output/(s/1e3)),decodeTokens:n.speed.decodeTokens+e.output,decodeMs:n.speed.decodeMs+s})}function Cp(n){return n==null||n==="completed"?"done":n==="aborted"||n==="cancelled"?"stopped":"error"}function cT(n){return{id:"",name:"",label:"",kind:"subagent",mode:"",runId:"",seq:-1,phase:"",status:"running",startedAt:0,endedAt:0,turn:0,...n}}function jd(n,e,t){let i=n.agents[e],s=!1;for(let r of Object.keys(t))i[r]!==t[r]&&(s=!0);return s?{...n,agents:sc(n.agents,e,{...i,...t})}:n}function Gx(n,e,t){let i={...n},s=Uo(i)||eh(i);return i.agents=Ip(i.agents,cT({turn:s?s.no:0,startedAt:t,...e}),K2),Is(i,t),i}function uT(n,e,t,i){let s=n.agents.findIndex(o=>o.id===e);if(s<0||n.agents[s].status!=="running")return n;let r=jd(n,s,{status:t,endedAt:i});return r!==n&&Is(r,i),r}function dT(n,e,t){if(typeof e!="string"||!e)return;let i=e.slice(e.lastIndexOf("/")+1),s=n.agents.findIndex(r=>r.kind==="subagent"&&r.status!=="running"&&(r.name&&(r.name===e||r.name===i)||r.label===e));s<0||(n.agents=sc(n.agents,s,{...n.agents[s],status:"running",endedAt:0,startedAt:t}))}function Jd(n,e,t){let i=n.workflows.findIndex(o=>o.runId===e);if(i<0)return n;let s=n.workflows[i],r=t(s);return r===s?n:{...n,workflows:sc(n.workflows,i,r)}}var hT=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function Vx(n,{provider:e,model:t,effort:i,contextWindow:s}){let r={};return typeof e=="string"&&e&&e.slice(0,80)!==n.provider&&(r.provider=e.slice(0,80)),typeof t=="string"&&t&&t.slice(0,120)!==n.model&&(r.model=t.slice(0,120)),typeof i=="string"&&i.slice(0,40)!==n.effort&&(r.effort=i.slice(0,40)),ki(s)&&s>0&&s!==n.contextWindow&&(r.contextWindow=s),Object.keys(r).length?{...n,...r}:n}function fT(n,e){if(!e||typeof e.type!="string")return n;let t=Qr(e.data)||{},i=eT(e,n);switch(e.type){case"request/header":{let s=Qr(Qr(t.header)&&t.header.config);return s?Vx(n,{provider:s.provider,model:s.model,effort:typeof s.reasoningEffort=="string"?s.reasoningEffort:""}):n}case"request/context":return Vx(n,{provider:t.provider,model:t.model,contextWindow:t.contextWindow});case"turn/start":{let s={...n};Hx(s,"ok",i);let r=s.turnCount+1;return s.turnCount=r,s.turns=Pp([...s.turns,qx(r,ki(t.turn)?t.turn:r,i)],Wx),s.phase="thinking",Is(s,i),s}case"step/start":{if(Uo(n)&&n.phase==="thinking")return n;let s={...n};return Rp(s,i,t.turn),s.phase="thinking",Is(s,i),s}case"llm/retry-started":{let s=n.sample;return s&&s.turn===t.turn&&s.step===t.step?{...n,sample:null}:n}case"assistant/attempt":case"assistant/message":{let s=e.type==="assistant/message",r=Yd(s&&t.usage||nT(t.stream)),o=n;if(s&&(!Uo(n)||n.phase!=="idle")&&(o={...n},Rp(o,i,t.turn),o.phase="idle"),r){let a=o===n?{...n}:o;aT(a,r,t,i)&&(s&&lT(a,r,t.stream),o=a)}return o!==n&&Is(o,i),o}case"tool/call":{let s=t.callId??t.id,r=(typeof s=="string"||ki(s)?String(s):"").slice(0,200)||`call-${ki(e.seq)?e.seq:n.tools.calls+1}`;if(n.calls.some(p=>p.id===r))return n;let o={...n};Rp(o,i,t.turn);let a=Ri(t.name,80)||"tool",l=ox(a),c=Bd(t.arguments),u=Oa.has(l)?lx(a,c):null,d=u?{path:Ri(u.path,400),added:zx(u.added),removed:zx(u.removed)}:null,h={id:r,name:a,kind:l,label:ax(a,c),turn:eh(o).no,startedAt:i,endedAt:0,status:"running",change:d&&d.path?d:null};return o.calls=Ip(o.calls,h,$2),o.tools={...o.tools,calls:o.tools.calls+1,running:o.tools.running+1,byKind:{...o.tools.byKind,[l]:(o.tools.byKind[l]||0)+1}},o.turns=$x(o.turns,p=>({...p,calls:p.calls+1})),o.phase="tool",a==="send_message"&&dT(o,c.agent,i),Is(o,i),o}case"tool/result":{let s=Qr(t.message)||{},r=String(s.toolCallId??t.callId??""),o=n.calls.findIndex(h=>h.id===r);if(o<0||n.calls[o].status!=="running")return n;let a={...n},l=!!t.error||s.isError===!0,c={...a.calls[o],status:l?"error":"ok",endedAt:i};a.calls=sc(a.calls,o,c);let u=Math.max(0,a.tools.running-1);a.tools={...a.tools,running:u,errors:a.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=a.files.paths.includes(d.path);a.files={count:a.files.count+(h?0:1),added:a.files.added+d.added,removed:a.files.removed+d.removed,paths:h?a.files.paths:Pp([...a.files.paths,d.path],q2)}}return(l||d)&&(a.turns=a.turns.map(h=>{if(h.no!==c.turn)return h;let p=l?{...h,errors:h.errors+1}:h;return d?tT(p,d):p})),u===0&&a.phase==="tool"&&(a.phase="thinking"),Is(a,i),a}case"turn/end":{let s=Qr(t.reason)?t.reason.kind:void 0;if(!Uo(n)&&n.phase==="idle")return n;let r={...n};return Hx(r,hT.has(s)?"rework":"ok",i),r.phase="idle",Is(r,i),r}case"subagent/catalog":{let s=Ri(t.childId,200);if(!s)return n;let r=Ri(t.name,80),o=Ri(t.label,80),a=Ri(t.mode,20),l=n.agents.findIndex(u=>u.id===s);if(l>=0){let u=n.agents[l];return jd(n,l,{name:r||u.name,label:o||u.label,mode:a||u.mode})}let c=Xx(t.childCreatedAt);return Gx(n,{id:s,name:r,label:o||r||"subagent",mode:a,startedAt:Number.isFinite(c)?c:i},i)}case"user/message":{let s=Qr(t.source);return!s||s.kind!=="subagent-settled"?n:uT(n,Ri(s.senderSessionId,200),Cp(s.stopReason),i)}case"tool-workflow/run-start":{let s=Ri(t.runId,120);if(!s||n.workflows.some(a=>a.runId===s))return n;let r={...n},o={runId:s,name:Ri(t.name,80)||"workflow",status:"running",startedAt:i,endedAt:0,agents:0,done:0,failed:0,phase:""};return r.workflows=Ip(r.workflows,o,Z2),Is(r,i),r}case"tool-workflow/agent-start":{let s=Ri(t.runId,120);if(!s)return n;let r=ki(t.seq)?t.seq:-1,o=Ri(t.childId,200)||`${s}#${r}`,a=Ri(t.label,80)||"agent",l=Ri(t.phase,60),c=n.agents.findIndex(d=>d.id===o),u=c>=0?jd(n,c,{kind:"workflow",runId:s,seq:r,phase:l,label:a}):Gx(n,{id:o,label:a,kind:"workflow",runId:s,seq:r,phase:l},i);return c<0?u=Jd(u,s,d=>({...d,agents:d.agents+1,phase:l||d.phase})):l&&(u=Jd(u,s,d=>d.phase===l?d:{...d,phase:l})),u}case"tool-workflow/agent-end":{let s=Ri(t.runId,120),r=ki(t.seq)?t.seq:-1,o=n.agents.findIndex(c=>c.runId===s&&c.seq===r);if(o<0||n.agents[o].status!=="running")return n;let a=Cp(t.outcome==="failed"?"error":t.outcome),l=jd(n,o,{status:a,endedAt:i});return l=Jd(l,s,c=>({...c,done:c.done+(a==="done"?1:0),failed:c.failed+(a==="error"?1:0)})),l!==n&&Is(l,i),l}case"tool-workflow/run-end":{let s=Ri(t.runId,120),r=Jd(n,s,o=>o.status!=="running"?o:{...o,status:Cp(t.stopReason),endedAt:i});return r.agents.some(o=>o.runId===s&&o.status==="running")&&(r===n&&(r={...n}),r.agents=r.agents.map(o=>o.runId===s&&o.status==="running"?{...o,status:"stopped",endedAt:i}:o)),r!==n&&Is(r,i),r}default:return n}}function Lp(n,e){let t=n;for(let i of e)t=fT(t,i);return t}function th(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output,r=n.turns.filter(a=>a.status!=="running"),o=n.tools.calls-n.tools.running;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:o>0?(o-n.tools.errors)/o:1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:r.length?r.filter(a=>a.status==="ok").length/r.length:1,decodeRate:n.speed&&n.speed.decodeMs>0?n.speed.decodeTokens/(n.speed.decodeMs/1e3):0}}var yt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},ih={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:yt.violet},reasoning:{zh:"推理",en:"REASONING",color:yt.violet},generating:{zh:"生成",en:"GENERATING",color:yt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:yt.amber}},Dp=Dd(),Yx=120,Kx=90,pT=[20,50,100,150,200,300,500,1e3,2e3],mT=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],Zx=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function oc(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function Np(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function Jx(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${At}`,n.fillStyle=yt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${bt}`,n.fillStyle=yt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${bt}`,n.fillStyle=o||yt.muted,n.fillText(r,e-36,39))}function wr(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${At}`,n.fillStyle=yt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${bt}`,n.fillStyle=yt.dim,r==="left"&&n.fillText(s,e+a,t)}function jx(n,e,t,i,s,r=96,o="",a=yt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${bt}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${bt}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function Qx(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${bt}`,n.fillStyle=yt.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),p=x=>t+s-s*st(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),p(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let f=n.createLinearGradient(0,t,0,t+s);f.addColorStop(0,a),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),p(r[x])):n.moveTo(h(x),p(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function nh(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),wr(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${bt}`,n.fillStyle=yt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${bt}`,n.fillStyle=yt.muted,n.fillText(l,e+20,t+s-14))}function gT(n,e,t,i){oc(n,e,t);let s=ih[i.phase]||ih.idle;Jx(n,e,"令牌流量","TOKEN FLOW",yt.cyan,`● ${s.zh} ${s.en}`,s.color),wr(n,36,122,"实时速率","LIVE RATE"),jx(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",yt.cyan,104,"tok/s"),wr(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${bt}`,n.fillStyle=yt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=Zx(Math.max(20,...i.tpsHist)*1.15,pT);Qx(n,470,104,e-470-40,236,i.tpsHist,{color:yt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${bt}`,n.fillStyle=yt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;nh(n,36,a,o,l,"输入","INPUT",on(c.miss+c.write),"未命中缓存 · MISS",yt.blue),nh(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",on(c.hit),`命中率 ${ds(i.hitRate)}`,yt.green),nh(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",on(c.output),`请求 ${c.requests}`,yt.cyan),nh(n,36+(o+16)*3,a,o,l,"推理","REASONING",on(c.reasoning),"思考链 · THINKING",yt.violet),Np(n,e,t,yt.cyan)}function rc(n,e,t,i,s,r,o,a,l){wr(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${bt}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${bt}`,n.fillStyle=yt.muted,n.fillText(a,e,t+112))}function xT(n,e,t,i){oc(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,yt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${At}`,n.fillStyle=yt.text,n.shadowColor=yt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${bt}`,n.fillStyle=yt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${At}`;let M=n.measureText(_).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,M,40),n.strokeStyle=yt.amber,n.lineWidth=2,n.strokeRect(y+1,29,M-2,38),n.fillStyle=yt.amber,n.fillText(_,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${bt}`,n.fillStyle=yt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=ih[i.phase]||ih.idle,a=(e-80)/5,l=148;rc(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),rc(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,yt.text),rc(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${ds(i.toolSuccess)}`,yt.cyan),rc(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,yt.gold),rc(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,yt.blue);let c=330;wr(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,p=116,f=c+22,x=i.recent.slice(-u),m=u-x.length;for(let _=0;_<u;_++){let M=40+_*(h+d),y=x[_-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(M+1,f+1,h-2,p-2);continue}let b=y.status==="running"?yt.cyan:y.status==="error"?yt.red:Oa.has(y.kind)?yt.gold:yt.blue,w=n.createLinearGradient(0,f,0,f+p);w.addColorStop(0,b),w.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=w,n.fillRect(M,f,h,p),n.globalAlpha=1,n.fillStyle=b,n.fillRect(M,f+p-6,h,6);let v=vi[y.kind]||vi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${bt}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),M+h/2,f+p/2-6)}let g=x[x.length-1];if(g){let _=vi[g.kind]||vi.generic,M=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${At}`,n.fillStyle=yt.text;let y=String(g.label||g.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${y}`,40,f+p+52),n.textAlign="right",n.font=`700 22px ${bt}`,n.fillStyle=g.status==="running"?yt.cyan:g.status==="error"?yt.red:yt.green,n.fillText(M,e-40,f+p+52)}Np(n,e,t,yt.cyan)}function yT(n,e,t,i){oc(n,e,t),Jx(n,e,"成本与上下文","COST & CONTEXT",yt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?yt.amber:yt.green),wr(n,36,122,"累计花费","TOTAL COST"),jx(n,36,226,i.priced?En(i.cost):"—",yt.gold,90),n.font=`600 22px ${bt}`,n.fillStyle=yt.muted,n.textAlign="left",n.fillText(`高峰 ${En(i.costPeak)} · 低谷 ${En(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=Zx(Math.max(.01,...i.costHist)*1.15,mT);Qx(n,480,104,e-480-40,200,i.costHist,{color:yt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>En(d)}),n.font=`600 17px ${bt}`,n.fillStyle=yt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;wr(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${bt}`,n.fillStyle=yt.text,n.fillText(i.window?`${on(i.ctx)} / ${on(i.window)} · ${ds(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?yt.red:i.ratio>=.6?yt.amber:yt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*st(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;wr(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${bt}`,n.fillStyle=yt.green,n.fillText(i.priced?En(i.savings):"—",330,u+2),wr(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${bt}`,n.fillStyle=yt.text,n.fillText(ds(i.hitRate),e-36,u+2),Np(n,e,t,yt.gold)}var vT={flow:gT,main:xT,cost:yT};function ey(n,e,{demo:t=!1}={}){let i=!!t,s=new Jt;s.name="screens";let r=[],o=new Et({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),a=rt.screenR;for(let y of Dp){let[b,w]=y.px,v=Pt(b,w,(U,z,D)=>oc(U,z,D),{anisotropy:8}),S=new kt({map:v.tex,name:`screen-${y.id}`,toneMapped:!1});S.color.setScalar(1.25);let T=new nt(Wt(Xe.cx,Xe.cz,a,y.a0,y.a1,y.y0,y.y1,48,!0),S);T.name=`screen-${y.id}`,T.userData.screenId=y.id,s.add(T);let R=.05/a,N=new nt(Wt(Xe.cx,Xe.cz,a+.015,y.a0-R,y.a1+R,y.y0-.05,y.y1+.05,48,!0),o);N.name=`screen-bezel-${y.id}`,N.layers.set(hn),s.add(N),T.userData.noHighlight=!0,r.push({def:y,tex:v,sig:"",draw:vT[y.id],panel:T,scale:1})}let l=null,c=(y,b)=>y.tex.redraw(w=>{y.scale!==1&&w.scale(y.scale,y.scale),y.draw(w,y.def.px[0],y.def.px[1],b)}),u=new Array(Yx).fill(0),d=new Array(Kx).fill(0),h=0,p=0,f=0,x=0,m=0,g=!1;function _(y){let b=y.state,w=y.live||{},v=y.phase||(w.phase&&w.phase!=="idle"?w.phase:b?b.phase:"idle"),S=b?b.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},T=b?th(b):{hitRate:0,toolSuccess:1,contextRatio:0},R=b?b.turns:[];return{demo:i,phase:v,tps:y.tps||0,peakTps:x,tpsHist:u,costHist:d,totals:S,hitRate:T.hitRate,toolSuccess:T.toolSuccess,model:b?b.model:"",effort:b?b.effort:"",turn:b?b.turnCount:0,ok:R.filter(N=>N.status==="ok").length,rework:R.filter(N=>N.status==="rework").length,calls:b?b.tools.calls:0,running:b?b.tools.running:0,files:b?b.files.count:0,added:b?b.files.added:0,removed:b?b.files.removed:0,requests:S.requests,recent:b?b.calls:[],peak:!!y.peak,priced:!b||!b.model||!!er(b.provider,b.model),cost:S.cost,costPeak:S.costPeak,costOff:S.costOffPeak,savings:S.savings,ctx:b?b.contextTokens:0,window:b?b.contextWindow:0,ratio:T.contextRatio||0}}function M(y,b){if(y==="flow"){let w=b.totals;return`${b.phase}|${Math.round(b.tps*2)}|${w.miss+w.write}|${w.hit}|${w.output}|${w.reasoning}|${w.requests}|${m>0?h:"flat"}|${Math.round(b.peakTps)}`}if(y==="main"){let w=b.recent[b.recent.length-1];return`${b.demo}|${b.model}|${b.effort}|${b.phase}|${b.turn}|${b.ok}|${b.rework}|${b.calls}|${b.running}|${b.files}|${b.added}|${b.removed}|${b.requests}|${b.recent.length}|${w?`${w.id}:${w.status}`:""}|${Math.round(b.toolSuccess*1e3)}`}return`${b.cost.toFixed(5)}|${b.costPeak.toFixed(5)}|${b.savings.toFixed(5)}|${b.ctx}|${b.window}|${b.peak}|${b.requests}|${d[Kx-1].toFixed(5)}|${Math.round(b.hitRate*1e3)}`}return{root:s,update(y,b,w){h+=y,p+=y,f+=y;let v=w.tps||0;x=Math.max(x,v),h>=.5&&(h=0,u.shift(),u.push(v),m=v>.5?Yx:Math.max(0,m-1));let S=w.state?w.state.totals.cost:0;if(!g&&w.state&&(d.fill(S),g=!0),p>=2&&(p=0,d.shift(),d.push(S)),f<.5)return;f=0;let T=_(w);l=T;for(let R of r){let N=M(R.def.id,T);N!==R.sig&&(R.sig=N,c(R,T))}},hover:r.map(y=>({id:`screen:${y.def.id}`,object:y.panel})),setDetail(y,b=2){for(let w of r){let v=w.def.id===y?b:1;if(v===w.scale)continue;let[S,T]=w.def.px,R=w.tex;w.scale=v,w.tex=Pt(S*v,T*v,N=>{N.scale(v,v),oc(N,S,T)},{anisotropy:8}),w.panel.material.map=w.tex.tex,w.sig="",l&&(w.sig=M(w.def.id,l),c(w,l)),R.tex.dispose()}},setDemo(y){i=!!y;for(let b of r)b.sig=""},reset(){u.fill(0),d.fill(0),x=0,m=0,g=!1;for(let y of r)y.sig=""}}}var eo=16,_T=.004,Op=.06,sh=new ze(4164863),ty=new ze(4641535),ny=new ze(16762218),bT=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${eo}];
uniform float uOffset[${eo}];
uniform vec3 uColor[${eo}];
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
}`,MT=`
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
}`;function ST(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=Op/2,p=r[0]-u*(s===0?0:h),f=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(Op/2),_=u*(Op/2),M=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),b=[[p-g,f-_,M,-1],[p+g,f+_,M,1],[x+g,m+_,y,1],[x-g,m-_,y,-1]];for(let w of[0,1,2,0,2,3]){let v=b[w];t.pos.push(v[0],_T,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var iy=n=>[n.x,n.z];function sy(){let n={},e=[],t=[],i=(m,g,_)=>{n[m]=t.length,e.push(g),t.push(_)},s=[Rs.x,Rs.z],r=(m,g,_)=>[iy(Ui(m,g)),iy(Ui(m,_))];i("fuel",ty,[[-7.45,-.7],[-4.6,-.7]]),i("feed",sh,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,sh,r(pp(m),.95,2.12));i("lock",ty,r(Do,.95,2.1)),i("unload",ny,r(ka,.95,2.1)),i("out",ny,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Ht;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",sh,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>ST(m,g,a));let l=new $t;l.setAttribute("position",new ft(a.pos,3)),l.setAttribute("aS",new ft(a.s,1)),l.setAttribute("aX",new ft(a.x,1)),l.setAttribute("aChan",new ft(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(eo),u=new Float32Array(eo),d=new Float32Array(eo),h=new Float32Array(eo),p=[];for(let m=0;m<eo;m++)p.push((e[m]||sh).clone());let f=new ln({name:"floor-channels",vertexShader:bT,fragmentShader:MT,uniforms:_d.merge([je.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:p}}]),transparent:!0,blending:Ta,blendSrc:Hr,blendDst:Gr,blendSrcAlpha:Pu,blendDstAlpha:Hr,depthWrite:!1,fog:!0});f.uniforms.uLevel.value=c,f.uniforms.uOffset.value=u,f.uniforms.uColor.value=p;let x=new nt(l,f);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(hn),d.fill(.8),{root:x,ids:n,set(m,g,_){let M=n[m];M!=null&&(h[M]=g,_!=null&&(d[M]=_))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var Up=new P(Xe.cx,0,Xe.cz-17),Ji={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},Ut=Ji.h,wT=[{id:"sofa",pose:"sit",p:[-1.2,Ut+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,Ut+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,Ut+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,Ut+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,Ut,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,Ut,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function ET(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function TT(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Ht),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Ht;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Ht),n.fill()}}function AT(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${At}`,n.textBaseline="top",n.fillText(`${Yt.living.code} · ${Yt.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${At}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${bt}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function ry(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function ac(n,e,t,i,s,r=0){let o=new Jt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new nt(new nn(e,t,i),oy);return a.position.y=t/2,o.add(a),o}var oy=new kt({visible:!1});function ay(n){let e=new Jt;e.name="living",e.position.copy(Up);let t=Pt(512,512,ET,{repeat:[3,2],anisotropy:8}),i=Pt(512,512,TT,{anisotropy:8}),s={wood:new Et({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new Et({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new Et({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new Et({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new Et({name:"living-rug",map:i.tex,roughness:1}),leaf:new Et({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new Et({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new Et({name:"living-soil",color:3811870,roughness:1}),sand:new Et({name:"living-sand",color:14272931,roughness:.95}),rice:new Et({name:"living-rice",color:16513264,roughness:.7}),eye:new Et({name:"living-eye",color:1118999,roughness:.3}),bookA:new Et({name:"living-book-a",color:4020904,roughness:.7}),bookB:new Et({name:"living-book-b",color:13137466,roughness:.7}),bookC:new Et({name:"living-book-c",color:15327951,roughness:.7}),bookD:new Et({name:"living-book-d",color:3111538,roughness:.7}),warm:op(16766624,2.8),cyan:op(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new dt,o=(O,Z,Y=[0,0,0],q=[0,0,0],le=[1,1,1])=>r.add(O,L(Z,Y,q,le)),a=Ji.x1-Ji.x0,l=Ji.z1-Ji.z0;o("wood",Ie(a,Ji.h,l,.02,2),[0,Ji.h/2,0]),o("warm",Ee(a-.1,.006,.012),[0,.004,Ji.z0-.004]),o("warm",Ee(a-.1,.006,.012),[0,.004,Ji.z1+.004]),o("rug",new Un(1.85,64),[-1.2,Ut+.004,-.35],[-Math.PI/2,0,0]);{let O=[-1.2,Ut,.9],Z=(q,le,he)=>[O[0]+q,O[1]+le,O[2]+he];o("fabric",Ie(3,.28,.95,.08,3),Z(0,.22,0));for(let q of[-1,0,1])o("fabric",Ie(.97,.16,.8,.07,3),Z(q,.44,-.06)),o("fabric",Ie(.97,.44,.2,.09,3),Z(q,.68,.36),[-.14,0,0]);for(let q of[-1.6,1.6])o("fabric",Ie(.2,.5,.95,.08,3),Z(q,.33,0));o("fabricBlue",Ie(.5,.36,.14,.06,3),Z(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Ie(.5,.36,.14,.06,3),Z(.35,.66,.2),[-.3,-.2,0]);for(let q of[-1.42,1.42])for(let le of[-.38,.38])o("chrome",ae(.025,.02,.08,10),Z(q,.04,le));o("warm",Ee(2.7,.004,.7),Z(0,.002,0));let Y=Z(.92,.6,-.05);o("blue",Di(1,20,14),Y,[0,.3,0],[.24,.17,.16]),o("white",Di(1,16,10),[Y[0]+.02,Y[1]-.05,Y[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",Di(1,12,8),[Y[0]-.26,Y[1]+.07,Y[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",Di(1,10,8),[Y[0]+.05,Y[1]-.02,Y[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",Di(.016,10,8),[Y[0]+.16,Y[1]+.03,Y[2]-.12]),o("eye",Di(.016,10,8),[Y[0]+.2,Y[1]+.03,Y[2]+.03])}{let O=[-1.2,Ut,-.7];o("white",ae(.52,.52,.035,48),[O[0],O[1]+.4,O[2]]),o("chrome",ae(.05,.08,.36,20),[O[0],O[1]+.2,O[2]]),o("chrome",ae(.28,.3,.025,32),[O[0],O[1]+.012,O[2]]);let Z=[O[0]+.16,O[1]+.418,O[2]+.08];o("white",ci([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),Z),o("rice",Di(1,20,10),[Z[0],Z[1]+.05,Z[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Ee(.22,.008,.008),[Z[0]+.02,Z[1]+.08,Z[2]-.02],[0,.3,.12]),o("woodDark",Ee(.22,.008,.008),[Z[0]+.02,Z[1]+.08,Z[2]+.01],[0,.2,.12]),o("blue",ae(.038,.034,.09,20),[O[0]-.22,O[1]+.462,O[2]-.12])}{let O=[-3.15,Ut,1.45];o("chrome",ae(.2,.22,.04,32),[O[0],O[1]+.02,O[2]]),r.add("chrome",ui([[O[0],O[1]+.04,O[2]],[O[0],O[1]+1.95,O[2]],[-2.3,Ut+2.3,1.05],[-1.7,Ut+2.05,.6]],.016,.35,10)),o("white",new Fn(.24,28,12,0,Ht,0,Math.PI/2),[-1.7,Ut+1.86,.6]),o("warm",new Un(.21,28),[-1.7,Ut+1.862,.6],[Math.PI/2,0,0])}{for(let he of[-3.35,.95])for(let ie of[-2,2])o("white",Ie(.09,3,.09,.02),[he,Ut+3/2,ie]);for(let he of[-2,2])o("white",Ie(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,Ut+3,he]);for(let he of[-3.35,.95])o("white",Ie(.1,.1,4,.02),[he,Ut+3,0]);for(let he=1;he<6;he++){let ie=-3.35+4.3*he/6;o("alu",Ee(.05,.06,4-.1),[ie,Ut+3+.02,0])}for(let he of[-2+.06,2-.06])o("warm",Ee(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,Ut+3-.056,he])}{let O=[3.35,Ut,1.6],Z=(q,le,he)=>[O[0]+q,O[1]+le,O[2]+he];o("white",Ie(2.3,.26,1.4,.1,3),Z(0,.23,0)),o("warm",Ee(2.1,.004,1.2),Z(0,.002,0)),o("fabric",Ie(2.12,.17,1.26,.07,3),Z(0,.44,0)),o("fabricBlue",Ie(1.3,.05,1.28,.03,2),Z(.36,.535,0)),o("fabric",Ie(.44,.11,.82,.05,3),Z(-.78,.58,0)),o("white",Ie(.09,.56,1.36,.03,2),Z(-1.13,.64,0));let Y=new Nn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",Y,Z(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Ee(.03,.012,1.22),Z(-.45,.36+.725,0))}{o("white",Ie(1.85,.86,.62,.03,2),[-3.8,Ut+.45,2.62]),o("graphite",Ee(1.8,.06,.56),[-3.8,Ut+.03,2.62+.02]),o("wood",Ie(1.92,.045,.68,.015,2),[-3.8,Ut+.905,2.62]),o("ceramic",Ie(.7,1.95,.64,.04,2),[-2.5,Ut+.975,2.62]),o("chrome",Ee(.02,.6,.03),[-2.2,Ut+1.2,2.62-.33]),o("wood",Ee(1.8,.04,.28),[-3.8,Ut+1.72,2.62+.17]);for(let[Y,q,le]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(le,ae(.06,.06,q,18),[Y,Ut+1.74+q/2,2.62+.17]);o("soil",ae(.08,.06,.12,16),[-3.2,Ut+1.8,2.62+.17]),o("leaf2",Di(.14,12,8),[-3.2,Ut+1.95,2.62+.17],[0,0,0],[1,.8,1]);let Z=[-4,Ut+.93,2.62-.04];o("white",ae(.16,.15,.2,36),[Z[0],Z[1]+.1,Z[2]]),o("graphite",ci([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[Z[0],Z[1]+.2,Z[2]]),o("chrome",ae(.012,.012,.02,10),[Z[0]+.05,Z[1]+.29,Z[2]]),o("graphite",Ee(.08,.03,.03),[Z[0],Z[1]+.29,Z[2]-.02]);for(let Y of[-4.4,-3.75])o("fabricBlue",ae(.18,.18,.06,28),[Y,Ut+.66,1.92]),o("chrome",ae(.025,.025,.6,12),[Y,Ut+.33,1.92]),o("chrome",ae(.2,.22,.025,28),[Y,Ut+.012,1.92]),o("chrome",new Ti(.16,.012,8,28),[Y,Ut+.25,1.92],[Math.PI/2,0,0])}let c=qt(4641535,1.6),u=new nt(Ee(.035,.012,.006),c);u.position.set(-4,Ut+1.07,2.42),e.add(u);{let O=[3.4,Ut,-2.05];o("white",Ie(1.6,.04,.72,.015,2),[O[0],O[1]+.74,O[2]]);for(let Y of[-.76,.76])o("white",Ie(.04,.72,.64,.015,2),[O[0]+Y,O[1]+.36,O[2]]);o("cyan",Ee(1.5,.006,.012),[O[0],O[1]+.718,O[2]-.35]),o("graphite",Ie(.48,.02,.16,.008,2),[O[0]-.1,O[1]+.77,O[2]+.12]),o("chrome",ae(.012,.014,.3,10),[O[0],O[1]+.91,O[2]-.22]),o("chrome",ae(.07,.08,.012,20),[O[0],O[1]+.766,O[2]-.22]);let Z=[O[0],O[1],O[2]+.62];o("fabricBlue",Ie(.5,.08,.48,.04,2),[Z[0],Z[1]+.48,Z[2]]),o("fabricBlue",Ie(.5,.52,.07,.04,2),[Z[0],Z[1]+.82,Z[2]+.24],[.1,0,0]),o("chrome",ae(.025,.025,.4,12),[Z[0],Z[1]+.24,Z[2]]);for(let Y=0;Y<5;Y++){let q=Y/5*Ht;o("graphite",Ee(.32,.03,.04),[Z[0]+Math.cos(q)*.16,Z[1]+.04,Z[2]+Math.sin(q)*.16],[0,-q,0]),o("rubber",Di(.025,10,8),[Z[0]+Math.cos(q)*.31,Z[1]+.025,Z[2]+Math.sin(q)*.31])}}let d=ry(new Date),h=Pt(512,288,(O,Z,Y)=>AT(O,Z,Y,d),{anisotropy:8}),p=new kt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:en});p.color.setScalar(1.3);let f=new nt(new vt(.88,.495),p);f.position.set(3.4,Ut+1.3,-2.27),f.rotation.x=-.08,f.renderOrder=3,e.add(f);let x=new P(-4,Ut,-2.05);o("white",ae(.5,.53,.36,48),[x.x,x.y+.18,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+.375,x.z]),o("sand",ae(.44,.44,.07,40),[x.x,x.y+.425,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+1.52,x.z]),o("cyan",new Ti(.47,.008,6,64),[x.x,x.y+.4,x.z],[Math.PI/2,0,0]);for(let[O,Z,Y,q]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(q,ae(.012,.03,Y,6),[x.x+O,x.y+.46+Y/2,x.z+Z],[.15,0,.1]);let m=new nt(ae(.445,.445,1.05,40),new Et({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(x.x,x.y+.97,x.z),m.renderOrder=1,e.add(m);let g=new nt(ae(.47,.47,1.12,48,!0),n.glass);g.position.set(x.x,x.y+.96,x.z),g.renderOrder=2,e.add(g);let _=(()=>{let O=L(new Fn(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),Z=L(new Xs(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),Y=new $t,q=[O,Z].map(ie=>ie.toNonIndexed()),le=[],he=[];for(let ie of q)le.push(...ie.attributes.position.array),he.push(...ie.attributes.normal.array);Y.setAttribute("position",new ft(le,3)),Y.setAttribute("normal",new ft(he,3));for(let ie of q)ie.dispose();return O.dispose(),Z.dispose(),Y})(),M=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],y=new Vn(_,new Et({name:"living-fish",roughness:.4,metalness:.1}),M.length);y.name="aquarium-fish",y.frustumCulled=!1;let b=new ze;M.forEach((O,Z)=>y.setColorAt(Z,b.setHex(O.c))),e.add(y);let w=new _t,v=new un,S=new P,T=new P(1,1,1),R=new Gn;function N(O){M.forEach((Z,Y)=>{let q=Z.ph+O*Z.s;S.set(x.x+Math.cos(q)*Z.r,x.y+Z.y+Math.sin(O*.9+Z.ph)*.03,x.z-Math.sin(q)*Z.r),R.set(0,q+(Z.s>0?Math.PI/2:-Math.PI/2),Math.sin(O*3+Y)*.08),v.setFromEuler(R),w.compose(S,v,T),y.setMatrixAt(Y,w)}),y.instanceMatrix.needsUpdate=!0}N(0);{let O=[.6,Ut,3.02],Z=3.6,Y=.42;o("graphite",Ee(Z,.9,.03),[O[0],O[1]+.45,O[2]+Y/2-.015]),o("white",Ee(Z,.04,Y),[O[0],O[1]+.02,O[2]]),o("white",Ee(Z-.04,.03,Y-.02),[O[0],O[1]+.45,O[2]]),o("white",Ie(Z+.02,.05,Y+.02,.015,2),[O[0],O[1]+.9,O[2]]);for(let ie of[-Z/2+.015,-.9,0,.9,Z/2-.015])o("white",Ee(.03,.88,Y),[O[0]+ie,O[1]+.45,O[2]]);let q=["bookA","bookB","bookC","bookD"],le=[-Z/2+.03,-.885,.015,.915],he=0;for(let ie=0;ie<2;ie++)le.forEach((fe,Le)=>{if((Le+ie)%3===2)return;let tt=O[0]+fe+.02,He=5+(Le*3+ie)%5;for(let Ze=0;Ze<He;Ze++){let Ke=.04+he*7%5*.008,me=(ie?.3:.32)-he*11%4*.025;o(q[he%4],Ee(Ke,me,.24),[tt+Ke/2,O[1]+(ie?.465:.04)+me/2,O[2]+.02]),tt+=Ke+.004,he+=1}});o("graphite",Ie(.34,.26,.03,.01,2),[O[0]-.9,O[1]+1.055,O[2]+.05]),o("cyan",Ee(.3,.22,.002),[O[0]-.9,O[1]+1.055,O[2]+.034]),o("white",ae(.09,.07,.14,18),[O[0]+1.1,O[1]+.97,O[2]]),o("leaf",Di(.15,12,8),[O[0]+1.1,O[1]+1.15,O[2]],[0,0,0],[1,.9,1])}for(let[O,Z,Y]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",ae(.27*Y,.21*Y,.5*Y,28),[O,Ut+.25*Y,Z]),o("soil",ae(.25*Y,.25*Y,.02,24),[O,Ut+.49*Y,Z]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([le,he,ie,fe],Le)=>o(Le%2?"leaf2":"leaf",Di(fe*Y,12,8),[O+le*Y,Ut+he*Y,Z+ie*Y],[0,0,0],[1,.85,1])),o("woodDark",ae(.02*Y,.03*Y,.6*Y,6),[O,Ut+.75*Y,Z]);let U=[-5.35,0,3.4],z=Math.atan2(-.7,.7);o("white",Ie(.5,1.4,.12,.03,2),[U[0],.7,U[2]],[0,z,0]),o("cyan",Ee(.012,1.3,.13),[U[0]+Math.cos(z)*.26,.7,U[2]-Math.sin(z)*.26],[0,z,0]);let D=Yt.living,K=Ki(D.zh,D.en,D.code),te=new nt(new vt(.46,.13),qn(K.tex,.2));te.position.set(U[0]+Math.sin(z)*.062,1.12,U[2]+Math.cos(z)*.062),te.rotation.y=z,e.add(te);let ee=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(ee),e.add(ac("bed",2.4,1.15,1.45,[3.35,0,1.6]),ac("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),ac("aquarium",1.08,1.56,1.08,[x.x,0,x.z]),ac("bookshelf",3.62,.95,.46,[.6,0,3.02]),ac("desk",1.62,1.6,.8,[3.4,0,-2.05]));let ne=new nt(new nn(Ji.x1-Ji.x0,1.2,Ji.z1-Ji.z0),oy);ne.position.set(0,.6,0),ne.name="living-hover",e.add(ne);let X=wT.map(O=>{let Z=new dn;return Z.name=`mascot-anchor:${O.id}`,Z.position.fromArray(O.p),Z.rotation.y=O.yaw,Z.userData={mascotAnchor:O.id,pose:O.pose},e.add(Z),{id:O.id,pose:O.pose,position:new P().fromArray(O.p).add(Up),yaw:O.yaw}}),W=0;return{root:e,anchors:X,hover:[{id:"living",object:ne}],labelAnchor:new P(0,3.55,0).add(Up),update(O,Z){if(N(Z),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin(Z*1.7)),W-=O,W<=0){W=1;let Y=ry(new Date);Y!==d&&(d=Y,h.redraw())}},dispose(){_.dispose(),y.dispose()}}}var ly=_r.find(n=>n.id==="dock"),Ls=new P(ly.c[0],0,ly.c[1]),Bi=8,to=1.82,ii=.12,Er=1.3,lc=.24,ji=.42,RT=.074,no=1.96,CT=2.46,rh=[512,240],cy=1.16,Fp=3,kp={inner:{r:1.1,y:2.66,speed:-.34},outer:{r:1.66,y:3.02,speed:.24}},uy=3.4,PT=2.4,dy=8,tr=.13,IT=.058,Fo=(n,e)=>new ze(n).multiplyScalar(e),zn={standby:Fo(3829700,.55),reserved:Fo(4641535,.7),transit:Fo(8363263,2),running:Fo(4641535,2.4),done:Fo(3461498,2.3),error:Fo(16731486,2.3),stopped:Fo(10990018,1.3)},LT=new Set(["done","error","stopped"]),ah=n=>n/Bi*Ht+Math.PI/Bi;function DT(n,e,t=new P){let i=ah(n);return t.set(Ls.x+Math.cos(i)*Er,e,Ls.z+Math.sin(i)*Er)}function oh(n){let e=n.map(i=>{let s=i.index?i.toNonIndexed():i;for(let r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&s.deleteAttribute(r);return s});return e.length===1?e[0]:Cd(e,!1)}function NT(){let n=[L(Di(.1,32,16),[0,0,0],[0,0,0],[1,.38,1.2])],e=[],t=[],i=[],s=[];for(let[r,o]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let a=Math.atan2(r,o);e.push(L(Ee(.024,.014,Math.hypot(tr,tr)),[r*tr/2,.004,o*tr/2],[0,a,0])),t.push(L(ae(.019,.022,.03,20),[r*tr,.012,o*tr])),e.push(L(Ee(.13,.003,.012),[r*tr,.03,o*tr],[0,a+.6,0])),s.push(new P(r*tr,.032,o*tr))}e.push(L(ae(.07,.062,.024,32),[0,-.03,0]));for(let r of[-1,1]){e.push(L(Ee(.012,.01,.2),[r*.062,-.066,0]));for(let o of[-1,1])e.push(L(Ee(.008,.036,.008),[r*.062,-.047,o*.06]))}for(let r of[-1,1])e.push(L(Ee(.056,.012,.014),[0,.04,r*.042]));return i.push(L(Qt(.102,.0042,6,64),[0,-.004,0],[Math.PI/2,0,0],[1,1.2,1])),i.push(L(Ee(.05,.008,.006),[0,.006,.121])),{shell:oh(n),under:oh(e),hub:oh(t),led:oh(i),rotor:L(new Un(.075,32),[0,0,0],[-Math.PI/2,0,0]),capGlass:L(new xa(.027,.085,6,16),[0,0,0],[Math.PI/2,0,0]),capCore:L(new xa(.015,.07,4,12),[0,0,0],[Math.PI/2,0,0]),hubs:s}}function OT(){return Pt(64,64,(n,e,t)=>{let i=n.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.3,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(255,255,255,0.45)"),i.addColorStop(.94,"rgba(255,255,255,0.18)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,t),n.fillStyle=i,n.fillRect(0,0,e,t)},{anisotropy:1})}function UT(n,e,t,i){n.clearRect(0,0,e,t),qi(n,3,3,e-6,t-6,18),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke();let s=Yt.dock;n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${At}`,n.fillStyle="#86a7c9",n.fillText(`${s.code} · ${s.zh}`,22,40),n.textAlign="right",n.font=`600 18px ${bt}`,n.fillText("SUBAGENT DOCK",e-22,40),n.textAlign="left";let r=String(i.running);n.font=`700 74px ${bt}`,n.fillStyle=i.running?"#e8f0ff":"#6f84a3",n.fillText(r,22,122);let o=n.measureText(r).width;n.font=`700 28px ${At}`,n.fillStyle=i.running?"#46d2ff":"#7d90ab",n.fillText(i.running?"运行中":"待命",36+o,92),n.font=`600 18px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(i.running?"AGENTS ACTIVE":"STANDBY",36+o,119),n.textAlign="right",n.font=`700 30px ${bt}`,n.fillStyle=i.done?"#34d17a":"#5d7391",n.fillText(`✓ ${i.done}`,e-22,86),n.fillStyle=i.failed?"#ff6b7a":"#5d7391",n.fillText(`✗ ${i.failed}`,e-22,122),n.textAlign="left";let a=172;if(i.wf){let{name:l,phase:c,done:u,failed:d,agents:h,status:p}=i.wf,f=`${p==="running"?"▶":"■"} ${l}${c?` · ${c}`:""}`;n.fillStyle="#e8f0ff",Yi(n,f,e-150,23,600,At),n.fillText(f,22,a),n.textAlign="right",n.font=`600 22px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(`${u+d}/${h}`,e-22,a);let x=22,m=a+15,g=e-44,_=10;n.fillStyle="rgba(120, 150, 190, 0.25)",qi(n,x,m,g,_,5),n.fill();let M=h?st(u/h,0,1):0,y=h?st(d/h,0,1-M):0;M>0&&(n.fillStyle="#34d17a",n.fillRect(x,m,g*M,_)),y>0&&(n.fillStyle="#ff6b7a",n.fillRect(x+g*M,m,g*y,_))}else{let l=i.last?`最近 · ${i.last}`:"暂无子智能体任务 · NO AGENTS YET";n.fillStyle=i.last?"#c9d6ea":"#7d90ab",Yi(n,l,e-44,23,600,At),n.fillText(l,22,a)}i.overflow>0&&(n.textAlign="right",n.font=`700 20px ${bt}`,n.fillStyle="#ffc65c",n.fillText(`+${i.overflow} 排队 QUEUED`,e-22,t-18))}function FT(n,e){let t=new dt;t.add("rubber",L(ae(to-.05,to-.05,.02,96),[0,.01,0])),t.add("white",ci([[.001,.02],[to-.02,.02],[to,.04],[to,ii-.025],[to-.025,ii],[.001,ii]],128)),t.add("plastic",L(ae(.62,.62,.006,72),[0,ii+.003,0])),t.add("chrome",L(Qt(.62,.005,8,112),[0,ii+.003,0],[Math.PI/2,0,0]));for(let d=0;d<Bi;d++){let h=ah(d),p=Math.atan2(Math.cos(h),Math.sin(h)),f=(x,m)=>[Math.cos(h)*x,m,Math.sin(h)*x];t.add("plastic",L(Ee(.012,.004,.36),f(.83,ii+.002),[0,p,0])),t.add("graphite",L(ae(.05,.065,ji-ii-.03,24),f(Er,(ii+ji-.03)/2))),t.add("white",L(ci([[.001,ji-.035],[lc-.012,ji-.035],[lc,ji-.024],[lc,ji-.008],[lc-.012,ji],[.001,ji]],48),f(Er,0))),t.add("plastic",L(ae(.15,.15,.003,40),f(Er,ji+.0015))),t.add("chrome",L(Qt(.15,.003,6,48),f(Er,ji+.002),[Math.PI/2,0,0]));for(let x of[-1,1]){let m=[-Math.sin(h)*.062*x,0,Math.cos(h)*.062*x],g=f(Er,ji+.005);t.add("chrome",L(ae(.012,.012,.008,12),[g[0]+m[0],g[1],g[2]+m[2]]))}}t.add("white",ci([[.001,ii],[.24,ii],[.24,ii+.05],[.2,ii+.075],[.095,ii+.11],[.085,1],[.072,no-.09],[.11,no-.05],[.11,no],[.001,no]],64)),t.add("chrome",L(Qt(.24,.005,8,72),[0,ii+.05,0],[Math.PI/2,0,0])),t.add("graphite",L(ae(.091,.093,.16,48),[0,.86,0])),t.add("chrome",L(Qt(.112,.006,8,64),[0,no-.05,0],[Math.PI/2,0,0])),t.add("glass",L(ae(.07,.07,.02,40),[0,no+.01,0]));let i=to-.2;t.add("white",L(Ie(.52,.26,.14,.03,2),[0,ii+.13,i],[-.32,0,0])),t.add("graphite",L(Ee(.4,.08,.1),[0,ii+.04,i-.01]));let s=t.build(n,{name:"dock-deck"}),r=new dt;r.add("led",L(Qt(to-.035,.005,6,192),[0,ii+.001,0],[Math.PI/2,0,0])),r.add("led",L(ae(.086,.086,.03,48,!0),[0,1.42,0])),r.add("led",L(ae(.06,.06,.012,32),[0,no+.002,0]));let o=r.build({led:e},{name:"dock-glow",castShadow:!1}),a=Ki(Yt.dock.zh,Yt.dock.en,Yt.dock.code,"#2fa8d8"),l=new nt(new vt(.44,.124),qn(a.tex,.2)),c=.32,u=.072;return l.position.set(0,ii+.13+Math.sin(c)*u,i+Math.cos(c)*u),l.rotation.x=-c,l.name="dock-plate",{deck:s,glowMesh:o,plateMesh:l,plate:a}}function ko(n,e,t,i){let s=new Vn(n,e,t);return s.name=i,s.instanceMatrix.setUsage(yd),s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,s}function hy(n,{pickup:e=null}={}){let t=new Jt;t.name="dock",t.position.copy(Ls);let i=qt(4641535,2),{deck:s,glowMesh:r,plateMesh:o,plate:a}=FT(n,i),l=new Jt;l.name="dock-base",l.userData.solid="dock",l.add(s,r,o),t.add(l);let c=new kt({color:16777215,toneMapped:!1}),u=new Vn(L(Qt(.205,.0065,6,64),[0,0,0],[Math.PI/2,0,0]),c,Bi);u.name="dock-pad-leds",u.castShadow=!1;let d=new _t;for(let A=0;A<Bi;A++){let J=ah(A);d.makeTranslation(Math.cos(J)*Er,ji+.004,Math.sin(J)*Er),u.setMatrixAt(A,d),u.setColorAt(A,zn.standby)}t.add(u);let h=Pt(rh[0],rh[1],null,{anisotropy:8}),p=new kt({map:h.tex,transparent:!0,depthWrite:!1,side:en,name:"dock-holo"});p.color.setScalar(1.25);let f=new nt(new vt(cy,cy*rh[1]/rh[0]),p);f.position.set(0,CT,0),f.renderOrder=3,f.name="dock-holo",t.add(f);let x=NT(),m=OT(),g={rotor:new kt({color:15134197,map:m.tex,transparent:!0,opacity:.55,depthWrite:!1,side:en}),led:new kt({color:16777215,toneMapped:!1}),capGlass:Ni({color:14674421,opacity:.16,fresnel:.6}),capCore:new kt({color:16777215,toneMapped:!1})},_=new Jt;_.name="dock-drones";let M={shell:ko(x.shell,n.white,Bi,"drone-shell"),under:ko(x.under,n.graphite,Bi,"drone-frame"),hub:ko(x.hub,n.chrome,Bi,"drone-hubs"),led:ko(x.led,g.led,Bi,"drone-leds"),rotor:ko(x.rotor,g.rotor,Bi*4,"drone-rotors"),capGlass:ko(x.capGlass,g.capGlass,Bi,"drone-capsule"),capCore:ko(x.capCore,g.capCore,Bi,"drone-capsule-core")};M.rotor.renderOrder=2,M.capGlass.renderOrder=2;for(let A of Object.values(M))_.add(A);let y=new P(Ls.x,no+.03,Ls.z),b=new Float32Array(Bi*6),w=new $t;w.setAttribute("position",new ei(b,3).setUsage(yd));let v=new Or({color:zn.running.clone().multiplyScalar(.7),transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),S=new xo(w,v);S.name="dock-links",S.frustumCulled=!1,_.add(S);let T=Array.from({length:Bi},(A,J)=>{let de=DT(J,ji+RT),I=ah(J);return{i:J,park:de,parkYaw:Math.atan2(Math.cos(I),Math.sin(I)),mode:"docked",t:0,agent:null,status:null,order:0,viaPickup:!1,snap:!1,p:de.clone(),v:new P,acc:new P,target:new P,tv:new P,orbit:null,yaw:Math.atan2(Math.cos(I),Math.sin(I)),pitch:0,roll:0,spin:0,carry:0,carryTo:0,flash:0,capColor:zn.running.clone(),freeSince:-J,landedAt:0}}),R=new nt(new Nn(1.9,1.9,3.5,24),new kt({visible:!1}));R.position.set(0,1.75,0),R.name="dock-hover",t.add(R);let N=!0,U=0,z=0,D=0,K=[],te=[],ee="",ne=1,X={inner:0,outer:.7};function W(){let A=null;for(let J of T)J.mode==="docked"&&(!A||J.freeSince<A.freeSince)&&(A=J);if(A)return A;for(let J of T)J.mode==="result"&&(!A||J.landedAt<A.landedAt)&&(A=J);return A}function O(A,J,de){A.agent={id:J.id,label:J.label||J.name||"",kind:J.kind,runId:J.runId||""},A.status="running",A.order=++z,A.capColor.copy(zn.running),A.t=0,de?(A.mode="work",A.snap=!0,A.carry=A.carryTo=1,A.spin=1):(A.mode="launch",A.viaPickup=!!e,A.carryTo=e?0:1,e||(A.carry=0))}function Z(A,J,de){if(A.status=LT.has(J)?J:"done",A.capColor.copy(zn[A.status]),A.t=0,de){q(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.spin=0;return}A.carryTo=1,A.mode=A.mode==="launch"&&A.p.y<A.park.y+.3?"land":"return"}function Y(A){A.status="running",A.capColor.copy(zn.running),A.carryTo=1,A.viaPickup=!1,A.t=0,A.mode=A.mode==="return"?"toWork":"launch"}function q(A){A.mode="docked",A.agent=null,A.status=null,A.carry=A.carryTo=0,A.freeSince=U}function le(A,J){K=Array.isArray(A)?A:[],te=Array.isArray(J)?J:[];let de=N;N=!1;let I=new Map(K.map(E=>[E.id,E]));for(let E of T){if(!E.agent)continue;let j=I.get(E.agent.id);if(j&&j.status==="running"){E.agent.label=j.label||j.name||E.agent.label,E.status!=="running"&&Y(E);continue}E.status==="running"&&Z(E,j?j.status:"done",de)}he(de)}function he(A){let J=new Set;for(let de of T)de.agent&&de.status==="running"&&J.add(de.agent.id);D=0;for(let de of K){if(!de||de.status!=="running"||J.has(de.id))continue;let I=W();if(!I){D+=1;continue}I.agent&&q(I),O(I,de,A),J.add(de.id)}}function ie(){for(let A of T)q(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.pitch=A.roll=0,A.spin=0,A.flash=0,A.landedAt=0,A.freeSince=-A.i;N=!0,D=0,K=[],te=[],ne=1}function fe(){let A=0,J=0,de=0,I=0;for(let _e of K)_e.status==="running"?A+=1:_e.status==="done"?J+=1:_e.status==="error"?de+=1:_e.status==="stopped"&&(I+=1);let E=null;for(let _e=te.length-1;_e>=0;_e--){let be=te[_e];if(be.status==="running"){E=be;break}E||(E=be)}let j="";for(let _e=K.length-1;_e>=0&&!j;_e--)K[_e].status==="running"&&(j=K[_e].label||K[_e].name||"");if(!j&&K.length){let _e=K[K.length-1];j=_e.label||_e.name||""}return{running:A,done:J,failed:de,stopped:I,overflow:D,wf:E,last:j}}function Le(){let A=fe(),J=A.wf,de=`${A.running}|${A.done}|${A.failed}|${A.overflow}|${A.last}|${J?`${J.runId}:${J.status}:${J.phase}:${J.done}:${J.failed}:${J.agents}`:""}`;de!==ee&&(ee=de,h.redraw((I,E,j)=>UT(I,E,j,A)))}let tt=new P,He=new P,Ze=new P;function Ke(A){for(let J of["inner","outer"]){let de=kp[J],I=T.filter(j=>(j.mode==="work"||j.mode==="toWork")&&(j.agent&&j.agent.kind==="workflow"?"inner":"outer")===J).sort((j,_e)=>j.agent.runId===_e.agent.runId?j.order-_e.order:j.agent.runId<_e.agent.runId?-1:1),E=I.length;I.forEach((j,_e)=>{let be=X[J]+Ht*_e/Math.max(1,E),ke=A*1.5+j.i*1.7,Ge=de.y+(_e%2?.12:0)+.05*Math.sin(ke);j.orbit=j.orbit||new P,j.orbit.set(Ls.x+Math.cos(be)*de.r,Ge,Ls.z+Math.sin(be)*de.r),j.tv.set(-Math.sin(be)*de.r*de.speed,.075*Math.cos(ke),Math.cos(be)*de.r*de.speed)})}}function me(A,J,de){let I=Math.max(1,Math.ceil(J/.02)),E=J/I;A.acc.set(0,0,0);for(let j=0;j<I;j++){He.subVectors(A.tv,A.v).multiplyScalar(2*de),tt.subVectors(A.target,A.p).multiplyScalar(de*de).add(He),A.v.addScaledVector(tt,E);let _e=A.v.length();_e>uy&&A.v.multiplyScalar(uy/_e),A.p.addScaledVector(A.v,E),A.acc.add(tt)}A.acc.multiplyScalar(1/I)}function V(A,J,de){A.t+=J;let I=2.6;switch(A.mode!=="work"&&A.mode!=="toWork"&&A.tv.set(0,0,0),A.mode){case"docked":case"result":A.target.copy(A.park);break;case"launch":A.target.set(A.park.x,Fp,A.park.z),A.p.y>Fp-.3&&(A.mode=A.viaPickup?"toPickup":"toWork",A.t=0);break;case"toPickup":{let Ge=Math.hypot(A.p.x-e.x,A.p.z-e.z)>.7;A.target.set(e.x,Ge?Fp:e.y,e.z),!Ge&&A.p.distanceTo(e)<.14&&(A.mode="pickup",A.t=0);break}case"pickup":A.target.copy(e),I=3.2,A.t>.25&&A.carryTo<1&&(A.carryTo=1,A.flash=1),A.t>.9&&(A.mode="toWork",A.t=0);break;case"toWork":case"work":A.orbit&&A.target.copy(A.orbit),I=A.mode==="work"?3:2.6,A.snap&&(A.p.copy(A.target),A.v.set(0,0,0),A.snap=!1),A.mode==="toWork"&&A.p.distanceTo(A.target)<.3&&(A.mode="work",A.t=0);break;case"return":A.target.set(A.park.x,A.park.y+.9,A.park.z),A.p.distanceTo(A.target)<.2&&(A.mode="land",A.t=0);break;case"land":A.target.copy(A.park),I=2.2,A.p.distanceTo(A.park)<.012&&A.v.length()<.08&&(A.mode="result",A.t=0,A.landedAt=U,A.p.copy(A.park),A.v.set(0,0,0));break;default:break}A.mode==="docked"||A.mode==="result"?(A.p.lerp(A.park,1-Math.exp(-10*J)),A.v.set(0,0,0),A.acc.set(0,0,0)):(me(A,J,I),Math.hypot(A.p.x-A.park.x,A.p.z-A.park.z)<lc+.1&&A.p.y<A.park.y&&(A.p.y=A.park.y)),A.mode==="result"&&(A.t>PT&&(A.carryTo=0),A.t>dy&&q(A));let E=Math.hypot(A.v.x,A.v.z),j=A.mode==="docked"||A.mode==="result"||A.mode==="land",_e=E>.25?Math.atan2(A.v.x,A.v.z):j?A.parkYaw:A.yaw;A.yaw=Yl(A.yaw,_e,1-Math.exp(-(j?3:4.5)*J)),Ze.set(Math.sin(A.yaw),0,Math.cos(A.yaw));let be=A.acc.x*Ze.x+A.acc.z*Ze.z,ke=A.acc.x*Ze.z-A.acc.z*Ze.x;A.pitch=jt(A.pitch,st(be*.045,-.32,.32),6,J),A.roll=jt(A.roll,st(-ke*.045,-.32,.32),6,J),A.spin=jt(A.spin,A.mode==="docked"||A.mode==="result"?0:1,4,J),A.carry=jt(A.carry,A.carryTo,A.carryTo>A.carry?7:4,J),A.carry<.002&&A.carryTo===0&&(A.carry=0),A.flash=Math.max(0,A.flash-J*2.2)}let B=new un,re=new un,G=new Gn(0,0,0,"YXZ"),Re=new P(1,1,1),Fe=new P,H=new P(0,IT,0),pe=new _t,Te=new _t,k=new ze;function et(A,J,de){switch(A.mode){case"docked":return de.copy(zn.standby);case"work":return de.copy(zn.running).multiplyScalar(.85+.25*Math.sin(J*4+A.i));case"launch":case"toPickup":case"pickup":case"toWork":return de.copy(A.status==="running"?zn.transit:zn[A.status]||zn.transit);default:return de.copy(zn[A.status]||zn.standby)}}function pt(A,J,de){if(A.mode==="result"){let I=st(1-A.t/dy,0,1);return de.copy(zn[A.status]||zn.done).multiplyScalar(.35+.65*I)}return A.mode==="docked"?de.copy(zn.standby).multiplyScalar(.85+.15*Math.sin(J*.8+A.i*.7)):A.mode==="launch"&&A.t<1.2?de.copy(zn.running):de.copy(zn.reserved)}function Mt(A){for(let J of T){G.set(J.pitch,J.yaw,J.roll,"YXZ"),B.setFromEuler(G),Te.compose(J.p,B,Re),M.shell.setMatrixAt(J.i,Te),M.under.setMatrixAt(J.i,Te),M.hub.setMatrixAt(J.i,Te),M.led.setMatrixAt(J.i,Te);let de=Math.max(1e-4,J.spin);for(let E=0;E<4;E++)pe.compose(x.hubs[E],re,Fe.set(de,1,de)),pe.premultiply(Te),M.rotor.setMatrixAt(J.i*4+E,pe);pe.compose(H,re,Fe.setScalar(Math.max(1e-4,J.carry))),pe.premultiply(Te),M.capGlass.setMatrixAt(J.i,pe),M.capCore.setMatrixAt(J.i,pe),M.led.setColorAt(J.i,et(J,A,k)),M.capCore.setColorAt(J.i,k.copy(J.capColor).multiplyScalar(1+2.5*J.flash)),u.setColorAt(J.i,pt(J,A,k));let I=J.i*6;if(J.mode==="work"||J.mode==="toWork")b[I]=y.x,b[I+1]=y.y,b[I+2]=y.z,b[I+3]=J.p.x,b[I+4]=J.p.y-.03,b[I+5]=J.p.z;else for(let E=0;E<6;E++)b[I+E]=y.getComponent(E%3)}for(let J of Object.values(M))J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0);u.instanceColor.needsUpdate=!0,w.attributes.position.needsUpdate=!0}for(let A of T)M.led.setColorAt(A.i,zn.standby),M.capCore.setColorAt(A.i,zn.running);Mt(0);let Ce=()=>T.some(A=>A.mode!=="docked"&&!(A.mode==="result"&&A.carry===0&&A.carryTo===0));return{root:t,fleet:_,hover:[{id:"dock",object:R}],labelAnchor:new P(Ls.x,3.75,Ls.z),sync:le,reset:ie,counts:fe,drones:()=>T.map(A=>({mode:A.mode,agent:A.agent?A.agent.id:null,status:A.status,position:A.p.clone(),carry:A.carry})),busy:()=>Ce(),update(A,J,de){let I=Math.min(Math.max(A,0),.1);U+=I,X.inner+=kp.inner.speed*I,X.outer+=kp.outer.speed*I,D>0&&T.some(j=>j.mode==="docked"||j.mode==="result")&&he(!1),Ke(J);for(let j of T)V(j,I,J);if(Mt(J),ne+=I,ne>=.25&&(ne=0,Le()),de){let j=Math.atan2(de.position.x-Ls.x,de.position.z-Ls.z);f.rotation.y=Yl(f.rotation.y,j,1-Math.exp(-5*I))}let E=.35+.1*Math.sin(J*3.1);v.opacity=E},dispose(){for(let A of Object.values(M))A.dispose();u.dispose();for(let A of[x.shell,x.under,x.hub,x.led,x.rotor,x.capGlass,x.capCore])A.dispose();for(let A of Object.values(g))A.dispose();m.tex.dispose(),h.tex.dispose(),a.tex.dispose(),w.dispose(),v.dispose(),i.dispose(),c.dispose()}}}var io=.3,zp=.65,kT=Math.PI*2,Ba=.16/rt.screenR,Bp=rt.top+.05,lh=rt.back+.05,fy=.1;function ch(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var py=[ch("media-wall",12.36,lh,rt.a0-Ba,rt.a1+Ba,0,Bp),ch("media-modules",11.78,lh,rt.a0-Ba,rt.a1+Ba,0,2.34),ch("media-cap-right",11.78,lh,rt.a0-Ba,rt.a0,0,Bp),ch("media-cap-left",11.78,lh,rt.a1,rt.a1+Ba,0,Bp)],Hp=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+kT:t};function uh(n,e,t){n.x=Xe.cx+t*Math.cos(e),n.z=Xe.cz-t*Math.sin(e)}var Zn=new P,my=new P,gy=new P,Kn=new P;function Bo(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-Xe.cx,s=e.z-Xe.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=Hp(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return Zn.copy(e).applyMatrix4(n.inv),Zn.x>=n.min.x-t&&Zn.x<=n.max.x+t&&Zn.z>=n.min.z-t&&Zn.z<=n.max.z+t&&Zn.y>=n.min.y-t&&Zn.y<=n.max.y+t}function xy(n,e,t){if(n.kind==="sector"){let u=e.x-Xe.cx,d=e.z-Xe.cz,h=Math.max(.001,Math.hypot(u,d)),p=Hp(u,d),f=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(p-(n.a0-f)),_=h*(n.a1+f-p),M=n.y1+t-e.y,y=Math.min(x,m,g,_,M);y===x?uh(e,p,Math.max(0,n.r0-t-1e-4)):y===m?uh(e,p,n.r1+t+1e-4):y===g?uh(e,n.a0-(t+1e-4)/h,h):y===_?uh(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}Zn.copy(e).applyMatrix4(n.inv);let s=Zn.x-(n.min.x-t),r=n.max.x+t-Zn.x,o=Zn.z-(n.min.z-t),a=n.max.z+t-Zn.z,l=n.max.y+t-Zn.y,c=Math.min(s,r,o,a,l);c===s?Zn.x=n.min.x-t-1e-4:c===r?Zn.x=n.max.x+t+1e-4:c===o?Zn.z=n.min.z-t-1e-4:c===a?Zn.z=n.max.z+t+1e-4:Zn.y=n.max.y+t+1e-4,e.copy(Zn).applyMatrix4(n.mat)}function BT(n,e,t,i,s){my.copy(e).applyMatrix4(n.inv),gy.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=my[a],d=gy[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,p=(c-u)/d;if(h>p&&([h,p]=[p,h]),r=Math.max(r,h),o=Math.min(o,p),r>o)return 1/0}return r}function yy(n,e,t,i){let s=n.x-Xe.cx,r=n.z-Xe.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function vy(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new _t,i=new Ei,s=r=>{if(r.userData&&r.userData.solid){let o=new _t().copy(r.matrixWorld).invert(),a=new Ei;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||l.userData.noSolid||l.material&&l.material.blending===kn||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(Kn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function _y(n=[]){let e=[...py,...n],t=[];function i(u,d,h=null){for(let p of e)if(p!==h&&Bo(p,u,d))return p;return null}function s(u,d=null){Jf(u,d);for(let h=0;h<4;h++){let p=!1;for(let f of e)Bo(f,u,io)&&(xy(f,u,io),p=!0);if(!p)return u;Jf(u,d)}return d&&$r(d)&&!i(d,io-.001)&&u.copy(d),u}function r(u,d=zp){for(let h=0;h<3;h++){let p=!1;for(let f of e)f.block==="ray"&&Bo(f,u,d)&&(xy(f,u,d),p=!0);if(!p)break}return u}function o(u,d){let h=1/0;yy(u,d,ni.r,t);for(let p of t)h=Math.min(h,p);return d.y>1e-9?h=Math.min(h,(ni.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(ni.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,p=io,f=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=fy;m<x;g+=fy){let _=Math.min(g,x);if(Kn.copy(u).addScaledVector(d,_),l(Kn,p,u)){let M=m,y=_;for(let b=0;b<7;b++){let w=(M+y)/2;Kn.copy(u).addScaledVector(d,w),l(Kn,p,u)?y=w:M=w}x=M;break}m=_}if(!f)return Math.max(0,x);Kn.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!Bo(g,Kn,p)||Bo(g,u,0))continue;let _=BT(g,u,d,x,p);_<x&&(x=_)}return Math.max(0,x)}function l(u,d,h){for(let p of e)if(p.block==="ray"&&Bo(p,u,d)&&!Bo(p,h,d))return!0;return!1}function c(u,d,h=200){let p=h;if(d.y<-1e-6){let f=-u.y/d.y;f>0&&f<p&&(Kn.copy(u).addScaledVector(d,f),wg(Kn.x,Kn.z)<0&&Sg(Kn.x,Kn.z)>0&&(f=(-Ot.depth-u.y)/d.y),f>0&&f<p&&(p=f))}if(d.y>1e-6){let f=(Xe.h-u.y)/d.y;f>0&&f<p&&(p=f)}for(let f of[Xe.r,rt.screenR,rt.back]){yy(u,d,f,t);for(let x of t)if(!(x>=p)){if(Kn.copy(u).addScaledVector(d,x),f!==Xe.r){let m=Hp(Kn.x-Xe.cx,Kn.z-Xe.cz);if(m<rt.a0||m>rt.a1||Kn.y<0||Kn.y>rt.top)continue}else if(Kn.y<0||Kn.y>Xe.h)continue;p=x}}return p<h?p:1/0}return{get solids(){return e},setObjects(u){e=[...py,...u||[]]},contains:(u,d=io)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var zT={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},dock:{pos:[-1,3.3,-6.6],target:[-5.3,1.8,-5]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},HT={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},GT=.15;function VT(n,e){n.updateMatrixWorld(!0);let t=new ss,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(hn),i+=1))}),i}var WT=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5],by={loading:"读取中 · loading","signed-out":"未登录账户 · not signed in",failed:"查询失败 · query failed",unavailable:"余额不可用 · balance unavailable"};function My(n,e,{environment:t=!0,demo:i=!1,look:s=Kr,brightness:r=gn.initial}={}){let o=!!i,a=new go;a.background=null;let l=ap(s),c=st(r,gn.min,gn.max),u=t?n:null,d=HT[e]||null,h=u?d:null,p=h?Cg(u,h):null,{M:f,tex:x}=yg(e),m=$g(f,x,e,{renderer:u,look:l,reflection:p,beamTarget:new P(vn.x,3,vn.z)});function g(){a.environment=m.envTexture,a.environmentIntensity=l.envIntensity}g();let _=Ix(x),M=sx(f),y=fx(f),b=Mx(f),w=Ax(f,_),v=Dx(f),S=Px(f,v),T=ey(f,null,{demo:o}),R=sy(),N=ay(f),U=w.byKind.robot,z=hy(f,{pickup:U?Ui(U.theta,Jr+.55,2.45):null}),D=new Jt;D.name="wafers",a.add(m.root,R.root,T.root,M.root,y.root,b.root,w.root,S.root,N.root,z.root,z.fleet,_.root,D);let K=Ux({cell:b,stations:w,stocker:S,engine:y,wafers:v,root:D}),te=d?VT(a,GT):0,ee={frame:0,matrix:new _t,proj:new _t,ready:!1},ne=vy(a),X=[];for(let B of[...M.hover,...y.hover,...b.hover,...w.list.flatMap(re=>re.hover),...S.hover,...z.hover,...N.hover,...T.hover])B.object.userData.hoverId=B.id,X.push(B.object);let W=[{id:"tank",anchor:M.anchors.tank},{id:"engine",anchor:y.anchors.engine},{id:"robot",anchor:b.anchors.robot.clone().setY(1.75)},...w.list.map(B=>({id:`station:${B.kind}`,anchor:B.anchor,accent:B.accent,near:6.5})),{id:"loadport",anchor:S.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:S.anchors.stocker.clone().setY(1.25)},{id:"dock",anchor:z.labelAnchor},{id:"living",anchor:N.labelAnchor}],O={phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"unavailable"},Z={state:null,live:O,tps:0,peak:!1},Y={activity:0,tps:0,model:"",phase:"idle"},q=null,le=0,he=!1,ie=0,fe=0,Le=0,tt=1,He=Sr(Date.now());function Ze(){He=Sr(Date.now());let B=q?er(q.provider,q.model):null,re=typeof O.balance=="number"?O.balance:null,G=O.currency==="USD"?"$":"¥",Re=[o?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(re==null)Re.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),Re.push({text:by[O.balanceStatus]||by.unavailable,size:28,color:"#8c97ad",gap:56});else{Re.push({text:`${G} ${re.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let Fe=O.currency==="USD"?0:Zd(re,B,He);Re.push({text:B&&Fe?`≈ ${on(Fe)} tokens · ${B.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}Re.push({text:He?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:He?"#ffb020":"#34d17a",weight:700,gap:72}),M.setReadout(Re)}function Ke(){let B=typeof O.balance=="number"?O.balance:null;if(B==null)return .5;ie=Math.max(ie,B);let re=WT.find(G=>G>=ie*1.25)||ie*1.25;return st(B/re,0,1)}function me(B,re,G){let Re=K.activity();R.set("fuel",.1+.9*re,.7+fe/28),R.set("feed",Re.inbound>0?1:.1+.55*re,1.5),R.set("lock",Re.inbound>0?.9:.08,-1.4);for(let Fe of w.list)R.set(`spoke:${Fe.index}`,Fe.active?1:.06,1.2);R.set("unload",Re.outbound>0?.9:.08,1.4),R.set("out",Re.outbound>0||Re.stocker?.9:.08,1.4),R.set("ring",Re.robot?.75:G!=="idle"?.4:.22,.8),R.update(B)}function V(B){return B==="reasoning"||B==="generating"||B==="thinking"?.35+.65*st(fe/70,0,1):B==="tool"?.2:0}return{scene:a,key:m.key,presets:zT,labelAnchors:W,solids:ne,mascotAnchors:N.anchors,screenDefs:Dp,setScreenDetail:(B,re=2)=>T.setDetail(B,re),get post(){return{...l.post,exposure:l.exposure*c}},getLook:()=>l.id,setLook(B){let re=ap(B);return re===l?!1:(l=re,m.setLook(l),g(),!0)},getBrightness:()=>c,setBrightness(B){c=st(Number(B)||gn.initial,gn.min,gn.max)},setState(B){B&&(q&&B.tools.errors>le&&(he=!0),le=B.tools.errors,q=B,K.sync(B),z.sync(B.agents,B.workflows),w.setStats(B),tt=Math.max(tt,.45))},setLive(B){B&&Object.assign(O,B)},isDemo:()=>o,setDemo(B){o!==!!B&&(o=!!B,T.setDemo(o),tt=1)},resetState(){q=null,le=0,he=!1,ie=0,K.reset(),z.reset(),w.setStats(null),T.reset(),tt=1},labelState(B){if(B.startsWith("station:")){let re=w.byKind[B.slice(8)],G=re?re.status():"idle";return G==="idle"?"":G}return B==="dock"&&z.counts().running>0?"working":""},busy(){return K.busy()||z.busy()||O.phase&&O.phase!=="idle"||fe>1},dockInfo:()=>z.counts(),update(B,re,G){fe=jt(fe,O.tps||0,6,B),tt+=B,tt>=.5&&(tt=0,Ze());let Re=q?q.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},Fe=O.phase&&O.phase!=="idle"?O.phase:O.running===!1?"idle":q?q.phase:"idle",H=fe>.5?st(.2+fe/90,0,1):0;Le=jt(Le,V(Fe),1.6,B),Y.activity=Le,Y.tps=fe,Y.model=q?q.model:"",Y.phase=Fe,m.update(B,re,Y),M.update(B,re,{level:Ke(),flow:H,peak:He}),y.update(B,re,{phase:Fe,tps:fe,ctx:q&&q.contextWindow>0?q.contextTokens/q.contextWindow:0,counters:{miss:Re.miss,hit:Re.hit,output:Re.output,reasoning:Re.reasoning,cost:Re.cost},errorPulse:he}),he=!1,K.update(B,re),_.update(B),z.update(B,re,G),G&&w.face(G),N.update(B,re),me(B,H,Fe),Z.state=q,Z.phase=Fe,Z.tps=fe,Z.peak=He,T.update(B,re,Z)},prerender(B){!p||(ee.frame+=1,(ee.ready&&ee.matrix.equals(B.matrixWorld)&&ee.proj.equals(B.projectionMatrix)||h.every>1)&&ee.ready&&ee.frame%2===1)||(p.update(a,B),ee.matrix.copy(B.matrixWorld),ee.proj.copy(B.projectionMatrix),ee.ready=!0)},reflectionInfo:()=>d?{...d,trimmed:te,active:!!p}:null,hoverTargets(){return S.hoverObjects(X.slice())},focus:B=>K.focus(B),stats:()=>K.stats(),dispose(){K.dispose(),S.dispose(),z.dispose(),N.dispose(),m.dispose(),gg(a),v.dispose(),p&&p.dispose();for(let B of Object.values(f))B&&B.dispose&&B.dispose();for(let B of Object.values(x))B&&B.dispose&&B.dispose()}}}var XT=new gr(-1,1,1,-1,0,1),Gp=class extends $t{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},$T=new Gp,dh=class{constructor(e){this._mesh=new nt($T,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qT=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,YT=`
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
}`,KT=`
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
}`,ZT=`
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
}`,JT=`
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
}`;function Sy(n,e,t={}){let i=new ai(Math.max(1,n),Math.max(1,e),{type:Ai,minFilter:Rn,magFilter:Rn,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function hh(n,e,t={}){return new ba({vertexShader:qT,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function wy(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new dh(null),r=Sy(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(Sy(2,2));let a=hh(YT,{tSrc:{value:null},uTexel:{value:new Ae},uThreshold:{value:1},uKnee:{value:.45}}),l=hh(KT,{tSrc:{value:null},uTexel:{value:new Ae}}),c=hh(ZT,{tSrc:{value:null},uTexel:{value:new Ae},uWeight:{value:1}},{blending:kn,transparent:!0}),u=hh(JT,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,p){n.setRenderTarget(p),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,p){r.setSize(Math.max(1,h),Math.max(1,p));let f=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(p/2));for(let m of o)m.setSize(f,x),f=Math.max(1,Math.floor(f/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:p,knee:f,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),p!=null&&(a.uniforms.uThreshold.value=p),f!=null&&(a.uniforms.uKnee.value=f),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,p,f=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,p),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=f,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var fh=1.6;function Ey(n,e){let t=Math.tan(Wr.degToRad(n/2));return{tv:t,th:t*Math.max(.2,e)}}var Vp=n=>Math.atan2(-Math.cos(n),Math.sin(n)),Wp=(n,e)=>n.a-e/rt.screenR;function Ty(n,e,t){let{tv:i,th:s}=Ey(e,t),r=n.a1-n.a0,o=rt.screenR,a=2*o*Math.sin(r/2),l=o*(1-Math.cos(r/2)),c=n.y1-n.y0;return st(Math.max(l+a/2*1.08/s,l+c/2*1.22/i),fh+.4,16)}function Ay(n,e,t,i){let{tv:s,th:r}=Ey(t,i);return{u:Math.max(0,(n.a1-n.a0)*rt.screenR/2-e*r*.9),v:Math.max(0,(n.y1-n.y0)/2-e*s*.9)}}function Ry(n,e,t,i,s=new P){return qr(Wp(n,e),rt.screenR-i,(n.y0+n.y1)/2+t,s)}var ph=85*Math.PI/180,jT=1.65,QT=3.2,eA=2.6,tA={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Cy(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ie=>ie,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new Gn(0,0,0,"YXZ"),h=new Set,p=!1,f=new P,x=new P,m=0,g=null,_=null,M=0,y=new P,b=new P,w=new P,v=new P,S=new P,T=new bo,R=new Ae;function N(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function U(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=st(d.x,-ph,ph),N()}function z(ie){return y.copy(n.position),S.copy(y).add(ie),n.position.copy(S),s(n.position,y),n.position.distanceTo(S)}let D=()=>{M=performance.now(),a&&a()},K=()=>{o&&o(),D()};function te(ie){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let fe=ie.button===2||ie.button===0&&ie.shiftKey?"pan":ie.button===0?"look":null;if(fe){g={id:ie.pointerId,x:ie.clientX,y:ie.clientY,mode:fe},_=null;try{e.setPointerCapture(ie.pointerId)}catch{}K()}}function ee(ie){if(!l||!g||ie.pointerId!==g.id)return;let fe=ie.clientX-g.x,Le=ie.clientY-g.y;g.x=ie.clientX,g.y=ie.clientY;let tt=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let He=2.4/tt;c+=fe*He,u=st(u+Le*He,-ph,ph),N()}else{let He=6/tt;w.set(1,0,0).applyQuaternion(n.quaternion),v.copy(w).multiplyScalar(-fe*He),v.y+=Le*He,z(v)}D()}function ne(ie){if(!(!g||ie.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ie.pointerId)}catch{}D()}}function X(ie){if(!l)return;ie.preventDefault();let fe=ie.deltaMode===1?16:ie.deltaMode===2?400:1;m=st(m+st(-ie.deltaY*fe*.006,-4,4),-8,8),_=null,K()}function W(ie){if(!l)return;let fe=e.getBoundingClientRect();R.set((ie.clientX-fe.left)/Math.max(1,fe.width)*2-1,-((ie.clientY-fe.top)/Math.max(1,fe.height))*2+1),n.updateMatrixWorld(),T.setFromCamera(R,n);let{origin:Le,direction:tt}=T.ray;if(tt.y>-.02)return;let He=(r-Le.y)/tt.y;if(He<=0||He>60)return;let Ze=new P().copy(tt).multiplyScalar(He).add(Le),Ke=Ze.x-n.position.x,me=Ze.z-n.position.z,V=Math.hypot(Ke,me);V>1.5&&(Ze.x-=Ke/V*1.2,Ze.z-=me/V*1.2),Ze.y=r+jT;let B=Ze.distanceTo(n.position);_={t:0,d:st(B/6,.45,1.6),p0:n.position.clone(),p1:Ze},K()}function O(ie,fe){if(!l||ie.ctrlKey||ie.metaKey||ie.altKey)return;let Le=ie.target;if(Le&&(Le.tagName==="INPUT"||Le.tagName==="TEXTAREA"||Le.tagName==="SELECT"||Le.isContentEditable))return;p=!!ie.shiftKey;let tt=tA[ie.code];tt&&(ie.preventDefault(),ie.stopPropagation(),fe?h.add(tt):h.delete(tt),fe?(_=null,K()):D())}let Z=ie=>O(ie,!0),Y=ie=>O(ie,!1),q=()=>{h.clear(),p=!1},le=ie=>{l&&ie.preventDefault()};e.addEventListener("pointerdown",te),e.addEventListener("pointermove",ee),e.addEventListener("pointerup",ne),e.addEventListener("pointercancel",ne),e.addEventListener("wheel",X,{passive:!1}),e.addEventListener("dblclick",W),e.addEventListener("contextmenu",le),i&&(i.addEventListener("keydown",Z),i.addEventListener("keyup",Y),i.addEventListener("blur",q));function he(ie){if(!l)return!1;let fe=!1;if(_){_.t+=ie;let Le=as(Math.min(1,_.t/_.d));v.lerpVectors(_.p0,_.p1,Le).sub(n.position),(z(v)>.02||_.t>=_.d)&&(_=null),fe=!0}if(x.set(0,0,0),h.size&&(b.set(-Math.sin(c),0,-Math.cos(c)),w.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(b),h.has("b")&&x.sub(b),h.has("r")&&x.add(w),h.has("l")&&x.sub(w),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(QT*(p?eA:1))),f.set(jt(f.x,x.x,9,ie),jt(f.y,x.y,9,ie),jt(f.z,x.z,9,ie)),f.lengthSq()>1e-6?(z(v.copy(f).multiplyScalar(ie)),fe=!0):f.set(0,0,0),Math.abs(m)>.001){let Le=m*(1-Math.exp(-9*ie));m-=Le,n.getWorldDirection(b),z(v.copy(b).multiplyScalar(Le))>.02&&(m=0),fe=!0}else m=0;return fe&&D(),fe}return{get enabled(){return l},enable(){l=!0,U()},disable(){l=!1,g=null,_=null,h.clear(),f.set(0,0,0),m=0},sync:U,active(){return l&&(!!g||!!_||h.size>0||Math.abs(m)>.001||f.lengthSq()>1e-4||performance.now()-M<300)},update:he,dispose(){e.removeEventListener("pointerdown",te),e.removeEventListener("pointermove",ee),e.removeEventListener("pointerup",ne),e.removeEventListener("pointercancel",ne),e.removeEventListener("wheel",X),e.removeEventListener("dblclick",W),e.removeEventListener("contextmenu",le),i&&(i.removeEventListener("keydown",Z),i.removeEventListener("keyup",Y),i.removeEventListener("blur",q))}}}var Xp=["orbit","look"],nA=12,iA=2,zo=["low","medium","high","ultra"],za=["auto",30,60,120,0],cc={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},sA=60,rA=30,Py=150*(Math.PI/180),oA=.8,Iy=30,aA=.45,Ly=.0013,lA=14,cA=7,uA=.25,dA=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,hA=/swiftshader|llvmpipe|softpipe|software|basic render/i;function fA(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(hA.test(t))return"low";if(dA.test(t))return"high"}catch{}return"medium"}function pA(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new $t;return t.setAttribute("position",new ft(e,3)),t}function mA(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function Dy(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c,onScreen:u}=e,d=!!e.demo,h=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=new Sd({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),f=fA(p.getContext()),x=cc[e.quality]?e.quality:f,m=za.includes(e.fps)?e.fps:"auto";p.setClearColor(Xg,1),p.toneMapping=Ol,p.toneMappingExposure=1,p.outputColorSpace=oi,p.shadowMap.type=Mo,p.shadowMap.autoUpdate=!1,p.info.autoReset=!1,p.debug.onShaderError=(F,ve,Be,qe)=>{let Ne=F.getShaderSource(qe)||"",ct=/#define SHADER_NAME (.*)/.exec(Ne),tn=ct&&ct[1].trim()||"shader",fs=[F.getShaderInfoLog(Be),F.getShaderInfoLog(qe),F.getProgramInfoLog(ve)].map(Hs=>(Hs||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${tn}" failed to compile
${fs}`);let lo=fs.split(`
`).find(Hs=>/error/i.test(Hs))||fs.split(`
`)[0]||"";r&&r("shader",`${tn}: ${lo}`.slice(0,220))};let g=mA(p.getContext()),_=!1,M=p.domElement;M.className="dwp3d-gl",M.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",M.setAttribute("aria-hidden","true"),n.appendChild(M);let y=document.createElement("div");y.className="dwp3d-labels",n.appendChild(y);let b=new Qn(40,1,.2,9e3),w=new Qn(40,1,.2,9e3);b.layers.enable(hn),w.layers.enable(hn);let v=_y(),S=new Ad(b,M);S.enableDamping=!0,S.dampingFactor=.08,S.minDistance=.5,S.maxDistance=40,S.zoomToCursor=!1,S.maxPolarAngle=Py,S.screenSpacePanning=!0,S.rotateSpeed=.7,S.zoomSpeed=.9,S.panSpeed=.8;let T=null,R=null,N=null,U=pA(),z=null,D=null,K=0,te=0,ee=1,ne=1,X=null,W="orbit",O=!1,Z,Y=0,q=0,le=0,he=new P,ie=new P,fe=[],Le=[],tt=!0,He=!1,Ze=!1,Ke=!1,me=0,V=0,B=Po.includes(e.look)?e.look:Kr,re=st(Number(e.brightness)||gn.initial,gn.min,gn.max),G={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function Re(){G.casters.clear(),G.pending=!1,!(!T||!p.shadowMap.enabled)&&(T.scene.updateMatrixWorld(!0),T.scene.traverse(F=>{F.castShadow&&(F.isMesh||F.isPoints||F.isLine)&&G.casters.set(F,{m:F.matrixWorld.clone(),v:F.isInstancedMesh?F.instanceMatrix.version:0})}),p.shadowMap.needsUpdate=!0,G.lastBake=V,G.bakes+=1)}function Fe(){if(!T||!p.shadowMap.enabled||V<G.next)return;G.next=V+.5;let F=!1;for(let[Be,qe]of G.casters){if(!Be.castShadow||!Dt(Be)){G.casters.delete(Be),F=!0;continue}(!Be.matrixWorld.equals(qe.m)||Be.isInstancedMesh&&Be.instanceMatrix.version!==qe.v)&&(Be.castShadow=!1,G.casters.delete(Be),F=!0)}T.scene.traverse(Be=>{Be.castShadow&&!G.casters.has(Be)&&(Be.castShadow=!1)}),F&&(G.pending=!0);let ve=G.bakes<4?.5:2;G.pending&&V-G.lastBake>=ve&&Re()}function H(){R&&(R.dispose(),R=null),N&&(N.removeFromParent(),N.material.dispose(),N=null),T&&(T.dispose(),T=null),G.casters.clear(),p.renderLists.dispose()}function pe(){let F=cc[x];p.shadowMap.enabled=x!=="low",T=My(p,x,{demo:d,look:B,brightness:re}),N=new xo(U,new Or({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),N.name="hover-highlight",N.matrixAutoUpdate=!1,N.frustumCulled=!1,N.renderOrder=20,N.visible=!1,N.layers.set(hn),T.scene.add(N),R=wy(p,{msaa:F.msaa,bloom:F.bloom}),k(),ne=1,ke(!0),z&&T.setState(z),D&&T.setLive(D),Os(),v.setObjects(T.solids||[]),le=0,G.bakes=0,G.next=V+.5,Re(),Te()}function Te(){if(!(!T||typeof p.compileAsync!="function"))try{T.scene.updateMatrixWorld(!0);let F=p.compileAsync(T.scene,w);F&&typeof F.catch=="function"&&F.catch(()=>{})}catch{}}function k(){!R||!T||(T.post&&R.set(T.post),h&&R.set({grain:.006}))}let et=new Ae;function pt(F,ve,Be,qe){et.set(F.x-Xe.cx,F.z-Xe.cz),et.length()>ve&&(et.setLength(ve),F.x=Xe.cx+et.x,F.z=Xe.cz+et.y),F.y=st(F.y,Be,qe)}function Mt(F){return pt(F,ni.targetR,ni.targetYMin,ni.targetYMax),v.keepClear(F,zp),pt(F,ni.targetR,ni.targetYMin,ni.targetYMax),F}let Ce=new P;function A(){let F=S.target;Ce.copy(F),Mt(F),(F.x!==Ce.x||F.y!==Ce.y||F.z!==Ce.z)&&b.position.add(Ce.subVectors(F,Ce))}function J(){let F=S.target,ve=Math.max(.001,b.position.distanceTo(F)),Be=st((ni.yMin+.02-F.y)/ve,-1,1),qe=st((ni.yMax-.02-F.y)/ve,-1,1);S.maxPolarAngle=Math.min(Py,Math.acos(Be)),S.minPolarAngle=Math.min(Math.acos(qe),S.maxPolarAngle)}let de={len:0,pulled:!1,easing:!1},I=new P;function E(){de.len=0,de.pulled=!1,de.easing=!1}function j(F){let ve=!1;if(W==="orbit"&&!X){let Be=S.target;I.subVectors(b.position,Be);let qe=I.length();if(qe>1e-4){I.divideScalar(qe);let Ne=Math.min(qe,v.containerExit(Be,I)-.02);Ne=Math.min(Ne,v.armLength(Be,I,Ne,io)),Ne=Math.max(Ne,Math.min(qe,uA)),!de.pulled||Ne<de.len?de.len=Ne:de.len=Math.min(Ne,jt(de.len,Ne,cA,F)),de.len>qe-.001&&Ne>=qe-1e-4&&(de.len=qe),de.pulled=de.len<qe-1e-4,de.easing=de.pulled&&Ne>de.len+.001,w.position.copy(Be).addScaledVector(I,de.len),ve=!0}}ve||(w.position.copy(b.position),E()),w.quaternion.copy(b.quaternion),w.updateMatrixWorld()}function _e(){W==="orbit"&&!X&&de.pulled&&(b.position.copy(w.position),E())}function be(){R&&R.setSize(Math.round(K*ee*ne),Math.round(te*ee*ne))}function ke(F=!1){let ve=Math.max(1,Math.floor(n.clientWidth)),Be=Math.max(1,Math.floor(n.clientHeight)),qe=Math.min(typeof window<"u"&&window.devicePixelRatio||1,cc[x].dpr);if(!(!F&&ve===K&&Be===te&&qe===ee)&&(K=ve,te=Be,ee=qe,p.setPixelRatio(qe),p.setSize(ve,Be,!1),be(),b.aspect=w.aspect=ve/Be,b.updateProjectionMatrix(),w.updateProjectionMatrix(),le=0,ge.def)){let Ne=Math.abs(ge.td-ge.fit)<.001;ge.fit=Ye(ge.def),Ne&&(ge.td=ge.fit),Kt()}}function Ge(F){let ve=T?T.presets:null,Be=ve&&(ve[F]||ve.overview)||{pos:[0,7,16],target:[0,2,-1]},qe=new P().fromArray(Be.target),Ne=new P().fromArray(Be.pos),ct=Be.mode==="look"?"look":"orbit";if(ct==="orbit"){let tn=st(1.7/Math.max(.3,b.aspect),1,2.3);Ne.sub(qe).multiplyScalar(tn).add(qe),pt(Ne,ni.r,ni.yMin,ni.yMax)}return{pos:Ne,target:qe,mode:ct}}function Se(F,ve){let Be=ve.x-F.x,qe=ve.y-F.y,Ne=ve.z-F.z;return{yaw:Math.atan2(-Be,-Ne),pitch:Math.atan2(qe,Math.hypot(Be,Ne))}}let Me=new Gn(0,0,0,"YXZ"),Ve=new P;function $(F,ve){Me.set(ve,F,0,"YXZ"),b.quaternion.setFromEuler(Me)}function we(F){if(F===W)return;_e(),De.log=0;let ve=W==="screen";W=F,F==="look"?(O=!1,S.enabled=!1,Hn.enable()):F==="screen"?(O=!1,S.enabled=!1,Hn.disable()):(Hn.disable(),S.enabled=!0),y.style.visibility=F==="screen"?"hidden":"",ve&&Ds(),c&&c(F)}function ye(){let F=$r(b.position)==="hall";if(we("orbit"),!F){Ue("overview");return}b.getWorldDirection(Ve),Mt(S.target.copy(b.position).addScaledVector(Ve,6)),J(),S.update(),E()}function Pe(F){let{pos:ve,target:Be,mode:qe}=Ge(F);if(X=null,we(qe),b.position.copy(ve),qe==="look"){let Ne=Se(ve,Be);$(Ne.yaw,Ne.pitch),Hn.sync()}else Mt(S.target.copy(Be)),J(),S.update();E()}function Ue(F,ve=1.2){if(h){Pe(F);return}_e(),De.log=0;let{pos:Be,target:qe,mode:Ne}=Ge(F);we(Ne);let ct=Se(Be,qe);We(Be,ct.yaw,ct.pitch,qe,Ne,ve)}function We(F,ve,Be,qe,Ne,ct=1.2){Me.setFromQuaternion(b.quaternion,"YXZ"),X={t:0,d:h?.001:ct,p0:b.position.clone(),p1:F.clone(),yaw0:Me.y,pitch0:Me.x,yaw1:ve,pitch1:Be,target:qe,mode:Ne}}let ge={id:null,def:null,u:0,v:0,d:0,tu:0,tv:0,td:0,fit:0,back:null,moving:!1},It=new P,Oe=()=>T&&T.screenDefs||[],gt=F=>Oe().find(ve=>ve.id===F)||null,Rt=()=>Math.tan(Wr.degToRad(b.fov/2)),Ye=F=>Ty(F,b.fov,b.aspect);function Kt(){let F=ge.def;if(!F)return;ge.td=st(ge.td,fh,ge.fit*1.05);let ve=Ay(F,ge.td,b.fov,b.aspect);ge.tu=st(ge.tu,-ve.u,ve.u),ge.tv=st(ge.tv,-ve.v,ve.v)}let Sn=(F,ve,Be,qe)=>Ry(ge.def,ve,Be,qe,F);function Jn(F){let ve=gt(F);return!ve||!T?!1:(W!=="screen"&&(_e(),ge.back={mode:W,pos:b.position.clone(),quat:b.quaternion.clone(),target:S.target.clone()}),O=!1,we("screen"),ge.id=F,ge.def=ve,ge.fit=Ye(ve),ge.u=ge.tu=0,ge.v=ge.tv=0,ge.d=ge.td=ge.fit,ge.moving=!1,T.setScreenDetail(F,iA),We(Sn(It,0,0,ge.fit),Vp(ve.a),0,null,"screen",1),u&&u(F),_n(),!0)}function Ds(){ge.id=null,ge.def=null,ge.back=null,ge.moving=!1,T&&T.setScreenDetail&&T.setScreenDetail(null,1),u&&u(null)}function Ns(){if(W!=="screen")return;let F=ge.back;if(we(F?F.mode:"orbit"),!F){Ue("overview");return}Me.setFromQuaternion(F.quat,"YXZ"),We(F.pos,Me.y,Me.x,F.target,F.mode,1),_n()}function Rr(F){let ve=Oe();if(!ve.length)return;let Be=Math.max(0,ve.findIndex(Ne=>Ne.id===ge.id)),qe=ve[(Be+F+ve.length)%ve.length];Jn(qe.id)}function es(F){let ve=1-Math.exp(-nA*F);ge.u+=(ge.tu-ge.u)*ve,ge.v+=(ge.tv-ge.v)*ve,ge.d+=(ge.td-ge.d)*ve,ge.moving=Math.abs(ge.tu-ge.u)+Math.abs(ge.tv-ge.v)+Math.abs(ge.td-ge.d)>.001,Sn(b.position,ge.u,ge.v,ge.d),$(Vp(Wp(ge.def,ge.u)),0)}function si(F,ve){let Be=Rt(),qe=Be*Math.max(.2,b.aspect),Ne=ve.x/K*2-1,ct=-(ve.y/te)*2+1,tn=ge.tu+Ne*qe*ge.td,fs=ge.tv+ct*Be*ge.td,lo=st(ge.td*Math.exp(F),fh,ge.fit*1.05),Hs=lo/ge.td;ge.tu=tn-(tn-ge.tu)*Hs,ge.tv=fs-(fs-ge.tv)*Hs,ge.td=lo,Kt()}function zi(F,ve){let Be=2*ge.td*Rt()/Math.max(1,te);ge.tu-=F*Be,ge.tv+=ve*Be,Kt()}let _n=()=>{me=performance.now()};function nr(){let F=X;if(!F)return;if(X=null,W==="look"){Hn.sync();return}b.getWorldDirection(Ve);let ve=Math.max(1,b.position.distanceTo(F.target));Mt(S.target.copy(b.position).addScaledVector(Ve,ve)),E()}S.addEventListener("start",()=>{nr(),_n()}),S.addEventListener("change",_n),S.addEventListener("end",_n);let Hn=Cy(b,M,{keyTarget:n,clampPosition:(F,ve)=>v.resolve(F,ve),floorY:0,onStart:()=>{nr(),_n()},onChange:_n});function Os(){for(let F of fe)F.el.remove();if(fe=[],!!T)for(let F of Le){let ve=T.labelAnchors.find(Ne=>Ne.id===F.id);if(!ve)continue;let Be=document.createElement("div");Be.className="dwp3d-label";let qe=document.createElement("span");if(qe.className="dwp3d-label-title",qe.textContent=F.text,Be.appendChild(qe),F.sub){let Ne=document.createElement("span");Ne.className="dwp3d-label-sub",Ne.textContent=F.sub,Be.appendChild(Ne)}ve.accent&&Be.style.setProperty("--dwp3d-accent",ve.accent),y.appendChild(Be),fe.push({id:F.id,el:Be,anchor:ve.anchor,near:ve.near||2.5,state:"",shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let bi=new P,Us=[],hs=[];function ro(F){F.shown!==!1&&(F.el.style.opacity="0",F.shown=!1)}function Ho(){if(tt){Us.length=0;for(let F of fe){if(bi.copy(F.anchor).project(w),!(bi.z<1&&Math.abs(bi.x)<1.05&&Math.abs(bi.y)<1.05)){ro(F);continue}if(F.sx=(bi.x*.5+.5)*K,F.sy=(-bi.y*.5+.5)*te,F.dist=w.position.distanceTo(F.anchor),F.dist<F.near){ro(F);continue}Us.push(F)}Us.sort((F,ve)=>F.dist-ve.dist),hs.length=0;for(let F of Us){F.w||(F.w=F.el.offsetWidth,F.h=F.el.offsetHeight);let ve={x0:F.sx-F.w/2-3,x1:F.sx+F.w/2+3,y0:F.sy-F.h-3,y1:F.sy+7};if(hs.some(ct=>ve.x0<ct.x1&&ve.x1>ct.x0&&ve.y0<ct.y1&&ve.y1>ct.y0)){ro(F);continue}hs.push(ve);let Be=T&&T.labelState?T.labelState(F.id):"";Be!==F.state&&(F.state=Be,Be?F.el.dataset.state=Be:delete F.el.dataset.state);let qe=st(1.45-F.dist/24,.3,1).toFixed(2),Ne=`translate(${F.sx.toFixed(1)}px, ${F.sy.toFixed(1)}px) translate(-50%, -100%)`;Ne!==F.tf&&(F.el.style.transform=Ne,F.tf=Ne),F.shown!==qe&&(F.el.style.opacity=qe,F.shown=qe)}}}let ts=new bo;ts.layers.enable(hn);let Go=new Ae,hi=null,Fs=!1,ks=0,C=null,Q=null,ue=null,oe=!1;function ce(F){if(!T)return null;Go.set(F.x/K*2-1,-(F.y/te)*2+1),w.updateMatrixWorld(),ts.setFromCamera(Go,w);let ve=ts.intersectObjects(T.hoverTargets(),!0);for(let Be of ve)for(let qe=Be.object;qe;qe=qe.parent)if(qe.userData&&qe.userData.hoverId)return{id:qe.userData.hoverId,obj:qe,distance:Be.distance};return null}let De={log:0,anchor:new P,anchored:!1},at=new P;function $e(F){let ve=ce(F),Be=ts.ray,qe=v.surfaceHit(Be.origin,Be.direction);return ve&&ve.distance<qe&&(qe=ve.distance),Number.isFinite(qe)?(De.anchor.copy(Be.origin).addScaledVector(Be.direction,qe),!0):!1}function Je(F){if(!De.log)return;let ve=De.log*(1-Math.exp(-lA*F));Math.abs(De.log-ve)<.001&&(ve=De.log),De.log-=ve;let Be=S.target,qe=b.position,Ne=Math.max(.001,qe.distanceTo(Be)),ct=Math.exp(ve);if(ve<0){let tn=De.anchored?De.anchor:Be;if(ct=Math.max(ct,oA/Ne,aA/Math.max(.001,qe.distanceTo(tn))),ct>=1){De.log=0;return}qe.sub(tn).multiplyScalar(ct).add(tn),tn!==Be&&Be.sub(tn).multiplyScalar(ct).add(tn)}else{at.subVectors(qe,Be).divideScalar(Ne);let tn=v.containerExit(Be,at)-.02,fs=v.armLength(Be,at,Math.min(Iy,tn),io,!1);if(ct=Math.min(ct,Iy/Ne,Math.max(1,(fs+.5)/Ne)),ct<=1){De.log=0;return}qe.sub(Be).multiplyScalar(ct).add(Be)}}let ut=F=>{if(W==="screen"&&T){F.preventDefault(),F.stopPropagation();let qe=F.deltaMode===1?16:F.deltaMode===2?400:1,Ne=st(F.deltaY*qe*Ly,-.6,.6);Ne&&!X&&ge.def&&si(Ne,St(F)),_n();return}if(W!=="orbit"||!T||!S.enabled)return;F.preventDefault(),F.stopPropagation();let ve=F.deltaMode===1?16:F.deltaMode===2?400:1,Be=st(F.deltaY*ve*Ly,-.6,.6);Be&&(nr(),_n(),De.log&&Math.sign(Be)!==Math.sign(De.log)&&(De.log=0),Be<0&&(_e(),De.anchored=!O&&$e(St(F))),De.log=st(De.log+Be,-1.2,1.2))};n.addEventListener("wheel",ut,{passive:!1,capture:!0});let St=F=>{let ve=M.getBoundingClientRect();return{x:F.clientX-ve.left,y:F.clientY-ve.top}},Bt=F=>{hi=St(F),Fs=!0,ue&&Math.hypot(hi.x-ue.x,hi.y-ue.y)>5&&(oe=!0),ue&&W==="screen"&&!X&&ge.def&&(zi(hi.x-ue.lx,hi.y-ue.ly),_n()),ue&&(ue.lx=hi.x,ue.ly=hi.y)},lt=()=>{hi=null,Fs=!0},zt=F=>{let ve=St(F);ue={...ve,lx:ve.x,ly:ve.y,t:performance.now()},oe=!1,_n(),M.style.cursor="grabbing"},ht=F=>{let ve=St(F);if(ue&&!oe&&performance.now()-ue.t<450&&!X){let qe=ce(ve),Ne=qe&&String(qe.id).startsWith("screen:")?String(qe.id).slice(7):null;W==="screen"?Ne?Ne!==ge.id&&Jn(Ne):Ns():Ne?Jn(Ne):W==="orbit"&&i&&i(qe?qe.id:null)}ue=null,oe=!1,Fs=!0,_n(),M.style.cursor=C?"pointer":"grab"};M.addEventListener("pointermove",Bt),M.addEventListener("pointerleave",lt),M.addEventListener("pointerdown",zt),M.addEventListener("pointerup",ht);let Lt=F=>{W!=="screen"||F.ctrlKey||F.metaKey||F.altKey||F.key!=="ArrowLeft"&&F.key!=="ArrowRight"||(F.preventDefault(),F.stopPropagation(),X||Rr(F.key==="ArrowLeft"?-1:1))};n.addEventListener("keydown",Lt);function Dt(F){let ve=F;for(;ve.parent;)ve=ve.parent;return!!T&&ve===T.scene}let xn=new P,ot=new P,wn=new un,Gt=new _t,ri=new Ei;function Dn(F){if(!N)return;let ve=Q;if(!ve||ve.userData.noHighlight||!Dt(ve)){N.visible=!1;return}ve.updateWorldMatrix(!0,!1),ve.geometry?(ve.geometry.boundingBox||ve.geometry.computeBoundingBox(),ve.geometry.boundingBox.getSize(xn),ve.geometry.boundingBox.getCenter(ot),xn.multiplyScalar(1.06).addScalar(.03),Gt.compose(ot,wn.identity(),xn),N.matrix.multiplyMatrices(ve.matrixWorld,Gt)):(ri.setFromObject(ve),ri.getSize(xn).multiplyScalar(1.06).addScalar(.03),ri.getCenter(ot),N.matrix.compose(ot,wn.identity(),xn)),N.matrixWorldNeedsUpdate=!0,N.material.opacity=h?.85:.62+.28*(.5+.5*Math.sin(F*5)),N.visible=!0}function Bs(){return m!=="auto"?m:!!X||O||!!ue||!!De.log||de.easing||Hn.active()||ge.moving||performance.now()-me<900||T&&T.busy()?sA:rA}let fi=0,pi=!1,Xt=0,yn=0,Ln=0,xt={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Tn=!0,Pi=typeof document>"u"||!document.hidden;function oo(){xt.frames=0,xt.ticks=0,xt.t=0,xt.capTime=0,xt.cpu=0}function gh(){let F=xt.frames/xt.t,ve=xt.ticks/xt.t,Be=xt.capTime/xt.t,qe=Math.max(1,Math.min(Be>0?Be:ve,ve)),Ne=F<qe*.85,ct=cc[x];Ne?(xt.good=0,xt.slow+=1,xt.slow>=2&&ne>ct.minScale&&(ne=Math.max(ct.minScale,Math.round((ne-.1)*100)/100),xt.slow=0,be())):(xt.slow=0,F>=qe*.95&&(xt.good+=1),xt.good>=5&&ne<1&&(ne=Math.min(1,Math.round((ne+.05)*100)/100),xt.good=0,be())),g.poll(),s&&s({fps:F,target:qe,slow:Ne,scale:ne,minScale:ct.minScale,cpuMs:xt.frames?xt.cpu/xt.frames:0,gpuMs:_?g.take():null,gpuTimer:g.supported,calls:xt.calls,triangles:xt.tris,width:Math.round(K*ee*ne),height:Math.round(te*ee*ne),cap:m}),oo()}function fc(F){if(!pi)return;fi=requestAnimationFrame(fc);let ve=Math.max(0,(F-Xt)/1e3);Xt=F,xt.ticks+=1,xt.t+=ve;let Be=Bs();if(xt.capTime+=Be*ve,xt.t>=1&&gh(),Be>0){let ct=1e3/Be,tn=F-yn;if(tn<ct-1.5)return;yn=tn<ct*2?yn+ct:F}else yn=F;let qe=performance.now(),Ne=Math.min(.1,Math.max(0,(F-Ln)/1e3));if(Ln=F,V+=Ne,X){X.t+=Ne;let ct=as(Math.min(1,X.t/X.d));if(b.position.lerpVectors(X.p0,X.p1,ct),$(Yl(X.yaw0,X.yaw1,ct),Xi(X.pitch0,X.pitch1,ct)),X.t>=X.d){let tn=X;X=null,tn.mode==="look"?Hn.sync():tn.mode==="orbit"&&S.target.copy(tn.target)}}else if(O&&T){if(Y-=Ne,Y<=0){Y=.4;let ct=T.focus(he);ct||he.fromArray(T.presets.overview.target),ct!==Z&&(Z=ct,q=1.6,o&&o(ct))}if(ie.subVectors(b.position,S.target),S.target.lerp(he,1-Math.exp(-2.4*Ne)),q>0){if(q-=Ne,!le){let ct=Ge("overview");le=ct.pos.distanceTo(ct.target)}ie.setLength(jt(ie.length(),Z?6.8:le,2,Ne))}b.position.copy(S.target).add(ie)}if(X||(W==="orbit"?(Je(Ne),J(),S.update(),A()):W==="screen"?ge.def&&es(Ne):Hn.update(Ne)),j(Ne),T&&T.update(Ne,V,w),ks-=Ne,Fs&&ks<=0){ks=.08,Fs=!1;let ct=hi&&!ue?ce(hi):null;ct&&W==="screen"&&ct.id===`screen:${ge.id}`&&(ct=null);let tn=ct?ct.id:null;Q=ct?ct.obj:null,ue||(M.style.cursor=tn?"pointer":"grab"),(tn||C)&&(C=tn,t&&t(tn?{id:tn,x:hi.x,y:hi.y}:null))}Dn(V),Fe(),p.info.reset(),_&&g.begin(),R&&T&&(w.updateMatrixWorld(),T.prerender(w),R.render(T.scene,w,h?0:V)),_&&g.end(),xt.calls=p.info.render.calls,xt.tris=p.info.render.triangles,Ho(),xt.frames+=1,xt.cpu+=performance.now()-qe,Ke||(Ke=!0,l&&l())}function zs(){let F=!He&&!Ze&&Tn&&Pi&&K>1&&te>1;F&&!pi?(pi=!0,Xt=yn=Ln=performance.now(),oo(),fi=requestAnimationFrame(fc),a&&a(!0)):!F&&pi&&(pi=!1,cancelAnimationFrame(fi),a&&a(!1))}let ao=new ResizeObserver(()=>{ke(),zs()});ao.observe(n);let Vo=typeof IntersectionObserver=="function"?new IntersectionObserver(F=>{Tn=F.some(ve=>ve.isIntersecting),zs()}):null;Vo&&Vo.observe(n);let pc=()=>{Pi=!document.hidden,zs()};document.addEventListener("visibilitychange",pc);let se=F=>{F.preventDefault(),Ze=!0,zs(),r&&r("context-lost")},it=()=>{Ze=!1,H(),pe(),zs()};M.addEventListener("webglcontextlost",se),M.addEventListener("webglcontextrestored",it);function bn(){if(!He){He=!0,pi=!1,cancelAnimationFrame(fi),ao.disconnect(),Vo&&Vo.disconnect(),document.removeEventListener("visibilitychange",pc),M.removeEventListener("pointermove",Bt),M.removeEventListener("pointerleave",lt),M.removeEventListener("pointerdown",zt),M.removeEventListener("pointerup",ht),M.removeEventListener("webglcontextlost",se),M.removeEventListener("webglcontextrestored",it),n.removeEventListener("wheel",ut,{capture:!0}),n.removeEventListener("keydown",Lt),S.dispose(),Hn.dispose();try{g.dispose(),H()}finally{U.dispose(),p.dispose(),p.forceContextLoss(),M.remove(),y.remove()}}}try{ke(!0),pe(),Pe("overview")}catch(F){throw bn(),F}return zs(),{setState(F){z=F,T&&T.setState(F)},setLive(F){D={...D||{},...F},T&&T.setLive(F)},setDemo(F){d=!!F,T&&T.setDemo(d)},resetState(){z=null,T&&T.resetState()},getQuality:()=>x,autoQuality:()=>f,setQuality(F){!cc[F]||F===x||(x=F,Q=null,H(),pe())},getFrameCap:()=>m,setFrameCap(F){za.includes(F)&&(m=F)},getLook:()=>B,setLook(F){!Po.includes(F)||F===B||(B=F,T&&T.setLook(F)&&(k(),Re()),_n())},getBrightness:()=>re,setBrightness(F){re=st(Number(F)||gn.initial,gn.min,gn.max),T&&(T.setBrightness(re),k()),_n()},setPerfDetail(F){_=!!F&&g.supported},setCameraPreset(F){O=!1,Ue(F),_n()},getMode:()=>W,setMode(F){!Xp.includes(F)||F===W||(X=null,F==="look"?we("look"):ye(),_n())},screens:()=>Oe().map(F=>F.id),getScreen:()=>ge.id,focusScreen:F=>Jn(F),stepScreen(F){W==="screen"&&!X&&Rr(F<0?-1:1)},exitScreen:Ns,setFollow(F){F&&W==="screen"&&(X=null,we(ge.back?ge.back.mode:"orbit")),F&&W!=="orbit"&&($r(b.position)==="hall"?ye():Pe("overview")),O=!!F,Z=void 0,Y=0,O&&(X=null)},setLabels(F){Le=Array.isArray(F)?F:[],Os()},setLabelsVisible(F){tt=!!F,y.style.display=tt?"":"none"},stats:()=>T?T.stats():null,dockInfo:()=>T?T.dockInfo():null,dispose:bn}}var Tr=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),gA=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:Tr(3,"a"),new_string:Tr(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:Tr(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},.6,!1,{agent:{name:"a11y-reviewer",label:"Review chart accessibility",after:16}}],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:Tr(6,"c"),new_string:Tr(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:Tr(4,"v"),new_string:Tr(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:Tr(2,"b"),new_string:Tr(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:140,o:120,tools:[["workflow",{meta:{name:"verify-forecast"}},11,!1,{workflow:{name:"verify-forecast",agents:[["Check API error paths","Verify",6.5],["Check chart contrast","Verify",8],["Check unit conversions","Verify",9.5,"failed"],["Summarize findings","Report",10.6]]}}],["subagent",{description:"Draft release notes"},.6,!1,{agent:{name:"notes-writer",label:"Draft release notes",after:13}}]]},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],dc={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function $p(n,e,t){let i=n.clock+Math.max(0,e),s=n.later.length;for(;s>0&&n.later[s-1].at>i;)s--;n.later.splice(s,0,{at:i,item:t})}function*uc(n,e){let t=e;for(;;){for(;n.later.length&&n.later[0].at<=n.clock+1e-9;)yield n.later.shift().item;if(t<=1e-9)return;let i=n.later.length?Math.min(t,n.later[0].at-n.clock):t;yield{wait:i},n.clock+=i,t-=i}}function*xA(n,e){let t=e.extra;if(t){if(t.agent){let i=`demo-agent-${n.agents++}`;yield{event:"subagent/catalog",data:{version:3,childId:i,mode:"one-shot",label:t.agent.label,name:t.agent.name}};let s=`${t.agent.label}: done`;$p(n,t.agent.after,{event:"user/message",data:{role:"user",content:[{type:"text",text:s}],source:{kind:"subagent-settled",form:"notice",summary:s,stopReason:t.agent.stop||"completed",senderSessionId:i}}})}if(t.workflow){let i=`demo-run-${n.runs++}`;e.runId=i,yield{event:"tool-workflow/run-start",data:{runId:i,name:t.workflow.name}},t.workflow.agents.forEach(([s,r,o,a],l)=>{$p(n,.3*(l+1),{event:"tool-workflow/agent-start",data:{runId:i,seq:l,label:s,phase:r,childId:`${i}-agent-${l}`}}),$p(n,o,{event:"tool-workflow/agent-end",data:{runId:i,seq:l,outcome:a||"completed"}})})}}}function*yA(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:dc.provider,model:dc.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...dc}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),p=Math.max(3,Math.round(h/.12));for(let f=0;f<p;f++){let x=d*(.82+.36*Math.abs(Math.sin(f*1.7+s)));e.streamed+=u/p,yield{live:{phase:c,tps:x}},yield*uc(e,h/p)}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,p,f,x,m])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:p,secs:f,fail:x,extra:m}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield*xA(e,h),yield*uc(e,.08);let u=c.slice().sort((h,p)=>h.secs-p.secs),d=.08*c.length;for(let h of u){let p=Math.max(0,h.secs-d);p>0&&(yield*uc(e,p)),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),h.runId&&(yield{event:"tool-workflow/run-end",data:{runId:h.runId,stopReason:"completed"}}),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield*uc(e,.35)}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*vA(n){for(;;)for(let e of gA)yield*yA(e,n),yield*uc(n,2.8),n.ctx>9e5&&(n.ctx=42e4)}function Ny({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0,clock:0,later:[],agents:0,runs:0},s=er(dc.provider,dc.model),r=vA(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Yd(u.usage);return h&&(i.balance=Math.max(0,i.balance-Kd(h,s,Sr(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,p=0;for(;p<u;){let{value:f}=r.next();f.wait?h+=f.wait*1e3*3:f.event&&(d.push(l(f,h)),f.event==="turn/end"&&p++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:p}=r.next();if(p.wait){d.length&&n?.(d),o=setTimeout(u,p.wait*1e3/t);return}p.event?d.push(l(p,Date.now())):p.live&&e?.(c(p.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var _A="/api/dsh-work-process-3d/balance";var bA=n=>n>=11904&&n<=40959||n>=44032&&n<=55215||n>=63744&&n<=64255||n>=65280&&n<=65519;function MA(n){if(typeof n!="string"||!n)return 0;let e=0,t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<=32||(s>=55296&&s<=56319?(e++,i++):bA(s)?e++:t++)}return e*.6+t*.3}var Oy=n=>n?n.kind==="tool-call"?n.argsRaw:n.kind==="text"||n.kind==="reasoning"?n.text:null:null;function Uy({windowMs:n=2e3}={}){let e="",t=[],i=0,s="idle",r=[],o=0;function a(){e="",t=[],i=0,s="idle",r.length=0,o=0}function l(c){for(;r.length&&c-r[0][0]>n;)o-=r.shift()[1];if(!r.length)return o=0,0;let u=Math.max(500,Math.min(n,c-i));return o*1e3/u}return{push(c,u){let d=c&&Array.isArray(c.blocks)?c.blocks:null;if(!d)return a(),{phase:s,tps:0};let h=`${c.turn}:${c.step}`;h!==e&&(a(),e=h);let p=0;for(let x=0;x<d.length;x++){let m=Oy(d[x]);if(typeof m!="string")continue;let g=t[x]||0;m.length>g&&(p+=MA(m.slice(g))),t[x]=m.length}p>0&&(!r.length&&!i&&(i=u),r.push([u,p]),o+=p);let f=d.length?d[d.length-1]:null;return s=!f||Oy(f)==null?"idle":f.kind==="reasoning"?"reasoning":"generating",{phase:s,tps:l(u)}},tick(c){return{phase:s,tps:e?l(c):0}},reset:a}}var Ha=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0?n:null;function Fy(n,e){if(!n)return null;if(!e||typeof e!="object")return n;let t=Ha(e.projectedTokens),i=t??Ha(e.pressureTokens),s=Ha(e.contextWindow);return i==null&&!s?n:{...n,contextTokens:i??n.contextTokens,contextWindow:s||n.contextWindow}}var hc={balance:null,currency:"CNY",toppedUp:null,granted:null,source:null},SA=new Set(["ready","failed","signed-out","unavailable"]);function wA(n){if(!n||n.ok!==!0)return{status:"failed",...hc};let e=SA.has(n.status)?n.status:"failed",t=Array.isArray(n.wallets)?n.wallets.filter(s=>s&&typeof s.currency=="string"):[],i=t.find(s=>s.currency==="CNY")||t[0];return e!=="ready"||!i||Ha(i.total)==null?{status:e==="ready"?"unavailable":e,...hc}:{status:"ready",balance:i.total,currency:i.currency,toppedUp:Ha(i.toppedUp),granted:Ha(i.granted),source:n.source==="account"||n.source==="api-key"?n.source:null}}function EA(n=typeof window<"u"?window:void 0){let e=n&&n.__DSH_BOOT__,t=e&&e.release&&e.release.version;return typeof t=="string"?t:""}async function ky({lang:n="en",version:e=EA(),fetchImpl:t,signal:i}={}){let s=t||(typeof fetch=="function"?fetch:null);if(!s)return{status:"unavailable",...hc};let r={version:e,locale:n==="zh"?"zh-CN":"en-US",timezoneOffsetSeconds:-new Date().getTimezoneOffset()*60},o;try{o=await s(_A,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),credentials:"same-origin",signal:i})}catch(l){if(i&&i.aborted)throw l;return{status:"failed",...hc}}if(o.status===404)return{status:"unavailable",...hc};let a=null;try{a=await o.json()}catch{a=null}return wA(a)}var By=`
.dwp3d-root{position:relative;width:100%;height:100%;min-height:320px;overflow:hidden;background:#0a0b0e;color:#e6e9ef;font:inherit;font-size:12px;line-height:1.4;container-type:inline-size;container-name:dwp3d;isolation:isolate}
.dwp3d-root.fail{background:var(--dsw-alias-bg-base,#0a0b0e);color:var(--dsw-alias-label-primary,#e6e9ef)}
.dwp3d-root *{box-sizing:border-box}
.dwp3d-stage{position:absolute;inset:0;user-select:none;-webkit-user-select:none;outline:none}
.dwp3d-stage:focus-visible{box-shadow:inset 0 0 0 2px rgba(77,107,254,.85)}
.dwp3d-labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dwp3d-label{position:absolute;left:0;top:0;display:flex;align-items:center;gap:6px;padding:3px 9px 3px 7px;border-radius:999px;background:rgba(12,16,24,.68);border:1px solid rgba(255,255,255,.13);box-shadow:0 1px 6px rgba(0,0,0,.2);white-space:nowrap;opacity:0;transition:opacity .25s;will-change:transform}
.dwp3d-label:before{content:"";flex:none;width:7px;height:7px;border-radius:50%;background:var(--dwp3d-accent,#4d6bfe);box-shadow:0 0 0 2px rgba(255,255,255,.08)}
.dwp3d-label[data-state=working]:before{background:#6f9bff;box-shadow:0 0 8px #6f9bff;animation:dwp3d-label-pulse 1.1s ease-in-out infinite}
.dwp3d-label[data-state=error]:before{background:#ff5a4f;box-shadow:0 0 8px #ff5a4f}
.dwp3d-label:after{content:"";position:absolute;left:50%;bottom:-6px;width:1px;height:6px;background:rgba(255,255,255,.35)}
.dwp3d-label-title{font-size:11.5px;font-weight:600;color:#eef2fa}
.dwp3d-label-sub{font-size:10px;letter-spacing:.06em;color:#93a4c6;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace}
@keyframes dwp3d-label-pulse{50%{opacity:.4}}
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
  .dwp3d-label[data-state=working]:before{animation:none}
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
`;var{useEffect:Qi,useRef:fn,useState:pn,useReducer:Zy,useCallback:Ci}=xe,TA="workProcess3d",Jy="dwp3d.source",AA=5e3,RA=12e4,CA=4e3,PA=250,Yp="dwp3d.quality",zy="dwp3d.hint",Hy="dwp3d.hint.look",IA=["overview","fuel","engine","stations","dock","products","living","balcony"],LA=["raw","normal","gold","bad"],Gy={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},Vy={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},DA=200,NA=4,mh=3,jy="dwp3d.fps",Wy="dwp3d.perf",Qy="dwp3d.look",ev="dwp3d.brightness";function so(n){try{return window.localStorage.getItem(n)}catch{return null}}function Ar(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function Xy(){let n=so(Yp);return zo.includes(n)?n:null}function OA(){let n=so(jy),e=n==null?"auto":Number(n);return za.includes(e)?e:"auto"}function UA(){return typeof xe.useId=="function"?xe.useId():"dwp3d"}function FA(){let n=so(Qy);return Po.includes(n)?n:Kr}function kA(){let n=Number(so(ev));return Number.isFinite(n)&&n>=gn.min&&n<=gn.max?n:gn.initial}function BA(){return so(Jy)==="demo"?"demo":"live"}var Ga=class extends xe.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){this.props.onError&&this.props.onError(e)}render(){return this.state.failed?null:this.props.children}};function $y({use:n,name:e,onValue:t}){let i=n(e);return Qi(()=>t(i),[i,t]),null}var zA=n=>n?`${n.running?1:0}${n.blank?1:0}`:"";function HA({use:n,onValue:e}){let t=n(zA);return Qi(()=>e(t),[t,e]),null}var GA=n=>n&&n.legacy&&n.legacy.partial||null;function VA({use:n,onValue:e}){let t=n(GA);return Qi(()=>e(t),[t,e]),null}function WA(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function XA({t:n,perf:e}){if(!e)return xe.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},xe.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),on(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return xe.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>xe.createElement("div",{key:s,className:"dwp3d-perf-row"},xe.createElement("span",null,s),xe.createElement("b",null,r))))}function $A(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":n==="dock"?"dock":"products":null}function qA(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function YA(n){let[e,t]=Zy(i=>i+1,0);return Qi(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Kp=(n,e)=>n&&(n[e]||n.en)||"",qp=(n,e)=>`${Kp(n,e)} · ${n.code}`;function qy(n){let e=t=>({id:t,text:Kp(Yt[t],n),sub:Yt[t].code});return[e("tank"),e("engine"),e("robot"),e("dock"),...kd.map(t=>({id:`station:${t}`,text:Kp(vi[t],n),sub:vi[t].code})),e("loadport"),e("stocker"),e("living")]}var KA=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework",ZA={loading:"bal.loading","signed-out":"bal.signedOut",failed:"bal.failed",unavailable:"bal.unavailable"},Yy=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now();function tv(n,e,t,i){return e!=null?En(e,t):n(ZA[i]||"bal.unavailable")}function Ky(n,e){let t=typeof e.fileCount=="number"?e.fileCount:e.files.length,i=[[n("status."+KA(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:t})]];for(let r of e.files.slice(0,6))i.push([up(r.path),`+${r.added} −${r.removed}`]);t>6&&i.push(["…",`+${t-6}`]);let s=(e.endedAt||Date.now())-e.startedAt;return i.push(["",n("hover.batchCost",{cost:En(e.cost),time:Fx(s)})]),i}function JA(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:qp(Yt[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:En(d)});switch(n){case"tank":{let d=[[e.demo?t("m.balanceDemo"):t("m.balance"),tv(t,e.balance,e.currency,s.balanceStatus)]];return!e.demo&&e.balance!=null&&s.toppedUp!=null&&(d.push([t("m.toppedUp"),En(s.toppedUp,e.currency)]),d.push([t("m.granted"),En(s.granted||0,e.currency)])),!e.demo&&e.balance!=null&&s.balanceSource==="api-key"&&d.push(["",t("m.balanceViaKey")]),o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${ds(l.contextRatio)} · ${on(i.contextTokens)} / ${on(i.contextWindow)}`],[t("row.miss"),on(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),on(i.totals.write)]),d.push([t("row.hit"),on(i.totals.hit)],[t("row.output"),on(i.totals.output)],[t("row.reasoning"),on(i.totals.reasoning)],[t("row.cost"),En(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"dock":{let d=i.agents||[];if(!d.length)return c("dock",[["",t("dock.none")]]);let h=g=>d.filter(_=>_.status===g).length,p=d.filter(g=>g.status==="running"),f=[[t("dock.running"),String(p.length)],[t("dock.done"),String(h("done"))]];h("error")&&f.push([t("dock.failed"),String(h("error"))]),h("stopped")&&f.push([t("dock.stopped"),String(h("stopped"))]),e.dock&&e.dock.overflow&&f.push([t("dock.queued"),String(e.dock.overflow)]);let x=i.workflows||[],m=x.filter(g=>g.status==="running").pop()||x[x.length-1];m&&f.push([t("dock.workflow"),`${m.name||"—"}${m.phase?` · ${m.phase}`:""} · ${m.done+m.failed}/${m.agents}`]);for(let g of p.slice(-3))f.push(["",g.label||g.name||g.id]);return c("dock",f)}case"stocker":{let d=i.turns.filter(p=>p.status!=="running"),h=d.filter(p=>p.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${qp(Yt.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:Ky(t,d)}}default:break}if(n.startsWith("screen:")){let d=n.slice(7),h={flow:"screen.descFlow",main:"screen.descMain",cost:"screen.descCost"}[d];return h?{title:t("screen."+d),body:t(h),rows:[["",t("screen.click")]]}:null}if(n.startsWith("station:")){let d=n.slice(8),h=vi[d];if(!h)return null;let p=i.calls.filter(_=>_.kind===d),f=p.filter(_=>_.status==="running").pop(),x=p[p.length-1],m=[];f?m.push([t("hover.working"),f.label||f.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=p.filter(_=>_.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:qp(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(p=>p.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?Ky(t,h):[]}}return null}function jA({hover:n,data:e,rootRef:t}){let i=JA(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return xe.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},xe.createElement("h4",null,i.title),i.body?xe.createElement("p",null,i.body):null,i.rows.length?xe.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>xe.createElement("div",{className:"row",key:h},xe.createElement("span",null,u),xe.createElement("span",null,d)))):null)}function QA({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return xe.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},xe.createElement("div",{className:"k"},n.k),xe.createElement("div",{className:"v"},n.v),n.s?xe.createElement("div",{className:"s"},n.s):null,n.bar!=null?xe.createElement("div",{className:"dwp3d-bar"},xe.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function e3({t:n,calls:e}){return xe.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},xe.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=Vy[t.status]?t.status:"running",s=Vy[i],r=vi[t.kind]||vi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return xe.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},xe.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),xe.createElement("span",{className:"dwp3d-sr"},n("call."+i)),xe.createElement("code",null,r.code),xe.createElement("span",{className:"l"},o))}):xe.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function t3({t:n,hintOn:e,hintKey:t,onDismiss:i}){return xe.createElement("div",{className:"dwp3d-panel dwp3d-legend"},xe.createElement("div",{className:"dwp3d-legend-row"},xe.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),LA.map(s=>xe.createElement("span",{className:"dwp3d-legend-item",key:s},xe.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?xe.createElement("div",{className:"dwp3d-hint"},xe.createElement("span",null,n(t)),xe.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}function n3({t:n,id:e,ids:t,onStep:i,onBack:s}){let r=Math.max(0,t.indexOf(e)),o=t.length>1;return xe.createElement("div",{className:"dwp3d-screenbar-wrap"},xe.createElement("div",{className:"dwp3d-panel dwp3d-screenbar",role:"toolbar","aria-label":n("screen.bar")},xe.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.prev"),"aria-label":n("screen.prev"),onClick:()=>i(-1)},"◀"),xe.createElement("div",{className:"dwp3d-screenbar-name","aria-live":"polite"},xe.createElement("b",null,n("screen."+e)),xe.createElement("span",null,n("screen.count",{i:r+1,n:t.length}))),xe.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.next"),"aria-label":n("screen.next"),onClick:()=>i(1)},"▶"),xe.createElement("span",{className:"sep","aria-hidden":"true"}),xe.createElement("button",{type:"button",className:"dwp3d-btn",onClick:s},n("screen.back"))),xe.createElement("p",{className:"dwp3d-screenbar-hint"},n("screen.hint")))}var i3=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function nv(n){let{ctx:e}=n,t=YA(e),i=qA(e),s=n.tBound||n.t,r=Ci((se,it)=>{let bn=typeof s=="function"?s(se):se,F=typeof bn=="string"&&bn?bn:se;return it?kx(F,it):F},[s]),o=fn(r);o.current=r;let a=fn(i);a.current=i;let l=fn(null),c=fn(null),u=fn(null),d=fn(Qd()),h=fn({phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"loading"}),p=fn(0),f=fn(!1),x=fn(!0),m=fn(0),g=fn({settle:mh,low:0}),[,_]=Zy(se=>se+1,0),[M,y]=pn(0),[b,w]=pn(()=>Xy()!=null),v=fn(b),[S,T]=pn(()=>Xy()||"medium"),R=fn(S),[N,U]=pn(OA),z=fn(N),[D,K]=pn(()=>so(Wy)==="on"),te=fn(D);te.current=D;let[ee,ne]=pn(null),[X,W]=pn(FA),O=fn(X),[Z,Y]=pn(kA),q=fn(Z),[le,he]=pn(!1),ie=UA(),[fe,Le]=pn("overview"),[tt,He]=pn(!1),[Ze,Ke]=pn(!0),me=fn(Ze);me.current=Ze;let[V,B]=pn(!0),[re,G]=pn(()=>so(zy)!=="off"),[Re,Fe]=pn(()=>so(Hy)!=="off"),[H,pe]=pn("orbit"),[Te,k]=pn(null),[et,pt]=pn(!1),[Mt,Ce]=pn(null),[A,J]=pn(!0),[de,I]=pn(null),[E,j]=pn(null),[_e,be]=pn(null),ke=typeof n.useProjection=="function"?n.useProjection:null,Ge=typeof n.useSession=="function"?n.useSession:null,Se=typeof n.useChat=="function"?n.useChat:null,[Me,Ve]=pn(BA),[$,we]=pn(!1),ye=!!ke&&!$,Pe=Me==="demo"||!ye,Ue=fn(Pe);Ue.current=Pe;let We=n.sessionId||"",[ge,It]=pn(0),[Oe,gt]=pn(!1),[Rt,Ye]=pn(!1),Kt=fn(void 0),Sn=fn(void 0),Jn=fn(""),Ds=fn(null);Ds.current||(Ds.current=Uy());let Ns=fn({status:"loading",balance:null,currency:"CNY",toppedUp:null,granted:null,source:null}),Rr=fn(0),es=fn(null),si=Ci(()=>{p.current||(p.current=setTimeout(()=>{p.current=0,x.current?_():f.current=!0},DA))},[]),zi=Ci(se=>{be(se),clearTimeout(m.current),m.current=setTimeout(()=>be(null),3500)},[]),_n=Ci(se=>{zo.includes(se)&&(R.current=se,T(se),g.current={settle:mh,low:0},u.current&&u.current.setQuality(se))},[]),nr=fn({running:void 0,blank:!1}),Hn=Ci(()=>{Ue.current||(d.current=Fy(Kt.current,Sn.current)||Qd(),u.current&&u.current.setState(d.current),si())},[si]),Os=Ci(se=>{Ns.current=se,!Ue.current&&(Object.assign(h.current,{balance:se.balance,currency:se.currency,balanceStatus:se.status,toppedUp:se.toppedUp,granted:se.granted,balanceSource:se.source}),u.current&&u.current.setLive({balance:se.balance,currency:se.currency,balanceStatus:se.status}),si())},[si]),bi=Ci(()=>{if(Ue.current)return;es.current&&es.current.abort();let se=typeof AbortController=="function"?new AbortController:null;es.current=se,ky({lang:a.current,signal:se?se.signal:void 0}).then(it=>{se&&se.signal.aborted||(es.current=null,!(it.status!=="ready"&&it.status!=="signed-out"&&Ns.current.balance!=null)&&Os(it))},()=>{})},[Os]),Us=Ci(se=>{clearTimeout(Rr.current),Rr.current=setTimeout(bi,se)},[bi]),hs=Ci(se=>{Kt.current=se,se&&gt(!0),Hn();let it=se&&Array.isArray(se.turns)?se.turns:[],bn=it.length?it[it.length-1]:null,F=bn?`${bn.no}:${bn.status}`:"";Jn.current&&F!==Jn.current&&bn&&bn.status!=="running"&&Us(CA),Jn.current=F},[Hn,Us]),ro=Ci(se=>{Sn.current=se,Hn()},[Hn]),Ho=Ci(se=>{let it=se?se[0]==="1":void 0;nr.current={running:it,blank:se?se[1]==="1":!1},!Ue.current&&(h.current.running=it,u.current&&u.current.setLive({running:it}),si())},[si]),ts=Ci(se=>{if(Ue.current)return;let it=h.current;it.phase===se.phase&&Math.abs((it.tps||0)-se.tps)<.05||(it.phase=se.phase,it.tps=se.tps,u.current&&u.current.setLive({phase:se.phase,tps:se.tps}),si())},[si]),Go=Ci(se=>{ts(Ds.current.push(se,Yy()))},[ts]),hi=Ci(se=>{we(!0),typeof console<"u"&&console.warn("[dsh-work-process-3d] live data unavailable:",se)},[]),Fs=Ci(se=>{se!=="live"&&se!=="demo"||(Ve(se),Ar(Jy,se==="demo"?"demo":null))},[]);Qi(()=>{let se=c.current;if(!se)return;let it=null,bn=!1,F=0;J(!0),I(null),j(null),Ce(null),pe("orbit"),k(null);let ve=Ne=>{I(Hs=>Hs&&Hs.kind==="lost"?null:Hs),te.current&&ne(Ne);let ct=g.current;if(ct.settle>0){ct.settle-=1;return}if(v.current)return;let tn=Ne&&Ne.scale<=Ne.minScale+.001;if(ct.low=Ne&&Ne.slow&&tn?ct.low+1:0,ct.low<NA)return;ct.low=0;let fs=zo.indexOf(R.current);if(fs<=0)return;let lo=zo[fs-1];_n(lo),zi(o.current("quality.downgraded",{q:o.current(`quality.${lo}`)}))},Be=()=>{try{it=Dy(se,{quality:v.current?R.current:"auto",fps:z.current,look:O.current,brightness:q.current,demo:Ue.current,onHover:Ce,onSelect:Ne=>{let ct=$A(Ne);!ct||!it||(it.setCameraPreset(ct),Le(ct),He(!1))},onPerf:ve,onError:(Ne,ct)=>{if(Ne==="shader"){j(tn=>tn||String(ct||""));return}Ne==="context-lost"&&(Ce(null),I({kind:"lost"}))},onActive:Ne=>{x.current=Ne,Ne&&f.current&&(f.current=!1,_())},onReady:()=>J(!1),onMode:Ne=>{pe(Ne),(Ne==="look"||Ne==="screen")&&He(!1)},onScreen:Ne=>{k(Ne),Ne&&Ce(null)}})}catch(Ne){for(;se.firstChild;)se.removeChild(se.firstChild);J(!1),I({kind:"webgl",msg:String(Ne&&Ne.message||Ne)});return}u.current=it,R.current=it.getQuality(),T(R.current),g.current={settle:mh,low:0},it.setLabels(qy(a.current)),it.setLabelsVisible(me.current),it.setPerfDetail(te.current),It(Ne=>Ne+1),_()},qe=requestAnimationFrame(()=>{F=requestAnimationFrame(()=>{bn||Be()})});return()=>{bn=!0,cancelAnimationFrame(qe),cancelAnimationFrame(F),it&&it.dispose(),u.current=null,clearTimeout(p.current),p.current=0}},[M,_n,si,zi]),Qi(()=>{let se=u.current;if(!se)return;if(se.resetState(),se.setDemo(Pe),Ds.current.reset(),Pe){let bn=()=>u.current===se,F=Ny({onEvents:ve=>{bn()&&(d.current=Lp(d.current,ve),se.setState(d.current),si())},onLive:ve=>{bn()&&(Object.assign(h.current,ve),se.setLive(ve),si())}});return d.current=Lp(Qd(),F.prefill(2)),h.current={phase:"idle",tps:0,balance:F.balance,currency:"CNY",balanceStatus:"ready",running:void 0},se.setState(d.current),se.setLive(h.current),F.start(),_(),()=>F.stop()}let it=Ns.current;h.current={phase:"idle",tps:0,balance:it.balance,currency:it.currency,balanceStatus:it.status,toppedUp:it.toppedUp,granted:it.granted,balanceSource:it.source,running:nr.current.running},se.setLive(h.current),Jn.current="",Hn(),_()},[ge,Pe,We,si,Hn]),Qi(()=>{if(Pe)return;bi();let se=setInterval(()=>{let it=typeof document<"u"&&document.visibilityState==="hidden";x.current&&!it&&bi()},RA);return()=>{clearInterval(se),clearTimeout(Rr.current),es.current&&es.current.abort(),es.current=null}},[Pe,bi]),Qi(()=>{if(Pe)return;let se=setInterval(()=>ts(Ds.current.tick(Yy())),PA);return()=>clearInterval(se)},[Pe,ts]),Qi(()=>{if(Ye(!1),Pe||Oe)return;let se=setTimeout(()=>Ye(!0),AA);return()=>clearTimeout(se)},[Pe,Oe]),Qi(()=>()=>clearTimeout(m.current),[]),Qi(()=>{u.current&&u.current.setLabels(qy(i))},[i,t]),Qi(()=>{u.current&&u.current.setLabelsVisible(Ze)},[Ze]),Qi(()=>{let se=()=>pt(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",se),()=>document.removeEventListener("fullscreenchange",se)},[]);let ks=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},C=se=>{let it=u.current;it&&(it.setCameraPreset(se),Le(se),He(!1),it.getMode()==="look"&&ks())},Q=()=>{let se=u.current;if(se){if(se.getScreen()){se.exitScreen();return}se.focusScreen("main")&&(He(!1),ks())}},ue=se=>{u.current&&u.current.stepScreen(se)},oe=()=>{u.current&&u.current.exitScreen()},ce=()=>{let se=!tt;He(se),u.current&&u.current.setFollow(se)},De=()=>{let se=l.current;if(!se)return;let it=()=>zi(o.current("error.fullscreen"));try{let bn=document.fullscreenElement?document.exitFullscreen():se.requestFullscreen();bn&&typeof bn.catch=="function"&&bn.catch(it)}catch{it()}},at=se=>{if(se==="auto"){Ar(Yp,null),v.current=!1,w(!1),u.current&&_n(u.current.autoQuality());return}zo.includes(se)&&(Ar(Yp,se),v.current=!0,w(!0),_n(se))},$e=se=>{let it=se==="auto"?"auto":Number(se);za.includes(it)&&(z.current=it,U(it),Ar(jy,it==="auto"?null:String(it)),g.current={settle:mh,low:0},u.current&&u.current.setFrameCap(it))},Je=()=>{let se=!D;K(se),Ar(Wy,se?"on":null),se||ne(null),u.current&&u.current.setPerfDetail(se)},ut=se=>{Po.includes(se)&&(O.current=se,W(se),Ar(Qy,se===Kr?null:se),u.current&&u.current.setLook(se))},St=se=>{let it=Math.min(gn.max,Math.max(gn.min,Number(se)||gn.initial));q.current=it,Y(it),Ar(ev,Math.abs(it-gn.initial)<.001?null:String(it)),u.current&&u.current.setBrightness(it)},Bt=()=>{H==="look"?(Ar(Hy,"off"),Fe(!1)):(Ar(zy,"off"),G(!1))},lt=se=>{let it=u.current;it&&(it.setMode(se),pe(it.getMode()),se==="look"&&(He(!1),ks()))},zt=()=>y(se=>se+1),ht=d.current,Lt=h.current,Dt=th(ht),xn=er(ht.provider,ht.model),ot=Sr(Date.now()),wn=Lt.phase&&Lt.phase!=="idle"?Lt.phase:Lt.running===!1?"idle":ht.phase,Gt=typeof Lt.balance=="number"?Lt.balance:null,ri=Lt.currency||"CNY",Dn=Gt!=null&&xn&&ri!=="USD"?Zd(Gt,xn,ot):0,Bs=ht.turns.filter(se=>se.status!=="running"),fi=Bs.filter(se=>se.status==="ok").length,pi=Dt.contextRatio>=.8?"#ff5d5d":Dt.contextRatio>=.6?"#ffb347":"#4d6bfe",Xt=Lt.tps>.5&&(wn==="generating"||wn==="reasoning")?` · ${r("unit.tps",{n:Math.round(Lt.tps)})}`:"",yn=ht.totals.miss+ht.totals.write,Ln=ht.files,xt=[{id:"balance",k:r(Pe?"m.balanceDemo":"m.balance"),v:tv(r,Gt,ri,Lt.balanceStatus),s:Dn?r("m.balanceSub",{tokens:on(Dn)}):"",title:!Pe&&Gt!=null&&Lt.toppedUp!=null?r("m.balanceTitle",{topped:En(Lt.toppedUp,ri),granted:En(Lt.granted||0,ri)}):void 0},{id:"context",k:r("m.context"),v:ds(Dt.contextRatio),s:`${on(ht.contextTokens)} / ${on(ht.contextWindow)}`,bar:Dt.contextRatio,barColor:pi,title:r("m.contextTitle",{pct:ds(Dt.contextRatio),used:on(ht.contextTokens),window:on(ht.contextWindow)})},{id:"input",k:r("m.input"),v:on(Dt.prompt),s:r("m.inputSub",{rate:ds(Dt.hitRate),miss:on(yn)}),title:r("m.inputTitle",{total:on(Dt.prompt),hit:on(ht.totals.hit),rate:ds(Dt.hitRate),miss:on(yn),write:ht.totals.write>0?r("m.writeNote",{n:on(ht.totals.write)}):"",saved:En(ht.totals.savings)})},{id:"output",k:r("m.output"),v:on(ht.totals.output),s:r("m.outputSub",{n:on(ht.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:En(ht.totals.cost),s:r("m.costSub",{peak:En(ht.totals.costPeak),off:En(ht.totals.costOffPeak)}),title:r("m.costTitle",{cost:En(ht.totals.cost),requests:ht.totals.requests,peak:En(ht.totals.costPeak),off:En(ht.totals.costOffPeak),saved:En(ht.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(ht.tools.calls),s:r("m.toolsSub",{n:ht.tools.errors,rate:ds(Dt.toolSuccess)}),title:r("m.toolsTitle",{calls:ht.tools.calls,running:ht.tools.running,n:ht.tools.errors})},{id:"products",k:r("m.products"),v:`${Ln.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:Ln.added,r:Ln.removed,ok:fi,done:Bs.length}),title:r("m.productsTitle",{n:Ln.count,a:Ln.added,r:Ln.removed,ok:fi,done:Bs.length})},{id:"efficiency",k:r("m.efficiency"),v:`${Dt.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:En(Dt.costPerFile)}),title:r("m.efficiencyHint")}],Tn=ht.calls.slice(-5).reverse(),Pi=Mt&&Mt.id==="dock"&&u.current?u.current.dockInfo():null,oo={t:r,s:ht,live:Lt,lang:i,price:xn,peak:ot,m:Dt,phase:wn,balance:Gt,currency:ri,demo:Pe,dock:Pi},gh=!Pe&&!Oe&&Rt,fc=!Pe&&Oe&&ht.turnCount===0&&!ht.calls.length,zs=!!de&&de.kind==="webgl",ao=!A&&!zs,Vo=Te&&u.current?u.current.screens():[],pc=b?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return xe.createElement("div",{ref:l,className:`dwp3d-root${zs?" fail":""}`},xe.createElement("style",null,By),Pe?null:xe.createElement(xe.Fragment,null,xe.createElement(Ga,{onError:hi},xe.createElement($y,{use:ke,name:TA,onValue:hs})),xe.createElement(Ga,null,xe.createElement($y,{use:ke,name:"contextPressure",onValue:ro})),Ge?xe.createElement(Ga,null,xe.createElement(HA,{use:Ge,onValue:Ho})):null,Se?xe.createElement(Ga,null,xe.createElement(VA,{use:Se,onValue:Go})):null),xe.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),le?xe.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>he(!1)}):null,ao?xe.createElement("div",{className:"dwp3d-top"},xe.createElement("div",{className:"dwp3d-panel dwp3d-title"},xe.createElement("div",{className:"dwp3d-title-row"},xe.createElement("h2",null,r("title")),Pe?xe.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):xe.createElement("span",{className:"dwp3d-chip live",title:r("badge.liveHint")},r("badge.live")),ht.model?xe.createElement("span",{className:"dwp3d-chip"},`${ht.model}${ht.effort?` · ${ht.effort}`:""}`):null,xe.createElement("span",{className:"dwp3d-chip"},xe.createElement("i",{className:"dwp3d-dot",style:{color:Gy[wn]||Gy.idle},"aria-hidden":"true"}),`${r("phase."+wn)}${Xt}`)),Pe?xe.createElement("p",{className:"dwp3d-note"},r(ye?"badge.demoHint":$?"live.failed":"live.unsupported")):null,gh?xe.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"status"},r("live.missing")," ",xe.createElement("button",{type:"button",className:"dwp3d-link",onClick:()=>Fs("demo")},r("live.showDemo"))):null,fc?xe.createElement("p",{className:"dwp3d-note"},r("live.idle")):null,E?xe.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:E})):null),xe.createElement("div",{className:"dwp3d-right"},xe.createElement("div",{className:"dwp3d-panel dwp3d-tools"},xe.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},IA.map(se=>{let it=!tt&&!Te&&fe===se;return xe.createElement("button",{key:se,type:"button",className:`dwp3d-btn${it?" on":""}`,"aria-pressed":it,onClick:()=>C(se)},r("view."+se))}),xe.createElement("button",{type:"button",className:`dwp3d-btn${Te?" on":""}`,title:r("view.screensHint"),"aria-pressed":!!Te,onClick:Q},r("view.screens"))),xe.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},Xp.map(se=>xe.createElement("button",{key:se,type:"button",className:`dwp3d-btn${H===se?" on":""}`,title:r(`mode.${se}Hint`),"aria-pressed":H===se,onClick:()=>lt(se)},r("mode."+se)))),xe.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},xe.createElement("button",{type:"button",className:`dwp3d-btn${tt?" on":""}`,title:r("ctl.followHint"),"aria-pressed":tt,onClick:ce},r("ctl.follow")),xe.createElement("button",{type:"button",className:`dwp3d-btn${Ze?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":Ze,onClick:()=>Ke(se=>!se)},r("ctl.labels")),xe.createElement("button",{type:"button",className:`dwp3d-btn${V?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":V,onClick:()=>B(se=>!se)},r("ctl.panels")),xe.createElement("button",{type:"button",className:`dwp3d-btn${le?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":le,"aria-haspopup":"dialog",onClick:()=>he(se=>!se)},r("ctl.display")),i3()?xe.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":et,onClick:De},r(et?"ctl.exitFullscreen":"ctl.fullscreen")):null)),le?xe.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},xe.createElement("div",{className:"dwp3d-pop-row"},xe.createElement("span",{className:"dwp3d-pop-k"},r("source.label")),xe.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("source.label")},["live","demo"].map(se=>{let it=se==="demo"?Pe:!Pe,bn=se==="live"&&!ye;return xe.createElement("button",{key:se,type:"button",className:`dwp3d-btn${it?" on":""}`,"aria-pressed":it,disabled:bn,title:r(bn?"live.unsupported":"source."+se+"Hint"),onClick:()=>Fs(se)},r("source."+se))}))),xe.createElement("div",{className:"dwp3d-pop-row"},xe.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),xe.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},Po.map(se=>xe.createElement("button",{key:se,type:"button",className:`dwp3d-btn${X===se?" on":""}`,"aria-pressed":X===se,onClick:()=>ut(se)},r("look."+se))))),xe.createElement("div",{className:"dwp3d-pop-row"},xe.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-brightness`},r("ctl.brightness")),xe.createElement("input",{id:`${ie}-brightness`,className:"dwp3d-range",type:"range",min:gn.min,max:gn.max,step:gn.step,value:Z,onChange:se=>St(se.target.value)}),xe.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(Z*100)}%`),xe.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(Z-gn.initial)<.001,onClick:()=>St(gn.initial)},"↺")),xe.createElement("div",{className:"dwp3d-pop-row"},xe.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-quality`},r("ctl.quality")),xe.createElement("select",{id:`${ie}-quality`,className:"dwp3d-select",value:b?S:"auto",onChange:se=>at(se.target.value)},xe.createElement("option",{value:"auto"},pc),zo.map(se=>xe.createElement("option",{key:se,value:se},r("quality."+se))))),xe.createElement("div",{className:"dwp3d-pop-row"},xe.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),xe.createElement("select",{id:`${ie}-fps`,className:"dwp3d-select",value:String(N),title:r("ctl.fpsHint"),onChange:se=>$e(se.target.value)},za.map(se=>xe.createElement("option",{key:String(se),value:String(se)},WA(r,se))))),xe.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},xe.createElement("input",{type:"checkbox",checked:D,onChange:Je}),xe.createElement("span",null,r("ctl.perfShow")))):null,D?xe.createElement(XA,{t:r,perf:ee}):null)):null,xe.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},_e?xe.createElement("div",{className:"dwp3d-panel dwp3d-toast"},_e):null),ao&&Te?xe.createElement(n3,{t:r,id:Te,ids:Vo,onStep:ue,onBack:oe}):null,ao&&V&&!Te?xe.createElement("div",{className:"dwp3d-bottom"},xe.createElement("div",{className:"dwp3d-mid"},xe.createElement(e3,{t:r,calls:Tn}),xe.createElement(t3,{t:r,hintOn:H==="look"?Re:re,hintKey:H==="look"?"hint.look":"hint.controls",onDismiss:Bt})),xe.createElement("div",{className:"dwp3d-cards"},xt.map(se=>xe.createElement(QA,{key:se.id,card:se})))):null,ao&&Mt&&!Te?xe.createElement(jA,{hover:Mt,data:oo,rootRef:l}):null,A&&!de?xe.createElement("div",{className:"dwp3d-center"},xe.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},xe.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,zs?xe.createElement("div",{className:"dwp3d-center"},xe.createElement("div",{className:"dwp3d-fail",role:"alert"},xe.createElement("h3",null,r("error.webglTitle")),xe.createElement("p",null,r("error.webgl",{msg:de.msg})),xe.createElement("button",{type:"button",onClick:zt},r("error.retry")))):null,de&&de.kind==="lost"?xe.createElement("div",{className:"dwp3d-center dim",role:"alert"},xe.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var s3="work-process-3d",r3={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(gc,jp),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(gc);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:s3,order:15,locale:gc,label:()=>e("tab.label")},t=>iv.createElement(nv,{...t,ctx:n,tBound:e})))}};
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
