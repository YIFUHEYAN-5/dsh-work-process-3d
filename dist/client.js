/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var mx=Object.create;var bl=Object.defineProperty;var gx=Object.getOwnPropertyDescriptor;var xx=Object.getOwnPropertyNames;var _x=Object.getPrototypeOf,yx=Object.prototype.hasOwnProperty;var vx=(n,e)=>{for(var t in e)bl(n,t,{get:e[t],enumerable:!0})},kf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of xx(e))!yx.call(n,s)&&s!==t&&bl(n,s,{get:()=>e[s],enumerable:!(i=gx(e,s))||i.enumerable});return n};var Bf=(n,e,t)=>(t=n!=null?mx(_x(n)):{},kf(e||!n||!n.__esModule?bl(t,"default",{value:n,enumerable:!0}):t,n)),bx=n=>kf(bl({},"__esModule",{value:!0}),n);var gT={};vx(gT,{default:()=>mT});module.exports=bx(gT);var px=Bf(require("react"),1);var Ml="dsh-work-process-3d",Mx={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"原型阶段：画面由内置示例会话驱动，数字、文件和命令都是示例，还没有接入本会话。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Sx={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Prototype: a built-in sample session drives the scene. The numbers, files and commands are examples, not this session.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},zf={zh:Mx,en:Sx};var Ae=Bf(require("react"),1);var ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pp=0,Qd=1,Ip=2;var Nr=1,Lp=2,Oo=3,fs=0,Kn=1,tn=2,Or=0,ps=1,Gn=2,eh=3,th=4,Fo=5;var Fr=100,Dp=101,Np=102,Op=103,Fp=104,Fc=200,cr=201,Up=202,kp=203,nh=204,ur=205,Bp=206,zp=207,Hp=208,Gp=209,Vp=210,Wp=211,Xp=212,qp=213,$p=214,tc=0,nc=1,ic=2,yo=3,sc=4,rc=5,oc=6,ac=7,ih=0,Yp=1,Kp=2,ms=0,sh=1,rh=2,oh=3,ah=4,lh=5,ch=6,Xa=7;var uh=300,Ur=301,Uo=302,Uc=303,kc=304,Ps=1e3,us=1001,lc=1002,zn=1003,Zp=1004;var qa=1005;var xn=1006,Bc=1007;var Yi=1008;var fi=1009,dh=1010,hh=1011,ko=1012,zc=1013,Ki=1014,Li=1015,di=1016,Hc=1017,Gc=1018,kr=1020,fh=35902,ph=35899,mh=1021,gh=1022,Zi=1023,Is=1026,ks=1027,Vc=1028,Wc=1029,dr=1030,Xc=1031;var qc=1033,$a=33776,Ya=33777,Ka=33778,Za=33779,$c=35840,Yc=35841,Kc=35842,Zc=35843,Jc=36196,jc=37492,Qc=37496,eu=37488,tu=37489,Ja=37490,nu=37491,iu=37808,su=37809,ru=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,du=37816,hu=37817,fu=37818,pu=37819,mu=37820,gu=37821,xu=36492,_u=36494,yu=36495,vu=36283,bu=36284,ja=36285,Mu=36286;var pa=2300,cc=2301,Ql=2302,Hd=2303,Gd=2400,Vd=2401,Wd=2402;var Jp=3200;var Su=0,jp=1,Bs="",Xn="srgb",ma="srgb-linear",ga="linear",Zt="srgb";var ec=7680;var Qp=519,e0=512,t0=513,n0=514,xh=515,i0=516,s0=517,_h=518,yh=519,vh=35044;var bh="300 es",Ci=2e3,vo=2001;function wx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ex(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r0(){let n=xa("canvas");return n.style.display="block",n}var Hf={},bo=null;function _a(...n){let e="THREE."+n.shift();bo?bo("log",e,...n):console.log(e,...n)}function o0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function yt(...n){n=o0(n);let e="THREE."+n.shift();if(bo)bo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=o0(n);let e="THREE."+n.shift();if(bo)bo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rr(...n){let e=n.join(" ");e in Hf||(Hf[e]=!0,yt(...n))}function a0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var l0={[tc]:tc,[ic]:oc,[sc]:sc,[yo]:rc,[nc]:nc,[oc]:ic,[ac]:ac,[rc]:yo},Xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=1234567,ua=Math.PI/180,Mo=180/Math.PI;function zs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Mh(n,e){return(n%e+e)%e}function Tx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ax(n,e,t){return n!==e?(t-n)/(e-n):0}function da(n,e,t){return(1-t)*n+t*e}function Rx(n,e,t,i){return da(n,e,1-Math.exp(-t*i))}function Cx(n,e=1){return e-Math.abs(Mh(n,e*2)-e)}function Px(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ix(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Dx(n,e){return n+Math.random()*(e-n)}function Nx(n){return n*(.5-Math.random())}function Ox(n){n!==void 0&&(Gf=n);let e=Gf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fx(n){return n*ua}function Ux(n){return n*Mo}function kx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*u,a*c);break;default:yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wh(n,e){if(e.constructor===Float32Array)return n;let t=wu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Eh(n,e){if(e.constructor===Float32Array)return n;let t=wu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Eu={DEG2RAD:ua,RAD2DEG:Mo,generateUUID:zs,clamp:Pt,euclideanModulo:Mh,mapLinear:Tx,inverseLerp:Ax,lerp:da,damp:Rx,pingpong:Cx,smoothstep:Px,smootherstep:Ix,randInt:Lx,randFloat:Dx,randFloatSpread:Nx,seededRandom:Ox,degToRad:Fx,radToDeg:Ux,isPowerOfTwo:kx,ceilPowerOfTwo:Bx,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:zx,normalize:Eh,denormalize:wh},ye=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*x;m<0&&(h=-h,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,a=Math.sin(a*_)/b,l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-a*p,e[t+2]=c*f+u*p+a*h-l*d,e[t+3]=u*f-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gd=new R,Vf=new _n,Et=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],x=s[0],m=s[3],g=s[6],_=s[1],b=s[4],y=s[7],w=s[2],S=s[5],v=s[8];return r[0]=o*x+a*_+l*w,r[3]=o*m+a*b+l*S,r[6]=o*g+a*y+l*v,r[1]=c*x+u*_+d*w,r[4]=c*m+u*b+d*S,r[7]=c*g+u*y+d*v,r[2]=h*x+p*_+f*w,r[5]=h*m+p*b+f*S,r[8]=h*g+p*y+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,f=t*d+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xd.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xd.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xd=new Et,Wf=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xf=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hx(){let n={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Zt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(s.r=_o(s.r),s.g=_o(s.g),s.b=_o(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bs?ga:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ma]:{primaries:e,whitePoint:i,transfer:ga,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:Zt,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),n}var Ft=Hx();function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qr,uc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=xa("canvas")),Qr.width=e.width,Qr.height=e.height;let s=Qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gx=0,So=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_d(s[o].image)):r.push(_d(s[o]))}else r=_d(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function _d(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}var Vx=0,yd=new R,li=class n extends Xi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=us,s=us,r=xn,o=Yi,a=Zi,l=fi,c=n.DEFAULT_ANISOTROPY,u=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=zs(),this.name="",this.source=new So(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=uh;li.DEFAULT_ANISOTROPY=1;var an=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(p+1)/2,w=(g+1)/2,S=(u+h)/4,v=(d+x)/4,M=(f+m)/4;return b>y&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=v/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=v/r,s=M/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new li({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new So(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends dc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ya=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var St=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),r=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=f*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,Xx)}lookAt(e,t,i){let s=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Js.crossVectors(i,yi),Js.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Js.crossVectors(i,yi)),Js.normalize(),Sl.crossVectors(yi,Js),s[0]=Js.x,s[4]=Sl.x,s[8]=yi.x,s[1]=Js.y,s[5]=Sl.y,s[9]=yi.y,s[2]=Js.z,s[6]=Sl.z,s[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],_=i[3],b=i[7],y=i[11],w=i[15],S=s[0],v=s[4],M=s[8],D=s[12],A=s[1],N=s[5],F=s[9],B=s[13],I=s[2],Y=s[6],Z=s[10],G=s[14],$=s[3],z=s[7],X=s[11],se=s[15];return r[0]=o*S+a*A+l*I+c*$,r[4]=o*v+a*N+l*Y+c*z,r[8]=o*M+a*F+l*Z+c*X,r[12]=o*D+a*B+l*G+c*se,r[1]=u*S+d*A+h*I+p*$,r[5]=u*v+d*N+h*Y+p*z,r[9]=u*M+d*F+h*Z+p*X,r[13]=u*D+d*B+h*G+p*se,r[2]=f*S+x*A+m*I+g*$,r[6]=f*v+x*N+m*Y+g*z,r[10]=f*M+x*F+m*Z+g*X,r[14]=f*D+x*B+m*G+g*se,r[3]=_*S+b*A+y*I+w*$,r[7]=_*v+b*N+y*Y+w*z,r[11]=_*M+b*F+y*Z+w*X,r[15]=_*D+b*B+y*G+w*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],_=l*p-c*h,b=a*p-c*d,y=a*h-l*d,w=o*p-c*u,S=o*h-l*u,v=o*d-a*u;return t*(x*_-m*b+g*y)-i*(f*_-m*w+g*S)+s*(f*b-x*w+g*v)-r*(f*y-x*S+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,b=t*l-s*o,y=t*c-r*o,w=i*l-s*a,S=i*c-r*a,v=s*c-r*l,M=u*x-d*f,D=u*m-h*f,A=u*g-p*f,N=d*m-h*x,F=d*g-p*x,B=h*g-p*m,I=_*B-b*F+y*N+w*A-S*D+v*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/I;return e[0]=(a*B-l*F+c*N)*Y,e[1]=(s*F-i*B-r*N)*Y,e[2]=(x*v-m*S+g*w)*Y,e[3]=(h*S-d*v-p*w)*Y,e[4]=(l*A-o*B-c*D)*Y,e[5]=(t*B-s*A+r*D)*Y,e[6]=(m*y-f*v-g*b)*Y,e[7]=(u*v-h*y+p*b)*Y,e[8]=(o*F-a*A+c*M)*Y,e[9]=(i*A-t*F-r*M)*Y,e[10]=(f*S-x*y+g*_)*Y,e[11]=(d*y-u*S-p*_)*Y,e[12]=(a*D-o*N-l*M)*Y,e[13]=(t*N-i*D+s*M)*Y,e[14]=(x*b-f*w-m*_)*Y,e[15]=(u*w-d*b+h*_)*Y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,x=o*u,m=o*d,g=a*d,_=l*c,b=l*u,y=l*d,w=i.x,S=i.y,v=i.z;return s[0]=(1-(x+g))*w,s[1]=(p+y)*w,s[2]=(f-b)*w,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(h+g))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(f+b)*v,s[9]=(m-_)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=eo.set(s[0],s[1],s[2]).length(),a=eo.set(s[4],s[5],s[6]).length(),l=eo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gi.copy(this);let c=1/o,u=1/a,d=1/l;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=d,Gi.elements[9]*=d,Gi.elements[10]*=d,t.setFromRotationMatrix(Gi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Ci,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===Ci)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ci,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===Ci)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===vo)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},eo=new R,Gi=new St,Wx=new R(0,0,0),Xx=new R(1,1,1),Js=new R,Sl=new R,yi=new R,qf=new St,$f=new _n,ci=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $f.setFromEuler(this),this.setFromQuaternion($f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qx=0,Yf=new R,to=new _n,Ss=new St,wl=new R,Qo=new R,$x=new R,Yx=new _n,Kf=new R(1,0,0),Zf=new R(0,1,0),Jf=new R(0,0,1),jf={type:"added"},Kx={type:"removed"},no={type:"childadded",child:null},vd={type:"childremoved",child:null},cn=class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new ci,i=new _n,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Et}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wl.copy(e):wl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(Qo,wl,this.up):Ss.lookAt(wl,Qo,this.up),this.quaternion.setFromRotationMatrix(Ss),s&&(Ss.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Ss),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),no.child=e,this.dispatchEvent(no),no.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kx),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new R(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zx={type:"move"},Eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},El={h:0,s:0,l:0};function bd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ue=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ft.workingColorSpace){if(e=Mh(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bd(o,r,e+1/3),this.g=bd(o,r,e),this.b=bd(o,r,e-1/3)}return Ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){let i=c0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Ft.workingToColorSpace(Qn.copy(this),e),Math.round(Pt(Qn.r*255,0,255))*65536+Math.round(Pt(Qn.g*255,0,255))*256+Math.round(Pt(Qn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Qn.copy(this),t);let i=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=Xn){Ft.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,i=Qn.g,s=Qn.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(El);let i=da(js.h,El.h,t),s=da(js.s,El.s,t),r=da(js.l,El.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new Ue;Ue.NAMES=c0;var Cr=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vi=new R,ws=new R,Md=new R,Es=new R,io=new R,so=new R,Qf=new R,Sd=new R,wd=new R,Ed=new R,Td=new an,Ad=new an,Rd=new an,Rs=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Vi.subVectors(s,t),ws.subVectors(i,t),Md.subVectors(e,t);let o=Vi.dot(Vi),a=Vi.dot(ws),l=Vi.dot(Md),c=ws.dot(ws),u=ws.dot(Md),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Es.x),l.addScaledVector(o,Es.y),l.addScaledVector(a,Es.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(e,t),Ad.fromBufferAttribute(e,i),Rd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Td,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Rd,r.z),o}static isFrontFacing(e,t,i,s){return Vi.subVectors(i,t),ws.subVectors(e,t),Vi.cross(ws).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),ws.subVectors(this.a,this.b),Vi.cross(ws).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;io.subVectors(s,i),so.subVectors(r,i),Sd.subVectors(e,i);let l=io.dot(Sd),c=so.dot(Sd);if(l<=0&&c<=0)return t.copy(i);wd.subVectors(e,s);let u=io.dot(wd),d=so.dot(wd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(io,o);Ed.subVectors(e,r);let p=io.dot(Ed),f=so.dot(Ed);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(so,a);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return Qf.subVectors(r,s),a=(d-u)/(d-u+(p-f)),t.copy(s).addScaledVector(Qf,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(io,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Al.subVectors(this.max,ea),ro.subVectors(e.a,ea),oo.subVectors(e.b,ea),ao.subVectors(e.c,ea),Qs.subVectors(oo,ro),er.subVectors(ao,oo),Sr.subVectors(ro,ao);let t=[0,-Qs.z,Qs.y,0,-er.z,er.y,0,-Sr.z,Sr.y,Qs.z,0,-Qs.x,er.z,0,-er.x,Sr.z,0,-Sr.x,-Qs.y,Qs.x,0,-er.y,er.x,0,-Sr.y,Sr.x,0];return!Cd(t,ro,oo,ao,Al)||(t=[1,0,0,0,1,0,0,0,1],!Cd(t,ro,oo,ao,Al))?!1:(Rl.crossVectors(Qs,er),t=[Rl.x,Rl.y,Rl.z],Cd(t,ro,oo,ao,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ts=[new R,new R,new R,new R,new R,new R,new R,new R],Wi=new R,Tl=new ui,ro=new R,oo=new R,ao=new R,Qs=new R,er=new R,Sr=new R,ea=new R,Al=new R,Rl=new R,wr=new R;function Cd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wr.fromArray(n,r);let a=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Tn=new R,Cl=new ye,Jx=0,ei=class extends Xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vh,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=e!==void 0?wu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eh(e,this.array)}};var va=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xt=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}},jx=new ui,ta=new R,Pd=new R,Pi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let t=ta.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ta,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Pd)),this.expandByPoint(ta.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qx=0,Ri=new St,Id=new cn,lo=new R,vi=new ui,na=new ui,kn=new R,Ht=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wx(e)?ba:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];na.setFromBufferAttribute(a),this.morphTargetsRelative?(kn.addVectors(vi.min,na.min),vi.expandByPoint(kn),kn.addVectors(vi.max,na.max),vi.expandByPoint(kn)):(vi.expandByPoint(na.min),vi.expandByPoint(na.max))}vi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kn.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(e,c),kn.add(lo)),s=Math.max(s,i.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new R,l[D]=new R;let u=new R,d=new R,h=new R,p=new ye,f=new ye,x=new ye,m=new R,g=new R;function _(D,A,N){c[D]=c[A]=c[N]=1,u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,N),p.fromBufferAttribute(r,D),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,N),d.sub(u),h.sub(u),f.sub(p),x.sub(p);let F=1/(f.x*x.y-x.x*f.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(F),a[D].add(m),a[A].add(m),a[N].add(m),l[D].add(g),l[A].add(g),l[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,A=b.length;D<A;++D){let N=b[D],F=N.start,B=N.count;for(let I=F,Y=F+B;I<Y;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new R,w=new R,S=new R,v=new R;function M(D){S.fromBufferAttribute(s,D),v.copy(S);let A=a[D];y.copy(A),y.sub(S.multiplyScalar(S.dot(A))).normalize(),w.crossVectors(v,A);let F=w.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,F)}for(let D=0,A=i.count;D<A;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new ei(h,u,d)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=zs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ep(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function ep(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=zs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var oi=new R,To=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?wu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyMatrix4(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.applyNormalMatrix(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)oi.fromBufferAttribute(this,t),oi.transformDirection(e),this.setXYZ(t,oi.x,oi.y,oi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eh(e,this.data.array)}},Ld=new R,e_=new R,t_=new Et,ai=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ld.subVectors(i,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ld),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t_.getNormalMatrix(e),s=this.coplanarPoint(Ld).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},n_=0,qi=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ps,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ur,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ds=class extends qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},co,ia=new R,uo=new R,ho=new R,fo=new ye,sa=new ye,u0=new St,Pl=new R,ra=new R,Il=new R,tp=new ye,Dd=new ye,np=new ye,Ls=class extends cn{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",co===void 0){co=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ma(t,5);co.setIndex([0,1,2,0,2,3]),co.setAttribute("position",new To(i,3,0,!1)),co.setAttribute("uv",new To(i,2,3,!1))}this.geometry=co,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),u0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ho.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-ho.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ll(Pl.set(-.5,-.5,0),ho,o,uo,s,r),Ll(ra.set(.5,-.5,0),ho,o,uo,s,r),Ll(Il.set(.5,.5,0),ho,o,uo,s,r),tp.set(0,0),Dd.set(1,0),np.set(1,1);let a=e.ray.intersectTriangle(Pl,ra,Il,!1,ia);if(a===null&&(Ll(ra.set(-.5,.5,0),ho,o,uo,s,r),Dd.set(0,1),a=e.ray.intersectTriangle(Pl,Il,ra,!1,ia),a===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Rs.getInterpolation(ia,Pl,ra,Il,tp,Dd,np,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ll(n,e,t,i,s,r){fo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(sa.x=r*fo.x-s*fo.y,sa.y=s*fo.x+r*fo.y):sa.copy(fo),n.copy(e),n.x+=sa.x,n.y+=sa.y,n.applyMatrix4(u0)}var As=new R,Nd=new R,Dl=new R,Nl=new R,Ds=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,As)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=As.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(As.copy(this.origin).addScaledVector(this.direction,t),As.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nd.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Nl.copy(this.origin).sub(Nd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Dl),a=Nl.dot(this.direction),l=-Nl.dot(Dl),c=Nl.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nd).addScaledVector(Dl,h),p}intersectSphere(e,t){if(e.radius<0)return null;As.subVectors(e.center,this.origin);let i=As.dot(this.direction),s=As.dot(As)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,As)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,b=i.z-o.z,y=Math.abs(l),w=Math.abs(c),S=Math.abs(u),v,M,D,A,N,F,B,I,Y,Z,G,$;if(y>=w&&y>=S?(D=l,F=d,Y=f,$=g,l>=0?(v=c,M=u,A=h,N=p,B=x,I=m,Z=_,G=b):(v=u,M=c,A=p,N=h,B=m,I=x,Z=b,G=_)):w>=S?(D=c,F=h,Y=x,$=_,c>=0?(v=u,M=l,A=p,N=d,B=m,I=f,Z=b,G=g):(v=l,M=u,A=d,N=p,B=f,I=m,Z=g,G=b)):(D=u,F=p,Y=m,$=b,u>=0?(v=l,M=c,A=d,N=h,B=f,I=x,Z=g,G=_):(v=c,M=l,A=h,N=d,B=x,I=f,Z=_,G=g)),D===0)return null;let z=v/D,X=M/D,se=1/D,Se=A-z*F,Oe=N-X*F,Q=B-z*Y,ve=I-X*Y,Ee=Z-z*$,ie=G-X*$,xe=Ee*ve-ie*Q,Le=Se*ie-Oe*Ee,ht=Q*Oe-ve*Se;if(s){if(xe<0||Le<0||ht<0)return null}else if((xe<0||Le<0||ht<0)&&(xe>0||Le>0||ht>0))return null;let Ve=xe+Le+ht;if(Ve===0)return null;let me=se*(xe*F+Le*Y+ht*$);return(Ve>0?me<0:me>0)?null:this.at(me/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ip=new St,Er=new Ds,Ol=new Pi,sp=new R,Fl=new R,Ul=new R,kl=new R,Od=new R,Bl=new R,rp=new R,zl=new R,ut=class extends cn{constructor(e=new Ht,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Od.fromBufferAttribute(d,e),o?Bl.addScaledVector(Od,u):Bl.addScaledVector(Od.sub(t),u))}t.add(Bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Er.copy(e.ray).recast(e.near),!(Ol.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ol,sp)===null||Er.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),Er.copy(e.ray).applyMatrix4(ip),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=b;y<w;y+=3){let S=a.getX(y),v=a.getX(y+1),M=a.getX(y+2);s=Hl(this,g,e,i,c,u,d,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Hl(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=b;y<w;y+=3){let S=y,v=y+1,M=y+2;s=Hl(this,g,e,i,c,u,d,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,b=m+1,y=m+2;s=Hl(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function i_(n,e,t,i,s,r,o,a){let l;if(e.side===Kn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(zl);return c<t.near||c>t.far?null:{distance:c,point:zl.clone(),object:n}}function Hl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Fl),n.getVertexPosition(l,Ul),n.getVertexPosition(c,kl);let u=i_(n,e,t,i,Fl,Ul,kl,rp);if(u){let d=new R;Rs.getBarycoord(rp,Fl,Ul,kl,d),s&&(u.uv=Rs.getInterpolatedAttribute(s,a,l,c,d,new ye)),r&&(u.uv1=Rs.getInterpolatedAttribute(r,a,l,c,d,new ye)),o&&(u.normal=Rs.getInterpolatedAttribute(o,a,l,c,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new R,materialIndex:0};Rs.getNormal(Fl,Ul,kl,h.normal),u.face=h,u.barycoord=d}return u}var Sa=class extends li{constructor(e=null,t=1,i=1,s,r,o,a,l,c=zn,u=zn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class extends ei{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},po=new St,op=new St,Gl=[],ap=new ui,s_=new St,oa=new ut,aa=new Pi,$n=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,s_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),ap.copy(e.boundingBox).applyMatrix4(po),this.boundingBox.union(ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,po),aa.copy(e.boundingSphere).applyMatrix4(po),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,po),op.multiplyMatrices(i,po),oa.matrixWorld=op,oa.raycast(e,Gl);for(let o=0,a=Gl.length;o<a;o++){let l=Gl[o];l.instanceId=r,l.object=this,t.push(l)}Gl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(s*this.count),s,this.count,Vc,Li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tr=new Pi,r_=new ye(.5,.5),Vl=new R,nr=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,g-f,w-_).normalize(),s[1].setComponents(c+o,p+u,g+f,w+_).normalize(),s[2].setComponents(c+a,p+d,g+x,w+b).normalize(),s[3].setComponents(c-a,p-d,g-x,w-b).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,g-m,w-y).normalize();else if(s[4].setComponents(c-l,p-h,g-m,w-y).normalize(),t===Ci)s[5].setComponents(c+l,p+h,g+m,w+y).normalize();else if(t===vo)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);let t=r_.distanceTo(e.center);return Tr.radius=.7071067811865476+t,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vl.x=s.normal.x>0?e.max.x:e.min.x,Vl.y=s.normal.y>0?e.max.y:e.min.y,Vl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lp=new St,fc=class n{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];lp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new nr),i[s].setFromProjectionMatrix(lp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new nr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ao=class extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pc=new R,mc=new R,cp=new St,la=new Ds,Wl=new Pi,Fd=new R,up=new R,gc=class extends cn{constructor(e=new Ht,t=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)pc.fromBufferAttribute(t,s-1),mc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new xt(i,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,e.ray.intersectsSphere(Wl)===!1)return;cp.copy(s).invert(),la.copy(e.ray).applyMatrix4(cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=u.getX(x),_=u.getX(x+1),b=Xl(this,e,la,l,g,_,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(p),g=Xl(this,e,la,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Xl(this,e,la,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Xl(this,e,la,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(pc.fromBufferAttribute(a,s),mc.fromBufferAttribute(a,r),t.distanceSqToSegment(pc,mc,Fd,up)>i)return;Fd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Fd);if(!(c<e.near||c>e.far))return{distance:c,point:up.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var dp=new R,hp=new R,wa=class extends gc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dp.fromBufferAttribute(t,s),hp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dp.distanceTo(hp);e.setAttribute("lineDistance",new xt(i,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xc=class extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fp=new St,Xd=new Ds,ql=new Pi,$l=new R,Ea=class extends cn{constructor(e=new Ht,t=new xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(s),ql.radius+=r,e.ray.intersectsSphere(ql)===!1)return;fp.copy(s).invert(),Xd.copy(e.ray).applyMatrix4(fp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=h,x=p;f<x;f++){let m=c.getX(f);$l.fromBufferAttribute(d,m),pp($l,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=h,x=p;f<x;f++)$l.fromBufferAttribute(d,f),pp($l,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pp(n,e,t,i,s,r,o){let a=Xd.distanceSqToPoint(n);if(a<t){let l=new R;Xd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends li{constructor(e=[],t=Ur,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Aa=class extends li{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ns=class extends li{constructor(e,t,i=Ki,s,r,o,a=zn,l=zn,c,u=Is,d=1){if(u!==Is&&u!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new So(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ra=class extends Ns{constructor(e,t=Ki,i=Ur,s,r,o=zn,a=zn,l,c=Is){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class n extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function f(x,m,g,_,b,y,w,S,v,M,D){let A=y/v,N=w/M,F=y/2,B=w/2,I=S/2,Y=v+1,Z=M+1,G=0,$=0,z=new R;for(let X=0;X<Z;X++){let se=X*N-B;for(let Se=0;Se<Y;Se++){let Oe=Se*A-F;z[x]=Oe*_,z[m]=se*b,z[g]=I,c.push(z.x,z.y,z.z),z[x]=0,z[m]=0,z[g]=S>0?1:-1,u.push(z.x,z.y,z.z),d.push(Se/v),d.push(1-X/M),G+=1}}for(let X=0;X<M;X++)for(let se=0;se<v;se++){let Se=h+se+Y*X,Oe=h+se+Y*(X+1),Q=h+(se+1)+Y*(X+1),ve=h+(se+1)+Y*X;l.push(Se,Oe,ve),l.push(Oe,Q,ve),$+=6}a.addGroup(p,$,D),p+=$,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pn=class n extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,u=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yn=class n extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],f=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function _(){let y=new R,w=new R,S=0,v=(t-e)/i;for(let M=0;M<=r;M++){let D=[],A=M/r,N=A*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,I=B*l+a,Y=Math.sin(I),Z=Math.cos(I);w.x=N*Y,w.y=-A*i+m,w.z=N*Z,d.push(w.x,w.y,w.z),y.set(Y,v,Z).normalize(),h.push(y.x,y.y,y.z),p.push(B,1-A),D.push(f++)}x.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let A=x[D][M],N=x[D+1][M],F=x[D+1][M+1],B=x[D][M+1];(e>0||D!==0)&&(u.push(A,N,B),S+=3),(t>0||D!==r-1)&&(u.push(N,F,B),S+=3)}c.addGroup(g,S,0),g+=S}function b(y){let w=f,S=new ye,v=new R,M=0,D=y===!0?e:t,A=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*A,0),h.push(0,A,0),p.push(.5,.5),f++;let N=f;for(let F=0;F<=s;F++){let I=F/s*l+a,Y=Math.cos(I),Z=Math.sin(I);v.x=D*Z,v.y=m*A,v.z=D*Y,d.push(v.x,v.y,v.z),h.push(0,A,0),S.x=Y*.5+.5,S.y=Z*.5*A+.5,p.push(S.x,S.y),f++}for(let F=0;F<s;F++){let B=w+F,I=N+F;y===!0?u.push(I,I+1,B):u.push(I+1,I,B),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ir=class n extends Yn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ye:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],o=[],a=new R,l=new St;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ro=class extends bi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_c=class extends Ro{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var mp=new R,gp=new R,Ud=new Th,kd=new Th,Bd=new Th,yc=class extends bi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(gp.subVectors(s[0],s[1]).add(s[0]),c=gp);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(mp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Ud.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,x,m),kd.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,x,m),Bd.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(Ud.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),kd.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Bd.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Ud.calc(l),kd.calc(l),Bd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function o_(n,e){let t=1-n;return t*t*e}function a_(n,e){return 2*(1-n)*n*e}function l_(n,e){return n*n*e}function ha(n,e,t,i){return o_(n,e)+a_(n,t)+l_(n,i)}function c_(n,e){let t=1-n;return t*t*t*e}function u_(n,e){let t=1-n;return 3*t*t*n*e}function d_(n,e){return 3*(1-n)*n*n*e}function h_(n,e){return n*n*n*e}function fa(n,e,t,i,s){return c_(n,e)+u_(n,t)+d_(n,i)+h_(n,s)}var Pa=class extends bi{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,s.x,r.x,o.x,a.x),fa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vc=class extends bi{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(fa(e,s.x,r.x,o.x,a.x),fa(e,s.y,r.y,o.y,a.y),fa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ia=class extends bi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends bi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends bi{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends bi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y),ha(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(xp(a,l.x,c.x,u.x,d.x),xp(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},bc=Object.freeze({__proto__:null,ArcCurve:_c,CatmullRomCurve3:yc,CubicBezierCurve:Pa,CubicBezierCurve3:vc,EllipseCurve:Ro,LineCurve:Ia,LineCurve3:Pr,QuadraticBezierCurve:La,QuadraticBezierCurve3:Ir,SplineCurve:Da}),Co=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new bc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Os=class extends Co{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ia(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new La(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Pa(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Da(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ro(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$i=class extends Os{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Os().fromJSON(s))}return this}};function f_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=d0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=__(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let p=n[h],f=n[h+1];p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Na(r,o,t,a,l,c,0),o}function d0(n,e,t,i,s){let r;if(s===C_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=_p(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=_p(o/i|0,n[o],n[o+1],r);return r&&Po(r,r.next)&&(Fa(r),r=r.next),r}function Lr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Po(t,t.next)||gn(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Na(n,e,t,i,s,r,o){if(!n)return;!o&&r&&S_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?m_(n,i,s,r):p_(n)){e.push(l.i,n.i,c.i),Fa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=g_(Lr(n),e),Na(n,e,t,i,s,r,2)):o===2&&x_(n,e,t,i,s,r):Na(Lr(n),e,t,i,s,r,1);break}}}function p_(n){let e=n.prev,t=n,i=n.next;if(gn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=d&&f.y<=p&&ca(s,a,r,l,o,c,f.x,f.y)&&gn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function m_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(gn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,l,c),f=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=qd(p,f,e,t,i),_=qd(x,m,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=g&&y&&y.z<=_;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ca(a,u,l,d,c,h,b.x,b.y)&&gn(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&ca(a,u,l,d,c,h,y.x,y.y)&&gn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ca(a,u,l,d,c,h,b.x,b.y)&&gn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==s&&y!==o&&ca(a,u,l,d,c,h,y.x,y.y)&&gn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function g_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Po(i,s)&&f0(i,t,t.next,s)&&Oa(i,s)&&Oa(s,i)&&(e.push(i.i,t.i,s.i),Fa(t),Fa(t.next),t=n=s),t=t.next}while(t!==n);return Lr(t)}function x_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T_(o,a)){let l=p0(o,a);o=Lr(o,o.next),l=Lr(l,l.next),Na(o,e,t,i,s,r,0),Na(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function __(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=d0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(E_(c))}s.sort(y_);for(let r=0;r<s.length;r++)t=v_(s[r],t);return t}function y_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function v_(n,e){let t=b_(n,e);if(!t)return e;let i=p0(t,n);return Lr(i,i.next),Lr(t,t.next)}function b_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Po(n,t))return t;do{if(Po(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&h0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Oa(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&M_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function M_(n,e){return gn(n.prev,n,e.prev)<0&&gn(e.next,n,n.next)<0}function S_(n,e,t,i){let s=n;do s.z===0&&(s.z=qd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,w_(s)}function w_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function qd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function h0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ca(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&h0(n,e,t,i,s,r,o,a)}function T_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!A_(n,e)&&(Oa(n,e)&&Oa(e,n)&&R_(n,e)&&(gn(n.prev,n,e.prev)||gn(n,e.prev,e))||Po(n,e)&&gn(n.prev,n,n.next)>0&&gn(e.prev,e,e.next)>0)}function gn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Po(n,e){return n.x===e.x&&n.y===e.y}function f0(n,e,t,i){let s=Kl(gn(n,e,t)),r=Kl(gn(n,e,i)),o=Kl(gn(t,i,n)),a=Kl(gn(t,i,e));return!!(s!==r&&o!==a||s===0&&Yl(n,t,e)||r===0&&Yl(n,i,e)||o===0&&Yl(t,n,i)||a===0&&Yl(t,e,i))}function Yl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Kl(n){return n>0?1:n<0?-1:0}function A_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&f0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Oa(n,e){return gn(n.prev,n,n.next)<0?gn(n,e,n.next)>=0&&gn(n,n.prev,e)>=0:gn(n,e,n.prev)<0||gn(n,n.next,e)<0}function R_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function p0(n,e){let t=$d(n.i,n.x,n.y),i=$d(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function _p(n,e,t,i){let s=$d(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $d(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Yd=class{static triangulate(e,t,i=2){return f_(e,t,i)}},Ar=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yp(e),vp(i,e);let o=e.length;t.forEach(yp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,vp(i,t[l]);let a=Yd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function vp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var hs=class n extends Ht{constructor(e=new $i([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:P_,b,y=!1,w,S,v,M;if(g){b=g.getSpacedPoints(u),y=!0,h=!1;let oe=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,oe),S=new R,v=new R,M=new R}h||(m=0,p=0,f=0,x=0);let D=a.extractPoints(c),A=D.shape,N=D.holes;if(!Ar.isClockWise(A)){A=A.reverse();for(let oe=0,U=N.length;oe<U;oe++){let W=N[oe];Ar.isClockWise(W)&&(N[oe]=W.reverse())}}function B(oe){let W=10000000000000001e-36,ne=oe[0];for(let K=1;K<=oe.length;K++){let re=K%oe.length,we=oe[re],O=we.x-ne.x,ee=we.y-ne.y,ae=O*O+ee*ee,L=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ne.x),Math.abs(ne.y)),Ke=W*L*L;if(ae<=Ke){oe.splice(re,1),K--;continue}ne=we}}B(A),N.forEach(B);let I=N.length,Y=A;for(let oe=0;oe<I;oe++){let U=N[oe];A=A.concat(U)}function Z(oe,U,W){return U||Mt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(U,W)}let G=A.length;function $(oe,U,W){let ne,K,re,we=oe.x-U.x,O=oe.y-U.y,ee=W.x-oe.x,ae=W.y-oe.y,L=we*we+O*O,Ke=we*ae-O*ee;if(Math.abs(Ke)>Number.EPSILON){let ot=Math.sqrt(L),_t=Math.sqrt(ee*ee+ae*ae),Ce=U.x-O/ot,_e=U.y+we/ot,fe=W.x-ae/_t,Be=W.y+ee/_t,C=((fe-Ce)*ae-(Be-_e)*ee)/(we*ae-O*ee);ne=Ce+we*C-oe.x,K=_e+O*C-oe.y;let E=ne*ne+K*K;if(E<=2)return new ye(ne,K);re=Math.sqrt(E/2)}else{let ot=!1;we>Number.EPSILON?ee>Number.EPSILON&&(ot=!0):we<-Number.EPSILON?ee<-Number.EPSILON&&(ot=!0):Math.sign(O)===Math.sign(ae)&&(ot=!0),ot?(ne=-O,K=we,re=Math.sqrt(L)):(ne=we,K=O,re=Math.sqrt(L/2))}return new ye(ne/re,K/re)}let z=[];for(let oe=0,U=Y.length,W=U-1,ne=oe+1;oe<U;oe++,W++,ne++)W===U&&(W=0),ne===U&&(ne=0),z[oe]=$(Y[oe],Y[W],Y[ne]);let X=[],se,Se=z.concat();for(let oe=0,U=I;oe<U;oe++){let W=N[oe];se=[];for(let ne=0,K=W.length,re=K-1,we=ne+1;ne<K;ne++,re++,we++)re===K&&(re=0),we===K&&(we=0),se[ne]=$(W[ne],W[re],W[we]);X.push(se),Se=Se.concat(se)}let Oe;if(m===0)Oe=Ar.triangulateShape(Y,N);else{let oe=[],U=[];for(let W=0;W<m;W++){let ne=W/m,K=p*Math.cos(ne*Math.PI/2),re=f*Math.sin(ne*Math.PI/2)+x;for(let we=0,O=Y.length;we<O;we++){let ee=Z(Y[we],z[we],re);Le(ee.x,ee.y,-K),ne===0&&oe.push(ee)}for(let we=0,O=I;we<O;we++){let ee=N[we];se=X[we];let ae=[];for(let L=0,Ke=ee.length;L<Ke;L++){let ot=Z(ee[L],se[L],re);Le(ot.x,ot.y,-K),ne===0&&ae.push(ot)}ne===0&&U.push(ae)}}Oe=Ar.triangulateShape(oe,U)}let Q=Oe.length,ve=f+x;for(let oe=0;oe<G;oe++){let U=h?Z(A[oe],Se[oe],ve):A[oe];y?(v.copy(w.normals[0]).multiplyScalar(U.x),S.copy(w.binormals[0]).multiplyScalar(U.y),M.copy(b[0]).add(v).add(S),Le(M.x,M.y,M.z)):Le(U.x,U.y,0)}for(let oe=1;oe<=u;oe++)for(let U=0;U<G;U++){let W=h?Z(A[U],Se[U],ve):A[U];y?(v.copy(w.normals[oe]).multiplyScalar(W.x),S.copy(w.binormals[oe]).multiplyScalar(W.y),M.copy(b[oe]).add(v).add(S),Le(M.x,M.y,M.z)):Le(W.x,W.y,d/u*oe)}for(let oe=m-1;oe>=0;oe--){let U=oe/m,W=p*Math.cos(U*Math.PI/2),ne=f*Math.sin(U*Math.PI/2)+x;for(let K=0,re=Y.length;K<re;K++){let we=Z(Y[K],z[K],ne);Le(we.x,we.y,d+W)}for(let K=0,re=N.length;K<re;K++){let we=N[K];se=X[K];for(let O=0,ee=we.length;O<ee;O++){let ae=Z(we[O],se[O],ne);y?Le(ae.x,ae.y+b[u-1].y,b[u-1].x+W):Le(ae.x,ae.y,d+W)}}}Ee(),ie();function Ee(){let oe=s.length/3;if(h){let U=0,W=G*U;for(let ne=0;ne<Q;ne++){let K=Oe[ne];ht(K[2]+W,K[1]+W,K[0]+W)}U=u+m*2,W=G*U;for(let ne=0;ne<Q;ne++){let K=Oe[ne];ht(K[0]+W,K[1]+W,K[2]+W)}}else{for(let U=0;U<Q;U++){let W=Oe[U];ht(W[2],W[1],W[0])}for(let U=0;U<Q;U++){let W=Oe[U];ht(W[0]+G*u,W[1]+G*u,W[2]+G*u)}}i.addGroup(oe,s.length/3-oe,0)}function ie(){let oe=s.length/3,U=0;xe(Y,U),U+=Y.length;for(let W=0,ne=N.length;W<ne;W++){let K=N[W];xe(K,U),U+=K.length}i.addGroup(oe,s.length/3-oe,1)}function xe(oe,U){let W=oe.length;for(;--W>=0;){let ne=W,K=W-1;K<0&&(K=oe.length-1);for(let re=0,we=u+m*2;re<we;re++){let O=G*re,ee=G*(re+1),ae=U+ne+O,L=U+K+O,Ke=U+K+ee,ot=U+ne+ee;Ve(ae,L,Ke,ot)}}}function Le(oe,U,W){l.push(oe),l.push(U),l.push(W)}function ht(oe,U,W){me(oe),me(U),me(W);let ne=s.length/3,K=_.generateTopUV(i,s,ne-3,ne-2,ne-1);Re(K[0]),Re(K[1]),Re(K[2])}function Ve(oe,U,W,ne){me(oe),me(U),me(ne),me(U),me(W),me(ne);let K=s.length/3,re=_.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);Re(re[0]),Re(re[1]),Re(re[3]),Re(re[1]),Re(re[2]),Re(re[3])}function me(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function Re(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return I_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bc[s.type]().fromJSON(s)),new n(i,e.options)}},P_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ye(r,o),new ye(a,l),new ye(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ye(o,1-l),new ye(c,1-d),new ye(h,1-f),new ye(x,1-g)]:[new ye(a,1-l),new ye(u,1-d),new ye(p,1-f),new ye(m,1-g)]}};function I_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ua=class n extends Ht{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Pt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new R,h=new ye,p=new R,f=new R,x=new R,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=t;_++){let b=i+_*u*s,y=Math.sin(b),w=Math.cos(b);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*y,d.y=e[S].y,d.z=e[S].x*w,o.push(d.x,d.y,d.z),h.x=_/t,h.y=S/(e.length-1),a.push(h.x,h.y);let v=l[3*S+0]*y,M=l[3*S+1],D=l[3*S+0]*w;c.push(v,M,D)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,w=y,S=y+e.length,v=y+e.length+1,M=y+1;r.push(w,S,M),r.push(v,M,S)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var vt=class n extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let b=0;b<c;b++){let y=b*d-r;f.push(y,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let b=_+c*g,y=_+c*(g+1),w=_+1+c*(g+1),S=_+1+c*g;p.push(b,y,S),p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},yn=class n extends Ht{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new R,f=new ye;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,y=_+i+1,w=_+i+2,S=_+1;a.push(b,y,S),a.push(y,w,S)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Hn=class n extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new R,h=new R,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,y=o+b*a,w=e*Math.cos(y),S=Math.sqrt(e*e-w*w),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let D=M/t,A=s+D*r;d.x=-S*Math.cos(A),d.y=w,d.z=S*Math.sin(A),f.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(D+v,1-b),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=u[g][_+1],y=u[g][_],w=u[g+1][_],S=u[g+1][_+1];(g!==0||o>0)&&p.push(b,y,S),(g!==i-1||l<Math.PI)&&p.push(y,w,S)}this.setIndex(p),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ii=class n extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new R,p=new R,f=new R;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(g,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ka=class n extends Ht{constructor(e=new Ir(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ye,u=new R,d=[],h=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){u=e.getPointAt(b/t,u);let y=o.normals[b],w=o.binormals[b];for(let S=0;S<=s;S++){let v=S/s*Math.PI*2,M=Math.sin(v),D=-Math.cos(v);l.x=D*y.x+M*w.x,l.y=D*y.y+M*w.y,l.z=D*y.z+M*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let w=(s+1)*(b-1)+(y-1),S=(s+1)*b+(y-1),v=(s+1)*b+y,M=(s+1)*(b-1)+y;f.push(w,S,M),f.push(S,v,M)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(bp(s))s.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(bp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ni(n){let e={};for(let t=0;t<n.length;t++){let i=Br(n[t]);for(let s in i)e[s]=i[s]}return e}function bp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function L_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}var Tu={clone:Br,merge:ni},D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new an().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new St().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Io=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nt=class extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fs=class extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Rr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Mc=class extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sc=class extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Zl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var sr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wc=class extends sr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:r=e,a=2*t-i;break;case Wd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=e,l=2*i-t;break;case Wd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),x=f*f,m=x*f,g=-h*m+2*h*x-h*f,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*f+1,b=(-1-p)*m+(1.5+p)*x+.5*f,y=p*m-p*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+_*o[c+w]+b*o[l+w]+y*o[d+w];return r}},Ec=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Tc=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ac=class extends sr{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(s-t),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let h=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*h+f*2,_=d[g],b=d[g+1],y=e*h+f*2,w=u[y],S=u[y+1],v=F_(i,t,_,w,s);r[f]=m0(v,x,b,S,m)}return r}};function m0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function O_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function F_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=m0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=O_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Mi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Zl(e.settings)&&(i.settings={inTangents:mo(e.settings.inTangents,Array),outTangents:mo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ac(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case cc:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break;case Hd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return yt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Ql;case this.InterpolantFactoryMethodBezier:return Hd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Zl(this.settings)&&(Mp(this.settings.inTangents,e),Mp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Zl(this.settings)&&(Sp(this.settings.inTangents,e),Sp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ex(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let x=t[d+f];if(x!==t[h+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Zl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Sp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=cc;var rr=class extends Mi{constructor(e,t,i){super(e,t,i)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=pa;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}};Rc.prototype.ValueTypeName="color";var Cc=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}};Cc.prototype.ValueTypeName="number";var Pc=class extends sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ba=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion";Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Mi{constructor(e,t,i){super(e,t,i)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=pa;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ic=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}};Ic.prototype.ValueTypeName="vector";var Lc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},g0=new Lc,Dc=class{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var za=class extends cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends za{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zd=new St,wp=new R,Ep=new R,Nc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(wp),Ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ep),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jl=new R,jl=new _n,cs=new R,Ga=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,jl,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,cs.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Jl,jl,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,cs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new R,Tp=new ye,Ap=new ye,Bn=class extends Ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Ap),t.subVectors(Ap,Tp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Us=class extends Ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kd=class extends Nc{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Kd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Va=class extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var go=-90,xo=1,Do=class extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(go,xo,e,t);s.layers=this.layers,this.add(s);let r=new Bn(go,xo,e,t);r.layers=this.layers,this.add(r);let o=new Bn(go,xo,e,t);o.layers=this.layers,this.add(o);let a=new Bn(go,xo,e,t);a.layers=this.layers,this.add(a);let l=new Bn(go,xo,e,t);l.layers=this.layers,this.add(l);let c=new Bn(go,xo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Oc=class extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Rh="\\[\\]\\.:\\/",U_=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",k_="[^"+Rh.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",Ch),z_=/(WCOD+)?/.source.replace("WCOD",k_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),G_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),V_=new RegExp("^"+B_+z_+H_+G_+"$"),W_=["material","materials","bones","map"],Zd=class{constructor(e,t,i){let s=i||hn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},hn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(U_,"")}static parseTrackName(e){let t=V_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);W_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hn.Composite=Zd;hn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};hn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};hn.prototype.GetterByBindingType=[hn.prototype._getValue_direct,hn.prototype._getValue_array,hn.prototype._getValue_arrayElement,hn.prototype._getValue_toArray];hn.prototype.SetterByBindingTypeAndVersioning=[[hn.prototype._setValue_direct,hn.prototype._setValue_direct_setNeedsUpdate,hn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_array,hn.prototype._setValue_array_setNeedsUpdate,hn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_arrayElement,hn.prototype._setValue_arrayElement_setNeedsUpdate,hn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_fromArray,hn.prototype._setValue_fromArray_setNeedsUpdate,hn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yT=new Float32Array(1);var Rp=new St,Dr=class{constructor(e,t,i=0,s=1/0){this.ray=new Ds(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rp),this}intersectObject(e,t=!0,i=[]){return Jd(e,this,i,t),i.sort(Cp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Jd(e[s],this,i,t);return i.sort(Cp),i}};function Cp(n,e){return n.distance-e.distance}function Jd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Jd(r[o],e,t,!0)}}var No=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Wa=class extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ph(n,e,t,i){let s=X_(i);switch(t){case mh:return n*e;case Vc:return n*e/s.components*s.byteLength;case Wc:return n*e/s.components*s.byteLength;case dr:return n*e*2/s.components*s.byteLength;case Xc:return n*e*2/s.components*s.byteLength;case gh:return n*e*3/s.components*s.byteLength;case Zi:return n*e*4/s.components*s.byteLength;case qc:return n*e*4/s.components*s.byteLength;case $a:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:case Zc:return Math.max(n,16)*Math.max(e,8)/4;case $c:case Kc:return Math.max(n,8)*Math.max(e,8)/2;case Jc:case jc:case eu:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Ja:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xu:case _u:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vu:case bu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ja:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(n){switch(n){case fi:case dh:return{byteLength:1,components:1};case ko:case hh:case di:return{byteLength:2,components:1};case Hc:case Gc:return{byteLength:2,components:4};case Ki:case zc:case Li:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function k0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Z_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var J_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
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
#endif`,sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vy=`#define PI 3.141592653589793
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
} // validated`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
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
#endif`,Yy=`uniform sampler2D dfgLUT;
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
}`,Ky=`
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
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
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform float backgroundBlurriness;
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,S1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:J_,alphahash_pars_fragment:j_,alphamap_fragment:Q_,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:sy,batching_pars_vertex:ry,batching_vertex:oy,begin_vertex:ay,beginnormal_vertex:ly,bsdfs:cy,iridescence_fragment:uy,bumpmap_pars_fragment:dy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:py,clipping_planes_vertex:my,color_fragment:gy,color_pars_fragment:xy,color_pars_vertex:_y,color_vertex:yy,common:vy,defaultnormal_vertex:by,displacementmap_pars_vertex:My,displacementmap_vertex:Sy,emissivemap_fragment:wy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Gy,envmap_vertex:Ly,fog_vertex:Dy,fog_pars_vertex:Ny,fog_fragment:Oy,fog_pars_fragment:Fy,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:ky,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:Hy,lights_toon_fragment:Vy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:qy,lights_physical_fragment:$y,lights_physical_pars_fragment:Yy,lights_fragment_begin:Ky,lights_fragment_maps:Zy,lights_fragment_end:Jy,lightprobes_pars_fragment:jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:sv,map_particle_fragment:rv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:uv,morphnormal_vertex:dv,morphtarget_pars_vertex:hv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:xv,normal_vertex:_v,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:vv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Mv,iridescence_pars_fragment:Sv,opaque_fragment:wv,packing:Ev,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Ov,skinbase_vertex:Fv,skinning_pars_vertex:Uv,skinning_vertex:kv,skinnormal_vertex:Bv,specularmap_fragment:zv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Vv,transmission_fragment:Wv,transmission_pars_fragment:Xv,uv_pars_fragment:qv,uv_pars_vertex:$v,uv_vertex:Yv,worldpos_vertex:Kv,background_vert:Zv,background_frag:Jv,backgroundCube_vert:jv,backgroundCube_frag:Qv,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distance_vert:s1,distance_frag:r1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:d1,meshlambert_vert:h1,meshlambert_frag:f1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:x1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:v1,meshphysical_frag:b1,meshtoon_vert:M1,meshtoon_frag:S1,points_vert:w1,points_frag:E1,shadow_vert:T1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Je={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},xs={basic:{uniforms:ni([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ni([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ni([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ni([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ni([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Ue(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ni([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ni([Je.points,Je.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ni([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ni([Je.common,Je.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ni([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ni([Je.sprite,Je.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:ni([Je.common,Je.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:ni([Je.lights,Je.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};xs.physical={uniforms:ni([xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var Au={r:0,b:0,g:0},P1=new St,B0=new Et;B0.set(-1,0,0,0,1,0,0,0,1);function I1(n,e,t,i,s,r){let o=new Ue(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function f(_){let b=!1,y=p(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,b){let y=p(b);y&&y.isCubeTexture?(c===void 0&&(c=new ut(new Vt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Br(xs.backgroundCube.uniforms),vertexShader:xs.backgroundCube.vertexShader,fragmentShader:xs.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(B0),c.material.toneMapped=Ft.getTransfer(y.colorSpace)!==Zt,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ut(new vt(2,2),new en({name:"BackgroundMaterial",uniforms:Br(xs.background.uniforms),vertexShader:xs.background.vertexShader,fragmentShader:xs.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ft.getTransfer(y.colorSpace)!==Zt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Au,Ah(n)),t.buffers.color.setClear(Au.r,Au.g,Au.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function L1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(N,F,B,I,Y){let Z=!1,G=d(N,I,B,F);r!==G&&(r=G,c(r.object)),Z=p(N,I,B,Y),Z&&f(N,I,B,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(N,F,B,I),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,F,B,I){let Y=I.wireframe===!0,Z=i[F.id];Z===void 0&&(Z={},i[F.id]=Z);let G=N.isInstancedMesh===!0?N.id:0,$=Z[G];$===void 0&&($={},Z[G]=$);let z=$[B.id];z===void 0&&(z={},$[B.id]=z);let X=z[Y];return X===void 0&&(X=h(l()),z[Y]=X),X}function h(N){let F=[],B=[],I=[];for(let Y=0;Y<t;Y++)F[Y]=0,B[Y]=0,I[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,F,B,I){let Y=r.attributes,Z=F.attributes,G=0,$=B.getAttributes();for(let z in $)if($[z].location>=0){let se=Y[z],Se=Z[z];if(Se===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),se===void 0||se.attribute!==Se||Se&&se.data!==Se.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function f(N,F,B,I){let Y={},Z=F.attributes,G=0,$=B.getAttributes();for(let z in $)if($[z].location>=0){let se=Z[z];se===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));let Se={};Se.attribute=se,se&&se.data&&(Se.data=se.data),Y[z]=Se,G++}r.attributes=Y,r.attributesNum=G,r.index=I}function x(){let N=r.newAttributes;for(let F=0,B=N.length;F<B;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){let B=r.newAttributes,I=r.enabledAttributes,Y=r.attributeDivisors;B[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),Y[N]!==F&&(n.vertexAttribDivisor(N,F),Y[N]=F)}function _(){let N=r.newAttributes,F=r.enabledAttributes;for(let B=0,I=F.length;B<I;B++)F[B]!==N[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function b(N,F,B,I,Y,Z,G){G===!0?n.vertexAttribIPointer(N,F,B,Y,Z):n.vertexAttribPointer(N,F,B,I,Y,Z)}function y(N,F,B,I){x();let Y=I.attributes,Z=B.getAttributes(),G=F.defaultAttributeValues;for(let $ in Z){let z=Z[$];if(z.location>=0){let X=Y[$];if(X===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){let se=X.normalized,Se=X.itemSize,Oe=e.get(X);if(Oe===void 0)continue;let Q=Oe.buffer,ve=Oe.type,Ee=Oe.bytesPerElement,ie=ve===n.INT||ve===n.UNSIGNED_INT||X.gpuType===zc;if(X.isInterleavedBufferAttribute){let xe=X.data,Le=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,ht=X.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Ve=0;Ve<z.locationSize;Ve++)g(z.location+Ve,xe.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ve=0;Ve<z.locationSize;Ve++)m(z.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Ve=0;Ve<z.locationSize;Ve++)b(z.location+Ve,Se/z.locationSize,ve,se,Le*Ee,(ht+Se/z.locationSize*Ve)*Ee,ie)}else{if(X.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,X.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xe=0;xe<z.locationSize;xe++)m(z.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let xe=0;xe<z.locationSize;xe++)b(z.location+xe,Se/z.locationSize,ve,se,Se*Ee,Se/z.locationSize*xe*Ee,ie)}}else if(G!==void 0){let se=G[$];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(z.location,se);break;case 3:n.vertexAttrib3fv(z.location,se);break;case 4:n.vertexAttrib4fv(z.location,se);break;default:n.vertexAttrib1fv(z.location,se)}}}}_()}function w(){D();for(let N in i){let F=i[N];for(let B in F){let I=F[B];for(let Y in I){let Z=I[Y];for(let G in Z)u(Z[G].object),delete Z[G];delete I[Y]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let B in F){let I=F[B];for(let Y in I){let Z=I[Y];for(let G in Z)u(Z[G].object),delete Z[G];delete I[Y]}}delete i[N.id]}function v(N){for(let F in i){let B=i[F];for(let I in B){let Y=B[I];if(Y[N.id]===void 0)continue;let Z=Y[N.id];for(let G in Z)u(Z[G].object),delete Z[G];delete Y[N.id]}}}function M(N){for(let F in i){let B=i[F],I=N.isInstancedMesh===!0?N.id:0,Y=B[I];if(Y!==void 0){for(let Z in Y){let G=Y[Z];for(let $ in G)u(G[$].object),delete G[$];delete Y[Z]}delete B[I],Object.keys(B).length===0&&delete i[F]}}}function D(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function D1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function N1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Zi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let M=v===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==fi&&v!==Li&&!M&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:S}}function O1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ai,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,y=g.clippingState||null;l.value=y,y=u(f,h,b,p);for(let w=0;w!==b;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=p;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var tl=class extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ta(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:Or});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=xn),new Do(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},x0=256,F1=3,U1=20,z0=256,H0=16,k1=3,B1=new R,z1=new Ue,zo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Do(1,10,null),this._boxMesh=new ut(new Vt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=B1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(z1));let m=new Do(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(x0,Sh(e))}_fromTexture(e,t){e.mapping===Ur||e.mapping===Uo?this._setSize(e.image.length===0?x0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=_0(e,!1,!1),i=Math.log2(e)-F1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ur||e.mapping===Uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=y0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=H1(),this._integrationMaterial=G1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/H0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-k1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(z0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=V1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function _0(n,e,t){return new tl(n,{minFilter:Yi,generateMipmaps:e,type:di,colorSpace:ma,depthBuffer:t})}function nl(n,e,t){return new en({name:n,uniforms:e,vertexShader:It.cube_vert,fragmentShader:t,side:Kn,blending:Or,depthTest:!1,depthWrite:!1})}function H1(){return nl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${z0}u

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
	`)}function G1(){return nl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:H0}},`

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
	`)}function V1(){return nl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${U1}
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
	`)}function y0(){return nl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function v0(){return nl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function W1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Uc||p===kc)if(e.has(h)){let f=e.get(h).texture;return a(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let x=new tl(f.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===Uc||p===kc,x=p===Ur||p===Uo;if(f||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new zo(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return f&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new zo(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Uc?h.mapping=Ur:p===kc&&(h.mapping=Uo),h}function l(h){let p=0,f=6;for(let x=0;x<f;x++)h[x]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function X1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Rr("WebGLRenderer: "+i+" extension not supported."),s}}}function q1(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(f){let x=f.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?ba:va,y=new b(Math.ceil(_/3)*6,1),w=y.array;if(x!==null){let v=x.array;g=x.version;for(let M=0,D=0;M<_;M+=3){let A=v[M+0],N=v[M+1],F=v[M+2];w[D++]=A,w[D++]=N,w[D++]=N,w[D++]=F,w[D++]=F,w[D++]=A}}else{g=m.version;for(let v=0,M=0;v<_;v+=3){let D=v+0,A=v+1,N=v+2;w[M++]=D,w[M++]=A,w[M++]=A,w[M++]=N,w[M++]=N,w[M++]=D}}y.version=g;let S=r.get(f);S&&e.remove(S),r.set(f,y)}function h(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function $1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Y1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function K1(n,e,t){let i=new WeakMap,s=new an;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let D=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*w*4*d),v=new ya(S,y,w,d);v.type=Li,v.needsUpdate=!0;let M=b*4;for(let A=0;A<d;A++){let N=m[A],F=g[A],B=_[A],I=y*w*4*A;for(let Y=0;Y<N.count;Y++){let Z=Y*M;p===!0&&(s.fromBufferAttribute(N,Y),S[I+Z+0]=s.x,S[I+Z+1]=s.y,S[I+Z+2]=s.z,S[I+Z+3]=0),f===!0&&(s.fromBufferAttribute(F,Y),S[I+Z+4]=s.x,S[I+Z+5]=s.y,S[I+Z+6]=s.z,S[I+Z+7]=0),x===!0&&(s.fromBufferAttribute(B,Y),S[I+Z+8]=s.x,S[I+Z+9]=s.y,S[I+Z+10]=s.z,S[I+Z+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new ye(y,w)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Z1(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var J1={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[ah]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[Xa]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function j1(n,e,t,i,s,r){let o=new qn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ht;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ut(u,d),p=new Us(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,b=[],y=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),l!==null&&l.setSize(w,S);for(let v=0;v<b.length;v++){let M=b[v];M.setSize&&M.setSize(w,S)}},this.setEffects=function(w){b=w,y=b.length>0&&b[0].isRenderPass===!0;let S=o.width,v=o.height;b.length>0&&a===null&&(a=new qn(S,v,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new qn(S,v,{type:di,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(D=>D.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Ns(S,v),r===!0&&(c.format=ks,c.type=kr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let D=0;D<b.length;D++){let A=b[D];A.setSize&&A.setSize(S,v),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,S){if(m||w.toneMapping===ms&&b.length===0)return!1;if(_=S,S!==null){let v=S.width,M=S.height;(o.width!==v||o.height!==M)&&this.setSize(v,M)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=ms,!0},this.hasRenderPass=function(){return y},this.end=function(w,S){w.toneMapping=g,m=!0;let v=o,M=a;for(let D=0;D<b.length;D++){let A=b[D];A.enabled!==!1&&(A.render(w,M,v,S),A.needsSwap!==!1&&(v=M,M=M===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,d.defines={},Ft.getTransfer(f)===Zt&&(d.defines.SRGB_TRANSFER="");let D=J1[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(_),w.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var G0=new li,V0=new Ns(1,1),W0=new Ra(1),X0=new ya,q0=new hc,$0=new Ta,b0=[],M0=[],S0=new Float32Array(16),w0=new Float32Array(9),E0=new Float32Array(4);function Ho(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=b0[s];if(r===void 0&&(r=new Float32Array(s),b0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function In(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pu(n,e){let t=M0[e];t===void 0&&(t=new Int32Array(e),M0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2fv(this.addr,e),Ln(t,e)}}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;n.uniform3fv(this.addr,e),Ln(t,e)}}function nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4fv(this.addr,e),Ln(t,e)}}function ib(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,i))return;E0.set(i),n.uniformMatrix2fv(this.addr,!1,E0),Ln(t,i)}}function sb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,i))return;w0.set(i),n.uniformMatrix3fv(this.addr,!1,w0),Ln(t,i)}}function rb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(In(t,i))return;S0.set(i),n.uniformMatrix4fv(this.addr,!1,S0),Ln(t,i)}}function ob(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ab(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2iv(this.addr,e),Ln(t,e)}}function lb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3iv(this.addr,e),Ln(t,e)}}function cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4iv(this.addr,e),Ln(t,e)}}function ub(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2uiv(this.addr,e),Ln(t,e)}}function hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3uiv(this.addr,e),Ln(t,e)}}function fb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4uiv(this.addr,e),Ln(t,e)}}function Iu(n){return n.version===0&&(n.compareFunction=yh,n.needsUpdate=!0),n}function pb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Iu(V0):r=G0,t.setTexture2D(e||r,s)}function mb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||q0,s)}function gb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Iu(W0):r=$0,t.setTextureCube(e||r,s)}function xb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||X0,s)}function _b(n){switch(n){case 5126:return Q1;case 35664:return eb;case 35665:return tb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return lb;case 35669:case 35673:return cb;case 5125:return ub;case 36294:return db;case 36295:return hb;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return xb}}function yb(n,e){n.uniform1fv(this.addr,e)}function vb(n,e){let t=Ho(e,this.size,2);n.uniform2fv(this.addr,t)}function bb(n,e){let t=Ho(e,this.size,3);n.uniform3fv(this.addr,t)}function Mb(n,e){let t=Ho(e,this.size,4);n.uniform4fv(this.addr,t)}function Sb(n,e){let t=Ho(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wb(n,e){let t=Ho(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Eb(n,e){let t=Ho(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tb(n,e){n.uniform1iv(this.addr,e)}function Ab(n,e){n.uniform2iv(this.addr,e)}function Rb(n,e){n.uniform3iv(this.addr,e)}function Cb(n,e){n.uniform4iv(this.addr,e)}function Pb(n,e){n.uniform1uiv(this.addr,e)}function Ib(n,e){n.uniform2uiv(this.addr,e)}function Lb(n,e){n.uniform3uiv(this.addr,e)}function Db(n,e){n.uniform4uiv(this.addr,e)}function Nb(n,e,t){let i=this.cache,s=e.length,r=Pu(t,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Iu(V0):o=G0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ob(n,e,t){let i=this.cache,s=e.length,r=Pu(t,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||q0,r[o])}function Fb(n,e,t){let i=this.cache,s=e.length,r=Pu(t,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Iu(W0):o=$0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ub(n,e,t){let i=this.cache,s=e.length,r=Pu(t,s);In(i,r)||(n.uniform1iv(this.addr,r),Ln(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||X0,r[o])}function kb(n){switch(n){case 5126:return yb;case 35664:return vb;case 35665:return bb;case 35666:return Mb;case 35674:return Sb;case 35675:return wb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return Pb;case 36294:return Ib;case 36295:return Lb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Ub}}var Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_b(t.type)}},Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}},Oh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function T0(n,e){n.seq.push(e),n.map[e.id]=e}function Bb(n,e,t){let i=n.name,s=i.length;for(Ih.lastIndex=0;;){let r=Ih.exec(i),o=Ih.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){T0(t,c===void 0?new Dh(a,n,e):new Nh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Oh(a),T0(t,d)),t=d}}}var Bo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Bb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function A0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var zb=37297,Hb=0;function Gb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var R0=new Et;function Vb(n){Ft._getMatrix(R0,Ft.workingColorSpace,n);let e=`mat3( ${R0.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(n)){case ga:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function C0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Gb(n.getShaderSource(e),a)}else return r}function Wb(n,e){let t=Vb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xb={[sh]:"Linear",[rh]:"Reinhard",[oh]:"Cineon",[ah]:"ACESFilmic",[ch]:"AgX",[Xa]:"Neutral",[lh]:"Custom"};function qb(n,e){let t=Xb[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ru=new R;function $b(){Ft.getLuminanceCoefficients(Ru);let n=Ru.x.toFixed(4),e=Ru.y.toFixed(4),t=Ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function Kb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function el(n){return n!==""}function P0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function I0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(n){return n.replace(Jb,jb)}function jb(n,e){let t=It[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Fh(t)}var Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(n){return n.replace(Qb,eM)}function eM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function D0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var tM={[Nr]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function nM(n){return tM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iM={[Uo]:"ENVMAP_MODE_REFRACTION"};function sM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rM={[ih]:"ENVMAP_BLENDING_MULTIPLY",[Yp]:"ENVMAP_BLENDING_MIX",[Kp]:"ENVMAP_BLENDING_ADD"};function oM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rM[n.combine]||"ENVMAP_BLENDING_NONE"}function aM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=sM(t),d=oM(t),h=Yb(t),p=Kb(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(el).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(el).join(`
`),m.length>0&&(m+=`
`)):(x=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),m=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?It.tonemapping_pars_fragment:"",t.toneMapping!==ms?qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Wb("linearToOutputTexel",t.outputColorSpace),$b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),o=Fh(o),o=P0(o,t),o=I0(o,t),a=Fh(a),a=P0(a,t),a=I0(a,t),o=L0(o),a=L0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,b=g+m+a,y=A0(s,s.VERTEX_SHADER,_),w=A0(s,s.FRAGMENT_SHADER,b);s.attachShader(f,y),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function S(A){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(f)||"",F=s.getShaderInfoLog(y)||"",B=s.getShaderInfoLog(w)||"",I=N.trim(),Y=F.trim(),Z=B.trim(),G=!0,$=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,y,w);else{let z=C0(s,y,"vertex"),X=C0(s,w,"fragment");Mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+z+`
`+X)}else I!==""?yt("WebGLProgram: Program Info Log:",I):(Y===""||Z==="")&&($=!1);$&&(A.diagnostics={runnable:G,programLog:I,vertexShader:{log:Y,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(y),s.deleteShader(w),v=new Bo(s,f),M=Zb(s,f)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(f,zb)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=y,this.fragmentShader=w,this}var lM=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}};function cM(n){return n===dr||n===Ja||n===ja}function uM(n,e,t,i,s,r){let o=new wo,a=new Uh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,D,A,N,F){let B=A.fog,I=N.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,G=e.get(v.envMap||Y,Z),$=h[v.type],z=i.precision;v.precision!==null&&(z=i.getMaxPrecision(v.precision),z!==v.precision&&yt("WebGLProgram.getParameters:",v.precision,"not supported, using",z,"instead."));let X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=X!==void 0?X.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let Oe,Q,ve,Ee;if($){let $e=xs[$];Oe=$e.vertexShader,Q=$e.fragmentShader}else{Oe=v.vertexShader,Q=v.fragmentShader;let $e=a.getVertexShaderStage(v),Bt=a.getFragmentShaderStage(v);a.update(v,$e,Bt),ve=$e.id,Ee=Bt.id}let ie=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,ht=N.isBatchedMesh===!0,Ve=!!v.map,me=!!v.matcap,Re=!!G,oe=Re&&G.isPMREMTexture===!0,U=!!v.aoMap,W=!!v.lightMap,ne=!!v.bumpMap&&v.wireframe===!1,K=!!v.normalMap,re=!!v.displacementMap,we=!!v.emissiveMap,O=!!v.metalnessMap,ee=!!v.roughnessMap,ae=v.anisotropy>0,L=v.clearcoat>0,Ke=v.diffuseRoughness>0,ot=v.dispersion>0,_t=v.retroreflectivity>0,Ce=v.iridescence>0,_e=v.sheen>0,fe=v.transmission>0,Be=ae&&!!v.anisotropyMap,C=L&&!!v.clearcoatMap,E=L&&!!v.clearcoatNormalMap,q=L&&!!v.clearcoatRoughnessMap,be=Ke&&!!v.diffuseRoughnessMap,ue=Ce&&!!v.iridescenceMap,De=Ce&&!!v.iridescenceThicknessMap,Ge=_e&&!!v.sheenColorMap,de=_e&&!!v.sheenRoughnessMap,pe=!!v.specularMap,ze=!!v.specularColorMap,k=!!v.specularIntensityMap,ge=fe&&!!v.transmissionMap,le=fe&&!!v.thicknessMap,He=!!v.gradientMap,Pe=!!v.alphaMap,ke=v.alphaTest>0,it=!!v.alphaHash,Tt=!!v.extensions,ce=ms;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ce=n.toneMapping);let tt=oe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,pt={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:Q,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:z,batching:ht,batchingColor:ht&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:me,envMap:Re,envMapMode:Re&&G.mapping,envMapPMREM:oe,envMapMaxLod:oe?tt.length-1:null,envMapSize:oe?tt[0].width:null,aoMap:U,lightMap:W,bumpMap:ne,normalMap:K,displacementMap:re,emissiveMap:we,normalMapObjectSpace:K&&v.normalMapType===jp,normalMapTangentSpace:K&&v.normalMapType===Su,packedNormalMap:K&&v.normalMapType===Su&&cM(v.normalMap.format),metalnessMap:O,roughnessMap:ee,anisotropy:ae,anisotropyMap:Be,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Ke,diffuseRoughnessMap:be,dispersion:ot,retroreflection:_t,iridescence:Ce,iridescenceMap:ue,iridescenceThicknessMap:De,sheen:_e,sheenColorMap:Ge,sheenRoughnessMap:de,specularMap:pe,specularColorMap:ze,specularIntensityMap:k,transmission:fe,transmissionMap:ge,thicknessMap:le,gradientMap:He,opaque:v.transparent===!1&&v.blending===ps&&v.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ke,alphaHash:it,combine:v.combine,mapUv:Ve&&p(v.map.channel),aoMapUv:U&&p(v.aoMap.channel),lightMapUv:W&&p(v.lightMap.channel),bumpMapUv:ne&&p(v.bumpMap.channel),normalMapUv:K&&p(v.normalMap.channel),displacementMapUv:re&&p(v.displacementMap.channel),emissiveMapUv:we&&p(v.emissiveMap.channel),metalnessMapUv:O&&p(v.metalnessMap.channel),roughnessMapUv:ee&&p(v.roughnessMap.channel),anisotropyMapUv:Be&&p(v.anisotropyMap.channel),clearcoatMapUv:C&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&p(v.sheenRoughnessMap.channel),specularMapUv:pe&&p(v.specularMap.channel),specularColorMapUv:ze&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:ge&&p(v.transmissionMap.channel),thicknessMapUv:le&&p(v.thicknessMap.channel),alphaMapUv:Pe&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(K||ae),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ve||Pe),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&K===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter($e=>$e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Ft.getTransfer(v.map.colorSpace)===Zt,decodeVideoTextureEmissive:we&&v.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(v.emissiveMap.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Tt&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&v.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function x(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(M,v),g(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function g(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let M=h[v.type],D;if(M){let A=xs[M];D=Tu.clone(A.uniforms)}else D=v.uniforms;return D}function b(v,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new aM(n,M,v,s),c.push(D),u.set(M,D)),D}function y(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function S(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:S}}function dM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function N0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,x,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=f,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let b=a(h,p,f,x,m,g);f.transmission>0?i.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(h,p,f,x,m,g){let _=a(h,p,f,x,m,g);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,p){t.length>1&&t.sort(h||hM),i.length>1&&i.sort(p||N0),s.length>1&&s.sort(p||N0)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function fM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new O0,n.set(i,[o])):s>=r.length?(o=new O0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function mM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var gM=0;function xM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _M(n){let e=new pM,t=mM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new St,o=new St;function a(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,b=0,y=0,w=0,S=0,v=0,M=0,D=0,A=0;c.sort(xM);for(let F=0,B=c.length;F<B;F++){let I=c[F],Y=I.color,Z=I.intensity,G=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===dr?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=Y.r*Z,d+=Y.g*Z,h+=Y.b*Z;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],Z);A++}else if(I.isSunLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,se=t.get(I);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[f]=se,i.sunShadowMap[f]=$;let Se=X.getViewportCount();for(let Oe=0;Oe<Se;Oe++)i.sunShadowMatrix[x+Oe]=X.getMatrix(Oe),i.sunShadowCascade[x+Oe]=X._cascadeData[Oe];x+=Se,f++}i.sun[p]=z,p++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,se=t.get(I);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,i.directionalShadow[m]=se,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=z,m++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(Y).multiplyScalar(Z),z.distance=G,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[_]=z;let X=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,X.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=X.matrix,I.castShadow){let se=t.get(I);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,i.spotShadow[_]=se,i.spotShadowMap[_]=$,v++}_++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(Y).multiplyScalar(Z),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=z,b++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let X=I.shadow,se=t.get(I);se.shadowIntensity=X.intensity,se.shadowBias=X.bias,se.shadowNormalBias=X.normalBias,se.shadowRadius=X.radius,se.shadowMapSize=X.mapSize,se.shadowCameraNear=X.camera.near,se.shadowCameraFar=X.camera.far,i.pointShadow[g]=se,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=z,g++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(Z),z.groundColor.copy(I.groundColor).multiplyScalar(Z),i.hemi[y]=z,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==b||N.hemiLength!==y||N.numSunShadows!==f||N.numDirectionalShadows!==w||N.numPointShadows!==S||N.numSpotShadows!==v||N.numSpotMaps!==M||N.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,N.sunLength=p,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=b,N.hemiLength=y,N.numSunShadows=f,N.numDirectionalShadows=w,N.numPointShadows=S,N.numSpotShadows=v,N.numSpotMaps=M,N.numLightProbes=A,i.version=gM++)}function l(c,u){let d=0,h=0,p=0,f=0,x=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(y.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function F0(n){let e=new _M(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function yM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new F0(n),e.set(s,[a])):r>=o.length?(a=new F0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
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
}`,MM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],SM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],U0=new St,Qa=new R,Lh=new R;function wM(n,e,t){let i=new nr,s=new ye,r=new ye,o=new an,a=new Mc,l=new Sc,c={},u=t.maxTextureSize,d={[fs]:Kn,[Kn]:fs,[tn]:tn},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:vM,fragmentShader:bM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ht;f.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let g=this.type;this.render=function(S,v,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Lp&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);let D=n.getRenderTarget(),A=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Or),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=g!==this.type;B&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(Y=>Y.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,Y=S.length;I<Y;I++){let Z=S[I],G=Z.shadow;if(G===void 0){yt("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let $=G.getFrameExtents();s.multiply($),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,G.mapSize.y=r.y));let z=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=z,G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Oo){if(Z.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qn(s.x,s.y,{format:dr,type:di,minFilter:xn,magFilter:xn,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new Ns(s.x,s.y,Li),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=Is,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn}else Z.isPointLight?(G.map=new tl(s.x),G.map.depthTexture=new Ra(s.x,Ki)):(G.map=new qn(s.x,s.y),G.map.depthTexture=new Ns(s.x,s.y,Ki)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=Is,this.type===Nr?(G.map.depthTexture.compareFunction=z?_h:xh,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let X=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,M);let se=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Se=0;Se<X;Se++){let Oe=G.getCamera(Se);if(Z.isPointLight){let Q=G.camera,ve=G.matrix,Ee=Z.distance||Q.far;Ee!==Q.far&&(Q.far=Ee,Q.updateProjectionMatrix()),Qa.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Qa),Lh.copy(Q.position),Lh.add(MM[Se]),Q.up.copy(SM[Se]),Q.lookAt(Lh),Q.updateMatrixWorld(),ve.makeTranslation(-Qa.x,-Qa.y,-Qa.z),U0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(U0,Q.coordinateSystem,Q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(G.map),n.clear());let Q=G.getViewport(Se);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(o)}i=G.getFrustum(Se),y(v,M,Oe,Z,se,this.type)}G.isPointLightShadow!==!0&&this.type===Oo&&_(G,M),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(D,A,N)};function _(S,v){let M=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new qn(s.x,s.y,{format:dr,type:di}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(v,null,M,h,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(v,null,M,p,x,null)}function b(S,v,M,D){let A=null,N=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)A=N;else if(A=M.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=A.uuid,B=v.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let Y=I[B];Y===void 0&&(Y=A.clone(),I[B]=Y,v.addEventListener("dispose",w)),A=Y}if(A.visible=v.visible,A.wireframe=v.wireframe,D===Oo?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:d[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let F=n.properties.get(A);F.light=M}return A}function y(S,v,M,D,A,N){if(S.visible===!1)return;if(S.layers.test(A)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Oo)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let I=e.update(S),Y=S.material;if(Array.isArray(Y)){let Z=I.groups;for(let G=0,$=Z.length;G<$;G++){let z=Z[G],X=Y[z.materialIndex];if(X&&X.visible){let se=b(S,X,D,N);S.onBeforeShadow(n,S,v,M,I,se,z),n.renderBufferDirect(M,null,I,se,S,z),S.onAfterShadow(n,S,v,M,I,se,z)}}}else if(Y.visible){let Z=b(S,Y,D,N);S.onBeforeShadow(n,S,v,M,I,Z,null),n.renderBufferDirect(M,null,I,Z,S,null),S.onAfterShadow(n,S,v,M,I,Z,null)}}let B=S.children;for(let I=0,Y=B.length;I<Y;I++)y(B[I],v,M,D,A,N)}function w(S){S.target.removeEventListener("dispose",w);for(let M in c){let D=c[M],A=S.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function EM(n,e){function t(){let k=!1,ge=new an,le=null,He=new an(0,0,0,0);return{setMask:function(Pe){le!==Pe&&!k&&(n.colorMask(Pe,Pe,Pe,Pe),le=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,ke,it,Tt,ce){ce===!0&&(Pe*=Tt,ke*=Tt,it*=Tt),ge.set(Pe,ke,it,Tt),He.equals(ge)===!1&&(n.clearColor(Pe,ke,it,Tt),He.copy(ge))},reset:function(){k=!1,le=null,He.set(-1,0,0,0)}}}function i(){let k=!1,ge=!1,le=null,He=null,Pe=null;return{setReversed:function(ke){if(ge!==ke){let it=e.get("EXT_clip_control");ke?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ge=ke;let Tt=Pe;Pe=null,this.setClear(Tt)}},getReversed:function(){return ge},setTest:function(ke){ke?xe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ke){le!==ke&&!k&&(n.depthMask(ke),le=ke)},setFunc:function(ke){if(ge&&(ke=l0[ke]),He!==ke){switch(ke){case tc:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}He=ke}},setLocked:function(ke){k=ke},setClear:function(ke){Pe!==ke&&(Pe=ke,ge&&(ke=1-ke),n.clearDepth(ke))},reset:function(){k=!1,le=null,He=null,Pe=null,ge=!1}}}function s(){let k=!1,ge=null,le=null,He=null,Pe=null,ke=null,it=null,Tt=null,ce=null;return{setTest:function(tt){k||(tt?xe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!k&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,pt,$e){(le!==tt||He!==pt||Pe!==$e)&&(n.stencilFunc(tt,pt,$e),le=tt,He=pt,Pe=$e)},setOp:function(tt,pt,$e){(ke!==tt||it!==pt||Tt!==$e)&&(n.stencilOp(tt,pt,$e),ke=tt,it=pt,Tt=$e)},setLocked:function(tt){k=tt},setClear:function(tt){ce!==tt&&(n.clearStencil(tt),ce=tt)},reset:function(){k=!1,ge=null,le=null,He=null,Pe=null,ke=null,it=null,Tt=null,ce=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,b=null,y=null,w=null,S=null,v=null,M=new Ue(0,0,0),D=0,A=!1,N=null,F=null,B=null,I=null,Y=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=$>=2);let X=null,se={},Se=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Q=new an().fromArray(Se),ve=new an().fromArray(Oe);function Ee(k,ge,le,He){let Pe=new Uint8Array(4),ke=n.createTexture();n.bindTexture(k,ke),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<le;it++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,He,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(ge+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return ke}let ie={};ie[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(yo),ne(!1),K(Qd),xe(n.CULL_FACE),U(Or);function xe(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Le(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ht(k,ge){return h[k]!==ge?(n.bindFramebuffer(k,ge),h[k]=ge,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ve(k,ge){let le=f,He=!1;if(k){le=p.get(ge),le===void 0&&(le=[],p.set(ge,le));let Pe=k.textures;if(le.length!==Pe.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,it=Pe.length;ke<it;ke++)le[ke]=n.COLOR_ATTACHMENT0+ke;le.length=Pe.length,He=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,He=!0);He&&n.drawBuffers(le)}function me(k){return x!==k?(n.useProgram(k),x=k,!0):!1}let Re={[Fr]:n.FUNC_ADD,[Dp]:n.FUNC_SUBTRACT,[Np]:n.FUNC_REVERSE_SUBTRACT};Re[Op]=n.MIN,Re[Fp]=n.MAX;let oe={[Fc]:n.ZERO,[cr]:n.ONE,[Up]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[Vp]:n.SRC_ALPHA_SATURATE,[Hp]:n.DST_COLOR,[Bp]:n.DST_ALPHA,[kp]:n.ONE_MINUS_SRC_COLOR,[ur]:n.ONE_MINUS_SRC_ALPHA,[Gp]:n.ONE_MINUS_DST_COLOR,[zp]:n.ONE_MINUS_DST_ALPHA,[Wp]:n.CONSTANT_COLOR,[Xp]:n.ONE_MINUS_CONSTANT_COLOR,[qp]:n.CONSTANT_ALPHA,[$p]:n.ONE_MINUS_CONSTANT_ALPHA};function U(k,ge,le,He,Pe,ke,it,Tt,ce,tt){if(k===Or){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(xe(n.BLEND),m=!0),k!==Fo){if(k!==g||tt!==A){if((_!==Fr||w!==Fr)&&(n.blendEquation(n.FUNC_ADD),_=Fr,w=Fr),tt)switch(k){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case th:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",k);break}else switch(k){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case eh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",k);break}b=null,y=null,S=null,v=null,M.set(0,0,0),D=0,g=k,A=tt}return}Pe=Pe||ge,ke=ke||le,it=it||He,(ge!==_||Pe!==w)&&(n.blendEquationSeparate(Re[ge],Re[Pe]),_=ge,w=Pe),(le!==b||He!==y||ke!==S||it!==v)&&(n.blendFuncSeparate(oe[le],oe[He],oe[ke],oe[it]),b=le,y=He,S=ke,v=it),(Tt.equals(M)===!1||ce!==D)&&(n.blendColor(Tt.r,Tt.g,Tt.b,ce),M.copy(Tt),D=ce),g=k,A=!1}function W(k,ge){k.side===tn?Le(n.CULL_FACE):xe(n.CULL_FACE);let le=k.side===Kn;ge&&(le=!le),ne(le),k.blending===ps&&k.transparent===!1?U(Or):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let He=k.stencilWrite;a.setTest(He),He&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){N!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),N=k)}function K(k){k!==Pp?(xe(n.CULL_FACE),k!==F&&(k===Qd?n.cullFace(n.BACK):k===Ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),F=k}function re(k){k!==B&&(G&&n.lineWidth(k),B=k)}function we(k,ge,le){k?(xe(n.POLYGON_OFFSET_FILL),(I!==ge||Y!==le)&&(I=ge,Y=le,o.getReversed()&&(ge=-ge,le=-le),n.polygonOffset(ge,le))):Le(n.POLYGON_OFFSET_FILL)}function O(k){k?xe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function ee(k){k===void 0&&(k=n.TEXTURE0+Z-1),X!==k&&(n.activeTexture(k),X=k)}function ae(k,ge,le){le===void 0&&(X===null?le=n.TEXTURE0+Z-1:le=X);let He=se[le];He===void 0&&(He={type:void 0,texture:void 0},se[le]=He),(He.type!==k||He.texture!==ge)&&(X!==le&&(n.activeTexture(le),X=le),n.bindTexture(k,ge||ie[k]),He.type=k,He.texture=ge)}function L(){let k=se[X];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function ot(){try{n.compressedTexImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function _t(){try{n.texSubImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function Ce(){try{n.texSubImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function _e(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function Be(){try{n.texStorage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function C(){try{n.texStorage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function E(){try{n.texImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function q(){try{n.texImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function be(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function ue(k,ge){d[k]!==ge&&(n.pixelStorei(k,ge),d[k]=ge)}function De(k){Q.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function Ge(k){ve.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ve.copy(k))}function de(k,ge){let le=c.get(ge);le===void 0&&(le=new WeakMap,c.set(ge,le));let He=le.get(k);He===void 0&&(He=n.getUniformBlockIndex(ge,k.name),n.uniformBlockBinding(ge,He,He),le.set(k,He))}function pe(k,ge,le){let Pe=c.get(ge).get(k);l[Pe]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,Pe,le),l[Pe]=le)}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},X=null,se={},h={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,b=null,y=null,w=null,S=null,v=null,M=new Ue(0,0,0),D=0,A=!1,N=null,F=null,B=null,I=null,Y=null,Q.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Le,bindFramebuffer:ht,drawBuffers:Ve,useProgram:me,setBlending:U,setMaterial:W,setFlipSided:ne,setCullFace:K,setLineWidth:re,setPolygonOffset:we,setScissorTest:O,activeTexture:ee,bindTexture:ae,unbindTexture:L,compressedTexImage2D:Ke,compressedTexImage3D:ot,texImage2D:E,texImage3D:q,pixelStorei:ue,getParameter:be,updateUBOMapping:de,uniformBlockBinding:pe,texStorage2D:Be,texStorage3D:C,texSubImage2D:_t,texSubImage3D:Ce,compressedTexSubImage2D:_e,compressedTexSubImage3D:fe,scissor:De,viewport:Ge,reset:ze}}function TM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,x=new FinalizationRegistry(C=>f.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):xa("canvas")}function _(C,E,q){let be=1,ue=Be(C);if((ue.width>q||ue.height>q)&&(be=q/Math.max(ue.width,ue.height)),be<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let De=Math.floor(be*ue.width),Ge=Math.floor(be*ue.height);h===void 0&&(h=g(De,Ge));let de=E?g(De,Ge):h;return de.width=De,de.height=Ge,de.getContext("2d").drawImage(C,0,0,De,Ge),yt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+De+"x"+Ge+")."),de}else return"data"in C&&yt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function b(C){return C.generateMipmaps}function y(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,E,q,be,ue,De=!1){if(C!==null){if(n[C]!==void 0)return n[C];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ge;be&&(Ge=e.get("EXT_texture_norm16"),Ge||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===n.RED&&(q===n.FLOAT&&(de=n.R32F),q===n.HALF_FLOAT&&(de=n.R16F),q===n.UNSIGNED_BYTE&&(de=n.R8),q===n.UNSIGNED_SHORT&&Ge&&(de=Ge.R16_EXT),q===n.SHORT&&Ge&&(de=Ge.R16_SNORM_EXT)),E===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.R8UI),q===n.UNSIGNED_SHORT&&(de=n.R16UI),q===n.UNSIGNED_INT&&(de=n.R32UI),q===n.BYTE&&(de=n.R8I),q===n.SHORT&&(de=n.R16I),q===n.INT&&(de=n.R32I)),E===n.RG&&(q===n.FLOAT&&(de=n.RG32F),q===n.HALF_FLOAT&&(de=n.RG16F),q===n.UNSIGNED_BYTE&&(de=n.RG8),q===n.UNSIGNED_SHORT&&Ge&&(de=Ge.RG16_EXT),q===n.SHORT&&Ge&&(de=Ge.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RG8UI),q===n.UNSIGNED_SHORT&&(de=n.RG16UI),q===n.UNSIGNED_INT&&(de=n.RG32UI),q===n.BYTE&&(de=n.RG8I),q===n.SHORT&&(de=n.RG16I),q===n.INT&&(de=n.RG32I)),E===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RGB8UI),q===n.UNSIGNED_SHORT&&(de=n.RGB16UI),q===n.UNSIGNED_INT&&(de=n.RGB32UI),q===n.BYTE&&(de=n.RGB8I),q===n.SHORT&&(de=n.RGB16I),q===n.INT&&(de=n.RGB32I)),E===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),q===n.UNSIGNED_INT&&(de=n.RGBA32UI),q===n.BYTE&&(de=n.RGBA8I),q===n.SHORT&&(de=n.RGBA16I),q===n.INT&&(de=n.RGBA32I)),E===n.RGB&&(q===n.UNSIGNED_SHORT&&Ge&&(de=Ge.RGB16_EXT),q===n.SHORT&&Ge&&(de=Ge.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),E===n.RGBA){let pe=De?ga:Ft.getTransfer(ue);q===n.FLOAT&&(de=n.RGBA32F),q===n.HALF_FLOAT&&(de=n.RGBA16F),q===n.UNSIGNED_BYTE&&(de=pe===Zt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&Ge&&(de=Ge.RGBA16_EXT),q===n.SHORT&&Ge&&(de=Ge.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function v(C,E){let q;return C?E===null||E===Ki||E===kr?q=n.DEPTH24_STENCIL8:E===Li?q=n.DEPTH32F_STENCIL8:E===ko&&(q=n.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===kr?q=n.DEPTH_COMPONENT24:E===Li?q=n.DEPTH_COMPONENT32F:E===ko&&(q=n.DEPTH_COMPONENT16),q}function M(C,E){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function D(C){let E=new WeakRef(C);i.get(C).__ref=E,f.add(E),x.register(C,E,E)}function A(C){let E=i.get(C).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function N(C){B(C.target)}function F(C){I(C.target)}function B(C){C.removeEventListener("dispose",N),A(C),Z(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",F),A(C),$(C)}function Y(){for(let C of f){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):B(E))}f.clear(),d.clear()}function Z(C){let E=i.get(C);if(E.__webglInit===void 0)return;let q=C.source,be=p.get(q);if(be){let ue=be[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&G(C),Object.keys(be).length===0&&p.delete(q)}i.remove(C)}function G(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let q=C.source,be=p.get(q);delete be[E.__cacheKey],o.memory.textures--}function $(C){let E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let q=C.depthTexture;if(q&&q.renderTarget===C&&B(q),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let De=0;De<E.__webglFramebuffer[ue].length;De++)n.deleteFramebuffer(E.__webglFramebuffer[ue][De]);else n.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[ue]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let be=C.textures;for(let ue=0,De=be.length;ue<De;ue++){let Ge=i.get(be[ue]);Ge.__webglTexture&&(n.deleteTexture(Ge.__webglTexture),o.memory.textures--),i.remove(be[ue])}i.remove(C)}let z=0;function X(){z=0}function se(){return z}function Se(C){z=C}function Oe(){let C=z;return C>=s.maxTextures&&yt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function Q(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ve(C,E){let q=i.get(C);if(C.isVideoTexture&&_e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let be=C.image;if(be===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(q,C,E);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+E)}function Ee(C,E){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){W(q,C,E);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+E)}function ie(C,E){let q=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){W(q,C,E);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+E)}function xe(C,E){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ne(q,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+E)}let Le={[Ps]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},ht={[zn]:n.NEAREST,[Zp]:n.NEAREST_MIPMAP_NEAREST,[qa]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[Bc]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Ve={[e0]:n.NEVER,[yh]:n.ALWAYS,[t0]:n.LESS,[xh]:n.LEQUAL,[n0]:n.EQUAL,[_h]:n.GEQUAL,[i0]:n.GREATER,[s0]:n.NOTEQUAL};function me(C,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===Bc||E.magFilter===qa||E.magFilter===Yi||E.minFilter===xn||E.minFilter===Bc||E.minFilter===qa||E.minFilter===Yi)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Le[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Le[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Le[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ht[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==qa&&E.minFilter!==Yi||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Re(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",N),D(E));let be=E.source,ue=p.get(be);ue===void 0&&(ue={},p.set(be,ue));let De=Q(E);if(De!==C.__cacheKey){ue[De]===void 0&&(ue[De]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ue[De].usedTimes++;let Ge=ue[C.__cacheKey];Ge!==void 0&&(ue[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&G(E)),C.__cacheKey=De,C.__webglTexture=ue[De].texture}return q}function oe(C,E,q){return Math.floor(Math.floor(C/q)/E)}function U(C,E,q,be){let De=C.updateRanges;if(De.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,q,be,E.data);else{De.sort((k,ge)=>k.start-ge.start);let Ge=0;for(let k=1;k<De.length;k++){let ge=De[Ge],le=De[k],He=ge.start+ge.count,Pe=oe(le.start,E.width,4),ke=oe(ge.start,E.width,4);le.start<=He+1&&Pe===ke&&oe(le.start+le.count-1,E.width,4)===Pe?ge.count=Math.max(ge.count,le.start+le.count-ge.start):(++Ge,De[Ge]=le)}De.length=Ge+1;let de=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let k=0,ge=De.length;k<ge;k++){let le=De[k],He=Math.floor(le.start/4),Pe=Math.ceil(le.count/4),ke=He%E.width,it=Math.floor(He/E.width),Tt=Pe,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,it),t.texSubImage2D(n.TEXTURE_2D,0,ke,it,Tt,ce,q,be,E.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function W(C,E,q){let be=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(be=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(be=n.TEXTURE_3D);let ue=Re(C,E),De=E.source;t.bindTexture(be,C.__webglTexture,n.TEXTURE0+q);let Ge=i.get(De);if(De.version!==Ge.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ce=Ft.getPrimaries(Ft.workingColorSpace),tt=E.colorSpace===Bs?null:Ft.getPrimaries(E.colorSpace),pt=E.colorSpace===Bs||ce===tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=_(E.image,!1,s.maxTextureSize);pe=fe(E,pe);let ze=r.convert(E.format,E.colorSpace),k=r.convert(E.type),ge=S(E.internalFormat,ze,k,E.normalized,E.colorSpace,E.isVideoTexture);me(be,E);let le,He=E.mipmaps,Pe=E.isVideoTexture!==!0,ke=Ge.__version===void 0||ue===!0,it=De.dataReady,Tt=M(E,pe);if(E.isDepthTexture)ge=v(E.format===ks,E.type),ke&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ge,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ge,pe.width,pe.height,0,ze,k,null));else if(E.isDataTexture)if(He.length>0){Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,Tt,ge,He[0].width,He[0].height);for(let ce=0,tt=He.length;ce<tt;ce++)le=He[ce],Pe?it&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,le.width,le.height,ze,k,le.data):t.texImage2D(n.TEXTURE_2D,ce,ge,le.width,le.height,0,ze,k,le.data);E.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(n.TEXTURE_2D,Tt,ge,pe.width,pe.height),it&&U(E,pe,ze,k)):t.texImage2D(n.TEXTURE_2D,0,ge,pe.width,pe.height,0,ze,k,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,ge,He[0].width,He[0].height,pe.depth);for(let ce=0,tt=He.length;ce<tt;ce++)if(le=He[ce],E.format!==Zi)if(ze!==null)if(Pe){if(it)if(E.layerUpdates.size>0){let pt=Ph(le.width,le.height,E.format,E.type);for(let $e of E.layerUpdates){let Bt=le.data.subarray($e*pt/le.data.BYTES_PER_ELEMENT,($e+1)*pt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,$e,le.width,le.height,1,ze,Bt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,le.width,le.height,pe.depth,ze,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,ge,le.width,le.height,pe.depth,0,le.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?it&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,le.width,le.height,pe.depth,ze,k,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,ge,le.width,le.height,pe.depth,0,ze,k,le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,Tt,ge,He[0].width,He[0].height);for(let ce=0,tt=He.length;ce<tt;ce++)le=He[ce],E.format!==Zi?ze!==null?Pe?it&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,le.width,le.height,ze,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,ge,le.width,le.height,0,le.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?it&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,le.width,le.height,ze,k,le.data):t.texImage2D(n.TEXTURE_2D,ce,ge,le.width,le.height,0,ze,k,le.data)}else if(E.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Tt,ge,pe.width,pe.height,pe.depth),it)if(E.layerUpdates.size>0){let ce=Ph(pe.width,pe.height,E.format,E.type);for(let tt of E.layerUpdates){let pt=pe.data.subarray(tt*ce/pe.data.BYTES_PER_ELEMENT,(tt+1)*ce/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,pe.width,pe.height,1,ze,k,pt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ze,k,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,pe.width,pe.height,pe.depth,0,ze,k,pe.data);else if(E.isData3DTexture)Pe?(ke&&t.texStorage3D(n.TEXTURE_3D,Tt,ge,pe.width,pe.height,pe.depth),it&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ze,k,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ge,pe.width,pe.height,pe.depth,0,ze,k,pe.data);else if(E.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(n.TEXTURE_2D,Tt,ge,pe.width,pe.height);else{let ce=pe.width,tt=pe.height;for(let pt=0;pt<Tt;pt++)t.texImage2D(n.TEXTURE_2D,pt,ge,ce,tt,0,ze,k,null),ce>>=1,tt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),pe.parentNode!==ce){ce.appendChild(pe),d.add(E),ce.onpaint=tt=>{let pt=tt.changedElements;for(let $e of d)pt.includes($e.image)&&($e.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pe);else{let pt=n.RGBA,$e=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pt,$e,Bt,pe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(Pe&&ke){let ce=Be(He[0]);t.texStorage2D(n.TEXTURE_2D,Tt,ge,ce.width,ce.height)}for(let ce=0,tt=He.length;ce<tt;ce++)le=He[ce],Pe?it&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ze,k,le):t.texImage2D(n.TEXTURE_2D,ce,ge,ze,k,le);E.generateMipmaps=!1}else if(Pe){if(ke){let ce=Be(pe);t.texStorage2D(n.TEXTURE_2D,Tt,ge,ce.width,ce.height)}it&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,k,pe)}else t.texImage2D(n.TEXTURE_2D,0,ge,ze,k,pe);b(E)&&E.mipmapsAutoUpdate===!0&&y(be),Ge.__version=De.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ne(C,E,q){if(E.image.length!==6)return;let be=Re(C,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let De=i.get(ue);if(ue.version!==De.__version||be===!0){t.activeTexture(n.TEXTURE0+q);let Ge=Ft.getPrimaries(Ft.workingColorSpace),de=E.colorSpace===Bs?null:Ft.getPrimaries(E.colorSpace),pe=E.colorSpace===Bs||Ge===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let ze=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let $e=0;$e<6;$e++)!ze&&!k?ge[$e]=_(E.image[$e],!0,s.maxCubemapSize):ge[$e]=k?E.image[$e].image:E.image[$e],ge[$e]=fe(E,ge[$e]);let le=ge[0],He=r.convert(E.format,E.colorSpace),Pe=r.convert(E.type),ke=S(E.internalFormat,He,Pe,E.normalized,E.colorSpace),it=E.isVideoTexture!==!0,Tt=De.__version===void 0||be===!0,ce=ue.dataReady,tt=M(E,le);me(n.TEXTURE_CUBE_MAP,E);let pt;if(E.isDepthTexture){if(ke=v(E.format===ks,E.type),Tt)if(it)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ke,le.width,le.height);else for(let $e=0;$e<6;$e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,le.width,le.height,0,He,Pe,null)}else if(ze){it&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,ke,le.width,le.height);for(let $e=0;$e<6;$e++){pt=ge[$e].mipmaps;for(let Bt=0;Bt<pt.length;Bt++){let jt=pt[Bt];E.format!==Zi?He!==null?it?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt,0,0,jt.width,jt.height,He,jt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt,ke,jt.width,jt.height,0,jt.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt,0,0,jt.width,jt.height,He,Pe,jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt,ke,jt.width,jt.height,0,He,Pe,jt.data)}}}else{if(pt=E.mipmaps,it&&Tt){pt.length>0&&tt++;let $e=Be(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,ke,$e.width,$e.height)}for(let $e=0;$e<6;$e++)if(k){it?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,0,0,ge[$e].width,ge[$e].height,He,Pe,ge[$e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,ge[$e].width,ge[$e].height,0,He,Pe,ge[$e].data);for(let Bt=0;Bt<pt.length;Bt++){let Wn=pt[Bt].image[$e].image;it?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt+1,0,0,Wn.width,Wn.height,He,Pe,Wn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt+1,ke,Wn.width,Wn.height,0,He,Pe,Wn.data)}}else{it?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,0,0,He,Pe,ge[$e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,He,Pe,ge[$e]);for(let Bt=0;Bt<pt.length;Bt++){let jt=pt[Bt];it?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt+1,0,0,He,Pe,jt.image[$e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Bt+1,ke,He,Pe,jt.image[$e])}}}b(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),De.__version=ue.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function K(C,E,q,be,ue,De){let Ge=r.convert(q.format,q.colorSpace),de=r.convert(q.type),pe=S(q.internalFormat,Ge,de,q.normalized,q.colorSpace),ze=i.get(E),k=i.get(q);if(k.__renderTarget=E,!ze.__hasExternalTextures){let ge=Math.max(1,E.width>>De),le=Math.max(1,E.height>>De);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,De,pe,ge,le,E.depth,0,Ge,de,null):t.texImage2D(ue,De,pe,ge,le,0,Ge,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ue,k.__webglTexture,0,_t(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,be,ue,k.__webglTexture,De),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(C,E,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let be=E.depthTexture,ue=be&&be.isDepthTexture?be.type:null,De=v(E.stencilBuffer,ue),Ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),De,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),De,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,De,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,C)}else{let be=E.textures;for(let ue=0;ue<be.length;ue++){let De=be[ue],Ge=r.convert(De.format,De.colorSpace),de=r.convert(De.type),pe=S(De.internalFormat,Ge,de,De.normalized,De.colorSpace);Ce(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(E),pe,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(E),pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(C,E,q){let be=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=i.get(E.depthTexture);ue.__renderTarget=E;let De=be?E.depthTexture.image[0]:E.depthTexture.image;(!ue.__webglTexture||De.width!==E.width||De.height!==E.height)&&(De.width=E.width,De.height=E.height,E.depthTexture.needsUpdate=!0),be?xe(E.depthTexture,0):ve(E.depthTexture,0);let Ge=ue.__webglTexture,de=_t(E),pe=be?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,ze=E.depthTexture.format===ks?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Is)Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,pe,Ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ze,pe,Ge,0);else if(E.depthTexture.format===ks)Ce(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,pe,Ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ze,pe,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(C){let E=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let be=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),be){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,be.removeEventListener("dispose",ue)};be.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=be}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let be=0;be<6;be++)we(E.__webglFramebuffer[be],C,be);else C.texture.mipmaps.length>0?we(E.__webglFramebuffer[0],C,0):we(E.__webglFramebuffer,C,0);else if(q){E.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[be]),E.__webglDepthbuffer[be]===void 0)E.__webglDepthbuffer[be]=n.createRenderbuffer(),re(E.__webglDepthbuffer[be],C,!1);else{let ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer[be];n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,De)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),re(E.__webglDepthbuffer,C,!1);else{let ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,De),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,De)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(C,E,q){let be=i.get(C);E!==void 0&&K(be.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&O(C)}function ae(C){let E=C.texture,q=i.get(C),be=i.get(E);C.addEventListener("dispose",F),D(C);let ue=C.textures,De=C.isWebGLCubeRenderTarget===!0,Ge=ue.length>1;if(Ge||(be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture()),be.__version=E.version,o.memory.textures++),De){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let pe=0;pe<E.mipmaps.length;pe++)q.__webglFramebuffer[de][pe]=n.createFramebuffer()}else q.__webglFramebuffer[de]=n.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)q.__webglFramebuffer[de]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let de=0,pe=ue.length;de<pe;de++){let ze=i.get(ue[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ce(C)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<ue.length;de++){let pe=ue[de];q.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[de]);let ze=r.convert(pe.format,pe.colorSpace),k=r.convert(pe.type),ge=S(pe.internalFormat,ze,k,pe.normalized,pe.colorSpace,C.isXRRenderTarget===!0),le=_t(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,q.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),re(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(De){t.bindTexture(n.TEXTURE_CUBE_MAP,be.__webglTexture),me(n.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)K(q.__webglFramebuffer[de][pe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else K(q.__webglFramebuffer[de],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);b(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ge){for(let de=0,pe=ue.length;de<pe;de++){let ze=ue[de],k=i.get(ze),ge=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,k.__webglTexture),me(ge,ze),K(q.__webglFramebuffer,C,ze,n.COLOR_ATTACHMENT0+de,ge,0),b(ze)&&y(ge)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,be.__webglTexture),me(de,E),E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)K(q.__webglFramebuffer[pe],C,E,n.COLOR_ATTACHMENT0,de,pe);else K(q.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,de,0);b(E)?y(de):E.mipmaps.length>0&&n.texParameteri(de,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&O(C)}function L(C){let E=C.textures;for(let q=0,be=E.length;q<be;q++){let ue=E[q];if(b(ue)&&ue.mipmapsAutoUpdate===!0){let De=w(C),Ge=i.get(ue).__webglTexture;t.bindTexture(De,Ge),y(De),t.unbindTexture()}}}let Ke=[];function ot(C){if(C.samples>0){if(Ce(C)===!1){let E=C.textures,q=C.width,be=C.height,ue=n.COLOR_BUFFER_BIT,De=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=i.get(C),de=E.length>1;if(de)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let k=i.get(E[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,q,be,0,0,q,be,ue,n.NEAREST),l===!0&&(Ke.length=0,Ke.push(n.COLOR_ATTACHMENT0+ze),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ke.push(De),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);let k=i.get(E[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,k,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function Ce(C){let E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(C){let E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function fe(C,E){let q=C.colorSpace,be=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==ma&&q!==Bs&&(Ft.getTransfer(q)===Zt?(be!==Zi||ue!==fi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",q)),E}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=X,this.getTextureUnits=se,this.setTextureUnits=Se,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=ie,this.setTextureCube=xe,this.rebindTextures=ee,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ce,this.dispose=Y}function AM(n,e){function t(i,s=Bs){let r,o=Ft.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ph)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dh)return n.BYTE;if(i===hh)return n.SHORT;if(i===ko)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Li)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Zi)return n.RGBA;if(i===Is)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===Vc)return n.RED;if(i===Wc)return n.RED_INTEGER;if(i===dr)return n.RG;if(i===Xc)return n.RG_INTEGER;if(i===qc)return n.RGBA_INTEGER;if(i===$a||i===Ya||i===Ka||i===Za)if(o===Zt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Yc||i===Kc||i===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===jc||i===Qc||i===eu||i===tu||i===Ja||i===nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jc||i===jc)return o===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qc)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===eu)return r.COMPRESSED_R11_EAC;if(i===tu)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ja)return r.COMPRESSED_RG11_EAC;if(i===nu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===iu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===su)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ru)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===du)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xu||i===_u||i===yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xu)return o===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vu||i===bu||i===ja||i===Mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var RM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:RM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Xi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new Bh,g={},_=t.getContextAttributes(),b=null,y=null,w=[],S=[],v=new ye,M=null,D=null,A=new Bn;A.viewport=new an;let N=new Bn;N.viewport=new an;let F=[A,N],B=new Oc,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=w[Q];return ve===void 0&&(ve=new Eo,w[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=w[Q];return ve===void 0&&(ve=new Eo,w[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=w[Q];return ve===void 0&&(ve=new Eo,w[Q]=ve),ve.getHandSpace()};function Z(Q){let ve=S.indexOf(Q.inputSource);if(ve===-1)return;let Ee=w[ve];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||o),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let Q=0;Q<w.length;Q++){let ve=S[Q];ve!==null&&(S[Q]=null,w[Q].disconnect(ve))}I=null,Y=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(b),p=null,h=null,d=null,s=null,y=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ie=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=_.stencil?ks:Is,ie=_.stencil?kr:Ki);let Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new qn(h.textureWidth,h.textureHeight,{format:Zi,type:fi,depthTexture:new Ns(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new qn(p.framebufferWidth,p.framebufferHeight,{format:Zi,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Q){for(let ve=0;ve<Q.removed.length;ve++){let Ee=Q.removed[ve],ie=S.indexOf(Ee);ie>=0&&(S[ie]=null,w[ie].disconnect(Ee))}for(let ve=0;ve<Q.added.length;ve++){let Ee=Q.added[ve],ie=S.indexOf(Ee);if(ie===-1){for(let Le=0;Le<w.length;Le++)if(Le>=S.length){S.push(Ee),ie=Le;break}else if(S[Le]===null){S[Le]=Ee,ie=Le;break}if(ie===-1)break}let xe=w[ie];xe&&xe.connect(Ee)}}function z(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ve=Q.near,Ee=Q.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),B.near=N.near=A.near=ve,B.far=N.far=A.far=Ee,(I!==B.near||Y!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,Y=B.far),B.layers.mask=Q.layers.mask|6,A.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let ie=Q.parent,xe=B.cameras;z(B,ie);for(let Le=0;Le<xe.length;Le++)z(xe[Le],ie);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),X(Q,B,ie)};function X(Q,ve,Ee){Ee===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Mo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return g[Q]};let se=null;function Se(Q,ve){if(u=ve.getViewerPose(c||o),f=ve,u!==null){let Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ie=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,ie=!0);for(let Ve=0;Ve<Ee.length;Ve++){let me=Ee[Ve],Re=null;if(p!==null)Re=p.getViewport(me);else{let U=d.getViewSubImage(h,me);Re=U.viewport,Ve===0&&(e.setRenderTargetTextures(y,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(y))}let oe=F[Ve];oe===void 0&&(oe=new Bn,oe.layers.enable(Ve),oe.viewport=new an,F[Ve]=oe),oe.matrix.fromArray(me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Re.x,Re.y,Re.width,Re.height),Ve===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ie===!0&&B.cameras.push(oe)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Ve=d.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<Ee.length;Ve++){let me=Ee[Ve].camera;if(me){let Re=g[me];Re||(Re=new Ca,g[me]=Re);let oe=d.getCameraImage(me);Re.sourceTexture=oe}}}}for(let Ee=0;Ee<w.length;Ee++){let ie=S[Ee],xe=w[Ee];ie!==null&&xe!==void 0&&xe.update(ie,ve,c||o)}se&&se(Q,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),f=null}let Oe=new k0;Oe.setAnimationLoop(Se),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}},PM=new St,Y0=new Et;Y0.set(-1,0,0,0,1,0,0,0,1);function IM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Ah(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Kn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Kn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Y0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LM(n,e,t,i){let s={},r={};function o(_,b){let y=b.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,b){let y=s[_.id];y===void 0&&(f(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(_,w);let S=e.render.frame;r[_.id]!==S&&(c(_),r[_.id]=S)}function l(_){let b=n.createBuffer(),y=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],y=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,v=y.length;S<v;S++){let M=y[S];if(Array.isArray(M))for(let D=0,A=M.length;D<A;D++)u(M[D],S,D,w);else u(M,S,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,y,w){if(h(_,b,y,w)===!0){let S=_.__offset,v=_.value;if(Array.isArray(v)){let M=0;for(let D=0;D<v.length;D++){let A=v[D],N=x(A,!0);d(A,_.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,_.__data)}}function d(_,b,y){typeof _=="number"||typeof _=="boolean"?b[y]=_:_.isMatrix3?(b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-y),y):_.toArray(b,y)}function h(_,b,y,w){let S=_.value,v=b+"_"+y;if(Array.isArray(S)){w[v]===void 0&&(w[v]=[]);let M=w[v],D=!1;for(let A=0;A<S.length;A++)p(S[A],M,A)===!0&&(D=!0);return D}return p(S,w,v)}function p(_,b,y){if(b[y]===void 0)return typeof _=="number"||typeof _=="boolean"?b[y]=_:ArrayBuffer.isView(_)?b[y]=_.slice():b[y]=_.clone(),!0;{let w=b[y];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return b[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function f(_){let b=_.uniforms,y=0,w=16;for(let v=0,M=b.length;v<M;v++){let D=Array.isArray(b[v])?b[v]:[b[v]];for(let A=0,N=D.length;A<N;A++){let F=D[A],B=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(b[v])||Array.isArray(F.value),Y=y;for(let G=0,$=B.length;G<$;G++){let z=B[G],X=x(z,I),se=y%w,Se=se%X.boundary,Oe=se+Se;y+=Se,Oe!==0&&w-Oe<X.storage&&(y+=w-Oe),G===0&&(Y=y),y+=X.storage}let Z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Z((y-Y)/Float32Array.BYTES_PER_ELEMENT),F.__offset=Y}}let S=y%w;return S>0&&(y+=w-S),_.__size=y,_.__cache={},this}function x(_,b){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var DM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gs=null;function NM(){return gs===null&&(gs=new Sa(DM,16,16,dr,di),gs.name="DFG_LUT",gs.minFilter=xn,gs.magFilter=xn,gs.wrapS=us,gs.wrapT=us,gs.generateMipmaps=!1,gs.needsUpdate=!0),gs}var Cu=class{constructor(e={}){let{canvas:t=r0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=fi}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=p,m=new Set([qc,Xc,Wc]),g=new Set([fi,Ki,ko,kr,Hc,Gc]),_=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,S=null,v=[],M=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,F=null,B=null,I=null,Y=null;this._outputColorSpace=Xn;let Z=0,G=0,$=null,z=-1,X=null,se=new an,Se=new an,Oe=null,Q=new Ue(0),ve=0,Ee=t.width,ie=t.height,xe=1,Le=null,ht=null,Ve=new an(0,0,Ee,ie),me=new an(0,0,Ee,ie),Re=!1,oe=new nr,U=new fc,W=!1,ne=!1,K=new St,re=new R,we=new an,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ae(){return $===null?xe:1}let L=i;function Ke(T,V){return t.getContext(T,V)}let ot,_t,Ce,_e,fe,Be,C,E,q,be,ue,De,Ge,de,pe,ze,k,ge,le,He,Pe,ke,it;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",$e,!1),L===null){let V="webgl2";if(L=Ke(V,T),L===null)throw Ke(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(T){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Mt("WebGLRenderer: "+T.message),T}function Tt(){ot=new X1(L),ot.init(),Pe=new AM(L,ot),_t=new N1(L,ot,e,Pe),Ce=new EM(L,ot),_t.reversedDepthBuffer&&h&&Ce.buffers.depth.setReversed(!0),B=L.createFramebuffer(),I=L.createFramebuffer(),Y=L.createFramebuffer(),_e=new Y1(L),fe=new dM,Be=new TM(L,ot,Ce,fe,_t,Pe,_e),C=new W1(A),E=new Z_(L),ke=new L1(L,E),q=new q1(L,E,_e,ke),be=new Z1(L,q,E,ke,_e),ge=new K1(L,_t,Be),pe=new O1(fe),ue=new uM(A,C,ot,_t,ke,pe),De=new IM(A,fe),Ge=new fM,de=new yM(ot),k=new I1(A,C,Ce,be,f,l),ze=new wM(A,be,_t),it=new LM(L,_e,_t,Ce),le=new D1(L,ot,_e),He=new $1(L,ot,_e),_e.programs=ue.programs,A.capabilities=_t,A.extensions=ot,A.properties=fe,A.renderLists=Ge,A.shadowMap=ze,A.state=Ce,A.info=_e}x!==fi&&(D=new j1(x,t.width,t.height,a,s,r));let ce=new zh(A,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(T){T!==void 0&&(xe=T,this.setSize(Ee,ie,!1))},this.getSize=function(T){return T.set(Ee,ie)},this.setSize=function(T,V,j=!0){if(ce.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=T,ie=V,t.width=Math.floor(T*xe),t.height=Math.floor(V*xe),j===!0&&(t.style.width=T+"px",t.style.height=V+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Ee*xe,ie*xe).floor()},this.setDrawingBufferSize=function(T,V,j){Ee=T,ie=V,xe=j,t.width=Math.floor(T*j),t.height=Math.floor(V*j),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===fi){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(se)},this.getViewport=function(T){return T.copy(Ve)},this.setViewport=function(T,V,j,J){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,V,j,J),Ce.viewport(se.copy(Ve).multiplyScalar(ae()).round())},this.getScissor=function(T){return T.copy(me)},this.setScissor=function(T,V,j,J){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,V,j,J),Ce.scissor(Se.copy(me).multiplyScalar(ae()).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){Ce.setScissorTest(Re=T)},this.setOpaqueSort=function(T){Le=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,j=!0){let J=0;if(T){let te=!1;if($!==null){let We=$.texture.format;te=m.has(We)}if(te){let We=$.texture.type,Qe=g.has(We),Fe=k.getClearColor(),Ze=k.getClearAlpha(),at=Fe.r,wt=Fe.g,nt=Fe.b;Qe?(_[0]=at,_[1]=wt,_[2]=nt,_[3]=Ze,L.clearBufferuiv(L.COLOR,0,_)):(b[0]=at,b[1]=wt,b[2]=nt,b[3]=Ze,L.clearBufferiv(L.COLOR,0,b))}else J|=L.COLOR_BUFFER_BIT}V&&(J|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),k.dispose(),Ge.dispose(),de.dispose(),Be.dispose(),fe.dispose(),C.dispose(),be.dispose(),q.dispose(),ke.dispose(),it.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ms),ce.removeEventListener("sessionend",Ys),wn.stop()};function tt(T){T.preventDefault(),_a("WebGLRenderer: Context Lost."),N=!0}function pt(){_a("WebGLRenderer: Context Restored."),N=!1;let T=_e.autoReset,V=ze.enabled,j=ze.autoUpdate,J=ze.needsUpdate,te=ze.type;Tt(),_e.autoReset=T,ze.enabled=V,ze.autoUpdate=j,ze.needsUpdate=J,ze.type=te}function $e(T){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){let V=T.target;V.removeEventListener("dispose",Bt),jt(V)}function jt(T){Wn(T),fe.remove(T)}function Wn(T){let V=fe.get(T).programs;V!==void 0&&(V.forEach(function(j){ue.releaseProgram(j)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,j,J,te,We){V===null&&(V=O);let Qe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Fe=Rn(T,V,j,J,te);Ce.setMaterial(J,Qe);let Ze=j.index,at=1;if(J.wireframe===!0){if(Ze=q.getWireframeAttribute(j),Ze===void 0)return;at=2}let wt=j.drawRange,nt=j.attributes.position,lt=wt.start*at,Dt=(wt.start+wt.count)*at;We!==null&&(lt=Math.max(lt,We.start*at),Dt=Math.min(Dt,(We.start+We.count)*at)),Ze!==null?(lt=Math.max(lt,0),Dt=Math.min(Dt,Ze.count)):nt!=null&&(lt=Math.max(lt,0),Dt=Math.min(Dt,nt.count));let pn=Dt-lt;if(pn<0||pn===1/0)return;ke.setup(te,J,Fe,j,Ze);let sn,Kt=le;if(Ze!==null&&(sn=E.get(Ze),Kt=He,Kt.setIndex(sn)),te.isMesh)J.wireframe===!0?(Ce.setLineWidth(J.wireframeLinewidth*ae()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(te.isLine){let mn=J.linewidth;mn===void 0&&(mn=1),Ce.setLineWidth(mn*ae()),te.isLineSegments?Kt.setMode(L.LINES):te.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else te.isPoints?Kt.setMode(L.POINTS):te.isSprite&&Kt.setMode(L.TRIANGLES);if(te.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let mn=te._multiDrawStarts,ct=te._multiDrawCounts,En=te._multiDrawCount,zt=Ze?E.get(Ze).bytesPerElement:1,ls=fe.get(J).currentProgram.getUniforms();for(let Cn=0;Cn<En;Cn++)ls.setValue(L,"_gl_DrawID",Cn),Kt.render(mn[Cn]/zt,ct[Cn])}else if(te.isInstancedMesh)Kt.renderInstances(lt,pn,te.count);else if(j.isInstancedBufferGeometry){let mn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ct=Math.min(j.instanceCount,mn);Kt.renderInstances(lt,pn,ct)}else Kt.render(lt,pn)};function si(T,V,j,J){F!==null&&T.isNodeMaterial&&F.setObject(J,T),W===!0&&pe.setState(T,j,!1),T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,Ai(T,V,J),T.side=fs,T.needsUpdate=!0,Ai(T,V,J),T.side=tn):Ai(T,V,J)}this.compile=function(T,V,j=null){j===null&&(j=T),F!==null&&F.renderStart(T,V,j),S=de.get(j),S.init(V),M.push(S),j.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),T!==j&&T.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(S.pushLight(te),te.castShadow&&S.pushShadow(te))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),ne=this.localClippingEnabled,W=pe.init(this.clippingPlanes,ne),W===!0&&pe.setGlobalState(this.clippingPlanes,V),F!==null&&ze.render(S.state.shadowsArray,j,V);let J=new Set;return T.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let We=te.material;if(We)if(Array.isArray(We))for(let Qe=0;Qe<We.length;Qe++){let Fe=We[Qe];si(Fe,j,V,te),J.add(Fe)}else si(We,j,V,te),J.add(We)}),S=M.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(T,V,j=null){let J=this.compile(T,V,j);return new Promise(te=>{function We(){if(J.forEach(function(Qe){let Ze=fe.get(Qe).currentProgram;(Ze===void 0||Ze.isReady())&&J.delete(Qe)}),J.size===0){te(T);return}setTimeout(We,10)}ot.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Ti=null;function bs(T){Ti&&Ti(T)}function Ms(){wn.stop()}function Ys(){wn.start()}let wn=new k0;wn.setAnimationLoop(bs),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(T){Ti=T,ce.setAnimationLoop(T),T===null?wn.stop():wn.start()},ce.addEventListener("sessionstart",Ms),ce.addEventListener("sessionend",Ys),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(T,V);let j=ce.enabled===!0&&ce.isPresenting===!0,J=D!==null&&($===null||j)&&D.begin(A,$);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(V),V=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,V,$),S=de.get(T,M.length),S.init(V),S.state.textureUnits=Be.getTextureUnits(),M.push(S),K.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?U.setFromArrayCamera(V):oe.setFromProjectionMatrix(K,Ci,V.reversedDepth),ne=this.localClippingEnabled,W=pe.init(this.clippingPlanes,ne),w=Ge.get(T,v.length),w.init(),v.push(w),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Qe=A.xr.getDepthSensingMesh();Qe!==null&&Hi(Qe,V,-1/0,A.sortObjects)}Hi(T,V,0,A.sortObjects),w.finish(),F!==null&&F.updateLights(S.state.lightsArray),A.sortObjects===!0&&w.sort(Le,ht),ee=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ee&&k.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),W===!0&&pe.beginShadows();let te=S.state.shadowsArray;if(ze.render(te,T,V),W===!0&&pe.endShadows(),(J&&D.hasRenderPass())===!1){let Qe=w.opaque,Fe=w.transmissive;if(S.setupLights(),V.isArrayCamera){let Ze=V.cameras;if(Fe.length>0)for(let at=0,wt=Ze.length;at<wt;at++){let nt=Ze[at];fn(Qe,Fe,T,nt)}ee&&k.render(T);for(let at=0,wt=Ze.length;at<wt;at++){let nt=Ze[at];_i(w,T,nt,nt.viewport)}}else Fe.length>0&&fn(Qe,Fe,T,V),ee&&k.render(T),_i(w,T,V)}$!==null&&G===0&&(Be.updateMultisampleRenderTarget($),Be.updateRenderTargetMipmap($)),J&&D.end(A),T.isScene===!0&&T.onAfterRender(A,T,V),ke.resetDefaultState(),z=-1,X=null,M.pop(),M.length>0?(S=M[M.length-1],Be.setTextureUnits(S.state.textureUnits),W===!0&&pe.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,F!==null&&F.renderEnd()};function Hi(T,V,j,J){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){let Qe=V.isArrayCamera?U:oe;if(!T.frustumCulled||T.intersectsFrustum(Qe)){J&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(K);let Fe=be.update(T),Ze=T.material;Ze.visible&&w.push(T,Fe,Ze,j,we.z,null,V)}}else if(T.isMesh||T.isLine||T.isPoints){let Qe=V.isArrayCamera?U:oe;if(!T.frustumCulled||T.intersectsFrustum(Qe)){let Fe=be.update(T),Ze=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),we.copy(Fe.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(K)),Array.isArray(Ze)){let at=Fe.groups;for(let wt=0,nt=at.length;wt<nt;wt++){let lt=at[wt],Dt=Ze[lt.materialIndex];Dt&&Dt.visible&&w.push(T,Fe,Dt,j,we.z,lt,V)}}else Ze.visible&&w.push(T,Fe,Ze,j,we.z,null,V)}}}let We=T.children;for(let Qe=0,Fe=We.length;Qe<Fe;Qe++)Hi(We[Qe],V,j,J)}function _i(T,V,j,J){let{opaque:te,transmissive:We,transparent:Qe}=T;S.setupLightsView(j),W===!0&&pe.setGlobalState(A.clippingPlanes,j),J&&Ce.viewport(se.copy(J)),te.length>0&&rs(te,V,j),We.length>0&&rs(We,V,j),Qe.length>0&&rs(Qe,V,j),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function fn(T,V,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[J.id]===void 0){let lt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[J.id]=new qn(1,1,{generateMipmaps:!0,type:lt?di:fi,minFilter:Yi,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let We=S.state.transmissionRenderTarget[J.id],Qe=J.viewport||se;We.setSize(Qe.z*A.transmissionResolutionScale,Qe.w*A.transmissionResolutionScale);let Fe=A.getRenderTarget(),Ze=A.getActiveCubeFace(),at=A.getActiveMipmapLevel();A.setRenderTarget(We),A.getClearColor(Q),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),ee&&k.render(j);let wt=A.toneMapping;A.toneMapping=ms;let nt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),S.setupLightsView(J),W===!0&&pe.setGlobalState(A.clippingPlanes,J),rs(T,j,J),Be.updateMultisampleRenderTarget(We),Be.updateRenderTargetMipmap(We),ot.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Dt=0,pn=V.length;Dt<pn;Dt++){let sn=V[Dt],{object:Kt,geometry:mn,material:ct,group:En}=sn;if(ct.side===tn&&Kt.layers.test(J.layers)){let zt=ct.side;ct.side=Kn,ct.needsUpdate=!0,jr(Kt,j,J,mn,ct,En),ct.side=zt,ct.needsUpdate=!0,lt=!0}}lt===!0&&(Be.updateMultisampleRenderTarget(We),Be.updateRenderTargetMipmap(We))}A.setRenderTarget(Fe,Ze,at),A.setClearColor(Q,ve),nt!==void 0&&(J.viewport=nt),A.toneMapping=wt}function rs(T,V,j){let J=V.isScene===!0?V.overrideMaterial:null;for(let te=0,We=T.length;te<We;te++){let Qe=T[te],{object:Fe,geometry:Ze,group:at}=Qe,wt=Qe.material;wt.allowOverride===!0&&J!==null&&(wt=J),Fe.layers.test(j.layers)&&jr(Fe,V,j,Ze,wt,at)}}function jr(T,V,j,J,te,We){F!==null&&te.isNodeMaterial&&F.setObject(T,te),T.onBeforeRender(A,V,j,J,te,We),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(A,V,j,J,T,We),te.transparent===!0&&te.side===tn&&te.forceSinglePass===!1?(te.side=Kn,te.needsUpdate=!0,A.renderBufferDirect(j,V,J,te,T,We),te.side=fs,te.needsUpdate=!0,A.renderBufferDirect(j,V,J,te,T,We),te.side=tn):A.renderBufferDirect(j,V,J,te,T,We),T.onAfterRender(A,V,j,J,te,We)}function Ks(T){let V=0;for(let j of T)j.texture!==null&&V++;return V}function Ai(T,V,j){V.isScene!==!0&&(V=O);let J=fe.get(T),te=S.state.lights,We=S.state.shadowsArray,Qe=te.state.version,Fe=ue.getParameters(T,te.state,We,V,j,S.state.lightProbeGridArray),Ze=ue.getProgramCacheKey(Fe),at=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let wt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=C.get(T.envMap||J.environment,wt),J.envMapRotation=J.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,at===void 0&&(T.addEventListener("dispose",Bt),at=new Map,J.programs=at,J.programVariants=new Map);let nt=at.get(Ze);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Qe)return bt(T,Fe),nt}else Fe.uniforms=ue.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,j,Fe),T.onBeforeCompile(Fe,A),nt=ue.acquireProgram(Fe,Ze),at.set(Ze,nt),J.uniforms=Fe.uniforms;let lt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(lt.clippingPlanes=pe.uniform),bt(T,Fe),J.needsLights=br(T),J.lightsStateVersion=Qe,J.needsLights&&(lt.ambientLightColor.value=te.state.ambient,lt.lightProbe.value=te.state.probe,lt.sunLights.value=te.state.sun,lt.sunLightShadows.value=te.state.sunShadow,lt.directionalLights.value=te.state.directional,lt.directionalLightShadows.value=te.state.directionalShadow,lt.spotLights.value=te.state.spot,lt.spotLightShadows.value=te.state.spotShadow,lt.rectAreaLights.value=te.state.rectArea,lt.ltc_1.value=te.state.rectAreaLTC1,lt.ltc_2.value=te.state.rectAreaLTC2,lt.pointLights.value=te.state.point,lt.pointLightShadows.value=te.state.pointShadow,lt.hemisphereLights.value=te.state.hemi,lt.sunShadowMatrix.value=te.state.sunShadowMatrix,lt.sunShadowCascade.value=te.state.sunShadowCascade,lt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,lt.spotLightMatrix.value=te.state.spotLightMatrix,lt.spotLightMap.value=te.state.spotLightMap,lt.pointShadowMatrix.value=te.state.pointShadowMatrix),J.numLightProbeGrids=Ks(S.state.lightProbeGridArray),J.currentProgram=nt,J.uniformsList=null,nt}function Zs(T,V,j,J,te){let We=fe.get(T),Qe=We.currentProgram.id+","+J+","+te,Fe=We.programVariants.get(Qe);return Fe===void 0?(Fe=Ai(T,V,j),We.programVariants.set(Qe,Fe)):(We.currentProgram=Fe,We.uniformsList=null,We.outputColorSpace=J,We.toneMapping=te),Fe}function Te(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Bo.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function bt(T,V){let j=fe.get(T);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Rn(T,V,j,J,te){V.isScene!==!0&&(V=O),Be.resetTextureUnits();let We=V.fog,Qe=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Fe=$===null?A.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ft.workingColorSpace,Ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,at=C.get(J.envMap||Qe,Ze),wt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,nt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),lt=!!j.morphAttributes.position,Dt=!!j.morphAttributes.normal,pn=!!j.morphAttributes.color,sn=ms;J.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(sn=A.toneMapping);let Kt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mn=Kt!==void 0?Kt.length:0,ct=fe.get(J),En=S.state.lights;if(W===!0&&(ne===!0||T!==X)){let st=T===X&&J.id===z;pe.setState(J,T,st)}let zt=!1,ls=!1;J.version===ct.__version?ct.needsLights&&ct.lightsStateVersion!==En.state.version||te.isBatchedMesh&&ct.batching===!1||!te.isBatchedMesh&&ct.batching===!0||te.isBatchedMesh&&ct.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&ct.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&ct.instancing===!1||!te.isInstancedMesh&&ct.instancing===!0||te.isSkinnedMesh&&ct.skinning===!1||!te.isSkinnedMesh&&ct.skinning===!0||te.isInstancedMesh&&ct.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ct.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ct.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ct.instancingMorph===!1&&te.morphTexture!==null||ct.envMap!==at||J.fog===!0&&ct.fog!==We||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==pe.numPlanes||ct.numIntersection!==pe.numIntersection)||ct.vertexAlphas!==wt||ct.vertexTangents!==nt||ct.morphTargets!==lt||ct.morphNormals!==Dt||ct.morphColors!==pn||ct.morphTargetsCount!==mn||ct.numLightProbeGrids!==Ks(S.state.lightProbeGridArray)?zt=!0:(ct.outputColorSpace!==Fe||ct.toneMapping!==sn)&&(ls=!0):(zt=!0,ct.__version=J.version);let Cn=ct.currentProgram;(zt===!0||ls===!0)&&(Cn=ls===!0?Zs(J,V,te,Fe,sn):Ai(J,V,te),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Cn,ct));let Mr=!1,H=!1,Ie=!1,Me=Cn.getUniforms(),Xe=ct.uniforms;if(Ce.useProgram(Cn.program)&&(Mr=!0,H=!0,Ie=!0),J.id!==z&&(z=J.id,H=!0),Mr||X!==T){Ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(L,"projectionMatrix",T.projectionMatrix),Me.setValue(L,"viewMatrix",T.matrixWorldInverse);let Rt=Me.map.cameraPosition;Rt!==void 0&&Rt.setValue(L,re.setFromMatrixPosition(T.matrixWorld)),_t.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Me.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,H=!0,Ie=!0)}if(ct.needsLights&&(En.state.sunShadowMap.length>0&&Me.setValue(L,"sunShadowMap",En.state.sunShadowMap,Be),En.state.directionalShadowMap.length>0&&Me.setValue(L,"directionalShadowMap",En.state.directionalShadowMap,Be),En.state.spotShadowMap.length>0&&Me.setValue(L,"spotShadowMap",En.state.spotShadowMap,Be),En.state.pointShadowMap.length>0&&Me.setValue(L,"pointShadowMap",En.state.pointShadowMap,Be)),te.isSkinnedMesh){Me.setOptional(L,te,"bindMatrix"),Me.setOptional(L,te,"bindMatrixInverse");let st=te.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Me.setValue(L,"boneTexture",st.boneTexture,Be))}te.isBatchedMesh&&(Me.setOptional(L,te,"batchingTexture"),Me.setValue(L,"batchingTexture",te._matricesTexture,Be),Me.setOptional(L,te,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",te._indirectTexture,Be),Me.setOptional(L,te,"batchingColorTexture"),te._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",te._colorsTexture,Be));let et=j.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0)&&ge.update(te,j,Cn),(H||ct.receiveShadow!==te.receiveShadow)&&(ct.receiveShadow=te.receiveShadow,Me.setValue(L,"receiveShadow",te.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Xe.envMapIntensity.value=V.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=NM()),H){if(Me.setValue(L,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&os(Xe,Ie),We&&J.fog===!0&&De.refreshFogUniforms(Xe,We),De.refreshMaterialUniforms(Xe,J,xe,ie,S.state.transmissionRenderTarget[T.id]),ct.needsLights&&ct.numLightProbeGrids>0){let st=y,Rt=0;for(let ri of S.state.lightProbeGridArray)ri.texture!==null&&(st.textures[Rt]=ri.texture,st.min[Rt]=ri.boundingBox.min,st.max[Rt]=ri.boundingBox.max,st.resolution[Rt]=ri.resolution,Rt++);for(let ri in st)st[ri].length=Rt;Xe.probesSH.value=st.textures,Xe.probesMin.value=st.min,Xe.probesMax.value=st.max,Xe.probesResolution.value=st.resolution}Bo.upload(L,Te(ct),Xe,Be)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Bo.upload(L,Te(ct),Xe,Be),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Me.setValue(L,"center",te.center),Me.setValue(L,"modelViewMatrix",te.modelViewMatrix),Me.setValue(L,"normalMatrix",te.normalMatrix),Me.setValue(L,"modelMatrix",te.matrixWorld),J.uniformsGroups!==void 0){let st=J.uniformsGroups;for(let Rt=0,ri=st.length;Rt<ri;Rt++){let vl=st[Rt];it.update(vl,Cn),it.bind(vl,Cn)}}return Cn}function os(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.sunLights.needsUpdate=V,T.sunLightShadows.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function br(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,V,j){let J=fe.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),fe.get(T.texture).__webglTexture=V,fe.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let j=fe.get(T);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,j=0){$=T,Z=V,G=j;let J=null,te=!1,We=!1;if(T){let Fe=fe.get(T);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(L.FRAMEBUFFER,Fe.__webglFramebuffer),se.copy(T.viewport),Se.copy(T.scissor),Oe=T.scissorTest,Ce.viewport(se),Ce.scissor(Se),Ce.setScissorTest(Oe),z=-1;return}else if(Fe.__webglFramebuffer===void 0)Be.setupRenderTarget(T);else if(Fe.__hasExternalTextures)Be.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let wt=T.depthTexture;if(Fe.__boundDepthTexture!==wt){if(wt!==null&&fe.has(wt)&&(T.width!==wt.image.width||T.height!==wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(T)}}let Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(We=!0);let at=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(at[V])?J=at[V][j]:J=at[V],te=!0):T.samples>0&&Be.useMultisampledRTT(T)===!1?J=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(at)?J=at[j]:J=at,se.copy(T.viewport),Se.copy(T.scissor),Oe=T.scissorTest}else se.copy(Ve).multiplyScalar(xe).floor(),Se.copy(me).multiplyScalar(xe).floor(),Oe=Re;if(j!==0&&(J=B),Ce.bindFramebuffer(L.FRAMEBUFFER,J)&&Ce.drawBuffers(T,J),Ce.viewport(se),Ce.scissor(Se),Ce.setScissorTest(Oe),te){let Fe=fe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,j)}else if(We){let Fe=V;for(let Ze=0;Ze<T.textures.length;Ze++){let at=fe.get(T.textures[Ze]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ze,at.__webglTexture,j,Fe)}}else if(T!==null&&j!==0){let Fe=fe.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,j)}z=-1};function as(T){let V=fe.get(T);return(V.__readFormat!==T.format||V.__readType!==T.type)&&(V.__readFormat=T.format,V.__readType=T.type,V.__formatReadable=_t.textureFormatReadable(T.format),V.__typeReadable=_t.textureTypeReadable(T.type)),V}this.readRenderTargetPixels=function(T,V,j,J,te,We,Qe,Fe=0){if(!(T&&T.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ze=Ze[Qe],Array.isArray(Ze)&&(Ze=Ze[0])),Ze){Ce.bindFramebuffer(L.FRAMEBUFFER,Ze);try{let at=T.textures[Fe],wt=at.format,nt=at.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);let lt=as(at);if(lt.__formatReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt.__typeReadable===!1){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-J&&j>=0&&j<=T.height-te&&L.readPixels(V,j,J,te,Pe.convert(wt),Pe.convert(nt),We)}finally{let at=$!==null?fe.get($).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(T,V,j,J,te,We,Qe,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ze=Ze[Qe],Array.isArray(Ze)&&(Ze=Ze[0])),Ze)if(V>=0&&V<=T.width-J&&j>=0&&j<=T.height-te){Ce.bindFramebuffer(L.FRAMEBUFFER,Ze);let at=T.textures[Fe],wt=at.format,nt=at.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe);let lt=as(at);if(lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,We.byteLength,L.STREAM_READ),L.readPixels(V,j,J,te,Pe.convert(wt),Pe.convert(nt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let pn=$!==null?fe.get($).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,pn);let sn=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await a0(L,sn,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,We),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Dt),L.deleteSync(sn),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,j=0){let J=Math.pow(2,-j),te=Math.floor(T.image.width*J),We=Math.floor(T.image.height*J),Qe=V!==null?V.x:0,Fe=V!==null?V.y:0;Be.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Qe,Fe,te,We),Ce.unbindTexture()},this.copyTextureToTexture=function(T,V,j=null,J=null,te=0,We=0){let Qe,Fe,Ze,at,wt,nt,lt,Dt,pn,sn=T.isCompressedTexture?T.mipmaps[We]:T.image;if(j!==null)Qe=j.max.x-j.min.x,Fe=j.max.y-j.min.y,Ze=j.isBox3?j.max.z-j.min.z:1,at=j.min.x,wt=j.min.y,nt=j.isBox3?j.min.z:0;else{let Me=Math.pow(2,-te);Qe=Math.floor(sn.width*Me),Fe=Math.floor(sn.height*Me),T.isDataArrayTexture?Ze=sn.depth:T.isData3DTexture?Ze=Math.floor(sn.depth*Me):Ze=1,at=0,wt=0,nt=0}J!==null?(lt=J.x,Dt=J.y,pn=J.z):(lt=0,Dt=0,pn=0);let Kt=Pe.convert(V.format),mn=Pe.convert(V.type),ct;V.isData3DTexture?(Be.setTexture3D(V,0),ct=L.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Be.setTexture2DArray(V,0),ct=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(V,0),ct=L.TEXTURE_2D),Ce.activeTexture(L.TEXTURE0),Ce.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),Ce.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Ce.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment);let En=Ce.getParameter(L.UNPACK_ROW_LENGTH),zt=Ce.getParameter(L.UNPACK_IMAGE_HEIGHT),ls=Ce.getParameter(L.UNPACK_SKIP_PIXELS),Cn=Ce.getParameter(L.UNPACK_SKIP_ROWS),Mr=Ce.getParameter(L.UNPACK_SKIP_IMAGES);Ce.pixelStorei(L.UNPACK_ROW_LENGTH,sn.width),Ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn.height),Ce.pixelStorei(L.UNPACK_SKIP_PIXELS,at),Ce.pixelStorei(L.UNPACK_SKIP_ROWS,wt),Ce.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);let H=T.isDataArrayTexture||T.isData3DTexture,Ie=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let Me=fe.get(T),Xe=fe.get(V),et=fe.get(Me.__renderTarget),st=fe.get(Xe.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,et.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Rt=0;Rt<Ze;Rt++)H&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,te,nt+Rt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,fe.get(V).__webglTexture,We,pn+Rt)),L.blitFramebuffer(at,wt,at+Qe,wt+Fe,lt,Dt,lt+Qe,Dt+Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(te!==0||T.isRenderTargetTexture||fe.has(T)){let Me=fe.get(T),Xe=fe.get(V);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,I),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Y);for(let et=0;et<Ze;et++)H?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,te,nt+et):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,te),Ie?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,We,pn+et):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,We),te!==0?L.blitFramebuffer(at,wt,at+Qe,wt+Fe,lt,Dt,lt+Qe,Dt+Fe,L.COLOR_BUFFER_BIT,L.NEAREST):Ie?L.copyTexSubImage3D(ct,We,lt,Dt,pn+et,at,wt,Qe,Fe):L.copyTexSubImage2D(ct,We,lt,Dt,at,wt,Qe,Fe);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(ct,We,lt,Dt,pn,Qe,Fe,Ze,Kt,mn,sn.data):V.isCompressedArrayTexture?L.compressedTexSubImage3D(ct,We,lt,Dt,pn,Qe,Fe,Ze,Kt,sn.data):L.texSubImage3D(ct,We,lt,Dt,pn,Qe,Fe,Ze,Kt,mn,sn):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,We,lt,Dt,Qe,Fe,Kt,mn,sn.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,We,lt,Dt,sn.width,sn.height,Kt,sn.data):L.texSubImage2D(L.TEXTURE_2D,We,lt,Dt,Qe,Fe,Kt,mn,sn);Ce.pixelStorei(L.UNPACK_ROW_LENGTH,En),Ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,zt),Ce.pixelStorei(L.UNPACK_SKIP_PIXELS,ls),Ce.pixelStorei(L.UNPACK_SKIP_ROWS,Cn),Ce.pixelStorei(L.UNPACK_SKIP_IMAGES,Mr),We===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&L.generateMipmap(ct),Ce.unbindTexture()},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&Be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Be.setTextureCube(T,0):T.isData3DTexture?Be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Be.setTexture2DArray(T,0):Be.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){Z=0,G=0,$=null,Ce.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}};var K0={type:"change"},Gh={type:"start"},J0={type:"end"},Lu=new Ds,Z0=new ai,OM=Math.cos(70*Eu.DEG2RAD),Dn=new R,pi=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6,Du=class extends Wa{constructor(e,t=null){super(e,t),this.state=$t.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new _n,this._lastTargetPosition=new R,this._quat=new _n().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new No,this._sphericalDelta=new No,this._scale=1,this._panOffset=new R,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new R,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UM.bind(this),this._onPointerDown=FM.bind(this),this._onPointerUp=kM.bind(this),this._onContextMenu=XM.bind(this),this._onMouseWheel=HM.bind(this),this._onKeyDown=GM.bind(this),this._onTouchStart=VM.bind(this),this._onTouchMove=WM.bind(this),this._onMouseDown=BM.bind(this),this._onMouseMove=zM.bind(this),this._interceptControlDown=qM.bind(this),this._interceptControlUp=$M.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=$t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Dn.copy(t).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pi:i>Math.PI&&(i-=pi),s<-Math.PI?s+=pi:s>Math.PI&&(s-=pi),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Dn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lu.origin.copy(this.object.position),Lu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lu.direction))<OM?this.object.lookAt(this.target):(Z0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lu.intersectPlane(Z0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dn.setFromMatrixColumn(t,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,t){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(t,1):(Dn.setFromMatrixColumn(t,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dn.copy(s).sub(this.target);let r=Dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function FM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function UM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(J0),this.state=$t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function BM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=$t.DOLLY;break;case ar.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$t.ROTATE}break;case ar.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Gh)}function zM(n){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function HM(n){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(n.preventDefault(),this.dispatchEvent(Gh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(J0))}function GM(n){this.enabled!==!1&&this._handleKeyDown(n)}function VM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case lr.ROTATE:if(this.enableRotate===!1){this.state=$t.NONE;break}this._handleTouchStartRotate(n),this.state=$t.TOUCH_ROTATE;break;case lr.PAN:if(this.enablePan===!1){this.state=$t.NONE;break}this._handleTouchStartPan(n),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=$t.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Gh)}function WM(n){switch(this._trackPointer(n),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=$t.NONE}}function XM(n){this.enabled!==!1&&n.preventDefault()}function qM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $M(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var il=new R;function Di(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;il.copy(e),il[i]=0,il.normalize();let c=.5*o/(o+a),u=1-il.angleTo(n)/l;return Math.sign(il[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Nu=class n extends Vt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new R,c=new R,u=new R(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new R,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:x.set(1,0,0),p[_+0]=Di(x,c,"z","y",r,i),p[_+1]=1-Di(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[_+0]=1-Di(x,c,"z","y",r,i),p[_+1]=1-Di(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[_+0]=1-Di(x,c,"x","z",r,e),p[_+1]=Di(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),p[_+0]=1-Di(x,c,"x","z",r,e),p[_+1]=1-Di(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),p[_+0]=1-Di(x,c,"x","y",r,e),p[_+1]=1-Di(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[_+0]=Di(x,c,"x","y",r,e),p[_+1]=1-Di(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Q0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ht;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=j0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);let f=j0(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}}return l}function j0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ei(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){let x=u.getComponent(h,f);a.setComponent(h+d,f,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var YM=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function KM(n,e){return YM(n,e)}function kt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=KM(n,e),a=o.getContext("2d"),l=new Aa(o);i&&(l.colorSpace=Xn),l.anisotropy=r,s&&(l.wrapS=Ps,l.wrapT=Ps,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Wt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Ot='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Ut=Math.PI*2,Ni=Math.PI/180,mt=(n,e,t)=>n<e?e:n>t?t:n,Si=(n,e,t)=>n+(e-n)*t,Vh=n=>{let e=mt(n,0,1);return e*e*(3-2*e)},Oi=n=>{let e=mt(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Xt=(n,e,t,i)=>Si(n,e,1-Math.exp(-t*i));function rm(n,e,t){let i=(e-n)%Ut;return i>Math.PI&&(i-=Ut),i<-Math.PI&&(i+=Ut),n+i*t}function Wh(n,e){let t=(e-n)%Ut;return t>Math.PI&&(t-=Ut),t<-Math.PI&&(t+=Ut),t}var em=new St,tm=new _n,nm=new ci,im=new R,sm=new R;function P(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return nm.set(t[0],t[1],t[2]),tm.setFromEuler(nm),im.set(e[0],e[1],e[2]),sm.set(i[0],i[1],i[2]),em.compose(im,tm,sm),n.applyMatrix4(em),n}var je=(n,e,t,i=.02,s=2)=>new Nu(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Ne=(n,e,t)=>new Vt(n,e,t),he=(n,e,t,i=32,s=!1)=>new Yn(n,e,t,i,1,s);var nn=(n,e,t=12,i=48,s=Ut)=>new Ii(n,e,t,i,s),_s=(n,e=48)=>new Ua(n.map(([t,i])=>new ye(t,i)),e);function Go(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Ut;o.push(P(he(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function Xh(n,e,t,i,s=.02){let r=new $i,o=Ut/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,p]=u[d],f=Math.cos(p)*h,x=Math.sin(p)*h;l===0&&d===0?r.moveTo(f,x):r.lineTo(f,x)}}if(r.closePath(),s>0){let l=new Os;l.absarc(0,0,s,0,Ut,!0),r.holes.push(l)}let a=new hs(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function hi(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new R(l[0],l[1],l[2])),r=new Co,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),p=Math.min(t,d.length()/2,h.length()/2),f=c.clone().sub(d.normalize().multiplyScalar(p)),x=c.clone().add(h.normalize().multiplyScalar(p));f.distanceTo(o)>1e-5&&r.add(new Pr(o.clone(),f)),r.add(new Ir(f,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new Pr(o.clone(),c.clone()))}let a=r.getLength();return new ka(r,Math.max(16,Math.round(a*40)),e,i,!1)}var dt=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Qt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Q0(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new ut(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ye(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new ut(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function At(n,e,t){let i=new Qt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Ou=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new R(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new R){let i=mt(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function om(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Lt(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let f=0;f<=a;f++){let x=f/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),_=Math.sin(m),b=n+t*g,y=e-t*_,w=l?-g:g,S=l?_:-_;c.push(b,r,y,b,o,y),u.push(w,0,S,w,0,S),d.push(x,0,x,1)}for(let f=0;f<a;f++){let x=f*2;h.push(x,x+2,x+3,x,x+3,x+1)}let p=new Ht;return p.setAttribute("position",new xt(c,3)),p.setAttribute("normal",new xt(u,3)),p.setAttribute("uv",new xt(d,2)),p.setIndex(h),p}function Ji(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let p=0;p<u;p++){let f=n[p],x=n[(p+1)%c],m=x[0]-f[0],g=x[1]-f[1],_=Math.hypot(m,g);if(_<1e-6)continue;let b=g/_,y=-m/_,w=!1;s&&!s((f[0]+x[0])/2,(f[1]+x[1])/2,b,y)&&(b=-b,y=-y,w=!0);let S=r.length/3;r.push(f[0],e,f[1],f[0],t,f[1],x[0],e,x[1],x[0],t,x[1]);for(let v=0;v<4;v++)o.push(b,0,y);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,w?l.push(S,S+2,S+3,S,S+3,S+1):l.push(S,S+1,S+3,S,S+3,S+2)}let h=new Ht;return h.setAttribute("position",new xt(r,3)),h.setAttribute("normal",new xt(o,3)),h.setAttribute("uv",new xt(a,2)),h.setIndex(l),h}function am(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ZM(){let n=am(7);return kt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function JM(){let n=am(23);return kt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Ut),e.stroke()},{anisotropy:8})}function jM(){return kt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function QM(){return kt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function eS(){return kt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var vn=n=>new Nt(n);function Hs({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=fs,emissive:a=0,emissiveIntensity:l=0}={}){let c=new Nt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Fo,c.blendSrc=cr,c.blendDst=ur,c.blendSrcAlpha=cr,c.blendDstAlpha=ur,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function lm(n="high"){let e={brushed:ZM().tex,wafer:JM().tex,radial:jM().tex,hazard:QM().tex,grille:eS().tex};return{M:{alu:vn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:vn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:vn({color:14936044,metalness:1,roughness:.08}),steel:vn({color:11646654,metalness:1,roughness:.28}),darkSteel:vn({color:6251886,metalness:1,roughness:.34}),brass:vn({color:13876630,metalness:1,roughness:.3}),copper:vn({color:12946278,metalness:1,roughness:.3}),gold:vn({color:15320959,metalness:1,roughness:.22}),white:vn({color:15856630,metalness:0,roughness:.32}),graphite:vn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:vn({color:5073918,metalness:.2,roughness:.35}),orange:vn({color:13137466,metalness:.3,roughness:.36}),rubber:vn({color:1382171,metalness:0,roughness:.8}),plastic:vn({color:2303532,metalness:0,roughness:.45}),ceramic:vn({color:15001579,metalness:0,roughness:.42}),grille:vn({map:e.grille,metalness:.6,roughness:.45}),hazard:vn({map:e.hazard,metalness:.2,roughness:.55}),glass:Hs({color:14674421,opacity:.08,fresnel:.55}),smoke:Hs({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:tn}),fuel:vn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:vn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:vn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:vn({color:13949150,metalness:0,roughness:.25}),wall:vn({color:15133166,metalness:0,roughness:.5}),shadow:new Jt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new Fs({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:vn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function qt(n,e=0){let t=new Ue(n);return new Nt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function sl(n,e=1.25){return new Nt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function Zn(n,e=.55){return new Nt({map:n,metalness:e,roughness:.42})}var zr=Math.PI/180,qe={cx:.5,cz:-1,r:22,h:13.5},Fi={panes:24,finDepth:.36,doorA0:263*zr,doorA1:277*zr,doorH:3.1},hr={a0:236*zr,a1:304*zr,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},Ui={r:22.35,groundY:-420},Vn={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*zr,targetR:17,targetYMin:.4,targetYMax:12},Ct={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Uu=.45,Hr=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],rt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*zr,a1:142*zr,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},qh=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function Vo(n,e,t=0,i=new R){return i.set(qe.cx+e*Math.cos(n),t,qe.cz-e*Math.sin(n))}var $h=Math.PI*2,Fu=(n,e,t)=>Math.min(t,Math.max(e,n)),cm=(n,e)=>{let t=Math.abs(n-e)%$h;return t>Math.PI?$h-t:t};function Yh(n,e){let t=Math.atan2(-(e-qe.cz),n-qe.cx);return t<0?t+$h:t}function fr(n){let e=Vn,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-qe.cx,n.z-qe.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Yh(n.x,n.z);return i<=e.outerR+t?s>=Fi.doorA0+e.edge-t&&s<=Fi.doorA1-e.edge+t&&n.y<=Fi.doorH-.25+t?"door":null:s>=hr.a0+e.edge-t&&s<=hr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function um(n,e,t){let i=n.x-qe.cx,s=n.z-qe.cz,r=Math.hypot(i,s),o=Fu(r,e,t);r>1e-9&&o!==r&&(n.x=qe.cx+i*o/r,n.z=qe.cz+s*o/r)}function dm(n,e,t){let i=Yh(n.x,n.z);if(i>=e&&i<=t)return;let s=cm(i,e)<cm(i,t)?e:t,r=Math.hypot(n.x-qe.cx,n.z-qe.cz);n.x=qe.cx+r*Math.cos(s),n.z=qe.cz-r*Math.sin(s)}function Kh(n,e=null){if(fr(n))return n;let t=Vn,i=e?fr(e):null;if(!i){let s=Math.hypot(n.x-qe.cx,n.z-qe.cz),r=Yh(n.x,n.z);i=s>qe.r&&r>=hr.a0&&r<=hr.a1?"balcony":"hall"}if(i==="door"){if(dm(n,Fi.doorA0+t.edge,Fi.doorA1-t.edge),n.y=Fu(n.y,t.yMin,Fi.doorH-.25),fr(n))return n;i=Math.hypot(e.x-qe.cx,e.z-qe.cz)>qe.r?"balcony":"hall"}return i==="balcony"?(dm(n,hr.a0+t.edge,hr.a1-t.edge),um(n,t.outerR+.001,t.balconyR),n.y=Fu(n.y,t.yMin,t.balconyYMax)):(um(n,0,t.r),n.y=Fu(n.y,t.yMin,t.yMax)),n}function ku(){let n=rt.screenR,e=qh.reduce((i,s)=>i+s.w,0)+rt.gap*(qh.length-1),t=Math.PI/2+e/n/2;return qh.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-rt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:rt.screenY-a/2,y1:rt.screenY+a/2}})}function tS(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function nS(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function iS(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?tS(e,t,n.a,n.b,n.r):nS(e,t,n.c,n.h)}function fm(n,e,t=Hr){let i=1/0;for(let s of t)i=Math.min(i,iS(s,n,e));return i}function pm(n,e){let t=Math.abs(n-Ct.cx)-Ct.hx+Ct.r,i=Math.abs(e-Ct.cz)-Ct.hz+Ct.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Ct.r}var An=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function hm(n){return n.type==="circle"?`length(p - vec2(${An(n.c[0])}, ${An(n.c[1])})) - ${An(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${An(n.a[0])}, ${An(n.a[1])}), vec2(${An(n.b[0])}, ${An(n.b[1])}), ${An(n.r)})`:`lSdBox(p, vec2(${An(n.c[0])}, ${An(n.c[1])}), vec2(${An(n.h[0])}, ${An(n.h[1])}))`}function mm(){let n=Hr.find(t=>t.id==="cell");return`
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
${Hr.map((t,i)=>i===0?`  float d = ${hm(t)};`:`  d = min(d, ${hm(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${An(Ct.cx)}, ${An(Ct.cz)})) - vec2(${An(Ct.hx-Ct.r)}, ${An(Ct.hz-Ct.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${An(Ct.r)};
}
const vec2 HUB_C = vec2(${An(n.c[0])}, ${An(n.c[1])});
const float HUB_R = ${An(n.r)};
`}function gm(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Ct,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,p)=>{let f=Math.max(1,Math.ceil(Math.hypot(h-u,p-d)/n));for(let x=0;x<f;x++)o.push([u+(h-u)*x/f,d+(p-d)*x/f])};for(let u=0;u<4;u++){let[d,h,p]=a[u];for(let w=0;w<l;w++){let S=p+Math.PI/2*w/l;o.push([d+r*Math.cos(S),h+r*Math.sin(S)])}let[f,x,m]=a[(u+1)%4],g=d+r*Math.cos(p+Math.PI/2),_=h+r*Math.sin(p+Math.PI/2),b=f+r*Math.cos(m),y=x+r*Math.sin(m);c(g,_,b,y)}return o}var rl=Math.PI/180;function sS(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function wi(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function xm(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function rS(n,e){return(n/(2*Math.PI)+.5)*e}function ol(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,wi(r,o)),a.addColorStop(.45,wi(r,o*.42)),a.addColorStop(1,wi(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function oS(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,y)=>{y(b-e),y(b),y(b+e)},l=sS(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=rS(Math.atan2(d[2],d[0]),e),p=o(Math.asin(d[1])/rl);if(a(h,b=>{ol(n,b,o(3),100*r,16*r,s.sunGlow,.55),ol(n,b,p,60*r,60*r,s.sunGlow,.42),ol(n,b,p,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>ol(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let y=3+24*Math.pow(l(),1.6),w=l()*e,S=(8+42*l())*r,v=(.35+1.4*l())*r,M=Math.abs(w-h)%e;M=Math.min(M,e-M)/e;let D=Math.max(0,1-M/.28),A=xm(s.cloudDark,s.cloudLit,D),N=s.clouds*(.18+.32*l())*(.6+.4*D);a(w,F=>ol(n,F,o(y),S,v,A,N))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let y=Math.sin(16*rl)+l()*(1-Math.sin(16*rl)),w=Math.asin(y)/rl,S=Math.min(1,Math.max(0,(w-16)/26)),v=s.stars*S*(.25+.7*l()*l());if(v<.03)continue;let M=.7+l()*1.1,D=1/Math.max(.12,Math.cos(w*rl));n.fillStyle=l()<.2?wi("#bcd2ff",v):wi("#ffffff",v),n.fillRect(l()*e,o(w),M*D,M)}let f=s.far,x=xm(f.body,f.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,w=o(y),S=o(-2.5);if(n.fillStyle=x,n.fillRect(m,w,b,S-w),y>2.1&&l()<.6&&n.fillRect(m+b/2-.5,w-3-l()*5,1,4+l()*5),f.windows>0){let v=Math.floor((S-w)*b*.05*f.windows);for(let M=0;M<v;M++){let D=l(),A=D<.62?"#ffc078":D<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=wi(A,(.25+.4*l())*Math.min(1,f.windows*1.4)),n.fillRect(m+Math.floor(l()*b),w+Math.floor(l()*(S-w)),1,1)}}f.neon>0&&l()<.04&&(n.fillStyle=wi(l()<.7?"#46e6ff":"#ffb347",.45*f.neon),n.fillRect(m,w-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,wi(f.haze,0)),g.addColorStop(.45,wi(f.haze,.38)),g.addColorStop(1,wi(f.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let y=0;y<b;y++){let w=Math.pow(l(),1.3),S=-.3-3.9*w,v=l(),M=v<.6?"#ffb46a":v<.82?"#ffe2b0":v<.93?"#ffffff":"#55dcff";n.fillStyle=wi(M,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*w)),n.fillRect(l()*e,o(S),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,wi(s.groundHaze,.1)),_.addColorStop(1,wi(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var aS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,lS=`
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
`;function cS(n,e){let t=new Cr;t.background=new Ue(n.clear);let i=new ut(new Hn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Jt({side:tn,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let p=new ut(u,d);return p.position.set(h[0],h[1],h[2]),t.add(p),p},a=qe.cx,l=qe.cz;o(new yn(6.4,qe.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,qe.h,l]),o(new Ii(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,qe.h-.25,l]),o(new Pn(qe.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new yn(qe.r-.6,qe.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,qe.h-.55,l]),o(Lt(a,l,qe.r-.6,0,Math.PI*2,qe.h-.55,qe.h,64,!0),r(s.column,.85)),o(Lt(a,l,rt.r,rt.a0,rt.a1,rt.bandY0,rt.bandY1,32,!0),r(s.media,1)),o(Lt(a,l,rt.r,rt.a0,rt.a1,rt.bandY1,rt.top,32,!0),r(s.column,.85)),o(Lt(a,l,rt.r-.3,rt.a0,rt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of ku())o(Lt(a,l,rt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function uS(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function _m(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=kt(i,s,null,{anisotropy:1});r.tex.wrapS=Ps,r.tex.generateMipmaps=!1,r.tex.minFilter=xn,r.tex.magFilter=xn;let o=new en({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new Ue(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:aS,fragmentShader:lS,side:Kn,depthTest:!1,depthWrite:!1,fog:!1}),a=new ut(new Hn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=cS(c,o),p=new zo(n),f=p.fromScene(h,.035,.1,400,{size:256,position:new R(qe.cx,1.6,qe.cz)});p.dispose(),uS(h,o),l&&l.dispose(),l=f}function d(h){c=h,r.redraw((p,f,x)=>oS(p,f,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var rn=1,dS=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,hS=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,fS=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,pS=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function ym(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new qn(16,16,{type:di,generateMipmaps:!0,minFilter:Yi,magFilter:xn,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new St},uReflStrength:{value:t},uReflBlur:{value:i}},o=new Bn;o.layers.set(0);let a=new R(0,1,0),l=new R(0,0,0),c=new R,u=new St,d=new R,h=new R,p=new R,f=new ai,x=new an,m=new an,g=new ye,_=0;function b(w){w.uniforms.tReflect=r.tReflect,w.uniforms.uReflMatrix=r.uReflMatrix,w.uniforms.uReflStrength=r.uReflStrength,w.uniforms.uReflBlur=r.uReflBlur,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${dS}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${hS}`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${fS}`).replace("#include <opaque_fragment>",`${pS}
#include <opaque_fragment>`)}function y(w,S){if(!n)return!1;n.getDrawingBufferSize(g);let v=Math.max(16,Math.round(g.x*e)),M=Math.max(16,Math.round(g.y*e));if((s.width!==v||s.height!==M)&&s.setSize(v,M),c.setFromMatrixPosition(S.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(S.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),p.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(p),o.far=S.far,o.updateMatrixWorld(),o.projectionMatrix.copy(S.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let D=r.uReflMatrix.value;D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(o.projectionMatrix),D.multiply(o.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(a,l),f.applyMatrix4(o.matrixWorldInverse),x.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let A=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+A[8])/A[0],m.y=(Math.sign(x.y)+A[9])/A[5],m.z=-1,m.w=(1+A[10])/A[14],x.multiplyScalar(2/x.dot(m)),A[2]=x.x,A[6]=x.y,A[10]=x.z+1-_,A[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let N=n.getRenderTarget(),F=n.autoClear,B=n.shadowMap.autoUpdate,I=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(w,o),n.autoClear=F,n.shadowMap.autoUpdate=B,n.shadowMap.needsUpdate=I,n.setRenderTarget(N),!0}return{uniforms:r,inject:b,update:y,setStrength(w){r.uReflStrength.value=w},dispose(){s.dispose()}}}var mi=Math.PI*2,jh=mm();function Bu(n,e,t){let i=new Jt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var Qh=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function bm(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function mS(n){let e=new Nt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{bm(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Qh}
${jh}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function gS(n){let e=new Nt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{bm(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Qh}
${jh}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var xS=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,_S=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${Qh}
${jh}
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
}`,yS=`
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
}`,vS=`
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
}`;function bS(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(mi*o/t));for(let l=0;l<a;l++){let c=l/a*mi;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,p=n.r+e,f=Math.max(16,Math.ceil(Math.PI*p/t)),x=(g,_)=>{for(let b=0;b<=f;b++){let y=_-Math.PI*b/f;i.push([g[0]+p*(Math.cos(y)*c+Math.sin(y)*d),g[1]+p*(Math.cos(y)*u+Math.sin(y)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,_)=>{let b=mt(((g-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function Zh(n,e,t,i){let{pts:s,center:r}=bS(n,e);return Ji(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function vm(n,e){let t=Ct.hx-Ct.r,i=Ct.hz-Ct.r;return n.map(([s,r])=>{let o=Ct.cx+mt(s-Ct.cx,-t,t),a=Ct.cz+mt(r-Ct.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var Jh=(n,e,t,i)=>(Ct.cx-n)*t+(Ct.cz-e)*i>0;function MS(n){let e=Hr.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function SS(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of Hr)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Ct.cx-Ct.hx),e=Math.min(e,Ct.cx+Ct.hx),t=Math.max(t,Ct.cz-Ct.hz),i=Math.min(i,Ct.cz+Ct.hz),{x0:n,x1:e,z0:t,z1:i}}function wS(n,e,t,i=6){let s=new R().subVectors(e,n),r=s.length(),o=new Yn(t,t,r,i,1,!0);return o.applyQuaternion(new _n().setFromUnitVectors(new R(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function ES({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=qe,l=hr,c=l.a1-l.a0,u=(M,D)=>[r+D*Math.cos(M),o-D*Math.sin(M)],d=new ut(P(new yn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(rn),n.add("white",P(new yn(a+.2,Ui.r,160,1,l.a1,mi-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Lt(r,o,Ui.r,l.a1,l.a0+mi,-.45,0,160,!1)),e.add("glowCyan",Lt(r,o,Ui.r+.004,l.a1,l.a0+mi,-.24,-.21,160,!1)),e.add("white",Lt(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Lt(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Lt(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let M of[l.a0,l.a1])e.add("white",P(Ne(l.r1-Ui.r,l.slab,.04),s(M,(Ui.r+l.r1)/2,-l.slab/2),[0,M,0]));let h=l.r1-.06,p=a+.05,f=[];for(let M=0;M<=4;M++)f.push(u(l.a0,p+(h-p)*M/4));let x=Math.ceil(c*h/.45);for(let M=1;M<=x;M++)f.push(u(l.a0+c*M/x,h));for(let M=3;M>=0;M--)f.push(u(l.a1,p+(h-p)*M/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(M,D,A,N)=>(m[0]-M)*A+(m[1]-D)*N>0,_=(M,D,A,N)=>!g(M,D,A,N);t.add("rail",Ji(f,.045,l.rail)),n.add("chrome",hi(f.map(([M,D])=>[M,l.rail+.026,D]),.026,.1,8)),n.add("silver",Ji(f,0,.045,{facing:_})),n.add("glowCyan",Ji(f,0,.04,{facing:g}));for(let M=0;M<f.length;M+=5)n.add("chrome",P(he(.018,.018,l.rail,8),[f[M][0],l.rail/2,f[M][1]]));let b=l.canopyY,y=a+.02,w=l.r1+.35;n.add("white",P(new yn(y,w,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",P(new yn(y,w,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",P(new yn(w-.13,w-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Lt(r,o,w,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Lt(r,o,w-.002,l.a0,l.a1,b,b+.14,72,!0));for(let M of[l.a0,l.a1])n.add("silver",P(Ne(w-y,.14,.04),s(M,(y+w)/2,b+.07),[0,M,0]));for(let[M,D]of[[23.3,17],[25.2,19]])for(let A=0;A<D;A++){let N=l.a0+(A+.5)*c/D;n.add("glowWhite",P(new Pn(.085,16),s(N,M,b-.003),[Math.PI/2,0,0])),n.add("chrome",P(new yn(.085,.11,16,1),s(N,M,b-.002),[Math.PI/2,0,0]))}let S=new R,v=new R;for(let M=0;M<6;M++){let D=l.a0+(M+.5)*c/6;Vo(D,w-.15,b+.14,S),Vo(D,a+.03,b+3.4,v),n.add("silver",wS(S,v,.014)),n.add("chrome",P(he(.05,.05,.03,14),v.toArray(),[0,D,Math.PI/2]))}for(let M of[250,290]){let D=M*Math.PI/180;n.add("white",P(je(.5,.34,2.4,.05,3),s(D,23.4,.27),[0,D,0])),n.add("dark",P(Ne(.32,.1,2.1),s(D,23.4,.05),[0,D,0])),n.add("glowCyan",P(Ne(.33,.012,2.11),s(D,23.4,.094),[0,D,0]))}return{floor:d}}function Mm(n,{reflection:e=null}={}){let t=new Qt;t.name="atrium";let{cx:i,cz:s,r,h:o}=qe,a={white:new Nt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new Nt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new Nt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new Nt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new Nt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Bu(4641535,3,"atrium-glow-cyan"),glowBlue:Bu(5213695,2.2,"atrium-glow-blue"),glowWhite:Bu(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Bu(16777215,5,"atrium-ring-light"),u=Hs({color:13623538,opacity:.045,fresnel:.5,side:tn}),d=Hs({color:14083830,opacity:.1,fresnel:.6,side:tn}),h=Hs({color:14214901,opacity:.08,fresnel:.5,side:tn}),p=Hs({color:13623538,opacity:.04,fresnel:.4}),f=new dt,x=new dt,m=new dt,g=new R,_=(_e,fe,Be)=>Vo(_e,fe,Be,g).toArray(),{doorA0:b,doorA1:y,doorH:w}=Fi,S=w+.12,v=mi/Fi.panes,M=.006/r,D=_e=>_e>b+1e-6&&_e<y-1e-6;for(let _e=0;_e<Fi.panes;_e++){let fe=_e*v+M,Be=(_e+1)*v-M,C=[fe];for(let E of[b,y])E>fe&&E<Be&&C.push(E);C.push(Be);for(let E=0;E+1<C.length;E++){let q=C[E],be=C[E+1],ue=D((q+be)/2)?S:.05,De=Math.max(2,Math.ceil((be-q)/v*16));m.add("glass",Lt(i,s,r,q,be,ue,o,De,!0))}}let A=Fi.finDepth,N=o-.55,F=r-A/2-.004;for(let _e=0;_e<Fi.panes;_e++){let fe=_e*v;if(!D(fe)){m.add("fin",P(Ne(A,N,.022),_(fe,F,N/2),[0,fe,0])),f.add("silver",P(Ne(A+.04,.06,.05),_(fe,F,.03),[0,fe,0])),f.add("silver",P(Ne(A+.04,.06,.05),_(fe,F,N-.03),[0,fe,0]));for(let Be of[1.1,4.7,8.3,11.9]){f.add("chrome",P(Ne(.025,.09,.17),_(fe,r-.0175,Be),[0,fe,0])),f.add("chrome",P(Ne(.09,.09,.045),_(fe,r-.075,Be),[0,fe,0]));for(let C of[-1,1])f.add("chrome",P(he(.022,.022,.018,14),_(fe+C*(.055/r),r-.039,Be),[0,fe,Math.PI/2]))}}}let B=o-.55;f.add("white",Lt(i,s,r-.6,0,mi,B,o,160,!0)),f.add("satin",P(new yn(r-.6,r-.01,160,1),[i,B,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new yn(r-.16,r-.1,160,1),[i,B-.004,s],[Math.PI/2,0,0])),f.add("glowCyan",Lt(i,s,r-.605,0,mi,B+.02,B+.05,160,!0));let I=y,Y=mi-(y-b);f.add("glowCyan",P(new yn(r-.17,r-.13,160,1,I,Y),[i,.003,s],[-Math.PI/2,0,0])),f.add("silver",Lt(i,s,r-.03,I,I+Y,0,.05,160,!0));for(let _e of[b,y])f.add("silver",P(Ne(.14,S,.06),_(_e,r-.03,S/2),[0,_e,0]));let Z=y-b;f.add("silver",Lt(i,s,r-.06,b,y,w,S,16,!0)),f.add("silver",Lt(i,s,r+.04,b,y,w,S,16,!1)),f.add("silver",P(new yn(r-.06,r+.04,16,1,-y,Z),[i,w,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new yn(r-.025,r+.005,16,1,-y,Z),[i,w-.002,s],[Math.PI/2,0,0])),f.add("silver",P(new yn(r-.22,r+.24,16,1,b,Z),[i,.003,s],[-Math.PI/2,0,0]));let G=Z/2,$=r-.09;for(let[_e,fe,Be]of[[b-G,b,.9],[y,y+G,.1]]){m.add("fin",Lt(i,s,$,_e+.03/$,fe-.03/$,.06,w-.06,12,!0)),f.add("silver",Lt(i,s,$-.02,_e,fe,0,.06,12,!0)),f.add("silver",Lt(i,s,$-.02,_e,fe,w-.06,w,12,!0));for(let C of[_e,fe])f.add("silver",P(Ne(.05,w,.05),_(C,$,w/2),[0,C,0]));f.add("chrome",P(he(.012,.012,1.1,8),_(_e+(fe-_e)*Be,$-.05,1.05)))}f.add("silver",Lt(i,s,$-.035,b-G,y+G,w,w+.08,24,!0)),f.add("ceiling",P(new yn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let _e=0;_e<16;_e++){let fe=_e/16*mi,Be=(r+6.4)/2;f.add("white",P(Ne(r-6.4,.34,.3),[i+Be*Math.cos(fe),o-.17,s-Be*Math.sin(fe)],[0,fe,0]))}for(let _e of[9,16.5])f.add("white",Lt(i,s,_e,0,mi,o-.34,o,160,!0)),f.add("white",Lt(i,s,_e+.3,0,mi,o-.34,o,160,!1)),f.add("white",P(new yn(_e,_e+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let _e of[11.15,11.85])f.add("satin",Lt(i,s,_e,0,mi,o-.24,o,160,!0)),f.add("satin",Lt(i,s,_e,0,mi,o-.24,o,160,!1));let z=new ut(P(nn(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);z.name="ring-light",z.position.set(i,o-.15,s),t.add(z),f.add("chrome",P(nn(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let _e=0;_e<4;_e++)f.add("silver",P(Ne(12.8,.12,.12),[i,o+.03,s],[0,_e*Math.PI/4,0]));let X=new ut(P(new Pn(6.4,96),[0,0,0],[Math.PI/2,0,0]),p);X.name="skylight",X.position.set(i,o+.06,s),t.add(X);let{a0:se,a1:Se}=rt,Oe=rt.moduleR-.36;f.add("dark",Lt(i,s,rt.r,se,Se,rt.bandY0,rt.bandY1,72,!0)),f.add("white",Lt(i,s,rt.r,se,Se,rt.bandY1,rt.top,72,!0)),f.add("white",Lt(i,s,rt.r,se,Se,2.3,rt.bandY0,72,!0)),f.add("satin",Lt(i,s,rt.r,se,Se,0,2.3,72,!0)),f.add("white",Lt(i,s,rt.back,se,Se,0,rt.top,72,!1)),f.add("white",P(new yn(rt.r,rt.back,72,1,se,Se-se),[i,rt.top,s],[-Math.PI/2,0,0])),f.add("white",P(new yn(Oe,rt.r,72,1,se,Se-se),[i,2.3,s],[-Math.PI/2,0,0])),f.add("white",Lt(i,s,Oe,se,Se,2.22,2.3,72,!0)),f.add("glowBlue",Lt(i,s,Oe-.004,se,Se,2.245,2.265,72,!0)),f.add("glowCyan",Lt(i,s,rt.r-.012,se,Se,7.1,7.14,72,!0)),f.add("glowCyan",Lt(i,s,rt.r-.012,se,Se,2.64,2.68,72,!0));let Q=rt.back-Oe+.04,ve=(rt.back+Oe)/2;for(let[_e,fe]of[[se-.07/ve,-1],[Se+.07/ve,1]]){f.add("white",P(Ne(Q,rt.top,.14),[i+ve*Math.cos(_e),rt.top/2,s-ve*Math.sin(_e)],[0,_e,0]));let Be=_e-fe*(.075/Oe);f.add("glowCyan",P(Ne(.04,rt.top-.4,.03),[i+(Oe+.02)*Math.cos(Be),rt.top/2,s-(Oe+.02)*Math.sin(Be)],[0,_e,0]))}let Ee=24,ie=new $n(new Vt(.62,2.22,.78),a.white,Ee);ie.name="compute-modules";let xe=new ye(.7,2.08),Le=new vt(xe.x,xe.y),ht=new en({name:"module-doors",vertexShader:yS,fragmentShader:vS,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:xe}}}),Ve=new $n(Le,ht,Ee);Ve.name="module-doors";let me=new Float32Array(Ee),Re=new cn;for(let _e=0;_e<Ee;_e++){let fe=se+(_e+.5)*(Se-se)/Ee;Vo(fe,rt.moduleR,1.11,Re.position),Re.rotation.set(0,fe,0),Re.updateMatrix(),ie.setMatrixAt(_e,Re.matrix),Vo(fe,rt.moduleR-.316,1.11,Re.position),Re.rotation.set(0,fe-Math.PI/2,0),Re.updateMatrix(),Ve.setMatrixAt(_e,Re.matrix),me[_e]=_e*7.31+3.7,f.add("chrome",P(Ne(.66,.03,.82),[Re.position.x,.015,Re.position.z],[0,fe,0]))}Le.setAttribute("aSeed",new ti(me,1)),ie.instanceMatrix.needsUpdate=!0,Ve.instanceMatrix.needsUpdate=!0,ie.computeBoundingSphere(),Ve.computeBoundingSphere(),ie.receiveShadow=!0,t.add(ie,Ve);let oe=mS(e),U=new ut(P(new Pn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),oe);U.name="atrium-floor",U.position.set(i,0,s),U.receiveShadow=!0,U.layers.set(rn);let W=ES({kit:f,low:x,glassKit:m,floorMat:oe,at:_});t.add(W.floor);let ne=SS(),K=new ut(P(new vt(ne.x1-ne.x0,ne.z1-ne.z0),[0,0,0],[-Math.PI/2,0,0]),gS(e));K.name="island-tops",K.position.set((ne.x0+ne.x1)/2,0,(ne.z0+ne.z1)/2),K.receiveShadow=!0,K.layers.set(rn),t.add(U,K);for(let _e of Hr)x.add("satin",Zh(_e,0,-Uu,0)),x.add("silver",Zh(_e,.004,-.045,-.001)),x.add("glowCyan",Zh(_e,.006,-Uu,-Uu+.05));let re=gm(.5);x.add("satin",Ji(re,-Ct.depth,0,{closed:!0,facing:Jh}));let we=vm(re,.012);x.add("glowCyan",Ji(we,-.17,-.13,{closed:!0,facing:Jh})),x.add("glowBlue",Ji(we,-Ct.depth+.1,-Ct.depth+.14,{closed:!0,facing:Jh}));let O=new en({name:"data-pool",vertexShader:xS,fragmentShader:_S,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),ee=new ut(P(new vt(Ct.hx*2,Ct.hz*2),[0,0,0],[-Math.PI/2,0,0]),O);ee.name="data-pool",ee.position.set(Ct.cx,-Ct.depth,Ct.cz),ee.layers.set(rn),t.add(ee);let ae=vm(re,-.06),L=[];for(let _e of MS(ae)){L.push(Ji(_e,.035,1)),f.add("chrome",hi(_e.map(([fe,Be])=>[fe,1.01,Be]),.022,.08,8)),f.add("glowCyan",Ji(_e,0,.035)),f.add("glowCyan",Ji(_e.slice().reverse(),0,.035));for(let fe=0;fe<_e.length;fe+=5)f.add("chrome",P(he(.018,.018,1,8),[_e[fe][0],.5,_e[fe][1]]))}if(L.length){let _e=new dt;for(let Be of L)_e.add("glass",Be);let fe=_e.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(fe)}let Ke=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Ke.traverse(_e=>{_e.isMesh&&(_e.renderOrder=2)}),t.add(Ke);let ot=f.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(ot);let _t=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});_t.traverse(_e=>_e.layers.set(rn)),t.add(_t);let Ce=.3;return{root:t,reflectors:[U,K,W.floor],bounds:ne,update(_e,fe,Be={}){let C=mt(Be.activity||0,0,1);Ce+=(.3+.7*C-Ce)*Math.min(1,_e*2),O.uniforms.uTravel.value=(O.uniforms.uTravel.value+_e*(.25+1.4*C))%1e3,O.uniforms.uFlow.value=Ce,ht.uniforms.uTime.value=fe,ht.uniforms.uActivity.value=Ce},setLook(_e){let fe=_e.glow==null?1:_e.glow;for(let Be of l)Be.color.setHex(Be.userData.glow.hex).multiplyScalar(Be.userData.glow.k*fe);c.color.set(_e.interior.ring).multiplyScalar(_e.interior.ringPower),a.ceiling.emissiveIntensity=_e.id==="day"?.16:.22,O.uniforms.uGlow.value=fe}}}var Gs=Ui.groundY,Vs={pitch:96,rot:18*Math.PI/180},ef=Math.cos(Vs.rot),tf=Math.sin(Vs.rot),Sm=13*289,al=2400;function pr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function wm(n,e,t=[0,0]){return t[0]=qe.cx+ef*n+tf*e,t[1]=qe.cz-tf*n+ef*e,t}function nf(n,e,t=[0,0]){return t[0]=qe.cx+e*Math.cos(n),t[1]=qe.cz-e*Math.sin(n),t}function Em(){return{uHaze:{value:new Ue(2902638)},uHazeHigh:{value:new Ue(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new ye(qe.cx,qe.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new Ue(16777215)},uSunK:{value:.2},uSkyRefl:{value:new Ue(3103372)}}}function ji(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var Qi=["uHaze","uHazeHigh","uHazeDensity"],es=`
#define GROUND_Y (${Gs.toFixed(1)})
#define GRID_P ${Vs.pitch.toFixed(1)}
#define GRID_C ${ef.toFixed(7)}
#define GRID_S ${tf.toFixed(7)}
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
`;var TS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,AS=`
${es}
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
`,RS=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,CS=`
${es}
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
#define TOWER_R ${Ui.r.toFixed(3)}

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
`;function Tm(n,{quality:e="high"}={}){let t=ji(n,[...Qi,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new Ue(461846)},uStreet:{value:new Ue(16752714)},uAvenue:{value:new Ue(4641535)},uRoof:{value:new Ue(1712690)},uPark:{value:new Ue(463887)}}),i=new en({name:"city-ground",vertexShader:TS,fragmentShader:AS,uniforms:t}),s=e==="low"?4200:6e3,r=new Pn(s,96).rotateX(-Math.PI/2),o=new ut(r,i);return o.name="city-ground",o.position.set(qe.cx,Gs,qe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(rn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function Am(n){let e=ji(n,[...Qi,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new Ue(1778996)},uGlassC:{value:new Ue(660516)},uSpine:{value:new Ue(4641535)}}),t=new en({name:"city-host-facade",vertexShader:RS,fragmentShader:CS,uniforms:e}),i=-.45,s=i-Gs,r=new Yn(Ui.r,Ui.r,s,128,1,!0),o=new ut(r,t);return o.name="city-host-facade",o.position.set(qe.cx,(i+Gs)/2,qe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(rn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var PS=`
${es}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${al.toFixed(1)}

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
`,IS=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function Rm(n,{quality:e="high"}={}){let t=pr(91),i=Vs.pitch,s=e==="low"?2:1,r=[];for(let p=-20;p<=20;p+=4){let f=(p+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:f-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:f+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let p of[-16,-12,12,16]){let f=(p+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:f,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let p of r){let f=Math.floor(2*al/p.spacing);for(let x=0;x<f;x++){o.push(p.axis,p.coord,p.y,p.speed);let m=t(),g=p.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/f,7+t()*8,t(),g)}}let l=o.length/4,c=new vt(1,1),u=new Va;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new ti(new Float32Array(o),4)),u.setAttribute("aCar",new ti(new Float32Array(a),4)),u.instanceCount=l;let d=new en({name:"city-traffic",vertexShader:PS,fragmentShader:IS,uniforms:ji(n,[...Qi,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:Gn,side:tn}),h=new ut(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(rn),{mesh:h,count:l}}var Lm=Math.PI/180,sf=Vs.pitch,LS=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],DS=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],NS={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},OS=`
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
`,FS=`
${es}
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
`;function US(n,e){return Math.hypot(n-qe.cx,e-qe.cz)}function kS(n,e){let t=pr(17),i=n==="low"?1500:2600,s=Math.ceil(i/sf)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=LS.map(c=>{let[u,d]=nf(c.a*Lm,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let p=c*sf+d,f=u*sf+h,x=Math.hypot(p,f);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,_=12+t()*20,b=(t()-.5)*Math.max(0,37-g),y=(t()-.5)*Math.max(0,37-_);wm(p+b,f+y,a);let w=a[0],S=a[1];if(e.some(I=>Math.hypot(I.x-w,I.z-S)<I.rad))continue;let v=mt((x-120)/650,0,1),M=22+Math.pow(t(),2.2)*(70+250*v),D=0;for(let I of o)D=Math.max(D,Math.exp(-((w-I.x)**2+(S-I.z)**2)/I.r2));M+=D*(140+220*t());let A=Math.min(Gs+M,D>.3?60:-40),N=t(),F=D>.3?N<.3?0:N<.45?1:N<.6?2:3:N<.35?0:N<.6?1:N<.9?2:3,B=0;Math.min(g,_)>=22&&t()<.18&&(B|=1),t()<.45&&(B|=2),t()<.35&&(B|=8),l.push({x:w,z:S,w:g,d:_,base:Gs-20,top:A,rot:Vs.rot,seed:t(),style:F,flags:B})}return l}function BS(n){let e=pr(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function zS(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*Lm,[d,h]=nf(u,c.r),p=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):Vs.rot,f={x:d,z:h,w:c.w,d:c.d,base:Gs-20,top:c.top,rot:p,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(f),f};for(let c of DS){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(NS);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function Cm(n,e,t){let i=new Vt(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new $n(i,e,s),l=new cn;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new ti(r,3)),i.setAttribute("aInfo",new ti(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var HS=`
${es}
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
`,GS=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function VS(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function WS(n,e,t,i){let s=pr(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,p]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...VS(d,h*d.w/2.15,p*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new Ht;l.setAttribute("position",new xt(r,3)),l.setAttribute("aSeed",new ei(a,1));let c=new en({name:"city-beacons",vertexShader:HS,fragmentShader:GS,uniforms:ji(n,[...Qi,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:Gn}),u=new Ea(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(rn),{points:u,count:o}}var zu=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],XS=6,qS=`
${es}
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
`,$S=`
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
`;function YS(){return{atlas:kt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),zu.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Wt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function KS(n,e){let t=pr(53),i=[],s=n.filter(o=>{let a=US(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*zu.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[qe.cx-o.x,qe.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?XS:Math.floor(t()*zu.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function ZS(n,e,t){let{atlas:i,cols:s,rows:r}=YS(),o=pr(61),a=KS(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new vt(1,1),h=new en({name:"city-signs",vertexShader:qS,fragmentShader:$S,uniforms:ji(n,[...Qi,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:Gn,side:tn}),p=new $n(d,h,l);p.name="city-signs";let f=new cn,x=new Ue;return a.forEach((m,g)=>{f.position.set(m.pos[0],m.pos[1],m.pos[2]),f.rotation.set(0,0,0),f.lookAt(qe.cx,m.tilt?0:m.pos[1],qe.cz),f.scale.set(m.w,m.w/4,1),f.updateMatrix(),p.setMatrixAt(g,f.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],g*4),x.set(zu[_][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new ti(c,4)),d.setAttribute("aTint",new ti(u,4)),p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!1,p.layers.set(rn),{mesh:p,count:l}}var Pm={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function Im(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Wt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Wt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Wt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Wt}`,n.fillText(Pm[i.phase]||Pm.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Ot}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Wt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let p=(c-l)/a.length;a.forEach((f,x)=>{let m=(u-d)*f/h;n.fillRect(l+x*p+2,u-m,Math.max(2,p-4),m)})}function JS(n){let i=new Array(40).fill(0),s=kt(1024,Math.round(1024*40/96),(x,m,g)=>Im(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new Jt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Qt;o.name="city-billboard";let a=new ut(new vt(96,40),r);o.add(a);let l=new ut(new Vt(98,42,1.2),new Jt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new Jt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new ut(new Vt(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",p=1,f=0;return{group:o,update(x,m){f+=x,f>=1&&(f=0,i.shift(),i.push(m.tps||0)),p+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;p<1||g===h||(p=0,h=g,s.redraw((_,b,y)=>Im(_,b,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var jS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,QS=`
${es}
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
`;function Wo(n,e,t,i=!1){return new en({name:i?"city-glow-add":"city-glow",vertexShader:jS,fragmentShader:QS,defines:i?{ADDITIVE:""}:{},uniforms:ji(n,Qi,{uColor:{value:new Ue(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?Gn:ps})}var ew=`
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
`,tw=`
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
`,nw=`
${es}
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
`,iw=`
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
`;function Dm(n,e,t=16){return new Yn(e,n,1,t,1,!0).translate(0,.5,0)}function sw(n,e,t){let i=new Qt;i.name="compute-tower";let s=Wo(n,4646655,4),r=Wo(n,10480383,5),o=Wo(n,5078015,4),a=Wo(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(S,v,M,D)=>{let A=new ut(new Ii(S,v,10,160),D);return A.rotation.x=Math.PI/2,A.position.set(e.x,M,e.z),i.add(A),A};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new ut(new Yn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let p=new ye(t.x-e.x,t.z-e.z).normalize(),f=new R(e.x+p.x*(c+2),100,e.z+p.y*(c+2)),x=new ut(new Hn(4,20,14),r);x.position.copy(f),i.add(x);let m=new R().subVectors(f,t),g=m.length(),_=new _n().setFromUnitVectors(new R(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new Ue(6282495)}};for(let[S,v,M]of[[.07,2,1],[.38,8,0]]){let D=new en({name:M?"beam-core":"beam-glow",vertexShader:ew,fragmentShader:tw,uniforms:{...b,uCore:{value:M}},transparent:!0,depthWrite:!1,blending:Gn,side:tn}),A=new ut(Dm(S,v,16),D);A.position.copy(t),A.quaternion.copy(_),A.scale.set(1,g,1),A.frustumCulled=!1,A.renderOrder=3,i.add(A)}let y=new Jt({name:"beam-receiver"});y.color.setHex(6282495).multiplyScalar(4);let w=new ut(new Ii(.5,.05,8,48),y);return w.rotation.x=Math.PI/2,w.position.copy(t),i.add(w),i.traverse(S=>{S.isMesh&&S.renderOrder===0&&(S.renderOrder=5)}),{group:i,setLook(S){s.uniforms.uGain.value=4*(.35+.65*S.neon),r.uniforms.uGain.value=5*(.4+.6*S.neon),o.uniforms.uGain.value=4*(.35+.65*S.neon),a.uniforms.uColor.value.set(S.body)},update(S,v,M){b.uIntensity.value=Math.max(.08,v)*M,x.scale.setScalar(.6+v*.8),w.scale.setScalar(.8+v*.6+Math.sin(S*6)*.05*v),d.rotation.z=S*.12},glows:l}}function rw(n,e){let t=new Qt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new Ue(8378623)}};for(let[h,p]of[[5,1],[20,0]]){let f=new en({name:p?"tether-core":"tether-glow",vertexShader:nw,fragmentShader:iw,uniforms:ji(n,Qi,{...r,uCore:{value:p}}),transparent:!0,depthWrite:!1,blending:Gn,side:tn}),x=new ut(Dm(1,1,14),f);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new ut(new Ii(a,1.6,8,192),Wo(n,4646655,3.2,!0)),c=new ut(new Ii(a*.8,1.1,8,160),Wo(n,5078015,3,!0)),u=new Qt,d=new Qt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function Nm({quality:n="high",beamTarget:e=new R(-8,3,-.7)}={}){let t=new Qt;t.name="city";let i=Em(),s=zS(),r=s.towers.filter(D=>D.mega).map(D=>({x:D.x,z:D.z,rad:Math.max(D.w,D.d)*.75+30})),o=kS(n,r),a=BS(o),l=ji(i,[...Qi,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new Ue(725538)},uGlass:{value:new Ue(462106)}}),c=new en({name:"city-towers",vertexShader:OS,fragmentShader:FS,uniforms:l}),u=Cm(o.concat(a),c,"city-towers");u.layers.set(rn);let d=Cm(s.towers,c,"city-megatowers"),h=WS(i,o,a,s),p=Tm(i,{quality:n}),f=Am(i),x=Rm(i,{quality:n}),m=ZS(i,o,s),g=JS(s.billboard),_=sw(i,s.compute,e),b=rw(i,s);t.add(p.mesh,f.mesh,u,d,h.points,x.mesh,m.mesh,g.group,_.group,b.group);let y=0,w=0,S=0,v=1,M=1;return{root:t,update(D,A,N={}){let F=mt(N.activity||0,0,1);y+=(F-y)*Math.min(1,D*1.5);let B=.5+1.5*y;w=(w+D*B)%Sm,S=(S+D*B)%(2*al),i.uTime.value=A,i.uTravel.value=w,i.uAir.value=S,i.uDensity.value=(.3+.7*y)*v,_.update(A,y,M),b.update(A),g.update(D,N)},setLook(D){let A=D.city;i.uHaze.value.set(A.haze),i.uHazeHigh.value.set(A.hazeHigh),i.uHazeDensity.value=A.hazeDensity,i.uSkyRefl.value.set(A.skyRefl),i.uWindows.value=A.windows,i.uNeon.value=A.neon,i.uLights.value=A.lights,i.uBeacons.value=A.beacons,i.uTraffic.value=A.traffic,i.uSunK.value=A.sunK,i.uSunDir.value.fromArray(D.sun.dir).normalize(),i.uSunColor.value.set(D.sun.color),l.uBody.value.set(A.body),l.uGlass.value.set(A.glass),p.setLook(A),f.setLook(A),_.setLook(A),b.setLook(A),v=A.trafficScale??1,M=.45+.55*A.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var Om=724504;var ow={low:0,medium:1024,high:2048,ultra:4096};function aw(n,e){let t=ow[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Gr=new R,Hu=new R,Gu=new Us;function lw(n,e,t,i=4.6){Hu.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Hu).addScaledVector(e,60),n.target.position.copy(Hu),n.updateMatrixWorld(),n.target.updateMatrixWorld(),Gu.position.copy(n.position),Gu.lookAt(Hu),Gu.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let p of[t.z0,t.z1])Gr.set(d,h,p).applyMatrix4(Gu.matrixWorldInverse),s=Math.min(s,Gr.x),r=Math.max(r,Gr.x),o=Math.min(o,Gr.y),a=Math.max(a,Gr.y),l=Math.min(l,-Gr.z),c=Math.max(c,-Gr.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function Jn(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ye(new vt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(rn),o}function Fm(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Qt;a.name="stage";let l=_m(i,s,{quality:t});a.add(l.dome);let c=Mm(n,{reflection:r});a.add(c.root);let u=Nm({quality:t,beamTarget:o});a.add(u.root);let d=new Lo(16777215,3);d.name="sun",a.add(d,d.target);let h=new Ha(16777215,8947848,1);h.name="sky-light";let p=new Lo(16777215,.5);p.name="fill",a.add(h,p,p.target),aw(d,t);let f=new R;function x(m){l.setLook(m),f.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,lw(d,f,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,p.color.set(m.fill.color),p.intensity=m.fill.intensity,p.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),p.target.position.set(0,0,-1),p.updateMatrixWorld(),p.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,_){c.update(m,g,_),u.update(m,g,_)},setLook:x,dispose(){l.dispose()}}}var Um=Math.PI/180;function km(n,e){let t=n*Um,i=e*Um;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function Bm(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var Vr=["dusk","day"],mr="dusk",ln={min:.6,max:1.6,step:.05,initial:1},zm={dusk:{id:"dusk",clear:858675,sun:{dir:km(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:Bm([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:km(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:Bm([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function rf(n){return zm[n]||zm[mr]}function Hm(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function ll(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function cl({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return kt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,p=d%5===0,[f,x]=u(h,p?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=p?5:2,r.beginPath(),r.moveTo(f,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Wt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[p,f]=u(h/(t.length-1),136);r.fillText(d,p,f)}),r.font=`700 34px ${Wt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Wt}`,r.fillText(e,a,a+130)})}function of(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(Ut*e)));return kt(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Ot}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function Ws(n,e,t,i="#4d6bfe"){return kt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,Hm(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,Hm(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Ot}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",ll(s,n,r-170,46,700,Wt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",ll(s,e.toUpperCase(),r-170,24,600,Wt),s.fillText(e.toUpperCase(),152,100)})}function Vu(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return kt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",ll(o,n,t-20,Math.round(i*.42),700,Wt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",ll(o,e,t-20,Math.round(i*.26),600,Wt),o.fillText(e,12,i*.76))})}function Wu(n,e,{bg:t="#05070a",glow:i=0}={}){let s=kt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Ot:Wt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;ll(a,c.text,n-32,u,c.weight||600,c.mono?Ot:Wt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function Gm(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=kt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Ot}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function Vm(){return kt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Wt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function Wm(){return kt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Wt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var dn=new R(-8,0,-.7),Wr=.41,Xm=1.9,af=1.86;function cw(){return kt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function qm(n){let e=At("fuel"),t=At("tank",[dn.x,0,dn.z]);t.userData.solid="tank",e.add(t),e.add(Jn(n,2.6,2.6,[dn.x,0,dn.z],.6));let i=new dt;i.add("graphite",P(je(1.8,.28,1.8,.05),[0,.2,0]));for(let[F,B]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",P(he(.07,.08,.06,20),[F,.03,B]));for(let F of[.375,2.345])i.add("steel",P(he(.83,.83,.07,72),[0,F,0])),i.add("chrome",Go(18,.775,F+(F<1?.04:-.04),.017,.016)),i.add("rubber",P(he(.712,.712,.03,64),[0,F+(F<1?.05:-.05),0]));i.add("alu",_s([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let F=0;F<6;F++){let B=F/6*Ut+.26,I=Math.cos(B)*.79,Y=Math.sin(B)*.79;i.add("chrome",P(he(.016,.016,2.04,12),[I,1.36,Y]));for(let Z of[.33,2.4])i.add("steel",P(he(.03,.03,.03,6),[I,Z,Y]))}i.add("steel",P(he(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",P(he(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",P(je(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",P(he(.07,.08,.05,24),[0,2.695,0])),i.add("steel",P(he(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",P(he(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",P(je(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ye(he(.7,.7,Xm,72,!0),n.glass,[0,Wr+Xm/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ye(he(.685,.685,1,72),n.fuel,[0,Wr+.5,0],null,null,{cast:!1}),o=Ye(new Pn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ye(nn(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new $n(new Hn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(F,B)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Ut,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Ut+B}));t.add(c);let d=Ye(new vt(.085,af),Zn(Vm().tex,.1),[0,Wr+.02+af/2,.892],null,null,{cast:!1}),h=Ye(new ir(.02,.05,3),qt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let p=qt(4054148,2.5),f=Ye(new Hn(.07,24,12,0,Ut,0,Math.PI/2),p,[0,2.72,0],null,null,{cast:!1});t.add(f);let x=At("fuel-hmi",[dn.x+.95,0,dn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new dt;m.add("graphite",P(je(.36,.04,.3,.015),[0,.02,0])),m.add("alu",P(he(.035,.035,.95,16),[0,.5,0])),m.add("graphite",P(je(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Wu(640,384,{bg:"#04070c"}),_=Ye(new vt(.66,.396),sl(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(_),e.add(x),e.add(Jn(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new dt,y=(F,B)=>new R(F,B,dn.z);b.add("steel",hi([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),b.add("steel",hi([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),b.add("steel",P(he(.1,.1,.025,24),[-6.93,.375,dn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(F=>P(he(.012,.012,.09,6),[-6.925,.375+Math.cos(F)*.075,dn.z+Math.sin(F)*.075],[0,0,Math.PI/2]))),b.add("blue",P(he(.085,.085,.18,24),[-6.6,.375,dn.z],[0,0,Math.PI/2])),b.add("chrome",P(he(.022,.022,.26,12),[-6.6,.52,dn.z])),b.add("steel",P(he(.045,.05,.1,16),[-6.6,.47,dn.z])),b.add("orange",P(nn(.11,.012,8,40),[-6.6,.64,dn.z],[Math.PI/2,0,0]));for(let F=0;F<3;F++)b.add("orange",P(new Vt(.21,.014,.014),[-6.6,.64,dn.z],[0,F/3*Math.PI,0]));for(let F of[.945,1.355])b.add("alu",P(he(.085,.085,.05,32),[-6.05,F,dn.z]));b.add("chrome",...[0,1,2,3].map(F=>P(he(.008,.008,.41,6),[-6.05+Math.cos(F*1.5708+.78)*.078,1.15,dn.z+Math.sin(F*1.5708+.78)*.078])));for(let F of[-6.8,-6.25])b.add("graphite",P(je(.12,.33,.16,.015),[F,.165,dn.z]));b.add("steel",P(je(.22,.09,.22,.02),[-4.75,2.1,dn.z])),b.add("chrome",Go(4,.12,2.15,.012,.012,.78).map(F=>F.translate(-4.75,0,dn.z))),e.add(b.build(n,{name:"feed"}));let w=Ye(he(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,dn.z],null,null,{cast:!1,receive:!1}),S=cw().tex,v=new Nt({color:330264,emissive:16777215,emissiveMap:S,emissiveIntensity:1.8,roughness:.3}),M=Ye(he(.034,.034,.36,24,!0),v,[-6.05,1.15,dn.z],null,null,{cast:!1});e.add(w,M);let D=.5,A="",N=new cn;return{root:e,anchors:{tank:new R(dn.x,2.9,dn.z),hmi:new R(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(F){let B=JSON.stringify(F);B!==A&&(A=B,g.set(F))},update(F,B,I){D=Xt(D,mt(I.level,.02,1),2.5,F);let Y=D*af;r.scale.y=Y,r.position.y=Wr+.012+Y/2,o.position.y=a.position.y=Wr+.012+Y+.001,h.position.y=Wr+.02+Y;let Z=mt(I.flow,0,1);for(let G=0;G<l;G++){let $=u[G];$.y+=F*(.05+Z*.32)*$.v/Math.max(.25,Y),$.y>1&&($.y=0,$.a=Math.random()*Ut,$.r=Math.sqrt(Math.random())*.6);let z=Math.sin(B*3+$.w)*.01;N.position.set(Math.cos($.a)*$.r+z,Wr+.03+$.y*Math.max(0,Y-.04),Math.sin($.a)*$.r),N.scale.setScalar($.s*(.3+.7*Math.min(1,(Y-$.y*Y)*10+.3))),N.updateMatrix(),c.setMatrixAt(G,N.matrix)}c.instanceMatrix.needsUpdate=!0,S.offset.y-=F*(.15+Z*2.6),v.emissiveIntensity=.5+Z*2.2,p.emissive.setHex(I.peak?16753978:4054148),p.emissiveIntensity=1.6+Math.sin(B*2.2)*.6}}}var Xu=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],ii={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},on={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"}},Xo=new Set(["engraver","labeler"]),uw=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function Ym(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of uw)if(i.test(e))return t;return"generic"}function Km(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function cf(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function ul(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function dl(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=dl(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function Zm(n,e){let t=Km(e),i=dl(t,["file_path","path","filePath","files"]);if(i)return ul(cf(i)||i);let s=dl(t,["command","cmd","script","code"]);if(s)return ul(s.split(`
`).find(a=>a.trim())||s);let r=dl(t,["url"]);if(r)try{return ul(new URL(r).host||r)}catch{return ul(r)}let o=dl(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?ul(o):""}function lf(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function $m(n,e){let t=lf(n),i=lf(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function Jm(n,e){let t=String(n||"").toLowerCase(),i=Km(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:lf(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=$m(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=$m(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var gr=new R(-4,0,-.7),qo=new R(-2.08,0,1.54),jm=1.45;function Qm(n,e,t,i,s,r=.02,o=0){let a=new $i,l=(u,d,h,p,f,x)=>{u.moveTo(d+x,h),u.lineTo(d+p-x,h),u.quadraticCurveTo(d+p,h,d+p,h+x),u.lineTo(d+p,h+f-x),u.quadraticCurveTo(d+p,h+f,d+p-x,h+f),u.lineTo(d+x,h+f),u.quadraticCurveTo(d,h+f,d,h+f-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new Os;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new hs(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function eg(n,e,{x:t,y:i,r:s,face:r}){let o=new dt;o.add("chrome",P(nn(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",P(he(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new Nt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ye(new Pn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=At("needle",[t,i,.02]),c=new dt;return c.add("orange",new Vt(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new Vt(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",he(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ye(new Pn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function tg(n){let e=At("engine"),t=At("engine-body",[gr.x,0,gr.z]);t.userData.solid="engine",e.add(t),e.add(Jn(n,4.8,2.7,[gr.x+.35,0,gr.z],.62));let i=new dt;i.add("graphite",P(je(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",P(je(3.94,.04,1.94,.015),[.35,.44,0]));for(let re of[-1.45,2.15])for(let we of[-.8,.8])i.add("rubber",P(he(.08,.09,.06,20),[re,.03,we]));for(let re of[-.72,.62])i.add("graphite",P(je(.22,.56,1,.03),[re,.72,0])),i.add("steel",P(je(.26,.04,1.04,.01),[re,.47,0])),i.add("chrome",...[-.4,.4].map(we=>P(he(.02,.02,.03,6),[re,.5,we])));i.add("graphite",P(je(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let re of[1.435,2.165])i.add("graphite",P(je(.07,1.62,.82,.02),[re,1.24,-.1]));for(let re of[.46,2.02])i.add("graphite",P(je(.78,.06,.82,.02),[1.8,re,-.1]));i.add("aluDark",Qm(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",P(new vt(.5,.18),[1.8,.6,.335])),i.add("chrome",P(he(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",P(he(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",P(he(.05,.065,.12,20),[.8,2.12,0]));for(let re=0;re<4;re++)i.add("chrome",P(nn(.034,.007,8,24),[.8,2.2+re*.03,0],[Math.PI/2,0,0]));i.add("orange",P(he(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",P(he(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",P(he(.05,.056,.03,20),[2,2.73,-.36]));for(let re of[.12,.28])i.add("rubber",hi([[re,.95,.42],[re,.62,.86],[re,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=At("turbine",[0,jm,0],[0,0,-Math.PI/2]);t.add(s);let r=new dt;r.add("alu",_s([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",P(he(.6,.6,.56,64),[0,-.72,0]));for(let re=0;re<9;re++)r.add("alu",P(he(.665,.665,.022,64),[0,-.97+re*.06,0]));r.add("steel",P(he(.69,.69,.05,72),[0,-.445,0])),r.add("steel",P(he(.69,.69,.05,72),[0,.405,0])),r.add("chrome",Go(20,.66,-.413,.016,.014)),r.add("chrome",Go(20,.66,.373,.016,.014,.157)),r.add("alu",P(he(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",_s([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",P(he(.06,.06,.26,24),[0,1.33,0])),r.add("grille",P(he(.6,.6,.012,64),[0,-1.2,0]));for(let re of[.22,.37,.52])r.add("chrome",P(nn(re,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let re=0;re<6;re++)r.add("chrome",P(new Vt(1.18,.012,.028),[0,-1.205,0],[0,re/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=At("rotor"),a=new dt;a.add("darkSteel",P(he(.24,.24,.8,48),[0,-.02,0]));for(let[re,we,O,ee]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let ae=0;ae<re;ae++){let L=je(.32,ee,.014,.004,1);L.rotateX(O),L.translate(.41,we,0),L.rotateY(ae/re*Ut),a.add("chrome",L)}a.add("chrome",_s([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=qt(5078015,1),c=[-.33,-.02,.29].map(re=>P(he(.247,.247,.026,48,!0),[0,re,0])),u=new dt().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ye(he(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=Ws(on.engine.zh,on.engine.en,on.engine.code);t.add(Ye(new vt(.5,.14),Zn(h.tex,.35),[.76,jm+.05,.628],null,null,{cast:!1}));let p=Ye(Xh(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),f=Ye(Xh(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*Ni,m=-4*Ni;t.add(p,f),t.add(Ye(new vt(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let _=[16726832,16753183,3461498,5078015].map((re,we)=>{let O=qt(re,.15);return t.add(Ye(he(.055,.055,.085,24),O,[2,2.66-we*.09,-.36],null,null,{cast:!1})),O}),b=At("console",[-.35,0,1.22]);t.add(b);let y=new dt;y.add("graphite",P(je(2.2,.82,.46,.03),[0,.41,0])),y.add("rubber",P(je(2.16,.06,.4,.02),[0,.03,.01])),b.add(y.build(n,{name:"console"}));let w=Ws(on.console.zh,on.console.en,on.console.code);b.add(Ye(new vt(.72,.2),Zn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let S=At("panel",[0,.98,.02],[-.62,0,0]);b.add(S);let v=new dt;v.add("aluDark",P(je(2.24,.62,.06,.02),[0,0,-.03])),v.add("graphite",Qm(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),S.add(v.build(n,{name:"panel"}));let M=eg(n,S,{x:-.74,y:0,r:.205,face:cl({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),D=eg(n,S,{x:.86,y:.08,r:.13,face:cl({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),A=.028,N=.04,F=he(A,A,N,24).rotateZ(-Math.PI/2),B=of(N,A),I=of(N,A,{inverted:!0}),Y=re=>new Nt({map:re.tex,emissive:16777215,emissiveMap:re.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),Z=[.19,.095,0,-.095,-.19],G=[],$=new $n(F,Y(B),36),z=new $n(F,Y(I),2);$.castShadow=z.castShadow=!1;let X=0;for(let re=0;re<4;re++)for(let we=0;we<8;we++)G.push({inst:$,index:X++,x:.16+.163-we*.044,y:Z[re],row:re,power:we});for(let re=0;re<6;re++){let we=re<2;G.push({inst:we?z:$,index:we?re:X++,x:.16+.163-re*.044-(we?0:.03),y:Z[4],row:4,power:re})}S.add($,z),S.add(Ye(new Pn(.006,12),qt(15855592,.6),[.16+.163-2*.044+.022-.015,Z[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([re,we],O)=>{let ee=Vu(re,we,{w:256,h:80}).tex;S.add(Ye(new vt(.2,.0625),Zn(ee,.2),[.16-.29,Z[O],.012],null,null,{cast:!1}))}),S.add(Ye(new vt(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let Oe=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([re,we],O)=>{let ee=.66+O*.13,ae=new dt().add("chrome",P(he(.032,.032,.014,24),[ee,-.17,.007],[Math.PI/2,0,0]));S.add(ae.build(n,{name:"lamp",castShadow:!1}));let L=qt(we,.15);S.add(Ye(new Hn(.024,20,10,0,Ut,0,Math.PI/2),L,[ee,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Ke=Vu(re,"",{w:128,h:48}).tex;return S.add(Ye(new vt(.1,.0375),Zn(Ke,.2),[ee,-.235,.004],null,null,{cast:!1})),L}),Q=[];for(let re=0;re<24;re++){let we=new ds({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),O=new Ls(we);O.visible=!1,t.add(O),Q.push({sp:O,mat:we,life:0,vx:0,vz:0})}let ve=0,Ee=At("dispenser",[qo.x,0,qo.z]);Ee.userData.solid="dispenser",e.add(Ee);let ie=new dt;ie.add("white",P(je(.5,1.2,.56,.03),[0,.6,0])),ie.add("plastic",P(Ne(.02,.05,.36),[.252,.922,0])),ie.add("aluDark",P(je(.54,.05,.6,.015),[0,1.225,0])),ie.add("grille",P(new vt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),Ee.add(ie.build(n,{name:"dispenser"}));let xe=Vu(on.dispenser.zh,`${on.dispenser.en} · ${on.dispenser.code}`.toUpperCase(),{w:256,h:80});Ee.add(Ye(new vt(.34,.106),Zn(xe.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let Le=qt(5078015,.3);Ee.add(Ye(new Vt(.012,.012,.3),Le,[.256,.97,0],null,null,{cast:!1})),e.add(Jn(n,.9,.9,[qo.x,0,qo.z],.5));let ht=new dt().add("rubber",hi([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(ht.build(n,{name:"conduit"}));let Ve=new Jt({visible:!1}),me=(re,we,O,ee)=>{let ae=new ut(new Vt(we[0],we[1],we[2]),Ve);return ae.position.set(O[0],O[1],O[2]),ae.userData.hoverId=re,ee.add(ae),{id:re,object:ae}},Re={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},oe=new St,U=new Float32Array(8),W=new Ue,ne={reasoning:new Ue(10185727),generating:new Ue(4160511),tool:new Ue(16753183),idle:new Ue(2838456)};function K(re,we,O){let ee=Math.max(0,we);for(let ae=0;ae<O;ae++){let L=Math.pow(10,ae),Ke=Math.floor(ee/L)%10,ot=ee%L,_t=0;ae===0?_t=ee-Math.floor(ee):ot>L-1&&(_t=ot-(L-1)),U[ae]=-((Ke+_t+.5)/10)*Ut}for(let ae of G)ae.row===re&&(oe.makeRotationX(U[ae.power]),oe.setPosition(ae.x,ae.y,.03),ae.inst.setMatrixAt(ae.index,oe))}return{root:e,anchors:{engine:new R(gr.x,2.5,gr.z),console:new R(gr.x-.35,1.45,gr.z+1.22),dispenser:new R(qo.x,1.45,qo.z)},hover:[me("engine",[3.2,1.7,1.5],[.2,1.45,0],t),me("console",[2.3,1.35,.8],[-.35,.68,1.22],t),me("dispenser",[.6,1.3,.62],[0,.65,0],Ee)],pulseDispenser(){Re.dispPulse=1},update(re,we,O){let ee=O.phase,ae=ee==="generating"||ee==="reasoning",L=.35+mt(O.tps,0,140)*.16+(ee==="thinking"?.8:0);Re.rotorSpeed=Xt(Re.rotorSpeed,L,1.4,re),Re.rotorAngle+=Re.rotorSpeed*re,o.rotation.y=Re.rotorAngle,p.rotation.z=x+Re.rotorAngle*.45,f.rotation.z=m-Re.rotorAngle*.9;let Ke=ne[ee]||ne.idle;W.copy(l.emissive).lerp(Ke,1-Math.exp(-4*re)),l.emissive.copy(W);let ot=.85+.15*Math.sin(we*9),_t=ae?(2.4+mt(O.tps,0,120)/30)*ot:ee==="tool"?.9:ee==="thinking"?1.3:.45;l.emissiveIntensity=Xt(l.emissiveIntensity,_t,5,re),Re.ctx=Xt(Re.ctx,mt(O.ctx,0,1),2.5,re);let Ce=ae?Math.sin(we*41)*.006:0;M.rotation.z=(135-270*Re.ctx)*Ni+Ce,Re.tach=Xt(Re.tach,mt(O.tps/120,0,1),3,re),D.rotation.z=(135-270*Re.tach)*Ni+Ce*2;let _e=[O.counters.miss,O.counters.hit,O.counters.output,O.counters.reasoning,O.counters.cost*100];for(let q=0;q<5;q++){let be=_e[q]||0,ue=Re.disp[q];be<ue||be-ue<.02?ue=be:ue=Xt(ue,be,3.2,re),Re.disp[q]=ue,K(q,ue,q===4?6:8)}$.instanceMatrix.needsUpdate=!0,z.instanceMatrix.needsUpdate=!0;let fe=[ee==="reasoning"||ee==="thinking",ee==="generating",ee==="tool",ee==="idle"];Oe.forEach((q,be)=>{q.emissiveIntensity=Xt(q.emissiveIntensity,fe[be]?3.2:.12,10,re)}),Re.err=Math.max(0,Re.err-re*.5),O.errorPulse&&(Re.err=1);let Be=Math.sin(we*12)>0?1:.2,C=[Re.err>0?3.5*Be:.1,ee==="tool"?3:.1,ae||ee==="thinking"?3:.6,ee==="reasoning"?3:.1];_.forEach((q,be)=>{q.emissiveIntensity=Xt(q.emissiveIntensity,C[be],12,re)}),Re.dispPulse=Math.max(0,Re.dispPulse-re*2.5),Le.emissiveIntensity=.3+Re.dispPulse*4;let E=mt((Re.ctx-.78)/.22,0,1);ve+=re*E*18;for(let q of Q)if(q.life<=0&&ve>=1&&(ve-=1,q.life=1,q.vx=(Math.random()-.5)*.15,q.vz=(Math.random()-.5)*.15,q.sp.position.set(.8,2.36,0),q.sp.visible=!0),q.life>0){q.life-=re/1.7;let be=1-q.life;q.sp.position.x+=q.vx*re,q.sp.position.z+=q.vz*re,q.sp.position.y+=re*(.55-be*.25),q.sp.scale.setScalar(.08+be*.55),q.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,be*1.2))*.32),q.life<=0&&(q.sp.visible=!1)}ve>4&&(ve=4)}}}var ns=new R(2.6,0,-1),Yo=3.1,is=2.35,$r=.75,bn=.922,hl=.012,Xr=1,$o=1,ng=.4,qr=235*Ni,Ko=305*Ni,ts=1.54;function ki(n,e,t=0,i=new R){return i.set(ns.x+e*Math.cos(n),t,ns.z-e*Math.sin(n))}var lg=n=>Math.atan2(-Math.cos(n),Math.sin(n));function qu(n){let e=At("pedestal"),t=new dt;t.add("graphite",P(he(.15,.17,.04,40),[0,.02,0])),t.add("alu",P(he(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",P(he(.12,.1,.03,48),[0,.835,0])),t.add("chrome",P(nn(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Ut+.3;t.add("ceramic",P(he(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=qt(5078015,.25);return e.add(Ye(nn(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var Nn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},ig={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},sg={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function cg(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function dw(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=cg(n,o,a),u=Math.PI/2-l,d=new $i;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new hs(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function rg(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=cg(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return P(Ne(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function hw(){let n=new $i,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new hs(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,Nn.forkY+.002,0),t}function fw(){let n=kt(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new Nt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function pw(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function mw(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function gw(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function xw(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),gw(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Wt}`,n.fillStyle="#86a7c9",n.fillText(`${on.robot.code} · ${on.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${Ot}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Wt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${Ot}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${Ot}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Ut),n.fill(),n.font=`600 23px ${Wt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function _w(n){let e=At("robot",[ns.x,0,ns.z]),t=qt(4641535,2.2),i=qt(4641535,1.8),s=qt(5078015,1.4),r={...n,carbon:fw(),led:t},o=new dt;o.add("white",_s([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",P(he(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",P(he(1.15,1.15,Nn.deckY-.4,112),[0,(.4+Nn.deckY)/2,0])),o.add("plastic",P(he(.62,.62,.006,72),[0,Nn.deckY+.003,0])),o.add("chrome",P(nn(.62,.005,8,112),[0,Nn.deckY+.003,0],[Math.PI/2,0,0]));for(let z=0;z<12;z++){let X=z/12*Ut+.13;o.add("chrome",P(he(.016,.016,.006,10),[Math.cos(X)*.92,Nn.deckY+.003,Math.sin(X)*.92]))}let a=Nn.drumTop-Nn.deckY;o.add("white",P(he(.34,.37,a,72),[0,Nn.deckY+a/2,0])),o.add("chrome",P(nn(.342,.006,8,72),[0,Nn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",hi([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new dt;l.add("led",P(nn(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",P(he(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Ye(nn(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=kt(1024,48,mw,{anisotropy:8}),u=new Jt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Ye(he(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=Hs({color:726566,opacity:.4,fresnel:.55}),p=Ye(he(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});p.renderOrder=2,e.add(d,p);let f=kt(512,176,null,{anisotropy:8}),x=new Jt({map:f.tex,transparent:!0,depthWrite:!1,side:tn,name:"robot-holo"});x.color.setScalar(1.25);let m=Ye(new vt(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=At("arm");e.add(g),g.add(new dt().add("steel",P(he(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let _=kt(512,64,pw,{anisotropy:8,repeat:[1,1]}),b=z=>new Nt({map:z,emissiveMap:z,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=_.tex,w=_.tex.clone();function S(z,X,se,Se){let Oe=At(z),Q=X.y+X.h,ve=new dt;ve.add("white",dw(se,X.r1,X.r2,X.y,X.h,X.bevel)),ve.add("chrome",P(je(.66,.004,X.r2*.95,.002),[.5,Q+.0015,0]));for(let xe of[-1,1])ve.add("graphite",rg(.66,.026,.004,se/2,X.y+X.h/2,X,se,xe,5e-4));Se(ve,Q),Oe.add(ve.build(r,{name:z}));let Ee=new vt(.62,X.r2*.95-.022);Ee.rotateX(-Math.PI/2),Oe.add(Ye(Ee,b(X===Nn.link1?y:w),[.5,Q+.004,0],null,null,{cast:!1}));let ie=new dt;for(let xe of[-1,1])ie.add("led",rg(.6,.009,.005,se/2,X.y+X.h/2,X,se,xe,.0022));return Oe.add(ie.build({led:i},{name:`${z}-strips`,castShadow:!1})),Oe}let v=Nn.link1,M=S("link1",v,Xr,(z,X)=>{z.add("alu",P(he(.118,.124,.012,56),[0,X+.006,0])),z.add("chrome",P(he(.034,.034,.008,24),[0,X+.016,0])),z.add("alu",P(he(.1,.104,.012,56),[Xr,X+.006,0])),z.add("graphite",P(he(.11,.11,.01,48),[Xr,v.y-.005,0])),z.add("led",P(nn(.127,.0045,6,72),[0,X+.003,0],[Math.PI/2,0,0])),z.add("led",P(nn(.107,.004,6,64),[Xr,X+.003,0],[Math.PI/2,0,0]))});g.add(M);let D=Nn.link2,A=S("link2",D,$o,(z,X)=>{z.add("alu",P(he(.086,.09,.01,48),[0,X+.005,0])),z.add("chrome",P(he(.028,.028,.007,20),[0,X+.0135,0])),z.add("white",P(he(.07,.078,Nn.forkY-.01-X,48),[$o,(X+Nn.forkY-.01)/2,0])),z.add("led",P(nn(.093,.0035,6,56),[0,X+.003,0],[Math.PI/2,0,0])),z.add("led",P(nn(.079,.0035,6,56),[$o,X+.012,0],[Math.PI/2,0,0]))});A.position.x=Xr,M.add(A);let N=At("fork",[$o,0,0]);A.add(N);let F=new dt;F.add("alu",P(he(.064,.064,.01,48),[0,Nn.forkY-.005,0])),F.add("carbon",hw()),F.add("graphite",P(je(.06,.016,.07,.005),[.07,Nn.forkY+.02,0]));for(let z of[.31,.5])for(let X of[-.075,.075])F.add("rubber",P(he(.011,.011,.002,14),[z,Nn.forkY+.013,X]));N.add(F.build(r,{name:"fork",castShadow:!0}));let B=qt(4641535,.8);N.add(Ye(Ne(.004,.006,.044),B,[.1015,Nn.forkY+.02,0],null,null,{cast:!1}));let I={yaw:270*Ni,reach:$r,lift:0},Y=new R;function Z(){let z=mt(I.reach-ng,.02,Xr+$o-1e-4),X=Math.acos(z/(Xr+$o));M.rotation.y=I.yaw+X,A.rotation.y=-2*X,N.rotation.y=X,g.position.y=I.lift,d.rotation.y=M.rotation.y,y.offset.x=-2*X*.08,w.offset.x=X*.065}Z();let G="";function $(z="idle",X=null,se=null,Se=null){let Oe=`${z}|${X}|${se}|${Se}`;if(Oe===G)return;G=Oe;let Q=ig[z]||ig.idle,ve=Se?sg[Se]||sg.normal:null,Ee=ve&&ve.color?ve.color:Q.color;i.color.setHex(Ee).multiplyScalar(.25),i.emissive.setHex(Ee),f.redraw((ie,xe,Le)=>xw(ie,xe,Le,{st:Q,carry:ve,from:X,to:se}))}return $(),{root:e,pose:I,setPose(z,X,se){I.yaw=z,I.reach=X,I.lift=se,Z()},carryPoint(z=Y){return e.updateMatrixWorld(!0),z.set(ng,0,0),N.localToWorld(z),z.y=.921+I.lift,z},setBusy(z){B.emissiveIntensity=z?3:.8,s.emissiveIntensity=z?2.4:1.4,i.emissiveIntensity=z?2.6:1.8},setStatus:$,parts:{arm:g,link1:M,link2:A,fork:N},hover:{id:"robot",object:e}}}function og(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=At(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new dt;l.add("white",P(je(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",P(je(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",P(je(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",P(Ne(.04,.3,.04),[m,1,g]));l.add("aluDark",P(Ne(.84,.03,.04),[0,1.15,.4]),P(Ne(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",P(Ne(.04,.03,.84),[.4,1.15,0]),P(Ne(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",P(he(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Ut;l.add("ceramic",P(he(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",P(Ne(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",P(Ne(.5,.2,.05),[o,.95,-.42])),l.add("steel",P(he(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",P(he(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[P(new vt(.76,.27),[0,1,.4]),P(new vt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),P(new vt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new dt().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ye(je(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ye(je(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let p=Ws(i,s,r);a.add(Ye(new vt(.56,.158),Zn(p.tex,.35),[0,.62,.402],null,null,{cast:!1}));let f=qt(3461498,.6);a.add(Ye(Ne(.6,.016,.01),f,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:f,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function ag(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",P(je(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",P(Ne(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Ne(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),p=t.x+r*h,f=t.z+o*h;e.add("aluDark",P(Ne(.05,.84,.05),[p,.43,f],[0,l,0])),e.add("graphite",P(Ne(.16,.02,.16),[p,.01,f],[0,l,0]))}return{len:a,yaw:l,mid:c}}function ug(n){let e=At("cell"),t=_w(n);e.add(t.root),e.add(Jn(n,2.9,2.9,[ns.x,0,ns.z],.6));let i=ki(qr,Yo),s=ki(Ko,Yo),r=og(n,{center:i,side:-1,...on.lock,hubDoorX:.18}),o=og(n,{center:s,side:1,...on.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(Jn(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(Jn(n,1.3,1.3,[s.x,0,s.z],.5));let a=ki(qr,is,bn),l=ki(Ko,is,bn),c=qu(n);c.root.position.set(a.x,0,a.z);let u=qu(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new dt,h=new R(-1.83,0,ts),p=new R(i.x-.42,0,ts),f=new R(s.x+.42,0,ts),x=new R(7.18,0,ts);ag(n,d,h,p),ag(n,d,f,x);let m=(w,S)=>{let v=S.x-w.x,M=S.z-w.z,D=Math.hypot(v,M);d.add("aluDark",P(je(D,.02,.2,.006),[(w.x+S.x)/2,.892,(w.z+S.z)/2],[0,Math.atan2(-M,v),0]))};m(new R(i.x+.18,0,i.z-.44),new R(a.x-.06,0,a.z+.1)),m(new R(s.x-.18,0,s.z-.44),new R(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=qt(5078015,1.2),_=[];for(let[w,S]of[[h,p],[f,x]]){let v=S.x-w.x;_.push(P(Ne(v,.008,.008),[(w.x+S.x)/2,.858,ts+.185]))}e.add(new dt().add("led",_).build({led:g},{name:"track-led",castShadow:!1})),e.add(Jn(n,p.x-h.x+.4,.7,[(h.x+p.x)/2,0,ts],.4)),e.add(Jn(n,x.x-f.x+.4,.7,[(f.x+x.x)/2,0,ts],.4));let b=new Jt({visible:!1}),y=(w,S)=>{let v=new ut(new Vt(.9,1.25,.9),b);return v.position.set(S.x,.62,S.z),v.userData.hoverId=w,e.add(v),{id:w,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new R(-1.95,bn,ts),lockCenter:new R(i.x,bn,i.z),lockPort:a,outPort:l,outCenter:new R(s.x,bn,s.z),trackEnd:new R(x.x-.08,bn,ts)},trackLed:g,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new R(ns.x,1.4,ns.z),lock:new R(i.x,1.45,i.z),unload:new R(s.x,1.45,s.z)}}}var hf=n=>(200-n*24.4)*Ni,Gt=Yo-is,ft=.89,yw={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},vw={archive:[.46,.17],press:[-.44,.17]},fl=(n,e=.6)=>new Jt({color:n,transparent:!0,opacity:e,blending:Gn,depthWrite:!1});function bw(n,e,t,i=8){let s=new R(n[0],n[1],n[2]),r=new R(e[0],e[1],e[2]),o=he(t,t,s.distanceTo(r),i);return o.applyQuaternion(new _n().setFromUnitVectors(new R(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function ff(n,e=1.36){n.add("aluDark",P(Ne(.06,e,.07),[.4,e/2,Gt])),n.add("graphite",P(Ne(.16,.03,.16),[.4,.015,Gt])),n.add("aluDark",P(Ne(.48,.06,.08),[.16,e,Gt])),n.add("chrome",P(Ne(.4,.01,.01),[.17,e-.035,Gt+.03]))}function Mw(){return kt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Ot}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function Sw(){return kt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function ww(n,e,t){t.add("graphite",P(je(.88,.8,.42,.02),[0,ft+.4,-.33])),t.add("aluDark",P(je(.9,.03,.44,.01),[0,ft+.815,-.33]));let i=Mw().tex,s=new $n(je(.26,.17,.3,.008),new Nt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:ft+.13+x*.19,out:0,until:0});t.add("aluDark",P(Ne(.06,.46,.06),[0,ft+.23,.16])),t.add("aluDark",P(Ne(.07,.06,.88),[0,ft+.46,.56]));let o=At("scan-head",[0,ft+.4,Gt]);e.add(o),o.add(new dt().add("graphite",P(je(.38,.07,.09,.012),[0,-.035,0])).add("chrome",P(Ne(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=qt(7314431,.6);o.add(Ye(Ne(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=ft+.4-.075-(bn+.004),c=fl(6130687,0),u=Ye(new vt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=fl(10469631,0),h=Ye(Ne(.3,.001,.008),d,[0,bn+.006-(ft+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let p=new St,f=0;return{update(x,m,g){let _=g.work;if(o.position.z=Gt+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,g.working&&m>f){f=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let y=r[b];y.out=Xt(y.out,m<y.until?.16:0,9,x),p.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(b,p)}s.instanceMatrix.needsUpdate=!0}}}function Ew(n,e,t,i){t.add("graphite",P(je(.8,.34,.44,.02),[0,ft+.17,-.32]));for(let f=0;f<9;f++)t.add("alu",P(Ne(.012,.1,.38),[-.32+f*.08,ft+.39,-.32]));t.add("rubber",hi([[.3,ft+.2,-.09],[.3,ft+.32,.12],[.37,1.5,Gt-.08]],.018,.12,8));for(let f of[-.37,.37])t.add("aluDark",P(Ne(.07,1.44,.09),[f,.72,Gt])),t.add("graphite",P(Ne(.16,.03,.18),[f,.015,Gt]));t.add("aluDark",P(Ne(.84,.09,.11),[0,1.44,Gt])),t.add("chrome",P(Ne(.76,.016,.016),[0,1.44,Gt+.062])),t.add("hazard",P(Ne(.84,.02,.112),[0,1.494,Gt]));let s=new Fs({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:tn,depthWrite:!1});for(let f of[-.335,.335])e.add(Ye(new vt(.5,.42),s,[f,1.17,Gt],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=At("laser-head",[0,1.44,Gt]);e.add(r);let o=new dt;o.add("chrome",P(je(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",P(je(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",P(he(.026,.02,.07,20),[0,-.24,0])),o.add("orange",P(Ne(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(bn+.004),c=fl(12101375,0),u=Ye(he(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new Ls(new ds({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:Gn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,bn+.008-1.44,0),r.add(d);let h=new R,p=0;return{update(f,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=Gt+Math.sin(x*3.1+1)*.06*g;let _=m.working&&m.wafer?1:0;if(c.opacity=Xt(c.opacity,_*(.75+.25*Math.sin(x*60)),20,f),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(p+=f*40,d.getWorldPosition(h);p>1;)p-=1,i.sparks(h,1)}}}function Tw(n,e,t){t.add("ceramic",P(je(.52,.42,.36,.03),[-.12,ft+.27,-.34])),t.add("ceramic",P(je(.4,.32,.18,.04),[-.12,ft+.27,-.5])),t.add("graphite",P(je(.3,.06,.24,.01),[-.12,ft+.03,-.34])),t.add("graphite",P(je(.48,.36,.01,.02),[-.12,ft+.27,-.158]));let i=Gm();e.add(Ye(new vt(.4,.3),sl(i.tex,1.5),[-.12,ft+.27,-.151],null,null,{cast:!1})),t.add("plastic",P(je(.46,.03,.16,.008),[-.1,ft+.015,.1])),e.add(Ye(new vt(.44,.14),Zn(Sw().tex,.1),[-.1,ft+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),ff(t),t.add("steel",P(he(.04,.04,.14,20),[0,1.26,Gt]));let s=At("probe",[0,1.1,Gt]);e.add(s),s.add(new dt().add("chrome",P(he(.015,.015,.3,12),[0,.15,0])).add("graphite",P(he(.13,.13,.018,48),[0,.009,0])).add("gold",P(he(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=qt(4063119,.2);s.add(Ye(nn(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=Xt(s.position.y,c.working&&c.wafer?bn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function Aw(n,e,t){t.add("graphite",P(he(.13,.15,.08,40),[0,ft+.04,-.3]));let i=At("pan",[0,ft+.08,-.3]);e.add(i);let s=new dt;s.add("white",P(he(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",P(Ne(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",P(Ne(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=At("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=tn;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new dt;l.add("dish",_s(a,64)),l.add("chrome",P(nn(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",P(he(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Ut+Math.PI/6;l.add("aluDark",bw([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",P(new ir(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",P(he(.03,.03,.05,18),[0,.37,0]));let c=At("dish",[0,.07,0]);r.add(c),r.add(new dt().add("aluDark",P(he(.05,.05,.08,20),[0,.03,0]),P(he(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=qt(10849535,.3);c.add(Ye(uf(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let _=fl(10127103,0),b=Ye(nn(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:_,age:g/3}});ff(t),t.add("graphite",P(je(.12,.08,.12,.012),[0,1.29,Gt])),t.add("white",P(he(.004,.004,.18,6),[.03,1.42,Gt]));let h=qt(10849535,.2);e.add(Ye(uf(.012),h,[.03,1.515,Gt],null,null,{cast:!1}));let p=0,f=0,x=0;return{update(m,g,_){_.working&&g>x&&(x=g+1.2+Math.random()*1.5,f=(Math.random()-.5)*1.6),_.working||(f=0),p=Xt(p,f,1.6,m),i.rotation.y=p,r.rotation.x=-.62+Math.sin(g*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let y=b.age;b.r.position.y=.42+y*.9,b.r.scale.setScalar(1+y*6),b.mat.opacity=_.work*(1-y)*.8}}}}var uf=n=>new Hn(n,16,10);function Rw(n,e,t){t.add("graphite",P(je(.5,.32,.34,.02),[.18,ft+.16,-.36])),t.add("aluDark",P(je(.12,.18,.03,.01),[-.27,ft+.2,-.36]));let i=qt(5078015,.5);e.add(Ye(Ne(.3,.02,.005),i,[.18,ft+.25,-.188],null,null,{cast:!1}));let s=[-.05,ft,.12],r=.38,o=.36,a=.1;t.add("graphite",P(he(.09,.095,.04,32),[s[0],ft+.02,s[2]]));let l=At("j0",[s[0],ft+.04,s[2]]);e.add(l),l.add(new dt().add("white",P(he(.07,.075,.13,32),[0,.065,0])).add("graphite",P(he(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=At("j1",[0,.16,0]);l.add(c),c.add(new dt().add("white",P(je(.095,r,.095,.04),[0,r/2,0])).add("graphite",P(he(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=At("j2",[0,r,0]);c.add(u),u.add(new dt().add("white",P(je(.078,o,.078,.035),[0,o/2,0])).add("graphite",P(he(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=At("j3",[0,o,0]);u.add(d),d.add(new dt().add("graphite",P(he(.035,.035,.05,24),[0,.025,0])).add("chrome",P(he(.03,.03,.012,24),[0,.056,0])).add("aluDark",P(Ne(.012,.045,.03),[-.02,.08,0]),P(Ne(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=qt(5078015,.6);d.add(Ye(nn(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let p=ft+.04+.16,f=new R(0,p+.25,.25),x=new R;function m(g,_,b){let y=g-s[0],w=b-s[2];l.rotation.y=Math.atan2(y,w);let S=Math.hypot(y,w),v=_+a-p,M=mt(Math.hypot(S,v),.05,r+o-.001),D=Math.atan2(S,v),A=mt((M*M-r*r-o*o)/(2*r*o),-1,1),N=Math.acos(A),F=D-Math.atan2(o*Math.sin(N),r+o*Math.cos(N));c.rotation.x=F,u.rotation.x=N,d.rotation.x=Math.PI-F-N}return m(f.x,f.y,f.z),{update(g,_,b){b.working&&b.wafer?x.set(.08*Math.cos(_*1.7),bn+.03+.06*Math.max(0,Math.sin(_*3.4)),Gt-.04+.07*Math.sin(_*2.3)):b.working?x.set(.05*Math.sin(_*1.3),p+.12,Gt-.3):x.set(-.05+.04*Math.sin(_*.6),p+.22,.32),f.x=Xt(f.x,x.x,4,g),f.y=Xt(f.y,x.y,4,g),f.z=Xt(f.z,x.z,4,g),m(f.x,f.y,f.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(_*8))}}}function df(n){return n<.22?Vh(n/.22):n<.42?1:1-Vh((n-.42)/.58)}function Cw(n,e,t){t.add("graphite",P(je(.6,.28,.3,.02),[.14,ft+.14,-.38])),t.add("white",P(he(.08,.08,.3,28),[.14,ft+.36,-.38],[0,0,Math.PI/2])),t.add("steel",P(he(.06,.06,.24,24),[-.3,ft+.12,-.4])),t.add("blue",P(je(.3,.86,.26,.03),[0,ft+.43,.02])),t.add("blue",P(je(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",P(Ne(.322,.04,.01),[0,1.6,.942])),t.add("steel",P(he(.085,.085,.22,32),[0,1.45,Gt])),t.add("chrome",P(nn(.086,.008,8,32),[0,1.34,Gt],[Math.PI/2,0,0])),t.add("rubber",hi([[.06,1.5,Gt-.06],[.2,1.5,Gt-.3],[.2,1.2,.2],[.2,ft+.3,-.2]],.016,.1,8)),t.add("rubber",hi([[-.06,1.42,Gt-.06],[-.2,1.42,Gt-.3],[-.2,1.1,.2],[-.2,ft+.28,-.22]],.016,.1,8));let i=At("ram",[0,1.12,Gt]);e.add(i),i.add(new dt().add("chrome",P(he(.035,.035,.42,20),[0,.21,0])).add("steel",P(je(.32,.05,.32,.012),[0,0,0])).add("darkSteel",P(he(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>P(he(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=cl({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ye(new Pn(.07,40),new Nt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ye(Ne(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ye(nn(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?df(o):0;i.position.y=1.12-.155*d,a=Xt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*Ni}}}function Pw(n,e,t){for(let d of[-.42,.42])t.add("aluDark",P(Ne(.035,.66,.035),[d,ft+.33,-.33]));t.add("alu",P(je(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",P(Ne(.6,.03,.06),[0,1.16,-.3])),t.add("blue",P(he(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",P(he(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=Wm();e.add(Ye(new vt(.8,.6),new Nt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=je(.11,.075,.008,.004),o=s.map(d=>{let h=Ye(r,new Nt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,p)=>h.forEach((f,x)=>{let[m,g]=l(p,x),_=o[f];_.userData.tx=m,_.userData.ty=g,d&&_.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=Xt(h.position.x,h.userData.tx,7,d),h.position.y=Xt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function Iw(n,e,t){t.add("graphite",P(he(.07,.08,.04,28),[.3,ft+.02,-.35])),t.add("alu",P(he(.028,.028,1,16),[.3,ft+.5,-.35])),t.add("graphite",P(he(.09,.1,.06,32),[.3,ft+1.03,-.35]));let r=new Fs({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ye(he(.08,.08,.13,32,!0),r,[.3,ft+1.125,-.35],null,null,{cast:!1})),e.add(Ye(new Hn(.08,32,12,0,Ut,0,Math.PI/2),r,[.3,ft+1.19,-.35],null,null,{cast:!1}));let o=At("spin",[.3,ft+1.12,-.35]);e.add(o),o.add(Ye(new Yn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=qt(16756782,.2);e.add(Ye(uf(.022),a,[.3,ft+1.12,-.35],null,null,{cast:!1}));let l=fl(16753978,0),c=new ir(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ye(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new Fs({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",P(je(.36,.28,.12,.02),[-.2,ft+.14,.04])),t.add("grille",P(new vt(.12,.12),[-.28,ft+.15,.101])),t.add("steel",P(he(.045,.045,.02,28),[-.1,ft+.15,.11],[Math.PI/2,0,0]));let d=qt(3461498,.3);return e.add(Ye(new Hn(.038,24,10,0,Ut,0,Math.PI/2),d,[-.1,ft+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,p,f){let x=f.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(p*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(p*5)>0?1:.2)}}}function Lw(n,e,t){t.add("aluDark",P(je(.72,.62,.04,.012),[0,ft+.31,-.4])),t.add("graphite",P(je(.72,.06,.3,.012),[0,ft+.03,-.3]));let i=At("unwind",[-.16,ft+.4,-.31],[Math.PI/2,0,0]),s=At("rewind",[.2,ft+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=kt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new Nt({map:r,roughness:.7});i.add(new dt().add("roll",he(.15,.15,.1,48)).add("gold",he(.05,.05,.11,24)).add("chrome",he(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new dt().add("ceramic",he(.075,.075,.1,40)).add("gold",he(.035,.035,.11,20)).add("chrome",he(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,ft+.52],[.05,ft+.3],[.28,ft+.42]])t.add("chrome",P(he(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));ff(t),t.add("steel",P(he(.042,.042,.18,22),[0,1.24,Gt])),t.add("chrome",P(nn(.043,.006,6,24),[0,1.16,Gt],[Math.PI/2,0,0]));let a=At("tamp",[0,1.08,Gt]);e.add(a),a.add(new dt().add("chrome",P(he(.016,.016,.3,12),[0,.15,0])).add("graphite",P(je(.16,.025,.12,.006),[0,0,0])).add("gold",P(Ne(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let p=l?df(l):0;a.position.y=1.08-(1.08-(bn+.03))*p,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function Dw(n,e,t){t.add("graphite",P(je(.62,.86,.44,.02),[0,ft+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",P(Ne(.016,.84,.01),[d,ft+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",P(je(.56,.085,.02,.006),[0,ft+.07+d*.1,-.095]));t.add("grille",P(new vt(.36,.5),[.311,ft+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new $n(Ne(.014,.01,.004),new Jt({color:16777215}),i*s),o=new St,a=[],l=[new Ue(3461498),new Ue(3461498),new Ue(5078015),new Ue(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,ft+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let p=l[(d*7+h*3)%l.length].clone();a.push(p),r.setColorAt(d*s+h,p)}e.add(r);let c=new Ue,u=0;return{update(d,h,p){if(u+=d,!(u<.08)){u=0;for(let f=0;f<a.length;f++){let x=p.working?Math.random()>.45:(f+Math.floor(h*.7))%9===0;c.copy(a[f]).multiplyScalar(x?3.2:.25),r.setColorAt(f,c)}r.instanceColor.needsUpdate=!0}}}}var Nw={archive:ww,engraver:Ew,terminal:Tw,satellite:Aw,robot:Rw,press:Cw,kanban:Pw,beacon:Iw,labeler:Lw,generic:Dw};function Ow(n,e,t,i){let s=ii[e],r=hf(t),o=ki(r,Yo),a=At(`station-${e}`,[o.x,0,o.z],[0,lg(r),0]);a.userData.solid=`station:${e}`;let l=new dt,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,P(je(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",P(je(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",P(je(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",P(Ne(.9,.01,.008),[0,.32,.252])),l.add("grille",P(new vt(.36,.1),[.24,.18,.251]));let[u,d]=vw[e]||[.44,-.5];l.add("alu",P(he(.012,.012,.3,10),[u,ft+.15,d])),l.add("graphite",P(he(.03,.03,.012,18),[u,ft+.46,d]));let h=Nw[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let p=Ws(s.zh,s.en,s.code,yw[e]);a.add(Ye(new vt(.46,.13),Zn(p.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let f=Wu(384,144,{bg:"#03060c",glow:4});a.add(Ye(new vt(.36,.135),sl(f.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=qt(5078015,.4);a.add(Ye(Ne(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((N,F)=>{let B=qt(N,.1);return a.add(Ye(he(.028,.028,.045,18),B,[u,ft+.33+(2-F)*.05,d],null,null,{cast:!1})),B}),g=qu(n);g.root.position.set(0,0,Gt),a.add(g.root),a.add(Jn(n,1.25,1,[0,0,-.12],.55));let _=new Jt({visible:!1}),b=new ut(new Vt(1.1,2,1.5),_);b.position.set(0,1,.1),a.add(b);let y={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},w=new Ue,S=new Ue(5078015),v=new Ue(3461498),M=new Ue(16726832),D=ki(r,is+.05,bn+.08);function A(){let N=y.status==="working"?"加工中 RUN":y.status==="error"?"故障 FAULT":"待机 IDLE",F=`${N}|${y.label}`;F!==y.screenKey&&(y.screenKey=F,f.set([{text:`${s.code}  ${N}`,size:30,color:y.status==="error"?"#ff8a80":y.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:y.label||"—",size:34,color:"#e8eefc",gap:58}]))}return A(),{kind:e,index:t,theta:r,root:a,port:ki(r,is,bn),anchor:ki(r,Yo+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(N){y.label=N||"",A()},onStart(N){y.label=N.label||N.name,h.onStart?.(N),A()},onEnd(N,F){y.flash=F?.9:2.2,y.flashOk=F,F||i.puff(D,10),h.onEnd?.(N,F)},update(N,F,B){y.work=Xt(y.work,B.working?1:0,3,N),y.flash=Math.max(0,y.flash-N);let I=y.flash>0&&!y.flashOk;y.status=B.working?"working":I?"error":"idle",A(),h.update(N,F,{working:B.working,wafer:B.wafer,work:y.work});let Y;y.flash>0?(w.copy(y.flashOk?v:M),Y=3.2*(y.flashOk?Math.min(1,y.flash*2):Math.sin(F*14)>0?1:.25)):(w.copy(S),Y=.25+y.work*(2.2+Math.sin(F*6)*.6)),g.led.emissive.copy(w),g.led.emissiveIntensity=Y,x.emissive.copy(w),x.emissiveIntensity=.25+Y*.6,m[0].emissiveIntensity=I?Math.sin(F*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+y.work*3.5,m[2].emissiveIntensity=!B.working&&!I?1.6:.08}}}function dg(n,e){let t=At("stations"),i=Xu.map((r,o)=>Ow(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var pf=n=>Ws(on[n].zh,on[n].en,on[n].code),gi=new R(7.45,0,ts),ys=.83,gf=13,xr=.4,xi=.36,ss=.4,xf=.02,_f=.062,yf=.02,vf=[8.2,8.75,9.3],bf=[-.1,.45,1],Bi=.55,Ei=2.45,$u=xi+.046,hg=1.9,Fw=1.3,Yr=9,fg=n=>((n-1)%Yr+Yr)%Yr,mf=(n,e=new R)=>e.set(vf[n%3],Bi,bf[Math.floor(n/3)]),pg={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}};function Uw(n,e,t,i){let s=i.info,r=s?pg[s.status]||pg.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Wt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Wt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Ot}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0,a=s&&s.files?s.files.length:0;n.fillText(`CALLS ${o} · FILES ${a}`,30,t*.64),n.fillStyle="#15171b";let l=30,c=(i.no||7)*2654435761;for(let u=0;l<e-16;u++){let d=1+((c>>>u%24^u)&3);u%2===0&&n.fillRect(l,t*.8,d,t*.13),l+=d+1}}function kw(n){let e=new dt,t=.03+(xi-.03)/2,i=xi-.03,s=-xr/2+.008;e.add("graphite",P(je(xr,.03,ss,.008),[0,.015,0])),e.add("graphite",P(Ne(.016,.022,ss),[s,xi-.011,0]),P(Ne(.016,i,.02),[s,t,ss/2-.01]),P(Ne(.016,i,.02),[s,t,-ss/2+.01])),e.add("graphite",P(Ne(.06,.026,.06),[0,xi+.013,0]),P(je(.17,.02,.17,.006),[0,xi+.036,0]));for(let l=0;l<gf;l++){let c=_f+l*yf-.005;for(let u of[-1,1])e.add("plastic",P(Ne(.3,.004,.05),[xf,c,u*.165]))}let r=new dt().add("smoke",P(Ne(xr-.016,i,.01),[.008,t,ss/2-.005]),P(Ne(xr-.016,i,.01),[.008,t,-ss/2+.005]),P(Ne(.01,i,ss-.02),[xr/2-.005,t,0]),P(Ne(xr-.016,.01,ss-.02),[.008,xi-.005,0])),o=new Qt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new dt().add("white",P(je(.02,xi-.045,ss-.03,.006),[0,0,0])).add("graphite",P(he(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),P(he(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(xi-.045)/2+.006,doorX:-xr/2-.004}}function mg(n,e){let t=At("stocker"),i=new Jt({visible:!1}),s=new Vt(xr+.04,xi+.08,ss+.04),r=new vt(.28,.1225),o=kw(n),a=At("load-port",[gi.x,0,gi.z]);a.userData.solid="load-port",t.add(a);let l=new dt;l.add("white",P(je(.56,ys-.012,.62,.02),[0,(ys-.012)/2,0])),l.add("graphite",P(je(.44,.012,.44,.004),[0,ys-.006,0]),P(Ne(.58,.06,.64),[0,.03,0]));for(let U=0;U<3;U++){let W=U/3*Math.PI*2+.5;l.add("chrome",P(he(.008,.012,.012,12),[Math.cos(W)*.13,ys+.004,Math.sin(W)*.13]))}l.add("aluDark",P(Ne(.04,.22,.04),[.24,ys+.11,.27]),P(Ne(.08,.03,.05),[.21,ys+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=pf("loadport");a.add(Ye(new vt(.44,.124),Zn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((U,W)=>{let ne=qt(U,.15);return a.add(Ye(Ne(.05,.016,.008),ne,[-.12+W*.12,.46,.312],null,null,{cast:!1})),ne});a.add(Jn(n,.9,.95,[0,0,0],.5));let d=new ut(new Vt(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new dt,p=(vf[0]+vf[2])/2,f=(bf[0]+bf[2])/2;h.add("graphite",P(Ne(1.66,Bi-.03,1.66),[p,(Bi-.03)/2,f])),h.add("white",P(je(1.76,.03,1.76,.01),[p,Bi-.015,f])),h.add("aluDark",P(Ne(1.7,.05,1.7),[p,.025,f]));let x=[];for(let U=0;U<Yr;U++){let W=mf(U);h.add("aluDark",P(je(.44,.008,.44,.003),[W.x,Bi+.002,W.z]));for(let K=0;K<3;K++){let re=K/3*Math.PI*2+.5;h.add("chrome",P(he(.007,.01,.01,10),[W.x+Math.cos(re)*.12,Bi+.008,W.z+Math.sin(re)*.12]))}let ne=qt(3134074,0);t.add(Ye(Ne(.12,.006,.012),ne,[W.x,Bi+.004,W.z+.235],null,null,{cast:!1})),x.push(ne)}t.add(h.build(n,{name:"buffer-table"}));let m=pf("stocker");t.add(Ye(new vt(.62,.175),Zn(m.tex,.35),[p,Bi*.55,f+.834],null,null,{cast:!1})),t.add(Jn(n,2.3,2.3,[p,0,f],.55));let g=new ut(new Vt(1.8,Bi+.45,1.8),i);g.position.set(p,(Bi+.45)/2,f),t.add(g);let _=new dt,b=[7,10],y=[-.45,1.95];for(let U of b){for(let W of y)_.add("white",P(Ne(.1,Ei+.05,.1),[U,(Ei+.05)/2,W])),_.add("graphite",P(Ne(.22,.03,.22),[U,.015,W]));_.add("aluDark",P(Ne(.09,.09,y[1]-y[0]+.1),[U,Ei,(y[0]+y[1])/2]))}for(let U of y)_.add("steel",P(Ne(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,Ei,U]));t.add(_.build(n,{name:"gantry"}));let w=pf("gantry"),S=Ye(new vt(.9,.253),Zn(w.tex,.35),[(b[0]+b[1])/2,Ei-.2,y[1]+.047],null,null,{cast:!1});t.add(S),t.add(new dt().add("steel",P(Ne(.02,.1,.02),[(b[0]+b[1])/2-.35,Ei-.06,y[1]+.04]),P(Ne(.02,.1,.02),[(b[0]+b[1])/2+.35,Ei-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let v=At("bridge");t.add(v),v.add(new dt().add("blue",P(Ne(.14,.12,y[1]-y[0]+.12),[0,Ei+.105,(y[0]+y[1])/2])).add("graphite",P(Ne(.26,.1,.13),[0,Ei+.07,y[0]]),P(Ne(.26,.1,.13),[0,Ei+.07,y[1]])).build(n,{name:"bridge-beam"}));let M=At("trolley");v.add(M),M.add(new dt().add("graphite",P(je(.28,.13,.26,.02),[0,Ei-.035,0])).add("steel",P(he(.045,.045,.2,20),[0,Ei-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let D=he(.0035,.0035,1,6),A=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([U,W])=>{let ne=Ye(D,n.steel,[U,1,W],null,null,{cast:!1});return M.add(ne),ne}),N=At("gripper");M.add(N),N.add(new dt().add("graphite",P(je(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let F=[-1,1].map(U=>{let W=Ye(Ne(.024,.06,.13),n.steel,[U*.115,-.01,0]);return N.add(W),W}),B=qt(5078015,.3);N.add(Ye(Ne(.1,.008,.01),B,[0,.03,.122],null,null,{cast:!1}));let I={x:gi.x,z:gi.z,hook:hg,grip:0,carry:null},Y=()=>{v.position.x=I.x,M.position.z=I.z,N.position.y=I.hook;let U=Ei-.1,W=I.hook+.055,ne=Math.max(.01,U-W);for(let re of A)re.scale.y=ne,re.position.y=W+ne/2;let K=Si(.115,.079,I.grip);F[0].position.x=-K,F[1].position.x=K,I.carry&&I.carry.g.position.set(I.x,I.hook-$u,I.z)},Z=new Set,G=new Array(Yr).fill(null),$=null;function z(){let U=o.g.clone();U.name="foup";let W=o.door.clone();U.add(W);let ne=kt(256,112,()=>{}),K=new Nt({map:ne.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:ne.tex,emissiveIntensity:.18});U.add(Ye(r,K,[.01,xi-.075,ss/2+.002],null,null,{cast:!1}));let re=new ut(s,i);re.position.set(0,xi/2+.02,0),U.add(re);let we={no:0,info:null,g:U,door:W,label:ne,labelMat:K,labelKey:"",proxy:re,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return X(we),Z.add(we),t.add(U),we}function X(U){let W=`${U.no}|${U.info?`${U.info.status}|${U.info.calls}|${(U.info.files||[]).length}`:"-"}|${U.count}`;W!==U.labelKey&&(U.labelKey=W,U.proxy.userData.hoverId=U.no?`foup:${U.no}`:"loadport",U.label.redraw((ne,K,re)=>Uw(ne,K,re,U)))}function se(U,W){let ne=U.count;if(U.count+=1,U.looks.push(W),ne<gf){let K=e.create(W);K.position.set(xf,_f+ne*yf,0),U.g.add(K),U.slots.push(K)}X(U)}function Se(U){Z.delete(U),t.remove(U.g),U.label.tex.dispose(),U.labelMat.dispose();for(let W=0;W<Yr;W++)G[W]===U&&(G[W]=null);$===U&&($=null)}function Oe(U){let W=U.doorOpen,ne=mt(W/.25,0,1),K=Oi(mt((W-.25)/.75,0,1));U.door.position.set(o.doorX-.018*ne,o.doorY-.43*K,0)}function Q(U=!1){let W=z();return W.g.position.set(gi.x,ys,gi.z),W.state=U?"dock":"spawning",W.sp=U?1:0,W.doorOpen=U?1:0,Oe(W),$=W,W}function ve(U,W){let ne=G[W];ne&&ne!==U&&Se(ne),G[W]=U;let K=mf(W);U.g.position.copy(K),U.state="nest",U.doorOpen=0,Oe(U)}let Ee=[],ie=null,xe=U=>({setup:()=>(U(),{d:0,fn:null})}),Le=(U,W,ne=1.6)=>({setup(){let K=I.x,re=I.z,we=Math.hypot(U-K,W-re);return{d:we<.001?0:Math.max(.35,we/ne),fn:O=>(I.x=Si(K,U,O),I.z=Si(re,W,O))}}}),ht=(U,W)=>({setup(){let ne=I.hook;return{d:Math.abs(U-ne)<.001?0:W,fn:K=>I.hook=Si(ne,U,K)}}}),Ve=(U,W=.3)=>({setup(){let ne=I.grip;return{d:W,fn:K=>I.grip=Si(ne,U,K)}}}),me=(U,W,ne=.55)=>({setup(){let K=U.doorOpen;return{d:ne,fn:re=>(U.doorOpen=Si(K,W,re),Oe(U))}}});function Re(U){let W=fg(U.no),ne=mf(W);return{i:0,steps:[xe(()=>U.state="closing"),me(U,0),Le(gi.x,gi.z),ht(ys+$u,.6),Ve(1),xe(()=>(I.carry=U,U.state="carried",B.emissiveIntensity=2.2)),ht(Fw+$u,.9),xe(()=>{$===U&&($=null),Q();let K=G[W];K&&K!==U&&(K.state="sink",K.sp=0,G[W]=null)}),Le(ne.x,ne.z),ht(Bi+$u,.8),xe(()=>{I.carry=null,B.emissiveIntensity=.3,G[W]&&G[W]!==U&&Se(G[W]),ve(U,W)}),Ve(0),ht(hg,.5),Le(gi.x,gi.z)]}}let oe={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new R(gi.x,1.1,gi.z),stocker:new R(p,.9,f)},speed:1,hoverObjects(U=[]){for(let W of Z)W.no&&U.push(W.proxy);return U},dockReady:()=>!!$&&$.state==="dock"&&$.doorOpen>=1,dockTurn:()=>$&&$.no||null,dockCount:()=>$?$.count:0,bindDock(U,W){return!$||$.no?!1:($.no=U,$.info=W||null,X($),!0)},slotPoint(U,W=new R){let ne=$?$.g.position:new R(gi.x,ys,gi.z);return W.set(ne.x+xf,ne.y+_f+Math.min(U,gf-1)*yf,ne.z)},addWafer(U){$&&se($,U)},addLate(U,W){for(let ne of Z)if(ne.no===U&&ne.state!=="sink")return se(ne,W),!0;return!1},updateInfo(U,W){for(let ne of Z)ne.no===U&&(ne.info=W,X(ne))},ship(U){return!$||$.no!==U||Ee.includes($)||ie&&ie.foup===$?!1:(Ee.push($),!0)},shipped:U=>{for(let W of Z)if(W.no===U)return W.state==="carried"||W.state==="nest"||W.state==="sink"||Ee.includes(W)||ie&&ie.foup===W;return!1},placeNest(U,W,ne){let K=z();K.no=U,K.info=W;for(let re of ne)se(K,re);ve(K,fg(U)),X(K)},resetDock(U,W,ne){$&&Se($);let K=Q(!0);if(U){K.no=U,K.info=W;for(let re of ne||[])se(K,re)}X(K)},busy:()=>!!ie||Ee.length>0,update(U){if(!ie&&Ee.length){let K=Ee.shift();ie=Re(K),ie.foup=K}let W=U*oe.speed;for(;ie&&W>0;){let K=ie.steps[ie.i];if(!K){ie=null;break}if(K.run||(K.run=K.setup(),K.t=0),!K.run.d){K.run.fn&&K.run.fn(1),ie.i+=1;continue}let re=Math.min(W,K.run.d-K.t);K.t+=re,W-=re,K.run.fn&&K.run.fn(Oi(mt(K.t/K.run.d,0,1))),K.t>=K.run.d-1e-6&&(ie.i+=1)}Y();for(let K of[...Z])K.state==="spawning"?(K.sp=Math.min(1,K.sp+U/.8),K.g.position.y=ys-(xi+.07)*(1-Oi(K.sp)),K.sp>=1&&(K.state="dock")):K.state==="dock"&&K.doorOpen<1?(K.doorOpen=Math.min(1,K.doorOpen+U/.6),Oe(K)):K.state==="sink"&&(K.sp=Math.min(1,K.sp+U/1.2),K.g.position.y=Bi-(xi+.09)*Oi(K.sp),K.sp>=1&&Se(K));for(let K=0;K<Yr;K++)x[K].emissiveIntensity=G[K]?1.6:0;let ne=!!ie;u[0].emissiveIntensity=oe.dockReady()?1.8:.15,u[1].emissiveIntensity=$&&$.state==="closing"?2.2:.15,u[2].emissiveIntensity=ne?1.8:.15},dispose(){for(let U of[...Z])Se(U);for(let U of[o.g,o.door])U.traverse(W=>W.geometry&&W.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return Y(),oe}function gg(n){let e=new Qt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new ds({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?Gn:ps}),h=new Ls(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new R,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new R((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new R(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var xg=.15,Bw=.006;function _g(n){let e=new Yn(xg,xg,Bw,40,1,!1),t=new Nt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new ut(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Mf=.34,Yu=.17,yg=4,zw=2.4,Hw=.55,Gw=.9,Sf=.03,Vw=5,Ku=-.006,Ww=12,Xw=.4,qw=3,$w=1.5,Yw=9,Kw=new Ue(16756768),Zw=new Ue(3461498),pl=(n,e=n.kind)=>n.status==="error"?"bad":Xo.has(e)?"gold":"normal";function vg(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=pl(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,(n.files?n.files.length:0)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var Zu=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Ou(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Mf-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-Yu,r=this.gateOut+Yu,o=this.items.find(f=>f.s>s+1e-6&&f.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let f of this.items){let x=d?d.s-Mf:this.end,m=!d||d.s-Mf>=r;if(f.cycled)f.s<r&&(f.s<=this.gateOut-Yu+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(f.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),f.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&f.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else f.s<this.gateIn+Yu&&(a=!0);f.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(f.dwell+=e*t,c=!0,f.dwell>=Hw&&(f.cycled=!0))}let g=x-f.s;if(g<=1e-5)f.v=0;else{let _=Math.min(zw*t,Math.sqrt(2*yg*g));f.v=Math.min(_,f.v+yg*t*e),f.s=Math.min(x,f.s+f.v*e),u=!0}f.arrivedAt==null&&f.s>=this.end-1e-4&&(f.arrivedAt=i),d=f}let p=5*e*t;this.doorIn=mt(this.doorIn+(a?p:-p),0,1),this.doorOut=mt(this.doorOut+(l?p:-p),0,1),this.cycling=c,this.moving=u}};function bg({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new R,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=mt(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new Zu([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),p=mt((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),f=new Zu([o.outPort,o.outCenter,o.trackEnd],{gateIn:p*h,gateOut:h+.45,stop:h}),x=O=>e.byKind[O.kind]?O.kind:"generic",m=new Map,g=new Set,_=new Map,b=Object.fromEntries(e.list.map(O=>[O.kind,new Array(Vw).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},w={inbound:0,outbound:0,robot:!1,stocker:!1},S={},v=[],M=0,D=0,A=!0,N=0,F=1,B=null;function I(O){let ee=_.get(O);return ee||(ee={no:O,status:"running",info:null,shipped:!1,pending:[]},_.set(O,ee)),ee}let Y=O=>O.status!=="running"||O.no<M,Z=O=>{for(let ee of m.values())if(ee.turn===O)return!0;return!1};function G(O){let ee={id:O.id,call:O,kind:x(O),turn:O.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:bn,waitT:0};return m.set(O.id,ee),I(O.turn),ee}function $(O){O.mesh&&(r.remove(O.mesh),O.mesh=null)}function z(O){O.stage="stored",m.delete(O.id),g.add(O.id)}function X(O){O.signaled||(O.signaled=!0,e.byKind[O.kind].onEnd(O.call,O.call.status!=="error"))}function se(O,ee){t.addLate(O,ee)||I(O).pending.push(ee)}function Se(O){O.it&&(d.remove(O.it),f.remove(O.it),O.it=null),O.level>=0&&(b[O.kind][O.level]=null,O.level=-1),y.carry===O&&(y.carry=null),$(O),X(O),se(O.turn,pl(O.call,O.kind)),z(O)}let Oe=O=>b[O].indexOf(null);function Q(O,ee){let ae=e.byKind[O.kind];b[O.kind][ee]=O,O.level=ee,O.stage="station",O.arriveT=N,O.mesh||(O.mesh=s.create("raw"),r.add(O.mesh)),O.mesh.position.set(ae.port.x,bn+ee*Sf,ae.port.z)}function ve(){for(let O of m.values())$(O);m.clear(),g.clear(),_.clear(),d.items.length=0,f.items.length=0;for(let O of Object.keys(b))b[O].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),B=null}function Ee(O){S={},v=[];for(let ee of O.calls){if(ee.status!=="running")continue;let ae=x(ee);S[ae]=(S[ae]||0)+1,v.push(ee)}M=O.turns.length?O.turns[O.turns.length-1].no:0}function ie(O){ve();for(let L of O.turns)Object.assign(I(L.no),{info:L,status:L.status});let ee=O.turns.filter(L=>L.status!=="running");for(let L of ee)I(L.no).shipped=!0;for(let L of ee.slice(-Yw))t.placeNest(L.no,L,vg(L,O.calls));let ae=O.turns.find(L=>L.status==="running")||null;ae?t.resetDock(ae.no,ae,vg(ae,O.calls)):t.resetDock(null,null,[]);for(let L of O.calls){if(L.status!=="running"){g.add(L.id);continue}let Ke=G(L),ot=Oe(Ke.kind);ot>=0&&Q(Ke,ot),e.byKind[Ke.kind].onStart(L)}Ee(O)}function xe(O){if(!O)return;if(A||O.turnCount<D){A=!1,D=O.turnCount,ie(O);return}D=O.turnCount;for(let ae of O.turns){let L=I(ae.no);L.info=ae,L.status=ae.status,t.updateInfo(ae.no,ae)}let ee=new Set;for(let ae of O.calls){ee.add(ae.id);let L=m.get(ae.id);L?L.call=ae:g.has(ae.id)||(G(ae),e.byKind[x(ae)].onStart(ae))}for(let ae of g)ee.has(ae)||g.delete(ae);Ee(O)}let Le=(O,ee)=>({yaw:O,reach:$r,lift:ee,d:(ae,L)=>Math.max(.18,Math.abs(Wh(ae.yaw,L.yaw))/4)});function ht(O,ee){let ae=e.byKind[O.kind];b[O.kind][ee]=O,O.level=ee;let L=ee*Sf;return{type:"deliver",job:O,from:on.lock.code,to:ii[O.kind].code,steps:[Le(qr,Ku),{reach:is,d:.38},{lift:hl,d:.15,onStart(){d.remove(O.it),O.it=null,O.stage="carried",O.restY=bn,y.carry=O},onEnd:()=>O.restY=0},{reach:$r,d:.32},Le(ae.theta,L+hl),{reach:is,d:.38},{lift:L+Ku,d:.15,onStart:()=>O.restY=bn+L,onEnd(){y.carry=null,Q(O,ee)}},{reach:$r,d:.32}]}}function Ve(O){let ee=e.byKind[O.kind],ae=O.level,L=ae*Sf;return O.reserved=!0,{type:"collect",job:O,from:ii[O.kind].code,to:on.unload.code,steps:[Le(ee.theta,L+Ku),{reach:is,d:.38},{lift:L+hl,d:.15,onStart(){b[O.kind][ae]=null,O.level=-1,O.stage="carried",O.restY=bn+L,y.carry=O},onEnd:()=>O.restY=0},{reach:$r,d:.32},Le(Ko,hl),{reach:is,d:.38},{lift:Ku,d:.15,onStart:()=>O.restY=bn,onEnd(){y.carry=null,O.it=f.add(O),O.stage="out"}},{reach:$r,d:.32}]}}function me(){let O=null,ee=d.head();if(d.atEnd(ee)){let ae=Oe(ee.job.kind);ae>=0&&(O={type:"deliver",job:ee.job,k:ae,ready:ee.arrivedAt??N})}if(f.tailFree())for(let ae of m.values())ae.stage==="station"&&ae.processed&&!ae.reserved&&(!O||ae.processedAt<O.ready)&&(O={type:"collect",job:ae,ready:ae.processedAt});return O?O.type==="deliver"?ht(O.job,O.k):Ve(O.job):null}function Re(O){let ee=n.robot;if(!y.task){let Ke=me();Ke?(y.task=Ke,y.steps=Ke.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,ee.setBusy(!0)):(y.idle+=O,y.idle>$w&&!y.homed&&!y.cur&&(y.steps=[Le(qr,0)],y.homed=!0))}let ae=O,L=0;for(;ae>0&&L++<32;){if(!y.cur){let Ce=y.steps.shift();if(!Ce)break;let _e={yaw:ee.pose.yaw,reach:ee.pose.reach,lift:ee.pose.lift},fe={yaw:Ce.yaw??_e.yaw,reach:Ce.reach??_e.reach,lift:Ce.lift??_e.lift},Be=typeof Ce.d=="function"?Ce.d(_e,fe):Ce.d;y.cur={st:Ce,from:_e,to:fe,d:Be/F,t:0},Ce.onStart&&Ce.onStart()}let Ke=y.cur,ot=Math.min(ae,Ke.d-Ke.t);Ke.t+=ot,ae-=ot;let _t=Ke.d>0?Oi(Ke.t/Ke.d):1;ee.setPose(Ke.from.yaw+Wh(Ke.from.yaw,Ke.to.yaw)*_t,Si(Ke.from.reach,Ke.to.reach,_t),Si(Ke.from.lift,Ke.to.lift,_t)),Ke.t>=Ke.d-1e-6&&(y.cur=null,Ke.st.onEnd&&Ke.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,ee.setBusy(!1)),ee.setStatus){let Ke=y.task,ot=!!y.cur||y.steps.length>0,_t=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;Ke?ee.setStatus(Ke.type,Ke.from,Ke.to,_t):ee.setStatus(ot?"home":"idle",null,ot?on.lock.code:null,null)}y.carry&&y.carry.mesh&&(ee.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function oe(){for(let O of m.values())O.stage!=="station"||O.processed||O.call.status==="running"||N<O.arriveT+Gw/F||(O.processed=!0,O.processedAt=N,s.setLook(O.mesh,pl(O.call,O.kind)),X(O))}function U(O,ee){f.remove(ee),O.it=null,O.stage="transfer",B={j:O,t:0,d:Xw/F,from:O.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new R)}}function W(O){if(!B)return;B.t+=O;let ee=Oi(B.t/B.d),ae=B.j.mesh;if(ae.position.lerpVectors(B.from,B.to,ee),ae.position.y+=Math.sin(Math.PI*ee)*.025,B.t>=B.d){let L=B.j;B=null,$(L),t.dockTurn()===L.turn?t.addWafer(pl(L.call,L.kind)):se(L.turn,pl(L.call,L.kind)),z(L)}}function ne(O){if(t.dockReady()&&t.dockTurn()==null){let L=null;for(let Ke of _.values())!Ke.shipped&&(!L||Ke.no<L.no)&&(L=Ke);if(L){t.bindDock(L.no,L.info);for(let Ke of L.pending.splice(0))t.addWafer(Ke)}}let ee=t.dockTurn();if(ee!=null&&!B&&t.dockReady()){let L=I(ee);!L.shipped&&Y(L)&&!Z(ee)&&t.ship(ee)&&(L.shipped=!0)}let ae=f.head();if(!B&&f.atEnd(ae)){let L=ae.job;I(L.turn).shipped?Se(L):t.dockReady()&&t.dockTurn()===L.turn?U(L,ae):(L.waitT+=O,L.waitT>qw&&ee!=null&&ee!==L.turn&&t.dockReady()&&t.ship(ee)&&(I(ee).shipped=!0))}}function K(){let O=m.size-Ww;if(!(O<=0))for(let ee of m.values()){if(O<=0)break;ee.stage==="spawn"&&ee.call.status!=="running"&&(Se(ee),O-=1)}}function re(){if(d.tailFree()){for(let O of m.values())if(O.stage==="spawn"){O.mesh=s.create("raw"),r.add(O.mesh),O.it=d.add(O),O.stage="in",d.path.at(0,O.mesh.position),i.pulseDispenser();return}}}function we(O,ee,ae){O.emissive.copy(ee?Kw:Zw),O.emissiveIntensity=ee?1.6+Math.sin(ae*10)*.8:.6}return t.resetDock(null,null,[]),{sync:xe,update(O,ee){N=ee,F=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=F,K(),re(),d.update(O,F,N),f.update(O,F,N),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(f.doorOut,f.doorIn),we(n.lock.led,d.cycling,ee),we(n.unload.led,f.cycling,ee),n.trackLed.emissiveIntensity=d.moving||f.moving?1.8+Math.sin(ee*8)*.4:1,oe(),Re(O),ne(O),W(O);for(let ae of d.items)d.path.at(ae.s,ae.job.mesh.position);for(let ae of f.items)f.path.at(ae.s,ae.job.mesh.position);for(let ae of e.list){let L=!1,Ke=!1;for(let _t of b[ae.kind])_t&&_t.stage==="station"&&(L=!0,_t.processed||(Ke=!0));let ot=(S[ae.kind]||0)>0||Ke;ae.active=ot,ae.update(O,ee,{working:ot,wafer:L})}t.update(O)},activity(){return w.inbound=d.items.length,w.outbound=f.items.length,w.robot=!!y.task||!!y.cur,w.stocker=!!B||t.busy(),w},focus(O){let ee=null;for(let ae of v)(!ee||(ae.startedAt||0)>=(ee.startedAt||0))&&(ee=ae);if(ee){let ae=e.byKind[x(ee)];return O.copy(ae.anchor),`station:${ae.kind}`}return y.task?(O.copy(n.anchors.robot),"robot"):B||t.busy()?(O.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!y.task||!!y.cur||y.steps.length>0||!!B||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:f.items.length,robot:y.task?y.task.type:"idle",transfer:!!B,dock:t.dockTurn(),rush:F,stages:[...m.values()].reduce((O,ee)=>(O[ee.stage]=(O[ee.stage]||0)+1,O),{})}},dispose(){for(let O of m.values())$(O);m.clear()}}}function Yt(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function Sn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function zi(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function Mg(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function Sg(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var wf={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function vs(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?wf["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?wf["deepseek-flash"]:null:t?wf["deepseek-flash"]:null}function Xs(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function ml(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Ju(n){if(!n||typeof n!="object")return null;let e={miss:ml(n.inputTokens),hit:ml(n.cacheReadTokens),write:ml(n.cacheWriteTokens),output:ml(n.outputTokens),reasoning:ml(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function ju(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function wg(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Qu(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var Jw=60,Eg=40,jw=200;function Tf(){return{v:0,provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],firstAt:0,lastAt:0}}function Qw(n){let e=n&&n.time;if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}function ed(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function td(n,e){return n.length>e?n.slice(n.length-e):n}function Tg(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],added:0,removed:0}}function Ef(n,e,t){let i=n.turns[n.turns.length-1];if(i&&i.status==="running")return n;let s=n.turnCount+1;return{...n,turnCount:s,turns:td([...n.turns,Tg(s,t??s,e)],Eg)}}function eE(n,e){let t=n.findIndex(s=>s.path===e.path);if(t<0)return[...n,{path:e.path,added:e.added,removed:e.removed}];let i=n.slice();return i[t]={...i[t],added:i[t].added+e.added,removed:i[t].removed+e.removed},i}var tE=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function nE(n,e){if(!e||typeof e.type!="string")return n;let t=e.data&&typeof e.data=="object"?e.data:{},i=Qw(e),s={...n,v:n.v+1,lastAt:i,firstAt:n.firstAt||i};switch(e.type){case"request/header":{let r=t.header&&t.header.config||{};return typeof r.model=="string"&&(s.model=r.model),typeof r.provider=="string"&&(s.provider=r.provider),typeof r.reasoningEffort=="string"&&(s.effort=r.reasoningEffort),s}case"request/context":return typeof t.model=="string"&&(s.model=t.model),typeof t.provider=="string"&&(s.provider=t.provider),typeof t.contextWindow=="number"&&t.contextWindow>0&&(s.contextWindow=t.contextWindow),s;case"turn/start":{let r=s.turns[s.turns.length-1];r&&r.status==="running"&&(s.turns=ed(s.turns,a=>({...a,status:"ok",endedAt:i})));let o=s.turnCount+1;return s.turnCount=o,s.turns=td([...s.turns,Tg(o,typeof t.turn=="number"?t.turn:o,i)],Eg),s.phase="thinking",s}case"step/start":return s=Ef(s,i,t.turn),s.phase="thinking",s;case"assistant/message":{s=Ef(s,i,t.turn);let r=Ju(t.usage);if(s.phase="idle",!r)return s;let o=vs(s.provider,s.model),a=Xs(i),l=ju(r,o,a),c=s.totals;return s.totals={miss:c.miss+r.miss,hit:c.hit+r.hit,write:c.write+r.write,output:c.output+r.output,reasoning:c.reasoning+r.reasoning,requests:c.requests+1,cost:c.cost+l,costPeak:c.costPeak+(a?l:0),costOffPeak:c.costOffPeak+(a?0:l),savings:c.savings+wg(r,o,a)},s.contextTokens=r.miss+r.hit+r.write+r.output,s.turns=ed(s.turns,u=>({...u,miss:u.miss+r.miss,hit:u.hit+r.hit,write:u.write+r.write,output:u.output+r.output,reasoning:u.reasoning+r.reasoning,cost:u.cost+l,requests:u.requests+1})),s}case"tool/call":{s=Ef(s,i,t.turn);let r=String(t.callId??t.id??`call-${s.v}`);if(s.calls.some(u=>u.id===r))return s;let o=String(t.name||"tool"),a=Ym(o),l=Xo.has(a)?Jm(o,t.arguments):null,c={id:r,name:o,kind:a,label:Zm(o,t.arguments),turn:s.turns[s.turns.length-1].no,startedAt:i,endedAt:0,status:"running",change:l};return s.calls=td([...s.calls,c],Jw),s.tools={...s.tools,calls:s.tools.calls+1,running:s.tools.running+1,byKind:{...s.tools.byKind,[a]:(s.tools.byKind[a]||0)+1}},s.turns=ed(s.turns,u=>({...u,calls:u.calls+1})),s.phase="tool",s}case"tool/result":{let r=t.message&&typeof t.message=="object"?t.message:{},o=String(r.toolCallId??t.callId??""),a=s.calls.findIndex(h=>h.id===o);if(a<0||s.calls[a].status!=="running")return s;let l=!!t.error||r.isError===!0,c={...s.calls[a],status:l?"error":"ok",endedAt:i};s.calls=s.calls.slice(),s.calls[a]=c;let u=Math.max(0,s.tools.running-1);s.tools={...s.tools,running:u,errors:s.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=s.files.paths.includes(d.path);s.files={count:s.files.count+(h?0:1),added:s.files.added+d.added,removed:s.files.removed+d.removed,paths:h?s.files.paths:td([...s.files.paths,d.path],jw)}}return s.turns=s.turns.map(h=>{if(h.no!==c.turn)return h;let p={...h,errors:h.errors+(l?1:0)};return d&&(p.files=eE(h.files,d),p.added=h.added+d.added,p.removed=h.removed+d.removed),p}),u===0&&(s.phase="thinking"),s}case"turn/end":{let r=t.reason&&typeof t.reason=="object"?t.reason.kind:void 0,o=tE.has(r)?"rework":"ok",a=s.turns[s.turns.length-1];if(a&&a.status==="running"&&(s.turns=ed(s.turns,l=>({...l,status:o,endedAt:i})),s.calls.some(l=>l.status==="running"&&l.turn===a.no))){let l=0;s.calls=s.calls.map(c=>c.status!=="running"||c.turn!==a.no?c:(l++,{...c,status:"error",endedAt:i})),s.tools={...s.tools,running:Math.max(0,s.tools.running-l),errors:s.tools.errors+l}}return s.phase="idle",s}default:return n}}function Af(n,e){let t=n;for(let i of e)t=nE(t,i);return t}function nd(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:n.tools.calls-n.tools.running>0?(n.tools.calls-n.tools.running-n.tools.errors)/(n.tools.calls-n.tools.running):1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:(()=>{let r=n.turns.filter(o=>o.status!=="running");return r.length?r.filter(o=>o.status==="ok").length/r.length:1})()}}var gt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},sd={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:gt.violet},reasoning:{zh:"推理",en:"REASONING",color:gt.violet},generating:{zh:"生成",en:"GENERATING",color:gt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:gt.amber}},iE=ku(),Ag=120,Rg=90,sE=[20,50,100,150,200,300,500,1e3,2e3],rE=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],Cg=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function rd(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function Rf(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function Pg(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Wt}`,n.fillStyle=gt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Ot}`,n.fillStyle=gt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Ot}`,n.fillStyle=o||gt.muted,n.fillText(r,e-36,39))}function qs(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Wt}`,n.fillStyle=gt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Ot}`,n.fillStyle=gt.dim,r==="left"&&n.fillText(s,e+a,t)}function Ig(n,e,t,i,s,r=96,o="",a=gt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Ot}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Ot}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function Lg(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Ot}`,n.fillStyle=gt.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),p=x=>t+s-s*mt(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),p(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let f=n.createLinearGradient(0,t,0,t+s);f.addColorStop(0,a),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),p(r[x])):n.moveTo(h(x),p(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function id(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),qs(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Ot}`,n.fillStyle=gt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Ot}`,n.fillStyle=gt.muted,n.fillText(l,e+20,t+s-14))}function oE(n,e,t,i){rd(n,e,t);let s=sd[i.phase]||sd.idle;Pg(n,e,"令牌流量","TOKEN FLOW",gt.cyan,`● ${s.zh} ${s.en}`,s.color),qs(n,36,122,"实时速率","LIVE RATE"),Ig(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",gt.cyan,104,"tok/s"),qs(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Ot}`,n.fillStyle=gt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=Cg(Math.max(20,...i.tpsHist)*1.15,sE);Lg(n,470,104,e-470-40,236,i.tpsHist,{color:gt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Ot}`,n.fillStyle=gt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;id(n,36,a,o,l,"输入","INPUT",Yt(c.miss+c.write),"未命中缓存 · MISS",gt.blue),id(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",Yt(c.hit),`命中率 ${zi(i.hitRate)}`,gt.green),id(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",Yt(c.output),`请求 ${c.requests}`,gt.cyan),id(n,36+(o+16)*3,a,o,l,"推理","REASONING",Yt(c.reasoning),"思考链 · THINKING",gt.violet),Rf(n,e,t,gt.cyan)}function gl(n,e,t,i,s,r,o,a,l){qs(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Ot}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Ot}`,n.fillStyle=gt.muted,n.fillText(a,e,t+112))}function aE(n,e,t,i){rd(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,gt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Wt}`,n.fillStyle=gt.text,n.shadowColor=gt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Ot}`,n.fillStyle=gt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${Wt}`;let b=n.measureText(_).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,b,40),n.strokeStyle=gt.amber,n.lineWidth=2,n.strokeRect(y+1,29,b-2,38),n.fillStyle=gt.amber,n.fillText(_,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Ot}`,n.fillStyle=gt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=sd[i.phase]||sd.idle,a=(e-80)/5,l=148;gl(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),gl(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,gt.text),gl(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${zi(i.toolSuccess)}`,gt.cyan),gl(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,gt.gold),gl(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,gt.blue);let c=330;qs(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,p=116,f=c+22,x=i.recent.slice(-u),m=u-x.length;for(let _=0;_<u;_++){let b=40+_*(h+d),y=x[_-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,f+1,h-2,p-2);continue}let w=y.status==="running"?gt.cyan:y.status==="error"?gt.red:Xo.has(y.kind)?gt.gold:gt.blue,S=n.createLinearGradient(0,f,0,f+p);S.addColorStop(0,w),S.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=S,n.fillRect(b,f,h,p),n.globalAlpha=1,n.fillStyle=w,n.fillRect(b,f+p-6,h,6);let v=ii[y.kind]||ii.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Ot}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),b+h/2,f+p/2-6)}let g=x[x.length-1];if(g){let _=ii[g.kind]||ii.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Wt}`,n.fillStyle=gt.text;let y=String(g.label||g.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${y}`,40,f+p+52),n.textAlign="right",n.font=`700 22px ${Ot}`,n.fillStyle=g.status==="running"?gt.cyan:g.status==="error"?gt.red:gt.green,n.fillText(b,e-40,f+p+52)}Rf(n,e,t,gt.cyan)}function lE(n,e,t,i){rd(n,e,t),Pg(n,e,"成本与上下文","COST & CONTEXT",gt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?gt.amber:gt.green),qs(n,36,122,"累计花费","TOTAL COST"),Ig(n,36,226,i.priced?Sn(i.cost):"—",gt.gold,90),n.font=`600 22px ${Ot}`,n.fillStyle=gt.muted,n.textAlign="left",n.fillText(`高峰 ${Sn(i.costPeak)} · 低谷 ${Sn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=Cg(Math.max(.01,...i.costHist)*1.15,rE);Lg(n,480,104,e-480-40,200,i.costHist,{color:gt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>Sn(d)}),n.font=`600 17px ${Ot}`,n.fillStyle=gt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;qs(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Ot}`,n.fillStyle=gt.text,n.fillText(i.window?`${Yt(i.ctx)} / ${Yt(i.window)} · ${zi(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?gt.red:i.ratio>=.6?gt.amber:gt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*mt(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;qs(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Ot}`,n.fillStyle=gt.green,n.fillText(i.priced?Sn(i.savings):"—",330,u+2),qs(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Ot}`,n.fillStyle=gt.text,n.fillText(zi(i.hitRate),e-36,u+2),Rf(n,e,t,gt.gold)}var cE={flow:oE,main:aE,cost:lE};function Dg(n,e,{demo:t=!1}={}){let i=new Qt;i.name="screens";let s=[],r=new Nt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),o=rt.screenR;for(let g of iE){let[_,b]=g.px,y=kt(_,b,(D,A,N)=>rd(D,A,N),{anisotropy:8}),w=new Jt({map:y.tex,name:`screen-${g.id}`,toneMapped:!1});w.color.setScalar(1.25);let S=new ut(Lt(qe.cx,qe.cz,o,g.a0,g.a1,g.y0,g.y1,48,!0),w);S.name=`screen-${g.id}`,S.userData.screenId=g.id,i.add(S);let v=.05/o,M=new ut(Lt(qe.cx,qe.cz,o+.015,g.a0-v,g.a1+v,g.y0-.05,g.y1+.05,48,!0),r);M.name=`screen-bezel-${g.id}`,M.layers.set(rn),i.add(M),s.push({def:g,tex:y,sig:"",draw:cE[g.id],panel:S})}let a=new Array(Ag).fill(0),l=new Array(Rg).fill(0),c=0,u=0,d=0,h=0,p=0,f=!1;function x(g){let _=g.state,b=g.live||{},y=b.phase&&b.phase!=="idle"?b.phase:_?_.phase:"idle",w=_?_.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},S=_?nd(_):{hitRate:0,toolSuccess:1,contextRatio:0},v=_?_.turns:[];return{demo:t,phase:y,tps:g.tps||0,peakTps:h,tpsHist:a,costHist:l,totals:w,hitRate:S.hitRate,toolSuccess:S.toolSuccess,model:_?_.model:"",effort:_?_.effort:"",turn:_?_.turnCount:0,ok:v.filter(M=>M.status==="ok").length,rework:v.filter(M=>M.status==="rework").length,calls:_?_.tools.calls:0,running:_?_.tools.running:0,files:_?_.files.count:0,added:_?_.files.added:0,removed:_?_.files.removed:0,requests:w.requests,recent:_?_.calls:[],peak:!!g.peak,priced:!_||!_.model||!!vs(_.provider,_.model),cost:w.cost,costPeak:w.costPeak,costOff:w.costOffPeak,savings:w.savings,ctx:_?_.contextTokens:0,window:_?_.contextWindow:0,ratio:S.contextRatio||0}}function m(g,_){if(g==="flow"){let b=_.totals;return`${_.phase}|${Math.round(_.tps*2)}|${b.miss+b.write}|${b.hit}|${b.output}|${b.reasoning}|${b.requests}|${p>0?c:"flat"}|${Math.round(_.peakTps)}`}if(g==="main"){let b=_.recent[_.recent.length-1];return`${_.model}|${_.effort}|${_.phase}|${_.turn}|${_.ok}|${_.rework}|${_.calls}|${_.running}|${_.files}|${_.added}|${_.removed}|${_.requests}|${_.recent.length}|${b?`${b.id}:${b.status}`:""}|${Math.round(_.toolSuccess*1e3)}`}return`${_.cost.toFixed(5)}|${_.costPeak.toFixed(5)}|${_.savings.toFixed(5)}|${_.ctx}|${_.window}|${_.peak}|${_.requests}|${l[Rg-1].toFixed(5)}|${Math.round(_.hitRate*1e3)}`}return{root:i,update(g,_,b){c+=g,u+=g,d+=g;let y=b.tps||0;h=Math.max(h,y),c>=.5&&(c=0,a.shift(),a.push(y),p=y>.5?Ag:Math.max(0,p-1));let w=b.state?b.state.totals.cost:0;if(!f&&b.state&&(l.fill(w),f=!0),u>=2&&(u=0,l.shift(),l.push(w)),d<.5)return;d=0;let S=x(b);for(let v of s){let M=m(v.def.id,S);M!==v.sig&&(v.sig=M,v.tex.redraw((D,A,N)=>v.draw(D,A,N,S)))}},reset(){a.fill(0),l.fill(0),h=0,p=0,f=!1;for(let g of s)g.sig=""}}}var _r=16,uE=.004,Cf=.06,od=new Ue(4164863),Ng=new Ue(4641535),Og=new Ue(16762218),dE=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${_r}];
uniform float uOffset[${_r}];
uniform vec3 uColor[${_r}];
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
}`,hE=`
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
}`;function fE(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=Cf/2,p=r[0]-u*(s===0?0:h),f=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(Cf/2),_=u*(Cf/2),b=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),w=[[p-g,f-_,b,-1],[p+g,f+_,b,1],[x+g,m+_,y,1],[x-g,m-_,y,-1]];for(let S of[0,1,2,0,2,3]){let v=w[S];t.pos.push(v[0],uE,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var Fg=n=>[n.x,n.z];function Ug(){let n={},e=[],t=[],i=(m,g,_)=>{n[m]=t.length,e.push(g),t.push(_)},s=[ns.x,ns.z],r=(m,g,_)=>[Fg(ki(m,g)),Fg(ki(m,_))];i("fuel",Ng,[[-7.45,-.7],[-4.6,-.7]]),i("feed",od,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,od,r(hf(m),.95,2.12));i("lock",Ng,r(qr,.95,2.1)),i("unload",Og,r(Ko,.95,2.1)),i("out",Og,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Ut;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",od,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>fE(m,g,a));let l=new Ht;l.setAttribute("position",new xt(a.pos,3)),l.setAttribute("aS",new xt(a.s,1)),l.setAttribute("aX",new xt(a.x,1)),l.setAttribute("aChan",new xt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(_r),u=new Float32Array(_r),d=new Float32Array(_r),h=new Float32Array(_r),p=[];for(let m=0;m<_r;m++)p.push((e[m]||od).clone());let f=new en({name:"floor-channels",vertexShader:dE,fragmentShader:hE,uniforms:Tu.merge([Je.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:p}}]),transparent:!0,blending:Fo,blendSrc:cr,blendDst:ur,blendSrcAlpha:Fc,blendDstAlpha:cr,depthWrite:!1,fog:!0});f.uniforms.uLevel.value=c,f.uniforms.uOffset.value=u,f.uniforms.uColor.value=p;let x=new ut(l,f);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(rn),d.fill(.8),{root:x,ids:n,set(m,g,_){let b=n[m];b!=null&&(h[b]=g,_!=null&&(d[b]=_))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var yr=.3,If=.65,pE=Math.PI*2,Zo=.16/rt.screenR,Pf=rt.top+.05,ad=rt.back+.05,kg=.1;function ld(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var Bg=[ld("media-wall",12.36,ad,rt.a0-Zo,rt.a1+Zo,0,Pf),ld("media-modules",11.78,ad,rt.a0-Zo,rt.a1+Zo,0,2.34),ld("media-cap-right",11.78,ad,rt.a0-Zo,rt.a0,0,Pf),ld("media-cap-left",11.78,ad,rt.a1,rt.a1+Zo,0,Pf)],Lf=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+pE:t};function cd(n,e,t){n.x=qe.cx+t*Math.cos(e),n.z=qe.cz-t*Math.sin(e)}var Fn=new R,zg=new R,Hg=new R,On=new R;function Kr(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-qe.cx,s=e.z-qe.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=Lf(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return Fn.copy(e).applyMatrix4(n.inv),Fn.x>=n.min.x-t&&Fn.x<=n.max.x+t&&Fn.z>=n.min.z-t&&Fn.z<=n.max.z+t&&Fn.y>=n.min.y-t&&Fn.y<=n.max.y+t}function Gg(n,e,t){if(n.kind==="sector"){let u=e.x-qe.cx,d=e.z-qe.cz,h=Math.max(.001,Math.hypot(u,d)),p=Lf(u,d),f=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(p-(n.a0-f)),_=h*(n.a1+f-p),b=n.y1+t-e.y,y=Math.min(x,m,g,_,b);y===x?cd(e,p,Math.max(0,n.r0-t-1e-4)):y===m?cd(e,p,n.r1+t+1e-4):y===g?cd(e,n.a0-(t+1e-4)/h,h):y===_?cd(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}Fn.copy(e).applyMatrix4(n.inv);let s=Fn.x-(n.min.x-t),r=n.max.x+t-Fn.x,o=Fn.z-(n.min.z-t),a=n.max.z+t-Fn.z,l=n.max.y+t-Fn.y,c=Math.min(s,r,o,a,l);c===s?Fn.x=n.min.x-t-1e-4:c===r?Fn.x=n.max.x+t+1e-4:c===o?Fn.z=n.min.z-t-1e-4:c===a?Fn.z=n.max.z+t+1e-4:Fn.y=n.max.y+t+1e-4,e.copy(Fn).applyMatrix4(n.mat)}function mE(n,e,t,i,s){zg.copy(e).applyMatrix4(n.inv),Hg.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=zg[a],d=Hg[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,p=(c-u)/d;if(h>p&&([h,p]=[p,h]),r=Math.max(r,h),o=Math.min(o,p),r>o)return 1/0}return r}function Vg(n,e,t,i){let s=n.x-qe.cx,r=n.z-qe.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function Wg(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new St,i=new ui,s=r=>{if(r.userData&&r.userData.solid){let o=new St().copy(r.matrixWorld).invert(),a=new ui;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(On.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function Xg(n=[]){let e=[...Bg,...n],t=[];function i(u,d,h=null){for(let p of e)if(p!==h&&Kr(p,u,d))return p;return null}function s(u,d=null){Kh(u,d);for(let h=0;h<4;h++){let p=!1;for(let f of e)Kr(f,u,yr)&&(Gg(f,u,yr),p=!0);if(!p)return u;Kh(u,d)}return d&&fr(d)&&!i(d,yr-.001)&&u.copy(d),u}function r(u,d=If){for(let h=0;h<3;h++){let p=!1;for(let f of e)f.block==="ray"&&Kr(f,u,d)&&(Gg(f,u,d),p=!0);if(!p)break}return u}function o(u,d){let h=1/0;Vg(u,d,Vn.r,t);for(let p of t)h=Math.min(h,p);return d.y>1e-9?h=Math.min(h,(Vn.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(Vn.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,p=yr,f=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=kg;m<x;g+=kg){let _=Math.min(g,x);if(On.copy(u).addScaledVector(d,_),l(On,p,u)){let b=m,y=_;for(let w=0;w<7;w++){let S=(b+y)/2;On.copy(u).addScaledVector(d,S),l(On,p,u)?y=S:b=S}x=b;break}m=_}if(!f)return Math.max(0,x);On.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!Kr(g,On,p)||Kr(g,u,0))continue;let _=mE(g,u,d,x,p);_<x&&(x=_)}return Math.max(0,x)}function l(u,d,h){for(let p of e)if(p.block==="ray"&&Kr(p,u,d)&&!Kr(p,h,d))return!0;return!1}function c(u,d,h=200){let p=h;if(d.y<-1e-6){let f=-u.y/d.y;f>0&&f<p&&(On.copy(u).addScaledVector(d,f),pm(On.x,On.z)<0&&fm(On.x,On.z)>0&&(f=(-Ct.depth-u.y)/d.y),f>0&&f<p&&(p=f))}if(d.y>1e-6){let f=(qe.h-u.y)/d.y;f>0&&f<p&&(p=f)}for(let f of[qe.r,rt.screenR,rt.back]){Vg(u,d,f,t);for(let x of t)if(!(x>=p)){if(On.copy(u).addScaledVector(d,x),f!==qe.r){let m=Lf(On.x-qe.cx,On.z-qe.cz);if(m<rt.a0||m>rt.a1||On.y<0||On.y>rt.top)continue}else if(On.y<0||On.y>qe.h)continue;p=x}}return p<h?p:1/0}return{get solids(){return e},setObjects(u){e=[...Bg,...u||[]]},contains:(u,d=yr)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var gE={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"}},xE={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},_E=.15;function yE(n,e){n.updateMatrixWorld(!0);let t=new Pi,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(rn),i+=1))}),i}var vE=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5];function qg(n,e,{environment:t=!0,demo:i=!1,look:s=mr,brightness:r=ln.initial}={}){let o=new Cr;o.background=null;let a=rf(s),l=mt(r,ln.min,ln.max),c=t?n:null,u=xE[e]||null,d=c?u:null,h=d?ym(c,d):null,{M:p,tex:f}=lm(e),x=Fm(p,f,e,{renderer:c,look:a,reflection:h,beamTarget:new R(dn.x,3,dn.z)});function m(){o.environment=x.envTexture,o.environmentIntensity=a.envIntensity}m();let g=gg(f),_=qm(p),b=tg(p),y=ug(p),w=dg(p,g),S=_g(p),v=mg(p,S),M=Dg(p,null,{demo:i}),D=Ug(),A=new Qt;A.name="wafers",o.add(x.root,D.root,M.root,_.root,b.root,y.root,w.root,v.root,g.root,A);let N=bg({cell:y,stations:w,stocker:v,engine:b,wafers:S,root:A}),F=u?yE(o,_E):0,B={frame:0,matrix:new St,proj:new St,ready:!1},I=Wg(o),Y=[];for(let me of[..._.hover,...b.hover,...y.hover,...w.list.flatMap(Re=>Re.hover),...v.hover])me.object.userData.hoverId=me.id,Y.push(me.object);let Z=[{id:"tank",anchor:_.anchors.tank},{id:"engine",anchor:b.anchors.engine},{id:"robot",anchor:y.anchors.robot.clone().setY(1.75)},...w.list.map(me=>({id:`station:${me.kind}`,anchor:me.anchor})),{id:"loadport",anchor:v.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:v.anchors.stocker.clone().setY(1.25)}],G={phase:"idle",tps:0,balance:null,currency:"CNY"},$={state:null,live:G,tps:0,peak:!1},z={activity:0,tps:0,model:"",phase:"idle"},X=null,se=0,Se=!1,Oe=0,Q=0,ve=0,Ee=1,ie=Xs(Date.now());function xe(){ie=Xs(Date.now());let me=X?vs(X.provider,X.model):null,Re=typeof G.balance=="number"?G.balance:null,oe=G.currency==="USD"?"$":"¥",U=[i?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(Re==null)U.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),U.push({text:"余额不可用 · balance unavailable",size:28,color:"#8c97ad",gap:56});else{U.push({text:`${oe} ${Re.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let W=G.currency==="USD"?0:Qu(Re,me,ie);U.push({text:me&&W?`≈ ${Yt(W)} tokens · ${me.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}U.push({text:ie?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:ie?"#ffb020":"#34d17a",weight:700,gap:72}),_.setReadout(U)}function Le(){let me=typeof G.balance=="number"?G.balance:null;if(me==null)return .5;Oe=Math.max(Oe,me);let Re=vE.find(oe=>oe>=Oe*1.25)||Oe*1.25;return mt(me/Re,0,1)}function ht(me,Re,oe){let U=N.activity();D.set("fuel",.1+.9*Re,.7+Q/28),D.set("feed",U.inbound>0?1:.1+.55*Re,1.5),D.set("lock",U.inbound>0?.9:.08,-1.4);for(let W of w.list)D.set(`spoke:${W.index}`,W.active?1:.06,1.2);D.set("unload",U.outbound>0?.9:.08,1.4),D.set("out",U.outbound>0||U.stocker?.9:.08,1.4),D.set("ring",U.robot?.75:oe!=="idle"?.4:.22,.8),D.update(me)}function Ve(me){return me==="reasoning"||me==="generating"||me==="thinking"?.35+.65*mt(Q/70,0,1):me==="tool"?.2:0}return{scene:o,key:x.key,presets:gE,labelAnchors:Z,solids:I,get post(){return{...a.post,exposure:a.exposure*l}},getLook:()=>a.id,setLook(me){let Re=rf(me);return Re===a?!1:(a=Re,x.setLook(a),m(),!0)},getBrightness:()=>l,setBrightness(me){l=mt(Number(me)||ln.initial,ln.min,ln.max)},setState(me){me&&(X&&me.tools.errors>se&&(Se=!0),se=me.tools.errors,X=me,N.sync(me),Ee=Math.max(Ee,.45))},setLive(me){me&&Object.assign(G,me)},busy(){return N.busy()||G.phase&&G.phase!=="idle"||Q>1},update(me,Re){Q=Xt(Q,G.tps||0,6,me),Ee+=me,Ee>=.5&&(Ee=0,xe());let oe=X?X.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},U=G.phase&&G.phase!=="idle"?G.phase:X?X.phase:"idle",W=Q>.5?mt(.2+Q/90,0,1):0;ve=Xt(ve,Ve(U),1.6,me),z.activity=ve,z.tps=Q,z.model=X?X.model:"",z.phase=U,x.update(me,Re,z),_.update(me,Re,{level:Le(),flow:W,peak:ie}),b.update(me,Re,{phase:U,tps:Q,ctx:X&&X.contextWindow>0?X.contextTokens/X.contextWindow:0,counters:{miss:oe.miss,hit:oe.hit,output:oe.output,reasoning:oe.reasoning,cost:oe.cost},errorPulse:Se}),Se=!1,N.update(me,Re),g.update(me),ht(me,W,U),$.state=X,$.tps=Q,$.peak=ie,M.update(me,Re,$)},prerender(me){!h||(B.frame+=1,(B.ready&&B.matrix.equals(me.matrixWorld)&&B.proj.equals(me.projectionMatrix)||d.every>1)&&B.ready&&B.frame%2===1)||(h.update(o,me),B.matrix.copy(me.matrixWorld),B.proj.copy(me.projectionMatrix),B.ready=!0)},reflectionInfo:()=>u?{...u,trimmed:F,active:!!h}:null,hoverTargets(){return v.hoverObjects(Y.slice())},focus:me=>N.focus(me),stats:()=>N.stats(),dispose(){N.dispose(),v.dispose(),x.dispose(),om(o),S.dispose(),h&&h.dispose();for(let me of Object.values(p))me&&me.dispose&&me.dispose();for(let me of Object.values(f))me&&me.dispose&&me.dispose()}}}var bE=new Us(-1,1,1,-1,0,1),Df=class extends Ht{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}},ME=new Df,ud=class{constructor(e){this._mesh=new ut(ME,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var SE=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,wE=`
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
}`,EE=`
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
}`,TE=`
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
}`,AE=`
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
}`;function $g(n,e,t={}){let i=new qn(Math.max(1,n),Math.max(1,e),{type:di,minFilter:xn,magFilter:xn,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function dd(n,e,t={}){return new Io({vertexShader:SE,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function Yg(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new ud(null),r=$g(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push($g(2,2));let a=dd(wE,{tSrc:{value:null},uTexel:{value:new ye},uThreshold:{value:1},uKnee:{value:.45}}),l=dd(EE,{tSrc:{value:null},uTexel:{value:new ye}}),c=dd(TE,{tSrc:{value:null},uTexel:{value:new ye},uWeight:{value:1}},{blending:Gn,transparent:!0}),u=dd(AE,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,p){n.setRenderTarget(p),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,p){r.setSize(Math.max(1,h),Math.max(1,p));let f=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(p/2));for(let m of o)m.setSize(f,x),f=Math.max(1,Math.floor(f/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:p,knee:f,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),p!=null&&(a.uniforms.uThreshold.value=p),f!=null&&(a.uniforms.uKnee.value=f),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,p,f=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,p),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=f,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var hd=85*Math.PI/180,RE=1.65,CE=3.2,PE=2.6,IE={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Kg(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ie=>ie,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new ci(0,0,0,"YXZ"),h=new Set,p=!1,f=new R,x=new R,m=0,g=null,_=null,b=0,y=new R,w=new R,S=new R,v=new R,M=new R,D=new Dr,A=new ye;function N(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function F(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=mt(d.x,-hd,hd),N()}function B(ie){return y.copy(n.position),M.copy(y).add(ie),n.position.copy(M),s(n.position,y),n.position.distanceTo(M)}let I=()=>{b=performance.now(),a&&a()},Y=()=>{o&&o(),I()};function Z(ie){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let xe=ie.button===2||ie.button===0&&ie.shiftKey?"pan":ie.button===0?"look":null;if(xe){g={id:ie.pointerId,x:ie.clientX,y:ie.clientY,mode:xe},_=null;try{e.setPointerCapture(ie.pointerId)}catch{}Y()}}function G(ie){if(!l||!g||ie.pointerId!==g.id)return;let xe=ie.clientX-g.x,Le=ie.clientY-g.y;g.x=ie.clientX,g.y=ie.clientY;let ht=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Ve=2.4/ht;c+=xe*Ve,u=mt(u+Le*Ve,-hd,hd),N()}else{let Ve=6/ht;S.set(1,0,0).applyQuaternion(n.quaternion),v.copy(S).multiplyScalar(-xe*Ve),v.y+=Le*Ve,B(v)}I()}function $(ie){if(!(!g||ie.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ie.pointerId)}catch{}I()}}function z(ie){if(!l)return;ie.preventDefault();let xe=ie.deltaMode===1?16:ie.deltaMode===2?400:1;m=mt(m+mt(-ie.deltaY*xe*.006,-4,4),-8,8),_=null,Y()}function X(ie){if(!l)return;let xe=e.getBoundingClientRect();A.set((ie.clientX-xe.left)/Math.max(1,xe.width)*2-1,-((ie.clientY-xe.top)/Math.max(1,xe.height))*2+1),n.updateMatrixWorld(),D.setFromCamera(A,n);let{origin:Le,direction:ht}=D.ray;if(ht.y>-.02)return;let Ve=(r-Le.y)/ht.y;if(Ve<=0||Ve>60)return;let me=new R().copy(ht).multiplyScalar(Ve).add(Le),Re=me.x-n.position.x,oe=me.z-n.position.z,U=Math.hypot(Re,oe);U>1.5&&(me.x-=Re/U*1.2,me.z-=oe/U*1.2),me.y=r+RE;let W=me.distanceTo(n.position);_={t:0,d:mt(W/6,.45,1.6),p0:n.position.clone(),p1:me},Y()}function se(ie,xe){if(!l||ie.ctrlKey||ie.metaKey||ie.altKey)return;let Le=ie.target;if(Le&&(Le.tagName==="INPUT"||Le.tagName==="TEXTAREA"||Le.tagName==="SELECT"||Le.isContentEditable))return;p=!!ie.shiftKey;let ht=IE[ie.code];ht&&(ie.preventDefault(),ie.stopPropagation(),xe?h.add(ht):h.delete(ht),xe?(_=null,Y()):I())}let Se=ie=>se(ie,!0),Oe=ie=>se(ie,!1),Q=()=>{h.clear(),p=!1},ve=ie=>{l&&ie.preventDefault()};e.addEventListener("pointerdown",Z),e.addEventListener("pointermove",G),e.addEventListener("pointerup",$),e.addEventListener("pointercancel",$),e.addEventListener("wheel",z,{passive:!1}),e.addEventListener("dblclick",X),e.addEventListener("contextmenu",ve),i&&(i.addEventListener("keydown",Se),i.addEventListener("keyup",Oe),i.addEventListener("blur",Q));function Ee(ie){if(!l)return!1;let xe=!1;if(_){_.t+=ie;let Le=Oi(Math.min(1,_.t/_.d));v.lerpVectors(_.p0,_.p1,Le).sub(n.position),(B(v)>.02||_.t>=_.d)&&(_=null),xe=!0}if(x.set(0,0,0),h.size&&(w.set(-Math.sin(c),0,-Math.cos(c)),S.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(w),h.has("b")&&x.sub(w),h.has("r")&&x.add(S),h.has("l")&&x.sub(S),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(CE*(p?PE:1))),f.set(Xt(f.x,x.x,9,ie),Xt(f.y,x.y,9,ie),Xt(f.z,x.z,9,ie)),f.lengthSq()>1e-6?(B(v.copy(f).multiplyScalar(ie)),xe=!0):f.set(0,0,0),Math.abs(m)>.001){let Le=m*(1-Math.exp(-9*ie));m-=Le,n.getWorldDirection(w),B(v.copy(w).multiplyScalar(Le))>.02&&(m=0),xe=!0}else m=0;return xe&&I(),xe}return{get enabled(){return l},enable(){l=!0,F()},disable(){l=!1,g=null,_=null,h.clear(),f.set(0,0,0),m=0},sync:F,active(){return l&&(!!g||!!_||h.size>0||Math.abs(m)>.001||f.lengthSq()>1e-4||performance.now()-b<300)},update:Ee,dispose(){e.removeEventListener("pointerdown",Z),e.removeEventListener("pointermove",G),e.removeEventListener("pointerup",$),e.removeEventListener("pointercancel",$),e.removeEventListener("wheel",z),e.removeEventListener("dblclick",X),e.removeEventListener("contextmenu",ve),i&&(i.removeEventListener("keydown",Se),i.removeEventListener("keyup",Oe),i.removeEventListener("blur",Q))}}}var Nf=["orbit","look"],Zr=["low","medium","high","ultra"],Jo=["auto",30,60,120,0],xl={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},LE=60,DE=30,Zg=150*(Math.PI/180),NE=.8,Jg=30,OE=.45,FE=.0013,UE=14,kE=7,BE=.25,zE=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,HE=/swiftshader|llvmpipe|softpipe|software|basic render/i;function GE(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(HE.test(t))return"low";if(zE.test(t))return"high"}catch{}return"medium"}function VE(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new Ht;return t.setAttribute("position",new xt(e,3)),t}function WE(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function jg(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c}=e,u=!!e.demo,d=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new Cu({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=GE(h.getContext()),f=xl[e.quality]?e.quality:p,x=Jo.includes(e.fps)?e.fps:"auto";h.setClearColor(Om,1),h.toneMapping=Xa,h.toneMappingExposure=1,h.outputColorSpace=Xn,h.shadowMap.type=Nr,h.shadowMap.autoUpdate=!1,h.info.autoReset=!1,h.debug.onShaderError=(H,Ie,Me,Xe)=>{let et=H.getShaderSource(Xe)||"",st=/#define SHADER_NAME (.*)/.exec(et),Rt=st&&st[1].trim()||"shader",ri=[H.getShaderInfoLog(Me),H.getShaderInfoLog(Xe),H.getProgramInfoLog(Ie)].map(md=>(md||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${Rt}" failed to compile
${ri}`);let vl=ri.split(`
`).find(md=>/error/i.test(md))||ri.split(`
`)[0]||"";r&&r("shader",`${Rt}: ${vl}`.slice(0,220))};let m=WE(h.getContext()),g=!1,_=h.domElement;_.className="dwp3d-gl",_.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",_.setAttribute("aria-hidden","true"),n.appendChild(_);let b=document.createElement("div");b.className="dwp3d-labels",n.appendChild(b);let y=new Bn(40,1,.2,9e3),w=new Bn(40,1,.2,9e3);y.layers.enable(rn),w.layers.enable(rn);let S=Xg(),v=new Du(y,_);v.enableDamping=!0,v.dampingFactor=.08,v.minDistance=.5,v.maxDistance=40,v.zoomToCursor=!1,v.maxPolarAngle=Zg,v.screenSpacePanning=!0,v.rotateSpeed=.7,v.zoomSpeed=.9,v.panSpeed=.8;let M=null,D=null,A=null,N=VE(),F=null,B=null,I=0,Y=0,Z=1,G=1,$=null,z="orbit",X=!1,se,Se=0,Oe=0,Q=0,ve=new R,Ee=new R,ie=[],xe=[],Le=!0,ht=!1,Ve=!1,me=!1,Re=0,oe=0,U=Vr.includes(e.look)?e.look:mr,W=mt(Number(e.brightness)||ln.initial,ln.min,ln.max),ne={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function K(){ne.casters.clear(),ne.pending=!1,!(!M||!h.shadowMap.enabled)&&(M.scene.updateMatrixWorld(!0),M.scene.traverse(H=>{H.castShadow&&(H.isMesh||H.isPoints||H.isLine)&&ne.casters.set(H,{m:H.matrixWorld.clone(),v:H.isInstancedMesh?H.instanceMatrix.version:0})}),h.shadowMap.needsUpdate=!0,ne.lastBake=oe,ne.bakes+=1)}function re(){if(!M||!h.shadowMap.enabled||oe<ne.next)return;ne.next=oe+.5;let H=!1;for(let[Me,Xe]of ne.casters){if(!Me.castShadow||!br(Me)){ne.casters.delete(Me),H=!0;continue}(!Me.matrixWorld.equals(Xe.m)||Me.isInstancedMesh&&Me.instanceMatrix.version!==Xe.v)&&(Me.castShadow=!1,ne.casters.delete(Me),H=!0)}M.scene.traverse(Me=>{Me.castShadow&&!ne.casters.has(Me)&&(Me.castShadow=!1)}),H&&(ne.pending=!0);let Ie=ne.bakes<4?.5:2;ne.pending&&oe-ne.lastBake>=Ie&&K()}function we(){D&&(D.dispose(),D=null),A&&(A.removeFromParent(),A.material.dispose(),A=null),M&&(M.dispose(),M=null),ne.casters.clear(),h.renderLists.dispose()}function O(){let H=xl[f];h.shadowMap.enabled=f!=="low",M=qg(h,f,{demo:u,look:U,brightness:W}),A=new wa(N,new Ao({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),A.name="hover-highlight",A.matrixAutoUpdate=!1,A.frustumCulled=!1,A.renderOrder=20,A.visible=!1,A.layers.set(rn),M.scene.add(A),D=Yg(h,{msaa:H.msaa,bloom:H.bloom}),ae(),G=1,ue(!0),F&&M.setState(F),B&&M.setLive(B),Tt(),S.setObjects(M.solids||[]),Q=0,ne.bakes=0,ne.next=oe+.5,K(),ee()}function ee(){if(!(!M||typeof h.compileAsync!="function"))try{M.scene.updateMatrixWorld(!0);let H=h.compileAsync(M.scene,w);H&&typeof H.catch=="function"&&H.catch(()=>{})}catch{}}function ae(){!D||!M||(M.post&&D.set(M.post),d&&D.set({grain:.006}))}let L=new ye;function Ke(H,Ie,Me,Xe){L.set(H.x-qe.cx,H.z-qe.cz),L.length()>Ie&&(L.setLength(Ie),H.x=qe.cx+L.x,H.z=qe.cz+L.y),H.y=mt(H.y,Me,Xe)}function ot(H){return Ke(H,Vn.targetR,Vn.targetYMin,Vn.targetYMax),S.keepClear(H,If),Ke(H,Vn.targetR,Vn.targetYMin,Vn.targetYMax),H}let _t=new R;function Ce(){let H=v.target;_t.copy(H),ot(H),(H.x!==_t.x||H.y!==_t.y||H.z!==_t.z)&&y.position.add(_t.subVectors(H,_t))}function _e(){let H=v.target,Ie=Math.max(.001,y.position.distanceTo(H)),Me=mt((Vn.yMin+.02-H.y)/Ie,-1,1),Xe=mt((Vn.yMax-.02-H.y)/Ie,-1,1);v.maxPolarAngle=Math.min(Zg,Math.acos(Me)),v.minPolarAngle=Math.min(Math.acos(Xe),v.maxPolarAngle)}let fe={len:0,pulled:!1,easing:!1},Be=new R;function C(){fe.len=0,fe.pulled=!1,fe.easing=!1}function E(H){let Ie=!1;if(z==="orbit"&&!$){let Me=v.target;Be.subVectors(y.position,Me);let Xe=Be.length();if(Xe>1e-4){Be.divideScalar(Xe);let et=Math.min(Xe,S.containerExit(Me,Be)-.02);et=Math.min(et,S.armLength(Me,Be,et,yr)),et=Math.max(et,Math.min(Xe,BE)),!fe.pulled||et<fe.len?fe.len=et:fe.len=Math.min(et,Xt(fe.len,et,kE,H)),fe.len>Xe-.001&&et>=Xe-1e-4&&(fe.len=Xe),fe.pulled=fe.len<Xe-1e-4,fe.easing=fe.pulled&&et>fe.len+.001,w.position.copy(Me).addScaledVector(Be,fe.len),Ie=!0}}Ie||(w.position.copy(y.position),C()),w.quaternion.copy(y.quaternion),w.updateMatrixWorld()}function q(){z==="orbit"&&!$&&fe.pulled&&(y.position.copy(w.position),C())}function be(){D&&D.setSize(Math.round(I*Z*G),Math.round(Y*Z*G))}function ue(H=!1){let Ie=Math.max(1,Math.floor(n.clientWidth)),Me=Math.max(1,Math.floor(n.clientHeight)),Xe=Math.min(typeof window<"u"&&window.devicePixelRatio||1,xl[f].dpr);!H&&Ie===I&&Me===Y&&Xe===Z||(I=Ie,Y=Me,Z=Xe,h.setPixelRatio(Xe),h.setSize(Ie,Me,!1),be(),y.aspect=w.aspect=Ie/Me,y.updateProjectionMatrix(),w.updateProjectionMatrix(),Q=0)}function De(H){let Ie=M?M.presets:null,Me=Ie&&(Ie[H]||Ie.overview)||{pos:[0,7,16],target:[0,2,-1]},Xe=new R().fromArray(Me.target),et=new R().fromArray(Me.pos),st=Me.mode==="look"?"look":"orbit";if(st==="orbit"){let Rt=mt(1.7/Math.max(.3,y.aspect),1,2.3);et.sub(Xe).multiplyScalar(Rt).add(Xe),Ke(et,Vn.r,Vn.yMin,Vn.yMax)}return{pos:et,target:Xe,mode:st}}function Ge(H,Ie){let Me=Ie.x-H.x,Xe=Ie.y-H.y,et=Ie.z-H.z;return{yaw:Math.atan2(-Me,-et),pitch:Math.atan2(Xe,Math.hypot(Me,et))}}let de=new ci(0,0,0,"YXZ"),pe=new R;function ze(H,Ie){de.set(Ie,H,0,"YXZ"),y.quaternion.setFromEuler(de)}function k(H){H!==z&&(q(),fn.log=0,z=H,H==="look"?(X=!1,v.enabled=!1,it.enable()):(it.disable(),v.enabled=!0),c&&c(H))}function ge(){let H=fr(y.position)==="hall";if(k("orbit"),!H){He("overview");return}y.getWorldDirection(pe),ot(v.target.copy(y.position).addScaledVector(pe,6)),_e(),v.update(),C()}function le(H){let{pos:Ie,target:Me,mode:Xe}=De(H);if($=null,k(Xe),y.position.copy(Ie),Xe==="look"){let et=Ge(Ie,Me);ze(et.yaw,et.pitch),it.sync()}else ot(v.target.copy(Me)),_e(),v.update();C()}function He(H,Ie=1.2){if(d){le(H);return}q(),fn.log=0;let{pos:Me,target:Xe,mode:et}=De(H);k(et),de.setFromQuaternion(y.quaternion,"YXZ");let st=Ge(Me,Xe);$={t:0,d:Ie,p0:y.position.clone(),p1:Me,yaw0:de.y,pitch0:de.x,yaw1:st.yaw,pitch1:st.pitch,target:Xe,mode:et}}let Pe=()=>{Re=performance.now()};function ke(){let H=$;if(!H)return;if($=null,z==="look"){it.sync();return}y.getWorldDirection(pe);let Ie=Math.max(1,y.position.distanceTo(H.target));ot(v.target.copy(y.position).addScaledVector(pe,Ie)),C()}v.addEventListener("start",()=>{ke(),Pe()}),v.addEventListener("change",Pe),v.addEventListener("end",Pe);let it=Kg(y,_,{keyTarget:n,clampPosition:(H,Ie)=>S.resolve(H,Ie),floorY:0,onStart:()=>{ke(),Pe()},onChange:Pe});function Tt(){for(let H of ie)H.el.remove();if(ie=[],!!M)for(let H of xe){let Ie=M.labelAnchors.find(et=>et.id===H.id);if(!Ie)continue;let Me=document.createElement("div");Me.className="dwp3d-label";let Xe=document.createElement("span");if(Xe.className="dwp3d-label-title",Xe.textContent=H.text,Me.appendChild(Xe),H.sub){let et=document.createElement("span");et.className="dwp3d-label-sub",et.textContent=H.sub,Me.appendChild(et)}b.appendChild(Me),ie.push({id:H.id,el:Me,anchor:Ie.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let ce=new R,tt=[],pt=[];function $e(H){H.shown!==!1&&(H.el.style.opacity="0",H.shown=!1)}function Bt(){if(Le){tt.length=0;for(let H of ie){if(ce.copy(H.anchor).project(w),!(ce.z<1&&Math.abs(ce.x)<1.05&&Math.abs(ce.y)<1.05)){$e(H);continue}H.sx=(ce.x*.5+.5)*I,H.sy=(-ce.y*.5+.5)*Y,H.dist=w.position.distanceTo(H.anchor),tt.push(H)}tt.sort((H,Ie)=>H.dist-Ie.dist),pt.length=0;for(let H of tt){H.w||(H.w=H.el.offsetWidth,H.h=H.el.offsetHeight);let Ie={x0:H.sx-H.w/2-3,x1:H.sx+H.w/2+3,y0:H.sy-H.h-3,y1:H.sy+7};if(pt.some(et=>Ie.x0<et.x1&&Ie.x1>et.x0&&Ie.y0<et.y1&&Ie.y1>et.y0)){$e(H);continue}pt.push(Ie);let Me=mt(1.45-H.dist/24,.3,1).toFixed(2),Xe=`translate(${H.sx.toFixed(1)}px, ${H.sy.toFixed(1)}px) translate(-50%, -100%)`;Xe!==H.tf&&(H.el.style.transform=Xe,H.tf=Xe),H.shown!==Me&&(H.el.style.opacity=Me,H.shown=Me)}}}let jt=new Dr;jt.layers.enable(rn);let Wn=new ye,si=null,Ti=!1,bs=0,Ms=null,Ys=null,wn=null,Hi=!1;function _i(H){if(!M)return null;Wn.set(H.x/I*2-1,-(H.y/Y)*2+1),w.updateMatrixWorld(),jt.setFromCamera(Wn,w);let Ie=jt.intersectObjects(M.hoverTargets(),!0);for(let Me of Ie)for(let Xe=Me.object;Xe;Xe=Xe.parent)if(Xe.userData&&Xe.userData.hoverId)return{id:Xe.userData.hoverId,obj:Xe,distance:Me.distance};return null}let fn={log:0,anchor:new R,anchored:!1},rs=new R;function jr(H){let Ie=_i(H),Me=jt.ray,Xe=S.surfaceHit(Me.origin,Me.direction);return Ie&&Ie.distance<Xe&&(Xe=Ie.distance),Number.isFinite(Xe)?(fn.anchor.copy(Me.origin).addScaledVector(Me.direction,Xe),!0):!1}function Ks(H){if(!fn.log)return;let Ie=fn.log*(1-Math.exp(-UE*H));Math.abs(fn.log-Ie)<.001&&(Ie=fn.log),fn.log-=Ie;let Me=v.target,Xe=y.position,et=Math.max(.001,Xe.distanceTo(Me)),st=Math.exp(Ie);if(Ie<0){let Rt=fn.anchored?fn.anchor:Me;if(st=Math.max(st,NE/et,OE/Math.max(.001,Xe.distanceTo(Rt))),st>=1){fn.log=0;return}Xe.sub(Rt).multiplyScalar(st).add(Rt),Rt!==Me&&Me.sub(Rt).multiplyScalar(st).add(Rt)}else{rs.subVectors(Xe,Me).divideScalar(et);let Rt=S.containerExit(Me,rs)-.02,ri=S.armLength(Me,rs,Math.min(Jg,Rt),yr,!1);if(st=Math.min(st,Jg/et,Math.max(1,(ri+.5)/et)),st<=1){fn.log=0;return}Xe.sub(Me).multiplyScalar(st).add(Me)}}let Ai=H=>{if(z!=="orbit"||!M||!v.enabled)return;H.preventDefault(),H.stopPropagation();let Ie=H.deltaMode===1?16:H.deltaMode===2?400:1,Me=mt(H.deltaY*Ie*FE,-.6,.6);Me&&(ke(),Pe(),fn.log&&Math.sign(Me)!==Math.sign(fn.log)&&(fn.log=0),Me<0&&(q(),fn.anchored=!X&&jr(Zs(H))),fn.log=mt(fn.log+Me,-1.2,1.2))};n.addEventListener("wheel",Ai,{passive:!1,capture:!0});let Zs=H=>{let Ie=_.getBoundingClientRect();return{x:H.clientX-Ie.left,y:H.clientY-Ie.top}},Te=H=>{si=Zs(H),Ti=!0,wn&&Math.hypot(si.x-wn.x,si.y-wn.y)>5&&(Hi=!0)},bt=()=>{si=null,Ti=!0},Rn=H=>{wn={...Zs(H),t:performance.now()},Hi=!1,Pe(),_.style.cursor="grabbing"},os=H=>{let Ie=Zs(H);if(z==="orbit"&&wn&&!Hi&&performance.now()-wn.t<450&&i){let Me=_i(Ie);i(Me?Me.id:null)}wn=null,Hi=!1,Ti=!0,Pe(),_.style.cursor=Ms?"pointer":"grab"};_.addEventListener("pointermove",Te),_.addEventListener("pointerleave",bt),_.addEventListener("pointerdown",Rn),_.addEventListener("pointerup",os);function br(H){let Ie=H;for(;Ie.parent;)Ie=Ie.parent;return!!M&&Ie===M.scene}let as=new R,T=new R,V=new _n,j=new St,J=new ui;function te(H){if(!A)return;let Ie=Ys;if(!Ie||!br(Ie)){A.visible=!1;return}Ie.updateWorldMatrix(!0,!1),Ie.geometry?(Ie.geometry.boundingBox||Ie.geometry.computeBoundingBox(),Ie.geometry.boundingBox.getSize(as),Ie.geometry.boundingBox.getCenter(T),as.multiplyScalar(1.06).addScalar(.03),j.compose(T,V.identity(),as),A.matrix.multiplyMatrices(Ie.matrixWorld,j)):(J.setFromObject(Ie),J.getSize(as).multiplyScalar(1.06).addScalar(.03),J.getCenter(T),A.matrix.compose(T,V.identity(),as)),A.matrixWorldNeedsUpdate=!0,A.material.opacity=d?.85:.62+.28*(.5+.5*Math.sin(H*5)),A.visible=!0}function We(){return x!=="auto"?x:!!$||X||!!wn||!!fn.log||fe.easing||it.active()||performance.now()-Re<900||M&&M.busy()?LE:DE}let Qe=0,Fe=!1,Ze=0,at=0,wt=0,nt={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},lt=!0,Dt=typeof document>"u"||!document.hidden;function pn(){nt.frames=0,nt.ticks=0,nt.t=0,nt.capTime=0,nt.cpu=0}function sn(){let H=nt.frames/nt.t,Ie=nt.ticks/nt.t,Me=nt.capTime/nt.t,Xe=Math.max(1,Math.min(Me>0?Me:Ie,Ie)),et=H<Xe*.85,st=xl[f];et?(nt.good=0,nt.slow+=1,nt.slow>=2&&G>st.minScale&&(G=Math.max(st.minScale,Math.round((G-.1)*100)/100),nt.slow=0,be())):(nt.slow=0,H>=Xe*.95&&(nt.good+=1),nt.good>=5&&G<1&&(G=Math.min(1,Math.round((G+.05)*100)/100),nt.good=0,be())),m.poll(),s&&s({fps:H,target:Xe,slow:et,scale:G,minScale:st.minScale,cpuMs:nt.frames?nt.cpu/nt.frames:0,gpuMs:g?m.take():null,gpuTimer:m.supported,calls:nt.calls,triangles:nt.tris,width:Math.round(I*Z*G),height:Math.round(Y*Z*G),cap:x}),pn()}function Kt(H){if(!Fe)return;Qe=requestAnimationFrame(Kt);let Ie=Math.max(0,(H-Ze)/1e3);Ze=H,nt.ticks+=1,nt.t+=Ie;let Me=We();if(nt.capTime+=Me*Ie,nt.t>=1&&sn(),Me>0){let st=1e3/Me,Rt=H-at;if(Rt<st-1.5)return;at=Rt<st*2?at+st:H}else at=H;let Xe=performance.now(),et=Math.min(.1,Math.max(0,(H-wt)/1e3));if(wt=H,oe+=et,$){$.t+=et;let st=Oi(Math.min(1,$.t/$.d));if(y.position.lerpVectors($.p0,$.p1,st),ze(rm($.yaw0,$.yaw1,st),Si($.pitch0,$.pitch1,st)),$.t>=$.d){let Rt=$;$=null,Rt.mode==="look"?it.sync():v.target.copy(Rt.target)}}else if(X&&M){if(Se-=et,Se<=0){Se=.4;let st=M.focus(ve);st||ve.fromArray(M.presets.overview.target),st!==se&&(se=st,Oe=1.6,o&&o(st))}if(Ee.subVectors(y.position,v.target),v.target.lerp(ve,1-Math.exp(-2.4*et)),Oe>0){if(Oe-=et,!Q){let st=De("overview");Q=st.pos.distanceTo(st.target)}Ee.setLength(Xt(Ee.length(),se?6.8:Q,2,et))}y.position.copy(v.target).add(Ee)}if($||(z==="orbit"?(Ks(et),_e(),v.update(),Ce()):it.update(et)),E(et),M&&M.update(et,oe,w),bs-=et,Ti&&bs<=0){bs=.08,Ti=!1;let st=si&&!wn?_i(si):null,Rt=st?st.id:null;Ys=st?st.obj:null,wn||(_.style.cursor=Rt?"pointer":"grab"),(Rt||Ms)&&(Ms=Rt,t&&t(Rt?{id:Rt,x:si.x,y:si.y}:null))}te(oe),re(),h.info.reset(),g&&m.begin(),D&&M&&(w.updateMatrixWorld(),M.prerender(w),D.render(M.scene,w,d?0:oe)),g&&m.end(),nt.calls=h.info.render.calls,nt.tris=h.info.render.triangles,Bt(),nt.frames+=1,nt.cpu+=performance.now()-Xe,me||(me=!0,l&&l())}function mn(){let H=!ht&&!Ve&&lt&&Dt&&I>1&&Y>1;H&&!Fe?(Fe=!0,Ze=at=wt=performance.now(),pn(),Qe=requestAnimationFrame(Kt),a&&a(!0)):!H&&Fe&&(Fe=!1,cancelAnimationFrame(Qe),a&&a(!1))}let ct=new ResizeObserver(()=>{ue(),mn()});ct.observe(n);let En=typeof IntersectionObserver=="function"?new IntersectionObserver(H=>{lt=H.some(Ie=>Ie.isIntersecting),mn()}):null;En&&En.observe(n);let zt=()=>{Dt=!document.hidden,mn()};document.addEventListener("visibilitychange",zt);let ls=H=>{H.preventDefault(),Ve=!0,mn(),r&&r("context-lost")},Cn=()=>{Ve=!1,we(),O(),mn()};_.addEventListener("webglcontextlost",ls),_.addEventListener("webglcontextrestored",Cn);function Mr(){if(!ht){ht=!0,Fe=!1,cancelAnimationFrame(Qe),ct.disconnect(),En&&En.disconnect(),document.removeEventListener("visibilitychange",zt),_.removeEventListener("pointermove",Te),_.removeEventListener("pointerleave",bt),_.removeEventListener("pointerdown",Rn),_.removeEventListener("pointerup",os),_.removeEventListener("webglcontextlost",ls),_.removeEventListener("webglcontextrestored",Cn),n.removeEventListener("wheel",Ai,{capture:!0}),v.dispose(),it.dispose();try{m.dispose(),we()}finally{N.dispose(),h.dispose(),h.forceContextLoss(),_.remove(),b.remove()}}}try{ue(!0),O(),le("overview")}catch(H){throw Mr(),H}return mn(),{setState(H){F=H,M&&M.setState(H)},setLive(H){B={...B||{},...H},M&&M.setLive(H)},getQuality:()=>f,autoQuality:()=>p,setQuality(H){!xl[H]||H===f||(f=H,Ys=null,we(),O())},getFrameCap:()=>x,setFrameCap(H){Jo.includes(H)&&(x=H)},getLook:()=>U,setLook(H){!Vr.includes(H)||H===U||(U=H,M&&M.setLook(H)&&(ae(),K()),Pe())},getBrightness:()=>W,setBrightness(H){W=mt(Number(H)||ln.initial,ln.min,ln.max),M&&(M.setBrightness(W),ae()),Pe()},setPerfDetail(H){g=!!H&&m.supported},setCameraPreset(H){X=!1,He(H),Pe()},getMode:()=>z,setMode(H){!Nf.includes(H)||H===z||($=null,H==="look"?k("look"):ge(),Pe())},setFollow(H){H&&z!=="orbit"&&(fr(y.position)==="hall"?ge():le("overview")),X=!!H,se=void 0,Se=0,X&&($=null)},setLabels(H){xe=Array.isArray(H)?H:[],Tt()},setLabelsVisible(H){Le=!!H,b.style.display=Le?"":"none"},stats:()=>M?M.stats():null,dispose:Mr}}var $s=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),XE=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:$s(3,"a"),new_string:$s(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:$s(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:$s(6,"c"),new_string:$s(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:$s(4,"v"),new_string:$s(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:$s(2,"b"),new_string:$s(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],_l={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*qE(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:_l.provider,model:_l.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{..._l}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),p=Math.max(3,Math.round(h/.12));for(let f=0;f<p;f++){let x=d*(.82+.36*Math.abs(Math.sin(f*1.7+s)));e.streamed+=u/p,yield{live:{phase:c,tps:x}},yield{wait:h/p}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,p,f,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:p,secs:f,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,p)=>h.secs-p.secs),d=.08*c.length;for(let h of u){let p=Math.max(0,h.secs-d);p>0&&(yield{wait:p}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*$E(n){for(;;)for(let e of XE)yield*qE(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function Qg({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=vs(_l.provider,_l.model),r=$E(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Ju(u.usage);return h&&(i.balance=Math.max(0,i.balance-ju(h,s,Xs(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,p=0;for(;p<u;){let{value:f}=r.next();f.wait?h+=f.wait*1e3*3:f.event&&(d.push(l(f,h)),f.event==="turn/end"&&p++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:p}=r.next();if(p.wait){d.length&&n?.(d),o=setTimeout(u,p.wait*1e3/t);return}p.event?d.push(l(p,Date.now())):p.live&&e?.(c(p.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var ex=`
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
  .dwp3d-hint{display:none}
}
@container dwp3d (max-width: 420px){
  .dwp3d-cards{grid-template-columns:repeat(2,minmax(0,1fr))}
}
`;var{useEffect:jo,useRef:Un,useState:Mn,useReducer:cx,useCallback:fd}=Ae,yl=!0,Ff="dwp3d.quality",tx="dwp3d.hint",nx="dwp3d.hint.look",YE=["overview","fuel","engine","stations","products","balcony"],KE=["raw","normal","gold","bad"],ix={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},sx={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},ZE=200,JE=4,pd=3,ux="dwp3d.fps",rx="dwp3d.perf",dx="dwp3d.look",hx="dwp3d.brightness";function Jr(n){try{return window.localStorage.getItem(n)}catch{return null}}function vr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function ox(){let n=Jr(Ff);return Zr.includes(n)?n:null}function jE(){let n=Jr(ux),e=n==null?"auto":Number(n);return Jo.includes(e)?e:"auto"}function QE(){return typeof Ae.useId=="function"?Ae.useId():"dwp3d"}function eT(){let n=Jr(dx);return Vr.includes(n)?n:mr}function tT(){let n=Number(Jr(hx));return Number.isFinite(n)&&n>=ln.min&&n<=ln.max?n:ln.initial}function nT(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function iT({t:n,perf:e}){if(!e)return Ae.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},Ae.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),Yt(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return Ae.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>Ae.createElement("div",{key:s,className:"dwp3d-perf-row"},Ae.createElement("span",null,s),Ae.createElement("b",null,r))))}function sT(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":"products":null}function rT(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function oT(n){let[e,t]=cx(i=>i+1,0);return jo(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Uf=(n,e)=>n&&(n[e]||n.en)||"",Of=(n,e)=>`${Uf(n,e)} · ${n.code}`;function ax(n){let e=t=>({id:t,text:Uf(on[t],n),sub:on[t].code});return[e("tank"),e("engine"),e("robot"),...Xu.map(t=>({id:`station:${t}`,text:Uf(ii[t],n),sub:ii[t].code})),e("loadport"),e("stocker")]}var aT=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework";function lx(n,e){let t=[[n("status."+aT(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:e.files.length})]];for(let s of e.files.slice(0,6))t.push([cf(s.path),`+${s.added} −${s.removed}`]);e.files.length>6&&t.push(["…",`+${e.files.length-6}`]);let i=(e.endedAt||Date.now())-e.startedAt;return t.push(["",n("hover.batchCost",{cost:Sn(e.cost),time:Mg(i)})]),t}function lT(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:Of(on[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:Sn(d)});switch(n){case"tank":{let d=[[t(yl?"m.balanceDemo":"m.balance"),e.balance==null?t("m.balanceNone"):Sn(e.balance,e.currency)]];return o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${zi(l.contextRatio)} · ${Yt(i.contextTokens)} / ${Yt(i.contextWindow)}`],[t("row.miss"),Yt(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),Yt(i.totals.write)]),d.push([t("row.hit"),Yt(i.totals.hit)],[t("row.output"),Yt(i.totals.output)],[t("row.reasoning"),Yt(i.totals.reasoning)],[t("row.cost"),Sn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":return c(n);case"stocker":{let d=i.turns.filter(p=>p.status!=="running"),h=d.filter(p=>p.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${Of(on.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:lx(t,d)}}default:break}if(n.startsWith("station:")){let d=n.slice(8),h=ii[d];if(!h)return null;let p=i.calls.filter(_=>_.kind===d),f=p.filter(_=>_.status==="running").pop(),x=p[p.length-1],m=[];f?m.push([t("hover.working"),f.label||f.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=p.filter(_=>_.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:Of(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(p=>p.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?lx(t,h):[]}}return null}function cT({hover:n,data:e,rootRef:t}){let i=lT(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return Ae.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},Ae.createElement("h4",null,i.title),i.body?Ae.createElement("p",null,i.body):null,i.rows.length?Ae.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>Ae.createElement("div",{className:"row",key:h},Ae.createElement("span",null,u),Ae.createElement("span",null,d)))):null)}function uT({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return Ae.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},Ae.createElement("div",{className:"k"},n.k),Ae.createElement("div",{className:"v"},n.v),n.s?Ae.createElement("div",{className:"s"},n.s):null,n.bar!=null?Ae.createElement("div",{className:"dwp3d-bar"},Ae.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function dT({t:n,calls:e}){return Ae.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},Ae.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=sx[t.status]?t.status:"running",s=sx[i],r=ii[t.kind]||ii.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return Ae.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},Ae.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),Ae.createElement("span",{className:"dwp3d-sr"},n("call."+i)),Ae.createElement("code",null,r.code),Ae.createElement("span",{className:"l"},o))}):Ae.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function hT({t:n,hintOn:e,hintKey:t,onDismiss:i}){return Ae.createElement("div",{className:"dwp3d-panel dwp3d-legend"},Ae.createElement("div",{className:"dwp3d-legend-row"},Ae.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),KE.map(s=>Ae.createElement("span",{className:"dwp3d-legend-item",key:s},Ae.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?Ae.createElement("div",{className:"dwp3d-hint"},Ae.createElement("span",null,n(t)),Ae.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}var fT=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function fx(n){let{ctx:e}=n,t=oT(e),i=rT(e),s=n.tBound||n.t,r=fd((Te,bt)=>{let Rn=typeof s=="function"?s(Te):Te,os=typeof Rn=="string"&&Rn?Rn:Te;return bt?Sg(os,bt):os},[s]),o=Un(r);o.current=r;let a=Un(i);a.current=i;let l=Un(null),c=Un(null),u=Un(null),d=Un(Tf()),h=Un({phase:"idle",tps:0,balance:null,currency:"CNY"}),p=Un(0),f=Un(!1),x=Un(!0),m=Un(0),g=Un({settle:pd,low:0}),[,_]=cx(Te=>Te+1,0),[b,y]=Mn(0),[w,S]=Mn(()=>ox()!=null),v=Un(w),[M,D]=Mn(()=>ox()||"medium"),A=Un(M),[N,F]=Mn(jE),B=Un(N),[I,Y]=Mn(()=>Jr(rx)==="on"),Z=Un(I);Z.current=I;let[G,$]=Mn(null),[z,X]=Mn(eT),se=Un(z),[Se,Oe]=Mn(tT),Q=Un(Se),[ve,Ee]=Mn(!1),ie=QE(),[xe,Le]=Mn("overview"),[ht,Ve]=Mn(!1),[me,Re]=Mn(!0),oe=Un(me);oe.current=me;let[U,W]=Mn(!0),[ne,K]=Mn(()=>Jr(tx)!=="off"),[re,we]=Mn(()=>Jr(nx)!=="off"),[O,ee]=Mn("orbit"),[ae,L]=Mn(!1),[Ke,ot]=Mn(null),[_t,Ce]=Mn(!0),[_e,fe]=Mn(null),[Be,C]=Mn(null),[E,q]=Mn(null),be=fd(()=>{p.current||(p.current=setTimeout(()=>{p.current=0,x.current?_():f.current=!0},ZE))},[]),ue=fd(Te=>{q(Te),clearTimeout(m.current),m.current=setTimeout(()=>q(null),3500)},[]),De=fd(Te=>{Zr.includes(Te)&&(A.current=Te,D(Te),g.current={settle:pd,low:0},u.current&&u.current.setQuality(Te))},[]);jo(()=>{let Te=c.current;if(!Te)return;let bt=null,Rn=null,os=!1,br=0;Ce(!0),fe(null),C(null),ot(null),ee("orbit");let as=j=>{fe(Fe=>Fe&&Fe.kind==="lost"?null:Fe),Z.current&&$(j);let J=g.current;if(J.settle>0){J.settle-=1;return}if(v.current)return;let te=j&&j.scale<=j.minScale+.001;if(J.low=j&&j.slow&&te?J.low+1:0,J.low<JE)return;J.low=0;let We=Zr.indexOf(A.current);if(We<=0)return;let Qe=Zr[We-1];De(Qe),ue(o.current("quality.downgraded",{q:o.current(`quality.${Qe}`)}))},T=()=>{try{bt=jg(Te,{quality:v.current?A.current:"auto",fps:B.current,look:se.current,brightness:Q.current,demo:yl,onHover:ot,onSelect:j=>{let J=sT(j);!J||!bt||(bt.setCameraPreset(J),Le(J),Ve(!1))},onPerf:as,onError:(j,J)=>{if(j==="shader"){C(te=>te||String(J||""));return}j==="context-lost"&&(ot(null),fe({kind:"lost"}))},onActive:j=>{x.current=j,j&&f.current&&(f.current=!1,_())},onReady:()=>Ce(!1),onMode:j=>{ee(j),j==="look"&&Ve(!1)}})}catch(j){for(;Te.firstChild;)Te.removeChild(Te.firstChild);Ce(!1),fe({kind:"webgl",msg:String(j&&j.message||j)});return}u.current=bt,A.current=bt.getQuality(),D(A.current),g.current={settle:pd,low:0},bt.setLabels(ax(a.current)),bt.setLabelsVisible(oe.current),bt.setPerfDetail(Z.current),Rn=Qg({onEvents:j=>{d.current=Af(d.current,j),bt.setState(d.current),be()},onLive:j=>{h.current={...h.current,...j},bt.setLive(j),be()}}),d.current=Af(Tf(),Rn.prefill(2)),h.current={phase:"idle",tps:0,balance:Rn.balance,currency:"CNY"},bt.setState(d.current),bt.setLive(h.current),Rn.start(),_()},V=requestAnimationFrame(()=>{br=requestAnimationFrame(()=>{os||T()})});return()=>{os=!0,cancelAnimationFrame(V),cancelAnimationFrame(br),Rn&&Rn.stop(),bt&&bt.dispose(),u.current=null,clearTimeout(p.current),p.current=0}},[b,De,be,ue]),jo(()=>()=>clearTimeout(m.current),[]),jo(()=>{u.current&&u.current.setLabels(ax(i))},[i,t]),jo(()=>{u.current&&u.current.setLabelsVisible(me)},[me]),jo(()=>{let Te=()=>L(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",Te),()=>document.removeEventListener("fullscreenchange",Te)},[]);let Ge=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},de=Te=>{let bt=u.current;bt&&(bt.setCameraPreset(Te),Le(Te),Ve(!1),bt.getMode()==="look"&&Ge())},pe=()=>{let Te=!ht;Ve(Te),u.current&&u.current.setFollow(Te)},ze=()=>{let Te=l.current;if(!Te)return;let bt=()=>ue(o.current("error.fullscreen"));try{let Rn=document.fullscreenElement?document.exitFullscreen():Te.requestFullscreen();Rn&&typeof Rn.catch=="function"&&Rn.catch(bt)}catch{bt()}},k=Te=>{if(Te==="auto"){vr(Ff,null),v.current=!1,S(!1),u.current&&De(u.current.autoQuality());return}Zr.includes(Te)&&(vr(Ff,Te),v.current=!0,S(!0),De(Te))},ge=Te=>{let bt=Te==="auto"?"auto":Number(Te);Jo.includes(bt)&&(B.current=bt,F(bt),vr(ux,bt==="auto"?null:String(bt)),g.current={settle:pd,low:0},u.current&&u.current.setFrameCap(bt))},le=()=>{let Te=!I;Y(Te),vr(rx,Te?"on":null),Te||$(null),u.current&&u.current.setPerfDetail(Te)},He=Te=>{Vr.includes(Te)&&(se.current=Te,X(Te),vr(dx,Te===mr?null:Te),u.current&&u.current.setLook(Te))},Pe=Te=>{let bt=Math.min(ln.max,Math.max(ln.min,Number(Te)||ln.initial));Q.current=bt,Oe(bt),vr(hx,Math.abs(bt-ln.initial)<.001?null:String(bt)),u.current&&u.current.setBrightness(bt)},ke=()=>{O==="look"?(vr(nx,"off"),we(!1)):(vr(tx,"off"),K(!1))},it=Te=>{let bt=u.current;bt&&(bt.setMode(Te),ee(bt.getMode()),Te==="look"&&(Ve(!1),Ge()))},Tt=()=>y(Te=>Te+1),ce=d.current,tt=h.current,pt=nd(ce),$e=vs(ce.provider,ce.model),Bt=Xs(Date.now()),jt=tt.phase&&tt.phase!=="idle"?tt.phase:ce.phase,Wn=typeof tt.balance=="number"?tt.balance:null,si=tt.currency||"CNY",Ti=Wn!=null&&$e&&si!=="USD"?Qu(Wn,$e,Bt):0,bs=ce.turns.filter(Te=>Te.status!=="running"),Ms=bs.filter(Te=>Te.status==="ok").length,Ys=pt.contextRatio>=.8?"#ff5d5d":pt.contextRatio>=.6?"#ffb347":"#4d6bfe",wn=tt.tps>.5&&(jt==="generating"||jt==="reasoning")?` · ${r("unit.tps",{n:Math.round(tt.tps)})}`:"",Hi=ce.totals.miss+ce.totals.write,_i=ce.files,fn=[{id:"balance",k:r(yl?"m.balanceDemo":"m.balance"),v:Wn==null?r("m.balanceNone"):Sn(Wn,si),s:Ti?r("m.balanceSub",{tokens:Yt(Ti)}):""},{id:"context",k:r("m.context"),v:zi(pt.contextRatio),s:`${Yt(ce.contextTokens)} / ${Yt(ce.contextWindow)}`,bar:pt.contextRatio,barColor:Ys,title:r("m.contextTitle",{pct:zi(pt.contextRatio),used:Yt(ce.contextTokens),window:Yt(ce.contextWindow)})},{id:"input",k:r("m.input"),v:Yt(pt.prompt),s:r("m.inputSub",{rate:zi(pt.hitRate),miss:Yt(Hi)}),title:r("m.inputTitle",{total:Yt(pt.prompt),hit:Yt(ce.totals.hit),rate:zi(pt.hitRate),miss:Yt(Hi),write:ce.totals.write>0?r("m.writeNote",{n:Yt(ce.totals.write)}):"",saved:Sn(ce.totals.savings)})},{id:"output",k:r("m.output"),v:Yt(ce.totals.output),s:r("m.outputSub",{n:Yt(ce.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:Sn(ce.totals.cost),s:r("m.costSub",{peak:Sn(ce.totals.costPeak),off:Sn(ce.totals.costOffPeak)}),title:r("m.costTitle",{cost:Sn(ce.totals.cost),requests:ce.totals.requests,peak:Sn(ce.totals.costPeak),off:Sn(ce.totals.costOffPeak),saved:Sn(ce.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(ce.tools.calls),s:r("m.toolsSub",{n:ce.tools.errors,rate:zi(pt.toolSuccess)}),title:r("m.toolsTitle",{calls:ce.tools.calls,running:ce.tools.running,n:ce.tools.errors})},{id:"products",k:r("m.products"),v:`${_i.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:_i.added,r:_i.removed,ok:Ms,done:bs.length}),title:r("m.productsTitle",{n:_i.count,a:_i.added,r:_i.removed,ok:Ms,done:bs.length})},{id:"efficiency",k:r("m.efficiency"),v:`${pt.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:Sn(pt.costPerFile)}),title:r("m.efficiencyHint")}],rs=ce.calls.slice(-5).reverse(),jr={t:r,s:ce,live:tt,lang:i,price:$e,peak:Bt,m:pt,phase:jt,balance:Wn,currency:si},Ks=!!_e&&_e.kind==="webgl",Ai=!_t&&!Ks,Zs=w?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+M)});return Ae.createElement("div",{ref:l,className:`dwp3d-root${Ks?" fail":""}`},Ae.createElement("style",null,ex),Ae.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),ve?Ae.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>Ee(!1)}):null,Ai?Ae.createElement("div",{className:"dwp3d-top"},Ae.createElement("div",{className:"dwp3d-panel dwp3d-title"},Ae.createElement("div",{className:"dwp3d-title-row"},Ae.createElement("h2",null,r("title")),yl?Ae.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):null,ce.model?Ae.createElement("span",{className:"dwp3d-chip"},`${ce.model}${ce.effort?` · ${ce.effort}`:""}`):null,Ae.createElement("span",{className:"dwp3d-chip"},Ae.createElement("i",{className:"dwp3d-dot",style:{color:ix[jt]||ix.idle},"aria-hidden":"true"}),`${r("phase."+jt)}${wn}`)),yl?Ae.createElement("p",{className:"dwp3d-note"},r("badge.demoHint")):null,Be?Ae.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:Be})):null),Ae.createElement("div",{className:"dwp3d-right"},Ae.createElement("div",{className:"dwp3d-panel dwp3d-tools"},Ae.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},YE.map(Te=>{let bt=!ht&&xe===Te;return Ae.createElement("button",{key:Te,type:"button",className:`dwp3d-btn${bt?" on":""}`,"aria-pressed":bt,onClick:()=>de(Te)},r("view."+Te))})),Ae.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},Nf.map(Te=>Ae.createElement("button",{key:Te,type:"button",className:`dwp3d-btn${O===Te?" on":""}`,title:r(`mode.${Te}Hint`),"aria-pressed":O===Te,onClick:()=>it(Te)},r("mode."+Te)))),Ae.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},Ae.createElement("button",{type:"button",className:`dwp3d-btn${ht?" on":""}`,title:r("ctl.followHint"),"aria-pressed":ht,onClick:pe},r("ctl.follow")),Ae.createElement("button",{type:"button",className:`dwp3d-btn${me?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":me,onClick:()=>Re(Te=>!Te)},r("ctl.labels")),Ae.createElement("button",{type:"button",className:`dwp3d-btn${U?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":U,onClick:()=>W(Te=>!Te)},r("ctl.panels")),Ae.createElement("button",{type:"button",className:`dwp3d-btn${ve?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":ve,"aria-haspopup":"dialog",onClick:()=>Ee(Te=>!Te)},r("ctl.display")),fT()?Ae.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":ae,onClick:ze},r(ae?"ctl.exitFullscreen":"ctl.fullscreen")):null)),ve?Ae.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},Ae.createElement("div",{className:"dwp3d-pop-row"},Ae.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),Ae.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},Vr.map(Te=>Ae.createElement("button",{key:Te,type:"button",className:`dwp3d-btn${z===Te?" on":""}`,"aria-pressed":z===Te,onClick:()=>He(Te)},r("look."+Te))))),Ae.createElement("div",{className:"dwp3d-pop-row"},Ae.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-brightness`},r("ctl.brightness")),Ae.createElement("input",{id:`${ie}-brightness`,className:"dwp3d-range",type:"range",min:ln.min,max:ln.max,step:ln.step,value:Se,onChange:Te=>Pe(Te.target.value)}),Ae.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(Se*100)}%`),Ae.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(Se-ln.initial)<.001,onClick:()=>Pe(ln.initial)},"↺")),Ae.createElement("div",{className:"dwp3d-pop-row"},Ae.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-quality`},r("ctl.quality")),Ae.createElement("select",{id:`${ie}-quality`,className:"dwp3d-select",value:w?M:"auto",onChange:Te=>k(Te.target.value)},Ae.createElement("option",{value:"auto"},Zs),Zr.map(Te=>Ae.createElement("option",{key:Te,value:Te},r("quality."+Te))))),Ae.createElement("div",{className:"dwp3d-pop-row"},Ae.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ie}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),Ae.createElement("select",{id:`${ie}-fps`,className:"dwp3d-select",value:String(N),title:r("ctl.fpsHint"),onChange:Te=>ge(Te.target.value)},Jo.map(Te=>Ae.createElement("option",{key:String(Te),value:String(Te)},nT(r,Te))))),Ae.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},Ae.createElement("input",{type:"checkbox",checked:I,onChange:le}),Ae.createElement("span",null,r("ctl.perfShow")))):null,I?Ae.createElement(iT,{t:r,perf:G}):null)):null,Ae.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},E?Ae.createElement("div",{className:"dwp3d-panel dwp3d-toast"},E):null),Ai&&U?Ae.createElement("div",{className:"dwp3d-bottom"},Ae.createElement("div",{className:"dwp3d-mid"},Ae.createElement(dT,{t:r,calls:rs}),Ae.createElement(hT,{t:r,hintOn:O==="look"?re:ne,hintKey:O==="look"?"hint.look":"hint.controls",onDismiss:ke})),Ae.createElement("div",{className:"dwp3d-cards"},fn.map(Te=>Ae.createElement(uT,{key:Te.id,card:Te})))):null,Ai&&Ke?Ae.createElement(cT,{hover:Ke,data:jr,rootRef:l}):null,_t&&!_e?Ae.createElement("div",{className:"dwp3d-center"},Ae.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},Ae.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,Ks?Ae.createElement("div",{className:"dwp3d-center"},Ae.createElement("div",{className:"dwp3d-fail",role:"alert"},Ae.createElement("h3",null,r("error.webglTitle")),Ae.createElement("p",null,r("error.webgl",{msg:_e.msg})),Ae.createElement("button",{type:"button",onClick:Tt},r("error.retry")))):null,_e&&_e.kind==="lost"?Ae.createElement("div",{className:"dwp3d-center dim",role:"alert"},Ae.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var pT="work-process-3d",mT={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(Ml,zf),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(Ml);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:pT,order:15,locale:Ml,label:()=>e("tab.label")},t=>px.createElement(fx,{...t,ctx:n,tBound:e})))}};
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
