/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var Jx=Object.create;var Bl=Object.defineProperty;var jx=Object.getOwnPropertyDescriptor;var Qx=Object.getOwnPropertyNames;var ey=Object.getPrototypeOf,ty=Object.prototype.hasOwnProperty;var ny=(n,e)=>{for(var t in e)Bl(n,t,{get:e[t],enumerable:!0})},dp=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Qx(e))!ty.call(n,s)&&s!==t&&Bl(n,s,{get:()=>e[s],enumerable:!(i=jx(e,s))||i.enumerable});return n};var hp=(n,e,t)=>(t=n!=null?Jx(ey(n)):{},dp(e||!n||!n.__esModule?Bl(t,"default",{value:n,enumerable:!0}):t,n)),iy=n=>dp(Bl({},"__esModule",{value:!0}),n);var iT={};ny(iT,{default:()=>nT});module.exports=iy(iT);var Kx=hp(require("react"),1);var zl="dsh-work-process-3d",sy={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"原型阶段：画面由内置示例会话驱动，数字、文件和命令都是示例，还没有接入本会话。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.living":"生活区","view.screens":"大屏","view.screensHint":"飞到大屏幕墙前，近距离查看三块屏幕；再点一次返回","screen.bar":"大屏查看","screen.flow":"令牌流量","screen.main":"工作总览","screen.cost":"成本与上下文","screen.descFlow":"实时生成速率、最近 60 秒的速率曲线，以及输入、缓存命中、输出和推理的累计用量。","screen.descMain":"当前阶段、轮次、工具调用、产出文件和模型请求；下面一排色块是最近的工具调用。","screen.descCost":"累计花费（分高峰和低谷）、最近 3 分钟的花费曲线、上下文占用和缓存节省。","screen.click":"点击近距离查看","screen.prev":"上一块","screen.next":"下一块","screen.back":"返回","screen.count":"{i}/{n}","screen.hint":"滚轮放大 · 拖动平移 · 点击屏幕外或「返回」退出 · ←/→ 切换","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸，留给以后入住的操作员角色。它不显示会话数据。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},ry={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Prototype: a built-in sample session drives the scene. The numbers, files and commands are examples, not this session.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.living":"Living","view.screens":"Screens","view.screensHint":"Fly up to the media wall and read the three screens up close; click again to go back","screen.bar":"Screen viewer","screen.flow":"Token flow","screen.main":"Work overview","screen.cost":"Cost and context","screen.descFlow":"Live generation rate, the last 60 seconds as a chart, and running totals for input, cache hits, output and reasoning.","screen.descMain":"Current phase, turn, tool calls, produced files and model requests; the strip of tiles below shows the latest tool calls.","screen.descCost":"Total cost split into peak and off-peak, the last 3 minutes of spend, context usage and cache savings.","screen.click":"Click to view up close","screen.prev":"Previous","screen.next":"Next","screen.back":"Back","screen.count":"{i}/{n}","screen.hint":"Scroll to zoom · drag to pan · click beside the screen or Back to leave · ←/→ to switch","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium, kept for an operator character to move in later. It shows no session data.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},fp={zh:sy,en:ry};var we=hp(require("react"),1);var xr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i0=0,mh=1,s0=2;var Xr=1,r0=2,Zo=3,Es=0,ei=1,Jt=2,qr=0,Ts=1,Kn=2,gh=3,xh=4,Jo=5;var $r=100,o0=101,a0=102,l0=103,c0=104,eu=200,vr=201,u0=202,d0=203,yh=204,_r=205,h0=206,f0=207,p0=208,m0=209,g0=210,x0=211,y0=212,v0=213,_0=214,vc=0,_c=1,bc=2,No=3,Mc=4,Sc=5,wc=6,Ec=7,vh=0,b0=1,M0=2,As=0,_h=1,bh=2,Mh=3,Sh=4,wh=5,Eh=6,ol=7;var Th=300,Yr=301,jo=302,tu=303,nu=304,Gs=1e3,bs=1001,Tc=1002,Yn=1003,S0=1004;var al=1005;var _n=1006,iu=1007;var is=1008;var vi=1009,Ah=1010,Rh=1011,Qo=1012,su=1013,ss=1014,Bi=1015,xi=1016,ru=1017,ou=1018,Kr=1020,Ch=35902,Ph=35899,Ih=1021,Lh=1022,rs=1023,Vs=1026,Zs=1027,au=1028,lu=1029,br=1030,cu=1031;var uu=1033,ll=33776,cl=33777,ul=33778,dl=33779,du=35840,hu=35841,fu=35842,pu=35843,mu=36196,gu=37492,xu=37496,yu=37488,vu=37489,hl=37490,_u=37491,bu=37808,Mu=37809,Su=37810,wu=37811,Eu=37812,Tu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Iu=37818,Lu=37819,Du=37820,Nu=37821,Ou=36492,Fu=36494,Uu=36495,ku=36283,Bu=36284,fl=36285,zu=36286;var Ca=2300,Ac=2301,xc=2302,ih=2303,sh=2400,rh=2401,oh=2402;var w0=3200;var Hu=0,E0=1,Js="",Jn="srgb",Pa="srgb-linear",Ia="linear",tn="srgb";var yc=7680;var T0=519,A0=512,R0=513,C0=514,Dh=515,P0=516,I0=517,Nh=518,Oh=519,Fh=35044;var Uh="300 es",Ui=2e3,Oo=2001;function oy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ay(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function L0(){let n=La("canvas");return n.style.display="block",n}var pp={},Fo=null;function Da(...n){let e="THREE."+n.shift();Fo?Fo("log",e,...n):console.log(e,...n)}function D0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function _t(...n){n=D0(n);let e="THREE."+n.shift();if(Fo)Fo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function St(...n){n=D0(n);let e="THREE."+n.shift();if(Fo)Fo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Br(...n){let e=n.join(" ");e in pp||(pp[e]=!0,_t(...n))}function N0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var O0={[vc]:vc,[bc]:wc,[Mc]:Mc,[No]:Sc,[_c]:_c,[wc]:bc,[Ec]:Ec,[Sc]:No},es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mp=1234567,Ea=Math.PI/180,Uo=180/Math.PI;function js(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function kh(n,e){return(n%e+e)%e}function ly(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cy(n,e,t){return n!==e?(t-n)/(e-n):0}function Ta(n,e,t){return(1-t)*n+t*e}function uy(n,e,t,i){return Ta(n,e,1-Math.exp(-t*i))}function dy(n,e=1){return e-Math.abs(kh(n,e*2)-e)}function hy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function py(n,e){return n+Math.floor(Math.random()*(e-n+1))}function my(n,e){return n+Math.random()*(e-n)}function gy(n){return n*(.5-Math.random())}function xy(n){n!==void 0&&(mp=n);let e=mp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yy(n){return n*Ea}function vy(n){return n*Uo}function _y(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function by(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function My(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:_t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zh(n,e){if(e.constructor===Float32Array)return n;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Hh(n,e){if(e.constructor===Float32Array)return n;let t=Gu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Mr={DEG2RAD:Ea,RAD2DEG:Uo,generateUUID:js,clamp:Lt,euclideanModulo:kh,mapLinear:ly,inverseLerp:cy,lerp:Ta,damp:uy,pingpong:dy,smoothstep:hy,smootherstep:fy,randInt:py,randFloat:my,randFloatSpread:gy,seededRandom:xy,degToRad:yy,radToDeg:vy,isPowerOfTwo:_y,ceilPowerOfTwo:by,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:My,normalize:Hh,denormalize:zh},Me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*x;m<0&&(h=-h,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),v=Math.sin(b);g=Math.sin(g*b)/v,a=Math.sin(a*b)/v,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+x*a;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ld=new C,gp=new pn,Et=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],x=s[0],m=s[3],g=s[6],b=s[1],v=s[4],y=s[7],w=s[2],E=s[5],_=s[8];return r[0]=o*x+a*b+l*w,r[3]=o*m+a*v+l*E,r[6]=o*g+a*y+l*_,r[1]=c*x+u*b+d*w,r[4]=c*m+u*v+d*E,r[7]=c*g+u*y+d*_,r[2]=h*x+f*b+p*w,r[5]=h*m+f*v+p*E,r[8]=h*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dd.makeScale(e,t)),this}rotate(e){return Br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dd.makeRotation(-e)),this}translate(e,t){return Br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dd=new Et,xp=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yp=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){let n={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tn&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tn&&(s.r=Do(s.r),s.g=Do(s.g),s.b=Do(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Js?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Pa]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:xp,fromXYZ:yp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:i,transfer:tn,toXYZ:xp,fromXYZ:yp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),n}var Bt=Sy();function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Do(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var mo,Rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{mo===void 0&&(mo=La("canvas")),mo.width=e.width,mo.height=e.height;let s=mo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=mo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wy=0,ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nd(s[o].image)):r.push(Nd(s[o]))}else r=Nd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Nd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}var Ey=0,Od=new C,pi=class n extends es{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=bs,s=bs,r=_n,o=is,a=rs,l=vi,c=n.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=js(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case Tc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case Tc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=Th;pi.DEFAULT_ANISOTROPY=1;var un=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,w=(g+1)/2,E=(u+h)/4,_=(d+x)/4,M=(p+m)/4;return v>y&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=_/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=M/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends es{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new pi({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Cc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Na=class extends pi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pc=class extends pi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/go.setFromMatrixColumn(e,0).length(),r=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,x=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ty,e,Ay)}lookAt(e,t,i){let s=this.elements;return Ti.subVectors(e,t),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),lr.crossVectors(i,Ti),lr.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),lr.crossVectors(i,Ti)),lr.normalize(),Hl.crossVectors(Ti,lr),s[0]=lr.x,s[4]=Hl.x,s[8]=Ti.x,s[1]=lr.y,s[5]=Hl.y,s[9]=Ti.y,s[2]=lr.z,s[6]=Hl.z,s[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],b=i[3],v=i[7],y=i[11],w=i[15],E=s[0],_=s[4],M=s[8],A=s[12],R=s[1],D=s[5],U=s[9],V=s[13],P=s[2],Z=s[6],Q=s[10],J=s[14],$=s[3],H=s[7],X=s[11],N=s[15];return r[0]=o*E+a*R+l*P+c*$,r[4]=o*_+a*D+l*Z+c*H,r[8]=o*M+a*U+l*Q+c*X,r[12]=o*A+a*V+l*J+c*N,r[1]=u*E+d*R+h*P+f*$,r[5]=u*_+d*D+h*Z+f*H,r[9]=u*M+d*U+h*Q+f*X,r[13]=u*A+d*V+h*J+f*N,r[2]=p*E+x*R+m*P+g*$,r[6]=p*_+x*D+m*Z+g*H,r[10]=p*M+x*U+m*Q+g*X,r[14]=p*A+x*V+m*J+g*N,r[3]=b*E+v*R+y*P+w*$,r[7]=b*_+v*D+y*Z+w*H,r[11]=b*M+v*U+y*Q+w*X,r[15]=b*A+v*V+y*J+w*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],b=l*f-c*h,v=a*f-c*d,y=a*h-l*d,w=o*f-c*u,E=o*h-l*u,_=o*d-a*u;return t*(x*b-m*v+g*y)-i*(p*b-m*w+g*E)+s*(p*v-x*w+g*_)-r*(p*y-x*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],b=t*a-i*o,v=t*l-s*o,y=t*c-r*o,w=i*l-s*a,E=i*c-r*a,_=s*c-r*l,M=u*x-d*p,A=u*m-h*p,R=u*g-f*p,D=d*m-h*x,U=d*g-f*x,V=h*g-f*m,P=b*V-v*U+y*D+w*R-E*A+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/P;return e[0]=(a*V-l*U+c*D)*Z,e[1]=(s*U-i*V-r*D)*Z,e[2]=(x*_-m*E+g*w)*Z,e[3]=(h*E-d*_-f*w)*Z,e[4]=(l*R-o*V-c*A)*Z,e[5]=(t*V-s*R+r*A)*Z,e[6]=(m*y-p*_-g*v)*Z,e[7]=(u*_-h*y+f*v)*Z,e[8]=(o*U-a*R+c*M)*Z,e[9]=(i*R-t*U-r*M)*Z,e[10]=(p*E-x*y+g*b)*Z,e[11]=(d*y-u*E-f*b)*Z,e[12]=(a*A-o*D-l*M)*Z,e[13]=(t*D-i*A+s*M)*Z,e[14]=(x*v-p*w-m*b)*Z,e[15]=(u*w-d*v+h*b)*Z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,x=o*u,m=o*d,g=a*d,b=l*c,v=l*u,y=l*d,w=i.x,E=i.y,_=i.z;return s[0]=(1-(x+g))*w,s[1]=(f+y)*w,s[2]=(p-v)*w,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(h+g))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(p+v)*_,s[9]=(m-b)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=go.set(s[0],s[1],s[2]).length(),a=go.set(s[4],s[5],s[6]).length(),l=go.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ji.copy(this);let c=1/o,u=1/a,d=1/l;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=u,Ji.elements[5]*=u,Ji.elements[6]*=u,Ji.elements[8]*=d,Ji.elements[9]*=d,Ji.elements[10]*=d,t.setFromRotationMatrix(Ji),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Ui,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Ui)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Oo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ui,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Ui)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Oo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},go=new C,Ji=new bt,Ty=new C(0,0,0),Ay=new C(1,1,1),lr=new C,Hl=new C,Ti=new C,vp=new bt,_p=new pn,Qn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ry=0,bp=new C,xo=new pn,Os=new bt,Gl=new C,pa=new C,Cy=new C,Py=new pn,Mp=new C(1,0,0),Sp=new C(0,1,0),wp=new C(0,0,1),Ep={type:"added"},Iy={type:"removed"},yo={type:"childadded",child:null},Fd={type:"childremoved",child:null},an=class n extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Qn,i=new pn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Et}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gl.copy(e):Gl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(pa,Gl,this.up):Os.lookAt(Gl,pa,this.up),this.quaternion.setFromRotationMatrix(Os),s&&(Os.extractRotation(s.matrixWorld),xo.setFromRotationMatrix(Os),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ep),yo.child=e,this.dispatchEvent(yo),yo.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iy),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Os.multiply(e.parent.matrixWorld)),e.applyMatrix4(Os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ep),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new C(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Ud(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Bt.workingColorSpace){if(e=kh(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ud(o,r,e+1/3),this.g=Ud(o,r,e),this.b=Ud(o,r,e-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Bt.workingToColorSpace(ri.copy(this),e),Math.round(Lt(ri.r*255,0,255))*65536+Math.round(Lt(ri.g*255,0,255))*256+Math.round(Lt(ri.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(ri.copy(this),t);let i=ri.r,s=ri.g,r=ri.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Jn){Bt.workingToColorSpace(ri.copy(this),e);let t=ri.r,i=ri.g,s=ri.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Vl);let i=Ta(cr.h,Vl.h,t),s=Ta(cr.s,Vl.s,t),r=Ta(cr.l,Vl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new Be;Be.NAMES=F0;var zr=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new C,Fs=new C,kd=new C,Us=new C,vo=new C,_o=new C,Tp=new C,Bd=new C,zd=new C,Hd=new C,Gd=new un,Vd=new un,Wd=new un,zs=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ji.subVectors(e,t),s.cross(ji);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ji.subVectors(s,t),Fs.subVectors(i,t),kd.subVectors(e,t);let o=ji.dot(ji),a=ji.dot(Fs),l=ji.dot(kd),c=Fs.dot(Fs),u=Fs.dot(kd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Us)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Us.x),l.addScaledVector(o,Us.y),l.addScaledVector(a,Us.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Gd.setScalar(0),Vd.setScalar(0),Wd.setScalar(0),Gd.fromBufferAttribute(e,t),Vd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Gd,r.x),o.addScaledVector(Vd,r.y),o.addScaledVector(Wd,r.z),o}static isFrontFacing(e,t,i,s){return ji.subVectors(i,t),Fs.subVectors(e,t),ji.cross(Fs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Fs.subVectors(this.a,this.b),ji.cross(Fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;vo.subVectors(s,i),_o.subVectors(r,i),Bd.subVectors(e,i);let l=vo.dot(Bd),c=_o.dot(Bd);if(l<=0&&c<=0)return t.copy(i);zd.subVectors(e,s);let u=vo.dot(zd),d=_o.dot(zd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(vo,o);Hd.subVectors(e,r);let f=vo.dot(Hd),p=_o.dot(Hd);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(_o,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Tp.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(Tp,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(vo,o).addScaledVector(_o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(r,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Xl.subVectors(this.max,ma),bo.subVectors(e.a,ma),Mo.subVectors(e.b,ma),So.subVectors(e.c,ma),ur.subVectors(Mo,bo),dr.subVectors(So,Mo),Nr.subVectors(bo,So);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-Nr.z,Nr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,Nr.z,0,-Nr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-Nr.y,Nr.x,0];return!Xd(t,bo,Mo,So,Xl)||(t=[1,0,0,0,1,0,0,0,1],!Xd(t,bo,Mo,So,Xl))?!1:(ql.crossVectors(ur,dr),t=[ql.x,ql.y,ql.z],Xd(t,bo,Mo,So,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ks[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ks[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ks[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ks[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ks[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ks[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ks[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ks[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ks),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ks=[new C,new C,new C,new C,new C,new C,new C,new C],Qi=new C,Wl=new mi,bo=new C,Mo=new C,So=new C,ur=new C,dr=new C,Nr=new C,ma=new C,Xl=new C,ql=new C,Or=new C;function Xd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Or.fromArray(n,r);let a=s.x*Math.abs(Or.x)+s.y*Math.abs(Or.y)+s.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Pn=new C,$l=new Me,Dy=0,oi=class extends es{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fh,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=e!==void 0?Gu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix3(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hh(e,this.array)}};var Oa=class extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fa=class extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var dt=class extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ny=new mi,ga=new C,qd=new C,ki=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ny.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(qd)),this.expandByPoint(ga.copy(e.center).sub(qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oy=0,Fi=new bt,$d=new an,wo=new C,Ai=new mi,xa=new mi,qn=new C,Ht=class n extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?Fa:Oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(qn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(qn),qn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(qn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xa.setFromBufferAttribute(a),this.morphTargetsRelative?(qn.addVectors(Ai.min,xa.min),Ai.expandByPoint(qn),qn.addVectors(Ai.max,xa.max),Ai.expandByPoint(qn)):(Ai.expandByPoint(xa.min),Ai.expandByPoint(xa.max))}Ai.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qn.fromBufferAttribute(a,c),l&&(wo.fromBufferAttribute(e,c),qn.add(wo)),s=Math.max(s,i.distanceToSquared(qn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new C,l[A]=new C;let u=new C,d=new C,h=new C,f=new Me,p=new Me,x=new Me,m=new C,g=new C;function b(A,R,D){c[A]=c[R]=c[D]=1,u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(u),h.sub(u),p.sub(f),x.sub(f);let U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(U),a[A].add(m),a[R].add(m),a[D].add(m),l[A].add(g),l[R].add(g),l[D].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,R=v.length;A<R;++A){let D=v[A],U=D.start,V=D.count;for(let P=U,Z=U+V;P<Z;P+=3)b(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new C,w=new C,E=new C,_=new C;function M(A){E.fromBufferAttribute(s,A),_.copy(E);let R=a[A];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(_,R);let U=w.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,U)}for(let A=0,R=i.count;A<R;++A)c[A]&&M(A);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qn.fromBufferAttribute(e,t),qn.normalize(),e.setXYZ(t,qn.x,qn.y,qn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new oi(h,u,d)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fh,this.updateRanges=[],this.version=0,this.uuid=js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ap(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ap(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Ap(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=js()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var hi=new C,Ho=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Gu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hh(e,this.data.array)}},Yd=new C,Fy=new C,Uy=new Et,fi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Yd.subVectors(i,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Yd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Uy.getNormalMatrix(e),s=this.coplanarPoint(Yd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ky=0,ts=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Ts,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=_r,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ms=class extends ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eo,ya=new C,To=new C,Ao=new C,Ro=new Me,va=new Me,U0=new bt,Yl=new C,_a=new C,Kl=new C,Rp=new Me,Kd=new Me,Cp=new Me,Ws=class extends an{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",Eo===void 0){Eo=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(t,5);Eo.setIndex([0,1,2,0,2,3]),Eo.setAttribute("position",new Ho(i,3,0,!1)),Eo.setAttribute("uv",new Ho(i,2,3,!1))}this.geometry=Eo,this.material=e,this.center=new Me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),U0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Ao.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Zl(Yl.set(-.5,-.5,0),Ao,o,To,s,r),Zl(_a.set(.5,-.5,0),Ao,o,To,s,r),Zl(Kl.set(.5,.5,0),Ao,o,To,s,r),Rp.set(0,0),Kd.set(1,0),Cp.set(1,1);let a=e.ray.intersectTriangle(Yl,_a,Kl,!1,ya);if(a===null&&(Zl(_a.set(-.5,.5,0),Ao,o,To,s,r),Kd.set(0,1),a=e.ray.intersectTriangle(Yl,Kl,_a,!1,ya),a===null))return;let l=e.ray.origin.distanceTo(ya);l<e.near||l>e.far||t.push({distance:l,point:ya.clone(),uv:zs.getInterpolation(ya,Yl,_a,Kl,Rp,Kd,Cp,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Zl(n,e,t,i,s,r){Ro.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(va.x=r*Ro.x-s*Ro.y,va.y=s*Ro.x+r*Ro.y):va.copy(Ro),n.copy(e),n.x+=va.x,n.y+=va.y,n.applyMatrix4(U0)}var Bs=new C,Zd=new C,Jl=new C,jl=new C,Xs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bs.copy(this.origin).addScaledVector(this.direction,t),Bs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zd.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),jl.copy(this.origin).sub(Zd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jl),a=jl.dot(this.direction),l=-jl.dot(Jl),c=jl.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zd).addScaledVector(Jl,h),f}intersectSphere(e,t){if(e.radius<0)return null;Bs.subVectors(e.center,this.origin);let i=Bs.dot(this.direction),s=Bs.dot(Bs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Bs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,b=i.y-o.y,v=i.z-o.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(u),_,M,A,R,D,U,V,P,Z,Q,J,$;if(y>=w&&y>=E?(A=l,U=d,Z=p,$=g,l>=0?(_=c,M=u,R=h,D=f,V=x,P=m,Q=b,J=v):(_=u,M=c,R=f,D=h,V=m,P=x,Q=v,J=b)):w>=E?(A=c,U=h,Z=x,$=b,c>=0?(_=u,M=l,R=f,D=d,V=m,P=p,Q=v,J=g):(_=l,M=u,R=d,D=f,V=p,P=m,Q=g,J=v)):(A=u,U=f,Z=m,$=v,u>=0?(_=l,M=c,R=d,D=h,V=p,P=x,Q=g,J=b):(_=c,M=l,R=h,D=d,V=x,P=p,Q=b,J=g)),A===0)return null;let H=_/A,X=M/A,N=1/A,q=R-H*U,re=D-X*U,j=V-H*Z,he=P-X*Z,ve=Q-H*$,ee=J-X*$,ge=ve*he-ee*j,Ne=q*ee-re*ve,at=j*re-he*q;if(s){if(ge<0||Ne<0||at<0)return null}else if((ge<0||Ne<0||at<0)&&(ge>0||Ne>0||at>0))return null;let Ge=ge+Ne+at;if(Ge===0)return null;let et=N*(ge*U+Ne*Z+at*$);return(Ge>0?et<0:et>0)?null:this.at(et/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pp=new bt,Fr=new Xs,Ql=new ki,Ip=new C,ec=new C,tc=new C,nc=new C,Jd=new C,ic=new C,Lp=new C,sc=new C,it=class extends an{constructor(e=new Ht,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ic.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Jd.fromBufferAttribute(d,e),o?ic.addScaledVector(Jd,u):ic.addScaledVector(Jd.sub(t),u))}t.add(ic)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Fr.copy(e.ray).recast(e.near),!(Ql.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ql,Ip)===null||Fr.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Pp.copy(r).invert(),Fr.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=v;y<w;y+=3){let E=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);s=rc(this,g,e,i,c,u,d,E,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=rc(this,o,e,i,c,u,d,b,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let m=h[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=v;y<w;y+=3){let E=y,_=y+1,M=y+2;s=rc(this,g,e,i,c,u,d,E,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let b=m,v=m+1,y=m+2;s=rc(this,o,e,i,c,u,d,b,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function By(n,e,t,i,s,r,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Es,a),l===null)return null;sc.copy(a),sc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sc);return c<t.near||c>t.far?null:{distance:c,point:sc.clone(),object:n}}function rc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ec),n.getVertexPosition(l,tc),n.getVertexPosition(c,nc);let u=By(n,e,t,i,ec,tc,nc,Lp);if(u){let d=new C;zs.getBarycoord(Lp,ec,tc,nc,d),s&&(u.uv=zs.getInterpolatedAttribute(s,a,l,c,d,new Me)),r&&(u.uv1=zs.getInterpolatedAttribute(r,a,l,c,d,new Me)),o&&(u.normal=zs.getInterpolatedAttribute(o,a,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new C,materialIndex:0};zs.getNormal(ec,tc,nc,h.normal),u.face=h,u.barycoord=d}return u}var ka=class extends pi{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Yn,u=Yn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class extends oi{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Co=new bt,Dp=new bt,oc=[],Np=new mi,zy=new bt,ba=new it,Ma=new ki,Dn=class extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Co),Np.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(Np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Co),Ma.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Co),Dp.multiplyMatrices(i,Co),ba.matrixWorld=Dp,ba.raycast(e,oc);for(let o=0,a=oc.length;o<a;o++){let l=oc[o];l.instanceId=r,l.object=this,t.push(l)}oc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(s*this.count),s,this.count,au,Bi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ur=new ki,Hy=new Me(.5,.5),ac=new C,fr=class{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],b=r[12],v=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,g-p,w-b).normalize(),s[1].setComponents(c+o,f+u,g+p,w+b).normalize(),s[2].setComponents(c+a,f+d,g+x,w+v).normalize(),s[3].setComponents(c-a,f-d,g-x,w-v).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,g-m,w-y).normalize();else if(s[4].setComponents(c-l,f-h,g-m,w-y).normalize(),t===Ui)s[5].setComponents(c+l,f+h,g+m,w+y).normalize();else if(t===Oo)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);let t=Hy.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ac.x=s.normal.x>0?e.max.x:e.min.x,ac.y=s.normal.y>0?e.max.y:e.min.y,ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Op=new bt,Ic=class n{constructor(){this.coordinateSystem=Ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Op.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new fr),i[s].setFromProjectionMatrix(Op,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Go=class extends ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Lc=new C,Dc=new C,Fp=new bt,Sa=new Xs,lc=new ki,jd=new C,Up=new C,Nc=class extends an{constructor(e=new Ht,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Lc.fromBufferAttribute(t,s-1),Dc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lc.distanceTo(Dc);e.setAttribute("lineDistance",new dt(i,1))}else _t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;Fp.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(Fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=u.getX(x),b=u.getX(x+1),v=cc(this,e,Sa,l,g,b,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(p-1),m=u.getX(f),g=cc(this,e,Sa,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=cc(this,e,Sa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=cc(this,e,Sa,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Lc.fromBufferAttribute(a,s),Dc.fromBufferAttribute(a,r),t.distanceSqToSegment(Lc,Dc,jd,Up)>i)return;jd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(jd);if(!(c<e.near||c>e.far))return{distance:c,point:Up.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var kp=new C,Bp=new C,Ba=class extends Nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)kp.fromBufferAttribute(t,s),Bp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kp.distanceTo(Bp);e.setAttribute("lineDistance",new dt(i,1))}else _t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Oc=class extends ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zp=new bt,ah=new Xs,uc=new ki,dc=new C,za=class extends an{constructor(e=new Ht,t=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;zp.copy(s).invert(),ah.copy(e.ray).applyMatrix4(zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,x=f;p<x;p++){let m=c.getX(p);dc.fromBufferAttribute(d,m),Hp(dc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,x=f;p<x;p++)dc.fromBufferAttribute(d,p),Hp(dc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hp(n,e,t,i,s,r,o){let a=ah.distanceSqToPoint(n);if(a<t){let l=new C;ah.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ha=class extends pi{constructor(e=[],t=Yr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ga=class extends pi{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qs=class extends pi{constructor(e,t,i=ss,s,r,o,a=Yn,l=Yn,c,u=Vs,d=1){if(u!==Vs&&u!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Va=class extends qs{constructor(e,t=ss,i=Yr,s,r,o=Yn,a=Yn,l,c=Vs){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wa=class extends pi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class n extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function p(x,m,g,b,v,y,w,E,_,M,A){let R=y/_,D=w/M,U=y/2,V=w/2,P=E/2,Z=_+1,Q=M+1,J=0,$=0,H=new C;for(let X=0;X<Q;X++){let N=X*D-V;for(let q=0;q<Z;q++){let re=q*R-U;H[x]=re*b,H[m]=N*v,H[g]=P,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=E>0?1:-1,u.push(H.x,H.y,H.z),d.push(q/_),d.push(1-X/M),J+=1}}for(let X=0;X<M;X++)for(let N=0;N<_;N++){let q=h+N+Z*X,re=h+N+Z*(X+1),j=h+(N+1)+Z*(X+1),he=h+(N+1)+Z*X;l.push(q,re,he),l.push(re,j,he),$+=6}a.addGroup(f,$,A),f+=$,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Tn=class n extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,x=[],m=i/2,g=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function b(){let y=new C,w=new C,E=0,_=(t-e)/i;for(let M=0;M<=r;M++){let A=[],R=M/r,D=R*(t-e)+e;for(let U=0;U<=s;U++){let V=U/s,P=V*l+a,Z=Math.sin(P),Q=Math.cos(P);w.x=D*Z,w.y=-R*i+m,w.z=D*Q,d.push(w.x,w.y,w.z),y.set(Z,_,Q).normalize(),h.push(y.x,y.y,y.z),f.push(V,1-R),A.push(p++)}x.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){let R=x[A][M],D=x[A+1][M],U=x[A+1][M+1],V=x[A][M+1];(e>0||A!==0)&&(u.push(R,D,V),E+=3),(t>0||A!==r-1)&&(u.push(D,U,V),E+=3)}c.addGroup(g,E,0),g+=E}function v(y){let w=p,E=new Me,_=new C,M=0,A=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),p++;let D=p;for(let U=0;U<=s;U++){let P=U/s*l+a,Z=Math.cos(P),Q=Math.sin(P);_.x=A*Q,_.y=m*R,_.z=A*Z,d.push(_.x,_.y,_.z),h.push(0,R,0),E.x=Z*.5+.5,E.y=Q*.5*R+.5,f.push(E.x,E.y),p++}for(let U=0;U<s;U++){let V=w+U,P=D+U;y===!0?u.push(P,P+1,V):u.push(P+1,P,V),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ss=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_t("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Me:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new bt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Vo=class extends Ri{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fc=class extends Vo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Gp=new C,Vp=new C,Qd=new Gh,eh=new Gh,th=new Gh,Uc=class extends Ri{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Vp.subVectors(s[0],s[1]).add(s[0]),c=Vp);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Gp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Qd.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,x,m),eh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,x,m),th.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,x,m)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),eh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),th.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Qd.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Gy(n,e){let t=1-n;return t*t*e}function Vy(n,e){return 2*(1-n)*n*e}function Wy(n,e){return n*n*e}function Aa(n,e,t,i){return Gy(n,e)+Vy(n,t)+Wy(n,i)}function Xy(n,e){let t=1-n;return t*t*t*e}function qy(n,e){let t=1-n;return 3*t*t*n*e}function $y(n,e){return 3*(1-n)*n*n*e}function Yy(n,e){return n*n*n*e}function Ra(n,e,t,i,s){return Xy(n,e)+qy(n,t)+$y(n,i)+Yy(n,s)}var Xa=class extends Ri{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ra(e,s.x,r.x,o.x,a.x),Ra(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kc=class extends Ri{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ra(e,s.x,r.x,o.x,a.x),Ra(e,s.y,r.y,o.y,a.y),Ra(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends Ri{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hr=class extends Ri{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Ri{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Aa(e,s.x,r.x,o.x),Aa(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Ri{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Aa(e,s.x,r.x,o.x),Aa(e,s.y,r.y,o.y),Aa(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Wp(a,l.x,c.x,u.x,d.x),Wp(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},Bc=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:Uc,CubicBezierCurve:Xa,CubicBezierCurve3:kc,EllipseCurve:Vo,LineCurve:qa,LineCurve3:Hr,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Gr,SplineCurve:Ya}),Wo=class extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Bc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},$s=class extends Wo{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new qa(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new $a(this.currentPoint.clone(),new Me(e,t),new Me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Xa(this.currentPoint.clone(),new Me(e,t),new Me(i,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ya(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Vo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ns=class extends $s{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $s().fromJSON(s))}return this}};function Ky(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=k0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ev(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ka(r,o,t,a,l,c,0),o}function k0(n,e,t,i,s){let r;if(s===dv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Xp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Xp(o/i|0,n[o],n[o+1],r);return r&&Xo(r,r.next)&&(Ja(r),r=r.next),r}function Vr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Xo(t,t.next)||vn(t.prev,t,t.next)===0)){if(Ja(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ka(n,e,t,i,s,r,o){if(!n)return;!o&&r&&rv(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jy(n,i,s,r):Zy(n)){e.push(l.i,n.i,c.i),Ja(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jy(Vr(n),e),Ka(n,e,t,i,s,r,2)):o===2&&Qy(n,e,t,i,s,r):Ka(Vr(n),e,t,i,s,r,1);break}}}function Zy(n){let e=n.prev,t=n,i=n.next;if(vn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&wa(s,a,r,l,o,c,p.x,p.y)&&vn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(vn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=lh(f,p,e,t,i),b=lh(x,m,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=g&&y&&y.z<=b;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&wa(a,u,l,d,c,h,v.x,v.y)&&vn(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&wa(a,u,l,d,c,h,y.x,y.y)&&vn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&wa(a,u,l,d,c,h,v.x,v.y)&&vn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&wa(a,u,l,d,c,h,y.x,y.y)&&vn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jy(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Xo(i,s)&&z0(i,t,t.next,s)&&Za(i,s)&&Za(s,i)&&(e.push(i.i,t.i,s.i),Ja(t),Ja(t.next),t=n=s),t=t.next}while(t!==n);return Vr(t)}function Qy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lv(o,a)){let l=H0(o,a);o=Vr(o,o.next),l=Vr(l,l.next),Ka(o,e,t,i,s,r,0),Ka(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ev(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=k0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(av(c))}s.sort(tv);for(let r=0;r<s.length;r++)t=nv(s[r],t);return t}function tv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function nv(n,e){let t=iv(n,e);if(!t)return e;let i=H0(t,n);return Vr(i,i.next),Vr(t,t.next)}function iv(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Xo(n,t))return t;do{if(Xo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&B0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Za(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&sv(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function sv(n,e){return vn(n.prev,n,e.prev)<0&&vn(e.next,n,n.next)<0}function rv(n,e,t,i){let s=n;do s.z===0&&(s.z=lh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ov(s)}function ov(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function lh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function av(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function B0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function wa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&B0(n,e,t,i,s,r,o,a)}function lv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!cv(n,e)&&(Za(n,e)&&Za(e,n)&&uv(n,e)&&(vn(n.prev,n,e.prev)||vn(n,e.prev,e))||Xo(n,e)&&vn(n.prev,n,n.next)>0&&vn(e.prev,e,e.next)>0)}function vn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xo(n,e){return n.x===e.x&&n.y===e.y}function z0(n,e,t,i){let s=fc(vn(n,e,t)),r=fc(vn(n,e,i)),o=fc(vn(t,i,n)),a=fc(vn(t,i,e));return!!(s!==r&&o!==a||s===0&&hc(n,t,e)||r===0&&hc(n,i,e)||o===0&&hc(t,n,i)||a===0&&hc(t,e,i))}function hc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function fc(n){return n>0?1:n<0?-1:0}function cv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&z0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Za(n,e){return vn(n.prev,n,n.next)<0?vn(n,e,n.next)>=0&&vn(n,n.prev,e)>=0:vn(n,e,n.prev)<0||vn(n,n.next,e)<0}function uv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function H0(n,e){let t=ch(n.i,n.x,n.y),i=ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Xp(n,e,t,i){let s=ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var uh=class{static triangulate(e,t,i=2){return Ky(e,t,i)}},kr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];qp(e),$p(i,e);let o=e.length;t.forEach(qp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$p(i,t[l]);let a=uh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function qp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $p(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ws=class n extends Ht{constructor(e=new ns([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hv,v,y=!1,w,E,_,M;if(g){v=g.getSpacedPoints(u),y=!0,h=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,oe),E=new C,_=new C,M=new C}h||(m=0,f=0,p=0,x=0);let A=a.extractPoints(c),R=A.shape,D=A.holes;if(!kr.isClockWise(R)){R=R.reverse();for(let oe=0,z=D.length;oe<z;oe++){let W=D[oe];kr.isClockWise(W)&&(D[oe]=W.reverse())}}function V(oe){let W=10000000000000001e-36,ce=oe[0];for(let K=1;K<=oe.length;K++){let le=K%oe.length,Ce=oe[le],F=Ce.x-ce.x,ie=Ce.y-ce.y,de=F*F+ie*ie,O=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(ce.x),Math.abs(ce.y)),Ze=W*O*O;if(de<=Ze){oe.splice(le,1),K--;continue}ce=Ce}}V(R),D.forEach(V);let P=D.length,Z=R;for(let oe=0;oe<P;oe++){let z=D[oe];R=R.concat(z)}function Q(oe,z,W){return z||St("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(z,W)}let J=R.length;function $(oe,z,W){let ce,K,le,Ce=oe.x-z.x,F=oe.y-z.y,ie=W.x-oe.x,de=W.y-oe.y,O=Ce*Ce+F*F,Ze=Ce*de-F*ie;if(Math.abs(Ze)>Number.EPSILON){let ct=Math.sqrt(O),yt=Math.sqrt(ie*ie+de*de),Re=z.x-F/ct,Ee=z.y+Ce/ct,Ae=W.x-de/yt,Ie=W.y+ie/yt,I=((Ae-Re)*de-(Ie-Ee)*ie)/(Ce*de-F*ie);ce=Re+Ce*I-oe.x,K=Ee+F*I-oe.y;let T=ce*ce+K*K;if(T<=2)return new Me(ce,K);le=Math.sqrt(T/2)}else{let ct=!1;Ce>Number.EPSILON?ie>Number.EPSILON&&(ct=!0):Ce<-Number.EPSILON?ie<-Number.EPSILON&&(ct=!0):Math.sign(F)===Math.sign(de)&&(ct=!0),ct?(ce=-F,K=Ce,le=Math.sqrt(O)):(ce=Ce,K=F,le=Math.sqrt(O/2))}return new Me(ce/le,K/le)}let H=[];for(let oe=0,z=Z.length,W=z-1,ce=oe+1;oe<z;oe++,W++,ce++)W===z&&(W=0),ce===z&&(ce=0),H[oe]=$(Z[oe],Z[W],Z[ce]);let X=[],N,q=H.concat();for(let oe=0,z=P;oe<z;oe++){let W=D[oe];N=[];for(let ce=0,K=W.length,le=K-1,Ce=ce+1;ce<K;ce++,le++,Ce++)le===K&&(le=0),Ce===K&&(Ce=0),N[ce]=$(W[ce],W[le],W[Ce]);X.push(N),q=q.concat(N)}let re;if(m===0)re=kr.triangulateShape(Z,D);else{let oe=[],z=[];for(let W=0;W<m;W++){let ce=W/m,K=f*Math.cos(ce*Math.PI/2),le=p*Math.sin(ce*Math.PI/2)+x;for(let Ce=0,F=Z.length;Ce<F;Ce++){let ie=Q(Z[Ce],H[Ce],le);Ne(ie.x,ie.y,-K),ce===0&&oe.push(ie)}for(let Ce=0,F=P;Ce<F;Ce++){let ie=D[Ce];N=X[Ce];let de=[];for(let O=0,Ze=ie.length;O<Ze;O++){let ct=Q(ie[O],N[O],le);Ne(ct.x,ct.y,-K),ce===0&&de.push(ct)}ce===0&&z.push(de)}}re=kr.triangulateShape(oe,z)}let j=re.length,he=p+x;for(let oe=0;oe<J;oe++){let z=h?Q(R[oe],q[oe],he):R[oe];y?(_.copy(w.normals[0]).multiplyScalar(z.x),E.copy(w.binormals[0]).multiplyScalar(z.y),M.copy(v[0]).add(_).add(E),Ne(M.x,M.y,M.z)):Ne(z.x,z.y,0)}for(let oe=1;oe<=u;oe++)for(let z=0;z<J;z++){let W=h?Q(R[z],q[z],he):R[z];y?(_.copy(w.normals[oe]).multiplyScalar(W.x),E.copy(w.binormals[oe]).multiplyScalar(W.y),M.copy(v[oe]).add(_).add(E),Ne(M.x,M.y,M.z)):Ne(W.x,W.y,d/u*oe)}for(let oe=m-1;oe>=0;oe--){let z=oe/m,W=f*Math.cos(z*Math.PI/2),ce=p*Math.sin(z*Math.PI/2)+x;for(let K=0,le=Z.length;K<le;K++){let Ce=Q(Z[K],H[K],ce);Ne(Ce.x,Ce.y,d+W)}for(let K=0,le=D.length;K<le;K++){let Ce=D[K];N=X[K];for(let F=0,ie=Ce.length;F<ie;F++){let de=Q(Ce[F],N[F],ce);y?Ne(de.x,de.y+v[u-1].y,v[u-1].x+W):Ne(de.x,de.y,d+W)}}}ve(),ee();function ve(){let oe=s.length/3;if(h){let z=0,W=J*z;for(let ce=0;ce<j;ce++){let K=re[ce];at(K[2]+W,K[1]+W,K[0]+W)}z=u+m*2,W=J*z;for(let ce=0;ce<j;ce++){let K=re[ce];at(K[0]+W,K[1]+W,K[2]+W)}}else{for(let z=0;z<j;z++){let W=re[z];at(W[2],W[1],W[0])}for(let z=0;z<j;z++){let W=re[z];at(W[0]+J*u,W[1]+J*u,W[2]+J*u)}}i.addGroup(oe,s.length/3-oe,0)}function ee(){let oe=s.length/3,z=0;ge(Z,z),z+=Z.length;for(let W=0,ce=D.length;W<ce;W++){let K=D[W];ge(K,z),z+=K.length}i.addGroup(oe,s.length/3-oe,1)}function ge(oe,z){let W=oe.length;for(;--W>=0;){let ce=W,K=W-1;K<0&&(K=oe.length-1);for(let le=0,Ce=u+m*2;le<Ce;le++){let F=J*le,ie=J*(le+1),de=z+ce+F,O=z+K+F,Ze=z+K+ie,ct=z+ce+ie;Ge(de,O,Ze,ct)}}}function Ne(oe,z,W){l.push(oe),l.push(z),l.push(W)}function at(oe,z,W){et(oe),et(z),et(W);let ce=s.length/3,K=b.generateTopUV(i,s,ce-3,ce-2,ce-1);ue(K[0]),ue(K[1]),ue(K[2])}function Ge(oe,z,W,ce){et(oe),et(z),et(ce),et(z),et(W),et(ce);let K=s.length/3,le=b.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);ue(le[0]),ue(le[1]),ue(le[3]),ue(le[1]),ue(le[2]),ue(le[3])}function et(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function ue(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return fv(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bc[s.type]().fromJSON(s)),new n(i,e.options)}},hv={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Me(r,o),new Me(a,l),new Me(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-d),new Me(h,1-p),new Me(x,1-g)]:[new Me(a,1-l),new Me(u,1-d),new Me(f,1-p),new Me(m,1-g)]}};function fv(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ja=class n extends Ht{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new C,h=new Me,f=new C,p=new C,x=new C,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let b=0;b<=t;b++){let v=i+b*u*s,y=Math.sin(v),w=Math.cos(v);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*w,o.push(d.x,d.y,d.z),h.x=b/t,h.y=E/(e.length-1),a.push(h.x,h.y);let _=l[3*E+0]*y,M=l[3*E+1],A=l[3*E+0]*w;c.push(_,M,A)}}for(let b=0;b<t;b++)for(let v=0;v<e.length-1;v++){let y=v+b*e.length,w=y,E=y+e.length,_=y+e.length+1,M=y+1;r.push(w,E,M),r.push(_,M,E)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var xt=class n extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<u;g++){let b=g*h-o;for(let v=0;v<c;v++){let y=v*d-r;p.push(y,-b,0),x.push(0,0,1),m.push(v/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let v=b+c*g,y=b+c*(g+1),w=b+1+c*(g+1),E=b+1+c*g;f.push(v,y,E),f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},bn=class n extends Ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new C,p=new Me;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let b=g+m,v=b,y=b+i+1,w=b+i+2,E=b+1;a.push(v,y,E),a.push(y,w,E)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var An=class n extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new C,h=new C,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let b=[],v=g/i,y=o+v*a,w=e*Math.cos(y),E=Math.sqrt(e*e-w*w),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let A=M/t,R=s+A*r;d.x=-E*Math.cos(R),d.y=w,d.z=E*Math.sin(R),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+_,1-v),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){let v=u[g][b+1],y=u[g][b],w=u[g+1][b],E=u[g+1][b+1];(g!==0||o>0)&&f.push(v,y,E),(g!==i-1||l<Math.PI)&&f.push(y,w,E)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gi=class n extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,p=new C;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let b=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,b=(s+1)*(x-1)+m-1,v=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,b,y),l.push(b,v,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Qa=class n extends Ht{constructor(e=new Gr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Me,u=new C,d=[],h=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),b(),g()}function m(v){u=e.getPointAt(v/t,u);let y=o.normals[v],w=o.binormals[v];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,M=Math.sin(_),A=-Math.cos(_);l.x=A*y.x+M*w.x,l.y=A*y.y+M*w.y,l.z=A*y.z+M*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let w=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),_=(s+1)*v+y,M=(s+1)*(v-1)+y;p.push(w,E,M),p.push(E,_,M)}}function b(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Zr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Yp(s))s.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Yp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function li(n){let e={};for(let t=0;t<n.length;t++){let i=Zr(n[t]);for(let s in i)e[s]=i[s]}return e}function Yp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function pv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}var Vu={clone:Zr,merge:li},mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mv,this.fragmentShader=gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new un().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qo=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gt=class extends ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ys=class extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zc=class extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hc=class extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Po(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function pc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=e,a=2*t-i;break;case oh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=e,l=2*i-t;break;case oh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),x=p*p,m=x*p,g=-h*m+2*h*x-h*p,b=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*p+1,v=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+b*o[c+w]+v*o[l+w]+y*o[d+w];return r}},Vc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Wc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xc=class extends pr{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*h+p*2,b=d[g],v=d[g+1],y=e*h+p*2,w=u[y],E=u[y+1],_=yv(i,t,b,w,s);r[p]=G0(_,x,v,E,m)}return r}};function G0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function xv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function yv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=G0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=xv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),pc(e.settings)&&(i.settings={inTangents:Po(e.settings.inTangents,Array),outTangents:Po(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Ac:t=this.InterpolantFactoryMethodLinear;break;case xc:t=this.InterpolantFactoryMethodSmooth;break;case ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return _t("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return xc;case this.InterpolantFactoryMethodBezier:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;pc(this.settings)&&(Kp(this.settings.inTangents,e),Kp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;pc(this.settings)&&(Zp(this.settings.inTangents,e),Zp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(St("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(St("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){St("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){St("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ay(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){St("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let x=t[d+p];if(x!==t[h+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Zp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Ac;var mr=class extends Ci{constructor(e,t,i){super(e,t,i)}};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Ca;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var qc=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}};qc.prototype.ValueTypeName="color";var $c=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}};$c.prototype.ValueTypeName="number";var Yc=class extends pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},el=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Ci{constructor(e,t,i){super(e,t,i)}};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Ca;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kc=class extends Ci{constructor(e,t,i,s){super(e,t,i,s)}};Kc.prototype.ValueTypeName="vector";var Zc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},V0=new Zc,Jc=class{constructor(e){this.manager=e!==void 0?e:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var tl=class extends an{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nl=class extends tl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nh=new bt,Jp=new C,jp=new C,jc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){nh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Oo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=new C,gc=new pn,_s=new C,il=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,gc,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,_s.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(mc,gc,_s),_s.x===1&&_s.y===1&&_s.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,_s.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hr=new C,Qp=new Me,e0=new Me,$n=class extends il{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Qp,e0),t.subVectors(e0,Qp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ks=class extends il{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends jc{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$o=class extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var sl=class extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Io=-90,Lo=1,Yo=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $n(Io,Lo,e,t);s.layers=this.layers,this.add(s);let r=new $n(Io,Lo,e,t);r.layers=this.layers,this.add(r);let o=new $n(Io,Lo,e,t);o.layers=this.layers,this.add(o);let a=new $n(Io,Lo,e,t);a.layers=this.layers,this.add(a);let l=new $n(Io,Lo,e,t);l.layers=this.layers,this.add(l);let c=new $n(Io,Lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Qc=class extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wh="\\[\\]\\.:\\/",vv=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",_v="[^"+Wh.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Xh),Mv=/(WCOD+)?/.source.replace("WCOD",_v),Sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),Ev=new RegExp("^"+bv+Mv+Sv+wv+"$"),Tv=["material","materials","bones","map"],hh=class{constructor(e,t,i){let s=i||fn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},fn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vv,"")}static parseTrackName(e){let t=Ev.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Tv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){_t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){St("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){St("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){St("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){St("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){St("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){St("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;St("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){St("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fn.Composite=hh;fn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fn.prototype.GetterByBindingType=[fn.prototype._getValue_direct,fn.prototype._getValue_array,fn.prototype._getValue_arrayElement,fn.prototype._getValue_toArray];fn.prototype.SetterByBindingTypeAndVersioning=[[fn.prototype._setValue_direct,fn.prototype._setValue_direct_setNeedsUpdate,fn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_array,fn.prototype._setValue_array_setNeedsUpdate,fn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_arrayElement,fn.prototype._setValue_arrayElement_setNeedsUpdate,fn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_fromArray,fn.prototype._setValue_fromArray_setNeedsUpdate,fn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var oT=new Float32Array(1);var t0=new bt,Wr=class{constructor(e,t,i=0,s=1/0){this.ray=new Xs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return t0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(e,t=!0,i=[]){return fh(e,this,i,t),i.sort(n0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)fh(e[s],this,i,t);return i.sort(n0),i}};function n0(n,e){return n.distance-e.distance}function fh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)fh(r[o],e,t,!0)}}var Ko=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ph=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var rl=class extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function qh(n,e,t,i){let s=Av(i);switch(t){case Ih:return n*e;case au:return n*e/s.components*s.byteLength;case lu:return n*e/s.components*s.byteLength;case br:return n*e*2/s.components*s.byteLength;case cu:return n*e*2/s.components*s.byteLength;case Lh:return n*e*3/s.components*s.byteLength;case rs:return n*e*4/s.components*s.byteLength;case uu:return n*e*4/s.components*s.byteLength;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:case pu:return Math.max(n,16)*Math.max(e,8)/4;case du:case fu:return Math.max(n,8)*Math.max(e,8)/2;case mu:case gu:case yu:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xu:case hl:case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Du:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ou:case Fu:case Uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ku:case Bu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fl:case zu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Av(n){switch(n){case vi:case Ah:return{byteLength:1,components:1};case Qo:case Rh:case xi:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case ss:case su:case Bi:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function dm(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nv=`#ifdef USE_ALPHAHASH
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
#endif`,Ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
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
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hv=`#ifdef USE_BATCHING
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
#endif`,Gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qv=`#ifdef USE_IRIDESCENCE
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
#endif`,$v=`#ifdef USE_BUMPMAP
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
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n_=`#define PI 3.141592653589793
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
} // validated`,i_=`vec3 transformedNormal = objectNormal;
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
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
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
#endif`,P_=`uniform sampler2D dfgLUT;
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
}`,I_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G_=`#if defined( USE_POINTS_UV )
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
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q_=`#if defined( USE_MORPHCOLORS )
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
#endif`,$_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
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
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x1=`float getShadowMask() {
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
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform float backgroundBlurriness;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
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
}`,B1=`#if DEPTH_PACKING == 3200
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
}`,z1=`#define DISTANCE
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
}`,H1=`#define DISTANCE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
}`,Y1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
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
}`,Z1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,eb=`#define PHONG
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
}`,tb=`#define PHONG
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
}`,nb=`#define STANDARD
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
}`,ib=`#define STANDARD
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
}`,sb=`#define TOON
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
}`,rb=`#define TOON
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
}`,ob=`uniform float size;
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
}`,ab=`uniform vec3 diffuse;
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
}`,lb=`#include <common>
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
}`,cb=`uniform vec3 color;
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
}`,ub=`uniform float rotation;
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
}`,db=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Dv,alphahash_pars_fragment:Nv,alphamap_fragment:Ov,alphamap_pars_fragment:Fv,alphatest_fragment:Uv,alphatest_pars_fragment:kv,aomap_fragment:Bv,aomap_pars_fragment:zv,batching_pars_vertex:Hv,batching_vertex:Gv,begin_vertex:Vv,beginnormal_vertex:Wv,bsdfs:Xv,iridescence_fragment:qv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Yv,clipping_planes_pars_fragment:Kv,clipping_planes_pars_vertex:Zv,clipping_planes_vertex:Jv,color_fragment:jv,color_pars_fragment:Qv,color_pars_vertex:e_,color_vertex:t_,common:n_,defaultnormal_vertex:i_,displacementmap_pars_vertex:s_,displacementmap_vertex:r_,emissivemap_fragment:o_,emissivemap_pars_fragment:a_,colorspace_fragment:l_,colorspace_pars_fragment:c_,envmap_fragment:u_,envmap_common_pars_fragment:d_,envmap_pars_fragment:h_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:w_,envmap_vertex:p_,fog_vertex:m_,fog_pars_vertex:g_,fog_fragment:x_,fog_pars_fragment:y_,gradientmap_pars_fragment:v_,lightmap_pars_fragment:__,lights_lambert_fragment:b_,lights_lambert_pars_fragment:M_,lights_pars_begin:S_,lights_toon_fragment:E_,lights_toon_pars_fragment:T_,lights_phong_fragment:A_,lights_phong_pars_fragment:R_,lights_physical_fragment:C_,lights_physical_pars_fragment:P_,lights_fragment_begin:I_,lights_fragment_maps:L_,lights_fragment_end:D_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:F_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:k_,map_fragment:B_,map_pars_fragment:z_,map_particle_fragment:H_,map_particle_pars_fragment:G_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:W_,morphinstance_vertex:X_,morphcolor_vertex:q_,morphnormal_vertex:$_,morphtarget_pars_vertex:Y_,morphtarget_vertex:K_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:j_,normal_pars_vertex:Q_,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:r1,opaque_fragment:o1,packing:a1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:d1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:x1,skinbase_vertex:y1,skinning_pars_vertex:v1,skinning_vertex:_1,skinnormal_vertex:b1,specularmap_fragment:M1,specularmap_pars_fragment:S1,tonemapping_fragment:w1,tonemapping_pars_fragment:E1,transmission_fragment:T1,transmission_pars_fragment:A1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:P1,worldpos_vertex:I1,background_vert:L1,background_frag:D1,backgroundCube_vert:N1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:U1,depth_vert:k1,depth_frag:B1,distance_vert:z1,distance_frag:H1,equirect_vert:G1,equirect_frag:V1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:$1,meshlambert_vert:Y1,meshlambert_frag:K1,meshmatcap_vert:Z1,meshmatcap_frag:J1,meshnormal_vert:j1,meshnormal_frag:Q1,meshphong_vert:eb,meshphong_frag:tb,meshphysical_vert:nb,meshphysical_frag:ib,meshtoon_vert:sb,meshtoon_frag:rb,points_vert:ob,points_frag:ab,shadow_vert:lb,shadow_frag:cb,sprite_vert:ub,sprite_frag:db},Je={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Cs={basic:{uniforms:li([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:li([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:li([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:li([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:li([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Be(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:li([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:li([Je.points,Je.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:li([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:li([Je.common,Je.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:li([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:li([Je.sprite,Je.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:li([Je.common,Je.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:li([Je.lights,Je.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Cs.physical={uniforms:li([Cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Wu={r:0,b:0,g:0},hb=new bt,hm=new Et;hm.set(-1,0,0,0,1,0,0,0,1);function fb(n,e,t,i,s,r){let o=new Be(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let v=b.isScene===!0?b.background:null;if(v&&v.isTexture){let y=b.backgroundBlurriness>0;v=e.get(v,y)}return v}function p(b){let v=!1,y=f(b);y===null?m(o,a):y&&y.isColor&&(m(y,1),v=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,v){let y=f(v);y&&y.isCubeTexture?(c===void 0&&(c=new it(new Gt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Zr(Cs.backgroundCube.uniforms),vertexShader:Cs.backgroundCube.vertexShader,fragmentShader:Cs.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hb.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hm),c.material.toneMapped=Bt.getTransfer(y.colorSpace)!==tn,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new it(new xt(2,2),new rn({name:"BackgroundMaterial",uniforms:Zr(Cs.background.uniforms),vertexShader:Cs.background.vertexShader,fragmentShader:Cs.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(y.colorSpace)!==tn,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,v){b.getRGB(Wu,Vh(n)),t.buffers.color.setClear(Wu.r,Wu.g,Wu.b,v,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:x,dispose:g}}function pb(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(D,U,V,P,Z){let Q=!1,J=d(D,P,V,U);r!==J&&(r=J,c(r.object)),Q=f(D,P,V,Z),Q&&p(D,P,V,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(D,U,V,P),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,U,V,P){let Z=P.wireframe===!0,Q=i[U.id];Q===void 0&&(Q={},i[U.id]=Q);let J=D.isInstancedMesh===!0?D.id:0,$=Q[J];$===void 0&&($={},Q[J]=$);let H=$[V.id];H===void 0&&(H={},$[V.id]=H);let X=H[Z];return X===void 0&&(X=h(l()),H[Z]=X),X}function h(D){let U=[],V=[],P=[];for(let Z=0;Z<t;Z++)U[Z]=0,V[Z]=0,P[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,U,V,P){let Z=r.attributes,Q=U.attributes,J=0,$=V.getAttributes();for(let H in $)if($[H].location>=0){let N=Z[H],q=Q[H];if(q===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),N===void 0||N.attribute!==q||q&&N.data!==q.data)return!0;J++}return r.attributesNum!==J||r.index!==P}function p(D,U,V,P){let Z={},Q=U.attributes,J=0,$=V.getAttributes();for(let H in $)if($[H].location>=0){let N=Q[H];N===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(N=D.instanceColor));let q={};q.attribute=N,N&&N.data&&(q.data=N.data),Z[H]=q,J++}r.attributes=Z,r.attributesNum=J,r.index=P}function x(){let D=r.newAttributes;for(let U=0,V=D.length;U<V;U++)D[U]=0}function m(D){g(D,0)}function g(D,U){let V=r.newAttributes,P=r.enabledAttributes,Z=r.attributeDivisors;V[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),Z[D]!==U&&(n.vertexAttribDivisor(D,U),Z[D]=U)}function b(){let D=r.newAttributes,U=r.enabledAttributes;for(let V=0,P=U.length;V<P;V++)U[V]!==D[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function v(D,U,V,P,Z,Q,J){J===!0?n.vertexAttribIPointer(D,U,V,Z,Q):n.vertexAttribPointer(D,U,V,P,Z,Q)}function y(D,U,V,P){x();let Z=P.attributes,Q=V.getAttributes(),J=U.defaultAttributeValues;for(let $ in Q){let H=Q[$];if(H.location>=0){let X=Z[$];if(X===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let N=X.normalized,q=X.itemSize,re=e.get(X);if(re===void 0)continue;let j=re.buffer,he=re.type,ve=re.bytesPerElement,ee=he===n.INT||he===n.UNSIGNED_INT||X.gpuType===su;if(X.isInterleavedBufferAttribute){let ge=X.data,Ne=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,at=X.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ge=0;Ge<H.locationSize;Ge++)g(H.location+Ge,ge.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)m(H.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Ge=0;Ge<H.locationSize;Ge++)v(H.location+Ge,q/H.locationSize,he,N,Ne*ve,(at+q/H.locationSize*Ge)*ve,ee)}else{if(X.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)g(H.location+ge,X.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);n.bindBuffer(n.ARRAY_BUFFER,j);for(let ge=0;ge<H.locationSize;ge++)v(H.location+ge,q/H.locationSize,he,N,q*ve,q/H.locationSize*ge*ve,ee)}}else if(J!==void 0){let N=J[$];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(H.location,N);break;case 3:n.vertexAttrib3fv(H.location,N);break;case 4:n.vertexAttrib4fv(H.location,N);break;default:n.vertexAttrib1fv(H.location,N)}}}}b()}function w(){A();for(let D in i){let U=i[D];for(let V in U){let P=U[V];for(let Z in P){let Q=P[Z];for(let J in Q)u(Q[J].object),delete Q[J];delete P[Z]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let U=i[D.id];for(let V in U){let P=U[V];for(let Z in P){let Q=P[Z];for(let J in Q)u(Q[J].object),delete Q[J];delete P[Z]}}delete i[D.id]}function _(D){for(let U in i){let V=i[U];for(let P in V){let Z=V[P];if(Z[D.id]===void 0)continue;let Q=Z[D.id];for(let J in Q)u(Q[J].object),delete Q[J];delete Z[D.id]}}}function M(D){for(let U in i){let V=i[U],P=D.isInstancedMesh===!0?D.id:0,Z=V[P];if(Z!==void 0){for(let Q in Z){let J=Z[Q];for(let $ in J)u(J[$].object),delete J[$];delete Z[Q]}delete V[P],Object.keys(V).length===0&&delete i[U]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function mb(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gb(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==rs&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vi&&_!==Bi&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(_t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&_t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:y,maxSamples:w,samples:E}}function xb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new fi,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let b=r?0:i,v=b*4,y=g.clippingState||null;l.value=y,y=u(p,h,v,f);for(let w=0;w!==v;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var gl=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:qr});r.uniforms.tEquirect.value=t;let o=new it(s,r),a=t.minFilter;return t.minFilter===is&&(t.minFilter=_n),new Yo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},W0=256,yb=3,vb=20,fm=256,pm=16,_b=3,bb=new C,Mb=new Be,ta=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yo(1,10,null),this._boxMesh=new it(new Gt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=bb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Mb));let m=new Yo(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(W0,Bh(e))}_fromTexture(e,t){e.mapping===Yr||e.mapping===jo?this._setSize(e.image.length===0?W0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=X0(e,!1,!1),i=Math.log2(e)-yb;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=X0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Yr||e.mapping===jo?(this._cubemapMaterial===null&&(this._cubemapMaterial=$0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=q0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sb(),this._integrationMaterial=wb());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/pm);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-_b)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(fm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Eb());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function X0(n,e,t){return new gl(n,{minFilter:is,generateMipmaps:e,type:xi,colorSpace:Pa,depthBuffer:t})}function xl(n,e,t){return new rn({name:n,uniforms:e,vertexShader:Nt.cube_vert,fragmentShader:t,side:ei,blending:qr,depthTest:!1,depthWrite:!1})}function Sb(){return xl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fm}u

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
	`)}function wb(){return xl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pm}},`

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
	`)}function Eb(){return xl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vb}
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
	`)}function q0(){return xl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $0(){return xl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===tu||f===nu)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new gl(p.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===tu||f===nu,x=f===Yr||f===jo;if(p||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new ta(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new ta(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===tu?h.mapping=Yr:f===nu&&(h.mapping=jo),h}function l(h){let f=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Ab(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Br("WebGLRenderer: "+i+" extension not supported."),s}}}function Rb(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let b=x!==null?x.array.length:m.array.length/3-1,v=m.count>=65535?Fa:Oa,y=new v(Math.ceil(b/3)*6,1),w=y.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,A=0;M<b;M+=3){let R=_[M+0],D=_[M+1],U=_[M+2];w[A++]=R,w[A++]=D,w[A++]=D,w[A++]=U,w[A++]=U,w[A++]=R}}else{g=m.version;for(let _=0,M=0;_<b;_+=3){let A=_+0,R=_+1,D=_+2;w[M++]=A,w[M++]=R,w[M++]=R,w[M++]=D,w[M++]=D,w[M++]=A}}y.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,y)}function h(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Cb(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Pb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:St("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ib(n,e,t){let i=new WeakMap,s=new un;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let A=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*w*4*d),_=new Na(E,y,w,d);_.type=Bi,_.needsUpdate=!0;let M=v*4;for(let R=0;R<d;R++){let D=m[R],U=g[R],V=b[R],P=y*w*4*R;for(let Z=0;Z<D.count;Z++){let Q=Z*M;f===!0&&(s.fromBufferAttribute(D,Z),E[P+Q+0]=s.x,E[P+Q+1]=s.y,E[P+Q+2]=s.z,E[P+Q+3]=0),p===!0&&(s.fromBufferAttribute(U,Z),E[P+Q+4]=s.x,E[P+Q+5]=s.y,E[P+Q+6]=s.z,E[P+Q+7]=0),x===!0&&(s.fromBufferAttribute(V,Z),E[P+Q+8]=s.x,E[P+Q+9]=s.y,E[P+Q+10]=s.z,E[P+Q+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Me(y,w)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Lb(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Db={[_h]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[Eh]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};function Nb(n,e,t,i,s,r){let o=new jn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ht;u.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new dt([0,2,0,0,2,0],2));let d=new qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new it(u,d),f=new Ks(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,b=null,v=[],y=!1;this.setSize=function(w,E){o.setSize(w,E),a!==null&&a.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<v.length;_++){let M=v[_];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){v=w,y=v.length>0&&v[0].isRenderPass===!0;let E=o.width,_=o.height;v.length>0&&a===null&&(a=new jn(E,_,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new jn(E,_,{type:xi,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&v.some(A=>A.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new qs(E,_),r===!0&&(c.format=Zs,c.type=Kr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let A=0;A<v.length;A++){let R=v[A];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(m||w.toneMapping===As&&v.length===0)return!1;if(b=E,E!==null){let _=E.width,M=E.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=As,!0},this.hasRenderPass=function(){return y},this.end=function(w,E){w.toneMapping=g,m=!0;let _=o,M=a;for(let A=0;A<v.length;A++){let R=v[A];R.enabled!==!1&&(R.render(w,M,_,E),R.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},Bt.getTransfer(p)===tn&&(d.defines.SRGB_TRANSFER="");let A=Db[x];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(b),w.render(h,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var mm=new pi,gm=new qs(1,1),xm=new Va(1),ym=new Na,vm=new Pc,_m=new Ha,Y0=[],K0=[],Z0=new Float32Array(16),J0=new Float32Array(9),j0=new Float32Array(4);function na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Y0[s];if(r===void 0&&(r=new Float32Array(s),Y0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $u(n,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ob(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),Fn(t,e)}}function Ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),Fn(t,e)}}function kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),Fn(t,e)}}function Bb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;j0.set(i),n.uniformMatrix2fv(this.addr,!1,j0),Fn(t,i)}}function zb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;J0.set(i),n.uniformMatrix3fv(this.addr,!1,J0),Fn(t,i)}}function Hb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;Z0.set(i),n.uniformMatrix4fv(this.addr,!1,Z0),Fn(t,i)}}function Gb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),Fn(t,e)}}function Wb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),Fn(t,e)}}function Xb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),Fn(t,e)}}function qb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),Fn(t,e)}}function Yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),Fn(t,e)}}function Kb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),Fn(t,e)}}function Yu(n){return n.version===0&&(n.compareFunction=Oh,n.needsUpdate=!0),n}function Zb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Yu(gm):r=mm,t.setTexture2D(e||r,s)}function Jb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vm,s)}function jb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Yu(xm):r=_m,t.setTextureCube(e||r,s)}function Qb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ym,s)}function eM(n){switch(n){case 5126:return Ob;case 35664:return Fb;case 35665:return Ub;case 35666:return kb;case 35674:return Bb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Vb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return $b;case 36295:return Yb;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function tM(n,e){n.uniform1fv(this.addr,e)}function nM(n,e){let t=na(e,this.size,2);n.uniform2fv(this.addr,t)}function iM(n,e){let t=na(e,this.size,3);n.uniform3fv(this.addr,t)}function sM(n,e){let t=na(e,this.size,4);n.uniform4fv(this.addr,t)}function rM(n,e){let t=na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oM(n,e){let t=na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aM(n,e){let t=na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lM(n,e){n.uniform1iv(this.addr,e)}function cM(n,e){n.uniform2iv(this.addr,e)}function uM(n,e){n.uniform3iv(this.addr,e)}function dM(n,e){n.uniform4iv(this.addr,e)}function hM(n,e){n.uniform1uiv(this.addr,e)}function fM(n,e){n.uniform2uiv(this.addr,e)}function pM(n,e){n.uniform3uiv(this.addr,e)}function mM(n,e){n.uniform4uiv(this.addr,e)}function gM(n,e,t){let i=this.cache,s=e.length,r=$u(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Yu(gm):o=mm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function xM(n,e,t){let i=this.cache,s=e.length,r=$u(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vm,r[o])}function yM(n,e,t){let i=this.cache,s=e.length,r=$u(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Yu(xm):o=_m;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function vM(n,e,t){let i=this.cache,s=e.length,r=$u(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ym,r[o])}function _M(n){switch(n){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return uM;case 35669:case 35673:return dM;case 5125:return hM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return vM}}var Kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eM(t.type)}},Zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_M(t.type)}},Jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$h=/(\w+)(\])?(\[|\.)?/g;function Q0(n,e){n.seq.push(e),n.map[e.id]=e}function bM(n,e,t){let i=n.name,s=i.length;for($h.lastIndex=0;;){let r=$h.exec(i),o=$h.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Q0(t,c===void 0?new Kh(a,n,e):new Zh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Jh(a),Q0(t,d)),t=d}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);bM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function em(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var MM=37297,SM=0;function wM(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var tm=new Et;function EM(n){Bt._getMatrix(tm,Bt.workingColorSpace,n);let e=`mat3( ${tm.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case Ia:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+wM(n.getShaderSource(e),a)}else return r}function TM(n,e){let t=EM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var AM={[_h]:"Linear",[bh]:"Reinhard",[Mh]:"Cineon",[Sh]:"ACESFilmic",[Eh]:"AgX",[ol]:"Neutral",[wh]:"Custom"};function RM(n,e){let t=AM[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xu=new C;function CM(){Bt.getLuminanceCoefficients(Xu);let n=Xu.x.toFixed(4),e=Xu.y.toFixed(4),t=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function IM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ml(n){return n!==""}function im(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function sm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(n){return n.replace(DM,NM)}function NM(n,e){let t=Nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jh(t)}var OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(n){return n.replace(OM,FM)}function FM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function om(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var UM={[Xr]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function kM(n){return UM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var BM={[jo]:"ENVMAP_MODE_REFRACTION"};function zM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":BM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var HM={[vh]:"ENVMAP_BLENDING_MULTIPLY",[b0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function GM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":HM[n.combine]||"ENVMAP_BLENDING_NONE"}function VM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=kM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=zM(t),d=GM(t),h=PM(t),f=IM(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ml).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ml).join(`
`),m.length>0&&(m+=`
`)):(x=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),m=[om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?Nt.tonemapping_pars_fragment:"",t.toneMapping!==As?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,TM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ml).join(`
`)),o=jh(o),o=im(o,t),o=sm(o,t),a=jh(a),a=im(a,t),a=sm(a,t),o=rm(o),a=rm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=g+x+o,v=g+m+a,y=em(s,s.VERTEX_SHADER,b),w=em(s,s.FRAGMENT_SHADER,v);s.attachShader(p,y),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(y)||"",V=s.getShaderInfoLog(w)||"",P=D.trim(),Z=U.trim(),Q=V.trim(),J=!0,$=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,w);else{let H=nm(s,y,"vertex"),X=nm(s,w,"fragment");St("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+H+`
`+X)}else P!==""?_t("WebGLProgram: Program Info Log:",P):(Z===""||Q==="")&&($=!1);$&&(R.diagnostics={runnable:J,programLog:P,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(y),s.deleteShader(w),_=new ea(s,p),M=LM(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,MM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}var WM=0,Qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ef(e),t.set(e,i)),i}},ef=class{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}};function XM(n){return n===br||n===hl||n===fl}function qM(n,e,t,i,s,r){let o=new Bo,a=new Qh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,A,R,D,U){let V=R.fog,P=D.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||Z,Q),$=h[_.type],H=i.precision;_.precision!==null&&(H=i.getMaxPrecision(_.precision),H!==_.precision&&_t("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,N=X!==void 0?X.length:0,q=0;P.morphAttributes.position!==void 0&&(q=1),P.morphAttributes.normal!==void 0&&(q=2),P.morphAttributes.color!==void 0&&(q=3);let re,j,he,ve;if($){let Ke=Cs[$];re=Ke.vertexShader,j=Ke.fragmentShader}else{re=_.vertexShader,j=_.fragmentShader;let Ke=a.getVertexShaderStage(_),zt=a.getFragmentShaderStage(_);a.update(_,Ke,zt),he=Ke.id,ve=zt.id}let ee=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,at=D.isBatchedMesh===!0,Ge=!!_.map,et=!!_.matcap,ue=!!J,oe=ue&&J.isPMREMTexture===!0,z=!!_.aoMap,W=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,K=!!_.normalMap,le=!!_.displacementMap,Ce=!!_.emissiveMap,F=!!_.metalnessMap,ie=!!_.roughnessMap,de=_.anisotropy>0,O=_.clearcoat>0,Ze=_.diffuseRoughness>0,ct=_.dispersion>0,yt=_.retroreflectivity>0,Re=_.iridescence>0,Ee=_.sheen>0,Ae=_.transmission>0,Ie=de&&!!_.anisotropyMap,I=O&&!!_.clearcoatMap,T=O&&!!_.clearcoatNormalMap,Y=O&&!!_.clearcoatRoughnessMap,Se=Ze&&!!_.diffuseRoughnessMap,ye=Re&&!!_.iridescenceMap,Fe=Re&&!!_.iridescenceThicknessMap,Ve=Ee&&!!_.sheenColorMap,xe=Ee&&!!_.sheenRoughnessMap,me=!!_.specularMap,ze=!!_.specularColorMap,G=!!_.specularIntensityMap,_e=Ae&&!!_.transmissionMap,pe=Ae&&!!_.thicknessMap,We=!!_.gradientMap,Ue=!!_.alphaMap,He=_.alphaTest>0,fe=!!_.alphaHash,At=!!_.extensions,Oe=As;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=n.toneMapping);let ht=oe?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,wt={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:re,fragmentShader:j,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:at,batchingColor:at&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:et,envMap:ue,envMapMode:ue&&J.mapping,envMapPMREM:oe,envMapMaxLod:oe?ht.length-1:null,envMapSize:oe?ht[0].width:null,aoMap:z,lightMap:W,bumpMap:ce,normalMap:K,displacementMap:le,emissiveMap:Ce,normalMapObjectSpace:K&&_.normalMapType===E0,normalMapTangentSpace:K&&_.normalMapType===Hu,packedNormalMap:K&&_.normalMapType===Hu&&XM(_.normalMap.format),metalnessMap:F,roughnessMap:ie,anisotropy:de,anisotropyMap:Ie,clearcoat:O,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:Y,diffuseRoughness:Ze,diffuseRoughnessMap:Se,dispersion:ct,retroreflection:yt,iridescence:Re,iridescenceMap:ye,iridescenceThicknessMap:Fe,sheen:Ee,sheenColorMap:Ve,sheenRoughnessMap:xe,specularMap:me,specularColorMap:ze,specularIntensityMap:G,transmission:Ae,transmissionMap:_e,thicknessMap:pe,gradientMap:We,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:Ue,alphaTest:He,alphaHash:fe,combine:_.combine,mapUv:Ge&&f(_.map.channel),aoMapUv:z&&f(_.aoMap.channel),lightMapUv:W&&f(_.lightMap.channel),bumpMapUv:ce&&f(_.bumpMap.channel),normalMapUv:K&&f(_.normalMap.channel),displacementMapUv:le&&f(_.displacementMap.channel),emissiveMapUv:Ce&&f(_.emissiveMap.channel),metalnessMapUv:F&&f(_.metalnessMap.channel),roughnessMapUv:ie&&f(_.roughnessMap.channel),anisotropyMapUv:Ie&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&f(_.sheenRoughnessMap.channel),specularMapUv:me&&f(_.specularMap.channel),specularColorMapUv:ze&&f(_.specularColorMap.channel),specularIntensityMapUv:G&&f(_.specularIntensityMap.channel),transmissionMapUv:_e&&f(_.transmissionMap.channel),thicknessMapUv:pe&&f(_.thicknessMap.channel),alphaMapUv:Ue&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(K||de),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ge||Ue),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&K===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:q,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(Ke=>Ke.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===tn,decodeVideoTextureEmissive:Ce&&_.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(_.emissiveMap.colorSpace)===tn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===ei,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let A in _.defines)M.push(A),M.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let M=h[_.type],A;if(M){let R=Cs[M];A=Vu.clone(R.uniforms)}else A=_.uniforms;return A}function v(_,M){let A=u.get(M);return A!==void 0?++A.usedTimes:(A=new VM(n,M,_,s),c.push(A),u.set(M,A)),A}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:b,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:E}}function $M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function YM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,x,m,g){let b=n[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=p,b.materialVariant=o(h),b.groupOrder=x,b.renderOrder=h.renderOrder,b.z=m,b.group=g),e++,b}function l(h,f,p,x,m,g,b){b.reversedDepth===!0&&(m=-m);let v=a(h,f,p,x,m,g);p.transmission>0?i.push(v):p.transparent===!0?s.push(v):t.push(v)}function c(h,f,p,x,m,g){let b=a(h,f,p,x,m,g);p.transmission>0?i.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function u(h,f){t.length>1&&t.sort(h||YM),i.length>1&&i.sort(f||am),s.length>1&&s.sort(f||am)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function KM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new lm,n.set(i,[o])):s>=r.length?(o=new lm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Be};break;case"SpotLight":t={position:new C,direction:new C,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function JM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jM=0;function QM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eS(n){let e=new ZM,t=JM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new bt,o=new bt;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,b=0,v=0,y=0,w=0,E=0,_=0,M=0,A=0,R=0;c.sort(QM);for(let U=0,V=c.length;U<V;U++){let P=c[U],Z=P.color,Q=P.intensity,J=P.distance,$=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===br?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=Z.r*Q,d+=Z.g*Q,h+=Z.b*Q;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],Q);R++}else if(P.isSunLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,N=t.get(P);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[p]=N,i.sunShadowMap[p]=$;let q=X.getViewportCount();for(let re=0;re<q;re++)i.sunShadowMatrix[x+re]=X.getMatrix(re),i.sunShadowCascade[x+re]=X._cascadeData[re];x+=q,p++}i.sun[f]=H,f++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,N=t.get(P);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=P.shadow.matrix,w++}i.directional[m]=H,m++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(Z).multiplyScalar(Q),H.distance=J,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[b]=H;let X=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[b]=X.matrix,P.castShadow){let N=t.get(P);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.spotShadow[b]=N,i.spotShadowMap[b]=$,_++}b++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(Z).multiplyScalar(Q),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=H,v++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let X=P.shadow,N=t.get(P);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(Q),H.groundColor.copy(P.groundColor).multiplyScalar(Q),i.hemi[y]=H,y++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==b||D.rectAreaLength!==v||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=v,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=b,D.rectAreaLength=v,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=R,i.version=jM++)}function l(c,u){let d=0,h=0,f=0,p=0,x=0,m=0,g=u.matrixWorldInverse;for(let b=0,v=c.length;b<v;b++){let y=c[b];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(y.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function cm(n){let e=new eS(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new cm(n),e.set(s,[a])):r>=o.length?(a=new cm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var nS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iS=`uniform sampler2D shadow_pass;
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
}`,sS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],rS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],um=new bt,pl=new C,Yh=new C;function oS(n,e,t){let i=new fr,s=new Me,r=new Me,o=new un,a=new zc,l=new Hc,c={},u=t.maxTextureSize,d={[Es]:ei,[ei]:Es,[Jt]:Jt},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:nS,fragmentShader:iS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ht;p.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xr;let g=this.type;this.render=function(E,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===r0&&(_t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xr);let A=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),U=n.state;U.setBlending(qr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=g!==this.type;V&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(Z=>Z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,Z=E.length;P<Z;P++){let Q=E[P],J=Q.shadow;if(J===void 0){_t("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let $=J.getFrameExtents();s.multiply($),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,J.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=H,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Zo){if(Q.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new jn(s.x,s.y,{format:br,type:xi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new qs(s.x,s.y,Bi),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=Vs,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Yn,J.map.depthTexture.magFilter=Yn}else Q.isPointLight?(J.map=new gl(s.x),J.map.depthTexture=new Va(s.x,ss)):(J.map=new jn(s.x,s.y),J.map.depthTexture=new qs(s.x,s.y,ss)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=Vs,this.type===Xr?(J.map.depthTexture.compareFunction=H?Nh:Dh,J.map.depthTexture.minFilter=_n,J.map.depthTexture.magFilter=_n):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Yn,J.map.depthTexture.magFilter=Yn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let X=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Q.isPointLight!==!0&&J.updateMatrices(Q,M);let N=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:M.layers;for(let q=0;q<X;q++){let re=J.getCamera(q);if(Q.isPointLight){let j=J.camera,he=J.matrix,ve=Q.distance||j.far;ve!==j.far&&(j.far=ve,j.updateProjectionMatrix()),pl.setFromMatrixPosition(Q.matrixWorld),j.position.copy(pl),Yh.copy(j.position),Yh.add(sS[q]),j.up.copy(rS[q]),j.lookAt(Yh),j.updateMatrixWorld(),he.makeTranslation(-pl.x,-pl.y,-pl.z),um.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),J._frustum.setFromProjectionMatrix(um,j.coordinateSystem,j.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,q),n.clear();else{q===0&&(n.setRenderTarget(J.map),n.clear());let j=J.getViewport(q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}i=J.getFrustum(q),y(_,M,re,Q,N,this.type)}J.isPointLightShadow!==!0&&this.type===Zo&&b(J,M),J.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(A,R,D)};function b(E,_){let M=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(s.x,s.y,{format:br,type:xi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,M,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,M,f,x,null)}function v(E,_,M,A){let R=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=R.uuid,V=_.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let Z=P[V];Z===void 0&&(Z=R.clone(),P[V]=Z,_.addEventListener("dispose",w)),R=Z}if(R.visible=_.visible,R.wireframe=_.wireframe,A===Zo?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=M}return R}function y(E,_,M,A,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Zo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=e.update(E),Z=E.material;if(Array.isArray(Z)){let Q=P.groups;for(let J=0,$=Q.length;J<$;J++){let H=Q[J],X=Z[H.materialIndex];if(X&&X.visible){let N=v(E,X,A,D);E.onBeforeShadow(n,E,_,M,P,N,H),n.renderBufferDirect(M,null,P,N,E,H),E.onAfterShadow(n,E,_,M,P,N,H)}}}else if(Z.visible){let Q=v(E,Z,A,D);E.onBeforeShadow(n,E,_,M,P,Q,null),n.renderBufferDirect(M,null,P,Q,E,null),E.onAfterShadow(n,E,_,M,P,Q,null)}}let V=E.children;for(let P=0,Z=V.length;P<Z;P++)y(V[P],_,M,A,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(let M in c){let A=c[M],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function aS(n,e){function t(){let G=!1,_e=new un,pe=null,We=new un(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!G&&(n.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,He,fe,At,Oe){Oe===!0&&(Ue*=At,He*=At,fe*=At),_e.set(Ue,He,fe,At),We.equals(_e)===!1&&(n.clearColor(Ue,He,fe,At),We.copy(_e))},reset:function(){G=!1,pe=null,We.set(-1,0,0,0)}}}function i(){let G=!1,_e=!1,pe=null,We=null,Ue=null;return{setReversed:function(He){if(_e!==He){let fe=e.get("EXT_clip_control");He?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),_e=He;let At=Ue;Ue=null,this.setClear(At)}},getReversed:function(){return _e},setTest:function(He){He?ge(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(He){pe!==He&&!G&&(n.depthMask(He),pe=He)},setFunc:function(He){if(_e&&(He=O0[He]),We!==He){switch(He){case vc:n.depthFunc(n.NEVER);break;case _c:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case No:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}We=He}},setLocked:function(He){G=He},setClear:function(He){Ue!==He&&(Ue=He,_e&&(He=1-He),n.clearDepth(He))},reset:function(){G=!1,pe=null,We=null,Ue=null,_e=!1}}}function s(){let G=!1,_e=null,pe=null,We=null,Ue=null,He=null,fe=null,At=null,Oe=null;return{setTest:function(ht){G||(ht?ge(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ht){_e!==ht&&!G&&(n.stencilMask(ht),_e=ht)},setFunc:function(ht,wt,Ke){(pe!==ht||We!==wt||Ue!==Ke)&&(n.stencilFunc(ht,wt,Ke),pe=ht,We=wt,Ue=Ke)},setOp:function(ht,wt,Ke){(He!==ht||fe!==wt||At!==Ke)&&(n.stencilOp(ht,wt,Ke),He=ht,fe=wt,At=Ke)},setLocked:function(ht){G=ht},setClear:function(ht){Oe!==ht&&(n.clearStencil(ht),Oe=ht)},reset:function(){G=!1,_e=null,pe=null,We=null,Ue=null,He=null,fe=null,At=null,Oe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,v=null,y=null,w=null,E=null,_=null,M=new Be(0,0,0),A=0,R=!1,D=null,U=null,V=null,P=null,Z=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,$=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=$>=2);let X=null,N={},q=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),j=new un().fromArray(q),he=new un().fromArray(re);function ve(G,_e,pe,We){let Ue=new Uint8Array(4),He=n.createTexture();n.bindTexture(G,He),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let fe=0;fe<pe;fe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,We,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(_e+fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return He}let ee={};ee[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(No),ce(!1),K(mh),ge(n.CULL_FACE),z(qr);function ge(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Ne(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function at(G,_e){return h[G]!==_e?(n.bindFramebuffer(G,_e),h[G]=_e,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_e),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ge(G,_e){let pe=p,We=!1;if(G){pe=f.get(_e),pe===void 0&&(pe=[],f.set(_e,pe));let Ue=G.textures;if(pe.length!==Ue.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let He=0,fe=Ue.length;He<fe;He++)pe[He]=n.COLOR_ATTACHMENT0+He;pe.length=Ue.length,We=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,We=!0);We&&n.drawBuffers(pe)}function et(G){return x!==G?(n.useProgram(G),x=G,!0):!1}let ue={[$r]:n.FUNC_ADD,[o0]:n.FUNC_SUBTRACT,[a0]:n.FUNC_REVERSE_SUBTRACT};ue[l0]=n.MIN,ue[c0]=n.MAX;let oe={[eu]:n.ZERO,[vr]:n.ONE,[u0]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[h0]:n.DST_ALPHA,[d0]:n.ONE_MINUS_SRC_COLOR,[_r]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[x0]:n.CONSTANT_COLOR,[y0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[_0]:n.ONE_MINUS_CONSTANT_ALPHA};function z(G,_e,pe,We,Ue,He,fe,At,Oe,ht){if(G===qr){m===!0&&(Ne(n.BLEND),m=!1);return}if(m===!1&&(ge(n.BLEND),m=!0),G!==Jo){if(G!==g||ht!==R){if((b!==$r||w!==$r)&&(n.blendEquation(n.FUNC_ADD),b=$r,w=$r),ht)switch(G){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFunc(n.ONE,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:St("WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gh:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",G);break}v=null,y=null,E=null,_=null,M.set(0,0,0),A=0,g=G,R=ht}return}Ue=Ue||_e,He=He||pe,fe=fe||We,(_e!==b||Ue!==w)&&(n.blendEquationSeparate(ue[_e],ue[Ue]),b=_e,w=Ue),(pe!==v||We!==y||He!==E||fe!==_)&&(n.blendFuncSeparate(oe[pe],oe[We],oe[He],oe[fe]),v=pe,y=We,E=He,_=fe),(At.equals(M)===!1||Oe!==A)&&(n.blendColor(At.r,At.g,At.b,Oe),M.copy(At),A=Oe),g=G,R=!1}function W(G,_e){G.side===Jt?Ne(n.CULL_FACE):ge(n.CULL_FACE);let pe=G.side===ei;_e&&(pe=!pe),ce(pe),G.blending===Ts&&G.transparent===!1?z(qr):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let We=G.stencilWrite;a.setTest(We),We&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){D!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),D=G)}function K(G){G!==i0?(ge(n.CULL_FACE),G!==U&&(G===mh?n.cullFace(n.BACK):G===s0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),U=G}function le(G){G!==V&&(J&&n.lineWidth(G),V=G)}function Ce(G,_e,pe){G?(ge(n.POLYGON_OFFSET_FILL),(P!==_e||Z!==pe)&&(P=_e,Z=pe,o.getReversed()&&(_e=-_e,pe=-pe),n.polygonOffset(_e,pe))):Ne(n.POLYGON_OFFSET_FILL)}function F(G){G?ge(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function ie(G){G===void 0&&(G=n.TEXTURE0+Q-1),X!==G&&(n.activeTexture(G),X=G)}function de(G,_e,pe){pe===void 0&&(X===null?pe=n.TEXTURE0+Q-1:pe=X);let We=N[pe];We===void 0&&(We={type:void 0,texture:void 0},N[pe]=We),(We.type!==G||We.texture!==_e)&&(X!==pe&&(n.activeTexture(pe),X=pe),n.bindTexture(G,_e||ee[G]),We.type=G,We.texture=_e)}function O(){let G=N[X];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ze(){try{n.compressedTexImage2D(...arguments)}catch(G){St("WebGLState:",G)}}function ct(){try{n.compressedTexImage3D(...arguments)}catch(G){St("WebGLState:",G)}}function yt(){try{n.texSubImage2D(...arguments)}catch(G){St("WebGLState:",G)}}function Re(){try{n.texSubImage3D(...arguments)}catch(G){St("WebGLState:",G)}}function Ee(){try{n.compressedTexSubImage2D(...arguments)}catch(G){St("WebGLState:",G)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(G){St("WebGLState:",G)}}function Ie(){try{n.texStorage2D(...arguments)}catch(G){St("WebGLState:",G)}}function I(){try{n.texStorage3D(...arguments)}catch(G){St("WebGLState:",G)}}function T(){try{n.texImage2D(...arguments)}catch(G){St("WebGLState:",G)}}function Y(){try{n.texImage3D(...arguments)}catch(G){St("WebGLState:",G)}}function Se(G){return d[G]!==void 0?d[G]:n.getParameter(G)}function ye(G,_e){d[G]!==_e&&(n.pixelStorei(G,_e),d[G]=_e)}function Fe(G){j.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),j.copy(G))}function Ve(G){he.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),he.copy(G))}function xe(G,_e){let pe=c.get(_e);pe===void 0&&(pe=new WeakMap,c.set(_e,pe));let We=pe.get(G);We===void 0&&(We=n.getUniformBlockIndex(_e,G.name),n.uniformBlockBinding(_e,We,We),pe.set(G,We))}function me(G,_e,pe){let Ue=c.get(_e).get(G);l[Ue]!==pe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ue,pe),l[Ue]=pe)}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},X=null,N={},h={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,b=null,v=null,y=null,w=null,E=null,_=null,M=new Be(0,0,0),A=0,R=!1,D=null,U=null,V=null,P=null,Z=null,j.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Ne,bindFramebuffer:at,drawBuffers:Ge,useProgram:et,setBlending:z,setMaterial:W,setFlipSided:ce,setCullFace:K,setLineWidth:le,setPolygonOffset:Ce,setScissorTest:F,activeTexture:ie,bindTexture:de,unbindTexture:O,compressedTexImage2D:Ze,compressedTexImage3D:ct,texImage2D:T,texImage3D:Y,pixelStorei:ye,getParameter:Se,updateUBOMapping:xe,uniformBlockBinding:me,texStorage2D:Ie,texStorage3D:I,texSubImage2D:yt,texSubImage3D:Re,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ae,scissor:Fe,viewport:Ve,reset:ze}}function lS(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):La("canvas")}function b(I,T,Y){let Se=1,ye=Ie(I);if((ye.width>Y||ye.height>Y)&&(Se=Y/Math.max(ye.width,ye.height)),Se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Fe=Math.floor(Se*ye.width),Ve=Math.floor(Se*ye.height);h===void 0&&(h=g(Fe,Ve));let xe=T?g(Fe,Ve):h;return xe.width=Fe,xe.height=Ve,xe.getContext("2d").drawImage(I,0,0,Fe,Ve),_t("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Fe+"x"+Ve+")."),xe}else return"data"in I&&_t("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function v(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(I,T,Y,Se,ye,Fe=!1){if(I!==null){if(n[I]!==void 0)return n[I];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ve;Se&&(Ve=e.get("EXT_texture_norm16"),Ve||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=T;if(T===n.RED&&(Y===n.FLOAT&&(xe=n.R32F),Y===n.HALF_FLOAT&&(xe=n.R16F),Y===n.UNSIGNED_BYTE&&(xe=n.R8),Y===n.UNSIGNED_SHORT&&Ve&&(xe=Ve.R16_EXT),Y===n.SHORT&&Ve&&(xe=Ve.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(xe=n.R8UI),Y===n.UNSIGNED_SHORT&&(xe=n.R16UI),Y===n.UNSIGNED_INT&&(xe=n.R32UI),Y===n.BYTE&&(xe=n.R8I),Y===n.SHORT&&(xe=n.R16I),Y===n.INT&&(xe=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(xe=n.RG32F),Y===n.HALF_FLOAT&&(xe=n.RG16F),Y===n.UNSIGNED_BYTE&&(xe=n.RG8),Y===n.UNSIGNED_SHORT&&Ve&&(xe=Ve.RG16_EXT),Y===n.SHORT&&Ve&&(xe=Ve.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(xe=n.RG8UI),Y===n.UNSIGNED_SHORT&&(xe=n.RG16UI),Y===n.UNSIGNED_INT&&(xe=n.RG32UI),Y===n.BYTE&&(xe=n.RG8I),Y===n.SHORT&&(xe=n.RG16I),Y===n.INT&&(xe=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(xe=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(xe=n.RGB16UI),Y===n.UNSIGNED_INT&&(xe=n.RGB32UI),Y===n.BYTE&&(xe=n.RGB8I),Y===n.SHORT&&(xe=n.RGB16I),Y===n.INT&&(xe=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(xe=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(xe=n.RGBA16UI),Y===n.UNSIGNED_INT&&(xe=n.RGBA32UI),Y===n.BYTE&&(xe=n.RGBA8I),Y===n.SHORT&&(xe=n.RGBA16I),Y===n.INT&&(xe=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_SHORT&&Ve&&(xe=Ve.RGB16_EXT),Y===n.SHORT&&Ve&&(xe=Ve.RGB16_SNORM_EXT),Y===n.UNSIGNED_INT_5_9_9_9_REV&&(xe=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(xe=n.R11F_G11F_B10F)),T===n.RGBA){let me=Fe?Ia:Bt.getTransfer(ye);Y===n.FLOAT&&(xe=n.RGBA32F),Y===n.HALF_FLOAT&&(xe=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(xe=me===tn?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT&&Ve&&(xe=Ve.RGBA16_EXT),Y===n.SHORT&&Ve&&(xe=Ve.RGBA16_SNORM_EXT),Y===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function _(I,T){let Y;return I?T===null||T===ss||T===Kr?Y=n.DEPTH24_STENCIL8:T===Bi?Y=n.DEPTH32F_STENCIL8:T===Qo&&(Y=n.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ss||T===Kr?Y=n.DEPTH_COMPONENT24:T===Bi?Y=n.DEPTH_COMPONENT32F:T===Qo&&(Y=n.DEPTH_COMPONENT16),Y}function M(I,T){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Yn&&I.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function A(I){let T=new WeakRef(I);i.get(I).__ref=T,p.add(T),x.register(I,T,T)}function R(I){let T=i.get(I).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function D(I){V(I.target)}function U(I){P(I.target)}function V(I){I.removeEventListener("dispose",D),R(I),Q(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function P(I){I.removeEventListener("dispose",U),R(I),$(I)}function Z(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):V(T))}p.clear(),d.clear()}function Q(I){let T=i.get(I);if(T.__webglInit===void 0)return;let Y=I.source,Se=f.get(Y);if(Se){let ye=Se[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&J(I),Object.keys(Se).length===0&&f.delete(Y)}i.remove(I)}function J(I){let T=i.get(I);n.deleteTexture(T.__webglTexture);let Y=I.source,Se=f.get(Y);delete Se[T.__cacheKey],o.memory.textures--}function $(I){let T=i.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let Y=I.depthTexture;if(Y&&Y.renderTarget===I&&V(Y),I.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(T.__webglFramebuffer[ye]))for(let Fe=0;Fe<T.__webglFramebuffer[ye].length;Fe++)n.deleteFramebuffer(T.__webglFramebuffer[ye][Fe]);else n.deleteFramebuffer(T.__webglFramebuffer[ye]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ye])}else{if(Array.isArray(T.__webglFramebuffer))for(let ye=0;ye<T.__webglFramebuffer.length;ye++)n.deleteFramebuffer(T.__webglFramebuffer[ye]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ye=0;ye<T.__webglColorRenderbuffer.length;ye++)T.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ye]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Se=I.textures;for(let ye=0,Fe=Se.length;ye<Fe;ye++){let Ve=i.get(Se[ye]);Ve.__webglTexture&&(n.deleteTexture(Ve.__webglTexture),o.memory.textures--),i.remove(Se[ye])}i.remove(I)}let H=0;function X(){H=0}function N(){return H}function q(I){H=I}function re(){let I=H;return I>=s.maxTextures&&_t("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function j(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function he(I,T){let Y=i.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){let Se=I.image;if(Se===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{W(Y,I,T);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function ve(I,T){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){W(Y,I,T);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function ee(I,T){let Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){W(Y,I,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function ge(I,T){let Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ce(Y,I,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}let Ne={[Gs]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[Tc]:n.MIRRORED_REPEAT},at={[Yn]:n.NEAREST,[S0]:n.NEAREST_MIPMAP_NEAREST,[al]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[iu]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Ge={[A0]:n.NEVER,[Oh]:n.ALWAYS,[R0]:n.LESS,[Dh]:n.LEQUAL,[C0]:n.EQUAL,[Nh]:n.GEQUAL,[P0]:n.GREATER,[I0]:n.NOTEQUAL};function et(I,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===iu||T.magFilter===al||T.magFilter===is||T.minFilter===_n||T.minFilter===iu||T.minFilter===al||T.minFilter===is)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Ne[T.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Ne[T.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Ne[T.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,at[T.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,at[T.minFilter]),T.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==al&&T.minFilter!==is||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ue(I,T){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D),A(T));let Se=T.source,ye=f.get(Se);ye===void 0&&(ye={},f.set(Se,ye));let Fe=j(T);if(Fe!==I.__cacheKey){ye[Fe]===void 0&&(ye[Fe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ye[Fe].usedTimes++;let Ve=ye[I.__cacheKey];Ve!==void 0&&(ye[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&J(T)),I.__cacheKey=Fe,I.__webglTexture=ye[Fe].texture}return Y}function oe(I,T,Y){return Math.floor(Math.floor(I/Y)/T)}function z(I,T,Y,Se){let Fe=I.updateRanges;if(Fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,Se,T.data);else{Fe.sort((G,_e)=>G.start-_e.start);let Ve=0;for(let G=1;G<Fe.length;G++){let _e=Fe[Ve],pe=Fe[G],We=_e.start+_e.count,Ue=oe(pe.start,T.width,4),He=oe(_e.start,T.width,4);pe.start<=We+1&&Ue===He&&oe(pe.start+pe.count-1,T.width,4)===Ue?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++Ve,Fe[Ve]=pe)}Fe.length=Ve+1;let xe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let G=0,_e=Fe.length;G<_e;G++){let pe=Fe[G],We=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),He=We%T.width,fe=Math.floor(We/T.width),At=Ue,Oe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,He),t.pixelStorei(n.UNPACK_SKIP_ROWS,fe),t.texSubImage2D(n.TEXTURE_2D,0,He,fe,At,Oe,Y,Se,T.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,xe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function W(I,T,Y){let Se=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Se=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Se=n.TEXTURE_3D);let ye=ue(I,T),Fe=T.source;t.bindTexture(Se,I.__webglTexture,n.TEXTURE0+Y);let Ve=i.get(Fe);if(Fe.version!==Ve.__version||ye===!0){if(t.activeTexture(n.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Oe=Bt.getPrimaries(Bt.workingColorSpace),ht=T.colorSpace===Js?null:Bt.getPrimaries(T.colorSpace),wt=T.colorSpace===Js||Oe===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let me=b(T.image,!1,s.maxTextureSize);me=Ae(T,me);let ze=r.convert(T.format,T.colorSpace),G=r.convert(T.type),_e=E(T.internalFormat,ze,G,T.normalized,T.colorSpace,T.isVideoTexture);et(Se,T);let pe,We=T.mipmaps,Ue=T.isVideoTexture!==!0,He=Ve.__version===void 0||ye===!0,fe=Fe.dataReady,At=M(T,me);if(T.isDepthTexture)_e=_(T.format===Zs,T.type),He&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,_e,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,_e,me.width,me.height,0,ze,G,null));else if(T.isDataTexture)if(We.length>0){Ue&&He&&t.texStorage2D(n.TEXTURE_2D,At,_e,We[0].width,We[0].height);for(let Oe=0,ht=We.length;Oe<ht;Oe++)pe=We[Oe],Ue?fe&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,pe.width,pe.height,ze,G,pe.data):t.texImage2D(n.TEXTURE_2D,Oe,_e,pe.width,pe.height,0,ze,G,pe.data);T.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(n.TEXTURE_2D,At,_e,me.width,me.height),fe&&z(T,me,ze,G)):t.texImage2D(n.TEXTURE_2D,0,_e,me.width,me.height,0,ze,G,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,At,_e,We[0].width,We[0].height,me.depth);for(let Oe=0,ht=We.length;Oe<ht;Oe++)if(pe=We[Oe],T.format!==rs)if(ze!==null)if(Ue){if(fe)if(T.layerUpdates.size>0){let wt=qh(pe.width,pe.height,T.format,T.type);for(let Ke of T.layerUpdates){let zt=pe.data.subarray(Ke*wt/pe.data.BYTES_PER_ELEMENT,(Ke+1)*wt/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,Ke,pe.width,pe.height,1,ze,zt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,pe.width,pe.height,me.depth,ze,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Oe,_e,pe.width,pe.height,me.depth,0,pe.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Oe,0,0,0,pe.width,pe.height,me.depth,ze,G,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Oe,_e,pe.width,pe.height,me.depth,0,ze,G,pe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ue&&He&&t.texStorage2D(n.TEXTURE_2D,At,_e,We[0].width,We[0].height);for(let Oe=0,ht=We.length;Oe<ht;Oe++)pe=We[Oe],T.format!==rs?ze!==null?Ue?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,Oe,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Oe,_e,pe.width,pe.height,0,pe.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?fe&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,pe.width,pe.height,ze,G,pe.data):t.texImage2D(n.TEXTURE_2D,Oe,_e,pe.width,pe.height,0,ze,G,pe.data)}else if(T.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,At,_e,me.width,me.height,me.depth),fe)if(T.layerUpdates.size>0){let Oe=qh(me.width,me.height,T.format,T.type);for(let ht of T.layerUpdates){let wt=me.data.subarray(ht*Oe/me.data.BYTES_PER_ELEMENT,(ht+1)*Oe/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,me.width,me.height,1,ze,G,wt)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ze,G,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,me.width,me.height,me.depth,0,ze,G,me.data);else if(T.isData3DTexture)Ue?(He&&t.texStorage3D(n.TEXTURE_3D,At,_e,me.width,me.height,me.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ze,G,me.data)):t.texImage3D(n.TEXTURE_3D,0,_e,me.width,me.height,me.depth,0,ze,G,me.data);else if(T.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(n.TEXTURE_2D,At,_e,me.width,me.height);else{let Oe=me.width,ht=me.height;for(let wt=0;wt<At;wt++)t.texImage2D(n.TEXTURE_2D,wt,_e,Oe,ht,0,ze,G,null),Oe>>=1,ht>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let Oe=n.canvas;if(Oe.hasAttribute("layoutsubtree")||Oe.setAttribute("layoutsubtree","true"),me.parentNode!==Oe){Oe.appendChild(me),d.add(T),Oe.onpaint=ht=>{let wt=ht.changedElements;for(let Ke of d)wt.includes(Ke.image)&&(Ke.needsUpdate=!0)},Oe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{let wt=n.RGBA,Ke=n.RGBA,zt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,wt,Ke,zt,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(We.length>0){if(Ue&&He){let Oe=Ie(We[0]);t.texStorage2D(n.TEXTURE_2D,At,_e,Oe.width,Oe.height)}for(let Oe=0,ht=We.length;Oe<ht;Oe++)pe=We[Oe],Ue?fe&&t.texSubImage2D(n.TEXTURE_2D,Oe,0,0,ze,G,pe):t.texImage2D(n.TEXTURE_2D,Oe,_e,ze,G,pe);T.generateMipmaps=!1}else if(Ue){if(He){let Oe=Ie(me);t.texStorage2D(n.TEXTURE_2D,At,_e,Oe.width,Oe.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,G,me)}else t.texImage2D(n.TEXTURE_2D,0,_e,ze,G,me);v(T)&&T.mipmapsAutoUpdate===!0&&y(Se),Ve.__version=Fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ce(I,T,Y){if(T.image.length!==6)return;let Se=ue(I,T),ye=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);let Fe=i.get(ye);if(ye.version!==Fe.__version||Se===!0){t.activeTexture(n.TEXTURE0+Y);let Ve=Bt.getPrimaries(Bt.workingColorSpace),xe=T.colorSpace===Js?null:Bt.getPrimaries(T.colorSpace),me=T.colorSpace===Js||Ve===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ze=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let Ke=0;Ke<6;Ke++)!ze&&!G?_e[Ke]=b(T.image[Ke],!0,s.maxCubemapSize):_e[Ke]=G?T.image[Ke].image:T.image[Ke],_e[Ke]=Ae(T,_e[Ke]);let pe=_e[0],We=r.convert(T.format,T.colorSpace),Ue=r.convert(T.type),He=E(T.internalFormat,We,Ue,T.normalized,T.colorSpace),fe=T.isVideoTexture!==!0,At=Fe.__version===void 0||Se===!0,Oe=ye.dataReady,ht=M(T,pe);et(n.TEXTURE_CUBE_MAP,T);let wt;if(T.isDepthTexture){if(He=_(T.format===Zs,T.type),At)if(fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,He,pe.width,pe.height);else for(let Ke=0;Ke<6;Ke++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,pe.width,pe.height,0,We,Ue,null)}else if(ze){fe&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,He,pe.width,pe.height);for(let Ke=0;Ke<6;Ke++){wt=_e[Ke].mipmaps;for(let zt=0;zt<wt.length;zt++){let ft=wt[zt];T.format!==rs?We!==null?fe?Oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt,0,0,ft.width,ft.height,We,ft.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt,He,ft.width,ft.height,0,ft.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt,0,0,ft.width,ft.height,We,Ue,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt,He,ft.width,ft.height,0,We,Ue,ft.data)}}}else{if(wt=T.mipmaps,fe&&At){wt.length>0&&ht++;let Ke=Ie(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,He,Ke.width,Ke.height)}for(let Ke=0;Ke<6;Ke++)if(G){fe?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,_e[Ke].width,_e[Ke].height,We,Ue,_e[Ke].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,_e[Ke].width,_e[Ke].height,0,We,Ue,_e[Ke].data);for(let zt=0;zt<wt.length;zt++){let mn=wt[zt].image[Ke].image;fe?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt+1,0,0,mn.width,mn.height,We,Ue,mn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt+1,He,mn.width,mn.height,0,We,Ue,mn.data)}}else{fe?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,0,0,We,Ue,_e[Ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,He,We,Ue,_e[Ke]);for(let zt=0;zt<wt.length;zt++){let ft=wt[zt];fe?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt+1,0,0,We,Ue,ft.image[Ke]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,zt+1,He,We,Ue,ft.image[Ke])}}}v(T)&&T.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),Fe.__version=ye.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function K(I,T,Y,Se,ye,Fe){let Ve=r.convert(Y.format,Y.colorSpace),xe=r.convert(Y.type),me=E(Y.internalFormat,Ve,xe,Y.normalized,Y.colorSpace),ze=i.get(T),G=i.get(Y);if(G.__renderTarget=T,!ze.__hasExternalTextures){let _e=Math.max(1,T.width>>Fe),pe=Math.max(1,T.height>>Fe);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,Fe,me,_e,pe,T.depth,0,Ve,xe,null):t.texImage2D(ye,Fe,me,_e,pe,0,Ve,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Re(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ye,G.__webglTexture,0,yt(T)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Se,ye,G.__webglTexture,Fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(I,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),T.depthBuffer){let Se=T.depthTexture,ye=Se&&Se.isDepthTexture?Se.type:null,Fe=_(T.stencilBuffer,ye),Ve=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(T),Fe,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(T),Fe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,I)}else{let Se=T.textures;for(let ye=0;ye<Se.length;ye++){let Fe=Se[ye],Ve=r.convert(Fe.format,Fe.colorSpace),xe=r.convert(Fe.type),me=E(Fe.internalFormat,Ve,xe,Fe.normalized,Fe.colorSpace);Re(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(T),me,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(T),me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,me,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(I,T,Y){let Se=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ye=i.get(T.depthTexture);ye.__renderTarget=T;let Fe=Se?T.depthTexture.image[0]:T.depthTexture.image;(!ye.__webglTexture||Fe.width!==T.width||Fe.height!==T.height)&&(Fe.width=T.width,Fe.height=T.height,T.depthTexture.needsUpdate=!0),Se?ge(T.depthTexture,0):he(T.depthTexture,0);let Ve=ye.__webglTexture,xe=yt(T),me=Se?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,ze=T.depthTexture.format===Zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Vs)Re(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,me,Ve,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,me,Ve,0);else if(T.depthTexture.format===Zs)Re(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,me,Ve,0,xe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,me,Ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(I){let T=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let Se=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Se){let ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Se.removeEventListener("dispose",ye)};Se.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=Se}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let Se=0;Se<6;Se++)Ce(T.__webglFramebuffer[Se],I,Se);else I.texture.mipmaps.length>0?Ce(T.__webglFramebuffer[0],I,0):Ce(T.__webglFramebuffer,I,0);else if(Y){T.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Se]),T.__webglDepthbuffer[Se]===void 0)T.__webglDepthbuffer[Se]=n.createRenderbuffer(),le(T.__webglDepthbuffer[Se],I,!1);else{let ye=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=T.__webglDepthbuffer[Se];n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,Fe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),le(T.__webglDepthbuffer,I,!1);else{let ye=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,Fe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(I,T,Y){let Se=i.get(I);T!==void 0&&K(Se.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&F(I)}function de(I){let T=I.texture,Y=i.get(I),Se=i.get(T);I.addEventListener("dispose",U),A(I);let ye=I.textures,Fe=I.isWebGLCubeRenderTarget===!0,Ve=ye.length>1;if(Ve||(Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture()),Se.__version=T.version,o.memory.textures++),Fe){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps.length>0){Y.__webglFramebuffer[xe]=[];for(let me=0;me<T.mipmaps.length;me++)Y.__webglFramebuffer[xe][me]=n.createFramebuffer()}else Y.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)Y.__webglFramebuffer[xe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let xe=0,me=ye.length;xe<me;xe++){let ze=i.get(ye[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Re(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xe=0;xe<ye.length;xe++){let me=ye[xe];Y.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[xe]);let ze=r.convert(me.format,me.colorSpace),G=r.convert(me.type),_e=E(me.internalFormat,ze,G,me.normalized,me.colorSpace,I.isXRRenderTarget===!0),pe=yt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,_e,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(n.TEXTURE_CUBE_MAP,Se.__webglTexture),et(n.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)K(Y.__webglFramebuffer[xe][me],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,me);else K(Y.__webglFramebuffer[xe],I,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(T)?y(n.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ve){for(let xe=0,me=ye.length;xe<me;xe++){let ze=ye[xe],G=i.get(ze),_e=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,G.__webglTexture),et(_e,ze),K(Y.__webglFramebuffer,I,ze,n.COLOR_ATTACHMENT0+xe,_e,0),v(ze)&&y(_e)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Se.__webglTexture),et(xe,T),T.mipmaps.length>0)for(let me=0;me<T.mipmaps.length;me++)K(Y.__webglFramebuffer[me],I,T,n.COLOR_ATTACHMENT0,xe,me);else K(Y.__webglFramebuffer,I,T,n.COLOR_ATTACHMENT0,xe,0);v(T)?y(xe):T.mipmaps.length>0&&n.texParameteri(xe,n.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&F(I)}function O(I){let T=I.textures;for(let Y=0,Se=T.length;Y<Se;Y++){let ye=T[Y];if(v(ye)&&ye.mipmapsAutoUpdate===!0){let Fe=w(I),Ve=i.get(ye).__webglTexture;t.bindTexture(Fe,Ve),y(Fe),t.unbindTexture()}}}let Ze=[];function ct(I){if(I.samples>0){if(Re(I)===!1){let T=I.textures,Y=I.width,Se=I.height,ye=n.COLOR_BUFFER_BIT,Fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(I),xe=T.length>1;if(xe)for(let ze=0;ze<T.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ze=0;ze<T.length;ze++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[ze]);let G=i.get(T[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,G,0)}n.blitFramebuffer(0,0,Y,Se,0,0,Y,Se,ye,n.NEAREST),l===!0&&(Ze.length=0,Ze.push(n.COLOR_ATTACHMENT0+ze),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Ze.push(Fe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let ze=0;ze<T.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[ze]);let G=i.get(T[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,G,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function yt(I){return Math.min(s.maxSamples,I.samples)}function Re(I){let T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ee(I){let T=o.render.frame;u.get(I)!==T&&(u.set(I,T),I.update())}function Ae(I,T){let Y=I.colorSpace,Se=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Pa&&Y!==Js&&(Bt.getTransfer(Y)===tn?(Se!==rs||ye!==vi)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",Y)),T}function Ie(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=re,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=q,this.setTexture2D=he,this.setTexture2DArray=ve,this.setTexture3D=ee,this.setTextureCube=ge,this.rebindTextures=ie,this.setupRenderTarget=de,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Re,this.dispose=Z}function cS(n,e){function t(i,s=Js){let r,o=Bt.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===ru)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ah)return n.BYTE;if(i===Rh)return n.SHORT;if(i===Qo)return n.UNSIGNED_SHORT;if(i===su)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Ih)return n.ALPHA;if(i===Lh)return n.RGB;if(i===rs)return n.RGBA;if(i===Vs)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===au)return n.RED;if(i===lu)return n.RED_INTEGER;if(i===br)return n.RG;if(i===cu)return n.RG_INTEGER;if(i===uu)return n.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===dl)if(o===tn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ll)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===du||i===hu||i===fu||i===pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mu||i===gu||i===xu||i===yu||i===vu||i===hl||i===_u)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mu||i===gu)return o===tn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yu)return r.COMPRESSED_R11_EAC;if(i===vu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hl)return r.COMPRESSED_RG11_EAC;if(i===_u)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bu||i===Mu||i===Su||i===wu||i===Eu||i===Tu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu||i===Lu||i===Du||i===Nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Su)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Au)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ru)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Iu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Du)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ou||i===Fu||i===Uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ou)return o===tn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ku||i===Bu||i===fl||i===zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ku)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var uS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dS=`
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

}`,tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:uS,fragmentShader:dS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nf=class extends es{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new tf,g={},b=t.getContextAttributes(),v=null,y=null,w=[],E=[],_=new Me,M=null,A=null,R=new $n;R.viewport=new un;let D=new $n;D.viewport=new un;let U=[R,D],V=new Qc,P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=w[j];return he===void 0&&(he=new zo,w[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=w[j];return he===void 0&&(he=new zo,w[j]=he),he.getGripSpace()},this.getHand=function(j){let he=w[j];return he===void 0&&(he=new zo,w[j]=he),he.getHandSpace()};function Q(j){let he=E.indexOf(j.inputSource);if(he===-1)return;let ve=w[he];ve!==void 0&&(ve.update(j.inputSource,j.frame,c||o),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",$);for(let j=0;j<w.length;j++){let he=E[j];he!==null&&(E[j]=null,w[j].disconnect(he))}P=null,Z=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(v),f=null,h=null,d=null,s=null,y=null,re.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ee=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=b.stencil?Zs:Vs,ee=b.stencil?Kr:ss);let Ne={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ne),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new jn(h.textureWidth,h.textureHeight,{format:rs,type:vi,depthTexture:new qs(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new jn(f.framebufferWidth,f.framebufferHeight,{format:rs,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(j){for(let he=0;he<j.removed.length;he++){let ve=j.removed[he],ee=E.indexOf(ve);ee>=0&&(E[ee]=null,w[ee].disconnect(ve))}for(let he=0;he<j.added.length;he++){let ve=j.added[he],ee=E.indexOf(ve);if(ee===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=E.length){E.push(ve),ee=Ne;break}else if(E[Ne]===null){E[Ne]=ve,ee=Ne;break}if(ee===-1)break}let ge=w[ee];ge&&ge.connect(ve)}}function H(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let he=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),V.near=D.near=R.near=he,V.far=D.far=R.far=ve,(P!==V.near||Z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,Z=V.far),V.layers.mask=j.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let ee=j.parent,ge=V.cameras;H(V,ee);for(let Ne=0;Ne<ge.length;Ne++)H(ge[Ne],ee);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),X(j,V,ee)};function X(j,he,ve){ve===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Uo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return g[j]};let N=null;function q(j,he){if(u=he.getViewerPose(c||o),p=he,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ee=!1;ve.length!==V.cameras.length&&(V.cameras.length=0,ee=!0);for(let Ge=0;Ge<ve.length;Ge++){let et=ve[Ge],ue=null;if(f!==null)ue=f.getViewport(et);else{let z=d.getViewSubImage(h,et);ue=z.viewport,Ge===0&&(e.setRenderTargetTextures(y,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(y))}let oe=U[Ge];oe===void 0&&(oe=new $n,oe.layers.enable(Ge),oe.viewport=new un,U[Ge]=oe),oe.matrix.fromArray(et.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(et.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ue.x,ue.y,ue.width,ue.height),Ge===0&&(V.matrix.copy(oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ee===!0&&V.cameras.push(oe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ge=d.getDepthInformation(ve[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<ve.length;Ge++){let et=ve[Ge].camera;if(et){let ue=g[et];ue||(ue=new Wa,g[et]=ue);let oe=d.getCameraImage(et);ue.sourceTexture=oe}}}}for(let ve=0;ve<w.length;ve++){let ee=E[ve],ge=w[ve];ee!==null&&ge!==void 0&&ge.update(ee,he,c||o)}N&&N(j,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}let re=new dm;re.setAnimationLoop(q),this.setAnimationLoop=function(j){N=j},this.dispose=function(){}}},hS=new bt,bm=new Et;bm.set(-1,0,0,0,1,0,0,0,1);function fS(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Vh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,v,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ei&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ei&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),v=b.envMap,y=b.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(hS.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ei&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pS(n,e,t,i){let s={},r={};function o(b,v){let y=v.program;i.uniformBlockBinding(b,y,s[b.id])}function a(b,v){let y=s[b.id];y===void 0&&(p(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",m));let w=v.program;i.updateUBOMapping(b,w);let E=e.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let v=n.createBuffer(),y=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),v}function c(b){let v=s[b.id],y=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let A=0,R=M.length;A<R;A++)u(M[A],E,A,w);else u(M,E,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(b,v,y,w){if(h(b,v,y,w)===!0){let E=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let A=0;A<_.length;A++){let R=_[A],D=x(R,!0);d(R,b.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function d(b,v,y){typeof b=="number"||typeof b=="boolean"?v[y]=b:b.isMatrix3?(v[y]=b.elements[0],v[y+1]=b.elements[1],v[y+2]=b.elements[2],v[y+3]=0,v[y+4]=b.elements[3],v[y+5]=b.elements[4],v[y+6]=b.elements[5],v[y+7]=0,v[y+8]=b.elements[6],v[y+9]=b.elements[7],v[y+10]=b.elements[8],v[y+11]=0):ArrayBuffer.isView(b)?v.set(b.subarray(0,v.length-y),y):b.toArray(v,y)}function h(b,v,y,w){let E=b.value,_=v+"_"+y;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let M=w[_],A=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(A=!0);return A}return f(E,w,_)}function f(b,v,y){if(v[y]===void 0)return typeof b=="number"||typeof b=="boolean"?v[y]=b:ArrayBuffer.isView(b)?v[y]=b.slice():v[y]=b.clone(),!0;{let w=v[y];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return v[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function p(b){let v=b.uniforms,y=0,w=16;for(let _=0,M=v.length;_<M;_++){let A=Array.isArray(v[_])?v[_]:[v[_]];for(let R=0,D=A.length;R<D;R++){let U=A[R],V=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(v[_])||Array.isArray(U.value),Z=y;for(let J=0,$=V.length;J<$;J++){let H=V[J],X=x(H,P),N=y%w,q=N%X.boundary,re=N+q;y+=q,re!==0&&w-re<X.storage&&(y+=w-re),J===0&&(Z=y),y+=X.storage}let Q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Q((y-Z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Z}}let E=y%w;return E>0&&(y+=w-E),b.__size=y,b.__cache={},this}function x(b,v){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",b),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){let v=b.target;v.removeEventListener("dispose",m),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var mS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Rs=null;function gS(){return Rs===null&&(Rs=new ka(mS,16,16,br,xi),Rs.name="DFG_LUT",Rs.minFilter=_n,Rs.magFilter=_n,Rs.wrapS=bs,Rs.wrapT=bs,Rs.generateMipmaps=!1,Rs.needsUpdate=!0),Rs}var qu=class{constructor(e={}){let{canvas:t=L0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=vi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,m=new Set([uu,cu,lu]),g=new Set([vi,ss,Qo,Kr,ru,ou]),b=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=As,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,U=null,V=null,P=null,Z=null;this._outputColorSpace=Jn;let Q=0,J=0,$=null,H=-1,X=null,N=new un,q=new un,re=null,j=new Be(0),he=0,ve=t.width,ee=t.height,ge=1,Ne=null,at=null,Ge=new un(0,0,ve,ee),et=new un(0,0,ve,ee),ue=!1,oe=new fr,z=new Ic,W=!1,ce=!1,K=new bt,le=new C,Ce=new un,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function de(){return $===null?ge:1}let O=i;function Ze(S,B){return t.getContext(S,B)}let ct,yt,Re,Ee,Ae,Ie,I,T,Y,Se,ye,Fe,Ve,xe,me,ze,G,_e,pe,We,Ue,He,fe;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),O===null){let B="webgl2";if(O=Ze(B,S),O===null)throw Ze(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(S){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),St("WebGLRenderer: "+S.message),S}function At(){ct=new Ab(O),ct.init(),Ue=new cS(O,ct),yt=new gb(O,ct,e,Ue),Re=new aS(O,ct),yt.reversedDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),V=O.createFramebuffer(),P=O.createFramebuffer(),Z=O.createFramebuffer(),Ee=new Pb(O),Ae=new $M,Ie=new lS(O,ct,Re,Ae,yt,Ue,Ee),I=new Tb(R),T=new Lv(O),He=new pb(O,T),Y=new Rb(O,T,Ee,He),Se=new Lb(O,Y,T,He,Ee),_e=new Ib(O,yt,Ie),me=new xb(Ae),ye=new qM(R,I,ct,yt,He,me),Fe=new fS(R,Ae),Ve=new KM,xe=new tS(ct),G=new fb(R,I,Re,Se,p,l),ze=new oS(R,Se,yt),fe=new pS(O,Ee,yt,Re),pe=new mb(O,ct,Ee),We=new Cb(O,ct,Ee),Ee.programs=ye.programs,R.capabilities=yt,R.extensions=ct,R.properties=Ae,R.renderLists=Ve,R.shadowMap=ze,R.state=Re,R.info=Ee}x!==vi&&(A=new Nb(x,t.width,t.height,a,s,r));let Oe=new nf(R,O);this.xr=Oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(S){S!==void 0&&(ge=S,this.setSize(ve,ee,!1))},this.getSize=function(S){return S.set(ve,ee)},this.setSize=function(S,B,te=!0){if(Oe.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=S,ee=B,t.width=Math.floor(S*ge),t.height=Math.floor(B*ge),te===!0&&(t.style.width=S+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(ve*ge,ee*ge).floor()},this.setDrawingBufferSize=function(S,B,te){ve=S,ee=B,ge=te,t.width=Math.floor(S*te),t.height=Math.floor(B*te),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(x===vi){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){_t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Ge)},this.setViewport=function(S,B,te,ne){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,B,te,ne),Re.viewport(N.copy(Ge).multiplyScalar(de()).round())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,B,te,ne){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,B,te,ne),Re.scissor(q.copy(et).multiplyScalar(de()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){Re.setScissorTest(ue=S)},this.setOpaqueSort=function(S){Ne=S},this.setTransparentSort=function(S){at=S},this.getClearColor=function(S){return S.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor(...arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,te=!0){let ne=0;if(S){let se=!1;if($!==null){let De=$.texture.format;se=m.has(De)}if(se){let De=$.texture.type,nt=g.has(De),qe=G.getClearColor(),Pe=G.getClearAlpha(),je=qe.r,vt=qe.g,It=qe.b;nt?(b[0]=je,b[1]=vt,b[2]=It,b[3]=Pe,O.clearBufferuiv(O.COLOR,0,b)):(v[0]=je,v[1]=vt,v[2]=It,v[3]=Pe,O.clearBufferiv(O.COLOR,0,v))}else ne|=O.COLOR_BUFFER_BIT}B&&(ne|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),G.dispose(),Ve.dispose(),xe.dispose(),Ie.dispose(),Ae.dispose(),I.dispose(),Se.dispose(),Y.dispose(),He.dispose(),fe.dispose(),ye.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",gs),Oe.removeEventListener("sessionend",xs),wi.stop()};function ht(S){S.preventDefault(),Da("WebGLRenderer: Context Lost."),D=!0}function wt(){Da("WebGLRenderer: Context Restored."),D=!1;let S=Ee.autoReset,B=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,se=ze.type;At(),Ee.autoReset=S,ze.enabled=B,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=se}function Ke(S){St("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){let B=S.target;B.removeEventListener("dispose",zt),ft(B)}function ft(S){mn(S),Ae.remove(S)}function mn(S){let B=Ae.get(S).programs;B!==void 0&&(B.forEach(function(te){ye.releaseProgram(te)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,te,ne,se,De){B===null&&(B=F);let nt=se.isMesh&&se.matrixWorld.determinantAffine()<0,qe=rr(S,B,te,ne,se);Re.setMaterial(ne,nt);let Pe=te.index,je=1;if(ne.wireframe===!0){if(Pe=Y.getWireframeAttribute(te),Pe===void 0)return;je=2}let vt=te.drawRange,It=te.attributes.position,st=vt.start*je,Ct=(vt.start+vt.count)*je;De!==null&&(st=Math.max(st,De.start*je),Ct=Math.min(Ct,(De.start+De.count)*je)),Pe!==null?(st=Math.max(st,0),Ct=Math.min(Ct,Pe.count)):It!=null&&(st=Math.max(st,0),Ct=Math.min(Ct,It.count));let xn=Ct-st;if(xn<0||xn===1/0)return;He.setup(se,ne,qe,te,Pe);let nn,en=pe;if(Pe!==null&&(nn=T.get(Pe),en=We,en.setIndex(nn)),se.isMesh)ne.wireframe===!0?(Re.setLineWidth(ne.wireframeLinewidth*de()),en.setMode(O.LINES)):en.setMode(O.TRIANGLES);else if(se.isLine){let En=ne.linewidth;En===void 0&&(En=1),Re.setLineWidth(En*de()),se.isLineSegments?en.setMode(O.LINES):se.isLineLoop?en.setMode(O.LINE_LOOP):en.setMode(O.LINE_STRIP)}else se.isPoints?en.setMode(O.POINTS):se.isSprite&&en.setMode(O.TRIANGLES);if(se.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))en.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let En=se._multiDrawStarts,rt=se._multiDrawCounts,Wn=se._multiDrawCount,Wt=Pe?T.get(Pe).bytesPerElement:1,Zi=Ae.get(ne).currentProgram.getUniforms();for(let Xn=0;Xn<Wn;Xn++)Zi.setValue(O,"_gl_DrawID",Xn),en.render(En[Xn]/Wt,rt[Xn])}else if(se.isInstancedMesh)en.renderInstances(st,xn,se.count);else if(te.isInstancedBufferGeometry){let En=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,rt=Math.min(te.instanceCount,En);en.renderInstances(st,xn,rt)}else en.render(st,xn)};function Vn(S,B,te,ne){U!==null&&S.isNodeMaterial&&U.setObject(ne,S),W===!0&&me.setState(S,te,!1),S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=ei,S.needsUpdate=!0,ii(S,B,ne),S.side=Es,S.needsUpdate=!0,ii(S,B,ne),S.side=Jt):ii(S,B,ne)}this.compile=function(S,B,te=null){te===null&&(te=S),U!==null&&U.renderStart(S,B,te),E=xe.get(te),E.init(B),M.push(E),te.traverseVisible(function(se){se.isLight&&se.layers.test(B.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),S!==te&&S.traverseVisible(function(se){se.isLight&&se.layers.test(B.layers)&&(E.pushLight(se),se.castShadow&&E.pushShadow(se))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,W=me.init(this.clippingPlanes,ce),W===!0&&me.setGlobalState(this.clippingPlanes,B),U!==null&&ze.render(E.state.shadowsArray,te,B);let ne=new Set;return S.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let De=se.material;if(De)if(Array.isArray(De))for(let nt=0;nt<De.length;nt++){let qe=De[nt];Vn(qe,te,B,se),ne.add(qe)}else Vn(De,te,B,se),ne.add(De)}),E=M.pop(),U!==null&&U.renderEnd(),ne},this.compileAsync=function(S,B,te=null){let ne=this.compile(S,B,te);return new Promise(se=>{function De(){if(ne.forEach(function(nt){let Pe=Ae.get(nt).currentProgram;(Pe===void 0||Pe.isReady())&&ne.delete(nt)}),ne.size===0){se(S);return}setTimeout(De,10)}ct.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let ms=null;function Dr(S){ms&&ms(S)}function gs(){wi.stop()}function xs(){wi.start()}let wi=new dm;wi.setAnimationLoop(Dr),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(S){ms=S,Oe.setAnimationLoop(S),S===null?wi.stop():wi.start()},Oe.addEventListener("sessionstart",gs),Oe.addEventListener("sessionend",xs),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,B);let te=Oe.enabled===!0&&Oe.isPresenting===!0,ne=A!==null&&($===null||te)&&A.begin(R,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(B),B=Oe.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,B,$),E=xe.get(S,M.length),E.init(B),E.state.textureUnits=Ie.getTextureUnits(),M.push(E),K.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?z.setFromArrayCamera(B):oe.setFromProjectionMatrix(K,Ui,B.reversedDepth),ce=this.localClippingEnabled,W=me.init(this.clippingPlanes,ce),w=Ve.get(S,_.length),w.init(),_.push(w),this.info.render.frame++,Oe.enabled===!0&&Oe.isPresenting===!0){let nt=R.xr.getDepthSensingMesh();nt!==null&&gn(nt,B,-1/0,R.sortObjects)}gn(S,B,0,R.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(Ne,at),ie=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ie&&G.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),W===!0&&me.beginShadows();let se=E.state.shadowsArray;if(ze.render(se,S,B),W===!0&&me.endShadows(),(ne&&A.hasRenderPass())===!1){let nt=w.opaque,qe=w.transmissive;if(E.setupLights(),B.isArrayCamera){let Pe=B.cameras;if(qe.length>0)for(let je=0,vt=Pe.length;je<vt;je++){let It=Pe[je];ui(nt,qe,S,It)}ie&&G.render(S);for(let je=0,vt=Pe.length;je<vt;je++){let It=Pe[je];ys(w,S,It,It.viewport)}}else qe.length>0&&ui(nt,qe,S,B),ie&&G.render(S),ys(w,S,B)}$!==null&&J===0&&(Ie.updateMultisampleRenderTarget($),Ie.updateRenderTargetMipmap($)),ne&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,B),He.resetDefaultState(),H=-1,X=null,M.pop(),M.length>0?(E=M[M.length-1],Ie.setTextureUnits(E.state.textureUnits),W===!0&&me.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function gn(S,B,te,ne){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)te=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){let nt=B.isArrayCamera?z:oe;if(!S.frustumCulled||S.intersectsFrustum(nt)){ne&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let qe=Se.update(S),Pe=S.material;Pe.visible&&w.push(S,qe,Pe,te,Ce.z,null,B)}}else if(S.isMesh||S.isLine||S.isPoints){let nt=B.isArrayCamera?z:oe;if(!S.frustumCulled||S.intersectsFrustum(nt)){let qe=Se.update(S),Pe=S.material;if(ne&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ce.copy(qe.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Pe)){let je=qe.groups;for(let vt=0,It=je.length;vt<It;vt++){let st=je[vt],Ct=Pe[st.materialIndex];Ct&&Ct.visible&&w.push(S,qe,Ct,te,Ce.z,st,B)}}else Pe.visible&&w.push(S,qe,Pe,te,Ce.z,null,B)}}}let De=S.children;for(let nt=0,qe=De.length;nt<qe;nt++)gn(De[nt],B,te,ne)}function ys(S,B,te,ne){let{opaque:se,transmissive:De,transparent:nt}=S;E.setupLightsView(te),W===!0&&me.setGlobalState(R.clippingPlanes,te),ne&&Re.viewport(N.copy(ne)),se.length>0&&Ls(se,B,te),De.length>0&&Ls(De,B,te),nt.length>0&&Ls(nt,B,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ui(S,B,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ne.id]===void 0){let st=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ne.id]=new jn(1,1,{generateMipmaps:!0,type:st?xi:vi,minFilter:is,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let De=E.state.transmissionRenderTarget[ne.id],nt=ne.viewport||N;De.setSize(nt.z*R.transmissionResolutionScale,nt.w*R.transmissionResolutionScale);let qe=R.getRenderTarget(),Pe=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(De),R.getClearColor(j),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),ie&&G.render(te);let vt=R.toneMapping;R.toneMapping=As;let It=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),E.setupLightsView(ne),W===!0&&me.setGlobalState(R.clippingPlanes,ne),Ls(S,te,ne),Ie.updateMultisampleRenderTarget(De),Ie.updateRenderTargetMipmap(De),ct.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Ct=0,xn=B.length;Ct<xn;Ct++){let nn=B[Ct],{object:en,geometry:En,material:rt,group:Wn}=nn;if(rt.side===Jt&&en.layers.test(ne.layers)){let Wt=rt.side;rt.side=ei,rt.needsUpdate=!0,Ki(en,te,ne,En,rt,Wn),rt.side=Wt,rt.needsUpdate=!0,st=!0}}st===!0&&(Ie.updateMultisampleRenderTarget(De),Ie.updateRenderTargetMipmap(De))}R.setRenderTarget(qe,Pe,je),R.setClearColor(j,he),It!==void 0&&(ne.viewport=It),R.toneMapping=vt}function Ls(S,B,te){let ne=B.isScene===!0?B.overrideMaterial:null;for(let se=0,De=S.length;se<De;se++){let nt=S[se],{object:qe,geometry:Pe,group:je}=nt,vt=nt.material;vt.allowOverride===!0&&ne!==null&&(vt=ne),qe.layers.test(te.layers)&&Ki(qe,B,te,Pe,vt,je)}}function Ki(S,B,te,ne,se,De){U!==null&&se.isNodeMaterial&&U.setObject(S,se),S.onBeforeRender(R,B,te,ne,se,De),S.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),se.onBeforeRender(R,B,te,ne,S,De),se.transparent===!0&&se.side===Jt&&se.forceSinglePass===!1?(se.side=ei,se.needsUpdate=!0,R.renderBufferDirect(te,B,ne,se,S,De),se.side=Es,se.needsUpdate=!0,R.renderBufferDirect(te,B,ne,se,S,De),se.side=Jt):R.renderBufferDirect(te,B,ne,se,S,De),S.onAfterRender(R,B,te,ne,se,De)}function vs(S){let B=0;for(let te of S)te.texture!==null&&B++;return B}function ii(S,B,te){B.isScene!==!0&&(B=F);let ne=Ae.get(S),se=E.state.lights,De=E.state.shadowsArray,nt=se.state.version,qe=ye.getParameters(S,se.state,De,B,te,E.state.lightProbeGridArray),Pe=ye.getProgramCacheKey(qe),je=ne.programs;ne.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,ne.fog=B.fog;let vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ne.envMap=I.get(S.envMap||ne.environment,vt),ne.envMapRotation=ne.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,je===void 0&&(S.addEventListener("dispose",zt),je=new Map,ne.programs=je,ne.programVariants=new Map);let It=je.get(Pe);if(It!==void 0){if(ne.currentProgram===It&&ne.lightsStateVersion===nt)return Ds(S,qe),It}else qe.uniforms=ye.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,te,qe),S.onBeforeCompile(qe,R),It=ye.acquireProgram(qe,Pe),je.set(Pe,It),ne.uniforms=qe.uniforms;let st=ne.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(st.clippingPlanes=me.uniform),Ds(S,qe),ne.needsLights=Ns(S),ne.lightsStateVersion=nt,ne.needsLights&&(st.ambientLightColor.value=se.state.ambient,st.lightProbe.value=se.state.probe,st.sunLights.value=se.state.sun,st.sunLightShadows.value=se.state.sunShadow,st.directionalLights.value=se.state.directional,st.directionalLightShadows.value=se.state.directionalShadow,st.spotLights.value=se.state.spot,st.spotLightShadows.value=se.state.spotShadow,st.rectAreaLights.value=se.state.rectArea,st.ltc_1.value=se.state.rectAreaLTC1,st.ltc_2.value=se.state.rectAreaLTC2,st.pointLights.value=se.state.point,st.pointLightShadows.value=se.state.pointShadow,st.hemisphereLights.value=se.state.hemi,st.sunShadowMatrix.value=se.state.sunShadowMatrix,st.sunShadowCascade.value=se.state.sunShadowCascade,st.directionalShadowMatrix.value=se.state.directionalShadowMatrix,st.spotLightMatrix.value=se.state.spotLightMatrix,st.spotLightMap.value=se.state.spotLightMap,st.pointShadowMatrix.value=se.state.pointShadowMatrix),ne.numLightProbeGrids=vs(E.state.lightProbeGridArray),ne.currentProgram=It,ne.uniformsList=null,It}function co(S,B,te,ne,se){let De=Ae.get(S),nt=De.currentProgram.id+","+ne+","+se,qe=De.programVariants.get(nt);return qe===void 0?(qe=ii(S,B,te),De.programVariants.set(nt,qe)):(De.currentProgram=qe,De.uniformsList=null,De.outputColorSpace=ne,De.toneMapping=se),qe}function uo(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=ea.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Ds(S,B){let te=Ae.get(S);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}function rr(S,B,te,ne,se){B.isScene!==!0&&(B=F),Ie.resetTextureUnits();let De=B.fog,nt=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?B.environment:null,qe=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Bt.workingColorSpace,Pe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,je=I.get(ne.envMap||nt,Pe),vt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,It=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),st=!!te.morphAttributes.position,Ct=!!te.morphAttributes.normal,xn=!!te.morphAttributes.color,nn=As;ne.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(nn=R.toneMapping);let en=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,En=en!==void 0?en.length:0,rt=Ae.get(ne),Wn=E.state.lights;if(W===!0&&(ce===!0||S!==X)){let mt=S===X&&ne.id===H;me.setState(ne,S,mt)}let Wt=!1,Zi=!1;ne.version===rt.__version?rt.needsLights&&rt.lightsStateVersion!==Wn.state.version||se.isBatchedMesh&&rt.batching===!1||!se.isBatchedMesh&&rt.batching===!0||se.isBatchedMesh&&rt.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&rt.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&rt.instancing===!1||!se.isInstancedMesh&&rt.instancing===!0||se.isSkinnedMesh&&rt.skinning===!1||!se.isSkinnedMesh&&rt.skinning===!0||se.isInstancedMesh&&rt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&rt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&rt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&rt.instancingMorph===!1&&se.morphTexture!==null||rt.envMap!==je||ne.fog===!0&&rt.fog!==De||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==me.numPlanes||rt.numIntersection!==me.numIntersection)||rt.vertexAlphas!==vt||rt.vertexTangents!==It||rt.morphTargets!==st||rt.morphNormals!==Ct||rt.morphColors!==xn||rt.morphTargetsCount!==En||rt.numLightProbeGrids!==vs(E.state.lightProbeGridArray)?Wt=!0:(rt.outputColorSpace!==qe||rt.toneMapping!==nn)&&(Zi=!0):(Wt=!0,rt.__version=ne.version);let Xn=rt.currentProgram;(Wt===!0||Zi===!0)&&(Xn=Zi===!0?co(ne,B,se,qe,nn):ii(ne,B,se),U&&ne.isNodeMaterial&&U.onUpdateProgram(ne,Xn,rt));let ho=!1,Ei=!1,yi=!1,kt=Xn.getUniforms(),yn=rt.uniforms;if(Re.useProgram(Xn.program)&&(ho=!0,Ei=!0,yi=!0),ne.id!==H&&(H=ne.id,Ei=!0),ho||X!==S){Re.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),kt.setValue(O,"projectionMatrix",S.projectionMatrix),kt.setValue(O,"viewMatrix",S.matrixWorldInverse);let Rn=kt.map.cameraPosition;Rn!==void 0&&Rn.setValue(O,le.setFromMatrixPosition(S.matrixWorld)),yt.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&kt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,Ei=!0,yi=!0)}if(rt.needsLights&&(Wn.state.sunShadowMap.length>0&&kt.setValue(O,"sunShadowMap",Wn.state.sunShadowMap,Ie),Wn.state.directionalShadowMap.length>0&&kt.setValue(O,"directionalShadowMap",Wn.state.directionalShadowMap,Ie),Wn.state.spotShadowMap.length>0&&kt.setValue(O,"spotShadowMap",Wn.state.spotShadowMap,Ie),Wn.state.pointShadowMap.length>0&&kt.setValue(O,"pointShadowMap",Wn.state.pointShadowMap,Ie)),se.isSkinnedMesh){kt.setOptional(O,se,"bindMatrix"),kt.setOptional(O,se,"bindMatrixInverse");let mt=se.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),kt.setValue(O,"boneTexture",mt.boneTexture,Ie))}se.isBatchedMesh&&(kt.setOptional(O,se,"batchingTexture"),kt.setValue(O,"batchingTexture",se._matricesTexture,Ie),kt.setOptional(O,se,"batchingIdTexture"),kt.setValue(O,"batchingIdTexture",se._indirectTexture,Ie),kt.setOptional(O,se,"batchingColorTexture"),se._colorsTexture!==null&&kt.setValue(O,"batchingColorTexture",se._colorsTexture,Ie));let di=te.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&_e.update(se,te,Xn),(Ei||rt.receiveShadow!==se.receiveShadow)&&(rt.receiveShadow=se.receiveShadow,kt.setValue(O,"receiveShadow",se.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=gS()),Ei){if(kt.setValue(O,"toneMappingExposure",R.toneMappingExposure),rt.needsLights&&Ln(yn,yi),De&&ne.fog===!0&&Fe.refreshFogUniforms(yn,De),Fe.refreshMaterialUniforms(yn,ne,ge,ee,E.state.transmissionRenderTarget[S.id]),rt.needsLights&&rt.numLightProbeGrids>0){let mt=y,Rn=0;for(let Oi of E.state.lightProbeGridArray)Oi.texture!==null&&(mt.textures[Rn]=Oi.texture,mt.min[Rn]=Oi.boundingBox.min,mt.max[Rn]=Oi.boundingBox.max,mt.resolution[Rn]=Oi.resolution,Rn++);for(let Oi in mt)mt[Oi].length=Rn;yn.probesSH.value=mt.textures,yn.probesMin.value=mt.min,yn.probesMax.value=mt.max,yn.probesResolution.value=mt.resolution}ea.upload(O,uo(rt),yn,Ie)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ea.upload(O,uo(rt),yn,Ie),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&kt.setValue(O,"center",se.center),kt.setValue(O,"modelViewMatrix",se.modelViewMatrix),kt.setValue(O,"normalMatrix",se.normalMatrix),kt.setValue(O,"modelMatrix",se.matrixWorld),ne.uniformsGroups!==void 0){let mt=ne.uniformsGroups;for(let Rn=0,Oi=mt.length;Rn<Oi;Rn++){let fa=mt[Rn];fe.update(fa,Xn),fe.bind(fa,Xn)}}return Xn}function Ln(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Ns(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,B,te){let ne=Ae.get(S);ne.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ae.get(S.texture).__webglTexture=B,Ae.get(S.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let te=Ae.get(S);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,te=0){$=S,Q=B,J=te;let ne=null,se=!1,De=!1;if(S){let qe=Ae.get(S);if(qe.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(O.FRAMEBUFFER,qe.__webglFramebuffer),N.copy(S.viewport),q.copy(S.scissor),re=S.scissorTest,Re.viewport(N),Re.scissor(q),Re.setScissorTest(re),H=-1;return}else if(qe.__webglFramebuffer===void 0)Ie.setupRenderTarget(S);else if(qe.__hasExternalTextures)Ie.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let vt=S.depthTexture;if(qe.__boundDepthTexture!==vt){if(vt!==null&&Ae.has(vt)&&(S.width!==vt.image.width||S.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(S)}}let Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(De=!0);let je=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[B])?ne=je[B][te]:ne=je[B],se=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?ne=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?ne=je[te]:ne=je,N.copy(S.viewport),q.copy(S.scissor),re=S.scissorTest}else N.copy(Ge).multiplyScalar(ge).floor(),q.copy(et).multiplyScalar(ge).floor(),re=ue;if(te!==0&&(ne=V),Re.bindFramebuffer(O.FRAMEBUFFER,ne)&&Re.drawBuffers(S,ne),Re.viewport(N),Re.scissor(q),Re.setScissorTest(re),se){let qe=Ae.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,qe.__webglTexture,te)}else if(De){let qe=B;for(let Pe=0;Pe<S.textures.length;Pe++){let je=Ae.get(S.textures[Pe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Pe,je.__webglTexture,te,qe)}}else if(S!==null&&te!==0){let qe=Ae.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,qe.__webglTexture,te)}H=-1};function or(S){let B=Ae.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=yt.textureFormatReadable(S.format),B.__typeReadable=yt.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,te,ne,se,De,nt,qe=0){if(!(S&&S.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&nt!==void 0&&(Pe=Pe[nt],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Re.bindFramebuffer(O.FRAMEBUFFER,Pe);try{let je=S.textures[qe],vt=je.format,It=je.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+qe);let st=or(je);if(st.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-ne&&te>=0&&te<=S.height-se&&O.readPixels(B,te,ne,se,Ue.convert(vt),Ue.convert(It),De)}finally{let je=$!==null?Ae.get($).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(S,B,te,ne,se,De,nt,qe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&nt!==void 0&&(Pe=Pe[nt],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(B>=0&&B<=S.width-ne&&te>=0&&te<=S.height-se){Re.bindFramebuffer(O.FRAMEBUFFER,Pe);let je=S.textures[qe],vt=je.format,It=je.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+qe);let st=or(je);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.bufferData(O.PIXEL_PACK_BUFFER,De.byteLength,O.STREAM_READ),O.readPixels(B,te,ne,se,Ue.convert(vt),Ue.convert(It),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let xn=$!==null?Ae.get($).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,xn);let nn=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await N0(O,nn,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,De),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ct),O.deleteSync(nn),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,te=0){let ne=Math.pow(2,-te),se=Math.floor(S.image.width*ne),De=Math.floor(S.image.height*ne),nt=B!==null?B.x:0,qe=B!==null?B.y:0;Ie.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,nt,qe,se,De),Re.unbindTexture()},this.copyTextureToTexture=function(S,B,te=null,ne=null,se=0,De=0){let nt,qe,Pe,je,vt,It,st,Ct,xn,nn=S.isCompressedTexture?S.mipmaps[De]:S.image;if(te!==null)nt=te.max.x-te.min.x,qe=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,je=te.min.x,vt=te.min.y,It=te.isBox3?te.min.z:0;else{let kt=Math.pow(2,-se);nt=Math.floor(nn.width*kt),qe=Math.floor(nn.height*kt),S.isDataArrayTexture?Pe=nn.depth:S.isData3DTexture?Pe=Math.floor(nn.depth*kt):Pe=1,je=0,vt=0,It=0}ne!==null?(st=ne.x,Ct=ne.y,xn=ne.z):(st=0,Ct=0,xn=0);let en=Ue.convert(B.format),En=Ue.convert(B.type),rt;B.isData3DTexture?(Ie.setTexture3D(B,0),rt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ie.setTexture2DArray(B,0),rt=O.TEXTURE_2D_ARRAY):(Ie.setTexture2D(B,0),rt=O.TEXTURE_2D),Re.activeTexture(O.TEXTURE0),Re.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),Re.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Re.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let Wn=Re.getParameter(O.UNPACK_ROW_LENGTH),Wt=Re.getParameter(O.UNPACK_IMAGE_HEIGHT),Zi=Re.getParameter(O.UNPACK_SKIP_PIXELS),Xn=Re.getParameter(O.UNPACK_SKIP_ROWS),ho=Re.getParameter(O.UNPACK_SKIP_IMAGES);Re.pixelStorei(O.UNPACK_ROW_LENGTH,nn.width),Re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nn.height),Re.pixelStorei(O.UNPACK_SKIP_PIXELS,je),Re.pixelStorei(O.UNPACK_SKIP_ROWS,vt),Re.pixelStorei(O.UNPACK_SKIP_IMAGES,It);let Ei=S.isDataArrayTexture||S.isData3DTexture,yi=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let kt=Ae.get(S),yn=Ae.get(B),di=Ae.get(kt.__renderTarget),mt=Ae.get(yn.__renderTarget);Re.bindFramebuffer(O.READ_FRAMEBUFFER,di.__webglFramebuffer),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Rn=0;Rn<Pe;Rn++)Ei&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,se,It+Rn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.get(B).__webglTexture,De,xn+Rn)),O.blitFramebuffer(je,vt,je+nt,vt+qe,st,Ct,st+nt,Ct+qe,O.DEPTH_BUFFER_BIT,O.NEAREST);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(se!==0||S.isRenderTargetTexture||Ae.has(S)){let kt=Ae.get(S),yn=Ae.get(B);Re.bindFramebuffer(O.READ_FRAMEBUFFER,P),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let di=0;di<Pe;di++)Ei?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,se,It+di):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kt.__webglTexture,se),yi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yn.__webglTexture,De,xn+di):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yn.__webglTexture,De),se!==0?O.blitFramebuffer(je,vt,je+nt,vt+qe,st,Ct,st+nt,Ct+qe,O.COLOR_BUFFER_BIT,O.NEAREST):yi?O.copyTexSubImage3D(rt,De,st,Ct,xn+di,je,vt,nt,qe):O.copyTexSubImage2D(rt,De,st,Ct,je,vt,nt,qe);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yi?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(rt,De,st,Ct,xn,nt,qe,Pe,en,En,nn.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(rt,De,st,Ct,xn,nt,qe,Pe,en,nn.data):O.texSubImage3D(rt,De,st,Ct,xn,nt,qe,Pe,en,En,nn):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,De,st,Ct,nt,qe,en,En,nn.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,De,st,Ct,nn.width,nn.height,en,nn.data):O.texSubImage2D(O.TEXTURE_2D,De,st,Ct,nt,qe,en,En,nn);Re.pixelStorei(O.UNPACK_ROW_LENGTH,Wn),Re.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt),Re.pixelStorei(O.UNPACK_SKIP_PIXELS,Zi),Re.pixelStorei(O.UNPACK_SKIP_ROWS,Xn),Re.pixelStorei(O.UNPACK_SKIP_IMAGES,ho),De===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(rt),Re.unbindTexture()},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),Re.unbindTexture()},this.resetState=function(){Q=0,J=0,$=null,Re.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}};var Mm={type:"change"},rf={type:"start"},wm={type:"end"},Ku=new Xs,Sm=new fi,xS=Math.cos(70*Mr.DEG2RAD),Un=new C,_i=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sf=1e-6,Zu=class extends rl{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:yr.ROTATE,TWO:yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new pn,this._lastTargetPosition=new C,this._quat=new pn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ko,this._sphericalDelta=new Ko,this._scale=1,this._panOffset=new C,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new C,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vS.bind(this),this._onPointerDown=yS.bind(this),this._onPointerUp=_S.bind(this),this._onContextMenu=AS.bind(this),this._onMouseWheel=SS.bind(this),this._onKeyDown=wS.bind(this),this._onTouchStart=ES.bind(this),this._onTouchMove=TS.bind(this),this._onMouseDown=bS.bind(this),this._onMouseMove=MS.bind(this),this._interceptControlDown=RS.bind(this),this._interceptControlUp=CS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mm),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Un.copy(t).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=_i:i>Math.PI&&(i-=_i),s<-Math.PI?s+=_i:s>Math.PI&&(s-=_i),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),t.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Un.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ku.origin.copy(this.object.position),Ku.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ku.direction))<xS?this.object.lookAt(this.target):(Sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ku.intersectPlane(Sm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sf||this._lastTargetPosition.distanceToSquared(this.target)>sf?(this.dispatchEvent(Mm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_i/60*this.autoRotateSpeed*e:_i/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Un.setFromMatrixColumn(t,0),Un.multiplyScalar(-e),this._panOffset.add(Un)}_panUp(e,t){this.screenSpacePanning===!0?Un.setFromMatrixColumn(t,1):(Un.setFromMatrixColumn(t,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(e),this._panOffset.add(Un)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Un.copy(s).sub(this.target);let r=Un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/t.clientHeight),this._rotateUp(_i*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function yS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _S(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wm),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=jt.DOLLY;break;case xr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}break;case xr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(rf)}function MS(n){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function SS(n){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(n.preventDefault(),this.dispatchEvent(rf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(wm))}function wS(n){this.enabled!==!1&&this._handleKeyDown(n)}function ES(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yr.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(n),this.state=jt.TOUCH_ROTATE;break;case yr.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(n),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=jt.TOUCH_DOLLY_PAN;break;case yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(rf)}function TS(n){switch(this._trackPointer(n),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=jt.NONE}}function AS(n){this.enabled!==!1&&n.preventDefault()}function RS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yl=new C;function zi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;yl.copy(e),yl[i]=0,yl.normalize();let c=.5*o/(o+a),u=1-yl.angleTo(n)/l;return Math.sign(yl[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Ju=class n extends Gt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,u=new C(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new C,m=.5/o;for(let g=0,b=0;g<d.length;g+=3,b+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[b+0]=zi(x,c,"z","y",r,i),f[b+1]=1-zi(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[b+0]=1-zi(x,c,"z","y",r,i),f[b+1]=1-zi(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[b+0]=1-zi(x,c,"x","z",r,e),f[b+1]=zi(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),f[b+0]=1-zi(x,c,"x","z",r,e),f[b+1]=1-zi(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),f[b+0]=1-zi(x,c,"x","y",r,e),f[b+1]=1-zi(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[b+0]=zi(x,c,"x","y",r,e),f[b+1]=1-zi(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Tm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ht;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Em(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let p=Em(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Em(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new oi(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let x=u.getComponent(h,p);a.setComponent(h+d,p,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var PS=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function IS(n,e){return PS(n,e)}function Ot(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=IS(n,e),a=o.getContext("2d"),l=new Ga(o);i&&(l.colorSpace=Jn),l.anisotropy=r,s&&(l.wrapS=Gs,l.wrapT=Gs,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Vt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Ft='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Dt=Math.PI*2,Hi=Math.PI/180,ot=(n,e,t)=>n<e?e:n>t?t:n,Pi=(n,e,t)=>n+(e-n)*t,of=n=>{let e=ot(n,0,1);return e*e*(3-2*e)},Gi=n=>{let e=ot(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Kt=(n,e,t,i)=>Pi(n,e,1-Math.exp(-t*i));function Lm(n,e,t){let i=(e-n)%Dt;return i>Math.PI&&(i-=Dt),i<-Math.PI&&(i+=Dt),n+i*t}function af(n,e){let t=(e-n)%Dt;return t>Math.PI&&(t-=Dt),t<-Math.PI&&(t+=Dt),t}var Am=new bt,Rm=new pn,Cm=new Qn,Pm=new C,Im=new C;function L(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return Cm.set(t[0],t[1],t[2]),Rm.setFromEuler(Cm),Pm.set(e[0],e[1],e[2]),Im.set(i[0],i[1],i[2]),Am.compose(Pm,Rm,Im),n.applyMatrix4(Am),n}var Le=(n,e,t,i=.02,s=2)=>new Ju(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Te=(n,e,t)=>new Gt(n,e,t),ae=(n,e,t,i=32,s=!1)=>new Nn(n,e,t,i,1,s),Vi=(n,e=24,t=16)=>new An(n,e,t),on=(n,e,t=12,i=48,s=Dt)=>new gi(n,e,t,i,s),Ii=(n,e=48)=>new ja(n.map(([t,i])=>new Me(t,i)),e);function ia(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Dt;o.push(L(ae(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function lf(n,e,t,i,s=.02){let r=new ns,o=Dt/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,f]=u[d],p=Math.cos(f)*h,x=Math.sin(f)*h;l===0&&d===0?r.moveTo(p,x):r.lineTo(p,x)}}if(r.closePath(),s>0){let l=new $s;l.absarc(0,0,s,0,Dt,!0),r.holes.push(l)}let a=new ws(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function ti(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new C(l[0],l[1],l[2])),r=new Wo,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),f=Math.min(t,d.length()/2,h.length()/2),p=c.clone().sub(d.normalize().multiplyScalar(f)),x=c.clone().add(h.normalize().multiplyScalar(f));p.distanceTo(o)>1e-5&&r.add(new Hr(o.clone(),p)),r.add(new Gr(p,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new Hr(o.clone(),c.clone()))}let a=r.getLength();return new Qa(r,Math.max(16,Math.round(a*40)),e,i,!1)}var lt=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Yt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Tm(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new it(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ye(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new it(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Tt(n,e,t){let i=new Yt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var ju=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new C(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new C){let i=ot(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function Dm(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Ut(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let p=0;p<=a;p++){let x=p/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),b=Math.sin(m),v=n+t*g,y=e-t*b,w=l?-g:g,E=l?b:-b;c.push(v,r,y,v,o,y),u.push(w,0,E,w,0,E),d.push(x,0,x,1)}for(let p=0;p<a;p++){let x=p*2;h.push(x,x+2,x+3,x,x+3,x+1)}let f=new Ht;return f.setAttribute("position",new dt(c,3)),f.setAttribute("normal",new dt(u,3)),f.setAttribute("uv",new dt(d,2)),f.setIndex(h),f}function os(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let f=0;f<u;f++){let p=n[f],x=n[(f+1)%c],m=x[0]-p[0],g=x[1]-p[1],b=Math.hypot(m,g);if(b<1e-6)continue;let v=g/b,y=-m/b,w=!1;s&&!s((p[0]+x[0])/2,(p[1]+x[1])/2,v,y)&&(v=-v,y=-y,w=!0);let E=r.length/3;r.push(p[0],e,p[1],p[0],t,p[1],x[0],e,x[1],x[0],t,x[1]);for(let _=0;_<4;_++)o.push(v,0,y);a.push(d,0,d,1,d+b,0,d+b,1),d+=b,w?l.push(E,E+2,E+3,E,E+3,E+1):l.push(E,E+1,E+3,E,E+3,E+2)}let h=new Ht;return h.setAttribute("position",new dt(r,3)),h.setAttribute("normal",new dt(o,3)),h.setAttribute("uv",new dt(a,2)),h.setIndex(l),h}function Nm(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function LS(){let n=Nm(7);return Ot(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function DS(){let n=Nm(23);return Ot(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Dt),e.stroke()},{anisotropy:8})}function NS(){return Ot(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function OS(){return Ot(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function FS(){return Ot(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var Mn=n=>new gt(n);function Qs({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=Es,emissive:a=0,emissiveIntensity:l=0}={}){let c=new gt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Jo,c.blendSrc=vr,c.blendDst=_r,c.blendSrcAlpha=vr,c.blendDstAlpha=_r,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function Om(n="high"){let e={brushed:LS().tex,wafer:DS().tex,radial:NS().tex,hazard:OS().tex,grille:FS().tex};return{M:{alu:Mn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:Mn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:Mn({color:14936044,metalness:1,roughness:.08}),steel:Mn({color:11646654,metalness:1,roughness:.28}),darkSteel:Mn({color:6251886,metalness:1,roughness:.34}),brass:Mn({color:13876630,metalness:1,roughness:.3}),copper:Mn({color:12946278,metalness:1,roughness:.3}),gold:Mn({color:15320959,metalness:1,roughness:.22}),white:Mn({color:15856630,metalness:0,roughness:.32}),graphite:Mn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:Mn({color:5073918,metalness:.2,roughness:.35}),orange:Mn({color:13137466,metalness:.3,roughness:.36}),rubber:Mn({color:1382171,metalness:0,roughness:.8}),plastic:Mn({color:2303532,metalness:0,roughness:.45}),ceramic:Mn({color:15001579,metalness:0,roughness:.42}),grille:Mn({map:e.grille,metalness:.6,roughness:.45}),hazard:Mn({map:e.hazard,metalness:.2,roughness:.55}),glass:Qs({color:14674421,opacity:.08,fresnel:.55}),smoke:Qs({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:Jt}),fuel:Mn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:Mn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:Mn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:Mn({color:13949150,metalness:0,roughness:.25}),wall:Mn({color:15133166,metalness:0,roughness:.5}),shadow:new Xt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new Ys({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:Mn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function qt(n,e=0){let t=new Be(n);return new gt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function vl(n,e=1.25){return new gt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function kn(n,e=.55){return new gt({map:n,metalness:e,roughness:.42})}var Jr=Math.PI/180,Xe={cx:.5,cz:-1,r:22,h:13.5},Wi={panes:24,finDepth:.36,doorA0:263*Jr,doorA1:277*Jr,doorH:3.1},Sr={a0:236*Jr,a1:304*Jr,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},Xi={r:22.35,groundY:-420},Zn={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Jr,targetR:17,targetYMin:.4,targetYMax:12},Rt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},ed=.45,jr=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],tt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Jr,a1:142*Jr,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},cf=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function Er(n,e,t=0,i=new C){return i.set(Xe.cx+e*Math.cos(n),t,Xe.cz-e*Math.sin(n))}var uf=Math.PI*2,Qu=(n,e,t)=>Math.min(t,Math.max(e,n)),Fm=(n,e)=>{let t=Math.abs(n-e)%uf;return t>Math.PI?uf-t:t};function df(n,e){let t=Math.atan2(-(e-Xe.cz),n-Xe.cx);return t<0?t+uf:t}function wr(n){let e=Zn,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=df(n.x,n.z);return i<=e.outerR+t?s>=Wi.doorA0+e.edge-t&&s<=Wi.doorA1-e.edge+t&&n.y<=Wi.doorH-.25+t?"door":null:s>=Sr.a0+e.edge-t&&s<=Sr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function Um(n,e,t){let i=n.x-Xe.cx,s=n.z-Xe.cz,r=Math.hypot(i,s),o=Qu(r,e,t);r>1e-9&&o!==r&&(n.x=Xe.cx+i*o/r,n.z=Xe.cz+s*o/r)}function km(n,e,t){let i=df(n.x,n.z);if(i>=e&&i<=t)return;let s=Fm(i,e)<Fm(i,t)?e:t,r=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);n.x=Xe.cx+r*Math.cos(s),n.z=Xe.cz-r*Math.sin(s)}function hf(n,e=null){if(wr(n))return n;let t=Zn,i=e?wr(e):null;if(!i){let s=Math.hypot(n.x-Xe.cx,n.z-Xe.cz),r=df(n.x,n.z);i=s>Xe.r&&r>=Sr.a0&&r<=Sr.a1?"balcony":"hall"}if(i==="door"){if(km(n,Wi.doorA0+t.edge,Wi.doorA1-t.edge),n.y=Qu(n.y,t.yMin,Wi.doorH-.25),wr(n))return n;i=Math.hypot(e.x-Xe.cx,e.z-Xe.cz)>Xe.r?"balcony":"hall"}return i==="balcony"?(km(n,Sr.a0+t.edge,Sr.a1-t.edge),Um(n,t.outerR+.001,t.balconyR),n.y=Qu(n.y,t.yMin,t.balconyYMax)):(Um(n,0,t.r),n.y=Qu(n.y,t.yMin,t.yMax)),n}function td(){let n=tt.screenR,e=cf.reduce((i,s)=>i+s.w,0)+tt.gap*(cf.length-1),t=Math.PI/2+e/n/2;return cf.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-tt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:tt.screenY-a/2,y1:tt.screenY+a/2}})}function US(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function kS(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function BS(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?US(e,t,n.a,n.b,n.r):kS(e,t,n.c,n.h)}function zm(n,e,t=jr){let i=1/0;for(let s of t)i=Math.min(i,BS(s,n,e));return i}function Hm(n,e){let t=Math.abs(n-Rt.cx)-Rt.hx+Rt.r,i=Math.abs(e-Rt.cz)-Rt.hz+Rt.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Rt.r}var In=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function Bm(n){return n.type==="circle"?`length(p - vec2(${In(n.c[0])}, ${In(n.c[1])})) - ${In(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${In(n.a[0])}, ${In(n.a[1])}), vec2(${In(n.b[0])}, ${In(n.b[1])}), ${In(n.r)})`:`lSdBox(p, vec2(${In(n.c[0])}, ${In(n.c[1])}), vec2(${In(n.h[0])}, ${In(n.h[1])}))`}function Gm(){let n=jr.find(t=>t.id==="cell");return`
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
${jr.map((t,i)=>i===0?`  float d = ${Bm(t)};`:`  d = min(d, ${Bm(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${In(Rt.cx)}, ${In(Rt.cz)})) - vec2(${In(Rt.hx-Rt.r)}, ${In(Rt.hz-Rt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${In(Rt.r)};
}
const vec2 HUB_C = vec2(${In(n.c[0])}, ${In(n.c[1])});
const float HUB_R = ${In(n.r)};
`}function Vm(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Rt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,f)=>{let p=Math.max(1,Math.ceil(Math.hypot(h-u,f-d)/n));for(let x=0;x<p;x++)o.push([u+(h-u)*x/p,d+(f-d)*x/p])};for(let u=0;u<4;u++){let[d,h,f]=a[u];for(let w=0;w<l;w++){let E=f+Math.PI/2*w/l;o.push([d+r*Math.cos(E),h+r*Math.sin(E)])}let[p,x,m]=a[(u+1)%4],g=d+r*Math.cos(f+Math.PI/2),b=h+r*Math.sin(f+Math.PI/2),v=p+r*Math.cos(m),y=x+r*Math.sin(m);c(g,b,v,y)}return o}var _l=Math.PI/180;function zS(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Li(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function Wm(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function HS(n,e){return(n/(2*Math.PI)+.5)*e}function bl(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,Li(r,o)),a.addColorStop(.45,Li(r,o*.42)),a.addColorStop(1,Li(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function GS(n,e,t,i){let s=i.sky,r=e/360,o=v=>(.5-v/180)*t,a=(v,y)=>{y(v-e),y(v),y(v+e)},l=zS(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[v,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(v)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=HS(Math.atan2(d[2],d[0]),e),f=o(Math.asin(d[1])/_l);if(a(h,v=>{bl(n,v,o(3),100*r,16*r,s.sunGlow,.55),bl(n,v,f,60*r,60*r,s.sunGlow,.42),bl(n,v,f,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,v=>bl(n,v,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let v=0;v<54;v++){let y=3+24*Math.pow(l(),1.6),w=l()*e,E=(8+42*l())*r,_=(.35+1.4*l())*r,M=Math.abs(w-h)%e;M=Math.min(M,e-M)/e;let A=Math.max(0,1-M/.28),R=Wm(s.cloudDark,s.cloudLit,A),D=s.clouds*(.18+.32*l())*(.6+.4*A);a(w,U=>bl(n,U,o(y),E,_,R,D))}n.filter="none"}if(s.stars>0)for(let v=0;v<760;v++){let y=Math.sin(16*_l)+l()*(1-Math.sin(16*_l)),w=Math.asin(y)/_l,E=Math.min(1,Math.max(0,(w-16)/26)),_=s.stars*E*(.25+.7*l()*l());if(_<.03)continue;let M=.7+l()*1.1,A=1/Math.max(.12,Math.cos(w*_l));n.fillStyle=l()<.2?Li("#bcd2ff",_):Li("#ffffff",_),n.fillRect(l()*e,o(w),M*A,M)}let p=s.far,x=Wm(p.body,p.haze,.55),m=0;for(;m<e;){let v=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,w=o(y),E=o(-2.5);if(n.fillStyle=x,n.fillRect(m,w,v,E-w),y>2.1&&l()<.6&&n.fillRect(m+v/2-.5,w-3-l()*5,1,4+l()*5),p.windows>0){let _=Math.floor((E-w)*v*.05*p.windows);for(let M=0;M<_;M++){let A=l(),R=A<.62?"#ffc078":A<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=Li(R,(.25+.4*l())*Math.min(1,p.windows*1.4)),n.fillRect(m+Math.floor(l()*v),w+Math.floor(l()*(E-w)),1,1)}}p.neon>0&&l()<.04&&(n.fillStyle=Li(l()<.7?"#46e6ff":"#ffb347",.45*p.neon),n.fillRect(m,w-1,v,1)),m+=v+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,Li(p.haze,0)),g.addColorStop(.45,Li(p.haze,.38)),g.addColorStop(1,Li(p.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let v=Math.round(9e3*s.lights);for(let y=0;y<v;y++){let w=Math.pow(l(),1.3),E=-.3-3.9*w,_=l(),M=_<.6?"#ffb46a":_<.82?"#ffe2b0":_<.93?"#ffffff":"#55dcff";n.fillStyle=Li(M,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*w)),n.fillRect(l()*e,o(E),1,1)}}let b=n.createLinearGradient(0,o(.6),0,o(-4.4));b.addColorStop(0,Li(s.groundHaze,.1)),b.addColorStop(1,Li(s.groundHaze,.9)),n.fillStyle=b,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var VS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,WS=`
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
`;function XS(n,e){let t=new zr;t.background=new Be(n.clear);let i=new it(new An(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Xt({side:Jt,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let f=new it(u,d);return f.position.set(h[0],h[1],h[2]),t.add(f),f},a=Xe.cx,l=Xe.cz;o(new bn(6.4,Xe.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,Xe.h,l]),o(new gi(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,Xe.h-.25,l]),o(new Tn(Xe.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new bn(Xe.r-.6,Xe.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,Xe.h-.55,l]),o(Ut(a,l,Xe.r-.6,0,Math.PI*2,Xe.h-.55,Xe.h,64,!0),r(s.column,.85)),o(Ut(a,l,tt.r,tt.a0,tt.a1,tt.bandY0,tt.bandY1,32,!0),r(s.media,1)),o(Ut(a,l,tt.r,tt.a0,tt.a1,tt.bandY1,tt.top,32,!0),r(s.column,.85)),o(Ut(a,l,tt.r-.3,tt.a0,tt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of td())o(Ut(a,l,tt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function qS(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function Xm(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=Ot(i,s,null,{anisotropy:1});r.tex.wrapS=Gs,r.tex.generateMipmaps=!1,r.tex.minFilter=_n,r.tex.magFilter=_n;let o=new rn({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new Be(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:VS,fragmentShader:WS,side:ei,depthTest:!1,depthWrite:!1,fog:!1}),a=new it(new An(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=XS(c,o),f=new ta(n),p=f.fromScene(h,.035,.1,400,{size:256,position:new C(Xe.cx,1.6,Xe.cz)});f.dispose(),qS(h,o),l&&l.dispose(),l=p}function d(h){c=h,r.redraw((f,p,x)=>GS(f,p,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var cn=1,$S=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,YS=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,KS=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,ZS=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function qm(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new jn(16,16,{type:xi,generateMipmaps:!0,minFilter:is,magFilter:_n,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new bt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new $n;o.layers.set(0);let a=new C(0,1,0),l=new C(0,0,0),c=new C,u=new bt,d=new C,h=new C,f=new C,p=new fi,x=new un,m=new un,g=new Me,b=0;function v(w){w.uniforms.tReflect=r.tReflect,w.uniforms.uReflMatrix=r.uReflMatrix,w.uniforms.uReflStrength=r.uReflStrength,w.uniforms.uReflBlur=r.uReflBlur,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${$S}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${YS}`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${KS}`).replace("#include <opaque_fragment>",`${ZS}
#include <opaque_fragment>`)}function y(w,E){if(!n)return!1;n.getDrawingBufferSize(g);let _=Math.max(16,Math.round(g.x*e)),M=Math.max(16,Math.round(g.y*e));if((s.width!==_||s.height!==M)&&s.setSize(_,M),c.setFromMatrixPosition(E.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(E.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),f.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(f),o.far=E.far,o.updateMatrixWorld(),o.projectionMatrix.copy(E.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let A=r.uReflMatrix.value;A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(o.projectionMatrix),A.multiply(o.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(a,l),p.applyMatrix4(o.matrixWorldInverse),x.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let R=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+R[8])/R[0],m.y=(Math.sign(x.y)+R[9])/R[5],m.z=-1,m.w=(1+R[10])/R[14],x.multiplyScalar(2/x.dot(m)),R[2]=x.x,R[6]=x.y,R[10]=x.z+1-b,R[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let D=n.getRenderTarget(),U=n.autoClear,V=n.shadowMap.autoUpdate,P=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(w,o),n.autoClear=U,n.shadowMap.autoUpdate=V,n.shadowMap.needsUpdate=P,n.setRenderTarget(D),!0}return{uniforms:r,inject:v,update:y,setStrength(w){r.uReflStrength.value=w},dispose(){s.dispose()}}}var bi=Math.PI*2,mf=Gm();function nd(n,e,t){let i=new Xt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var gf=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function Ym(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function JS(n){let e=new gt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{Ym(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${gf}
${mf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function jS(n){let e=new gt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{Ym(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${gf}
${mf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var QS=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,ew=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${gf}
${mf}
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
}`,tw=`
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
}`,nw=`
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
}`;function iw(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(bi*o/t));for(let l=0;l<a;l++){let c=l/a*bi;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,f=n.r+e,p=Math.max(16,Math.ceil(Math.PI*f/t)),x=(g,b)=>{for(let v=0;v<=p;v++){let y=b-Math.PI*v/p;i.push([g[0]+f*(Math.cos(y)*c+Math.sin(y)*d),g[1]+f*(Math.cos(y)*u+Math.sin(y)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,b)=>{let v=ot(((g-n.a[0])*c+(b-n.a[1])*u)/l,0,1);return[n.a[0]+o*v,n.a[1]+a*v]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function ff(n,e,t,i){let{pts:s,center:r}=iw(n,e);return os(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function $m(n,e){let t=Rt.hx-Rt.r,i=Rt.hz-Rt.r;return n.map(([s,r])=>{let o=Rt.cx+ot(s-Rt.cx,-t,t),a=Rt.cz+ot(r-Rt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var pf=(n,e,t,i)=>(Rt.cx-n)*t+(Rt.cz-e)*i>0;function sw(n){let e=jr.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function rw(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of jr)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Rt.cx-Rt.hx),e=Math.min(e,Rt.cx+Rt.hx),t=Math.max(t,Rt.cz-Rt.hz),i=Math.min(i,Rt.cz+Rt.hz),{x0:n,x1:e,z0:t,z1:i}}function ow(n,e,t,i=6){let s=new C().subVectors(e,n),r=s.length(),o=new Nn(t,t,r,i,1,!0);return o.applyQuaternion(new pn().setFromUnitVectors(new C(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function aw({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=Xe,l=Sr,c=l.a1-l.a0,u=(M,A)=>[r+A*Math.cos(M),o-A*Math.sin(M)],d=new it(L(new bn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(cn),n.add("white",L(new bn(a+.2,Xi.r,160,1,l.a1,bi-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Ut(r,o,Xi.r,l.a1,l.a0+bi,-.45,0,160,!1)),e.add("glowCyan",Ut(r,o,Xi.r+.004,l.a1,l.a0+bi,-.24,-.21,160,!1)),e.add("white",Ut(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Ut(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Ut(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let M of[l.a0,l.a1])e.add("white",L(Te(l.r1-Xi.r,l.slab,.04),s(M,(Xi.r+l.r1)/2,-l.slab/2),[0,M,0]));let h=l.r1-.06,f=a+.05,p=[];for(let M=0;M<=4;M++)p.push(u(l.a0,f+(h-f)*M/4));let x=Math.ceil(c*h/.45);for(let M=1;M<=x;M++)p.push(u(l.a0+c*M/x,h));for(let M=3;M>=0;M--)p.push(u(l.a1,f+(h-f)*M/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(M,A,R,D)=>(m[0]-M)*R+(m[1]-A)*D>0,b=(M,A,R,D)=>!g(M,A,R,D);t.add("rail",os(p,.045,l.rail)),n.add("chrome",ti(p.map(([M,A])=>[M,l.rail+.026,A]),.026,.1,8)),n.add("silver",os(p,0,.045,{facing:b})),n.add("glowCyan",os(p,0,.04,{facing:g}));for(let M=0;M<p.length;M+=5)n.add("chrome",L(ae(.018,.018,l.rail,8),[p[M][0],l.rail/2,p[M][1]]));let v=l.canopyY,y=a+.02,w=l.r1+.35;n.add("white",L(new bn(y,w,96,1,l.a0,c),[r,v+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",L(new bn(y,w,96,1,-l.a1,c),[r,v,o],[Math.PI/2,0,0])),n.add("glowCyan",L(new bn(w-.13,w-.09,96,1,-l.a1,c),[r,v-.003,o],[Math.PI/2,0,0])),n.add("silver",Ut(r,o,w,l.a0,l.a1,v,v+.14,72,!1)),n.add("silver",Ut(r,o,w-.002,l.a0,l.a1,v,v+.14,72,!0));for(let M of[l.a0,l.a1])n.add("silver",L(Te(w-y,.14,.04),s(M,(y+w)/2,v+.07),[0,M,0]));for(let[M,A]of[[23.3,17],[25.2,19]])for(let R=0;R<A;R++){let D=l.a0+(R+.5)*c/A;n.add("glowWhite",L(new Tn(.085,16),s(D,M,v-.003),[Math.PI/2,0,0])),n.add("chrome",L(new bn(.085,.11,16,1),s(D,M,v-.002),[Math.PI/2,0,0]))}let E=new C,_=new C;for(let M=0;M<6;M++){let A=l.a0+(M+.5)*c/6;Er(A,w-.15,v+.14,E),Er(A,a+.03,v+3.4,_),n.add("silver",ow(E,_,.014)),n.add("chrome",L(ae(.05,.05,.03,14),_.toArray(),[0,A,Math.PI/2]))}for(let M of[250,290]){let A=M*Math.PI/180;n.add("white",L(Le(.5,.34,2.4,.05,3),s(A,23.4,.27),[0,A,0])),n.add("dark",L(Te(.32,.1,2.1),s(A,23.4,.05),[0,A,0])),n.add("glowCyan",L(Te(.33,.012,2.11),s(A,23.4,.094),[0,A,0]))}return{floor:d}}function Km(n,{reflection:e=null}={}){let t=new Yt;t.name="atrium";let{cx:i,cz:s,r,h:o}=Xe,a={white:new gt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new gt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new gt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new gt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new gt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:nd(4641535,3,"atrium-glow-cyan"),glowBlue:nd(5213695,2.2,"atrium-glow-blue"),glowWhite:nd(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=nd(16777215,5,"atrium-ring-light"),u=Qs({color:13623538,opacity:.045,fresnel:.5,side:Jt}),d=Qs({color:14083830,opacity:.1,fresnel:.6,side:Jt}),h=Qs({color:14214901,opacity:.08,fresnel:.5,side:Jt}),f=Qs({color:13623538,opacity:.04,fresnel:.4}),p=new lt,x=new lt,m=new lt,g=new C,b=(Ee,Ae,Ie)=>Er(Ee,Ae,Ie,g).toArray(),{doorA0:v,doorA1:y,doorH:w}=Wi,E=w+.12,_=bi/Wi.panes,M=.006/r,A=Ee=>Ee>v+1e-6&&Ee<y-1e-6;for(let Ee=0;Ee<Wi.panes;Ee++){let Ae=Ee*_+M,Ie=(Ee+1)*_-M,I=[Ae];for(let T of[v,y])T>Ae&&T<Ie&&I.push(T);I.push(Ie);for(let T=0;T+1<I.length;T++){let Y=I[T],Se=I[T+1],ye=A((Y+Se)/2)?E:.05,Fe=Math.max(2,Math.ceil((Se-Y)/_*16));m.add("glass",Ut(i,s,r,Y,Se,ye,o,Fe,!0))}}let R=Wi.finDepth,D=o-.55,U=r-R/2-.004;for(let Ee=0;Ee<Wi.panes;Ee++){let Ae=Ee*_;if(!A(Ae)){m.add("fin",L(Te(R,D,.022),b(Ae,U,D/2),[0,Ae,0])),p.add("silver",L(Te(R+.04,.06,.05),b(Ae,U,.03),[0,Ae,0])),p.add("silver",L(Te(R+.04,.06,.05),b(Ae,U,D-.03),[0,Ae,0]));for(let Ie of[1.1,4.7,8.3,11.9]){p.add("chrome",L(Te(.025,.09,.17),b(Ae,r-.0175,Ie),[0,Ae,0])),p.add("chrome",L(Te(.09,.09,.045),b(Ae,r-.075,Ie),[0,Ae,0]));for(let I of[-1,1])p.add("chrome",L(ae(.022,.022,.018,14),b(Ae+I*(.055/r),r-.039,Ie),[0,Ae,Math.PI/2]))}}}let V=o-.55;p.add("white",Ut(i,s,r-.6,0,bi,V,o,160,!0)),p.add("satin",L(new bn(r-.6,r-.01,160,1),[i,V,s],[Math.PI/2,0,0])),p.add("glowWhite",L(new bn(r-.16,r-.1,160,1),[i,V-.004,s],[Math.PI/2,0,0])),p.add("glowCyan",Ut(i,s,r-.605,0,bi,V+.02,V+.05,160,!0));let P=y,Z=bi-(y-v);p.add("glowCyan",L(new bn(r-.17,r-.13,160,1,P,Z),[i,.003,s],[-Math.PI/2,0,0])),p.add("silver",Ut(i,s,r-.03,P,P+Z,0,.05,160,!0));for(let Ee of[v,y])p.add("silver",L(Te(.14,E,.06),b(Ee,r-.03,E/2),[0,Ee,0]));let Q=y-v;p.add("silver",Ut(i,s,r-.06,v,y,w,E,16,!0)),p.add("silver",Ut(i,s,r+.04,v,y,w,E,16,!1)),p.add("silver",L(new bn(r-.06,r+.04,16,1,-y,Q),[i,w,s],[Math.PI/2,0,0])),p.add("glowWhite",L(new bn(r-.025,r+.005,16,1,-y,Q),[i,w-.002,s],[Math.PI/2,0,0])),p.add("silver",L(new bn(r-.22,r+.24,16,1,v,Q),[i,.003,s],[-Math.PI/2,0,0]));let J=Q/2,$=r-.09;for(let[Ee,Ae,Ie]of[[v-J,v,.9],[y,y+J,.1]]){m.add("fin",Ut(i,s,$,Ee+.03/$,Ae-.03/$,.06,w-.06,12,!0)),p.add("silver",Ut(i,s,$-.02,Ee,Ae,0,.06,12,!0)),p.add("silver",Ut(i,s,$-.02,Ee,Ae,w-.06,w,12,!0));for(let I of[Ee,Ae])p.add("silver",L(Te(.05,w,.05),b(I,$,w/2),[0,I,0]));p.add("chrome",L(ae(.012,.012,1.1,8),b(Ee+(Ae-Ee)*Ie,$-.05,1.05)))}p.add("silver",Ut(i,s,$-.035,v-J,y+J,w,w+.08,24,!0)),p.add("ceiling",L(new bn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let Ee=0;Ee<16;Ee++){let Ae=Ee/16*bi,Ie=(r+6.4)/2;p.add("white",L(Te(r-6.4,.34,.3),[i+Ie*Math.cos(Ae),o-.17,s-Ie*Math.sin(Ae)],[0,Ae,0]))}for(let Ee of[9,16.5])p.add("white",Ut(i,s,Ee,0,bi,o-.34,o,160,!0)),p.add("white",Ut(i,s,Ee+.3,0,bi,o-.34,o,160,!1)),p.add("white",L(new bn(Ee,Ee+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let Ee of[11.15,11.85])p.add("satin",Ut(i,s,Ee,0,bi,o-.24,o,160,!0)),p.add("satin",Ut(i,s,Ee,0,bi,o-.24,o,160,!1));let H=new it(L(on(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);H.name="ring-light",H.position.set(i,o-.15,s),t.add(H),p.add("chrome",L(on(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let Ee=0;Ee<4;Ee++)p.add("silver",L(Te(12.8,.12,.12),[i,o+.03,s],[0,Ee*Math.PI/4,0]));let X=new it(L(new Tn(6.4,96),[0,0,0],[Math.PI/2,0,0]),f);X.name="skylight",X.position.set(i,o+.06,s),t.add(X);let{a0:N,a1:q}=tt,re=tt.moduleR-.36;p.add("dark",Ut(i,s,tt.r,N,q,tt.bandY0,tt.bandY1,72,!0)),p.add("white",Ut(i,s,tt.r,N,q,tt.bandY1,tt.top,72,!0)),p.add("white",Ut(i,s,tt.r,N,q,2.3,tt.bandY0,72,!0)),p.add("satin",Ut(i,s,tt.r,N,q,0,2.3,72,!0)),p.add("white",Ut(i,s,tt.back,N,q,0,tt.top,72,!1)),p.add("white",L(new bn(tt.r,tt.back,72,1,N,q-N),[i,tt.top,s],[-Math.PI/2,0,0])),p.add("white",L(new bn(re,tt.r,72,1,N,q-N),[i,2.3,s],[-Math.PI/2,0,0])),p.add("white",Ut(i,s,re,N,q,2.22,2.3,72,!0)),p.add("glowBlue",Ut(i,s,re-.004,N,q,2.245,2.265,72,!0)),p.add("glowCyan",Ut(i,s,tt.r-.012,N,q,7.1,7.14,72,!0)),p.add("glowCyan",Ut(i,s,tt.r-.012,N,q,2.64,2.68,72,!0));let j=tt.back-re+.04,he=(tt.back+re)/2;for(let[Ee,Ae]of[[N-.07/he,-1],[q+.07/he,1]]){p.add("white",L(Te(j,tt.top,.14),[i+he*Math.cos(Ee),tt.top/2,s-he*Math.sin(Ee)],[0,Ee,0]));let Ie=Ee-Ae*(.075/re);p.add("glowCyan",L(Te(.04,tt.top-.4,.03),[i+(re+.02)*Math.cos(Ie),tt.top/2,s-(re+.02)*Math.sin(Ie)],[0,Ee,0]))}let ve=24,ee=new Dn(new Gt(.62,2.22,.78),a.white,ve);ee.name="compute-modules";let ge=new Me(.7,2.08),Ne=new xt(ge.x,ge.y),at=new rn({name:"module-doors",vertexShader:tw,fragmentShader:nw,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:ge}}}),Ge=new Dn(Ne,at,ve);Ge.name="module-doors";let et=new Float32Array(ve),ue=new an;for(let Ee=0;Ee<ve;Ee++){let Ae=N+(Ee+.5)*(q-N)/ve;Er(Ae,tt.moduleR,1.11,ue.position),ue.rotation.set(0,Ae,0),ue.updateMatrix(),ee.setMatrixAt(Ee,ue.matrix),Er(Ae,tt.moduleR-.316,1.11,ue.position),ue.rotation.set(0,Ae-Math.PI/2,0),ue.updateMatrix(),Ge.setMatrixAt(Ee,ue.matrix),et[Ee]=Ee*7.31+3.7,p.add("chrome",L(Te(.66,.03,.82),[ue.position.x,.015,ue.position.z],[0,Ae,0]))}Ne.setAttribute("aSeed",new ai(et,1)),ee.instanceMatrix.needsUpdate=!0,Ge.instanceMatrix.needsUpdate=!0,ee.computeBoundingSphere(),Ge.computeBoundingSphere(),ee.receiveShadow=!0,t.add(ee,Ge);let oe=JS(e),z=new it(L(new Tn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),oe);z.name="atrium-floor",z.position.set(i,0,s),z.receiveShadow=!0,z.layers.set(cn);let W=aw({kit:p,low:x,glassKit:m,floorMat:oe,at:b});t.add(W.floor);let ce=rw(),K=new it(L(new xt(ce.x1-ce.x0,ce.z1-ce.z0),[0,0,0],[-Math.PI/2,0,0]),jS(e));K.name="island-tops",K.position.set((ce.x0+ce.x1)/2,0,(ce.z0+ce.z1)/2),K.receiveShadow=!0,K.layers.set(cn),t.add(z,K);for(let Ee of jr)x.add("satin",ff(Ee,0,-ed,0)),x.add("silver",ff(Ee,.004,-.045,-.001)),x.add("glowCyan",ff(Ee,.006,-ed,-ed+.05));let le=Vm(.5);x.add("satin",os(le,-Rt.depth,0,{closed:!0,facing:pf}));let Ce=$m(le,.012);x.add("glowCyan",os(Ce,-.17,-.13,{closed:!0,facing:pf})),x.add("glowBlue",os(Ce,-Rt.depth+.1,-Rt.depth+.14,{closed:!0,facing:pf}));let F=new rn({name:"data-pool",vertexShader:QS,fragmentShader:ew,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),ie=new it(L(new xt(Rt.hx*2,Rt.hz*2),[0,0,0],[-Math.PI/2,0,0]),F);ie.name="data-pool",ie.position.set(Rt.cx,-Rt.depth,Rt.cz),ie.layers.set(cn),t.add(ie);let de=$m(le,-.06),O=[];for(let Ee of sw(de)){O.push(os(Ee,.035,1)),p.add("chrome",ti(Ee.map(([Ae,Ie])=>[Ae,1.01,Ie]),.022,.08,8)),p.add("glowCyan",os(Ee,0,.035)),p.add("glowCyan",os(Ee.slice().reverse(),0,.035));for(let Ae=0;Ae<Ee.length;Ae+=5)p.add("chrome",L(ae(.018,.018,1,8),[Ee[Ae][0],.5,Ee[Ae][1]]))}if(O.length){let Ee=new lt;for(let Ie of O)Ee.add("glass",Ie);let Ae=Ee.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(Ae)}let Ze=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Ze.traverse(Ee=>{Ee.isMesh&&(Ee.renderOrder=2)}),t.add(Ze);let ct=p.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(ct);let yt=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});yt.traverse(Ee=>Ee.layers.set(cn)),t.add(yt);let Re=.3;return{root:t,reflectors:[z,K,W.floor],bounds:ce,update(Ee,Ae,Ie={}){let I=ot(Ie.activity||0,0,1);Re+=(.3+.7*I-Re)*Math.min(1,Ee*2),F.uniforms.uTravel.value=(F.uniforms.uTravel.value+Ee*(.25+1.4*I))%1e3,F.uniforms.uFlow.value=Re,at.uniforms.uTime.value=Ae,at.uniforms.uActivity.value=Re},setLook(Ee){let Ae=Ee.glow==null?1:Ee.glow;for(let Ie of l)Ie.color.setHex(Ie.userData.glow.hex).multiplyScalar(Ie.userData.glow.k*Ae);c.color.set(Ee.interior.ring).multiplyScalar(Ee.interior.ringPower),a.ceiling.emissiveIntensity=Ee.id==="day"?.16:.22,F.uniforms.uGlow.value=Ae}}}var er=Xi.groundY,tr={pitch:96,rot:18*Math.PI/180},xf=Math.cos(tr.rot),yf=Math.sin(tr.rot),Zm=13*289,Ml=2400;function Tr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Jm(n,e,t=[0,0]){return t[0]=Xe.cx+xf*n+yf*e,t[1]=Xe.cz-yf*n+xf*e,t}function vf(n,e,t=[0,0]){return t[0]=Xe.cx+e*Math.cos(n),t[1]=Xe.cz-e*Math.sin(n),t}function jm(){return{uHaze:{value:new Be(2902638)},uHazeHigh:{value:new Be(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Me(Xe.cx,Xe.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new Be(16777215)},uSunK:{value:.2},uSkyRefl:{value:new Be(3103372)}}}function as(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var ls=["uHaze","uHazeHigh","uHazeDensity"],cs=`
#define GROUND_Y (${er.toFixed(1)})
#define GRID_P ${tr.pitch.toFixed(1)}
#define GRID_C ${xf.toFixed(7)}
#define GRID_S ${yf.toFixed(7)}
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
`;var lw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,cw=`
${cs}
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
`,uw=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,dw=`
${cs}
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
#define TOWER_R ${Xi.r.toFixed(3)}

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
`;function Qm(n,{quality:e="high"}={}){let t=as(n,[...ls,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new Be(461846)},uStreet:{value:new Be(16752714)},uAvenue:{value:new Be(4641535)},uRoof:{value:new Be(1712690)},uPark:{value:new Be(463887)}}),i=new rn({name:"city-ground",vertexShader:lw,fragmentShader:cw,uniforms:t}),s=e==="low"?4200:6e3,r=new Tn(s,96).rotateX(-Math.PI/2),o=new it(r,i);return o.name="city-ground",o.position.set(Xe.cx,er,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(cn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function eg(n){let e=as(n,[...ls,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new Be(1778996)},uGlassC:{value:new Be(660516)},uSpine:{value:new Be(4641535)}}),t=new rn({name:"city-host-facade",vertexShader:uw,fragmentShader:dw,uniforms:e}),i=-.45,s=i-er,r=new Nn(Xi.r,Xi.r,s,128,1,!0),o=new it(r,t);return o.name="city-host-facade",o.position.set(Xe.cx,(i+er)/2,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(cn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var hw=`
${cs}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${Ml.toFixed(1)}

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
`,fw=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function tg(n,{quality:e="high"}={}){let t=Tr(91),i=tr.pitch,s=e==="low"?2:1,r=[];for(let f=-20;f<=20;f+=4){let p=(f+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:p-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:p+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let f of[-16,-12,12,16]){let p=(f+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:p,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let f of r){let p=Math.floor(2*Ml/f.spacing);for(let x=0;x<p;x++){o.push(f.axis,f.coord,f.y,f.speed);let m=t(),g=f.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/p,7+t()*8,t(),g)}}let l=o.length/4,c=new xt(1,1),u=new sl;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new ai(new Float32Array(o),4)),u.setAttribute("aCar",new ai(new Float32Array(a),4)),u.instanceCount=l;let d=new rn({name:"city-traffic",vertexShader:hw,fragmentShader:fw,uniforms:as(n,[...ls,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:Kn,side:Jt}),h=new it(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(cn),{mesh:h,count:l}}var rg=Math.PI/180,_f=tr.pitch,pw=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],mw=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],gw={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},xw=`
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
`,yw=`
${cs}
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
`;function vw(n,e){return Math.hypot(n-Xe.cx,e-Xe.cz)}function _w(n,e){let t=Tr(17),i=n==="low"?1500:2600,s=Math.ceil(i/_f)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=pw.map(c=>{let[u,d]=vf(c.a*rg,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let f=c*_f+d,p=u*_f+h,x=Math.hypot(f,p);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,b=12+t()*20,v=(t()-.5)*Math.max(0,37-g),y=(t()-.5)*Math.max(0,37-b);Jm(f+v,p+y,a);let w=a[0],E=a[1];if(e.some(P=>Math.hypot(P.x-w,P.z-E)<P.rad))continue;let _=ot((x-120)/650,0,1),M=22+Math.pow(t(),2.2)*(70+250*_),A=0;for(let P of o)A=Math.max(A,Math.exp(-((w-P.x)**2+(E-P.z)**2)/P.r2));M+=A*(140+220*t());let R=Math.min(er+M,A>.3?60:-40),D=t(),U=A>.3?D<.3?0:D<.45?1:D<.6?2:3:D<.35?0:D<.6?1:D<.9?2:3,V=0;Math.min(g,b)>=22&&t()<.18&&(V|=1),t()<.45&&(V|=2),t()<.35&&(V|=8),l.push({x:w,z:E,w:g,d:b,base:er-20,top:R,rot:tr.rot,seed:t(),style:U,flags:V})}return l}function bw(n){let e=Tr(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function Mw(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*rg,[d,h]=vf(u,c.r),f=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):tr.rot,p={x:d,z:h,w:c.w,d:c.d,base:er-20,top:c.top,rot:f,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(p),p};for(let c of mw){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(gw);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function ng(n,e,t){let i=new Gt(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Dn(i,e,s),l=new an;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new ai(r,3)),i.setAttribute("aInfo",new ai(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var Sw=`
${cs}
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
`,ww=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function Ew(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function Tw(n,e,t,i){let s=Tr(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,f]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...Ew(d,h*d.w/2.15,f*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new Ht;l.setAttribute("position",new dt(r,3)),l.setAttribute("aSeed",new oi(a,1));let c=new rn({name:"city-beacons",vertexShader:Sw,fragmentShader:ww,uniforms:as(n,[...ls,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:Kn}),u=new za(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(cn),{points:u,count:o}}var id=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],Aw=6,Rw=`
${cs}
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
`,Cw=`
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
`;function Pw(){return{atlas:Ot(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),id.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Vt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function Iw(n,e){let t=Tr(53),i=[],s=n.filter(o=>{let a=vw(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*id.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[Xe.cx-o.x,Xe.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?Aw:Math.floor(t()*id.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function Lw(n,e,t){let{atlas:i,cols:s,rows:r}=Pw(),o=Tr(61),a=Iw(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new xt(1,1),h=new rn({name:"city-signs",vertexShader:Rw,fragmentShader:Cw,uniforms:as(n,[...ls,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:Kn,side:Jt}),f=new Dn(d,h,l);f.name="city-signs";let p=new an,x=new Be;return a.forEach((m,g)=>{p.position.set(m.pos[0],m.pos[1],m.pos[2]),p.rotation.set(0,0,0),p.lookAt(Xe.cx,m.tilt?0:m.pos[1],Xe.cz),p.scale.set(m.w,m.w/4,1),p.updateMatrix(),f.setMatrixAt(g,p.matrix);let b=m.word;c.set([b%s/s,1-(Math.floor(b/s)+1)/r,1/s,1/r],g*4),x.set(id[b][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new ai(c,4)),d.setAttribute("aTint",new ai(u,4)),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,f.layers.set(cn),{mesh:f,count:l}}var ig={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function sg(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Vt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Vt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Vt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Vt}`,n.fillText(ig[i.phase]||ig.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Ft}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Vt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let f=(c-l)/a.length;a.forEach((p,x)=>{let m=(u-d)*p/h;n.fillRect(l+x*f+2,u-m,Math.max(2,f-4),m)})}function Dw(n){let i=new Array(40).fill(0),s=Ot(1024,Math.round(1024*40/96),(x,m,g)=>sg(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new Xt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Yt;o.name="city-billboard";let a=new it(new xt(96,40),r);o.add(a);let l=new it(new Gt(98,42,1.2),new Xt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new Xt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new it(new Gt(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",f=1,p=0;return{group:o,update(x,m){p+=x,p>=1&&(p=0,i.shift(),i.push(m.tps||0)),f+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;f<1||g===h||(f=0,h=g,s.redraw((b,v,y)=>sg(b,v,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var Nw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Ow=`
${cs}
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
`;function sa(n,e,t,i=!1){return new rn({name:i?"city-glow-add":"city-glow",vertexShader:Nw,fragmentShader:Ow,defines:i?{ADDITIVE:""}:{},uniforms:as(n,ls,{uColor:{value:new Be(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?Kn:Ts})}var Fw=`
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
`,Uw=`
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
`,kw=`
${cs}
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
`,Bw=`
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
`;function og(n,e,t=16){return new Nn(e,n,1,t,1,!0).translate(0,.5,0)}function zw(n,e,t){let i=new Yt;i.name="compute-tower";let s=sa(n,4646655,4),r=sa(n,10480383,5),o=sa(n,5078015,4),a=sa(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(E,_,M,A)=>{let R=new it(new gi(E,_,10,160),A);return R.rotation.x=Math.PI/2,R.position.set(e.x,M,e.z),i.add(R),R};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new it(new Nn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let f=new Me(t.x-e.x,t.z-e.z).normalize(),p=new C(e.x+f.x*(c+2),100,e.z+f.y*(c+2)),x=new it(new An(4,20,14),r);x.position.copy(p),i.add(x);let m=new C().subVectors(p,t),g=m.length(),b=new pn().setFromUnitVectors(new C(0,1,0),m.clone().normalize()),v={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new Be(6282495)}};for(let[E,_,M]of[[.07,2,1],[.38,8,0]]){let A=new rn({name:M?"beam-core":"beam-glow",vertexShader:Fw,fragmentShader:Uw,uniforms:{...v,uCore:{value:M}},transparent:!0,depthWrite:!1,blending:Kn,side:Jt}),R=new it(og(E,_,16),A);R.position.copy(t),R.quaternion.copy(b),R.scale.set(1,g,1),R.frustumCulled=!1,R.renderOrder=3,i.add(R)}let y=new Xt({name:"beam-receiver"});y.color.setHex(6282495).multiplyScalar(4);let w=new it(new gi(.5,.05,8,48),y);return w.rotation.x=Math.PI/2,w.position.copy(t),i.add(w),i.traverse(E=>{E.isMesh&&E.renderOrder===0&&(E.renderOrder=5)}),{group:i,setLook(E){s.uniforms.uGain.value=4*(.35+.65*E.neon),r.uniforms.uGain.value=5*(.4+.6*E.neon),o.uniforms.uGain.value=4*(.35+.65*E.neon),a.uniforms.uColor.value.set(E.body)},update(E,_,M){v.uIntensity.value=Math.max(.08,_)*M,x.scale.setScalar(.6+_*.8),w.scale.setScalar(.8+_*.6+Math.sin(E*6)*.05*_),d.rotation.z=E*.12},glows:l}}function Hw(n,e){let t=new Yt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new Be(8378623)}};for(let[h,f]of[[5,1],[20,0]]){let p=new rn({name:f?"tether-core":"tether-glow",vertexShader:kw,fragmentShader:Bw,uniforms:as(n,ls,{...r,uCore:{value:f}}),transparent:!0,depthWrite:!1,blending:Kn,side:Jt}),x=new it(og(1,1,14),p);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new it(new gi(a,1.6,8,192),sa(n,4646655,3.2,!0)),c=new it(new gi(a*.8,1.1,8,160),sa(n,5078015,3,!0)),u=new Yt,d=new Yt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function ag({quality:n="high",beamTarget:e=new C(-8,3,-.7)}={}){let t=new Yt;t.name="city";let i=jm(),s=Mw(),r=s.towers.filter(A=>A.mega).map(A=>({x:A.x,z:A.z,rad:Math.max(A.w,A.d)*.75+30})),o=_w(n,r),a=bw(o),l=as(i,[...ls,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new Be(725538)},uGlass:{value:new Be(462106)}}),c=new rn({name:"city-towers",vertexShader:xw,fragmentShader:yw,uniforms:l}),u=ng(o.concat(a),c,"city-towers");u.layers.set(cn);let d=ng(s.towers,c,"city-megatowers"),h=Tw(i,o,a,s),f=Qm(i,{quality:n}),p=eg(i),x=tg(i,{quality:n}),m=Lw(i,o,s),g=Dw(s.billboard),b=zw(i,s.compute,e),v=Hw(i,s);t.add(f.mesh,p.mesh,u,d,h.points,x.mesh,m.mesh,g.group,b.group,v.group);let y=0,w=0,E=0,_=1,M=1;return{root:t,update(A,R,D={}){let U=ot(D.activity||0,0,1);y+=(U-y)*Math.min(1,A*1.5);let V=.5+1.5*y;w=(w+A*V)%Zm,E=(E+A*V)%(2*Ml),i.uTime.value=R,i.uTravel.value=w,i.uAir.value=E,i.uDensity.value=(.3+.7*y)*_,b.update(R,y,M),v.update(R),g.update(A,D)},setLook(A){let R=A.city;i.uHaze.value.set(R.haze),i.uHazeHigh.value.set(R.hazeHigh),i.uHazeDensity.value=R.hazeDensity,i.uSkyRefl.value.set(R.skyRefl),i.uWindows.value=R.windows,i.uNeon.value=R.neon,i.uLights.value=R.lights,i.uBeacons.value=R.beacons,i.uTraffic.value=R.traffic,i.uSunK.value=R.sunK,i.uSunDir.value.fromArray(A.sun.dir).normalize(),i.uSunColor.value.set(A.sun.color),l.uBody.value.set(R.body),l.uGlass.value.set(R.glass),f.setLook(R),p.setLook(R),b.setLook(R),v.setLook(R),_=R.trafficScale??1,M=.45+.55*R.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var lg=724504;function bf(n,e=1){let t=new Xt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var Gw={low:0,medium:1024,high:2048,ultra:4096};function Vw(n,e){let t=Gw[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Qr=new C,sd=new C,rd=new Ks;function Ww(n,e,t,i=4.6){sd.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(sd).addScaledVector(e,60),n.target.position.copy(sd),n.updateMatrixWorld(),n.target.updateMatrixWorld(),rd.position.copy(n.position),rd.lookAt(sd),rd.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let f of[t.z0,t.z1])Qr.set(d,h,f).applyMatrix4(rd.matrixWorldInverse),s=Math.min(s,Qr.x),r=Math.max(r,Qr.x),o=Math.min(o,Qr.y),a=Math.max(a,Qr.y),l=Math.min(l,-Qr.z),c=Math.max(c,-Qr.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function ni(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ye(new xt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(cn),o}function cg(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Yt;a.name="stage";let l=Xm(i,s,{quality:t});a.add(l.dome);let c=Km(n,{reflection:r});a.add(c.root);let u=ag({quality:t,beamTarget:o});a.add(u.root);let d=new $o(16777215,3);d.name="sun",a.add(d,d.target);let h=new nl(16777215,8947848,1);h.name="sky-light";let f=new $o(16777215,.5);f.name="fill",a.add(h,f,f.target),Vw(d,t);let p=new C;function x(m){l.setLook(m),p.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,Ww(d,p,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,f.color.set(m.fill.color),f.intensity=m.fill.intensity,f.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),f.target.position.set(0,0,-1),f.updateMatrixWorld(),f.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,b){c.update(m,g,b),u.update(m,g,b)},setLook:x,dispose(){l.dispose()}}}var ug=Math.PI/180;function dg(n,e){let t=n*ug,i=e*ug;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function hg(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var eo=["dusk","day"],Ar="dusk",dn={min:.6,max:1.6,step:.05,initial:1},fg={dusk:{id:"dusk",clear:858675,sun:{dir:dg(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:hg([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:dg(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:hg([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function Mf(n){return fg[n]||fg[Ar]}function pg(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Sl(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function wl({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return Ot(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,f=d%5===0,[p,x]=u(h,f?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=f?5:2,r.beginPath(),r.moveTo(p,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Vt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[f,p]=u(h/(t.length-1),136);r.fillText(d,f,p)}),r.font=`700 34px ${Vt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Vt}`,r.fillText(e,a,a+130)})}function Sf(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(Dt*e)));return Ot(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Ft}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function us(n,e,t,i="#4d6bfe"){return Ot(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,pg(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,pg(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Ft}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Sl(s,n,r-170,46,700,Vt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Sl(s,e.toUpperCase(),r-170,24,600,Vt),s.fillText(e.toUpperCase(),152,100)})}function od(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return Ot(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Sl(o,n,t-20,Math.round(i*.42),700,Vt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Sl(o,e,t-20,Math.round(i*.26),600,Vt),o.fillText(e,12,i*.76))})}function ad(n,e,{bg:t="#05070a",glow:i=0}={}){let s=Ot(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Ft:Vt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Sl(a,c.text,n-32,u,c.weight||600,c.mono?Ft:Vt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function mg(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=Ot(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Ft}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function gg(){return Ot(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Vt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function xg(){return Ot(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Vt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var hn=new C(-8,0,-.7),to=.41,yg=1.9,wf=1.86;function Xw(){return Ot(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function vg(n){let e=Tt("fuel"),t=Tt("tank",[hn.x,0,hn.z]);t.userData.solid="tank",e.add(t),e.add(ni(n,2.6,2.6,[hn.x,0,hn.z],.6));let i=new lt;i.add("graphite",L(Le(1.8,.28,1.8,.05),[0,.2,0]));for(let[U,V]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",L(ae(.07,.08,.06,20),[U,.03,V]));for(let U of[.375,2.345])i.add("steel",L(ae(.83,.83,.07,72),[0,U,0])),i.add("chrome",ia(18,.775,U+(U<1?.04:-.04),.017,.016)),i.add("rubber",L(ae(.712,.712,.03,64),[0,U+(U<1?.05:-.05),0]));i.add("alu",Ii([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let U=0;U<6;U++){let V=U/6*Dt+.26,P=Math.cos(V)*.79,Z=Math.sin(V)*.79;i.add("chrome",L(ae(.016,.016,2.04,12),[P,1.36,Z]));for(let Q of[.33,2.4])i.add("steel",L(ae(.03,.03,.03,6),[P,Q,Z]))}i.add("steel",L(ae(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",L(ae(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",L(Le(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",L(ae(.07,.08,.05,24),[0,2.695,0])),i.add("steel",L(ae(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",L(ae(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",L(Le(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ye(ae(.7,.7,yg,72,!0),n.glass,[0,to+yg/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ye(ae(.685,.685,1,72),n.fuel,[0,to+.5,0],null,null,{cast:!1}),o=Ye(new Tn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ye(on(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Dn(new An(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(U,V)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Dt,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Dt+V}));t.add(c);let d=Ye(new xt(.085,wf),kn(gg().tex,.1),[0,to+.02+wf/2,.892],null,null,{cast:!1}),h=Ye(new Ss(.02,.05,3),qt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let f=qt(4054148,2.5),p=Ye(new An(.07,24,12,0,Dt,0,Math.PI/2),f,[0,2.72,0],null,null,{cast:!1});t.add(p);let x=Tt("fuel-hmi",[hn.x+.95,0,hn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new lt;m.add("graphite",L(Le(.36,.04,.3,.015),[0,.02,0])),m.add("alu",L(ae(.035,.035,.95,16),[0,.5,0])),m.add("graphite",L(Le(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=ad(640,384,{bg:"#04070c"}),b=Ye(new xt(.66,.396),vl(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(b),e.add(x),e.add(ni(n,.8,.8,[x.position.x,0,x.position.z],.45));let v=new lt,y=(U,V)=>new C(U,V,hn.z);v.add("steel",ti([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),v.add("steel",ti([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),v.add("steel",L(ae(.1,.1,.025,24),[-6.93,.375,hn.z],[0,0,Math.PI/2])),v.add("chrome",...[0,1,2,3,4,5].map(U=>L(ae(.012,.012,.09,6),[-6.925,.375+Math.cos(U)*.075,hn.z+Math.sin(U)*.075],[0,0,Math.PI/2]))),v.add("blue",L(ae(.085,.085,.18,24),[-6.6,.375,hn.z],[0,0,Math.PI/2])),v.add("chrome",L(ae(.022,.022,.26,12),[-6.6,.52,hn.z])),v.add("steel",L(ae(.045,.05,.1,16),[-6.6,.47,hn.z])),v.add("orange",L(on(.11,.012,8,40),[-6.6,.64,hn.z],[Math.PI/2,0,0]));for(let U=0;U<3;U++)v.add("orange",L(new Gt(.21,.014,.014),[-6.6,.64,hn.z],[0,U/3*Math.PI,0]));for(let U of[.945,1.355])v.add("alu",L(ae(.085,.085,.05,32),[-6.05,U,hn.z]));v.add("chrome",...[0,1,2,3].map(U=>L(ae(.008,.008,.41,6),[-6.05+Math.cos(U*1.5708+.78)*.078,1.15,hn.z+Math.sin(U*1.5708+.78)*.078])));for(let U of[-6.8,-6.25])v.add("graphite",L(Le(.12,.33,.16,.015),[U,.165,hn.z]));v.add("steel",L(Le(.22,.09,.22,.02),[-4.75,2.1,hn.z])),v.add("chrome",ia(4,.12,2.15,.012,.012,.78).map(U=>U.translate(-4.75,0,hn.z))),e.add(v.build(n,{name:"feed"}));let w=Ye(ae(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,hn.z],null,null,{cast:!1,receive:!1}),E=Xw().tex,_=new gt({color:330264,emissive:16777215,emissiveMap:E,emissiveIntensity:1.8,roughness:.3}),M=Ye(ae(.034,.034,.36,24,!0),_,[-6.05,1.15,hn.z],null,null,{cast:!1});e.add(w,M);let A=.5,R="",D=new an;return{root:e,anchors:{tank:new C(hn.x,2.9,hn.z),hmi:new C(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:b}],setReadout(U){let V=JSON.stringify(U);V!==R&&(R=V,g.set(U))},update(U,V,P){A=Kt(A,ot(P.level,.02,1),2.5,U);let Z=A*wf;r.scale.y=Z,r.position.y=to+.012+Z/2,o.position.y=a.position.y=to+.012+Z+.001,h.position.y=to+.02+Z;let Q=ot(P.flow,0,1);for(let J=0;J<l;J++){let $=u[J];$.y+=U*(.05+Q*.32)*$.v/Math.max(.25,Z),$.y>1&&($.y=0,$.a=Math.random()*Dt,$.r=Math.sqrt(Math.random())*.6);let H=Math.sin(V*3+$.w)*.01;D.position.set(Math.cos($.a)*$.r+H,to+.03+$.y*Math.max(0,Z-.04),Math.sin($.a)*$.r),D.scale.setScalar($.s*(.3+.7*Math.min(1,(Z-$.y*Z)*10+.3))),D.updateMatrix(),c.setMatrixAt(J,D.matrix)}c.instanceMatrix.needsUpdate=!0,E.offset.y-=U*(.15+Q*2.6),_.emissiveIntensity=.5+Q*2.2,f.emissive.setHex(P.peak?16753978:4054148),f.emissiveIntensity=1.6+Math.sin(V*2.2)*.6}}}var ld=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],ci={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},Zt={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},ra=new Set(["engraver","labeler"]),qw=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function bg(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of qw)if(i.test(e))return t;return"generic"}function Mg(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function Tf(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function El(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function Tl(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=Tl(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function Sg(n,e){let t=Mg(e),i=Tl(t,["file_path","path","filePath","files"]);if(i)return El(Tf(i)||i);let s=Tl(t,["command","cmd","script","code"]);if(s)return El(s.split(`
`).find(a=>a.trim())||s);let r=Tl(t,["url"]);if(r)try{return El(new URL(r).host||r)}catch{return El(r)}let o=Tl(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?El(o):""}function Ef(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function _g(n,e){let t=Ef(n),i=Ef(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function wg(n,e){let t=String(n||"").toLowerCase(),i=Mg(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:Ef(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=_g(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=_g(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var Rr=new C(-4,0,-.7),oa=new C(-2.08,0,1.54),Eg=1.45;function Tg(n,e,t,i,s,r=.02,o=0){let a=new ns,l=(u,d,h,f,p,x)=>{u.moveTo(d+x,h),u.lineTo(d+f-x,h),u.quadraticCurveTo(d+f,h,d+f,h+x),u.lineTo(d+f,h+p-x),u.quadraticCurveTo(d+f,h+p,d+f-x,h+p),u.lineTo(d+x,h+p),u.quadraticCurveTo(d,h+p,d,h+p-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new $s;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new ws(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function Ag(n,e,{x:t,y:i,r:s,face:r}){let o=new lt;o.add("chrome",L(on(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",L(ae(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new gt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ye(new Tn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=Tt("needle",[t,i,.02]),c=new lt;return c.add("orange",new Gt(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new Gt(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",ae(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ye(new Tn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function Rg(n){let e=Tt("engine"),t=Tt("engine-body",[Rr.x,0,Rr.z]);t.userData.solid="engine",e.add(t),e.add(ni(n,4.8,2.7,[Rr.x+.35,0,Rr.z],.62));let i=new lt;i.add("graphite",L(Le(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",L(Le(3.94,.04,1.94,.015),[.35,.44,0]));for(let le of[-1.45,2.15])for(let Ce of[-.8,.8])i.add("rubber",L(ae(.08,.09,.06,20),[le,.03,Ce]));for(let le of[-.72,.62])i.add("graphite",L(Le(.22,.56,1,.03),[le,.72,0])),i.add("steel",L(Le(.26,.04,1.04,.01),[le,.47,0])),i.add("chrome",...[-.4,.4].map(Ce=>L(ae(.02,.02,.03,6),[le,.5,Ce])));i.add("graphite",L(Le(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let le of[1.435,2.165])i.add("graphite",L(Le(.07,1.62,.82,.02),[le,1.24,-.1]));for(let le of[.46,2.02])i.add("graphite",L(Le(.78,.06,.82,.02),[1.8,le,-.1]));i.add("aluDark",Tg(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",L(new xt(.5,.18),[1.8,.6,.335])),i.add("chrome",L(ae(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",L(ae(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",L(ae(.05,.065,.12,20),[.8,2.12,0]));for(let le=0;le<4;le++)i.add("chrome",L(on(.034,.007,8,24),[.8,2.2+le*.03,0],[Math.PI/2,0,0]));i.add("orange",L(ae(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",L(ae(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",L(ae(.05,.056,.03,20),[2,2.73,-.36]));for(let le of[.12,.28])i.add("rubber",ti([[le,.95,.42],[le,.62,.86],[le,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=Tt("turbine",[0,Eg,0],[0,0,-Math.PI/2]);t.add(s);let r=new lt;r.add("alu",Ii([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",L(ae(.6,.6,.56,64),[0,-.72,0]));for(let le=0;le<9;le++)r.add("alu",L(ae(.665,.665,.022,64),[0,-.97+le*.06,0]));r.add("steel",L(ae(.69,.69,.05,72),[0,-.445,0])),r.add("steel",L(ae(.69,.69,.05,72),[0,.405,0])),r.add("chrome",ia(20,.66,-.413,.016,.014)),r.add("chrome",ia(20,.66,.373,.016,.014,.157)),r.add("alu",L(ae(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",Ii([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",L(ae(.06,.06,.26,24),[0,1.33,0])),r.add("grille",L(ae(.6,.6,.012,64),[0,-1.2,0]));for(let le of[.22,.37,.52])r.add("chrome",L(on(le,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let le=0;le<6;le++)r.add("chrome",L(new Gt(1.18,.012,.028),[0,-1.205,0],[0,le/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=Tt("rotor"),a=new lt;a.add("darkSteel",L(ae(.24,.24,.8,48),[0,-.02,0]));for(let[le,Ce,F,ie]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let de=0;de<le;de++){let O=Le(.32,ie,.014,.004,1);O.rotateX(F),O.translate(.41,Ce,0),O.rotateY(de/le*Dt),a.add("chrome",O)}a.add("chrome",Ii([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=qt(5078015,1),c=[-.33,-.02,.29].map(le=>L(ae(.247,.247,.026,48,!0),[0,le,0])),u=new lt().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ye(ae(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=us(Zt.engine.zh,Zt.engine.en,Zt.engine.code);t.add(Ye(new xt(.5,.14),kn(h.tex,.35),[.76,Eg+.05,.628],null,null,{cast:!1}));let f=Ye(lf(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),p=Ye(lf(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*Hi,m=-4*Hi;t.add(f,p),t.add(Ye(new xt(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let b=[16726832,16753183,3461498,5078015].map((le,Ce)=>{let F=qt(le,.15);return t.add(Ye(ae(.055,.055,.085,24),F,[2,2.66-Ce*.09,-.36],null,null,{cast:!1})),F}),v=Tt("console",[-.35,0,1.22]);t.add(v);let y=new lt;y.add("graphite",L(Le(2.2,.82,.46,.03),[0,.41,0])),y.add("rubber",L(Le(2.16,.06,.4,.02),[0,.03,.01])),v.add(y.build(n,{name:"console"}));let w=us(Zt.console.zh,Zt.console.en,Zt.console.code);v.add(Ye(new xt(.72,.2),kn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let E=Tt("panel",[0,.98,.02],[-.62,0,0]);v.add(E);let _=new lt;_.add("aluDark",L(Le(2.24,.62,.06,.02),[0,0,-.03])),_.add("graphite",Tg(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),E.add(_.build(n,{name:"panel"}));let M=Ag(n,E,{x:-.74,y:0,r:.205,face:wl({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),A=Ag(n,E,{x:.86,y:.08,r:.13,face:wl({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),R=.028,D=.04,U=ae(R,R,D,24).rotateZ(-Math.PI/2),V=Sf(D,R),P=Sf(D,R,{inverted:!0}),Z=le=>new gt({map:le.tex,emissive:16777215,emissiveMap:le.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),Q=[.19,.095,0,-.095,-.19],J=[],$=new Dn(U,Z(V),36),H=new Dn(U,Z(P),2);$.castShadow=H.castShadow=!1;let X=0;for(let le=0;le<4;le++)for(let Ce=0;Ce<8;Ce++)J.push({inst:$,index:X++,x:.16+.163-Ce*.044,y:Q[le],row:le,power:Ce});for(let le=0;le<6;le++){let Ce=le<2;J.push({inst:Ce?H:$,index:Ce?le:X++,x:.16+.163-le*.044-(Ce?0:.03),y:Q[4],row:4,power:le})}E.add($,H),E.add(Ye(new Tn(.006,12),qt(15855592,.6),[.16+.163-2*.044+.022-.015,Q[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([le,Ce],F)=>{let ie=od(le,Ce,{w:256,h:80}).tex;E.add(Ye(new xt(.2,.0625),kn(ie,.2),[.16-.29,Q[F],.012],null,null,{cast:!1}))}),E.add(Ye(new xt(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let re=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([le,Ce],F)=>{let ie=.66+F*.13,de=new lt().add("chrome",L(ae(.032,.032,.014,24),[ie,-.17,.007],[Math.PI/2,0,0]));E.add(de.build(n,{name:"lamp",castShadow:!1}));let O=qt(Ce,.15);E.add(Ye(new An(.024,20,10,0,Dt,0,Math.PI/2),O,[ie,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Ze=od(le,"",{w:128,h:48}).tex;return E.add(Ye(new xt(.1,.0375),kn(Ze,.2),[ie,-.235,.004],null,null,{cast:!1})),O}),j=[];for(let le=0;le<24;le++){let Ce=new Ms({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),F=new Ws(Ce);F.visible=!1,t.add(F),j.push({sp:F,mat:Ce,life:0,vx:0,vz:0})}let he=0,ve=Tt("dispenser",[oa.x,0,oa.z]);ve.userData.solid="dispenser",e.add(ve);let ee=new lt;ee.add("white",L(Le(.5,1.2,.56,.03),[0,.6,0])),ee.add("plastic",L(Te(.02,.05,.36),[.252,.922,0])),ee.add("aluDark",L(Le(.54,.05,.6,.015),[0,1.225,0])),ee.add("grille",L(new xt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),ve.add(ee.build(n,{name:"dispenser"}));let ge=od(Zt.dispenser.zh,`${Zt.dispenser.en} · ${Zt.dispenser.code}`.toUpperCase(),{w:256,h:80});ve.add(Ye(new xt(.34,.106),kn(ge.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let Ne=qt(5078015,.3);ve.add(Ye(new Gt(.012,.012,.3),Ne,[.256,.97,0],null,null,{cast:!1})),e.add(ni(n,.9,.9,[oa.x,0,oa.z],.5));let at=new lt().add("rubber",ti([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(at.build(n,{name:"conduit"}));let Ge=new Xt({visible:!1}),et=(le,Ce,F,ie)=>{let de=new it(new Gt(Ce[0],Ce[1],Ce[2]),Ge);return de.position.set(F[0],F[1],F[2]),de.userData.hoverId=le,ie.add(de),{id:le,object:de}},ue={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},oe=new bt,z=new Float32Array(8),W=new Be,ce={reasoning:new Be(10185727),generating:new Be(4160511),tool:new Be(16753183),idle:new Be(2838456)};function K(le,Ce,F){let ie=Math.max(0,Ce);for(let de=0;de<F;de++){let O=Math.pow(10,de),Ze=Math.floor(ie/O)%10,ct=ie%O,yt=0;de===0?yt=ie-Math.floor(ie):ct>O-1&&(yt=ct-(O-1)),z[de]=-((Ze+yt+.5)/10)*Dt}for(let de of J)de.row===le&&(oe.makeRotationX(z[de.power]),oe.setPosition(de.x,de.y,.03),de.inst.setMatrixAt(de.index,oe))}return{root:e,anchors:{engine:new C(Rr.x,2.5,Rr.z),console:new C(Rr.x-.35,1.45,Rr.z+1.22),dispenser:new C(oa.x,1.45,oa.z)},hover:[et("engine",[3.2,1.7,1.5],[.2,1.45,0],t),et("console",[2.3,1.35,.8],[-.35,.68,1.22],t),et("dispenser",[.6,1.3,.62],[0,.65,0],ve)],pulseDispenser(){ue.dispPulse=1},update(le,Ce,F){let ie=F.phase,de=ie==="generating"||ie==="reasoning",O=.35+ot(F.tps,0,140)*.16+(ie==="thinking"?.8:0);ue.rotorSpeed=Kt(ue.rotorSpeed,O,1.4,le),ue.rotorAngle+=ue.rotorSpeed*le,o.rotation.y=ue.rotorAngle,f.rotation.z=x+ue.rotorAngle*.45,p.rotation.z=m-ue.rotorAngle*.9;let Ze=ce[ie]||ce.idle;W.copy(l.emissive).lerp(Ze,1-Math.exp(-4*le)),l.emissive.copy(W);let ct=.85+.15*Math.sin(Ce*9),yt=de?(2.4+ot(F.tps,0,120)/30)*ct:ie==="tool"?.9:ie==="thinking"?1.3:.45;l.emissiveIntensity=Kt(l.emissiveIntensity,yt,5,le),ue.ctx=Kt(ue.ctx,ot(F.ctx,0,1),2.5,le);let Re=de?Math.sin(Ce*41)*.006:0;M.rotation.z=(135-270*ue.ctx)*Hi+Re,ue.tach=Kt(ue.tach,ot(F.tps/120,0,1),3,le),A.rotation.z=(135-270*ue.tach)*Hi+Re*2;let Ee=[F.counters.miss,F.counters.hit,F.counters.output,F.counters.reasoning,F.counters.cost*100];for(let Y=0;Y<5;Y++){let Se=Ee[Y]||0,ye=ue.disp[Y];Se<ye||Se-ye<.02?ye=Se:ye=Kt(ye,Se,3.2,le),ue.disp[Y]=ye,K(Y,ye,Y===4?6:8)}$.instanceMatrix.needsUpdate=!0,H.instanceMatrix.needsUpdate=!0;let Ae=[ie==="reasoning"||ie==="thinking",ie==="generating",ie==="tool",ie==="idle"];re.forEach((Y,Se)=>{Y.emissiveIntensity=Kt(Y.emissiveIntensity,Ae[Se]?3.2:.12,10,le)}),ue.err=Math.max(0,ue.err-le*.5),F.errorPulse&&(ue.err=1);let Ie=Math.sin(Ce*12)>0?1:.2,I=[ue.err>0?3.5*Ie:.1,ie==="tool"?3:.1,de||ie==="thinking"?3:.6,ie==="reasoning"?3:.1];b.forEach((Y,Se)=>{Y.emissiveIntensity=Kt(Y.emissiveIntensity,I[Se],12,le)}),ue.dispPulse=Math.max(0,ue.dispPulse-le*2.5),Ne.emissiveIntensity=.3+ue.dispPulse*4;let T=ot((ue.ctx-.78)/.22,0,1);he+=le*T*18;for(let Y of j)if(Y.life<=0&&he>=1&&(he-=1,Y.life=1,Y.vx=(Math.random()-.5)*.15,Y.vz=(Math.random()-.5)*.15,Y.sp.position.set(.8,2.36,0),Y.sp.visible=!0),Y.life>0){Y.life-=le/1.7;let Se=1-Y.life;Y.sp.position.x+=Y.vx*le,Y.sp.position.z+=Y.vz*le,Y.sp.position.y+=le*(.55-Se*.25),Y.sp.scale.setScalar(.08+Se*.55),Y.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,Se*1.2))*.32),Y.life<=0&&(Y.sp.visible=!1)}he>4&&(he=4)}}}var hs=new C(2.6,0,-1),la=3.1,fs=2.35,so=.75,Sn=.922,Al=.012,no=1,aa=1,Cg=.4,io=235*Hi,ca=305*Hi,ds=1.54;function qi(n,e,t=0,i=new C){return i.set(hs.x+e*Math.cos(n),t,hs.z-e*Math.sin(n))}var Og=n=>Math.atan2(-Math.cos(n),Math.sin(n));function cd(n){let e=Tt("pedestal"),t=new lt;t.add("graphite",L(ae(.15,.17,.04,40),[0,.02,0])),t.add("alu",L(ae(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",L(ae(.12,.1,.03,48),[0,.835,0])),t.add("chrome",L(on(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Dt+.3;t.add("ceramic",L(ae(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=qt(5078015,.25);return e.add(Ye(on(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var Bn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},Pg={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},Ig={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function Fg(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function $w(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=Fg(n,o,a),u=Math.PI/2-l,d=new ns;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new ws(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function Lg(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=Fg(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return L(Te(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function Yw(){let n=new ns,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new ws(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,Bn.forkY+.002,0),t}function Kw(){let n=Ot(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new gt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function Zw(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function Jw(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function jw(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Qw(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),jw(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Vt}`,n.fillStyle="#86a7c9",n.fillText(`${Zt.robot.code} · ${Zt.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${Ft}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Vt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${Ft}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${Ft}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Dt),n.fill(),n.font=`600 23px ${Vt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function eE(n){let e=Tt("robot",[hs.x,0,hs.z]),t=qt(4641535,2.2),i=qt(4641535,1.8),s=qt(5078015,1.4),r={...n,carbon:Kw(),led:t},o=new lt;o.add("white",Ii([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",L(ae(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",L(ae(1.15,1.15,Bn.deckY-.4,112),[0,(.4+Bn.deckY)/2,0])),o.add("plastic",L(ae(.62,.62,.006,72),[0,Bn.deckY+.003,0])),o.add("chrome",L(on(.62,.005,8,112),[0,Bn.deckY+.003,0],[Math.PI/2,0,0]));for(let H=0;H<12;H++){let X=H/12*Dt+.13;o.add("chrome",L(ae(.016,.016,.006,10),[Math.cos(X)*.92,Bn.deckY+.003,Math.sin(X)*.92]))}let a=Bn.drumTop-Bn.deckY;o.add("white",L(ae(.34,.37,a,72),[0,Bn.deckY+a/2,0])),o.add("chrome",L(on(.342,.006,8,72),[0,Bn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",ti([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new lt;l.add("led",L(on(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",L(ae(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Ye(on(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=Ot(1024,48,Jw,{anisotropy:8}),u=new Xt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Ye(ae(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=Qs({color:726566,opacity:.4,fresnel:.55}),f=Ye(ae(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});f.renderOrder=2,e.add(d,f);let p=Ot(512,176,null,{anisotropy:8}),x=new Xt({map:p.tex,transparent:!0,depthWrite:!1,side:Jt,name:"robot-holo"});x.color.setScalar(1.25);let m=Ye(new xt(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=Tt("arm");e.add(g),g.add(new lt().add("steel",L(ae(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let b=Ot(512,64,Zw,{anisotropy:8,repeat:[1,1]}),v=H=>new gt({map:H,emissiveMap:H,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=b.tex,w=b.tex.clone();function E(H,X,N,q){let re=Tt(H),j=X.y+X.h,he=new lt;he.add("white",$w(N,X.r1,X.r2,X.y,X.h,X.bevel)),he.add("chrome",L(Le(.66,.004,X.r2*.95,.002),[.5,j+.0015,0]));for(let ge of[-1,1])he.add("graphite",Lg(.66,.026,.004,N/2,X.y+X.h/2,X,N,ge,5e-4));q(he,j),re.add(he.build(r,{name:H}));let ve=new xt(.62,X.r2*.95-.022);ve.rotateX(-Math.PI/2),re.add(Ye(ve,v(X===Bn.link1?y:w),[.5,j+.004,0],null,null,{cast:!1}));let ee=new lt;for(let ge of[-1,1])ee.add("led",Lg(.6,.009,.005,N/2,X.y+X.h/2,X,N,ge,.0022));return re.add(ee.build({led:i},{name:`${H}-strips`,castShadow:!1})),re}let _=Bn.link1,M=E("link1",_,no,(H,X)=>{H.add("alu",L(ae(.118,.124,.012,56),[0,X+.006,0])),H.add("chrome",L(ae(.034,.034,.008,24),[0,X+.016,0])),H.add("alu",L(ae(.1,.104,.012,56),[no,X+.006,0])),H.add("graphite",L(ae(.11,.11,.01,48),[no,_.y-.005,0])),H.add("led",L(on(.127,.0045,6,72),[0,X+.003,0],[Math.PI/2,0,0])),H.add("led",L(on(.107,.004,6,64),[no,X+.003,0],[Math.PI/2,0,0]))});g.add(M);let A=Bn.link2,R=E("link2",A,aa,(H,X)=>{H.add("alu",L(ae(.086,.09,.01,48),[0,X+.005,0])),H.add("chrome",L(ae(.028,.028,.007,20),[0,X+.0135,0])),H.add("white",L(ae(.07,.078,Bn.forkY-.01-X,48),[aa,(X+Bn.forkY-.01)/2,0])),H.add("led",L(on(.093,.0035,6,56),[0,X+.003,0],[Math.PI/2,0,0])),H.add("led",L(on(.079,.0035,6,56),[aa,X+.012,0],[Math.PI/2,0,0]))});R.position.x=no,M.add(R);let D=Tt("fork",[aa,0,0]);R.add(D);let U=new lt;U.add("alu",L(ae(.064,.064,.01,48),[0,Bn.forkY-.005,0])),U.add("carbon",Yw()),U.add("graphite",L(Le(.06,.016,.07,.005),[.07,Bn.forkY+.02,0]));for(let H of[.31,.5])for(let X of[-.075,.075])U.add("rubber",L(ae(.011,.011,.002,14),[H,Bn.forkY+.013,X]));D.add(U.build(r,{name:"fork",castShadow:!0}));let V=qt(4641535,.8);D.add(Ye(Te(.004,.006,.044),V,[.1015,Bn.forkY+.02,0],null,null,{cast:!1}));let P={yaw:270*Hi,reach:so,lift:0},Z=new C;function Q(){let H=ot(P.reach-Cg,.02,no+aa-1e-4),X=Math.acos(H/(no+aa));M.rotation.y=P.yaw+X,R.rotation.y=-2*X,D.rotation.y=X,g.position.y=P.lift,d.rotation.y=M.rotation.y,y.offset.x=-2*X*.08,w.offset.x=X*.065}Q();let J="";function $(H="idle",X=null,N=null,q=null){let re=`${H}|${X}|${N}|${q}`;if(re===J)return;J=re;let j=Pg[H]||Pg.idle,he=q?Ig[q]||Ig.normal:null,ve=he&&he.color?he.color:j.color;i.color.setHex(ve).multiplyScalar(.25),i.emissive.setHex(ve),p.redraw((ee,ge,Ne)=>Qw(ee,ge,Ne,{st:j,carry:he,from:X,to:N}))}return $(),{root:e,pose:P,setPose(H,X,N){P.yaw=H,P.reach=X,P.lift=N,Q()},carryPoint(H=Z){return e.updateMatrixWorld(!0),H.set(Cg,0,0),D.localToWorld(H),H.y=.921+P.lift,H},setBusy(H){V.emissiveIntensity=H?3:.8,s.emissiveIntensity=H?2.4:1.4,i.emissiveIntensity=H?2.6:1.8},setStatus:$,parts:{arm:g,link1:M,link2:R,fork:D},hover:{id:"robot",object:e}}}function Dg(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Tt(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new lt;l.add("white",L(Le(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",L(Le(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",L(Le(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",L(Te(.04,.3,.04),[m,1,g]));l.add("aluDark",L(Te(.84,.03,.04),[0,1.15,.4]),L(Te(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",L(Te(.04,.03,.84),[.4,1.15,0]),L(Te(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",L(ae(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Dt;l.add("ceramic",L(ae(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",L(Te(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",L(Te(.5,.2,.05),[o,.95,-.42])),l.add("steel",L(ae(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",L(ae(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[L(new xt(.76,.27),[0,1,.4]),L(new xt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),L(new xt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new lt().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ye(Le(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ye(Le(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let f=us(i,s,r);a.add(Ye(new xt(.56,.158),kn(f.tex,.35),[0,.62,.402],null,null,{cast:!1}));let p=qt(3461498,.6);a.add(Ye(Te(.6,.016,.01),p,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:p,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function Ng(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",L(Le(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",L(Te(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Te(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),f=t.x+r*h,p=t.z+o*h;e.add("aluDark",L(Te(.05,.84,.05),[f,.43,p],[0,l,0])),e.add("graphite",L(Te(.16,.02,.16),[f,.01,p],[0,l,0]))}return{len:a,yaw:l,mid:c}}function Ug(n){let e=Tt("cell"),t=eE(n);e.add(t.root),e.add(ni(n,2.9,2.9,[hs.x,0,hs.z],.6));let i=qi(io,la),s=qi(ca,la),r=Dg(n,{center:i,side:-1,...Zt.lock,hubDoorX:.18}),o=Dg(n,{center:s,side:1,...Zt.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(ni(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(ni(n,1.3,1.3,[s.x,0,s.z],.5));let a=qi(io,fs,Sn),l=qi(ca,fs,Sn),c=cd(n);c.root.position.set(a.x,0,a.z);let u=cd(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new lt,h=new C(-1.83,0,ds),f=new C(i.x-.42,0,ds),p=new C(s.x+.42,0,ds),x=new C(7.18,0,ds);Ng(n,d,h,f),Ng(n,d,p,x);let m=(w,E)=>{let _=E.x-w.x,M=E.z-w.z,A=Math.hypot(_,M);d.add("aluDark",L(Le(A,.02,.2,.006),[(w.x+E.x)/2,.892,(w.z+E.z)/2],[0,Math.atan2(-M,_),0]))};m(new C(i.x+.18,0,i.z-.44),new C(a.x-.06,0,a.z+.1)),m(new C(s.x-.18,0,s.z-.44),new C(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=qt(5078015,1.2),b=[];for(let[w,E]of[[h,f],[p,x]]){let _=E.x-w.x;b.push(L(Te(_,.008,.008),[(w.x+E.x)/2,.858,ds+.185]))}e.add(new lt().add("led",b).build({led:g},{name:"track-led",castShadow:!1})),e.add(ni(n,f.x-h.x+.4,.7,[(h.x+f.x)/2,0,ds],.4)),e.add(ni(n,x.x-p.x+.4,.7,[(p.x+x.x)/2,0,ds],.4));let v=new Xt({visible:!1}),y=(w,E)=>{let _=new it(new Gt(.9,1.25,.9),v);return _.position.set(E.x,.62,E.z),_.userData.hoverId=w,e.add(_),{id:w,object:_}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new C(-1.95,Sn,ds),lockCenter:new C(i.x,Sn,i.z),lockPort:a,outPort:l,outCenter:new C(s.x,Sn,s.z),trackEnd:new C(x.x-.08,Sn,ds)},trackLed:g,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new C(hs.x,1.4,hs.z),lock:new C(i.x,1.45,i.z),unload:new C(s.x,1.45,s.z)}}}var Cf=n=>(200-n*24.4)*Hi,$t=la-fs,ut=.89,tE={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},nE={archive:[.46,.17],press:[-.44,.17]},Rl=(n,e=.6)=>new Xt({color:n,transparent:!0,opacity:e,blending:Kn,depthWrite:!1});function iE(n,e,t,i=8){let s=new C(n[0],n[1],n[2]),r=new C(e[0],e[1],e[2]),o=ae(t,t,s.distanceTo(r),i);return o.applyQuaternion(new pn().setFromUnitVectors(new C(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function Pf(n,e=1.36){n.add("aluDark",L(Te(.06,e,.07),[.4,e/2,$t])),n.add("graphite",L(Te(.16,.03,.16),[.4,.015,$t])),n.add("aluDark",L(Te(.48,.06,.08),[.16,e,$t])),n.add("chrome",L(Te(.4,.01,.01),[.17,e-.035,$t+.03]))}function sE(){return Ot(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Ft}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function rE(){return Ot(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function oE(n,e,t){t.add("graphite",L(Le(.88,.8,.42,.02),[0,ut+.4,-.33])),t.add("aluDark",L(Le(.9,.03,.44,.01),[0,ut+.815,-.33]));let i=sE().tex,s=new Dn(Le(.26,.17,.3,.008),new gt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:ut+.13+x*.19,out:0,until:0});t.add("aluDark",L(Te(.06,.46,.06),[0,ut+.23,.16])),t.add("aluDark",L(Te(.07,.06,.88),[0,ut+.46,.56]));let o=Tt("scan-head",[0,ut+.4,$t]);e.add(o),o.add(new lt().add("graphite",L(Le(.38,.07,.09,.012),[0,-.035,0])).add("chrome",L(Te(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=qt(7314431,.6);o.add(Ye(Te(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=ut+.4-.075-(Sn+.004),c=Rl(6130687,0),u=Ye(new xt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=Rl(10469631,0),h=Ye(Te(.3,.001,.008),d,[0,Sn+.006-(ut+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let f=new bt,p=0;return{update(x,m,g){let b=g.work;if(o.position.z=$t+Math.sin(m*2.6)*.17*b,c.opacity=.16*b,d.opacity=.9*b,a.emissiveIntensity=.6+3*b,g.working&&m>p){p=m+.25+Math.random()*.3;let v=r[Math.floor(Math.random()*r.length)];v.until=m+.5+Math.random()*.5}for(let v=0;v<r.length;v++){let y=r[v];y.out=Kt(y.out,m<y.until?.16:0,9,x),f.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(v,f)}s.instanceMatrix.needsUpdate=!0}}}function aE(n,e,t,i){t.add("graphite",L(Le(.8,.34,.44,.02),[0,ut+.17,-.32]));for(let p=0;p<9;p++)t.add("alu",L(Te(.012,.1,.38),[-.32+p*.08,ut+.39,-.32]));t.add("rubber",ti([[.3,ut+.2,-.09],[.3,ut+.32,.12],[.37,1.5,$t-.08]],.018,.12,8));for(let p of[-.37,.37])t.add("aluDark",L(Te(.07,1.44,.09),[p,.72,$t])),t.add("graphite",L(Te(.16,.03,.18),[p,.015,$t]));t.add("aluDark",L(Te(.84,.09,.11),[0,1.44,$t])),t.add("chrome",L(Te(.76,.016,.016),[0,1.44,$t+.062])),t.add("hazard",L(Te(.84,.02,.112),[0,1.494,$t]));let s=new Ys({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:Jt,depthWrite:!1});for(let p of[-.335,.335])e.add(Ye(new xt(.5,.42),s,[p,1.17,$t],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Tt("laser-head",[0,1.44,$t]);e.add(r);let o=new lt;o.add("chrome",L(Le(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",L(Le(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",L(ae(.026,.02,.07,20),[0,-.24,0])),o.add("orange",L(Te(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(Sn+.004),c=Rl(12101375,0),u=Ye(ae(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new Ws(new Ms({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:Kn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,Sn+.008-1.44,0),r.add(d);let h=new C,f=0;return{update(p,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=$t+Math.sin(x*3.1+1)*.06*g;let b=m.working&&m.wafer?1:0;if(c.opacity=Kt(c.opacity,b*(.75+.25*Math.sin(x*60)),20,p),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,b)for(f+=p*40,d.getWorldPosition(h);f>1;)f-=1,i.sparks(h,1)}}}function lE(n,e,t){t.add("ceramic",L(Le(.52,.42,.36,.03),[-.12,ut+.27,-.34])),t.add("ceramic",L(Le(.4,.32,.18,.04),[-.12,ut+.27,-.5])),t.add("graphite",L(Le(.3,.06,.24,.01),[-.12,ut+.03,-.34])),t.add("graphite",L(Le(.48,.36,.01,.02),[-.12,ut+.27,-.158]));let i=mg();e.add(Ye(new xt(.4,.3),vl(i.tex,1.5),[-.12,ut+.27,-.151],null,null,{cast:!1})),t.add("plastic",L(Le(.46,.03,.16,.008),[-.1,ut+.015,.1])),e.add(Ye(new xt(.44,.14),kn(rE().tex,.1),[-.1,ut+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),Pf(t),t.add("steel",L(ae(.04,.04,.14,20),[0,1.26,$t]));let s=Tt("probe",[0,1.1,$t]);e.add(s),s.add(new lt().add("chrome",L(ae(.015,.015,.3,12),[0,.15,0])).add("graphite",L(ae(.13,.13,.018,48),[0,.009,0])).add("gold",L(ae(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=qt(4063119,.2);s.add(Ye(on(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=Kt(s.position.y,c.working&&c.wafer?Sn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function cE(n,e,t){t.add("graphite",L(ae(.13,.15,.08,40),[0,ut+.04,-.3]));let i=Tt("pan",[0,ut+.08,-.3]);e.add(i);let s=new lt;s.add("white",L(ae(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",L(Te(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",L(Te(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Tt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=Jt;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new lt;l.add("dish",Ii(a,64)),l.add("chrome",L(on(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",L(ae(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Dt+Math.PI/6;l.add("aluDark",iE([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",L(new Ss(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",L(ae(.03,.03,.05,18),[0,.37,0]));let c=Tt("dish",[0,.07,0]);r.add(c),r.add(new lt().add("aluDark",L(ae(.05,.05,.08,20),[0,.03,0]),L(ae(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=qt(10849535,.3);c.add(Ye(Af(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let b=Rl(10127103,0),v=Ye(on(.05,.004,6,40),b,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(v),{r:v,mat:b,age:g/3}});Pf(t),t.add("graphite",L(Le(.12,.08,.12,.012),[0,1.29,$t])),t.add("white",L(ae(.004,.004,.18,6),[.03,1.42,$t]));let h=qt(10849535,.2);e.add(Ye(Af(.012),h,[.03,1.515,$t],null,null,{cast:!1}));let f=0,p=0,x=0;return{update(m,g,b){b.working&&g>x&&(x=g+1.2+Math.random()*1.5,p=(Math.random()-.5)*1.6),b.working||(p=0),f=Kt(f,p,1.6,m),i.rotation.y=f,r.rotation.x=-.62+Math.sin(g*.7)*.05*b.work,u.emissiveIntensity=.3+b.work*3,h.emissiveIntensity=b.work*(Math.sin(g*10)>0?4:.4)+.2;for(let v of d){v.age+=m*.8,v.age>1&&(v.age-=1);let y=v.age;v.r.position.y=.42+y*.9,v.r.scale.setScalar(1+y*6),v.mat.opacity=b.work*(1-y)*.8}}}}var Af=n=>new An(n,16,10);function uE(n,e,t){t.add("graphite",L(Le(.5,.32,.34,.02),[.18,ut+.16,-.36])),t.add("aluDark",L(Le(.12,.18,.03,.01),[-.27,ut+.2,-.36]));let i=qt(5078015,.5);e.add(Ye(Te(.3,.02,.005),i,[.18,ut+.25,-.188],null,null,{cast:!1}));let s=[-.05,ut,.12],r=.38,o=.36,a=.1;t.add("graphite",L(ae(.09,.095,.04,32),[s[0],ut+.02,s[2]]));let l=Tt("j0",[s[0],ut+.04,s[2]]);e.add(l),l.add(new lt().add("white",L(ae(.07,.075,.13,32),[0,.065,0])).add("graphite",L(ae(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Tt("j1",[0,.16,0]);l.add(c),c.add(new lt().add("white",L(Le(.095,r,.095,.04),[0,r/2,0])).add("graphite",L(ae(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Tt("j2",[0,r,0]);c.add(u),u.add(new lt().add("white",L(Le(.078,o,.078,.035),[0,o/2,0])).add("graphite",L(ae(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Tt("j3",[0,o,0]);u.add(d),d.add(new lt().add("graphite",L(ae(.035,.035,.05,24),[0,.025,0])).add("chrome",L(ae(.03,.03,.012,24),[0,.056,0])).add("aluDark",L(Te(.012,.045,.03),[-.02,.08,0]),L(Te(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=qt(5078015,.6);d.add(Ye(on(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let f=ut+.04+.16,p=new C(0,f+.25,.25),x=new C;function m(g,b,v){let y=g-s[0],w=v-s[2];l.rotation.y=Math.atan2(y,w);let E=Math.hypot(y,w),_=b+a-f,M=ot(Math.hypot(E,_),.05,r+o-.001),A=Math.atan2(E,_),R=ot((M*M-r*r-o*o)/(2*r*o),-1,1),D=Math.acos(R),U=A-Math.atan2(o*Math.sin(D),r+o*Math.cos(D));c.rotation.x=U,u.rotation.x=D,d.rotation.x=Math.PI-U-D}return m(p.x,p.y,p.z),{update(g,b,v){v.working&&v.wafer?x.set(.08*Math.cos(b*1.7),Sn+.03+.06*Math.max(0,Math.sin(b*3.4)),$t-.04+.07*Math.sin(b*2.3)):v.working?x.set(.05*Math.sin(b*1.3),f+.12,$t-.3):x.set(-.05+.04*Math.sin(b*.6),f+.22,.32),p.x=Kt(p.x,x.x,4,g),p.y=Kt(p.y,x.y,4,g),p.z=Kt(p.z,x.z,4,g),m(p.x,p.y,p.z),h.emissiveIntensity=.6+v.work*2.6,i.emissiveIntensity=.5+v.work*(1+Math.sin(b*8))}}}function Rf(n){return n<.22?of(n/.22):n<.42?1:1-of((n-.42)/.58)}function dE(n,e,t){t.add("graphite",L(Le(.6,.28,.3,.02),[.14,ut+.14,-.38])),t.add("white",L(ae(.08,.08,.3,28),[.14,ut+.36,-.38],[0,0,Math.PI/2])),t.add("steel",L(ae(.06,.06,.24,24),[-.3,ut+.12,-.4])),t.add("blue",L(Le(.3,.86,.26,.03),[0,ut+.43,.02])),t.add("blue",L(Le(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",L(Te(.322,.04,.01),[0,1.6,.942])),t.add("steel",L(ae(.085,.085,.22,32),[0,1.45,$t])),t.add("chrome",L(on(.086,.008,8,32),[0,1.34,$t],[Math.PI/2,0,0])),t.add("rubber",ti([[.06,1.5,$t-.06],[.2,1.5,$t-.3],[.2,1.2,.2],[.2,ut+.3,-.2]],.016,.1,8)),t.add("rubber",ti([[-.06,1.42,$t-.06],[-.2,1.42,$t-.3],[-.2,1.1,.2],[-.2,ut+.28,-.22]],.016,.1,8));let i=Tt("ram",[0,1.12,$t]);e.add(i),i.add(new lt().add("chrome",L(ae(.035,.035,.42,20),[0,.21,0])).add("steel",L(Le(.32,.05,.32,.012),[0,0,0])).add("darkSteel",L(ae(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>L(ae(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=wl({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ye(new Tn(.07,40),new gt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ye(Te(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ye(on(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?Rf(o):0;i.position.y=1.12-.155*d,a=Kt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*Hi}}}function hE(n,e,t){for(let d of[-.42,.42])t.add("aluDark",L(Te(.035,.66,.035),[d,ut+.33,-.33]));t.add("alu",L(Le(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",L(Te(.6,.03,.06),[0,1.16,-.3])),t.add("blue",L(ae(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",L(ae(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=xg();e.add(Ye(new xt(.8,.6),new gt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Le(.11,.075,.008,.004),o=s.map(d=>{let h=Ye(r,new gt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,f)=>h.forEach((p,x)=>{let[m,g]=l(f,x),b=o[p];b.userData.tx=m,b.userData.ty=g,d&&b.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=Kt(h.position.x,h.userData.tx,7,d),h.position.y=Kt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function fE(n,e,t){t.add("graphite",L(ae(.07,.08,.04,28),[.3,ut+.02,-.35])),t.add("alu",L(ae(.028,.028,1,16),[.3,ut+.5,-.35])),t.add("graphite",L(ae(.09,.1,.06,32),[.3,ut+1.03,-.35]));let r=new Ys({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ye(ae(.08,.08,.13,32,!0),r,[.3,ut+1.125,-.35],null,null,{cast:!1})),e.add(Ye(new An(.08,32,12,0,Dt,0,Math.PI/2),r,[.3,ut+1.19,-.35],null,null,{cast:!1}));let o=Tt("spin",[.3,ut+1.12,-.35]);e.add(o),o.add(Ye(new Nn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=qt(16756782,.2);e.add(Ye(Af(.022),a,[.3,ut+1.12,-.35],null,null,{cast:!1}));let l=Rl(16753978,0),c=new Ss(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ye(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new Ys({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",L(Le(.36,.28,.12,.02),[-.2,ut+.14,.04])),t.add("grille",L(new xt(.12,.12),[-.28,ut+.15,.101])),t.add("steel",L(ae(.045,.045,.02,28),[-.1,ut+.15,.11],[Math.PI/2,0,0]));let d=qt(3461498,.3);return e.add(Ye(new An(.038,24,10,0,Dt,0,Math.PI/2),d,[-.1,ut+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,f,p){let x=p.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(f*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(f*5)>0?1:.2)}}}function pE(n,e,t){t.add("aluDark",L(Le(.72,.62,.04,.012),[0,ut+.31,-.4])),t.add("graphite",L(Le(.72,.06,.3,.012),[0,ut+.03,-.3]));let i=Tt("unwind",[-.16,ut+.4,-.31],[Math.PI/2,0,0]),s=Tt("rewind",[.2,ut+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=Ot(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new gt({map:r,roughness:.7});i.add(new lt().add("roll",ae(.15,.15,.1,48)).add("gold",ae(.05,.05,.11,24)).add("chrome",ae(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new lt().add("ceramic",ae(.075,.075,.1,40)).add("gold",ae(.035,.035,.11,20)).add("chrome",ae(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,ut+.52],[.05,ut+.3],[.28,ut+.42]])t.add("chrome",L(ae(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));Pf(t),t.add("steel",L(ae(.042,.042,.18,22),[0,1.24,$t])),t.add("chrome",L(on(.043,.006,6,24),[0,1.16,$t],[Math.PI/2,0,0]));let a=Tt("tamp",[0,1.08,$t]);e.add(a),a.add(new lt().add("chrome",L(ae(.016,.016,.3,12),[0,.15,0])).add("graphite",L(Le(.16,.025,.12,.006),[0,0,0])).add("gold",L(Te(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let f=l?Rf(l):0;a.position.y=1.08-(1.08-(Sn+.03))*f,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function mE(n,e,t){t.add("graphite",L(Le(.62,.86,.44,.02),[0,ut+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",L(Te(.016,.84,.01),[d,ut+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",L(Le(.56,.085,.02,.006),[0,ut+.07+d*.1,-.095]));t.add("grille",L(new xt(.36,.5),[.311,ut+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Dn(Te(.014,.01,.004),new Xt({color:16777215}),i*s),o=new bt,a=[],l=[new Be(3461498),new Be(3461498),new Be(5078015),new Be(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,ut+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let f=l[(d*7+h*3)%l.length].clone();a.push(f),r.setColorAt(d*s+h,f)}e.add(r);let c=new Be,u=0;return{update(d,h,f){if(u+=d,!(u<.08)){u=0;for(let p=0;p<a.length;p++){let x=f.working?Math.random()>.45:(p+Math.floor(h*.7))%9===0;c.copy(a[p]).multiplyScalar(x?3.2:.25),r.setColorAt(p,c)}r.instanceColor.needsUpdate=!0}}}}var gE={archive:oE,engraver:aE,terminal:lE,satellite:cE,robot:uE,press:dE,kanban:hE,beacon:fE,labeler:pE,generic:mE};function xE(n,e,t,i){let s=ci[e],r=Cf(t),o=qi(r,la),a=Tt(`station-${e}`,[o.x,0,o.z],[0,Og(r),0]);a.userData.solid=`station:${e}`;let l=new lt,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,L(Le(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",L(Le(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",L(Le(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",L(Te(.9,.01,.008),[0,.32,.252])),l.add("grille",L(new xt(.36,.1),[.24,.18,.251]));let[u,d]=nE[e]||[.44,-.5];l.add("alu",L(ae(.012,.012,.3,10),[u,ut+.15,d])),l.add("graphite",L(ae(.03,.03,.012,18),[u,ut+.46,d]));let h=gE[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let f=us(s.zh,s.en,s.code,tE[e]);a.add(Ye(new xt(.46,.13),kn(f.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let p=ad(384,144,{bg:"#03060c",glow:4});a.add(Ye(new xt(.36,.135),vl(p.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=qt(5078015,.4);a.add(Ye(Te(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((D,U)=>{let V=qt(D,.1);return a.add(Ye(ae(.028,.028,.045,18),V,[u,ut+.33+(2-U)*.05,d],null,null,{cast:!1})),V}),g=cd(n);g.root.position.set(0,0,$t),a.add(g.root),a.add(ni(n,1.25,1,[0,0,-.12],.55));let b=new Xt({visible:!1}),v=new it(new Gt(1.1,2,1.5),b);v.position.set(0,1,.1),a.add(v);let y={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},w=new Be,E=new Be(5078015),_=new Be(3461498),M=new Be(16726832),A=qi(r,fs+.05,Sn+.08);function R(){let D=y.status==="working"?"加工中 RUN":y.status==="error"?"故障 FAULT":"待机 IDLE",U=`${D}|${y.label}`;U!==y.screenKey&&(y.screenKey=U,p.set([{text:`${s.code}  ${D}`,size:30,color:y.status==="error"?"#ff8a80":y.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:y.label||"—",size:34,color:"#e8eefc",gap:58}]))}return R(),{kind:e,index:t,theta:r,root:a,port:qi(r,fs,Sn),anchor:qi(r,la+.12,2.1),hover:[{id:`station:${e}`,object:v}],setLabel(D){y.label=D||"",R()},onStart(D){y.label=D.label||D.name,h.onStart?.(D),R()},onEnd(D,U){y.flash=U?.9:2.2,y.flashOk=U,U||i.puff(A,10),h.onEnd?.(D,U)},update(D,U,V){y.work=Kt(y.work,V.working?1:0,3,D),y.flash=Math.max(0,y.flash-D);let P=y.flash>0&&!y.flashOk;y.status=V.working?"working":P?"error":"idle",R(),h.update(D,U,{working:V.working,wafer:V.wafer,work:y.work});let Z;y.flash>0?(w.copy(y.flashOk?_:M),Z=3.2*(y.flashOk?Math.min(1,y.flash*2):Math.sin(U*14)>0?1:.25)):(w.copy(E),Z=.25+y.work*(2.2+Math.sin(U*6)*.6)),g.led.emissive.copy(w),g.led.emissiveIntensity=Z,x.emissive.copy(w),x.emissiveIntensity=.25+Z*.6,m[0].emissiveIntensity=P?Math.sin(U*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+y.work*3.5,m[2].emissiveIntensity=!V.working&&!P?1.6:.08}}}function kg(n,e){let t=Tt("stations"),i=ld.map((r,o)=>xE(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var If=n=>us(Zt[n].zh,Zt[n].en,Zt[n].code),Mi=new C(7.45,0,ds),Ps=.83,Df=13,Cr=.4,Si=.36,ps=.4,Nf=.02,Of=.062,Ff=.02,Uf=[8.2,8.75,9.3],kf=[-.1,.45,1],$i=.55,Di=2.45,ud=Si+.046,Bg=1.9,yE=1.3,ro=9,zg=n=>((n-1)%ro+ro)%ro,Lf=(n,e=new C)=>e.set(Uf[n%3],$i,kf[Math.floor(n/3)]),Hg={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}};function vE(n,e,t,i){let s=i.info,r=s?Hg[s.status]||Hg.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Vt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Vt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Ft}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0,a=s&&s.files?s.files.length:0;n.fillText(`CALLS ${o} · FILES ${a}`,30,t*.64),n.fillStyle="#15171b";let l=30,c=(i.no||7)*2654435761;for(let u=0;l<e-16;u++){let d=1+((c>>>u%24^u)&3);u%2===0&&n.fillRect(l,t*.8,d,t*.13),l+=d+1}}function _E(n){let e=new lt,t=.03+(Si-.03)/2,i=Si-.03,s=-Cr/2+.008;e.add("graphite",L(Le(Cr,.03,ps,.008),[0,.015,0])),e.add("graphite",L(Te(.016,.022,ps),[s,Si-.011,0]),L(Te(.016,i,.02),[s,t,ps/2-.01]),L(Te(.016,i,.02),[s,t,-ps/2+.01])),e.add("graphite",L(Te(.06,.026,.06),[0,Si+.013,0]),L(Le(.17,.02,.17,.006),[0,Si+.036,0]));for(let l=0;l<Df;l++){let c=Of+l*Ff-.005;for(let u of[-1,1])e.add("plastic",L(Te(.3,.004,.05),[Nf,c,u*.165]))}let r=new lt().add("smoke",L(Te(Cr-.016,i,.01),[.008,t,ps/2-.005]),L(Te(Cr-.016,i,.01),[.008,t,-ps/2+.005]),L(Te(.01,i,ps-.02),[Cr/2-.005,t,0]),L(Te(Cr-.016,.01,ps-.02),[.008,Si-.005,0])),o=new Yt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new lt().add("white",L(Le(.02,Si-.045,ps-.03,.006),[0,0,0])).add("graphite",L(ae(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),L(ae(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(Si-.045)/2+.006,doorX:-Cr/2-.004}}function Gg(n,e){let t=Tt("stocker"),i=new Xt({visible:!1}),s=new Gt(Cr+.04,Si+.08,ps+.04),r=new xt(.28,.1225),o=_E(n),a=Tt("load-port",[Mi.x,0,Mi.z]);a.userData.solid="load-port",t.add(a);let l=new lt;l.add("white",L(Le(.56,Ps-.012,.62,.02),[0,(Ps-.012)/2,0])),l.add("graphite",L(Le(.44,.012,.44,.004),[0,Ps-.006,0]),L(Te(.58,.06,.64),[0,.03,0]));for(let z=0;z<3;z++){let W=z/3*Math.PI*2+.5;l.add("chrome",L(ae(.008,.012,.012,12),[Math.cos(W)*.13,Ps+.004,Math.sin(W)*.13]))}l.add("aluDark",L(Te(.04,.22,.04),[.24,Ps+.11,.27]),L(Te(.08,.03,.05),[.21,Ps+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=If("loadport");a.add(Ye(new xt(.44,.124),kn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((z,W)=>{let ce=qt(z,.15);return a.add(Ye(Te(.05,.016,.008),ce,[-.12+W*.12,.46,.312],null,null,{cast:!1})),ce});a.add(ni(n,.9,.95,[0,0,0],.5));let d=new it(new Gt(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new lt,f=(Uf[0]+Uf[2])/2,p=(kf[0]+kf[2])/2;h.add("graphite",L(Te(1.66,$i-.03,1.66),[f,($i-.03)/2,p])),h.add("white",L(Le(1.76,.03,1.76,.01),[f,$i-.015,p])),h.add("aluDark",L(Te(1.7,.05,1.7),[f,.025,p]));let x=[];for(let z=0;z<ro;z++){let W=Lf(z);h.add("aluDark",L(Le(.44,.008,.44,.003),[W.x,$i+.002,W.z]));for(let K=0;K<3;K++){let le=K/3*Math.PI*2+.5;h.add("chrome",L(ae(.007,.01,.01,10),[W.x+Math.cos(le)*.12,$i+.008,W.z+Math.sin(le)*.12]))}let ce=qt(3134074,0);t.add(Ye(Te(.12,.006,.012),ce,[W.x,$i+.004,W.z+.235],null,null,{cast:!1})),x.push(ce)}t.add(h.build(n,{name:"buffer-table"}));let m=If("stocker");t.add(Ye(new xt(.62,.175),kn(m.tex,.35),[f,$i*.55,p+.834],null,null,{cast:!1})),t.add(ni(n,2.3,2.3,[f,0,p],.55));let g=new it(new Gt(1.8,$i+.45,1.8),i);g.position.set(f,($i+.45)/2,p),t.add(g);let b=new lt,v=[7,10],y=[-.45,1.95];for(let z of v){for(let W of y)b.add("white",L(Te(.1,Di+.05,.1),[z,(Di+.05)/2,W])),b.add("graphite",L(Te(.22,.03,.22),[z,.015,W]));b.add("aluDark",L(Te(.09,.09,y[1]-y[0]+.1),[z,Di,(y[0]+y[1])/2]))}for(let z of y)b.add("steel",L(Te(v[1]-v[0]+.1,.09,.09),[(v[0]+v[1])/2,Di,z]));t.add(b.build(n,{name:"gantry"}));let w=If("gantry"),E=Ye(new xt(.9,.253),kn(w.tex,.35),[(v[0]+v[1])/2,Di-.2,y[1]+.047],null,null,{cast:!1});t.add(E),t.add(new lt().add("steel",L(Te(.02,.1,.02),[(v[0]+v[1])/2-.35,Di-.06,y[1]+.04]),L(Te(.02,.1,.02),[(v[0]+v[1])/2+.35,Di-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let _=Tt("bridge");t.add(_),_.add(new lt().add("blue",L(Te(.14,.12,y[1]-y[0]+.12),[0,Di+.105,(y[0]+y[1])/2])).add("graphite",L(Te(.26,.1,.13),[0,Di+.07,y[0]]),L(Te(.26,.1,.13),[0,Di+.07,y[1]])).build(n,{name:"bridge-beam"}));let M=Tt("trolley");_.add(M),M.add(new lt().add("graphite",L(Le(.28,.13,.26,.02),[0,Di-.035,0])).add("steel",L(ae(.045,.045,.2,20),[0,Di-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let A=ae(.0035,.0035,1,6),R=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([z,W])=>{let ce=Ye(A,n.steel,[z,1,W],null,null,{cast:!1});return M.add(ce),ce}),D=Tt("gripper");M.add(D),D.add(new lt().add("graphite",L(Le(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let U=[-1,1].map(z=>{let W=Ye(Te(.024,.06,.13),n.steel,[z*.115,-.01,0]);return D.add(W),W}),V=qt(5078015,.3);D.add(Ye(Te(.1,.008,.01),V,[0,.03,.122],null,null,{cast:!1}));let P={x:Mi.x,z:Mi.z,hook:Bg,grip:0,carry:null},Z=()=>{_.position.x=P.x,M.position.z=P.z,D.position.y=P.hook;let z=Di-.1,W=P.hook+.055,ce=Math.max(.01,z-W);for(let le of R)le.scale.y=ce,le.position.y=W+ce/2;let K=Pi(.115,.079,P.grip);U[0].position.x=-K,U[1].position.x=K,P.carry&&P.carry.g.position.set(P.x,P.hook-ud,P.z)},Q=new Set,J=new Array(ro).fill(null),$=null;function H(){let z=o.g.clone();z.name="foup";let W=o.door.clone();z.add(W);let ce=Ot(256,112,()=>{}),K=new gt({map:ce.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:ce.tex,emissiveIntensity:.18});z.add(Ye(r,K,[.01,Si-.075,ps/2+.002],null,null,{cast:!1}));let le=new it(s,i);le.position.set(0,Si/2+.02,0),z.add(le);let Ce={no:0,info:null,g:z,door:W,label:ce,labelMat:K,labelKey:"",proxy:le,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return X(Ce),Q.add(Ce),t.add(z),Ce}function X(z){let W=`${z.no}|${z.info?`${z.info.status}|${z.info.calls}|${(z.info.files||[]).length}`:"-"}|${z.count}`;W!==z.labelKey&&(z.labelKey=W,z.proxy.userData.hoverId=z.no?`foup:${z.no}`:"loadport",z.label.redraw((ce,K,le)=>vE(ce,K,le,z)))}function N(z,W){let ce=z.count;if(z.count+=1,z.looks.push(W),ce<Df){let K=e.create(W);K.position.set(Nf,Of+ce*Ff,0),z.g.add(K),z.slots.push(K)}X(z)}function q(z){Q.delete(z),t.remove(z.g),z.label.tex.dispose(),z.labelMat.dispose();for(let W=0;W<ro;W++)J[W]===z&&(J[W]=null);$===z&&($=null)}function re(z){let W=z.doorOpen,ce=ot(W/.25,0,1),K=Gi(ot((W-.25)/.75,0,1));z.door.position.set(o.doorX-.018*ce,o.doorY-.43*K,0)}function j(z=!1){let W=H();return W.g.position.set(Mi.x,Ps,Mi.z),W.state=z?"dock":"spawning",W.sp=z?1:0,W.doorOpen=z?1:0,re(W),$=W,W}function he(z,W){let ce=J[W];ce&&ce!==z&&q(ce),J[W]=z;let K=Lf(W);z.g.position.copy(K),z.state="nest",z.doorOpen=0,re(z)}let ve=[],ee=null,ge=z=>({setup:()=>(z(),{d:0,fn:null})}),Ne=(z,W,ce=1.6)=>({setup(){let K=P.x,le=P.z,Ce=Math.hypot(z-K,W-le);return{d:Ce<.001?0:Math.max(.35,Ce/ce),fn:F=>(P.x=Pi(K,z,F),P.z=Pi(le,W,F))}}}),at=(z,W)=>({setup(){let ce=P.hook;return{d:Math.abs(z-ce)<.001?0:W,fn:K=>P.hook=Pi(ce,z,K)}}}),Ge=(z,W=.3)=>({setup(){let ce=P.grip;return{d:W,fn:K=>P.grip=Pi(ce,z,K)}}}),et=(z,W,ce=.55)=>({setup(){let K=z.doorOpen;return{d:ce,fn:le=>(z.doorOpen=Pi(K,W,le),re(z))}}});function ue(z){let W=zg(z.no),ce=Lf(W);return{i:0,steps:[ge(()=>z.state="closing"),et(z,0),Ne(Mi.x,Mi.z),at(Ps+ud,.6),Ge(1),ge(()=>(P.carry=z,z.state="carried",V.emissiveIntensity=2.2)),at(yE+ud,.9),ge(()=>{$===z&&($=null),j();let K=J[W];K&&K!==z&&(K.state="sink",K.sp=0,J[W]=null)}),Ne(ce.x,ce.z),at($i+ud,.8),ge(()=>{P.carry=null,V.emissiveIntensity=.3,J[W]&&J[W]!==z&&q(J[W]),he(z,W)}),Ge(0),at(Bg,.5),Ne(Mi.x,Mi.z)]}}let oe={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new C(Mi.x,1.1,Mi.z),stocker:new C(f,.9,p)},speed:1,hoverObjects(z=[]){for(let W of Q)W.no&&z.push(W.proxy);return z},dockReady:()=>!!$&&$.state==="dock"&&$.doorOpen>=1,dockTurn:()=>$&&$.no||null,dockCount:()=>$?$.count:0,bindDock(z,W){return!$||$.no?!1:($.no=z,$.info=W||null,X($),!0)},slotPoint(z,W=new C){let ce=$?$.g.position:new C(Mi.x,Ps,Mi.z);return W.set(ce.x+Nf,ce.y+Of+Math.min(z,Df-1)*Ff,ce.z)},addWafer(z){$&&N($,z)},addLate(z,W){for(let ce of Q)if(ce.no===z&&ce.state!=="sink")return N(ce,W),!0;return!1},updateInfo(z,W){for(let ce of Q)ce.no===z&&(ce.info=W,X(ce))},ship(z){return!$||$.no!==z||ve.includes($)||ee&&ee.foup===$?!1:(ve.push($),!0)},shipped:z=>{for(let W of Q)if(W.no===z)return W.state==="carried"||W.state==="nest"||W.state==="sink"||ve.includes(W)||ee&&ee.foup===W;return!1},placeNest(z,W,ce){let K=H();K.no=z,K.info=W;for(let le of ce)N(K,le);he(K,zg(z)),X(K)},resetDock(z,W,ce){$&&q($);let K=j(!0);if(z){K.no=z,K.info=W;for(let le of ce||[])N(K,le)}X(K)},busy:()=>!!ee||ve.length>0,update(z){if(!ee&&ve.length){let K=ve.shift();ee=ue(K),ee.foup=K}let W=z*oe.speed;for(;ee&&W>0;){let K=ee.steps[ee.i];if(!K){ee=null;break}if(K.run||(K.run=K.setup(),K.t=0),!K.run.d){K.run.fn&&K.run.fn(1),ee.i+=1;continue}let le=Math.min(W,K.run.d-K.t);K.t+=le,W-=le,K.run.fn&&K.run.fn(Gi(ot(K.t/K.run.d,0,1))),K.t>=K.run.d-1e-6&&(ee.i+=1)}Z();for(let K of[...Q])K.state==="spawning"?(K.sp=Math.min(1,K.sp+z/.8),K.g.position.y=Ps-(Si+.07)*(1-Gi(K.sp)),K.sp>=1&&(K.state="dock")):K.state==="dock"&&K.doorOpen<1?(K.doorOpen=Math.min(1,K.doorOpen+z/.6),re(K)):K.state==="sink"&&(K.sp=Math.min(1,K.sp+z/1.2),K.g.position.y=$i-(Si+.09)*Gi(K.sp),K.sp>=1&&q(K));for(let K=0;K<ro;K++)x[K].emissiveIntensity=J[K]?1.6:0;let ce=!!ee;u[0].emissiveIntensity=oe.dockReady()?1.8:.15,u[1].emissiveIntensity=$&&$.state==="closing"?2.2:.15,u[2].emissiveIntensity=ce?1.8:.15},dispose(){for(let z of[...Q])q(z);for(let z of[o.g,o.door])z.traverse(W=>W.geometry&&W.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return Z(),oe}function Vg(n){let e=new Yt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new Ms({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?Kn:Ts}),h=new Ws(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new C,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new C((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new C(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var Wg=.15,bE=.006;function Xg(n){let e=new Nn(Wg,Wg,bE,40,1,!1),t=new gt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new it(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Bf=.34,dd=.17,qg=4,ME=2.4,SE=.55,wE=.9,zf=.03,EE=5,hd=-.006,TE=12,AE=.4,RE=3,CE=1.5,PE=9,IE=new Be(16756768),LE=new Be(3461498),Cl=(n,e=n.kind)=>n.status==="error"?"bad":ra.has(e)?"gold":"normal";function $g(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=Cl(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,(n.files?n.files.length:0)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var fd=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new ju(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Bf-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-dd,r=this.gateOut+dd,o=this.items.find(p=>p.s>s+1e-6&&p.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let p of this.items){let x=d?d.s-Bf:this.end,m=!d||d.s-Bf>=r;if(p.cycled)p.s<r&&(p.s<=this.gateOut-dd+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(p.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),p.s<=s+1e-6){let b=!o&&this.doorOut<=.05;b&&h&&p.s>=s-.9&&(a=!0),(!b||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else p.s<this.gateIn+dd&&(a=!0);p.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(p.dwell+=e*t,c=!0,p.dwell>=SE&&(p.cycled=!0))}let g=x-p.s;if(g<=1e-5)p.v=0;else{let b=Math.min(ME*t,Math.sqrt(2*qg*g));p.v=Math.min(b,p.v+qg*t*e),p.s=Math.min(x,p.s+p.v*e),u=!0}p.arrivedAt==null&&p.s>=this.end-1e-4&&(p.arrivedAt=i),d=p}let f=5*e*t;this.doorIn=ot(this.doorIn+(a?f:-f),0,1),this.doorOut=ot(this.doorOut+(l?f:-f),0,1),this.cycling=c,this.moving=u}};function Yg({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new C,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=ot(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new fd([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),f=ot((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),p=new fd([o.outPort,o.outCenter,o.trackEnd],{gateIn:f*h,gateOut:h+.45,stop:h}),x=F=>e.byKind[F.kind]?F.kind:"generic",m=new Map,g=new Set,b=new Map,v=Object.fromEntries(e.list.map(F=>[F.kind,new Array(EE).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},w={inbound:0,outbound:0,robot:!1,stocker:!1},E={},_=[],M=0,A=0,R=!0,D=0,U=1,V=null;function P(F){let ie=b.get(F);return ie||(ie={no:F,status:"running",info:null,shipped:!1,pending:[]},b.set(F,ie)),ie}let Z=F=>F.status!=="running"||F.no<M,Q=F=>{for(let ie of m.values())if(ie.turn===F)return!0;return!1};function J(F){let ie={id:F.id,call:F,kind:x(F),turn:F.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:Sn,waitT:0};return m.set(F.id,ie),P(F.turn),ie}function $(F){F.mesh&&(r.remove(F.mesh),F.mesh=null)}function H(F){F.stage="stored",m.delete(F.id),g.add(F.id)}function X(F){F.signaled||(F.signaled=!0,e.byKind[F.kind].onEnd(F.call,F.call.status!=="error"))}function N(F,ie){t.addLate(F,ie)||P(F).pending.push(ie)}function q(F){F.it&&(d.remove(F.it),p.remove(F.it),F.it=null),F.level>=0&&(v[F.kind][F.level]=null,F.level=-1),y.carry===F&&(y.carry=null),$(F),X(F),N(F.turn,Cl(F.call,F.kind)),H(F)}let re=F=>v[F].indexOf(null);function j(F,ie){let de=e.byKind[F.kind];v[F.kind][ie]=F,F.level=ie,F.stage="station",F.arriveT=D,F.mesh||(F.mesh=s.create("raw"),r.add(F.mesh)),F.mesh.position.set(de.port.x,Sn+ie*zf,de.port.z)}function he(){for(let F of m.values())$(F);m.clear(),g.clear(),b.clear(),d.items.length=0,p.items.length=0;for(let F of Object.keys(v))v[F].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),V=null}function ve(F){E={},_=[];for(let ie of F.calls){if(ie.status!=="running")continue;let de=x(ie);E[de]=(E[de]||0)+1,_.push(ie)}M=F.turns.length?F.turns[F.turns.length-1].no:0}function ee(F){he();for(let O of F.turns)Object.assign(P(O.no),{info:O,status:O.status});let ie=F.turns.filter(O=>O.status!=="running");for(let O of ie)P(O.no).shipped=!0;for(let O of ie.slice(-PE))t.placeNest(O.no,O,$g(O,F.calls));let de=F.turns.find(O=>O.status==="running")||null;de?t.resetDock(de.no,de,$g(de,F.calls)):t.resetDock(null,null,[]);for(let O of F.calls){if(O.status!=="running"){g.add(O.id);continue}let Ze=J(O),ct=re(Ze.kind);ct>=0&&j(Ze,ct),e.byKind[Ze.kind].onStart(O)}ve(F)}function ge(F){if(!F)return;if(R||F.turnCount<A){R=!1,A=F.turnCount,ee(F);return}A=F.turnCount;for(let de of F.turns){let O=P(de.no);O.info=de,O.status=de.status,t.updateInfo(de.no,de)}let ie=new Set;for(let de of F.calls){ie.add(de.id);let O=m.get(de.id);O?O.call=de:g.has(de.id)||(J(de),e.byKind[x(de)].onStart(de))}for(let de of g)ie.has(de)||g.delete(de);ve(F)}let Ne=(F,ie)=>({yaw:F,reach:so,lift:ie,d:(de,O)=>Math.max(.18,Math.abs(af(de.yaw,O.yaw))/4)});function at(F,ie){let de=e.byKind[F.kind];v[F.kind][ie]=F,F.level=ie;let O=ie*zf;return{type:"deliver",job:F,from:Zt.lock.code,to:ci[F.kind].code,steps:[Ne(io,hd),{reach:fs,d:.38},{lift:Al,d:.15,onStart(){d.remove(F.it),F.it=null,F.stage="carried",F.restY=Sn,y.carry=F},onEnd:()=>F.restY=0},{reach:so,d:.32},Ne(de.theta,O+Al),{reach:fs,d:.38},{lift:O+hd,d:.15,onStart:()=>F.restY=Sn+O,onEnd(){y.carry=null,j(F,ie)}},{reach:so,d:.32}]}}function Ge(F){let ie=e.byKind[F.kind],de=F.level,O=de*zf;return F.reserved=!0,{type:"collect",job:F,from:ci[F.kind].code,to:Zt.unload.code,steps:[Ne(ie.theta,O+hd),{reach:fs,d:.38},{lift:O+Al,d:.15,onStart(){v[F.kind][de]=null,F.level=-1,F.stage="carried",F.restY=Sn+O,y.carry=F},onEnd:()=>F.restY=0},{reach:so,d:.32},Ne(ca,Al),{reach:fs,d:.38},{lift:hd,d:.15,onStart:()=>F.restY=Sn,onEnd(){y.carry=null,F.it=p.add(F),F.stage="out"}},{reach:so,d:.32}]}}function et(){let F=null,ie=d.head();if(d.atEnd(ie)){let de=re(ie.job.kind);de>=0&&(F={type:"deliver",job:ie.job,k:de,ready:ie.arrivedAt??D})}if(p.tailFree())for(let de of m.values())de.stage==="station"&&de.processed&&!de.reserved&&(!F||de.processedAt<F.ready)&&(F={type:"collect",job:de,ready:de.processedAt});return F?F.type==="deliver"?at(F.job,F.k):Ge(F.job):null}function ue(F){let ie=n.robot;if(!y.task){let Ze=et();Ze?(y.task=Ze,y.steps=Ze.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,ie.setBusy(!0)):(y.idle+=F,y.idle>CE&&!y.homed&&!y.cur&&(y.steps=[Ne(io,0)],y.homed=!0))}let de=F,O=0;for(;de>0&&O++<32;){if(!y.cur){let Re=y.steps.shift();if(!Re)break;let Ee={yaw:ie.pose.yaw,reach:ie.pose.reach,lift:ie.pose.lift},Ae={yaw:Re.yaw??Ee.yaw,reach:Re.reach??Ee.reach,lift:Re.lift??Ee.lift},Ie=typeof Re.d=="function"?Re.d(Ee,Ae):Re.d;y.cur={st:Re,from:Ee,to:Ae,d:Ie/U,t:0},Re.onStart&&Re.onStart()}let Ze=y.cur,ct=Math.min(de,Ze.d-Ze.t);Ze.t+=ct,de-=ct;let yt=Ze.d>0?Gi(Ze.t/Ze.d):1;ie.setPose(Ze.from.yaw+af(Ze.from.yaw,Ze.to.yaw)*yt,Pi(Ze.from.reach,Ze.to.reach,yt),Pi(Ze.from.lift,Ze.to.lift,yt)),Ze.t>=Ze.d-1e-6&&(y.cur=null,Ze.st.onEnd&&Ze.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,ie.setBusy(!1)),ie.setStatus){let Ze=y.task,ct=!!y.cur||y.steps.length>0,yt=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;Ze?ie.setStatus(Ze.type,Ze.from,Ze.to,yt):ie.setStatus(ct?"home":"idle",null,ct?Zt.lock.code:null,null)}y.carry&&y.carry.mesh&&(ie.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function oe(){for(let F of m.values())F.stage!=="station"||F.processed||F.call.status==="running"||D<F.arriveT+wE/U||(F.processed=!0,F.processedAt=D,s.setLook(F.mesh,Cl(F.call,F.kind)),X(F))}function z(F,ie){p.remove(ie),F.it=null,F.stage="transfer",V={j:F,t:0,d:AE/U,from:F.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new C)}}function W(F){if(!V)return;V.t+=F;let ie=Gi(V.t/V.d),de=V.j.mesh;if(de.position.lerpVectors(V.from,V.to,ie),de.position.y+=Math.sin(Math.PI*ie)*.025,V.t>=V.d){let O=V.j;V=null,$(O),t.dockTurn()===O.turn?t.addWafer(Cl(O.call,O.kind)):N(O.turn,Cl(O.call,O.kind)),H(O)}}function ce(F){if(t.dockReady()&&t.dockTurn()==null){let O=null;for(let Ze of b.values())!Ze.shipped&&(!O||Ze.no<O.no)&&(O=Ze);if(O){t.bindDock(O.no,O.info);for(let Ze of O.pending.splice(0))t.addWafer(Ze)}}let ie=t.dockTurn();if(ie!=null&&!V&&t.dockReady()){let O=P(ie);!O.shipped&&Z(O)&&!Q(ie)&&t.ship(ie)&&(O.shipped=!0)}let de=p.head();if(!V&&p.atEnd(de)){let O=de.job;P(O.turn).shipped?q(O):t.dockReady()&&t.dockTurn()===O.turn?z(O,de):(O.waitT+=F,O.waitT>RE&&ie!=null&&ie!==O.turn&&t.dockReady()&&t.ship(ie)&&(P(ie).shipped=!0))}}function K(){let F=m.size-TE;if(!(F<=0))for(let ie of m.values()){if(F<=0)break;ie.stage==="spawn"&&ie.call.status!=="running"&&(q(ie),F-=1)}}function le(){if(d.tailFree()){for(let F of m.values())if(F.stage==="spawn"){F.mesh=s.create("raw"),r.add(F.mesh),F.it=d.add(F),F.stage="in",d.path.at(0,F.mesh.position),i.pulseDispenser();return}}}function Ce(F,ie,de){F.emissive.copy(ie?IE:LE),F.emissiveIntensity=ie?1.6+Math.sin(de*10)*.8:.6}return t.resetDock(null,null,[]),{sync:ge,update(F,ie){D=ie,U=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=U,K(),le(),d.update(F,U,D),p.update(F,U,D),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(p.doorOut,p.doorIn),Ce(n.lock.led,d.cycling,ie),Ce(n.unload.led,p.cycling,ie),n.trackLed.emissiveIntensity=d.moving||p.moving?1.8+Math.sin(ie*8)*.4:1,oe(),ue(F),ce(F),W(F);for(let de of d.items)d.path.at(de.s,de.job.mesh.position);for(let de of p.items)p.path.at(de.s,de.job.mesh.position);for(let de of e.list){let O=!1,Ze=!1;for(let yt of v[de.kind])yt&&yt.stage==="station"&&(O=!0,yt.processed||(Ze=!0));let ct=(E[de.kind]||0)>0||Ze;de.active=ct,de.update(F,ie,{working:ct,wafer:O})}t.update(F)},activity(){return w.inbound=d.items.length,w.outbound=p.items.length,w.robot=!!y.task||!!y.cur,w.stocker=!!V||t.busy(),w},focus(F){let ie=null;for(let de of _)(!ie||(de.startedAt||0)>=(ie.startedAt||0))&&(ie=de);if(ie){let de=e.byKind[x(ie)];return F.copy(de.anchor),`station:${de.kind}`}return y.task?(F.copy(n.anchors.robot),"robot"):V||t.busy()?(F.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||_.length>0||!!y.task||!!y.cur||y.steps.length>0||!!V||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:p.items.length,robot:y.task?y.task.type:"idle",transfer:!!V,dock:t.dockTurn(),rush:U,stages:[...m.values()].reduce((F,ie)=>(F[ie.stage]=(F[ie.stage]||0)+1,F),{})}},dispose(){for(let F of m.values())$(F);m.clear()}}}function Qt(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function Cn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function Yi(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function Kg(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function Zg(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var Hf={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function Is(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?Hf["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?Hf["deepseek-flash"]:null:t?Hf["deepseek-flash"]:null}function nr(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function Pl(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function pd(n){if(!n||typeof n!="object")return null;let e={miss:Pl(n.inputTokens),hit:Pl(n.cacheReadTokens),write:Pl(n.cacheWriteTokens),output:Pl(n.outputTokens),reasoning:Pl(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function md(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function Jg(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function gd(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var DE=60,jg=40,NE=200;function Vf(){return{v:0,provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],firstAt:0,lastAt:0}}function OE(n){let e=n&&n.time;if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}function xd(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function yd(n,e){return n.length>e?n.slice(n.length-e):n}function Qg(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],added:0,removed:0}}function Gf(n,e,t){let i=n.turns[n.turns.length-1];if(i&&i.status==="running")return n;let s=n.turnCount+1;return{...n,turnCount:s,turns:yd([...n.turns,Qg(s,t??s,e)],jg)}}function FE(n,e){let t=n.findIndex(s=>s.path===e.path);if(t<0)return[...n,{path:e.path,added:e.added,removed:e.removed}];let i=n.slice();return i[t]={...i[t],added:i[t].added+e.added,removed:i[t].removed+e.removed},i}var UE=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function kE(n,e){if(!e||typeof e.type!="string")return n;let t=e.data&&typeof e.data=="object"?e.data:{},i=OE(e),s={...n,v:n.v+1,lastAt:i,firstAt:n.firstAt||i};switch(e.type){case"request/header":{let r=t.header&&t.header.config||{};return typeof r.model=="string"&&(s.model=r.model),typeof r.provider=="string"&&(s.provider=r.provider),typeof r.reasoningEffort=="string"&&(s.effort=r.reasoningEffort),s}case"request/context":return typeof t.model=="string"&&(s.model=t.model),typeof t.provider=="string"&&(s.provider=t.provider),typeof t.contextWindow=="number"&&t.contextWindow>0&&(s.contextWindow=t.contextWindow),s;case"turn/start":{let r=s.turns[s.turns.length-1];r&&r.status==="running"&&(s.turns=xd(s.turns,a=>({...a,status:"ok",endedAt:i})));let o=s.turnCount+1;return s.turnCount=o,s.turns=yd([...s.turns,Qg(o,typeof t.turn=="number"?t.turn:o,i)],jg),s.phase="thinking",s}case"step/start":return s=Gf(s,i,t.turn),s.phase="thinking",s;case"assistant/message":{s=Gf(s,i,t.turn);let r=pd(t.usage);if(s.phase="idle",!r)return s;let o=Is(s.provider,s.model),a=nr(i),l=md(r,o,a),c=s.totals;return s.totals={miss:c.miss+r.miss,hit:c.hit+r.hit,write:c.write+r.write,output:c.output+r.output,reasoning:c.reasoning+r.reasoning,requests:c.requests+1,cost:c.cost+l,costPeak:c.costPeak+(a?l:0),costOffPeak:c.costOffPeak+(a?0:l),savings:c.savings+Jg(r,o,a)},s.contextTokens=r.miss+r.hit+r.write+r.output,s.turns=xd(s.turns,u=>({...u,miss:u.miss+r.miss,hit:u.hit+r.hit,write:u.write+r.write,output:u.output+r.output,reasoning:u.reasoning+r.reasoning,cost:u.cost+l,requests:u.requests+1})),s}case"tool/call":{s=Gf(s,i,t.turn);let r=String(t.callId??t.id??`call-${s.v}`);if(s.calls.some(u=>u.id===r))return s;let o=String(t.name||"tool"),a=bg(o),l=ra.has(a)?wg(o,t.arguments):null,c={id:r,name:o,kind:a,label:Sg(o,t.arguments),turn:s.turns[s.turns.length-1].no,startedAt:i,endedAt:0,status:"running",change:l};return s.calls=yd([...s.calls,c],DE),s.tools={...s.tools,calls:s.tools.calls+1,running:s.tools.running+1,byKind:{...s.tools.byKind,[a]:(s.tools.byKind[a]||0)+1}},s.turns=xd(s.turns,u=>({...u,calls:u.calls+1})),s.phase="tool",s}case"tool/result":{let r=t.message&&typeof t.message=="object"?t.message:{},o=String(r.toolCallId??t.callId??""),a=s.calls.findIndex(h=>h.id===o);if(a<0||s.calls[a].status!=="running")return s;let l=!!t.error||r.isError===!0,c={...s.calls[a],status:l?"error":"ok",endedAt:i};s.calls=s.calls.slice(),s.calls[a]=c;let u=Math.max(0,s.tools.running-1);s.tools={...s.tools,running:u,errors:s.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=s.files.paths.includes(d.path);s.files={count:s.files.count+(h?0:1),added:s.files.added+d.added,removed:s.files.removed+d.removed,paths:h?s.files.paths:yd([...s.files.paths,d.path],NE)}}return s.turns=s.turns.map(h=>{if(h.no!==c.turn)return h;let f={...h,errors:h.errors+(l?1:0)};return d&&(f.files=FE(h.files,d),f.added=h.added+d.added,f.removed=h.removed+d.removed),f}),u===0&&(s.phase="thinking"),s}case"turn/end":{let r=t.reason&&typeof t.reason=="object"?t.reason.kind:void 0,o=UE.has(r)?"rework":"ok",a=s.turns[s.turns.length-1];if(a&&a.status==="running"&&(s.turns=xd(s.turns,l=>({...l,status:o,endedAt:i})),s.calls.some(l=>l.status==="running"&&l.turn===a.no))){let l=0;s.calls=s.calls.map(c=>c.status!=="running"||c.turn!==a.no?c:(l++,{...c,status:"error",endedAt:i})),s.tools={...s.tools,running:Math.max(0,s.tools.running-l),errors:s.tools.errors+l}}return s.phase="idle",s}default:return n}}function Wf(n,e){let t=n;for(let i of e)t=kE(t,i);return t}function vd(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:n.tools.calls-n.tools.running>0?(n.tools.calls-n.tools.running-n.tools.errors)/(n.tools.calls-n.tools.running):1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:(()=>{let r=n.turns.filter(o=>o.status!=="running");return r.length?r.filter(o=>o.status==="ok").length/r.length:1})()}}var pt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},bd={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:pt.violet},reasoning:{zh:"推理",en:"REASONING",color:pt.violet},generating:{zh:"生成",en:"GENERATING",color:pt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:pt.amber}},Xf=td(),ex=120,tx=90,BE=[20,50,100,150,200,300,500,1e3,2e3],zE=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],nx=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function Ll(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function qf(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function ix(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Vt}`,n.fillStyle=pt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Ft}`,n.fillStyle=pt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Ft}`,n.fillStyle=o||pt.muted,n.fillText(r,e-36,39))}function ir(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Vt}`,n.fillStyle=pt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Ft}`,n.fillStyle=pt.dim,r==="left"&&n.fillText(s,e+a,t)}function sx(n,e,t,i,s,r=96,o="",a=pt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Ft}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Ft}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function rx(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Ft}`,n.fillStyle=pt.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),f=x=>t+s-s*ot(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),f(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let p=n.createLinearGradient(0,t,0,t+s);p.addColorStop(0,a),p.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=p,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),f(r[x])):n.moveTo(h(x),f(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function _d(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),ir(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Ft}`,n.fillStyle=pt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Ft}`,n.fillStyle=pt.muted,n.fillText(l,e+20,t+s-14))}function HE(n,e,t,i){Ll(n,e,t);let s=bd[i.phase]||bd.idle;ix(n,e,"令牌流量","TOKEN FLOW",pt.cyan,`● ${s.zh} ${s.en}`,s.color),ir(n,36,122,"实时速率","LIVE RATE"),sx(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",pt.cyan,104,"tok/s"),ir(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Ft}`,n.fillStyle=pt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=nx(Math.max(20,...i.tpsHist)*1.15,BE);rx(n,470,104,e-470-40,236,i.tpsHist,{color:pt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Ft}`,n.fillStyle=pt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;_d(n,36,a,o,l,"输入","INPUT",Qt(c.miss+c.write),"未命中缓存 · MISS",pt.blue),_d(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",Qt(c.hit),`命中率 ${Yi(i.hitRate)}`,pt.green),_d(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",Qt(c.output),`请求 ${c.requests}`,pt.cyan),_d(n,36+(o+16)*3,a,o,l,"推理","REASONING",Qt(c.reasoning),"思考链 · THINKING",pt.violet),qf(n,e,t,pt.cyan)}function Il(n,e,t,i,s,r,o,a,l){ir(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Ft}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Ft}`,n.fillStyle=pt.muted,n.fillText(a,e,t+112))}function GE(n,e,t,i){Ll(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,pt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Vt}`,n.fillStyle=pt.text,n.shadowColor=pt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Ft}`,n.fillStyle=pt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let b="演示数据 · DEMO DATA";n.font=`700 22px ${Vt}`;let v=n.measureText(b).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,v,40),n.strokeStyle=pt.amber,n.lineWidth=2,n.strokeRect(y+1,29,v-2,38),n.fillStyle=pt.amber,n.fillText(b,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Ft}`,n.fillStyle=pt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=bd[i.phase]||bd.idle,a=(e-80)/5,l=148;Il(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),Il(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,pt.text),Il(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${Yi(i.toolSuccess)}`,pt.cyan),Il(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,pt.gold),Il(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,pt.blue);let c=330;ir(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,f=116,p=c+22,x=i.recent.slice(-u),m=u-x.length;for(let b=0;b<u;b++){let v=40+b*(h+d),y=x[b-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(v+1,p+1,h-2,f-2);continue}let w=y.status==="running"?pt.cyan:y.status==="error"?pt.red:ra.has(y.kind)?pt.gold:pt.blue,E=n.createLinearGradient(0,p,0,p+f);E.addColorStop(0,w),E.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=E,n.fillRect(v,p,h,f),n.globalAlpha=1,n.fillStyle=w,n.fillRect(v,p+f-6,h,6);let _=ci[y.kind]||ci.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Ft}`,n.fillStyle="#ffffff",n.fillText(_.code.replace("ST-",""),v+h/2,p+f/2-6)}let g=x[x.length-1];if(g){let b=ci[g.kind]||ci.generic,v=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Vt}`,n.fillStyle=pt.text;let y=String(g.label||g.name||"").slice(0,60);n.fillText(`${b.code} ${b.zh} · ${y}`,40,p+f+52),n.textAlign="right",n.font=`700 22px ${Ft}`,n.fillStyle=g.status==="running"?pt.cyan:g.status==="error"?pt.red:pt.green,n.fillText(v,e-40,p+f+52)}qf(n,e,t,pt.cyan)}function VE(n,e,t,i){Ll(n,e,t),ix(n,e,"成本与上下文","COST & CONTEXT",pt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?pt.amber:pt.green),ir(n,36,122,"累计花费","TOTAL COST"),sx(n,36,226,i.priced?Cn(i.cost):"—",pt.gold,90),n.font=`600 22px ${Ft}`,n.fillStyle=pt.muted,n.textAlign="left",n.fillText(`高峰 ${Cn(i.costPeak)} · 低谷 ${Cn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=nx(Math.max(.01,...i.costHist)*1.15,zE);rx(n,480,104,e-480-40,200,i.costHist,{color:pt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>Cn(d)}),n.font=`600 17px ${Ft}`,n.fillStyle=pt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;ir(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Ft}`,n.fillStyle=pt.text,n.fillText(i.window?`${Qt(i.ctx)} / ${Qt(i.window)} · ${Yi(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?pt.red:i.ratio>=.6?pt.amber:pt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*ot(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;ir(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Ft}`,n.fillStyle=pt.green,n.fillText(i.priced?Cn(i.savings):"—",330,u+2),ir(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Ft}`,n.fillStyle=pt.text,n.fillText(Yi(i.hitRate),e-36,u+2),qf(n,e,t,pt.gold)}var WE={flow:HE,main:GE,cost:VE};function ox(n,e,{demo:t=!1}={}){let i=new Yt;i.name="screens";let s=[],r=new gt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),o=tt.screenR;for(let v of Xf){let[y,w]=v.px,E=Ot(y,w,(D,U,V)=>Ll(D,U,V),{anisotropy:8}),_=new Xt({map:E.tex,name:`screen-${v.id}`,toneMapped:!1});_.color.setScalar(1.25);let M=new it(Ut(Xe.cx,Xe.cz,o,v.a0,v.a1,v.y0,v.y1,48,!0),_);M.name=`screen-${v.id}`,M.userData.screenId=v.id,i.add(M);let A=.05/o,R=new it(Ut(Xe.cx,Xe.cz,o+.015,v.a0-A,v.a1+A,v.y0-.05,v.y1+.05,48,!0),r);R.name=`screen-bezel-${v.id}`,R.layers.set(cn),i.add(R),M.userData.noHighlight=!0,s.push({def:v,tex:E,sig:"",draw:WE[v.id],panel:M,scale:1})}let a=null,l=(v,y)=>v.tex.redraw(w=>{v.scale!==1&&w.scale(v.scale,v.scale),v.draw(w,v.def.px[0],v.def.px[1],y)}),c=new Array(ex).fill(0),u=new Array(tx).fill(0),d=0,h=0,f=0,p=0,x=0,m=!1;function g(v){let y=v.state,w=v.live||{},E=w.phase&&w.phase!=="idle"?w.phase:y?y.phase:"idle",_=y?y.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},M=y?vd(y):{hitRate:0,toolSuccess:1,contextRatio:0},A=y?y.turns:[];return{demo:t,phase:E,tps:v.tps||0,peakTps:p,tpsHist:c,costHist:u,totals:_,hitRate:M.hitRate,toolSuccess:M.toolSuccess,model:y?y.model:"",effort:y?y.effort:"",turn:y?y.turnCount:0,ok:A.filter(R=>R.status==="ok").length,rework:A.filter(R=>R.status==="rework").length,calls:y?y.tools.calls:0,running:y?y.tools.running:0,files:y?y.files.count:0,added:y?y.files.added:0,removed:y?y.files.removed:0,requests:_.requests,recent:y?y.calls:[],peak:!!v.peak,priced:!y||!y.model||!!Is(y.provider,y.model),cost:_.cost,costPeak:_.costPeak,costOff:_.costOffPeak,savings:_.savings,ctx:y?y.contextTokens:0,window:y?y.contextWindow:0,ratio:M.contextRatio||0}}function b(v,y){if(v==="flow"){let w=y.totals;return`${y.phase}|${Math.round(y.tps*2)}|${w.miss+w.write}|${w.hit}|${w.output}|${w.reasoning}|${w.requests}|${x>0?d:"flat"}|${Math.round(y.peakTps)}`}if(v==="main"){let w=y.recent[y.recent.length-1];return`${y.model}|${y.effort}|${y.phase}|${y.turn}|${y.ok}|${y.rework}|${y.calls}|${y.running}|${y.files}|${y.added}|${y.removed}|${y.requests}|${y.recent.length}|${w?`${w.id}:${w.status}`:""}|${Math.round(y.toolSuccess*1e3)}`}return`${y.cost.toFixed(5)}|${y.costPeak.toFixed(5)}|${y.savings.toFixed(5)}|${y.ctx}|${y.window}|${y.peak}|${y.requests}|${u[tx-1].toFixed(5)}|${Math.round(y.hitRate*1e3)}`}return{root:i,update(v,y,w){d+=v,h+=v,f+=v;let E=w.tps||0;p=Math.max(p,E),d>=.5&&(d=0,c.shift(),c.push(E),x=E>.5?ex:Math.max(0,x-1));let _=w.state?w.state.totals.cost:0;if(!m&&w.state&&(u.fill(_),m=!0),h>=2&&(h=0,u.shift(),u.push(_)),f<.5)return;f=0;let M=g(w);a=M;for(let A of s){let R=b(A.def.id,M);R!==A.sig&&(A.sig=R,l(A,M))}},hover:s.map(v=>({id:`screen:${v.def.id}`,object:v.panel})),setDetail(v,y=2){for(let w of s){let E=w.def.id===v?y:1;if(E===w.scale)continue;let[_,M]=w.def.px,A=w.tex;w.scale=E,w.tex=Ot(_*E,M*E,R=>{R.scale(E,E),Ll(R,_,M)},{anisotropy:8}),w.panel.material.map=w.tex.tex,w.sig="",a&&(w.sig=b(w.def.id,a),l(w,a)),A.tex.dispose()}},reset(){c.fill(0),u.fill(0),p=0,x=0,m=!1;for(let v of s)v.sig=""}}}var Pr=16,XE=.004,$f=.06,Md=new Be(4164863),ax=new Be(4641535),lx=new Be(16762218),qE=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${Pr}];
uniform float uOffset[${Pr}];
uniform vec3 uColor[${Pr}];
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
}`,$E=`
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
}`;function YE(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=$f/2,f=r[0]-u*(s===0?0:h),p=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*($f/2),b=u*($f/2),v=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),w=[[f-g,p-b,v,-1],[f+g,p+b,v,1],[x+g,m+b,y,1],[x-g,m-b,y,-1]];for(let E of[0,1,2,0,2,3]){let _=w[E];t.pos.push(_[0],XE,_[1]),t.s.push(_[2]),t.x.push(_[3]),t.chan.push(e)}i+=c}}var cx=n=>[n.x,n.z];function ux(){let n={},e=[],t=[],i=(m,g,b)=>{n[m]=t.length,e.push(g),t.push(b)},s=[hs.x,hs.z],r=(m,g,b)=>[cx(qi(m,g)),cx(qi(m,b))];i("fuel",ax,[[-7.45,-.7],[-4.6,-.7]]),i("feed",Md,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,Md,r(Cf(m),.95,2.12));i("lock",ax,r(io,.95,2.1)),i("unload",lx,r(ca,.95,2.1)),i("out",lx,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Dt;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",Md,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>YE(m,g,a));let l=new Ht;l.setAttribute("position",new dt(a.pos,3)),l.setAttribute("aS",new dt(a.s,1)),l.setAttribute("aX",new dt(a.x,1)),l.setAttribute("aChan",new dt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(Pr),u=new Float32Array(Pr),d=new Float32Array(Pr),h=new Float32Array(Pr),f=[];for(let m=0;m<Pr;m++)f.push((e[m]||Md).clone());let p=new rn({name:"floor-channels",vertexShader:qE,fragmentShader:$E,uniforms:Vu.merge([Je.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:f}}]),transparent:!0,blending:Jo,blendSrc:vr,blendDst:_r,blendSrcAlpha:eu,blendDstAlpha:vr,depthWrite:!1,fog:!0});p.uniforms.uLevel.value=c,p.uniforms.uOffset.value=u,p.uniforms.uColor.value=f;let x=new it(l,p);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(cn),d.fill(.8),{root:x,ids:n,set(m,g,b){let v=n[m];v!=null&&(h[v]=g,b!=null&&(d[v]=b))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var Yf=new C(Xe.cx,0,Xe.cz-17),Ni={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},Pt=Ni.h,KE=[{id:"sofa",pose:"sit",p:[-1.2,Pt+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,Pt+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,Pt+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,Pt+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,Pt,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,Pt,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function ZE(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function JE(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Dt),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Dt;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Dt),n.fill()}}function jE(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${Vt}`,n.textBaseline="top",n.fillText(`${Zt.living.code} · ${Zt.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${Vt}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${Ft}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function dx(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function Dl(n,e,t,i,s,r=0){let o=new Yt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new it(new Gt(e,t,i),hx);return a.position.y=t/2,o.add(a),o}var hx=new Xt({visible:!1});function fx(n){let e=new Yt;e.name="living",e.position.copy(Yf);let t=Ot(512,512,ZE,{repeat:[3,2],anisotropy:8}),i=Ot(512,512,JE,{anisotropy:8}),s={wood:new gt({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new gt({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new gt({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new gt({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new gt({name:"living-rug",map:i.tex,roughness:1}),leaf:new gt({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new gt({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new gt({name:"living-soil",color:3811870,roughness:1}),sand:new gt({name:"living-sand",color:14272931,roughness:.95}),rice:new gt({name:"living-rice",color:16513264,roughness:.7}),eye:new gt({name:"living-eye",color:1118999,roughness:.3}),bookA:new gt({name:"living-book-a",color:4020904,roughness:.7}),bookB:new gt({name:"living-book-b",color:13137466,roughness:.7}),bookC:new gt({name:"living-book-c",color:15327951,roughness:.7}),bookD:new gt({name:"living-book-d",color:3111538,roughness:.7}),warm:bf(16766624,2.8),cyan:bf(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new lt,o=(N,q,re=[0,0,0],j=[0,0,0],he=[1,1,1])=>r.add(N,L(q,re,j,he)),a=Ni.x1-Ni.x0,l=Ni.z1-Ni.z0;o("wood",Le(a,Ni.h,l,.02,2),[0,Ni.h/2,0]),o("warm",Te(a-.1,.006,.012),[0,.004,Ni.z0-.004]),o("warm",Te(a-.1,.006,.012),[0,.004,Ni.z1+.004]),o("rug",new Tn(1.85,64),[-1.2,Pt+.004,-.35],[-Math.PI/2,0,0]);{let N=[-1.2,Pt,.9],q=(j,he,ve)=>[N[0]+j,N[1]+he,N[2]+ve];o("fabric",Le(3,.28,.95,.08,3),q(0,.22,0));for(let j of[-1,0,1])o("fabric",Le(.97,.16,.8,.07,3),q(j,.44,-.06)),o("fabric",Le(.97,.44,.2,.09,3),q(j,.68,.36),[-.14,0,0]);for(let j of[-1.6,1.6])o("fabric",Le(.2,.5,.95,.08,3),q(j,.33,0));o("fabricBlue",Le(.5,.36,.14,.06,3),q(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Le(.5,.36,.14,.06,3),q(.35,.66,.2),[-.3,-.2,0]);for(let j of[-1.42,1.42])for(let he of[-.38,.38])o("chrome",ae(.025,.02,.08,10),q(j,.04,he));o("warm",Te(2.7,.004,.7),q(0,.002,0));let re=q(.92,.6,-.05);o("blue",Vi(1,20,14),re,[0,.3,0],[.24,.17,.16]),o("white",Vi(1,16,10),[re[0]+.02,re[1]-.05,re[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",Vi(1,12,8),[re[0]-.26,re[1]+.07,re[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",Vi(1,10,8),[re[0]+.05,re[1]-.02,re[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",Vi(.016,10,8),[re[0]+.16,re[1]+.03,re[2]-.12]),o("eye",Vi(.016,10,8),[re[0]+.2,re[1]+.03,re[2]+.03])}{let N=[-1.2,Pt,-.7];o("white",ae(.52,.52,.035,48),[N[0],N[1]+.4,N[2]]),o("chrome",ae(.05,.08,.36,20),[N[0],N[1]+.2,N[2]]),o("chrome",ae(.28,.3,.025,32),[N[0],N[1]+.012,N[2]]);let q=[N[0]+.16,N[1]+.418,N[2]+.08];o("white",Ii([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),q),o("rice",Vi(1,20,10),[q[0],q[1]+.05,q[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Te(.22,.008,.008),[q[0]+.02,q[1]+.08,q[2]-.02],[0,.3,.12]),o("woodDark",Te(.22,.008,.008),[q[0]+.02,q[1]+.08,q[2]+.01],[0,.2,.12]),o("blue",ae(.038,.034,.09,20),[N[0]-.22,N[1]+.462,N[2]-.12])}{let N=[-3.15,Pt,1.45];o("chrome",ae(.2,.22,.04,32),[N[0],N[1]+.02,N[2]]),r.add("chrome",ti([[N[0],N[1]+.04,N[2]],[N[0],N[1]+1.95,N[2]],[-2.3,Pt+2.3,1.05],[-1.7,Pt+2.05,.6]],.016,.35,10)),o("white",new An(.24,28,12,0,Dt,0,Math.PI/2),[-1.7,Pt+1.86,.6]),o("warm",new Tn(.21,28),[-1.7,Pt+1.862,.6],[Math.PI/2,0,0])}{for(let ve of[-3.35,.95])for(let ee of[-2,2])o("white",Le(.09,3,.09,.02),[ve,Pt+3/2,ee]);for(let ve of[-2,2])o("white",Le(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,Pt+3,ve]);for(let ve of[-3.35,.95])o("white",Le(.1,.1,4,.02),[ve,Pt+3,0]);for(let ve=1;ve<6;ve++){let ee=-3.35+4.3*ve/6;o("alu",Te(.05,.06,4-.1),[ee,Pt+3+.02,0])}for(let ve of[-2+.06,2-.06])o("warm",Te(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,Pt+3-.056,ve])}{let N=[3.35,Pt,1.6],q=(j,he,ve)=>[N[0]+j,N[1]+he,N[2]+ve];o("white",Le(2.3,.26,1.4,.1,3),q(0,.23,0)),o("warm",Te(2.1,.004,1.2),q(0,.002,0)),o("fabric",Le(2.12,.17,1.26,.07,3),q(0,.44,0)),o("fabricBlue",Le(1.3,.05,1.28,.03,2),q(.36,.535,0)),o("fabric",Le(.44,.11,.82,.05,3),q(-.78,.58,0)),o("white",Le(.09,.56,1.36,.03,2),q(-1.13,.64,0));let re=new Nn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",re,q(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Te(.03,.012,1.22),q(-.45,.36+.725,0))}{o("white",Le(1.85,.86,.62,.03,2),[-3.8,Pt+.45,2.62]),o("graphite",Te(1.8,.06,.56),[-3.8,Pt+.03,2.62+.02]),o("wood",Le(1.92,.045,.68,.015,2),[-3.8,Pt+.905,2.62]),o("ceramic",Le(.7,1.95,.64,.04,2),[-2.5,Pt+.975,2.62]),o("chrome",Te(.02,.6,.03),[-2.2,Pt+1.2,2.62-.33]),o("wood",Te(1.8,.04,.28),[-3.8,Pt+1.72,2.62+.17]);for(let[re,j,he]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(he,ae(.06,.06,j,18),[re,Pt+1.74+j/2,2.62+.17]);o("soil",ae(.08,.06,.12,16),[-3.2,Pt+1.8,2.62+.17]),o("leaf2",Vi(.14,12,8),[-3.2,Pt+1.95,2.62+.17],[0,0,0],[1,.8,1]);let q=[-4,Pt+.93,2.62-.04];o("white",ae(.16,.15,.2,36),[q[0],q[1]+.1,q[2]]),o("graphite",Ii([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[q[0],q[1]+.2,q[2]]),o("chrome",ae(.012,.012,.02,10),[q[0]+.05,q[1]+.29,q[2]]),o("graphite",Te(.08,.03,.03),[q[0],q[1]+.29,q[2]-.02]);for(let re of[-4.4,-3.75])o("fabricBlue",ae(.18,.18,.06,28),[re,Pt+.66,1.92]),o("chrome",ae(.025,.025,.6,12),[re,Pt+.33,1.92]),o("chrome",ae(.2,.22,.025,28),[re,Pt+.012,1.92]),o("chrome",new gi(.16,.012,8,28),[re,Pt+.25,1.92],[Math.PI/2,0,0])}let c=qt(4641535,1.6),u=new it(Te(.035,.012,.006),c);u.position.set(-4,Pt+1.07,2.42),e.add(u);{let N=[3.4,Pt,-2.05];o("white",Le(1.6,.04,.72,.015,2),[N[0],N[1]+.74,N[2]]);for(let re of[-.76,.76])o("white",Le(.04,.72,.64,.015,2),[N[0]+re,N[1]+.36,N[2]]);o("cyan",Te(1.5,.006,.012),[N[0],N[1]+.718,N[2]-.35]),o("graphite",Le(.48,.02,.16,.008,2),[N[0]-.1,N[1]+.77,N[2]+.12]),o("chrome",ae(.012,.014,.3,10),[N[0],N[1]+.91,N[2]-.22]),o("chrome",ae(.07,.08,.012,20),[N[0],N[1]+.766,N[2]-.22]);let q=[N[0],N[1],N[2]+.62];o("fabricBlue",Le(.5,.08,.48,.04,2),[q[0],q[1]+.48,q[2]]),o("fabricBlue",Le(.5,.52,.07,.04,2),[q[0],q[1]+.82,q[2]+.24],[.1,0,0]),o("chrome",ae(.025,.025,.4,12),[q[0],q[1]+.24,q[2]]);for(let re=0;re<5;re++){let j=re/5*Dt;o("graphite",Te(.32,.03,.04),[q[0]+Math.cos(j)*.16,q[1]+.04,q[2]+Math.sin(j)*.16],[0,-j,0]),o("rubber",Vi(.025,10,8),[q[0]+Math.cos(j)*.31,q[1]+.025,q[2]+Math.sin(j)*.31])}}let d=dx(new Date),h=Ot(512,288,(N,q,re)=>jE(N,q,re,d),{anisotropy:8}),f=new Xt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:Jt});f.color.setScalar(1.3);let p=new it(new xt(.88,.495),f);p.position.set(3.4,Pt+1.3,-2.27),p.rotation.x=-.08,p.renderOrder=3,e.add(p);let x=new C(-4,Pt,-2.05);o("white",ae(.5,.53,.36,48),[x.x,x.y+.18,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+.375,x.z]),o("sand",ae(.44,.44,.07,40),[x.x,x.y+.425,x.z]),o("chrome",ae(.48,.48,.03,48),[x.x,x.y+1.52,x.z]),o("cyan",new gi(.47,.008,6,64),[x.x,x.y+.4,x.z],[Math.PI/2,0,0]);for(let[N,q,re,j]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(j,ae(.012,.03,re,6),[x.x+N,x.y+.46+re/2,x.z+q],[.15,0,.1]);let m=new it(ae(.445,.445,1.05,40),new gt({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(x.x,x.y+.97,x.z),m.renderOrder=1,e.add(m);let g=new it(ae(.47,.47,1.12,48,!0),n.glass);g.position.set(x.x,x.y+.96,x.z),g.renderOrder=2,e.add(g);let b=(()=>{let N=L(new An(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),q=L(new Ss(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),re=new Ht,j=[N,q].map(ee=>ee.toNonIndexed()),he=[],ve=[];for(let ee of j)he.push(...ee.attributes.position.array),ve.push(...ee.attributes.normal.array);re.setAttribute("position",new dt(he,3)),re.setAttribute("normal",new dt(ve,3));for(let ee of j)ee.dispose();return N.dispose(),q.dispose(),re})(),v=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],y=new Dn(b,new gt({name:"living-fish",roughness:.4,metalness:.1}),v.length);y.name="aquarium-fish",y.frustumCulled=!1;let w=new Be;v.forEach((N,q)=>y.setColorAt(q,w.setHex(N.c))),e.add(y);let E=new bt,_=new pn,M=new C,A=new C(1,1,1),R=new Qn;function D(N){v.forEach((q,re)=>{let j=q.ph+N*q.s;M.set(x.x+Math.cos(j)*q.r,x.y+q.y+Math.sin(N*.9+q.ph)*.03,x.z-Math.sin(j)*q.r),R.set(0,j+(q.s>0?Math.PI/2:-Math.PI/2),Math.sin(N*3+re)*.08),_.setFromEuler(R),E.compose(M,_,A),y.setMatrixAt(re,E)}),y.instanceMatrix.needsUpdate=!0}D(0);{let N=[.6,Pt,3.02],q=3.6,re=.42;o("graphite",Te(q,.9,.03),[N[0],N[1]+.45,N[2]+re/2-.015]),o("white",Te(q,.04,re),[N[0],N[1]+.02,N[2]]),o("white",Te(q-.04,.03,re-.02),[N[0],N[1]+.45,N[2]]),o("white",Le(q+.02,.05,re+.02,.015,2),[N[0],N[1]+.9,N[2]]);for(let ee of[-q/2+.015,-.9,0,.9,q/2-.015])o("white",Te(.03,.88,re),[N[0]+ee,N[1]+.45,N[2]]);let j=["bookA","bookB","bookC","bookD"],he=[-q/2+.03,-.885,.015,.915],ve=0;for(let ee=0;ee<2;ee++)he.forEach((ge,Ne)=>{if((Ne+ee)%3===2)return;let at=N[0]+ge+.02,Ge=5+(Ne*3+ee)%5;for(let et=0;et<Ge;et++){let ue=.04+ve*7%5*.008,oe=(ee?.3:.32)-ve*11%4*.025;o(j[ve%4],Te(ue,oe,.24),[at+ue/2,N[1]+(ee?.465:.04)+oe/2,N[2]+.02]),at+=ue+.004,ve+=1}});o("graphite",Le(.34,.26,.03,.01,2),[N[0]-.9,N[1]+1.055,N[2]+.05]),o("cyan",Te(.3,.22,.002),[N[0]-.9,N[1]+1.055,N[2]+.034]),o("white",ae(.09,.07,.14,18),[N[0]+1.1,N[1]+.97,N[2]]),o("leaf",Vi(.15,12,8),[N[0]+1.1,N[1]+1.15,N[2]],[0,0,0],[1,.9,1])}for(let[N,q,re]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",ae(.27*re,.21*re,.5*re,28),[N,Pt+.25*re,q]),o("soil",ae(.25*re,.25*re,.02,24),[N,Pt+.49*re,q]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([he,ve,ee,ge],Ne)=>o(Ne%2?"leaf2":"leaf",Vi(ge*re,12,8),[N+he*re,Pt+ve*re,q+ee*re],[0,0,0],[1,.85,1])),o("woodDark",ae(.02*re,.03*re,.6*re,6),[N,Pt+.75*re,q]);let U=[-5.35,0,3.4],V=Math.atan2(-.7,.7);o("white",Le(.5,1.4,.12,.03,2),[U[0],.7,U[2]],[0,V,0]),o("cyan",Te(.012,1.3,.13),[U[0]+Math.cos(V)*.26,.7,U[2]-Math.sin(V)*.26],[0,V,0]);let P=Zt.living,Z=us(P.zh,P.en,P.code),Q=new it(new xt(.46,.13),kn(Z.tex,.2));Q.position.set(U[0]+Math.sin(V)*.062,1.12,U[2]+Math.cos(V)*.062),Q.rotation.y=V,e.add(Q);let J=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(J),e.add(Dl("bed",2.4,1.15,1.45,[3.35,0,1.6]),Dl("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),Dl("aquarium",1.08,1.56,1.08,[x.x,0,x.z]),Dl("bookshelf",3.62,.95,.46,[.6,0,3.02]),Dl("desk",1.62,1.6,.8,[3.4,0,-2.05]));let $=new it(new Gt(Ni.x1-Ni.x0,1.2,Ni.z1-Ni.z0),hx);$.position.set(0,.6,0),$.name="living-hover",e.add($);let H=KE.map(N=>{let q=new an;return q.name=`mascot-anchor:${N.id}`,q.position.fromArray(N.p),q.rotation.y=N.yaw,q.userData={mascotAnchor:N.id,pose:N.pose},e.add(q),{id:N.id,pose:N.pose,position:new C().fromArray(N.p).add(Yf),yaw:N.yaw}}),X=0;return{root:e,anchors:H,hover:[{id:"living",object:$}],labelAnchor:new C(0,3.55,0).add(Yf),update(N,q){if(D(q),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin(q*1.7)),X-=N,X<=0){X=1;let re=dx(new Date);re!==d&&(d=re,h.redraw())}},dispose(){b.dispose(),y.dispose()}}}var Ir=.3,Zf=.65,QE=Math.PI*2,ua=.16/tt.screenR,Kf=tt.top+.05,Sd=tt.back+.05,px=.1;function wd(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var mx=[wd("media-wall",12.36,Sd,tt.a0-ua,tt.a1+ua,0,Kf),wd("media-modules",11.78,Sd,tt.a0-ua,tt.a1+ua,0,2.34),wd("media-cap-right",11.78,Sd,tt.a0-ua,tt.a0,0,Kf),wd("media-cap-left",11.78,Sd,tt.a1,tt.a1+ua,0,Kf)],Jf=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+QE:t};function Ed(n,e,t){n.x=Xe.cx+t*Math.cos(e),n.z=Xe.cz-t*Math.sin(e)}var Hn=new C,gx=new C,xx=new C,zn=new C;function oo(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-Xe.cx,s=e.z-Xe.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=Jf(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return Hn.copy(e).applyMatrix4(n.inv),Hn.x>=n.min.x-t&&Hn.x<=n.max.x+t&&Hn.z>=n.min.z-t&&Hn.z<=n.max.z+t&&Hn.y>=n.min.y-t&&Hn.y<=n.max.y+t}function yx(n,e,t){if(n.kind==="sector"){let u=e.x-Xe.cx,d=e.z-Xe.cz,h=Math.max(.001,Math.hypot(u,d)),f=Jf(u,d),p=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(f-(n.a0-p)),b=h*(n.a1+p-f),v=n.y1+t-e.y,y=Math.min(x,m,g,b,v);y===x?Ed(e,f,Math.max(0,n.r0-t-1e-4)):y===m?Ed(e,f,n.r1+t+1e-4):y===g?Ed(e,n.a0-(t+1e-4)/h,h):y===b?Ed(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}Hn.copy(e).applyMatrix4(n.inv);let s=Hn.x-(n.min.x-t),r=n.max.x+t-Hn.x,o=Hn.z-(n.min.z-t),a=n.max.z+t-Hn.z,l=n.max.y+t-Hn.y,c=Math.min(s,r,o,a,l);c===s?Hn.x=n.min.x-t-1e-4:c===r?Hn.x=n.max.x+t+1e-4:c===o?Hn.z=n.min.z-t-1e-4:c===a?Hn.z=n.max.z+t+1e-4:Hn.y=n.max.y+t+1e-4,e.copy(Hn).applyMatrix4(n.mat)}function e2(n,e,t,i,s){gx.copy(e).applyMatrix4(n.inv),xx.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=gx[a],d=xx[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,f=(c-u)/d;if(h>f&&([h,f]=[f,h]),r=Math.max(r,h),o=Math.min(o,f),r>o)return 1/0}return r}function vx(n,e,t,i){let s=n.x-Xe.cx,r=n.z-Xe.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function _x(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new bt,i=new mi,s=r=>{if(r.userData&&r.userData.solid){let o=new bt().copy(r.matrixWorld).invert(),a=new mi;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(zn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function bx(n=[]){let e=[...mx,...n],t=[];function i(u,d,h=null){for(let f of e)if(f!==h&&oo(f,u,d))return f;return null}function s(u,d=null){hf(u,d);for(let h=0;h<4;h++){let f=!1;for(let p of e)oo(p,u,Ir)&&(yx(p,u,Ir),f=!0);if(!f)return u;hf(u,d)}return d&&wr(d)&&!i(d,Ir-.001)&&u.copy(d),u}function r(u,d=Zf){for(let h=0;h<3;h++){let f=!1;for(let p of e)p.block==="ray"&&oo(p,u,d)&&(yx(p,u,d),f=!0);if(!f)break}return u}function o(u,d){let h=1/0;vx(u,d,Zn.r,t);for(let f of t)h=Math.min(h,f);return d.y>1e-9?h=Math.min(h,(Zn.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(Zn.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,f=Ir,p=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=px;m<x;g+=px){let b=Math.min(g,x);if(zn.copy(u).addScaledVector(d,b),l(zn,f,u)){let v=m,y=b;for(let w=0;w<7;w++){let E=(v+y)/2;zn.copy(u).addScaledVector(d,E),l(zn,f,u)?y=E:v=E}x=v;break}m=b}if(!p)return Math.max(0,x);zn.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!oo(g,zn,f)||oo(g,u,0))continue;let b=e2(g,u,d,x,f);b<x&&(x=b)}return Math.max(0,x)}function l(u,d,h){for(let f of e)if(f.block==="ray"&&oo(f,u,d)&&!oo(f,h,d))return!0;return!1}function c(u,d,h=200){let f=h;if(d.y<-1e-6){let p=-u.y/d.y;p>0&&p<f&&(zn.copy(u).addScaledVector(d,p),Hm(zn.x,zn.z)<0&&zm(zn.x,zn.z)>0&&(p=(-Rt.depth-u.y)/d.y),p>0&&p<f&&(f=p))}if(d.y>1e-6){let p=(Xe.h-u.y)/d.y;p>0&&p<f&&(f=p)}for(let p of[Xe.r,tt.screenR,tt.back]){vx(u,d,p,t);for(let x of t)if(!(x>=f)){if(zn.copy(u).addScaledVector(d,x),p!==Xe.r){let m=Jf(zn.x-Xe.cx,zn.z-Xe.cz);if(m<tt.a0||m>tt.a1||zn.y<0||zn.y>tt.top)continue}else if(zn.y<0||zn.y>Xe.h)continue;f=x}}return f<h?f:1/0}return{get solids(){return e},setObjects(u){e=[...mx,...u||[]]},contains:(u,d=Ir)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var t2={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},n2={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},i2=.15;function s2(n,e){n.updateMatrixWorld(!0);let t=new ki,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(cn),i+=1))}),i}var r2=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5];function Mx(n,e,{environment:t=!0,demo:i=!1,look:s=Ar,brightness:r=dn.initial}={}){let o=new zr;o.background=null;let a=Mf(s),l=ot(r,dn.min,dn.max),c=t?n:null,u=n2[e]||null,d=c?u:null,h=d?qm(c,d):null,{M:f,tex:p}=Om(e),x=cg(f,p,e,{renderer:c,look:a,reflection:h,beamTarget:new C(hn.x,3,hn.z)});function m(){o.environment=x.envTexture,o.environmentIntensity=a.envIntensity}m();let g=Vg(p),b=vg(f),v=Rg(f),y=Ug(f),w=kg(f,g),E=Xg(f),_=Gg(f,E),M=ox(f,null,{demo:i}),A=ux(),R=fx(f),D=new Yt;D.name="wafers",o.add(x.root,A.root,M.root,b.root,v.root,y.root,w.root,_.root,R.root,g.root,D);let U=Yg({cell:y,stations:w,stocker:_,engine:v,wafers:E,root:D}),V=u?s2(o,i2):0,P={frame:0,matrix:new bt,proj:new bt,ready:!1},Z=_x(o),Q=[];for(let ue of[...b.hover,...v.hover,...y.hover,...w.list.flatMap(oe=>oe.hover),..._.hover,...R.hover,...M.hover])ue.object.userData.hoverId=ue.id,Q.push(ue.object);let J=[{id:"tank",anchor:b.anchors.tank},{id:"engine",anchor:v.anchors.engine},{id:"robot",anchor:y.anchors.robot.clone().setY(1.75)},...w.list.map(ue=>({id:`station:${ue.kind}`,anchor:ue.anchor})),{id:"loadport",anchor:_.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:_.anchors.stocker.clone().setY(1.25)},{id:"living",anchor:R.labelAnchor}],$={phase:"idle",tps:0,balance:null,currency:"CNY"},H={state:null,live:$,tps:0,peak:!1},X={activity:0,tps:0,model:"",phase:"idle"},N=null,q=0,re=!1,j=0,he=0,ve=0,ee=1,ge=nr(Date.now());function Ne(){ge=nr(Date.now());let ue=N?Is(N.provider,N.model):null,oe=typeof $.balance=="number"?$.balance:null,z=$.currency==="USD"?"$":"¥",W=[i?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(oe==null)W.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),W.push({text:"余额不可用 · balance unavailable",size:28,color:"#8c97ad",gap:56});else{W.push({text:`${z} ${oe.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let ce=$.currency==="USD"?0:gd(oe,ue,ge);W.push({text:ue&&ce?`≈ ${Qt(ce)} tokens · ${ue.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}W.push({text:ge?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:ge?"#ffb020":"#34d17a",weight:700,gap:72}),b.setReadout(W)}function at(){let ue=typeof $.balance=="number"?$.balance:null;if(ue==null)return .5;j=Math.max(j,ue);let oe=r2.find(z=>z>=j*1.25)||j*1.25;return ot(ue/oe,0,1)}function Ge(ue,oe,z){let W=U.activity();A.set("fuel",.1+.9*oe,.7+he/28),A.set("feed",W.inbound>0?1:.1+.55*oe,1.5),A.set("lock",W.inbound>0?.9:.08,-1.4);for(let ce of w.list)A.set(`spoke:${ce.index}`,ce.active?1:.06,1.2);A.set("unload",W.outbound>0?.9:.08,1.4),A.set("out",W.outbound>0||W.stocker?.9:.08,1.4),A.set("ring",W.robot?.75:z!=="idle"?.4:.22,.8),A.update(ue)}function et(ue){return ue==="reasoning"||ue==="generating"||ue==="thinking"?.35+.65*ot(he/70,0,1):ue==="tool"?.2:0}return{scene:o,key:x.key,presets:t2,labelAnchors:J,solids:Z,mascotAnchors:R.anchors,screenDefs:Xf,setScreenDetail:(ue,oe=2)=>M.setDetail(ue,oe),get post(){return{...a.post,exposure:a.exposure*l}},getLook:()=>a.id,setLook(ue){let oe=Mf(ue);return oe===a?!1:(a=oe,x.setLook(a),m(),!0)},getBrightness:()=>l,setBrightness(ue){l=ot(Number(ue)||dn.initial,dn.min,dn.max)},setState(ue){ue&&(N&&ue.tools.errors>q&&(re=!0),q=ue.tools.errors,N=ue,U.sync(ue),ee=Math.max(ee,.45))},setLive(ue){ue&&Object.assign($,ue)},busy(){return U.busy()||$.phase&&$.phase!=="idle"||he>1},update(ue,oe){he=Kt(he,$.tps||0,6,ue),ee+=ue,ee>=.5&&(ee=0,Ne());let z=N?N.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},W=$.phase&&$.phase!=="idle"?$.phase:N?N.phase:"idle",ce=he>.5?ot(.2+he/90,0,1):0;ve=Kt(ve,et(W),1.6,ue),X.activity=ve,X.tps=he,X.model=N?N.model:"",X.phase=W,x.update(ue,oe,X),b.update(ue,oe,{level:at(),flow:ce,peak:ge}),v.update(ue,oe,{phase:W,tps:he,ctx:N&&N.contextWindow>0?N.contextTokens/N.contextWindow:0,counters:{miss:z.miss,hit:z.hit,output:z.output,reasoning:z.reasoning,cost:z.cost},errorPulse:re}),re=!1,U.update(ue,oe),g.update(ue),R.update(ue,oe),Ge(ue,ce,W),H.state=N,H.tps=he,H.peak=ge,M.update(ue,oe,H)},prerender(ue){!h||(P.frame+=1,(P.ready&&P.matrix.equals(ue.matrixWorld)&&P.proj.equals(ue.projectionMatrix)||d.every>1)&&P.ready&&P.frame%2===1)||(h.update(o,ue),P.matrix.copy(ue.matrixWorld),P.proj.copy(ue.projectionMatrix),P.ready=!0)},reflectionInfo:()=>u?{...u,trimmed:V,active:!!h}:null,hoverTargets(){return _.hoverObjects(Q.slice())},focus:ue=>U.focus(ue),stats:()=>U.stats(),dispose(){U.dispose(),_.dispose(),R.dispose(),x.dispose(),Dm(o),E.dispose(),h&&h.dispose();for(let ue of Object.values(f))ue&&ue.dispose&&ue.dispose();for(let ue of Object.values(p))ue&&ue.dispose&&ue.dispose()}}}var o2=new Ks(-1,1,1,-1,0,1),jf=class extends Ht{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},a2=new jf,Td=class{constructor(e){this._mesh=new it(a2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var l2=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,c2=`
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
}`,u2=`
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
}`,d2=`
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
}`,h2=`
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
}`;function Sx(n,e,t={}){let i=new jn(Math.max(1,n),Math.max(1,e),{type:xi,minFilter:_n,magFilter:_n,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function Ad(n,e,t={}){return new qo({vertexShader:l2,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function wx(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new Td(null),r=Sx(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(Sx(2,2));let a=Ad(c2,{tSrc:{value:null},uTexel:{value:new Me},uThreshold:{value:1},uKnee:{value:.45}}),l=Ad(u2,{tSrc:{value:null},uTexel:{value:new Me}}),c=Ad(d2,{tSrc:{value:null},uTexel:{value:new Me},uWeight:{value:1}},{blending:Kn,transparent:!0}),u=Ad(h2,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,f){n.setRenderTarget(f),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,f){r.setSize(Math.max(1,h),Math.max(1,f));let p=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(f/2));for(let m of o)m.setSize(p,x),p=Math.max(1,Math.floor(p/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:f,knee:p,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),f!=null&&(a.uniforms.uThreshold.value=f),p!=null&&(a.uniforms.uKnee.value=p),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,f,p=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,f),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=p,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var Rd=1.6;function Ex(n,e){let t=Math.tan(Mr.degToRad(n/2));return{tv:t,th:t*Math.max(.2,e)}}var Qf=n=>Math.atan2(-Math.cos(n),Math.sin(n)),ep=(n,e)=>n.a-e/tt.screenR;function Tx(n,e,t){let{tv:i,th:s}=Ex(e,t),r=n.a1-n.a0,o=tt.screenR,a=2*o*Math.sin(r/2),l=o*(1-Math.cos(r/2)),c=n.y1-n.y0;return ot(Math.max(l+a/2*1.08/s,l+c/2*1.22/i),Rd+.4,16)}function Ax(n,e,t,i){let{tv:s,th:r}=Ex(t,i);return{u:Math.max(0,(n.a1-n.a0)*tt.screenR/2-e*r*.9),v:Math.max(0,(n.y1-n.y0)/2-e*s*.9)}}function Rx(n,e,t,i,s=new C){return Er(ep(n,e),tt.screenR-i,(n.y0+n.y1)/2+t,s)}var Cd=85*Math.PI/180,f2=1.65,p2=3.2,m2=2.6,g2={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Cx(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ee=>ee,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new Qn(0,0,0,"YXZ"),h=new Set,f=!1,p=new C,x=new C,m=0,g=null,b=null,v=0,y=new C,w=new C,E=new C,_=new C,M=new C,A=new Wr,R=new Me;function D(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function U(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=ot(d.x,-Cd,Cd),D()}function V(ee){return y.copy(n.position),M.copy(y).add(ee),n.position.copy(M),s(n.position,y),n.position.distanceTo(M)}let P=()=>{v=performance.now(),a&&a()},Z=()=>{o&&o(),P()};function Q(ee){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let ge=ee.button===2||ee.button===0&&ee.shiftKey?"pan":ee.button===0?"look":null;if(ge){g={id:ee.pointerId,x:ee.clientX,y:ee.clientY,mode:ge},b=null;try{e.setPointerCapture(ee.pointerId)}catch{}Z()}}function J(ee){if(!l||!g||ee.pointerId!==g.id)return;let ge=ee.clientX-g.x,Ne=ee.clientY-g.y;g.x=ee.clientX,g.y=ee.clientY;let at=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Ge=2.4/at;c+=ge*Ge,u=ot(u+Ne*Ge,-Cd,Cd),D()}else{let Ge=6/at;E.set(1,0,0).applyQuaternion(n.quaternion),_.copy(E).multiplyScalar(-ge*Ge),_.y+=Ne*Ge,V(_)}P()}function $(ee){if(!(!g||ee.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ee.pointerId)}catch{}P()}}function H(ee){if(!l)return;ee.preventDefault();let ge=ee.deltaMode===1?16:ee.deltaMode===2?400:1;m=ot(m+ot(-ee.deltaY*ge*.006,-4,4),-8,8),b=null,Z()}function X(ee){if(!l)return;let ge=e.getBoundingClientRect();R.set((ee.clientX-ge.left)/Math.max(1,ge.width)*2-1,-((ee.clientY-ge.top)/Math.max(1,ge.height))*2+1),n.updateMatrixWorld(),A.setFromCamera(R,n);let{origin:Ne,direction:at}=A.ray;if(at.y>-.02)return;let Ge=(r-Ne.y)/at.y;if(Ge<=0||Ge>60)return;let et=new C().copy(at).multiplyScalar(Ge).add(Ne),ue=et.x-n.position.x,oe=et.z-n.position.z,z=Math.hypot(ue,oe);z>1.5&&(et.x-=ue/z*1.2,et.z-=oe/z*1.2),et.y=r+f2;let W=et.distanceTo(n.position);b={t:0,d:ot(W/6,.45,1.6),p0:n.position.clone(),p1:et},Z()}function N(ee,ge){if(!l||ee.ctrlKey||ee.metaKey||ee.altKey)return;let Ne=ee.target;if(Ne&&(Ne.tagName==="INPUT"||Ne.tagName==="TEXTAREA"||Ne.tagName==="SELECT"||Ne.isContentEditable))return;f=!!ee.shiftKey;let at=g2[ee.code];at&&(ee.preventDefault(),ee.stopPropagation(),ge?h.add(at):h.delete(at),ge?(b=null,Z()):P())}let q=ee=>N(ee,!0),re=ee=>N(ee,!1),j=()=>{h.clear(),f=!1},he=ee=>{l&&ee.preventDefault()};e.addEventListener("pointerdown",Q),e.addEventListener("pointermove",J),e.addEventListener("pointerup",$),e.addEventListener("pointercancel",$),e.addEventListener("wheel",H,{passive:!1}),e.addEventListener("dblclick",X),e.addEventListener("contextmenu",he),i&&(i.addEventListener("keydown",q),i.addEventListener("keyup",re),i.addEventListener("blur",j));function ve(ee){if(!l)return!1;let ge=!1;if(b){b.t+=ee;let Ne=Gi(Math.min(1,b.t/b.d));_.lerpVectors(b.p0,b.p1,Ne).sub(n.position),(V(_)>.02||b.t>=b.d)&&(b=null),ge=!0}if(x.set(0,0,0),h.size&&(w.set(-Math.sin(c),0,-Math.cos(c)),E.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(w),h.has("b")&&x.sub(w),h.has("r")&&x.add(E),h.has("l")&&x.sub(E),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(p2*(f?m2:1))),p.set(Kt(p.x,x.x,9,ee),Kt(p.y,x.y,9,ee),Kt(p.z,x.z,9,ee)),p.lengthSq()>1e-6?(V(_.copy(p).multiplyScalar(ee)),ge=!0):p.set(0,0,0),Math.abs(m)>.001){let Ne=m*(1-Math.exp(-9*ee));m-=Ne,n.getWorldDirection(w),V(_.copy(w).multiplyScalar(Ne))>.02&&(m=0),ge=!0}else m=0;return ge&&P(),ge}return{get enabled(){return l},enable(){l=!0,U()},disable(){l=!1,g=null,b=null,h.clear(),p.set(0,0,0),m=0},sync:U,active(){return l&&(!!g||!!b||h.size>0||Math.abs(m)>.001||p.lengthSq()>1e-4||performance.now()-v<300)},update:ve,dispose(){e.removeEventListener("pointerdown",Q),e.removeEventListener("pointermove",J),e.removeEventListener("pointerup",$),e.removeEventListener("pointercancel",$),e.removeEventListener("wheel",H),e.removeEventListener("dblclick",X),e.removeEventListener("contextmenu",he),i&&(i.removeEventListener("keydown",q),i.removeEventListener("keyup",re),i.removeEventListener("blur",j))}}}var tp=["orbit","look"],x2=12,y2=2,ao=["low","medium","high","ultra"],da=["auto",30,60,120,0],Nl={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},v2=60,_2=30,Px=150*(Math.PI/180),b2=.8,Ix=30,M2=.45,Lx=.0013,S2=14,w2=7,E2=.25,T2=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,A2=/swiftshader|llvmpipe|softpipe|software|basic render/i;function R2(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(A2.test(t))return"low";if(T2.test(t))return"high"}catch{}return"medium"}function C2(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new Ht;return t.setAttribute("position",new dt(e,3)),t}function P2(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function Dx(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c,onScreen:u}=e,d=!!e.demo,h=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=new qu({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=R2(f.getContext()),x=Nl[e.quality]?e.quality:p,m=da.includes(e.fps)?e.fps:"auto";f.setClearColor(lg,1),f.toneMapping=ol,f.toneMappingExposure=1,f.outputColorSpace=Jn,f.shadowMap.type=Xr,f.shadowMap.autoUpdate=!1,f.info.autoReset=!1,f.debug.onShaderError=(k,be,ke,$e)=>{let Qe=k.getShaderSource($e)||"",Mt=/#define SHADER_NAME (.*)/.exec(Qe),sn=Mt&&Mt[1].trim()||"shader",ar=[k.getShaderInfoLog(ke),k.getShaderInfoLog($e),k.getProgramInfoLog(be)].map(po=>(po||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${sn}" failed to compile
${ar}`);let kl=ar.split(`
`).find(po=>/error/i.test(po))||ar.split(`
`)[0]||"";r&&r("shader",`${sn}: ${kl}`.slice(0,220))};let g=P2(f.getContext()),b=!1,v=f.domElement;v.className="dwp3d-gl",v.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",v.setAttribute("aria-hidden","true"),n.appendChild(v);let y=document.createElement("div");y.className="dwp3d-labels",n.appendChild(y);let w=new $n(40,1,.2,9e3),E=new $n(40,1,.2,9e3);w.layers.enable(cn),E.layers.enable(cn);let _=bx(),M=new Zu(w,v);M.enableDamping=!0,M.dampingFactor=.08,M.minDistance=.5,M.maxDistance=40,M.zoomToCursor=!1,M.maxPolarAngle=Px,M.screenSpacePanning=!0,M.rotateSpeed=.7,M.zoomSpeed=.9,M.panSpeed=.8;let A=null,R=null,D=null,U=C2(),V=null,P=null,Z=0,Q=0,J=1,$=1,H=null,X="orbit",N=!1,q,re=0,j=0,he=0,ve=new C,ee=new C,ge=[],Ne=[],at=!0,Ge=!1,et=!1,ue=!1,oe=0,z=0,W=eo.includes(e.look)?e.look:Ar,ce=ot(Number(e.brightness)||dn.initial,dn.min,dn.max),K={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function le(){K.casters.clear(),K.pending=!1,!(!A||!f.shadowMap.enabled)&&(A.scene.updateMatrixWorld(!0),A.scene.traverse(k=>{k.castShadow&&(k.isMesh||k.isPoints||k.isLine)&&K.casters.set(k,{m:k.matrixWorld.clone(),v:k.isInstancedMesh?k.instanceMatrix.version:0})}),f.shadowMap.needsUpdate=!0,K.lastBake=z,K.bakes+=1)}function Ce(){if(!A||!f.shadowMap.enabled||z<K.next)return;K.next=z+.5;let k=!1;for(let[ke,$e]of K.casters){if(!ke.castShadow||!en(ke)){K.casters.delete(ke),k=!0;continue}(!ke.matrixWorld.equals($e.m)||ke.isInstancedMesh&&ke.instanceMatrix.version!==$e.v)&&(ke.castShadow=!1,K.casters.delete(ke),k=!0)}A.scene.traverse(ke=>{ke.castShadow&&!K.casters.has(ke)&&(ke.castShadow=!1)}),k&&(K.pending=!0);let be=K.bakes<4?.5:2;K.pending&&z-K.lastBake>=be&&le()}function F(){R&&(R.dispose(),R=null),D&&(D.removeFromParent(),D.material.dispose(),D=null),A&&(A.dispose(),A=null),K.casters.clear(),f.renderLists.dispose()}function ie(){let k=Nl[x];f.shadowMap.enabled=x!=="low",A=Mx(f,x,{demo:d,look:W,brightness:ce}),D=new Ba(U,new Go({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),D.name="hover-highlight",D.matrixAutoUpdate=!1,D.frustumCulled=!1,D.renderOrder=20,D.visible=!1,D.layers.set(cn),A.scene.add(D),R=wx(f,{msaa:k.msaa,bloom:k.bloom}),O(),$=1,Fe(!0),V&&A.setState(V),P&&A.setLive(P),Ls(),_.setObjects(A.solids||[]),he=0,K.bakes=0,K.next=z+.5,le(),de()}function de(){if(!(!A||typeof f.compileAsync!="function"))try{A.scene.updateMatrixWorld(!0);let k=f.compileAsync(A.scene,E);k&&typeof k.catch=="function"&&k.catch(()=>{})}catch{}}function O(){!R||!A||(A.post&&R.set(A.post),h&&R.set({grain:.006}))}let Ze=new Me;function ct(k,be,ke,$e){Ze.set(k.x-Xe.cx,k.z-Xe.cz),Ze.length()>be&&(Ze.setLength(be),k.x=Xe.cx+Ze.x,k.z=Xe.cz+Ze.y),k.y=ot(k.y,ke,$e)}function yt(k){return ct(k,Zn.targetR,Zn.targetYMin,Zn.targetYMax),_.keepClear(k,Zf),ct(k,Zn.targetR,Zn.targetYMin,Zn.targetYMax),k}let Re=new C;function Ee(){let k=M.target;Re.copy(k),yt(k),(k.x!==Re.x||k.y!==Re.y||k.z!==Re.z)&&w.position.add(Re.subVectors(k,Re))}function Ae(){let k=M.target,be=Math.max(.001,w.position.distanceTo(k)),ke=ot((Zn.yMin+.02-k.y)/be,-1,1),$e=ot((Zn.yMax-.02-k.y)/be,-1,1);M.maxPolarAngle=Math.min(Px,Math.acos(ke)),M.minPolarAngle=Math.min(Math.acos($e),M.maxPolarAngle)}let Ie={len:0,pulled:!1,easing:!1},I=new C;function T(){Ie.len=0,Ie.pulled=!1,Ie.easing=!1}function Y(k){let be=!1;if(X==="orbit"&&!H){let ke=M.target;I.subVectors(w.position,ke);let $e=I.length();if($e>1e-4){I.divideScalar($e);let Qe=Math.min($e,_.containerExit(ke,I)-.02);Qe=Math.min(Qe,_.armLength(ke,I,Qe,Ir)),Qe=Math.max(Qe,Math.min($e,E2)),!Ie.pulled||Qe<Ie.len?Ie.len=Qe:Ie.len=Math.min(Qe,Kt(Ie.len,Qe,w2,k)),Ie.len>$e-.001&&Qe>=$e-1e-4&&(Ie.len=$e),Ie.pulled=Ie.len<$e-1e-4,Ie.easing=Ie.pulled&&Qe>Ie.len+.001,E.position.copy(ke).addScaledVector(I,Ie.len),be=!0}}be||(E.position.copy(w.position),T()),E.quaternion.copy(w.quaternion),E.updateMatrixWorld()}function Se(){X==="orbit"&&!H&&Ie.pulled&&(w.position.copy(E.position),T())}function ye(){R&&R.setSize(Math.round(Z*J*$),Math.round(Q*J*$))}function Fe(k=!1){let be=Math.max(1,Math.floor(n.clientWidth)),ke=Math.max(1,Math.floor(n.clientHeight)),$e=Math.min(typeof window<"u"&&window.devicePixelRatio||1,Nl[x].dpr);if(!(!k&&be===Z&&ke===Q&&$e===J)&&(Z=be,Q=ke,J=$e,f.setPixelRatio($e),f.setSize(be,ke,!1),ye(),w.aspect=E.aspect=be/ke,w.updateProjectionMatrix(),E.updateProjectionMatrix(),he=0,fe.def)){let Qe=Math.abs(fe.td-fe.fit)<.001;fe.fit=Ke(fe.def),Qe&&(fe.td=fe.fit),zt()}}function Ve(k){let be=A?A.presets:null,ke=be&&(be[k]||be.overview)||{pos:[0,7,16],target:[0,2,-1]},$e=new C().fromArray(ke.target),Qe=new C().fromArray(ke.pos),Mt=ke.mode==="look"?"look":"orbit";if(Mt==="orbit"){let sn=ot(1.7/Math.max(.3,w.aspect),1,2.3);Qe.sub($e).multiplyScalar(sn).add($e),ct(Qe,Zn.r,Zn.yMin,Zn.yMax)}return{pos:Qe,target:$e,mode:Mt}}function xe(k,be){let ke=be.x-k.x,$e=be.y-k.y,Qe=be.z-k.z;return{yaw:Math.atan2(-ke,-Qe),pitch:Math.atan2($e,Math.hypot(ke,Qe))}}let me=new Qn(0,0,0,"YXZ"),ze=new C;function G(k,be){me.set(be,k,0,"YXZ"),w.quaternion.setFromEuler(me)}function _e(k){if(k===X)return;Se(),De.log=0;let be=X==="screen";X=k,k==="look"?(N=!1,M.enabled=!1,ui.enable()):k==="screen"?(N=!1,M.enabled=!1,ui.disable()):(ui.disable(),M.enabled=!0),y.style.visibility=k==="screen"?"hidden":"",be&&Vn(),c&&c(k)}function pe(){let k=wr(w.position)==="hall";if(_e("orbit"),!k){Ue("overview");return}w.getWorldDirection(ze),yt(M.target.copy(w.position).addScaledVector(ze,6)),Ae(),M.update(),T()}function We(k){let{pos:be,target:ke,mode:$e}=Ve(k);if(H=null,_e($e),w.position.copy(be),$e==="look"){let Qe=xe(be,ke);G(Qe.yaw,Qe.pitch),ui.sync()}else yt(M.target.copy(ke)),Ae(),M.update();T()}function Ue(k,be=1.2){if(h){We(k);return}Se(),De.log=0;let{pos:ke,target:$e,mode:Qe}=Ve(k);_e(Qe);let Mt=xe(ke,$e);He(ke,Mt.yaw,Mt.pitch,$e,Qe,be)}function He(k,be,ke,$e,Qe,Mt=1.2){me.setFromQuaternion(w.quaternion,"YXZ"),H={t:0,d:h?.001:Mt,p0:w.position.clone(),p1:k.clone(),yaw0:me.y,pitch0:me.x,yaw1:be,pitch1:ke,target:$e,mode:Qe}}let fe={id:null,def:null,u:0,v:0,d:0,tu:0,tv:0,td:0,fit:0,back:null,moving:!1},At=new C,Oe=()=>A&&A.screenDefs||[],ht=k=>Oe().find(be=>be.id===k)||null,wt=()=>Math.tan(Mr.degToRad(w.fov/2)),Ke=k=>Tx(k,w.fov,w.aspect);function zt(){let k=fe.def;if(!k)return;fe.td=ot(fe.td,Rd,fe.fit*1.05);let be=Ax(k,fe.td,w.fov,w.aspect);fe.tu=ot(fe.tu,-be.u,be.u),fe.tv=ot(fe.tv,-be.v,be.v)}let ft=(k,be,ke,$e)=>Rx(fe.def,be,ke,$e,k);function mn(k){let be=ht(k);return!be||!A?!1:(X!=="screen"&&(Se(),fe.back={mode:X,pos:w.position.clone(),quat:w.quaternion.clone(),target:M.target.clone()}),N=!1,_e("screen"),fe.id=k,fe.def=be,fe.fit=Ke(be),fe.u=fe.tu=0,fe.v=fe.tv=0,fe.d=fe.td=fe.fit,fe.moving=!1,A.setScreenDetail(k,y2),He(ft(At,0,0,fe.fit),Qf(be.a),0,null,"screen",1),u&&u(k),gn(),!0)}function Vn(){fe.id=null,fe.def=null,fe.back=null,fe.moving=!1,A&&A.setScreenDetail&&A.setScreenDetail(null,1),u&&u(null)}function ms(){if(X!=="screen")return;let k=fe.back;if(_e(k?k.mode:"orbit"),!k){Ue("overview");return}me.setFromQuaternion(k.quat,"YXZ"),He(k.pos,me.y,me.x,k.target,k.mode,1),gn()}function Dr(k){let be=Oe();if(!be.length)return;let ke=Math.max(0,be.findIndex(Qe=>Qe.id===fe.id)),$e=be[(ke+k+be.length)%be.length];mn($e.id)}function gs(k){let be=1-Math.exp(-x2*k);fe.u+=(fe.tu-fe.u)*be,fe.v+=(fe.tv-fe.v)*be,fe.d+=(fe.td-fe.d)*be,fe.moving=Math.abs(fe.tu-fe.u)+Math.abs(fe.tv-fe.v)+Math.abs(fe.td-fe.d)>.001,ft(w.position,fe.u,fe.v,fe.d),G(Qf(ep(fe.def,fe.u)),0)}function xs(k,be){let ke=wt(),$e=ke*Math.max(.2,w.aspect),Qe=be.x/Z*2-1,Mt=-(be.y/Q)*2+1,sn=fe.tu+Qe*$e*fe.td,ar=fe.tv+Mt*ke*fe.td,kl=ot(fe.td*Math.exp(k),Rd,fe.fit*1.05),po=kl/fe.td;fe.tu=sn-(sn-fe.tu)*po,fe.tv=ar-(ar-fe.tv)*po,fe.td=kl,zt()}function wi(k,be){let ke=2*fe.td*wt()/Math.max(1,Q);fe.tu-=k*ke,fe.tv+=be*ke,zt()}let gn=()=>{oe=performance.now()};function ys(){let k=H;if(!k)return;if(H=null,X==="look"){ui.sync();return}w.getWorldDirection(ze);let be=Math.max(1,w.position.distanceTo(k.target));yt(M.target.copy(w.position).addScaledVector(ze,be)),T()}M.addEventListener("start",()=>{ys(),gn()}),M.addEventListener("change",gn),M.addEventListener("end",gn);let ui=Cx(w,v,{keyTarget:n,clampPosition:(k,be)=>_.resolve(k,be),floorY:0,onStart:()=>{ys(),gn()},onChange:gn});function Ls(){for(let k of ge)k.el.remove();if(ge=[],!!A)for(let k of Ne){let be=A.labelAnchors.find(Qe=>Qe.id===k.id);if(!be)continue;let ke=document.createElement("div");ke.className="dwp3d-label";let $e=document.createElement("span");if($e.className="dwp3d-label-title",$e.textContent=k.text,ke.appendChild($e),k.sub){let Qe=document.createElement("span");Qe.className="dwp3d-label-sub",Qe.textContent=k.sub,ke.appendChild(Qe)}y.appendChild(ke),ge.push({id:k.id,el:ke,anchor:be.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let Ki=new C,vs=[],ii=[];function co(k){k.shown!==!1&&(k.el.style.opacity="0",k.shown=!1)}function uo(){if(at){vs.length=0;for(let k of ge){if(Ki.copy(k.anchor).project(E),!(Ki.z<1&&Math.abs(Ki.x)<1.05&&Math.abs(Ki.y)<1.05)){co(k);continue}k.sx=(Ki.x*.5+.5)*Z,k.sy=(-Ki.y*.5+.5)*Q,k.dist=E.position.distanceTo(k.anchor),vs.push(k)}vs.sort((k,be)=>k.dist-be.dist),ii.length=0;for(let k of vs){k.w||(k.w=k.el.offsetWidth,k.h=k.el.offsetHeight);let be={x0:k.sx-k.w/2-3,x1:k.sx+k.w/2+3,y0:k.sy-k.h-3,y1:k.sy+7};if(ii.some(Qe=>be.x0<Qe.x1&&be.x1>Qe.x0&&be.y0<Qe.y1&&be.y1>Qe.y0)){co(k);continue}ii.push(be);let ke=ot(1.45-k.dist/24,.3,1).toFixed(2),$e=`translate(${k.sx.toFixed(1)}px, ${k.sy.toFixed(1)}px) translate(-50%, -100%)`;$e!==k.tf&&(k.el.style.transform=$e,k.tf=$e),k.shown!==ke&&(k.el.style.opacity=ke,k.shown=ke)}}}let Ds=new Wr;Ds.layers.enable(cn);let rr=new Me,Ln=null,Ns=!1,or=0,S=null,B=null,te=null,ne=!1;function se(k){if(!A)return null;rr.set(k.x/Z*2-1,-(k.y/Q)*2+1),E.updateMatrixWorld(),Ds.setFromCamera(rr,E);let be=Ds.intersectObjects(A.hoverTargets(),!0);for(let ke of be)for(let $e=ke.object;$e;$e=$e.parent)if($e.userData&&$e.userData.hoverId)return{id:$e.userData.hoverId,obj:$e,distance:ke.distance};return null}let De={log:0,anchor:new C,anchored:!1},nt=new C;function qe(k){let be=se(k),ke=Ds.ray,$e=_.surfaceHit(ke.origin,ke.direction);return be&&be.distance<$e&&($e=be.distance),Number.isFinite($e)?(De.anchor.copy(ke.origin).addScaledVector(ke.direction,$e),!0):!1}function Pe(k){if(!De.log)return;let be=De.log*(1-Math.exp(-S2*k));Math.abs(De.log-be)<.001&&(be=De.log),De.log-=be;let ke=M.target,$e=w.position,Qe=Math.max(.001,$e.distanceTo(ke)),Mt=Math.exp(be);if(be<0){let sn=De.anchored?De.anchor:ke;if(Mt=Math.max(Mt,b2/Qe,M2/Math.max(.001,$e.distanceTo(sn))),Mt>=1){De.log=0;return}$e.sub(sn).multiplyScalar(Mt).add(sn),sn!==ke&&ke.sub(sn).multiplyScalar(Mt).add(sn)}else{nt.subVectors($e,ke).divideScalar(Qe);let sn=_.containerExit(ke,nt)-.02,ar=_.armLength(ke,nt,Math.min(Ix,sn),Ir,!1);if(Mt=Math.min(Mt,Ix/Qe,Math.max(1,(ar+.5)/Qe)),Mt<=1){De.log=0;return}$e.sub(ke).multiplyScalar(Mt).add(ke)}}let je=k=>{if(X==="screen"&&A){k.preventDefault(),k.stopPropagation();let $e=k.deltaMode===1?16:k.deltaMode===2?400:1,Qe=ot(k.deltaY*$e*Lx,-.6,.6);Qe&&!H&&fe.def&&xs(Qe,vt(k)),gn();return}if(X!=="orbit"||!A||!M.enabled)return;k.preventDefault(),k.stopPropagation();let be=k.deltaMode===1?16:k.deltaMode===2?400:1,ke=ot(k.deltaY*be*Lx,-.6,.6);ke&&(ys(),gn(),De.log&&Math.sign(ke)!==Math.sign(De.log)&&(De.log=0),ke<0&&(Se(),De.anchored=!N&&qe(vt(k))),De.log=ot(De.log+ke,-1.2,1.2))};n.addEventListener("wheel",je,{passive:!1,capture:!0});let vt=k=>{let be=v.getBoundingClientRect();return{x:k.clientX-be.left,y:k.clientY-be.top}},It=k=>{Ln=vt(k),Ns=!0,te&&Math.hypot(Ln.x-te.x,Ln.y-te.y)>5&&(ne=!0),te&&X==="screen"&&!H&&fe.def&&(wi(Ln.x-te.lx,Ln.y-te.ly),gn()),te&&(te.lx=Ln.x,te.ly=Ln.y)},st=()=>{Ln=null,Ns=!0},Ct=k=>{let be=vt(k);te={...be,lx:be.x,ly:be.y,t:performance.now()},ne=!1,gn(),v.style.cursor="grabbing"},xn=k=>{let be=vt(k);if(te&&!ne&&performance.now()-te.t<450&&!H){let $e=se(be),Qe=$e&&String($e.id).startsWith("screen:")?String($e.id).slice(7):null;X==="screen"?Qe?Qe!==fe.id&&mn(Qe):ms():Qe?mn(Qe):X==="orbit"&&i&&i($e?$e.id:null)}te=null,ne=!1,Ns=!0,gn(),v.style.cursor=S?"pointer":"grab"};v.addEventListener("pointermove",It),v.addEventListener("pointerleave",st),v.addEventListener("pointerdown",Ct),v.addEventListener("pointerup",xn);let nn=k=>{X!=="screen"||k.ctrlKey||k.metaKey||k.altKey||k.key!=="ArrowLeft"&&k.key!=="ArrowRight"||(k.preventDefault(),k.stopPropagation(),H||Dr(k.key==="ArrowLeft"?-1:1))};n.addEventListener("keydown",nn);function en(k){let be=k;for(;be.parent;)be=be.parent;return!!A&&be===A.scene}let En=new C,rt=new C,Wn=new pn,Wt=new bt,Zi=new mi;function Xn(k){if(!D)return;let be=B;if(!be||be.userData.noHighlight||!en(be)){D.visible=!1;return}be.updateWorldMatrix(!0,!1),be.geometry?(be.geometry.boundingBox||be.geometry.computeBoundingBox(),be.geometry.boundingBox.getSize(En),be.geometry.boundingBox.getCenter(rt),En.multiplyScalar(1.06).addScalar(.03),Wt.compose(rt,Wn.identity(),En),D.matrix.multiplyMatrices(be.matrixWorld,Wt)):(Zi.setFromObject(be),Zi.getSize(En).multiplyScalar(1.06).addScalar(.03),Zi.getCenter(rt),D.matrix.compose(rt,Wn.identity(),En)),D.matrixWorldNeedsUpdate=!0,D.material.opacity=h?.85:.62+.28*(.5+.5*Math.sin(k*5)),D.visible=!0}function ho(){return m!=="auto"?m:!!H||N||!!te||!!De.log||Ie.easing||ui.active()||fe.moving||performance.now()-oe<900||A&&A.busy()?v2:_2}let Ei=0,yi=!1,kt=0,yn=0,di=0,mt={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Rn=!0,Oi=typeof document>"u"||!document.hidden;function fa(){mt.frames=0,mt.ticks=0,mt.t=0,mt.capTime=0,mt.cpu=0}function Zx(){let k=mt.frames/mt.t,be=mt.ticks/mt.t,ke=mt.capTime/mt.t,$e=Math.max(1,Math.min(ke>0?ke:be,be)),Qe=k<$e*.85,Mt=Nl[x];Qe?(mt.good=0,mt.slow+=1,mt.slow>=2&&$>Mt.minScale&&($=Math.max(Mt.minScale,Math.round(($-.1)*100)/100),mt.slow=0,ye())):(mt.slow=0,k>=$e*.95&&(mt.good+=1),mt.good>=5&&$<1&&($=Math.min(1,Math.round(($+.05)*100)/100),mt.good=0,ye())),g.poll(),s&&s({fps:k,target:$e,slow:Qe,scale:$,minScale:Mt.minScale,cpuMs:mt.frames?mt.cpu/mt.frames:0,gpuMs:b?g.take():null,gpuTimer:g.supported,calls:mt.calls,triangles:mt.tris,width:Math.round(Z*J*$),height:Math.round(Q*J*$),cap:m}),fa()}function rp(k){if(!yi)return;Ei=requestAnimationFrame(rp);let be=Math.max(0,(k-kt)/1e3);kt=k,mt.ticks+=1,mt.t+=be;let ke=ho();if(mt.capTime+=ke*be,mt.t>=1&&Zx(),ke>0){let Mt=1e3/ke,sn=k-yn;if(sn<Mt-1.5)return;yn=sn<Mt*2?yn+Mt:k}else yn=k;let $e=performance.now(),Qe=Math.min(.1,Math.max(0,(k-di)/1e3));if(di=k,z+=Qe,H){H.t+=Qe;let Mt=Gi(Math.min(1,H.t/H.d));if(w.position.lerpVectors(H.p0,H.p1,Mt),G(Lm(H.yaw0,H.yaw1,Mt),Pi(H.pitch0,H.pitch1,Mt)),H.t>=H.d){let sn=H;H=null,sn.mode==="look"?ui.sync():sn.mode==="orbit"&&M.target.copy(sn.target)}}else if(N&&A){if(re-=Qe,re<=0){re=.4;let Mt=A.focus(ve);Mt||ve.fromArray(A.presets.overview.target),Mt!==q&&(q=Mt,j=1.6,o&&o(Mt))}if(ee.subVectors(w.position,M.target),M.target.lerp(ve,1-Math.exp(-2.4*Qe)),j>0){if(j-=Qe,!he){let Mt=Ve("overview");he=Mt.pos.distanceTo(Mt.target)}ee.setLength(Kt(ee.length(),q?6.8:he,2,Qe))}w.position.copy(M.target).add(ee)}if(H||(X==="orbit"?(Pe(Qe),Ae(),M.update(),Ee()):X==="screen"?fe.def&&gs(Qe):ui.update(Qe)),Y(Qe),A&&A.update(Qe,z,E),or-=Qe,Ns&&or<=0){or=.08,Ns=!1;let Mt=Ln&&!te?se(Ln):null;Mt&&X==="screen"&&Mt.id===`screen:${fe.id}`&&(Mt=null);let sn=Mt?Mt.id:null;B=Mt?Mt.obj:null,te||(v.style.cursor=sn?"pointer":"grab"),(sn||S)&&(S=sn,t&&t(sn?{id:sn,x:Ln.x,y:Ln.y}:null))}Xn(z),Ce(),f.info.reset(),b&&g.begin(),R&&A&&(E.updateMatrixWorld(),A.prerender(E),R.render(A.scene,E,h?0:z)),b&&g.end(),mt.calls=f.info.render.calls,mt.tris=f.info.render.triangles,uo(),mt.frames+=1,mt.cpu+=performance.now()-$e,ue||(ue=!0,l&&l())}function fo(){let k=!Ge&&!et&&Rn&&Oi&&Z>1&&Q>1;k&&!yi?(yi=!0,kt=yn=di=performance.now(),fa(),Ei=requestAnimationFrame(rp),a&&a(!0)):!k&&yi&&(yi=!1,cancelAnimationFrame(Ei),a&&a(!1))}let op=new ResizeObserver(()=>{Fe(),fo()});op.observe(n);let Ul=typeof IntersectionObserver=="function"?new IntersectionObserver(k=>{Rn=k.some(be=>be.isIntersecting),fo()}):null;Ul&&Ul.observe(n);let ap=()=>{Oi=!document.hidden,fo()};document.addEventListener("visibilitychange",ap);let lp=k=>{k.preventDefault(),et=!0,fo(),r&&r("context-lost")},cp=()=>{et=!1,F(),ie(),fo()};v.addEventListener("webglcontextlost",lp),v.addEventListener("webglcontextrestored",cp);function up(){if(!Ge){Ge=!0,yi=!1,cancelAnimationFrame(Ei),op.disconnect(),Ul&&Ul.disconnect(),document.removeEventListener("visibilitychange",ap),v.removeEventListener("pointermove",It),v.removeEventListener("pointerleave",st),v.removeEventListener("pointerdown",Ct),v.removeEventListener("pointerup",xn),v.removeEventListener("webglcontextlost",lp),v.removeEventListener("webglcontextrestored",cp),n.removeEventListener("wheel",je,{capture:!0}),n.removeEventListener("keydown",nn),M.dispose(),ui.dispose();try{g.dispose(),F()}finally{U.dispose(),f.dispose(),f.forceContextLoss(),v.remove(),y.remove()}}}try{Fe(!0),ie(),We("overview")}catch(k){throw up(),k}return fo(),{setState(k){V=k,A&&A.setState(k)},setLive(k){P={...P||{},...k},A&&A.setLive(k)},getQuality:()=>x,autoQuality:()=>p,setQuality(k){!Nl[k]||k===x||(x=k,B=null,F(),ie())},getFrameCap:()=>m,setFrameCap(k){da.includes(k)&&(m=k)},getLook:()=>W,setLook(k){!eo.includes(k)||k===W||(W=k,A&&A.setLook(k)&&(O(),le()),gn())},getBrightness:()=>ce,setBrightness(k){ce=ot(Number(k)||dn.initial,dn.min,dn.max),A&&(A.setBrightness(ce),O()),gn()},setPerfDetail(k){b=!!k&&g.supported},setCameraPreset(k){N=!1,Ue(k),gn()},getMode:()=>X,setMode(k){!tp.includes(k)||k===X||(H=null,k==="look"?_e("look"):pe(),gn())},screens:()=>Oe().map(k=>k.id),getScreen:()=>fe.id,focusScreen:k=>mn(k),stepScreen(k){X==="screen"&&!H&&Dr(k<0?-1:1)},exitScreen:ms,setFollow(k){k&&X==="screen"&&(H=null,_e(fe.back?fe.back.mode:"orbit")),k&&X!=="orbit"&&(wr(w.position)==="hall"?pe():We("overview")),N=!!k,q=void 0,re=0,N&&(H=null)},setLabels(k){Ne=Array.isArray(k)?k:[],Ls()},setLabelsVisible(k){at=!!k,y.style.display=at?"":"none"},stats:()=>A?A.stats():null,dispose:up}}var sr=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),I2=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:sr(3,"a"),new_string:sr(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:sr(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:sr(6,"c"),new_string:sr(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:sr(4,"v"),new_string:sr(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:sr(2,"b"),new_string:sr(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],Ol={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*L2(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:Ol.provider,model:Ol.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...Ol}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),f=Math.max(3,Math.round(h/.12));for(let p=0;p<f;p++){let x=d*(.82+.36*Math.abs(Math.sin(p*1.7+s)));e.streamed+=u/f,yield{live:{phase:c,tps:x}},yield{wait:h/f}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,f,p,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:f,secs:p,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,f)=>h.secs-f.secs),d=.08*c.length;for(let h of u){let f=Math.max(0,h.secs-d);f>0&&(yield{wait:f}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*D2(n){for(;;)for(let e of I2)yield*L2(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function Nx({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=Is(Ol.provider,Ol.model),r=D2(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&pd(u.usage);return h&&(i.balance=Math.max(0,i.balance-md(h,s,nr(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,f=0;for(;f<u;){let{value:p}=r.next();p.wait?h+=p.wait*1e3*3:p.event&&(d.push(l(p,h)),p.event==="turn/end"&&f++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:f}=r.next();if(f.wait){d.length&&n?.(d),o=setTimeout(u,f.wait*1e3/t);return}f.event?d.push(l(f,Date.now())):f.live&&e?.(c(f.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var Ox=`
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
`;var{useEffect:ha,useRef:Gn,useState:wn,useReducer:Wx,useCallback:Pd}=we,Fl=!0,ip="dwp3d.quality",Fx="dwp3d.hint",Ux="dwp3d.hint.look",N2=["overview","fuel","engine","stations","products","living","balcony"],O2=["raw","normal","gold","bad"],kx={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},Bx={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},F2=200,U2=4,Id=3,Xx="dwp3d.fps",zx="dwp3d.perf",qx="dwp3d.look",$x="dwp3d.brightness";function lo(n){try{return window.localStorage.getItem(n)}catch{return null}}function Lr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function Hx(){let n=lo(ip);return ao.includes(n)?n:null}function k2(){let n=lo(Xx),e=n==null?"auto":Number(n);return da.includes(e)?e:"auto"}function B2(){return typeof we.useId=="function"?we.useId():"dwp3d"}function z2(){let n=lo(qx);return eo.includes(n)?n:Ar}function H2(){let n=Number(lo($x));return Number.isFinite(n)&&n>=dn.min&&n<=dn.max?n:dn.initial}function G2(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function V2({t:n,perf:e}){if(!e)return we.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},we.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),Qt(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return we.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>we.createElement("div",{key:s,className:"dwp3d-perf-row"},we.createElement("span",null,s),we.createElement("b",null,r))))}function W2(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":"products":null}function X2(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function q2(n){let[e,t]=Wx(i=>i+1,0);return ha(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var sp=(n,e)=>n&&(n[e]||n.en)||"",np=(n,e)=>`${sp(n,e)} · ${n.code}`;function Gx(n){let e=t=>({id:t,text:sp(Zt[t],n),sub:Zt[t].code});return[e("tank"),e("engine"),e("robot"),...ld.map(t=>({id:`station:${t}`,text:sp(ci[t],n),sub:ci[t].code})),e("loadport"),e("stocker"),e("living")]}var $2=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework";function Vx(n,e){let t=[[n("status."+$2(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:e.files.length})]];for(let s of e.files.slice(0,6))t.push([Tf(s.path),`+${s.added} −${s.removed}`]);e.files.length>6&&t.push(["…",`+${e.files.length-6}`]);let i=(e.endedAt||Date.now())-e.startedAt;return t.push(["",n("hover.batchCost",{cost:Cn(e.cost),time:Kg(i)})]),t}function Y2(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:np(Zt[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:Cn(d)});switch(n){case"tank":{let d=[[t(Fl?"m.balanceDemo":"m.balance"),e.balance==null?t("m.balanceNone"):Cn(e.balance,e.currency)]];return o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${Yi(l.contextRatio)} · ${Qt(i.contextTokens)} / ${Qt(i.contextWindow)}`],[t("row.miss"),Qt(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),Qt(i.totals.write)]),d.push([t("row.hit"),Qt(i.totals.hit)],[t("row.output"),Qt(i.totals.output)],[t("row.reasoning"),Qt(i.totals.reasoning)],[t("row.cost"),Cn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"stocker":{let d=i.turns.filter(f=>f.status!=="running"),h=d.filter(f=>f.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${np(Zt.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:Vx(t,d)}}default:break}if(n.startsWith("screen:")){let d=n.slice(7),h={flow:"screen.descFlow",main:"screen.descMain",cost:"screen.descCost"}[d];return h?{title:t("screen."+d),body:t(h),rows:[["",t("screen.click")]]}:null}if(n.startsWith("station:")){let d=n.slice(8),h=ci[d];if(!h)return null;let f=i.calls.filter(b=>b.kind===d),p=f.filter(b=>b.status==="running").pop(),x=f[f.length-1],m=[];p?m.push([t("hover.working"),p.label||p.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=f.filter(b=>b.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:np(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(f=>f.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?Vx(t,h):[]}}return null}function K2({hover:n,data:e,rootRef:t}){let i=Y2(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return we.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},we.createElement("h4",null,i.title),i.body?we.createElement("p",null,i.body):null,i.rows.length?we.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>we.createElement("div",{className:"row",key:h},we.createElement("span",null,u),we.createElement("span",null,d)))):null)}function Z2({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return we.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},we.createElement("div",{className:"k"},n.k),we.createElement("div",{className:"v"},n.v),n.s?we.createElement("div",{className:"s"},n.s):null,n.bar!=null?we.createElement("div",{className:"dwp3d-bar"},we.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function J2({t:n,calls:e}){return we.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},we.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=Bx[t.status]?t.status:"running",s=Bx[i],r=ci[t.kind]||ci.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return we.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},we.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),we.createElement("span",{className:"dwp3d-sr"},n("call."+i)),we.createElement("code",null,r.code),we.createElement("span",{className:"l"},o))}):we.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function j2({t:n,hintOn:e,hintKey:t,onDismiss:i}){return we.createElement("div",{className:"dwp3d-panel dwp3d-legend"},we.createElement("div",{className:"dwp3d-legend-row"},we.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),O2.map(s=>we.createElement("span",{className:"dwp3d-legend-item",key:s},we.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?we.createElement("div",{className:"dwp3d-hint"},we.createElement("span",null,n(t)),we.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}function Q2({t:n,id:e,ids:t,onStep:i,onBack:s}){let r=Math.max(0,t.indexOf(e)),o=t.length>1;return we.createElement("div",{className:"dwp3d-screenbar-wrap"},we.createElement("div",{className:"dwp3d-panel dwp3d-screenbar",role:"toolbar","aria-label":n("screen.bar")},we.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.prev"),"aria-label":n("screen.prev"),onClick:()=>i(-1)},"◀"),we.createElement("div",{className:"dwp3d-screenbar-name","aria-live":"polite"},we.createElement("b",null,n("screen."+e)),we.createElement("span",null,n("screen.count",{i:r+1,n:t.length}))),we.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.next"),"aria-label":n("screen.next"),onClick:()=>i(1)},"▶"),we.createElement("span",{className:"sep","aria-hidden":"true"}),we.createElement("button",{type:"button",className:"dwp3d-btn",onClick:s},n("screen.back"))),we.createElement("p",{className:"dwp3d-screenbar-hint"},n("screen.hint")))}var eT=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function Yx(n){let{ctx:e}=n,t=q2(e),i=X2(e),s=n.tBound||n.t,r=Pd((S,B)=>{let te=typeof s=="function"?s(S):S,ne=typeof te=="string"&&te?te:S;return B?Zg(ne,B):ne},[s]),o=Gn(r);o.current=r;let a=Gn(i);a.current=i;let l=Gn(null),c=Gn(null),u=Gn(null),d=Gn(Vf()),h=Gn({phase:"idle",tps:0,balance:null,currency:"CNY"}),f=Gn(0),p=Gn(!1),x=Gn(!0),m=Gn(0),g=Gn({settle:Id,low:0}),[,b]=Wx(S=>S+1,0),[v,y]=wn(0),[w,E]=wn(()=>Hx()!=null),_=Gn(w),[M,A]=wn(()=>Hx()||"medium"),R=Gn(M),[D,U]=wn(k2),V=Gn(D),[P,Z]=wn(()=>lo(zx)==="on"),Q=Gn(P);Q.current=P;let[J,$]=wn(null),[H,X]=wn(z2),N=Gn(H),[q,re]=wn(H2),j=Gn(q),[he,ve]=wn(!1),ee=B2(),[ge,Ne]=wn("overview"),[at,Ge]=wn(!1),[et,ue]=wn(!0),oe=Gn(et);oe.current=et;let[z,W]=wn(!0),[ce,K]=wn(()=>lo(Fx)!=="off"),[le,Ce]=wn(()=>lo(Ux)!=="off"),[F,ie]=wn("orbit"),[de,O]=wn(null),[Ze,ct]=wn(!1),[yt,Re]=wn(null),[Ee,Ae]=wn(!0),[Ie,I]=wn(null),[T,Y]=wn(null),[Se,ye]=wn(null),Fe=Pd(()=>{f.current||(f.current=setTimeout(()=>{f.current=0,x.current?b():p.current=!0},F2))},[]),Ve=Pd(S=>{ye(S),clearTimeout(m.current),m.current=setTimeout(()=>ye(null),3500)},[]),xe=Pd(S=>{ao.includes(S)&&(R.current=S,A(S),g.current={settle:Id,low:0},u.current&&u.current.setQuality(S))},[]);ha(()=>{let S=c.current;if(!S)return;let B=null,te=null,ne=!1,se=0;Ae(!0),I(null),Y(null),Re(null),ie("orbit"),O(null);let De=Pe=>{I(Ct=>Ct&&Ct.kind==="lost"?null:Ct),Q.current&&$(Pe);let je=g.current;if(je.settle>0){je.settle-=1;return}if(_.current)return;let vt=Pe&&Pe.scale<=Pe.minScale+.001;if(je.low=Pe&&Pe.slow&&vt?je.low+1:0,je.low<U2)return;je.low=0;let It=ao.indexOf(R.current);if(It<=0)return;let st=ao[It-1];xe(st),Ve(o.current("quality.downgraded",{q:o.current(`quality.${st}`)}))},nt=()=>{try{B=Dx(S,{quality:_.current?R.current:"auto",fps:V.current,look:N.current,brightness:j.current,demo:Fl,onHover:Re,onSelect:Pe=>{let je=W2(Pe);!je||!B||(B.setCameraPreset(je),Ne(je),Ge(!1))},onPerf:De,onError:(Pe,je)=>{if(Pe==="shader"){Y(vt=>vt||String(je||""));return}Pe==="context-lost"&&(Re(null),I({kind:"lost"}))},onActive:Pe=>{x.current=Pe,Pe&&p.current&&(p.current=!1,b())},onReady:()=>Ae(!1),onMode:Pe=>{ie(Pe),(Pe==="look"||Pe==="screen")&&Ge(!1)},onScreen:Pe=>{O(Pe),Pe&&Re(null)}})}catch(Pe){for(;S.firstChild;)S.removeChild(S.firstChild);Ae(!1),I({kind:"webgl",msg:String(Pe&&Pe.message||Pe)});return}u.current=B,R.current=B.getQuality(),A(R.current),g.current={settle:Id,low:0},B.setLabels(Gx(a.current)),B.setLabelsVisible(oe.current),B.setPerfDetail(Q.current),te=Nx({onEvents:Pe=>{d.current=Wf(d.current,Pe),B.setState(d.current),Fe()},onLive:Pe=>{h.current={...h.current,...Pe},B.setLive(Pe),Fe()}}),d.current=Wf(Vf(),te.prefill(2)),h.current={phase:"idle",tps:0,balance:te.balance,currency:"CNY"},B.setState(d.current),B.setLive(h.current),te.start(),b()},qe=requestAnimationFrame(()=>{se=requestAnimationFrame(()=>{ne||nt()})});return()=>{ne=!0,cancelAnimationFrame(qe),cancelAnimationFrame(se),te&&te.stop(),B&&B.dispose(),u.current=null,clearTimeout(f.current),f.current=0}},[v,xe,Fe,Ve]),ha(()=>()=>clearTimeout(m.current),[]),ha(()=>{u.current&&u.current.setLabels(Gx(i))},[i,t]),ha(()=>{u.current&&u.current.setLabelsVisible(et)},[et]),ha(()=>{let S=()=>ct(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",S),()=>document.removeEventListener("fullscreenchange",S)},[]);let me=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},ze=S=>{let B=u.current;B&&(B.setCameraPreset(S),Ne(S),Ge(!1),B.getMode()==="look"&&me())},G=()=>{let S=u.current;if(S){if(S.getScreen()){S.exitScreen();return}S.focusScreen("main")&&(Ge(!1),me())}},_e=S=>{u.current&&u.current.stepScreen(S)},pe=()=>{u.current&&u.current.exitScreen()},We=()=>{let S=!at;Ge(S),u.current&&u.current.setFollow(S)},Ue=()=>{let S=l.current;if(!S)return;let B=()=>Ve(o.current("error.fullscreen"));try{let te=document.fullscreenElement?document.exitFullscreen():S.requestFullscreen();te&&typeof te.catch=="function"&&te.catch(B)}catch{B()}},He=S=>{if(S==="auto"){Lr(ip,null),_.current=!1,E(!1),u.current&&xe(u.current.autoQuality());return}ao.includes(S)&&(Lr(ip,S),_.current=!0,E(!0),xe(S))},fe=S=>{let B=S==="auto"?"auto":Number(S);da.includes(B)&&(V.current=B,U(B),Lr(Xx,B==="auto"?null:String(B)),g.current={settle:Id,low:0},u.current&&u.current.setFrameCap(B))},At=()=>{let S=!P;Z(S),Lr(zx,S?"on":null),S||$(null),u.current&&u.current.setPerfDetail(S)},Oe=S=>{eo.includes(S)&&(N.current=S,X(S),Lr(qx,S===Ar?null:S),u.current&&u.current.setLook(S))},ht=S=>{let B=Math.min(dn.max,Math.max(dn.min,Number(S)||dn.initial));j.current=B,re(B),Lr($x,Math.abs(B-dn.initial)<.001?null:String(B)),u.current&&u.current.setBrightness(B)},wt=()=>{F==="look"?(Lr(Ux,"off"),Ce(!1)):(Lr(Fx,"off"),K(!1))},Ke=S=>{let B=u.current;B&&(B.setMode(S),ie(B.getMode()),S==="look"&&(Ge(!1),me()))},zt=()=>y(S=>S+1),ft=d.current,mn=h.current,Vn=vd(ft),ms=Is(ft.provider,ft.model),Dr=nr(Date.now()),gs=mn.phase&&mn.phase!=="idle"?mn.phase:ft.phase,xs=typeof mn.balance=="number"?mn.balance:null,wi=mn.currency||"CNY",gn=xs!=null&&ms&&wi!=="USD"?gd(xs,ms,Dr):0,ys=ft.turns.filter(S=>S.status!=="running"),ui=ys.filter(S=>S.status==="ok").length,Ls=Vn.contextRatio>=.8?"#ff5d5d":Vn.contextRatio>=.6?"#ffb347":"#4d6bfe",Ki=mn.tps>.5&&(gs==="generating"||gs==="reasoning")?` · ${r("unit.tps",{n:Math.round(mn.tps)})}`:"",vs=ft.totals.miss+ft.totals.write,ii=ft.files,co=[{id:"balance",k:r(Fl?"m.balanceDemo":"m.balance"),v:xs==null?r("m.balanceNone"):Cn(xs,wi),s:gn?r("m.balanceSub",{tokens:Qt(gn)}):""},{id:"context",k:r("m.context"),v:Yi(Vn.contextRatio),s:`${Qt(ft.contextTokens)} / ${Qt(ft.contextWindow)}`,bar:Vn.contextRatio,barColor:Ls,title:r("m.contextTitle",{pct:Yi(Vn.contextRatio),used:Qt(ft.contextTokens),window:Qt(ft.contextWindow)})},{id:"input",k:r("m.input"),v:Qt(Vn.prompt),s:r("m.inputSub",{rate:Yi(Vn.hitRate),miss:Qt(vs)}),title:r("m.inputTitle",{total:Qt(Vn.prompt),hit:Qt(ft.totals.hit),rate:Yi(Vn.hitRate),miss:Qt(vs),write:ft.totals.write>0?r("m.writeNote",{n:Qt(ft.totals.write)}):"",saved:Cn(ft.totals.savings)})},{id:"output",k:r("m.output"),v:Qt(ft.totals.output),s:r("m.outputSub",{n:Qt(ft.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:Cn(ft.totals.cost),s:r("m.costSub",{peak:Cn(ft.totals.costPeak),off:Cn(ft.totals.costOffPeak)}),title:r("m.costTitle",{cost:Cn(ft.totals.cost),requests:ft.totals.requests,peak:Cn(ft.totals.costPeak),off:Cn(ft.totals.costOffPeak),saved:Cn(ft.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(ft.tools.calls),s:r("m.toolsSub",{n:ft.tools.errors,rate:Yi(Vn.toolSuccess)}),title:r("m.toolsTitle",{calls:ft.tools.calls,running:ft.tools.running,n:ft.tools.errors})},{id:"products",k:r("m.products"),v:`${ii.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:ii.added,r:ii.removed,ok:ui,done:ys.length}),title:r("m.productsTitle",{n:ii.count,a:ii.added,r:ii.removed,ok:ui,done:ys.length})},{id:"efficiency",k:r("m.efficiency"),v:`${Vn.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:Cn(Vn.costPerFile)}),title:r("m.efficiencyHint")}],uo=ft.calls.slice(-5).reverse(),Ds={t:r,s:ft,live:mn,lang:i,price:ms,peak:Dr,m:Vn,phase:gs,balance:xs,currency:wi},rr=!!Ie&&Ie.kind==="webgl",Ln=!Ee&&!rr,Ns=de&&u.current?u.current.screens():[],or=w?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+M)});return we.createElement("div",{ref:l,className:`dwp3d-root${rr?" fail":""}`},we.createElement("style",null,Ox),we.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),he?we.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>ve(!1)}):null,Ln?we.createElement("div",{className:"dwp3d-top"},we.createElement("div",{className:"dwp3d-panel dwp3d-title"},we.createElement("div",{className:"dwp3d-title-row"},we.createElement("h2",null,r("title")),Fl?we.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):null,ft.model?we.createElement("span",{className:"dwp3d-chip"},`${ft.model}${ft.effort?` · ${ft.effort}`:""}`):null,we.createElement("span",{className:"dwp3d-chip"},we.createElement("i",{className:"dwp3d-dot",style:{color:kx[gs]||kx.idle},"aria-hidden":"true"}),`${r("phase."+gs)}${Ki}`)),Fl?we.createElement("p",{className:"dwp3d-note"},r("badge.demoHint")):null,T?we.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:T})):null),we.createElement("div",{className:"dwp3d-right"},we.createElement("div",{className:"dwp3d-panel dwp3d-tools"},we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},N2.map(S=>{let B=!at&&!de&&ge===S;return we.createElement("button",{key:S,type:"button",className:`dwp3d-btn${B?" on":""}`,"aria-pressed":B,onClick:()=>ze(S)},r("view."+S))}),we.createElement("button",{type:"button",className:`dwp3d-btn${de?" on":""}`,title:r("view.screensHint"),"aria-pressed":!!de,onClick:G},r("view.screens"))),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},tp.map(S=>we.createElement("button",{key:S,type:"button",className:`dwp3d-btn${F===S?" on":""}`,title:r(`mode.${S}Hint`),"aria-pressed":F===S,onClick:()=>Ke(S)},r("mode."+S)))),we.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},we.createElement("button",{type:"button",className:`dwp3d-btn${at?" on":""}`,title:r("ctl.followHint"),"aria-pressed":at,onClick:We},r("ctl.follow")),we.createElement("button",{type:"button",className:`dwp3d-btn${et?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":et,onClick:()=>ue(S=>!S)},r("ctl.labels")),we.createElement("button",{type:"button",className:`dwp3d-btn${z?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":z,onClick:()=>W(S=>!S)},r("ctl.panels")),we.createElement("button",{type:"button",className:`dwp3d-btn${he?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":he,"aria-haspopup":"dialog",onClick:()=>ve(S=>!S)},r("ctl.display")),eT()?we.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":Ze,onClick:Ue},r(Ze?"ctl.exitFullscreen":"ctl.fullscreen")):null)),he?we.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},eo.map(S=>we.createElement("button",{key:S,type:"button",className:`dwp3d-btn${H===S?" on":""}`,"aria-pressed":H===S,onClick:()=>Oe(S)},r("look."+S))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-brightness`},r("ctl.brightness")),we.createElement("input",{id:`${ee}-brightness`,className:"dwp3d-range",type:"range",min:dn.min,max:dn.max,step:dn.step,value:q,onChange:S=>ht(S.target.value)}),we.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(q*100)}%`),we.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(q-dn.initial)<.001,onClick:()=>ht(dn.initial)},"↺")),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-quality`},r("ctl.quality")),we.createElement("select",{id:`${ee}-quality`,className:"dwp3d-select",value:w?M:"auto",onChange:S=>He(S.target.value)},we.createElement("option",{value:"auto"},or),ao.map(S=>we.createElement("option",{key:S,value:S},r("quality."+S))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),we.createElement("select",{id:`${ee}-fps`,className:"dwp3d-select",value:String(D),title:r("ctl.fpsHint"),onChange:S=>fe(S.target.value)},da.map(S=>we.createElement("option",{key:String(S),value:String(S)},G2(r,S))))),we.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},we.createElement("input",{type:"checkbox",checked:P,onChange:At}),we.createElement("span",null,r("ctl.perfShow")))):null,P?we.createElement(V2,{t:r,perf:J}):null)):null,we.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},Se?we.createElement("div",{className:"dwp3d-panel dwp3d-toast"},Se):null),Ln&&de?we.createElement(Q2,{t:r,id:de,ids:Ns,onStep:_e,onBack:pe}):null,Ln&&z&&!de?we.createElement("div",{className:"dwp3d-bottom"},we.createElement("div",{className:"dwp3d-mid"},we.createElement(J2,{t:r,calls:uo}),we.createElement(j2,{t:r,hintOn:F==="look"?le:ce,hintKey:F==="look"?"hint.look":"hint.controls",onDismiss:wt})),we.createElement("div",{className:"dwp3d-cards"},co.map(S=>we.createElement(Z2,{key:S.id,card:S})))):null,Ln&&yt&&!de?we.createElement(K2,{hover:yt,data:Ds,rootRef:l}):null,Ee&&!Ie?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},we.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,rr?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-fail",role:"alert"},we.createElement("h3",null,r("error.webglTitle")),we.createElement("p",null,r("error.webgl",{msg:Ie.msg})),we.createElement("button",{type:"button",onClick:zt},r("error.retry")))):null,Ie&&Ie.kind==="lost"?we.createElement("div",{className:"dwp3d-center dim",role:"alert"},we.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var tT="work-process-3d",nT={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(zl,fp),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(zl);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:tT,order:15,locale:zl,label:()=>e("tab.label")},t=>Kx.createElement(Yx,{...t,ctx:n,tBound:e})))}};
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
