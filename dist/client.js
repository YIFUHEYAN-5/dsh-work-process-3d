/*! dsh-work-process-3d 0.1.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var zg=Object.create;var hl=Object.defineProperty;var Hg=Object.getOwnPropertyDescriptor;var Gg=Object.getOwnPropertyNames;var Vg=Object.getPrototypeOf,Wg=Object.prototype.hasOwnProperty;var Xg=(n,e)=>{for(var t in e)hl(n,t,{get:e[t],enumerable:!0})},wf=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Gg(e))!Wg.call(n,s)&&s!==t&&hl(n,s,{get:()=>e[s],enumerable:!(i=Hg(e,s))||i.enumerable});return n};var Ef=(n,e,t)=>(t=n!=null?zg(Vg(n)):{},wf(e||!n||!n.__esModule?hl(t,"default",{value:n,enumerable:!0}):t,n)),qg=n=>wf(hl({},"__esModule",{value:!0}),n);var bE={};Xg(bE,{default:()=>yE});module.exports=qg(bE);var Bg=Ef(require("react"),1);var fl="dsh-work-process-3d",$g={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"原型阶段：画面由内置示例会话驱动，数字、文件和命令都是示例，还没有接入本会话。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","stage.label":"3D 场景。漫游模式下用 WASD 或方向键移动，Q/E 升降","ctl.views":"视角","ctl.display":"显示","ctl.displayHint":"场景、亮度、画质、帧率与性能统计","ctl.layers":"画面元素","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} tokens","m.balanceNone":"不可用","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动，Q/E 升降，Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"压力表 = 上下文占用，转速表 = 生成速率；计数轮依次是未命中输入、缓存命中、输出、推理和花费。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"GPU 上下文丢失，正在等待恢复…","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Yg={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Prototype: a built-in sample session drives the scene. The numbers, files and commands are examples, not this session.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","stage.label":"3D scene. In Roam mode, move with WASD or the arrow keys, Q/E for down/up","ctl.views":"Views","ctl.display":"Display","ctl.displayHint":"Scene, brightness, quality, frame rate and statistics","ctl.layers":"Overlays","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move, Q/E down/up, Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"The pressure gauge shows context usage and the tachometer the generation rate. The counters are uncached input, cache hits, output, reasoning and cost.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"GPU context lost, waiting for it to come back…","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},Tf={zh:$g,en:Yg};var we=Ef(require("react"),1);var js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gp=0,zd=1,xp=2;var Rr=1,_p=2,To=3,ss=0,kn=1,Jt=2,Cr=0,rs=1,Pn=2,Hd=3,Gd=4,Ao=5;var Pr=100,vp=101,yp=102,bp=103,Mp=104,Ac=200,er=201,Sp=202,wp=203,Vd=204,tr=205,Ep=206,Tp=207,Ap=208,Rp=209,Cp=210,Pp=211,Ip=212,Lp=213,Dp=214,ql=0,$l=1,Yl=2,co=3,Kl=4,Zl=5,Jl=6,jl=7,Wd=0,Np=1,Up=2,os=0,Xd=1,qd=2,$d=3,Yd=4,Kd=5,Zd=6,Fa=7;var Jd=300,Ir=301,Ro=302,Rc=303,Cc=304,Ss=1e3,ts=1001,Ql=1002,Rn=1003,Fp=1004;var Oa=1005;var un=1006,Pc=1007;var zi=1008;var ti=1009,jd=1010,Qd=1011,Co=1012,Ic=1013,Hi=1014,Si=1015,Qn=1016,Lc=1017,Dc=1018,Lr=1020,eh=35902,th=35899,nh=1021,ih=1022,Gi=1023,ws=1026,Is=1027,Nc=1028,Uc=1029,nr=1030,Fc=1031;var Oc=1033,ka=33776,Ba=33777,za=33778,Ha=33779,kc=35840,Bc=35841,zc=35842,Hc=35843,Gc=36196,Vc=37492,Wc=37496,Xc=37488,qc=37489,Ga=37490,$c=37491,Yc=37808,Kc=37809,Zc=37810,Jc=37811,jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,lu=36492,cu=36494,uu=36495,du=36283,hu=36284,Va=36285,fu=36286;var ra=2300,ec=2301,Wl=2302,Rd=2303,Cd=2400,Pd=2401,Id=2402;var Op=3200;var pu=0,kp=1,Ls="",Dn="srgb",oa="srgb-linear",aa="linear",Ht="srgb";var Xl=7680;var Bp=519,zp=512,Hp=513,Gp=514,sh=515,Vp=516,Wp=517,rh=518,oh=519,ah=35044;var lh="300 es",yi=2e3,uo=2001;function Kg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xp(){let n=la("canvas");return n.style.display="block",n}var Af={},ho=null;function ca(...n){let e="THREE."+n.shift();ho?ho("log",e,...n):console.log(e,...n)}function qp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ht(...n){n=qp(n);let e="THREE."+n.shift();if(ho)ho("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function mt(...n){n=qp(n);let e="THREE."+n.shift();if(ho)ho("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function br(...n){let e=n.join(" ");e in Af||(Af[e]=!0,ht(...n))}function $p(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Yp={[ql]:ql,[Yl]:Jl,[Kl]:Kl,[co]:Zl,[$l]:$l,[Jl]:Yl,[jl]:jl,[Zl]:co},ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rf=1234567,ta=Math.PI/180,fo=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function ch(n,e){return(n%e+e)%e}function Jg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jg(n,e,t){return n!==e?(t-n)/(e-n):0}function na(n,e,t){return(1-t)*n+t*e}function Qg(n,e,t,i){return na(n,e,1-Math.exp(-t*i))}function ex(n,e=1){return e-Math.abs(ch(n,e*2)-e)}function tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ix(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sx(n,e){return n+Math.random()*(e-n)}function rx(n){return n*(.5-Math.random())}function ox(n){n!==void 0&&(Rf=n);let e=Rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ax(n){return n*ta}function lx(n){return n*fo}function cx(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ux(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dx(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),f=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*f,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*f,a*c);break;case"ZYZ":n.set(l*f,l*p,a*u,a*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mu(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dh(n,e){if(e.constructor===Float32Array)return n;let t=mu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function hh(n,e){if(e.constructor===Float32Array)return n;let t=mu(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var gu={DEG2RAD:ta,RAD2DEG:fo,generateUUID:Ds,clamp:Mt,euclideanModulo:ch,mapLinear:Jg,inverseLerp:jg,lerp:na,damp:Qg,pingpong:ex,smoothstep:tx,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ox,degToRad:ax,radToDeg:lx,isPowerOfTwo:cx,ceilPowerOfTwo:ux,floorPowerOfTwo:uh,setQuaternionFromProperEuler:dx,normalize:hh,denormalize:dh},_e=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],p=r[o+1],f=r[o+2],x=r[o+3];if(d!==x||l!==h||c!==p||u!==f){let m=l*h+c*p+u*f+d*x;m<0&&(h=-h,p=-p,f=-f,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);g=Math.sin(g*_)/b,a=Math.sin(a*_)/b,l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+f*a,d=d*g+x*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],f=r[o+3];return e[t]=a*f+u*d+l*p-c*h,e[t+1]=l*f+u*h+c*d-a*p,e[t+2]=c*f+u*p+a*h-l*d,e[t+3]=u*f-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"YXZ":this._x=h*u*d+c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"ZXY":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d-h*p*f;break;case"ZYX":this._x=h*u*d-c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d+h*p*f;break;case"YZX":this._x=h*u*d+c*p*f,this._y=c*p*d+h*u*f,this._z=c*u*f-h*p*d,this._w=c*u*d-h*p*f;break;case"XZY":this._x=h*u*d-c*p*f,this._y=c*p*d-h*u*f,this._z=c*u*f+h*p*d,this._w=c*u*d+h*p*f;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new A,Cf=new dn,vt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],f=i[8],x=s[0],m=s[3],g=s[6],_=s[1],b=s[4],v=s[7],w=s[2],M=s[5],y=s[8];return r[0]=o*x+a*_+l*w,r[3]=o*m+a*b+l*M,r[6]=o*g+a*v+l*y,r[1]=c*x+u*_+d*w,r[4]=c*m+u*b+d*M,r[7]=c*g+u*v+d*y,r[2]=h*x+p*_+f*w,r[5]=h*m+p*b+f*M,r[8]=h*g+p*v+f*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,f=t*d+i*h+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sd.makeScale(e,t)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sd=new vt,Pf=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),If=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){let n={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ht&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ht&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ls?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[oa]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:Pf,fromXYZ:If,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:Pf,fromXYZ:If,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),n}var Rt=hx();function Ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wr,tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=la("canvas")),Wr.width=e.width,Wr.height=e.height;let s=Wr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=la("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ms(t[i]/255)*255):t[i]=Ms(t[i]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rd(s[o].image)):r.push(rd(s[o]))}else r=rd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var px=0,od=new A,Jn=class n extends ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ts,s=ts,r=un,o=zi,a=Gi,l=ti,c=n.DEFAULT_ANISOTROPY,u=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Ds(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Jd;Jn.DEFAULT_ANISOTROPY=1;var Zt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(p+1)/2,w=(g+1)/2,M=(u+h)/4,y=(d+x)/4,S=(f+m)/4;return b>v&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=M/i,r=y/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=M/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=y/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Jn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new po(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends nc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ua=class extends Jn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends Jn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Xr.setFromMatrixColumn(e,0).length(),r=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=f+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h+x*a,t[4]=f*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-f,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,f=c*u,x=c*d;t[0]=h-x*a,t[4]=-o*d,t[8]=f+p*a,t[1]=p+f*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,f=a*u,x=a*d;t[0]=l*u,t[4]=f*c-p,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=p*c-f,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=x-h*d,t[8]=f*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+f,t[10]=h-x*d}else if(e.order==="XZY"){let h=o*l,p=o*c,f=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=o*u,t[9]=p*d-f,t[2]=f*d-p,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,i){let s=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Hs.crossVectors(i,oi),Hs.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Hs.crossVectors(i,oi)),Hs.normalize(),pl.crossVectors(oi,Hs),s[0]=Hs.x,s[4]=pl.x,s[8]=oi.x,s[1]=Hs.y,s[5]=pl.y,s[9]=oi.y,s[2]=Hs.z,s[6]=pl.z,s[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],f=i[2],x=i[6],m=i[10],g=i[14],_=i[3],b=i[7],v=i[11],w=i[15],M=s[0],y=s[4],S=s[8],N=s[12],R=s[1],D=s[5],F=s[9],B=s[13],L=s[2],W=s[6],V=s[10],q=s[14],Y=s[3],Z=s[7],ne=s[11],re=s[15];return r[0]=o*M+a*R+l*L+c*Y,r[4]=o*y+a*D+l*W+c*Z,r[8]=o*S+a*F+l*V+c*ne,r[12]=o*N+a*B+l*q+c*re,r[1]=u*M+d*R+h*L+p*Y,r[5]=u*y+d*D+h*W+p*Z,r[9]=u*S+d*F+h*V+p*ne,r[13]=u*N+d*B+h*q+p*re,r[2]=f*M+x*R+m*L+g*Y,r[6]=f*y+x*D+m*W+g*Z,r[10]=f*S+x*F+m*V+g*ne,r[14]=f*N+x*B+m*q+g*re,r[3]=_*M+b*R+v*L+w*Y,r[7]=_*y+b*D+v*W+w*Z,r[11]=_*S+b*F+v*V+w*ne,r[15]=_*N+b*B+v*q+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],f=e[3],x=e[7],m=e[11],g=e[15],_=l*p-c*h,b=a*p-c*d,v=a*h-l*d,w=o*p-c*u,M=o*h-l*u,y=o*d-a*u;return t*(x*_-m*b+g*v)-i*(f*_-m*w+g*M)+s*(f*b-x*w+g*y)-r*(f*v-x*M+m*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],_=t*a-i*o,b=t*l-s*o,v=t*c-r*o,w=i*l-s*a,M=i*c-r*a,y=s*c-r*l,S=u*x-d*f,N=u*m-h*f,R=u*g-p*f,D=d*m-h*x,F=d*g-p*x,B=h*g-p*m,L=_*B-b*F+v*D+w*R-M*N+y*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*B-l*F+c*D)*W,e[1]=(s*F-i*B-r*D)*W,e[2]=(x*y-m*M+g*w)*W,e[3]=(h*M-d*y-p*w)*W,e[4]=(l*R-o*B-c*N)*W,e[5]=(t*B-s*R+r*N)*W,e[6]=(m*v-f*y-g*b)*W,e[7]=(u*y-h*v+p*b)*W,e[8]=(o*F-a*R+c*S)*W,e[9]=(i*R-t*F-r*S)*W,e[10]=(f*M-x*v+g*_)*W,e[11]=(d*v-u*M-p*_)*W,e[12]=(a*N-o*D-l*S)*W,e[13]=(t*D-i*N+s*S)*W,e[14]=(x*b-f*w-m*_)*W,e[15]=(u*w-d*b+h*_)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,f=r*d,x=o*u,m=o*d,g=a*d,_=l*c,b=l*u,v=l*d,w=i.x,M=i.y,y=i.z;return s[0]=(1-(x+g))*w,s[1]=(p+v)*w,s[2]=(f-b)*w,s[3]=0,s[4]=(p-v)*M,s[5]=(1-(h+g))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(f+b)*y,s[9]=(m-_)*y,s[10]=(1-(h+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xr.set(s[0],s[1],s[2]).length(),a=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ui.copy(this);let c=1/o,u=1/a,d=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=d,Ui.elements[9]*=d,Ui.elements[10]*=d,t.setFromRotationMatrix(Ui),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=yi,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),f,x;if(l)f=r/(o-r),x=o*r/(o-r);else if(a===yi)f=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===uo)f=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=yi,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),f,x;if(l)f=1/(o-r),x=o/(o-r);else if(a===yi)f=-2/(o-r),x=-(o+r)/(o-r);else if(a===uo)f=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Xr=new A,Ui=new bt,mx=new A(0,0,0),gx=new A(1,1,1),Hs=new A,pl=new A,oi=new A,Lf=new bt,Df=new dn,jn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xx=0,Nf=new A,qr=new dn,gs=new bt,ml=new A,Wo=new A,_x=new A,vx=new dn,Uf=new A(1,0,0),Ff=new A(0,1,0),Of=new A(0,0,1),kf={type:"added"},yx={type:"removed"},$r={type:"childadded",child:null},ad={type:"childremoved",child:null},en=class n extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new jn,i=new dn,s=new A(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new vt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Nf.copy(e).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ml.copy(e):ml.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(Wo,ml,this.up):gs.lookAt(ml,Wo,this.up),this.quaternion.setFromRotationMatrix(gs),s&&(gs.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(gs),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),$r.child=e,this.dispatchEvent($r),$r.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),f=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new A(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},bx={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&h>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gs={h:0,s:0,l:0},gl={h:0,s:0,l:0};function ld(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=ch(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ld(o,r,e+1/3),this.g=ld(o,r,e),this.b=ld(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){let i=Kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Rt.workingToColorSpace(Vn.copy(this),e),Math.round(Mt(Vn.r*255,0,255))*65536+Math.round(Mt(Vn.g*255,0,255))*256+Math.round(Mt(Vn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Vn.copy(this),t);let i=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Dn){Rt.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,i=Vn.g,s=Vn.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gs),this.setHSL(Gs.h+e,Gs.s+t,Gs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gs),e.getHSL(gl);let i=na(Gs.h,gl.h,t),s=na(Gs.s,gl.s,t),r=na(Gs.l,gl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Oe;Oe.NAMES=Kp;var Mr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new A,xs=new A,cd=new A,_s=new A,Yr=new A,Kr=new A,Bf=new A,ud=new A,dd=new A,hd=new A,fd=new Zt,pd=new Zt,md=new Zt,bs=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fi.subVectors(s,t),xs.subVectors(i,t),cd.subVectors(e,t);let o=Fi.dot(Fi),a=Fi.dot(xs),l=Fi.dot(cd),c=xs.dot(xs),u=xs.dot(cd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,f=(o*u-a*l)*h;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(o,_s.y),l.addScaledVector(a,_s.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return fd.setScalar(0),pd.setScalar(0),md.setScalar(0),fd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,i),md.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(fd,r.x),o.addScaledVector(pd,r.y),o.addScaledVector(md,r.z),o}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),xs.subVectors(e,t),Fi.cross(xs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Fi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yr.subVectors(s,i),Kr.subVectors(r,i),ud.subVectors(e,i);let l=Yr.dot(ud),c=Kr.dot(ud);if(l<=0&&c<=0)return t.copy(i);dd.subVectors(e,s);let u=Yr.dot(dd),d=Kr.dot(dd);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(Yr,o);hd.subVectors(e,r);let p=Yr.dot(hd),f=Kr.dot(hd);if(f>=0&&p<=f)return t.copy(r);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Kr,a);let m=u*f-p*d;if(m<=0&&d-u>=0&&p-f>=0)return Bf.subVectors(r,s),a=(d-u)/(d-u+(p-f)),t.copy(s).addScaledVector(Bf,a);let g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(Yr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bi=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Oi):Oi.fromBufferAttribute(r,o),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),_l.subVectors(this.max,Xo),Zr.subVectors(e.a,Xo),Jr.subVectors(e.b,Xo),jr.subVectors(e.c,Xo),Vs.subVectors(Jr,Zr),Ws.subVectors(jr,Jr),gr.subVectors(Zr,jr);let t=[0,-Vs.z,Vs.y,0,-Ws.z,Ws.y,0,-gr.z,gr.y,Vs.z,0,-Vs.x,Ws.z,0,-Ws.x,gr.z,0,-gr.x,-Vs.y,Vs.x,0,-Ws.y,Ws.x,0,-gr.y,gr.x,0];return!gd(t,Zr,Jr,jr,_l)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,Zr,Jr,jr,_l))?!1:(vl.crossVectors(Vs,Ws),t=[vl.x,vl.y,vl.z],gd(t,Zr,Jr,jr,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vs=[new A,new A,new A,new A,new A,new A,new A,new A],Oi=new A,xl=new bi,Zr=new A,Jr=new A,jr=new A,Vs=new A,Ws=new A,gr=new A,Xo=new A,_l=new A,vl=new A,xr=new A;function gd(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xr.fromArray(n,r);let a=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),u=i.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var vn=new A,yl=new _e,Mx=0,Wn=class extends ki{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?mu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hh(e,this.array)}};var da=class extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ha=class extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ut=class extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sx=new bi,qo=new A,xd=new A,ns=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(xd)),this.expandByPoint(qo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wx=0,vi=new bt,_d=new en,Qr=new A,ai=new bi,$o=new bi,An=new A,Nt=class n extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?ha:da)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new vt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,i){return vi.makeTranslation(e,t,i),this.applyMatrix4(vi),this}scale(e,t,i){return vi.makeScale(e,t,i),this.applyMatrix4(vi),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ai.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(An.addVectors(ai.min,$o.min),ai.expandByPoint(An),An.addVectors(ai.max,$o.max),ai.expandByPoint(An)):(ai.expandByPoint($o.min),ai.expandByPoint($o.max))}ai.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)An.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(An));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)An.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),An.add(Qr)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Wn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)a[N]=new A,l[N]=new A;let u=new A,d=new A,h=new A,p=new _e,f=new _e,x=new _e,m=new A,g=new A;function _(N,R,D){c[N]=c[R]=c[D]=1,u.fromBufferAttribute(i,N),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,D),p.fromBufferAttribute(r,N),f.fromBufferAttribute(r,R),x.fromBufferAttribute(r,D),d.sub(u),h.sub(u),f.sub(p),x.sub(p);let F=1/(f.x*x.y-x.x*f.y);isFinite(F)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(F),a[N].add(m),a[R].add(m),a[D].add(m),l[N].add(g),l[R].add(g),l[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,R=b.length;N<R;++N){let D=b[N],F=D.start,B=D.count;for(let L=F,W=F+B;L<W;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new A,w=new A,M=new A,y=new A;function S(N){M.fromBufferAttribute(s,N),y.copy(M);let R=a[N];v.copy(R),v.sub(M.multiplyScalar(M.dot(R))).normalize(),w.crossVectors(y,R);let F=w.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,F)}for(let N=0,R=i.count;N<R;++N)c[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,d=new A;if(e)for(let h=0,p=e.count;h<p;h+=3){let f=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,f=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let g=0;g<u;g++)h[f++]=c[p++]}return new Wn(h,u,d)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Ds()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=zf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function zf(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ds()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Kn=new A,xo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?mu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):hh(e,this.data.array)}},vd=new A,Ex=new A,Tx=new vt,Zn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vd.subVectors(i,t).cross(Ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(vd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Tx.getNormalMatrix(e),s=this.coplanarPoint(vd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ax=0,Bi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=rs,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=tr,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},is=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eo,Yo=new A,to=new A,no=new A,io=new _e,Ko=new _e,Zp=new bt,bl=new A,Zo=new A,Ml=new A,Hf=new _e,yd=new _e,Gf=new _e,Es=class extends en{constructor(e=new is){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fa(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new xo(i,3,0,!1)),eo.setAttribute("uv",new xo(i,2,3,!1))}this.geometry=eo,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Sl(bl.set(-.5,-.5,0),no,o,to,s,r),Sl(Zo.set(.5,-.5,0),no,o,to,s,r),Sl(Ml.set(.5,.5,0),no,o,to,s,r),Hf.set(0,0),yd.set(1,0),Gf.set(1,1);let a=e.ray.intersectTriangle(bl,Zo,Ml,!1,Yo);if(a===null&&(Sl(Zo.set(-.5,.5,0),no,o,to,s,r),yd.set(0,1),a=e.ray.intersectTriangle(bl,Ml,Zo,!1,Yo),a===null))return;let l=e.ray.origin.distanceTo(Yo);l<e.near||l>e.far||t.push({distance:l,point:Yo.clone(),uv:bs.getInterpolation(Yo,bl,Zo,Ml,Hf,yd,Gf,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Sl(n,e,t,i,s,r){io.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ko.x=r*io.x-s*io.y,Ko.y=s*io.x+r*io.y):Ko.copy(io),n.copy(e),n.x+=Ko.x,n.y+=Ko.y,n.applyMatrix4(Zp)}var ys=new A,bd=new A,wl=new A,El=new A,Ts=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bd.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),El.copy(this.origin).sub(bd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wl),a=El.dot(this.direction),l=-El.dot(wl),c=El.lengthSq(),u=Math.abs(1-o*o),d,h,p,f;if(u>0)if(d=o*l-a,h=o*a-l,f=r*u,d>=0)if(h>=-f)if(h<=f){let x=1/u;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-f?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=f?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bd).addScaledVector(wl,h),p}intersectSphere(e,t){if(e.radius<0)return null;ys.subVectors(e.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,p=e.z-o.z,f=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=i.x-o.x,_=i.y-o.y,b=i.z-o.z,v=Math.abs(l),w=Math.abs(c),M=Math.abs(u),y,S,N,R,D,F,B,L,W,V,q,Y;if(v>=w&&v>=M?(N=l,F=d,W=f,Y=g,l>=0?(y=c,S=u,R=h,D=p,B=x,L=m,V=_,q=b):(y=u,S=c,R=p,D=h,B=m,L=x,V=b,q=_)):w>=M?(N=c,F=h,W=x,Y=_,c>=0?(y=u,S=l,R=p,D=d,B=m,L=f,V=b,q=g):(y=l,S=u,R=d,D=p,B=f,L=m,V=g,q=b)):(N=u,F=p,W=m,Y=b,u>=0?(y=l,S=c,R=d,D=h,B=f,L=x,V=g,q=_):(y=c,S=l,R=h,D=d,B=x,L=f,V=_,q=g)),N===0)return null;let Z=y/N,ne=S/N,re=1/N,Ee=R-Z*F,ze=D-ne*F,ie=B-Z*W,Te=L-ne*W,De=V-Z*Y,se=q-ne*Y,K=De*Te-se*ie,Me=Ee*se-ze*De,Ke=ie*ze-Te*Ee;if(s){if(K<0||Me<0||Ke<0)return null}else if((K<0||Me<0||Ke<0)&&(K>0||Me>0||Ke>0))return null;let Pe=K+Me+Ke;if(Pe===0)return null;let $e=re*(K*F+Me*W+Ke*Y);return(Pe>0?$e<0:$e>0)?null:this.at($e/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vf=new bt,_r=new Ts,Tl=new ns,Wf=new A,Al=new A,Rl=new A,Cl=new A,Md=new A,Pl=new A,Xf=new A,Il=new A,rt=class extends en{constructor(e=new Nt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Md.fromBufferAttribute(d,e),o?Pl.addScaledVector(Md,u):Pl.addScaledVector(Md.sub(t),u))}t.add(Pl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),_r.copy(e.ray).recast(e.near),!(Tl.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Tl,Wf)===null||_r.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Vf.copy(r).invert(),_r.copy(e.ray).applyMatrix4(Vf),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_r)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,w=b;v<w;v+=3){let M=a.getX(v),y=a.getX(v+1),S=a.getX(v+2);s=Ll(this,g,e,i,c,u,d,M,y,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=Ll(this,o,e,i,c,u,d,_,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,x=h.length;f<x;f++){let m=h[f],g=o[m.materialIndex],_=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,w=b;v<w;v+=3){let M=v,y=v+1,S=v+2;s=Ll(this,g,e,i,c,u,d,M,y,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=f,g=x;m<g;m+=3){let _=m,b=m+1,v=m+2;s=Ll(this,o,e,i,c,u,d,_,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rx(n,e,t,i,s,r,o,a){let l;if(e.side===kn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ss,a),l===null)return null;Il.copy(a),Il.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:n}}function Ll(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Al),n.getVertexPosition(l,Rl),n.getVertexPosition(c,Cl);let u=Rx(n,e,t,i,Al,Rl,Cl,Xf);if(u){let d=new A;bs.getBarycoord(Xf,Al,Rl,Cl,d),s&&(u.uv=bs.getInterpolatedAttribute(s,a,l,c,d,new _e)),r&&(u.uv1=bs.getInterpolatedAttribute(r,a,l,c,d,new _e)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,l,c,d,new A),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new A,materialIndex:0};bs.getNormal(Al,Rl,Cl,h.normal),u.face=h,u.barycoord=d}return u}var pa=class extends Jn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Rn,u=Rn,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class extends Wn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},so=new bt,qf=new bt,Dl=[],$f=new bi,Cx=new bt,Jo=new rt,jo=new ns,Fn=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),$f.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),jo.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(i),e.ray.intersectsSphere(jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,so),qf.multiplyMatrices(i,so),Jo.matrixWorld=qf,Jo.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){let l=Dl[o];l.instanceId=r,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(s*this.count),s,this.count,Nc,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vr=new ns,Px=new _e(.5,.5),Nl=new A,qs=class{constructor(e=new Zn,t=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],f=r[8],x=r[9],m=r[10],g=r[11],_=r[12],b=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,g-f,w-_).normalize(),s[1].setComponents(c+o,p+u,g+f,w+_).normalize(),s[2].setComponents(c+a,p+d,g+x,w+b).normalize(),s[3].setComponents(c-a,p-d,g-x,w-b).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,g-m,w-v).normalize();else if(s[4].setComponents(c-l,p-h,g-m,w-v).normalize(),t===yi)s[5].setComponents(c+l,p+h,g+m,w+v).normalize();else if(t===uo)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);let t=Px.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nl.x=s.normal.x>0?e.max.x:e.min.x,Nl.y=s.normal.y>0?e.max.y:e.min.y,Nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yf=new bt,sc=class n{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Yf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qs),i[s].setFromProjectionMatrix(Yf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qs),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var _o=class extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rc=new A,oc=new A,Kf=new bt,Qo=new Ts,Ul=new ns,Sd=new A,Zf=new A,ac=class extends en{constructor(e=new Nt,t=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)rc.fromBufferAttribute(t,s-1),oc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=rc.distanceTo(oc);e.setAttribute("lineDistance",new ut(i,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Kf.copy(s).invert(),Qo.copy(e.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=u.getX(x),_=u.getX(x+1),b=Fl(this,e,Qo,l,g,_,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(f-1),m=u.getX(p),g=Fl(this,e,Qo,l,x,m,f-1);g&&t.push(g)}}else{let p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let x=p,m=f-1;x<m;x+=c){let g=Fl(this,e,Qo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Fl(this,e,Qo,l,f-1,p,f-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fl(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(rc.fromBufferAttribute(a,s),oc.fromBufferAttribute(a,r),t.distanceSqToSegment(rc,oc,Sd,Zf)>i)return;Sd.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Sd);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Jf=new A,jf=new A,ma=class extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Jf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jf.distanceTo(jf);e.setAttribute("lineDistance",new ut(i,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lc=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qf=new bt,Ld=new Ts,Ol=new ns,kl=new A,ga=class extends en{constructor(e=new Nt,t=new lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),Ol.radius+=r,e.ray.intersectsSphere(Ol)===!1)return;Qf.copy(s).invert(),Ld.copy(e.ray).applyMatrix4(Qf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let f=h,x=p;f<x;f++){let m=c.getX(f);kl.fromBufferAttribute(d,m),ep(kl,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let f=h,x=p;f<x;f++)kl.fromBufferAttribute(d,f),ep(kl,f,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ep(n,e,t,i,s,r,o){let a=Ld.distanceSqToPoint(n);if(a<t){let l=new A;Ld.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xa=class extends Jn{constructor(e=[],t=Ir,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_a=class extends Jn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends Jn{constructor(e,t,i=Hi,s,r,o,a=Rn,l=Rn,c,u=ws,d=1){if(u!==ws&&u!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},va=class extends As{constructor(e,t=Hi,i=Ir,s,r,o=Rn,a=Rn,l,c=ws){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ya=class extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class n extends Nt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;f("z","y","x",-1,-1,i,t,e,o,r,0),f("z","y","x",1,-1,i,t,-e,o,r,1),f("x","z","y",1,1,e,i,t,s,o,2),f("x","z","y",1,-1,e,i,-t,s,o,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(d,2));function f(x,m,g,_,b,v,w,M,y,S,N){let R=v/y,D=w/S,F=v/2,B=w/2,L=M/2,W=y+1,V=S+1,q=0,Y=0,Z=new A;for(let ne=0;ne<V;ne++){let re=ne*D-B;for(let Ee=0;Ee<W;Ee++){let ze=Ee*R-F;Z[x]=ze*_,Z[m]=re*b,Z[g]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(Ee/y),d.push(1-ne/S),q+=1}}for(let ne=0;ne<S;ne++)for(let re=0;re<y;re++){let Ee=h+re+W*ne,ze=h+re+W*(ne+1),ie=h+(re+1)+W*(ne+1),Te=h+(re+1)+W*ne;l.push(Ee,ze,Te),l.push(ze,ie,Te),Y+=6}a.addGroup(p,Y,N),p+=Y,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var bn=class n extends Nt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},On=class n extends Nt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],p=[],f=0,x=[],m=i/2,g=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function _(){let v=new A,w=new A,M=0,y=(t-e)/i;for(let S=0;S<=r;S++){let N=[],R=S/r,D=R*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,L=B*l+a,W=Math.sin(L),V=Math.cos(L);w.x=D*W,w.y=-R*i+m,w.z=D*V,d.push(w.x,w.y,w.z),v.set(W,y,V).normalize(),h.push(v.x,v.y,v.z),p.push(B,1-R),N.push(f++)}x.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let R=x[N][S],D=x[N+1][S],F=x[N+1][S+1],B=x[N][S+1];(e>0||N!==0)&&(u.push(R,D,B),M+=3),(t>0||N!==r-1)&&(u.push(D,F,B),M+=3)}c.addGroup(g,M,0),g+=M}function b(v){let w=f,M=new _e,y=new A,S=0,N=v===!0?e:t,R=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),f++;let D=f;for(let F=0;F<=s;F++){let L=F/s*l+a,W=Math.cos(L),V=Math.sin(L);y.x=N*V,y.y=m*R,y.z=N*W,d.push(y.x,y.y,y.z),h.push(0,R,0),M.x=W*.5+.5,M.y=V*.5*R+.5,p.push(M.x,M.y),f++}for(let F=0;F<s;F++){let B=w+F,L=D+F;v===!0?u.push(L,L+1,B):u.push(L+1,L,B),S+=3}c.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$s=class n extends On{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new _e:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new A,s=[],r=[],o=[],a=new A,l=new bt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),o[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},vo=class extends li{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cc=class extends vo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var tp=new A,np=new A,wd=new fh,Ed=new fh,Td=new fh,uc=class extends li{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new A){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(np.subVectors(s[0],s[1]).add(s[0]),c=np);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(tp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=tp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),wd.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,f,x,m),Ed.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,f,x,m),Td.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,f,x,m)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ed.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Td.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(wd.calc(l),Ed.calc(l),Td.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ip(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ix(n,e){let t=1-n;return t*t*e}function Lx(n,e){return 2*(1-n)*n*e}function Dx(n,e){return n*n*e}function ia(n,e,t,i){return Ix(n,e)+Lx(n,t)+Dx(n,i)}function Nx(n,e){let t=1-n;return t*t*t*e}function Ux(n,e){let t=1-n;return 3*t*t*n*e}function Fx(n,e){return 3*(1-n)*n*n*e}function Ox(n,e){return n*n*n*e}function sa(n,e,t,i,s){return Nx(n,e)+Ux(n,t)+Fx(n,i)+Ox(n,s)}var ba=class extends li{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sa(e,s.x,r.x,o.x,a.x),sa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dc=class extends li{constructor(e=new A,t=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sa(e,s.x,r.x,o.x,a.x),sa(e,s.y,r.y,o.y,a.y),sa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends li{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sr=class extends li{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends li{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ia(e,s.x,r.x,o.x),ia(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends li{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ia(e,s.x,r.x,o.x),ia(e,s.y,r.y,o.y),ia(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(ip(a,l.x,c.x,u.x,d.x),ip(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:uc,CubicBezierCurve:ba,CubicBezierCurve3:dc,EllipseCurve:vo,LineCurve:Ma,LineCurve3:Sr,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:wr,SplineCurve:wa}),yo=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new hc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Rs=class extends yo{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ma(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Sa(this.currentPoint.clone(),new _e(e,t),new _e(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ba(this.currentPoint.clone(),new _e(e,t),new _e(i,s),new _e(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new vo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ys=class extends Rs{constructor(e){super(e),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Rs().fromJSON(s))}return this}};function kx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Jp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Vx(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let p=n[h],f=n[h+1];p<a&&(a=p),f<l&&(l=f),p>u&&(u=p),f>d&&(d=f)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ea(r,o,t,a,l,c,0),o}function Jp(n,e,t,i,s){let r;if(s===e_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=sp(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=sp(o/i|0,n[o],n[o+1],r);return r&&bo(r,r.next)&&(Aa(r),r=r.next),r}function Er(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bo(t,t.next)||cn(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ea(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Yx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?zx(n,i,s,r):Bx(n)){e.push(l.i,n.i,c.i),Aa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Hx(Er(n),e),Ea(n,e,t,i,s,r,2)):o===2&&Gx(n,e,t,i,s,r):Ea(Er(n),e,t,i,s,r,1);break}}}function Bx(n){let e=n.prev,t=n,i=n.next;if(cn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),f=i.next;for(;f!==e;){if(f.x>=u&&f.x<=h&&f.y>=d&&f.y<=p&&ea(s,a,r,l,o,c,f.x,f.y)&&cn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function zx(n,e,t,i){let s=n.prev,r=n,o=n.next;if(cn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,l,c),f=Math.min(u,d,h),x=Math.max(a,l,c),m=Math.max(u,d,h),g=Dd(p,f,e,t,i),_=Dd(x,m,e,t,i),b=n.prevZ,v=n.nextZ;for(;b&&b.z>=g&&v&&v.z<=_;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ea(a,u,l,d,c,h,b.x,b.y)&&cn(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&ea(a,u,l,d,c,h,v.x,v.y)&&cn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=g;){if(b.x>=p&&b.x<=x&&b.y>=f&&b.y<=m&&b!==s&&b!==o&&ea(a,u,l,d,c,h,b.x,b.y)&&cn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=f&&v.y<=m&&v!==s&&v!==o&&ea(a,u,l,d,c,h,v.x,v.y)&&cn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Hx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!bo(i,s)&&Qp(i,t,t.next,s)&&Ta(i,s)&&Ta(s,i)&&(e.push(i.i,t.i,s.i),Aa(t),Aa(t.next),t=n=s),t=t.next}while(t!==n);return Er(t)}function Gx(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jx(o,a)){let l=e0(o,a);o=Er(o,o.next),l=Er(l,l.next),Ea(o,e,t,i,s,r,0),Ea(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Vx(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Jp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Zx(c))}s.sort(Wx);for(let r=0;r<s.length;r++)t=Xx(s[r],t);return t}function Wx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Xx(n,e){let t=qx(n,e);if(!t)return e;let i=e0(t,n);return Er(i,i.next),Er(t,t.next)}function qx(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(bo(n,t))return t;do{if(bo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&jp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Ta(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&$x(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function $x(n,e){return cn(n.prev,n,e.prev)<0&&cn(e.next,n,n.next)<0}function Yx(n,e,t,i){let s=n;do s.z===0&&(s.z=Dd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Dd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Zx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jp(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ea(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&jp(n,e,t,i,s,r,o,a)}function Jx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!jx(n,e)&&(Ta(n,e)&&Ta(e,n)&&Qx(n,e)&&(cn(n.prev,n,e.prev)||cn(n,e.prev,e))||bo(n,e)&&cn(n.prev,n,n.next)>0&&cn(e.prev,e,e.next)>0)}function cn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bo(n,e){return n.x===e.x&&n.y===e.y}function Qp(n,e,t,i){let s=zl(cn(n,e,t)),r=zl(cn(n,e,i)),o=zl(cn(t,i,n)),a=zl(cn(t,i,e));return!!(s!==r&&o!==a||s===0&&Bl(n,t,e)||r===0&&Bl(n,i,e)||o===0&&Bl(t,n,i)||a===0&&Bl(t,e,i))}function Bl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zl(n){return n>0?1:n<0?-1:0}function jx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ta(n,e){return cn(n.prev,n,n.next)<0?cn(n,e,n.next)>=0&&cn(n,n.prev,e)>=0:cn(n,e,n.prev)<0||cn(n,n.next,e)<0}function Qx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function e0(n,e){let t=Nd(n.i,n.x,n.y),i=Nd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function sp(n,e,t,i){let s=Nd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function e_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ud=class{static triangulate(e,t,i=2){return kx(e,t,i)}},yr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];rp(e),op(i,e);let o=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,op(i,t[l]);let a=Ud.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function op(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Tr=class n extends Nt{constructor(e=new Ys([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:t_,b,v=!1,w,M,y,S;if(g){b=g.getSpacedPoints(u),v=!0,h=!1;let de=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,de),M=new A,y=new A,S=new A}h||(m=0,p=0,f=0,x=0);let N=a.extractPoints(c),R=N.shape,D=N.holes;if(!yr.isClockWise(R)){R=R.reverse();for(let de=0,z=D.length;de<z;de++){let X=D[de];yr.isClockWise(X)&&(D[de]=X.reverse())}}function B(de){let X=10000000000000001e-36,oe=de[0];for(let $=1;$<=de.length;$++){let te=$%de.length,Se=de[te],U=Se.x-oe.x,Q=Se.y-oe.y,ae=U*U+Q*Q,I=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(oe.x),Math.abs(oe.y)),Qe=X*I*I;if(ae<=Qe){de.splice(te,1),$--;continue}oe=Se}}B(R),D.forEach(B);let L=D.length,W=R;for(let de=0;de<L;de++){let z=D[de];R=R.concat(z)}function V(de,z,X){return z||mt("ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(z,X)}let q=R.length;function Y(de,z,X){let oe,$,te,Se=de.x-z.x,U=de.y-z.y,Q=X.x-de.x,ae=X.y-de.y,I=Se*Se+U*U,Qe=Se*ae-U*Q;if(Math.abs(Qe)>Number.EPSILON){let it=Math.sqrt(I),pt=Math.sqrt(Q*Q+ae*ae),Ae=z.x-U/it,xe=z.y+Se/it,be=X.x-ae/pt,Ve=X.y+Q/pt,C=((be-Ae)*ae-(Ve-xe)*Q)/(Se*ae-U*Q);oe=Ae+Se*C-de.x,$=xe+U*C-de.y;let E=oe*oe+$*$;if(E<=2)return new _e(oe,$);te=Math.sqrt(E/2)}else{let it=!1;Se>Number.EPSILON?Q>Number.EPSILON&&(it=!0):Se<-Number.EPSILON?Q<-Number.EPSILON&&(it=!0):Math.sign(U)===Math.sign(ae)&&(it=!0),it?(oe=-U,$=Se,te=Math.sqrt(I)):(oe=Se,$=U,te=Math.sqrt(I/2))}return new _e(oe/te,$/te)}let Z=[];for(let de=0,z=W.length,X=z-1,oe=de+1;de<z;de++,X++,oe++)X===z&&(X=0),oe===z&&(oe=0),Z[de]=Y(W[de],W[X],W[oe]);let ne=[],re,Ee=Z.concat();for(let de=0,z=L;de<z;de++){let X=D[de];re=[];for(let oe=0,$=X.length,te=$-1,Se=oe+1;oe<$;oe++,te++,Se++)te===$&&(te=0),Se===$&&(Se=0),re[oe]=Y(X[oe],X[te],X[Se]);ne.push(re),Ee=Ee.concat(re)}let ze;if(m===0)ze=yr.triangulateShape(W,D);else{let de=[],z=[];for(let X=0;X<m;X++){let oe=X/m,$=p*Math.cos(oe*Math.PI/2),te=f*Math.sin(oe*Math.PI/2)+x;for(let Se=0,U=W.length;Se<U;Se++){let Q=V(W[Se],Z[Se],te);Me(Q.x,Q.y,-$),oe===0&&de.push(Q)}for(let Se=0,U=L;Se<U;Se++){let Q=D[Se];re=ne[Se];let ae=[];for(let I=0,Qe=Q.length;I<Qe;I++){let it=V(Q[I],re[I],te);Me(it.x,it.y,-$),oe===0&&ae.push(it)}oe===0&&z.push(ae)}}ze=yr.triangulateShape(de,z)}let ie=ze.length,Te=f+x;for(let de=0;de<q;de++){let z=h?V(R[de],Ee[de],Te):R[de];v?(y.copy(w.normals[0]).multiplyScalar(z.x),M.copy(w.binormals[0]).multiplyScalar(z.y),S.copy(b[0]).add(y).add(M),Me(S.x,S.y,S.z)):Me(z.x,z.y,0)}for(let de=1;de<=u;de++)for(let z=0;z<q;z++){let X=h?V(R[z],Ee[z],Te):R[z];v?(y.copy(w.normals[de]).multiplyScalar(X.x),M.copy(w.binormals[de]).multiplyScalar(X.y),S.copy(b[de]).add(y).add(M),Me(S.x,S.y,S.z)):Me(X.x,X.y,d/u*de)}for(let de=m-1;de>=0;de--){let z=de/m,X=p*Math.cos(z*Math.PI/2),oe=f*Math.sin(z*Math.PI/2)+x;for(let $=0,te=W.length;$<te;$++){let Se=V(W[$],Z[$],oe);Me(Se.x,Se.y,d+X)}for(let $=0,te=D.length;$<te;$++){let Se=D[$];re=ne[$];for(let U=0,Q=Se.length;U<Q;U++){let ae=V(Se[U],re[U],oe);v?Me(ae.x,ae.y+b[u-1].y,b[u-1].x+X):Me(ae.x,ae.y,d+X)}}}De(),se();function De(){let de=s.length/3;if(h){let z=0,X=q*z;for(let oe=0;oe<ie;oe++){let $=ze[oe];Ke($[2]+X,$[1]+X,$[0]+X)}z=u+m*2,X=q*z;for(let oe=0;oe<ie;oe++){let $=ze[oe];Ke($[0]+X,$[1]+X,$[2]+X)}}else{for(let z=0;z<ie;z++){let X=ze[z];Ke(X[2],X[1],X[0])}for(let z=0;z<ie;z++){let X=ze[z];Ke(X[0]+q*u,X[1]+q*u,X[2]+q*u)}}i.addGroup(de,s.length/3-de,0)}function se(){let de=s.length/3,z=0;K(W,z),z+=W.length;for(let X=0,oe=D.length;X<oe;X++){let $=D[X];K($,z),z+=$.length}i.addGroup(de,s.length/3-de,1)}function K(de,z){let X=de.length;for(;--X>=0;){let oe=X,$=X-1;$<0&&($=de.length-1);for(let te=0,Se=u+m*2;te<Se;te++){let U=q*te,Q=q*(te+1),ae=z+oe+U,I=z+$+U,Qe=z+$+Q,it=z+oe+Q;Pe(ae,I,Qe,it)}}}function Me(de,z,X){l.push(de),l.push(z),l.push(X)}function Ke(de,z,X){$e(de),$e(z),$e(X);let oe=s.length/3,$=_.generateTopUV(i,s,oe-3,oe-2,oe-1);Ie($[0]),Ie($[1]),Ie($[2])}function Pe(de,z,X,oe){$e(de),$e(z),$e(oe),$e(z),$e(X),$e(oe);let $=s.length/3,te=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);Ie(te[0]),Ie(te[1]),Ie(te[3]),Ie(te[1]),Ie(te[2]),Ie(te[3])}function $e(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function Ie(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return n_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hc[s.type]().fromJSON(s)),new n(i,e.options)}},t_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new _e(r,o),new _e(a,l),new _e(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],f=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new _e(o,1-l),new _e(c,1-d),new _e(h,1-f),new _e(x,1-g)]:[new _e(a,1-l),new _e(u,1-d),new _e(p,1-f),new _e(m,1-g)]}};function n_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ra=class n extends Nt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new A,h=new _e,p=new A,f=new A,x=new A,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=g*1,p.y=-m,p.z=g*0,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let _=0;_<=t;_++){let b=i+_*u*s,v=Math.sin(b),w=Math.cos(b);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*v,d.y=e[M].y,d.z=e[M].x*w,o.push(d.x,d.y,d.z),h.x=_/t,h.y=M/(e.length-1),a.push(h.x,h.y);let y=l[3*M+0]*v,S=l[3*M+1],N=l[3*M+0]*w;c.push(y,S,N)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let v=b+_*e.length,w=v,M=v+e.length,y=v+e.length+1,S=v+1;r.push(w,M,S),r.push(y,S,M)}this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var ft=class n extends Nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<u;g++){let _=g*h-o;for(let b=0;b<c;b++){let v=b*d-r;f.push(v,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let b=_+c*g,v=_+c*(g+1),w=_+1+c*(g+1),M=_+1+c*g;p.push(b,v,M),p.push(v,w,M)}this.setIndex(p),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},hn=class n extends Nt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,p=new A,f=new _e;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let g=r+m/i*o;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,u.push(f.x,f.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let g=0;g<i;g++){let _=g+m,b=_,v=_+i+1,w=_+i+2,M=_+1;a.push(b,v,M),a.push(v,w,M)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Cn=class n extends Nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new A,h=new A,p=[],f=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],b=g/i,v=o+b*a,w=e*Math.cos(v),M=Math.sqrt(e*e-w*w),y=0;g===0&&o===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let N=S/t,R=s+N*r;d.x=-M*Math.cos(R),d.y=w,d.z=M*Math.sin(R),f.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(N+y,1-b),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let b=u[g][_+1],v=u[g][_],w=u[g+1][_],M=u[g+1][_+1];(g!==0||o>0)&&p.push(b,v,M),(g!==i-1||l<Math.PI)&&p.push(v,w,M)}this.setIndex(p),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mi=class n extends Nt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new A,p=new A,f=new A;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=s;g++){let _=g/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(p,h).normalize(),u.push(f.x,f.y,f.z),d.push(g/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(g,_,v),l.push(_,b,v)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ca=class n extends Nt{constructor(e=new wr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new _e,u=new A,d=[],h=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),g()}function m(b){u=e.getPointAt(b/t,u);let v=o.normals[b],w=o.binormals[b];for(let M=0;M<=s;M++){let y=M/s*Math.PI*2,S=Math.sin(y),N=-Math.cos(y);l.x=N*v.x+S*w.x,l.y=N*v.y+S*w.y,l.z=N*v.z+S*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let w=(s+1)*(b-1)+(v-1),M=(s+1)*b+(v-1),y=(s+1)*b+v,S=(s+1)*(b-1)+v;f.push(w,M,S),f.push(M,y,S)}}function _(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new hc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Dr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ap(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ap(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(n){let e={};for(let t=0;t<n.length;t++){let i=Dr(n[t]);for(let s in i)e[s]=i[s]}return e}function ap(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function i_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ph(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}var xu={clone:Dr,merge:qn},s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mo=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cs=class extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){br('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fc=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ro(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Hl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ks=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cd,endingEnd:Cd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:r=e,a=2*t-i;break;case Id:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pd:o=e,l=2*i-t;break;case Id:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),x=f*f,m=x*f,g=-h*m+2*h*x-h*f,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*f+1,b=(-1-p)*m+(1.5+p)*x+.5*f,v=p*m-p*x;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+_*o[c+w]+b*o[l+w]+v*o[d+w];return r}},gc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},xc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_c=class extends Ks{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let f=(i-t)/(s-t),x=1-f;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*f;return r}let h=a*2,p=e-1;for(let f=0;f!==a;++f){let x=o[c+f],m=o[l+f],g=p*h+f*2,_=d[g],b=d[g+1],v=e*h+f*2,w=u[v],M=u[v+1],y=a_(i,t,_,w,s);r[f]=t0(y,x,b,M,m)}return r}};function t0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function o_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function a_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=t0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=o_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Hl(e.settings)&&(i.settings={inTangents:ro(e.settings.inTangents,Array),outTangents:ro(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _c(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case ec:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case Rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ht("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return Rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Hl(this.settings)&&(lp(this.settings.inTangents,e),lp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Hl(this.settings)&&(cp(this.settings.inTangents,e),cp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Zg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let f=0;f!==i;++f){let x=t[d+f];if(x!==t[h+f]||x!==t[p+f]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Hl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function lp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function cp(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=ec;var Zs=class extends ci{constructor(e,t,i){super(e,t,i)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=ra;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="color";var yc=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};yc.prototype.ValueTypeName="number";var bc=class extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pa=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new bc(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends ci{constructor(e,t,i){super(e,t,i)}};Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=ra;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};Mc.prototype.ValueTypeName="vector";var Sc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},n0=new Sc,wc=class{constructor(e){this.manager=e!==void 0?e:n0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ia=class extends en{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends Ia{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ad=new bt,up=new A,dp=new A,Ec=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ad,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===uo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gl=new A,Vl=new dn,es=new A,Da=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,es.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gl,Vl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xs=new A,hp=new _e,fp=new _e,Nn=class extends Da{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z),Xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xs.x,Xs.y).multiplyScalar(-e/Xs.z)}getViewSize(e,t){return this.getViewBounds(e,hp,fp),t.subVectors(fp,hp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ps=class extends Da{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fd=class extends Ec{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Na=class extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var oo=-90,ao=1,wo=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(oo,ao,e,t);s.layers=this.layers,this.add(s);let r=new Nn(oo,ao,e,t);r.layers=this.layers,this.add(r);let o=new Nn(oo,ao,e,t);o.layers=this.layers,this.add(o);let a=new Nn(oo,ao,e,t);a.layers=this.layers,this.add(a);let l=new Nn(oo,ao,e,t);l.layers=this.layers,this.add(l);let c=new Nn(oo,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Tc=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var mh="\\[\\]\\.:\\/",l_=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",c_="[^"+mh.replace("\\.","")+"]",u_=/((?:WC+[\/:])*)/.source.replace("WC",gh),d_=/(WCOD+)?/.source.replace("WCOD",c_),h_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),f_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),p_=new RegExp("^"+u_+d_+h_+f_+"$"),m_=["material","materials","bones","map"],Od=class{constructor(e,t,i){let s=i||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},nn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l_,"")}static parseTrackName(e){let t=p_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);m_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Od;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wE=new Float32Array(1);var pp=new bt,Ar=class{constructor(e,t,i=0,s=1/0){this.ray=new Ts(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pp),this}intersectObject(e,t=!0,i=[]){return kd(e,this,i,t),i.sort(mp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kd(e[s],this,i,t);return i.sort(mp),i}};function mp(n,e){return n.distance-e.distance}function kd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)kd(r[o],e,t,!0)}}var Eo=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Ua=class extends ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function xh(n,e,t,i){let s=g_(i);switch(t){case nh:return n*e;case Nc:return n*e/s.components*s.byteLength;case Uc:return n*e/s.components*s.byteLength;case nr:return n*e*2/s.components*s.byteLength;case Fc:return n*e*2/s.components*s.byteLength;case ih:return n*e*3/s.components*s.byteLength;case Gi:return n*e*4/s.components*s.byteLength;case Oc:return n*e*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:case Hc:return Math.max(n,16)*Math.max(e,8)/4;case kc:case zc:return Math.max(n,8)*Math.max(e,8)/2;case Gc:case Vc:case Xc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Ga:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case du:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Va:case fu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g_(n){switch(n){case ti:case jd:return{byteLength:1,components:1};case Co:case Qd:case Qn:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case Hi:case Ic:case Si:return{byteLength:4,components:1};case eh:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function w0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function b_(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,f)=>p.start-f.start);let h=0;for(let p=1;p<d.length;p++){let f=d[h],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,C_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,q_=`vec3 transformedNormal = objectNormal;
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
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
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
#endif`,vv=`uniform sampler2D dfgLUT;
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
}`,yv=`
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform float backgroundBlurriness;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,By=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Vy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,qy=`#define STANDARD
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
}`,$y=`#define TOON
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
}`,Yy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:M_,alphahash_pars_fragment:S_,alphamap_fragment:w_,alphamap_pars_fragment:E_,alphatest_fragment:T_,alphatest_pars_fragment:A_,aomap_fragment:R_,aomap_pars_fragment:C_,batching_pars_vertex:P_,batching_vertex:I_,begin_vertex:L_,beginnormal_vertex:D_,bsdfs:N_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:k_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:X_,defaultnormal_vertex:q_,displacementmap_pars_vertex:$_,displacementmap_vertex:Y_,emissivemap_fragment:K_,emissivemap_pars_fragment:Z_,colorspace_fragment:J_,colorspace_pars_fragment:j_,envmap_fragment:Q_,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:fv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:ov,fog_pars_fragment:av,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:hv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:xv,lights_physical_fragment:_v,lights_physical_pars_fragment:vv,lights_fragment_begin:yv,lights_fragment_maps:bv,lights_fragment_end:Mv,lightprobes_pars_fragment:Sv,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Ev,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Fv,morphtarget_pars_vertex:Ov,morphtarget_vertex:kv,normal_fragment_begin:Bv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Yv,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:jv,dithering_fragment:Qv,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:sy,shadowmap_vertex:ry,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:hy,tonemapping_fragment:fy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:xy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:yy,background_vert:by,background_frag:My,backgroundCube_vert:Sy,backgroundCube_frag:wy,cube_vert:Ey,cube_frag:Ty,depth_vert:Ay,depth_frag:Ry,distance_vert:Cy,distance_frag:Py,equirect_vert:Iy,equirect_frag:Ly,linedashed_vert:Dy,linedashed_frag:Ny,meshbasic_vert:Uy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:ky,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Vy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:qy,meshtoon_vert:$y,meshtoon_frag:Yy,points_vert:Ky,points_frag:Zy,shadow_vert:Jy,shadow_frag:jy,sprite_vert:Qy,sprite_frag:e1},Ze={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ls={basic:{uniforms:qn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:qn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:qn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:qn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:qn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Oe(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:qn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:qn([Ze.points,Ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:qn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:qn([Ze.common,Ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:qn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:qn([Ze.sprite,Ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:qn([Ze.common,Ze.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:qn([Ze.lights,Ze.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ls.physical={uniforms:qn([ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var _u={r:0,b:0,g:0},t1=new bt,E0=new vt;E0.set(-1,0,0,0,1,0,0,0,1);function n1(n,e,t,i,s,r){let o=new Oe(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function p(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let v=_.backgroundBlurriness>0;b=e.get(b,v)}return b}function f(_){let b=!1,v=p(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(_,b){let v=p(b);v&&v.isCubeTexture?(c===void 0&&(c=new rt(new Ft(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Dr(ls.backgroundCube.uniforms),vertexShader:ls.backgroundCube.vertexShader,fragmentShader:ls.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(E0),c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ht,(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new rt(new ft(2,2),new Xt({name:"BackgroundMaterial",uniforms:Dr(ls.background.uniforms),vertexShader:ls.background.vertexShader,fragmentShader:ls.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(_u,ph(n)),t.buffers.color.setClear(_u.r,_u.g,_u.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:f,addToRenderList:x,dispose:g}}function i1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(D,F,B,L,W){let V=!1,q=d(D,L,B,F);r!==q&&(r=q,c(r.object)),V=p(D,L,B,W),V&&f(D,L,B,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(D,F,B,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,F,B,L){let W=L.wireframe===!0,V=i[F.id];V===void 0&&(V={},i[F.id]=V);let q=D.isInstancedMesh===!0?D.id:0,Y=V[q];Y===void 0&&(Y={},V[q]=Y);let Z=Y[B.id];Z===void 0&&(Z={},Y[B.id]=Z);let ne=Z[W];return ne===void 0&&(ne=h(l()),Z[W]=ne),ne}function h(D){let F=[],B=[],L=[];for(let W=0;W<t;W++)F[W]=0,B[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:L,object:D,attributes:{},index:null}}function p(D,F,B,L){let W=r.attributes,V=F.attributes,q=0,Y=B.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let re=W[Z],Ee=V[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),re===void 0||re.attribute!==Ee||Ee&&re.data!==Ee.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function f(D,F,B,L){let W={},V=F.attributes,q=0,Y=B.getAttributes();for(let Z in Y)if(Y[Z].location>=0){let re=V[Z];re===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));let Ee={};Ee.attribute=re,re&&re.data&&(Ee.data=re.data),W[Z]=Ee,q++}r.attributes=W,r.attributesNum=q,r.index=L}function x(){let D=r.newAttributes;for(let F=0,B=D.length;F<B;F++)D[F]=0}function m(D){g(D,0)}function g(D,F){let B=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;B[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),W[D]!==F&&(n.vertexAttribDivisor(D,F),W[D]=F)}function _(){let D=r.newAttributes,F=r.enabledAttributes;for(let B=0,L=F.length;B<L;B++)F[B]!==D[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function b(D,F,B,L,W,V,q){q===!0?n.vertexAttribIPointer(D,F,B,W,V):n.vertexAttribPointer(D,F,B,L,W,V)}function v(D,F,B,L){x();let W=L.attributes,V=B.getAttributes(),q=F.defaultAttributeValues;for(let Y in V){let Z=V[Y];if(Z.location>=0){let ne=W[Y];if(ne===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){let re=ne.normalized,Ee=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;let ie=ze.buffer,Te=ze.type,De=ze.bytesPerElement,se=Te===n.INT||Te===n.UNSIGNED_INT||ne.gpuType===Ic;if(ne.isInterleavedBufferAttribute){let K=ne.data,Me=K.isInterleavedBuffer===!0?K.stride:K.itemSize,Ke=ne.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let Pe=0;Pe<Z.locationSize;Pe++)g(Z.location+Pe,K.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)m(Z.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Pe=0;Pe<Z.locationSize;Pe++)b(Z.location+Pe,Ee/Z.locationSize,Te,re,Me*De,(Ke+Ee/Z.locationSize*Pe)*De,se)}else{if(ne.isInstancedBufferAttribute){for(let K=0;K<Z.locationSize;K++)g(Z.location+K,ne.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<Z.locationSize;K++)m(Z.location+K);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let K=0;K<Z.locationSize;K++)b(Z.location+K,Ee/Z.locationSize,Te,re,Ee*De,Ee/Z.locationSize*K*De,se)}}else if(q!==void 0){let re=q[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(Z.location,re);break;case 3:n.vertexAttrib3fv(Z.location,re);break;case 4:n.vertexAttrib4fv(Z.location,re);break;default:n.vertexAttrib1fv(Z.location,re)}}}}_()}function w(){N();for(let D in i){let F=i[D];for(let B in F){let L=F[B];for(let W in L){let V=L[W];for(let q in V)u(V[q].object),delete V[q];delete L[W]}}delete i[D]}}function M(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let B in F){let L=F[B];for(let W in L){let V=L[W];for(let q in V)u(V[q].object),delete V[q];delete L[W]}}delete i[D.id]}function y(D){for(let F in i){let B=i[F];for(let L in B){let W=B[L];if(W[D.id]===void 0)continue;let V=W[D.id];for(let q in V)u(V[q].object),delete V[q];delete W[D.id]}}}function S(D){for(let F in i){let B=i[F],L=D.isInstancedMesh===!0?D.id:0,W=B[L];if(W!==void 0){for(let V in W){let q=W[V];for(let Y in q)u(q[Y].object),delete q[Y];delete W[V]}delete B[L],Object.keys(B).length===0&&delete i[F]}}}function N(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function s1(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function r1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Gi&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==ti&&y!==Si&&!S&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:v,maxSamples:w,samples:M}}function o1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Zn,a=new vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let f=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||f===null||f.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,v=g.clippingState||null;l.value=v,v=u(f,h,b,p);for(let w=0;w!==b;++w)v[w]=t[w];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,f){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,f!==!0||m===null){let g=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=p;b!==x;++b,v+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var qa=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Cr});r.uniforms.tEquirect.value=t;let o=new rt(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=un),new wo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},i0=256,a1=3,l1=20,T0=256,A0=16,c1=3,u1=new A,d1=new Oe,Io=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wo(1,10,null),this._boxMesh=new rt(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=u1}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(d1));let m=new wo(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=f,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(i0,uh(e))}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ro?this._setSize(e.image.length===0?i0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=s0(e,!1,!1),i=Math.log2(e)-a1;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=s0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ir||e.mapping===Ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=r0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=h1(),this._integrationMaterial=f1());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/A0);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-c1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(T0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p1());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function s0(n,e,t){return new qa(n,{minFilter:zi,generateMipmaps:e,type:Qn,colorSpace:oa,depthBuffer:t})}function $a(n,e,t){return new Xt({name:n,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:kn,blending:Cr,depthTest:!1,depthWrite:!1})}function h1(){return $a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${T0}u

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
	`)}function f1(){return $a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:A0}},`

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
	`)}function p1(){return $a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l1}
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
	`)}function r0(){return $a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function o0(){return $a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Rc||p===Cc)if(e.has(h)){let f=e.get(h).texture;return a(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let x=new qa(f.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,f=p===Rc||p===Cc,x=p===Ir||p===Ro;if(f||x){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Io(n)),m=f?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return f&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Io(n)),m=f?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Rc?h.mapping=Ir:p===Cc&&(h.mapping=Ro),h}function l(h){let p=0,f=6;for(let x=0;x<f;x++)h[x]!==void 0&&p++;return p===f}function c(h){let p=h.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function g1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&br("WebGLRenderer: "+i+" extension not supported."),s}}}function x1(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(f=>delete s[f]);function a(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id],o.unregister(f);let x=r.get(f);x&&(e.remove(x),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(f){let x=f.attributes;for(let m in x)e.update(x[m],n.ARRAY_BUFFER)}function d(f){let x=f.index,m=f.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,b=m.count>=65535?ha:da,v=new b(Math.ceil(_/3)*6,1),w=v.array;if(x!==null){let y=x.array;g=x.version;for(let S=0,N=0;S<_;S+=3){let R=y[S+0],D=y[S+1],F=y[S+2];w[N++]=R,w[N++]=D,w[N++]=D,w[N++]=F,w[N++]=F,w[N++]=R}}else{g=m.version;for(let y=0,S=0;y<_;y+=3){let N=y+0,R=y+1,D=y+2;w[S++]=N,w[S++]=R,w[S++]=R,w[S++]=D,w[S++]=D,w[S++]=N}}v.version=g;let M=r.get(f);M&&e.remove(M),r.set(f,v)}function h(f){let x=r.get(f);if(x){let m=f.index;m!==null&&x.version<m.version&&d(f)}else d(f);return r.get(f)}function p(){for(let f in s){let x=s[f].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function _1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*o,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let x=0;for(let m=0;m<p;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function v1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function y1(n,e,t){let i=new WeakMap,s=new Zt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let N=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),x===!0&&(b=3);let v=a.attributes.position.count*b,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*w*4*d),y=new ua(M,v,w,d);y.type=Si,y.needsUpdate=!0;let S=b*4;for(let R=0;R<d;R++){let D=m[R],F=g[R],B=_[R],L=v*w*4*R;for(let W=0;W<D.count;W++){let V=W*S;p===!0&&(s.fromBufferAttribute(D,W),M[L+V+0]=s.x,M[L+V+1]=s.y,M[L+V+2]=s.z,M[L+V+3]=0),f===!0&&(s.fromBufferAttribute(F,W),M[L+V+4]=s.x,M[L+V+5]=s.y,M[L+V+6]=s.z,M[L+V+7]=0),x===!0&&(s.fromBufferAttribute(B,W),M[L+V+8]=s.x,M[L+V+9]=s.y,M[L+V+10]=s.z,M[L+V+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:y,size:new _e(v,w)},i.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function b1(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var M1={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[$d]:"CINEON_TONE_MAPPING",[Yd]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[Fa]:"NEUTRAL_TONE_MAPPING",[Kd]:"CUSTOM_TONE_MAPPING"};function S1(n,e,t,i,s,r){let o=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Nt;u.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new Mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new rt(u,d),p=new Ps(-1,1,1,-1,0,1),f=null,x=null,m=!1,g,_=null,b=[],v=!1;this.setSize=function(w,M){o.setSize(w,M),a!==null&&a.setSize(w,M),l!==null&&l.setSize(w,M);for(let y=0;y<b.length;y++){let S=b[y];S.setSize&&S.setSize(w,M)}},this.setEffects=function(w){b=w,v=b.length>0&&b[0].isRenderPass===!0;let M=o.width,y=o.height;b.length>0&&a===null&&(a=new Un(M,y,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(M,y,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(N=>N.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new As(M,y),r===!0&&(c.format=Is,c.type=Lr)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let N=0;N<b.length;N++){let R=b[N];R.setSize&&R.setSize(M,y),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,M){if(m||w.toneMapping===os&&b.length===0)return!1;if(_=M,M!==null){let y=M.width,S=M.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return v===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=os,!0},this.hasRenderPass=function(){return v},this.end=function(w,M){w.toneMapping=g,m=!0;let y=o,S=a;for(let N=0;N<b.length;N++){let R=b[N];R.enabled!==!1&&(R.render(w,S,y,M),R.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(f!==w.outputColorSpace||x!==w.toneMapping){f=w.outputColorSpace,x=w.toneMapping,d.defines={},Rt.getTransfer(f)===Ht&&(d.defines.SRGB_TRANSFER="");let N=M1[x];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,w.setRenderTarget(_),w.render(h,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var R0=new Jn,C0=new As(1,1),P0=new va(1),I0=new ua,L0=new ic,D0=new xa,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function Lo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=a0[s];if(r===void 0&&(r=new Float32Array(s),a0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Sn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bu(n,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2fv(this.addr,e),Sn(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;n.uniform3fv(this.addr,e),Sn(t,e)}}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4fv(this.addr,e),Sn(t,e)}}function R1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;d0.set(i),n.uniformMatrix2fv(this.addr,!1,d0),Sn(t,i)}}function C1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;u0.set(i),n.uniformMatrix3fv(this.addr,!1,u0),Sn(t,i)}}function P1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(Mn(t,i))return;c0.set(i),n.uniformMatrix4fv(this.addr,!1,c0),Sn(t,i)}}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2iv(this.addr,e),Sn(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;n.uniform3iv(this.addr,e),Sn(t,e)}}function N1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4iv(this.addr,e),Sn(t,e)}}function U1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;n.uniform2uiv(this.addr,e),Sn(t,e)}}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;n.uniform3uiv(this.addr,e),Sn(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;n.uniform4uiv(this.addr,e),Sn(t,e)}}function Mu(n){return n.version===0&&(n.compareFunction=oh,n.needsUpdate=!0),n}function B1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Mu(C0):r=R0,t.setTexture2D(e||r,s)}function z1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||L0,s)}function H1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Mu(P0):r=D0,t.setTextureCube(e||r,s)}function G1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||I0,s)}function V1(n){switch(n){case 5126:return w1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return F1;case 36295:return O1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function W1(n,e){n.uniform1fv(this.addr,e)}function X1(n,e){let t=Lo(e,this.size,2);n.uniform2fv(this.addr,t)}function q1(n,e){let t=Lo(e,this.size,3);n.uniform3fv(this.addr,t)}function $1(n,e){let t=Lo(e,this.size,4);n.uniform4fv(this.addr,t)}function Y1(n,e){let t=Lo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K1(n,e){let t=Lo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z1(n,e){let t=Lo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J1(n,e){n.uniform1iv(this.addr,e)}function j1(n,e){n.uniform2iv(this.addr,e)}function Q1(n,e){n.uniform3iv(this.addr,e)}function eb(n,e){n.uniform4iv(this.addr,e)}function tb(n,e){n.uniform1uiv(this.addr,e)}function nb(n,e){n.uniform2uiv(this.addr,e)}function ib(n,e){n.uniform3uiv(this.addr,e)}function sb(n,e){n.uniform4uiv(this.addr,e)}function rb(n,e,t){let i=this.cache,s=e.length,r=bu(t,s);Mn(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Mu(C0):o=R0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ob(n,e,t){let i=this.cache,s=e.length,r=bu(t,s);Mn(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||L0,r[o])}function ab(n,e,t){let i=this.cache,s=e.length,r=bu(t,s);Mn(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Mu(P0):o=D0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function lb(n,e,t){let i=this.cache,s=e.length,r=bu(t,s);Mn(i,r)||(n.uniform1iv(this.addr,r),Sn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||I0,r[o])}function cb(n){switch(n){case 5126:return W1;case 35664:return X1;case 35665:return q1;case 35666:return $1;case 35674:return Y1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return j1;case 35668:case 35672:return Q1;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}var yh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}},bh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},Mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;function h0(n,e){n.seq.push(e),n.map[e.id]=e}function ub(n,e,t){let i=n.name,s=i.length;for(_h.lastIndex=0;;){let r=_h.exec(i),o=_h.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){h0(t,c===void 0?new yh(a,n,e):new bh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Mh(a),h0(t,d)),t=d}}}var Po=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ub(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function f0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var db=37297,hb=0;function fb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var p0=new vt;function pb(n){Rt._getMatrix(p0,Rt.workingColorSpace,n);let e=`mat3( ${p0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(n)){case aa:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function m0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fb(n.getShaderSource(e),a)}else return r}function mb(n,e){let t=pb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var gb={[Xd]:"Linear",[qd]:"Reinhard",[$d]:"Cineon",[Yd]:"ACESFilmic",[Zd]:"AgX",[Fa]:"Neutral",[Kd]:"Custom"};function xb(n,e){let t=gb[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vu=new A;function _b(){Rt.getLuminanceCoefficients(vu);let n=vu.x.toFixed(4),e=vu.y.toFixed(4),t=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function yb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Xa(n){return n!==""}function g0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function x0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(n){return n.replace(Mb,Sb)}function Sb(n,e){let t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sh(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(n){return n.replace(wb,Eb)}function Eb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Tb={[Rr]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Ab(n){return Tb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rb={[Ro]:"ENVMAP_MODE_REFRACTION"};function Cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pb={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function Ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[n.combine]||"ENVMAP_BLENDING_NONE"}function Lb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ab(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Cb(t),d=Ib(t),h=vb(t),p=yb(r),f=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xa).join(`
`),m.length>0&&(m+=`
`)):(x=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),m=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?wt.tonemapping_pars_fragment:"",t.toneMapping!==os?xb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,mb("linearToOutputTexel",t.outputColorSpace),_b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),o=Sh(o),o=g0(o,t),o=x0(o,t),a=Sh(a),a=g0(a,t),a=x0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,b=g+m+a,v=f0(s,s.VERTEX_SHADER,_),w=f0(s,s.FRAGMENT_SHADER,b);s.attachShader(f,v),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function M(R){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(f)||"",F=s.getShaderInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",L=D.trim(),W=F.trim(),V=B.trim(),q=!0,Y=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,v,w);else{let Z=m0(s,v,"vertex"),ne=m0(s,w,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+Z+`
`+ne)}else L!==""?ht("WebGLProgram: Program Info Log:",L):(W===""||V==="")&&(Y=!1);Y&&(R.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:V,prefix:m}})}s.deleteShader(v),s.deleteShader(w),y=new Po(s,f),S=bb(s,f)}let y;this.getUniforms=function(){return y===void 0&&M(this),y};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(f,db)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=w,this}var Db=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eh(e),t.set(e,i)),i}},Eh=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Nb(n){return n===nr||n===Ga||n===Va}function Ub(n,e,t,i,s,r){let o=new mo,a=new wh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,S,N,R,D,F){let B=R.fog,L=D.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||W,V),Y=h[y.type],Z=i.precision;y.precision!==null&&(Z=i.getMaxPrecision(y.precision),Z!==y.precision&&ht("WebGLProgram.getParameters:",y.precision,"not supported, using",Z,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=ne!==void 0?ne.length:0,Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let ze,ie,Te,De;if(Y){let Xe=ls[Y];ze=Xe.vertexShader,ie=Xe.fragmentShader}else{ze=y.vertexShader,ie=y.fragmentShader;let Xe=a.getVertexShaderStage(y),Tt=a.getFragmentShaderStage(y);a.update(y,Xe,Tt),Te=Xe.id,De=Tt.id}let se=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),Me=D.isInstancedMesh===!0,Ke=D.isBatchedMesh===!0,Pe=!!y.map,$e=!!y.matcap,Ie=!!q,de=Ie&&q.isPMREMTexture===!0,z=!!y.aoMap,X=!!y.lightMap,oe=!!y.bumpMap&&y.wireframe===!1,$=!!y.normalMap,te=!!y.displacementMap,Se=!!y.emissiveMap,U=!!y.metalnessMap,Q=!!y.roughnessMap,ae=y.anisotropy>0,I=y.clearcoat>0,Qe=y.diffuseRoughness>0,it=y.dispersion>0,pt=y.retroreflectivity>0,Ae=y.iridescence>0,xe=y.sheen>0,be=y.transmission>0,Ve=ae&&!!y.anisotropyMap,C=I&&!!y.clearcoatMap,E=I&&!!y.clearcoatNormalMap,G=I&&!!y.clearcoatRoughnessMap,ve=Qe&&!!y.diffuseRoughnessMap,ue=Ae&&!!y.iridescenceMap,Ne=Ae&&!!y.iridescenceThicknessMap,Ge=xe&&!!y.sheenColorMap,pe=xe&&!!y.sheenRoughnessMap,me=!!y.specularMap,He=!!y.specularColorMap,H=!!y.specularIntensityMap,fe=be&&!!y.transmissionMap,le=be&&!!y.thicknessMap,ke=!!y.gradientMap,Ue=!!y.alphaMap,Be=y.alphaTest>0,et=!!y.alphaHash,We=!!y.extensions,Ce=os;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ce=n.toneMapping);let je=de?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,xt={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:ze,fragmentShader:ie,defines:y.defines,customVertexShaderID:Te,customFragmentShaderID:De,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Z,batching:Ke,batchingColor:Ke&&D._colorsTexture!==null,instancing:Me,instancingColor:Me&&D.instanceColor!==null,instancingMorph:Me&&D.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:$e,envMap:Ie,envMapMode:Ie&&q.mapping,envMapPMREM:de,envMapMaxLod:de?je.length-1:null,envMapSize:de?je[0].width:null,aoMap:z,lightMap:X,bumpMap:oe,normalMap:$,displacementMap:te,emissiveMap:Se,normalMapObjectSpace:$&&y.normalMapType===kp,normalMapTangentSpace:$&&y.normalMapType===pu,packedNormalMap:$&&y.normalMapType===pu&&Nb(y.normalMap.format),metalnessMap:U,roughnessMap:Q,anisotropy:ae,anisotropyMap:Ve,clearcoat:I,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Qe,diffuseRoughnessMap:ve,dispersion:it,retroreflection:pt,iridescence:Ae,iridescenceMap:ue,iridescenceThicknessMap:Ne,sheen:xe,sheenColorMap:Ge,sheenRoughnessMap:pe,specularMap:me,specularColorMap:He,specularIntensityMap:H,transmission:be,transmissionMap:fe,thicknessMap:le,gradientMap:ke,opaque:y.transparent===!1&&y.blending===rs&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Be,alphaHash:et,combine:y.combine,mapUv:Pe&&p(y.map.channel),aoMapUv:z&&p(y.aoMap.channel),lightMapUv:X&&p(y.lightMap.channel),bumpMapUv:oe&&p(y.bumpMap.channel),normalMapUv:$&&p(y.normalMap.channel),displacementMapUv:te&&p(y.displacementMap.channel),emissiveMapUv:Se&&p(y.emissiveMap.channel),metalnessMapUv:U&&p(y.metalnessMap.channel),roughnessMapUv:Q&&p(y.roughnessMap.channel),anisotropyMapUv:Ve&&p(y.anisotropyMap.channel),clearcoatMapUv:C&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&p(y.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&p(y.sheenRoughnessMap.channel),specularMapUv:me&&p(y.specularMap.channel),specularColorMapUv:He&&p(y.specularColorMap.channel),specularIntensityMapUv:H&&p(y.specularIntensityMap.channel),transmissionMapUv:fe&&p(y.transmissionMap.channel),thicknessMapUv:le&&p(y.thicknessMap.channel),alphaMapUv:Ue&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||ae),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Pe||Ue),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&$===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:K,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(Xe=>Xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&Rt.getTransfer(y.map.colorSpace)===Ht,decodeVideoTextureEmissive:Se&&y.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(y.emissiveMap.colorSpace)===Ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let S=h[y.type],N;if(S){let R=ls[S];N=xu.clone(R.uniforms)}else N=y.uniforms;return N}function b(y,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new Lb(n,S,y,s),c.push(N),u.set(S,N)),N}function v(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function M(){a.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:M}}function Fb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ob(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function b0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,f,x,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:p,material:f,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=p,_.material=f,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,p,f,x,m,g,_){_.reversedDepth===!0&&(m=-m);let b=a(h,p,f,x,m,g);f.transmission>0?i.push(b):f.transparent===!0?s.push(b):t.push(b)}function c(h,p,f,x,m,g){let _=a(h,p,f,x,m,g);f.transmission>0?i.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,p){t.length>1&&t.sort(h||Ob),i.length>1&&i.sort(p||y0),s.length>1&&s.sort(p||y0)}function d(){for(let h=e,p=n.length;h<p;h++){let f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function kb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new b0,n.set(i,[o])):s>=r.length?(o=new b0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new Oe};break;case"SpotLight":t={position:new A,direction:new A,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new A,halfWidth:new A,halfHeight:new A};break}return n[e.id]=t,t}}}function zb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Hb=0;function Gb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vb(n){let e=new Bb,t=zb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let s=new A,r=new bt,o=new bt;function a(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,f=0,x=0,m=0,g=0,_=0,b=0,v=0,w=0,M=0,y=0,S=0,N=0,R=0;c.sort(Gb);for(let F=0,B=c.length;F<B;F++){let L=c[F],W=L.color,V=L.intensity,q=L.distance,Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===nr?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=W.r*V,d+=W.g*V,h+=W.b*V;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],V);R++}else if(L.isSunLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[f]=re,i.sunShadowMap[f]=Y;let Ee=ne.getViewportCount();for(let ze=0;ze<Ee;ze++)i.sunShadowMatrix[x+ze]=ne.getMatrix(ze),i.sunShadowCascade[x+ze]=ne._cascadeData[ze];x+=Ee,f++}i.sun[p]=Z,p++}else if(L.isDirectionalLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=L.shadow.matrix,w++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(W).multiplyScalar(V),Z.distance=q,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[_]=Z;let ne=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,ne.updateMatrices(L),L.castShadow&&N++),i.spotLightMatrix[_]=ne.matrix,L.castShadow){let re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,i.spotShadow[_]=re,i.spotShadowMap[_]=Y,y++}_++}else if(L.isRectAreaLight){let Z=e.get(L);Z.color.copy(W).multiplyScalar(V),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=Z,b++}else if(L.isPointLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let ne=L.shadow,re=t.get(L);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,i.pointShadow[g]=re,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(V),Z.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[v]=Z,v++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ze.LTC_FLOAT_1,i.rectAreaLTC2=Ze.LTC_FLOAT_2):(i.rectAreaLTC1=Ze.LTC_HALF_1,i.rectAreaLTC2=Ze.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==v||D.numSunShadows!==f||D.numDirectionalShadows!==w||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==S||D.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=v,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=R,D.sunLength=p,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=v,D.numSunShadows=f,D.numDirectionalShadows=w,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=S,D.numLightProbes=R,i.version=Hb++)}function l(c,u){let d=0,h=0,p=0,f=0,x=0,m=0,g=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let v=c[_];if(v.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),h++}else if(v.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function M0(n){let e=new Vb(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wb(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new M0(n),e.set(s,[a])):r>=o.length?(a=new M0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
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
}`,$b=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Yb=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],S0=new bt,Wa=new A,vh=new A;function Kb(n,e,t){let i=new qs,s=new _e,r=new _e,o=new Zt,a=new fc,l=new pc,c={},u=t.maxTextureSize,d={[ss]:kn,[kn]:ss,[Jt]:Jt},h=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let f=new Nt;f.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new rt(f,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let g=this.type;this.render=function(M,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===_p&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let N=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Cr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=M.length;L<W;L++){let V=M[L],q=V.shadow;if(q===void 0){ht("WebGLShadowMap:",V,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Y=q.getFrameExtents();s.multiply(Y),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===To){if(V.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Un(s.x,s.y,{format:nr,type:Qn,minFilter:un,magFilter:un,generateMipmaps:!1}),q.map.texture.name=V.name+".shadowMap",q.map.depthTexture=new As(s.x,s.y,Si),q.map.depthTexture.name=V.name+".shadowMapDepth",q.map.depthTexture.format=ws,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Rn,q.map.depthTexture.magFilter=Rn}else V.isPointLight?(q.map=new qa(s.x),q.map.depthTexture=new va(s.x,Hi)):(q.map=new Un(s.x,s.y),q.map.depthTexture=new As(s.x,s.y,Hi)),q.map.depthTexture.name=V.name+".shadowMap",q.map.depthTexture.format=ws,this.type===Rr?(q.map.depthTexture.compareFunction=Z?rh:sh,q.map.depthTexture.minFilter=un,q.map.depthTexture.magFilter=un):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Rn,q.map.depthTexture.magFilter=Rn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();V.isPointLight!==!0&&q.updateMatrices(V,S);let re=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:S.layers;for(let Ee=0;Ee<ne;Ee++){let ze=q.getCamera(Ee);if(V.isPointLight){let ie=q.camera,Te=q.matrix,De=V.distance||ie.far;De!==ie.far&&(ie.far=De,ie.updateProjectionMatrix()),Wa.setFromMatrixPosition(V.matrixWorld),ie.position.copy(Wa),vh.copy(ie.position),vh.add($b[Ee]),ie.up.copy(Yb[Ee]),ie.lookAt(vh),ie.updateMatrixWorld(),Te.makeTranslation(-Wa.x,-Wa.y,-Wa.z),S0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),q._frustum.setFromProjectionMatrix(S0,ie.coordinateSystem,ie.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(q.map),n.clear());let ie=q.getViewport(Ee);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),F.viewport(o)}i=q.getFrustum(Ee),v(y,S,ze,V,re,this.type)}q.isPointLightShadow!==!0&&this.type===To&&_(q,S),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(N,R,D)};function _(M,y){let S=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null?M.mapPass=new Un(s.x,s.y,{format:nr,type:Qn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(y,null,S,h,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value.set(M.map.width,M.map.height),p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(y,null,S,p,x,null)}function b(M,y,S,N){let R=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let F=R.uuid,B=y.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let W=L[B];W===void 0&&(W=R.clone(),L[B]=W,y.addEventListener("dispose",w)),R=W}if(R.visible=y.visible,R.wireframe=y.wireframe,N===To?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:d[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=S}return R}function v(M,y,S,N,R,D){if(M.visible===!1)return;if(M.layers.test(R)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&D===To)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let L=e.update(M),W=M.material;if(Array.isArray(W)){let V=L.groups;for(let q=0,Y=V.length;q<Y;q++){let Z=V[q],ne=W[Z.materialIndex];if(ne&&ne.visible){let re=b(M,ne,N,D);M.onBeforeShadow(n,M,y,S,L,re,Z),n.renderBufferDirect(S,null,L,re,M,Z),M.onAfterShadow(n,M,y,S,L,re,Z)}}}else if(W.visible){let V=b(M,W,N,D);M.onBeforeShadow(n,M,y,S,L,V,null),n.renderBufferDirect(S,null,L,V,M,null),M.onAfterShadow(n,M,y,S,L,V,null)}}let B=M.children;for(let L=0,W=B.length;L<W;L++)v(B[L],y,S,N,R,D)}function w(M){M.target.removeEventListener("dispose",w);for(let S in c){let N=c[S],R=M.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function Zb(n,e){function t(){let H=!1,fe=new Zt,le=null,ke=new Zt(0,0,0,0);return{setMask:function(Ue){le!==Ue&&!H&&(n.colorMask(Ue,Ue,Ue,Ue),le=Ue)},setLocked:function(Ue){H=Ue},setClear:function(Ue,Be,et,We,Ce){Ce===!0&&(Ue*=We,Be*=We,et*=We),fe.set(Ue,Be,et,We),ke.equals(fe)===!1&&(n.clearColor(Ue,Be,et,We),ke.copy(fe))},reset:function(){H=!1,le=null,ke.set(-1,0,0,0)}}}function i(){let H=!1,fe=!1,le=null,ke=null,Ue=null;return{setReversed:function(Be){if(fe!==Be){let et=e.get("EXT_clip_control");Be?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),fe=Be;let We=Ue;Ue=null,this.setClear(We)}},getReversed:function(){return fe},setTest:function(Be){Be?K(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Be){le!==Be&&!H&&(n.depthMask(Be),le=Be)},setFunc:function(Be){if(fe&&(Be=Yp[Be]),ke!==Be){switch(Be){case ql:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case Yl:n.depthFunc(n.LESS);break;case co:n.depthFunc(n.LEQUAL);break;case Kl:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Jl:n.depthFunc(n.GREATER);break;case jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=Be}},setLocked:function(Be){H=Be},setClear:function(Be){Ue!==Be&&(Ue=Be,fe&&(Be=1-Be),n.clearDepth(Be))},reset:function(){H=!1,le=null,ke=null,Ue=null,fe=!1}}}function s(){let H=!1,fe=null,le=null,ke=null,Ue=null,Be=null,et=null,We=null,Ce=null;return{setTest:function(je){H||(je?K(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(je){fe!==je&&!H&&(n.stencilMask(je),fe=je)},setFunc:function(je,xt,Xe){(le!==je||ke!==xt||Ue!==Xe)&&(n.stencilFunc(je,xt,Xe),le=je,ke=xt,Ue=Xe)},setOp:function(je,xt,Xe){(Be!==je||et!==xt||We!==Xe)&&(n.stencilOp(je,xt,Xe),Be=je,et=xt,We=Xe)},setLocked:function(je){H=je},setClear:function(je){Ce!==je&&(n.clearStencil(je),Ce=je)},reset:function(){H=!1,fe=null,le=null,ke=null,Ue=null,Be=null,et=null,We=null,Ce=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,b=null,v=null,w=null,M=null,y=null,S=new Oe(0,0,0),N=0,R=!1,D=null,F=null,B=null,L=null,W=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=Y>=2);let ne=null,re={},Ee=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),ie=new Zt().fromArray(Ee),Te=new Zt().fromArray(ze);function De(H,fe,le,ke){let Ue=new Uint8Array(4),Be=n.createTexture();n.bindTexture(H,Be),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<le;et++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(fe+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Be}let se={};se[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(co),oe(!1),$(zd),K(n.CULL_FACE),z(Cr);function K(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Me(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Ke(H,fe){return h[H]!==fe?(n.bindFramebuffer(H,fe),h[H]=fe,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(H,fe){let le=f,ke=!1;if(H){le=p.get(fe),le===void 0&&(le=[],p.set(fe,le));let Ue=H.textures;if(le.length!==Ue.length||le[0]!==n.COLOR_ATTACHMENT0){for(let Be=0,et=Ue.length;Be<et;Be++)le[Be]=n.COLOR_ATTACHMENT0+Be;le.length=Ue.length,ke=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ke=!0);ke&&n.drawBuffers(le)}function $e(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let Ie={[Pr]:n.FUNC_ADD,[vp]:n.FUNC_SUBTRACT,[yp]:n.FUNC_REVERSE_SUBTRACT};Ie[bp]=n.MIN,Ie[Mp]=n.MAX;let de={[Ac]:n.ZERO,[er]:n.ONE,[Sp]:n.SRC_COLOR,[Vd]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[Ap]:n.DST_COLOR,[Ep]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[tr]:n.ONE_MINUS_SRC_ALPHA,[Rp]:n.ONE_MINUS_DST_COLOR,[Tp]:n.ONE_MINUS_DST_ALPHA,[Pp]:n.CONSTANT_COLOR,[Ip]:n.ONE_MINUS_CONSTANT_COLOR,[Lp]:n.CONSTANT_ALPHA,[Dp]:n.ONE_MINUS_CONSTANT_ALPHA};function z(H,fe,le,ke,Ue,Be,et,We,Ce,je){if(H===Cr){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(K(n.BLEND),m=!0),H!==Ao){if(H!==g||je!==R){if((_!==Pr||w!==Pr)&&(n.blendEquation(n.FUNC_ADD),_=Pr,w=Pr),je)switch(H){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pn:n.blendFunc(n.ONE,n.ONE);break;case Hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:mt("WebGLState: Invalid blending: ",H);break}else switch(H){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hd:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",H);break}b=null,v=null,M=null,y=null,S.set(0,0,0),N=0,g=H,R=je}return}Ue=Ue||fe,Be=Be||le,et=et||ke,(fe!==_||Ue!==w)&&(n.blendEquationSeparate(Ie[fe],Ie[Ue]),_=fe,w=Ue),(le!==b||ke!==v||Be!==M||et!==y)&&(n.blendFuncSeparate(de[le],de[ke],de[Be],de[et]),b=le,v=ke,M=Be,y=et),(We.equals(S)===!1||Ce!==N)&&(n.blendColor(We.r,We.g,We.b,Ce),S.copy(We),N=Ce),g=H,R=!1}function X(H,fe){H.side===Jt?Me(n.CULL_FACE):K(n.CULL_FACE);let le=H.side===kn;fe&&(le=!le),oe(le),H.blending===rs&&H.transparent===!1?z(Cr):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ke=H.stencilWrite;a.setTest(ke),ke&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Se(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function $(H){H!==gp?(K(n.CULL_FACE),H!==F&&(H===zd?n.cullFace(n.BACK):H===xp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),F=H}function te(H){H!==B&&(q&&n.lineWidth(H),B=H)}function Se(H,fe,le){H?(K(n.POLYGON_OFFSET_FILL),(L!==fe||W!==le)&&(L=fe,W=le,o.getReversed()&&(fe=-fe,le=-le),n.polygonOffset(fe,le))):Me(n.POLYGON_OFFSET_FILL)}function U(H){H?K(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Q(H){H===void 0&&(H=n.TEXTURE0+V-1),ne!==H&&(n.activeTexture(H),ne=H)}function ae(H,fe,le){le===void 0&&(ne===null?le=n.TEXTURE0+V-1:le=ne);let ke=re[le];ke===void 0&&(ke={type:void 0,texture:void 0},re[le]=ke),(ke.type!==H||ke.texture!==fe)&&(ne!==le&&(n.activeTexture(le),ne=le),n.bindTexture(H,fe||se[H]),ke.type=H,ke.texture=fe)}function I(){let H=re[ne];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Qe(){try{n.compressedTexImage2D(...arguments)}catch(H){mt("WebGLState:",H)}}function it(){try{n.compressedTexImage3D(...arguments)}catch(H){mt("WebGLState:",H)}}function pt(){try{n.texSubImage2D(...arguments)}catch(H){mt("WebGLState:",H)}}function Ae(){try{n.texSubImage3D(...arguments)}catch(H){mt("WebGLState:",H)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){mt("WebGLState:",H)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(H){mt("WebGLState:",H)}}function Ve(){try{n.texStorage2D(...arguments)}catch(H){mt("WebGLState:",H)}}function C(){try{n.texStorage3D(...arguments)}catch(H){mt("WebGLState:",H)}}function E(){try{n.texImage2D(...arguments)}catch(H){mt("WebGLState:",H)}}function G(){try{n.texImage3D(...arguments)}catch(H){mt("WebGLState:",H)}}function ve(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function ue(H,fe){d[H]!==fe&&(n.pixelStorei(H,fe),d[H]=fe)}function Ne(H){ie.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function Ge(H){Te.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function pe(H,fe){let le=c.get(fe);le===void 0&&(le=new WeakMap,c.set(fe,le));let ke=le.get(H);ke===void 0&&(ke=n.getUniformBlockIndex(fe,H.name),n.uniformBlockBinding(fe,ke,ke),le.set(H,ke))}function me(H,fe,le){let Ue=c.get(fe).get(H);l[Ue]!==le&&(n.bindBufferBase(n.UNIFORM_BUFFER,Ue,le),l[Ue]=le)}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},h={},l={},p=new WeakMap,f=[],x=null,m=!1,g=null,_=null,b=null,v=null,w=null,M=null,y=null,S=new Oe(0,0,0),N=0,R=!1,D=null,F=null,B=null,L=null,W=null,ie.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:Me,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:$e,setBlending:z,setMaterial:X,setFlipSided:oe,setCullFace:$,setLineWidth:te,setPolygonOffset:Se,setScissorTest:U,activeTexture:Q,bindTexture:ae,unbindTexture:I,compressedTexImage2D:Qe,compressedTexImage3D:it,texImage2D:E,texImage3D:G,pixelStorei:ue,getParameter:ve,updateUBOMapping:pe,uniformBlockBinding:me,texStorage2D:Ve,texStorage3D:C,texSubImage2D:pt,texSubImage3D:Ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:be,scissor:Ne,viewport:Ge,reset:He}}function Jb(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,d=new Set,h,p=new WeakMap,f=new Set,x=new FinalizationRegistry(C=>f.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):la("canvas")}function _(C,E,G){let ve=1,ue=Ve(C);if((ue.width>G||ue.height>G)&&(ve=G/Math.max(ue.width,ue.height)),ve<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ne=Math.floor(ve*ue.width),Ge=Math.floor(ve*ue.height);h===void 0&&(h=g(Ne,Ge));let pe=E?g(Ne,Ge):h;return pe.width=Ne,pe.height=Ge,pe.getContext("2d").drawImage(C,0,0,Ne,Ge),ht("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Ne+"x"+Ge+")."),pe}else return"data"in C&&ht("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,E,G,ve,ue,Ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ge;ve&&(Ge=e.get("EXT_texture_norm16"),Ge||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===n.RED&&(G===n.FLOAT&&(pe=n.R32F),G===n.HALF_FLOAT&&(pe=n.R16F),G===n.UNSIGNED_BYTE&&(pe=n.R8),G===n.UNSIGNED_SHORT&&Ge&&(pe=Ge.R16_EXT),G===n.SHORT&&Ge&&(pe=Ge.R16_SNORM_EXT)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.R8UI),G===n.UNSIGNED_SHORT&&(pe=n.R16UI),G===n.UNSIGNED_INT&&(pe=n.R32UI),G===n.BYTE&&(pe=n.R8I),G===n.SHORT&&(pe=n.R16I),G===n.INT&&(pe=n.R32I)),E===n.RG&&(G===n.FLOAT&&(pe=n.RG32F),G===n.HALF_FLOAT&&(pe=n.RG16F),G===n.UNSIGNED_BYTE&&(pe=n.RG8),G===n.UNSIGNED_SHORT&&Ge&&(pe=Ge.RG16_EXT),G===n.SHORT&&Ge&&(pe=Ge.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RG8UI),G===n.UNSIGNED_SHORT&&(pe=n.RG16UI),G===n.UNSIGNED_INT&&(pe=n.RG32UI),G===n.BYTE&&(pe=n.RG8I),G===n.SHORT&&(pe=n.RG16I),G===n.INT&&(pe=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),G===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),G===n.UNSIGNED_INT&&(pe=n.RGB32UI),G===n.BYTE&&(pe=n.RGB8I),G===n.SHORT&&(pe=n.RGB16I),G===n.INT&&(pe=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),G===n.UNSIGNED_INT&&(pe=n.RGBA32UI),G===n.BYTE&&(pe=n.RGBA8I),G===n.SHORT&&(pe=n.RGBA16I),G===n.INT&&(pe=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_SHORT&&Ge&&(pe=Ge.RGB16_EXT),G===n.SHORT&&Ge&&(pe=Ge.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),E===n.RGBA){let me=Ne?aa:Rt.getTransfer(ue);G===n.FLOAT&&(pe=n.RGBA32F),G===n.HALF_FLOAT&&(pe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(pe=me===Ht?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&Ge&&(pe=Ge.RGBA16_EXT),G===n.SHORT&&Ge&&(pe=Ge.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function y(C,E){let G;return C?E===null||E===Hi||E===Lr?G=n.DEPTH24_STENCIL8:E===Si?G=n.DEPTH32F_STENCIL8:E===Co&&(G=n.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===Lr?G=n.DEPTH_COMPONENT24:E===Si?G=n.DEPTH_COMPONENT32F:E===Co&&(G=n.DEPTH_COMPONENT16),G}function S(C,E){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rn&&C.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function N(C){let E=new WeakRef(C);i.get(C).__ref=E,f.add(E),x.register(C,E,E)}function R(C){let E=i.get(C).__ref;E!==void 0&&(f.delete(E),x.unregister(E))}function D(C){B(C.target)}function F(C){L(C.target)}function B(C){C.removeEventListener("dispose",D),R(C),V(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function L(C){C.removeEventListener("dispose",F),R(C),Y(C)}function W(){for(let C of f){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):B(E))}f.clear(),d.clear()}function V(C){let E=i.get(C);if(E.__webglInit===void 0)return;let G=C.source,ve=p.get(G);if(ve){let ue=ve[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&q(C),Object.keys(ve).length===0&&p.delete(G)}i.remove(C)}function q(C){let E=i.get(C);n.deleteTexture(E.__webglTexture);let G=C.source,ve=p.get(G);delete ve[E.__cacheKey],o.memory.textures--}function Y(C){let E=i.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&B(G),C.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let Ne=0;Ne<E.__webglFramebuffer[ue].length;Ne++)n.deleteFramebuffer(E.__webglFramebuffer[ue][Ne]);else n.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[ue]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ve=C.textures;for(let ue=0,Ne=ve.length;ue<Ne;ue++){let Ge=i.get(ve[ue]);Ge.__webglTexture&&(n.deleteTexture(Ge.__webglTexture),o.memory.textures--),i.remove(ve[ue])}i.remove(C)}let Z=0;function ne(){Z=0}function re(){return Z}function Ee(C){Z=C}function ze(){let C=Z;return C>=s.maxTextures&&ht("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,C}function ie(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Te(C,E){let G=i.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ve=C.image;if(ve===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,C,E);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function De(C,E){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){X(G,C,E);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function se(C,E){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){X(G,C,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function K(C,E){let G=i.get(C);if(C.version>0&&G.__version!==C.version){oe(G,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let Me={[Ss]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},Ke={[Rn]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[Oa]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Pe={[zp]:n.NEVER,[oh]:n.ALWAYS,[Hp]:n.LESS,[sh]:n.LEQUAL,[Gp]:n.EQUAL,[rh]:n.GEQUAL,[Vp]:n.GREATER,[Wp]:n.NOTEQUAL};function $e(C,E){if(E.type===Si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===Pc||E.magFilter===Oa||E.magFilter===zi||E.minFilter===un||E.minFilter===Pc||E.minFilter===Oa||E.minFilter===zi)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Me[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Me[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Me[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Ke[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Ke[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Rn||E.minFilter!==Oa&&E.minFilter!==zi||E.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",D),N(E));let ve=E.source,ue=p.get(ve);ue===void 0&&(ue={},p.set(ve,ue));let Ne=ie(E);if(Ne!==C.__cacheKey){ue[Ne]===void 0&&(ue[Ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[Ne].usedTimes++;let Ge=ue[C.__cacheKey];Ge!==void 0&&(ue[C.__cacheKey].usedTimes--,Ge.usedTimes===0&&q(E)),C.__cacheKey=Ne,C.__webglTexture=ue[Ne].texture}return G}function de(C,E,G){return Math.floor(Math.floor(C/G)/E)}function z(C,E,G,ve){let Ne=C.updateRanges;if(Ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,ve,E.data);else{Ne.sort((H,fe)=>H.start-fe.start);let Ge=0;for(let H=1;H<Ne.length;H++){let fe=Ne[Ge],le=Ne[H],ke=fe.start+fe.count,Ue=de(le.start,E.width,4),Be=de(fe.start,E.width,4);le.start<=ke+1&&Ue===Be&&de(le.start+le.count-1,E.width,4)===Ue?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++Ge,Ne[Ge]=le)}Ne.length=Ge+1;let pe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),He=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let H=0,fe=Ne.length;H<fe;H++){let le=Ne[H],ke=Math.floor(le.start/4),Ue=Math.ceil(le.count/4),Be=ke%E.width,et=Math.floor(ke/E.width),We=Ue,Ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(n.UNPACK_SKIP_ROWS,et),t.texSubImage2D(n.TEXTURE_2D,0,Be,et,We,Ce,G,ve,E.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,He)}}function X(C,E,G){let ve=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=n.TEXTURE_3D);let ue=Ie(C,E),Ne=E.source;t.bindTexture(ve,C.__webglTexture,n.TEXTURE0+G);let Ge=i.get(Ne);if(Ne.version!==Ge.__version||ue===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Ce=Rt.getPrimaries(Rt.workingColorSpace),je=E.colorSpace===Ls?null:Rt.getPrimaries(E.colorSpace),xt=E.colorSpace===Ls||Ce===je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=_(E.image,!1,s.maxTextureSize);me=be(E,me);let He=r.convert(E.format,E.colorSpace),H=r.convert(E.type),fe=M(E.internalFormat,He,H,E.normalized,E.colorSpace,E.isVideoTexture);$e(ve,E);let le,ke=E.mipmaps,Ue=E.isVideoTexture!==!0,Be=Ge.__version===void 0||ue===!0,et=Ne.dataReady,We=S(E,me);if(E.isDepthTexture)fe=y(E.format===Is,E.type),Be&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,fe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,fe,me.width,me.height,0,He,H,null));else if(E.isDataTexture)if(ke.length>0){Ue&&Be&&t.texStorage2D(n.TEXTURE_2D,We,fe,ke[0].width,ke[0].height);for(let Ce=0,je=ke.length;Ce<je;Ce++)le=ke[Ce],Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,He,H,le.data):t.texImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,He,H,le.data);E.generateMipmaps=!1}else Ue?(Be&&t.texStorage2D(n.TEXTURE_2D,We,fe,me.width,me.height),et&&z(E,me,He,H)):t.texImage2D(n.TEXTURE_2D,0,fe,me.width,me.height,0,He,H,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,fe,ke[0].width,ke[0].height,me.depth);for(let Ce=0,je=ke.length;Ce<je;Ce++)if(le=ke[Ce],E.format!==Gi)if(He!==null)if(Ue){if(et)if(E.layerUpdates.size>0){let xt=xh(le.width,le.height,E.format,E.type);for(let Xe of E.layerUpdates){let Tt=le.data.subarray(Xe*xt/le.data.BYTES_PER_ELEMENT,(Xe+1)*xt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,Xe,le.width,le.height,1,He,Tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,me.depth,He,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ce,fe,le.width,le.height,me.depth,0,le.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?et&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,me.depth,He,H,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ce,fe,le.width,le.height,me.depth,0,He,H,le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ue&&Be&&t.texStorage2D(n.TEXTURE_2D,We,fe,ke[0].width,ke[0].height);for(let Ce=0,je=ke.length;Ce<je;Ce++)le=ke[Ce],E.format!==Gi?He!==null?Ue?et&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,He,le.data):t.compressedTexImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,le.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,le.width,le.height,He,H,le.data):t.texImage2D(n.TEXTURE_2D,Ce,fe,le.width,le.height,0,He,H,le.data)}else if(E.isDataArrayTexture)if(Ue){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,We,fe,me.width,me.height,me.depth),et)if(E.layerUpdates.size>0){let Ce=xh(me.width,me.height,E.format,E.type);for(let je of E.layerUpdates){let xt=me.data.subarray(je*Ce/me.data.BYTES_PER_ELEMENT,(je+1)*Ce/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,je,me.width,me.height,1,He,H,xt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,He,H,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,me.width,me.height,me.depth,0,He,H,me.data);else if(E.isData3DTexture)Ue?(Be&&t.texStorage3D(n.TEXTURE_3D,We,fe,me.width,me.height,me.depth),et&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,He,H,me.data)):t.texImage3D(n.TEXTURE_3D,0,fe,me.width,me.height,me.depth,0,He,H,me.data);else if(E.isFramebufferTexture){if(Be)if(Ue)t.texStorage2D(n.TEXTURE_2D,We,fe,me.width,me.height);else{let Ce=me.width,je=me.height;for(let xt=0;xt<We;xt++)t.texImage2D(n.TEXTURE_2D,xt,fe,Ce,je,0,He,H,null),Ce>>=1,je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let Ce=n.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),me.parentNode!==Ce){Ce.appendChild(me),d.add(E),Ce.onpaint=je=>{let xt=je.changedElements;for(let Xe of d)xt.includes(Xe.image)&&(Xe.needsUpdate=!0)},Ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{let xt=n.RGBA,Xe=n.RGBA,Tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xt,Xe,Tt,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ue&&Be){let Ce=Ve(ke[0]);t.texStorage2D(n.TEXTURE_2D,We,fe,Ce.width,Ce.height)}for(let Ce=0,je=ke.length;Ce<je;Ce++)le=ke[Ce],Ue?et&&t.texSubImage2D(n.TEXTURE_2D,Ce,0,0,He,H,le):t.texImage2D(n.TEXTURE_2D,Ce,fe,He,H,le);E.generateMipmaps=!1}else if(Ue){if(Be){let Ce=Ve(me);t.texStorage2D(n.TEXTURE_2D,We,fe,Ce.width,Ce.height)}et&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,H,me)}else t.texImage2D(n.TEXTURE_2D,0,fe,He,H,me);b(E)&&E.mipmapsAutoUpdate===!0&&v(ve),Ge.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function oe(C,E,G){if(E.image.length!==6)return;let ve=Ie(C,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);let Ne=i.get(ue);if(ue.version!==Ne.__version||ve===!0){t.activeTexture(n.TEXTURE0+G);let Ge=Rt.getPrimaries(Rt.workingColorSpace),pe=E.colorSpace===Ls?null:Rt.getPrimaries(E.colorSpace),me=E.colorSpace===Ls||Ge===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let He=E.isCompressedTexture||E.image[0].isCompressedTexture,H=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let Xe=0;Xe<6;Xe++)!He&&!H?fe[Xe]=_(E.image[Xe],!0,s.maxCubemapSize):fe[Xe]=H?E.image[Xe].image:E.image[Xe],fe[Xe]=be(E,fe[Xe]);let le=fe[0],ke=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),Be=M(E.internalFormat,ke,Ue,E.normalized,E.colorSpace),et=E.isVideoTexture!==!0,We=Ne.__version===void 0||ve===!0,Ce=ue.dataReady,je=S(E,le);$e(n.TEXTURE_CUBE_MAP,E);let xt;if(E.isDepthTexture){if(Be=y(E.format===Is,E.type),We)if(et)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Be,le.width,le.height);else for(let Xe=0;Xe<6;Xe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Be,le.width,le.height,0,ke,Ue,null)}else if(He){et&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Be,le.width,le.height);for(let Xe=0;Xe<6;Xe++){xt=fe[Xe].mipmaps;for(let Tt=0;Tt<xt.length;Tt++){let Yt=xt[Tt];E.format!==Gi?ke!==null?et?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt,0,0,Yt.width,Yt.height,ke,Yt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt,Be,Yt.width,Yt.height,0,Yt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt,0,0,Yt.width,Yt.height,ke,Ue,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt,Be,Yt.width,Yt.height,0,ke,Ue,Yt.data)}}}else{if(xt=E.mipmaps,et&&We){xt.length>0&&je++;let Xe=Ve(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,je,Be,Xe.width,Xe.height)}for(let Xe=0;Xe<6;Xe++)if(H){et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,fe[Xe].width,fe[Xe].height,ke,Ue,fe[Xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Be,fe[Xe].width,fe[Xe].height,0,ke,Ue,fe[Xe].data);for(let Tt=0;Tt<xt.length;Tt++){let $n=xt[Tt].image[Xe].image;et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt+1,0,0,$n.width,$n.height,ke,Ue,$n.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt+1,Be,$n.width,$n.height,0,ke,Ue,$n.data)}}else{et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,ke,Ue,fe[Xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Be,ke,Ue,fe[Xe]);for(let Tt=0;Tt<xt.length;Tt++){let Yt=xt[Tt];et?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt+1,0,0,ke,Ue,Yt.image[Xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Tt+1,Be,ke,Ue,Yt.image[Xe])}}}b(E)&&E.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),Ne.__version=ue.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function $(C,E,G,ve,ue,Ne){let Ge=r.convert(G.format,G.colorSpace),pe=r.convert(G.type),me=M(G.internalFormat,Ge,pe,G.normalized,G.colorSpace),He=i.get(E),H=i.get(G);if(H.__renderTarget=E,!He.__hasExternalTextures){let fe=Math.max(1,E.width>>Ne),le=Math.max(1,E.height>>Ne);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,Ne,me,fe,le,E.depth,0,Ge,pe,null):t.texImage2D(ue,Ne,me,fe,le,0,Ge,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ue,H.__webglTexture,0,pt(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,ue,H.__webglTexture,Ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){let ve=E.depthTexture,ue=ve&&ve.isDepthTexture?ve.type:null,Ne=y(E.stencilBuffer,ue),Ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(E),Ne,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(E),Ne,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,C)}else{let ve=E.textures;for(let ue=0;ue<ve.length;ue++){let Ne=ve[ue],Ge=r.convert(Ne.format,Ne.colorSpace),pe=r.convert(Ne.type),me=M(Ne.internalFormat,Ge,pe,Ne.normalized,Ne.colorSpace);Ae(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt(E),me,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(C,E,G){let ve=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=i.get(E.depthTexture);ue.__renderTarget=E;let Ne=ve?E.depthTexture.image[0]:E.depthTexture.image;(!ue.__webglTexture||Ne.width!==E.width||Ne.height!==E.height)&&(Ne.width=E.width,Ne.height=E.height,E.depthTexture.needsUpdate=!0),ve?K(E.depthTexture,0):Te(E.depthTexture,0);let Ge=ue.__webglTexture,pe=pt(E),me=ve?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,He=E.depthTexture.format===Is?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===ws)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,me,Ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,He,me,Ge,0);else if(E.depthTexture.format===Is)Ae(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,He,me,Ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,He,me,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(C){let E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let ve=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){let ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",ue)};ve.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=ve}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ve=0;ve<6;ve++)Se(E.__webglFramebuffer[ve],C,ve);else C.texture.mipmaps.length>0?Se(E.__webglFramebuffer[0],C,0):Se(E.__webglFramebuffer,C,0);else if(G){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=n.createRenderbuffer(),te(E.__webglDepthbuffer[ve],C,!1);else{let ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer[ve];n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ne)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),te(E.__webglDepthbuffer,C,!1);else{let ue=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,Ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(C,E,G){let ve=i.get(C);E!==void 0&&$(ve.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&U(C)}function ae(C){let E=C.texture,G=i.get(C),ve=i.get(E);C.addEventListener("dispose",F),N(C);let ue=C.textures,Ne=C.isWebGLCubeRenderTarget===!0,Ge=ue.length>1;if(Ge||(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=E.version,o.memory.textures++),Ne){G.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0){G.__webglFramebuffer[pe]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[pe][me]=n.createFramebuffer()}else G.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)G.__webglFramebuffer[pe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let pe=0,me=ue.length;pe<me;pe++){let He=i.get(ue[pe]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ae(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ue.length;pe++){let me=ue[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);let He=r.convert(me.format,me.colorSpace),H=r.convert(me.type),fe=M(me.internalFormat,He,H,me.normalized,me.colorSpace,C.isXRRenderTarget===!0),le=pt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),te(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),$e(n.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)$(G.__webglFramebuffer[pe][me],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else $(G.__webglFramebuffer[pe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(E)?v(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ge){for(let pe=0,me=ue.length;pe<me;pe++){let He=ue[pe],H=i.get(He),fe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,H.__webglTexture),$e(fe,He),$(G.__webglFramebuffer,C,He,n.COLOR_ATTACHMENT0+pe,fe,0),b(He)&&v(fe)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ve.__webglTexture),$e(pe,E),E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)$(G.__webglFramebuffer[me],C,E,n.COLOR_ATTACHMENT0,pe,me);else $(G.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,pe,0);b(E)?v(pe):E.mipmaps.length>0&&n.texParameteri(pe,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&U(C)}function I(C){let E=C.textures;for(let G=0,ve=E.length;G<ve;G++){let ue=E[G];if(b(ue)&&ue.mipmapsAutoUpdate===!0){let Ne=w(C),Ge=i.get(ue).__webglTexture;t.bindTexture(Ne,Ge),v(Ne),t.unbindTexture()}}}let Qe=[];function it(C){if(C.samples>0){if(Ae(C)===!1){let E=C.textures,G=C.width,ve=C.height,ue=n.COLOR_BUFFER_BIT,Ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=i.get(C),pe=E.length>1;if(pe)for(let He=0;He<E.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let He=0;He<E.length;He++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);let H=i.get(E[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,H,0)}n.blitFramebuffer(0,0,G,ve,0,0,G,ve,ue,n.NEAREST),l===!0&&(Qe.length=0,Qe.push(n.COLOR_ATTACHMENT0+He),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Qe.push(Ne),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let He=0;He<E.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[He]);let H=i.get(E[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,H,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function pt(C){return Math.min(s.maxSamples,C.samples)}function Ae(C){let E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(C){let E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function be(C,E){let G=C.colorSpace,ve=C.format,ue=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==oa&&G!==Ls&&(Rt.getTransfer(G)===Ht?(ve!==Gi||ue!==ti)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",G)),E}function Ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=Ee,this.setTexture2D=Te,this.setTexture2DArray=De,this.setTexture3D=se,this.setTextureCube=K,this.rebindTextures=Q,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ae,this.dispose=W}function jb(n,e){function t(i,s=Ls){let r,o=Rt.getTransfer(s);if(i===ti)return n.UNSIGNED_BYTE;if(i===Lc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===th)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jd)return n.BYTE;if(i===Qd)return n.SHORT;if(i===Co)return n.UNSIGNED_SHORT;if(i===Ic)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===ih)return n.RGB;if(i===Gi)return n.RGBA;if(i===ws)return n.DEPTH_COMPONENT;if(i===Is)return n.DEPTH_STENCIL;if(i===Nc)return n.RED;if(i===Uc)return n.RED_INTEGER;if(i===nr)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===ka||i===Ba||i===za||i===Ha)if(o===Ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kc||i===Bc||i===zc||i===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gc||i===Vc||i===Wc||i===Xc||i===qc||i===Ga||i===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gc||i===Vc)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xc)return r.COMPRESSED_R11_EAC;if(i===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ga)return r.COMPRESSED_RG11_EAC;if(i===$c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yc||i===Kc||i===Zc||i===Jc||i===jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qc)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===iu)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===su)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===au)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lu||i===cu||i===uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lu)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===du||i===hu||i===Va||i===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===du)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ya(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xt({vertexShader:Qb,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new ft(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends ki{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,f=null,x=typeof XRWebGLBinding<"u",m=new Th,g={},_=t.getContextAttributes(),b=null,v=null,w=[],M=[],y=new _e,S=null,N=null,R=new Nn;R.viewport=new Zt;let D=new Nn;D.viewport=new Zt;let F=[R,D],B=new Tc,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Te=w[ie];return Te===void 0&&(Te=new go,w[ie]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(ie){let Te=w[ie];return Te===void 0&&(Te=new go,w[ie]=Te),Te.getGripSpace()},this.getHand=function(ie){let Te=w[ie];return Te===void 0&&(Te=new go,w[ie]=Te),Te.getHandSpace()};function V(ie){let Te=M.indexOf(ie.inputSource);if(Te===-1)return;let De=w[Te];De!==void 0&&(De.update(ie.inputSource,ie.frame,c||o),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<w.length;ie++){let Te=M[ie];Te!==null&&(M[ie]=null,w[ie].disconnect(Te))}L=null,W=null,m.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(b),p=null,h=null,d=null,s=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),N!==null){let ie=N.camera;ie.fov=N.fov,ie.zoom=N.zoom,ie.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,se=null,K=null;_.depth&&(K=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=_.stencil?Is:ws,se=_.stencil?Lr:Hi);let Me={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Un(h.textureWidth,h.textureHeight,{format:Gi,type:ti,depthTexture:new As(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let De={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Un(p.framebufferWidth,p.framebufferHeight,{format:Gi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ze.setContext(s),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(ie){for(let Te=0;Te<ie.removed.length;Te++){let De=ie.removed[Te],se=M.indexOf(De);se>=0&&(M[se]=null,w[se].disconnect(De))}for(let Te=0;Te<ie.added.length;Te++){let De=ie.added[Te],se=M.indexOf(De);if(se===-1){for(let Me=0;Me<w.length;Me++)if(Me>=M.length){M.push(De),se=Me;break}else if(M[Me]===null){M[Me]=De,se=Me;break}if(se===-1)break}let K=w[se];K&&K.connect(De)}}function Z(ie,Te){Te===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Te.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let Te=ie.near,De=ie.far;m.texture!==null&&(m.depthNear>0&&(Te=m.depthNear),m.depthFar>0&&(De=m.depthFar)),B.near=D.near=R.near=Te,B.far=D.far=R.far=De,(L!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,W=B.far),B.layers.mask=ie.layers.mask|6,R.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let se=ie.parent,K=B.cameras;Z(B,se);for(let Me=0;Me<K.length;Me++)Z(K[Me],se);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&ie.isPerspectiveCamera&&(N={camera:ie,fov:ie.fov,zoom:ie.zoom}),ne(ie,B,se)};function ne(ie,Te,De){De===null?ie.matrix.copy(Te.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Te.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Te.projectionMatrix),ie.projectionMatrixInverse.copy(Te.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=fo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ie){return g[ie]};let re=null;function Ee(ie,Te){if(u=Te.getViewerPose(c||o),f=Te,u!==null){let De=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let se=!1;De.length!==B.cameras.length&&(B.cameras.length=0,se=!0);for(let Pe=0;Pe<De.length;Pe++){let $e=De[Pe],Ie=null;if(p!==null)Ie=p.getViewport($e);else{let z=d.getViewSubImage(h,$e);Ie=z.viewport,Pe===0&&(e.setRenderTargetTextures(v,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(v))}let de=F[Pe];de===void 0&&(de=new Nn,de.layers.enable(Pe),de.viewport=new Zt,F[Pe]=de),de.matrix.fromArray($e.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray($e.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Pe===0&&(B.matrix.copy(de.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),se===!0&&B.cameras.push(de)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Pe=d.getDepthInformation(De[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(K&&K.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Pe=0;Pe<De.length;Pe++){let $e=De[Pe].camera;if($e){let Ie=g[$e];Ie||(Ie=new ya,g[$e]=Ie);let de=d.getCameraImage($e);Ie.sourceTexture=de}}}}for(let De=0;De<w.length;De++){let se=M[De],K=w[De];se!==null&&K!==void 0&&K.update(se,Te,c||o)}re&&re(ie,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),f=null}let ze=new w0;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){re=ie},this.dispose=function(){}}},tM=new bt,N0=new vt;N0.set(-1,0,0,0,1,0,0,0,1);function nM(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,ph(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),f(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===kn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===kn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),b=_.envMap,v=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(N0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function f(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iM(n,e,t,i){let s={},r={};function o(_,b){let v=b.program;i.uniformBlockBinding(_,v,s[_.id])}function a(_,b){let v=s[_.id];v===void 0&&(f(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let w=b.program;i.updateUBOMapping(_,w);let M=e.render.frame;r[_.id]!==M&&(c(_),r[_.id]=M)}function l(_){let b=n.createBuffer(),v=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,w),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],v=_.uniforms,w=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let M=0,y=v.length;M<y;M++){let S=v[M];if(Array.isArray(S))for(let N=0,R=S.length;N<R;N++)u(S[N],M,N,w);else u(S,M,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,v,w){if(h(_,b,v,w)===!0){let M=_.__offset,y=_.value;if(Array.isArray(y)){let S=0;for(let N=0;N<y.length;N++){let R=y[N],D=x(R,!0);d(R,_.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,_.__data)}}function d(_,b,v){typeof _=="number"||typeof _=="boolean"?b[v]=_:_.isMatrix3?(b[v]=_.elements[0],b[v+1]=_.elements[1],b[v+2]=_.elements[2],b[v+3]=0,b[v+4]=_.elements[3],b[v+5]=_.elements[4],b[v+6]=_.elements[5],b[v+7]=0,b[v+8]=_.elements[6],b[v+9]=_.elements[7],b[v+10]=_.elements[8],b[v+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-v),v):_.toArray(b,v)}function h(_,b,v,w){let M=_.value,y=b+"_"+v;if(Array.isArray(M)){w[y]===void 0&&(w[y]=[]);let S=w[y],N=!1;for(let R=0;R<M.length;R++)p(M[R],S,R)===!0&&(N=!0);return N}return p(M,w,y)}function p(_,b,v){if(b[v]===void 0)return typeof _=="number"||typeof _=="boolean"?b[v]=_:ArrayBuffer.isView(_)?b[v]=_.slice():b[v]=_.clone(),!0;{let w=b[v];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return b[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function f(_){let b=_.uniforms,v=0,w=16;for(let y=0,S=b.length;y<S;y++){let N=Array.isArray(b[y])?b[y]:[b[y]];for(let R=0,D=N.length;R<D;R++){let F=N[R],B=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(b[y])||Array.isArray(F.value),W=v;for(let q=0,Y=B.length;q<Y;q++){let Z=B[q],ne=x(Z,L),re=v%w,Ee=re%ne.boundary,ze=re+Ee;v+=Ee,ze!==0&&w-ze<ne.storage&&(v+=w-ze),q===0&&(W=v),v+=ne.storage}let V=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new V((v-W)/Float32Array.BYTES_PER_ELEMENT),F.__offset=W}}let M=v%w;return M>0&&(v+=w-M),_.__size=v,_.__cache={},this}function x(_,b){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),as=null;function rM(){return as===null&&(as=new pa(sM,16,16,nr,Qn),as.name="DFG_LUT",as.minFilter=un,as.magFilter=un,as.wrapS=ts,as.wrapT=ts,as.generateMipmaps=!1,as.needsUpdate=!0),as}var yu=class{constructor(e={}){let{canvas:t=Xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=ti}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let x=p,m=new Set([Oc,Fc,Uc]),g=new Set([ti,Hi,Co,Lr,Lc,Dc]),_=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,M=null,y=[],S=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,B=null,L=null,W=null;this._outputColorSpace=Dn;let V=0,q=0,Y=null,Z=-1,ne=null,re=new Zt,Ee=new Zt,ze=null,ie=new Oe(0),Te=0,De=t.width,se=t.height,K=1,Me=null,Ke=null,Pe=new Zt(0,0,De,se),$e=new Zt(0,0,De,se),Ie=!1,de=new qs,z=new sc,X=!1,oe=!1,$=new bt,te=new A,Se=new Zt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ae(){return Y===null?K:1}let I=i;function Qe(T,k){return t.getContext(T,k)}let it,pt,Ae,xe,be,Ve,C,E,G,ve,ue,Ne,Ge,pe,me,He,H,fe,le,ke,Ue,Be,et;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),I===null){let k="webgl2";if(I=Qe(k,T),I===null)throw Qe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(T){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),mt("WebGLRenderer: "+T.message),T}function We(){it=new g1(I),it.init(),Ue=new jb(I,it),pt=new r1(I,it,e,Ue),Ae=new Zb(I,it),pt.reversedDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),B=I.createFramebuffer(),L=I.createFramebuffer(),W=I.createFramebuffer(),xe=new v1(I),be=new Fb,Ve=new Jb(I,it,Ae,be,pt,Ue,xe),C=new m1(R),E=new b_(I),Be=new i1(I,E),G=new x1(I,E,xe,Be),ve=new b1(I,G,E,Be,xe),fe=new y1(I,pt,Ve),me=new o1(be),ue=new Ub(R,C,it,pt,Be,me),Ne=new nM(R,be),Ge=new kb,pe=new Wb(it),H=new n1(R,C,Ae,ve,f,l),He=new Kb(R,ve,pt),et=new iM(I,xe,pt,Ae),le=new s1(I,it,xe),ke=new _1(I,it,xe),xe.programs=ue.programs,R.capabilities=pt,R.extensions=it,R.properties=be,R.renderLists=Ge,R.shadowMap=He,R.state=Ae,R.info=xe}x!==ti&&(N=new S1(x,t.width,t.height,a,s,r));let Ce=new Ah(R,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(De,se,!1))},this.getSize=function(T){return T.set(De,se)},this.setSize=function(T,k,ee=!0){if(Ce.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}De=T,se=k,t.width=Math.floor(T*K),t.height=Math.floor(k*K),ee===!0&&(t.style.width=T+"px",t.style.height=k+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(De*K,se*K).floor()},this.setDrawingBufferSize=function(T,k,ee){De=T,se=k,K=ee,t.width=Math.floor(T*ee),t.height=Math.floor(k*ee),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(x===ti){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,k,ee,J){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,k,ee,J),Ae.viewport(re.copy(Pe).multiplyScalar(ae()).round())},this.getScissor=function(T){return T.copy($e)},this.setScissor=function(T,k,ee,J){T.isVector4?$e.set(T.x,T.y,T.z,T.w):$e.set(T,k,ee,J),Ae.scissor(Ee.copy($e).multiplyScalar(ae()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){Ae.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){Me=T},this.setTransparentSort=function(T){Ke=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,ee=!0){let J=0;if(T){let j=!1;if(Y!==null){let O=Y.texture.format;j=m.has(O)}if(j){let O=Y.texture.type,he=g.has(O),ce=H.getClearColor(),ye=H.getClearAlpha(),Le=ce.r,Je=ce.g,at=ce.b;he?(_[0]=Le,_[1]=Je,_[2]=at,_[3]=ye,I.clearBufferuiv(I.COLOR,0,_)):(b[0]=Le,b[1]=Je,b[2]=at,b[3]=ye,I.clearBufferiv(I.COLOR,0,b))}else J|=I.COLOR_BUFFER_BIT}k&&(J|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),H.dispose(),Ge.dispose(),pe.dispose(),Ve.dispose(),be.dispose(),C.dispose(),ve.dispose(),G.dispose(),Be.dispose(),et.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",dr),Ce.removeEventListener("sessionend",Bs),gi.stop()};function je(T){T.preventDefault(),ca("WebGLRenderer: Context Lost."),D=!0}function xt(){ca("WebGLRenderer: Context Restored."),D=!1;let T=xe.autoReset,k=He.enabled,ee=He.autoUpdate,J=He.needsUpdate,j=He.type;We(),xe.autoReset=T,He.enabled=k,He.autoUpdate=ee,He.needsUpdate=J,He.type=j}function Xe(T){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){let k=T.target;k.removeEventListener("dispose",Tt),Yt(k)}function Yt(T){$n(T),be.remove(T)}function $n(T){let k=be.get(T).programs;k!==void 0&&(k.forEach(function(ee){ue.releaseProgram(ee)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,ee,J,j,O){k===null&&(k=U);let he=j.isMesh&&j.matrixWorld.determinantAffine()<0,ce=ps(T,k,ee,J,j);Ae.setMaterial(J,he);let ye=ee.index,Le=1;if(J.wireframe===!0){if(ye=G.getWireframeAttribute(ee),ye===void 0)return;Le=2}let Je=ee.drawRange,at=ee.attributes.position,nt=Je.start*Le,At=(Je.start+Je.count)*Le;O!==null&&(nt=Math.max(nt,O.start*Le),At=Math.min(At,(O.start+O.count)*Le)),ye!==null?(nt=Math.max(nt,0),At=Math.min(At,ye.count)):at!=null&&(nt=Math.max(nt,0),At=Math.min(At,at.count));let on=At-nt;if(on<0||on===1/0)return;Be.setup(j,J,ce,ee,ye);let Qt,Kt=le;if(ye!==null&&(Qt=E.get(ye),Kt=ke,Kt.setIndex(Qt)),j.isMesh)J.wireframe===!0?(Ae.setLineWidth(J.wireframeLinewidth*ae()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(j.isLine){let zn=J.linewidth;zn===void 0&&(zn=1),Ae.setLineWidth(zn*ae()),j.isLineSegments?Kt.setMode(I.LINES):j.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else j.isPoints?Kt.setMode(I.POINTS):j.isSprite&&Kt.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let zn=j._multiDrawStarts,st=j._multiDrawCounts,Yn=j._multiDrawCount,Ot=ye?E.get(ye).bytesPerElement:1,pr=be.get(J).currentProgram.getUniforms();for(let Hn=0;Hn<Yn;Hn++)pr.setValue(I,"_gl_DrawID",Hn),Kt.render(zn[Hn]/Ot,st[Hn])}else if(j.isInstancedMesh)Kt.renderInstances(nt,on,j.count);else if(ee.isInstancedBufferGeometry){let zn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,st=Math.min(ee.instanceCount,zn);Kt.renderInstances(nt,on,st)}else Kt.render(nt,on)};function Li(T,k,ee,J){F!==null&&T.isNodeMaterial&&F.setObject(J,T),X===!0&&me.setState(T,ee,!1),T.transparent===!0&&T.side===Jt&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,St(T,k,J),T.side=ss,T.needsUpdate=!0,St(T,k,J),T.side=Jt):St(T,k,J)}this.compile=function(T,k,ee=null){ee===null&&(ee=T),F!==null&&F.renderStart(T,k,ee),M=pe.get(ee),M.init(k),S.push(M),ee.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),T!==ee&&T.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(M.pushLight(j),j.castShadow&&M.pushShadow(j))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),oe=this.localClippingEnabled,X=me.init(this.clippingPlanes,oe),X===!0&&me.setGlobalState(this.clippingPlanes,k),F!==null&&He.render(M.state.shadowsArray,ee,k);let J=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let O=j.material;if(O)if(Array.isArray(O))for(let he=0;he<O.length;he++){let ce=O[he];Li(ce,ee,k,j),J.add(ce)}else Li(O,ee,k,j),J.add(O)}),M=S.pop(),F!==null&&F.renderEnd(),J},this.compileAsync=function(T,k,ee=null){let J=this.compile(T,k,ee);return new Promise(j=>{function O(){if(J.forEach(function(he){let ye=be.get(he).currentProgram;(ye===void 0||ye.isReady())&&J.delete(he)}),J.size===0){j(T);return}setTimeout(O,10)}it.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let mi=null;function ur(T){mi&&mi(T)}function dr(){gi.stop()}function Bs(){gi.start()}let gi=new w0;gi.setAnimationLoop(ur),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){mi=T,Ce.setAnimationLoop(T),T===null?gi.stop():gi.start()},Ce.addEventListener("sessionstart",dr),Ce.addEventListener("sessionend",Bs),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(T,k);let ee=Ce.enabled===!0&&Ce.isPresenting===!0,J=N!==null&&(Y===null||ee)&&N.begin(R,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,k,Y),M=pe.get(T,S.length),M.init(k),M.state.textureUnits=Ve.getTextureUnits(),S.push(M),$.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?z.setFromArrayCamera(k):de.setFromProjectionMatrix($,yi,k.reversedDepth),oe=this.localClippingEnabled,X=me.init(this.clippingPlanes,oe),w=Ge.get(T,y.length),w.init(),y.push(w),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){let he=R.xr.getDepthSensingMesh();he!==null&&xi(he,k,-1/0,R.sortObjects)}xi(T,k,0,R.sortObjects),w.finish(),F!==null&&F.updateLights(M.state.lightsArray),R.sortObjects===!0&&w.sort(Me,Ke),Q=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Q&&H.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),X===!0&&me.beginShadows();let j=M.state.shadowsArray;if(He.render(j,T,k),X===!0&&me.endShadows(),(J&&N.hasRenderPass())===!1){let he=w.opaque,ce=w.transmissive;if(M.setupLights(),k.isArrayCamera){let ye=k.cameras;if(ce.length>0)for(let Le=0,Je=ye.length;Le<Je;Le++){let at=ye[Le];Di(he,ce,T,at)}Q&&H.render(T);for(let Le=0,Je=ye.length;Le<Je;Le++){let at=ye[Le];fs(w,T,at,at.viewport)}}else ce.length>0&&Di(he,ce,T,k),Q&&H.render(T),fs(w,T,k)}Y!==null&&q===0&&(Ve.updateMultisampleRenderTarget(Y),Ve.updateRenderTargetMipmap(Y)),J&&N.end(R),T.isScene===!0&&T.onAfterRender(R,T,k),Be.resetDefaultState(),Z=-1,ne=null,S.pop(),S.length>0?(M=S[S.length-1],Ve.setTextureUnits(M.state.textureUnits),X===!0&&me.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,y.pop(),y.length>0?w=y[y.length-1]:w=null,F!==null&&F.renderEnd()};function xi(T,k,ee,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){let he=k.isArrayCamera?z:de;if(!T.frustumCulled||T.intersectsFrustum(he)){J&&Se.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let ce=ve.update(T),ye=T.material;ye.visible&&w.push(T,ce,ye,ee,Se.z,null,k)}}else if(T.isMesh||T.isLine||T.isPoints){let he=k.isArrayCamera?z:de;if(!T.frustumCulled||T.intersectsFrustum(he)){let ce=ve.update(T),ye=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Se.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Se.copy(ce.boundingSphere.center)),Se.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(ye)){let Le=ce.groups;for(let Je=0,at=Le.length;Je<at;Je++){let nt=Le[Je],At=ye[nt.materialIndex];At&&At.visible&&w.push(T,ce,At,ee,Se.z,nt,k)}}else ye.visible&&w.push(T,ce,ye,ee,Se.z,null,k)}}}let O=T.children;for(let he=0,ce=O.length;he<ce;he++)xi(O[he],k,ee,J)}function fs(T,k,ee,J){let{opaque:j,transmissive:O,transparent:he}=T;M.setupLightsView(ee),X===!0&&me.setGlobalState(R.clippingPlanes,ee),J&&Ae.viewport(re.copy(J)),j.length>0&&Ji(j,k,ee),O.length>0&&Ji(O,k,ee),he.length>0&&Ji(he,k,ee),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Di(T,k,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[J.id]===void 0){let nt=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[J.id]=new Un(1,1,{generateMipmaps:!0,type:nt?Qn:ti,minFilter:zi,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let O=M.state.transmissionRenderTarget[J.id],he=J.viewport||re;O.setSize(he.z*R.transmissionResolutionScale,he.w*R.transmissionResolutionScale);let ce=R.getRenderTarget(),ye=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(O),R.getClearColor(ie),Te=R.getClearAlpha(),Te<1&&R.setClearColor(16777215,.5),R.clear(),Q&&H.render(ee);let Je=R.toneMapping;R.toneMapping=os;let at=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),M.setupLightsView(J),X===!0&&me.setGlobalState(R.clippingPlanes,J),Ji(T,ee,J),Ve.updateMultisampleRenderTarget(O),Ve.updateRenderTargetMipmap(O),it.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let At=0,on=k.length;At<on;At++){let Qt=k[At],{object:Kt,geometry:zn,material:st,group:Yn}=Qt;if(st.side===Jt&&Kt.layers.test(J.layers)){let Ot=st.side;st.side=kn,st.needsUpdate=!0,_i(Kt,ee,J,zn,st,Yn),st.side=Ot,st.needsUpdate=!0,nt=!0}}nt===!0&&(Ve.updateMultisampleRenderTarget(O),Ve.updateRenderTargetMipmap(O))}R.setRenderTarget(ce,ye,Le),R.setClearColor(ie,Te),at!==void 0&&(J.viewport=at),R.toneMapping=Je}function Ji(T,k,ee){let J=k.isScene===!0?k.overrideMaterial:null;for(let j=0,O=T.length;j<O;j++){let he=T[j],{object:ce,geometry:ye,group:Le}=he,Je=he.material;Je.allowOverride===!0&&J!==null&&(Je=J),ce.layers.test(ee.layers)&&_i(ce,k,ee,ye,Je,Le)}}function _i(T,k,ee,J,j,O){F!==null&&j.isNodeMaterial&&F.setObject(T,j),T.onBeforeRender(R,k,ee,J,j,O),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(R,k,ee,J,T,O),j.transparent===!0&&j.side===Jt&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,R.renderBufferDirect(ee,k,J,j,T,O),j.side=ss,j.needsUpdate=!0,R.renderBufferDirect(ee,k,J,j,T,O),j.side=Jt):R.renderBufferDirect(ee,k,J,j,T,O),T.onAfterRender(R,k,ee,J,j,O)}function ji(T){let k=0;for(let ee of T)ee.texture!==null&&k++;return k}function St(T,k,ee){k.isScene!==!0&&(k=U);let J=be.get(T),j=M.state.lights,O=M.state.shadowsArray,he=j.state.version,ce=ue.getParameters(T,j.state,O,k,ee,M.state.lightProbeGridArray),ye=ue.getProgramCacheKey(ce),Le=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=C.get(T.envMap||J.environment,Je),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Tt),Le=new Map,J.programs=Le,J.programVariants=new Map);let at=Le.get(ye);if(at!==void 0){if(J.currentProgram===at&&J.lightsStateVersion===he)return _n(T,ce),at}else ce.uniforms=ue.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,ee,ce),T.onBeforeCompile(ce,R),at=ue.acquireProgram(ce,ye),Le.set(ye,at),J.uniforms=ce.uniforms;let nt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(nt.clippingPlanes=me.uniform),_n(T,ce),J.needsLights=Qi(T),J.lightsStateVersion=he,J.needsLights&&(nt.ambientLightColor.value=j.state.ambient,nt.lightProbe.value=j.state.probe,nt.sunLights.value=j.state.sun,nt.sunLightShadows.value=j.state.sunShadow,nt.directionalLights.value=j.state.directional,nt.directionalLightShadows.value=j.state.directionalShadow,nt.spotLights.value=j.state.spot,nt.spotLightShadows.value=j.state.spotShadow,nt.rectAreaLights.value=j.state.rectArea,nt.ltc_1.value=j.state.rectAreaLTC1,nt.ltc_2.value=j.state.rectAreaLTC2,nt.pointLights.value=j.state.point,nt.pointLightShadows.value=j.state.pointShadow,nt.hemisphereLights.value=j.state.hemi,nt.sunShadowMatrix.value=j.state.sunShadowMatrix,nt.sunShadowCascade.value=j.state.sunShadowCascade,nt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,nt.spotLightMatrix.value=j.state.spotLightMatrix,nt.spotLightMap.value=j.state.spotLightMap,nt.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=ji(M.state.lightProbeGridArray),J.currentProgram=at,J.uniformsList=null,at}function Re(T,k,ee,J,j){let O=be.get(T),he=O.currentProgram.id+","+J+","+j,ce=O.programVariants.get(he);return ce===void 0?(ce=St(T,k,ee),O.programVariants.set(he,ce)):(O.currentProgram=ce,O.uniformsList=null,O.outputColorSpace=J,O.toneMapping=j),ce}function _t(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=Po.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function _n(T,k){let ee=be.get(T);ee.outputColorSpace=k.outputColorSpace,ee.batching=k.batching,ee.batchingColor=k.batchingColor,ee.instancing=k.instancing,ee.instancingColor=k.instancingColor,ee.instancingMorph=k.instancingMorph,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function ps(T,k,ee,J,j){k.isScene!==!0&&(k=U),Ve.resetTextureUnits();let O=k.fog,he=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,ce=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Rt.workingColorSpace,ye=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Le=C.get(J.envMap||he,ye),Je=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,at=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!ee.morphAttributes.position,At=!!ee.morphAttributes.normal,on=!!ee.morphAttributes.color,Qt=os;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=R.toneMapping);let Kt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,zn=Kt!==void 0?Kt.length:0,st=be.get(J),Yn=M.state.lights;if(X===!0&&(oe===!0||T!==ne)){let ln=T===ne&&J.id===Z;me.setState(J,T,ln)}let Ot=!1,pr=!1;J.version===st.__version?st.needsLights&&st.lightsStateVersion!==Yn.state.version||j.isBatchedMesh&&st.batching===!1||!j.isBatchedMesh&&st.batching===!0||j.isBatchedMesh&&st.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&st.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&st.instancing===!1||!j.isInstancedMesh&&st.instancing===!0||j.isSkinnedMesh&&st.skinning===!1||!j.isSkinnedMesh&&st.skinning===!0||j.isInstancedMesh&&st.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&st.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&st.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&st.instancingMorph===!1&&j.morphTexture!==null||st.envMap!==Le||J.fog===!0&&st.fog!==O||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==me.numPlanes||st.numIntersection!==me.numIntersection)||st.vertexAlphas!==Je||st.vertexTangents!==at||st.morphTargets!==nt||st.morphNormals!==At||st.morphColors!==on||st.morphTargetsCount!==zn||st.numLightProbeGrids!==ji(M.state.lightProbeGridArray)?Ot=!0:(st.outputColorSpace!==ce||st.toneMapping!==Qt)&&(pr=!0):(Ot=!0,st.__version=J.version);let Hn=st.currentProgram;(Ot===!0||pr===!0)&&(Hn=pr===!0?Re(J,k,j,ce,Qt):St(J,k,j),F&&J.isNodeMaterial&&F.onUpdateProgram(J,Hn,st));let dl=!1,zs=!1,mr=!1,Dt=Hn.getUniforms(),Ln=st.uniforms;if(Ae.useProgram(Hn.program)&&(dl=!0,zs=!0,mr=!0),J.id!==Z&&(Z=J.id,zs=!0),dl||ne!==T){Ae.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Dt.setValue(I,"projectionMatrix",T.projectionMatrix),Dt.setValue(I,"viewMatrix",T.matrixWorldInverse);let Tn=Dt.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,te.setFromMatrixPosition(T.matrixWorld)),pt.logarithmicDepthBuffer&&Dt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,zs=!0,mr=!0)}if(st.needsLights&&(Yn.state.sunShadowMap.length>0&&Dt.setValue(I,"sunShadowMap",Yn.state.sunShadowMap,Ve),Yn.state.directionalShadowMap.length>0&&Dt.setValue(I,"directionalShadowMap",Yn.state.directionalShadowMap,Ve),Yn.state.spotShadowMap.length>0&&Dt.setValue(I,"spotShadowMap",Yn.state.spotShadowMap,Ve),Yn.state.pointShadowMap.length>0&&Dt.setValue(I,"pointShadowMap",Yn.state.pointShadowMap,Ve)),j.isSkinnedMesh){Dt.setOptional(I,j,"bindMatrix"),Dt.setOptional(I,j,"bindMatrixInverse");let ln=j.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Dt.setValue(I,"boneTexture",ln.boneTexture,Ve))}j.isBatchedMesh&&(Dt.setOptional(I,j,"batchingTexture"),Dt.setValue(I,"batchingTexture",j._matricesTexture,Ve),Dt.setOptional(I,j,"batchingIdTexture"),Dt.setValue(I,"batchingIdTexture",j._indirectTexture,Ve),Dt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Dt.setValue(I,"batchingColorTexture",j._colorsTexture,Ve));let Ni=ee.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&fe.update(j,ee,Hn),(zs||st.receiveShadow!==j.receiveShadow)&&(st.receiveShadow=j.receiveShadow,Dt.setValue(I,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(Ln.envMapIntensity.value=k.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=rM()),zs){if(Dt.setValue(I,"toneMappingExposure",R.toneMappingExposure),st.needsLights&&hr(Ln,mr),O&&J.fog===!0&&Ne.refreshFogUniforms(Ln,O),Ne.refreshMaterialUniforms(Ln,J,K,se,M.state.transmissionRenderTarget[T.id]),st.needsLights&&st.numLightProbeGrids>0){let ln=v,Tn=0;for(let ms of M.state.lightProbeGridArray)ms.texture!==null&&(ln.textures[Tn]=ms.texture,ln.min[Tn]=ms.boundingBox.min,ln.max[Tn]=ms.boundingBox.max,ln.resolution[Tn]=ms.resolution,Tn++);for(let ms in ln)ln[ms].length=Tn;Ln.probesSH.value=ln.textures,Ln.probesMin.value=ln.min,Ln.probesMax.value=ln.max,Ln.probesResolution.value=ln.resolution}Po.upload(I,_t(st),Ln,Ve)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Po.upload(I,_t(st),Ln,Ve),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(I,"center",j.center),Dt.setValue(I,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(I,"normalMatrix",j.normalMatrix),Dt.setValue(I,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let ln=J.uniformsGroups;for(let Tn=0,ms=ln.length;Tn<ms;Tn++){let Sf=ln[Tn];et.update(Sf,Hn),et.bind(Sf,Hn)}}return Hn}function hr(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Qi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,k,ee){let J=be.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=k,be.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let ee=be.get(T);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,ee=0){Y=T,V=k,q=ee;let J=null,j=!1,O=!1;if(T){let ce=be.get(T);if(ce.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(I.FRAMEBUFFER,ce.__webglFramebuffer),re.copy(T.viewport),Ee.copy(T.scissor),ze=T.scissorTest,Ae.viewport(re),Ae.scissor(Ee),Ae.setScissorTest(ze),Z=-1;return}else if(ce.__webglFramebuffer===void 0)Ve.setupRenderTarget(T);else if(ce.__hasExternalTextures)Ve.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(ce.__boundDepthTexture!==Je){if(Je!==null&&be.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(T)}}let ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(O=!0);let Le=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?J=Le[k][ee]:J=Le[k],j=!0):T.samples>0&&Ve.useMultisampledRTT(T)===!1?J=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?J=Le[ee]:J=Le,re.copy(T.viewport),Ee.copy(T.scissor),ze=T.scissorTest}else re.copy(Pe).multiplyScalar(K).floor(),Ee.copy($e).multiplyScalar(K).floor(),ze=Ie;if(ee!==0&&(J=B),Ae.bindFramebuffer(I.FRAMEBUFFER,J)&&Ae.drawBuffers(T,J),Ae.viewport(re),Ae.scissor(Ee),Ae.setScissorTest(ze),j){let ce=be.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,ce.__webglTexture,ee)}else if(O){let ce=k;for(let ye=0;ye<T.textures.length;ye++){let Le=be.get(T.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,Le.__webglTexture,ee,ce)}}else if(T!==null&&ee!==0){let ce=be.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ce.__webglTexture,ee)}Z=-1};function fr(T){let k=be.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=pt.textureFormatReadable(T.format),k.__typeReadable=pt.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,ee,J,j,O,he,ce=0){if(!(T&&T.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he],Array.isArray(ye)&&(ye=ye[0])),ye){Ae.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Le=T.textures[ce],Je=Le.format,at=Le.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce);let nt=fr(Le);if(nt.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&ee>=0&&ee<=T.height-j&&I.readPixels(k,ee,J,j,Ue.convert(Je),Ue.convert(at),O)}finally{let Le=Y!==null?be.get(Y).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,k,ee,J,j,O,he,ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he],Array.isArray(ye)&&(ye=ye[0])),ye)if(k>=0&&k<=T.width-J&&ee>=0&&ee<=T.height-j){Ae.bindFramebuffer(I.FRAMEBUFFER,ye);let Le=T.textures[ce],Je=Le.format,at=Le.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce);let nt=fr(Le);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.bufferData(I.PIXEL_PACK_BUFFER,O.byteLength,I.STREAM_READ),I.readPixels(k,ee,J,j,Ue.convert(Je),Ue.convert(at),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let on=Y!==null?be.get(Y).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,on);let Qt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $p(I,Qt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,At),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,O),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(At),I.deleteSync(Qt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,ee=0){let J=Math.pow(2,-ee),j=Math.floor(T.image.width*J),O=Math.floor(T.image.height*J),he=k!==null?k.x:0,ce=k!==null?k.y:0;Ve.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,he,ce,j,O),Ae.unbindTexture()},this.copyTextureToTexture=function(T,k,ee=null,J=null,j=0,O=0){let he,ce,ye,Le,Je,at,nt,At,on,Qt=T.isCompressedTexture?T.mipmaps[O]:T.image;if(ee!==null)he=ee.max.x-ee.min.x,ce=ee.max.y-ee.min.y,ye=ee.isBox3?ee.max.z-ee.min.z:1,Le=ee.min.x,Je=ee.min.y,at=ee.isBox3?ee.min.z:0;else{let Dt=Math.pow(2,-j);he=Math.floor(Qt.width*Dt),ce=Math.floor(Qt.height*Dt),T.isDataArrayTexture?ye=Qt.depth:T.isData3DTexture?ye=Math.floor(Qt.depth*Dt):ye=1,Le=0,Je=0,at=0}J!==null?(nt=J.x,At=J.y,on=J.z):(nt=0,At=0,on=0);let Kt=Ue.convert(k.format),zn=Ue.convert(k.type),st;k.isData3DTexture?(Ve.setTexture3D(k,0),st=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ve.setTexture2DArray(k,0),st=I.TEXTURE_2D_ARRAY):(Ve.setTexture2D(k,0),st=I.TEXTURE_2D),Ae.activeTexture(I.TEXTURE0),Ae.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),Ae.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Ae.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let Yn=Ae.getParameter(I.UNPACK_ROW_LENGTH),Ot=Ae.getParameter(I.UNPACK_IMAGE_HEIGHT),pr=Ae.getParameter(I.UNPACK_SKIP_PIXELS),Hn=Ae.getParameter(I.UNPACK_SKIP_ROWS),dl=Ae.getParameter(I.UNPACK_SKIP_IMAGES);Ae.pixelStorei(I.UNPACK_ROW_LENGTH,Qt.width),Ae.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt.height),Ae.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),Ae.pixelStorei(I.UNPACK_SKIP_ROWS,Je),Ae.pixelStorei(I.UNPACK_SKIP_IMAGES,at);let zs=T.isDataArrayTexture||T.isData3DTexture,mr=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let Dt=be.get(T),Ln=be.get(k),Ni=be.get(Dt.__renderTarget),ln=be.get(Ln.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,Ni.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let Tn=0;Tn<ye;Tn++)zs&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(T).__webglTexture,j,at+Tn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,be.get(k).__webglTexture,O,on+Tn)),I.blitFramebuffer(Le,Je,Le+he,Je+ce,nt,At,nt+he,At+ce,I.DEPTH_BUFFER_BIT,I.NEAREST);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||be.has(T)){let Dt=be.get(T),Ln=be.get(k);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,L),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,W);for(let Ni=0;Ni<ye;Ni++)zs?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,j,at+Ni):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,j),mr?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,O,on+Ni):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,O),j!==0?I.blitFramebuffer(Le,Je,Le+he,Je+ce,nt,At,nt+he,At+ce,I.COLOR_BUFFER_BIT,I.NEAREST):mr?I.copyTexSubImage3D(st,O,nt,At,on+Ni,Le,Je,he,ce):I.copyTexSubImage2D(st,O,nt,At,Le,Je,he,ce);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mr?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(st,O,nt,At,on,he,ce,ye,Kt,zn,Qt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(st,O,nt,At,on,he,ce,ye,Kt,Qt.data):I.texSubImage3D(st,O,nt,At,on,he,ce,ye,Kt,zn,Qt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,nt,At,he,ce,Kt,zn,Qt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,nt,At,Qt.width,Qt.height,Kt,Qt.data):I.texSubImage2D(I.TEXTURE_2D,O,nt,At,he,ce,Kt,zn,Qt);Ae.pixelStorei(I.UNPACK_ROW_LENGTH,Yn),Ae.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot),Ae.pixelStorei(I.UNPACK_SKIP_PIXELS,pr),Ae.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),Ae.pixelStorei(I.UNPACK_SKIP_IMAGES,dl),O===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&I.generateMipmap(st),Ae.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Ve.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){V=0,q=0,Y=null,Ae.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};var U0={type:"change"},Ch={type:"start"},O0={type:"end"},Su=new Ts,F0=new Zn,oM=Math.cos(70*gu.DEG2RAD),wn=new A,ni=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rh=1e-6,wu=class extends Ua{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new dn,this._lastTargetPosition=new A,this._quat=new dn().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eo,this._sphericalDelta=new Eo,this._scale=1,this._panOffset=new A,this._rotateStart=new _e,this._rotateEnd=new _e,this._rotateDelta=new _e,this._panStart=new _e,this._panEnd=new _e,this._panDelta=new _e,this._dollyStart=new _e,this._dollyEnd=new _e,this._dollyDelta=new _e,this._dollyDirection=new A,this._mouse=new _e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lM.bind(this),this._onPointerDown=aM.bind(this),this._onPointerUp=cM.bind(this),this._onContextMenu=gM.bind(this),this._onMouseWheel=hM.bind(this),this._onKeyDown=fM.bind(this),this._onTouchStart=pM.bind(this),this._onTouchMove=mM.bind(this),this._onMouseDown=uM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=xM.bind(this),this._interceptControlUp=_M.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=kt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U0),this.update(),this.state=kt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wn.copy(t).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ni:i>Math.PI&&(i-=ni),s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),t.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=wn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Su.origin.copy(this.object.position),Su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Su.direction))<oM?this.object.lookAt(this.target):(F0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Su.intersectPlane(F0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rh||this._lastTargetPosition.distanceToSquared(this.target)>Rh?(this.dispatchEvent(U0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wn.setFromMatrixColumn(t,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,t){this.screenSpacePanning===!0?wn.setFromMatrixColumn(t,1):(wn.setFromMatrixColumn(t,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;wn.copy(s).sub(this.target);let r=wn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/t.clientHeight),this._rotateUp(ni*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new _e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function aM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(O0),this.state=kt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=kt.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=kt.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Ch)}function dM(n){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hM(n){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(n.preventDefault(),this.dispatchEvent(Ch),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(O0))}function fM(n){this.enabled!==!1&&this._handleKeyDown(n)}function pM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1){this.state=kt.NONE;break}this._handleTouchStartRotate(n),this.state=kt.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1){this.state=kt.NONE;break}this._handleTouchStartPan(n),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=kt.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(Ch)}function mM(n){switch(this._trackPointer(n),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=kt.NONE}}function gM(n){this.enabled!==!1&&n.preventDefault()}function xM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _M(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ya=new A;function wi(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ya.copy(e),Ya[i]=0,Ya.normalize();let c=.5*o/(o+a),u=1-Ya.angleTo(n)/l;return Math.sign(Ya[t])===1?u*c:a/(o+a)+c+c*(1-u)}var Eu=class n extends Ft{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new A,c=new A,u=new A(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,f=d.length/6,x=new A,m=.5/o;for(let g=0,_=0;g<d.length;g+=3,_+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=u.x*Math.sign(l.x)+c.x*r,d[g+1]=u.y*Math.sign(l.y)+c.y*r,d[g+2]=u.z*Math.sign(l.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/f)){case 0:x.set(1,0,0),p[_+0]=wi(x,c,"z","y",r,i),p[_+1]=1-wi(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),p[_+0]=1-wi(x,c,"z","y",r,i),p[_+1]=1-wi(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),p[_+0]=1-wi(x,c,"x","z",r,e),p[_+1]=wi(x,c,"z","x",r,i);break;case 3:x.set(0,-1,0),p[_+0]=1-wi(x,c,"x","z",r,e),p[_+1]=1-wi(x,c,"z","x",r,i);break;case 4:x.set(0,0,1),p[_+0]=1-wi(x,c,"x","y",r,e),p[_+1]=1-wi(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),p[_+0]=wi(x,c,"x","y",r,e),p[_+1]=1-wi(x,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function B0(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Nt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let f=0;f<p.count;++f)d.push(p.getX(f)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=k0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][h]);let f=k0(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}}return l}function k0(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Wn(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,p=u.count;h<p;h++)for(let f=0;f<t;f++){let x=u.getComponent(h,f);a.setComponent(h+d,f,x)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var vM=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function yM(n,e){return vM(n,e)}function Gt(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=yM(n,e),a=o.getContext("2d"),l=new _a(o);i&&(l.colorSpace=Dn),l.anisotropy=r,s&&(l.wrapS=Ss,l.wrapT=Ss,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var $t='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',Lt='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',It=Math.PI*2,Ei=Math.PI/180,dt=(n,e,t)=>n<e?e:n>t?t:n,ui=(n,e,t)=>n+(e-n)*t,Ph=n=>{let e=dt(n,0,1);return e*e*(3-2*e)},Ti=n=>{let e=dt(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Bt=(n,e,t,i)=>ui(n,e,1-Math.exp(-t*i));function X0(n,e,t){let i=(e-n)%It;return i>Math.PI&&(i-=It),i<-Math.PI&&(i+=It),n+i*t}function Ih(n,e){let t=(e-n)%It;return t>Math.PI&&(t-=It),t<-Math.PI&&(t+=It),t}var z0=new bt,H0=new dn,G0=new jn,V0=new A,W0=new A;function P(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return G0.set(t[0],t[1],t[2]),H0.setFromEuler(G0),V0.set(e[0],e[1],e[2]),W0.set(i[0],i[1],i[2]),z0.compose(V0,H0,W0),n.applyMatrix4(z0),n}var qe=(n,e,t,i=.02,s=2)=>new Eu(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Fe=(n,e,t)=>new Ft(n,e,t),ge=(n,e,t,i=32,s=!1)=>new On(n,e,t,i,1,s);var fn=(n,e,t=12,i=48,s=It)=>new Mi(n,e,t,i,s),cs=(n,e=48)=>new Ra(n.map(([t,i])=>new _e(t,i)),e);function Do(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*It;o.push(P(ge(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function Lh(n,e,t,i,s=.02){let r=new Ys,o=It/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,p]=u[d],f=Math.cos(p)*h,x=Math.sin(p)*h;l===0&&d===0?r.moveTo(f,x):r.lineTo(f,x)}}if(r.closePath(),s>0){let l=new Rs;l.absarc(0,0,s,0,It,!0),r.holes.push(l)}let a=new Tr(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function di(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new A(l[0],l[1],l[2])),r=new yo,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),p=Math.min(t,d.length()/2,h.length()/2),f=c.clone().sub(d.normalize().multiplyScalar(p)),x=c.clone().add(h.normalize().multiplyScalar(p));f.distanceTo(o)>1e-5&&r.add(new Sr(o.clone(),f)),r.add(new wr(f,c.clone(),x)),o=x}else c.distanceTo(o)>1e-5&&r.add(new Sr(o.clone(),c.clone()))}let a=r.getLength();return new Ca(r,Math.max(16,Math.round(a*40)),e,i,!1)}var lt=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Wt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:B0(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new rt(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function Ye(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new rt(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function yt(n,e,t){let i=new Wt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Tu=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new A(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new A){let i=dt(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function q0(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Et(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let f=0;f<=a;f++){let x=f/a,m=l?s-(s-i)*x:i+(s-i)*x,g=Math.cos(m),_=Math.sin(m),b=n+t*g,v=e-t*_,w=l?-g:g,M=l?_:-_;c.push(b,r,v,b,o,v),u.push(w,0,M,w,0,M),d.push(x,0,x,1)}for(let f=0;f<a;f++){let x=f*2;h.push(x,x+2,x+3,x,x+3,x+1)}let p=new Nt;return p.setAttribute("position",new ut(c,3)),p.setAttribute("normal",new ut(u,3)),p.setAttribute("uv",new ut(d,2)),p.setIndex(h),p}function Vi(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let p=0;p<u;p++){let f=n[p],x=n[(p+1)%c],m=x[0]-f[0],g=x[1]-f[1],_=Math.hypot(m,g);if(_<1e-6)continue;let b=g/_,v=-m/_,w=!1;s&&!s((f[0]+x[0])/2,(f[1]+x[1])/2,b,v)&&(b=-b,v=-v,w=!0);let M=r.length/3;r.push(f[0],e,f[1],f[0],t,f[1],x[0],e,x[1],x[0],t,x[1]);for(let y=0;y<4;y++)o.push(b,0,v);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,w?l.push(M,M+2,M+3,M,M+3,M+1):l.push(M,M+1,M+3,M,M+3,M+2)}let h=new Nt;return h.setAttribute("position",new ut(r,3)),h.setAttribute("normal",new ut(o,3)),h.setAttribute("uv",new ut(a,2)),h.setIndex(l),h}function $0(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function bM(){let n=$0(7);return Gt(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function MM(){let n=$0(23);return Gt(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,It),e.stroke()},{anisotropy:8})}function SM(){return Gt(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function wM(){return Gt(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function EM(){return Gt(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var pn=n=>new Ct(n);function Nr({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=ss,emissive:a=0,emissiveIntensity:l=0}={}){let c=new Ct({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Ao,c.blendSrc=er,c.blendDst=tr,c.blendSrcAlpha=er,c.blendDstAlpha=tr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function Y0(n="high"){let e={brushed:bM().tex,wafer:MM().tex,radial:SM().tex,hazard:wM().tex,grille:EM().tex};return{M:{alu:pn({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:pn({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:pn({color:14936044,metalness:1,roughness:.08}),steel:pn({color:11646654,metalness:1,roughness:.28}),darkSteel:pn({color:6251886,metalness:1,roughness:.34}),brass:pn({color:13876630,metalness:1,roughness:.3}),copper:pn({color:12946278,metalness:1,roughness:.3}),gold:pn({color:15320959,metalness:1,roughness:.22}),white:pn({color:15856630,metalness:0,roughness:.32}),graphite:pn({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:pn({color:5073918,metalness:.2,roughness:.35}),orange:pn({color:13137466,metalness:.3,roughness:.36}),rubber:pn({color:1382171,metalness:0,roughness:.8}),plastic:pn({color:2303532,metalness:0,roughness:.45}),ceramic:pn({color:15001579,metalness:0,roughness:.42}),grille:pn({map:e.grille,metalness:.6,roughness:.45}),hazard:pn({map:e.hazard,metalness:.2,roughness:.55}),glass:Nr({color:14674421,opacity:.08,fresnel:.55}),smoke:Nr({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:Jt}),fuel:pn({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:pn({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:pn({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:pn({color:13949150,metalness:0,roughness:.25}),wall:pn({color:15133166,metalness:0,roughness:.5}),shadow:new qt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new Cs({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:pn({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function Vt(n,e=0){let t=new Oe(n);return new Ct({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function Ka(n,e=1.25){return new Ct({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function In(n,e=.55){return new Ct({map:n,metalness:e,roughness:.42})}var Ur=Math.PI/180,tt={cx:.5,cz:-1,r:22,h:13.5},Ai={panes:24,finDepth:.36,doorA0:263*Ur,doorA1:277*Ur,doorH:3.1},ir={a0:236*Ur,a1:304*Ur,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},Ri={r:22.35,groundY:-420},ei={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*Ur,targetR:17,targetYMin:0,targetYMax:12},Pt={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Ru=.45,Uo=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],gt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*Ur,a1:142*Ur,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},Dh=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function Fo(n,e,t=0,i=new A){return i.set(tt.cx+e*Math.cos(n),t,tt.cz-e*Math.sin(n))}var Nh=Math.PI*2,Au=(n,e,t)=>Math.min(t,Math.max(e,n)),K0=(n,e)=>{let t=Math.abs(n-e)%Nh;return t>Math.PI?Nh-t:t};function Uh(n,e){let t=Math.atan2(-(e-tt.cz),n-tt.cx);return t<0?t+Nh:t}function No(n){let e=ei,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-tt.cx,n.z-tt.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=Uh(n.x,n.z);return i<=e.outerR+t?s>=Ai.doorA0+e.edge-t&&s<=Ai.doorA1-e.edge+t&&n.y<=Ai.doorH-.25+t?"door":null:s>=ir.a0+e.edge-t&&s<=ir.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function Z0(n,e,t){let i=n.x-tt.cx,s=n.z-tt.cz,r=Math.hypot(i,s),o=Au(r,e,t);r>1e-9&&o!==r&&(n.x=tt.cx+i*o/r,n.z=tt.cz+s*o/r)}function J0(n,e,t){let i=Uh(n.x,n.z);if(i>=e&&i<=t)return;let s=K0(i,e)<K0(i,t)?e:t,r=Math.hypot(n.x-tt.cx,n.z-tt.cz);n.x=tt.cx+r*Math.cos(s),n.z=tt.cz-r*Math.sin(s)}function Q0(n,e=null){if(No(n))return n;let t=ei,i=e?No(e):null;if(!i){let s=Math.hypot(n.x-tt.cx,n.z-tt.cz),r=Uh(n.x,n.z);i=s>tt.r&&r>=ir.a0&&r<=ir.a1?"balcony":"hall"}if(i==="door"){if(J0(n,Ai.doorA0+t.edge,Ai.doorA1-t.edge),n.y=Au(n.y,t.yMin,Ai.doorH-.25),No(n))return n;i=Math.hypot(e.x-tt.cx,e.z-tt.cz)>tt.r?"balcony":"hall"}return i==="balcony"?(J0(n,ir.a0+t.edge,ir.a1-t.edge),Z0(n,t.outerR+.001,t.balconyR),n.y=Au(n.y,t.yMin,t.balconyYMax)):(Z0(n,0,t.r),n.y=Au(n.y,t.yMin,t.yMax)),n}function Cu(){let n=gt.screenR,e=Dh.reduce((i,s)=>i+s.w,0)+gt.gap*(Dh.length-1),t=Math.PI/2+e/n/2;return Dh.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-gt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:gt.screenY-a/2,y1:gt.screenY+a/2}})}var yn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function j0(n){return n.type==="circle"?`length(p - vec2(${yn(n.c[0])}, ${yn(n.c[1])})) - ${yn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${yn(n.a[0])}, ${yn(n.a[1])}), vec2(${yn(n.b[0])}, ${yn(n.b[1])}), ${yn(n.r)})`:`lSdBox(p, vec2(${yn(n.c[0])}, ${yn(n.c[1])}), vec2(${yn(n.h[0])}, ${yn(n.h[1])}))`}function em(){let n=Uo.find(t=>t.id==="cell");return`
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
${Uo.map((t,i)=>i===0?`  float d = ${j0(t)};`:`  d = min(d, ${j0(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${yn(Pt.cx)}, ${yn(Pt.cz)})) - vec2(${yn(Pt.hx-Pt.r)}, ${yn(Pt.hz-Pt.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${yn(Pt.r)};
}
const vec2 HUB_C = vec2(${yn(n.c[0])}, ${yn(n.c[1])});
const float HUB_R = ${yn(n.r)};
`}function tm(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Pt,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,p)=>{let f=Math.max(1,Math.ceil(Math.hypot(h-u,p-d)/n));for(let x=0;x<f;x++)o.push([u+(h-u)*x/f,d+(p-d)*x/f])};for(let u=0;u<4;u++){let[d,h,p]=a[u];for(let w=0;w<l;w++){let M=p+Math.PI/2*w/l;o.push([d+r*Math.cos(M),h+r*Math.sin(M)])}let[f,x,m]=a[(u+1)%4],g=d+r*Math.cos(p+Math.PI/2),_=h+r*Math.sin(p+Math.PI/2),b=f+r*Math.cos(m),v=x+r*Math.sin(m);c(g,_,b,v)}return o}var Za=Math.PI/180;function TM(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function hi(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function nm(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function AM(n,e){return(n/(2*Math.PI)+.5)*e}function Ja(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,hi(r,o)),a.addColorStop(.45,hi(r,o*.42)),a.addColorStop(1,hi(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function RM(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,v)=>{v(b-e),v(b),v(b+e)},l=TM(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,v]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),v);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=AM(Math.atan2(d[2],d[0]),e),p=o(Math.asin(d[1])/Za);if(a(h,b=>{Ja(n,b,o(3),100*r,16*r,s.sunGlow,.55),Ja(n,b,p,60*r,60*r,s.sunGlow,.42),Ja(n,b,p,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>Ja(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let v=3+24*Math.pow(l(),1.6),w=l()*e,M=(8+42*l())*r,y=(.35+1.4*l())*r,S=Math.abs(w-h)%e;S=Math.min(S,e-S)/e;let N=Math.max(0,1-S/.28),R=nm(s.cloudDark,s.cloudLit,N),D=s.clouds*(.18+.32*l())*(.6+.4*N);a(w,F=>Ja(n,F,o(v),M,y,R,D))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let v=Math.sin(16*Za)+l()*(1-Math.sin(16*Za)),w=Math.asin(v)/Za,M=Math.min(1,Math.max(0,(w-16)/26)),y=s.stars*M*(.25+.7*l()*l());if(y<.03)continue;let S=.7+l()*1.1,N=1/Math.max(.12,Math.cos(w*Za));n.fillStyle=l()<.2?hi("#bcd2ff",y):hi("#ffffff",y),n.fillRect(l()*e,o(w),S*N,S)}let f=s.far,x=nm(f.body,f.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),v=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,w=o(v),M=o(-2.5);if(n.fillStyle=x,n.fillRect(m,w,b,M-w),v>2.1&&l()<.6&&n.fillRect(m+b/2-.5,w-3-l()*5,1,4+l()*5),f.windows>0){let y=Math.floor((M-w)*b*.05*f.windows);for(let S=0;S<y;S++){let N=l(),R=N<.62?"#ffc078":N<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=hi(R,(.25+.4*l())*Math.min(1,f.windows*1.4)),n.fillRect(m+Math.floor(l()*b),w+Math.floor(l()*(M-w)),1,1)}}f.neon>0&&l()<.04&&(n.fillStyle=hi(l()<.7?"#46e6ff":"#ffb347",.45*f.neon),n.fillRect(m,w-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let g=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(g.addColorStop(0,hi(f.haze,0)),g.addColorStop(.45,hi(f.haze,.38)),g.addColorStop(1,hi(f.haze,.62)),n.fillStyle=g,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let v=0;v<b;v++){let w=Math.pow(l(),1.3),M=-.3-3.9*w,y=l(),S=y<.6?"#ffb46a":y<.82?"#ffe2b0":y<.93?"#ffffff":"#55dcff";n.fillStyle=hi(S,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*w)),n.fillRect(l()*e,o(M),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,hi(s.groundHaze,.1)),_.addColorStop(1,hi(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var CM=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,PM=`
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
`;function IM(n,e){let t=new Mr;t.background=new Oe(n.clear);let i=new rt(new Cn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new qt({side:Jt,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let p=new rt(u,d);return p.position.set(h[0],h[1],h[2]),t.add(p),p},a=tt.cx,l=tt.cz;o(new hn(6.4,tt.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,tt.h,l]),o(new Mi(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,tt.h-.25,l]),o(new bn(tt.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new hn(tt.r-.6,tt.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,tt.h-.55,l]),o(Et(a,l,tt.r-.6,0,Math.PI*2,tt.h-.55,tt.h,64,!0),r(s.column,.85)),o(Et(a,l,gt.r,gt.a0,gt.a1,gt.bandY0,gt.bandY1,32,!0),r(s.media,1)),o(Et(a,l,gt.r,gt.a0,gt.a1,gt.bandY1,gt.top,32,!0),r(s.column,.85)),o(Et(a,l,gt.r-.3,gt.a0,gt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of Cu())o(Et(a,l,gt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function LM(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function im(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=Gt(i,s,null,{anisotropy:1});r.tex.wrapS=Ss,r.tex.generateMipmaps=!1,r.tex.minFilter=un,r.tex.magFilter=un;let o=new Xt({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new A(0,1,0)},uSunColor:{value:new Oe(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:CM,fragmentShader:PM,side:kn,depthTest:!1,depthWrite:!1,fog:!1}),a=new rt(new Cn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=IM(c,o),p=new Io(n),f=p.fromScene(h,.035,.1,400,{size:256,position:new A(tt.cx,1.6,tt.cz)});p.dispose(),LM(h,o),l&&l.dispose(),l=f}function d(h){c=h,r.redraw((p,f,x)=>RM(p,f,x,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var an=1,DM=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,NM=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,UM=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,FM=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  float reflK = uReflStrength * reflMask * mix(0.3, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.45) + reflCol * reflK;
}
`;function sm(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new Un(16,16,{type:Qn,generateMipmaps:!0,minFilter:zi,magFilter:un,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new bt},uReflStrength:{value:t},uReflBlur:{value:i}},o=new Nn;o.layers.set(0);let a=new A(0,1,0),l=new A(0,0,0),c=new A,u=new bt,d=new A,h=new A,p=new A,f=new Zn,x=new Zt,m=new Zt,g=new _e,_=0;function b(w){w.uniforms.tReflect=r.tReflect,w.uniforms.uReflMatrix=r.uReflMatrix,w.uniforms.uReflStrength=r.uReflStrength,w.uniforms.uReflBlur=r.uReflBlur,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${DM}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${NM}`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${UM}`).replace("#include <opaque_fragment>",`${FM}
#include <opaque_fragment>`)}function v(w,M){if(!n)return!1;n.getDrawingBufferSize(g);let y=Math.max(16,Math.round(g.x*e)),S=Math.max(16,Math.round(g.y*e));if((s.width!==y||s.height!==S)&&s.setSize(y,S),c.setFromMatrixPosition(M.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(M.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),p.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(p),o.far=M.far,o.updateMatrixWorld(),o.projectionMatrix.copy(M.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let N=r.uReflMatrix.value;N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(o.projectionMatrix),N.multiply(o.matrixWorldInverse),f.setFromNormalAndCoplanarPoint(a,l),f.applyMatrix4(o.matrixWorldInverse),x.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let R=o.projectionMatrix.elements;m.x=(Math.sign(x.x)+R[8])/R[0],m.y=(Math.sign(x.y)+R[9])/R[5],m.z=-1,m.w=(1+R[10])/R[14],x.multiplyScalar(2/x.dot(m)),R[2]=x.x,R[6]=x.y,R[10]=x.z+1-_,R[14]=x.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let D=n.getRenderTarget(),F=n.autoClear,B=n.shadowMap.autoUpdate;return n.shadowMap.autoUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(w,o),n.autoClear=F,n.shadowMap.autoUpdate=B,n.setRenderTarget(D),!0}return{uniforms:r,inject:b,update:v,setStrength(w){r.uReflStrength.value=w},dispose(){s.dispose()}}}var ii=Math.PI*2,kh=em();function Pu(n,e,t){let i=new qt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var Bh=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function om(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function OM(n){let e=new Ct({color:13949150,metalness:0,roughness:.18,name:"atrium-floor"});return e.onBeforeCompile=t=>{om(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Bh}
${kh}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
float ringD = length(vFloor - vec2(${tt.cx.toFixed(3)}, ${tt.cz.toFixed(3)}));
float inlay = fLine(abs(ringD - 18.6), 0.01, px);
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function kM(n){let e=new Ct({color:15659509,metalness:0,roughness:.14,name:"island-top"});return e.onBeforeCompile=t=>{om(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Bh}
${kh}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var BM=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,zM=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${Bh}
${kh}
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
}`,HM=`
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
}`,GM=`
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
}`;function VM(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(ii*o/t));for(let l=0;l<a;l++){let c=l/a*ii;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,p=n.r+e,f=Math.max(16,Math.ceil(Math.PI*p/t)),x=(g,_)=>{for(let b=0;b<=f;b++){let v=_-Math.PI*b/f;i.push([g[0]+p*(Math.cos(v)*c+Math.sin(v)*d),g[1]+p*(Math.cos(v)*u+Math.sin(v)*h)])}};return x(n.b,Math.PI/2),x(n.a,-Math.PI/2),{pts:i,center:(g,_)=>{let b=dt(((g-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function Fh(n,e,t,i){let{pts:s,center:r}=VM(n,e);return Vi(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function rm(n,e){let t=Pt.hx-Pt.r,i=Pt.hz-Pt.r;return n.map(([s,r])=>{let o=Pt.cx+dt(s-Pt.cx,-t,t),a=Pt.cz+dt(r-Pt.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var Oh=(n,e,t,i)=>(Pt.cx-n)*t+(Pt.cz-e)*i>0;function WM(n){let e=Uo.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function XM(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of Uo)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Pt.cx-Pt.hx),e=Math.min(e,Pt.cx+Pt.hx),t=Math.max(t,Pt.cz-Pt.hz),i=Math.min(i,Pt.cz+Pt.hz),{x0:n,x1:e,z0:t,z1:i}}function qM(n,e,t,i=6){let s=new A().subVectors(e,n),r=s.length(),o=new On(t,t,r,i,1,!0);return o.applyQuaternion(new dn().setFromUnitVectors(new A(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function $M({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=tt,l=ir,c=l.a1-l.a0,u=(S,N)=>[r+N*Math.cos(S),o-N*Math.sin(S)],d=new rt(P(new hn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(an),n.add("white",P(new hn(a+.2,Ri.r,160,1,l.a1,ii-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Et(r,o,Ri.r,l.a1,l.a0+ii,-.45,0,160,!1)),e.add("glowCyan",Et(r,o,Ri.r+.004,l.a1,l.a0+ii,-.24,-.21,160,!1)),e.add("white",Et(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Et(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Et(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",P(Fe(l.r1-Ri.r,l.slab,.04),s(S,(Ri.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,p=a+.05,f=[];for(let S=0;S<=4;S++)f.push(u(l.a0,p+(h-p)*S/4));let x=Math.ceil(c*h/.45);for(let S=1;S<=x;S++)f.push(u(l.a0+c*S/x,h));for(let S=3;S>=0;S--)f.push(u(l.a1,p+(h-p)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),g=(S,N,R,D)=>(m[0]-S)*R+(m[1]-N)*D>0,_=(S,N,R,D)=>!g(S,N,R,D);t.add("rail",Vi(f,.045,l.rail)),n.add("chrome",di(f.map(([S,N])=>[S,l.rail+.026,N]),.026,.1,8)),n.add("silver",Vi(f,0,.045,{facing:_})),n.add("glowCyan",Vi(f,0,.04,{facing:g}));for(let S=0;S<f.length;S+=5)n.add("chrome",P(ge(.018,.018,l.rail,8),[f[S][0],l.rail/2,f[S][1]]));let b=l.canopyY,v=a+.02,w=l.r1+.35;n.add("white",P(new hn(v,w,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",P(new hn(v,w,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",P(new hn(w-.13,w-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Et(r,o,w,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Et(r,o,w-.002,l.a0,l.a1,b,b+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",P(Fe(w-v,.14,.04),s(S,(v+w)/2,b+.07),[0,S,0]));for(let[S,N]of[[23.3,17],[25.2,19]])for(let R=0;R<N;R++){let D=l.a0+(R+.5)*c/N;n.add("glowWhite",P(new bn(.085,16),s(D,S,b-.003),[Math.PI/2,0,0])),n.add("chrome",P(new hn(.085,.11,16,1),s(D,S,b-.002),[Math.PI/2,0,0]))}let M=new A,y=new A;for(let S=0;S<6;S++){let N=l.a0+(S+.5)*c/6;Fo(N,w-.15,b+.14,M),Fo(N,a+.03,b+3.4,y),n.add("silver",qM(M,y,.014)),n.add("chrome",P(ge(.05,.05,.03,14),y.toArray(),[0,N,Math.PI/2]))}for(let S of[250,290]){let N=S*Math.PI/180;n.add("white",P(qe(.5,.34,2.4,.05,3),s(N,23.4,.27),[0,N,0])),n.add("dark",P(Fe(.32,.1,2.1),s(N,23.4,.05),[0,N,0])),n.add("glowCyan",P(Fe(.33,.012,2.11),s(N,23.4,.094),[0,N,0]))}return{floor:d}}function am(n,{reflection:e=null}={}){let t=new Wt;t.name="atrium";let{cx:i,cz:s,r,h:o}=tt,a={white:new Ct({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new Ct({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new Ct({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new Ct({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new Ct({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:Pu(4641535,3,"atrium-glow-cyan"),glowBlue:Pu(5213695,2.2,"atrium-glow-blue"),glowWhite:Pu(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=Pu(16777215,5,"atrium-ring-light"),u=Nr({color:13623538,opacity:.045,fresnel:.5,side:Jt}),d=Nr({color:14083830,opacity:.1,fresnel:.6,side:Jt}),h=Nr({color:14214901,opacity:.08,fresnel:.5,side:Jt}),p=Nr({color:13623538,opacity:.04,fresnel:.4}),f=new lt,x=new lt,m=new lt,g=new A,_=(xe,be,Ve)=>Fo(xe,be,Ve,g).toArray(),{doorA0:b,doorA1:v,doorH:w}=Ai,M=w+.12,y=ii/Ai.panes,S=.006/r,N=xe=>xe>b+1e-6&&xe<v-1e-6;for(let xe=0;xe<Ai.panes;xe++){let be=xe*y+S,Ve=(xe+1)*y-S,C=[be];for(let E of[b,v])E>be&&E<Ve&&C.push(E);C.push(Ve);for(let E=0;E+1<C.length;E++){let G=C[E],ve=C[E+1],ue=N((G+ve)/2)?M:.05,Ne=Math.max(2,Math.ceil((ve-G)/y*16));m.add("glass",Et(i,s,r,G,ve,ue,o,Ne,!0))}}let R=Ai.finDepth,D=o-.55,F=r-R/2-.004;for(let xe=0;xe<Ai.panes;xe++){let be=xe*y;if(!N(be)){m.add("fin",P(Fe(R,D,.022),_(be,F,D/2),[0,be,0])),f.add("silver",P(Fe(R+.04,.06,.05),_(be,F,.03),[0,be,0])),f.add("silver",P(Fe(R+.04,.06,.05),_(be,F,D-.03),[0,be,0]));for(let Ve of[1.1,4.7,8.3,11.9]){f.add("chrome",P(Fe(.025,.09,.17),_(be,r-.0175,Ve),[0,be,0])),f.add("chrome",P(Fe(.09,.09,.045),_(be,r-.075,Ve),[0,be,0]));for(let C of[-1,1])f.add("chrome",P(ge(.022,.022,.018,14),_(be+C*(.055/r),r-.039,Ve),[0,be,Math.PI/2]))}}}let B=o-.55;f.add("white",Et(i,s,r-.6,0,ii,B,o,160,!0)),f.add("satin",P(new hn(r-.6,r-.01,160,1),[i,B,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new hn(r-.16,r-.1,160,1),[i,B-.004,s],[Math.PI/2,0,0])),f.add("glowCyan",Et(i,s,r-.605,0,ii,B+.02,B+.05,160,!0));let L=v,W=ii-(v-b);f.add("glowCyan",P(new hn(r-.17,r-.13,160,1,L,W),[i,.003,s],[-Math.PI/2,0,0])),f.add("silver",Et(i,s,r-.03,L,L+W,0,.05,160,!0));for(let xe of[b,v])f.add("silver",P(Fe(.14,M,.06),_(xe,r-.03,M/2),[0,xe,0]));let V=v-b;f.add("silver",Et(i,s,r-.06,b,v,w,M,16,!0)),f.add("silver",Et(i,s,r+.04,b,v,w,M,16,!1)),f.add("silver",P(new hn(r-.06,r+.04,16,1,-v,V),[i,w,s],[Math.PI/2,0,0])),f.add("glowWhite",P(new hn(r-.025,r+.005,16,1,-v,V),[i,w-.002,s],[Math.PI/2,0,0])),f.add("silver",P(new hn(r-.22,r+.24,16,1,b,V),[i,.003,s],[-Math.PI/2,0,0]));let q=V/2,Y=r-.09;for(let[xe,be,Ve]of[[b-q,b,.9],[v,v+q,.1]]){m.add("fin",Et(i,s,Y,xe+.03/Y,be-.03/Y,.06,w-.06,12,!0)),f.add("silver",Et(i,s,Y-.02,xe,be,0,.06,12,!0)),f.add("silver",Et(i,s,Y-.02,xe,be,w-.06,w,12,!0));for(let C of[xe,be])f.add("silver",P(Fe(.05,w,.05),_(C,Y,w/2),[0,C,0]));f.add("chrome",P(ge(.012,.012,1.1,8),_(xe+(be-xe)*Ve,Y-.05,1.05)))}f.add("silver",Et(i,s,Y-.035,b-q,v+q,w,w+.08,24,!0)),f.add("ceiling",P(new hn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let xe=0;xe<16;xe++){let be=xe/16*ii,Ve=(r+6.4)/2;f.add("white",P(Fe(r-6.4,.34,.3),[i+Ve*Math.cos(be),o-.17,s-Ve*Math.sin(be)],[0,be,0]))}for(let xe of[9,16.5])f.add("white",Et(i,s,xe,0,ii,o-.34,o,160,!0)),f.add("white",Et(i,s,xe+.3,0,ii,o-.34,o,160,!1)),f.add("white",P(new hn(xe,xe+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let xe of[11.15,11.85])f.add("satin",Et(i,s,xe,0,ii,o-.24,o,160,!0)),f.add("satin",Et(i,s,xe,0,ii,o-.24,o,160,!1));let Z=new rt(P(fn(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);Z.name="ring-light",Z.position.set(i,o-.15,s),t.add(Z),f.add("chrome",P(fn(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let xe=0;xe<4;xe++)f.add("silver",P(Fe(12.8,.12,.12),[i,o+.03,s],[0,xe*Math.PI/4,0]));let ne=new rt(P(new bn(6.4,96),[0,0,0],[Math.PI/2,0,0]),p);ne.name="skylight",ne.position.set(i,o+.06,s),t.add(ne);let{a0:re,a1:Ee}=gt,ze=gt.moduleR-.36;f.add("dark",Et(i,s,gt.r,re,Ee,gt.bandY0,gt.bandY1,72,!0)),f.add("white",Et(i,s,gt.r,re,Ee,gt.bandY1,gt.top,72,!0)),f.add("white",Et(i,s,gt.r,re,Ee,2.3,gt.bandY0,72,!0)),f.add("satin",Et(i,s,gt.r,re,Ee,0,2.3,72,!0)),f.add("white",Et(i,s,gt.back,re,Ee,0,gt.top,72,!1)),f.add("white",P(new hn(gt.r,gt.back,72,1,re,Ee-re),[i,gt.top,s],[-Math.PI/2,0,0])),f.add("white",P(new hn(ze,gt.r,72,1,re,Ee-re),[i,2.3,s],[-Math.PI/2,0,0])),f.add("white",Et(i,s,ze,re,Ee,2.22,2.3,72,!0)),f.add("glowBlue",Et(i,s,ze-.004,re,Ee,2.245,2.265,72,!0)),f.add("glowCyan",Et(i,s,gt.r-.012,re,Ee,7.1,7.14,72,!0)),f.add("glowCyan",Et(i,s,gt.r-.012,re,Ee,2.64,2.68,72,!0));let ie=gt.back-ze+.04,Te=(gt.back+ze)/2;for(let[xe,be]of[[re-.07/Te,-1],[Ee+.07/Te,1]]){f.add("white",P(Fe(ie,gt.top,.14),[i+Te*Math.cos(xe),gt.top/2,s-Te*Math.sin(xe)],[0,xe,0]));let Ve=xe-be*(.075/ze);f.add("glowCyan",P(Fe(.04,gt.top-.4,.03),[i+(ze+.02)*Math.cos(Ve),gt.top/2,s-(ze+.02)*Math.sin(Ve)],[0,xe,0]))}let De=24,se=new Fn(new Ft(.62,2.22,.78),a.white,De);se.name="compute-modules";let K=new _e(.7,2.08),Me=new ft(K.x,K.y),Ke=new Xt({name:"module-doors",vertexShader:HM,fragmentShader:GM,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:K}}}),Pe=new Fn(Me,Ke,De);Pe.name="module-doors";let $e=new Float32Array(De),Ie=new en;for(let xe=0;xe<De;xe++){let be=re+(xe+.5)*(Ee-re)/De;Fo(be,gt.moduleR,1.11,Ie.position),Ie.rotation.set(0,be,0),Ie.updateMatrix(),se.setMatrixAt(xe,Ie.matrix),Fo(be,gt.moduleR-.316,1.11,Ie.position),Ie.rotation.set(0,be-Math.PI/2,0),Ie.updateMatrix(),Pe.setMatrixAt(xe,Ie.matrix),$e[xe]=xe*7.31+3.7,f.add("chrome",P(Fe(.66,.03,.82),[Ie.position.x,.015,Ie.position.z],[0,be,0]))}Me.setAttribute("aSeed",new Xn($e,1)),se.instanceMatrix.needsUpdate=!0,Pe.instanceMatrix.needsUpdate=!0,se.computeBoundingSphere(),Pe.computeBoundingSphere(),se.receiveShadow=!0,t.add(se,Pe);let de=OM(e),z=new rt(P(new bn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),de);z.name="atrium-floor",z.position.set(i,0,s),z.receiveShadow=!0,z.layers.set(an);let X=$M({kit:f,low:x,glassKit:m,floorMat:de,at:_});t.add(X.floor);let oe=XM(),$=new rt(P(new ft(oe.x1-oe.x0,oe.z1-oe.z0),[0,0,0],[-Math.PI/2,0,0]),kM(e));$.name="island-tops",$.position.set((oe.x0+oe.x1)/2,0,(oe.z0+oe.z1)/2),$.receiveShadow=!0,$.layers.set(an),t.add(z,$);for(let xe of Uo)x.add("satin",Fh(xe,0,-Ru,0)),x.add("silver",Fh(xe,.004,-.045,-.001)),x.add("glowCyan",Fh(xe,.006,-Ru,-Ru+.05));let te=tm(.5);x.add("satin",Vi(te,-Pt.depth,0,{closed:!0,facing:Oh}));let Se=rm(te,.012);x.add("glowCyan",Vi(Se,-.17,-.13,{closed:!0,facing:Oh})),x.add("glowBlue",Vi(Se,-Pt.depth+.1,-Pt.depth+.14,{closed:!0,facing:Oh}));let U=new Xt({name:"data-pool",vertexShader:BM,fragmentShader:zM,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),Q=new rt(P(new ft(Pt.hx*2,Pt.hz*2),[0,0,0],[-Math.PI/2,0,0]),U);Q.name="data-pool",Q.position.set(Pt.cx,-Pt.depth,Pt.cz),Q.layers.set(an),t.add(Q);let ae=rm(te,-.06),I=[];for(let xe of WM(ae)){I.push(Vi(xe,.035,1)),f.add("chrome",di(xe.map(([be,Ve])=>[be,1.01,Ve]),.022,.08,8)),f.add("glowCyan",Vi(xe,0,.035)),f.add("glowCyan",Vi(xe.slice().reverse(),0,.035));for(let be=0;be<xe.length;be+=5)f.add("chrome",P(ge(.018,.018,1,8),[xe[be][0],.5,xe[be][1]]))}if(I.length){let xe=new lt;for(let Ve of I)xe.add("glass",Ve);let be=xe.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(be)}let Qe=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});Qe.traverse(xe=>{xe.isMesh&&(xe.renderOrder=2)}),t.add(Qe);let it=f.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(it);let pt=x.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});pt.traverse(xe=>xe.layers.set(an)),t.add(pt);let Ae=.3;return{root:t,reflectors:[z,$,X.floor],bounds:oe,update(xe,be,Ve={}){let C=dt(Ve.activity||0,0,1);Ae+=(.3+.7*C-Ae)*Math.min(1,xe*2),U.uniforms.uTravel.value=(U.uniforms.uTravel.value+xe*(.25+1.4*C))%1e3,U.uniforms.uFlow.value=Ae,Ke.uniforms.uTime.value=be,Ke.uniforms.uActivity.value=Ae},setLook(xe){let be=xe.glow==null?1:xe.glow;for(let Ve of l)Ve.color.setHex(Ve.userData.glow.hex).multiplyScalar(Ve.userData.glow.k*be);c.color.set(xe.interior.ring).multiplyScalar(xe.interior.ringPower),a.ceiling.emissiveIntensity=xe.id==="day"?.16:.22,U.uniforms.uGlow.value=be}}}var Ns=Ri.groundY,Us={pitch:96,rot:18*Math.PI/180},zh=Math.cos(Us.rot),Hh=Math.sin(Us.rot),lm=13*289,ja=2400;function sr(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function cm(n,e,t=[0,0]){return t[0]=tt.cx+zh*n+Hh*e,t[1]=tt.cz-Hh*n+zh*e,t}function Gh(n,e,t=[0,0]){return t[0]=tt.cx+e*Math.cos(n),t[1]=tt.cz-e*Math.sin(n),t}function um(){return{uHaze:{value:new Oe(2902638)},uHazeHigh:{value:new Oe(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new _e(tt.cx,tt.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new A(0,1,0)},uSunColor:{value:new Oe(16777215)},uSunK:{value:.2},uSkyRefl:{value:new Oe(3103372)}}}function Wi(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var Xi=["uHaze","uHazeHigh","uHazeDensity"],qi=`
#define GROUND_Y (${Ns.toFixed(1)})
#define GRID_P ${Us.pitch.toFixed(1)}
#define GRID_C ${zh.toFixed(7)}
#define GRID_S ${Hh.toFixed(7)}
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
`;var YM=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,KM=`
${qi}
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
`,ZM=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,JM=`
${qi}
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
#define TOWER_R ${Ri.r.toFixed(3)}

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
`;function dm(n,{quality:e="high"}={}){let t=Wi(n,[...Xi,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new Oe(461846)},uStreet:{value:new Oe(16752714)},uAvenue:{value:new Oe(4641535)},uRoof:{value:new Oe(1712690)},uPark:{value:new Oe(463887)}}),i=new Xt({name:"city-ground",vertexShader:YM,fragmentShader:KM,uniforms:t}),s=e==="low"?4200:6e3,r=new bn(s,96).rotateX(-Math.PI/2),o=new rt(r,i);return o.name="city-ground",o.position.set(tt.cx,Ns,tt.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(an),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function hm(n){let e=Wi(n,[...Xi,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new Oe(1778996)},uGlassC:{value:new Oe(660516)},uSpine:{value:new Oe(4641535)}}),t=new Xt({name:"city-host-facade",vertexShader:ZM,fragmentShader:JM,uniforms:e}),i=-.45,s=i-Ns,r=new On(Ri.r,Ri.r,s,128,1,!0),o=new rt(r,t);return o.name="city-host-facade",o.position.set(tt.cx,(i+Ns)/2,tt.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(an),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var jM=`
${qi}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${ja.toFixed(1)}

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
`,QM=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function fm(n,{quality:e="high"}={}){let t=sr(91),i=Us.pitch,s=e==="low"?2:1,r=[];for(let p=-20;p<=20;p+=4){let f=(p+.5)*i;for(let x of[0,1]){let m=-330+t()*120,g=28+Math.floor(t()*22);r.push({axis:x,coord:f-6,y:m,speed:g,spacing:34*s}),r.push({axis:x,coord:f+6,y:m+5,speed:-(g+3),spacing:34*s})}}for(let p of[-16,-12,12,16]){let f=(p+.5)*i;for(let x of[0,1]){let m=-70+t()*70,g=40+Math.floor(t()*20);r.push({axis:x,coord:f,y:m,speed:t()<.5?g:-g,spacing:60*s})}}let o=[],a=[];for(let p of r){let f=Math.floor(2*ja/p.spacing);for(let x=0;x<f;x++){o.push(p.axis,p.coord,p.y,p.speed);let m=t(),g=p.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((x+t()*.6)/f,7+t()*8,t(),g)}}let l=o.length/4,c=new ft(1,1),u=new Na;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new Xn(new Float32Array(o),4)),u.setAttribute("aCar",new Xn(new Float32Array(a),4)),u.instanceCount=l;let d=new Xt({name:"city-traffic",vertexShader:jM,fragmentShader:QM,uniforms:Wi(n,[...Xi,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:Pn,side:Jt}),h=new rt(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(an),{mesh:h,count:l}}var xm=Math.PI/180,Vh=Us.pitch,eS=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],tS=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],nS={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},iS=`
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
`,sS=`
${qi}
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
`;function rS(n,e){return Math.hypot(n-tt.cx,e-tt.cz)}function oS(n,e){let t=sr(17),i=n==="low"?1500:2600,s=Math.ceil(i/Vh)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=eS.map(c=>{let[u,d]=Gh(c.a*xm,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let p=c*Vh+d,f=u*Vh+h,x=Math.hypot(p,f);if(x<110||x>i)continue;let m=x<2e3?.62:.62*(1-(x-2e3)/650);if(t()>m)continue;let g=12+t()*20,_=12+t()*20,b=(t()-.5)*Math.max(0,37-g),v=(t()-.5)*Math.max(0,37-_);cm(p+b,f+v,a);let w=a[0],M=a[1];if(e.some(L=>Math.hypot(L.x-w,L.z-M)<L.rad))continue;let y=dt((x-120)/650,0,1),S=22+Math.pow(t(),2.2)*(70+250*y),N=0;for(let L of o)N=Math.max(N,Math.exp(-((w-L.x)**2+(M-L.z)**2)/L.r2));S+=N*(140+220*t());let R=Math.min(Ns+S,N>.3?60:-40),D=t(),F=N>.3?D<.3?0:D<.45?1:D<.6?2:3:D<.35?0:D<.6?1:D<.9?2:3,B=0;Math.min(g,_)>=22&&t()<.18&&(B|=1),t()<.45&&(B|=2),t()<.35&&(B|=8),l.push({x:w,z:M,w:g,d:_,base:Ns-20,top:R,rot:Us.rot,seed:t(),style:F,flags:B})}return l}function aS(n){let e=sr(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function lS(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*xm,[d,h]=Gh(u,c.r),p=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):Us.rot,f={x:d,z:h,w:c.w,d:c.d,base:Ns-20,top:c.top,rot:p,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(f),f};for(let c of tS){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(nS);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function pm(n,e,t){let i=new Ft(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Fn(i,e,s),l=new en;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new Xn(r,3)),i.setAttribute("aInfo",new Xn(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var cS=`
${qi}
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
`,uS=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function dS(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function hS(n,e,t,i){let s=sr(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,p]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...dS(d,h*d.w/2.15,p*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new Nt;l.setAttribute("position",new ut(r,3)),l.setAttribute("aSeed",new Wn(a,1));let c=new Xt({name:"city-beacons",vertexShader:cS,fragmentShader:uS,uniforms:Wi(n,[...Xi,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:Pn}),u=new ga(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(an),{points:u,count:o}}var Iu=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],fS=6,pS=`
${qi}
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
`,mS=`
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
`;function gS(){return{atlas:Gt(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),Iu.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${$t}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function xS(n,e){let t=sr(53),i=[],s=n.filter(o=>{let a=rS(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*Iu.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[tt.cx-o.x,tt.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?fS:Math.floor(t()*Iu.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function _S(n,e,t){let{atlas:i,cols:s,rows:r}=gS(),o=sr(61),a=xS(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new ft(1,1),h=new Xt({name:"city-signs",vertexShader:pS,fragmentShader:mS,uniforms:Wi(n,[...Xi,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:Pn,side:Jt}),p=new Fn(d,h,l);p.name="city-signs";let f=new en,x=new Oe;return a.forEach((m,g)=>{f.position.set(m.pos[0],m.pos[1],m.pos[2]),f.rotation.set(0,0,0),f.lookAt(tt.cx,m.tilt?0:m.pos[1],tt.cz),f.scale.set(m.w,m.w/4,1),f.updateMatrix(),p.setMatrixAt(g,f.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],g*4),x.set(Iu[_][1]),u.set([x.r,x.g,x.b,o()],g*4)}),d.setAttribute("aCell",new Xn(c,4)),d.setAttribute("aTint",new Xn(u,4)),p.instanceMatrix.needsUpdate=!0,p.frustumCulled=!1,p.layers.set(an),{mesh:p,count:l}}var mm={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function gm(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${$t}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${$t}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${$t}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${$t}`,n.fillText(mm[i.phase]||mm.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${Lt}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${$t}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let p=(c-l)/a.length;a.forEach((f,x)=>{let m=(u-d)*f/h;n.fillRect(l+x*p+2,u-m,Math.max(2,p-4),m)})}function vS(n){let i=new Array(40).fill(0),s=Gt(1024,Math.round(1024*40/96),(x,m,g)=>gm(x,m,g,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new qt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Wt;o.name="city-billboard";let a=new rt(new ft(96,40),r);o.add(a);let l=new rt(new Ft(98,42,1.2),new qt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new qt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new rt(new Ft(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(x=>{x.renderOrder=5});let h="",p=1,f=0;return{group:o,update(x,m){f+=x,f>=1&&(f=0,i.shift(),i.push(m.tps||0)),p+=x;let g=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;p<1||g===h||(p=0,h=g,s.redraw((_,b,v)=>gm(_,b,v,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var yS=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,bS=`
${qi}
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
`;function Oo(n,e,t,i=!1){return new Xt({name:i?"city-glow-add":"city-glow",vertexShader:yS,fragmentShader:bS,defines:i?{ADDITIVE:""}:{},uniforms:Wi(n,Xi,{uColor:{value:new Oe(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?Pn:rs})}var MS=`
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
`,SS=`
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
`,wS=`
${qi}
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
`,ES=`
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
`;function _m(n,e,t=16){return new On(e,n,1,t,1,!0).translate(0,.5,0)}function TS(n,e,t){let i=new Wt;i.name="compute-tower";let s=Oo(n,4646655,4),r=Oo(n,10480383,5),o=Oo(n,5078015,4),a=Oo(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(M,y,S,N)=>{let R=new rt(new Mi(M,y,10,160),N);return R.rotation.x=Math.PI/2,R.position.set(e.x,S,e.z),i.add(R),R};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new rt(new On(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let p=new _e(t.x-e.x,t.z-e.z).normalize(),f=new A(e.x+p.x*(c+2),100,e.z+p.y*(c+2)),x=new rt(new Cn(4,20,14),r);x.position.copy(f),i.add(x);let m=new A().subVectors(f,t),g=m.length(),_=new dn().setFromUnitVectors(new A(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uTime:n.uTime,uLen:{value:g},uColor:{value:new Oe(6282495)}};for(let[M,y,S]of[[.07,2,1],[.38,8,0]]){let N=new Xt({name:S?"beam-core":"beam-glow",vertexShader:MS,fragmentShader:SS,uniforms:{...b,uCore:{value:S}},transparent:!0,depthWrite:!1,blending:Pn,side:Jt}),R=new rt(_m(M,y,16),N);R.position.copy(t),R.quaternion.copy(_),R.scale.set(1,g,1),R.frustumCulled=!1,R.renderOrder=3,i.add(R)}let v=new qt({name:"beam-receiver"});v.color.setHex(6282495).multiplyScalar(4);let w=new rt(new Mi(.5,.05,8,48),v);return w.rotation.x=Math.PI/2,w.position.copy(t),i.add(w),i.traverse(M=>{M.isMesh&&M.renderOrder===0&&(M.renderOrder=5)}),{group:i,setLook(M){s.uniforms.uGain.value=4*(.35+.65*M.neon),r.uniforms.uGain.value=5*(.4+.6*M.neon),o.uniforms.uGain.value=4*(.35+.65*M.neon),a.uniforms.uColor.value.set(M.body)},update(M,y,S){b.uIntensity.value=Math.max(.08,y)*S,x.scale.setScalar(.6+y*.8),w.scale.setScalar(.8+y*.6+Math.sin(M*6)*.05*y),d.rotation.z=M*.12},glows:l}}function AS(n,e){let t=new Wt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new Oe(8378623)}};for(let[h,p]of[[5,1],[20,0]]){let f=new Xt({name:p?"tether-core":"tether-glow",vertexShader:wS,fragmentShader:ES,uniforms:Wi(n,Xi,{...r,uCore:{value:p}}),transparent:!0,depthWrite:!1,blending:Pn,side:Jt}),x=new rt(_m(1,1,14),f);x.position.set(i.x,i.top,i.z),x.scale.set(h,s,h),x.frustumCulled=!1,t.add(x)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new rt(new Mi(a,1.6,8,192),Oo(n,4646655,3.2,!0)),c=new rt(new Mi(a*.8,1.1,8,160),Oo(n,5078015,3,!0)),u=new Wt,d=new Wt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function vm({quality:n="high",beamTarget:e=new A(-8,3,-.7)}={}){let t=new Wt;t.name="city";let i=um(),s=lS(),r=s.towers.filter(N=>N.mega).map(N=>({x:N.x,z:N.z,rad:Math.max(N.w,N.d)*.75+30})),o=oS(n,r),a=aS(o),l=Wi(i,[...Xi,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new Oe(725538)},uGlass:{value:new Oe(462106)}}),c=new Xt({name:"city-towers",vertexShader:iS,fragmentShader:sS,uniforms:l}),u=pm(o.concat(a),c,"city-towers");u.layers.set(an);let d=pm(s.towers,c,"city-megatowers"),h=hS(i,o,a,s),p=dm(i,{quality:n}),f=hm(i),x=fm(i,{quality:n}),m=_S(i,o,s),g=vS(s.billboard),_=TS(i,s.compute,e),b=AS(i,s);t.add(p.mesh,f.mesh,u,d,h.points,x.mesh,m.mesh,g.group,_.group,b.group);let v=0,w=0,M=0,y=1,S=1;return{root:t,update(N,R,D={}){let F=dt(D.activity||0,0,1);v+=(F-v)*Math.min(1,N*1.5);let B=.5+1.5*v;w=(w+N*B)%lm,M=(M+N*B)%(2*ja),i.uTime.value=R,i.uTravel.value=w,i.uAir.value=M,i.uDensity.value=(.3+.7*v)*y,_.update(R,v,S),b.update(R),g.update(N,D)},setLook(N){let R=N.city;i.uHaze.value.set(R.haze),i.uHazeHigh.value.set(R.hazeHigh),i.uHazeDensity.value=R.hazeDensity,i.uSkyRefl.value.set(R.skyRefl),i.uWindows.value=R.windows,i.uNeon.value=R.neon,i.uLights.value=R.lights,i.uBeacons.value=R.beacons,i.uTraffic.value=R.traffic,i.uSunK.value=R.sunK,i.uSunDir.value.fromArray(N.sun.dir).normalize(),i.uSunColor.value.set(N.sun.color),l.uBody.value.set(R.body),l.uGlass.value.set(R.glass),p.setLook(R),f.setLook(R),_.setLook(R),b.setLook(R),y=R.trafficScale??1,S=.45+.55*R.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:x.count}}}}var ym=724504;var RS={low:0,medium:1024,high:2048,ultra:4096};function CS(n,e){let t=RS[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Fr=new A,Lu=new A,Du=new Ps;function PS(n,e,t,i=4.6){Lu.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Lu).addScaledVector(e,60),n.target.position.copy(Lu),n.updateMatrixWorld(),n.target.updateMatrixWorld(),Du.position.copy(n.position),Du.lookAt(Lu),Du.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let p of[t.z0,t.z1])Fr.set(d,h,p).applyMatrix4(Du.matrixWorldInverse),s=Math.min(s,Fr.x),r=Math.max(r,Fr.x),o=Math.min(o,Fr.y),a=Math.max(a,Fr.y),l=Math.min(l,-Fr.z),c=Math.max(c,-Fr.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function Bn(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=Ye(new ft(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(an),o}function bm(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Wt;a.name="stage";let l=im(i,s,{quality:t});a.add(l.dome);let c=am(n,{reflection:r});a.add(c.root);let u=vm({quality:t,beamTarget:o});a.add(u.root);let d=new So(16777215,3);d.name="sun",a.add(d,d.target);let h=new La(16777215,8947848,1);h.name="sky-light";let p=new So(16777215,.5);p.name="fill",a.add(h,p,p.target),CS(d,t);let f=new A;function x(m){l.setLook(m),f.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,PS(d,f,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,p.color.set(m.fill.color),p.intensity=m.fill.intensity,p.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),p.target.position.set(0,0,-1),p.updateMatrixWorld(),p.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return x(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,g,_){c.update(m,g,_),u.update(m,g,_)},setLook:x,dispose(){l.dispose()}}}var Mm=Math.PI/180;function Sm(n,e){let t=n*Mm,i=e*Mm;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function wm(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var Or=["dusk","day"],rr="dusk",jt={min:.6,max:1.6,step:.05,initial:1},Em={dusk:{id:"dusk",clear:858675,sun:{dir:Sm(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:wm([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:Sm(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:wm([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function Wh(n){return Em[n]||Em[rr]}function Tm(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Qa(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function el({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return Gt(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,p=d%5===0,[f,x]=u(h,p?170:184),[m,g]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=p?5:2,r.beginPath(),r.moveTo(f,x),r.lineTo(m,g),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${$t}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[p,f]=u(h/(t.length-1),136);r.fillText(d,p,f)}),r.font=`700 34px ${$t}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${$t}`,r.fillText(e,a,a+130)})}function Xh(n,e,{inverted:t=!1}={}){let s=Math.max(64,Math.round(1024*n/(It*e)));return Gt(1024,s,r=>{r.fillStyle=t?"#e9e6dc":"#101114",r.fillRect(0,0,1024,s),r.fillStyle=t?"#141414":"#f1efe8",r.textAlign="center",r.textBaseline="middle",r.font=`700 ${Math.round(1024/10*.62)}px ${Lt}`;for(let o=0;o<10;o++)r.save(),r.translate((o+.5)*(1024/10),s/2),r.rotate(-Math.PI/2),r.fillText(String(o),0,2),r.restore();r.fillStyle="rgba(0,0,0,0.35)";for(let o=0;o<=10;o++)r.fillRect(o*(1024/10)-1,0,2,s)},{anisotropy:8})}function us(n,e,t,i="#4d6bfe"){return Gt(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,Tm(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,Tm(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${Lt}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Qa(s,n,r-170,46,700,$t),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Qa(s,e.toUpperCase(),r-170,24,600,$t),s.fillText(e.toUpperCase(),152,100)})}function Nu(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return Gt(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Qa(o,n,t-20,Math.round(i*.42),700,$t),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Qa(o,e,t-20,Math.round(i*.26),600,$t),o.fillText(e,12,i*.76))})}function Uu(n,e,{bg:t="#05070a",glow:i=0}={}){let s=Gt(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?Lt:$t}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Qa(a,c.text,n-32,u,c.weight||600,c.mono?Lt:$t),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function Am(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=Gt(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${Lt}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function Rm(){return Gt(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${$t}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function Cm(){return Gt(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${$t}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var tn=new A(-8,0,-.7),kr=.41,Pm=1.9,qh=1.86;function IS(){return Gt(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function Im(n){let e=yt("fuel"),t=yt("tank",[tn.x,0,tn.z]);e.add(t),e.add(Bn(n,2.6,2.6,[tn.x,0,tn.z],.6));let i=new lt;i.add("graphite",P(qe(1.8,.28,1.8,.05),[0,.2,0]));for(let[F,B]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",P(ge(.07,.08,.06,20),[F,.03,B]));for(let F of[.375,2.345])i.add("steel",P(ge(.83,.83,.07,72),[0,F,0])),i.add("chrome",Do(18,.775,F+(F<1?.04:-.04),.017,.016)),i.add("rubber",P(ge(.712,.712,.03,64),[0,F+(F<1?.05:-.05),0]));i.add("alu",cs([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let F=0;F<6;F++){let B=F/6*It+.26,L=Math.cos(B)*.79,W=Math.sin(B)*.79;i.add("chrome",P(ge(.016,.016,2.04,12),[L,1.36,W]));for(let V of[.33,2.4])i.add("steel",P(ge(.03,.03,.03,6),[L,V,W]))}i.add("steel",P(ge(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",P(ge(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",P(qe(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",P(ge(.07,.08,.05,24),[0,2.695,0])),i.add("steel",P(ge(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",P(ge(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",P(qe(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=Ye(ge(.7,.7,Pm,72,!0),n.glass,[0,kr+Pm/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=Ye(ge(.685,.685,1,72),n.fuel,[0,kr+.5,0],null,null,{cast:!1}),o=Ye(new bn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=Ye(fn(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new Fn(new Cn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(F,B)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*It,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*It+B}));t.add(c);let d=Ye(new ft(.085,qh),In(Rm().tex,.1),[0,kr+.02+qh/2,.892],null,null,{cast:!1}),h=Ye(new $s(.02,.05,3),Vt(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let p=Vt(4054148,2.5),f=Ye(new Cn(.07,24,12,0,It,0,Math.PI/2),p,[0,2.72,0],null,null,{cast:!1});t.add(f);let x=yt("fuel-hmi",[tn.x+.95,0,tn.z+1.3],[0,-.35,0]),m=new lt;m.add("graphite",P(qe(.36,.04,.3,.015),[0,.02,0])),m.add("alu",P(ge(.035,.035,.95,16),[0,.5,0])),m.add("graphite",P(qe(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),x.add(m.build(n,{name:"hmi"}));let g=Uu(640,384,{bg:"#04070c"}),_=Ye(new ft(.66,.396),Ka(g.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});x.add(_),e.add(x),e.add(Bn(n,.8,.8,[x.position.x,0,x.position.z],.45));let b=new lt,v=(F,B)=>new A(F,B,tn.z);b.add("steel",di([v(-6.92,.375),v(-6.05,.375),v(-6.05,.92)],.05,.16)),b.add("steel",di([v(-6.05,1.38),v(-6.05,2.3),v(-4.75,2.3),v(-4.75,2.1)],.05,.18)),b.add("steel",P(ge(.1,.1,.025,24),[-6.93,.375,tn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(F=>P(ge(.012,.012,.09,6),[-6.925,.375+Math.cos(F)*.075,tn.z+Math.sin(F)*.075],[0,0,Math.PI/2]))),b.add("blue",P(ge(.085,.085,.18,24),[-6.6,.375,tn.z],[0,0,Math.PI/2])),b.add("chrome",P(ge(.022,.022,.26,12),[-6.6,.52,tn.z])),b.add("steel",P(ge(.045,.05,.1,16),[-6.6,.47,tn.z])),b.add("orange",P(fn(.11,.012,8,40),[-6.6,.64,tn.z],[Math.PI/2,0,0]));for(let F=0;F<3;F++)b.add("orange",P(new Ft(.21,.014,.014),[-6.6,.64,tn.z],[0,F/3*Math.PI,0]));for(let F of[.945,1.355])b.add("alu",P(ge(.085,.085,.05,32),[-6.05,F,tn.z]));b.add("chrome",...[0,1,2,3].map(F=>P(ge(.008,.008,.41,6),[-6.05+Math.cos(F*1.5708+.78)*.078,1.15,tn.z+Math.sin(F*1.5708+.78)*.078])));for(let F of[-6.8,-6.25])b.add("graphite",P(qe(.12,.33,.16,.015),[F,.165,tn.z]));b.add("steel",P(qe(.22,.09,.22,.02),[-4.75,2.1,tn.z])),b.add("chrome",Do(4,.12,2.15,.012,.012,.78).map(F=>F.translate(-4.75,0,tn.z))),e.add(b.build(n,{name:"feed"}));let w=Ye(ge(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,tn.z],null,null,{cast:!1,receive:!1}),M=IS().tex,y=new Ct({color:330264,emissive:16777215,emissiveMap:M,emissiveIntensity:1.8,roughness:.3}),S=Ye(ge(.034,.034,.36,24,!0),y,[-6.05,1.15,tn.z],null,null,{cast:!1});e.add(w,S);let N=.5,R="",D=new en;return{root:e,anchors:{tank:new A(tn.x,2.9,tn.z),hmi:new A(x.position.x,1.5,x.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(F){let B=JSON.stringify(F);B!==R&&(R=B,g.set(F))},update(F,B,L){N=Bt(N,dt(L.level,.02,1),2.5,F);let W=N*qh;r.scale.y=W,r.position.y=kr+.012+W/2,o.position.y=a.position.y=kr+.012+W+.001,h.position.y=kr+.02+W;let V=dt(L.flow,0,1);for(let q=0;q<l;q++){let Y=u[q];Y.y+=F*(.05+V*.32)*Y.v/Math.max(.25,W),Y.y>1&&(Y.y=0,Y.a=Math.random()*It,Y.r=Math.sqrt(Math.random())*.6);let Z=Math.sin(B*3+Y.w)*.01;D.position.set(Math.cos(Y.a)*Y.r+Z,kr+.03+Y.y*Math.max(0,W-.04),Math.sin(Y.a)*Y.r),D.scale.setScalar(Y.s*(.3+.7*Math.min(1,(W-Y.y*W)*10+.3))),D.updateMatrix(),c.setMatrixAt(q,D.matrix)}c.instanceMatrix.needsUpdate=!0,M.offset.y-=F*(.15+V*2.6),y.emissiveIntensity=.5+V*2.2,p.emissive.setHex(L.peak?16753978:4054148),p.emissiveIntensity=1.6+Math.sin(B*2.2)*.6}}}var Fu=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],fi={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},rn={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"}},ko=new Set(["engraver","labeler"]),LS=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function Dm(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of LS)if(i.test(e))return t;return"generic"}function Nm(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function Yh(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function tl(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function nl(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=nl(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function Um(n,e){let t=Nm(e),i=nl(t,["file_path","path","filePath","files"]);if(i)return tl(Yh(i)||i);let s=nl(t,["command","cmd","script","code"]);if(s)return tl(s.split(`
`).find(a=>a.trim())||s);let r=nl(t,["url"]);if(r)try{return tl(new URL(r).host||r)}catch{return tl(r)}let o=nl(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?tl(o):""}function $h(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function Lm(n,e){let t=$h(n),i=$h(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function Fm(n,e){let t=String(n||"").toLowerCase(),i=Nm(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:$h(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=Lm(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=Lm(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var or=new A(-4,0,-.7),Bo=new A(-2.08,0,1.54),Om=1.45;function km(n,e,t,i,s,r=.02,o=0){let a=new Ys,l=(u,d,h,p,f,x)=>{u.moveTo(d+x,h),u.lineTo(d+p-x,h),u.quadraticCurveTo(d+p,h,d+p,h+x),u.lineTo(d+p,h+f-x),u.quadraticCurveTo(d+p,h+f,d+p-x,h+f),u.lineTo(d+x,h+f),u.quadraticCurveTo(d,h+f,d,h+f-x),u.lineTo(d,h+x),u.quadraticCurveTo(d,h,d+x,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new Rs;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new Tr(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function Bm(n,e,{x:t,y:i,r:s,face:r}){let o=new lt;o.add("chrome",P(fn(s+.01,s*.1,12,64),[t,i,.012])),o.add("darkSteel",P(ge(s+.012,s+.012,.02,64),[t,i,-.004],[Math.PI/2,0,0])),e.add(o.build(n,{name:"gauge"}));let a=new Ct({map:r.tex,emissive:16777215,emissiveMap:r.tex,emissiveIntensity:.32,roughness:.5});e.add(Ye(new bn(s,64),a,[t,i,.008],null,null,{cast:!1}));let l=yt("needle",[t,i,.02]),c=new lt;return c.add("orange",new Ft(s*.055,s*.82,.004).translate(0,s*.34,0)),c.add("darkSteel",new Ft(s*.09,s*.2,.004).translate(0,-s*.1,0)),c.add("chrome",ge(s*.09,s*.09,.012,24).rotateX(Math.PI/2).translate(0,0,.004)),l.add(c.build(n,{name:"needle",castShadow:!1})),e.add(l),e.add(Ye(new bn(s,48),n.glass,[t,i,.032],null,null,{cast:!1,receive:!1})),l}function zm(n){let e=yt("engine"),t=yt("engine-body",[or.x,0,or.z]);e.add(t),e.add(Bn(n,4.8,2.7,[or.x+.35,0,or.z],.62));let i=new lt;i.add("graphite",P(qe(3.9,.36,1.9,.05),[.35,.24,0])),i.add("aluDark",P(qe(3.94,.04,1.94,.015),[.35,.44,0]));for(let te of[-1.45,2.15])for(let Se of[-.8,.8])i.add("rubber",P(ge(.08,.09,.06,20),[te,.03,Se]));for(let te of[-.72,.62])i.add("graphite",P(qe(.22,.56,1,.03),[te,.72,0])),i.add("steel",P(qe(.26,.04,1.04,.01),[te,.47,0])),i.add("chrome",...[-.4,.4].map(Se=>P(ge(.02,.02,.03,6),[te,.5,Se])));i.add("graphite",P(qe(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let te of[1.435,2.165])i.add("graphite",P(qe(.07,1.62,.82,.02),[te,1.24,-.1]));for(let te of[.46,2.02])i.add("graphite",P(qe(.78,.06,.82,.02),[1.8,te,-.1]));i.add("aluDark",km(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),i.add("grille",P(new ft(.5,.18),[1.8,.6,.335])),i.add("chrome",P(ge(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),i.add("chrome",P(ge(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),i.add("steel",P(ge(.05,.065,.12,20),[.8,2.12,0]));for(let te=0;te<4;te++)i.add("chrome",P(fn(.034,.007,8,24),[.8,2.2+te*.03,0],[Math.PI/2,0,0]));i.add("orange",P(ge(.045,.045,.03,20),[.8,2.32,0])),i.add("alu",P(ge(.022,.022,.3,12),[2,2.2,-.36])),i.add("graphite",P(ge(.05,.056,.03,20),[2,2.73,-.36]));for(let te of[.12,.28])i.add("rubber",di([[te,.95,.42],[te,.62,.86],[te,.62,1.06]],.024,.18,10));t.add(i.build(n,{name:"engine-body"}));let s=yt("turbine",[0,Om,0],[0,0,-Math.PI/2]);t.add(s);let r=new lt;r.add("alu",cs([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),r.add("aluDark",P(ge(.6,.6,.56,64),[0,-.72,0]));for(let te=0;te<9;te++)r.add("alu",P(ge(.665,.665,.022,64),[0,-.97+te*.06,0]));r.add("steel",P(ge(.69,.69,.05,72),[0,-.445,0])),r.add("steel",P(ge(.69,.69,.05,72),[0,.405,0])),r.add("chrome",Do(20,.66,-.413,.016,.014)),r.add("chrome",Do(20,.66,.373,.016,.014,.157)),r.add("alu",P(ge(.62,.62,.66,64),[0,.76,0])),r.add("aluDark",cs([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),r.add("chrome",P(ge(.06,.06,.26,24),[0,1.33,0])),r.add("grille",P(ge(.6,.6,.012,64),[0,-1.2,0]));for(let te of[.22,.37,.52])r.add("chrome",P(fn(te,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let te=0;te<6;te++)r.add("chrome",P(new Ft(1.18,.012,.028),[0,-1.205,0],[0,te/6*Math.PI,0]));s.add(r.build(n,{name:"casing"}));let o=yt("rotor"),a=new lt;a.add("darkSteel",P(ge(.24,.24,.8,48),[0,-.02,0]));for(let[te,Se,U,Q]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let ae=0;ae<te;ae++){let I=qe(.32,Q,.014,.004,1);I.rotateX(U),I.translate(.41,Se,0),I.rotateY(ae/te*It),a.add("chrome",I)}a.add("chrome",cs([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),o.add(a.build(n,{name:"rotor"}));let l=Vt(5078015,1),c=[-.33,-.02,.29].map(te=>P(ge(.247,.247,.026,48,!0),[0,te,0])),u=new lt().add("core",c);o.add(u.build({core:l},{name:"core",castShadow:!1})),s.add(o);let d=Ye(ge(.632,.632,.81,72,!0),n.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});s.add(d);let h=us(rn.engine.zh,rn.engine.en,rn.engine.code);t.add(Ye(new ft(.5,.14),In(h.tex,.35),[.76,Om+.05,.628],null,null,{cast:!1}));let p=Ye(Lh(24,.27,.31,.06,.06),n.brass,[1.74,1.5,.08]),f=Ye(Lh(12,.125,.165,.06,.045),n.steel,[1.987,1.148,.08]),x=-7*Ei,m=-4*Ei;t.add(p,f),t.add(Ye(new ft(.62,1.1),n.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let _=[16726832,16753183,3461498,5078015].map((te,Se)=>{let U=Vt(te,.15);return t.add(Ye(ge(.055,.055,.085,24),U,[2,2.66-Se*.09,-.36],null,null,{cast:!1})),U}),b=yt("console",[-.35,0,1.22]);t.add(b);let v=new lt;v.add("graphite",P(qe(2.2,.82,.46,.03),[0,.41,0])),v.add("rubber",P(qe(2.16,.06,.4,.02),[0,.03,.01])),b.add(v.build(n,{name:"console"}));let w=us(rn.console.zh,rn.console.en,rn.console.code);b.add(Ye(new ft(.72,.2),In(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let M=yt("panel",[0,.98,.02],[-.62,0,0]);b.add(M);let y=new lt;y.add("aluDark",P(qe(2.24,.62,.06,.02),[0,0,-.03])),y.add("graphite",km(.86,.56,.8,.5,.016,.012).translate(.16,0,0)),M.add(y.build(n,{name:"panel"}));let S=Bm(n,M,{x:-.74,y:0,r:.205,face:el({title:"上下文压力",sub:"CONTEXT %",labels:["0","20","40","60","80","100"]})}),N=Bm(n,M,{x:.86,y:.08,r:.13,face:el({title:"生成速率",sub:"TOKEN / S",labels:["0","30","60","90","120"],redFrom:.9})}),R=.028,D=.04,F=ge(R,R,D,24).rotateZ(-Math.PI/2),B=Xh(D,R),L=Xh(D,R,{inverted:!0}),W=te=>new Ct({map:te.tex,emissive:16777215,emissiveMap:te.tex,emissiveIntensity:.12,roughness:.45,metalness:.1}),V=[.19,.095,0,-.095,-.19],q=[],Y=new Fn(F,W(B),36),Z=new Fn(F,W(L),2);Y.castShadow=Z.castShadow=!1;let ne=0;for(let te=0;te<4;te++)for(let Se=0;Se<8;Se++)q.push({inst:Y,index:ne++,x:.16+.163-Se*.044,y:V[te],row:te,power:Se});for(let te=0;te<6;te++){let Se=te<2;q.push({inst:Se?Z:Y,index:Se?te:ne++,x:.16+.163-te*.044-(Se?0:.03),y:V[4],row:4,power:te})}M.add(Y,Z),M.add(Ye(new bn(.006,12),Vt(15855592,.6),[.16+.163-2*.044+.022-.015,V[4]-.018,.04],null,null,{cast:!1})),[["未命中输入","INPUT · MISS"],["缓存命中","CACHE HIT"],["输出","OUTPUT"],["推理","REASONING"],["花费 ¥","COST · CNY"]].forEach(([te,Se],U)=>{let Q=Nu(te,Se,{w:256,h:80}).tex;M.add(Ye(new ft(.2,.0625),In(Q,.2),[.16-.29,V[U],.012],null,null,{cast:!1}))}),M.add(Ye(new ft(.8,.5),n.glass,[.16,0,.064],null,null,{cast:!1,receive:!1}));let ze=[["思考",10185727],["生成",5078015],["工具",16753183],["空闲",11187141]].map(([te,Se],U)=>{let Q=.66+U*.13,ae=new lt().add("chrome",P(ge(.032,.032,.014,24),[Q,-.17,.007],[Math.PI/2,0,0]));M.add(ae.build(n,{name:"lamp",castShadow:!1}));let I=Vt(Se,.15);M.add(Ye(new Cn(.024,20,10,0,It,0,Math.PI/2),I,[Q,-.17,.014],[Math.PI/2,0,0],null,{cast:!1}));let Qe=Nu(te,"",{w:128,h:48}).tex;return M.add(Ye(new ft(.1,.0375),In(Qe,.2),[Q,-.235,.004],null,null,{cast:!1})),I}),ie=[];for(let te=0;te<24;te++){let Se=new is({map:n.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),U=new Es(Se);U.visible=!1,t.add(U),ie.push({sp:U,mat:Se,life:0,vx:0,vz:0})}let Te=0,De=yt("dispenser",[Bo.x,0,Bo.z]);e.add(De);let se=new lt;se.add("white",P(qe(.5,1.2,.56,.03),[0,.6,0])),se.add("plastic",P(Fe(.02,.05,.36),[.252,.922,0])),se.add("aluDark",P(qe(.54,.05,.6,.015),[0,1.225,0])),se.add("grille",P(new ft(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),De.add(se.build(n,{name:"dispenser"}));let K=Nu(rn.dispenser.zh,`${rn.dispenser.en} · ${rn.dispenser.code}`.toUpperCase(),{w:256,h:80});De.add(Ye(new ft(.34,.106),In(K.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let Me=Vt(5078015,.3);De.add(Ye(new Ft(.012,.012,.3),Me,[.256,.97,0],null,null,{cast:!1})),e.add(Bn(n,.9,.9,[Bo.x,0,Bo.z],.5));let Ke=new lt().add("rubber",di([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));e.add(Ke.build(n,{name:"conduit"}));let Pe=new qt({visible:!1}),$e=(te,Se,U,Q)=>{let ae=new rt(new Ft(Se[0],Se[1],Se[2]),Pe);return ae.position.set(U[0],U[1],U[2]),ae.userData.hoverId=te,Q.add(ae),{id:te,object:ae}},Ie={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},de=new bt,z=new Float32Array(8),X=new Oe,oe={reasoning:new Oe(10185727),generating:new Oe(4160511),tool:new Oe(16753183),idle:new Oe(2838456)};function $(te,Se,U){let Q=Math.max(0,Se);for(let ae=0;ae<U;ae++){let I=Math.pow(10,ae),Qe=Math.floor(Q/I)%10,it=Q%I,pt=0;ae===0?pt=Q-Math.floor(Q):it>I-1&&(pt=it-(I-1)),z[ae]=-((Qe+pt+.5)/10)*It}for(let ae of q)ae.row===te&&(de.makeRotationX(z[ae.power]),de.setPosition(ae.x,ae.y,.03),ae.inst.setMatrixAt(ae.index,de))}return{root:e,anchors:{engine:new A(or.x,2.5,or.z),console:new A(or.x-.35,1.45,or.z+1.22),dispenser:new A(Bo.x,1.45,Bo.z)},hover:[$e("engine",[3.2,1.7,1.5],[.2,1.45,0],t),$e("console",[2.3,1.35,.8],[-.35,.68,1.22],t),$e("dispenser",[.6,1.3,.62],[0,.65,0],De)],pulseDispenser(){Ie.dispPulse=1},update(te,Se,U){let Q=U.phase,ae=Q==="generating"||Q==="reasoning",I=.35+dt(U.tps,0,140)*.16+(Q==="thinking"?.8:0);Ie.rotorSpeed=Bt(Ie.rotorSpeed,I,1.4,te),Ie.rotorAngle+=Ie.rotorSpeed*te,o.rotation.y=Ie.rotorAngle,p.rotation.z=x+Ie.rotorAngle*.45,f.rotation.z=m-Ie.rotorAngle*.9;let Qe=oe[Q]||oe.idle;X.copy(l.emissive).lerp(Qe,1-Math.exp(-4*te)),l.emissive.copy(X);let it=.85+.15*Math.sin(Se*9),pt=ae?(2.4+dt(U.tps,0,120)/30)*it:Q==="tool"?.9:Q==="thinking"?1.3:.45;l.emissiveIntensity=Bt(l.emissiveIntensity,pt,5,te),Ie.ctx=Bt(Ie.ctx,dt(U.ctx,0,1),2.5,te);let Ae=ae?Math.sin(Se*41)*.006:0;S.rotation.z=(135-270*Ie.ctx)*Ei+Ae,Ie.tach=Bt(Ie.tach,dt(U.tps/120,0,1),3,te),N.rotation.z=(135-270*Ie.tach)*Ei+Ae*2;let xe=[U.counters.miss,U.counters.hit,U.counters.output,U.counters.reasoning,U.counters.cost*100];for(let G=0;G<5;G++){let ve=xe[G]||0,ue=Ie.disp[G];ve<ue||ve-ue<.02?ue=ve:ue=Bt(ue,ve,3.2,te),Ie.disp[G]=ue,$(G,ue,G===4?6:8)}Y.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0;let be=[Q==="reasoning"||Q==="thinking",Q==="generating",Q==="tool",Q==="idle"];ze.forEach((G,ve)=>{G.emissiveIntensity=Bt(G.emissiveIntensity,be[ve]?3.2:.12,10,te)}),Ie.err=Math.max(0,Ie.err-te*.5),U.errorPulse&&(Ie.err=1);let Ve=Math.sin(Se*12)>0?1:.2,C=[Ie.err>0?3.5*Ve:.1,Q==="tool"?3:.1,ae||Q==="thinking"?3:.6,Q==="reasoning"?3:.1];_.forEach((G,ve)=>{G.emissiveIntensity=Bt(G.emissiveIntensity,C[ve],12,te)}),Ie.dispPulse=Math.max(0,Ie.dispPulse-te*2.5),Me.emissiveIntensity=.3+Ie.dispPulse*4;let E=dt((Ie.ctx-.78)/.22,0,1);Te+=te*E*18;for(let G of ie)if(G.life<=0&&Te>=1&&(Te-=1,G.life=1,G.vx=(Math.random()-.5)*.15,G.vz=(Math.random()-.5)*.15,G.sp.position.set(.8,2.36,0),G.sp.visible=!0),G.life>0){G.life-=te/1.7;let ve=1-G.life;G.sp.position.x+=G.vx*te,G.sp.position.z+=G.vz*te,G.sp.position.y+=te*(.55-ve*.25),G.sp.scale.setScalar(.08+ve*.55),G.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,ve*1.2))*.32),G.life<=0&&(G.sp.visible=!1)}Te>4&&(Te=4)}}}var Yi=new A(2.6,0,-1),zo=3.1,Ki=2.35,zr=.75,mn=.922,il=.012,Kh=1,Zh=1,Hm=.4,Br=235*Ei,Ho=305*Ei,$i=1.54;function Ci(n,e,t=0,i=new A){return i.set(Yi.x+e*Math.cos(n),t,Yi.z-e*Math.sin(n))}var Wm=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Ou(n){let e=yt("pedestal"),t=new lt;t.add("graphite",P(ge(.15,.17,.04,40),[0,.02,0])),t.add("alu",P(ge(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",P(ge(.12,.1,.03,48),[0,.835,0])),t.add("chrome",P(fn(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*It+.3;t.add("ceramic",P(ge(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=Vt(5078015,.25);return e.add(Ye(fn(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}function DS(n){let e=yt("robot",[Yi.x,0,Yi.z]),t=new lt;t.add("graphite",cs([[.001,0],[1.14,0],[1.2,.03],[1.2,.6],[1.17,.64],[.001,.64]],96)),t.add("rubber",P(ge(1.205,1.205,.05,96,!0),[0,.03,0])),t.add("alu",P(ge(1.15,1.15,.05,96),[0,.665,0])),t.add("aluDark",P(ge(.42,.44,.02,64),[0,.7,0])),t.add("white",P(ge(.3,.32,.07,64),[0,.745,0])),t.add("chrome",P(fn(.31,.008,8,64),[0,.712,0],[Math.PI/2,0,0]));for(let m=0;m<8;m++){let g=m/8*It;t.add("chrome",P(ge(.014,.014,.012,6),[Math.cos(g)*.38,.715,Math.sin(g)*.38]))}e.add(t.build(n,{name:"robot-base"}));let i=Vt(5078015,1.4);e.add(Ye(fn(1.185,.01,8,128),i,[0,.62,0],[Math.PI/2,0,0],null,{cast:!1}));let s=us(rn.robot.zh,rn.robot.en,rn.robot.code);e.add(Ye(new ft(.62,.174),In(s.tex,.35),[0,.38,1.205],null,null,{cast:!1}));let r=yt("arm");e.add(r);let o=yt("link1");r.add(o);let a=new lt;a.add("white",P(qe(1.16,.06,.17,.03),[.5,.81,0])),a.add("chrome",P(ge(.09,.09,.066,40),[0,.81,0])),a.add("aluDark",P(ge(.075,.075,.07,40),[1,.81,0])),a.add("graphite",P(qe(.6,.008,.08,.004),[.5,.842,0])),o.add(a.build(n,{name:"link1"}));let l=yt("link2",[Kh,0,0]);o.add(l);let c=new lt;c.add("white",P(qe(1.12,.05,.13,.025),[.5,.87,0])),c.add("chrome",P(ge(.07,.07,.054,40),[0,.87,0])),c.add("chrome",P(ge(.055,.055,.056,32),[1,.87,0])),l.add(c.build(n,{name:"link2"}));let u=yt("fork",[Zh,0,0]);l.add(u);let d=new lt;d.add("aluDark",P(ge(.05,.05,.012,32),[0,.9,0])),d.add("ceramic",P(qe(.24,.012,.085,.006),[.12,.911,0])),d.add("ceramic",P(qe(.07,.012,.22,.006),[.25,.911,0]));for(let m of[-.08,.08])d.add("ceramic",P(qe(.33,.012,.045,.006),[.42,.911,m]));d.add("rubber",...[-.08,.08].map(m=>P(ge(.008,.008,.004,10),[.5,.918,m]))),u.add(d.build(n,{name:"fork",castShadow:!0}));let h=Vt(5078015,.8);u.add(Ye(Fe(.06,.004,.01),h,[.08,.918,0],null,null,{cast:!1}));let p={yaw:270*Ei,reach:zr,lift:0},f=new A;function x(){let m=dt(p.reach-Hm,.02,Kh+Zh-1e-4),g=Math.acos(m/(Kh+Zh));o.rotation.y=p.yaw+g,l.rotation.y=-2*g,u.rotation.y=g,r.position.y=p.lift}return x(),{root:e,pose:p,setPose(m,g,_){p.yaw=m,p.reach=g,p.lift=_,x()},carryPoint(m=f){return e.updateMatrixWorld(!0),m.set(Hm,0,0),u.localToWorld(m),m.y=.921+p.lift,m},setBusy(m){h.emissiveIntensity=m?3:.8,i.emissiveIntensity=m?2.2:1.4},hover:{id:"robot",object:e}}}function Gm(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=yt(`chamber-${r}`,[e.x,0,e.z]),l=new lt;l.add("white",P(qe(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",P(qe(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",P(qe(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let g of[-.4,.4])l.add("aluDark",P(Fe(.04,.3,.04),[m,1,g]));l.add("aluDark",P(Fe(.84,.03,.04),[0,1.15,.4]),P(Fe(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",P(Fe(.04,.03,.84),[.4,1.15,0]),P(Fe(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",P(ge(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let g=m/3*It;l.add("ceramic",P(ge(.005,.005,.03,8),[Math.cos(g)*.06,.903,Math.sin(g)*.06]))}l.add("graphite",P(Fe(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",P(Fe(.5,.2,.05),[o,.95,-.42])),l.add("steel",P(ge(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",P(ge(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[P(new ft(.76,.27),[0,1,.4]),P(new ft(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),P(new ft(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new lt().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=Ye(qe(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=Ye(qe(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let p=us(i,s,r);a.add(Ye(new ft(.56,.158),In(p.tex,.35),[0,.62,.402],null,null,{cast:!1}));let f=Vt(3461498,.6);a.add(Ye(Fe(.6,.016,.01),f,[0,.79,.403],null,null,{cast:!1}));let x={track:0,hub:0};return{root:a,led:f,setDoors(m,g){x.track=m,x.hub=g,d.position.y=.95+m*.13,h.position.y=.95+g*.13},doors:x}}function Vm(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",P(qe(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",P(Fe(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Fe(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),p=t.x+r*h,f=t.z+o*h;e.add("aluDark",P(Fe(.05,.84,.05),[p,.43,f],[0,l,0])),e.add("graphite",P(Fe(.16,.02,.16),[p,.01,f],[0,l,0]))}return{len:a,yaw:l,mid:c}}function Xm(n){let e=yt("cell"),t=DS(n);e.add(t.root),e.add(Bn(n,2.9,2.9,[Yi.x,0,Yi.z],.6));let i=Ci(Br,zo),s=Ci(Ho,zo),r=Gm(n,{center:i,side:-1,...rn.lock,hubDoorX:.18}),o=Gm(n,{center:s,side:1,...rn.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(Bn(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(Bn(n,1.3,1.3,[s.x,0,s.z],.5));let a=Ci(Br,Ki,mn),l=Ci(Ho,Ki,mn),c=Ou(n);c.root.position.set(a.x,0,a.z);let u=Ou(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new lt,h=new A(-1.83,0,$i),p=new A(i.x-.42,0,$i),f=new A(s.x+.42,0,$i),x=new A(7.18,0,$i);Vm(n,d,h,p),Vm(n,d,f,x);let m=(w,M)=>{let y=M.x-w.x,S=M.z-w.z,N=Math.hypot(y,S);d.add("aluDark",P(qe(N,.02,.2,.006),[(w.x+M.x)/2,.892,(w.z+M.z)/2],[0,Math.atan2(-S,y),0]))};m(new A(i.x+.18,0,i.z-.44),new A(a.x-.06,0,a.z+.1)),m(new A(s.x-.18,0,s.z-.44),new A(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let g=Vt(5078015,1.2),_=[];for(let[w,M]of[[h,p],[f,x]]){let y=M.x-w.x;_.push(P(Fe(y,.008,.008),[(w.x+M.x)/2,.858,$i+.185]))}e.add(new lt().add("led",_).build({led:g},{name:"track-led",castShadow:!1})),e.add(Bn(n,p.x-h.x+.4,.7,[(h.x+p.x)/2,0,$i],.4)),e.add(Bn(n,x.x-f.x+.4,.7,[(f.x+x.x)/2,0,$i],.4));let b=new qt({visible:!1}),v=(w,M)=>{let y=new rt(new Ft(.9,1.25,.9),b);return y.position.set(M.x,.62,M.z),y.userData.hoverId=w,e.add(y),{id:w,object:y}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new A(-1.95,mn,$i),lockCenter:new A(i.x,mn,i.z),lockPort:a,outPort:l,outCenter:new A(s.x,mn,s.z),trackEnd:new A(x.x-.08,mn,$i)},trackLed:g,hover:[{id:"robot",object:t.root},v("lock",i),v("unload",s)],anchors:{robot:new A(Yi.x,1.4,Yi.z),lock:new A(i.x,1.45,i.z),unload:new A(s.x,1.45,s.z)}}}var Qh=n=>(200-n*24.4)*Ei,Ut=zo-Ki,ot=.89,NS={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#6b7280"},US={archive:[.46,.17],press:[-.44,.17]},sl=(n,e=.6)=>new qt({color:n,transparent:!0,opacity:e,blending:Pn,depthWrite:!1});function FS(n,e,t,i=8){let s=new A(n[0],n[1],n[2]),r=new A(e[0],e[1],e[2]),o=ge(t,t,s.distanceTo(r),i);return o.applyQuaternion(new dn().setFromUnitVectors(new A(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function ef(n,e=1.36){n.add("aluDark",P(Fe(.06,e,.07),[.4,e/2,Ut])),n.add("graphite",P(Fe(.16,.03,.16),[.4,.015,Ut])),n.add("aluDark",P(Fe(.48,.06,.08),[.16,e,Ut])),n.add("chrome",P(Fe(.4,.01,.01),[.17,e-.035,Ut+.03]))}function OS(){return Gt(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${Lt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function kS(){return Gt(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function BS(n,e,t){t.add("graphite",P(qe(.88,.8,.42,.02),[0,ot+.4,-.33])),t.add("aluDark",P(qe(.9,.03,.44,.01),[0,ot+.815,-.33]));let i=OS().tex,s=new Fn(qe(.26,.17,.3,.008),new Ct({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let x=0;x<4;x++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:ot+.13+x*.19,out:0,until:0});t.add("aluDark",P(Fe(.06,.46,.06),[0,ot+.23,.16])),t.add("aluDark",P(Fe(.07,.06,.88),[0,ot+.46,.56]));let o=yt("scan-head",[0,ot+.4,Ut]);e.add(o),o.add(new lt().add("graphite",P(qe(.38,.07,.09,.012),[0,-.035,0])).add("chrome",P(Fe(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=Vt(7314431,.6);o.add(Ye(Fe(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=ot+.4-.075-(mn+.004),c=sl(6130687,0),u=Ye(new ft(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=sl(10469631,0),h=Ye(Fe(.3,.001,.008),d,[0,mn+.006-(ot+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let p=new bt,f=0;return{update(x,m,g){let _=g.work;if(o.position.z=Ut+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,g.working&&m>f){f=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let v=r[b];v.out=Bt(v.out,m<v.until?.16:0,9,x),p.makeTranslation(v.x,v.y,-.12-.15+.015+v.out),s.setMatrixAt(b,p)}s.instanceMatrix.needsUpdate=!0}}}function zS(n,e,t,i){t.add("graphite",P(qe(.8,.34,.44,.02),[0,ot+.17,-.32]));for(let f=0;f<9;f++)t.add("alu",P(Fe(.012,.1,.38),[-.32+f*.08,ot+.39,-.32]));t.add("rubber",di([[.3,ot+.2,-.09],[.3,ot+.32,.12],[.37,1.5,Ut-.08]],.018,.12,8));for(let f of[-.37,.37])t.add("aluDark",P(Fe(.07,1.44,.09),[f,.72,Ut])),t.add("graphite",P(Fe(.16,.03,.18),[f,.015,Ut]));t.add("aluDark",P(Fe(.84,.09,.11),[0,1.44,Ut])),t.add("chrome",P(Fe(.76,.016,.016),[0,1.44,Ut+.062])),t.add("hazard",P(Fe(.84,.02,.112),[0,1.494,Ut]));let s=new Cs({color:16738816,emissive:16730624,emissiveIntensity:.06,transparent:!0,opacity:.3,roughness:.08,metalness:0,side:Jt,depthWrite:!1});for(let f of[-.335,.335])e.add(Ye(new ft(.5,.42),s,[f,1.17,Ut],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=yt("laser-head",[0,1.44,Ut]);e.add(r);let o=new lt;o.add("chrome",P(qe(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",P(qe(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",P(ge(.026,.02,.07,20),[0,-.24,0])),o.add("orange",P(Fe(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(mn+.004),c=sl(12101375,0),u=Ye(ge(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new Es(new is({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:Pn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,mn+.008-1.44,0),r.add(d);let h=new A,p=0;return{update(f,x,m){let g=m.work;r.position.x=Math.sin(x*5.3)*.1*g,r.position.z=Ut+Math.sin(x*3.1+1)*.06*g;let _=m.working&&m.wafer?1:0;if(c.opacity=Bt(c.opacity,_*(.75+.25*Math.sin(x*60)),20,f),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(p+=f*40,d.getWorldPosition(h);p>1;)p-=1,i.sparks(h,1)}}}function HS(n,e,t){t.add("ceramic",P(qe(.52,.42,.36,.03),[-.12,ot+.27,-.34])),t.add("ceramic",P(qe(.4,.32,.18,.04),[-.12,ot+.27,-.5])),t.add("graphite",P(qe(.3,.06,.24,.01),[-.12,ot+.03,-.34])),t.add("graphite",P(qe(.48,.36,.01,.02),[-.12,ot+.27,-.158]));let i=Am();e.add(Ye(new ft(.4,.3),Ka(i.tex,1.5),[-.12,ot+.27,-.151],null,null,{cast:!1})),t.add("plastic",P(qe(.46,.03,.16,.008),[-.1,ot+.015,.1])),e.add(Ye(new ft(.44,.14),In(kS().tex,.1),[-.1,ot+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),ef(t),t.add("steel",P(ge(.04,.04,.14,20),[0,1.26,Ut]));let s=yt("probe",[0,1.1,Ut]);e.add(s),s.add(new lt().add("chrome",P(ge(.015,.015,.3,12),[0,.15,0])).add("graphite",P(ge(.13,.13,.018,48),[0,.009,0])).add("gold",P(ge(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=Vt(4063119,.2);s.add(Ye(fn(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=Bt(s.position.y,c.working&&c.wafer?mn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function GS(n,e,t){t.add("graphite",P(ge(.13,.15,.08,40),[0,ot+.04,-.3]));let i=yt("pan",[0,ot+.08,-.3]);e.add(i);let s=new lt;s.add("white",P(ge(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",P(Fe(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",P(Fe(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=yt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=Jt;let a=[];for(let m=0;m<=12;m++){let g=.03+.39*(m/12);a.push([g,g*g/1.2])}let l=new lt;l.add("dish",cs(a,64)),l.add("chrome",P(fn(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",P(ge(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let g=m/3*It+Math.PI/6;l.add("aluDark",FS([Math.cos(g)*.4,.135,Math.sin(g)*.4],[0,.3,0],.006))}l.add("graphite",P(new $s(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",P(ge(.03,.03,.05,18),[0,.37,0]));let c=yt("dish",[0,.07,0]);r.add(c),r.add(new lt().add("aluDark",P(ge(.05,.05,.08,20),[0,.03,0]),P(ge(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=Vt(10849535,.3);c.add(Ye(Jh(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,g)=>{let _=sl(10127103,0),b=Ye(fn(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:_,age:g/3}});ef(t),t.add("graphite",P(qe(.12,.08,.12,.012),[0,1.29,Ut])),t.add("white",P(ge(.004,.004,.18,6),[.03,1.42,Ut]));let h=Vt(10849535,.2);e.add(Ye(Jh(.012),h,[.03,1.515,Ut],null,null,{cast:!1}));let p=0,f=0,x=0;return{update(m,g,_){_.working&&g>x&&(x=g+1.2+Math.random()*1.5,f=(Math.random()-.5)*1.6),_.working||(f=0),p=Bt(p,f,1.6,m),i.rotation.y=p,r.rotation.x=-.62+Math.sin(g*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(g*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let v=b.age;b.r.position.y=.42+v*.9,b.r.scale.setScalar(1+v*6),b.mat.opacity=_.work*(1-v)*.8}}}}var Jh=n=>new Cn(n,16,10);function VS(n,e,t){t.add("graphite",P(qe(.5,.32,.34,.02),[.18,ot+.16,-.36])),t.add("aluDark",P(qe(.12,.18,.03,.01),[-.27,ot+.2,-.36]));let i=Vt(5078015,.5);e.add(Ye(Fe(.3,.02,.005),i,[.18,ot+.25,-.188],null,null,{cast:!1}));let s=[-.05,ot,.12],r=.38,o=.36,a=.1;t.add("graphite",P(ge(.09,.095,.04,32),[s[0],ot+.02,s[2]]));let l=yt("j0",[s[0],ot+.04,s[2]]);e.add(l),l.add(new lt().add("white",P(ge(.07,.075,.13,32),[0,.065,0])).add("graphite",P(ge(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=yt("j1",[0,.16,0]);l.add(c),c.add(new lt().add("white",P(qe(.095,r,.095,.04),[0,r/2,0])).add("graphite",P(ge(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=yt("j2",[0,r,0]);c.add(u),u.add(new lt().add("white",P(qe(.078,o,.078,.035),[0,o/2,0])).add("graphite",P(ge(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=yt("j3",[0,o,0]);u.add(d),d.add(new lt().add("graphite",P(ge(.035,.035,.05,24),[0,.025,0])).add("chrome",P(ge(.03,.03,.012,24),[0,.056,0])).add("aluDark",P(Fe(.012,.045,.03),[-.02,.08,0]),P(Fe(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=Vt(5078015,.6);d.add(Ye(fn(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let p=ot+.04+.16,f=new A(0,p+.25,.25),x=new A;function m(g,_,b){let v=g-s[0],w=b-s[2];l.rotation.y=Math.atan2(v,w);let M=Math.hypot(v,w),y=_+a-p,S=dt(Math.hypot(M,y),.05,r+o-.001),N=Math.atan2(M,y),R=dt((S*S-r*r-o*o)/(2*r*o),-1,1),D=Math.acos(R),F=N-Math.atan2(o*Math.sin(D),r+o*Math.cos(D));c.rotation.x=F,u.rotation.x=D,d.rotation.x=Math.PI-F-D}return m(f.x,f.y,f.z),{update(g,_,b){b.working&&b.wafer?x.set(.08*Math.cos(_*1.7),mn+.03+.06*Math.max(0,Math.sin(_*3.4)),Ut-.04+.07*Math.sin(_*2.3)):b.working?x.set(.05*Math.sin(_*1.3),p+.12,Ut-.3):x.set(-.05+.04*Math.sin(_*.6),p+.22,.32),f.x=Bt(f.x,x.x,4,g),f.y=Bt(f.y,x.y,4,g),f.z=Bt(f.z,x.z,4,g),m(f.x,f.y,f.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(_*8))}}}function jh(n){return n<.22?Ph(n/.22):n<.42?1:1-Ph((n-.42)/.58)}function WS(n,e,t){t.add("graphite",P(qe(.6,.28,.3,.02),[.14,ot+.14,-.38])),t.add("white",P(ge(.08,.08,.3,28),[.14,ot+.36,-.38],[0,0,Math.PI/2])),t.add("steel",P(ge(.06,.06,.24,24),[-.3,ot+.12,-.4])),t.add("blue",P(qe(.3,.86,.26,.03),[0,ot+.43,.02])),t.add("blue",P(qe(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",P(Fe(.322,.04,.01),[0,1.6,.942])),t.add("steel",P(ge(.085,.085,.22,32),[0,1.45,Ut])),t.add("chrome",P(fn(.086,.008,8,32),[0,1.34,Ut],[Math.PI/2,0,0])),t.add("rubber",di([[.06,1.5,Ut-.06],[.2,1.5,Ut-.3],[.2,1.2,.2],[.2,ot+.3,-.2]],.016,.1,8)),t.add("rubber",di([[-.06,1.42,Ut-.06],[-.2,1.42,Ut-.3],[-.2,1.1,.2],[-.2,ot+.28,-.22]],.016,.1,8));let i=yt("ram",[0,1.12,Ut]);e.add(i),i.add(new lt().add("chrome",P(ge(.035,.035,.42,20),[0,.21,0])).add("steel",P(qe(.32,.05,.32,.012),[0,0,0])).add("darkSteel",P(ge(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>P(ge(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=el({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(Ye(new bn(.07,40),new Ct({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=Ye(Fe(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(Ye(fn(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?jh(o):0;i.position.y=1.12-.155*d,a=Bt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*Ei}}}function XS(n,e,t){for(let d of[-.42,.42])t.add("aluDark",P(Fe(.035,.66,.035),[d,ot+.33,-.33]));t.add("alu",P(qe(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",P(Fe(.6,.03,.06),[0,1.16,-.3])),t.add("blue",P(ge(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",P(ge(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=Cm();e.add(Ye(new ft(.8,.6),new Ct({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=qe(.11,.075,.008,.004),o=s.map(d=>{let h=Ye(r,new Ct({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,p)=>h.forEach((f,x)=>{let[m,g]=l(p,x),_=o[f];_.userData.tx=m,_.userData.ty=g,d&&_.position.set(m,g,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=Bt(h.position.x,h.userData.tx,7,d),h.position.y=Bt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function qS(n,e,t){t.add("graphite",P(ge(.07,.08,.04,28),[.3,ot+.02,-.35])),t.add("alu",P(ge(.028,.028,1,16),[.3,ot+.5,-.35])),t.add("graphite",P(ge(.09,.1,.06,32),[.3,ot+1.03,-.35]));let r=new Cs({color:16753183,emissive:16747008,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15,depthWrite:!1});e.add(Ye(ge(.08,.08,.13,32,!0),r,[.3,ot+1.125,-.35],null,null,{cast:!1})),e.add(Ye(new Cn(.08,32,12,0,It,0,Math.PI/2),r,[.3,ot+1.19,-.35],null,null,{cast:!1}));let o=yt("spin",[.3,ot+1.12,-.35]);e.add(o),o.add(Ye(new On(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=Vt(16756782,.2);e.add(Ye(Jh(.022),a,[.3,ot+1.12,-.35],null,null,{cast:!1}));let l=sl(16753978,0),c=new $s(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(Ye(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1}));let u=new Cs({color:15909424,roughness:.4,clearcoat:.5});t.add("callbox",P(qe(.36,.28,.12,.02),[-.2,ot+.14,.04])),t.add("grille",P(new ft(.12,.12),[-.28,ot+.15,.101])),t.add("steel",P(ge(.045,.045,.02,28),[-.1,ot+.15,.11],[Math.PI/2,0,0]));let d=Vt(3461498,.3);return e.add(Ye(new Cn(.038,24,10,0,It,0,Math.PI/2),d,[-.1,ot+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:u},{update(h,p,f){let x=f.work;o.rotation.y+=h*(.4+7*x);let m=.6+.4*Math.sin(p*9);a.emissiveIntensity=.2+x*6*m,r.emissiveIntensity=.1+x*1.8*m,l.opacity=x*.16,d.emissiveIntensity=.3+x*3*(Math.sin(p*5)>0?1:.2)}}}function $S(n,e,t){t.add("aluDark",P(qe(.72,.62,.04,.012),[0,ot+.31,-.4])),t.add("graphite",P(qe(.72,.06,.3,.012),[0,ot+.03,-.3]));let i=yt("unwind",[-.16,ot+.4,-.31],[Math.PI/2,0,0]),s=yt("rewind",[.2,ot+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=Gt(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new Ct({map:r,roughness:.7});i.add(new lt().add("roll",ge(.15,.15,.1,48)).add("gold",ge(.05,.05,.11,24)).add("chrome",ge(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new lt().add("ceramic",ge(.075,.075,.1,40)).add("gold",ge(.035,.035,.11,20)).add("chrome",ge(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,ot+.52],[.05,ot+.3],[.28,ot+.42]])t.add("chrome",P(ge(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));ef(t),t.add("steel",P(ge(.042,.042,.18,22),[0,1.24,Ut])),t.add("chrome",P(fn(.043,.006,6,24),[0,1.16,Ut],[Math.PI/2,0,0]));let a=yt("tamp",[0,1.08,Ut]);e.add(a),a.add(new lt().add("chrome",P(ge(.016,.016,.3,12),[0,.15,0])).add("graphite",P(qe(.16,.025,.12,.006),[0,0,0])).add("gold",P(Fe(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let p=l?jh(l):0;a.position.y=1.08-(1.08-(mn+.03))*p,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function YS(n,e,t){t.add("graphite",P(qe(.62,.86,.44,.02),[0,ot+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",P(Fe(.016,.84,.01),[d,ot+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",P(qe(.56,.085,.02,.006),[0,ot+.07+d*.1,-.095]));t.add("grille",P(new ft(.36,.5),[.311,ot+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new Fn(Fe(.014,.01,.004),new qt({color:16777215}),i*s),o=new bt,a=[],l=[new Oe(3461498),new Oe(3461498),new Oe(5078015),new Oe(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,ot+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let p=l[(d*7+h*3)%l.length].clone();a.push(p),r.setColorAt(d*s+h,p)}e.add(r);let c=new Oe,u=0;return{update(d,h,p){if(u+=d,!(u<.08)){u=0;for(let f=0;f<a.length;f++){let x=p.working?Math.random()>.45:(f+Math.floor(h*.7))%9===0;c.copy(a[f]).multiplyScalar(x?3.2:.25),r.setColorAt(f,c)}r.instanceColor.needsUpdate=!0}}}}var KS={archive:BS,engraver:zS,terminal:HS,satellite:GS,robot:VS,press:WS,kanban:XS,beacon:qS,labeler:$S,generic:YS};function ZS(n,e,t,i){let s=fi[e],r=Qh(t),o=Ci(r,zo),a=yt(`station-${e}`,[o.x,0,o.z],[0,Wm(r),0]),l=new lt,c=["engraver","press","generic","terminal"].includes(e)?"graphite":"white";l.add(c,P(qe(1,.84,.8,.03),[0,.44,-.15])),l.add("rubber",P(qe(.96,.05,.76,.01),[0,.025,-.15])),l.add("aluDark",P(qe(1.04,.03,.84,.01),[0,.875,-.15])),l.add(c==="white"?"graphite":"aluDark",P(Fe(.9,.01,.008),[0,.32,.252])),l.add("grille",P(new ft(.36,.1),[.24,.18,.251]));let[u,d]=US[e]||[.44,-.5];l.add("alu",P(ge(.012,.012,.3,10),[u,ot+.15,d])),l.add("graphite",P(ge(.03,.03,.012,18),[u,ot+.46,d]));let h=KS[e](n,a,l,i);a.add(l.build({...n,...l.extra||{}},{name:`station-${e}`}));let p=us(s.zh,s.en,s.code,NS[e]);a.add(Ye(new ft(.46,.13),In(p.tex,.35),[-.22,.64,.253],null,null,{cast:!1}));let f=Uu(384,144,{bg:"#03060c",glow:4});a.add(Ye(new ft(.36,.135),Ka(f.tex,1.2),[.25,.64,.253],null,null,{cast:!1}));let x=Vt(5078015,.4);a.add(Ye(Fe(.92,.012,.008),x,[0,.83,.254],null,null,{cast:!1}));let m=[16726832,5078015,3461498].map((D,F)=>{let B=Vt(D,.1);return a.add(Ye(ge(.028,.028,.045,18),B,[u,ot+.33+(2-F)*.05,d],null,null,{cast:!1})),B}),g=Ou(n);g.root.position.set(0,0,Ut),a.add(g.root),a.add(Bn(n,1.25,1,[0,0,-.12],.55));let _=new qt({visible:!1}),b=new rt(new Ft(1.1,2,1.5),_);b.position.set(0,1,.1),a.add(b);let v={work:0,flash:0,flashOk:!0,label:"",status:"idle",screenKey:""},w=new Oe,M=new Oe(5078015),y=new Oe(3461498),S=new Oe(16726832),N=Ci(r,Ki+.05,mn+.08);function R(){let D=v.status==="working"?"加工中 RUN":v.status==="error"?"故障 FAULT":"待机 IDLE",F=`${D}|${v.label}`;F!==v.screenKey&&(v.screenKey=F,f.set([{text:`${s.code}  ${D}`,size:30,color:v.status==="error"?"#ff8a80":v.status==="working"?"#9fc0ff":"#7fe0a8",mono:!0,weight:700,gap:44},{text:v.label||"—",size:34,color:"#e8eefc",gap:58}]))}return R(),{kind:e,index:t,theta:r,root:a,port:Ci(r,Ki,mn),anchor:Ci(r,zo+.12,2.1),hover:[{id:`station:${e}`,object:b}],setLabel(D){v.label=D||"",R()},onStart(D){v.label=D.label||D.name,h.onStart?.(D),R()},onEnd(D,F){v.flash=F?.9:2.2,v.flashOk=F,F||i.puff(N,10),h.onEnd?.(D,F)},update(D,F,B){v.work=Bt(v.work,B.working?1:0,3,D),v.flash=Math.max(0,v.flash-D);let L=v.flash>0&&!v.flashOk;v.status=B.working?"working":L?"error":"idle",R(),h.update(D,F,{working:B.working,wafer:B.wafer,work:v.work});let W;v.flash>0?(w.copy(v.flashOk?y:S),W=3.2*(v.flashOk?Math.min(1,v.flash*2):Math.sin(F*14)>0?1:.25)):(w.copy(M),W=.25+v.work*(2.2+Math.sin(F*6)*.6)),g.led.emissive.copy(w),g.led.emissiveIntensity=W,x.emissive.copy(w),x.emissiveIntensity=.25+W*.6,m[0].emissiveIntensity=L?Math.sin(F*12)>0?4:.3:.08,m[1].emissiveIntensity=.08+v.work*3.5,m[2].emissiveIntensity=!B.working&&!L?1.6:.08}}}function qm(n,e){let t=yt("stations"),i=Fu.map((r,o)=>ZS(n,r,o,e));for(let r of i)t.add(r.root);let s=Object.fromEntries(i.map(r=>[r.kind,r]));return{root:t,list:i,byKind:s}}var tf=n=>us(rn[n].zh,rn[n].en,rn[n].code),si=new A(7.45,0,$i),ds=.83,sf=13,ar=.4,ri=.36,Zi=.4,rf=.02,of=.062,af=.02,lf=[8.2,8.75,9.3],cf=[-.1,.45,1],Pi=.55,pi=2.45,ku=ri+.046,$m=1.9,JS=1.3,Hr=9,Ym=n=>((n-1)%Hr+Hr)%Hr,nf=(n,e=new A)=>e.set(lf[n%3],Pi,cf[Math.floor(n/3)]),Km={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}};function jS(n,e,t,i){let s=i.info,r=s?Km[s.status]||Km.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${$t}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${$t}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${Lt}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0,a=s&&s.files?s.files.length:0;n.fillText(`CALLS ${o} · FILES ${a}`,30,t*.64),n.fillStyle="#15171b";let l=30,c=(i.no||7)*2654435761;for(let u=0;l<e-16;u++){let d=1+((c>>>u%24^u)&3);u%2===0&&n.fillRect(l,t*.8,d,t*.13),l+=d+1}}function QS(n){let e=new lt,t=.03+(ri-.03)/2,i=ri-.03,s=-ar/2+.008;e.add("graphite",P(qe(ar,.03,Zi,.008),[0,.015,0])),e.add("graphite",P(Fe(.016,.022,Zi),[s,ri-.011,0]),P(Fe(.016,i,.02),[s,t,Zi/2-.01]),P(Fe(.016,i,.02),[s,t,-Zi/2+.01])),e.add("graphite",P(Fe(.06,.026,.06),[0,ri+.013,0]),P(qe(.17,.02,.17,.006),[0,ri+.036,0]));for(let l=0;l<sf;l++){let c=of+l*af-.005;for(let u of[-1,1])e.add("plastic",P(Fe(.3,.004,.05),[rf,c,u*.165]))}let r=new lt().add("smoke",P(Fe(ar-.016,i,.01),[.008,t,Zi/2-.005]),P(Fe(ar-.016,i,.01),[.008,t,-Zi/2+.005]),P(Fe(.01,i,Zi-.02),[ar/2-.005,t,0]),P(Fe(ar-.016,.01,Zi-.02),[.008,ri-.005,0])),o=new Wt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new lt().add("white",P(qe(.02,ri-.045,Zi-.03,.006),[0,0,0])).add("graphite",P(ge(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),P(ge(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(ri-.045)/2+.006,doorX:-ar/2-.004}}function Zm(n,e){let t=yt("stocker"),i=new qt({visible:!1}),s=new Ft(ar+.04,ri+.08,Zi+.04),r=new ft(.28,.1225),o=QS(n),a=yt("load-port",[si.x,0,si.z]);t.add(a);let l=new lt;l.add("white",P(qe(.56,ds-.012,.62,.02),[0,(ds-.012)/2,0])),l.add("graphite",P(qe(.44,.012,.44,.004),[0,ds-.006,0]),P(Fe(.58,.06,.64),[0,.03,0]));for(let z=0;z<3;z++){let X=z/3*Math.PI*2+.5;l.add("chrome",P(ge(.008,.012,.012,12),[Math.cos(X)*.13,ds+.004,Math.sin(X)*.13]))}l.add("aluDark",P(Fe(.04,.22,.04),[.24,ds+.11,.27]),P(Fe(.08,.03,.05),[.21,ds+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=tf("loadport");a.add(Ye(new ft(.44,.124),In(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((z,X)=>{let oe=Vt(z,.15);return a.add(Ye(Fe(.05,.016,.008),oe,[-.12+X*.12,.46,.312],null,null,{cast:!1})),oe});a.add(Bn(n,.9,.95,[0,0,0],.5));let d=new rt(new Ft(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new lt,p=(lf[0]+lf[2])/2,f=(cf[0]+cf[2])/2;h.add("graphite",P(Fe(1.66,Pi-.03,1.66),[p,(Pi-.03)/2,f])),h.add("white",P(qe(1.76,.03,1.76,.01),[p,Pi-.015,f])),h.add("aluDark",P(Fe(1.7,.05,1.7),[p,.025,f]));let x=[];for(let z=0;z<Hr;z++){let X=nf(z);h.add("aluDark",P(qe(.44,.008,.44,.003),[X.x,Pi+.002,X.z]));for(let $=0;$<3;$++){let te=$/3*Math.PI*2+.5;h.add("chrome",P(ge(.007,.01,.01,10),[X.x+Math.cos(te)*.12,Pi+.008,X.z+Math.sin(te)*.12]))}let oe=Vt(3134074,0);t.add(Ye(Fe(.12,.006,.012),oe,[X.x,Pi+.004,X.z+.235],null,null,{cast:!1})),x.push(oe)}t.add(h.build(n,{name:"buffer-table"}));let m=tf("stocker");t.add(Ye(new ft(.62,.175),In(m.tex,.35),[p,Pi*.55,f+.834],null,null,{cast:!1})),t.add(Bn(n,2.3,2.3,[p,0,f],.55));let g=new rt(new Ft(1.8,Pi+.45,1.8),i);g.position.set(p,(Pi+.45)/2,f),t.add(g);let _=new lt,b=[7,10],v=[-.45,1.95];for(let z of b){for(let X of v)_.add("white",P(Fe(.1,pi+.05,.1),[z,(pi+.05)/2,X])),_.add("graphite",P(Fe(.22,.03,.22),[z,.015,X]));_.add("aluDark",P(Fe(.09,.09,v[1]-v[0]+.1),[z,pi,(v[0]+v[1])/2]))}for(let z of v)_.add("steel",P(Fe(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,pi,z]));t.add(_.build(n,{name:"gantry"}));let w=tf("gantry"),M=Ye(new ft(.9,.253),In(w.tex,.35),[(b[0]+b[1])/2,pi-.2,v[1]+.047],null,null,{cast:!1});t.add(M),t.add(new lt().add("steel",P(Fe(.02,.1,.02),[(b[0]+b[1])/2-.35,pi-.06,v[1]+.04]),P(Fe(.02,.1,.02),[(b[0]+b[1])/2+.35,pi-.06,v[1]+.04])).build(n,{name:"sign-hangers"}));let y=yt("bridge");t.add(y),y.add(new lt().add("blue",P(Fe(.14,.12,v[1]-v[0]+.12),[0,pi+.105,(v[0]+v[1])/2])).add("graphite",P(Fe(.26,.1,.13),[0,pi+.07,v[0]]),P(Fe(.26,.1,.13),[0,pi+.07,v[1]])).build(n,{name:"bridge-beam"}));let S=yt("trolley");y.add(S),S.add(new lt().add("graphite",P(qe(.28,.13,.26,.02),[0,pi-.035,0])).add("steel",P(ge(.045,.045,.2,20),[0,pi-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let N=ge(.0035,.0035,1,6),R=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([z,X])=>{let oe=Ye(N,n.steel,[z,1,X],null,null,{cast:!1});return S.add(oe),oe}),D=yt("gripper");S.add(D),D.add(new lt().add("graphite",P(qe(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let F=[-1,1].map(z=>{let X=Ye(Fe(.024,.06,.13),n.steel,[z*.115,-.01,0]);return D.add(X),X}),B=Vt(5078015,.3);D.add(Ye(Fe(.1,.008,.01),B,[0,.03,.122],null,null,{cast:!1}));let L={x:si.x,z:si.z,hook:$m,grip:0,carry:null},W=()=>{y.position.x=L.x,S.position.z=L.z,D.position.y=L.hook;let z=pi-.1,X=L.hook+.055,oe=Math.max(.01,z-X);for(let te of R)te.scale.y=oe,te.position.y=X+oe/2;let $=ui(.115,.079,L.grip);F[0].position.x=-$,F[1].position.x=$,L.carry&&L.carry.g.position.set(L.x,L.hook-ku,L.z)},V=new Set,q=new Array(Hr).fill(null),Y=null;function Z(){let z=o.g.clone();z.name="foup";let X=o.door.clone();z.add(X);let oe=Gt(256,112,()=>{}),$=new Ct({map:oe.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:oe.tex,emissiveIntensity:.18});z.add(Ye(r,$,[.01,ri-.075,Zi/2+.002],null,null,{cast:!1}));let te=new rt(s,i);te.position.set(0,ri/2+.02,0),z.add(te);let Se={no:0,info:null,g:z,door:X,label:oe,labelMat:$,labelKey:"",proxy:te,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return ne(Se),V.add(Se),t.add(z),Se}function ne(z){let X=`${z.no}|${z.info?`${z.info.status}|${z.info.calls}|${(z.info.files||[]).length}`:"-"}|${z.count}`;X!==z.labelKey&&(z.labelKey=X,z.proxy.userData.hoverId=z.no?`foup:${z.no}`:"loadport",z.label.redraw((oe,$,te)=>jS(oe,$,te,z)))}function re(z,X){let oe=z.count;if(z.count+=1,z.looks.push(X),oe<sf){let $=e.create(X);$.position.set(rf,of+oe*af,0),z.g.add($),z.slots.push($)}ne(z)}function Ee(z){V.delete(z),t.remove(z.g),z.label.tex.dispose(),z.labelMat.dispose();for(let X=0;X<Hr;X++)q[X]===z&&(q[X]=null);Y===z&&(Y=null)}function ze(z){let X=z.doorOpen,oe=dt(X/.25,0,1),$=Ti(dt((X-.25)/.75,0,1));z.door.position.set(o.doorX-.018*oe,o.doorY-.43*$,0)}function ie(z=!1){let X=Z();return X.g.position.set(si.x,ds,si.z),X.state=z?"dock":"spawning",X.sp=z?1:0,X.doorOpen=z?1:0,ze(X),Y=X,X}function Te(z,X){let oe=q[X];oe&&oe!==z&&Ee(oe),q[X]=z;let $=nf(X);z.g.position.copy($),z.state="nest",z.doorOpen=0,ze(z)}let De=[],se=null,K=z=>({setup:()=>(z(),{d:0,fn:null})}),Me=(z,X,oe=1.6)=>({setup(){let $=L.x,te=L.z,Se=Math.hypot(z-$,X-te);return{d:Se<.001?0:Math.max(.35,Se/oe),fn:U=>(L.x=ui($,z,U),L.z=ui(te,X,U))}}}),Ke=(z,X)=>({setup(){let oe=L.hook;return{d:Math.abs(z-oe)<.001?0:X,fn:$=>L.hook=ui(oe,z,$)}}}),Pe=(z,X=.3)=>({setup(){let oe=L.grip;return{d:X,fn:$=>L.grip=ui(oe,z,$)}}}),$e=(z,X,oe=.55)=>({setup(){let $=z.doorOpen;return{d:oe,fn:te=>(z.doorOpen=ui($,X,te),ze(z))}}});function Ie(z){let X=Ym(z.no),oe=nf(X);return{i:0,steps:[K(()=>z.state="closing"),$e(z,0),Me(si.x,si.z),Ke(ds+ku,.6),Pe(1),K(()=>(L.carry=z,z.state="carried",B.emissiveIntensity=2.2)),Ke(JS+ku,.9),K(()=>{Y===z&&(Y=null),ie();let $=q[X];$&&$!==z&&($.state="sink",$.sp=0,q[X]=null)}),Me(oe.x,oe.z),Ke(Pi+ku,.8),K(()=>{L.carry=null,B.emissiveIntensity=.3,q[X]&&q[X]!==z&&Ee(q[X]),Te(z,X)}),Pe(0),Ke($m,.5),Me(si.x,si.z)]}}let de={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:g}],anchors:{loadPort:new A(si.x,1.1,si.z),stocker:new A(p,.9,f)},speed:1,hoverObjects(z=[]){for(let X of V)X.no&&z.push(X.proxy);return z},dockReady:()=>!!Y&&Y.state==="dock"&&Y.doorOpen>=1,dockTurn:()=>Y&&Y.no||null,dockCount:()=>Y?Y.count:0,bindDock(z,X){return!Y||Y.no?!1:(Y.no=z,Y.info=X||null,ne(Y),!0)},slotPoint(z,X=new A){let oe=Y?Y.g.position:new A(si.x,ds,si.z);return X.set(oe.x+rf,oe.y+of+Math.min(z,sf-1)*af,oe.z)},addWafer(z){Y&&re(Y,z)},addLate(z,X){for(let oe of V)if(oe.no===z&&oe.state!=="sink")return re(oe,X),!0;return!1},updateInfo(z,X){for(let oe of V)oe.no===z&&(oe.info=X,ne(oe))},ship(z){return!Y||Y.no!==z||De.includes(Y)||se&&se.foup===Y?!1:(De.push(Y),!0)},shipped:z=>{for(let X of V)if(X.no===z)return X.state==="carried"||X.state==="nest"||X.state==="sink"||De.includes(X)||se&&se.foup===X;return!1},placeNest(z,X,oe){let $=Z();$.no=z,$.info=X;for(let te of oe)re($,te);Te($,Ym(z)),ne($)},resetDock(z,X,oe){Y&&Ee(Y);let $=ie(!0);if(z){$.no=z,$.info=X;for(let te of oe||[])re($,te)}ne($)},busy:()=>!!se||De.length>0,update(z){if(!se&&De.length){let $=De.shift();se=Ie($),se.foup=$}let X=z*de.speed;for(;se&&X>0;){let $=se.steps[se.i];if(!$){se=null;break}if($.run||($.run=$.setup(),$.t=0),!$.run.d){$.run.fn&&$.run.fn(1),se.i+=1;continue}let te=Math.min(X,$.run.d-$.t);$.t+=te,X-=te,$.run.fn&&$.run.fn(Ti(dt($.t/$.run.d,0,1))),$.t>=$.run.d-1e-6&&(se.i+=1)}W();for(let $ of[...V])$.state==="spawning"?($.sp=Math.min(1,$.sp+z/.8),$.g.position.y=ds-(ri+.07)*(1-Ti($.sp)),$.sp>=1&&($.state="dock")):$.state==="dock"&&$.doorOpen<1?($.doorOpen=Math.min(1,$.doorOpen+z/.6),ze($)):$.state==="sink"&&($.sp=Math.min(1,$.sp+z/1.2),$.g.position.y=Pi-(ri+.09)*Ti($.sp),$.sp>=1&&Ee($));for(let $=0;$<Hr;$++)x[$].emissiveIntensity=q[$]?1.6:0;let oe=!!se;u[0].emissiveIntensity=de.dockReady()?1.8:.15,u[1].emissiveIntensity=Y&&Y.state==="closing"?2.2:.15,u[2].emissiveIntensity=oe?1.8:.15},dispose(){for(let z of[...V])Ee(z);for(let z of[o.g,o.door])z.traverse(X=>X.geometry&&X.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return W(),de}function Jm(n){let e=new Wt;e.name="effects";let t=(l,c,u)=>Array.from({length:l},()=>{let d=new is({map:n.radial,color:c,transparent:!0,opacity:0,depthWrite:!1,blending:u?Pn:rs}),h=new Es(d);return h.visible=!1,e.add(h),{sp:h,mat:d,life:0,max:1,v:new A,size:.1,grow:0,gravity:0,alpha:1}}),i=t(48,9146521,!1),s=t(96,16757867,!0),r=0,o=0;function a(l,c,u,d){let h=l[c%l.length];h.life=h.max=d.life,h.sp.position.copy(u),h.v.copy(d.v),h.size=d.size,h.grow=d.grow,h.gravity=d.gravity,h.alpha=d.alpha,h.sp.scale.setScalar(d.size),h.mat.opacity=d.alpha,h.sp.visible=!0}return{root:e,puff(l,c=9){for(let u=0;u<c;u++)a(i,r++,l,{life:1.4+Math.random()*.9,v:new A((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(l,c=3){for(let u=0;u<c;u++){let d=Math.random()*Math.PI*2,h=.35+Math.random()*.7;a(s,o++,l,{life:.25+Math.random()*.35,v:new A(Math.cos(d)*h,.3+Math.random()*.7,Math.sin(d)*h),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},update(l){for(let c of[i,s])for(let u of c){if(u.life<=0)continue;if(u.life-=l,u.life<=0){u.sp.visible=!1,u.mat.opacity=0;continue}u.v.y-=u.gravity*l,u.sp.position.addScaledVector(u.v,l),u.sp.position.y<.01&&(u.sp.position.y=.01,u.v.set(u.v.x*.3,Math.abs(u.v.y)*.25,u.v.z*.3));let d=1-u.life/u.max;u.sp.scale.setScalar(Math.max(.002,u.size+u.grow*d)),u.mat.opacity=u.alpha*(c===i?Math.sin(Math.PI*Math.min(1,d*1.15)):1-d)}}}}var jm=.15,ew=.006;function Qm(n){let e=new On(jm,jm,ew,40,1,!1),t=new Ct({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new rt(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var uf=.34,Bu=.17,eg=4,tw=2.4,nw=.55,iw=.9,df=.03,sw=5,zu=-.006,rw=12,ow=.4,aw=3,lw=1.5,cw=9,uw=new Oe(16756768),dw=new Oe(3461498),rl=(n,e=n.kind)=>n.status==="error"?"bad":ko.has(e)?"gold":"normal";function tg(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=rl(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,(n.files?n.files.length:0)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var Hu=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Tu(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=uf-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-Bu,r=this.gateOut+Bu,o=this.items.find(f=>f.s>s+1e-6&&f.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let f of this.items){let x=d?d.s-uf:this.end,m=!d||d.s-uf>=r;if(f.cycled)f.s<r&&(f.s<=this.gateOut-Bu+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(x=Math.min(x,Math.max(f.s,this.stop)))):l=!0);else{if(x=Math.min(x,this.stop),f.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&f.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(x=Math.min(x,s)),h=!1}else f.s<this.gateIn+Bu&&(a=!0);f.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(f.dwell+=e*t,c=!0,f.dwell>=nw&&(f.cycled=!0))}let g=x-f.s;if(g<=1e-5)f.v=0;else{let _=Math.min(tw*t,Math.sqrt(2*eg*g));f.v=Math.min(_,f.v+eg*t*e),f.s=Math.min(x,f.s+f.v*e),u=!0}f.arrivedAt==null&&f.s>=this.end-1e-4&&(f.arrivedAt=i),d=f}let p=5*e*t;this.doorIn=dt(this.doorIn+(a?p:-p),0,1),this.doorOut=dt(this.doorOut+(l?p:-p),0,1),this.cycling=c,this.moving=u}};function ng({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new A,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=dt(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new Hu([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),p=dt((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),f=new Hu([o.outPort,o.outCenter,o.trackEnd],{gateIn:p*h,gateOut:h+.45,stop:h}),x=U=>e.byKind[U.kind]?U.kind:"generic",m=new Map,g=new Set,_=new Map,b=Object.fromEntries(e.list.map(U=>[U.kind,new Array(sw).fill(null)])),v={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},w={inbound:0,outbound:0,robot:!1,stocker:!1},M={},y=[],S=0,N=0,R=!0,D=0,F=1,B=null;function L(U){let Q=_.get(U);return Q||(Q={no:U,status:"running",info:null,shipped:!1,pending:[]},_.set(U,Q)),Q}let W=U=>U.status!=="running"||U.no<S,V=U=>{for(let Q of m.values())if(Q.turn===U)return!0;return!1};function q(U){let Q={id:U.id,call:U,kind:x(U),turn:U.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:mn,waitT:0};return m.set(U.id,Q),L(U.turn),Q}function Y(U){U.mesh&&(r.remove(U.mesh),U.mesh=null)}function Z(U){U.stage="stored",m.delete(U.id),g.add(U.id)}function ne(U){U.signaled||(U.signaled=!0,e.byKind[U.kind].onEnd(U.call,U.call.status!=="error"))}function re(U,Q){t.addLate(U,Q)||L(U).pending.push(Q)}function Ee(U){U.it&&(d.remove(U.it),f.remove(U.it),U.it=null),U.level>=0&&(b[U.kind][U.level]=null,U.level=-1),v.carry===U&&(v.carry=null),Y(U),ne(U),re(U.turn,rl(U.call,U.kind)),Z(U)}let ze=U=>b[U].indexOf(null);function ie(U,Q){let ae=e.byKind[U.kind];b[U.kind][Q]=U,U.level=Q,U.stage="station",U.arriveT=D,U.mesh||(U.mesh=s.create("raw"),r.add(U.mesh)),U.mesh.position.set(ae.port.x,mn+Q*df,ae.port.z)}function Te(){for(let U of m.values())Y(U);m.clear(),g.clear(),_.clear(),d.items.length=0,f.items.length=0;for(let U of Object.keys(b))b[U].fill(null);v.task=null,v.steps=[],v.cur=null,v.carry=null,n.robot.setBusy(!1),B=null}function De(U){M={},y=[];for(let Q of U.calls){if(Q.status!=="running")continue;let ae=x(Q);M[ae]=(M[ae]||0)+1,y.push(Q)}S=U.turns.length?U.turns[U.turns.length-1].no:0}function se(U){Te();for(let I of U.turns)Object.assign(L(I.no),{info:I,status:I.status});let Q=U.turns.filter(I=>I.status!=="running");for(let I of Q)L(I.no).shipped=!0;for(let I of Q.slice(-cw))t.placeNest(I.no,I,tg(I,U.calls));let ae=U.turns.find(I=>I.status==="running")||null;ae?t.resetDock(ae.no,ae,tg(ae,U.calls)):t.resetDock(null,null,[]);for(let I of U.calls){if(I.status!=="running"){g.add(I.id);continue}let Qe=q(I),it=ze(Qe.kind);it>=0&&ie(Qe,it),e.byKind[Qe.kind].onStart(I)}De(U)}function K(U){if(!U)return;if(R||U.turnCount<N){R=!1,N=U.turnCount,se(U);return}N=U.turnCount;for(let ae of U.turns){let I=L(ae.no);I.info=ae,I.status=ae.status,t.updateInfo(ae.no,ae)}let Q=new Set;for(let ae of U.calls){Q.add(ae.id);let I=m.get(ae.id);I?I.call=ae:g.has(ae.id)||(q(ae),e.byKind[x(ae)].onStart(ae))}for(let ae of g)Q.has(ae)||g.delete(ae);De(U)}let Me=(U,Q)=>({yaw:U,reach:zr,lift:Q,d:(ae,I)=>Math.max(.18,Math.abs(Ih(ae.yaw,I.yaw))/4)});function Ke(U,Q){let ae=e.byKind[U.kind];b[U.kind][Q]=U,U.level=Q;let I=Q*df;return{type:"deliver",job:U,steps:[Me(Br,zu),{reach:Ki,d:.38},{lift:il,d:.15,onStart(){d.remove(U.it),U.it=null,U.stage="carried",U.restY=mn,v.carry=U},onEnd:()=>U.restY=0},{reach:zr,d:.32},Me(ae.theta,I+il),{reach:Ki,d:.38},{lift:I+zu,d:.15,onStart:()=>U.restY=mn+I,onEnd(){v.carry=null,ie(U,Q)}},{reach:zr,d:.32}]}}function Pe(U){let Q=e.byKind[U.kind],ae=U.level,I=ae*df;return U.reserved=!0,{type:"collect",job:U,steps:[Me(Q.theta,I+zu),{reach:Ki,d:.38},{lift:I+il,d:.15,onStart(){b[U.kind][ae]=null,U.level=-1,U.stage="carried",U.restY=mn+I,v.carry=U},onEnd:()=>U.restY=0},{reach:zr,d:.32},Me(Ho,il),{reach:Ki,d:.38},{lift:zu,d:.15,onStart:()=>U.restY=mn,onEnd(){v.carry=null,U.it=f.add(U),U.stage="out"}},{reach:zr,d:.32}]}}function $e(){let U=null,Q=d.head();if(d.atEnd(Q)){let ae=ze(Q.job.kind);ae>=0&&(U={type:"deliver",job:Q.job,k:ae,ready:Q.arrivedAt??D})}if(f.tailFree())for(let ae of m.values())ae.stage==="station"&&ae.processed&&!ae.reserved&&(!U||ae.processedAt<U.ready)&&(U={type:"collect",job:ae,ready:ae.processedAt});return U?U.type==="deliver"?Ke(U.job,U.k):Pe(U.job):null}function Ie(U){let Q=n.robot;if(!v.task){let Qe=$e();Qe?(v.task=Qe,v.steps=Qe.steps.slice(),v.cur=null,v.idle=0,v.homed=!1,Q.setBusy(!0)):(v.idle+=U,v.idle>lw&&!v.homed&&!v.cur&&(v.steps=[Me(Br,0)],v.homed=!0))}let ae=U,I=0;for(;ae>0&&I++<32;){if(!v.cur){let Ae=v.steps.shift();if(!Ae)break;let xe={yaw:Q.pose.yaw,reach:Q.pose.reach,lift:Q.pose.lift},be={yaw:Ae.yaw??xe.yaw,reach:Ae.reach??xe.reach,lift:Ae.lift??xe.lift},Ve=typeof Ae.d=="function"?Ae.d(xe,be):Ae.d;v.cur={st:Ae,from:xe,to:be,d:Ve/F,t:0},Ae.onStart&&Ae.onStart()}let Qe=v.cur,it=Math.min(ae,Qe.d-Qe.t);Qe.t+=it,ae-=it;let pt=Qe.d>0?Ti(Qe.t/Qe.d):1;Q.setPose(Qe.from.yaw+Ih(Qe.from.yaw,Qe.to.yaw)*pt,ui(Qe.from.reach,Qe.to.reach,pt),ui(Qe.from.lift,Qe.to.lift,pt)),Qe.t>=Qe.d-1e-6&&(v.cur=null,Qe.st.onEnd&&Qe.st.onEnd())}v.task&&!v.cur&&v.steps.length===0&&(v.task=null,v.idle=0,Q.setBusy(!1)),v.carry&&v.carry.mesh&&(Q.carryPoint(a),a.y=Math.max(a.y,v.carry.restY),v.carry.mesh.position.copy(a))}function de(){for(let U of m.values())U.stage!=="station"||U.processed||U.call.status==="running"||D<U.arriveT+iw/F||(U.processed=!0,U.processedAt=D,s.setLook(U.mesh,rl(U.call,U.kind)),ne(U))}function z(U,Q){f.remove(Q),U.it=null,U.stage="transfer",B={j:U,t:0,d:ow/F,from:U.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new A)}}function X(U){if(!B)return;B.t+=U;let Q=Ti(B.t/B.d),ae=B.j.mesh;if(ae.position.lerpVectors(B.from,B.to,Q),ae.position.y+=Math.sin(Math.PI*Q)*.025,B.t>=B.d){let I=B.j;B=null,Y(I),t.dockTurn()===I.turn?t.addWafer(rl(I.call,I.kind)):re(I.turn,rl(I.call,I.kind)),Z(I)}}function oe(U){if(t.dockReady()&&t.dockTurn()==null){let I=null;for(let Qe of _.values())!Qe.shipped&&(!I||Qe.no<I.no)&&(I=Qe);if(I){t.bindDock(I.no,I.info);for(let Qe of I.pending.splice(0))t.addWafer(Qe)}}let Q=t.dockTurn();if(Q!=null&&!B&&t.dockReady()){let I=L(Q);!I.shipped&&W(I)&&!V(Q)&&t.ship(Q)&&(I.shipped=!0)}let ae=f.head();if(!B&&f.atEnd(ae)){let I=ae.job;L(I.turn).shipped?Ee(I):t.dockReady()&&t.dockTurn()===I.turn?z(I,ae):(I.waitT+=U,I.waitT>aw&&Q!=null&&Q!==I.turn&&t.dockReady()&&t.ship(Q)&&(L(Q).shipped=!0))}}function $(){let U=m.size-rw;if(!(U<=0))for(let Q of m.values()){if(U<=0)break;Q.stage==="spawn"&&Q.call.status!=="running"&&(Ee(Q),U-=1)}}function te(){if(d.tailFree()){for(let U of m.values())if(U.stage==="spawn"){U.mesh=s.create("raw"),r.add(U.mesh),U.it=d.add(U),U.stage="in",d.path.at(0,U.mesh.position),i.pulseDispenser();return}}}function Se(U,Q,ae){U.emissive.copy(Q?uw:dw),U.emissiveIntensity=Q?1.6+Math.sin(ae*10)*.8:.6}return t.resetDock(null,null,[]),{sync:K,update(U,Q){D=Q,F=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=F,$(),te(),d.update(U,F,D),f.update(U,F,D),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(f.doorOut,f.doorIn),Se(n.lock.led,d.cycling,Q),Se(n.unload.led,f.cycling,Q),n.trackLed.emissiveIntensity=d.moving||f.moving?1.8+Math.sin(Q*8)*.4:1,de(),Ie(U),oe(U),X(U);for(let ae of d.items)d.path.at(ae.s,ae.job.mesh.position);for(let ae of f.items)f.path.at(ae.s,ae.job.mesh.position);for(let ae of e.list){let I=!1,Qe=!1;for(let pt of b[ae.kind])pt&&pt.stage==="station"&&(I=!0,pt.processed||(Qe=!0));let it=(M[ae.kind]||0)>0||Qe;ae.active=it,ae.update(U,Q,{working:it,wafer:I})}t.update(U)},activity(){return w.inbound=d.items.length,w.outbound=f.items.length,w.robot=!!v.task||!!v.cur,w.stocker=!!B||t.busy(),w},focus(U){let Q=null;for(let ae of y)(!Q||(ae.startedAt||0)>=(Q.startedAt||0))&&(Q=ae);if(Q){let ae=e.byKind[x(Q)];return U.copy(ae.anchor),`station:${ae.kind}`}return v.task?(U.copy(n.anchors.robot),"robot"):B||t.busy()?(U.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||y.length>0||!!v.task||!!v.cur||v.steps.length>0||!!B||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:f.items.length,robot:v.task?v.task.type:"idle",transfer:!!B,dock:t.dockTurn(),rush:F,stages:[...m.values()].reduce((U,Q)=>(U[Q.stage]=(U[Q.stage]||0)+1,U),{})}},dispose(){for(let U of m.values())Y(U);m.clear()}}}function zt(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function xn(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function Ii(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function ig(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function sg(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var hf={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function hs(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?hf["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?hf["deepseek-flash"]:null:t?hf["deepseek-flash"]:null}function Fs(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function ol(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function Gu(n){if(!n||typeof n!="object")return null;let e={miss:ol(n.inputTokens),hit:ol(n.cacheReadTokens),write:ol(n.cacheWriteTokens),output:ol(n.outputTokens),reasoning:ol(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function Vu(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function rg(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function Wu(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var hw=60,og=40,fw=200;function pf(){return{v:0,provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],firstAt:0,lastAt:0}}function pw(n){let e=n&&n.time;if(typeof e=="number"&&Number.isFinite(e))return e;if(typeof e=="string"){let t=Date.parse(e);if(Number.isFinite(t))return t}return Date.now()}function Xu(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function qu(n,e){return n.length>e?n.slice(n.length-e):n}function ag(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],added:0,removed:0}}function ff(n,e,t){let i=n.turns[n.turns.length-1];if(i&&i.status==="running")return n;let s=n.turnCount+1;return{...n,turnCount:s,turns:qu([...n.turns,ag(s,t??s,e)],og)}}function mw(n,e){let t=n.findIndex(s=>s.path===e.path);if(t<0)return[...n,{path:e.path,added:e.added,removed:e.removed}];let i=n.slice();return i[t]={...i[t],added:i[t].added+e.added,removed:i[t].removed+e.removed},i}var gw=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function xw(n,e){if(!e||typeof e.type!="string")return n;let t=e.data&&typeof e.data=="object"?e.data:{},i=pw(e),s={...n,v:n.v+1,lastAt:i,firstAt:n.firstAt||i};switch(e.type){case"request/header":{let r=t.header&&t.header.config||{};return typeof r.model=="string"&&(s.model=r.model),typeof r.provider=="string"&&(s.provider=r.provider),typeof r.reasoningEffort=="string"&&(s.effort=r.reasoningEffort),s}case"request/context":return typeof t.model=="string"&&(s.model=t.model),typeof t.provider=="string"&&(s.provider=t.provider),typeof t.contextWindow=="number"&&t.contextWindow>0&&(s.contextWindow=t.contextWindow),s;case"turn/start":{let r=s.turns[s.turns.length-1];r&&r.status==="running"&&(s.turns=Xu(s.turns,a=>({...a,status:"ok",endedAt:i})));let o=s.turnCount+1;return s.turnCount=o,s.turns=qu([...s.turns,ag(o,typeof t.turn=="number"?t.turn:o,i)],og),s.phase="thinking",s}case"step/start":return s=ff(s,i,t.turn),s.phase="thinking",s;case"assistant/message":{s=ff(s,i,t.turn);let r=Gu(t.usage);if(s.phase="idle",!r)return s;let o=hs(s.provider,s.model),a=Fs(i),l=Vu(r,o,a),c=s.totals;return s.totals={miss:c.miss+r.miss,hit:c.hit+r.hit,write:c.write+r.write,output:c.output+r.output,reasoning:c.reasoning+r.reasoning,requests:c.requests+1,cost:c.cost+l,costPeak:c.costPeak+(a?l:0),costOffPeak:c.costOffPeak+(a?0:l),savings:c.savings+rg(r,o,a)},s.contextTokens=r.miss+r.hit+r.write+r.output,s.turns=Xu(s.turns,u=>({...u,miss:u.miss+r.miss,hit:u.hit+r.hit,write:u.write+r.write,output:u.output+r.output,reasoning:u.reasoning+r.reasoning,cost:u.cost+l,requests:u.requests+1})),s}case"tool/call":{s=ff(s,i,t.turn);let r=String(t.callId??t.id??`call-${s.v}`);if(s.calls.some(u=>u.id===r))return s;let o=String(t.name||"tool"),a=Dm(o),l=ko.has(a)?Fm(o,t.arguments):null,c={id:r,name:o,kind:a,label:Um(o,t.arguments),turn:s.turns[s.turns.length-1].no,startedAt:i,endedAt:0,status:"running",change:l};return s.calls=qu([...s.calls,c],hw),s.tools={...s.tools,calls:s.tools.calls+1,running:s.tools.running+1,byKind:{...s.tools.byKind,[a]:(s.tools.byKind[a]||0)+1}},s.turns=Xu(s.turns,u=>({...u,calls:u.calls+1})),s.phase="tool",s}case"tool/result":{let r=t.message&&typeof t.message=="object"?t.message:{},o=String(r.toolCallId??t.callId??""),a=s.calls.findIndex(h=>h.id===o);if(a<0||s.calls[a].status!=="running")return s;let l=!!t.error||r.isError===!0,c={...s.calls[a],status:l?"error":"ok",endedAt:i};s.calls=s.calls.slice(),s.calls[a]=c;let u=Math.max(0,s.tools.running-1);s.tools={...s.tools,running:u,errors:s.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=s.files.paths.includes(d.path);s.files={count:s.files.count+(h?0:1),added:s.files.added+d.added,removed:s.files.removed+d.removed,paths:h?s.files.paths:qu([...s.files.paths,d.path],fw)}}return s.turns=s.turns.map(h=>{if(h.no!==c.turn)return h;let p={...h,errors:h.errors+(l?1:0)};return d&&(p.files=mw(h.files,d),p.added=h.added+d.added,p.removed=h.removed+d.removed),p}),u===0&&(s.phase="thinking"),s}case"turn/end":{let r=t.reason&&typeof t.reason=="object"?t.reason.kind:void 0,o=gw.has(r)?"rework":"ok",a=s.turns[s.turns.length-1];if(a&&a.status==="running"&&(s.turns=Xu(s.turns,l=>({...l,status:o,endedAt:i})),s.calls.some(l=>l.status==="running"&&l.turn===a.no))){let l=0;s.calls=s.calls.map(c=>c.status!=="running"||c.turn!==a.no?c:(l++,{...c,status:"error",endedAt:i})),s.tools={...s.tools,running:Math.max(0,s.tools.running-l),errors:s.tools.errors+l}}return s.phase="idle",s}default:return n}}function mf(n,e){let t=n;for(let i of e)t=xw(t,i);return t}function $u(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:n.tools.calls-n.tools.running>0?(n.tools.calls-n.tools.running-n.tools.errors)/(n.tools.calls-n.tools.running):1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:(()=>{let r=n.turns.filter(o=>o.status!=="running");return r.length?r.filter(o=>o.status==="ok").length/r.length:1})()}}var ct={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},Ku={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:ct.violet},reasoning:{zh:"推理",en:"REASONING",color:ct.violet},generating:{zh:"生成",en:"GENERATING",color:ct.cyan},tool:{zh:"工具",en:"TOOL CALL",color:ct.amber}},_w=Cu(),lg=120,cg=90,vw=[20,50,100,150,200,300,500,1e3,2e3],yw=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],ug=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function Zu(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function gf(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function dg(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${$t}`,n.fillStyle=ct.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${Lt}`,n.fillStyle=ct.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${Lt}`,n.fillStyle=o||ct.muted,n.fillText(r,e-36,39))}function Os(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${$t}`,n.fillStyle=ct.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${Lt}`,n.fillStyle=ct.dim,r==="left"&&n.fillText(s,e+a,t)}function hg(n,e,t,i,s,r=96,o="",a=ct.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${Lt}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${Lt}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function fg(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let x=0;x<=u;x++){let m=Math.round(t+s*x/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.textBaseline="middle";for(let x=0;x<=u;x++)n.fillText(c(l*(1-x/u)),e-12,t+s*x/u);let h=x=>e+i*x/Math.max(1,d-1),p=x=>t+s-s*dt(x/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let x=0;x<d;x++)n.lineTo(h(x),p(r[x]));n.lineTo(h(d-1),t+s),n.closePath();let f=n.createLinearGradient(0,t,0,t+s);f.addColorStop(0,a),f.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=f,n.fill(),n.beginPath();for(let x=0;x<d;x++)x?n.lineTo(h(x),p(r[x])):n.moveTo(h(x),p(r[x]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function Yu(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),Os(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${Lt}`,n.fillStyle=ct.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${Lt}`,n.fillStyle=ct.muted,n.fillText(l,e+20,t+s-14))}function bw(n,e,t,i){Zu(n,e,t);let s=Ku[i.phase]||Ku.idle;dg(n,e,"令牌流量","TOKEN FLOW",ct.cyan,`● ${s.zh} ${s.en}`,s.color),Os(n,36,122,"实时速率","LIVE RATE"),hg(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",ct.cyan,104,"tok/s"),Os(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${Lt}`,n.fillStyle=ct.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=ug(Math.max(20,...i.tpsHist)*1.15,vw);fg(n,470,104,e-470-40,236,i.tpsHist,{color:ct.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;Yu(n,36,a,o,l,"输入","INPUT",zt(c.miss+c.write),"未命中缓存 · MISS",ct.blue),Yu(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",zt(c.hit),`命中率 ${Ii(i.hitRate)}`,ct.green),Yu(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",zt(c.output),`请求 ${c.requests}`,ct.cyan),Yu(n,36+(o+16)*3,a,o,l,"推理","REASONING",zt(c.reasoning),"思考链 · THINKING",ct.violet),gf(n,e,t,ct.cyan)}function al(n,e,t,i,s,r,o,a,l){Os(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${Lt}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${Lt}`,n.fillStyle=ct.muted,n.fillText(a,e,t+112))}function Mw(n,e,t,i){Zu(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,ct.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${$t}`,n.fillStyle=ct.text,n.shadowColor=ct.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${Lt}`,n.fillStyle=ct.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${$t}`;let b=n.measureText(_).width+36,v=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(v,28,b,40),n.strokeStyle=ct.amber,n.lineWidth=2,n.strokeRect(v+1,29,b-2,38),n.fillStyle=ct.amber,n.fillText(_,v+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${Lt}`,n.fillStyle=ct.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=Ku[i.phase]||Ku.idle,a=(e-80)/5,l=148;al(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),al(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,ct.text),al(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${Ii(i.toolSuccess)}`,ct.cyan),al(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,ct.gold),al(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,ct.blue);let c=330;Os(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,p=116,f=c+22,x=i.recent.slice(-u),m=u-x.length;for(let _=0;_<u;_++){let b=40+_*(h+d),v=x[_-m];if(!v){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,f+1,h-2,p-2);continue}let w=v.status==="running"?ct.cyan:v.status==="error"?ct.red:ko.has(v.kind)?ct.gold:ct.blue,M=n.createLinearGradient(0,f,0,f+p);M.addColorStop(0,w),M.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=v.status==="running"?.95:.55,n.fillStyle=M,n.fillRect(b,f,h,p),n.globalAlpha=1,n.fillStyle=w,n.fillRect(b,f+p-6,h,6);let y=fi[v.kind]||fi.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${Lt}`,n.fillStyle="#ffffff",n.fillText(y.code.replace("ST-",""),b+h/2,f+p/2-6)}let g=x[x.length-1];if(g){let _=fi[g.kind]||fi.generic,b=g.status==="running"?"加工中 RUN":g.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${$t}`,n.fillStyle=ct.text;let v=String(g.label||g.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${v}`,40,f+p+52),n.textAlign="right",n.font=`700 22px ${Lt}`,n.fillStyle=g.status==="running"?ct.cyan:g.status==="error"?ct.red:ct.green,n.fillText(b,e-40,f+p+52)}gf(n,e,t,ct.cyan)}function Sw(n,e,t,i){Zu(n,e,t),dg(n,e,"成本与上下文","COST & CONTEXT",ct.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?ct.amber:ct.green),Os(n,36,122,"累计花费","TOTAL COST"),hg(n,36,226,i.priced?xn(i.cost):"—",ct.gold,90),n.font=`600 22px ${Lt}`,n.fillStyle=ct.muted,n.textAlign="left",n.fillText(`高峰 ${xn(i.costPeak)} · 低谷 ${xn(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=ug(Math.max(.01,...i.costHist)*1.15,yw);fg(n,480,104,e-480-40,200,i.costHist,{color:ct.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>xn(d)}),n.font=`600 17px ${Lt}`,n.fillStyle=ct.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;Os(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${Lt}`,n.fillStyle=ct.text,n.fillText(i.window?`${zt(i.ctx)} / ${zt(i.window)} · ${Ii(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?ct.red:i.ratio>=.6?ct.amber:ct.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*dt(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;Os(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${Lt}`,n.fillStyle=ct.green,n.fillText(i.priced?xn(i.savings):"—",330,u+2),Os(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${Lt}`,n.fillStyle=ct.text,n.fillText(Ii(i.hitRate),e-36,u+2),gf(n,e,t,ct.gold)}var ww={flow:bw,main:Mw,cost:Sw};function pg(n,e,{demo:t=!1}={}){let i=new Wt;i.name="screens";let s=[],r=new Ct({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),o=gt.screenR;for(let g of _w){let[_,b]=g.px,v=Gt(_,b,(N,R,D)=>Zu(N,R,D),{anisotropy:8}),w=new qt({map:v.tex,name:`screen-${g.id}`,toneMapped:!1});w.color.setScalar(1.25);let M=new rt(Et(tt.cx,tt.cz,o,g.a0,g.a1,g.y0,g.y1,48,!0),w);M.name=`screen-${g.id}`,M.userData.screenId=g.id,i.add(M);let y=.05/o,S=new rt(Et(tt.cx,tt.cz,o+.015,g.a0-y,g.a1+y,g.y0-.05,g.y1+.05,48,!0),r);S.name=`screen-bezel-${g.id}`,S.layers.set(an),i.add(S),s.push({def:g,tex:v,sig:"",draw:ww[g.id],panel:M})}let a=new Array(lg).fill(0),l=new Array(cg).fill(0),c=0,u=0,d=0,h=0,p=0,f=!1;function x(g){let _=g.state,b=g.live||{},v=b.phase&&b.phase!=="idle"?b.phase:_?_.phase:"idle",w=_?_.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},M=_?$u(_):{hitRate:0,toolSuccess:1,contextRatio:0},y=_?_.turns:[];return{demo:t,phase:v,tps:g.tps||0,peakTps:h,tpsHist:a,costHist:l,totals:w,hitRate:M.hitRate,toolSuccess:M.toolSuccess,model:_?_.model:"",effort:_?_.effort:"",turn:_?_.turnCount:0,ok:y.filter(S=>S.status==="ok").length,rework:y.filter(S=>S.status==="rework").length,calls:_?_.tools.calls:0,running:_?_.tools.running:0,files:_?_.files.count:0,added:_?_.files.added:0,removed:_?_.files.removed:0,requests:w.requests,recent:_?_.calls:[],peak:!!g.peak,priced:!_||!_.model||!!hs(_.provider,_.model),cost:w.cost,costPeak:w.costPeak,costOff:w.costOffPeak,savings:w.savings,ctx:_?_.contextTokens:0,window:_?_.contextWindow:0,ratio:M.contextRatio||0}}function m(g,_){if(g==="flow"){let b=_.totals;return`${_.phase}|${Math.round(_.tps*2)}|${b.miss+b.write}|${b.hit}|${b.output}|${b.reasoning}|${b.requests}|${p>0?c:"flat"}|${Math.round(_.peakTps)}`}if(g==="main"){let b=_.recent[_.recent.length-1];return`${_.model}|${_.effort}|${_.phase}|${_.turn}|${_.ok}|${_.rework}|${_.calls}|${_.running}|${_.files}|${_.added}|${_.removed}|${_.requests}|${_.recent.length}|${b?`${b.id}:${b.status}`:""}|${Math.round(_.toolSuccess*1e3)}`}return`${_.cost.toFixed(5)}|${_.costPeak.toFixed(5)}|${_.savings.toFixed(5)}|${_.ctx}|${_.window}|${_.peak}|${_.requests}|${l[cg-1].toFixed(5)}|${Math.round(_.hitRate*1e3)}`}return{root:i,update(g,_,b){c+=g,u+=g,d+=g;let v=b.tps||0;h=Math.max(h,v),c>=.5&&(c=0,a.shift(),a.push(v),p=v>.5?lg:Math.max(0,p-1));let w=b.state?b.state.totals.cost:0;if(!f&&b.state&&(l.fill(w),f=!0),u>=2&&(u=0,l.shift(),l.push(w)),d<.5)return;d=0;let M=x(b);for(let y of s){let S=m(y.def.id,M);S!==y.sig&&(y.sig=S,y.tex.redraw((N,R,D)=>y.draw(N,R,D,M)))}},reset(){a.fill(0),l.fill(0),h=0,p=0,f=!1;for(let g of s)g.sig=""}}}var lr=16,Ew=.004,xf=.06,Ju=new Oe(4164863),mg=new Oe(4641535),gg=new Oe(16762218),Tw=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${lr}];
uniform float uOffset[${lr}];
uniform vec3 uColor[${lr}];
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
}`,Aw=`
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
}`;function Rw(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=xf/2,p=r[0]-u*(s===0?0:h),f=r[1]-d*(s===0?0:h),x=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),g=-d*(xf/2),_=u*(xf/2),b=i-(s===0?0:h),v=i+c+(s===n.length-2?0:h),w=[[p-g,f-_,b,-1],[p+g,f+_,b,1],[x+g,m+_,v,1],[x-g,m-_,v,-1]];for(let M of[0,1,2,0,2,3]){let y=w[M];t.pos.push(y[0],Ew,y[1]),t.s.push(y[2]),t.x.push(y[3]),t.chan.push(e)}i+=c}}var xg=n=>[n.x,n.z];function _g(){let n={},e=[],t=[],i=(m,g,_)=>{n[m]=t.length,e.push(g),t.push(_)},s=[Yi.x,Yi.z],r=(m,g,_)=>[xg(Ci(m,g)),xg(Ci(m,_))];i("fuel",mg,[[-7.45,-.7],[-4.6,-.7]]),i("feed",Ju,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,Ju,r(Qh(m),.95,2.12));i("lock",mg,r(Br,.95,2.1)),i("unload",gg,r(Ho,.95,2.1)),i("out",gg,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let g=m/120*It;o.push([s[0]+Math.cos(g)*4.27,s[1]-Math.sin(g)*4.27])}i("ring",Ju,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,g)=>Rw(m,g,a));let l=new Nt;l.setAttribute("position",new ut(a.pos,3)),l.setAttribute("aS",new ut(a.s,1)),l.setAttribute("aX",new ut(a.x,1)),l.setAttribute("aChan",new ut(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(lr),u=new Float32Array(lr),d=new Float32Array(lr),h=new Float32Array(lr),p=[];for(let m=0;m<lr;m++)p.push((e[m]||Ju).clone());let f=new Xt({name:"floor-channels",vertexShader:Tw,fragmentShader:Aw,uniforms:xu.merge([Ze.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:p}}]),transparent:!0,blending:Ao,blendSrc:er,blendDst:tr,blendSrcAlpha:Ac,blendDstAlpha:er,depthWrite:!1,fog:!0});f.uniforms.uLevel.value=c,f.uniforms.uOffset.value=u,f.uniforms.uColor.value=p;let x=new rt(l,f);return x.name="floor-channels",x.renderOrder=-1,x.frustumCulled=!1,x.layers.set(an),d.fill(.8),{root:x,ids:n,set(m,g,_){let b=n[m];b!=null&&(h[b]=g,_!=null&&(d[b]=_))},update(m){for(let g=0;g<t.length;g++)c[g]+=(h[g]-c[g])*(1-Math.exp(-4*m)),u[g]=(u[g]+d[g]*m*(.25+c[g]))%1600}}}var Cw={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"}},Pw={low:null,medium:null,high:{scale:.4,strength:.5,blur:1},ultra:{scale:.55,strength:.55,blur:.8}},Iw=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5];function vg(n,e,{environment:t=!0,demo:i=!1,look:s=rr,brightness:r=jt.initial}={}){let o=new Mr;o.background=null;let a=Wh(s),l=dt(r,jt.min,jt.max),c=t?n:null,u=c?Pw[e]:null,d=u?sm(c,u):null,{M:h,tex:p}=Y0(e),f=bm(h,p,e,{renderer:c,look:a,reflection:d,beamTarget:new A(tn.x,3,tn.z)});function x(){o.environment=f.envTexture,o.environmentIntensity=a.envIntensity}x();let m=Jm(p),g=Im(h),_=zm(h),b=Xm(h),v=qm(h,m),w=Qm(h),M=Zm(h,w),y=pg(h,null,{demo:i}),S=_g(),N=new Wt;N.name="wafers",o.add(f.root,S.root,y.root,g.root,_.root,b.root,v.root,M.root,m.root,N);let R=ng({cell:b,stations:v,stocker:M,engine:_,wafers:w,root:N}),D=[];for(let K of[...g.hover,..._.hover,...b.hover,...v.list.flatMap(Me=>Me.hover),...M.hover])K.object.userData.hoverId=K.id,D.push(K.object);let F=[{id:"tank",anchor:g.anchors.tank},{id:"engine",anchor:_.anchors.engine},{id:"robot",anchor:b.anchors.robot.clone().setY(1.75)},...v.list.map(K=>({id:`station:${K.kind}`,anchor:K.anchor})),{id:"loadport",anchor:M.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:M.anchors.stocker.clone().setY(1.25)}],B={phase:"idle",tps:0,balance:null,currency:"CNY"},L={state:null,live:B,tps:0,peak:!1},W={activity:0,tps:0,model:"",phase:"idle"},V=null,q=0,Y=!1,Z=0,ne=0,re=0,Ee=1,ze=Fs(Date.now());function ie(){ze=Fs(Date.now());let K=V?hs(V.provider,V.model):null,Me=typeof B.balance=="number"?B.balance:null,Ke=B.currency==="USD"?"$":"¥",Pe=[i?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(Me==null)Pe.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),Pe.push({text:"余额不可用 · balance unavailable",size:28,color:"#8c97ad",gap:56});else{Pe.push({text:`${Ke} ${Me.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let $e=B.currency==="USD"?0:Wu(Me,K,ze);Pe.push({text:K&&$e?`≈ ${zt($e)} tokens · ${K.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}Pe.push({text:ze?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:ze?"#ffb020":"#34d17a",weight:700,gap:72}),g.setReadout(Pe)}function Te(){let K=typeof B.balance=="number"?B.balance:null;if(K==null)return .5;Z=Math.max(Z,K);let Me=Iw.find(Ke=>Ke>=Z*1.25)||Z*1.25;return dt(K/Me,0,1)}function De(K,Me,Ke){let Pe=R.activity();S.set("fuel",.1+.9*Me,.7+ne/28),S.set("feed",Pe.inbound>0?1:.1+.55*Me,1.5),S.set("lock",Pe.inbound>0?.9:.08,-1.4);for(let $e of v.list)S.set(`spoke:${$e.index}`,$e.active?1:.06,1.2);S.set("unload",Pe.outbound>0?.9:.08,1.4),S.set("out",Pe.outbound>0||Pe.stocker?.9:.08,1.4),S.set("ring",Pe.robot?.75:Ke!=="idle"?.4:.22,.8),S.update(K)}function se(K){return K==="reasoning"||K==="generating"||K==="thinking"?.35+.65*dt(ne/70,0,1):K==="tool"?.2:0}return{scene:o,key:f.key,presets:Cw,labelAnchors:F,get post(){return{...a.post,exposure:a.exposure*l}},getLook:()=>a.id,setLook(K){let Me=Wh(K);return Me===a?!1:(a=Me,f.setLook(a),x(),!0)},getBrightness:()=>l,setBrightness(K){l=dt(Number(K)||jt.initial,jt.min,jt.max)},setState(K){K&&(V&&K.tools.errors>q&&(Y=!0),q=K.tools.errors,V=K,R.sync(K),Ee=Math.max(Ee,.45))},setLive(K){K&&Object.assign(B,K)},busy(){return R.busy()||B.phase&&B.phase!=="idle"||ne>1},update(K,Me){ne=Bt(ne,B.tps||0,6,K),Ee+=K,Ee>=.5&&(Ee=0,ie());let Ke=V?V.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},Pe=B.phase&&B.phase!=="idle"?B.phase:V?V.phase:"idle",$e=ne>.5?dt(.2+ne/90,0,1):0;re=Bt(re,se(Pe),1.6,K),W.activity=re,W.tps=ne,W.model=V?V.model:"",W.phase=Pe,f.update(K,Me,W),g.update(K,Me,{level:Te(),flow:$e,peak:ze}),_.update(K,Me,{phase:Pe,tps:ne,ctx:V&&V.contextWindow>0?V.contextTokens/V.contextWindow:0,counters:{miss:Ke.miss,hit:Ke.hit,output:Ke.output,reasoning:Ke.reasoning,cost:Ke.cost},errorPulse:Y}),Y=!1,R.update(K,Me),m.update(K),De(K,$e,Pe),L.state=V,L.tps=ne,L.peak=ze,y.update(K,Me,L)},prerender(K){d&&d.update(o,K)},hoverTargets(){return M.hoverObjects(D.slice())},focus:K=>R.focus(K),stats:()=>R.stats(),dispose(){R.dispose(),M.dispose(),f.dispose(),q0(o),w.dispose(),d&&d.dispose();for(let K of Object.values(h))K&&K.dispose&&K.dispose();for(let K of Object.values(p))K&&K.dispose&&K.dispose()}}}var Lw=new Ps(-1,1,1,-1,0,1),_f=class extends Nt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}},Dw=new _f,ju=class{constructor(e){this._mesh=new rt(Dw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Nw=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Uw=`
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
}`,Fw=`
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
}`,Ow=`
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
}`,kw=`
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
}`;function yg(n,e,t={}){let i=new Un(Math.max(1,n),Math.max(1,e),{type:Qn,minFilter:un,magFilter:un,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function Qu(n,e,t={}){return new Mo({vertexShader:Nw,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function bg(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new ju(null),r=yg(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(yg(2,2));let a=Qu(Uw,{tSrc:{value:null},uTexel:{value:new _e},uThreshold:{value:1},uKnee:{value:.45}}),l=Qu(Fw,{tSrc:{value:null},uTexel:{value:new _e}}),c=Qu(Ow,{tSrc:{value:null},uTexel:{value:new _e},uWeight:{value:1}},{blending:Pn,transparent:!0}),u=Qu(kw,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,p){n.setRenderTarget(p),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,p){r.setSize(Math.max(1,h),Math.max(1,p));let f=Math.max(1,Math.floor(h/2)),x=Math.max(1,Math.floor(p/2));for(let m of o)m.setSize(f,x),f=Math.max(1,Math.floor(f/2)),x=Math.max(1,Math.floor(x/2))},set({bloomStrength:h,threshold:p,knee:f,vignette:x,grain:m,exposure:g}={}){h!=null&&(u.uniforms.uBloom.value=h),p!=null&&(a.uniforms.uThreshold.value=p),f!=null&&(a.uniforms.uKnee.value=f),x!=null&&(u.uniforms.uVignette.value=x),m!=null&&(u.uniforms.uGrain.value=m),g!=null&&(u.uniforms.toneMappingExposure.value=g)},render(h,p,f=0){let x=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,p),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let g=o[m-1];l.uniforms.tSrc.value=g.texture,l.uniforms.uTexel.value.set(1/g.width,1/g.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let g=o[m+1];c.uniforms.tSrc.value=g.texture,c.uniforms.uTexel.value.set(1/g.width,1/g.height),d(c,o[m])}}u.uniforms.uTime.value=f,d(u,null),n.autoClear=x},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var ed=85*Math.PI/180,Bw=1.65,zw=3.2,Hw=2.6,Gw={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Mg(n,e,t={}){let{keyTarget:i=null,clampPosition:s=se=>se,floorY:r=0,onStart:o=null,onChange:a=null}=t,l=!1,c=0,u=0,d=new jn(0,0,0,"YXZ"),h=new Set,p=!1,f=new A,x=new A,m=0,g=null,_=null,b=0,v=new A,w=new A,M=new A,y=new A,S=new A,N=new Ar,R=new _e;function D(){d.set(u,c,0,"YXZ"),n.quaternion.setFromEuler(d)}function F(){d.setFromQuaternion(n.quaternion,"YXZ"),c=d.y,u=dt(d.x,-ed,ed),D()}function B(se){return v.copy(n.position),S.copy(v).add(se),n.position.copy(S),s(n.position,v),n.position.distanceTo(S)}let L=()=>{b=performance.now(),a&&a()},W=()=>{o&&o(),L()};function V(se){if(!l)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let K=se.button===2||se.button===0&&se.shiftKey?"pan":se.button===0?"look":null;if(K){g={id:se.pointerId,x:se.clientX,y:se.clientY,mode:K},_=null;try{e.setPointerCapture(se.pointerId)}catch{}W()}}function q(se){if(!l||!g||se.pointerId!==g.id)return;let K=se.clientX-g.x,Me=se.clientY-g.y;g.x=se.clientX,g.y=se.clientY;let Ke=Math.max(300,e.clientHeight||600);if(g.mode==="look"){let Pe=2.4/Ke;c+=K*Pe,u=dt(u+Me*Pe,-ed,ed),D()}else{let Pe=6/Ke;M.set(1,0,0).applyQuaternion(n.quaternion),y.copy(M).multiplyScalar(-K*Pe),y.y+=Me*Pe,B(y)}L()}function Y(se){if(!(!g||se.pointerId!==g.id)){g=null;try{e.releasePointerCapture(se.pointerId)}catch{}L()}}function Z(se){if(!l)return;se.preventDefault();let K=se.deltaMode===1?16:se.deltaMode===2?400:1;m=dt(m+dt(-se.deltaY*K*.006,-4,4),-8,8),_=null,W()}function ne(se){if(!l)return;let K=e.getBoundingClientRect();R.set((se.clientX-K.left)/Math.max(1,K.width)*2-1,-((se.clientY-K.top)/Math.max(1,K.height))*2+1),n.updateMatrixWorld(),N.setFromCamera(R,n);let{origin:Me,direction:Ke}=N.ray;if(Ke.y>-.02)return;let Pe=(r-Me.y)/Ke.y;if(Pe<=0||Pe>60)return;let $e=new A().copy(Ke).multiplyScalar(Pe).add(Me),Ie=$e.x-n.position.x,de=$e.z-n.position.z,z=Math.hypot(Ie,de);z>1.5&&($e.x-=Ie/z*1.2,$e.z-=de/z*1.2),$e.y=r+Bw;let X=$e.distanceTo(n.position);_={t:0,d:dt(X/6,.45,1.6),p0:n.position.clone(),p1:$e},W()}function re(se,K){if(!l||se.ctrlKey||se.metaKey||se.altKey)return;let Me=se.target;if(Me&&(Me.tagName==="INPUT"||Me.tagName==="TEXTAREA"||Me.tagName==="SELECT"||Me.isContentEditable))return;p=!!se.shiftKey;let Ke=Gw[se.code];Ke&&(se.preventDefault(),se.stopPropagation(),K?h.add(Ke):h.delete(Ke),K?(_=null,W()):L())}let Ee=se=>re(se,!0),ze=se=>re(se,!1),ie=()=>{h.clear(),p=!1},Te=se=>{l&&se.preventDefault()};e.addEventListener("pointerdown",V),e.addEventListener("pointermove",q),e.addEventListener("pointerup",Y),e.addEventListener("pointercancel",Y),e.addEventListener("wheel",Z,{passive:!1}),e.addEventListener("dblclick",ne),e.addEventListener("contextmenu",Te),i&&(i.addEventListener("keydown",Ee),i.addEventListener("keyup",ze),i.addEventListener("blur",ie));function De(se){if(!l)return!1;let K=!1;if(_){_.t+=se;let Me=Ti(Math.min(1,_.t/_.d));y.lerpVectors(_.p0,_.p1,Me).sub(n.position),(B(y)>.02||_.t>=_.d)&&(_=null),K=!0}if(x.set(0,0,0),h.size&&(w.set(-Math.sin(c),0,-Math.cos(c)),M.set(Math.cos(c),0,-Math.sin(c)),h.has("f")&&x.add(w),h.has("b")&&x.sub(w),h.has("r")&&x.add(M),h.has("l")&&x.sub(M),h.has("u")&&(x.y+=1),h.has("d")&&(x.y-=1),x.lengthSq()>0&&x.normalize().multiplyScalar(zw*(p?Hw:1))),f.set(Bt(f.x,x.x,9,se),Bt(f.y,x.y,9,se),Bt(f.z,x.z,9,se)),f.lengthSq()>1e-6?(B(y.copy(f).multiplyScalar(se)),K=!0):f.set(0,0,0),Math.abs(m)>.001){let Me=m*(1-Math.exp(-9*se));m-=Me,n.getWorldDirection(w),B(y.copy(w).multiplyScalar(Me))>.02&&(m=0),K=!0}else m=0;return K&&L(),K}return{get enabled(){return l},enable(){l=!0,F()},disable(){l=!1,g=null,_=null,h.clear(),f.set(0,0,0),m=0},sync:F,active(){return l&&(!!g||!!_||h.size>0||Math.abs(m)>.001||f.lengthSq()>1e-4||performance.now()-b<300)},update:De,dispose(){e.removeEventListener("pointerdown",V),e.removeEventListener("pointermove",q),e.removeEventListener("pointerup",Y),e.removeEventListener("pointercancel",Y),e.removeEventListener("wheel",Z),e.removeEventListener("dblclick",ne),e.removeEventListener("contextmenu",Te),i&&(i.removeEventListener("keydown",Ee),i.removeEventListener("keyup",ze),i.removeEventListener("blur",ie))}}}var vf=["orbit","look"],Gr=["low","medium","high","ultra"],Go=["auto",30,60,120,0],ll={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},Vw=60,Ww=30,Xw=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,qw=/swiftshader|llvmpipe|softpipe|software|basic render/i;function $w(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(qw.test(t))return"low";if(Xw.test(t))return"high"}catch{}return"medium"}function Yw(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new Nt;return t.setAttribute("position",new ut(e,3)),t}function Kw(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function Sg(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c}=e,u=!!e.demo,d=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=new yu({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),p=$w(h.getContext()),f=ll[e.quality]?e.quality:p,x=Go.includes(e.fps)?e.fps:"auto";h.setClearColor(ym,1),h.toneMapping=Fa,h.toneMappingExposure=1,h.outputColorSpace=Dn,h.shadowMap.type=Rr,h.shadowMap.autoUpdate=!1,h.info.autoReset=!1,h.debug.onShaderError=(O,he,ce,ye)=>{let Le=O.getShaderSource(ye)||"",Je=/#define SHADER_NAME (.*)/.exec(Le),at=Je&&Je[1].trim()||"shader",nt=[O.getShaderInfoLog(ce),O.getShaderInfoLog(ye),O.getProgramInfoLog(he)].map(on=>(on||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${at}" failed to compile
${nt}`);let At=nt.split(`
`).find(on=>/error/i.test(on))||nt.split(`
`)[0]||"";r&&r("shader",`${at}: ${At}`.slice(0,220))};let m=Kw(h.getContext()),g=!1,_=h.domElement;_.className="dwp3d-gl",_.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",_.setAttribute("aria-hidden","true"),n.appendChild(_);let b=document.createElement("div");b.className="dwp3d-labels",n.appendChild(b);let v=new Nn(40,1,.2,9e3);v.layers.enable(an);let w=new wu(v,_);w.enableDamping=!0,w.dampingFactor=.08,w.minDistance=2.2,w.maxDistance=26,w.zoomToCursor=!0,w.maxPolarAngle=150*(Math.PI/180),w.screenSpacePanning=!0,w.rotateSpeed=.7,w.zoomSpeed=.9,w.panSpeed=.8;let M=null,y=null,S=null,N=Yw(),R=null,D=null,F=0,B=0,L=1,W=1,V=null,q="orbit",Y=!1,Z,ne=0,re=0,Ee=new A,ze=[],ie=[],Te=!0,De=!1,se=!1,K=!1,Me=0,Ke=0,Pe=Or.includes(e.look)?e.look:rr,$e=dt(Number(e.brightness)||jt.initial,jt.min,jt.max),Ie={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function de(){Ie.casters.clear(),Ie.pending=!1,!(!M||!h.shadowMap.enabled)&&(M.scene.updateMatrixWorld(!0),M.scene.traverse(O=>{O.castShadow&&(O.isMesh||O.isPoints||O.isLine)&&Ie.casters.set(O,{m:O.matrixWorld.clone(),v:O.isInstancedMesh?O.instanceMatrix.version:0})}),h.shadowMap.needsUpdate=!0,Ie.lastBake=Ke,Ie.bakes+=1)}function z(){if(!M||!h.shadowMap.enabled||Ke<Ie.next)return;Ie.next=Ke+.5;let O=!1;for(let[ce,ye]of Ie.casters){if(!ce.castShadow||!$n(ce)){Ie.casters.delete(ce),O=!0;continue}(!ce.matrixWorld.equals(ye.m)||ce.isInstancedMesh&&ce.instanceMatrix.version!==ye.v)&&(ce.castShadow=!1,Ie.casters.delete(ce),O=!0)}M.scene.traverse(ce=>{ce.castShadow&&!Ie.casters.has(ce)&&(ce.castShadow=!1)}),O&&(Ie.pending=!0);let he=Ie.bakes<4?.5:2;Ie.pending&&Ke-Ie.lastBake>=he&&de()}function X(){y&&(y.dispose(),y=null),S&&(S.removeFromParent(),S.material.dispose(),S=null),M&&(M.dispose(),M=null),Ie.casters.clear(),h.renderLists.dispose()}function oe(){let O=ll[f];h.shadowMap.enabled=f!=="low",M=vg(h,f,{demo:u,look:Pe,brightness:$e}),S=new ma(N,new _o({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),S.name="hover-highlight",S.matrixAutoUpdate=!1,S.frustumCulled=!1,S.renderOrder=20,S.visible=!1,S.layers.set(an),M.scene.add(S),y=bg(h,{msaa:O.msaa,bloom:O.bloom}),$(),W=1,ae(!0),R&&M.setState(R),D&&M.setLive(D),ve(),Ie.bakes=0,Ie.next=Ke+.5,de()}function $(){!y||!M||(M.post&&y.set(M.post),d&&y.set({grain:.006}))}let te=new _e;function Se(O,he,ce,ye){te.set(O.x-tt.cx,O.z-tt.cz),te.length()>he&&(te.setLength(he),O.x=tt.cx+te.x,O.z=tt.cz+te.y),O.y=dt(O.y,ce,ye)}function U(){Se(w.target,ei.targetR,ei.targetYMin,ei.targetYMax),Se(v.position,ei.r,ei.yMin,ei.yMax)}function Q(){y&&y.setSize(Math.round(F*L*W),Math.round(B*L*W))}function ae(O=!1){let he=Math.max(1,Math.floor(n.clientWidth)),ce=Math.max(1,Math.floor(n.clientHeight)),ye=Math.min(typeof window<"u"&&window.devicePixelRatio||1,ll[f].dpr);!O&&he===F&&ce===B&&ye===L||(F=he,B=ce,L=ye,h.setPixelRatio(ye),h.setSize(he,ce,!1),Q(),v.aspect=he/ce,v.updateProjectionMatrix())}function I(O){let he=M?M.presets:null,ce=he&&(he[O]||he.overview)||{pos:[0,7,16],target:[0,2,-1]},ye=new A().fromArray(ce.target),Le=new A().fromArray(ce.pos),Je=ce.mode==="look"?"look":"orbit";if(Je==="orbit"){let at=dt(1.7/Math.max(.3,v.aspect),1,2.3);Le.sub(ye).multiplyScalar(at).add(ye),Se(Le,ei.r,ei.yMin,ei.yMax)}return{pos:Le,target:ye,mode:Je}}function Qe(O,he){let ce=he.x-O.x,ye=he.y-O.y,Le=he.z-O.z;return{yaw:Math.atan2(-ce,-Le),pitch:Math.atan2(ye,Math.hypot(ce,Le))}}let it=new jn(0,0,0,"YXZ"),pt=new A;function Ae(O,he){it.set(he,O,0,"YXZ"),v.quaternion.setFromEuler(it)}function xe(O){O!==q&&(q=O,O==="look"?(Y=!1,w.enabled=!1,G.enable()):(G.disable(),w.enabled=!0),c&&c(O))}function be(){let O=No(v.position)==="hall";if(xe("orbit"),!O){C("overview");return}v.getWorldDirection(pt),w.target.copy(v.position).addScaledVector(pt,6),Se(w.target,ei.targetR,ei.targetYMin,ei.targetYMax),w.update(),U()}function Ve(O){let{pos:he,target:ce,mode:ye}=I(O);if(V=null,xe(ye),v.position.copy(he),ye==="look"){let Le=Qe(he,ce);Ae(Le.yaw,Le.pitch),G.sync()}else w.target.copy(ce),w.update(),U()}function C(O,he=1.2){if(d){Ve(O);return}let{pos:ce,target:ye,mode:Le}=I(O);xe(Le),it.setFromQuaternion(v.quaternion,"YXZ");let Je=Qe(ce,ye);V={t:0,d:he,p0:v.position.clone(),p1:ce,yaw0:it.y,pitch0:it.x,yaw1:Je.yaw,pitch1:Je.pitch,target:ye,mode:Le}}let E=()=>{Me=performance.now()};w.addEventListener("start",()=>{V=null,E()}),w.addEventListener("change",E),w.addEventListener("end",E);let G=Mg(v,_,{keyTarget:n,clampPosition:Q0,floorY:0,onStart:()=>{V=null,E()},onChange:E});function ve(){for(let O of ze)O.el.remove();if(ze=[],!!M)for(let O of ie){let he=M.labelAnchors.find(Le=>Le.id===O.id);if(!he)continue;let ce=document.createElement("div");ce.className="dwp3d-label";let ye=document.createElement("span");if(ye.className="dwp3d-label-title",ye.textContent=O.text,ce.appendChild(ye),O.sub){let Le=document.createElement("span");Le.className="dwp3d-label-sub",Le.textContent=O.sub,ce.appendChild(Le)}b.appendChild(ce),ze.push({id:O.id,el:ce,anchor:he.anchor,shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let ue=new A,Ne=[],Ge=[];function pe(O){O.shown!==!1&&(O.el.style.opacity="0",O.shown=!1)}function me(){if(Te){Ne.length=0;for(let O of ze){if(ue.copy(O.anchor).project(v),!(ue.z<1&&Math.abs(ue.x)<1.05&&Math.abs(ue.y)<1.05)){pe(O);continue}O.sx=(ue.x*.5+.5)*F,O.sy=(-ue.y*.5+.5)*B,O.dist=v.position.distanceTo(O.anchor),Ne.push(O)}Ne.sort((O,he)=>O.dist-he.dist),Ge.length=0;for(let O of Ne){O.w||(O.w=O.el.offsetWidth,O.h=O.el.offsetHeight);let he={x0:O.sx-O.w/2-3,x1:O.sx+O.w/2+3,y0:O.sy-O.h-3,y1:O.sy+7};if(Ge.some(Le=>he.x0<Le.x1&&he.x1>Le.x0&&he.y0<Le.y1&&he.y1>Le.y0)){pe(O);continue}Ge.push(he);let ce=dt(1.45-O.dist/24,.3,1).toFixed(2),ye=`translate(${O.sx.toFixed(1)}px, ${O.sy.toFixed(1)}px) translate(-50%, -100%)`;ye!==O.tf&&(O.el.style.transform=ye,O.tf=ye),O.shown!==ce&&(O.el.style.opacity=ce,O.shown=ce)}}}let He=new Ar,H=new _e,fe=null,le=!1,ke=0,Ue=null,Be=null,et=null,We=!1;function Ce(O){if(!M)return null;H.set(O.x/F*2-1,-(O.y/B)*2+1),v.updateMatrixWorld(),He.setFromCamera(H,v);let he=He.intersectObjects(M.hoverTargets(),!0);for(let ce of he)for(let ye=ce.object;ye;ye=ye.parent)if(ye.userData&&ye.userData.hoverId)return{id:ye.userData.hoverId,obj:ye};return null}let je=O=>{let he=_.getBoundingClientRect();return{x:O.clientX-he.left,y:O.clientY-he.top}},xt=O=>{fe=je(O),le=!0,et&&Math.hypot(fe.x-et.x,fe.y-et.y)>5&&(We=!0)},Xe=()=>{fe=null,le=!0},Tt=O=>{et={...je(O),t:performance.now()},We=!1,E(),_.style.cursor="grabbing"},Yt=O=>{let he=je(O);if(q==="orbit"&&et&&!We&&performance.now()-et.t<450&&i){let ce=Ce(he);i(ce?ce.id:null)}et=null,We=!1,le=!0,E(),_.style.cursor=Ue?"pointer":"grab"};_.addEventListener("pointermove",xt),_.addEventListener("pointerleave",Xe),_.addEventListener("pointerdown",Tt),_.addEventListener("pointerup",Yt);function $n(O){let he=O;for(;he.parent;)he=he.parent;return!!M&&he===M.scene}let Li=new A,mi=new A,ur=new dn,dr=new bt,Bs=new bi;function gi(O){if(!S)return;let he=Be;if(!he||!$n(he)){S.visible=!1;return}he.updateWorldMatrix(!0,!1),he.geometry?(he.geometry.boundingBox||he.geometry.computeBoundingBox(),he.geometry.boundingBox.getSize(Li),he.geometry.boundingBox.getCenter(mi),Li.multiplyScalar(1.06).addScalar(.03),dr.compose(mi,ur.identity(),Li),S.matrix.multiplyMatrices(he.matrixWorld,dr)):(Bs.setFromObject(he),Bs.getSize(Li).multiplyScalar(1.06).addScalar(.03),Bs.getCenter(mi),S.matrix.compose(mi,ur.identity(),Li)),S.matrixWorldNeedsUpdate=!0,S.material.opacity=d?.85:.62+.28*(.5+.5*Math.sin(O*5)),S.visible=!0}function xi(){return x!=="auto"?x:!!V||Y||!!et||G.active()||performance.now()-Me<900||M&&M.busy()?Vw:Ww}let fs=0,Di=!1,Ji=0,_i=0,ji=0,St={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Re=!0,_t=typeof document>"u"||!document.hidden;function _n(){St.frames=0,St.ticks=0,St.t=0,St.capTime=0,St.cpu=0}function ps(){let O=St.frames/St.t,he=St.ticks/St.t,ce=St.capTime/St.t,ye=Math.max(1,Math.min(ce>0?ce:he,he)),Le=O<ye*.85,Je=ll[f];Le?(St.good=0,St.slow+=1,St.slow>=2&&W>Je.minScale&&(W=Math.max(Je.minScale,Math.round((W-.1)*100)/100),St.slow=0,Q())):(St.slow=0,O>=ye*.95&&(St.good+=1),St.good>=5&&W<1&&(W=Math.min(1,Math.round((W+.05)*100)/100),St.good=0,Q())),m.poll(),s&&s({fps:O,target:ye,slow:Le,scale:W,minScale:Je.minScale,cpuMs:St.frames?St.cpu/St.frames:0,gpuMs:g?m.take():null,gpuTimer:m.supported,calls:St.calls,triangles:St.tris,width:Math.round(F*L*W),height:Math.round(B*L*W),cap:x}),_n()}function hr(O){if(!Di)return;fs=requestAnimationFrame(hr);let he=Math.max(0,(O-Ji)/1e3);Ji=O,St.ticks+=1,St.t+=he;let ce=xi();if(St.capTime+=ce*he,St.t>=1&&ps(),ce>0){let Je=1e3/ce,at=O-_i;if(at<Je-1.5)return;_i=at<Je*2?_i+Je:O}else _i=O;let ye=performance.now(),Le=Math.min(.1,Math.max(0,(O-ji)/1e3));if(ji=O,Ke+=Le,V){V.t+=Le;let Je=Ti(Math.min(1,V.t/V.d));if(v.position.lerpVectors(V.p0,V.p1,Je),Ae(X0(V.yaw0,V.yaw1,Je),ui(V.pitch0,V.pitch1,Je)),V.t>=V.d){let at=V;V=null,at.mode==="look"?G.sync():w.target.copy(at.target)}}else if(Y&&M){if(ne-=Le,ne<=0){ne=.4;let at=M.focus(Ee);at||Ee.fromArray(M.presets.overview.target),at!==Z&&(Z=at,re=1.6,o&&o(at))}let Je=v.position.clone().sub(w.target);if(w.target.lerp(Ee,1-Math.exp(-2.4*Le)),re>0){re-=Le;let at=Z?6.8:I("overview").pos.distanceTo(I("overview").target);Je.setLength(Bt(Je.length(),at,2,Le))}v.position.copy(w.target).add(Je)}if(V||(q==="orbit"?(w.update(),U()):G.update(Le)),M&&M.update(Le,Ke,v),ke-=Le,le&&ke<=0){ke=.08,le=!1;let Je=fe&&!et?Ce(fe):null,at=Je?Je.id:null;Be=Je?Je.obj:null,et||(_.style.cursor=at?"pointer":"grab"),(at||Ue)&&(Ue=at,t&&t(at?{id:at,x:fe.x,y:fe.y}:null))}gi(Ke),z(),h.info.reset(),g&&m.begin(),y&&M&&(v.updateMatrixWorld(),M.prerender(v),y.render(M.scene,v,d?0:Ke)),g&&m.end(),St.calls=h.info.render.calls,St.tris=h.info.render.triangles,me(),St.frames+=1,St.cpu+=performance.now()-ye,K||(K=!0,l&&l())}function Qi(){let O=!De&&!se&&Re&&_t&&F>1&&B>1;O&&!Di?(Di=!0,Ji=_i=ji=performance.now(),_n(),fs=requestAnimationFrame(hr),a&&a(!0)):!O&&Di&&(Di=!1,cancelAnimationFrame(fs),a&&a(!1))}let fr=new ResizeObserver(()=>{ae(),Qi()});fr.observe(n);let T=typeof IntersectionObserver=="function"?new IntersectionObserver(O=>{Re=O.some(he=>he.isIntersecting),Qi()}):null;T&&T.observe(n);let k=()=>{_t=!document.hidden,Qi()};document.addEventListener("visibilitychange",k);let ee=O=>{O.preventDefault(),se=!0,Qi(),r&&r("context-lost")},J=()=>{se=!1,X(),oe(),Qi()};_.addEventListener("webglcontextlost",ee),_.addEventListener("webglcontextrestored",J);function j(){if(!De){De=!0,Di=!1,cancelAnimationFrame(fs),fr.disconnect(),T&&T.disconnect(),document.removeEventListener("visibilitychange",k),_.removeEventListener("pointermove",xt),_.removeEventListener("pointerleave",Xe),_.removeEventListener("pointerdown",Tt),_.removeEventListener("pointerup",Yt),_.removeEventListener("webglcontextlost",ee),_.removeEventListener("webglcontextrestored",J),w.dispose(),G.dispose();try{m.dispose(),X()}finally{N.dispose(),h.dispose(),h.forceContextLoss(),_.remove(),b.remove()}}}try{ae(!0),oe(),Ve("overview")}catch(O){throw j(),O}return Qi(),{setState(O){R=O,M&&M.setState(O)},setLive(O){D={...D||{},...O},M&&M.setLive(O)},getQuality:()=>f,autoQuality:()=>p,setQuality(O){!ll[O]||O===f||(f=O,Be=null,X(),oe())},getFrameCap:()=>x,setFrameCap(O){Go.includes(O)&&(x=O)},getLook:()=>Pe,setLook(O){!Or.includes(O)||O===Pe||(Pe=O,M&&M.setLook(O)&&($(),de()),E())},getBrightness:()=>$e,setBrightness(O){$e=dt(Number(O)||jt.initial,jt.min,jt.max),M&&(M.setBrightness($e),$()),E()},setPerfDetail(O){g=!!O&&m.supported},setCameraPreset(O){Y=!1,C(O),E()},getMode:()=>q,setMode(O){!vf.includes(O)||O===q||(V=null,O==="look"?xe("look"):be(),E())},setFollow(O){O&&q!=="orbit"&&(No(v.position)==="hall"?be():Ve("overview")),Y=!!O,Z=void 0,ne=0,Y&&(V=null)},setLabels(O){ie=Array.isArray(O)?O:[],ve()},setLabelsVisible(O){Te=!!O,b.style.display=Te?"":"none"},stats:()=>M?M.stats():null,dispose:j}}var ks=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),Zw=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:ks(3,"a"),new_string:ks(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:ks(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},6],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:ks(6,"c"),new_string:ks(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:ks(4,"v"),new_string:ks(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:ks(2,"b"),new_string:ks(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],cl={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function*Jw(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:cl.provider,model:cl.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...cl}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),p=Math.max(3,Math.round(h/.12));for(let f=0;f<p;f++){let x=d*(.82+.36*Math.abs(Math.sin(f*1.7+s)));e.streamed+=u/p,yield{live:{phase:c,tps:x}},yield{wait:h/p}}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,p,f,x])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:p,secs:f,fail:x}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield{wait:.08};let u=c.slice().sort((h,p)=>h.secs-p.secs),d=.08*c.length;for(let h of u){let p=Math.max(0,h.secs-d);p>0&&(yield{wait:p}),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield{wait:.35}}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*jw(n){for(;;)for(let e of Zw)yield*Jw(e,n),yield{wait:2.8},n.ctx>9e5&&(n.ctx=42e4)}function wg({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0},s=hs(cl.provider,cl.model),r=jw(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&Gu(u.usage);return h&&(i.balance=Math.max(0,i.balance-Vu(h,s,Fs(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,p=0;for(;p<u;){let{value:f}=r.next();f.wait?h+=f.wait*1e3*3:f.event&&(d.push(l(f,h)),f.event==="turn/end"&&p++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:p}=r.next();if(p.wait){d.length&&n?.(d),o=setTimeout(u,p.wait*1e3/t);return}p.event?d.push(l(p,Date.now())):p.live&&e?.(c(p.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var Eg=`
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
`;var{useEffect:Vo,useRef:En,useState:gn,useReducer:Ng,useCallback:td}=we,ul=!0,bf="dwp3d.quality",Tg="dwp3d.hint",Ag="dwp3d.hint.look",Qw=["overview","fuel","engine","stations","products","balcony"],eE=["raw","normal","gold","bad"],Rg={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},Cg={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},tE=200,nE=4,nd=3,Ug="dwp3d.fps",Pg="dwp3d.perf",Fg="dwp3d.look",Og="dwp3d.brightness";function Vr(n){try{return window.localStorage.getItem(n)}catch{return null}}function cr(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function Ig(){let n=Vr(bf);return Gr.includes(n)?n:null}function iE(){let n=Vr(Ug),e=n==null?"auto":Number(n);return Go.includes(e)?e:"auto"}function sE(){return typeof we.useId=="function"?we.useId():"dwp3d"}function rE(){let n=Vr(Fg);return Or.includes(n)?n:rr}function oE(){let n=Number(Vr(Og));return Number.isFinite(n)&&n>=jt.min&&n<=jt.max?n:jt.initial}function aE(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function lE({t:n,perf:e}){if(!e)return we.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},we.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),zt(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return we.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>we.createElement("div",{key:s,className:"dwp3d-perf-row"},we.createElement("span",null,s),we.createElement("b",null,r))))}function cE(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":"products":null}function uE(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function dE(n){let[e,t]=Ng(i=>i+1,0);return Vo(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var Mf=(n,e)=>n&&(n[e]||n.en)||"",yf=(n,e)=>`${Mf(n,e)} · ${n.code}`;function Lg(n){let e=t=>({id:t,text:Mf(rn[t],n),sub:rn[t].code});return[e("tank"),e("engine"),e("robot"),...Fu.map(t=>({id:`station:${t}`,text:Mf(fi[t],n),sub:fi[t].code})),e("loadport"),e("stocker")]}var hE=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework";function Dg(n,e){let t=[[n("status."+hE(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:e.files.length})]];for(let s of e.files.slice(0,6))t.push([Yh(s.path),`+${s.added} −${s.removed}`]);e.files.length>6&&t.push(["…",`+${e.files.length-6}`]);let i=(e.endedAt||Date.now())-e.startedAt;return t.push(["",n("hover.batchCost",{cost:xn(e.cost),time:ig(i)})]),t}function fE(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:yf(rn[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:xn(d)});switch(n){case"tank":{let d=[[t(ul?"m.balanceDemo":"m.balance"),e.balance==null?t("m.balanceNone"):xn(e.balance,e.currency)]];return o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${Ii(l.contextRatio)} · ${zt(i.contextTokens)} / ${zt(i.contextWindow)}`],[t("row.miss"),zt(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),zt(i.totals.write)]),d.push([t("row.hit"),zt(i.totals.hit)],[t("row.output"),zt(i.totals.output)],[t("row.reasoning"),zt(i.totals.reasoning)],[t("row.cost"),xn(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":return c(n);case"stocker":{let d=i.turns.filter(p=>p.status!=="running"),h=d.filter(p=>p.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${yf(rn.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:Dg(t,d)}}default:break}if(n.startsWith("station:")){let d=n.slice(8),h=fi[d];if(!h)return null;let p=i.calls.filter(_=>_.kind===d),f=p.filter(_=>_.status==="running").pop(),x=p[p.length-1],m=[];f?m.push([t("hover.working"),f.label||f.name]):x&&m.push([t("hover.lastCall"),x.label||x.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let g=p.filter(_=>_.status==="error").length;return g&&m.push([t("status.error"),String(g)]),{title:yf(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(p=>p.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?Dg(t,h):[]}}return null}function pE({hover:n,data:e,rootRef:t}){let i=fE(n.id,e);if(!i)return null;let s=t.current,r=s?s.clientWidth:0,o=s?s.clientHeight:0,a=n.x>r-320,l=n.y>o-220,c={left:a?n.x-14:n.x+16,top:l?n.y-12:n.y+18,transform:`translate(${a?"-100%":"0"}, ${l?"-100%":"0"})`};return we.createElement("div",{className:"dwp3d-panel dwp3d-tip",style:c,role:"tooltip"},we.createElement("h4",null,i.title),i.body?we.createElement("p",null,i.body):null,i.rows.length?we.createElement("div",{style:{marginTop:6}},i.rows.map(([u,d],h)=>we.createElement("div",{className:"row",key:h},we.createElement("span",null,u),we.createElement("span",null,d)))):null)}function mE({card:n}){let e=n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`;return we.createElement("div",{className:"dwp3d-panel dwp3d-card",title:e},we.createElement("div",{className:"k"},n.k),we.createElement("div",{className:"v"},n.v),n.s?we.createElement("div",{className:"s"},n.s):null,n.bar!=null?we.createElement("div",{className:"dwp3d-bar"},we.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function gE({t:n,calls:e}){return we.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},we.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=Cg[t.status]?t.status:"running",s=Cg[i],r=fi[t.kind]||fi.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return we.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},we.createElement("span",{className:"st",style:{color:s.color},"aria-hidden":"true"},s.icon),we.createElement("span",{className:"dwp3d-sr"},n("call."+i)),we.createElement("code",null,r.code),we.createElement("span",{className:"l"},o))}):we.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function xE({t:n,hintOn:e,hintKey:t,onDismiss:i}){return we.createElement("div",{className:"dwp3d-panel dwp3d-legend"},we.createElement("div",{className:"dwp3d-legend-row"},we.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),eE.map(s=>we.createElement("span",{className:"dwp3d-legend-item",key:s},we.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?we.createElement("div",{className:"dwp3d-hint"},we.createElement("span",null,n(t)),we.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}var _E=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function kg(n){let{ctx:e}=n,t=dE(e),i=uE(e),s=n.tBound||n.t,r=td((Re,_t)=>{let _n=typeof s=="function"?s(Re):Re,ps=typeof _n=="string"&&_n?_n:Re;return _t?sg(ps,_t):ps},[s]),o=En(r);o.current=r;let a=En(i);a.current=i;let l=En(null),c=En(null),u=En(null),d=En(pf()),h=En({phase:"idle",tps:0,balance:null,currency:"CNY"}),p=En(0),f=En(!1),x=En(!0),m=En(0),g=En({settle:nd,low:0}),[,_]=Ng(Re=>Re+1,0),[b,v]=gn(0),[w,M]=gn(()=>Ig()!=null),y=En(w),[S,N]=gn(()=>Ig()||"medium"),R=En(S),[D,F]=gn(iE),B=En(D),[L,W]=gn(()=>Vr(Pg)==="on"),V=En(L);V.current=L;let[q,Y]=gn(null),[Z,ne]=gn(rE),re=En(Z),[Ee,ze]=gn(oE),ie=En(Ee),[Te,De]=gn(!1),se=sE(),[K,Me]=gn("overview"),[Ke,Pe]=gn(!1),[$e,Ie]=gn(!0),de=En($e);de.current=$e;let[z,X]=gn(!0),[oe,$]=gn(()=>Vr(Tg)!=="off"),[te,Se]=gn(()=>Vr(Ag)!=="off"),[U,Q]=gn("orbit"),[ae,I]=gn(!1),[Qe,it]=gn(null),[pt,Ae]=gn(!0),[xe,be]=gn(null),[Ve,C]=gn(null),[E,G]=gn(null),ve=td(()=>{p.current||(p.current=setTimeout(()=>{p.current=0,x.current?_():f.current=!0},tE))},[]),ue=td(Re=>{G(Re),clearTimeout(m.current),m.current=setTimeout(()=>G(null),3500)},[]),Ne=td(Re=>{Gr.includes(Re)&&(R.current=Re,N(Re),g.current={settle:nd,low:0},u.current&&u.current.setQuality(Re))},[]);Vo(()=>{let Re=c.current;if(!Re)return;let _t=null,_n=null,ps=!1,hr=0;Ae(!0),be(null),C(null),it(null),Q("orbit");let Qi=k=>{be(he=>he&&he.kind==="lost"?null:he),V.current&&Y(k);let ee=g.current;if(ee.settle>0){ee.settle-=1;return}if(y.current)return;let J=k&&k.scale<=k.minScale+.001;if(ee.low=k&&k.slow&&J?ee.low+1:0,ee.low<nE)return;ee.low=0;let j=Gr.indexOf(R.current);if(j<=0)return;let O=Gr[j-1];Ne(O),ue(o.current("quality.downgraded",{q:o.current(`quality.${O}`)}))},fr=()=>{try{_t=Sg(Re,{quality:y.current?R.current:"auto",fps:B.current,look:re.current,brightness:ie.current,demo:ul,onHover:it,onSelect:k=>{let ee=cE(k);!ee||!_t||(_t.setCameraPreset(ee),Me(ee),Pe(!1))},onPerf:Qi,onError:(k,ee)=>{if(k==="shader"){C(J=>J||String(ee||""));return}k==="context-lost"&&(it(null),be({kind:"lost"}))},onActive:k=>{x.current=k,k&&f.current&&(f.current=!1,_())},onReady:()=>Ae(!1),onMode:k=>{Q(k),k==="look"&&Pe(!1)}})}catch(k){for(;Re.firstChild;)Re.removeChild(Re.firstChild);Ae(!1),be({kind:"webgl",msg:String(k&&k.message||k)});return}u.current=_t,R.current=_t.getQuality(),N(R.current),g.current={settle:nd,low:0},_t.setLabels(Lg(a.current)),_t.setLabelsVisible(de.current),_t.setPerfDetail(V.current),_n=wg({onEvents:k=>{d.current=mf(d.current,k),_t.setState(d.current),ve()},onLive:k=>{h.current={...h.current,...k},_t.setLive(k),ve()}}),d.current=mf(pf(),_n.prefill(2)),h.current={phase:"idle",tps:0,balance:_n.balance,currency:"CNY"},_t.setState(d.current),_t.setLive(h.current),_n.start(),_()},T=requestAnimationFrame(()=>{hr=requestAnimationFrame(()=>{ps||fr()})});return()=>{ps=!0,cancelAnimationFrame(T),cancelAnimationFrame(hr),_n&&_n.stop(),_t&&_t.dispose(),u.current=null,clearTimeout(p.current),p.current=0}},[b,Ne,ve,ue]),Vo(()=>()=>clearTimeout(m.current),[]),Vo(()=>{u.current&&u.current.setLabels(Lg(i))},[i,t]),Vo(()=>{u.current&&u.current.setLabelsVisible($e)},[$e]),Vo(()=>{let Re=()=>I(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",Re),()=>document.removeEventListener("fullscreenchange",Re)},[]);let Ge=Re=>{u.current&&(u.current.setCameraPreset(Re),Me(Re),Pe(!1))},pe=()=>{let Re=!Ke;Pe(Re),u.current&&u.current.setFollow(Re)},me=()=>{let Re=l.current;if(!Re)return;let _t=()=>ue(o.current("error.fullscreen"));try{let _n=document.fullscreenElement?document.exitFullscreen():Re.requestFullscreen();_n&&typeof _n.catch=="function"&&_n.catch(_t)}catch{_t()}},He=Re=>{if(Re==="auto"){cr(bf,null),y.current=!1,M(!1),u.current&&Ne(u.current.autoQuality());return}Gr.includes(Re)&&(cr(bf,Re),y.current=!0,M(!0),Ne(Re))},H=Re=>{let _t=Re==="auto"?"auto":Number(Re);Go.includes(_t)&&(B.current=_t,F(_t),cr(Ug,_t==="auto"?null:String(_t)),g.current={settle:nd,low:0},u.current&&u.current.setFrameCap(_t))},fe=()=>{let Re=!L;W(Re),cr(Pg,Re?"on":null),Re||Y(null),u.current&&u.current.setPerfDetail(Re)},le=Re=>{Or.includes(Re)&&(re.current=Re,ne(Re),cr(Fg,Re===rr?null:Re),u.current&&u.current.setLook(Re))},ke=Re=>{let _t=Math.min(jt.max,Math.max(jt.min,Number(Re)||jt.initial));ie.current=_t,ze(_t),cr(Og,Math.abs(_t-jt.initial)<.001?null:String(_t)),u.current&&u.current.setBrightness(_t)},Ue=()=>{U==="look"?(cr(Ag,"off"),Se(!1)):(cr(Tg,"off"),$(!1))},Be=Re=>{let _t=u.current;if(_t&&(_t.setMode(Re),Q(_t.getMode()),Re==="look")){Pe(!1);try{c.current&&c.current.focus({preventScroll:!0})}catch{}}},et=()=>v(Re=>Re+1),We=d.current,Ce=h.current,je=$u(We),xt=hs(We.provider,We.model),Xe=Fs(Date.now()),Tt=Ce.phase&&Ce.phase!=="idle"?Ce.phase:We.phase,Yt=typeof Ce.balance=="number"?Ce.balance:null,$n=Ce.currency||"CNY",Li=Yt!=null&&xt&&$n!=="USD"?Wu(Yt,xt,Xe):0,mi=We.turns.filter(Re=>Re.status!=="running"),ur=mi.filter(Re=>Re.status==="ok").length,dr=je.contextRatio>=.8?"#ff5d5d":je.contextRatio>=.6?"#ffb347":"#4d6bfe",Bs=Ce.tps>.5&&(Tt==="generating"||Tt==="reasoning")?` · ${r("unit.tps",{n:Math.round(Ce.tps)})}`:"",gi=We.totals.miss+We.totals.write,xi=We.files,fs=[{id:"balance",k:r(ul?"m.balanceDemo":"m.balance"),v:Yt==null?r("m.balanceNone"):xn(Yt,$n),s:Li?r("m.balanceSub",{tokens:zt(Li)}):""},{id:"context",k:r("m.context"),v:Ii(je.contextRatio),s:`${zt(We.contextTokens)} / ${zt(We.contextWindow)}`,bar:je.contextRatio,barColor:dr,title:r("m.contextTitle",{pct:Ii(je.contextRatio),used:zt(We.contextTokens),window:zt(We.contextWindow)})},{id:"input",k:r("m.input"),v:zt(je.prompt),s:r("m.inputSub",{rate:Ii(je.hitRate),miss:zt(gi)}),title:r("m.inputTitle",{total:zt(je.prompt),hit:zt(We.totals.hit),rate:Ii(je.hitRate),miss:zt(gi),write:We.totals.write>0?r("m.writeNote",{n:zt(We.totals.write)}):"",saved:xn(We.totals.savings)})},{id:"output",k:r("m.output"),v:zt(We.totals.output),s:r("m.outputSub",{n:zt(We.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:xn(We.totals.cost),s:r("m.costSub",{peak:xn(We.totals.costPeak),off:xn(We.totals.costOffPeak)}),title:r("m.costTitle",{cost:xn(We.totals.cost),requests:We.totals.requests,peak:xn(We.totals.costPeak),off:xn(We.totals.costOffPeak),saved:xn(We.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(We.tools.calls),s:r("m.toolsSub",{n:We.tools.errors,rate:Ii(je.toolSuccess)}),title:r("m.toolsTitle",{calls:We.tools.calls,running:We.tools.running,n:We.tools.errors})},{id:"products",k:r("m.products"),v:`${xi.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:xi.added,r:xi.removed,ok:ur,done:mi.length}),title:r("m.productsTitle",{n:xi.count,a:xi.added,r:xi.removed,ok:ur,done:mi.length})},{id:"efficiency",k:r("m.efficiency"),v:`${je.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:xn(je.costPerFile)}),title:r("m.efficiencyHint")}],Di=We.calls.slice(-5).reverse(),Ji={t:r,s:We,live:Ce,lang:i,price:xt,peak:Xe,m:je,phase:Tt,balance:Yt,currency:$n},_i=!!xe&&xe.kind==="webgl",ji=!pt&&!_i,St=w?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return we.createElement("div",{ref:l,className:`dwp3d-root${_i?" fail":""}`},we.createElement("style",null,Eg),we.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),Te?we.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>De(!1)}):null,ji?we.createElement("div",{className:"dwp3d-top"},we.createElement("div",{className:"dwp3d-panel dwp3d-title"},we.createElement("div",{className:"dwp3d-title-row"},we.createElement("h2",null,r("title")),ul?we.createElement("span",{className:"dwp3d-chip demo"},r("badge.demo")):null,We.model?we.createElement("span",{className:"dwp3d-chip"},`${We.model}${We.effort?` · ${We.effort}`:""}`):null,we.createElement("span",{className:"dwp3d-chip"},we.createElement("i",{className:"dwp3d-dot",style:{color:Rg[Tt]||Rg.idle},"aria-hidden":"true"}),`${r("phase."+Tt)}${Bs}`)),ul?we.createElement("p",{className:"dwp3d-note"},r("badge.demoHint")):null,Ve?we.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:Ve})):null),we.createElement("div",{className:"dwp3d-right"},we.createElement("div",{className:"dwp3d-panel dwp3d-tools"},we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.views")},Qw.map(Re=>{let _t=!Ke&&K===Re;return we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${_t?" on":""}`,"aria-pressed":_t,onClick:()=>Ge(Re)},r("view."+Re))})),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},vf.map(Re=>we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${U===Re?" on":""}`,title:r(`mode.${Re}Hint`),"aria-pressed":U===Re,onClick:()=>Be(Re)},r("mode."+Re)))),we.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},we.createElement("button",{type:"button",className:`dwp3d-btn${Ke?" on":""}`,title:r("ctl.followHint"),"aria-pressed":Ke,onClick:pe},r("ctl.follow")),we.createElement("button",{type:"button",className:`dwp3d-btn${$e?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":$e,onClick:()=>Ie(Re=>!Re)},r("ctl.labels")),we.createElement("button",{type:"button",className:`dwp3d-btn${z?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":z,onClick:()=>X(Re=>!Re)},r("ctl.panels")),we.createElement("button",{type:"button",className:`dwp3d-btn${Te?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":Te,"aria-haspopup":"dialog",onClick:()=>De(Re=>!Re)},r("ctl.display")),_E()?we.createElement("button",{type:"button",className:"dwp3d-btn","aria-pressed":ae,onClick:me},r(ae?"ctl.exitFullscreen":"ctl.fullscreen")):null)),Te?we.createElement("div",{className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),we.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},Or.map(Re=>we.createElement("button",{key:Re,type:"button",className:`dwp3d-btn${Z===Re?" on":""}`,"aria-pressed":Z===Re,onClick:()=>le(Re)},r("look."+Re))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-brightness`},r("ctl.brightness")),we.createElement("input",{id:`${se}-brightness`,className:"dwp3d-range",type:"range",min:jt.min,max:jt.max,step:jt.step,value:Ee,onChange:Re=>ke(Re.target.value)}),we.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(Ee*100)}%`),we.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(Ee-jt.initial)<.001,onClick:()=>ke(jt.initial)},"↺")),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-quality`},r("ctl.quality")),we.createElement("select",{id:`${se}-quality`,className:"dwp3d-select",value:w?S:"auto",onChange:Re=>He(Re.target.value)},we.createElement("option",{value:"auto"},St),Gr.map(Re=>we.createElement("option",{key:Re,value:Re},r("quality."+Re))))),we.createElement("div",{className:"dwp3d-pop-row"},we.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${se}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),we.createElement("select",{id:`${se}-fps`,className:"dwp3d-select",value:String(D),title:r("ctl.fpsHint"),onChange:Re=>H(Re.target.value)},Go.map(Re=>we.createElement("option",{key:String(Re),value:String(Re)},aE(r,Re))))),we.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},we.createElement("input",{type:"checkbox",checked:L,onChange:fe}),we.createElement("span",null,r("ctl.perfShow")))):null,L?we.createElement(lE,{t:r,perf:q}):null)):null,we.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},E?we.createElement("div",{className:"dwp3d-panel dwp3d-toast"},E):null),ji&&z?we.createElement("div",{className:"dwp3d-bottom"},we.createElement("div",{className:"dwp3d-mid"},we.createElement(gE,{t:r,calls:Di}),we.createElement(xE,{t:r,hintOn:U==="look"?te:oe,hintKey:U==="look"?"hint.look":"hint.controls",onDismiss:Ue})),we.createElement("div",{className:"dwp3d-cards"},fs.map(Re=>we.createElement(mE,{key:Re.id,card:Re})))):null,ji&&Qe?we.createElement(pE,{hover:Qe,data:Ji,rootRef:l}):null,pt&&!xe?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},we.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,_i?we.createElement("div",{className:"dwp3d-center"},we.createElement("div",{className:"dwp3d-fail",role:"alert"},we.createElement("h3",null,r("error.webglTitle")),we.createElement("p",null,r("error.webgl",{msg:xe.msg})),we.createElement("button",{type:"button",onClick:et},r("error.retry")))):null,xe&&xe.kind==="lost"?we.createElement("div",{className:"dwp3d-center dim",role:"alert"},we.createElement("div",{className:"dwp3d-panel dwp3d-msg"},r("error.lost"))):null)}var vE="work-process-3d",yE={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(fl,Tf),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(fl);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:vE,order:15,locale:fl,label:()=>e("tab.label")},t=>Bg.createElement(kg,{...t,ctx:n,tBound:e})))}};
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
