/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var Jy=Object.create;var gc=Object.defineProperty;var jy=Object.getOwnPropertyDescriptor;var Qy=Object.getOwnPropertyNames;var ev=Object.getPrototypeOf,tv=Object.prototype.hasOwnProperty;var nv=(n,e)=>{for(var t in e)gc(n,t,{get:e[t],enumerable:!0})},Jp=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Qy(e))!tv.call(n,s)&&s!==t&&gc(n,s,{get:()=>e[s],enumerable:!(i=jy(e,s))||i.enumerable});return n};var jp=(n,e,t)=>(t=n!=null?Jy(ev(n)):{},Jp(e||!n||!n.__esModule?gc(t,"default",{value:n,enumerable:!0}):t,n)),iv=n=>Jp(gc({},"__esModule",{value:!0}),n);var $A={};nv($A,{default:()=>qA});module.exports=iv($A);var Zy=jp(require("react"),1);var xc="dsh-work-process-3d",sv={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"演示模式：画面由内置示例会话驱动，数字、文件和命令都是虚构的。在「显示」里把数据切回「实时」即可看本会话。","badge.live":"实时","badge.liveHint":"画面来自本会话的实时数据","live.unsupported":"这个 DSH 版本不提供会话投影，只能显示演示数据。","live.missing":"还没有收到本会话的实时数据。插件的主机部分可能尚未加载，重启 DSH 后生效。","live.showDemo":"先看演示","live.failed":"读取实时数据时出错，暂时显示演示数据。重启 DSH 后会重新尝试。","live.idle":"本会话还没有开始工作。发送一条消息后，机器会随对话运转。","source.label":"数据","source.live":"实时","source.demo":"演示","source.liveHint":"显示本会话的实时数据","source.demoHint":"显示内置的示例会话（虚构数据）","bal.loading":"读取中","bal.signedOut":"未登录账户","bal.failed":"查询失败","bal.unavailable":"不可用","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.living":"生活区","view.dock":"坞站","view.screens":"大屏","view.screensHint":"飞到大屏幕墙前，近距离查看三块屏幕；再点一次返回","screen.bar":"大屏查看","screen.flow":"令牌流量","screen.main":"工作总览","screen.cost":"成本与上下文","screen.descFlow":"实时生成速率、最近 60 秒的速率曲线，以及输入、缓存命中、输出和推理的累计用量。","screen.descMain":"当前阶段、轮次、工具调用、产出文件和模型请求；下面一排色块是最近的工具调用。","screen.descCost":"累计花费（分高峰和低谷）、最近 3 分钟的花费曲线、上下文占用和缓存节省。","screen.click":"点击近距离查看","screen.prev":"上一块","screen.next":"下一块","screen.back":"返回","screen.count":"{i}/{n}","screen.hint":"滚轮放大 · 拖动平移 · 点击屏幕外或「返回」退出 · ←/→ 切换","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.balanceTitle":"充值余额 {topped} · 赠金余额 {granted}","m.toppedUp":"充值余额","m.granted":"赠金余额","m.balanceViaKey":"通过 API 密钥查询","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸，留给以后入住的操作员角色。它不显示会话数据。","desc.dock":"每个运行中的子智能体或工作流成员占用一架无人机。无人机先到协作机器人工位领取任务胶囊，再绕坞站飞行；任务结束后带着结果降落：绿色完成，红色失败，灰色停止。","dock.none":"本会话还没有调用子智能体或工作流","dock.running":"运行中","dock.done":"已完成","dock.failed":"失败","dock.stopped":"已停止","dock.queued":"排队（无人机已满）","dock.workflow":"工作流","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},rv={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Demo mode: a built-in sample session drives the scene; its numbers, files and commands are made up. Switch Data back to Live under Display to see this session.","badge.live":"Live","badge.liveHint":"The scene shows this session as it happens","live.unsupported":"This DSH release has no session projections, so only the demo can run.","live.missing":"No live data from this session yet. The plugin’s Host part may not be loaded; restart DSH to load it.","live.showDemo":"Show the demo","live.failed":"Reading live data failed, so the demo is shown for now. DSH tries again after a restart.","live.idle":"This session has not started working yet. Send a message and the machine runs with the conversation.","source.label":"Data","source.live":"Live","source.demo":"Demo","source.liveHint":"Show this session’s live data","source.demoHint":"Show the built-in sample session (made-up data)","bal.loading":"Loading","bal.signedOut":"Not signed in","bal.failed":"Query failed","bal.unavailable":"Unavailable","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.living":"Living","view.dock":"Dock","view.screens":"Screens","view.screensHint":"Fly up to the media wall and read the three screens up close; click again to go back","screen.bar":"Screen viewer","screen.flow":"Token flow","screen.main":"Work overview","screen.cost":"Cost and context","screen.descFlow":"Live generation rate, the last 60 seconds as a chart, and running totals for input, cache hits, output and reasoning.","screen.descMain":"Current phase, turn, tool calls, produced files and model requests; the strip of tiles below shows the latest tool calls.","screen.descCost":"Total cost split into peak and off-peak, the last 3 minutes of spend, context usage and cache savings.","screen.click":"Click to view up close","screen.prev":"Previous","screen.next":"Next","screen.back":"Back","screen.count":"{i}/{n}","screen.hint":"Scroll to zoom · drag to pan · click beside the screen or Back to leave · ←/→ to switch","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.balanceTitle":"Topped-up {topped} · granted {granted}","m.toppedUp":"Topped-up balance","m.granted":"Granted balance","m.balanceViaKey":"Queried with the API key","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium, kept for an operator character to move in later. It shows no session data.","desc.dock":"Each running subagent or workflow member takes a drone. The drone picks up a task capsule at the cobot station, circles the dock while the agent works and lands with the result: green done, red failed, grey stopped.","dock.none":"No subagents or workflows in this session yet","dock.running":"Running","dock.done":"Done","dock.failed":"Failed","dock.stopped":"Stopped","dock.queued":"Queued (all drones busy)","dock.workflow":"Workflow","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},Qp={zh:sv,en:rv};var _e=jp(require("react"),1);var kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V0=0,tf=1,W0=2;var bo=1,X0=2,Ea=3,qs=0,li=1,tn=2,Mo=0,$s=1,ti=2,nf=3,sf=4,Ta=5;var So=100,q0=101,$0=102,Y0=103,K0=104,Iu=200,zr=201,Z0=202,J0=203,rf=204,Hr=205,j0=206,Q0=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,Zc=0,Jc=1,jc=2,ca=3,Qc=4,eu=5,tu=6,nu=7,of=0,am=1,lm=2,Ys=0,af=1,lf=2,cf=3,uf=4,df=5,hf=6,Dl=7;var ff=300,wo=301,Aa=302,Lu=303,Du=304,lr=1e3,Gs=1001,iu=1002,ei=1003,cm=1004;var Nl=1005;var Cn=1006,Nu=1007;var ys=1008;var Ii=1009,pf=1010,mf=1011,Ra=1012,Ou=1013,vs=1014,ns=1015,Ai=1016,Uu=1017,Fu=1018,Eo=1020,gf=35902,xf=35899,yf=1021,vf=1022,_s=1023,cr=1026,gr=1027,ku=1028,Bu=1029,Gr=1030,zu=1031;var Hu=1033,Ol=33776,Ul=33777,Fl=33778,kl=33779,Gu=35840,Vu=35841,Wu=35842,Xu=35843,qu=36196,$u=37492,Yu=37496,Ku=37488,Zu=37489,Bl=37490,Ju=37491,ju=37808,Qu=37809,ed=37810,td=37811,nd=37812,id=37813,sd=37814,rd=37815,od=37816,ad=37817,ld=37818,cd=37819,ud=37820,dd=37821,hd=36492,fd=36494,pd=36495,md=36283,gd=36284,zl=36285,xd=36286;var il=2300,su=2301,Yc=2302,Vh=2303,Wh=2400,Xh=2401,qh=2402;var um=3200;var yd=0,dm=1,xr="",oi="srgb",sl="srgb-linear",rl="linear",an="srgb";var Kc=7680;var hm=519,fm=512,pm=513,mm=514,_f=515,gm=516,xm=517,bf=518,Mf=519,Sf=35044,vd=35048;var wf="300 es",es=2e3,ua=2001;function ov(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function av(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ol(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ym(){let n=ol("canvas");return n.style.display="block",n}var e0={},da=null;function al(...n){let e="THREE."+n.shift();da?da("log",e,...n):console.log(e,...n)}function vm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function wt(...n){n=vm(n);let e="THREE."+n.shift();if(da)da("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=vm(n);let e="THREE."+n.shift();if(da)da("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function po(...n){let e=n.join(" ");e in e0||(e0[e]=!0,wt(...n))}function _m(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bm={[Zc]:Zc,[jc]:tu,[Qc]:Qc,[ca]:eu,[Jc]:Jc,[tu]:jc,[nu]:nu,[eu]:ca},ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t0=1234567,Qa=Math.PI/180,ha=180/Math.PI;function yr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mi[n&255]+mi[n>>8&255]+mi[n>>16&255]+mi[n>>24&255]+"-"+mi[e&255]+mi[e>>8&255]+"-"+mi[e>>16&15|64]+mi[e>>24&255]+"-"+mi[t&63|128]+mi[t>>8&255]+"-"+mi[t>>16&255]+mi[t>>24&255]+mi[i&255]+mi[i>>8&255]+mi[i>>16&255]+mi[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Ef(n,e){return(n%e+e)%e}function lv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cv(n,e,t){return n!==e?(t-n)/(e-n):0}function el(n,e,t){return(1-t)*n+t*e}function uv(n,e,t,i){return el(n,e,1-Math.exp(-t*i))}function dv(n,e=1){return e-Math.abs(Ef(n,e*2)-e)}function hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mv(n,e){return n+Math.random()*(e-n)}function gv(n){return n*(.5-Math.random())}function xv(n){n!==void 0&&(t0=n);let e=t0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yv(n){return n*Qa}function vv(n){return n*ha}function _v(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function bv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _d(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Af(n,e){if(e.constructor===Float32Array)return n;let t=_d(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Rf(n,e){if(e.constructor===Float32Array)return n;let t=_d(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Vr={DEG2RAD:Qa,RAD2DEG:ha,generateUUID:yr,clamp:Ft,euclideanModulo:Ef,mapLinear:lv,inverseLerp:cv,lerp:el,damp:uv,pingpong:dv,smoothstep:hv,smootherstep:fv,randInt:pv,randFloat:mv,randFloatSpread:gv,seededRandom:xv,degToRad:yv,radToDeg:vv,isPowerOfTwo:_v,ceilPowerOfTwo:bv,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Mv,normalize:Rf,denormalize:Af},Ce=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,a=Math.sin(a*_)/b,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(n0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(n0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yh=new P,n0=new un,Rt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],_=s[1],b=s[4],y=s[7],M=s[2],w=s[5],v=s[8];return r[0]=o*x+a*_+l*M,r[3]=o*m+a*b+l*w,r[6]=o*g+a*y+l*v,r[1]=c*x+u*_+d*M,r[4]=c*m+u*b+d*w,r[7]=c*g+u*y+d*v,r[2]=h*x+f*_+p*M,r[5]=h*m+f*b+p*w,r[8]=h*g+f*y+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(e,t)),this}rotate(e){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-e)),this}translate(e,t){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},vh=new Rt,i0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sv(){let n={enabled:!0,workingColorSpace:sl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(s.r=la(s.r),s.g=la(s.g),s.b=la(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xr?rl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sl]:{primaries:e,whitePoint:i,transfer:rl,toXYZ:i0,fromXYZ:s0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:an,toXYZ:i0,fromXYZ:s0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}var Jt=Sv();function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wo,ru=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=ol("canvas")),Wo.width=e.width,Wo.height=e.height;let s=Wo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ol("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ar(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wv=0,fa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=yr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_h(s[o].image)):r.push(_h(s[o]))}else r=_h(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _h(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ru.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var Ev=0,bh=new P,wi=class n extends ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gs,s=Gs,r=Cn,o=ys,a=_s,l=Ii,c=n.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=yr(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=ff;wi.DEFAULT_ANISOTROPY=1;var mn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,M=(g+1)/2,w=(u+h)/4,v=(d+x)/4,S=(p+m)/4;return b>y&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=v/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new wi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends ou{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ll=class extends wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var au=class extends wi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xo.setFromMatrixColumn(e,0).length(),r=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tv,e,Av)}lookAt(e,t,i){let s=this.elements;return zi.subVectors(e,t),zi.lengthSq()===0&&(zi.z=1),zi.normalize(),Rr.crossVectors(i,zi),Rr.lengthSq()===0&&(Math.abs(i.z)===1?zi.x+=1e-4:zi.z+=1e-4,zi.normalize(),Rr.crossVectors(i,zi)),Rr.normalize(),yc.crossVectors(zi,Rr),s[0]=Rr.x,s[4]=yc.x,s[8]=zi.x,s[1]=Rr.y,s[5]=yc.y,s[9]=zi.y,s[2]=Rr.z,s[6]=yc.z,s[10]=zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],b=i[7],y=i[11],M=i[15],w=s[0],v=s[4],S=s[8],T=s[12],R=s[1],D=s[5],k=s[9],H=s[13],N=s[2],q=s[6],te=s[10],Q=s[14],ee=s[3],W=s[7],K=s[11],O=s[15];return r[0]=o*w+a*R+l*N+c*ee,r[4]=o*v+a*D+l*q+c*W,r[8]=o*S+a*k+l*te+c*K,r[12]=o*T+a*H+l*Q+c*O,r[1]=u*w+d*R+h*N+f*ee,r[5]=u*v+d*D+h*q+f*W,r[9]=u*S+d*k+h*te+f*K,r[13]=u*T+d*H+h*Q+f*O,r[2]=p*w+x*R+m*N+g*ee,r[6]=p*v+x*D+m*q+g*W,r[10]=p*S+x*k+m*te+g*K,r[14]=p*T+x*H+m*Q+g*O,r[3]=_*w+b*R+y*N+M*ee,r[7]=_*v+b*D+y*q+M*W,r[11]=_*S+b*k+y*te+M*K,r[15]=_*T+b*H+y*Q+M*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*h,b=a*f-c*d,y=a*h-l*d,M=o*f-c*u,w=o*h-l*u,v=o*d-a*u;return t*(x*_-m*b+g*y)-i*(p*_-m*M+g*w)+s*(p*b-x*M+g*v)-r*(p*y-x*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,b=t*l-s*o,y=t*c-r*o,M=i*l-s*a,w=i*c-r*a,v=s*c-r*l,S=u*x-d*p,T=u*m-h*p,R=u*g-f*p,D=d*m-h*x,k=d*g-f*x,H=h*g-f*m,N=_*H-b*k+y*D+M*R-w*T+v*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/N;return e[0]=(a*H-l*k+c*D)*q,e[1]=(s*k-i*H-r*D)*q,e[2]=(x*v-m*w+g*M)*q,e[3]=(h*w-d*v-f*M)*q,e[4]=(l*R-o*H-c*T)*q,e[5]=(t*H-s*R+r*T)*q,e[6]=(m*y-p*v-g*b)*q,e[7]=(u*v-h*y+f*b)*q,e[8]=(o*k-a*R+c*S)*q,e[9]=(i*R-t*k-r*S)*q,e[10]=(p*w-x*y+g*_)*q,e[11]=(d*y-u*w-f*_)*q,e[12]=(a*T-o*D-l*S)*q,e[13]=(t*D-i*T+s*S)*q,e[14]=(x*b-p*M-m*_)*q,e[15]=(u*M-d*b+h*_)*q,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,_=l*c,b=l*u,y=l*d,M=i.x,w=i.y,v=i.z;return s[0]=(1-(x+g))*M,s[1]=(f+y)*M,s[2]=(p-b)*M,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+b)*v,s[9]=(m-_)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xo.set(s[0],s[1],s[2]).length(),a=Xo.set(s[4],s[5],s[6]).length(),l=Xo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hs.copy(this);let c=1/o,u=1/a,d=1/l;return hs.elements[0]*=c,hs.elements[1]*=c,hs.elements[2]*=c,hs.elements[4]*=u,hs.elements[5]*=u,hs.elements[6]*=u,hs.elements[8]*=d,hs.elements[9]*=d,hs.elements[10]*=d,t.setFromRotationMatrix(hs),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=es,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===es)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ua)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=es,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===es)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ua)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xo=new P,hs=new bt,Tv=new P(0,0,0),Av=new P(1,1,1),Rr=new P,yc=new P,zi=new P,r0=new bt,o0=new un,Vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return r0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return o0.setFromEuler(this),this.setFromQuaternion(o0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rv=0,a0=new P,qo=new un,tr=new bt,vc=new P,Ga=new P,Cv=new P,Pv=new un,l0=new P(1,0,0),c0=new P(0,1,0),u0=new P(0,0,1),d0={type:"added"},Iv={type:"removed"},$o={type:"childadded",child:null},Mh={type:"childremoved",child:null},dn=class n extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Vn,i=new un,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Rt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(c0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return a0.copy(e).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(c0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vc.copy(e):vc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ga,vc,this.up):tr.lookAt(vc,Ga,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),qo.setFromRotationMatrix(tr),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),$o.child=e,this.dispatchEvent($o),$o.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iv),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new P(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lv={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Sh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Jt.workingColorSpace){if(e=Ef(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Sh(o,r,e+1/3),this.g=Sh(o,r,e),this.b=Sh(o,r,e-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(e,t=oi){function i(r){r!==void 0&&parseFloat(r)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){let i=Mm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Jt.workingToColorSpace(gi.copy(this),e),Math.round(Ft(gi.r*255,0,255))*65536+Math.round(Ft(gi.g*255,0,255))*256+Math.round(Ft(gi.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(gi.copy(this),t);let i=gi.r,s=gi.g,r=gi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(gi.copy(this),t),e.r=gi.r,e.g=gi.g,e.b=gi.b,e}getStyle(e=oi){Jt.workingToColorSpace(gi.copy(this),e);let t=gi.r,i=gi.g,s=gi.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(_c);let i=el(Cr.h,_c.h,t),s=el(Cr.s,_c.s,t),r=el(Cr.l,_c.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gi=new ze;ze.NAMES=Mm;var mo=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fs=new P,nr=new P,wh=new P,ir=new P,Yo=new P,Ko=new P,h0=new P,Eh=new P,Th=new P,Ah=new P,Rh=new mn,Ch=new mn,Ph=new mn,or=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),fs.subVectors(e,t),s.cross(fs);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){fs.subVectors(s,t),nr.subVectors(i,t),wh.subVectors(e,t);let o=fs.dot(fs),a=fs.dot(nr),l=fs.dot(wh),c=nr.dot(nr),u=nr.dot(wh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rh.setScalar(0),Ch.setScalar(0),Ph.setScalar(0),Rh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,i),Ph.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rh,r.x),o.addScaledVector(Ch,r.y),o.addScaledVector(Ph,r.z),o}static isFrontFacing(e,t,i,s){return fs.subVectors(i,t),nr.subVectors(e,t),fs.cross(nr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fs.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),fs.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yo.subVectors(s,i),Ko.subVectors(r,i),Eh.subVectors(e,i);let l=Yo.dot(Eh),c=Ko.dot(Eh);if(l<=0&&c<=0)return t.copy(i);Th.subVectors(e,s);let u=Yo.dot(Th),d=Ko.dot(Th);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Yo,o);Ah.subVectors(e,r);let f=Yo.dot(Ah),p=Ko.dot(Ah);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ko,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return h0.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(h0,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(Yo,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ei=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ps.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ps.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ps.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ps):ps.fromBufferAttribute(r,o),ps.applyMatrix4(e.matrixWorld),this.expandByPoint(ps);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bc.copy(i.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ps),ps.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Mc.subVectors(this.max,Va),Zo.subVectors(e.a,Va),Jo.subVectors(e.b,Va),jo.subVectors(e.c,Va),Pr.subVectors(Jo,Zo),Ir.subVectors(jo,Jo),lo.subVectors(Zo,jo);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-lo.z,lo.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,lo.z,0,-lo.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-lo.y,lo.x,0];return!Ih(t,Zo,Jo,jo,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,Zo,Jo,jo,Mc))?!1:(Sc.crossVectors(Pr,Ir),t=[Sc.x,Sc.y,Sc.z],Ih(t,Zo,Jo,jo,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ps).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ps).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sr=[new P,new P,new P,new P,new P,new P,new P,new P],ps=new P,bc=new Ei,Zo=new P,Jo=new P,jo=new P,Pr=new P,Ir=new P,lo=new P,Va=new P,Mc=new P,Sc=new P,co=new P;function Ih(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){co.fromArray(n,r);let a=s.x*Math.abs(co.x)+s.y*Math.abs(co.y)+s.z*Math.abs(co.z),l=e.dot(co),c=t.dot(co),u=i.dot(co);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Bn=new P,wc=new Ce,Dv=0,Qn=class extends ms{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sf,this.updateRanges=[],this.gpuType=ns,this.version=0,this._normalizationScale=e!==void 0?_d(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix3(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.array)}};var cl=class extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ul=class extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Nv=new Ei,Wa=new P,Lh=new P,ts=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Wa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Lh)),this.expandByPoint(Wa.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ov=0,Qi=new bt,Dh=new dn,Qo=new P,Hi=new Ei,Xa=new Ei,Jn=new P,qt=class n extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?ul:cl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Rt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qi.makeRotationFromQuaternion(e),this.applyMatrix4(Qi),this}rotateX(e){return Qi.makeRotationX(e),this.applyMatrix4(Qi),this}rotateY(e){return Qi.makeRotationY(e),this.applyMatrix4(Qi),this}rotateZ(e){return Qi.makeRotationZ(e),this.applyMatrix4(Qi),this}translate(e,t,i){return Qi.makeTranslation(e,t,i),this.applyMatrix4(Qi),this}scale(e,t,i){return Qi.makeScale(e,t,i),this.applyMatrix4(Qi),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Jn.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(Jn),Jn.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(Jn)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xa.setFromBufferAttribute(a),this.morphTargetsRelative?(Jn.addVectors(Hi.min,Xa.min),Hi.expandByPoint(Jn),Jn.addVectors(Hi.max,Xa.max),Hi.expandByPoint(Jn)):(Hi.expandByPoint(Xa.min),Hi.expandByPoint(Xa.max))}Hi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),Jn.add(Qo)),s=Math.max(s,i.distanceToSquared(Jn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let T=0;T<i.count;T++)a[T]=new P,l[T]=new P;let u=new P,d=new P,h=new P,f=new Ce,p=new Ce,x=new Ce,m=new P,g=new P;function _(T,R,D){c[T]=c[R]=c[D]=1,u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(u),h.sub(u),p.sub(f),x.sub(f);let k=1/(p.x*x.y-x.x*p.y);isFinite(k)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(k),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(k),a[T].add(m),a[R].add(m),a[D].add(m),l[T].add(g),l[R].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,R=b.length;T<R;++T){let D=b[T],k=D.start,H=D.count;for(let N=k,q=k+H;N<q;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new P,M=new P,w=new P,v=new P;function S(T){w.fromBufferAttribute(s,T),v.copy(w);let R=a[T];y.copy(R),y.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(v,R);let k=M.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,k)}for(let T=0,R=i.count;T<R;++T)c[T]&&S(T);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jn.fromBufferAttribute(e,t),Jn.normalize(),e.setXYZ(t,Jn.x,Jn.y,Jn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Qn(h,u,d)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},dl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sf,this.updateRanges=[],this.version=0,this.uuid=yr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=f0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=f0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function f0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=yr()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Mi=new P,ga=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?_d(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix4(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.applyNormalMatrix(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mi.fromBufferAttribute(this,t),Mi.transformDirection(e),this.setXYZ(t,Mi.x,Mi.y,Mi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){al("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){al("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.data.array)}},Nh=new P,Uv=new P,Fv=new Rt,Si=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nh.subVectors(i,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Fv.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kv=0,gs=class extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=$s,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=Hr,this.blendEquation=So,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kc,this.stencilZFail=Kc,this.stencilZPass=Kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vs=class extends gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ea,qa=new P,ta=new P,na=new P,ia=new Ce,$a=new Ce,Sm=new bt,Ec=new P,Ya=new P,Tc=new P,p0=new Ce,Oh=new Ce,m0=new Ce,ur=class extends dn{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new qt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dl(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new ga(i,3,0,!1)),ea.setAttribute("uv",new ga(i,2,3,!1))}this.geometry=ea,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),Sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ac(Ec.set(-.5,-.5,0),na,o,ta,s,r),Ac(Ya.set(.5,-.5,0),na,o,ta,s,r),Ac(Tc.set(.5,.5,0),na,o,ta,s,r),p0.set(0,0),Oh.set(1,0),m0.set(1,1);let a=e.ray.intersectTriangle(Ec,Ya,Tc,!1,qa);if(a===null&&(Ac(Ya.set(-.5,.5,0),na,o,ta,s,r),Oh.set(0,1),a=e.ray.intersectTriangle(Ec,Tc,Ya,!1,qa),a===null))return;let l=e.ray.origin.distanceTo(qa);l<e.near||l>e.far||t.push({distance:l,point:qa.clone(),uv:or.getInterpolation(qa,Ec,Ya,Tc,p0,Oh,m0,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ac(n,e,t,i,s,r){ia.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?($a.x=r*ia.x-s*ia.y,$a.y=s*ia.x+r*ia.y):$a.copy(ia),n.copy(e),n.x+=$a.x,n.y+=$a.y,n.applyMatrix4(Sm)}var rr=new P,Uh=new P,Rc=new P,Cc=new P,dr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uh.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),Cc.copy(this.origin).sub(Uh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Rc),a=Cc.dot(this.direction),l=-Cc.dot(Rc),c=Cc.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uh).addScaledVector(Rc,h),f}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),s=rr.dot(rr)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,b=i.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(u),v,S,T,R,D,k,H,N,q,te,Q,ee;if(y>=M&&y>=w?(T=l,k=d,q=p,ee=g,l>=0?(v=c,S=u,R=h,D=f,H=x,N=m,te=_,Q=b):(v=u,S=c,R=f,D=h,H=m,N=x,te=b,Q=_)):M>=w?(T=c,k=h,q=x,ee=_,c>=0?(v=u,S=l,R=f,D=d,H=m,N=p,te=b,Q=g):(v=l,S=u,R=d,D=f,H=p,N=m,te=g,Q=b)):(T=u,k=f,q=m,ee=b,u>=0?(v=l,S=c,R=d,D=h,H=p,N=x,te=g,Q=_):(v=c,S=l,R=h,D=d,H=x,N=p,te=_,Q=g)),T===0)return null;let W=v/T,K=S/T,O=1/T,$=R-W*k,ce=D-K*k,Z=H-W*q,ge=N-K*q,Me=te-W*ee,ne=Q-K*ee,ye=Me*ge-ne*Z,De=$*ne-ce*Me,tt=Z*ce-ge*$;if(s){if(ye<0||De<0||tt<0)return null}else if((ye<0||De<0||tt<0)&&(ye>0||De>0||tt>0))return null;let Be=ye+De+tt;if(Be===0)return null;let je=O*(ye*k+De*q+tt*ee);return(Be>0?je<0:je>0)?null:this.at(je/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},g0=new bt,uo=new dr,Pc=new ts,x0=new P,Ic=new P,Lc=new P,Dc=new P,Fh=new P,Nc=new P,y0=new P,Oc=new P,nt=class extends dn{constructor(e=new qt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Nc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Fh.fromBufferAttribute(d,e),o?Nc.addScaledVector(Fh,u):Nc.addScaledVector(Fh.sub(t),u))}t.add(Nc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(r),uo.copy(e.ray).recast(e.near),!(Pc.containsPoint(uo.origin)===!1&&(uo.intersectSphere(Pc,x0)===null||uo.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(g0.copy(r).invert(),uo.copy(e.ray).applyMatrix4(g0),!(i.boundingBox!==null&&uo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,uo)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);s=Uc(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Uc(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=y,v=y+1,S=y+2;s=Uc(this,g,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,b=m+1,y=m+2;s=Uc(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Bv(n,e,t,i,s,r,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qs,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Oc);return c<t.near||c>t.far?null:{distance:c,point:Oc.clone(),object:n}}function Uc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ic),n.getVertexPosition(l,Lc),n.getVertexPosition(c,Dc);let u=Bv(n,e,t,i,Ic,Lc,Dc,y0);if(u){let d=new P;or.getBarycoord(y0,Ic,Lc,Dc,d),s&&(u.uv=or.getInterpolatedAttribute(s,a,l,c,d,new Ce)),r&&(u.uv1=or.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(u.normal=or.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};or.getNormal(Ic,Lc,Dc,h.normal),u.face=h,u.barycoord=d}return u}var hl=class extends wi{constructor(e=null,t=1,i=1,s,r,o,a,l,c=ei,u=ei,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class extends Qn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sa=new bt,v0=new bt,Fc=[],_0=new Ei,zv=new bt,Ka=new nt,Za=new ts,Nn=class extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),_0.copy(e.boundingBox).applyMatrix4(sa),this.boundingBox.union(_0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sa),Za.copy(e.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(Za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ka.geometry=this.geometry,Ka.material=this.material,Ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),e.ray.intersectsSphere(Za)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sa),v0.multiplyMatrices(i,sa),Ka.matrixWorld=v0,Ka.raycast(e,Fc);for(let o=0,a=Fc.length;o<a;o++){let l=Fc[o];l.instanceId=r,l.object=this,t.push(l)}Fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(s*this.count),s,this.count,ku,ns));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ho=new ts,Hv=new Ce(.5,.5),kc=new P,Dr=class{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,o=new Si){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=es,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,g-p,M-_).normalize(),s[1].setComponents(c+o,f+u,g+p,M+_).normalize(),s[2].setComponents(c+a,f+d,g+x,M+b).normalize(),s[3].setComponents(c-a,f-d,g-x,M-b).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,g-m,M-y).normalize();else if(s[4].setComponents(c-l,f-h,g-m,M-y).normalize(),t===es)s[5].setComponents(c+l,f+h,g+m,M+y).normalize();else if(t===ua)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ho.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ho.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ho)}intersectsSprite(e){ho.center.set(0,0,0);let t=Hv.distanceTo(e.center);return ho.radius=.7071067811865476+t,ho.applyMatrix4(e.matrixWorld),this.intersectsSphere(ho)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(kc.x=s.normal.x>0?e.max.x:e.min.x,kc.y=s.normal.y>0?e.max.y:e.min.y,kc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},b0=new bt,lu=class n{constructor(){this.coordinateSystem=es,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];b0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Dr),i[s].setFromProjectionMatrix(b0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Dr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Nr=class extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},cu=new P,uu=new P,M0=new bt,Ja=new dr,Bc=new ts,kh=new P,S0=new P,du=class extends dn{constructor(e=new qt,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cu.fromBufferAttribute(t,s-1),uu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new pt(i,1))}else wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(s),Bc.radius+=r,e.ray.intersectsSphere(Bc)===!1)return;M0.copy(s).invert(),Ja.copy(e.ray).applyMatrix4(M0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),_=u.getX(x+1),b=zc(this,e,Ja,l,g,_,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=zc(this,e,Ja,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=zc(this,e,Ja,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=zc(this,e,Ja,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(cu.fromBufferAttribute(a,s),uu.fromBufferAttribute(a,r),t.distanceSqToSegment(cu,uu,kh,S0)>i)return;kh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(kh);if(!(c<e.near||c>e.far))return{distance:c,point:S0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var w0=new P,E0=new P,go=class extends du{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)w0.fromBufferAttribute(t,s),E0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+w0.distanceTo(E0);e.setAttribute("lineDistance",new pt(i,1))}else wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hu=class extends gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},T0=new bt,$h=new dr,Hc=new ts,Gc=new P,fl=class extends dn{constructor(e=new qt,t=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),Hc.radius+=r,e.ray.intersectsSphere(Hc)===!1)return;T0.copy(s).invert(),$h.copy(e.ray).applyMatrix4(T0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,x=f;p<x;p++){let m=c.getX(p);Gc.fromBufferAttribute(d,m),A0(Gc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,x=f;p<x;p++)Gc.fromBufferAttribute(d,p),A0(Gc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function A0(n,e,t,i,s,r,o){let a=$h.distanceSqToPoint(n);if(a<t){let l=new P;$h.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var pl=class extends wi{constructor(e=[],t=wo,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ml=class extends wi{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hr=class extends wi{constructor(e,t,i=vs,s,r,o,a=ei,l=ei,c,u=cr,d=1){if(u!==cr&&u!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gl=class extends hr{constructor(e,t=vs,i=wo,s,r,o=ei,a=ei,l,c=cr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xl=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class n extends qt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function p(x,m,g,_,b,y,M,w,v,S,T){let R=y/v,D=M/S,k=y/2,H=M/2,N=w/2,q=v+1,te=S+1,Q=0,ee=0,W=new P;for(let K=0;K<te;K++){let O=K*D-H;for(let $=0;$<q;$++){let ce=$*R-k;W[x]=ce*_,W[m]=O*b,W[g]=N,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=w>0?1:-1,u.push(W.x,W.y,W.z),d.push($/v),d.push(1-K/S),Q+=1}}for(let K=0;K<S;K++)for(let O=0;O<v;O++){let $=h+O+q*K,ce=h+O+q*(K+1),Z=h+(O+1)+q*(K+1),ge=h+(O+1)+q*K;l.push($,ce,ge),l.push(ce,Z,ge),ee+=6}a.addGroup(f,ee,T),f+=ee,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xa=class n extends qt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=i*2+r,x=s+1,m=new P,g=new P;for(let _=0;_<=p;_++){let b=0,y=0,M=0,w=0;if(_<=i){let T=_/i,R=T*Math.PI/2;y=-u-e*Math.cos(R),M=e*Math.sin(R),w=-e*Math.cos(R),b=T*d}else if(_<=i+r){let T=(_-i)/r;y=-u+T*t,M=e,w=0,b=d+T*h}else{let T=(_-i-r)/i,R=T*Math.PI/2;y=u+e*Math.sin(R),M=e*Math.cos(R),w=e*Math.sin(R),b=d+h+T*d}let v=Math.max(0,Math.min(1,b/f)),S=0;_===0?S=.5/s:_===p&&(S=-.5/s);for(let T=0;T<=s;T++){let R=T/s,D=R*Math.PI*2,k=Math.sin(D),H=Math.cos(D);g.x=-M*H,g.y=y,g.z=M*k,a.push(g.x,g.y,g.z),m.set(-M*H,w,M*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,v)}if(_>0){let T=(_-1)*x;for(let R=0;R<s;R++){let D=T+R,k=T+R+1,H=_*x+R,N=_*x+R+1;o.push(D,k,H),o.push(k,N,H)}}}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},En=class n extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,u=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fn=class n extends qt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function _(){let y=new P,M=new P,w=0,v=(t-e)/i;for(let S=0;S<=r;S++){let T=[],R=S/r,D=R*(t-e)+e;for(let k=0;k<=s;k++){let H=k/s,N=H*l+a,q=Math.sin(N),te=Math.cos(N);M.x=D*q,M.y=-R*i+m,M.z=D*te,d.push(M.x,M.y,M.z),y.set(q,v,te).normalize(),h.push(y.x,y.y,y.z),f.push(H,1-R),T.push(p++)}x.push(T)}for(let S=0;S<s;S++)for(let T=0;T<r;T++){let R=x[T][S],D=x[T+1][S],k=x[T+1][S+1],H=x[T][S+1];(e>0||T!==0)&&(u.push(R,D,H),w+=3),(t>0||T!==r-1)&&(u.push(D,k,H),w+=3)}c.addGroup(g,w,0),g+=w}function b(y){let M=p,w=new Ce,v=new P,S=0,T=y===!0?e:t,R=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let k=0;k<=s;k++){let N=k/s*l+a,q=Math.cos(N),te=Math.sin(N);v.x=T*te,v.y=m*R,v.z=T*q,d.push(v.x,v.y,v.z),h.push(0,R,0),w.x=q*.5+.5,w.y=te*.5*R+.5,f.push(w.x,w.y),p++}for(let k=0;k<s;k++){let H=M+k,N=D+k;y===!0?u.push(N,N+1,H):u.push(N+1,N,H),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ws=class n extends Fn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){wt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new bt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ya=class extends Gi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fu=class extends ya{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var R0=new P,C0=new P,Bh=new Cf,zh=new Cf,Hh=new Cf,pu=class extends Gi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(C0.subVectors(s[0],s[1]).add(s[0]),c=C0);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(R0.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=R0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Bh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),zh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),Hh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),zh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Hh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Bh.calc(l),zh.calc(l),Hh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function P0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Gv(n,e){let t=1-n;return t*t*e}function Vv(n,e){return 2*(1-n)*n*e}function Wv(n,e){return n*n*e}function tl(n,e,t,i){return Gv(n,e)+Vv(n,t)+Wv(n,i)}function Xv(n,e){let t=1-n;return t*t*t*e}function qv(n,e){let t=1-n;return 3*t*t*n*e}function $v(n,e){return 3*(1-n)*n*n*e}function Yv(n,e){return n*n*n*e}function nl(n,e,t,i,s){return Xv(n,e)+qv(n,t)+$v(n,i)+Yv(n,s)}var yl=class extends Gi{constructor(e=new Ce,t=new Ce,i=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nl(e,s.x,r.x,o.x,a.x),nl(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mu=class extends Gi{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nl(e,s.x,r.x,o.x,a.x),nl(e,s.y,r.y,o.y,a.y),nl(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends Gi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Gi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Gi{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tl(e,s.x,r.x,o.x),tl(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Gi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tl(e,s.x,r.x,o.x),tl(e,s.y,r.y,o.y),tl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(P0(a,l.x,c.x,u.x,d.x),P0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:fu,CatmullRomCurve3:pu,CubicBezierCurve:yl,CubicBezierCurve3:mu,EllipseCurve:ya,LineCurve:vl,LineCurve3:xo,QuadraticBezierCurve:_l,QuadraticBezierCurve3:yo,SplineCurve:bl}),va=class extends Gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new gu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fr=class extends va{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vl(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new _l(this.currentPoint.clone(),new Ce(e,t),new Ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new yl(this.currentPoint.clone(),new Ce(e,t),new Ce(i,s),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new bl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ya(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xs=class extends fr{constructor(e){super(e),this.uuid=yr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fr().fromJSON(s))}return this}};function Kv(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=e_(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ml(r,o,t,a,l,c,0),o}function wm(n,e,t,i,s){let r;if(s===d_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=I0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=I0(o/i|0,n[o],n[o+1],r);return r&&_a(r,r.next)&&(wl(r),r=r.next),r}function vo(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_a(t,t.next)||Rn(t.prev,t,t.next)===0)){if(wl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ml(n,e,t,i,s,r,o){if(!n)return;!o&&r&&r_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jv(n,i,s,r):Zv(n)){e.push(l.i,n.i,c.i),wl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jv(vo(n),e),Ml(n,e,t,i,s,r,2)):o===2&&Qv(n,e,t,i,s,r):Ml(vo(n),e,t,i,s,r,1);break}}}function Zv(n){let e=n.prev,t=n,i=n.next;if(Rn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&ja(s,a,r,l,o,c,p.x,p.y)&&Rn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jv(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Rn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Yh(f,p,e,t,i),_=Yh(x,m,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=g&&y&&y.z<=_;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ja(a,u,l,d,c,h,b.x,b.y)&&Rn(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ja(a,u,l,d,c,h,y.x,y.y)&&Rn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&ja(a,u,l,d,c,h,b.x,b.y)&&Rn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&ja(a,u,l,d,c,h,y.x,y.y)&&Rn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jv(n,e){let t=n;do{let i=t.prev,s=t.next.next;!_a(i,s)&&Tm(i,t,t.next,s)&&Sl(i,s)&&Sl(s,i)&&(e.push(i.i,t.i,s.i),wl(t),wl(t.next),t=n=s),t=t.next}while(t!==n);return vo(t)}function Qv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l_(o,a)){let l=Am(o,a);o=vo(o,o.next),l=vo(l,l.next),Ml(o,e,t,i,s,r,0),Ml(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function e_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=wm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(a_(c))}s.sort(t_);for(let r=0;r<s.length;r++)t=n_(s[r],t);return t}function t_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function n_(n,e){let t=i_(n,e);if(!t)return e;let i=Am(t,n);return vo(i,i.next),vo(t,t.next)}function i_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(_a(n,t))return t;do{if(_a(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Em(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Sl(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&s_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function s_(n,e){return Rn(n.prev,n,e.prev)<0&&Rn(e.next,n,n.next)<0}function r_(n,e,t,i){let s=n;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,o_(s)}function o_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Yh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function a_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Em(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ja(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Em(n,e,t,i,s,r,o,a)}function l_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!c_(n,e)&&(Sl(n,e)&&Sl(e,n)&&u_(n,e)&&(Rn(n.prev,n,e.prev)||Rn(n,e.prev,e))||_a(n,e)&&Rn(n.prev,n,n.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _a(n,e){return n.x===e.x&&n.y===e.y}function Tm(n,e,t,i){let s=Wc(Rn(n,e,t)),r=Wc(Rn(n,e,i)),o=Wc(Rn(t,i,n)),a=Wc(Rn(t,i,e));return!!(s!==r&&o!==a||s===0&&Vc(n,t,e)||r===0&&Vc(n,i,e)||o===0&&Vc(t,n,i)||a===0&&Vc(t,e,i))}function Vc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Wc(n){return n>0?1:n<0?-1:0}function c_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sl(n,e){return Rn(n.prev,n,n.next)<0?Rn(n,e,n.next)>=0&&Rn(n,n.prev,e)>=0:Rn(n,e,n.prev)<0||Rn(n,n.next,e)<0}function u_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Am(n,e){let t=Kh(n.i,n.x,n.y),i=Kh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function I0(n,e,t,i){let s=Kh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function wl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zh=class{static triangulate(e,t,i=2){return Kv(e,t,i)}},fo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];L0(e),D0(i,e);let o=e.length;t.forEach(L0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,D0(i,t[l]);let a=Zh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function L0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function D0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Xs=class n extends qt{constructor(e=new xs([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:h_,b,y=!1,M,w,v,S;if(g){b=g.getSpacedPoints(u),y=!0,h=!1;let xe=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,xe),w=new P,v=new P,S=new P}h||(m=0,f=0,p=0,x=0);let T=a.extractPoints(c),R=T.shape,D=T.holes;if(!fo.isClockWise(R)){R=R.reverse();for(let xe=0,G=D.length;xe<G;xe++){let z=D[xe];fo.isClockWise(z)&&(D[xe]=z.reverse())}}function H(xe){let z=10000000000000001e-36,re=xe[0];for(let J=1;J<=xe.length;J++){let se=J%xe.length,Re=xe[se],F=Re.x-re.x,oe=Re.y-re.y,fe=F*F+oe*oe,U=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(re.x),Math.abs(re.y)),Ke=z*U*U;if(fe<=Ke){xe.splice(se,1),J--;continue}re=Re}}H(R),D.forEach(H);let N=D.length,q=R;for(let xe=0;xe<N;xe++){let G=D[xe];R=R.concat(G)}function te(xe,G,z){return G||Et("ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(G,z)}let Q=R.length;function ee(xe,G,z){let re,J,se,Re=xe.x-G.x,F=xe.y-G.y,oe=z.x-xe.x,fe=z.y-xe.y,U=Re*Re+F*F,Ke=Re*fe-F*oe;if(Math.abs(Ke)>Number.EPSILON){let ut=Math.sqrt(U),gt=Math.sqrt(oe*oe+fe*fe),Pe=G.x-F/ut,A=G.y+Re/ut,Y=z.x-fe/gt,he=z.y+oe/gt,I=((Y-Pe)*fe-(he-A)*oe)/(Re*fe-F*oe);re=Pe+Re*I-xe.x,J=A+F*I-xe.y;let E=re*re+J*J;if(E<=2)return new Ce(re,J);se=Math.sqrt(E/2)}else{let ut=!1;Re>Number.EPSILON?oe>Number.EPSILON&&(ut=!0):Re<-Number.EPSILON?oe<-Number.EPSILON&&(ut=!0):Math.sign(F)===Math.sign(fe)&&(ut=!0),ut?(re=-F,J=Re,se=Math.sqrt(U)):(re=Re,J=F,se=Math.sqrt(U/2))}return new Ce(re/se,J/se)}let W=[];for(let xe=0,G=q.length,z=G-1,re=xe+1;xe<G;xe++,z++,re++)z===G&&(z=0),re===G&&(re=0),W[xe]=ee(q[xe],q[z],q[re]);let K=[],O,$=W.concat();for(let xe=0,G=N;xe<G;xe++){let z=D[xe];O=[];for(let re=0,J=z.length,se=J-1,Re=re+1;re<J;re++,se++,Re++)se===J&&(se=0),Re===J&&(Re=0),O[re]=ee(z[re],z[se],z[Re]);K.push(O),$=$.concat(O)}let ce;if(m===0)ce=fo.triangulateShape(q,D);else{let xe=[],G=[];for(let z=0;z<m;z++){let re=z/m,J=f*Math.cos(re*Math.PI/2),se=p*Math.sin(re*Math.PI/2)+x;for(let Re=0,F=q.length;Re<F;Re++){let oe=te(q[Re],W[Re],se);De(oe.x,oe.y,-J),re===0&&xe.push(oe)}for(let Re=0,F=N;Re<F;Re++){let oe=D[Re];O=K[Re];let fe=[];for(let U=0,Ke=oe.length;U<Ke;U++){let ut=te(oe[U],O[U],se);De(ut.x,ut.y,-J),re===0&&fe.push(ut)}re===0&&G.push(fe)}}ce=fo.triangulateShape(xe,G)}let Z=ce.length,ge=p+x;for(let xe=0;xe<Q;xe++){let G=h?te(R[xe],$[xe],ge):R[xe];y?(v.copy(M.normals[0]).multiplyScalar(G.x),w.copy(M.binormals[0]).multiplyScalar(G.y),S.copy(b[0]).add(v).add(w),De(S.x,S.y,S.z)):De(G.x,G.y,0)}for(let xe=1;xe<=u;xe++)for(let G=0;G<Q;G++){let z=h?te(R[G],$[G],ge):R[G];y?(v.copy(M.normals[xe]).multiplyScalar(z.x),w.copy(M.binormals[xe]).multiplyScalar(z.y),S.copy(b[xe]).add(v).add(w),De(S.x,S.y,S.z)):De(z.x,z.y,d/u*xe)}for(let xe=m-1;xe>=0;xe--){let G=xe/m,z=f*Math.cos(G*Math.PI/2),re=p*Math.sin(G*Math.PI/2)+x;for(let J=0,se=q.length;J<se;J++){let Re=te(q[J],W[J],re);De(Re.x,Re.y,d+z)}for(let J=0,se=D.length;J<se;J++){let Re=D[J];O=K[J];for(let F=0,oe=Re.length;F<oe;F++){let fe=te(Re[F],O[F],re);y?De(fe.x,fe.y+b[u-1].y,b[u-1].x+z):De(fe.x,fe.y,d+z)}}}Me(),ne();function Me(){let xe=s.length/3;if(h){let G=0,z=Q*G;for(let re=0;re<Z;re++){let J=ce[re];tt(J[2]+z,J[1]+z,J[0]+z)}G=u+m*2,z=Q*G;for(let re=0;re<Z;re++){let J=ce[re];tt(J[0]+z,J[1]+z,J[2]+z)}}else{for(let G=0;G<Z;G++){let z=ce[G];tt(z[2],z[1],z[0])}for(let G=0;G<Z;G++){let z=ce[G];tt(z[0]+Q*u,z[1]+Q*u,z[2]+Q*u)}}i.addGroup(xe,s.length/3-xe,0)}function ne(){let xe=s.length/3,G=0;ye(q,G),G+=q.length;for(let z=0,re=D.length;z<re;z++){let J=D[z];ye(J,G),G+=J.length}i.addGroup(xe,s.length/3-xe,1)}function ye(xe,G){let z=xe.length;for(;--z>=0;){let re=z,J=z-1;J<0&&(J=xe.length-1);for(let se=0,Re=u+m*2;se<Re;se++){let F=Q*se,oe=Q*(se+1),fe=G+re+F,U=G+J+F,Ke=G+J+oe,ut=G+re+oe;Be(fe,U,Ke,ut)}}}function De(xe,G,z){l.push(xe),l.push(G),l.push(z)}function tt(xe,G,z){je(xe),je(G),je(z);let re=s.length/3,J=_.generateTopUV(i,s,re-3,re-2,re-1);Ge(J[0]),Ge(J[1]),Ge(J[2])}function Be(xe,G,z,re){je(xe),je(G),je(re),je(G),je(z),je(re);let J=s.length/3,se=_.generateSideWallUV(i,s,J-6,J-3,J-2,J-1);Ge(se[0]),Ge(se[1]),Ge(se[3]),Ge(se[1]),Ge(se[2]),Ge(se[3])}function je(xe){s.push(l[xe*3+0]),s.push(l[xe*3+1]),s.push(l[xe*3+2])}function Ge(xe){r.push(xe.x),r.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return f_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gu[s.type]().fromJSON(s)),new n(i,e.options)}},h_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ce(r,o),new Ce(a,l),new Ce(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ce(o,1-l),new Ce(c,1-d),new Ce(h,1-p),new Ce(x,1-g)]:[new Ce(a,1-l),new Ce(u,1-d),new Ce(f,1-p),new Ce(m,1-g)]}};function f_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var El=class n extends qt{constructor(e=[new Ce(0,-.5),new Ce(.5,0),new Ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new P,h=new Ce,f=new P,p=new P,x=new P,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let b=i+_*u*s,y=Math.sin(b),M=Math.cos(b);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*M,o.push(d.x,d.y,d.z),h.x=_/t,h.y=w/(e.length-1),a.push(h.x,h.y);let v=l[3*w+0]*y,S=l[3*w+1],T=l[3*w+0]*M;c.push(v,S,T)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,M=y,w=y+e.length,v=y+e.length+1,S=y+1;r.push(M,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var vt=class n extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let b=_+c*g,y=_+c*(g+1),M=_+1+c*(g+1),w=_+1+c*g;f.push(b,y,w),f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Pn=class n extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new P,p=new Ce;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,y=_+i+1,M=_+i+2,w=_+1;a.push(b,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var On=class n extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new P,h=new P,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,y=o+b*a,M=e*Math.cos(y),w=Math.sqrt(e*e-M*M),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let T=S/t,R=s+T*r;d.x=-w*Math.cos(R),d.y=M,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(T+v,1-b),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=u[g][_+1],y=u[g][_],M=u[g+1][_],w=u[g+1][_+1];(g!==0||o>0)&&f.push(b,y,w),(g!==i-1||l<Math.PI)&&f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new pt(p,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ti=class n extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Tl=class n extends qt{constructor(e=new yo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new Ce,u=new P,d=[],h=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){u=e.getPointAt(b/t,u);let y=o.normals[b],M=o.binormals[b];for(let w=0;w<=s;w++){let v=w/s*Math.PI*2,S=Math.sin(v),T=-Math.cos(v);l.x=T*y.x+S*M.x,l.y=T*y.y+S*M.y,l.z=T*y.z+S*M.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let M=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),v=(s+1)*b+y,S=(s+1)*(b-1)+y;p.push(M,w,S),p.push(w,v,S)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new gu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function To(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(N0(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(N0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yi(n){let e={};for(let t=0;t<n.length;t++){let i=To(n[t]);for(let s in i)e[s]=i[s]}return e}function N0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function p_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Jt.workingColorSpace}var bd={clone:To,merge:yi},m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=p_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new mn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ba=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mt=class extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pr=class extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return po('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){po('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xu=class extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yu=class extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ra(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Or=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vu=class extends Or{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xh:r=e,a=2*t-i;break;case qh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:o=e,l=2*i-t;break;case qh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,b=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+_*o[c+M]+b*o[l+M]+y*o[d+M];return r}},_u=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},bu=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mu=class extends Or{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,_=d[g],b=d[g+1],y=e*h+p*2,M=u[y],w=u[y+1],v=y_(i,t,_,M,s);r[p]=Rm(v,x,b,w,m)}return r}};function Rm(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function x_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function y_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Rm(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=x_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Vi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Xc(e.settings)&&(i.settings={inTangents:ra(e.settings.inTangents,Array),outTangents:ra(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case il:t=this.InterpolantFactoryMethodDiscrete;break;case su:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break;case Vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return wt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return il;case this.InterpolantFactoryMethodLinear:return su;case this.InterpolantFactoryMethodSmooth:return Yc;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Xc(this.settings)&&(O0(this.settings.inTangents,e),O0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Xc(this.settings)&&(U0(this.settings.inTangents,e),U0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Et("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Et("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&av(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Et("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function O0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function U0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Vi.prototype.ValueTypeName="";Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=su;var Ur=class extends Vi{constructor(e,t,i){super(e,t,i)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=il;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Su=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}};Su.prototype.ValueTypeName="color";var wu=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}};wu.prototype.ValueTypeName="number";var Eu=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Al=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Eu(this.times,this.values,this.getValueSize(),e)}};Al.prototype.ValueTypeName="quaternion";Al.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends Vi{constructor(e,t,i){super(e,t,i)}};Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=il;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Tu=class extends Vi{constructor(e,t,i,s){super(e,t,i,s)}};Tu.prototype.ValueTypeName="vector";var Au=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cm=new Au,Ru=class{constructor(e){this.manager=e!==void 0?e:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rl=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Cl=class extends Rl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Gh=new bt,F0=new P,k0=new P,Cu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;F0.setFromMatrixPosition(e.matrixWorld),t.position.copy(F0),k0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Gh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Gh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ua||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qc=new P,$c=new un,Hs=new P,Pl=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qc,$c,Hs),Hs.x===1&&Hs.y===1&&Hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,$c,Hs.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(qc,$c,Hs),Hs.x===1&&Hs.y===1&&Hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,$c,Hs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lr=new P,B0=new Ce,z0=new Ce,jn=class extends Pl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,B0,z0),t.subVectors(z0,B0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mr=class extends Pl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jh=class extends Cu{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends Rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Il=class extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var oa=-90,aa=1,Sa=class extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jn(oa,aa,e,t);s.layers=this.layers,this.add(s);let r=new jn(oa,aa,e,t);r.layers=this.layers,this.add(r);let o=new jn(oa,aa,e,t);o.layers=this.layers,this.add(o);let a=new jn(oa,aa,e,t);a.layers=this.layers,this.add(a);let l=new jn(oa,aa,e,t);l.layers=this.layers,this.add(l);let c=new jn(oa,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===es)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Pu=class extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var If="\\[\\]\\.:\\/",v_=new RegExp("["+If+"]","g"),Lf="[^"+If+"]",__="[^"+If.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",Lf),M_=/(WCOD+)?/.source.replace("WCOD",__),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lf),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lf),E_=new RegExp("^"+b_+M_+S_+w_+"$"),T_=["material","materials","bones","map"],jh=class{constructor(e,t,i){let s=i||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v_,"")}static parseTrackName(e){let t=E_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);T_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=jh;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZA=new Float32Array(1);var H0=new bt,_o=class{constructor(e,t,i=0,s=1/0){this.ray=new dr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return H0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(H0),this}intersectObject(e,t=!0,i=[]){return Qh(e,this,i,t),i.sort(G0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qh(e[s],this,i,t);return i.sort(G0),i}};function G0(n,e){return n.distance-e.distance}function Qh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Qh(r[o],e,t,!0)}}var wa=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ef=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Ll=class extends ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Df(n,e,t,i){let s=A_(i);switch(t){case yf:return n*e;case ku:return n*e/s.components*s.byteLength;case Bu:return n*e/s.components*s.byteLength;case Gr:return n*e*2/s.components*s.byteLength;case zu:return n*e*2/s.components*s.byteLength;case vf:return n*e*3/s.components*s.byteLength;case _s:return n*e*4/s.components*s.byteLength;case Hu:return n*e*4/s.components*s.byteLength;case Ol:case Ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vu:case Xu:return Math.max(n,16)*Math.max(e,8)/4;case Gu:case Wu:return Math.max(n,8)*Math.max(e,8)/2;case qu:case $u:case Ku:case Zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yu:case Bl:case Ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case td:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case id:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case od:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ud:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hd:case fd:case pd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case md:case gd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zl:case xd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A_(n){switch(n){case Ii:case pf:return{byteLength:1,components:1};case Ra:case mf:case Ai:return{byteLength:2,components:1};case Uu:case Fu:return{byteLength:2,components:4};case vs:case Ou:case ns:return{byteLength:4,components:1};case gf:case xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function L_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N_=`#ifdef USE_ALPHAHASH
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
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
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
#endif`,z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H_=`#ifdef USE_BATCHING
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
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n1=`#define PI 3.141592653589793
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
} // validated`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
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
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w1=`#ifdef USE_ENVMAP
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
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
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
#endif`,P1=`uniform sampler2D dfgLUT;
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
}`,I1=`
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
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
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
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
#endif`,K1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tb=`#ifdef USE_NORMALMAP
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
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform float backgroundBlurriness;
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Bb=`#if DEPTH_PACKING == 3200
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
}`,zb=`#define DISTANCE
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
}`,Hb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`uniform float scale;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,Kb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Jb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,Qb=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,rM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,dM=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:D_,alphahash_pars_fragment:N_,alphamap_fragment:O_,alphamap_pars_fragment:U_,alphatest_fragment:F_,alphatest_pars_fragment:k_,aomap_fragment:B_,aomap_pars_fragment:z_,batching_pars_vertex:H_,batching_vertex:G_,begin_vertex:V_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:q_,bumpmap_pars_fragment:$_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:J_,color_fragment:j_,color_pars_fragment:Q_,color_pars_vertex:e1,color_vertex:t1,common:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:s1,displacementmap_vertex:r1,emissivemap_fragment:o1,emissivemap_pars_fragment:a1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:u1,envmap_common_pars_fragment:d1,envmap_pars_fragment:h1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:w1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:x1,fog_pars_fragment:y1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:M1,lights_pars_begin:S1,lights_toon_fragment:E1,lights_toon_pars_fragment:T1,lights_phong_fragment:A1,lights_phong_pars_fragment:R1,lights_physical_fragment:C1,lights_physical_pars_fragment:P1,lights_fragment_begin:I1,lights_fragment_maps:L1,lights_fragment_end:D1,lightprobes_pars_fragment:N1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:k1,map_fragment:B1,map_pars_fragment:z1,map_particle_fragment:H1,map_particle_pars_fragment:G1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:W1,morphinstance_vertex:X1,morphcolor_vertex:q1,morphnormal_vertex:$1,morphtarget_pars_vertex:Y1,morphtarget_vertex:K1,normal_fragment_begin:Z1,normal_fragment_maps:J1,normal_pars_fragment:j1,normal_pars_vertex:Q1,normal_vertex:eb,normalmap_pars_fragment:tb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:sb,iridescence_pars_fragment:rb,opaque_fragment:ob,packing:ab,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:ub,dithering_pars_fragment:db,roughnessmap_fragment:hb,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:xb,skinbase_vertex:yb,skinning_pars_vertex:vb,skinning_vertex:_b,skinnormal_vertex:bb,specularmap_fragment:Mb,specularmap_pars_fragment:Sb,tonemapping_fragment:wb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:Ab,uv_pars_fragment:Rb,uv_pars_vertex:Cb,uv_vertex:Pb,worldpos_vertex:Ib,background_vert:Lb,background_frag:Db,backgroundCube_vert:Nb,backgroundCube_frag:Ob,cube_vert:Ub,cube_frag:Fb,depth_vert:kb,depth_frag:Bb,distance_vert:zb,distance_frag:Hb,equirect_vert:Gb,equirect_frag:Vb,linedashed_vert:Wb,linedashed_frag:Xb,meshbasic_vert:qb,meshbasic_frag:$b,meshlambert_vert:Yb,meshlambert_frag:Kb,meshmatcap_vert:Zb,meshmatcap_frag:Jb,meshnormal_vert:jb,meshnormal_frag:Qb,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:sM,meshtoon_frag:rM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:dM},et={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Zs={basic:{uniforms:yi([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:yi([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:yi([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:yi([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:yi([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new ze(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:yi([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:yi([et.points,et.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:yi([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:yi([et.common,et.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:yi([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:yi([et.sprite,et.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:yi([et.common,et.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:yi([et.lights,et.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Zs.physical={uniforms:yi([Zs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Md={r:0,b:0,g:0},hM=new bt,jm=new Rt;jm.set(-1,0,0,0,1,0,0,0,1);function fM(n,e,t,i,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1,y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new nt(new en(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:To(Zs.backgroundCube.uniforms),vertexShader:Zs.backgroundCube.vertexShader,fragmentShader:Zs.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jm),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==an,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new vt(2,2),new ln({name:"BackgroundMaterial",uniforms:To(Zs.background.uniforms),vertexShader:Zs.background.vertexShader,fragmentShader:Zs.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==an,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Md,Pf(n)),t.buffers.color.setClear(Md.r,Md.g,Md.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function pM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(D,k,H,N,q){let te=!1,Q=d(D,N,H,k);r!==Q&&(r=Q,c(r.object)),te=f(D,N,H,q),te&&p(D,N,H,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(D,k,H,N),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,k,H,N){let q=N.wireframe===!0,te=i[k.id];te===void 0&&(te={},i[k.id]=te);let Q=D.isInstancedMesh===!0?D.id:0,ee=te[Q];ee===void 0&&(ee={},te[Q]=ee);let W=ee[H.id];W===void 0&&(W={},ee[H.id]=W);let K=W[q];return K===void 0&&(K=h(l()),W[q]=K),K}function h(D){let k=[],H=[],N=[];for(let q=0;q<t;q++)k[q]=0,H[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,k,H,N){let q=r.attributes,te=k.attributes,Q=0,ee=H.getAttributes();for(let W in ee)if(ee[W].location>=0){let O=q[W],$=te[W];if($===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),O===void 0||O.attribute!==$||$&&O.data!==$.data)return!0;Q++}return r.attributesNum!==Q||r.index!==N}function p(D,k,H,N){let q={},te=k.attributes,Q=0,ee=H.getAttributes();for(let W in ee)if(ee[W].location>=0){let O=te[W];O===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));let $={};$.attribute=O,O&&O.data&&($.data=O.data),q[W]=$,Q++}r.attributes=q,r.attributesNum=Q,r.index=N}function x(){let D=r.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function m(D){g(D,0)}function g(D,k){let H=r.newAttributes,N=r.enabledAttributes,q=r.attributeDivisors;H[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),q[D]!==k&&(n.vertexAttribDivisor(D,k),q[D]=k)}function _(){let D=r.newAttributes,k=r.enabledAttributes;for(let H=0,N=k.length;H<N;H++)k[H]!==D[H]&&(n.disableVertexAttribArray(H),k[H]=0)}function b(D,k,H,N,q,te,Q){Q===!0?n.vertexAttribIPointer(D,k,H,q,te):n.vertexAttribPointer(D,k,H,N,q,te)}function y(D,k,H,N){x();let q=N.attributes,te=H.getAttributes(),Q=k.defaultAttributeValues;for(let ee in te){let W=te[ee];if(W.location>=0){let K=q[ee];if(K===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let O=K.normalized,$=K.itemSize,ce=e.get(K);if(ce===void 0)continue;let Z=ce.buffer,ge=ce.type,Me=ce.bytesPerElement,ne=ge===n.INT||ge===n.UNSIGNED_INT||K.gpuType===Ou;if(K.isInterleavedBufferAttribute){let ye=K.data,De=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,tt=K.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Be=0;Be<W.locationSize;Be++)g(W.location+Be,ye.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Be=0;Be<W.locationSize;Be++)m(W.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Be=0;Be<W.locationSize;Be++)b(W.location+Be,$/W.locationSize,ge,O,De*Me,(tt+$/W.locationSize*Be)*Me,ne)}else{if(K.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye,K.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<W.locationSize;ye++)m(W.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let ye=0;ye<W.locationSize;ye++)b(W.location+ye,$/W.locationSize,ge,O,$*Me,$/W.locationSize*ye*Me,ne)}}else if(Q!==void 0){let O=Q[ee];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(W.location,O);break;case 3:n.vertexAttrib3fv(W.location,O);break;case 4:n.vertexAttrib4fv(W.location,O);break;default:n.vertexAttrib1fv(W.location,O)}}}}_()}function M(){T();for(let D in i){let k=i[D];for(let H in k){let N=k[H];for(let q in N){let te=N[q];for(let Q in te)u(te[Q].object),delete te[Q];delete N[q]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let k=i[D.id];for(let H in k){let N=k[H];for(let q in N){let te=N[q];for(let Q in te)u(te[Q].object),delete te[Q];delete N[q]}}delete i[D.id]}function v(D){for(let k in i){let H=i[k];for(let N in H){let q=H[N];if(q[D.id]===void 0)continue;let te=q[D.id];for(let Q in te)u(te[Q].object),delete te[Q];delete q[D.id]}}}function S(D){for(let k in i){let H=i[k],N=D.isInstancedMesh===!0?D.id:0,q=H[N];if(q!==void 0){for(let te in q){let Q=q[te];for(let ee in Q)u(Q[ee].object),delete Q[ee];delete q[te]}delete H[N],Object.keys(H).length===0&&delete i[k]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function mM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==_s&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Ii&&v!==ns&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(wt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:w}}function xM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Si,a=new Rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,y=g.clippingState||null;l.value=y,y=u(p,h,b,f);for(let M=0;M!==b;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Vl=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Mo});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=Cn),new Sa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Pm=256,yM=3,vM=20,Qm=256,eg=16,_M=3,bM=new P,MM=new ze,Pa=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sa(1,10,null),this._boxMesh=new nt(new en(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=bM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(MM));let m=new Sa(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pm,Tf(e))}_fromTexture(e,t){e.mapping===wo||e.mapping===Aa?this._setSize(e.image.length===0?Pm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Im(e,!1,!1),i=Math.log2(e)-yM;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Im(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wo||e.mapping===Aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=SM(),this._integrationMaterial=wM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/eg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-_M)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Qm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=EM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Im(n,e,t){return new Vl(n,{minFilter:ys,generateMipmaps:e,type:Ai,colorSpace:sl,depthBuffer:t})}function Wl(n,e,t){return new ln({name:n,uniforms:e,vertexShader:Gt.cube_vert,fragmentShader:t,side:li,blending:Mo,depthTest:!1,depthWrite:!1})}function SM(){return Wl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qm}u

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
	`)}function wM(){return Wl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eg}},`

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
	`)}function EM(){return Wl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vM}
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
	`)}function Lm(){return Wl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dm(){return Wl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function TM(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Lu||f===Du)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new Vl(p.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===Lu||f===Du,x=f===wo||f===Aa;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Pa(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Pa(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Lu?h.mapping=wo:f===Du&&(h.mapping=Aa),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function AM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&po("WebGLRenderer: "+i+" extension not supported."),s}}}function RM(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?ul:cl,y=new b(Math.ceil(_/3)*6,1),M=y.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,T=0;S<_;S+=3){let R=v[S+0],D=v[S+1],k=v[S+2];M[T++]=R,M[T++]=D,M[T++]=D,M[T++]=k,M[T++]=k,M[T++]=R}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){let T=v+0,R=v+1,D=v+2;M[S++]=T,M[S++]=R,M[S++]=R,M[S++]=D,M[S++]=D,M[S++]=T}}y.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function h(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function CM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function PM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function IM(n,e,t){let i=new WeakMap,s=new mn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let T=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*d),v=new ll(w,y,M,d);v.type=ns,v.needsUpdate=!0;let S=b*4;for(let R=0;R<d;R++){let D=m[R],k=g[R],H=_[R],N=y*M*4*R;for(let q=0;q<D.count;q++){let te=q*S;f===!0&&(s.fromBufferAttribute(D,q),w[N+te+0]=s.x,w[N+te+1]=s.y,w[N+te+2]=s.z,w[N+te+3]=0),p===!0&&(s.fromBufferAttribute(k,q),w[N+te+4]=s.x,w[N+te+5]=s.y,w[N+te+6]=s.z,w[N+te+7]=0),x===!0&&(s.fromBufferAttribute(H,q),w[N+te+8]=s.x,w[N+te+9]=s.y,w[N+te+10]=s.z,w[N+te+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Ce(y,M)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function LM(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var DM={[af]:"LINEAR_TONE_MAPPING",[lf]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[uf]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[Dl]:"NEUTRAL_TONE_MAPPING",[df]:"CUSTOM_TONE_MAPPING"};function NM(n,e,t,i,s,r){let o=new ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new qt;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));let d=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new nt(u,d),f=new mr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,b=[],y=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(M,w)}},this.setEffects=function(M){b=M,y=b.length>0&&b[0].isRenderPass===!0;let w=o.width,v=o.height;b.length>0&&a===null&&(a=new ai(w,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new ai(w,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(T=>T.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new hr(w,v),r===!0&&(c.format=gr,c.type=Eo)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let T=0;T<b.length;T++){let R=b[T];R.setSize&&R.setSize(w,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===Ys&&b.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Ys,!0},this.hasRenderPass=function(){return y},this.end=function(M,w){M.toneMapping=g,m=!0;let v=o,S=a;for(let T=0;T<b.length;T++){let R=b[T];R.enabled!==!1&&(R.render(M,S,v,w),R.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,d.defines={},Jt.getTransfer(p)===an&&(d.defines.SRGB_TRANSFER="");let T=DM[x];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var tg=new wi,ng=new hr(1,1),ig=new gl(1),sg=new ll,rg=new au,og=new pl,Nm=[],Om=[],Um=new Float32Array(16),Fm=new Float32Array(9),km=new Float32Array(4);function Ia(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ed(n,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2fv(this.addr,e),Xn(t,e)}}function FM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wn(t,e))return;n.uniform3fv(this.addr,e),Xn(t,e)}}function kM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4fv(this.addr,e),Xn(t,e)}}function BM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;km.set(i),n.uniformMatrix2fv(this.addr,!1,km),Xn(t,i)}}function zM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;Fm.set(i),n.uniformMatrix3fv(this.addr,!1,Fm),Xn(t,i)}}function HM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xn(t,e)}else{if(Wn(t,i))return;Um.set(i),n.uniformMatrix4fv(this.addr,!1,Um),Xn(t,i)}}function GM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2iv(this.addr,e),Xn(t,e)}}function WM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3iv(this.addr,e),Xn(t,e)}}function XM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4iv(this.addr,e),Xn(t,e)}}function qM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wn(t,e))return;n.uniform2uiv(this.addr,e),Xn(t,e)}}function YM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wn(t,e))return;n.uniform3uiv(this.addr,e),Xn(t,e)}}function KM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wn(t,e))return;n.uniform4uiv(this.addr,e),Xn(t,e)}}function Td(n){return n.version===0&&(n.compareFunction=Mf,n.needsUpdate=!0),n}function ZM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Td(ng):r=tg,t.setTexture2D(e||r,s)}function JM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rg,s)}function jM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Td(ig):r=og,t.setTextureCube(e||r,s)}function QM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sg,s)}function eS(n){switch(n){case 5126:return OM;case 35664:return UM;case 35665:return FM;case 35666:return kM;case 35674:return BM;case 35675:return zM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return VM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return $M;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return QM}}function tS(n,e){n.uniform1fv(this.addr,e)}function nS(n,e){let t=Ia(e,this.size,2);n.uniform2fv(this.addr,t)}function iS(n,e){let t=Ia(e,this.size,3);n.uniform3fv(this.addr,t)}function sS(n,e){let t=Ia(e,this.size,4);n.uniform4fv(this.addr,t)}function rS(n,e){let t=Ia(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oS(n,e){let t=Ia(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aS(n,e){let t=Ia(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lS(n,e){n.uniform1iv(this.addr,e)}function cS(n,e){n.uniform2iv(this.addr,e)}function uS(n,e){n.uniform3iv(this.addr,e)}function dS(n,e){n.uniform4iv(this.addr,e)}function hS(n,e){n.uniform1uiv(this.addr,e)}function fS(n,e){n.uniform2uiv(this.addr,e)}function pS(n,e){n.uniform3uiv(this.addr,e)}function mS(n,e){n.uniform4uiv(this.addr,e)}function gS(n,e,t){let i=this.cache,s=e.length,r=Ed(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Td(ng):o=tg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function xS(n,e,t){let i=this.cache,s=e.length,r=Ed(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rg,r[o])}function yS(n,e,t){let i=this.cache,s=e.length,r=Ed(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Td(ig):o=og;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function vS(n,e,t){let i=this.cache,s=e.length,r=Ed(t,s);Wn(i,r)||(n.uniform1iv(this.addr,r),Xn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sg,r[o])}function _S(n){switch(n){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return hS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return vS}}var Uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eS(t.type)}},Ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Nf=/(\w+)(\])?(\[|\.)?/g;function Bm(n,e){n.seq.push(e),n.map[e.id]=e}function bS(n,e,t){let i=n.name,s=i.length;for(Nf.lastIndex=0;;){let r=Nf.exec(i),o=Nf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bm(t,c===void 0?new Uf(a,n,e):new Ff(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kf(a),Bm(t,d)),t=d}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);bS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function zm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MS=37297,SS=0;function wS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Hm=new Rt;function ES(n){Jt._getMatrix(Hm,Jt.workingColorSpace,n);let e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(Jt.getTransfer(n)){case rl:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wS(n.getShaderSource(e),a)}else return r}function TS(n,e){let t=ES(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var AS={[af]:"Linear",[lf]:"Reinhard",[cf]:"Cineon",[uf]:"ACESFilmic",[hf]:"AgX",[Dl]:"Neutral",[df]:"Custom"};function RS(n,e){let t=AS[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sd=new P;function CS(){Jt.getLuminanceCoefficients(Sd);let n=Sd.x.toFixed(4),e=Sd.y.toFixed(4),t=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function IS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gl(n){return n!==""}function Vm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(n){return n.replace(DS,NS)}function NS(n,e){let t=Gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bf(t)}var OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(n){return n.replace(OS,US)}function US(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qm(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var FS={[bo]:"SHADOWMAP_TYPE_PCF",[Ea]:"SHADOWMAP_TYPE_VSM"};function kS(n){return FS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var BS={[Aa]:"ENVMAP_MODE_REFRACTION"};function zS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":BS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var HS={[of]:"ENVMAP_BLENDING_MULTIPLY",[am]:"ENVMAP_BLENDING_MIX",[lm]:"ENVMAP_BLENDING_ADD"};function GS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":HS[n.combine]||"ENVMAP_BLENDING_NONE"}function VS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=kS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=zS(t),d=GS(t),h=PS(t),f=IS(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Gl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Gl).join(`
`),m.length>0&&(m+=`
`)):(x=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),m=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ys?"#define TONE_MAPPING":"",t.toneMapping!==Ys?Gt.tonemapping_pars_fragment:"",t.toneMapping!==Ys?RS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,TS("linearToOutputTexel",t.outputColorSpace),CS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gl).join(`
`)),o=Bf(o),o=Vm(o,t),o=Wm(o,t),a=Bf(a),a=Vm(a,t),a=Wm(a,t),o=Xm(o),a=Xm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,b=g+m+a,y=zm(s,s.VERTEX_SHADER,_),M=zm(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(M)||"",N=D.trim(),q=k.trim(),te=H.trim(),Q=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,M);else{let W=Gm(s,y,"vertex"),K=Gm(s,M,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+W+`
`+K)}else N!==""?wt("WebGLProgram: Program Info Log:",N):(q===""||te==="")&&(ee=!1);ee&&(R.diagnostics={runnable:Q,programLog:N,vertexShader:{log:q,prefix:x},fragmentShader:{log:te,prefix:m}})}s.deleteShader(y),s.deleteShader(M),v=new Ca(s,p),S=LS(s,p)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(p,MS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=M,this}var WS=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hf(e),t.set(e,i)),i}},Hf=class{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}};function XS(n){return n===Gr||n===Bl||n===zl}function qS(n,e,t,i,s,r){let o=new pa,a=new zf,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,T,R,D,k){let H=R.fog,N=D.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,te=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||q,te),ee=h[v.type],W=i.precision;v.precision!==null&&(W=i.getMaxPrecision(v.precision),W!==v.precision&&wt("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,O=K!==void 0?K.length:0,$=0;N.morphAttributes.position!==void 0&&($=1),N.morphAttributes.normal!==void 0&&($=2),N.morphAttributes.color!==void 0&&($=3);let ce,Z,ge,Me;if(ee){let Ze=Zs[ee];ce=Ze.vertexShader,Z=Ze.fragmentShader}else{ce=v.vertexShader,Z=v.fragmentShader;let Ze=a.getVertexShaderStage(v),Zt=a.getFragmentShaderStage(v);a.update(v,Ze,Zt),ge=Ze.id,Me=Zt.id}let ne=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,tt=D.isBatchedMesh===!0,Be=!!v.map,je=!!v.matcap,Ge=!!Q,xe=Ge&&Q.isPMREMTexture===!0,G=!!v.aoMap,z=!!v.lightMap,re=!!v.bumpMap&&v.wireframe===!1,J=!!v.normalMap,se=!!v.displacementMap,Re=!!v.emissiveMap,F=!!v.metalnessMap,oe=!!v.roughnessMap,fe=v.anisotropy>0,U=v.clearcoat>0,Ke=v.diffuseRoughness>0,ut=v.dispersion>0,gt=v.retroreflectivity>0,Pe=v.iridescence>0,A=v.sheen>0,Y=v.transmission>0,he=fe&&!!v.anisotropyMap,I=U&&!!v.clearcoatMap,E=U&&!!v.clearcoatNormalMap,V=U&&!!v.clearcoatRoughnessMap,pe=Ke&&!!v.diffuseRoughnessMap,me=Pe&&!!v.iridescenceMap,ke=Pe&&!!v.iridescenceThicknessMap,Ve=A&&!!v.sheenColorMap,Ee=A&&!!v.sheenRoughnessMap,Se=!!v.specularMap,We=!!v.specularColorMap,X=!!v.specularIntensityMap,Te=Y&&!!v.transmissionMap,be=Y&&!!v.thicknessMap,Ie=!!v.gradientMap,Fe=!!v.alphaMap,Xe=v.alphaTest>0,ve=!!v.alphaHash,Pt=!!v.extensions,Ue=Ys;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=n.toneMapping);let xt=xe?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,At={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:Z,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:tt,batchingColor:tt&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:je,envMap:Ge,envMapMode:Ge&&Q.mapping,envMapPMREM:xe,envMapMaxLod:xe?xt.length-1:null,envMapSize:xe?xt[0].width:null,aoMap:G,lightMap:z,bumpMap:re,normalMap:J,displacementMap:se,emissiveMap:Re,normalMapObjectSpace:J&&v.normalMapType===dm,normalMapTangentSpace:J&&v.normalMapType===yd,packedNormalMap:J&&v.normalMapType===yd&&XS(v.normalMap.format),metalnessMap:F,roughnessMap:oe,anisotropy:fe,anisotropyMap:he,clearcoat:U,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:V,diffuseRoughness:Ke,diffuseRoughnessMap:pe,dispersion:ut,retroreflection:gt,iridescence:Pe,iridescenceMap:me,iridescenceThicknessMap:ke,sheen:A,sheenColorMap:Ve,sheenRoughnessMap:Ee,specularMap:Se,specularColorMap:We,specularIntensityMap:X,transmission:Y,transmissionMap:Te,thicknessMap:be,gradientMap:Ie,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Xe,alphaHash:ve,combine:v.combine,mapUv:Be&&f(v.map.channel),aoMapUv:G&&f(v.aoMap.channel),lightMapUv:z&&f(v.lightMap.channel),bumpMapUv:re&&f(v.bumpMap.channel),normalMapUv:J&&f(v.normalMap.channel),displacementMapUv:se&&f(v.displacementMap.channel),emissiveMapUv:Re&&f(v.emissiveMap.channel),metalnessMapUv:F&&f(v.metalnessMap.channel),roughnessMapUv:oe&&f(v.roughnessMap.channel),anisotropyMapUv:he&&f(v.anisotropyMap.channel),clearcoatMapUv:I&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:me&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&f(v.sheenRoughnessMap.channel),specularMapUv:Se&&f(v.specularMap.channel),specularColorMapUv:We&&f(v.specularColorMap.channel),specularIntensityMapUv:X&&f(v.specularIntensityMap.channel),transmissionMapUv:Te&&f(v.transmissionMap.channel),thicknessMapUv:be&&f(v.thicknessMap.channel),alphaMapUv:Fe&&f(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(J||fe),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Be||Fe),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&J===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(Ze=>Ze.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===an,decodeVideoTextureEmissive:Re&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===an,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===li,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&v.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let T in v.defines)S.push(T),S.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=h[v.type],T;if(S){let R=Zs[S];T=bd.clone(R.uniforms)}else T=v.uniforms;return T}function b(v,S){let T=u.get(S);return T!==void 0?++T.usedTimes:(T=new VS(n,S,v,s),c.push(T),u.set(S,T)),T}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:w}}function $S(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function YS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ym(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let b=a(h,f,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(h,f,p,x,m,g){let _=a(h,f,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||YS),i.length>1&&i.sort(f||$m),s.length>1&&s.sort(f||$m)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function KS(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ym,n.set(i,[o])):s>=r.length?(o=new Ym,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function JS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jS=0;function QS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ew(n){let e=new ZS,t=JS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new bt,o=new bt;function a(c){let u=0,d=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,b=0,y=0,M=0,w=0,v=0,S=0,T=0,R=0;c.sort(QS);for(let k=0,H=c.length;k<H;k++){let N=c[k],q=N.color,te=N.intensity,Q=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Gr?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=q.r*te,d+=q.g*te,h+=q.b*te;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],te);R++}else if(N.isSunLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let K=N.shadow,O=t.get(N);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=O,i.sunShadowMap[p]=ee;let $=K.getViewportCount();for(let ce=0;ce<$;ce++)i.sunShadowMatrix[x+ce]=K.getMatrix(ce),i.sunShadowCascade[x+ce]=K._cascadeData[ce];x+=$,p++}i.sun[f]=W,f++}else if(N.isDirectionalLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let K=N.shadow,O=t.get(N);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=N.shadow.matrix,M++}i.directional[m]=W,m++}else if(N.isSpotLight){let W=e.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(q).multiplyScalar(te),W.distance=Q,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[_]=W;let K=N.shadow;if(N.map&&(i.spotLightMap[S]=N.map,S++,K.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[_]=K.matrix,N.castShadow){let O=t.get(N);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=ee,v++}_++}else if(N.isRectAreaLight){let W=e.get(N);W.color.copy(q).multiplyScalar(te),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[b]=W,b++}else if(N.isPointLight){let W=e.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let K=N.shadow,O=t.get(N);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=N.shadow.matrix,w++}i.point[g]=W,g++}else if(N.isHemisphereLight){let W=e.get(N);W.skyColor.copy(N.color).multiplyScalar(te),W.groundColor.copy(N.groundColor).multiplyScalar(te),i.hemi[y]=W,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==w||D.numSpotShadows!==v||D.numSpotMaps!==S||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=w,D.numSpotShadows=v,D.numSpotMaps=S,D.numLightProbes=R,i.version=jS++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),h++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Km(n){let e=new ew(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Km(n),e.set(s,[a])):r>=o.length?(a=new Km(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
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
}`,sw=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],rw=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Zm=new bt,Hl=new P,Of=new P;function ow(n,e,t){let i=new Dr,s=new Ce,r=new Ce,o=new mn,a=new xu,l=new yu,c={},u=t.maxTextureSize,d={[qs]:li,[li]:qs,[tn]:tn},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new qt;p.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let g=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===X0&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bo);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Mo),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=g!==this.type;H&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=w.length;N<q;N++){let te=w[N],Q=te.shadow;if(Q===void 0){wt("WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let ee=Q.getFrameExtents();s.multiply(ee),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,Q.mapSize.y=r.y));let W=n.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=W,Q.map===null||H===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ea){if(te.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new ai(s.x,s.y,{format:Gr,type:Ai,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),Q.map.texture.name=te.name+".shadowMap",Q.map.depthTexture=new hr(s.x,s.y,ns),Q.map.depthTexture.name=te.name+".shadowMapDepth",Q.map.depthTexture.format=cr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=ei,Q.map.depthTexture.magFilter=ei}else te.isPointLight?(Q.map=new Vl(s.x),Q.map.depthTexture=new gl(s.x,vs)):(Q.map=new ai(s.x,s.y),Q.map.depthTexture=new hr(s.x,s.y,vs)),Q.map.depthTexture.name=te.name+".shadowMap",Q.map.depthTexture.format=cr,this.type===bo?(Q.map.depthTexture.compareFunction=W?bf:_f,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=ei,Q.map.depthTexture.magFilter=ei);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let K=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();te.isPointLight!==!0&&Q.updateMatrices(te,S);let O=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:S.layers;for(let $=0;$<K;$++){let ce=Q.getCamera($);if(te.isPointLight){let Z=Q.camera,ge=Q.matrix,Me=te.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),Hl.setFromMatrixPosition(te.matrixWorld),Z.position.copy(Hl),Of.copy(Z.position),Of.add(sw[$]),Z.up.copy(rw[$]),Z.lookAt(Of),Z.updateMatrixWorld(),ge.makeTranslation(-Hl.x,-Hl.y,-Hl.z),Zm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Zm,Z.coordinateSystem,Z.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)n.setRenderTarget(Q.map,$),n.clear();else{$===0&&(n.setRenderTarget(Q.map),n.clear());let Z=Q.getViewport($);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),k.viewport(o)}i=Q.getFrustum($),y(v,S,ce,te,O,this.type)}Q.isPointLightShadow!==!0&&this.type===Ea&&_(Q,S),Q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,D)};function _(w,v){let S=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ai(s.x,s.y,{format:Gr,type:Ai}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,S,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,S,f,x,null)}function b(w,v,S,T){let R=null,D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=R.uuid,H=v.uuid,N=c[k];N===void 0&&(N={},c[k]=N);let q=N[H];q===void 0&&(q=R.clone(),N[H]=q,v.addEventListener("dispose",M)),R=q}if(R.visible=v.visible,R.wireframe=v.wireframe,T===Ea?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let k=n.properties.get(R);k.light=S}return R}function y(w,v,S,T,R,D){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Ea)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=e.update(w),q=w.material;if(Array.isArray(q)){let te=N.groups;for(let Q=0,ee=te.length;Q<ee;Q++){let W=te[Q],K=q[W.materialIndex];if(K&&K.visible){let O=b(w,K,T,D);w.onBeforeShadow(n,w,v,S,N,O,W),n.renderBufferDirect(S,null,N,O,w,W),w.onAfterShadow(n,w,v,S,N,O,W)}}}else if(q.visible){let te=b(w,q,T,D);w.onBeforeShadow(n,w,v,S,N,te,null),n.renderBufferDirect(S,null,N,te,w,null),w.onAfterShadow(n,w,v,S,N,te,null)}}let H=w.children;for(let N=0,q=H.length;N<q;N++)y(H[N],v,S,T,R,D)}function M(w){w.target.removeEventListener("dispose",M);for(let S in c){let T=c[S],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function aw(n,e){function t(){let X=!1,Te=new mn,be=null,Ie=new mn(0,0,0,0);return{setMask:function(Fe){be!==Fe&&!X&&(n.colorMask(Fe,Fe,Fe,Fe),be=Fe)},setLocked:function(Fe){X=Fe},setClear:function(Fe,Xe,ve,Pt,Ue){Ue===!0&&(Fe*=Pt,Xe*=Pt,ve*=Pt),Te.set(Fe,Xe,ve,Pt),Ie.equals(Te)===!1&&(n.clearColor(Fe,Xe,ve,Pt),Ie.copy(Te))},reset:function(){X=!1,be=null,Ie.set(-1,0,0,0)}}}function i(){let X=!1,Te=!1,be=null,Ie=null,Fe=null;return{setReversed:function(Xe){if(Te!==Xe){let ve=e.get("EXT_clip_control");Xe?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),Te=Xe;let Pt=Fe;Fe=null,this.setClear(Pt)}},getReversed:function(){return Te},setTest:function(Xe){Xe?ye(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(Xe){be!==Xe&&!X&&(n.depthMask(Xe),be=Xe)},setFunc:function(Xe){if(Te&&(Xe=bm[Xe]),Ie!==Xe){switch(Xe){case Zc:n.depthFunc(n.NEVER);break;case Jc:n.depthFunc(n.ALWAYS);break;case jc:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case Qc:n.depthFunc(n.EQUAL);break;case eu:n.depthFunc(n.GEQUAL);break;case tu:n.depthFunc(n.GREATER);break;case nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=Xe}},setLocked:function(Xe){X=Xe},setClear:function(Xe){Fe!==Xe&&(Fe=Xe,Te&&(Xe=1-Xe),n.clearDepth(Xe))},reset:function(){X=!1,be=null,Ie=null,Fe=null,Te=!1}}}function s(){let X=!1,Te=null,be=null,Ie=null,Fe=null,Xe=null,ve=null,Pt=null,Ue=null;return{setTest:function(xt){X||(xt?ye(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(xt){Te!==xt&&!X&&(n.stencilMask(xt),Te=xt)},setFunc:function(xt,At,Ze){(be!==xt||Ie!==At||Fe!==Ze)&&(n.stencilFunc(xt,At,Ze),be=xt,Ie=At,Fe=Ze)},setOp:function(xt,At,Ze){(Xe!==xt||ve!==At||Pt!==Ze)&&(n.stencilOp(xt,At,Ze),Xe=xt,ve=At,Pt=Ze)},setLocked:function(xt){X=xt},setClear:function(xt){Ue!==xt&&(n.clearStencil(xt),Ue=xt)},reset:function(){X=!1,Te=null,be=null,Ie=null,Fe=null,Xe=null,ve=null,Pt=null,Ue=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ze(0,0,0),T=0,R=!1,D=null,k=null,H=null,N=null,q=null,te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,ee=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),Q=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Q=ee>=2);let K=null,O={},$=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Z=new mn().fromArray($),ge=new mn().fromArray(ce);function Me(X,Te,be,Ie){let Fe=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(X,Xe),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<be;ve++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Te+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return Xe}let ne={};ne[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(ca),re(!1),J(tf),ye(n.CULL_FACE),G(Mo);function ye(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function De(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function tt(X,Te){return h[X]!==Te?(n.bindFramebuffer(X,Te),h[X]=Te,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Te),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Be(X,Te){let be=p,Ie=!1;if(X){be=f.get(Te),be===void 0&&(be=[],f.set(Te,be));let Fe=X.textures;if(be.length!==Fe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,ve=Fe.length;Xe<ve;Xe++)be[Xe]=n.COLOR_ATTACHMENT0+Xe;be.length=Fe.length,Ie=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(be)}function je(X){return x!==X?(n.useProgram(X),x=X,!0):!1}let Ge={[So]:n.FUNC_ADD,[q0]:n.FUNC_SUBTRACT,[$0]:n.FUNC_REVERSE_SUBTRACT};Ge[Y0]=n.MIN,Ge[K0]=n.MAX;let xe={[Iu]:n.ZERO,[zr]:n.ONE,[Z0]:n.SRC_COLOR,[rf]:n.SRC_ALPHA,[nm]:n.SRC_ALPHA_SATURATE,[em]:n.DST_COLOR,[j0]:n.DST_ALPHA,[J0]:n.ONE_MINUS_SRC_COLOR,[Hr]:n.ONE_MINUS_SRC_ALPHA,[tm]:n.ONE_MINUS_DST_COLOR,[Q0]:n.ONE_MINUS_DST_ALPHA,[im]:n.CONSTANT_COLOR,[sm]:n.ONE_MINUS_CONSTANT_COLOR,[rm]:n.CONSTANT_ALPHA,[om]:n.ONE_MINUS_CONSTANT_ALPHA};function G(X,Te,be,Ie,Fe,Xe,ve,Pt,Ue,xt){if(X===Mo){m===!0&&(De(n.BLEND),m=!1);return}if(m===!1&&(ye(n.BLEND),m=!0),X!==Ta){if(X!==g||xt!==R){if((_!==So||M!==So)&&(n.blendEquation(n.FUNC_ADD),_=So,M=So),xt)switch(X){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFunc(n.ONE,n.ONE);break;case nf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ti:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case nf:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sf:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}b=null,y=null,w=null,v=null,S.set(0,0,0),T=0,g=X,R=xt}return}Fe=Fe||Te,Xe=Xe||be,ve=ve||Ie,(Te!==_||Fe!==M)&&(n.blendEquationSeparate(Ge[Te],Ge[Fe]),_=Te,M=Fe),(be!==b||Ie!==y||Xe!==w||ve!==v)&&(n.blendFuncSeparate(xe[be],xe[Ie],xe[Xe],xe[ve]),b=be,y=Ie,w=Xe,v=ve),(Pt.equals(S)===!1||Ue!==T)&&(n.blendColor(Pt.r,Pt.g,Pt.b,Ue),S.copy(Pt),T=Ue),g=X,R=!1}function z(X,Te){X.side===tn?De(n.CULL_FACE):ye(n.CULL_FACE);let be=X.side===li;Te&&(be=!be),re(be),X.blending===$s&&X.transparent===!1?G(Mo):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ie=X.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Re(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){D!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),D=X)}function J(X){X!==V0?(ye(n.CULL_FACE),X!==k&&(X===tf?n.cullFace(n.BACK):X===W0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),k=X}function se(X){X!==H&&(Q&&n.lineWidth(X),H=X)}function Re(X,Te,be){X?(ye(n.POLYGON_OFFSET_FILL),(N!==Te||q!==be)&&(N=Te,q=be,o.getReversed()&&(Te=-Te,be=-be),n.polygonOffset(Te,be))):De(n.POLYGON_OFFSET_FILL)}function F(X){X?ye(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function oe(X){X===void 0&&(X=n.TEXTURE0+te-1),K!==X&&(n.activeTexture(X),K=X)}function fe(X,Te,be){be===void 0&&(K===null?be=n.TEXTURE0+te-1:be=K);let Ie=O[be];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[be]=Ie),(Ie.type!==X||Ie.texture!==Te)&&(K!==be&&(n.activeTexture(be),K=be),n.bindTexture(X,Te||ne[X]),Ie.type=X,Ie.texture=Te)}function U(){let X=O[K];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function gt(){try{n.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Pe(){try{n.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function A(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function he(){try{n.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function I(){try{n.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function E(){try{n.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function V(){try{n.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function pe(X){return d[X]!==void 0?d[X]:n.getParameter(X)}function me(X,Te){d[X]!==Te&&(n.pixelStorei(X,Te),d[X]=Te)}function ke(X){Z.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Z.copy(X))}function Ve(X){ge.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),ge.copy(X))}function Ee(X,Te){let be=c.get(Te);be===void 0&&(be=new WeakMap,c.set(Te,be));let Ie=be.get(X);Ie===void 0&&(Ie=n.getUniformBlockIndex(Te,X.name),n.uniformBlockBinding(Te,Ie,Ie),be.set(X,Ie))}function Se(X,Te,be){let Fe=c.get(Te).get(X);l[Fe]!==be&&(n.bindBufferBase(n.UNIFORM_BUFFER,Fe,be),l[Fe]=be)}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,O={},h={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ze(0,0,0),T=0,R=!1,D=null,k=null,H=null,N=null,q=null,Z.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:De,bindFramebuffer:tt,drawBuffers:Be,useProgram:je,setBlending:G,setMaterial:z,setFlipSided:re,setCullFace:J,setLineWidth:se,setPolygonOffset:Re,setScissorTest:F,activeTexture:oe,bindTexture:fe,unbindTexture:U,compressedTexImage2D:Ke,compressedTexImage3D:ut,texImage2D:E,texImage3D:V,pixelStorei:me,getParameter:pe,updateUBOMapping:Ee,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:I,texSubImage2D:gt,texSubImage3D:Pe,compressedTexSubImage2D:A,compressedTexSubImage3D:Y,scissor:ke,viewport:Ve,reset:We}}function lw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):ol("canvas")}function _(I,E,V){let pe=1,me=he(I);if((me.width>V||me.height>V)&&(pe=V/Math.max(me.width,me.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ke=Math.floor(pe*me.width),Ve=Math.floor(pe*me.height);h===void 0&&(h=g(ke,Ve));let Ee=E?g(ke,Ve):h;return Ee.width=ke,Ee.height=Ve,Ee.getContext("2d").drawImage(I,0,0,ke,Ve),wt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ke+"x"+Ve+")."),Ee}else return"data"in I&&wt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function b(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(I,E,V,pe,me,ke=!1){if(I!==null){if(n[I]!==void 0)return n[I];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ve;pe&&(Ve=e.get("EXT_texture_norm16"),Ve||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Ee=E;if(E===n.RED&&(V===n.FLOAT&&(Ee=n.R32F),V===n.HALF_FLOAT&&(Ee=n.R16F),V===n.UNSIGNED_BYTE&&(Ee=n.R8),V===n.UNSIGNED_SHORT&&Ve&&(Ee=Ve.R16_EXT),V===n.SHORT&&Ve&&(Ee=Ve.R16_SNORM_EXT)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Ee=n.R8UI),V===n.UNSIGNED_SHORT&&(Ee=n.R16UI),V===n.UNSIGNED_INT&&(Ee=n.R32UI),V===n.BYTE&&(Ee=n.R8I),V===n.SHORT&&(Ee=n.R16I),V===n.INT&&(Ee=n.R32I)),E===n.RG&&(V===n.FLOAT&&(Ee=n.RG32F),V===n.HALF_FLOAT&&(Ee=n.RG16F),V===n.UNSIGNED_BYTE&&(Ee=n.RG8),V===n.UNSIGNED_SHORT&&Ve&&(Ee=Ve.RG16_EXT),V===n.SHORT&&Ve&&(Ee=Ve.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Ee=n.RG8UI),V===n.UNSIGNED_SHORT&&(Ee=n.RG16UI),V===n.UNSIGNED_INT&&(Ee=n.RG32UI),V===n.BYTE&&(Ee=n.RG8I),V===n.SHORT&&(Ee=n.RG16I),V===n.INT&&(Ee=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Ee=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Ee=n.RGB16UI),V===n.UNSIGNED_INT&&(Ee=n.RGB32UI),V===n.BYTE&&(Ee=n.RGB8I),V===n.SHORT&&(Ee=n.RGB16I),V===n.INT&&(Ee=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Ee=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Ee=n.RGBA16UI),V===n.UNSIGNED_INT&&(Ee=n.RGBA32UI),V===n.BYTE&&(Ee=n.RGBA8I),V===n.SHORT&&(Ee=n.RGBA16I),V===n.INT&&(Ee=n.RGBA32I)),E===n.RGB&&(V===n.UNSIGNED_SHORT&&Ve&&(Ee=Ve.RGB16_EXT),V===n.SHORT&&Ve&&(Ee=Ve.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(Ee=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Ee=n.R11F_G11F_B10F)),E===n.RGBA){let Se=ke?rl:Jt.getTransfer(me);V===n.FLOAT&&(Ee=n.RGBA32F),V===n.HALF_FLOAT&&(Ee=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Ee=Se===an?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&Ve&&(Ee=Ve.RGBA16_EXT),V===n.SHORT&&Ve&&(Ee=Ve.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(Ee=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Ee=n.RGB5_A1)}return(Ee===n.R16F||Ee===n.R32F||Ee===n.RG16F||Ee===n.RG32F||Ee===n.RGBA16F||Ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function v(I,E){let V;return I?E===null||E===vs||E===Eo?V=n.DEPTH24_STENCIL8:E===ns?V=n.DEPTH32F_STENCIL8:E===Ra&&(V=n.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vs||E===Eo?V=n.DEPTH_COMPONENT24:E===ns?V=n.DEPTH_COMPONENT32F:E===Ra&&(V=n.DEPTH_COMPONENT16),V}function S(I,E){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==ei&&I.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function T(I){let E=new WeakRef(I);i.get(I).__ref=E,p.add(E),x.register(I,E,E)}function R(I){let E=i.get(I).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function D(I){H(I.target)}function k(I){N(I.target)}function H(I){I.removeEventListener("dispose",D),R(I),te(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function N(I){I.removeEventListener("dispose",k),R(I),ee(I)}function q(){for(let I of p){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):H(E))}p.clear(),d.clear()}function te(I){let E=i.get(I);if(E.__webglInit===void 0)return;let V=I.source,pe=f.get(V);if(pe){let me=pe[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&Q(I),Object.keys(pe).length===0&&f.delete(V)}i.remove(I)}function Q(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let V=I.source,pe=f.get(V);delete pe[E.__cacheKey],o.memory.textures--}function ee(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let V=I.depthTexture;if(V&&V.renderTarget===I&&H(V),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ke=0;ke<E.__webglFramebuffer[me].length;ke++)n.deleteFramebuffer(E.__webglFramebuffer[me][ke]);else n.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)n.deleteFramebuffer(E.__webglFramebuffer[me]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pe=I.textures;for(let me=0,ke=pe.length;me<ke;me++){let Ve=i.get(pe[me]);Ve.__webglTexture&&(n.deleteTexture(Ve.__webglTexture),o.memory.textures--),i.remove(pe[me])}i.remove(I)}let W=0;function K(){W=0}function O(){return W}function $(I){W=I}function ce(){let I=W;return I>=s.maxTextures&&wt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,I}function Z(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ge(I,E){let V=i.get(I);if(I.isVideoTexture&&A(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let pe=I.image;if(pe===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{z(V,I,E);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function Me(I,E){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){z(V,I,E);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function ne(I,E){let V=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){z(V,I,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function ye(I,E){let V=i.get(I);if(I.version>0&&V.__version!==I.version){re(V,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}let De={[lr]:n.REPEAT,[Gs]:n.CLAMP_TO_EDGE,[iu]:n.MIRRORED_REPEAT},tt={[ei]:n.NEAREST,[cm]:n.NEAREST_MIPMAP_NEAREST,[Nl]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Nu]:n.LINEAR_MIPMAP_NEAREST,[ys]:n.LINEAR_MIPMAP_LINEAR},Be={[fm]:n.NEVER,[Mf]:n.ALWAYS,[pm]:n.LESS,[_f]:n.LEQUAL,[mm]:n.EQUAL,[bf]:n.GEQUAL,[gm]:n.GREATER,[xm]:n.NOTEQUAL};function je(I,E){if(E.type===ns&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Nu||E.magFilter===Nl||E.magFilter===ys||E.minFilter===Cn||E.minFilter===Nu||E.minFilter===Nl||E.minFilter===ys)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,De[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,De[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,De[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,tt[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==Nl&&E.minFilter!==ys||E.type===ns&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(I,E){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",D),T(E));let pe=E.source,me=f.get(pe);me===void 0&&(me={},f.set(pe,me));let ke=Z(E);if(ke!==I.__cacheKey){me[ke]===void 0&&(me[ke]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),me[ke].usedTimes++;let Ve=me[I.__cacheKey];Ve!==void 0&&(me[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&Q(E)),I.__cacheKey=ke,I.__webglTexture=me[ke].texture}return V}function xe(I,E,V){return Math.floor(Math.floor(I/V)/E)}function G(I,E,V,pe){let ke=I.updateRanges;if(ke.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,V,pe,E.data);else{ke.sort((X,Te)=>X.start-Te.start);let Ve=0;for(let X=1;X<ke.length;X++){let Te=ke[Ve],be=ke[X],Ie=Te.start+Te.count,Fe=xe(be.start,E.width,4),Xe=xe(Te.start,E.width,4);be.start<=Ie+1&&Fe===Xe&&xe(be.start+be.count-1,E.width,4)===Fe?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++Ve,ke[Ve]=be)}ke.length=Ve+1;let Ee=t.getParameter(n.UNPACK_ROW_LENGTH),Se=t.getParameter(n.UNPACK_SKIP_PIXELS),We=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let X=0,Te=ke.length;X<Te;X++){let be=ke[X],Ie=Math.floor(be.start/4),Fe=Math.ceil(be.count/4),Xe=Ie%E.width,ve=Math.floor(Ie/E.width),Pt=Fe,Ue=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve),t.texSubImage2D(n.TEXTURE_2D,0,Xe,ve,Pt,Ue,V,pe,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,We)}}function z(I,E,V){let pe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=n.TEXTURE_3D);let me=Ge(I,E),ke=E.source;t.bindTexture(pe,I.__webglTexture,n.TEXTURE0+V);let Ve=i.get(ke);if(ke.version!==Ve.__version||me===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Ue=Jt.getPrimaries(Jt.workingColorSpace),xt=E.colorSpace===xr?null:Jt.getPrimaries(E.colorSpace),At=E.colorSpace===xr||Ue===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Se=_(E.image,!1,s.maxTextureSize);Se=Y(E,Se);let We=r.convert(E.format,E.colorSpace),X=r.convert(E.type),Te=w(E.internalFormat,We,X,E.normalized,E.colorSpace,E.isVideoTexture);je(pe,E);let be,Ie=E.mipmaps,Fe=E.isVideoTexture!==!0,Xe=Ve.__version===void 0||me===!0,ve=ke.dataReady,Pt=S(E,Se);if(E.isDepthTexture)Te=v(E.format===gr,E.type),Xe&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Te,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Te,Se.width,Se.height,0,We,X,null));else if(E.isDataTexture)if(Ie.length>0){Fe&&Xe&&t.texStorage2D(n.TEXTURE_2D,Pt,Te,Ie[0].width,Ie[0].height);for(let Ue=0,xt=Ie.length;Ue<xt;Ue++)be=Ie[Ue],Fe?ve&&t.texSubImage2D(n.TEXTURE_2D,Ue,0,0,be.width,be.height,We,X,be.data):t.texImage2D(n.TEXTURE_2D,Ue,Te,be.width,be.height,0,We,X,be.data);E.generateMipmaps=!1}else Fe?(Xe&&t.texStorage2D(n.TEXTURE_2D,Pt,Te,Se.width,Se.height),ve&&G(E,Se,We,X)):t.texImage2D(n.TEXTURE_2D,0,Te,Se.width,Se.height,0,We,X,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Te,Ie[0].width,Ie[0].height,Se.depth);for(let Ue=0,xt=Ie.length;Ue<xt;Ue++)if(be=Ie[Ue],E.format!==_s)if(We!==null)if(Fe){if(ve)if(E.layerUpdates.size>0){let At=Df(be.width,be.height,E.format,E.type);for(let Ze of E.layerUpdates){let Zt=be.data.subarray(Ze*At/be.data.BYTES_PER_ELEMENT,(Ze+1)*At/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ue,0,0,Ze,be.width,be.height,1,We,Zt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ue,0,0,0,be.width,be.height,Se.depth,We,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ue,Te,be.width,be.height,Se.depth,0,be.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ue,0,0,0,be.width,be.height,Se.depth,We,X,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ue,Te,be.width,be.height,Se.depth,0,We,X,be.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Fe&&Xe&&t.texStorage2D(n.TEXTURE_2D,Pt,Te,Ie[0].width,Ie[0].height);for(let Ue=0,xt=Ie.length;Ue<xt;Ue++)be=Ie[Ue],E.format!==_s?We!==null?Fe?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ue,0,0,be.width,be.height,We,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Ue,Te,be.width,be.height,0,be.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?ve&&t.texSubImage2D(n.TEXTURE_2D,Ue,0,0,be.width,be.height,We,X,be.data):t.texImage2D(n.TEXTURE_2D,Ue,Te,be.width,be.height,0,We,X,be.data)}else if(E.isDataArrayTexture)if(Fe){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pt,Te,Se.width,Se.height,Se.depth),ve)if(E.layerUpdates.size>0){let Ue=Df(Se.width,Se.height,E.format,E.type);for(let xt of E.layerUpdates){let At=Se.data.subarray(xt*Ue/Se.data.BYTES_PER_ELEMENT,(xt+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,Se.width,Se.height,1,We,X,At)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,We,X,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,Se.width,Se.height,Se.depth,0,We,X,Se.data);else if(E.isData3DTexture)Fe?(Xe&&t.texStorage3D(n.TEXTURE_3D,Pt,Te,Se.width,Se.height,Se.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,We,X,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Te,Se.width,Se.height,Se.depth,0,We,X,Se.data);else if(E.isFramebufferTexture){if(Xe)if(Fe)t.texStorage2D(n.TEXTURE_2D,Pt,Te,Se.width,Se.height);else{let Ue=Se.width,xt=Se.height;for(let At=0;At<Pt;At++)t.texImage2D(n.TEXTURE_2D,At,Te,Ue,xt,0,We,X,null),Ue>>=1,xt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Ue=n.canvas;if(Ue.hasAttribute("layoutsubtree")||Ue.setAttribute("layoutsubtree","true"),Se.parentNode!==Ue){Ue.appendChild(Se),d.add(E),Ue.onpaint=xt=>{let At=xt.changedElements;for(let Ze of d)At.includes(Ze.image)&&(Ze.needsUpdate=!0)},Ue.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Se);else{let At=n.RGBA,Ze=n.RGBA,Zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,Ze,Zt,Se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&Xe){let Ue=he(Ie[0]);t.texStorage2D(n.TEXTURE_2D,Pt,Te,Ue.width,Ue.height)}for(let Ue=0,xt=Ie.length;Ue<xt;Ue++)be=Ie[Ue],Fe?ve&&t.texSubImage2D(n.TEXTURE_2D,Ue,0,0,We,X,be):t.texImage2D(n.TEXTURE_2D,Ue,Te,We,X,be);E.generateMipmaps=!1}else if(Fe){if(Xe){let Ue=he(Se);t.texStorage2D(n.TEXTURE_2D,Pt,Te,Ue.width,Ue.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,X,Se)}else t.texImage2D(n.TEXTURE_2D,0,Te,We,X,Se);b(E)&&E.mipmapsAutoUpdate===!0&&y(pe),Ve.__version=ke.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function re(I,E,V){if(E.image.length!==6)return;let pe=Ge(I,E),me=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+V);let ke=i.get(me);if(me.version!==ke.__version||pe===!0){t.activeTexture(n.TEXTURE0+V);let Ve=Jt.getPrimaries(Jt.workingColorSpace),Ee=E.colorSpace===xr?null:Jt.getPrimaries(E.colorSpace),Se=E.colorSpace===xr||Ve===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let We=E.isCompressedTexture||E.image[0].isCompressedTexture,X=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let Ze=0;Ze<6;Ze++)!We&&!X?Te[Ze]=_(E.image[Ze],!0,s.maxCubemapSize):Te[Ze]=X?E.image[Ze].image:E.image[Ze],Te[Ze]=Y(E,Te[Ze]);let be=Te[0],Ie=r.convert(E.format,E.colorSpace),Fe=r.convert(E.type),Xe=w(E.internalFormat,Ie,Fe,E.normalized,E.colorSpace),ve=E.isVideoTexture!==!0,Pt=ke.__version===void 0||pe===!0,Ue=me.dataReady,xt=S(E,be);je(n.TEXTURE_CUBE_MAP,E);let At;if(E.isDepthTexture){if(Xe=v(E.format===gr,E.type),Pt)if(ve)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Xe,be.width,be.height);else for(let Ze=0;Ze<6;Ze++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Xe,be.width,be.height,0,Ie,Fe,null)}else if(We){ve&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Xe,be.width,be.height);for(let Ze=0;Ze<6;Ze++){At=Te[Ze].mipmaps;for(let Zt=0;Zt<At.length;Zt++){let Sn=At[Zt];E.format!==_s?Ie!==null?ve?Ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt,0,0,Sn.width,Sn.height,Ie,Sn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt,Xe,Sn.width,Sn.height,0,Sn.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt,0,0,Sn.width,Sn.height,Ie,Fe,Sn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt,Xe,Sn.width,Sn.height,0,Ie,Fe,Sn.data)}}}else{if(At=E.mipmaps,ve&&Pt){At.length>0&&xt++;let Ze=he(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Xe,Ze.width,Ze.height)}for(let Ze=0;Ze<6;Ze++)if(X){ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,0,0,Te[Ze].width,Te[Ze].height,Ie,Fe,Te[Ze].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Xe,Te[Ze].width,Te[Ze].height,0,Ie,Fe,Te[Ze].data);for(let Zt=0;Zt<At.length;Zt++){let Zn=At[Zt].image[Ze].image;ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt+1,0,0,Zn.width,Zn.height,Ie,Fe,Zn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt+1,Xe,Zn.width,Zn.height,0,Ie,Fe,Zn.data)}}else{ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,0,0,Ie,Fe,Te[Ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Xe,Ie,Fe,Te[Ze]);for(let Zt=0;Zt<At.length;Zt++){let Sn=At[Zt];ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt+1,0,0,Ie,Fe,Sn.image[Ze]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,Zt+1,Xe,Ie,Fe,Sn.image[Ze])}}}b(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ke.__version=me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function J(I,E,V,pe,me,ke){let Ve=r.convert(V.format,V.colorSpace),Ee=r.convert(V.type),Se=w(V.internalFormat,Ve,Ee,V.normalized,V.colorSpace),We=i.get(E),X=i.get(V);if(X.__renderTarget=E,!We.__hasExternalTextures){let Te=Math.max(1,E.width>>ke),be=Math.max(1,E.height>>ke);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,ke,Se,Te,be,E.depth,0,Ve,Ee,null):t.texImage2D(me,ke,Se,Te,be,0,Ve,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,me,X.__webglTexture,0,gt(E)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,me,X.__webglTexture,ke),t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(I,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let pe=E.depthTexture,me=pe&&pe.isDepthTexture?pe.type:null,ke=v(E.stencilBuffer,me),Ve=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(E),ke,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(E),ke,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ke,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,I)}else{let pe=E.textures;for(let me=0;me<pe.length;me++){let ke=pe[me],Ve=r.convert(ke.format,ke.colorSpace),Ee=r.convert(ke.type),Se=w(ke.internalFormat,Ve,Ee,ke.normalized,ke.colorSpace);Pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(E),Se,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(E),Se,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Se,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(I,E,V){let pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let me=i.get(E.depthTexture);me.__renderTarget=E;let ke=pe?E.depthTexture.image[0]:E.depthTexture.image;(!me.__webglTexture||ke.width!==E.width||ke.height!==E.height)&&(ke.width=E.width,ke.height=E.height,E.depthTexture.needsUpdate=!0),pe?ye(E.depthTexture,0):ge(E.depthTexture,0);let Ve=me.__webglTexture,Ee=gt(E),Se=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,We=E.depthTexture.format===gr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===cr)Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,We,Se,Ve,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,We,Se,Ve,0);else if(E.depthTexture.format===gr)Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,We,Se,Ve,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,We,Se,Ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(I){let E=i.get(I),V=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let pe=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){let me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",me)};pe.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=pe}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let pe=0;pe<6;pe++)Re(E.__webglFramebuffer[pe],I,pe);else I.texture.mipmaps.length>0?Re(E.__webglFramebuffer[0],I,0):Re(E.__webglFramebuffer,I,0);else if(V){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=n.createRenderbuffer(),se(E.__webglDepthbuffer[pe],I,!1);else{let me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ke)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),se(E.__webglDepthbuffer,I,!1);else{let me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ke),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ke)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(I,E,V){let pe=i.get(I);E!==void 0&&J(pe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&F(I)}function fe(I){let E=I.texture,V=i.get(I),pe=i.get(E);I.addEventListener("dispose",k),T(I);let me=I.textures,ke=I.isWebGLCubeRenderTarget===!0,Ve=me.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=E.version,o.memory.textures++),ke){V.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(E.mipmaps.length>0){V.__webglFramebuffer[Ee]=[];for(let Se=0;Se<E.mipmaps.length;Se++)V.__webglFramebuffer[Ee][Se]=n.createFramebuffer()}else V.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(E.mipmaps.length>0){V.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)V.__webglFramebuffer[Ee]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let Ee=0,Se=me.length;Ee<Se;Ee++){let We=i.get(me[Ee]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Pe(I)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){let Se=me[Ee];V.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Ee]);let We=r.convert(Se.format,Se.colorSpace),X=r.convert(Se.type),Te=w(Se.internalFormat,We,X,Se.normalized,Se.colorSpace,I.isXRRenderTarget===!0),be=gt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Te,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,V.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),se(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ke){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),je(n.TEXTURE_CUBE_MAP,E);for(let Ee=0;Ee<6;Ee++)if(E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)J(V.__webglFramebuffer[Ee][Se],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Se);else J(V.__webglFramebuffer[Ee],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);b(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ve){for(let Ee=0,Se=me.length;Ee<Se;Ee++){let We=me[Ee],X=i.get(We),Te=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,X.__webglTexture),je(Te,We),J(V.__webglFramebuffer,I,We,n.COLOR_ATTACHMENT0+Ee,Te,0),b(We)&&y(Te)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),je(Ee,E),E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)J(V.__webglFramebuffer[Se],I,E,n.COLOR_ATTACHMENT0,Ee,Se);else J(V.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Ee,0);b(E)?y(Ee):E.mipmaps.length>0&&n.texParameteri(Ee,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&F(I)}function U(I){let E=I.textures;for(let V=0,pe=E.length;V<pe;V++){let me=E[V];if(b(me)&&me.mipmapsAutoUpdate===!0){let ke=M(I),Ve=i.get(me).__webglTexture;t.bindTexture(ke,Ve),y(ke),t.unbindTexture()}}}let Ke=[];function ut(I){if(I.samples>0){if(Pe(I)===!1){let E=I.textures,V=I.width,pe=I.height,me=n.COLOR_BUFFER_BIT,ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(I),Ee=E.length>1;if(Ee)for(let We=0;We<E.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let We=0;We<E.length;We++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[We]);let X=i.get(E[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,X,0)}n.blitFramebuffer(0,0,V,pe,0,0,V,pe,me,n.NEAREST),l===!0&&(Ke.length=0,Ke.push(n.COLOR_ATTACHMENT0+We),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Ke.push(ke),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let We=0;We<E.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[We]);let X=i.get(E[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,X,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function gt(I){return Math.min(s.maxSamples,I.samples)}function Pe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function A(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function Y(I,E){let V=I.colorSpace,pe=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==sl&&V!==xr&&(Jt.getTransfer(V)===an?(pe!==_s||me!==Ii)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",V)),E}function he(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=K,this.getTextureUnits=O,this.setTextureUnits=$,this.setTexture2D=ge,this.setTexture2DArray=Me,this.setTexture3D=ne,this.setTextureCube=ye,this.rebindTextures=oe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Pe,this.dispose=q}function cw(n,e){function t(i,s=xr){let r,o=Jt.getTransfer(s);if(i===Ii)return n.UNSIGNED_BYTE;if(i===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pf)return n.BYTE;if(i===mf)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===Ou)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===ns)return n.FLOAT;if(i===Ai)return n.HALF_FLOAT;if(i===yf)return n.ALPHA;if(i===vf)return n.RGB;if(i===_s)return n.RGBA;if(i===cr)return n.DEPTH_COMPONENT;if(i===gr)return n.DEPTH_STENCIL;if(i===ku)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===Gr)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Hu)return n.RGBA_INTEGER;if(i===Ol||i===Ul||i===Fl||i===kl)if(o===an)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gu||i===Vu||i===Wu||i===Xu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qu||i===$u||i===Yu||i===Ku||i===Zu||i===Bl||i===Ju)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qu||i===$u)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ku)return r.COMPRESSED_R11_EAC;if(i===Zu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Bl)return r.COMPRESSED_RG11_EAC;if(i===Ju)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ju||i===Qu||i===ed||i===td||i===nd||i===id||i===sd||i===rd||i===od||i===ad||i===ld||i===cd||i===ud||i===dd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ju)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ed)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===td)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===id)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===od)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ad)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ld)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ud)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hd||i===fd||i===pd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hd)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===md||i===gd||i===zl||i===xd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===md)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
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

}`,Gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ln({vertexShader:uw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vf=class extends ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Gf,g={},_=t.getContextAttributes(),b=null,y=null,M=[],w=[],v=new Ce,S=null,T=null,R=new jn;R.viewport=new mn;let D=new jn;D.viewport=new mn;let k=[R,D],H=new Pu,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ge=M[Z];return ge===void 0&&(ge=new ma,M[Z]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Z){let ge=M[Z];return ge===void 0&&(ge=new ma,M[Z]=ge),ge.getGripSpace()},this.getHand=function(Z){let ge=M[Z];return ge===void 0&&(ge=new ma,M[Z]=ge),ge.getHandSpace()};function te(Z){let ge=w.indexOf(Z.inputSource);if(ge===-1)return;let Me=M[ge];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<M.length;Z++){let ge=w[Z];ge!==null&&(w[Z]=null,M[Z].disconnect(ge))}N=null,q=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ne=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=_.stencil?gr:cr,ne=_.stencil?Eo:vs);let De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ai(h.textureWidth,h.textureHeight,{format:_s,type:Ii,depthTexture:new hr(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ai(f.framebufferWidth,f.framebufferHeight,{format:_s,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let ge=0;ge<Z.removed.length;ge++){let Me=Z.removed[ge],ne=w.indexOf(Me);ne>=0&&(w[ne]=null,M[ne].disconnect(Me))}for(let ge=0;ge<Z.added.length;ge++){let Me=Z.added[ge],ne=w.indexOf(Me);if(ne===-1){for(let De=0;De<M.length;De++)if(De>=w.length){w.push(Me),ne=De;break}else if(w[De]===null){w[De]=Me,ne=De;break}if(ne===-1)break}let ye=M[ne];ye&&ye.connect(Me)}}function W(Z,ge){ge===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ge.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ge=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),H.near=D.near=R.near=ge,H.far=D.far=R.far=Me,(N!==H.near||q!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,q=H.far),H.layers.mask=Z.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let ne=Z.parent,ye=H.cameras;W(H,ne);for(let De=0;De<ye.length;De++)W(ye[De],ne);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),K(Z,H,ne)};function K(Z,ge,Me){Me===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ha*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return g[Z]};let O=null;function $(Z,ge){if(u=ge.getViewerPose(c||o),p=ge,u!==null){let Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ne=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,ne=!0);for(let Be=0;Be<Me.length;Be++){let je=Me[Be],Ge=null;if(f!==null)Ge=f.getViewport(je);else{let G=d.getViewSubImage(h,je);Ge=G.viewport,Be===0&&(e.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(y))}let xe=k[Be];xe===void 0&&(xe=new jn,xe.layers.enable(Be),xe.viewport=new mn,k[Be]=xe),xe.matrix.fromArray(je.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(je.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Be===0&&(H.matrix.copy(xe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ne===!0&&H.cameras.push(xe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Be=d.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<Me.length;Be++){let je=Me[Be].camera;if(je){let Ge=g[je];Ge||(Ge=new xl,g[je]=Ge);let xe=d.getCameraImage(je);Ge.sourceTexture=xe}}}}for(let Me=0;Me<M.length;Me++){let ne=w[Me],ye=M[Me];ne!==null&&ye!==void 0&&ye.update(ne,ge,c||o)}O&&O(Z,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),p=null}let ce=new Jm;ce.setAnimationLoop($),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}},hw=new bt,ag=new Rt;ag.set(-1,0,0,0,1,0,0,0,1);function fw(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Pf(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===li&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===li&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(hw.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ag),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===li&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pw(n,e,t,i){let s={},r={};function o(_,b){let y=b.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,b){let y=s[_.id];y===void 0&&(p(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let M=b.program;i.updateUBOMapping(_,M);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let b=n.createBuffer(),y=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,v=y.length;w<v;w++){let S=y[w];if(Array.isArray(S))for(let T=0,R=S.length;T<R;T++)u(S[T],w,T,M);else u(S,w,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,y,M){if(h(_,b,y,M)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let T=0;T<v.length;T++){let R=v[T],D=x(R,!0);d(R,_.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function d(_,b,y){typeof _=="number"||typeof _=="boolean"?b[y]=_:_.isMatrix3?(b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-y),y):_.toArray(b,y)}function h(_,b,y,M){let w=_.value,v=b+"_"+y;if(Array.isArray(w)){M[v]===void 0&&(M[v]=[]);let S=M[v],T=!1;for(let R=0;R<w.length;R++)f(w[R],S,R)===!0&&(T=!0);return T}return f(w,M,v)}function f(_,b,y){if(b[y]===void 0)return typeof _=="number"||typeof _=="boolean"?b[y]=_:ArrayBuffer.isView(_)?b[y]=_.slice():b[y]=_.clone(),!0;{let M=b[y];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return b[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function p(_){let b=_.uniforms,y=0,M=16;for(let v=0,S=b.length;v<S;v++){let T=Array.isArray(b[v])?b[v]:[b[v]];for(let R=0,D=T.length;R<D;R++){let k=T[R],H=Array.isArray(k.value)?k.value:[k.value],N=Array.isArray(b[v])||Array.isArray(k.value),q=y;for(let Q=0,ee=H.length;Q<ee;Q++){let W=H[Q],K=x(W,N),O=y%M,$=O%K.boundary,ce=O+$;y+=$,ce!==0&&M-ce<K.storage&&(y+=M-ce),Q===0&&(q=y),y+=K.storage}let te=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new te((y-q)/Float32Array.BYTES_PER_ELEMENT),k.__offset=q}}let w=y%M;return w>0&&(y+=M-w),_.__size=y,_.__cache={},this}function x(_,b){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ks=null;function gw(){return Ks===null&&(Ks=new hl(mw,16,16,Gr,Ai),Ks.name="DFG_LUT",Ks.minFilter=Cn,Ks.magFilter=Cn,Ks.wrapS=Gs,Ks.wrapT=Gs,Ks.generateMipmaps=!1,Ks.needsUpdate=!0),Ks}var wd=class{constructor(e={}){let{canvas:t=ym(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ii}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Hu,zu,Bu]),g=new Set([Ii,vs,Ra,Eo,Uu,Fu]),_=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,w=null,v=[],S=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,k=null,H=null,N=null,q=null;this._outputColorSpace=oi;let te=0,Q=0,ee=null,W=-1,K=null,O=new mn,$=new mn,ce=null,Z=new ze(0),ge=0,Me=t.width,ne=t.height,ye=1,De=null,tt=null,Be=new mn(0,0,Me,ne),je=new mn(0,0,Me,ne),Ge=!1,xe=new Dr,G=new lu,z=!1,re=!1,J=new bt,se=new P,Re=new mn,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function fe(){return ee===null?ye:1}let U=i;function Ke(C,j){return t.getContext(C,j)}let ut,gt,Pe,A,Y,he,I,E,V,pe,me,ke,Ve,Ee,Se,We,X,Te,be,Ie,Fe,Xe,ve;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),U===null){let j="webgl2";if(U=Ke(j,C),U===null)throw Ke(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(C){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),Et("WebGLRenderer: "+C.message),C}function Pt(){ut=new AM(U),ut.init(),Fe=new cw(U,ut),gt=new gM(U,ut,e,Fe),Pe=new aw(U,ut),gt.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),H=U.createFramebuffer(),N=U.createFramebuffer(),q=U.createFramebuffer(),A=new PM(U),Y=new $S,he=new lw(U,ut,Pe,Y,gt,Fe,A),I=new TM(R),E=new L_(U),Xe=new pM(U,E),V=new RM(U,E,A,Xe),pe=new LM(U,V,E,Xe,A),Te=new IM(U,gt,he),Se=new xM(Y),me=new qS(R,I,ut,gt,Xe,Se),ke=new fw(R,Y),Ve=new KS,Ee=new tw(ut),X=new fM(R,I,Pe,pe,p,l),We=new ow(R,pe,gt),ve=new pw(U,A,gt,Pe),be=new mM(U,ut,A),Ie=new CM(U,ut,A),A.programs=me.programs,R.capabilities=gt,R.extensions=ut,R.properties=Y,R.renderLists=Ve,R.shadowMap=We,R.state=Pe,R.info=A}x!==Ii&&(T=new NM(x,t.width,t.height,a,s,r));let Ue=new Vf(R,U);this.xr=Ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(C){C!==void 0&&(ye=C,this.setSize(Me,ne,!1))},this.getSize=function(C){return C.set(Me,ne)},this.setSize=function(C,j,de=!0){if(Ue.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=C,ne=j,t.width=Math.floor(C*ye),t.height=Math.floor(j*ye),de===!0&&(t.style.width=C+"px",t.style.height=j+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(Me*ye,ne*ye).floor()},this.setDrawingBufferSize=function(C,j,de){Me=C,ne=j,ye=de,t.width=Math.floor(C*de),t.height=Math.floor(j*de),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(x===Ii){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Be)},this.setViewport=function(C,j,de,le){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,j,de,le),Pe.viewport(O.copy(Be).multiplyScalar(fe()).round())},this.getScissor=function(C){return C.copy(je)},this.setScissor=function(C,j,de,le){C.isVector4?je.set(C.x,C.y,C.z,C.w):je.set(C,j,de,le),Pe.scissor($.copy(je).multiplyScalar(fe()).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(C){Pe.setScissorTest(Ge=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,de=!0){let le=0;if(C){let ue=!1;if(ee!==null){let Oe=ee.texture.format;ue=m.has(Oe)}if(ue){let Oe=ee.texture.type,at=g.has(Oe),$e=X.getClearColor(),Qe=X.getClearAlpha(),dt=$e.r,St=$e.g,kt=$e.b;at?(_[0]=dt,_[1]=St,_[2]=kt,_[3]=Qe,U.clearBufferuiv(U.COLOR,0,_)):(b[0]=dt,b[1]=St,b[2]=kt,b[3]=Qe,U.clearBufferiv(U.COLOR,0,b))}else le|=U.COLOR_BUFFER_BIT}j&&(le|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&U.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),k=C},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),X.dispose(),Ve.dispose(),Ee.dispose(),he.dispose(),Y.dispose(),I.dispose(),pe.dispose(),V.dispose(),Xe.dispose(),ve.dispose(),me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Ji),Ue.removeEventListener("sessionend",si),Bi.stop()};function xt(C){C.preventDefault(),al("WebGLRenderer: Context Lost."),D=!0}function At(){al("WebGLRenderer: Context Restored."),D=!1;let C=A.autoReset,j=We.enabled,de=We.autoUpdate,le=We.needsUpdate,ue=We.type;Pt(),A.autoReset=C,We.enabled=j,We.autoUpdate=de,We.needsUpdate=le,We.type=ue}function Ze(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Zt(C){let j=C.target;j.removeEventListener("dispose",Zt),Sn(j)}function Sn(C){Zn(C),Y.remove(C)}function Zn(C){let j=Y.get(C).programs;j!==void 0&&(j.forEach(function(de){me.releaseProgram(de)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,de,le,ue,Oe){j===null&&(j=F);let at=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,$e=Go(C,j,de,le,ue);Pe.setMaterial(le,at);let Qe=de.index,dt=1;if(le.wireframe===!0){if(Qe=V.getWireframeAttribute(de),Qe===void 0)return;dt=2}let St=de.drawRange,kt=de.attributes.position,lt=St.start*dt,Bt=(St.start+St.count)*dt;Oe!==null&&(lt=Math.max(lt,Oe.start*dt),Bt=Math.min(Bt,(Oe.start+Oe.count)*dt)),Qe!==null?(lt=Math.max(lt,0),Bt=Math.min(Bt,Qe.count)):kt!=null&&(lt=Math.max(lt,0),Bt=Math.min(Bt,kt.count));let ht=Bt-lt;if(ht<0||ht===1/0)return;Xe.setup(ue,le,$e,de,Qe);let It,Lt=be;if(Qe!==null&&(It=E.get(Qe),Lt=Ie,Lt.setIndex(It)),ue.isMesh)le.wireframe===!0?(Pe.setLineWidth(le.wireframeLinewidth*fe()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(ue.isLine){let xn=le.linewidth;xn===void 0&&(xn=1),Pe.setLineWidth(xn*fe()),ue.isLineSegments?Lt.setMode(U.LINES):ue.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else ue.isPoints?Lt.setMode(U.POINTS):ue.isSprite&&Lt.setMode(U.TRIANGLES);if(ue.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let xn=ue._multiDrawStarts,ot=ue._multiDrawCounts,wn=ue._multiDrawCount,Ht=Qe?E.get(Qe).bytesPerElement:1,ri=Y.get(le).currentProgram.getUniforms();for(let Un=0;Un<wn;Un++)ri.setValue(U,"_gl_DrawID",Un),Lt.render(xn[Un]/Ht,ot[Un])}else if(ue.isInstancedMesh)Lt.renderInstances(lt,ht,ue.count);else if(de.isInstancedBufferGeometry){let xn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ot=Math.min(de.instanceCount,xn);Lt.renderInstances(lt,ht,ot)}else Lt.render(lt,ht)};function Ls(C,j,de,le){k!==null&&C.isNodeMaterial&&k.setObject(le,C),z===!0&&Se.setState(C,de,!1),C.transparent===!0&&C.side===tn&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,us(C,j,le),C.side=qs,C.needsUpdate=!0,us(C,j,le),C.side=tn):us(C,j,le)}this.compile=function(C,j,de=null){de===null&&(de=C),k!==null&&k.renderStart(C,j,de),w=Ee.get(de),w.init(j),S.push(w),de.traverseVisible(function(ue){ue.isLight&&ue.layers.test(j.layers)&&(w.pushLight(ue),ue.castShadow&&w.pushShadow(ue))}),C!==de&&C.traverseVisible(function(ue){ue.isLight&&ue.layers.test(j.layers)&&(w.pushLight(ue),ue.castShadow&&w.pushShadow(ue))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),re=this.localClippingEnabled,z=Se.init(this.clippingPlanes,re),z===!0&&Se.setGlobalState(this.clippingPlanes,j),k!==null&&We.render(w.state.shadowsArray,de,j);let le=new Set;return C.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let Oe=ue.material;if(Oe)if(Array.isArray(Oe))for(let at=0;at<Oe.length;at++){let $e=Oe[at];Ls($e,de,j,ue),le.add($e)}else Ls(Oe,de,j,ue),le.add(Oe)}),w=S.pop(),k!==null&&k.renderEnd(),le},this.compileAsync=function(C,j,de=null){let le=this.compile(C,j,de);return new Promise(ue=>{function Oe(){if(le.forEach(function(at){let Qe=Y.get(at).currentProgram;(Qe===void 0||Qe.isReady())&&le.delete(at)}),le.size===0){ue(C);return}setTimeout(Oe,10)}ut.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ds=null;function Ar(C){Ds&&Ds(C)}function Ji(){Bi.stop()}function si(){Bi.start()}let Bi=new Jm;Bi.setAnimationLoop(Ar),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(C){Ds=C,Ue.setAnimationLoop(C),C===null?Bi.stop():Bi.start()},Ue.addEventListener("sessionstart",Ji),Ue.addEventListener("sessionend",si),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(C,j);let de=Ue.enabled===!0&&Ue.isPresenting===!0,le=T!==null&&(ee===null||de)&&T.begin(R,ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(j),j=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,ee),w=Ee.get(C,S.length),w.init(j),w.state.textureUnits=he.getTextureUnits(),S.push(w),J.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?G.setFromArrayCamera(j):xe.setFromProjectionMatrix(J,es,j.reversedDepth),re=this.localClippingEnabled,z=Se.init(this.clippingPlanes,re),M=Ve.get(C,v.length),M.init(),v.push(M),this.info.render.frame++,Ue.enabled===!0&&Ue.isPresenting===!0){let at=R.xr.getDepthSensingMesh();at!==null&&_n(at,j,-1/0,R.sortObjects)}_n(C,j,0,R.sortObjects),M.finish(),k!==null&&k.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(De,tt),oe=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,oe&&X.addToRenderList(M,C),this.info.autoReset===!0&&this.info.reset(),z===!0&&Se.beginShadows();let ue=w.state.shadowsArray;if(We.render(ue,C,j),z===!0&&Se.endShadows(),(le&&T.hasRenderPass())===!1){let at=M.opaque,$e=M.transmissive;if(w.setupLights(),j.isArrayCamera){let Qe=j.cameras;if($e.length>0)for(let dt=0,St=Qe.length;dt<St;dt++){let kt=Qe[dt];Gn(at,$e,C,kt)}oe&&X.render(C);for(let dt=0,St=Qe.length;dt<St;dt++){let kt=Qe[dt];er(M,C,kt,kt.viewport)}}else $e.length>0&&Gn(at,$e,C,j),oe&&X.render(C),er(M,C,j)}ee!==null&&Q===0&&(he.updateMultisampleRenderTarget(ee),he.updateRenderTargetMipmap(ee)),le&&T.end(R),C.isScene===!0&&C.onAfterRender(R,C,j),Xe.resetDefaultState(),W=-1,K=null,S.pop(),S.length>0?(w=S[S.length-1],he.setTextureUnits(w.state.textureUnits),z===!0&&Se.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,k!==null&&k.renderEnd()};function _n(C,j,de,le){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){let at=j.isArrayCamera?G:xe;if(!C.frustumCulled||C.intersectsFrustum(at)){le&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);let $e=pe.update(C),Qe=C.material;Qe.visible&&M.push(C,$e,Qe,de,Re.z,null,j)}}else if(C.isMesh||C.isLine||C.isPoints){let at=j.isArrayCamera?G:xe;if(!C.frustumCulled||C.intersectsFrustum(at)){let $e=pe.update(C),Qe=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),Re.copy($e.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Qe)){let dt=$e.groups;for(let St=0,kt=dt.length;St<kt;St++){let lt=dt[St],Bt=Qe[lt.materialIndex];Bt&&Bt.visible&&M.push(C,$e,Bt,de,Re.z,lt,j)}}else Qe.visible&&M.push(C,$e,Qe,de,Re.z,null,j)}}}let Oe=C.children;for(let at=0,$e=Oe.length;at<$e;at++)_n(Oe[at],j,de,le)}function er(C,j,de,le){let{opaque:ue,transmissive:Oe,transparent:at}=C;w.setupLightsView(de),z===!0&&Se.setGlobalState(R.clippingPlanes,de),le&&Pe.viewport(O.copy(le)),ue.length>0&&Ns(ue,j,de),Oe.length>0&&Ns(Oe,j,de),at.length>0&&Ns(at,j,de),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Gn(C,j,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[le.id]===void 0){let lt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[le.id]=new ai(1,1,{generateMipmaps:!0,type:lt?Ai:Ii,minFilter:ys,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let Oe=w.state.transmissionRenderTarget[le.id],at=le.viewport||O;Oe.setSize(at.z*R.transmissionResolutionScale,at.w*R.transmissionResolutionScale);let $e=R.getRenderTarget(),Qe=R.getActiveCubeFace(),dt=R.getActiveMipmapLevel();R.setRenderTarget(Oe),R.getClearColor(Z),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),oe&&X.render(de);let St=R.toneMapping;R.toneMapping=Ys;let kt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),w.setupLightsView(le),z===!0&&Se.setGlobalState(R.clippingPlanes,le),Ns(C,de,le),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Bt=0,ht=j.length;Bt<ht;Bt++){let It=j[Bt],{object:Lt,geometry:xn,material:ot,group:wn}=It;if(ot.side===tn&&Lt.layers.test(le.layers)){let Ht=ot.side;ot.side=li,ot.needsUpdate=!0,bi(Lt,de,le,xn,ot,wn),ot.side=Ht,ot.needsUpdate=!0,lt=!0}}lt===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}R.setRenderTarget($e,Qe,dt),R.setClearColor(Z,ge),kt!==void 0&&(le.viewport=kt),R.toneMapping=St}function Ns(C,j,de){let le=j.isScene===!0?j.overrideMaterial:null;for(let ue=0,Oe=C.length;ue<Oe;ue++){let at=C[ue],{object:$e,geometry:Qe,group:dt}=at,St=at.material;St.allowOverride===!0&&le!==null&&(St=le),$e.layers.test(de.layers)&&bi($e,j,de,Qe,St,dt)}}function bi(C,j,de,le,ue,Oe){k!==null&&ue.isNodeMaterial&&k.setObject(C,ue),C.onBeforeRender(R,j,de,le,ue,Oe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(R,j,de,le,C,Oe),ue.transparent===!0&&ue.side===tn&&ue.forceSinglePass===!1?(ue.side=li,ue.needsUpdate=!0,R.renderBufferDirect(de,j,le,ue,C,Oe),ue.side=qs,ue.needsUpdate=!0,R.renderBufferDirect(de,j,le,ue,C,Oe),ue.side=tn):R.renderBufferDirect(de,j,le,ue,C,Oe),C.onAfterRender(R,j,de,le,ue,Oe)}function Os(C){let j=0;for(let de of C)de.texture!==null&&j++;return j}function us(C,j,de){j.isScene!==!0&&(j=F);let le=Y.get(C),ue=w.state.lights,Oe=w.state.shadowsArray,at=ue.state.version,$e=me.getParameters(C,ue.state,Oe,j,de,w.state.lightProbeGridArray),Qe=me.getProgramCacheKey($e),dt=le.programs;le.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,le.fog=j.fog;let St=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;le.envMap=I.get(C.envMap||le.environment,St),le.envMapRotation=le.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,dt===void 0&&(C.addEventListener("dispose",Zt),dt=new Map,le.programs=dt,le.programVariants=new Map);let kt=dt.get(Qe);if(kt!==void 0){if(le.currentProgram===kt&&le.lightsStateVersion===at)return ji(C,$e),kt}else $e.uniforms=me.getUniforms(C),k!==null&&C.isNodeMaterial&&k.build(C,de,$e),C.onBeforeCompile($e,R),kt=me.acquireProgram($e,Qe),dt.set(Qe,kt),le.uniforms=$e.uniforms;let lt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(lt.clippingPlanes=Se.uniform),ji(C,$e),le.needsLights=Us(C),le.lightsStateVersion=at,le.needsLights&&(lt.ambientLightColor.value=ue.state.ambient,lt.lightProbe.value=ue.state.probe,lt.sunLights.value=ue.state.sun,lt.sunLightShadows.value=ue.state.sunShadow,lt.directionalLights.value=ue.state.directional,lt.directionalLightShadows.value=ue.state.directionalShadow,lt.spotLights.value=ue.state.spot,lt.spotLightShadows.value=ue.state.spotShadow,lt.rectAreaLights.value=ue.state.rectArea,lt.ltc_1.value=ue.state.rectAreaLTC1,lt.ltc_2.value=ue.state.rectAreaLTC2,lt.pointLights.value=ue.state.point,lt.pointLightShadows.value=ue.state.pointShadow,lt.hemisphereLights.value=ue.state.hemi,lt.sunShadowMatrix.value=ue.state.sunShadowMatrix,lt.sunShadowCascade.value=ue.state.sunShadowCascade,lt.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,lt.spotLightMatrix.value=ue.state.spotLightMatrix,lt.spotLightMap.value=ue.state.spotLightMap,lt.pointShadowMatrix.value=ue.state.pointShadowMatrix),le.numLightProbeGrids=Os(w.state.lightProbeGridArray),le.currentProgram=kt,le.uniformsList=null,kt}function zo(C,j,de,le,ue){let Oe=Y.get(C),at=Oe.currentProgram.id+","+le+","+ue,$e=Oe.programVariants.get(at);return $e===void 0?($e=us(C,j,de),Oe.programVariants.set(at,$e)):(Oe.currentProgram=$e,Oe.uniformsList=null,Oe.outputColorSpace=le,Oe.toneMapping=ue),$e}function Ho(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=Ca.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ji(C,j){let de=Y.get(C);de.outputColorSpace=j.outputColorSpace,de.batching=j.batching,de.batchingColor=j.batchingColor,de.instancing=j.instancing,de.instancingColor=j.instancingColor,de.instancingMorph=j.instancingMorph,de.skinning=j.skinning,de.morphTargets=j.morphTargets,de.morphNormals=j.morphNormals,de.morphColors=j.morphColors,de.morphTargetsCount=j.morphTargetsCount,de.numClippingPlanes=j.numClippingPlanes,de.numIntersection=j.numClipIntersection,de.vertexAlphas=j.vertexAlphas,de.vertexTangents=j.vertexTangents,de.toneMapping=j.toneMapping}function Go(C,j,de,le,ue){j.isScene!==!0&&(j=F),he.resetTextureUnits();let Oe=j.fog,at=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?j.environment:null,$e=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Jt.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,dt=I.get(le.envMap||at,Qe),St=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,kt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),lt=!!de.morphAttributes.position,Bt=!!de.morphAttributes.normal,ht=!!de.morphAttributes.color,It=Ys;le.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(It=R.toneMapping);let Lt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,xn=Lt!==void 0?Lt.length:0,ot=Y.get(le),wn=w.state.lights;if(z===!0&&(re===!0||C!==K)){let yt=C===K&&le.id===W;Se.setState(le,C,yt)}let Ht=!1,ri=!1;le.version===ot.__version?ot.needsLights&&ot.lightsStateVersion!==wn.state.version||ue.isBatchedMesh&&ot.batching===!1||!ue.isBatchedMesh&&ot.batching===!0||ue.isBatchedMesh&&ot.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&ot.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&ot.instancing===!1||!ue.isInstancedMesh&&ot.instancing===!0||ue.isSkinnedMesh&&ot.skinning===!1||!ue.isSkinnedMesh&&ot.skinning===!0||ue.isInstancedMesh&&ot.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ot.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&ot.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&ot.instancingMorph===!1&&ue.morphTexture!==null||ot.envMap!==dt||le.fog===!0&&ot.fog!==Oe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Se.numPlanes||ot.numIntersection!==Se.numIntersection)||ot.vertexAlphas!==St||ot.vertexTangents!==kt||ot.morphTargets!==lt||ot.morphNormals!==Bt||ot.morphColors!==ht||ot.morphTargetsCount!==xn||ot.numLightProbeGrids!==Os(w.state.lightProbeGridArray)?Ht=!0:(ot.outputColorSpace!==$e||ot.toneMapping!==It)&&(ri=!0):(Ht=!0,ot.__version=le.version);let Un=ot.currentProgram;(Ht===!0||ri===!0)&&(Un=ri===!0?zo(le,j,ue,$e,It):us(le,j,ue),k&&le.isNodeMaterial&&k.onUpdateProgram(le,Un,ot));let ks=!1,fi=!1,pi=!1,Xt=Un.getUniforms(),yn=ot.uniforms;if(Pe.useProgram(Un.program)&&(ks=!0,fi=!0,pi=!0),le.id!==W&&(W=le.id,fi=!0),ks||K!==C){Pe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue(U,"projectionMatrix",C.projectionMatrix),Xt.setValue(U,"viewMatrix",C.matrixWorldInverse);let An=Xt.map.cameraPosition;An!==void 0&&An.setValue(U,se.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&Xt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Xt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),K!==C&&(K=C,fi=!0,pi=!0)}if(ot.needsLights&&(wn.state.sunShadowMap.length>0&&Xt.setValue(U,"sunShadowMap",wn.state.sunShadowMap,he),wn.state.directionalShadowMap.length>0&&Xt.setValue(U,"directionalShadowMap",wn.state.directionalShadowMap,he),wn.state.spotShadowMap.length>0&&Xt.setValue(U,"spotShadowMap",wn.state.spotShadowMap,he),wn.state.pointShadowMap.length>0&&Xt.setValue(U,"pointShadowMap",wn.state.pointShadowMap,he)),ue.isSkinnedMesh){Xt.setOptional(U,ue,"bindMatrix"),Xt.setOptional(U,ue,"bindMatrixInverse");let yt=ue.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),Xt.setValue(U,"boneTexture",yt.boneTexture,he))}ue.isBatchedMesh&&(Xt.setOptional(U,ue,"batchingTexture"),Xt.setValue(U,"batchingTexture",ue._matricesTexture,he),Xt.setOptional(U,ue,"batchingIdTexture"),Xt.setValue(U,"batchingIdTexture",ue._indirectTexture,he),Xt.setOptional(U,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Xt.setValue(U,"batchingColorTexture",ue._colorsTexture,he));let Dn=de.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Te.update(ue,de,Un),(fi||ot.receiveShadow!==ue.receiveShadow)&&(ot.receiveShadow=ue.receiveShadow,Xt.setValue(U,"receiveShadow",ue.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&j.environment!==null&&(yn.envMapIntensity.value=j.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=gw()),fi){if(Xt.setValue(U,"toneMappingExposure",R.toneMappingExposure),ot.needsLights&&hi(yn,pi),Oe&&le.fog===!0&&ke.refreshFogUniforms(yn,Oe),ke.refreshMaterialUniforms(yn,le,ye,ne,w.state.transmissionRenderTarget[C.id]),ot.needsLights&&ot.numLightProbeGrids>0){let yt=y,An=0;for(let Pi of w.state.lightProbeGridArray)Pi.texture!==null&&(yt.textures[An]=Pi.texture,yt.min[An]=Pi.boundingBox.min,yt.max[An]=Pi.boundingBox.max,yt.resolution[An]=Pi.resolution,An++);for(let Pi in yt)yt[Pi].length=An;yn.probesSH.value=yt.textures,yn.probesMin.value=yt.min,yn.probesMax.value=yt.max,yn.probesResolution.value=yt.resolution}Ca.upload(U,Ho(ot),yn,he)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ca.upload(U,Ho(ot),yn,he),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Xt.setValue(U,"center",ue.center),Xt.setValue(U,"modelViewMatrix",ue.modelViewMatrix),Xt.setValue(U,"normalMatrix",ue.normalMatrix),Xt.setValue(U,"modelMatrix",ue.matrixWorld),le.uniformsGroups!==void 0){let yt=le.uniformsGroups;for(let An=0,Pi=yt.length;An<Pi;An++){let ro=yt[An];ve.update(ro,Un),ve.bind(ro,Un)}}return Un}function hi(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.sunLights.needsUpdate=j,C.sunLightShadows.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Us(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(C,j,de){let le=Y.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Y.get(C.texture).__webglTexture=j,Y.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){let de=Y.get(C);de.__webglFramebuffer=j,de.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,de=0){ee=C,te=j,Q=de;let le=null,ue=!1,Oe=!1;if(C){let $e=Y.get(C);if($e.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(U.FRAMEBUFFER,$e.__webglFramebuffer),O.copy(C.viewport),$.copy(C.scissor),ce=C.scissorTest,Pe.viewport(O),Pe.scissor($),Pe.setScissorTest(ce),W=-1;return}else if($e.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if($e.__hasExternalTextures)he.rebindTextures(C,Y.get(C.texture).__webglTexture,Y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let St=C.depthTexture;if($e.__boundDepthTexture!==St){if(St!==null&&Y.has(St)&&(C.width!==St.image.width||C.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}let Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);let dt=Y.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(dt[j])?le=dt[j][de]:le=dt[j],ue=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?le=Y.get(C).__webglMultisampledFramebuffer:Array.isArray(dt)?le=dt[de]:le=dt,O.copy(C.viewport),$.copy(C.scissor),ce=C.scissorTest}else O.copy(Be).multiplyScalar(ye).floor(),$.copy(je).multiplyScalar(ye).floor(),ce=Ge;if(de!==0&&(le=H),Pe.bindFramebuffer(U.FRAMEBUFFER,le)&&Pe.drawBuffers(C,le),Pe.viewport(O),Pe.scissor($),Pe.setScissorTest(ce),ue){let $e=Y.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,$e.__webglTexture,de)}else if(Oe){let $e=j;for(let Qe=0;Qe<C.textures.length;Qe++){let dt=Y.get(C.textures[Qe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Qe,dt.__webglTexture,de,$e)}}else if(C!==null&&de!==0){let $e=Y.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$e.__webglTexture,de)}W=-1};function Fs(C){let j=Y.get(C);return(j.__readFormat!==C.format||j.__readType!==C.type)&&(j.__readFormat=C.format,j.__readType=C.type,j.__formatReadable=gt.textureFormatReadable(C.format),j.__typeReadable=gt.textureTypeReadable(C.type)),j}this.readRenderTargetPixels=function(C,j,de,le,ue,Oe,at,$e=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&at!==void 0&&(Qe=Qe[at],Array.isArray(Qe)&&(Qe=Qe[0])),Qe){Pe.bindFramebuffer(U.FRAMEBUFFER,Qe);try{let dt=C.textures[$e],St=dt.format,kt=dt.type;C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+$e);let lt=Fs(dt);if(lt.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-le&&de>=0&&de<=C.height-ue&&U.readPixels(j,de,le,ue,Fe.convert(St),Fe.convert(kt),Oe)}finally{let dt=ee!==null?Y.get(ee).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(C,j,de,le,ue,Oe,at,$e=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=Y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&at!==void 0&&(Qe=Qe[at],Array.isArray(Qe)&&(Qe=Qe[0])),Qe)if(j>=0&&j<=C.width-le&&de>=0&&de<=C.height-ue){Pe.bindFramebuffer(U.FRAMEBUFFER,Qe);let dt=C.textures[$e],St=dt.format,kt=dt.type;C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+$e);let lt=Fs(dt);if(lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Bt),U.bufferData(U.PIXEL_PACK_BUFFER,Oe.byteLength,U.STREAM_READ),U.readPixels(j,de,le,ue,Fe.convert(St),Fe.convert(kt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let ht=ee!==null?Y.get(ee).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,ht);let It=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _m(U,It,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Oe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Bt),U.deleteSync(It),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,de=0){let le=Math.pow(2,-de),ue=Math.floor(C.image.width*le),Oe=Math.floor(C.image.height*le),at=j!==null?j.x:0,$e=j!==null?j.y:0;he.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,de,0,0,at,$e,ue,Oe),Pe.unbindTexture()},this.copyTextureToTexture=function(C,j,de=null,le=null,ue=0,Oe=0){let at,$e,Qe,dt,St,kt,lt,Bt,ht,It=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(de!==null)at=de.max.x-de.min.x,$e=de.max.y-de.min.y,Qe=de.isBox3?de.max.z-de.min.z:1,dt=de.min.x,St=de.min.y,kt=de.isBox3?de.min.z:0;else{let Xt=Math.pow(2,-ue);at=Math.floor(It.width*Xt),$e=Math.floor(It.height*Xt),C.isDataArrayTexture?Qe=It.depth:C.isData3DTexture?Qe=Math.floor(It.depth*Xt):Qe=1,dt=0,St=0,kt=0}le!==null?(lt=le.x,Bt=le.y,ht=le.z):(lt=0,Bt=0,ht=0);let Lt=Fe.convert(j.format),xn=Fe.convert(j.type),ot;j.isData3DTexture?(he.setTexture3D(j,0),ot=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(he.setTexture2DArray(j,0),ot=U.TEXTURE_2D_ARRAY):(he.setTexture2D(j,0),ot=U.TEXTURE_2D),Pe.activeTexture(U.TEXTURE0),Pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),Pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Pe.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);let wn=Pe.getParameter(U.UNPACK_ROW_LENGTH),Ht=Pe.getParameter(U.UNPACK_IMAGE_HEIGHT),ri=Pe.getParameter(U.UNPACK_SKIP_PIXELS),Un=Pe.getParameter(U.UNPACK_SKIP_ROWS),ks=Pe.getParameter(U.UNPACK_SKIP_IMAGES);Pe.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),Pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),Pe.pixelStorei(U.UNPACK_SKIP_PIXELS,dt),Pe.pixelStorei(U.UNPACK_SKIP_ROWS,St),Pe.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);let fi=C.isDataArrayTexture||C.isData3DTexture,pi=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){let Xt=Y.get(C),yn=Y.get(j),Dn=Y.get(Xt.__renderTarget),yt=Y.get(yn.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let An=0;An<Qe;An++)fi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(C).__webglTexture,ue,kt+An),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(j).__webglTexture,Oe,ht+An)),U.blitFramebuffer(dt,St,dt+at,St+$e,lt,Bt,lt+at,Bt+$e,U.DEPTH_BUFFER_BIT,U.NEAREST);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(ue!==0||C.isRenderTargetTexture||Y.has(C)){let Xt=Y.get(C),yn=Y.get(j);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,N),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let Dn=0;Dn<Qe;Dn++)fi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,ue,kt+Dn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,ue),pi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yn.__webglTexture,Oe,ht+Dn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yn.__webglTexture,Oe),ue!==0?U.blitFramebuffer(dt,St,dt+at,St+$e,lt,Bt,lt+at,Bt+$e,U.COLOR_BUFFER_BIT,U.NEAREST):pi?U.copyTexSubImage3D(ot,Oe,lt,Bt,ht+Dn,dt,St,at,$e):U.copyTexSubImage2D(ot,Oe,lt,Bt,dt,St,at,$e);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pi?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(ot,Oe,lt,Bt,ht,at,$e,Qe,Lt,xn,It.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(ot,Oe,lt,Bt,ht,at,$e,Qe,Lt,It.data):U.texSubImage3D(ot,Oe,lt,Bt,ht,at,$e,Qe,Lt,xn,It):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Oe,lt,Bt,at,$e,Lt,xn,It.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Oe,lt,Bt,It.width,It.height,Lt,It.data):U.texSubImage2D(U.TEXTURE_2D,Oe,lt,Bt,at,$e,Lt,xn,It);Pe.pixelStorei(U.UNPACK_ROW_LENGTH,wn),Pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ht),Pe.pixelStorei(U.UNPACK_SKIP_PIXELS,ri),Pe.pixelStorei(U.UNPACK_SKIP_ROWS,Un),Pe.pixelStorei(U.UNPACK_SKIP_IMAGES,ks),Oe===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&U.generateMipmap(ot),Pe.unbindTexture()},this.initRenderTarget=function(C){Y.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),Pe.unbindTexture()},this.resetState=function(){te=0,Q=0,ee=null,Pe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}};var lg={type:"change"},Xf={type:"start"},ug={type:"end"},Ad=new dr,cg=new Si,xw=Math.cos(70*Vr.DEG2RAD),qn=new P,Li=2*Math.PI,rn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wf=1e-6,Rd=class extends Ll{constructor(e,t=null){super(e,t),this.state=rn.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new un,this._lastTargetPosition=new P,this._quat=new un().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wa,this._sphericalDelta=new wa,this._scale=1,this._panOffset=new P,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new P,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vw.bind(this),this._onPointerDown=yw.bind(this),this._onPointerUp=_w.bind(this),this._onContextMenu=Aw.bind(this),this._onMouseWheel=Sw.bind(this),this._onKeyDown=ww.bind(this),this._onTouchStart=Ew.bind(this),this._onTouchMove=Tw.bind(this),this._onMouseDown=bw.bind(this),this._onMouseMove=Mw.bind(this),this._interceptControlDown=Rw.bind(this),this._interceptControlUp=Cw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=rn.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lg),this.update(),this.state=rn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qn.copy(t).sub(this.target),qn.applyQuaternion(this._quat),this._spherical.setFromVector3(qn),this.autoRotate&&this.state===rn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Li:i>Math.PI&&(i-=Li),s<-Math.PI?s+=Li:s>Math.PI&&(s-=Li),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qn.setFromSpherical(this._spherical),qn.applyQuaternion(this._quatInverse),t.copy(this.target).add(qn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=qn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ad.origin.copy(this.object.position),Ad.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ad.direction))<xw?this.object.lookAt(this.target):(cg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ad.intersectPlane(cg,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wf||this._lastTargetPosition.distanceToSquared(this.target)>Wf?(this.dispatchEvent(lg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Li/60*this.autoRotateSpeed*e:Li/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qn.setFromMatrixColumn(t,0),qn.multiplyScalar(-e),this._panOffset.add(qn)}_panUp(e,t){this.screenSpacePanning===!0?qn.setFromMatrixColumn(t,1):(qn.setFromMatrixColumn(t,0),qn.crossVectors(this.object.up,qn)),qn.multiplyScalar(e),this._panOffset.add(qn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qn.copy(s).sub(this.target);let r=qn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/t.clientHeight),this._rotateUp(Li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Li*this._rotateDelta.x/t.clientHeight),this._rotateUp(Li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function yw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _w(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ug),this.state=rn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rn.DOLLY;break;case kr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rn.ROTATE}break;case kr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rn.PAN}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Xf)}function Mw(n){switch(this.state){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Sw(n){this.enabled===!1||this.enableZoom===!1||this.state!==rn.NONE||(n.preventDefault(),this.dispatchEvent(Xf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ug))}function ww(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ew(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1){this.state=rn.NONE;break}this._handleTouchStartRotate(n),this.state=rn.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1){this.state=rn.NONE;break}this._handleTouchStartPan(n),this.state=rn.TOUCH_PAN;break;default:this.state=rn.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rn.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rn.TOUCH_DOLLY_ROTATE;break;default:this.state=rn.NONE}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Xf)}function Tw(n){switch(this._trackPointer(n),this.state){case rn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rn.NONE}}function Aw(n){this.enabled!==!1&&n.preventDefault()}function Rw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xl=new P;function is(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xl.copy(e),Xl[i]=0,Xl.normalize();let c=.5*o/(o+a),u=1-Xl.angleTo(n)/l;return Math.sign(Xl[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Cd=class n extends en{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,u=new P(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new P,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[_+0]=is(x,c,"z","y",r,i),f[_+1]=1-is(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-is(x,c,"z","y",r,i),f[_+1]=1-is(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-is(x,c,"x","z",r,e),f[_+1]=is(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[_+0]=1-is(x,c,"x","z",r,e),f[_+1]=1-is(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[_+0]=1-is(x,c,"x","y",r,e),f[_+1]=1-is(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=is(x,c,"x","y",r,e),f[_+1]=1-is(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Pd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new qt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=dg(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let p=dg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function dg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Qn(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let x=u.getComponent(h,p);a.setComponent(h+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Pw=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function Iw(n,e){return Pw(n,e)}function Ot(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=Iw(n,e),a=o.getContext("2d"),l=new ml(o);i&&(l.colorSpace=oi),l.anisotropy=r,s&&(l.wrapS=lr,l.wrapT=lr,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Vt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Tt='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Dt=Math.PI*2,ss=Math.PI/180,st=(n,e,t)=>n<e?e:n>t?t:n,Wi=(n,e,t)=>n+(e-n)*t,qf=n=>{let e=st(n,0,1);return e*e*(3-2*e)},rs=n=>{let e=st(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},$t=(n,e,t,i)=>Wi(n,e,1-Math.exp(-t*i));function ql(n,e,t){let i=(e-n)%Dt;return i>Math.PI&&(i-=Dt),i<-Math.PI&&(i+=Dt),n+i*t}function $f(n,e){let t=(e-n)%Dt;return t>Math.PI&&(t-=Dt),t<-Math.PI&&(t+=Dt),t}var hg=new bt,fg=new un,pg=new Vn,mg=new P,gg=new P;function L(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return pg.set(t[0],t[1],t[2]),fg.setFromEuler(pg),mg.set(e[0],e[1],e[2]),gg.set(i[0],i[1],i[2]),hg.compose(mg,fg,gg),n.applyMatrix4(hg),n}var Le=(n,e,t,i=.02,s=2)=>new Cd(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Ae=(n,e,t)=>new en(n,e,t),ae=(n,e,t,i=32,s=!1)=>new Fn(n,e,t,i,1,s),Di=(n,e=24,t=16)=>new On(n,e,t),Yt=(n,e,t=12,i=48,s=Dt)=>new Ti(n,e,t,i,s),ci=(n,e=48)=>new El(n.map(([t,i])=>new Ce(t,i)),e);function La(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Dt;o.push(L(ae(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function Yf(n,e,t,i,s=.02){let r=new xs,o=Dt/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,f]=u[d],p=Math.cos(f)*h,x=Math.sin(f)*h;l===0&&d===0?r.moveTo(p,x):r.lineTo(p,x)}}if(r.closePath(),s>0){let l=new fr;l.absarc(0,0,s,0,Dt,!0),r.holes.push(l)}let a=new Xs(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function ui(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new P(l[0],l[1],l[2])),r=new va,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),f=Math.min(t,d.length()/2,h.length()/2),p=c.clone().sub(d.normalize().multiplyScalar(f)),x=c.clone().add(h.normalize().multiplyScalar(f));p.distanceTo(o)>1e-5&&r.add(new xo(o.clone(),p)),r.add(new yo(p,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new xo(o.clone(),c.clone()))}let a=r.getLength();return new Tl(r,Math.max(16,Math.round(a*40)),e,i,!1)}var ct=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new jt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Pd(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new nt(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Je(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new nt(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Ct(n,e,t){let i=new jt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Id=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new P(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new P){let i=st(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function xg(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Wt(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let p=0;p<=a;p++){let x=p/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),_=Math.sin(m),b=n+t*g,y=e-t*_,M=l?-g:g,w=l?_:-_;c.push(b,r,y,b,o,y),u.push(M,0,w,M,0,w),d.push(x,0,x,1)}for(let p=0;p<a;p++){let x=p*2;h.push(x,x+2,x+3,x,x+3,x+1)}let f=new qt;return f.setAttribute("position",new pt(c,3)),f.setAttribute("normal",new pt(u,3)),f.setAttribute("uv",new pt(d,2)),f.setIndex(h),f}function bs(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let f=0;f<u;f++){let p=n[f],x=n[(f+1)%c],m=x[0]-p[0],g=x[1]-p[1],_=Math.hypot(m,g);if(_<1e-6)continue;let b=g/_,y=-m/_,M=!1;s&&!s((p[0]+x[0])/2,(p[1]+x[1])/2,b,y)&&(b=-b,y=-y,M=!0);let w=r.length/3;r.push(p[0],e,p[1],p[0],t,p[1],x[0],e,x[1],x[0],t,x[1]);for(let v=0;v<4;v++)o.push(b,0,y);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,M?l.push(w,w+2,w+3,w,w+3,w+1):l.push(w,w+1,w+3,w,w+3,w+2)}let h=new qt;return h.setAttribute("position",new pt(r,3)),h.setAttribute("normal",new pt(o,3)),h.setAttribute("uv",new pt(a,2)),h.setIndex(l),h}function yg(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Lw(){let n=yg(7);return Ot(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function Dw(){let n=yg(23);return Ot(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Dt),e.stroke()},{anisotropy:8})}function Nw(){return Ot(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function Ow(){return Ot(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function Uw(){return Ot(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var In=n=>new Mt(n);function Ms({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=qs,emissive:a=0,emissiveIntensity:l=0}={}){let c=new Mt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Ta,c.blendSrc=zr,c.blendDst=Hr,c.blendSrcAlpha=zr,c.blendDstAlpha=Hr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function vg(n="high"){let e={brushed:Lw().tex,wafer:Dw().tex,radial:Nw().tex,hazard:Ow().tex,grille:Uw().tex};return{M:{alu:In({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:In({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:In({color:14936044,metalness:1,roughness:.08}),steel:In({color:11646654,metalness:1,roughness:.28}),darkSteel:In({color:6251886,metalness:1,roughness:.34}),brass:In({color:13876630,metalness:1,roughness:.3}),copper:In({color:12946278,metalness:1,roughness:.3}),gold:In({color:15320959,metalness:1,roughness:.22}),white:In({color:15856630,metalness:0,roughness:.32}),graphite:In({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:In({color:5073918,metalness:.2,roughness:.35}),orange:In({color:13137466,metalness:.3,roughness:.36}),rubber:In({color:1382171,metalness:0,roughness:.8}),plastic:In({color:2303532,metalness:0,roughness:.45}),ceramic:In({color:15001579,metalness:0,roughness:.42}),grille:In({map:e.grille,metalness:.6,roughness:.45}),hazard:In({map:e.hazard,metalness:.2,roughness:.55}),glass:Ms({color:14674421,opacity:.08,fresnel:.55}),smoke:Ms({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:tn}),fuel:In({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:In({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:In({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:In({color:13949150,metalness:0,roughness:.25}),wall:In({color:15133166,metalness:0,roughness:.5}),shadow:new zt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new pr({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:In({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function Qt(n,e=0){let t=new ze(n);return new Mt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function $l(n,e=1.25){return new Mt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function kn(n,e=.55){return new Mt({map:n,metalness:e,roughness:.42})}var Ao=Math.PI/180,qe={cx:.5,cz:-1,r:22,h:13.5},os={panes:24,finDepth:.36,doorA0:263*Ao,doorA1:277*Ao,doorH:3.1},Wr={a0:236*Ao,a1:304*Ao,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},as={r:22.35,groundY:-420},ni={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Ao,targetR:17,targetYMin:.4,targetYMax:12},Nt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Dd=.45,vr=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],rt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Ao,a1:142*Ao,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Kf=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function qr(n,e,t=0,i=new P){return i.set(qe.cx+e*Math.cos(n),t,qe.cz-e*Math.sin(n))}var Zf=Math.PI*2,Ld=(n,e,t)=>Math.min(t,Math.max(e,n)),_g=(n,e)=>{let t=Math.abs(n-e)%Zf;return t>Math.PI?Zf-t:t};function Jf(n,e){let t=Math.atan2(-(e-qe.cz),n-qe.cx);return t<0?t+Zf:t}function Xr(n){let e=ni,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-qe.cx,n.z-qe.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Jf(n.x,n.z);return i<=e.outerR+t?s>=os.doorA0+e.edge-t&&s<=os.doorA1-e.edge+t&&n.y<=os.doorH-.25+t?"door":null:s>=Wr.a0+e.edge-t&&s<=Wr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function bg(n,e,t){let i=n.x-qe.cx,s=n.z-qe.cz,r=Math.hypot(i,s),o=Ld(r,e,t);r>1e-9&&o!==r&&(n.x=qe.cx+i*o/r,n.z=qe.cz+s*o/r)}function Mg(n,e,t){let i=Jf(n.x,n.z);if(i>=e&&i<=t)return;let s=_g(i,e)<_g(i,t)?e:t,r=Math.hypot(n.x-qe.cx,n.z-qe.cz);n.x=qe.cx+r*Math.cos(s),n.z=qe.cz-r*Math.sin(s)}function jf(n,e=null){if(Xr(n))return n;let t=ni,i=e?Xr(e):null;if(!i){let s=Math.hypot(n.x-qe.cx,n.z-qe.cz),r=Jf(n.x,n.z);i=s>qe.r&&r>=Wr.a0&&r<=Wr.a1?"balcony":"hall"}if(i==="door"){if(Mg(n,os.doorA0+t.edge,os.doorA1-t.edge),n.y=Ld(n.y,t.yMin,os.doorH-.25),Xr(n))return n;i=Math.hypot(e.x-qe.cx,e.z-qe.cz)>qe.r?"balcony":"hall"}return i==="balcony"?(Mg(n,Wr.a0+t.edge,Wr.a1-t.edge),bg(n,t.outerR+.001,t.balconyR),n.y=Ld(n.y,t.yMin,t.balconyYMax)):(bg(n,0,t.r),n.y=Ld(n.y,t.yMin,t.yMax)),n}function Nd(){let n=rt.screenR,e=Kf.reduce((i,s)=>i+s.w,0)+rt.gap*(Kf.length-1),t=Math.PI/2+e/n/2;return Kf.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-rt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:rt.screenY-a/2,y1:rt.screenY+a/2}})}function Fw(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function kw(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function Bw(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?Fw(e,t,n.a,n.b,n.r):kw(e,t,n.c,n.h)}function wg(n,e,t=vr){let i=1/0;for(let s of t)i=Math.min(i,Bw(s,n,e));return i}function Eg(n,e){let t=Math.abs(n-Nt.cx)-Nt.hx+Nt.r,i=Math.abs(e-Nt.cz)-Nt.hz+Nt.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Nt.r}var zn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function Sg(n){return n.type==="circle"?`length(p - vec2(${zn(n.c[0])}, ${zn(n.c[1])})) - ${zn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${zn(n.a[0])}, ${zn(n.a[1])}), vec2(${zn(n.b[0])}, ${zn(n.b[1])}), ${zn(n.r)})`:`lSdBox(p, vec2(${zn(n.c[0])}, ${zn(n.c[1])}), vec2(${zn(n.h[0])}, ${zn(n.h[1])}))`}function Tg(){let n=vr.find(t=>t.id==="cell");return`
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
${vr.map((t,i)=>i===0?`  float d = ${Sg(t)};`:`  d = min(d, ${Sg(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${zn(Nt.cx)}, ${zn(Nt.cz)})) - vec2(${zn(Nt.hx-Nt.r)}, ${zn(Nt.hz-Nt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${zn(Nt.r)};
}
const vec2 HUB_C = vec2(${zn(n.c[0])}, ${zn(n.c[1])});
const float HUB_R = ${zn(n.r)};
`}function Ag(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Nt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,f)=>{let p=Math.max(1,Math.ceil(Math.hypot(h-u,f-d)/n));for(let x=0;x<p;x++)o.push([u+(h-u)*x/p,d+(f-d)*x/p])};for(let u=0;u<4;u++){let[d,h,f]=a[u];for(let M=0;M<l;M++){let w=f+Math.PI/2*M/l;o.push([d+r*Math.cos(w),h+r*Math.sin(w)])}let[p,x,m]=a[(u+1)%4],g=d+r*Math.cos(f+Math.PI/2),_=h+r*Math.sin(f+Math.PI/2),b=p+r*Math.cos(m),y=x+r*Math.sin(m);c(g,_,b,y)}return o}var Yl=Math.PI/180;function zw(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Xi(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function Rg(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function Hw(n,e){return(n/(2*Math.PI)+.5)*e}function Kl(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,Xi(r,o)),a.addColorStop(.45,Xi(r,o*.42)),a.addColorStop(1,Xi(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function Gw(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,y)=>{y(b-e),y(b),y(b+e)},l=zw(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=Hw(Math.atan2(d[2],d[0]),e),f=o(Math.asin(d[1])/Yl);if(a(h,b=>{Kl(n,b,o(3),100*r,16*r,s.sunGlow,.55),Kl(n,b,f,60*r,60*r,s.sunGlow,.42),Kl(n,b,f,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>Kl(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let y=3+24*Math.pow(l(),1.6),M=l()*e,w=(8+42*l())*r,v=(.35+1.4*l())*r,S=Math.abs(M-h)%e;S=Math.min(S,e-S)/e;let T=Math.max(0,1-S/.28),R=Rg(s.cloudDark,s.cloudLit,T),D=s.clouds*(.18+.32*l())*(.6+.4*T);a(M,k=>Kl(n,k,o(y),w,v,R,D))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let y=Math.sin(16*Yl)+l()*(1-Math.sin(16*Yl)),M=Math.asin(y)/Yl,w=Math.min(1,Math.max(0,(M-16)/26)),v=s.stars*w*(.25+.7*l()*l());if(v<.03)continue;let S=.7+l()*1.1,T=1/Math.max(.12,Math.cos(M*Yl));n.fillStyle=l()<.2?Xi("#bcd2ff",v):Xi("#ffffff",v),n.fillRect(l()*e,o(M),S*T,S)}let p=s.far,x=Rg(p.body,p.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,M=o(y),w=o(-2.5);if(n.fillStyle=x,n.fillRect(m,M,b,w-M),y>2.1&&l()<.6&&n.fillRect(m+b/2-.5,M-3-l()*5,1,4+l()*5),p.windows>0){let v=Math.floor((w-M)*b*.05*p.windows);for(let S=0;S<v;S++){let T=l(),R=T<.62?"#ffc078":T<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=Xi(R,(.25+.4*l())*Math.min(1,p.windows*1.4)),n.fillRect(m+Math.floor(l()*b),M+Math.floor(l()*(w-M)),1,1)}}p.neon>0&&l()<.04&&(n.fillStyle=Xi(l()<.7?"#46e6ff":"#ffb347",.45*p.neon),n.fillRect(m,M-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,Xi(p.haze,0)),g.addColorStop(.45,Xi(p.haze,.38)),g.addColorStop(1,Xi(p.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let y=0;y<b;y++){let M=Math.pow(l(),1.3),w=-.3-3.9*M,v=l(),S=v<.6?"#ffb46a":v<.82?"#ffe2b0":v<.93?"#ffffff":"#55dcff";n.fillStyle=Xi(S,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*M)),n.fillRect(l()*e,o(w),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,Xi(s.groundHaze,.1)),_.addColorStop(1,Xi(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var Vw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,Ww=`
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
`;function Xw(n,e){let t=new mo;t.background=new ze(n.clear);let i=new nt(new On(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new zt({side:tn,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let f=new nt(u,d);return f.position.set(h[0],h[1],h[2]),t.add(f),f},a=qe.cx,l=qe.cz;o(new Pn(6.4,qe.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,qe.h,l]),o(new Ti(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,qe.h-.25,l]),o(new En(qe.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new Pn(qe.r-.6,qe.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,qe.h-.55,l]),o(Wt(a,l,qe.r-.6,0,Math.PI*2,qe.h-.55,qe.h,64,!0),r(s.column,.85)),o(Wt(a,l,rt.r,rt.a0,rt.a1,rt.bandY0,rt.bandY1,32,!0),r(s.media,1)),o(Wt(a,l,rt.r,rt.a0,rt.a1,rt.bandY1,rt.top,32,!0),r(s.column,.85)),o(Wt(a,l,rt.r-.3,rt.a0,rt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of Nd())o(Wt(a,l,rt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function qw(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function Cg(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=Ot(i,s,null,{anisotropy:1});r.tex.wrapS=lr,r.tex.generateMipmaps=!1,r.tex.minFilter=Cn,r.tex.magFilter=Cn;let o=new ln({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new ze(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:Vw,fragmentShader:Ww,side:li,depthTest:!1,depthWrite:!1,fog:!1}),a=new nt(new On(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=Xw(c,o),f=new Pa(n),p=f.fromScene(h,.035,.1,400,{size:256,position:new P(qe.cx,1.6,qe.cz)});f.dispose(),qw(h,o),l&&l.dispose(),l=p}function d(h){c=h,r.redraw((f,p,x)=>Gw(f,p,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var hn=1,$w=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,Yw=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,Kw=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,Zw=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function Pg(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new ai(16,16,{type:Ai,generateMipmaps:!0,minFilter:ys,magFilter:Cn,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new bt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new jn;o.layers.set(0);let a=new P(0,1,0),l=new P(0,0,0),c=new P,u=new bt,d=new P,h=new P,f=new P,p=new Si,x=new mn,m=new mn,g=new Ce,_=0;function b(M){M.uniforms.tReflect=r.tReflect,M.uniforms.uReflMatrix=r.uReflMatrix,M.uniforms.uReflStrength=r.uReflStrength,M.uniforms.uReflBlur=r.uReflBlur,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
${$w}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Yw}`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
${Kw}`).replace("#include <opaque_fragment>",`${Zw}
#include <opaque_fragment>`)}function y(M,w){if(!n)return!1;n.getDrawingBufferSize(g);let v=Math.max(16,Math.round(g.x*e)),S=Math.max(16,Math.round(g.y*e));if((s.width!==v||s.height!==S)&&s.setSize(v,S),c.setFromMatrixPosition(w.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(w.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),f.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(f),o.far=w.far,o.updateMatrixWorld(),o.projectionMatrix.copy(w.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let T=r.uReflMatrix.value;T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(o.projectionMatrix),T.multiply(o.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(a,l),p.applyMatrix4(o.matrixWorldInverse),x.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let R=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+R[8])/R[0],m.y=(Math.sign(x.y)+R[9])/R[5],m.z=-1,m.w=(1+R[10])/R[14],x.multiplyScalar(2/x.dot(m)),R[2]=x.x,R[6]=x.y,R[10]=x.z+1-_,R[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let D=n.getRenderTarget(),k=n.autoClear,H=n.shadowMap.autoUpdate,N=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(M,o),n.autoClear=k,n.shadowMap.autoUpdate=H,n.shadowMap.needsUpdate=N,n.setRenderTarget(D),!0}return{uniforms:r,inject:b,update:y,setStrength(M){r.uReflStrength.value=M},dispose(){s.dispose()}}}var Ni=Math.PI*2,tp=Tg();function Od(n,e,t){let i=new zt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var np=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function Lg(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function Jw(n){let e=new Mt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{Lg(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${np}
${tp}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
float ringD = length(vFloor - vec2(${qe.cx.toFixed(3)}, ${qe.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function jw(n){let e=new Mt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{Lg(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${np}
${tp}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var Qw=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,eE=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${np}
${tp}
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
}`,tE=`
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
}`,nE=`
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
}`;function iE(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(Ni*o/t));for(let l=0;l<a;l++){let c=l/a*Ni;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,f=n.r+e,p=Math.max(16,Math.ceil(Math.PI*f/t)),x=(g,_)=>{for(let b=0;b<=p;b++){let y=_-Math.PI*b/p;i.push([g[0]+f*(Math.cos(y)*c+Math.sin(y)*d),g[1]+f*(Math.cos(y)*u+Math.sin(y)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,_)=>{let b=st(((g-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function Qf(n,e,t,i){let{pts:s,center:r}=iE(n,e);return bs(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function Ig(n,e){let t=Nt.hx-Nt.r,i=Nt.hz-Nt.r;return n.map(([s,r])=>{let o=Nt.cx+st(s-Nt.cx,-t,t),a=Nt.cz+st(r-Nt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var ep=(n,e,t,i)=>(Nt.cx-n)*t+(Nt.cz-e)*i>0;function sE(n){let e=vr.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function rE(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of vr)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Nt.cx-Nt.hx),e=Math.min(e,Nt.cx+Nt.hx),t=Math.max(t,Nt.cz-Nt.hz),i=Math.min(i,Nt.cz+Nt.hz),{x0:n,x1:e,z0:t,z1:i}}function oE(n,e,t,i=6){let s=new P().subVectors(e,n),r=s.length(),o=new Fn(t,t,r,i,1,!0);return o.applyQuaternion(new un().setFromUnitVectors(new P(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function aE({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=qe,l=Wr,c=l.a1-l.a0,u=(S,T)=>[r+T*Math.cos(S),o-T*Math.sin(S)],d=new nt(L(new Pn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(hn),n.add("white",L(new Pn(a+.2,as.r,160,1,l.a1,Ni-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Wt(r,o,as.r,l.a1,l.a0+Ni,-.45,0,160,!1)),e.add("glowCyan",Wt(r,o,as.r+.004,l.a1,l.a0+Ni,-.24,-.21,160,!1)),e.add("white",Wt(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Wt(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Wt(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",L(Ae(l.r1-as.r,l.slab,.04),s(S,(as.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,f=a+.05,p=[];for(let S=0;S<=4;S++)p.push(u(l.a0,f+(h-f)*S/4));let x=Math.ceil(c*h/.45);for(let S=1;S<=x;S++)p.push(u(l.a0+c*S/x,h));for(let S=3;S>=0;S--)p.push(u(l.a1,f+(h-f)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(S,T,R,D)=>(m[0]-S)*R+(m[1]-T)*D>0,_=(S,T,R,D)=>!g(S,T,R,D);t.add("rail",bs(p,.045,l.rail)),n.add("chrome",ui(p.map(([S,T])=>[S,l.rail+.026,T]),.026,.1,8)),n.add("silver",bs(p,0,.045,{facing:_})),n.add("glowCyan",bs(p,0,.04,{facing:g}));for(let S=0;S<p.length;S+=5)n.add("chrome",L(ae(.018,.018,l.rail,8),[p[S][0],l.rail/2,p[S][1]]));let b=l.canopyY,y=a+.02,M=l.r1+.35;n.add("white",L(new Pn(y,M,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",L(new Pn(y,M,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",L(new Pn(M-.13,M-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Wt(r,o,M,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Wt(r,o,M-.002,l.a0,l.a1,b,b+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",L(Ae(M-y,.14,.04),s(S,(y+M)/2,b+.07),[0,S,0]));for(let[S,T]of[[23.3,17],[25.2,19]])for(let R=0;R<T;R++){let D=l.a0+(R+.5)*c/T;n.add("glowWhite",L(new En(.085,16),s(D,S,b-.003),[Math.PI/2,0,0])),n.add("chrome",L(new Pn(.085,.11,16,1),s(D,S,b-.002),[Math.PI/2,0,0]))}let w=new P,v=new P;for(let S=0;S<6;S++){let T=l.a0+(S+.5)*c/6;qr(T,M-.15,b+.14,w),qr(T,a+.03,b+3.4,v),n.add("silver",oE(w,v,.014)),n.add("chrome",L(ae(.05,.05,.03,14),v.toArray(),[0,T,Math.PI/2]))}for(let S of[250,290]){let T=S*Math.PI/180;n.add("white",L(Le(.5,.34,2.4,.05,3),s(T,23.4,.27),[0,T,0])),n.add("dark",L(Ae(.32,.1,2.1),s(T,23.4,.05),[0,T,0])),n.add("glowCyan",L(Ae(.33,.012,2.11),s(T,23.4,.094),[0,T,0]))}return{floor:d}}function Dg(n,{reflection:e=null}={}){let t=new jt;t.name="atrium";let{cx:i,cz:s,r,h:o}=qe,a={white:new Mt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new Mt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new Mt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new Mt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new Mt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Od(4641535,3,"atrium-glow-cyan"),glowBlue:Od(5213695,2.2,"atrium-glow-blue"),glowWhite:Od(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Od(16777215,5,"atrium-ring-light"),u=Ms({color:13623538,opacity:.045,fresnel:.5,side:tn}),d=Ms({color:14083830,opacity:.1,fresnel:.6,side:tn}),h=Ms({color:14214901,opacity:.08,fresnel:.5,side:tn}),f=Ms({color:13623538,opacity:.04,fresnel:.4}),p=new ct,x=new ct,m=new ct,g=new P,_=(A,Y,he)=>qr(A,Y,he,g).toArray(),{doorA0:b,doorA1:y,doorH:M}=os,w=M+.12,v=Ni/os.panes,S=.006/r,T=A=>A>b+1e-6&&A<y-1e-6;for(let A=0;A<os.panes;A++){let Y=A*v+S,he=(A+1)*v-S,I=[Y];for(let E of[b,y])E>Y&&E<he&&I.push(E);I.push(he);for(let E=0;E+1<I.length;E++){let V=I[E],pe=I[E+1],me=T((V+pe)/2)?w:.05,ke=Math.max(2,Math.ceil((pe-V)/v*16));m.add("glass",Wt(i,s,r,V,pe,me,o,ke,!0))}}let R=os.finDepth,D=o-.55,k=r-R/2-.004;for(let A=0;A<os.panes;A++){let Y=A*v;if(!T(Y)){m.add("fin",L(Ae(R,D,.022),_(Y,k,D/2),[0,Y,0])),p.add("silver",L(Ae(R+.04,.06,.05),_(Y,k,.03),[0,Y,0])),p.add("silver",L(Ae(R+.04,.06,.05),_(Y,k,D-.03),[0,Y,0]));for(let he of[1.1,4.7,8.3,11.9]){p.add("chrome",L(Ae(.025,.09,.17),_(Y,r-.0175,he),[0,Y,0])),p.add("chrome",L(Ae(.09,.09,.045),_(Y,r-.075,he),[0,Y,0]));for(let I of[-1,1])p.add("chrome",L(ae(.022,.022,.018,14),_(Y+I*(.055/r),r-.039,he),[0,Y,Math.PI/2]))}}}let H=o-.55;p.add("white",Wt(i,s,r-.6,0,Ni,H,o,160,!0)),p.add("satin",L(new Pn(r-.6,r-.01,160,1),[i,H,s],[Math.PI/2,0,0])),p.add("glowWhite",L(new Pn(r-.16,r-.1,160,1),[i,H-.004,s],[Math.PI/2,0,0])),p.add("glowCyan",Wt(i,s,r-.605,0,Ni,H+.02,H+.05,160,!0));let N=y,q=Ni-(y-b);p.add("glowCyan",L(new Pn(r-.17,r-.13,160,1,N,q),[i,.003,s],[-Math.PI/2,0,0])),p.add("silver",Wt(i,s,r-.03,N,N+q,0,.05,160,!0));for(let A of[b,y])p.add("silver",L(Ae(.14,w,.06),_(A,r-.03,w/2),[0,A,0]));let te=y-b;p.add("silver",Wt(i,s,r-.06,b,y,M,w,16,!0)),p.add("silver",Wt(i,s,r+.04,b,y,M,w,16,!1)),p.add("silver",L(new Pn(r-.06,r+.04,16,1,-y,te),[i,M,s],[Math.PI/2,0,0])),p.add("glowWhite",L(new Pn(r-.025,r+.005,16,1,-y,te),[i,M-.002,s],[Math.PI/2,0,0])),p.add("silver",L(new Pn(r-.22,r+.24,16,1,b,te),[i,.003,s],[-Math.PI/2,0,0]));let Q=te/2,ee=r-.09;for(let[A,Y,he]of[[b-Q,b,.9],[y,y+Q,.1]]){m.add("fin",Wt(i,s,ee,A+.03/ee,Y-.03/ee,.06,M-.06,12,!0)),p.add("silver",Wt(i,s,ee-.02,A,Y,0,.06,12,!0)),p.add("silver",Wt(i,s,ee-.02,A,Y,M-.06,M,12,!0));for(let I of[A,Y])p.add("silver",L(Ae(.05,M,.05),_(I,ee,M/2),[0,I,0]));p.add("chrome",L(ae(.012,.012,1.1,8),_(A+(Y-A)*he,ee-.05,1.05)))}p.add("silver",Wt(i,s,ee-.035,b-Q,y+Q,M,M+.08,24,!0)),p.add("ceiling",L(new Pn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<16;A++){let Y=A/16*Ni,he=(r+6.4)/2;p.add("white",L(Ae(r-6.4,.34,.3),[i+he*Math.cos(Y),o-.17,s-he*Math.sin(Y)],[0,Y,0]))}for(let A of[9,16.5])p.add("white",Wt(i,s,A,0,Ni,o-.34,o,160,!0)),p.add("white",Wt(i,s,A+.3,0,Ni,o-.34,o,160,!1)),p.add("white",L(new Pn(A,A+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let A of[11.15,11.85])p.add("satin",Wt(i,s,A,0,Ni,o-.24,o,160,!0)),p.add("satin",Wt(i,s,A,0,Ni,o-.24,o,160,!1));let W=new nt(L(Yt(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);W.name="ring-light",W.position.set(i,o-.15,s),t.add(W),p.add("chrome",L(Yt(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<4;A++)p.add("silver",L(Ae(12.8,.12,.12),[i,o+.03,s],[0,A*Math.PI/4,0]));let K=new nt(L(new En(6.4,96),[0,0,0],[Math.PI/2,0,0]),f);K.name="skylight",K.position.set(i,o+.06,s),t.add(K);let{a0:O,a1:$}=rt,ce=rt.moduleR-.36;p.add("dark",Wt(i,s,rt.r,O,$,rt.bandY0,rt.bandY1,72,!0)),p.add("white",Wt(i,s,rt.r,O,$,rt.bandY1,rt.top,72,!0)),p.add("white",Wt(i,s,rt.r,O,$,2.3,rt.bandY0,72,!0)),p.add("satin",Wt(i,s,rt.r,O,$,0,2.3,72,!0)),p.add("white",Wt(i,s,rt.back,O,$,0,rt.top,72,!1)),p.add("white",L(new Pn(rt.r,rt.back,72,1,O,$-O),[i,rt.top,s],[-Math.PI/2,0,0])),p.add("white",L(new Pn(ce,rt.r,72,1,O,$-O),[i,2.3,s],[-Math.PI/2,0,0])),p.add("white",Wt(i,s,ce,O,$,2.22,2.3,72,!0)),p.add("glowBlue",Wt(i,s,ce-.004,O,$,2.245,2.265,72,!0)),p.add("glowCyan",Wt(i,s,rt.r-.012,O,$,7.1,7.14,72,!0)),p.add("glowCyan",Wt(i,s,rt.r-.012,O,$,2.64,2.68,72,!0));let Z=rt.back-ce+.04,ge=(rt.back+ce)/2;for(let[A,Y]of[[O-.07/ge,-1],[$+.07/ge,1]]){p.add("white",L(Ae(Z,rt.top,.14),[i+ge*Math.cos(A),rt.top/2,s-ge*Math.sin(A)],[0,A,0]));let he=A-Y*(.075/ce);p.add("glowCyan",L(Ae(.04,rt.top-.4,.03),[i+(ce+.02)*Math.cos(he),rt.top/2,s-(ce+.02)*Math.sin(he)],[0,A,0]))}let Me=24,ne=new Nn(new en(.62,2.22,.78),a.white,Me);ne.name="compute-modules";let ye=new Ce(.7,2.08),De=new vt(ye.x,ye.y),tt=new ln({name:"module-doors",vertexShader:tE,fragmentShader:nE,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:ye}}}),Be=new Nn(De,tt,Me);Be.name="module-doors";let je=new Float32Array(Me),Ge=new dn;for(let A=0;A<Me;A++){let Y=O+(A+.5)*($-O)/Me;qr(Y,rt.moduleR,1.11,Ge.position),Ge.rotation.set(0,Y,0),Ge.updateMatrix(),ne.setMatrixAt(A,Ge.matrix),qr(Y,rt.moduleR-.316,1.11,Ge.position),Ge.rotation.set(0,Y-Math.PI/2,0),Ge.updateMatrix(),Be.setMatrixAt(A,Ge.matrix),je[A]=A*7.31+3.7,p.add("chrome",L(Ae(.66,.03,.82),[Ge.position.x,.015,Ge.position.z],[0,Y,0]))}De.setAttribute("aSeed",new xi(je,1)),ne.instanceMatrix.needsUpdate=!0,Be.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),Be.computeBoundingSphere(),ne.receiveShadow=!0,t.add(ne,Be);let xe=Jw(e),G=new nt(L(new En(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),xe);G.name="atrium-floor",G.position.set(i,0,s),G.receiveShadow=!0,G.layers.set(hn);let z=aE({kit:p,low:x,glassKit:m,floorMat:xe,at:_});t.add(z.floor);let re=rE(),J=new nt(L(new vt(re.x1-re.x0,re.z1-re.z0),[0,0,0],[-Math.PI/2,0,0]),jw(e));J.name="island-tops",J.position.set((re.x0+re.x1)/2,0,(re.z0+re.z1)/2),J.receiveShadow=!0,J.layers.set(hn),t.add(G,J);for(let A of vr)x.add("satin",Qf(A,0,-Dd,0)),x.add("silver",Qf(A,.004,-.045,-.001)),x.add("glowCyan",Qf(A,.006,-Dd,-Dd+.05));let se=Ag(.5);x.add("satin",bs(se,-Nt.depth,0,{closed:!0,facing:ep}));let Re=Ig(se,.012);x.add("glowCyan",bs(Re,-.17,-.13,{closed:!0,facing:ep})),x.add("glowBlue",bs(Re,-Nt.depth+.1,-Nt.depth+.14,{closed:!0,facing:ep}));let F=new ln({name:"data-pool",vertexShader:Qw,fragmentShader:eE,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),oe=new nt(L(new vt(Nt.hx*2,Nt.hz*2),[0,0,0],[-Math.PI/2,0,0]),F);oe.name="data-pool",oe.position.set(Nt.cx,-Nt.depth,Nt.cz),oe.layers.set(hn),t.add(oe);let fe=Ig(se,-.06),U=[];for(let A of sE(fe)){U.push(bs(A,.035,1)),p.add("chrome",ui(A.map(([Y,he])=>[Y,1.01,he]),.022,.08,8)),p.add("glowCyan",bs(A,0,.035)),p.add("glowCyan",bs(A.slice().reverse(),0,.035));for(let Y=0;Y<A.length;Y+=5)p.add("chrome",L(ae(.018,.018,1,8),[A[Y][0],.5,A[Y][1]]))}if(U.length){let A=new ct;for(let he of U)A.add("glass",he);let Y=A.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(Y)}let Ke=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Ke.traverse(A=>{A.isMesh&&(A.renderOrder=2)}),t.add(Ke);let ut=p.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(ut);let gt=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});gt.traverse(A=>A.layers.set(hn)),t.add(gt);let Pe=.3;return{root:t,reflectors:[G,J,z.floor],bounds:re,update(A,Y,he={}){let I=st(he.activity||0,0,1);Pe+=(.3+.7*I-Pe)*Math.min(1,A*2),F.uniforms.uTravel.value=(F.uniforms.uTravel.value+A*(.25+1.4*I))%1e3,F.uniforms.uFlow.value=Pe,tt.uniforms.uTime.value=Y,tt.uniforms.uActivity.value=Pe},setLook(A){let Y=A.glow==null?1:A.glow;for(let he of l)he.color.setHex(he.userData.glow.hex).multiplyScalar(he.userData.glow.k*Y);c.color.set(A.interior.ring).multiplyScalar(A.interior.ringPower),a.ceiling.emissiveIntensity=A.id==="day"?.16:.22,F.uniforms.uGlow.value=Y}}}var _r=as.groundY,br={pitch:96,rot:18*Math.PI/180},ip=Math.cos(br.rot),sp=Math.sin(br.rot),Ng=13*289,Zl=2400;function $r(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Og(n,e,t=[0,0]){return t[0]=qe.cx+ip*n+sp*e,t[1]=qe.cz-sp*n+ip*e,t}function rp(n,e,t=[0,0]){return t[0]=qe.cx+e*Math.cos(n),t[1]=qe.cz-e*Math.sin(n),t}function Ug(){return{uHaze:{value:new ze(2902638)},uHazeHigh:{value:new ze(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Ce(qe.cx,qe.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new ze(16777215)},uSunK:{value:.2},uSkyRefl:{value:new ze(3103372)}}}function Ss(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var ws=["uHaze","uHazeHigh","uHazeDensity"],Es=`
#define GROUND_Y (${_r.toFixed(1)})
#define GRID_P ${br.pitch.toFixed(1)}
#define GRID_C ${ip.toFixed(7)}
#define GRID_S ${sp.toFixed(7)}
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
`;var lE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,cE=`
${Es}
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
`,uE=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,dE=`
${Es}
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
#define TOWER_R ${as.r.toFixed(3)}

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
`;function Fg(n,{quality:e="high"}={}){let t=Ss(n,[...ws,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new ze(461846)},uStreet:{value:new ze(16752714)},uAvenue:{value:new ze(4641535)},uRoof:{value:new ze(1712690)},uPark:{value:new ze(463887)}}),i=new ln({name:"city-ground",vertexShader:lE,fragmentShader:cE,uniforms:t}),s=e==="low"?4200:6e3,r=new En(s,96).rotateX(-Math.PI/2),o=new nt(r,i);return o.name="city-ground",o.position.set(qe.cx,_r,qe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function kg(n){let e=Ss(n,[...ws,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new ze(1778996)},uGlassC:{value:new ze(660516)},uSpine:{value:new ze(4641535)}}),t=new ln({name:"city-host-facade",vertexShader:uE,fragmentShader:dE,uniforms:e}),i=-.45,s=i-_r,r=new Fn(as.r,as.r,s,128,1,!0),o=new nt(r,t);return o.name="city-host-facade",o.position.set(qe.cx,(i+_r)/2,qe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var hE=`
${Es}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${Zl.toFixed(1)}

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
`,fE=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function Bg(n,{quality:e="high"}={}){let t=$r(91),i=br.pitch,s=e==="low"?2:1,r=[];for(let f=-20;f<=20;f+=4){let p=(f+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:p-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:p+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let f of[-16,-12,12,16]){let p=(f+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:p,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let f of r){let p=Math.floor(2*Zl/f.spacing);for(let x=0;x<p;x++){o.push(f.axis,f.coord,f.y,f.speed);let m=t(),g=f.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/p,7+t()*8,t(),g)}}let l=o.length/4,c=new vt(1,1),u=new Il;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new xi(new Float32Array(o),4)),u.setAttribute("aCar",new xi(new Float32Array(a),4)),u.instanceCount=l;let d=new ln({name:"city-traffic",vertexShader:hE,fragmentShader:fE,uniforms:Ss(n,[...ws,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:ti,side:tn}),h=new nt(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(hn),{mesh:h,count:l}}var Vg=Math.PI/180,op=br.pitch,pE=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],mE=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],gE={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},xE=`
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
`,yE=`
${Es}
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
`;function vE(n,e){return Math.hypot(n-qe.cx,e-qe.cz)}function _E(n,e){let t=$r(17),i=n==="low"?1500:2600,s=Math.ceil(i/op)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=pE.map(c=>{let[u,d]=rp(c.a*Vg,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let f=c*op+d,p=u*op+h,x=Math.hypot(f,p);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,_=12+t()*20,b=(t()-.5)*Math.max(0,37-g),y=(t()-.5)*Math.max(0,37-_);Og(f+b,p+y,a);let M=a[0],w=a[1];if(e.some(N=>Math.hypot(N.x-M,N.z-w)<N.rad))continue;let v=st((x-120)/650,0,1),S=22+Math.pow(t(),2.2)*(70+250*v),T=0;for(let N of o)T=Math.max(T,Math.exp(-((M-N.x)**2+(w-N.z)**2)/N.r2));S+=T*(140+220*t());let R=Math.min(_r+S,T>.3?60:-40),D=t(),k=T>.3?D<.3?0:D<.45?1:D<.6?2:3:D<.35?0:D<.6?1:D<.9?2:3,H=0;Math.min(g,_)>=22&&t()<.18&&(H|=1),t()<.45&&(H|=2),t()<.35&&(H|=8),l.push({x:M,z:w,w:g,d:_,base:_r-20,top:R,rot:br.rot,seed:t(),style:k,flags:H})}return l}function bE(n){let e=$r(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function ME(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*Vg,[d,h]=rp(u,c.r),f=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):br.rot,p={x:d,z:h,w:c.w,d:c.d,base:_r-20,top:c.top,rot:f,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(p),p};for(let c of mE){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(gE);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function zg(n,e,t){let i=new en(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Nn(i,e,s),l=new dn;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new xi(r,3)),i.setAttribute("aInfo",new xi(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var SE=`
${Es}
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
`,wE=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function EE(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function TE(n,e,t,i){let s=$r(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,f]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...EE(d,h*d.w/2.15,f*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new qt;l.setAttribute("position",new pt(r,3)),l.setAttribute("aSeed",new Qn(a,1));let c=new ln({name:"city-beacons",vertexShader:SE,fragmentShader:wE,uniforms:Ss(n,[...ws,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:ti}),u=new fl(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(hn),{points:u,count:o}}var Ud=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],AE=6,RE=`
${Es}
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
`,CE=`
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
`;function PE(){return{atlas:Ot(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),Ud.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Vt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function IE(n,e){let t=$r(53),i=[],s=n.filter(o=>{let a=vE(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*Ud.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[qe.cx-o.x,qe.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?AE:Math.floor(t()*Ud.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function LE(n,e,t){let{atlas:i,cols:s,rows:r}=PE(),o=$r(61),a=IE(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new vt(1,1),h=new ln({name:"city-signs",vertexShader:RE,fragmentShader:CE,uniforms:Ss(n,[...ws,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:ti,side:tn}),f=new Nn(d,h,l);f.name="city-signs";let p=new dn,x=new ze;return a.forEach((m,g)=>{p.position.set(m.pos[0],m.pos[1],m.pos[2]),p.rotation.set(0,0,0),p.lookAt(qe.cx,m.tilt?0:m.pos[1],qe.cz),p.scale.set(m.w,m.w/4,1),p.updateMatrix(),f.setMatrixAt(g,p.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],g*4),x.set(Ud[_][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new xi(c,4)),d.setAttribute("aTint",new xi(u,4)),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,f.layers.set(hn),{mesh:f,count:l}}var Hg={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function Gg(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Vt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Vt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Vt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Vt}`,n.fillText(Hg[i.phase]||Hg.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Tt}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Vt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let f=(c-l)/a.length;a.forEach((p,x)=>{let m=(u-d)*p/h;n.fillRect(l+x*f+2,u-m,Math.max(2,f-4),m)})}function DE(n){let i=new Array(40).fill(0),s=Ot(1024,Math.round(1024*40/96),(x,m,g)=>Gg(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new zt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new jt;o.name="city-billboard";let a=new nt(new vt(96,40),r);o.add(a);let l=new nt(new en(98,42,1.2),new zt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new zt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new nt(new en(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",f=1,p=0;return{group:o,update(x,m){p+=x,p>=1&&(p=0,i.shift(),i.push(m.tps||0)),f+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;f<1||g===h||(f=0,h=g,s.redraw((_,b,y)=>Gg(_,b,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var NE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,OE=`
${Es}
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
`;function Da(n,e,t,i=!1){return new ln({name:i?"city-glow-add":"city-glow",vertexShader:NE,fragmentShader:OE,defines:i?{ADDITIVE:""}:{},uniforms:Ss(n,ws,{uColor:{value:new ze(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?ti:$s})}var UE=`
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
`,FE=`
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
`,kE=`
${Es}
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
`,BE=`
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
`;function Wg(n,e,t=16){return new Fn(e,n,1,t,1,!0).translate(0,.5,0)}function zE(n,e,t){let i=new jt;i.name="compute-tower";let s=Da(n,4646655,4),r=Da(n,10480383,5),o=Da(n,5078015,4),a=Da(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(w,v,S,T)=>{let R=new nt(new Ti(w,v,10,160),T);return R.rotation.x=Math.PI/2,R.position.set(e.x,S,e.z),i.add(R),R};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new nt(new Fn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let f=new Ce(t.x-e.x,t.z-e.z).normalize(),p=new P(e.x+f.x*(c+2),100,e.z+f.y*(c+2)),x=new nt(new On(4,20,14),r);x.position.copy(p),i.add(x);let m=new P().subVectors(p,t),g=m.length(),_=new un().setFromUnitVectors(new P(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new ze(6282495)}};for(let[w,v,S]of[[.07,2,1],[.38,8,0]]){let T=new ln({name:S?"beam-core":"beam-glow",vertexShader:UE,fragmentShader:FE,uniforms:{...b,uCore:{value:S}},transparent:!0,depthWrite:!1,blending:ti,side:tn}),R=new nt(Wg(w,v,16),T);R.position.copy(t),R.quaternion.copy(_),R.scale.set(1,g,1),R.frustumCulled=!1,R.renderOrder=3,i.add(R)}let y=new zt({name:"beam-receiver"});y.color.setHex(6282495).multiplyScalar(4);let M=new nt(new Ti(.5,.05,8,48),y);return M.rotation.x=Math.PI/2,M.position.copy(t),i.add(M),i.traverse(w=>{w.isMesh&&w.renderOrder===0&&(w.renderOrder=5)}),{group:i,setLook(w){s.uniforms.uGain.value=4*(.35+.65*w.neon),r.uniforms.uGain.value=5*(.4+.6*w.neon),o.uniforms.uGain.value=4*(.35+.65*w.neon),a.uniforms.uColor.value.set(w.body)},update(w,v,S){b.uIntensity.value=Math.max(.08,v)*S,x.scale.setScalar(.6+v*.8),M.scale.setScalar(.8+v*.6+Math.sin(w*6)*.05*v),d.rotation.z=w*.12},glows:l}}function HE(n,e){let t=new jt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new ze(8378623)}};for(let[h,f]of[[5,1],[20,0]]){let p=new ln({name:f?"tether-core":"tether-glow",vertexShader:kE,fragmentShader:BE,uniforms:Ss(n,ws,{...r,uCore:{value:f}}),transparent:!0,depthWrite:!1,blending:ti,side:tn}),x=new nt(Wg(1,1,14),p);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new nt(new Ti(a,1.6,8,192),Da(n,4646655,3.2,!0)),c=new nt(new Ti(a*.8,1.1,8,160),Da(n,5078015,3,!0)),u=new jt,d=new jt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function Xg({quality:n="high",beamTarget:e=new P(-8,3,-.7)}={}){let t=new jt;t.name="city";let i=Ug(),s=ME(),r=s.towers.filter(T=>T.mega).map(T=>({x:T.x,z:T.z,rad:Math.max(T.w,T.d)*.75+30})),o=_E(n,r),a=bE(o),l=Ss(i,[...ws,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new ze(725538)},uGlass:{value:new ze(462106)}}),c=new ln({name:"city-towers",vertexShader:xE,fragmentShader:yE,uniforms:l}),u=zg(o.concat(a),c,"city-towers");u.layers.set(hn);let d=zg(s.towers,c,"city-megatowers"),h=TE(i,o,a,s),f=Fg(i,{quality:n}),p=kg(i),x=Bg(i,{quality:n}),m=LE(i,o,s),g=DE(s.billboard),_=zE(i,s.compute,e),b=HE(i,s);t.add(f.mesh,p.mesh,u,d,h.points,x.mesh,m.mesh,g.group,_.group,b.group);let y=0,M=0,w=0,v=1,S=1;return{root:t,update(T,R,D={}){let k=st(D.activity||0,0,1);y+=(k-y)*Math.min(1,T*1.5);let H=.5+1.5*y;M=(M+T*H)%Ng,w=(w+T*H)%(2*Zl),i.uTime.value=R,i.uTravel.value=M,i.uAir.value=w,i.uDensity.value=(.3+.7*y)*v,_.update(R,y,S),b.update(R),g.update(T,D)},setLook(T){let R=T.city;i.uHaze.value.set(R.haze),i.uHazeHigh.value.set(R.hazeHigh),i.uHazeDensity.value=R.hazeDensity,i.uSkyRefl.value.set(R.skyRefl),i.uWindows.value=R.windows,i.uNeon.value=R.neon,i.uLights.value=R.lights,i.uBeacons.value=R.beacons,i.uTraffic.value=R.traffic,i.uSunK.value=R.sunK,i.uSunDir.value.fromArray(T.sun.dir).normalize(),i.uSunColor.value.set(T.sun.color),l.uBody.value.set(R.body),l.uGlass.value.set(R.glass),f.setLook(R),p.setLook(R),_.setLook(R),b.setLook(R),v=R.trafficScale??1,S=.45+.55*R.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var qg=724504;function ap(n,e=1){let t=new zt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var GE={low:0,medium:1024,high:2048,ultra:4096};function VE(n,e){let t=GE[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Ro=new P,Fd=new P,kd=new mr;function WE(n,e,t,i=4.6){Fd.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Fd).addScaledVector(e,60),n.target.position.copy(Fd),n.updateMatrixWorld(),n.target.updateMatrixWorld(),kd.position.copy(n.position),kd.lookAt(Fd),kd.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let f of[t.z0,t.z1])Ro.set(d,h,f).applyMatrix4(kd.matrixWorldInverse),s=Math.min(s,Ro.x),r=Math.max(r,Ro.x),o=Math.min(o,Ro.y),a=Math.max(a,Ro.y),l=Math.min(l,-Ro.z),c=Math.max(c,-Ro.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function di(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Je(new vt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(hn),o}function $g(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new jt;a.name="stage";let l=Cg(i,s,{quality:t});a.add(l.dome);let c=Dg(n,{reflection:r});a.add(c.root);let u=Xg({quality:t,beamTarget:o});a.add(u.root);let d=new Ma(16777215,3);d.name="sun",a.add(d,d.target);let h=new Cl(16777215,8947848,1);h.name="sky-light";let f=new Ma(16777215,.5);f.name="fill",a.add(h,f,f.target),VE(d,t);let p=new P;function x(m){l.setLook(m),p.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,WE(d,p,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,f.color.set(m.fill.color),f.intensity=m.fill.intensity,f.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),f.target.position.set(0,0,-1),f.updateMatrixWorld(),f.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,_){c.update(m,g,_),u.update(m,g,_)},setLook:x,dispose(){l.dispose()}}}var Yg=Math.PI/180;function Kg(n,e){let t=n*Yg,i=e*Yg;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function Zg(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var Co=["dusk","day"],Yr="dusk",gn={min:.6,max:1.6,step:.05,initial:1},Jg={dusk:{id:"dusk",clear:858675,sun:{dir:Kg(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:Zg([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:Kg(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:Zg([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function lp(n){return Jg[n]||Jg[Yr]}function Jl(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Kr(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function jl({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return Ot(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,f=d%5===0,[p,x]=u(h,f?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=f?5:2,r.beginPath(),r.moveTo(p,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Vt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[f,p]=u(h/(t.length-1),136);r.fillText(d,f,p)}),r.font=`700 34px ${Vt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Vt}`,r.fillText(e,a,a+130)})}function cp(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(Dt*e)));return Ot(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Tt}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function qi(n,e,t,i="#4d6bfe"){return Ot(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,Jl(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,Jl(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Tt}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Kr(s,n,r-170,46,700,Vt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Kr(s,e.toUpperCase(),r-170,24,600,Vt),s.fillText(e.toUpperCase(),152,100)})}function Bd(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return Ot(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Kr(o,n,t-20,Math.round(i*.42),700,Vt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Kr(o,e,t-20,Math.round(i*.26),600,Vt),o.fillText(e,12,i*.76))})}function zd(n,e,{bg:t="#05070a",glow:i=0}={}){let s=Ot(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Tt:Vt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Kr(a,c.text,n-32,u,c.weight||600,c.mono?Tt:Vt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function jg(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=Ot(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Tt}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function Qg(){return Ot(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Vt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function ex(){return Ot(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Vt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var vn=new P(-8,0,-.7),Po=.41,tx=1.9,up=1.86;function XE(){return Ot(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function nx(n){let e=Ct("fuel"),t=Ct("tank",[vn.x,0,vn.z]);t.userData.solid="tank",e.add(t),e.add(di(n,2.6,2.6,[vn.x,0,vn.z],.6));let i=new ct;i.add("graphite",L(Le(1.8,.28,1.8,.05),[0,.2,0]));for(let[k,H]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",L(ae(.07,.08,.06,20),[k,.03,H]));for(let k of[.375,2.345])i.add("steel",L(ae(.83,.83,.07,72),[0,k,0])),i.add("chrome",La(18,.775,k+(k<1?.04:-.04),.017,.016)),i.add("rubber",L(ae(.712,.712,.03,64),[0,k+(k<1?.05:-.05),0]));i.add("alu",ci([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let k=0;k<6;k++){let H=k/6*Dt+.26,N=Math.cos(H)*.79,q=Math.sin(H)*.79;i.add("chrome",L(ae(.016,.016,2.04,12),[N,1.36,q]));for(let te of[.33,2.4])i.add("steel",L(ae(.03,.03,.03,6),[N,te,q]))}i.add("steel",L(ae(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",L(ae(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",L(Le(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",L(ae(.07,.08,.05,24),[0,2.695,0])),i.add("steel",L(ae(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",L(ae(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",L(Le(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Je(ae(.7,.7,tx,72,!0),n.glass,[0,Po+tx/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Je(ae(.685,.685,1,72),n.fuel,[0,Po+.5,0],null,null,{cast:!1}),o=Je(new En(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Je(Yt(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Nn(new On(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(k,H)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Dt,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Dt+H}));t.add(c);let d=Je(new vt(.085,up),kn(Qg().tex,.1),[0,Po+.02+up/2,.892],null,null,{cast:!1}),h=Je(new Ws(.02,.05,3),Qt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let f=Qt(4054148,2.5),p=Je(new On(.07,24,12,0,Dt,0,Math.PI/2),f,[0,2.72,0],null,null,{cast:!1});t.add(p);let x=Ct("fuel-hmi",[vn.x+.95,0,vn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new ct;m.add("graphite",L(Le(.36,.04,.3,.015),[0,.02,0])),m.add("alu",L(ae(.035,.035,.95,16),[0,.5,0])),m.add("graphite",L(Le(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=zd(640,384,{bg:"#04070c"}),_=Je(new vt(.66,.396),$l(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(_),e.add(x),e.add(di(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new ct,y=(k,H)=>new P(k,H,vn.z);b.add("steel",ui([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),b.add("steel",ui([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),b.add("steel",L(ae(.1,.1,.025,24),[-6.93,.375,vn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(k=>L(ae(.012,.012,.09,6),[-6.925,.375+Math.cos(k)*.075,vn.z+Math.sin(k)*.075],[0,0,Math.PI/2]))),b.add("blue",L(ae(.085,.085,.18,24),[-6.6,.375,vn.z],[0,0,Math.PI/2])),b.add("chrome",L(ae(.022,.022,.26,12),[-6.6,.52,vn.z])),b.add("steel",L(ae(.045,.05,.1,16),[-6.6,.47,vn.z])),b.add("orange",L(Yt(.11,.012,8,40),[-6.6,.64,vn.z],[Math.PI/2,0,0]));for(let k=0;k<3;k++)b.add("orange",L(new en(.21,.014,.014),[-6.6,.64,vn.z],[0,k/3*Math.PI,0]));for(let k of[.945,1.355])b.add("alu",L(ae(.085,.085,.05,32),[-6.05,k,vn.z]));b.add("chrome",...[0,1,2,3].map(k=>L(ae(.008,.008,.41,6),[-6.05+Math.cos(k*1.5708+.78)*.078,1.15,vn.z+Math.sin(k*1.5708+.78)*.078])));for(let k of[-6.8,-6.25])b.add("graphite",L(Le(.12,.33,.16,.015),[k,.165,vn.z]));b.add("steel",L(Le(.22,.09,.22,.02),[-4.75,2.1,vn.z])),b.add("chrome",La(4,.12,2.15,.012,.012,.78).map(k=>k.translate(-4.75,0,vn.z))),e.add(b.build(n,{name:"feed"}));let M=Je(ae(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,vn.z],null,null,{cast:!1,receive:!1}),w=XE().tex,v=new Mt({color:330264,emissive:16777215,emissiveMap:w,emissiveIntensity:1.8,roughness:.3}),S=Je(ae(.034,.034,.36,24,!0),v,[-6.05,1.15,vn.z],null,null,{cast:!1});e.add(M,S);let T=.5,R="",D=new dn;return{root:e,anchors:{tank:new P(vn.x,2.9,vn.z),hmi:new P(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(k){let H=JSON.stringify(k);H!==R&&(R=H,g.set(k))},update(k,H,N){T=$t(T,st(N.level,.02,1),2.5,k);let q=T*up;r.scale.y=q,r.position.y=Po+.012+q/2,o.position.y=a.position.y=Po+.012+q+.001,h.position.y=Po+.02+q;let te=st(N.flow,0,1);for(let Q=0;Q<l;Q++){let ee=u[Q];ee.y+=k*(.05+te*.32)*ee.v/Math.max(.25,q),ee.y>1&&(ee.y=0,ee.a=Math.random()*Dt,ee.r=Math.sqrt(Math.random())*.6);let W=Math.sin(H*3+ee.w)*.01;D.position.set(Math.cos(ee.a)*ee.r+W,Po+.03+ee.y*Math.max(0,q-.04),Math.sin(ee.a)*ee.r),D.scale.setScalar(ee.s*(.3+.7*Math.min(1,(q-ee.y*q)*10+.3))),D.updateMatrix(),c.setMatrixAt(Q,D.matrix)}c.instanceMatrix.needsUpdate=!0,w.offset.y-=k*(.15+te*2.6),v.emissiveIntensity=.5+te*2.2,f.emissive.setHex(N.peak?16753978:4054148),f.emissiveIntensity=1.6+Math.sin(H*2.2)*.6}}}var Hd=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],vi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},Kt={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},Na=new Set(["engraver","labeler"]),qE=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function sx(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of qE)if(i.test(e))return t;return"generic"}function Gd(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function hp(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function Ql(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function ec(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=ec(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function rx(n,e){let t=Gd(e),i=ec(t,["file_path","path","filePath","files"]);if(i)return Ql(hp(i)||i);let s=ec(t,["command","cmd","script","code"]);if(s)return Ql(s.split(`
`).find(a=>a.trim())||s);let r=ec(t,["url"]);if(r)try{return Ql(new URL(r).host||r)}catch{return Ql(r)}let o=ec(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?Ql(o):""}function dp(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function ix(n,e){let t=dp(n),i=dp(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function ox(n,e){let t=String(n||"").toLowerCase(),i=Gd(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:dp(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=ix(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=ix(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var Zr=new P(-4,0,-.7),Oa=new P(-2.08,0,1.54),ax=1.45;function lx(n,e,t,i,s,r=.02,o=0){let a=new xs,l=(u,d,h,f,p,x)=>{u.moveTo(d+x,h),u.lineTo(d+f-x,h),u.quadraticCurveTo(d+f,h,d+f,h+x),u.lineTo(d+f,h+p-x),u.quadraticCurveTo(d+f,h+p,d+f-x,h+p),u.lineTo(d+x,h+p),u.quadraticCurveTo(d,h+p,d,h+p-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new fr;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new Xs(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function cx(n,e,{x:t,y:i,r:s,face:r}){let o=new ct;o.add("chrome",L(Yt(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",L(ae(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new Mt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Je(new En(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=Ct("needle",[t,i,.02]),c=new ct;return c.add("orange",new en(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new en(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",ae(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Je(new En(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function ux(n){let e=Ct("engine"),t=Ct("engine-body",[Zr.x,0,Zr.z]);t.userData.solid="engine",e.add(t),e.add(di(n,4.8,2.7,[Zr.x+.35,0,Zr.z],.62));let i=new ct;i.add("graphite",L(Le(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",L(Le(3.94,.04,1.94,.015),[.35,.44,0]));for(let se of[-1.45,2.15])for(let Re of[-.8,.8])i.add("rubber",L(ae(.08,.09,.06,20),[se,.03,Re]));for(let se of[-.72,.62])i.add("graphite",L(Le(.22,.56,1,.03),[se,.72,0])),i.add("steel",L(Le(.26,.04,1.04,.01),[se,.47,0])),i.add("chrome",...[-.4,.4].map(Re=>L(ae(.02,.02,.03,6),[se,.5,Re])));i.add("graphite",L(Le(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let se of[1.435,2.165])i.add("graphite",L(Le(.07,1.62,.82,.02),[se,1.24,-.1]));for(let se of[.46,2.02])i.add("graphite",L(Le(.78,.06,.82,.02),[1.8,se,-.1]));i.add("aluDark",lx(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",L(new vt(.5,.18),[1.8,.6,.335])),i.add("chrome",L(ae(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",L(ae(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",L(ae(.05,.065,.12,20),[.8,2.12,0]));for(let se=0;se<4;se++)i.add("chrome",L(Yt(.034,.007,8,24),[.8,2.2+se*.03,0],[Math.PI/2,0,0]));i.add("orange",L(ae(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",L(ae(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",L(ae(.05,.056,.03,20),[2,2.73,-.36]));for(let se of[.12,.28])i.add("rubber",ui([[se,.95,.42],[se,.62,.86],[se,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=Ct("turbine",[0,ax,0],[0,0,-Math.PI/2]);t.add(s);let r=new ct;r.add("alu",ci([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",L(ae(.6,.6,.56,64),[0,-.72,0]));for(let se=0;se<9;se++)r.add("alu",L(ae(.665,.665,.022,64),[0,-.97+se*.06,0]));r.add("steel",L(ae(.69,.69,.05,72),[0,-.445,0])),r.add("steel",L(ae(.69,.69,.05,72),[0,.405,0])),r.add("chrome",La(20,.66,-.413,.016,.014)),r.add("chrome",La(20,.66,.373,.016,.014,.157)),r.add("alu",L(ae(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",ci([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",L(ae(.06,.06,.26,24),[0,1.33,0])),r.add("grille",L(ae(.6,.6,.012,64),[0,-1.2,0]));for(let se of[.22,.37,.52])r.add("chrome",L(Yt(se,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let se=0;se<6;se++)r.add("chrome",L(new en(1.18,.012,.028),[0,-1.205,0],[0,se/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=Ct("rotor"),a=new ct;a.add("darkSteel",L(ae(.24,.24,.8,48),[0,-.02,0]));for(let[se,Re,F,oe]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let fe=0;fe<se;fe++){let U=Le(.32,oe,.014,.004,1);U.rotateX(F),U.translate(.41,Re,0),U.rotateY(fe/se*Dt),a.add("chrome",U)}a.add("chrome",ci([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=Qt(5078015,1),c=[-.33,-.02,.29].map(se=>L(ae(.247,.247,.026,48,!0),[0,se,0])),u=new ct().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Je(ae(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=qi(Kt.engine.zh,Kt.engine.en,Kt.engine.code);t.add(Je(new vt(.5,.14),kn(h.tex,.35),[.76,ax+.05,.628],null,null,{cast:!1}));let f=Je(Yf(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),p=Je(Yf(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*ss,m=-4*ss;t.add(f,p),t.add(Je(new vt(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let _=[16726832,16753183,3461498,5078015].map((se,Re)=>{let F=Qt(se,.15);return t.add(Je(ae(.055,.055,.085,24),F,[2,2.66-Re*.09,-.36],null,null,{cast:!1})),F}),b=Ct("console",[-.35,0,1.22]);t.add(b);let y=new ct;y.add("graphite",L(Le(2.2,.82,.46,.03),[0,.41,0])),y.add("rubber",L(Le(2.16,.06,.4,.02),[0,.03,.01])),b.add(y.build(n,{name:"console"}));let M=qi(Kt.console.zh,Kt.console.en,Kt.console.code);b.add(Je(new vt(.72,.2),kn(M.tex,.35),[0,.6,.232],null,null,{cast:!1}));let w=Ct("panel",[0,.98,.02],[-.62,0,0]);b.add(w);let v=new ct;v.add("aluDark",L(Le(2.24,.62,.06,.02),[0,0,-.03])),v.add("graphite",lx(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),w.add(v.build(n,{name:"panel"}));let S=cx(n,w,{x:-.74,y:0,r:.205,face:jl({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),T=cx(n,w,{x:.86,y:.08,r:.13,face:jl({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),R=.028,D=.04,k=ae(R,R,D,24).rotateZ(-Math.PI/2),H=cp(D,R),N=cp(D,R,{inverted:!0}),q=se=>new Mt({map:se.tex,emissive:16777215,emissiveMap:se.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),te=[.19,.095,0,-.095,-.19],Q=[],ee=new Nn(k,q(H),36),W=new Nn(k,q(N),2);ee.castShadow=W.castShadow=!1;let K=0;for(let se=0;se<4;se++)for(let Re=0;Re<8;Re++)Q.push({inst:ee,index:K++,x:.16+.163-Re*.044,y:te[se],row:se,power:Re});for(let se=0;se<6;se++){let Re=se<2;Q.push({inst:Re?W:ee,index:Re?se:K++,x:.16+.163-se*.044-(Re?0:.03),y:te[4],row:4,power:se})}w.add(ee,W),w.add(Je(new En(.006,12),Qt(15855592,.6),[.16+.163-2*.044+.022-.015,te[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([se,Re],F)=>{let oe=Bd(se,Re,{w:256,h:80}).tex;w.add(Je(new vt(.2,.0625),kn(oe,.2),[.16-.29,te[F],.012],null,null,{cast:!1}))}),w.add(Je(new vt(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let ce=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([se,Re],F)=>{let oe=.66+F*.13,fe=new ct().add("chrome",L(ae(.032,.032,.014,24),[oe,-.17,.007],[Math.PI/2,0,0]));w.add(fe.build(n,{name:"lamp",castShadow:!1}));let U=Qt(Re,.15);w.add(Je(new On(.024,20,10,0,Dt,0,Math.PI/2),U,[oe,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Ke=Bd(se,"",{w:128,h:48}).tex;return w.add(Je(new vt(.1,.0375),kn(Ke,.2),[oe,-.235,.004],null,null,{cast:!1})),U}),Z=[];for(let se=0;se<24;se++){let Re=new Vs({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),F=new ur(Re);F.visible=!1,t.add(F),Z.push({sp:F,mat:Re,life:0,vx:0,vz:0})}let ge=0,Me=Ct("dispenser",[Oa.x,0,Oa.z]);Me.userData.solid="dispenser",e.add(Me);let ne=new ct;ne.add("white",L(Le(.5,1.2,.56,.03),[0,.6,0])),ne.add("plastic",L(Ae(.02,.05,.36),[.252,.922,0])),ne.add("aluDark",L(Le(.54,.05,.6,.015),[0,1.225,0])),ne.add("grille",L(new vt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),Me.add(ne.build(n,{name:"dispenser"}));let ye=Bd(Kt.dispenser.zh,`${Kt.dispenser.en} · ${Kt.dispenser.code}`.toUpperCase(),{w:256,h:80});Me.add(Je(new vt(.34,.106),kn(ye.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let De=Qt(5078015,.3);Me.add(Je(new en(.012,.012,.3),De,[.256,.97,0],null,null,{cast:!1})),e.add(di(n,.9,.9,[Oa.x,0,Oa.z],.5));let tt=new ct().add("rubber",ui([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(tt.build(n,{name:"conduit"}));let Be=new zt({visible:!1}),je=(se,Re,F,oe)=>{let fe=new nt(new en(Re[0],Re[1],Re[2]),Be);return fe.position.set(F[0],F[1],F[2]),fe.userData.hoverId=se,oe.add(fe),{id:se,object:fe}},Ge={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},xe=new bt,G=new Float32Array(8),z=new ze,re={reasoning:new ze(10185727),generating:new ze(4160511),tool:new ze(16753183),idle:new ze(2838456)};function J(se,Re,F){let oe=Math.max(0,Re);for(let fe=0;fe<F;fe++){let U=Math.pow(10,fe),Ke=Math.floor(oe/U)%10,ut=oe%U,gt=0;fe===0?gt=oe-Math.floor(oe):ut>U-1&&(gt=ut-(U-1)),G[fe]=-((Ke+gt+.5)/10)*Dt}for(let fe of Q)fe.row===se&&(xe.makeRotationX(G[fe.power]),xe.setPosition(fe.x,fe.y,.03),fe.inst.setMatrixAt(fe.index,xe))}return{root:e,anchors:{engine:new P(Zr.x,2.5,Zr.z),console:new P(Zr.x-.35,1.45,Zr.z+1.22),dispenser:new P(Oa.x,1.45,Oa.z)},hover:[je("engine",[3.2,1.7,1.5],[.2,1.45,0],t),je("console",[2.3,1.35,.8],[-.35,.68,1.22],t),je("dispenser",[.6,1.3,.62],[0,.65,0],Me)],pulseDispenser(){Ge.dispPulse=1},update(se,Re,F){let oe=F.phase,fe=oe==="generating"||oe==="reasoning",U=.35+st(F.tps,0,140)*.16+(oe==="thinking"?.8:0);Ge.rotorSpeed=$t(Ge.rotorSpeed,U,1.4,se),Ge.rotorAngle+=Ge.rotorSpeed*se,o.rotation.y=Ge.rotorAngle,f.rotation.z=x+Ge.rotorAngle*.45,p.rotation.z=m-Ge.rotorAngle*.9;let Ke=re[oe]||re.idle;z.copy(l.emissive).lerp(Ke,1-Math.exp(-4*se)),l.emissive.copy(z);let ut=.85+.15*Math.sin(Re*9),gt=fe?(2.4+st(F.tps,0,120)/30)*ut:oe==="tool"?.9:oe==="thinking"?1.3:.45;l.emissiveIntensity=$t(l.emissiveIntensity,gt,5,se),Ge.ctx=$t(Ge.ctx,st(F.ctx,0,1),2.5,se);let Pe=fe?Math.sin(Re*41)*.006:0;S.rotation.z=(135-270*Ge.ctx)*ss+Pe,Ge.tach=$t(Ge.tach,st(F.tps/120,0,1),3,se),T.rotation.z=(135-270*Ge.tach)*ss+Pe*2;let A=[F.counters.miss,F.counters.hit,F.counters.output,F.counters.reasoning,F.counters.cost*100];for(let V=0;V<5;V++){let pe=A[V]||0,me=Ge.disp[V];pe<me||pe-me<.02?me=pe:me=$t(me,pe,3.2,se),Ge.disp[V]=me,J(V,me,V===4?6:8)}ee.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0;let Y=[oe==="reasoning"||oe==="thinking",oe==="generating",oe==="tool",oe==="idle"];ce.forEach((V,pe)=>{V.emissiveIntensity=$t(V.emissiveIntensity,Y[pe]?3.2:.12,10,se)}),Ge.err=Math.max(0,Ge.err-se*.5),F.errorPulse&&(Ge.err=1);let he=Math.sin(Re*12)>0?1:.2,I=[Ge.err>0?3.5*he:.1,oe==="tool"?3:.1,fe||oe==="thinking"?3:.6,oe==="reasoning"?3:.1];_.forEach((V,pe)=>{V.emissiveIntensity=$t(V.emissiveIntensity,I[pe],12,se)}),Ge.dispPulse=Math.max(0,Ge.dispPulse-se*2.5),De.emissiveIntensity=.3+Ge.dispPulse*4;let E=st((Ge.ctx-.78)/.22,0,1);ge+=se*E*18;for(let V of Z)if(V.life<=0&&ge>=1&&(ge-=1,V.life=1,V.vx=(Math.random()-.5)*.15,V.vz=(Math.random()-.5)*.15,V.sp.position.set(.8,2.36,0),V.sp.visible=!0),V.life>0){V.life-=se/1.7;let pe=1-V.life;V.sp.position.x+=V.vx*se,V.sp.position.z+=V.vz*se,V.sp.position.y+=se*(.55-pe*.25),V.sp.scale.setScalar(.08+pe*.55),V.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,pe*1.2))*.32),V.life<=0&&(V.sp.visible=!1)}ge>4&&(ge=4)}}}var As=new P(2.6,0,-1),Jr=3.1,Rs=2.35,Do=.75,Ln=.922,tc=.012,Io=1,Ua=1,dx=.4,Lo=235*ss,Fa=305*ss,Ts=1.54;function Oi(n,e,t=0,i=new P){return i.set(As.x+e*Math.cos(n),t,As.z-e*Math.sin(n))}var xx=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Vd(n){let e=Ct("pedestal"),t=new ct;t.add("graphite",L(ae(.15,.17,.04,40),[0,.02,0])),t.add("alu",L(ae(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",L(ae(.12,.1,.03,48),[0,.835,0])),t.add("chrome",L(Yt(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Dt+.3;t.add("ceramic",L(ae(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=Qt(5078015,.25);return e.add(Je(Yt(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var $n={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},hx={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},fx={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function yx(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function $E(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=yx(n,o,a),u=Math.PI/2-l,d=new xs;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new Xs(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function px(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=yx(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return L(Ae(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function YE(){let n=new xs,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new Xs(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,$n.forkY+.002,0),t}function KE(){let n=Ot(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new Mt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function ZE(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function JE(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function jE(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function QE(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),jE(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Vt}`,n.fillStyle="#86a7c9",n.fillText(`${Kt.robot.code} · ${Kt.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${Tt}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Vt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${Tt}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${Tt}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Dt),n.fill(),n.font=`600 23px ${Vt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function e2(n){let e=Ct("robot",[As.x,0,As.z]),t=Qt(4641535,2.2),i=Qt(4641535,1.8),s=Qt(5078015,1.4),r={...n,carbon:KE(),led:t},o=new ct;o.add("white",ci([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",L(ae(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",L(ae(1.15,1.15,$n.deckY-.4,112),[0,(.4+$n.deckY)/2,0])),o.add("plastic",L(ae(.62,.62,.006,72),[0,$n.deckY+.003,0])),o.add("chrome",L(Yt(.62,.005,8,112),[0,$n.deckY+.003,0],[Math.PI/2,0,0]));for(let W=0;W<12;W++){let K=W/12*Dt+.13;o.add("chrome",L(ae(.016,.016,.006,10),[Math.cos(K)*.92,$n.deckY+.003,Math.sin(K)*.92]))}let a=$n.drumTop-$n.deckY;o.add("white",L(ae(.34,.37,a,72),[0,$n.deckY+a/2,0])),o.add("chrome",L(Yt(.342,.006,8,72),[0,$n.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",ui([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new ct;l.add("led",L(Yt(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",L(ae(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Je(Yt(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=Ot(1024,48,JE,{anisotropy:8}),u=new zt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Je(ae(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=Ms({color:726566,opacity:.4,fresnel:.55}),f=Je(ae(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});f.renderOrder=2,e.add(d,f);let p=Ot(512,176,null,{anisotropy:8}),x=new zt({map:p.tex,transparent:!0,depthWrite:!1,side:tn,name:"robot-holo"});x.color.setScalar(1.25);let m=Je(new vt(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=Ct("arm");e.add(g),g.add(new ct().add("steel",L(ae(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let _=Ot(512,64,ZE,{anisotropy:8,repeat:[1,1]}),b=W=>new Mt({map:W,emissiveMap:W,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=_.tex,M=_.tex.clone();function w(W,K,O,$){let ce=Ct(W),Z=K.y+K.h,ge=new ct;ge.add("white",$E(O,K.r1,K.r2,K.y,K.h,K.bevel)),ge.add("chrome",L(Le(.66,.004,K.r2*.95,.002),[.5,Z+.0015,0]));for(let ye of[-1,1])ge.add("graphite",px(.66,.026,.004,O/2,K.y+K.h/2,K,O,ye,5e-4));$(ge,Z),ce.add(ge.build(r,{name:W}));let Me=new vt(.62,K.r2*.95-.022);Me.rotateX(-Math.PI/2),ce.add(Je(Me,b(K===$n.link1?y:M),[.5,Z+.004,0],null,null,{cast:!1}));let ne=new ct;for(let ye of[-1,1])ne.add("led",px(.6,.009,.005,O/2,K.y+K.h/2,K,O,ye,.0022));return ce.add(ne.build({led:i},{name:`${W}-strips`,castShadow:!1})),ce}let v=$n.link1,S=w("link1",v,Io,(W,K)=>{W.add("alu",L(ae(.118,.124,.012,56),[0,K+.006,0])),W.add("chrome",L(ae(.034,.034,.008,24),[0,K+.016,0])),W.add("alu",L(ae(.1,.104,.012,56),[Io,K+.006,0])),W.add("graphite",L(ae(.11,.11,.01,48),[Io,v.y-.005,0])),W.add("led",L(Yt(.127,.0045,6,72),[0,K+.003,0],[Math.PI/2,0,0])),W.add("led",L(Yt(.107,.004,6,64),[Io,K+.003,0],[Math.PI/2,0,0]))});g.add(S);let T=$n.link2,R=w("link2",T,Ua,(W,K)=>{W.add("alu",L(ae(.086,.09,.01,48),[0,K+.005,0])),W.add("chrome",L(ae(.028,.028,.007,20),[0,K+.0135,0])),W.add("white",L(ae(.07,.078,$n.forkY-.01-K,48),[Ua,(K+$n.forkY-.01)/2,0])),W.add("led",L(Yt(.093,.0035,6,56),[0,K+.003,0],[Math.PI/2,0,0])),W.add("led",L(Yt(.079,.0035,6,56),[Ua,K+.012,0],[Math.PI/2,0,0]))});R.position.x=Io,S.add(R);let D=Ct("fork",[Ua,0,0]);R.add(D);let k=new ct;k.add("alu",L(ae(.064,.064,.01,48),[0,$n.forkY-.005,0])),k.add("carbon",YE()),k.add("graphite",L(Le(.06,.016,.07,.005),[.07,$n.forkY+.02,0]));for(let W of[.31,.5])for(let K of[-.075,.075])k.add("rubber",L(ae(.011,.011,.002,14),[W,$n.forkY+.013,K]));D.add(k.build(r,{name:"fork",castShadow:!0}));let H=Qt(4641535,.8);D.add(Je(Ae(.004,.006,.044),H,[.1015,$n.forkY+.02,0],null,null,{cast:!1}));let N={yaw:270*ss,reach:Do,lift:0},q=new P;function te(){let W=st(N.reach-dx,.02,Io+Ua-1e-4),K=Math.acos(W/(Io+Ua));S.rotation.y=N.yaw+K,R.rotation.y=-2*K,D.rotation.y=K,g.position.y=N.lift,d.rotation.y=S.rotation.y,y.offset.x=-2*K*.08,M.offset.x=K*.065}te();let Q="";function ee(W="idle",K=null,O=null,$=null){let ce=`${W}|${K}|${O}|${$}`;if(ce===Q)return;Q=ce;let Z=hx[W]||hx.idle,ge=$?fx[$]||fx.normal:null,Me=ge&&ge.color?ge.color:Z.color;i.color.setHex(Me).multiplyScalar(.25),i.emissive.setHex(Me),p.redraw((ne,ye,De)=>QE(ne,ye,De,{st:Z,carry:ge,from:K,to:O}))}return ee(),{root:e,pose:N,setPose(W,K,O){N.yaw=W,N.reach=K,N.lift=O,te()},carryPoint(W=q){return e.updateMatrixWorld(!0),W.set(dx,0,0),D.localToWorld(W),W.y=.921+N.lift,W},setBusy(W){H.emissiveIntensity=W?3:.8,s.emissiveIntensity=W?2.4:1.4,i.emissiveIntensity=W?2.6:1.8},setStatus:ee,parts:{arm:g,link1:S,link2:R,fork:D},hover:{id:"robot",object:e}}}function mx(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Ct(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new ct;l.add("white",L(Le(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",L(Le(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",L(Le(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",L(Ae(.04,.3,.04),[m,1,g]));l.add("aluDark",L(Ae(.84,.03,.04),[0,1.15,.4]),L(Ae(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",L(Ae(.04,.03,.84),[.4,1.15,0]),L(Ae(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",L(ae(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Dt;l.add("ceramic",L(ae(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",L(Ae(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",L(Ae(.5,.2,.05),[o,.95,-.42])),l.add("steel",L(ae(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",L(ae(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[L(new vt(.76,.27),[0,1,.4]),L(new vt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),L(new vt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new ct().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Je(Le(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Je(Le(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let f=qi(i,s,r);a.add(Je(new vt(.56,.158),kn(f.tex,.35),[0,.62,.402],null,null,{cast:!1}));let p=Qt(3461498,.6);a.add(Je(Ae(.6,.016,.01),p,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:p,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function gx(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",L(Le(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",L(Ae(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Ae(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),f=t.x+r*h,p=t.z+o*h;e.add("aluDark",L(Ae(.05,.84,.05),[f,.43,p],[0,l,0])),e.add("graphite",L(Ae(.16,.02,.16),[f,.01,p],[0,l,0]))}return{len:a,yaw:l,mid:c}}function vx(n){let e=Ct("cell"),t=e2(n);e.add(t.root),e.add(di(n,2.9,2.9,[As.x,0,As.z],.6));let i=Oi(Lo,Jr),s=Oi(Fa,Jr),r=mx(n,{center:i,side:-1,...Kt.lock,hubDoorX:.18}),o=mx(n,{center:s,side:1,...Kt.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(di(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(di(n,1.3,1.3,[s.x,0,s.z],.5));let a=Oi(Lo,Rs,Ln),l=Oi(Fa,Rs,Ln),c=Vd(n);c.root.position.set(a.x,0,a.z);let u=Vd(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new ct,h=new P(-1.83,0,Ts),f=new P(i.x-.42,0,Ts),p=new P(s.x+.42,0,Ts),x=new P(7.18,0,Ts);gx(n,d,h,f),gx(n,d,p,x);let m=(M,w)=>{let v=w.x-M.x,S=w.z-M.z,T=Math.hypot(v,S);d.add("aluDark",L(Le(T,.02,.2,.006),[(M.x+w.x)/2,.892,(M.z+w.z)/2],[0,Math.atan2(-S,v),0]))};m(new P(i.x+.18,0,i.z-.44),new P(a.x-.06,0,a.z+.1)),m(new P(s.x-.18,0,s.z-.44),new P(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=Qt(5078015,1.2),_=[];for(let[M,w]of[[h,f],[p,x]]){let v=w.x-M.x;_.push(L(Ae(v,.008,.008),[(M.x+w.x)/2,.858,Ts+.185]))}e.add(new ct().add("led",_).build({led:g},{name:"track-led",castShadow:!1})),e.add(di(n,f.x-h.x+.4,.7,[(h.x+f.x)/2,0,Ts],.4)),e.add(di(n,x.x-p.x+.4,.7,[(p.x+x.x)/2,0,Ts],.4));let b=new zt({visible:!1}),y=(M,w)=>{let v=new nt(new en(.9,1.25,.9),b);return v.position.set(w.x,.62,w.z),v.userData.hoverId=M,e.add(v),{id:M,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new P(-1.95,Ln,Ts),lockCenter:new P(i.x,Ln,i.z),lockPort:a,outPort:l,outCenter:new P(s.x,Ln,s.z),trackEnd:new P(x.x-.08,Ln,Ts)},trackLed:g,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new P(As.x,1.4,As.z),lock:new P(i.x,1.45,i.z),unload:new P(s.x,1.45,s.z)}}}var mp=n=>(200-n*24.4)*ss,sn=Jr-Rs,mt=.89,t2={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},n2={archive:[.46,.17],press:[-.44,.17]},nc=(n,e=.6)=>new zt({color:n,transparent:!0,opacity:e,blending:ti,depthWrite:!1});function i2(n,e,t,i=8){let s=new P(n[0],n[1],n[2]),r=new P(e[0],e[1],e[2]),o=ae(t,t,s.distanceTo(r),i);return o.applyQuaternion(new un().setFromUnitVectors(new P(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function gp(n,e=1.36){n.add("aluDark",L(Ae(.06,e,.07),[.4,e/2,sn])),n.add("graphite",L(Ae(.16,.03,.16),[.4,.015,sn])),n.add("aluDark",L(Ae(.48,.06,.08),[.16,e,sn])),n.add("chrome",L(Ae(.4,.01,.01),[.17,e-.035,sn+.03]))}function s2(){return Ot(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Tt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function r2(){return Ot(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function o2(n,e,t){t.add("graphite",L(Le(.88,.8,.42,.02),[0,mt+.4,-.33])),t.add("aluDark",L(Le(.9,.03,.44,.01),[0,mt+.815,-.33]));let i=s2().tex,s=new Nn(Le(.26,.17,.3,.008),new Mt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:mt+.13+x*.19,out:0,until:0});t.add("aluDark",L(Ae(.06,.46,.06),[0,mt+.23,.16])),t.add("aluDark",L(Ae(.07,.06,.88),[0,mt+.46,.56]));let o=Ct("scan-head",[0,mt+.4,sn]);e.add(o),o.add(new ct().add("graphite",L(Le(.38,.07,.09,.012),[0,-.035,0])).add("chrome",L(Ae(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=Qt(7314431,.6);o.add(Je(Ae(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=mt+.4-.075-(Ln+.004),c=nc(6130687,0),u=Je(new vt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=nc(10469631,0),h=Je(Ae(.3,.001,.008),d,[0,Ln+.006-(mt+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let f=new bt,p=0;return{update(x,m,g){let _=g.work;if(o.position.z=sn+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,g.working&&m>p){p=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let y=r[b];y.out=$t(y.out,m<y.until?.16:0,9,x),f.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(b,f)}s.instanceMatrix.needsUpdate=!0}}}function a2(n,e,t,i){t.add("graphite",L(Le(.8,.34,.44,.02),[0,mt+.17,-.32]));for(let p=0;p<9;p++)t.add("alu",L(Ae(.012,.1,.38),[-.32+p*.08,mt+.39,-.32]));t.add("rubber",ui([[.3,mt+.2,-.09],[.3,mt+.32,.12],[.37,1.5,sn-.08]],.018,.12,8));for(let p of[-.37,.37])t.add("aluDark",L(Ae(.07,1.44,.09),[p,.72,sn])),t.add("graphite",L(Ae(.16,.03,.18),[p,.015,sn]));t.add("aluDark",L(Ae(.84,.09,.11),[0,1.44,sn])),t.add("chrome",L(Ae(.76,.016,.016),[0,1.44,sn+.062])),t.add("hazard",L(Ae(.84,.02,.112),[0,1.494,sn]));let s=new pr({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:tn,depthWrite:!1});for(let p of[-.335,.335])e.add(Je(new vt(.5,.42),s,[p,1.17,sn],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Ct("laser-head",[0,1.44,sn]);e.add(r);let o=new ct;o.add("chrome",L(Le(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",L(Le(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",L(ae(.026,.02,.07,20),[0,-.24,0])),o.add("orange",L(Ae(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(Ln+.004),c=nc(12101375,0),u=Je(ae(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new ur(new Vs({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:ti,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,Ln+.008-1.44,0),r.add(d);let h=new P,f=0;return{update(p,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=sn+Math.sin(x*3.1+1)*.06*g;let _=m.working&&m.wafer?1:0;if(c.opacity=$t(c.opacity,_*(.75+.25*Math.sin(x*60)),20,p),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(f+=p*40,d.getWorldPosition(h);f>1;)f-=1,i.sparks(h,1)}}}function l2(n,e,t){t.add("ceramic",L(Le(.52,.42,.36,.03),[-.12,mt+.27,-.34])),t.add("ceramic",L(Le(.4,.32,.18,.04),[-.12,mt+.27,-.5])),t.add("graphite",L(Le(.3,.06,.24,.01),[-.12,mt+.03,-.34])),t.add("graphite",L(Le(.48,.36,.01,.02),[-.12,mt+.27,-.158]));let i=jg();e.add(Je(new vt(.4,.3),$l(i.tex,1.5),[-.12,mt+.27,-.151],null,null,{cast:!1})),t.add("plastic",L(Le(.46,.03,.16,.008),[-.1,mt+.015,.1])),e.add(Je(new vt(.44,.14),kn(r2().tex,.1),[-.1,mt+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),gp(t),t.add("steel",L(ae(.04,.04,.14,20),[0,1.26,sn]));let s=Ct("probe",[0,1.1,sn]);e.add(s),s.add(new ct().add("chrome",L(ae(.015,.015,.3,12),[0,.15,0])).add("graphite",L(ae(.13,.13,.018,48),[0,.009,0])).add("gold",L(ae(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=Qt(4063119,.2);s.add(Je(Yt(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=$t(s.position.y,c.working&&c.wafer?Ln+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function c2(n,e,t){t.add("graphite",L(ae(.13,.15,.08,40),[0,mt+.04,-.3]));let i=Ct("pan",[0,mt+.08,-.3]);e.add(i);let s=new ct;s.add("white",L(ae(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",L(Ae(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",L(Ae(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Ct("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=tn;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new ct;l.add("dish",ci(a,64)),l.add("chrome",L(Yt(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",L(ae(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Dt+Math.PI/6;l.add("aluDark",i2([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",L(new Ws(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",L(ae(.03,.03,.05,18),[0,.37,0]));let c=Ct("dish",[0,.07,0]);r.add(c),r.add(new ct().add("aluDark",L(ae(.05,.05,.08,20),[0,.03,0]),L(ae(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=Qt(10849535,.3);c.add(Je(fp(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let _=nc(10127103,0),b=Je(Yt(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:_,age:g/3}});gp(t),t.add("graphite",L(Le(.12,.08,.12,.012),[0,1.29,sn])),t.add("white",L(ae(.004,.004,.18,6),[.03,1.42,sn]));let h=Qt(10849535,.2);e.add(Je(fp(.012),h,[.03,1.515,sn],null,null,{cast:!1}));let f=0,p=0,x=0;return{update(m,g,_){_.working&&g>x&&(x=g+1.2+Math.random()*1.5,p=(Math.random()-.5)*1.6),_.working||(p=0),f=$t(f,p,1.6,m),i.rotation.y=f,r.rotation.x=-.62+Math.sin(g*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let y=b.age;b.r.position.y=.42+y*.9,b.r.scale.setScalar(1+y*6),b.mat.opacity=_.work*(1-y)*.8}}}}var fp=n=>new On(n,16,10);function u2(n,e,t){t.add("graphite",L(Le(.5,.32,.34,.02),[.18,mt+.16,-.36])),t.add("aluDark",L(Le(.12,.18,.03,.01),[-.27,mt+.2,-.36]));let i=Qt(5078015,.5);e.add(Je(Ae(.3,.02,.005),i,[.18,mt+.25,-.188],null,null,{cast:!1}));let s=[-.05,mt,.12],r=.38,o=.36,a=.1;t.add("graphite",L(ae(.09,.095,.04,32),[s[0],mt+.02,s[2]]));let l=Ct("j0",[s[0],mt+.04,s[2]]);e.add(l),l.add(new ct().add("white",L(ae(.07,.075,.13,32),[0,.065,0])).add("graphite",L(ae(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Ct("j1",[0,.16,0]);l.add(c),c.add(new ct().add("white",L(Le(.095,r,.095,.04),[0,r/2,0])).add("graphite",L(ae(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Ct("j2",[0,r,0]);c.add(u),u.add(new ct().add("white",L(Le(.078,o,.078,.035),[0,o/2,0])).add("graphite",L(ae(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Ct("j3",[0,o,0]);u.add(d),d.add(new ct().add("graphite",L(ae(.035,.035,.05,24),[0,.025,0])).add("chrome",L(ae(.03,.03,.012,24),[0,.056,0])).add("aluDark",L(Ae(.012,.045,.03),[-.02,.08,0]),L(Ae(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=Qt(5078015,.6);d.add(Je(Yt(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let f=mt+.04+.16,p=new P(0,f+.25,.25),x=new P;function m(g,_,b){let y=g-s[0],M=b-s[2];l.rotation.y=Math.atan2(y,M);let w=Math.hypot(y,M),v=_+a-f,S=st(Math.hypot(w,v),.05,r+o-.001),T=Math.atan2(w,v),R=st((S*S-r*r-o*o)/(2*r*o),-1,1),D=Math.acos(R),k=T-Math.atan2(o*Math.sin(D),r+o*Math.cos(D));c.rotation.x=k,u.rotation.x=D,d.rotation.x=Math.PI-k-D}return m(p.x,p.y,p.z),{update(g,_,b){b.working&&b.wafer?x.set(.08*Math.cos(_*1.7),Ln+.03+.06*Math.max(0,Math.sin(_*3.4)),sn-.04+.07*Math.sin(_*2.3)):b.working?x.set(.05*Math.sin(_*1.3),f+.12,sn-.3):x.set(-.05+.04*Math.sin(_*.6),f+.22,.32),p.x=$t(p.x,x.x,4,g),p.y=$t(p.y,x.y,4,g),p.z=$t(p.z,x.z,4,g),m(p.x,p.y,p.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(_*8))}}}function pp(n){return n<.22?qf(n/.22):n<.42?1:1-qf((n-.42)/.58)}function d2(n,e,t){t.add("graphite",L(Le(.6,.28,.3,.02),[.14,mt+.14,-.38])),t.add("white",L(ae(.08,.08,.3,28),[.14,mt+.36,-.38],[0,0,Math.PI/2])),t.add("steel",L(ae(.06,.06,.24,24),[-.3,mt+.12,-.4])),t.add("blue",L(Le(.3,.86,.26,.03),[0,mt+.43,.02])),t.add("blue",L(Le(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",L(Ae(.322,.04,.01),[0,1.6,.942])),t.add("steel",L(ae(.085,.085,.22,32),[0,1.45,sn])),t.add("chrome",L(Yt(.086,.008,8,32),[0,1.34,sn],[Math.PI/2,0,0])),t.add("rubber",ui([[.06,1.5,sn-.06],[.2,1.5,sn-.3],[.2,1.2,.2],[.2,mt+.3,-.2]],.016,.1,8)),t.add("rubber",ui([[-.06,1.42,sn-.06],[-.2,1.42,sn-.3],[-.2,1.1,.2],[-.2,mt+.28,-.22]],.016,.1,8));let i=Ct("ram",[0,1.12,sn]);e.add(i),i.add(new ct().add("chrome",L(ae(.035,.035,.42,20),[0,.21,0])).add("steel",L(Le(.32,.05,.32,.012),[0,0,0])).add("darkSteel",L(ae(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>L(ae(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=jl({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Je(new En(.07,40),new Mt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Je(Ae(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Je(Yt(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?pp(o):0;i.position.y=1.12-.155*d,a=$t(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*ss}}}function h2(n,e,t){for(let d of[-.42,.42])t.add("aluDark",L(Ae(.035,.66,.035),[d,mt+.33,-.33]));t.add("alu",L(Le(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",L(Ae(.6,.03,.06),[0,1.16,-.3])),t.add("blue",L(ae(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",L(ae(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=ex();e.add(Je(new vt(.8,.6),new Mt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Le(.11,.075,.008,.004),o=s.map(d=>{let h=Je(r,new Mt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,f)=>h.forEach((p,x)=>{let[m,g]=l(f,x),_=o[p];_.userData.tx=m,_.userData.ty=g,d&&_.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=$t(h.position.x,h.userData.tx,7,d),h.position.y=$t(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function f2(n,e,t){t.add("graphite",L(ae(.07,.08,.04,28),[.3,mt+.02,-.35])),t.add("alu",L(ae(.028,.028,1,16),[.3,mt+.5,-.35])),t.add("graphite",L(ae(.09,.1,.06,32),[.3,mt+1.03,-.35]));let r=new pr({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Je(ae(.08,.08,.13,32,!0),r,[.3,mt+1.125,-.35],null,null,{cast:!1})),e.add(Je(new On(.08,32,12,0,Dt,0,Math.PI/2),r,[.3,mt+1.19,-.35],null,null,{cast:!1}));let o=Ct("spin",[.3,mt+1.12,-.35]);e.add(o),o.add(Je(new Fn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=Qt(16756782,.2);e.add(Je(fp(.022),a,[.3,mt+1.12,-.35],null,null,{cast:!1}));let l=nc(16753978,0),c=new Ws(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Je(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new pr({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",L(Le(.36,.28,.12,.02),[-.2,mt+.14,.04])),t.add("grille",L(new vt(.12,.12),[-.28,mt+.15,.101])),t.add("steel",L(ae(.045,.045,.02,28),[-.1,mt+.15,.11],[Math.PI/2,0,0]));let d=Qt(3461498,.3);return e.add(Je(new On(.038,24,10,0,Dt,0,Math.PI/2),d,[-.1,mt+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,f,p){let x=p.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(f*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(f*5)>0?1:.2)}}}function p2(n,e,t){t.add("aluDark",L(Le(.72,.62,.04,.012),[0,mt+.31,-.4])),t.add("graphite",L(Le(.72,.06,.3,.012),[0,mt+.03,-.3]));let i=Ct("unwind",[-.16,mt+.4,-.31],[Math.PI/2,0,0]),s=Ct("rewind",[.2,mt+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=Ot(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new Mt({map:r,roughness:.7});i.add(new ct().add("roll",ae(.15,.15,.1,48)).add("gold",ae(.05,.05,.11,24)).add("chrome",ae(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new ct().add("ceramic",ae(.075,.075,.1,40)).add("gold",ae(.035,.035,.11,20)).add("chrome",ae(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,mt+.52],[.05,mt+.3],[.28,mt+.42]])t.add("chrome",L(ae(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));gp(t),t.add("steel",L(ae(.042,.042,.18,22),[0,1.24,sn])),t.add("chrome",L(Yt(.043,.006,6,24),[0,1.16,sn],[Math.PI/2,0,0]));let a=Ct("tamp",[0,1.08,sn]);e.add(a),a.add(new ct().add("chrome",L(ae(.016,.016,.3,12),[0,.15,0])).add("graphite",L(Le(.16,.025,.12,.006),[0,0,0])).add("gold",L(Ae(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let f=l?pp(l):0;a.position.y=1.08-(1.08-(Ln+.03))*f,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function m2(n,e,t){t.add("graphite",L(Le(.62,.86,.44,.02),[0,mt+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",L(Ae(.016,.84,.01),[d,mt+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",L(Le(.56,.085,.02,.006),[0,mt+.07+d*.1,-.095]));t.add("grille",L(new vt(.36,.5),[.311,mt+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Nn(Ae(.014,.01,.004),new zt({color:16777215}),i*s),o=new bt,a=[],l=[new ze(3461498),new ze(3461498),new ze(5078015),new ze(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,mt+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let f=l[(d*7+h*3)%l.length].clone();a.push(f),r.setColorAt(d*s+h,f)}e.add(r);let c=new ze,u=0;return{update(d,h,f){if(u+=d,!(u<.08)){u=0;for(let p=0;p<a.length;p++){let x=f.working?Math.random()>.45:(p+Math.floor(h*.7))%9===0;c.copy(a[p]).multiplyScalar(x?3.2:.25),r.setColorAt(p,c)}r.instanceColor.needsUpdate=!0}}}}var g2={archive:o2,engraver:a2,terminal:l2,satellite:c2,robot:u2,press:d2,kanban:h2,beacon:f2,labeler:p2,generic:m2};function x2(n,e,t,i){let s=vi[e],r=mp(t),o=Oi(r,Jr),a=Ct(`station-${e}`,[o.x,0,o.z],[0,xx(r),0]);a.userData.solid=`station:${e}`;let l=new ct,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,L(Le(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",L(Le(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",L(Le(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",L(Ae(.9,.01,.008),[0,.32,.252])),l.add("grille",L(new vt(.36,.1),[.24,.18,.251]));let[u,d]=n2[e]||[.44,-.5];l.add("alu",L(ae(.012,.012,.3,10),[u,mt+.15,d])),l.add("graphite",L(ae(.03,.03,.012,18),[u,mt+.46,d]));let h=g2[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let f=qi(s.zh,s.en,s.code,t2[e]);a.add(Je(new vt(.46,.13),kn(f.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let p=zd(384,144,{bg:"#03060c",glow:4});a.add(Je(new vt(.36,.135),$l(p.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=Qt(5078015,.4);a.add(Je(Ae(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((D,k)=>{let H=Qt(D,.1);return a.add(Je(ae(.028,.028,.045,18),H,[u,mt+.33+(2-k)*.05,d],null,null,{cast:!1})),H}),g=Vd(n);g.root.position.set(0,0,sn),a.add(g.root),a.add(di(n,1.25,1,[0,0,-.12],.55));let _=new zt({visible:!1}),b=new nt(new en(1.1,2,1.5),_);b.position.set(0,1,.1),a.add(b);let y={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},M=new ze,w=new ze(5078015),v=new ze(3461498),S=new ze(16726832),T=Oi(r,Rs+.05,Ln+.08);function R(){let D=y.status==="working"?"加工中 RUN":y.status==="error"?"故障 FAULT":"待机 IDLE",k=`${D}|${y.label}`;k!==y.screenKey&&(y.screenKey=k,p.set([{text:`${s.code}  ${D}`,size:30,color:y.status==="error"?"#ff8a80":y.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:y.label||"—",size:34,color:"#e8eefc",gap:58}]))}return R(),{kind:e,index:t,theta:r,root:a,port:Oi(r,Rs,Ln),anchor:Oi(r,Jr+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(D){y.label=D||"",R()},onStart(D){y.label=D.label||D.name,h.onStart?.(D),R()},onEnd(D,k){y.flash=k?.9:2.2,y.flashOk=k,k||i.puff(T,10),h.onEnd?.(D,k)},update(D,k,H){y.work=$t(y.work,H.working?1:0,3,D),y.flash=Math.max(0,y.flash-D);let N=y.flash>0&&!y.flashOk;y.status=H.working?"working":N?"error":"idle",R(),h.update(D,k,{working:H.working,wafer:H.wafer,work:y.work});let q;y.flash>0?(M.copy(y.flashOk?v:S),q=3.2*(y.flashOk?Math.min(1,y.flash*2):Math.sin(k*14)>0?1:.25)):(M.copy(w),q=.25+y.work*(2.2+Math.sin(k*6)*.6)),g.led.emissive.copy(M),g.led.emissiveIntensity=q,x.emissive.copy(M),x.emissiveIntensity=.25+q*.6,m[0].emissiveIntensity=N?Math.sin(k*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+y.work*3.5,m[2].emissiveIntensity=!H.working&&!N?1.6:.08}}}function _x(n,e){let t=Ct("stations"),i=Hd.map((r,o)=>x2(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var xp=n=>qi(Kt[n].zh,Kt[n].en,Kt[n].code),_i=new P(7.45,0,Ts),Js=.83,_p=13,jr=.4,Ui=.36,Cs=.4,bp=.02,Mp=.062,Sp=.02,wp=[8.2,8.75,9.3],Ep=[-.1,.45,1],ls=.55,$i=2.45,Wd=Ui+.046,yp=1.9,y2=1.3,No=9,bx=n=>((n-1)%No+No)%No,vp=(n,e=new P)=>e.set(wp[n%3],ls,Ep[Math.floor(n/3)]),Mx={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}},Xd=n=>n?typeof n.fileCount=="number"?n.fileCount:n.files?n.files.length:0:0;function v2(n,e,t,i){let s=i.info,r=s?Mx[s.status]||Mx.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Vt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Vt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Tt}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0;n.fillText(`CALLS ${o} · FILES ${Xd(s)}`,30,t*.64),n.fillStyle="#15171b";let a=30,l=(i.no||7)*2654435761;for(let c=0;a<e-16;c++){let u=1+((l>>>c%24^c)&3);c%2===0&&n.fillRect(a,t*.8,u,t*.13),a+=u+1}}function _2(n){let e=new ct,t=.03+(Ui-.03)/2,i=Ui-.03,s=-jr/2+.008;e.add("graphite",L(Le(jr,.03,Cs,.008),[0,.015,0])),e.add("graphite",L(Ae(.016,.022,Cs),[s,Ui-.011,0]),L(Ae(.016,i,.02),[s,t,Cs/2-.01]),L(Ae(.016,i,.02),[s,t,-Cs/2+.01])),e.add("graphite",L(Ae(.06,.026,.06),[0,Ui+.013,0]),L(Le(.17,.02,.17,.006),[0,Ui+.036,0]));for(let l=0;l<_p;l++){let c=Mp+l*Sp-.005;for(let u of[-1,1])e.add("plastic",L(Ae(.3,.004,.05),[bp,c,u*.165]))}let r=new ct().add("smoke",L(Ae(jr-.016,i,.01),[.008,t,Cs/2-.005]),L(Ae(jr-.016,i,.01),[.008,t,-Cs/2+.005]),L(Ae(.01,i,Cs-.02),[jr/2-.005,t,0]),L(Ae(jr-.016,.01,Cs-.02),[.008,Ui-.005,0])),o=new jt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new ct().add("white",L(Le(.02,Ui-.045,Cs-.03,.006),[0,0,0])).add("graphite",L(ae(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),L(ae(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(Ui-.045)/2+.006,doorX:-jr/2-.004}}function Sx(n,e){let t=Ct("stocker"),i=new zt({visible:!1}),s=new en(jr+.04,Ui+.08,Cs+.04),r=new vt(.28,.1225),o=_2(n),a=Ct("load-port",[_i.x,0,_i.z]);a.userData.solid="load-port",t.add(a);let l=new ct;l.add("white",L(Le(.56,Js-.012,.62,.02),[0,(Js-.012)/2,0])),l.add("graphite",L(Le(.44,.012,.44,.004),[0,Js-.006,0]),L(Ae(.58,.06,.64),[0,.03,0]));for(let G=0;G<3;G++){let z=G/3*Math.PI*2+.5;l.add("chrome",L(ae(.008,.012,.012,12),[Math.cos(z)*.13,Js+.004,Math.sin(z)*.13]))}l.add("aluDark",L(Ae(.04,.22,.04),[.24,Js+.11,.27]),L(Ae(.08,.03,.05),[.21,Js+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=xp("loadport");a.add(Je(new vt(.44,.124),kn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((G,z)=>{let re=Qt(G,.15);return a.add(Je(Ae(.05,.016,.008),re,[-.12+z*.12,.46,.312],null,null,{cast:!1})),re});a.add(di(n,.9,.95,[0,0,0],.5));let d=new nt(new en(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new ct,f=(wp[0]+wp[2])/2,p=(Ep[0]+Ep[2])/2;h.add("graphite",L(Ae(1.66,ls-.03,1.66),[f,(ls-.03)/2,p])),h.add("white",L(Le(1.76,.03,1.76,.01),[f,ls-.015,p])),h.add("aluDark",L(Ae(1.7,.05,1.7),[f,.025,p]));let x=[];for(let G=0;G<No;G++){let z=vp(G);h.add("aluDark",L(Le(.44,.008,.44,.003),[z.x,ls+.002,z.z]));for(let J=0;J<3;J++){let se=J/3*Math.PI*2+.5;h.add("chrome",L(ae(.007,.01,.01,10),[z.x+Math.cos(se)*.12,ls+.008,z.z+Math.sin(se)*.12]))}let re=Qt(3134074,0);t.add(Je(Ae(.12,.006,.012),re,[z.x,ls+.004,z.z+.235],null,null,{cast:!1})),x.push(re)}t.add(h.build(n,{name:"buffer-table"}));let m=xp("stocker");t.add(Je(new vt(.62,.175),kn(m.tex,.35),[f,ls*.55,p+.834],null,null,{cast:!1})),t.add(di(n,2.3,2.3,[f,0,p],.55));let g=new nt(new en(1.8,ls+.45,1.8),i);g.position.set(f,(ls+.45)/2,p),t.add(g);let _=new ct,b=[7,10],y=[-.45,1.95];for(let G of b){for(let z of y)_.add("white",L(Ae(.1,$i+.05,.1),[G,($i+.05)/2,z])),_.add("graphite",L(Ae(.22,.03,.22),[G,.015,z]));_.add("aluDark",L(Ae(.09,.09,y[1]-y[0]+.1),[G,$i,(y[0]+y[1])/2]))}for(let G of y)_.add("steel",L(Ae(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,$i,G]));t.add(_.build(n,{name:"gantry"}));let M=xp("gantry"),w=Je(new vt(.9,.253),kn(M.tex,.35),[(b[0]+b[1])/2,$i-.2,y[1]+.047],null,null,{cast:!1});t.add(w),t.add(new ct().add("steel",L(Ae(.02,.1,.02),[(b[0]+b[1])/2-.35,$i-.06,y[1]+.04]),L(Ae(.02,.1,.02),[(b[0]+b[1])/2+.35,$i-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let v=Ct("bridge");t.add(v),v.add(new ct().add("blue",L(Ae(.14,.12,y[1]-y[0]+.12),[0,$i+.105,(y[0]+y[1])/2])).add("graphite",L(Ae(.26,.1,.13),[0,$i+.07,y[0]]),L(Ae(.26,.1,.13),[0,$i+.07,y[1]])).build(n,{name:"bridge-beam"}));let S=Ct("trolley");v.add(S),S.add(new ct().add("graphite",L(Le(.28,.13,.26,.02),[0,$i-.035,0])).add("steel",L(ae(.045,.045,.2,20),[0,$i-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let T=ae(.0035,.0035,1,6),R=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([G,z])=>{let re=Je(T,n.steel,[G,1,z],null,null,{cast:!1});return S.add(re),re}),D=Ct("gripper");S.add(D),D.add(new ct().add("graphite",L(Le(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let k=[-1,1].map(G=>{let z=Je(Ae(.024,.06,.13),n.steel,[G*.115,-.01,0]);return D.add(z),z}),H=Qt(5078015,.3);D.add(Je(Ae(.1,.008,.01),H,[0,.03,.122],null,null,{cast:!1}));let N={x:_i.x,z:_i.z,hook:yp,grip:0,carry:null},q=()=>{v.position.x=N.x,S.position.z=N.z,D.position.y=N.hook;let G=$i-.1,z=N.hook+.055,re=Math.max(.01,G-z);for(let se of R)se.scale.y=re,se.position.y=z+re/2;let J=Wi(.115,.079,N.grip);k[0].position.x=-J,k[1].position.x=J,N.carry&&N.carry.g.position.set(N.x,N.hook-Wd,N.z)},te=new Set,Q=new Array(No).fill(null),ee=null;function W(){let G=o.g.clone();G.name="foup";let z=o.door.clone();G.add(z);let re=Ot(256,112,()=>{}),J=new Mt({map:re.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:re.tex,emissiveIntensity:.18});G.add(Je(r,J,[.01,Ui-.075,Cs/2+.002],null,null,{cast:!1}));let se=new nt(s,i);se.position.set(0,Ui/2+.02,0),G.add(se);let Re={no:0,info:null,g:G,door:z,label:re,labelMat:J,labelKey:"",proxy:se,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return K(Re),te.add(Re),t.add(G),Re}function K(G){let z=`${G.no}|${G.info?`${G.info.status}|${G.info.calls}|${Xd(G.info)}`:"-"}|${G.count}`;z!==G.labelKey&&(G.labelKey=z,G.proxy.userData.hoverId=G.no?`foup:${G.no}`:"loadport",G.label.redraw((re,J,se)=>v2(re,J,se,G)))}function O(G,z){let re=G.count;if(G.count+=1,G.looks.push(z),re<_p){let J=e.create(z);J.position.set(bp,Mp+re*Sp,0),G.g.add(J),G.slots.push(J)}K(G)}function $(G){te.delete(G),t.remove(G.g),G.label.tex.dispose(),G.labelMat.dispose();for(let z=0;z<No;z++)Q[z]===G&&(Q[z]=null);ee===G&&(ee=null)}function ce(G){let z=G.doorOpen,re=st(z/.25,0,1),J=rs(st((z-.25)/.75,0,1));G.door.position.set(o.doorX-.018*re,o.doorY-.43*J,0)}function Z(G=!1){let z=W();return z.g.position.set(_i.x,Js,_i.z),z.state=G?"dock":"spawning",z.sp=G?1:0,z.doorOpen=G?1:0,ce(z),ee=z,z}function ge(G,z){let re=Q[z];re&&re!==G&&$(re),Q[z]=G;let J=vp(z);G.g.position.copy(J),G.state="nest",G.doorOpen=0,ce(G)}let Me=[],ne=null,ye=G=>({setup:()=>(G(),{d:0,fn:null})}),De=(G,z,re=1.6)=>({setup(){let J=N.x,se=N.z,Re=Math.hypot(G-J,z-se);return{d:Re<.001?0:Math.max(.35,Re/re),fn:F=>(N.x=Wi(J,G,F),N.z=Wi(se,z,F))}}}),tt=(G,z)=>({setup(){let re=N.hook;return{d:Math.abs(G-re)<.001?0:z,fn:J=>N.hook=Wi(re,G,J)}}}),Be=(G,z=.3)=>({setup(){let re=N.grip;return{d:z,fn:J=>N.grip=Wi(re,G,J)}}}),je=(G,z,re=.55)=>({setup(){let J=G.doorOpen;return{d:re,fn:se=>(G.doorOpen=Wi(J,z,se),ce(G))}}});function Ge(G){let z=bx(G.no),re=vp(z);return{i:0,steps:[ye(()=>G.state="closing"),je(G,0),De(_i.x,_i.z),tt(Js+Wd,.6),Be(1),ye(()=>(N.carry=G,G.state="carried",H.emissiveIntensity=2.2)),tt(y2+Wd,.9),ye(()=>{ee===G&&(ee=null),Z();let J=Q[z];J&&J!==G&&(J.state="sink",J.sp=0,Q[z]=null)}),De(re.x,re.z),tt(ls+Wd,.8),ye(()=>{N.carry=null,H.emissiveIntensity=.3,Q[z]&&Q[z]!==G&&$(Q[z]),ge(G,z)}),Be(0),tt(yp,.5),De(_i.x,_i.z)]}}let xe={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new P(_i.x,1.1,_i.z),stocker:new P(f,.9,p)},speed:1,hoverObjects(G=[]){for(let z of te)z.no&&G.push(z.proxy);return G},dockReady:()=>!!ee&&ee.state==="dock"&&ee.doorOpen>=1,dockTurn:()=>ee&&ee.no||null,dockCount:()=>ee?ee.count:0,bindDock(G,z){return!ee||ee.no?!1:(ee.no=G,ee.info=z||null,K(ee),!0)},slotPoint(G,z=new P){let re=ee?ee.g.position:new P(_i.x,Js,_i.z);return z.set(re.x+bp,re.y+Mp+Math.min(G,_p-1)*Sp,re.z)},addWafer(G){ee&&O(ee,G)},addLate(G,z){for(let re of te)if(re.no===G&&re.state!=="sink")return O(re,z),!0;return!1},updateInfo(G,z){for(let re of te)re.no===G&&(re.info=z,K(re))},ship(G){return!ee||ee.no!==G||Me.includes(ee)||ne&&ne.foup===ee?!1:(Me.push(ee),!0)},shipped:G=>{for(let z of te)if(z.no===G)return z.state==="carried"||z.state==="nest"||z.state==="sink"||Me.includes(z)||ne&&ne.foup===z;return!1},placeNest(G,z,re){let J=W();J.no=G,J.info=z;for(let se of re)O(J,se);ge(J,bx(G)),K(J)},resetDock(G,z,re){ee&&$(ee);let J=Z(!0);if(G){J.no=G,J.info=z;for(let se of re||[])O(J,se)}K(J)},busy:()=>!!ne||Me.length>0,clear(){for(let G of[...te])$(G);Me.length=0,ne=null,N.carry=null,N.grip=0,N.hook=yp,N.x=_i.x,N.z=_i.z,H.emissiveIntensity=.3,q()},update(G){if(!ne&&Me.length){let J=Me.shift();ne=Ge(J),ne.foup=J}let z=G*xe.speed;for(;ne&&z>0;){let J=ne.steps[ne.i];if(!J){ne=null;break}if(J.run||(J.run=J.setup(),J.t=0),!J.run.d){J.run.fn&&J.run.fn(1),ne.i+=1;continue}let se=Math.min(z,J.run.d-J.t);J.t+=se,z-=se,J.run.fn&&J.run.fn(rs(st(J.t/J.run.d,0,1))),J.t>=J.run.d-1e-6&&(ne.i+=1)}q();for(let J of[...te])J.state==="spawning"?(J.sp=Math.min(1,J.sp+G/.8),J.g.position.y=Js-(Ui+.07)*(1-rs(J.sp)),J.sp>=1&&(J.state="dock")):J.state==="dock"&&J.doorOpen<1?(J.doorOpen=Math.min(1,J.doorOpen+G/.6),ce(J)):J.state==="sink"&&(J.sp=Math.min(1,J.sp+G/1.2),J.g.position.y=ls-(Ui+.09)*rs(J.sp),J.sp>=1&&$(J));for(let J=0;J<No;J++)x[J].emissiveIntensity=Q[J]?1.6:0;let re=!!ne;u[0].emissiveIntensity=xe.dockReady()?1.8:.15,u[1].emissiveIntensity=ee&&ee.state==="closing"?2.2:.15,u[2].emissiveIntensity=re?1.8:.15},dispose(){for(let G of[...te])$(G);for(let G of[o.g,o.door])G.traverse(z=>z.geometry&&z.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return q(),xe}function wx(n){let e=new jt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new Vs({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?ti:$s}),h=new ur(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new P,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new P((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new P(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var Ex=.15,b2=.006;function Tx(n){let e=new Fn(Ex,Ex,b2,40,1,!1),t=new Mt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new nt(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Tp=.34,qd=.17,Ax=4,M2=2.4,S2=.55,w2=.9,Ap=.03,E2=5,$d=-.006,T2=12,A2=.4,R2=3,C2=1.5,P2=9,I2=new ze(16756768),L2=new ze(3461498),ic=(n,e=n.kind)=>n.status==="error"?"bad":Na.has(e)?"gold":"normal";function Rx(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=ic(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,Xd(n)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var Yd=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Id(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Tp-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-qd,r=this.gateOut+qd,o=this.items.find(p=>p.s>s+1e-6&&p.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let p of this.items){let x=d?d.s-Tp:this.end,m=!d||d.s-Tp>=r;if(p.cycled)p.s<r&&(p.s<=this.gateOut-qd+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(p.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),p.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&p.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else p.s<this.gateIn+qd&&(a=!0);p.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(p.dwell+=e*t,c=!0,p.dwell>=S2&&(p.cycled=!0))}let g=x-p.s;if(g<=1e-5)p.v=0;else{let _=Math.min(M2*t,Math.sqrt(2*Ax*g));p.v=Math.min(_,p.v+Ax*t*e),p.s=Math.min(x,p.s+p.v*e),u=!0}p.arrivedAt==null&&p.s>=this.end-1e-4&&(p.arrivedAt=i),d=p}let f=5*e*t;this.doorIn=st(this.doorIn+(a?f:-f),0,1),this.doorOut=st(this.doorOut+(l?f:-f),0,1),this.cycling=c,this.moving=u}};function Cx({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new P,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=st(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new Yd([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),f=st((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),p=new Yd([o.outPort,o.outCenter,o.trackEnd],{gateIn:f*h,gateOut:h+.45,stop:h}),x=F=>e.byKind[F.kind]?F.kind:"generic",m=new Map,g=new Set,_=new Map,b=Object.fromEntries(e.list.map(F=>[F.kind,new Array(E2).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},M={inbound:0,outbound:0,robot:!1,stocker:!1},w={},v=[],S=0,T=0,R=!0,D=0,k=1,H=null;function N(F){let oe=_.get(F);return oe||(oe={no:F,status:"running",info:null,shipped:!1,pending:[]},_.set(F,oe)),oe}let q=F=>F.status!=="running"||F.no<S,te=F=>{for(let oe of m.values())if(oe.turn===F)return!0;return!1};function Q(F){let oe={id:F.id,call:F,kind:x(F),turn:F.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:Ln,waitT:0};return m.set(F.id,oe),N(F.turn),oe}function ee(F){F.mesh&&(r.remove(F.mesh),F.mesh=null)}function W(F){F.stage="stored",m.delete(F.id),g.add(F.id)}function K(F){F.signaled||(F.signaled=!0,e.byKind[F.kind].onEnd(F.call,F.call.status!=="error"))}function O(F,oe){t.addLate(F,oe)||N(F).pending.push(oe)}function $(F){F.it&&(d.remove(F.it),p.remove(F.it),F.it=null),F.level>=0&&(b[F.kind][F.level]=null,F.level=-1),y.carry===F&&(y.carry=null),ee(F),K(F),O(F.turn,ic(F.call,F.kind)),W(F)}let ce=F=>b[F].indexOf(null);function Z(F,oe){let fe=e.byKind[F.kind];b[F.kind][oe]=F,F.level=oe,F.stage="station",F.arriveT=D,F.mesh||(F.mesh=s.create("raw"),r.add(F.mesh)),F.mesh.position.set(fe.port.x,Ln+oe*Ap,fe.port.z)}function ge(){for(let F of m.values())ee(F);m.clear(),g.clear(),_.clear(),d.items.length=0,p.items.length=0;for(let F of Object.keys(b))b[F].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),H=null}function Me(F){w={},v=[];for(let oe of F.calls){if(oe.status!=="running")continue;let fe=x(oe);w[fe]=(w[fe]||0)+1,v.push(oe)}S=F.turns.length?F.turns[F.turns.length-1].no:0}function ne(F){ge(),t.clear();for(let U of F.turns)Object.assign(N(U.no),{info:U,status:U.status});let oe=F.turns.filter(U=>U.status!=="running");for(let U of oe)N(U.no).shipped=!0;for(let U of oe.slice(-P2))t.placeNest(U.no,U,Rx(U,F.calls));let fe=F.turns.find(U=>U.status==="running")||null;fe?t.resetDock(fe.no,fe,Rx(fe,F.calls)):t.resetDock(null,null,[]);for(let U of F.calls){if(U.status!=="running"){g.add(U.id);continue}let Ke=Q(U),ut=ce(Ke.kind);ut>=0&&Z(Ke,ut),e.byKind[Ke.kind].onStart(U)}Me(F)}function ye(F){if(!F)return;if(R||F.turnCount<T){R=!1,T=F.turnCount,ne(F);return}T=F.turnCount;for(let fe of F.turns){let U=N(fe.no);U.info=fe,U.status=fe.status,t.updateInfo(fe.no,fe)}let oe=new Set;for(let fe of F.calls){oe.add(fe.id);let U=m.get(fe.id);U?U.call=fe:g.has(fe.id)||(Q(fe),e.byKind[x(fe)].onStart(fe))}for(let fe of g)oe.has(fe)||g.delete(fe);Me(F)}let De=(F,oe)=>({yaw:F,reach:Do,lift:oe,d:(fe,U)=>Math.max(.18,Math.abs($f(fe.yaw,U.yaw))/4)});function tt(F,oe){let fe=e.byKind[F.kind];b[F.kind][oe]=F,F.level=oe;let U=oe*Ap;return{type:"deliver",job:F,from:Kt.lock.code,to:vi[F.kind].code,steps:[De(Lo,$d),{reach:Rs,d:.38},{lift:tc,d:.15,onStart(){d.remove(F.it),F.it=null,F.stage="carried",F.restY=Ln,y.carry=F},onEnd:()=>F.restY=0},{reach:Do,d:.32},De(fe.theta,U+tc),{reach:Rs,d:.38},{lift:U+$d,d:.15,onStart:()=>F.restY=Ln+U,onEnd(){y.carry=null,Z(F,oe)}},{reach:Do,d:.32}]}}function Be(F){let oe=e.byKind[F.kind],fe=F.level,U=fe*Ap;return F.reserved=!0,{type:"collect",job:F,from:vi[F.kind].code,to:Kt.unload.code,steps:[De(oe.theta,U+$d),{reach:Rs,d:.38},{lift:U+tc,d:.15,onStart(){b[F.kind][fe]=null,F.level=-1,F.stage="carried",F.restY=Ln+U,y.carry=F},onEnd:()=>F.restY=0},{reach:Do,d:.32},De(Fa,tc),{reach:Rs,d:.38},{lift:$d,d:.15,onStart:()=>F.restY=Ln,onEnd(){y.carry=null,F.it=p.add(F),F.stage="out"}},{reach:Do,d:.32}]}}function je(){let F=null,oe=d.head();if(d.atEnd(oe)){let fe=ce(oe.job.kind);fe>=0&&(F={type:"deliver",job:oe.job,k:fe,ready:oe.arrivedAt??D})}if(p.tailFree())for(let fe of m.values())fe.stage==="station"&&fe.processed&&!fe.reserved&&(!F||fe.processedAt<F.ready)&&(F={type:"collect",job:fe,ready:fe.processedAt});return F?F.type==="deliver"?tt(F.job,F.k):Be(F.job):null}function Ge(F){let oe=n.robot;if(!y.task){let Ke=je();Ke?(y.task=Ke,y.steps=Ke.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,oe.setBusy(!0)):(y.idle+=F,y.idle>C2&&!y.homed&&!y.cur&&(y.steps=[De(Lo,0)],y.homed=!0))}let fe=F,U=0;for(;fe>0&&U++<32;){if(!y.cur){let Pe=y.steps.shift();if(!Pe)break;let A={yaw:oe.pose.yaw,reach:oe.pose.reach,lift:oe.pose.lift},Y={yaw:Pe.yaw??A.yaw,reach:Pe.reach??A.reach,lift:Pe.lift??A.lift},he=typeof Pe.d=="function"?Pe.d(A,Y):Pe.d;y.cur={st:Pe,from:A,to:Y,d:he/k,t:0},Pe.onStart&&Pe.onStart()}let Ke=y.cur,ut=Math.min(fe,Ke.d-Ke.t);Ke.t+=ut,fe-=ut;let gt=Ke.d>0?rs(Ke.t/Ke.d):1;oe.setPose(Ke.from.yaw+$f(Ke.from.yaw,Ke.to.yaw)*gt,Wi(Ke.from.reach,Ke.to.reach,gt),Wi(Ke.from.lift,Ke.to.lift,gt)),Ke.t>=Ke.d-1e-6&&(y.cur=null,Ke.st.onEnd&&Ke.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,oe.setBusy(!1)),oe.setStatus){let Ke=y.task,ut=!!y.cur||y.steps.length>0,gt=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;Ke?oe.setStatus(Ke.type,Ke.from,Ke.to,gt):oe.setStatus(ut?"home":"idle",null,ut?Kt.lock.code:null,null)}y.carry&&y.carry.mesh&&(oe.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function xe(){for(let F of m.values())F.stage!=="station"||F.processed||F.call.status==="running"||D<F.arriveT+w2/k||(F.processed=!0,F.processedAt=D,s.setLook(F.mesh,ic(F.call,F.kind)),K(F))}function G(F,oe){p.remove(oe),F.it=null,F.stage="transfer",H={j:F,t:0,d:A2/k,from:F.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new P)}}function z(F){if(!H)return;H.t+=F;let oe=rs(H.t/H.d),fe=H.j.mesh;if(fe.position.lerpVectors(H.from,H.to,oe),fe.position.y+=Math.sin(Math.PI*oe)*.025,H.t>=H.d){let U=H.j;H=null,ee(U),t.dockTurn()===U.turn?t.addWafer(ic(U.call,U.kind)):O(U.turn,ic(U.call,U.kind)),W(U)}}function re(F){if(t.dockReady()&&t.dockTurn()==null){let U=null;for(let Ke of _.values())!Ke.shipped&&(!U||Ke.no<U.no)&&(U=Ke);if(U){t.bindDock(U.no,U.info);for(let Ke of U.pending.splice(0))t.addWafer(Ke)}}let oe=t.dockTurn();if(oe!=null&&!H&&t.dockReady()){let U=N(oe);!U.shipped&&q(U)&&!te(oe)&&t.ship(oe)&&(U.shipped=!0)}let fe=p.head();if(!H&&p.atEnd(fe)){let U=fe.job;N(U.turn).shipped?$(U):t.dockReady()&&t.dockTurn()===U.turn?G(U,fe):(U.waitT+=F,U.waitT>R2&&oe!=null&&oe!==U.turn&&t.dockReady()&&t.ship(oe)&&(N(oe).shipped=!0))}}function J(){let F=m.size-T2;if(!(F<=0))for(let oe of m.values()){if(F<=0)break;oe.stage==="spawn"&&oe.call.status!=="running"&&($(oe),F-=1)}}function se(){if(d.tailFree()){for(let F of m.values())if(F.stage==="spawn"){F.mesh=s.create("raw"),r.add(F.mesh),F.it=d.add(F),F.stage="in",d.path.at(0,F.mesh.position),i.pulseDispenser();return}}}function Re(F,oe,fe){F.emissive.copy(oe?I2:L2),F.emissiveIntensity=oe?1.6+Math.sin(fe*10)*.8:.6}return t.resetDock(null,null,[]),{sync:ye,reset(){ge(),t.clear(),t.resetDock(null,null,[]),w={},v=[],S=0,T=0,R=!0},update(F,oe){D=oe,k=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=k,J(),se(),d.update(F,k,D),p.update(F,k,D),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(p.doorOut,p.doorIn),Re(n.lock.led,d.cycling,oe),Re(n.unload.led,p.cycling,oe),n.trackLed.emissiveIntensity=d.moving||p.moving?1.8+Math.sin(oe*8)*.4:1,xe(),Ge(F),re(F),z(F);for(let fe of d.items)d.path.at(fe.s,fe.job.mesh.position);for(let fe of p.items)p.path.at(fe.s,fe.job.mesh.position);for(let fe of e.list){let U=!1,Ke=!1;for(let gt of b[fe.kind])gt&&gt.stage==="station"&&(U=!0,gt.processed||(Ke=!0));let ut=(w[fe.kind]||0)>0||Ke;fe.active=ut,fe.update(F,oe,{working:ut,wafer:U})}t.update(F)},activity(){return M.inbound=d.items.length,M.outbound=p.items.length,M.robot=!!y.task||!!y.cur,M.stocker=!!H||t.busy(),M},focus(F){let oe=null;for(let fe of v)(!oe||(fe.startedAt||0)>=(oe.startedAt||0))&&(oe=fe);if(oe){let fe=e.byKind[x(oe)];return F.copy(fe.anchor),`station:${fe.kind}`}return y.task?(F.copy(n.anchors.robot),"robot"):H||t.busy()?(F.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!y.task||!!y.cur||y.steps.length>0||!!H||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:p.items.length,robot:y.task?y.task.type:"idle",transfer:!!H,dock:t.dockTurn(),rush:k,stages:[...m.values()].reduce((F,oe)=>(F[oe.stage]=(F[oe.stage]||0)+1,F),{})}},dispose(){for(let F of m.values())ee(F);m.clear()}}}function on(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function Tn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function cs(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function Px(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function Ix(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var Rp={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function js(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?Rp["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?Rp["deepseek-flash"]:null:t?Rp["deepseek-flash"]:null}function Mr(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function sc(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Kd(n){if(!n||typeof n!="object")return null;let e={miss:sc(n.inputTokens),hit:sc(n.cacheReadTokens),write:sc(n.cacheWriteTokens),output:sc(n.outputTokens),reasoning:sc(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function Zd(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function Lx(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Jd(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var D2=60,Fx=40,N2=200,O2=40,U2=24,F2=8,k2=250,B2=16,z2=5e3;function eh(){return{provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0,unpriced:0},sample:null,speed:{last:0,decodeTokens:0,decodeMs:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],agents:[],workflows:[],firstAt:0,lastAt:0}}var Fi=n=>typeof n=="number"&&Number.isFinite(n),Dx=n=>Fi(n)&&n>0?n:0,Ri=(n,e=120)=>typeof n=="string"?n.slice(0,e):"",Qr=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:null;function kx(n){if(Fi(n))return n;if(typeof n=="string"){let e=Date.parse(n);if(Number.isFinite(e))return e}return NaN}function H2(n,e){let t=kx(n.time);return Number.isFinite(t)?t:e.lastAt}function Ps(n,e){e>n.lastAt&&(n.lastAt=e),!n.firstAt&&e&&(n.firstAt=e)}function Bx(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function rc(n,e,t){let i=n.slice();return i[e]=t,i}function Ip(n,e){return n.length>e?n.slice(n.length-e):n}function Lp(n,e,t){let i=[...n,e];for(;i.length>t;){let s=i.findIndex(r=>r.status!=="running");i.splice(s>=0?s:0,1)}return i}function zx(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],fileCount:0,added:0,removed:0}}var th=n=>n.turns[n.turns.length-1]||null,Oo=n=>{let e=th(n);return e&&e.status==="running"?e:null};function Nx(n,e,t){let i=Oo(n);if(!i)return;n.turns=Bx(n.turns,r=>({...r,status:e,endedAt:t}));let s=0;n.calls.some(r=>r.status==="running"&&r.turn===i.no)&&(n.calls=n.calls.map(r=>r.status!=="running"||r.turn!==i.no?r:(s+=1,{...r,status:"error",endedAt:t}))),s&&(n.tools={...n.tools,running:Math.max(0,n.tools.running-s),errors:n.tools.errors+s})}function Cp(n,e,t){if(Oo(n))return;let i=n.turnCount+1;n.turnCount=i,n.turns=Ip([...n.turns,zx(i,Fi(t)?t:i,e)],Fx)}function G2(n,e){let t=n.files.findIndex(s=>s.path===e.path),i={...n,added:n.added+e.added,removed:n.removed+e.removed};if(t>=0){let s=n.files[t];i.files=rc(n.files,t,{path:s.path,added:s.added+e.added,removed:s.removed+e.removed})}else i.fileCount=n.fileCount+1,n.files.length<O2&&(i.files=[...n.files,{path:e.path,added:e.added,removed:e.removed}]);return i}function V2(n){if(!Array.isArray(n))return null;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t&&t.type==="chunk"&&t.chunk&&t.chunk.type==="usage"&&t.chunk.usage)return t.chunk.usage}return null}var W2=new Set(["text-delta","reasoning-delta","tool-call-delta"]);function X2(n){if(!Array.isArray(n))return null;let e=1/0,t=-1/0,i=s=>{Fi(s)&&(s<e&&(e=s),s>t&&(t=s))};for(let s of n)if(!(!s||typeof s!="object"))if(s.type==="text-chunks"||s.type==="reasoning-chunks"||s.type==="tool-call-chunks"){let r=Array.isArray(s.texts)?s.texts:Array.isArray(s.args)?s.args:[],o=Array.isArray(s.dt)?s.dt:[],a=s.time0;if(!Fi(a))continue;s.type==="tool-call-chunks"&&s.name&&i(a);for(let l=0;l<r.length;l++)l>0&&(a+=Fi(o[l-1])?o[l-1]:0),typeof r[l]=="string"&&r[l].length&&i(a)}else s.type==="chunk"&&s.chunk&&W2.has(s.chunk.type)&&i(s.time);return t>e?{first:e,last:t}:null}var q2={miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,peak:!1,savings:0,priced:!0};function $2(n,e){return n.miss===e.miss&&n.hit===e.hit&&n.write===e.write&&n.output===e.output&&n.reasoning===e.reasoning&&n.cost===e.cost&&n.peak===e.peak&&n.priced===e.priced}function Y2(n,e,t,i){let s=Qr(t.message)&&Qr(t.message.source),r=s&&typeof s.provider=="string"&&s.provider?s.provider:n.provider,o=s&&typeof s.model=="string"&&s.model?s.model:n.model,a=js(r,o),l=Mr(i),c=Fi(t.turn)?t.turn:-1,u=Fi(t.step)?t.step:-1,d=n.sample&&c>=0&&n.sample.turn===c&&n.sample.step===u?n.sample:null,h=Oo(n)||th(n),f={turn:c,step:u,no:d?d.no:h?h.no:0,miss:e.miss,hit:e.hit,write:e.write,output:e.output,reasoning:e.reasoning,cost:Zd(e,a,l),peak:l,savings:Lx(e,a,l),priced:!!a};if(d&&$2(d,f))return!1;let p=d||q2,x=d?0:1,m=n.totals;return n.totals={miss:m.miss-p.miss+f.miss,hit:m.hit-p.hit+f.hit,write:m.write-p.write+f.write,output:m.output-p.output+f.output,reasoning:m.reasoning-p.reasoning+f.reasoning,requests:m.requests+x,cost:Math.max(0,m.cost-p.cost+f.cost),costPeak:Math.max(0,m.costPeak-(p.peak?p.cost:0)+(l?f.cost:0)),costOffPeak:Math.max(0,m.costOffPeak-(p.peak?0:p.cost)+(l?0:f.cost)),savings:Math.max(0,m.savings-p.savings+f.savings),unpriced:m.unpriced-(d&&!d.priced?1:0)+(a?0:1)},n.sample=f,n.contextTokens=e.miss+e.hit+e.write+e.output,f.no&&(n.turns=n.turns.map(g=>g.no!==f.no?g:{...g,miss:g.miss-p.miss+f.miss,hit:g.hit-p.hit+f.hit,write:g.write-p.write+f.write,output:g.output-p.output+f.output,reasoning:g.reasoning-p.reasoning+f.reasoning,cost:Math.max(0,g.cost-p.cost+f.cost),requests:g.requests+x})),!0}function K2(n,e,t){if(e.output<B2)return;let i=X2(t);if(!i)return;let s=i.last-i.first;s<k2||(n.speed={last:Math.min(z2,e.output/(s/1e3)),decodeTokens:n.speed.decodeTokens+e.output,decodeMs:n.speed.decodeMs+s})}function Pp(n){return n==null||n==="completed"?"done":n==="aborted"||n==="cancelled"?"stopped":"error"}function Z2(n){return{id:"",name:"",label:"",kind:"subagent",mode:"",runId:"",seq:-1,phase:"",status:"running",startedAt:0,endedAt:0,turn:0,...n}}function Qd(n,e,t){let i=n.agents[e],s=!1;for(let r of Object.keys(t))i[r]!==t[r]&&(s=!0);return s?{...n,agents:rc(n.agents,e,{...i,...t})}:n}function Ox(n,e,t){let i={...n},s=Oo(i)||th(i);return i.agents=Lp(i.agents,Z2({turn:s?s.no:0,startedAt:t,...e}),U2),Ps(i,t),i}function J2(n,e,t,i){let s=n.agents.findIndex(o=>o.id===e);if(s<0||n.agents[s].status!=="running")return n;let r=Qd(n,s,{status:t,endedAt:i});return r!==n&&Ps(r,i),r}function j2(n,e,t){if(typeof e!="string"||!e)return;let i=e.slice(e.lastIndexOf("/")+1),s=n.agents.findIndex(r=>r.kind==="subagent"&&r.status!=="running"&&(r.name&&(r.name===e||r.name===i)||r.label===e));s<0||(n.agents=rc(n.agents,s,{...n.agents[s],status:"running",endedAt:0,startedAt:t}))}function jd(n,e,t){let i=n.workflows.findIndex(o=>o.runId===e);if(i<0)return n;let s=n.workflows[i],r=t(s);return r===s?n:{...n,workflows:rc(n.workflows,i,r)}}var Q2=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function Ux(n,{provider:e,model:t,effort:i,contextWindow:s}){let r={};return typeof e=="string"&&e&&e.slice(0,80)!==n.provider&&(r.provider=e.slice(0,80)),typeof t=="string"&&t&&t.slice(0,120)!==n.model&&(r.model=t.slice(0,120)),typeof i=="string"&&i.slice(0,40)!==n.effort&&(r.effort=i.slice(0,40)),Fi(s)&&s>0&&s!==n.contextWindow&&(r.contextWindow=s),Object.keys(r).length?{...n,...r}:n}function eT(n,e){if(!e||typeof e.type!="string")return n;let t=Qr(e.data)||{},i=H2(e,n);switch(e.type){case"request/header":{let s=Qr(Qr(t.header)&&t.header.config);return s?Ux(n,{provider:s.provider,model:s.model,effort:typeof s.reasoningEffort=="string"?s.reasoningEffort:""}):n}case"request/context":return Ux(n,{provider:t.provider,model:t.model,contextWindow:t.contextWindow});case"turn/start":{let s={...n};Nx(s,"ok",i);let r=s.turnCount+1;return s.turnCount=r,s.turns=Ip([...s.turns,zx(r,Fi(t.turn)?t.turn:r,i)],Fx),s.phase="thinking",Ps(s,i),s}case"step/start":{if(Oo(n)&&n.phase==="thinking")return n;let s={...n};return Cp(s,i,t.turn),s.phase="thinking",Ps(s,i),s}case"llm/retry-started":{let s=n.sample;return s&&s.turn===t.turn&&s.step===t.step?{...n,sample:null}:n}case"assistant/attempt":case"assistant/message":{let s=e.type==="assistant/message",r=Kd(s&&t.usage||V2(t.stream)),o=n;if(s&&(!Oo(n)||n.phase!=="idle")&&(o={...n},Cp(o,i,t.turn),o.phase="idle"),r){let a=o===n?{...n}:o;Y2(a,r,t,i)&&(s&&K2(a,r,t.stream),o=a)}return o!==n&&Ps(o,i),o}case"tool/call":{let s=t.callId??t.id,r=(typeof s=="string"||Fi(s)?String(s):"").slice(0,200)||`call-${Fi(e.seq)?e.seq:n.tools.calls+1}`;if(n.calls.some(f=>f.id===r))return n;let o={...n};Cp(o,i,t.turn);let a=Ri(t.name,80)||"tool",l=sx(a),c=Gd(t.arguments),u=Na.has(l)?ox(a,c):null,d=u?{path:Ri(u.path,400),added:Dx(u.added),removed:Dx(u.removed)}:null,h={id:r,name:a,kind:l,label:rx(a,c),turn:th(o).no,startedAt:i,endedAt:0,status:"running",change:d&&d.path?d:null};return o.calls=Lp(o.calls,h,D2),o.tools={...o.tools,calls:o.tools.calls+1,running:o.tools.running+1,byKind:{...o.tools.byKind,[l]:(o.tools.byKind[l]||0)+1}},o.turns=Bx(o.turns,f=>({...f,calls:f.calls+1})),o.phase="tool",a==="send_message"&&j2(o,c.agent,i),Ps(o,i),o}case"tool/result":{let s=Qr(t.message)||{},r=String(s.toolCallId??t.callId??""),o=n.calls.findIndex(h=>h.id===r);if(o<0||n.calls[o].status!=="running")return n;let a={...n},l=!!t.error||s.isError===!0,c={...a.calls[o],status:l?"error":"ok",endedAt:i};a.calls=rc(a.calls,o,c);let u=Math.max(0,a.tools.running-1);a.tools={...a.tools,running:u,errors:a.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=a.files.paths.includes(d.path);a.files={count:a.files.count+(h?0:1),added:a.files.added+d.added,removed:a.files.removed+d.removed,paths:h?a.files.paths:Ip([...a.files.paths,d.path],N2)}}return(l||d)&&(a.turns=a.turns.map(h=>{if(h.no!==c.turn)return h;let f=l?{...h,errors:h.errors+1}:h;return d?G2(f,d):f})),u===0&&a.phase==="tool"&&(a.phase="thinking"),Ps(a,i),a}case"turn/end":{let s=Qr(t.reason)?t.reason.kind:void 0;if(!Oo(n)&&n.phase==="idle")return n;let r={...n};return Nx(r,Q2.has(s)?"rework":"ok",i),r.phase="idle",Ps(r,i),r}case"subagent/catalog":{let s=Ri(t.childId,200);if(!s)return n;let r=Ri(t.name,80),o=Ri(t.label,80),a=Ri(t.mode,20),l=n.agents.findIndex(u=>u.id===s);if(l>=0){let u=n.agents[l];return Qd(n,l,{name:r||u.name,label:o||u.label,mode:a||u.mode})}let c=kx(t.childCreatedAt);return Ox(n,{id:s,name:r,label:o||r||"subagent",mode:a,startedAt:Number.isFinite(c)?c:i},i)}case"user/message":{let s=Qr(t.source);return!s||s.kind!=="subagent-settled"?n:J2(n,Ri(s.senderSessionId,200),Pp(s.stopReason),i)}case"tool-workflow/run-start":{let s=Ri(t.runId,120);if(!s||n.workflows.some(a=>a.runId===s))return n;let r={...n},o={runId:s,name:Ri(t.name,80)||"workflow",status:"running",startedAt:i,endedAt:0,agents:0,done:0,failed:0,phase:""};return r.workflows=Lp(r.workflows,o,F2),Ps(r,i),r}case"tool-workflow/agent-start":{let s=Ri(t.runId,120);if(!s)return n;let r=Fi(t.seq)?t.seq:-1,o=Ri(t.childId,200)||`${s}#${r}`,a=Ri(t.label,80)||"agent",l=Ri(t.phase,60),c=n.agents.findIndex(d=>d.id===o),u=c>=0?Qd(n,c,{kind:"workflow",runId:s,seq:r,phase:l,label:a}):Ox(n,{id:o,label:a,kind:"workflow",runId:s,seq:r,phase:l},i);return c<0?u=jd(u,s,d=>({...d,agents:d.agents+1,phase:l||d.phase})):l&&(u=jd(u,s,d=>d.phase===l?d:{...d,phase:l})),u}case"tool-workflow/agent-end":{let s=Ri(t.runId,120),r=Fi(t.seq)?t.seq:-1,o=n.agents.findIndex(c=>c.runId===s&&c.seq===r);if(o<0||n.agents[o].status!=="running")return n;let a=Pp(t.outcome==="failed"?"error":t.outcome),l=Qd(n,o,{status:a,endedAt:i});return l=jd(l,s,c=>({...c,done:c.done+(a==="done"?1:0),failed:c.failed+(a==="error"?1:0)})),l!==n&&Ps(l,i),l}case"tool-workflow/run-end":{let s=Ri(t.runId,120),r=jd(n,s,o=>o.status!=="running"?o:{...o,status:Pp(t.stopReason),endedAt:i});return r.agents.some(o=>o.runId===s&&o.status==="running")&&(r===n&&(r={...n}),r.agents=r.agents.map(o=>o.runId===s&&o.status==="running"?{...o,status:"stopped",endedAt:i}:o)),r!==n&&Ps(r,i),r}default:return n}}function Dp(n,e){let t=n;for(let i of e)t=eT(t,i);return t}function nh(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output,r=n.turns.filter(a=>a.status!=="running"),o=n.tools.calls-n.tools.running;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:o>0?(o-n.tools.errors)/o:1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:r.length?r.filter(a=>a.status==="ok").length/r.length:1,decodeRate:n.speed&&n.speed.decodeMs>0?n.speed.decodeTokens/(n.speed.decodeMs/1e3):0}}var _t={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},sh={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:_t.violet},reasoning:{zh:"推理",en:"REASONING",color:_t.violet},generating:{zh:"生成",en:"GENERATING",color:_t.cyan},tool:{zh:"工具",en:"TOOL CALL",color:_t.amber}},Np=Nd(),Hx=120,Gx=90,tT=[20,50,100,150,200,300,500,1e3,2e3],nT=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],Vx=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function ac(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function Op(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function Wx(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Vt}`,n.fillStyle=_t.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Tt}`,n.fillStyle=_t.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Tt}`,n.fillStyle=o||_t.muted,n.fillText(r,e-36,39))}function Sr(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Vt}`,n.fillStyle=_t.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Tt}`,n.fillStyle=_t.dim,r==="left"&&n.fillText(s,e+a,t)}function Xx(n,e,t,i,s,r=96,o="",a=_t.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Tt}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Tt}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function qx(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Tt}`,n.fillStyle=_t.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),f=x=>t+s-s*st(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),f(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let p=n.createLinearGradient(0,t,0,t+s);p.addColorStop(0,a),p.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=p,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),f(r[x])):n.moveTo(h(x),f(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function ih(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),Sr(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Tt}`,n.fillStyle=_t.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Tt}`,n.fillStyle=_t.muted,n.fillText(l,e+20,t+s-14))}function iT(n,e,t,i){ac(n,e,t);let s=sh[i.phase]||sh.idle;Wx(n,e,"令牌流量","TOKEN FLOW",_t.cyan,`● ${s.zh} ${s.en}`,s.color),Sr(n,36,122,"实时速率","LIVE RATE"),Xx(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",_t.cyan,104,"tok/s"),Sr(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Tt}`,n.fillStyle=_t.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=Vx(Math.max(20,...i.tpsHist)*1.15,tT);qx(n,470,104,e-470-40,236,i.tpsHist,{color:_t.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Tt}`,n.fillStyle=_t.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;ih(n,36,a,o,l,"输入","INPUT",on(c.miss+c.write),"未命中缓存 · MISS",_t.blue),ih(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",on(c.hit),`命中率 ${cs(i.hitRate)}`,_t.green),ih(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",on(c.output),`请求 ${c.requests}`,_t.cyan),ih(n,36+(o+16)*3,a,o,l,"推理","REASONING",on(c.reasoning),"思考链 · THINKING",_t.violet),Op(n,e,t,_t.cyan)}function oc(n,e,t,i,s,r,o,a,l){Sr(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Tt}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Tt}`,n.fillStyle=_t.muted,n.fillText(a,e,t+112))}function sT(n,e,t,i){ac(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,_t.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Vt}`,n.fillStyle=_t.text,n.shadowColor=_t.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Tt}`,n.fillStyle=_t.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${Vt}`;let b=n.measureText(_).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,b,40),n.strokeStyle=_t.amber,n.lineWidth=2,n.strokeRect(y+1,29,b-2,38),n.fillStyle=_t.amber,n.fillText(_,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Tt}`,n.fillStyle=_t.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=sh[i.phase]||sh.idle,a=(e-80)/5,l=148;oc(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),oc(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,_t.text),oc(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${cs(i.toolSuccess)}`,_t.cyan),oc(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,_t.gold),oc(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,_t.blue);let c=330;Sr(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,f=116,p=c+22,x=i.recent.slice(-u),m=u-x.length;for(let _=0;_<u;_++){let b=40+_*(h+d),y=x[_-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,p+1,h-2,f-2);continue}let M=y.status==="running"?_t.cyan:y.status==="error"?_t.red:Na.has(y.kind)?_t.gold:_t.blue,w=n.createLinearGradient(0,p,0,p+f);w.addColorStop(0,M),w.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=w,n.fillRect(b,p,h,f),n.globalAlpha=1,n.fillStyle=M,n.fillRect(b,p+f-6,h,6);let v=vi[y.kind]||vi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Tt}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),b+h/2,p+f/2-6)}let g=x[x.length-1];if(g){let _=vi[g.kind]||vi.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Vt}`,n.fillStyle=_t.text;let y=String(g.label||g.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${y}`,40,p+f+52),n.textAlign="right",n.font=`700 22px ${Tt}`,n.fillStyle=g.status==="running"?_t.cyan:g.status==="error"?_t.red:_t.green,n.fillText(b,e-40,p+f+52)}Op(n,e,t,_t.cyan)}function rT(n,e,t,i){ac(n,e,t),Wx(n,e,"成本与上下文","COST & CONTEXT",_t.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?_t.amber:_t.green),Sr(n,36,122,"累计花费","TOTAL COST"),Xx(n,36,226,i.priced?Tn(i.cost):"—",_t.gold,90),n.font=`600 22px ${Tt}`,n.fillStyle=_t.muted,n.textAlign="left",n.fillText(`高峰 ${Tn(i.costPeak)} · 低谷 ${Tn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=Vx(Math.max(.01,...i.costHist)*1.15,nT);qx(n,480,104,e-480-40,200,i.costHist,{color:_t.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>Tn(d)}),n.font=`600 17px ${Tt}`,n.fillStyle=_t.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;Sr(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Tt}`,n.fillStyle=_t.text,n.fillText(i.window?`${on(i.ctx)} / ${on(i.window)} · ${cs(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?_t.red:i.ratio>=.6?_t.amber:_t.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*st(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;Sr(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Tt}`,n.fillStyle=_t.green,n.fillText(i.priced?Tn(i.savings):"—",330,u+2),Sr(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Tt}`,n.fillStyle=_t.text,n.fillText(cs(i.hitRate),e-36,u+2),Op(n,e,t,_t.gold)}var oT={flow:iT,main:sT,cost:rT};function $x(n,e,{demo:t=!1}={}){let i=!!t,s=new jt;s.name="screens";let r=[],o=new Mt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),a=rt.screenR;for(let y of Np){let[M,w]=y.px,v=Ot(M,w,(k,H,N)=>ac(k,H,N),{anisotropy:8}),S=new zt({map:v.tex,name:`screen-${y.id}`,toneMapped:!1});S.color.setScalar(1.25);let T=new nt(Wt(qe.cx,qe.cz,a,y.a0,y.a1,y.y0,y.y1,48,!0),S);T.name=`screen-${y.id}`,T.userData.screenId=y.id,s.add(T);let R=.05/a,D=new nt(Wt(qe.cx,qe.cz,a+.015,y.a0-R,y.a1+R,y.y0-.05,y.y1+.05,48,!0),o);D.name=`screen-bezel-${y.id}`,D.layers.set(hn),s.add(D),T.userData.noHighlight=!0,r.push({def:y,tex:v,sig:"",draw:oT[y.id],panel:T,scale:1})}let l=null,c=(y,M)=>y.tex.redraw(w=>{y.scale!==1&&w.scale(y.scale,y.scale),y.draw(w,y.def.px[0],y.def.px[1],M)}),u=new Array(Hx).fill(0),d=new Array(Gx).fill(0),h=0,f=0,p=0,x=0,m=0,g=!1;function _(y){let M=y.state,w=y.live||{},v=y.phase||(w.phase&&w.phase!=="idle"?w.phase:M?M.phase:"idle"),S=M?M.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},T=M?nh(M):{hitRate:0,toolSuccess:1,contextRatio:0},R=M?M.turns:[];return{demo:i,phase:v,tps:y.tps||0,peakTps:x,tpsHist:u,costHist:d,totals:S,hitRate:T.hitRate,toolSuccess:T.toolSuccess,model:M?M.model:"",effort:M?M.effort:"",turn:M?M.turnCount:0,ok:R.filter(D=>D.status==="ok").length,rework:R.filter(D=>D.status==="rework").length,calls:M?M.tools.calls:0,running:M?M.tools.running:0,files:M?M.files.count:0,added:M?M.files.added:0,removed:M?M.files.removed:0,requests:S.requests,recent:M?M.calls:[],peak:!!y.peak,priced:!M||!M.model||!!js(M.provider,M.model),cost:S.cost,costPeak:S.costPeak,costOff:S.costOffPeak,savings:S.savings,ctx:M?M.contextTokens:0,window:M?M.contextWindow:0,ratio:T.contextRatio||0}}function b(y,M){if(y==="flow"){let w=M.totals;return`${M.phase}|${Math.round(M.tps*2)}|${w.miss+w.write}|${w.hit}|${w.output}|${w.reasoning}|${w.requests}|${m>0?h:"flat"}|${Math.round(M.peakTps)}`}if(y==="main"){let w=M.recent[M.recent.length-1];return`${M.demo}|${M.model}|${M.effort}|${M.phase}|${M.turn}|${M.ok}|${M.rework}|${M.calls}|${M.running}|${M.files}|${M.added}|${M.removed}|${M.requests}|${M.recent.length}|${w?`${w.id}:${w.status}`:""}|${Math.round(M.toolSuccess*1e3)}`}return`${M.cost.toFixed(5)}|${M.costPeak.toFixed(5)}|${M.savings.toFixed(5)}|${M.ctx}|${M.window}|${M.peak}|${M.requests}|${d[Gx-1].toFixed(5)}|${Math.round(M.hitRate*1e3)}`}return{root:s,update(y,M,w){h+=y,f+=y,p+=y;let v=w.tps||0;x=Math.max(x,v),h>=.5&&(h=0,u.shift(),u.push(v),m=v>.5?Hx:Math.max(0,m-1));let S=w.state?w.state.totals.cost:0;if(!g&&w.state&&(d.fill(S),g=!0),f>=2&&(f=0,d.shift(),d.push(S)),p<.5)return;p=0;let T=_(w);l=T;for(let R of r){let D=b(R.def.id,T);D!==R.sig&&(R.sig=D,c(R,T))}},hover:r.map(y=>({id:`screen:${y.def.id}`,object:y.panel})),setDetail(y,M=2){for(let w of r){let v=w.def.id===y?M:1;if(v===w.scale)continue;let[S,T]=w.def.px,R=w.tex;w.scale=v,w.tex=Ot(S*v,T*v,D=>{D.scale(v,v),ac(D,S,T)},{anisotropy:8}),w.panel.material.map=w.tex.tex,w.sig="",l&&(w.sig=b(w.def.id,l),c(w,l)),R.tex.dispose()}},setDemo(y){i=!!y;for(let M of r)M.sig=""},reset(){u.fill(0),d.fill(0),x=0,m=0,g=!1;for(let y of r)y.sig=""}}}var eo=16,aT=.004,Up=.06,rh=new ze(4164863),Yx=new ze(4641535),Kx=new ze(16762218),lT=`
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
}`,cT=`
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
}`;function uT(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=Up/2,f=r[0]-u*(s===0?0:h),p=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(Up/2),_=u*(Up/2),b=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),M=[[f-g,p-_,b,-1],[f+g,p+_,b,1],[x+g,m+_,y,1],[x-g,m-_,y,-1]];for(let w of[0,1,2,0,2,3]){let v=M[w];t.pos.push(v[0],aT,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var Zx=n=>[n.x,n.z];function Jx(){let n={},e=[],t=[],i=(m,g,_)=>{n[m]=t.length,e.push(g),t.push(_)},s=[As.x,As.z],r=(m,g,_)=>[Zx(Oi(m,g)),Zx(Oi(m,_))];i("fuel",Yx,[[-7.45,-.7],[-4.6,-.7]]),i("feed",rh,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,rh,r(mp(m),.95,2.12));i("lock",Yx,r(Lo,.95,2.1)),i("unload",Kx,r(Fa,.95,2.1)),i("out",Kx,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Dt;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",rh,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>uT(m,g,a));let l=new qt;l.setAttribute("position",new pt(a.pos,3)),l.setAttribute("aS",new pt(a.s,1)),l.setAttribute("aX",new pt(a.x,1)),l.setAttribute("aChan",new pt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(eo),u=new Float32Array(eo),d=new Float32Array(eo),h=new Float32Array(eo),f=[];for(let m=0;m<eo;m++)f.push((e[m]||rh).clone());let p=new ln({name:"floor-channels",vertexShader:lT,fragmentShader:cT,uniforms:bd.merge([et.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:f}}]),transparent:!0,blending:Ta,blendSrc:zr,blendDst:Hr,blendSrcAlpha:Iu,blendDstAlpha:zr,depthWrite:!1,fog:!0});p.uniforms.uLevel.value=c,p.uniforms.uOffset.value=u,p.uniforms.uColor.value=f;let x=new nt(l,p);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(hn),d.fill(.8),{root:x,ids:n,set(m,g,_){let b=n[m];b!=null&&(h[b]=g,_!=null&&(d[b]=_))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var Fp=new P(qe.cx,0,qe.cz-17),Yi={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},Ut=Yi.h,dT=[{id:"sofa",pose:"sit",p:[-1.2,Ut+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,Ut+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,Ut+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,Ut+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,Ut,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,Ut,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function hT(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function fT(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Dt),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Dt;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Dt),n.fill()}}function pT(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${Vt}`,n.textBaseline="top",n.fillText(`${Kt.living.code} · ${Kt.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${Vt}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${Tt}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function jx(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function lc(n,e,t,i,s,r=0){let o=new jt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new nt(new en(e,t,i),Qx);return a.position.y=t/2,o.add(a),o}var Qx=new zt({visible:!1});function ey(n){let e=new jt;e.name="living",e.position.copy(Fp);let t=Ot(512,512,hT,{repeat:[3,2],anisotropy:8}),i=Ot(512,512,fT,{anisotropy:8}),s={wood:new Mt({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new Mt({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new Mt({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new Mt({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new Mt({name:"living-rug",map:i.tex,roughness:1}),leaf:new Mt({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new Mt({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new Mt({name:"living-soil",color:3811870,roughness:1}),sand:new Mt({name:"living-sand",color:14272931,roughness:.95}),rice:new Mt({name:"living-rice",color:16513264,roughness:.7}),eye:new Mt({name:"living-eye",color:1118999,roughness:.3}),bookA:new Mt({name:"living-book-a",color:4020904,roughness:.7}),bookB:new Mt({name:"living-book-b",color:13137466,roughness:.7}),bookC:new Mt({name:"living-book-c",color:15327951,roughness:.7}),bookD:new Mt({name:"living-book-d",color:3111538,roughness:.7}),warm:ap(16766624,2.8),cyan:ap(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new ct,o=(O,$,ce=[0,0,0],Z=[0,0,0],ge=[1,1,1])=>r.add(O,L($,ce,Z,ge)),a=Yi.x1-Yi.x0,l=Yi.z1-Yi.z0;o("wood",Le(a,Yi.h,l,.02,2),[0,Yi.h/2,0]),o("warm",Ae(a-.1,.006,.012),[0,.004,Yi.z0-.004]),o("warm",Ae(a-.1,.006,.012),[0,.004,Yi.z1+.004]),o("rug",new En(1.85,64),[-1.2,Ut+.004,-.35],[-Math.PI/2,0,0]);{let O=[-1.2,Ut,.9],$=(Z,ge,Me)=>[O[0]+Z,O[1]+ge,O[2]+Me];o("fabric",Le(3,.28,.95,.08,3),$(0,.22,0));for(let Z of[-1,0,1])o("fabric",Le(.97,.16,.8,.07,3),$(Z,.44,-.06)),o("fabric",Le(.97,.44,.2,.09,3),$(Z,.68,.36),[-.14,0,0]);for(let Z of[-1.6,1.6])o("fabric",Le(.2,.5,.95,.08,3),$(Z,.33,0));o("fabricBlue",Le(.5,.36,.14,.06,3),$(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Le(.5,.36,.14,.06,3),$(.35,.66,.2),[-.3,-.2,0]);for(let Z of[-1.42,1.42])for(let ge of[-.38,.38])o("chrome",ae(.025,.02,.08,10),$(Z,.04,ge));o("warm",Ae(2.7,.004,.7),$(0,.002,0));let ce=$(.92,.6,-.05);o("blue",Di(1,20,14),ce,[0,.3,0],[.24,.17,.16]),o("white",Di(1,16,10),[ce[0]+.02,ce[1]-.05,ce[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",Di(1,12,8),[ce[0]-.26,ce[1]+.07,ce[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",Di(1,10,8),[ce[0]+.05,ce[1]-.02,ce[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",Di(.016,10,8),[ce[0]+.16,ce[1]+.03,ce[2]-.12]),o("eye",Di(.016,10,8),[ce[0]+.2,ce[1]+.03,ce[2]+.03])}{let O=[-1.2,Ut,-.7];o("white",ae(.52,.52,.035,48),[O[0],O[1]+.4,O[2]]),o("chrome",ae(.05,.08,.36,20),[O[0],O[1]+.2,O[2]]),o("chrome",ae(.28,.3,.025,32),[O[0],O[1]+.012,O[2]]);let $=[O[0]+.16,O[1]+.418,O[2]+.08];o("white",ci([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),$),o("rice",Di(1,20,10),[$[0],$[1]+.05,$[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Ae(.22,.008,.008),[$[0]+.02,$[1]+.08,$[2]-.02],[0,.3,.12]),o("woodDark",Ae(.22,.008,.008),[$[0]+.02,$[1]+.08,$[2]+.01],[0,.2,.12]),o("blue",ae(.038,.034,.09,20),[O[0]-.22,O[1]+.462,O[2]-.12])}{let O=[-3.15,Ut,1.45];o("chrome",ae(.2,.22,.04,32),[O[0],O[1]+.02,O[2]]),r.add("chrome",ui([[O[0],O[1]+.04,O[2]],[O[0],O[1]+1.95,O[2]],[-2.3,Ut+2.3,1.05],[-1.7,Ut+2.05,.6]],.016,.35,10)),o("white",new On(.24,28,12,0,Dt,0,Math.PI/2),[-1.7,Ut+1.86,.6]),o("warm",new En(.21,28),[-1.7,Ut+1.862,.6],[Math.PI/2,0,0])}{for(let Me of[-3.35,.95])for(let ne of[-2,2])o("white",Le(.09,3,.09,.02),[Me,Ut+3/2,ne]);for(let Me of[-2,2])o("white",Le(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,Ut+3,Me]);for(let Me of[-3.35,.95])o("white",Le(.1,.1,4,.02),[Me,Ut+3,0]);for(let Me=1;Me<6;Me++){let ne=-3.35+4.3*Me/6;o("alu",Ae(.05,.06,4-.1),[ne,Ut+3+.02,0])}for(let Me of[-2+.06,2-.06])o("warm",Ae(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,Ut+3-.056,Me])}{let O=[3.35,Ut,1.6],$=(Z,ge,Me)=>[O[0]+Z,O[1]+ge,O[2]+Me];o("white",Le(2.3,.26,1.4,.1,3),$(0,.23,0)),o("warm",Ae(2.1,.004,1.2),$(0,.002,0)),o("fabric",Le(2.12,.17,1.26,.07,3),$(0,.44,0)),o("fabricBlue",Le(1.3,.05,1.28,.03,2),$(.36,.535,0)),o("fabric",Le(.44,.11,.82,.05,3),$(-.78,.58,0)),o("white",Le(.09,.56,1.36,.03,2),$(-1.13,.64,0));let ce=new Fn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",ce,$(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Ae(.03,.012,1.22),$(-.45,.36+.725,0))}{o("white",Le(1.85,.86,.62,.03,2),[-3.8,Ut+.45,2.62]),o("graphite",Ae(1.8,.06,.56),[-3.8,Ut+.03,2.62+.02]),o("wood",Le(1.92,.045,.68,.015,2),[-3.8,Ut+.905,2.62]),o("ceramic",Le(.7,1.95,.64,.04,2),[-2.5,Ut+.975,2.62]),o("chrome",Ae(.02,.6,.03),[-2.2,Ut+1.2,2.62-.33]),o("wood",Ae(1.8,.04,.28),[-3.8,Ut+1.72,2.62+.17]);for(let[ce,Z,ge]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(ge,ae(.06,.06,Z,18),[ce,Ut+1.74+Z/2,2.62+.17]);o("soil",ae(.08,.06,.12,16),[-3.2,Ut+1.8,2.62+.17]),o("leaf2",Di(.14,12,8),[-3.2,Ut+1.95,2.62+.17],[0,0,0],[1,.8,1]);let $=[-4,Ut+.93,2.62-.04];o("white",ae(.16,.15,.2,36),[$[0],$[1]+.1,$[2]]),o("graphite",ci([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[$[0],$[1]+.2,$[2]]),o("chrome",ae(.012,.012,.02,10),[$[0]+.05,$[1]+.29,$[2]]),o("graphite",Ae(.08,.03,.03),[$[0],$[1]+.29,$[2]-.02]);for(let ce of[-4.4,-3.75])o("fabricBlue",ae(.18,.18,.06,28),[ce,Ut+.66,1.92]),o("chrome",ae(.025,.025,.6,12),[ce,Ut+.33,1.92]),o("chrome",ae(.2,.22,.025,28),[ce,Ut+.012,1.92]),o("chrome",new Ti(.16,.012,8,28),[ce,Ut+.25,1.92],[Math.PI/2,0,0])}let c=Qt(4641535,1.6),u=new nt(Ae(.035,.012,.006),c);u.position.set(-4,Ut+1.07,2.42),e.add(u);{let O=[3.4,Ut,-2.05];o("white",Le(1.6,.04,.72,.015,2),[O[0],O[1]+.74,O[2]]);for(let ce of[-.76,.76])o("white",Le(.04,.72,.64,.015,2),[O[0]+ce,O[1]+.36,O[2]]);o("cyan",Ae(1.5,.006,.012),[O[0],O[1]+.718,O[2]-.35]),o("graphite",Le(.48,.02,.16,.008,2),[O[0]-.1,O[1]+.77,O[2]+.12]),o("chrome",ae(.012,.014,.3,10),[O[0],O[1]+.91,O[2]-.22]),o("chrome",ae(.07,.08,.012,20),[O[0],O[1]+.766,O[2]-.22]);let $=[O[0],O[1],O[2]+.62];o("fabricBlue",Le(.5,.08,.48,.04,2),[$[0],$[1]+.48,$[2]]),o("fabricBlue",Le(.5,.52,.07,.04,2),[$[0],$[1]+.82,$[2]+.24],[.1,0,0]),o("chrome",ae(.025,.025,.4,12),[$[0],$[1]+.24,$[2]]);for(let ce=0;ce<5;ce++){let Z=ce/5*Dt;o("graphite",Ae(.32,.03,.04),[$[0]+Math.cos(Z)*.16,$[1]+.04,$[2]+Math.sin(Z)*.16],[0,-Z,0]),o("rubber",Di(.025,10,8),[$[0]+Math.cos(Z)*.31,$[1]+.025,$[2]+Math.sin(Z)*.31])}}let d=jx(new Date),h=Ot(512,288,(O,$,ce)=>pT(O,$,ce,d),{anisotropy:8}),f=new zt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:tn});f.color.setScalar(1.3);let p=new nt(new vt(.88,.495),f);p.position.set(3.4,Ut+1.3,-2.27),p.rotation.x=-.08,p.renderOrder=3,e.add(p);let x=new P(-4,Ut,-2.05);o("white",ae(.5,.53,.36,48),[x.x,x.y+.18,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+.375,x.z]),o("sand",ae(.44,.44,.07,40),[x.x,x.y+.425,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+1.52,x.z]),o("cyan",new Ti(.47,.008,6,64),[x.x,x.y+.4,x.z],[Math.PI/2,0,0]);for(let[O,$,ce,Z]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(Z,ae(.012,.03,ce,6),[x.x+O,x.y+.46+ce/2,x.z+$],[.15,0,.1]);let m=new nt(ae(.445,.445,1.05,40),new Mt({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(x.x,x.y+.97,x.z),m.renderOrder=1,e.add(m);let g=new nt(ae(.47,.47,1.12,48,!0),n.glass);g.position.set(x.x,x.y+.96,x.z),g.renderOrder=2,e.add(g);let _=(()=>{let O=L(new On(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),$=L(new Ws(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),ce=new qt,Z=[O,$].map(ne=>ne.toNonIndexed()),ge=[],Me=[];for(let ne of Z)ge.push(...ne.attributes.position.array),Me.push(...ne.attributes.normal.array);ce.setAttribute("position",new pt(ge,3)),ce.setAttribute("normal",new pt(Me,3));for(let ne of Z)ne.dispose();return O.dispose(),$.dispose(),ce})(),b=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],y=new Nn(_,new Mt({name:"living-fish",roughness:.4,metalness:.1}),b.length);y.name="aquarium-fish",y.frustumCulled=!1;let M=new ze;b.forEach((O,$)=>y.setColorAt($,M.setHex(O.c))),e.add(y);let w=new bt,v=new un,S=new P,T=new P(1,1,1),R=new Vn;function D(O){b.forEach(($,ce)=>{let Z=$.ph+O*$.s;S.set(x.x+Math.cos(Z)*$.r,x.y+$.y+Math.sin(O*.9+$.ph)*.03,x.z-Math.sin(Z)*$.r),R.set(0,Z+($.s>0?Math.PI/2:-Math.PI/2),Math.sin(O*3+ce)*.08),v.setFromEuler(R),w.compose(S,v,T),y.setMatrixAt(ce,w)}),y.instanceMatrix.needsUpdate=!0}D(0);{let O=[.6,Ut,3.02],$=3.6,ce=.42;o("graphite",Ae($,.9,.03),[O[0],O[1]+.45,O[2]+ce/2-.015]),o("white",Ae($,.04,ce),[O[0],O[1]+.02,O[2]]),o("white",Ae($-.04,.03,ce-.02),[O[0],O[1]+.45,O[2]]),o("white",Le($+.02,.05,ce+.02,.015,2),[O[0],O[1]+.9,O[2]]);for(let ne of[-$/2+.015,-.9,0,.9,$/2-.015])o("white",Ae(.03,.88,ce),[O[0]+ne,O[1]+.45,O[2]]);let Z=["bookA","bookB","bookC","bookD"],ge=[-$/2+.03,-.885,.015,.915],Me=0;for(let ne=0;ne<2;ne++)ge.forEach((ye,De)=>{if((De+ne)%3===2)return;let tt=O[0]+ye+.02,Be=5+(De*3+ne)%5;for(let je=0;je<Be;je++){let Ge=.04+Me*7%5*.008,xe=(ne?.3:.32)-Me*11%4*.025;o(Z[Me%4],Ae(Ge,xe,.24),[tt+Ge/2,O[1]+(ne?.465:.04)+xe/2,O[2]+.02]),tt+=Ge+.004,Me+=1}});o("graphite",Le(.34,.26,.03,.01,2),[O[0]-.9,O[1]+1.055,O[2]+.05]),o("cyan",Ae(.3,.22,.002),[O[0]-.9,O[1]+1.055,O[2]+.034]),o("white",ae(.09,.07,.14,18),[O[0]+1.1,O[1]+.97,O[2]]),o("leaf",Di(.15,12,8),[O[0]+1.1,O[1]+1.15,O[2]],[0,0,0],[1,.9,1])}for(let[O,$,ce]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",ae(.27*ce,.21*ce,.5*ce,28),[O,Ut+.25*ce,$]),o("soil",ae(.25*ce,.25*ce,.02,24),[O,Ut+.49*ce,$]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([ge,Me,ne,ye],De)=>o(De%2?"leaf2":"leaf",Di(ye*ce,12,8),[O+ge*ce,Ut+Me*ce,$+ne*ce],[0,0,0],[1,.85,1])),o("woodDark",ae(.02*ce,.03*ce,.6*ce,6),[O,Ut+.75*ce,$]);let k=[-5.35,0,3.4],H=Math.atan2(-.7,.7);o("white",Le(.5,1.4,.12,.03,2),[k[0],.7,k[2]],[0,H,0]),o("cyan",Ae(.012,1.3,.13),[k[0]+Math.cos(H)*.26,.7,k[2]-Math.sin(H)*.26],[0,H,0]);let N=Kt.living,q=qi(N.zh,N.en,N.code),te=new nt(new vt(.46,.13),kn(q.tex,.2));te.position.set(k[0]+Math.sin(H)*.062,1.12,k[2]+Math.cos(H)*.062),te.rotation.y=H,e.add(te);let Q=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(Q),e.add(lc("bed",2.4,1.15,1.45,[3.35,0,1.6]),lc("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),lc("aquarium",1.08,1.56,1.08,[x.x,0,x.z]),lc("bookshelf",3.62,.95,.46,[.6,0,3.02]),lc("desk",1.62,1.6,.8,[3.4,0,-2.05]));let ee=new nt(new en(Yi.x1-Yi.x0,1.2,Yi.z1-Yi.z0),Qx);ee.position.set(0,.6,0),ee.name="living-hover",e.add(ee);let W=dT.map(O=>{let $=new dn;return $.name=`mascot-anchor:${O.id}`,$.position.fromArray(O.p),$.rotation.y=O.yaw,$.userData={mascotAnchor:O.id,pose:O.pose},e.add($),{id:O.id,pose:O.pose,position:new P().fromArray(O.p).add(Fp),yaw:O.yaw}}),K=0;return{root:e,anchors:W,hover:[{id:"living",object:ee}],labelAnchor:new P(0,3.55,0).add(Fp),update(O,$){if(D($),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin($*1.7)),K-=O,K<=0){K=1;let ce=jx(new Date);ce!==d&&(d=ce,h.redraw())}},dispose(){_.dispose(),y.dispose()}}}var ty=vr.find(n=>n.id==="dock"),Is=new P(ty.c[0],0,ty.c[1]),ki=8,to=1.82,ii=.12,wr=1.3,cc=.24,Ki=.42,mT=.074,no=1.96,gT=2.46,oh=[512,240],ny=1.16,kp=3,Bp={inner:{r:1.1,y:2.66,speed:-.34},outer:{r:1.66,y:3.02,speed:.24}},iy=3.4,xT=2.4,sy=8,Qs=.13,yT=.058,Uo=(n,e)=>new ze(n).multiplyScalar(e),Hn={standby:Uo(3829700,.55),reserved:Uo(4641535,.7),transit:Uo(8363263,2),running:Uo(4641535,2.4),done:Uo(3461498,2.3),error:Uo(16731486,2.3),stopped:Uo(10990018,1.3)},vT=new Set(["done","error","stopped"]),lh=n=>n/ki*Dt+Math.PI/ki;function _T(n,e,t=new P){let i=lh(n);return t.set(Is.x+Math.cos(i)*wr,e,Is.z+Math.sin(i)*wr)}function ah(n){let e=n.map(i=>{let s=i.index?i.toNonIndexed():i;for(let r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&s.deleteAttribute(r);return s});return e.length===1?e[0]:Pd(e,!1)}function bT(){let n=[L(Di(.1,32,16),[0,0,0],[0,0,0],[1,.38,1.2])],e=[],t=[],i=[],s=[];for(let[r,o]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let a=Math.atan2(r,o);e.push(L(Ae(.024,.014,Math.hypot(Qs,Qs)),[r*Qs/2,.004,o*Qs/2],[0,a,0])),t.push(L(ae(.019,.022,.03,20),[r*Qs,.012,o*Qs])),e.push(L(Ae(.13,.003,.012),[r*Qs,.03,o*Qs],[0,a+.6,0])),s.push(new P(r*Qs,.032,o*Qs))}e.push(L(ae(.07,.062,.024,32),[0,-.03,0]));for(let r of[-1,1]){e.push(L(Ae(.012,.01,.2),[r*.062,-.066,0]));for(let o of[-1,1])e.push(L(Ae(.008,.036,.008),[r*.062,-.047,o*.06]))}for(let r of[-1,1])e.push(L(Ae(.056,.012,.014),[0,.04,r*.042]));return i.push(L(Yt(.102,.0042,6,64),[0,-.004,0],[Math.PI/2,0,0],[1,1.2,1])),i.push(L(Ae(.05,.008,.006),[0,.006,.121])),{shell:ah(n),under:ah(e),hub:ah(t),led:ah(i),rotor:L(new En(.075,32),[0,0,0],[-Math.PI/2,0,0]),capGlass:L(new xa(.027,.085,6,16),[0,0,0],[Math.PI/2,0,0]),capCore:L(new xa(.015,.07,4,12),[0,0,0],[Math.PI/2,0,0]),hubs:s}}function MT(){return Ot(64,64,(n,e,t)=>{let i=n.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.3,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(255,255,255,0.45)"),i.addColorStop(.94,"rgba(255,255,255,0.18)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,t),n.fillStyle=i,n.fillRect(0,0,e,t)},{anisotropy:1})}function ST(n,e,t,i){n.clearRect(0,0,e,t),Jl(n,3,3,e-6,t-6,18),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke();let s=Kt.dock;n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Vt}`,n.fillStyle="#86a7c9",n.fillText(`${s.code} · ${s.zh}`,22,40),n.textAlign="right",n.font=`600 18px ${Tt}`,n.fillText("SUBAGENT DOCK",e-22,40),n.textAlign="left";let r=String(i.running);n.font=`700 74px ${Tt}`,n.fillStyle=i.running?"#e8f0ff":"#6f84a3",n.fillText(r,22,122);let o=n.measureText(r).width;n.font=`700 28px ${Vt}`,n.fillStyle=i.running?"#46d2ff":"#7d90ab",n.fillText(i.running?"运行中":"待命",36+o,92),n.font=`600 18px ${Tt}`,n.fillStyle="#9fb7d3",n.fillText(i.running?"AGENTS ACTIVE":"STANDBY",36+o,119),n.textAlign="right",n.font=`700 30px ${Tt}`,n.fillStyle=i.done?"#34d17a":"#5d7391",n.fillText(`✓ ${i.done}`,e-22,86),n.fillStyle=i.failed?"#ff6b7a":"#5d7391",n.fillText(`✗ ${i.failed}`,e-22,122),n.textAlign="left";let a=172;if(i.wf){let{name:l,phase:c,done:u,failed:d,agents:h,status:f}=i.wf,p=`${f==="running"?"▶":"■"} ${l}${c?` · ${c}`:""}`;n.fillStyle="#e8f0ff",Kr(n,p,e-150,23,600,Vt),n.fillText(p,22,a),n.textAlign="right",n.font=`600 22px ${Tt}`,n.fillStyle="#9fb7d3",n.fillText(`${u+d}/${h}`,e-22,a);let x=22,m=a+15,g=e-44,_=10;n.fillStyle="rgba(120, 150, 190, 0.25)",Jl(n,x,m,g,_,5),n.fill();let b=h?st(u/h,0,1):0,y=h?st(d/h,0,1-b):0;b>0&&(n.fillStyle="#34d17a",n.fillRect(x,m,g*b,_)),y>0&&(n.fillStyle="#ff6b7a",n.fillRect(x+g*b,m,g*y,_))}else{let l=i.last?`最近 · ${i.last}`:"暂无子智能体任务 · NO AGENTS YET";n.fillStyle=i.last?"#c9d6ea":"#7d90ab",Kr(n,l,e-44,23,600,Vt),n.fillText(l,22,a)}i.overflow>0&&(n.textAlign="right",n.font=`700 20px ${Tt}`,n.fillStyle="#ffc65c",n.fillText(`+${i.overflow} 排队 QUEUED`,e-22,t-18))}function wT(n,e){let t=new ct;t.add("rubber",L(ae(to-.05,to-.05,.02,96),[0,.01,0])),t.add("white",ci([[.001,.02],[to-.02,.02],[to,.04],[to,ii-.025],[to-.025,ii],[.001,ii]],128)),t.add("plastic",L(ae(.62,.62,.006,72),[0,ii+.003,0])),t.add("chrome",L(Yt(.62,.005,8,112),[0,ii+.003,0],[Math.PI/2,0,0]));for(let d=0;d<ki;d++){let h=lh(d),f=Math.atan2(Math.cos(h),Math.sin(h)),p=(x,m)=>[Math.cos(h)*x,m,Math.sin(h)*x];t.add("plastic",L(Ae(.012,.004,.36),p(.83,ii+.002),[0,f,0])),t.add("graphite",L(ae(.05,.065,Ki-ii-.03,24),p(wr,(ii+Ki-.03)/2))),t.add("white",L(ci([[.001,Ki-.035],[cc-.012,Ki-.035],[cc,Ki-.024],[cc,Ki-.008],[cc-.012,Ki],[.001,Ki]],48),p(wr,0))),t.add("plastic",L(ae(.15,.15,.003,40),p(wr,Ki+.0015))),t.add("chrome",L(Yt(.15,.003,6,48),p(wr,Ki+.002),[Math.PI/2,0,0]));for(let x of[-1,1]){let m=[-Math.sin(h)*.062*x,0,Math.cos(h)*.062*x],g=p(wr,Ki+.005);t.add("chrome",L(ae(.012,.012,.008,12),[g[0]+m[0],g[1],g[2]+m[2]]))}}t.add("white",ci([[.001,ii],[.24,ii],[.24,ii+.05],[.2,ii+.075],[.095,ii+.11],[.085,1],[.072,no-.09],[.11,no-.05],[.11,no],[.001,no]],64)),t.add("chrome",L(Yt(.24,.005,8,72),[0,ii+.05,0],[Math.PI/2,0,0])),t.add("graphite",L(ae(.091,.093,.16,48),[0,.86,0])),t.add("chrome",L(Yt(.112,.006,8,64),[0,no-.05,0],[Math.PI/2,0,0])),t.add("glass",L(ae(.07,.07,.02,40),[0,no+.01,0]));let i=to-.2;t.add("white",L(Le(.52,.26,.14,.03,2),[0,ii+.13,i],[-.32,0,0])),t.add("graphite",L(Ae(.4,.08,.1),[0,ii+.04,i-.01]));let s=t.build(n,{name:"dock-deck"}),r=new ct;r.add("led",L(Yt(to-.035,.005,6,192),[0,ii+.001,0],[Math.PI/2,0,0])),r.add("led",L(ae(.086,.086,.03,48,!0),[0,1.42,0])),r.add("led",L(ae(.06,.06,.012,32),[0,no+.002,0]));let o=r.build({led:e},{name:"dock-glow",castShadow:!1}),a=qi(Kt.dock.zh,Kt.dock.en,Kt.dock.code,"#2fa8d8"),l=new nt(new vt(.44,.124),kn(a.tex,.2)),c=.32,u=.072;return l.position.set(0,ii+.13+Math.sin(c)*u,i+Math.cos(c)*u),l.rotation.x=-c,l.name="dock-plate",{deck:s,glowMesh:o,plateMesh:l,plate:a}}function Fo(n,e,t,i){let s=new Nn(n,e,t);return s.name=i,s.instanceMatrix.setUsage(vd),s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,s}function ry(n,{pickup:e=null}={}){let t=new jt;t.name="dock",t.position.copy(Is);let i=Qt(4641535,2),{deck:s,glowMesh:r,plateMesh:o,plate:a}=wT(n,i),l=new jt;l.name="dock-base",l.userData.solid="dock",l.add(s,r,o),t.add(l);let c=new zt({color:16777215,toneMapped:!1}),u=new Nn(L(Yt(.205,.0065,6,64),[0,0,0],[Math.PI/2,0,0]),c,ki);u.name="dock-pad-leds",u.castShadow=!1;let d=new bt;for(let A=0;A<ki;A++){let Y=lh(A);d.makeTranslation(Math.cos(Y)*wr,Ki+.004,Math.sin(Y)*wr),u.setMatrixAt(A,d),u.setColorAt(A,Hn.standby)}t.add(u);let h=Ot(oh[0],oh[1],null,{anisotropy:8}),f=new zt({map:h.tex,transparent:!0,depthWrite:!1,side:tn,name:"dock-holo"});f.color.setScalar(1.25);let p=new nt(new vt(ny,ny*oh[1]/oh[0]),f);p.position.set(0,gT,0),p.renderOrder=3,p.name="dock-holo",t.add(p);let x=bT(),m=MT(),g={rotor:new zt({color:15134197,map:m.tex,transparent:!0,opacity:.55,depthWrite:!1,side:tn}),led:new zt({color:16777215,toneMapped:!1}),capGlass:Ms({color:14674421,opacity:.16,fresnel:.6}),capCore:new zt({color:16777215,toneMapped:!1})},_=new jt;_.name="dock-drones";let b={shell:Fo(x.shell,n.white,ki,"drone-shell"),under:Fo(x.under,n.graphite,ki,"drone-frame"),hub:Fo(x.hub,n.chrome,ki,"drone-hubs"),led:Fo(x.led,g.led,ki,"drone-leds"),rotor:Fo(x.rotor,g.rotor,ki*4,"drone-rotors"),capGlass:Fo(x.capGlass,g.capGlass,ki,"drone-capsule"),capCore:Fo(x.capCore,g.capCore,ki,"drone-capsule-core")};b.rotor.renderOrder=2,b.capGlass.renderOrder=2;for(let A of Object.values(b))_.add(A);let y=new P(Is.x,no+.03,Is.z),M=new Float32Array(ki*6),w=new qt;w.setAttribute("position",new Qn(M,3).setUsage(vd));let v=new Nr({color:Hn.running.clone().multiplyScalar(.7),transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),S=new go(w,v);S.name="dock-links",S.frustumCulled=!1,_.add(S);let T=Array.from({length:ki},(A,Y)=>{let he=_T(Y,Ki+mT),I=lh(Y);return{i:Y,park:he,parkYaw:Math.atan2(Math.cos(I),Math.sin(I)),mode:"docked",t:0,agent:null,status:null,order:0,viaPickup:!1,snap:!1,p:he.clone(),v:new P,acc:new P,target:new P,tv:new P,orbit:null,yaw:Math.atan2(Math.cos(I),Math.sin(I)),pitch:0,roll:0,spin:0,carry:0,carryTo:0,flash:0,capColor:Hn.running.clone(),freeSince:-Y,landedAt:0}}),R=new nt(new Fn(1.9,1.9,3.5,24),new zt({visible:!1}));R.position.set(0,1.75,0),R.name="dock-hover",t.add(R);let D=!0,k=0,H=0,N=0,q=[],te=[],Q="",ee=1,W={inner:0,outer:.7};function K(){let A=null;for(let Y of T)Y.mode==="docked"&&(!A||Y.freeSince<A.freeSince)&&(A=Y);if(A)return A;for(let Y of T)Y.mode==="result"&&(!A||Y.landedAt<A.landedAt)&&(A=Y);return A}function O(A,Y,he){A.agent={id:Y.id,label:Y.label||Y.name||"",kind:Y.kind,runId:Y.runId||""},A.status="running",A.order=++H,A.capColor.copy(Hn.running),A.t=0,he?(A.mode="work",A.snap=!0,A.carry=A.carryTo=1,A.spin=1):(A.mode="launch",A.viaPickup=!!e,A.carryTo=e?0:1,e||(A.carry=0))}function $(A,Y,he){if(A.status=vT.has(Y)?Y:"done",A.capColor.copy(Hn[A.status]),A.t=0,he){Z(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.spin=0;return}A.carryTo=1,A.mode=A.mode==="launch"&&A.p.y<A.park.y+.3?"land":"return"}function ce(A){A.status="running",A.capColor.copy(Hn.running),A.carryTo=1,A.viaPickup=!1,A.t=0,A.mode=A.mode==="return"?"toWork":"launch"}function Z(A){A.mode="docked",A.agent=null,A.status=null,A.carry=A.carryTo=0,A.freeSince=k}function ge(A,Y){q=Array.isArray(A)?A:[],te=Array.isArray(Y)?Y:[];let he=D;D=!1;let I=new Map(q.map(E=>[E.id,E]));for(let E of T){if(!E.agent)continue;let V=I.get(E.agent.id);if(V&&V.status==="running"){E.agent.label=V.label||V.name||E.agent.label,E.status!=="running"&&ce(E);continue}E.status==="running"&&$(E,V?V.status:"done",he)}Me(he)}function Me(A){let Y=new Set;for(let he of T)he.agent&&he.status==="running"&&Y.add(he.agent.id);N=0;for(let he of q){if(!he||he.status!=="running"||Y.has(he.id))continue;let I=K();if(!I){N+=1;continue}I.agent&&Z(I),O(I,he,A),Y.add(he.id)}}function ne(){for(let A of T)Z(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.pitch=A.roll=0,A.spin=0,A.flash=0,A.landedAt=0,A.freeSince=-A.i;D=!0,N=0,q=[],te=[],ee=1}function ye(){let A=0,Y=0,he=0,I=0;for(let pe of q)pe.status==="running"?A+=1:pe.status==="done"?Y+=1:pe.status==="error"?he+=1:pe.status==="stopped"&&(I+=1);let E=null;for(let pe=te.length-1;pe>=0;pe--){let me=te[pe];if(me.status==="running"){E=me;break}E||(E=me)}let V="";for(let pe=q.length-1;pe>=0&&!V;pe--)q[pe].status==="running"&&(V=q[pe].label||q[pe].name||"");if(!V&&q.length){let pe=q[q.length-1];V=pe.label||pe.name||""}return{running:A,done:Y,failed:he,stopped:I,overflow:N,wf:E,last:V}}function De(){let A=ye(),Y=A.wf,he=`${A.running}|${A.done}|${A.failed}|${A.overflow}|${A.last}|${Y?`${Y.runId}:${Y.status}:${Y.phase}:${Y.done}:${Y.failed}:${Y.agents}`:""}`;he!==Q&&(Q=he,h.redraw((I,E,V)=>ST(I,E,V,A)))}let tt=new P,Be=new P,je=new P;function Ge(A){for(let Y of["inner","outer"]){let he=Bp[Y],I=T.filter(V=>(V.mode==="work"||V.mode==="toWork")&&(V.agent&&V.agent.kind==="workflow"?"inner":"outer")===Y).sort((V,pe)=>V.agent.runId===pe.agent.runId?V.order-pe.order:V.agent.runId<pe.agent.runId?-1:1),E=I.length;I.forEach((V,pe)=>{let me=W[Y]+Dt*pe/Math.max(1,E),ke=A*1.5+V.i*1.7,Ve=he.y+(pe%2?.12:0)+.05*Math.sin(ke);V.orbit=V.orbit||new P,V.orbit.set(Is.x+Math.cos(me)*he.r,Ve,Is.z+Math.sin(me)*he.r),V.tv.set(-Math.sin(me)*he.r*he.speed,.075*Math.cos(ke),Math.cos(me)*he.r*he.speed)})}}function xe(A,Y,he){let I=Math.max(1,Math.ceil(Y/.02)),E=Y/I;A.acc.set(0,0,0);for(let V=0;V<I;V++){Be.subVectors(A.tv,A.v).multiplyScalar(2*he),tt.subVectors(A.target,A.p).multiplyScalar(he*he).add(Be),A.v.addScaledVector(tt,E);let pe=A.v.length();pe>iy&&A.v.multiplyScalar(iy/pe),A.p.addScaledVector(A.v,E),A.acc.add(tt)}A.acc.multiplyScalar(1/I)}function G(A,Y,he){A.t+=Y;let I=2.6;switch(A.mode!=="work"&&A.mode!=="toWork"&&A.tv.set(0,0,0),A.mode){case"docked":case"result":A.target.copy(A.park);break;case"launch":A.target.set(A.park.x,kp,A.park.z),A.p.y>kp-.3&&(A.mode=A.viaPickup?"toPickup":"toWork",A.t=0);break;case"toPickup":{let Ve=Math.hypot(A.p.x-e.x,A.p.z-e.z)>.7;A.target.set(e.x,Ve?kp:e.y,e.z),!Ve&&A.p.distanceTo(e)<.14&&(A.mode="pickup",A.t=0);break}case"pickup":A.target.copy(e),I=3.2,A.t>.25&&A.carryTo<1&&(A.carryTo=1,A.flash=1),A.t>.9&&(A.mode="toWork",A.t=0);break;case"toWork":case"work":A.orbit&&A.target.copy(A.orbit),I=A.mode==="work"?3:2.6,A.snap&&(A.p.copy(A.target),A.v.set(0,0,0),A.snap=!1),A.mode==="toWork"&&A.p.distanceTo(A.target)<.3&&(A.mode="work",A.t=0);break;case"return":A.target.set(A.park.x,A.park.y+.9,A.park.z),A.p.distanceTo(A.target)<.2&&(A.mode="land",A.t=0);break;case"land":A.target.copy(A.park),I=2.2,A.p.distanceTo(A.park)<.012&&A.v.length()<.08&&(A.mode="result",A.t=0,A.landedAt=k,A.p.copy(A.park),A.v.set(0,0,0));break;default:break}A.mode==="docked"||A.mode==="result"?(A.p.lerp(A.park,1-Math.exp(-10*Y)),A.v.set(0,0,0),A.acc.set(0,0,0)):(xe(A,Y,I),Math.hypot(A.p.x-A.park.x,A.p.z-A.park.z)<cc+.1&&A.p.y<A.park.y&&(A.p.y=A.park.y)),A.mode==="result"&&(A.t>xT&&(A.carryTo=0),A.t>sy&&Z(A));let E=Math.hypot(A.v.x,A.v.z),V=A.mode==="docked"||A.mode==="result"||A.mode==="land",pe=E>.25?Math.atan2(A.v.x,A.v.z):V?A.parkYaw:A.yaw;A.yaw=ql(A.yaw,pe,1-Math.exp(-(V?3:4.5)*Y)),je.set(Math.sin(A.yaw),0,Math.cos(A.yaw));let me=A.acc.x*je.x+A.acc.z*je.z,ke=A.acc.x*je.z-A.acc.z*je.x;A.pitch=$t(A.pitch,st(me*.045,-.32,.32),6,Y),A.roll=$t(A.roll,st(-ke*.045,-.32,.32),6,Y),A.spin=$t(A.spin,A.mode==="docked"||A.mode==="result"?0:1,4,Y),A.carry=$t(A.carry,A.carryTo,A.carryTo>A.carry?7:4,Y),A.carry<.002&&A.carryTo===0&&(A.carry=0),A.flash=Math.max(0,A.flash-Y*2.2)}let z=new un,re=new un,J=new Vn(0,0,0,"YXZ"),se=new P(1,1,1),Re=new P,F=new P(0,yT,0),oe=new bt,fe=new bt,U=new ze;function Ke(A,Y,he){switch(A.mode){case"docked":return he.copy(Hn.standby);case"work":return he.copy(Hn.running).multiplyScalar(.85+.25*Math.sin(Y*4+A.i));case"launch":case"toPickup":case"pickup":case"toWork":return he.copy(A.status==="running"?Hn.transit:Hn[A.status]||Hn.transit);default:return he.copy(Hn[A.status]||Hn.standby)}}function ut(A,Y,he){if(A.mode==="result"){let I=st(1-A.t/sy,0,1);return he.copy(Hn[A.status]||Hn.done).multiplyScalar(.35+.65*I)}return A.mode==="docked"?he.copy(Hn.standby).multiplyScalar(.85+.15*Math.sin(Y*.8+A.i*.7)):A.mode==="launch"&&A.t<1.2?he.copy(Hn.running):he.copy(Hn.reserved)}function gt(A){for(let Y of T){J.set(Y.pitch,Y.yaw,Y.roll,"YXZ"),z.setFromEuler(J),fe.compose(Y.p,z,se),b.shell.setMatrixAt(Y.i,fe),b.under.setMatrixAt(Y.i,fe),b.hub.setMatrixAt(Y.i,fe),b.led.setMatrixAt(Y.i,fe);let he=Math.max(1e-4,Y.spin);for(let E=0;E<4;E++)oe.compose(x.hubs[E],re,Re.set(he,1,he)),oe.premultiply(fe),b.rotor.setMatrixAt(Y.i*4+E,oe);oe.compose(F,re,Re.setScalar(Math.max(1e-4,Y.carry))),oe.premultiply(fe),b.capGlass.setMatrixAt(Y.i,oe),b.capCore.setMatrixAt(Y.i,oe),b.led.setColorAt(Y.i,Ke(Y,A,U)),b.capCore.setColorAt(Y.i,U.copy(Y.capColor).multiplyScalar(1+2.5*Y.flash)),u.setColorAt(Y.i,ut(Y,A,U));let I=Y.i*6;if(Y.mode==="work"||Y.mode==="toWork")M[I]=y.x,M[I+1]=y.y,M[I+2]=y.z,M[I+3]=Y.p.x,M[I+4]=Y.p.y-.03,M[I+5]=Y.p.z;else for(let E=0;E<6;E++)M[I+E]=y.getComponent(E%3)}for(let Y of Object.values(b))Y.instanceMatrix.needsUpdate=!0,Y.instanceColor&&(Y.instanceColor.needsUpdate=!0);u.instanceColor.needsUpdate=!0,w.attributes.position.needsUpdate=!0}for(let A of T)b.led.setColorAt(A.i,Hn.standby),b.capCore.setColorAt(A.i,Hn.running);gt(0);let Pe=()=>T.some(A=>A.mode!=="docked"&&!(A.mode==="result"&&A.carry===0&&A.carryTo===0));return{root:t,fleet:_,hover:[{id:"dock",object:R}],labelAnchor:new P(Is.x,3.75,Is.z),sync:ge,reset:ne,counts:ye,drones:()=>T.map(A=>({mode:A.mode,agent:A.agent?A.agent.id:null,status:A.status,position:A.p.clone(),carry:A.carry})),busy:()=>Pe(),update(A,Y,he){let I=Math.min(Math.max(A,0),.1);k+=I,W.inner+=Bp.inner.speed*I,W.outer+=Bp.outer.speed*I,N>0&&T.some(V=>V.mode==="docked"||V.mode==="result")&&Me(!1),Ge(Y);for(let V of T)G(V,I,Y);if(gt(Y),ee+=I,ee>=.25&&(ee=0,De()),he){let V=Math.atan2(he.position.x-Is.x,he.position.z-Is.z);p.rotation.y=ql(p.rotation.y,V,1-Math.exp(-5*I))}let E=.35+.1*Math.sin(Y*3.1);v.opacity=E},dispose(){for(let A of Object.values(b))A.dispose();u.dispose();for(let A of[x.shell,x.under,x.hub,x.led,x.rotor,x.capGlass,x.capCore])A.dispose();for(let A of Object.values(g))A.dispose();m.tex.dispose(),h.tex.dispose(),a.tex.dispose(),w.dispose(),v.dispose(),i.dispose(),c.dispose()}}}var io=.3,Hp=.65,ET=Math.PI*2,ka=.16/rt.screenR,zp=rt.top+.05,ch=rt.back+.05,oy=.1;function uh(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var ay=[uh("media-wall",12.36,ch,rt.a0-ka,rt.a1+ka,0,zp),uh("media-modules",11.78,ch,rt.a0-ka,rt.a1+ka,0,2.34),uh("media-cap-right",11.78,ch,rt.a0-ka,rt.a0,0,zp),uh("media-cap-left",11.78,ch,rt.a1,rt.a1+ka,0,zp)],Gp=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+ET:t};function dh(n,e,t){n.x=qe.cx+t*Math.cos(e),n.z=qe.cz-t*Math.sin(e)}var Kn=new P,ly=new P,cy=new P,Yn=new P;function ko(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-qe.cx,s=e.z-qe.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=Gp(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return Kn.copy(e).applyMatrix4(n.inv),Kn.x>=n.min.x-t&&Kn.x<=n.max.x+t&&Kn.z>=n.min.z-t&&Kn.z<=n.max.z+t&&Kn.y>=n.min.y-t&&Kn.y<=n.max.y+t}function uy(n,e,t){if(n.kind==="sector"){let u=e.x-qe.cx,d=e.z-qe.cz,h=Math.max(.001,Math.hypot(u,d)),f=Gp(u,d),p=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(f-(n.a0-p)),_=h*(n.a1+p-f),b=n.y1+t-e.y,y=Math.min(x,m,g,_,b);y===x?dh(e,f,Math.max(0,n.r0-t-1e-4)):y===m?dh(e,f,n.r1+t+1e-4):y===g?dh(e,n.a0-(t+1e-4)/h,h):y===_?dh(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}Kn.copy(e).applyMatrix4(n.inv);let s=Kn.x-(n.min.x-t),r=n.max.x+t-Kn.x,o=Kn.z-(n.min.z-t),a=n.max.z+t-Kn.z,l=n.max.y+t-Kn.y,c=Math.min(s,r,o,a,l);c===s?Kn.x=n.min.x-t-1e-4:c===r?Kn.x=n.max.x+t+1e-4:c===o?Kn.z=n.min.z-t-1e-4:c===a?Kn.z=n.max.z+t+1e-4:Kn.y=n.max.y+t+1e-4,e.copy(Kn).applyMatrix4(n.mat)}function TT(n,e,t,i,s){ly.copy(e).applyMatrix4(n.inv),cy.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=ly[a],d=cy[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,f=(c-u)/d;if(h>f&&([h,f]=[f,h]),r=Math.max(r,h),o=Math.min(o,f),r>o)return 1/0}return r}function dy(n,e,t,i){let s=n.x-qe.cx,r=n.z-qe.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function hy(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new bt,i=new Ei,s=r=>{if(r.userData&&r.userData.solid){let o=new bt().copy(r.matrixWorld).invert(),a=new Ei;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(Yn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function fy(n=[]){let e=[...ay,...n],t=[];function i(u,d,h=null){for(let f of e)if(f!==h&&ko(f,u,d))return f;return null}function s(u,d=null){jf(u,d);for(let h=0;h<4;h++){let f=!1;for(let p of e)ko(p,u,io)&&(uy(p,u,io),f=!0);if(!f)return u;jf(u,d)}return d&&Xr(d)&&!i(d,io-.001)&&u.copy(d),u}function r(u,d=Hp){for(let h=0;h<3;h++){let f=!1;for(let p of e)p.block==="ray"&&ko(p,u,d)&&(uy(p,u,d),f=!0);if(!f)break}return u}function o(u,d){let h=1/0;dy(u,d,ni.r,t);for(let f of t)h=Math.min(h,f);return d.y>1e-9?h=Math.min(h,(ni.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(ni.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,f=io,p=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=oy;m<x;g+=oy){let _=Math.min(g,x);if(Yn.copy(u).addScaledVector(d,_),l(Yn,f,u)){let b=m,y=_;for(let M=0;M<7;M++){let w=(b+y)/2;Yn.copy(u).addScaledVector(d,w),l(Yn,f,u)?y=w:b=w}x=b;break}m=_}if(!p)return Math.max(0,x);Yn.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!ko(g,Yn,f)||ko(g,u,0))continue;let _=TT(g,u,d,x,f);_<x&&(x=_)}return Math.max(0,x)}function l(u,d,h){for(let f of e)if(f.block==="ray"&&ko(f,u,d)&&!ko(f,h,d))return!0;return!1}function c(u,d,h=200){let f=h;if(d.y<-1e-6){let p=-u.y/d.y;p>0&&p<f&&(Yn.copy(u).addScaledVector(d,p),Eg(Yn.x,Yn.z)<0&&wg(Yn.x,Yn.z)>0&&(p=(-Nt.depth-u.y)/d.y),p>0&&p<f&&(f=p))}if(d.y>1e-6){let p=(qe.h-u.y)/d.y;p>0&&p<f&&(f=p)}for(let p of[qe.r,rt.screenR,rt.back]){dy(u,d,p,t);for(let x of t)if(!(x>=f)){if(Yn.copy(u).addScaledVector(d,x),p!==qe.r){let m=Gp(Yn.x-qe.cx,Yn.z-qe.cz);if(m<rt.a0||m>rt.a1||Yn.y<0||Yn.y>rt.top)continue}else if(Yn.y<0||Yn.y>qe.h)continue;f=x}}return f<h?f:1/0}return{get solids(){return e},setObjects(u){e=[...ay,...u||[]]},contains:(u,d=io)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var AT={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},dock:{pos:[-1,3.3,-6.6],target:[-5.3,1.8,-5]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},RT={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},CT=.15;function PT(n,e){n.updateMatrixWorld(!0);let t=new ts,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(hn),i+=1))}),i}var IT=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5],py={loading:"读取中 · loading","signed-out":"未登录账户 · not signed in",failed:"查询失败 · query failed",unavailable:"余额不可用 · balance unavailable"};function my(n,e,{environment:t=!0,demo:i=!1,look:s=Yr,brightness:r=gn.initial}={}){let o=!!i,a=new mo;a.background=null;let l=lp(s),c=st(r,gn.min,gn.max),u=t?n:null,d=RT[e]||null,h=u?d:null,f=h?Pg(u,h):null,{M:p,tex:x}=vg(e),m=$g(p,x,e,{renderer:u,look:l,reflection:f,beamTarget:new P(vn.x,3,vn.z)});function g(){a.environment=m.envTexture,a.environmentIntensity=l.envIntensity}g();let _=wx(x),b=nx(p),y=ux(p),M=vx(p),w=_x(p,_),v=Tx(p),S=Sx(p,v),T=$x(p,null,{demo:o}),R=Jx(),D=ey(p),k=w.byKind.robot,H=ry(p,{pickup:k?Oi(k.theta,Jr+.55,2.45):null}),N=new jt;N.name="wafers",a.add(m.root,R.root,T.root,b.root,y.root,M.root,w.root,S.root,D.root,H.root,H.fleet,_.root,N);let q=Cx({cell:M,stations:w,stocker:S,engine:y,wafers:v,root:N}),te=d?PT(a,CT):0,Q={frame:0,matrix:new bt,proj:new bt,ready:!1},ee=hy(a),W=[];for(let z of[...b.hover,...y.hover,...M.hover,...w.list.flatMap(re=>re.hover),...S.hover,...H.hover,...D.hover,...T.hover])z.object.userData.hoverId=z.id,W.push(z.object);let K=[{id:"tank",anchor:b.anchors.tank},{id:"engine",anchor:y.anchors.engine},{id:"robot",anchor:M.anchors.robot.clone().setY(1.75)},...w.list.map(z=>({id:`station:${z.kind}`,anchor:z.anchor})),{id:"loadport",anchor:S.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:S.anchors.stocker.clone().setY(1.25)},{id:"dock",anchor:H.labelAnchor},{id:"living",anchor:D.labelAnchor}],O={phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"unavailable"},$={state:null,live:O,tps:0,peak:!1},ce={activity:0,tps:0,model:"",phase:"idle"},Z=null,ge=0,Me=!1,ne=0,ye=0,De=0,tt=1,Be=Mr(Date.now());function je(){Be=Mr(Date.now());let z=Z?js(Z.provider,Z.model):null,re=typeof O.balance=="number"?O.balance:null,J=O.currency==="USD"?"$":"¥",se=[o?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(re==null)se.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),se.push({text:py[O.balanceStatus]||py.unavailable,size:28,color:"#8c97ad",gap:56});else{se.push({text:`${J} ${re.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let Re=O.currency==="USD"?0:Jd(re,z,Be);se.push({text:z&&Re?`≈ ${on(Re)} tokens · ${z.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}se.push({text:Be?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:Be?"#ffb020":"#34d17a",weight:700,gap:72}),b.setReadout(se)}function Ge(){let z=typeof O.balance=="number"?O.balance:null;if(z==null)return .5;ne=Math.max(ne,z);let re=IT.find(J=>J>=ne*1.25)||ne*1.25;return st(z/re,0,1)}function xe(z,re,J){let se=q.activity();R.set("fuel",.1+.9*re,.7+ye/28),R.set("feed",se.inbound>0?1:.1+.55*re,1.5),R.set("lock",se.inbound>0?.9:.08,-1.4);for(let Re of w.list)R.set(`spoke:${Re.index}`,Re.active?1:.06,1.2);R.set("unload",se.outbound>0?.9:.08,1.4),R.set("out",se.outbound>0||se.stocker?.9:.08,1.4),R.set("ring",se.robot?.75:J!=="idle"?.4:.22,.8),R.update(z)}function G(z){return z==="reasoning"||z==="generating"||z==="thinking"?.35+.65*st(ye/70,0,1):z==="tool"?.2:0}return{scene:a,key:m.key,presets:AT,labelAnchors:K,solids:ee,mascotAnchors:D.anchors,screenDefs:Np,setScreenDetail:(z,re=2)=>T.setDetail(z,re),get post(){return{...l.post,exposure:l.exposure*c}},getLook:()=>l.id,setLook(z){let re=lp(z);return re===l?!1:(l=re,m.setLook(l),g(),!0)},getBrightness:()=>c,setBrightness(z){c=st(Number(z)||gn.initial,gn.min,gn.max)},setState(z){z&&(Z&&z.tools.errors>ge&&(Me=!0),ge=z.tools.errors,Z=z,q.sync(z),H.sync(z.agents,z.workflows),tt=Math.max(tt,.45))},setLive(z){z&&Object.assign(O,z)},isDemo:()=>o,setDemo(z){o!==!!z&&(o=!!z,T.setDemo(o),tt=1)},resetState(){Z=null,ge=0,Me=!1,ne=0,q.reset(),H.reset(),T.reset(),tt=1},busy(){return q.busy()||H.busy()||O.phase&&O.phase!=="idle"||ye>1},dockInfo:()=>H.counts(),update(z,re,J){ye=$t(ye,O.tps||0,6,z),tt+=z,tt>=.5&&(tt=0,je());let se=Z?Z.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},Re=O.phase&&O.phase!=="idle"?O.phase:O.running===!1?"idle":Z?Z.phase:"idle",F=ye>.5?st(.2+ye/90,0,1):0;De=$t(De,G(Re),1.6,z),ce.activity=De,ce.tps=ye,ce.model=Z?Z.model:"",ce.phase=Re,m.update(z,re,ce),b.update(z,re,{level:Ge(),flow:F,peak:Be}),y.update(z,re,{phase:Re,tps:ye,ctx:Z&&Z.contextWindow>0?Z.contextTokens/Z.contextWindow:0,counters:{miss:se.miss,hit:se.hit,output:se.output,reasoning:se.reasoning,cost:se.cost},errorPulse:Me}),Me=!1,q.update(z,re),_.update(z),H.update(z,re,J),D.update(z,re),xe(z,F,Re),$.state=Z,$.phase=Re,$.tps=ye,$.peak=Be,T.update(z,re,$)},prerender(z){!f||(Q.frame+=1,(Q.ready&&Q.matrix.equals(z.matrixWorld)&&Q.proj.equals(z.projectionMatrix)||h.every>1)&&Q.ready&&Q.frame%2===1)||(f.update(a,z),Q.matrix.copy(z.matrixWorld),Q.proj.copy(z.projectionMatrix),Q.ready=!0)},reflectionInfo:()=>d?{...d,trimmed:te,active:!!f}:null,hoverTargets(){return S.hoverObjects(W.slice())},focus:z=>q.focus(z),stats:()=>q.stats(),dispose(){q.dispose(),S.dispose(),H.dispose(),D.dispose(),m.dispose(),xg(a),v.dispose(),f&&f.dispose();for(let z of Object.values(p))z&&z.dispose&&z.dispose();for(let z of Object.values(x))z&&z.dispose&&z.dispose()}}}var LT=new mr(-1,1,1,-1,0,1),Vp=class extends qt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},DT=new Vp,hh=class{constructor(e){this._mesh=new nt(DT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,LT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var NT=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,OT=`
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
}`,UT=`
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
}`,FT=`
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
}`,kT=`
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
}`;function gy(n,e,t={}){let i=new ai(Math.max(1,n),Math.max(1,e),{type:Ai,minFilter:Cn,magFilter:Cn,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function fh(n,e,t={}){return new ba({vertexShader:NT,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function xy(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new hh(null),r=gy(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(gy(2,2));let a=fh(OT,{tSrc:{value:null},uTexel:{value:new Ce},uThreshold:{value:1},uKnee:{value:.45}}),l=fh(UT,{tSrc:{value:null},uTexel:{value:new Ce}}),c=fh(FT,{tSrc:{value:null},uTexel:{value:new Ce},uWeight:{value:1}},{blending:ti,transparent:!0}),u=fh(kT,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,f){n.setRenderTarget(f),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,f){r.setSize(Math.max(1,h),Math.max(1,f));let p=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(f/2));for(let m of o)m.setSize(p,x),p=Math.max(1,Math.floor(p/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:f,knee:p,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),f!=null&&(a.uniforms.uThreshold.value=f),p!=null&&(a.uniforms.uKnee.value=p),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,f,p=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,f),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=p,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var ph=1.6;function yy(n,e){let t=Math.tan(Vr.degToRad(n/2));return{tv:t,th:t*Math.max(.2,e)}}var Wp=n=>Math.atan2(-Math.cos(n),Math.sin(n)),Xp=(n,e)=>n.a-e/rt.screenR;function vy(n,e,t){let{tv:i,th:s}=yy(e,t),r=n.a1-n.a0,o=rt.screenR,a=2*o*Math.sin(r/2),l=o*(1-Math.cos(r/2)),c=n.y1-n.y0;return st(Math.max(l+a/2*1.08/s,l+c/2*1.22/i),ph+.4,16)}function _y(n,e,t,i){let{tv:s,th:r}=yy(t,i);return{u:Math.max(0,(n.a1-n.a0)*rt.screenR/2-e*r*.9),v:Math.max(0,(n.y1-n.y0)/2-e*s*.9)}}function by(n,e,t,i,s=new P){return qr(Xp(n,e),rt.screenR-i,(n.y0+n.y1)/2+t,s)}var mh=85*Math.PI/180,BT=1.65,zT=3.2,HT=2.6,GT={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function My(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ne=>ne,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new Vn(0,0,0,"YXZ"),h=new Set,f=!1,p=new P,x=new P,m=0,g=null,_=null,b=0,y=new P,M=new P,w=new P,v=new P,S=new P,T=new _o,R=new Ce;function D(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function k(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=st(d.x,-mh,mh),D()}function H(ne){return y.copy(n.position),S.copy(y).add(ne),n.position.copy(S),s(n.position,y),n.position.distanceTo(S)}let N=()=>{b=performance.now(),a&&a()},q=()=>{o&&o(),N()};function te(ne){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let ye=ne.button===2||ne.button===0&&ne.shiftKey?"pan":ne.button===0?"look":null;if(ye){g={id:ne.pointerId,x:ne.clientX,y:ne.clientY,mode:ye},_=null;try{e.setPointerCapture(ne.pointerId)}catch{}q()}}function Q(ne){if(!l||!g||ne.pointerId!==g.id)return;let ye=ne.clientX-g.x,De=ne.clientY-g.y;g.x=ne.clientX,g.y=ne.clientY;let tt=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Be=2.4/tt;c+=ye*Be,u=st(u+De*Be,-mh,mh),D()}else{let Be=6/tt;w.set(1,0,0).applyQuaternion(n.quaternion),v.copy(w).multiplyScalar(-ye*Be),v.y+=De*Be,H(v)}N()}function ee(ne){if(!(!g||ne.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ne.pointerId)}catch{}N()}}function W(ne){if(!l)return;ne.preventDefault();let ye=ne.deltaMode===1?16:ne.deltaMode===2?400:1;m=st(m+st(-ne.deltaY*ye*.006,-4,4),-8,8),_=null,q()}function K(ne){if(!l)return;let ye=e.getBoundingClientRect();R.set((ne.clientX-ye.left)/Math.max(1,ye.width)*2-1,-((ne.clientY-ye.top)/Math.max(1,ye.height))*2+1),n.updateMatrixWorld(),T.setFromCamera(R,n);let{origin:De,direction:tt}=T.ray;if(tt.y>-.02)return;let Be=(r-De.y)/tt.y;if(Be<=0||Be>60)return;let je=new P().copy(tt).multiplyScalar(Be).add(De),Ge=je.x-n.position.x,xe=je.z-n.position.z,G=Math.hypot(Ge,xe);G>1.5&&(je.x-=Ge/G*1.2,je.z-=xe/G*1.2),je.y=r+BT;let z=je.distanceTo(n.position);_={t:0,d:st(z/6,.45,1.6),p0:n.position.clone(),p1:je},q()}function O(ne,ye){if(!l||ne.ctrlKey||ne.metaKey||ne.altKey)return;let De=ne.target;if(De&&(De.tagName==="INPUT"||De.tagName==="TEXTAREA"||De.tagName==="SELECT"||De.isContentEditable))return;f=!!ne.shiftKey;let tt=GT[ne.code];tt&&(ne.preventDefault(),ne.stopPropagation(),ye?h.add(tt):h.delete(tt),ye?(_=null,q()):N())}let $=ne=>O(ne,!0),ce=ne=>O(ne,!1),Z=()=>{h.clear(),f=!1},ge=ne=>{l&&ne.preventDefault()};e.addEventListener("pointerdown",te),e.addEventListener("pointermove",Q),e.addEventListener("pointerup",ee),e.addEventListener("pointercancel",ee),e.addEventListener("wheel",W,{passive:!1}),e.addEventListener("dblclick",K),e.addEventListener("contextmenu",ge),i&&(i.addEventListener("keydown",$),i.addEventListener("keyup",ce),i.addEventListener("blur",Z));function Me(ne){if(!l)return!1;let ye=!1;if(_){_.t+=ne;let De=rs(Math.min(1,_.t/_.d));v.lerpVectors(_.p0,_.p1,De).sub(n.position),(H(v)>.02||_.t>=_.d)&&(_=null),ye=!0}if(x.set(0,0,0),h.size&&(M.set(-Math.sin(c),0,-Math.cos(c)),w.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(M),h.has("b")&&x.sub(M),h.has("r")&&x.add(w),h.has("l")&&x.sub(w),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(zT*(f?HT:1))),p.set($t(p.x,x.x,9,ne),$t(p.y,x.y,9,ne),$t(p.z,x.z,9,ne)),p.lengthSq()>1e-6?(H(v.copy(p).multiplyScalar(ne)),ye=!0):p.set(0,0,0),Math.abs(m)>.001){let De=m*(1-Math.exp(-9*ne));m-=De,n.getWorldDirection(M),H(v.copy(M).multiplyScalar(De))>.02&&(m=0),ye=!0}else m=0;return ye&&N(),ye}return{get enabled(){return l},enable(){l=!0,k()},disable(){l=!1,g=null,_=null,h.clear(),p.set(0,0,0),m=0},sync:k,active(){return l&&(!!g||!!_||h.size>0||Math.abs(m)>.001||p.lengthSq()>1e-4||performance.now()-b<300)},update:Me,dispose(){e.removeEventListener("pointerdown",te),e.removeEventListener("pointermove",Q),e.removeEventListener("pointerup",ee),e.removeEventListener("pointercancel",ee),e.removeEventListener("wheel",W),e.removeEventListener("dblclick",K),e.removeEventListener("contextmenu",ge),i&&(i.removeEventListener("keydown",$),i.removeEventListener("keyup",ce),i.removeEventListener("blur",Z))}}}var qp=["orbit","look"],VT=12,WT=2,Bo=["low","medium","high","ultra"],Ba=["auto",30,60,120,0],uc={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},XT=60,qT=30,Sy=150*(Math.PI/180),$T=.8,wy=30,YT=.45,Ey=.0013,KT=14,ZT=7,JT=.25,jT=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,QT=/swiftshader|llvmpipe|softpipe|software|basic render/i;function eA(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(QT.test(t))return"low";if(jT.test(t))return"high"}catch{}return"medium"}function tA(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new qt;return t.setAttribute("position",new pt(e,3)),t}function nA(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function Ty(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c,onScreen:u}=e,d=!!e.demo,h=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=new wd({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=eA(f.getContext()),x=uc[e.quality]?e.quality:p,m=Ba.includes(e.fps)?e.fps:"auto";f.setClearColor(qg,1),f.toneMapping=Dl,f.toneMappingExposure=1,f.outputColorSpace=oi,f.shadowMap.type=bo,f.shadowMap.autoUpdate=!1,f.info.autoReset=!1,f.debug.onShaderError=(B,we,He,Ye)=>{let Ne=B.getShaderSource(Ye)||"",ft=/#define SHADER_NAME (.*)/.exec(Ne),nn=ft&&ft[1].trim()||"shader",ds=[B.getShaderInfoLog(He),B.getShaderInfoLog(Ye),B.getProgramInfoLog(we)].map(zs=>(zs||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${nn}" failed to compile
${ds}`);let ao=ds.split(`
`).find(zs=>/error/i.test(zs))||ds.split(`
`)[0]||"";r&&r("shader",`${nn}: ${ao}`.slice(0,220))};let g=nA(f.getContext()),_=!1,b=f.domElement;b.className="dwp3d-gl",b.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",b.setAttribute("aria-hidden","true"),n.appendChild(b);let y=document.createElement("div");y.className="dwp3d-labels",n.appendChild(y);let M=new jn(40,1,.2,9e3),w=new jn(40,1,.2,9e3);M.layers.enable(hn),w.layers.enable(hn);let v=fy(),S=new Rd(M,b);S.enableDamping=!0,S.dampingFactor=.08,S.minDistance=.5,S.maxDistance=40,S.zoomToCursor=!1,S.maxPolarAngle=Sy,S.screenSpacePanning=!0,S.rotateSpeed=.7,S.zoomSpeed=.9,S.panSpeed=.8;let T=null,R=null,D=null,k=tA(),H=null,N=null,q=0,te=0,Q=1,ee=1,W=null,K="orbit",O=!1,$,ce=0,Z=0,ge=0,Me=new P,ne=new P,ye=[],De=[],tt=!0,Be=!1,je=!1,Ge=!1,xe=0,G=0,z=Co.includes(e.look)?e.look:Yr,re=st(Number(e.brightness)||gn.initial,gn.min,gn.max),J={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function se(){J.casters.clear(),J.pending=!1,!(!T||!f.shadowMap.enabled)&&(T.scene.updateMatrixWorld(!0),T.scene.traverse(B=>{B.castShadow&&(B.isMesh||B.isPoints||B.isLine)&&J.casters.set(B,{m:B.matrixWorld.clone(),v:B.isInstancedMesh?B.instanceMatrix.version:0})}),f.shadowMap.needsUpdate=!0,J.lastBake=G,J.bakes+=1)}function Re(){if(!T||!f.shadowMap.enabled||G<J.next)return;J.next=G+.5;let B=!1;for(let[He,Ye]of J.casters){if(!He.castShadow||!Lt(He)){J.casters.delete(He),B=!0;continue}(!He.matrixWorld.equals(Ye.m)||He.isInstancedMesh&&He.instanceMatrix.version!==Ye.v)&&(He.castShadow=!1,J.casters.delete(He),B=!0)}T.scene.traverse(He=>{He.castShadow&&!J.casters.has(He)&&(He.castShadow=!1)}),B&&(J.pending=!0);let we=J.bakes<4?.5:2;J.pending&&G-J.lastBake>=we&&se()}function F(){R&&(R.dispose(),R=null),D&&(D.removeFromParent(),D.material.dispose(),D=null),T&&(T.dispose(),T=null),J.casters.clear(),f.renderLists.dispose()}function oe(){let B=uc[x];f.shadowMap.enabled=x!=="low",T=my(f,x,{demo:d,look:z,brightness:re}),D=new go(k,new Nr({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),D.name="hover-highlight",D.matrixAutoUpdate=!1,D.frustumCulled=!1,D.renderOrder=20,D.visible=!1,D.layers.set(hn),T.scene.add(D),R=xy(f,{msaa:B.msaa,bloom:B.bloom}),U(),ee=1,ke(!0),H&&T.setState(H),N&&T.setLive(N),Ns(),v.setObjects(T.solids||[]),ge=0,J.bakes=0,J.next=G+.5,se(),fe()}function fe(){if(!(!T||typeof f.compileAsync!="function"))try{T.scene.updateMatrixWorld(!0);let B=f.compileAsync(T.scene,w);B&&typeof B.catch=="function"&&B.catch(()=>{})}catch{}}function U(){!R||!T||(T.post&&R.set(T.post),h&&R.set({grain:.006}))}let Ke=new Ce;function ut(B,we,He,Ye){Ke.set(B.x-qe.cx,B.z-qe.cz),Ke.length()>we&&(Ke.setLength(we),B.x=qe.cx+Ke.x,B.z=qe.cz+Ke.y),B.y=st(B.y,He,Ye)}function gt(B){return ut(B,ni.targetR,ni.targetYMin,ni.targetYMax),v.keepClear(B,Hp),ut(B,ni.targetR,ni.targetYMin,ni.targetYMax),B}let Pe=new P;function A(){let B=S.target;Pe.copy(B),gt(B),(B.x!==Pe.x||B.y!==Pe.y||B.z!==Pe.z)&&M.position.add(Pe.subVectors(B,Pe))}function Y(){let B=S.target,we=Math.max(.001,M.position.distanceTo(B)),He=st((ni.yMin+.02-B.y)/we,-1,1),Ye=st((ni.yMax-.02-B.y)/we,-1,1);S.maxPolarAngle=Math.min(Sy,Math.acos(He)),S.minPolarAngle=Math.min(Math.acos(Ye),S.maxPolarAngle)}let he={len:0,pulled:!1,easing:!1},I=new P;function E(){he.len=0,he.pulled=!1,he.easing=!1}function V(B){let we=!1;if(K==="orbit"&&!W){let He=S.target;I.subVectors(M.position,He);let Ye=I.length();if(Ye>1e-4){I.divideScalar(Ye);let Ne=Math.min(Ye,v.containerExit(He,I)-.02);Ne=Math.min(Ne,v.armLength(He,I,Ne,io)),Ne=Math.max(Ne,Math.min(Ye,JT)),!he.pulled||Ne<he.len?he.len=Ne:he.len=Math.min(Ne,$t(he.len,Ne,ZT,B)),he.len>Ye-.001&&Ne>=Ye-1e-4&&(he.len=Ye),he.pulled=he.len<Ye-1e-4,he.easing=he.pulled&&Ne>he.len+.001,w.position.copy(He).addScaledVector(I,he.len),we=!0}}we||(w.position.copy(M.position),E()),w.quaternion.copy(M.quaternion),w.updateMatrixWorld()}function pe(){K==="orbit"&&!W&&he.pulled&&(M.position.copy(w.position),E())}function me(){R&&R.setSize(Math.round(q*Q*ee),Math.round(te*Q*ee))}function ke(B=!1){let we=Math.max(1,Math.floor(n.clientWidth)),He=Math.max(1,Math.floor(n.clientHeight)),Ye=Math.min(typeof window<"u"&&window.devicePixelRatio||1,uc[x].dpr);if(!(!B&&we===q&&He===te&&Ye===Q)&&(q=we,te=He,Q=Ye,f.setPixelRatio(Ye),f.setSize(we,He,!1),me(),M.aspect=w.aspect=we/He,M.updateProjectionMatrix(),w.updateProjectionMatrix(),ge=0,ve.def)){let Ne=Math.abs(ve.td-ve.fit)<.001;ve.fit=Ze(ve.def),Ne&&(ve.td=ve.fit),Zt()}}function Ve(B){let we=T?T.presets:null,He=we&&(we[B]||we.overview)||{pos:[0,7,16],target:[0,2,-1]},Ye=new P().fromArray(He.target),Ne=new P().fromArray(He.pos),ft=He.mode==="look"?"look":"orbit";if(ft==="orbit"){let nn=st(1.7/Math.max(.3,M.aspect),1,2.3);Ne.sub(Ye).multiplyScalar(nn).add(Ye),ut(Ne,ni.r,ni.yMin,ni.yMax)}return{pos:Ne,target:Ye,mode:ft}}function Ee(B,we){let He=we.x-B.x,Ye=we.y-B.y,Ne=we.z-B.z;return{yaw:Math.atan2(-He,-Ne),pitch:Math.atan2(Ye,Math.hypot(He,Ne))}}let Se=new Vn(0,0,0,"YXZ"),We=new P;function X(B,we){Se.set(we,B,0,"YXZ"),M.quaternion.setFromEuler(Se)}function Te(B){if(B===K)return;pe(),Oe.log=0;let we=K==="screen";K=B,B==="look"?(O=!1,S.enabled=!1,Gn.enable()):B==="screen"?(O=!1,S.enabled=!1,Gn.disable()):(Gn.disable(),S.enabled=!0),y.style.visibility=B==="screen"?"hidden":"",we&&Ls(),c&&c(B)}function be(){let B=Xr(M.position)==="hall";if(Te("orbit"),!B){Fe("overview");return}M.getWorldDirection(We),gt(S.target.copy(M.position).addScaledVector(We,6)),Y(),S.update(),E()}function Ie(B){let{pos:we,target:He,mode:Ye}=Ve(B);if(W=null,Te(Ye),M.position.copy(we),Ye==="look"){let Ne=Ee(we,He);X(Ne.yaw,Ne.pitch),Gn.sync()}else gt(S.target.copy(He)),Y(),S.update();E()}function Fe(B,we=1.2){if(h){Ie(B);return}pe(),Oe.log=0;let{pos:He,target:Ye,mode:Ne}=Ve(B);Te(Ne);let ft=Ee(He,Ye);Xe(He,ft.yaw,ft.pitch,Ye,Ne,we)}function Xe(B,we,He,Ye,Ne,ft=1.2){Se.setFromQuaternion(M.quaternion,"YXZ"),W={t:0,d:h?.001:ft,p0:M.position.clone(),p1:B.clone(),yaw0:Se.y,pitch0:Se.x,yaw1:we,pitch1:He,target:Ye,mode:Ne}}let ve={id:null,def:null,u:0,v:0,d:0,tu:0,tv:0,td:0,fit:0,back:null,moving:!1},Pt=new P,Ue=()=>T&&T.screenDefs||[],xt=B=>Ue().find(we=>we.id===B)||null,At=()=>Math.tan(Vr.degToRad(M.fov/2)),Ze=B=>vy(B,M.fov,M.aspect);function Zt(){let B=ve.def;if(!B)return;ve.td=st(ve.td,ph,ve.fit*1.05);let we=_y(B,ve.td,M.fov,M.aspect);ve.tu=st(ve.tu,-we.u,we.u),ve.tv=st(ve.tv,-we.v,we.v)}let Sn=(B,we,He,Ye)=>by(ve.def,we,He,Ye,B);function Zn(B){let we=xt(B);return!we||!T?!1:(K!=="screen"&&(pe(),ve.back={mode:K,pos:M.position.clone(),quat:M.quaternion.clone(),target:S.target.clone()}),O=!1,Te("screen"),ve.id=B,ve.def=we,ve.fit=Ze(we),ve.u=ve.tu=0,ve.v=ve.tv=0,ve.d=ve.td=ve.fit,ve.moving=!1,T.setScreenDetail(B,WT),Xe(Sn(Pt,0,0,ve.fit),Wp(we.a),0,null,"screen",1),u&&u(B),_n(),!0)}function Ls(){ve.id=null,ve.def=null,ve.back=null,ve.moving=!1,T&&T.setScreenDetail&&T.setScreenDetail(null,1),u&&u(null)}function Ds(){if(K!=="screen")return;let B=ve.back;if(Te(B?B.mode:"orbit"),!B){Fe("overview");return}Se.setFromQuaternion(B.quat,"YXZ"),Xe(B.pos,Se.y,Se.x,B.target,B.mode,1),_n()}function Ar(B){let we=Ue();if(!we.length)return;let He=Math.max(0,we.findIndex(Ne=>Ne.id===ve.id)),Ye=we[(He+B+we.length)%we.length];Zn(Ye.id)}function Ji(B){let we=1-Math.exp(-VT*B);ve.u+=(ve.tu-ve.u)*we,ve.v+=(ve.tv-ve.v)*we,ve.d+=(ve.td-ve.d)*we,ve.moving=Math.abs(ve.tu-ve.u)+Math.abs(ve.tv-ve.v)+Math.abs(ve.td-ve.d)>.001,Sn(M.position,ve.u,ve.v,ve.d),X(Wp(Xp(ve.def,ve.u)),0)}function si(B,we){let He=At(),Ye=He*Math.max(.2,M.aspect),Ne=we.x/q*2-1,ft=-(we.y/te)*2+1,nn=ve.tu+Ne*Ye*ve.td,ds=ve.tv+ft*He*ve.td,ao=st(ve.td*Math.exp(B),ph,ve.fit*1.05),zs=ao/ve.td;ve.tu=nn-(nn-ve.tu)*zs,ve.tv=ds-(ds-ve.tv)*zs,ve.td=ao,Zt()}function Bi(B,we){let He=2*ve.td*At()/Math.max(1,te);ve.tu-=B*He,ve.tv+=we*He,Zt()}let _n=()=>{xe=performance.now()};function er(){let B=W;if(!B)return;if(W=null,K==="look"){Gn.sync();return}M.getWorldDirection(We);let we=Math.max(1,M.position.distanceTo(B.target));gt(S.target.copy(M.position).addScaledVector(We,we)),E()}S.addEventListener("start",()=>{er(),_n()}),S.addEventListener("change",_n),S.addEventListener("end",_n);let Gn=My(M,b,{keyTarget:n,clampPosition:(B,we)=>v.resolve(B,we),floorY:0,onStart:()=>{er(),_n()},onChange:_n});function Ns(){for(let B of ye)B.el.remove();if(ye=[],!!T)for(let B of De){let we=T.labelAnchors.find(Ne=>Ne.id===B.id);if(!we)continue;let He=document.createElement("div");He.className="dwp3d-label";let Ye=document.createElement("span");if(Ye.className="dwp3d-label-title",Ye.textContent=B.text,He.appendChild(Ye),B.sub){let Ne=document.createElement("span");Ne.className="dwp3d-label-sub",Ne.textContent=B.sub,He.appendChild(Ne)}y.appendChild(He),ye.push({id:B.id,el:He,anchor:we.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let bi=new P,Os=[],us=[];function zo(B){B.shown!==!1&&(B.el.style.opacity="0",B.shown=!1)}function Ho(){if(tt){Os.length=0;for(let B of ye){if(bi.copy(B.anchor).project(w),!(bi.z<1&&Math.abs(bi.x)<1.05&&Math.abs(bi.y)<1.05)){zo(B);continue}B.sx=(bi.x*.5+.5)*q,B.sy=(-bi.y*.5+.5)*te,B.dist=w.position.distanceTo(B.anchor),Os.push(B)}Os.sort((B,we)=>B.dist-we.dist),us.length=0;for(let B of Os){B.w||(B.w=B.el.offsetWidth,B.h=B.el.offsetHeight);let we={x0:B.sx-B.w/2-3,x1:B.sx+B.w/2+3,y0:B.sy-B.h-3,y1:B.sy+7};if(us.some(Ne=>we.x0<Ne.x1&&we.x1>Ne.x0&&we.y0<Ne.y1&&we.y1>Ne.y0)){zo(B);continue}us.push(we);let He=st(1.45-B.dist/24,.3,1).toFixed(2),Ye=`translate(${B.sx.toFixed(1)}px, ${B.sy.toFixed(1)}px) translate(-50%, -100%)`;Ye!==B.tf&&(B.el.style.transform=Ye,B.tf=Ye),B.shown!==He&&(B.el.style.opacity=He,B.shown=He)}}}let ji=new _o;ji.layers.enable(hn);let Go=new Ce,hi=null,Us=!1,Fs=0,C=null,j=null,de=null,le=!1;function ue(B){if(!T)return null;Go.set(B.x/q*2-1,-(B.y/te)*2+1),w.updateMatrixWorld(),ji.setFromCamera(Go,w);let we=ji.intersectObjects(T.hoverTargets(),!0);for(let He of we)for(let Ye=He.object;Ye;Ye=Ye.parent)if(Ye.userData&&Ye.userData.hoverId)return{id:Ye.userData.hoverId,obj:Ye,distance:He.distance};return null}let Oe={log:0,anchor:new P,anchored:!1},at=new P;function $e(B){let we=ue(B),He=ji.ray,Ye=v.surfaceHit(He.origin,He.direction);return we&&we.distance<Ye&&(Ye=we.distance),Number.isFinite(Ye)?(Oe.anchor.copy(He.origin).addScaledVector(He.direction,Ye),!0):!1}function Qe(B){if(!Oe.log)return;let we=Oe.log*(1-Math.exp(-KT*B));Math.abs(Oe.log-we)<.001&&(we=Oe.log),Oe.log-=we;let He=S.target,Ye=M.position,Ne=Math.max(.001,Ye.distanceTo(He)),ft=Math.exp(we);if(we<0){let nn=Oe.anchored?Oe.anchor:He;if(ft=Math.max(ft,$T/Ne,YT/Math.max(.001,Ye.distanceTo(nn))),ft>=1){Oe.log=0;return}Ye.sub(nn).multiplyScalar(ft).add(nn),nn!==He&&He.sub(nn).multiplyScalar(ft).add(nn)}else{at.subVectors(Ye,He).divideScalar(Ne);let nn=v.containerExit(He,at)-.02,ds=v.armLength(He,at,Math.min(wy,nn),io,!1);if(ft=Math.min(ft,wy/Ne,Math.max(1,(ds+.5)/Ne)),ft<=1){Oe.log=0;return}Ye.sub(He).multiplyScalar(ft).add(He)}}let dt=B=>{if(K==="screen"&&T){B.preventDefault(),B.stopPropagation();let Ye=B.deltaMode===1?16:B.deltaMode===2?400:1,Ne=st(B.deltaY*Ye*Ey,-.6,.6);Ne&&!W&&ve.def&&si(Ne,St(B)),_n();return}if(K!=="orbit"||!T||!S.enabled)return;B.preventDefault(),B.stopPropagation();let we=B.deltaMode===1?16:B.deltaMode===2?400:1,He=st(B.deltaY*we*Ey,-.6,.6);He&&(er(),_n(),Oe.log&&Math.sign(He)!==Math.sign(Oe.log)&&(Oe.log=0),He<0&&(pe(),Oe.anchored=!O&&$e(St(B))),Oe.log=st(Oe.log+He,-1.2,1.2))};n.addEventListener("wheel",dt,{passive:!1,capture:!0});let St=B=>{let we=b.getBoundingClientRect();return{x:B.clientX-we.left,y:B.clientY-we.top}},kt=B=>{hi=St(B),Us=!0,de&&Math.hypot(hi.x-de.x,hi.y-de.y)>5&&(le=!0),de&&K==="screen"&&!W&&ve.def&&(Bi(hi.x-de.lx,hi.y-de.ly),_n()),de&&(de.lx=hi.x,de.ly=hi.y)},lt=()=>{hi=null,Us=!0},Bt=B=>{let we=St(B);de={...we,lx:we.x,ly:we.y,t:performance.now()},le=!1,_n(),b.style.cursor="grabbing"},ht=B=>{let we=St(B);if(de&&!le&&performance.now()-de.t<450&&!W){let Ye=ue(we),Ne=Ye&&String(Ye.id).startsWith("screen:")?String(Ye.id).slice(7):null;K==="screen"?Ne?Ne!==ve.id&&Zn(Ne):Ds():Ne?Zn(Ne):K==="orbit"&&i&&i(Ye?Ye.id:null)}de=null,le=!1,Us=!0,_n(),b.style.cursor=C?"pointer":"grab"};b.addEventListener("pointermove",kt),b.addEventListener("pointerleave",lt),b.addEventListener("pointerdown",Bt),b.addEventListener("pointerup",ht);let It=B=>{K!=="screen"||B.ctrlKey||B.metaKey||B.altKey||B.key!=="ArrowLeft"&&B.key!=="ArrowRight"||(B.preventDefault(),B.stopPropagation(),W||Ar(B.key==="ArrowLeft"?-1:1))};n.addEventListener("keydown",It);function Lt(B){let we=B;for(;we.parent;)we=we.parent;return!!T&&we===T.scene}let xn=new P,ot=new P,wn=new un,Ht=new bt,ri=new Ei;function Un(B){if(!D)return;let we=j;if(!we||we.userData.noHighlight||!Lt(we)){D.visible=!1;return}we.updateWorldMatrix(!0,!1),we.geometry?(we.geometry.boundingBox||we.geometry.computeBoundingBox(),we.geometry.boundingBox.getSize(xn),we.geometry.boundingBox.getCenter(ot),xn.multiplyScalar(1.06).addScalar(.03),Ht.compose(ot,wn.identity(),xn),D.matrix.multiplyMatrices(we.matrixWorld,Ht)):(ri.setFromObject(we),ri.getSize(xn).multiplyScalar(1.06).addScalar(.03),ri.getCenter(ot),D.matrix.compose(ot,wn.identity(),xn)),D.matrixWorldNeedsUpdate=!0,D.material.opacity=h?.85:.62+.28*(.5+.5*Math.sin(B*5)),D.visible=!0}function ks(){return m!=="auto"?m:!!W||O||!!de||!!Oe.log||he.easing||Gn.active()||ve.moving||performance.now()-xe<900||T&&T.busy()?XT:qT}let fi=0,pi=!1,Xt=0,yn=0,Dn=0,yt={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},An=!0,Pi=typeof document>"u"||!document.hidden;function ro(){yt.frames=0,yt.ticks=0,yt.t=0,yt.capTime=0,yt.cpu=0}function xh(){let B=yt.frames/yt.t,we=yt.ticks/yt.t,He=yt.capTime/yt.t,Ye=Math.max(1,Math.min(He>0?He:we,we)),Ne=B<Ye*.85,ft=uc[x];Ne?(yt.good=0,yt.slow+=1,yt.slow>=2&&ee>ft.minScale&&(ee=Math.max(ft.minScale,Math.round((ee-.1)*100)/100),yt.slow=0,me())):(yt.slow=0,B>=Ye*.95&&(yt.good+=1),yt.good>=5&&ee<1&&(ee=Math.min(1,Math.round((ee+.05)*100)/100),yt.good=0,me())),g.poll(),s&&s({fps:B,target:Ye,slow:Ne,scale:ee,minScale:ft.minScale,cpuMs:yt.frames?yt.cpu/yt.frames:0,gpuMs:_?g.take():null,gpuTimer:g.supported,calls:yt.calls,triangles:yt.tris,width:Math.round(q*Q*ee),height:Math.round(te*Q*ee),cap:m}),ro()}function pc(B){if(!pi)return;fi=requestAnimationFrame(pc);let we=Math.max(0,(B-Xt)/1e3);Xt=B,yt.ticks+=1,yt.t+=we;let He=ks();if(yt.capTime+=He*we,yt.t>=1&&xh(),He>0){let ft=1e3/He,nn=B-yn;if(nn<ft-1.5)return;yn=nn<ft*2?yn+ft:B}else yn=B;let Ye=performance.now(),Ne=Math.min(.1,Math.max(0,(B-Dn)/1e3));if(Dn=B,G+=Ne,W){W.t+=Ne;let ft=rs(Math.min(1,W.t/W.d));if(M.position.lerpVectors(W.p0,W.p1,ft),X(ql(W.yaw0,W.yaw1,ft),Wi(W.pitch0,W.pitch1,ft)),W.t>=W.d){let nn=W;W=null,nn.mode==="look"?Gn.sync():nn.mode==="orbit"&&S.target.copy(nn.target)}}else if(O&&T){if(ce-=Ne,ce<=0){ce=.4;let ft=T.focus(Me);ft||Me.fromArray(T.presets.overview.target),ft!==$&&($=ft,Z=1.6,o&&o(ft))}if(ne.subVectors(M.position,S.target),S.target.lerp(Me,1-Math.exp(-2.4*Ne)),Z>0){if(Z-=Ne,!ge){let ft=Ve("overview");ge=ft.pos.distanceTo(ft.target)}ne.setLength($t(ne.length(),$?6.8:ge,2,Ne))}M.position.copy(S.target).add(ne)}if(W||(K==="orbit"?(Qe(Ne),Y(),S.update(),A()):K==="screen"?ve.def&&Ji(Ne):Gn.update(Ne)),V(Ne),T&&T.update(Ne,G,w),Fs-=Ne,Us&&Fs<=0){Fs=.08,Us=!1;let ft=hi&&!de?ue(hi):null;ft&&K==="screen"&&ft.id===`screen:${ve.id}`&&(ft=null);let nn=ft?ft.id:null;j=ft?ft.obj:null,de||(b.style.cursor=nn?"pointer":"grab"),(nn||C)&&(C=nn,t&&t(nn?{id:nn,x:hi.x,y:hi.y}:null))}Un(G),Re(),f.info.reset(),_&&g.begin(),R&&T&&(w.updateMatrixWorld(),T.prerender(w),R.render(T.scene,w,h?0:G)),_&&g.end(),yt.calls=f.info.render.calls,yt.tris=f.info.render.triangles,Ho(),yt.frames+=1,yt.cpu+=performance.now()-Ye,Ge||(Ge=!0,l&&l())}function Bs(){let B=!Be&&!je&&An&&Pi&&q>1&&te>1;B&&!pi?(pi=!0,Xt=yn=Dn=performance.now(),ro(),fi=requestAnimationFrame(pc),a&&a(!0)):!B&&pi&&(pi=!1,cancelAnimationFrame(fi),a&&a(!1))}let oo=new ResizeObserver(()=>{ke(),Bs()});oo.observe(n);let Vo=typeof IntersectionObserver=="function"?new IntersectionObserver(B=>{An=B.some(we=>we.isIntersecting),Bs()}):null;Vo&&Vo.observe(n);let mc=()=>{Pi=!document.hidden,Bs()};document.addEventListener("visibilitychange",mc);let ie=B=>{B.preventDefault(),je=!0,Bs(),r&&r("context-lost")},it=()=>{je=!1,F(),oe(),Bs()};b.addEventListener("webglcontextlost",ie),b.addEventListener("webglcontextrestored",it);function bn(){if(!Be){Be=!0,pi=!1,cancelAnimationFrame(fi),oo.disconnect(),Vo&&Vo.disconnect(),document.removeEventListener("visibilitychange",mc),b.removeEventListener("pointermove",kt),b.removeEventListener("pointerleave",lt),b.removeEventListener("pointerdown",Bt),b.removeEventListener("pointerup",ht),b.removeEventListener("webglcontextlost",ie),b.removeEventListener("webglcontextrestored",it),n.removeEventListener("wheel",dt,{capture:!0}),n.removeEventListener("keydown",It),S.dispose(),Gn.dispose();try{g.dispose(),F()}finally{k.dispose(),f.dispose(),f.forceContextLoss(),b.remove(),y.remove()}}}try{ke(!0),oe(),Ie("overview")}catch(B){throw bn(),B}return Bs(),{setState(B){H=B,T&&T.setState(B)},setLive(B){N={...N||{},...B},T&&T.setLive(B)},setDemo(B){d=!!B,T&&T.setDemo(d)},resetState(){H=null,T&&T.resetState()},getQuality:()=>x,autoQuality:()=>p,setQuality(B){!uc[B]||B===x||(x=B,j=null,F(),oe())},getFrameCap:()=>m,setFrameCap(B){Ba.includes(B)&&(m=B)},getLook:()=>z,setLook(B){!Co.includes(B)||B===z||(z=B,T&&T.setLook(B)&&(U(),se()),_n())},getBrightness:()=>re,setBrightness(B){re=st(Number(B)||gn.initial,gn.min,gn.max),T&&(T.setBrightness(re),U()),_n()},setPerfDetail(B){_=!!B&&g.supported},setCameraPreset(B){O=!1,Fe(B),_n()},getMode:()=>K,setMode(B){!qp.includes(B)||B===K||(W=null,B==="look"?Te("look"):be(),_n())},screens:()=>Ue().map(B=>B.id),getScreen:()=>ve.id,focusScreen:B=>Zn(B),stepScreen(B){K==="screen"&&!W&&Ar(B<0?-1:1)},exitScreen:Ds,setFollow(B){B&&K==="screen"&&(W=null,Te(ve.back?ve.back.mode:"orbit")),B&&K!=="orbit"&&(Xr(M.position)==="hall"?be():Ie("overview")),O=!!B,$=void 0,ce=0,O&&(W=null)},setLabels(B){De=Array.isArray(B)?B:[],Ns()},setLabelsVisible(B){tt=!!B,y.style.display=tt?"":"none"},stats:()=>T?T.stats():null,dockInfo:()=>T?T.dockInfo():null,dispose:bn}}var Er=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),iA=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:Er(3,"a"),new_string:Er(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:Er(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},.6,!1,{agent:{name:"a11y-reviewer",label:"Review chart accessibility",after:16}}],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:Er(6,"c"),new_string:Er(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:Er(4,"v"),new_string:Er(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:Er(2,"b"),new_string:Er(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:140,o:120,tools:[["workflow",{meta:{name:"verify-forecast"}},11,!1,{workflow:{name:"verify-forecast",agents:[["Check API error paths","Verify",6.5],["Check chart contrast","Verify",8],["Check unit conversions","Verify",9.5,"failed"],["Summarize findings","Report",10.6]]}}],["subagent",{description:"Draft release notes"},.6,!1,{agent:{name:"notes-writer",label:"Draft release notes",after:13}}]]},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],hc={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function $p(n,e,t){let i=n.clock+Math.max(0,e),s=n.later.length;for(;s>0&&n.later[s-1].at>i;)s--;n.later.splice(s,0,{at:i,item:t})}function*dc(n,e){let t=e;for(;;){for(;n.later.length&&n.later[0].at<=n.clock+1e-9;)yield n.later.shift().item;if(t<=1e-9)return;let i=n.later.length?Math.min(t,n.later[0].at-n.clock):t;yield{wait:i},n.clock+=i,t-=i}}function*sA(n,e){let t=e.extra;if(t){if(t.agent){let i=`demo-agent-${n.agents++}`;yield{event:"subagent/catalog",data:{version:3,childId:i,mode:"one-shot",label:t.agent.label,name:t.agent.name}};let s=`${t.agent.label}: done`;$p(n,t.agent.after,{event:"user/message",data:{role:"user",content:[{type:"text",text:s}],source:{kind:"subagent-settled",form:"notice",summary:s,stopReason:t.agent.stop||"completed",senderSessionId:i}}})}if(t.workflow){let i=`demo-run-${n.runs++}`;e.runId=i,yield{event:"tool-workflow/run-start",data:{runId:i,name:t.workflow.name}},t.workflow.agents.forEach(([s,r,o,a],l)=>{$p(n,.3*(l+1),{event:"tool-workflow/agent-start",data:{runId:i,seq:l,label:s,phase:r,childId:`${i}-agent-${l}`}}),$p(n,o,{event:"tool-workflow/agent-end",data:{runId:i,seq:l,outcome:a||"completed"}})})}}}function*rA(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:hc.provider,model:hc.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...hc}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),f=Math.max(3,Math.round(h/.12));for(let p=0;p<f;p++){let x=d*(.82+.36*Math.abs(Math.sin(p*1.7+s)));e.streamed+=u/f,yield{live:{phase:c,tps:x}},yield*dc(e,h/f)}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,f,p,x,m])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:f,secs:p,fail:x,extra:m}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield*sA(e,h),yield*dc(e,.08);let u=c.slice().sort((h,f)=>h.secs-f.secs),d=.08*c.length;for(let h of u){let f=Math.max(0,h.secs-d);f>0&&(yield*dc(e,f)),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),h.runId&&(yield{event:"tool-workflow/run-end",data:{runId:h.runId,stopReason:"completed"}}),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield*dc(e,.35)}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*oA(n){for(;;)for(let e of iA)yield*rA(e,n),yield*dc(n,2.8),n.ctx>9e5&&(n.ctx=42e4)}function Ay({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0,clock:0,later:[],agents:0,runs:0},s=js(hc.provider,hc.model),r=oA(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Kd(u.usage);return h&&(i.balance=Math.max(0,i.balance-Zd(h,s,Mr(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,f=0;for(;f<u;){let{value:p}=r.next();p.wait?h+=p.wait*1e3*3:p.event&&(d.push(l(p,h)),p.event==="turn/end"&&f++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:f}=r.next();if(f.wait){d.length&&n?.(d),o=setTimeout(u,f.wait*1e3/t);return}f.event?d.push(l(f,Date.now())):f.live&&e?.(c(f.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var aA="/api/dsh-work-process-3d/balance";var lA=n=>n>=11904&&n<=40959||n>=44032&&n<=55215||n>=63744&&n<=64255||n>=65280&&n<=65519;function cA(n){if(typeof n!="string"||!n)return 0;let e=0,t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<=32||(s>=55296&&s<=56319?(e++,i++):lA(s)?e++:t++)}return e*.6+t*.3}var Ry=n=>n?n.kind==="tool-call"?n.argsRaw:n.kind==="text"||n.kind==="reasoning"?n.text:null:null;function Cy({windowMs:n=2e3}={}){let e="",t=[],i=0,s="idle",r=[],o=0;function a(){e="",t=[],i=0,s="idle",r.length=0,o=0}function l(c){for(;r.length&&c-r[0][0]>n;)o-=r.shift()[1];if(!r.length)return o=0,0;let u=Math.max(500,Math.min(n,c-i));return o*1e3/u}return{push(c,u){let d=c&&Array.isArray(c.blocks)?c.blocks:null;if(!d)return a(),{phase:s,tps:0};let h=`${c.turn}:${c.step}`;h!==e&&(a(),e=h);let f=0;for(let x=0;x<d.length;x++){let m=Ry(d[x]);if(typeof m!="string")continue;let g=t[x]||0;m.length>g&&(f+=cA(m.slice(g))),t[x]=m.length}f>0&&(!r.length&&!i&&(i=u),r.push([u,f]),o+=f);let p=d.length?d[d.length-1]:null;return s=!p||Ry(p)==null?"idle":p.kind==="reasoning"?"reasoning":"generating",{phase:s,tps:l(u)}},tick(c){return{phase:s,tps:e?l(c):0}},reset:a}}var za=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0?n:null;function Py(n,e){if(!n)return null;if(!e||typeof e!="object")return n;let t=za(e.projectedTokens),i=t??za(e.pressureTokens),s=za(e.contextWindow);return i==null&&!s?n:{...n,contextTokens:i??n.contextTokens,contextWindow:s||n.contextWindow}}var fc={balance:null,currency:"CNY",toppedUp:null,granted:null,source:null},uA=new Set(["ready","failed","signed-out","unavailable"]);function dA(n){if(!n||n.ok!==!0)return{status:"failed",...fc};let e=uA.has(n.status)?n.status:"failed",t=Array.isArray(n.wallets)?n.wallets.filter(s=>s&&typeof s.currency=="string"):[],i=t.find(s=>s.currency==="CNY")||t[0];return e!=="ready"||!i||za(i.total)==null?{status:e==="ready"?"unavailable":e,...fc}:{status:"ready",balance:i.total,currency:i.currency,toppedUp:za(i.toppedUp),granted:za(i.granted),source:n.source==="account"||n.source==="api-key"?n.source:null}}function hA(n=typeof window<"u"?window:void 0){let e=n&&n.__DSH_BOOT__,t=e&&e.release&&e.release.version;return typeof t=="string"?t:""}async function Iy({lang:n="en",version:e=hA(),fetchImpl:t,signal:i}={}){let s=t||(typeof fetch=="function"?fetch:null);if(!s)return{status:"unavailable",...fc};let r={version:e,locale:n==="zh"?"zh-CN":"en-US",timezoneOffsetSeconds:-new Date().getTimezoneOffset()*60},o;try{o=await s(aA,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),credentials:"same-origin",signal:i})}catch(l){if(i&&i.aborted)throw l;return{status:"failed",...fc}}if(o.status===404)return{status:"unavailable",...fc};let a=null;try{a=await o.json()}catch{a=null}return dA(a)}var Ly=`
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
`;var{useEffect:Zi,useRef:fn,useState:pn,useReducer:Vy,useCallback:Ci}=_e,fA="workProcess3d",Wy="dwp3d.source",pA=5e3,mA=12e4,gA=4e3,xA=250,Kp="dwp3d.quality",Dy="dwp3d.hint",Ny="dwp3d.hint.look",yA=["overview","fuel","engine","stations","dock","products","living","balcony"],vA=["raw","normal","gold","bad"],Oy={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},Uy={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},_A=200,bA=4,gh=3,Xy="dwp3d.fps",Fy="dwp3d.perf",qy="dwp3d.look",$y="dwp3d.brightness";function so(n){try{return window.localStorage.getItem(n)}catch{return null}}function Tr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function ky(){let n=so(Kp);return Bo.includes(n)?n:null}function MA(){let n=so(Xy),e=n==null?"auto":Number(n);return Ba.includes(e)?e:"auto"}function SA(){return typeof _e.useId=="function"?_e.useId():"dwp3d"}function wA(){let n=so(qy);return Co.includes(n)?n:Yr}function EA(){let n=Number(so($y));return Number.isFinite(n)&&n>=gn.min&&n<=gn.max?n:gn.initial}function TA(){return so(Wy)==="demo"?"demo":"live"}var Ha=class extends _e.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){this.props.onError&&this.props.onError(e)}render(){return this.state.failed?null:this.props.children}};function By({use:n,name:e,onValue:t}){let i=n(e);return Zi(()=>t(i),[i,t]),null}var AA=n=>n?`${n.running?1:0}${n.blank?1:0}`:"";function RA({use:n,onValue:e}){let t=n(AA);return Zi(()=>e(t),[t,e]),null}var CA=n=>n&&n.legacy&&n.legacy.partial||null;function PA({use:n,onValue:e}){let t=n(CA);return Zi(()=>e(t),[t,e]),null}function IA(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function LA({t:n,perf:e}){if(!e)return _e.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},_e.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),on(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return _e.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>_e.createElement("div",{key:s,className:"dwp3d-perf-row"},_e.createElement("span",null,s),_e.createElement("b",null,r))))}function DA(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":n==="dock"?"dock":"products":null}function NA(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function OA(n){let[e,t]=Vy(i=>i+1,0);return Zi(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Zp=(n,e)=>n&&(n[e]||n.en)||"",Yp=(n,e)=>`${Zp(n,e)} · ${n.code}`;function zy(n){let e=t=>({id:t,text:Zp(Kt[t],n),sub:Kt[t].code});return[e("tank"),e("engine"),e("robot"),e("dock"),...Hd.map(t=>({id:`station:${t}`,text:Zp(vi[t],n),sub:vi[t].code})),e("loadport"),e("stocker"),e("living")]}var UA=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework",FA={loading:"bal.loading","signed-out":"bal.signedOut",failed:"bal.failed",unavailable:"bal.unavailable"},Hy=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now();function Yy(n,e,t,i){return e!=null?Tn(e,t):n(FA[i]||"bal.unavailable")}function Gy(n,e){let t=typeof e.fileCount=="number"?e.fileCount:e.files.length,i=[[n("status."+UA(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:t})]];for(let r of e.files.slice(0,6))i.push([hp(r.path),`+${r.added} −${r.removed}`]);t>6&&i.push(["…",`+${t-6}`]);let s=(e.endedAt||Date.now())-e.startedAt;return i.push(["",n("hover.batchCost",{cost:Tn(e.cost),time:Px(s)})]),i}function kA(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:Yp(Kt[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:Tn(d)});switch(n){case"tank":{let d=[[e.demo?t("m.balanceDemo"):t("m.balance"),Yy(t,e.balance,e.currency,s.balanceStatus)]];return!e.demo&&e.balance!=null&&s.toppedUp!=null&&(d.push([t("m.toppedUp"),Tn(s.toppedUp,e.currency)]),d.push([t("m.granted"),Tn(s.granted||0,e.currency)])),!e.demo&&e.balance!=null&&s.balanceSource==="api-key"&&d.push(["",t("m.balanceViaKey")]),o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${cs(l.contextRatio)} · ${on(i.contextTokens)} / ${on(i.contextWindow)}`],[t("row.miss"),on(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),on(i.totals.write)]),d.push([t("row.hit"),on(i.totals.hit)],[t("row.output"),on(i.totals.output)],[t("row.reasoning"),on(i.totals.reasoning)],[t("row.cost"),Tn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"dock":{let d=i.agents||[];if(!d.length)return c("dock",[["",t("dock.none")]]);let h=g=>d.filter(_=>_.status===g).length,f=d.filter(g=>g.status==="running"),p=[[t("dock.running"),String(f.length)],[t("dock.done"),String(h("done"))]];h("error")&&p.push([t("dock.failed"),String(h("error"))]),h("stopped")&&p.push([t("dock.stopped"),String(h("stopped"))]),e.dock&&e.dock.overflow&&p.push([t("dock.queued"),String(e.dock.overflow)]);let x=i.workflows||[],m=x.filter(g=>g.status==="running").pop()||x[x.length-1];m&&p.push([t("dock.workflow"),`${m.name||"—"}${m.phase?` · ${m.phase}`:""} · ${m.done+m.failed}/${m.agents}`]);for(let g of f.slice(-3))p.push(["",g.label||g.name||g.id]);return c("dock",p)}case"stocker":{let d=i.turns.filter(f=>f.status!=="running"),h=d.filter(f=>f.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${Yp(Kt.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:Gy(t,d)}}default:break}if(n.startsWith("screen:")){let d=n.slice(7),h={flow:"screen.descFlow",main:"screen.descMain",cost:"screen.descCost"}[d];return h?{title:t("screen."+d),body:t(h),rows:[["",t("screen.click")]]}:null}if(n.startsWith("station:")){let d=n.slice(8),h=vi[d];if(!h)return null;let f=i.calls.filter(_=>_.kind===d),p=f.filter(_=>_.status==="running").pop(),x=f[f.length-1],m=[];p?m.push([t("hover.working"),p.label||p.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=f.filter(_=>_.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:Yp(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(f=>f.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?Gy(t,h):[]}}return null}function BA({hover:n,data:e,rootRef:t}){let i=kA(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return _e.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},_e.createElement("h4",null,i.title),i.body?_e.createElement("p",null,i.body):null,i.rows.length?_e.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>_e.createElement("div",{className:"row",key:h},_e.createElement("span",null,u),_e.createElement("span",null,d)))):null)}function zA({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return _e.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},_e.createElement("div",{className:"k"},n.k),_e.createElement("div",{className:"v"},n.v),n.s?_e.createElement("div",{className:"s"},n.s):null,n.bar!=null?_e.createElement("div",{className:"dwp3d-bar"},_e.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function HA({t:n,calls:e}){return _e.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},_e.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=Uy[t.status]?t.status:"running",s=Uy[i],r=vi[t.kind]||vi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return _e.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},_e.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),_e.createElement("span",{className:"dwp3d-sr"},n("call."+i)),_e.createElement("code",null,r.code),_e.createElement("span",{className:"l"},o))}):_e.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function GA({t:n,hintOn:e,hintKey:t,onDismiss:i}){return _e.createElement("div",{className:"dwp3d-panel dwp3d-legend"},_e.createElement("div",{className:"dwp3d-legend-row"},_e.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),vA.map(s=>_e.createElement("span",{className:"dwp3d-legend-item",key:s},_e.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?_e.createElement("div",{className:"dwp3d-hint"},_e.createElement("span",null,n(t)),_e.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}function VA({t:n,id:e,ids:t,onStep:i,onBack:s}){let r=Math.max(0,t.indexOf(e)),o=t.length>1;return _e.createElement("div",{className:"dwp3d-screenbar-wrap"},_e.createElement("div",{className:"dwp3d-panel dwp3d-screenbar",role:"toolbar","aria-label":n("screen.bar")},_e.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.prev"),"aria-label":n("screen.prev"),onClick:()=>i(-1)},"◀"),_e.createElement("div",{className:"dwp3d-screenbar-name","aria-live":"polite"},_e.createElement("b",null,n("screen."+e)),_e.createElement("span",null,n("screen.count",{i:r+1,n:t.length}))),_e.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.next"),"aria-label":n("screen.next"),onClick:()=>i(1)},"▶"),_e.createElement("span",{className:"sep","aria-hidden":"true"}),_e.createElement("button",{type:"button",className:"dwp3d-btn",onClick:s},n("screen.back"))),_e.createElement("p",{className:"dwp3d-screenbar-hint"},n("screen.hint")))}var WA=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function Ky(n){let{ctx:e}=n,t=OA(e),i=NA(e),s=n.tBound||n.t,r=Ci((ie,it)=>{let bn=typeof s=="function"?s(ie):ie,B=typeof bn=="string"&&bn?bn:ie;return it?Ix(B,it):B},[s]),o=fn(r);o.current=r;let a=fn(i);a.current=i;let l=fn(null),c=fn(null),u=fn(null),d=fn(eh()),h=fn({phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"loading"}),f=fn(0),p=fn(!1),x=fn(!0),m=fn(0),g=fn({settle:gh,low:0}),[,_]=Vy(ie=>ie+1,0),[b,y]=pn(0),[M,w]=pn(()=>ky()!=null),v=fn(M),[S,T]=pn(()=>ky()||"medium"),R=fn(S),[D,k]=pn(MA),H=fn(D),[N,q]=pn(()=>so(Fy)==="on"),te=fn(N);te.current=N;let[Q,ee]=pn(null),[W,K]=pn(wA),O=fn(W),[$,ce]=pn(EA),Z=fn($),[ge,Me]=pn(!1),ne=SA(),[ye,De]=pn("overview"),[tt,Be]=pn(!1),[je,Ge]=pn(!0),xe=fn(je);xe.current=je;let[G,z]=pn(!0),[re,J]=pn(()=>so(Dy)!=="off"),[se,Re]=pn(()=>so(Ny)!=="off"),[F,oe]=pn("orbit"),[fe,U]=pn(null),[Ke,ut]=pn(!1),[gt,Pe]=pn(null),[A,Y]=pn(!0),[he,I]=pn(null),[E,V]=pn(null),[pe,me]=pn(null),ke=typeof n.useProjection=="function"?n.useProjection:null,Ve=typeof n.useSession=="function"?n.useSession:null,Ee=typeof n.useChat=="function"?n.useChat:null,[Se,We]=pn(TA),[X,Te]=pn(!1),be=!!ke&&!X,Ie=Se==="demo"||!be,Fe=fn(Ie);Fe.current=Ie;let Xe=n.sessionId||"",[ve,Pt]=pn(0),[Ue,xt]=pn(!1),[At,Ze]=pn(!1),Zt=fn(void 0),Sn=fn(void 0),Zn=fn(""),Ls=fn(null);Ls.current||(Ls.current=Cy());let Ds=fn({status:"loading",balance:null,currency:"CNY",toppedUp:null,granted:null,source:null}),Ar=fn(0),Ji=fn(null),si=Ci(()=>{f.current||(f.current=setTimeout(()=>{f.current=0,x.current?_():p.current=!0},_A))},[]),Bi=Ci(ie=>{me(ie),clearTimeout(m.current),m.current=setTimeout(()=>me(null),3500)},[]),_n=Ci(ie=>{Bo.includes(ie)&&(R.current=ie,T(ie),g.current={settle:gh,low:0},u.current&&u.current.setQuality(ie))},[]),er=fn({running:void 0,blank:!1}),Gn=Ci(()=>{Fe.current||(d.current=Py(Zt.current,Sn.current)||eh(),u.current&&u.current.setState(d.current),si())},[si]),Ns=Ci(ie=>{Ds.current=ie,!Fe.current&&(Object.assign(h.current,{balance:ie.balance,currency:ie.currency,balanceStatus:ie.status,toppedUp:ie.toppedUp,granted:ie.granted,balanceSource:ie.source}),u.current&&u.current.setLive({balance:ie.balance,currency:ie.currency,balanceStatus:ie.status}),si())},[si]),bi=Ci(()=>{if(Fe.current)return;Ji.current&&Ji.current.abort();let ie=typeof AbortController=="function"?new AbortController:null;Ji.current=ie,Iy({lang:a.current,signal:ie?ie.signal:void 0}).then(it=>{ie&&ie.signal.aborted||(Ji.current=null,!(it.status!=="ready"&&it.status!=="signed-out"&&Ds.current.balance!=null)&&Ns(it))},()=>{})},[Ns]),Os=Ci(ie=>{clearTimeout(Ar.current),Ar.current=setTimeout(bi,ie)},[bi]),us=Ci(ie=>{Zt.current=ie,ie&&xt(!0),Gn();let it=ie&&Array.isArray(ie.turns)?ie.turns:[],bn=it.length?it[it.length-1]:null,B=bn?`${bn.no}:${bn.status}`:"";Zn.current&&B!==Zn.current&&bn&&bn.status!=="running"&&Os(gA),Zn.current=B},[Gn,Os]),zo=Ci(ie=>{Sn.current=ie,Gn()},[Gn]),Ho=Ci(ie=>{let it=ie?ie[0]==="1":void 0;er.current={running:it,blank:ie?ie[1]==="1":!1},!Fe.current&&(h.current.running=it,u.current&&u.current.setLive({running:it}),si())},[si]),ji=Ci(ie=>{if(Fe.current)return;let it=h.current;it.phase===ie.phase&&Math.abs((it.tps||0)-ie.tps)<.05||(it.phase=ie.phase,it.tps=ie.tps,u.current&&u.current.setLive({phase:ie.phase,tps:ie.tps}),si())},[si]),Go=Ci(ie=>{ji(Ls.current.push(ie,Hy()))},[ji]),hi=Ci(ie=>{Te(!0),typeof console<"u"&&console.warn("[dsh-work-process-3d] live data unavailable:",ie)},[]),Us=Ci(ie=>{ie!=="live"&&ie!=="demo"||(We(ie),Tr(Wy,ie==="demo"?"demo":null))},[]);Zi(()=>{let ie=c.current;if(!ie)return;let it=null,bn=!1,B=0;Y(!0),I(null),V(null),Pe(null),oe("orbit"),U(null);let we=Ne=>{I(zs=>zs&&zs.kind==="lost"?null:zs),te.current&&ee(Ne);let ft=g.current;if(ft.settle>0){ft.settle-=1;return}if(v.current)return;let nn=Ne&&Ne.scale<=Ne.minScale+.001;if(ft.low=Ne&&Ne.slow&&nn?ft.low+1:0,ft.low<bA)return;ft.low=0;let ds=Bo.indexOf(R.current);if(ds<=0)return;let ao=Bo[ds-1];_n(ao),Bi(o.current("quality.downgraded",{q:o.current(`quality.${ao}`)}))},He=()=>{try{it=Ty(ie,{quality:v.current?R.current:"auto",fps:H.current,look:O.current,brightness:Z.current,demo:Fe.current,onHover:Pe,onSelect:Ne=>{let ft=DA(Ne);!ft||!it||(it.setCameraPreset(ft),De(ft),Be(!1))},onPerf:we,onError:(Ne,ft)=>{if(Ne==="shader"){V(nn=>nn||String(ft||""));return}Ne==="context-lost"&&(Pe(null),I({kind:"lost"}))},onActive:Ne=>{x.current=Ne,Ne&&p.current&&(p.current=!1,_())},onReady:()=>Y(!1),onMode:Ne=>{oe(Ne),(Ne==="look"||Ne==="screen")&&Be(!1)},onScreen:Ne=>{U(Ne),Ne&&Pe(null)}})}catch(Ne){for(;ie.firstChild;)ie.removeChild(ie.firstChild);Y(!1),I({kind:"webgl",msg:String(Ne&&Ne.message||Ne)});return}u.current=it,R.current=it.getQuality(),T(R.current),g.current={settle:gh,low:0},it.setLabels(zy(a.current)),it.setLabelsVisible(xe.current),it.setPerfDetail(te.current),Pt(Ne=>Ne+1),_()},Ye=requestAnimationFrame(()=>{B=requestAnimationFrame(()=>{bn||He()})});return()=>{bn=!0,cancelAnimationFrame(Ye),cancelAnimationFrame(B),it&&it.dispose(),u.current=null,clearTimeout(f.current),f.current=0}},[b,_n,si,Bi]),Zi(()=>{let ie=u.current;if(!ie)return;if(ie.resetState(),ie.setDemo(Ie),Ls.current.reset(),Ie){let bn=()=>u.current===ie,B=Ay({onEvents:we=>{bn()&&(d.current=Dp(d.current,we),ie.setState(d.current),si())},onLive:we=>{bn()&&(Object.assign(h.current,we),ie.setLive(we),si())}});return d.current=Dp(eh(),B.prefill(2)),h.current={phase:"idle",tps:0,balance:B.balance,currency:"CNY",balanceStatus:"ready",running:void 0},ie.setState(d.current),ie.setLive(h.current),B.start(),_(),()=>B.stop()}let it=Ds.current;h.current={phase:"idle",tps:0,balance:it.balance,currency:it.currency,balanceStatus:it.status,toppedUp:it.toppedUp,granted:it.granted,balanceSource:it.source,running:er.current.running},ie.setLive(h.current),Zn.current="",Gn(),_()},[ve,Ie,Xe,si,Gn]),Zi(()=>{if(Ie)return;bi();let ie=setInterval(()=>{let it=typeof document<"u"&&document.visibilityState==="hidden";x.current&&!it&&bi()},mA);return()=>{clearInterval(ie),clearTimeout(Ar.current),Ji.current&&Ji.current.abort(),Ji.current=null}},[Ie,bi]),Zi(()=>{if(Ie)return;let ie=setInterval(()=>ji(Ls.current.tick(Hy())),xA);return()=>clearInterval(ie)},[Ie,ji]),Zi(()=>{if(Ze(!1),Ie||Ue)return;let ie=setTimeout(()=>Ze(!0),pA);return()=>clearTimeout(ie)},[Ie,Ue]),Zi(()=>()=>clearTimeout(m.current),[]),Zi(()=>{u.current&&u.current.setLabels(zy(i))},[i,t]),Zi(()=>{u.current&&u.current.setLabelsVisible(je)},[je]),Zi(()=>{let ie=()=>ut(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",ie),()=>document.removeEventListener("fullscreenchange",ie)},[]);let Fs=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},C=ie=>{let it=u.current;it&&(it.setCameraPreset(ie),De(ie),Be(!1),it.getMode()==="look"&&Fs())},j=()=>{let ie=u.current;if(ie){if(ie.getScreen()){ie.exitScreen();return}ie.focusScreen("main")&&(Be(!1),Fs())}},de=ie=>{u.current&&u.current.stepScreen(ie)},le=()=>{u.current&&u.current.exitScreen()},ue=()=>{let ie=!tt;Be(ie),u.current&&u.current.setFollow(ie)},Oe=()=>{let ie=l.current;if(!ie)return;let it=()=>Bi(o.current("error.fullscreen"));try{let bn=document.fullscreenElement?document.exitFullscreen():ie.requestFullscreen();bn&&typeof bn.catch=="function"&&bn.catch(it)}catch{it()}},at=ie=>{if(ie==="auto"){Tr(Kp,null),v.current=!1,w(!1),u.current&&_n(u.current.autoQuality());return}Bo.includes(ie)&&(Tr(Kp,ie),v.current=!0,w(!0),_n(ie))},$e=ie=>{let it=ie==="auto"?"auto":Number(ie);Ba.includes(it)&&(H.current=it,k(it),Tr(Xy,it==="auto"?null:String(it)),g.current={settle:gh,low:0},u.current&&u.current.setFrameCap(it))},Qe=()=>{let ie=!N;q(ie),Tr(Fy,ie?"on":null),ie||ee(null),u.current&&u.current.setPerfDetail(ie)},dt=ie=>{Co.includes(ie)&&(O.current=ie,K(ie),Tr(qy,ie===Yr?null:ie),u.current&&u.current.setLook(ie))},St=ie=>{let it=Math.min(gn.max,Math.max(gn.min,Number(ie)||gn.initial));Z.current=it,ce(it),Tr($y,Math.abs(it-gn.initial)<.001?null:String(it)),u.current&&u.current.setBrightness(it)},kt=()=>{F==="look"?(Tr(Ny,"off"),Re(!1)):(Tr(Dy,"off"),J(!1))},lt=ie=>{let it=u.current;it&&(it.setMode(ie),oe(it.getMode()),ie==="look"&&(Be(!1),Fs()))},Bt=()=>y(ie=>ie+1),ht=d.current,It=h.current,Lt=nh(ht),xn=js(ht.provider,ht.model),ot=Mr(Date.now()),wn=It.phase&&It.phase!=="idle"?It.phase:It.running===!1?"idle":ht.phase,Ht=typeof It.balance=="number"?It.balance:null,ri=It.currency||"CNY",Un=Ht!=null&&xn&&ri!=="USD"?Jd(Ht,xn,ot):0,ks=ht.turns.filter(ie=>ie.status!=="running"),fi=ks.filter(ie=>ie.status==="ok").length,pi=Lt.contextRatio>=.8?"#ff5d5d":Lt.contextRatio>=.6?"#ffb347":"#4d6bfe",Xt=It.tps>.5&&(wn==="generating"||wn==="reasoning")?` · ${r("unit.tps",{n:Math.round(It.tps)})}`:"",yn=ht.totals.miss+ht.totals.write,Dn=ht.files,yt=[{id:"balance",k:r(Ie?"m.balanceDemo":"m.balance"),v:Yy(r,Ht,ri,It.balanceStatus),s:Un?r("m.balanceSub",{tokens:on(Un)}):"",title:!Ie&&Ht!=null&&It.toppedUp!=null?r("m.balanceTitle",{topped:Tn(It.toppedUp,ri),granted:Tn(It.granted||0,ri)}):void 0},{id:"context",k:r("m.context"),v:cs(Lt.contextRatio),s:`${on(ht.contextTokens)} / ${on(ht.contextWindow)}`,bar:Lt.contextRatio,barColor:pi,title:r("m.contextTitle",{pct:cs(Lt.contextRatio),used:on(ht.contextTokens),window:on(ht.contextWindow)})},{id:"input",k:r("m.input"),v:on(Lt.prompt),s:r("m.inputSub",{rate:cs(Lt.hitRate),miss:on(yn)}),title:r("m.inputTitle",{total:on(Lt.prompt),hit:on(ht.totals.hit),rate:cs(Lt.hitRate),miss:on(yn),write:ht.totals.write>0?r("m.writeNote",{n:on(ht.totals.write)}):"",saved:Tn(ht.totals.savings)})},{id:"output",k:r("m.output"),v:on(ht.totals.output),s:r("m.outputSub",{n:on(ht.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:Tn(ht.totals.cost),s:r("m.costSub",{peak:Tn(ht.totals.costPeak),off:Tn(ht.totals.costOffPeak)}),title:r("m.costTitle",{cost:Tn(ht.totals.cost),requests:ht.totals.requests,peak:Tn(ht.totals.costPeak),off:Tn(ht.totals.costOffPeak),saved:Tn(ht.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(ht.tools.calls),s:r("m.toolsSub",{n:ht.tools.errors,rate:cs(Lt.toolSuccess)}),title:r("m.toolsTitle",{calls:ht.tools.calls,running:ht.tools.running,n:ht.tools.errors})},{id:"products",k:r("m.products"),v:`${Dn.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:Dn.added,r:Dn.removed,ok:fi,done:ks.length}),title:r("m.productsTitle",{n:Dn.count,a:Dn.added,r:Dn.removed,ok:fi,done:ks.length})},{id:"efficiency",k:r("m.efficiency"),v:`${Lt.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:Tn(Lt.costPerFile)}),title:r("m.efficiencyHint")}],An=ht.calls.slice(-5).reverse(),Pi=gt&&gt.id==="dock"&&u.current?u.current.dockInfo():null,ro={t:r,s:ht,live:It,lang:i,price:xn,peak:ot,m:Lt,phase:wn,balance:Ht,currency:ri,demo:Ie,dock:Pi},xh=!Ie&&!Ue&&At,pc=!Ie&&Ue&&ht.turnCount===0&&!ht.calls.length,Bs=!!he&&he.kind==="webgl",oo=!A&&!Bs,Vo=fe&&u.current?u.current.screens():[],mc=M?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return _e.createElement("div",{ref:l,className:`dwp3d-root${Bs?" fail":""}`},_e.createElement("style",null,Ly),Ie?null:_e.createElement(_e.Fragment,null,_e.createElement(Ha,{onError:hi},_e.createElement(By,{use:ke,name:fA,onValue:us})),_e.createElement(Ha,null,_e.createElement(By,{use:ke,name:"contextPressure",onValue:zo})),Ve?_e.createElement(Ha,null,_e.createElement(RA,{use:Ve,onValue:Ho})):null,Ee?_e.createElement(Ha,null,_e.createElement(PA,{use:Ee,onValue:Go})):null),_e.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),ge?_e.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>Me(!1)}):null,oo?_e.createElement("div",{className:"dwp3d-top"},_e.createElement("div",{className:"dwp3d-panel dwp3d-title"},_e.createElement("div",{className:"dwp3d-title-row"},_e.createElement("h2",null,r("title")),Ie?_e.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):_e.createElement("span",{className:"dwp3d-chip live",title:r("badge.liveHint")},r("badge.live")),ht.model?_e.createElement("span",{className:"dwp3d-chip"},`${ht.model}${ht.effort?` · ${ht.effort}`:""}`):null,_e.createElement("span",{className:"dwp3d-chip"},_e.createElement("i",{className:"dwp3d-dot",style:{color:Oy[wn]||Oy.idle},"aria-hidden":"true"}),`${r("phase."+wn)}${Xt}`)),Ie?_e.createElement("p",{className:"dwp3d-note"},r(be?"badge.demoHint":X?"live.failed":"live.unsupported")):null,xh?_e.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"status"},r("live.missing")," ",_e.createElement("button",{type:"button",className:"dwp3d-link",onClick:()=>Us("demo")},r("live.showDemo"))):null,pc?_e.createElement("p",{className:"dwp3d-note"},r("live.idle")):null,E?_e.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:E})):null),_e.createElement("div",{className:"dwp3d-right"},_e.createElement("div",{className:"dwp3d-panel dwp3d-tools"},_e.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},yA.map(ie=>{let it=!tt&&!fe&&ye===ie;return _e.createElement("button",{key:ie,type:"button",className:`dwp3d-btn${it?" on":""}`,"aria-pressed":it,onClick:()=>C(ie)},r("view."+ie))}),_e.createElement("button",{type:"button",className:`dwp3d-btn${fe?" on":""}`,title:r("view.screensHint"),"aria-pressed":!!fe,onClick:j},r("view.screens"))),_e.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},qp.map(ie=>_e.createElement("button",{key:ie,type:"button",className:`dwp3d-btn${F===ie?" on":""}`,title:r(`mode.${ie}Hint`),"aria-pressed":F===ie,onClick:()=>lt(ie)},r("mode."+ie)))),_e.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},_e.createElement("button",{type:"button",className:`dwp3d-btn${tt?" on":""}`,title:r("ctl.followHint"),"aria-pressed":tt,onClick:ue},r("ctl.follow")),_e.createElement("button",{type:"button",className:`dwp3d-btn${je?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":je,onClick:()=>Ge(ie=>!ie)},r("ctl.labels")),_e.createElement("button",{type:"button",className:`dwp3d-btn${G?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":G,onClick:()=>z(ie=>!ie)},r("ctl.panels")),_e.createElement("button",{type:"button",className:`dwp3d-btn${ge?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":ge,"aria-haspopup":"dialog",onClick:()=>Me(ie=>!ie)},r("ctl.display")),WA()?_e.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":Ke,onClick:Oe},r(Ke?"ctl.exitFullscreen":"ctl.fullscreen")):null)),ge?_e.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},_e.createElement("div",{className:"dwp3d-pop-row"},_e.createElement("span",{className:"dwp3d-pop-k"},r("source.label")),_e.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("source.label")},["live","demo"].map(ie=>{let it=ie==="demo"?Ie:!Ie,bn=ie==="live"&&!be;return _e.createElement("button",{key:ie,type:"button",className:`dwp3d-btn${it?" on":""}`,"aria-pressed":it,disabled:bn,title:r(bn?"live.unsupported":"source."+ie+"Hint"),onClick:()=>Us(ie)},r("source."+ie))}))),_e.createElement("div",{className:"dwp3d-pop-row"},_e.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),_e.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},Co.map(ie=>_e.createElement("button",{key:ie,type:"button",className:`dwp3d-btn${W===ie?" on":""}`,"aria-pressed":W===ie,onClick:()=>dt(ie)},r("look."+ie))))),_e.createElement("div",{className:"dwp3d-pop-row"},_e.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-brightness`},r("ctl.brightness")),_e.createElement("input",{id:`${ne}-brightness`,className:"dwp3d-range",type:"range",min:gn.min,max:gn.max,step:gn.step,value:$,onChange:ie=>St(ie.target.value)}),_e.createElement("b",{className:"dwp3d-pop-v"},`${Math.round($*100)}%`),_e.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs($-gn.initial)<.001,onClick:()=>St(gn.initial)},"↺")),_e.createElement("div",{className:"dwp3d-pop-row"},_e.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-quality`},r("ctl.quality")),_e.createElement("select",{id:`${ne}-quality`,className:"dwp3d-select",value:M?S:"auto",onChange:ie=>at(ie.target.value)},_e.createElement("option",{value:"auto"},mc),Bo.map(ie=>_e.createElement("option",{key:ie,value:ie},r("quality."+ie))))),_e.createElement("div",{className:"dwp3d-pop-row"},_e.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ne}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),_e.createElement("select",{id:`${ne}-fps`,className:"dwp3d-select",value:String(D),title:r("ctl.fpsHint"),onChange:ie=>$e(ie.target.value)},Ba.map(ie=>_e.createElement("option",{key:String(ie),value:String(ie)},IA(r,ie))))),_e.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},_e.createElement("input",{type:"checkbox",checked:N,onChange:Qe}),_e.createElement("span",null,r("ctl.perfShow")))):null,N?_e.createElement(LA,{t:r,perf:Q}):null)):null,_e.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},pe?_e.createElement("div",{className:"dwp3d-panel dwp3d-toast"},pe):null),oo&&fe?_e.createElement(VA,{t:r,id:fe,ids:Vo,onStep:de,onBack:le}):null,oo&&G&&!fe?_e.createElement("div",{className:"dwp3d-bottom"},_e.createElement("div",{className:"dwp3d-mid"},_e.createElement(HA,{t:r,calls:An}),_e.createElement(GA,{t:r,hintOn:F==="look"?se:re,hintKey:F==="look"?"hint.look":"hint.controls",onDismiss:kt})),_e.createElement("div",{className:"dwp3d-cards"},yt.map(ie=>_e.createElement(zA,{key:ie.id,card:ie})))):null,oo&&gt&&!fe?_e.createElement(BA,{hover:gt,data:ro,rootRef:l}):null,A&&!he?_e.createElement("div",{className:"dwp3d-center"},_e.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},_e.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,Bs?_e.createElement("div",{className:"dwp3d-center"},_e.createElement("div",{className:"dwp3d-fail",role:"alert"},_e.createElement("h3",null,r("error.webglTitle")),_e.createElement("p",null,r("error.webgl",{msg:he.msg})),_e.createElement("button",{type:"button",onClick:Bt},r("error.retry")))):null,he&&he.kind==="lost"?_e.createElement("div",{className:"dwp3d-center dim",role:"alert"},_e.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var XA="work-process-3d",qA={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(xc,Qp),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(xc);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:XA,order:15,locale:xc,label:()=>e("tab.label")},t=>Zy.createElement(Ky,{...t,ctx:n,tBound:e})))}};
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
