/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var Mg=Object.create;var sl=Object.defineProperty;var Sg=Object.getOwnPropertyDescriptor;var wg=Object.getOwnPropertyNames;var Eg=Object.getPrototypeOf,Tg=Object.prototype.hasOwnProperty;var Ag=(n,e)=>{for(var t in e)sl(n,t,{get:e[t],enumerable:!0})},mf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of wg(e))!Tg.call(n,s)&&s!==t&&sl(n,s,{get:()=>e[s],enumerable:!(i=Sg(e,s))||i.enumerable});return n};var gf=(n,e,t)=>(t=n!=null?Mg(Eg(n)):{},mf(e||!n||!n.__esModule?sl(t,"default",{value:n,enumerable:!0}):t,n)),Rg=n=>mf(sl({},"__esModule",{value:!0}),n);var Vw={};Ag(Vw,{default:()=>Gw});module.exports=Rg(Vw);var bg=gf(require("react"),1);var rl="dsh-work-process-3d",Cg={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"原型阶段：画面由内置示例会话驱动，数字、文件和命令都是示例，还没有接入本会话。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Pg={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Prototype: a built-in sample session drives the scene. The numbers, files and commands are examples, not this session.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},xf={zh:Cg,en:Pg};var we=gf(require("react"),1);var Xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,Lh=1,lp=2;var br=1,cp=2,yo=3,es=0,Un=1,tn=2,Mr=0,$s=1,Zn=2,Dh=3,Nh=4,vo=5;var Sr=100,up=101,hp=102,dp=103,fp=104,yc=200,Ys=201,pp=202,mp=203,Uh=204,Ks=205,gp=206,xp=207,_p=208,yp=209,vp=210,bp=211,Mp=212,Sp=213,wp=214,Bl=0,kl=1,zl=2,no=3,Hl=4,Gl=5,Vl=6,Wl=7,Fh=0,Ep=1,Tp=2,ts=0,Oh=1,Bh=2,kh=3,zh=4,Hh=5,Gh=6,Ca=7;var Vh=300,wr=301,bo=302,vc=303,bc=304,_s=1e3,Zi=1001,Xl=1002,Tn=1003,Ap=1004;var Pa=1005;var an=1006,Mc=1007;var Bi=1008;var ti=1009,Wh=1010,Xh=1011,Mo=1012,Sc=1013,ki=1014,Mi=1015,Jn=1016,wc=1017,Ec=1018,Er=1020,qh=35902,$h=35899,Yh=1021,Kh=1022,zi=1023,ys=1026,Ts=1027,Tc=1028,Ac=1029,Zs=1030,Rc=1031;var Cc=1033,Ia=33776,La=33777,Da=33778,Na=33779,Pc=35840,Ic=35841,Lc=35842,Dc=35843,Nc=36196,Uc=37492,Fc=37496,Oc=37488,Bc=37489,Ua=37490,kc=37491,zc=37808,Hc=37809,Gc=37810,Vc=37811,Wc=37812,Xc=37813,qc=37814,$c=37815,Yc=37816,Kc=37817,Zc=37818,Jc=37819,jc=37820,Qc=37821,eu=36492,tu=36494,nu=36495,iu=36283,su=36284,Fa=36285,ru=36286;var jo=2300,ql=2301,Fl=2302,vh=2303,bh=2400,Mh=2401,Sh=2402;var Rp=3200;var ou=0,Cp=1,As="",Pn="srgb",Qo="srgb-linear",ea="linear",Ht="srgb";var Ol=7680;var Pp=519,Ip=512,Lp=513,Dp=514,Zh=515,Np=516,Up=517,Jh=518,jh=519,Qh=35044;var ed="300 es",vi=2e3,io=2001;function Ig(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fp(){let n=ta("canvas");return n.style.display="block",n}var _f={},so=null;function na(...n){let e="THREE."+n.shift();so?so("log",e,...n):console.log(e,...n)}function Op(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function dt(...n){n=Op(n);let e="THREE."+n.shift();if(so)so("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function pt(...n){n=Op(n);let e="THREE."+n.shift();if(so)so("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pr(...n){let e=n.join(" ");e in _f||(_f[e]=!0,dt(...n))}function Bp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var kp={[Bl]:Bl,[zl]:Vl,[Hl]:Hl,[no]:Gl,[kl]:kl,[Vl]:zl,[Wl]:Wl,[Gl]:no},Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=1234567,Yo=Math.PI/180,ro=180/Math.PI;function Rs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function td(n,e){return(n%e+e)%e}function Dg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ng(n,e,t){return n!==e?(t-n)/(e-n):0}function Ko(n,e,t){return(1-t)*n+t*e}function Ug(n,e,t,i){return Ko(n,e,1-Math.exp(-t*i))}function Fg(n,e=1){return e-Math.abs(td(n,e*2)-e)}function Og(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function zg(n,e){return n+Math.random()*(e-n)}function Hg(n){return n*(.5-Math.random())}function Gg(n){n!==void 0&&(yf=n);let e=yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vg(n){return n*Yo}function Wg(n){return n*ro}function Xg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $g(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*u,a*c);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function au(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function id(n,e){if(e.constructor===Float32Array)return n;let t=au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function sd(n,e){if(e.constructor===Float32Array)return n;let t=au(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var lu={DEG2RAD:Yo,RAD2DEG:ro,generateUUID:Rs,clamp:Mt,euclideanModulo:td,mapLinear:Dg,inverseLerp:Ng,lerp:Ko,damp:Ug,pingpong:Fg,smoothstep:Og,smootherstep:Bg,randInt:kg,randFloat:zg,randFloatSpread:Hg,seededRandom:Gg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:qg,floorPowerOfTwo:nd,setQuaternionFromProperEuler:$g,normalize:sd,denormalize:id},_e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*x;m<0&&(h=-h,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-a*p,e[t+2]=c*f+u*p+a*h-l*d,e[t+3]=u*f-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ku.copy(this).projectOnVector(e),this.sub(Ku)}reflect(e){return this.sub(Ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ku=new A,vf=new ln,yt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],x=s[0],m=s[3],g=s[6],y=s[1],b=s[4],_=s[7],w=s[2],M=s[5],v=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*b+l*M,r[6]=o*g+a*_+l*v,r[1]=c*x+u*y+d*w,r[4]=c*m+u*b+d*M,r[7]=c*g+u*_+d*v,r[2]=h*x+p*y+f*w,r[5]=h*m+p*b+f*M,r[8]=h*g+p*_+f*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,f=t*d+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zu=new yt,bf=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yg(){let n={enabled:!0,workingColorSpace:Qo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===As?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qo]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:bf,fromXYZ:Mf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:bf,fromXYZ:Mf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),n}var Ct=Yg();function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function to(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Or,$l=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=ta("canvas")),Or.width=e.width,Or.height=e.height;let s=Or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kg=0,oo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ju(s[o].image)):r.push(Ju(s[o]))}else r=Ju(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ju(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$l.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}var Zg=0,ju=new A,qn=class n extends Fi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zi,s=Zi,r=an,o=Bi,a=zi,l=ti,c=n.DEFAULT_ANISOTROPY,u=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Rs(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Vh;qn.DEFAULT_ANISOTROPY=1;var $t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(p+1)/2,w=(g+1)/2,M=(u+h)/4,v=(d+x)/4,S=(f+m)/4;return b>_&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=M/i,r=v/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=M/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=v/r,s=S/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-f)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends Fi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new qn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new oo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=f*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,jg)}lookAt(e,t,i){let s=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ns.crossVectors(i,ai),Ns.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ns.crossVectors(i,ai)),Ns.normalize(),ol.crossVectors(ai,Ns),s[0]=Ns.x,s[4]=ol.x,s[8]=ai.x,s[1]=Ns.y,s[5]=ol.y,s[9]=ai.y,s[2]=Ns.z,s[6]=ol.z,s[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],y=i[3],b=i[7],_=i[11],w=i[15],M=s[0],v=s[4],S=s[8],U=s[12],I=s[1],N=s[5],F=s[9],H=s[13],L=s[2],W=s[6],V=s[10],q=s[14],Y=s[3],Z=s[7],ne=s[11],re=s[15];return r[0]=o*M+a*I+l*L+c*Y,r[4]=o*v+a*N+l*W+c*Z,r[8]=o*S+a*F+l*V+c*ne,r[12]=o*U+a*H+l*q+c*re,r[1]=u*M+d*I+h*L+p*Y,r[5]=u*v+d*N+h*W+p*Z,r[9]=u*S+d*F+h*V+p*ne,r[13]=u*U+d*H+h*q+p*re,r[2]=f*M+x*I+m*L+g*Y,r[6]=f*v+x*N+m*W+g*Z,r[10]=f*S+x*F+m*V+g*ne,r[14]=f*U+x*H+m*q+g*re,r[3]=y*M+b*I+_*L+w*Y,r[7]=y*v+b*N+_*W+w*Z,r[11]=y*S+b*F+_*V+w*ne,r[15]=y*U+b*H+_*q+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],y=l*p-c*h,b=a*p-c*d,_=a*h-l*d,w=o*p-c*u,M=o*h-l*u,v=o*d-a*u;return t*(x*y-m*b+g*_)-i*(f*y-m*w+g*M)+s*(f*b-x*w+g*v)-r*(f*_-x*M+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],y=t*a-i*o,b=t*l-s*o,_=t*c-r*o,w=i*l-s*a,M=i*c-r*a,v=s*c-r*l,S=u*x-d*f,U=u*m-h*f,I=u*g-p*f,N=d*m-h*x,F=d*g-p*x,H=h*g-p*m,L=y*H-b*F+_*N+w*I-M*U+v*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*H-l*F+c*N)*W,e[1]=(s*F-i*H-r*N)*W,e[2]=(x*v-m*M+g*w)*W,e[3]=(h*M-d*v-p*w)*W,e[4]=(l*I-o*H-c*U)*W,e[5]=(t*H-s*I+r*U)*W,e[6]=(m*_-f*v-g*b)*W,e[7]=(u*v-h*_+p*b)*W,e[8]=(o*F-a*I+c*S)*W,e[9]=(i*I-t*F-r*S)*W,e[10]=(f*M-x*_+g*y)*W,e[11]=(d*_-u*M-p*y)*W,e[12]=(a*U-o*N-l*S)*W,e[13]=(t*N-i*U+s*S)*W,e[14]=(x*b-f*w-m*y)*W,e[15]=(u*w-d*b+h*y)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,x=o*u,m=o*d,g=a*d,y=l*c,b=l*u,_=l*d,w=i.x,M=i.y,v=i.z;return s[0]=(1-(x+g))*w,s[1]=(p+_)*w,s[2]=(f-b)*w,s[3]=0,s[4]=(p-_)*M,s[5]=(1-(h+g))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(f+b)*v,s[9]=(m-y)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Br.set(s[0],s[1],s[2]).length(),a=Br.set(s[4],s[5],s[6]).length(),l=Br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Di.copy(this);let c=1/o,u=1/a,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,t.setFromRotationMatrix(Di),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=vi,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===vi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===io)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===vi)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===io)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Br=new A,Di=new bt,Jg=new A(0,0,0),jg=new A(1,1,1),Ns=new A,ol=new A,ai=new A,Sf=new bt,wf=new ln,$n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qg=0,Ef=new A,kr=new ln,hs=new bt,al=new A,Oo=new A,ex=new A,tx=new ln,Tf=new A(1,0,0),Af=new A(0,1,0),Rf=new A(0,0,1),Cf={type:"added"},nx={type:"removed"},zr={type:"childadded",child:null},Qu={type:"childremoved",child:null},jt=class n extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new $n,i=new ln,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new yt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,t){return kr.setFromAxisAngle(e,t),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Rf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?al.copy(e):al.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(Oo,al,this.up):hs.lookAt(al,Oo,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),kr.setFromRotationMatrix(hs),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cf),zr.child=e,this.dispatchEvent(zr),zr.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nx),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cf),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};jt.DEFAULT_UP=new A(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Us={h:0,s:0,l:0},ll={h:0,s:0,l:0};function eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=td(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=eh(o,r,e+1/3),this.g=eh(o,r,e),this.b=eh(o,r,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Pn){function i(r){r!==void 0&&parseFloat(r)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){let i=zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return Ct.workingToColorSpace(zn.copy(this),e),Math.round(Mt(zn.r*255,0,255))*65536+Math.round(Mt(zn.g*255,0,255))*256+Math.round(Mt(zn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(zn.copy(this),t);let i=zn.r,s=zn.g,r=zn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Pn){Ct.workingToColorSpace(zn.copy(this),e);let t=zn.r,i=zn.g,s=zn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Us),this.setHSL(Us.h+e,Us.s+t,Us.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Us),e.getHSL(ll);let i=Ko(Us.h,ll.h,t),s=Ko(Us.s,ll.s,t),r=Ko(Us.l,ll.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new qe;qe.NAMES=zp;var mr=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ni=new A,ds=new A,th=new A,fs=new A,Hr=new A,Gr=new A,Pf=new A,nh=new A,ih=new A,sh=new A,rh=new $t,oh=new $t,ah=new $t,gs=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ni.subVectors(s,t),ds.subVectors(i,t),th.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(ds),l=Ni.dot(th),c=ds.dot(ds),u=ds.dot(th),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fs.x),l.addScaledVector(o,fs.y),l.addScaledVector(a,fs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return rh.setScalar(0),oh.setScalar(0),ah.setScalar(0),rh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rh,r.x),o.addScaledVector(oh,r.y),o.addScaledVector(ah,r.z),o}static isFrontFacing(e,t,i,s){return Ni.subVectors(i,t),ds.subVectors(e,t),Ni.cross(ds).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Ni.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Hr.subVectors(s,i),Gr.subVectors(r,i),nh.subVectors(e,i);let l=Hr.dot(nh),c=Gr.dot(nh);if(l<=0&&c<=0)return t.copy(i);ih.subVectors(e,s);let u=Hr.dot(ih),d=Gr.dot(ih);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Hr,o);sh.subVectors(e,r);let p=Hr.dot(sh),f=Gr.dot(sh);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Gr,a);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return Pf.subVectors(r,s),a=(d-u)/(d-u+(p-f)),t.copy(s).addScaledVector(Pf,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(Hr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),ul.subVectors(this.max,Bo),Vr.subVectors(e.a,Bo),Wr.subVectors(e.b,Bo),Xr.subVectors(e.c,Bo),Fs.subVectors(Wr,Vr),Os.subVectors(Xr,Wr),cr.subVectors(Vr,Xr);let t=[0,-Fs.z,Fs.y,0,-Os.z,Os.y,0,-cr.z,cr.y,Fs.z,0,-Fs.x,Os.z,0,-Os.x,cr.z,0,-cr.x,-Fs.y,Fs.x,0,-Os.y,Os.x,0,-cr.y,cr.x,0];return!lh(t,Vr,Wr,Xr,ul)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,Vr,Wr,Xr,ul))?!1:(hl.crossVectors(Fs,Os),t=[hl.x,hl.y,hl.z],lh(t,Vr,Wr,Xr,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ps=[new A,new A,new A,new A,new A,new A,new A,new A],Ui=new A,cl=new bi,Vr=new A,Wr=new A,Xr=new A,Fs=new A,Os=new A,cr=new A,Bo=new A,ul=new A,hl=new A,ur=new A;function lh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ur.fromArray(n,r);let a=s.x*Math.abs(ur.x)+s.y*Math.abs(ur.y)+s.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var _n=new A,dl=new _e,sx=0,ei=class extends Fi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qh,this.updateRanges=[],this.gpuType=Mi,this.version=0,this._normalizationScale=e!==void 0?au(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix3(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):id(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.array)}};var sa=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ra=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var lt=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}},rx=new bi,ko=new A,ch=new A,Ji=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):rx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);let t=ko.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ko,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(ch)),this.expandByPoint(ko.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ox=0,yi=new bt,uh=new jt,qr=new A,li=new bi,zo=new bi,En=new A,Nt=class n extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?ra:sa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new yt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(li.min,zo.min),li.expandByPoint(En),En.addVectors(li.max,zo.max),li.expandByPoint(En)):(li.expandByPoint(zo.min),li.expandByPoint(zo.max))}li.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)En.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),En.add(qr)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)a[U]=new A,l[U]=new A;let u=new A,d=new A,h=new A,p=new _e,f=new _e,x=new _e,m=new A,g=new A;function y(U,I,N){c[U]=c[I]=c[N]=1,u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,I),h.fromBufferAttribute(i,N),p.fromBufferAttribute(r,U),f.fromBufferAttribute(r,I),x.fromBufferAttribute(r,N),d.sub(u),h.sub(u),f.sub(p),x.sub(p);let F=1/(f.x*x.y-x.x*f.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(F),a[U].add(m),a[I].add(m),a[N].add(m),l[U].add(g),l[I].add(g),l[N].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,I=b.length;U<I;++U){let N=b[U],F=N.start,H=N.count;for(let L=F,W=F+H;L<W;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new A,w=new A,M=new A,v=new A;function S(U){M.fromBufferAttribute(s,U),v.copy(M);let I=a[U];_.copy(I),_.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(v,I);let F=w.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,F)}for(let U=0,I=i.count;U<I;++U)c[U]&&S(U);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,d=new A;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new ei(h,u,d)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qh,this.updateRanges=[],this.version=0,this.uuid=Rs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=If(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=If(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function If(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Rs()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Wn=new A,co=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?au(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyMatrix4(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.applyNormalMatrix(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wn.fromBufferAttribute(this,t),Wn.transformDirection(e),this.setXYZ(t,Wn.x,Wn.y,Wn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):id(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):sd(e,this.data.array)}},hh=new A,ax=new A,lx=new yt,Xn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hh.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||lx.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cx=0,Oi=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=$s,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Ks,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ol,this.stencilZFail=Ol,this.stencilZPass=Ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ji=class extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$r,Ho=new A,Yr=new A,Kr=new A,Zr=new _e,Go=new _e,Hp=new bt,fl=new A,Vo=new A,pl=new A,Lf=new _e,dh=new _e,Df=new _e,vs=class extends jt{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oa(t,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new co(i,3,0,!1)),$r.setAttribute("uv",new co(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),Hp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Kr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ml(fl.set(-.5,-.5,0),Kr,o,Yr,s,r),ml(Vo.set(.5,-.5,0),Kr,o,Yr,s,r),ml(pl.set(.5,.5,0),Kr,o,Yr,s,r),Lf.set(0,0),dh.set(1,0),Df.set(1,1);let a=e.ray.intersectTriangle(fl,Vo,pl,!1,Ho);if(a===null&&(ml(Vo.set(-.5,.5,0),Kr,o,Yr,s,r),dh.set(0,1),a=e.ray.intersectTriangle(fl,pl,Vo,!1,Ho),a===null))return;let l=e.ray.origin.distanceTo(Ho);l<e.near||l>e.far||t.push({distance:l,point:Ho.clone(),uv:gs.getInterpolation(Ho,fl,Vo,pl,Lf,dh,Df,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ml(n,e,t,i,s,r){Zr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Go.x=r*Zr.x-s*Zr.y,Go.y=s*Zr.x+r*Zr.y):Go.copy(Zr),n.copy(e),n.x+=Go.x,n.y+=Go.y,n.applyMatrix4(Hp)}var ms=new A,fh=new A,gl=new A,xl=new A,bs=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fh.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),xl.copy(this.origin).sub(fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(gl),a=xl.dot(this.direction),l=-xl.dot(gl),c=xl.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fh).addScaledVector(gl,h),p}intersectSphere(e,t){if(e.radius<0)return null;ms.subVectors(e.center,this.origin);let i=ms.dot(this.direction),s=ms.dot(ms)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,b=i.z-o.z,_=Math.abs(l),w=Math.abs(c),M=Math.abs(u),v,S,U,I,N,F,H,L,W,V,q,Y;if(_>=w&&_>=M?(U=l,F=d,W=f,Y=g,l>=0?(v=c,S=u,I=h,N=p,H=x,L=m,V=y,q=b):(v=u,S=c,I=p,N=h,H=m,L=x,V=b,q=y)):w>=M?(U=c,F=h,W=x,Y=y,c>=0?(v=u,S=l,I=p,N=d,H=m,L=f,V=b,q=g):(v=l,S=u,I=d,N=p,H=f,L=m,V=g,q=b)):(U=u,F=p,W=m,Y=b,u>=0?(v=l,S=c,I=d,N=h,H=f,L=x,V=g,q=y):(v=c,S=l,I=h,N=d,H=x,L=f,V=y,q=g)),U===0)return null;let Z=v/U,ne=S/U,re=1/U,Ee=I-Z*F,ke=N-ne*F,ie=H-Z*W,Te=L-ne*W,De=V-Z*Y,se=q-ne*Y,K=De*Te-se*ie,Me=Ee*se-ke*De,Ke=ie*ke-Te*Ee;if(s){if(K<0||Me<0||Ke<0)return null}else if((K<0||Me<0||Ke<0)&&(K>0||Me>0||Ke>0))return null;let Pe=K+Me+Ke;if(Pe===0)return null;let $e=re*(K*F+Me*W+Ke*Y);return(Pe>0?$e<0:$e>0)?null:this.at($e/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nf=new bt,hr=new bs,_l=new Ji,Uf=new A,yl=new A,vl=new A,bl=new A,ph=new A,Ml=new A,Ff=new A,Sl=new A,ut=class extends jt{constructor(e=new Nt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(ph.fromBufferAttribute(d,e),o?Ml.addScaledVector(ph,u):Ml.addScaledVector(ph.sub(t),u))}t.add(Ml)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(_l.containsPoint(hr.origin)===!1&&(hr.intersectSphere(_l,Uf)===null||hr.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Nf.copy(r).invert(),hr.copy(e.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,w=b;_<w;_+=3){let M=a.getX(_),v=a.getX(_+1),S=a.getX(_+2);s=wl(this,g,e,i,c,u,d,M,v,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=wl(this,o,e,i,c,u,d,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,w=b;_<w;_+=3){let M=_,v=_+1,S=_+2;s=wl(this,g,e,i,c,u,d,M,v,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let y=m,b=m+1,_=m+2;s=wl(this,o,e,i,c,u,d,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ux(n,e,t,i,s,r,o,a){let l;if(e.side===Un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===es,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Sl);return c<t.near||c>t.far?null:{distance:c,point:Sl.clone(),object:n}}function wl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,yl),n.getVertexPosition(l,vl),n.getVertexPosition(c,bl);let u=ux(n,e,t,i,yl,vl,bl,Ff);if(u){let d=new A;gs.getBarycoord(Ff,yl,vl,bl,d),s&&(u.uv=gs.getInterpolatedAttribute(s,a,l,c,d,new _e)),r&&(u.uv1=gs.getInterpolatedAttribute(r,a,l,c,d,new _e)),o&&(u.normal=gs.getInterpolatedAttribute(o,a,l,c,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new A,materialIndex:0};gs.getNormal(yl,vl,bl,h.normal),u.face=h,u.barycoord=d}return u}var aa=class extends qn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Tn,u=Tn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class extends ei{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Jr=new bt,Of=new bt,El=[],Bf=new bi,hx=new bt,Wo=new ut,Xo=new Ji,Dn=class extends ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Bf.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Jr),Xo.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Jr),Of.multiplyMatrices(i,Jr),Wo.matrixWorld=Of,Wo.raycast(e,El);for(let o=0,a=El.length;o<a;o++){let l=El[o];l.instanceId=r,l.object=this,t.push(l)}El.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(s*this.count),s,this.count,Tc,Mi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},dr=new Ji,dx=new _e(.5,.5),Tl=new A,ks=class{constructor(e=new Xn,t=new Xn,i=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],y=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,g-f,w-y).normalize(),s[1].setComponents(c+o,p+u,g+f,w+y).normalize(),s[2].setComponents(c+a,p+d,g+x,w+b).normalize(),s[3].setComponents(c-a,p-d,g-x,w-b).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,p-h,g-m,w-_).normalize();else if(s[4].setComponents(c-l,p-h,g-m,w-_).normalize(),t===vi)s[5].setComponents(c+l,p+h,g+m,w+_).normalize();else if(t===io)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=dx.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Tl.x=s.normal.x>0?e.max.x:e.min.x,Tl.y=s.normal.y>0?e.max.y:e.min.y,Tl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kf=new bt,Zl=class n{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];kf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ks),i[s].setFromProjectionMatrix(kf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ks),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var uo=class extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jl=new A,jl=new A,zf=new bt,qo=new bs,Al=new Ji,mh=new A,Hf=new A,Ql=class extends jt{constructor(e=new Nt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jl.fromBufferAttribute(t,s-1),jl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jl.distanceTo(jl);e.setAttribute("lineDistance",new lt(i,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;zf.copy(s).invert(),qo.copy(e.ray).applyMatrix4(zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=u.getX(x),y=u.getX(x+1),b=Rl(this,e,qo,l,g,y,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(p),g=Rl(this,e,qo,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Rl(this,e,qo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Rl(this,e,qo,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Jl.fromBufferAttribute(a,s),jl.fromBufferAttribute(a,r),t.distanceSqToSegment(Jl,jl,mh,Hf)>i)return;mh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(mh);if(!(c<e.near||c>e.far))return{distance:c,point:Hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Gf=new A,Vf=new A,la=class extends Ql{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Gf.fromBufferAttribute(t,s),Vf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gf.distanceTo(Vf);e.setAttribute("lineDistance",new lt(i,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ec=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wf=new bt,wh=new bs,Cl=new Ji,Pl=new A,ca=class extends jt{constructor(e=new Nt,t=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),Cl.radius+=r,e.ray.intersectsSphere(Cl)===!1)return;Wf.copy(s).invert(),wh.copy(e.ray).applyMatrix4(Wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=h,x=p;f<x;f++){let m=c.getX(f);Pl.fromBufferAttribute(d,m),Xf(Pl,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=h,x=p;f<x;f++)Pl.fromBufferAttribute(d,f),Xf(Pl,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xf(n,e,t,i,s,r,o){let a=wh.distanceSqToPoint(n);if(a<t){let l=new A;wh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ua=class extends qn{constructor(e=[],t=wr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ha=class extends qn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ms=class extends qn{constructor(e,t,i=ki,s,r,o,a=Tn,l=Tn,c,u=ys,d=1){if(u!==ys&&u!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},da=class extends Ms{constructor(e,t=ki,i=wr,s,r,o=Tn,a=Tn,l,c=ys){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class n extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function f(x,m,g,y,b,_,w,M,v,S,U){let I=_/v,N=w/S,F=_/2,H=w/2,L=M/2,W=v+1,V=S+1,q=0,Y=0,Z=new A;for(let ne=0;ne<V;ne++){let re=ne*N-H;for(let Ee=0;Ee<W;Ee++){let ke=Ee*I-F;Z[x]=ke*y,Z[m]=re*b,Z[g]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Ee/v),d.push(1-ne/S),q+=1}}for(let ne=0;ne<S;ne++)for(let re=0;re<v;re++){let Ee=h+re+W*ne,ke=h+re+W*(ne+1),ie=h+(re+1)+W*(ne+1),Te=h+(re+1)+W*ne;l.push(Ee,ke,Te),l.push(ke,ie,Te),Y+=6}a.addGroup(p,Y,U),p+=Y,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nn=class n extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kn=class n extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],f=0,x=[],m=i/2,g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(p,2));function y(){let _=new A,w=new A,M=0,v=(t-e)/i;for(let S=0;S<=r;S++){let U=[],I=S/r,N=I*(t-e)+e;for(let F=0;F<=s;F++){let H=F/s,L=H*l+a,W=Math.sin(L),V=Math.cos(L);w.x=N*W,w.y=-I*i+m,w.z=N*V,d.push(w.x,w.y,w.z),_.set(W,v,V).normalize(),h.push(_.x,_.y,_.z),p.push(H,1-I),U.push(f++)}x.push(U)}for(let S=0;S<s;S++)for(let U=0;U<r;U++){let I=x[U][S],N=x[U+1][S],F=x[U+1][S+1],H=x[U][S+1];(e>0||U!==0)&&(u.push(I,N,H),M+=3),(t>0||U!==r-1)&&(u.push(N,F,H),M+=3)}c.addGroup(g,M,0),g+=M}function b(_){let w=f,M=new _e,v=new A,S=0,U=_===!0?e:t,I=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),f++;let N=f;for(let F=0;F<=s;F++){let L=F/s*l+a,W=Math.cos(L),V=Math.sin(L);v.x=U*V,v.y=m*I,v.z=U*W,d.push(v.x,v.y,v.z),h.push(0,I,0),M.x=W*.5+.5,M.y=V*.5*I+.5,p.push(M.x,M.y),f++}for(let F=0;F<s;F++){let H=w+F,L=N+F;_===!0?u.push(L,L+1,H):u.push(L+1,L,H),S+=3}c.addGroup(g,S,_===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class n extends Kn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,s=[],r=[],o=[],a=new A,l=new bt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ho=class extends ci{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends ho{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rd(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var qf=new A,$f=new A,gh=new rd,xh=new rd,_h=new rd,nc=class extends ci{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:($f.subVectors(s[0],s[1]).add(s[0]),c=$f);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(qf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=qf),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),gh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,x,m),xh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,x,m),_h.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),xh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),_h.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(gh.calc(l),xh.calc(l),_h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function fx(n,e){let t=1-n;return t*t*e}function px(n,e){return 2*(1-n)*n*e}function mx(n,e){return n*n*e}function Zo(n,e,t,i){return fx(n,e)+px(n,t)+mx(n,i)}function gx(n,e){let t=1-n;return t*t*t*e}function xx(n,e){let t=1-n;return 3*t*t*n*e}function _x(n,e){return 3*(1-n)*n*n*e}function yx(n,e){return n*n*n*e}function Jo(n,e,t,i,s){return gx(n,e)+xx(n,t)+_x(n,i)+yx(n,s)}var pa=class extends ci{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jo(e,s.x,r.x,o.x,a.x),Jo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ic=class extends ci{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Jo(e,s.x,r.x,o.x,a.x),Jo(e,s.y,r.y,o.y,a.y),Jo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ma=class extends ci{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends ci{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends ci{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends ci{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y),Zo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Yf(a,l.x,c.x,u.x,d.x),Yf(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:nc,CubicBezierCurve:pa,CubicBezierCurve3:ic,EllipseCurve:ho,LineCurve:ma,LineCurve3:gr,QuadraticBezierCurve:ga,QuadraticBezierCurve3:xr,SplineCurve:xa}),fo=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new sc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ss=class extends fo{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ma(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ga(this.currentPoint.clone(),new _e(e,t),new _e(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new pa(this.currentPoint.clone(),new _e(e,t),new _e(i,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new xa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new ho(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hs=class extends Ss{constructor(e){super(e),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}};function vx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Gp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ex(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let p=n[h],f=n[h+1];p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return _a(r,o,t,a,l,c,0),o}function Gp(n,e,t,i,s){let r;if(s===Fx(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Kf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Kf(o/i|0,n[o],n[o+1],r);return r&&po(r,r.next)&&(va(r),r=r.next),r}function _r(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(po(t,t.next)||on(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function _a(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Px(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Mx(n,i,s,r):bx(n)){e.push(l.i,n.i,c.i),va(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sx(_r(n),e),_a(n,e,t,i,s,r,2)):o===2&&wx(n,e,t,i,s,r):_a(_r(n),e,t,i,s,r,1);break}}}function bx(n){let e=n.prev,t=n,i=n.next;if(on(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=d&&f.y<=p&&$o(s,a,r,l,o,c,f.x,f.y)&&on(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Mx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(on(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,l,c),f=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Eh(p,f,e,t,i),y=Eh(x,m,e,t,i),b=n.prevZ,_=n.nextZ;for(;b&&b.z>=g&&_&&_.z<=y;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&$o(a,u,l,d,c,h,b.x,b.y)&&on(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==s&&_!==o&&$o(a,u,l,d,c,h,_.x,_.y)&&on(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=g;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&$o(a,u,l,d,c,h,b.x,b.y)&&on(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==s&&_!==o&&$o(a,u,l,d,c,h,_.x,_.y)&&on(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!po(i,s)&&Wp(i,t,t.next,s)&&ya(i,s)&&ya(s,i)&&(e.push(i.i,t.i,s.i),va(t),va(t.next),t=n=s),t=t.next}while(t!==n);return _r(t)}function wx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dx(o,a)){let l=Xp(o,a);o=_r(o,o.next),l=_r(l,l.next),_a(o,e,t,i,s,r,0),_a(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ex(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Gp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Lx(c))}s.sort(Tx);for(let r=0;r<s.length;r++)t=Ax(s[r],t);return t}function Tx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ax(n,e){let t=Rx(n,e);if(!t)return e;let i=Xp(t,n);return _r(i,i.next),_r(t,t.next)}function Rx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(po(n,t))return t;do{if(po(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Vp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ya(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Cx(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Cx(n,e){return on(n.prev,n,e.prev)<0&&on(e.next,n,n.next)<0}function Px(n,e,t,i){let s=n;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Eh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vp(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function $o(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Vp(n,e,t,i,s,r,o,a)}function Dx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Nx(n,e)&&(ya(n,e)&&ya(e,n)&&Ux(n,e)&&(on(n.prev,n,e.prev)||on(n,e.prev,e))||po(n,e)&&on(n.prev,n,n.next)>0&&on(e.prev,e,e.next)>0)}function on(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function po(n,e){return n.x===e.x&&n.y===e.y}function Wp(n,e,t,i){let s=Ll(on(n,e,t)),r=Ll(on(n,e,i)),o=Ll(on(t,i,n)),a=Ll(on(t,i,e));return!!(s!==r&&o!==a||s===0&&Il(n,t,e)||r===0&&Il(n,i,e)||o===0&&Il(t,n,i)||a===0&&Il(t,e,i))}function Il(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ll(n){return n>0?1:n<0?-1:0}function Nx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return on(n.prev,n,n.next)<0?on(n,e,n.next)>=0&&on(n,n.prev,e)>=0:on(n,e,n.prev)<0||on(n,n.next,e)<0}function Ux(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xp(n,e){let t=Th(n.i,n.x,n.y),i=Th(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Kf(n,e,t,i){let s=Th(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Th(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fx(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ah=class{static triangulate(e,t,i=2){return vx(e,t,i)}},fr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Zf(e),Jf(i,e);let o=e.length;t.forEach(Zf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Jf(i,t[l]);let a=Ah.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Zf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Jf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var yr=class n extends Nt{constructor(e=new Hs([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ox,b,_=!1,w,M,v,S;if(g){b=g.getSpacedPoints(u),_=!0,h=!1;let he=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,he),M=new A,v=new A,S=new A}h||(m=0,p=0,f=0,x=0);let U=a.extractPoints(c),I=U.shape,N=U.holes;if(!fr.isClockWise(I)){I=I.reverse();for(let he=0,k=N.length;he<k;he++){let X=N[he];fr.isClockWise(X)&&(N[he]=X.reverse())}}function H(he){let X=10000000000000001e-36,oe=he[0];for(let $=1;$<=he.length;$++){let te=$%he.length,Se=he[te],D=Se.x-oe.x,Q=Se.y-oe.y,ae=D*D+Q*Q,P=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(oe.x),Math.abs(oe.y)),Qe=X*P*P;if(ae<=Qe){he.splice(te,1),$--;continue}oe=Se}}H(I),N.forEach(H);let L=N.length,W=I;for(let he=0;he<L;he++){let k=N[he];I=I.concat(k)}function V(he,k,X){return k||pt("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(k,X)}let q=I.length;function Y(he,k,X){let oe,$,te,Se=he.x-k.x,D=he.y-k.y,Q=X.x-he.x,ae=X.y-he.y,P=Se*Se+D*D,Qe=Se*ae-D*Q;if(Math.abs(Qe)>Number.EPSILON){let nt=Math.sqrt(P),ft=Math.sqrt(Q*Q+ae*ae),Ae=k.x-D/nt,xe=k.y+Se/nt,be=X.x-ae/ft,Ge=X.y+Q/ft,R=((be-Ae)*ae-(Ge-xe)*Q)/(Se*ae-D*Q);oe=Ae+Se*R-he.x,$=xe+D*R-he.y;let E=oe*oe+$*$;if(E<=2)return new _e(oe,$);te=Math.sqrt(E/2)}else{let nt=!1;Se>Number.EPSILON?Q>Number.EPSILON&&(nt=!0):Se<-Number.EPSILON?Q<-Number.EPSILON&&(nt=!0):Math.sign(D)===Math.sign(ae)&&(nt=!0),nt?(oe=-D,$=Se,te=Math.sqrt(P)):(oe=Se,$=D,te=Math.sqrt(P/2))}return new _e(oe/te,$/te)}let Z=[];for(let he=0,k=W.length,X=k-1,oe=he+1;he<k;he++,X++,oe++)X===k&&(X=0),oe===k&&(oe=0),Z[he]=Y(W[he],W[X],W[oe]);let ne=[],re,Ee=Z.concat();for(let he=0,k=L;he<k;he++){let X=N[he];re=[];for(let oe=0,$=X.length,te=$-1,Se=oe+1;oe<$;oe++,te++,Se++)te===$&&(te=0),Se===$&&(Se=0),re[oe]=Y(X[oe],X[te],X[Se]);ne.push(re),Ee=Ee.concat(re)}let ke;if(m===0)ke=fr.triangulateShape(W,N);else{let he=[],k=[];for(let X=0;X<m;X++){let oe=X/m,$=p*Math.cos(oe*Math.PI/2),te=f*Math.sin(oe*Math.PI/2)+x;for(let Se=0,D=W.length;Se<D;Se++){let Q=V(W[Se],Z[Se],te);Me(Q.x,Q.y,-$),oe===0&&he.push(Q)}for(let Se=0,D=L;Se<D;Se++){let Q=N[Se];re=ne[Se];let ae=[];for(let P=0,Qe=Q.length;P<Qe;P++){let nt=V(Q[P],re[P],te);Me(nt.x,nt.y,-$),oe===0&&ae.push(nt)}oe===0&&k.push(ae)}}ke=fr.triangulateShape(he,k)}let ie=ke.length,Te=f+x;for(let he=0;he<q;he++){let k=h?V(I[he],Ee[he],Te):I[he];_?(v.copy(w.normals[0]).multiplyScalar(k.x),M.copy(w.binormals[0]).multiplyScalar(k.y),S.copy(b[0]).add(v).add(M),Me(S.x,S.y,S.z)):Me(k.x,k.y,0)}for(let he=1;he<=u;he++)for(let k=0;k<q;k++){let X=h?V(I[k],Ee[k],Te):I[k];_?(v.copy(w.normals[he]).multiplyScalar(X.x),M.copy(w.binormals[he]).multiplyScalar(X.y),S.copy(b[he]).add(v).add(M),Me(S.x,S.y,S.z)):Me(X.x,X.y,d/u*he)}for(let he=m-1;he>=0;he--){let k=he/m,X=p*Math.cos(k*Math.PI/2),oe=f*Math.sin(k*Math.PI/2)+x;for(let $=0,te=W.length;$<te;$++){let Se=V(W[$],Z[$],oe);Me(Se.x,Se.y,d+X)}for(let $=0,te=N.length;$<te;$++){let Se=N[$];re=ne[$];for(let D=0,Q=Se.length;D<Q;D++){let ae=V(Se[D],re[D],oe);_?Me(ae.x,ae.y+b[u-1].y,b[u-1].x+X):Me(ae.x,ae.y,d+X)}}}De(),se();function De(){let he=s.length/3;if(h){let k=0,X=q*k;for(let oe=0;oe<ie;oe++){let $=ke[oe];Ke($[2]+X,$[1]+X,$[0]+X)}k=u+m*2,X=q*k;for(let oe=0;oe<ie;oe++){let $=ke[oe];Ke($[0]+X,$[1]+X,$[2]+X)}}else{for(let k=0;k<ie;k++){let X=ke[k];Ke(X[2],X[1],X[0])}for(let k=0;k<ie;k++){let X=ke[k];Ke(X[0]+q*u,X[1]+q*u,X[2]+q*u)}}i.addGroup(he,s.length/3-he,0)}function se(){let he=s.length/3,k=0;K(W,k),k+=W.length;for(let X=0,oe=N.length;X<oe;X++){let $=N[X];K($,k),k+=$.length}i.addGroup(he,s.length/3-he,1)}function K(he,k){let X=he.length;for(;--X>=0;){let oe=X,$=X-1;$<0&&($=he.length-1);for(let te=0,Se=u+m*2;te<Se;te++){let D=q*te,Q=q*(te+1),ae=k+oe+D,P=k+$+D,Qe=k+$+Q,nt=k+oe+Q;Pe(ae,P,Qe,nt)}}}function Me(he,k,X){l.push(he),l.push(k),l.push(X)}function Ke(he,k,X){$e(he),$e(k),$e(X);let oe=s.length/3,$=y.generateTopUV(i,s,oe-3,oe-2,oe-1);Ie($[0]),Ie($[1]),Ie($[2])}function Pe(he,k,X,oe){$e(he),$e(k),$e(oe),$e(k),$e(X),$e(oe);let $=s.length/3,te=y.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);Ie(te[0]),Ie(te[1]),Ie(te[3]),Ie(te[1]),Ie(te[2]),Ie(te[3])}function $e(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function Ie(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Bx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sc[s.type]().fromJSON(s)),new n(i,e.options)}},Ox={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-d),new _e(h,1-f),new _e(x,1-g)]:[new _e(a,1-l),new _e(u,1-d),new _e(p,1-f),new _e(m,1-g)]}};function Bx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ba=class n extends Nt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new A,h=new _e,p=new A,f=new A,x=new A,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let y=0;y<=t;y++){let b=i+y*u*s,_=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*_,d.y=e[M].y,d.z=e[M].x*w,o.push(d.x,d.y,d.z),h.x=y/t,h.y=M/(e.length-1),a.push(h.x,h.y);let v=l[3*M+0]*_,S=l[3*M+1],U=l[3*M+0]*w;c.push(v,S,U)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let _=b+y*e.length,w=_,M=_+e.length,v=_+e.length+1,S=_+1;r.push(w,M,S),r.push(v,S,M)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var mt=class n extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<u;g++){let y=g*h-o;for(let b=0;b<c;b++){let _=b*d-r;f.push(_,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,_=y+c*(g+1),w=y+1+c*(g+1),M=y+1+c*g;p.push(b,_,M),p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},cn=class n extends Nt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new A,f=new _e;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let y=g+m,b=y,_=y+i+1,w=y+i+2,M=y+1;a.push(b,_,M),a.push(_,w,M)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var An=class n extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new A,h=new A,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let y=[],b=g/i,_=o+b*a,w=e*Math.cos(_),M=Math.sqrt(e*e-w*w),v=0;g===0&&o===0?v=.5/t:g===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let U=S/t,I=s+U*r;d.x=-M*Math.cos(I),d.y=w,d.z=M*Math.sin(I),f.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(U+v,1-b),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let b=u[g][y+1],_=u[g][y],w=u[g+1][y],M=u[g+1][y+1];(g!==0||o>0)&&p.push(b,_,M),(g!==i-1||l<Math.PI)&&p.push(_,w,M)}this.setIndex(p),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class n extends Nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new A,p=new A,f=new A;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let y=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,_=(s+1)*x+m;l.push(g,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ma=class n extends Nt{constructor(e=new xr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new _e,u=new A,d=[],h=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new lt(d,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(p,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),g()}function m(b){u=e.getPointAt(b/t,u);let _=o.normals[b],w=o.binormals[b];for(let M=0;M<=s;M++){let v=M/s*Math.PI*2,S=Math.sin(v),U=-Math.cos(v);l.x=U*_.x+S*w.x,l.y=U*_.y+S*w.y,l.z=U*_.z+S*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){let w=(s+1)*(b-1)+(_-1),M=(s+1)*b+(_-1),v=(s+1)*b+_,S=(s+1)*(b-1)+_;f.push(w,M,S),f.push(M,v,S)}}function y(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)c.x=b/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(jf(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(jf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Hn(n){let e={};for(let t=0;t<n.length;t++){let i=Tr(n[t]);for(let s in i)e[s]=i[s]}return e}function jf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function od(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}var cu={clone:Tr,merge:Hn},zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ws=class extends Rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){pr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var rc=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Dl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Gs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ac=class extends Gs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mh:r=e,a=2*t-i;break;case Sh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mh:o=e,l=2*i-t;break;case Sh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),x=f*f,m=x*f,g=-h*m+2*h*x-h*f,y=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*f+1,b=(-1-p)*m+(1.5+p)*x+.5*f,_=p*m-p*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+y*o[c+w]+b*o[l+w]+_*o[d+w];return r}},lc=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},cc=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends Gs{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(s-t),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let h=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*h+f*2,y=d[g],b=d[g+1],_=e*h+f*2,w=u[_],M=u[_+1],v=Vx(i,t,y,w,s);r[f]=qp(v,x,b,M,m)}return r}};function qp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Gx(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Vx(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=qp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Gx(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ui=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Dl(e.settings)&&(i.settings={inTangents:jr(e.settings.inTangents,Array),outTangents:jr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jo:t=this.InterpolantFactoryMethodDiscrete;break;case ql:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break;case vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return dt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jo;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Fl;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Dl(this.settings)&&(Qf(this.settings.inTangents,e),Qf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Dl(this.settings)&&(ep(this.settings.inTangents,e),ep(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){pt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){pt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Lg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){pt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let x=t[d+f];if(x!==t[h+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Dl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function ep(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=ql;var Vs=class extends ui{constructor(e,t,i){super(e,t,i)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=jo;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}};hc.prototype.ValueTypeName="color";var dc=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}};dc.prototype.ValueTypeName="number";var fc=class extends Gs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Sa=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends ui{constructor(e,t,i){super(e,t,i)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=jo;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}};pc.prototype.ValueTypeName="vector";var mc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$p=new mc,gc=class{constructor(e){this.manager=e!==void 0?e:$p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wa=class extends jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ea=class extends wa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yh=new bt,tp=new A,np=new A,xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(yh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===io||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nl=new A,Ul=new ln,Ki=new A,Ta=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Ul,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Nl,Ul,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bs=new A,ip=new _e,sp=new _e,In=class extends Ta{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,t){return this.getViewBounds(e,ip,sp),t.subVectors(sp,ip)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Es=class extends Ta{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends xc{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Aa=class extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Qr=-90,eo=1,xo=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new In(Qr,eo,e,t);s.layers=this.layers,this.add(s);let r=new In(Qr,eo,e,t);r.layers=this.layers,this.add(r);let o=new In(Qr,eo,e,t);o.layers=this.layers,this.add(o);let a=new In(Qr,eo,e,t);a.layers=this.layers,this.add(a);let l=new In(Qr,eo,e,t);l.layers=this.layers,this.add(l);let c=new In(Qr,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},_c=class extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ad="\\[\\]\\.:\\/",Wx=new RegExp("["+ad+"]","g"),ld="[^"+ad+"]",Xx="[^"+ad.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",ld),$x=/(WCOD+)?/.source.replace("WCOD",Xx),Yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ld),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ld),Zx=new RegExp("^"+qx+$x+Yx+Kx+"$"),Jx=["material","materials","bones","map"],Ch=class{constructor(e,t,i){let s=i||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},en=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=Zx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Jx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=Ch;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qw=new Float32Array(1);var rp=new bt,vr=class{constructor(e,t,i=0,s=1/0){this.ray=new bs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(e,t=!0,i=[]){return Ph(e,this,i,t),i.sort(op),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ph(e[s],this,i,t);return i.sort(op),i}};function op(n,e){return n.distance-e.distance}function Ph(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ph(r[o],e,t,!0)}}var _o=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ih=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Ra=class extends Fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function cd(n,e,t,i){let s=jx(i);switch(t){case Yh:return n*e;case Tc:return n*e/s.components*s.byteLength;case Ac:return n*e/s.components*s.byteLength;case Zs:return n*e*2/s.components*s.byteLength;case Rc:return n*e*2/s.components*s.byteLength;case Kh:return n*e*3/s.components*s.byteLength;case zi:return n*e*4/s.components*s.byteLength;case Cc:return n*e*4/s.components*s.byteLength;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(n,8)*Math.max(e,8)/2;case Nc:case Uc:case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Ua:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eu:case tu:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case iu:case su:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fa:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jx(n){switch(n){case ti:case Wh:return{byteLength:1,components:1};case Mo:case Xh:case Jn:return{byteLength:2,components:1};case wc:case Ec:return{byteLength:2,components:4};case ki:case Sc:case Mi:return{byteLength:4,components:1};case qh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function m0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function i_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
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
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x_=`#ifdef USE_IRIDESCENCE
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
#endif`,__=`#ifdef USE_BUMPMAP
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A_=`#define PI 3.141592653589793
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
} // validated`,R_=`vec3 transformedNormal = objectNormal;
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
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
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
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ty=`uniform sampler2D dfgLUT;
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
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
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform float backgroundBlurriness;
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`#include <common>
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
}`,uv=`#if DEPTH_PACKING == 3200
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
}`,hv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,yv=`#define LAMBERT
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
}`,vv=`#define LAMBERT
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
}`,bv=`#define MATCAP
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
}`,Mv=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Ev=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,Av=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Pv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Nv=`uniform vec3 color;
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
}`,Uv=`uniform float rotation;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:u_,aomap_pars_fragment:h_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:__,clipping_planes_fragment:y_,clipping_planes_pars_fragment:v_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:M_,color_fragment:S_,color_pars_fragment:w_,color_pars_vertex:E_,color_vertex:T_,common:A_,defaultnormal_vertex:R_,displacementmap_pars_vertex:C_,displacementmap_vertex:P_,emissivemap_fragment:I_,emissivemap_pars_fragment:L_,colorspace_fragment:D_,colorspace_pars_fragment:N_,envmap_fragment:U_,envmap_common_pars_fragment:F_,envmap_pars_fragment:O_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:K_,envmap_vertex:k_,fog_vertex:z_,fog_pars_vertex:H_,fog_fragment:G_,fog_pars_fragment:V_,gradientmap_pars_fragment:W_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:$_,lights_pars_begin:Y_,lights_toon_fragment:Z_,lights_toon_pars_fragment:J_,lights_phong_fragment:j_,lights_phong_pars_fragment:Q_,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:sy,lightprobes_pars_fragment:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:hy,map_particle_fragment:dy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:xy,morphnormal_vertex:_y,morphtarget_pars_vertex:yy,morphtarget_vertex:vy,normal_fragment_begin:by,normal_fragment_maps:My,normal_pars_fragment:Sy,normal_pars_vertex:wy,normal_vertex:Ey,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:zy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Vy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Yy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:Jy,transmission_pars_fragment:jy,uv_pars_fragment:Qy,uv_pars_vertex:ev,uv_vertex:tv,worldpos_vertex:nv,background_vert:iv,background_frag:sv,backgroundCube_vert:rv,backgroundCube_frag:ov,cube_vert:av,cube_frag:lv,depth_vert:cv,depth_frag:uv,distance_vert:hv,distance_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:xv,meshbasic_frag:_v,meshlambert_vert:yv,meshlambert_frag:vv,meshmatcap_vert:bv,meshmatcap_frag:Mv,meshnormal_vert:Sv,meshnormal_frag:wv,meshphong_vert:Ev,meshphong_frag:Tv,meshphysical_vert:Av,meshphysical_frag:Rv,meshtoon_vert:Cv,meshtoon_frag:Pv,points_vert:Iv,points_frag:Lv,shadow_vert:Dv,shadow_frag:Nv,sprite_vert:Uv,sprite_frag:Fv},Ze={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},is={basic:{uniforms:Hn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Hn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Hn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Hn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Hn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new qe(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Hn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Hn([Ze.points,Ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Hn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Hn([Ze.common,Ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Hn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Hn([Ze.sprite,Ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Hn([Ze.common,Ze.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Hn([Ze.lights,Ze.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};is.physical={uniforms:Hn([is.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var uu={r:0,b:0,g:0},Ov=new bt,g0=new yt;g0.set(-1,0,0,0,1,0,0,0,1);function Bv(n,e,t,i,s,r){let o=new qe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=e.get(b,_)}return b}function f(y){let b=!1,_=p(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,b){let _=p(b);_&&_.isCubeTexture?(c===void 0&&(c=new ut(new Ft(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Tr(is.backgroundCube.uniforms),vertexShader:is.backgroundCube.vertexShader,fragmentShader:is.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(g0),c.material.toneMapped=Ct.getTransfer(_.colorSpace)!==Ht,(u!==_||d!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ut(new mt(2,2),new un({name:"BackgroundMaterial",uniforms:Tr(is.background.uniforms),vertexShader:is.background.vertexShader,fragmentShader:is.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(_.colorSpace)!==Ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(uu,od(n)),t.buffers.color.setClear(uu.r,uu.g,uu.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:f,addToRenderList:x,dispose:g}}function kv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(N,F,H,L,W){let V=!1,q=d(N,L,H,F);r!==q&&(r=q,c(r.object)),V=p(N,L,H,W),V&&f(N,L,H,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(N,F,H,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,F,H,L){let W=L.wireframe===!0,V=i[F.id];V===void 0&&(V={},i[F.id]=V);let q=N.isInstancedMesh===!0?N.id:0,Y=V[q];Y===void 0&&(Y={},V[q]=Y);let Z=Y[H.id];Z===void 0&&(Z={},Y[H.id]=Z);let ne=Z[W];return ne===void 0&&(ne=h(l()),Z[W]=ne),ne}function h(N){let F=[],H=[],L=[];for(let W=0;W<t;W++)F[W]=0,H[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:L,object:N,attributes:{},index:null}}function p(N,F,H,L){let W=r.attributes,V=F.attributes,q=0,Y=H.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let re=W[Z],Ee=V[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),re===void 0||re.attribute!==Ee||Ee&&re.data!==Ee.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function f(N,F,H,L){let W={},V=F.attributes,q=0,Y=H.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let re=V[Z];re===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let Ee={};Ee.attribute=re,re&&re.data&&(Ee.data=re.data),W[Z]=Ee,q++}r.attributes=W,r.attributesNum=q,r.index=L}function x(){let N=r.newAttributes;for(let F=0,H=N.length;F<H;F++)N[F]=0}function m(N){g(N,0)}function g(N,F){let H=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;H[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),W[N]!==F&&(n.vertexAttribDivisor(N,F),W[N]=F)}function y(){let N=r.newAttributes,F=r.enabledAttributes;for(let H=0,L=F.length;H<L;H++)F[H]!==N[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function b(N,F,H,L,W,V,q){q===!0?n.vertexAttribIPointer(N,F,H,W,V):n.vertexAttribPointer(N,F,H,L,W,V)}function _(N,F,H,L){x();let W=L.attributes,V=H.getAttributes(),q=F.defaultAttributeValues;for(let Y in V){let Z=V[Y];if(Z.location>=0){let ne=W[Y];if(ne===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ne!==void 0){let re=ne.normalized,Ee=ne.itemSize,ke=e.get(ne);if(ke===void 0)continue;let ie=ke.buffer,Te=ke.type,De=ke.bytesPerElement,se=Te===n.INT||Te===n.UNSIGNED_INT||ne.gpuType===Sc;if(ne.isInterleavedBufferAttribute){let K=ne.data,Me=K.isInterleavedBuffer===!0?K.stride:K.itemSize,Ke=ne.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let Pe=0;Pe<Z.locationSize;Pe++)g(Z.location+Pe,K.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)m(Z.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Pe=0;Pe<Z.locationSize;Pe++)b(Z.location+Pe,Ee/Z.locationSize,Te,re,Me*De,(Ke+Ee/Z.locationSize*Pe)*De,se)}else{if(ne.isInstancedBufferAttribute){for(let K=0;K<Z.locationSize;K++)g(Z.location+K,ne.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<Z.locationSize;K++)m(Z.location+K);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let K=0;K<Z.locationSize;K++)b(Z.location+K,Ee/Z.locationSize,Te,re,Ee*De,Ee/Z.locationSize*K*De,se)}}else if(q!==void 0){let re=q[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(Z.location,re);break;case 3:n.vertexAttrib3fv(Z.location,re);break;case 4:n.vertexAttrib4fv(Z.location,re);break;default:n.vertexAttrib1fv(Z.location,re)}}}}y()}function w(){U();for(let N in i){let F=i[N];for(let H in F){let L=F[H];for(let W in L){let V=L[W];for(let q in V)u(V[q].object),delete V[q];delete L[W]}}delete i[N]}}function M(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let H in F){let L=F[H];for(let W in L){let V=L[W];for(let q in V)u(V[q].object),delete V[q];delete L[W]}}delete i[N.id]}function v(N){for(let F in i){let H=i[F];for(let L in H){let W=H[L];if(W[N.id]===void 0)continue;let V=W[N.id];for(let q in V)u(V[q].object),delete V[q];delete W[N.id]}}}function S(N){for(let F in i){let H=i[F],L=N.isInstancedMesh===!0?N.id:0,W=H[L];if(W!==void 0){for(let V in W){let q=W[V];for(let Y in q)u(q[Y].object),delete q[Y];delete W[V]}delete H[L],Object.keys(H).length===0&&delete i[F]}}}function U(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function zv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Hv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==zi&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==ti&&v!==Mi&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(dt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&dt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:w,samples:M}}function Gv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Xn,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,b=y*4,_=g.clippingState||null;l.value=_,_=u(f,h,b,p);for(let w=0;w!==b;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var ka=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:Mr});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=an),new xo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Yp=256,Vv=3,Wv=20,x0=256,_0=16,Xv=3,qv=new A,$v=new qe,wo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xo(1,10,null),this._boxMesh=new ut(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=qv}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor($v));let m=new xo(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Yp,nd(e))}_fromTexture(e,t){e.mapping===wr||e.mapping===bo?this._setSize(e.image.length===0?Yp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Kp(e,!1,!1),i=Math.log2(e)-Vv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Kp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===wr||e.mapping===bo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yv(),this._integrationMaterial=Kv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/_0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-Xv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(x0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Kp(n,e,t){return new ka(n,{minFilter:Bi,generateMipmaps:e,type:Jn,colorSpace:Qo,depthBuffer:t})}function za(n,e,t){return new un({name:n,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:Un,blending:Mr,depthTest:!1,depthWrite:!1})}function Yv(){return za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${x0}u

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
	`)}function Kv(){return za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_0}},`

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
	`)}function Zv(){return za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wv}
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
	`)}function Zp(){return za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jp(){return za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===vc||p===bc)if(e.has(h)){let f=e.get(h).texture;return a(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let x=new ka(f.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===vc||p===bc,x=p===wr||p===bo;if(f||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new wo(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return f&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new wo(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===vc?h.mapping=wr:p===bc&&(h.mapping=bo),h}function l(h){let p=0,f=6;for(let x=0;x<f;x++)h[x]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function jv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function Qv(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(f){let x=f.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?ra:sa,_=new b(Math.ceil(y/3)*6,1),w=_.array;if(x!==null){let v=x.array;g=x.version;for(let S=0,U=0;S<y;S+=3){let I=v[S+0],N=v[S+1],F=v[S+2];w[U++]=I,w[U++]=N,w[U++]=N,w[U++]=F,w[U++]=F,w[U++]=I}}else{g=m.version;for(let v=0,S=0;v<y;v+=3){let U=v+0,I=v+1,N=v+2;w[S++]=U,w[S++]=I,w[S++]=I,w[S++]=N,w[S++]=N,w[S++]=U}}_.version=g;let M=r.get(f);M&&e.remove(M),r.set(f,_)}function h(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function e1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function t1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:pt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function n1(n,e,t){let i=new WeakMap,s=new $t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let U=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",U)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*w*4*d),v=new ia(M,_,w,d);v.type=Mi,v.needsUpdate=!0;let S=b*4;for(let I=0;I<d;I++){let N=m[I],F=g[I],H=y[I],L=_*w*4*I;for(let W=0;W<N.count;W++){let V=W*S;p===!0&&(s.fromBufferAttribute(N,W),M[L+V+0]=s.x,M[L+V+1]=s.y,M[L+V+2]=s.z,M[L+V+3]=0),f===!0&&(s.fromBufferAttribute(F,W),M[L+V+4]=s.x,M[L+V+5]=s.y,M[L+V+6]=s.z,M[L+V+7]=0),x===!0&&(s.fromBufferAttribute(H,W),M[L+V+8]=s.x,M[L+V+9]=s.y,M[L+V+10]=s.z,M[L+V+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new _e(_,w)},i.set(a,h),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function i1(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var s1={[Oh]:"LINEAR_TONE_MAPPING",[Bh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[zh]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Ca]:"NEUTRAL_TONE_MAPPING",[Hh]:"CUSTOM_TONE_MAPPING"};function r1(n,e,t,i,s,r){let o=new Ln(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Nt;u.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new lt([0,2,0,0,2,0],2));let d=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ut(u,d),p=new Es(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,y=null,b=[],_=!1;this.setSize=function(w,M){o.setSize(w,M),a!==null&&a.setSize(w,M),l!==null&&l.setSize(w,M);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(w,M)}},this.setEffects=function(w){b=w,_=b.length>0&&b[0].isRenderPass===!0;let M=o.width,v=o.height;b.length>0&&a===null&&(a=new Ln(M,v,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(M,v,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(U=>U.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ms(M,v),r===!0&&(c.format=Ts,c.type=Er)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let U=0;U<b.length;U++){let I=b[U];I.setSize&&I.setSize(M,v),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(w,M){if(m||w.toneMapping===ts&&b.length===0)return!1;if(y=M,M!==null){let v=M.width,S=M.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return _===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=ts,!0},this.hasRenderPass=function(){return _},this.end=function(w,M){w.toneMapping=g,m=!0;let v=o,S=a;for(let U=0;U<b.length;U++){let I=b[U];I.enabled!==!1&&(I.render(w,S,v,M),I.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,d.defines={},Ct.getTransfer(f)===Ht&&(d.defines.SRGB_TRANSFER="");let U=s1[x];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(y),w.render(h,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var y0=new qn,v0=new Ms(1,1),b0=new da(1),M0=new ia,S0=new Kl,w0=new ua,jp=[],Qp=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function Eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jp[s];if(r===void 0&&(r=new Float32Array(s),jp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fu(n,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2fv(this.addr,e),bn(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;n.uniform3fv(this.addr,e),bn(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4fv(this.addr,e),bn(t,e)}}function u1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;n0.set(i),n.uniformMatrix2fv(this.addr,!1,n0),bn(t,i)}}function h1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;t0.set(i),n.uniformMatrix3fv(this.addr,!1,t0),bn(t,i)}}function d1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(vn(t,i))return;e0.set(i),n.uniformMatrix4fv(this.addr,!1,e0),bn(t,i)}}function f1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2iv(this.addr,e),bn(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3iv(this.addr,e),bn(t,e)}}function g1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4iv(this.addr,e),bn(t,e)}}function x1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;n.uniform2uiv(this.addr,e),bn(t,e)}}function y1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;n.uniform3uiv(this.addr,e),bn(t,e)}}function v1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;n.uniform4uiv(this.addr,e),bn(t,e)}}function pu(n){return n.version===0&&(n.compareFunction=jh,n.needsUpdate=!0),n}function b1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=pu(v0):r=y0,t.setTexture2D(e||r,s)}function M1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||S0,s)}function S1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=pu(b0):r=w0,t.setTextureCube(e||r,s)}function w1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||M0,s)}function E1(n){switch(n){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return x1;case 36294:return _1;case 36295:return y1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return w1}}function T1(n,e){n.uniform1fv(this.addr,e)}function A1(n,e){let t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function R1(n,e){let t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function C1(n,e){let t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function P1(n,e){let t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I1(n,e){let t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L1(n,e){let t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D1(n,e){n.uniform1iv(this.addr,e)}function N1(n,e){n.uniform2iv(this.addr,e)}function U1(n,e){n.uniform3iv(this.addr,e)}function F1(n,e){n.uniform4iv(this.addr,e)}function O1(n,e){n.uniform1uiv(this.addr,e)}function B1(n,e){n.uniform2uiv(this.addr,e)}function k1(n,e){n.uniform3uiv(this.addr,e)}function z1(n,e){n.uniform4uiv(this.addr,e)}function H1(n,e,t){let i=this.cache,s=e.length,r=fu(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=pu(v0):o=y0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function G1(n,e,t){let i=this.cache,s=e.length,r=fu(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||S0,r[o])}function V1(n,e,t){let i=this.cache,s=e.length,r=fu(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=pu(b0):o=w0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function W1(n,e,t){let i=this.cache,s=e.length,r=fu(t,s);vn(i,r)||(n.uniform1iv(this.addr,r),bn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||M0,r[o])}function X1(n){switch(n){case 5126:return T1;case 35664:return A1;case 35665:return R1;case 35666:return C1;case 35674:return P1;case 35675:return I1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return N1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return B1;case 36295:return k1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return W1}}var dd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=E1(t.type)}},fd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}},pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ud=/(\w+)(\])?(\[|\.)?/g;function i0(n,e){n.seq.push(e),n.map[e.id]=e}function q1(n,e,t){let i=n.name,s=i.length;for(ud.lastIndex=0;;){let r=ud.exec(i),o=ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){i0(t,c===void 0?new dd(a,n,e):new fd(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pd(a),i0(t,d)),t=d}}}var So=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);q1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function s0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var $1=37297,Y1=0;function K1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var r0=new yt;function Z1(n){Ct._getMatrix(r0,Ct.workingColorSpace,n);let e=`mat3( ${r0.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function o0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+K1(n.getShaderSource(e),a)}else return r}function J1(n,e){let t=Z1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var j1={[Oh]:"Linear",[Bh]:"Reinhard",[kh]:"Cineon",[zh]:"ACESFilmic",[Gh]:"AgX",[Ca]:"Neutral",[Hh]:"Custom"};function Q1(n,e){let t=j1[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hu=new A;function eb(){Ct.getLuminanceCoefficients(hu);let n=hu.x.toFixed(4),e=hu.y.toFixed(4),t=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function nb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ib(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ba(n){return n!==""}function a0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function l0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(n){return n.replace(sb,rb)}function rb(n,e){let t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return md(t)}var ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(n){return n.replace(ob,ab)}function ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function u0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var lb={[br]:"SHADOWMAP_TYPE_PCF",[yo]:"SHADOWMAP_TYPE_VSM"};function cb(n){return lb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ub={[bo]:"ENVMAP_MODE_REFRACTION"};function hb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ub[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var db={[Fh]:"ENVMAP_BLENDING_MULTIPLY",[Ep]:"ENVMAP_BLENDING_MIX",[Tp]:"ENVMAP_BLENDING_ADD"};function fb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":db[n.combine]||"ENVMAP_BLENDING_NONE"}function pb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cb(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=hb(t),d=fb(t),h=tb(t),p=nb(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ba).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(x=[u0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[u0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?wt.tonemapping_pars_fragment:"",t.toneMapping!==ts?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,J1("linearToOutputTexel",t.outputColorSpace),eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=md(o),o=a0(o,t),o=l0(o,t),a=md(a),a=a0(a,t),a=l0(a,t),o=c0(o),a=c0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,b=g+m+a,_=s0(s,s.VERTEX_SHADER,y),w=s0(s,s.FRAGMENT_SHADER,b);s.attachShader(f,_),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function M(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(f)||"",F=s.getShaderInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",L=N.trim(),W=F.trim(),V=H.trim(),q=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,_,w);else{let Z=o0(s,_,"vertex"),ne=o0(s,w,"fragment");pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+Z+`
`+ne)}else L!==""?dt("WebGLProgram: Program Info Log:",L):(W===""||V==="")&&(Y=!1);Y&&(I.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(_),s.deleteShader(w),v=new So(s,f),S=ib(s,f)}let v;this.getUniforms=function(){return v===void 0&&M(this),v};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(f,$1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=_,this.fragmentShader=w,this}var mb=0,gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xd(e),t.set(e,i)),i}},xd=class{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}};function gb(n){return n===Zs||n===Ua||n===Fa}function xb(n,e,t,i,s,r){let o=new ao,a=new gd,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,S,U,I,N,F){let H=I.fog,L=N.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,q=e.get(v.envMap||W,V),Y=h[v.type],Z=i.precision;v.precision!==null&&(Z=i.getMaxPrecision(v.precision),Z!==v.precision&&dt("WebGLProgram.getParameters:",v.precision,"not supported, using",Z,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=ne!==void 0?ne.length:0,Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let ke,ie,Te,De;if(Y){let We=is[Y];ke=We.vertexShader,ie=We.fragmentShader}else{ke=v.vertexShader,ie=v.fragmentShader;let We=a.getVertexShaderStage(v),Tt=a.getFragmentShaderStage(v);a.update(v,We,Tt),Te=We.id,De=Tt.id}let se=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),Me=N.isInstancedMesh===!0,Ke=N.isBatchedMesh===!0,Pe=!!v.map,$e=!!v.matcap,Ie=!!q,he=Ie&&q.isPMREMTexture===!0,k=!!v.aoMap,X=!!v.lightMap,oe=!!v.bumpMap&&v.wireframe===!1,$=!!v.normalMap,te=!!v.displacementMap,Se=!!v.emissiveMap,D=!!v.metalnessMap,Q=!!v.roughnessMap,ae=v.anisotropy>0,P=v.clearcoat>0,Qe=v.diffuseRoughness>0,nt=v.dispersion>0,ft=v.retroreflectivity>0,Ae=v.iridescence>0,xe=v.sheen>0,be=v.transmission>0,Ge=ae&&!!v.anisotropyMap,R=P&&!!v.clearcoatMap,E=P&&!!v.clearcoatNormalMap,G=P&&!!v.clearcoatRoughnessMap,ye=Qe&&!!v.diffuseRoughnessMap,ue=Ae&&!!v.iridescenceMap,Ne=Ae&&!!v.iridescenceThicknessMap,He=xe&&!!v.sheenColorMap,pe=xe&&!!v.sheenRoughnessMap,me=!!v.specularMap,ze=!!v.specularColorMap,z=!!v.specularIntensityMap,fe=be&&!!v.transmissionMap,le=be&&!!v.thicknessMap,Oe=!!v.gradientMap,Ue=!!v.alphaMap,Be=v.alphaTest>0,et=!!v.alphaHash,Ve=!!v.extensions,Ce=ts;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ce=n.toneMapping);let je=he?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,xt={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:ie,defines:v.defines,customVertexShaderID:Te,customFragmentShaderID:De,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Z,batching:Ke,batchingColor:Ke&&N._colorsTexture!==null,instancing:Me,instancingColor:Me&&N.instanceColor!==null,instancingMorph:Me&&N.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pe,matcap:$e,envMap:Ie,envMapMode:Ie&&q.mapping,envMapPMREM:he,envMapMaxLod:he?je.length-1:null,envMapSize:he?je[0].width:null,aoMap:k,lightMap:X,bumpMap:oe,normalMap:$,displacementMap:te,emissiveMap:Se,normalMapObjectSpace:$&&v.normalMapType===Cp,normalMapTangentSpace:$&&v.normalMapType===ou,packedNormalMap:$&&v.normalMapType===ou&&gb(v.normalMap.format),metalnessMap:D,roughnessMap:Q,anisotropy:ae,anisotropyMap:Ge,clearcoat:P,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Qe,diffuseRoughnessMap:ye,dispersion:nt,retroreflection:ft,iridescence:Ae,iridescenceMap:ue,iridescenceThicknessMap:Ne,sheen:xe,sheenColorMap:He,sheenRoughnessMap:pe,specularMap:me,specularColorMap:ze,specularIntensityMap:z,transmission:be,transmissionMap:fe,thicknessMap:le,gradientMap:Oe,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Be,alphaHash:et,combine:v.combine,mapUv:Pe&&p(v.map.channel),aoMapUv:k&&p(v.aoMap.channel),lightMapUv:X&&p(v.lightMap.channel),bumpMapUv:oe&&p(v.bumpMap.channel),normalMapUv:$&&p(v.normalMap.channel),displacementMapUv:te&&p(v.displacementMap.channel),emissiveMapUv:Se&&p(v.emissiveMap.channel),metalnessMapUv:D&&p(v.metalnessMap.channel),roughnessMapUv:Q&&p(v.roughnessMap.channel),anisotropyMapUv:Ge&&p(v.anisotropyMap.channel),clearcoatMapUv:R&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&p(v.sheenRoughnessMap.channel),specularMapUv:me&&p(v.specularMap.channel),specularColorMapUv:ze&&p(v.specularColorMap.channel),specularIntensityMapUv:z&&p(v.specularIntensityMap.channel),transmissionMapUv:fe&&p(v.transmissionMap.channel),thicknessMapUv:le&&p(v.thicknessMap.channel),alphaMapUv:Ue&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||ae),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Pe||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&$===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(We=>We.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&Ct.getTransfer(v.map.colorSpace)===Ht,decodeVideoTextureEmissive:Se&&v.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(v.emissiveMap.colorSpace)===Ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ve&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&v.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)S.push(U),S.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let S=h[v.type],U;if(S){let I=is[S];U=cu.clone(I.uniforms)}else U=v.uniforms;return U}function b(v,S){let U=u.get(S);return U!==void 0?++U.usedTimes:(U=new pb(n,S,v,s),c.push(U),u.set(S,U)),U}function _(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function M(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:y,acquireProgram:b,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:M}}function _b(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function h0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function d0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,x,m,g){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=f,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=m,y.group=g),e++,y}function l(h,p,f,x,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(h,p,f,x,m,g);f.transmission>0?i.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(h,p,f,x,m,g){let y=a(h,p,f,x,m,g);f.transmission>0?i.unshift(y):f.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,p){t.length>1&&t.sort(h||yb),i.length>1&&i.sort(p||h0),s.length>1&&s.sort(p||h0)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function vb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new d0,n.set(i,[o])):s>=r.length?(o=new d0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new qe};break;case"SpotLight":t={position:new A,direction:new A,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function Mb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Sb=0;function wb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Eb(n){let e=new bb,t=Mb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new bt,o=new bt;function a(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,y=0,b=0,_=0,w=0,M=0,v=0,S=0,U=0,I=0;c.sort(wb);for(let F=0,H=c.length;F<H;F++){let L=c[F],W=L.color,V=L.intensity,q=L.distance,Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zs?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=W.r*V,d+=W.g*V,h+=W.b*V;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],V);I++}else if(L.isSunLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[f]=re,i.sunShadowMap[f]=Y;let Ee=ne.getViewportCount();for(let ke=0;ke<Ee;ke++)i.sunShadowMatrix[x+ke]=ne.getMatrix(ke),i.sunShadowCascade[x+ke]=ne._cascadeData[ke];x+=Ee,f++}i.sun[p]=Z,p++}else if(L.isDirectionalLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=L.shadow.matrix,w++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(W).multiplyScalar(V),Z.distance=q,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[y]=Z;let ne=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,ne.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[y]=ne.matrix,L.castShadow){let re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.spotShadow[y]=re,i.spotShadowMap[y]=Y,v++}y++}else if(L.isRectAreaLight){let Z=e.get(L);Z.color.copy(W).multiplyScalar(V),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=Z,b++}else if(L.isPointLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,i.pointShadow[g]=re,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(V),Z.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[_]=Z,_++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==b||N.hemiLength!==_||N.numSunShadows!==f||N.numDirectionalShadows!==w||N.numPointShadows!==M||N.numSpotShadows!==v||N.numSpotMaps!==S||N.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=g,i.hemi.length=_,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-U,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,N.sunLength=p,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=b,N.hemiLength=_,N.numSunShadows=f,N.numDirectionalShadows=w,N.numPointShadows=M,N.numSpotShadows=v,N.numSpotMaps=S,N.numLightProbes=I,i.version=Sb++)}function l(c,u){let d=0,h=0,p=0,f=0,x=0,m=0,g=u.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let _=c[y];if(_.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(_.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),p++}else if(_.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function f0(n){let e=new Eb(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new f0(n),e.set(s,[a])):r>=o.length?(a=new f0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
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
}`,Cb=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Pb=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],p0=new bt,Oa=new A,hd=new A;function Ib(n,e,t){let i=new ks,s=new _e,r=new _e,o=new $t,a=new rc,l=new oc,c={},u=t.maxTextureSize,d={[es]:Un,[Un]:es,[tn]:tn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Ab,fragmentShader:Rb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new Nt;f.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let g=this.type;this.render=function(M,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===cp&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=br);let U=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Mr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=g!==this.type;H&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=M.length;L<W;L++){let V=M[L],q=V.shadow;if(q===void 0){dt("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Y=q.getFrameExtents();s.multiply(Y),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||H===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===yo){if(V.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ln(s.x,s.y,{format:Zs,type:Jn,minFilter:an,magFilter:an,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new Ms(s.x,s.y,Mi),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=ys,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn}else V.isPointLight?(q.map=new ka(s.x),q.map.depthTexture=new da(s.x,ki)):(q.map=new Ln(s.x,s.y),q.map.depthTexture=new Ms(s.x,s.y,ki)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=ys,this.type===br?(q.map.depthTexture.compareFunction=Z?Jh:Zh,q.map.depthTexture.minFilter=an,q.map.depthTexture.magFilter=an):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Tn,q.map.depthTexture.magFilter=Tn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();V.isPointLight!==!0&&q.updateMatrices(V,S);let re=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:S.layers;for(let Ee=0;Ee<ne;Ee++){let ke=q.getCamera(Ee);if(V.isPointLight){let ie=q.camera,Te=q.matrix,De=V.distance||ie.far;De!==ie.far&&(ie.far=De,ie.updateProjectionMatrix()),Oa.setFromMatrixPosition(V.matrixWorld),ie.position.copy(Oa),hd.copy(ie.position),hd.add(Cb[Ee]),ie.up.copy(Pb[Ee]),ie.lookAt(hd),ie.updateMatrixWorld(),Te.makeTranslation(-Oa.x,-Oa.y,-Oa.z),p0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),q._frustum.setFromProjectionMatrix(p0,ie.coordinateSystem,ie.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(q.map),n.clear());let ie=q.getViewport(Ee);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),F.viewport(o)}i=q.getFrustum(Ee),_(v,S,ke,V,re,this.type)}q.isPointLightShadow!==!0&&this.type===yo&&y(q,S),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(U,I,N)};function y(M,v){let S=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ln(s.x,s.y,{format:Zs,type:Jn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(v,null,S,h,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(v,null,S,p,x,null)}function b(M,v,S,U){let I=null,N=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=I.uuid,H=v.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let W=L[H];W===void 0&&(W=I.clone(),L[H]=W,v.addEventListener("dispose",w)),I=W}if(I.visible=v.visible,I.wireframe=v.wireframe,U===yo?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:d[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=S}return I}function _(M,v,S,U,I,N){if(M.visible===!1)return;if(M.layers.test(I)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&N===yo)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let L=e.update(M),W=M.material;if(Array.isArray(W)){let V=L.groups;for(let q=0,Y=V.length;q<Y;q++){let Z=V[q],ne=W[Z.materialIndex];if(ne&&ne.visible){let re=b(M,ne,U,N);M.onBeforeShadow(n,M,v,S,L,re,Z),n.renderBufferDirect(S,null,L,re,M,Z),M.onAfterShadow(n,M,v,S,L,re,Z)}}}else if(W.visible){let V=b(M,W,U,N);M.onBeforeShadow(n,M,v,S,L,V,null),n.renderBufferDirect(S,null,L,V,M,null),M.onAfterShadow(n,M,v,S,L,V,null)}}let H=M.children;for(let L=0,W=H.length;L<W;L++)_(H[L],v,S,U,I,N)}function w(M){M.target.removeEventListener("dispose",w);for(let S in c){let U=c[S],I=M.target.uuid;I in U&&(U[I].dispose(),delete U[I])}}}function Lb(n,e){function t(){let z=!1,fe=new $t,le=null,Oe=new $t(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!z&&(n.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){z=Ue},setClear:function(Ue,Be,et,Ve,Ce){Ce===!0&&(Ue*=Ve,Be*=Ve,et*=Ve),fe.set(Ue,Be,et,Ve),Oe.equals(fe)===!1&&(n.clearColor(Ue,Be,et,Ve),Oe.copy(fe))},reset:function(){z=!1,le=null,Oe.set(-1,0,0,0)}}}function i(){let z=!1,fe=!1,le=null,Oe=null,Ue=null;return{setReversed:function(Be){if(fe!==Be){let et=e.get("EXT_clip_control");Be?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),fe=Be;let Ve=Ue;Ue=null,this.setClear(Ve)}},getReversed:function(){return fe},setTest:function(Be){Be?K(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Be){le!==Be&&!z&&(n.depthMask(Be),le=Be)},setFunc:function(Be){if(fe&&(Be=kp[Be]),Oe!==Be){switch(Be){case Bl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case zl:n.depthFunc(n.LESS);break;case no:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Vl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=Be}},setLocked:function(Be){z=Be},setClear:function(Be){Ue!==Be&&(Ue=Be,fe&&(Be=1-Be),n.clearDepth(Be))},reset:function(){z=!1,le=null,Oe=null,Ue=null,fe=!1}}}function s(){let z=!1,fe=null,le=null,Oe=null,Ue=null,Be=null,et=null,Ve=null,Ce=null;return{setTest:function(je){z||(je?K(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(je){fe!==je&&!z&&(n.stencilMask(je),fe=je)},setFunc:function(je,xt,We){(le!==je||Oe!==xt||Ue!==We)&&(n.stencilFunc(je,xt,We),le=je,Oe=xt,Ue=We)},setOp:function(je,xt,We){(Be!==je||et!==xt||Ve!==We)&&(n.stencilOp(je,xt,We),Be=je,et=xt,Ve=We)},setLocked:function(je){z=je},setClear:function(je){Ce!==je&&(n.clearStencil(je),Ce=je)},reset:function(){z=!1,fe=null,le=null,Oe=null,Ue=null,Be=null,et=null,Ve=null,Ce=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,_=null,w=null,M=null,v=null,S=new qe(0,0,0),U=0,I=!1,N=null,F=null,H=null,L=null,W=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=Y>=2);let ne=null,re={},Ee=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),ie=new $t().fromArray(Ee),Te=new $t().fromArray(ke);function De(z,fe,le,Oe){let Ue=new Uint8Array(4),Be=n.createTexture();n.bindTexture(z,Be),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<le;et++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(fe+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Be}let se={};se[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(no),oe(!1),$(Lh),K(n.CULL_FACE),k(Mr);function K(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Me(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Ke(z,fe){return h[z]!==fe?(n.bindFramebuffer(z,fe),h[z]=fe,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(z,fe){let le=f,Oe=!1;if(z){le=p.get(fe),le===void 0&&(le=[],p.set(fe,le));let Ue=z.textures;if(le.length!==Ue.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Be=0,et=Ue.length;Be<et;Be++)le[Be]=n.COLOR_ATTACHMENT0+Be;le.length=Ue.length,Oe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(le)}function $e(z){return x!==z?(n.useProgram(z),x=z,!0):!1}let Ie={[Sr]:n.FUNC_ADD,[up]:n.FUNC_SUBTRACT,[hp]:n.FUNC_REVERSE_SUBTRACT};Ie[dp]=n.MIN,Ie[fp]=n.MAX;let he={[yc]:n.ZERO,[Ys]:n.ONE,[pp]:n.SRC_COLOR,[Uh]:n.SRC_ALPHA,[vp]:n.SRC_ALPHA_SATURATE,[_p]:n.DST_COLOR,[gp]:n.DST_ALPHA,[mp]:n.ONE_MINUS_SRC_COLOR,[Ks]:n.ONE_MINUS_SRC_ALPHA,[yp]:n.ONE_MINUS_DST_COLOR,[xp]:n.ONE_MINUS_DST_ALPHA,[bp]:n.CONSTANT_COLOR,[Mp]:n.ONE_MINUS_CONSTANT_COLOR,[Sp]:n.CONSTANT_ALPHA,[wp]:n.ONE_MINUS_CONSTANT_ALPHA};function k(z,fe,le,Oe,Ue,Be,et,Ve,Ce,je){if(z===Mr){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),z!==vo){if(z!==g||je!==I){if((y!==Sr||w!==Sr)&&(n.blendEquation(n.FUNC_ADD),y=Sr,w=Sr),je)switch(z){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFunc(n.ONE,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:pt("WebGLState: Invalid blending: ",z);break}else switch(z){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dh:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nh:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",z);break}b=null,_=null,M=null,v=null,S.set(0,0,0),U=0,g=z,I=je}return}Ue=Ue||fe,Be=Be||le,et=et||Oe,(fe!==y||Ue!==w)&&(n.blendEquationSeparate(Ie[fe],Ie[Ue]),y=fe,w=Ue),(le!==b||Oe!==_||Be!==M||et!==v)&&(n.blendFuncSeparate(he[le],he[Oe],he[Be],he[et]),b=le,_=Oe,M=Be,v=et),(Ve.equals(S)===!1||Ce!==U)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Ce),S.copy(Ve),U=Ce),g=z,I=!1}function X(z,fe){z.side===tn?Me(n.CULL_FACE):K(n.CULL_FACE);let le=z.side===Un;fe&&(le=!le),oe(le),z.blending===$s&&z.transparent===!1?k(Mr):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Oe=z.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(z){N!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),N=z)}function $(z){z!==ap?(K(n.CULL_FACE),z!==F&&(z===Lh?n.cullFace(n.BACK):z===lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),F=z}function te(z){z!==H&&(q&&n.lineWidth(z),H=z)}function Se(z,fe,le){z?(K(n.POLYGON_OFFSET_FILL),(L!==fe||W!==le)&&(L=fe,W=le,o.getReversed()&&(fe=-fe,le=-le),n.polygonOffset(fe,le))):Me(n.POLYGON_OFFSET_FILL)}function D(z){z?K(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Q(z){z===void 0&&(z=n.TEXTURE0+V-1),ne!==z&&(n.activeTexture(z),ne=z)}function ae(z,fe,le){le===void 0&&(ne===null?le=n.TEXTURE0+V-1:le=ne);let Oe=re[le];Oe===void 0&&(Oe={type:void 0,texture:void 0},re[le]=Oe),(Oe.type!==z||Oe.texture!==fe)&&(ne!==le&&(n.activeTexture(le),ne=le),n.bindTexture(z,fe||se[z]),Oe.type=z,Oe.texture=fe)}function P(){let z=re[ne];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Qe(){try{n.compressedTexImage2D(...arguments)}catch(z){pt("WebGLState:",z)}}function nt(){try{n.compressedTexImage3D(...arguments)}catch(z){pt("WebGLState:",z)}}function ft(){try{n.texSubImage2D(...arguments)}catch(z){pt("WebGLState:",z)}}function Ae(){try{n.texSubImage3D(...arguments)}catch(z){pt("WebGLState:",z)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(z){pt("WebGLState:",z)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(z){pt("WebGLState:",z)}}function Ge(){try{n.texStorage2D(...arguments)}catch(z){pt("WebGLState:",z)}}function R(){try{n.texStorage3D(...arguments)}catch(z){pt("WebGLState:",z)}}function E(){try{n.texImage2D(...arguments)}catch(z){pt("WebGLState:",z)}}function G(){try{n.texImage3D(...arguments)}catch(z){pt("WebGLState:",z)}}function ye(z){return d[z]!==void 0?d[z]:n.getParameter(z)}function ue(z,fe){d[z]!==fe&&(n.pixelStorei(z,fe),d[z]=fe)}function Ne(z){ie.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function He(z){Te.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function pe(z,fe){let le=c.get(fe);le===void 0&&(le=new WeakMap,c.set(fe,le));let Oe=le.get(z);Oe===void 0&&(Oe=n.getUniformBlockIndex(fe,z.name),n.uniformBlockBinding(fe,Oe,Oe),le.set(z,Oe))}function me(z,fe,le){let Ue=c.get(fe).get(z);l[Ue]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ue,le),l[Ue]=le)}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},h={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,y=null,b=null,_=null,w=null,M=null,v=null,S=new qe(0,0,0),U=0,I=!1,N=null,F=null,H=null,L=null,W=null,ie.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:Me,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:$e,setBlending:k,setMaterial:X,setFlipSided:oe,setCullFace:$,setLineWidth:te,setPolygonOffset:Se,setScissorTest:D,activeTexture:Q,bindTexture:ae,unbindTexture:P,compressedTexImage2D:Qe,compressedTexImage3D:nt,texImage2D:E,texImage3D:G,pixelStorei:ue,getParameter:ye,updateUBOMapping:pe,uniformBlockBinding:me,texStorage2D:Ge,texStorage3D:R,texSubImage2D:ft,texSubImage3D:Ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:be,scissor:Ne,viewport:He,reset:ze}}function Db(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,x=new FinalizationRegistry(R=>f.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):ta("canvas")}function y(R,E,G){let ye=1,ue=Ge(R);if((ue.width>G||ue.height>G)&&(ye=G/Math.max(ue.width,ue.height)),ye<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Ne=Math.floor(ye*ue.width),He=Math.floor(ye*ue.height);h===void 0&&(h=g(Ne,He));let pe=E?g(Ne,He):h;return pe.width=Ne,pe.height=He,pe.getContext("2d").drawImage(R,0,0,Ne,He),dt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Ne+"x"+He+")."),pe}else return"data"in R&&dt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),R;return R}function b(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,E,G,ye,ue,Ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let He;ye&&(He=e.get("EXT_texture_norm16"),He||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===n.RED&&(G===n.FLOAT&&(pe=n.R32F),G===n.HALF_FLOAT&&(pe=n.R16F),G===n.UNSIGNED_BYTE&&(pe=n.R8),G===n.UNSIGNED_SHORT&&He&&(pe=He.R16_EXT),G===n.SHORT&&He&&(pe=He.R16_SNORM_EXT)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.R8UI),G===n.UNSIGNED_SHORT&&(pe=n.R16UI),G===n.UNSIGNED_INT&&(pe=n.R32UI),G===n.BYTE&&(pe=n.R8I),G===n.SHORT&&(pe=n.R16I),G===n.INT&&(pe=n.R32I)),E===n.RG&&(G===n.FLOAT&&(pe=n.RG32F),G===n.HALF_FLOAT&&(pe=n.RG16F),G===n.UNSIGNED_BYTE&&(pe=n.RG8),G===n.UNSIGNED_SHORT&&He&&(pe=He.RG16_EXT),G===n.SHORT&&He&&(pe=He.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RG8UI),G===n.UNSIGNED_SHORT&&(pe=n.RG16UI),G===n.UNSIGNED_INT&&(pe=n.RG32UI),G===n.BYTE&&(pe=n.RG8I),G===n.SHORT&&(pe=n.RG16I),G===n.INT&&(pe=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),G===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),G===n.UNSIGNED_INT&&(pe=n.RGB32UI),G===n.BYTE&&(pe=n.RGB8I),G===n.SHORT&&(pe=n.RGB16I),G===n.INT&&(pe=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),G===n.UNSIGNED_INT&&(pe=n.RGBA32UI),G===n.BYTE&&(pe=n.RGBA8I),G===n.SHORT&&(pe=n.RGBA16I),G===n.INT&&(pe=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_SHORT&&He&&(pe=He.RGB16_EXT),G===n.SHORT&&He&&(pe=He.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),E===n.RGBA){let me=Ne?ea:Ct.getTransfer(ue);G===n.FLOAT&&(pe=n.RGBA32F),G===n.HALF_FLOAT&&(pe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(pe=me===Ht?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&He&&(pe=He.RGBA16_EXT),G===n.SHORT&&He&&(pe=He.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(R,E){let G;return R?E===null||E===ki||E===Er?G=n.DEPTH24_STENCIL8:E===Mi?G=n.DEPTH32F_STENCIL8:E===Mo&&(G=n.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===Er?G=n.DEPTH_COMPONENT24:E===Mi?G=n.DEPTH_COMPONENT32F:E===Mo&&(G=n.DEPTH_COMPONENT16),G}function S(R,E){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==an?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function U(R){let E=new WeakRef(R);i.get(R).__ref=E,f.add(E),x.register(R,E,E)}function I(R){let E=i.get(R).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function N(R){H(R.target)}function F(R){L(R.target)}function H(R){R.removeEventListener("dispose",N),I(R),V(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function L(R){R.removeEventListener("dispose",F),I(R),Y(R)}function W(){for(let R of f){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):H(E))}f.clear(),d.clear()}function V(R){let E=i.get(R);if(E.__webglInit===void 0)return;let G=R.source,ye=p.get(G);if(ye){let ue=ye[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&q(R),Object.keys(ye).length===0&&p.delete(G)}i.remove(R)}function q(R){let E=i.get(R);n.deleteTexture(E.__webglTexture);let G=R.source,ye=p.get(G);delete ye[E.__cacheKey],o.memory.textures--}function Y(R){let E=i.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&H(G),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let Ne=0;Ne<E.__webglFramebuffer[ue].length;Ne++)n.deleteFramebuffer(E.__webglFramebuffer[ue][Ne]);else n.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[ue]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ye=R.textures;for(let ue=0,Ne=ye.length;ue<Ne;ue++){let He=i.get(ye[ue]);He.__webglTexture&&(n.deleteTexture(He.__webglTexture),o.memory.textures--),i.remove(ye[ue])}i.remove(R)}let Z=0;function ne(){Z=0}function re(){return Z}function Ee(R){Z=R}function ke(){let R=Z;return R>=s.maxTextures&&dt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,R}function ie(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Te(R,E){let G=i.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let ye=R.image;if(ye===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,R,E);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function De(R,E){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){X(G,R,E);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function se(R,E){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){X(G,R,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function K(R,E){let G=i.get(R);if(R.version>0&&G.__version!==R.version){oe(G,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let Me={[_s]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},Ke={[Tn]:n.NEAREST,[Ap]:n.NEAREST_MIPMAP_NEAREST,[Pa]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Mc]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},Pe={[Ip]:n.NEVER,[jh]:n.ALWAYS,[Lp]:n.LESS,[Zh]:n.LEQUAL,[Dp]:n.EQUAL,[Jh]:n.GEQUAL,[Np]:n.GREATER,[Up]:n.NOTEQUAL};function $e(R,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===an||E.magFilter===Mc||E.magFilter===Pa||E.magFilter===Bi||E.minFilter===an||E.minFilter===Mc||E.minFilter===Pa||E.minFilter===Bi)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Me[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Me[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Me[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ke[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ke[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Pa&&E.minFilter!==Bi||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N),U(E));let ye=E.source,ue=p.get(ye);ue===void 0&&(ue={},p.set(ye,ue));let Ne=ie(E);if(Ne!==R.__cacheKey){ue[Ne]===void 0&&(ue[Ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[Ne].usedTimes++;let He=ue[R.__cacheKey];He!==void 0&&(ue[R.__cacheKey].usedTimes--,He.usedTimes===0&&q(E)),R.__cacheKey=Ne,R.__webglTexture=ue[Ne].texture}return G}function he(R,E,G){return Math.floor(Math.floor(R/G)/E)}function k(R,E,G,ye){let Ne=R.updateRanges;if(Ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,ye,E.data);else{Ne.sort((z,fe)=>z.start-fe.start);let He=0;for(let z=1;z<Ne.length;z++){let fe=Ne[He],le=Ne[z],Oe=fe.start+fe.count,Ue=he(le.start,E.width,4),Be=he(fe.start,E.width,4);le.start<=Oe+1&&Ue===Be&&he(le.start+le.count-1,E.width,4)===Ue?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++He,Ne[He]=le)}Ne.length=He+1;let pe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let z=0,fe=Ne.length;z<fe;z++){let le=Ne[z],Oe=Math.floor(le.start/4),Ue=Math.ceil(le.count/4),Be=Oe%E.width,et=Math.floor(Oe/E.width),Ve=Ue,Ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(n.UNPACK_SKIP_ROWS,et),t.texSubImage2D(n.TEXTURE_2D,0,Be,et,Ve,Ce,G,ye,E.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function X(R,E,G){let ye=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ye=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ye=n.TEXTURE_3D);let ue=Ie(R,E),Ne=E.source;t.bindTexture(ye,R.__webglTexture,n.TEXTURE0+G);let He=i.get(Ne);if(Ne.version!==He.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Ce=Ct.getPrimaries(Ct.workingColorSpace),je=E.colorSpace===As?null:Ct.getPrimaries(E.colorSpace),xt=E.colorSpace===As||Ce===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=y(E.image,!1,s.maxTextureSize);me=be(E,me);let ze=r.convert(E.format,E.colorSpace),z=r.convert(E.type),fe=M(E.internalFormat,ze,z,E.normalized,E.colorSpace,E.isVideoTexture);$e(ye,E);let le,Oe=E.mipmaps,Ue=E.isVideoTexture!==!0,Be=He.__version===void 0||ue===!0,et=Ne.dataReady,Ve=S(E,me);if(E.isDepthTexture)fe=v(E.format===Ts,E.type),Be&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,fe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,fe,me.width,me.height,0,ze,z,null));else if(E.isDataTexture)if(Oe.length>0){Ue&&Be&&t.texStorage2D(n.TEXTURE_2D,Ve,fe,Oe[0].width,Oe[0].height);for(let Ce=0,je=Oe.length;Ce<je;Ce++)le=Oe[Ce],Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,ze,z,le.data):t.texImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,ze,z,le.data);E.generateMipmaps=!1}else Ue?(Be&&t.texStorage2D(n.TEXTURE_2D,Ve,fe,me.width,me.height),et&&k(E,me,ze,z)):t.texImage2D(n.TEXTURE_2D,0,fe,me.width,me.height,0,ze,z,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,fe,Oe[0].width,Oe[0].height,me.depth);for(let Ce=0,je=Oe.length;Ce<je;Ce++)if(le=Oe[Ce],E.format!==zi)if(ze!==null)if(Ue){if(et)if(E.layerUpdates.size>0){let xt=cd(le.width,le.height,E.format,E.type);for(let We of E.layerUpdates){let Tt=le.data.subarray(We*xt/le.data.BYTES_PER_ELEMENT,(We+1)*xt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,We,le.width,le.height,1,ze,Tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,me.depth,ze,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ce,fe,le.width,le.height,me.depth,0,le.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?et&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,me.depth,ze,z,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ce,fe,le.width,le.height,me.depth,0,ze,z,le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ue&&Be&&t.texStorage2D(n.TEXTURE_2D,Ve,fe,Oe[0].width,Oe[0].height);for(let Ce=0,je=Oe.length;Ce<je;Ce++)le=Oe[Ce],E.format!==zi?ze!==null?Ue?et&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,ze,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,le.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,ze,z,le.data):t.texImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,ze,z,le.data)}else if(E.isDataArrayTexture)if(Ue){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,fe,me.width,me.height,me.depth),et)if(E.layerUpdates.size>0){let Ce=cd(me.width,me.height,E.format,E.type);for(let je of E.layerUpdates){let xt=me.data.subarray(je*Ce/me.data.BYTES_PER_ELEMENT,(je+1)*Ce/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,me.width,me.height,1,ze,z,xt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ze,z,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,me.width,me.height,me.depth,0,ze,z,me.data);else if(E.isData3DTexture)Ue?(Be&&t.texStorage3D(n.TEXTURE_3D,Ve,fe,me.width,me.height,me.depth),et&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ze,z,me.data)):t.texImage3D(n.TEXTURE_3D,0,fe,me.width,me.height,me.depth,0,ze,z,me.data);else if(E.isFramebufferTexture){if(Be)if(Ue)t.texStorage2D(n.TEXTURE_2D,Ve,fe,me.width,me.height);else{let Ce=me.width,je=me.height;for(let xt=0;xt<Ve;xt++)t.texImage2D(n.TEXTURE_2D,xt,fe,Ce,je,0,ze,z,null),Ce>>=1,je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Ce=n.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),me.parentNode!==Ce){Ce.appendChild(me),d.add(E),Ce.onpaint=je=>{let xt=je.changedElements;for(let We of d)xt.includes(We.image)&&(We.needsUpdate=!0)},Ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{let xt=n.RGBA,We=n.RGBA,Tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,We,Tt,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ue&&Be){let Ce=Ge(Oe[0]);t.texStorage2D(n.TEXTURE_2D,Ve,fe,Ce.width,Ce.height)}for(let Ce=0,je=Oe.length;Ce<je;Ce++)le=Oe[Ce],Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,ze,z,le):t.texImage2D(n.TEXTURE_2D,Ce,fe,ze,z,le);E.generateMipmaps=!1}else if(Ue){if(Be){let Ce=Ge(me);t.texStorage2D(n.TEXTURE_2D,Ve,fe,Ce.width,Ce.height)}et&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,z,me)}else t.texImage2D(n.TEXTURE_2D,0,fe,ze,z,me);b(E)&&E.mipmapsAutoUpdate===!0&&_(ye),He.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function oe(R,E,G){if(E.image.length!==6)return;let ye=Ie(R,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let Ne=i.get(ue);if(ue.version!==Ne.__version||ye===!0){t.activeTexture(n.TEXTURE0+G);let He=Ct.getPrimaries(Ct.workingColorSpace),pe=E.colorSpace===As?null:Ct.getPrimaries(E.colorSpace),me=E.colorSpace===As||He===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ze=E.isCompressedTexture||E.image[0].isCompressedTexture,z=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let We=0;We<6;We++)!ze&&!z?fe[We]=y(E.image[We],!0,s.maxCubemapSize):fe[We]=z?E.image[We].image:E.image[We],fe[We]=be(E,fe[We]);let le=fe[0],Oe=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),Be=M(E.internalFormat,Oe,Ue,E.normalized,E.colorSpace),et=E.isVideoTexture!==!0,Ve=Ne.__version===void 0||ye===!0,Ce=ue.dataReady,je=S(E,le);$e(n.TEXTURE_CUBE_MAP,E);let xt;if(E.isDepthTexture){if(Be=v(E.format===Ts,E.type),Ve)if(et)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Be,le.width,le.height);else for(let We=0;We<6;We++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Be,le.width,le.height,0,Oe,Ue,null)}else if(ze){et&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Be,le.width,le.height);for(let We=0;We<6;We++){xt=fe[We].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let Xt=xt[Tt];E.format!==zi?Oe!==null?et?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt,0,0,Xt.width,Xt.height,Oe,Xt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt,Be,Xt.width,Xt.height,0,Xt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt,0,0,Xt.width,Xt.height,Oe,Ue,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt,Be,Xt.width,Xt.height,0,Oe,Ue,Xt.data)}}}else{if(xt=E.mipmaps,et&&Ve){xt.length>0&&je++;let We=Ge(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Be,We.width,We.height)}for(let We=0;We<6;We++)if(z){et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,fe[We].width,fe[We].height,Oe,Ue,fe[We].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Be,fe[We].width,fe[We].height,0,Oe,Ue,fe[We].data);for(let Tt=0;Tt<xt.length;Tt++){let Gn=xt[Tt].image[We].image;et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt+1,0,0,Gn.width,Gn.height,Oe,Ue,Gn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt+1,Be,Gn.width,Gn.height,0,Oe,Ue,Gn.data)}}else{et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Oe,Ue,fe[We]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Be,Oe,Ue,fe[We]);for(let Tt=0;Tt<xt.length;Tt++){let Xt=xt[Tt];et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt+1,0,0,Oe,Ue,Xt.image[We]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+We,Tt+1,Be,Oe,Ue,Xt.image[We])}}}b(E)&&E.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),Ne.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function $(R,E,G,ye,ue,Ne){let He=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),me=M(G.internalFormat,He,pe,G.normalized,G.colorSpace),ze=i.get(E),z=i.get(G);if(z.__renderTarget=E,!ze.__hasExternalTextures){let fe=Math.max(1,E.width>>Ne),le=Math.max(1,E.height>>Ne);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Ne,me,fe,le,E.depth,0,He,pe,null):t.texImage2D(ue,Ne,me,fe,le,0,He,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ye,ue,z.__webglTexture,0,ft(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ye,ue,z.__webglTexture,Ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(R,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){let ye=E.depthTexture,ue=ye&&ye.isDepthTexture?ye.type:null,Ne=v(E.stencilBuffer,ue),He=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(E),Ne,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(E),Ne,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,R)}else{let ye=E.textures;for(let ue=0;ue<ye.length;ue++){let Ne=ye[ue],He=r.convert(Ne.format,Ne.colorSpace),pe=r.convert(Ne.type),me=M(Ne.internalFormat,He,pe,Ne.normalized,Ne.colorSpace);Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(E),me,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(R,E,G){let ye=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=i.get(E.depthTexture);ue.__renderTarget=E;let Ne=ye?E.depthTexture.image[0]:E.depthTexture.image;(!ue.__webglTexture||Ne.width!==E.width||Ne.height!==E.height)&&(Ne.width=E.width,Ne.height=E.height,E.depthTexture.needsUpdate=!0),ye?K(E.depthTexture,0):Te(E.depthTexture,0);let He=ue.__webglTexture,pe=ft(E),me=ye?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ze=E.depthTexture.format===Ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===ys)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,me,He,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,me,He,0);else if(E.depthTexture.format===Ts)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,me,He,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ze,me,He,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(R){let E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let ye=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ye){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ye.removeEventListener("dispose",ue)};ye.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ye}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ye=0;ye<6;ye++)Se(E.__webglFramebuffer[ye],R,ye);else R.texture.mipmaps.length>0?Se(E.__webglFramebuffer[0],R,0):Se(E.__webglFramebuffer,R,0);else if(G){E.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ye]),E.__webglDepthbuffer[ye]===void 0)E.__webglDepthbuffer[ye]=n.createRenderbuffer(),te(E.__webglDepthbuffer[ye],R,!1);else{let ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer[ye];n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ne)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),te(E.__webglDepthbuffer,R,!1);else{let ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(R,E,G){let ye=i.get(R);E!==void 0&&$(ye.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&D(R)}function ae(R){let E=R.texture,G=i.get(R),ye=i.get(E);R.addEventListener("dispose",F),U(R);let ue=R.textures,Ne=R.isWebGLCubeRenderTarget===!0,He=ue.length>1;if(He||(ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture()),ye.__version=E.version,o.memory.textures++),Ne){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[pe][me]=n.createFramebuffer()}else G.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)G.__webglFramebuffer[pe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(He)for(let pe=0,me=ue.length;pe<me;pe++){let ze=i.get(ue[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ae(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){let me=ue[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let ze=r.convert(me.format,me.colorSpace),z=r.convert(me.type),fe=M(me.internalFormat,ze,z,me.normalized,me.colorSpace,R.isXRRenderTarget===!0),le=ft(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,fe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),te(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ye.__webglTexture),$e(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)$(G.__webglFramebuffer[pe][me],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else $(G.__webglFramebuffer[pe],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(E)?_(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(He){for(let pe=0,me=ue.length;pe<me;pe++){let ze=ue[pe],z=i.get(ze),fe=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,z.__webglTexture),$e(fe,ze),$(G.__webglFramebuffer,R,ze,n.COLOR_ATTACHMENT0+pe,fe,0),b(ze)&&_(fe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ye.__webglTexture),$e(pe,E),E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)$(G.__webglFramebuffer[me],R,E,n.COLOR_ATTACHMENT0,pe,me);else $(G.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,pe,0);b(E)?_(pe):E.mipmaps.length>0&&n.texParameteri(pe,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&D(R)}function P(R){let E=R.textures;for(let G=0,ye=E.length;G<ye;G++){let ue=E[G];if(b(ue)&&ue.mipmapsAutoUpdate===!0){let Ne=w(R),He=i.get(ue).__webglTexture;t.bindTexture(Ne,He),_(Ne),t.unbindTexture()}}}let Qe=[];function nt(R){if(R.samples>0){if(Ae(R)===!1){let E=R.textures,G=R.width,ye=R.height,ue=n.COLOR_BUFFER_BIT,Ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(R),pe=E.length>1;if(pe)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[ze]);let z=i.get(E[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,z,0)}n.blitFramebuffer(0,0,G,ye,0,0,G,ye,ue,n.NEAREST),l===!0&&(Qe.length=0,Qe.push(n.COLOR_ATTACHMENT0+ze),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Qe.push(Ne),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,He.__webglColorRenderbuffer[ze]);let z=i.get(E[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ft(R){return Math.min(s.maxSamples,R.samples)}function Ae(R){let E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(R){let E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function be(R,E){let G=R.colorSpace,ye=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Qo&&G!==As&&(Ct.getTransfer(G)===Ht?(ye!==zi||ue!==ti)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",G)),E}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ke,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=Ee,this.setTexture2D=Te,this.setTexture2DArray=De,this.setTexture3D=se,this.setTextureCube=K,this.rebindTextures=Q,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ae,this.dispose=W}function Nb(n,e){function t(i,s=As){let r,o=Ct.getTransfer(s);if(i===ti)return n.UNSIGNED_BYTE;if(i===wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===Mo)return n.UNSIGNED_SHORT;if(i===Sc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===Kh)return n.RGB;if(i===zi)return n.RGBA;if(i===ys)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===Tc)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===Zs)return n.RG;if(i===Rc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===Ia||i===La||i===Da||i===Na)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pc||i===Ic||i===Lc||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===Ua||i===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nc||i===Uc)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oc)return r.COMPRESSED_R11_EAC;if(i===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ua)return r.COMPRESSED_RG11_EAC;if(i===kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zc||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===qc||i===$c||i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eu||i===tu||i===nu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===eu)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iu||i===su||i===Fa||i===ru)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===iu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===su)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ru)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
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

}`,_d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new un({vertexShader:Ub,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends Fi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new _d,g={},y=t.getContextAttributes(),b=null,_=null,w=[],M=[],v=new _e,S=null,U=null,I=new In;I.viewport=new $t;let N=new In;N.viewport=new $t;let F=[I,N],H=new _c,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Te=w[ie];return Te===void 0&&(Te=new lo,w[ie]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ie){let Te=w[ie];return Te===void 0&&(Te=new lo,w[ie]=Te),Te.getGripSpace()},this.getHand=function(ie){let Te=w[ie];return Te===void 0&&(Te=new lo,w[ie]=Te),Te.getHandSpace()};function V(ie){let Te=M.indexOf(ie.inputSource);if(Te===-1)return;let De=w[Te];De!==void 0&&(De.update(ie.inputSource,ie.frame,c||o),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<w.length;ie++){let Te=M[ie];Te!==null&&(M[ie]=null,w[ie].disconnect(Te))}L=null,W=null,m.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(b),p=null,h=null,d=null,s=null,_=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),U!==null){let ie=U.camera;ie.fov=U.fov,ie.zoom=U.zoom,ie.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,se=null,K=null;y.depth&&(K=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=y.stencil?Ts:ys,se=y.stencil?Er:ki);let Me={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Ln(h.textureWidth,h.textureHeight,{format:zi,type:ti,depthTexture:new Ms(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let De={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ln(p.framebufferWidth,p.framebufferHeight,{format:zi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(ie){for(let Te=0;Te<ie.removed.length;Te++){let De=ie.removed[Te],se=M.indexOf(De);se>=0&&(M[se]=null,w[se].disconnect(De))}for(let Te=0;Te<ie.added.length;Te++){let De=ie.added[Te],se=M.indexOf(De);if(se===-1){for(let Me=0;Me<w.length;Me++)if(Me>=M.length){M.push(De),se=Me;break}else if(M[Me]===null){M[Me]=De,se=Me;break}if(se===-1)break}let K=w[se];K&&K.connect(De)}}function Z(ie,Te){Te===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Te.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Te=ie.near,De=ie.far;m.texture!==null&&(m.depthNear>0&&(Te=m.depthNear),m.depthFar>0&&(De=m.depthFar)),H.near=N.near=I.near=Te,H.far=N.far=I.far=De,(L!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),L=H.near,W=H.far),H.layers.mask=ie.layers.mask|6,I.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let se=ie.parent,K=H.cameras;Z(H,se);for(let Me=0;Me<K.length;Me++)Z(K[Me],se);H.projectionMatrix.copy(I.projectionMatrix),H.projectionMatrixInverse.copy(I.projectionMatrixInverse),U===null&&ie.isPerspectiveCamera&&(U={camera:ie,fov:ie.fov,zoom:ie.zoom}),ne(ie,H,se)};function ne(ie,Te,De){De===null?ie.matrix.copy(Te.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Te.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ro*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ie){return g[ie]};let re=null;function Ee(ie,Te){if(u=Te.getViewerPose(c||o),f=Te,u!==null){let De=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let se=!1;De.length!==H.cameras.length&&(H.cameras.length=0,se=!0);for(let Pe=0;Pe<De.length;Pe++){let $e=De[Pe],Ie=null;if(p!==null)Ie=p.getViewport($e);else{let k=d.getViewSubImage(h,$e);Ie=k.viewport,Pe===0&&(e.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(_))}let he=F[Pe];he===void 0&&(he=new In,he.layers.enable(Pe),he.viewport=new $t,F[Pe]=he),he.matrix.fromArray($e.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray($e.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Pe===0&&(H.matrix.copy(he.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),se===!0&&H.cameras.push(he)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Pe=d.getDepthInformation(De[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(K&&K.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Pe=0;Pe<De.length;Pe++){let $e=De[Pe].camera;if($e){let Ie=g[$e];Ie||(Ie=new fa,g[$e]=Ie);let he=d.getCameraImage($e);Ie.sourceTexture=he}}}}for(let De=0;De<w.length;De++){let se=M[De],K=w[De];se!==null&&K!==void 0&&K.update(se,Te,c||o)}re&&re(ie,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),f=null}let ke=new m0;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){re=ie},this.dispose=function(){}}},Ob=new bt,E0=new yt;E0.set(-1,0,0,0,1,0,0,0,1);function Bb(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,od(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,b,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(E0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kb(n,e,t,i){let s={},r={};function o(y,b){let _=b.program;i.uniformBlockBinding(y,_,s[y.id])}function a(y,b){let _=s[y.id];_===void 0&&(f(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(y,w);let M=e.render.frame;r[y.id]!==M&&(c(y),r[y.id]=M)}function l(y){let b=n.createBuffer(),_=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,_,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],_=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,v=_.length;M<v;M++){let S=_[M];if(Array.isArray(S))for(let U=0,I=S.length;U<I;U++)u(S[U],M,U,w);else u(S,M,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(y,b,_,w){if(h(y,b,_,w)===!0){let M=y.__offset,v=y.value;if(Array.isArray(v)){let S=0;for(let U=0;U<v.length;U++){let I=v[U],N=x(I,!0);d(I,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,y.__data)}}function d(y,b,_){typeof y=="number"||typeof y=="boolean"?b[_]=y:y.isMatrix3?(b[_]=y.elements[0],b[_+1]=y.elements[1],b[_+2]=y.elements[2],b[_+3]=0,b[_+4]=y.elements[3],b[_+5]=y.elements[4],b[_+6]=y.elements[5],b[_+7]=0,b[_+8]=y.elements[6],b[_+9]=y.elements[7],b[_+10]=y.elements[8],b[_+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-_),_):y.toArray(b,_)}function h(y,b,_,w){let M=y.value,v=b+"_"+_;if(Array.isArray(M)){w[v]===void 0&&(w[v]=[]);let S=w[v],U=!1;for(let I=0;I<M.length;I++)p(M[I],S,I)===!0&&(U=!0);return U}return p(M,w,v)}function p(y,b,_){if(b[_]===void 0)return typeof y=="number"||typeof y=="boolean"?b[_]=y:ArrayBuffer.isView(y)?b[_]=y.slice():b[_]=y.clone(),!0;{let w=b[_];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return b[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function f(y){let b=y.uniforms,_=0,w=16;for(let v=0,S=b.length;v<S;v++){let U=Array.isArray(b[v])?b[v]:[b[v]];for(let I=0,N=U.length;I<N;I++){let F=U[I],H=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(b[v])||Array.isArray(F.value),W=_;for(let q=0,Y=H.length;q<Y;q++){let Z=H[q],ne=x(Z,L),re=_%w,Ee=re%ne.boundary,ke=re+Ee;_+=Ee,ke!==0&&w-ke<ne.storage&&(_+=w-ke),q===0&&(W=_),_+=ne.storage}let V=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new V((_-W)/Float32Array.BYTES_PER_ELEMENT),F.__offset=W}}let M=_%w;return M>0&&(_+=w-M),y.__size=_,y.__cache={},this}function x(y,b){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(y){let b=y.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ns=null;function Hb(){return ns===null&&(ns=new aa(zb,16,16,Zs,Jn),ns.name="DFG_LUT",ns.minFilter=an,ns.magFilter=an,ns.wrapS=Zi,ns.wrapT=Zi,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}var du=class{constructor(e={}){let{canvas:t=Fp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ti}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=p,m=new Set([Cc,Rc,Ac]),g=new Set([ti,ki,Mo,Er,wc,Ec]),y=new Uint32Array(4),b=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,M=null,v=[],S=[],U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,F=null,H=null,L=null,W=null;this._outputColorSpace=Pn;let V=0,q=0,Y=null,Z=-1,ne=null,re=new $t,Ee=new $t,ke=null,ie=new qe(0),Te=0,De=t.width,se=t.height,K=1,Me=null,Ke=null,Pe=new $t(0,0,De,se),$e=new $t(0,0,De,se),Ie=!1,he=new ks,k=new Zl,X=!1,oe=!1,$=new bt,te=new A,Se=new $t,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ae(){return Y===null?K:1}let P=i;function Qe(T,B){return t.getContext(T,B)}let nt,ft,Ae,xe,be,Ge,R,E,G,ye,ue,Ne,He,pe,me,ze,z,fe,le,Oe,Ue,Be,et;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",We,!1),P===null){let B="webgl2";if(P=Qe(B,T),P===null)throw Qe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),pt("WebGLRenderer: "+T.message),T}function Ve(){nt=new jv(P),nt.init(),Ue=new Nb(P,nt),ft=new Hv(P,nt,e,Ue),Ae=new Lb(P,nt),ft.reversedDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),H=P.createFramebuffer(),L=P.createFramebuffer(),W=P.createFramebuffer(),xe=new t1(P),be=new _b,Ge=new Db(P,nt,Ae,be,ft,Ue,xe),R=new Jv(I),E=new i_(P),Be=new kv(P,E),G=new Qv(P,E,xe,Be),ye=new i1(P,G,E,Be,xe),fe=new n1(P,ft,Ge),me=new Gv(be),ue=new xb(I,R,nt,ft,Be,me),Ne=new Bb(I,be),He=new vb,pe=new Tb(nt),z=new Bv(I,R,Ae,ye,f,l),ze=new Ib(I,ye,ft),et=new kb(P,xe,ft,Ae),le=new zv(P,nt,xe),Oe=new e1(P,nt,xe),xe.programs=ue.programs,I.capabilities=ft,I.extensions=nt,I.properties=be,I.renderLists=He,I.shadowMap=ze,I.state=Ae,I.info=xe}x!==ti&&(U=new r1(x,t.width,t.height,a,s,r));let Ce=new yd(I,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(De,se,!1))},this.getSize=function(T){return T.set(De,se)},this.setSize=function(T,B,ee=!0){if(Ce.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}De=T,se=B,t.width=Math.floor(T*K),t.height=Math.floor(B*K),ee===!0&&(t.style.width=T+"px",t.style.height=B+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(De*K,se*K).floor()},this.setDrawingBufferSize=function(T,B,ee){De=T,se=B,K=ee,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===ti){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,B,ee,J){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,B,ee,J),Ae.viewport(re.copy(Pe).multiplyScalar(ae()).round())},this.getScissor=function(T){return T.copy($e)},this.setScissor=function(T,B,ee,J){T.isVector4?$e.set(T.x,T.y,T.z,T.w):$e.set(T,B,ee,J),Ae.scissor(Ee.copy($e).multiplyScalar(ae()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){Ae.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){Me=T},this.setTransparentSort=function(T){Ke=T},this.getClearColor=function(T){return T.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,ee=!0){let J=0;if(T){let j=!1;if(Y!==null){let O=Y.texture.format;j=m.has(O)}if(j){let O=Y.texture.type,de=g.has(O),ce=z.getClearColor(),ve=z.getClearAlpha(),Le=ce.r,Je=ce.g,ot=ce.b;de?(y[0]=Le,y[1]=Je,y[2]=ot,y[3]=ve,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Le,b[1]=Je,b[2]=ot,b[3]=ve,P.clearBufferiv(P.COLOR,0,b))}else J|=P.COLOR_BUFFER_BIT}B&&(J|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),z.dispose(),He.dispose(),pe.dispose(),Ge.dispose(),be.dispose(),R.dispose(),ye.dispose(),G.dispose(),Be.dispose(),et.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",sr),Ce.removeEventListener("sessionend",Ls),gi.stop()};function je(T){T.preventDefault(),na("WebGLRenderer: Context Lost."),N=!0}function xt(){na("WebGLRenderer: Context Restored."),N=!1;let T=xe.autoReset,B=ze.enabled,ee=ze.autoUpdate,J=ze.needsUpdate,j=ze.type;Ve(),xe.autoReset=T,ze.enabled=B,ze.autoUpdate=ee,ze.needsUpdate=J,ze.type=j}function We(T){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){let B=T.target;B.removeEventListener("dispose",Tt),Xt(B)}function Xt(T){Gn(T),be.remove(T)}function Gn(T){let B=be.get(T).programs;B!==void 0&&(B.forEach(function(ee){ue.releaseProgram(ee)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,ee,J,j,O){B===null&&(B=D);let de=j.isMesh&&j.matrixWorld.determinantAffine()<0,ce=cs(T,B,ee,J,j);Ae.setMaterial(J,de);let ve=ee.index,Le=1;if(J.wireframe===!0){if(ve=G.getWireframeAttribute(ee),ve===void 0)return;Le=2}let Je=ee.drawRange,ot=ee.attributes.position,tt=Je.start*Le,At=(Je.start+Je.count)*Le;O!==null&&(tt=Math.max(tt,O.start*Le),At=Math.min(At,(O.start+O.count)*Le)),ve!==null?(tt=Math.max(tt,0),At=Math.min(At,ve.count)):ot!=null&&(tt=Math.max(tt,0),At=Math.min(At,ot.count));let sn=At-tt;if(sn<0||sn===1/0)return;Be.setup(j,J,ce,ee,ve);let Zt,qt=le;if(ve!==null&&(Zt=E.get(ve),qt=Oe,qt.setIndex(Zt)),j.isMesh)J.wireframe===!0?(Ae.setLineWidth(J.wireframeLinewidth*ae()),qt.setMode(P.LINES)):qt.setMode(P.TRIANGLES);else if(j.isLine){let On=J.linewidth;On===void 0&&(On=1),Ae.setLineWidth(On*ae()),j.isLineSegments?qt.setMode(P.LINES):j.isLineLoop?qt.setMode(P.LINE_LOOP):qt.setMode(P.LINE_STRIP)}else j.isPoints?qt.setMode(P.POINTS):j.isSprite&&qt.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))qt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let On=j._multiDrawStarts,it=j._multiDrawCounts,Vn=j._multiDrawCount,Ot=ve?E.get(ve).bytesPerElement:1,ar=be.get(J).currentProgram.getUniforms();for(let Bn=0;Bn<Vn;Bn++)ar.setValue(P,"_gl_DrawID",Bn),qt.render(On[Bn]/Ot,it[Bn])}else if(j.isInstancedMesh)qt.renderInstances(tt,sn,j.count);else if(ee.isInstancedBufferGeometry){let On=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,it=Math.min(ee.instanceCount,On);qt.renderInstances(tt,sn,it)}else qt.render(tt,sn)};function Pi(T,B,ee,J){F!==null&&T.isNodeMaterial&&F.setObject(J,T),X===!0&&me.setState(T,ee,!1),T.transparent===!0&&T.side===tn&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,St(T,B,J),T.side=es,T.needsUpdate=!0,St(T,B,J),T.side=tn):St(T,B,J)}this.compile=function(T,B,ee=null){ee===null&&(ee=T),F!==null&&F.renderStart(T,B,ee),M=pe.get(ee),M.init(B),S.push(M),ee.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),T!==ee&&T.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),oe=this.localClippingEnabled,X=me.init(this.clippingPlanes,oe),X===!0&&me.setGlobalState(this.clippingPlanes,B),F!==null&&ze.render(M.state.shadowsArray,ee,B);let J=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let O=j.material;if(O)if(Array.isArray(O))for(let de=0;de<O.length;de++){let ce=O[de];Pi(ce,ee,B,j),J.add(ce)}else Pi(O,ee,B,j),J.add(O)}),M=S.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(T,B,ee=null){let J=this.compile(T,B,ee);return new Promise(j=>{function O(){if(J.forEach(function(de){let ve=be.get(de).currentProgram;(ve===void 0||ve.isReady())&&J.delete(de)}),J.size===0){j(T);return}setTimeout(O,10)}nt.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let mi=null;function ir(T){mi&&mi(T)}function sr(){gi.stop()}function Ls(){gi.start()}let gi=new m0;gi.setAnimationLoop(ir),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){mi=T,Ce.setAnimationLoop(T),T===null?gi.stop():gi.start()},Ce.addEventListener("sessionstart",sr),Ce.addEventListener("sessionend",Ls),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(T,B);let ee=Ce.enabled===!0&&Ce.isPresenting===!0,J=U!==null&&(Y===null||ee)&&U.begin(I,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(B),B=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,Y),M=pe.get(T,S.length),M.init(B),M.state.textureUnits=Ge.getTextureUnits(),S.push(M),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?k.setFromArrayCamera(B):he.setFromProjectionMatrix($,vi,B.reversedDepth),oe=this.localClippingEnabled,X=me.init(this.clippingPlanes,oe),w=He.get(T,v.length),w.init(),v.push(w),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){let de=I.xr.getDepthSensingMesh();de!==null&&xi(de,B,-1/0,I.sortObjects)}xi(T,B,0,I.sortObjects),w.finish(),F!==null&&F.updateLights(M.state.lightsArray),I.sortObjects===!0&&w.sort(Me,Ke),Q=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Q&&z.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),X===!0&&me.beginShadows();let j=M.state.shadowsArray;if(ze.render(j,T,B),X===!0&&me.endShadows(),(J&&U.hasRenderPass())===!1){let de=w.opaque,ce=w.transmissive;if(M.setupLights(),B.isArrayCamera){let ve=B.cameras;if(ce.length>0)for(let Le=0,Je=ve.length;Le<Je;Le++){let ot=ve[Le];Ii(de,ce,T,ot)}Q&&z.render(T);for(let Le=0,Je=ve.length;Le<Je;Le++){let ot=ve[Le];ls(w,T,ot,ot.viewport)}}else ce.length>0&&Ii(de,ce,T,B),Q&&z.render(T),ls(w,T,B)}Y!==null&&q===0&&(Ge.updateMultisampleRenderTarget(Y),Ge.updateRenderTargetMipmap(Y)),J&&U.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Be.resetDefaultState(),Z=-1,ne=null,S.pop(),S.length>0?(M=S[S.length-1],Ge.setTextureUnits(M.state.textureUnits),X===!0&&me.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,F!==null&&F.renderEnd()};function xi(T,B,ee,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){let de=B.isArrayCamera?k:he;if(!T.frustumCulled||T.intersectsFrustum(de)){J&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let ce=ye.update(T),ve=T.material;ve.visible&&w.push(T,ce,ve,ee,Se.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let de=B.isArrayCamera?k:he;if(!T.frustumCulled||T.intersectsFrustum(de)){let ce=ye.update(T),ve=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Se.copy(ce.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(ve)){let Le=ce.groups;for(let Je=0,ot=Le.length;Je<ot;Je++){let tt=Le[Je],At=ve[tt.materialIndex];At&&At.visible&&w.push(T,ce,At,ee,Se.z,tt,B)}}else ve.visible&&w.push(T,ce,ve,ee,Se.z,null,B)}}}let O=T.children;for(let de=0,ce=O.length;de<ce;de++)xi(O[de],B,ee,J)}function ls(T,B,ee,J){let{opaque:j,transmissive:O,transparent:de}=T;M.setupLightsView(ee),X===!0&&me.setGlobalState(I.clippingPlanes,ee),J&&Ae.viewport(re.copy(J)),j.length>0&&qi(j,B,ee),O.length>0&&qi(O,B,ee),de.length>0&&qi(de,B,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ii(T,B,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[J.id]===void 0){let tt=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[J.id]=new Ln(1,1,{generateMipmaps:!0,type:tt?Jn:ti,minFilter:Bi,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}let O=M.state.transmissionRenderTarget[J.id],de=J.viewport||re;O.setSize(de.z*I.transmissionResolutionScale,de.w*I.transmissionResolutionScale);let ce=I.getRenderTarget(),ve=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(O),I.getClearColor(ie),Te=I.getClearAlpha(),Te<1&&I.setClearColor(16777215,.5),I.clear(),Q&&z.render(ee);let Je=I.toneMapping;I.toneMapping=ts;let ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),M.setupLightsView(J),X===!0&&me.setGlobalState(I.clippingPlanes,J),qi(T,ee,J),Ge.updateMultisampleRenderTarget(O),Ge.updateRenderTargetMipmap(O),nt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let At=0,sn=B.length;At<sn;At++){let Zt=B[At],{object:qt,geometry:On,material:it,group:Vn}=Zt;if(it.side===tn&&qt.layers.test(J.layers)){let Ot=it.side;it.side=Un,it.needsUpdate=!0,_i(qt,ee,J,On,it,Vn),it.side=Ot,it.needsUpdate=!0,tt=!0}}tt===!0&&(Ge.updateMultisampleRenderTarget(O),Ge.updateRenderTargetMipmap(O))}I.setRenderTarget(ce,ve,Le),I.setClearColor(ie,Te),ot!==void 0&&(J.viewport=ot),I.toneMapping=Je}function qi(T,B,ee){let J=B.isScene===!0?B.overrideMaterial:null;for(let j=0,O=T.length;j<O;j++){let de=T[j],{object:ce,geometry:ve,group:Le}=de,Je=de.material;Je.allowOverride===!0&&J!==null&&(Je=J),ce.layers.test(ee.layers)&&_i(ce,B,ee,ve,Je,Le)}}function _i(T,B,ee,J,j,O){F!==null&&j.isNodeMaterial&&F.setObject(T,j),T.onBeforeRender(I,B,ee,J,j,O),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(I,B,ee,J,T,O),j.transparent===!0&&j.side===tn&&j.forceSinglePass===!1?(j.side=Un,j.needsUpdate=!0,I.renderBufferDirect(ee,B,J,j,T,O),j.side=es,j.needsUpdate=!0,I.renderBufferDirect(ee,B,J,j,T,O),j.side=tn):I.renderBufferDirect(ee,B,J,j,T,O),T.onAfterRender(I,B,ee,J,j,O)}function $i(T){let B=0;for(let ee of T)ee.texture!==null&&B++;return B}function St(T,B,ee){B.isScene!==!0&&(B=D);let J=be.get(T),j=M.state.lights,O=M.state.shadowsArray,de=j.state.version,ce=ue.getParameters(T,j.state,O,B,ee,M.state.lightProbeGridArray),ve=ue.getProgramCacheKey(ce),Le=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,J.fog=B.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=R.get(T.envMap||J.environment,Je),J.envMapRotation=J.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Tt),Le=new Map,J.programs=Le,J.programVariants=new Map);let ot=Le.get(ve);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===de)return xn(T,ce),ot}else ce.uniforms=ue.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,ee,ce),T.onBeforeCompile(ce,I),ot=ue.acquireProgram(ce,ve),Le.set(ve,ot),J.uniforms=ce.uniforms;let tt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(tt.clippingPlanes=me.uniform),xn(T,ce),J.needsLights=Yi(T),J.lightsStateVersion=de,J.needsLights&&(tt.ambientLightColor.value=j.state.ambient,tt.lightProbe.value=j.state.probe,tt.sunLights.value=j.state.sun,tt.sunLightShadows.value=j.state.sunShadow,tt.directionalLights.value=j.state.directional,tt.directionalLightShadows.value=j.state.directionalShadow,tt.spotLights.value=j.state.spot,tt.spotLightShadows.value=j.state.spotShadow,tt.rectAreaLights.value=j.state.rectArea,tt.ltc_1.value=j.state.rectAreaLTC1,tt.ltc_2.value=j.state.rectAreaLTC2,tt.pointLights.value=j.state.point,tt.pointLightShadows.value=j.state.pointShadow,tt.hemisphereLights.value=j.state.hemi,tt.sunShadowMatrix.value=j.state.sunShadowMatrix,tt.sunShadowCascade.value=j.state.sunShadowCascade,tt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,tt.spotLightMatrix.value=j.state.spotLightMatrix,tt.spotLightMap.value=j.state.spotLightMap,tt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=$i(M.state.lightProbeGridArray),J.currentProgram=ot,J.uniformsList=null,ot}function Re(T,B,ee,J,j){let O=be.get(T),de=O.currentProgram.id+","+J+","+j,ce=O.programVariants.get(de);return ce===void 0?(ce=St(T,B,ee),O.programVariants.set(de,ce)):(O.currentProgram=ce,O.uniformsList=null,O.outputColorSpace=J,O.toneMapping=j),ce}function _t(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=So.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function xn(T,B){let ee=be.get(T);ee.outputColorSpace=B.outputColorSpace,ee.batching=B.batching,ee.batchingColor=B.batchingColor,ee.instancing=B.instancing,ee.instancingColor=B.instancingColor,ee.instancingMorph=B.instancingMorph,ee.skinning=B.skinning,ee.morphTargets=B.morphTargets,ee.morphNormals=B.morphNormals,ee.morphColors=B.morphColors,ee.morphTargetsCount=B.morphTargetsCount,ee.numClippingPlanes=B.numClippingPlanes,ee.numIntersection=B.numClipIntersection,ee.vertexAlphas=B.vertexAlphas,ee.vertexTangents=B.vertexTangents,ee.toneMapping=B.toneMapping}function cs(T,B,ee,J,j){B.isScene!==!0&&(B=D),Ge.resetTextureUnits();let O=B.fog,de=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?B.environment:null,ce=Y===null?I.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ct.workingColorSpace,ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Le=R.get(J.envMap||de,ve),Je=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ot=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),tt=!!ee.morphAttributes.position,At=!!ee.morphAttributes.normal,sn=!!ee.morphAttributes.color,Zt=ts;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Zt=I.toneMapping);let qt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,On=qt!==void 0?qt.length:0,it=be.get(J),Vn=M.state.lights;if(X===!0&&(oe===!0||T!==ne)){let rn=T===ne&&J.id===Z;me.setState(J,T,rn)}let Ot=!1,ar=!1;J.version===it.__version?it.needsLights&&it.lightsStateVersion!==Vn.state.version||j.isBatchedMesh&&it.batching===!1||!j.isBatchedMesh&&it.batching===!0||j.isBatchedMesh&&it.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&it.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&it.instancing===!1||!j.isInstancedMesh&&it.instancing===!0||j.isSkinnedMesh&&it.skinning===!1||!j.isSkinnedMesh&&it.skinning===!0||j.isInstancedMesh&&it.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&it.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&it.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&it.instancingMorph===!1&&j.morphTexture!==null||it.envMap!==Le||J.fog===!0&&it.fog!==O||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==me.numPlanes||it.numIntersection!==me.numIntersection)||it.vertexAlphas!==Je||it.vertexTangents!==ot||it.morphTargets!==tt||it.morphNormals!==At||it.morphColors!==sn||it.morphTargetsCount!==On||it.numLightProbeGrids!==$i(M.state.lightProbeGridArray)?Ot=!0:(it.outputColorSpace!==ce||it.toneMapping!==Zt)&&(ar=!0):(Ot=!0,it.__version=J.version);let Bn=it.currentProgram;(Ot===!0||ar===!0)&&(Bn=ar===!0?Re(J,B,j,ce,Zt):St(J,B,j),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Bn,it));let il=!1,Ds=!1,lr=!1,Dt=Bn.getUniforms(),Cn=it.uniforms;if(Ae.useProgram(Bn.program)&&(il=!0,Ds=!0,lr=!0),J.id!==Z&&(Z=J.id,Ds=!0),il||ne!==T){Ae.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(P,"projectionMatrix",T.projectionMatrix),Dt.setValue(P,"viewMatrix",T.matrixWorldInverse);let wn=Dt.map.cameraPosition;wn!==void 0&&wn.setValue(P,te.setFromMatrixPosition(T.matrixWorld)),ft.logarithmicDepthBuffer&&Dt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,Ds=!0,lr=!0)}if(it.needsLights&&(Vn.state.sunShadowMap.length>0&&Dt.setValue(P,"sunShadowMap",Vn.state.sunShadowMap,Ge),Vn.state.directionalShadowMap.length>0&&Dt.setValue(P,"directionalShadowMap",Vn.state.directionalShadowMap,Ge),Vn.state.spotShadowMap.length>0&&Dt.setValue(P,"spotShadowMap",Vn.state.spotShadowMap,Ge),Vn.state.pointShadowMap.length>0&&Dt.setValue(P,"pointShadowMap",Vn.state.pointShadowMap,Ge)),j.isSkinnedMesh){Dt.setOptional(P,j,"bindMatrix"),Dt.setOptional(P,j,"bindMatrixInverse");let rn=j.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Dt.setValue(P,"boneTexture",rn.boneTexture,Ge))}j.isBatchedMesh&&(Dt.setOptional(P,j,"batchingTexture"),Dt.setValue(P,"batchingTexture",j._matricesTexture,Ge),Dt.setOptional(P,j,"batchingIdTexture"),Dt.setValue(P,"batchingIdTexture",j._indirectTexture,Ge),Dt.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(P,"batchingColorTexture",j._colorsTexture,Ge));let Li=ee.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&fe.update(j,ee,Bn),(Ds||it.receiveShadow!==j.receiveShadow)&&(it.receiveShadow=j.receiveShadow,Dt.setValue(P,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&B.environment!==null&&(Cn.envMapIntensity.value=B.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=Hb()),Ds){if(Dt.setValue(P,"toneMappingExposure",I.toneMappingExposure),it.needsLights&&rr(Cn,lr),O&&J.fog===!0&&Ne.refreshFogUniforms(Cn,O),Ne.refreshMaterialUniforms(Cn,J,K,se,M.state.transmissionRenderTarget[T.id]),it.needsLights&&it.numLightProbeGrids>0){let rn=_,wn=0;for(let us of M.state.lightProbeGridArray)us.texture!==null&&(rn.textures[wn]=us.texture,rn.min[wn]=us.boundingBox.min,rn.max[wn]=us.boundingBox.max,rn.resolution[wn]=us.resolution,wn++);for(let us in rn)rn[us].length=wn;Cn.probesSH.value=rn.textures,Cn.probesMin.value=rn.min,Cn.probesMax.value=rn.max,Cn.probesResolution.value=rn.resolution}So.upload(P,_t(it),Cn,Ge)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(So.upload(P,_t(it),Cn,Ge),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(P,"center",j.center),Dt.setValue(P,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(P,"normalMatrix",j.normalMatrix),Dt.setValue(P,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let rn=J.uniformsGroups;for(let wn=0,us=rn.length;wn<us;wn++){let pf=rn[wn];et.update(pf,Bn),et.bind(pf,Bn)}}return Bn}function rr(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Yi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,B,ee){let J=be.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=B,be.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let ee=be.get(T);ee.__webglFramebuffer=B,ee.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,ee=0){Y=T,V=B,q=ee;let J=null,j=!1,O=!1;if(T){let ce=be.get(T);if(ce.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(P.FRAMEBUFFER,ce.__webglFramebuffer),re.copy(T.viewport),Ee.copy(T.scissor),ke=T.scissorTest,Ae.viewport(re),Ae.scissor(Ee),Ae.setScissorTest(ke),Z=-1;return}else if(ce.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(ce.__hasExternalTextures)Ge.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(ce.__boundDepthTexture!==Je){if(Je!==null&&be.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}let ve=T.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(O=!0);let Le=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[B])?J=Le[B][ee]:J=Le[B],j=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?J=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?J=Le[ee]:J=Le,re.copy(T.viewport),Ee.copy(T.scissor),ke=T.scissorTest}else re.copy(Pe).multiplyScalar(K).floor(),Ee.copy($e).multiplyScalar(K).floor(),ke=Ie;if(ee!==0&&(J=H),Ae.bindFramebuffer(P.FRAMEBUFFER,J)&&Ae.drawBuffers(T,J),Ae.viewport(re),Ae.scissor(Ee),Ae.setScissorTest(ke),j){let ce=be.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,ce.__webglTexture,ee)}else if(O){let ce=B;for(let ve=0;ve<T.textures.length;ve++){let Le=be.get(T.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Le.__webglTexture,ee,ce)}}else if(T!==null&&ee!==0){let ce=be.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,ee)}Z=-1};function or(T){let B=be.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=ft.textureFormatReadable(T.format),B.__typeReadable=ft.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,ee,J,j,O,de,ce=0){if(!(T&&T.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de],Array.isArray(ve)&&(ve=ve[0])),ve){Ae.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Le=T.textures[ce],Je=Le.format,ot=Le.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce);let tt=or(Le);if(tt.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&ee>=0&&ee<=T.height-j&&P.readPixels(B,ee,J,j,Ue.convert(Je),Ue.convert(ot),O)}finally{let Le=Y!==null?be.get(Y).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,B,ee,J,j,O,de,ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de],Array.isArray(ve)&&(ve=ve[0])),ve)if(B>=0&&B<=T.width-J&&ee>=0&&ee<=T.height-j){Ae.bindFramebuffer(P.FRAMEBUFFER,ve);let Le=T.textures[ce],Je=Le.format,ot=Le.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ce);let tt=or(Le);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.bufferData(P.PIXEL_PACK_BUFFER,O.byteLength,P.STREAM_READ),P.readPixels(B,ee,J,j,Ue.convert(Je),Ue.convert(ot),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let sn=Y!==null?be.get(Y).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,sn);let Zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bp(P,Zt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,At),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,O),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(At),P.deleteSync(Zt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,ee=0){let J=Math.pow(2,-ee),j=Math.floor(T.image.width*J),O=Math.floor(T.image.height*J),de=B!==null?B.x:0,ce=B!==null?B.y:0;Ge.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,ee,0,0,de,ce,j,O),Ae.unbindTexture()},this.copyTextureToTexture=function(T,B,ee=null,J=null,j=0,O=0){let de,ce,ve,Le,Je,ot,tt,At,sn,Zt=T.isCompressedTexture?T.mipmaps[O]:T.image;if(ee!==null)de=ee.max.x-ee.min.x,ce=ee.max.y-ee.min.y,ve=ee.isBox3?ee.max.z-ee.min.z:1,Le=ee.min.x,Je=ee.min.y,ot=ee.isBox3?ee.min.z:0;else{let Dt=Math.pow(2,-j);de=Math.floor(Zt.width*Dt),ce=Math.floor(Zt.height*Dt),T.isDataArrayTexture?ve=Zt.depth:T.isData3DTexture?ve=Math.floor(Zt.depth*Dt):ve=1,Le=0,Je=0,ot=0}J!==null?(tt=J.x,At=J.y,sn=J.z):(tt=0,At=0,sn=0);let qt=Ue.convert(B.format),On=Ue.convert(B.type),it;B.isData3DTexture?(Ge.setTexture3D(B,0),it=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ge.setTexture2DArray(B,0),it=P.TEXTURE_2D_ARRAY):(Ge.setTexture2D(B,0),it=P.TEXTURE_2D),Ae.activeTexture(P.TEXTURE0),Ae.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),Ae.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ae.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Vn=Ae.getParameter(P.UNPACK_ROW_LENGTH),Ot=Ae.getParameter(P.UNPACK_IMAGE_HEIGHT),ar=Ae.getParameter(P.UNPACK_SKIP_PIXELS),Bn=Ae.getParameter(P.UNPACK_SKIP_ROWS),il=Ae.getParameter(P.UNPACK_SKIP_IMAGES);Ae.pixelStorei(P.UNPACK_ROW_LENGTH,Zt.width),Ae.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zt.height),Ae.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),Ae.pixelStorei(P.UNPACK_SKIP_ROWS,Je),Ae.pixelStorei(P.UNPACK_SKIP_IMAGES,ot);let Ds=T.isDataArrayTexture||T.isData3DTexture,lr=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Dt=be.get(T),Cn=be.get(B),Li=be.get(Dt.__renderTarget),rn=be.get(Cn.__renderTarget);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,Li.__webglFramebuffer),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,rn.__webglFramebuffer);for(let wn=0;wn<ve;wn++)Ds&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(T).__webglTexture,j,ot+wn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.get(B).__webglTexture,O,sn+wn)),P.blitFramebuffer(Le,Je,Le+de,Je+ce,tt,At,tt+de,At+ce,P.DEPTH_BUFFER_BIT,P.NEAREST);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||be.has(T)){let Dt=be.get(T),Cn=be.get(B);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,L),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,W);for(let Li=0;Li<ve;Li++)Ds?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,j,ot+Li):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,j),lr?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Cn.__webglTexture,O,sn+Li):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Cn.__webglTexture,O),j!==0?P.blitFramebuffer(Le,Je,Le+de,Je+ce,tt,At,tt+de,At+ce,P.COLOR_BUFFER_BIT,P.NEAREST):lr?P.copyTexSubImage3D(it,O,tt,At,sn+Li,Le,Je,de,ce):P.copyTexSubImage2D(it,O,tt,At,Le,Je,de,ce);Ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else lr?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(it,O,tt,At,sn,de,ce,ve,qt,On,Zt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(it,O,tt,At,sn,de,ce,ve,qt,Zt.data):P.texSubImage3D(it,O,tt,At,sn,de,ce,ve,qt,On,Zt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,tt,At,de,ce,qt,On,Zt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,tt,At,Zt.width,Zt.height,qt,Zt.data):P.texSubImage2D(P.TEXTURE_2D,O,tt,At,de,ce,qt,On,Zt);Ae.pixelStorei(P.UNPACK_ROW_LENGTH,Vn),Ae.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),Ae.pixelStorei(P.UNPACK_SKIP_PIXELS,ar),Ae.pixelStorei(P.UNPACK_SKIP_ROWS,Bn),Ae.pixelStorei(P.UNPACK_SKIP_IMAGES,il),O===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&P.generateMipmap(it),Ae.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){V=0,q=0,Y=null,Ae.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}};var T0={type:"change"},bd={type:"start"},R0={type:"end"},mu=new bs,A0=new Xn,Gb=Math.cos(70*lu.DEG2RAD),Mn=new A,ni=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6,gu=class extends Ra{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new ln,this._lastTargetPosition=new A,this._quat=new ln().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _o,this._sphericalDelta=new _o,this._scale=1,this._panOffset=new A,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new A,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wb.bind(this),this._onPointerDown=Vb.bind(this),this._onPointerUp=Xb.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Yb.bind(this),this._onKeyDown=Kb.bind(this),this._onTouchStart=Zb.bind(this),this._onTouchMove=Jb.bind(this),this._onMouseDown=qb.bind(this),this._onMouseMove=$b.bind(this),this._interceptControlDown=Qb.bind(this),this._interceptControlUp=eM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(T0),this.update(),this.state=Bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Mn.copy(t).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ni:i>Math.PI&&(i-=ni),s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Mn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(mu.origin.copy(this.object.position),mu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mu.direction))<Gb?this.object.lookAt(this.target):(A0.setFromNormalAndCoplanarPoint(this.object.up,this.target),mu.intersectPlane(A0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(T0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mn.setFromMatrixColumn(t,0),Mn.multiplyScalar(-e),this._panOffset.add(Mn)}_panUp(e,t){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(t,1):(Mn.setFromMatrixColumn(t,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(e),this._panOffset.add(Mn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Mn.copy(s).sub(this.target);let r=Mn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Vb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Wb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(R0),this.state=Bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Bt.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(bd)}function $b(n){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(n.preventDefault(),this.dispatchEvent(bd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(R0))}function Kb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Zb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1){this.state=Bt.NONE;break}this._handleTouchStartRotate(n),this.state=Bt.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1){this.state=Bt.NONE;break}this._handleTouchStartPan(n),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Bt.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(bd)}function Jb(n){switch(this._trackPointer(n),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Bt.NONE}}function jb(n){this.enabled!==!1&&n.preventDefault()}function Qb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ha=new A;function Si(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ha.copy(e),Ha[i]=0,Ha.normalize();let c=.5*o/(o+a),u=1-Ha.angleTo(n)/l;return Math.sign(Ha[t])===1?u*c:a/(o+a)+c+c*(1-u)}var xu=class n extends Ft{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new A,c=new A,u=new A(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new A,m=.5/o;for(let g=0,y=0;g<d.length;g+=3,y+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:x.set(1,0,0),p[y+0]=Si(x,c,"z","y",r,i),p[y+1]=1-Si(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[y+0]=1-Si(x,c,"z","y",r,i),p[y+1]=1-Si(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[y+0]=1-Si(x,c,"x","z",r,e),p[y+1]=Si(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),p[y+0]=1-Si(x,c,"x","z",r,e),p[y+1]=1-Si(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),p[y+0]=1-Si(x,c,"x","y",r,e),p[y+1]=1-Si(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[y+0]=Si(x,c,"x","y",r,e),p[y+1]=1-Si(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function P0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Nt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=C0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);let f=C0(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}}return l}function C0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ei(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){let x=u.getComponent(h,f);a.setComponent(h+d,f,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var tM=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function nM(n,e){return tM(n,e)}function Gt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=nM(n,e),a=o.getContext("2d"),l=new ha(o);i&&(l.colorSpace=Pn),l.anisotropy=r,s&&(l.wrapS=_s,l.wrapT=_s,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Wt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Lt='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',It=Math.PI*2,wi=Math.PI/180,ht=(n,e,t)=>n<e?e:n>t?t:n,hi=(n,e,t)=>n+(e-n)*t,Md=n=>{let e=ht(n,0,1);return e*e*(3-2*e)},Ei=n=>{let e=ht(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},kt=(n,e,t,i)=>hi(n,e,1-Math.exp(-t*i));function F0(n,e,t){let i=(e-n)%It;return i>Math.PI&&(i-=It),i<-Math.PI&&(i+=It),n+i*t}function Sd(n,e){let t=(e-n)%It;return t>Math.PI&&(t-=It),t<-Math.PI&&(t+=It),t}var I0=new bt,L0=new ln,D0=new $n,N0=new A,U0=new A;function C(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return D0.set(t[0],t[1],t[2]),L0.setFromEuler(D0),N0.set(e[0],e[1],e[2]),U0.set(i[0],i[1],i[2]),I0.compose(N0,L0,U0),n.applyMatrix4(I0),n}var Xe=(n,e,t,i=.02,s=2)=>new xu(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Fe=(n,e,t)=>new Ft(n,e,t),ge=(n,e,t,i=32,s=!1)=>new Kn(n,e,t,i,1,s);var hn=(n,e,t=12,i=48,s=It)=>new Qi(n,e,t,i,s),ss=(n,e=48)=>new ba(n.map(([t,i])=>new _e(t,i)),e);function To(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*It;o.push(C(ge(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function wd(n,e,t,i,s=.02){let r=new Hs,o=It/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,p]=u[d],f=Math.cos(p)*h,x=Math.sin(p)*h;l===0&&d===0?r.moveTo(f,x):r.lineTo(f,x)}}if(r.closePath(),s>0){let l=new Ss;l.absarc(0,0,s,0,It,!0),r.holes.push(l)}let a=new yr(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function di(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new A(l[0],l[1],l[2])),r=new fo,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),p=Math.min(t,d.length()/2,h.length()/2),f=c.clone().sub(d.normalize().multiplyScalar(p)),x=c.clone().add(h.normalize().multiplyScalar(p));f.distanceTo(o)>1e-5&&r.add(new gr(o.clone(),f)),r.add(new xr(f,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new gr(o.clone(),c.clone()))}let a=r.getLength();return new Ma(r,Math.max(16,Math.round(a*40)),e,i,!1)}var at=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Jt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:P0(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new ut(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ye(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new ut(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function vt(n,e,t){let i=new Jt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var _u=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new A(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new A){let i=ht(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function O0(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Et(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let f=0;f<=a;f++){let x=f/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),y=Math.sin(m),b=n+t*g,_=e-t*y,w=l?-g:g,M=l?y:-y;c.push(b,r,_,b,o,_),u.push(w,0,M,w,0,M),d.push(x,0,x,1)}for(let f=0;f<a;f++){let x=f*2;h.push(x,x+2,x+3,x,x+3,x+1)}let p=new Nt;return p.setAttribute("position",new lt(c,3)),p.setAttribute("normal",new lt(u,3)),p.setAttribute("uv",new lt(d,2)),p.setIndex(h),p}function Hi(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let p=0;p<u;p++){let f=n[p],x=n[(p+1)%c],m=x[0]-f[0],g=x[1]-f[1],y=Math.hypot(m,g);if(y<1e-6)continue;let b=g/y,_=-m/y,w=!1;s&&!s((f[0]+x[0])/2,(f[1]+x[1])/2,b,_)&&(b=-b,_=-_,w=!0);let M=r.length/3;r.push(f[0],e,f[1],f[0],t,f[1],x[0],e,x[1],x[0],t,x[1]);for(let v=0;v<4;v++)o.push(b,0,_);a.push(d,0,d,1,d+y,0,d+y,1),d+=y,w?l.push(M,M+2,M+3,M,M+3,M+1):l.push(M,M+1,M+3,M,M+3,M+2)}let h=new Nt;return h.setAttribute("position",new lt(r,3)),h.setAttribute("normal",new lt(o,3)),h.setAttribute("uv",new lt(a,2)),h.setIndex(l),h}function B0(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function iM(){let n=B0(7);return Gt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function sM(){let n=B0(23);return Gt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,It),e.stroke()},{anisotropy:8})}function rM(){return Gt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function oM(){return Gt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function aM(){return Gt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var dn=n=>new Rt(n);function Ar({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=es,emissive:a=0,emissiveIntensity:l=0}={}){let c=new Rt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=vo,c.blendSrc=Ys,c.blendDst=Ks,c.blendSrcAlpha=Ys,c.blendDstAlpha=Ks,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function k0(n="high"){let e={brushed:iM().tex,wafer:sM().tex,radial:rM().tex,hazard:oM().tex,grille:aM().tex};return{M:{alu:dn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:dn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:dn({color:14936044,metalness:1,roughness:.08}),steel:dn({color:11646654,metalness:1,roughness:.28}),darkSteel:dn({color:6251886,metalness:1,roughness:.34}),brass:dn({color:13876630,metalness:1,roughness:.3}),copper:dn({color:12946278,metalness:1,roughness:.3}),gold:dn({color:15320959,metalness:1,roughness:.22}),white:dn({color:15856630,metalness:0,roughness:.32}),graphite:dn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:dn({color:5073918,metalness:.2,roughness:.35}),orange:dn({color:13137466,metalness:.3,roughness:.36}),rubber:dn({color:1382171,metalness:0,roughness:.8}),plastic:dn({color:2303532,metalness:0,roughness:.45}),ceramic:dn({color:15001579,metalness:0,roughness:.42}),grille:dn({map:e.grille,metalness:.6,roughness:.45}),hazard:dn({map:e.hazard,metalness:.2,roughness:.55}),glass:Ar({color:14674421,opacity:.08,fresnel:.55}),smoke:Ar({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:tn}),fuel:dn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:dn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:dn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:dn({color:13949150,metalness:0,roughness:.25}),wall:dn({color:15133166,metalness:0,roughness:.5}),shadow:new Yt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new ws({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:dn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function Vt(n,e=0){let t=new qe(n);return new Rt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function Ga(n,e=1.25){return new Rt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function Rn(n,e=.55){return new Rt({map:n,metalness:e,roughness:.42})}var Rr=Math.PI/180,st={cx:.5,cz:-1,r:22,h:13.5},Ti={panes:24,finDepth:.36,doorA0:263*Rr,doorA1:277*Rr,doorH:3.1},Js={a0:236*Rr,a1:304*Rr,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},Co={r:22.35,groundY:-420},jn={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Rr,targetR:17,targetYMin:0,targetYMax:12},Pt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},vu=.45,Ro=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],gt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Rr,a1:142*Rr,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Ed=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function Po(n,e,t=0,i=new A){return i.set(st.cx+e*Math.cos(n),t,st.cz-e*Math.sin(n))}var Td=Math.PI*2,yu=(n,e,t)=>Math.min(t,Math.max(e,n)),z0=(n,e)=>{let t=Math.abs(n-e)%Td;return t>Math.PI?Td-t:t};function Ad(n,e){let t=Math.atan2(-(e-st.cz),n-st.cx);return t<0?t+Td:t}function Ao(n){let e=jn,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-st.cx,n.z-st.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Ad(n.x,n.z);return i<=e.outerR+t?s>=Ti.doorA0+e.edge-t&&s<=Ti.doorA1-e.edge+t&&n.y<=Ti.doorH-.25+t?"door":null:s>=Js.a0+e.edge-t&&s<=Js.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function H0(n,e,t){let i=n.x-st.cx,s=n.z-st.cz,r=Math.hypot(i,s),o=yu(r,e,t);r>1e-9&&o!==r&&(n.x=st.cx+i*o/r,n.z=st.cz+s*o/r)}function G0(n,e,t){let i=Ad(n.x,n.z);if(i>=e&&i<=t)return;let s=z0(i,e)<z0(i,t)?e:t,r=Math.hypot(n.x-st.cx,n.z-st.cz);n.x=st.cx+r*Math.cos(s),n.z=st.cz-r*Math.sin(s)}function W0(n,e=null){if(Ao(n))return n;let t=jn,i=e?Ao(e):null;if(!i){let s=Math.hypot(n.x-st.cx,n.z-st.cz),r=Ad(n.x,n.z);i=s>st.r&&r>=Js.a0&&r<=Js.a1?"balcony":"hall"}if(i==="door"){if(G0(n,Ti.doorA0+t.edge,Ti.doorA1-t.edge),n.y=yu(n.y,t.yMin,Ti.doorH-.25),Ao(n))return n;i=Math.hypot(e.x-st.cx,e.z-st.cz)>st.r?"balcony":"hall"}return i==="balcony"?(G0(n,Js.a0+t.edge,Js.a1-t.edge),H0(n,t.outerR+.001,t.balconyR),n.y=yu(n.y,t.yMin,t.balconyYMax)):(H0(n,0,t.r),n.y=yu(n.y,t.yMin,t.yMax)),n}function bu(){let n=gt.screenR,e=Ed.reduce((i,s)=>i+s.w,0)+gt.gap*(Ed.length-1),t=Math.PI/2+e/n/2;return Ed.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-gt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:gt.screenY-a/2,y1:gt.screenY+a/2}})}var yn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function V0(n){return n.type==="circle"?`length(p - vec2(${yn(n.c[0])}, ${yn(n.c[1])})) - ${yn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${yn(n.a[0])}, ${yn(n.a[1])}), vec2(${yn(n.b[0])}, ${yn(n.b[1])}), ${yn(n.r)})`:`lSdBox(p, vec2(${yn(n.c[0])}, ${yn(n.c[1])}), vec2(${yn(n.h[0])}, ${yn(n.h[1])}))`}function X0(){let n=Ro.find(t=>t.id==="cell");return`
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
${Ro.map((t,i)=>i===0?`  float d = ${V0(t)};`:`  d = min(d, ${V0(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${yn(Pt.cx)}, ${yn(Pt.cz)})) - vec2(${yn(Pt.hx-Pt.r)}, ${yn(Pt.hz-Pt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${yn(Pt.r)};
}
const vec2 HUB_C = vec2(${yn(n.c[0])}, ${yn(n.c[1])});
const float HUB_R = ${yn(n.r)};
`}function q0(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Pt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,p)=>{let f=Math.max(1,Math.ceil(Math.hypot(h-u,p-d)/n));for(let x=0;x<f;x++)o.push([u+(h-u)*x/f,d+(p-d)*x/f])};for(let u=0;u<4;u++){let[d,h,p]=a[u];for(let w=0;w<l;w++){let M=p+Math.PI/2*w/l;o.push([d+r*Math.cos(M),h+r*Math.sin(M)])}let[f,x,m]=a[(u+1)%4],g=d+r*Math.cos(p+Math.PI/2),y=h+r*Math.sin(p+Math.PI/2),b=f+r*Math.cos(m),_=x+r*Math.sin(m);c(g,y,b,_)}return o}var Va=Math.PI/180;function lM(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ii(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function $0(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function cM(n,e){return(n/(2*Math.PI)+.5)*e}function Wa(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,ii(r,o)),a.addColorStop(.45,ii(r,o*.42)),a.addColorStop(1,ii(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function uM(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,_)=>{_(b-e),_(b),_(b+e)},l=lM(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-1.2,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,_]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),_);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=cM(Math.atan2(d[2],d[0]),e),p=o(Math.asin(d[1])/Va);if(a(h,b=>{Wa(n,b,o(3),100*r,16*r,s.sunGlow,.55),Wa(n,b,p,60*r,60*r,s.sunGlow,.42),Wa(n,b,p,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>Wa(n,b,o(8),130*r,7*r,s.belt,.32)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let _=3+24*Math.pow(l(),1.6),w=l()*e,M=(8+42*l())*r,v=(.35+1.4*l())*r,S=Math.abs(w-h)%e;S=Math.min(S,e-S)/e;let U=Math.max(0,1-S/.28),I=$0(s.cloudDark,s.cloudLit,U),N=s.clouds*(.18+.32*l())*(.6+.4*U);a(w,F=>Wa(n,F,o(_),M,v,I,N))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let _=Math.sin(16*Va)+l()*(1-Math.sin(16*Va)),w=Math.asin(_)/Va,M=Math.min(1,Math.max(0,(w-16)/26)),v=s.stars*M*(.25+.7*l()*l());if(v<.03)continue;let S=.7+l()*1.1,U=1/Math.max(.12,Math.cos(w*Va));n.fillStyle=l()<.2?ii("#bcd2ff",v):ii("#ffffff",v),n.fillRect(l()*e,o(w),S*U,S)}let f=s.far,x=$0(f.body,f.haze,.35),m=0;for(;m<e;){let b=3+Math.floor(l()*18),_=l()<.08?2.2+l()*2.6:.4+Math.pow(l(),1.8)*2.1,w=o(_),M=o(-.8);if(n.fillStyle=x,n.fillRect(m,w,b,M-w),_>3.4&&l()<.6&&n.fillRect(m+b/2-.5,w-4-l()*8,1,6+l()*8),f.windows>0){let v=Math.floor((M-w)*b*.06*f.windows);for(let S=0;S<v;S++){let U=l(),I=U<.62?"#ffc078":U<.82?"#cfe3ff":U<.92?"#5fe1ff":"#ff5bd2";n.fillStyle=ii(I,(.45+.5*l())*Math.min(1,f.windows*1.4)),n.fillRect(m+Math.floor(l()*b),w+Math.floor(l()*(M-w)),1,1)}}if(f.neon>0&&l()<.05){let v=l()<.5?"#ff4fd8":"#46e6ff";n.fillStyle=ii(v,.55*f.neon),n.fillRect(m,w-1,b,1.5)}m+=b+(l()<.25?Math.floor(l()*6):0)}let g=n.createLinearGradient(0,o(2.5),0,o(-1.5));if(g.addColorStop(0,ii(f.haze,0)),g.addColorStop(.6,ii(f.haze,.42)),g.addColorStop(1,ii(f.haze,.18)),n.fillStyle=g,n.fillRect(0,o(2.5),e,o(-1.5)-o(2.5)),s.lights>0){let b=Math.round(14e3*s.lights);for(let _=0;_<b;_++){let w=Math.pow(l(),2.4),M=-.9-28*w,v=.8+w*1.6,S=l(),U=S<.55?"#ffb46a":S<.78?"#ffe2b0":S<.9?"#ffffff":S<.96?"#55dcff":"#ff4fd0";n.fillStyle=ii(U,(.3+.6*l())*Math.min(1,s.lights*1.2)*(1-.5*w)),n.fillRect(l()*e,o(M),v,v*.7)}n.lineWidth=1;for(let _=0;_<26;_++){let w=o(-1-l()*2),M=o(-6-l()*20),v=l()*e;n.strokeStyle=ii(l()<.75?"#ffb36b":"#5fdcff",.22*s.lights),n.beginPath(),n.moveTo(v,w),n.lineTo(v+(l()-.5)*220,M),n.stroke()}}let y=n.createLinearGradient(0,o(0),0,o(-12));y.addColorStop(0,ii(s.groundHaze,.55)),y.addColorStop(1,ii(s.groundHaze,0)),n.fillStyle=y,n.fillRect(0,o(0),e,o(-12)-o(0))}var hM=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,dM=`
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
`;function fM(n,e){let t=new mr;t.background=new qe(n.clear);let i=new ut(new An(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Yt({side:tn,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let p=new ut(u,d);return p.position.set(h[0],h[1],h[2]),t.add(p),p},a=st.cx,l=st.cz;o(new cn(6.4,st.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,st.h,l]),o(new Qi(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,st.h-.25,l]),o(new Nn(st.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new cn(st.r-.6,st.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,st.h-.55,l]),o(Et(a,l,st.r-.6,0,Math.PI*2,st.h-.55,st.h,64,!0),r(s.column,.85)),o(Et(a,l,gt.r,gt.a0,gt.a1,gt.bandY0,gt.bandY1,32,!0),r(s.media,1)),o(Et(a,l,gt.r,gt.a0,gt.a1,gt.bandY1,gt.top,32,!0),r(s.column,.85)),o(Et(a,l,gt.r-.3,gt.a0,gt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of bu())o(Et(a,l,gt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function pM(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function Y0(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=Gt(i,s,null,{anisotropy:1});r.tex.wrapS=_s,r.tex.generateMipmaps=!1,r.tex.minFilter=an,r.tex.magFilter=an;let o=new un({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new A(0,1,0)},uSunColor:{value:new qe(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:hM,fragmentShader:dM,side:Un,depthTest:!1,depthWrite:!1,fog:!1}),a=new ut(new An(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=fM(c,o),p=new wo(n),f=p.fromScene(h,.035,.1,400,{size:256,position:new A(st.cx,1.6,st.cz)});p.dispose(),pM(h,o),l&&l.dispose(),l=f}function d(h){c=h,r.redraw((p,f,x)=>uM(p,f,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var Qn=1,mM=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,gM=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,xM=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,_M=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  float reflK = uReflStrength * reflMask * mix(0.3, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.45) + reflCol * reflK;
}
`;function K0(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new Ln(16,16,{type:Jn,generateMipmaps:!0,minFilter:Bi,magFilter:an,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new bt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new In;o.layers.set(0);let a=new A(0,1,0),l=new A(0,0,0),c=new A,u=new bt,d=new A,h=new A,p=new A,f=new Xn,x=new $t,m=new $t,g=new _e,y=0;function b(w){w.uniforms.tReflect=r.tReflect,w.uniforms.uReflMatrix=r.uReflMatrix,w.uniforms.uReflStrength=r.uReflStrength,w.uniforms.uReflBlur=r.uReflBlur,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${mM}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${gM}`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${xM}`).replace("#include <opaque_fragment>",`${_M}
#include <opaque_fragment>`)}function _(w,M){if(!n)return!1;n.getDrawingBufferSize(g);let v=Math.max(16,Math.round(g.x*e)),S=Math.max(16,Math.round(g.y*e));if((s.width!==v||s.height!==S)&&s.setSize(v,S),c.setFromMatrixPosition(M.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(M.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),p.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(p),o.far=M.far,o.updateMatrixWorld(),o.projectionMatrix.copy(M.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let U=r.uReflMatrix.value;U.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),U.multiply(o.projectionMatrix),U.multiply(o.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(a,l),f.applyMatrix4(o.matrixWorldInverse),x.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let I=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+I[8])/I[0],m.y=(Math.sign(x.y)+I[9])/I[5],m.z=-1,m.w=(1+I[10])/I[14],x.multiplyScalar(2/x.dot(m)),I[2]=x.x,I[6]=x.y,I[10]=x.z+1-y,I[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let N=n.getRenderTarget(),F=n.autoClear,H=n.shadowMap.autoUpdate;return n.shadowMap.autoUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(w,o),n.autoClear=F,n.shadowMap.autoUpdate=H,n.setRenderTarget(N),!0}return{uniforms:r,inject:b,update:_,setStrength(w){r.uReflStrength.value=w},dispose(){s.dispose()}}}var si=Math.PI*2,Pd=X0();function Mu(n,e,t){let i=new Yt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var Id=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function J0(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function yM(n){let e=new Rt({color:13949150,metalness:0,roughness:.18,name:"atrium-floor"});return e.onBeforeCompile=t=>{J0(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Id}
${Pd}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
roughnessFactor = clamp(roughnessFactor + (tileN - 0.5) * 0.05 + seam * 0.5, 0.04, 1.0);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float border = fLine(abs(wellD - 0.62), 0.011, px);
float ringD = length(vFloor - vec2(${st.cx.toFixed(3)}, ${st.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function vM(n){let e=new Rt({color:15659509,metalness:0,roughness:.14,name:"island-top"});return e.onBeforeCompile=t=>{J0(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Id}
${Pd}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
roughnessFactor = mix(clamp(roughnessFactor + (tileN - 0.5) * 0.04 + seam * 0.5, 0.04, 1.0), 0.07, inHub);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float rim = fLine(abs(islD + 0.07), 0.009, px);
float ring = fLine(abs(hubD - (HUB_R - 0.2)), 0.014, px);
float inner = fLine(abs(hubD - 1.08), 0.006, px);
float ang = atan(vFloor.y - HUB_C.y, vFloor.x - HUB_C.x + 1e-6);
float a72 = ang / 6.2831853 * 72.0;
float tickD = abs(a72 - floor(a72 + 0.5)) * 6.2831853 * hubD / 72.0;
float ticks = fLine(tickD, 0.006, px) * step(HUB_R - 0.52, hubD) * step(hubD, HUB_R - 0.36);
// The bright hub ring at HUB_R − 0.2 is the floor channel 'ring' (channels.js), driven by activity.
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var bM=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,MM=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${Id}
${Pd}
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
}`,SM=`
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
}`,wM=`
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
}`;function EM(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(si*o/t));for(let l=0;l<a;l++){let c=l/a*si;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,p=n.r+e,f=Math.max(16,Math.ceil(Math.PI*p/t)),x=(g,y)=>{for(let b=0;b<=f;b++){let _=y-Math.PI*b/f;i.push([g[0]+p*(Math.cos(_)*c+Math.sin(_)*d),g[1]+p*(Math.cos(_)*u+Math.sin(_)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,y)=>{let b=ht(((g-n.a[0])*c+(y-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function Rd(n,e,t,i){let{pts:s,center:r}=EM(n,e);return Hi(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function Z0(n,e){let t=Pt.hx-Pt.r,i=Pt.hz-Pt.r;return n.map(([s,r])=>{let o=Pt.cx+ht(s-Pt.cx,-t,t),a=Pt.cz+ht(r-Pt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var Cd=(n,e,t,i)=>(Pt.cx-n)*t+(Pt.cz-e)*i>0;function TM(n){let e=Ro.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function AM(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of Ro)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Pt.cx-Pt.hx),e=Math.min(e,Pt.cx+Pt.hx),t=Math.max(t,Pt.cz-Pt.hz),i=Math.min(i,Pt.cz+Pt.hz),{x0:n,x1:e,z0:t,z1:i}}function RM(n,e,t,i=6){let s=new A().subVectors(e,n),r=s.length(),o=new Kn(t,t,r,i,1,!0);return o.applyQuaternion(new ln().setFromUnitVectors(new A(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function CM({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=st,l=Js,c=l.a1-l.a0,u=(S,U)=>[r+U*Math.cos(S),o-U*Math.sin(S)],d=new ut(C(new cn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(Qn),n.add("white",C(new cn(a+.2,Co.r,160,1,l.a1,si-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Et(r,o,Co.r,l.a1,l.a0+si,-.45,0,160,!1)),e.add("glowCyan",Et(r,o,Co.r+.004,l.a1,l.a0+si,-.24,-.21,160,!1)),e.add("white",Et(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Et(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Et(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",C(Fe(l.r1-Co.r,l.slab,.04),s(S,(Co.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,p=a+.05,f=[];for(let S=0;S<=4;S++)f.push(u(l.a0,p+(h-p)*S/4));let x=Math.ceil(c*h/.45);for(let S=1;S<=x;S++)f.push(u(l.a0+c*S/x,h));for(let S=3;S>=0;S--)f.push(u(l.a1,p+(h-p)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(S,U,I,N)=>(m[0]-S)*I+(m[1]-U)*N>0,y=(S,U,I,N)=>!g(S,U,I,N);t.add("rail",Hi(f,.045,l.rail)),n.add("chrome",di(f.map(([S,U])=>[S,l.rail+.026,U]),.026,.1,8)),n.add("silver",Hi(f,0,.045,{facing:y})),n.add("glowCyan",Hi(f,0,.04,{facing:g}));for(let S=0;S<f.length;S+=5)n.add("chrome",C(ge(.018,.018,l.rail,8),[f[S][0],l.rail/2,f[S][1]]));let b=l.canopyY,_=a+.02,w=l.r1+.35;n.add("white",C(new cn(_,w,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",C(new cn(_,w,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",C(new cn(w-.13,w-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Et(r,o,w,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Et(r,o,w-.002,l.a0,l.a1,b,b+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",C(Fe(w-_,.14,.04),s(S,(_+w)/2,b+.07),[0,S,0]));for(let[S,U]of[[23.3,17],[25.2,19]])for(let I=0;I<U;I++){let N=l.a0+(I+.5)*c/U;n.add("glowWhite",C(new Nn(.085,16),s(N,S,b-.003),[Math.PI/2,0,0])),n.add("chrome",C(new cn(.085,.11,16,1),s(N,S,b-.002),[Math.PI/2,0,0]))}let M=new A,v=new A;for(let S=0;S<6;S++){let U=l.a0+(S+.5)*c/6;Po(U,w-.15,b+.14,M),Po(U,a+.03,b+3.4,v),n.add("silver",RM(M,v,.014)),n.add("chrome",C(ge(.05,.05,.03,14),v.toArray(),[0,U,Math.PI/2]))}for(let S of[250,290]){let U=S*Math.PI/180;n.add("white",C(Xe(.5,.34,2.4,.05,3),s(U,23.4,.27),[0,U,0])),n.add("dark",C(Fe(.32,.1,2.1),s(U,23.4,.05),[0,U,0])),n.add("glowCyan",C(Fe(.33,.012,2.11),s(U,23.4,.094),[0,U,0]))}return{floor:d}}function j0(n,{reflection:e=null}={}){let t=new Jt;t.name="atrium";let{cx:i,cz:s,r,h:o}=st,a={white:new Rt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new Rt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new Rt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new Rt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new Rt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Mu(4641535,3,"atrium-glow-cyan"),glowBlue:Mu(5213695,2.2,"atrium-glow-blue"),glowWhite:Mu(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Mu(16777215,5,"atrium-ring-light"),u=Ar({color:13623538,opacity:.045,fresnel:.5,side:tn}),d=Ar({color:14083830,opacity:.1,fresnel:.6,side:tn}),h=Ar({color:14214901,opacity:.08,fresnel:.5,side:tn}),p=Ar({color:13623538,opacity:.04,fresnel:.4}),f=new at,x=new at,m=new at,g=new A,y=(xe,be,Ge)=>Po(xe,be,Ge,g).toArray(),{doorA0:b,doorA1:_,doorH:w}=Ti,M=w+.12,v=si/Ti.panes,S=.006/r,U=xe=>xe>b+1e-6&&xe<_-1e-6;for(let xe=0;xe<Ti.panes;xe++){let be=xe*v+S,Ge=(xe+1)*v-S,R=[be];for(let E of[b,_])E>be&&E<Ge&&R.push(E);R.push(Ge);for(let E=0;E+1<R.length;E++){let G=R[E],ye=R[E+1],ue=U((G+ye)/2)?M:.05,Ne=Math.max(2,Math.ceil((ye-G)/v*16));m.add("glass",Et(i,s,r,G,ye,ue,o,Ne,!0))}}let I=Ti.finDepth,N=o-.55,F=r-I/2-.004;for(let xe=0;xe<Ti.panes;xe++){let be=xe*v;if(!U(be)){m.add("fin",C(Fe(I,N,.022),y(be,F,N/2),[0,be,0])),f.add("silver",C(Fe(I+.04,.06,.05),y(be,F,.03),[0,be,0])),f.add("silver",C(Fe(I+.04,.06,.05),y(be,F,N-.03),[0,be,0]));for(let Ge of[1.1,4.7,8.3,11.9]){f.add("chrome",C(Fe(.025,.09,.17),y(be,r-.0175,Ge),[0,be,0])),f.add("chrome",C(Fe(.09,.09,.045),y(be,r-.075,Ge),[0,be,0]));for(let R of[-1,1])f.add("chrome",C(ge(.022,.022,.018,14),y(be+R*(.055/r),r-.039,Ge),[0,be,Math.PI/2]))}}}let H=o-.55;f.add("white",Et(i,s,r-.6,0,si,H,o,160,!0)),f.add("satin",C(new cn(r-.6,r-.01,160,1),[i,H,s],[Math.PI/2,0,0])),f.add("glowWhite",C(new cn(r-.16,r-.1,160,1),[i,H-.004,s],[Math.PI/2,0,0])),f.add("glowCyan",Et(i,s,r-.605,0,si,H+.02,H+.05,160,!0));let L=_,W=si-(_-b);f.add("glowCyan",C(new cn(r-.17,r-.13,160,1,L,W),[i,.003,s],[-Math.PI/2,0,0])),f.add("silver",Et(i,s,r-.03,L,L+W,0,.05,160,!0));for(let xe of[b,_])f.add("silver",C(Fe(.14,M,.06),y(xe,r-.03,M/2),[0,xe,0]));let V=_-b;f.add("silver",Et(i,s,r-.06,b,_,w,M,16,!0)),f.add("silver",Et(i,s,r+.04,b,_,w,M,16,!1)),f.add("silver",C(new cn(r-.06,r+.04,16,1,-_,V),[i,w,s],[Math.PI/2,0,0])),f.add("glowWhite",C(new cn(r-.025,r+.005,16,1,-_,V),[i,w-.002,s],[Math.PI/2,0,0])),f.add("silver",C(new cn(r-.22,r+.24,16,1,b,V),[i,.003,s],[-Math.PI/2,0,0]));let q=V/2,Y=r-.09;for(let[xe,be,Ge]of[[b-q,b,.9],[_,_+q,.1]]){m.add("fin",Et(i,s,Y,xe+.03/Y,be-.03/Y,.06,w-.06,12,!0)),f.add("silver",Et(i,s,Y-.02,xe,be,0,.06,12,!0)),f.add("silver",Et(i,s,Y-.02,xe,be,w-.06,w,12,!0));for(let R of[xe,be])f.add("silver",C(Fe(.05,w,.05),y(R,Y,w/2),[0,R,0]));f.add("chrome",C(ge(.012,.012,1.1,8),y(xe+(be-xe)*Ge,Y-.05,1.05)))}f.add("silver",Et(i,s,Y-.035,b-q,_+q,w,w+.08,24,!0)),f.add("ceiling",C(new cn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let xe=0;xe<16;xe++){let be=xe/16*si,Ge=(r+6.4)/2;f.add("white",C(Fe(r-6.4,.34,.3),[i+Ge*Math.cos(be),o-.17,s-Ge*Math.sin(be)],[0,be,0]))}for(let xe of[9,16.5])f.add("white",Et(i,s,xe,0,si,o-.34,o,160,!0)),f.add("white",Et(i,s,xe+.3,0,si,o-.34,o,160,!1)),f.add("white",C(new cn(xe,xe+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let xe of[11.15,11.85])f.add("satin",Et(i,s,xe,0,si,o-.24,o,160,!0)),f.add("satin",Et(i,s,xe,0,si,o-.24,o,160,!1));let Z=new ut(C(hn(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);Z.name="ring-light",Z.position.set(i,o-.15,s),t.add(Z),f.add("chrome",C(hn(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let xe=0;xe<4;xe++)f.add("silver",C(Fe(12.8,.12,.12),[i,o+.03,s],[0,xe*Math.PI/4,0]));let ne=new ut(C(new Nn(6.4,96),[0,0,0],[Math.PI/2,0,0]),p);ne.name="skylight",ne.position.set(i,o+.06,s),t.add(ne);let{a0:re,a1:Ee}=gt,ke=gt.moduleR-.36;f.add("dark",Et(i,s,gt.r,re,Ee,gt.bandY0,gt.bandY1,72,!0)),f.add("white",Et(i,s,gt.r,re,Ee,gt.bandY1,gt.top,72,!0)),f.add("white",Et(i,s,gt.r,re,Ee,2.3,gt.bandY0,72,!0)),f.add("satin",Et(i,s,gt.r,re,Ee,0,2.3,72,!0)),f.add("white",Et(i,s,gt.back,re,Ee,0,gt.top,72,!1)),f.add("white",C(new cn(gt.r,gt.back,72,1,re,Ee-re),[i,gt.top,s],[-Math.PI/2,0,0])),f.add("white",C(new cn(ke,gt.r,72,1,re,Ee-re),[i,2.3,s],[-Math.PI/2,0,0])),f.add("white",Et(i,s,ke,re,Ee,2.22,2.3,72,!0)),f.add("glowBlue",Et(i,s,ke-.004,re,Ee,2.245,2.265,72,!0)),f.add("glowCyan",Et(i,s,gt.r-.012,re,Ee,7.1,7.14,72,!0)),f.add("glowCyan",Et(i,s,gt.r-.012,re,Ee,2.64,2.68,72,!0));let ie=gt.back-ke+.04,Te=(gt.back+ke)/2;for(let[xe,be]of[[re-.07/Te,-1],[Ee+.07/Te,1]]){f.add("white",C(Fe(ie,gt.top,.14),[i+Te*Math.cos(xe),gt.top/2,s-Te*Math.sin(xe)],[0,xe,0]));let Ge=xe-be*(.075/ke);f.add("glowCyan",C(Fe(.04,gt.top-.4,.03),[i+(ke+.02)*Math.cos(Ge),gt.top/2,s-(ke+.02)*Math.sin(Ge)],[0,xe,0]))}let De=24,se=new Dn(new Ft(.62,2.22,.78),a.white,De);se.name="compute-modules";let K=new _e(.7,2.08),Me=new mt(K.x,K.y),Ke=new un({name:"module-doors",vertexShader:SM,fragmentShader:wM,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:K}}}),Pe=new Dn(Me,Ke,De);Pe.name="module-doors";let $e=new Float32Array(De),Ie=new jt;for(let xe=0;xe<De;xe++){let be=re+(xe+.5)*(Ee-re)/De;Po(be,gt.moduleR,1.11,Ie.position),Ie.rotation.set(0,be,0),Ie.updateMatrix(),se.setMatrixAt(xe,Ie.matrix),Po(be,gt.moduleR-.316,1.11,Ie.position),Ie.rotation.set(0,be-Math.PI/2,0),Ie.updateMatrix(),Pe.setMatrixAt(xe,Ie.matrix),$e[xe]=xe*7.31+3.7,f.add("chrome",C(Fe(.66,.03,.82),[Ie.position.x,.015,Ie.position.z],[0,be,0]))}Me.setAttribute("aSeed",new Yn($e,1)),se.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,se.computeBoundingSphere(),Pe.computeBoundingSphere(),se.receiveShadow=!0,t.add(se,Pe);let he=yM(e),k=new ut(C(new Nn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),he);k.name="atrium-floor",k.position.set(i,0,s),k.receiveShadow=!0,k.layers.set(Qn);let X=CM({kit:f,low:x,glassKit:m,floorMat:he,at:y});t.add(X.floor);let oe=AM(),$=new ut(C(new mt(oe.x1-oe.x0,oe.z1-oe.z0),[0,0,0],[-Math.PI/2,0,0]),vM(e));$.name="island-tops",$.position.set((oe.x0+oe.x1)/2,0,(oe.z0+oe.z1)/2),$.receiveShadow=!0,$.layers.set(Qn),t.add(k,$);for(let xe of Ro)x.add("satin",Rd(xe,0,-vu,0)),x.add("silver",Rd(xe,.004,-.045,-.001)),x.add("glowCyan",Rd(xe,.006,-vu,-vu+.05));let te=q0(.5);x.add("satin",Hi(te,-Pt.depth,0,{closed:!0,facing:Cd}));let Se=Z0(te,.012);x.add("glowCyan",Hi(Se,-.17,-.13,{closed:!0,facing:Cd})),x.add("glowBlue",Hi(Se,-Pt.depth+.1,-Pt.depth+.14,{closed:!0,facing:Cd}));let D=new un({name:"data-pool",vertexShader:bM,fragmentShader:MM,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),Q=new ut(C(new mt(Pt.hx*2,Pt.hz*2),[0,0,0],[-Math.PI/2,0,0]),D);Q.name="data-pool",Q.position.set(Pt.cx,-Pt.depth,Pt.cz),Q.layers.set(Qn),t.add(Q);let ae=Z0(te,-.06),P=[];for(let xe of TM(ae)){P.push(Hi(xe,.035,1)),f.add("chrome",di(xe.map(([be,Ge])=>[be,1.01,Ge]),.022,.08,8)),f.add("glowCyan",Hi(xe,0,.035)),f.add("glowCyan",Hi(xe.slice().reverse(),0,.035));for(let be=0;be<xe.length;be+=5)f.add("chrome",C(ge(.018,.018,1,8),[xe[be][0],.5,xe[be][1]]))}if(P.length){let xe=new at;for(let Ge of P)xe.add("glass",Ge);let be=xe.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(be)}let Qe=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Qe.traverse(xe=>{xe.isMesh&&(xe.renderOrder=2)}),t.add(Qe);let nt=f.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(nt);let ft=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});ft.traverse(xe=>xe.layers.set(Qn)),t.add(ft);let Ae=.3;return{root:t,reflectors:[k,$,X.floor],bounds:oe,update(xe,be,Ge={}){let R=ht(Ge.activity||0,0,1);Ae+=(.3+.7*R-Ae)*Math.min(1,xe*2),D.uniforms.uTravel.value=(D.uniforms.uTravel.value+xe*(.25+1.4*R))%1e3,D.uniforms.uFlow.value=Ae,Ke.uniforms.uTime.value=be,Ke.uniforms.uActivity.value=Ae},setLook(xe){let be=xe.glow==null?1:xe.glow;for(let Ge of l)Ge.color.setHex(Ge.userData.glow.hex).multiplyScalar(Ge.userData.glow.k*be);c.color.set(xe.interior.ring).multiplyScalar(xe.interior.ringPower),a.ceiling.emissiveIntensity=xe.id==="day"?.16:.22,D.uniforms.uGlow.value=be}}}var Su=Math.PI*2,Q0=-220;function Nd(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ld(n,e){return[st.cx+n*Math.cos(e),st.cz-n*Math.sin(e)]}function PM(n,e,t,i){let s=i[0]-t[0],r=i[1]-t[1],o=ht(((n-t[0])*s+(e-t[1])*r)/(s*s+r*r),0,1);return Math.hypot(n-(t[0]+s*o),e-(t[1]+r*o))}var IM=`
attribute vec3 aSize;
attribute vec3 aInfo;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying float vHalfW;
varying float vTop;
varying vec3 vInfo;
varying vec3 vSize;
void main() {
  mat4 m = modelMatrix * instanceMatrix;
  vec4 wp = m * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(m) * normal);
  vec3 lp = position * aSize;
  bool sideX = abs(normal.x) > 0.5;
  vFace = sideX ? vec2(lp.z, lp.y) : vec2(lp.x, lp.y);
  vHalfW = sideX ? aSize.z * 0.5 : aSize.x * 0.5;
  vTop = normal.y;
  vInfo = aInfo;
  vSize = aSize;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,LM=`
uniform vec3 uBody;
uniform vec3 uSkyRefl;
uniform vec3 uHaze;
uniform vec3 uHazeHigh;
uniform float uHazeDensity;
uniform float uWindows;
uniform float uNeon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec2 vFace;
varying float vHalfW;
varying float vTop;
varying vec3 vInfo;
varying vec3 vSize;
float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float band(float d, float w, float aa) { aa = max(aa, 1e-4); return 1.0 - smoothstep(w - aa, w + aa, d); }
void main() {
  vec3 n = normalize(vNormalW);
  vec3 v = normalize(cameraPosition - vWorld);
  float seed = vInfo.x;
  float style = vInfo.y;
  float sun = max(dot(n, uSunDir), 0.0);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  float glassy = style < 0.5 ? 1.0 : 0.45;
  vec3 col = uBody * (0.55 + 0.9 * sun) + uSunColor * sun * 0.04;
  col += uSkyRefl * (0.12 + 0.88 * fres) * glassy;
  if (vTop < 0.5) {
    vec2 cellSize = vec2(2.0 + style * 0.9, 3.4);
    vec2 g = vFace / cellSize;
    vec2 cell = floor(g);
    vec2 f = fract(g);
    vec2 aa2 = fwidth(g);
    float pane = band(abs(f.x - 0.5), 0.36, aa2.x) * band(abs(f.y - 0.5), style > 1.5 ? 0.22 : 0.3, aa2.y);
    float r = h21(cell + seed * 13.1);
    float lit = step(1.0 - uWindows * (0.45 + 0.55 * fract(seed * 7.31)), r);
    float floorOn = step(0.18, h21(vec2(cell.y, seed * 3.7)));
    float pick = fract(r * 17.3);
    vec3 wc = pick < 0.62 ? vec3(1.0, 0.7, 0.4) : (pick < 0.86 ? vec3(0.72, 0.85, 1.0) : vec3(0.35, 0.9, 1.0));
    float detail = 1.0 - smoothstep(0.35, 0.8, max(aa2.x, aa2.y));
    float near = pane * lit * floorOn * (1.0 + 1.8 * fract(r * 31.0));
    float far = lit * floorOn * 0.35;
    col += wc * mix(far, near, detail) * step(0.01, uWindows);
    if (style > 2.5) {
      float edge = band(vHalfW - abs(vFace.x), 0.22, fwidth(vFace.x));
      vec3 neon = fract(seed * 3.3) < 0.5 ? vec3(1.0, 0.25, 0.85) : vec3(0.25, 0.9, 1.0);
      col += neon * edge * 3.0 * uNeon;
    }
    float crown = band(abs(vSize.y - vFace.y - 2.0), 0.35, fwidth(vFace.y));
    vec3 cc = fract(seed * 5.1) < 0.5 ? vec3(0.3, 0.8, 1.0) : vec3(1.0, 0.45, 0.2);
    col += cc * crown * 1.8 * uNeon * step(0.4, fract(seed * 9.7));
  } else {
    col *= 0.6;
  }
  float dist = length(vWorld - cameraPosition);
  float low = clamp(-vWorld.y / 120.0, 0.0, 1.0);
  float hz = 1.0 - exp(-dist * uHazeDensity * (1.0 + 2.5 * low));
  col = mix(col, mix(uHazeHigh, uHaze, low), hz);
  gl_FragColor = vec4(col, 1.0);
}`;function DM({beamFrom:n,beamTo:e,billboard:t}){let i=Nd(11),s=[];for(let r=30;r<190;){let o=9+r*.05,a=Math.floor(Su*r/o),l=i()*Su;for(let c=0;c<a;c++){if(i()<.12)continue;let u=l+(c+(i()-.5)*.5)*Su/a,d=r+(i()-.5)*o*.5,[h,p]=Ld(d,u);if(PM(h,p,n,e)<11||t&&Math.hypot(h-t.pos[0],p-t.pos[1])<16)continue;let f=1+d/200,x=(5+i()*7)*f,m=(5+i()*7)*f,g;d<45?g=-40+i()*38:d>70&&i()<.15?g=40+i()*100:g=-32+Math.pow(i(),.8)*58,s.push({x:h,z:p,w:x,d:m,top:g,rot:u+(i()-.5)*.6,style:Math.floor(i()*4),seed:i()*100})}r+=o}return s}function NM(n){let e=new Ft(1,1,1).translate(0,.5,0),t=n.length,i=new Float32Array(t*3),s=new Float32Array(t*3),r=new un({name:"city-towers",vertexShader:IM,fragmentShader:LM,uniforms:{uBody:{value:new qe},uSkyRefl:{value:new qe},uHaze:{value:new qe},uHazeHigh:{value:new qe},uHazeDensity:{value:.004},uWindows:{value:.6},uNeon:{value:1},uSunDir:{value:new A(0,1,0)},uSunColor:{value:new qe(1,1,1)}}}),o=new Dn(e,r,t);o.name="city-towers";let a=new jt;return n.forEach((l,c)=>{let u=l.top-Q0;a.position.set(l.x,Q0,l.z),a.rotation.set(0,l.rot,0),a.scale.set(l.w,u,l.d),a.updateMatrix(),o.setMatrixAt(c,a.matrix),i.set([l.w,u,l.d],c*3),s.set([l.seed,l.style,0],c*3)}),e.setAttribute("aSize",new Yn(i,3)),e.setAttribute("aInfo",new Yn(s,3)),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,{mesh:o,uniforms:r.uniforms}}var UM=`
attribute float aSeed;
uniform float uTime;
varying float vOn;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vOn = step(0.55, fract(uTime * (0.45 + fract(aSeed * 3.1) * 0.3) + aSeed));
  gl_PointSize = clamp(900.0 / -mv.z, 2.0, 9.0);
  gl_Position = projectionMatrix * mv;
}`,FM=`
uniform float uIntensity;
varying float vOn;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = (1.0 - smoothstep(0.15, 0.5, d)) * vOn * uIntensity;
  gl_FragColor = vec4(vec3(1.0, 0.12, 0.08) * 4.0, a);
}`;function OM(n){let e=[],t=[];for(let o of n)if(!(o.top<4)&&(e.push(o.x,o.top+.8,o.z),t.push(o.seed*.37),o.top>40)){let a=Math.cos(o.rot),l=Math.sin(o.rot);for(let[c,u]of[[1,1],[-1,-1]]){let d=c*o.w/2,h=u*o.d/2;e.push(o.x+d*a+h*l,o.top+.4,o.z-d*l+h*a),t.push(o.seed*.53+c)}}let i=new Nt;i.setAttribute("position",new lt(e,3)),i.setAttribute("aSeed",new lt(t,1));let s=new un({name:"city-beacons",vertexShader:UM,fragmentShader:FM,uniforms:{uTime:{value:0},uIntensity:{value:1}},transparent:!0,depthWrite:!1,blending:Zn}),r=new ca(i,s);return r.name="city-beacons",r.frustumCulled=!1,{points:r,uniforms:s.uniforms}}var BM=`
attribute vec4 aLane;
attribute vec3 aCar;
uniform float uTravel;
uniform float uDensity;
uniform vec2 uCenter;
varying float vU;
varying float vV;
varying vec3 vColor;
varying float vFade;
void main() {
  float R = aLane.x;
  float ang = aLane.w * 6.2831853 + uTravel * aLane.z / R;
  vec3 c = vec3(uCenter.x + R * cos(ang), aLane.y, uCenter.y - R * sin(ang));
  vec3 T = normalize(vec3(-sin(ang), 0.0, -cos(ang))) * sign(aLane.z);
  vec3 toCam = normalize(cameraPosition - c);
  vec3 W = normalize(cross(T, toCam));
  float visible = step(fract(aCar.y * 7.13), uDensity);
  vec3 p = c + T * (position.x * aCar.x) + W * (position.y * 0.34);
  vU = position.x + 0.5;
  vV = position.y * 2.0;
  vColor = aCar.z < 0.5 ? vec3(1.0, 0.9, 0.78) : (aCar.z < 1.5 ? vec3(1.0, 0.16, 0.1) : (aCar.z < 2.5 ? vec3(0.3, 0.9, 1.0) : vec3(1.0, 0.3, 0.9)));
  vFade = exp(-length(cameraPosition - c) * 0.006);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0) * visible;
}`,kM=`
uniform float uIntensity;
varying float vU;
varying float vV;
varying vec3 vColor;
varying float vFade;
void main() {
  float core = 1.0 - smoothstep(0.0, 1.0, abs(vV));
  float trail = pow(vU, 2.2);
  float a = core * trail * vFade * uIntensity;
  gl_FragColor = vec4(vColor * 3.0, a);
}`,zM=[30,34,41,48,57,66,78,92,108];function HM(n){let e=Nd(29),t=[],i=[],s=n==="low"?26:13;for(let u of zM){let d=-6+e()*28;for(let h of[1,-1]){let p=Math.floor(Su*u/s),f=(10+e()*12)*h;for(let x=0;x<p;x++){t.push(u+h*.9,d+h*.8+(e()-.5)*.3,f*(.9+e()*.2),e());let m=e()<.42?0:e()<.62?1:e()<.6?2:3;i.push(2.5+e()*2.5,e(),m)}}}let r=t.length/4,o=new Aa,a=new mt(1,1);o.index=a.index,o.setAttribute("position",a.getAttribute("position")),o.setAttribute("uv",a.getAttribute("uv")),o.setAttribute("aLane",new Yn(new Float32Array(t),4)),o.setAttribute("aCar",new Yn(new Float32Array(i),3)),o.instanceCount=r;let l=new un({name:"city-traffic",vertexShader:BM,fragmentShader:kM,uniforms:{uTravel:{value:0},uDensity:{value:.5},uCenter:{value:new _e(st.cx,st.cz)},uIntensity:{value:1}},transparent:!0,depthWrite:!1,blending:Zn,side:tn}),c=new ut(o,l);return c.name="city-traffic",c.frustumCulled=!1,{mesh:c,uniforms:l.uniforms,count:r}}var Dd=[["算力","#ff4fd8"],["TOKEN","#46e6ff"],["NEURAL","#a487ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#ff4fd8"],["云端","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#a487ff"],["NODE-07","#46e6ff"],["光子网络","#ff4fd8"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#a487ff"]],GM=`
attribute vec4 aCell;
attribute vec4 aTint;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
void main() {
  vUv = aCell.xy + uv * aCell.zw;
  vTint = aTint.rgb;
  vSeed = aTint.w;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,VM=`
uniform sampler2D tAtlas;
uniform float uTime;
uniform float uNeon;
varying vec2 vUv;
varying vec3 vTint;
varying float vSeed;
void main() {
  float m = texture2D(tAtlas, vUv).a;
  float fl = vSeed > 0.82 ? step(0.16, fract(sin(floor(uTime * 9.0 + vSeed * 50.0) * 12.9898) * 43758.5453)) : 1.0;
  gl_FragColor = vec4(vTint * 3.2 * fl * uNeon, m);
}`;function WM(){return{atlas:Gt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),Dd.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Wt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function XM(n){let{atlas:e,cols:t,rows:i}=WM(),s=Nd(53),r=n.filter(x=>{let m=Math.hypot(x.x-st.cx,x.z-st.cz);return m>34&&m<100&&x.top>-12}),o=[];for(let x=0;x<r.length&&o.length<18;x+=1+Math.floor(s()*4))o.push(r[x]);let a=o.length,l=new Float32Array(a*4),c=new Float32Array(a*4),u=new mt(1,1),d=new un({name:"city-signs",vertexShader:GM,fragmentShader:VM,uniforms:{tAtlas:{value:e.tex},uTime:{value:0},uNeon:{value:1}},transparent:!0,depthWrite:!1,blending:Zn,side:tn}),h=new Dn(u,d,a);h.name="city-signs";let p=new jt,f=new qe;return o.forEach((x,m)=>{let g=Math.floor(s()*Dd.length),[,y]=Dd[g],b=st.cx-x.x,_=st.cz-x.z,w=Math.hypot(b,_),M=Math.max(x.w,x.d)/2+.8,v=9+s()*6;p.position.set(x.x+b/w*M,x.top-3-s()*9,x.z+_/w*M),p.rotation.set(0,Math.atan2(b,_),0),p.scale.set(v,v/4,1),p.updateMatrix(),h.setMatrixAt(m,p.matrix),l.set([g%t/t,1-(Math.floor(g/t)+1)/i,1/t,1/i],m*4),f.set(y),c.set([f.r,f.g,f.b,s()],m*4)}),u.setAttribute("aCell",new Yn(l,4)),u.setAttribute("aTint",new Yn(c,4)),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,{mesh:h,uniforms:d.uniforms}}function em(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#0b0626"),s.addColorStop(1,"#03111f"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,79,216,0.95)",n.fillRect(10,10,220,46),n.fillStyle="#0b0626",n.font=`800 30px ${Wt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f0ff",n.font=`700 92px ${Wt}`,n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(;o>40&&n.measureText(r).width>e*.58;)o-=6,n.font=`700 ${o}px ${Wt}`;n.fillText(r,34,190),n.fillStyle="#46e6ff",n.font=`600 30px ${Wt}`,n.fillText(i.phase||"",38,240),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Lt}`,n.fillText(String(Math.round(i.tps||0)),e-40,220),n.fillStyle="#ff4fd8",n.font=`700 34px ${Wt}`,n.fillText("TOKENS / S",e-44,266),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-40,d=t-120,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let p=(c-l)/a.length;a.forEach((f,x)=>{let m=(u-d)*f/h;n.fillRect(l+x*p+2,u-m,Math.max(2,p-4),m)})}function qM({pos:n,rotY:e,w:t,h:i}){let s=new Array(40).fill(0),r=Gt(1024,Math.round(1024*i/t),(x,m,g)=>em(x,m,g,{model:"",tps:0,hist:s}),{anisotropy:8}),o=new Yt({map:r.tex,toneMapped:!1,name:"city-billboard"});o.color.setScalar(1.6);let a=new Jt;a.name="city-billboard";let l=new ut(new mt(t,i),o);a.add(l);let c=new Rt({color:1382950,metalness:.8,roughness:.4,name:"billboard-frame"}),u=new ut(new Ft(t+.8,i+.8,.6),c);u.position.z=-.34,a.add(u);let d=new ut(new Ft(t+.9,.18,.2),new Yt({color:new qe(4646655).multiplyScalar(3),toneMapped:!1}));d.position.set(0,-i/2-.45,0),a.add(d),a.position.set(n[0],n[2],n[1]),a.rotation.y=e;let h="",p=0,f=0;return{group:a,update(x,m){f+=x,f>=1&&(f=0,s.shift(),s.push(m.tps||0)),p+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${s[s.length-1]}`;p<1||g===h||(p=0,h=g,r.redraw((y,b,_)=>em(y,b,_,{model:m.model,tps:m.tps,phase:m.phase,hist:s})))}}}var $M=`
uniform float uLen;
varying float vAlong;
varying float vEdge;
void main() {
  vAlong = position.y * uLen;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 n = normalize(mat3(modelMatrix) * normal);
  vec3 v = normalize(cameraPosition - wp.xyz);
  vEdge = abs(dot(n, v));
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,YM=`
uniform float uIntensity;
uniform float uTime;
uniform float uLen;
uniform float uCore;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 0.6) : pow(vEdge, 3.0) * 0.32;
  float pulse = pow(fract(vAlong / 9.0 - uTime * 1.6), 6.0);
  float ends = smoothstep(0.0, 3.0, vAlong) * smoothstep(0.0, 1.2, uLen - vAlong);
  float k = prof * (0.5 + 2.4 * pulse) * ends * uIntensity;
  gl_FragColor = vec4(uColor * 3.0, k);
}`;function KM(n,e){let t=new Jt;t.name="compute-tower";let i=(_,w)=>{let M=new Yt({toneMapped:!1});return M.color.setHex(_).multiplyScalar(w),M},s=i(4646655,4),r=i(16732120,3.4),[o,a]=n.pos,l=[];for(let[_,w,M]of[[12,12.4,s],[30,11.6,s],[48,10.8,s],[n.top+5,8.5,r]]){let v=new ut(new Qi(w,_>n.top?.45:.28,8,96),M);v.rotation.x=Math.PI/2,v.position.set(o,_,a),t.add(v),l.push(v)}let c=new ut(new Kn(.25,.7,22,8),new Rt({color:2765122,metalness:.8,roughness:.35}));c.position.set(o,n.top+11,a),t.add(c);let u=new _e(e.x-o,e.z-a).normalize(),d=new A(o+u.x*12.4,12,a+u.y*12.4),h=new A().subVectors(e,d),p=h.length(),f=new ln().setFromUnitVectors(new A(0,1,0),h.clone().normalize()),x=new Kn(1,1,1,16,1,!0).translate(0,.5,0),m={uIntensity:{value:0},uTime:{value:0},uLen:{value:p},uColor:{value:new qe(6282495)}},g=[];for(let[_,w]of[[.16,1],[.85,0]]){let M=new un({name:w?"beam-core":"beam-glow",vertexShader:$M,fragmentShader:YM,uniforms:{...m,uCore:{value:w}},transparent:!0,depthWrite:!1,blending:Zn,side:tn}),v=new ut(x,M);v.position.copy(d),v.quaternion.copy(f),v.scale.set(_,p,_),v.frustumCulled=!1,v.renderOrder=3,t.add(v),g.push(v)}let y=new ut(new An(.9,16,12),i(10480383,5));y.position.copy(d),t.add(y);let b=new ut(new Qi(.5,.05,8,48),i(6282495,4));return b.rotation.x=Math.PI/2,b.position.copy(e),t.add(b),{group:t,uniforms:m,emitter:y,receiver:b,halo:l,ringMat:s,crownMat:r}}function tm({quality:n="high",beamTarget:e=new A(-8,3,-.7)}={}){let t=new Jt;t.name="city";let i={pos:[-38,-90],w:16,d:16,top:64},s=48*(Math.PI/180),r=48,o={pos:Ld(r,s),y:5.5,w:22,h:9},a=DM({beamFrom:i.pos,beamTo:[e.x,e.z],billboard:o});a.push({x:i.pos[0],z:i.pos[1],w:i.w,d:i.d,top:i.top,rot:.3,style:3,seed:42.4});let[l,c]=Ld(r+7,s);a.push({x:l,z:c,w:12,d:12,top:15,rot:s,style:1,seed:17.7});let u=NM(a),d=OM(a),h=HM(n),p=XM(a),f=Math.atan2(st.cx-o.pos[0],st.cz-o.pos[1]),x=qM({pos:[o.pos[0],o.pos[1],o.y],rotY:f,w:o.w,h:o.h}),m=KM(i,e);t.add(u.mesh,d.points,h.mesh,p.mesh,x.group,m.group);let g=0,y=1,b=0;return{root:t,update(_,w,M={}){let v=ht(M.activity||0,0,1);g+=(v-g)*Math.min(1,_*1.5),b=(b+_*(.5+1.5*g))%1e5,h.uniforms.uTravel.value=b,h.uniforms.uDensity.value=(.3+.7*g)*y,d.uniforms.uTime.value=w,p.uniforms.uTime.value=w,m.uniforms.uTime.value=w,m.uniforms.uIntensity.value=g,m.emitter.scale.setScalar(.6+g*.8),m.receiver.scale.setScalar(.8+g*.6+Math.sin(w*6)*.05*g),m.halo[3].rotation.z=w*.12,x.update(_,M)},setLook(_){let w=_.city,M=u.uniforms;M.uBody.value.set(w.body),M.uSkyRefl.value.set(w.skyRefl),M.uHaze.value.set(w.haze),M.uHazeHigh.value.set(w.hazeHigh),M.uHazeDensity.value=w.hazeDensity,M.uWindows.value=w.windows,M.uNeon.value=w.neon,M.uSunDir.value.fromArray(_.sun.dir).normalize(),M.uSunColor.value.set(_.sun.color),p.uniforms.uNeon.value=w.neon,d.uniforms.uIntensity.value=_.id==="day"?.5:1,h.uniforms.uIntensity.value=w.traffic,y=_.id==="day"?.8:1}}}var nm=724504;var ZM={low:0,medium:1024,high:2048,ultra:4096};function JM(n,e){let t=ZM[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Cr=new A,wu=new A,Eu=new Es;function jM(n,e,t,i=4.6){wu.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(wu).addScaledVector(e,60),n.target.position.copy(wu),n.updateMatrixWorld(),n.target.updateMatrixWorld(),Eu.position.copy(n.position),Eu.lookAt(wu),Eu.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let p of[t.z0,t.z1])Cr.set(d,h,p).applyMatrix4(Eu.matrixWorldInverse),s=Math.min(s,Cr.x),r=Math.max(r,Cr.x),o=Math.min(o,Cr.y),a=Math.max(a,Cr.y),l=Math.min(l,-Cr.z),c=Math.max(c,-Cr.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function Fn(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ye(new mt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(Qn),o}function im(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Jt;a.name="stage";let l=Y0(i,s,{quality:t});a.add(l.dome);let c=j0(n,{reflection:r});a.add(c.root);let u=tm({quality:t,beamTarget:o});a.add(u.root);let d=new go(16777215,3);d.name="sun",a.add(d,d.target);let h=new Ea(16777215,8947848,1);h.name="sky-light";let p=new go(16777215,.5);p.name="fill",a.add(h,p,p.target),JM(d,t);let f=new A;function x(m){l.setLook(m),f.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,jM(d,f,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,p.color.set(m.fill.color),p.intensity=m.fill.intensity,p.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),p.target.position.set(0,0,-1),p.updateMatrixWorld(),p.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,y){c.update(m,g,y),u.update(m,g,y)},setLook:x,dispose(){l.dispose()}}}var sm=Math.PI/180;function rm(n,e){let t=n*sm,i=e*sm;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function om(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var Pr=["dusk","day"],js="dusk",Kt={min:.6,max:1.6,step:.05,initial:1},am={dusk:{id:"dusk",clear:2365503,sun:{dir:rm(143,19),color:16757375,intensity:3.1,disc:16765088,discPower:26},hemi:{sky:12043007,ground:10326424,intensity:1.05},fill:{dir:om([.28,.7,.66]),color:14871039,intensity:.6},envIntensity:1,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#0a1030",high:"#271e66",mid:"#5f2b84",low:"#c64b8c",horizon:"#ff8a76",sunGlow:"#ffc690",belt:"#ff9ac0",below:"#160d2b",ground:"#21123a",groundHaze:"#8a3f8a",stars:.85,clouds:.55,cloudLit:"#ffb39c",cloudDark:"#45306a",far:{body:"#1d1338",haze:"#9a4a8e",windows:.6,neon:.85},lights:1},city:{body:922150,skyRefl:5325452,haze:7025785,hazeHigh:10769807,hazeDensity:.0042,windows:.62,neon:1,traffic:1,rim:16751224},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:rm(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:om([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#6f7d90",groundHaze:"#c3d0df",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.12},city:{body:5004146,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:.0036,windows:.1,neon:.28,traffic:.55,rim:16777215},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function Ud(n){return am[n]||am[js]}function lm(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Xa(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function qa({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return Gt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,p=d%5===0,[f,x]=u(h,p?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=p?5:2,r.beginPath(),r.moveTo(f,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Wt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[p,f]=u(h/(t.length-1),136);r.fillText(d,p,f)}),r.font=`700 34px ${Wt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Wt}`,r.fillText(e,a,a+130)})}function Fd(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(It*e)));return Gt(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Lt}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function rs(n,e,t,i="#4d6bfe"){return Gt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,lm(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,lm(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Lt}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Xa(s,n,r-170,46,700,Wt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Xa(s,e.toUpperCase(),r-170,24,600,Wt),s.fillText(e.toUpperCase(),152,100)})}function Tu(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return Gt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Xa(o,n,t-20,Math.round(i*.42),700,Wt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Xa(o,e,t-20,Math.round(i*.26),600,Wt),o.fillText(e,12,i*.76))})}function Au(n,e,{bg:t="#05070a",glow:i=0}={}){let s=Gt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Lt:Wt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Xa(a,c.text,n-32,u,c.weight||600,c.mono?Lt:Wt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function cm(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=Gt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Lt}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function um(){return Gt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Wt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function hm(){return Gt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Wt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var Qt=new A(-8,0,-.7),Ir=.41,dm=1.9,Od=1.86;function QM(){return Gt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function fm(n){let e=vt("fuel"),t=vt("tank",[Qt.x,0,Qt.z]);e.add(t),e.add(Fn(n,2.6,2.6,[Qt.x,0,Qt.z],.6));let i=new at;i.add("graphite",C(Xe(1.8,.28,1.8,.05),[0,.2,0]));for(let[F,H]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",C(ge(.07,.08,.06,20),[F,.03,H]));for(let F of[.375,2.345])i.add("steel",C(ge(.83,.83,.07,72),[0,F,0])),i.add("chrome",To(18,.775,F+(F<1?.04:-.04),.017,.016)),i.add("rubber",C(ge(.712,.712,.03,64),[0,F+(F<1?.05:-.05),0]));i.add("alu",ss([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let F=0;F<6;F++){let H=F/6*It+.26,L=Math.cos(H)*.79,W=Math.sin(H)*.79;i.add("chrome",C(ge(.016,.016,2.04,12),[L,1.36,W]));for(let V of[.33,2.4])i.add("steel",C(ge(.03,.03,.03,6),[L,V,W]))}i.add("steel",C(ge(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",C(ge(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",C(Xe(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",C(ge(.07,.08,.05,24),[0,2.695,0])),i.add("steel",C(ge(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",C(ge(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",C(Xe(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ye(ge(.7,.7,dm,72,!0),n.glass,[0,Ir+dm/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ye(ge(.685,.685,1,72),n.fuel,[0,Ir+.5,0],null,null,{cast:!1}),o=Ye(new Nn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ye(hn(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Dn(new An(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(F,H)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*It,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*It+H}));t.add(c);let d=Ye(new mt(.085,Od),Rn(um().tex,.1),[0,Ir+.02+Od/2,.892],null,null,{cast:!1}),h=Ye(new zs(.02,.05,3),Vt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let p=Vt(4054148,2.5),f=Ye(new An(.07,24,12,0,It,0,Math.PI/2),p,[0,2.72,0],null,null,{cast:!1});t.add(f);let x=vt("fuel-hmi",[Qt.x+.95,0,Qt.z+1.3],[0,-.35,0]),m=new at;m.add("graphite",C(Xe(.36,.04,.3,.015),[0,.02,0])),m.add("alu",C(ge(.035,.035,.95,16),[0,.5,0])),m.add("graphite",C(Xe(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Au(640,384,{bg:"#04070c"}),y=Ye(new mt(.66,.396),Ga(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(y),e.add(x),e.add(Fn(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new at,_=(F,H)=>new A(F,H,Qt.z);b.add("steel",di([_(-6.92,.375),_(-6.05,.375),_(-6.05,.92)],.05,.16)),b.add("steel",di([_(-6.05,1.38),_(-6.05,2.3),_(-4.75,2.3),_(-4.75,2.1)],.05,.18)),b.add("steel",C(ge(.1,.1,.025,24),[-6.93,.375,Qt.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(F=>C(ge(.012,.012,.09,6),[-6.925,.375+Math.cos(F)*.075,Qt.z+Math.sin(F)*.075],[0,0,Math.PI/2]))),b.add("blue",C(ge(.085,.085,.18,24),[-6.6,.375,Qt.z],[0,0,Math.PI/2])),b.add("chrome",C(ge(.022,.022,.26,12),[-6.6,.52,Qt.z])),b.add("steel",C(ge(.045,.05,.1,16),[-6.6,.47,Qt.z])),b.add("orange",C(hn(.11,.012,8,40),[-6.6,.64,Qt.z],[Math.PI/2,0,0]));for(let F=0;F<3;F++)b.add("orange",C(new Ft(.21,.014,.014),[-6.6,.64,Qt.z],[0,F/3*Math.PI,0]));for(let F of[.945,1.355])b.add("alu",C(ge(.085,.085,.05,32),[-6.05,F,Qt.z]));b.add("chrome",...[0,1,2,3].map(F=>C(ge(.008,.008,.41,6),[-6.05+Math.cos(F*1.5708+.78)*.078,1.15,Qt.z+Math.sin(F*1.5708+.78)*.078])));for(let F of[-6.8,-6.25])b.add("graphite",C(Xe(.12,.33,.16,.015),[F,.165,Qt.z]));b.add("steel",C(Xe(.22,.09,.22,.02),[-4.75,2.1,Qt.z])),b.add("chrome",To(4,.12,2.15,.012,.012,.78).map(F=>F.translate(-4.75,0,Qt.z))),e.add(b.build(n,{name:"feed"}));let w=Ye(ge(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,Qt.z],null,null,{cast:!1,receive:!1}),M=QM().tex,v=new Rt({color:330264,emissive:16777215,emissiveMap:M,emissiveIntensity:1.8,roughness:.3}),S=Ye(ge(.034,.034,.36,24,!0),v,[-6.05,1.15,Qt.z],null,null,{cast:!1});e.add(w,S);let U=.5,I="",N=new jt;return{root:e,anchors:{tank:new A(Qt.x,2.9,Qt.z),hmi:new A(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:y}],setReadout(F){let H=JSON.stringify(F);H!==I&&(I=H,g.set(F))},update(F,H,L){U=kt(U,ht(L.level,.02,1),2.5,F);let W=U*Od;r.scale.y=W,r.position.y=Ir+.012+W/2,o.position.y=a.position.y=Ir+.012+W+.001,h.position.y=Ir+.02+W;let V=ht(L.flow,0,1);for(let q=0;q<l;q++){let Y=u[q];Y.y+=F*(.05+V*.32)*Y.v/Math.max(.25,W),Y.y>1&&(Y.y=0,Y.a=Math.random()*It,Y.r=Math.sqrt(Math.random())*.6);let Z=Math.sin(H*3+Y.w)*.01;N.position.set(Math.cos(Y.a)*Y.r+Z,Ir+.03+Y.y*Math.max(0,W-.04),Math.sin(Y.a)*Y.r),N.scale.setScalar(Y.s*(.3+.7*Math.min(1,(W-Y.y*W)*10+.3))),N.updateMatrix(),c.setMatrixAt(q,N.matrix)}c.instanceMatrix.needsUpdate=!0,M.offset.y-=F*(.15+V*2.6),v.emissiveIntensity=.5+V*2.2,p.emissive.setHex(L.peak?16753978:4054148),p.emissiveIntensity=1.6+Math.sin(H*2.2)*.6}}}var Ru=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],fi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},nn={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"}},Io=new Set(["engraver","labeler"]),eS=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function mm(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of eS)if(i.test(e))return t;return"generic"}function gm(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function kd(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function $a(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function Ya(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=Ya(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function xm(n,e){let t=gm(e),i=Ya(t,["file_path","path","filePath","files"]);if(i)return $a(kd(i)||i);let s=Ya(t,["command","cmd","script","code"]);if(s)return $a(s.split(`
`).find(a=>a.trim())||s);let r=Ya(t,["url"]);if(r)try{return $a(new URL(r).host||r)}catch{return $a(r)}let o=Ya(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?$a(o):""}function Bd(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function pm(n,e){let t=Bd(n),i=Bd(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function _m(n,e){let t=String(n||"").toLowerCase(),i=gm(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:Bd(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=pm(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=pm(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var Qs=new A(-4,0,-.7),Lo=new A(-2.08,0,1.54),ym=1.45;function vm(n,e,t,i,s,r=.02,o=0){let a=new Hs,l=(u,d,h,p,f,x)=>{u.moveTo(d+x,h),u.lineTo(d+p-x,h),u.quadraticCurveTo(d+p,h,d+p,h+x),u.lineTo(d+p,h+f-x),u.quadraticCurveTo(d+p,h+f,d+p-x,h+f),u.lineTo(d+x,h+f),u.quadraticCurveTo(d,h+f,d,h+f-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new Ss;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new yr(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function bm(n,e,{x:t,y:i,r:s,face:r}){let o=new at;o.add("chrome",C(hn(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",C(ge(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new Rt({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ye(new Nn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=vt("needle",[t,i,.02]),c=new at;return c.add("orange",new Ft(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new Ft(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",ge(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ye(new Nn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function Mm(n){let e=vt("engine"),t=vt("engine-body",[Qs.x,0,Qs.z]);e.add(t),e.add(Fn(n,4.8,2.7,[Qs.x+.35,0,Qs.z],.62));let i=new at;i.add("graphite",C(Xe(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",C(Xe(3.94,.04,1.94,.015),[.35,.44,0]));for(let te of[-1.45,2.15])for(let Se of[-.8,.8])i.add("rubber",C(ge(.08,.09,.06,20),[te,.03,Se]));for(let te of[-.72,.62])i.add("graphite",C(Xe(.22,.56,1,.03),[te,.72,0])),i.add("steel",C(Xe(.26,.04,1.04,.01),[te,.47,0])),i.add("chrome",...[-.4,.4].map(Se=>C(ge(.02,.02,.03,6),[te,.5,Se])));i.add("graphite",C(Xe(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let te of[1.435,2.165])i.add("graphite",C(Xe(.07,1.62,.82,.02),[te,1.24,-.1]));for(let te of[.46,2.02])i.add("graphite",C(Xe(.78,.06,.82,.02),[1.8,te,-.1]));i.add("aluDark",vm(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",C(new mt(.5,.18),[1.8,.6,.335])),i.add("chrome",C(ge(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",C(ge(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",C(ge(.05,.065,.12,20),[.8,2.12,0]));for(let te=0;te<4;te++)i.add("chrome",C(hn(.034,.007,8,24),[.8,2.2+te*.03,0],[Math.PI/2,0,0]));i.add("orange",C(ge(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",C(ge(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",C(ge(.05,.056,.03,20),[2,2.73,-.36]));for(let te of[.12,.28])i.add("rubber",di([[te,.95,.42],[te,.62,.86],[te,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=vt("turbine",[0,ym,0],[0,0,-Math.PI/2]);t.add(s);let r=new at;r.add("alu",ss([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",C(ge(.6,.6,.56,64),[0,-.72,0]));for(let te=0;te<9;te++)r.add("alu",C(ge(.665,.665,.022,64),[0,-.97+te*.06,0]));r.add("steel",C(ge(.69,.69,.05,72),[0,-.445,0])),r.add("steel",C(ge(.69,.69,.05,72),[0,.405,0])),r.add("chrome",To(20,.66,-.413,.016,.014)),r.add("chrome",To(20,.66,.373,.016,.014,.157)),r.add("alu",C(ge(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",ss([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",C(ge(.06,.06,.26,24),[0,1.33,0])),r.add("grille",C(ge(.6,.6,.012,64),[0,-1.2,0]));for(let te of[.22,.37,.52])r.add("chrome",C(hn(te,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let te=0;te<6;te++)r.add("chrome",C(new Ft(1.18,.012,.028),[0,-1.205,0],[0,te/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=vt("rotor"),a=new at;a.add("darkSteel",C(ge(.24,.24,.8,48),[0,-.02,0]));for(let[te,Se,D,Q]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let ae=0;ae<te;ae++){let P=Xe(.32,Q,.014,.004,1);P.rotateX(D),P.translate(.41,Se,0),P.rotateY(ae/te*It),a.add("chrome",P)}a.add("chrome",ss([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=Vt(5078015,1),c=[-.33,-.02,.29].map(te=>C(ge(.247,.247,.026,48,!0),[0,te,0])),u=new at().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ye(ge(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=rs(nn.engine.zh,nn.engine.en,nn.engine.code);t.add(Ye(new mt(.5,.14),Rn(h.tex,.35),[.76,ym+.05,.628],null,null,{cast:!1}));let p=Ye(wd(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),f=Ye(wd(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*wi,m=-4*wi;t.add(p,f),t.add(Ye(new mt(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let y=[16726832,16753183,3461498,5078015].map((te,Se)=>{let D=Vt(te,.15);return t.add(Ye(ge(.055,.055,.085,24),D,[2,2.66-Se*.09,-.36],null,null,{cast:!1})),D}),b=vt("console",[-.35,0,1.22]);t.add(b);let _=new at;_.add("graphite",C(Xe(2.2,.82,.46,.03),[0,.41,0])),_.add("rubber",C(Xe(2.16,.06,.4,.02),[0,.03,.01])),b.add(_.build(n,{name:"console"}));let w=rs(nn.console.zh,nn.console.en,nn.console.code);b.add(Ye(new mt(.72,.2),Rn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let M=vt("panel",[0,.98,.02],[-.62,0,0]);b.add(M);let v=new at;v.add("aluDark",C(Xe(2.24,.62,.06,.02),[0,0,-.03])),v.add("graphite",vm(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),M.add(v.build(n,{name:"panel"}));let S=bm(n,M,{x:-.74,y:0,r:.205,face:qa({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),U=bm(n,M,{x:.86,y:.08,r:.13,face:qa({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),I=.028,N=.04,F=ge(I,I,N,24).rotateZ(-Math.PI/2),H=Fd(N,I),L=Fd(N,I,{inverted:!0}),W=te=>new Rt({map:te.tex,emissive:16777215,emissiveMap:te.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),V=[.19,.095,0,-.095,-.19],q=[],Y=new Dn(F,W(H),36),Z=new Dn(F,W(L),2);Y.castShadow=Z.castShadow=!1;let ne=0;for(let te=0;te<4;te++)for(let Se=0;Se<8;Se++)q.push({inst:Y,index:ne++,x:.16+.163-Se*.044,y:V[te],row:te,power:Se});for(let te=0;te<6;te++){let Se=te<2;q.push({inst:Se?Z:Y,index:Se?te:ne++,x:.16+.163-te*.044-(Se?0:.03),y:V[4],row:4,power:te})}M.add(Y,Z),M.add(Ye(new Nn(.006,12),Vt(15855592,.6),[.16+.163-2*.044+.022-.015,V[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([te,Se],D)=>{let Q=Tu(te,Se,{w:256,h:80}).tex;M.add(Ye(new mt(.2,.0625),Rn(Q,.2),[.16-.29,V[D],.012],null,null,{cast:!1}))}),M.add(Ye(new mt(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let ke=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([te,Se],D)=>{let Q=.66+D*.13,ae=new at().add("chrome",C(ge(.032,.032,.014,24),[Q,-.17,.007],[Math.PI/2,0,0]));M.add(ae.build(n,{name:"lamp",castShadow:!1}));let P=Vt(Se,.15);M.add(Ye(new An(.024,20,10,0,It,0,Math.PI/2),P,[Q,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Qe=Tu(te,"",{w:128,h:48}).tex;return M.add(Ye(new mt(.1,.0375),Rn(Qe,.2),[Q,-.235,.004],null,null,{cast:!1})),P}),ie=[];for(let te=0;te<24;te++){let Se=new ji({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),D=new vs(Se);D.visible=!1,t.add(D),ie.push({sp:D,mat:Se,life:0,vx:0,vz:0})}let Te=0,De=vt("dispenser",[Lo.x,0,Lo.z]);e.add(De);let se=new at;se.add("white",C(Xe(.5,1.2,.56,.03),[0,.6,0])),se.add("plastic",C(Fe(.02,.05,.36),[.252,.922,0])),se.add("aluDark",C(Xe(.54,.05,.6,.015),[0,1.225,0])),se.add("grille",C(new mt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),De.add(se.build(n,{name:"dispenser"}));let K=Tu(nn.dispenser.zh,`${nn.dispenser.en} · ${nn.dispenser.code}`.toUpperCase(),{w:256,h:80});De.add(Ye(new mt(.34,.106),Rn(K.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let Me=Vt(5078015,.3);De.add(Ye(new Ft(.012,.012,.3),Me,[.256,.97,0],null,null,{cast:!1})),e.add(Fn(n,.9,.9,[Lo.x,0,Lo.z],.5));let Ke=new at().add("rubber",di([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(Ke.build(n,{name:"conduit"}));let Pe=new Yt({visible:!1}),$e=(te,Se,D,Q)=>{let ae=new ut(new Ft(Se[0],Se[1],Se[2]),Pe);return ae.position.set(D[0],D[1],D[2]),ae.userData.hoverId=te,Q.add(ae),{id:te,object:ae}},Ie={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},he=new bt,k=new Float32Array(8),X=new qe,oe={reasoning:new qe(10185727),generating:new qe(4160511),tool:new qe(16753183),idle:new qe(2838456)};function $(te,Se,D){let Q=Math.max(0,Se);for(let ae=0;ae<D;ae++){let P=Math.pow(10,ae),Qe=Math.floor(Q/P)%10,nt=Q%P,ft=0;ae===0?ft=Q-Math.floor(Q):nt>P-1&&(ft=nt-(P-1)),k[ae]=-((Qe+ft+.5)/10)*It}for(let ae of q)ae.row===te&&(he.makeRotationX(k[ae.power]),he.setPosition(ae.x,ae.y,.03),ae.inst.setMatrixAt(ae.index,he))}return{root:e,anchors:{engine:new A(Qs.x,2.5,Qs.z),console:new A(Qs.x-.35,1.45,Qs.z+1.22),dispenser:new A(Lo.x,1.45,Lo.z)},hover:[$e("engine",[3.2,1.7,1.5],[.2,1.45,0],t),$e("console",[2.3,1.35,.8],[-.35,.68,1.22],t),$e("dispenser",[.6,1.3,.62],[0,.65,0],De)],pulseDispenser(){Ie.dispPulse=1},update(te,Se,D){let Q=D.phase,ae=Q==="generating"||Q==="reasoning",P=.35+ht(D.tps,0,140)*.16+(Q==="thinking"?.8:0);Ie.rotorSpeed=kt(Ie.rotorSpeed,P,1.4,te),Ie.rotorAngle+=Ie.rotorSpeed*te,o.rotation.y=Ie.rotorAngle,p.rotation.z=x+Ie.rotorAngle*.45,f.rotation.z=m-Ie.rotorAngle*.9;let Qe=oe[Q]||oe.idle;X.copy(l.emissive).lerp(Qe,1-Math.exp(-4*te)),l.emissive.copy(X);let nt=.85+.15*Math.sin(Se*9),ft=ae?(2.4+ht(D.tps,0,120)/30)*nt:Q==="tool"?.9:Q==="thinking"?1.3:.45;l.emissiveIntensity=kt(l.emissiveIntensity,ft,5,te),Ie.ctx=kt(Ie.ctx,ht(D.ctx,0,1),2.5,te);let Ae=ae?Math.sin(Se*41)*.006:0;S.rotation.z=(135-270*Ie.ctx)*wi+Ae,Ie.tach=kt(Ie.tach,ht(D.tps/120,0,1),3,te),U.rotation.z=(135-270*Ie.tach)*wi+Ae*2;let xe=[D.counters.miss,D.counters.hit,D.counters.output,D.counters.reasoning,D.counters.cost*100];for(let G=0;G<5;G++){let ye=xe[G]||0,ue=Ie.disp[G];ye<ue||ye-ue<.02?ue=ye:ue=kt(ue,ye,3.2,te),Ie.disp[G]=ue,$(G,ue,G===4?6:8)}Y.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0;let be=[Q==="reasoning"||Q==="thinking",Q==="generating",Q==="tool",Q==="idle"];ke.forEach((G,ye)=>{G.emissiveIntensity=kt(G.emissiveIntensity,be[ye]?3.2:.12,10,te)}),Ie.err=Math.max(0,Ie.err-te*.5),D.errorPulse&&(Ie.err=1);let Ge=Math.sin(Se*12)>0?1:.2,R=[Ie.err>0?3.5*Ge:.1,Q==="tool"?3:.1,ae||Q==="thinking"?3:.6,Q==="reasoning"?3:.1];y.forEach((G,ye)=>{G.emissiveIntensity=kt(G.emissiveIntensity,R[ye],12,te)}),Ie.dispPulse=Math.max(0,Ie.dispPulse-te*2.5),Me.emissiveIntensity=.3+Ie.dispPulse*4;let E=ht((Ie.ctx-.78)/.22,0,1);Te+=te*E*18;for(let G of ie)if(G.life<=0&&Te>=1&&(Te-=1,G.life=1,G.vx=(Math.random()-.5)*.15,G.vz=(Math.random()-.5)*.15,G.sp.position.set(.8,2.36,0),G.sp.visible=!0),G.life>0){G.life-=te/1.7;let ye=1-G.life;G.sp.position.x+=G.vx*te,G.sp.position.z+=G.vz*te,G.sp.position.y+=te*(.55-ye*.25),G.sp.scale.setScalar(.08+ye*.55),G.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,ye*1.2))*.32),G.life<=0&&(G.sp.visible=!1)}Te>4&&(Te=4)}}}var Vi=new A(2.6,0,-1),Do=3.1,Wi=2.35,Dr=.75,fn=.922,Ka=.012,zd=1,Hd=1,Sm=.4,Lr=235*wi,No=305*wi,Gi=1.54;function Ai(n,e,t=0,i=new A){return i.set(Vi.x+e*Math.cos(n),t,Vi.z-e*Math.sin(n))}var Tm=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Cu(n){let e=vt("pedestal"),t=new at;t.add("graphite",C(ge(.15,.17,.04,40),[0,.02,0])),t.add("alu",C(ge(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",C(ge(.12,.1,.03,48),[0,.835,0])),t.add("chrome",C(hn(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*It+.3;t.add("ceramic",C(ge(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=Vt(5078015,.25);return e.add(Ye(hn(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}function tS(n){let e=vt("robot",[Vi.x,0,Vi.z]),t=new at;t.add("graphite",ss([[.001,0],[1.14,0],[1.2,.03],[1.2,.6],[1.17,.64],[.001,.64]],96)),t.add("rubber",C(ge(1.205,1.205,.05,96,!0),[0,.03,0])),t.add("alu",C(ge(1.15,1.15,.05,96),[0,.665,0])),t.add("aluDark",C(ge(.42,.44,.02,64),[0,.7,0])),t.add("white",C(ge(.3,.32,.07,64),[0,.745,0])),t.add("chrome",C(hn(.31,.008,8,64),[0,.712,0],[Math.PI/2,0,0]));for(let m=0;m<8;m++){let g=m/8*It;t.add("chrome",C(ge(.014,.014,.012,6),[Math.cos(g)*.38,.715,Math.sin(g)*.38]))}e.add(t.build(n,{name:"robot-base"}));let i=Vt(5078015,1.4);e.add(Ye(hn(1.185,.01,8,128),i,[0,.62,0],[Math.PI/2,0,0],null,{cast:!1}));let s=rs(nn.robot.zh,nn.robot.en,nn.robot.code);e.add(Ye(new mt(.62,.174),Rn(s.tex,.35),[0,.38,1.205],null,null,{cast:!1}));let r=vt("arm");e.add(r);let o=vt("link1");r.add(o);let a=new at;a.add("white",C(Xe(1.16,.06,.17,.03),[.5,.81,0])),a.add("chrome",C(ge(.09,.09,.066,40),[0,.81,0])),a.add("aluDark",C(ge(.075,.075,.07,40),[1,.81,0])),a.add("graphite",C(Xe(.6,.008,.08,.004),[.5,.842,0])),o.add(a.build(n,{name:"link1"}));let l=vt("link2",[zd,0,0]);o.add(l);let c=new at;c.add("white",C(Xe(1.12,.05,.13,.025),[.5,.87,0])),c.add("chrome",C(ge(.07,.07,.054,40),[0,.87,0])),c.add("chrome",C(ge(.055,.055,.056,32),[1,.87,0])),l.add(c.build(n,{name:"link2"}));let u=vt("fork",[Hd,0,0]);l.add(u);let d=new at;d.add("aluDark",C(ge(.05,.05,.012,32),[0,.9,0])),d.add("ceramic",C(Xe(.24,.012,.085,.006),[.12,.911,0])),d.add("ceramic",C(Xe(.07,.012,.22,.006),[.25,.911,0]));for(let m of[-.08,.08])d.add("ceramic",C(Xe(.33,.012,.045,.006),[.42,.911,m]));d.add("rubber",...[-.08,.08].map(m=>C(ge(.008,.008,.004,10),[.5,.918,m]))),u.add(d.build(n,{name:"fork",castShadow:!0}));let h=Vt(5078015,.8);u.add(Ye(Fe(.06,.004,.01),h,[.08,.918,0],null,null,{cast:!1}));let p={yaw:270*wi,reach:Dr,lift:0},f=new A;function x(){let m=ht(p.reach-Sm,.02,zd+Hd-1e-4),g=Math.acos(m/(zd+Hd));o.rotation.y=p.yaw+g,l.rotation.y=-2*g,u.rotation.y=g,r.position.y=p.lift}return x(),{root:e,pose:p,setPose(m,g,y){p.yaw=m,p.reach=g,p.lift=y,x()},carryPoint(m=f){return e.updateMatrixWorld(!0),m.set(Sm,0,0),u.localToWorld(m),m.y=.921+p.lift,m},setBusy(m){h.emissiveIntensity=m?3:.8,i.emissiveIntensity=m?2.2:1.4},hover:{id:"robot",object:e}}}function wm(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=vt(`chamber-${r}`,[e.x,0,e.z]),l=new at;l.add("white",C(Xe(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",C(Xe(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",C(Xe(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",C(Fe(.04,.3,.04),[m,1,g]));l.add("aluDark",C(Fe(.84,.03,.04),[0,1.15,.4]),C(Fe(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",C(Fe(.04,.03,.84),[.4,1.15,0]),C(Fe(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",C(ge(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*It;l.add("ceramic",C(ge(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",C(Fe(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",C(Fe(.5,.2,.05),[o,.95,-.42])),l.add("steel",C(ge(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",C(ge(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[C(new mt(.76,.27),[0,1,.4]),C(new mt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),C(new mt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new at().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ye(Xe(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ye(Xe(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let p=rs(i,s,r);a.add(Ye(new mt(.56,.158),Rn(p.tex,.35),[0,.62,.402],null,null,{cast:!1}));let f=Vt(3461498,.6);a.add(Ye(Fe(.6,.016,.01),f,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:f,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function Em(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",C(Xe(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",C(Fe(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Fe(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),p=t.x+r*h,f=t.z+o*h;e.add("aluDark",C(Fe(.05,.84,.05),[p,.43,f],[0,l,0])),e.add("graphite",C(Fe(.16,.02,.16),[p,.01,f],[0,l,0]))}return{len:a,yaw:l,mid:c}}function Am(n){let e=vt("cell"),t=tS(n);e.add(t.root),e.add(Fn(n,2.9,2.9,[Vi.x,0,Vi.z],.6));let i=Ai(Lr,Do),s=Ai(No,Do),r=wm(n,{center:i,side:-1,...nn.lock,hubDoorX:.18}),o=wm(n,{center:s,side:1,...nn.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(Fn(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(Fn(n,1.3,1.3,[s.x,0,s.z],.5));let a=Ai(Lr,Wi,fn),l=Ai(No,Wi,fn),c=Cu(n);c.root.position.set(a.x,0,a.z);let u=Cu(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new at,h=new A(-1.83,0,Gi),p=new A(i.x-.42,0,Gi),f=new A(s.x+.42,0,Gi),x=new A(7.18,0,Gi);Em(n,d,h,p),Em(n,d,f,x);let m=(w,M)=>{let v=M.x-w.x,S=M.z-w.z,U=Math.hypot(v,S);d.add("aluDark",C(Xe(U,.02,.2,.006),[(w.x+M.x)/2,.892,(w.z+M.z)/2],[0,Math.atan2(-S,v),0]))};m(new A(i.x+.18,0,i.z-.44),new A(a.x-.06,0,a.z+.1)),m(new A(s.x-.18,0,s.z-.44),new A(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=Vt(5078015,1.2),y=[];for(let[w,M]of[[h,p],[f,x]]){let v=M.x-w.x;y.push(C(Fe(v,.008,.008),[(w.x+M.x)/2,.858,Gi+.185]))}e.add(new at().add("led",y).build({led:g},{name:"track-led",castShadow:!1})),e.add(Fn(n,p.x-h.x+.4,.7,[(h.x+p.x)/2,0,Gi],.4)),e.add(Fn(n,x.x-f.x+.4,.7,[(f.x+x.x)/2,0,Gi],.4));let b=new Yt({visible:!1}),_=(w,M)=>{let v=new ut(new Ft(.9,1.25,.9),b);return v.position.set(M.x,.62,M.z),v.userData.hoverId=w,e.add(v),{id:w,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new A(-1.95,fn,Gi),lockCenter:new A(i.x,fn,i.z),lockPort:a,outPort:l,outCenter:new A(s.x,fn,s.z),trackEnd:new A(x.x-.08,fn,Gi)},trackLed:g,hover:[{id:"robot",object:t.root},_("lock",i),_("unload",s)],anchors:{robot:new A(Vi.x,1.4,Vi.z),lock:new A(i.x,1.45,i.z),unload:new A(s.x,1.45,s.z)}}}var Wd=n=>(200-n*24.4)*wi,Ut=Do-Wi,rt=.89,nS={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},iS={archive:[.46,.17],press:[-.44,.17]},Za=(n,e=.6)=>new Yt({color:n,transparent:!0,opacity:e,blending:Zn,depthWrite:!1});function sS(n,e,t,i=8){let s=new A(n[0],n[1],n[2]),r=new A(e[0],e[1],e[2]),o=ge(t,t,s.distanceTo(r),i);return o.applyQuaternion(new ln().setFromUnitVectors(new A(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function Xd(n,e=1.36){n.add("aluDark",C(Fe(.06,e,.07),[.4,e/2,Ut])),n.add("graphite",C(Fe(.16,.03,.16),[.4,.015,Ut])),n.add("aluDark",C(Fe(.48,.06,.08),[.16,e,Ut])),n.add("chrome",C(Fe(.4,.01,.01),[.17,e-.035,Ut+.03]))}function rS(){return Gt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Lt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function oS(){return Gt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function aS(n,e,t){t.add("graphite",C(Xe(.88,.8,.42,.02),[0,rt+.4,-.33])),t.add("aluDark",C(Xe(.9,.03,.44,.01),[0,rt+.815,-.33]));let i=rS().tex,s=new Dn(Xe(.26,.17,.3,.008),new Rt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:rt+.13+x*.19,out:0,until:0});t.add("aluDark",C(Fe(.06,.46,.06),[0,rt+.23,.16])),t.add("aluDark",C(Fe(.07,.06,.88),[0,rt+.46,.56]));let o=vt("scan-head",[0,rt+.4,Ut]);e.add(o),o.add(new at().add("graphite",C(Xe(.38,.07,.09,.012),[0,-.035,0])).add("chrome",C(Fe(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=Vt(7314431,.6);o.add(Ye(Fe(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=rt+.4-.075-(fn+.004),c=Za(6130687,0),u=Ye(new mt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=Za(10469631,0),h=Ye(Fe(.3,.001,.008),d,[0,fn+.006-(rt+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let p=new bt,f=0;return{update(x,m,g){let y=g.work;if(o.position.z=Ut+Math.sin(m*2.6)*.17*y,c.opacity=.16*y,d.opacity=.9*y,a.emissiveIntensity=.6+3*y,g.working&&m>f){f=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let _=r[b];_.out=kt(_.out,m<_.until?.16:0,9,x),p.makeTranslation(_.x,_.y,-.12-.15+.015+_.out),s.setMatrixAt(b,p)}s.instanceMatrix.needsUpdate=!0}}}function lS(n,e,t,i){t.add("graphite",C(Xe(.8,.34,.44,.02),[0,rt+.17,-.32]));for(let f=0;f<9;f++)t.add("alu",C(Fe(.012,.1,.38),[-.32+f*.08,rt+.39,-.32]));t.add("rubber",di([[.3,rt+.2,-.09],[.3,rt+.32,.12],[.37,1.5,Ut-.08]],.018,.12,8));for(let f of[-.37,.37])t.add("aluDark",C(Fe(.07,1.44,.09),[f,.72,Ut])),t.add("graphite",C(Fe(.16,.03,.18),[f,.015,Ut]));t.add("aluDark",C(Fe(.84,.09,.11),[0,1.44,Ut])),t.add("chrome",C(Fe(.76,.016,.016),[0,1.44,Ut+.062])),t.add("hazard",C(Fe(.84,.02,.112),[0,1.494,Ut]));let s=new ws({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:tn,depthWrite:!1});for(let f of[-.335,.335])e.add(Ye(new mt(.5,.42),s,[f,1.17,Ut],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=vt("laser-head",[0,1.44,Ut]);e.add(r);let o=new at;o.add("chrome",C(Xe(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",C(Xe(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",C(ge(.026,.02,.07,20),[0,-.24,0])),o.add("orange",C(Fe(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(fn+.004),c=Za(12101375,0),u=Ye(ge(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new vs(new ji({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:Zn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,fn+.008-1.44,0),r.add(d);let h=new A,p=0;return{update(f,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=Ut+Math.sin(x*3.1+1)*.06*g;let y=m.working&&m.wafer?1:0;if(c.opacity=kt(c.opacity,y*(.75+.25*Math.sin(x*60)),20,f),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,y)for(p+=f*40,d.getWorldPosition(h);p>1;)p-=1,i.sparks(h,1)}}}function cS(n,e,t){t.add("ceramic",C(Xe(.52,.42,.36,.03),[-.12,rt+.27,-.34])),t.add("ceramic",C(Xe(.4,.32,.18,.04),[-.12,rt+.27,-.5])),t.add("graphite",C(Xe(.3,.06,.24,.01),[-.12,rt+.03,-.34])),t.add("graphite",C(Xe(.48,.36,.01,.02),[-.12,rt+.27,-.158]));let i=cm();e.add(Ye(new mt(.4,.3),Ga(i.tex,1.5),[-.12,rt+.27,-.151],null,null,{cast:!1})),t.add("plastic",C(Xe(.46,.03,.16,.008),[-.1,rt+.015,.1])),e.add(Ye(new mt(.44,.14),Rn(oS().tex,.1),[-.1,rt+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),Xd(t),t.add("steel",C(ge(.04,.04,.14,20),[0,1.26,Ut]));let s=vt("probe",[0,1.1,Ut]);e.add(s),s.add(new at().add("chrome",C(ge(.015,.015,.3,12),[0,.15,0])).add("graphite",C(ge(.13,.13,.018,48),[0,.009,0])).add("gold",C(ge(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=Vt(4063119,.2);s.add(Ye(hn(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=kt(s.position.y,c.working&&c.wafer?fn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function uS(n,e,t){t.add("graphite",C(ge(.13,.15,.08,40),[0,rt+.04,-.3]));let i=vt("pan",[0,rt+.08,-.3]);e.add(i);let s=new at;s.add("white",C(ge(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",C(Fe(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",C(Fe(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=vt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=tn;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new at;l.add("dish",ss(a,64)),l.add("chrome",C(hn(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",C(ge(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*It+Math.PI/6;l.add("aluDark",sS([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",C(new zs(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",C(ge(.03,.03,.05,18),[0,.37,0]));let c=vt("dish",[0,.07,0]);r.add(c),r.add(new at().add("aluDark",C(ge(.05,.05,.08,20),[0,.03,0]),C(ge(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=Vt(10849535,.3);c.add(Ye(Gd(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let y=Za(10127103,0),b=Ye(hn(.05,.004,6,40),y,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:y,age:g/3}});Xd(t),t.add("graphite",C(Xe(.12,.08,.12,.012),[0,1.29,Ut])),t.add("white",C(ge(.004,.004,.18,6),[.03,1.42,Ut]));let h=Vt(10849535,.2);e.add(Ye(Gd(.012),h,[.03,1.515,Ut],null,null,{cast:!1}));let p=0,f=0,x=0;return{update(m,g,y){y.working&&g>x&&(x=g+1.2+Math.random()*1.5,f=(Math.random()-.5)*1.6),y.working||(f=0),p=kt(p,f,1.6,m),i.rotation.y=p,r.rotation.x=-.62+Math.sin(g*.7)*.05*y.work,u.emissiveIntensity=.3+y.work*3,h.emissiveIntensity=y.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let _=b.age;b.r.position.y=.42+_*.9,b.r.scale.setScalar(1+_*6),b.mat.opacity=y.work*(1-_)*.8}}}}var Gd=n=>new An(n,16,10);function hS(n,e,t){t.add("graphite",C(Xe(.5,.32,.34,.02),[.18,rt+.16,-.36])),t.add("aluDark",C(Xe(.12,.18,.03,.01),[-.27,rt+.2,-.36]));let i=Vt(5078015,.5);e.add(Ye(Fe(.3,.02,.005),i,[.18,rt+.25,-.188],null,null,{cast:!1}));let s=[-.05,rt,.12],r=.38,o=.36,a=.1;t.add("graphite",C(ge(.09,.095,.04,32),[s[0],rt+.02,s[2]]));let l=vt("j0",[s[0],rt+.04,s[2]]);e.add(l),l.add(new at().add("white",C(ge(.07,.075,.13,32),[0,.065,0])).add("graphite",C(ge(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=vt("j1",[0,.16,0]);l.add(c),c.add(new at().add("white",C(Xe(.095,r,.095,.04),[0,r/2,0])).add("graphite",C(ge(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=vt("j2",[0,r,0]);c.add(u),u.add(new at().add("white",C(Xe(.078,o,.078,.035),[0,o/2,0])).add("graphite",C(ge(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=vt("j3",[0,o,0]);u.add(d),d.add(new at().add("graphite",C(ge(.035,.035,.05,24),[0,.025,0])).add("chrome",C(ge(.03,.03,.012,24),[0,.056,0])).add("aluDark",C(Fe(.012,.045,.03),[-.02,.08,0]),C(Fe(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=Vt(5078015,.6);d.add(Ye(hn(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let p=rt+.04+.16,f=new A(0,p+.25,.25),x=new A;function m(g,y,b){let _=g-s[0],w=b-s[2];l.rotation.y=Math.atan2(_,w);let M=Math.hypot(_,w),v=y+a-p,S=ht(Math.hypot(M,v),.05,r+o-.001),U=Math.atan2(M,v),I=ht((S*S-r*r-o*o)/(2*r*o),-1,1),N=Math.acos(I),F=U-Math.atan2(o*Math.sin(N),r+o*Math.cos(N));c.rotation.x=F,u.rotation.x=N,d.rotation.x=Math.PI-F-N}return m(f.x,f.y,f.z),{update(g,y,b){b.working&&b.wafer?x.set(.08*Math.cos(y*1.7),fn+.03+.06*Math.max(0,Math.sin(y*3.4)),Ut-.04+.07*Math.sin(y*2.3)):b.working?x.set(.05*Math.sin(y*1.3),p+.12,Ut-.3):x.set(-.05+.04*Math.sin(y*.6),p+.22,.32),f.x=kt(f.x,x.x,4,g),f.y=kt(f.y,x.y,4,g),f.z=kt(f.z,x.z,4,g),m(f.x,f.y,f.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(y*8))}}}function Vd(n){return n<.22?Md(n/.22):n<.42?1:1-Md((n-.42)/.58)}function dS(n,e,t){t.add("graphite",C(Xe(.6,.28,.3,.02),[.14,rt+.14,-.38])),t.add("white",C(ge(.08,.08,.3,28),[.14,rt+.36,-.38],[0,0,Math.PI/2])),t.add("steel",C(ge(.06,.06,.24,24),[-.3,rt+.12,-.4])),t.add("blue",C(Xe(.3,.86,.26,.03),[0,rt+.43,.02])),t.add("blue",C(Xe(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",C(Fe(.322,.04,.01),[0,1.6,.942])),t.add("steel",C(ge(.085,.085,.22,32),[0,1.45,Ut])),t.add("chrome",C(hn(.086,.008,8,32),[0,1.34,Ut],[Math.PI/2,0,0])),t.add("rubber",di([[.06,1.5,Ut-.06],[.2,1.5,Ut-.3],[.2,1.2,.2],[.2,rt+.3,-.2]],.016,.1,8)),t.add("rubber",di([[-.06,1.42,Ut-.06],[-.2,1.42,Ut-.3],[-.2,1.1,.2],[-.2,rt+.28,-.22]],.016,.1,8));let i=vt("ram",[0,1.12,Ut]);e.add(i),i.add(new at().add("chrome",C(ge(.035,.035,.42,20),[0,.21,0])).add("steel",C(Xe(.32,.05,.32,.012),[0,0,0])).add("darkSteel",C(ge(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>C(ge(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=qa({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ye(new Nn(.07,40),new Rt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ye(Fe(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ye(hn(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?Vd(o):0;i.position.y=1.12-.155*d,a=kt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*wi}}}function fS(n,e,t){for(let d of[-.42,.42])t.add("aluDark",C(Fe(.035,.66,.035),[d,rt+.33,-.33]));t.add("alu",C(Xe(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",C(Fe(.6,.03,.06),[0,1.16,-.3])),t.add("blue",C(ge(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",C(ge(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=hm();e.add(Ye(new mt(.8,.6),new Rt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Xe(.11,.075,.008,.004),o=s.map(d=>{let h=Ye(r,new Rt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,p)=>h.forEach((f,x)=>{let[m,g]=l(p,x),y=o[f];y.userData.tx=m,y.userData.ty=g,d&&y.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=kt(h.position.x,h.userData.tx,7,d),h.position.y=kt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function pS(n,e,t){t.add("graphite",C(ge(.07,.08,.04,28),[.3,rt+.02,-.35])),t.add("alu",C(ge(.028,.028,1,16),[.3,rt+.5,-.35])),t.add("graphite",C(ge(.09,.1,.06,32),[.3,rt+1.03,-.35]));let r=new ws({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ye(ge(.08,.08,.13,32,!0),r,[.3,rt+1.125,-.35],null,null,{cast:!1})),e.add(Ye(new An(.08,32,12,0,It,0,Math.PI/2),r,[.3,rt+1.19,-.35],null,null,{cast:!1}));let o=vt("spin",[.3,rt+1.12,-.35]);e.add(o),o.add(Ye(new Kn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=Vt(16756782,.2);e.add(Ye(Gd(.022),a,[.3,rt+1.12,-.35],null,null,{cast:!1}));let l=Za(16753978,0),c=new zs(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ye(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new ws({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",C(Xe(.36,.28,.12,.02),[-.2,rt+.14,.04])),t.add("grille",C(new mt(.12,.12),[-.28,rt+.15,.101])),t.add("steel",C(ge(.045,.045,.02,28),[-.1,rt+.15,.11],[Math.PI/2,0,0]));let d=Vt(3461498,.3);return e.add(Ye(new An(.038,24,10,0,It,0,Math.PI/2),d,[-.1,rt+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,p,f){let x=f.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(p*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(p*5)>0?1:.2)}}}function mS(n,e,t){t.add("aluDark",C(Xe(.72,.62,.04,.012),[0,rt+.31,-.4])),t.add("graphite",C(Xe(.72,.06,.3,.012),[0,rt+.03,-.3]));let i=vt("unwind",[-.16,rt+.4,-.31],[Math.PI/2,0,0]),s=vt("rewind",[.2,rt+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=Gt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new Rt({map:r,roughness:.7});i.add(new at().add("roll",ge(.15,.15,.1,48)).add("gold",ge(.05,.05,.11,24)).add("chrome",ge(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new at().add("ceramic",ge(.075,.075,.1,40)).add("gold",ge(.035,.035,.11,20)).add("chrome",ge(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,rt+.52],[.05,rt+.3],[.28,rt+.42]])t.add("chrome",C(ge(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));Xd(t),t.add("steel",C(ge(.042,.042,.18,22),[0,1.24,Ut])),t.add("chrome",C(hn(.043,.006,6,24),[0,1.16,Ut],[Math.PI/2,0,0]));let a=vt("tamp",[0,1.08,Ut]);e.add(a),a.add(new at().add("chrome",C(ge(.016,.016,.3,12),[0,.15,0])).add("graphite",C(Xe(.16,.025,.12,.006),[0,0,0])).add("gold",C(Fe(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let p=l?Vd(l):0;a.position.y=1.08-(1.08-(fn+.03))*p,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function gS(n,e,t){t.add("graphite",C(Xe(.62,.86,.44,.02),[0,rt+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",C(Fe(.016,.84,.01),[d,rt+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",C(Xe(.56,.085,.02,.006),[0,rt+.07+d*.1,-.095]));t.add("grille",C(new mt(.36,.5),[.311,rt+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Dn(Fe(.014,.01,.004),new Yt({color:16777215}),i*s),o=new bt,a=[],l=[new qe(3461498),new qe(3461498),new qe(5078015),new qe(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,rt+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let p=l[(d*7+h*3)%l.length].clone();a.push(p),r.setColorAt(d*s+h,p)}e.add(r);let c=new qe,u=0;return{update(d,h,p){if(u+=d,!(u<.08)){u=0;for(let f=0;f<a.length;f++){let x=p.working?Math.random()>.45:(f+Math.floor(h*.7))%9===0;c.copy(a[f]).multiplyScalar(x?3.2:.25),r.setColorAt(f,c)}r.instanceColor.needsUpdate=!0}}}}var xS={archive:aS,engraver:lS,terminal:cS,satellite:uS,robot:hS,press:dS,kanban:fS,beacon:pS,labeler:mS,generic:gS};function _S(n,e,t,i){let s=fi[e],r=Wd(t),o=Ai(r,Do),a=vt(`station-${e}`,[o.x,0,o.z],[0,Tm(r),0]),l=new at,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,C(Xe(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",C(Xe(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",C(Xe(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",C(Fe(.9,.01,.008),[0,.32,.252])),l.add("grille",C(new mt(.36,.1),[.24,.18,.251]));let[u,d]=iS[e]||[.44,-.5];l.add("alu",C(ge(.012,.012,.3,10),[u,rt+.15,d])),l.add("graphite",C(ge(.03,.03,.012,18),[u,rt+.46,d]));let h=xS[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let p=rs(s.zh,s.en,s.code,nS[e]);a.add(Ye(new mt(.46,.13),Rn(p.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let f=Au(384,144,{bg:"#03060c",glow:4});a.add(Ye(new mt(.36,.135),Ga(f.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=Vt(5078015,.4);a.add(Ye(Fe(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((N,F)=>{let H=Vt(N,.1);return a.add(Ye(ge(.028,.028,.045,18),H,[u,rt+.33+(2-F)*.05,d],null,null,{cast:!1})),H}),g=Cu(n);g.root.position.set(0,0,Ut),a.add(g.root),a.add(Fn(n,1.25,1,[0,0,-.12],.55));let y=new Yt({visible:!1}),b=new ut(new Ft(1.1,2,1.5),y);b.position.set(0,1,.1),a.add(b);let _={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},w=new qe,M=new qe(5078015),v=new qe(3461498),S=new qe(16726832),U=Ai(r,Wi+.05,fn+.08);function I(){let N=_.status==="working"?"加工中 RUN":_.status==="error"?"故障 FAULT":"待机 IDLE",F=`${N}|${_.label}`;F!==_.screenKey&&(_.screenKey=F,f.set([{text:`${s.code}  ${N}`,size:30,color:_.status==="error"?"#ff8a80":_.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:_.label||"—",size:34,color:"#e8eefc",gap:58}]))}return I(),{kind:e,index:t,theta:r,root:a,port:Ai(r,Wi,fn),anchor:Ai(r,Do+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(N){_.label=N||"",I()},onStart(N){_.label=N.label||N.name,h.onStart?.(N),I()},onEnd(N,F){_.flash=F?.9:2.2,_.flashOk=F,F||i.puff(U,10),h.onEnd?.(N,F)},update(N,F,H){_.work=kt(_.work,H.working?1:0,3,N),_.flash=Math.max(0,_.flash-N);let L=_.flash>0&&!_.flashOk;_.status=H.working?"working":L?"error":"idle",I(),h.update(N,F,{working:H.working,wafer:H.wafer,work:_.work});let W;_.flash>0?(w.copy(_.flashOk?v:S),W=3.2*(_.flashOk?Math.min(1,_.flash*2):Math.sin(F*14)>0?1:.25)):(w.copy(M),W=.25+_.work*(2.2+Math.sin(F*6)*.6)),g.led.emissive.copy(w),g.led.emissiveIntensity=W,x.emissive.copy(w),x.emissiveIntensity=.25+W*.6,m[0].emissiveIntensity=L?Math.sin(F*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+_.work*3.5,m[2].emissiveIntensity=!H.working&&!L?1.6:.08}}}function Rm(n,e){let t=vt("stations"),i=Ru.map((r,o)=>_S(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var qd=n=>rs(nn[n].zh,nn[n].en,nn[n].code),ri=new A(7.45,0,Gi),os=.83,Yd=13,er=.4,oi=.36,Xi=.4,Kd=.02,Zd=.062,Jd=.02,jd=[8.2,8.75,9.3],Qd=[-.1,.45,1],Ri=.55,pi=2.45,Pu=oi+.046,Cm=1.9,yS=1.3,Nr=9,Pm=n=>((n-1)%Nr+Nr)%Nr,$d=(n,e=new A)=>e.set(jd[n%3],Ri,Qd[Math.floor(n/3)]),Im={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}};function vS(n,e,t,i){let s=i.info,r=s?Im[s.status]||Im.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Wt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Wt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Lt}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0,a=s&&s.files?s.files.length:0;n.fillText(`CALLS ${o} · FILES ${a}`,30,t*.64),n.fillStyle="#15171b";let l=30,c=(i.no||7)*2654435761;for(let u=0;l<e-16;u++){let d=1+((c>>>u%24^u)&3);u%2===0&&n.fillRect(l,t*.8,d,t*.13),l+=d+1}}function bS(n){let e=new at,t=.03+(oi-.03)/2,i=oi-.03,s=-er/2+.008;e.add("graphite",C(Xe(er,.03,Xi,.008),[0,.015,0])),e.add("graphite",C(Fe(.016,.022,Xi),[s,oi-.011,0]),C(Fe(.016,i,.02),[s,t,Xi/2-.01]),C(Fe(.016,i,.02),[s,t,-Xi/2+.01])),e.add("graphite",C(Fe(.06,.026,.06),[0,oi+.013,0]),C(Xe(.17,.02,.17,.006),[0,oi+.036,0]));for(let l=0;l<Yd;l++){let c=Zd+l*Jd-.005;for(let u of[-1,1])e.add("plastic",C(Fe(.3,.004,.05),[Kd,c,u*.165]))}let r=new at().add("smoke",C(Fe(er-.016,i,.01),[.008,t,Xi/2-.005]),C(Fe(er-.016,i,.01),[.008,t,-Xi/2+.005]),C(Fe(.01,i,Xi-.02),[er/2-.005,t,0]),C(Fe(er-.016,.01,Xi-.02),[.008,oi-.005,0])),o=new Jt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new at().add("white",C(Xe(.02,oi-.045,Xi-.03,.006),[0,0,0])).add("graphite",C(ge(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),C(ge(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(oi-.045)/2+.006,doorX:-er/2-.004}}function Lm(n,e){let t=vt("stocker"),i=new Yt({visible:!1}),s=new Ft(er+.04,oi+.08,Xi+.04),r=new mt(.28,.1225),o=bS(n),a=vt("load-port",[ri.x,0,ri.z]);t.add(a);let l=new at;l.add("white",C(Xe(.56,os-.012,.62,.02),[0,(os-.012)/2,0])),l.add("graphite",C(Xe(.44,.012,.44,.004),[0,os-.006,0]),C(Fe(.58,.06,.64),[0,.03,0]));for(let k=0;k<3;k++){let X=k/3*Math.PI*2+.5;l.add("chrome",C(ge(.008,.012,.012,12),[Math.cos(X)*.13,os+.004,Math.sin(X)*.13]))}l.add("aluDark",C(Fe(.04,.22,.04),[.24,os+.11,.27]),C(Fe(.08,.03,.05),[.21,os+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=qd("loadport");a.add(Ye(new mt(.44,.124),Rn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((k,X)=>{let oe=Vt(k,.15);return a.add(Ye(Fe(.05,.016,.008),oe,[-.12+X*.12,.46,.312],null,null,{cast:!1})),oe});a.add(Fn(n,.9,.95,[0,0,0],.5));let d=new ut(new Ft(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new at,p=(jd[0]+jd[2])/2,f=(Qd[0]+Qd[2])/2;h.add("graphite",C(Fe(1.66,Ri-.03,1.66),[p,(Ri-.03)/2,f])),h.add("white",C(Xe(1.76,.03,1.76,.01),[p,Ri-.015,f])),h.add("aluDark",C(Fe(1.7,.05,1.7),[p,.025,f]));let x=[];for(let k=0;k<Nr;k++){let X=$d(k);h.add("aluDark",C(Xe(.44,.008,.44,.003),[X.x,Ri+.002,X.z]));for(let $=0;$<3;$++){let te=$/3*Math.PI*2+.5;h.add("chrome",C(ge(.007,.01,.01,10),[X.x+Math.cos(te)*.12,Ri+.008,X.z+Math.sin(te)*.12]))}let oe=Vt(3134074,0);t.add(Ye(Fe(.12,.006,.012),oe,[X.x,Ri+.004,X.z+.235],null,null,{cast:!1})),x.push(oe)}t.add(h.build(n,{name:"buffer-table"}));let m=qd("stocker");t.add(Ye(new mt(.62,.175),Rn(m.tex,.35),[p,Ri*.55,f+.834],null,null,{cast:!1})),t.add(Fn(n,2.3,2.3,[p,0,f],.55));let g=new ut(new Ft(1.8,Ri+.45,1.8),i);g.position.set(p,(Ri+.45)/2,f),t.add(g);let y=new at,b=[7,10],_=[-.45,1.95];for(let k of b){for(let X of _)y.add("white",C(Fe(.1,pi+.05,.1),[k,(pi+.05)/2,X])),y.add("graphite",C(Fe(.22,.03,.22),[k,.015,X]));y.add("aluDark",C(Fe(.09,.09,_[1]-_[0]+.1),[k,pi,(_[0]+_[1])/2]))}for(let k of _)y.add("steel",C(Fe(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,pi,k]));t.add(y.build(n,{name:"gantry"}));let w=qd("gantry"),M=Ye(new mt(.9,.253),Rn(w.tex,.35),[(b[0]+b[1])/2,pi-.2,_[1]+.047],null,null,{cast:!1});t.add(M),t.add(new at().add("steel",C(Fe(.02,.1,.02),[(b[0]+b[1])/2-.35,pi-.06,_[1]+.04]),C(Fe(.02,.1,.02),[(b[0]+b[1])/2+.35,pi-.06,_[1]+.04])).build(n,{name:"sign-hangers"}));let v=vt("bridge");t.add(v),v.add(new at().add("blue",C(Fe(.14,.12,_[1]-_[0]+.12),[0,pi+.105,(_[0]+_[1])/2])).add("graphite",C(Fe(.26,.1,.13),[0,pi+.07,_[0]]),C(Fe(.26,.1,.13),[0,pi+.07,_[1]])).build(n,{name:"bridge-beam"}));let S=vt("trolley");v.add(S),S.add(new at().add("graphite",C(Xe(.28,.13,.26,.02),[0,pi-.035,0])).add("steel",C(ge(.045,.045,.2,20),[0,pi-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let U=ge(.0035,.0035,1,6),I=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([k,X])=>{let oe=Ye(U,n.steel,[k,1,X],null,null,{cast:!1});return S.add(oe),oe}),N=vt("gripper");S.add(N),N.add(new at().add("graphite",C(Xe(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let F=[-1,1].map(k=>{let X=Ye(Fe(.024,.06,.13),n.steel,[k*.115,-.01,0]);return N.add(X),X}),H=Vt(5078015,.3);N.add(Ye(Fe(.1,.008,.01),H,[0,.03,.122],null,null,{cast:!1}));let L={x:ri.x,z:ri.z,hook:Cm,grip:0,carry:null},W=()=>{v.position.x=L.x,S.position.z=L.z,N.position.y=L.hook;let k=pi-.1,X=L.hook+.055,oe=Math.max(.01,k-X);for(let te of I)te.scale.y=oe,te.position.y=X+oe/2;let $=hi(.115,.079,L.grip);F[0].position.x=-$,F[1].position.x=$,L.carry&&L.carry.g.position.set(L.x,L.hook-Pu,L.z)},V=new Set,q=new Array(Nr).fill(null),Y=null;function Z(){let k=o.g.clone();k.name="foup";let X=o.door.clone();k.add(X);let oe=Gt(256,112,()=>{}),$=new Rt({map:oe.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:oe.tex,emissiveIntensity:.18});k.add(Ye(r,$,[.01,oi-.075,Xi/2+.002],null,null,{cast:!1}));let te=new ut(s,i);te.position.set(0,oi/2+.02,0),k.add(te);let Se={no:0,info:null,g:k,door:X,label:oe,labelMat:$,labelKey:"",proxy:te,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return ne(Se),V.add(Se),t.add(k),Se}function ne(k){let X=`${k.no}|${k.info?`${k.info.status}|${k.info.calls}|${(k.info.files||[]).length}`:"-"}|${k.count}`;X!==k.labelKey&&(k.labelKey=X,k.proxy.userData.hoverId=k.no?`foup:${k.no}`:"loadport",k.label.redraw((oe,$,te)=>vS(oe,$,te,k)))}function re(k,X){let oe=k.count;if(k.count+=1,k.looks.push(X),oe<Yd){let $=e.create(X);$.position.set(Kd,Zd+oe*Jd,0),k.g.add($),k.slots.push($)}ne(k)}function Ee(k){V.delete(k),t.remove(k.g),k.label.tex.dispose(),k.labelMat.dispose();for(let X=0;X<Nr;X++)q[X]===k&&(q[X]=null);Y===k&&(Y=null)}function ke(k){let X=k.doorOpen,oe=ht(X/.25,0,1),$=Ei(ht((X-.25)/.75,0,1));k.door.position.set(o.doorX-.018*oe,o.doorY-.43*$,0)}function ie(k=!1){let X=Z();return X.g.position.set(ri.x,os,ri.z),X.state=k?"dock":"spawning",X.sp=k?1:0,X.doorOpen=k?1:0,ke(X),Y=X,X}function Te(k,X){let oe=q[X];oe&&oe!==k&&Ee(oe),q[X]=k;let $=$d(X);k.g.position.copy($),k.state="nest",k.doorOpen=0,ke(k)}let De=[],se=null,K=k=>({setup:()=>(k(),{d:0,fn:null})}),Me=(k,X,oe=1.6)=>({setup(){let $=L.x,te=L.z,Se=Math.hypot(k-$,X-te);return{d:Se<.001?0:Math.max(.35,Se/oe),fn:D=>(L.x=hi($,k,D),L.z=hi(te,X,D))}}}),Ke=(k,X)=>({setup(){let oe=L.hook;return{d:Math.abs(k-oe)<.001?0:X,fn:$=>L.hook=hi(oe,k,$)}}}),Pe=(k,X=.3)=>({setup(){let oe=L.grip;return{d:X,fn:$=>L.grip=hi(oe,k,$)}}}),$e=(k,X,oe=.55)=>({setup(){let $=k.doorOpen;return{d:oe,fn:te=>(k.doorOpen=hi($,X,te),ke(k))}}});function Ie(k){let X=Pm(k.no),oe=$d(X);return{i:0,steps:[K(()=>k.state="closing"),$e(k,0),Me(ri.x,ri.z),Ke(os+Pu,.6),Pe(1),K(()=>(L.carry=k,k.state="carried",H.emissiveIntensity=2.2)),Ke(yS+Pu,.9),K(()=>{Y===k&&(Y=null),ie();let $=q[X];$&&$!==k&&($.state="sink",$.sp=0,q[X]=null)}),Me(oe.x,oe.z),Ke(Ri+Pu,.8),K(()=>{L.carry=null,H.emissiveIntensity=.3,q[X]&&q[X]!==k&&Ee(q[X]),Te(k,X)}),Pe(0),Ke(Cm,.5),Me(ri.x,ri.z)]}}let he={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new A(ri.x,1.1,ri.z),stocker:new A(p,.9,f)},speed:1,hoverObjects(k=[]){for(let X of V)X.no&&k.push(X.proxy);return k},dockReady:()=>!!Y&&Y.state==="dock"&&Y.doorOpen>=1,dockTurn:()=>Y&&Y.no||null,dockCount:()=>Y?Y.count:0,bindDock(k,X){return!Y||Y.no?!1:(Y.no=k,Y.info=X||null,ne(Y),!0)},slotPoint(k,X=new A){let oe=Y?Y.g.position:new A(ri.x,os,ri.z);return X.set(oe.x+Kd,oe.y+Zd+Math.min(k,Yd-1)*Jd,oe.z)},addWafer(k){Y&&re(Y,k)},addLate(k,X){for(let oe of V)if(oe.no===k&&oe.state!=="sink")return re(oe,X),!0;return!1},updateInfo(k,X){for(let oe of V)oe.no===k&&(oe.info=X,ne(oe))},ship(k){return!Y||Y.no!==k||De.includes(Y)||se&&se.foup===Y?!1:(De.push(Y),!0)},shipped:k=>{for(let X of V)if(X.no===k)return X.state==="carried"||X.state==="nest"||X.state==="sink"||De.includes(X)||se&&se.foup===X;return!1},placeNest(k,X,oe){let $=Z();$.no=k,$.info=X;for(let te of oe)re($,te);Te($,Pm(k)),ne($)},resetDock(k,X,oe){Y&&Ee(Y);let $=ie(!0);if(k){$.no=k,$.info=X;for(let te of oe||[])re($,te)}ne($)},busy:()=>!!se||De.length>0,update(k){if(!se&&De.length){let $=De.shift();se=Ie($),se.foup=$}let X=k*he.speed;for(;se&&X>0;){let $=se.steps[se.i];if(!$){se=null;break}if($.run||($.run=$.setup(),$.t=0),!$.run.d){$.run.fn&&$.run.fn(1),se.i+=1;continue}let te=Math.min(X,$.run.d-$.t);$.t+=te,X-=te,$.run.fn&&$.run.fn(Ei(ht($.t/$.run.d,0,1))),$.t>=$.run.d-1e-6&&(se.i+=1)}W();for(let $ of[...V])$.state==="spawning"?($.sp=Math.min(1,$.sp+k/.8),$.g.position.y=os-(oi+.07)*(1-Ei($.sp)),$.sp>=1&&($.state="dock")):$.state==="dock"&&$.doorOpen<1?($.doorOpen=Math.min(1,$.doorOpen+k/.6),ke($)):$.state==="sink"&&($.sp=Math.min(1,$.sp+k/1.2),$.g.position.y=Ri-(oi+.09)*Ei($.sp),$.sp>=1&&Ee($));for(let $=0;$<Nr;$++)x[$].emissiveIntensity=q[$]?1.6:0;let oe=!!se;u[0].emissiveIntensity=he.dockReady()?1.8:.15,u[1].emissiveIntensity=Y&&Y.state==="closing"?2.2:.15,u[2].emissiveIntensity=oe?1.8:.15},dispose(){for(let k of[...V])Ee(k);for(let k of[o.g,o.door])k.traverse(X=>X.geometry&&X.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return W(),he}function Dm(n){let e=new Jt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new ji({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?Zn:$s}),h=new vs(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new A,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new A((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new A(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var Nm=.15,MS=.006;function Um(n){let e=new Kn(Nm,Nm,MS,40,1,!1),t=new Rt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new ut(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var ef=.34,Iu=.17,Fm=4,SS=2.4,wS=.55,ES=.9,tf=.03,TS=5,Lu=-.006,AS=12,RS=.4,CS=3,PS=1.5,IS=9,LS=new qe(16756768),DS=new qe(3461498),Ja=(n,e=n.kind)=>n.status==="error"?"bad":Io.has(e)?"gold":"normal";function Om(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=Ja(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,(n.files?n.files.length:0)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var Du=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new _u(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=ef-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-Iu,r=this.gateOut+Iu,o=this.items.find(f=>f.s>s+1e-6&&f.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let f of this.items){let x=d?d.s-ef:this.end,m=!d||d.s-ef>=r;if(f.cycled)f.s<r&&(f.s<=this.gateOut-Iu+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(f.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),f.s<=s+1e-6){let y=!o&&this.doorOut<=.05;y&&h&&f.s>=s-.9&&(a=!0),(!y||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else f.s<this.gateIn+Iu&&(a=!0);f.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(f.dwell+=e*t,c=!0,f.dwell>=wS&&(f.cycled=!0))}let g=x-f.s;if(g<=1e-5)f.v=0;else{let y=Math.min(SS*t,Math.sqrt(2*Fm*g));f.v=Math.min(y,f.v+Fm*t*e),f.s=Math.min(x,f.s+f.v*e),u=!0}f.arrivedAt==null&&f.s>=this.end-1e-4&&(f.arrivedAt=i),d=f}let p=5*e*t;this.doorIn=ht(this.doorIn+(a?p:-p),0,1),this.doorOut=ht(this.doorOut+(l?p:-p),0,1),this.cycling=c,this.moving=u}};function Bm({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new A,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=ht(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new Du([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),p=ht((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),f=new Du([o.outPort,o.outCenter,o.trackEnd],{gateIn:p*h,gateOut:h+.45,stop:h}),x=D=>e.byKind[D.kind]?D.kind:"generic",m=new Map,g=new Set,y=new Map,b=Object.fromEntries(e.list.map(D=>[D.kind,new Array(TS).fill(null)])),_={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},w={inbound:0,outbound:0,robot:!1,stocker:!1},M={},v=[],S=0,U=0,I=!0,N=0,F=1,H=null;function L(D){let Q=y.get(D);return Q||(Q={no:D,status:"running",info:null,shipped:!1,pending:[]},y.set(D,Q)),Q}let W=D=>D.status!=="running"||D.no<S,V=D=>{for(let Q of m.values())if(Q.turn===D)return!0;return!1};function q(D){let Q={id:D.id,call:D,kind:x(D),turn:D.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:fn,waitT:0};return m.set(D.id,Q),L(D.turn),Q}function Y(D){D.mesh&&(r.remove(D.mesh),D.mesh=null)}function Z(D){D.stage="stored",m.delete(D.id),g.add(D.id)}function ne(D){D.signaled||(D.signaled=!0,e.byKind[D.kind].onEnd(D.call,D.call.status!=="error"))}function re(D,Q){t.addLate(D,Q)||L(D).pending.push(Q)}function Ee(D){D.it&&(d.remove(D.it),f.remove(D.it),D.it=null),D.level>=0&&(b[D.kind][D.level]=null,D.level=-1),_.carry===D&&(_.carry=null),Y(D),ne(D),re(D.turn,Ja(D.call,D.kind)),Z(D)}let ke=D=>b[D].indexOf(null);function ie(D,Q){let ae=e.byKind[D.kind];b[D.kind][Q]=D,D.level=Q,D.stage="station",D.arriveT=N,D.mesh||(D.mesh=s.create("raw"),r.add(D.mesh)),D.mesh.position.set(ae.port.x,fn+Q*tf,ae.port.z)}function Te(){for(let D of m.values())Y(D);m.clear(),g.clear(),y.clear(),d.items.length=0,f.items.length=0;for(let D of Object.keys(b))b[D].fill(null);_.task=null,_.steps=[],_.cur=null,_.carry=null,n.robot.setBusy(!1),H=null}function De(D){M={},v=[];for(let Q of D.calls){if(Q.status!=="running")continue;let ae=x(Q);M[ae]=(M[ae]||0)+1,v.push(Q)}S=D.turns.length?D.turns[D.turns.length-1].no:0}function se(D){Te();for(let P of D.turns)Object.assign(L(P.no),{info:P,status:P.status});let Q=D.turns.filter(P=>P.status!=="running");for(let P of Q)L(P.no).shipped=!0;for(let P of Q.slice(-IS))t.placeNest(P.no,P,Om(P,D.calls));let ae=D.turns.find(P=>P.status==="running")||null;ae?t.resetDock(ae.no,ae,Om(ae,D.calls)):t.resetDock(null,null,[]);for(let P of D.calls){if(P.status!=="running"){g.add(P.id);continue}let Qe=q(P),nt=ke(Qe.kind);nt>=0&&ie(Qe,nt),e.byKind[Qe.kind].onStart(P)}De(D)}function K(D){if(!D)return;if(I||D.turnCount<U){I=!1,U=D.turnCount,se(D);return}U=D.turnCount;for(let ae of D.turns){let P=L(ae.no);P.info=ae,P.status=ae.status,t.updateInfo(ae.no,ae)}let Q=new Set;for(let ae of D.calls){Q.add(ae.id);let P=m.get(ae.id);P?P.call=ae:g.has(ae.id)||(q(ae),e.byKind[x(ae)].onStart(ae))}for(let ae of g)Q.has(ae)||g.delete(ae);De(D)}let Me=(D,Q)=>({yaw:D,reach:Dr,lift:Q,d:(ae,P)=>Math.max(.18,Math.abs(Sd(ae.yaw,P.yaw))/4)});function Ke(D,Q){let ae=e.byKind[D.kind];b[D.kind][Q]=D,D.level=Q;let P=Q*tf;return{type:"deliver",job:D,steps:[Me(Lr,Lu),{reach:Wi,d:.38},{lift:Ka,d:.15,onStart(){d.remove(D.it),D.it=null,D.stage="carried",D.restY=fn,_.carry=D},onEnd:()=>D.restY=0},{reach:Dr,d:.32},Me(ae.theta,P+Ka),{reach:Wi,d:.38},{lift:P+Lu,d:.15,onStart:()=>D.restY=fn+P,onEnd(){_.carry=null,ie(D,Q)}},{reach:Dr,d:.32}]}}function Pe(D){let Q=e.byKind[D.kind],ae=D.level,P=ae*tf;return D.reserved=!0,{type:"collect",job:D,steps:[Me(Q.theta,P+Lu),{reach:Wi,d:.38},{lift:P+Ka,d:.15,onStart(){b[D.kind][ae]=null,D.level=-1,D.stage="carried",D.restY=fn+P,_.carry=D},onEnd:()=>D.restY=0},{reach:Dr,d:.32},Me(No,Ka),{reach:Wi,d:.38},{lift:Lu,d:.15,onStart:()=>D.restY=fn,onEnd(){_.carry=null,D.it=f.add(D),D.stage="out"}},{reach:Dr,d:.32}]}}function $e(){let D=null,Q=d.head();if(d.atEnd(Q)){let ae=ke(Q.job.kind);ae>=0&&(D={type:"deliver",job:Q.job,k:ae,ready:Q.arrivedAt??N})}if(f.tailFree())for(let ae of m.values())ae.stage==="station"&&ae.processed&&!ae.reserved&&(!D||ae.processedAt<D.ready)&&(D={type:"collect",job:ae,ready:ae.processedAt});return D?D.type==="deliver"?Ke(D.job,D.k):Pe(D.job):null}function Ie(D){let Q=n.robot;if(!_.task){let Qe=$e();Qe?(_.task=Qe,_.steps=Qe.steps.slice(),_.cur=null,_.idle=0,_.homed=!1,Q.setBusy(!0)):(_.idle+=D,_.idle>PS&&!_.homed&&!_.cur&&(_.steps=[Me(Lr,0)],_.homed=!0))}let ae=D,P=0;for(;ae>0&&P++<32;){if(!_.cur){let Ae=_.steps.shift();if(!Ae)break;let xe={yaw:Q.pose.yaw,reach:Q.pose.reach,lift:Q.pose.lift},be={yaw:Ae.yaw??xe.yaw,reach:Ae.reach??xe.reach,lift:Ae.lift??xe.lift},Ge=typeof Ae.d=="function"?Ae.d(xe,be):Ae.d;_.cur={st:Ae,from:xe,to:be,d:Ge/F,t:0},Ae.onStart&&Ae.onStart()}let Qe=_.cur,nt=Math.min(ae,Qe.d-Qe.t);Qe.t+=nt,ae-=nt;let ft=Qe.d>0?Ei(Qe.t/Qe.d):1;Q.setPose(Qe.from.yaw+Sd(Qe.from.yaw,Qe.to.yaw)*ft,hi(Qe.from.reach,Qe.to.reach,ft),hi(Qe.from.lift,Qe.to.lift,ft)),Qe.t>=Qe.d-1e-6&&(_.cur=null,Qe.st.onEnd&&Qe.st.onEnd())}_.task&&!_.cur&&_.steps.length===0&&(_.task=null,_.idle=0,Q.setBusy(!1)),_.carry&&_.carry.mesh&&(Q.carryPoint(a),a.y=Math.max(a.y,_.carry.restY),_.carry.mesh.position.copy(a))}function he(){for(let D of m.values())D.stage!=="station"||D.processed||D.call.status==="running"||N<D.arriveT+ES/F||(D.processed=!0,D.processedAt=N,s.setLook(D.mesh,Ja(D.call,D.kind)),ne(D))}function k(D,Q){f.remove(Q),D.it=null,D.stage="transfer",H={j:D,t:0,d:RS/F,from:D.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new A)}}function X(D){if(!H)return;H.t+=D;let Q=Ei(H.t/H.d),ae=H.j.mesh;if(ae.position.lerpVectors(H.from,H.to,Q),ae.position.y+=Math.sin(Math.PI*Q)*.025,H.t>=H.d){let P=H.j;H=null,Y(P),t.dockTurn()===P.turn?t.addWafer(Ja(P.call,P.kind)):re(P.turn,Ja(P.call,P.kind)),Z(P)}}function oe(D){if(t.dockReady()&&t.dockTurn()==null){let P=null;for(let Qe of y.values())!Qe.shipped&&(!P||Qe.no<P.no)&&(P=Qe);if(P){t.bindDock(P.no,P.info);for(let Qe of P.pending.splice(0))t.addWafer(Qe)}}let Q=t.dockTurn();if(Q!=null&&!H&&t.dockReady()){let P=L(Q);!P.shipped&&W(P)&&!V(Q)&&t.ship(Q)&&(P.shipped=!0)}let ae=f.head();if(!H&&f.atEnd(ae)){let P=ae.job;L(P.turn).shipped?Ee(P):t.dockReady()&&t.dockTurn()===P.turn?k(P,ae):(P.waitT+=D,P.waitT>CS&&Q!=null&&Q!==P.turn&&t.dockReady()&&t.ship(Q)&&(L(Q).shipped=!0))}}function $(){let D=m.size-AS;if(!(D<=0))for(let Q of m.values()){if(D<=0)break;Q.stage==="spawn"&&Q.call.status!=="running"&&(Ee(Q),D-=1)}}function te(){if(d.tailFree()){for(let D of m.values())if(D.stage==="spawn"){D.mesh=s.create("raw"),r.add(D.mesh),D.it=d.add(D),D.stage="in",d.path.at(0,D.mesh.position),i.pulseDispenser();return}}}function Se(D,Q,ae){D.emissive.copy(Q?LS:DS),D.emissiveIntensity=Q?1.6+Math.sin(ae*10)*.8:.6}return t.resetDock(null,null,[]),{sync:K,update(D,Q){N=Q,F=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=F,$(),te(),d.update(D,F,N),f.update(D,F,N),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(f.doorOut,f.doorIn),Se(n.lock.led,d.cycling,Q),Se(n.unload.led,f.cycling,Q),n.trackLed.emissiveIntensity=d.moving||f.moving?1.8+Math.sin(Q*8)*.4:1,he(),Ie(D),oe(D),X(D);for(let ae of d.items)d.path.at(ae.s,ae.job.mesh.position);for(let ae of f.items)f.path.at(ae.s,ae.job.mesh.position);for(let ae of e.list){let P=!1,Qe=!1;for(let ft of b[ae.kind])ft&&ft.stage==="station"&&(P=!0,ft.processed||(Qe=!0));let nt=(M[ae.kind]||0)>0||Qe;ae.active=nt,ae.update(D,Q,{working:nt,wafer:P})}t.update(D)},activity(){return w.inbound=d.items.length,w.outbound=f.items.length,w.robot=!!_.task||!!_.cur,w.stocker=!!H||t.busy(),w},focus(D){let Q=null;for(let ae of v)(!Q||(ae.startedAt||0)>=(Q.startedAt||0))&&(Q=ae);if(Q){let ae=e.byKind[x(Q)];return D.copy(ae.anchor),`station:${ae.kind}`}return _.task?(D.copy(n.anchors.robot),"robot"):H||t.busy()?(D.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!_.task||!!_.cur||_.steps.length>0||!!H||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:f.items.length,robot:_.task?_.task.type:"idle",transfer:!!H,dock:t.dockTurn(),rush:F,stages:[...m.values()].reduce((D,Q)=>(D[Q.stage]=(D[Q.stage]||0)+1,D),{})}},dispose(){for(let D of m.values())Y(D);m.clear()}}}function zt(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function gn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function Ci(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function km(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function zm(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var nf={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function as(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?nf["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?nf["deepseek-flash"]:null:t?nf["deepseek-flash"]:null}function Cs(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function ja(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Nu(n){if(!n||typeof n!="object")return null;let e={miss:ja(n.inputTokens),hit:ja(n.cacheReadTokens),write:ja(n.cacheWriteTokens),output:ja(n.outputTokens),reasoning:ja(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function Uu(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function Hm(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Fu(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var NS=60,Gm=40,US=200;function rf(){return{v:0,provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],firstAt:0,lastAt:0}}function FS(n){let e=n&&n.time;if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}function Ou(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function Bu(n,e){return n.length>e?n.slice(n.length-e):n}function Vm(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],added:0,removed:0}}function sf(n,e,t){let i=n.turns[n.turns.length-1];if(i&&i.status==="running")return n;let s=n.turnCount+1;return{...n,turnCount:s,turns:Bu([...n.turns,Vm(s,t??s,e)],Gm)}}function OS(n,e){let t=n.findIndex(s=>s.path===e.path);if(t<0)return[...n,{path:e.path,added:e.added,removed:e.removed}];let i=n.slice();return i[t]={...i[t],added:i[t].added+e.added,removed:i[t].removed+e.removed},i}var BS=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function kS(n,e){if(!e||typeof e.type!="string")return n;let t=e.data&&typeof e.data=="object"?e.data:{},i=FS(e),s={...n,v:n.v+1,lastAt:i,firstAt:n.firstAt||i};switch(e.type){case"request/header":{let r=t.header&&t.header.config||{};return typeof r.model=="string"&&(s.model=r.model),typeof r.provider=="string"&&(s.provider=r.provider),typeof r.reasoningEffort=="string"&&(s.effort=r.reasoningEffort),s}case"request/context":return typeof t.model=="string"&&(s.model=t.model),typeof t.provider=="string"&&(s.provider=t.provider),typeof t.contextWindow=="number"&&t.contextWindow>0&&(s.contextWindow=t.contextWindow),s;case"turn/start":{let r=s.turns[s.turns.length-1];r&&r.status==="running"&&(s.turns=Ou(s.turns,a=>({...a,status:"ok",endedAt:i})));let o=s.turnCount+1;return s.turnCount=o,s.turns=Bu([...s.turns,Vm(o,typeof t.turn=="number"?t.turn:o,i)],Gm),s.phase="thinking",s}case"step/start":return s=sf(s,i,t.turn),s.phase="thinking",s;case"assistant/message":{s=sf(s,i,t.turn);let r=Nu(t.usage);if(s.phase="idle",!r)return s;let o=as(s.provider,s.model),a=Cs(i),l=Uu(r,o,a),c=s.totals;return s.totals={miss:c.miss+r.miss,hit:c.hit+r.hit,write:c.write+r.write,output:c.output+r.output,reasoning:c.reasoning+r.reasoning,requests:c.requests+1,cost:c.cost+l,costPeak:c.costPeak+(a?l:0),costOffPeak:c.costOffPeak+(a?0:l),savings:c.savings+Hm(r,o,a)},s.contextTokens=r.miss+r.hit+r.write+r.output,s.turns=Ou(s.turns,u=>({...u,miss:u.miss+r.miss,hit:u.hit+r.hit,write:u.write+r.write,output:u.output+r.output,reasoning:u.reasoning+r.reasoning,cost:u.cost+l,requests:u.requests+1})),s}case"tool/call":{s=sf(s,i,t.turn);let r=String(t.callId??t.id??`call-${s.v}`);if(s.calls.some(u=>u.id===r))return s;let o=String(t.name||"tool"),a=mm(o),l=Io.has(a)?_m(o,t.arguments):null,c={id:r,name:o,kind:a,label:xm(o,t.arguments),turn:s.turns[s.turns.length-1].no,startedAt:i,endedAt:0,status:"running",change:l};return s.calls=Bu([...s.calls,c],NS),s.tools={...s.tools,calls:s.tools.calls+1,running:s.tools.running+1,byKind:{...s.tools.byKind,[a]:(s.tools.byKind[a]||0)+1}},s.turns=Ou(s.turns,u=>({...u,calls:u.calls+1})),s.phase="tool",s}case"tool/result":{let r=t.message&&typeof t.message=="object"?t.message:{},o=String(r.toolCallId??t.callId??""),a=s.calls.findIndex(h=>h.id===o);if(a<0||s.calls[a].status!=="running")return s;let l=!!t.error||r.isError===!0,c={...s.calls[a],status:l?"error":"ok",endedAt:i};s.calls=s.calls.slice(),s.calls[a]=c;let u=Math.max(0,s.tools.running-1);s.tools={...s.tools,running:u,errors:s.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=s.files.paths.includes(d.path);s.files={count:s.files.count+(h?0:1),added:s.files.added+d.added,removed:s.files.removed+d.removed,paths:h?s.files.paths:Bu([...s.files.paths,d.path],US)}}return s.turns=s.turns.map(h=>{if(h.no!==c.turn)return h;let p={...h,errors:h.errors+(l?1:0)};return d&&(p.files=OS(h.files,d),p.added=h.added+d.added,p.removed=h.removed+d.removed),p}),u===0&&(s.phase="thinking"),s}case"turn/end":{let r=t.reason&&typeof t.reason=="object"?t.reason.kind:void 0,o=BS.has(r)?"rework":"ok",a=s.turns[s.turns.length-1];if(a&&a.status==="running"&&(s.turns=Ou(s.turns,l=>({...l,status:o,endedAt:i})),s.calls.some(l=>l.status==="running"&&l.turn===a.no))){let l=0;s.calls=s.calls.map(c=>c.status!=="running"||c.turn!==a.no?c:(l++,{...c,status:"error",endedAt:i})),s.tools={...s.tools,running:Math.max(0,s.tools.running-l),errors:s.tools.errors+l}}return s.phase="idle",s}default:return n}}function of(n,e){let t=n;for(let i of e)t=kS(t,i);return t}function ku(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:n.tools.calls-n.tools.running>0?(n.tools.calls-n.tools.running-n.tools.errors)/(n.tools.calls-n.tools.running):1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:(()=>{let r=n.turns.filter(o=>o.status!=="running");return r.length?r.filter(o=>o.status==="ok").length/r.length:1})()}}var ct={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},Hu={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:ct.violet},reasoning:{zh:"推理",en:"REASONING",color:ct.violet},generating:{zh:"生成",en:"GENERATING",color:ct.cyan},tool:{zh:"工具",en:"TOOL CALL",color:ct.amber}},zS=bu(),Wm=120,Xm=90,HS=[20,50,100,150,200,300,500,1e3,2e3],GS=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],qm=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function Gu(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function af(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function $m(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Wt}`,n.fillStyle=ct.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Lt}`,n.fillStyle=ct.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Lt}`,n.fillStyle=o||ct.muted,n.fillText(r,e-36,39))}function Ps(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Wt}`,n.fillStyle=ct.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Lt}`,n.fillStyle=ct.dim,r==="left"&&n.fillText(s,e+a,t)}function Ym(n,e,t,i,s,r=96,o="",a=ct.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Lt}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Lt}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function Km(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),p=x=>t+s-s*ht(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),p(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let f=n.createLinearGradient(0,t,0,t+s);f.addColorStop(0,a),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),p(r[x])):n.moveTo(h(x),p(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function zu(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),Ps(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Lt}`,n.fillStyle=ct.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Lt}`,n.fillStyle=ct.muted,n.fillText(l,e+20,t+s-14))}function VS(n,e,t,i){Gu(n,e,t);let s=Hu[i.phase]||Hu.idle;$m(n,e,"令牌流量","TOKEN FLOW",ct.cyan,`● ${s.zh} ${s.en}`,s.color),Ps(n,36,122,"实时速率","LIVE RATE"),Ym(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",ct.cyan,104,"tok/s"),Ps(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Lt}`,n.fillStyle=ct.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=qm(Math.max(20,...i.tpsHist)*1.15,HS);Km(n,470,104,e-470-40,236,i.tpsHist,{color:ct.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;zu(n,36,a,o,l,"输入","INPUT",zt(c.miss+c.write),"未命中缓存 · MISS",ct.blue),zu(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",zt(c.hit),`命中率 ${Ci(i.hitRate)}`,ct.green),zu(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",zt(c.output),`请求 ${c.requests}`,ct.cyan),zu(n,36+(o+16)*3,a,o,l,"推理","REASONING",zt(c.reasoning),"思考链 · THINKING",ct.violet),af(n,e,t,ct.cyan)}function Qa(n,e,t,i,s,r,o,a,l){Ps(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Lt}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Lt}`,n.fillStyle=ct.muted,n.fillText(a,e,t+112))}function WS(n,e,t,i){Gu(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,ct.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Wt}`,n.fillStyle=ct.text,n.shadowColor=ct.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Lt}`,n.fillStyle=ct.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let y="演示数据 · DEMO DATA";n.font=`700 22px ${Wt}`;let b=n.measureText(y).width+36,_=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(_,28,b,40),n.strokeStyle=ct.amber,n.lineWidth=2,n.strokeRect(_+1,29,b-2,38),n.fillStyle=ct.amber,n.fillText(y,_+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Lt}`,n.fillStyle=ct.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=Hu[i.phase]||Hu.idle,a=(e-80)/5,l=148;Qa(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),Qa(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,ct.text),Qa(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${Ci(i.toolSuccess)}`,ct.cyan),Qa(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,ct.gold),Qa(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,ct.blue);let c=330;Ps(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,p=116,f=c+22,x=i.recent.slice(-u),m=u-x.length;for(let y=0;y<u;y++){let b=40+y*(h+d),_=x[y-m];if(!_){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,f+1,h-2,p-2);continue}let w=_.status==="running"?ct.cyan:_.status==="error"?ct.red:Io.has(_.kind)?ct.gold:ct.blue,M=n.createLinearGradient(0,f,0,f+p);M.addColorStop(0,w),M.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=_.status==="running"?.95:.55,n.fillStyle=M,n.fillRect(b,f,h,p),n.globalAlpha=1,n.fillStyle=w,n.fillRect(b,f+p-6,h,6);let v=fi[_.kind]||fi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Lt}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),b+h/2,f+p/2-6)}let g=x[x.length-1];if(g){let y=fi[g.kind]||fi.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Wt}`,n.fillStyle=ct.text;let _=String(g.label||g.name||"").slice(0,60);n.fillText(`${y.code} ${y.zh} · ${_}`,40,f+p+52),n.textAlign="right",n.font=`700 22px ${Lt}`,n.fillStyle=g.status==="running"?ct.cyan:g.status==="error"?ct.red:ct.green,n.fillText(b,e-40,f+p+52)}af(n,e,t,ct.cyan)}function XS(n,e,t,i){Gu(n,e,t),$m(n,e,"成本与上下文","COST & CONTEXT",ct.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?ct.amber:ct.green),Ps(n,36,122,"累计花费","TOTAL COST"),Ym(n,36,226,i.priced?gn(i.cost):"—",ct.gold,90),n.font=`600 22px ${Lt}`,n.fillStyle=ct.muted,n.textAlign="left",n.fillText(`高峰 ${gn(i.costPeak)} · 低谷 ${gn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=qm(Math.max(.01,...i.costHist)*1.15,GS);Km(n,480,104,e-480-40,200,i.costHist,{color:ct.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>gn(d)}),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;Ps(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Lt}`,n.fillStyle=ct.text,n.fillText(i.window?`${zt(i.ctx)} / ${zt(i.window)} · ${Ci(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?ct.red:i.ratio>=.6?ct.amber:ct.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*ht(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;Ps(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Lt}`,n.fillStyle=ct.green,n.fillText(i.priced?gn(i.savings):"—",330,u+2),Ps(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Lt}`,n.fillStyle=ct.text,n.fillText(Ci(i.hitRate),e-36,u+2),af(n,e,t,ct.gold)}var qS={flow:VS,main:WS,cost:XS};function Zm(n,e,{demo:t=!1}={}){let i=new Jt;i.name="screens";let s=[],r=new Rt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),o=gt.screenR;for(let g of zS){let[y,b]=g.px,_=Gt(y,b,(U,I,N)=>Gu(U,I,N),{anisotropy:8}),w=new Yt({map:_.tex,name:`screen-${g.id}`,toneMapped:!1});w.color.setScalar(1.25);let M=new ut(Et(st.cx,st.cz,o,g.a0,g.a1,g.y0,g.y1,48,!0),w);M.name=`screen-${g.id}`,M.userData.screenId=g.id,i.add(M);let v=.05/o,S=new ut(Et(st.cx,st.cz,o+.015,g.a0-v,g.a1+v,g.y0-.05,g.y1+.05,48,!0),r);S.name=`screen-bezel-${g.id}`,S.layers.set(Qn),i.add(S),s.push({def:g,tex:_,sig:"",draw:qS[g.id],panel:M})}let a=new Array(Wm).fill(0),l=new Array(Xm).fill(0),c=0,u=0,d=0,h=0,p=0,f=!1;function x(g){let y=g.state,b=g.live||{},_=b.phase&&b.phase!=="idle"?b.phase:y?y.phase:"idle",w=y?y.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},M=y?ku(y):{hitRate:0,toolSuccess:1,contextRatio:0},v=y?y.turns:[];return{demo:t,phase:_,tps:g.tps||0,peakTps:h,tpsHist:a,costHist:l,totals:w,hitRate:M.hitRate,toolSuccess:M.toolSuccess,model:y?y.model:"",effort:y?y.effort:"",turn:y?y.turnCount:0,ok:v.filter(S=>S.status==="ok").length,rework:v.filter(S=>S.status==="rework").length,calls:y?y.tools.calls:0,running:y?y.tools.running:0,files:y?y.files.count:0,added:y?y.files.added:0,removed:y?y.files.removed:0,requests:w.requests,recent:y?y.calls:[],peak:!!g.peak,priced:!y||!y.model||!!as(y.provider,y.model),cost:w.cost,costPeak:w.costPeak,costOff:w.costOffPeak,savings:w.savings,ctx:y?y.contextTokens:0,window:y?y.contextWindow:0,ratio:M.contextRatio||0}}function m(g,y){if(g==="flow"){let b=y.totals;return`${y.phase}|${Math.round(y.tps*2)}|${b.miss+b.write}|${b.hit}|${b.output}|${b.reasoning}|${b.requests}|${p>0?c:"flat"}|${Math.round(y.peakTps)}`}if(g==="main"){let b=y.recent[y.recent.length-1];return`${y.model}|${y.effort}|${y.phase}|${y.turn}|${y.ok}|${y.rework}|${y.calls}|${y.running}|${y.files}|${y.added}|${y.removed}|${y.requests}|${y.recent.length}|${b?`${b.id}:${b.status}`:""}|${Math.round(y.toolSuccess*1e3)}`}return`${y.cost.toFixed(5)}|${y.costPeak.toFixed(5)}|${y.savings.toFixed(5)}|${y.ctx}|${y.window}|${y.peak}|${y.requests}|${l[Xm-1].toFixed(5)}|${Math.round(y.hitRate*1e3)}`}return{root:i,update(g,y,b){c+=g,u+=g,d+=g;let _=b.tps||0;h=Math.max(h,_),c>=.5&&(c=0,a.shift(),a.push(_),p=_>.5?Wm:Math.max(0,p-1));let w=b.state?b.state.totals.cost:0;if(!f&&b.state&&(l.fill(w),f=!0),u>=2&&(u=0,l.shift(),l.push(w)),d<.5)return;d=0;let M=x(b);for(let v of s){let S=m(v.def.id,M);S!==v.sig&&(v.sig=S,v.tex.redraw((U,I,N)=>v.draw(U,I,N,M)))}},reset(){a.fill(0),l.fill(0),h=0,p=0,f=!1;for(let g of s)g.sig=""}}}var tr=16,$S=.004,lf=.06,Vu=new qe(4164863),Jm=new qe(4641535),jm=new qe(16762218),YS=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${tr}];
uniform float uOffset[${tr}];
uniform vec3 uColor[${tr}];
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
}`,KS=`
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
}`;function ZS(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=lf/2,p=r[0]-u*(s===0?0:h),f=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(lf/2),y=u*(lf/2),b=i-(s===0?0:h),_=i+c+(s===n.length-2?0:h),w=[[p-g,f-y,b,-1],[p+g,f+y,b,1],[x+g,m+y,_,1],[x-g,m-y,_,-1]];for(let M of[0,1,2,0,2,3]){let v=w[M];t.pos.push(v[0],$S,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var Qm=n=>[n.x,n.z];function eg(){let n={},e=[],t=[],i=(m,g,y)=>{n[m]=t.length,e.push(g),t.push(y)},s=[Vi.x,Vi.z],r=(m,g,y)=>[Qm(Ai(m,g)),Qm(Ai(m,y))];i("fuel",Jm,[[-7.45,-.7],[-4.6,-.7]]),i("feed",Vu,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,Vu,r(Wd(m),.95,2.12));i("lock",Jm,r(Lr,.95,2.1)),i("unload",jm,r(No,.95,2.1)),i("out",jm,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*It;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",Vu,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>ZS(m,g,a));let l=new Nt;l.setAttribute("position",new lt(a.pos,3)),l.setAttribute("aS",new lt(a.s,1)),l.setAttribute("aX",new lt(a.x,1)),l.setAttribute("aChan",new lt(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(tr),u=new Float32Array(tr),d=new Float32Array(tr),h=new Float32Array(tr),p=[];for(let m=0;m<tr;m++)p.push((e[m]||Vu).clone());let f=new un({name:"floor-channels",vertexShader:YS,fragmentShader:KS,uniforms:cu.merge([Ze.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:p}}]),transparent:!0,blending:vo,blendSrc:Ys,blendDst:Ks,blendSrcAlpha:yc,blendDstAlpha:Ys,depthWrite:!1,fog:!0});f.uniforms.uLevel.value=c,f.uniforms.uOffset.value=u,f.uniforms.uColor.value=p;let x=new ut(l,f);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(Qn),d.fill(.8),{root:x,ids:n,set(m,g,y){let b=n[m];b!=null&&(h[b]=g,y!=null&&(d[b]=y))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var JS={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"}},jS={low:null,medium:null,high:{scale:.4,strength:.5,blur:1},ultra:{scale:.55,strength:.55,blur:.8}},QS=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5];function tg(n,e,{environment:t=!0,demo:i=!1,look:s=js,brightness:r=Kt.initial}={}){let o=new mr;o.background=null;let a=Ud(s),l=ht(r,Kt.min,Kt.max),c=t?n:null,u=c?jS[e]:null,d=u?K0(c,u):null,{M:h,tex:p}=k0(e),f=im(h,p,e,{renderer:c,look:a,reflection:d,beamTarget:new A(Qt.x,3,Qt.z)});function x(){o.environment=f.envTexture,o.environmentIntensity=a.envIntensity}x();let m=Dm(p),g=fm(h),y=Mm(h),b=Am(h),_=Rm(h,m),w=Um(h),M=Lm(h,w),v=Zm(h,null,{demo:i}),S=eg(),U=new Jt;U.name="wafers",o.add(f.root,S.root,v.root,g.root,y.root,b.root,_.root,M.root,m.root,U);let I=Bm({cell:b,stations:_,stocker:M,engine:y,wafers:w,root:U}),N=[];for(let K of[...g.hover,...y.hover,...b.hover,..._.list.flatMap(Me=>Me.hover),...M.hover])K.object.userData.hoverId=K.id,N.push(K.object);let F=[{id:"tank",anchor:g.anchors.tank},{id:"engine",anchor:y.anchors.engine},{id:"robot",anchor:b.anchors.robot.clone().setY(1.75)},..._.list.map(K=>({id:`station:${K.kind}`,anchor:K.anchor})),{id:"loadport",anchor:M.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:M.anchors.stocker.clone().setY(1.25)}],H={phase:"idle",tps:0,balance:null,currency:"CNY"},L={state:null,live:H,tps:0,peak:!1},W={activity:0,tps:0,model:"",phase:"idle"},V=null,q=0,Y=!1,Z=0,ne=0,re=0,Ee=1,ke=Cs(Date.now());function ie(){ke=Cs(Date.now());let K=V?as(V.provider,V.model):null,Me=typeof H.balance=="number"?H.balance:null,Ke=H.currency==="USD"?"$":"¥",Pe=[i?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(Me==null)Pe.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),Pe.push({text:"余额不可用 · balance unavailable",size:28,color:"#8c97ad",gap:56});else{Pe.push({text:`${Ke} ${Me.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let $e=H.currency==="USD"?0:Fu(Me,K,ke);Pe.push({text:K&&$e?`≈ ${zt($e)} tokens · ${K.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}Pe.push({text:ke?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:ke?"#ffb020":"#34d17a",weight:700,gap:72}),g.setReadout(Pe)}function Te(){let K=typeof H.balance=="number"?H.balance:null;if(K==null)return .5;Z=Math.max(Z,K);let Me=QS.find(Ke=>Ke>=Z*1.25)||Z*1.25;return ht(K/Me,0,1)}function De(K,Me,Ke){let Pe=I.activity();S.set("fuel",.1+.9*Me,.7+ne/28),S.set("feed",Pe.inbound>0?1:.1+.55*Me,1.5),S.set("lock",Pe.inbound>0?.9:.08,-1.4);for(let $e of _.list)S.set(`spoke:${$e.index}`,$e.active?1:.06,1.2);S.set("unload",Pe.outbound>0?.9:.08,1.4),S.set("out",Pe.outbound>0||Pe.stocker?.9:.08,1.4),S.set("ring",Pe.robot?.75:Ke!=="idle"?.4:.22,.8),S.update(K)}function se(K){return K==="reasoning"||K==="generating"||K==="thinking"?.35+.65*ht(ne/70,0,1):K==="tool"?.2:0}return{scene:o,key:f.key,presets:JS,labelAnchors:F,get post(){return{...a.post,exposure:a.exposure*l}},getLook:()=>a.id,setLook(K){let Me=Ud(K);return Me===a?!1:(a=Me,f.setLook(a),x(),!0)},getBrightness:()=>l,setBrightness(K){l=ht(Number(K)||Kt.initial,Kt.min,Kt.max)},setState(K){K&&(V&&K.tools.errors>q&&(Y=!0),q=K.tools.errors,V=K,I.sync(K),Ee=Math.max(Ee,.45))},setLive(K){K&&Object.assign(H,K)},busy(){return I.busy()||H.phase&&H.phase!=="idle"||ne>1},update(K,Me){ne=kt(ne,H.tps||0,6,K),Ee+=K,Ee>=.5&&(Ee=0,ie());let Ke=V?V.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},Pe=H.phase&&H.phase!=="idle"?H.phase:V?V.phase:"idle",$e=ne>.5?ht(.2+ne/90,0,1):0;re=kt(re,se(Pe),1.6,K),W.activity=re,W.tps=ne,W.model=V?V.model:"",W.phase=Pe,f.update(K,Me,W),g.update(K,Me,{level:Te(),flow:$e,peak:ke}),y.update(K,Me,{phase:Pe,tps:ne,ctx:V&&V.contextWindow>0?V.contextTokens/V.contextWindow:0,counters:{miss:Ke.miss,hit:Ke.hit,output:Ke.output,reasoning:Ke.reasoning,cost:Ke.cost},errorPulse:Y}),Y=!1,I.update(K,Me),m.update(K),De(K,$e,Pe),L.state=V,L.tps=ne,L.peak=ke,v.update(K,Me,L)},prerender(K){d&&d.update(o,K)},hoverTargets(){return M.hoverObjects(N.slice())},focus:K=>I.focus(K),stats:()=>I.stats(),dispose(){I.dispose(),M.dispose(),f.dispose(),O0(o),w.dispose(),d&&d.dispose();for(let K of Object.values(h))K&&K.dispose&&K.dispose();for(let K of Object.values(p))K&&K.dispose&&K.dispose()}}}var ew=new Es(-1,1,1,-1,0,1),cf=class extends Nt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},tw=new cf,Wu=class{constructor(e){this._mesh=new ut(tw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ew)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var nw=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,iw=`
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
}`,sw=`
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
}`,rw=`
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
}`,ow=`
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
}`;function ng(n,e,t={}){let i=new Ln(Math.max(1,n),Math.max(1,e),{type:Jn,minFilter:an,magFilter:an,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function Xu(n,e,t={}){return new mo({vertexShader:nw,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function ig(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new Wu(null),r=ng(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(ng(2,2));let a=Xu(iw,{tSrc:{value:null},uTexel:{value:new _e},uThreshold:{value:1},uKnee:{value:.45}}),l=Xu(sw,{tSrc:{value:null},uTexel:{value:new _e}}),c=Xu(rw,{tSrc:{value:null},uTexel:{value:new _e},uWeight:{value:1}},{blending:Zn,transparent:!0}),u=Xu(ow,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,p){n.setRenderTarget(p),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,p){r.setSize(Math.max(1,h),Math.max(1,p));let f=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(p/2));for(let m of o)m.setSize(f,x),f=Math.max(1,Math.floor(f/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:p,knee:f,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),p!=null&&(a.uniforms.uThreshold.value=p),f!=null&&(a.uniforms.uKnee.value=f),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,p,f=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,p),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=f,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var qu=85*Math.PI/180,aw=1.65,lw=3.2,cw=2.6,uw={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function sg(n,e,t={}){let{keyTarget:i=null,clampPosition:s=se=>se,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new $n(0,0,0,"YXZ"),h=new Set,p=!1,f=new A,x=new A,m=0,g=null,y=null,b=0,_=new A,w=new A,M=new A,v=new A,S=new A,U=new vr,I=new _e;function N(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function F(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=ht(d.x,-qu,qu),N()}function H(se){return _.copy(n.position),S.copy(_).add(se),n.position.copy(S),s(n.position,_),n.position.distanceTo(S)}let L=()=>{b=performance.now(),a&&a()},W=()=>{o&&o(),L()};function V(se){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let K=se.button===2||se.button===0&&se.shiftKey?"pan":se.button===0?"look":null;if(K){g={id:se.pointerId,x:se.clientX,y:se.clientY,mode:K},y=null;try{e.setPointerCapture(se.pointerId)}catch{}W()}}function q(se){if(!l||!g||se.pointerId!==g.id)return;let K=se.clientX-g.x,Me=se.clientY-g.y;g.x=se.clientX,g.y=se.clientY;let Ke=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Pe=2.4/Ke;c+=K*Pe,u=ht(u+Me*Pe,-qu,qu),N()}else{let Pe=6/Ke;M.set(1,0,0).applyQuaternion(n.quaternion),v.copy(M).multiplyScalar(-K*Pe),v.y+=Me*Pe,H(v)}L()}function Y(se){if(!(!g||se.pointerId!==g.id)){g=null;try{e.releasePointerCapture(se.pointerId)}catch{}L()}}function Z(se){if(!l)return;se.preventDefault();let K=se.deltaMode===1?16:se.deltaMode===2?400:1;m=ht(m+ht(-se.deltaY*K*.006,-4,4),-8,8),y=null,W()}function ne(se){if(!l)return;let K=e.getBoundingClientRect();I.set((se.clientX-K.left)/Math.max(1,K.width)*2-1,-((se.clientY-K.top)/Math.max(1,K.height))*2+1),n.updateMatrixWorld(),U.setFromCamera(I,n);let{origin:Me,direction:Ke}=U.ray;if(Ke.y>-.02)return;let Pe=(r-Me.y)/Ke.y;if(Pe<=0||Pe>60)return;let $e=new A().copy(Ke).multiplyScalar(Pe).add(Me),Ie=$e.x-n.position.x,he=$e.z-n.position.z,k=Math.hypot(Ie,he);k>1.5&&($e.x-=Ie/k*1.2,$e.z-=he/k*1.2),$e.y=r+aw;let X=$e.distanceTo(n.position);y={t:0,d:ht(X/6,.45,1.6),p0:n.position.clone(),p1:$e},W()}function re(se,K){if(!l||se.ctrlKey||se.metaKey||se.altKey)return;let Me=se.target;if(Me&&(Me.tagName==="INPUT"||Me.tagName==="TEXTAREA"||Me.tagName==="SELECT"||Me.isContentEditable))return;p=!!se.shiftKey;let Ke=uw[se.code];Ke&&(se.preventDefault(),se.stopPropagation(),K?h.add(Ke):h.delete(Ke),K?(y=null,W()):L())}let Ee=se=>re(se,!0),ke=se=>re(se,!1),ie=()=>{h.clear(),p=!1},Te=se=>{l&&se.preventDefault()};e.addEventListener("pointerdown",V),e.addEventListener("pointermove",q),e.addEventListener("pointerup",Y),e.addEventListener("pointercancel",Y),e.addEventListener("wheel",Z,{passive:!1}),e.addEventListener("dblclick",ne),e.addEventListener("contextmenu",Te),i&&(i.addEventListener("keydown",Ee),i.addEventListener("keyup",ke),i.addEventListener("blur",ie));function De(se){if(!l)return!1;let K=!1;if(y){y.t+=se;let Me=Ei(Math.min(1,y.t/y.d));v.lerpVectors(y.p0,y.p1,Me).sub(n.position),(H(v)>.02||y.t>=y.d)&&(y=null),K=!0}if(x.set(0,0,0),h.size&&(w.set(-Math.sin(c),0,-Math.cos(c)),M.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(w),h.has("b")&&x.sub(w),h.has("r")&&x.add(M),h.has("l")&&x.sub(M),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(lw*(p?cw:1))),f.set(kt(f.x,x.x,9,se),kt(f.y,x.y,9,se),kt(f.z,x.z,9,se)),f.lengthSq()>1e-6?(H(v.copy(f).multiplyScalar(se)),K=!0):f.set(0,0,0),Math.abs(m)>.001){let Me=m*(1-Math.exp(-9*se));m-=Me,n.getWorldDirection(w),H(v.copy(w).multiplyScalar(Me))>.02&&(m=0),K=!0}else m=0;return K&&L(),K}return{get enabled(){return l},enable(){l=!0,F()},disable(){l=!1,g=null,y=null,h.clear(),f.set(0,0,0),m=0},sync:F,active(){return l&&(!!g||!!y||h.size>0||Math.abs(m)>.001||f.lengthSq()>1e-4||performance.now()-b<300)},update:De,dispose(){e.removeEventListener("pointerdown",V),e.removeEventListener("pointermove",q),e.removeEventListener("pointerup",Y),e.removeEventListener("pointercancel",Y),e.removeEventListener("wheel",Z),e.removeEventListener("dblclick",ne),e.removeEventListener("contextmenu",Te),i&&(i.removeEventListener("keydown",Ee),i.removeEventListener("keyup",ke),i.removeEventListener("blur",ie))}}}var uf=["orbit","look"],Ur=["low","medium","high","ultra"],Uo=["auto",30,60,120,0],el={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},hw=60,dw=30,fw=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,pw=/swiftshader|llvmpipe|softpipe|software|basic render/i;function mw(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(pw.test(t))return"low";if(fw.test(t))return"high"}catch{}return"medium"}function gw(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new Nt;return t.setAttribute("position",new lt(e,3)),t}function xw(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function rg(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c}=e,u=!!e.demo,d=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new du({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=mw(h.getContext()),f=el[e.quality]?e.quality:p,x=Uo.includes(e.fps)?e.fps:"auto";h.setClearColor(nm,1),h.toneMapping=Ca,h.toneMappingExposure=1,h.outputColorSpace=Pn,h.shadowMap.type=br,h.shadowMap.autoUpdate=!1,h.info.autoReset=!1,h.debug.onShaderError=(O,de,ce,ve)=>{let Le=O.getShaderSource(ve)||"",Je=/#define SHADER_NAME (.*)/.exec(Le),ot=Je&&Je[1].trim()||"shader",tt=[O.getShaderInfoLog(ce),O.getShaderInfoLog(ve),O.getProgramInfoLog(de)].map(sn=>(sn||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${ot}" failed to compile
${tt}`);let At=tt.split(`
`).find(sn=>/error/i.test(sn))||tt.split(`
`)[0]||"";r&&r("shader",`${ot}: ${At}`.slice(0,220))};let m=xw(h.getContext()),g=!1,y=h.domElement;y.className="dwp3d-gl",y.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",y.setAttribute("aria-hidden","true"),n.appendChild(y);let b=document.createElement("div");b.className="dwp3d-labels",n.appendChild(b);let _=new In(40,1,.2,700);_.layers.enable(Qn);let w=new gu(_,y);w.enableDamping=!0,w.dampingFactor=.08,w.minDistance=2.2,w.maxDistance=26,w.zoomToCursor=!0,w.maxPolarAngle=150*(Math.PI/180),w.screenSpacePanning=!0,w.rotateSpeed=.7,w.zoomSpeed=.9,w.panSpeed=.8;let M=null,v=null,S=null,U=gw(),I=null,N=null,F=0,H=0,L=1,W=1,V=null,q="orbit",Y=!1,Z,ne=0,re=0,Ee=new A,ke=[],ie=[],Te=!0,De=!1,se=!1,K=!1,Me=0,Ke=0,Pe=Pr.includes(e.look)?e.look:js,$e=ht(Number(e.brightness)||Kt.initial,Kt.min,Kt.max),Ie={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function he(){Ie.casters.clear(),Ie.pending=!1,!(!M||!h.shadowMap.enabled)&&(M.scene.updateMatrixWorld(!0),M.scene.traverse(O=>{O.castShadow&&(O.isMesh||O.isPoints||O.isLine)&&Ie.casters.set(O,{m:O.matrixWorld.clone(),v:O.isInstancedMesh?O.instanceMatrix.version:0})}),h.shadowMap.needsUpdate=!0,Ie.lastBake=Ke,Ie.bakes+=1)}function k(){if(!M||!h.shadowMap.enabled||Ke<Ie.next)return;Ie.next=Ke+.5;let O=!1;for(let[ce,ve]of Ie.casters){if(!ce.castShadow||!Gn(ce)){Ie.casters.delete(ce),O=!0;continue}(!ce.matrixWorld.equals(ve.m)||ce.isInstancedMesh&&ce.instanceMatrix.version!==ve.v)&&(ce.castShadow=!1,Ie.casters.delete(ce),O=!0)}M.scene.traverse(ce=>{ce.castShadow&&!Ie.casters.has(ce)&&(ce.castShadow=!1)}),O&&(Ie.pending=!0);let de=Ie.bakes<4?.5:2;Ie.pending&&Ke-Ie.lastBake>=de&&he()}function X(){v&&(v.dispose(),v=null),S&&(S.removeFromParent(),S.material.dispose(),S=null),M&&(M.dispose(),M=null),Ie.casters.clear(),h.renderLists.dispose()}function oe(){let O=el[f];h.shadowMap.enabled=f!=="low",M=tg(h,f,{demo:u,look:Pe,brightness:$e}),S=new la(U,new uo({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),S.name="hover-highlight",S.matrixAutoUpdate=!1,S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,S.layers.set(Qn),M.scene.add(S),v=ig(h,{msaa:O.msaa,bloom:O.bloom}),$(),W=1,ae(!0),I&&M.setState(I),N&&M.setLive(N),ye(),Ie.bakes=0,Ie.next=Ke+.5,he()}function $(){!v||!M||(M.post&&v.set(M.post),d&&v.set({grain:.006}))}let te=new _e;function Se(O,de,ce,ve){te.set(O.x-st.cx,O.z-st.cz),te.length()>de&&(te.setLength(de),O.x=st.cx+te.x,O.z=st.cz+te.y),O.y=ht(O.y,ce,ve)}function D(){Se(w.target,jn.targetR,jn.targetYMin,jn.targetYMax),Se(_.position,jn.r,jn.yMin,jn.yMax)}function Q(){v&&v.setSize(Math.round(F*L*W),Math.round(H*L*W))}function ae(O=!1){let de=Math.max(1,Math.floor(n.clientWidth)),ce=Math.max(1,Math.floor(n.clientHeight)),ve=Math.min(typeof window<"u"&&window.devicePixelRatio||1,el[f].dpr);!O&&de===F&&ce===H&&ve===L||(F=de,H=ce,L=ve,h.setPixelRatio(ve),h.setSize(de,ce,!1),Q(),_.aspect=de/ce,_.updateProjectionMatrix())}function P(O){let de=M?M.presets:null,ce=de&&(de[O]||de.overview)||{pos:[0,7,16],target:[0,2,-1]},ve=new A().fromArray(ce.target),Le=new A().fromArray(ce.pos),Je=ce.mode==="look"?"look":"orbit";if(Je==="orbit"){let ot=ht(1.7/Math.max(.3,_.aspect),1,2.3);Le.sub(ve).multiplyScalar(ot).add(ve),Se(Le,jn.r,jn.yMin,jn.yMax)}return{pos:Le,target:ve,mode:Je}}function Qe(O,de){let ce=de.x-O.x,ve=de.y-O.y,Le=de.z-O.z;return{yaw:Math.atan2(-ce,-Le),pitch:Math.atan2(ve,Math.hypot(ce,Le))}}let nt=new $n(0,0,0,"YXZ"),ft=new A;function Ae(O,de){nt.set(de,O,0,"YXZ"),_.quaternion.setFromEuler(nt)}function xe(O){O!==q&&(q=O,O==="look"?(Y=!1,w.enabled=!1,G.enable()):(G.disable(),w.enabled=!0),c&&c(O))}function be(){let O=Ao(_.position)==="hall";if(xe("orbit"),!O){R("overview");return}_.getWorldDirection(ft),w.target.copy(_.position).addScaledVector(ft,6),Se(w.target,jn.targetR,jn.targetYMin,jn.targetYMax),w.update(),D()}function Ge(O){let{pos:de,target:ce,mode:ve}=P(O);if(V=null,xe(ve),_.position.copy(de),ve==="look"){let Le=Qe(de,ce);Ae(Le.yaw,Le.pitch),G.sync()}else w.target.copy(ce),w.update(),D()}function R(O,de=1.2){if(d){Ge(O);return}let{pos:ce,target:ve,mode:Le}=P(O);xe(Le),nt.setFromQuaternion(_.quaternion,"YXZ");let Je=Qe(ce,ve);V={t:0,d:de,p0:_.position.clone(),p1:ce,yaw0:nt.y,pitch0:nt.x,yaw1:Je.yaw,pitch1:Je.pitch,target:ve,mode:Le}}let E=()=>{Me=performance.now()};w.addEventListener("start",()=>{V=null,E()}),w.addEventListener("change",E),w.addEventListener("end",E);let G=sg(_,y,{keyTarget:n,clampPosition:W0,floorY:0,onStart:()=>{V=null,E()},onChange:E});function ye(){for(let O of ke)O.el.remove();if(ke=[],!!M)for(let O of ie){let de=M.labelAnchors.find(Le=>Le.id===O.id);if(!de)continue;let ce=document.createElement("div");ce.className="dwp3d-label";let ve=document.createElement("span");if(ve.className="dwp3d-label-title",ve.textContent=O.text,ce.appendChild(ve),O.sub){let Le=document.createElement("span");Le.className="dwp3d-label-sub",Le.textContent=O.sub,ce.appendChild(Le)}b.appendChild(ce),ke.push({id:O.id,el:ce,anchor:de.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let ue=new A,Ne=[],He=[];function pe(O){O.shown!==!1&&(O.el.style.opacity="0",O.shown=!1)}function me(){if(Te){Ne.length=0;for(let O of ke){if(ue.copy(O.anchor).project(_),!(ue.z<1&&Math.abs(ue.x)<1.05&&Math.abs(ue.y)<1.05)){pe(O);continue}O.sx=(ue.x*.5+.5)*F,O.sy=(-ue.y*.5+.5)*H,O.dist=_.position.distanceTo(O.anchor),Ne.push(O)}Ne.sort((O,de)=>O.dist-de.dist),He.length=0;for(let O of Ne){O.w||(O.w=O.el.offsetWidth,O.h=O.el.offsetHeight);let de={x0:O.sx-O.w/2-3,x1:O.sx+O.w/2+3,y0:O.sy-O.h-3,y1:O.sy+7};if(He.some(Le=>de.x0<Le.x1&&de.x1>Le.x0&&de.y0<Le.y1&&de.y1>Le.y0)){pe(O);continue}He.push(de);let ce=ht(1.45-O.dist/24,.3,1).toFixed(2),ve=`translate(${O.sx.toFixed(1)}px, ${O.sy.toFixed(1)}px) translate(-50%, -100%)`;ve!==O.tf&&(O.el.style.transform=ve,O.tf=ve),O.shown!==ce&&(O.el.style.opacity=ce,O.shown=ce)}}}let ze=new vr,z=new _e,fe=null,le=!1,Oe=0,Ue=null,Be=null,et=null,Ve=!1;function Ce(O){if(!M)return null;z.set(O.x/F*2-1,-(O.y/H)*2+1),_.updateMatrixWorld(),ze.setFromCamera(z,_);let de=ze.intersectObjects(M.hoverTargets(),!0);for(let ce of de)for(let ve=ce.object;ve;ve=ve.parent)if(ve.userData&&ve.userData.hoverId)return{id:ve.userData.hoverId,obj:ve};return null}let je=O=>{let de=y.getBoundingClientRect();return{x:O.clientX-de.left,y:O.clientY-de.top}},xt=O=>{fe=je(O),le=!0,et&&Math.hypot(fe.x-et.x,fe.y-et.y)>5&&(Ve=!0)},We=()=>{fe=null,le=!0},Tt=O=>{et={...je(O),t:performance.now()},Ve=!1,E(),y.style.cursor="grabbing"},Xt=O=>{let de=je(O);if(q==="orbit"&&et&&!Ve&&performance.now()-et.t<450&&i){let ce=Ce(de);i(ce?ce.id:null)}et=null,Ve=!1,le=!0,E(),y.style.cursor=Ue?"pointer":"grab"};y.addEventListener("pointermove",xt),y.addEventListener("pointerleave",We),y.addEventListener("pointerdown",Tt),y.addEventListener("pointerup",Xt);function Gn(O){let de=O;for(;de.parent;)de=de.parent;return!!M&&de===M.scene}let Pi=new A,mi=new A,ir=new ln,sr=new bt,Ls=new bi;function gi(O){if(!S)return;let de=Be;if(!de||!Gn(de)){S.visible=!1;return}de.updateWorldMatrix(!0,!1),de.geometry?(de.geometry.boundingBox||de.geometry.computeBoundingBox(),de.geometry.boundingBox.getSize(Pi),de.geometry.boundingBox.getCenter(mi),Pi.multiplyScalar(1.06).addScalar(.03),sr.compose(mi,ir.identity(),Pi),S.matrix.multiplyMatrices(de.matrixWorld,sr)):(Ls.setFromObject(de),Ls.getSize(Pi).multiplyScalar(1.06).addScalar(.03),Ls.getCenter(mi),S.matrix.compose(mi,ir.identity(),Pi)),S.matrixWorldNeedsUpdate=!0,S.material.opacity=d?.85:.62+.28*(.5+.5*Math.sin(O*5)),S.visible=!0}function xi(){return x!=="auto"?x:!!V||Y||!!et||G.active()||performance.now()-Me<900||M&&M.busy()?hw:dw}let ls=0,Ii=!1,qi=0,_i=0,$i=0,St={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Re=!0,_t=typeof document>"u"||!document.hidden;function xn(){St.frames=0,St.ticks=0,St.t=0,St.capTime=0,St.cpu=0}function cs(){let O=St.frames/St.t,de=St.ticks/St.t,ce=St.capTime/St.t,ve=Math.max(1,Math.min(ce>0?ce:de,de)),Le=O<ve*.85,Je=el[f];Le?(St.good=0,St.slow+=1,St.slow>=2&&W>Je.minScale&&(W=Math.max(Je.minScale,Math.round((W-.1)*100)/100),St.slow=0,Q())):(St.slow=0,O>=ve*.95&&(St.good+=1),St.good>=5&&W<1&&(W=Math.min(1,Math.round((W+.05)*100)/100),St.good=0,Q())),m.poll(),s&&s({fps:O,target:ve,slow:Le,scale:W,minScale:Je.minScale,cpuMs:St.frames?St.cpu/St.frames:0,gpuMs:g?m.take():null,gpuTimer:m.supported,calls:St.calls,triangles:St.tris,width:Math.round(F*L*W),height:Math.round(H*L*W),cap:x}),xn()}function rr(O){if(!Ii)return;ls=requestAnimationFrame(rr);let de=Math.max(0,(O-qi)/1e3);qi=O,St.ticks+=1,St.t+=de;let ce=xi();if(St.capTime+=ce*de,St.t>=1&&cs(),ce>0){let Je=1e3/ce,ot=O-_i;if(ot<Je-1.5)return;_i=ot<Je*2?_i+Je:O}else _i=O;let ve=performance.now(),Le=Math.min(.1,Math.max(0,(O-$i)/1e3));if($i=O,Ke+=Le,V){V.t+=Le;let Je=Ei(Math.min(1,V.t/V.d));if(_.position.lerpVectors(V.p0,V.p1,Je),Ae(F0(V.yaw0,V.yaw1,Je),hi(V.pitch0,V.pitch1,Je)),V.t>=V.d){let ot=V;V=null,ot.mode==="look"?G.sync():w.target.copy(ot.target)}}else if(Y&&M){if(ne-=Le,ne<=0){ne=.4;let ot=M.focus(Ee);ot||Ee.fromArray(M.presets.overview.target),ot!==Z&&(Z=ot,re=1.6,o&&o(ot))}let Je=_.position.clone().sub(w.target);if(w.target.lerp(Ee,1-Math.exp(-2.4*Le)),re>0){re-=Le;let ot=Z?6.8:P("overview").pos.distanceTo(P("overview").target);Je.setLength(kt(Je.length(),ot,2,Le))}_.position.copy(w.target).add(Je)}if(V||(q==="orbit"?(w.update(),D()):G.update(Le)),M&&M.update(Le,Ke,_),Oe-=Le,le&&Oe<=0){Oe=.08,le=!1;let Je=fe&&!et?Ce(fe):null,ot=Je?Je.id:null;Be=Je?Je.obj:null,et||(y.style.cursor=ot?"pointer":"grab"),(ot||Ue)&&(Ue=ot,t&&t(ot?{id:ot,x:fe.x,y:fe.y}:null))}gi(Ke),k(),h.info.reset(),g&&m.begin(),v&&M&&(_.updateMatrixWorld(),M.prerender(_),v.render(M.scene,_,d?0:Ke)),g&&m.end(),St.calls=h.info.render.calls,St.tris=h.info.render.triangles,me(),St.frames+=1,St.cpu+=performance.now()-ve,K||(K=!0,l&&l())}function Yi(){let O=!De&&!se&&Re&&_t&&F>1&&H>1;O&&!Ii?(Ii=!0,qi=_i=$i=performance.now(),xn(),ls=requestAnimationFrame(rr),a&&a(!0)):!O&&Ii&&(Ii=!1,cancelAnimationFrame(ls),a&&a(!1))}let or=new ResizeObserver(()=>{ae(),Yi()});or.observe(n);let T=typeof IntersectionObserver=="function"?new IntersectionObserver(O=>{Re=O.some(de=>de.isIntersecting),Yi()}):null;T&&T.observe(n);let B=()=>{_t=!document.hidden,Yi()};document.addEventListener("visibilitychange",B);let ee=O=>{O.preventDefault(),se=!0,Yi(),r&&r("context-lost")},J=()=>{se=!1,X(),oe(),Yi()};y.addEventListener("webglcontextlost",ee),y.addEventListener("webglcontextrestored",J);function j(){if(!De){De=!0,Ii=!1,cancelAnimationFrame(ls),or.disconnect(),T&&T.disconnect(),document.removeEventListener("visibilitychange",B),y.removeEventListener("pointermove",xt),y.removeEventListener("pointerleave",We),y.removeEventListener("pointerdown",Tt),y.removeEventListener("pointerup",Xt),y.removeEventListener("webglcontextlost",ee),y.removeEventListener("webglcontextrestored",J),w.dispose(),G.dispose();try{m.dispose(),X()}finally{U.dispose(),h.dispose(),h.forceContextLoss(),y.remove(),b.remove()}}}try{ae(!0),oe(),Ge("overview")}catch(O){throw j(),O}return Yi(),{setState(O){I=O,M&&M.setState(O)},setLive(O){N={...N||{},...O},M&&M.setLive(O)},getQuality:()=>f,autoQuality:()=>p,setQuality(O){!el[O]||O===f||(f=O,Be=null,X(),oe())},getFrameCap:()=>x,setFrameCap(O){Uo.includes(O)&&(x=O)},getLook:()=>Pe,setLook(O){!Pr.includes(O)||O===Pe||(Pe=O,M&&M.setLook(O)&&($(),he()),E())},getBrightness:()=>$e,setBrightness(O){$e=ht(Number(O)||Kt.initial,Kt.min,Kt.max),M&&(M.setBrightness($e),$()),E()},setPerfDetail(O){g=!!O&&m.supported},setCameraPreset(O){Y=!1,R(O),E()},getMode:()=>q,setMode(O){!uf.includes(O)||O===q||(V=null,O==="look"?xe("look"):be(),E())},setFollow(O){O&&q!=="orbit"&&(Ao(_.position)==="hall"?be():Ge("overview")),Y=!!O,Z=void 0,ne=0,Y&&(V=null)},setLabels(O){ie=Array.isArray(O)?O:[],ye()},setLabelsVisible(O){Te=!!O,b.style.display=Te?"":"none"},stats:()=>M?M.stats():null,dispose:j}}var Is=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),_w=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:Is(3,"a"),new_string:Is(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:Is(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:Is(6,"c"),new_string:Is(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:Is(4,"v"),new_string:Is(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:Is(2,"b"),new_string:Is(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],tl={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*yw(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:tl.provider,model:tl.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...tl}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),p=Math.max(3,Math.round(h/.12));for(let f=0;f<p;f++){let x=d*(.82+.36*Math.abs(Math.sin(f*1.7+s)));e.streamed+=u/p,yield{live:{phase:c,tps:x}},yield{wait:h/p}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,p,f,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:p,secs:f,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,p)=>h.secs-p.secs),d=.08*c.length;for(let h of u){let p=Math.max(0,h.secs-d);p>0&&(yield{wait:p}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*vw(n){for(;;)for(let e of _w)yield*yw(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function og({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=as(tl.provider,tl.model),r=vw(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Nu(u.usage);return h&&(i.balance=Math.max(0,i.balance-Uu(h,s,Cs(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,p=0;for(;p<u;){let{value:f}=r.next();f.wait?h+=f.wait*1e3*3:f.event&&(d.push(l(f,h)),f.event==="turn/end"&&p++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:p}=r.next();if(p.wait){d.length&&n?.(d),o=setTimeout(u,p.wait*1e3/t);return}p.event?d.push(l(p,Date.now())):p.live&&e?.(c(p.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var ag=`
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
`;var{useEffect:Fo,useRef:Sn,useState:mn,useReducer:gg,useCallback:$u}=we,nl=!0,df="dwp3d.quality",lg="dwp3d.hint",cg="dwp3d.hint.look",bw=["overview","fuel","engine","stations","products","balcony"],Mw=["raw","normal","gold","bad"],ug={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},hg={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},Sw=200,ww=4,Yu=3,xg="dwp3d.fps",dg="dwp3d.perf",_g="dwp3d.look",yg="dwp3d.brightness";function Fr(n){try{return window.localStorage.getItem(n)}catch{return null}}function nr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function fg(){let n=Fr(df);return Ur.includes(n)?n:null}function Ew(){let n=Fr(xg),e=n==null?"auto":Number(n);return Uo.includes(e)?e:"auto"}function Tw(){return typeof we.useId=="function"?we.useId():"dwp3d"}function Aw(){let n=Fr(_g);return Pr.includes(n)?n:js}function Rw(){let n=Number(Fr(yg));return Number.isFinite(n)&&n>=Kt.min&&n<=Kt.max?n:Kt.initial}function Cw(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function Pw({t:n,perf:e}){if(!e)return we.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},we.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),zt(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return we.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>we.createElement("div",{key:s,className:"dwp3d-perf-row"},we.createElement("span",null,s),we.createElement("b",null,r))))}function Iw(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":"products":null}function Lw(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function Dw(n){let[e,t]=gg(i=>i+1,0);return Fo(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var ff=(n,e)=>n&&(n[e]||n.en)||"",hf=(n,e)=>`${ff(n,e)} · ${n.code}`;function pg(n){let e=t=>({id:t,text:ff(nn[t],n),sub:nn[t].code});return[e("tank"),e("engine"),e("robot"),...Ru.map(t=>({id:`station:${t}`,text:ff(fi[t],n),sub:fi[t].code})),e("loadport"),e("stocker")]}var Nw=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework";function mg(n,e){let t=[[n("status."+Nw(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:e.files.length})]];for(let s of e.files.slice(0,6))t.push([kd(s.path),`+${s.added} −${s.removed}`]);e.files.length>6&&t.push(["…",`+${e.files.length-6}`]);let i=(e.endedAt||Date.now())-e.startedAt;return t.push(["",n("hover.batchCost",{cost:gn(e.cost),time:km(i)})]),t}function Uw(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:hf(nn[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:gn(d)});switch(n){case"tank":{let d=[[t(nl?"m.balanceDemo":"m.balance"),e.balance==null?t("m.balanceNone"):gn(e.balance,e.currency)]];return o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${Ci(l.contextRatio)} · ${zt(i.contextTokens)} / ${zt(i.contextWindow)}`],[t("row.miss"),zt(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),zt(i.totals.write)]),d.push([t("row.hit"),zt(i.totals.hit)],[t("row.output"),zt(i.totals.output)],[t("row.reasoning"),zt(i.totals.reasoning)],[t("row.cost"),gn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":return c(n);case"stocker":{let d=i.turns.filter(p=>p.status!=="running"),h=d.filter(p=>p.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${hf(nn.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:mg(t,d)}}default:break}if(n.startsWith("station:")){let d=n.slice(8),h=fi[d];if(!h)return null;let p=i.calls.filter(y=>y.kind===d),f=p.filter(y=>y.status==="running").pop(),x=p[p.length-1],m=[];f?m.push([t("hover.working"),f.label||f.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=p.filter(y=>y.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:hf(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(p=>p.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?mg(t,h):[]}}return null}function Fw({hover:n,data:e,rootRef:t}){let i=Uw(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return we.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},we.createElement("h4",null,i.title),i.body?we.createElement("p",null,i.body):null,i.rows.length?we.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>we.createElement("div",{className:"row",key:h},we.createElement("span",null,u),we.createElement("span",null,d)))):null)}function Ow({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return we.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},we.createElement("div",{className:"k"},n.k),we.createElement("div",{className:"v"},n.v),n.s?we.createElement("div",{className:"s"},n.s):null,n.bar!=null?we.createElement("div",{className:"dwp3d-bar"},we.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function Bw({t:n,calls:e}){return we.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},we.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=hg[t.status]?t.status:"running",s=hg[i],r=fi[t.kind]||fi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return we.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},we.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),we.createElement("span",{className:"dwp3d-sr"},n("call."+i)),we.createElement("code",null,r.code),we.createElement("span",{className:"l"},o))}):we.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function kw({t:n,hintOn:e,hintKey:t,onDismiss:i}){return we.createElement("div",{className:"dwp3d-panel dwp3d-legend"},we.createElement("div",{className:"dwp3d-legend-row"},we.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),Mw.map(s=>we.createElement("span",{className:"dwp3d-legend-item",key:s},we.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?we.createElement("div",{className:"dwp3d-hint"},we.createElement("span",null,n(t)),we.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}var zw=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function vg(n){let{ctx:e}=n,t=Dw(e),i=Lw(e),s=n.tBound||n.t,r=$u((Re,_t)=>{let xn=typeof s=="function"?s(Re):Re,cs=typeof xn=="string"&&xn?xn:Re;return _t?zm(cs,_t):cs},[s]),o=Sn(r);o.current=r;let a=Sn(i);a.current=i;let l=Sn(null),c=Sn(null),u=Sn(null),d=Sn(rf()),h=Sn({phase:"idle",tps:0,balance:null,currency:"CNY"}),p=Sn(0),f=Sn(!1),x=Sn(!0),m=Sn(0),g=Sn({settle:Yu,low:0}),[,y]=gg(Re=>Re+1,0),[b,_]=mn(0),[w,M]=mn(()=>fg()!=null),v=Sn(w),[S,U]=mn(()=>fg()||"medium"),I=Sn(S),[N,F]=mn(Ew),H=Sn(N),[L,W]=mn(()=>Fr(dg)==="on"),V=Sn(L);V.current=L;let[q,Y]=mn(null),[Z,ne]=mn(Aw),re=Sn(Z),[Ee,ke]=mn(Rw),ie=Sn(Ee),[Te,De]=mn(!1),se=Tw(),[K,Me]=mn("overview"),[Ke,Pe]=mn(!1),[$e,Ie]=mn(!0),he=Sn($e);he.current=$e;let[k,X]=mn(!0),[oe,$]=mn(()=>Fr(lg)!=="off"),[te,Se]=mn(()=>Fr(cg)!=="off"),[D,Q]=mn("orbit"),[ae,P]=mn(!1),[Qe,nt]=mn(null),[ft,Ae]=mn(!0),[xe,be]=mn(null),[Ge,R]=mn(null),[E,G]=mn(null),ye=$u(()=>{p.current||(p.current=setTimeout(()=>{p.current=0,x.current?y():f.current=!0},Sw))},[]),ue=$u(Re=>{G(Re),clearTimeout(m.current),m.current=setTimeout(()=>G(null),3500)},[]),Ne=$u(Re=>{Ur.includes(Re)&&(I.current=Re,U(Re),g.current={settle:Yu,low:0},u.current&&u.current.setQuality(Re))},[]);Fo(()=>{let Re=c.current;if(!Re)return;let _t=null,xn=null,cs=!1,rr=0;Ae(!0),be(null),R(null),nt(null),Q("orbit");let Yi=B=>{be(de=>de&&de.kind==="lost"?null:de),V.current&&Y(B);let ee=g.current;if(ee.settle>0){ee.settle-=1;return}if(v.current)return;let J=B&&B.scale<=B.minScale+.001;if(ee.low=B&&B.slow&&J?ee.low+1:0,ee.low<ww)return;ee.low=0;let j=Ur.indexOf(I.current);if(j<=0)return;let O=Ur[j-1];Ne(O),ue(o.current("quality.downgraded",{q:o.current(`quality.${O}`)}))},or=()=>{try{_t=rg(Re,{quality:v.current?I.current:"auto",fps:H.current,look:re.current,brightness:ie.current,demo:nl,onHover:nt,onSelect:B=>{let ee=Iw(B);!ee||!_t||(_t.setCameraPreset(ee),Me(ee),Pe(!1))},onPerf:Yi,onError:(B,ee)=>{if(B==="shader"){R(J=>J||String(ee||""));return}B==="context-lost"&&(nt(null),be({kind:"lost"}))},onActive:B=>{x.current=B,B&&f.current&&(f.current=!1,y())},onReady:()=>Ae(!1),onMode:B=>{Q(B),B==="look"&&Pe(!1)}})}catch(B){for(;Re.firstChild;)Re.removeChild(Re.firstChild);Ae(!1),be({kind:"webgl",msg:String(B&&B.message||B)});return}u.current=_t,I.current=_t.getQuality(),U(I.current),g.current={settle:Yu,low:0},_t.setLabels(pg(a.current)),_t.setLabelsVisible(he.current),_t.setPerfDetail(V.current),xn=og({onEvents:B=>{d.current=of(d.current,B),_t.setState(d.current),ye()},onLive:B=>{h.current={...h.current,...B},_t.setLive(B),ye()}}),d.current=of(rf(),xn.prefill(2)),h.current={phase:"idle",tps:0,balance:xn.balance,currency:"CNY"},_t.setState(d.current),_t.setLive(h.current),xn.start(),y()},T=requestAnimationFrame(()=>{rr=requestAnimationFrame(()=>{cs||or()})});return()=>{cs=!0,cancelAnimationFrame(T),cancelAnimationFrame(rr),xn&&xn.stop(),_t&&_t.dispose(),u.current=null,clearTimeout(p.current),p.current=0}},[b,Ne,ye,ue]),Fo(()=>()=>clearTimeout(m.current),[]),Fo(()=>{u.current&&u.current.setLabels(pg(i))},[i,t]),Fo(()=>{u.current&&u.current.setLabelsVisible($e)},[$e]),Fo(()=>{let Re=()=>P(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",Re),()=>document.removeEventListener("fullscreenchange",Re)},[]);let He=Re=>{u.current&&(u.current.setCameraPreset(Re),Me(Re),Pe(!1))},pe=()=>{let Re=!Ke;Pe(Re),u.current&&u.current.setFollow(Re)},me=()=>{let Re=l.current;if(!Re)return;let _t=()=>ue(o.current("error.fullscreen"));try{let xn=document.fullscreenElement?document.exitFullscreen():Re.requestFullscreen();xn&&typeof xn.catch=="function"&&xn.catch(_t)}catch{_t()}},ze=Re=>{if(Re==="auto"){nr(df,null),v.current=!1,M(!1),u.current&&Ne(u.current.autoQuality());return}Ur.includes(Re)&&(nr(df,Re),v.current=!0,M(!0),Ne(Re))},z=Re=>{let _t=Re==="auto"?"auto":Number(Re);Uo.includes(_t)&&(H.current=_t,F(_t),nr(xg,_t==="auto"?null:String(_t)),g.current={settle:Yu,low:0},u.current&&u.current.setFrameCap(_t))},fe=()=>{let Re=!L;W(Re),nr(dg,Re?"on":null),Re||Y(null),u.current&&u.current.setPerfDetail(Re)},le=Re=>{Pr.includes(Re)&&(re.current=Re,ne(Re),nr(_g,Re===js?null:Re),u.current&&u.current.setLook(Re))},Oe=Re=>{let _t=Math.min(Kt.max,Math.max(Kt.min,Number(Re)||Kt.initial));ie.current=_t,ke(_t),nr(yg,Math.abs(_t-Kt.initial)<.001?null:String(_t)),u.current&&u.current.setBrightness(_t)},Ue=()=>{D==="look"?(nr(cg,"off"),Se(!1)):(nr(lg,"off"),$(!1))},Be=Re=>{let _t=u.current;if(_t&&(_t.setMode(Re),Q(_t.getMode()),Re==="look")){Pe(!1);try{c.current&&c.current.focus({preventScroll:!0})}catch{}}},et=()=>_(Re=>Re+1),Ve=d.current,Ce=h.current,je=ku(Ve),xt=as(Ve.provider,Ve.model),We=Cs(Date.now()),Tt=Ce.phase&&Ce.phase!=="idle"?Ce.phase:Ve.phase,Xt=typeof Ce.balance=="number"?Ce.balance:null,Gn=Ce.currency||"CNY",Pi=Xt!=null&&xt&&Gn!=="USD"?Fu(Xt,xt,We):0,mi=Ve.turns.filter(Re=>Re.status!=="running"),ir=mi.filter(Re=>Re.status==="ok").length,sr=je.contextRatio>=.8?"#ff5d5d":je.contextRatio>=.6?"#ffb347":"#4d6bfe",Ls=Ce.tps>.5&&(Tt==="generating"||Tt==="reasoning")?` · ${r("unit.tps",{n:Math.round(Ce.tps)})}`:"",gi=Ve.totals.miss+Ve.totals.write,xi=Ve.files,ls=[{id:"balance",k:r(nl?"m.balanceDemo":"m.balance"),v:Xt==null?r("m.balanceNone"):gn(Xt,Gn),s:Pi?r("m.balanceSub",{tokens:zt(Pi)}):""},{id:"context",k:r("m.context"),v:Ci(je.contextRatio),s:`${zt(Ve.contextTokens)} / ${zt(Ve.contextWindow)}`,bar:je.contextRatio,barColor:sr,title:r("m.contextTitle",{pct:Ci(je.contextRatio),used:zt(Ve.contextTokens),window:zt(Ve.contextWindow)})},{id:"input",k:r("m.input"),v:zt(je.prompt),s:r("m.inputSub",{rate:Ci(je.hitRate),miss:zt(gi)}),title:r("m.inputTitle",{total:zt(je.prompt),hit:zt(Ve.totals.hit),rate:Ci(je.hitRate),miss:zt(gi),write:Ve.totals.write>0?r("m.writeNote",{n:zt(Ve.totals.write)}):"",saved:gn(Ve.totals.savings)})},{id:"output",k:r("m.output"),v:zt(Ve.totals.output),s:r("m.outputSub",{n:zt(Ve.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:gn(Ve.totals.cost),s:r("m.costSub",{peak:gn(Ve.totals.costPeak),off:gn(Ve.totals.costOffPeak)}),title:r("m.costTitle",{cost:gn(Ve.totals.cost),requests:Ve.totals.requests,peak:gn(Ve.totals.costPeak),off:gn(Ve.totals.costOffPeak),saved:gn(Ve.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(Ve.tools.calls),s:r("m.toolsSub",{n:Ve.tools.errors,rate:Ci(je.toolSuccess)}),title:r("m.toolsTitle",{calls:Ve.tools.calls,running:Ve.tools.running,n:Ve.tools.errors})},{id:"products",k:r("m.products"),v:`${xi.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:xi.added,r:xi.removed,ok:ir,done:mi.length}),title:r("m.productsTitle",{n:xi.count,a:xi.added,r:xi.removed,ok:ir,done:mi.length})},{id:"efficiency",k:r("m.efficiency"),v:`${je.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:gn(je.costPerFile)}),title:r("m.efficiencyHint")}],Ii=Ve.calls.slice(-5).reverse(),qi={t:r,s:Ve,live:Ce,lang:i,price:xt,peak:We,m:je,phase:Tt,balance:Xt,currency:Gn},_i=!!xe&&xe.kind==="webgl",$i=!ft&&!_i,St=w?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return we.createElement("div",{ref:l,className:`dwp3d-root${_i?" fail":""}`},we.createElement("style",null,ag),we.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),Te?we.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>De(!1)}):null,$i?we.createElement("div",{className:"dwp3d-top"},we.createElement("div",{className:"dwp3d-panel dwp3d-title"},we.createElement("div",{className:"dwp3d-title-row"},we.createElement("h2",null,r("title")),nl?we.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):null,Ve.model?we.createElement("span",{className:"dwp3d-chip"},`${Ve.model}${Ve.effort?` · ${Ve.effort}`:""}`):null,we.createElement("span",{className:"dwp3d-chip"},we.createElement("i",{className:"dwp3d-dot",style:{color:ug[Tt]||ug.idle},"aria-hidden":"true"}),`${r("phase."+Tt)}${Ls}`)),nl?we.createElement("p",{className:"dwp3d-note"},r("badge.demoHint")):null,Ge?we.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:Ge})):null),we.createElement("div",{className:"dwp3d-right"},we.createElement("div",{className:"dwp3d-panel dwp3d-tools"},we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},bw.map(Re=>{let _t=!Ke&&K===Re;return we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${_t?" on":""}`,"aria-pressed":_t,onClick:()=>He(Re)},r("view."+Re))})),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},uf.map(Re=>we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${D===Re?" on":""}`,title:r(`mode.${Re}Hint`),"aria-pressed":D===Re,onClick:()=>Be(Re)},r("mode."+Re)))),we.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},we.createElement("button",{type:"button",className:`dwp3d-btn${Ke?" on":""}`,title:r("ctl.followHint"),"aria-pressed":Ke,onClick:pe},r("ctl.follow")),we.createElement("button",{type:"button",className:`dwp3d-btn${$e?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":$e,onClick:()=>Ie(Re=>!Re)},r("ctl.labels")),we.createElement("button",{type:"button",className:`dwp3d-btn${k?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":k,onClick:()=>X(Re=>!Re)},r("ctl.panels")),we.createElement("button",{type:"button",className:`dwp3d-btn${Te?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":Te,"aria-haspopup":"dialog",onClick:()=>De(Re=>!Re)},r("ctl.display")),zw()?we.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":ae,onClick:me},r(ae?"ctl.exitFullscreen":"ctl.fullscreen")):null)),Te?we.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},Pr.map(Re=>we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${Z===Re?" on":""}`,"aria-pressed":Z===Re,onClick:()=>le(Re)},r("look."+Re))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-brightness`},r("ctl.brightness")),we.createElement("input",{id:`${se}-brightness`,className:"dwp3d-range",type:"range",min:Kt.min,max:Kt.max,step:Kt.step,value:Ee,onChange:Re=>Oe(Re.target.value)}),we.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(Ee*100)}%`),we.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(Ee-Kt.initial)<.001,onClick:()=>Oe(Kt.initial)},"↺")),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-quality`},r("ctl.quality")),we.createElement("select",{id:`${se}-quality`,className:"dwp3d-select",value:w?S:"auto",onChange:Re=>ze(Re.target.value)},we.createElement("option",{value:"auto"},St),Ur.map(Re=>we.createElement("option",{key:Re,value:Re},r("quality."+Re))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),we.createElement("select",{id:`${se}-fps`,className:"dwp3d-select",value:String(N),title:r("ctl.fpsHint"),onChange:Re=>z(Re.target.value)},Uo.map(Re=>we.createElement("option",{key:String(Re),value:String(Re)},Cw(r,Re))))),we.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},we.createElement("input",{type:"checkbox",checked:L,onChange:fe}),we.createElement("span",null,r("ctl.perfShow")))):null,L?we.createElement(Pw,{t:r,perf:q}):null)):null,we.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},E?we.createElement("div",{className:"dwp3d-panel dwp3d-toast"},E):null),$i&&k?we.createElement("div",{className:"dwp3d-bottom"},we.createElement("div",{className:"dwp3d-mid"},we.createElement(Bw,{t:r,calls:Ii}),we.createElement(kw,{t:r,hintOn:D==="look"?te:oe,hintKey:D==="look"?"hint.look":"hint.controls",onDismiss:Ue})),we.createElement("div",{className:"dwp3d-cards"},ls.map(Re=>we.createElement(Ow,{key:Re.id,card:Re})))):null,$i&&Qe?we.createElement(Fw,{hover:Qe,data:qi,rootRef:l}):null,ft&&!xe?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},we.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,_i?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-fail",role:"alert"},we.createElement("h3",null,r("error.webglTitle")),we.createElement("p",null,r("error.webgl",{msg:xe.msg})),we.createElement("button",{type:"button",onClick:et},r("error.retry")))):null,xe&&xe.kind==="lost"?we.createElement("div",{className:"dwp3d-center dim",role:"alert"},we.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var Hw="work-process-3d",Gw={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(rl,xf),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(rl);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:Hw,order:15,locale:rl,label:()=>e("tab.label")},t=>bg.createElement(vg,{...t,ctx:n,tBound:e})))}};
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
