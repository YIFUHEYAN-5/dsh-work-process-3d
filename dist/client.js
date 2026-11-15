/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var wx=Object.create;var El=Object.defineProperty;var Ex=Object.getOwnPropertyDescriptor;var Tx=Object.getOwnPropertyNames;var Ax=Object.getPrototypeOf,Rx=Object.prototype.hasOwnProperty;var Cx=(n,e)=>{for(var t in e)El(n,t,{get:e[t],enumerable:!0})},Wf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Tx(e))!Rx.call(n,s)&&s!==t&&El(n,s,{get:()=>e[s],enumerable:!(i=Ex(e,s))||i.enumerable});return n};var Xf=(n,e,t)=>(t=n!=null?wx(Ax(n)):{},Wf(e||!n||!n.__esModule?El(t,"default",{value:n,enumerable:!0}):t,n)),Px=n=>Wf(El({},"__esModule",{value:!0}),n);var C2={};Cx(C2,{default:()=>R2});module.exports=Px(C2);var Sx=Xf(require("react"),1);var Tl="dsh-work-process-3d",Ix={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"原型阶段：画面由内置示例会话驱动，数字、文件和命令都是示例，还没有接入本会话。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.living":"生活区","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸，留给以后入住的操作员角色。它不显示会话数据。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Lx={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Prototype: a built-in sample session drives the scene. The numbers, files and commands are examples, not this session.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.living":"Living","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium, kept for an operator character to move in later. It shows no session data.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},qf={zh:Ix,en:Lx};var Ce=Xf(require("react"),1);var ur={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fp=0,ih=1,Up=2;var Ur=1,kp=2,ko=3,vs=0,jn=1,Jt=2,kr=0,_s=1,qn=2,sh=3,rh=4,Bo=5;var Br=100,Bp=101,zp=102,Hp=103,Gp=104,zc=200,hr=201,Vp=202,Wp=203,oh=204,fr=205,Xp=206,qp=207,$p=208,Yp=209,Kp=210,Zp=211,Jp=212,jp=213,Qp=214,rc=0,oc=1,ac=2,Mo=3,lc=4,cc=5,uc=6,dc=7,ah=0,e0=1,t0=2,bs=0,lh=1,ch=2,uh=3,dh=4,hh=5,fh=6,Ya=7;var ph=300,zr=301,zo=302,Hc=303,Gc=304,Os=1e3,ms=1001,hc=1002,Xn=1003,n0=1004;var Ka=1005;var vn=1006,Vc=1007;var ji=1008;var mi=1009,mh=1010,gh=1011,Ho=1012,Wc=1013,Qi=1014,Oi=1015,pi=1016,Xc=1017,qc=1018,Hr=1020,xh=35902,yh=35899,vh=1021,_h=1022,es=1023,Fs=1026,Vs=1027,$c=1028,Yc=1029,pr=1030,Kc=1031;var Zc=1033,Za=33776,Ja=33777,ja=33778,Qa=33779,Jc=35840,jc=35841,Qc=35842,eu=35843,tu=36196,nu=37492,iu=37496,su=37488,ru=37489,el=37490,ou=37491,au=37808,lu=37809,cu=37810,uu=37811,du=37812,hu=37813,fu=37814,pu=37815,mu=37816,gu=37817,xu=37818,yu=37819,vu=37820,_u=37821,bu=36492,Mu=36494,Su=36495,wu=36283,Eu=36284,tl=36285,Tu=36286;var xa=2300,fc=2301,ic=2302,Xd=2303,qd=2400,$d=2401,Yd=2402;var i0=3200;var Au=0,s0=1,Ws="",Kn="srgb",ya="srgb-linear",va="linear",tn="srgb";var sc=7680;var r0=519,o0=512,a0=513,l0=514,bh=515,c0=516,u0=517,Mh=518,Sh=519,wh=35044;var Eh="300 es",Di=2e3,So=2001;function Dx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d0(){let n=_a("canvas");return n.style.display="block",n}var $f={},wo=null;function ba(...n){let e="THREE."+n.shift();wo?wo("log",e,...n):console.log(e,...n)}function h0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function bt(...n){n=h0(n);let e="THREE."+n.shift();if(wo)wo("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function wt(...n){n=h0(n);let e="THREE."+n.shift();if(wo)wo("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ir(...n){let e=n.join(" ");e in $f||($f[e]=!0,bt(...n))}function f0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var p0={[rc]:rc,[ac]:uc,[lc]:lc,[Mo]:cc,[oc]:oc,[uc]:ac,[dc]:dc,[cc]:Mo},Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=1234567,fa=Math.PI/180,Eo=180/Math.PI;function Xs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function Lt(n,e,t){return Math.max(e,Math.min(t,n))}function Th(n,e){return(n%e+e)%e}function Ox(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Fx(n,e,t){return n!==e?(t-n)/(e-n):0}function pa(n,e,t){return(1-t)*n+t*e}function Ux(n,e,t,i){return pa(n,e,1-Math.exp(-t*i))}function kx(n,e=1){return e-Math.abs(Th(n,e*2)-e)}function Bx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Gx(n,e){return n+Math.random()*(e-n)}function Vx(n){return n*(.5-Math.random())}function Wx(n){n!==void 0&&(Yf=n);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xx(n){return n*fa}function qx(n){return n*Eo}function $x(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Yx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ah(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*u,a*c);break;default:bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ru(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rh(n,e){if(e.constructor===Float32Array)return n;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ch(n,e){if(e.constructor===Float32Array)return n;let t=Ru(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Cu={DEG2RAD:fa,RAD2DEG:Eo,generateUUID:Xs,clamp:Lt,euclideanModulo:Th,mapLinear:Ox,inverseLerp:Fx,lerp:pa,damp:Ux,pingpong:kx,smoothstep:Bx,smootherstep:zx,randInt:Hx,randFloat:Gx,randFloatSpread:Vx,seededRandom:Wx,degToRad:Xx,radToDeg:qx,isPowerOfTwo:$x,ceilPowerOfTwo:Yx,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Kx,normalize:Ch,denormalize:Rh},Se=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*x;m<0&&(h=-h,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-a*p,e[t+2]=c*f+u*p+a*h-l*d,e[t+3]=u*f-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_d=new R,Kf=new pn,Tt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],x=s[0],m=s[3],g=s[6],y=s[1],b=s[4],v=s[7],w=s[2],S=s[5],_=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*b+l*S,r[6]=o*g+a*v+l*_,r[1]=c*x+u*y+d*w,r[4]=c*m+u*b+d*S,r[7]=c*g+u*v+d*_,r[2]=h*x+p*y+f*w,r[5]=h*m+p*b+f*S,r[8]=h*g+p*v+f*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,f=t*d+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bd=new Tt,Zf=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zx(){let n={enabled:!0,workingColorSpace:ya,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tn&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tn&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ws?va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ya]:{primaries:e,whitePoint:i,transfer:va,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:i,transfer:tn,toXYZ:Zf,fromXYZ:Jf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),n}var Bt=Zx();function Ns(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var no,pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=_a("canvas")),no.width=e.width,no.height=e.height;let s=no.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ns(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ns(t[i]/255)*255):t[i]=Ns(t[i]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jx=0,To=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Md(s[o].image)):r.push(Md(s[o]))}else r=Md(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Md(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}var jx=0,Sd=new R,di=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ms,s=ms,r=vn,o=ji,a=es,l=mi,c=n.DEFAULT_ANISOTROPY,u=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Xs(),this.name="",this.source=new To(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=ph;di.DEFAULT_ANISOTROPY=1;var cn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(p+1)/2,w=(g+1)/2,S=(u+h)/4,_=(d+x)/4,M=(f+m)/4;return b>v&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=S/i,r=_/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=M/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=M/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new di({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new To(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends mc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ma=class extends di{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends di{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Mt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/io.setFromMatrixColumn(e,0).length(),r=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=f*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qx,e,ey)}lookAt(e,t,i){let s=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),tr.crossVectors(i,bi),tr.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),tr.crossVectors(i,bi)),tr.normalize(),Al.crossVectors(bi,tr),s[0]=tr.x,s[4]=Al.x,s[8]=bi.x,s[1]=tr.y,s[5]=Al.y,s[9]=bi.y,s[2]=tr.z,s[6]=Al.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],y=i[3],b=i[7],v=i[11],w=i[15],S=s[0],_=s[4],M=s[8],L=s[12],A=s[1],O=s[5],U=s[9],z=s[13],C=s[2],Z=s[6],Q=s[10],Y=s[14],G=s[3],H=s[7],K=s[11],N=s[15];return r[0]=o*S+a*A+l*C+c*G,r[4]=o*_+a*O+l*Z+c*H,r[8]=o*M+a*U+l*Q+c*K,r[12]=o*L+a*z+l*Y+c*N,r[1]=u*S+d*A+h*C+p*G,r[5]=u*_+d*O+h*Z+p*H,r[9]=u*M+d*U+h*Q+p*K,r[13]=u*L+d*z+h*Y+p*N,r[2]=f*S+x*A+m*C+g*G,r[6]=f*_+x*O+m*Z+g*H,r[10]=f*M+x*U+m*Q+g*K,r[14]=f*L+x*z+m*Y+g*N,r[3]=y*S+b*A+v*C+w*G,r[7]=y*_+b*O+v*Z+w*H,r[11]=y*M+b*U+v*Q+w*K,r[15]=y*L+b*z+v*Y+w*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],y=l*p-c*h,b=a*p-c*d,v=a*h-l*d,w=o*p-c*u,S=o*h-l*u,_=o*d-a*u;return t*(x*y-m*b+g*v)-i*(f*y-m*w+g*S)+s*(f*b-x*w+g*_)-r*(f*v-x*S+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,b=t*l-s*o,v=t*c-r*o,w=i*l-s*a,S=i*c-r*a,_=s*c-r*l,M=u*x-d*f,L=u*m-h*f,A=u*g-p*f,O=d*m-h*x,U=d*g-p*x,z=h*g-p*m,C=y*z-b*U+v*O+w*A-S*L+_*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/C;return e[0]=(a*z-l*U+c*O)*Z,e[1]=(s*U-i*z-r*O)*Z,e[2]=(x*_-m*S+g*w)*Z,e[3]=(h*S-d*_-p*w)*Z,e[4]=(l*A-o*z-c*L)*Z,e[5]=(t*z-s*A+r*L)*Z,e[6]=(m*v-f*_-g*b)*Z,e[7]=(u*_-h*v+p*b)*Z,e[8]=(o*U-a*A+c*M)*Z,e[9]=(i*A-t*U-r*M)*Z,e[10]=(f*S-x*v+g*y)*Z,e[11]=(d*v-u*S-p*y)*Z,e[12]=(a*L-o*O-l*M)*Z,e[13]=(t*O-i*L+s*M)*Z,e[14]=(x*b-f*w-m*y)*Z,e[15]=(u*w-d*b+h*y)*Z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,x=o*u,m=o*d,g=a*d,y=l*c,b=l*u,v=l*d,w=i.x,S=i.y,_=i.z;return s[0]=(1-(x+g))*w,s[1]=(p+v)*w,s[2]=(f-b)*w,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(h+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(f+b)*_,s[9]=(m-y)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=io.set(s[0],s[1],s[2]).length(),a=io.set(s[4],s[5],s[6]).length(),l=io.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qi.copy(this);let c=1/o,u=1/a,d=1/l;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Di,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===Di)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===So)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Di,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===Di)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===So)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},io=new R,qi=new Mt,Qx=new R(0,0,0),ey=new R(1,1,1),tr=new R,Al=new R,bi=new R,jf=new Mt,Qf=new pn,Jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ty=0,ep=new R,so=new pn,Rs=new Mt,Rl=new R,na=new R,ny=new R,iy=new pn,tp=new R(1,0,0),np=new R(0,1,0),ip=new R(0,0,1),sp={type:"added"},sy={type:"removed"},ro={type:"childadded",child:null},wd={type:"childremoved",child:null},an=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new Jn,i=new pn,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Tt}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rl.copy(e):Rl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(na,Rl,this.up):Rs.lookAt(Rl,na,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Rs),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),ro.child=e,this.dispatchEvent(ro),ro.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sy),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new R(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yt=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},ry={type:"move"},Ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Bt.workingColorSpace){if(e=Th(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ed(o,r,e+1/3),this.g=Ed(o,r,e),this.b=Ed(o,r,e-1/3)}return Bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Kn){function i(r){r!==void 0&&parseFloat(r)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){let i=m0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Bt.workingToColorSpace(ni.copy(this),e),Math.round(Lt(ni.r*255,0,255))*65536+Math.round(Lt(ni.g*255,0,255))*256+Math.round(Lt(ni.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(ni.copy(this),t);let i=ni.r,s=ni.g,r=ni.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Kn){Bt.workingToColorSpace(ni.copy(this),e);let t=ni.r,i=ni.g,s=ni.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Cl);let i=pa(nr.h,Cl.h,t),s=pa(nr.s,Cl.s,t),r=pa(nr.l,Cl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Fe;Fe.NAMES=m0;var Lr=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new R,Cs=new R,Td=new R,Ps=new R,oo=new R,ao=new R,rp=new R,Ad=new R,Rd=new R,Cd=new R,Pd=new cn,Id=new cn,Ld=new cn,Ds=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$i.subVectors(e,t),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$i.subVectors(s,t),Cs.subVectors(i,t),Td.subVectors(e,t);let o=$i.dot($i),a=$i.dot(Cs),l=$i.dot(Td),c=Cs.dot(Cs),u=Cs.dot(Td),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ps.x),l.addScaledVector(o,Ps.y),l.addScaledVector(a,Ps.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Pd.setScalar(0),Id.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,t),Id.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Pd,r.x),o.addScaledVector(Id,r.y),o.addScaledVector(Ld,r.z),o}static isFrontFacing(e,t,i,s){return $i.subVectors(i,t),Cs.subVectors(e,t),$i.cross(Cs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),$i.cross(Cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;oo.subVectors(s,i),ao.subVectors(r,i),Ad.subVectors(e,i);let l=oo.dot(Ad),c=ao.dot(Ad);if(l<=0&&c<=0)return t.copy(i);Rd.subVectors(e,s);let u=oo.dot(Rd),d=ao.dot(Rd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(oo,o);Cd.subVectors(e,r);let p=oo.dot(Cd),f=ao.dot(Cd);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(ao,a);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return rp.subVectors(r,s),a=(d-u)/(d-u+(p-f)),t.copy(s).addScaledVector(rp,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(r,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Il.subVectors(this.max,ia),lo.subVectors(e.a,ia),co.subVectors(e.b,ia),uo.subVectors(e.c,ia),ir.subVectors(co,lo),sr.subVectors(uo,co),Tr.subVectors(lo,uo);let t=[0,-ir.z,ir.y,0,-sr.z,sr.y,0,-Tr.z,Tr.y,ir.z,0,-ir.x,sr.z,0,-sr.x,Tr.z,0,-Tr.x,-ir.y,ir.x,0,-sr.y,sr.x,0,-Tr.y,Tr.x,0];return!Dd(t,lo,co,uo,Il)||(t=[1,0,0,0,1,0,0,0,1],!Dd(t,lo,co,uo,Il))?!1:(Ll.crossVectors(ir,sr),t=[Ll.x,Ll.y,Ll.z],Dd(t,lo,co,uo,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Is=[new R,new R,new R,new R,new R,new R,new R,new R],Yi=new R,Pl=new hi,lo=new R,co=new R,uo=new R,ir=new R,sr=new R,Tr=new R,ia=new R,Il=new R,Ll=new R,Ar=new R;function Dd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ar.fromArray(n,r);let a=s.x*Math.abs(Ar.x)+s.y*Math.abs(Ar.y)+s.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Cn=new R,Dl=new Se,oy=0,ii=class extends Ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=e!==void 0?Ru(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ch(e,this.array)}};var Sa=class extends ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var wa=class extends ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var pt=class extends ii{constructor(e,t,i){super(new Float32Array(e),t,i)}},ay=new hi,sa=new R,Nd=new R,Ni=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ay.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(Nd)),this.expandByPoint(sa.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ly=0,Li=new Mt,Od=new an,ho=new R,Mi=new hi,ra=new hi,Vn=new R,zt=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dx(e)?wa:Sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Vn.addVectors(Mi.min,ra.min),Mi.expandByPoint(Vn),Vn.addVectors(Mi.max,ra.max),Mi.expandByPoint(Vn)):(Mi.expandByPoint(ra.min),Mi.expandByPoint(ra.max))}Mi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vn.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(e,c),Vn.add(ho)),s=Math.max(s,i.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new R,l[L]=new R;let u=new R,d=new R,h=new R,p=new Se,f=new Se,x=new Se,m=new R,g=new R;function y(L,A,O){c[L]=c[A]=c[O]=1,u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,O),p.fromBufferAttribute(r,L),f.fromBufferAttribute(r,A),x.fromBufferAttribute(r,O),d.sub(u),h.sub(u),f.sub(p),x.sub(p);let U=1/(f.x*x.y-x.x*f.y);isFinite(U)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(U),a[L].add(m),a[A].add(m),a[O].add(m),l[L].add(g),l[A].add(g),l[O].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,A=b.length;L<A;++L){let O=b[L],U=O.start,z=O.count;for(let C=U,Z=U+z;C<Z;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new R,w=new R,S=new R,_=new R;function M(L){S.fromBufferAttribute(s,L),_.copy(S);let A=a[L];v.copy(A),v.sub(S.multiplyScalar(S.dot(A))).normalize(),w.crossVectors(_,A);let U=w.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,U)}for(let L=0,A=i.count;L<A;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vn.fromBufferAttribute(e,t),Vn.normalize(),e.setXYZ(t,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new ii(h,u,d)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=Xs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=op(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=op(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function op(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Xs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var ci=new R,Co=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Ru(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Rh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ch(e,this.data.array)}},Fd=new R,cy=new R,uy=new Tt,ui=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Fd.subVectors(i,t).cross(cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Fd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||uy.getNormalMatrix(e),s=this.coplanarPoint(Fd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dy=0,Zi=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=_s,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=fr,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ui().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gs=class extends Zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fo,oa=new R,po=new R,mo=new R,go=new Se,aa=new Se,g0=new Mt,Nl=new R,la=new R,Ol=new R,ap=new Se,Ud=new Se,lp=new Se,Us=class extends an{constructor(e=new gs){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ea(t,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new Co(i,3,0,!1)),fo.setAttribute("uv",new Co(i,2,3,!1))}this.geometry=fo,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),g0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Fl(Nl.set(-.5,-.5,0),mo,o,po,s,r),Fl(la.set(.5,-.5,0),mo,o,po,s,r),Fl(Ol.set(.5,.5,0),mo,o,po,s,r),ap.set(0,0),Ud.set(1,0),lp.set(1,1);let a=e.ray.intersectTriangle(Nl,la,Ol,!1,oa);if(a===null&&(Fl(la.set(-.5,.5,0),mo,o,po,s,r),Ud.set(0,1),a=e.ray.intersectTriangle(Nl,Ol,la,!1,oa),a===null))return;let l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||t.push({distance:l,point:oa.clone(),uv:Ds.getInterpolation(oa,Nl,la,Ol,ap,Ud,lp,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Fl(n,e,t,i,s,r){go.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(aa.x=r*go.x-s*go.y,aa.y=s*go.x+r*go.y):aa.copy(go),n.copy(e),n.x+=aa.x,n.y+=aa.y,n.applyMatrix4(g0)}var Ls=new R,kd=new R,Ul=new R,kl=new R,ks=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ls.copy(this.origin).addScaledVector(this.direction,t),Ls.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kd.copy(e).add(t).multiplyScalar(.5),Ul.copy(t).sub(e).normalize(),kl.copy(this.origin).sub(kd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ul),a=kl.dot(this.direction),l=-kl.dot(Ul),c=kl.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(kd).addScaledVector(Ul,h),p}intersectSphere(e,t){if(e.radius<0)return null;Ls.subVectors(e.center,this.origin);let i=Ls.dot(this.direction),s=Ls.dot(Ls)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ls)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,b=i.z-o.z,v=Math.abs(l),w=Math.abs(c),S=Math.abs(u),_,M,L,A,O,U,z,C,Z,Q,Y,G;if(v>=w&&v>=S?(L=l,U=d,Z=f,G=g,l>=0?(_=c,M=u,A=h,O=p,z=x,C=m,Q=y,Y=b):(_=u,M=c,A=p,O=h,z=m,C=x,Q=b,Y=y)):w>=S?(L=c,U=h,Z=x,G=y,c>=0?(_=u,M=l,A=p,O=d,z=m,C=f,Q=b,Y=g):(_=l,M=u,A=d,O=p,z=f,C=m,Q=g,Y=b)):(L=u,U=p,Z=m,G=b,u>=0?(_=l,M=c,A=d,O=h,z=f,C=x,Q=g,Y=y):(_=c,M=l,A=h,O=d,z=x,C=f,Q=y,Y=g)),L===0)return null;let H=_/L,K=M/L,N=1/L,X=A-H*U,ae=O-K*U,J=z-H*Z,de=C-K*Z,xe=Q-H*G,ee=Y-K*G,ye=xe*de-ee*J,De=X*ee-ae*xe,dt=J*ae-de*X;if(s){if(ye<0||De<0||dt<0)return null}else if((ye<0||De<0||dt<0)&&(ye>0||De>0||dt>0))return null;let Be=ye+De+dt;if(Be===0)return null;let je=N*(ye*U+De*Z+dt*G);return(Be>0?je<0:je>0)?null:this.at(je/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cp=new Mt,Rr=new ks,Bl=new Ni,up=new R,zl=new R,Hl=new R,Gl=new R,Bd=new R,Vl=new R,dp=new R,Wl=new R,tt=class extends an{constructor(e=new zt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Bd.fromBufferAttribute(d,e),o?Vl.addScaledVector(Bd,u):Vl.addScaledVector(Bd.sub(t),u))}t.add(Vl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Rr.copy(e.ray).recast(e.near),!(Bl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Bl,up)===null||Rr.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(r).invert(),Rr.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,w=b;v<w;v+=3){let S=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);s=Xl(this,g,e,i,c,u,d,S,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Xl(this,o,e,i,c,u,d,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,w=b;v<w;v+=3){let S=v,_=v+1,M=v+2;s=Xl(this,g,e,i,c,u,d,S,_,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let y=m,b=m+1,v=m+2;s=Xl(this,o,e,i,c,u,d,y,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function hy(n,e,t,i,s,r,o,a){let l;if(e.side===jn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===vs,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wl);return c<t.near||c>t.far?null:{distance:c,point:Wl.clone(),object:n}}function Xl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,zl),n.getVertexPosition(l,Hl),n.getVertexPosition(c,Gl);let u=hy(n,e,t,i,zl,Hl,Gl,dp);if(u){let d=new R;Ds.getBarycoord(dp,zl,Hl,Gl,d),s&&(u.uv=Ds.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=Ds.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=Ds.getInterpolatedAttribute(o,a,l,c,d,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new R,materialIndex:0};Ds.getNormal(zl,Hl,Gl,h.normal),u.face=h,u.barycoord=d}return u}var Ta=class extends di{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Xn,u=Xn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class extends ii{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xo=new Mt,hp=new Mt,ql=[],fp=new hi,fy=new Mt,ca=new tt,ua=new Ni,Dn=class extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new si(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,fy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),fp.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),ua.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xo),hp.multiplyMatrices(i,xo),ca.matrixWorld=hp,ca.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ta(new Float32Array(s*this.count),s,this.count,$c,Oi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new Ni,py=new Se(.5,.5),$l=new R,or=class{constructor(e=new ui,t=new ui,i=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],y=r[12],b=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,g-f,w-y).normalize(),s[1].setComponents(c+o,p+u,g+f,w+y).normalize(),s[2].setComponents(c+a,p+d,g+x,w+b).normalize(),s[3].setComponents(c-a,p-d,g-x,w-b).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,g-m,w-v).normalize();else if(s[4].setComponents(c-l,p-h,g-m,w-v).normalize(),t===Di)s[5].setComponents(c+l,p+h,g+m,w+v).normalize();else if(t===So)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);let t=py.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($l.x=s.normal.x>0?e.max.x:e.min.x,$l.y=s.normal.y>0?e.max.y:e.min.y,$l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pp=new Mt,xc=class n{constructor(){this.coordinateSystem=Di,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];pp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new or),i[s].setFromProjectionMatrix(pp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new or),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Po=class extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new R,vc=new R,mp=new Mt,da=new ks,Yl=new Ni,zd=new R,gp=new R,_c=class extends an{constructor(e=new zt,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)yc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=yc.distanceTo(vc);e.setAttribute("lineDistance",new pt(i,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,e.ray.intersectsSphere(Yl)===!1)return;mp.copy(s).invert(),da.copy(e.ray).applyMatrix4(mp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),b=Kl(this,e,da,l,g,y,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(p),g=Kl(this,e,da,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Kl(this,e,da,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Kl(this,e,da,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(yc.fromBufferAttribute(a,s),vc.fromBufferAttribute(a,r),t.distanceSqToSegment(yc,vc,zd,gp)>i)return;zd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(zd);if(!(c<e.near||c>e.far))return{distance:c,point:gp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var xp=new R,yp=new R,Aa=class extends _c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xp.fromBufferAttribute(t,s),yp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xp.distanceTo(yp);e.setAttribute("lineDistance",new pt(i,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bc=class extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vp=new Mt,Kd=new ks,Zl=new Ni,Jl=new R,Ra=class extends an{constructor(e=new zt,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;vp.copy(s).invert(),Kd.copy(e.ray).applyMatrix4(vp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=h,x=p;f<x;f++){let m=c.getX(f);Jl.fromBufferAttribute(d,m),_p(Jl,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=h,x=p;f<x;f++)Jl.fromBufferAttribute(d,f),_p(Jl,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _p(n,e,t,i,s,r,o){let a=Kd.distanceSqToPoint(n);if(a<t){let l=new R;Kd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ca=class extends di{constructor(e=[],t=zr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pa=class extends di{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bs=class extends di{constructor(e,t,i=Qi,s,r,o,a=Xn,l=Xn,c,u=Fs,d=1){if(u!==Fs&&u!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new To(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ia=class extends Bs{constructor(e,t=Qi,i=zr,s,r,o=Xn,a=Xn,l,c=Fs){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class n extends zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function f(x,m,g,y,b,v,w,S,_,M,L){let A=v/_,O=w/M,U=v/2,z=w/2,C=S/2,Z=_+1,Q=M+1,Y=0,G=0,H=new R;for(let K=0;K<Q;K++){let N=K*O-z;for(let X=0;X<Z;X++){let ae=X*A-U;H[x]=ae*y,H[m]=N*b,H[g]=C,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=S>0?1:-1,u.push(H.x,H.y,H.z),d.push(X/_),d.push(1-K/M),Y+=1}}for(let K=0;K<M;K++)for(let N=0;N<_;N++){let X=h+N+Z*K,ae=h+N+Z*(K+1),J=h+(N+1)+Z*(K+1),de=h+(N+1)+Z*K;l.push(X,ae,de),l.push(ae,J,de),G+=6}a.addGroup(p,G,L),p+=G,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Sn=class n extends zt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nn=class n extends zt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],f=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function y(){let v=new R,w=new R,S=0,_=(t-e)/i;for(let M=0;M<=r;M++){let L=[],A=M/r,O=A*(t-e)+e;for(let U=0;U<=s;U++){let z=U/s,C=z*l+a,Z=Math.sin(C),Q=Math.cos(C);w.x=O*Z,w.y=-A*i+m,w.z=O*Q,d.push(w.x,w.y,w.z),v.set(Z,_,Q).normalize(),h.push(v.x,v.y,v.z),p.push(z,1-A),L.push(f++)}x.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let A=x[L][M],O=x[L+1][M],U=x[L+1][M+1],z=x[L][M+1];(e>0||L!==0)&&(u.push(A,O,z),S+=3),(t>0||L!==r-1)&&(u.push(O,U,z),S+=3)}c.addGroup(g,S,0),g+=S}function b(v){let w=f,S=new Se,_=new R,M=0,L=v===!0?e:t,A=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*A,0),h.push(0,A,0),p.push(.5,.5),f++;let O=f;for(let U=0;U<=s;U++){let C=U/s*l+a,Z=Math.cos(C),Q=Math.sin(C);_.x=L*Q,_.y=m*A,_.z=L*Z,d.push(_.x,_.y,_.z),h.push(0,A,0),S.x=Z*.5+.5,S.y=Q*.5*A+.5,p.push(S.x,S.y),f++}for(let U=0;U<s;U++){let z=w+U,C=O+U;v===!0?u.push(C,C+1,z):u.push(C+1,C,z),M+=3}c.addGroup(g,M,v===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xs=class n extends Nn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){bt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,s=[],r=[],o=[],a=new R,l=new Mt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Lt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Lt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Io=class extends Si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends Io{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var bp=new R,Mp=new R,Hd=new Ph,Gd=new Ph,Vd=new Ph,Sc=class extends Si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Mp.subVectors(s[0],s[1]).add(s[0]),c=Mp);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(bp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Hd.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,x,m),Gd.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,x,m),Vd.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Gd.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Vd.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Hd.calc(l),Gd.calc(l),Vd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function my(n,e){let t=1-n;return t*t*e}function gy(n,e){return 2*(1-n)*n*e}function xy(n,e){return n*n*e}function ma(n,e,t,i){return my(n,e)+gy(n,t)+xy(n,i)}function yy(n,e){let t=1-n;return t*t*t*e}function vy(n,e){let t=1-n;return 3*t*t*n*e}function _y(n,e){return 3*(1-n)*n*n*e}function by(n,e){return n*n*n*e}function ga(n,e,t,i,s){return yy(n,e)+vy(n,t)+_y(n,i)+by(n,s)}var Da=class extends Si{constructor(e=new Se,t=new Se,i=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,s.x,r.x,o.x,a.x),ga(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends Si{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ga(e,s.x,r.x,o.x,a.x),ga(e,s.y,r.y,o.y,a.y),ga(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Si{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends Si{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oa=class extends Si{constructor(e=new Se,t=new Se,i=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends Si{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y),ma(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Sp(a,l.x,c.x,u.x,d.x),Sp(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Ec=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:Da,CubicBezierCurve3:wc,EllipseCurve:Io,LineCurve:Na,LineCurve3:Dr,QuadraticBezierCurve:Oa,QuadraticBezierCurve3:Nr,SplineCurve:Fa}),Lo=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ec[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},zs=class extends Lo{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Na(this.currentPoint.clone(),new Se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Oa(this.currentPoint.clone(),new Se(e,t),new Se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Da(this.currentPoint.clone(),new Se(e,t),new Se(i,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Io(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends zs{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new zs().fromJSON(s))}return this}};function My(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=x0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ay(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let p=n[h],f=n[h+1];p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ua(r,o,t,a,l,c,0),o}function x0(n,e,t,i,s){let r;if(s===ky(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=wp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=wp(o/i|0,n[o],n[o+1],r);return r&&Do(r,r.next)&&(Ba(r),r=r.next),r}function Or(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Do(t,t.next)||yn(t.prev,t,t.next)===0)){if(Ba(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ua(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ly(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?wy(n,i,s,r):Sy(n)){e.push(l.i,n.i,c.i),Ba(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ey(Or(n),e),Ua(n,e,t,i,s,r,2)):o===2&&Ty(n,e,t,i,s,r):Ua(Or(n),e,t,i,s,r,1);break}}}function Sy(n){let e=n.prev,t=n,i=n.next;if(yn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=d&&f.y<=p&&ha(s,a,r,l,o,c,f.x,f.y)&&yn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function wy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(yn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,l,c),f=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Zd(p,f,e,t,i),y=Zd(x,m,e,t,i),b=n.prevZ,v=n.nextZ;for(;b&&b.z>=g&&v&&v.z<=y;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ha(a,u,l,d,c,h,b.x,b.y)&&yn(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&ha(a,u,l,d,c,h,v.x,v.y)&&yn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=g;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ha(a,u,l,d,c,h,b.x,b.y)&&yn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&ha(a,u,l,d,c,h,v.x,v.y)&&yn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ey(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Do(i,s)&&v0(i,t,t.next,s)&&ka(i,s)&&ka(s,i)&&(e.push(i.i,t.i,s.i),Ba(t),Ba(t.next),t=n=s),t=t.next}while(t!==n);return Or(t)}function Ty(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Oy(o,a)){let l=_0(o,a);o=Or(o,o.next),l=Or(l,l.next),Ua(o,e,t,i,s,r,0),Ua(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ay(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=x0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ny(c))}s.sort(Ry);for(let r=0;r<s.length;r++)t=Cy(s[r],t);return t}function Ry(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Cy(n,e){let t=Py(n,e);if(!t)return e;let i=_0(t,n);return Or(i,i.next),Or(t,t.next)}function Py(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Do(n,t))return t;do{if(Do(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&y0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ka(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Iy(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Iy(n,e){return yn(n.prev,n,e.prev)<0&&yn(e.next,n,n.next)<0}function Ly(n,e,t,i){let s=n;do s.z===0&&(s.z=Zd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Dy(s)}function Dy(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Zd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ny(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function y0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ha(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&y0(n,e,t,i,s,r,o,a)}function Oy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Fy(n,e)&&(ka(n,e)&&ka(e,n)&&Uy(n,e)&&(yn(n.prev,n,e.prev)||yn(n,e.prev,e))||Do(n,e)&&yn(n.prev,n,n.next)>0&&yn(e.prev,e,e.next)>0)}function yn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Do(n,e){return n.x===e.x&&n.y===e.y}function v0(n,e,t,i){let s=Ql(yn(n,e,t)),r=Ql(yn(n,e,i)),o=Ql(yn(t,i,n)),a=Ql(yn(t,i,e));return!!(s!==r&&o!==a||s===0&&jl(n,t,e)||r===0&&jl(n,i,e)||o===0&&jl(t,n,i)||a===0&&jl(t,e,i))}function jl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ql(n){return n>0?1:n<0?-1:0}function Fy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&v0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ka(n,e){return yn(n.prev,n,n.next)<0?yn(n,e,n.next)>=0&&yn(n,n.prev,e)>=0:yn(n,e,n.prev)<0||yn(n,n.next,e)<0}function Uy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _0(n,e){let t=Jd(n.i,n.x,n.y),i=Jd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function wp(n,e,t,i){let s=Jd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ba(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ky(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var jd=class{static triangulate(e,t,i=2){return My(e,t,i)}},Pr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ep(e),Tp(i,e);let o=e.length;t.forEach(Ep);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Tp(i,t[l]);let a=jd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ep(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Tp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ys=class n extends zt{constructor(e=new Ji([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:By,b,v=!1,w,S,_,M;if(g){b=g.getSpacedPoints(u),v=!0,h=!1;let se=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,se),S=new R,_=new R,M=new R}h||(m=0,p=0,f=0,x=0);let L=a.extractPoints(c),A=L.shape,O=L.holes;if(!Pr.isClockWise(A)){A=A.reverse();for(let se=0,k=O.length;se<k;se++){let V=O[se];Pr.isClockWise(V)&&(O[se]=V.reverse())}}function z(se){let V=10000000000000001e-36,ie=se[0];for(let j=1;j<=se.length;j++){let ce=j%se.length,Ae=se[ce],F=Ae.x-ie.x,re=Ae.y-ie.y,he=F*F+re*re,D=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ie.x),Math.abs(ie.y)),Ke=V*D*D;if(he<=Ke){se.splice(ce,1),j--;continue}ie=Ae}}z(A),O.forEach(z);let C=O.length,Z=A;for(let se=0;se<C;se++){let k=O[se];A=A.concat(k)}function Q(se,k,V){return k||wt("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(k,V)}let Y=A.length;function G(se,k,V){let ie,j,ce,Ae=se.x-k.x,F=se.y-k.y,re=V.x-se.x,he=V.y-se.y,D=Ae*Ae+F*F,Ke=Ae*he-F*re;if(Math.abs(Ke)>Number.EPSILON){let at=Math.sqrt(D),yt=Math.sqrt(re*re+he*he),Pe=k.x-F/at,Me=k.y+Ae/at,ve=V.x-he/yt,ze=V.y+re/yt,I=((ve-Pe)*he-(ze-Me)*re)/(Ae*he-F*re);ie=Pe+Ae*I-se.x,j=Me+F*I-se.y;let E=ie*ie+j*j;if(E<=2)return new Se(ie,j);ce=Math.sqrt(E/2)}else{let at=!1;Ae>Number.EPSILON?re>Number.EPSILON&&(at=!0):Ae<-Number.EPSILON?re<-Number.EPSILON&&(at=!0):Math.sign(F)===Math.sign(he)&&(at=!0),at?(ie=-F,j=Ae,ce=Math.sqrt(D)):(ie=Ae,j=F,ce=Math.sqrt(D/2))}return new Se(ie/ce,j/ce)}let H=[];for(let se=0,k=Z.length,V=k-1,ie=se+1;se<k;se++,V++,ie++)V===k&&(V=0),ie===k&&(ie=0),H[se]=G(Z[se],Z[V],Z[ie]);let K=[],N,X=H.concat();for(let se=0,k=C;se<k;se++){let V=O[se];N=[];for(let ie=0,j=V.length,ce=j-1,Ae=ie+1;ie<j;ie++,ce++,Ae++)ce===j&&(ce=0),Ae===j&&(Ae=0),N[ie]=G(V[ie],V[ce],V[Ae]);K.push(N),X=X.concat(N)}let ae;if(m===0)ae=Pr.triangulateShape(Z,O);else{let se=[],k=[];for(let V=0;V<m;V++){let ie=V/m,j=p*Math.cos(ie*Math.PI/2),ce=f*Math.sin(ie*Math.PI/2)+x;for(let Ae=0,F=Z.length;Ae<F;Ae++){let re=Q(Z[Ae],H[Ae],ce);De(re.x,re.y,-j),ie===0&&se.push(re)}for(let Ae=0,F=C;Ae<F;Ae++){let re=O[Ae];N=K[Ae];let he=[];for(let D=0,Ke=re.length;D<Ke;D++){let at=Q(re[D],N[D],ce);De(at.x,at.y,-j),ie===0&&he.push(at)}ie===0&&k.push(he)}}ae=Pr.triangulateShape(se,k)}let J=ae.length,de=f+x;for(let se=0;se<Y;se++){let k=h?Q(A[se],X[se],de):A[se];v?(_.copy(w.normals[0]).multiplyScalar(k.x),S.copy(w.binormals[0]).multiplyScalar(k.y),M.copy(b[0]).add(_).add(S),De(M.x,M.y,M.z)):De(k.x,k.y,0)}for(let se=1;se<=u;se++)for(let k=0;k<Y;k++){let V=h?Q(A[k],X[k],de):A[k];v?(_.copy(w.normals[se]).multiplyScalar(V.x),S.copy(w.binormals[se]).multiplyScalar(V.y),M.copy(b[se]).add(_).add(S),De(M.x,M.y,M.z)):De(V.x,V.y,d/u*se)}for(let se=m-1;se>=0;se--){let k=se/m,V=p*Math.cos(k*Math.PI/2),ie=f*Math.sin(k*Math.PI/2)+x;for(let j=0,ce=Z.length;j<ce;j++){let Ae=Q(Z[j],H[j],ie);De(Ae.x,Ae.y,d+V)}for(let j=0,ce=O.length;j<ce;j++){let Ae=O[j];N=K[j];for(let F=0,re=Ae.length;F<re;F++){let he=Q(Ae[F],N[F],ie);v?De(he.x,he.y+b[u-1].y,b[u-1].x+V):De(he.x,he.y,d+V)}}}xe(),ee();function xe(){let se=s.length/3;if(h){let k=0,V=Y*k;for(let ie=0;ie<J;ie++){let j=ae[ie];dt(j[2]+V,j[1]+V,j[0]+V)}k=u+m*2,V=Y*k;for(let ie=0;ie<J;ie++){let j=ae[ie];dt(j[0]+V,j[1]+V,j[2]+V)}}else{for(let k=0;k<J;k++){let V=ae[k];dt(V[2],V[1],V[0])}for(let k=0;k<J;k++){let V=ae[k];dt(V[0]+Y*u,V[1]+Y*u,V[2]+Y*u)}}i.addGroup(se,s.length/3-se,0)}function ee(){let se=s.length/3,k=0;ye(Z,k),k+=Z.length;for(let V=0,ie=O.length;V<ie;V++){let j=O[V];ye(j,k),k+=j.length}i.addGroup(se,s.length/3-se,1)}function ye(se,k){let V=se.length;for(;--V>=0;){let ie=V,j=V-1;j<0&&(j=se.length-1);for(let ce=0,Ae=u+m*2;ce<Ae;ce++){let F=Y*ce,re=Y*(ce+1),he=k+ie+F,D=k+j+F,Ke=k+j+re,at=k+ie+re;Be(he,D,Ke,at)}}}function De(se,k,V){l.push(se),l.push(k),l.push(V)}function dt(se,k,V){je(se),je(k),je(V);let ie=s.length/3,j=y.generateTopUV(i,s,ie-3,ie-2,ie-1);ue(j[0]),ue(j[1]),ue(j[2])}function Be(se,k,V,ie){je(se),je(k),je(ie),je(k),je(V),je(ie);let j=s.length/3,ce=y.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);ue(ce[0]),ue(ce[1]),ue(ce[3]),ue(ce[1]),ue(ce[2]),ue(ce[3])}function je(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function ue(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ec[s.type]().fromJSON(s)),new n(i,e.options)}},By={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-d),new Se(h,1-f),new Se(x,1-g)]:[new Se(a,1-l),new Se(u,1-d),new Se(p,1-f),new Se(m,1-g)]}};function zy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var za=class n extends zt{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new R,h=new Se,p=new R,f=new R,x=new R,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let y=0;y<=t;y++){let b=i+y*u*s,v=Math.sin(b),w=Math.cos(b);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*v,d.y=e[S].y,d.z=e[S].x*w,o.push(d.x,d.y,d.z),h.x=y/t,h.y=S/(e.length-1),a.push(h.x,h.y);let _=l[3*S+0]*v,M=l[3*S+1],L=l[3*S+0]*w;c.push(_,M,L)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,w=v,S=v+e.length,_=v+e.length+1,M=v+1;r.push(w,S,M),r.push(_,M,S)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var _t=class n extends zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*h-o;for(let b=0;b<c;b++){let v=b*d-r;f.push(v,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),w=y+1+c*(g+1),S=y+1+c*g;p.push(b,v,S),p.push(v,w,S)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},_n=class n extends zt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new R,f=new Se;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,b=y,v=y+i+1,w=y+i+2,S=y+1;a.push(b,v,S),a.push(v,w,S)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var wn=class n extends zt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new R,h=new R,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],b=g/i,v=o+b*a,w=e*Math.cos(v),S=Math.sqrt(e*e-w*w),_=0;g===0&&o===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let L=M/t,A=s+L*r;d.x=-S*Math.cos(A),d.y=w,d.z=S*Math.sin(A),f.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(L+_,1-b),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let b=u[g][y+1],v=u[g][y],w=u[g+1][y],S=u[g+1][y+1];(g!==0||o>0)&&p.push(b,v,S),(g!==i-1||l<Math.PI)&&p.push(v,w,S)}this.setIndex(p),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fi=class n extends zt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new R,p=new R,f=new R;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ha=class n extends zt{constructor(e=new Nr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new Se,u=new R,d=[],h=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),g()}function m(b){u=e.getPointAt(b/t,u);let v=o.normals[b],w=o.binormals[b];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,M=Math.sin(_),L=-Math.cos(_);l.x=L*v.x+M*w.x,l.y=L*v.y+M*w.y,l.z=L*v.z+M*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let w=(s+1)*(b-1)+(v-1),S=(s+1)*b+(v-1),_=(s+1)*b+v,M=(s+1)*(b-1)+v;f.push(w,S,M),f.push(S,_,M)}}function y(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Ec[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ap(s))s.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ap(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ri(n){let e={};for(let t=0;t<n.length;t++){let i=Gr(n[t]);for(let s in i)e[s]=i[s]}return e}function Ap(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ih(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}var Pu={clone:Gr,merge:ri},Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new R().fromArray(s.value);break;case"v4":this.uniforms[i].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},No=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vt=class extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hs=class extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ir('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tc=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ac=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ec(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ar=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rc=class extends ar{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $d:r=e,a=2*t-i;break;case Yd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $d:o=e,l=2*i-t;break;case Yd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),x=f*f,m=x*f,g=-h*m+2*h*x-h*f,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*f+1,b=(-1-p)*m+(1.5+p)*x+.5*f,v=p*m-p*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+y*o[c+w]+b*o[l+w]+v*o[d+w];return r}},Cc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Pc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ic=class extends ar{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(s-t),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let h=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*h+f*2,y=d[g],b=d[g+1],v=e*h+f*2,w=u[v],S=u[v+1],_=Xy(i,t,y,w,s);r[f]=b0(_,x,b,S,m)}return r}};function b0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Wy(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Xy(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=b0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Wy(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var wi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ec(e.settings)&&(i.settings={inTangents:yo(e.settings.inTangents,Array),outTangents:yo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break;case Xd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return bt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return ic;case this.InterpolantFactoryMethodBezier:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ec(this.settings)&&(Rp(this.settings.inTangents,e),Rp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ec(this.settings)&&(Cp(this.settings.inTangents,e),Cp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(wt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(wt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){wt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){wt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Nx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){wt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let x=t[d+f];if(x!==t[h+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Cp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=fc;var lr=class extends wi{constructor(e,t,i){super(e,t,i)}};lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=xa;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}};Lc.prototype.ValueTypeName="color";var Dc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}};Dc.prototype.ValueTypeName="number";var Nc=class extends ar{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ga=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends wi{constructor(e,t,i){super(e,t,i)}};cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=xa;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends wi{constructor(e,t,i,s){super(e,t,i,s)}};Oc.prototype.ValueTypeName="vector";var Fc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},M0=new Fc,Uc=class{constructor(e){this.manager=e!==void 0?e:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Va=class extends an{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wa=class extends Va{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wd=new Mt,Pp=new R,Ip=new R,kc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===So||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tc=new R,nc=new pn,ps=new R,Xa=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,ps.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(tc,nc,ps),ps.x===1&&ps.y===1&&ps.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,ps.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rr=new R,Lp=new Se,Dp=new Se,Wn=class extends Xa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,Lp,Dp),t.subVectors(Dp,Lp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gs=class extends Xa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qd=class extends kc{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Qd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qa=class extends zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var vo=-90,_o=1,Fo=class extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wn(vo,_o,e,t);s.layers=this.layers,this.add(s);let r=new Wn(vo,_o,e,t);r.layers=this.layers,this.add(r);let o=new Wn(vo,_o,e,t);o.layers=this.layers,this.add(o);let a=new Wn(vo,_o,e,t);a.layers=this.layers,this.add(a);let l=new Wn(vo,_o,e,t);l.layers=this.layers,this.add(l);let c=new Wn(vo,_o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Bc=class extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Lh="\\[\\]\\.:\\/",qy=new RegExp("["+Lh+"]","g"),Dh="[^"+Lh+"]",$y="[^"+Lh.replace("\\.","")+"]",Yy=/((?:WC+[\/:])*)/.source.replace("WC",Dh),Ky=/(WCOD+)?/.source.replace("WCOD",$y),Zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dh),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dh),jy=new RegExp("^"+Yy+Ky+Zy+Jy+"$"),Qy=["material","materials","bones","map"],eh=class{constructor(e,t,i){let s=i||fn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},fn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qy,"")}static parseTrackName(e){let t=jy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fn.Composite=eh;fn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fn.prototype.GetterByBindingType=[fn.prototype._getValue_direct,fn.prototype._getValue_array,fn.prototype._getValue_arrayElement,fn.prototype._getValue_toArray];fn.prototype.SetterByBindingTypeAndVersioning=[[fn.prototype._setValue_direct,fn.prototype._setValue_direct_setNeedsUpdate,fn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_array,fn.prototype._setValue_array_setNeedsUpdate,fn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_arrayElement,fn.prototype._setValue_arrayElement_setNeedsUpdate,fn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fn.prototype._setValue_fromArray,fn.prototype._setValue_fromArray_setNeedsUpdate,fn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L2=new Float32Array(1);var Np=new Mt,Fr=class{constructor(e,t,i=0,s=1/0){this.ray=new ks(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):wt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Np),this}intersectObject(e,t=!0,i=[]){return th(e,this,i,t),i.sort(Op),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)th(e[s],this,i,t);return i.sort(Op),i}};function Op(n,e){return n.distance-e.distance}function th(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)th(r[o],e,t,!0)}}var Uo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var $a=class extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Nh(n,e,t,i){let s=ev(i);switch(t){case vh:return n*e;case $c:return n*e/s.components*s.byteLength;case Yc:return n*e/s.components*s.byteLength;case pr:return n*e*2/s.components*s.byteLength;case Kc:return n*e*2/s.components*s.byteLength;case _h:return n*e*3/s.components*s.byteLength;case es:return n*e*4/s.components*s.byteLength;case Zc:return n*e*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jc:case eu:return Math.max(n,16)*Math.max(e,8)/4;case Jc:case Qc:return Math.max(n,8)*Math.max(e,8)/2;case tu:case nu:case su:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:case el:case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bu:case Mu:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wu:case Eu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case tl:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ev(n){switch(n){case mi:case mh:return{byteLength:1,components:1};case Ho:case gh:case pi:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Qi:case Wc:case Oi:return{byteLength:4,components:1};case xh:case yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function W0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function rv(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ov=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,av=`#ifdef USE_ALPHAHASH
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
#endif`,lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pv=`#ifdef USE_BATCHING
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
#endif`,mv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cv=`#define PI 3.141592653589793
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
} // validated`,Pv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qv=`#ifdef USE_GRADIENTMAP
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
}`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jv=`#ifdef USE_ENVMAP
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
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
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
#endif`,i_=`uniform sampler2D dfgLUT;
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
}`,s_=`
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,l_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v_=`#if defined( USE_MORPHCOLORS )
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
#endif`,__=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform float backgroundBlurriness;
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,f1=`#define DISTANCE
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
}`,p1=`#define DISTANCE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,b1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,S1=`#define MATCAP
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
}`,w1=`#define MATCAP
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
}`,E1=`#define NORMAL
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
}`,T1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,L1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,F1=`uniform vec3 color;
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
}`,U1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:ov,alphahash_pars_fragment:av,alphamap_fragment:lv,alphamap_pars_fragment:cv,alphatest_fragment:uv,alphatest_pars_fragment:dv,aomap_fragment:hv,aomap_pars_fragment:fv,batching_pars_vertex:pv,batching_vertex:mv,begin_vertex:gv,beginnormal_vertex:xv,bsdfs:yv,iridescence_fragment:vv,bumpmap_pars_fragment:_v,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Mv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:wv,color_fragment:Ev,color_pars_fragment:Tv,color_pars_vertex:Av,color_vertex:Rv,common:Cv,defaultnormal_vertex:Pv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Lv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Nv,colorspace_fragment:Ov,colorspace_pars_fragment:Fv,envmap_fragment:Uv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Jv,envmap_vertex:Hv,fog_vertex:Gv,fog_pars_vertex:Vv,fog_fragment:Wv,fog_pars_fragment:Xv,gradientmap_pars_fragment:qv,lightmap_pars_fragment:$v,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:Kv,lights_pars_begin:Zv,lights_toon_fragment:jv,lights_toon_pars_fragment:Qv,lights_phong_fragment:e_,lights_phong_pars_fragment:t_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,lightprobes_pars_fragment:a_,logdepthbuf_fragment:l_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:h_,map_pars_fragment:f_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:x_,morphinstance_vertex:y_,morphcolor_vertex:v_,morphnormal_vertex:__,morphtarget_pars_vertex:b_,morphtarget_vertex:M_,normal_fragment_begin:S_,normal_fragment_maps:w_,normal_pars_fragment:E_,normal_pars_vertex:T_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:U_,dithering_pars_fragment:k_,roughnessmap_fragment:B_,roughnessmap_pars_fragment:z_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:G_,shadowmap_vertex:V_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:$_,skinnormal_vertex:Y_,specularmap_fragment:K_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:j_,transmission_fragment:Q_,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:s1,background_vert:r1,background_frag:o1,backgroundCube_vert:a1,backgroundCube_frag:l1,cube_vert:c1,cube_frag:u1,depth_vert:d1,depth_frag:h1,distance_vert:f1,distance_frag:p1,equirect_vert:m1,equirect_frag:g1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:v1,meshbasic_frag:_1,meshlambert_vert:b1,meshlambert_frag:M1,meshmatcap_vert:S1,meshmatcap_frag:w1,meshnormal_vert:E1,meshnormal_frag:T1,meshphong_vert:A1,meshphong_frag:R1,meshphysical_vert:C1,meshphysical_frag:P1,meshtoon_vert:I1,meshtoon_frag:L1,points_vert:D1,points_frag:N1,shadow_vert:O1,shadow_frag:F1,sprite_vert:U1,sprite_frag:k1},Je={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ss={basic:{uniforms:ri([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ri([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ri([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ri([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ri([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ri([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ri([Je.points,Je.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ri([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ri([Je.common,Je.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ri([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ri([Je.sprite,Je.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:ri([Je.common,Je.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:ri([Je.lights,Je.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Ss.physical={uniforms:ri([Ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Iu={r:0,b:0,g:0},B1=new Mt,X0=new Tt;X0.set(-1,0,0,0,1,0,0,0,1);function z1(n,e,t,i,s,r){let o=new Fe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=e.get(b,v)}return b}function f(y){let b=!1,v=p(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,b){let v=p(b);v&&v.isCubeTexture?(c===void 0&&(c=new tt(new Ht(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Gr(Ss.backgroundCube.uniforms),vertexShader:Ss.backgroundCube.vertexShader,fragmentShader:Ss.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B1.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(X0),c.material.toneMapped=Bt.getTransfer(v.colorSpace)!==tn,(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tt(new _t(2,2),new sn({name:"BackgroundMaterial",uniforms:Gr(Ss.background.uniforms),vertexShader:Ss.background.vertexShader,fragmentShader:Ss.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(v.colorSpace)!==tn,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Iu,Ih(n)),t.buffers.color.setClear(Iu.r,Iu.g,Iu.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:f,addToRenderList:x,dispose:g}}function H1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(O,U,z,C,Z){let Q=!1,Y=d(O,C,z,U);r!==Y&&(r=Y,c(r.object)),Q=p(O,C,z,Z),Q&&f(O,C,z,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(O,U,z,C),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function u(O){return n.deleteVertexArray(O)}function d(O,U,z,C){let Z=C.wireframe===!0,Q=i[U.id];Q===void 0&&(Q={},i[U.id]=Q);let Y=O.isInstancedMesh===!0?O.id:0,G=Q[Y];G===void 0&&(G={},Q[Y]=G);let H=G[z.id];H===void 0&&(H={},G[z.id]=H);let K=H[Z];return K===void 0&&(K=h(l()),H[Z]=K),K}function h(O){let U=[],z=[],C=[];for(let Z=0;Z<t;Z++)U[Z]=0,z[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:C,object:O,attributes:{},index:null}}function p(O,U,z,C){let Z=r.attributes,Q=U.attributes,Y=0,G=z.getAttributes();for(let H in G)if(G[H].location>=0){let N=Z[H],X=Q[H];if(X===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),N===void 0||N.attribute!==X||X&&N.data!==X.data)return!0;Y++}return r.attributesNum!==Y||r.index!==C}function f(O,U,z,C){let Z={},Q=U.attributes,Y=0,G=z.getAttributes();for(let H in G)if(G[H].location>=0){let N=Q[H];N===void 0&&(H==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),H==="instanceColor"&&O.instanceColor&&(N=O.instanceColor));let X={};X.attribute=N,N&&N.data&&(X.data=N.data),Z[H]=X,Y++}r.attributes=Z,r.attributesNum=Y,r.index=C}function x(){let O=r.newAttributes;for(let U=0,z=O.length;U<z;U++)O[U]=0}function m(O){g(O,0)}function g(O,U){let z=r.newAttributes,C=r.enabledAttributes,Z=r.attributeDivisors;z[O]=1,C[O]===0&&(n.enableVertexAttribArray(O),C[O]=1),Z[O]!==U&&(n.vertexAttribDivisor(O,U),Z[O]=U)}function y(){let O=r.newAttributes,U=r.enabledAttributes;for(let z=0,C=U.length;z<C;z++)U[z]!==O[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(O,U,z,C,Z,Q,Y){Y===!0?n.vertexAttribIPointer(O,U,z,Z,Q):n.vertexAttribPointer(O,U,z,C,Z,Q)}function v(O,U,z,C){x();let Z=C.attributes,Q=z.getAttributes(),Y=U.defaultAttributeValues;for(let G in Q){let H=Q[G];if(H.location>=0){let K=Z[G];if(K===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),K!==void 0){let N=K.normalized,X=K.itemSize,ae=e.get(K);if(ae===void 0)continue;let J=ae.buffer,de=ae.type,xe=ae.bytesPerElement,ee=de===n.INT||de===n.UNSIGNED_INT||K.gpuType===Wc;if(K.isInterleavedBufferAttribute){let ye=K.data,De=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,dt=K.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Be=0;Be<H.locationSize;Be++)g(H.location+Be,ye.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Be=0;Be<H.locationSize;Be++)b(H.location+Be,X/H.locationSize,de,N,De*xe,(dt+X/H.locationSize*Be)*xe,ee)}else{if(K.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)g(H.location+ye,K.meshPerAttribute);O.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ye=0;ye<H.locationSize;ye++)b(H.location+ye,X/H.locationSize,de,N,X*xe,X/H.locationSize*ye*xe,ee)}}else if(Y!==void 0){let N=Y[G];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(H.location,N);break;case 3:n.vertexAttrib3fv(H.location,N);break;case 4:n.vertexAttrib4fv(H.location,N);break;default:n.vertexAttrib1fv(H.location,N)}}}}y()}function w(){L();for(let O in i){let U=i[O];for(let z in U){let C=U[z];for(let Z in C){let Q=C[Z];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete C[Z]}}delete i[O]}}function S(O){if(i[O.id]===void 0)return;let U=i[O.id];for(let z in U){let C=U[z];for(let Z in C){let Q=C[Z];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete C[Z]}}delete i[O.id]}function _(O){for(let U in i){let z=i[U];for(let C in z){let Z=z[C];if(Z[O.id]===void 0)continue;let Q=Z[O.id];for(let Y in Q)u(Q[Y].object),delete Q[Y];delete Z[O.id]}}}function M(O){for(let U in i){let z=i[U],C=O.isInstancedMesh===!0?O.id:0,Z=z[C];if(Z!==void 0){for(let Q in Z){let Y=Z[Q];for(let G in Y)u(Y[G].object),delete Y[G];delete Z[Q]}delete z[C],Object.keys(z).length===0&&delete i[U]}}}function L(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function G1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function V1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==es&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==mi&&_!==Oi&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:w,samples:S}}function W1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ui,a=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,b=y*4,v=g.clippingState||null;l.value=v,v=u(f,h,b,p);for(let w=0;w!==b;++w)v[w]=t[w];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=p;b!==x;++b,v+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var sl=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ca(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:kr});r.uniforms.tEquirect.value=t;let o=new tt(s,r),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=vn),new Fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},S0=256,X1=3,q1=20,q0=256,$0=16,$1=3,Y1=new R,K1=new Fe,Vo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fo(1,10,null),this._boxMesh=new tt(new Ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Y1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(K1));let m=new Fo(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(S0,Ah(e))}_fromTexture(e,t){e.mapping===zr||e.mapping===zo?this._setSize(e.image.length===0?S0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=w0(e,!1,!1),i=Math.log2(e)-X1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=w0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zr||e.mapping===zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=E0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Z1(),this._integrationMaterial=J1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-$1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(q0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=j1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function w0(n,e,t){return new sl(n,{minFilter:ji,generateMipmaps:e,type:pi,colorSpace:ya,depthBuffer:t})}function rl(n,e,t){return new sn({name:n,uniforms:e,vertexShader:Nt.cube_vert,fragmentShader:t,side:jn,blending:kr,depthTest:!1,depthWrite:!1})}function Z1(){return rl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${q0}u

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
	`)}function J1(){return rl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$0}},`

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
	`)}function j1(){return rl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${q1}
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
	`)}function E0(){return rl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function T0(){return rl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Q1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Hc||p===Gc)if(e.has(h)){let f=e.get(h).texture;return a(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let x=new sl(f.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===Hc||p===Gc,x=p===zr||p===zo;if(f||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Vo(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return f&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Vo(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Hc?h.mapping=zr:p===Gc&&(h.mapping=zo),h}function l(h){let p=0,f=6;for(let x=0;x<f;x++)h[x]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function eb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ir("WebGLRenderer: "+i+" extension not supported."),s}}}function tb(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(f){let x=f.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?wa:Sa,v=new b(Math.ceil(y/3)*6,1),w=v.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,L=0;M<y;M+=3){let A=_[M+0],O=_[M+1],U=_[M+2];w[L++]=A,w[L++]=O,w[L++]=O,w[L++]=U,w[L++]=U,w[L++]=A}}else{g=m.version;for(let _=0,M=0;_<y;_+=3){let L=_+0,A=_+1,O=_+2;w[M++]=L,w[M++]=A,w[M++]=A,w[M++]=O,w[M++]=O,w[M++]=L}}v.version=g;let S=r.get(f);S&&e.remove(S),r.set(f,v)}function h(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function nb(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ib(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:wt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function sb(n,e,t){let i=new WeakMap,s=new cn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let L=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*w*4*d),_=new Ma(S,v,w,d);_.type=Oi,_.needsUpdate=!0;let M=b*4;for(let A=0;A<d;A++){let O=m[A],U=g[A],z=y[A],C=v*w*4*A;for(let Z=0;Z<O.count;Z++){let Q=Z*M;p===!0&&(s.fromBufferAttribute(O,Z),S[C+Q+0]=s.x,S[C+Q+1]=s.y,S[C+Q+2]=s.z,S[C+Q+3]=0),f===!0&&(s.fromBufferAttribute(U,Z),S[C+Q+4]=s.x,S[C+Q+5]=s.y,S[C+Q+6]=s.z,S[C+Q+7]=0),x===!0&&(s.fromBufferAttribute(z,Z),S[C+Q+8]=s.x,S[C+Q+9]=s.y,S[C+Q+10]=s.z,S[C+Q+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new Se(v,w)},i.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function rb(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var ob={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function ab(n,e,t,i,s,r){let o=new Zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new zt;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));let d=new No({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new tt(u,d),p=new Gs(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,y=null,b=[],v=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),l!==null&&l.setSize(w,S);for(let _=0;_<b.length;_++){let M=b[_];M.setSize&&M.setSize(w,S)}},this.setEffects=function(w){b=w,v=b.length>0&&b[0].isRenderPass===!0;let S=o.width,_=o.height;b.length>0&&a===null&&(a=new Zn(S,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(S,_,{type:pi,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(L=>L.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&c===null&&(c=new Bs(S,_),r===!0&&(c.format=Vs,c.type=Hr)),o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let L=0;L<b.length;L++){let A=b[L];A.setSize&&A.setSize(S,_),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,S){if(m||w.toneMapping===bs&&b.length===0)return!1;if(y=S,S!==null){let _=S.width,M=S.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return v===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=bs,!0},this.hasRenderPass=function(){return v},this.end=function(w,S){w.toneMapping=g,m=!0;let _=o,M=a;for(let L=0;L<b.length;L++){let A=b[L];A.enabled!==!1&&(A.render(w,M,_,S),A.needsSwap!==!1&&(_=M,M=M===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,d.defines={},Bt.getTransfer(f)===tn&&(d.defines.SRGB_TRANSFER="");let L=ob[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(y),w.render(h,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Y0=new di,K0=new Bs(1,1),Z0=new Ia(1),J0=new Ma,j0=new gc,Q0=new Ca,A0=[],R0=[],C0=new Float32Array(16),P0=new Float32Array(9),I0=new Float32Array(4);function Wo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=A0[s];if(r===void 0&&(r=new Float32Array(s),A0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nu(n,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),Fn(t,e)}}function ub(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),Fn(t,e)}}function db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),Fn(t,e)}}function hb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;I0.set(i),n.uniformMatrix2fv(this.addr,!1,I0),Fn(t,i)}}function fb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;P0.set(i),n.uniformMatrix3fv(this.addr,!1,P0),Fn(t,i)}}function pb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(On(t,i))return;C0.set(i),n.uniformMatrix4fv(this.addr,!1,C0),Fn(t,i)}}function mb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),Fn(t,e)}}function xb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),Fn(t,e)}}function yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),Fn(t,e)}}function vb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _b(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),Fn(t,e)}}function bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),Fn(t,e)}}function Mb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),Fn(t,e)}}function Ou(n){return n.version===0&&(n.compareFunction=Sh,n.needsUpdate=!0),n}function Sb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ou(K0):r=Y0,t.setTexture2D(e||r,s)}function wb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||j0,s)}function Eb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ou(Z0):r=Q0,t.setTextureCube(e||r,s)}function Tb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||J0,s)}function Ab(n){switch(n){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return db;case 35674:return hb;case 35675:return fb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return xb;case 35669:case 35673:return yb;case 5125:return vb;case 36294:return _b;case 36295:return bb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}function Rb(n,e){n.uniform1fv(this.addr,e)}function Cb(n,e){let t=Wo(e,this.size,2);n.uniform2fv(this.addr,t)}function Pb(n,e){let t=Wo(e,this.size,3);n.uniform3fv(this.addr,t)}function Ib(n,e){let t=Wo(e,this.size,4);n.uniform4fv(this.addr,t)}function Lb(n,e){let t=Wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Db(n,e){let t=Wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nb(n,e){let t=Wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ob(n,e){n.uniform1iv(this.addr,e)}function Fb(n,e){n.uniform2iv(this.addr,e)}function Ub(n,e){n.uniform3iv(this.addr,e)}function kb(n,e){n.uniform4iv(this.addr,e)}function Bb(n,e){n.uniform1uiv(this.addr,e)}function zb(n,e){n.uniform2uiv(this.addr,e)}function Hb(n,e){n.uniform3uiv(this.addr,e)}function Gb(n,e){n.uniform4uiv(this.addr,e)}function Vb(n,e,t){let i=this.cache,s=e.length,r=Nu(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ou(K0):o=Y0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Wb(n,e,t){let i=this.cache,s=e.length,r=Nu(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||j0,r[o])}function Xb(n,e,t){let i=this.cache,s=e.length,r=Nu(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Ou(Z0):o=Q0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function qb(n,e,t){let i=this.cache,s=e.length,r=Nu(t,s);On(i,r)||(n.uniform1iv(this.addr,r),Fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||J0,r[o])}function $b(n){switch(n){case 5126:return Rb;case 35664:return Cb;case 35665:return Pb;case 35666:return Ib;case 35674:return Lb;case 35675:return Db;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Fb;case 35668:case 35672:return Ub;case 35669:case 35673:return kb;case 5125:return Bb;case 36294:return zb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return qb}}var Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ab(t.type)}},kh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$b(t.type)}},Bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function L0(n,e){n.seq.push(e),n.map[e.id]=e}function Yb(n,e,t){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){L0(t,c===void 0?new Uh(a,n,e):new kh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Bh(a),L0(t,d)),t=d}}}var Go=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Yb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function D0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Kb=37297,Zb=0;function Jb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var N0=new Tt;function jb(n){Bt._getMatrix(N0,Bt.workingColorSpace,n);let e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case va:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function O0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jb(n.getShaderSource(e),a)}else return r}function Qb(n,e){let t=jb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var eM={[lh]:"Linear",[ch]:"Reinhard",[uh]:"Cineon",[dh]:"ACESFilmic",[fh]:"AgX",[Ya]:"Neutral",[hh]:"Custom"};function tM(n,e){let t=eM[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lu=new R;function nM(){Bt.getLuminanceCoefficients(Lu);let n=Lu.x.toFixed(4),e=Lu.y.toFixed(4),t=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function sM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function il(n){return n!==""}function F0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function U0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(n){return n.replace(oM,aM)}function aM(n,e){let t=Nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zh(t)}var lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(n){return n.replace(lM,cM)}function cM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function B0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var uM={[Ur]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function dM(n){return uM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hM={[zo]:"ENVMAP_MODE_REFRACTION"};function fM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pM={[ah]:"ENVMAP_BLENDING_MULTIPLY",[e0]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function mM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pM[n.combine]||"ENVMAP_BLENDING_NONE"}function gM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=dM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=fM(t),d=mM(t),h=iM(t),p=sM(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(il).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(il).join(`
`),m.length>0&&(m+=`
`)):(x=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),m=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?Nt.tonemapping_pars_fragment:"",t.toneMapping!==bs?tM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),nM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(il).join(`
`)),o=zh(o),o=F0(o,t),o=U0(o,t),a=zh(a),a=F0(a,t),a=U0(a,t),o=k0(o),a=k0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,b=g+m+a,v=D0(s,s.VERTEX_SHADER,y),w=D0(s,s.FRAGMENT_SHADER,b);s.attachShader(f,v),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function S(A){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(f)||"",U=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",C=O.trim(),Z=U.trim(),Q=z.trim(),Y=!0,G=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,v,w);else{let H=O0(s,v,"vertex"),K=O0(s,w,"fragment");wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+H+`
`+K)}else C!==""?bt("WebGLProgram: Program Info Log:",C):(Z===""||Q==="")&&(G=!1);G&&(A.diagnostics={runnable:Y,programLog:C,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(v),s.deleteShader(w),_=new Go(s,f),M=rM(s,f)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(f,Kb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=w,this}var xM=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gh(e),t.set(e,i)),i}},Gh=class{constructor(e){this.id=xM++,this.code=e,this.usedTimes=0}};function yM(n){return n===pr||n===el||n===tl}function vM(n,e,t,i,s,r){let o=new Ao,a=new Hh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,M,L,A,O,U){let z=A.fog,C=O.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||Z,Q),G=h[_.type],H=i.precision;_.precision!==null&&(H=i.getMaxPrecision(_.precision),H!==_.precision&&bt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,N=K!==void 0?K.length:0,X=0;C.morphAttributes.position!==void 0&&(X=1),C.morphAttributes.normal!==void 0&&(X=2),C.morphAttributes.color!==void 0&&(X=3);let ae,J,de,xe;if(G){let $e=Ss[G];ae=$e.vertexShader,J=$e.fragmentShader}else{ae=_.vertexShader,J=_.fragmentShader;let $e=a.getVertexShaderStage(_),Vt=a.getFragmentShaderStage(_);a.update(_,$e,Vt),de=$e.id,xe=Vt.id}let ee=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,dt=O.isBatchedMesh===!0,Be=!!_.map,je=!!_.matcap,ue=!!Y,se=ue&&Y.isPMREMTexture===!0,k=!!_.aoMap,V=!!_.lightMap,ie=!!_.bumpMap&&_.wireframe===!1,j=!!_.normalMap,ce=!!_.displacementMap,Ae=!!_.emissiveMap,F=!!_.metalnessMap,re=!!_.roughnessMap,he=_.anisotropy>0,D=_.clearcoat>0,Ke=_.diffuseRoughness>0,at=_.dispersion>0,yt=_.retroreflectivity>0,Pe=_.iridescence>0,Me=_.sheen>0,ve=_.transmission>0,ze=he&&!!_.anisotropyMap,I=D&&!!_.clearcoatMap,E=D&&!!_.clearcoatNormalMap,$=D&&!!_.clearcoatRoughnessMap,we=Ke&&!!_.diffuseRoughnessMap,me=Pe&&!!_.iridescenceMap,Oe=Pe&&!!_.iridescenceThicknessMap,Ve=Me&&!!_.sheenColorMap,ge=Me&&!!_.sheenRoughnessMap,_e=!!_.specularMap,He=!!_.specularColorMap,B=!!_.specularIntensityMap,be=ve&&!!_.transmissionMap,fe=ve&&!!_.thicknessMap,Ge=!!_.gradientMap,Ie=!!_.alphaMap,ke=_.alphaTest>0,st=!!_.alphaHash,At=!!_.extensions,pe=bs;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(pe=n.toneMapping);let nt=se?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,mt={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:J,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:dt,batchingColor:dt&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:je,envMap:ue,envMapMode:ue&&Y.mapping,envMapPMREM:se,envMapMaxLod:se?nt.length-1:null,envMapSize:se?nt[0].width:null,aoMap:k,lightMap:V,bumpMap:ie,normalMap:j,displacementMap:ce,emissiveMap:Ae,normalMapObjectSpace:j&&_.normalMapType===s0,normalMapTangentSpace:j&&_.normalMapType===Au,packedNormalMap:j&&_.normalMapType===Au&&yM(_.normalMap.format),metalnessMap:F,roughnessMap:re,anisotropy:he,anisotropyMap:ze,clearcoat:D,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:$,diffuseRoughness:Ke,diffuseRoughnessMap:we,dispersion:at,retroreflection:yt,iridescence:Pe,iridescenceMap:me,iridescenceThicknessMap:Oe,sheen:Me,sheenColorMap:Ve,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:He,specularIntensityMap:B,transmission:ve,transmissionMap:be,thicknessMap:fe,gradientMap:Ge,opaque:_.transparent===!1&&_.blending===_s&&_.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ke,alphaHash:st,combine:_.combine,mapUv:Be&&p(_.map.channel),aoMapUv:k&&p(_.aoMap.channel),lightMapUv:V&&p(_.lightMap.channel),bumpMapUv:ie&&p(_.bumpMap.channel),normalMapUv:j&&p(_.normalMap.channel),displacementMapUv:ce&&p(_.displacementMap.channel),emissiveMapUv:Ae&&p(_.emissiveMap.channel),metalnessMapUv:F&&p(_.metalnessMap.channel),roughnessMapUv:re&&p(_.roughnessMap.channel),anisotropyMapUv:ze&&p(_.anisotropyMap.channel),clearcoatMapUv:I&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:me&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&p(_.sheenRoughnessMap.channel),specularMapUv:_e&&p(_.specularMap.channel),specularColorMapUv:He&&p(_.specularColorMap.channel),specularIntensityMapUv:B&&p(_.specularIntensityMap.channel),transmissionMapUv:be&&p(_.transmissionMap.channel),thicknessMapUv:fe&&p(_.thicknessMap.channel),alphaMapUv:Ie&&p(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(j||he),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!C.attributes.uv&&(Be||Ie),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&j===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter($e=>$e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:pe,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&Bt.getTransfer(_.map.colorSpace)===tn,decodeVideoTextureEmissive:Ae&&_.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(_.emissiveMap.colorSpace)===tn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)M.push(L),M.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let M=h[_.type],L;if(M){let A=Ss[M];L=Pu.clone(A.uniforms)}else L=_.uniforms;return L}function b(_,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new gM(n,M,_,s),c.push(L),u.set(M,L)),L}function v(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function S(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:S}}function _M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function bM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function H0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,x,m,g){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=f,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=m,y.group=g),e++,y}function l(h,p,f,x,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(h,p,f,x,m,g);f.transmission>0?i.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(h,p,f,x,m,g){let y=a(h,p,f,x,m,g);f.transmission>0?i.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||bM),i.length>1&&i.sort(p||z0),s.length>1&&s.sort(p||z0)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function MM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new H0,n.set(i,[o])):s>=r.length?(o=new H0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function SM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Fe};break;case"SpotLight":t={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function wM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var EM=0;function TM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function AM(n){let e=new SM,t=wM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new Mt,o=new Mt;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,y=0,b=0,v=0,w=0,S=0,_=0,M=0,L=0,A=0;c.sort(TM);for(let U=0,z=c.length;U<z;U++){let C=c[U],Z=C.color,Q=C.intensity,Y=C.distance,G=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===pr?G=C.shadow.map.texture:G=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=Z.r*Q,d+=Z.g*Q,h+=Z.b*Q;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],Q);A++}else if(C.isSunLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,N=t.get(C);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[f]=N,i.sunShadowMap[f]=G;let X=K.getViewportCount();for(let ae=0;ae<X;ae++)i.sunShadowMatrix[x+ae]=K.getMatrix(ae),i.sunShadowCascade[x+ae]=K._cascadeData[ae];x+=X,f++}i.sun[p]=H,p++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,N=t.get(C);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=H,m++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(Z).multiplyScalar(Q),H.distance=Y,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[y]=H;let K=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,K.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[y]=K.matrix,C.castShadow){let N=t.get(C);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=G,_++}y++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(Z).multiplyScalar(Q),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[b]=H,b++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let K=C.shadow,N=t.get(C);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=H,g++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(Q),H.groundColor.copy(C.groundColor).multiplyScalar(Q),i.hemi[v]=H,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Je.LTC_FLOAT_1,i.rectAreaLTC2=Je.LTC_FLOAT_2):(i.rectAreaLTC1=Je.LTC_HALF_1,i.rectAreaLTC2=Je.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let O=i.hash;(O.sunLength!==p||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==b||O.hemiLength!==v||O.numSunShadows!==f||O.numDirectionalShadows!==w||O.numPointShadows!==S||O.numSpotShadows!==_||O.numSpotMaps!==M||O.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=g,i.hemi.length=v,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-L,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,O.sunLength=p,O.directionalLength=m,O.pointLength=g,O.spotLength=y,O.rectAreaLength=b,O.hemiLength=v,O.numSunShadows=f,O.numDirectionalShadows=w,O.numPointShadows=S,O.numSpotShadows=_,O.numSpotMaps=M,O.numLightProbes=A,i.version=EM++)}function l(c,u){let d=0,h=0,p=0,f=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(v.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function G0(n){let e=new AM(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RM(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new G0(n),e.set(s,[a])):r>=o.length?(a=new G0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`,IM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],LM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],V0=new Mt,nl=new R,Fh=new R;function DM(n,e,t){let i=new or,s=new Se,r=new Se,o=new cn,a=new Tc,l=new Ac,c={},u=t.maxTextureSize,d={[vs]:jn,[jn]:vs,[Jt]:Jt},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:CM,fragmentShader:PM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new zt;f.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let g=this.type;this.render=function(S,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===kp&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);let L=n.getRenderTarget(),A=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),U=n.state;U.setBlending(kr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(Z=>Z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,Z=S.length;C<Z;C++){let Q=S[C],Y=Q.shadow;if(Y===void 0){bt("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let G=Y.getFrameExtents();s.multiply(G),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,Y.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=H,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ko){if(Q.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Zn(s.x,s.y,{format:pr,type:pi,minFilter:vn,magFilter:vn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new Bs(s.x,s.y,Oi),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Fs,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xn,Y.map.depthTexture.magFilter=Xn}else Q.isPointLight?(Y.map=new sl(s.x),Y.map.depthTexture=new Ia(s.x,Qi)):(Y.map=new Zn(s.x,s.y),Y.map.depthTexture=new Bs(s.x,s.y,Qi)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Fs,this.type===Ur?(Y.map.depthTexture.compareFunction=H?Mh:bh,Y.map.depthTexture.minFilter=vn,Y.map.depthTexture.magFilter=vn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Xn,Y.map.depthTexture.magFilter=Xn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let K=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,M);let N=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:M.layers;for(let X=0;X<K;X++){let ae=Y.getCamera(X);if(Q.isPointLight){let J=Y.camera,de=Y.matrix,xe=Q.distance||J.far;xe!==J.far&&(J.far=xe,J.updateProjectionMatrix()),nl.setFromMatrixPosition(Q.matrixWorld),J.position.copy(nl),Fh.copy(J.position),Fh.add(IM[X]),J.up.copy(LM[X]),J.lookAt(Fh),J.updateMatrixWorld(),de.makeTranslation(-nl.x,-nl.y,-nl.z),V0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(V0,J.coordinateSystem,J.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,X),n.clear();else{X===0&&(n.setRenderTarget(Y.map),n.clear());let J=Y.getViewport(X);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(o)}i=Y.getFrustum(X),v(_,M,ae,Q,N,this.type)}Y.isPointLightShadow!==!0&&this.type===ko&&y(Y,M),Y.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,A,O)};function y(S,_){let M=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Zn(s.x,s.y,{format:pr,type:pi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(_,null,M,h,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(_,null,M,p,x,null)}function b(S,_,M,L){let A=null,O=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)A=O;else if(A=M.isPointLight===!0?l:a,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=A.uuid,z=_.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let Z=C[z];Z===void 0&&(Z=A.clone(),C[z]=Z,_.addEventListener("dispose",w)),A=Z}if(A.visible=_.visible,A.wireframe=_.wireframe,L===ko?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=n.properties.get(A);U.light=M}return A}function v(S,_,M,L,A,O){if(S.visible===!1)return;if(S.layers.test(A)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&O===ko)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let C=e.update(S),Z=S.material;if(Array.isArray(Z)){let Q=C.groups;for(let Y=0,G=Q.length;Y<G;Y++){let H=Q[Y],K=Z[H.materialIndex];if(K&&K.visible){let N=b(S,K,L,O);S.onBeforeShadow(n,S,_,M,C,N,H),n.renderBufferDirect(M,null,C,N,S,H),S.onAfterShadow(n,S,_,M,C,N,H)}}}else if(Z.visible){let Q=b(S,Z,L,O);S.onBeforeShadow(n,S,_,M,C,Q,null),n.renderBufferDirect(M,null,C,Q,S,null),S.onAfterShadow(n,S,_,M,C,Q,null)}}let z=S.children;for(let C=0,Z=z.length;C<Z;C++)v(z[C],_,M,L,A,O)}function w(S){S.target.removeEventListener("dispose",w);for(let M in c){let L=c[M],A=S.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function NM(n,e){function t(){let B=!1,be=new cn,fe=null,Ge=new cn(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!B&&(n.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){B=Ie},setClear:function(Ie,ke,st,At,pe){pe===!0&&(Ie*=At,ke*=At,st*=At),be.set(Ie,ke,st,At),Ge.equals(be)===!1&&(n.clearColor(Ie,ke,st,At),Ge.copy(be))},reset:function(){B=!1,fe=null,Ge.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,fe=null,Ge=null,Ie=null;return{setReversed:function(ke){if(be!==ke){let st=e.get("EXT_clip_control");ke?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),be=ke;let At=Ie;Ie=null,this.setClear(At)}},getReversed:function(){return be},setTest:function(ke){ke?ye(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ke){fe!==ke&&!B&&(n.depthMask(ke),fe=ke)},setFunc:function(ke){if(be&&(ke=p0[ke]),Ge!==ke){switch(ke){case rc:n.depthFunc(n.NEVER);break;case oc:n.depthFunc(n.ALWAYS);break;case ac:n.depthFunc(n.LESS);break;case Mo:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Ie!==ke&&(Ie=ke,be&&(ke=1-ke),n.clearDepth(ke))},reset:function(){B=!1,fe=null,Ge=null,Ie=null,be=!1}}}function s(){let B=!1,be=null,fe=null,Ge=null,Ie=null,ke=null,st=null,At=null,pe=null;return{setTest:function(nt){B||(nt?ye(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(nt){be!==nt&&!B&&(n.stencilMask(nt),be=nt)},setFunc:function(nt,mt,$e){(fe!==nt||Ge!==mt||Ie!==$e)&&(n.stencilFunc(nt,mt,$e),fe=nt,Ge=mt,Ie=$e)},setOp:function(nt,mt,$e){(ke!==nt||st!==mt||At!==$e)&&(n.stencilOp(nt,mt,$e),ke=nt,st=mt,At=$e)},setLocked:function(nt){B=nt},setClear:function(nt){pe!==nt&&(n.clearStencil(nt),pe=nt)},reset:function(){B=!1,be=null,fe=null,Ge=null,Ie=null,ke=null,st=null,At=null,pe=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,v=null,w=null,S=null,_=null,M=new Fe(0,0,0),L=0,A=!1,O=null,U=null,z=null,C=null,Z=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,G=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=G>=2);let K=null,N={},X=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),J=new cn().fromArray(X),de=new cn().fromArray(ae);function xe(B,be,fe,Ge){let Ie=new Uint8Array(4),ke=n.createTexture();n.bindTexture(B,ke),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<fe;st++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(be+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return ke}let ee={};ee[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(Mo),ie(!1),j(ih),ye(n.CULL_FACE),k(kr);function ye(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function De(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function dt(B,be){return h[B]!==be?(n.bindFramebuffer(B,be),h[B]=be,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Be(B,be){let fe=f,Ge=!1;if(B){fe=p.get(be),fe===void 0&&(fe=[],p.set(be,fe));let Ie=B.textures;if(fe.length!==Ie.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,st=Ie.length;ke<st;ke++)fe[ke]=n.COLOR_ATTACHMENT0+ke;fe.length=Ie.length,Ge=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(fe)}function je(B){return x!==B?(n.useProgram(B),x=B,!0):!1}let ue={[Br]:n.FUNC_ADD,[Bp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};ue[Hp]=n.MIN,ue[Gp]=n.MAX;let se={[zc]:n.ZERO,[hr]:n.ONE,[Vp]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[$p]:n.DST_COLOR,[Xp]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[fr]:n.ONE_MINUS_SRC_ALPHA,[Yp]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[Zp]:n.CONSTANT_COLOR,[Jp]:n.ONE_MINUS_CONSTANT_COLOR,[jp]:n.CONSTANT_ALPHA,[Qp]:n.ONE_MINUS_CONSTANT_ALPHA};function k(B,be,fe,Ge,Ie,ke,st,At,pe,nt){if(B===kr){m===!0&&(De(n.BLEND),m=!1);return}if(m===!1&&(ye(n.BLEND),m=!0),B!==Bo){if(B!==g||nt!==A){if((y!==Br||w!==Br)&&(n.blendEquation(n.FUNC_ADD),y=Br,w=Br),nt)switch(B){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qn:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:wt("WebGLState: Invalid blending: ",B);break}else switch(B){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",B);break}b=null,v=null,S=null,_=null,M.set(0,0,0),L=0,g=B,A=nt}return}Ie=Ie||be,ke=ke||fe,st=st||Ge,(be!==y||Ie!==w)&&(n.blendEquationSeparate(ue[be],ue[Ie]),y=be,w=Ie),(fe!==b||Ge!==v||ke!==S||st!==_)&&(n.blendFuncSeparate(se[fe],se[Ge],se[ke],se[st]),b=fe,v=Ge,S=ke,_=st),(At.equals(M)===!1||pe!==L)&&(n.blendColor(At.r,At.g,At.b,pe),M.copy(At),L=pe),g=B,A=!1}function V(B,be){B.side===Jt?De(n.CULL_FACE):ye(n.CULL_FACE);let fe=B.side===jn;be&&(fe=!fe),ie(fe),B.blending===_s&&B.transparent===!1?k(kr):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ge=B.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(B){O!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),O=B)}function j(B){B!==Fp?(ye(n.CULL_FACE),B!==U&&(B===ih?n.cullFace(n.BACK):B===Up?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),U=B}function ce(B){B!==z&&(Y&&n.lineWidth(B),z=B)}function Ae(B,be,fe){B?(ye(n.POLYGON_OFFSET_FILL),(C!==be||Z!==fe)&&(C=be,Z=fe,o.getReversed()&&(be=-be,fe=-fe),n.polygonOffset(be,fe))):De(n.POLYGON_OFFSET_FILL)}function F(B){B?ye(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function re(B){B===void 0&&(B=n.TEXTURE0+Q-1),K!==B&&(n.activeTexture(B),K=B)}function he(B,be,fe){fe===void 0&&(K===null?fe=n.TEXTURE0+Q-1:fe=K);let Ge=N[fe];Ge===void 0&&(Ge={type:void 0,texture:void 0},N[fe]=Ge),(Ge.type!==B||Ge.texture!==be)&&(K!==fe&&(n.activeTexture(fe),K=fe),n.bindTexture(B,be||ee[B]),Ge.type=B,Ge.texture=be)}function D(){let B=N[K];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function yt(){try{n.texSubImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function Pe(){try{n.texSubImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function Me(){try{n.compressedTexSubImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function ze(){try{n.texStorage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function I(){try{n.texStorage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function E(){try{n.texImage2D(...arguments)}catch(B){wt("WebGLState:",B)}}function $(){try{n.texImage3D(...arguments)}catch(B){wt("WebGLState:",B)}}function we(B){return d[B]!==void 0?d[B]:n.getParameter(B)}function me(B,be){d[B]!==be&&(n.pixelStorei(B,be),d[B]=be)}function Oe(B){J.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),J.copy(B))}function Ve(B){de.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),de.copy(B))}function ge(B,be){let fe=c.get(be);fe===void 0&&(fe=new WeakMap,c.set(be,fe));let Ge=fe.get(B);Ge===void 0&&(Ge=n.getUniformBlockIndex(be,B.name),n.uniformBlockBinding(be,Ge,Ge),fe.set(B,Ge))}function _e(B,be,fe){let Ie=c.get(be).get(B);l[Ie]!==fe&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ie,fe),l[Ie]=fe)}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},K=null,N={},h={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,v=null,w=null,S=null,_=null,M=new Fe(0,0,0),L=0,A=!1,O=null,U=null,z=null,C=null,Z=null,J.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:De,bindFramebuffer:dt,drawBuffers:Be,useProgram:je,setBlending:k,setMaterial:V,setFlipSided:ie,setCullFace:j,setLineWidth:ce,setPolygonOffset:Ae,setScissorTest:F,activeTexture:re,bindTexture:he,unbindTexture:D,compressedTexImage2D:Ke,compressedTexImage3D:at,texImage2D:E,texImage3D:$,pixelStorei:me,getParameter:we,updateUBOMapping:ge,uniformBlockBinding:_e,texStorage2D:ze,texStorage3D:I,texSubImage2D:yt,texSubImage3D:Pe,compressedTexSubImage2D:Me,compressedTexSubImage3D:ve,scissor:Oe,viewport:Ve,reset:He}}function OM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,x=new FinalizationRegistry(I=>f.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):_a("canvas")}function y(I,E,$){let we=1,me=ze(I);if((me.width>$||me.height>$)&&(we=$/Math.max(me.width,me.height)),we<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Oe=Math.floor(we*me.width),Ve=Math.floor(we*me.height);h===void 0&&(h=g(Oe,Ve));let ge=E?g(Oe,Ve):h;return ge.width=Oe,ge.height=Ve,ge.getContext("2d").drawImage(I,0,0,Oe,Ve),bt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Oe+"x"+Ve+")."),ge}else return"data"in I&&bt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function b(I){return I.generateMipmaps}function v(I){n.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,E,$,we,me,Oe=!1){if(I!==null){if(n[I]!==void 0)return n[I];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ve;we&&(Ve=e.get("EXT_texture_norm16"),Ve||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===n.RED&&($===n.FLOAT&&(ge=n.R32F),$===n.HALF_FLOAT&&(ge=n.R16F),$===n.UNSIGNED_BYTE&&(ge=n.R8),$===n.UNSIGNED_SHORT&&Ve&&(ge=Ve.R16_EXT),$===n.SHORT&&Ve&&(ge=Ve.R16_SNORM_EXT)),E===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ge=n.R8UI),$===n.UNSIGNED_SHORT&&(ge=n.R16UI),$===n.UNSIGNED_INT&&(ge=n.R32UI),$===n.BYTE&&(ge=n.R8I),$===n.SHORT&&(ge=n.R16I),$===n.INT&&(ge=n.R32I)),E===n.RG&&($===n.FLOAT&&(ge=n.RG32F),$===n.HALF_FLOAT&&(ge=n.RG16F),$===n.UNSIGNED_BYTE&&(ge=n.RG8),$===n.UNSIGNED_SHORT&&Ve&&(ge=Ve.RG16_EXT),$===n.SHORT&&Ve&&(ge=Ve.RG16_SNORM_EXT)),E===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ge=n.RG8UI),$===n.UNSIGNED_SHORT&&(ge=n.RG16UI),$===n.UNSIGNED_INT&&(ge=n.RG32UI),$===n.BYTE&&(ge=n.RG8I),$===n.SHORT&&(ge=n.RG16I),$===n.INT&&(ge=n.RG32I)),E===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),$===n.UNSIGNED_INT&&(ge=n.RGB32UI),$===n.BYTE&&(ge=n.RGB8I),$===n.SHORT&&(ge=n.RGB16I),$===n.INT&&(ge=n.RGB32I)),E===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),$===n.UNSIGNED_INT&&(ge=n.RGBA32UI),$===n.BYTE&&(ge=n.RGBA8I),$===n.SHORT&&(ge=n.RGBA16I),$===n.INT&&(ge=n.RGBA32I)),E===n.RGB&&($===n.UNSIGNED_SHORT&&Ve&&(ge=Ve.RGB16_EXT),$===n.SHORT&&Ve&&(ge=Ve.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),E===n.RGBA){let _e=Oe?va:Bt.getTransfer(me);$===n.FLOAT&&(ge=n.RGBA32F),$===n.HALF_FLOAT&&(ge=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ge=_e===tn?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&Ve&&(ge=Ve.RGBA16_EXT),$===n.SHORT&&Ve&&(ge=Ve.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function _(I,E){let $;return I?E===null||E===Qi||E===Hr?$=n.DEPTH24_STENCIL8:E===Oi?$=n.DEPTH32F_STENCIL8:E===Ho&&($=n.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===Hr?$=n.DEPTH_COMPONENT24:E===Oi?$=n.DEPTH_COMPONENT32F:E===Ho&&($=n.DEPTH_COMPONENT16),$}function M(I,E){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xn&&I.minFilter!==vn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){let E=new WeakRef(I);i.get(I).__ref=E,f.add(E),x.register(I,E,E)}function A(I){let E=i.get(I).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function O(I){z(I.target)}function U(I){C(I.target)}function z(I){I.removeEventListener("dispose",O),A(I),Q(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function C(I){I.removeEventListener("dispose",U),A(I),G(I)}function Z(){for(let I of f){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?C(E):z(E))}f.clear(),d.clear()}function Q(I){let E=i.get(I);if(E.__webglInit===void 0)return;let $=I.source,we=p.get($);if(we){let me=we[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&Y(I),Object.keys(we).length===0&&p.delete($)}i.remove(I)}function Y(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let $=I.source,we=p.get($);delete we[E.__cacheKey],o.memory.textures--}function G(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&z($),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let Oe=0;Oe<E.__webglFramebuffer[me].length;Oe++)n.deleteFramebuffer(E.__webglFramebuffer[me][Oe]);else n.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)n.deleteFramebuffer(E.__webglFramebuffer[me]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let we=I.textures;for(let me=0,Oe=we.length;me<Oe;me++){let Ve=i.get(we[me]);Ve.__webglTexture&&(n.deleteTexture(Ve.__webglTexture),o.memory.textures--),i.remove(we[me])}i.remove(I)}let H=0;function K(){H=0}function N(){return H}function X(I){H=I}function ae(){let I=H;return I>=s.maxTextures&&bt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function J(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function de(I,E){let $=i.get(I);if(I.isVideoTexture&&Me(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let we=I.image;if(we===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{V($,I,E);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+E)}function xe(I,E){let $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){V($,I,E);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+E)}function ee(I,E){let $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){V($,I,E);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+E)}function ye(I,E){let $=i.get(I);if(I.version>0&&$.__version!==I.version){ie($,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+E)}let De={[Os]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},dt={[Xn]:n.NEAREST,[n0]:n.NEAREST_MIPMAP_NEAREST,[Ka]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Be={[o0]:n.NEVER,[Sh]:n.ALWAYS,[a0]:n.LESS,[bh]:n.LEQUAL,[l0]:n.EQUAL,[Mh]:n.GEQUAL,[c0]:n.GREATER,[u0]:n.NOTEQUAL};function je(I,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vn||E.magFilter===Vc||E.magFilter===Ka||E.magFilter===ji||E.minFilter===vn||E.minFilter===Vc||E.minFilter===Ka||E.minFilter===ji)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,De[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,De[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,De[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,dt[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,dt[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==Ka&&E.minFilter!==ji||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ue(I,E){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",O),L(E));let we=E.source,me=p.get(we);me===void 0&&(me={},p.set(we,me));let Oe=J(E);if(Oe!==I.__cacheKey){me[Oe]===void 0&&(me[Oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),me[Oe].usedTimes++;let Ve=me[I.__cacheKey];Ve!==void 0&&(me[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&Y(E)),I.__cacheKey=Oe,I.__webglTexture=me[Oe].texture}return $}function se(I,E,$){return Math.floor(Math.floor(I/$)/E)}function k(I,E,$,we){let Oe=I.updateRanges;if(Oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,$,we,E.data);else{Oe.sort((B,be)=>B.start-be.start);let Ve=0;for(let B=1;B<Oe.length;B++){let be=Oe[Ve],fe=Oe[B],Ge=be.start+be.count,Ie=se(fe.start,E.width,4),ke=se(be.start,E.width,4);fe.start<=Ge+1&&Ie===ke&&se(fe.start+fe.count-1,E.width,4)===Ie?be.count=Math.max(be.count,fe.start+fe.count-be.start):(++Ve,Oe[Ve]=fe)}Oe.length=Ve+1;let ge=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),He=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let B=0,be=Oe.length;B<be;B++){let fe=Oe[B],Ge=Math.floor(fe.start/4),Ie=Math.ceil(fe.count/4),ke=Ge%E.width,st=Math.floor(Ge/E.width),At=Ie,pe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,st),t.texSubImage2D(n.TEXTURE_2D,0,ke,st,At,pe,$,we,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,He)}}function V(I,E,$){let we=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(we=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(we=n.TEXTURE_3D);let me=ue(I,E),Oe=E.source;t.bindTexture(we,I.__webglTexture,n.TEXTURE0+$);let Ve=i.get(Oe);if(Oe.version!==Ve.__version||me===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let pe=Bt.getPrimaries(Bt.workingColorSpace),nt=E.colorSpace===Ws?null:Bt.getPrimaries(E.colorSpace),mt=E.colorSpace===Ws||pe===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,s.maxTextureSize);_e=ve(E,_e);let He=r.convert(E.format,E.colorSpace),B=r.convert(E.type),be=S(E.internalFormat,He,B,E.normalized,E.colorSpace,E.isVideoTexture);je(we,E);let fe,Ge=E.mipmaps,Ie=E.isVideoTexture!==!0,ke=Ve.__version===void 0||me===!0,st=Oe.dataReady,At=M(E,_e);if(E.isDepthTexture)be=_(E.format===Vs,E.type),ke&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,be,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,be,_e.width,_e.height,0,He,B,null));else if(E.isDataTexture)if(Ge.length>0){Ie&&ke&&t.texStorage2D(n.TEXTURE_2D,At,be,Ge[0].width,Ge[0].height);for(let pe=0,nt=Ge.length;pe<nt;pe++)fe=Ge[pe],Ie?st&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,fe.width,fe.height,He,B,fe.data):t.texImage2D(n.TEXTURE_2D,pe,be,fe.width,fe.height,0,He,B,fe.data);E.generateMipmaps=!1}else Ie?(ke&&t.texStorage2D(n.TEXTURE_2D,At,be,_e.width,_e.height),st&&k(E,_e,He,B)):t.texImage2D(n.TEXTURE_2D,0,be,_e.width,_e.height,0,He,B,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,At,be,Ge[0].width,Ge[0].height,_e.depth);for(let pe=0,nt=Ge.length;pe<nt;pe++)if(fe=Ge[pe],E.format!==es)if(He!==null)if(Ie){if(st)if(E.layerUpdates.size>0){let mt=Nh(fe.width,fe.height,E.format,E.type);for(let $e of E.layerUpdates){let Vt=fe.data.subarray($e*mt/fe.data.BYTES_PER_ELEMENT,($e+1)*mt/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,$e,fe.width,fe.height,1,He,Vt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,fe.width,fe.height,_e.depth,He,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,be,fe.width,fe.height,_e.depth,0,fe.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?st&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,fe.width,fe.height,_e.depth,He,B,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,be,fe.width,fe.height,_e.depth,0,He,B,fe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ie&&ke&&t.texStorage2D(n.TEXTURE_2D,At,be,Ge[0].width,Ge[0].height);for(let pe=0,nt=Ge.length;pe<nt;pe++)fe=Ge[pe],E.format!==es?He!==null?Ie?st&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,fe.width,fe.height,He,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,be,fe.width,fe.height,0,fe.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?st&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,fe.width,fe.height,He,B,fe.data):t.texImage2D(n.TEXTURE_2D,pe,be,fe.width,fe.height,0,He,B,fe.data)}else if(E.isDataArrayTexture)if(Ie){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,At,be,_e.width,_e.height,_e.depth),st)if(E.layerUpdates.size>0){let pe=Nh(_e.width,_e.height,E.format,E.type);for(let nt of E.layerUpdates){let mt=_e.data.subarray(nt*pe/_e.data.BYTES_PER_ELEMENT,(nt+1)*pe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,_e.width,_e.height,1,He,B,mt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,He,B,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,_e.width,_e.height,_e.depth,0,He,B,_e.data);else if(E.isData3DTexture)Ie?(ke&&t.texStorage3D(n.TEXTURE_3D,At,be,_e.width,_e.height,_e.depth),st&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,He,B,_e.data)):t.texImage3D(n.TEXTURE_3D,0,be,_e.width,_e.height,_e.depth,0,He,B,_e.data);else if(E.isFramebufferTexture){if(ke)if(Ie)t.texStorage2D(n.TEXTURE_2D,At,be,_e.width,_e.height);else{let pe=_e.width,nt=_e.height;for(let mt=0;mt<At;mt++)t.texImage2D(n.TEXTURE_2D,mt,be,pe,nt,0,He,B,null),pe>>=1,nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),_e.parentNode!==pe){pe.appendChild(_e),d.add(E),pe.onpaint=nt=>{let mt=nt.changedElements;for(let $e of d)mt.includes($e.image)&&($e.needsUpdate=!0)},pe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{let mt=n.RGBA,$e=n.RGBA,Vt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,mt,$e,Vt,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ie&&ke){let pe=ze(Ge[0]);t.texStorage2D(n.TEXTURE_2D,At,be,pe.width,pe.height)}for(let pe=0,nt=Ge.length;pe<nt;pe++)fe=Ge[pe],Ie?st&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,He,B,fe):t.texImage2D(n.TEXTURE_2D,pe,be,He,B,fe);E.generateMipmaps=!1}else if(Ie){if(ke){let pe=ze(_e);t.texStorage2D(n.TEXTURE_2D,At,be,pe.width,pe.height)}st&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,B,_e)}else t.texImage2D(n.TEXTURE_2D,0,be,He,B,_e);b(E)&&E.mipmapsAutoUpdate===!0&&v(we),Ve.__version=Oe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ie(I,E,$){if(E.image.length!==6)return;let we=ue(I,E),me=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+$);let Oe=i.get(me);if(me.version!==Oe.__version||we===!0){t.activeTexture(n.TEXTURE0+$);let Ve=Bt.getPrimaries(Bt.workingColorSpace),ge=E.colorSpace===Ws?null:Bt.getPrimaries(E.colorSpace),_e=E.colorSpace===Ws||Ve===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let He=E.isCompressedTexture||E.image[0].isCompressedTexture,B=E.image[0]&&E.image[0].isDataTexture,be=[];for(let $e=0;$e<6;$e++)!He&&!B?be[$e]=y(E.image[$e],!0,s.maxCubemapSize):be[$e]=B?E.image[$e].image:E.image[$e],be[$e]=ve(E,be[$e]);let fe=be[0],Ge=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type),ke=S(E.internalFormat,Ge,Ie,E.normalized,E.colorSpace),st=E.isVideoTexture!==!0,At=Oe.__version===void 0||we===!0,pe=me.dataReady,nt=M(E,fe);je(n.TEXTURE_CUBE_MAP,E);let mt;if(E.isDepthTexture){if(ke=_(E.format===Vs,E.type),At)if(st)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ke,fe.width,fe.height);else for(let $e=0;$e<6;$e++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,fe.width,fe.height,0,Ge,Ie,null)}else if(He){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,ke,fe.width,fe.height);for(let $e=0;$e<6;$e++){mt=be[$e].mipmaps;for(let Vt=0;Vt<mt.length;Vt++){let nn=mt[Vt];E.format!==es?Ge!==null?st?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt,0,0,nn.width,nn.height,Ge,nn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt,ke,nn.width,nn.height,0,nn.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt,0,0,nn.width,nn.height,Ge,Ie,nn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt,ke,nn.width,nn.height,0,Ge,Ie,nn.data)}}}else{if(mt=E.mipmaps,st&&At){mt.length>0&&nt++;let $e=ze(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,nt,ke,$e.width,$e.height)}for(let $e=0;$e<6;$e++)if(B){st?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,0,0,be[$e].width,be[$e].height,Ge,Ie,be[$e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,be[$e].width,be[$e].height,0,Ge,Ie,be[$e].data);for(let Vt=0;Vt<mt.length;Vt++){let Yn=mt[Vt].image[$e].image;st?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt+1,0,0,Yn.width,Yn.height,Ge,Ie,Yn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt+1,ke,Yn.width,Yn.height,0,Ge,Ie,Yn.data)}}else{st?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,0,0,Ge,Ie,be[$e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,ke,Ge,Ie,be[$e]);for(let Vt=0;Vt<mt.length;Vt++){let nn=mt[Vt];st?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt+1,0,0,Ge,Ie,nn.image[$e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$e,Vt+1,ke,Ge,Ie,nn.image[$e])}}}b(E)&&E.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),Oe.__version=me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function j(I,E,$,we,me,Oe){let Ve=r.convert($.format,$.colorSpace),ge=r.convert($.type),_e=S($.internalFormat,Ve,ge,$.normalized,$.colorSpace),He=i.get(E),B=i.get($);if(B.__renderTarget=E,!He.__hasExternalTextures){let be=Math.max(1,E.width>>Oe),fe=Math.max(1,E.height>>Oe);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,Oe,_e,be,fe,E.depth,0,Ve,ge,null):t.texImage2D(me,Oe,_e,be,fe,0,Ve,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,me,B.__webglTexture,0,yt(E)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,we,me,B.__webglTexture,Oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(I,E,$){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let we=E.depthTexture,me=we&&we.isDepthTexture?we.type:null,Oe=_(E.stencilBuffer,me),Ve=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(E),Oe,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(E),Oe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,I)}else{let we=E.textures;for(let me=0;me<we.length;me++){let Oe=we[me],Ve=r.convert(Oe.format,Oe.colorSpace),ge=r.convert(Oe.type),_e=S(Oe.internalFormat,Ve,ge,Oe.normalized,Oe.colorSpace);Pe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(E),_e,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(E),_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(I,E,$){let we=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let me=i.get(E.depthTexture);me.__renderTarget=E;let Oe=we?E.depthTexture.image[0]:E.depthTexture.image;(!me.__webglTexture||Oe.width!==E.width||Oe.height!==E.height)&&(Oe.width=E.width,Oe.height=E.height,E.depthTexture.needsUpdate=!0),we?ye(E.depthTexture,0):de(E.depthTexture,0);let Ve=me.__webglTexture,ge=yt(E),_e=we?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,He=E.depthTexture.format===Vs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Fs)Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,_e,Ve,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,He,_e,Ve,0);else if(E.depthTexture.format===Vs)Pe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,_e,Ve,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,He,_e,Ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(I){let E=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let we=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),we){let me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,we.removeEventListener("dispose",me)};we.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=we}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let we=0;we<6;we++)Ae(E.__webglFramebuffer[we],I,we);else I.texture.mipmaps.length>0?Ae(E.__webglFramebuffer[0],I,0):Ae(E.__webglFramebuffer,I,0);else if($){E.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[we]),E.__webglDepthbuffer[we]===void 0)E.__webglDepthbuffer[we]=n.createRenderbuffer(),ce(E.__webglDepthbuffer[we],I,!1);else{let me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer[we];n.bindRenderbuffer(n.RENDERBUFFER,Oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Oe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ce(E.__webglDepthbuffer,I,!1);else{let me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(I,E,$){let we=i.get(I);E!==void 0&&j(we.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&F(I)}function he(I){let E=I.texture,$=i.get(I),we=i.get(E);I.addEventListener("dispose",U),L(I);let me=I.textures,Oe=I.isWebGLCubeRenderTarget===!0,Ve=me.length>1;if(Ve||(we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture()),we.__version=E.version,o.memory.textures++),Oe){$.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps.length>0){$.__webglFramebuffer[ge]=[];for(let _e=0;_e<E.mipmaps.length;_e++)$.__webglFramebuffer[ge][_e]=n.createFramebuffer()}else $.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)$.__webglFramebuffer[ge]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let ge=0,_e=me.length;ge<_e;ge++){let He=i.get(me[ge]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Pe(I)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){let _e=me[ge];$.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ge]);let He=r.convert(_e.format,_e.colorSpace),B=r.convert(_e.type),be=S(_e.internalFormat,He,B,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),fe=yt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,$.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ce($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Oe){t.bindTexture(n.TEXTURE_CUBE_MAP,we.__webglTexture),je(n.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)j($.__webglFramebuffer[ge][_e],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else j($.__webglFramebuffer[ge],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);b(E)?v(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ve){for(let ge=0,_e=me.length;ge<_e;ge++){let He=me[ge],B=i.get(He),be=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,B.__webglTexture),je(be,He),j($.__webglFramebuffer,I,He,n.COLOR_ATTACHMENT0+ge,be,0),b(He)&&v(be)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,we.__webglTexture),je(ge,E),E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)j($.__webglFramebuffer[_e],I,E,n.COLOR_ATTACHMENT0,ge,_e);else j($.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,ge,0);b(E)?v(ge):E.mipmaps.length>0&&n.texParameteri(ge,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&F(I)}function D(I){let E=I.textures;for(let $=0,we=E.length;$<we;$++){let me=E[$];if(b(me)&&me.mipmapsAutoUpdate===!0){let Oe=w(I),Ve=i.get(me).__webglTexture;t.bindTexture(Oe,Ve),v(Oe),t.unbindTexture()}}}let Ke=[];function at(I){if(I.samples>0){if(Pe(I)===!1){let E=I.textures,$=I.width,we=I.height,me=n.COLOR_BUFFER_BIT,Oe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=i.get(I),ge=E.length>1;if(ge)for(let He=0;He<E.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let He=0;He<E.length;He++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[He]);let B=i.get(E[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,B,0)}n.blitFramebuffer(0,0,$,we,0,0,$,we,me,n.NEAREST),l===!0&&(Ke.length=0,Ke.push(n.COLOR_ATTACHMENT0+He),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Ke.push(Oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let He=0;He<E.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[He]);let B=i.get(E[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,B,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function yt(I){return Math.min(s.maxSamples,I.samples)}function Pe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(I){let E=o.render.frame;u.get(I)!==E&&(u.set(I,E),I.update())}function ve(I,E){let $=I.colorSpace,we=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==ya&&$!==Ws&&(Bt.getTransfer($)===tn?(we!==es||me!==mi)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",$)),E}function ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=K,this.getTextureUnits=N,this.setTextureUnits=X,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=ee,this.setTextureCube=ye,this.rebindTextures=re,this.setupRenderTarget=he,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Pe,this.dispose=Z}function FM(n,e){function t(i,s=Ws){let r,o=Bt.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===Xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===Ho)return n.UNSIGNED_SHORT;if(i===Wc)return n.INT;if(i===Qi)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===vh)return n.ALPHA;if(i===_h)return n.RGB;if(i===es)return n.RGBA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===$c)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===pr)return n.RG;if(i===Kc)return n.RG_INTEGER;if(i===Zc)return n.RGBA_INTEGER;if(i===Za||i===Ja||i===ja||i===Qa)if(o===tn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jc||i===jc||i===Qc||i===eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tu||i===nu||i===iu||i===su||i===ru||i===el||i===ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tu||i===nu)return o===tn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===iu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===su)return r.COMPRESSED_R11_EAC;if(i===ru)return r.COMPRESSED_SIGNED_R11_EAC;if(i===el)return r.COMPRESSED_RG11_EAC;if(i===ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===au||i===lu||i===cu||i===uu||i===du||i===hu||i===fu||i===pu||i===mu||i===gu||i===xu||i===yu||i===vu||i===_u)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===au)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===du)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vu)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_u)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bu||i===Mu||i===Su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bu)return o===tn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wu||i===Eu||i===tl||i===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===wu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var UM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:UM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new _t(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new Vh,g={},y=t.getContextAttributes(),b=null,v=null,w=[],S=[],_=new Se,M=null,L=null,A=new Wn;A.viewport=new cn;let O=new Wn;O.viewport=new cn;let U=[A,O],z=new Bc,C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=w[J];return de===void 0&&(de=new Ro,w[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=w[J];return de===void 0&&(de=new Ro,w[J]=de),de.getGripSpace()},this.getHand=function(J){let de=w[J];return de===void 0&&(de=new Ro,w[J]=de),de.getHandSpace()};function Q(J){let de=S.indexOf(J.inputSource);if(de===-1)return;let xe=w[de];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||o),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",G);for(let J=0;J<w.length;J++){let de=S[J];de!==null&&(S[J]=null,w[J].disconnect(de))}C=null,Z=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(b),p=null,h=null,d=null,s=null,v=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ee=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?Vs:Fs,ee=y.stencil?Hr:Qi);let De={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(De),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zn(h.textureWidth,h.textureHeight,{format:es,type:mi,depthTexture:new Bs(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Zn(p.framebufferWidth,p.framebufferHeight,{format:es,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(J){for(let de=0;de<J.removed.length;de++){let xe=J.removed[de],ee=S.indexOf(xe);ee>=0&&(S[ee]=null,w[ee].disconnect(xe))}for(let de=0;de<J.added.length;de++){let xe=J.added[de],ee=S.indexOf(xe);if(ee===-1){for(let De=0;De<w.length;De++)if(De>=S.length){S.push(xe),ee=De;break}else if(S[De]===null){S[De]=xe,ee=De;break}if(ee===-1)break}let ye=w[ee];ye&&ye.connect(xe)}}function H(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let de=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),z.near=O.near=A.near=de,z.far=O.far=A.far=xe,(C!==z.near||Z!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,Z=z.far),z.layers.mask=J.layers.mask|6,A.layers.mask=z.layers.mask&-5,O.layers.mask=z.layers.mask&-3;let ee=J.parent,ye=z.cameras;H(z,ee);for(let De=0;De<ye.length;De++)H(ye[De],ee);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),K(J,z,ee)};function K(J,de,xe){xe===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Eo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let N=null;function X(J,de){if(u=de.getViewerPose(c||o),f=de,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ee=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,ee=!0);for(let Be=0;Be<xe.length;Be++){let je=xe[Be],ue=null;if(p!==null)ue=p.getViewport(je);else{let k=d.getViewSubImage(h,je);ue=k.viewport,Be===0&&(e.setRenderTargetTextures(v,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(v))}let se=U[Be];se===void 0&&(se=new Wn,se.layers.enable(Be),se.viewport=new cn,U[Be]=se),se.matrix.fromArray(je.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(je.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ue.x,ue.y,ue.width,ue.height),Be===0&&(z.matrix.copy(se.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ee===!0&&z.cameras.push(se)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Be=d.getDepthInformation(xe[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<xe.length;Be++){let je=xe[Be].camera;if(je){let ue=g[je];ue||(ue=new La,g[je]=ue);let se=d.getCameraImage(je);ue.sourceTexture=se}}}}for(let xe=0;xe<w.length;xe++){let ee=S[xe],ye=w[xe];ee!==null&&ye!==void 0&&ye.update(ee,de,c||o)}N&&N(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),f=null}let ae=new W0;ae.setAnimationLoop(X),this.setAnimationLoop=function(J){N=J},this.dispose=function(){}}},BM=new Mt,em=new Tt;em.set(-1,0,0,0,1,0,0,0,1);function zM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Ih(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(em),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function HM(n,e,t,i){let s={},r={};function o(y,b){let v=b.program;i.uniformBlockBinding(y,v,s[y.id])}function a(y,b){let v=s[y.id];v===void 0&&(f(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(y,w);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let b=n.createBuffer(),v=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],v=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let S=0,_=v.length;S<_;S++){let M=v[S];if(Array.isArray(M))for(let L=0,A=M.length;L<A;L++)u(M[L],S,L,w);else u(M,S,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,b,v,w){if(h(y,b,v,w)===!0){let S=y.__offset,_=y.value;if(Array.isArray(_)){let M=0;for(let L=0;L<_.length;L++){let A=_[L],O=x(A,!0);d(A,y.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function d(y,b,v){typeof y=="number"||typeof y=="boolean"?b[v]=y:y.isMatrix3?(b[v]=y.elements[0],b[v+1]=y.elements[1],b[v+2]=y.elements[2],b[v+3]=0,b[v+4]=y.elements[3],b[v+5]=y.elements[4],b[v+6]=y.elements[5],b[v+7]=0,b[v+8]=y.elements[6],b[v+9]=y.elements[7],b[v+10]=y.elements[8],b[v+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-v),v):y.toArray(b,v)}function h(y,b,v,w){let S=y.value,_=b+"_"+v;if(Array.isArray(S)){w[_]===void 0&&(w[_]=[]);let M=w[_],L=!1;for(let A=0;A<S.length;A++)p(S[A],M,A)===!0&&(L=!0);return L}return p(S,w,_)}function p(y,b,v){if(b[v]===void 0)return typeof y=="number"||typeof y=="boolean"?b[v]=y:ArrayBuffer.isView(y)?b[v]=y.slice():b[v]=y.clone(),!0;{let w=b[v];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return b[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function f(y){let b=y.uniforms,v=0,w=16;for(let _=0,M=b.length;_<M;_++){let L=Array.isArray(b[_])?b[_]:[b[_]];for(let A=0,O=L.length;A<O;A++){let U=L[A],z=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(b[_])||Array.isArray(U.value),Z=v;for(let Y=0,G=z.length;Y<G;Y++){let H=z[Y],K=x(H,C),N=v%w,X=N%K.boundary,ae=N+X;v+=X,ae!==0&&w-ae<K.storage&&(v+=w-ae),Y===0&&(Z=v),v+=K.storage}let Q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Q((v-Z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Z}}let S=v%w;return S>0&&(v+=w-S),y.__size=v,y.__cache={},this}function x(y,b){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let b=y.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var GM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ms=null;function VM(){return Ms===null&&(Ms=new Ta(GM,16,16,pr,pi),Ms.name="DFG_LUT",Ms.minFilter=vn,Ms.magFilter=vn,Ms.wrapS=ms,Ms.wrapT=ms,Ms.generateMipmaps=!1,Ms.needsUpdate=!0),Ms}var Du=class{constructor(e={}){let{canvas:t=d0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=mi}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=p,m=new Set([Zc,Kc,Yc]),g=new Set([mi,Qi,Ho,Hr,Xc,qc]),y=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,S=null,_=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,O=!1,U=null,z=null,C=null,Z=null;this._outputColorSpace=Kn;let Q=0,Y=0,G=null,H=-1,K=null,N=new cn,X=new cn,ae=null,J=new Fe(0),de=0,xe=t.width,ee=t.height,ye=1,De=null,dt=null,Be=new cn(0,0,xe,ee),je=new cn(0,0,xe,ee),ue=!1,se=new or,k=new xc,V=!1,ie=!1,j=new Mt,ce=new R,Ae=new cn,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function he(){return G===null?ye:1}let D=i;function Ke(T,q){return t.getContext(T,q)}let at,yt,Pe,Me,ve,ze,I,E,$,we,me,Oe,Ve,ge,_e,He,B,be,fe,Ge,Ie,ke,st;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",$e,!1),D===null){let q="webgl2";if(D=Ke(q,T),D===null)throw Ke(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(T){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),wt("WebGLRenderer: "+T.message),T}function At(){at=new eb(D),at.init(),Ie=new FM(D,at),yt=new V1(D,at,e,Ie),Pe=new NM(D,at),yt.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),z=D.createFramebuffer(),C=D.createFramebuffer(),Z=D.createFramebuffer(),Me=new ib(D),ve=new _M,ze=new OM(D,at,Pe,ve,yt,Ie,Me),I=new Q1(A),E=new rv(D),ke=new H1(D,E),$=new tb(D,E,Me,ke),we=new rb(D,$,E,ke,Me),be=new sb(D,yt,ze),_e=new W1(ve),me=new vM(A,I,at,yt,ke,_e),Oe=new zM(A,ve),Ve=new MM,ge=new RM(at),B=new z1(A,I,Pe,we,f,l),He=new DM(A,we,yt),st=new HM(D,Me,yt,Pe),fe=new G1(D,at,Me),Ge=new nb(D,at,Me),Me.programs=me.programs,A.capabilities=yt,A.extensions=at,A.properties=ve,A.renderLists=Ve,A.shadowMap=He,A.state=Pe,A.info=Me}x!==mi&&(L=new ab(x,t.width,t.height,a,s,r));let pe=new Wh(A,D);this.xr=pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(T){T!==void 0&&(ye=T,this.setSize(xe,ee,!1))},this.getSize=function(T){return T.set(xe,ee)},this.setSize=function(T,q,ne=!0){if(pe.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,ee=q,t.width=Math.floor(T*ye),t.height=Math.floor(q*ye),ne===!0&&(t.style.width=T+"px",t.style.height=q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(xe*ye,ee*ye).floor()},this.setDrawingBufferSize=function(T,q,ne){xe=T,ee=q,ye=ne,t.width=Math.floor(T*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(x===mi){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Be)},this.setViewport=function(T,q,ne,te){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,q,ne,te),Pe.viewport(N.copy(Be).multiplyScalar(he()).round())},this.getScissor=function(T){return T.copy(je)},this.setScissor=function(T,q,ne,te){T.isVector4?je.set(T.x,T.y,T.z,T.w):je.set(T,q,ne,te),Pe.scissor(X.copy(je).multiplyScalar(he()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){Pe.setScissorTest(ue=T)},this.setOpaqueSort=function(T){De=T},this.setTransparentSort=function(T){dt=T},this.getClearColor=function(T){return T.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,ne=!0){let te=0;if(T){let oe=!1;if(G!==null){let Xe=G.texture.format;oe=m.has(Xe)}if(oe){let Xe=G.texture.type,Qe=g.has(Xe),Ue=B.getClearColor(),Ze=B.getClearAlpha(),lt=Ue.r,Et=Ue.g,it=Ue.b;Qe?(y[0]=lt,y[1]=Et,y[2]=it,y[3]=Ze,D.clearBufferuiv(D.COLOR,0,y)):(b[0]=lt,b[1]=Et,b[2]=it,b[3]=Ze,D.clearBufferiv(D.COLOR,0,b))}else te|=D.COLOR_BUFFER_BIT}q&&(te|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(te|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&D.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),B.dispose(),Ve.dispose(),ge.dispose(),ze.dispose(),ve.dispose(),I.dispose(),we.dispose(),$.dispose(),ke.dispose(),st.dispose(),me.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",As),pe.removeEventListener("sessionend",js),An.stop()};function nt(T){T.preventDefault(),ba("WebGLRenderer: Context Lost."),O=!0}function mt(){ba("WebGLRenderer: Context Restored."),O=!1;let T=Me.autoReset,q=He.enabled,ne=He.autoUpdate,te=He.needsUpdate,oe=He.type;At(),Me.autoReset=T,He.enabled=q,He.autoUpdate=ne,He.needsUpdate=te,He.type=oe}function $e(T){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){let q=T.target;q.removeEventListener("dispose",Vt),nn(q)}function nn(T){Yn(T),ve.remove(T)}function Yn(T){let q=ve.get(T).programs;q!==void 0&&(q.forEach(function(ne){me.releaseProgram(ne)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ne,te,oe,Xe){q===null&&(q=F);let Qe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ue=In(T,q,ne,te,oe);Pe.setMaterial(te,Qe);let Ze=ne.index,lt=1;if(te.wireframe===!0){if(Ze=$.getWireframeAttribute(ne),Ze===void 0)return;lt=2}let Et=ne.drawRange,it=ne.attributes.position,ct=Et.start*lt,Ut=(Et.start+Et.count)*lt;Xe!==null&&(ct=Math.max(ct,Xe.start*lt),Ut=Math.min(Ut,(Xe.start+Xe.count)*lt)),Ze!==null?(ct=Math.max(ct,0),Ut=Math.min(Ut,Ze.count)):it!=null&&(ct=Math.max(ct,0),Ut=Math.min(Ut,it.count));let gn=Ut-ct;if(gn<0||gn===1/0)return;ke.setup(oe,te,Ue,ne,Ze);let on,en=fe;if(Ze!==null&&(on=E.get(Ze),en=Ge,en.setIndex(on)),oe.isMesh)te.wireframe===!0?(Pe.setLineWidth(te.wireframeLinewidth*he()),en.setMode(D.LINES)):en.setMode(D.TRIANGLES);else if(oe.isLine){let xn=te.linewidth;xn===void 0&&(xn=1),Pe.setLineWidth(xn*he()),oe.isLineSegments?en.setMode(D.LINES):oe.isLineLoop?en.setMode(D.LINE_LOOP):en.setMode(D.LINE_STRIP)}else oe.isPoints?en.setMode(D.POINTS):oe.isSprite&&en.setMode(D.TRIANGLES);if(oe.isBatchedMesh)if(at.get("WEBGL_multi_draw"))en.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let xn=oe._multiDrawStarts,ut=oe._multiDrawCounts,Rn=oe._multiDrawCount,Wt=Ze?E.get(Ze).bytesPerElement:1,fs=ve.get(te).currentProgram.getUniforms();for(let Ln=0;Ln<Rn;Ln++)fs.setValue(D,"_gl_DrawID",Ln),en.render(xn[Ln]/Wt,ut[Ln])}else if(oe.isInstancedMesh)en.renderInstances(ct,gn,oe.count);else if(ne.isInstancedBufferGeometry){let xn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ut=Math.min(ne.instanceCount,xn);en.renderInstances(ct,gn,ut)}else en.render(ct,gn)};function ai(T,q,ne,te){U!==null&&T.isNodeMaterial&&U.setObject(te,T),V===!0&&_e.setState(T,ne,!1),T.transparent===!0&&T.side===Jt&&T.forceSinglePass===!1?(T.side=jn,T.needsUpdate=!0,Ii(T,q,te),T.side=vs,T.needsUpdate=!0,Ii(T,q,te),T.side=Jt):Ii(T,q,te)}this.compile=function(T,q,ne=null){ne===null&&(ne=T),U!==null&&U.renderStart(T,q,ne),S=ge.get(ne),S.init(q),M.push(S),ne.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),T!==ne&&T.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(S.pushLight(oe),oe.castShadow&&S.pushShadow(oe))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),ie=this.localClippingEnabled,V=_e.init(this.clippingPlanes,ie),V===!0&&_e.setGlobalState(this.clippingPlanes,q),U!==null&&He.render(S.state.shadowsArray,ne,q);let te=new Set;return T.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let Xe=oe.material;if(Xe)if(Array.isArray(Xe))for(let Qe=0;Qe<Xe.length;Qe++){let Ue=Xe[Qe];ai(Ue,ne,q,oe),te.add(Ue)}else ai(Xe,ne,q,oe),te.add(Xe)}),S=M.pop(),U!==null&&U.renderEnd(),te},this.compileAsync=function(T,q,ne=null){let te=this.compile(T,q,ne);return new Promise(oe=>{function Xe(){if(te.forEach(function(Qe){let Ze=ve.get(Qe).currentProgram;(Ze===void 0||Ze.isReady())&&te.delete(Qe)}),te.size===0){oe(T);return}setTimeout(Xe,10)}at.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Pi=null;function Ts(T){Pi&&Pi(T)}function As(){An.stop()}function js(){An.start()}let An=new W0;An.setAnimationLoop(Ts),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(T){Pi=T,pe.setAnimationLoop(T),T===null?An.stop():An.start()},pe.addEventListener("sessionstart",As),pe.addEventListener("sessionend",js),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(T,q);let ne=pe.enabled===!0&&pe.isPresenting===!0,te=L!==null&&(G===null||ne)&&L.begin(A,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(q),q=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,q,G),S=ge.get(T,M.length),S.init(q),S.state.textureUnits=ze.getTextureUnits(),M.push(S),j.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?k.setFromArrayCamera(q):se.setFromProjectionMatrix(j,Di,q.reversedDepth),ie=this.localClippingEnabled,V=_e.init(this.clippingPlanes,ie),w=Ve.get(T,_.length),w.init(),_.push(w),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Qe=A.xr.getDepthSensingMesh();Qe!==null&&Xi(Qe,q,-1/0,A.sortObjects)}Xi(T,q,0,A.sortObjects),w.finish(),U!==null&&U.updateLights(S.state.lightsArray),A.sortObjects===!0&&w.sort(De,dt),re=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,re&&B.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),V===!0&&_e.beginShadows();let oe=S.state.shadowsArray;if(He.render(oe,T,q),V===!0&&_e.endShadows(),(te&&L.hasRenderPass())===!1){let Qe=w.opaque,Ue=w.transmissive;if(S.setupLights(),q.isArrayCamera){let Ze=q.cameras;if(Ue.length>0)for(let lt=0,Et=Ze.length;lt<Et;lt++){let it=Ze[lt];mn(Qe,Ue,T,it)}re&&B.render(T);for(let lt=0,Et=Ze.length;lt<Et;lt++){let it=Ze[lt];_i(w,T,it,it.viewport)}}else Ue.length>0&&mn(Qe,Ue,T,q),re&&B.render(T),_i(w,T,q)}G!==null&&Y===0&&(ze.updateMultisampleRenderTarget(G),ze.updateRenderTargetMipmap(G)),te&&L.end(A),T.isScene===!0&&T.onAfterRender(A,T,q),ke.resetDefaultState(),H=-1,K=null,M.pop(),M.length>0?(S=M[M.length-1],ze.setTextureUnits(S.state.textureUnits),V===!0&&_e.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function Xi(T,q,ne,te){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){let Qe=q.isArrayCamera?k:se;if(!T.frustumCulled||T.intersectsFrustum(Qe)){te&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);let Ue=we.update(T),Ze=T.material;Ze.visible&&w.push(T,Ue,Ze,ne,Ae.z,null,q)}}else if(T.isMesh||T.isLine||T.isPoints){let Qe=q.isArrayCamera?k:se;if(!T.frustumCulled||T.intersectsFrustum(Qe)){let Ue=we.update(T),Ze=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ae.copy(Ue.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(j)),Array.isArray(Ze)){let lt=Ue.groups;for(let Et=0,it=lt.length;Et<it;Et++){let ct=lt[Et],Ut=Ze[ct.materialIndex];Ut&&Ut.visible&&w.push(T,Ue,Ut,ne,Ae.z,ct,q)}}else Ze.visible&&w.push(T,Ue,Ze,ne,Ae.z,null,q)}}}let Xe=T.children;for(let Qe=0,Ue=Xe.length;Qe<Ue;Qe++)Xi(Xe[Qe],q,ne,te)}function _i(T,q,ne,te){let{opaque:oe,transmissive:Xe,transparent:Qe}=T;S.setupLightsView(ne),V===!0&&_e.setGlobalState(A.clippingPlanes,ne),te&&Pe.viewport(N.copy(te)),oe.length>0&&us(oe,q,ne),Xe.length>0&&us(Xe,q,ne),Qe.length>0&&us(Qe,q,ne),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function mn(T,q,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[te.id]===void 0){let ct=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[te.id]=new Zn(1,1,{generateMipmaps:!0,type:ct?pi:mi,minFilter:ji,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}let Xe=S.state.transmissionRenderTarget[te.id],Qe=te.viewport||N;Xe.setSize(Qe.z*A.transmissionResolutionScale,Qe.w*A.transmissionResolutionScale);let Ue=A.getRenderTarget(),Ze=A.getActiveCubeFace(),lt=A.getActiveMipmapLevel();A.setRenderTarget(Xe),A.getClearColor(J),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),re&&B.render(ne);let Et=A.toneMapping;A.toneMapping=bs;let it=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),S.setupLightsView(te),V===!0&&_e.setGlobalState(A.clippingPlanes,te),us(T,ne,te),ze.updateMultisampleRenderTarget(Xe),ze.updateRenderTargetMipmap(Xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ut=0,gn=q.length;Ut<gn;Ut++){let on=q[Ut],{object:en,geometry:xn,material:ut,group:Rn}=on;if(ut.side===Jt&&en.layers.test(te.layers)){let Wt=ut.side;ut.side=jn,ut.needsUpdate=!0,to(en,ne,te,xn,ut,Rn),ut.side=Wt,ut.needsUpdate=!0,ct=!0}}ct===!0&&(ze.updateMultisampleRenderTarget(Xe),ze.updateRenderTargetMipmap(Xe))}A.setRenderTarget(Ue,Ze,lt),A.setClearColor(J,de),it!==void 0&&(te.viewport=it),A.toneMapping=Et}function us(T,q,ne){let te=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,Xe=T.length;oe<Xe;oe++){let Qe=T[oe],{object:Ue,geometry:Ze,group:lt}=Qe,Et=Qe.material;Et.allowOverride===!0&&te!==null&&(Et=te),Ue.layers.test(ne.layers)&&to(Ue,q,ne,Ze,Et,lt)}}function to(T,q,ne,te,oe,Xe){U!==null&&oe.isNodeMaterial&&U.setObject(T,oe),T.onBeforeRender(A,q,ne,te,oe,Xe),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),oe.onBeforeRender(A,q,ne,te,T,Xe),oe.transparent===!0&&oe.side===Jt&&oe.forceSinglePass===!1?(oe.side=jn,oe.needsUpdate=!0,A.renderBufferDirect(ne,q,te,oe,T,Xe),oe.side=vs,oe.needsUpdate=!0,A.renderBufferDirect(ne,q,te,oe,T,Xe),oe.side=Jt):A.renderBufferDirect(ne,q,te,oe,T,Xe),T.onAfterRender(A,q,ne,te,oe,Xe)}function Qs(T){let q=0;for(let ne of T)ne.texture!==null&&q++;return q}function Ii(T,q,ne){q.isScene!==!0&&(q=F);let te=ve.get(T),oe=S.state.lights,Xe=S.state.shadowsArray,Qe=oe.state.version,Ue=me.getParameters(T,oe.state,Xe,q,ne,S.state.lightProbeGridArray),Ze=me.getProgramCacheKey(Ue),lt=te.programs;te.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;let Et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;te.envMap=I.get(T.envMap||te.environment,Et),te.envMapRotation=te.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",Vt),lt=new Map,te.programs=lt,te.programVariants=new Map);let it=lt.get(Ze);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Qe)return St(T,Ue),it}else Ue.uniforms=me.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,ne,Ue),T.onBeforeCompile(Ue,A),it=me.acquireProgram(Ue,Ze),lt.set(Ze,it),te.uniforms=Ue.uniforms;let ct=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ct.clippingPlanes=_e.uniform),St(T,Ue),te.needsLights=wr(T),te.lightsStateVersion=Qe,te.needsLights&&(ct.ambientLightColor.value=oe.state.ambient,ct.lightProbe.value=oe.state.probe,ct.sunLights.value=oe.state.sun,ct.sunLightShadows.value=oe.state.sunShadow,ct.directionalLights.value=oe.state.directional,ct.directionalLightShadows.value=oe.state.directionalShadow,ct.spotLights.value=oe.state.spot,ct.spotLightShadows.value=oe.state.spotShadow,ct.rectAreaLights.value=oe.state.rectArea,ct.ltc_1.value=oe.state.rectAreaLTC1,ct.ltc_2.value=oe.state.rectAreaLTC2,ct.pointLights.value=oe.state.point,ct.pointLightShadows.value=oe.state.pointShadow,ct.hemisphereLights.value=oe.state.hemi,ct.sunShadowMatrix.value=oe.state.sunShadowMatrix,ct.sunShadowCascade.value=oe.state.sunShadowCascade,ct.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ct.spotLightMatrix.value=oe.state.spotLightMatrix,ct.spotLightMap.value=oe.state.spotLightMap,ct.pointShadowMatrix.value=oe.state.pointShadowMatrix),te.numLightProbeGrids=Qs(S.state.lightProbeGridArray),te.currentProgram=it,te.uniformsList=null,it}function er(T,q,ne,te,oe){let Xe=ve.get(T),Qe=Xe.currentProgram.id+","+te+","+oe,Ue=Xe.programVariants.get(Qe);return Ue===void 0?(Ue=Ii(T,q,ne),Xe.programVariants.set(Qe,Ue)):(Xe.currentProgram=Ue,Xe.uniformsList=null,Xe.outputColorSpace=te,Xe.toneMapping=oe),Ue}function Re(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=Go.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function St(T,q){let ne=ve.get(T);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function In(T,q,ne,te,oe){q.isScene!==!0&&(q=F),ze.resetTextureUnits();let Xe=q.fog,Qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Ue=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Bt.workingColorSpace,Ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,lt=I.get(te.envMap||Qe,Ze),Et=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ct=!!ne.morphAttributes.position,Ut=!!ne.morphAttributes.normal,gn=!!ne.morphAttributes.color,on=bs;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(on=A.toneMapping);let en=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xn=en!==void 0?en.length:0,ut=ve.get(te),Rn=S.state.lights;if(V===!0&&(ie===!0||T!==K)){let rt=T===K&&te.id===H;_e.setState(te,T,rt)}let Wt=!1,fs=!1;te.version===ut.__version?ut.needsLights&&ut.lightsStateVersion!==Rn.state.version||oe.isBatchedMesh&&ut.batching===!1||!oe.isBatchedMesh&&ut.batching===!0||oe.isBatchedMesh&&ut.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&ut.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&ut.instancing===!1||!oe.isInstancedMesh&&ut.instancing===!0||oe.isSkinnedMesh&&ut.skinning===!1||!oe.isSkinnedMesh&&ut.skinning===!0||oe.isInstancedMesh&&ut.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&ut.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&ut.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&ut.instancingMorph===!1&&oe.morphTexture!==null||ut.envMap!==lt||te.fog===!0&&ut.fog!==Xe||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==_e.numPlanes||ut.numIntersection!==_e.numIntersection)||ut.vertexAlphas!==Et||ut.vertexTangents!==it||ut.morphTargets!==ct||ut.morphNormals!==Ut||ut.morphColors!==gn||ut.morphTargetsCount!==xn||ut.numLightProbeGrids!==Qs(S.state.lightProbeGridArray)?Wt=!0:(ut.outputColorSpace!==Ue||ut.toneMapping!==on)&&(fs=!0):(Wt=!0,ut.__version=te.version);let Ln=ut.currentProgram;(Wt===!0||fs===!0)&&(Ln=fs===!0?er(te,q,oe,Ue,on):Ii(te,q,oe),U&&te.isNodeMaterial&&U.onUpdateProgram(te,Ln,ut));let Er=!1,W=!1,Ne=!1,Ee=Ln.getUniforms(),qe=ut.uniforms;if(Pe.useProgram(Ln.program)&&(Er=!0,W=!0,Ne=!0),te.id!==H&&(H=te.id,W=!0),Er||K!==T){Pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",T.projectionMatrix),Ee.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ct=Ee.map.cameraPosition;Ct!==void 0&&Ct.setValue(D,ce.setFromMatrixPosition(T.matrixWorld)),yt.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,W=!0,Ne=!0)}if(ut.needsLights&&(Rn.state.sunShadowMap.length>0&&Ee.setValue(D,"sunShadowMap",Rn.state.sunShadowMap,ze),Rn.state.directionalShadowMap.length>0&&Ee.setValue(D,"directionalShadowMap",Rn.state.directionalShadowMap,ze),Rn.state.spotShadowMap.length>0&&Ee.setValue(D,"spotShadowMap",Rn.state.spotShadowMap,ze),Rn.state.pointShadowMap.length>0&&Ee.setValue(D,"pointShadowMap",Rn.state.pointShadowMap,ze)),oe.isSkinnedMesh){Ee.setOptional(D,oe,"bindMatrix"),Ee.setOptional(D,oe,"bindMatrixInverse");let rt=oe.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),Ee.setValue(D,"boneTexture",rt.boneTexture,ze))}oe.isBatchedMesh&&(Ee.setOptional(D,oe,"batchingTexture"),Ee.setValue(D,"batchingTexture",oe._matricesTexture,ze),Ee.setOptional(D,oe,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",oe._indirectTexture,ze),Ee.setOptional(D,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",oe._colorsTexture,ze));let et=ne.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0)&&be.update(oe,ne,Ln),(W||ut.receiveShadow!==oe.receiveShadow)&&(ut.receiveShadow=oe.receiveShadow,Ee.setValue(D,"receiveShadow",oe.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(qe.envMapIntensity.value=q.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=VM()),W){if(Ee.setValue(D,"toneMappingExposure",A.toneMappingExposure),ut.needsLights&&ds(qe,Ne),Xe&&te.fog===!0&&Oe.refreshFogUniforms(qe,Xe),Oe.refreshMaterialUniforms(qe,te,ye,ee,S.state.transmissionRenderTarget[T.id]),ut.needsLights&&ut.numLightProbeGrids>0){let rt=v,Ct=0;for(let li of S.state.lightProbeGridArray)li.texture!==null&&(rt.textures[Ct]=li.texture,rt.min[Ct]=li.boundingBox.min,rt.max[Ct]=li.boundingBox.max,rt.resolution[Ct]=li.resolution,Ct++);for(let li in rt)rt[li].length=Ct;qe.probesSH.value=rt.textures,qe.probesMin.value=rt.min,qe.probesMax.value=rt.max,qe.probesResolution.value=rt.resolution}Go.upload(D,Re(ut),qe,ze)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Go.upload(D,Re(ut),qe,ze),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ee.setValue(D,"center",oe.center),Ee.setValue(D,"modelViewMatrix",oe.modelViewMatrix),Ee.setValue(D,"normalMatrix",oe.normalMatrix),Ee.setValue(D,"modelMatrix",oe.matrixWorld),te.uniformsGroups!==void 0){let rt=te.uniformsGroups;for(let Ct=0,li=rt.length;Ct<li;Ct++){let wl=rt[Ct];st.update(wl,Ln),st.bind(wl,Ln)}}return Ln}function ds(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.sunLights.needsUpdate=q,T.sunLightShadows.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function wr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,q,ne){let te=ve.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ve.get(T.texture).__webglTexture=q,ve.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ne,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){let ne=ve.get(T);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,ne=0){G=T,Q=q,Y=ne;let te=null,oe=!1,Xe=!1;if(T){let Ue=ve.get(T);if(Ue.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,Ue.__webglFramebuffer),N.copy(T.viewport),X.copy(T.scissor),ae=T.scissorTest,Pe.viewport(N),Pe.scissor(X),Pe.setScissorTest(ae),H=-1;return}else if(Ue.__webglFramebuffer===void 0)ze.setupRenderTarget(T);else if(Ue.__hasExternalTextures)ze.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Et=T.depthTexture;if(Ue.__boundDepthTexture!==Et){if(Et!==null&&ve.has(Et)&&(T.width!==Et.image.width||T.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(T)}}let Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Xe=!0);let lt=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(lt[q])?te=lt[q][ne]:te=lt[q],oe=!0):T.samples>0&&ze.useMultisampledRTT(T)===!1?te=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(lt)?te=lt[ne]:te=lt,N.copy(T.viewport),X.copy(T.scissor),ae=T.scissorTest}else N.copy(Be).multiplyScalar(ye).floor(),X.copy(je).multiplyScalar(ye).floor(),ae=ue;if(ne!==0&&(te=z),Pe.bindFramebuffer(D.FRAMEBUFFER,te)&&Pe.drawBuffers(T,te),Pe.viewport(N),Pe.scissor(X),Pe.setScissorTest(ae),oe){let Ue=ve.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,ne)}else if(Xe){let Ue=q;for(let Ze=0;Ze<T.textures.length;Ze++){let lt=ve.get(T.textures[Ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ze,lt.__webglTexture,ne,Ue)}}else if(T!==null&&ne!==0){let Ue=ve.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ue.__webglTexture,ne)}H=-1};function hs(T){let q=ve.get(T);return(q.__readFormat!==T.format||q.__readType!==T.type)&&(q.__readFormat=T.format,q.__readType=T.type,q.__formatReadable=yt.textureFormatReadable(T.format),q.__typeReadable=yt.textureTypeReadable(T.type)),q}this.readRenderTargetPixels=function(T,q,ne,te,oe,Xe,Qe,Ue=0){if(!(T&&T.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ze=Ze[Qe],Array.isArray(Ze)&&(Ze=Ze[0])),Ze){Pe.bindFramebuffer(D.FRAMEBUFFER,Ze);try{let lt=T.textures[Ue],Et=lt.format,it=lt.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue);let ct=hs(lt);if(ct.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ct.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-te&&ne>=0&&ne<=T.height-oe&&D.readPixels(q,ne,te,oe,Ie.convert(Et),Ie.convert(it),Xe)}finally{let lt=G!==null?ve.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(T,q,ne,te,oe,Xe,Qe,Ue=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ze=Ze[Qe],Array.isArray(Ze)&&(Ze=Ze[0])),Ze)if(q>=0&&q<=T.width-te&&ne>=0&&ne<=T.height-oe){Pe.bindFramebuffer(D.FRAMEBUFFER,Ze);let lt=T.textures[Ue],Et=lt.format,it=lt.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ue);let ct=hs(lt);if(ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,Xe.byteLength,D.STREAM_READ),D.readPixels(q,ne,te,oe,Ie.convert(Et),Ie.convert(it),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let gn=G!==null?ve.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,gn);let on=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await f0(D,on,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Xe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ut),D.deleteSync(on),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,ne=0){let te=Math.pow(2,-ne),oe=Math.floor(T.image.width*te),Xe=Math.floor(T.image.height*te),Qe=q!==null?q.x:0,Ue=q!==null?q.y:0;ze.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,ne,0,0,Qe,Ue,oe,Xe),Pe.unbindTexture()},this.copyTextureToTexture=function(T,q,ne=null,te=null,oe=0,Xe=0){let Qe,Ue,Ze,lt,Et,it,ct,Ut,gn,on=T.isCompressedTexture?T.mipmaps[Xe]:T.image;if(ne!==null)Qe=ne.max.x-ne.min.x,Ue=ne.max.y-ne.min.y,Ze=ne.isBox3?ne.max.z-ne.min.z:1,lt=ne.min.x,Et=ne.min.y,it=ne.isBox3?ne.min.z:0;else{let Ee=Math.pow(2,-oe);Qe=Math.floor(on.width*Ee),Ue=Math.floor(on.height*Ee),T.isDataArrayTexture?Ze=on.depth:T.isData3DTexture?Ze=Math.floor(on.depth*Ee):Ze=1,lt=0,Et=0,it=0}te!==null?(ct=te.x,Ut=te.y,gn=te.z):(ct=0,Ut=0,gn=0);let en=Ie.convert(q.format),xn=Ie.convert(q.type),ut;q.isData3DTexture?(ze.setTexture3D(q,0),ut=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ze.setTexture2DArray(q,0),ut=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(q,0),ut=D.TEXTURE_2D),Pe.activeTexture(D.TEXTURE0),Pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),Pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Pe.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);let Rn=Pe.getParameter(D.UNPACK_ROW_LENGTH),Wt=Pe.getParameter(D.UNPACK_IMAGE_HEIGHT),fs=Pe.getParameter(D.UNPACK_SKIP_PIXELS),Ln=Pe.getParameter(D.UNPACK_SKIP_ROWS),Er=Pe.getParameter(D.UNPACK_SKIP_IMAGES);Pe.pixelStorei(D.UNPACK_ROW_LENGTH,on.width),Pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,on.height),Pe.pixelStorei(D.UNPACK_SKIP_PIXELS,lt),Pe.pixelStorei(D.UNPACK_SKIP_ROWS,Et),Pe.pixelStorei(D.UNPACK_SKIP_IMAGES,it);let W=T.isDataArrayTexture||T.isData3DTexture,Ne=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){let Ee=ve.get(T),qe=ve.get(q),et=ve.get(Ee.__renderTarget),rt=ve.get(qe.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,et.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let Ct=0;Ct<Ze;Ct++)W&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,oe,it+Ct),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(q).__webglTexture,Xe,gn+Ct)),D.blitFramebuffer(lt,Et,lt+Qe,Et+Ue,ct,Ut,ct+Qe,Ut+Ue,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(oe!==0||T.isRenderTargetTexture||ve.has(T)){let Ee=ve.get(T),qe=ve.get(q);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,C),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Z);for(let et=0;et<Ze;et++)W?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,oe,it+et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,oe),Ne?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,Xe,gn+et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,Xe),oe!==0?D.blitFramebuffer(lt,Et,lt+Qe,Et+Ue,ct,Ut,ct+Qe,Ut+Ue,D.COLOR_BUFFER_BIT,D.NEAREST):Ne?D.copyTexSubImage3D(ut,Xe,ct,Ut,gn+et,lt,Et,Qe,Ue):D.copyTexSubImage2D(ut,Xe,ct,Ut,lt,Et,Qe,Ue);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ne?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(ut,Xe,ct,Ut,gn,Qe,Ue,Ze,en,xn,on.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D(ut,Xe,ct,Ut,gn,Qe,Ue,Ze,en,on.data):D.texSubImage3D(ut,Xe,ct,Ut,gn,Qe,Ue,Ze,en,xn,on):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Xe,ct,Ut,Qe,Ue,en,xn,on.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Xe,ct,Ut,on.width,on.height,en,on.data):D.texSubImage2D(D.TEXTURE_2D,Xe,ct,Ut,Qe,Ue,en,xn,on);Pe.pixelStorei(D.UNPACK_ROW_LENGTH,Rn),Pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt),Pe.pixelStorei(D.UNPACK_SKIP_PIXELS,fs),Pe.pixelStorei(D.UNPACK_SKIP_ROWS,Ln),Pe.pixelStorei(D.UNPACK_SKIP_IMAGES,Er),Xe===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&D.generateMipmap(ut),Pe.unbindTexture()},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){Q=0,Y=0,G=null,Pe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}};var tm={type:"change"},qh={type:"start"},im={type:"end"},Fu=new ks,nm=new ui,WM=Math.cos(70*Cu.DEG2RAD),Un=new R,gi=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6,Uu=class extends $a{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new pn,this._lastTargetPosition=new R,this._quat=new pn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uo,this._sphericalDelta=new Uo,this._scale=1,this._panOffset=new R,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new R,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qM.bind(this),this._onPointerDown=XM.bind(this),this._onPointerUp=$M.bind(this),this._onContextMenu=eS.bind(this),this._onMouseWheel=ZM.bind(this),this._onKeyDown=JM.bind(this),this._onTouchStart=jM.bind(this),this._onTouchMove=QM.bind(this),this._onMouseDown=YM.bind(this),this._onMouseMove=KM.bind(this),this._interceptControlDown=tS.bind(this),this._interceptControlUp=nS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tm),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Un.copy(t).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=gi:i>Math.PI&&(i-=gi),s<-Math.PI?s+=gi:s>Math.PI&&(s-=gi),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),t.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Un.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fu.origin.copy(this.object.position),Fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fu.direction))<WM?this.object.lookAt(this.target):(nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fu.intersectPlane(nm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(tm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gi/60*this.autoRotateSpeed*e:gi/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Un.setFromMatrixColumn(t,0),Un.multiplyScalar(-e),this._panOffset.add(Un)}_panUp(e,t){this.screenSpacePanning===!0?Un.setFromMatrixColumn(t,1):(Un.setFromMatrixColumn(t,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(e),this._panOffset.add(Un)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Un.copy(s).sub(this.target);let r=Un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function XM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $M(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(im),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=jt.DOLLY;break;case ur.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}break;case ur.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(qh)}function KM(n){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ZM(n){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(n.preventDefault(),this.dispatchEvent(qh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(im))}function JM(n){this.enabled!==!1&&this._handleKeyDown(n)}function jM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case dr.ROTATE:if(this.enableRotate===!1){this.state=jt.NONE;break}this._handleTouchStartRotate(n),this.state=jt.TOUCH_ROTATE;break;case dr.PAN:if(this.enablePan===!1){this.state=jt.NONE;break}this._handleTouchStartPan(n),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case dr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=jt.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(qh)}function QM(n){switch(this._trackPointer(n),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=jt.NONE}}function eS(n){this.enabled!==!1&&n.preventDefault()}function tS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ol=new R;function Fi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ol.copy(e),ol[i]=0,ol.normalize();let c=.5*o/(o+a),u=1-ol.angleTo(n)/l;return Math.sign(ol[t])===1?u*c:a/(o+a)+c+c*(1-u)}var ku=class n extends Ht{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new R,c=new R,u=new R(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new R,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:x.set(1,0,0),p[y+0]=Fi(x,c,"z","y",r,i),p[y+1]=1-Fi(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[y+0]=1-Fi(x,c,"z","y",r,i),p[y+1]=1-Fi(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[y+0]=1-Fi(x,c,"x","z",r,e),p[y+1]=Fi(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),p[y+0]=1-Fi(x,c,"x","z",r,e),p[y+1]=1-Fi(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),p[y+0]=1-Fi(x,c,"x","y",r,e),p[y+1]=1-Fi(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[y+0]=Fi(x,c,"x","y",r,e),p[y+1]=1-Fi(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function rm(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new zt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=sm(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);let f=sm(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}}return l}function sm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ii(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){let x=u.getComponent(h,f);a.setComponent(h+d,f,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var iS=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function sS(n,e){return iS(n,e)}function kt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=sS(n,e),a=o.getContext("2d"),l=new Pa(o);i&&(l.colorSpace=Kn),l.anisotropy=r,s&&(l.wrapS=Os,l.wrapT=Os,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Gt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Ot='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Dt=Math.PI*2,Ui=Math.PI/180,gt=(n,e,t)=>n<e?e:n>t?t:n,Ei=(n,e,t)=>n+(e-n)*t,$h=n=>{let e=gt(n,0,1);return e*e*(3-2*e)},ki=n=>{let e=gt(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Kt=(n,e,t,i)=>Ei(n,e,1-Math.exp(-t*i));function dm(n,e,t){let i=(e-n)%Dt;return i>Math.PI&&(i-=Dt),i<-Math.PI&&(i+=Dt),n+i*t}function Yh(n,e){let t=(e-n)%Dt;return t>Math.PI&&(t-=Dt),t<-Math.PI&&(t+=Dt),t}var om=new Mt,am=new pn,lm=new Jn,cm=new R,um=new R;function P(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return lm.set(t[0],t[1],t[2]),am.setFromEuler(lm),cm.set(e[0],e[1],e[2]),um.set(i[0],i[1],i[2]),om.compose(cm,am,um),n.applyMatrix4(om),n}var Le=(n,e,t,i=.02,s=2)=>new ku(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Te=(n,e,t)=>new Ht(n,e,t),le=(n,e,t,i=32,s=!1)=>new Nn(n,e,t,i,1,s),Bi=(n,e=24,t=16)=>new wn(n,e,t),rn=(n,e,t=12,i=48,s=Dt)=>new fi(n,e,t,i,s),Ti=(n,e=48)=>new za(n.map(([t,i])=>new Se(t,i)),e);function Xo(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Dt;o.push(P(le(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function Kh(n,e,t,i,s=.02){let r=new Ji,o=Dt/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,p]=u[d],f=Math.cos(p)*h,x=Math.sin(p)*h;l===0&&d===0?r.moveTo(f,x):r.lineTo(f,x)}}if(r.closePath(),s>0){let l=new zs;l.absarc(0,0,s,0,Dt,!0),r.holes.push(l)}let a=new ys(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function Qn(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new R(l[0],l[1],l[2])),r=new Lo,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),p=Math.min(t,d.length()/2,h.length()/2),f=c.clone().sub(d.normalize().multiplyScalar(p)),x=c.clone().add(h.normalize().multiplyScalar(p));f.distanceTo(o)>1e-5&&r.add(new Dr(o.clone(),f)),r.add(new Nr(f,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new Dr(o.clone(),c.clone()))}let a=r.getLength();return new Ha(r,Math.max(16,Math.round(a*40)),e,i,!1)}var ht=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Yt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:rm(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new tt(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ye(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new tt(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Rt(n,e,t){let i=new Yt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Bu=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new R(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new R){let i=gt(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function hm(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Ft(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let f=0;f<=a;f++){let x=f/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),y=Math.sin(m),b=n+t*g,v=e-t*y,w=l?-g:g,S=l?y:-y;c.push(b,r,v,b,o,v),u.push(w,0,S,w,0,S),d.push(x,0,x,1)}for(let f=0;f<a;f++){let x=f*2;h.push(x,x+2,x+3,x,x+3,x+1)}let p=new zt;return p.setAttribute("position",new pt(c,3)),p.setAttribute("normal",new pt(u,3)),p.setAttribute("uv",new pt(d,2)),p.setIndex(h),p}function ts(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let p=0;p<u;p++){let f=n[p],x=n[(p+1)%c],m=x[0]-f[0],g=x[1]-f[1],y=Math.hypot(m,g);if(y<1e-6)continue;let b=g/y,v=-m/y,w=!1;s&&!s((f[0]+x[0])/2,(f[1]+x[1])/2,b,v)&&(b=-b,v=-v,w=!0);let S=r.length/3;r.push(f[0],e,f[1],f[0],t,f[1],x[0],e,x[1],x[0],t,x[1]);for(let _=0;_<4;_++)o.push(b,0,v);a.push(d,0,d,1,d+y,0,d+y,1),d+=y,w?l.push(S,S+2,S+3,S,S+3,S+1):l.push(S,S+1,S+3,S,S+3,S+2)}let h=new zt;return h.setAttribute("position",new pt(r,3)),h.setAttribute("normal",new pt(o,3)),h.setAttribute("uv",new pt(a,2)),h.setIndex(l),h}function fm(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function rS(){let n=fm(7);return kt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function oS(){let n=fm(23);return kt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Dt),e.stroke()},{anisotropy:8})}function aS(){return kt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function lS(){return kt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function cS(){return kt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var bn=n=>new vt(n);function qs({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=vs,emissive:a=0,emissiveIntensity:l=0}={}){let c=new vt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Bo,c.blendSrc=hr,c.blendDst=fr,c.blendSrcAlpha=hr,c.blendDstAlpha=fr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function pm(n="high"){let e={brushed:rS().tex,wafer:oS().tex,radial:aS().tex,hazard:lS().tex,grille:cS().tex};return{M:{alu:bn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:bn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:bn({color:14936044,metalness:1,roughness:.08}),steel:bn({color:11646654,metalness:1,roughness:.28}),darkSteel:bn({color:6251886,metalness:1,roughness:.34}),brass:bn({color:13876630,metalness:1,roughness:.3}),copper:bn({color:12946278,metalness:1,roughness:.3}),gold:bn({color:15320959,metalness:1,roughness:.22}),white:bn({color:15856630,metalness:0,roughness:.32}),graphite:bn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:bn({color:5073918,metalness:.2,roughness:.35}),orange:bn({color:13137466,metalness:.3,roughness:.36}),rubber:bn({color:1382171,metalness:0,roughness:.8}),plastic:bn({color:2303532,metalness:0,roughness:.45}),ceramic:bn({color:15001579,metalness:0,roughness:.42}),grille:bn({map:e.grille,metalness:.6,roughness:.45}),hazard:bn({map:e.hazard,metalness:.2,roughness:.55}),glass:qs({color:14674421,opacity:.08,fresnel:.55}),smoke:qs({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:Jt}),fuel:bn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:bn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:bn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:bn({color:13949150,metalness:0,roughness:.25}),wall:bn({color:15133166,metalness:0,roughness:.5}),shadow:new Xt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new Hs({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:bn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function qt(n,e=0){let t=new Fe(n);return new vt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function al(n,e=1.25){return new vt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function kn(n,e=.55){return new vt({map:n,metalness:e,roughness:.42})}var Vr=Math.PI/180,We={cx:.5,cz:-1,r:22,h:13.5},zi={panes:24,finDepth:.36,doorA0:263*Vr,doorA1:277*Vr,doorH:3.1},mr={a0:236*Vr,a1:304*Vr,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},Hi={r:22.35,groundY:-420},$n={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Vr,targetR:17,targetYMin:.4,targetYMax:12},Pt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Hu=.45,Wr=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],ot={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Vr,a1:142*Vr,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Zh=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function qo(n,e,t=0,i=new R){return i.set(We.cx+e*Math.cos(n),t,We.cz-e*Math.sin(n))}var Jh=Math.PI*2,zu=(n,e,t)=>Math.min(t,Math.max(e,n)),mm=(n,e)=>{let t=Math.abs(n-e)%Jh;return t>Math.PI?Jh-t:t};function jh(n,e){let t=Math.atan2(-(e-We.cz),n-We.cx);return t<0?t+Jh:t}function gr(n){let e=$n,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-We.cx,n.z-We.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=jh(n.x,n.z);return i<=e.outerR+t?s>=zi.doorA0+e.edge-t&&s<=zi.doorA1-e.edge+t&&n.y<=zi.doorH-.25+t?"door":null:s>=mr.a0+e.edge-t&&s<=mr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function gm(n,e,t){let i=n.x-We.cx,s=n.z-We.cz,r=Math.hypot(i,s),o=zu(r,e,t);r>1e-9&&o!==r&&(n.x=We.cx+i*o/r,n.z=We.cz+s*o/r)}function xm(n,e,t){let i=jh(n.x,n.z);if(i>=e&&i<=t)return;let s=mm(i,e)<mm(i,t)?e:t,r=Math.hypot(n.x-We.cx,n.z-We.cz);n.x=We.cx+r*Math.cos(s),n.z=We.cz-r*Math.sin(s)}function Qh(n,e=null){if(gr(n))return n;let t=$n,i=e?gr(e):null;if(!i){let s=Math.hypot(n.x-We.cx,n.z-We.cz),r=jh(n.x,n.z);i=s>We.r&&r>=mr.a0&&r<=mr.a1?"balcony":"hall"}if(i==="door"){if(xm(n,zi.doorA0+t.edge,zi.doorA1-t.edge),n.y=zu(n.y,t.yMin,zi.doorH-.25),gr(n))return n;i=Math.hypot(e.x-We.cx,e.z-We.cz)>We.r?"balcony":"hall"}return i==="balcony"?(xm(n,mr.a0+t.edge,mr.a1-t.edge),gm(n,t.outerR+.001,t.balconyR),n.y=zu(n.y,t.yMin,t.balconyYMax)):(gm(n,0,t.r),n.y=zu(n.y,t.yMin,t.yMax)),n}function Gu(){let n=ot.screenR,e=Zh.reduce((i,s)=>i+s.w,0)+ot.gap*(Zh.length-1),t=Math.PI/2+e/n/2;return Zh.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-ot.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:ot.screenY-a/2,y1:ot.screenY+a/2}})}function uS(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function dS(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function hS(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?uS(e,t,n.a,n.b,n.r):dS(e,t,n.c,n.h)}function vm(n,e,t=Wr){let i=1/0;for(let s of t)i=Math.min(i,hS(s,n,e));return i}function _m(n,e){let t=Math.abs(n-Pt.cx)-Pt.hx+Pt.r,i=Math.abs(e-Pt.cz)-Pt.hz+Pt.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Pt.r}var Pn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function ym(n){return n.type==="circle"?`length(p - vec2(${Pn(n.c[0])}, ${Pn(n.c[1])})) - ${Pn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${Pn(n.a[0])}, ${Pn(n.a[1])}), vec2(${Pn(n.b[0])}, ${Pn(n.b[1])}), ${Pn(n.r)})`:`lSdBox(p, vec2(${Pn(n.c[0])}, ${Pn(n.c[1])}), vec2(${Pn(n.h[0])}, ${Pn(n.h[1])}))`}function bm(){let n=Wr.find(t=>t.id==="cell");return`
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
${Wr.map((t,i)=>i===0?`  float d = ${ym(t)};`:`  d = min(d, ${ym(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${Pn(Pt.cx)}, ${Pn(Pt.cz)})) - vec2(${Pn(Pt.hx-Pt.r)}, ${Pn(Pt.hz-Pt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${Pn(Pt.r)};
}
const vec2 HUB_C = vec2(${Pn(n.c[0])}, ${Pn(n.c[1])});
const float HUB_R = ${Pn(n.r)};
`}function Mm(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Pt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,p)=>{let f=Math.max(1,Math.ceil(Math.hypot(h-u,p-d)/n));for(let x=0;x<f;x++)o.push([u+(h-u)*x/f,d+(p-d)*x/f])};for(let u=0;u<4;u++){let[d,h,p]=a[u];for(let w=0;w<l;w++){let S=p+Math.PI/2*w/l;o.push([d+r*Math.cos(S),h+r*Math.sin(S)])}let[f,x,m]=a[(u+1)%4],g=d+r*Math.cos(p+Math.PI/2),y=h+r*Math.sin(p+Math.PI/2),b=f+r*Math.cos(m),v=x+r*Math.sin(m);c(g,y,b,v)}return o}var ll=Math.PI/180;function fS(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ai(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function Sm(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function pS(n,e){return(n/(2*Math.PI)+.5)*e}function cl(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,Ai(r,o)),a.addColorStop(.45,Ai(r,o*.42)),a.addColorStop(1,Ai(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function mS(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,v)=>{v(b-e),v(b),v(b+e)},l=fS(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,v]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),v);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=pS(Math.atan2(d[2],d[0]),e),p=o(Math.asin(d[1])/ll);if(a(h,b=>{cl(n,b,o(3),100*r,16*r,s.sunGlow,.55),cl(n,b,p,60*r,60*r,s.sunGlow,.42),cl(n,b,p,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>cl(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let v=3+24*Math.pow(l(),1.6),w=l()*e,S=(8+42*l())*r,_=(.35+1.4*l())*r,M=Math.abs(w-h)%e;M=Math.min(M,e-M)/e;let L=Math.max(0,1-M/.28),A=Sm(s.cloudDark,s.cloudLit,L),O=s.clouds*(.18+.32*l())*(.6+.4*L);a(w,U=>cl(n,U,o(v),S,_,A,O))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let v=Math.sin(16*ll)+l()*(1-Math.sin(16*ll)),w=Math.asin(v)/ll,S=Math.min(1,Math.max(0,(w-16)/26)),_=s.stars*S*(.25+.7*l()*l());if(_<.03)continue;let M=.7+l()*1.1,L=1/Math.max(.12,Math.cos(w*ll));n.fillStyle=l()<.2?Ai("#bcd2ff",_):Ai("#ffffff",_),n.fillRect(l()*e,o(w),M*L,M)}let f=s.far,x=Sm(f.body,f.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),v=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,w=o(v),S=o(-2.5);if(n.fillStyle=x,n.fillRect(m,w,b,S-w),v>2.1&&l()<.6&&n.fillRect(m+b/2-.5,w-3-l()*5,1,4+l()*5),f.windows>0){let _=Math.floor((S-w)*b*.05*f.windows);for(let M=0;M<_;M++){let L=l(),A=L<.62?"#ffc078":L<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=Ai(A,(.25+.4*l())*Math.min(1,f.windows*1.4)),n.fillRect(m+Math.floor(l()*b),w+Math.floor(l()*(S-w)),1,1)}}f.neon>0&&l()<.04&&(n.fillStyle=Ai(l()<.7?"#46e6ff":"#ffb347",.45*f.neon),n.fillRect(m,w-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,Ai(f.haze,0)),g.addColorStop(.45,Ai(f.haze,.38)),g.addColorStop(1,Ai(f.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let v=0;v<b;v++){let w=Math.pow(l(),1.3),S=-.3-3.9*w,_=l(),M=_<.6?"#ffb46a":_<.82?"#ffe2b0":_<.93?"#ffffff":"#55dcff";n.fillStyle=Ai(M,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*w)),n.fillRect(l()*e,o(S),1,1)}}let y=n.createLinearGradient(0,o(.6),0,o(-4.4));y.addColorStop(0,Ai(s.groundHaze,.1)),y.addColorStop(1,Ai(s.groundHaze,.9)),n.fillStyle=y,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var gS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,xS=`
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
`;function yS(n,e){let t=new Lr;t.background=new Fe(n.clear);let i=new tt(new wn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Xt({side:Jt,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let p=new tt(u,d);return p.position.set(h[0],h[1],h[2]),t.add(p),p},a=We.cx,l=We.cz;o(new _n(6.4,We.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,We.h,l]),o(new fi(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,We.h-.25,l]),o(new Sn(We.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new _n(We.r-.6,We.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,We.h-.55,l]),o(Ft(a,l,We.r-.6,0,Math.PI*2,We.h-.55,We.h,64,!0),r(s.column,.85)),o(Ft(a,l,ot.r,ot.a0,ot.a1,ot.bandY0,ot.bandY1,32,!0),r(s.media,1)),o(Ft(a,l,ot.r,ot.a0,ot.a1,ot.bandY1,ot.top,32,!0),r(s.column,.85)),o(Ft(a,l,ot.r-.3,ot.a0,ot.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of Gu())o(Ft(a,l,ot.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function vS(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function wm(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=kt(i,s,null,{anisotropy:1});r.tex.wrapS=Os,r.tex.generateMipmaps=!1,r.tex.minFilter=vn,r.tex.magFilter=vn;let o=new sn({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new Fe(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:gS,fragmentShader:xS,side:jn,depthTest:!1,depthWrite:!1,fog:!1}),a=new tt(new wn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=yS(c,o),p=new Vo(n),f=p.fromScene(h,.035,.1,400,{size:256,position:new R(We.cx,1.6,We.cz)});p.dispose(),vS(h,o),l&&l.dispose(),l=f}function d(h){c=h,r.redraw((p,f,x)=>mS(p,f,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var ln=1,_S=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,bS=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,MS=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,SS=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function Em(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new Zn(16,16,{type:pi,generateMipmaps:!0,minFilter:ji,magFilter:vn,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new Mt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new Wn;o.layers.set(0);let a=new R(0,1,0),l=new R(0,0,0),c=new R,u=new Mt,d=new R,h=new R,p=new R,f=new ui,x=new cn,m=new cn,g=new Se,y=0;function b(w){w.uniforms.tReflect=r.tReflect,w.uniforms.uReflMatrix=r.uReflMatrix,w.uniforms.uReflStrength=r.uReflStrength,w.uniforms.uReflBlur=r.uReflBlur,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${_S}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${bS}`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${MS}`).replace("#include <opaque_fragment>",`${SS}
#include <opaque_fragment>`)}function v(w,S){if(!n)return!1;n.getDrawingBufferSize(g);let _=Math.max(16,Math.round(g.x*e)),M=Math.max(16,Math.round(g.y*e));if((s.width!==_||s.height!==M)&&s.setSize(_,M),c.setFromMatrixPosition(S.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(S.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),p.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(p),o.far=S.far,o.updateMatrixWorld(),o.projectionMatrix.copy(S.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let L=r.uReflMatrix.value;L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(o.projectionMatrix),L.multiply(o.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(a,l),f.applyMatrix4(o.matrixWorldInverse),x.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let A=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+A[8])/A[0],m.y=(Math.sign(x.y)+A[9])/A[5],m.z=-1,m.w=(1+A[10])/A[14],x.multiplyScalar(2/x.dot(m)),A[2]=x.x,A[6]=x.y,A[10]=x.z+1-y,A[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let O=n.getRenderTarget(),U=n.autoClear,z=n.shadowMap.autoUpdate,C=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(w,o),n.autoClear=U,n.shadowMap.autoUpdate=z,n.shadowMap.needsUpdate=C,n.setRenderTarget(O),!0}return{uniforms:r,inject:b,update:v,setStrength(w){r.uReflStrength.value=w},dispose(){s.dispose()}}}var xi=Math.PI*2,nf=bm();function Vu(n,e,t){let i=new Xt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var sf=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function Am(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function wS(n){let e=new vt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{Am(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${sf}
${nf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
float ringD = length(vFloor - vec2(${We.cx.toFixed(3)}, ${We.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function ES(n){let e=new vt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{Am(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${sf}
${nf}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var TS=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,AS=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${sf}
${nf}
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
}`,RS=`
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
}`,CS=`
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
}`;function PS(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(xi*o/t));for(let l=0;l<a;l++){let c=l/a*xi;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,p=n.r+e,f=Math.max(16,Math.ceil(Math.PI*p/t)),x=(g,y)=>{for(let b=0;b<=f;b++){let v=y-Math.PI*b/f;i.push([g[0]+p*(Math.cos(v)*c+Math.sin(v)*d),g[1]+p*(Math.cos(v)*u+Math.sin(v)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,y)=>{let b=gt(((g-n.a[0])*c+(y-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function ef(n,e,t,i){let{pts:s,center:r}=PS(n,e);return ts(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function Tm(n,e){let t=Pt.hx-Pt.r,i=Pt.hz-Pt.r;return n.map(([s,r])=>{let o=Pt.cx+gt(s-Pt.cx,-t,t),a=Pt.cz+gt(r-Pt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var tf=(n,e,t,i)=>(Pt.cx-n)*t+(Pt.cz-e)*i>0;function IS(n){let e=Wr.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function LS(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of Wr)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Pt.cx-Pt.hx),e=Math.min(e,Pt.cx+Pt.hx),t=Math.max(t,Pt.cz-Pt.hz),i=Math.min(i,Pt.cz+Pt.hz),{x0:n,x1:e,z0:t,z1:i}}function DS(n,e,t,i=6){let s=new R().subVectors(e,n),r=s.length(),o=new Nn(t,t,r,i,1,!0);return o.applyQuaternion(new pn().setFromUnitVectors(new R(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function NS({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=We,l=mr,c=l.a1-l.a0,u=(M,L)=>[r+L*Math.cos(M),o-L*Math.sin(M)],d=new tt(P(new _n(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(ln),n.add("white",P(new _n(a+.2,Hi.r,160,1,l.a1,xi-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Ft(r,o,Hi.r,l.a1,l.a0+xi,-.45,0,160,!1)),e.add("glowCyan",Ft(r,o,Hi.r+.004,l.a1,l.a0+xi,-.24,-.21,160,!1)),e.add("white",Ft(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Ft(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Ft(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let M of[l.a0,l.a1])e.add("white",P(Te(l.r1-Hi.r,l.slab,.04),s(M,(Hi.r+l.r1)/2,-l.slab/2),[0,M,0]));let h=l.r1-.06,p=a+.05,f=[];for(let M=0;M<=4;M++)f.push(u(l.a0,p+(h-p)*M/4));let x=Math.ceil(c*h/.45);for(let M=1;M<=x;M++)f.push(u(l.a0+c*M/x,h));for(let M=3;M>=0;M--)f.push(u(l.a1,p+(h-p)*M/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(M,L,A,O)=>(m[0]-M)*A+(m[1]-L)*O>0,y=(M,L,A,O)=>!g(M,L,A,O);t.add("rail",ts(f,.045,l.rail)),n.add("chrome",Qn(f.map(([M,L])=>[M,l.rail+.026,L]),.026,.1,8)),n.add("silver",ts(f,0,.045,{facing:y})),n.add("glowCyan",ts(f,0,.04,{facing:g}));for(let M=0;M<f.length;M+=5)n.add("chrome",P(le(.018,.018,l.rail,8),[f[M][0],l.rail/2,f[M][1]]));let b=l.canopyY,v=a+.02,w=l.r1+.35;n.add("white",P(new _n(v,w,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",P(new _n(v,w,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",P(new _n(w-.13,w-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Ft(r,o,w,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Ft(r,o,w-.002,l.a0,l.a1,b,b+.14,72,!0));for(let M of[l.a0,l.a1])n.add("silver",P(Te(w-v,.14,.04),s(M,(v+w)/2,b+.07),[0,M,0]));for(let[M,L]of[[23.3,17],[25.2,19]])for(let A=0;A<L;A++){let O=l.a0+(A+.5)*c/L;n.add("glowWhite",P(new Sn(.085,16),s(O,M,b-.003),[Math.PI/2,0,0])),n.add("chrome",P(new _n(.085,.11,16,1),s(O,M,b-.002),[Math.PI/2,0,0]))}let S=new R,_=new R;for(let M=0;M<6;M++){let L=l.a0+(M+.5)*c/6;qo(L,w-.15,b+.14,S),qo(L,a+.03,b+3.4,_),n.add("silver",DS(S,_,.014)),n.add("chrome",P(le(.05,.05,.03,14),_.toArray(),[0,L,Math.PI/2]))}for(let M of[250,290]){let L=M*Math.PI/180;n.add("white",P(Le(.5,.34,2.4,.05,3),s(L,23.4,.27),[0,L,0])),n.add("dark",P(Te(.32,.1,2.1),s(L,23.4,.05),[0,L,0])),n.add("glowCyan",P(Te(.33,.012,2.11),s(L,23.4,.094),[0,L,0]))}return{floor:d}}function Rm(n,{reflection:e=null}={}){let t=new Yt;t.name="atrium";let{cx:i,cz:s,r,h:o}=We,a={white:new vt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new vt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new vt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new vt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new vt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Vu(4641535,3,"atrium-glow-cyan"),glowBlue:Vu(5213695,2.2,"atrium-glow-blue"),glowWhite:Vu(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Vu(16777215,5,"atrium-ring-light"),u=qs({color:13623538,opacity:.045,fresnel:.5,side:Jt}),d=qs({color:14083830,opacity:.1,fresnel:.6,side:Jt}),h=qs({color:14214901,opacity:.08,fresnel:.5,side:Jt}),p=qs({color:13623538,opacity:.04,fresnel:.4}),f=new ht,x=new ht,m=new ht,g=new R,y=(Me,ve,ze)=>qo(Me,ve,ze,g).toArray(),{doorA0:b,doorA1:v,doorH:w}=zi,S=w+.12,_=xi/zi.panes,M=.006/r,L=Me=>Me>b+1e-6&&Me<v-1e-6;for(let Me=0;Me<zi.panes;Me++){let ve=Me*_+M,ze=(Me+1)*_-M,I=[ve];for(let E of[b,v])E>ve&&E<ze&&I.push(E);I.push(ze);for(let E=0;E+1<I.length;E++){let $=I[E],we=I[E+1],me=L(($+we)/2)?S:.05,Oe=Math.max(2,Math.ceil((we-$)/_*16));m.add("glass",Ft(i,s,r,$,we,me,o,Oe,!0))}}let A=zi.finDepth,O=o-.55,U=r-A/2-.004;for(let Me=0;Me<zi.panes;Me++){let ve=Me*_;if(!L(ve)){m.add("fin",P(Te(A,O,.022),y(ve,U,O/2),[0,ve,0])),f.add("silver",P(Te(A+.04,.06,.05),y(ve,U,.03),[0,ve,0])),f.add("silver",P(Te(A+.04,.06,.05),y(ve,U,O-.03),[0,ve,0]));for(let ze of[1.1,4.7,8.3,11.9]){f.add("chrome",P(Te(.025,.09,.17),y(ve,r-.0175,ze),[0,ve,0])),f.add("chrome",P(Te(.09,.09,.045),y(ve,r-.075,ze),[0,ve,0]));for(let I of[-1,1])f.add("chrome",P(le(.022,.022,.018,14),y(ve+I*(.055/r),r-.039,ze),[0,ve,Math.PI/2]))}}}let z=o-.55;f.add("white",Ft(i,s,r-.6,0,xi,z,o,160,!0)),f.add("satin",P(new _n(r-.6,r-.01,160,1),[i,z,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new _n(r-.16,r-.1,160,1),[i,z-.004,s],[Math.PI/2,0,0])),f.add("glowCyan",Ft(i,s,r-.605,0,xi,z+.02,z+.05,160,!0));let C=v,Z=xi-(v-b);f.add("glowCyan",P(new _n(r-.17,r-.13,160,1,C,Z),[i,.003,s],[-Math.PI/2,0,0])),f.add("silver",Ft(i,s,r-.03,C,C+Z,0,.05,160,!0));for(let Me of[b,v])f.add("silver",P(Te(.14,S,.06),y(Me,r-.03,S/2),[0,Me,0]));let Q=v-b;f.add("silver",Ft(i,s,r-.06,b,v,w,S,16,!0)),f.add("silver",Ft(i,s,r+.04,b,v,w,S,16,!1)),f.add("silver",P(new _n(r-.06,r+.04,16,1,-v,Q),[i,w,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new _n(r-.025,r+.005,16,1,-v,Q),[i,w-.002,s],[Math.PI/2,0,0])),f.add("silver",P(new _n(r-.22,r+.24,16,1,b,Q),[i,.003,s],[-Math.PI/2,0,0]));let Y=Q/2,G=r-.09;for(let[Me,ve,ze]of[[b-Y,b,.9],[v,v+Y,.1]]){m.add("fin",Ft(i,s,G,Me+.03/G,ve-.03/G,.06,w-.06,12,!0)),f.add("silver",Ft(i,s,G-.02,Me,ve,0,.06,12,!0)),f.add("silver",Ft(i,s,G-.02,Me,ve,w-.06,w,12,!0));for(let I of[Me,ve])f.add("silver",P(Te(.05,w,.05),y(I,G,w/2),[0,I,0]));f.add("chrome",P(le(.012,.012,1.1,8),y(Me+(ve-Me)*ze,G-.05,1.05)))}f.add("silver",Ft(i,s,G-.035,b-Y,v+Y,w,w+.08,24,!0)),f.add("ceiling",P(new _n(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let Me=0;Me<16;Me++){let ve=Me/16*xi,ze=(r+6.4)/2;f.add("white",P(Te(r-6.4,.34,.3),[i+ze*Math.cos(ve),o-.17,s-ze*Math.sin(ve)],[0,ve,0]))}for(let Me of[9,16.5])f.add("white",Ft(i,s,Me,0,xi,o-.34,o,160,!0)),f.add("white",Ft(i,s,Me+.3,0,xi,o-.34,o,160,!1)),f.add("white",P(new _n(Me,Me+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let Me of[11.15,11.85])f.add("satin",Ft(i,s,Me,0,xi,o-.24,o,160,!0)),f.add("satin",Ft(i,s,Me,0,xi,o-.24,o,160,!1));let H=new tt(P(rn(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);H.name="ring-light",H.position.set(i,o-.15,s),t.add(H),f.add("chrome",P(rn(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let Me=0;Me<4;Me++)f.add("silver",P(Te(12.8,.12,.12),[i,o+.03,s],[0,Me*Math.PI/4,0]));let K=new tt(P(new Sn(6.4,96),[0,0,0],[Math.PI/2,0,0]),p);K.name="skylight",K.position.set(i,o+.06,s),t.add(K);let{a0:N,a1:X}=ot,ae=ot.moduleR-.36;f.add("dark",Ft(i,s,ot.r,N,X,ot.bandY0,ot.bandY1,72,!0)),f.add("white",Ft(i,s,ot.r,N,X,ot.bandY1,ot.top,72,!0)),f.add("white",Ft(i,s,ot.r,N,X,2.3,ot.bandY0,72,!0)),f.add("satin",Ft(i,s,ot.r,N,X,0,2.3,72,!0)),f.add("white",Ft(i,s,ot.back,N,X,0,ot.top,72,!1)),f.add("white",P(new _n(ot.r,ot.back,72,1,N,X-N),[i,ot.top,s],[-Math.PI/2,0,0])),f.add("white",P(new _n(ae,ot.r,72,1,N,X-N),[i,2.3,s],[-Math.PI/2,0,0])),f.add("white",Ft(i,s,ae,N,X,2.22,2.3,72,!0)),f.add("glowBlue",Ft(i,s,ae-.004,N,X,2.245,2.265,72,!0)),f.add("glowCyan",Ft(i,s,ot.r-.012,N,X,7.1,7.14,72,!0)),f.add("glowCyan",Ft(i,s,ot.r-.012,N,X,2.64,2.68,72,!0));let J=ot.back-ae+.04,de=(ot.back+ae)/2;for(let[Me,ve]of[[N-.07/de,-1],[X+.07/de,1]]){f.add("white",P(Te(J,ot.top,.14),[i+de*Math.cos(Me),ot.top/2,s-de*Math.sin(Me)],[0,Me,0]));let ze=Me-ve*(.075/ae);f.add("glowCyan",P(Te(.04,ot.top-.4,.03),[i+(ae+.02)*Math.cos(ze),ot.top/2,s-(ae+.02)*Math.sin(ze)],[0,Me,0]))}let xe=24,ee=new Dn(new Ht(.62,2.22,.78),a.white,xe);ee.name="compute-modules";let ye=new Se(.7,2.08),De=new _t(ye.x,ye.y),dt=new sn({name:"module-doors",vertexShader:RS,fragmentShader:CS,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:ye}}}),Be=new Dn(De,dt,xe);Be.name="module-doors";let je=new Float32Array(xe),ue=new an;for(let Me=0;Me<xe;Me++){let ve=N+(Me+.5)*(X-N)/xe;qo(ve,ot.moduleR,1.11,ue.position),ue.rotation.set(0,ve,0),ue.updateMatrix(),ee.setMatrixAt(Me,ue.matrix),qo(ve,ot.moduleR-.316,1.11,ue.position),ue.rotation.set(0,ve-Math.PI/2,0),ue.updateMatrix(),Be.setMatrixAt(Me,ue.matrix),je[Me]=Me*7.31+3.7,f.add("chrome",P(Te(.66,.03,.82),[ue.position.x,.015,ue.position.z],[0,ve,0]))}De.setAttribute("aSeed",new si(je,1)),ee.instanceMatrix.needsUpdate=!0,Be.instanceMatrix.needsUpdate=!0,ee.computeBoundingSphere(),Be.computeBoundingSphere(),ee.receiveShadow=!0,t.add(ee,Be);let se=wS(e),k=new tt(P(new Sn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),se);k.name="atrium-floor",k.position.set(i,0,s),k.receiveShadow=!0,k.layers.set(ln);let V=NS({kit:f,low:x,glassKit:m,floorMat:se,at:y});t.add(V.floor);let ie=LS(),j=new tt(P(new _t(ie.x1-ie.x0,ie.z1-ie.z0),[0,0,0],[-Math.PI/2,0,0]),ES(e));j.name="island-tops",j.position.set((ie.x0+ie.x1)/2,0,(ie.z0+ie.z1)/2),j.receiveShadow=!0,j.layers.set(ln),t.add(k,j);for(let Me of Wr)x.add("satin",ef(Me,0,-Hu,0)),x.add("silver",ef(Me,.004,-.045,-.001)),x.add("glowCyan",ef(Me,.006,-Hu,-Hu+.05));let ce=Mm(.5);x.add("satin",ts(ce,-Pt.depth,0,{closed:!0,facing:tf}));let Ae=Tm(ce,.012);x.add("glowCyan",ts(Ae,-.17,-.13,{closed:!0,facing:tf})),x.add("glowBlue",ts(Ae,-Pt.depth+.1,-Pt.depth+.14,{closed:!0,facing:tf}));let F=new sn({name:"data-pool",vertexShader:TS,fragmentShader:AS,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),re=new tt(P(new _t(Pt.hx*2,Pt.hz*2),[0,0,0],[-Math.PI/2,0,0]),F);re.name="data-pool",re.position.set(Pt.cx,-Pt.depth,Pt.cz),re.layers.set(ln),t.add(re);let he=Tm(ce,-.06),D=[];for(let Me of IS(he)){D.push(ts(Me,.035,1)),f.add("chrome",Qn(Me.map(([ve,ze])=>[ve,1.01,ze]),.022,.08,8)),f.add("glowCyan",ts(Me,0,.035)),f.add("glowCyan",ts(Me.slice().reverse(),0,.035));for(let ve=0;ve<Me.length;ve+=5)f.add("chrome",P(le(.018,.018,1,8),[Me[ve][0],.5,Me[ve][1]]))}if(D.length){let Me=new ht;for(let ze of D)Me.add("glass",ze);let ve=Me.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(ve)}let Ke=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Ke.traverse(Me=>{Me.isMesh&&(Me.renderOrder=2)}),t.add(Ke);let at=f.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(at);let yt=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});yt.traverse(Me=>Me.layers.set(ln)),t.add(yt);let Pe=.3;return{root:t,reflectors:[k,j,V.floor],bounds:ie,update(Me,ve,ze={}){let I=gt(ze.activity||0,0,1);Pe+=(.3+.7*I-Pe)*Math.min(1,Me*2),F.uniforms.uTravel.value=(F.uniforms.uTravel.value+Me*(.25+1.4*I))%1e3,F.uniforms.uFlow.value=Pe,dt.uniforms.uTime.value=ve,dt.uniforms.uActivity.value=Pe},setLook(Me){let ve=Me.glow==null?1:Me.glow;for(let ze of l)ze.color.setHex(ze.userData.glow.hex).multiplyScalar(ze.userData.glow.k*ve);c.color.set(Me.interior.ring).multiplyScalar(Me.interior.ringPower),a.ceiling.emissiveIntensity=Me.id==="day"?.16:.22,F.uniforms.uGlow.value=ve}}}var $s=Hi.groundY,Ys={pitch:96,rot:18*Math.PI/180},rf=Math.cos(Ys.rot),of=Math.sin(Ys.rot),Cm=13*289,ul=2400;function xr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Pm(n,e,t=[0,0]){return t[0]=We.cx+rf*n+of*e,t[1]=We.cz-of*n+rf*e,t}function af(n,e,t=[0,0]){return t[0]=We.cx+e*Math.cos(n),t[1]=We.cz-e*Math.sin(n),t}function Im(){return{uHaze:{value:new Fe(2902638)},uHazeHigh:{value:new Fe(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Se(We.cx,We.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new Fe(16777215)},uSunK:{value:.2},uSkyRefl:{value:new Fe(3103372)}}}function ns(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var is=["uHaze","uHazeHigh","uHazeDensity"],ss=`
#define GROUND_Y (${$s.toFixed(1)})
#define GRID_P ${Ys.pitch.toFixed(1)}
#define GRID_C ${rf.toFixed(7)}
#define GRID_S ${of.toFixed(7)}
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
`;var OS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,FS=`
${ss}
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
`,US=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,kS=`
${ss}
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
#define TOWER_R ${Hi.r.toFixed(3)}

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
`;function Lm(n,{quality:e="high"}={}){let t=ns(n,[...is,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new Fe(461846)},uStreet:{value:new Fe(16752714)},uAvenue:{value:new Fe(4641535)},uRoof:{value:new Fe(1712690)},uPark:{value:new Fe(463887)}}),i=new sn({name:"city-ground",vertexShader:OS,fragmentShader:FS,uniforms:t}),s=e==="low"?4200:6e3,r=new Sn(s,96).rotateX(-Math.PI/2),o=new tt(r,i);return o.name="city-ground",o.position.set(We.cx,$s,We.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(ln),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function Dm(n){let e=ns(n,[...is,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new Fe(1778996)},uGlassC:{value:new Fe(660516)},uSpine:{value:new Fe(4641535)}}),t=new sn({name:"city-host-facade",vertexShader:US,fragmentShader:kS,uniforms:e}),i=-.45,s=i-$s,r=new Nn(Hi.r,Hi.r,s,128,1,!0),o=new tt(r,t);return o.name="city-host-facade",o.position.set(We.cx,(i+$s)/2,We.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(ln),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var BS=`
${ss}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${ul.toFixed(1)}

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
`,zS=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function Nm(n,{quality:e="high"}={}){let t=xr(91),i=Ys.pitch,s=e==="low"?2:1,r=[];for(let p=-20;p<=20;p+=4){let f=(p+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:f-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:f+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let p of[-16,-12,12,16]){let f=(p+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:f,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let p of r){let f=Math.floor(2*ul/p.spacing);for(let x=0;x<f;x++){o.push(p.axis,p.coord,p.y,p.speed);let m=t(),g=p.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/f,7+t()*8,t(),g)}}let l=o.length/4,c=new _t(1,1),u=new qa;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new si(new Float32Array(o),4)),u.setAttribute("aCar",new si(new Float32Array(a),4)),u.instanceCount=l;let d=new sn({name:"city-traffic",vertexShader:BS,fragmentShader:zS,uniforms:ns(n,[...is,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:qn,side:Jt}),h=new tt(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(ln),{mesh:h,count:l}}var km=Math.PI/180,lf=Ys.pitch,HS=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],GS=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],VS={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},WS=`
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
`,XS=`
${ss}
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
`;function qS(n,e){return Math.hypot(n-We.cx,e-We.cz)}function $S(n,e){let t=xr(17),i=n==="low"?1500:2600,s=Math.ceil(i/lf)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=HS.map(c=>{let[u,d]=af(c.a*km,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let p=c*lf+d,f=u*lf+h,x=Math.hypot(p,f);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,y=12+t()*20,b=(t()-.5)*Math.max(0,37-g),v=(t()-.5)*Math.max(0,37-y);Pm(p+b,f+v,a);let w=a[0],S=a[1];if(e.some(C=>Math.hypot(C.x-w,C.z-S)<C.rad))continue;let _=gt((x-120)/650,0,1),M=22+Math.pow(t(),2.2)*(70+250*_),L=0;for(let C of o)L=Math.max(L,Math.exp(-((w-C.x)**2+(S-C.z)**2)/C.r2));M+=L*(140+220*t());let A=Math.min($s+M,L>.3?60:-40),O=t(),U=L>.3?O<.3?0:O<.45?1:O<.6?2:3:O<.35?0:O<.6?1:O<.9?2:3,z=0;Math.min(g,y)>=22&&t()<.18&&(z|=1),t()<.45&&(z|=2),t()<.35&&(z|=8),l.push({x:w,z:S,w:g,d:y,base:$s-20,top:A,rot:Ys.rot,seed:t(),style:U,flags:z})}return l}function YS(n){let e=xr(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function KS(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*km,[d,h]=af(u,c.r),p=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):Ys.rot,f={x:d,z:h,w:c.w,d:c.d,base:$s-20,top:c.top,rot:p,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(f),f};for(let c of GS){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(VS);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function Om(n,e,t){let i=new Ht(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Dn(i,e,s),l=new an;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new si(r,3)),i.setAttribute("aInfo",new si(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var ZS=`
${ss}
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
`,JS=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function jS(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function QS(n,e,t,i){let s=xr(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,p]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...jS(d,h*d.w/2.15,p*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new zt;l.setAttribute("position",new pt(r,3)),l.setAttribute("aSeed",new ii(a,1));let c=new sn({name:"city-beacons",vertexShader:ZS,fragmentShader:JS,uniforms:ns(n,[...is,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:qn}),u=new Ra(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(ln),{points:u,count:o}}var Wu=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],ew=6,tw=`
${ss}
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
`,nw=`
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
`;function iw(){return{atlas:kt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),Wu.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Gt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function sw(n,e){let t=xr(53),i=[],s=n.filter(o=>{let a=qS(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*Wu.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[We.cx-o.x,We.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?ew:Math.floor(t()*Wu.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function rw(n,e,t){let{atlas:i,cols:s,rows:r}=iw(),o=xr(61),a=sw(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new _t(1,1),h=new sn({name:"city-signs",vertexShader:tw,fragmentShader:nw,uniforms:ns(n,[...is,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:qn,side:Jt}),p=new Dn(d,h,l);p.name="city-signs";let f=new an,x=new Fe;return a.forEach((m,g)=>{f.position.set(m.pos[0],m.pos[1],m.pos[2]),f.rotation.set(0,0,0),f.lookAt(We.cx,m.tilt?0:m.pos[1],We.cz),f.scale.set(m.w,m.w/4,1),f.updateMatrix(),p.setMatrixAt(g,f.matrix);let y=m.word;c.set([y%s/s,1-(Math.floor(y/s)+1)/r,1/s,1/r],g*4),x.set(Wu[y][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new si(c,4)),d.setAttribute("aTint",new si(u,4)),p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!1,p.layers.set(ln),{mesh:p,count:l}}var Fm={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function Um(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Gt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Gt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Gt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Gt}`,n.fillText(Fm[i.phase]||Fm.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Ot}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Gt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let p=(c-l)/a.length;a.forEach((f,x)=>{let m=(u-d)*f/h;n.fillRect(l+x*p+2,u-m,Math.max(2,p-4),m)})}function ow(n){let i=new Array(40).fill(0),s=kt(1024,Math.round(1024*40/96),(x,m,g)=>Um(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new Xt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Yt;o.name="city-billboard";let a=new tt(new _t(96,40),r);o.add(a);let l=new tt(new Ht(98,42,1.2),new Xt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new Xt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new tt(new Ht(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",p=1,f=0;return{group:o,update(x,m){f+=x,f>=1&&(f=0,i.shift(),i.push(m.tps||0)),p+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;p<1||g===h||(p=0,h=g,s.redraw((y,b,v)=>Um(y,b,v,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var aw=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,lw=`
${ss}
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
`;function $o(n,e,t,i=!1){return new sn({name:i?"city-glow-add":"city-glow",vertexShader:aw,fragmentShader:lw,defines:i?{ADDITIVE:""}:{},uniforms:ns(n,is,{uColor:{value:new Fe(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?qn:_s})}var cw=`
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
`,uw=`
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
`,dw=`
${ss}
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
`,hw=`
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
`;function Bm(n,e,t=16){return new Nn(e,n,1,t,1,!0).translate(0,.5,0)}function fw(n,e,t){let i=new Yt;i.name="compute-tower";let s=$o(n,4646655,4),r=$o(n,10480383,5),o=$o(n,5078015,4),a=$o(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(S,_,M,L)=>{let A=new tt(new fi(S,_,10,160),L);return A.rotation.x=Math.PI/2,A.position.set(e.x,M,e.z),i.add(A),A};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new tt(new Nn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let p=new Se(t.x-e.x,t.z-e.z).normalize(),f=new R(e.x+p.x*(c+2),100,e.z+p.y*(c+2)),x=new tt(new wn(4,20,14),r);x.position.copy(f),i.add(x);let m=new R().subVectors(f,t),g=m.length(),y=new pn().setFromUnitVectors(new R(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new Fe(6282495)}};for(let[S,_,M]of[[.07,2,1],[.38,8,0]]){let L=new sn({name:M?"beam-core":"beam-glow",vertexShader:cw,fragmentShader:uw,uniforms:{...b,uCore:{value:M}},transparent:!0,depthWrite:!1,blending:qn,side:Jt}),A=new tt(Bm(S,_,16),L);A.position.copy(t),A.quaternion.copy(y),A.scale.set(1,g,1),A.frustumCulled=!1,A.renderOrder=3,i.add(A)}let v=new Xt({name:"beam-receiver"});v.color.setHex(6282495).multiplyScalar(4);let w=new tt(new fi(.5,.05,8,48),v);return w.rotation.x=Math.PI/2,w.position.copy(t),i.add(w),i.traverse(S=>{S.isMesh&&S.renderOrder===0&&(S.renderOrder=5)}),{group:i,setLook(S){s.uniforms.uGain.value=4*(.35+.65*S.neon),r.uniforms.uGain.value=5*(.4+.6*S.neon),o.uniforms.uGain.value=4*(.35+.65*S.neon),a.uniforms.uColor.value.set(S.body)},update(S,_,M){b.uIntensity.value=Math.max(.08,_)*M,x.scale.setScalar(.6+_*.8),w.scale.setScalar(.8+_*.6+Math.sin(S*6)*.05*_),d.rotation.z=S*.12},glows:l}}function pw(n,e){let t=new Yt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new Fe(8378623)}};for(let[h,p]of[[5,1],[20,0]]){let f=new sn({name:p?"tether-core":"tether-glow",vertexShader:dw,fragmentShader:hw,uniforms:ns(n,is,{...r,uCore:{value:p}}),transparent:!0,depthWrite:!1,blending:qn,side:Jt}),x=new tt(Bm(1,1,14),f);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new tt(new fi(a,1.6,8,192),$o(n,4646655,3.2,!0)),c=new tt(new fi(a*.8,1.1,8,160),$o(n,5078015,3,!0)),u=new Yt,d=new Yt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function zm({quality:n="high",beamTarget:e=new R(-8,3,-.7)}={}){let t=new Yt;t.name="city";let i=Im(),s=KS(),r=s.towers.filter(L=>L.mega).map(L=>({x:L.x,z:L.z,rad:Math.max(L.w,L.d)*.75+30})),o=$S(n,r),a=YS(o),l=ns(i,[...is,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new Fe(725538)},uGlass:{value:new Fe(462106)}}),c=new sn({name:"city-towers",vertexShader:WS,fragmentShader:XS,uniforms:l}),u=Om(o.concat(a),c,"city-towers");u.layers.set(ln);let d=Om(s.towers,c,"city-megatowers"),h=QS(i,o,a,s),p=Lm(i,{quality:n}),f=Dm(i),x=Nm(i,{quality:n}),m=rw(i,o,s),g=ow(s.billboard),y=fw(i,s.compute,e),b=pw(i,s);t.add(p.mesh,f.mesh,u,d,h.points,x.mesh,m.mesh,g.group,y.group,b.group);let v=0,w=0,S=0,_=1,M=1;return{root:t,update(L,A,O={}){let U=gt(O.activity||0,0,1);v+=(U-v)*Math.min(1,L*1.5);let z=.5+1.5*v;w=(w+L*z)%Cm,S=(S+L*z)%(2*ul),i.uTime.value=A,i.uTravel.value=w,i.uAir.value=S,i.uDensity.value=(.3+.7*v)*_,y.update(A,v,M),b.update(A),g.update(L,O)},setLook(L){let A=L.city;i.uHaze.value.set(A.haze),i.uHazeHigh.value.set(A.hazeHigh),i.uHazeDensity.value=A.hazeDensity,i.uSkyRefl.value.set(A.skyRefl),i.uWindows.value=A.windows,i.uNeon.value=A.neon,i.uLights.value=A.lights,i.uBeacons.value=A.beacons,i.uTraffic.value=A.traffic,i.uSunK.value=A.sunK,i.uSunDir.value.fromArray(L.sun.dir).normalize(),i.uSunColor.value.set(L.sun.color),l.uBody.value.set(A.body),l.uGlass.value.set(A.glass),p.setLook(A),f.setLook(A),y.setLook(A),b.setLook(A),_=A.trafficScale??1,M=.45+.55*A.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var Hm=724504;function cf(n,e=1){let t=new Xt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var mw={low:0,medium:1024,high:2048,ultra:4096};function gw(n,e){let t=mw[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Xr=new R,Xu=new R,qu=new Gs;function xw(n,e,t,i=4.6){Xu.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Xu).addScaledVector(e,60),n.target.position.copy(Xu),n.updateMatrixWorld(),n.target.updateMatrixWorld(),qu.position.copy(n.position),qu.lookAt(Xu),qu.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let p of[t.z0,t.z1])Xr.set(d,h,p).applyMatrix4(qu.matrixWorldInverse),s=Math.min(s,Xr.x),r=Math.max(r,Xr.x),o=Math.min(o,Xr.y),a=Math.max(a,Xr.y),l=Math.min(l,-Xr.z),c=Math.max(c,-Xr.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function ei(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ye(new _t(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(ln),o}function Gm(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Yt;a.name="stage";let l=wm(i,s,{quality:t});a.add(l.dome);let c=Rm(n,{reflection:r});a.add(c.root);let u=zm({quality:t,beamTarget:o});a.add(u.root);let d=new Oo(16777215,3);d.name="sun",a.add(d,d.target);let h=new Wa(16777215,8947848,1);h.name="sky-light";let p=new Oo(16777215,.5);p.name="fill",a.add(h,p,p.target),gw(d,t);let f=new R;function x(m){l.setLook(m),f.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,xw(d,f,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,p.color.set(m.fill.color),p.intensity=m.fill.intensity,p.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),p.target.position.set(0,0,-1),p.updateMatrixWorld(),p.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,y){c.update(m,g,y),u.update(m,g,y)},setLook:x,dispose(){l.dispose()}}}var Vm=Math.PI/180;function Wm(n,e){let t=n*Vm,i=e*Vm;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function Xm(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var qr=["dusk","day"],yr="dusk",dn={min:.6,max:1.6,step:.05,initial:1},qm={dusk:{id:"dusk",clear:858675,sun:{dir:Wm(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:Xm([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:Wm(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:Xm([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function uf(n){return qm[n]||qm[yr]}function $m(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function dl(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function hl({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return kt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,p=d%5===0,[f,x]=u(h,p?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=p?5:2,r.beginPath(),r.moveTo(f,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Gt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[p,f]=u(h/(t.length-1),136);r.fillText(d,p,f)}),r.font=`700 34px ${Gt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Gt}`,r.fillText(e,a,a+130)})}function df(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(Dt*e)));return kt(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Ot}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function rs(n,e,t,i="#4d6bfe"){return kt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,$m(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,$m(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Ot}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",dl(s,n,r-170,46,700,Gt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",dl(s,e.toUpperCase(),r-170,24,600,Gt),s.fillText(e.toUpperCase(),152,100)})}function $u(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return kt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",dl(o,n,t-20,Math.round(i*.42),700,Gt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",dl(o,e,t-20,Math.round(i*.26),600,Gt),o.fillText(e,12,i*.76))})}function Yu(n,e,{bg:t="#05070a",glow:i=0}={}){let s=kt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Ot:Gt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;dl(a,c.text,n-32,u,c.weight||600,c.mono?Ot:Gt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function Ym(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=kt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Ot}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function Km(){return kt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Gt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function Zm(){return kt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Gt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var hn=new R(-8,0,-.7),$r=.41,Jm=1.9,hf=1.86;function yw(){return kt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function jm(n){let e=Rt("fuel"),t=Rt("tank",[hn.x,0,hn.z]);t.userData.solid="tank",e.add(t),e.add(ei(n,2.6,2.6,[hn.x,0,hn.z],.6));let i=new ht;i.add("graphite",P(Le(1.8,.28,1.8,.05),[0,.2,0]));for(let[U,z]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",P(le(.07,.08,.06,20),[U,.03,z]));for(let U of[.375,2.345])i.add("steel",P(le(.83,.83,.07,72),[0,U,0])),i.add("chrome",Xo(18,.775,U+(U<1?.04:-.04),.017,.016)),i.add("rubber",P(le(.712,.712,.03,64),[0,U+(U<1?.05:-.05),0]));i.add("alu",Ti([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let U=0;U<6;U++){let z=U/6*Dt+.26,C=Math.cos(z)*.79,Z=Math.sin(z)*.79;i.add("chrome",P(le(.016,.016,2.04,12),[C,1.36,Z]));for(let Q of[.33,2.4])i.add("steel",P(le(.03,.03,.03,6),[C,Q,Z]))}i.add("steel",P(le(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",P(le(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",P(Le(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",P(le(.07,.08,.05,24),[0,2.695,0])),i.add("steel",P(le(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",P(le(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",P(Le(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ye(le(.7,.7,Jm,72,!0),n.glass,[0,$r+Jm/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ye(le(.685,.685,1,72),n.fuel,[0,$r+.5,0],null,null,{cast:!1}),o=Ye(new Sn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ye(rn(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Dn(new wn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(U,z)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Dt,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Dt+z}));t.add(c);let d=Ye(new _t(.085,hf),kn(Km().tex,.1),[0,$r+.02+hf/2,.892],null,null,{cast:!1}),h=Ye(new xs(.02,.05,3),qt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let p=qt(4054148,2.5),f=Ye(new wn(.07,24,12,0,Dt,0,Math.PI/2),p,[0,2.72,0],null,null,{cast:!1});t.add(f);let x=Rt("fuel-hmi",[hn.x+.95,0,hn.z+1.3],[0,-.35,0]);x.userData.solid="fuel-hmi";let m=new ht;m.add("graphite",P(Le(.36,.04,.3,.015),[0,.02,0])),m.add("alu",P(le(.035,.035,.95,16),[0,.5,0])),m.add("graphite",P(Le(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Yu(640,384,{bg:"#04070c"}),y=Ye(new _t(.66,.396),al(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(y),e.add(x),e.add(ei(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new ht,v=(U,z)=>new R(U,z,hn.z);b.add("steel",Qn([v(-6.92,.375),v(-6.05,.375),v(-6.05,.92)],.05,.16)),b.add("steel",Qn([v(-6.05,1.38),v(-6.05,2.3),v(-4.75,2.3),v(-4.75,2.1)],.05,.18)),b.add("steel",P(le(.1,.1,.025,24),[-6.93,.375,hn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(U=>P(le(.012,.012,.09,6),[-6.925,.375+Math.cos(U)*.075,hn.z+Math.sin(U)*.075],[0,0,Math.PI/2]))),b.add("blue",P(le(.085,.085,.18,24),[-6.6,.375,hn.z],[0,0,Math.PI/2])),b.add("chrome",P(le(.022,.022,.26,12),[-6.6,.52,hn.z])),b.add("steel",P(le(.045,.05,.1,16),[-6.6,.47,hn.z])),b.add("orange",P(rn(.11,.012,8,40),[-6.6,.64,hn.z],[Math.PI/2,0,0]));for(let U=0;U<3;U++)b.add("orange",P(new Ht(.21,.014,.014),[-6.6,.64,hn.z],[0,U/3*Math.PI,0]));for(let U of[.945,1.355])b.add("alu",P(le(.085,.085,.05,32),[-6.05,U,hn.z]));b.add("chrome",...[0,1,2,3].map(U=>P(le(.008,.008,.41,6),[-6.05+Math.cos(U*1.5708+.78)*.078,1.15,hn.z+Math.sin(U*1.5708+.78)*.078])));for(let U of[-6.8,-6.25])b.add("graphite",P(Le(.12,.33,.16,.015),[U,.165,hn.z]));b.add("steel",P(Le(.22,.09,.22,.02),[-4.75,2.1,hn.z])),b.add("chrome",Xo(4,.12,2.15,.012,.012,.78).map(U=>U.translate(-4.75,0,hn.z))),e.add(b.build(n,{name:"feed"}));let w=Ye(le(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,hn.z],null,null,{cast:!1,receive:!1}),S=yw().tex,_=new vt({color:330264,emissive:16777215,emissiveMap:S,emissiveIntensity:1.8,roughness:.3}),M=Ye(le(.034,.034,.36,24,!0),_,[-6.05,1.15,hn.z],null,null,{cast:!1});e.add(w,M);let L=.5,A="",O=new an;return{root:e,anchors:{tank:new R(hn.x,2.9,hn.z),hmi:new R(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:y}],setReadout(U){let z=JSON.stringify(U);z!==A&&(A=z,g.set(U))},update(U,z,C){L=Kt(L,gt(C.level,.02,1),2.5,U);let Z=L*hf;r.scale.y=Z,r.position.y=$r+.012+Z/2,o.position.y=a.position.y=$r+.012+Z+.001,h.position.y=$r+.02+Z;let Q=gt(C.flow,0,1);for(let Y=0;Y<l;Y++){let G=u[Y];G.y+=U*(.05+Q*.32)*G.v/Math.max(.25,Z),G.y>1&&(G.y=0,G.a=Math.random()*Dt,G.r=Math.sqrt(Math.random())*.6);let H=Math.sin(z*3+G.w)*.01;O.position.set(Math.cos(G.a)*G.r+H,$r+.03+G.y*Math.max(0,Z-.04),Math.sin(G.a)*G.r),O.scale.setScalar(G.s*(.3+.7*Math.min(1,(Z-G.y*Z)*10+.3))),O.updateMatrix(),c.setMatrixAt(Y,O.matrix)}c.instanceMatrix.needsUpdate=!0,S.offset.y-=U*(.15+Q*2.6),_.emissiveIntensity=.5+Q*2.2,p.emissive.setHex(C.peak?16753978:4054148),p.emissiveIntensity=1.6+Math.sin(z*2.2)*.6}}}var Ku=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],oi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},Zt={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},Yo=new Set(["engraver","labeler"]),vw=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function eg(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of vw)if(i.test(e))return t;return"generic"}function tg(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function pf(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function fl(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function pl(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=pl(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function ng(n,e){let t=tg(e),i=pl(t,["file_path","path","filePath","files"]);if(i)return fl(pf(i)||i);let s=pl(t,["command","cmd","script","code"]);if(s)return fl(s.split(`
`).find(a=>a.trim())||s);let r=pl(t,["url"]);if(r)try{return fl(new URL(r).host||r)}catch{return fl(r)}let o=pl(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?fl(o):""}function ff(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function Qm(n,e){let t=ff(n),i=ff(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function ig(n,e){let t=String(n||"").toLowerCase(),i=tg(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:ff(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=Qm(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=Qm(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var vr=new R(-4,0,-.7),Ko=new R(-2.08,0,1.54),sg=1.45;function rg(n,e,t,i,s,r=.02,o=0){let a=new Ji,l=(u,d,h,p,f,x)=>{u.moveTo(d+x,h),u.lineTo(d+p-x,h),u.quadraticCurveTo(d+p,h,d+p,h+x),u.lineTo(d+p,h+f-x),u.quadraticCurveTo(d+p,h+f,d+p-x,h+f),u.lineTo(d+x,h+f),u.quadraticCurveTo(d,h+f,d,h+f-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new zs;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new ys(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function og(n,e,{x:t,y:i,r:s,face:r}){let o=new ht;o.add("chrome",P(rn(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",P(le(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new vt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ye(new Sn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=Rt("needle",[t,i,.02]),c=new ht;return c.add("orange",new Ht(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new Ht(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",le(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ye(new Sn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function ag(n){let e=Rt("engine"),t=Rt("engine-body",[vr.x,0,vr.z]);t.userData.solid="engine",e.add(t),e.add(ei(n,4.8,2.7,[vr.x+.35,0,vr.z],.62));let i=new ht;i.add("graphite",P(Le(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",P(Le(3.94,.04,1.94,.015),[.35,.44,0]));for(let ce of[-1.45,2.15])for(let Ae of[-.8,.8])i.add("rubber",P(le(.08,.09,.06,20),[ce,.03,Ae]));for(let ce of[-.72,.62])i.add("graphite",P(Le(.22,.56,1,.03),[ce,.72,0])),i.add("steel",P(Le(.26,.04,1.04,.01),[ce,.47,0])),i.add("chrome",...[-.4,.4].map(Ae=>P(le(.02,.02,.03,6),[ce,.5,Ae])));i.add("graphite",P(Le(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let ce of[1.435,2.165])i.add("graphite",P(Le(.07,1.62,.82,.02),[ce,1.24,-.1]));for(let ce of[.46,2.02])i.add("graphite",P(Le(.78,.06,.82,.02),[1.8,ce,-.1]));i.add("aluDark",rg(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",P(new _t(.5,.18),[1.8,.6,.335])),i.add("chrome",P(le(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",P(le(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",P(le(.05,.065,.12,20),[.8,2.12,0]));for(let ce=0;ce<4;ce++)i.add("chrome",P(rn(.034,.007,8,24),[.8,2.2+ce*.03,0],[Math.PI/2,0,0]));i.add("orange",P(le(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",P(le(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",P(le(.05,.056,.03,20),[2,2.73,-.36]));for(let ce of[.12,.28])i.add("rubber",Qn([[ce,.95,.42],[ce,.62,.86],[ce,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=Rt("turbine",[0,sg,0],[0,0,-Math.PI/2]);t.add(s);let r=new ht;r.add("alu",Ti([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",P(le(.6,.6,.56,64),[0,-.72,0]));for(let ce=0;ce<9;ce++)r.add("alu",P(le(.665,.665,.022,64),[0,-.97+ce*.06,0]));r.add("steel",P(le(.69,.69,.05,72),[0,-.445,0])),r.add("steel",P(le(.69,.69,.05,72),[0,.405,0])),r.add("chrome",Xo(20,.66,-.413,.016,.014)),r.add("chrome",Xo(20,.66,.373,.016,.014,.157)),r.add("alu",P(le(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",Ti([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",P(le(.06,.06,.26,24),[0,1.33,0])),r.add("grille",P(le(.6,.6,.012,64),[0,-1.2,0]));for(let ce of[.22,.37,.52])r.add("chrome",P(rn(ce,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let ce=0;ce<6;ce++)r.add("chrome",P(new Ht(1.18,.012,.028),[0,-1.205,0],[0,ce/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=Rt("rotor"),a=new ht;a.add("darkSteel",P(le(.24,.24,.8,48),[0,-.02,0]));for(let[ce,Ae,F,re]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let he=0;he<ce;he++){let D=Le(.32,re,.014,.004,1);D.rotateX(F),D.translate(.41,Ae,0),D.rotateY(he/ce*Dt),a.add("chrome",D)}a.add("chrome",Ti([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=qt(5078015,1),c=[-.33,-.02,.29].map(ce=>P(le(.247,.247,.026,48,!0),[0,ce,0])),u=new ht().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ye(le(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=rs(Zt.engine.zh,Zt.engine.en,Zt.engine.code);t.add(Ye(new _t(.5,.14),kn(h.tex,.35),[.76,sg+.05,.628],null,null,{cast:!1}));let p=Ye(Kh(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),f=Ye(Kh(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*Ui,m=-4*Ui;t.add(p,f),t.add(Ye(new _t(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let y=[16726832,16753183,3461498,5078015].map((ce,Ae)=>{let F=qt(ce,.15);return t.add(Ye(le(.055,.055,.085,24),F,[2,2.66-Ae*.09,-.36],null,null,{cast:!1})),F}),b=Rt("console",[-.35,0,1.22]);t.add(b);let v=new ht;v.add("graphite",P(Le(2.2,.82,.46,.03),[0,.41,0])),v.add("rubber",P(Le(2.16,.06,.4,.02),[0,.03,.01])),b.add(v.build(n,{name:"console"}));let w=rs(Zt.console.zh,Zt.console.en,Zt.console.code);b.add(Ye(new _t(.72,.2),kn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let S=Rt("panel",[0,.98,.02],[-.62,0,0]);b.add(S);let _=new ht;_.add("aluDark",P(Le(2.24,.62,.06,.02),[0,0,-.03])),_.add("graphite",rg(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),S.add(_.build(n,{name:"panel"}));let M=og(n,S,{x:-.74,y:0,r:.205,face:hl({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),L=og(n,S,{x:.86,y:.08,r:.13,face:hl({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),A=.028,O=.04,U=le(A,A,O,24).rotateZ(-Math.PI/2),z=df(O,A),C=df(O,A,{inverted:!0}),Z=ce=>new vt({map:ce.tex,emissive:16777215,emissiveMap:ce.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),Q=[.19,.095,0,-.095,-.19],Y=[],G=new Dn(U,Z(z),36),H=new Dn(U,Z(C),2);G.castShadow=H.castShadow=!1;let K=0;for(let ce=0;ce<4;ce++)for(let Ae=0;Ae<8;Ae++)Y.push({inst:G,index:K++,x:.16+.163-Ae*.044,y:Q[ce],row:ce,power:Ae});for(let ce=0;ce<6;ce++){let Ae=ce<2;Y.push({inst:Ae?H:G,index:Ae?ce:K++,x:.16+.163-ce*.044-(Ae?0:.03),y:Q[4],row:4,power:ce})}S.add(G,H),S.add(Ye(new Sn(.006,12),qt(15855592,.6),[.16+.163-2*.044+.022-.015,Q[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([ce,Ae],F)=>{let re=$u(ce,Ae,{w:256,h:80}).tex;S.add(Ye(new _t(.2,.0625),kn(re,.2),[.16-.29,Q[F],.012],null,null,{cast:!1}))}),S.add(Ye(new _t(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let ae=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([ce,Ae],F)=>{let re=.66+F*.13,he=new ht().add("chrome",P(le(.032,.032,.014,24),[re,-.17,.007],[Math.PI/2,0,0]));S.add(he.build(n,{name:"lamp",castShadow:!1}));let D=qt(Ae,.15);S.add(Ye(new wn(.024,20,10,0,Dt,0,Math.PI/2),D,[re,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Ke=$u(ce,"",{w:128,h:48}).tex;return S.add(Ye(new _t(.1,.0375),kn(Ke,.2),[re,-.235,.004],null,null,{cast:!1})),D}),J=[];for(let ce=0;ce<24;ce++){let Ae=new gs({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),F=new Us(Ae);F.visible=!1,t.add(F),J.push({sp:F,mat:Ae,life:0,vx:0,vz:0})}let de=0,xe=Rt("dispenser",[Ko.x,0,Ko.z]);xe.userData.solid="dispenser",e.add(xe);let ee=new ht;ee.add("white",P(Le(.5,1.2,.56,.03),[0,.6,0])),ee.add("plastic",P(Te(.02,.05,.36),[.252,.922,0])),ee.add("aluDark",P(Le(.54,.05,.6,.015),[0,1.225,0])),ee.add("grille",P(new _t(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),xe.add(ee.build(n,{name:"dispenser"}));let ye=$u(Zt.dispenser.zh,`${Zt.dispenser.en} · ${Zt.dispenser.code}`.toUpperCase(),{w:256,h:80});xe.add(Ye(new _t(.34,.106),kn(ye.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let De=qt(5078015,.3);xe.add(Ye(new Ht(.012,.012,.3),De,[.256,.97,0],null,null,{cast:!1})),e.add(ei(n,.9,.9,[Ko.x,0,Ko.z],.5));let dt=new ht().add("rubber",Qn([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(dt.build(n,{name:"conduit"}));let Be=new Xt({visible:!1}),je=(ce,Ae,F,re)=>{let he=new tt(new Ht(Ae[0],Ae[1],Ae[2]),Be);return he.position.set(F[0],F[1],F[2]),he.userData.hoverId=ce,re.add(he),{id:ce,object:he}},ue={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},se=new Mt,k=new Float32Array(8),V=new Fe,ie={reasoning:new Fe(10185727),generating:new Fe(4160511),tool:new Fe(16753183),idle:new Fe(2838456)};function j(ce,Ae,F){let re=Math.max(0,Ae);for(let he=0;he<F;he++){let D=Math.pow(10,he),Ke=Math.floor(re/D)%10,at=re%D,yt=0;he===0?yt=re-Math.floor(re):at>D-1&&(yt=at-(D-1)),k[he]=-((Ke+yt+.5)/10)*Dt}for(let he of Y)he.row===ce&&(se.makeRotationX(k[he.power]),se.setPosition(he.x,he.y,.03),he.inst.setMatrixAt(he.index,se))}return{root:e,anchors:{engine:new R(vr.x,2.5,vr.z),console:new R(vr.x-.35,1.45,vr.z+1.22),dispenser:new R(Ko.x,1.45,Ko.z)},hover:[je("engine",[3.2,1.7,1.5],[.2,1.45,0],t),je("console",[2.3,1.35,.8],[-.35,.68,1.22],t),je("dispenser",[.6,1.3,.62],[0,.65,0],xe)],pulseDispenser(){ue.dispPulse=1},update(ce,Ae,F){let re=F.phase,he=re==="generating"||re==="reasoning",D=.35+gt(F.tps,0,140)*.16+(re==="thinking"?.8:0);ue.rotorSpeed=Kt(ue.rotorSpeed,D,1.4,ce),ue.rotorAngle+=ue.rotorSpeed*ce,o.rotation.y=ue.rotorAngle,p.rotation.z=x+ue.rotorAngle*.45,f.rotation.z=m-ue.rotorAngle*.9;let Ke=ie[re]||ie.idle;V.copy(l.emissive).lerp(Ke,1-Math.exp(-4*ce)),l.emissive.copy(V);let at=.85+.15*Math.sin(Ae*9),yt=he?(2.4+gt(F.tps,0,120)/30)*at:re==="tool"?.9:re==="thinking"?1.3:.45;l.emissiveIntensity=Kt(l.emissiveIntensity,yt,5,ce),ue.ctx=Kt(ue.ctx,gt(F.ctx,0,1),2.5,ce);let Pe=he?Math.sin(Ae*41)*.006:0;M.rotation.z=(135-270*ue.ctx)*Ui+Pe,ue.tach=Kt(ue.tach,gt(F.tps/120,0,1),3,ce),L.rotation.z=(135-270*ue.tach)*Ui+Pe*2;let Me=[F.counters.miss,F.counters.hit,F.counters.output,F.counters.reasoning,F.counters.cost*100];for(let $=0;$<5;$++){let we=Me[$]||0,me=ue.disp[$];we<me||we-me<.02?me=we:me=Kt(me,we,3.2,ce),ue.disp[$]=me,j($,me,$===4?6:8)}G.instanceMatrix.needsUpdate=!0,H.instanceMatrix.needsUpdate=!0;let ve=[re==="reasoning"||re==="thinking",re==="generating",re==="tool",re==="idle"];ae.forEach(($,we)=>{$.emissiveIntensity=Kt($.emissiveIntensity,ve[we]?3.2:.12,10,ce)}),ue.err=Math.max(0,ue.err-ce*.5),F.errorPulse&&(ue.err=1);let ze=Math.sin(Ae*12)>0?1:.2,I=[ue.err>0?3.5*ze:.1,re==="tool"?3:.1,he||re==="thinking"?3:.6,re==="reasoning"?3:.1];y.forEach(($,we)=>{$.emissiveIntensity=Kt($.emissiveIntensity,I[we],12,ce)}),ue.dispPulse=Math.max(0,ue.dispPulse-ce*2.5),De.emissiveIntensity=.3+ue.dispPulse*4;let E=gt((ue.ctx-.78)/.22,0,1);de+=ce*E*18;for(let $ of J)if($.life<=0&&de>=1&&(de-=1,$.life=1,$.vx=(Math.random()-.5)*.15,$.vz=(Math.random()-.5)*.15,$.sp.position.set(.8,2.36,0),$.sp.visible=!0),$.life>0){$.life-=ce/1.7;let we=1-$.life;$.sp.position.x+=$.vx*ce,$.sp.position.z+=$.vz*ce,$.sp.position.y+=ce*(.55-we*.25),$.sp.scale.setScalar(.08+we*.55),$.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,we*1.2))*.32),$.life<=0&&($.sp.visible=!1)}de>4&&(de=4)}}}var as=new R(2.6,0,-1),Jo=3.1,ls=2.35,Zr=.75,Mn=.922,ml=.012,Yr=1,Zo=1,lg=.4,Kr=235*Ui,jo=305*Ui,os=1.54;function Gi(n,e,t=0,i=new R){return i.set(as.x+e*Math.cos(n),t,as.z-e*Math.sin(n))}var pg=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Zu(n){let e=Rt("pedestal"),t=new ht;t.add("graphite",P(le(.15,.17,.04,40),[0,.02,0])),t.add("alu",P(le(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",P(le(.12,.1,.03,48),[0,.835,0])),t.add("chrome",P(rn(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Dt+.3;t.add("ceramic",P(le(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=qt(5078015,.25);return e.add(Ye(rn(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var Bn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},cg={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},ug={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function mg(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function _w(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=mg(n,o,a),u=Math.PI/2-l,d=new Ji;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new ys(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function dg(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=mg(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return P(Te(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function bw(){let n=new Ji,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new ys(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,Bn.forkY+.002,0),t}function Mw(){let n=kt(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new vt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function Sw(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function ww(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function Ew(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Tw(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),Ew(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Gt}`,n.fillStyle="#86a7c9",n.fillText(`${Zt.robot.code} · ${Zt.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${Ot}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Gt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${Ot}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${Ot}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Dt),n.fill(),n.font=`600 23px ${Gt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function Aw(n){let e=Rt("robot",[as.x,0,as.z]),t=qt(4641535,2.2),i=qt(4641535,1.8),s=qt(5078015,1.4),r={...n,carbon:Mw(),led:t},o=new ht;o.add("white",Ti([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",P(le(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",P(le(1.15,1.15,Bn.deckY-.4,112),[0,(.4+Bn.deckY)/2,0])),o.add("plastic",P(le(.62,.62,.006,72),[0,Bn.deckY+.003,0])),o.add("chrome",P(rn(.62,.005,8,112),[0,Bn.deckY+.003,0],[Math.PI/2,0,0]));for(let H=0;H<12;H++){let K=H/12*Dt+.13;o.add("chrome",P(le(.016,.016,.006,10),[Math.cos(K)*.92,Bn.deckY+.003,Math.sin(K)*.92]))}let a=Bn.drumTop-Bn.deckY;o.add("white",P(le(.34,.37,a,72),[0,Bn.deckY+a/2,0])),o.add("chrome",P(rn(.342,.006,8,72),[0,Bn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",Qn([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new ht;l.add("led",P(rn(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",P(le(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(Ye(rn(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=kt(1024,48,ww,{anisotropy:8}),u=new Xt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=Ye(le(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=qs({color:726566,opacity:.4,fresnel:.55}),p=Ye(le(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});p.renderOrder=2,e.add(d,p);let f=kt(512,176,null,{anisotropy:8}),x=new Xt({map:f.tex,transparent:!0,depthWrite:!1,side:Jt,name:"robot-holo"});x.color.setScalar(1.25);let m=Ye(new _t(.56,.1925),x,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let g=Rt("arm");e.add(g),g.add(new ht().add("steel",P(le(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let y=kt(512,64,Sw,{anisotropy:8,repeat:[1,1]}),b=H=>new vt({map:H,emissiveMap:H,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),v=y.tex,w=y.tex.clone();function S(H,K,N,X){let ae=Rt(H),J=K.y+K.h,de=new ht;de.add("white",_w(N,K.r1,K.r2,K.y,K.h,K.bevel)),de.add("chrome",P(Le(.66,.004,K.r2*.95,.002),[.5,J+.0015,0]));for(let ye of[-1,1])de.add("graphite",dg(.66,.026,.004,N/2,K.y+K.h/2,K,N,ye,5e-4));X(de,J),ae.add(de.build(r,{name:H}));let xe=new _t(.62,K.r2*.95-.022);xe.rotateX(-Math.PI/2),ae.add(Ye(xe,b(K===Bn.link1?v:w),[.5,J+.004,0],null,null,{cast:!1}));let ee=new ht;for(let ye of[-1,1])ee.add("led",dg(.6,.009,.005,N/2,K.y+K.h/2,K,N,ye,.0022));return ae.add(ee.build({led:i},{name:`${H}-strips`,castShadow:!1})),ae}let _=Bn.link1,M=S("link1",_,Yr,(H,K)=>{H.add("alu",P(le(.118,.124,.012,56),[0,K+.006,0])),H.add("chrome",P(le(.034,.034,.008,24),[0,K+.016,0])),H.add("alu",P(le(.1,.104,.012,56),[Yr,K+.006,0])),H.add("graphite",P(le(.11,.11,.01,48),[Yr,_.y-.005,0])),H.add("led",P(rn(.127,.0045,6,72),[0,K+.003,0],[Math.PI/2,0,0])),H.add("led",P(rn(.107,.004,6,64),[Yr,K+.003,0],[Math.PI/2,0,0]))});g.add(M);let L=Bn.link2,A=S("link2",L,Zo,(H,K)=>{H.add("alu",P(le(.086,.09,.01,48),[0,K+.005,0])),H.add("chrome",P(le(.028,.028,.007,20),[0,K+.0135,0])),H.add("white",P(le(.07,.078,Bn.forkY-.01-K,48),[Zo,(K+Bn.forkY-.01)/2,0])),H.add("led",P(rn(.093,.0035,6,56),[0,K+.003,0],[Math.PI/2,0,0])),H.add("led",P(rn(.079,.0035,6,56),[Zo,K+.012,0],[Math.PI/2,0,0]))});A.position.x=Yr,M.add(A);let O=Rt("fork",[Zo,0,0]);A.add(O);let U=new ht;U.add("alu",P(le(.064,.064,.01,48),[0,Bn.forkY-.005,0])),U.add("carbon",bw()),U.add("graphite",P(Le(.06,.016,.07,.005),[.07,Bn.forkY+.02,0]));for(let H of[.31,.5])for(let K of[-.075,.075])U.add("rubber",P(le(.011,.011,.002,14),[H,Bn.forkY+.013,K]));O.add(U.build(r,{name:"fork",castShadow:!0}));let z=qt(4641535,.8);O.add(Ye(Te(.004,.006,.044),z,[.1015,Bn.forkY+.02,0],null,null,{cast:!1}));let C={yaw:270*Ui,reach:Zr,lift:0},Z=new R;function Q(){let H=gt(C.reach-lg,.02,Yr+Zo-1e-4),K=Math.acos(H/(Yr+Zo));M.rotation.y=C.yaw+K,A.rotation.y=-2*K,O.rotation.y=K,g.position.y=C.lift,d.rotation.y=M.rotation.y,v.offset.x=-2*K*.08,w.offset.x=K*.065}Q();let Y="";function G(H="idle",K=null,N=null,X=null){let ae=`${H}|${K}|${N}|${X}`;if(ae===Y)return;Y=ae;let J=cg[H]||cg.idle,de=X?ug[X]||ug.normal:null,xe=de&&de.color?de.color:J.color;i.color.setHex(xe).multiplyScalar(.25),i.emissive.setHex(xe),f.redraw((ee,ye,De)=>Tw(ee,ye,De,{st:J,carry:de,from:K,to:N}))}return G(),{root:e,pose:C,setPose(H,K,N){C.yaw=H,C.reach=K,C.lift=N,Q()},carryPoint(H=Z){return e.updateMatrixWorld(!0),H.set(lg,0,0),O.localToWorld(H),H.y=.921+C.lift,H},setBusy(H){z.emissiveIntensity=H?3:.8,s.emissiveIntensity=H?2.4:1.4,i.emissiveIntensity=H?2.6:1.8},setStatus:G,parts:{arm:g,link1:M,link2:A,fork:O},hover:{id:"robot",object:e}}}function hg(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Rt(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new ht;l.add("white",P(Le(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",P(Le(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",P(Le(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",P(Te(.04,.3,.04),[m,1,g]));l.add("aluDark",P(Te(.84,.03,.04),[0,1.15,.4]),P(Te(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",P(Te(.04,.03,.84),[.4,1.15,0]),P(Te(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",P(le(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*Dt;l.add("ceramic",P(le(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",P(Te(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",P(Te(.5,.2,.05),[o,.95,-.42])),l.add("steel",P(le(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",P(le(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[P(new _t(.76,.27),[0,1,.4]),P(new _t(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),P(new _t(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new ht().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ye(Le(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ye(Le(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let p=rs(i,s,r);a.add(Ye(new _t(.56,.158),kn(p.tex,.35),[0,.62,.402],null,null,{cast:!1}));let f=qt(3461498,.6);a.add(Ye(Te(.6,.016,.01),f,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:f,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function fg(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",P(Le(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",P(Te(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Te(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),p=t.x+r*h,f=t.z+o*h;e.add("aluDark",P(Te(.05,.84,.05),[p,.43,f],[0,l,0])),e.add("graphite",P(Te(.16,.02,.16),[p,.01,f],[0,l,0]))}return{len:a,yaw:l,mid:c}}function gg(n){let e=Rt("cell"),t=Aw(n);e.add(t.root),e.add(ei(n,2.9,2.9,[as.x,0,as.z],.6));let i=Gi(Kr,Jo),s=Gi(jo,Jo),r=hg(n,{center:i,side:-1,...Zt.lock,hubDoorX:.18}),o=hg(n,{center:s,side:1,...Zt.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(ei(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(ei(n,1.3,1.3,[s.x,0,s.z],.5));let a=Gi(Kr,ls,Mn),l=Gi(jo,ls,Mn),c=Zu(n);c.root.position.set(a.x,0,a.z);let u=Zu(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new ht,h=new R(-1.83,0,os),p=new R(i.x-.42,0,os),f=new R(s.x+.42,0,os),x=new R(7.18,0,os);fg(n,d,h,p),fg(n,d,f,x);let m=(w,S)=>{let _=S.x-w.x,M=S.z-w.z,L=Math.hypot(_,M);d.add("aluDark",P(Le(L,.02,.2,.006),[(w.x+S.x)/2,.892,(w.z+S.z)/2],[0,Math.atan2(-M,_),0]))};m(new R(i.x+.18,0,i.z-.44),new R(a.x-.06,0,a.z+.1)),m(new R(s.x-.18,0,s.z-.44),new R(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=qt(5078015,1.2),y=[];for(let[w,S]of[[h,p],[f,x]]){let _=S.x-w.x;y.push(P(Te(_,.008,.008),[(w.x+S.x)/2,.858,os+.185]))}e.add(new ht().add("led",y).build({led:g},{name:"track-led",castShadow:!1})),e.add(ei(n,p.x-h.x+.4,.7,[(h.x+p.x)/2,0,os],.4)),e.add(ei(n,x.x-f.x+.4,.7,[(f.x+x.x)/2,0,os],.4));let b=new Xt({visible:!1}),v=(w,S)=>{let _=new tt(new Ht(.9,1.25,.9),b);return _.position.set(S.x,.62,S.z),_.userData.hoverId=w,e.add(_),{id:w,object:_}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new R(-1.95,Mn,os),lockCenter:new R(i.x,Mn,i.z),lockPort:a,outPort:l,outCenter:new R(s.x,Mn,s.z),trackEnd:new R(x.x-.08,Mn,os)},trackLed:g,hover:[{id:"robot",object:t.root},v("lock",i),v("unload",s)],anchors:{robot:new R(as.x,1.4,as.z),lock:new R(i.x,1.45,i.z),unload:new R(s.x,1.45,s.z)}}}var xf=n=>(200-n*24.4)*Ui,$t=Jo-ls,ft=.89,Rw={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},Cw={archive:[.46,.17],press:[-.44,.17]},gl=(n,e=.6)=>new Xt({color:n,transparent:!0,opacity:e,blending:qn,depthWrite:!1});function Pw(n,e,t,i=8){let s=new R(n[0],n[1],n[2]),r=new R(e[0],e[1],e[2]),o=le(t,t,s.distanceTo(r),i);return o.applyQuaternion(new pn().setFromUnitVectors(new R(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function yf(n,e=1.36){n.add("aluDark",P(Te(.06,e,.07),[.4,e/2,$t])),n.add("graphite",P(Te(.16,.03,.16),[.4,.015,$t])),n.add("aluDark",P(Te(.48,.06,.08),[.16,e,$t])),n.add("chrome",P(Te(.4,.01,.01),[.17,e-.035,$t+.03]))}function Iw(){return kt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Ot}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function Lw(){return kt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function Dw(n,e,t){t.add("graphite",P(Le(.88,.8,.42,.02),[0,ft+.4,-.33])),t.add("aluDark",P(Le(.9,.03,.44,.01),[0,ft+.815,-.33]));let i=Iw().tex,s=new Dn(Le(.26,.17,.3,.008),new vt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:ft+.13+x*.19,out:0,until:0});t.add("aluDark",P(Te(.06,.46,.06),[0,ft+.23,.16])),t.add("aluDark",P(Te(.07,.06,.88),[0,ft+.46,.56]));let o=Rt("scan-head",[0,ft+.4,$t]);e.add(o),o.add(new ht().add("graphite",P(Le(.38,.07,.09,.012),[0,-.035,0])).add("chrome",P(Te(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=qt(7314431,.6);o.add(Ye(Te(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=ft+.4-.075-(Mn+.004),c=gl(6130687,0),u=Ye(new _t(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=gl(10469631,0),h=Ye(Te(.3,.001,.008),d,[0,Mn+.006-(ft+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let p=new Mt,f=0;return{update(x,m,g){let y=g.work;if(o.position.z=$t+Math.sin(m*2.6)*.17*y,c.opacity=.16*y,d.opacity=.9*y,a.emissiveIntensity=.6+3*y,g.working&&m>f){f=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let v=r[b];v.out=Kt(v.out,m<v.until?.16:0,9,x),p.makeTranslation(v.x,v.y,-.12-.15+.015+v.out),s.setMatrixAt(b,p)}s.instanceMatrix.needsUpdate=!0}}}function Nw(n,e,t,i){t.add("graphite",P(Le(.8,.34,.44,.02),[0,ft+.17,-.32]));for(let f=0;f<9;f++)t.add("alu",P(Te(.012,.1,.38),[-.32+f*.08,ft+.39,-.32]));t.add("rubber",Qn([[.3,ft+.2,-.09],[.3,ft+.32,.12],[.37,1.5,$t-.08]],.018,.12,8));for(let f of[-.37,.37])t.add("aluDark",P(Te(.07,1.44,.09),[f,.72,$t])),t.add("graphite",P(Te(.16,.03,.18),[f,.015,$t]));t.add("aluDark",P(Te(.84,.09,.11),[0,1.44,$t])),t.add("chrome",P(Te(.76,.016,.016),[0,1.44,$t+.062])),t.add("hazard",P(Te(.84,.02,.112),[0,1.494,$t]));let s=new Hs({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:Jt,depthWrite:!1});for(let f of[-.335,.335])e.add(Ye(new _t(.5,.42),s,[f,1.17,$t],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Rt("laser-head",[0,1.44,$t]);e.add(r);let o=new ht;o.add("chrome",P(Le(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",P(Le(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",P(le(.026,.02,.07,20),[0,-.24,0])),o.add("orange",P(Te(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(Mn+.004),c=gl(12101375,0),u=Ye(le(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new Us(new gs({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:qn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,Mn+.008-1.44,0),r.add(d);let h=new R,p=0;return{update(f,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=$t+Math.sin(x*3.1+1)*.06*g;let y=m.working&&m.wafer?1:0;if(c.opacity=Kt(c.opacity,y*(.75+.25*Math.sin(x*60)),20,f),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,y)for(p+=f*40,d.getWorldPosition(h);p>1;)p-=1,i.sparks(h,1)}}}function Ow(n,e,t){t.add("ceramic",P(Le(.52,.42,.36,.03),[-.12,ft+.27,-.34])),t.add("ceramic",P(Le(.4,.32,.18,.04),[-.12,ft+.27,-.5])),t.add("graphite",P(Le(.3,.06,.24,.01),[-.12,ft+.03,-.34])),t.add("graphite",P(Le(.48,.36,.01,.02),[-.12,ft+.27,-.158]));let i=Ym();e.add(Ye(new _t(.4,.3),al(i.tex,1.5),[-.12,ft+.27,-.151],null,null,{cast:!1})),t.add("plastic",P(Le(.46,.03,.16,.008),[-.1,ft+.015,.1])),e.add(Ye(new _t(.44,.14),kn(Lw().tex,.1),[-.1,ft+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),yf(t),t.add("steel",P(le(.04,.04,.14,20),[0,1.26,$t]));let s=Rt("probe",[0,1.1,$t]);e.add(s),s.add(new ht().add("chrome",P(le(.015,.015,.3,12),[0,.15,0])).add("graphite",P(le(.13,.13,.018,48),[0,.009,0])).add("gold",P(le(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=qt(4063119,.2);s.add(Ye(rn(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=Kt(s.position.y,c.working&&c.wafer?Mn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function Fw(n,e,t){t.add("graphite",P(le(.13,.15,.08,40),[0,ft+.04,-.3]));let i=Rt("pan",[0,ft+.08,-.3]);e.add(i);let s=new ht;s.add("white",P(le(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",P(Te(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",P(Te(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Rt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=Jt;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new ht;l.add("dish",Ti(a,64)),l.add("chrome",P(rn(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",P(le(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*Dt+Math.PI/6;l.add("aluDark",Pw([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",P(new xs(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",P(le(.03,.03,.05,18),[0,.37,0]));let c=Rt("dish",[0,.07,0]);r.add(c),r.add(new ht().add("aluDark",P(le(.05,.05,.08,20),[0,.03,0]),P(le(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=qt(10849535,.3);c.add(Ye(mf(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let y=gl(10127103,0),b=Ye(rn(.05,.004,6,40),y,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:y,age:g/3}});yf(t),t.add("graphite",P(Le(.12,.08,.12,.012),[0,1.29,$t])),t.add("white",P(le(.004,.004,.18,6),[.03,1.42,$t]));let h=qt(10849535,.2);e.add(Ye(mf(.012),h,[.03,1.515,$t],null,null,{cast:!1}));let p=0,f=0,x=0;return{update(m,g,y){y.working&&g>x&&(x=g+1.2+Math.random()*1.5,f=(Math.random()-.5)*1.6),y.working||(f=0),p=Kt(p,f,1.6,m),i.rotation.y=p,r.rotation.x=-.62+Math.sin(g*.7)*.05*y.work,u.emissiveIntensity=.3+y.work*3,h.emissiveIntensity=y.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let v=b.age;b.r.position.y=.42+v*.9,b.r.scale.setScalar(1+v*6),b.mat.opacity=y.work*(1-v)*.8}}}}var mf=n=>new wn(n,16,10);function Uw(n,e,t){t.add("graphite",P(Le(.5,.32,.34,.02),[.18,ft+.16,-.36])),t.add("aluDark",P(Le(.12,.18,.03,.01),[-.27,ft+.2,-.36]));let i=qt(5078015,.5);e.add(Ye(Te(.3,.02,.005),i,[.18,ft+.25,-.188],null,null,{cast:!1}));let s=[-.05,ft,.12],r=.38,o=.36,a=.1;t.add("graphite",P(le(.09,.095,.04,32),[s[0],ft+.02,s[2]]));let l=Rt("j0",[s[0],ft+.04,s[2]]);e.add(l),l.add(new ht().add("white",P(le(.07,.075,.13,32),[0,.065,0])).add("graphite",P(le(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Rt("j1",[0,.16,0]);l.add(c),c.add(new ht().add("white",P(Le(.095,r,.095,.04),[0,r/2,0])).add("graphite",P(le(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Rt("j2",[0,r,0]);c.add(u),u.add(new ht().add("white",P(Le(.078,o,.078,.035),[0,o/2,0])).add("graphite",P(le(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Rt("j3",[0,o,0]);u.add(d),d.add(new ht().add("graphite",P(le(.035,.035,.05,24),[0,.025,0])).add("chrome",P(le(.03,.03,.012,24),[0,.056,0])).add("aluDark",P(Te(.012,.045,.03),[-.02,.08,0]),P(Te(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=qt(5078015,.6);d.add(Ye(rn(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let p=ft+.04+.16,f=new R(0,p+.25,.25),x=new R;function m(g,y,b){let v=g-s[0],w=b-s[2];l.rotation.y=Math.atan2(v,w);let S=Math.hypot(v,w),_=y+a-p,M=gt(Math.hypot(S,_),.05,r+o-.001),L=Math.atan2(S,_),A=gt((M*M-r*r-o*o)/(2*r*o),-1,1),O=Math.acos(A),U=L-Math.atan2(o*Math.sin(O),r+o*Math.cos(O));c.rotation.x=U,u.rotation.x=O,d.rotation.x=Math.PI-U-O}return m(f.x,f.y,f.z),{update(g,y,b){b.working&&b.wafer?x.set(.08*Math.cos(y*1.7),Mn+.03+.06*Math.max(0,Math.sin(y*3.4)),$t-.04+.07*Math.sin(y*2.3)):b.working?x.set(.05*Math.sin(y*1.3),p+.12,$t-.3):x.set(-.05+.04*Math.sin(y*.6),p+.22,.32),f.x=Kt(f.x,x.x,4,g),f.y=Kt(f.y,x.y,4,g),f.z=Kt(f.z,x.z,4,g),m(f.x,f.y,f.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(y*8))}}}function gf(n){return n<.22?$h(n/.22):n<.42?1:1-$h((n-.42)/.58)}function kw(n,e,t){t.add("graphite",P(Le(.6,.28,.3,.02),[.14,ft+.14,-.38])),t.add("white",P(le(.08,.08,.3,28),[.14,ft+.36,-.38],[0,0,Math.PI/2])),t.add("steel",P(le(.06,.06,.24,24),[-.3,ft+.12,-.4])),t.add("blue",P(Le(.3,.86,.26,.03),[0,ft+.43,.02])),t.add("blue",P(Le(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",P(Te(.322,.04,.01),[0,1.6,.942])),t.add("steel",P(le(.085,.085,.22,32),[0,1.45,$t])),t.add("chrome",P(rn(.086,.008,8,32),[0,1.34,$t],[Math.PI/2,0,0])),t.add("rubber",Qn([[.06,1.5,$t-.06],[.2,1.5,$t-.3],[.2,1.2,.2],[.2,ft+.3,-.2]],.016,.1,8)),t.add("rubber",Qn([[-.06,1.42,$t-.06],[-.2,1.42,$t-.3],[-.2,1.1,.2],[-.2,ft+.28,-.22]],.016,.1,8));let i=Rt("ram",[0,1.12,$t]);e.add(i),i.add(new ht().add("chrome",P(le(.035,.035,.42,20),[0,.21,0])).add("steel",P(Le(.32,.05,.32,.012),[0,0,0])).add("darkSteel",P(le(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>P(le(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=hl({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ye(new Sn(.07,40),new vt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ye(Te(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ye(rn(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?gf(o):0;i.position.y=1.12-.155*d,a=Kt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*Ui}}}function Bw(n,e,t){for(let d of[-.42,.42])t.add("aluDark",P(Te(.035,.66,.035),[d,ft+.33,-.33]));t.add("alu",P(Le(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",P(Te(.6,.03,.06),[0,1.16,-.3])),t.add("blue",P(le(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",P(le(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=Zm();e.add(Ye(new _t(.8,.6),new vt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Le(.11,.075,.008,.004),o=s.map(d=>{let h=Ye(r,new vt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,p)=>h.forEach((f,x)=>{let[m,g]=l(p,x),y=o[f];y.userData.tx=m,y.userData.ty=g,d&&y.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=Kt(h.position.x,h.userData.tx,7,d),h.position.y=Kt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function zw(n,e,t){t.add("graphite",P(le(.07,.08,.04,28),[.3,ft+.02,-.35])),t.add("alu",P(le(.028,.028,1,16),[.3,ft+.5,-.35])),t.add("graphite",P(le(.09,.1,.06,32),[.3,ft+1.03,-.35]));let r=new Hs({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ye(le(.08,.08,.13,32,!0),r,[.3,ft+1.125,-.35],null,null,{cast:!1})),e.add(Ye(new wn(.08,32,12,0,Dt,0,Math.PI/2),r,[.3,ft+1.19,-.35],null,null,{cast:!1}));let o=Rt("spin",[.3,ft+1.12,-.35]);e.add(o),o.add(Ye(new Nn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=qt(16756782,.2);e.add(Ye(mf(.022),a,[.3,ft+1.12,-.35],null,null,{cast:!1}));let l=gl(16753978,0),c=new xs(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ye(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new Hs({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",P(Le(.36,.28,.12,.02),[-.2,ft+.14,.04])),t.add("grille",P(new _t(.12,.12),[-.28,ft+.15,.101])),t.add("steel",P(le(.045,.045,.02,28),[-.1,ft+.15,.11],[Math.PI/2,0,0]));let d=qt(3461498,.3);return e.add(Ye(new wn(.038,24,10,0,Dt,0,Math.PI/2),d,[-.1,ft+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,p,f){let x=f.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(p*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(p*5)>0?1:.2)}}}function Hw(n,e,t){t.add("aluDark",P(Le(.72,.62,.04,.012),[0,ft+.31,-.4])),t.add("graphite",P(Le(.72,.06,.3,.012),[0,ft+.03,-.3]));let i=Rt("unwind",[-.16,ft+.4,-.31],[Math.PI/2,0,0]),s=Rt("rewind",[.2,ft+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=kt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new vt({map:r,roughness:.7});i.add(new ht().add("roll",le(.15,.15,.1,48)).add("gold",le(.05,.05,.11,24)).add("chrome",le(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new ht().add("ceramic",le(.075,.075,.1,40)).add("gold",le(.035,.035,.11,20)).add("chrome",le(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,ft+.52],[.05,ft+.3],[.28,ft+.42]])t.add("chrome",P(le(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));yf(t),t.add("steel",P(le(.042,.042,.18,22),[0,1.24,$t])),t.add("chrome",P(rn(.043,.006,6,24),[0,1.16,$t],[Math.PI/2,0,0]));let a=Rt("tamp",[0,1.08,$t]);e.add(a),a.add(new ht().add("chrome",P(le(.016,.016,.3,12),[0,.15,0])).add("graphite",P(Le(.16,.025,.12,.006),[0,0,0])).add("gold",P(Te(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let p=l?gf(l):0;a.position.y=1.08-(1.08-(Mn+.03))*p,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function Gw(n,e,t){t.add("graphite",P(Le(.62,.86,.44,.02),[0,ft+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",P(Te(.016,.84,.01),[d,ft+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",P(Le(.56,.085,.02,.006),[0,ft+.07+d*.1,-.095]));t.add("grille",P(new _t(.36,.5),[.311,ft+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Dn(Te(.014,.01,.004),new Xt({color:16777215}),i*s),o=new Mt,a=[],l=[new Fe(3461498),new Fe(3461498),new Fe(5078015),new Fe(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,ft+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let p=l[(d*7+h*3)%l.length].clone();a.push(p),r.setColorAt(d*s+h,p)}e.add(r);let c=new Fe,u=0;return{update(d,h,p){if(u+=d,!(u<.08)){u=0;for(let f=0;f<a.length;f++){let x=p.working?Math.random()>.45:(f+Math.floor(h*.7))%9===0;c.copy(a[f]).multiplyScalar(x?3.2:.25),r.setColorAt(f,c)}r.instanceColor.needsUpdate=!0}}}}var Vw={archive:Dw,engraver:Nw,terminal:Ow,satellite:Fw,robot:Uw,press:kw,kanban:Bw,beacon:zw,labeler:Hw,generic:Gw};function Ww(n,e,t,i){let s=oi[e],r=xf(t),o=Gi(r,Jo),a=Rt(`station-${e}`,[o.x,0,o.z],[0,pg(r),0]);a.userData.solid=`station:${e}`;let l=new ht,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,P(Le(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",P(Le(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",P(Le(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",P(Te(.9,.01,.008),[0,.32,.252])),l.add("grille",P(new _t(.36,.1),[.24,.18,.251]));let[u,d]=Cw[e]||[.44,-.5];l.add("alu",P(le(.012,.012,.3,10),[u,ft+.15,d])),l.add("graphite",P(le(.03,.03,.012,18),[u,ft+.46,d]));let h=Vw[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let p=rs(s.zh,s.en,s.code,Rw[e]);a.add(Ye(new _t(.46,.13),kn(p.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let f=Yu(384,144,{bg:"#03060c",glow:4});a.add(Ye(new _t(.36,.135),al(f.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=qt(5078015,.4);a.add(Ye(Te(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((O,U)=>{let z=qt(O,.1);return a.add(Ye(le(.028,.028,.045,18),z,[u,ft+.33+(2-U)*.05,d],null,null,{cast:!1})),z}),g=Zu(n);g.root.position.set(0,0,$t),a.add(g.root),a.add(ei(n,1.25,1,[0,0,-.12],.55));let y=new Xt({visible:!1}),b=new tt(new Ht(1.1,2,1.5),y);b.position.set(0,1,.1),a.add(b);let v={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},w=new Fe,S=new Fe(5078015),_=new Fe(3461498),M=new Fe(16726832),L=Gi(r,ls+.05,Mn+.08);function A(){let O=v.status==="working"?"加工中 RUN":v.status==="error"?"故障 FAULT":"待机 IDLE",U=`${O}|${v.label}`;U!==v.screenKey&&(v.screenKey=U,f.set([{text:`${s.code}  ${O}`,size:30,color:v.status==="error"?"#ff8a80":v.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:v.label||"—",size:34,color:"#e8eefc",gap:58}]))}return A(),{kind:e,index:t,theta:r,root:a,port:Gi(r,ls,Mn),anchor:Gi(r,Jo+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(O){v.label=O||"",A()},onStart(O){v.label=O.label||O.name,h.onStart?.(O),A()},onEnd(O,U){v.flash=U?.9:2.2,v.flashOk=U,U||i.puff(L,10),h.onEnd?.(O,U)},update(O,U,z){v.work=Kt(v.work,z.working?1:0,3,O),v.flash=Math.max(0,v.flash-O);let C=v.flash>0&&!v.flashOk;v.status=z.working?"working":C?"error":"idle",A(),h.update(O,U,{working:z.working,wafer:z.wafer,work:v.work});let Z;v.flash>0?(w.copy(v.flashOk?_:M),Z=3.2*(v.flashOk?Math.min(1,v.flash*2):Math.sin(U*14)>0?1:.25)):(w.copy(S),Z=.25+v.work*(2.2+Math.sin(U*6)*.6)),g.led.emissive.copy(w),g.led.emissiveIntensity=Z,x.emissive.copy(w),x.emissiveIntensity=.25+Z*.6,m[0].emissiveIntensity=C?Math.sin(U*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+v.work*3.5,m[2].emissiveIntensity=!z.working&&!C?1.6:.08}}}function xg(n,e){let t=Rt("stations"),i=Ku.map((r,o)=>Ww(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var vf=n=>rs(Zt[n].zh,Zt[n].en,Zt[n].code),yi=new R(7.45,0,os),ws=.83,bf=13,_r=.4,vi=.36,cs=.4,Mf=.02,Sf=.062,wf=.02,Ef=[8.2,8.75,9.3],Tf=[-.1,.45,1],Vi=.55,Ri=2.45,Ju=vi+.046,yg=1.9,Xw=1.3,Jr=9,vg=n=>((n-1)%Jr+Jr)%Jr,_f=(n,e=new R)=>e.set(Ef[n%3],Vi,Tf[Math.floor(n/3)]),_g={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}};function qw(n,e,t,i){let s=i.info,r=s?_g[s.status]||_g.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Gt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Gt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Ot}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0,a=s&&s.files?s.files.length:0;n.fillText(`CALLS ${o} · FILES ${a}`,30,t*.64),n.fillStyle="#15171b";let l=30,c=(i.no||7)*2654435761;for(let u=0;l<e-16;u++){let d=1+((c>>>u%24^u)&3);u%2===0&&n.fillRect(l,t*.8,d,t*.13),l+=d+1}}function $w(n){let e=new ht,t=.03+(vi-.03)/2,i=vi-.03,s=-_r/2+.008;e.add("graphite",P(Le(_r,.03,cs,.008),[0,.015,0])),e.add("graphite",P(Te(.016,.022,cs),[s,vi-.011,0]),P(Te(.016,i,.02),[s,t,cs/2-.01]),P(Te(.016,i,.02),[s,t,-cs/2+.01])),e.add("graphite",P(Te(.06,.026,.06),[0,vi+.013,0]),P(Le(.17,.02,.17,.006),[0,vi+.036,0]));for(let l=0;l<bf;l++){let c=Sf+l*wf-.005;for(let u of[-1,1])e.add("plastic",P(Te(.3,.004,.05),[Mf,c,u*.165]))}let r=new ht().add("smoke",P(Te(_r-.016,i,.01),[.008,t,cs/2-.005]),P(Te(_r-.016,i,.01),[.008,t,-cs/2+.005]),P(Te(.01,i,cs-.02),[_r/2-.005,t,0]),P(Te(_r-.016,.01,cs-.02),[.008,vi-.005,0])),o=new Yt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new ht().add("white",P(Le(.02,vi-.045,cs-.03,.006),[0,0,0])).add("graphite",P(le(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),P(le(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(vi-.045)/2+.006,doorX:-_r/2-.004}}function bg(n,e){let t=Rt("stocker"),i=new Xt({visible:!1}),s=new Ht(_r+.04,vi+.08,cs+.04),r=new _t(.28,.1225),o=$w(n),a=Rt("load-port",[yi.x,0,yi.z]);a.userData.solid="load-port",t.add(a);let l=new ht;l.add("white",P(Le(.56,ws-.012,.62,.02),[0,(ws-.012)/2,0])),l.add("graphite",P(Le(.44,.012,.44,.004),[0,ws-.006,0]),P(Te(.58,.06,.64),[0,.03,0]));for(let k=0;k<3;k++){let V=k/3*Math.PI*2+.5;l.add("chrome",P(le(.008,.012,.012,12),[Math.cos(V)*.13,ws+.004,Math.sin(V)*.13]))}l.add("aluDark",P(Te(.04,.22,.04),[.24,ws+.11,.27]),P(Te(.08,.03,.05),[.21,ws+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=vf("loadport");a.add(Ye(new _t(.44,.124),kn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((k,V)=>{let ie=qt(k,.15);return a.add(Ye(Te(.05,.016,.008),ie,[-.12+V*.12,.46,.312],null,null,{cast:!1})),ie});a.add(ei(n,.9,.95,[0,0,0],.5));let d=new tt(new Ht(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new ht,p=(Ef[0]+Ef[2])/2,f=(Tf[0]+Tf[2])/2;h.add("graphite",P(Te(1.66,Vi-.03,1.66),[p,(Vi-.03)/2,f])),h.add("white",P(Le(1.76,.03,1.76,.01),[p,Vi-.015,f])),h.add("aluDark",P(Te(1.7,.05,1.7),[p,.025,f]));let x=[];for(let k=0;k<Jr;k++){let V=_f(k);h.add("aluDark",P(Le(.44,.008,.44,.003),[V.x,Vi+.002,V.z]));for(let j=0;j<3;j++){let ce=j/3*Math.PI*2+.5;h.add("chrome",P(le(.007,.01,.01,10),[V.x+Math.cos(ce)*.12,Vi+.008,V.z+Math.sin(ce)*.12]))}let ie=qt(3134074,0);t.add(Ye(Te(.12,.006,.012),ie,[V.x,Vi+.004,V.z+.235],null,null,{cast:!1})),x.push(ie)}t.add(h.build(n,{name:"buffer-table"}));let m=vf("stocker");t.add(Ye(new _t(.62,.175),kn(m.tex,.35),[p,Vi*.55,f+.834],null,null,{cast:!1})),t.add(ei(n,2.3,2.3,[p,0,f],.55));let g=new tt(new Ht(1.8,Vi+.45,1.8),i);g.position.set(p,(Vi+.45)/2,f),t.add(g);let y=new ht,b=[7,10],v=[-.45,1.95];for(let k of b){for(let V of v)y.add("white",P(Te(.1,Ri+.05,.1),[k,(Ri+.05)/2,V])),y.add("graphite",P(Te(.22,.03,.22),[k,.015,V]));y.add("aluDark",P(Te(.09,.09,v[1]-v[0]+.1),[k,Ri,(v[0]+v[1])/2]))}for(let k of v)y.add("steel",P(Te(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,Ri,k]));t.add(y.build(n,{name:"gantry"}));let w=vf("gantry"),S=Ye(new _t(.9,.253),kn(w.tex,.35),[(b[0]+b[1])/2,Ri-.2,v[1]+.047],null,null,{cast:!1});t.add(S),t.add(new ht().add("steel",P(Te(.02,.1,.02),[(b[0]+b[1])/2-.35,Ri-.06,v[1]+.04]),P(Te(.02,.1,.02),[(b[0]+b[1])/2+.35,Ri-.06,v[1]+.04])).build(n,{name:"sign-hangers"}));let _=Rt("bridge");t.add(_),_.add(new ht().add("blue",P(Te(.14,.12,v[1]-v[0]+.12),[0,Ri+.105,(v[0]+v[1])/2])).add("graphite",P(Te(.26,.1,.13),[0,Ri+.07,v[0]]),P(Te(.26,.1,.13),[0,Ri+.07,v[1]])).build(n,{name:"bridge-beam"}));let M=Rt("trolley");_.add(M),M.add(new ht().add("graphite",P(Le(.28,.13,.26,.02),[0,Ri-.035,0])).add("steel",P(le(.045,.045,.2,20),[0,Ri-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let L=le(.0035,.0035,1,6),A=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([k,V])=>{let ie=Ye(L,n.steel,[k,1,V],null,null,{cast:!1});return M.add(ie),ie}),O=Rt("gripper");M.add(O),O.add(new ht().add("graphite",P(Le(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let U=[-1,1].map(k=>{let V=Ye(Te(.024,.06,.13),n.steel,[k*.115,-.01,0]);return O.add(V),V}),z=qt(5078015,.3);O.add(Ye(Te(.1,.008,.01),z,[0,.03,.122],null,null,{cast:!1}));let C={x:yi.x,z:yi.z,hook:yg,grip:0,carry:null},Z=()=>{_.position.x=C.x,M.position.z=C.z,O.position.y=C.hook;let k=Ri-.1,V=C.hook+.055,ie=Math.max(.01,k-V);for(let ce of A)ce.scale.y=ie,ce.position.y=V+ie/2;let j=Ei(.115,.079,C.grip);U[0].position.x=-j,U[1].position.x=j,C.carry&&C.carry.g.position.set(C.x,C.hook-Ju,C.z)},Q=new Set,Y=new Array(Jr).fill(null),G=null;function H(){let k=o.g.clone();k.name="foup";let V=o.door.clone();k.add(V);let ie=kt(256,112,()=>{}),j=new vt({map:ie.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:ie.tex,emissiveIntensity:.18});k.add(Ye(r,j,[.01,vi-.075,cs/2+.002],null,null,{cast:!1}));let ce=new tt(s,i);ce.position.set(0,vi/2+.02,0),k.add(ce);let Ae={no:0,info:null,g:k,door:V,label:ie,labelMat:j,labelKey:"",proxy:ce,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return K(Ae),Q.add(Ae),t.add(k),Ae}function K(k){let V=`${k.no}|${k.info?`${k.info.status}|${k.info.calls}|${(k.info.files||[]).length}`:"-"}|${k.count}`;V!==k.labelKey&&(k.labelKey=V,k.proxy.userData.hoverId=k.no?`foup:${k.no}`:"loadport",k.label.redraw((ie,j,ce)=>qw(ie,j,ce,k)))}function N(k,V){let ie=k.count;if(k.count+=1,k.looks.push(V),ie<bf){let j=e.create(V);j.position.set(Mf,Sf+ie*wf,0),k.g.add(j),k.slots.push(j)}K(k)}function X(k){Q.delete(k),t.remove(k.g),k.label.tex.dispose(),k.labelMat.dispose();for(let V=0;V<Jr;V++)Y[V]===k&&(Y[V]=null);G===k&&(G=null)}function ae(k){let V=k.doorOpen,ie=gt(V/.25,0,1),j=ki(gt((V-.25)/.75,0,1));k.door.position.set(o.doorX-.018*ie,o.doorY-.43*j,0)}function J(k=!1){let V=H();return V.g.position.set(yi.x,ws,yi.z),V.state=k?"dock":"spawning",V.sp=k?1:0,V.doorOpen=k?1:0,ae(V),G=V,V}function de(k,V){let ie=Y[V];ie&&ie!==k&&X(ie),Y[V]=k;let j=_f(V);k.g.position.copy(j),k.state="nest",k.doorOpen=0,ae(k)}let xe=[],ee=null,ye=k=>({setup:()=>(k(),{d:0,fn:null})}),De=(k,V,ie=1.6)=>({setup(){let j=C.x,ce=C.z,Ae=Math.hypot(k-j,V-ce);return{d:Ae<.001?0:Math.max(.35,Ae/ie),fn:F=>(C.x=Ei(j,k,F),C.z=Ei(ce,V,F))}}}),dt=(k,V)=>({setup(){let ie=C.hook;return{d:Math.abs(k-ie)<.001?0:V,fn:j=>C.hook=Ei(ie,k,j)}}}),Be=(k,V=.3)=>({setup(){let ie=C.grip;return{d:V,fn:j=>C.grip=Ei(ie,k,j)}}}),je=(k,V,ie=.55)=>({setup(){let j=k.doorOpen;return{d:ie,fn:ce=>(k.doorOpen=Ei(j,V,ce),ae(k))}}});function ue(k){let V=vg(k.no),ie=_f(V);return{i:0,steps:[ye(()=>k.state="closing"),je(k,0),De(yi.x,yi.z),dt(ws+Ju,.6),Be(1),ye(()=>(C.carry=k,k.state="carried",z.emissiveIntensity=2.2)),dt(Xw+Ju,.9),ye(()=>{G===k&&(G=null),J();let j=Y[V];j&&j!==k&&(j.state="sink",j.sp=0,Y[V]=null)}),De(ie.x,ie.z),dt(Vi+Ju,.8),ye(()=>{C.carry=null,z.emissiveIntensity=.3,Y[V]&&Y[V]!==k&&X(Y[V]),de(k,V)}),Be(0),dt(yg,.5),De(yi.x,yi.z)]}}let se={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new R(yi.x,1.1,yi.z),stocker:new R(p,.9,f)},speed:1,hoverObjects(k=[]){for(let V of Q)V.no&&k.push(V.proxy);return k},dockReady:()=>!!G&&G.state==="dock"&&G.doorOpen>=1,dockTurn:()=>G&&G.no||null,dockCount:()=>G?G.count:0,bindDock(k,V){return!G||G.no?!1:(G.no=k,G.info=V||null,K(G),!0)},slotPoint(k,V=new R){let ie=G?G.g.position:new R(yi.x,ws,yi.z);return V.set(ie.x+Mf,ie.y+Sf+Math.min(k,bf-1)*wf,ie.z)},addWafer(k){G&&N(G,k)},addLate(k,V){for(let ie of Q)if(ie.no===k&&ie.state!=="sink")return N(ie,V),!0;return!1},updateInfo(k,V){for(let ie of Q)ie.no===k&&(ie.info=V,K(ie))},ship(k){return!G||G.no!==k||xe.includes(G)||ee&&ee.foup===G?!1:(xe.push(G),!0)},shipped:k=>{for(let V of Q)if(V.no===k)return V.state==="carried"||V.state==="nest"||V.state==="sink"||xe.includes(V)||ee&&ee.foup===V;return!1},placeNest(k,V,ie){let j=H();j.no=k,j.info=V;for(let ce of ie)N(j,ce);de(j,vg(k)),K(j)},resetDock(k,V,ie){G&&X(G);let j=J(!0);if(k){j.no=k,j.info=V;for(let ce of ie||[])N(j,ce)}K(j)},busy:()=>!!ee||xe.length>0,update(k){if(!ee&&xe.length){let j=xe.shift();ee=ue(j),ee.foup=j}let V=k*se.speed;for(;ee&&V>0;){let j=ee.steps[ee.i];if(!j){ee=null;break}if(j.run||(j.run=j.setup(),j.t=0),!j.run.d){j.run.fn&&j.run.fn(1),ee.i+=1;continue}let ce=Math.min(V,j.run.d-j.t);j.t+=ce,V-=ce,j.run.fn&&j.run.fn(ki(gt(j.t/j.run.d,0,1))),j.t>=j.run.d-1e-6&&(ee.i+=1)}Z();for(let j of[...Q])j.state==="spawning"?(j.sp=Math.min(1,j.sp+k/.8),j.g.position.y=ws-(vi+.07)*(1-ki(j.sp)),j.sp>=1&&(j.state="dock")):j.state==="dock"&&j.doorOpen<1?(j.doorOpen=Math.min(1,j.doorOpen+k/.6),ae(j)):j.state==="sink"&&(j.sp=Math.min(1,j.sp+k/1.2),j.g.position.y=Vi-(vi+.09)*ki(j.sp),j.sp>=1&&X(j));for(let j=0;j<Jr;j++)x[j].emissiveIntensity=Y[j]?1.6:0;let ie=!!ee;u[0].emissiveIntensity=se.dockReady()?1.8:.15,u[1].emissiveIntensity=G&&G.state==="closing"?2.2:.15,u[2].emissiveIntensity=ie?1.8:.15},dispose(){for(let k of[...Q])X(k);for(let k of[o.g,o.door])k.traverse(V=>V.geometry&&V.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return Z(),se}function Mg(n){let e=new Yt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new gs({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?qn:_s}),h=new Us(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new R,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new R((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new R(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var Sg=.15,Yw=.006;function wg(n){let e=new Nn(Sg,Sg,Yw,40,1,!1),t=new vt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new tt(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Af=.34,ju=.17,Eg=4,Kw=2.4,Zw=.55,Jw=.9,Rf=.03,jw=5,Qu=-.006,Qw=12,eE=.4,tE=3,nE=1.5,iE=9,sE=new Fe(16756768),rE=new Fe(3461498),xl=(n,e=n.kind)=>n.status==="error"?"bad":Yo.has(e)?"gold":"normal";function Tg(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=xl(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,(n.files?n.files.length:0)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var ed=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Bu(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Af-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-ju,r=this.gateOut+ju,o=this.items.find(f=>f.s>s+1e-6&&f.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let f of this.items){let x=d?d.s-Af:this.end,m=!d||d.s-Af>=r;if(f.cycled)f.s<r&&(f.s<=this.gateOut-ju+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(f.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),f.s<=s+1e-6){let y=!o&&this.doorOut<=.05;y&&h&&f.s>=s-.9&&(a=!0),(!y||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else f.s<this.gateIn+ju&&(a=!0);f.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(f.dwell+=e*t,c=!0,f.dwell>=Zw&&(f.cycled=!0))}let g=x-f.s;if(g<=1e-5)f.v=0;else{let y=Math.min(Kw*t,Math.sqrt(2*Eg*g));f.v=Math.min(y,f.v+Eg*t*e),f.s=Math.min(x,f.s+f.v*e),u=!0}f.arrivedAt==null&&f.s>=this.end-1e-4&&(f.arrivedAt=i),d=f}let p=5*e*t;this.doorIn=gt(this.doorIn+(a?p:-p),0,1),this.doorOut=gt(this.doorOut+(l?p:-p),0,1),this.cycling=c,this.moving=u}};function Ag({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new R,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=gt(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new ed([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),p=gt((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),f=new ed([o.outPort,o.outCenter,o.trackEnd],{gateIn:p*h,gateOut:h+.45,stop:h}),x=F=>e.byKind[F.kind]?F.kind:"generic",m=new Map,g=new Set,y=new Map,b=Object.fromEntries(e.list.map(F=>[F.kind,new Array(jw).fill(null)])),v={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},w={inbound:0,outbound:0,robot:!1,stocker:!1},S={},_=[],M=0,L=0,A=!0,O=0,U=1,z=null;function C(F){let re=y.get(F);return re||(re={no:F,status:"running",info:null,shipped:!1,pending:[]},y.set(F,re)),re}let Z=F=>F.status!=="running"||F.no<M,Q=F=>{for(let re of m.values())if(re.turn===F)return!0;return!1};function Y(F){let re={id:F.id,call:F,kind:x(F),turn:F.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:Mn,waitT:0};return m.set(F.id,re),C(F.turn),re}function G(F){F.mesh&&(r.remove(F.mesh),F.mesh=null)}function H(F){F.stage="stored",m.delete(F.id),g.add(F.id)}function K(F){F.signaled||(F.signaled=!0,e.byKind[F.kind].onEnd(F.call,F.call.status!=="error"))}function N(F,re){t.addLate(F,re)||C(F).pending.push(re)}function X(F){F.it&&(d.remove(F.it),f.remove(F.it),F.it=null),F.level>=0&&(b[F.kind][F.level]=null,F.level=-1),v.carry===F&&(v.carry=null),G(F),K(F),N(F.turn,xl(F.call,F.kind)),H(F)}let ae=F=>b[F].indexOf(null);function J(F,re){let he=e.byKind[F.kind];b[F.kind][re]=F,F.level=re,F.stage="station",F.arriveT=O,F.mesh||(F.mesh=s.create("raw"),r.add(F.mesh)),F.mesh.position.set(he.port.x,Mn+re*Rf,he.port.z)}function de(){for(let F of m.values())G(F);m.clear(),g.clear(),y.clear(),d.items.length=0,f.items.length=0;for(let F of Object.keys(b))b[F].fill(null);v.task=null,v.steps=[],v.cur=null,v.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),z=null}function xe(F){S={},_=[];for(let re of F.calls){if(re.status!=="running")continue;let he=x(re);S[he]=(S[he]||0)+1,_.push(re)}M=F.turns.length?F.turns[F.turns.length-1].no:0}function ee(F){de();for(let D of F.turns)Object.assign(C(D.no),{info:D,status:D.status});let re=F.turns.filter(D=>D.status!=="running");for(let D of re)C(D.no).shipped=!0;for(let D of re.slice(-iE))t.placeNest(D.no,D,Tg(D,F.calls));let he=F.turns.find(D=>D.status==="running")||null;he?t.resetDock(he.no,he,Tg(he,F.calls)):t.resetDock(null,null,[]);for(let D of F.calls){if(D.status!=="running"){g.add(D.id);continue}let Ke=Y(D),at=ae(Ke.kind);at>=0&&J(Ke,at),e.byKind[Ke.kind].onStart(D)}xe(F)}function ye(F){if(!F)return;if(A||F.turnCount<L){A=!1,L=F.turnCount,ee(F);return}L=F.turnCount;for(let he of F.turns){let D=C(he.no);D.info=he,D.status=he.status,t.updateInfo(he.no,he)}let re=new Set;for(let he of F.calls){re.add(he.id);let D=m.get(he.id);D?D.call=he:g.has(he.id)||(Y(he),e.byKind[x(he)].onStart(he))}for(let he of g)re.has(he)||g.delete(he);xe(F)}let De=(F,re)=>({yaw:F,reach:Zr,lift:re,d:(he,D)=>Math.max(.18,Math.abs(Yh(he.yaw,D.yaw))/4)});function dt(F,re){let he=e.byKind[F.kind];b[F.kind][re]=F,F.level=re;let D=re*Rf;return{type:"deliver",job:F,from:Zt.lock.code,to:oi[F.kind].code,steps:[De(Kr,Qu),{reach:ls,d:.38},{lift:ml,d:.15,onStart(){d.remove(F.it),F.it=null,F.stage="carried",F.restY=Mn,v.carry=F},onEnd:()=>F.restY=0},{reach:Zr,d:.32},De(he.theta,D+ml),{reach:ls,d:.38},{lift:D+Qu,d:.15,onStart:()=>F.restY=Mn+D,onEnd(){v.carry=null,J(F,re)}},{reach:Zr,d:.32}]}}function Be(F){let re=e.byKind[F.kind],he=F.level,D=he*Rf;return F.reserved=!0,{type:"collect",job:F,from:oi[F.kind].code,to:Zt.unload.code,steps:[De(re.theta,D+Qu),{reach:ls,d:.38},{lift:D+ml,d:.15,onStart(){b[F.kind][he]=null,F.level=-1,F.stage="carried",F.restY=Mn+D,v.carry=F},onEnd:()=>F.restY=0},{reach:Zr,d:.32},De(jo,ml),{reach:ls,d:.38},{lift:Qu,d:.15,onStart:()=>F.restY=Mn,onEnd(){v.carry=null,F.it=f.add(F),F.stage="out"}},{reach:Zr,d:.32}]}}function je(){let F=null,re=d.head();if(d.atEnd(re)){let he=ae(re.job.kind);he>=0&&(F={type:"deliver",job:re.job,k:he,ready:re.arrivedAt??O})}if(f.tailFree())for(let he of m.values())he.stage==="station"&&he.processed&&!he.reserved&&(!F||he.processedAt<F.ready)&&(F={type:"collect",job:he,ready:he.processedAt});return F?F.type==="deliver"?dt(F.job,F.k):Be(F.job):null}function ue(F){let re=n.robot;if(!v.task){let Ke=je();Ke?(v.task=Ke,v.steps=Ke.steps.slice(),v.cur=null,v.idle=0,v.homed=!1,re.setBusy(!0)):(v.idle+=F,v.idle>nE&&!v.homed&&!v.cur&&(v.steps=[De(Kr,0)],v.homed=!0))}let he=F,D=0;for(;he>0&&D++<32;){if(!v.cur){let Pe=v.steps.shift();if(!Pe)break;let Me={yaw:re.pose.yaw,reach:re.pose.reach,lift:re.pose.lift},ve={yaw:Pe.yaw??Me.yaw,reach:Pe.reach??Me.reach,lift:Pe.lift??Me.lift},ze=typeof Pe.d=="function"?Pe.d(Me,ve):Pe.d;v.cur={st:Pe,from:Me,to:ve,d:ze/U,t:0},Pe.onStart&&Pe.onStart()}let Ke=v.cur,at=Math.min(he,Ke.d-Ke.t);Ke.t+=at,he-=at;let yt=Ke.d>0?ki(Ke.t/Ke.d):1;re.setPose(Ke.from.yaw+Yh(Ke.from.yaw,Ke.to.yaw)*yt,Ei(Ke.from.reach,Ke.to.reach,yt),Ei(Ke.from.lift,Ke.to.lift,yt)),Ke.t>=Ke.d-1e-6&&(v.cur=null,Ke.st.onEnd&&Ke.st.onEnd())}if(v.task&&!v.cur&&v.steps.length===0&&(v.task=null,v.idle=0,re.setBusy(!1)),re.setStatus){let Ke=v.task,at=!!v.cur||v.steps.length>0,yt=v.carry&&v.carry.mesh?v.carry.mesh.userData.look:null;Ke?re.setStatus(Ke.type,Ke.from,Ke.to,yt):re.setStatus(at?"home":"idle",null,at?Zt.lock.code:null,null)}v.carry&&v.carry.mesh&&(re.carryPoint(a),a.y=Math.max(a.y,v.carry.restY),v.carry.mesh.position.copy(a))}function se(){for(let F of m.values())F.stage!=="station"||F.processed||F.call.status==="running"||O<F.arriveT+Jw/U||(F.processed=!0,F.processedAt=O,s.setLook(F.mesh,xl(F.call,F.kind)),K(F))}function k(F,re){f.remove(re),F.it=null,F.stage="transfer",z={j:F,t:0,d:eE/U,from:F.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new R)}}function V(F){if(!z)return;z.t+=F;let re=ki(z.t/z.d),he=z.j.mesh;if(he.position.lerpVectors(z.from,z.to,re),he.position.y+=Math.sin(Math.PI*re)*.025,z.t>=z.d){let D=z.j;z=null,G(D),t.dockTurn()===D.turn?t.addWafer(xl(D.call,D.kind)):N(D.turn,xl(D.call,D.kind)),H(D)}}function ie(F){if(t.dockReady()&&t.dockTurn()==null){let D=null;for(let Ke of y.values())!Ke.shipped&&(!D||Ke.no<D.no)&&(D=Ke);if(D){t.bindDock(D.no,D.info);for(let Ke of D.pending.splice(0))t.addWafer(Ke)}}let re=t.dockTurn();if(re!=null&&!z&&t.dockReady()){let D=C(re);!D.shipped&&Z(D)&&!Q(re)&&t.ship(re)&&(D.shipped=!0)}let he=f.head();if(!z&&f.atEnd(he)){let D=he.job;C(D.turn).shipped?X(D):t.dockReady()&&t.dockTurn()===D.turn?k(D,he):(D.waitT+=F,D.waitT>tE&&re!=null&&re!==D.turn&&t.dockReady()&&t.ship(re)&&(C(re).shipped=!0))}}function j(){let F=m.size-Qw;if(!(F<=0))for(let re of m.values()){if(F<=0)break;re.stage==="spawn"&&re.call.status!=="running"&&(X(re),F-=1)}}function ce(){if(d.tailFree()){for(let F of m.values())if(F.stage==="spawn"){F.mesh=s.create("raw"),r.add(F.mesh),F.it=d.add(F),F.stage="in",d.path.at(0,F.mesh.position),i.pulseDispenser();return}}}function Ae(F,re,he){F.emissive.copy(re?sE:rE),F.emissiveIntensity=re?1.6+Math.sin(he*10)*.8:.6}return t.resetDock(null,null,[]),{sync:ye,update(F,re){O=re,U=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=U,j(),ce(),d.update(F,U,O),f.update(F,U,O),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(f.doorOut,f.doorIn),Ae(n.lock.led,d.cycling,re),Ae(n.unload.led,f.cycling,re),n.trackLed.emissiveIntensity=d.moving||f.moving?1.8+Math.sin(re*8)*.4:1,se(),ue(F),ie(F),V(F);for(let he of d.items)d.path.at(he.s,he.job.mesh.position);for(let he of f.items)f.path.at(he.s,he.job.mesh.position);for(let he of e.list){let D=!1,Ke=!1;for(let yt of b[he.kind])yt&&yt.stage==="station"&&(D=!0,yt.processed||(Ke=!0));let at=(S[he.kind]||0)>0||Ke;he.active=at,he.update(F,re,{working:at,wafer:D})}t.update(F)},activity(){return w.inbound=d.items.length,w.outbound=f.items.length,w.robot=!!v.task||!!v.cur,w.stocker=!!z||t.busy(),w},focus(F){let re=null;for(let he of _)(!re||(he.startedAt||0)>=(re.startedAt||0))&&(re=he);if(re){let he=e.byKind[x(re)];return F.copy(he.anchor),`station:${he.kind}`}return v.task?(F.copy(n.anchors.robot),"robot"):z||t.busy()?(F.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||_.length>0||!!v.task||!!v.cur||v.steps.length>0||!!z||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:f.items.length,robot:v.task?v.task.type:"idle",transfer:!!z,dock:t.dockTurn(),rush:U,stages:[...m.values()].reduce((F,re)=>(F[re.stage]=(F[re.stage]||0)+1,F),{})}},dispose(){for(let F of m.values())G(F);m.clear()}}}function Qt(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function Tn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function Wi(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function Rg(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function Cg(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var Cf={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function Es(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?Cf["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?Cf["deepseek-flash"]:null:t?Cf["deepseek-flash"]:null}function Ks(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function yl(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function td(n){if(!n||typeof n!="object")return null;let e={miss:yl(n.inputTokens),hit:yl(n.cacheReadTokens),write:yl(n.cacheWriteTokens),output:yl(n.outputTokens),reasoning:yl(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function nd(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function Pg(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function id(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var oE=60,Ig=40,aE=200;function If(){return{v:0,provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],firstAt:0,lastAt:0}}function lE(n){let e=n&&n.time;if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}function sd(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function rd(n,e){return n.length>e?n.slice(n.length-e):n}function Lg(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],added:0,removed:0}}function Pf(n,e,t){let i=n.turns[n.turns.length-1];if(i&&i.status==="running")return n;let s=n.turnCount+1;return{...n,turnCount:s,turns:rd([...n.turns,Lg(s,t??s,e)],Ig)}}function cE(n,e){let t=n.findIndex(s=>s.path===e.path);if(t<0)return[...n,{path:e.path,added:e.added,removed:e.removed}];let i=n.slice();return i[t]={...i[t],added:i[t].added+e.added,removed:i[t].removed+e.removed},i}var uE=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function dE(n,e){if(!e||typeof e.type!="string")return n;let t=e.data&&typeof e.data=="object"?e.data:{},i=lE(e),s={...n,v:n.v+1,lastAt:i,firstAt:n.firstAt||i};switch(e.type){case"request/header":{let r=t.header&&t.header.config||{};return typeof r.model=="string"&&(s.model=r.model),typeof r.provider=="string"&&(s.provider=r.provider),typeof r.reasoningEffort=="string"&&(s.effort=r.reasoningEffort),s}case"request/context":return typeof t.model=="string"&&(s.model=t.model),typeof t.provider=="string"&&(s.provider=t.provider),typeof t.contextWindow=="number"&&t.contextWindow>0&&(s.contextWindow=t.contextWindow),s;case"turn/start":{let r=s.turns[s.turns.length-1];r&&r.status==="running"&&(s.turns=sd(s.turns,a=>({...a,status:"ok",endedAt:i})));let o=s.turnCount+1;return s.turnCount=o,s.turns=rd([...s.turns,Lg(o,typeof t.turn=="number"?t.turn:o,i)],Ig),s.phase="thinking",s}case"step/start":return s=Pf(s,i,t.turn),s.phase="thinking",s;case"assistant/message":{s=Pf(s,i,t.turn);let r=td(t.usage);if(s.phase="idle",!r)return s;let o=Es(s.provider,s.model),a=Ks(i),l=nd(r,o,a),c=s.totals;return s.totals={miss:c.miss+r.miss,hit:c.hit+r.hit,write:c.write+r.write,output:c.output+r.output,reasoning:c.reasoning+r.reasoning,requests:c.requests+1,cost:c.cost+l,costPeak:c.costPeak+(a?l:0),costOffPeak:c.costOffPeak+(a?0:l),savings:c.savings+Pg(r,o,a)},s.contextTokens=r.miss+r.hit+r.write+r.output,s.turns=sd(s.turns,u=>({...u,miss:u.miss+r.miss,hit:u.hit+r.hit,write:u.write+r.write,output:u.output+r.output,reasoning:u.reasoning+r.reasoning,cost:u.cost+l,requests:u.requests+1})),s}case"tool/call":{s=Pf(s,i,t.turn);let r=String(t.callId??t.id??`call-${s.v}`);if(s.calls.some(u=>u.id===r))return s;let o=String(t.name||"tool"),a=eg(o),l=Yo.has(a)?ig(o,t.arguments):null,c={id:r,name:o,kind:a,label:ng(o,t.arguments),turn:s.turns[s.turns.length-1].no,startedAt:i,endedAt:0,status:"running",change:l};return s.calls=rd([...s.calls,c],oE),s.tools={...s.tools,calls:s.tools.calls+1,running:s.tools.running+1,byKind:{...s.tools.byKind,[a]:(s.tools.byKind[a]||0)+1}},s.turns=sd(s.turns,u=>({...u,calls:u.calls+1})),s.phase="tool",s}case"tool/result":{let r=t.message&&typeof t.message=="object"?t.message:{},o=String(r.toolCallId??t.callId??""),a=s.calls.findIndex(h=>h.id===o);if(a<0||s.calls[a].status!=="running")return s;let l=!!t.error||r.isError===!0,c={...s.calls[a],status:l?"error":"ok",endedAt:i};s.calls=s.calls.slice(),s.calls[a]=c;let u=Math.max(0,s.tools.running-1);s.tools={...s.tools,running:u,errors:s.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=s.files.paths.includes(d.path);s.files={count:s.files.count+(h?0:1),added:s.files.added+d.added,removed:s.files.removed+d.removed,paths:h?s.files.paths:rd([...s.files.paths,d.path],aE)}}return s.turns=s.turns.map(h=>{if(h.no!==c.turn)return h;let p={...h,errors:h.errors+(l?1:0)};return d&&(p.files=cE(h.files,d),p.added=h.added+d.added,p.removed=h.removed+d.removed),p}),u===0&&(s.phase="thinking"),s}case"turn/end":{let r=t.reason&&typeof t.reason=="object"?t.reason.kind:void 0,o=uE.has(r)?"rework":"ok",a=s.turns[s.turns.length-1];if(a&&a.status==="running"&&(s.turns=sd(s.turns,l=>({...l,status:o,endedAt:i})),s.calls.some(l=>l.status==="running"&&l.turn===a.no))){let l=0;s.calls=s.calls.map(c=>c.status!=="running"||c.turn!==a.no?c:(l++,{...c,status:"error",endedAt:i})),s.tools={...s.tools,running:Math.max(0,s.tools.running-l),errors:s.tools.errors+l}}return s.phase="idle",s}default:return n}}function Lf(n,e){let t=n;for(let i of e)t=dE(t,i);return t}function od(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:n.tools.calls-n.tools.running>0?(n.tools.calls-n.tools.running-n.tools.errors)/(n.tools.calls-n.tools.running):1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:(()=>{let r=n.turns.filter(o=>o.status!=="running");return r.length?r.filter(o=>o.status==="ok").length/r.length:1})()}}var xt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},ld={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:xt.violet},reasoning:{zh:"推理",en:"REASONING",color:xt.violet},generating:{zh:"生成",en:"GENERATING",color:xt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:xt.amber}},hE=Gu(),Dg=120,Ng=90,fE=[20,50,100,150,200,300,500,1e3,2e3],pE=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],Og=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function cd(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function Df(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function Fg(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Gt}`,n.fillStyle=xt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Ot}`,n.fillStyle=xt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Ot}`,n.fillStyle=o||xt.muted,n.fillText(r,e-36,39))}function Zs(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Gt}`,n.fillStyle=xt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Ot}`,n.fillStyle=xt.dim,r==="left"&&n.fillText(s,e+a,t)}function Ug(n,e,t,i,s,r=96,o="",a=xt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Ot}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Ot}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function kg(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Ot}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),p=x=>t+s-s*gt(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),p(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let f=n.createLinearGradient(0,t,0,t+s);f.addColorStop(0,a),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),p(r[x])):n.moveTo(h(x),p(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function ad(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),Zs(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Ot}`,n.fillStyle=xt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Ot}`,n.fillStyle=xt.muted,n.fillText(l,e+20,t+s-14))}function mE(n,e,t,i){cd(n,e,t);let s=ld[i.phase]||ld.idle;Fg(n,e,"令牌流量","TOKEN FLOW",xt.cyan,`● ${s.zh} ${s.en}`,s.color),Zs(n,36,122,"实时速率","LIVE RATE"),Ug(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",xt.cyan,104,"tok/s"),Zs(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Ot}`,n.fillStyle=xt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=Og(Math.max(20,...i.tpsHist)*1.15,fE);kg(n,470,104,e-470-40,236,i.tpsHist,{color:xt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Ot}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;ad(n,36,a,o,l,"输入","INPUT",Qt(c.miss+c.write),"未命中缓存 · MISS",xt.blue),ad(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",Qt(c.hit),`命中率 ${Wi(i.hitRate)}`,xt.green),ad(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",Qt(c.output),`请求 ${c.requests}`,xt.cyan),ad(n,36+(o+16)*3,a,o,l,"推理","REASONING",Qt(c.reasoning),"思考链 · THINKING",xt.violet),Df(n,e,t,xt.cyan)}function vl(n,e,t,i,s,r,o,a,l){Zs(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Ot}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Ot}`,n.fillStyle=xt.muted,n.fillText(a,e,t+112))}function gE(n,e,t,i){cd(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,xt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Gt}`,n.fillStyle=xt.text,n.shadowColor=xt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Ot}`,n.fillStyle=xt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let y="演示数据 · DEMO DATA";n.font=`700 22px ${Gt}`;let b=n.measureText(y).width+36,v=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(v,28,b,40),n.strokeStyle=xt.amber,n.lineWidth=2,n.strokeRect(v+1,29,b-2,38),n.fillStyle=xt.amber,n.fillText(y,v+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Ot}`,n.fillStyle=xt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=ld[i.phase]||ld.idle,a=(e-80)/5,l=148;vl(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),vl(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,xt.text),vl(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${Wi(i.toolSuccess)}`,xt.cyan),vl(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,xt.gold),vl(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,xt.blue);let c=330;Zs(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,p=116,f=c+22,x=i.recent.slice(-u),m=u-x.length;for(let y=0;y<u;y++){let b=40+y*(h+d),v=x[y-m];if(!v){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,f+1,h-2,p-2);continue}let w=v.status==="running"?xt.cyan:v.status==="error"?xt.red:Yo.has(v.kind)?xt.gold:xt.blue,S=n.createLinearGradient(0,f,0,f+p);S.addColorStop(0,w),S.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=v.status==="running"?.95:.55,n.fillStyle=S,n.fillRect(b,f,h,p),n.globalAlpha=1,n.fillStyle=w,n.fillRect(b,f+p-6,h,6);let _=oi[v.kind]||oi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Ot}`,n.fillStyle="#ffffff",n.fillText(_.code.replace("ST-",""),b+h/2,f+p/2-6)}let g=x[x.length-1];if(g){let y=oi[g.kind]||oi.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Gt}`,n.fillStyle=xt.text;let v=String(g.label||g.name||"").slice(0,60);n.fillText(`${y.code} ${y.zh} · ${v}`,40,f+p+52),n.textAlign="right",n.font=`700 22px ${Ot}`,n.fillStyle=g.status==="running"?xt.cyan:g.status==="error"?xt.red:xt.green,n.fillText(b,e-40,f+p+52)}Df(n,e,t,xt.cyan)}function xE(n,e,t,i){cd(n,e,t),Fg(n,e,"成本与上下文","COST & CONTEXT",xt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?xt.amber:xt.green),Zs(n,36,122,"累计花费","TOTAL COST"),Ug(n,36,226,i.priced?Tn(i.cost):"—",xt.gold,90),n.font=`600 22px ${Ot}`,n.fillStyle=xt.muted,n.textAlign="left",n.fillText(`高峰 ${Tn(i.costPeak)} · 低谷 ${Tn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=Og(Math.max(.01,...i.costHist)*1.15,pE);kg(n,480,104,e-480-40,200,i.costHist,{color:xt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>Tn(d)}),n.font=`600 17px ${Ot}`,n.fillStyle=xt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;Zs(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Ot}`,n.fillStyle=xt.text,n.fillText(i.window?`${Qt(i.ctx)} / ${Qt(i.window)} · ${Wi(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?xt.red:i.ratio>=.6?xt.amber:xt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*gt(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;Zs(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Ot}`,n.fillStyle=xt.green,n.fillText(i.priced?Tn(i.savings):"—",330,u+2),Zs(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Ot}`,n.fillStyle=xt.text,n.fillText(Wi(i.hitRate),e-36,u+2),Df(n,e,t,xt.gold)}var yE={flow:mE,main:gE,cost:xE};function Bg(n,e,{demo:t=!1}={}){let i=new Yt;i.name="screens";let s=[],r=new vt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),o=ot.screenR;for(let g of hE){let[y,b]=g.px,v=kt(y,b,(L,A,O)=>cd(L,A,O),{anisotropy:8}),w=new Xt({map:v.tex,name:`screen-${g.id}`,toneMapped:!1});w.color.setScalar(1.25);let S=new tt(Ft(We.cx,We.cz,o,g.a0,g.a1,g.y0,g.y1,48,!0),w);S.name=`screen-${g.id}`,S.userData.screenId=g.id,i.add(S);let _=.05/o,M=new tt(Ft(We.cx,We.cz,o+.015,g.a0-_,g.a1+_,g.y0-.05,g.y1+.05,48,!0),r);M.name=`screen-bezel-${g.id}`,M.layers.set(ln),i.add(M),s.push({def:g,tex:v,sig:"",draw:yE[g.id],panel:S})}let a=new Array(Dg).fill(0),l=new Array(Ng).fill(0),c=0,u=0,d=0,h=0,p=0,f=!1;function x(g){let y=g.state,b=g.live||{},v=b.phase&&b.phase!=="idle"?b.phase:y?y.phase:"idle",w=y?y.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},S=y?od(y):{hitRate:0,toolSuccess:1,contextRatio:0},_=y?y.turns:[];return{demo:t,phase:v,tps:g.tps||0,peakTps:h,tpsHist:a,costHist:l,totals:w,hitRate:S.hitRate,toolSuccess:S.toolSuccess,model:y?y.model:"",effort:y?y.effort:"",turn:y?y.turnCount:0,ok:_.filter(M=>M.status==="ok").length,rework:_.filter(M=>M.status==="rework").length,calls:y?y.tools.calls:0,running:y?y.tools.running:0,files:y?y.files.count:0,added:y?y.files.added:0,removed:y?y.files.removed:0,requests:w.requests,recent:y?y.calls:[],peak:!!g.peak,priced:!y||!y.model||!!Es(y.provider,y.model),cost:w.cost,costPeak:w.costPeak,costOff:w.costOffPeak,savings:w.savings,ctx:y?y.contextTokens:0,window:y?y.contextWindow:0,ratio:S.contextRatio||0}}function m(g,y){if(g==="flow"){let b=y.totals;return`${y.phase}|${Math.round(y.tps*2)}|${b.miss+b.write}|${b.hit}|${b.output}|${b.reasoning}|${b.requests}|${p>0?c:"flat"}|${Math.round(y.peakTps)}`}if(g==="main"){let b=y.recent[y.recent.length-1];return`${y.model}|${y.effort}|${y.phase}|${y.turn}|${y.ok}|${y.rework}|${y.calls}|${y.running}|${y.files}|${y.added}|${y.removed}|${y.requests}|${y.recent.length}|${b?`${b.id}:${b.status}`:""}|${Math.round(y.toolSuccess*1e3)}`}return`${y.cost.toFixed(5)}|${y.costPeak.toFixed(5)}|${y.savings.toFixed(5)}|${y.ctx}|${y.window}|${y.peak}|${y.requests}|${l[Ng-1].toFixed(5)}|${Math.round(y.hitRate*1e3)}`}return{root:i,update(g,y,b){c+=g,u+=g,d+=g;let v=b.tps||0;h=Math.max(h,v),c>=.5&&(c=0,a.shift(),a.push(v),p=v>.5?Dg:Math.max(0,p-1));let w=b.state?b.state.totals.cost:0;if(!f&&b.state&&(l.fill(w),f=!0),u>=2&&(u=0,l.shift(),l.push(w)),d<.5)return;d=0;let S=x(b);for(let _ of s){let M=m(_.def.id,S);M!==_.sig&&(_.sig=M,_.tex.redraw((L,A,O)=>_.draw(L,A,O,S)))}},reset(){a.fill(0),l.fill(0),h=0,p=0,f=!1;for(let g of s)g.sig=""}}}var br=16,vE=.004,Nf=.06,ud=new Fe(4164863),zg=new Fe(4641535),Hg=new Fe(16762218),_E=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${br}];
uniform float uOffset[${br}];
uniform vec3 uColor[${br}];
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
}`,bE=`
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
}`;function ME(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=Nf/2,p=r[0]-u*(s===0?0:h),f=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(Nf/2),y=u*(Nf/2),b=i-(s===0?0:h),v=i+c+(s===n.length-2?0:h),w=[[p-g,f-y,b,-1],[p+g,f+y,b,1],[x+g,m+y,v,1],[x-g,m-y,v,-1]];for(let S of[0,1,2,0,2,3]){let _=w[S];t.pos.push(_[0],vE,_[1]),t.s.push(_[2]),t.x.push(_[3]),t.chan.push(e)}i+=c}}var Gg=n=>[n.x,n.z];function Vg(){let n={},e=[],t=[],i=(m,g,y)=>{n[m]=t.length,e.push(g),t.push(y)},s=[as.x,as.z],r=(m,g,y)=>[Gg(Gi(m,g)),Gg(Gi(m,y))];i("fuel",zg,[[-7.45,-.7],[-4.6,-.7]]),i("feed",ud,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,ud,r(xf(m),.95,2.12));i("lock",zg,r(Kr,.95,2.1)),i("unload",Hg,r(jo,.95,2.1)),i("out",Hg,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*Dt;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",ud,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>ME(m,g,a));let l=new zt;l.setAttribute("position",new pt(a.pos,3)),l.setAttribute("aS",new pt(a.s,1)),l.setAttribute("aX",new pt(a.x,1)),l.setAttribute("aChan",new pt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(br),u=new Float32Array(br),d=new Float32Array(br),h=new Float32Array(br),p=[];for(let m=0;m<br;m++)p.push((e[m]||ud).clone());let f=new sn({name:"floor-channels",vertexShader:_E,fragmentShader:bE,uniforms:Pu.merge([Je.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:p}}]),transparent:!0,blending:Bo,blendSrc:hr,blendDst:fr,blendSrcAlpha:zc,blendDstAlpha:hr,depthWrite:!1,fog:!0});f.uniforms.uLevel.value=c,f.uniforms.uOffset.value=u,f.uniforms.uColor.value=p;let x=new tt(l,f);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(ln),d.fill(.8),{root:x,ids:n,set(m,g,y){let b=n[m];b!=null&&(h[b]=g,y!=null&&(d[b]=y))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var Of=new R(We.cx,0,We.cz-17),Ci={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},It=Ci.h,SE=[{id:"sofa",pose:"sit",p:[-1.2,It+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,It+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,It+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,It+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,It,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,It,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function wE(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function EE(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Dt),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Dt;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Dt),n.fill()}}function TE(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${Gt}`,n.textBaseline="top",n.fillText(`${Zt.living.code} · ${Zt.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${Gt}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${Ot}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function Wg(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function _l(n,e,t,i,s,r=0){let o=new Yt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new tt(new Ht(e,t,i),Xg);return a.position.y=t/2,o.add(a),o}var Xg=new Xt({visible:!1});function qg(n){let e=new Yt;e.name="living",e.position.copy(Of);let t=kt(512,512,wE,{repeat:[3,2],anisotropy:8}),i=kt(512,512,EE,{anisotropy:8}),s={wood:new vt({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new vt({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new vt({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new vt({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new vt({name:"living-rug",map:i.tex,roughness:1}),leaf:new vt({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new vt({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new vt({name:"living-soil",color:3811870,roughness:1}),sand:new vt({name:"living-sand",color:14272931,roughness:.95}),rice:new vt({name:"living-rice",color:16513264,roughness:.7}),eye:new vt({name:"living-eye",color:1118999,roughness:.3}),bookA:new vt({name:"living-book-a",color:4020904,roughness:.7}),bookB:new vt({name:"living-book-b",color:13137466,roughness:.7}),bookC:new vt({name:"living-book-c",color:15327951,roughness:.7}),bookD:new vt({name:"living-book-d",color:3111538,roughness:.7}),warm:cf(16766624,2.8),cyan:cf(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new ht,o=(N,X,ae=[0,0,0],J=[0,0,0],de=[1,1,1])=>r.add(N,P(X,ae,J,de)),a=Ci.x1-Ci.x0,l=Ci.z1-Ci.z0;o("wood",Le(a,Ci.h,l,.02,2),[0,Ci.h/2,0]),o("warm",Te(a-.1,.006,.012),[0,.004,Ci.z0-.004]),o("warm",Te(a-.1,.006,.012),[0,.004,Ci.z1+.004]),o("rug",new Sn(1.85,64),[-1.2,It+.004,-.35],[-Math.PI/2,0,0]);{let N=[-1.2,It,.9],X=(J,de,xe)=>[N[0]+J,N[1]+de,N[2]+xe];o("fabric",Le(3,.28,.95,.08,3),X(0,.22,0));for(let J of[-1,0,1])o("fabric",Le(.97,.16,.8,.07,3),X(J,.44,-.06)),o("fabric",Le(.97,.44,.2,.09,3),X(J,.68,.36),[-.14,0,0]);for(let J of[-1.6,1.6])o("fabric",Le(.2,.5,.95,.08,3),X(J,.33,0));o("fabricBlue",Le(.5,.36,.14,.06,3),X(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Le(.5,.36,.14,.06,3),X(.35,.66,.2),[-.3,-.2,0]);for(let J of[-1.42,1.42])for(let de of[-.38,.38])o("chrome",le(.025,.02,.08,10),X(J,.04,de));o("warm",Te(2.7,.004,.7),X(0,.002,0));let ae=X(.92,.6,-.05);o("blue",Bi(1,20,14),ae,[0,.3,0],[.24,.17,.16]),o("white",Bi(1,16,10),[ae[0]+.02,ae[1]-.05,ae[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",Bi(1,12,8),[ae[0]-.26,ae[1]+.07,ae[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",Bi(1,10,8),[ae[0]+.05,ae[1]-.02,ae[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",Bi(.016,10,8),[ae[0]+.16,ae[1]+.03,ae[2]-.12]),o("eye",Bi(.016,10,8),[ae[0]+.2,ae[1]+.03,ae[2]+.03])}{let N=[-1.2,It,-.7];o("white",le(.52,.52,.035,48),[N[0],N[1]+.4,N[2]]),o("chrome",le(.05,.08,.36,20),[N[0],N[1]+.2,N[2]]),o("chrome",le(.28,.3,.025,32),[N[0],N[1]+.012,N[2]]);let X=[N[0]+.16,N[1]+.418,N[2]+.08];o("white",Ti([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),X),o("rice",Bi(1,20,10),[X[0],X[1]+.05,X[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Te(.22,.008,.008),[X[0]+.02,X[1]+.08,X[2]-.02],[0,.3,.12]),o("woodDark",Te(.22,.008,.008),[X[0]+.02,X[1]+.08,X[2]+.01],[0,.2,.12]),o("blue",le(.038,.034,.09,20),[N[0]-.22,N[1]+.462,N[2]-.12])}{let N=[-3.15,It,1.45];o("chrome",le(.2,.22,.04,32),[N[0],N[1]+.02,N[2]]),r.add("chrome",Qn([[N[0],N[1]+.04,N[2]],[N[0],N[1]+1.95,N[2]],[-2.3,It+2.3,1.05],[-1.7,It+2.05,.6]],.016,.35,10)),o("white",new wn(.24,28,12,0,Dt,0,Math.PI/2),[-1.7,It+1.86,.6]),o("warm",new Sn(.21,28),[-1.7,It+1.862,.6],[Math.PI/2,0,0])}{for(let xe of[-3.35,.95])for(let ee of[-2,2])o("white",Le(.09,3,.09,.02),[xe,It+3/2,ee]);for(let xe of[-2,2])o("white",Le(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,It+3,xe]);for(let xe of[-3.35,.95])o("white",Le(.1,.1,4,.02),[xe,It+3,0]);for(let xe=1;xe<6;xe++){let ee=-3.35+4.3*xe/6;o("alu",Te(.05,.06,4-.1),[ee,It+3+.02,0])}for(let xe of[-2+.06,2-.06])o("warm",Te(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,It+3-.056,xe])}{let N=[3.35,It,1.6],X=(J,de,xe)=>[N[0]+J,N[1]+de,N[2]+xe];o("white",Le(2.3,.26,1.4,.1,3),X(0,.23,0)),o("warm",Te(2.1,.004,1.2),X(0,.002,0)),o("fabric",Le(2.12,.17,1.26,.07,3),X(0,.44,0)),o("fabricBlue",Le(1.3,.05,1.28,.03,2),X(.36,.535,0)),o("fabric",Le(.44,.11,.82,.05,3),X(-.78,.58,0)),o("white",Le(.09,.56,1.36,.03,2),X(-1.13,.64,0));let ae=new Nn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",ae,X(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Te(.03,.012,1.22),X(-.45,.36+.725,0))}{o("white",Le(1.85,.86,.62,.03,2),[-3.8,It+.45,2.62]),o("graphite",Te(1.8,.06,.56),[-3.8,It+.03,2.62+.02]),o("wood",Le(1.92,.045,.68,.015,2),[-3.8,It+.905,2.62]),o("ceramic",Le(.7,1.95,.64,.04,2),[-2.5,It+.975,2.62]),o("chrome",Te(.02,.6,.03),[-2.2,It+1.2,2.62-.33]),o("wood",Te(1.8,.04,.28),[-3.8,It+1.72,2.62+.17]);for(let[ae,J,de]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(de,le(.06,.06,J,18),[ae,It+1.74+J/2,2.62+.17]);o("soil",le(.08,.06,.12,16),[-3.2,It+1.8,2.62+.17]),o("leaf2",Bi(.14,12,8),[-3.2,It+1.95,2.62+.17],[0,0,0],[1,.8,1]);let X=[-4,It+.93,2.62-.04];o("white",le(.16,.15,.2,36),[X[0],X[1]+.1,X[2]]),o("graphite",Ti([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[X[0],X[1]+.2,X[2]]),o("chrome",le(.012,.012,.02,10),[X[0]+.05,X[1]+.29,X[2]]),o("graphite",Te(.08,.03,.03),[X[0],X[1]+.29,X[2]-.02]);for(let ae of[-4.4,-3.75])o("fabricBlue",le(.18,.18,.06,28),[ae,It+.66,1.92]),o("chrome",le(.025,.025,.6,12),[ae,It+.33,1.92]),o("chrome",le(.2,.22,.025,28),[ae,It+.012,1.92]),o("chrome",new fi(.16,.012,8,28),[ae,It+.25,1.92],[Math.PI/2,0,0])}let c=qt(4641535,1.6),u=new tt(Te(.035,.012,.006),c);u.position.set(-4,It+1.07,2.42),e.add(u);{let N=[3.4,It,-2.05];o("white",Le(1.6,.04,.72,.015,2),[N[0],N[1]+.74,N[2]]);for(let ae of[-.76,.76])o("white",Le(.04,.72,.64,.015,2),[N[0]+ae,N[1]+.36,N[2]]);o("cyan",Te(1.5,.006,.012),[N[0],N[1]+.718,N[2]-.35]),o("graphite",Le(.48,.02,.16,.008,2),[N[0]-.1,N[1]+.77,N[2]+.12]),o("chrome",le(.012,.014,.3,10),[N[0],N[1]+.91,N[2]-.22]),o("chrome",le(.07,.08,.012,20),[N[0],N[1]+.766,N[2]-.22]);let X=[N[0],N[1],N[2]+.62];o("fabricBlue",Le(.5,.08,.48,.04,2),[X[0],X[1]+.48,X[2]]),o("fabricBlue",Le(.5,.52,.07,.04,2),[X[0],X[1]+.82,X[2]+.24],[.1,0,0]),o("chrome",le(.025,.025,.4,12),[X[0],X[1]+.24,X[2]]);for(let ae=0;ae<5;ae++){let J=ae/5*Dt;o("graphite",Te(.32,.03,.04),[X[0]+Math.cos(J)*.16,X[1]+.04,X[2]+Math.sin(J)*.16],[0,-J,0]),o("rubber",Bi(.025,10,8),[X[0]+Math.cos(J)*.31,X[1]+.025,X[2]+Math.sin(J)*.31])}}let d=Wg(new Date),h=kt(512,288,(N,X,ae)=>TE(N,X,ae,d),{anisotropy:8}),p=new Xt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:Jt});p.color.setScalar(1.3);let f=new tt(new _t(.88,.495),p);f.position.set(3.4,It+1.3,-2.27),f.rotation.x=-.08,f.renderOrder=3,e.add(f);let x=new R(-4,It,-2.05);o("white",le(.5,.53,.36,48),[x.x,x.y+.18,x.z]),o("chrome",le(.48,.48,.03,48),[x.x,x.y+.375,x.z]),o("sand",le(.44,.44,.07,40),[x.x,x.y+.425,x.z]),o("chrome",le(.48,.48,.03,48),[x.x,x.y+1.52,x.z]),o("cyan",new fi(.47,.008,6,64),[x.x,x.y+.4,x.z],[Math.PI/2,0,0]);for(let[N,X,ae,J]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(J,le(.012,.03,ae,6),[x.x+N,x.y+.46+ae/2,x.z+X],[.15,0,.1]);let m=new tt(le(.445,.445,1.05,40),new vt({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(x.x,x.y+.97,x.z),m.renderOrder=1,e.add(m);let g=new tt(le(.47,.47,1.12,48,!0),n.glass);g.position.set(x.x,x.y+.96,x.z),g.renderOrder=2,e.add(g);let y=(()=>{let N=P(new wn(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),X=P(new xs(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),ae=new zt,J=[N,X].map(ee=>ee.toNonIndexed()),de=[],xe=[];for(let ee of J)de.push(...ee.attributes.position.array),xe.push(...ee.attributes.normal.array);ae.setAttribute("position",new pt(de,3)),ae.setAttribute("normal",new pt(xe,3));for(let ee of J)ee.dispose();return N.dispose(),X.dispose(),ae})(),b=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],v=new Dn(y,new vt({name:"living-fish",roughness:.4,metalness:.1}),b.length);v.name="aquarium-fish",v.frustumCulled=!1;let w=new Fe;b.forEach((N,X)=>v.setColorAt(X,w.setHex(N.c))),e.add(v);let S=new Mt,_=new pn,M=new R,L=new R(1,1,1),A=new Jn;function O(N){b.forEach((X,ae)=>{let J=X.ph+N*X.s;M.set(x.x+Math.cos(J)*X.r,x.y+X.y+Math.sin(N*.9+X.ph)*.03,x.z-Math.sin(J)*X.r),A.set(0,J+(X.s>0?Math.PI/2:-Math.PI/2),Math.sin(N*3+ae)*.08),_.setFromEuler(A),S.compose(M,_,L),v.setMatrixAt(ae,S)}),v.instanceMatrix.needsUpdate=!0}O(0);{let N=[.6,It,3.02],X=3.6,ae=.42;o("graphite",Te(X,.9,.03),[N[0],N[1]+.45,N[2]+ae/2-.015]),o("white",Te(X,.04,ae),[N[0],N[1]+.02,N[2]]),o("white",Te(X-.04,.03,ae-.02),[N[0],N[1]+.45,N[2]]),o("white",Le(X+.02,.05,ae+.02,.015,2),[N[0],N[1]+.9,N[2]]);for(let ee of[-X/2+.015,-.9,0,.9,X/2-.015])o("white",Te(.03,.88,ae),[N[0]+ee,N[1]+.45,N[2]]);let J=["bookA","bookB","bookC","bookD"],de=[-X/2+.03,-.885,.015,.915],xe=0;for(let ee=0;ee<2;ee++)de.forEach((ye,De)=>{if((De+ee)%3===2)return;let dt=N[0]+ye+.02,Be=5+(De*3+ee)%5;for(let je=0;je<Be;je++){let ue=.04+xe*7%5*.008,se=(ee?.3:.32)-xe*11%4*.025;o(J[xe%4],Te(ue,se,.24),[dt+ue/2,N[1]+(ee?.465:.04)+se/2,N[2]+.02]),dt+=ue+.004,xe+=1}});o("graphite",Le(.34,.26,.03,.01,2),[N[0]-.9,N[1]+1.055,N[2]+.05]),o("cyan",Te(.3,.22,.002),[N[0]-.9,N[1]+1.055,N[2]+.034]),o("white",le(.09,.07,.14,18),[N[0]+1.1,N[1]+.97,N[2]]),o("leaf",Bi(.15,12,8),[N[0]+1.1,N[1]+1.15,N[2]],[0,0,0],[1,.9,1])}for(let[N,X,ae]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",le(.27*ae,.21*ae,.5*ae,28),[N,It+.25*ae,X]),o("soil",le(.25*ae,.25*ae,.02,24),[N,It+.49*ae,X]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([de,xe,ee,ye],De)=>o(De%2?"leaf2":"leaf",Bi(ye*ae,12,8),[N+de*ae,It+xe*ae,X+ee*ae],[0,0,0],[1,.85,1])),o("woodDark",le(.02*ae,.03*ae,.6*ae,6),[N,It+.75*ae,X]);let U=[-5.35,0,3.4],z=Math.atan2(-.7,.7);o("white",Le(.5,1.4,.12,.03,2),[U[0],.7,U[2]],[0,z,0]),o("cyan",Te(.012,1.3,.13),[U[0]+Math.cos(z)*.26,.7,U[2]-Math.sin(z)*.26],[0,z,0]);let C=Zt.living,Z=rs(C.zh,C.en,C.code),Q=new tt(new _t(.46,.13),kn(Z.tex,.2));Q.position.set(U[0]+Math.sin(z)*.062,1.12,U[2]+Math.cos(z)*.062),Q.rotation.y=z,e.add(Q);let Y=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(Y),e.add(_l("bed",2.4,1.15,1.45,[3.35,0,1.6]),_l("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),_l("aquarium",1.08,1.56,1.08,[x.x,0,x.z]),_l("bookshelf",3.62,.95,.46,[.6,0,3.02]),_l("desk",1.62,1.6,.8,[3.4,0,-2.05]));let G=new tt(new Ht(Ci.x1-Ci.x0,1.2,Ci.z1-Ci.z0),Xg);G.position.set(0,.6,0),G.name="living-hover",e.add(G);let H=SE.map(N=>{let X=new an;return X.name=`mascot-anchor:${N.id}`,X.position.fromArray(N.p),X.rotation.y=N.yaw,X.userData={mascotAnchor:N.id,pose:N.pose},e.add(X),{id:N.id,pose:N.pose,position:new R().fromArray(N.p).add(Of),yaw:N.yaw}}),K=0;return{root:e,anchors:H,hover:[{id:"living",object:G}],labelAnchor:new R(0,3.55,0).add(Of),update(N,X){if(O(X),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin(X*1.7)),K-=N,K<=0){K=1;let ae=Wg(new Date);ae!==d&&(d=ae,h.redraw())}},dispose(){y.dispose(),v.dispose()}}}var Mr=.3,Uf=.65,AE=Math.PI*2,Qo=.16/ot.screenR,Ff=ot.top+.05,dd=ot.back+.05,$g=.1;function hd(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var Yg=[hd("media-wall",12.36,dd,ot.a0-Qo,ot.a1+Qo,0,Ff),hd("media-modules",11.78,dd,ot.a0-Qo,ot.a1+Qo,0,2.34),hd("media-cap-right",11.78,dd,ot.a0-Qo,ot.a0,0,Ff),hd("media-cap-left",11.78,dd,ot.a1,ot.a1+Qo,0,Ff)],kf=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+AE:t};function fd(n,e,t){n.x=We.cx+t*Math.cos(e),n.z=We.cz-t*Math.sin(e)}var Hn=new R,Kg=new R,Zg=new R,zn=new R;function jr(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-We.cx,s=e.z-We.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=kf(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return Hn.copy(e).applyMatrix4(n.inv),Hn.x>=n.min.x-t&&Hn.x<=n.max.x+t&&Hn.z>=n.min.z-t&&Hn.z<=n.max.z+t&&Hn.y>=n.min.y-t&&Hn.y<=n.max.y+t}function Jg(n,e,t){if(n.kind==="sector"){let u=e.x-We.cx,d=e.z-We.cz,h=Math.max(.001,Math.hypot(u,d)),p=kf(u,d),f=t/h,x=h-(n.r0-t),m=n.r1+t-h,g=h*(p-(n.a0-f)),y=h*(n.a1+f-p),b=n.y1+t-e.y,v=Math.min(x,m,g,y,b);v===x?fd(e,p,Math.max(0,n.r0-t-1e-4)):v===m?fd(e,p,n.r1+t+1e-4):v===g?fd(e,n.a0-(t+1e-4)/h,h):v===y?fd(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}Hn.copy(e).applyMatrix4(n.inv);let s=Hn.x-(n.min.x-t),r=n.max.x+t-Hn.x,o=Hn.z-(n.min.z-t),a=n.max.z+t-Hn.z,l=n.max.y+t-Hn.y,c=Math.min(s,r,o,a,l);c===s?Hn.x=n.min.x-t-1e-4:c===r?Hn.x=n.max.x+t+1e-4:c===o?Hn.z=n.min.z-t-1e-4:c===a?Hn.z=n.max.z+t+1e-4:Hn.y=n.max.y+t+1e-4,e.copy(Hn).applyMatrix4(n.mat)}function RE(n,e,t,i,s){Kg.copy(e).applyMatrix4(n.inv),Zg.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=Kg[a],d=Zg[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,p=(c-u)/d;if(h>p&&([h,p]=[p,h]),r=Math.max(r,h),o=Math.min(o,p),r>o)return 1/0}return r}function jg(n,e,t,i){let s=n.x-We.cx,r=n.z-We.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function Qg(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new Mt,i=new hi,s=r=>{if(r.userData&&r.userData.solid){let o=new Mt().copy(r.matrixWorld).invert(),a=new hi;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(zn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function ex(n=[]){let e=[...Yg,...n],t=[];function i(u,d,h=null){for(let p of e)if(p!==h&&jr(p,u,d))return p;return null}function s(u,d=null){Qh(u,d);for(let h=0;h<4;h++){let p=!1;for(let f of e)jr(f,u,Mr)&&(Jg(f,u,Mr),p=!0);if(!p)return u;Qh(u,d)}return d&&gr(d)&&!i(d,Mr-.001)&&u.copy(d),u}function r(u,d=Uf){for(let h=0;h<3;h++){let p=!1;for(let f of e)f.block==="ray"&&jr(f,u,d)&&(Jg(f,u,d),p=!0);if(!p)break}return u}function o(u,d){let h=1/0;jg(u,d,$n.r,t);for(let p of t)h=Math.min(h,p);return d.y>1e-9?h=Math.min(h,($n.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,($n.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,p=Mr,f=!0){let x=h;if(!(x>0))return 0;let m=0;for(let g=$g;m<x;g+=$g){let y=Math.min(g,x);if(zn.copy(u).addScaledVector(d,y),l(zn,p,u)){let b=m,v=y;for(let w=0;w<7;w++){let S=(b+v)/2;zn.copy(u).addScaledVector(d,S),l(zn,p,u)?v=S:b=S}x=b;break}m=y}if(!f)return Math.max(0,x);zn.copy(u).addScaledVector(d,x);for(let g of e){if(g.block!=="end"||!jr(g,zn,p)||jr(g,u,0))continue;let y=RE(g,u,d,x,p);y<x&&(x=y)}return Math.max(0,x)}function l(u,d,h){for(let p of e)if(p.block==="ray"&&jr(p,u,d)&&!jr(p,h,d))return!0;return!1}function c(u,d,h=200){let p=h;if(d.y<-1e-6){let f=-u.y/d.y;f>0&&f<p&&(zn.copy(u).addScaledVector(d,f),_m(zn.x,zn.z)<0&&vm(zn.x,zn.z)>0&&(f=(-Pt.depth-u.y)/d.y),f>0&&f<p&&(p=f))}if(d.y>1e-6){let f=(We.h-u.y)/d.y;f>0&&f<p&&(p=f)}for(let f of[We.r,ot.screenR,ot.back]){jg(u,d,f,t);for(let x of t)if(!(x>=p)){if(zn.copy(u).addScaledVector(d,x),f!==We.r){let m=kf(zn.x-We.cx,zn.z-We.cz);if(m<ot.a0||m>ot.a1||zn.y<0||zn.y>ot.top)continue}else if(zn.y<0||zn.y>We.h)continue;p=x}}return p<h?p:1/0}return{get solids(){return e},setObjects(u){e=[...Yg,...u||[]]},contains:(u,d=Mr)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var CE={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},PE={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},IE=.15;function LE(n,e){n.updateMatrixWorld(!0);let t=new Ni,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(ln),i+=1))}),i}var DE=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5];function tx(n,e,{environment:t=!0,demo:i=!1,look:s=yr,brightness:r=dn.initial}={}){let o=new Lr;o.background=null;let a=uf(s),l=gt(r,dn.min,dn.max),c=t?n:null,u=PE[e]||null,d=c?u:null,h=d?Em(c,d):null,{M:p,tex:f}=pm(e),x=Gm(p,f,e,{renderer:c,look:a,reflection:h,beamTarget:new R(hn.x,3,hn.z)});function m(){o.environment=x.envTexture,o.environmentIntensity=a.envIntensity}m();let g=Mg(f),y=jm(p),b=ag(p),v=gg(p),w=xg(p,g),S=wg(p),_=bg(p,S),M=Bg(p,null,{demo:i}),L=Vg(),A=qg(p),O=new Yt;O.name="wafers",o.add(x.root,L.root,M.root,y.root,b.root,v.root,w.root,_.root,A.root,g.root,O);let U=Ag({cell:v,stations:w,stocker:_,engine:b,wafers:S,root:O}),z=u?LE(o,IE):0,C={frame:0,matrix:new Mt,proj:new Mt,ready:!1},Z=Qg(o),Q=[];for(let ue of[...y.hover,...b.hover,...v.hover,...w.list.flatMap(se=>se.hover),..._.hover,...A.hover])ue.object.userData.hoverId=ue.id,Q.push(ue.object);let Y=[{id:"tank",anchor:y.anchors.tank},{id:"engine",anchor:b.anchors.engine},{id:"robot",anchor:v.anchors.robot.clone().setY(1.75)},...w.list.map(ue=>({id:`station:${ue.kind}`,anchor:ue.anchor})),{id:"loadport",anchor:_.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:_.anchors.stocker.clone().setY(1.25)},{id:"living",anchor:A.labelAnchor}],G={phase:"idle",tps:0,balance:null,currency:"CNY"},H={state:null,live:G,tps:0,peak:!1},K={activity:0,tps:0,model:"",phase:"idle"},N=null,X=0,ae=!1,J=0,de=0,xe=0,ee=1,ye=Ks(Date.now());function De(){ye=Ks(Date.now());let ue=N?Es(N.provider,N.model):null,se=typeof G.balance=="number"?G.balance:null,k=G.currency==="USD"?"$":"¥",V=[i?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(se==null)V.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),V.push({text:"余额不可用 · balance unavailable",size:28,color:"#8c97ad",gap:56});else{V.push({text:`${k} ${se.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let ie=G.currency==="USD"?0:id(se,ue,ye);V.push({text:ue&&ie?`≈ ${Qt(ie)} tokens · ${ue.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}V.push({text:ye?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:ye?"#ffb020":"#34d17a",weight:700,gap:72}),y.setReadout(V)}function dt(){let ue=typeof G.balance=="number"?G.balance:null;if(ue==null)return .5;J=Math.max(J,ue);let se=DE.find(k=>k>=J*1.25)||J*1.25;return gt(ue/se,0,1)}function Be(ue,se,k){let V=U.activity();L.set("fuel",.1+.9*se,.7+de/28),L.set("feed",V.inbound>0?1:.1+.55*se,1.5),L.set("lock",V.inbound>0?.9:.08,-1.4);for(let ie of w.list)L.set(`spoke:${ie.index}`,ie.active?1:.06,1.2);L.set("unload",V.outbound>0?.9:.08,1.4),L.set("out",V.outbound>0||V.stocker?.9:.08,1.4),L.set("ring",V.robot?.75:k!=="idle"?.4:.22,.8),L.update(ue)}function je(ue){return ue==="reasoning"||ue==="generating"||ue==="thinking"?.35+.65*gt(de/70,0,1):ue==="tool"?.2:0}return{scene:o,key:x.key,presets:CE,labelAnchors:Y,solids:Z,mascotAnchors:A.anchors,get post(){return{...a.post,exposure:a.exposure*l}},getLook:()=>a.id,setLook(ue){let se=uf(ue);return se===a?!1:(a=se,x.setLook(a),m(),!0)},getBrightness:()=>l,setBrightness(ue){l=gt(Number(ue)||dn.initial,dn.min,dn.max)},setState(ue){ue&&(N&&ue.tools.errors>X&&(ae=!0),X=ue.tools.errors,N=ue,U.sync(ue),ee=Math.max(ee,.45))},setLive(ue){ue&&Object.assign(G,ue)},busy(){return U.busy()||G.phase&&G.phase!=="idle"||de>1},update(ue,se){de=Kt(de,G.tps||0,6,ue),ee+=ue,ee>=.5&&(ee=0,De());let k=N?N.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},V=G.phase&&G.phase!=="idle"?G.phase:N?N.phase:"idle",ie=de>.5?gt(.2+de/90,0,1):0;xe=Kt(xe,je(V),1.6,ue),K.activity=xe,K.tps=de,K.model=N?N.model:"",K.phase=V,x.update(ue,se,K),y.update(ue,se,{level:dt(),flow:ie,peak:ye}),b.update(ue,se,{phase:V,tps:de,ctx:N&&N.contextWindow>0?N.contextTokens/N.contextWindow:0,counters:{miss:k.miss,hit:k.hit,output:k.output,reasoning:k.reasoning,cost:k.cost},errorPulse:ae}),ae=!1,U.update(ue,se),g.update(ue),A.update(ue,se),Be(ue,ie,V),H.state=N,H.tps=de,H.peak=ye,M.update(ue,se,H)},prerender(ue){!h||(C.frame+=1,(C.ready&&C.matrix.equals(ue.matrixWorld)&&C.proj.equals(ue.projectionMatrix)||d.every>1)&&C.ready&&C.frame%2===1)||(h.update(o,ue),C.matrix.copy(ue.matrixWorld),C.proj.copy(ue.projectionMatrix),C.ready=!0)},reflectionInfo:()=>u?{...u,trimmed:z,active:!!h}:null,hoverTargets(){return _.hoverObjects(Q.slice())},focus:ue=>U.focus(ue),stats:()=>U.stats(),dispose(){U.dispose(),_.dispose(),A.dispose(),x.dispose(),hm(o),S.dispose(),h&&h.dispose();for(let ue of Object.values(p))ue&&ue.dispose&&ue.dispose();for(let ue of Object.values(f))ue&&ue.dispose&&ue.dispose()}}}var NE=new Gs(-1,1,1,-1,0,1),Bf=class extends zt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},OE=new Bf,pd=class{constructor(e){this._mesh=new tt(OE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var FE=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,UE=`
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
}`,kE=`
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
}`,BE=`
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
}`,zE=`
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
}`;function nx(n,e,t={}){let i=new Zn(Math.max(1,n),Math.max(1,e),{type:pi,minFilter:vn,magFilter:vn,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function md(n,e,t={}){return new No({vertexShader:FE,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function ix(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new pd(null),r=nx(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(nx(2,2));let a=md(UE,{tSrc:{value:null},uTexel:{value:new Se},uThreshold:{value:1},uKnee:{value:.45}}),l=md(kE,{tSrc:{value:null},uTexel:{value:new Se}}),c=md(BE,{tSrc:{value:null},uTexel:{value:new Se},uWeight:{value:1}},{blending:qn,transparent:!0}),u=md(zE,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,p){n.setRenderTarget(p),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,p){r.setSize(Math.max(1,h),Math.max(1,p));let f=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(p/2));for(let m of o)m.setSize(f,x),f=Math.max(1,Math.floor(f/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:p,knee:f,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),p!=null&&(a.uniforms.uThreshold.value=p),f!=null&&(a.uniforms.uKnee.value=f),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,p,f=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,p),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=f,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var gd=85*Math.PI/180,HE=1.65,GE=3.2,VE=2.6,WE={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function sx(n,e,t={}){let{keyTarget:i=null,clampPosition:s=ee=>ee,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new Jn(0,0,0,"YXZ"),h=new Set,p=!1,f=new R,x=new R,m=0,g=null,y=null,b=0,v=new R,w=new R,S=new R,_=new R,M=new R,L=new Fr,A=new Se;function O(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function U(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=gt(d.x,-gd,gd),O()}function z(ee){return v.copy(n.position),M.copy(v).add(ee),n.position.copy(M),s(n.position,v),n.position.distanceTo(M)}let C=()=>{b=performance.now(),a&&a()},Z=()=>{o&&o(),C()};function Q(ee){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let ye=ee.button===2||ee.button===0&&ee.shiftKey?"pan":ee.button===0?"look":null;if(ye){g={id:ee.pointerId,x:ee.clientX,y:ee.clientY,mode:ye},y=null;try{e.setPointerCapture(ee.pointerId)}catch{}Z()}}function Y(ee){if(!l||!g||ee.pointerId!==g.id)return;let ye=ee.clientX-g.x,De=ee.clientY-g.y;g.x=ee.clientX,g.y=ee.clientY;let dt=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Be=2.4/dt;c+=ye*Be,u=gt(u+De*Be,-gd,gd),O()}else{let Be=6/dt;S.set(1,0,0).applyQuaternion(n.quaternion),_.copy(S).multiplyScalar(-ye*Be),_.y+=De*Be,z(_)}C()}function G(ee){if(!(!g||ee.pointerId!==g.id)){g=null;try{e.releasePointerCapture(ee.pointerId)}catch{}C()}}function H(ee){if(!l)return;ee.preventDefault();let ye=ee.deltaMode===1?16:ee.deltaMode===2?400:1;m=gt(m+gt(-ee.deltaY*ye*.006,-4,4),-8,8),y=null,Z()}function K(ee){if(!l)return;let ye=e.getBoundingClientRect();A.set((ee.clientX-ye.left)/Math.max(1,ye.width)*2-1,-((ee.clientY-ye.top)/Math.max(1,ye.height))*2+1),n.updateMatrixWorld(),L.setFromCamera(A,n);let{origin:De,direction:dt}=L.ray;if(dt.y>-.02)return;let Be=(r-De.y)/dt.y;if(Be<=0||Be>60)return;let je=new R().copy(dt).multiplyScalar(Be).add(De),ue=je.x-n.position.x,se=je.z-n.position.z,k=Math.hypot(ue,se);k>1.5&&(je.x-=ue/k*1.2,je.z-=se/k*1.2),je.y=r+HE;let V=je.distanceTo(n.position);y={t:0,d:gt(V/6,.45,1.6),p0:n.position.clone(),p1:je},Z()}function N(ee,ye){if(!l||ee.ctrlKey||ee.metaKey||ee.altKey)return;let De=ee.target;if(De&&(De.tagName==="INPUT"||De.tagName==="TEXTAREA"||De.tagName==="SELECT"||De.isContentEditable))return;p=!!ee.shiftKey;let dt=WE[ee.code];dt&&(ee.preventDefault(),ee.stopPropagation(),ye?h.add(dt):h.delete(dt),ye?(y=null,Z()):C())}let X=ee=>N(ee,!0),ae=ee=>N(ee,!1),J=()=>{h.clear(),p=!1},de=ee=>{l&&ee.preventDefault()};e.addEventListener("pointerdown",Q),e.addEventListener("pointermove",Y),e.addEventListener("pointerup",G),e.addEventListener("pointercancel",G),e.addEventListener("wheel",H,{passive:!1}),e.addEventListener("dblclick",K),e.addEventListener("contextmenu",de),i&&(i.addEventListener("keydown",X),i.addEventListener("keyup",ae),i.addEventListener("blur",J));function xe(ee){if(!l)return!1;let ye=!1;if(y){y.t+=ee;let De=ki(Math.min(1,y.t/y.d));_.lerpVectors(y.p0,y.p1,De).sub(n.position),(z(_)>.02||y.t>=y.d)&&(y=null),ye=!0}if(x.set(0,0,0),h.size&&(w.set(-Math.sin(c),0,-Math.cos(c)),S.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(w),h.has("b")&&x.sub(w),h.has("r")&&x.add(S),h.has("l")&&x.sub(S),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(GE*(p?VE:1))),f.set(Kt(f.x,x.x,9,ee),Kt(f.y,x.y,9,ee),Kt(f.z,x.z,9,ee)),f.lengthSq()>1e-6?(z(_.copy(f).multiplyScalar(ee)),ye=!0):f.set(0,0,0),Math.abs(m)>.001){let De=m*(1-Math.exp(-9*ee));m-=De,n.getWorldDirection(w),z(_.copy(w).multiplyScalar(De))>.02&&(m=0),ye=!0}else m=0;return ye&&C(),ye}return{get enabled(){return l},enable(){l=!0,U()},disable(){l=!1,g=null,y=null,h.clear(),f.set(0,0,0),m=0},sync:U,active(){return l&&(!!g||!!y||h.size>0||Math.abs(m)>.001||f.lengthSq()>1e-4||performance.now()-b<300)},update:xe,dispose(){e.removeEventListener("pointerdown",Q),e.removeEventListener("pointermove",Y),e.removeEventListener("pointerup",G),e.removeEventListener("pointercancel",G),e.removeEventListener("wheel",H),e.removeEventListener("dblclick",K),e.removeEventListener("contextmenu",de),i&&(i.removeEventListener("keydown",X),i.removeEventListener("keyup",ae),i.removeEventListener("blur",J))}}}var zf=["orbit","look"],Qr=["low","medium","high","ultra"],ea=["auto",30,60,120,0],bl={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},XE=60,qE=30,rx=150*(Math.PI/180),$E=.8,ox=30,YE=.45,KE=.0013,ZE=14,JE=7,jE=.25,QE=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,e2=/swiftshader|llvmpipe|softpipe|software|basic render/i;function t2(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(e2.test(t))return"low";if(QE.test(t))return"high"}catch{}return"medium"}function n2(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new zt;return t.setAttribute("position",new pt(e,3)),t}function i2(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function ax(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c}=e,u=!!e.demo,d=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new Du({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=t2(h.getContext()),f=bl[e.quality]?e.quality:p,x=ea.includes(e.fps)?e.fps:"auto";h.setClearColor(Hm,1),h.toneMapping=Ya,h.toneMappingExposure=1,h.outputColorSpace=Kn,h.shadowMap.type=Ur,h.shadowMap.autoUpdate=!1,h.info.autoReset=!1,h.debug.onShaderError=(W,Ne,Ee,qe)=>{let et=W.getShaderSource(qe)||"",rt=/#define SHADER_NAME (.*)/.exec(et),Ct=rt&&rt[1].trim()||"shader",li=[W.getShaderInfoLog(Ee),W.getShaderInfoLog(qe),W.getProgramInfoLog(Ne)].map(vd=>(vd||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${Ct}" failed to compile
${li}`);let wl=li.split(`
`).find(vd=>/error/i.test(vd))||li.split(`
`)[0]||"";r&&r("shader",`${Ct}: ${wl}`.slice(0,220))};let m=i2(h.getContext()),g=!1,y=h.domElement;y.className="dwp3d-gl",y.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",y.setAttribute("aria-hidden","true"),n.appendChild(y);let b=document.createElement("div");b.className="dwp3d-labels",n.appendChild(b);let v=new Wn(40,1,.2,9e3),w=new Wn(40,1,.2,9e3);v.layers.enable(ln),w.layers.enable(ln);let S=ex(),_=new Uu(v,y);_.enableDamping=!0,_.dampingFactor=.08,_.minDistance=.5,_.maxDistance=40,_.zoomToCursor=!1,_.maxPolarAngle=rx,_.screenSpacePanning=!0,_.rotateSpeed=.7,_.zoomSpeed=.9,_.panSpeed=.8;let M=null,L=null,A=null,O=n2(),U=null,z=null,C=0,Z=0,Q=1,Y=1,G=null,H="orbit",K=!1,N,X=0,ae=0,J=0,de=new R,xe=new R,ee=[],ye=[],De=!0,dt=!1,Be=!1,je=!1,ue=0,se=0,k=qr.includes(e.look)?e.look:yr,V=gt(Number(e.brightness)||dn.initial,dn.min,dn.max),ie={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function j(){ie.casters.clear(),ie.pending=!1,!(!M||!h.shadowMap.enabled)&&(M.scene.updateMatrixWorld(!0),M.scene.traverse(W=>{W.castShadow&&(W.isMesh||W.isPoints||W.isLine)&&ie.casters.set(W,{m:W.matrixWorld.clone(),v:W.isInstancedMesh?W.instanceMatrix.version:0})}),h.shadowMap.needsUpdate=!0,ie.lastBake=se,ie.bakes+=1)}function ce(){if(!M||!h.shadowMap.enabled||se<ie.next)return;ie.next=se+.5;let W=!1;for(let[Ee,qe]of ie.casters){if(!Ee.castShadow||!wr(Ee)){ie.casters.delete(Ee),W=!0;continue}(!Ee.matrixWorld.equals(qe.m)||Ee.isInstancedMesh&&Ee.instanceMatrix.version!==qe.v)&&(Ee.castShadow=!1,ie.casters.delete(Ee),W=!0)}M.scene.traverse(Ee=>{Ee.castShadow&&!ie.casters.has(Ee)&&(Ee.castShadow=!1)}),W&&(ie.pending=!0);let Ne=ie.bakes<4?.5:2;ie.pending&&se-ie.lastBake>=Ne&&j()}function Ae(){L&&(L.dispose(),L=null),A&&(A.removeFromParent(),A.material.dispose(),A=null),M&&(M.dispose(),M=null),ie.casters.clear(),h.renderLists.dispose()}function F(){let W=bl[f];h.shadowMap.enabled=f!=="low",M=tx(h,f,{demo:u,look:k,brightness:V}),A=new Aa(O,new Po({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),A.name="hover-highlight",A.matrixAutoUpdate=!1,A.frustumCulled=!1,A.renderOrder=20,A.visible=!1,A.layers.set(ln),M.scene.add(A),L=ix(h,{msaa:W.msaa,bloom:W.bloom}),he(),Y=1,me(!0),U&&M.setState(U),z&&M.setLive(z),At(),S.setObjects(M.solids||[]),J=0,ie.bakes=0,ie.next=se+.5,j(),re()}function re(){if(!(!M||typeof h.compileAsync!="function"))try{M.scene.updateMatrixWorld(!0);let W=h.compileAsync(M.scene,w);W&&typeof W.catch=="function"&&W.catch(()=>{})}catch{}}function he(){!L||!M||(M.post&&L.set(M.post),d&&L.set({grain:.006}))}let D=new Se;function Ke(W,Ne,Ee,qe){D.set(W.x-We.cx,W.z-We.cz),D.length()>Ne&&(D.setLength(Ne),W.x=We.cx+D.x,W.z=We.cz+D.y),W.y=gt(W.y,Ee,qe)}function at(W){return Ke(W,$n.targetR,$n.targetYMin,$n.targetYMax),S.keepClear(W,Uf),Ke(W,$n.targetR,$n.targetYMin,$n.targetYMax),W}let yt=new R;function Pe(){let W=_.target;yt.copy(W),at(W),(W.x!==yt.x||W.y!==yt.y||W.z!==yt.z)&&v.position.add(yt.subVectors(W,yt))}function Me(){let W=_.target,Ne=Math.max(.001,v.position.distanceTo(W)),Ee=gt(($n.yMin+.02-W.y)/Ne,-1,1),qe=gt(($n.yMax-.02-W.y)/Ne,-1,1);_.maxPolarAngle=Math.min(rx,Math.acos(Ee)),_.minPolarAngle=Math.min(Math.acos(qe),_.maxPolarAngle)}let ve={len:0,pulled:!1,easing:!1},ze=new R;function I(){ve.len=0,ve.pulled=!1,ve.easing=!1}function E(W){let Ne=!1;if(H==="orbit"&&!G){let Ee=_.target;ze.subVectors(v.position,Ee);let qe=ze.length();if(qe>1e-4){ze.divideScalar(qe);let et=Math.min(qe,S.containerExit(Ee,ze)-.02);et=Math.min(et,S.armLength(Ee,ze,et,Mr)),et=Math.max(et,Math.min(qe,jE)),!ve.pulled||et<ve.len?ve.len=et:ve.len=Math.min(et,Kt(ve.len,et,JE,W)),ve.len>qe-.001&&et>=qe-1e-4&&(ve.len=qe),ve.pulled=ve.len<qe-1e-4,ve.easing=ve.pulled&&et>ve.len+.001,w.position.copy(Ee).addScaledVector(ze,ve.len),Ne=!0}}Ne||(w.position.copy(v.position),I()),w.quaternion.copy(v.quaternion),w.updateMatrixWorld()}function $(){H==="orbit"&&!G&&ve.pulled&&(v.position.copy(w.position),I())}function we(){L&&L.setSize(Math.round(C*Q*Y),Math.round(Z*Q*Y))}function me(W=!1){let Ne=Math.max(1,Math.floor(n.clientWidth)),Ee=Math.max(1,Math.floor(n.clientHeight)),qe=Math.min(typeof window<"u"&&window.devicePixelRatio||1,bl[f].dpr);!W&&Ne===C&&Ee===Z&&qe===Q||(C=Ne,Z=Ee,Q=qe,h.setPixelRatio(qe),h.setSize(Ne,Ee,!1),we(),v.aspect=w.aspect=Ne/Ee,v.updateProjectionMatrix(),w.updateProjectionMatrix(),J=0)}function Oe(W){let Ne=M?M.presets:null,Ee=Ne&&(Ne[W]||Ne.overview)||{pos:[0,7,16],target:[0,2,-1]},qe=new R().fromArray(Ee.target),et=new R().fromArray(Ee.pos),rt=Ee.mode==="look"?"look":"orbit";if(rt==="orbit"){let Ct=gt(1.7/Math.max(.3,v.aspect),1,2.3);et.sub(qe).multiplyScalar(Ct).add(qe),Ke(et,$n.r,$n.yMin,$n.yMax)}return{pos:et,target:qe,mode:rt}}function Ve(W,Ne){let Ee=Ne.x-W.x,qe=Ne.y-W.y,et=Ne.z-W.z;return{yaw:Math.atan2(-Ee,-et),pitch:Math.atan2(qe,Math.hypot(Ee,et))}}let ge=new Jn(0,0,0,"YXZ"),_e=new R;function He(W,Ne){ge.set(Ne,W,0,"YXZ"),v.quaternion.setFromEuler(ge)}function B(W){W!==H&&($(),mn.log=0,H=W,W==="look"?(K=!1,_.enabled=!1,st.enable()):(st.disable(),_.enabled=!0),c&&c(W))}function be(){let W=gr(v.position)==="hall";if(B("orbit"),!W){Ge("overview");return}v.getWorldDirection(_e),at(_.target.copy(v.position).addScaledVector(_e,6)),Me(),_.update(),I()}function fe(W){let{pos:Ne,target:Ee,mode:qe}=Oe(W);if(G=null,B(qe),v.position.copy(Ne),qe==="look"){let et=Ve(Ne,Ee);He(et.yaw,et.pitch),st.sync()}else at(_.target.copy(Ee)),Me(),_.update();I()}function Ge(W,Ne=1.2){if(d){fe(W);return}$(),mn.log=0;let{pos:Ee,target:qe,mode:et}=Oe(W);B(et),ge.setFromQuaternion(v.quaternion,"YXZ");let rt=Ve(Ee,qe);G={t:0,d:Ne,p0:v.position.clone(),p1:Ee,yaw0:ge.y,pitch0:ge.x,yaw1:rt.yaw,pitch1:rt.pitch,target:qe,mode:et}}let Ie=()=>{ue=performance.now()};function ke(){let W=G;if(!W)return;if(G=null,H==="look"){st.sync();return}v.getWorldDirection(_e);let Ne=Math.max(1,v.position.distanceTo(W.target));at(_.target.copy(v.position).addScaledVector(_e,Ne)),I()}_.addEventListener("start",()=>{ke(),Ie()}),_.addEventListener("change",Ie),_.addEventListener("end",Ie);let st=sx(v,y,{keyTarget:n,clampPosition:(W,Ne)=>S.resolve(W,Ne),floorY:0,onStart:()=>{ke(),Ie()},onChange:Ie});function At(){for(let W of ee)W.el.remove();if(ee=[],!!M)for(let W of ye){let Ne=M.labelAnchors.find(et=>et.id===W.id);if(!Ne)continue;let Ee=document.createElement("div");Ee.className="dwp3d-label";let qe=document.createElement("span");if(qe.className="dwp3d-label-title",qe.textContent=W.text,Ee.appendChild(qe),W.sub){let et=document.createElement("span");et.className="dwp3d-label-sub",et.textContent=W.sub,Ee.appendChild(et)}b.appendChild(Ee),ee.push({id:W.id,el:Ee,anchor:Ne.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let pe=new R,nt=[],mt=[];function $e(W){W.shown!==!1&&(W.el.style.opacity="0",W.shown=!1)}function Vt(){if(De){nt.length=0;for(let W of ee){if(pe.copy(W.anchor).project(w),!(pe.z<1&&Math.abs(pe.x)<1.05&&Math.abs(pe.y)<1.05)){$e(W);continue}W.sx=(pe.x*.5+.5)*C,W.sy=(-pe.y*.5+.5)*Z,W.dist=w.position.distanceTo(W.anchor),nt.push(W)}nt.sort((W,Ne)=>W.dist-Ne.dist),mt.length=0;for(let W of nt){W.w||(W.w=W.el.offsetWidth,W.h=W.el.offsetHeight);let Ne={x0:W.sx-W.w/2-3,x1:W.sx+W.w/2+3,y0:W.sy-W.h-3,y1:W.sy+7};if(mt.some(et=>Ne.x0<et.x1&&Ne.x1>et.x0&&Ne.y0<et.y1&&Ne.y1>et.y0)){$e(W);continue}mt.push(Ne);let Ee=gt(1.45-W.dist/24,.3,1).toFixed(2),qe=`translate(${W.sx.toFixed(1)}px, ${W.sy.toFixed(1)}px) translate(-50%, -100%)`;qe!==W.tf&&(W.el.style.transform=qe,W.tf=qe),W.shown!==Ee&&(W.el.style.opacity=Ee,W.shown=Ee)}}}let nn=new Fr;nn.layers.enable(ln);let Yn=new Se,ai=null,Pi=!1,Ts=0,As=null,js=null,An=null,Xi=!1;function _i(W){if(!M)return null;Yn.set(W.x/C*2-1,-(W.y/Z)*2+1),w.updateMatrixWorld(),nn.setFromCamera(Yn,w);let Ne=nn.intersectObjects(M.hoverTargets(),!0);for(let Ee of Ne)for(let qe=Ee.object;qe;qe=qe.parent)if(qe.userData&&qe.userData.hoverId)return{id:qe.userData.hoverId,obj:qe,distance:Ee.distance};return null}let mn={log:0,anchor:new R,anchored:!1},us=new R;function to(W){let Ne=_i(W),Ee=nn.ray,qe=S.surfaceHit(Ee.origin,Ee.direction);return Ne&&Ne.distance<qe&&(qe=Ne.distance),Number.isFinite(qe)?(mn.anchor.copy(Ee.origin).addScaledVector(Ee.direction,qe),!0):!1}function Qs(W){if(!mn.log)return;let Ne=mn.log*(1-Math.exp(-ZE*W));Math.abs(mn.log-Ne)<.001&&(Ne=mn.log),mn.log-=Ne;let Ee=_.target,qe=v.position,et=Math.max(.001,qe.distanceTo(Ee)),rt=Math.exp(Ne);if(Ne<0){let Ct=mn.anchored?mn.anchor:Ee;if(rt=Math.max(rt,$E/et,YE/Math.max(.001,qe.distanceTo(Ct))),rt>=1){mn.log=0;return}qe.sub(Ct).multiplyScalar(rt).add(Ct),Ct!==Ee&&Ee.sub(Ct).multiplyScalar(rt).add(Ct)}else{us.subVectors(qe,Ee).divideScalar(et);let Ct=S.containerExit(Ee,us)-.02,li=S.armLength(Ee,us,Math.min(ox,Ct),Mr,!1);if(rt=Math.min(rt,ox/et,Math.max(1,(li+.5)/et)),rt<=1){mn.log=0;return}qe.sub(Ee).multiplyScalar(rt).add(Ee)}}let Ii=W=>{if(H!=="orbit"||!M||!_.enabled)return;W.preventDefault(),W.stopPropagation();let Ne=W.deltaMode===1?16:W.deltaMode===2?400:1,Ee=gt(W.deltaY*Ne*KE,-.6,.6);Ee&&(ke(),Ie(),mn.log&&Math.sign(Ee)!==Math.sign(mn.log)&&(mn.log=0),Ee<0&&($(),mn.anchored=!K&&to(er(W))),mn.log=gt(mn.log+Ee,-1.2,1.2))};n.addEventListener("wheel",Ii,{passive:!1,capture:!0});let er=W=>{let Ne=y.getBoundingClientRect();return{x:W.clientX-Ne.left,y:W.clientY-Ne.top}},Re=W=>{ai=er(W),Pi=!0,An&&Math.hypot(ai.x-An.x,ai.y-An.y)>5&&(Xi=!0)},St=()=>{ai=null,Pi=!0},In=W=>{An={...er(W),t:performance.now()},Xi=!1,Ie(),y.style.cursor="grabbing"},ds=W=>{let Ne=er(W);if(H==="orbit"&&An&&!Xi&&performance.now()-An.t<450&&i){let Ee=_i(Ne);i(Ee?Ee.id:null)}An=null,Xi=!1,Pi=!0,Ie(),y.style.cursor=As?"pointer":"grab"};y.addEventListener("pointermove",Re),y.addEventListener("pointerleave",St),y.addEventListener("pointerdown",In),y.addEventListener("pointerup",ds);function wr(W){let Ne=W;for(;Ne.parent;)Ne=Ne.parent;return!!M&&Ne===M.scene}let hs=new R,T=new R,q=new pn,ne=new Mt,te=new hi;function oe(W){if(!A)return;let Ne=js;if(!Ne||!wr(Ne)){A.visible=!1;return}Ne.updateWorldMatrix(!0,!1),Ne.geometry?(Ne.geometry.boundingBox||Ne.geometry.computeBoundingBox(),Ne.geometry.boundingBox.getSize(hs),Ne.geometry.boundingBox.getCenter(T),hs.multiplyScalar(1.06).addScalar(.03),ne.compose(T,q.identity(),hs),A.matrix.multiplyMatrices(Ne.matrixWorld,ne)):(te.setFromObject(Ne),te.getSize(hs).multiplyScalar(1.06).addScalar(.03),te.getCenter(T),A.matrix.compose(T,q.identity(),hs)),A.matrixWorldNeedsUpdate=!0,A.material.opacity=d?.85:.62+.28*(.5+.5*Math.sin(W*5)),A.visible=!0}function Xe(){return x!=="auto"?x:!!G||K||!!An||!!mn.log||ve.easing||st.active()||performance.now()-ue<900||M&&M.busy()?XE:qE}let Qe=0,Ue=!1,Ze=0,lt=0,Et=0,it={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},ct=!0,Ut=typeof document>"u"||!document.hidden;function gn(){it.frames=0,it.ticks=0,it.t=0,it.capTime=0,it.cpu=0}function on(){let W=it.frames/it.t,Ne=it.ticks/it.t,Ee=it.capTime/it.t,qe=Math.max(1,Math.min(Ee>0?Ee:Ne,Ne)),et=W<qe*.85,rt=bl[f];et?(it.good=0,it.slow+=1,it.slow>=2&&Y>rt.minScale&&(Y=Math.max(rt.minScale,Math.round((Y-.1)*100)/100),it.slow=0,we())):(it.slow=0,W>=qe*.95&&(it.good+=1),it.good>=5&&Y<1&&(Y=Math.min(1,Math.round((Y+.05)*100)/100),it.good=0,we())),m.poll(),s&&s({fps:W,target:qe,slow:et,scale:Y,minScale:rt.minScale,cpuMs:it.frames?it.cpu/it.frames:0,gpuMs:g?m.take():null,gpuTimer:m.supported,calls:it.calls,triangles:it.tris,width:Math.round(C*Q*Y),height:Math.round(Z*Q*Y),cap:x}),gn()}function en(W){if(!Ue)return;Qe=requestAnimationFrame(en);let Ne=Math.max(0,(W-Ze)/1e3);Ze=W,it.ticks+=1,it.t+=Ne;let Ee=Xe();if(it.capTime+=Ee*Ne,it.t>=1&&on(),Ee>0){let rt=1e3/Ee,Ct=W-lt;if(Ct<rt-1.5)return;lt=Ct<rt*2?lt+rt:W}else lt=W;let qe=performance.now(),et=Math.min(.1,Math.max(0,(W-Et)/1e3));if(Et=W,se+=et,G){G.t+=et;let rt=ki(Math.min(1,G.t/G.d));if(v.position.lerpVectors(G.p0,G.p1,rt),He(dm(G.yaw0,G.yaw1,rt),Ei(G.pitch0,G.pitch1,rt)),G.t>=G.d){let Ct=G;G=null,Ct.mode==="look"?st.sync():_.target.copy(Ct.target)}}else if(K&&M){if(X-=et,X<=0){X=.4;let rt=M.focus(de);rt||de.fromArray(M.presets.overview.target),rt!==N&&(N=rt,ae=1.6,o&&o(rt))}if(xe.subVectors(v.position,_.target),_.target.lerp(de,1-Math.exp(-2.4*et)),ae>0){if(ae-=et,!J){let rt=Oe("overview");J=rt.pos.distanceTo(rt.target)}xe.setLength(Kt(xe.length(),N?6.8:J,2,et))}v.position.copy(_.target).add(xe)}if(G||(H==="orbit"?(Qs(et),Me(),_.update(),Pe()):st.update(et)),E(et),M&&M.update(et,se,w),Ts-=et,Pi&&Ts<=0){Ts=.08,Pi=!1;let rt=ai&&!An?_i(ai):null,Ct=rt?rt.id:null;js=rt?rt.obj:null,An||(y.style.cursor=Ct?"pointer":"grab"),(Ct||As)&&(As=Ct,t&&t(Ct?{id:Ct,x:ai.x,y:ai.y}:null))}oe(se),ce(),h.info.reset(),g&&m.begin(),L&&M&&(w.updateMatrixWorld(),M.prerender(w),L.render(M.scene,w,d?0:se)),g&&m.end(),it.calls=h.info.render.calls,it.tris=h.info.render.triangles,Vt(),it.frames+=1,it.cpu+=performance.now()-qe,je||(je=!0,l&&l())}function xn(){let W=!dt&&!Be&&ct&&Ut&&C>1&&Z>1;W&&!Ue?(Ue=!0,Ze=lt=Et=performance.now(),gn(),Qe=requestAnimationFrame(en),a&&a(!0)):!W&&Ue&&(Ue=!1,cancelAnimationFrame(Qe),a&&a(!1))}let ut=new ResizeObserver(()=>{me(),xn()});ut.observe(n);let Rn=typeof IntersectionObserver=="function"?new IntersectionObserver(W=>{ct=W.some(Ne=>Ne.isIntersecting),xn()}):null;Rn&&Rn.observe(n);let Wt=()=>{Ut=!document.hidden,xn()};document.addEventListener("visibilitychange",Wt);let fs=W=>{W.preventDefault(),Be=!0,xn(),r&&r("context-lost")},Ln=()=>{Be=!1,Ae(),F(),xn()};y.addEventListener("webglcontextlost",fs),y.addEventListener("webglcontextrestored",Ln);function Er(){if(!dt){dt=!0,Ue=!1,cancelAnimationFrame(Qe),ut.disconnect(),Rn&&Rn.disconnect(),document.removeEventListener("visibilitychange",Wt),y.removeEventListener("pointermove",Re),y.removeEventListener("pointerleave",St),y.removeEventListener("pointerdown",In),y.removeEventListener("pointerup",ds),y.removeEventListener("webglcontextlost",fs),y.removeEventListener("webglcontextrestored",Ln),n.removeEventListener("wheel",Ii,{capture:!0}),_.dispose(),st.dispose();try{m.dispose(),Ae()}finally{O.dispose(),h.dispose(),h.forceContextLoss(),y.remove(),b.remove()}}}try{me(!0),F(),fe("overview")}catch(W){throw Er(),W}return xn(),{setState(W){U=W,M&&M.setState(W)},setLive(W){z={...z||{},...W},M&&M.setLive(W)},getQuality:()=>f,autoQuality:()=>p,setQuality(W){!bl[W]||W===f||(f=W,js=null,Ae(),F())},getFrameCap:()=>x,setFrameCap(W){ea.includes(W)&&(x=W)},getLook:()=>k,setLook(W){!qr.includes(W)||W===k||(k=W,M&&M.setLook(W)&&(he(),j()),Ie())},getBrightness:()=>V,setBrightness(W){V=gt(Number(W)||dn.initial,dn.min,dn.max),M&&(M.setBrightness(V),he()),Ie()},setPerfDetail(W){g=!!W&&m.supported},setCameraPreset(W){K=!1,Ge(W),Ie()},getMode:()=>H,setMode(W){!zf.includes(W)||W===H||(G=null,W==="look"?B("look"):be(),Ie())},setFollow(W){W&&H!=="orbit"&&(gr(v.position)==="hall"?be():fe("overview")),K=!!W,N=void 0,X=0,K&&(G=null)},setLabels(W){ye=Array.isArray(W)?W:[],At()},setLabelsVisible(W){De=!!W,b.style.display=De?"":"none"},stats:()=>M?M.stats():null,dispose:Er}}var Js=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),s2=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:Js(3,"a"),new_string:Js(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:Js(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:Js(6,"c"),new_string:Js(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:Js(4,"v"),new_string:Js(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:Js(2,"b"),new_string:Js(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],Ml={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*r2(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:Ml.provider,model:Ml.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...Ml}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),p=Math.max(3,Math.round(h/.12));for(let f=0;f<p;f++){let x=d*(.82+.36*Math.abs(Math.sin(f*1.7+s)));e.streamed+=u/p,yield{live:{phase:c,tps:x}},yield{wait:h/p}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,p,f,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:p,secs:f,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,p)=>h.secs-p.secs),d=.08*c.length;for(let h of u){let p=Math.max(0,h.secs-d);p>0&&(yield{wait:p}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*o2(n){for(;;)for(let e of s2)yield*r2(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function lx({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=Es(Ml.provider,Ml.model),r=o2(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&td(u.usage);return h&&(i.balance=Math.max(0,i.balance-nd(h,s,Ks(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,p=0;for(;p<u;){let{value:f}=r.next();f.wait?h+=f.wait*1e3*3:f.event&&(d.push(l(f,h)),f.event==="turn/end"&&p++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:p}=r.next();if(p.wait){d.length&&n?.(d),o=setTimeout(u,p.wait*1e3/t);return}p.event?d.push(l(p,Date.now())):p.live&&e?.(c(p.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var cx=`
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
`;var{useEffect:ta,useRef:Gn,useState:En,useReducer:yx,useCallback:xd}=Ce,Sl=!0,Gf="dwp3d.quality",ux="dwp3d.hint",dx="dwp3d.hint.look",a2=["overview","fuel","engine","stations","products","living","balcony"],l2=["raw","normal","gold","bad"],hx={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},fx={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},c2=200,u2=4,yd=3,vx="dwp3d.fps",px="dwp3d.perf",_x="dwp3d.look",bx="dwp3d.brightness";function eo(n){try{return window.localStorage.getItem(n)}catch{return null}}function Sr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function mx(){let n=eo(Gf);return Qr.includes(n)?n:null}function d2(){let n=eo(vx),e=n==null?"auto":Number(n);return ea.includes(e)?e:"auto"}function h2(){return typeof Ce.useId=="function"?Ce.useId():"dwp3d"}function f2(){let n=eo(_x);return qr.includes(n)?n:yr}function p2(){let n=Number(eo(bx));return Number.isFinite(n)&&n>=dn.min&&n<=dn.max?n:dn.initial}function m2(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function g2({t:n,perf:e}){if(!e)return Ce.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},Ce.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),Qt(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return Ce.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>Ce.createElement("div",{key:s,className:"dwp3d-perf-row"},Ce.createElement("span",null,s),Ce.createElement("b",null,r))))}function x2(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":"products":null}function y2(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function v2(n){let[e,t]=yx(i=>i+1,0);return ta(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Vf=(n,e)=>n&&(n[e]||n.en)||"",Hf=(n,e)=>`${Vf(n,e)} · ${n.code}`;function gx(n){let e=t=>({id:t,text:Vf(Zt[t],n),sub:Zt[t].code});return[e("tank"),e("engine"),e("robot"),...Ku.map(t=>({id:`station:${t}`,text:Vf(oi[t],n),sub:oi[t].code})),e("loadport"),e("stocker"),e("living")]}var _2=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework";function xx(n,e){let t=[[n("status."+_2(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:e.files.length})]];for(let s of e.files.slice(0,6))t.push([pf(s.path),`+${s.added} −${s.removed}`]);e.files.length>6&&t.push(["…",`+${e.files.length-6}`]);let i=(e.endedAt||Date.now())-e.startedAt;return t.push(["",n("hover.batchCost",{cost:Tn(e.cost),time:Rg(i)})]),t}function b2(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:Hf(Zt[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:Tn(d)});switch(n){case"tank":{let d=[[t(Sl?"m.balanceDemo":"m.balance"),e.balance==null?t("m.balanceNone"):Tn(e.balance,e.currency)]];return o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${Wi(l.contextRatio)} · ${Qt(i.contextTokens)} / ${Qt(i.contextWindow)}`],[t("row.miss"),Qt(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),Qt(i.totals.write)]),d.push([t("row.hit"),Qt(i.totals.hit)],[t("row.output"),Qt(i.totals.output)],[t("row.reasoning"),Qt(i.totals.reasoning)],[t("row.cost"),Tn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"stocker":{let d=i.turns.filter(p=>p.status!=="running"),h=d.filter(p=>p.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${Hf(Zt.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:xx(t,d)}}default:break}if(n.startsWith("station:")){let d=n.slice(8),h=oi[d];if(!h)return null;let p=i.calls.filter(y=>y.kind===d),f=p.filter(y=>y.status==="running").pop(),x=p[p.length-1],m=[];f?m.push([t("hover.working"),f.label||f.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=p.filter(y=>y.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:Hf(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(p=>p.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?xx(t,h):[]}}return null}function M2({hover:n,data:e,rootRef:t}){let i=b2(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return Ce.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},Ce.createElement("h4",null,i.title),i.body?Ce.createElement("p",null,i.body):null,i.rows.length?Ce.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>Ce.createElement("div",{className:"row",key:h},Ce.createElement("span",null,u),Ce.createElement("span",null,d)))):null)}function S2({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return Ce.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},Ce.createElement("div",{className:"k"},n.k),Ce.createElement("div",{className:"v"},n.v),n.s?Ce.createElement("div",{className:"s"},n.s):null,n.bar!=null?Ce.createElement("div",{className:"dwp3d-bar"},Ce.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function w2({t:n,calls:e}){return Ce.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},Ce.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=fx[t.status]?t.status:"running",s=fx[i],r=oi[t.kind]||oi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return Ce.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},Ce.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),Ce.createElement("span",{className:"dwp3d-sr"},n("call."+i)),Ce.createElement("code",null,r.code),Ce.createElement("span",{className:"l"},o))}):Ce.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function E2({t:n,hintOn:e,hintKey:t,onDismiss:i}){return Ce.createElement("div",{className:"dwp3d-panel dwp3d-legend"},Ce.createElement("div",{className:"dwp3d-legend-row"},Ce.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),l2.map(s=>Ce.createElement("span",{className:"dwp3d-legend-item",key:s},Ce.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?Ce.createElement("div",{className:"dwp3d-hint"},Ce.createElement("span",null,n(t)),Ce.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}var T2=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function Mx(n){let{ctx:e}=n,t=v2(e),i=y2(e),s=n.tBound||n.t,r=xd((Re,St)=>{let In=typeof s=="function"?s(Re):Re,ds=typeof In=="string"&&In?In:Re;return St?Cg(ds,St):ds},[s]),o=Gn(r);o.current=r;let a=Gn(i);a.current=i;let l=Gn(null),c=Gn(null),u=Gn(null),d=Gn(If()),h=Gn({phase:"idle",tps:0,balance:null,currency:"CNY"}),p=Gn(0),f=Gn(!1),x=Gn(!0),m=Gn(0),g=Gn({settle:yd,low:0}),[,y]=yx(Re=>Re+1,0),[b,v]=En(0),[w,S]=En(()=>mx()!=null),_=Gn(w),[M,L]=En(()=>mx()||"medium"),A=Gn(M),[O,U]=En(d2),z=Gn(O),[C,Z]=En(()=>eo(px)==="on"),Q=Gn(C);Q.current=C;let[Y,G]=En(null),[H,K]=En(f2),N=Gn(H),[X,ae]=En(p2),J=Gn(X),[de,xe]=En(!1),ee=h2(),[ye,De]=En("overview"),[dt,Be]=En(!1),[je,ue]=En(!0),se=Gn(je);se.current=je;let[k,V]=En(!0),[ie,j]=En(()=>eo(ux)!=="off"),[ce,Ae]=En(()=>eo(dx)!=="off"),[F,re]=En("orbit"),[he,D]=En(!1),[Ke,at]=En(null),[yt,Pe]=En(!0),[Me,ve]=En(null),[ze,I]=En(null),[E,$]=En(null),we=xd(()=>{p.current||(p.current=setTimeout(()=>{p.current=0,x.current?y():f.current=!0},c2))},[]),me=xd(Re=>{$(Re),clearTimeout(m.current),m.current=setTimeout(()=>$(null),3500)},[]),Oe=xd(Re=>{Qr.includes(Re)&&(A.current=Re,L(Re),g.current={settle:yd,low:0},u.current&&u.current.setQuality(Re))},[]);ta(()=>{let Re=c.current;if(!Re)return;let St=null,In=null,ds=!1,wr=0;Pe(!0),ve(null),I(null),at(null),re("orbit");let hs=ne=>{ve(Ue=>Ue&&Ue.kind==="lost"?null:Ue),Q.current&&G(ne);let te=g.current;if(te.settle>0){te.settle-=1;return}if(_.current)return;let oe=ne&&ne.scale<=ne.minScale+.001;if(te.low=ne&&ne.slow&&oe?te.low+1:0,te.low<u2)return;te.low=0;let Xe=Qr.indexOf(A.current);if(Xe<=0)return;let Qe=Qr[Xe-1];Oe(Qe),me(o.current("quality.downgraded",{q:o.current(`quality.${Qe}`)}))},T=()=>{try{St=ax(Re,{quality:_.current?A.current:"auto",fps:z.current,look:N.current,brightness:J.current,demo:Sl,onHover:at,onSelect:ne=>{let te=x2(ne);!te||!St||(St.setCameraPreset(te),De(te),Be(!1))},onPerf:hs,onError:(ne,te)=>{if(ne==="shader"){I(oe=>oe||String(te||""));return}ne==="context-lost"&&(at(null),ve({kind:"lost"}))},onActive:ne=>{x.current=ne,ne&&f.current&&(f.current=!1,y())},onReady:()=>Pe(!1),onMode:ne=>{re(ne),ne==="look"&&Be(!1)}})}catch(ne){for(;Re.firstChild;)Re.removeChild(Re.firstChild);Pe(!1),ve({kind:"webgl",msg:String(ne&&ne.message||ne)});return}u.current=St,A.current=St.getQuality(),L(A.current),g.current={settle:yd,low:0},St.setLabels(gx(a.current)),St.setLabelsVisible(se.current),St.setPerfDetail(Q.current),In=lx({onEvents:ne=>{d.current=Lf(d.current,ne),St.setState(d.current),we()},onLive:ne=>{h.current={...h.current,...ne},St.setLive(ne),we()}}),d.current=Lf(If(),In.prefill(2)),h.current={phase:"idle",tps:0,balance:In.balance,currency:"CNY"},St.setState(d.current),St.setLive(h.current),In.start(),y()},q=requestAnimationFrame(()=>{wr=requestAnimationFrame(()=>{ds||T()})});return()=>{ds=!0,cancelAnimationFrame(q),cancelAnimationFrame(wr),In&&In.stop(),St&&St.dispose(),u.current=null,clearTimeout(p.current),p.current=0}},[b,Oe,we,me]),ta(()=>()=>clearTimeout(m.current),[]),ta(()=>{u.current&&u.current.setLabels(gx(i))},[i,t]),ta(()=>{u.current&&u.current.setLabelsVisible(je)},[je]),ta(()=>{let Re=()=>D(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",Re),()=>document.removeEventListener("fullscreenchange",Re)},[]);let Ve=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},ge=Re=>{let St=u.current;St&&(St.setCameraPreset(Re),De(Re),Be(!1),St.getMode()==="look"&&Ve())},_e=()=>{let Re=!dt;Be(Re),u.current&&u.current.setFollow(Re)},He=()=>{let Re=l.current;if(!Re)return;let St=()=>me(o.current("error.fullscreen"));try{let In=document.fullscreenElement?document.exitFullscreen():Re.requestFullscreen();In&&typeof In.catch=="function"&&In.catch(St)}catch{St()}},B=Re=>{if(Re==="auto"){Sr(Gf,null),_.current=!1,S(!1),u.current&&Oe(u.current.autoQuality());return}Qr.includes(Re)&&(Sr(Gf,Re),_.current=!0,S(!0),Oe(Re))},be=Re=>{let St=Re==="auto"?"auto":Number(Re);ea.includes(St)&&(z.current=St,U(St),Sr(vx,St==="auto"?null:String(St)),g.current={settle:yd,low:0},u.current&&u.current.setFrameCap(St))},fe=()=>{let Re=!C;Z(Re),Sr(px,Re?"on":null),Re||G(null),u.current&&u.current.setPerfDetail(Re)},Ge=Re=>{qr.includes(Re)&&(N.current=Re,K(Re),Sr(_x,Re===yr?null:Re),u.current&&u.current.setLook(Re))},Ie=Re=>{let St=Math.min(dn.max,Math.max(dn.min,Number(Re)||dn.initial));J.current=St,ae(St),Sr(bx,Math.abs(St-dn.initial)<.001?null:String(St)),u.current&&u.current.setBrightness(St)},ke=()=>{F==="look"?(Sr(dx,"off"),Ae(!1)):(Sr(ux,"off"),j(!1))},st=Re=>{let St=u.current;St&&(St.setMode(Re),re(St.getMode()),Re==="look"&&(Be(!1),Ve()))},At=()=>v(Re=>Re+1),pe=d.current,nt=h.current,mt=od(pe),$e=Es(pe.provider,pe.model),Vt=Ks(Date.now()),nn=nt.phase&&nt.phase!=="idle"?nt.phase:pe.phase,Yn=typeof nt.balance=="number"?nt.balance:null,ai=nt.currency||"CNY",Pi=Yn!=null&&$e&&ai!=="USD"?id(Yn,$e,Vt):0,Ts=pe.turns.filter(Re=>Re.status!=="running"),As=Ts.filter(Re=>Re.status==="ok").length,js=mt.contextRatio>=.8?"#ff5d5d":mt.contextRatio>=.6?"#ffb347":"#4d6bfe",An=nt.tps>.5&&(nn==="generating"||nn==="reasoning")?` · ${r("unit.tps",{n:Math.round(nt.tps)})}`:"",Xi=pe.totals.miss+pe.totals.write,_i=pe.files,mn=[{id:"balance",k:r(Sl?"m.balanceDemo":"m.balance"),v:Yn==null?r("m.balanceNone"):Tn(Yn,ai),s:Pi?r("m.balanceSub",{tokens:Qt(Pi)}):""},{id:"context",k:r("m.context"),v:Wi(mt.contextRatio),s:`${Qt(pe.contextTokens)} / ${Qt(pe.contextWindow)}`,bar:mt.contextRatio,barColor:js,title:r("m.contextTitle",{pct:Wi(mt.contextRatio),used:Qt(pe.contextTokens),window:Qt(pe.contextWindow)})},{id:"input",k:r("m.input"),v:Qt(mt.prompt),s:r("m.inputSub",{rate:Wi(mt.hitRate),miss:Qt(Xi)}),title:r("m.inputTitle",{total:Qt(mt.prompt),hit:Qt(pe.totals.hit),rate:Wi(mt.hitRate),miss:Qt(Xi),write:pe.totals.write>0?r("m.writeNote",{n:Qt(pe.totals.write)}):"",saved:Tn(pe.totals.savings)})},{id:"output",k:r("m.output"),v:Qt(pe.totals.output),s:r("m.outputSub",{n:Qt(pe.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:Tn(pe.totals.cost),s:r("m.costSub",{peak:Tn(pe.totals.costPeak),off:Tn(pe.totals.costOffPeak)}),title:r("m.costTitle",{cost:Tn(pe.totals.cost),requests:pe.totals.requests,peak:Tn(pe.totals.costPeak),off:Tn(pe.totals.costOffPeak),saved:Tn(pe.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(pe.tools.calls),s:r("m.toolsSub",{n:pe.tools.errors,rate:Wi(mt.toolSuccess)}),title:r("m.toolsTitle",{calls:pe.tools.calls,running:pe.tools.running,n:pe.tools.errors})},{id:"products",k:r("m.products"),v:`${_i.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:_i.added,r:_i.removed,ok:As,done:Ts.length}),title:r("m.productsTitle",{n:_i.count,a:_i.added,r:_i.removed,ok:As,done:Ts.length})},{id:"efficiency",k:r("m.efficiency"),v:`${mt.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:Tn(mt.costPerFile)}),title:r("m.efficiencyHint")}],us=pe.calls.slice(-5).reverse(),to={t:r,s:pe,live:nt,lang:i,price:$e,peak:Vt,m:mt,phase:nn,balance:Yn,currency:ai},Qs=!!Me&&Me.kind==="webgl",Ii=!yt&&!Qs,er=w?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+M)});return Ce.createElement("div",{ref:l,className:`dwp3d-root${Qs?" fail":""}`},Ce.createElement("style",null,cx),Ce.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),de?Ce.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>xe(!1)}):null,Ii?Ce.createElement("div",{className:"dwp3d-top"},Ce.createElement("div",{className:"dwp3d-panel dwp3d-title"},Ce.createElement("div",{className:"dwp3d-title-row"},Ce.createElement("h2",null,r("title")),Sl?Ce.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):null,pe.model?Ce.createElement("span",{className:"dwp3d-chip"},`${pe.model}${pe.effort?` · ${pe.effort}`:""}`):null,Ce.createElement("span",{className:"dwp3d-chip"},Ce.createElement("i",{className:"dwp3d-dot",style:{color:hx[nn]||hx.idle},"aria-hidden":"true"}),`${r("phase."+nn)}${An}`)),Sl?Ce.createElement("p",{className:"dwp3d-note"},r("badge.demoHint")):null,ze?Ce.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:ze})):null),Ce.createElement("div",{className:"dwp3d-right"},Ce.createElement("div",{className:"dwp3d-panel dwp3d-tools"},Ce.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},a2.map(Re=>{let St=!dt&&ye===Re;return Ce.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${St?" on":""}`,"aria-pressed":St,onClick:()=>ge(Re)},r("view."+Re))})),Ce.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},zf.map(Re=>Ce.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${F===Re?" on":""}`,title:r(`mode.${Re}Hint`),"aria-pressed":F===Re,onClick:()=>st(Re)},r("mode."+Re)))),Ce.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},Ce.createElement("button",{type:"button",className:`dwp3d-btn${dt?" on":""}`,title:r("ctl.followHint"),"aria-pressed":dt,onClick:_e},r("ctl.follow")),Ce.createElement("button",{type:"button",className:`dwp3d-btn${je?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":je,onClick:()=>ue(Re=>!Re)},r("ctl.labels")),Ce.createElement("button",{type:"button",className:`dwp3d-btn${k?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":k,onClick:()=>V(Re=>!Re)},r("ctl.panels")),Ce.createElement("button",{type:"button",className:`dwp3d-btn${de?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":de,"aria-haspopup":"dialog",onClick:()=>xe(Re=>!Re)},r("ctl.display")),T2()?Ce.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":he,onClick:He},r(he?"ctl.exitFullscreen":"ctl.fullscreen")):null)),de?Ce.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},Ce.createElement("div",{className:"dwp3d-pop-row"},Ce.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),Ce.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},qr.map(Re=>Ce.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${H===Re?" on":""}`,"aria-pressed":H===Re,onClick:()=>Ge(Re)},r("look."+Re))))),Ce.createElement("div",{className:"dwp3d-pop-row"},Ce.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-brightness`},r("ctl.brightness")),Ce.createElement("input",{id:`${ee}-brightness`,className:"dwp3d-range",type:"range",min:dn.min,max:dn.max,step:dn.step,value:X,onChange:Re=>Ie(Re.target.value)}),Ce.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(X*100)}%`),Ce.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(X-dn.initial)<.001,onClick:()=>Ie(dn.initial)},"↺")),Ce.createElement("div",{className:"dwp3d-pop-row"},Ce.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-quality`},r("ctl.quality")),Ce.createElement("select",{id:`${ee}-quality`,className:"dwp3d-select",value:w?M:"auto",onChange:Re=>B(Re.target.value)},Ce.createElement("option",{value:"auto"},er),Qr.map(Re=>Ce.createElement("option",{key:Re,value:Re},r("quality."+Re))))),Ce.createElement("div",{className:"dwp3d-pop-row"},Ce.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ee}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),Ce.createElement("select",{id:`${ee}-fps`,className:"dwp3d-select",value:String(O),title:r("ctl.fpsHint"),onChange:Re=>be(Re.target.value)},ea.map(Re=>Ce.createElement("option",{key:String(Re),value:String(Re)},m2(r,Re))))),Ce.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},Ce.createElement("input",{type:"checkbox",checked:C,onChange:fe}),Ce.createElement("span",null,r("ctl.perfShow")))):null,C?Ce.createElement(g2,{t:r,perf:Y}):null)):null,Ce.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},E?Ce.createElement("div",{className:"dwp3d-panel dwp3d-toast"},E):null),Ii&&k?Ce.createElement("div",{className:"dwp3d-bottom"},Ce.createElement("div",{className:"dwp3d-mid"},Ce.createElement(w2,{t:r,calls:us}),Ce.createElement(E2,{t:r,hintOn:F==="look"?ce:ie,hintKey:F==="look"?"hint.look":"hint.controls",onDismiss:ke})),Ce.createElement("div",{className:"dwp3d-cards"},mn.map(Re=>Ce.createElement(S2,{key:Re.id,card:Re})))):null,Ii&&Ke?Ce.createElement(M2,{hover:Ke,data:to,rootRef:l}):null,yt&&!Me?Ce.createElement("div",{className:"dwp3d-center"},Ce.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},Ce.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,Qs?Ce.createElement("div",{className:"dwp3d-center"},Ce.createElement("div",{className:"dwp3d-fail",role:"alert"},Ce.createElement("h3",null,r("error.webglTitle")),Ce.createElement("p",null,r("error.webgl",{msg:Me.msg})),Ce.createElement("button",{type:"button",onClick:At},r("error.retry")))):null,Me&&Me.kind==="lost"?Ce.createElement("div",{className:"dwp3d-center dim",role:"alert"},Ce.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var A2="work-process-3d",R2={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(Tl,qf),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(Tl);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:A2,order:15,locale:Tl,label:()=>e("tab.label")},t=>Sx.createElement(Mx,{...t,ctx:n,tBound:e})))}};
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
