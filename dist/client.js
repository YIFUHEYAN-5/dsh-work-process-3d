/*! dsh-work-process-3d 0.2.0 | MIT | bundles three.js (MIT, Copyright Three.js Authors) */
window.__ModuleLoader__.load({
  id: "dsh-work-process-3d",
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
var Ev=Object.create;var Ac=Object.defineProperty;var Tv=Object.getOwnPropertyDescriptor;var Av=Object.getOwnPropertyNames;var Rv=Object.getPrototypeOf,Cv=Object.prototype.hasOwnProperty;var Pv=(n,e)=>{for(var t in e)Ac(n,t,{get:e[t],enumerable:!0})},m0=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Av(e))!Cv.call(n,s)&&s!==t&&Ac(n,s,{get:()=>e[s],enumerable:!(i=Tv(e,s))||i.enumerable});return n};var g0=(n,e,t)=>(t=n!=null?Ev(Rv(n)):{},m0(e||!n||!n.__esModule?Ac(t,"default",{value:n,enumerable:!0}):t,n)),Iv=n=>m0(Ac({},"__esModule",{value:!0}),n);var U3={};Pv(U3,{default:()=>F3});module.exports=Iv(U3);var Mv=g0(require("react"),1);var Rc="dsh-work-process-3d",Lv={"tab.label":"3D 工作进程",title:"DSH 工作进程","badge.demo":"演示数据","badge.demoHint":"演示模式：画面由内置示例会话驱动，数字、文件和命令都是虚构的。在「显示」里把数据切回「实时」即可看本会话。","badge.live":"实时","badge.liveHint":"画面来自本会话的实时数据","live.unsupported":"当前 DSH 版本不支持实时数据，只能显示演示。更新 DSH 后即可查看本会话。","live.missing":"还没有收到本会话的实时数据。如果刚安装或更新了本插件，请重启 DSH。","live.showDemo":"暂时看演示","live.backToLive":"切回实时","live.failed":"读取实时数据出错，暂时显示演示。重启 DSH 后会重新读取。","live.idle":"本会话还没有开始工作。发送一条消息后，机器会随对话运转。","source.label":"数据","source.live":"实时","source.demo":"演示","source.liveHint":"显示本会话的实时数据","source.demoHint":"显示内置的示例会话（虚构数据）","bal.loading":"读取中","bal.signedOut":"未登录账户","bal.failed":"查询失败","bal.unavailable":"不可用","bal.noHost":"需重启 DSH","bal.signedOutHelp":"登录 DeepSeek 账户，或在设置里配置 DeepSeek API 密钥，即可显示余额。","bal.noHostHelp":"插件后台尚未运行，重启 DSH 后显示余额。","bal.failedHelp":"余额查询失败，稍后会自动重试。","bal.unavailableHelp":"没有可用于查询余额的 DeepSeek 账户或 API 密钥。","phase.idle":"空闲","phase.thinking":"思考","phase.reasoning":"推理","phase.generating":"生成","phase.tool":"工具","view.overview":"总览","view.fuel":"燃料","view.engine":"引擎","view.stations":"工位","view.products":"成品","view.balcony":"阳台","view.balconyHint":"站到阳台上（切换为漫游）","view.living":"生活区","view.dock":"坞站","view.screens":"大屏","view.screensHint":"飞到大屏幕墙前，近距离查看三块屏幕；再点一次返回","screen.bar":"大屏查看","screen.flow":"token 流量","screen.main":"工作总览","screen.cost":"成本与上下文","screen.descFlow":"实时生成速率、最近 60 秒的速率曲线，以及输入、缓存命中、输出和推理的累计用量。","screen.descMain":"当前阶段、轮次、工具调用、产出文件和模型请求；下面一排色块是最近的工具调用。","screen.descCost":"累计花费（分高峰和低谷）、最近 3 分钟的花费曲线、上下文占用和缓存节省。","screen.click":"点击近距离查看","screen.prev":"上一块","screen.next":"下一块","screen.back":"返回","screen.count":"{i}/{n}","screen.hint":"滚轮放大 · 拖动平移 · ←/→ 切换 · 按 Esc、点屏幕外或「返回」退出","ctl.mode":"视角模式","mode.orbit":"环绕","mode.look":"漫游","mode.orbitHint":"绕着一个中心点旋转、缩放和平移","mode.lookHint":"站在场景里自由转头和走动，可以抬头看天窗、走到阳台上","mode.toLook":"已切换到漫游","mode.toOrbit":"已切换到环绕","stage.label":"3D 场景。漫游模式下先点击场景，再用 WASD 或方向键移动，Q 下降、E 上升","ctl.views":"视角","ctl.viewPick":"视角…","ctl.display":"显示","ctl.displayHint":"数据来源、场景、亮度、画质、帧率与性能统计","ctl.layers":"视图选项","look.label":"场景","look.dusk":"黄昏","look.day":"白昼","ctl.brightness":"亮度","ctl.brightnessReset":"恢复默认亮度","ctl.perfShow":"显示性能统计","ctl.hints":"操作提示","ctl.hintsHint":"在图例面板里显示鼠标和键盘的操作说明","ctl.follow":"跟随","ctl.followHint":"镜头自动跟随正在工作的工位","ctl.labels":"标签","ctl.labelsHint":"显示或隐藏机器名称","ctl.panels":"面板","ctl.panelsHint":"显示或隐藏底部数据面板","ctl.quality":"画质","ctl.fullscreen":"全屏","ctl.exitFullscreen":"退出全屏","quality.low":"低","quality.medium":"中","quality.high":"高","quality.ultra":"极致","quality.autoOpt":"自动（{q}）","quality.autoPlain":"自动","quality.downgraded":"帧率偏低，画质已临时调为「{q}」","ctl.fps":"帧率","ctl.fpsHint":"帧率上限：自动模式在画面有动作时 60 帧，静止时 30 帧，以减轻显卡负担","fps.auto":"自动","fps.unlimited":"不限","fps.n":"{n}","ctl.perf":"性能","ctl.perfHint":"显示帧率、CPU/GPU 耗时、绘制调用与渲染分辨率","perf.title":"渲染性能","perf.fps":"帧率 / 上限","perf.cpu":"CPU 每帧","perf.gpu":"GPU 每帧","perf.gpuNone":"浏览器不支持","perf.calls":"绘制调用","perf.tris":"三角形","perf.res":"渲染分辨率","perf.waiting":"正在统计…","m.balance":"余额","m.balanceDemo":"示例余额","m.balanceSub":"约 {tokens} token","m.balanceNone":"不可用","m.balanceTitle":"充值余额 {topped} · 赠金余额 {granted}","m.toppedUp":"充值余额","m.granted":"赠金余额","m.balanceViaKey":"通过 API 密钥查询","m.context":"上下文","m.contextTitle":"上下文占用 {pct}：{used} / {window} token","m.input":"输入","m.inputSub":"命中 {rate} · 未命中 {miss}","m.inputTitle":"输入共 {total} token：缓存命中 {hit}（{rate}），未命中 {miss}{write}。缓存命中为你节省了 {saved}。","m.writeNote":"（含缓存写入 {n}）","m.output":"输出","m.outputSub":"其中推理 {n}","m.cost":"花费","m.costSub":"高峰 {peak} · 低谷 {off}","m.costTitle":"累计花费 {cost}（{requests} 次请求）：高峰时段 {peak}，低谷时段 {off}；缓存命中节省 {saved}。","m.tools":"工具调用","m.toolsSub":"失败 {n} · 成功率 {rate}","m.toolsTitle":"共 {calls} 次工具调用：进行中 {running}，失败 {n}。成功率只统计已结束的调用。","m.products":"产出","m.productsSub":"+{a} −{r} 行 · 合格批次 {ok}/{done}","m.productsTitle":"写入或修改了 {n} 个文件，+{a} −{r} 行（按工具参数估算）；已结束的 {done} 个批次中 {ok} 个合格。","m.efficiency":"效率","m.efficiencySub":"每个文件 {cpf}","m.linesUnit":"行/千 token","m.filesUnit":"个文件","m.efficiencyHint":"每千个输出 token 改动的代码行数，以及平均每个文件的花费","m.peakNow":"现在是高峰时段（全价）","m.offNow":"现在是低谷时段（半价）","price.peak":"高峰价 未命中/输出","price.off":"低谷价 未命中/输出","unit.perM":"{price}/百万 token","unit.tps":"{n} token/秒","hover.model":"模型","hover.calls":"累计调用","hover.working":"加工中","hover.lastCall":"最近一次","hover.batch":"批次 T{no}","hover.batchBody":"{calls} 次调用 · {errors} 次失败 · {files} 个文件","hover.batchCost":"花费 {cost} · 用时 {time}","row.context":"上下文","row.miss":"未命中输入","row.write":"缓存写入","row.hit":"缓存命中","row.output":"输出","row.reasoning":"推理","row.cost":"花费","ticker.title":"最近工具调用","ticker.empty":"暂无工具调用","legend.title":"晶圆","legend.raw":"待加工","legend.normal":"已加工","legend.gold":"产出文件","legend.bad":"失败","hint.controls":"拖动旋转 · 滚轮缩放 · 右键平移 · 悬停看详情 · 点击机器聚焦","hint.look":"拖动转视角 · 滚轮前进后退 · 右键平移 · 双击地面走过去 · WASD/方向键移动（先点一下场景） · Q 下降、E 上升 · 按住 Shift 加速","hint.dismiss":"关闭提示","desc.tank":"液位代表 DeepSeek 账户余额，并按当前模型价格折算成可用 token；气泡速度跟随生成速率。","desc.engine":"转子转速 = 生成速率。核心颜色：紫色 思考，蓝色 生成，橙色 工具执行。","desc.console":"数字显示屏：左边的环形表是上下文占用，右边的是生成速率；中间的计数依次是未命中输入、缓存命中、输出、推理和花费，阶段标签显示思考、生成、工具或空闲。","desc.dispenser":"每次工具调用投放一片晶圆，经装载锁送往对应工位。","desc.robot":"在装载锁、各工位和卸载锁之间搬运晶圆；排队越多动作越快。","desc.lock":"晶圆进入工位区前在这里抽真空（琥珀色灯亮）。","desc.unload":"加工完的晶圆从这里回到大气侧，送进装载端口上的 FOUP。","desc.loadport":"当前这一轮对话的批次（FOUP）停在这里装片，本轮结束后由天车送进成品库。","desc.stocker":"每一轮对话是一个批次（FOUP），这里保留最近 9 个。合格 = 正常完成，返工 = 出错或被中断。","desc.living":"大屏幕墙后面的休息区：沙发、睡眠舱、厨房角、书桌和鱼缸。这里不显示会话数据。","desc.dock":"每个运行中的子智能体或工作流成员占用一架无人机。无人机先到协作机械臂工位领取任务胶囊，再绕坞站飞行；任务结束后带着结果降落：绿色完成，红色失败，灰色停止。","dock.none":"本会话还没有调用子智能体或工作流","dock.running":"运行中","dock.done":"已完成","dock.failed":"失败","dock.stopped":"已停止","dock.queued":"排队（无人机已满）","dock.workflow":"工作流","st.archive":"读文件与检索：read、grep、glob 等","st.engraver":"写入与修改文件：write、edit 等","st.terminal":"执行命令：pwsh、bash、后台任务等","st.satellite":"联网：web_search、web_fetch 和联网类 MCP 工具","st.robot":"子智能体与工作流：subagent、workflow、send_message 等","st.press":"上下文压缩：compress、decompress 等","st.kanban":"计划与目标：todo_write、目标、团队任务、定时任务","st.beacon":"向你提问：ask_user_question、exit_plan_mode","st.labeler":"交付成果：present、send_wechat","st.generic":"其他工具，包括大多数 MCP 工具","call.running":"进行中","call.ok":"成功","call.error":"失败","status.running":"进行中","status.ok":"合格","status.rework":"返工","status.error":"失败",loading:"正在搭建 3D 场景…","error.webglTitle":"无法启动 3D 场景","error.webgl":"浏览器没能创建 WebGL 2 画布（{msg}）。请确认系统和浏览器都开启了硬件加速，然后重试。","error.retry":"重试","error.lost":"显卡渲染中断，正在尝试恢复…","error.reload":"重新加载场景","error.fullscreen":"无法进入全屏","error.shader":"部分画面未能渲染（着色器编译失败）：{msg}"},Dv={"tab.label":"3D process",title:"DSH work process","badge.demo":"Demo data","badge.demoHint":"Demo mode: a built-in sample session drives the scene; its numbers, files and commands are made up. Switch Data back to Live under Display to see this session.","badge.live":"Live","badge.liveHint":"The scene shows this session as it happens","live.unsupported":"This DSH version does not support live data, so only the demo can run. Update DSH to see this session.","live.missing":"No live data from this session yet. If you just installed or updated this plugin, restart DSH.","live.showDemo":"Show the demo for now","live.backToLive":"Back to live","live.failed":"Live data could not be read, so the demo is shown for now. Restart DSH to try again.","live.idle":"This session has not started working yet. Send a message and the machine runs with the conversation.","source.label":"Data","source.live":"Live","source.demo":"Demo","source.liveHint":"Show this session’s live data","source.demoHint":"Show the built-in sample session (made-up data)","bal.loading":"Loading","bal.signedOut":"Not signed in","bal.failed":"Query failed","bal.unavailable":"Unavailable","bal.noHost":"Restart DSH","bal.signedOutHelp":"Sign in to your DeepSeek account or set up a DeepSeek API key in Settings to show the balance.","bal.noHostHelp":"The plugin’s background service is not running yet. Restart DSH to show the balance.","bal.failedHelp":"The balance query failed; it will retry automatically.","bal.unavailableHelp":"No DeepSeek account or API key is available to query the balance.","phase.idle":"Idle","phase.thinking":"Thinking","phase.reasoning":"Reasoning","phase.generating":"Generating","phase.tool":"Tool","view.overview":"Overview","view.fuel":"Fuel","view.engine":"Engine","view.stations":"Stations","view.products":"Products","view.balcony":"Balcony","view.balconyHint":"Step onto the balcony (switches to Roam)","view.living":"Living","view.dock":"Dock","view.screens":"Screens","view.screensHint":"Fly up to the media wall and read the three screens up close; click again to go back","screen.bar":"Screen viewer","screen.flow":"Token flow","screen.main":"Work overview","screen.cost":"Cost and context","screen.descFlow":"Live generation rate, the last 60 seconds as a chart, and running totals for input, cache hits, output and reasoning.","screen.descMain":"Current phase, turn, tool calls, produced files and model requests; the strip of tiles below shows the latest tool calls.","screen.descCost":"Total cost split into peak and off-peak, the last 3 minutes of spend, context usage and cache savings.","screen.click":"Click to view up close","screen.prev":"Previous","screen.next":"Next","screen.back":"Back","screen.count":"{i}/{n}","screen.hint":"Scroll to zoom · drag to pan · ←/→ to switch · Esc, click beside the screen or Back to leave","ctl.mode":"Camera mode","mode.orbit":"Orbit","mode.look":"Roam","mode.orbitHint":"Rotate, zoom and pan around a centre point","mode.lookHint":"Stand in the scene, look around freely and walk; look up at the skylight or step out onto the balcony","mode.toLook":"Switched to Roam","mode.toOrbit":"Switched to Orbit","stage.label":"3D scene. In Roam mode, click the scene first, then move with WASD or the arrow keys; Q goes down, E goes up","ctl.views":"Views","ctl.viewPick":"View…","ctl.display":"Display","ctl.displayHint":"Data source, scene, brightness, quality, frame rate and statistics","ctl.layers":"View options","look.label":"Scene","look.dusk":"Dusk","look.day":"Daylight","ctl.brightness":"Brightness","ctl.brightnessReset":"Reset brightness","ctl.perfShow":"Show statistics","ctl.hints":"Control hints","ctl.hintsHint":"Show the mouse and keyboard controls in the legend panel","ctl.follow":"Follow","ctl.followHint":"Camera follows the station that is working","ctl.labels":"Labels","ctl.labelsHint":"Show or hide machine names","ctl.panels":"Panels","ctl.panelsHint":"Show or hide the data panels at the bottom","ctl.quality":"Quality","ctl.fullscreen":"Fullscreen","ctl.exitFullscreen":"Exit fullscreen","quality.low":"Low","quality.medium":"Medium","quality.high":"High","quality.ultra":"Ultra","quality.autoOpt":"Auto ({q})","quality.autoPlain":"Auto","quality.downgraded":"Low frame rate: quality lowered to {q} for now","ctl.fps":"FPS","ctl.fpsHint":"Frame-rate cap. Auto renders 60 fps while something moves and 30 fps when the scene is still, to save GPU power","fps.auto":"Auto","fps.unlimited":"Unlimited","fps.n":"{n}","ctl.perf":"Stats","ctl.perfHint":"Show frame rate, CPU/GPU time per frame, draw calls and render resolution","perf.title":"Render statistics","perf.fps":"FPS / cap","perf.cpu":"CPU per frame","perf.gpu":"GPU per frame","perf.gpuNone":"Not supported","perf.calls":"Draw calls","perf.tris":"Triangles","perf.res":"Render size","perf.waiting":"Measuring…","m.balance":"Balance","m.balanceDemo":"Sample balance","m.balanceSub":"≈ {tokens} tokens","m.balanceNone":"Unavailable","m.balanceTitle":"Topped-up {topped} · granted {granted}","m.toppedUp":"Topped-up balance","m.granted":"Granted balance","m.balanceViaKey":"Queried with the API key","m.context":"Context","m.contextTitle":"Context usage {pct}: {used} of {window} tokens","m.input":"Input","m.inputSub":"{rate} cached · {miss} uncached","m.inputTitle":"{total} input tokens: {hit} cache hits ({rate}), {miss} uncached{write}. Cache hits saved you {saved}.","m.writeNote":" (incl. {n} cache writes)","m.output":"Output","m.outputSub":"Reasoning {n}","m.cost":"Cost","m.costSub":"Peak {peak} · off-peak {off}","m.costTitle":"Total cost {cost} over {requests} requests: {peak} at peak, {off} off-peak. Cache hits saved {saved}.","m.tools":"Tool calls","m.toolsSub":"{n} failed · {rate} ok","m.toolsTitle":"{calls} tool calls: {running} running, {n} failed. The success rate counts finished calls only.","m.products":"Output files","m.productsSub":"+{a} −{r} lines · {ok}/{done} batches passed","m.productsTitle":"{n} files written or edited, +{a} −{r} lines (estimated from tool arguments). {ok} of {done} finished batches passed.","m.efficiency":"Efficiency","m.efficiencySub":"{cpf} per file","m.linesUnit":"lines/1K tok","m.filesUnit":"files","m.efficiencyHint":"Changed lines per 1K output tokens, and the average cost per file","m.peakNow":"Peak hours now (full price)","m.offNow":"Off-peak now (half price)","price.peak":"Peak price miss/output","price.off":"Off-peak price miss/output","unit.perM":"{price}/M tokens","unit.tps":"{n} tok/s","hover.model":"Model","hover.calls":"Calls so far","hover.working":"Working on","hover.lastCall":"Last call","hover.batch":"Batch T{no}","hover.batchBody":"{calls} calls · {errors} failed · {files} files","hover.batchCost":"Cost {cost} · time {time}","row.context":"Context","row.miss":"Uncached input","row.write":"Cache writes","row.hit":"Cache hits","row.output":"Output","row.reasoning":"Reasoning","row.cost":"Cost","ticker.title":"Recent tool calls","ticker.empty":"No tool calls yet","legend.title":"Wafers","legend.raw":"Queued","legend.normal":"Processed","legend.gold":"Produced files","legend.bad":"Failed","hint.controls":"Drag to orbit · scroll to zoom · right-drag to pan · hover for details · click a machine to focus","hint.look":"Drag to look around · scroll to move forward/back · right-drag to pan · double-click the floor to walk there · WASD/arrows to move (click the scene first) · Q down, E up · hold Shift to hurry","hint.dismiss":"Dismiss hint","desc.tank":"The liquid level is your DeepSeek balance, converted to tokens at the current model price. Bubbles follow the generation rate.","desc.engine":"Rotor speed is the generation rate. Core color: violet thinking, blue generating, orange running tools.","desc.console":"A digital display: the left ring dial shows context usage and the right one the generation rate. The counters in between are uncached input, cache hits, output, reasoning and cost, and the phase chip shows thinking, generating, tool or idle.","desc.dispenser":"Each tool call releases one wafer, which travels through the load lock to its station.","desc.robot":"Moves wafers between the load lock, the stations and the unload lock. It speeds up when work queues.","desc.lock":"Wafers are pumped down here (amber light) before they enter the station ring.","desc.unload":"Finished wafers return to atmosphere here and go into the FOUP on the load port.","desc.loadport":"The FOUP for the current conversation turn is loaded here. When the turn ends, the gantry moves it to the stocker.","desc.stocker":"Each conversation turn is one batch (FOUP); the last 9 are kept here. Pass = completed normally, rework = error or interrupted.","desc.living":"A lounge behind the media wall with a sofa, sleep pod, kitchen corner, desk and aquarium. It shows no session data.","desc.dock":"Each running subagent or workflow member takes a drone. The drone picks up a task capsule at the Cobot cell, circles the dock while the agent works and lands with the result: green done, red failed, grey stopped.","dock.none":"No subagents or workflows in this session yet","dock.running":"Running","dock.done":"Done","dock.failed":"Failed","dock.stopped":"Stopped","dock.queued":"Queued (all drones busy)","dock.workflow":"Workflow","st.archive":"Reading and searching: read, grep, glob and similar","st.engraver":"Writing and editing files: write, edit and similar","st.terminal":"Running commands: pwsh, bash, background jobs","st.satellite":"Web access: web_search, web_fetch and web MCP tools","st.robot":"Subagents and workflows: subagent, workflow, send_message","st.press":"Context compression: compress, decompress and similar","st.kanban":"Plans and goals: todo_write, goals, team tasks, schedules","st.beacon":"Questions to you: ask_user_question, exit_plan_mode","st.labeler":"Deliverables: present, send_wechat","st.generic":"Any other tool, including most MCP tools","call.running":"Running","call.ok":"Succeeded","call.error":"Failed","status.running":"Running","status.ok":"Pass","status.rework":"Rework","status.error":"Failed",loading:"Building the 3D scene…","error.webglTitle":"The 3D scene could not start","error.webgl":"The browser could not create a WebGL 2 canvas ({msg}). Make sure hardware acceleration is on in the system and the browser, then retry.","error.retry":"Retry","error.lost":"Rendering stopped because the graphics context was lost. Trying to recover…","error.reload":"Reload scene","error.fullscreen":"Could not enter fullscreen","error.shader":"Part of the scene could not be drawn (shader compile error): {msg}"},x0={zh:Lv,en:Dv};var de=g0(require("react"),1);var qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},am=0,pf=1,lm=2;var Ro=1,cm=2,Da=3,$s=0,di=1,jt=2,Co=0,qs=1,Nn=2,mf=3,gf=4,Na=5;var Po=100,um=101,dm=102,hm=103,fm=104,Gu=200,Kr=201,pm=202,mm=203,xf=204,Zr=205,gm=206,xm=207,ym=208,vm=209,_m=210,bm=211,Mm=212,Sm=213,wm=214,au=0,lu=1,cu=2,xa=3,uu=4,du=5,hu=6,fu=7,yf=0,Em=1,Tm=2,Ys=0,vf=1,_f=2,bf=3,Mf=4,Sf=5,wf=6,ql=7;var Ef=300,Io=301,Oa=302,Vu=303,Wu=304,hr=1e3,Gs=1001,pu=1002,si=1003,Am=1004;var Yl=1005;var In=1006,Xu=1007;var Es=1008;var Fi=1009,Tf=1010,Af=1011,ka=1012,$u=1013,Ts=1014,as=1015,Pi=1016,qu=1017,Yu=1018,Lo=1020,Rf=35902,Cf=35899,Pf=1021,If=1022,As=1023,fr=1026,vr=1027,Ku=1028,Zu=1029,Jr=1030,Ju=1031;var ju=1033,Kl=33776,Zl=33777,Jl=33778,jl=33779,Qu=35840,ed=35841,td=35842,nd=35843,id=36196,sd=37492,rd=37496,od=37488,ad=37489,Ql=37490,ld=37491,cd=37808,ud=37809,dd=37810,hd=37811,fd=37812,pd=37813,md=37814,gd=37815,xd=37816,yd=37817,vd=37818,_d=37819,bd=37820,Md=37821,Sd=36492,wd=36494,Ed=36495,Td=36283,Ad=36284,ec=36285,Rd=36286;var gl=2300,mu=2301,ru=2302,tf=2303,nf=2400,sf=2401,rf=2402;var Rm=3200;var Cd=0,Cm=1,_r="",ci="srgb",xl="srgb-linear",yl="linear",un="srgb";var ou=7680;var Pm=519,Im=512,Lm=513,Dm=514,Lf=515,Nm=516,Om=517,Df=518,Nf=519,Of=35044,Pd=35048;var kf="300 es",os=2e3,ya=2001;function Nv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ov(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){let n=vl("canvas");return n.style.display="block",n}var y0={},va=null;function _l(...n){let e="THREE."+n.shift();va?va("log",e,...n):console.log(e,...n)}function Fm(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function St(...n){n=Fm(n);let e="THREE."+n.shift();if(va)va("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=Fm(n);let e="THREE."+n.shift();if(va)va("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bo(...n){let e=n.join(" ");e in y0||(y0[e]=!0,St(...n))}function Um(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Bm={[au]:au,[cu]:hu,[uu]:uu,[xa]:du,[lu]:lu,[hu]:cu,[fu]:fu,[du]:xa},Ms=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],v0=1234567,hl=Math.PI/180,_a=180/Math.PI;function br(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gi[n&255]+gi[n>>8&255]+gi[n>>16&255]+gi[n>>24&255]+"-"+gi[e&255]+gi[e>>8&255]+"-"+gi[e>>16&15|64]+gi[e>>24&255]+"-"+gi[t&63|128]+gi[t>>8&255]+"-"+gi[t>>16&255]+gi[t>>24&255]+gi[i&255]+gi[i>>8&255]+gi[i>>16&255]+gi[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Ff(n,e){return(n%e+e)%e}function kv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Fv(n,e,t){return n!==e?(t-n)/(e-n):0}function fl(n,e,t){return(1-t)*n+t*e}function Uv(n,e,t,i){return fl(n,e,1-Math.exp(-t*i))}function Bv(n,e=1){return e-Math.abs(Ff(n,e*2)-e)}function zv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vv(n,e){return n+Math.random()*(e-n)}function Wv(n){return n*(.5-Math.random())}function Xv(n){n!==void 0&&(v0=n);let e=v0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $v(n){return n*hl}function qv(n){return n*_a}function Yv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Kv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Uf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*u,a*c);break;default:St("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Id(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bf(n,e){if(e.constructor===Float32Array)return n;let t=Id(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function zf(n,e){if(e.constructor===Float32Array)return n;let t=Id(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var jr={DEG2RAD:hl,RAD2DEG:_a,generateUUID:br,clamp:Ft,euclideanModulo:Ff,mapLinear:kv,inverseLerp:Fv,lerp:fl,damp:Uv,pingpong:Bv,smoothstep:zv,smootherstep:Hv,randInt:Gv,randFloat:Vv,randFloatSpread:Wv,seededRandom:Xv,degToRad:$v,radToDeg:qv,isPowerOfTwo:Yv,ceilPowerOfTwo:Kv,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Zv,normalize:zf,denormalize:Bf},Ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*g;m<0&&(h=-h,f=-f,p=-p,g=-g,m=-m);let x=1-a;if(m<.9995){let _=Math.acos(m),b=Math.sin(_);x=Math.sin(x*_)/b,a=Math.sin(a*_)/b,l=l*x+h*a,c=c*x+f*a,u=u*x+p*a,d=d*x+g*a}else{l=l*x+h*a,c=c*x+f*a,u=u*x+p*a,d=d*x+g*a;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-a*f,e[t+2]=c*p+u*f+a*h-l*d,e[t+3]=u*p-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ph=new C,_0=new mn,Pt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],g=s[0],m=s[3],x=s[6],_=s[1],b=s[4],y=s[7],M=s[2],w=s[5],v=s[8];return r[0]=o*g+a*_+l*M,r[3]=o*m+a*b+l*w,r[6]=o*x+a*y+l*v,r[1]=c*g+u*_+d*M,r[4]=c*m+u*b+d*w,r[7]=c*x+u*y+d*v,r[2]=h*g+f*_+p*M,r[5]=h*m+f*b+p*w,r[8]=h*x+f*y+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ih.makeScale(e,t)),this}rotate(e){return bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ih.makeRotation(-e)),this}translate(e,t){return bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ih=new Pt,b0=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jv(){let n={enabled:!0,workingColorSpace:xl,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===un&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===un&&(s.r=ga(s.r),s.g=ga(s.g),s.b=ga(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_r?yl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xl]:{primaries:e,whitePoint:i,transfer:yl,toXYZ:b0,fromXYZ:M0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:i,transfer:un,toXYZ:b0,fromXYZ:M0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),n}var Yt=Jv();function dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var jo,gu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jo===void 0&&(jo=vl("canvas")),jo.width=e.width,jo.height=e.height;let s=jo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=jo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=dr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dr(t[i]/255)*255):t[i]=dr(t[i]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jv=0,ba=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lh(s[o].image)):r.push(Lh(s[o]))}else r=Lh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Lh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}var Qv=0,Dh=new C,Ai=class n extends Ms{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gs,s=Gs,r=In,o=Es,a=As,l=Fi,c=n.DEFAULT_ANISOTROPY,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=br(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hr:e.x=e.x-Math.floor(e.x);break;case Gs:e.x=e.x<0?0:1;break;case pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hr:e.y=e.y-Math.floor(e.y);break;case Gs:e.y=e.y<0?0:1;break;case pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ai.DEFAULT_IMAGE=null;Ai.DEFAULT_MAPPING=Ef;Ai.DEFAULT_ANISOTROPY=1;var vn=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],g=l[2],m=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,M=(x+1)/2,w=(u+h)/4,v=(d+g)/4,S=(p+m)/4;return b>y&&b>M?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=v/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=S/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=v/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-g)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xu=class extends Ms{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vn(0,0,e,t),this.scissorTest=!1,this.viewport=new vn(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ai({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends xu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},bl=class extends Ai{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yu=class extends Ai{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var _t=class n{static{this.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,g,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,p,g,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=d,x[14]=h,x[3]=f,x[7]=p,x[11]=g,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Qo.setFromMatrixColumn(e,0).length(),r=1/Qo.setFromMatrixColumn(e,1).length(),o=1/Qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h+g*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,g=c*d;t[0]=h-g*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,p=a*u,g=a*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-g*d}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,i){let s=this.elements;return $i.subVectors(e,t),$i.lengthSq()===0&&($i.z=1),$i.normalize(),Fr.crossVectors(i,$i),Fr.lengthSq()===0&&(Math.abs(i.z)===1?$i.x+=1e-4:$i.z+=1e-4,$i.normalize(),Fr.crossVectors(i,$i)),Fr.normalize(),Cc.crossVectors($i,Fr),s[0]=Fr.x,s[4]=Cc.x,s[8]=$i.x,s[1]=Fr.y,s[5]=Cc.y,s[9]=$i.y,s[2]=Fr.z,s[6]=Cc.z,s[10]=$i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],g=i[6],m=i[10],x=i[14],_=i[3],b=i[7],y=i[11],M=i[15],w=s[0],v=s[4],S=s[8],D=s[12],T=s[1],P=s[5],k=s[9],z=s[13],I=s[2],V=s[6],ne=s[10],te=s[14],ie=s[3],J=s[7],Y=s[11],O=s[15];return r[0]=o*w+a*T+l*I+c*ie,r[4]=o*v+a*P+l*V+c*J,r[8]=o*S+a*k+l*ne+c*Y,r[12]=o*D+a*z+l*te+c*O,r[1]=u*w+d*T+h*I+f*ie,r[5]=u*v+d*P+h*V+f*J,r[9]=u*S+d*k+h*ne+f*Y,r[13]=u*D+d*z+h*te+f*O,r[2]=p*w+g*T+m*I+x*ie,r[6]=p*v+g*P+m*V+x*J,r[10]=p*S+g*k+m*ne+x*Y,r[14]=p*D+g*z+m*te+x*O,r[3]=_*w+b*T+y*I+M*ie,r[7]=_*v+b*P+y*V+M*J,r[11]=_*S+b*k+y*ne+M*Y,r[15]=_*D+b*z+y*te+M*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],g=e[7],m=e[11],x=e[15],_=l*f-c*h,b=a*f-c*d,y=a*h-l*d,M=o*f-c*u,w=o*h-l*u,v=o*d-a*u;return t*(g*_-m*b+x*y)-i*(p*_-m*M+x*w)+s*(p*b-g*M+x*v)-r*(p*y-g*w+m*v)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],g=e[13],m=e[14],x=e[15],_=t*a-i*o,b=t*l-s*o,y=t*c-r*o,M=i*l-s*a,w=i*c-r*a,v=s*c-r*l,S=u*g-d*p,D=u*m-h*p,T=u*x-f*p,P=d*m-h*g,k=d*x-f*g,z=h*x-f*m,I=_*z-b*k+y*P+M*T-w*D+v*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return e[0]=(a*z-l*k+c*P)*V,e[1]=(s*k-i*z-r*P)*V,e[2]=(g*v-m*w+x*M)*V,e[3]=(h*w-d*v-f*M)*V,e[4]=(l*T-o*z-c*D)*V,e[5]=(t*z-s*T+r*D)*V,e[6]=(m*y-p*v-x*b)*V,e[7]=(u*v-h*y+f*b)*V,e[8]=(o*k-a*T+c*S)*V,e[9]=(i*T-t*k-r*S)*V,e[10]=(p*w-g*y+x*_)*V,e[11]=(d*y-u*w-f*_)*V,e[12]=(a*D-o*P-l*S)*V,e[13]=(t*P-i*D+s*S)*V,e[14]=(g*b-p*M-m*_)*V,e[15]=(u*M-d*b+h*_)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,g=o*u,m=o*d,x=a*d,_=l*c,b=l*u,y=l*d,M=i.x,w=i.y,v=i.z;return s[0]=(1-(g+x))*M,s[1]=(f+y)*M,s[2]=(p-b)*M,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+x))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+b)*v,s[9]=(m-_)*v,s[10]=(1-(h+g))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Qo.set(s[0],s[1],s[2]).length(),a=Qo.set(s[4],s[5],s[6]).length(),l=Qo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vs.copy(this);let c=1/o,u=1/a,d=1/l;return vs.elements[0]*=c,vs.elements[1]*=c,vs.elements[2]*=c,vs.elements[4]*=u,vs.elements[5]*=u,vs.elements[6]*=u,vs.elements[8]*=d,vs.elements[9]*=d,vs.elements[10]*=d,t.setFromRotationMatrix(vs),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=os,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===os)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ya)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=os,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===os)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ya)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Qo=new C,vs=new _t,e_=new C(0,0,0),t_=new C(1,1,1),Fr=new C,Cc=new C,$i=new C,S0=new _t,w0=new mn,$n=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n_=0,E0=new C,ea=new mn,rr=new _t,Pc=new C,tl=new C,i_=new C,s_=new mn,T0=new C(1,0,0),A0=new C(0,1,0),R0=new C(0,0,1),C0={type:"added"},r_={type:"removed"},ta={type:"childadded",child:null},Nh={type:"childremoved",child:null},gn=class n extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new $n,i=new mn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Pt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,t){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pc.copy(e):Pc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(tl,Pc,this.up):rr.lookAt(Pc,tl,this.up),this.quaternion.setFromRotationMatrix(rr),s&&(rr.extractRotation(s.matrixWorld),ea.setFromRotationMatrix(rr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),ta.child=e,this.dispatchEvent(ta),ta.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new C(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},o_={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),x=this._getHandJoint(c,g);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Oh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Yt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Yt.workingColorSpace){if(e=Ff(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Oh(o,r,e+1/3),this.g=Oh(o,r,e),this.b=Oh(o,r,e-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(e,t=ci){function i(r){r!==void 0&&parseFloat(r)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){let i=zm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Yt.workingToColorSpace(xi.copy(this),e),Math.round(Ft(xi.r*255,0,255))*65536+Math.round(Ft(xi.g*255,0,255))*256+Math.round(Ft(xi.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(xi.copy(this),t);let i=xi.r,s=xi.g,r=xi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(xi.copy(this),t),e.r=xi.r,e.g=xi.g,e.b=xi.b,e}getStyle(e=ci){Yt.workingToColorSpace(xi.copy(this),e);let t=xi.r,i=xi.g,s=xi.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Ic);let i=fl(Ur.h,Ic.h,t),s=fl(Ur.s,Ic.s,t),r=fl(Ur.l,Ic.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xi=new ke;ke.NAMES=zm;var Mo=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_s=new C,or=new C,kh=new C,ar=new C,na=new C,ia=new C,P0=new C,Fh=new C,Uh=new C,Bh=new C,zh=new vn,Hh=new vn,Gh=new vn,ur=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_s.subVectors(e,t),s.cross(_s);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_s.subVectors(s,t),or.subVectors(i,t),kh.subVectors(e,t);let o=_s.dot(_s),a=_s.dot(or),l=_s.dot(kh),c=or.dot(or),u=or.dot(kh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return zh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),zh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,i),Gh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zh,r.x),o.addScaledVector(Hh,r.y),o.addScaledVector(Gh,r.z),o}static isFrontFacing(e,t,i,s){return _s.subVectors(i,t),or.subVectors(e,t),_s.cross(or).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _s.subVectors(this.c,this.b),or.subVectors(this.a,this.b),_s.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;na.subVectors(s,i),ia.subVectors(r,i),Fh.subVectors(e,i);let l=na.dot(Fh),c=ia.dot(Fh);if(l<=0&&c<=0)return t.copy(i);Uh.subVectors(e,s);let u=na.dot(Uh),d=ia.dot(Uh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(i).addScaledVector(na,o);Bh.subVectors(e,r);let f=na.dot(Bh),p=ia.dot(Bh);if(p>=0&&f<=p)return t.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(ia,a);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return P0.subVectors(r,s),a=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(P0,a);let x=1/(m+g+h);return o=g*x,a=h*x,t.copy(i).addScaledVector(na,o).addScaledVector(ia,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ri=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bs):bs.fromBufferAttribute(r,o),bs.applyMatrix4(e.matrixWorld),this.expandByPoint(bs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lc.copy(i.boundingBox)),Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bs),bs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Dc.subVectors(this.max,nl),sa.subVectors(e.a,nl),ra.subVectors(e.b,nl),oa.subVectors(e.c,nl),Br.subVectors(ra,sa),zr.subVectors(oa,ra),go.subVectors(sa,oa);let t=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-go.z,go.y,Br.z,0,-Br.x,zr.z,0,-zr.x,go.z,0,-go.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-go.y,go.x,0];return!Vh(t,sa,ra,oa,Dc)||(t=[1,0,0,0,1,0,0,0,1],!Vh(t,sa,ra,oa,Dc))?!1:(Nc.crossVectors(Br,zr),t=[Nc.x,Nc.y,Nc.z],Vh(t,sa,ra,oa,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new C,new C,new C,new C,new C,new C,new C,new C],bs=new C,Lc=new Ri,sa=new C,ra=new C,oa=new C,Br=new C,zr=new C,go=new C,nl=new C,Dc=new C,Nc=new C,xo=new C;function Vh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xo.fromArray(n,r);let a=s.x*Math.abs(xo.x)+s.y*Math.abs(xo.y)+s.z*Math.abs(xo.z),l=e.dot(xo),c=t.dot(xo),u=i.dot(xo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var zn=new C,Oc=new Ae,a_=0,ii=class extends Ms{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Of,this.updateRanges=[],this.gpuType=as,this.version=0,this._normalizationScale=e!==void 0?Id(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zf(e,this.array)}};var Ml=class extends ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sl=class extends ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends ii{constructor(e,t,i){super(new Float32Array(e),t,i)}},l_=new Ri,il=new C,Wh=new C,ki=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):l_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);let t=il.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(il,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Wh)),this.expandByPoint(il.copy(e.center).sub(Wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},c_=0,rs=new _t,Xh=new gn,aa=new C,qi=new Ri,sl=new Ri,ti=new C,Vt=class n extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Sl:Ml)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rs.makeRotationFromQuaternion(e),this.applyMatrix4(rs),this}rotateX(e){return rs.makeRotationX(e),this.applyMatrix4(rs),this}rotateY(e){return rs.makeRotationY(e),this.applyMatrix4(rs),this}rotateZ(e){return rs.makeRotationZ(e),this.applyMatrix4(rs),this}translate(e,t,i){return rs.makeTranslation(e,t,i),this.applyMatrix4(rs),this}scale(e,t,i){return rs.makeScale(e,t,i),this.applyMatrix4(rs),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qi.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(qi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sl.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(qi.min,sl.min),qi.expandByPoint(ti),ti.addVectors(qi.max,sl.max),qi.expandByPoint(ti)):(qi.expandByPoint(sl.min),qi.expandByPoint(sl.max))}qi.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ti.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ti));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ti.fromBufferAttribute(a,c),l&&(aa.fromBufferAttribute(e,c),ti.add(aa)),s=Math.max(s,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)a[D]=new C,l[D]=new C;let u=new C,d=new C,h=new C,f=new Ae,p=new Ae,g=new Ae,m=new C,x=new C;function _(D,T,P){c[D]=c[T]=c[P]=1,u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,P),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),d.sub(u),h.sub(u),p.sub(f),g.sub(f);let k=1/(p.x*g.y-g.x*p.y);isFinite(k)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(k),x.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(k),a[D].add(m),a[T].add(m),a[P].add(m),l[D].add(x),l[T].add(x),l[P].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,T=b.length;D<T;++D){let P=b[D],k=P.start,z=P.count;for(let I=k,V=k+z;I<V;I+=3)_(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new C,M=new C,w=new C,v=new C;function S(D){w.fromBufferAttribute(s,D),v.copy(w);let T=a[D];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(v,T);let k=M.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,k)}for(let D=0,T=i.count;D<T;++D)c[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let x=0;x<u;x++)h[p++]=c[f++]}return new ii(h,u,d)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Of,this.updateRanges=[],this.version=0,this.uuid=br()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=I0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=I0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function I0(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=br()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Ei=new C,wa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Id(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.applyMatrix4(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.applyNormalMatrix(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ei.fromBufferAttribute(this,t),Ei.transformDirection(e),this.setXYZ(t,Ei.x,Ei.y,Ei.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_l("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_l("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):zf(e,this.data.array)}},$h=new C,u_=new C,d_=new Pt,Ti=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=$h.subVectors(i,t).cross(u_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta($h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d_.getNormalMatrix(e),s=this.coplanarPoint($h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},h_=0,Ss=class extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=br(),this.name="",this.type="Material",this.blending=qs,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=Zr,this.blendEquation=Po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ou,this.stencilZFail=ou,this.stencilZPass=ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vs=class extends Ss{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},la,rl=new C,ca=new C,ua=new C,da=new Ae,ol=new Ae,Hm=new _t,kc=new C,al=new C,Fc=new C,L0=new Ae,qh=new Ae,D0=new Ae,pr=class extends gn{constructor(e=new Vs){if(super(),this.isSprite=!0,this.type="Sprite",la===void 0){la=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wl(t,5);la.setIndex([0,1,2,0,2,3]),la.setAttribute("position",new wa(i,3,0,!1)),la.setAttribute("uv",new wa(i,2,3,!1))}this.geometry=la,this.material=e,this.center=new Ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ca.setFromMatrixScale(this.matrixWorld),Hm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ua.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ca.multiplyScalar(-ua.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Uc(kc.set(-.5,-.5,0),ua,o,ca,s,r),Uc(al.set(.5,-.5,0),ua,o,ca,s,r),Uc(Fc.set(.5,.5,0),ua,o,ca,s,r),L0.set(0,0),qh.set(1,0),D0.set(1,1);let a=e.ray.intersectTriangle(kc,al,Fc,!1,rl);if(a===null&&(Uc(al.set(-.5,.5,0),ua,o,ca,s,r),qh.set(0,1),a=e.ray.intersectTriangle(kc,Fc,al,!1,rl),a===null))return;let l=e.ray.origin.distanceTo(rl);l<e.near||l>e.far||t.push({distance:l,point:rl.clone(),uv:ur.getInterpolation(rl,kc,al,Fc,L0,qh,D0,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Uc(n,e,t,i,s,r){da.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ol.x=r*da.x-s*da.y,ol.y=s*da.x+r*da.y):ol.copy(da),n.copy(e),n.x+=ol.x,n.y+=ol.y,n.applyMatrix4(Hm)}var cr=new C,Yh=new C,Bc=new C,zc=new C,mr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yh.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),zc.copy(this.origin).sub(Yh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),a=zc.dot(this.direction),l=-zc.dot(Bc),c=zc.lengthSq(),u=Math.abs(1-o*o),d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yh).addScaledVector(Bc,h),f}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);let i=cr.dot(this.direction),s=cr.dot(cr)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,x=i.x-o.x,_=i.y-o.y,b=i.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(u),v,S,D,T,P,k,z,I,V,ne,te,ie;if(y>=M&&y>=w?(D=l,k=d,V=p,ie=x,l>=0?(v=c,S=u,T=h,P=f,z=g,I=m,ne=_,te=b):(v=u,S=c,T=f,P=h,z=m,I=g,ne=b,te=_)):M>=w?(D=c,k=h,V=g,ie=_,c>=0?(v=u,S=l,T=f,P=d,z=m,I=p,ne=b,te=x):(v=l,S=u,T=d,P=f,z=p,I=m,ne=x,te=b)):(D=u,k=f,V=m,ie=b,u>=0?(v=l,S=c,T=d,P=h,z=p,I=g,ne=x,te=_):(v=c,S=l,T=h,P=d,z=g,I=p,ne=_,te=x)),D===0)return null;let J=v/D,Y=S/D,O=1/D,G=T-J*k,K=P-Y*k,q=z-J*V,ae=I-Y*V,fe=ne-J*ie,ge=te-Y*ie,oe=fe*ae-ge*q,Pe=G*ge-K*fe,Ye=q*K-ae*G;if(s){if(oe<0||Pe<0||Ye<0)return null}else if((oe<0||Pe<0||Ye<0)&&(oe>0||Pe>0||Ye>0))return null;let Fe=oe+Pe+Ye;if(Fe===0)return null;let Ze=O*(oe*k+Pe*V+Ye*ie);return(Fe>0?Ze<0:Ze>0)?null:this.at(Ze/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dt=class extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},N0=new _t,yo=new mr,Hc=new ki,O0=new C,Gc=new C,Vc=new C,Wc=new C,Kh=new C,Xc=new C,k0=new C,$c=new C,et=class extends gn{constructor(e=new Vt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Xc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Kh.fromBufferAttribute(d,e),o?Xc.addScaledVector(Kh,u):Xc.addScaledVector(Kh.sub(t),u))}t.add(Xc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(r),yo.copy(e.ray).recast(e.near),!(Hc.containsPoint(yo.origin)===!1&&(yo.intersectSphere(Hc,O0)===null||yo.origin.distanceToSquared(O0)>(e.far-e.near)**2))&&(N0.copy(r).invert(),yo.copy(e.ray).applyMatrix4(N0),!(i.boundingBox!==null&&yo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yo)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let m=h[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=a.getX(y),v=a.getX(y+1),S=a.getX(y+2);s=qc(this,x,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=qc(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let m=h[p],x=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=b;y<M;y+=3){let w=y,v=y+1,S=y+2;s=qc(this,x,e,i,c,u,d,w,v,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,x=g;m<x;m+=3){let _=m,b=m+1,y=m+2;s=qc(this,o,e,i,c,u,d,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function f_(n,e,t,i,s,r,o,a){let l;if(e.side===di?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$s,a),l===null)return null;$c.copy(a),$c.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo($c);return c<t.near||c>t.far?null:{distance:c,point:$c.clone(),object:n}}function qc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Gc),n.getVertexPosition(l,Vc),n.getVertexPosition(c,Wc);let u=f_(n,e,t,i,Gc,Vc,Wc,k0);if(u){let d=new C;ur.getBarycoord(k0,Gc,Vc,Wc,d),s&&(u.uv=ur.getInterpolatedAttribute(s,a,l,c,d,new Ae)),r&&(u.uv1=ur.getInterpolatedAttribute(r,a,l,c,d,new Ae)),o&&(u.normal=ur.getInterpolatedAttribute(o,a,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new C,materialIndex:0};ur.getNormal(Gc,Vc,Wc,h.normal),u.face=h,u.barycoord=d}return u}var El=class extends Ai{constructor(e=null,t=1,i=1,s,r,o,a,l,c=si,u=si,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=class extends ii{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ha=new _t,F0=new _t,Yc=[],U0=new Ri,p_=new _t,ll=new et,cl=new ki,qn=class extends et{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,p_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ha),U0.copy(e.boundingBox).applyMatrix4(ha),this.boundingBox.union(U0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ha),cl.copy(e.boundingSphere).applyMatrix4(ha),this.boundingSphere.union(cl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ll.geometry=this.geometry,ll.material=this.material,ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),e.ray.intersectsSphere(cl)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ha),F0.multiplyMatrices(i,ha),ll.matrixWorld=F0,ll.raycast(e,Yc);for(let o=0,a=Yc.length;o<a;o++){let l=Yc[o];l.instanceId=r,l.object=this,t.push(l)}Yc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new El(new Float32Array(s*this.count),s,this.count,Ku,as));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vo=new ki,m_=new Ae(.5,.5),Kc=new C,Gr=class{constructor(e=new Ti,t=new Ti,i=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=os,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],g=r[9],m=r[10],x=r[11],_=r[12],b=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,x-p,M-_).normalize(),s[1].setComponents(c+o,f+u,x+p,M+_).normalize(),s[2].setComponents(c+a,f+d,x+g,M+b).normalize(),s[3].setComponents(c-a,f-d,x-g,M-b).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,x-m,M-y).normalize();else if(s[4].setComponents(c-l,f-h,x-m,M-y).normalize(),t===os)s[5].setComponents(c+l,f+h,x+m,M+y).normalize();else if(t===ya)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){vo.center.set(0,0,0);let t=m_.distanceTo(e.center);return vo.radius=.7071067811865476+t,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Kc.x=s.normal.x>0?e.max.x:e.min.x,Kc.y=s.normal.y>0?e.max.y:e.min.y,Kc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},B0=new _t,vu=class n{constructor(){this.coordinateSystem=os,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];B0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gr),i[s].setFromProjectionMatrix(B0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Vr=class extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_u=new C,bu=new C,z0=new _t,ul=new mr,Zc=new ki,Zh=new C,H0=new C,Mu=class extends gn{constructor(e=new Vt,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_u.fromBufferAttribute(t,s-1),bu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_u.distanceTo(bu);e.setAttribute("lineDistance",new ht(i,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=r,e.ray.intersectsSphere(Zc)===!1)return;z0.copy(s).invert(),ul.copy(e.ray).applyMatrix4(z0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=u.getX(g),_=u.getX(g+1),b=Jc(this,e,ul,l,x,_,g);b&&t.push(b)}if(this.isLineLoop){let g=u.getX(p-1),m=u.getX(f),x=Jc(this,e,ul,l,g,m,p-1);x&&t.push(x)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let x=Jc(this,e,ul,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=Jc(this,e,ul,l,p-1,f,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jc(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(_u.fromBufferAttribute(a,s),bu.fromBufferAttribute(a,r),t.distanceSqToSegment(_u,bu,Zh,H0)>i)return;Zh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Zh);if(!(c<e.near||c>e.far))return{distance:c,point:H0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var G0=new C,V0=new C,So=class extends Mu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)G0.fromBufferAttribute(t,s),V0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+G0.distanceTo(V0);e.setAttribute("lineDistance",new ht(i,1))}else St("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Su=class extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},W0=new _t,of=new mr,jc=new ki,Qc=new C,Tl=class extends gn{constructor(e=new Vt,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(s),jc.radius+=r,e.ray.intersectsSphere(jc)===!1)return;W0.copy(s).invert(),of.copy(e.ray).applyMatrix4(W0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,g=f;p<g;p++){let m=c.getX(p);Qc.fromBufferAttribute(d,m),X0(Qc,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,g=f;p<g;p++)Qc.fromBufferAttribute(d,p),X0(Qc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function X0(n,e,t,i,s,r,o){let a=of.distanceSqToPoint(n);if(a<t){let l=new C;of.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Al=class extends Ai{constructor(e=[],t=Io,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rl=class extends Ai{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gr=class extends Ai{constructor(e,t,i=Ts,s,r,o,a=si,l=si,c,u=fr,d=1){if(u!==fr&&u!==vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cl=class extends gr{constructor(e,t=Ts,i=Io,s,r,o=si,a=si,l,c=fr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pl=class extends Ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function p(g,m,x,_,b,y,M,w,v,S,D){let T=y/v,P=M/S,k=y/2,z=M/2,I=w/2,V=v+1,ne=S+1,te=0,ie=0,J=new C;for(let Y=0;Y<ne;Y++){let O=Y*P-z;for(let G=0;G<V;G++){let K=G*T-k;J[g]=K*_,J[m]=O*b,J[x]=I,c.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[x]=w>0?1:-1,u.push(J.x,J.y,J.z),d.push(G/v),d.push(1-Y/S),te+=1}}for(let Y=0;Y<S;Y++)for(let O=0;O<v;O++){let G=h+O+V*Y,K=h+O+V*(Y+1),q=h+(O+1)+V*(Y+1),ae=h+(O+1)+V*Y;l.push(G,K,ae),l.push(K,q,ae),ie+=6}a.addGroup(f,ie,D),f+=ie,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class n extends Vt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=i*2+r,g=s+1,m=new C,x=new C;for(let _=0;_<=p;_++){let b=0,y=0,M=0,w=0;if(_<=i){let D=_/i,T=D*Math.PI/2;y=-u-e*Math.cos(T),M=e*Math.sin(T),w=-e*Math.cos(T),b=D*d}else if(_<=i+r){let D=(_-i)/r;y=-u+D*t,M=e,w=0,b=d+D*h}else{let D=(_-i-r)/i,T=D*Math.PI/2;y=u+e*Math.sin(T),M=e*Math.cos(T),w=e*Math.sin(T),b=d+h+D*d}let v=Math.max(0,Math.min(1,b/f)),S=0;_===0?S=.5/s:_===p&&(S=-.5/s);for(let D=0;D<=s;D++){let T=D/s,P=T*Math.PI*2,k=Math.sin(P),z=Math.cos(P);x.x=-M*z,x.y=y,x.z=M*k,a.push(x.x,x.y,x.z),m.set(-M*z,w,M*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(T+S,v)}if(_>0){let D=(_-1)*g;for(let T=0;T<s;T++){let P=D+T,k=D+T+1,z=_*g+T,I=_*g+T+1;o.push(P,k,z),o.push(k,I,z)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Hn=class n extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new Ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fn=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,g=[],m=i/2,x=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function _(){let y=new C,M=new C,w=0,v=(t-e)/i;for(let S=0;S<=r;S++){let D=[],T=S/r,P=T*(t-e)+e;for(let k=0;k<=s;k++){let z=k/s,I=z*l+a,V=Math.sin(I),ne=Math.cos(I);M.x=P*V,M.y=-T*i+m,M.z=P*ne,d.push(M.x,M.y,M.z),y.set(V,v,ne).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-T),D.push(p++)}g.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){let T=g[D][S],P=g[D+1][S],k=g[D+1][S+1],z=g[D][S+1];(e>0||D!==0)&&(u.push(T,P,z),w+=3),(t>0||D!==r-1)&&(u.push(P,k,z),w+=3)}c.addGroup(x,w,0),x+=w}function b(y){let M=p,w=new Ae,v=new C,S=0,D=y===!0?e:t,T=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*T,0),h.push(0,T,0),f.push(.5,.5),p++;let P=p;for(let k=0;k<=s;k++){let I=k/s*l+a,V=Math.cos(I),ne=Math.sin(I);v.x=D*ne,v.y=m*T,v.z=D*V,d.push(v.x,v.y,v.z),h.push(0,T,0),w.x=V*.5+.5,w.y=ne*.5*T+.5,f.push(w.x,w.y),p++}for(let k=0;k<s;k++){let z=M+k,I=P+k;y===!0?u.push(I,I+1,z):u.push(I+1,I,z),S+=3}c.addGroup(x,S,y===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ws=class n extends Fn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){St("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ae:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new _t;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ta=class extends Yi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wu=class extends Ta{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var $0=new C,q0=new C,Jh=new Hf,jh=new Hf,Qh=new Hf,Eu=class extends Yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(q0.subVectors(s[0],s[1]).add(s[0]),c=q0);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:($0.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),Jh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,g,m),jh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,g,m),Qh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,g,m)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),jh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Qh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Jh.calc(l),jh.calc(l),Qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Y0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function g_(n,e){let t=1-n;return t*t*e}function x_(n,e){return 2*(1-n)*n*e}function y_(n,e){return n*n*e}function pl(n,e,t,i){return g_(n,e)+x_(n,t)+y_(n,i)}function v_(n,e){let t=1-n;return t*t*t*e}function __(n,e){let t=1-n;return 3*t*t*n*e}function b_(n,e){return 3*(1-n)*n*n*e}function M_(n,e){return n*n*n*e}function ml(n,e,t,i,s){return v_(n,e)+__(n,t)+b_(n,i)+M_(n,s)}var Il=class extends Yi{constructor(e=new Ae,t=new Ae,i=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,s.x,r.x,o.x,a.x),ml(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tu=class extends Yi{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ml(e,s.x,r.x,o.x,a.x),ml(e,s.y,r.y,o.y,a.y),ml(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ll=class extends Yi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends Yi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dl=class extends Yi{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(pl(e,s.x,r.x,o.x),pl(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends Yi{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(pl(e,s.x,r.x,o.x),pl(e,s.y,r.y,o.y),pl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Y0(a,l.x,c.x,u.x,d.x),Y0(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}},Au=Object.freeze({__proto__:null,ArcCurve:wu,CatmullRomCurve3:Eu,CubicBezierCurve:Il,CubicBezierCurve3:Tu,EllipseCurve:Ta,LineCurve:Ll,LineCurve3:wo,QuadraticBezierCurve:Dl,QuadraticBezierCurve3:Eo,SplineCurve:Nl}),Aa=class extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Au[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Au[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},xr=class extends Aa{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ll(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Dl(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Il(this.currentPoint.clone(),new Ae(e,t),new Ae(i,s),new Ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Nl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ta(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ws=class extends xr{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new xr().fromJSON(s))}return this}};function S_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Gm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=R_(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Ol(r,o,t,a,l,c,0),o}function Gm(n,e,t,i,s){let r;if(s===B_(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=K0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=K0(o/i|0,n[o],n[o+1],r);return r&&Ra(r,r.next)&&(Fl(r),r=r.next),r}function To(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ra(t,t.next)||Pn(t.prev,t,t.next)===0)){if(Fl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ol(n,e,t,i,s,r,o){if(!n)return;!o&&r&&D_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?E_(n,i,s,r):w_(n)){e.push(l.i,n.i,c.i),Fl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=T_(To(n),e),Ol(n,e,t,i,s,r,2)):o===2&&A_(n,e,t,i,s,r):Ol(To(n),e,t,i,s,r,1);break}}}function w_(n){let e=n.prev,t=n,i=n.next;if(Pn(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&dl(s,a,r,l,o,c,p.x,p.y)&&Pn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function E_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Pn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),g=Math.max(a,l,c),m=Math.max(u,d,h),x=af(f,p,e,t,i),_=af(g,m,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=x&&y&&y.z<=_;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&dl(a,u,l,d,c,h,b.x,b.y)&&Pn(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&dl(a,u,l,d,c,h,y.x,y.y)&&Pn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=x;){if(b.x>=f&&b.x<=g&&b.y>=p&&b.y<=m&&b!==s&&b!==o&&dl(a,u,l,d,c,h,b.x,b.y)&&Pn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=g&&y.y>=p&&y.y<=m&&y!==s&&y!==o&&dl(a,u,l,d,c,h,y.x,y.y)&&Pn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function T_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ra(i,s)&&Wm(i,t,t.next,s)&&kl(i,s)&&kl(s,i)&&(e.push(i.i,t.i,s.i),Fl(t),Fl(t.next),t=n=s),t=t.next}while(t!==n);return To(t)}function A_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k_(o,a)){let l=Xm(o,a);o=To(o,o.next),l=To(l,l.next),Ol(o,e,t,i,s,r,0),Ol(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function R_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Gm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(O_(c))}s.sort(C_);for(let r=0;r<s.length;r++)t=P_(s[r],t);return t}function C_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function P_(n,e){let t=I_(n,e);if(!t)return e;let i=Xm(t,n);return To(i,i.next),To(t,t.next)}function I_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ra(n,t))return t;do{if(Ra(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Vm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);kl(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&L_(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function L_(n,e){return Pn(n.prev,n,e.prev)<0&&Pn(e.next,n,n.next)<0}function D_(n,e,t,i){let s=n;do s.z===0&&(s.z=af(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,N_(s)}function N_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function af(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function O_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function dl(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Vm(n,e,t,i,s,r,o,a)}function k_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!F_(n,e)&&(kl(n,e)&&kl(e,n)&&U_(n,e)&&(Pn(n.prev,n,e.prev)||Pn(n,e.prev,e))||Ra(n,e)&&Pn(n.prev,n,n.next)>0&&Pn(e.prev,e,e.next)>0)}function Pn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ra(n,e){return n.x===e.x&&n.y===e.y}function Wm(n,e,t,i){let s=tu(Pn(n,e,t)),r=tu(Pn(n,e,i)),o=tu(Pn(t,i,n)),a=tu(Pn(t,i,e));return!!(s!==r&&o!==a||s===0&&eu(n,t,e)||r===0&&eu(n,i,e)||o===0&&eu(t,n,i)||a===0&&eu(t,e,i))}function eu(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function tu(n){return n>0?1:n<0?-1:0}function F_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function kl(n,e){return Pn(n.prev,n,n.next)<0?Pn(n,e,n.next)>=0&&Pn(n,n.prev,e)>=0:Pn(n,e,n.prev)<0||Pn(n,n.next,e)<0}function U_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xm(n,e){let t=lf(n.i,n.x,n.y),i=lf(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function K0(n,e,t,i){let s=lf(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lf(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function B_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var cf=class{static triangulate(e,t,i=2){return S_(e,t,i)}},_o=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Z0(e),J0(i,e);let o=e.length;t.forEach(Z0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,J0(i,t[l]);let a=cf.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Z0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function J0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Xs=class n extends Vt{constructor(e=new ws([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:z_,b,y=!1,M,w,v,S;if(x){b=x.getSpacedPoints(u),y=!0,h=!1;let pe=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(u,pe),w=new C,v=new C,S=new C}h||(m=0,f=0,p=0,g=0);let D=a.extractPoints(c),T=D.shape,P=D.holes;if(!_o.isClockWise(T)){T=T.reverse();for(let pe=0,X=P.length;pe<X;pe++){let U=P[pe];_o.isClockWise(U)&&(P[pe]=U.reverse())}}function z(pe){let U=10000000000000001e-36,se=pe[0];for(let $=1;$<=pe.length;$++){let Ce=$%pe.length,Re=pe[Ce],H=Re.x-se.x,me=Re.y-se.y,be=H*H+me*me,F=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(se.x),Math.abs(se.y)),ot=U*F*F;if(be<=ot){pe.splice(Ce,1),$--;continue}se=Re}}z(T),P.forEach(z);let I=P.length,V=T;for(let pe=0;pe<I;pe++){let X=P[pe];T=T.concat(X)}function ne(pe,X,U){return X||Et("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(X,U)}let te=T.length;function ie(pe,X,U){let se,$,Ce,Re=pe.x-X.x,H=pe.y-X.y,me=U.x-pe.x,be=U.y-pe.y,F=Re*Re+H*H,ot=Re*be-H*me;if(Math.abs(ot)>Number.EPSILON){let pt=Math.sqrt(F),vt=Math.sqrt(me*me+be*be),Ie=X.x-H/pt,A=X.y+Re/pt,j=U.x-be/vt,xe=U.y+me/vt,L=((j-Ie)*be-(xe-A)*me)/(Re*be-H*me);se=Ie+Re*L-pe.x,$=A+H*L-pe.y;let E=se*se+$*$;if(E<=2)return new Ae(se,$);Ce=Math.sqrt(E/2)}else{let pt=!1;Re>Number.EPSILON?me>Number.EPSILON&&(pt=!0):Re<-Number.EPSILON?me<-Number.EPSILON&&(pt=!0):Math.sign(H)===Math.sign(be)&&(pt=!0),pt?(se=-H,$=Re,Ce=Math.sqrt(F)):(se=Re,$=H,Ce=Math.sqrt(F/2))}return new Ae(se/Ce,$/Ce)}let J=[];for(let pe=0,X=V.length,U=X-1,se=pe+1;pe<X;pe++,U++,se++)U===X&&(U=0),se===X&&(se=0),J[pe]=ie(V[pe],V[U],V[se]);let Y=[],O,G=J.concat();for(let pe=0,X=I;pe<X;pe++){let U=P[pe];O=[];for(let se=0,$=U.length,Ce=$-1,Re=se+1;se<$;se++,Ce++,Re++)Ce===$&&(Ce=0),Re===$&&(Re=0),O[se]=ie(U[se],U[Ce],U[Re]);Y.push(O),G=G.concat(O)}let K;if(m===0)K=_o.triangulateShape(V,P);else{let pe=[],X=[];for(let U=0;U<m;U++){let se=U/m,$=f*Math.cos(se*Math.PI/2),Ce=p*Math.sin(se*Math.PI/2)+g;for(let Re=0,H=V.length;Re<H;Re++){let me=ne(V[Re],J[Re],Ce);Pe(me.x,me.y,-$),se===0&&pe.push(me)}for(let Re=0,H=I;Re<H;Re++){let me=P[Re];O=Y[Re];let be=[];for(let F=0,ot=me.length;F<ot;F++){let pt=ne(me[F],O[F],Ce);Pe(pt.x,pt.y,-$),se===0&&be.push(pt)}se===0&&X.push(be)}}K=_o.triangulateShape(pe,X)}let q=K.length,ae=p+g;for(let pe=0;pe<te;pe++){let X=h?ne(T[pe],G[pe],ae):T[pe];y?(v.copy(M.normals[0]).multiplyScalar(X.x),w.copy(M.binormals[0]).multiplyScalar(X.y),S.copy(b[0]).add(v).add(w),Pe(S.x,S.y,S.z)):Pe(X.x,X.y,0)}for(let pe=1;pe<=u;pe++)for(let X=0;X<te;X++){let U=h?ne(T[X],G[X],ae):T[X];y?(v.copy(M.normals[pe]).multiplyScalar(U.x),w.copy(M.binormals[pe]).multiplyScalar(U.y),S.copy(b[pe]).add(v).add(w),Pe(S.x,S.y,S.z)):Pe(U.x,U.y,d/u*pe)}for(let pe=m-1;pe>=0;pe--){let X=pe/m,U=f*Math.cos(X*Math.PI/2),se=p*Math.sin(X*Math.PI/2)+g;for(let $=0,Ce=V.length;$<Ce;$++){let Re=ne(V[$],J[$],se);Pe(Re.x,Re.y,d+U)}for(let $=0,Ce=P.length;$<Ce;$++){let Re=P[$];O=Y[$];for(let H=0,me=Re.length;H<me;H++){let be=ne(Re[H],O[H],se);y?Pe(be.x,be.y+b[u-1].y,b[u-1].x+U):Pe(be.x,be.y,d+U)}}}fe(),ge();function fe(){let pe=s.length/3;if(h){let X=0,U=te*X;for(let se=0;se<q;se++){let $=K[se];Ye($[2]+U,$[1]+U,$[0]+U)}X=u+m*2,U=te*X;for(let se=0;se<q;se++){let $=K[se];Ye($[0]+U,$[1]+U,$[2]+U)}}else{for(let X=0;X<q;X++){let U=K[X];Ye(U[2],U[1],U[0])}for(let X=0;X<q;X++){let U=K[X];Ye(U[0]+te*u,U[1]+te*u,U[2]+te*u)}}i.addGroup(pe,s.length/3-pe,0)}function ge(){let pe=s.length/3,X=0;oe(V,X),X+=V.length;for(let U=0,se=P.length;U<se;U++){let $=P[U];oe($,X),X+=$.length}i.addGroup(pe,s.length/3-pe,1)}function oe(pe,X){let U=pe.length;for(;--U>=0;){let se=U,$=U-1;$<0&&($=pe.length-1);for(let Ce=0,Re=u+m*2;Ce<Re;Ce++){let H=te*Ce,me=te*(Ce+1),be=X+se+H,F=X+$+H,ot=X+$+me,pt=X+se+me;Fe(be,F,ot,pt)}}}function Pe(pe,X,U){l.push(pe),l.push(X),l.push(U)}function Ye(pe,X,U){Ze(pe),Ze(X),Ze(U);let se=s.length/3,$=_.generateTopUV(i,s,se-3,se-2,se-1);$e($[0]),$e($[1]),$e($[2])}function Fe(pe,X,U,se){Ze(pe),Ze(X),Ze(se),Ze(X),Ze(U),Ze(se);let $=s.length/3,Ce=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);$e(Ce[0]),$e(Ce[1]),$e(Ce[3]),$e(Ce[1]),$e(Ce[2]),$e(Ce[3])}function Ze(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function $e(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return H_(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Au[s.type]().fromJSON(s)),new n(i,e.options)}},z_={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Ae(r,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],g=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-d),new Ae(h,1-p),new Ae(g,1-x)]:[new Ae(a,1-l),new Ae(u,1-d),new Ae(f,1-p),new Ae(m,1-x)]}};function H_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ul=class n extends Vt{constructor(e=[new Ae(0,-.5),new Ae(.5,0),new Ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new C,h=new Ae,f=new C,p=new C,g=new C,m=0,x=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:g.normalize(),l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,x=e[_+1].y-e[_].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(p)}for(let _=0;_<=t;_++){let b=i+_*u*s,y=Math.sin(b),M=Math.cos(b);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*M,o.push(d.x,d.y,d.z),h.x=_/t,h.y=w/(e.length-1),a.push(h.x,h.y);let v=l[3*w+0]*y,S=l[3*w+1],D=l[3*w+0]*M;c.push(v,S,D)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,M=y,w=y+e.length,v=y+e.length+1,S=y+1;r.push(M,w,S),r.push(v,S,w)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var yt=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],p=[],g=[],m=[];for(let x=0;x<u;x++){let _=x*h-o;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-_,0),g.push(0,0,1),m.push(b/a),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let _=0;_<a;_++){let b=_+c*x,y=_+c*(x+1),M=_+1+c*(x+1),w=_+1+c*x;f.push(b,y,w),f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},wn=class n extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new C,p=new Ae;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){let x=r+m/i*o;f.x=d*Math.cos(x),f.y=d*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let g=0;g<s;g++){let m=g*(i+1);for(let x=0;x<i;x++){let _=x+m,b=_,y=_+i+1,M=_+i+2,w=_+1;a.push(b,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Gn=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new C,h=new C,f=[],p=[],g=[],m=[];for(let x=0;x<=i;x++){let _=[],b=x/i,y=o+b*a,M=e*Math.cos(y),w=Math.sqrt(e*e-M*M),v=0;x===0&&o===0?v=.5/t:x===i&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let D=S/t,T=s+D*r;d.x=-w*Math.cos(T),d.y=M,d.z=w*Math.sin(T),p.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(D+v,1-b),_.push(c++)}u.push(_)}for(let x=0;x<i;x++)for(let _=0;_<t;_++){let b=u[x][_+1],y=u[x][_],M=u[x+1][_],w=u[x+1][_+1];(x!==0||o>0)&&f.push(b,y,w),(x!==i-1||l<Math.PI)&&f.push(y,M,w)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(g,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ci=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,p=new C;for(let g=0;g<=i;g++){let m=o+g/i*a;for(let x=0;x<=s;x++){let _=x/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(x/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){let x=(s+1)*g+m-1,_=(s+1)*(g-1)+m-1,b=(s+1)*(g-1)+m,y=(s+1)*g+m;l.push(x,_,y),l.push(_,b,y)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Bl=class n extends Vt{constructor(e=new Eo(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Ae,u=new C,d=[],h=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function g(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),_(),x()}function m(b){u=e.getPointAt(b/t,u);let y=o.normals[b],M=o.binormals[b];for(let w=0;w<=s;w++){let v=w/s*Math.PI*2,S=Math.sin(v),D=-Math.cos(v);l.x=D*y.x+S*M.x,l.y=D*y.y+S*M.y,l.z=D*y.z+S*M.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let M=(s+1)*(b-1)+(y-1),w=(s+1)*b+(y-1),v=(s+1)*b+y,S=(s+1)*(b-1)+y;p.push(M,w,S),p.push(w,v,S)}}function _(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)c.x=b/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Au[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Do(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(j0(s))s.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(j0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function vi(n){let e={};for(let t=0;t<n.length;t++){let i=Do(n[t]);for(let s in i)e[s]=i[s]}return e}function j0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}var Ld={clone:Do,merge:vi},V_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ca=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wt=class extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zl=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){bo('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ru=class extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cu=class extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fa(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Wr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pu=class extends Wr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nf,endingEnd:nf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sf:r=e,a=2*t-i;break;case rf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case sf:o=e,l=2*i-t;break;case rf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),g=p*p,m=g*p,x=-h*m+2*h*g-h*p,_=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*p+1,b=(-1-f)*m+(1.5+f)*g+.5*p,y=f*m-f*g;for(let M=0;M!==a;++M)r[M]=x*o[u+M]+_*o[c+M]+b*o[l+M]+y*o[d+M];return r}},Iu=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Lu=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Du=class extends Wr{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let h=a*2,f=e-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],x=f*h+p*2,_=d[x],b=d[x+1],y=e*h+p*2,M=u[y],w=u[y+1],v=$_(i,t,_,M,s);r[p]=$m(v,g,b,w,m)}return r}};function $m(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function X_(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function $_(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=$m(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=X_(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ki=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),nu(e.settings)&&(i.settings={inTangents:fa(e.settings.inTangents,Array),outTangents:fa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Du(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case mu:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break;case tf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return St("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return mu;case this.InterpolantFactoryMethodSmooth:return ru;case this.InterpolantFactoryMethodBezier:return tf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;nu(this.settings)&&(Q0(this.settings.inTangents,e),Q0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;nu(this.settings)&&(em(this.settings.inTangents,e),em(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Et("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Et("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ov(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Et("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ru,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let g=t[d+p];if(g!==t[h+p]||g!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Q0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function em(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ki.prototype.ValueTypeName="";Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=mu;var Xr=class extends Ki{constructor(e,t,i){super(e,t,i)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=gl;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nu=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Nu.prototype.ValueTypeName="color";var Ou=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Ou.prototype.ValueTypeName="number";var ku=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Hl=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}};Hl.prototype.ValueTypeName="quaternion";Hl.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Ki{constructor(e,t,i){super(e,t,i)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=gl;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Fu=class extends Ki{constructor(e,t,i,s){super(e,t,i,s)}};Fu.prototype.ValueTypeName="vector";var Uu=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qm=new Uu,Bu=class{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Bu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gl=class extends gn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vl=class extends Gl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ef=new _t,tm=new C,nm=new C,zu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ef.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ef,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ya||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},iu=new C,su=new mn,Hs=new C,Wl=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=os,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(iu,su,Hs),Hs.x===1&&Hs.y===1&&Hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,su,Hs.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(iu,su,Hs),Hs.x===1&&Hs.y===1&&Hs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,su,Hs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hr=new C,im=new Ae,sm=new Ae,ni=class extends Wl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,im,sm),t.subVectors(sm,im)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var yr=class extends Wl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uf=class extends zu{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pa=class extends Gl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new uf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xl=class extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var pa=-90,ma=1,Ia=class extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ni(pa,ma,e,t);s.layers=this.layers,this.add(s);let r=new ni(pa,ma,e,t);r.layers=this.layers,this.add(r);let o=new ni(pa,ma,e,t);o.layers=this.layers,this.add(o);let a=new ni(pa,ma,e,t);a.layers=this.layers,this.add(a);let l=new ni(pa,ma,e,t);l.layers=this.layers,this.add(l);let c=new ni(pa,ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===os)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Hu=class extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Vf="\\[\\]\\.:\\/",q_=new RegExp("["+Vf+"]","g"),Wf="[^"+Vf+"]",Y_="[^"+Vf.replace("\\.","")+"]",K_=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Z_=/(WCOD+)?/.source.replace("WCOD",Y_),J_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),Q_=new RegExp("^"+K_+Z_+J_+j_+"$"),e1=["material","materials","bones","map"],df=class{constructor(e,t,i){let s=i||Sn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Sn=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){let t=Q_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);e1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){St("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Sn.Composite=df;Sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Sn.prototype.GetterByBindingType=[Sn.prototype._getValue_direct,Sn.prototype._getValue_array,Sn.prototype._getValue_arrayElement,Sn.prototype._getValue_toArray];Sn.prototype.SetterByBindingTypeAndVersioning=[[Sn.prototype._setValue_direct,Sn.prototype._setValue_direct_setNeedsUpdate,Sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_array,Sn.prototype._setValue_array_setNeedsUpdate,Sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_arrayElement,Sn.prototype._setValue_arrayElement_setNeedsUpdate,Sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_fromArray,Sn.prototype._setValue_fromArray_setNeedsUpdate,Sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H3=new Float32Array(1);var rm=new _t,Ao=class{constructor(e,t,i=0,s=1/0){this.ray=new mr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rm),this}intersectObject(e,t=!0,i=[]){return hf(e,this,i,t),i.sort(om),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)hf(e[s],this,i,t);return i.sort(om),i}};function om(n,e){return n.distance-e.distance}function hf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)hf(r[o],e,t,!0)}}var La=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ff=class{static{this.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var $l=class extends Ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xf(n,e,t,i){let s=t1(i);switch(t){case Pf:return n*e;case Ku:return n*e/s.components*s.byteLength;case Zu:return n*e/s.components*s.byteLength;case Jr:return n*e*2/s.components*s.byteLength;case Ju:return n*e*2/s.components*s.byteLength;case If:return n*e*3/s.components*s.byteLength;case As:return n*e*4/s.components*s.byteLength;case ju:return n*e*4/s.components*s.byteLength;case Kl:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jl:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(n,16)*Math.max(e,8)/4;case Qu:case td:return Math.max(n,8)*Math.max(e,8)/2;case id:case sd:case od:case ad:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rd:case Ql:case ld:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sd:case wd:case Ed:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Td:case Ad:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ec:case Rd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t1(n){switch(n){case Fi:case Tf:return{byteLength:1,components:1};case ka:case Af:case Pi:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Ts:case $u:case as:return{byteLength:4,components:1};case Rf:case Cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mg(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function o1(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,c1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f1=`#ifdef USE_AOMAP
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
#endif`,p1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m1=`#ifdef USE_BATCHING
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
#endif`,g1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,P1=`#define PI 3.141592653589793
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
} // validated`,I1=`vec3 transformedNormal = objectNormal;
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
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",F1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,sb=`uniform sampler2D dfgLUT;
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
}`,rb=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_b=`#if defined( USE_MORPHCOLORS )
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
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform float backgroundBlurriness;
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,fM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,bM=`uniform vec3 diffuse;
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
}`,MM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,wM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,RM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,IM=`#define STANDARD
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
}`,LM=`#define TOON
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
}`,DM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,OM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:a1,alphahash_pars_fragment:l1,alphamap_fragment:c1,alphamap_pars_fragment:u1,alphatest_fragment:d1,alphatest_pars_fragment:h1,aomap_fragment:f1,aomap_pars_fragment:p1,batching_pars_vertex:m1,batching_vertex:g1,begin_vertex:x1,beginnormal_vertex:y1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:b1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:E1,color_fragment:T1,color_pars_fragment:A1,color_pars_vertex:R1,color_vertex:C1,common:P1,defaultnormal_vertex:I1,displacementmap_pars_vertex:L1,displacementmap_vertex:D1,emissivemap_fragment:N1,emissivemap_pars_fragment:O1,colorspace_fragment:k1,colorspace_pars_fragment:F1,envmap_fragment:U1,envmap_common_pars_fragment:B1,envmap_pars_fragment:z1,envmap_pars_vertex:H1,envmap_physical_pars_fragment:j1,envmap_vertex:G1,fog_vertex:V1,fog_pars_vertex:W1,fog_fragment:X1,fog_pars_fragment:$1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:Y1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Z1,lights_pars_begin:J1,lights_toon_fragment:Q1,lights_toon_pars_fragment:eb,lights_phong_fragment:tb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:ab,lightprobes_pars_fragment:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:hb,map_fragment:fb,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:yb,morphinstance_vertex:vb,morphcolor_vertex:_b,morphnormal_vertex:bb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Sb,normal_fragment_begin:wb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Db,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:kb,project_vertex:Fb,dithering_fragment:Ub,dithering_pars_fragment:Bb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:Wb,shadowmask_pars_fragment:Xb,skinbase_vertex:$b,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:Kb,specularmap_fragment:Zb,specularmap_pars_fragment:Jb,tonemapping_fragment:jb,tonemapping_pars_fragment:Qb,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:dM,depth_vert:hM,depth_frag:fM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:yM,linedashed_frag:vM,meshbasic_vert:_M,meshbasic_frag:bM,meshlambert_vert:MM,meshlambert_frag:SM,meshmatcap_vert:wM,meshmatcap_frag:EM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:RM,meshphong_frag:CM,meshphysical_vert:PM,meshphysical_frag:IM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:NM,points_frag:OM,shadow_vert:kM,shadow_frag:FM,sprite_vert:UM,sprite_frag:BM},tt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Zs={basic:{uniforms:vi([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:vi([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:vi([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:vi([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:vi([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new ke(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:vi([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:vi([tt.points,tt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:vi([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:vi([tt.common,tt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:vi([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:vi([tt.sprite,tt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:vi([tt.common,tt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:vi([tt.lights,tt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Zs.physical={uniforms:vi([Zs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Dd={r:0,b:0,g:0},zM=new _t,gg=new Pt;gg.set(-1,0,0,0,1,0,0,0,1);function HM(n,e,t,i,s,r){let o=new ke(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(_){let b=!1,y=f(_);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,b){let y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new et(new tn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Do(Zs.backgroundCube.uniforms),vertexShader:Zs.backgroundCube.vertexShader,fragmentShader:Zs.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gg),c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==un,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new et(new yt(2,2),new dn({name:"BackgroundMaterial",uniforms:Do(Zs.background.uniforms),vertexShader:Zs.background.vertexShader,fragmentShader:Zs.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==un,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,b){_.getRGB(Dd,Gf(n)),t.buffers.color.setClear(Dd.r,Dd.g,Dd.b,b,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:g,dispose:x}}function GM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(P,k,z,I,V){let ne=!1,te=d(P,I,z,k);r!==te&&(r=te,c(r.object)),ne=f(P,I,z,V),ne&&p(P,I,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(P,k,z,I),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function d(P,k,z,I){let V=I.wireframe===!0,ne=i[k.id];ne===void 0&&(ne={},i[k.id]=ne);let te=P.isInstancedMesh===!0?P.id:0,ie=ne[te];ie===void 0&&(ie={},ne[te]=ie);let J=ie[z.id];J===void 0&&(J={},ie[z.id]=J);let Y=J[V];return Y===void 0&&(Y=h(l()),J[V]=Y),Y}function h(P){let k=[],z=[],I=[];for(let V=0;V<t;V++)k[V]=0,z[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,k,z,I){let V=r.attributes,ne=k.attributes,te=0,ie=z.getAttributes();for(let J in ie)if(ie[J].location>=0){let O=V[J],G=ne[J];if(G===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),O===void 0||O.attribute!==G||G&&O.data!==G.data)return!0;te++}return r.attributesNum!==te||r.index!==I}function p(P,k,z,I){let V={},ne=k.attributes,te=0,ie=z.getAttributes();for(let J in ie)if(ie[J].location>=0){let O=ne[J];O===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(O=P.instanceColor));let G={};G.attribute=O,O&&O.data&&(G.data=O.data),V[J]=G,te++}r.attributes=V,r.attributesNum=te,r.index=I}function g(){let P=r.newAttributes;for(let k=0,z=P.length;k<z;k++)P[k]=0}function m(P){x(P,0)}function x(P,k){let z=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;z[P]=1,I[P]===0&&(n.enableVertexAttribArray(P),I[P]=1),V[P]!==k&&(n.vertexAttribDivisor(P,k),V[P]=k)}function _(){let P=r.newAttributes,k=r.enabledAttributes;for(let z=0,I=k.length;z<I;z++)k[z]!==P[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function b(P,k,z,I,V,ne,te){te===!0?n.vertexAttribIPointer(P,k,z,V,ne):n.vertexAttribPointer(P,k,z,I,V,ne)}function y(P,k,z,I){g();let V=I.attributes,ne=z.getAttributes(),te=k.defaultAttributeValues;for(let ie in ne){let J=ne[ie];if(J.location>=0){let Y=V[ie];if(Y===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){let O=Y.normalized,G=Y.itemSize,K=e.get(Y);if(K===void 0)continue;let q=K.buffer,ae=K.type,fe=K.bytesPerElement,ge=ae===n.INT||ae===n.UNSIGNED_INT||Y.gpuType===$u;if(Y.isInterleavedBufferAttribute){let oe=Y.data,Pe=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,Ye=Y.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let Fe=0;Fe<J.locationSize;Fe++)x(J.location+Fe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<J.locationSize;Fe++)m(J.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Fe=0;Fe<J.locationSize;Fe++)b(J.location+Fe,G/J.locationSize,ae,O,Pe*fe,(Ye+G/J.locationSize*Fe)*fe,ge)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<J.locationSize;oe++)x(J.location+oe,Y.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<J.locationSize;oe++)m(J.location+oe);n.bindBuffer(n.ARRAY_BUFFER,q);for(let oe=0;oe<J.locationSize;oe++)b(J.location+oe,G/J.locationSize,ae,O,G*fe,G/J.locationSize*oe*fe,ge)}}else if(te!==void 0){let O=te[ie];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(J.location,O);break;case 3:n.vertexAttrib3fv(J.location,O);break;case 4:n.vertexAttrib4fv(J.location,O);break;default:n.vertexAttrib1fv(J.location,O)}}}}_()}function M(){D();for(let P in i){let k=i[P];for(let z in k){let I=k[z];for(let V in I){let ne=I[V];for(let te in ne)u(ne[te].object),delete ne[te];delete I[V]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let k=i[P.id];for(let z in k){let I=k[z];for(let V in I){let ne=I[V];for(let te in ne)u(ne[te].object),delete ne[te];delete I[V]}}delete i[P.id]}function v(P){for(let k in i){let z=i[k];for(let I in z){let V=z[I];if(V[P.id]===void 0)continue;let ne=V[P.id];for(let te in ne)u(ne[te].object),delete ne[te];delete V[P.id]}}}function S(P){for(let k in i){let z=i[k],I=P.isInstancedMesh===!0?P.id:0,V=z[I];if(V!==void 0){for(let ne in V){let te=V[ne];for(let ie in te)u(te[ie].object),delete te[ie];delete V[ne]}delete z[I],Object.keys(z).length===0&&delete i[k]}}}function D(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function VM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function WM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==As&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let S=v===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Fi&&v!==as&&!S&&i.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(St("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&St("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:w}}function XM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ti,a=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,x=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,b=_*4,y=x.clippingState||null;l.value=y,y=u(p,h,b,f);for(let M=0;M!==b;++M)y[M]=t[M];x.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let x=f+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<x)&&(m=new Float32Array(x));for(let b=0,y=f;b!==g;++b,y+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var ic=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Al(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:Co});r.uniforms.tEquirect.value=t;let o=new et(s,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=In),new Ia(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ym=256,$M=3,qM=20,xg=256,yg=16,YM=3,KM=new C,ZM=new ke,Ua=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ia(1,10,null),this._boxMesh=new et(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=KM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(e.background=l.getClearColor(ZM));let m=new Ia(i,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=g,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ym,Uf(e))}_fromTexture(e,t){e.mapping===Io||e.mapping===Oa?this._setSize(e.image.length===0?Ym:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Km(e,!1,!1),i=Math.log2(e)-$M;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Km(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Io||e.mapping===Oa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=JM(),this._integrationMaterial=jM());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yg);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-YM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(xg*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QM());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Km(n,e,t){return new ic(n,{minFilter:Es,generateMipmaps:e,type:Pi,colorSpace:xl,depthBuffer:t})}function sc(n,e,t){return new dn({name:n,uniforms:e,vertexShader:zt.cube_vert,fragmentShader:t,side:di,blending:Co,depthTest:!1,depthWrite:!1})}function JM(){return sc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xg}u

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
	`)}function jM(){return sc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yg}},`

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
	`)}function QM(){return sc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qM}
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
	`)}function Zm(){return sc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jm(){return sc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Vu||f===Wu)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let g=new ic(p.height);return g.fromEquirectangularTexture(n,h),e.set(h,g),h.addEventListener("dispose",c),a(g.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===Vu||f===Wu,g=f===Io||f===Oa;if(p||g){let m=t.get(h),x=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Ua(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return p&&_&&_.height>0||g&&_&&l(_)?(i===null&&(i=new Ua(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,f){return f===Vu?h.mapping=Io:f===Wu&&(h.mapping=Oa),h}function l(h){let f=0,p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function tS(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&bo("WebGLRenderer: "+i+" extension not supported."),s}}}function nS(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,g){return s[g.id]!==void 0||(g.addEventListener("dispose",a),s[g.id]=new WeakRef(g),o.register(g,g.id,g),t.memory.geometries++),g}function u(p){let g=p.attributes;for(let m in g)e.update(g[m],n.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,x=0;if(m===void 0)return;let _=g!==null?g.array.length:m.array.length/3-1,b=m.count>=65535?Sl:Ml,y=new b(Math.ceil(_/3)*6,1),M=y.array;if(g!==null){let v=g.array;x=g.version;for(let S=0,D=0;S<_;S+=3){let T=v[S+0],P=v[S+1],k=v[S+2];M[D++]=T,M[D++]=P,M[D++]=P,M[D++]=k,M[D++]=k,M[D++]=T}}else{x=m.version;for(let v=0,S=0;v<_;v+=3){let D=v+0,T=v+1,P=v+2;M[S++]=D,M[S++]=T,M[S++]=T,M[S++]=P,M[S++]=P,M[S++]=D}}y.version=x;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function h(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let g=s[p].deref();g!==void 0&&l(g)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function iS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m];t.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function sS(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rS(n,e,t){let i=new WeakMap,s=new vn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let D=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),g===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*d),v=new bl(w,y,M,d);v.type=as,v.needsUpdate=!0;let S=b*4;for(let T=0;T<d;T++){let P=m[T],k=x[T],z=_[T],I=y*M*4*T;for(let V=0;V<P.count;V++){let ne=V*S;f===!0&&(s.fromBufferAttribute(P,V),w[I+ne+0]=s.x,w[I+ne+1]=s.y,w[I+ne+2]=s.z,w[I+ne+3]=0),p===!0&&(s.fromBufferAttribute(k,V),w[I+ne+4]=s.x,w[I+ne+5]=s.y,w[I+ne+6]=s.z,w[I+ne+7]=0),g===!0&&(s.fromBufferAttribute(z,V),w[I+ne+8]=s.x,w[I+ne+9]=s.y,w[I+ne+10]=s.z,w[I+ne+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Ae(y,M)},i.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function oS(n,e,t,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var aS={[vf]:"LINEAR_TONE_MAPPING",[_f]:"REINHARD_TONE_MAPPING",[bf]:"CINEON_TONE_MAPPING",[Mf]:"ACES_FILMIC_TONE_MAPPING",[wf]:"AGX_TONE_MAPPING",[ql]:"NEUTRAL_TONE_MAPPING",[Sf]:"CUSTOM_TONE_MAPPING"};function lS(n,e,t,i,s,r){let o=new ui(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Vt;u.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ht([0,2,0,0,2,0],2));let d=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new et(u,d),f=new yr(-1,1,1,-1,0,1),p=null,g=null,m=!1,x,_=null,b=[],y=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let v=0;v<b.length;v++){let S=b[v];S.setSize&&S.setSize(M,w)}},this.setEffects=function(M){b=M,y=b.length>0&&b[0].isRenderPass===!0;let w=o.width,v=o.height;b.length>0&&a===null&&(a=new ui(w,v,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(w,v,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(D=>D.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new gr(w,v),r===!0&&(c.format=vr,c.type=Lo)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let D=0;D<b.length;D++){let T=b[D];T.setSize&&T.setSize(w,v),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(M,w){if(m||M.toneMapping===Ys&&b.length===0)return!1;if(_=w,w!==null){let v=w.width,S=w.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return y===!1&&M.setRenderTarget(o),x=M.toneMapping,M.toneMapping=Ys,!0},this.hasRenderPass=function(){return y},this.end=function(M,w){M.toneMapping=x,m=!0;let v=o,S=a;for(let D=0;D<b.length;D++){let T=b[D];T.enabled!==!1&&(T.render(M,S,v,w),T.needsSwap!==!1&&(v=S,S=S===a?l:a))}if(p!==M.outputColorSpace||g!==M.toneMapping){p=M.outputColorSpace,g=M.toneMapping,d.defines={},Yt.getTransfer(p)===un&&(d.defines.SRGB_TRANSFER="");let D=aS[g];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(_),M.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var vg=new Ai,_g=new gr(1,1),bg=new Cl(1),Mg=new bl,Sg=new yu,wg=new Al,jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function Ba(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jm[s];if(r===void 0&&(r=new Float32Array(s),jm[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kd(n,e){let t=Qm[e];t===void 0&&(t=new Int32Array(e),Qm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;n.uniform2fv(this.addr,e),Kn(t,e)}}function dS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;n.uniform3fv(this.addr,e),Kn(t,e)}}function hS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;n.uniform4fv(this.addr,e),Kn(t,e)}}function fS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,i))return;ng.set(i),n.uniformMatrix2fv(this.addr,!1,ng),Kn(t,i)}}function pS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,i))return;tg.set(i),n.uniformMatrix3fv(this.addr,!1,tg),Kn(t,i)}}function mS(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(Yn(t,i))return;eg.set(i),n.uniformMatrix4fv(this.addr,!1,eg),Kn(t,i)}}function gS(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;n.uniform2iv(this.addr,e),Kn(t,e)}}function yS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;n.uniform3iv(this.addr,e),Kn(t,e)}}function vS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;n.uniform4iv(this.addr,e),Kn(t,e)}}function _S(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;n.uniform2uiv(this.addr,e),Kn(t,e)}}function MS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;n.uniform3uiv(this.addr,e),Kn(t,e)}}function SS(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;n.uniform4uiv(this.addr,e),Kn(t,e)}}function Fd(n){return n.version===0&&(n.compareFunction=Nf,n.needsUpdate=!0),n}function wS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Fd(_g):r=vg,t.setTexture2D(e||r,s)}function ES(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Sg,s)}function TS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Fd(bg):r=wg,t.setTextureCube(e||r,s)}function AS(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Mg,s)}function RS(n){switch(n){case 5126:return cS;case 35664:return uS;case 35665:return dS;case 35666:return hS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return xS;case 35668:case 35672:return yS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return bS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(n,e){n.uniform1fv(this.addr,e)}function PS(n,e){let t=Ba(e,this.size,2);n.uniform2fv(this.addr,t)}function IS(n,e){let t=Ba(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){let t=Ba(e,this.size,4);n.uniform4fv(this.addr,t)}function DS(n,e){let t=Ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){let t=Ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OS(n,e){let t=Ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kS(n,e){n.uniform1iv(this.addr,e)}function FS(n,e){n.uniform2iv(this.addr,e)}function US(n,e){n.uniform3iv(this.addr,e)}function BS(n,e){n.uniform4iv(this.addr,e)}function zS(n,e){n.uniform1uiv(this.addr,e)}function HS(n,e){n.uniform2uiv(this.addr,e)}function GS(n,e){n.uniform3uiv(this.addr,e)}function VS(n,e){n.uniform4uiv(this.addr,e)}function WS(n,e,t){let i=this.cache,s=e.length,r=kd(t,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fd(_g):o=vg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function XS(n,e,t){let i=this.cache,s=e.length,r=kd(t,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sg,r[o])}function $S(n,e,t){let i=this.cache,s=e.length,r=kd(t,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Fd(bg):o=wg;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function qS(n,e,t){let i=this.cache,s=e.length,r=kd(t,s);Yn(i,r)||(n.uniform1iv(this.addr,r),Kn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mg,r[o])}function YS(n){switch(n){case 5126:return CS;case 35664:return PS;case 35665:return IS;case 35666:return LS;case 35674:return DS;case 35675:return NS;case 35676:return OS;case 5124:case 35670:return kS;case 35667:case 35671:return FS;case 35668:case 35672:return US;case 35669:case 35673:return BS;case 5125:return zS;case 36294:return HS;case 36295:return GS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return qS}}var Yf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}},Kf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}},Zf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$f=/(\w+)(\])?(\[|\.)?/g;function ig(n,e){n.seq.push(e),n.map[e.id]=e}function KS(n,e,t){let i=n.name,s=i.length;for($f.lastIndex=0;;){let r=$f.exec(i),o=$f.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ig(t,c===void 0?new Yf(a,n,e):new Kf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Zf(a),ig(t,d)),t=d}}}var Fa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);KS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function sg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ZS=37297,JS=0;function jS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var rg=new Pt;function QS(n){Yt._getMatrix(rg,Yt.workingColorSpace,n);let e=`mat3( ${rg.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(n)){case yl:return[e,"LinearTransferOETF"];case un:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function og(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+jS(n.getShaderSource(e),a)}else return r}function ew(n,e){let t=QS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tw={[vf]:"Linear",[_f]:"Reinhard",[bf]:"Cineon",[Mf]:"ACESFilmic",[wf]:"AgX",[ql]:"Neutral",[Sf]:"Custom"};function nw(n,e){let t=tw[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nd=new C;function iw(){Yt.getLuminanceCoefficients(Nd);let n=Nd.x.toFixed(4),e=Nd.y.toFixed(4),t=Nd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nc).join(`
`)}function rw(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ow(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function nc(n){return n!==""}function ag(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(n){return n.replace(aw,lw)}function lw(n,e){let t=zt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Jf(t)}var cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(n){return n.replace(cw,uw)}function uw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ug(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var dw={[Ro]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function hw(n){return dw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fw={[Oa]:"ENVMAP_MODE_REFRACTION"};function pw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mw={[yf]:"ENVMAP_BLENDING_MULTIPLY",[Em]:"ENVMAP_BLENDING_MIX",[Tm]:"ENVMAP_BLENDING_ADD"};function gw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mw[n.combine]||"ENVMAP_BLENDING_NONE"}function xw(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=hw(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pw(t),d=gw(t),h=sw(t),f=rw(r),p=s.createProgram(),g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(nc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(nc).join(`
`),m.length>0&&(m+=`
`)):(g=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nc).join(`
`),m=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ys?"#define TONE_MAPPING":"",t.toneMapping!==Ys?zt.tonemapping_pars_fragment:"",t.toneMapping!==Ys?nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,ew("linearToOutputTexel",t.outputColorSpace),iw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nc).join(`
`)),o=Jf(o),o=ag(o,t),o=lg(o,t),a=Jf(a),a=ag(a,t),a=lg(a,t),o=cg(o),a=cg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+o,b=x+m+a,y=sg(s,s.VERTEX_SHADER,_),M=sg(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,M),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(T){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",k=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(M)||"",I=P.trim(),V=k.trim(),ne=z.trim(),te=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,M);else{let J=og(s,y,"vertex"),Y=og(s,M,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+J+`
`+Y)}else I!==""?St("WebGLProgram: Program Info Log:",I):(V===""||ne==="")&&(ie=!1);ie&&(T.diagnostics={runnable:te,programLog:I,vertexShader:{log:V,prefix:g},fragmentShader:{log:ne,prefix:m}})}s.deleteShader(y),s.deleteShader(M),v=new Fa(s,p),S=ow(s,p)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,ZS)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=M,this}var yw=0,jf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qf(e),t.set(e,i)),i}},Qf=class{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}};function vw(n){return n===Jr||n===Ql||n===ec}function _w(n,e,t,i,s,r){let o=new Ma,a=new jf,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,D,T,P,k){let z=T.fog,I=P.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?T.environment:null,ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||V,ne),ie=h[v.type],J=i.precision;v.precision!==null&&(J=i.getMaxPrecision(v.precision),J!==v.precision&&St("WebGLProgram.getParameters:",v.precision,"not supported, using",J,"instead."));let Y=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,O=Y!==void 0?Y.length:0,G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let K,q,ae,fe;if(ie){let je=Zs[ie];K=je.vertexShader,q=je.fragmentShader}else{K=v.vertexShader,q=v.fragmentShader;let je=a.getVertexShaderStage(v),Qt=a.getFragmentShaderStage(v);a.update(v,je,Qt),ae=je.id,fe=Qt.id}let ge=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),Pe=P.isInstancedMesh===!0,Ye=P.isBatchedMesh===!0,Fe=!!v.map,Ze=!!v.matcap,$e=!!te,pe=$e&&te.isPMREMTexture===!0,X=!!v.aoMap,U=!!v.lightMap,se=!!v.bumpMap&&v.wireframe===!1,$=!!v.normalMap,Ce=!!v.displacementMap,Re=!!v.emissiveMap,H=!!v.metalnessMap,me=!!v.roughnessMap,be=v.anisotropy>0,F=v.clearcoat>0,ot=v.diffuseRoughness>0,pt=v.dispersion>0,vt=v.retroreflectivity>0,Ie=v.iridescence>0,A=v.sheen>0,j=v.transmission>0,xe=be&&!!v.anisotropyMap,L=F&&!!v.clearcoatMap,E=F&&!!v.clearcoatNormalMap,Q=F&&!!v.clearcoatRoughnessMap,ve=ot&&!!v.diffuseRoughnessMap,_e=Ie&&!!v.iridescenceMap,Ne=Ie&&!!v.iridescenceThicknessMap,ze=A&&!!v.sheenColorMap,Me=A&&!!v.sheenRoughnessMap,we=!!v.specularMap,Ge=!!v.specularColorMap,W=!!v.specularIntensityMap,Ee=j&&!!v.transmissionMap,ye=j&&!!v.thicknessMap,Be=!!v.gradientMap,He=!!v.alphaMap,Ve=v.alphaTest>0,ut=!!v.alphaHash,Ct=!!v.extensions,re=Ys;v.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(re=n.toneMapping);let Je=pe?te.isCompressedCubeTexture?te.image[0].mipmaps:te.mipmaps:null,Mt={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:q,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:J,batching:Ye,batchingColor:Ye&&P._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&P.instanceColor!==null,instancingMorph:Pe&&P.morphTexture!==null,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Fe,matcap:Ze,envMap:$e,envMapMode:$e&&te.mapping,envMapPMREM:pe,envMapMaxLod:pe?Je.length-1:null,envMapSize:pe?Je[0].width:null,aoMap:X,lightMap:U,bumpMap:se,normalMap:$,displacementMap:Ce,emissiveMap:Re,normalMapObjectSpace:$&&v.normalMapType===Cm,normalMapTangentSpace:$&&v.normalMapType===Cd,packedNormalMap:$&&v.normalMapType===Cd&&vw(v.normalMap.format),metalnessMap:H,roughnessMap:me,anisotropy:be,anisotropyMap:xe,clearcoat:F,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:Q,diffuseRoughness:ot,diffuseRoughnessMap:ve,dispersion:pt,retroreflection:vt,iridescence:Ie,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:A,sheenColorMap:ze,sheenRoughnessMap:Me,specularMap:we,specularColorMap:Ge,specularIntensityMap:W,transmission:j,transmissionMap:Ee,thicknessMap:ye,gradientMap:Be,opaque:v.transparent===!1&&v.blending===qs&&v.alphaToCoverage===!1,alphaMap:He,alphaTest:Ve,alphaHash:ut,combine:v.combine,mapUv:Fe&&f(v.map.channel),aoMapUv:X&&f(v.aoMap.channel),lightMapUv:U&&f(v.lightMap.channel),bumpMapUv:se&&f(v.bumpMap.channel),normalMapUv:$&&f(v.normalMap.channel),displacementMapUv:Ce&&f(v.displacementMap.channel),emissiveMapUv:Re&&f(v.emissiveMap.channel),metalnessMapUv:H&&f(v.metalnessMap.channel),roughnessMapUv:me&&f(v.roughnessMap.channel),anisotropyMapUv:xe&&f(v.anisotropyMap.channel),clearcoatMapUv:L&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&f(v.sheenRoughnessMap.channel),specularMapUv:we&&f(v.specularMap.channel),specularColorMapUv:Ge&&f(v.specularColorMap.channel),specularIntensityMapUv:W&&f(v.specularIntensityMap.channel),transmissionMapUv:Ee&&f(v.transmissionMap.channel),thicknessMapUv:ye&&f(v.thicknessMap.channel),alphaMapUv:He&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($||be),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Fe||He),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&$===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(je=>je.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Fe&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===un,decodeVideoTextureEmissive:Re&&v.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(v.emissiveMap.colorSpace)===un,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===di,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ct&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&v.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function g(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(S,v),x(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let S=h[v.type],D;if(S){let T=Zs[S];D=Ld.clone(T.uniforms)}else D=v.uniforms;return D}function b(v,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new xw(n,S,v,s),c.push(D),u.set(S,D)),D}function y(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function M(v){a.remove(v)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:w}}function bw(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Mw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hg(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,g,m,x){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:x},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=x),e++,_}function l(h,f,p,g,m,x,_){_.reversedDepth===!0&&(m=-m);let b=a(h,f,p,g,m,x);p.transmission>0?i.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(h,f,p,g,m,x){let _=a(h,f,p,g,m,x);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||Mw),i.length>1&&i.sort(f||dg),s.length>1&&s.sort(f||dg)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Sw(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new hg,n.set(i,[o])):s>=r.length?(o=new hg,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ww(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Ew(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Tw=0;function Aw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rw(n){let e=new ww,t=Ew(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,g=0,m=0,x=0,_=0,b=0,y=0,M=0,w=0,v=0,S=0,D=0,T=0;c.sort(Aw);for(let k=0,z=c.length;k<z;k++){let I=c[k],V=I.color,ne=I.intensity,te=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Jr?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*ne,d+=V.g*ne,h+=V.b*ne;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],ne);T++}else if(I.isSunLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,O=t.get(I);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[p]=O,i.sunShadowMap[p]=ie;let G=Y.getViewportCount();for(let K=0;K<G;K++)i.sunShadowMatrix[g+K]=Y.getMatrix(K),i.sunShadowCascade[g+K]=Y._cascadeData[K];g+=G,p++}i.sun[f]=J,f++}else if(I.isDirectionalLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Y=I.shadow,O=t.get(I);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=J,m++}else if(I.isSpotLight){let J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(V).multiplyScalar(ne),J.distance=te,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[_]=J;let Y=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,Y.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=Y.matrix,I.castShadow){let O=t.get(I);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=ie,v++}_++}else if(I.isRectAreaLight){let J=e.get(I);J.color.copy(V).multiplyScalar(ne),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=J,b++}else if(I.isPointLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let Y=I.shadow,O=t.get(I);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=ie,i.pointShadowMatrix[x]=I.shadow.matrix,w++}i.point[x]=J,x++}else if(I.isHemisphereLight){let J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(ne),J.groundColor.copy(I.groundColor).multiplyScalar(ne),i.hemi[y]=J,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=tt.LTC_FLOAT_1,i.rectAreaLTC2=tt.LTC_FLOAT_2):(i.rectAreaLTC1=tt.LTC_HALF_1,i.rectAreaLTC2=tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==x||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==p||P.numDirectionalShadows!==M||P.numPointShadows!==w||P.numSpotShadows!==v||P.numSpotMaps!==S||P.numLightProbes!==T)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=b,i.point.length=x,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=T,P.sunLength=f,P.directionalLength=m,P.pointLength=x,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=p,P.numDirectionalShadows=M,P.numPointShadows=w,P.numSpotShadows=v,P.numSpotMaps=S,P.numLightProbes=T,i.version=Tw++)}function l(c,u){let d=0,h=0,f=0,p=0,g=0,m=0,x=u.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),d++}else if(y.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),h++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),p++}else if(y.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),f++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:i}}function fg(n){let e=new Rw(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Cw(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new fg(n),e.set(s,[a])):r>=o.length?(a=new fg(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iw=`uniform sampler2D shadow_pass;
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
}`,Lw=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Dw=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],pg=new _t,tc=new C,qf=new C;function Nw(n,e,t){let i=new Gr,s=new Ae,r=new Ae,o=new vn,a=new Ru,l=new Cu,c={},u=t.maxTextureSize,d={[$s]:di,[di]:$s,[jt]:jt},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Pw,fragmentShader:Iw}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Vt;p.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new et(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let x=this.type;this.render=function(w,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===cm&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ro);let D=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Co),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let z=x!==this.type;z&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=w.length;I<V;I++){let ne=w[I],te=ne.shadow;if(te===void 0){St("WebGLShadowMap:",ne,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);let ie=te.getFrameExtents();s.multiply(ie),r.copy(te.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,te.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,te.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(te.camera._reversedDepth=J,te.map===null||z===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Da){if(ne.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new ui(s.x,s.y,{format:Jr,type:Pi,minFilter:In,magFilter:In,generateMipmaps:!1}),te.map.texture.name=ne.name+".shadowMap",te.map.depthTexture=new gr(s.x,s.y,as),te.map.depthTexture.name=ne.name+".shadowMapDepth",te.map.depthTexture.format=fr,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=si,te.map.depthTexture.magFilter=si}else ne.isPointLight?(te.map=new ic(s.x),te.map.depthTexture=new Cl(s.x,Ts)):(te.map=new ui(s.x,s.y),te.map.depthTexture=new gr(s.x,s.y,Ts)),te.map.depthTexture.name=ne.name+".shadowMap",te.map.depthTexture.format=fr,this.type===Ro?(te.map.depthTexture.compareFunction=J?Df:Lf,te.map.depthTexture.minFilter=In,te.map.depthTexture.magFilter=In):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=si,te.map.depthTexture.magFilter=si);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==s.x||te.map.height!==s.y)&&te.map.setSize(s.x,s.y);let Y=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();ne.isPointLight!==!0&&te.updateMatrices(ne,S);let O=(te.camera.layers.mask&4294967294)!==0?te.camera.layers:S.layers;for(let G=0;G<Y;G++){let K=te.getCamera(G);if(ne.isPointLight){let q=te.camera,ae=te.matrix,fe=ne.distance||q.far;fe!==q.far&&(q.far=fe,q.updateProjectionMatrix()),tc.setFromMatrixPosition(ne.matrixWorld),q.position.copy(tc),qf.copy(q.position),qf.add(Lw[G]),q.up.copy(Dw[G]),q.lookAt(qf),q.updateMatrixWorld(),ae.makeTranslation(-tc.x,-tc.y,-tc.z),pg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),te._frustum.setFromProjectionMatrix(pg,q.coordinateSystem,q.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)n.setRenderTarget(te.map,G),n.clear();else{G===0&&(n.setRenderTarget(te.map),n.clear());let q=te.getViewport(G);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),k.viewport(o)}i=te.getFrustum(G),y(v,S,K,ne,O,this.type)}te.isPointLightShadow!==!0&&this.type===Da&&_(te,S),te.needsUpdate=!1}x=this.type,m.needsUpdate=!1,n.setRenderTarget(D,T,P)};function _(w,v){let S=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new ui(s.x,s.y,{format:Jr,type:Pi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,S,h,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,S,f,g,null)}function b(w,v,S,D){let T=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=S.isPointLight===!0?l:a,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=T.uuid,z=v.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let V=I[z];V===void 0&&(V=T.clone(),I[z]=V,v.addEventListener("dispose",M)),T=V}if(T.visible=v.visible,T.wireframe=v.wireframe,D===Da?T.side=v.shadowSide!==null?v.shadowSide:v.side:T.side=v.shadowSide!==null?v.shadowSide:d[v.side],T.alphaMap=v.alphaMap,T.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,T.map=v.map,T.clipShadows=v.clipShadows,T.clippingPlanes=v.clippingPlanes,T.clipIntersection=v.clipIntersection,T.displacementMap=v.displacementMap,T.displacementScale=v.displacementScale,T.displacementBias=v.displacementBias,T.wireframeLinewidth=v.wireframeLinewidth,T.linewidth=v.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let k=n.properties.get(T);k.light=S}return T}function y(w,v,S,D,T,P){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Da)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let I=e.update(w),V=w.material;if(Array.isArray(V)){let ne=I.groups;for(let te=0,ie=ne.length;te<ie;te++){let J=ne[te],Y=V[J.materialIndex];if(Y&&Y.visible){let O=b(w,Y,D,P);w.onBeforeShadow(n,w,v,S,I,O,J),n.renderBufferDirect(S,null,I,O,w,J),w.onAfterShadow(n,w,v,S,I,O,J)}}}else if(V.visible){let ne=b(w,V,D,P);w.onBeforeShadow(n,w,v,S,I,ne,null),n.renderBufferDirect(S,null,I,ne,w,null),w.onAfterShadow(n,w,v,S,I,ne,null)}}let z=w.children;for(let I=0,V=z.length;I<V;I++)y(z[I],v,S,D,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(let S in c){let D=c[S],T=w.target.uuid;T in D&&(D[T].dispose(),delete D[T])}}}function Ow(n,e){function t(){let W=!1,Ee=new vn,ye=null,Be=new vn(0,0,0,0);return{setMask:function(He){ye!==He&&!W&&(n.colorMask(He,He,He,He),ye=He)},setLocked:function(He){W=He},setClear:function(He,Ve,ut,Ct,re){re===!0&&(He*=Ct,Ve*=Ct,ut*=Ct),Ee.set(He,Ve,ut,Ct),Be.equals(Ee)===!1&&(n.clearColor(He,Ve,ut,Ct),Be.copy(Ee))},reset:function(){W=!1,ye=null,Be.set(-1,0,0,0)}}}function i(){let W=!1,Ee=!1,ye=null,Be=null,He=null;return{setReversed:function(Ve){if(Ee!==Ve){let ut=e.get("EXT_clip_control");Ve?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Ee=Ve;let Ct=He;He=null,this.setClear(Ct)}},getReversed:function(){return Ee},setTest:function(Ve){Ve?oe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(Ve){ye!==Ve&&!W&&(n.depthMask(Ve),ye=Ve)},setFunc:function(Ve){if(Ee&&(Ve=Bm[Ve]),Be!==Ve){switch(Ve){case au:n.depthFunc(n.NEVER);break;case lu:n.depthFunc(n.ALWAYS);break;case cu:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case uu:n.depthFunc(n.EQUAL);break;case du:n.depthFunc(n.GEQUAL);break;case hu:n.depthFunc(n.GREATER);break;case fu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Be=Ve}},setLocked:function(Ve){W=Ve},setClear:function(Ve){He!==Ve&&(He=Ve,Ee&&(Ve=1-Ve),n.clearDepth(Ve))},reset:function(){W=!1,ye=null,Be=null,He=null,Ee=!1}}}function s(){let W=!1,Ee=null,ye=null,Be=null,He=null,Ve=null,ut=null,Ct=null,re=null;return{setTest:function(Je){W||(Je?oe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Je){Ee!==Je&&!W&&(n.stencilMask(Je),Ee=Je)},setFunc:function(Je,Mt,je){(ye!==Je||Be!==Mt||He!==je)&&(n.stencilFunc(Je,Mt,je),ye=Je,Be=Mt,He=je)},setOp:function(Je,Mt,je){(Ve!==Je||ut!==Mt||Ct!==je)&&(n.stencilOp(Je,Mt,je),Ve=Je,ut=Mt,Ct=je)},setLocked:function(Je){W=Je},setClear:function(Je){re!==Je&&(n.clearStencil(Je),re=Je)},reset:function(){W=!1,Ee=null,ye=null,Be=null,He=null,Ve=null,ut=null,Ct=null,re=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ke(0,0,0),D=0,T=!1,P=null,k=null,z=null,I=null,V=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ie=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(J)[1]),te=ie>=1):J.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),te=ie>=2);let Y=null,O={},G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),q=new vn().fromArray(G),ae=new vn().fromArray(K);function fe(W,Ee,ye,Be){let He=new Uint8Array(4),Ve=n.createTexture();n.bindTexture(W,Ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<ye;ut++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,He):n.texImage2D(Ee+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,He);return Ve}let ge={};ge[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(xa),se(!1),$(pf),oe(n.CULL_FACE),X(Co);function oe(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function Pe(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function Ye(W,Ee){return h[W]!==Ee?(n.bindFramebuffer(W,Ee),h[W]=Ee,W===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),W===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Fe(W,Ee){let ye=p,Be=!1;if(W){ye=f.get(Ee),ye===void 0&&(ye=[],f.set(Ee,ye));let He=W.textures;if(ye.length!==He.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let Ve=0,ut=He.length;Ve<ut;Ve++)ye[Ve]=n.COLOR_ATTACHMENT0+Ve;ye.length=He.length,Be=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Be=!0);Be&&n.drawBuffers(ye)}function Ze(W){return g!==W?(n.useProgram(W),g=W,!0):!1}let $e={[Po]:n.FUNC_ADD,[um]:n.FUNC_SUBTRACT,[dm]:n.FUNC_REVERSE_SUBTRACT};$e[hm]=n.MIN,$e[fm]=n.MAX;let pe={[Gu]:n.ZERO,[Kr]:n.ONE,[pm]:n.SRC_COLOR,[xf]:n.SRC_ALPHA,[_m]:n.SRC_ALPHA_SATURATE,[ym]:n.DST_COLOR,[gm]:n.DST_ALPHA,[mm]:n.ONE_MINUS_SRC_COLOR,[Zr]:n.ONE_MINUS_SRC_ALPHA,[vm]:n.ONE_MINUS_DST_COLOR,[xm]:n.ONE_MINUS_DST_ALPHA,[bm]:n.CONSTANT_COLOR,[Mm]:n.ONE_MINUS_CONSTANT_COLOR,[Sm]:n.CONSTANT_ALPHA,[wm]:n.ONE_MINUS_CONSTANT_ALPHA};function X(W,Ee,ye,Be,He,Ve,ut,Ct,re,Je){if(W===Co){m===!0&&(Pe(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),W!==Na){if(W!==x||Je!==T){if((_!==Po||M!==Po)&&(n.blendEquation(n.FUNC_ADD),_=Po,M=Po),Je)switch(W){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nn:n.blendFunc(n.ONE,n.ONE);break;case mf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",W);break}else switch(W){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mf:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gf:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",W);break}b=null,y=null,w=null,v=null,S.set(0,0,0),D=0,x=W,T=Je}return}He=He||Ee,Ve=Ve||ye,ut=ut||Be,(Ee!==_||He!==M)&&(n.blendEquationSeparate($e[Ee],$e[He]),_=Ee,M=He),(ye!==b||Be!==y||Ve!==w||ut!==v)&&(n.blendFuncSeparate(pe[ye],pe[Be],pe[Ve],pe[ut]),b=ye,y=Be,w=Ve,v=ut),(Ct.equals(S)===!1||re!==D)&&(n.blendColor(Ct.r,Ct.g,Ct.b,re),S.copy(Ct),D=re),x=W,T=!1}function U(W,Ee){W.side===jt?Pe(n.CULL_FACE):oe(n.CULL_FACE);let ye=W.side===di;Ee&&(ye=!ye),se(ye),W.blending===qs&&W.transparent===!1?X(Co):X(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Be=W.stencilWrite;a.setTest(Be),Be&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Re(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){P!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),P=W)}function $(W){W!==am?(oe(n.CULL_FACE),W!==k&&(W===pf?n.cullFace(n.BACK):W===lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),k=W}function Ce(W){W!==z&&(te&&n.lineWidth(W),z=W)}function Re(W,Ee,ye){W?(oe(n.POLYGON_OFFSET_FILL),(I!==Ee||V!==ye)&&(I=Ee,V=ye,o.getReversed()&&(Ee=-Ee,ye=-ye),n.polygonOffset(Ee,ye))):Pe(n.POLYGON_OFFSET_FILL)}function H(W){W?oe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function me(W){W===void 0&&(W=n.TEXTURE0+ne-1),Y!==W&&(n.activeTexture(W),Y=W)}function be(W,Ee,ye){ye===void 0&&(Y===null?ye=n.TEXTURE0+ne-1:ye=Y);let Be=O[ye];Be===void 0&&(Be={type:void 0,texture:void 0},O[ye]=Be),(Be.type!==W||Be.texture!==Ee)&&(Y!==ye&&(n.activeTexture(ye),Y=ye),n.bindTexture(W,Ee||ge[W]),Be.type=W,Be.texture=Ee)}function F(){let W=O[Y];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function vt(){try{n.texSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Ie(){try{n.texSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function A(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function xe(){try{n.texStorage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function L(){try{n.texStorage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function E(){try{n.texImage2D(...arguments)}catch(W){Et("WebGLState:",W)}}function Q(){try{n.texImage3D(...arguments)}catch(W){Et("WebGLState:",W)}}function ve(W){return d[W]!==void 0?d[W]:n.getParameter(W)}function _e(W,Ee){d[W]!==Ee&&(n.pixelStorei(W,Ee),d[W]=Ee)}function Ne(W){q.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function ze(W){ae.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ae.copy(W))}function Me(W,Ee){let ye=c.get(Ee);ye===void 0&&(ye=new WeakMap,c.set(Ee,ye));let Be=ye.get(W);Be===void 0&&(Be=n.getUniformBlockIndex(Ee,W.name),n.uniformBlockBinding(Ee,Be,Be),ye.set(W,Be))}function we(W,Ee,ye){let He=c.get(Ee).get(W);l[He]!==ye&&(n.bindBufferBase(n.UNIFORM_BUFFER,He,ye),l[He]=ye)}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,O={},h={},l={},f=new WeakMap,p=[],g=null,m=!1,x=null,_=null,b=null,y=null,M=null,w=null,v=null,S=new ke(0,0,0),D=0,T=!1,P=null,k=null,z=null,I=null,V=null,q.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Pe,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:Ze,setBlending:X,setMaterial:U,setFlipSided:se,setCullFace:$,setLineWidth:Ce,setPolygonOffset:Re,setScissorTest:H,activeTexture:me,bindTexture:be,unbindTexture:F,compressedTexImage2D:ot,compressedTexImage3D:pt,texImage2D:E,texImage3D:Q,pixelStorei:_e,getParameter:ve,updateUBOMapping:Me,uniformBlockBinding:we,texStorage2D:xe,texStorage3D:L,texSubImage2D:vt,texSubImage3D:Ie,compressedTexSubImage2D:A,compressedTexSubImage3D:j,scissor:Ne,viewport:ze,reset:Ge}}function kw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,g=new FinalizationRegistry(L=>p.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return m?new OffscreenCanvas(L,E):vl("canvas")}function _(L,E,Q){let ve=1,_e=xe(L);if((_e.width>Q||_e.height>Q)&&(ve=Q/Math.max(_e.width,_e.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Ne=Math.floor(ve*_e.width),ze=Math.floor(ve*_e.height);h===void 0&&(h=x(Ne,ze));let Me=E?x(Ne,ze):h;return Me.width=Ne,Me.height=ze,Me.getContext("2d").drawImage(L,0,0,Ne,ze),St("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ne+"x"+ze+")."),Me}else return"data"in L&&St("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function b(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(L,E,Q,ve,_e,Ne=!1){if(L!==null){if(n[L]!==void 0)return n[L];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ze;ve&&(ze=e.get("EXT_texture_norm16"),ze||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Me=E;if(E===n.RED&&(Q===n.FLOAT&&(Me=n.R32F),Q===n.HALF_FLOAT&&(Me=n.R16F),Q===n.UNSIGNED_BYTE&&(Me=n.R8),Q===n.UNSIGNED_SHORT&&ze&&(Me=ze.R16_EXT),Q===n.SHORT&&ze&&(Me=ze.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(Me=n.R8UI),Q===n.UNSIGNED_SHORT&&(Me=n.R16UI),Q===n.UNSIGNED_INT&&(Me=n.R32UI),Q===n.BYTE&&(Me=n.R8I),Q===n.SHORT&&(Me=n.R16I),Q===n.INT&&(Me=n.R32I)),E===n.RG&&(Q===n.FLOAT&&(Me=n.RG32F),Q===n.HALF_FLOAT&&(Me=n.RG16F),Q===n.UNSIGNED_BYTE&&(Me=n.RG8),Q===n.UNSIGNED_SHORT&&ze&&(Me=ze.RG16_EXT),Q===n.SHORT&&ze&&(Me=ze.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(Me=n.RG8UI),Q===n.UNSIGNED_SHORT&&(Me=n.RG16UI),Q===n.UNSIGNED_INT&&(Me=n.RG32UI),Q===n.BYTE&&(Me=n.RG8I),Q===n.SHORT&&(Me=n.RG16I),Q===n.INT&&(Me=n.RG32I)),E===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(Me=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(Me=n.RGB16UI),Q===n.UNSIGNED_INT&&(Me=n.RGB32UI),Q===n.BYTE&&(Me=n.RGB8I),Q===n.SHORT&&(Me=n.RGB16I),Q===n.INT&&(Me=n.RGB32I)),E===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(Me=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(Me=n.RGBA16UI),Q===n.UNSIGNED_INT&&(Me=n.RGBA32UI),Q===n.BYTE&&(Me=n.RGBA8I),Q===n.SHORT&&(Me=n.RGBA16I),Q===n.INT&&(Me=n.RGBA32I)),E===n.RGB&&(Q===n.UNSIGNED_SHORT&&ze&&(Me=ze.RGB16_EXT),Q===n.SHORT&&ze&&(Me=ze.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(Me=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(Me=n.R11F_G11F_B10F)),E===n.RGBA){let we=Ne?yl:Yt.getTransfer(_e);Q===n.FLOAT&&(Me=n.RGBA32F),Q===n.HALF_FLOAT&&(Me=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(Me=we===un?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&ze&&(Me=ze.RGBA16_EXT),Q===n.SHORT&&ze&&(Me=ze.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(Me=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(Me=n.RGB5_A1)}return(Me===n.R16F||Me===n.R32F||Me===n.RG16F||Me===n.RG32F||Me===n.RGBA16F||Me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function v(L,E){let Q;return L?E===null||E===Ts||E===Lo?Q=n.DEPTH24_STENCIL8:E===as?Q=n.DEPTH32F_STENCIL8:E===ka&&(Q=n.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ts||E===Lo?Q=n.DEPTH_COMPONENT24:E===as?Q=n.DEPTH_COMPONENT32F:E===ka&&(Q=n.DEPTH_COMPONENT16),Q}function S(L,E){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==si&&L.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function D(L){let E=new WeakRef(L);i.get(L).__ref=E,p.add(E),g.register(L,E,E)}function T(L){let E=i.get(L).__ref;E!==void 0&&(p.delete(E),g.unregister(E))}function P(L){z(L.target)}function k(L){I(L.target)}function z(L){L.removeEventListener("dispose",P),T(L),ne(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&d.delete(L)}function I(L){L.removeEventListener("dispose",k),T(L),ie(L)}function V(){for(let L of p){let E=L.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):z(E))}p.clear(),d.clear()}function ne(L){let E=i.get(L);if(E.__webglInit===void 0)return;let Q=L.source,ve=f.get(Q);if(ve){let _e=ve[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&te(L),Object.keys(ve).length===0&&f.delete(Q)}i.remove(L)}function te(L){let E=i.get(L);n.deleteTexture(E.__webglTexture);let Q=L.source,ve=f.get(Q);delete ve[E.__cacheKey],o.memory.textures--}function ie(L){let E=i.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();let Q=L.depthTexture;if(Q&&Q.renderTarget===L&&z(Q),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ne=0;Ne<E.__webglFramebuffer[_e].length;Ne++)n.deleteFramebuffer(E.__webglFramebuffer[_e][Ne]);else n.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)n.deleteFramebuffer(E.__webglFramebuffer[_e]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ve=L.textures;for(let _e=0,Ne=ve.length;_e<Ne;_e++){let ze=i.get(ve[_e]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(ve[_e])}i.remove(L)}let J=0;function Y(){J=0}function O(){return J}function G(L){J=L}function K(){let L=J;return L>=s.maxTextures&&St("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,L}function q(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ae(L,E){let Q=i.get(L);if(L.isVideoTexture&&A(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){let ve=L.image;if(ve===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{U(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+E)}function fe(L,E){let Q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){U(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+E)}function ge(L,E){let Q=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){U(Q,L,E);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+E)}function oe(L,E){let Q=i.get(L);if(L.version>0&&Q.__version!==L.version){se(Q,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+E)}let Pe={[hr]:n.REPEAT,[Gs]:n.CLAMP_TO_EDGE,[pu]:n.MIRRORED_REPEAT},Ye={[si]:n.NEAREST,[Am]:n.NEAREST_MIPMAP_NEAREST,[Yl]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Xu]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},Fe={[Im]:n.NEVER,[Nf]:n.ALWAYS,[Lm]:n.LESS,[Lf]:n.LEQUAL,[Dm]:n.EQUAL,[Df]:n.GEQUAL,[Nm]:n.GREATER,[Om]:n.NOTEQUAL};function Ze(L,E){if(E.type===as&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===Xu||E.magFilter===Yl||E.magFilter===Es||E.minFilter===In||E.minFilter===Xu||E.minFilter===Yl||E.minFilter===Es)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,Pe[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,Pe[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,Pe[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Ye[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Ye[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===si||E.minFilter!==Yl&&E.minFilter!==Es||E.type===as&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function $e(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P),D(E));let ve=E.source,_e=f.get(ve);_e===void 0&&(_e={},f.set(ve,_e));let Ne=q(E);if(Ne!==L.__cacheKey){_e[Ne]===void 0&&(_e[Ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),_e[Ne].usedTimes++;let ze=_e[L.__cacheKey];ze!==void 0&&(_e[L.__cacheKey].usedTimes--,ze.usedTimes===0&&te(E)),L.__cacheKey=Ne,L.__webglTexture=_e[Ne].texture}return Q}function pe(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function X(L,E,Q,ve){let Ne=L.updateRanges;if(Ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Q,ve,E.data);else{Ne.sort((W,Ee)=>W.start-Ee.start);let ze=0;for(let W=1;W<Ne.length;W++){let Ee=Ne[ze],ye=Ne[W],Be=Ee.start+Ee.count,He=pe(ye.start,E.width,4),Ve=pe(Ee.start,E.width,4);ye.start<=Be+1&&He===Ve&&pe(ye.start+ye.count-1,E.width,4)===He?Ee.count=Math.max(Ee.count,ye.start+ye.count-Ee.start):(++ze,Ne[ze]=ye)}Ne.length=ze+1;let Me=t.getParameter(n.UNPACK_ROW_LENGTH),we=t.getParameter(n.UNPACK_SKIP_PIXELS),Ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let W=0,Ee=Ne.length;W<Ee;W++){let ye=Ne[W],Be=Math.floor(ye.start/4),He=Math.ceil(ye.count/4),Ve=Be%E.width,ut=Math.floor(Be/E.width),Ct=He,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(n.UNPACK_SKIP_ROWS,ut),t.texSubImage2D(n.TEXTURE_2D,0,Ve,ut,Ct,re,Q,ve,E.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,we),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ge)}}function U(L,E,Q){let ve=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=n.TEXTURE_3D);let _e=$e(L,E),Ne=E.source;t.bindTexture(ve,L.__webglTexture,n.TEXTURE0+Q);let ze=i.get(Ne);if(Ne.version!==ze.__version||_e===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let re=Yt.getPrimaries(Yt.workingColorSpace),Je=E.colorSpace===_r?null:Yt.getPrimaries(E.colorSpace),Mt=E.colorSpace===_r||re===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let we=_(E.image,!1,s.maxTextureSize);we=j(E,we);let Ge=r.convert(E.format,E.colorSpace),W=r.convert(E.type),Ee=w(E.internalFormat,Ge,W,E.normalized,E.colorSpace,E.isVideoTexture);Ze(ve,E);let ye,Be=E.mipmaps,He=E.isVideoTexture!==!0,Ve=ze.__version===void 0||_e===!0,ut=Ne.dataReady,Ct=S(E,we);if(E.isDepthTexture)Ee=v(E.format===vr,E.type),Ve&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ee,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,Ee,we.width,we.height,0,Ge,W,null));else if(E.isDataTexture)if(Be.length>0){He&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,Ee,Be[0].width,Be[0].height);for(let re=0,Je=Be.length;re<Je;re++)ye=Be[re],He?ut&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ge,W,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Ge,W,ye.data);E.generateMipmaps=!1}else He?(Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,Ee,we.width,we.height),ut&&X(E,we,Ge,W)):t.texImage2D(n.TEXTURE_2D,0,Ee,we.width,we.height,0,Ge,W,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ee,Be[0].width,Be[0].height,we.depth);for(let re=0,Je=Be.length;re<Je;re++)if(ye=Be[re],E.format!==As)if(Ge!==null)if(He){if(ut)if(E.layerUpdates.size>0){let Mt=Xf(ye.width,ye.height,E.format,E.type);for(let je of E.layerUpdates){let Qt=ye.data.subarray(je*Mt/ye.data.BYTES_PER_ELEMENT,(je+1)*Mt/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,je,ye.width,ye.height,1,Ge,Qt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,we.depth,Ge,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,we.depth,0,ye.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?ut&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ye.width,ye.height,we.depth,Ge,W,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ee,ye.width,ye.height,we.depth,0,Ge,W,ye.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{He&&Ve&&t.texStorage2D(n.TEXTURE_2D,Ct,Ee,Be[0].width,Be[0].height);for(let re=0,Je=Be.length;re<Je;re++)ye=Be[re],E.format!==As?Ge!==null?He?ut&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,ye.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?ut&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ye.width,ye.height,Ge,W,ye.data):t.texImage2D(n.TEXTURE_2D,re,Ee,ye.width,ye.height,0,Ge,W,ye.data)}else if(E.isDataArrayTexture)if(He){if(Ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ee,we.width,we.height,we.depth),ut)if(E.layerUpdates.size>0){let re=Xf(we.width,we.height,E.format,E.type);for(let Je of E.layerUpdates){let Mt=we.data.subarray(Je*re/we.data.BYTES_PER_ELEMENT,(Je+1)*re/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Je,we.width,we.height,1,Ge,W,Mt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ge,W,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,we.width,we.height,we.depth,0,Ge,W,we.data);else if(E.isData3DTexture)He?(Ve&&t.texStorage3D(n.TEXTURE_3D,Ct,Ee,we.width,we.height,we.depth),ut&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ge,W,we.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,we.width,we.height,we.depth,0,Ge,W,we.data);else if(E.isFramebufferTexture){if(Ve)if(He)t.texStorage2D(n.TEXTURE_2D,Ct,Ee,we.width,we.height);else{let re=we.width,Je=we.height;for(let Mt=0;Mt<Ct;Mt++)t.texImage2D(n.TEXTURE_2D,Mt,Ee,re,Je,0,Ge,W,null),re>>=1,Je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),we.parentNode!==re){re.appendChild(we),d.add(E),re.onpaint=Je=>{let Mt=Je.changedElements;for(let je of d)Mt.includes(je.image)&&(je.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,we);else{let Mt=n.RGBA,je=n.RGBA,Qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Mt,je,Qt,we)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(He&&Ve){let re=xe(Be[0]);t.texStorage2D(n.TEXTURE_2D,Ct,Ee,re.width,re.height)}for(let re=0,Je=Be.length;re<Je;re++)ye=Be[re],He?ut&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Ge,W,ye):t.texImage2D(n.TEXTURE_2D,re,Ee,Ge,W,ye);E.generateMipmaps=!1}else if(He){if(Ve){let re=xe(we);t.texStorage2D(n.TEXTURE_2D,Ct,Ee,re.width,re.height)}ut&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,W,we)}else t.texImage2D(n.TEXTURE_2D,0,Ee,Ge,W,we);b(E)&&E.mipmapsAutoUpdate===!0&&y(ve),ze.__version=Ne.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,Q){if(E.image.length!==6)return;let ve=$e(L,E),_e=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Q);let Ne=i.get(_e);if(_e.version!==Ne.__version||ve===!0){t.activeTexture(n.TEXTURE0+Q);let ze=Yt.getPrimaries(Yt.workingColorSpace),Me=E.colorSpace===_r?null:Yt.getPrimaries(E.colorSpace),we=E.colorSpace===_r||ze===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,W=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let je=0;je<6;je++)!Ge&&!W?Ee[je]=_(E.image[je],!0,s.maxCubemapSize):Ee[je]=W?E.image[je].image:E.image[je],Ee[je]=j(E,Ee[je]);let ye=Ee[0],Be=r.convert(E.format,E.colorSpace),He=r.convert(E.type),Ve=w(E.internalFormat,Be,He,E.normalized,E.colorSpace),ut=E.isVideoTexture!==!0,Ct=Ne.__version===void 0||ve===!0,re=_e.dataReady,Je=S(E,ye);Ze(n.TEXTURE_CUBE_MAP,E);let Mt;if(E.isDepthTexture){if(Ve=v(E.format===vr,E.type),Ct)if(ut)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,Ve,ye.width,ye.height);else for(let je=0;je<6;je++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ve,ye.width,ye.height,0,Be,He,null)}else if(Ge){ut&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Ve,ye.width,ye.height);for(let je=0;je<6;je++){Mt=Ee[je].mipmaps;for(let Qt=0;Qt<Mt.length;Qt++){let Rn=Mt[Qt];E.format!==As?Be!==null?ut?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt,0,0,Rn.width,Rn.height,Be,Rn.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt,Ve,Rn.width,Rn.height,0,Rn.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt,0,0,Rn.width,Rn.height,Be,He,Rn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt,Ve,Rn.width,Rn.height,0,Be,He,Rn.data)}}}else{if(Mt=E.mipmaps,ut&&Ct){Mt.length>0&&Je++;let je=xe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Je,Ve,je.width,je.height)}for(let je=0;je<6;je++)if(W){ut?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Ee[je].width,Ee[je].height,Be,He,Ee[je].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ve,Ee[je].width,Ee[je].height,0,Be,He,Ee[je].data);for(let Qt=0;Qt<Mt.length;Qt++){let ai=Mt[Qt].image[je].image;ut?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt+1,0,0,ai.width,ai.height,Be,He,ai.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt+1,Ve,ai.width,ai.height,0,Be,He,ai.data)}}else{ut?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Be,He,Ee[je]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ve,Be,He,Ee[je]);for(let Qt=0;Qt<Mt.length;Qt++){let Rn=Mt[Qt];ut?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt+1,0,0,Be,He,Rn.image[je]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+je,Qt+1,Ve,Be,He,Rn.image[je])}}}b(E)&&E.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),Ne.__version=_e.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function $(L,E,Q,ve,_e,Ne){let ze=r.convert(Q.format,Q.colorSpace),Me=r.convert(Q.type),we=w(Q.internalFormat,ze,Me,Q.normalized,Q.colorSpace),Ge=i.get(E),W=i.get(Q);if(W.__renderTarget=E,!Ge.__hasExternalTextures){let Ee=Math.max(1,E.width>>Ne),ye=Math.max(1,E.height>>Ne);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ne,we,Ee,ye,E.depth,0,ze,Me,null):t.texImage2D(_e,Ne,we,Ee,ye,0,ze,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ie(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,_e,W.__webglTexture,0,vt(E)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,_e,W.__webglTexture,Ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(L,E,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){let ve=E.depthTexture,_e=ve&&ve.isDepthTexture?ve.type:null,Ne=v(E.stencilBuffer,_e),ze=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(E),Ne,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(E),Ne,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ze,n.RENDERBUFFER,L)}else{let ve=E.textures;for(let _e=0;_e<ve.length;_e++){let Ne=ve[_e],ze=r.convert(Ne.format,Ne.colorSpace),Me=r.convert(Ne.type),we=w(Ne.internalFormat,ze,Me,Ne.normalized,Ne.colorSpace);Ie(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(E),we,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(E),we,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,we,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(L,E,Q){let ve=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _e=i.get(E.depthTexture);_e.__renderTarget=E;let Ne=ve?E.depthTexture.image[0]:E.depthTexture.image;(!_e.__webglTexture||Ne.width!==E.width||Ne.height!==E.height)&&(Ne.width=E.width,Ne.height=E.height,E.depthTexture.needsUpdate=!0),ve?oe(E.depthTexture,0):ae(E.depthTexture,0);let ze=_e.__webglTexture,Me=vt(E),we=ve?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,Ge=E.depthTexture.format===vr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===fr)Ie(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ge,we,ze,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ge,we,ze,0);else if(E.depthTexture.format===vr)Ie(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ge,we,ze,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Ge,we,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(L){let E=i.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ve=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){let _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",_e)};ve.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=ve}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ve=0;ve<6;ve++)Re(E.__webglFramebuffer[ve],L,ve);else L.texture.mipmaps.length>0?Re(E.__webglFramebuffer[0],L,0):Re(E.__webglFramebuffer,L,0);else if(Q){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[ve],L,!1);else{let _e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer[ve];n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,Ne)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,L,!1);else{let _e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,Ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(L,E,Q){let ve=i.get(L);E!==void 0&&$(ve.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&H(L)}function be(L){let E=L.texture,Q=i.get(L),ve=i.get(E);L.addEventListener("dispose",k),D(L);let _e=L.textures,Ne=L.isWebGLCubeRenderTarget===!0,ze=_e.length>1;if(ze||(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=E.version,o.memory.textures++),Ne){Q.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(E.mipmaps.length>0){Q.__webglFramebuffer[Me]=[];for(let we=0;we<E.mipmaps.length;we++)Q.__webglFramebuffer[Me][we]=n.createFramebuffer()}else Q.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)Q.__webglFramebuffer[Me]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(ze)for(let Me=0,we=_e.length;Me<we;Me++){let Ge=i.get(_e[Me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Ie(L)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let we=_e[Me];Q.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[Me]);let Ge=r.convert(we.format,we.colorSpace),W=r.convert(we.type),Ee=w(we.internalFormat,Ge,W,we.normalized,we.colorSpace,L.isXRRenderTarget===!0),ye=vt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Ee,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Q.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,E);for(let Me=0;Me<6;Me++)if(E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)$(Q.__webglFramebuffer[Me][we],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we);else $(Q.__webglFramebuffer[Me],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);b(E)?y(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ze){for(let Me=0,we=_e.length;Me<we;Me++){let Ge=_e[Me],W=i.get(Ge),Ee=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,W.__webglTexture),Ze(Ee,Ge),$(Q.__webglFramebuffer,L,Ge,n.COLOR_ATTACHMENT0+Me,Ee,0),b(Ge)&&y(Ee)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ve.__webglTexture),Ze(Me,E),E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)$(Q.__webglFramebuffer[we],L,E,n.COLOR_ATTACHMENT0,Me,we);else $(Q.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Me,0);b(E)?y(Me):E.mipmaps.length>0&&n.texParameteri(Me,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&H(L)}function F(L){let E=L.textures;for(let Q=0,ve=E.length;Q<ve;Q++){let _e=E[Q];if(b(_e)&&_e.mipmapsAutoUpdate===!0){let Ne=M(L),ze=i.get(_e).__webglTexture;t.bindTexture(Ne,ze),y(Ne),t.unbindTexture()}}}let ot=[];function pt(L){if(L.samples>0){if(Ie(L)===!1){let E=L.textures,Q=L.width,ve=L.height,_e=n.COLOR_BUFFER_BIT,Ne=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ze=i.get(L),Me=E.length>1;if(Me)for(let Ge=0;Ge<E.length;Ge++)t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ge=0;Ge<E.length;Ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let W=i.get(E[Ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,W,0)}n.blitFramebuffer(0,0,Q,ve,0,0,Q,ve,_e,n.NEAREST),l===!0&&(ot.length=0,ot.push(n.COLOR_ATTACHMENT0+Ge),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ot.push(Ne),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ge=0;Ge<E.length;Ge++){t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);let W=i.get(E[Ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ze.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ge,n.TEXTURE_2D,W,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function vt(L){return Math.min(s.maxSamples,L.samples)}function Ie(L){let E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function A(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function j(L,E){let Q=L.colorSpace,ve=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==xl&&Q!==_r&&(Yt.getTransfer(Q)===un?(ve!==As||_e!==Fi)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),E}function xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=G,this.setTexture2D=ae,this.setTexture2DArray=fe,this.setTexture3D=ge,this.setTextureCube=oe,this.rebindTextures=me,this.setupRenderTarget=be,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Ie,this.dispose=V}function Fw(n,e){function t(i,s=_r){let r,o=Yt.getTransfer(s);if(i===Fi)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tf)return n.BYTE;if(i===Af)return n.SHORT;if(i===ka)return n.UNSIGNED_SHORT;if(i===$u)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===as)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Pf)return n.ALPHA;if(i===If)return n.RGB;if(i===As)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===Ku)return n.RED;if(i===Zu)return n.RED_INTEGER;if(i===Jr)return n.RG;if(i===Ju)return n.RG_INTEGER;if(i===ju)return n.RGBA_INTEGER;if(i===Kl||i===Zl||i===Jl||i===jl)if(o===un)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qu||i===ed||i===td||i===nd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ed)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===id||i===sd||i===rd||i===od||i===ad||i===Ql||i===ld)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===id||i===sd)return o===un?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===od)return r.COMPRESSED_R11_EAC;if(i===ad)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ql)return r.COMPRESSED_RG11_EAC;if(i===ld)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cd||i===ud||i===dd||i===hd||i===fd||i===pd||i===md||i===gd||i===xd||i===yd||i===vd||i===_d||i===bd||i===Md)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_d)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bd)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return o===un?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sd||i===wd||i===Ed)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sd)return o===un?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ed)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===Ad||i===ec||i===Rd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Td)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
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

}`,ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Pl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dn({vertexShader:Uw,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new yt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tp=class extends Ms{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new ep,x={},_=t.getContextAttributes(),b=null,y=null,M=[],w=[],v=new Ae,S=null,D=null,T=new ni;T.viewport=new vn;let P=new ni;P.viewport=new vn;let k=[T,P],z=new Hu,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=M[q];return ae===void 0&&(ae=new Sa,M[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=M[q];return ae===void 0&&(ae=new Sa,M[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=M[q];return ae===void 0&&(ae=new Sa,M[q]=ae),ae.getHandSpace()};function ne(q){let ae=w.indexOf(q.inputSource);if(ae===-1)return;let fe=M[ae];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function te(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<M.length;q++){let ae=w[q];ae!==null&&(w[q]=null,M[q].disconnect(ae))}I=null,V=null,m.reset();for(let q in x)delete x[q];if(e.setRenderTarget(b),f=null,h=null,d=null,s=null,y=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),D!==null){let q=D.camera;q.fov=D.fov,q.zoom=D.zoom,q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ge=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?vr:fr,ge=_.stencil?Lo:Ts);let Pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ui(h.textureWidth,h.textureHeight,{format:As,type:Fi,depthTexture:new gr(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ui(f.framebufferWidth,f.framebufferHeight,{format:As,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(q){for(let ae=0;ae<q.removed.length;ae++){let fe=q.removed[ae],ge=w.indexOf(fe);ge>=0&&(w[ge]=null,M[ge].disconnect(fe))}for(let ae=0;ae<q.added.length;ae++){let fe=q.added[ae],ge=w.indexOf(fe);if(ge===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=w.length){w.push(fe),ge=Pe;break}else if(w[Pe]===null){w[Pe]=fe,ge=Pe;break}if(ge===-1)break}let oe=M[ge];oe&&oe.connect(fe)}}function J(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ae=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),z.near=P.near=T.near=ae,z.far=P.far=T.far=fe,(I!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,V=z.far),z.layers.mask=q.layers.mask|6,T.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let ge=q.parent,oe=z.cameras;J(z,ge);for(let Pe=0;Pe<oe.length;Pe++)J(oe[Pe],ge);z.projectionMatrix.copy(T.projectionMatrix),z.projectionMatrixInverse.copy(T.projectionMatrixInverse),D===null&&q.isPerspectiveCamera&&(D={camera:q,fov:q.fov,zoom:q.zoom}),Y(q,z,ge)};function Y(q,ae,fe){fe===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return x[q]};let O=null;function G(q,ae){if(u=ae.getViewerPose(c||o),p=ae,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ge=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,ge=!0);for(let Fe=0;Fe<fe.length;Fe++){let Ze=fe[Fe],$e=null;if(f!==null)$e=f.getViewport(Ze);else{let X=d.getViewSubImage(h,Ze);$e=X.viewport,Fe===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let pe=k[Fe];pe===void 0&&(pe=new ni,pe.layers.enable(Fe),pe.viewport=new vn,k[Fe]=pe),pe.matrix.fromArray(Ze.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ze.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set($e.x,$e.y,$e.width,$e.height),Fe===0&&(z.matrix.copy(pe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ge===!0&&z.cameras.push(pe)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();let Fe=d.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(oe&&oe.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let Fe=0;Fe<fe.length;Fe++){let Ze=fe[Fe].camera;if(Ze){let $e=x[Ze];$e||($e=new Pl,x[Ze]=$e);let pe=d.getCameraImage(Ze);$e.sourceTexture=pe}}}}for(let fe=0;fe<M.length;fe++){let ge=w[fe],oe=M[fe];ge!==null&&oe!==void 0&&oe.update(ge,ae,c||o)}O&&O(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),p=null}let K=new mg;K.setAnimationLoop(G),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}},zw=new _t,Eg=new Pt;Eg.set(-1,0,0,0,1,0,0,0,1);function Hw(n,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function i(m,x){x.color.getRGB(m.fogColor.value,Gf(n)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,_,b,y){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),d(m,x)):x.isMeshPhongMaterial?(r(m,x),u(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),h(m,x),x.isMeshPhysicalMaterial&&f(m,x,y)):x.isMeshMatcapMaterial?(r(m,x),p(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),g(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?l(m,x,_,b):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===di&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===di&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let _=e.get(x),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eg),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,_,b){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*_,m.scale.value=b*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function u(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function d(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function h(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,_){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===di&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,x){x.matcap&&(m.matcap.value=x.matcap)}function g(m,x){let _=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gw(n,e,t,i){let s={},r={};function o(_,b){let y=b.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,b){let y=s[_.id];y===void 0&&(p(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",m));let M=b.program;i.updateUBOMapping(_,M);let w=e.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let b=n.createBuffer(),y=_.__size,M=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,y,M),n.bindBuffer(n.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,v=y.length;w<v;w++){let S=y[w];if(Array.isArray(S))for(let D=0,T=S.length;D<T;D++)u(S[D],w,D,M);else u(S,w,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,b,y,M){if(h(_,b,y,M)===!0){let w=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let D=0;D<v.length;D++){let T=v[D],P=g(T,!0);d(T,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function d(_,b,y){typeof _=="number"||typeof _=="boolean"?b[y]=_:_.isMatrix3?(b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0):ArrayBuffer.isView(_)?b.set(_.subarray(0,b.length-y),y):_.toArray(b,y)}function h(_,b,y,M){let w=_.value,v=b+"_"+y;if(Array.isArray(w)){M[v]===void 0&&(M[v]=[]);let S=M[v],D=!1;for(let T=0;T<w.length;T++)f(w[T],S,T)===!0&&(D=!0);return D}return f(w,M,v)}function f(_,b,y){if(b[y]===void 0)return typeof _=="number"||typeof _=="boolean"?b[y]=_:ArrayBuffer.isView(_)?b[y]=_.slice():b[y]=_.clone(),!0;{let M=b[y];if(typeof _=="number"||typeof _=="boolean"){if(M!==_)return b[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(M.equals(_)===!1)return M.copy(_),!0}}return!1}function p(_){let b=_.uniforms,y=0,M=16;for(let v=0,S=b.length;v<S;v++){let D=Array.isArray(b[v])?b[v]:[b[v]];for(let T=0,P=D.length;T<P;T++){let k=D[T],z=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(b[v])||Array.isArray(k.value),V=y;for(let te=0,ie=z.length;te<ie;te++){let J=z[te],Y=g(J,I),O=y%M,G=O%Y.boundary,K=O+G;y+=G,K!==0&&M-K<Y.storage&&(y+=M-K),te===0&&(V=y),y+=Y.storage}let ne=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new ne((y-V)/Float32Array.BYTES_PER_ELEMENT),k.__offset=V}}let w=y%M;return w>0&&(y+=M-w),_.__size=y,_.__cache={},this}function g(_,b){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):St("WebGLRenderer: Unsupported uniform value type.",_),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(_){let b=_.target;b.removeEventListener("dispose",m),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function x(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:x}}var Vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ks=null;function Ww(){return Ks===null&&(Ks=new El(Vw,16,16,Jr,Pi),Ks.name="DFG_LUT",Ks.minFilter=In,Ks.magFilter=In,Ks.wrapS=Gs,Ks.wrapT=Gs,Ks.generateMipmaps=!1,Ks.needsUpdate=!0),Ks}var Od=class{constructor(e={}){let{canvas:t=km(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Fi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=f,m=new Set([ju,Ju,Zu]),x=new Set([Fi,Ts,ka,Lo,qu,Yu]),_=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},M=null,w=null,v=[],S=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,k=null,z=null,I=null,V=null;this._outputColorSpace=ci;let ne=0,te=0,ie=null,J=-1,Y=null,O=new vn,G=new vn,K=null,q=new ke(0),ae=0,fe=t.width,ge=t.height,oe=1,Pe=null,Ye=null,Fe=new vn(0,0,fe,ge),Ze=new vn(0,0,fe,ge),$e=!1,pe=new Gr,X=new vu,U=!1,se=!1,$=new _t,Ce=new C,Re=new vn,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function be(){return ie===null?oe:1}let F=i;function ot(R,ee){return t.getContext(R,ee)}let pt,vt,Ie,A,j,xe,L,E,Q,ve,_e,Ne,ze,Me,we,Ge,W,Ee,ye,Be,He,Ve,ut;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",je,!1),F===null){let ee="webgl2";if(F=ot(ee,R),F===null)throw ot(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(R){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Et("WebGLRenderer: "+R.message),R}function Ct(){pt=new tS(F),pt.init(),He=new Fw(F,pt),vt=new WM(F,pt,e,He),Ie=new Ow(F,pt),vt.reversedDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),z=F.createFramebuffer(),I=F.createFramebuffer(),V=F.createFramebuffer(),A=new sS(F),j=new bw,xe=new kw(F,pt,Ie,j,vt,He,A),L=new eS(T),E=new o1(F),Ve=new GM(F,E),Q=new nS(F,E,A,Ve),ve=new oS(F,Q,E,Ve,A),Ee=new rS(F,vt,xe),we=new XM(j),_e=new _w(T,L,pt,vt,Ve,we),Ne=new Hw(T,j),ze=new Sw,Me=new Cw(pt),W=new HM(T,L,Ie,ve,p,l),Ge=new Nw(T,ve,vt),ut=new Gw(F,A,vt,Ie),ye=new VM(F,pt,A),Be=new iS(F,pt,A),A.programs=_e.programs,T.capabilities=vt,T.extensions=pt,T.properties=j,T.renderLists=ze,T.shadowMap=Ge,T.state=Ie,T.info=A}g!==Fi&&(D=new lS(g,t.width,t.height,a,s,r));let re=new tp(T,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(R){R!==void 0&&(oe=R,this.setSize(fe,ge,!1))},this.getSize=function(R){return R.set(fe,ge)},this.setSize=function(R,ee,he=!0){if(re.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,ge=ee,t.width=Math.floor(R*oe),t.height=Math.floor(ee*oe),he===!0&&(t.style.width=R+"px",t.style.height=ee+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,ee)},this.getDrawingBufferSize=function(R){return R.set(fe*oe,ge*oe).floor()},this.setDrawingBufferSize=function(R,ee,he){fe=R,ge=ee,oe=he,t.width=Math.floor(R*he),t.height=Math.floor(ee*he),this.setViewport(0,0,R,ee)},this.setEffects=function(R){if(g===Fi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let ee=0;ee<R.length;ee++)if(R[ee].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,ee,he,le){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,ee,he,le),Ie.viewport(O.copy(Fe).multiplyScalar(be()).round())},this.getScissor=function(R){return R.copy(Ze)},this.setScissor=function(R,ee,he,le){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,ee,he,le),Ie.scissor(G.copy(Ze).multiplyScalar(be()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(R){Ie.setScissorTest($e=R)},this.setOpaqueSort=function(R){Pe=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(R=!0,ee=!0,he=!0){let le=0;if(R){let ue=!1;if(ie!==null){let De=ie.texture.format;ue=m.has(De)}if(ue){let De=ie.texture.type,it=x.has(De),We=W.getClearColor(),Ue=W.getClearAlpha(),ct=We.r,Tt=We.g,Bt=We.b;it?(_[0]=ct,_[1]=Tt,_[2]=Bt,_[3]=Ue,F.clearBufferuiv(F.COLOR,0,_)):(b[0]=ct,b[1]=Tt,b[2]=Bt,b[3]=Ue,F.clearBufferiv(F.COLOR,0,b))}else le|=F.COLOR_BUFFER_BIT}ee&&(le|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),k=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),W.dispose(),ze.dispose(),Me.dispose(),xe.dispose(),j.dispose(),L.dispose(),ve.dispose(),Q.dispose(),Ve.dispose(),ut.dispose(),_e.dispose(),re.dispose(),re.removeEventListener("sessionstart",Pr),re.removeEventListener("sessionend",Ir),Di.stop()};function Je(R){R.preventDefault(),_l("WebGLRenderer: Context Lost."),P=!0}function Mt(){_l("WebGLRenderer: Context Restored."),P=!1;let R=A.autoReset,ee=Ge.enabled,he=Ge.autoUpdate,le=Ge.needsUpdate,ue=Ge.type;Ct(),A.autoReset=R,Ge.enabled=ee,Ge.autoUpdate=he,Ge.needsUpdate=le,Ge.type=ue}function je(R){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Qt(R){let ee=R.target;ee.removeEventListener("dispose",Qt),Rn(ee)}function Rn(R){ai(R),j.remove(R)}function ai(R){let ee=j.get(R).programs;ee!==void 0&&(ee.forEach(function(he){_e.releaseProgram(he)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,ee,he,le,ue,De){ee===null&&(ee=H);let it=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,We=gs(R,ee,he,le,ue);Ie.setMaterial(le,it);let Ue=he.index,ct=1;if(le.wireframe===!0){if(Ue=Q.getWireframeAttribute(he),Ue===void 0)return;ct=2}let Tt=he.drawRange,Bt=he.attributes.position,at=Tt.start*ct,Lt=(Tt.start+Tt.count)*ct;De!==null&&(at=Math.max(at,De.start*ct),Lt=Math.min(Lt,(De.start+De.count)*ct)),Ue!==null?(at=Math.max(at,0),Lt=Math.min(Lt,Ue.count)):Bt!=null&&(at=Math.max(at,0),Lt=Math.min(Lt,Bt.count));let Mn=Lt-at;if(Mn<0||Mn===1/0)return;Ve.setup(ue,le,We,he,Ue);let on,en=ye;if(Ue!==null&&(on=E.get(Ue),en=Be,en.setIndex(on)),ue.isMesh)le.wireframe===!0?(Ie.setLineWidth(le.wireframeLinewidth*be()),en.setMode(F.LINES)):en.setMode(F.TRIANGLES);else if(ue.isLine){let On=le.linewidth;On===void 0&&(On=1),Ie.setLineWidth(On*be()),ue.isLineSegments?en.setMode(F.LINES):ue.isLineLoop?en.setMode(F.LINE_LOOP):en.setMode(F.LINE_STRIP)}else ue.isPoints?en.setMode(F.POINTS):ue.isSprite&&en.setMode(F.TRIANGLES);if(ue.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))en.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{let On=ue._multiDrawStarts,lt=ue._multiDrawCounts,Un=ue._multiDrawCount,Gt=Ue?E.get(Ue).bytesPerElement:1,Oi=j.get(le).currentProgram.getUniforms();for(let kn=0;kn<Un;kn++)Oi.setValue(F,"_gl_DrawID",kn),en.render(On[kn]/Gt,lt[kn])}else if(ue.isInstancedMesh)en.renderInstances(at,Mn,ue.count);else if(he.isInstancedBufferGeometry){let On=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,lt=Math.min(he.instanceCount,On);en.renderInstances(at,Mn,lt)}else en.render(at,Mn)};function fo(R,ee,he,le){k!==null&&R.isNodeMaterial&&k.setObject(le,R),U===!0&&we.setState(R,he,!1),R.transparent===!0&&R.side===jt&&R.forceSinglePass===!1?(R.side=di,R.needsUpdate=!0,Xi(R,ee,le),R.side=$s,R.needsUpdate=!0,Xi(R,ee,le),R.side=jt):Xi(R,ee,le)}this.compile=function(R,ee,he=null){he===null&&(he=R),k!==null&&k.renderStart(R,ee,he),w=Me.get(he),w.init(ee),S.push(w),he.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(w.pushLight(ue),ue.castShadow&&w.pushShadow(ue))}),R!==he&&R.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(w.pushLight(ue),ue.castShadow&&w.pushShadow(ue))}),w.setupLights(),k!==null&&k.updateLights(w.state.lightsArray),se=this.localClippingEnabled,U=we.init(this.clippingPlanes,se),U===!0&&we.setGlobalState(this.clippingPlanes,ee),k!==null&&Ge.render(w.state.shadowsArray,he,ee);let le=new Set;return R.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;let De=ue.material;if(De)if(Array.isArray(De))for(let it=0;it<De.length;it++){let We=De[it];fo(We,he,ee,ue),le.add(We)}else fo(De,he,ee,ue),le.add(De)}),w=S.pop(),k!==null&&k.renderEnd(),le},this.compileAsync=function(R,ee,he=null){let le=this.compile(R,ee,he);return new Promise(ue=>{function De(){if(le.forEach(function(it){let Ue=j.get(it).currentProgram;(Ue===void 0||Ue.isReady())&&le.delete(it)}),le.size===0){ue(R);return}setTimeout(De,10)}pt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Bs=null;function qo(R){Bs&&Bs(R)}function Pr(){Di.stop()}function Ir(){Di.start()}let Di=new mg;Di.setAnimationLoop(qo),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(R){Bs=R,re.setAnimationLoop(R),R===null?Di.stop():Di.start()},re.addEventListener("sessionstart",Pr),re.addEventListener("sessionend",Ir),this.render=function(R,ee){if(ee!==void 0&&ee.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(R,ee);let he=re.enabled===!0&&re.isPresenting===!0,le=D!==null&&(ie===null||he)&&D.begin(T,ie);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(ee),ee=re.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,ee,ie),w=Me.get(R,S.length),w.init(ee),w.state.textureUnits=xe.getTextureUnits(),S.push(w),$.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ee.isArrayCamera?X.setFromArrayCamera(ee):pe.setFromProjectionMatrix($,os,ee.reversedDepth),se=this.localClippingEnabled,U=we.init(this.clippingPlanes,se),M=ze.get(R,v.length),M.init(),v.push(M),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let it=T.xr.getDepthSensingMesh();it!==null&&ps(it,ee,-1/0,T.sortObjects)}ps(R,ee,0,T.sortObjects),M.finish(),k!==null&&k.updateLights(w.state.lightsArray),T.sortObjects===!0&&M.sort(Pe,Ye),me=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,me&&W.addToRenderList(M,R),this.info.autoReset===!0&&this.info.reset(),U===!0&&we.beginShadows();let ue=w.state.shadowsArray;if(Ge.render(ue,R,ee),U===!0&&we.endShadows(),(le&&D.hasRenderPass())===!1){let it=M.opaque,We=M.transmissive;if(w.setupLights(),ee.isArrayCamera){let Ue=ee.cameras;if(We.length>0)for(let ct=0,Tt=Ue.length;ct<Tt;ct++){let Bt=Ue[ct];En(it,We,R,Bt)}me&&W.render(R);for(let ct=0,Tt=Ue.length;ct<Tt;ct++){let Bt=Ue[ct];Lr(M,R,Bt,Bt.viewport)}}else We.length>0&&En(it,We,R,ee),me&&W.render(R),Lr(M,R,ee)}ie!==null&&te===0&&(xe.updateMultisampleRenderTarget(ie),xe.updateRenderTargetMipmap(ie)),le&&D.end(T),R.isScene===!0&&R.onAfterRender(T,R,ee),Ve.resetDefaultState(),J=-1,Y=null,S.pop(),S.length>0?(w=S[S.length-1],xe.setTextureUnits(w.state.textureUnits),U===!0&&we.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,k!==null&&k.renderEnd()};function ps(R,ee,he,le){if(R.visible===!1)return;if(R.layers.test(ee.layers)){if(R.isGroup)he=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ee);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){let it=ee.isArrayCamera?X:pe;if(!R.frustumCulled||R.intersectsFrustum(it)){le&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);let We=ve.update(R),Ue=R.material;Ue.visible&&M.push(R,We,Ue,he,Re.z,null,ee)}}else if(R.isMesh||R.isLine||R.isPoints){let it=ee.isArrayCamera?X:pe;if(!R.frustumCulled||R.intersectsFrustum(it)){let We=ve.update(R),Ue=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Re.copy(We.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(Ue)){let ct=We.groups;for(let Tt=0,Bt=ct.length;Tt<Bt;Tt++){let at=ct[Tt],Lt=Ue[at.materialIndex];Lt&&Lt.visible&&M.push(R,We,Lt,he,Re.z,at,ee)}}else Ue.visible&&M.push(R,We,Ue,he,Re.z,null,ee)}}}let De=R.children;for(let it=0,We=De.length;it<We;it++)ps(De[it],ee,he,le)}function Lr(R,ee,he,le){let{opaque:ue,transmissive:De,transparent:it}=R;w.setupLightsView(he),U===!0&&we.setGlobalState(T.clippingPlanes,he),le&&Ie.viewport(O.copy(le)),ue.length>0&&mi(ue,ee,he),De.length>0&&mi(De,ee,he),it.length>0&&mi(it,ee,he),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function En(R,ee,he,le){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[le.id]===void 0){let at=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[le.id]=new ui(1,1,{generateMipmaps:!0,type:at?Pi:Fi,minFilter:Es,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let De=w.state.transmissionRenderTarget[le.id],it=le.viewport||O;De.setSize(it.z*T.transmissionResolutionScale,it.w*T.transmissionResolutionScale);let We=T.getRenderTarget(),Ue=T.getActiveCubeFace(),ct=T.getActiveMipmapLevel();T.setRenderTarget(De),T.getClearColor(q),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),me&&W.render(he);let Tt=T.toneMapping;T.toneMapping=Ys;let Bt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),w.setupLightsView(le),U===!0&&we.setGlobalState(T.clippingPlanes,le),mi(R,he,le),xe.updateMultisampleRenderTarget(De),xe.updateRenderTargetMipmap(De),pt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Lt=0,Mn=ee.length;Lt<Mn;Lt++){let on=ee[Lt],{object:en,geometry:On,material:lt,group:Un}=on;if(lt.side===jt&&en.layers.test(le.layers)){let Gt=lt.side;lt.side=di,lt.needsUpdate=!0,Xn(en,he,le,On,lt,Un),lt.side=Gt,lt.needsUpdate=!0,at=!0}}at===!0&&(xe.updateMultisampleRenderTarget(De),xe.updateRenderTargetMipmap(De))}T.setRenderTarget(We,Ue,ct),T.setClearColor(q,ae),Bt!==void 0&&(le.viewport=Bt),T.toneMapping=Tt}function mi(R,ee,he){let le=ee.isScene===!0?ee.overrideMaterial:null;for(let ue=0,De=R.length;ue<De;ue++){let it=R[ue],{object:We,geometry:Ue,group:ct}=it,Tt=it.material;Tt.allowOverride===!0&&le!==null&&(Tt=le),We.layers.test(he.layers)&&Xn(We,ee,he,Ue,Tt,ct)}}function Xn(R,ee,he,le,ue,De){k!==null&&ue.isNodeMaterial&&k.setObject(R,ue),R.onBeforeRender(T,ee,he,le,ue,De),R.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ue.onBeforeRender(T,ee,he,le,R,De),ue.transparent===!0&&ue.side===jt&&ue.forceSinglePass===!1?(ue.side=di,ue.needsUpdate=!0,T.renderBufferDirect(he,ee,le,ue,R,De),ue.side=$s,ue.needsUpdate=!0,T.renderBufferDirect(he,ee,le,ue,R,De),ue.side=jt):T.renderBufferDirect(he,ee,le,ue,R,De),R.onAfterRender(T,ee,he,le,ue,De)}function li(R){let ee=0;for(let he of R)he.texture!==null&&ee++;return ee}function Xi(R,ee,he){ee.isScene!==!0&&(ee=H);let le=j.get(R),ue=w.state.lights,De=w.state.shadowsArray,it=ue.state.version,We=_e.getParameters(R,ue.state,De,ee,he,w.state.lightProbeGridArray),Ue=_e.getProgramCacheKey(We),ct=le.programs;le.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?ee.environment:null,le.fog=ee.fog;let Tt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;le.envMap=L.get(R.envMap||le.environment,Tt),le.envMapRotation=le.environment!==null&&R.envMap===null?ee.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",Qt),ct=new Map,le.programs=ct,le.programVariants=new Map);let Bt=ct.get(Ue);if(Bt!==void 0){if(le.currentProgram===Bt&&le.lightsStateVersion===it)return tr(R,We),Bt}else We.uniforms=_e.getUniforms(R),k!==null&&R.isNodeMaterial&&k.build(R,he,We),R.onBeforeCompile(We,T),Bt=_e.acquireProgram(We,Ue),ct.set(Ue,Bt),le.uniforms=We.uniforms;let at=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(at.clippingPlanes=we.uniform),tr(R,We),le.needsLights=Dr(R),le.lightsStateVersion=it,le.needsLights&&(at.ambientLightColor.value=ue.state.ambient,at.lightProbe.value=ue.state.probe,at.sunLights.value=ue.state.sun,at.sunLightShadows.value=ue.state.sunShadow,at.directionalLights.value=ue.state.directional,at.directionalLightShadows.value=ue.state.directionalShadow,at.spotLights.value=ue.state.spot,at.spotLightShadows.value=ue.state.spotShadow,at.rectAreaLights.value=ue.state.rectArea,at.ltc_1.value=ue.state.rectAreaLTC1,at.ltc_2.value=ue.state.rectAreaLTC2,at.pointLights.value=ue.state.point,at.pointLightShadows.value=ue.state.pointShadow,at.hemisphereLights.value=ue.state.hemi,at.sunShadowMatrix.value=ue.state.sunShadowMatrix,at.sunShadowCascade.value=ue.state.sunShadowCascade,at.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,at.spotLightMatrix.value=ue.state.spotLightMatrix,at.spotLightMap.value=ue.state.spotLightMap,at.pointShadowMatrix.value=ue.state.pointShadowMatrix),le.numLightProbeGrids=li(w.state.lightProbeGridArray),le.currentProgram=Bt,le.uniformsList=null,Bt}function ms(R,ee,he,le,ue){let De=j.get(R),it=De.currentProgram.id+","+le+","+ue,We=De.programVariants.get(it);return We===void 0?(We=Xi(R,ee,he),De.programVariants.set(it,We)):(De.currentProgram=We,De.uniformsList=null,De.outputColorSpace=le,De.toneMapping=ue),We}function Ni(R){if(R.uniformsList===null){let ee=R.currentProgram.getUniforms();R.uniformsList=Fa.seqWithValue(ee.seq,R.uniforms)}return R.uniformsList}function tr(R,ee){let he=j.get(R);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function gs(R,ee,he,le,ue){ee.isScene!==!0&&(ee=H),xe.resetTextureUnits();let De=ee.fog,it=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?ee.environment:null,We=ie===null?T.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Yt.workingColorSpace,Ue=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,ct=L.get(le.envMap||it,Ue),Tt=le.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Bt=!!he.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),at=!!he.morphAttributes.position,Lt=!!he.morphAttributes.normal,Mn=!!he.morphAttributes.color,on=Ys;le.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(on=T.toneMapping);let en=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,On=en!==void 0?en.length:0,lt=j.get(le),Un=w.state.lights;if(U===!0&&(se===!0||R!==Y)){let cn=R===Y&&le.id===J;we.setState(le,R,cn)}let Gt=!1,Oi=!1;le.version===lt.__version?lt.needsLights&&lt.lightsStateVersion!==Un.state.version||ue.isBatchedMesh&&lt.batching===!1||!ue.isBatchedMesh&&lt.batching===!0||ue.isBatchedMesh&&lt.batchingColor===!0&&ue._colorsTexture===null||ue.isBatchedMesh&&lt.batchingColor===!1&&ue._colorsTexture!==null||ue.isInstancedMesh&&lt.instancing===!1||!ue.isInstancedMesh&&lt.instancing===!0||ue.isSkinnedMesh&&lt.skinning===!1||!ue.isSkinnedMesh&&lt.skinning===!0||ue.isInstancedMesh&&lt.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&lt.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&lt.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&lt.instancingMorph===!1&&ue.morphTexture!==null||lt.envMap!==ct||le.fog===!0&&lt.fog!==De||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==we.numPlanes||lt.numIntersection!==we.numIntersection)||lt.vertexAlphas!==Tt||lt.vertexTangents!==Bt||lt.morphTargets!==at||lt.morphNormals!==Lt||lt.morphColors!==Mn||lt.morphTargetsCount!==On||lt.numLightProbeGrids!==li(w.state.lightProbeGridArray)?Gt=!0:(lt.outputColorSpace!==We||lt.toneMapping!==on)&&(Oi=!0):(Gt=!0,lt.__version=le.version);let kn=lt.currentProgram;(Gt===!0||Oi===!0)&&(kn=Oi===!0?ms(le,ee,ue,We,on):Xi(le,ee,ue),k&&le.isNodeMaterial&&k.onUpdateProgram(le,kn,lt));let nr=!1,wi=!1,xs=!1,Wt=kn.getUniforms(),Tn=lt.uniforms;if(Ie.useProgram(kn.program)&&(nr=!0,wi=!0,xs=!0),le.id!==J&&(J=le.id,wi=!0),nr||Y!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Wt.setValue(F,"projectionMatrix",R.projectionMatrix),Wt.setValue(F,"viewMatrix",R.matrixWorldInverse);let dt=Wt.map.cameraPosition;dt!==void 0&&dt.setValue(F,Ce.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Wt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Wt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,wi=!0,xs=!0)}if(lt.needsLights&&(Un.state.sunShadowMap.length>0&&Wt.setValue(F,"sunShadowMap",Un.state.sunShadowMap,xe),Un.state.directionalShadowMap.length>0&&Wt.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,xe),Un.state.spotShadowMap.length>0&&Wt.setValue(F,"spotShadowMap",Un.state.spotShadowMap,xe),Un.state.pointShadowMap.length>0&&Wt.setValue(F,"pointShadowMap",Un.state.pointShadowMap,xe)),ue.isSkinnedMesh){Wt.setOptional(F,ue,"bindMatrix"),Wt.setOptional(F,ue,"bindMatrixInverse");let cn=ue.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Wt.setValue(F,"boneTexture",cn.boneTexture,xe))}ue.isBatchedMesh&&(Wt.setOptional(F,ue,"batchingTexture"),Wt.setValue(F,"batchingTexture",ue._matricesTexture,xe),Wt.setOptional(F,ue,"batchingIdTexture"),Wt.setValue(F,"batchingIdTexture",ue._indirectTexture,xe),Wt.setOptional(F,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Wt.setValue(F,"batchingColorTexture",ue._colorsTexture,xe));let Bn=he.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ee.update(ue,he,kn),(wi||lt.receiveShadow!==ue.receiveShadow)&&(lt.receiveShadow=ue.receiveShadow,Wt.setValue(F,"receiveShadow",ue.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&ee.environment!==null&&(Tn.envMapIntensity.value=ee.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=Ww()),wi){if(Wt.setValue(F,"toneMappingExposure",T.toneMappingExposure),lt.needsLights&&Yo(Tn,xs),De&&le.fog===!0&&Ne.refreshFogUniforms(Tn,De),Ne.refreshMaterialUniforms(Tn,le,oe,ge,w.state.transmissionRenderTarget[R.id]),lt.needsLights&&lt.numLightProbeGrids>0){let cn=y,dt=0;for(let fn of w.state.lightProbeGridArray)fn.texture!==null&&(cn.textures[dt]=fn.texture,cn.min[dt]=fn.boundingBox.min,cn.max[dt]=fn.boundingBox.max,cn.resolution[dt]=fn.resolution,dt++);for(let fn in cn)cn[fn].length=dt;Tn.probesSH.value=cn.textures,Tn.probesMin.value=cn.min,Tn.probesMax.value=cn.max,Tn.probesResolution.value=cn.resolution}Fa.upload(F,Ni(lt),Tn,xe)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Fa.upload(F,Ni(lt),Tn,xe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Wt.setValue(F,"center",ue.center),Wt.setValue(F,"modelViewMatrix",ue.modelViewMatrix),Wt.setValue(F,"normalMatrix",ue.normalMatrix),Wt.setValue(F,"modelMatrix",ue.matrixWorld),le.uniformsGroups!==void 0){let cn=le.uniformsGroups;for(let dt=0,fn=cn.length;dt<fn;dt++){let At=cn[dt];ut.update(At,kn),ut.bind(At,kn)}}return kn}function Yo(R,ee){R.ambientLightColor.needsUpdate=ee,R.lightProbe.needsUpdate=ee,R.sunLights.needsUpdate=ee,R.sunLightShadows.needsUpdate=ee,R.directionalLights.needsUpdate=ee,R.directionalLightShadows.needsUpdate=ee,R.pointLights.needsUpdate=ee,R.pointLightShadows.needsUpdate=ee,R.spotLights.needsUpdate=ee,R.spotLightShadows.needsUpdate=ee,R.rectAreaLights.needsUpdate=ee,R.hemisphereLights.needsUpdate=ee}function Dr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(R,ee,he){let le=j.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),j.get(R.texture).__webglTexture=ee,j.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:he,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,ee){let he=j.get(R);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(R,ee=0,he=0){ie=R,ne=ee,te=he;let le=null,ue=!1,De=!1;if(R){let We=j.get(R);if(We.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(F.FRAMEBUFFER,We.__webglFramebuffer),O.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest,Ie.viewport(O),Ie.scissor(G),Ie.setScissorTest(K),J=-1;return}else if(We.__webglFramebuffer===void 0)xe.setupRenderTarget(R);else if(We.__hasExternalTextures)xe.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Tt=R.depthTexture;if(We.__boundDepthTexture!==Tt){if(Tt!==null&&j.has(Tt)&&(R.width!==Tt.image.width||R.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(R)}}let Ue=R.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(De=!0);let ct=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ct[ee])?le=ct[ee][he]:le=ct[ee],ue=!0):R.samples>0&&xe.useMultisampledRTT(R)===!1?le=j.get(R).__webglMultisampledFramebuffer:Array.isArray(ct)?le=ct[he]:le=ct,O.copy(R.viewport),G.copy(R.scissor),K=R.scissorTest}else O.copy(Fe).multiplyScalar(oe).floor(),G.copy(Ze).multiplyScalar(oe).floor(),K=$e;if(he!==0&&(le=z),Ie.bindFramebuffer(F.FRAMEBUFFER,le)&&Ie.drawBuffers(R,le),Ie.viewport(O),Ie.scissor(G),Ie.setScissorTest(K),ue){let We=j.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+ee,We.__webglTexture,he)}else if(De){let We=ee;for(let Ue=0;Ue<R.textures.length;Ue++){let ct=j.get(R.textures[Ue]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ue,ct.__webglTexture,he,We)}}else if(R!==null&&he!==0){let We=j.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,We.__webglTexture,he)}J=-1};function po(R){let ee=j.get(R);return(ee.__readFormat!==R.format||ee.__readType!==R.type)&&(ee.__readFormat=R.format,ee.__readType=R.type,ee.__formatReadable=vt.textureFormatReadable(R.format),ee.__typeReadable=vt.textureTypeReadable(R.type)),ee}this.readRenderTargetPixels=function(R,ee,he,le,ue,De,it,We=0){if(!(R&&R.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&it!==void 0&&(Ue=Ue[it],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){Ie.bindFramebuffer(F.FRAMEBUFFER,Ue);try{let ct=R.textures[We],Tt=ct.format,Bt=ct.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let at=po(ct);if(at.__formatReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(at.__typeReadable===!1){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=R.width-le&&he>=0&&he<=R.height-ue&&F.readPixels(ee,he,le,ue,He.convert(Tt),He.convert(Bt),De)}finally{let ct=ie!==null?j.get(ie).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(R,ee,he,le,ue,De,it,We=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&it!==void 0&&(Ue=Ue[it],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(ee>=0&&ee<=R.width-le&&he>=0&&he<=R.height-ue){Ie.bindFramebuffer(F.FRAMEBUFFER,Ue);let ct=R.textures[We],Tt=ct.format,Bt=ct.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+We);let at=po(ct);if(at.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(at.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,De.byteLength,F.STREAM_READ),F.readPixels(ee,he,le,ue,He.convert(Tt),He.convert(Bt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Mn=ie!==null?j.get(ie).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,Mn);let on=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Um(F,on,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,De),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Lt),F.deleteSync(on),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,ee=null,he=0){let le=Math.pow(2,-he),ue=Math.floor(R.image.width*le),De=Math.floor(R.image.height*le),it=ee!==null?ee.x:0,We=ee!==null?ee.y:0;xe.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,he,0,0,it,We,ue,De),Ie.unbindTexture()},this.copyTextureToTexture=function(R,ee,he=null,le=null,ue=0,De=0){let it,We,Ue,ct,Tt,Bt,at,Lt,Mn,on=R.isCompressedTexture?R.mipmaps[De]:R.image;if(he!==null)it=he.max.x-he.min.x,We=he.max.y-he.min.y,Ue=he.isBox3?he.max.z-he.min.z:1,ct=he.min.x,Tt=he.min.y,Bt=he.isBox3?he.min.z:0;else{let Wt=Math.pow(2,-ue);it=Math.floor(on.width*Wt),We=Math.floor(on.height*Wt),R.isDataArrayTexture?Ue=on.depth:R.isData3DTexture?Ue=Math.floor(on.depth*Wt):Ue=1,ct=0,Tt=0,Bt=0}le!==null?(at=le.x,Lt=le.y,Mn=le.z):(at=0,Lt=0,Mn=0);let en=He.convert(ee.format),On=He.convert(ee.type),lt;ee.isData3DTexture?(xe.setTexture3D(ee,0),lt=F.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(xe.setTexture2DArray(ee,0),lt=F.TEXTURE_2D_ARRAY):(xe.setTexture2D(ee,0),lt=F.TEXTURE_2D),Ie.activeTexture(F.TEXTURE0),Ie.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,ee.flipY),Ie.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Ie.pixelStorei(F.UNPACK_ALIGNMENT,ee.unpackAlignment);let Un=Ie.getParameter(F.UNPACK_ROW_LENGTH),Gt=Ie.getParameter(F.UNPACK_IMAGE_HEIGHT),Oi=Ie.getParameter(F.UNPACK_SKIP_PIXELS),kn=Ie.getParameter(F.UNPACK_SKIP_ROWS),nr=Ie.getParameter(F.UNPACK_SKIP_IMAGES);Ie.pixelStorei(F.UNPACK_ROW_LENGTH,on.width),Ie.pixelStorei(F.UNPACK_IMAGE_HEIGHT,on.height),Ie.pixelStorei(F.UNPACK_SKIP_PIXELS,ct),Ie.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),Ie.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt);let wi=R.isDataArrayTexture||R.isData3DTexture,xs=ee.isDataArrayTexture||ee.isData3DTexture;if(R.isDepthTexture){let Wt=j.get(R),Tn=j.get(ee),Bn=j.get(Wt.__renderTarget),cn=j.get(Tn.__renderTarget);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let dt=0;dt<Ue;dt++)wi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,j.get(R).__webglTexture,ue,Bt+dt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,j.get(ee).__webglTexture,De,Mn+dt)),F.blitFramebuffer(ct,Tt,ct+it,Tt+We,at,Lt,at+it,Lt+We,F.DEPTH_BUFFER_BIT,F.NEAREST);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ue!==0||R.isRenderTargetTexture||j.has(R)){let Wt=j.get(R),Tn=j.get(ee);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,I),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,V);for(let Bn=0;Bn<Ue;Bn++)wi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,ue,Bt+Bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,ue),xs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tn.__webglTexture,De,Mn+Bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Tn.__webglTexture,De),ue!==0?F.blitFramebuffer(ct,Tt,ct+it,Tt+We,at,Lt,at+it,Lt+We,F.COLOR_BUFFER_BIT,F.NEAREST):xs?F.copyTexSubImage3D(lt,De,at,Lt,Mn+Bn,ct,Tt,it,We):F.copyTexSubImage2D(lt,De,at,Lt,ct,Tt,it,We);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xs?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(lt,De,at,Lt,Mn,it,We,Ue,en,On,on.data):ee.isCompressedArrayTexture?F.compressedTexSubImage3D(lt,De,at,Lt,Mn,it,We,Ue,en,on.data):F.texSubImage3D(lt,De,at,Lt,Mn,it,We,Ue,en,On,on):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,De,at,Lt,it,We,en,On,on.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,De,at,Lt,on.width,on.height,en,on.data):F.texSubImage2D(F.TEXTURE_2D,De,at,Lt,it,We,en,On,on);Ie.pixelStorei(F.UNPACK_ROW_LENGTH,Un),Ie.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),Ie.pixelStorei(F.UNPACK_SKIP_PIXELS,Oi),Ie.pixelStorei(F.UNPACK_SKIP_ROWS,kn),Ie.pixelStorei(F.UNPACK_SKIP_IMAGES,nr),De===0&&ee.generateMipmaps===!0&&ee.mipmapsAutoUpdate===!0&&F.generateMipmap(lt),Ie.unbindTexture()},this.initRenderTarget=function(R){j.get(R).__webglFramebuffer===void 0&&xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xe.setTextureCube(R,0):R.isData3DTexture?xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xe.setTexture2DArray(R,0):xe.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){ne=0,te=0,ie=null,Ie.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return os}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}};var Tg={type:"change"},ip={type:"start"},Rg={type:"end"},Ud=new mr,Ag=new Ti,Xw=Math.cos(70*jr.DEG2RAD),Zn=new C,Ui=2*Math.PI,an={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},np=1e-6,Bd=class extends $l{constructor(e,t=null){super(e,t),this.state=an.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new mn,this._lastTargetPosition=new C,this._quat=new mn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new La,this._sphericalDelta=new La,this._scale=1,this._panOffset=new C,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new C,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qw.bind(this),this._onPointerDown=$w.bind(this),this._onPointerUp=Yw.bind(this),this._onContextMenu=tE.bind(this),this._onMouseWheel=Jw.bind(this),this._onKeyDown=jw.bind(this),this._onTouchStart=Qw.bind(this),this._onTouchMove=eE.bind(this),this._onMouseDown=Kw.bind(this),this._onMouseMove=Zw.bind(this),this._interceptControlDown=nE.bind(this),this._interceptControlUp=iE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=an.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tg),this.update(),this.state=an.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Zn.copy(t).sub(this.target),Zn.applyQuaternion(this._quat),this._spherical.setFromVector3(Zn),this.autoRotate&&this.state===an.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ui:i>Math.PI&&(i-=Ui),s<-Math.PI?s+=Ui:s>Math.PI&&(s-=Ui),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Zn.setFromSpherical(this._spherical),Zn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Zn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Zn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ud.origin.copy(this.object.position),Ud.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ud.direction))<Xw?this.object.lookAt(this.target):(Ag.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ud.intersectPlane(Ag,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>np||8*(1-this._lastQuaternion.dot(this.object.quaternion))>np||this._lastTargetPosition.distanceToSquared(this.target)>np?(this.dispatchEvent(Tg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ui/60*this.autoRotateSpeed*e:Ui/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zn.setFromMatrixColumn(t,0),Zn.multiplyScalar(-e),this._panOffset.add(Zn)}_panUp(e,t){this.screenSpacePanning===!0?Zn.setFromMatrixColumn(t,1):(Zn.setFromMatrixColumn(t,0),Zn.crossVectors(this.object.up,Zn)),Zn.multiplyScalar(e),this._panOffset.add(Zn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Zn.copy(s).sub(this.target);let r=Zn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $w(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function qw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rg),this.state=an.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=an.DOLLY;break;case qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=an.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=an.ROTATE}break;case qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=an.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=an.PAN}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(ip)}function Zw(n){switch(this.state){case an.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case an.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case an.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jw(n){this.enabled===!1||this.enableZoom===!1||this.state!==an.NONE||(n.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rg))}function jw(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1){this.state=an.NONE;break}this._handleTouchStartRotate(n),this.state=an.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1){this.state=an.NONE;break}this._handleTouchStartPan(n),this.state=an.TOUCH_PAN;break;default:this.state=an.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=an.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=an.TOUCH_DOLLY_ROTATE;break;default:this.state=an.NONE}break;default:this.state=an.NONE}this.state!==an.NONE&&this.dispatchEvent(ip)}function eE(n){switch(this._trackPointer(n),this.state){case an.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case an.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case an.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case an.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=an.NONE}}function tE(n){this.enabled!==!1&&n.preventDefault()}function nE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rc=new C;function ls(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;rc.copy(e),rc[i]=0,rc.normalize();let c=.5*o/(o+a),u=1-rc.angleTo(n)/l;return Math.sign(rc[t])===1?u*c:a/(o+a)+c+c*(1-u)}var zd=class n extends tn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,u=new C(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,g=new C,m=.5/o;for(let x=0,_=0;x<d.length;x+=3,_+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[x+0]=u.x*Math.sign(l.x)+c.x*r,d[x+1]=u.y*Math.sign(l.y)+c.y*r,d[x+2]=u.z*Math.sign(l.z)+c.z*r,h[x+0]=c.x,h[x+1]=c.y,h[x+2]=c.z,Math.floor(x/p)){case 0:g.set(1,0,0),f[_+0]=ls(g,c,"z","y",r,i),f[_+1]=1-ls(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[_+0]=1-ls(g,c,"z","y",r,i),f[_+1]=1-ls(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[_+0]=1-ls(g,c,"x","z",r,e),f[_+1]=ls(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),f[_+0]=1-ls(g,c,"x","z",r,e),f[_+1]=1-ls(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),f[_+0]=1-ls(g,c,"x","y",r,e),f[_+1]=1-ls(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[_+0]=ls(g,c,"x","y",r,e),f[_+1]=1-ls(g,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Hd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Vt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Cg(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let g=0;g<o[u].length;++g)f.push(o[u][g][h]);let p=Cg(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Cg(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ii(o,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let g=u.getComponent(h,p);a.setComponent(h+d,p,g)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var sE=(n,e)=>{let t=document.createElement("canvas");return t.width=n,t.height=e,t};function rE(n,e){return sE(n,e)}function It(n,e,t,{srgb:i=!0,repeat:s=null,anisotropy:r=4}={}){let o=rE(n,e),a=o.getContext("2d"),l=new Rl(o);i&&(l.colorSpace=ci),l.anisotropy=r,s&&(l.wrapS=hr,l.wrapT=hr,l.repeat.set(s[0],s[1]));let c={canvas:o,g:a,tex:l,w:n,h:e,redraw(u=t){u&&(a.save(),u(a,n,e),a.restore(),l.needsUpdate=!0)}};return c.redraw(t),c}var Rt='"Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',bt='"Cascadia Mono", Consolas, "SFMono-Regular", Menlo, monospace',Ut=Math.PI*2,Js=Math.PI/180,st=(n,e,t)=>n<e?e:n>t?t:n,Zi=(n,e,t)=>n+(e-n)*t,sp=n=>{let e=st(n,0,1);return e*e*(3-2*e)},cs=n=>{let e=st(n,0,1);return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2},Zt=(n,e,t,i)=>Zi(n,e,1-Math.exp(-t*i));function oc(n,e,t){let i=(e-n)%Ut;return i>Math.PI&&(i-=Ut),i<-Math.PI&&(i+=Ut),n+i*t}function rp(n,e){let t=(e-n)%Ut;return t>Math.PI&&(t-=Ut),t<-Math.PI&&(t+=Ut),t}var Pg=new _t,Ig=new mn,Lg=new $n,Dg=new C,Ng=new C;function N(n,e=[0,0,0],t=[0,0,0],i=[1,1,1]){return Lg.set(t[0],t[1],t[2]),Ig.setFromEuler(Lg),Dg.set(e[0],e[1],e[2]),Ng.set(i[0],i[1],i[2]),Pg.compose(Dg,Ig,Ng),n.applyMatrix4(Pg),n}var Le=(n,e,t,i=.02,s=2)=>new zd(n,e,t,s,Math.min(i,n/2-1e-4,e/2-1e-4,t/2-1e-4)),Te=(n,e,t)=>new tn(n,e,t),ce=(n,e,t,i=32,s=!1)=>new Fn(n,e,t,i,1,s),Bi=(n,e=24,t=16)=>new Gn(n,e,t),Jt=(n,e,t=12,i=48,s=Ut)=>new Ci(n,e,t,i,s),hi=(n,e=48)=>new Ul(n.map(([t,i])=>new Ae(t,i)),e);function za(n,e,t,i=.018,s=.014,r=0){let o=[];for(let a=0;a<n;a++){let l=r+a/n*Ut;o.push(N(ce(i,i,s,6),[Math.cos(l)*e,t,Math.sin(l)*e],[0,l,0]))}return o}function op(n,e,t,i,s=.02){let r=new ws,o=Ut/n;for(let l=0;l<n;l++){let c=l*o,u=[[e,c],[t,c+o*.18],[t,c+o*.42],[e,c+o*.6]];for(let d=0;d<u.length;d++){let[h,f]=u[d],p=Math.cos(f)*h,g=Math.sin(f)*h;l===0&&d===0?r.moveTo(p,g):r.lineTo(p,g)}}if(r.closePath(),s>0){let l=new xr;l.absarc(0,0,s,0,Ut,!0),r.holes.push(l)}let a=new Xs(r,{depth:i,bevelEnabled:!0,bevelThickness:i*.08,bevelSize:i*.06,bevelSegments:1,curveSegments:6});return a.translate(0,0,-i/2),a}function fi(n,e,t=.12,i=16){let s=n.map(l=>l.isVector3?l.clone():new C(l[0],l[1],l[2])),r=new Aa,o=s[0].clone();for(let l=1;l<s.length;l++){let c=s[l];if(l<s.length-1){let u=s[l+1],d=c.clone().sub(s[l-1]),h=u.clone().sub(c),f=Math.min(t,d.length()/2,h.length()/2),p=c.clone().sub(d.normalize().multiplyScalar(f)),g=c.clone().add(h.normalize().multiplyScalar(f));p.distanceTo(o)>1e-5&&r.add(new wo(o.clone(),p)),r.add(new Eo(p,c.clone(),g)),o=g}else c.distanceTo(o)>1e-5&&r.add(new wo(o.clone(),c.clone()))}let a=r.getLength();return new Bl(r,Math.max(16,Math.round(a*40)),e,i,!1)}var ft=class{constructor(){this.parts=new Map}add(e,...t){let i=this.parts.get(e);i||this.parts.set(e,i=[]);for(let s of t.flat())i.push(s.index?s.toNonIndexed():s);return this}build(e,{castShadow:t=!0,receiveShadow:i=!0,name:s="kit"}={}){let r=new Kt;r.name=s;for(let[o,a]of this.parts){if(!a.length)continue;let l=e[o];if(!l)throw new Error(`Kit: unknown material "${o}"`);for(let d of a){for(let h of Object.keys(d.attributes))h!=="position"&&h!=="normal"&&h!=="uv"&&d.deleteAttribute(h);d.clearGroups()}let c=a.length===1?a[0]:Hd(a,!1);if(!c)throw new Error(`Kit: merge failed for "${o}"`);if(a.length>1)for(let d of a)d.dispose();let u=new et(c,l);u.name=`${s}:${o}`,u.castShadow=t&&!l.transparent&&!l.transmission,u.receiveShadow=i,r.add(u)}return this.parts.clear(),r}};function nt(n,e,t,i,s,{cast:r=!0,receive:o=!0}={}){let a=new et(n,e);return t&&a.position.set(t[0],t[1],t[2]),i&&a.rotation.set(i[0],i[1],i[2]),s&&a.scale.set(s[0],s[1],s[2]),a.castShadow=r,a.receiveShadow=o,a}function Nt(n,e,t){let i=new Kt;return i.name=n||"",e&&i.position.set(e[0],e[1],e[2]),t&&i.rotation.set(t[0],t[1],t[2]),i}var Gd=class{constructor(e){this.points=e.map(t=>t.isVector3?t.clone():new C(t[0],t[1],t[2])),this.cum=[0];for(let t=1;t<this.points.length;t++)this.cum.push(this.cum[t-1]+this.points[t].distanceTo(this.points[t-1]));this.length=this.cum[this.cum.length-1]}at(e,t=new C){let i=st(e,0,this.length),s=1;for(;s<this.cum.length-1&&this.cum[s]<i;)s++;let r=this.cum[s]-this.cum[s-1]||1;return t.lerpVectors(this.points[s-1],this.points[s],(i-this.cum[s-1])/r)}};function Og(n){let e=new Set;n.traverse(t=>{t.geometry&&t.geometry.dispose();let i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of i){for(let r of Object.values(s))r&&r.isTexture&&e.add(r);s.dispose()}});for(let t of e)t.dispose()}function Ht(n,e,t,i,s,r,o,a=32,l=!0){let c=[],u=[],d=[],h=[];for(let p=0;p<=a;p++){let g=p/a,m=l?s-(s-i)*g:i+(s-i)*g,x=Math.cos(m),_=Math.sin(m),b=n+t*x,y=e-t*_,M=l?-x:x,w=l?_:-_;c.push(b,r,y,b,o,y),u.push(M,0,w,M,0,w),d.push(g,0,g,1)}for(let p=0;p<a;p++){let g=p*2;h.push(g,g+2,g+3,g,g+3,g+1)}let f=new Vt;return f.setAttribute("position",new ht(c,3)),f.setAttribute("normal",new ht(u,3)),f.setAttribute("uv",new ht(d,2)),f.setIndex(h),f}function Rs(n,e,t,{closed:i=!1,facing:s=null}={}){let r=[],o=[],a=[],l=[],c=n.length,u=i?c:c-1,d=0;for(let f=0;f<u;f++){let p=n[f],g=n[(f+1)%c],m=g[0]-p[0],x=g[1]-p[1],_=Math.hypot(m,x);if(_<1e-6)continue;let b=x/_,y=-m/_,M=!1;s&&!s((p[0]+g[0])/2,(p[1]+g[1])/2,b,y)&&(b=-b,y=-y,M=!0);let w=r.length/3;r.push(p[0],e,p[1],p[0],t,p[1],g[0],e,g[1],g[0],t,g[1]);for(let v=0;v<4;v++)o.push(b,0,y);a.push(d,0,d,1,d+_,0,d+_,1),d+=_,M?l.push(w,w+2,w+3,w,w+3,w+1):l.push(w,w+1,w+3,w,w+3,w+2)}let h=new Vt;return h.setAttribute("position",new ht(r,3)),h.setAttribute("normal",new ht(o,3)),h.setAttribute("uv",new ht(a,2)),h.setIndex(l),h}function kg(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function oE(){let n=kg(7);return It(256,256,(e,t,i)=>{e.fillStyle="rgb(205,205,205)",e.fillRect(0,0,t,i);for(let s=0;s<900;s++){let r=n()*i,o=150+n()*105;e.strokeStyle=`rgba(${o},${o},${o},${.18+n()*.35})`,e.lineWidth=.5+n()*1.2,e.beginPath();let a=n()*t;e.moveTo(a-t,r),e.lineTo(a+t*(.3+n()),r+(n()-.5)*.6),e.stroke()}},{srgb:!1,repeat:[2,2]})}function aE(){let n=kg(23);return It(512,512,(e,t,i)=>{let s=t/2,r=t/2,o=e.createRadialGradient(s,s,10,s,s,r);o.addColorStop(0,"#5a6372"),o.addColorStop(1,"#2c323d"),e.fillStyle=o,e.fillRect(0,0,t,i);let a=26;for(let l=0;l<t;l+=a)for(let c=0;c<i;c+=a){let u=l+a/2-s,d=c+a/2-s;if(Math.hypot(u,d)>r-a*.9)continue;let h=70+n()*40;e.fillStyle=`rgb(${h-8},${h},${h+22})`,e.fillRect(l+2,c+2,a-4,a-4),e.fillStyle=`rgba(190,205,230,${.15+n()*.2})`,e.fillRect(l+6,c+6,a-14,3),e.fillRect(l+6,c+a-10,6,4)}e.strokeStyle="rgba(210,220,235,0.55)",e.lineWidth=6,e.beginPath(),e.arc(s,s,r-4,0,Ut),e.stroke()},{anisotropy:8})}function lE(){return It(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.45,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,e),n.fillStyle=t,n.fillRect(0,0,e,e)})}function cE(){return It(256,32,(n,e,t)=>{n.fillStyle="#b89a52",n.fillRect(0,0,e,t),n.fillStyle="#2a2d33";for(let i=-t;i<e+t;i+=32)n.beginPath(),n.moveTo(i,t),n.lineTo(i+16,t),n.lineTo(i+16+t,0),n.lineTo(i+t,0),n.closePath(),n.fill()},{repeat:[1,1]})}function uE(){return It(128,128,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="#4b5059";for(let i=8;i<t-4;i+=12)n.fillRect(8,i,e-16,6)})}var Ln=n=>new wt(n);function zi({color:n=13951743,opacity:e=.06,fresnel:t=.5,roughness:i=.04,metalness:s=0,envMapIntensity:r=1.3,side:o=$s,emissive:a=0,emissiveIntensity:l=0}={}){let c=new wt({color:n,opacity:e,roughness:i,metalness:s,envMapIntensity:r,side:o,emissive:a,emissiveIntensity:l,transparent:!0,depthWrite:!1});return c.blending=Na,c.blendSrc=Kr,c.blendDst=Zr,c.blendSrcAlpha=Kr,c.blendDstAlpha=Zr,c.userData.fresnel=t,c.onBeforeCompile=u=>{u.uniforms.uFresnel={value:t},u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFresnel;`).replace("#include <opaque_fragment>",`
        float glassF = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        float glassA = clamp(diffuseColor.a + glassF * uFresnel, 0.0, 1.0);
        gl_FragColor = vec4(totalDiffuse * glassA + totalSpecular + totalEmissiveRadiance, glassA);`)},c.customProgramCacheKey=()=>"dwp3d-fake-glass",c}function Fg(n="high"){let e={brushed:oE().tex,wafer:aE().tex,radial:lE().tex,hazard:cE().tex,grille:uE().tex};return{M:{alu:Ln({color:12830927,metalness:1,roughness:.34,roughnessMap:e.brushed}),aluDark:Ln({color:8094091,metalness:.9,roughness:.38,roughnessMap:e.brushed}),chrome:Ln({color:14936044,metalness:1,roughness:.08}),steel:Ln({color:11646654,metalness:1,roughness:.28}),darkSteel:Ln({color:6251886,metalness:1,roughness:.34}),brass:Ln({color:13876630,metalness:1,roughness:.3}),copper:Ln({color:12946278,metalness:1,roughness:.3}),gold:Ln({color:15320959,metalness:1,roughness:.22}),white:Ln({color:15856630,metalness:0,roughness:.32}),graphite:Ln({color:9344416,metalness:.55,roughness:.34,roughnessMap:e.brushed}),blue:Ln({color:5073918,metalness:.2,roughness:.35}),orange:Ln({color:13137466,metalness:.3,roughness:.36}),rubber:Ln({color:1382171,metalness:0,roughness:.8}),plastic:Ln({color:2303532,metalness:0,roughness:.45}),ceramic:Ln({color:15001579,metalness:0,roughness:.42}),grille:Ln({map:e.grille,metalness:.6,roughness:.45}),hazard:Ln({map:e.hazard,metalness:.2,roughness:.55}),glass:zi({color:14674421,opacity:.08,fresnel:.55}),smoke:zi({color:11059160,opacity:.22,fresnel:.45,roughness:.1,side:jt}),fuel:Ln({color:666222,emissive:3114751,emissiveIntensity:2.2,roughness:.25,metalness:0}),fuelTop:Ln({color:1919920,emissive:9225471,emissiveIntensity:3,roughness:.15,metalness:0}),bubble:Ln({color:12572415,emissive:11850495,emissiveIntensity:2.4,roughness:.1,metalness:0}),floor:Ln({color:13949150,metalness:0,roughness:.25}),wall:Ln({color:15133166,metalness:0,roughness:.5}),shadow:new Dt({color:0,map:e.radial,transparent:!0,opacity:.55,depthWrite:!1}),waferTop:new zl({color:16777215,map:e.wafer,metalness:.85,roughness:.16,iridescence:n==="low"?0:1,iridescenceIOR:1.35,iridescenceThicknessMinimum:180,iridescenceThicknessMaximum:520}),waferEdge:Ln({color:7172989,metalness:.9,roughness:.3})},tex:e,transmission:!1}}function $t(n,e=0){let t=new ke(n);return new wt({color:t.clone().multiplyScalar(.25),emissive:t,emissiveIntensity:e,roughness:.3,metalness:0})}function Ha(n,e=1.25){return new wt({color:329223,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.32,metalness:0})}function Jn(n,e=.55){return new wt({map:n,metalness:e,roughness:.42})}var No=Math.PI/180,Xe={cx:.5,cz:-1,r:22,h:13.5},us={panes:24,finDepth:.36,doorA0:263*No,doorA1:277*No,doorH:3.1},Qr={a0:236*No,a1:304*No,r0:22,r1:26,slab:.45,rail:1.1,canopyY:4.2},ds={r:22.35,groundY:-420},ri={r:21.3,yMin:.35,yMax:13,outerR:22.6,balconyR:25.45,balconyYMax:3.85,edge:1.5*No,targetR:17,targetYMin:.4,targetYMax:12},Ot={cx:.25,cz:-1,hx:11.75,hz:6.6,r:4.5,depth:2.6},Wd=.45,Mr=[{id:"energy",type:"capsule",a:[-8.2,-.5],b:[-2.5,-.5],r:2.6},{id:"cell",type:"circle",c:[2.6,-1],r:4.45},{id:"delivery",type:"circle",c:[8.55,.75],r:2.6},{id:"dock",type:"circle",c:[-5.3,-5],r:2.1},{id:"bridge-in",type:"box",c:[-.8,1.65],h:[1.5,.75]},{id:"bridge-out",type:"box",c:[6.25,1.6],h:[.75,.75]},{id:"bridge-front-cell",type:"box",c:[2.6,4.6],h:[.9,1.5]},{id:"bridge-front-energy",type:"box",c:[-5.4,4],h:[.8,2]},{id:"bridge-back-cell",type:"box",c:[2.6,-6.6],h:[.9,1.4]},{id:"bridge-back-dock",type:"box",c:[-5.3,-7.3],h:[.8,.7]}],rt={r:12.5,back:12.95,screenR:12.38,moduleR:12.17,a0:38*No,a1:142*No,screenY:4.9,gap:.5,top:7.9,bandY0:2.6,bandY1:7.2},ap=[{id:"flow",w:6,px:[1152,532]},{id:"main",w:7.6,px:[1536,636]},{id:"cost",w:6,px:[1152,532]}];function to(n,e,t=0,i=new C){return i.set(Xe.cx+e*Math.cos(n),t,Xe.cz-e*Math.sin(n))}var lp=Math.PI*2,Vd=(n,e,t)=>Math.min(t,Math.max(e,n)),Ug=(n,e)=>{let t=Math.abs(n-e)%lp;return t>Math.PI?lp-t:t};function cp(n,e){let t=Math.atan2(-(e-Xe.cz),n-Xe.cx);return t<0?t+lp:t}function eo(n){let e=ri,t=1e-6;if(n.y<e.yMin-t)return null;let i=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);if(i<=e.r+t)return n.y<=e.yMax+t?"hall":null;let s=cp(n.x,n.z);return i<=e.outerR+t?s>=us.doorA0+e.edge-t&&s<=us.doorA1-e.edge+t&&n.y<=us.doorH-.25+t?"door":null:s>=Qr.a0+e.edge-t&&s<=Qr.a1-e.edge+t&&i<=e.balconyR+t&&n.y<=e.balconyYMax+t?"balcony":null}function Bg(n,e,t){let i=n.x-Xe.cx,s=n.z-Xe.cz,r=Math.hypot(i,s),o=Vd(r,e,t);r>1e-9&&o!==r&&(n.x=Xe.cx+i*o/r,n.z=Xe.cz+s*o/r)}function zg(n,e,t){let i=cp(n.x,n.z);if(i>=e&&i<=t)return;let s=Ug(i,e)<Ug(i,t)?e:t,r=Math.hypot(n.x-Xe.cx,n.z-Xe.cz);n.x=Xe.cx+r*Math.cos(s),n.z=Xe.cz-r*Math.sin(s)}function up(n,e=null){if(eo(n))return n;let t=ri,i=e?eo(e):null;if(!i){let s=Math.hypot(n.x-Xe.cx,n.z-Xe.cz),r=cp(n.x,n.z);i=s>Xe.r&&r>=Qr.a0&&r<=Qr.a1?"balcony":"hall"}if(i==="door"){if(zg(n,us.doorA0+t.edge,us.doorA1-t.edge),n.y=Vd(n.y,t.yMin,us.doorH-.25),eo(n))return n;i=Math.hypot(e.x-Xe.cx,e.z-Xe.cz)>Xe.r?"balcony":"hall"}return i==="balcony"?(zg(n,Qr.a0+t.edge,Qr.a1-t.edge),Bg(n,t.outerR+.001,t.balconyR),n.y=Vd(n.y,t.yMin,t.balconyYMax)):(Bg(n,0,t.r),n.y=Vd(n.y,t.yMin,t.yMax)),n}function Xd(){let n=rt.screenR,e=ap.reduce((i,s)=>i+s.w,0)+rt.gap*(ap.length-1),t=Math.PI/2+e/n/2;return ap.map(i=>{let s=i.w/n,r=t,o=t-s;t=o-rt.gap/n;let a=i.w*(i.px[1]/i.px[0]);return{...i,h:a,a0:o,a1:r,a:(o+r)/2,y0:rt.screenY-a/2,y1:rt.screenY+a/2}})}function dE(n,e,t,i,s){let r=i[0]-t[0],o=i[1]-t[1],a=n-t[0],l=e-t[1],c=Math.min(1,Math.max(0,(a*r+l*o)/(r*r+o*o)));return Math.hypot(a-r*c,l-o*c)-s}function hE(n,e,t,i){let s=Math.abs(n-t[0])-i[0],r=Math.abs(e-t[1])-i[1];return Math.hypot(Math.max(s,0),Math.max(r,0))+Math.min(Math.max(s,r),0)}function fE(n,e,t){return n.type==="circle"?Math.hypot(e-n.c[0],t-n.c[1])-n.r:n.type==="capsule"?dE(e,t,n.a,n.b,n.r):hE(e,t,n.c,n.h)}function Gg(n,e,t=Mr){let i=1/0;for(let s of t)i=Math.min(i,fE(s,n,e));return i}function Vg(n,e){let t=Math.abs(n-Ot.cx)-Ot.hx+Ot.r,i=Math.abs(e-Ot.cz)-Ot.hz+Ot.r;return Math.hypot(Math.max(t,0),Math.max(i,0))+Math.min(Math.max(t,i),0)-Ot.r}var Vn=n=>{let e=Number(n).toFixed(4);return e.includes(".")?e:`${e}.0`};function Hg(n){return n.type==="circle"?`length(p - vec2(${Vn(n.c[0])}, ${Vn(n.c[1])})) - ${Vn(n.r)}`:n.type==="capsule"?`lSdCapsule(p, vec2(${Vn(n.a[0])}, ${Vn(n.a[1])}), vec2(${Vn(n.b[0])}, ${Vn(n.b[1])}), ${Vn(n.r)})`:`lSdBox(p, vec2(${Vn(n.c[0])}, ${Vn(n.c[1])}), vec2(${Vn(n.h[0])}, ${Vn(n.h[1])}))`}function Wg(){let n=Mr.find(t=>t.id==="cell");return`
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
${Mr.map((t,i)=>i===0?`  float d = ${Hg(t)};`:`  d = min(d, ${Hg(t)});`).join(`
`)}
  return d;
}
float sdWell(vec2 p) {
  vec2 q = abs(p - vec2(${Vn(Ot.cx)}, ${Vn(Ot.cz)})) - vec2(${Vn(Ot.hx-Ot.r)}, ${Vn(Ot.hz-Ot.r)});
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - ${Vn(Ot.r)};
}
const vec2 HUB_C = vec2(${Vn(n.c[0])}, ${Vn(n.c[1])});
const float HUB_R = ${Vn(n.r)};
`}function Xg(n=.5){let{cx:e,cz:t,hx:i,hz:s,r}=Ot,o=[],a=[[e+i-r,t+s-r,0],[e-i+r,t+s-r,Math.PI/2],[e-i+r,t-s+r,Math.PI],[e+i-r,t-s+r,3*Math.PI/2]],l=Math.max(6,Math.ceil(Math.PI/2*r/n)),c=(u,d,h,f)=>{let p=Math.max(1,Math.ceil(Math.hypot(h-u,f-d)/n));for(let g=0;g<p;g++)o.push([u+(h-u)*g/p,d+(f-d)*g/p])};for(let u=0;u<4;u++){let[d,h,f]=a[u];for(let M=0;M<l;M++){let w=f+Math.PI/2*M/l;o.push([d+r*Math.cos(w),h+r*Math.sin(w)])}let[p,g,m]=a[(u+1)%4],x=d+r*Math.cos(f+Math.PI/2),_=h+r*Math.sin(f+Math.PI/2),b=p+r*Math.cos(m),y=g+r*Math.sin(m);c(x,_,b,y)}return o}var ac=Math.PI/180;function pE(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ji(n,e){let t=n.replace("#",""),i=parseInt(t.length===3?t.split("").map(s=>s+s).join(""):t,16);return`rgba(${i>>16&255},${i>>8&255},${i&255},${Math.max(0,Math.min(1,e)).toFixed(3)})`}function $g(n,e,t){let i=parseInt(n.replace("#",""),16),s=parseInt(e.replace("#",""),16),r=o=>Math.round((i>>o&255)*(1-t)+(s>>o&255)*t);return`#${(r(16)<<16|r(8)<<8|r(0)).toString(16).padStart(6,"0")}`}function mE(n,e){return(n/(2*Math.PI)+.5)*e}function lc(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.scale(i/s,1);let a=n.createRadialGradient(0,0,0,0,0,s);a.addColorStop(0,Ji(r,o)),a.addColorStop(.45,Ji(r,o*.42)),a.addColorStop(1,Ji(r,0)),n.fillStyle=a,n.beginPath(),n.arc(0,0,s,0,Math.PI*2),n.fill(),n.restore()}function gE(n,e,t,i){let s=i.sky,r=e/360,o=b=>(.5-b/180)*t,a=(b,y)=>{y(b-e),y(b),y(b+e)},l=pE(i.id==="day"?7:3),c=n.createLinearGradient(0,0,0,t),u=[[90,s.zenith],[48,s.high],[22,s.mid],[9,s.low],[2.5,s.horizon],[0,s.horizon],[-.6,s.groundHaze],[-4.5,s.groundHaze],[-9,s.ground],[-90,s.below]];for(let[b,y]of u)c.addColorStop(Math.min(1,Math.max(0,o(b)/t)),y);n.globalCompositeOperation="source-over",n.fillStyle=c,n.fillRect(0,0,e,t);let d=i.sun.dir,h=mE(Math.atan2(d[2],d[0]),e),f=o(Math.asin(d[1])/ac);if(a(h,b=>{lc(n,b,o(3),100*r,16*r,s.sunGlow,.55),lc(n,b,f,60*r,60*r,s.sunGlow,.42),lc(n,b,f,14*r,14*r,"#fff4e4",.5)}),a(h+e/2,b=>lc(n,b,o(8),130*r,7*r,s.belt,.2)),s.clouds>0){n.filter="blur(2px)";for(let b=0;b<54;b++){let y=3+24*Math.pow(l(),1.6),M=l()*e,w=(8+42*l())*r,v=(.35+1.4*l())*r,S=Math.abs(M-h)%e;S=Math.min(S,e-S)/e;let D=Math.max(0,1-S/.28),T=$g(s.cloudDark,s.cloudLit,D),P=s.clouds*(.18+.32*l())*(.6+.4*D);a(M,k=>lc(n,k,o(y),w,v,T,P))}n.filter="none"}if(s.stars>0)for(let b=0;b<760;b++){let y=Math.sin(16*ac)+l()*(1-Math.sin(16*ac)),M=Math.asin(y)/ac,w=Math.min(1,Math.max(0,(M-16)/26)),v=s.stars*w*(.25+.7*l()*l());if(v<.03)continue;let S=.7+l()*1.1,D=1/Math.max(.12,Math.cos(M*ac));n.fillStyle=l()<.2?Ji("#bcd2ff",v):Ji("#ffffff",v),n.fillRect(l()*e,o(M),S*D,S)}let p=s.far,g=$g(p.body,p.haze,.55),m=0;for(;m<e;){let b=2+Math.floor(l()*12),y=l()<.07?1.5+l()*1.1:.15+Math.pow(l(),1.8)*1.2,M=o(y),w=o(-2.5);if(n.fillStyle=g,n.fillRect(m,M,b,w-M),y>2.1&&l()<.6&&n.fillRect(m+b/2-.5,M-3-l()*5,1,4+l()*5),p.windows>0){let v=Math.floor((w-M)*b*.05*p.windows);for(let S=0;S<v;S++){let D=l(),T=D<.62?"#ffc078":D<.85?"#cfe3ff":"#5fe1ff";n.fillStyle=Ji(T,(.25+.4*l())*Math.min(1,p.windows*1.4)),n.fillRect(m+Math.floor(l()*b),M+Math.floor(l()*(w-M)),1,1)}}p.neon>0&&l()<.04&&(n.fillStyle=Ji(l()<.7?"#46e6ff":"#ffb347",.45*p.neon),n.fillRect(m,M-1,b,1)),m+=b+(l()<.3?Math.floor(l()*8):0)}let x=n.createLinearGradient(0,o(1.8),0,o(-3.2));if(x.addColorStop(0,Ji(p.haze,0)),x.addColorStop(.45,Ji(p.haze,.38)),x.addColorStop(1,Ji(p.haze,.62)),n.fillStyle=x,n.fillRect(0,o(1.8),e,o(-3.2)-o(1.8)),s.lights>0){let b=Math.round(9e3*s.lights);for(let y=0;y<b;y++){let M=Math.pow(l(),1.3),w=-.3-3.9*M,v=l(),S=v<.6?"#ffb46a":v<.82?"#ffe2b0":v<.93?"#ffffff":"#55dcff";n.fillStyle=Ji(S,(.12+.25*l())*Math.min(1,s.lights*1.2)*(.4+.6*M)),n.fillRect(l()*e,o(w),1,1)}}let _=n.createLinearGradient(0,o(.6),0,o(-4.4));_.addColorStop(0,Ji(s.groundHaze,.1)),_.addColorStop(1,Ji(s.groundHaze,.9)),n.fillStyle=_,n.fillRect(0,o(.6),e,o(-4.4)-o(.6))}var xE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 p = projectionMatrix * viewMatrix * wp;
  // Draw on the far plane so the dome never clips, whatever the camera range.
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
}
`,yE=`
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
`;function vE(n,e){let t=new Mo;t.background=new ke(n.clear);let i=new et(new Gn(150,32,16),e);i.frustumCulled=!1,t.add(i);let s=n.interior,r=(u,d=1)=>{let h=new Dt({side:jt,fog:!1,toneMapped:!1});return h.color.set(u).multiplyScalar(d),h},o=(u,d,h=[0,0,0])=>{let f=new et(u,d);return f.position.set(h[0],h[1],h[2]),t.add(f),f},a=Xe.cx,l=Xe.cz;o(new wn(6.4,Xe.r,64,1).rotateX(Math.PI/2),r(s.ceiling,.9),[a,Xe.h,l]),o(new Ci(11.5,.32,8,96).rotateX(Math.PI/2),r(s.ring,s.ringPower),[a,Xe.h-.25,l]),o(new Hn(Xe.r+.5,64).rotateX(-Math.PI/2),r(s.floor,.62),[a,0,l]),o(new wn(Xe.r-.6,Xe.r,64,1).rotateX(Math.PI/2),r(s.column,.8),[a,Xe.h-.55,l]),o(Ht(a,l,Xe.r-.6,0,Math.PI*2,Xe.h-.55,Xe.h,64,!0),r(s.column,.85)),o(Ht(a,l,rt.r,rt.a0,rt.a1,rt.bandY0,rt.bandY1,32,!0),r(s.media,1)),o(Ht(a,l,rt.r,rt.a0,rt.a1,rt.bandY1,rt.top,32,!0),r(s.column,.85)),o(Ht(a,l,rt.r-.3,rt.a0,rt.a1,0,2.25,32,!0),r(s.column,.75));let c=r(s.screen,.7);for(let u of Xd())o(Ht(a,l,rt.screenR-.02,u.a0,u.a1,u.y0,u.y1,12,!0),c);return t}function _E(n,e){let t=new Set;n.traverse(i=>{i.geometry&&!t.has(i.geometry)&&(t.add(i.geometry),i.geometry.dispose()),i.material&&i.material!==e&&!t.has(i.material)&&(t.add(i.material),i.material.dispose())})}function qg(n,e,{quality:t="high"}={}){let i=t==="low"?1024:2048,s=i/2,r=It(i,s,null,{anisotropy:1});r.tex.wrapS=hr,r.tex.generateMipmaps=!1,r.tex.minFilter=In,r.tex.magFilter=In;let o=new dn({name:"sky-dome",uniforms:{tSky:{value:r.tex},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new ke(1,1,1)},uSunPower:{value:20},uIntensity:{value:1}},vertexShader:xE,fragmentShader:yE,side:di,depthTest:!1,depthWrite:!1,fog:!1}),a=new et(new Gn(500,48,24),o);a.name="sky-dome",a.renderOrder=-100,a.frustumCulled=!1;let l=null,c=e;function u(){if(!n)return;let h=vE(c,o),f=new Ua(n),p=f.fromScene(h,.035,.1,400,{size:256,position:new C(Xe.cx,1.6,Xe.cz)});f.dispose(),_E(h,o),l&&l.dispose(),l=p}function d(h){c=h,r.redraw((f,p,g)=>gE(f,p,g,h)),o.uniforms.uSunDir.value.fromArray(h.sun.dir).normalize(),o.uniforms.uSunColor.value.set(h.sun.disc),o.uniforms.uSunPower.value=h.sun.discPower,u()}return d(e),{dome:a,texture:r.tex,get envTexture(){return l?l.texture:null},setLook:d,dispose(){a.geometry.dispose(),o.dispose(),r.tex.dispose(),l&&l.dispose(),l=null}}}var hn=1,bE=`
uniform mat4 uReflMatrix;
varying vec4 vReflCoord;
`,ME=`
vReflCoord = uReflMatrix * (modelMatrix * vec4(transformed, 1.0));
`,SE=`
uniform sampler2D tReflect;
uniform float uReflStrength;
uniform float uReflBlur;
varying vec4 vReflCoord;
`,wE=`
{
  vec2 reflUv = vReflCoord.xy / max(vReflCoord.w, 1e-4);
  float reflFres = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 4.0);
  // Mirror-like: a strong base reflectance rising toward grazing angles. The lit diffuse part is
  // only dimmed a little, so shadows on the floor stay readable under the reflection.
  float reflK = uReflStrength * reflMask * mix(0.4, 1.0, reflFres) * (1.0 - roughnessFactor * 0.9);
  vec3 reflCol = texture2D(tReflect, reflUv, uReflBlur + roughnessFactor * 5.0).rgb;
  outgoingLight = outgoingLight * (1.0 - reflK * 0.4) + reflCol * reflK;
}
`;function Yg(n,{scale:e=.4,strength:t=.5,blur:i=1}={}){let s=new ui(16,16,{type:Pi,generateMipmaps:!0,minFilter:Es,magFilter:In,depthBuffer:!0});s.texture.name="planar-reflection";let r={tReflect:{value:s.texture},uReflMatrix:{value:new _t},uReflStrength:{value:t},uReflBlur:{value:i}},o=new ni;o.layers.set(0);let a=new C(0,1,0),l=new C(0,0,0),c=new C,u=new _t,d=new C,h=new C,f=new C,p=new Ti,g=new vn,m=new vn,x=new Ae,_=0;function b(M){M.uniforms.tReflect=r.tReflect,M.uniforms.uReflMatrix=r.uReflMatrix,M.uniforms.uReflStrength=r.uReflStrength,M.uniforms.uReflBlur=r.uReflBlur,M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
${bE}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${ME}`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
${SE}`).replace("#include <opaque_fragment>",`${wE}
#include <opaque_fragment>`)}function y(M,w){if(!n)return!1;n.getDrawingBufferSize(x);let v=Math.max(16,Math.round(x.x*e)),S=Math.max(16,Math.round(x.y*e));if((s.width!==v||s.height!==S)&&s.setSize(v,S),c.setFromMatrixPosition(w.matrixWorld),h.subVectors(l,c),h.dot(a)>0)return!1;h.reflect(a).negate().add(l),u.extractRotation(w.matrixWorld),d.set(0,0,-1).applyMatrix4(u).add(c),f.subVectors(l,d).reflect(a).negate().add(l),o.position.copy(h),o.up.set(0,1,0).applyMatrix4(u).reflect(a),o.lookAt(f),o.far=w.far,o.updateMatrixWorld(),o.projectionMatrix.copy(w.projectionMatrix),o.projectionMatrix.elements[8]*=-1,o.projectionMatrix.elements[12]*=-1;let D=r.uReflMatrix.value;D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(o.projectionMatrix),D.multiply(o.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(a,l),p.applyMatrix4(o.matrixWorldInverse),g.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let T=o.projectionMatrix.elements;m.x=(Math.sign(g.x)+T[8])/T[0],m.y=(Math.sign(g.y)+T[9])/T[5],m.z=-1,m.w=(1+T[10])/T[14],g.multiplyScalar(2/g.dot(m)),T[2]=g.x,T[6]=g.y,T[10]=g.z+1-_,T[14]=g.w,o.projectionMatrixInverse.copy(o.projectionMatrix).invert();let P=n.getRenderTarget(),k=n.autoClear,z=n.shadowMap.autoUpdate,I=n.shadowMap.needsUpdate;return n.shadowMap.autoUpdate=!1,n.shadowMap.needsUpdate=!1,n.setRenderTarget(s),n.state.buffers.depth.setMask(!0),n.autoClear=!1,n.clear(!0,!0,!1),n.render(M,o),n.autoClear=k,n.shadowMap.autoUpdate=z,n.shadowMap.needsUpdate=I,n.setRenderTarget(P),!0}return{uniforms:r,inject:b,update:y,setStrength(M){r.uReflStrength.value=M},dispose(){s.dispose()}}}var Hi=Math.PI*2,fp=Wg();function $d(n,e,t){let i=new Dt({name:t,toneMapped:!1});return i.userData.glow={hex:n,k:e},i.color.setHex(n).multiplyScalar(e),i}var pp=`
varying vec2 vFloor;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fLine(float d, float w, float px) {
  px = max(px, 1e-5);
  float ww = max(w, px);
  return (1.0 - smoothstep(ww - px, ww + px, d)) * min(1.0, w / px);
}`;function Zg(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloor = (modelMatrix * vec4(transformed, 1.0)).xz;`)}function EE(n){let e=new wt({color:13949150,metalness:0,roughness:.07,name:"atrium-floor"});return e.onBeforeCompile=t=>{Zg(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${pp}
${fp}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * border * 2.4 + vec3(1.0, 0.8, 0.52) * inlay * 1.1;`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-atrium-floor-r":"dwp3d-atrium-floor",e}function TE(n){let e=new wt({color:15659509,metalness:0,roughness:.05,name:"island-top"});return e.onBeforeCompile=t=>{Zg(t),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${pp}
${fp}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
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
totalEmissiveRadiance += vec3(0.25, 0.75, 1.0) * (rim * 2.6 + ring * 0.35 + inner * 0.9 + ticks * 1.1);`),n&&n.inject(t)},e.customProgramCacheKey=()=>n?"dwp3d-island-top-r":"dwp3d-island-top",e}var AE=`
varying vec2 vFloor;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vFloor = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,RE=`
uniform float uTravel;
uniform float uFlow;
uniform float uGlow;
${pp}
${fp}
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
}`,CE=`
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
}`,PE=`
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
}`;function IE(n,e=0,t=.3){let i=[];if(n.type==="circle"){let o=n.r+e,a=Math.max(32,Math.ceil(Hi*o/t));for(let l=0;l<a;l++){let c=l/a*Hi;i.push([n.c[0]+o*Math.cos(c),n.c[1]-o*Math.sin(c)])}return{pts:i,center:()=>n.c}}if(n.type==="capsule"){let o=n.b[0]-n.a[0],a=n.b[1]-n.a[1],l=Math.hypot(o,a),c=o/l,u=a/l,d=-u,h=c,f=n.r+e,p=Math.max(16,Math.ceil(Math.PI*f/t)),g=(x,_)=>{for(let b=0;b<=p;b++){let y=_-Math.PI*b/p;i.push([x[0]+f*(Math.cos(y)*c+Math.sin(y)*d),x[1]+f*(Math.cos(y)*u+Math.sin(y)*h)])}};return g(n.b,Math.PI/2),g(n.a,-Math.PI/2),{pts:i,center:(x,_)=>{let b=st(((x-n.a[0])*c+(_-n.a[1])*u)/l,0,1);return[n.a[0]+o*b,n.a[1]+a*b]}}}let s=n.h[0]+e,r=n.h[1]+e;return i.push([n.c[0]-s,n.c[1]-r],[n.c[0]+s,n.c[1]-r],[n.c[0]+s,n.c[1]+r],[n.c[0]-s,n.c[1]+r]),{pts:i,center:()=>n.c}}function dp(n,e,t,i){let{pts:s,center:r}=IE(n,e);return Rs(s,t,i,{closed:!0,facing:(o,a,l,c)=>{let u=r(o,a);return(o-u[0])*l+(a-u[1])*c>0}})}function Kg(n,e){let t=Ot.hx-Ot.r,i=Ot.hz-Ot.r;return n.map(([s,r])=>{let o=Ot.cx+st(s-Ot.cx,-t,t),a=Ot.cz+st(r-Ot.cz,-i,i),l=o-s,c=a-r,u=Math.hypot(l,c)||1;return[s+l/u*e,r+c/u*e]})}var hp=(n,e,t,i)=>(Ot.cx-n)*t+(Ot.cz-e)*i>0;function LE(n){let e=Mr.filter(l=>l.type==="box"),t=(l,c)=>e.some(u=>Math.abs(l-u.c[0])<u.h[0]+.12&&Math.abs(c-u.c[1])<u.h[1]+.12),i=n.length,s=n.map((l,c)=>{let u=n[(c+1)%i];return!t((l[0]+u[0])/2,(l[1]+u[1])/2)&&!t(l[0],l[1])&&!t(u[0],u[1])}),r=s.indexOf(!1);if(r<0)return[n.concat([n[0]])];let o=[],a=null;for(let l=1;l<=i;l++){let c=(r+l)%i;s[c]?(a||(a=[n[c]]),a.push(n[(c+1)%i])):a&&(o.push(a),a=null)}return a&&o.push(a),o.filter(l=>l.length>=2)}function DE(){let n=1/0,e=-1/0,t=1/0,i=-1/0,s=(r,o,a)=>{n=Math.min(n,r-a),e=Math.max(e,r+a),t=Math.min(t,o-a),i=Math.max(i,o+a)};for(let r of Mr)r.type==="circle"?s(r.c[0],r.c[1],r.r):r.type==="capsule"?(s(r.a[0],r.a[1],r.r),s(r.b[0],r.b[1],r.r)):(n=Math.min(n,r.c[0]-r.h[0]),e=Math.max(e,r.c[0]+r.h[0]),t=Math.min(t,r.c[1]-r.h[1]),i=Math.max(i,r.c[1]+r.h[1]));return n=Math.max(n,Ot.cx-Ot.hx),e=Math.min(e,Ot.cx+Ot.hx),t=Math.max(t,Ot.cz-Ot.hz),i=Math.min(i,Ot.cz+Ot.hz),{x0:n,x1:e,z0:t,z1:i}}function NE(n,e,t,i=6){let s=new C().subVectors(e,n),r=s.length(),o=new Fn(t,t,r,i,1,!0);return o.applyQuaternion(new mn().setFromUnitVectors(new C(0,1,0),s.divideScalar(r))),o.translate((n.x+e.x)/2,(n.y+e.y)/2,(n.z+e.z)/2),o}function OE({kit:n,low:e,glassKit:t,floorMat:i,at:s}){let{cx:r,cz:o,r:a}=Xe,l=Qr,c=l.a1-l.a0,u=(S,D)=>[r+D*Math.cos(S),o-D*Math.sin(S)],d=new et(N(new wn(a+.2,l.r1,96,3,l.a0,c),[0,0,0],[-Math.PI/2,0,0]),i);d.name="balcony-floor",d.position.set(r,0,o),d.receiveShadow=!0,d.layers.set(hn),n.add("white",N(new wn(a+.2,ds.r,160,1,l.a1,Hi-c),[r,0,o],[-Math.PI/2,0,0])),e.add("white",Ht(r,o,ds.r,l.a1,l.a0+Hi,-.45,0,160,!1)),e.add("glowCyan",Ht(r,o,ds.r+.004,l.a1,l.a0+Hi,-.24,-.21,160,!1)),e.add("white",Ht(r,o,l.r1,l.a0,l.a1,-l.slab,0,72,!1)),e.add("silver",Ht(r,o,l.r1+.004,l.a0,l.a1,-.04,0,72,!1)),e.add("glowCyan",Ht(r,o,l.r1+.006,l.a0,l.a1,-l.slab+.03,-l.slab+.06,72,!1));for(let S of[l.a0,l.a1])e.add("white",N(Te(l.r1-ds.r,l.slab,.04),s(S,(ds.r+l.r1)/2,-l.slab/2),[0,S,0]));let h=l.r1-.06,f=a+.05,p=[];for(let S=0;S<=4;S++)p.push(u(l.a0,f+(h-f)*S/4));let g=Math.ceil(c*h/.45);for(let S=1;S<=g;S++)p.push(u(l.a0+c*S/g,h));for(let S=3;S>=0;S--)p.push(u(l.a1,f+(h-f)*S/4));let m=u((l.a0+l.a1)/2,(a+l.r1)/2),x=(S,D,T,P)=>(m[0]-S)*T+(m[1]-D)*P>0,_=(S,D,T,P)=>!x(S,D,T,P);t.add("rail",Rs(p,.045,l.rail)),n.add("chrome",fi(p.map(([S,D])=>[S,l.rail+.026,D]),.026,.1,8)),n.add("silver",Rs(p,0,.045,{facing:_})),n.add("glowCyan",Rs(p,0,.04,{facing:x}));for(let S=0;S<p.length;S+=5)n.add("chrome",N(ce(.018,.018,l.rail,8),[p[S][0],l.rail/2,p[S][1]]));let b=l.canopyY,y=a+.02,M=l.r1+.35;n.add("white",N(new wn(y,M,96,1,l.a0,c),[r,b+.14,o],[-Math.PI/2,0,0])),n.add("ceiling",N(new wn(y,M,96,1,-l.a1,c),[r,b,o],[Math.PI/2,0,0])),n.add("glowCyan",N(new wn(M-.13,M-.09,96,1,-l.a1,c),[r,b-.003,o],[Math.PI/2,0,0])),n.add("silver",Ht(r,o,M,l.a0,l.a1,b,b+.14,72,!1)),n.add("silver",Ht(r,o,M-.002,l.a0,l.a1,b,b+.14,72,!0));for(let S of[l.a0,l.a1])n.add("silver",N(Te(M-y,.14,.04),s(S,(y+M)/2,b+.07),[0,S,0]));for(let[S,D]of[[23.3,17],[25.2,19]])for(let T=0;T<D;T++){let P=l.a0+(T+.5)*c/D;n.add("glowWhite",N(new Hn(.085,16),s(P,S,b-.003),[Math.PI/2,0,0])),n.add("chrome",N(new wn(.085,.11,16,1),s(P,S,b-.002),[Math.PI/2,0,0]))}let w=new C,v=new C;for(let S=0;S<6;S++){let D=l.a0+(S+.5)*c/6;to(D,M-.15,b+.14,w),to(D,a+.03,b+3.4,v),n.add("silver",NE(w,v,.014)),n.add("chrome",N(ce(.05,.05,.03,14),v.toArray(),[0,D,Math.PI/2]))}for(let S of[250,290]){let D=S*Math.PI/180;n.add("white",N(Le(.5,.34,2.4,.05,3),s(D,23.4,.27),[0,D,0])),n.add("dark",N(Te(.32,.1,2.1),s(D,23.4,.05),[0,D,0])),n.add("glowCyan",N(Te(.33,.012,2.11),s(D,23.4,.094),[0,D,0]))}return{floor:d}}function Jg(n,{reflection:e=null}={}){let t=new Kt;t.name="atrium";let{cx:i,cz:s,r,h:o}=Xe,a={white:new wt({color:15988216,metalness:0,roughness:.34,name:"atrium-white"}),satin:new wt({color:14804459,metalness:0,roughness:.55,name:"atrium-satin"}),ceiling:new wt({color:16054009,metalness:0,roughness:.85,emissive:15134198,emissiveIntensity:.22,name:"atrium-ceiling"}),silver:new wt({color:13225686,metalness:1,roughness:.28,name:"atrium-silver"}),chrome:n.chrome,dark:new wt({color:659484,metalness:.6,roughness:.2,name:"atrium-dark"}),glowCyan:$d(4641535,3,"atrium-glow-cyan"),glowBlue:$d(5213695,2.2,"atrium-glow-blue"),glowWhite:$d(16774890,3.2,"atrium-glow-white")},l=[a.glowCyan,a.glowBlue,a.glowWhite],c=$d(16777215,5,"atrium-ring-light"),u=zi({color:13623538,opacity:.045,fresnel:.5,side:jt}),d=zi({color:14083830,opacity:.1,fresnel:.6,side:jt}),h=zi({color:14214901,opacity:.08,fresnel:.5,side:jt}),f=zi({color:13623538,opacity:.04,fresnel:.4}),p=new ft,g=new ft,m=new ft,x=new C,_=(A,j,xe)=>to(A,j,xe,x).toArray(),{doorA0:b,doorA1:y,doorH:M}=us,w=M+.12,v=Hi/us.panes,S=.006/r,D=A=>A>b+1e-6&&A<y-1e-6;for(let A=0;A<us.panes;A++){let j=A*v+S,xe=(A+1)*v-S,L=[j];for(let E of[b,y])E>j&&E<xe&&L.push(E);L.push(xe);for(let E=0;E+1<L.length;E++){let Q=L[E],ve=L[E+1],_e=D((Q+ve)/2)?w:.05,Ne=Math.max(2,Math.ceil((ve-Q)/v*16));m.add("glass",Ht(i,s,r,Q,ve,_e,o,Ne,!0))}}let T=us.finDepth,P=o-.55,k=r-T/2-.004;for(let A=0;A<us.panes;A++){let j=A*v;if(!D(j)){m.add("fin",N(Te(T,P,.022),_(j,k,P/2),[0,j,0])),p.add("silver",N(Te(T+.04,.06,.05),_(j,k,.03),[0,j,0])),p.add("silver",N(Te(T+.04,.06,.05),_(j,k,P-.03),[0,j,0]));for(let xe of[1.1,4.7,8.3,11.9]){p.add("chrome",N(Te(.025,.09,.17),_(j,r-.0175,xe),[0,j,0])),p.add("chrome",N(Te(.09,.09,.045),_(j,r-.075,xe),[0,j,0]));for(let L of[-1,1])p.add("chrome",N(ce(.022,.022,.018,14),_(j+L*(.055/r),r-.039,xe),[0,j,Math.PI/2]))}}}let z=o-.55;p.add("white",Ht(i,s,r-.6,0,Hi,z,o,160,!0)),p.add("satin",N(new wn(r-.6,r-.01,160,1),[i,z,s],[Math.PI/2,0,0])),p.add("glowWhite",N(new wn(r-.16,r-.1,160,1),[i,z-.004,s],[Math.PI/2,0,0])),p.add("glowCyan",Ht(i,s,r-.605,0,Hi,z+.02,z+.05,160,!0));let I=y,V=Hi-(y-b);p.add("glowCyan",N(new wn(r-.17,r-.13,160,1,I,V),[i,.003,s],[-Math.PI/2,0,0])),p.add("silver",Ht(i,s,r-.03,I,I+V,0,.05,160,!0));for(let A of[b,y])p.add("silver",N(Te(.14,w,.06),_(A,r-.03,w/2),[0,A,0]));let ne=y-b;p.add("silver",Ht(i,s,r-.06,b,y,M,w,16,!0)),p.add("silver",Ht(i,s,r+.04,b,y,M,w,16,!1)),p.add("silver",N(new wn(r-.06,r+.04,16,1,-y,ne),[i,M,s],[Math.PI/2,0,0])),p.add("glowWhite",N(new wn(r-.025,r+.005,16,1,-y,ne),[i,M-.002,s],[Math.PI/2,0,0])),p.add("silver",N(new wn(r-.22,r+.24,16,1,b,ne),[i,.003,s],[-Math.PI/2,0,0]));let te=ne/2,ie=r-.09;for(let[A,j,xe]of[[b-te,b,.9],[y,y+te,.1]]){m.add("fin",Ht(i,s,ie,A+.03/ie,j-.03/ie,.06,M-.06,12,!0)),p.add("silver",Ht(i,s,ie-.02,A,j,0,.06,12,!0)),p.add("silver",Ht(i,s,ie-.02,A,j,M-.06,M,12,!0));for(let L of[A,j])p.add("silver",N(Te(.05,M,.05),_(L,ie,M/2),[0,L,0]));p.add("chrome",N(ce(.012,.012,1.1,8),_(A+(j-A)*xe,ie-.05,1.05)))}p.add("silver",Ht(i,s,ie-.035,b-te,y+te,M,M+.08,24,!0)),p.add("ceiling",N(new wn(6.4,r,160,2),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<16;A++){let j=A/16*Hi,xe=(r+6.4)/2;p.add("white",N(Te(r-6.4,.34,.3),[i+xe*Math.cos(j),o-.17,s-xe*Math.sin(j)],[0,j,0]))}for(let A of[9,16.5])p.add("white",Ht(i,s,A,0,Hi,o-.34,o,160,!0)),p.add("white",Ht(i,s,A+.3,0,Hi,o-.34,o,160,!1)),p.add("white",N(new wn(A,A+.3,160,1),[i,o-.34,s],[Math.PI/2,0,0]));for(let A of[11.15,11.85])p.add("satin",Ht(i,s,A,0,Hi,o-.24,o,160,!0)),p.add("satin",Ht(i,s,A,0,Hi,o-.24,o,160,!1));let J=new et(N(Jt(11.5,.12,10,240),[0,0,0],[Math.PI/2,0,0]),c);J.name="ring-light",J.position.set(i,o-.15,s),t.add(J),p.add("chrome",N(Jt(6.4,.1,10,160),[i,o,s],[Math.PI/2,0,0]));for(let A=0;A<4;A++)p.add("silver",N(Te(12.8,.12,.12),[i,o+.03,s],[0,A*Math.PI/4,0]));let Y=new et(N(new Hn(6.4,96),[0,0,0],[Math.PI/2,0,0]),f);Y.name="skylight",Y.position.set(i,o+.06,s),t.add(Y);let{a0:O,a1:G}=rt,K=rt.moduleR-.36;p.add("dark",Ht(i,s,rt.r,O,G,rt.bandY0,rt.bandY1,72,!0)),p.add("white",Ht(i,s,rt.r,O,G,rt.bandY1,rt.top,72,!0)),p.add("white",Ht(i,s,rt.r,O,G,2.3,rt.bandY0,72,!0)),p.add("satin",Ht(i,s,rt.r,O,G,0,2.3,72,!0)),p.add("white",Ht(i,s,rt.back,O,G,0,rt.top,72,!1)),p.add("white",N(new wn(rt.r,rt.back,72,1,O,G-O),[i,rt.top,s],[-Math.PI/2,0,0])),p.add("white",N(new wn(K,rt.r,72,1,O,G-O),[i,2.3,s],[-Math.PI/2,0,0])),p.add("white",Ht(i,s,K,O,G,2.22,2.3,72,!0)),p.add("glowBlue",Ht(i,s,K-.004,O,G,2.245,2.265,72,!0)),p.add("glowCyan",Ht(i,s,rt.r-.012,O,G,7.1,7.14,72,!0)),p.add("glowCyan",Ht(i,s,rt.r-.012,O,G,2.64,2.68,72,!0));let q=rt.back-K+.04,ae=(rt.back+K)/2;for(let[A,j]of[[O-.07/ae,-1],[G+.07/ae,1]]){p.add("white",N(Te(q,rt.top,.14),[i+ae*Math.cos(A),rt.top/2,s-ae*Math.sin(A)],[0,A,0]));let xe=A-j*(.075/K);p.add("glowCyan",N(Te(.04,rt.top-.4,.03),[i+(K+.02)*Math.cos(xe),rt.top/2,s-(K+.02)*Math.sin(xe)],[0,A,0]))}let fe=24,ge=new qn(new tn(.62,2.22,.78),a.white,fe);ge.name="compute-modules";let oe=new Ae(.7,2.08),Pe=new yt(oe.x,oe.y),Ye=new dn({name:"module-doors",vertexShader:CE,fragmentShader:PE,uniforms:{uTime:{value:0},uActivity:{value:0},uSize:{value:oe}}}),Fe=new qn(Pe,Ye,fe);Fe.name="module-doors";let Ze=new Float32Array(fe),$e=new gn;for(let A=0;A<fe;A++){let j=O+(A+.5)*(G-O)/fe;to(j,rt.moduleR,1.11,$e.position),$e.rotation.set(0,j,0),$e.updateMatrix(),ge.setMatrixAt(A,$e.matrix),to(j,rt.moduleR-.316,1.11,$e.position),$e.rotation.set(0,j-Math.PI/2,0),$e.updateMatrix(),Fe.setMatrixAt(A,$e.matrix),Ze[A]=A*7.31+3.7,p.add("chrome",N(Te(.66,.03,.82),[$e.position.x,.015,$e.position.z],[0,j,0]))}Pe.setAttribute("aSeed",new yi(Ze,1)),ge.instanceMatrix.needsUpdate=!0,Fe.instanceMatrix.needsUpdate=!0,ge.computeBoundingSphere(),Fe.computeBoundingSphere(),ge.receiveShadow=!0,t.add(ge,Fe);let pe=EE(e),X=new et(N(new Hn(r+.2,128),[0,0,0],[-Math.PI/2,0,0]),pe);X.name="atrium-floor",X.position.set(i,0,s),X.receiveShadow=!0,X.layers.set(hn);let U=OE({kit:p,low:g,glassKit:m,floorMat:pe,at:_});t.add(U.floor);let se=DE(),$=new et(N(new yt(se.x1-se.x0,se.z1-se.z0),[0,0,0],[-Math.PI/2,0,0]),TE(e));$.name="island-tops",$.position.set((se.x0+se.x1)/2,0,(se.z0+se.z1)/2),$.receiveShadow=!0,$.layers.set(hn),t.add(X,$);for(let A of Mr)g.add("satin",dp(A,0,-Wd,0)),g.add("silver",dp(A,.004,-.045,-.001)),g.add("glowCyan",dp(A,.006,-Wd,-Wd+.05));let Ce=Xg(.5);g.add("satin",Rs(Ce,-Ot.depth,0,{closed:!0,facing:hp}));let Re=Kg(Ce,.012);g.add("glowCyan",Rs(Re,-.17,-.13,{closed:!0,facing:hp})),g.add("glowBlue",Rs(Re,-Ot.depth+.1,-Ot.depth+.14,{closed:!0,facing:hp}));let H=new dn({name:"data-pool",vertexShader:AE,fragmentShader:RE,uniforms:{uTravel:{value:0},uFlow:{value:.3},uGlow:{value:1}}}),me=new et(N(new yt(Ot.hx*2,Ot.hz*2),[0,0,0],[-Math.PI/2,0,0]),H);me.name="data-pool",me.position.set(Ot.cx,-Ot.depth,Ot.cz),me.layers.set(hn),t.add(me);let be=Kg(Ce,-.06),F=[];for(let A of LE(be)){F.push(Rs(A,.035,1)),p.add("chrome",fi(A.map(([j,xe])=>[j,1.01,xe]),.022,.08,8)),p.add("glowCyan",Rs(A,0,.035)),p.add("glowCyan",Rs(A.slice().reverse(),0,.035));for(let j=0;j<A.length;j+=5)p.add("chrome",N(ce(.018,.018,1,8),[A[j][0],.5,A[j][1]]))}if(F.length){let A=new ft;for(let xe of F)A.add("glass",xe);let j=A.build({glass:h},{castShadow:!1,receiveShadow:!1,name:"railing"});t.add(j)}let ot=m.build({glass:u,fin:d,rail:h},{castShadow:!1,receiveShadow:!1,name:"facade-glass"});ot.traverse(A=>{A.isMesh&&(A.renderOrder=2)}),t.add(ot);let pt=p.build(a,{castShadow:!1,receiveShadow:!0,name:"atrium"});t.add(pt);let vt=g.build(a,{castShadow:!1,receiveShadow:!1,name:"atrium-low"});vt.traverse(A=>A.layers.set(hn)),t.add(vt);let Ie=.3;return{root:t,reflectors:[X,$,U.floor],bounds:se,update(A,j,xe={}){let L=st(xe.activity||0,0,1);Ie+=(.3+.7*L-Ie)*Math.min(1,A*2),H.uniforms.uTravel.value=(H.uniforms.uTravel.value+A*(.25+1.4*L))%1e3,H.uniforms.uFlow.value=Ie,Ye.uniforms.uTime.value=j,Ye.uniforms.uActivity.value=Ie},setLook(A){let j=A.glow==null?1:A.glow;for(let xe of l)xe.color.setHex(xe.userData.glow.hex).multiplyScalar(xe.userData.glow.k*j);c.color.set(A.interior.ring).multiplyScalar(A.interior.ringPower),a.ceiling.emissiveIntensity=A.id==="day"?.16:.22,H.uniforms.uGlow.value=j}}}var Sr=ds.groundY,wr={pitch:96,rot:18*Math.PI/180},mp=Math.cos(wr.rot),gp=Math.sin(wr.rot),jg=13*289,cc=2400;function no(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Qg(n,e,t=[0,0]){return t[0]=Xe.cx+mp*n+gp*e,t[1]=Xe.cz-gp*n+mp*e,t}function xp(n,e,t=[0,0]){return t[0]=Xe.cx+e*Math.cos(n),t[1]=Xe.cz-e*Math.sin(n),t}function ex(){return{uHaze:{value:new ke(2902638)},uHazeHigh:{value:new ke(5208741)},uHazeDensity:{value:42e-5},uCenter:{value:new Ae(Xe.cx,Xe.cz)},uTime:{value:0},uTravel:{value:0},uAir:{value:0},uDensity:{value:.3},uLights:{value:1},uNeon:{value:1},uWindows:{value:.6},uBeacons:{value:1},uTraffic:{value:1},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new ke(16777215)},uSunK:{value:.2},uSkyRefl:{value:new ke(3103372)}}}function Cs(n,e,t={}){let i={};for(let s of e)i[s]=n[s];return Object.assign(i,t)}var Ps=["uHaze","uHazeHigh","uHazeDensity"],Is=`
#define GROUND_Y (${Sr.toFixed(1)})
#define GRID_P ${wr.pitch.toFixed(1)}
#define GRID_C ${mp.toFixed(7)}
#define GRID_S ${gp.toFixed(7)}
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
`;var kE=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,FE=`
${Is}
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
`,UE=`
varying vec3 vWorld;
varying vec3 vNormalW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,BE=`
${Is}
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
#define TOWER_R ${ds.r.toFixed(3)}

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
`;function tx(n,{quality:e="high"}={}){let t=Cs(n,[...Ps,"uCenter","uTravel","uLights","uDensity"],{uBase:{value:new ke(461846)},uStreet:{value:new ke(16752714)},uAvenue:{value:new ke(4641535)},uRoof:{value:new ke(1712690)},uPark:{value:new ke(463887)}}),i=new dn({name:"city-ground",vertexShader:kE,fragmentShader:FE,uniforms:t}),s=e==="low"?4200:6e3,r=new Hn(s,96).rotateX(-Math.PI/2),o=new et(r,i);return o.name="city-ground",o.position.set(Xe.cx,Sr,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:t,setLook(a){t.uBase.value.set(a.base),t.uStreet.value.set(a.street),t.uAvenue.value.set(a.avenue),t.uRoof.value.set(a.roof),t.uPark.value.set(a.park)}}}function nx(n){let e=Cs(n,[...Ps,"uCenter","uSkyRefl","uWindows","uLights","uSunDir","uSunColor","uSunK"],{uFrame:{value:new ke(1778996)},uGlassC:{value:new ke(660516)},uSpine:{value:new ke(4641535)}}),t=new dn({name:"city-host-facade",vertexShader:UE,fragmentShader:BE,uniforms:e}),i=-.45,s=i-Sr,r=new Fn(ds.r,ds.r,s,128,1,!0),o=new et(r,t);return o.name="city-host-facade",o.position.set(Xe.cx,(i+Sr)/2,Xe.cz),o.frustumCulled=!1,o.renderOrder=5,o.layers.set(hn),{mesh:o,uniforms:e,setLook(a){e.uFrame.value.set(a.facade),e.uGlassC.value.set(a.facadeGlass),e.uSpine.value.set(a.spine)}}}var zE=`
${Is}
attribute vec4 aLane;   // axis (0: along grid z, 1: along grid x), lane coordinate, height, speed (m/s, signed)
attribute vec4 aCar;    // phase, streak length, seed, kind
uniform float uAir;
uniform float uDensity;
uniform vec2 uCenter;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;

#define SPAN ${cc.toFixed(1)}

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
`,HE=`
uniform float uTraffic;
varying vec3 vColor;
varying vec2 vUv;
varying float vFade;
void main() {
  float across = abs(vUv.y - 0.5) * 2.0;
  float m = (1.0 - across * across) * smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.8, vUv.x) * (0.45 + 0.55 * vUv.x);
  gl_FragColor = vec4(vColor * (uTraffic * vFade * m), 1.0);
}
`;function ix(n,{quality:e="high"}={}){let t=no(91),i=wr.pitch,s=e==="low"?2:1,r=[];for(let f=-20;f<=20;f+=4){let p=(f+.5)*i;for(let g of[0,1]){let m=-330+t()*120,x=28+Math.floor(t()*22);r.push({axis:g,coord:p-6,y:m,speed:x,spacing:34*s}),r.push({axis:g,coord:p+6,y:m+5,speed:-(x+3),spacing:34*s})}}for(let f of[-16,-12,12,16]){let p=(f+.5)*i;for(let g of[0,1]){let m=-70+t()*70,x=40+Math.floor(t()*20);r.push({axis:g,coord:p,y:m,speed:t()<.5?x:-x,spacing:60*s})}}let o=[],a=[];for(let f of r){let p=Math.floor(2*cc/f.spacing);for(let g=0;g<p;g++){o.push(f.axis,f.coord,f.y,f.speed);let m=t(),x=f.speed>0?m<.8?0:m<.92?2:3:m<.8?1:m<.92?3:2;a.push((g+t()*.6)/p,7+t()*8,t(),x)}}let l=o.length/4,c=new yt(1,1),u=new Xl;u.index=c.index,u.setAttribute("position",c.getAttribute("position")),u.setAttribute("aLane",new yi(new Float32Array(o),4)),u.setAttribute("aCar",new yi(new Float32Array(a),4)),u.instanceCount=l;let d=new dn({name:"city-traffic",vertexShader:zE,fragmentShader:HE,uniforms:Cs(n,[...Ps,"uAir","uDensity","uCenter","uTraffic"]),transparent:!0,depthWrite:!1,blending:Nn,side:jt}),h=new et(u,d);return h.name="city-traffic",h.frustumCulled=!1,h.layers.set(hn),{mesh:h,count:l}}var ax=Math.PI/180,yp=wr.pitch,GE=[{a:240,r:1e3,radius:300},{a:75,r:900,radius:260},{a:150,r:1300,radius:340}],VE=[{a:62,r:620,w:104,d:56,top:96,style:1,billboard:!0,faceAtrium:!0},{a:95,r:2400,w:90,d:90,top:150,style:3,tether:!0},{a:48,r:1350,w:70,d:70,top:120,style:3},{a:112,r:1500,w:85,d:85,top:185,style:0},{a:205,r:1100,w:70,d:70,top:140,style:3},{a:233,r:1300,w:60,d:60,top:200,style:0,twin:0},{a:240,r:1300,w:60,d:60,top:185,style:0,twin:1},{a:285,r:1900,w:100,d:100,top:230,style:3},{a:315,r:1150,w:64,d:64,top:110,style:2},{a:175,r:1250,w:70,d:70,top:160,style:3,ring:!0},{a:20,r:1400,w:80,d:80,top:170,style:0},{a:345,r:1600,w:75,d:75,top:135,style:3}],WE={a:120,r:700,w:72,d:72,top:205,style:3,compute:!0},XE=`
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
`,$E=`
${Is}
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
`;function qE(n,e){return Math.hypot(n-Xe.cx,e-Xe.cz)}function YE(n,e){let t=no(17),i=n==="low"?1500:2600,s=Math.ceil(i/yp)+1,r=[[-24,-24],[24,-24],[-24,24],[24,24]],o=GE.map(c=>{let[u,d]=xp(c.a*ax,c.r);return{x:u,z:d,r2:c.radius*c.radius}}),a=[0,0],l=[];for(let c=-s;c<=s;c++)for(let u=-s;u<=s;u++)for(let[d,h]of r){let f=c*yp+d,p=u*yp+h,g=Math.hypot(f,p);if(g<110||g>i)continue;let m=g<2e3?.62:.62*(1-(g-2e3)/650);if(t()>m)continue;let x=12+t()*20,_=12+t()*20,b=(t()-.5)*Math.max(0,37-x),y=(t()-.5)*Math.max(0,37-_);Qg(f+b,p+y,a);let M=a[0],w=a[1];if(e.some(I=>Math.hypot(I.x-M,I.z-w)<I.rad))continue;let v=st((g-120)/650,0,1),S=22+Math.pow(t(),2.2)*(70+250*v),D=0;for(let I of o)D=Math.max(D,Math.exp(-((M-I.x)**2+(w-I.z)**2)/I.r2));S+=D*(140+220*t());let T=Math.min(Sr+S,D>.3?60:-40),P=t(),k=D>.3?P<.3?0:P<.45?1:P<.6?2:3:P<.35?0:P<.6?1:P<.9?2:3,z=0;Math.min(x,_)>=22&&t()<.18&&(z|=1),t()<.45&&(z|=2),t()<.35&&(z|=8),l.push({x:M,z:w,w:x,d:_,base:Sr-20,top:T,rot:wr.rot,seed:t(),style:k,flags:z})}return l}function KE(n){let e=no(29),t=[];for(let i of n){if(i.top<-300||e()>.25)continue;let s=15+e()*30;t.push({x:i.x+(e()-.5)*i.w*.4,z:i.z+(e()-.5)*i.d*.4,w:1.2,d:1.2,base:i.top,top:i.top+s,rot:i.rot,seed:e(),style:0,flags:4})}return t}function ZE(){let n=[],e={towers:n,billboard:null,tether:null,ring:null,compute:null,twins:[]},t=c=>{let u=c.a*ax,[d,h]=xp(u,c.r),f=c.faceAtrium?Math.atan2(-Math.cos(u),Math.sin(u)):wr.rot,p={x:d,z:h,w:c.w,d:c.d,base:Sr-20,top:c.top,rot:f,seed:c.a*.6180339%1,style:c.style,flags:10,mega:!0,a:u,r:c.r};return n.push(p),p};for(let c of VE){let u=t(c);c.billboard&&(e.billboard=u),c.tether&&(e.tether=u),c.ring&&(e.ring=u),c.twin!==void 0&&(e.twins[c.twin]=u)}e.compute=t(WE);let[i,s]=e.twins,r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o)-Math.min(i.w,s.w)*.8,l=Math.atan2(-o,r);for(let[c,u]of[[.31,40],[.47,95],[.73,150]])n.push({x:(i.x+s.x)/2,z:(i.z+s.z)/2,w:a,d:14,base:u,top:u+8,rot:l,seed:c,style:2,flags:0,bridge:!0});return e}function sx(n,e,t){let i=new tn(1,1,1).translate(0,.5,0),s=n.length,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new qn(i,e,s),l=new gn;return n.forEach((c,u)=>{let d=c.top-c.base;l.position.set(c.x,c.base,c.z),l.rotation.set(0,c.rot,0),l.scale.set(c.w,d,c.d),l.updateMatrix(),a.setMatrixAt(u,l.matrix),r[u*3]=c.w,r[u*3+1]=d,r[u*3+2]=c.d,o[u*3]=c.seed,o[u*3+1]=c.style,o[u*3+2]=c.flags}),i.setAttribute("aSize",new yi(r,3)),i.setAttribute("aInfo",new yi(o,3)),a.instanceMatrix.needsUpdate=!0,a.frustumCulled=!1,a.renderOrder=5,a.name=t,a}var JE=`
${Is}
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
`,jE=`
uniform float uBeacons;
varying float vBlink;
varying float vFade;
void main() {
  float m = smoothstep(0.5, 0.12, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(1.0, 0.06, 0.03) * (1.6 * uBeacons * vBlink * vFade * m), 1.0);
}
`;function QE(n,e,t,i){let s=Math.cos(n.rot),r=Math.sin(n.rot);return[n.x+e*s+t*r,i,n.z-e*r+t*s]}function e2(n,e,t,i){let s=no(71),r=[];for(let d of e)d.top>-240&&s()<.5&&r.push(d.x,d.top+1.5,d.z);for(let d of t)r.push(d.x,d.top+.8,d.z);for(let d of i.towers)if(d.mega)for(let[h,f]of[[1,1],[1,-1],[-1,1],[-1,-1]])r.push(...QE(d,h*d.w/2.15,f*d.d/2.15,d.top+1.5));let o=r.length/3,a=new Float32Array(o);for(let d=0;d<o;d++)a[d]=s();let l=new Vt;l.setAttribute("position",new ht(r,3)),l.setAttribute("aSeed",new ii(a,1));let c=new dn({name:"city-beacons",vertexShader:JE,fragmentShader:jE,uniforms:Cs(n,[...Ps,"uTime","uBeacons"]),transparent:!0,depthWrite:!1,blending:Nn}),u=new Tl(l,c);return u.name="city-beacons",u.frustumCulled=!1,u.layers.set(hn),{points:u,count:o}}var qd=[["算力","#46e6ff"],["TOKEN","#4d7bff"],["NEURAL","#cfe8ff"],["推理中心","#46e6ff"],["数据港","#ffb347"],["AI CORE","#4d7bff"],["云端算力","#46e6ff"],["∞ CONTEXT","#ffb347"],["GPU 集群","#46e6ff"],["SYNAPSE","#ff4fd8"],["模型工厂","#cfe8ff"],["NODE-07","#46e6ff"],["光子网络","#4d7bff"],["0 ms","#46e6ff"],["量子缓存","#ffb347"],["OPEN API","#ff4fd8"]],t2=6,n2=`
${Is}
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
`,i2=`
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
`;function s2(){return{atlas:It(1024,1024,(r,o,a)=>{r.clearRect(0,0,o,a),qd.forEach(([l],c)=>{let u=c%2*512,d=Math.floor(c/2)*128;r.save(),r.beginPath(),r.rect(u,d,512,128),r.clip(),r.textAlign="center",r.textBaseline="middle";let h=/[\u4e00-\u9fff]/.test(l)?78:70;r.font=`700 ${h}px ${Rt}`,r.fillStyle="#ffffff",r.shadowColor="#ffffff",r.shadowBlur=18,r.fillText(l,u+256,d+64+2),r.shadowBlur=6,r.fillText(l,u+256,d+64+2),r.shadowBlur=0,r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=3,r.strokeRect(u+6,d+6,500,116),r.restore()})},{anisotropy:4}),cols:2,rows:8}}function r2(n,e){let t=no(53),i=[],s=n.filter(o=>{let a=qE(o.x,o.z);return a>150&&a<800&&o.top>-330&&Math.min(o.w,o.d)>=16}),r=new Set;for(let o=0;o<60&&i.length<14&&s.length;o++){let a=Math.floor(t()*s.length);if(r.has(a))continue;r.add(a);let l=s[a],c=22+t()*18;i.push({pos:[l.x,l.top+c/8+2.5,l.z],w:c,word:Math.floor(t()*qd.length),tilt:!0})}for(let o of e.towers){if(!o.mega||o===e.billboard)continue;let a=[Xe.cx-o.x,Xe.cz-o.z],l=Math.hypot(a[0],a[1]),c=Math.max(o.w,o.d)*.72+2,u=o===e.compute?t2:Math.floor(t()*qd.length),d=o===e.compute?64:44+t()*14;i.push({pos:[o.x+a[0]/l*c,o.top-30,o.z+a[1]/l*c],w:d,word:u,tilt:!1})}return i}function o2(n,e,t){let{atlas:i,cols:s,rows:r}=s2(),o=no(61),a=r2(e,t),l=a.length,c=new Float32Array(l*4),u=new Float32Array(l*4),d=new yt(1,1),h=new dn({name:"city-signs",vertexShader:n2,fragmentShader:i2,uniforms:Cs(n,[...Ps,"uTime","uNeon"],{tAtlas:{value:i.tex}}),transparent:!0,depthWrite:!1,blending:Nn,side:jt}),f=new qn(d,h,l);f.name="city-signs";let p=new gn,g=new ke;return a.forEach((m,x)=>{p.position.set(m.pos[0],m.pos[1],m.pos[2]),p.rotation.set(0,0,0),p.lookAt(Xe.cx,m.tilt?0:m.pos[1],Xe.cz),p.scale.set(m.w,m.w/4,1),p.updateMatrix(),f.setMatrixAt(x,p.matrix);let _=m.word;c.set([_%s/s,1-(Math.floor(_/s)+1)/r,1/s,1/r],x*4),g.set(qd[_][1]),u.set([g.r,g.g,g.b,o()],x*4)}),d.setAttribute("aCell",new yi(c,4)),d.setAttribute("aTint",new yi(u,4)),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,f.layers.set(hn),{mesh:f,count:l}}var rx={idle:"待机 · IDLE",thinking:"思考 · THINKING",reasoning:"推理 · REASONING",generating:"生成 · GENERATING",tool:"工具 · TOOL"};function ox(n,e,t,i){let s=n.createLinearGradient(0,0,e,t);s.addColorStop(0,"#04122a"),s.addColorStop(1,"#020a18"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle="rgba(70,230,255,0.9)",n.lineWidth=6,n.strokeRect(10,10,e-20,t-20),n.fillStyle="rgba(255,179,71,0.95)",n.fillRect(10,10,236,46),n.fillStyle="#04122a",n.font=`800 30px ${Rt}`,n.textBaseline="middle",n.fillText("LIVE · 实时推理",26,34),n.fillStyle="#e8f4ff",n.textBaseline="alphabetic";let r=i.model||"MODEL",o=92;for(n.font=`700 ${o}px ${Rt}`;o>40&&n.measureText(r).width>e*.56;)o-=6,n.font=`700 ${o}px ${Rt}`;n.fillText(r,34,180),n.fillStyle="#46e6ff",n.font=`600 30px ${Rt}`,n.fillText(rx[i.phase]||rx.idle,38,232),n.textAlign="right",n.fillStyle="#ffffff",n.font=`800 150px ${bt}`,n.fillText(String(Math.round(i.tps||0)),e-40,210),n.fillStyle="#4d7bff",n.font=`700 34px ${Rt}`,n.fillText("TOKENS / S",e-44,254),n.textAlign="left";let a=i.hist,l=34,c=e-34,u=t-34,d=t-110,h=Math.max(30,...a);n.strokeStyle="rgba(70,230,255,0.35)",n.lineWidth=2,n.beginPath(),n.moveTo(l,u),n.lineTo(c,u),n.stroke(),n.fillStyle="rgba(70,230,255,0.85)";let f=(c-l)/a.length;a.forEach((p,g)=>{let m=(u-d)*p/h;n.fillRect(l+g*f+2,u-m,Math.max(2,f-4),m)})}function a2(n){let i=new Array(40).fill(0),s=It(1024,Math.round(1024*40/96),(g,m,x)=>ox(g,m,x,{model:"",tps:0,phase:"idle",hist:i}),{anisotropy:8}),r=new Dt({map:s.tex,name:"city-billboard"});r.color.setScalar(1.3);let o=new Kt;o.name="city-billboard";let a=new et(new yt(96,40),r);o.add(a);let l=new et(new tn(98,42,1.2),new Dt({color:330260,name:"billboard-back"}));l.position.z=-.7,o.add(l);let c=new Dt({name:"billboard-edge"});c.color.setHex(4646655).multiplyScalar(3);let u=new et(new tn(96+2.4,.5,.5),c);u.position.set(0,-40/2-1.2,0),o.add(u);let d=n.d/2+1.6;o.position.set(n.x+Math.sin(n.rot)*d,20,n.z+Math.cos(n.rot)*d),o.rotation.y=n.rot,o.traverse(g=>{g.renderOrder=5});let h="",f=1,p=0;return{group:o,update(g,m){p+=g,p>=1&&(p=0,i.shift(),i.push(m.tps||0)),f+=g;let x=`${m.model}|${Math.round(m.tps||0)}|${m.phase}|${i[i.length-1]}`;f<1||x===h||(f=0,h=x,s.redraw((_,b,y)=>ox(_,b,y,{model:m.model,tps:m.tps,phase:m.phase,hist:i})))}}}var l2=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,c2=`
${Is}
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
`;function Ga(n,e,t,i=!1){return new dn({name:i?"city-glow-add":"city-glow",vertexShader:l2,fragmentShader:c2,defines:i?{ADDITIVE:""}:{},uniforms:Cs(n,Ps,{uColor:{value:new ke(e)},uGain:{value:t}}),transparent:i,depthWrite:!i,blending:i?Nn:qs})}var u2=`
uniform float uLen;
uniform float uPixel;
uniform float uMinPx;
varying float vAlong;
varying float vEdge;
varying float vThin;
void main() {
  vAlong = position.y * uLen;
  vec3 axis = (modelMatrix * vec4(0.0, position.y, 0.0, 1.0)).xyz;
  vec3 radial = mat3(modelMatrix) * vec3(position.x, 0.0, position.z);
  float r = max(length(radial), 1e-5);
  float grow = max(1.0, distance(cameraPosition, axis) * uPixel * uMinPx / r);
  vThin = 1.0 / grow;
  vec3 wp = axis + radial * grow;
  vec3 v = normalize(cameraPosition - wp);
  vEdge = abs(dot(radial / r, v));
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,d2=`
uniform float uIntensity;
uniform float uFlow;
uniform float uLen;
uniform float uCore;
uniform vec3 uColor;
varying float vAlong;
varying float vEdge;
varying float vThin;
void main() {
  float prof = uCore > 0.5 ? pow(vEdge, 1.6) : pow(vEdge, 3.0) * 0.22;
  float p = fract(log(vAlong + 24.0) * 3.2 + uFlow);
  float pulse = exp(-(p - 0.5) * (p - 0.5) * 25.0);
  float ends = smoothstep(0.0, 1.2, vAlong) * smoothstep(0.0, 8.0, uLen - vAlong);
  float k = prof * (0.6 + 0.9 * pulse) * ends * uIntensity * vThin;
  gl_FragColor = vec4(uColor * k, 1.0);
}
`,h2=`
uniform float uSize;
varying vec2 vUv;
void main() {
  vUv = uv - 0.5;
  vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mv.xy += position.xy * uSize;
  gl_Position = projectionMatrix * mv;
}
`,f2=`
uniform vec3 uColor;
uniform float uIntensity;
varying vec2 vUv;
void main() {
  float r = length(vUv) * 2.0;
  float glow = exp(-r * r * 10.0) + 0.22 * exp(-r * 4.5);
  float k = glow * (1.0 - smoothstep(0.8, 1.0, r)) * uIntensity;
  gl_FragColor = vec4(uColor * k, 1.0);
}
`,vp=1.4,p2=new Ae;function m2(n,e){let t=n.getRenderTarget(),i=t?t.height:n.getDrawingBufferSize(p2).y,s=e.projectionMatrix.elements[5];return i>0&&s>0?2/(s*i):0}var g2=`
${Is}
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
`,x2=`
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
`;function y2(n,e,t=16){return new Fn(e,n,1,t,1,!0).translate(0,.5,0)}function v2(n,e,t=12,i=48,s=5){let r=[],o=[],a=Math.exp(s)-1;for(let c=0;c<=i;c++){let u=(Math.exp(s*c/i)-1)/a,d=n+(e-n)*u;for(let h=0;h<t;h++){let f=h/t*Math.PI*2;r.push(Math.cos(f)*d,u,Math.sin(f)*d)}}for(let c=0;c<i;c++)for(let u=0;u<t;u++){let d=c*t+u,h=c*t+(u+1)%t,f=d+t,p=h+t;o.push(d,f,h,h,f,p)}let l=new Vt;return l.setAttribute("position",new ht(r,3)),l.setIndex(o),l.boundingSphere=new ki(new C(0,.5,0),Math.max(.5,e)+.5),l}function _2(n,e,t){let i=new Kt;i.name="compute-tower";let s=Ga(n,4646655,4),r=Ga(n,10480383,5),o=Ga(n,5078015,4),a=Ga(n,922914,1),l=[s,r,o],c=Math.max(e.w,e.d)*.5*Math.SQRT2+6,u=(T,P,k,z)=>{let I=new et(new Ci(T,P,10,160),z);return I.rotation.x=Math.PI/2,I.position.set(e.x,k,e.z),i.add(I),I};u(c,1,40,s),u(c,1,70,s),u(c+2,1.8,100,r);let d=u(c*.6,1.3,e.top+6,o),h=new et(new Fn(.8,2.6,60,10),a);h.position.set(e.x,e.top+30,e.z),i.add(h);let f=new Ae(t.x-e.x,t.z-e.z).normalize(),p=new C(e.x+f.x*(c+2),100,e.z+f.y*(c+2)),g=new et(new Gn(4,20,14),r);g.position.copy(p),i.add(g);let m=new C().subVectors(p,t),x=m.length(),_=new mn().setFromUnitVectors(new C(0,1,0),m.clone().normalize()),b={uIntensity:{value:.1},uFlow:{value:0},uLen:{value:x},uPixel:{value:5e-4},uMinPx:{value:vp},uColor:{value:new ke(5232383)}},y=[];for(let[T,P,k,z]of[[.05,1.6,1,vp],[.32,7,0,vp*3]]){let I=new dn({name:k?"beam-core":"beam-glow",vertexShader:u2,fragmentShader:d2,uniforms:{...b,uCore:{value:k},uMinPx:{value:z}},transparent:!0,depthWrite:!1,blending:Nn,side:jt}),V=new et(v2(T,P,k?12:16,48),I);V.name=I.name,V.position.copy(t),V.quaternion.copy(_),V.scale.set(1,x,1),V.frustumCulled=!1,V.renderOrder=3,V.onBeforeRender=(ne,te,ie)=>{b.uPixel.value=m2(ne,ie),I.uniformsNeedUpdate=!0},i.add(V),y.push(V)}let M=new Dt({name:"beam-receiver"});M.color.setHex(5232383).multiplyScalar(2.2);let w=new et(new Ci(.42,.035,8,48),M);w.rotation.x=Math.PI/2,w.position.copy(t),i.add(w);let v={uSize:{value:1.6},uIntensity:{value:.3},uColor:b.uColor},S=new et(new yt(1,1),new dn({name:"beam-flare",vertexShader:h2,fragmentShader:f2,uniforms:v,transparent:!0,depthWrite:!1,blending:Nn}));S.name="beam-flare",S.position.copy(t),S.frustumCulled=!1,S.renderOrder=4,i.add(S);let D=0;return i.traverse(T=>{T.isMesh&&T.renderOrder===0&&(T.renderOrder=5)}),{group:i,setLook(T){s.uniforms.uGain.value=4*(.35+.65*T.neon),r.uniforms.uGain.value=5*(.4+.6*T.neon),o.uniforms.uGain.value=4*(.35+.65*T.neon),a.uniforms.uColor.value.set(T.body)},update(T,P,k,z){D=(D+Math.min(.1,Math.max(0,T))*(.25+1.1*k))%1,b.uFlow.value=D,b.uIntensity.value=(.22+.78*k)*z*.95,g.scale.setScalar(.6+k*.8);let I=Math.sin(P*4.2)*.04*k;w.scale.setScalar(.85+k*.4+I),v.uSize.value=1+1.1*k+I*4,v.uIntensity.value=(.12+.55*k)*z,d.rotation.z=P*.12},beams:y,flare:S,glows:l}}function b2(n,e){let t=new Kt;t.name="city-landmarks";let i=e.tether,s=2450,r={uTime:n.uTime,uLen:{value:s},uGain:{value:1},uColor:{value:new ke(8378623)}};for(let[h,f]of[[5,1],[20,0]]){let p=new dn({name:f?"tether-core":"tether-glow",vertexShader:g2,fragmentShader:x2,uniforms:Cs(n,Ps,{...r,uCore:{value:f}}),transparent:!0,depthWrite:!1,blending:Nn,side:jt}),g=new et(y2(1,1,14),p);g.position.set(i.x,i.top,i.z),g.scale.set(h,s,h),g.frustumCulled=!1,t.add(g)}let o=e.ring,a=Math.max(o.w,o.d)*.5*Math.SQRT2+25,l=new et(new Ci(a,1.6,8,192),Ga(n,4646655,3.2,!0)),c=new et(new Ci(a*.8,1.1,8,160),Ga(n,5078015,3,!0)),u=new Kt,d=new Kt;return u.position.set(o.x,o.top-45,o.z),d.position.set(o.x,o.top-75,o.z),l.rotation.x=Math.PI/2+.12,c.rotation.x=Math.PI/2-.1,u.add(l),d.add(c),t.add(u,d),t.traverse(h=>{h.isMesh&&(h.frustumCulled=!1)}),{group:t,setLook(h){r.uGain.value=.35+.65*h.neon,l.material.uniforms.uGain.value=3.2*(.3+.7*h.neon),c.material.uniforms.uGain.value=3*(.3+.7*h.neon)},update(h){u.rotation.y=h*.05,d.rotation.y=-h*.07}}}function lx({quality:n="high",beamTarget:e=new C(-8,3,-.7)}={}){let t=new Kt;t.name="city";let i=ex(),s=ZE(),r=s.towers.filter(D=>D.mega).map(D=>({x:D.x,z:D.z,rad:Math.max(D.w,D.d)*.75+30})),o=YE(n,r),a=KE(o),l=Cs(i,[...Ps,"uSkyRefl","uSunDir","uSunColor","uSunK","uWindows","uNeon","uLights"],{uBody:{value:new ke(725538)},uGlass:{value:new ke(462106)}}),c=new dn({name:"city-towers",vertexShader:XE,fragmentShader:$E,uniforms:l}),u=sx(o.concat(a),c,"city-towers");u.layers.set(hn);let d=sx(s.towers,c,"city-megatowers"),h=e2(i,o,a,s),f=tx(i,{quality:n}),p=nx(i),g=ix(i,{quality:n}),m=o2(i,o,s),x=a2(s.billboard),_=_2(i,s.compute,e),b=b2(i,s);t.add(f.mesh,p.mesh,u,d,h.points,g.mesh,m.mesh,x.group,_.group,b.group);let y=0,M=0,w=0,v=1,S=1;return{root:t,update(D,T,P={}){let k=st(P.activity||0,0,1);y+=(k-y)*Math.min(1,D*1.5);let z=.5+1.5*y;M=(M+D*z)%jg,w=(w+D*z)%(2*cc),i.uTime.value=T,i.uTravel.value=M,i.uAir.value=w,i.uDensity.value=(.3+.7*y)*v,_.update(D,T,y,S),b.update(T),x.update(D,P)},setLook(D){let T=D.city;i.uHaze.value.set(T.haze),i.uHazeHigh.value.set(T.hazeHigh),i.uHazeDensity.value=T.hazeDensity,i.uSkyRefl.value.set(T.skyRefl),i.uWindows.value=T.windows,i.uNeon.value=T.neon,i.uLights.value=T.lights,i.uBeacons.value=T.beacons,i.uTraffic.value=T.traffic,i.uSunK.value=T.sunK,i.uSunDir.value.fromArray(D.sun.dir).normalize(),i.uSunColor.value.set(D.sun.color),l.uBody.value.set(T.body),l.uGlass.value.set(T.glass),f.setLook(T),p.setLook(T),_.setLook(T),b.setLook(T),v=T.trafficScale??1,S=.45+.55*T.neon},stats(){return{towers:o.length,antennas:a.length,landmarks:s.towers.length,beacons:h.count,signs:m.count,cars:g.count}}}}var cx=724504;function _p(n,e=1){let t=new Dt({toneMapped:!1});return t.color.set(n).multiplyScalar(e),t}var M2={low:0,medium:1024,high:2048,ultra:4096};function S2(n,e){let t=M2[e]??2048;n.castShadow=t>0,t&&(n.shadow.mapSize.set(t,t),n.shadow.bias=-3e-4,n.shadow.normalBias=.03,n.shadow.radius=e==="ultra"?5:3.5,n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null))}var Oo=new C,Yd=new C,Kd=new yr;function w2(n,e,t,i=4.6){Yd.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),n.position.copy(Yd).addScaledVector(e,60),n.target.position.copy(Yd),n.updateMatrixWorld(),n.target.updateMatrixWorld(),Kd.position.copy(n.position),Kd.lookAt(Yd),Kd.updateMatrixWorld();let s=1/0,r=-1/0,o=1/0,a=-1/0,l=1/0,c=-1/0;for(let d of[t.x0,t.x1])for(let h of[0,i])for(let f of[t.z0,t.z1])Oo.set(d,h,f).applyMatrix4(Kd.matrixWorldInverse),s=Math.min(s,Oo.x),r=Math.max(r,Oo.x),o=Math.min(o,Oo.y),a=Math.max(a,Oo.y),l=Math.min(l,-Oo.z),c=Math.max(c,-Oo.z);let u=n.shadow.camera;u.left=s-.5,u.right=r+.5,u.bottom=o-.5,u.top=a+.5,u.near=Math.max(.5,l-2),u.far=c+40,u.updateProjectionMatrix()}function pi(n,e,t,i,s=.55){let r=s===.55?n.shadow:n.shadow.clone();r.opacity=s;let o=nt(new yt(e,t),r,[i[0],.006,i[2]],[-Math.PI/2,0,0],null,{cast:!1,receive:!1});return o.renderOrder=-1,o.layers.set(hn),o}function ux(n,e,t,{renderer:i=null,look:s,reflection:r=null,beamTarget:o}={}){let a=new Kt;a.name="stage";let l=qg(i,s,{quality:t});a.add(l.dome);let c=Jg(n,{reflection:r});a.add(c.root);let u=lx({quality:t,beamTarget:o});a.add(u.root);let d=new Pa(16777215,3);d.name="sun",a.add(d,d.target);let h=new Vl(16777215,8947848,1);h.name="sky-light";let f=new Pa(16777215,.5);f.name="fill",a.add(h,f,f.target),S2(d,t);let p=new C;function g(m){l.setLook(m),p.fromArray(m.sun.dir).normalize(),d.color.set(m.sun.color),d.intensity=m.sun.intensity,w2(d,p,c.bounds),h.color.set(m.hemi.sky),h.groundColor.set(m.hemi.ground),h.intensity=m.hemi.intensity,f.color.set(m.fill.color),f.intensity=m.fill.intensity,f.position.fromArray(m.fill.dir).normalize().multiplyScalar(30),f.target.position.set(0,0,-1),f.updateMatrixWorld(),f.target.updateMatrixWorld(),c.setLook(m),u.setLook(m)}return g(s),{root:a,key:d,sky:l,reflectors:c.reflectors,bounds:c.bounds,get envTexture(){return l.envTexture},update(m,x,_){c.update(m,x,_),u.update(m,x,_)},setLook:g,dispose(){l.dispose()}}}var dx=Math.PI/180;function hx(n,e){let t=n*dx,i=e*dx;return[Math.cos(i)*Math.cos(t),Math.sin(i),Math.cos(i)*Math.sin(t)]}function fx(n){let e=Math.hypot(n[0],n[1],n[2])||1;return[n[0]/e,n[1]/e,n[2]/e]}var ko=["dusk","day"],io="dusk",_n={min:.6,max:1.6,step:.05,initial:1},px={dusk:{id:"dusk",clear:858675,sun:{dir:hx(112,8),color:16756848,intensity:3,disc:16765594,discPower:22},hemi:{sky:11124991,ground:9410214,intensity:1.2},fill:{dir:fx([.15,.8,-.58]),color:14082815,intensity:.75},envIntensity:1.05,exposure:1,post:{bloomStrength:.24,threshold:2.2,knee:.9,vignette:.24},sky:{zenith:"#050b1f",high:"#0c1d45",mid:"#163a6f",low:"#2a5f93",horizon:"#5d93b8",sunGlow:"#ffb35a",belt:"#5fb7c8",below:"#060c1a",ground:"#132238",groundHaze:"#2c4a6e",stars:.7,clouds:.5,cloudLit:"#ffb56b",cloudDark:"#1b2a48",far:{body:"#0b1630",haze:"#3c6290",windows:.55,neon:.6},lights:1},city:{body:725538,glass:462106,skyRefl:3103372,haze:2902638,hazeHigh:5208741,hazeDensity:42e-5,windows:.62,neon:1,lights:1,beacons:1,traffic:1,trafficScale:1,sunK:.16,street:16752714,avenue:4641535,base:461846,roof:1712690,park:463887,facade:1778996,facadeGlass:660516,spine:4641535},interior:{ceiling:15264754,ring:16777215,floor:13620187,column:15922424,media:726054,ringPower:5,screen:2776319},glow:1},day:{id:"day",clear:10468835,sun:{dir:hx(53,52),color:16773340,intensity:3.3,disc:16775146,discPower:30},hemi:{sky:13886719,ground:12039084,intensity:1.15},fill:{dir:fx([-.42,.68,.6]),color:15660031,intensity:.45},envIntensity:1,exposure:1,post:{bloomStrength:.16,threshold:2.6,knee:.9,vignette:.18},sky:{zenith:"#2d6cd0",high:"#4a8be2",mid:"#82b3ee",low:"#bcd7f4",horizon:"#e4edf6",sunGlow:"#fff4dc",belt:"#dce8f6",below:"#a3b1c2",ground:"#8a97a9",groundHaze:"#b4c5d9",stars:0,clouds:.8,cloudLit:"#ffffff",cloudDark:"#b8c6d8",far:{body:"#8796ab",haze:"#cfdaea",windows:.04,neon:.12},lights:.1},city:{body:7042694,glass:2899026,skyRefl:10273002,haze:11847129,hazeHigh:14083057,hazeDensity:34e-5,windows:.05,neon:.22,lights:.1,beacons:.45,traffic:.4,trafficScale:.7,sunK:.34,street:16765600,avenue:9428223,base:5857387,roof:8028814,park:5073482,facade:13226201,facadeGlass:3887208,spine:9428223},interior:{ceiling:16054010,ring:16777215,floor:14212322,column:16185595,media:726054,ringPower:3,screen:2776319},glow:.8}};function bp(n){return px[n]||px[io]}function ji(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Qi(n,e,t,i,s,r){let o=i;for(n.font=`${s} ${o}px ${r}`;o>8&&n.measureText(e).width>t;)o-=2,n.font=`${s} ${o}px ${r}`;return o}function mx({title:n,sub:e,labels:t,redFrom:i=.8,accent:s="#4d6bfe"}){return It(512,512,(r,o)=>{let a=o/2,l=r.createRadialGradient(a,a*.8,20,a,a,a);l.addColorStop(0,"#1d2128"),l.addColorStop(1,"#0a0b0e"),r.fillStyle=l,r.fillRect(0,0,o,o);let c=d=>(-135+270*d)*(Math.PI/180),u=(d,h)=>[a+Math.sin(c(d))*h,a-Math.cos(c(d))*h];r.strokeStyle="#e5484d",r.lineWidth=22,r.beginPath(),r.arc(a,a,196,c(i)-Math.PI/2,c(1)-Math.PI/2),r.stroke(),r.strokeStyle=s,r.lineWidth=6,r.beginPath(),r.arc(a,a,210,c(0)-Math.PI/2,c(i)-Math.PI/2),r.stroke();for(let d=0;d<=50;d++){let h=d/50,f=d%5===0,[p,g]=u(h,f?170:184),[m,x]=u(h,204);r.strokeStyle=h>=i?"#ffd1d1":"#e8ecf2",r.lineWidth=f?5:2,r.beginPath(),r.moveTo(p,g),r.lineTo(m,x),r.stroke()}r.fillStyle="#e8ecf2",r.font=`600 30px ${Rt}`,r.textAlign="center",r.textBaseline="middle",t.forEach((d,h)=>{let[f,p]=u(h/(t.length-1),136);r.fillText(d,f,p)}),r.font=`700 34px ${Rt}`,r.fillText(n,a,a+92),r.fillStyle="#8f98a8",r.font=`600 22px ${Rt}`,r.fillText(e,a,a+130)})}function es(n,e,t,i="#4d6bfe"){return It(512,144,(s,r,o)=>{let a=s.createLinearGradient(0,0,0,o);a.addColorStop(0,"#2e3239"),a.addColorStop(1,"#1b1e23"),s.fillStyle=a,s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=3,ji(s,6,6,r-12,o-12,10),s.stroke(),s.fillStyle=i,ji(s,22,30,108,84,8),s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font=`800 30px ${bt}`,s.fillText(t,76,72),s.textAlign="left",s.fillStyle="#f2f4f8",Qi(s,n,r-170,46,700,Rt),s.fillText(n,152,58),s.fillStyle="#9aa3b2",Qi(s,e.toUpperCase(),r-170,24,600,Rt),s.fillText(e.toUpperCase(),152,100)})}function gx(n,e="",{w:t=256,h:i=72,color:s="#e8ecf2",bg:r="#17191d"}={}){return It(t,i,o=>{o.fillStyle=r,o.fillRect(0,0,t,i),o.fillStyle=s,o.textBaseline="middle",o.textAlign="left",Qi(o,n,t-20,Math.round(i*.42),700,Rt),o.fillText(n,12,e?i*.36:i/2),e&&(o.fillStyle="#8b94a3",Qi(o,e,t-20,Math.round(i*.26),600,Rt),o.fillText(e,12,i*.76))})}function xx(n,e,{bg:t="#05070a",glow:i=0}={}){let s=It(n,e,r=>{r.fillStyle=t,r.fillRect(0,0,n,e)});return s.set=(r,o="left")=>{s.redraw(a=>{a.fillStyle=t,a.fillRect(0,0,n,e);let l=0;for(let c of r){let u=c.size||28;l+=c.gap??u*1.15,a.fillStyle=c.color||"#dfe7ff",a.font=`${c.weight||600} ${u}px ${c.mono?bt:Rt}`,a.textAlign=c.align||o,a.textBaseline="alphabetic",i&&(a.shadowColor=c.color||"#dfe7ff",a.shadowBlur=i);let d=a.textAlign==="center"?n/2:a.textAlign==="right"?n-16:16;Qi(a,c.text,n-32,u,c.weight||600,c.mono?bt:Rt),a.fillText(c.text,d,l),a.shadowBlur=0}})},s}function yx(){let t=["DSH TERMINAL  v0.2","PS D:\\workspace>"],i=It(512,384,null),s=!0,r=()=>i.redraw(o=>{let a=o.createRadialGradient(256,192,40,256,192,358.4);a.addColorStop(0,"#062414"),a.addColorStop(1,"#010604"),o.fillStyle=a,o.fillRect(0,0,512,384),o.font=`600 24px ${bt}`,o.textBaseline="alphabetic",o.shadowColor="#3dff8f",o.shadowBlur=10;let l=t.slice(-11);if(l.forEach((c,u)=>{o.fillStyle=u===l.length-1?"#b9ffd4":"#3fe58a",o.fillText(c.length>34?`${c.slice(0,33)}…`:c,18,40+u*31)}),s){let c=l[l.length-1]||"";o.fillStyle="#b9ffd4",o.fillRect(18+Math.min(34,c.length)*13.3,40+(l.length-1)*31-20,12,24)}o.shadowBlur=0,o.fillStyle="rgba(0,0,0,0.28)";for(let c=0;c<384;c+=3)o.fillRect(0,c,512,1)});return r(),i.push=(o,a)=>{for(t.push(`PS> ${o}`),a&&t.push(a);t.length>40;)t.shift();r()},i.line=o=>{for(t.push(o);t.length>40;)t.shift();r()},i.blink=o=>{s!==o&&(s=o,r())},i}function vx(){return It(96,768,(n,e,t)=>{n.fillStyle="#e9edf3",n.fillRect(0,0,e,t),n.fillStyle="#16181c",n.textAlign="right",n.textBaseline="middle",n.font=`700 22px ${Rt}`;for(let i=0;i<=50;i++){let s=t-12-i/50*(t-24),r=i%10===0;n.fillRect(e-(r?46:26),s-(r?2:1),r?46:26,r?4:2),r&&n.fillText(String(i*2),e-52,s)}})}function _x(){return It(512,384,(n,e,t)=>{n.fillStyle="#f3f4f6",n.fillRect(0,0,e,t);let i=[["待办","TODO"],["进行","DOING"],["完成","DONE"]],s=e/3;i.forEach(([r,o],a)=>{n.fillStyle=a===1?"#4d6bfe":a===2?"#2f9e6b":"#5b6270",n.fillRect(a*s+8,8,s-16,46),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.font=`700 24px ${Rt}`,n.fillText(`${r} ${o}`,a*s+s/2,31),a>0&&(n.fillStyle="#c9ced6",n.fillRect(a*s-1,62,2,t-70))})})}var bn=new C(-8,0,-.7),Fo=.41,bx=1.9,Mp=1.86;function E2(){return It(64,256,(n,e,t)=>{n.fillStyle="#071436",n.fillRect(0,0,e,t);for(let i=0;i<t;i+=32){let s=n.createLinearGradient(0,i,0,i+20);s.addColorStop(0,"rgba(120,170,255,0)"),s.addColorStop(.5,"rgba(160,200,255,1)"),s.addColorStop(1,"rgba(120,170,255,0)"),n.fillStyle=s,n.fillRect(0,i,e,20)}},{repeat:[1,2]})}function Mx(n){let e=Nt("fuel"),t=Nt("tank",[bn.x,0,bn.z]);t.userData.solid="tank",e.add(t),e.add(pi(n,2.6,2.6,[bn.x,0,bn.z],.6));let i=new ft;i.add("graphite",N(Le(1.8,.28,1.8,.05),[0,.2,0]));for(let[k,z]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]])i.add("rubber",N(ce(.07,.08,.06,20),[k,.03,z]));for(let k of[.375,2.345])i.add("steel",N(ce(.83,.83,.07,72),[0,k,0])),i.add("chrome",za(18,.775,k+(k<1?.04:-.04),.017,.016)),i.add("rubber",N(ce(.712,.712,.03,64),[0,k+(k<1?.05:-.05),0]));i.add("alu",hi([[.8,2.38],[.78,2.45],[.7,2.53],[.55,2.6],[.34,2.65],[.12,2.67],[.001,2.672]],72));for(let k=0;k<6;k++){let z=k/6*Ut+.26,I=Math.cos(z)*.79,V=Math.sin(z)*.79;i.add("chrome",N(ce(.016,.016,2.04,12),[I,1.36,V]));for(let ne of[.33,2.4])i.add("steel",N(ce(.03,.03,.03,6),[I,ne,V]))}i.add("steel",N(ce(.05,.06,.12,20),[.32,2.66,.1])),i.add("orange",N(ce(.07,.07,.025,20),[.32,2.735,.1])),i.add("aluDark",N(Le(.16,.12,.12,.02),[-.3,2.68,-.12])),i.add("chrome",N(ce(.07,.08,.05,24),[0,2.695,0])),i.add("steel",N(ce(.055,.055,.24,20),[.93,.375,0],[0,0,Math.PI/2])),i.add("steel",N(ce(.1,.1,.03,24),[1.04,.375,0],[0,0,Math.PI/2])),i.add("aluDark",N(Le(.12,1.96,.03,.01),[0,1.36,.875])),t.add(i.build(n,{name:"tank"}));let s=nt(ce(.7,.7,bx,72,!0),n.glass,[0,Fo+bx/2,0],null,null,{cast:!1,receive:!1});t.add(s);let r=nt(ce(.685,.685,1,72),n.fuel,[0,Fo+.5,0],null,null,{cast:!1}),o=nt(new Hn(.684,72),n.fuelTop,[0,1,0],[-Math.PI/2,0,0],null,{cast:!1}),a=nt(Jt(.678,.008,8,72),n.fuelTop,[0,1,0],[Math.PI/2,0,0],null,{cast:!1});t.add(r,o,a);let l=46,c=new qn(new Gn(1,10,8),n.bubble,l);c.castShadow=!1;let u=Array.from({length:l},(k,z)=>({r:Math.sqrt(Math.random())*.6,a:Math.random()*Ut,y:Math.random(),s:.006+Math.random()*.016,v:.5+Math.random(),w:Math.random()*Ut+z}));t.add(c);let d=nt(new yt(.085,Mp),Jn(vx().tex,.1),[0,Fo+.02+Mp/2,.892],null,null,{cast:!1}),h=nt(new Ws(.02,.05,3),$t(16734780,1.4),[.06,1,.9],[0,0,Math.PI/2],null,{cast:!1});t.add(d,h);let f=$t(4054148,2.5),p=nt(new Gn(.07,24,12,0,Ut,0,Math.PI/2),f,[0,2.72,0],null,null,{cast:!1});t.add(p);let g=Nt("fuel-hmi",[bn.x+.95,0,bn.z+1.3],[0,-.35,0]);g.userData.solid="fuel-hmi";let m=new ft;m.add("graphite",N(Le(.36,.04,.3,.015),[0,.02,0])),m.add("alu",N(ce(.035,.035,.95,16),[0,.5,0])),m.add("graphite",N(Le(.74,.46,.07,.025),[0,1.12,0],[-.28,0,0])),g.add(m.build(n,{name:"hmi"}));let x=xx(640,384,{bg:"#04070c"}),_=nt(new yt(.66,.396),Ha(x.tex,1.1),[0,1.12+Math.sin(.28)*.038,Math.cos(.28)*.038],[-.28,0,0],null,{cast:!1});g.add(_),e.add(g),e.add(pi(n,.8,.8,[g.position.x,0,g.position.z],.45));let b=new ft,y=(k,z)=>new C(k,z,bn.z);b.add("steel",fi([y(-6.92,.375),y(-6.05,.375),y(-6.05,.92)],.05,.16)),b.add("steel",fi([y(-6.05,1.38),y(-6.05,2.3),y(-4.75,2.3),y(-4.75,2.1)],.05,.18)),b.add("steel",N(ce(.1,.1,.025,24),[-6.93,.375,bn.z],[0,0,Math.PI/2])),b.add("chrome",...[0,1,2,3,4,5].map(k=>N(ce(.012,.012,.09,6),[-6.925,.375+Math.cos(k)*.075,bn.z+Math.sin(k)*.075],[0,0,Math.PI/2]))),b.add("blue",N(ce(.085,.085,.18,24),[-6.6,.375,bn.z],[0,0,Math.PI/2])),b.add("chrome",N(ce(.022,.022,.26,12),[-6.6,.52,bn.z])),b.add("steel",N(ce(.045,.05,.1,16),[-6.6,.47,bn.z])),b.add("orange",N(Jt(.11,.012,8,40),[-6.6,.64,bn.z],[Math.PI/2,0,0]));for(let k=0;k<3;k++)b.add("orange",N(new tn(.21,.014,.014),[-6.6,.64,bn.z],[0,k/3*Math.PI,0]));for(let k of[.945,1.355])b.add("alu",N(ce(.085,.085,.05,32),[-6.05,k,bn.z]));b.add("chrome",...[0,1,2,3].map(k=>N(ce(.008,.008,.41,6),[-6.05+Math.cos(k*1.5708+.78)*.078,1.15,bn.z+Math.sin(k*1.5708+.78)*.078])));for(let k of[-6.8,-6.25])b.add("graphite",N(Le(.12,.33,.16,.015),[k,.165,bn.z]));b.add("steel",N(Le(.22,.09,.22,.02),[-4.75,2.1,bn.z])),b.add("chrome",za(4,.12,2.15,.012,.012,.78).map(k=>k.translate(-4.75,0,bn.z))),e.add(b.build(n,{name:"feed"}));let M=nt(ce(.07,.07,.36,40,!0),n.glass,[-6.05,1.15,bn.z],null,null,{cast:!1,receive:!1}),w=E2().tex,v=new wt({color:330264,emissive:16777215,emissiveMap:w,emissiveIntensity:1.8,roughness:.3}),S=nt(ce(.034,.034,.36,24,!0),v,[-6.05,1.15,bn.z],null,null,{cast:!1});e.add(M,S);let D=.5,T="",P=new gn;return{root:e,anchors:{tank:new C(bn.x,2.9,bn.z),hmi:new C(g.position.x,1.5,g.position.z)},hover:[{id:"tank",object:s},{id:"tank",object:_}],setReadout(k){let z=JSON.stringify(k);z!==T&&(T=z,x.set(k))},update(k,z,I){D=Zt(D,st(I.level,.02,1),2.5,k);let V=D*Mp;r.scale.y=V,r.position.y=Fo+.012+V/2,o.position.y=a.position.y=Fo+.012+V+.001,h.position.y=Fo+.02+V;let ne=st(I.flow,0,1);for(let te=0;te<l;te++){let ie=u[te];ie.y+=k*(.05+ne*.32)*ie.v/Math.max(.25,V),ie.y>1&&(ie.y=0,ie.a=Math.random()*Ut,ie.r=Math.sqrt(Math.random())*.6);let J=Math.sin(z*3+ie.w)*.01;P.position.set(Math.cos(ie.a)*ie.r+J,Fo+.03+ie.y*Math.max(0,V-.04),Math.sin(ie.a)*ie.r),P.scale.setScalar(ie.s*(.3+.7*Math.min(1,(V-ie.y*V)*10+.3))),P.updateMatrix(),c.setMatrixAt(te,P.matrix)}c.instanceMatrix.needsUpdate=!0,w.offset.y-=k*(.15+ne*2.6),v.emissiveIntensity=.5+ne*2.2,f.emissive.setHex(I.peak?16753978:4054148),f.emissiveIntensity=1.6+Math.sin(z*2.2)*.6}}}var Zd=["archive","engraver","terminal","satellite","robot","press","kanban","beacon","labeler","generic"],_i={archive:{zh:"档案检索站",en:"Archive scanner",code:"ST-01"},engraver:{zh:"激光雕刻机",en:"Laser engraver",code:"ST-02"},terminal:{zh:"终端控制台",en:"Terminal console",code:"ST-03"},satellite:{zh:"卫星天线",en:"Satellite uplink",code:"ST-04"},robot:{zh:"协作机械臂",en:"Cobot cell",code:"ST-05"},press:{zh:"液压压缩机",en:"Hydraulic press",code:"ST-06"},kanban:{zh:"任务看板",en:"Kanban board",code:"ST-07"},beacon:{zh:"呼叫信标",en:"Call beacon",code:"ST-08"},labeler:{zh:"贴标包装机",en:"Labeler",code:"ST-09"},generic:{zh:"通用模块",en:"Generic module",code:"ST-10"}},qt={tank:{zh:"燃料罐",en:"Fuel tank",code:"TK-1"},engine:{zh:"主引擎",en:"Main engine",code:"EN-1"},console:{zh:"仪表台",en:"Instrument console",code:"CP-1"},dispenser:{zh:"晶圆供料器",en:"Wafer dispenser",code:"WD-1"},robot:{zh:"中央机械臂",en:"Central robot",code:"RB-1"},lock:{zh:"装载锁",en:"Load lock",code:"LL-1"},unload:{zh:"卸载锁",en:"Unload lock",code:"UL-1"},loadport:{zh:"装载端口",en:"Load port",code:"LP-1"},stocker:{zh:"成品库",en:"Product stocker",code:"STK-1"},gantry:{zh:"天车",en:"Gantry crane",code:"OHT-1"},dock:{zh:"子智能体坞站",en:"Subagent dock",code:"SA-1"},living:{zh:"生活区",en:"Living quarters",code:"LV-1"}},Va=new Set(["engraver","labeler"]),T2=[["press",/^(compress|decompress|search_context|acp_status|acp_cache)$/],["beacon",/^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],["labeler",/^(present|send_wechat|send_file|deliver)$/],["kanban",/^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],["robot",/^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],["satellite",/^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],["terminal",/^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],["engraver",/^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],["archive",/^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/]];function wx(n){let e=String(n||"").trim().toLowerCase();for(let[t,i]of T2)if(i.test(e))return t;return"generic"}function Jd(n){if(n&&typeof n=="object")return n;if(typeof n=="string"&&n.trim())try{let e=JSON.parse(n);return e&&typeof e=="object"?e:{}}catch{return{}}return{}}function wp(n){let e=String(n||"").replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t>=0?e.slice(t+1):e}function uc(n,e=48){let t=String(n).replace(/\s+/g," ").trim();return t.length>e?`${t.slice(0,e-1)}…`:t}function dc(n,e){for(let t of e){let i=n[t];if(typeof i=="string"&&i.trim())return i;if(Array.isArray(i)&&i.length){let s=i[0];if(typeof s=="string"&&s.trim())return s;if(s&&typeof s=="object"){let r=dc(s,["path","file_path","question","content","subject","description"]);if(r)return r}}}return""}function Ex(n,e){let t=Jd(e),i=dc(t,["file_path","path","filePath","files"]);if(i)return uc(wp(i)||i);let s=dc(t,["command","cmd","script","code"]);if(s)return uc(s.split(`
`).find(a=>a.trim())||s);let r=dc(t,["url"]);if(r)try{return uc(new URL(r).host||r)}catch{return uc(r)}let o=dc(t,["queries","query","pattern","questions","question","objective","description","prompt","subject","title","message","todos","content","action","target","blockId"]);return o?uc(o):""}function Sp(n){return typeof n=="string"&&n.length?n.replace(/\r\n/g,`
`).split(`
`):[]}function Sx(n,e){let t=Sp(n),i=Sp(e),s=0;for(;s<t.length&&s<i.length&&t[s]===i[s];)s++;let r=t.length-1,o=i.length-1;for(;r>=s&&o>=s&&t[r]===i[o];)r--,o--;return{added:Math.max(0,o-s+1),removed:Math.max(0,r-s+1)}}function Tx(n,e){let t=String(n||"").toLowerCase(),i=Jd(e),s=i.file_path||i.path||i.filePath;if(typeof s!="string"||!s)return null;if(t==="write"||t==="create_file")return{path:s,added:Sp(i.content??i.text).length,removed:0};if(Array.isArray(i.edits)){let r=0,o=0;for(let a of i.edits){if(!a||typeof a!="object")continue;let l=Sx(a.old_string??a.oldText,a.new_string??a.newText);r+=l.added,o+=l.removed}return{path:s,added:r,removed:o}}if("old_string"in i||"new_string"in i||"oldText"in i){let r=Sx(i.old_string??i.oldText,i.new_string??i.newText);return{path:s,...r}}return{path:s,added:0,removed:0}}var so=new C(-4,0,-.7),Wa=new C(-2.08,0,1.54),Ax=1.45,Rx=[1152,320],A2=[["思考","#9b6bff",n=>n==="reasoning"||n==="thinking"],["生成","#4d7bff",n=>n==="generating"],["工具","#ffa21f",n=>n==="tool"],["空闲","#aab3c5",n=>!n||n==="idle"]],jd=n=>Math.floor(Math.max(0,n)).toLocaleString("en-US"),R2=n=>n>=100?n.toFixed(2):n.toFixed(4);function Cx(n,e,t,i,s,r,o,a,l){let c=.75*Math.PI,u=2.25*Math.PI;n.lineCap="round",n.lineWidth=14,n.strokeStyle="rgba(120, 150, 210, 0.16)",n.beginPath(),n.arc(e,t,i,c,u),n.stroke(),n.lineWidth=2,n.strokeStyle="rgba(160, 185, 235, 0.35)",n.beginPath();for(let d=0;d<=10;d++){let h=c+(u-c)*d/10,f=i+(d%5===0?25:20);n.moveTo(e+Math.cos(h)*(i+14),t+Math.sin(h)*(i+14)),n.lineTo(e+Math.cos(h)*f,t+Math.sin(h)*f)}n.stroke(),s>.002&&(n.lineWidth=14,n.strokeStyle=r,n.shadowColor=r,n.shadowBlur=16,n.beginPath(),n.arc(e,t,i,c,c+(u-c)*Math.min(1,s)),n.stroke(),n.shadowBlur=0),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#eef3ff",n.font=`700 52px ${bt}`,n.fillText(o,e,t-6),n.fillStyle="#9fb0cf",n.font=`600 20px ${Rt}`,n.fillText(a,e,t+42),n.fillStyle="#62739a",n.font=`600 14px ${bt}`,n.fillText(l,e,t+66),n.textAlign="left"}function Px(n,e,t,i){n.fillStyle="#040a14",n.fillRect(0,0,e,t),n.strokeStyle="rgba(90, 140, 255, 0.07)",n.lineWidth=1,n.beginPath();for(let d=16;d<e;d+=32)n.moveTo(d+.5,0),n.lineTo(d+.5,t);for(let d=16;d<t;d+=32)n.moveTo(0,d+.5),n.lineTo(e,d+.5);n.stroke();let s=i.ctx>.85?"#ff5a4f":i.ctx>.6?"#ffb340":"#5b8cff";Cx(n,172,166,116,i.ctx,s,`${Math.round(i.ctx*100)}%`,"上下文压力","CONTEXT"),Cx(n,e-172,166,116,i.tach,"#7fa8ff",`${Math.round(i.tps)}`,"生成速率","TOKEN / S");let r=342,o=e-342,a=[["未命中输入","MISS",jd(i.miss)],["缓存命中","HIT",jd(i.hit)],["输出","OUTPUT",jd(i.output)],["推理","REASON",jd(i.reasoning)],["花费","CNY",`¥ ${R2(i.cost)}`]];n.textBaseline="middle",a.forEach(([d,h,f],p)=>{let g=34+p*44;p&&(n.fillStyle="rgba(120, 150, 210, 0.12)",n.fillRect(r,g-22,o-r,1)),n.textAlign="left",n.fillStyle="#a9b8d6",n.font=`600 21px ${Rt}`,n.fillText(d,r,g);let m=n.measureText(d).width;n.fillStyle="#5f7095",n.font=`600 13px ${bt}`,n.fillText(h,r+m+8,g+2),n.textAlign="right",n.fillStyle=p===4?"#ffd38a":"#eaf1ff",Qi(n,f,250,30,700,bt),n.fillText(f,o,g)});let l=104,c=12,u=(e-(l*4+c*3))/2;n.textAlign="center";for(let[d,h,f]of A2){let p=f(i.phase);ji(n,u,258,l,40,20),p?(n.globalAlpha=.9,n.fillStyle=h,n.fill()):(n.globalAlpha=.3,n.lineWidth=2,n.strokeStyle=h,n.stroke()),n.globalAlpha=1,n.fillStyle=p?"#081020":"#8090b0",n.font=`700 19px ${Rt}`,n.fillText(d,u+l/2,278),u+=l+c}n.textAlign="left",i.err>0&&(n.lineWidth=5,n.strokeStyle=`rgba(255, 90, 79, ${(.25+.6*i.err).toFixed(3)})`,ji(n,4,4,e-8,t-8,14),n.stroke())}function C2(n,e,t,i,s,r=.02,o=0){let a=new ws,l=(u,d,h,f,p,g)=>{u.moveTo(d+g,h),u.lineTo(d+f-g,h),u.quadraticCurveTo(d+f,h,d+f,h+g),u.lineTo(d+f,h+p-g),u.quadraticCurveTo(d+f,h+p,d+f-g,h+p),u.lineTo(d+g,h+p),u.quadraticCurveTo(d,h+p,d,h+p-g),u.lineTo(d,h+g),u.quadraticCurveTo(d,h,d+g,h)};l(a,-n/2,-e/2,n,e,r*2);let c=new xr;return l(c,-t/2,o-i/2,t,i,r),a.holes.push(c),new Xs(a,{depth:s,bevelEnabled:!0,bevelThickness:s*.25,bevelSize:s*.25,bevelSegments:2,curveSegments:6})}function P2(n){return{...n,alu:n.white,aluDark:n.graphite,steel:n.graphite,darkSteel:n.graphite,rubber:n.graphite,plastic:n.graphite,brass:n.chrome,orange:$t(10185727,1.4)}}function Ix(n){let e=P2(n),t=Nt("engine"),i=Nt("engine-body",[so.x,0,so.z]);i.userData.solid="engine",t.add(i),t.add(pi(e,4.8,2.7,[so.x+.35,0,so.z],.62));let s=new ft;s.add("graphite",N(Le(3.9,.36,1.9,.05),[.35,.24,0])),s.add("aluDark",N(Le(3.94,.04,1.94,.015),[.35,.44,0]));for(let K of[-1.45,2.15])for(let q of[-.8,.8])s.add("rubber",N(ce(.08,.09,.06,20),[K,.03,q]));for(let K of[-.72,.62])s.add("graphite",N(Le(.22,.56,1,.03),[K,.72,0])),s.add("steel",N(Le(.26,.04,1.04,.01),[K,.47,0])),s.add("chrome",...[-.4,.4].map(q=>N(ce(.02,.02,.03,6),[K,.5,q])));s.add("white",N(Le(.78,1.62,.06,.02),[1.8,1.24,-.48]));for(let K of[1.435,2.165])s.add("white",N(Le(.07,1.62,.82,.02),[K,1.24,-.1]));for(let K of[.46,2.02])s.add("white",N(Le(.78,.06,.82,.02),[1.8,K,-.1]));s.add("aluDark",C2(.78,1.62,.62,1.1,.03,.02,.12).translate(1.8,1.24,.29)),s.add("grille",N(new yt(.5,.18),[1.8,.6,.335])),s.add("chrome",N(ce(.065,.065,.2,24),[1.74,1.5,0],[Math.PI/2,0,0])),s.add("chrome",N(ce(.05,.05,.2,24),[1.987,1.148,0],[Math.PI/2,0,0])),s.add("steel",N(ce(.05,.065,.12,20),[.8,2.12,0]));for(let K=0;K<4;K++)s.add("chrome",N(Jt(.034,.007,8,24),[.8,2.2+K*.03,0],[Math.PI/2,0,0]));s.add("orange",N(ce(.045,.045,.03,20),[.8,2.32,0])),s.add("alu",N(ce(.022,.022,.3,12),[2,2.2,-.36])),s.add("graphite",N(ce(.05,.056,.03,20),[2,2.73,-.36]));for(let K of[.12,.28])s.add("rubber",fi([[K,.95,.42],[K,.62,.86],[K,.62,1.06]],.024,.18,10));i.add(s.build(e,{name:"engine-body"}));let r=Nt("turbine",[0,Ax,0],[0,0,-Math.PI/2]);i.add(r);let o=new ft;o.add("alu",hi([[.5,-1.33],[.6,-1.31],[.655,-1.26],[.668,-1.16],[.64,-1.06],[.61,-1]],72)),o.add("aluDark",N(ce(.6,.6,.56,64),[0,-.72,0]));for(let K=0;K<9;K++)o.add("alu",N(ce(.665,.665,.022,64),[0,-.97+K*.06,0]));o.add("steel",N(ce(.69,.69,.05,72),[0,-.445,0])),o.add("steel",N(ce(.69,.69,.05,72),[0,.405,0])),o.add("chrome",za(20,.66,-.413,.016,.014)),o.add("chrome",za(20,.66,.373,.016,.014,.157)),o.add("alu",N(ce(.62,.62,.66,64),[0,.76,0])),o.add("aluDark",hi([[.62,1.09],[.6,1.14],[.45,1.19],[.2,1.215],[.001,1.22]],64)),o.add("chrome",N(ce(.06,.06,.26,24),[0,1.33,0])),o.add("grille",N(ce(.6,.6,.012,64),[0,-1.2,0]));for(let K of[.22,.37,.52])o.add("chrome",N(Jt(K,.009,8,64),[0,-1.205,0],[Math.PI/2,0,0]));for(let K=0;K<6;K++)o.add("chrome",N(new tn(1.18,.012,.028),[0,-1.205,0],[0,K/6*Math.PI,0]));r.add(o.build(e,{name:"casing"}));let a=Nt("rotor"),l=new ft;l.add("darkSteel",N(ce(.24,.24,.8,48),[0,-.02,0]));for(let[K,q,ae,fe]of[[14,-.2,.5,.3],[16,.17,-.55,.28]])for(let ge=0;ge<K;ge++){let oe=Le(.32,fe,.014,.004,1);oe.rotateX(ae),oe.translate(.41,q,0),oe.rotateY(ge/K*Ut),l.add("chrome",oe)}l.add("chrome",hi([[.001,-1.45],[.06,-1.42],[.13,-1.35],[.18,-1.27],[.2,-1.2]],48)),a.add(l.build(e,{name:"rotor"}));let c=$t(5078015,1),u=[-.33,-.02,.29].map(K=>N(ce(.247,.247,.026,48,!0),[0,K,0])),d=new ft().add("core",u);a.add(d.build({core:c},{name:"core",castShadow:!1})),r.add(a);let h=nt(ce(.632,.632,.81,72,!0),e.glass,[0,-.02,0],null,null,{cast:!1,receive:!1});r.add(h);let f=es(qt.engine.zh,qt.engine.en,qt.engine.code);i.add(nt(new yt(.5,.14),Jn(f.tex,.35),[.76,Ax+.05,.628],null,null,{cast:!1}));let p=nt(op(24,.27,.31,.06,.06),e.brass,[1.74,1.5,.08]),g=nt(op(12,.125,.165,.06,.045),e.steel,[1.987,1.148,.08]),m=-7*Js,x=-4*Js;i.add(p,g),i.add(nt(new yt(.62,1.1),e.glass,[1.8,1.36,.3],null,null,{cast:!1,receive:!1}));let b=[16726832,16753183,3461498,5078015].map((K,q)=>{let ae=$t(K,.15);return i.add(nt(ce(.055,.055,.085,24),ae,[2,2.66-q*.09,-.36],null,null,{cast:!1})),ae}),y=Nt("console",[-.35,0,1.22]);i.add(y);let M=new ft;M.add("white",N(Le(2.2,.82,.46,.04),[0,.41,0])),M.add("rubber",N(Le(2.16,.06,.4,.02),[0,.03,.01])),y.add(M.build(e,{name:"console"}));let w=es(qt.console.zh,qt.console.en,qt.console.code);y.add(nt(new yt(.72,.2),Jn(w.tex,.35),[0,.6,.232],null,null,{cast:!1}));let v=Nt("panel",[0,.98,.02],[-.62,0,0]);y.add(v);let S=new ft;S.add("aluDark",N(Le(2.24,.62,.06,.02),[0,0,-.03])),v.add(S.build(e,{name:"panel"}));let D=It(Rx[0],Rx[1],null);v.add(nt(new yt(2.16,.6),Ha(D.tex,1.15),[0,0,.002],null,null,{cast:!1})),v.add(nt(new yt(2.18,.61),e.glass,[0,0,.012],null,null,{cast:!1,receive:!1}));let T={sig:"",at:-1/0,data:{ctx:0,tach:0,tps:0,miss:0,hit:0,output:0,reasoning:0,cost:0,phase:"idle",err:0}};D.redraw((K,q,ae)=>Px(K,q,ae,T.data));let P=[];for(let K=0;K<24;K++){let q=new Vs({map:e.shadow.map,color:14673650,transparent:!0,opacity:0,depthWrite:!1}),ae=new pr(q);ae.visible=!1,i.add(ae),P.push({sp:ae,mat:q,life:0,vx:0,vz:0})}let k=0,z=Nt("dispenser",[Wa.x,0,Wa.z]);z.userData.solid="dispenser",t.add(z);let I=new ft;I.add("white",N(Le(.5,1.2,.56,.03),[0,.6,0])),I.add("plastic",N(Te(.02,.05,.36),[.252,.922,0])),I.add("aluDark",N(Le(.54,.05,.6,.015),[0,1.225,0])),I.add("grille",N(new yt(.3,.3),[0,1.252,0],[-Math.PI/2,0,0])),z.add(I.build(e,{name:"dispenser"}));let V=gx(qt.dispenser.zh,`${qt.dispenser.en} · ${qt.dispenser.code}`.toUpperCase(),{w:256,h:80});z.add(nt(new yt(.34,.106),Jn(V.tex,.2),[0,1.02,.281],null,null,{cast:!1}));let ne=$t(5078015,.3);z.add(nt(new tn(.012,.012,.3),ne,[.256,.97,0],null,null,{cast:!1})),t.add(pi(e,.9,.9,[Wa.x,0,Wa.z],.5));let te=new ft().add("rubber",fi([[-1.83,1,-.6],[-1.6,1,-.6],[-1.6,.3,.3],[-1.6,.3,1.2],[-1.86,.5,1.4]],.032,.2,10));t.add(te.build(e,{name:"conduit"}));let ie=new Dt({visible:!1}),J=(K,q,ae,fe)=>{let ge=new et(new tn(q[0],q[1],q[2]),ie);return ge.position.set(ae[0],ae[1],ae[2]),ge.userData.hoverId=K,fe.add(ge),{id:K,object:ge}},Y={rotorSpeed:.4,rotorAngle:0,ctx:0,tach:0,disp:[0,0,0,0,0],dispPulse:0,err:0},O=new ke,G={thinking:new ke(8217599),reasoning:new ke(10185727),generating:new ke(4160511),tool:new ke(16753183),idle:new ke(2838456)};return{root:t,anchors:{engine:new C(so.x,2.5,so.z),console:new C(so.x-.35,1.45,so.z+1.22),dispenser:new C(Wa.x,1.45,Wa.z)},hover:[J("engine",[3.2,1.7,1.5],[.2,1.45,0],i),J("console",[2.3,1.35,.8],[-.35,.68,1.22],i),J("dispenser",[.6,1.3,.62],[0,.65,0],z)],pulseDispenser(){Y.dispPulse=1},update(K,q,ae){let fe=ae.phase,ge=fe==="generating"||fe==="reasoning",oe=.35+st(ae.tps,0,140)*.16+(fe==="thinking"?.8:0);Y.rotorSpeed=Zt(Y.rotorSpeed,oe,1.4,K),Y.rotorAngle+=Y.rotorSpeed*K,a.rotation.y=Y.rotorAngle,p.rotation.z=m+Y.rotorAngle*.45,g.rotation.z=x-Y.rotorAngle*.9;let Pe=G[fe]||G.idle;O.copy(c.emissive).lerp(Pe,1-Math.exp(-4*K)),c.emissive.copy(O);let Ye=.85+.15*Math.sin(q*9),Fe=ge?(2.4+st(ae.tps,0,120)/30)*Ye:fe==="tool"?.9:fe==="thinking"?1.3:.45;c.emissiveIntensity=Zt(c.emissiveIntensity,Fe,5,K),Y.ctx=Zt(Y.ctx,st(ae.ctx,0,1),2.5,K),Y.tach=Zt(Y.tach,st(ae.tps/120,0,1),3,K);let Ze=[ae.counters.miss,ae.counters.hit,ae.counters.output,ae.counters.reasoning,ae.counters.cost];for(let $=0;$<5;$++){let Ce=Ze[$]||0,Re=Y.disp[$];Ce<Re||Ce-Re<($===4?1e-5:.5)?Re=Ce:Re=Zt(Re,Ce,3.2,K),Y.disp[$]=Re}Y.err=Math.max(0,Y.err-K*.5),ae.errorPulse&&(Y.err=1);let $e=T.data;$e.ctx=Y.ctx,$e.tach=Y.tach,$e.tps=ae.tps,[$e.miss,$e.hit,$e.output,$e.reasoning,$e.cost]=Y.disp,$e.phase=fe,$e.err=Y.err;let pe=`${Math.round(Y.ctx*400)}|${Math.round(Y.tach*240)}|${Math.round(ae.tps)}|${Y.disp.slice(0,4).map(Math.floor).join(",")}|${Y.disp[4].toFixed(4)}|${fe}|${Math.ceil(Y.err*4)}`;pe!==T.sig&&q-T.at>=.15&&(T.sig=pe,T.at=q,D.redraw(($,Ce,Re)=>Px($,Ce,Re,$e)));let X=Math.sin(q*12)>0?1:.2,U=[Y.err>0?3.5*X:.1,fe==="tool"?3:.1,ge||fe==="thinking"?3:.6,fe==="reasoning"?3:.1];b.forEach(($,Ce)=>{$.emissiveIntensity=Zt($.emissiveIntensity,U[Ce],12,K)}),Y.dispPulse=Math.max(0,Y.dispPulse-K*2.5),ne.emissiveIntensity=.3+Y.dispPulse*4;let se=st((Y.ctx-.78)/.22,0,1);k+=K*se*18;for(let $ of P)if($.life<=0&&k>=1&&(k-=1,$.life=1,$.vx=(Math.random()-.5)*.15,$.vz=(Math.random()-.5)*.15,$.sp.position.set(.8,2.36,0),$.sp.visible=!0),$.life>0){$.life-=K/1.7;let Ce=1-$.life;$.sp.position.x+=$.vx*K,$.sp.position.z+=$.vz*K,$.sp.position.y+=K*(.55-Ce*.25),$.sp.scale.setScalar(.08+Ce*.55),$.mat.opacity=Math.max(0,Math.sin(Math.PI*Math.min(1,Ce*1.2))*.32),$.life<=0&&($.sp.visible=!1)}k>4&&(k=4)}}}var Ds=new C(2.6,0,-1),Er=3.1,Ns=2.35,zo=.75,Dn=.922,hc=.012,Uo=1,Xa=1,Lx=.4,Bo=235*Js,$a=305*Js,Ls=1.54;function Ii(n,e,t=0,i=new C){return i.set(Ds.x+e*Math.cos(n),t,Ds.z-e*Math.sin(n))}var Ux=n=>Math.atan2(-Math.cos(n),Math.sin(n));function Qd(n){let e=Nt("pedestal"),t=new ft;t.add("graphite",N(ce(.15,.17,.04,40),[0,.02,0])),t.add("alu",N(ce(.055,.055,.78,28),[0,.43,0])),t.add("aluDark",N(ce(.12,.1,.03,48),[0,.835,0])),t.add("chrome",N(Jt(.115,.006,8,48),[0,.851,0],[Math.PI/2,0,0]));for(let s=0;s<3;s++){let r=s/3*Ut+.3;t.add("ceramic",N(ce(.006,.006,.068,10),[Math.cos(r)*.075,.884,Math.sin(r)*.075]))}e.add(t.build(n,{name:"pedestal"}));let i=$t(5078015,.25);return e.add(nt(Jt(.128,.009,8,56),i,[0,.84,0],[Math.PI/2,0,0],null,{cast:!1})),{root:e,led:i}}var jn={deckY:.43,drumTop:.565,link1:{y:.58,h:.14,r1:.16,r2:.135,bevel:.022},link2:{y:.735,h:.12,r1:.125,r2:.11,bevel:.018},forkY:.905},Dx={idle:{zh:"待机",en:"IDLE",color:4641535,css:"#46d2ff"},home:{zh:"归位",en:"HOMING",color:4160511,css:"#86a8ff"},deliver:{zh:"上料",en:"LOAD",color:4160511,css:"#86a8ff"},collect:{zh:"下料",en:"UNLOAD",color:4160511,css:"#86a8ff"}},Nx={raw:{zh:"待加工",en:"RAW",css:"#c9d3e0"},normal:{zh:"已加工",en:"DONE",css:"#8fb8ff"},gold:{zh:"产出文件",en:"FILE",css:"#ffc56a",color:16762218},bad:{zh:"失败",en:"FAILED",css:"#ff6b6b",color:16731469}};function Bx(n,e,t){let i=Math.asin((e-t)/n);return{phi:i,t1:[e*Math.sin(i),e*Math.cos(i)],t2:[n+t*Math.sin(i),t*Math.cos(i)]}}function I2(n,e,t,i,s,r){let o=e-r,a=t-r,{phi:l,t1:c}=Bx(n,o,a),u=Math.PI/2-l,d=new ws;d.moveTo(c[0],c[1]),d.absarc(n,0,a,u,-u,!0),d.absarc(0,0,o,-u,u,!0);let h=new Xs(d,{depth:s-2*r,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:3,curveSegments:28});return h.rotateX(-Math.PI/2),h.translate(0,i+r,0),h}function Ox(n,e,t,i,s,r,o,a,l){let{t1:c,t2:u}=Bx(o,r.r1,r.r2),d=(u[1]-c[1])/(u[0]-c[0]),h=c[1]+(i-c[0])*d;return N(Te(n,e,t),[i,s,a*(h+l)],[0,-Math.atan(a*d),0])}function L2(){let n=new ws,e=.04;n.moveTo(0,-e),n.lineTo(.16,-e),n.quadraticCurveTo(.21,-e,.235,-.098),n.lineTo(.525,-.098),n.absarc(.525,-.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.3,-.052),n.quadraticCurveTo(.255,-.05,.25,0),n.quadraticCurveTo(.255,.05,.3,.052),n.lineTo(.525,.052),n.absarc(.525,.075,.023,-Math.PI/2,Math.PI/2,!1),n.lineTo(.235,.098),n.quadraticCurveTo(.21,e,.16,e),n.lineTo(0,e),n.absarc(0,0,e,Math.PI/2,3*Math.PI/2,!1);let t=new Xs(n,{depth:.008,bevelEnabled:!0,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:12});return t.rotateX(-Math.PI/2),t.translate(0,jn.forkY+.002,0),t}function D2(){let n=It(128,128,(e,t)=>{let s=t/16;for(let r=0;r<16;r++)for(let o=0;o<16;o++){let a=(o+r)%4<2;e.fillStyle=a?"#2a2f38":"#13161b",e.fillRect(o*s,r*s,s,s),e.fillStyle=a?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",e.fillRect(o*s,r*s,s,s*.4)}},{anisotropy:8,repeat:[14,14]});return new wt({map:n.tex,roughness:.3,metalness:.35,name:"robot-carbon"})}function N2(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#05090f"),i.addColorStop(.5,"#0c1422"),i.addColorStop(1,"#05090f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="#1c2533",n.fillRect(0,t*.3,e,t*.4),n.fillStyle="#3c495b";for(let s=0;s<e;s+=16)n.fillRect(s,t*.24,8,t*.08),n.fillRect(s+8,t*.68,8,t*.08);n.fillStyle="rgba(160, 200, 255, 0.35)";for(let s=4;s<e;s+=64)n.fillRect(s,t*.47,22,t*.06);n.fillStyle="rgba(70, 210, 255, 0.9)",n.fillRect(0,1,e,2),n.fillRect(0,t-3,e,2)}function O2(n,e,t){n.fillStyle="#03060c",n.fillRect(0,0,e,t);for(let i=0;i<180;i++){let s=i%5===0,r=s?t*.6:t*.32;n.fillStyle=s?"#46d2ff":"#1f5a7a",n.fillRect(i/180*e,(t-r)/2,s?2.2:1.4,r)}n.fillStyle="#ffffff";for(let i=0;i<4;i++)n.fillRect(i/4*e+3,t*.12,10,t*.1);n.fillStyle="rgba(77, 123, 255, 0.6)",n.fillRect(0,t*.84,e,t*.05),n.fillRect(0,t*.1,e,t*.03)}function k2(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function F2(n,e,t,{st:i,carry:s,from:r,to:o}){n.clearRect(0,0,e,t),k2(n,3,3,e-6,t-6,16),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke(),n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Rt}`,n.fillStyle="#86a7c9",n.fillText(`${qt.robot.code} · ${qt.robot.zh}`,22,38),n.textAlign="right",n.font=`600 19px ${bt}`,n.fillText("CENTRAL ROBOT",e-22,38),n.textAlign="left",n.font=`700 50px ${Rt}`,n.fillStyle=i.css,n.fillText(i.zh,22,102);let a=n.measureText(i.zh).width;n.font=`600 21px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(i.en,34+a,100),n.textAlign="right",n.font=`600 32px ${bt}`,n.fillStyle="#e8f0ff",n.fillText(r&&o?`${r} → ${o}`:o?`→ ${o}`:"—",e-22,102),n.textAlign="left",n.fillStyle=s?s.css:"#5d7391",n.beginPath(),n.arc(31,141,7,0,Ut),n.fill(),n.font=`600 23px ${Rt}`,n.fillText(s?`载片 · ${s.zh}  ${s.en}`:"空载 · EMPTY",47,149)}function U2(n){let e=Nt("robot",[Ds.x,0,Ds.z]),t=$t(4641535,2.2),i=$t(4641535,1.8),s=$t(5078015,1.4),r={...n,carbon:D2(),led:t},o=new ft;o.add("white",hi([[.001,.03],[1.185,.03],[1.2,.05],[1.2,.155],[1.16,.17],[1.16,.3],[1.2,.315],[1.2,.385],[1.18,.4],[.001,.4]],112)),o.add("rubber",N(ce(1.13,1.13,.03,96),[0,.015,0])),o.add("graphite",N(ce(1.15,1.15,jn.deckY-.4,112),[0,(.4+jn.deckY)/2,0])),o.add("plastic",N(ce(.62,.62,.006,72),[0,jn.deckY+.003,0])),o.add("chrome",N(Jt(.62,.005,8,112),[0,jn.deckY+.003,0],[Math.PI/2,0,0]));for(let J=0;J<12;J++){let Y=J/12*Ut+.13;o.add("chrome",N(ce(.016,.016,.006,10),[Math.cos(Y)*.92,jn.deckY+.003,Math.sin(Y)*.92]))}let a=jn.drumTop-jn.deckY;o.add("white",N(ce(.34,.37,a,72),[0,jn.deckY+a/2,0])),o.add("chrome",N(Jt(.342,.006,8,72),[0,jn.drumTop,0],[Math.PI/2,0,0])),o.add("chrome",fi([[0,.4,1.17],[0,.47,1.27],[0,.522,1.352]],.008,.04,8)),e.add(o.build(n,{name:"robot-base"}));let l=new ft;l.add("led",N(Jt(1.135,.005,6,160),[0,.012,0],[Math.PI/2,0,0])),l.add("led",N(ce(.358,.358,.012,72,!0),[0,.5,0])),e.add(l.build({led:t},{name:"robot-glow",castShadow:!1})),e.add(nt(Jt(1.165,.0065,8,160),s,[0,.402,0],[Math.PI/2,0,0],null,{cast:!1}));let c=It(1024,48,O2,{anisotropy:8}),u=new Dt({map:c.tex,name:"robot-encoder"});u.color.setScalar(2);let d=nt(ce(1.168,1.168,.12,128,!0),u,[0,.235,0],null,null,{cast:!1,receive:!1}),h=zi({color:726566,opacity:.4,fresnel:.55}),f=nt(ce(1.195,1.195,.14,128,!0),h,[0,.235,0],null,null,{cast:!1,receive:!1});f.renderOrder=2,e.add(d,f);let p=It(512,176,null,{anisotropy:8}),g=new Dt({map:p.tex,transparent:!0,depthWrite:!1,side:jt,name:"robot-holo"});g.color.setScalar(1.25);let m=nt(new yt(.56,.1925),g,[0,.62,1.34],[-.3,0,0],null,{cast:!1,receive:!1});m.renderOrder=3,e.add(m);let x=Nt("arm");e.add(x),x.add(new ft().add("steel",N(ce(.2,.2,.19,56),[0,.495,0])).build(n,{name:"robot-column"}));let _=It(512,64,N2,{anisotropy:8,repeat:[1,1]}),b=J=>new wt({map:J,emissiveMap:J,emissive:16777215,emissiveIntensity:.55,roughness:.08,metalness:0,name:"robot-belt"}),y=_.tex,M=_.tex.clone();function w(J,Y,O,G){let K=Nt(J),q=Y.y+Y.h,ae=new ft;ae.add("white",I2(O,Y.r1,Y.r2,Y.y,Y.h,Y.bevel)),ae.add("chrome",N(Le(.66,.004,Y.r2*.95,.002),[.5,q+.0015,0]));for(let oe of[-1,1])ae.add("graphite",Ox(.66,.026,.004,O/2,Y.y+Y.h/2,Y,O,oe,5e-4));G(ae,q),K.add(ae.build(r,{name:J}));let fe=new yt(.62,Y.r2*.95-.022);fe.rotateX(-Math.PI/2),K.add(nt(fe,b(Y===jn.link1?y:M),[.5,q+.004,0],null,null,{cast:!1}));let ge=new ft;for(let oe of[-1,1])ge.add("led",Ox(.6,.009,.005,O/2,Y.y+Y.h/2,Y,O,oe,.0022));return K.add(ge.build({led:i},{name:`${J}-strips`,castShadow:!1})),K}let v=jn.link1,S=w("link1",v,Uo,(J,Y)=>{J.add("alu",N(ce(.118,.124,.012,56),[0,Y+.006,0])),J.add("chrome",N(ce(.034,.034,.008,24),[0,Y+.016,0])),J.add("alu",N(ce(.1,.104,.012,56),[Uo,Y+.006,0])),J.add("graphite",N(ce(.11,.11,.01,48),[Uo,v.y-.005,0])),J.add("led",N(Jt(.127,.0045,6,72),[0,Y+.003,0],[Math.PI/2,0,0])),J.add("led",N(Jt(.107,.004,6,64),[Uo,Y+.003,0],[Math.PI/2,0,0]))});x.add(S);let D=jn.link2,T=w("link2",D,Xa,(J,Y)=>{J.add("alu",N(ce(.086,.09,.01,48),[0,Y+.005,0])),J.add("chrome",N(ce(.028,.028,.007,20),[0,Y+.0135,0])),J.add("white",N(ce(.07,.078,jn.forkY-.01-Y,48),[Xa,(Y+jn.forkY-.01)/2,0])),J.add("led",N(Jt(.093,.0035,6,56),[0,Y+.003,0],[Math.PI/2,0,0])),J.add("led",N(Jt(.079,.0035,6,56),[Xa,Y+.012,0],[Math.PI/2,0,0]))});T.position.x=Uo,S.add(T);let P=Nt("fork",[Xa,0,0]);T.add(P);let k=new ft;k.add("alu",N(ce(.064,.064,.01,48),[0,jn.forkY-.005,0])),k.add("carbon",L2()),k.add("graphite",N(Le(.06,.016,.07,.005),[.07,jn.forkY+.02,0]));for(let J of[.31,.5])for(let Y of[-.075,.075])k.add("rubber",N(ce(.011,.011,.002,14),[J,jn.forkY+.013,Y]));P.add(k.build(r,{name:"fork",castShadow:!0}));let z=$t(4641535,.8);P.add(nt(Te(.004,.006,.044),z,[.1015,jn.forkY+.02,0],null,null,{cast:!1}));let I={yaw:270*Js,reach:zo,lift:0},V=new C;function ne(){let J=st(I.reach-Lx,.02,Uo+Xa-1e-4),Y=Math.acos(J/(Uo+Xa));S.rotation.y=I.yaw+Y,T.rotation.y=-2*Y,P.rotation.y=Y,x.position.y=I.lift,d.rotation.y=S.rotation.y,y.offset.x=-2*Y*.08,M.offset.x=Y*.065}ne();let te="";function ie(J="idle",Y=null,O=null,G=null){let K=`${J}|${Y}|${O}|${G}`;if(K===te)return;te=K;let q=Dx[J]||Dx.idle,ae=G?Nx[G]||Nx.normal:null,fe=ae&&ae.color?ae.color:q.color;i.color.setHex(fe).multiplyScalar(.25),i.emissive.setHex(fe),p.redraw((ge,oe,Pe)=>F2(ge,oe,Pe,{st:q,carry:ae,from:Y,to:O}))}return ie(),{root:e,pose:I,setPose(J,Y,O){I.yaw=J,I.reach=Y,I.lift=O,ne()},carryPoint(J=V){return e.updateMatrixWorld(!0),J.set(Lx,0,0),P.localToWorld(J),J.y=.921+I.lift,J},setBusy(J){z.emissiveIntensity=J?3:.8,s.emissiveIntensity=J?2.4:1.4,i.emissiveIntensity=J?2.6:1.8},setStatus:ie,parts:{arm:x,link1:S,link2:T,fork:P},hover:{id:"robot",object:e}}}function kx(n,{center:e,side:t,zh:i,en:s,code:r,hubDoorX:o}){let a=Nt(`chamber-${r}`,[e.x,0,e.z]);a.userData.solid=`chamber:${r}`;let l=new ft;l.add("white",N(Le(.8,.8,.8,.03),[0,.42,0])),l.add("rubber",N(Le(.78,.04,.78,.01),[0,.02,0])),l.add("aluDark",N(Le(.84,.04,.84,.012),[0,.84,0]));for(let m of[-.4,.4])for(let x of[-.4,.4])l.add("aluDark",N(Te(.04,.3,.04),[m,1,x]));l.add("aluDark",N(Te(.84,.03,.04),[0,1.15,.4]),N(Te(.84,.03,.04),[0,1.15,-.4])),l.add("aluDark",N(Te(.04,.03,.84),[.4,1.15,0]),N(Te(.04,.03,.84),[-.4,1.15,0])),l.add("aluDark",N(ce(.1,.1,.03,32),[0,.875,0]));for(let m=0;m<3;m++){let x=m/3*Ut;l.add("ceramic",N(ce(.005,.005,.03,8),[Math.cos(x)*.06,.903,Math.sin(x)*.06]))}l.add("graphite",N(Te(.05,.2,.5),[t*.42,.95,0])),l.add("graphite",N(Te(.5,.2,.05),[o,.95,-.42])),l.add("steel",N(ce(.035,.035,.16,20),[-t*.25,1.24,.25])),l.add("chrome",N(ce(.05,.05,.02,24),[-t*.25,1.33,.25])),a.add(l.build(n,{name:"chamber"}));let c=[N(new yt(.76,.27),[0,1,.4]),N(new yt(.76,.27),[-t*.4,1,0],[0,Math.PI/2,0]),N(new yt(.76,.76),[0,1.155,0],[-Math.PI/2,0,0])],u=new ft().add("glass",c);a.add(u.build(n,{name:"chamber-glass",castShadow:!1}));let d=nt(Le(.03,.12,.42,.01),n.graphite,[t*.45,.95,0]),h=nt(Le(.42,.12,.03,.01),n.graphite,[o,.95,-.45]);a.add(d,h);let f=es(i,s,r);a.add(nt(new yt(.56,.158),Jn(f.tex,.35),[0,.62,.402],null,null,{cast:!1}));let p=$t(3461498,.6);a.add(nt(Te(.6,.016,.01),p,[0,.79,.403],null,null,{cast:!1}));let g={track:0,hub:0};return{root:a,led:p,setDoors(m,x){g.track=m,g.hub=x,d.position.y=.95+m*.13,h.position.y=.95+x*.13},doors:g}}function Fx(n,e,t,i,s=.36){let r=i.x-t.x,o=i.z-t.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),c=[(t.x+i.x)/2,0,(t.z+i.z)/2];e.add("alu",N(Le(a,.04,s,.01),[c[0],.88,c[2]],[0,l,0])),e.add("grille",N(Te(Math.max(.01,a-.06),.002,.22),[c[0],.901,c[2]],[0,l,0]));for(let d of[-1,1]){let h=Te(a,.024,.014);h.translate(0,0,d*(s/2-.007)),h.rotateY(l),h.translate(c[0],.912,c[2]),e.add("steel",h)}let u=Math.max(2,Math.round(a/.9)+1);for(let d=0;d<u;d++){let h=u===1?.5:.06+.88*d/(u-1),f=t.x+r*h,p=t.z+o*h;e.add("aluDark",N(Te(.05,.84,.05),[f,.43,p],[0,l,0])),e.add("graphite",N(Te(.16,.02,.16),[f,.01,p],[0,l,0]))}return{len:a,yaw:l,mid:c}}function zx(n){let e=Nt("cell"),t=U2(n);e.add(t.root),e.add(pi(n,2.9,2.9,[Ds.x,0,Ds.z],.6));let i=Ii(Bo,Er),s=Ii($a,Er),r=kx(n,{center:i,side:-1,...qt.lock,hubDoorX:.18}),o=kx(n,{center:s,side:1,...qt.unload,hubDoorX:-.18});e.add(r.root,o.root),e.add(pi(n,1.3,1.3,[i.x,0,i.z],.5)),e.add(pi(n,1.3,1.3,[s.x,0,s.z],.5));let a=Ii(Bo,Ns,Dn),l=Ii($a,Ns,Dn),c=Qd(n);c.root.position.set(a.x,0,a.z);let u=Qd(n);u.root.position.set(l.x,0,l.z),e.add(c.root,u.root);let d=new ft,h=new C(-1.83,0,Ls),f=new C(i.x-.42,0,Ls),p=new C(s.x+.42,0,Ls),g=new C(7.18,0,Ls);Fx(n,d,h,f),Fx(n,d,p,g);let m=(M,w)=>{let v=w.x-M.x,S=w.z-M.z,D=Math.hypot(v,S);d.add("aluDark",N(Le(D,.02,.2,.006),[(M.x+w.x)/2,.892,(M.z+w.z)/2],[0,Math.atan2(-S,v),0]))};m(new C(i.x+.18,0,i.z-.44),new C(a.x-.06,0,a.z+.1)),m(new C(s.x-.18,0,s.z-.44),new C(l.x+.06,0,l.z+.1)),e.add(d.build(n,{name:"tracks"}));let x=$t(5078015,1.2),_=[];for(let[M,w]of[[h,f],[p,g]]){let v=w.x-M.x;_.push(N(Te(v,.008,.008),[(M.x+w.x)/2,.858,Ls+.185]))}e.add(new ft().add("led",_).build({led:x},{name:"track-led",castShadow:!1})),e.add(pi(n,f.x-h.x+.4,.7,[(h.x+f.x)/2,0,Ls],.4)),e.add(pi(n,g.x-p.x+.4,.7,[(p.x+g.x)/2,0,Ls],.4));let b=new Dt({visible:!1}),y=(M,w)=>{let v=new et(new tn(.9,1.25,.9),b);return v.position.set(w.x,.62,w.z),v.userData.hoverId=M,e.add(v),{id:M,object:v}};return{root:e,robot:t,lock:r,unload:o,pedestals:{lock:c,out:u},points:{dispenser:new C(-1.95,Dn,Ls),lockCenter:new C(i.x,Dn,i.z),lockPort:a,outPort:l,outCenter:new C(s.x,Dn,s.z),trackEnd:new C(g.x-.08,Dn,Ls)},trackLed:x,hover:[{id:"robot",object:t.root},y("lock",i),y("unload",s)],anchors:{robot:new C(Ds.x,1.4,Ds.z),lock:new C(i.x,1.45,i.z),unload:new C(s.x,1.45,s.z)}}}var Rp=n=>(200-n*24.4)*Js,nn=Er-Ns,gt=.89,Ep={archive:"#4d6bfe",engraver:"#ff7a1f",terminal:"#2fbf71",satellite:"#7c5cff",robot:"#4d6bfe",press:"#e5484d",kanban:"#2f9e6b",beacon:"#f5a524",labeler:"#d4a72c",generic:"#3fb8d9"},fc=(n,e=.6)=>new Dt({color:n,transparent:!0,opacity:e,blending:Nn,depthWrite:!1});function B2(n,e,t,i=8){let s=new C(n[0],n[1],n[2]),r=new C(e[0],e[1],e[2]),o=ce(t,t,s.distanceTo(r),i);return o.applyQuaternion(new mn().setFromUnitVectors(new C(0,1,0),r.clone().sub(s).normalize())),o.translate((s.x+r.x)/2,(s.y+r.y)/2,(s.z+r.z)/2),o}function Cp(n,e=1.36){n.add("aluDark",N(Te(.06,e,.07),[.4,e/2,nn])),n.add("graphite",N(Te(.16,.03,.16),[.4,.015,nn])),n.add("aluDark",N(Te(.48,.06,.08),[.16,e,nn])),n.add("chrome",N(Te(.4,.01,.01),[.17,e-.035,nn+.03]))}function z2(){return It(256,168,(n,e,t)=>{n.fillStyle="#9aa1ab",n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,0.08)";for(let i=0;i<t;i+=3)n.fillRect(0,i,e,1);n.fillStyle="#e8e3d3",n.fillRect(e*.3,t*.18,e*.4,t*.26),n.strokeStyle="#3b4048",n.lineWidth=3,n.strokeRect(e*.3,t*.18,e*.4,t*.26),n.fillStyle="#33373e",n.font=`700 22px ${bt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("A-•••",e/2,t*.31),n.fillStyle="#2b2f35",n.fillRect(e*.32,t*.62,e*.36,t*.12),n.fillStyle="#c9ced6",n.fillRect(e*.32,t*.62,e*.36,t*.04)})}function H2(){return It(512,160,(n,e,t)=>{n.fillStyle="#15171b",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++){let r=10+s*35.5+i%2*8;r>e-40||(n.fillStyle=i===3&&s>3&&s<10?"#2c3038":"#2a2e35",n.fillRect(r,10+i*37,30,30),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(r,10+i*37,30,4))}})}function G2(n,e,t){t.add("graphite",N(Le(.88,.8,.42,.02),[0,gt+.4,-.33])),t.add("aluDark",N(Le(.9,.03,.44,.01),[0,gt+.815,-.33]));let i=z2().tex,s=new qn(Le(.26,.17,.3,.008),new wt({map:i,metalness:.7,roughness:.38}),12);s.castShadow=!0,e.add(s);let r=[];for(let g=0;g<4;g++)for(let m=0;m<3;m++)r.push({x:(m-1)*.28,y:gt+.13+g*.19,out:0,until:0});t.add("aluDark",N(Te(.06,.46,.06),[0,gt+.23,.16])),t.add("aluDark",N(Te(.07,.06,.88),[0,gt+.46,.56]));let o=Nt("scan-head",[0,gt+.4,nn]);e.add(o),o.add(new ft().add("graphite",N(Le(.38,.07,.09,.012),[0,-.035,0])).add("chrome",N(Te(.06,.03,.05),[0,.02,0])).build(n,{name:"scan-head"}));let a=$t(7314431,.6);o.add(nt(Te(.34,.006,.012),a,[0,-.072,0],null,null,{cast:!1}));let l=gt+.4-.075-(Dn+.004),c=fc(6130687,0),u=nt(new yt(.34,l),c,[0,-.075-l/2,0],null,null,{cast:!1,receive:!1});o.add(u);let d=fc(10469631,0),h=nt(Te(.3,.001,.008),d,[0,Dn+.006-(gt+.4),0],null,null,{cast:!1,receive:!1});o.add(h);let f=new _t,p=0;return{update(g,m,x){let _=x.work;if(o.position.z=nn+Math.sin(m*2.6)*.17*_,c.opacity=.16*_,d.opacity=.9*_,a.emissiveIntensity=.6+3*_,x.working&&m>p){p=m+.25+Math.random()*.3;let b=r[Math.floor(Math.random()*r.length)];b.until=m+.5+Math.random()*.5}for(let b=0;b<r.length;b++){let y=r[b];y.out=Zt(y.out,m<y.until?.16:0,9,g),f.makeTranslation(y.x,y.y,-.12-.15+.015+y.out),s.setMatrixAt(b,f)}s.instanceMatrix.needsUpdate=!0}}}function V2(n,e,t,i){t.add("graphite",N(Le(.8,.34,.44,.02),[0,gt+.17,-.32]));for(let p=0;p<9;p++)t.add("alu",N(Te(.012,.1,.38),[-.32+p*.08,gt+.39,-.32]));t.add("rubber",fi([[.3,gt+.2,-.09],[.3,gt+.32,.12],[.37,1.5,nn-.08]],.018,.12,8));for(let p of[-.37,.37])t.add("aluDark",N(Te(.07,1.44,.09),[p,.72,nn])),t.add("graphite",N(Te(.16,.03,.18),[p,.015,nn]));t.add("aluDark",N(Te(.84,.09,.11),[0,1.44,nn])),t.add("chrome",N(Te(.76,.016,.016),[0,1.44,nn+.062])),t.add("hazard",N(Te(.84,.02,.112),[0,1.494,nn]));let s=zi({color:14673648,opacity:.1,fresnel:.45,side:jt,emissive:16742943,emissiveIntensity:.06});for(let p of[-.335,.335])e.add(nt(new yt(.5,.42),s,[p,1.17,nn],[0,Math.PI/2,0],null,{cast:!1,receive:!1}));let r=Nt("laser-head",[0,1.44,nn]);e.add(r);let o=new ft;o.add("chrome",N(Le(.13,.13,.03,.008),[0,0,.075])),o.add("graphite",N(Le(.1,.17,.1,.01),[0,-.12,0])),o.add("steel",N(ce(.026,.02,.07,20),[0,-.24,0])),o.add("orange",N(Te(.1,.012,.102),[0,-.06,0])),r.add(o.build(n,{name:"laser-head"}));let l=1.44-.275-(Dn+.004),c=fc(12101375,0),u=nt(ce(.0035,.0035,l,8,!0),c,[0,-.275-l/2,0],null,null,{cast:!1,receive:!1});r.add(u);let d=new pr(new Vs({map:n.shadow.map,color:16765600,transparent:!0,opacity:0,blending:Nn,depthWrite:!1}));d.scale.setScalar(.08),d.position.set(0,Dn+.008-1.44,0),r.add(d);let h=new C,f=0;return{update(p,g,m){let x=m.work;r.position.x=Math.sin(g*5.3)*.1*x,r.position.z=nn+Math.sin(g*3.1+1)*.06*x;let _=m.working&&m.wafer?1:0;if(c.opacity=Zt(c.opacity,_*(.75+.25*Math.sin(g*60)),20,p),d.material.opacity=c.opacity,s.emissiveIntensity=.06+c.opacity*.5,_)for(f+=p*40,d.getWorldPosition(h);f>1;)f-=1,i.sparks(h,1)}}}function W2(n,e,t){t.add("graphite",N(Le(.24,.012,.16,.006),[-.12,gt+.006,-.36])),t.add("graphite",N(Te(.05,.16,.03),[-.12,gt+.09,-.38])),t.add("white",N(Le(.56,.36,.034,.012),[-.12,gt+.33,-.36])),t.add("visor",N(Te(.52,.32,.006),[-.12,gt+.33,-.3405]));let i=yx();e.add(nt(new yt(.48,.29),Ha(i.tex,1.5),[-.12,gt+.33,-.337],null,null,{cast:!1})),t.add("plastic",N(Le(.46,.03,.16,.008),[-.1,gt+.015,.1])),e.add(nt(new yt(.44,.14),Jn(H2().tex,.1),[-.1,gt+.031,.1],[-Math.PI/2,0,0],null,{cast:!1})),Cp(t),t.add("steel",N(ce(.04,.04,.14,20),[0,1.26,nn]));let s=Nt("probe",[0,1.1,nn]);e.add(s),s.add(new ft().add("chrome",N(ce(.015,.015,.3,12),[0,.15,0])).add("graphite",N(ce(.13,.13,.018,48),[0,.009,0])).add("gold",N(ce(.06,.06,.004,32),[0,-.002,0])).build(n,{name:"probe"}));let r=$t(4063119,.2);s.add(nt(Jt(.11,.004,6,48),r,[0,-.002,0],[Math.PI/2,0,0],null,{cast:!1}));let o=0;return{onStart(a){i.push(a.label||a.name)},onEnd(a,l){i.line(l?"  OK  done":"  ERR failed")},update(a,l,c){s.position.y=Zt(s.position.y,c.working&&c.wafer?Dn+.016:1.1,6,a),r.emissiveIntensity=c.work*(1.5+Math.sin(l*14)*1.2)+.2,o+=a,o>.5&&(o=0,i.blink(Math.floor(l*2)%2===0))}}}function X2(n,e,t){t.add("graphite",N(ce(.13,.15,.08,40),[0,gt+.04,-.3]));let i=Nt("pan",[0,gt+.08,-.3]);e.add(i);let s=new ft;s.add("white",N(ce(.05,.06,.3,24),[0,.15,0])),s.add("aluDark",N(Te(.26,.04,.08),[0,.3,0]));for(let m of[-.12,.12])s.add("aluDark",N(Te(.03,.14,.07),[m,.36,0]));i.add(s.build(n,{name:"pan"}));let r=Nt("tilt",[0,.4,0],[-.62,0,0]);i.add(r);let o=n.white.clone();o.side=jt;let a=[];for(let m=0;m<=12;m++){let x=.03+.39*(m/12);a.push([x,x*x/1.2])}let l=new ft;l.add("dish",hi(a,64)),l.add("chrome",N(Jt(.42,.008,8,72),[0,.147,0],[Math.PI/2,0,0])),l.add("aluDark",N(ce(.07,.09,.06,24),[0,-.01,0]));for(let m=0;m<3;m++){let x=m/3*Ut+Math.PI/6;l.add("aluDark",B2([Math.cos(x)*.4,.135,Math.sin(x)*.4],[0,.3,0],.006))}l.add("graphite",N(new Ws(.035,.07,18),[0,.32,0],[Math.PI,0,0])),l.add("white",N(ce(.03,.03,.05,18),[0,.37,0]));let c=Nt("dish",[0,.07,0]);r.add(c),r.add(new ft().add("aluDark",N(ce(.05,.05,.08,20),[0,.03,0]),N(ce(.02,.02,.28,12),[0,0,0],[0,0,Math.PI/2])).build(n,{name:"tilt-axle"})),c.add(l.build({...n,dish:o},{name:"dish"}));let u=$t(10849535,.3);c.add(nt(Tp(.012),u,[0,.4,0],null,null,{cast:!1}));let d=Array.from({length:3},(m,x)=>{let _=fc(10127103,0),b=nt(Jt(.05,.004,6,40),_,[0,.42,0],[Math.PI/2,0,0],null,{cast:!1,receive:!1});return c.add(b),{r:b,mat:_,age:x/3}});Cp(t),t.add("graphite",N(Le(.12,.08,.12,.012),[0,1.29,nn])),t.add("white",N(ce(.004,.004,.18,6),[.03,1.42,nn]));let h=$t(10849535,.2);e.add(nt(Tp(.012),h,[.03,1.515,nn],null,null,{cast:!1}));let f=0,p=0,g=0;return{update(m,x,_){_.working&&x>g&&(g=x+1.2+Math.random()*1.5,p=(Math.random()-.5)*1.6),_.working||(p=0),f=Zt(f,p,1.6,m),i.rotation.y=f,r.rotation.x=-.62+Math.sin(x*.7)*.05*_.work,u.emissiveIntensity=.3+_.work*3,h.emissiveIntensity=_.work*(Math.sin(x*10)>0?4:.4)+.2;for(let b of d){b.age+=m*.8,b.age>1&&(b.age-=1);let y=b.age;b.r.position.y=.42+y*.9,b.r.scale.setScalar(1+y*6),b.mat.opacity=_.work*(1-y)*.8}}}}var Tp=n=>new Gn(n,16,10);function $2(n,e,t){t.add("graphite",N(Le(.5,.32,.34,.02),[.18,gt+.16,-.36])),t.add("aluDark",N(Le(.12,.18,.03,.01),[-.27,gt+.2,-.36]));let i=$t(5078015,.5);e.add(nt(Te(.3,.02,.005),i,[.18,gt+.25,-.188],null,null,{cast:!1}));let s=[-.05,gt,.12],r=.38,o=.36,a=.1;t.add("graphite",N(ce(.09,.095,.04,32),[s[0],gt+.02,s[2]]));let l=Nt("j0",[s[0],gt+.04,s[2]]);e.add(l),l.add(new ft().add("white",N(ce(.07,.075,.13,32),[0,.065,0])).add("graphite",N(ce(.062,.062,.16,32),[0,.16,0],[0,0,Math.PI/2])).build(n,{name:"j0"}));let c=Nt("j1",[0,.16,0]);l.add(c),c.add(new ft().add("white",N(Le(.095,r,.095,.04),[0,r/2,0])).add("graphite",N(ce(.055,.055,.14,28),[0,r,0],[0,0,Math.PI/2])).build(n,{name:"link-a"}));let u=Nt("j2",[0,r,0]);c.add(u),u.add(new ft().add("white",N(Le(.078,o,.078,.035),[0,o/2,0])).add("graphite",N(ce(.045,.045,.11,24),[0,o,0],[0,0,Math.PI/2])).build(n,{name:"link-b"}));let d=Nt("j3",[0,o,0]);u.add(d),d.add(new ft().add("graphite",N(ce(.035,.035,.05,24),[0,.025,0])).add("chrome",N(ce(.03,.03,.012,24),[0,.056,0])).add("aluDark",N(Te(.012,.045,.03),[-.02,.08,0]),N(Te(.012,.045,.03),[.02,.08,0])).build(n,{name:"tool"}));let h=$t(5078015,.6);d.add(nt(Jt(.036,.005,6,32),h,[0,.046,0],[Math.PI/2,0,0],null,{cast:!1}));let f=gt+.04+.16,p=new C(0,f+.25,.25),g=new C;function m(x,_,b){let y=x-s[0],M=b-s[2];l.rotation.y=Math.atan2(y,M);let w=Math.hypot(y,M),v=_+a-f,S=st(Math.hypot(w,v),.05,r+o-.001),D=Math.atan2(w,v),T=st((S*S-r*r-o*o)/(2*r*o),-1,1),P=Math.acos(T),k=D-Math.atan2(o*Math.sin(P),r+o*Math.cos(P));c.rotation.x=k,u.rotation.x=P,d.rotation.x=Math.PI-k-P}return m(p.x,p.y,p.z),{update(x,_,b){b.working&&b.wafer?g.set(.08*Math.cos(_*1.7),Dn+.03+.06*Math.max(0,Math.sin(_*3.4)),nn-.04+.07*Math.sin(_*2.3)):b.working?g.set(.05*Math.sin(_*1.3),f+.12,nn-.3):g.set(-.05+.04*Math.sin(_*.6),f+.22,.32),p.x=Zt(p.x,g.x,4,x),p.y=Zt(p.y,g.y,4,x),p.z=Zt(p.z,g.z,4,x),m(p.x,p.y,p.z),h.emissiveIntensity=.6+b.work*2.6,i.emissiveIntensity=.5+b.work*(1+Math.sin(_*8))}}}function Ap(n){return n<.22?sp(n/.22):n<.42?1:1-sp((n-.42)/.58)}function q2(n,e,t){t.add("graphite",N(Le(.6,.28,.3,.02),[.14,gt+.14,-.38])),t.add("white",N(ce(.08,.08,.3,28),[.14,gt+.36,-.38],[0,0,Math.PI/2])),t.add("steel",N(ce(.06,.06,.24,24),[-.3,gt+.12,-.4])),t.add("blue",N(Le(.3,.86,.26,.03),[0,gt+.43,.02])),t.add("blue",N(Le(.32,.2,.92,.03),[0,1.66,.48])),t.add("hazard",N(Te(.322,.04,.01),[0,1.6,.942])),t.add("steel",N(ce(.085,.085,.22,32),[0,1.45,nn])),t.add("chrome",N(Jt(.086,.008,8,32),[0,1.34,nn],[Math.PI/2,0,0])),t.add("rubber",fi([[.06,1.5,nn-.06],[.2,1.5,nn-.3],[.2,1.2,.2],[.2,gt+.3,-.2]],.016,.1,8)),t.add("rubber",fi([[-.06,1.42,nn-.06],[-.2,1.42,nn-.3],[-.2,1.1,.2],[-.2,gt+.28,-.22]],.016,.1,8));let i=Nt("ram",[0,1.12,nn]);e.add(i),i.add(new ft().add("chrome",N(ce(.035,.035,.42,20),[0,.21,0])).add("steel",N(Le(.32,.05,.32,.012),[0,0,0])).add("darkSteel",N(ce(.12,.12,.012,40),[0,-.031,0])).add("chrome",...[-.12,.12].map(l=>N(ce(.012,.012,.5,12),[l,.25,0]))).build(n,{name:"ram"}));let s=mx({title:"压力",sub:"BAR",labels:["0","50","100","150","200"],redFrom:.85});e.add(nt(new Hn(.07,40),new wt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.3}),[0,1.45,.152],null,null,{cast:!1}));let r=nt(Te(.006,.055,.003).translate(0,.024,0),n.orange,[0,1.45,.156],null,null,{cast:!1});e.add(r),e.add(nt(Jt(.072,.006,8,40),n.chrome,[0,1.45,.153],null,null,{cast:!1}));let o=0,a=0;return{update(l,c,u){u.working&&u.wafer?o=(o+l/1.3)%1:o=o>0&&o<.999?Math.min(.999,o+l/1.3):0;let d=u.working&&u.wafer||o>0?Ap(o):0;i.position.y=1.12-.155*d,a=Zt(a,.1+.75*d,6,l),r.rotation.z=(135-270*a)*Js}}}function Y2(n,e,t){for(let d of[-.42,.42])t.add("aluDark",N(Te(.035,.66,.035),[d,gt+.33,-.33]));t.add("alu",N(Le(.86,.66,.03,.012),[0,1.5,-.33])),t.add("alu",N(Te(.6,.03,.06),[0,1.16,-.3])),t.add("blue",N(ce(.008,.008,.12,10),[-.1,1.185,-.29],[0,0,Math.PI/2])),t.add("orange",N(ce(.008,.008,.12,10),[.1,1.185,-.29],[0,0,Math.PI/2]));let i=_x();e.add(nt(new yt(.8,.6),new wt({map:i.tex,roughness:.35,metalness:0}),[0,1.5,-.313],null,null,{cast:!1}));let s=[16111470,9417471,16230584,10477749,16111470,13219583,9417471],r=Le(.11,.075,.008,.004),o=s.map(d=>{let h=nt(r,new wt({color:d,roughness:.6}),[0,1.5,-.306],null,null,{cast:!1});return e.add(h),h}),a=[[0,1,2],[3],[4,5,6]],l=(d,h)=>[(d-1)*.267,1.656-h*.09],c=d=>{a.forEach((h,f)=>h.forEach((p,g)=>{let[m,x]=l(f,g),_=o[p];_.userData.tx=m,_.userData.ty=x,d&&_.position.set(m,x,-.306)}))};c(!0);let u=(d,h)=>{a[d].length&&a[h].push(a[d].shift())};return{onStart(){a[0].length||u(2,0),u(0,1),c()},onEnd(){for(u(1,2);a[2].length>4;)u(2,0);c()},update(d){for(let h of o)h.position.x=Zt(h.position.x,h.userData.tx,7,d),h.position.y=Zt(h.position.y,h.userData.ty,7,d),h.position.z=-.306+Math.min(.03,Math.abs(h.position.x-h.userData.tx)*.3)}}}function K2(n,e,t){t.add("graphite",N(ce(.07,.08,.04,28),[.3,gt+.02,-.35])),t.add("alu",N(ce(.028,.028,1,16),[.3,gt+.5,-.35])),t.add("graphite",N(ce(.09,.1,.06,32),[.3,gt+1.03,-.35]));let r=zi({color:16771012,opacity:.14,fresnel:.5,emissive:16751150,emissiveIntensity:.1});e.add(nt(ce(.08,.08,.13,32,!0),r,[.3,gt+1.125,-.35],null,null,{cast:!1})),e.add(nt(new Gn(.08,32,12,0,Ut,0,Math.PI/2),r,[.3,gt+1.19,-.35],null,null,{cast:!1}));let o=Nt("spin",[.3,gt+1.12,-.35]);e.add(o),o.add(nt(new Fn(.05,.05,.1,24,1,!0,0,Math.PI),n.chrome,[0,0,0],null,null,{cast:!1}));let a=$t(16756782,.2);e.add(nt(Tp(.022),a,[.3,gt+1.12,-.35],null,null,{cast:!1}));let l=fc(16753978,0),c=new Ws(.3,1.1,24,1,!0);c.translate(0,-.55,0),c.rotateX(-Math.PI/2),o.add(nt(c,l,[0,0,0],[0,0,0],null,{cast:!1,receive:!1})),t.add("callbox",N(Le(.36,.28,.12,.02),[-.2,gt+.14,.04])),t.add("orange",N(Te(.3,.008,.004),[-.2,gt+.255,.101])),t.add("grille",N(new yt(.12,.12),[-.28,gt+.15,.101])),t.add("steel",N(ce(.045,.045,.02,28),[-.1,gt+.15,.11],[Math.PI/2,0,0]));let u=$t(3461498,.3);return e.add(nt(new Gn(.038,24,10,0,Ut,0,Math.PI/2),u,[-.1,gt+.15,.12],[Math.PI/2,0,0],null,{cast:!1})),t.extra={callbox:n.white},{update(d,h,f){let p=f.work;o.rotation.y+=d*(.4+7*p);let g=.6+.4*Math.sin(h*9);a.emissiveIntensity=.2+p*6*g,r.emissiveIntensity=.1+p*1.8*g,l.opacity=p*.16,u.emissiveIntensity=.3+p*3*(Math.sin(h*5)>0?1:.2)}}}function Z2(n,e,t){t.add("aluDark",N(Le(.72,.62,.04,.012),[0,gt+.31,-.4])),t.add("graphite",N(Le(.72,.06,.3,.012),[0,gt+.03,-.3]));let i=Nt("unwind",[-.16,gt+.4,-.31],[Math.PI/2,0,0]),s=Nt("rewind",[.2,gt+.18,-.31],[Math.PI/2,0,0]);e.add(i,s);let r=It(256,32,(c,u,d)=>{c.fillStyle="#f3efe4",c.fillRect(0,0,u,d),c.fillStyle="#d9b14a";for(let h=0;h<u;h+=32)c.fillRect(h+4,4,24,d-8)},{repeat:[3,1]}).tex,o=new wt({map:r,roughness:.7});i.add(new ft().add("roll",ce(.15,.15,.1,48)).add("gold",ce(.05,.05,.11,24)).add("chrome",ce(.018,.018,.16,12)).build({...n,roll:o},{name:"unwind"})),s.add(new ft().add("ceramic",ce(.075,.075,.1,40)).add("gold",ce(.035,.035,.11,20)).add("chrome",ce(.015,.015,.16,12)).build(n,{name:"rewind"}));for(let[c,u]of[[.02,gt+.52],[.05,gt+.3],[.28,gt+.42]])t.add("chrome",N(ce(.016,.016,.12,14),[c,u,-.31],[Math.PI/2,0,0]));Cp(t),t.add("steel",N(ce(.042,.042,.18,22),[0,1.24,nn])),t.add("chrome",N(Jt(.043,.006,6,24),[0,1.16,nn],[Math.PI/2,0,0]));let a=Nt("tamp",[0,1.08,nn]);e.add(a),a.add(new ft().add("chrome",N(ce(.016,.016,.3,12),[0,.15,0])).add("graphite",N(Le(.16,.025,.12,.006),[0,0,0])).add("gold",N(Te(.12,.003,.08),[0,-.014,0])).build(n,{name:"tamp"}));let l=0;return{update(c,u,d){let h=d.working&&d.wafer;(h||l>0)&&(l=(l+c/1.1)%1),!h&&l>.97&&(l=0);let f=l?Ap(l):0;a.position.y=1.08-(1.08-(Dn+.03))*f,i.rotation.y-=c*d.work*1.4,s.rotation.y-=c*d.work*2.8}}}function J2(n,e,t){t.add("graphite",N(Le(.62,.86,.44,.02),[0,gt+.43,-.32]));for(let d of[-.3,.3])t.add("chrome",N(Te(.016,.84,.01),[d,gt+.43,-.096]));let i=8;for(let d=0;d<i;d++)t.add("darkSteel",N(Le(.56,.085,.02,.006),[0,gt+.07+d*.1,-.095]));t.add("grille",N(new yt(.36,.5),[.311,gt+.45,-.32],[0,Math.PI/2,0]));let s=6,r=new qn(Te(.014,.01,.004),new Dt({color:16777215}),i*s),o=new _t,a=[],l=[new ke(3461498),new ke(3461498),new ke(5078015),new ke(16753183)];for(let d=0;d<i;d++)for(let h=0;h<s;h++){o.makeTranslation(.12+h*.026,gt+.07+d*.1,-.083),r.setMatrixAt(d*s+h,o);let f=l[(d*7+h*3)%l.length].clone();a.push(f),r.setColorAt(d*s+h,f)}e.add(r);let c=new ke,u=0;return{update(d,h,f){if(u+=d,!(u<.08)){u=0;for(let p=0;p<a.length;p++){let g=f.working?Math.random()>.45:(p+Math.floor(h*.7))%9===0;c.copy(a[p]).multiplyScalar(g?3.2:.25),r.setColorAt(p,c)}r.instanceColor.needsUpdate=!0}}}}var j2={archive:G2,engraver:V2,terminal:W2,satellite:X2,robot:$2,press:q2,kanban:Y2,beacon:K2,labeler:Z2,generic:J2};function Q2(n,e){let t=$t(Ep[e],1.1);return{...n,blue:n.white,ceramic:n.white,orange:t,hazard:t,rubber:n.graphite,darkSteel:n.graphite,aluDark:n.graphite,steel:n.graphite,plastic:n.graphite,visor:n.plastic,seam:$t(Ep[e],1.8)}}var eh=[384,144],Vx=.66,eT=Vx*eh[1]/eh[0],Hx=2.3,Wx=8,Gx={idle:["待机","IDLE","#7fe0a8"],working:["运行","RUN","#8fb4ff"],error:["故障","FAULT","#ff8a80"]},tT={ok:"#34d17a",error:"#ff5a4f",running:"#6f9bff"};function nT(n,e,t,i,s,r){n.clearRect(0,0,e,t),n.fillStyle="rgba(5, 12, 24, 0.84)",ji(n,3,3,e-6,t-6,16),n.fill(),n.lineWidth=2,n.strokeStyle=s,n.globalAlpha=.75,n.stroke(),n.globalAlpha=1,n.fillStyle=s,ji(n,16,22,5,t-44,2.5),n.fill(),n.textBaseline="middle";let[o,a,l]=Gx[r.status]||Gx.idle;n.font=`700 19px ${bt}`;let c=`${o} ${a}`,u=n.measureText(c).width+22,d=e-18-u;n.fillStyle=l,n.globalAlpha=.16,ji(n,d,19,u,30,15),n.fill(),n.globalAlpha=1,n.fillText(c,d+11,35),n.fillStyle=s,n.font=`700 25px ${bt}`,n.fillText(i.code,32,35);let h=32+n.measureText(i.code).width+12;n.fillStyle="#eef3fd",Qi(n,i.zh,d-h-10,25,600,Rt),n.fillText(i.zh,h,35);let f=r.label||i.en;n.fillStyle=r.label?"#cfe0ff":"#7f8fae",Qi(n,f,e-52,27,r.label?600:500,Rt),n.fillText(f,32,76);for(let p=0;p<Wx;p++){let g=p<r.history.length?r.history[p]:null;n.fillStyle=g?tT[g]||"#8a94a8":"rgba(150, 170, 210, 0.18)",ji(n,32+p*24,106,18,14,3),n.fill()}n.fillStyle="#9fb0cf",n.font=`600 19px ${bt}`,n.textAlign="right",n.fillText(`CALLS ${r.count}`,e-20,113),n.textAlign="left"}function iT(n,e,t,i){let s=_i[e],r=Ep[e],o=Rp(t),a=Ii(o,Er),l=Nt(`station-${e}`,[a.x,0,a.z],[0,Ux(o),0]);l.userData.solid=`station:${e}`;let c=Q2(n,e),u=new ft;u.add("graphite",N(Le(.9,.07,.7,.02),[0,.035,-.15])),u.add("white",N(Le(1,.8,.8,.05),[0,.47,-.15])),u.add("graphite",N(Le(1.03,.026,.83,.012),[0,.877,-.15]));for(let[I,V,ne,te]of[[.86,.006,0,.2],[.86,.006,0,-.5],[.006,.66,.45,-.15],[.006,.66,-.45,-.15]])u.add("seam",N(Te(I,.012,V),[ne,.05,te]));u.add("visor",N(Le(.9,.21,.014,.006),[0,.62,.252]));let d=j2[e](c,l,u,i);l.add(u.build({...c,...u.extra||{}},{name:`station-${e}`}));let h=es(s.zh,s.en,s.code,r);l.add(nt(new yt(.46,.13),Jn(h.tex,.35),[-.19,.62,.2605],null,null,{cast:!1}));let f=$t(8380584,.6);l.add(nt(Te(.2,.03,.006),f,[.29,.62,.2605],null,null,{cast:!1}));let p=$t(5078015,.4);l.add(nt(Te(.92,.012,.008),p,[0,.83,.254],null,null,{cast:!1}));let g=It(eh[0],eh[1],null),m=new Dt({map:g.tex,transparent:!0,depthWrite:!1,side:jt,color:new ke().setScalar(1.2)}),x=nt(new yt(Vx,eT),m,[0,Hx,-.1],null,null,{cast:!1,receive:!1});x.name=`holo-${e}`,x.renderOrder=3,x.userData.noSolid=!0,l.add(x);let _=Qd(c);_.root.position.set(0,0,nn),l.add(_.root),l.add(pi(n,1.25,1,[0,0,-.12],.55));let b=new Dt({visible:!1}),y=new et(new tn(1.1,2,1.5),b);y.position.set(0,1,.1),l.add(y);let M={work:0,flash:0,flashOk:!0,label:"",status:"idle",count:0,history:[],sig:""},w=new ke,v=new ke(5078015),S=new ke(3461498),D=new ke(16726832),T=Ii(o,Ns+.05,Dn+.08),P=Ii(o,Er,0),k=parseInt(r.slice(1),16);function z(){let I=`${M.status}|${M.label}|${M.count}|${M.history.join(",")}`;I!==M.sig&&(M.sig=I,g.redraw((V,ne,te)=>nT(V,ne,te,s,r,M)))}return z(),{kind:e,index:t,theta:o,root:l,accent:r,holo:x,port:Ii(o,Ns,Dn),anchor:Ii(o,Er+.1,Hx+.42),hover:[{id:`station:${e}`,object:y}],setLabel(I){M.label=I||"",z()},setStats(I,V){M.count=I,M.history=V,z()},face(I){x.lookAt(I.position)},status:()=>M.status,readout:()=>({status:M.status,label:M.label,count:M.count,history:M.history.slice()}),onStart(I){M.label=I.label||I.name,d.onStart?.(I),z()},onEnd(I,V){M.flash=V?.9:2.2,M.flashOk=V,V||i.puff(T,10),i.ripple?.(P,V?k:16734799,{from:.55,to:1.45,gain:V?.9:1.2}),d.onEnd?.(I,V)},update(I,V,ne){M.work=Zt(M.work,ne.working?1:0,3,I),M.flash=Math.max(0,M.flash-I);let te=M.flash>0&&!M.flashOk;M.status=ne.working?"working":te?"error":"idle",z(),d.update(I,V,{working:ne.working,wafer:ne.wafer,work:M.work});let ie;M.flash>0?(w.copy(M.flashOk?S:D),ie=3.2*(M.flashOk?Math.min(1,M.flash*2):Math.sin(V*14)>0?1:.25)):(w.copy(v),ie=.25+M.work*(2.2+Math.sin(V*6)*.6)),_.led.emissive.copy(w),_.led.emissiveIntensity=ie,p.emissive.copy(w),p.emissiveIntensity=.25+ie*.6,f.emissive.copy(te?D:ne.working?v:S),f.emissiveIntensity=te?Math.sin(V*12)>0?3.5:.3:ne.working?1.2+M.work*2.2:.7}}}function Xx(n,e){let t=Nt("stations"),i=Zd.map((o,a)=>iT(n,o,a,e));for(let o of i)t.add(o.root);let s=Object.fromEntries(i.map(o=>[o.kind,o])),r={};return{root:t,list:i,byKind:s,setStats(o){for(let a in r)r[a].length=0;if(o)for(let a of o.calls)(r[a.kind]||(r[a.kind]=[])).push(a.status);for(let a of i){let l=r[a.kind]||[];a.setStats(o&&o.tools.byKind[a.kind]||0,l.slice(-Wx))}},face(o){for(let a of i)a.face(o)}}}var Pp=n=>es(qt[n].zh,qt[n].en,qt[n].code),bi=new C(7.45,0,Ls),js=.83,Dp=13,ro=.4,Gi=.36,Os=.4,Np=.02,Op=.062,kp=.02,Fp=[8.2,8.75,9.3],Up=[-.1,.45,1],hs=.55,ts=2.45,th=Gi+.046,Ip=1.9,sT=1.3,Ho=9,$x=n=>((n-1)%Ho+Ho)%Ho,Lp=(n,e=new C)=>e.set(Fp[n%3],hs,Up[Math.floor(n/3)]),qx={running:{zh:"进行中",en:"RUN",color:"#3a6cff"},ok:{zh:"合格",en:"PASS",color:"#1d9a52"},rework:{zh:"返工",en:"REWORK",color:"#d63b3b"}},nh=n=>n?typeof n.fileCount=="number"?n.fileCount:n.files?n.files.length:0:0;function rT(n,e,t,i){let s=i.info,r=s?qx[s.status]||qx.running:null;n.fillStyle="#ece9df",n.fillRect(0,0,e,t),n.fillStyle=r?r.color:"#8a8f98",n.fillRect(0,0,16,t),n.textBaseline="middle",n.fillStyle="#15171b",n.font=`700 46px ${Rt}`,n.textAlign="left",n.fillText(i.no?`T${i.no}`:"— —",30,t*.3),n.textAlign="right",n.font=`700 28px ${Rt}`,n.fillStyle=r?r.color:"#6b7078",n.fillText(r?`${r.zh} ${r.en}`:"空载 EMPTY",e-14,t*.3),n.textAlign="left",n.font=`600 19px ${bt}`,n.fillStyle="#3a3d44";let o=s&&s.calls||0;n.fillText(`CALLS ${o} · FILES ${nh(s)}`,30,t*.64),n.fillStyle="#15171b";let a=30,l=(i.no||7)*2654435761;for(let c=0;a<e-16;c++){let u=1+((l>>>c%24^c)&3);c%2===0&&n.fillRect(a,t*.8,u,t*.13),a+=u+1}}function oT(n){let e=new ft,t=.03+(Gi-.03)/2,i=Gi-.03,s=-ro/2+.008;e.add("graphite",N(Le(ro,.03,Os,.008),[0,.015,0])),e.add("graphite",N(Te(.016,.022,Os),[s,Gi-.011,0]),N(Te(.016,i,.02),[s,t,Os/2-.01]),N(Te(.016,i,.02),[s,t,-Os/2+.01])),e.add("graphite",N(Te(.06,.026,.06),[0,Gi+.013,0]),N(Le(.17,.02,.17,.006),[0,Gi+.036,0]));for(let l=0;l<Dp;l++){let c=Op+l*kp-.005;for(let u of[-1,1])e.add("plastic",N(Te(.3,.004,.05),[Np,c,u*.165]))}let r=new ft().add("smoke",N(Te(ro-.016,i,.01),[.008,t,Os/2-.005]),N(Te(ro-.016,i,.01),[.008,t,-Os/2+.005]),N(Te(.01,i,Os-.02),[ro/2-.005,t,0]),N(Te(ro-.016,.01,Os-.02),[.008,Gi-.005,0])),o=new Kt;o.add(e.build(n,{name:"foup-frame"})),o.add(r.build(n,{name:"foup-shell",castShadow:!1}));let a=new ft().add("white",N(Le(.02,Gi-.045,Os-.03,.006),[0,0,0])).add("graphite",N(ce(.016,.016,.006,16),[-.012,0,.1],[0,0,Math.PI/2]),N(ce(.016,.016,.006,16),[-.012,0,-.1],[0,0,Math.PI/2])).build(n,{name:"foup-door"});return{g:o,door:a,doorY:.03+(Gi-.045)/2+.006,doorX:-ro/2-.004}}function Yx(n,e){let t=Nt("stocker"),i=new Dt({visible:!1}),s=new tn(ro+.04,Gi+.08,Os+.04),r=new yt(.28,.1225),o=oT(n),a=Nt("load-port",[bi.x,0,bi.z]);a.userData.solid="load-port",t.add(a);let l=new ft;l.add("white",N(Le(.56,js-.012,.62,.02),[0,(js-.012)/2,0])),l.add("graphite",N(Le(.44,.012,.44,.004),[0,js-.006,0]),N(Te(.58,.06,.64),[0,.03,0]));for(let X=0;X<3;X++){let U=X/3*Math.PI*2+.5;l.add("chrome",N(ce(.008,.012,.012,12),[Math.cos(U)*.13,js+.004,Math.sin(U)*.13]))}l.add("aluDark",N(Te(.04,.22,.04),[.24,js+.11,.27]),N(Te(.08,.03,.05),[.21,js+.22,.27])),a.add(l.build(n,{name:"load-port-body"}));let c=Pp("loadport");a.add(nt(new yt(.44,.124),Jn(c.tex,.35),[0,.6,.311],null,null,{cast:!1}));let u=[3134074,16756768,5078015].map((X,U)=>{let se=$t(X,.15);return a.add(nt(Te(.05,.016,.008),se,[-.12+U*.12,.46,.312],null,null,{cast:!1})),se});a.add(pi(n,.9,.95,[0,0,0],.5));let d=new et(new tn(.62,1.3,.7),i);d.position.set(0,.65,0),a.add(d);let h=new ft,f=(Fp[0]+Fp[2])/2,p=(Up[0]+Up[2])/2;h.add("graphite",N(Te(1.66,hs-.03,1.66),[f,(hs-.03)/2,p])),h.add("white",N(Le(1.76,.03,1.76,.01),[f,hs-.015,p])),h.add("aluDark",N(Te(1.7,.05,1.7),[f,.025,p]));let g=[];for(let X=0;X<Ho;X++){let U=Lp(X);h.add("aluDark",N(Le(.44,.008,.44,.003),[U.x,hs+.002,U.z]));for(let $=0;$<3;$++){let Ce=$/3*Math.PI*2+.5;h.add("chrome",N(ce(.007,.01,.01,10),[U.x+Math.cos(Ce)*.12,hs+.008,U.z+Math.sin(Ce)*.12]))}let se=$t(3134074,0);t.add(nt(Te(.12,.006,.012),se,[U.x,hs+.004,U.z+.235],null,null,{cast:!1})),g.push(se)}t.add(h.build(n,{name:"buffer-table"}));let m=Pp("stocker");t.add(nt(new yt(.62,.175),Jn(m.tex,.35),[f,hs*.55,p+.834],null,null,{cast:!1})),t.add(pi(n,2.3,2.3,[f,0,p],.55));let x=new et(new tn(1.8,hs+.45,1.8),i);x.position.set(f,(hs+.45)/2,p),t.add(x);let _=new ft,b=[7,10],y=[-.45,1.95];for(let X of b){for(let U of y)_.add("white",N(Te(.1,ts+.05,.1),[X,(ts+.05)/2,U])),_.add("graphite",N(Te(.22,.03,.22),[X,.015,U]));_.add("aluDark",N(Te(.09,.09,y[1]-y[0]+.1),[X,ts,(y[0]+y[1])/2]))}for(let X of y)_.add("steel",N(Te(b[1]-b[0]+.1,.09,.09),[(b[0]+b[1])/2,ts,X]));t.add(_.build(n,{name:"gantry"}));let M=Pp("gantry"),w=nt(new yt(.9,.253),Jn(M.tex,.35),[(b[0]+b[1])/2,ts-.2,y[1]+.047],null,null,{cast:!1});t.add(w),t.add(new ft().add("steel",N(Te(.02,.1,.02),[(b[0]+b[1])/2-.35,ts-.06,y[1]+.04]),N(Te(.02,.1,.02),[(b[0]+b[1])/2+.35,ts-.06,y[1]+.04])).build(n,{name:"sign-hangers"}));let v=Nt("bridge");t.add(v),v.add(new ft().add("blue",N(Te(.14,.12,y[1]-y[0]+.12),[0,ts+.105,(y[0]+y[1])/2])).add("graphite",N(Te(.26,.1,.13),[0,ts+.07,y[0]]),N(Te(.26,.1,.13),[0,ts+.07,y[1]])).build(n,{name:"bridge-beam"}));let S=Nt("trolley");v.add(S),S.add(new ft().add("graphite",N(Le(.28,.13,.26,.02),[0,ts-.035,0])).add("steel",N(ce(.045,.045,.2,20),[0,ts-.035,0],[0,0,Math.PI/2])).build(n,{name:"trolley-body"}));let D=ce(.0035,.0035,1,6),T=[[-.07,-.07],[.07,-.07],[-.07,.07],[.07,.07]].map(([X,U])=>{let se=nt(D,n.steel,[X,1,U],null,null,{cast:!1});return S.add(se),se}),P=Nt("gripper");S.add(P),P.add(new ft().add("graphite",N(Le(.24,.05,.24,.012),[0,.03,0])).build(n,{name:"gripper-body"}));let k=[-1,1].map(X=>{let U=nt(Te(.024,.06,.13),n.steel,[X*.115,-.01,0]);return P.add(U),U}),z=$t(5078015,.3);P.add(nt(Te(.1,.008,.01),z,[0,.03,.122],null,null,{cast:!1}));let I={x:bi.x,z:bi.z,hook:Ip,grip:0,carry:null},V=()=>{v.position.x=I.x,S.position.z=I.z,P.position.y=I.hook;let X=ts-.1,U=I.hook+.055,se=Math.max(.01,X-U);for(let Ce of T)Ce.scale.y=se,Ce.position.y=U+se/2;let $=Zi(.115,.079,I.grip);k[0].position.x=-$,k[1].position.x=$,I.carry&&I.carry.g.position.set(I.x,I.hook-th,I.z)},ne=new Set,te=new Array(Ho).fill(null),ie=null;function J(){let X=o.g.clone();X.name="foup";let U=o.door.clone();X.add(U);let se=It(256,112,()=>{}),$=new wt({map:se.tex,roughness:.55,metalness:0,emissive:16777215,emissiveMap:se.tex,emissiveIntensity:.18});X.add(nt(r,$,[.01,Gi-.075,Os/2+.002],null,null,{cast:!1}));let Ce=new et(s,i);Ce.position.set(0,Gi/2+.02,0),X.add(Ce);let Re={no:0,info:null,g:X,door:U,label:se,labelMat:$,labelKey:"",proxy:Ce,slots:[],looks:[],count:0,state:"dock",doorOpen:0,sp:0};return Y(Re),ne.add(Re),t.add(X),Re}function Y(X){let U=`${X.no}|${X.info?`${X.info.status}|${X.info.calls}|${nh(X.info)}`:"-"}|${X.count}`;U!==X.labelKey&&(X.labelKey=U,X.proxy.userData.hoverId=X.no?`foup:${X.no}`:"loadport",X.label.redraw((se,$,Ce)=>rT(se,$,Ce,X)))}function O(X,U){let se=X.count;if(X.count+=1,X.looks.push(U),se<Dp){let $=e.create(U);$.position.set(Np,Op+se*kp,0),X.g.add($),X.slots.push($)}Y(X)}function G(X){ne.delete(X),t.remove(X.g),X.label.tex.dispose(),X.labelMat.dispose();for(let U=0;U<Ho;U++)te[U]===X&&(te[U]=null);ie===X&&(ie=null)}function K(X){let U=X.doorOpen,se=st(U/.25,0,1),$=cs(st((U-.25)/.75,0,1));X.door.position.set(o.doorX-.018*se,o.doorY-.43*$,0)}function q(X=!1){let U=J();return U.g.position.set(bi.x,js,bi.z),U.state=X?"dock":"spawning",U.sp=X?1:0,U.doorOpen=X?1:0,K(U),ie=U,U}function ae(X,U){let se=te[U];se&&se!==X&&G(se),te[U]=X;let $=Lp(U);X.g.position.copy($),X.state="nest",X.doorOpen=0,K(X)}let fe=[],ge=null,oe=X=>({setup:()=>(X(),{d:0,fn:null})}),Pe=(X,U,se=1.6)=>({setup(){let $=I.x,Ce=I.z,Re=Math.hypot(X-$,U-Ce);return{d:Re<.001?0:Math.max(.35,Re/se),fn:H=>(I.x=Zi($,X,H),I.z=Zi(Ce,U,H))}}}),Ye=(X,U)=>({setup(){let se=I.hook;return{d:Math.abs(X-se)<.001?0:U,fn:$=>I.hook=Zi(se,X,$)}}}),Fe=(X,U=.3)=>({setup(){let se=I.grip;return{d:U,fn:$=>I.grip=Zi(se,X,$)}}}),Ze=(X,U,se=.55)=>({setup(){let $=X.doorOpen;return{d:se,fn:Ce=>(X.doorOpen=Zi($,U,Ce),K(X))}}});function $e(X){let U=$x(X.no),se=Lp(U);return{i:0,steps:[oe(()=>X.state="closing"),Ze(X,0),Pe(bi.x,bi.z),Ye(js+th,.6),Fe(1),oe(()=>(I.carry=X,X.state="carried",z.emissiveIntensity=2.2)),Ye(sT+th,.9),oe(()=>{ie===X&&(ie=null),q();let $=te[U];$&&$!==X&&($.state="sink",$.sp=0,te[U]=null)}),Pe(se.x,se.z),Ye(hs+th,.8),oe(()=>{I.carry=null,z.emissiveIntensity=.3,te[U]&&te[U]!==X&&G(te[U]),ae(X,U)}),Fe(0),Ye(Ip,.5),Pe(bi.x,bi.z)]}}let pe={root:t,hover:[{id:"loadport",object:d},{id:"stocker",object:x}],anchors:{loadPort:new C(bi.x,1.1,bi.z),stocker:new C(f,.9,p)},speed:1,hoverObjects(X=[]){for(let U of ne)U.no&&X.push(U.proxy);return X},dockReady:()=>!!ie&&ie.state==="dock"&&ie.doorOpen>=1,dockTurn:()=>ie&&ie.no||null,dockCount:()=>ie?ie.count:0,bindDock(X,U){return!ie||ie.no?!1:(ie.no=X,ie.info=U||null,Y(ie),!0)},slotPoint(X,U=new C){let se=ie?ie.g.position:new C(bi.x,js,bi.z);return U.set(se.x+Np,se.y+Op+Math.min(X,Dp-1)*kp,se.z)},addWafer(X){ie&&O(ie,X)},addLate(X,U){for(let se of ne)if(se.no===X&&se.state!=="sink")return O(se,U),!0;return!1},updateInfo(X,U){for(let se of ne)se.no===X&&(se.info=U,Y(se))},ship(X){return!ie||ie.no!==X||fe.includes(ie)||ge&&ge.foup===ie?!1:(fe.push(ie),!0)},shipped:X=>{for(let U of ne)if(U.no===X)return U.state==="carried"||U.state==="nest"||U.state==="sink"||fe.includes(U)||ge&&ge.foup===U;return!1},placeNest(X,U,se){let $=J();$.no=X,$.info=U;for(let Ce of se)O($,Ce);ae($,$x(X)),Y($)},resetDock(X,U,se){ie&&G(ie);let $=q(!0);if(X){$.no=X,$.info=U;for(let Ce of se||[])O($,Ce)}Y($)},busy:()=>!!ge||fe.length>0,clear(){for(let X of[...ne])G(X);fe.length=0,ge=null,I.carry=null,I.grip=0,I.hook=Ip,I.x=bi.x,I.z=bi.z,z.emissiveIntensity=.3,V()},update(X){if(!ge&&fe.length){let $=fe.shift();ge=$e($),ge.foup=$}let U=X*pe.speed;for(;ge&&U>0;){let $=ge.steps[ge.i];if(!$){ge=null;break}if($.run||($.run=$.setup(),$.t=0),!$.run.d){$.run.fn&&$.run.fn(1),ge.i+=1;continue}let Ce=Math.min(U,$.run.d-$.t);$.t+=Ce,U-=Ce,$.run.fn&&$.run.fn(cs(st($.t/$.run.d,0,1))),$.t>=$.run.d-1e-6&&(ge.i+=1)}V();for(let $ of[...ne])$.state==="spawning"?($.sp=Math.min(1,$.sp+X/.8),$.g.position.y=js-(Gi+.07)*(1-cs($.sp)),$.sp>=1&&($.state="dock")):$.state==="dock"&&$.doorOpen<1?($.doorOpen=Math.min(1,$.doorOpen+X/.6),K($)):$.state==="sink"&&($.sp=Math.min(1,$.sp+X/1.2),$.g.position.y=hs-(Gi+.09)*cs($.sp),$.sp>=1&&G($));for(let $=0;$<Ho;$++)g[$].emissiveIntensity=te[$]?1.6:0;let se=!!ge;u[0].emissiveIntensity=pe.dockReady()?1.8:.15,u[1].emissiveIntensity=ie&&ie.state==="closing"?2.2:.15,u[2].emissiveIntensity=se?1.8:.15},dispose(){for(let X of[...ne])G(X);for(let X of[o.g,o.door])X.traverse(U=>U.geometry&&U.geometry.dispose());s.dispose(),r.dispose(),i.dispose()}};return V(),pe}var Kx=1.1,aT=12;function Zx(n){let e=new Kt;e.name="effects";let t=new wn(.9,1,64,1).rotateX(-Math.PI/2),i=Array.from({length:aT},()=>{let d=new Dt({name:"ripple",transparent:!0,opacity:0,depthWrite:!1,blending:Nn,toneMapped:!1}),h=new et(t,d);return h.name="ripple",h.visible=!1,h.renderOrder=2,h.layers.set(hn),e.add(h),{mesh:h,mat:d,life:0,from:.3,to:1.2,gain:1}}),s=0,r=(d,h,f)=>Array.from({length:d},()=>{let p=new Vs({map:n.radial,color:h,transparent:!0,opacity:0,depthWrite:!1,blending:f?Nn:qs}),g=new pr(p);return g.visible=!1,e.add(g),{sp:g,mat:p,life:0,max:1,v:new C,size:.1,grow:0,gravity:0,alpha:1}}),o=r(48,9146521,!1),a=r(96,16757867,!0),l=0,c=0;function u(d,h,f,p){let g=d[h%d.length];g.life=g.max=p.life,g.sp.position.copy(f),g.v.copy(p.v),g.size=p.size,g.grow=p.grow,g.gravity=p.gravity,g.alpha=p.alpha,g.sp.scale.setScalar(p.size),g.mat.opacity=p.alpha,g.sp.visible=!0}return{root:e,puff(d,h=9){for(let f=0;f<h;f++)u(o,l++,d,{life:1.4+Math.random()*.9,v:new C((Math.random()-.5)*.18,.28+Math.random()*.25,(Math.random()-.5)*.18),size:.08+Math.random()*.06,grow:.32,gravity:-.02,alpha:.42})},sparks(d,h=3){for(let f=0;f<h;f++){let p=Math.random()*Math.PI*2,g=.35+Math.random()*.7;u(a,c++,d,{life:.25+Math.random()*.35,v:new C(Math.cos(p)*g,.3+Math.random()*.7,Math.sin(p)*g),size:.012+Math.random()*.012,grow:-.01,gravity:3.2,alpha:1})}},ripple(d,h,{from:f=.35,to:p=1.25,gain:g=1}={}){let m=i[s++%i.length];m.life=Kx,m.from=f,m.to=p,m.gain=g,m.mat.color.setHex(h).multiplyScalar(1.6),m.mesh.position.set(d.x,d.y+.004,d.z),m.mesh.scale.setScalar(f),m.mat.opacity=g,m.mesh.visible=!0},ripples(){return i.filter(d=>d.life>0).map(d=>({position:d.mesh.position.clone(),radius:d.mesh.scale.x,opacity:d.mat.opacity}))},busy(){return i.some(d=>d.life>0)},update(d){for(let h of i){if(h.life<=0)continue;if(h.life-=d,h.life<=0){h.mesh.visible=!1,h.mat.opacity=0;continue}let f=1-h.life/Kx,p=1-(1-f)*(1-f)*(1-f);h.mesh.scale.setScalar(h.from+(h.to-h.from)*p),h.mat.opacity=h.gain*(1-f)*(1-f)}for(let h of[o,a])for(let f of h){if(f.life<=0)continue;if(f.life-=d,f.life<=0){f.sp.visible=!1,f.mat.opacity=0;continue}f.v.y-=f.gravity*d,f.sp.position.addScaledVector(f.v,d),f.sp.position.y<.01&&(f.sp.position.y=.01,f.v.set(f.v.x*.3,Math.abs(f.v.y)*.25,f.v.z*.3));let p=1-f.life/f.max;f.sp.scale.setScalar(Math.max(.002,f.size+f.grow*p)),f.mat.opacity=f.alpha*(h===o?Math.sin(Math.PI*Math.min(1,p*1.15)):1-p)}}}}var Jx=.15,lT=.006;function jx(n){let e=new Fn(Jx,Jx,lT,40,1,!1),t=new wt({name:"wafer-raw",color:10988984,metalness:1,roughness:.08}),i=n.waferTop.clone();i.name="wafer-gold",i.color.set(16762726),"iridescence"in i&&(i.iridescence=Math.min(i.iridescence,.35));let s=n.waferTop.clone();s.name="wafer-bad",s.color.set(8004130),s.roughness=Math.max(.45,s.roughness||0),"iridescence"in s&&(s.iridescence=Math.min(s.iridescence,.05));let r={raw:t,normal:n.waferTop,gold:i,bad:s};return{geo:e,looks:r,create(o="raw"){let a=new et(e,r[o]||r.normal);return a.name="wafer",a.castShadow=!1,a.receiveShadow=!0,a.userData.look=o,a},setLook(o,a){o.userData.look!==a&&(o.material=r[a]||r.normal,o.userData.look=a)},dispose(){e.dispose(),t.dispose(),i.dispose(),s.dispose()}}}var Bp=.34,ih=.17,Qx=4,cT=2.4,uT=.55,dT=.9,zp=.03,hT=5,sh=-.006,fT=12,pT=.4,mT=3,gT=1.5,xT=9,yT=new ke(16756768),vT=new ke(3461498),pc=(n,e=n.kind)=>n.status==="error"?"bad":Va.has(e)?"gold":"normal";function ey(n,e){let t=[],i=0,s=0,r=0;for(let c of e){if(c.turn!==n.no||(r+=1,c.status==="running"))continue;let u=pc(c);u==="bad"&&(i+=1),u==="gold"&&(s+=1),t.push(u)}let o=Math.max(0,(n.calls||0)-r),a=Math.min(o,Math.max(0,(n.errors||0)-i));o-=a;let l=Math.min(o,Math.max(0,nh(n)-s));return o-=l,[...Array(a).fill("bad"),...Array(l).fill("gold"),...Array(o).fill("normal"),...t]}var rh=class{constructor(e,{gateIn:t,gateOut:i,stop:s}){this.path=new Gd(e),this.end=this.path.length,this.gateIn=t,this.gateOut=i,this.stop=s,this.items=[],this.doorIn=0,this.doorOut=0,this.cycling=!1,this.moving=!1}tailFree(){let e=this.items[this.items.length-1];return!e||e.s>=Bp-1e-6}add(e){let t={job:e,s:0,v:0,cycled:!1,dwell:0,arrivedAt:null};return this.items.push(t),t}remove(e){let t=this.items.indexOf(e);t>=0&&this.items.splice(t,1)}head(){return this.items[0]||null}atEnd(e){return!!e&&e.s>=this.end-1e-4&&e.v===0}update(e,t,i){let s=this.gateIn-ih,r=this.gateOut+ih,o=this.items.find(p=>p.s>s+1e-6&&p.s<r-1e-6)||null,a=!1,l=!1,c=!1,u=!1,d=null,h=!0;for(let p of this.items){let g=d?d.s-Bp:this.end,m=!d||d.s-Bp>=r;if(p.cycled)p.s<r&&(p.s<=this.gateOut-ih+1e-6?(m&&(l=!0),(!m||this.doorOut<.95)&&(g=Math.min(g,Math.max(p.s,this.stop)))):l=!0);else{if(g=Math.min(g,this.stop),p.s<=s+1e-6){let _=!o&&this.doorOut<=.05;_&&h&&p.s>=s-.9&&(a=!0),(!_||this.doorIn<.95)&&(g=Math.min(g,s)),h=!1}else p.s<this.gateIn+ih&&(a=!0);p.s>=this.stop-1e-4&&this.doorIn<=.02&&this.doorOut<=.02&&(p.dwell+=e*t,c=!0,p.dwell>=uT&&(p.cycled=!0))}let x=g-p.s;if(x<=1e-5)p.v=0;else{let _=Math.min(cT*t,Math.sqrt(2*Qx*x));p.v=Math.min(_,p.v+Qx*t*e),p.s=Math.min(g,p.s+p.v*e),u=!0}p.arrivedAt==null&&p.s>=this.end-1e-4&&(p.arrivedAt=i),d=p}let f=5*e*t;this.doorIn=st(this.doorIn+(a?f:-f),0,1),this.doorOut=st(this.doorOut+(l?f:-f),0,1),this.cycling=c,this.moving=u}};function ty({cell:n,stations:e,stocker:t,engine:i,wafers:s,root:r}){let o=n.points,a=new C,l=o.dispenser.distanceTo(o.lockCenter),c=o.lockCenter.distanceTo(o.lockPort),u=st(.45/Math.max(1e-6,o.lockCenter.z-o.lockPort.z),0,1),d=new rh([o.dispenser,o.lockCenter,o.lockPort],{gateIn:o.lockCenter.x-.45-o.dispenser.x,gateOut:l+u*c,stop:l}),h=o.outPort.distanceTo(o.outCenter),f=st((o.outCenter.z-.45-o.outPort.z)/Math.max(1e-6,o.outCenter.z-o.outPort.z),0,1),p=new rh([o.outPort,o.outCenter,o.trackEnd],{gateIn:f*h,gateOut:h+.45,stop:h}),g=H=>e.byKind[H.kind]?H.kind:"generic",m=new Map,x=new Set,_=new Map,b=Object.fromEntries(e.list.map(H=>[H.kind,new Array(hT).fill(null)])),y={task:null,steps:[],cur:null,carry:null,idle:0,homed:!0},M={inbound:0,outbound:0,robot:!1,stocker:!1},w={},v=[],S=0,D=0,T=!0,P=0,k=1,z=null;function I(H){let me=_.get(H);return me||(me={no:H,status:"running",info:null,shipped:!1,pending:[]},_.set(H,me)),me}let V=H=>H.status!=="running"||H.no<S,ne=H=>{for(let me of m.values())if(me.turn===H)return!0;return!1};function te(H){let me={id:H.id,call:H,kind:g(H),turn:H.turn,stage:"spawn",mesh:null,it:null,level:-1,processed:!1,processedAt:0,arriveT:0,signaled:!1,restY:Dn,waitT:0};return m.set(H.id,me),I(H.turn),me}function ie(H){H.mesh&&(r.remove(H.mesh),H.mesh=null)}function J(H){H.stage="stored",m.delete(H.id),x.add(H.id)}function Y(H){H.signaled||(H.signaled=!0,e.byKind[H.kind].onEnd(H.call,H.call.status!=="error"))}function O(H,me){t.addLate(H,me)||I(H).pending.push(me)}function G(H){H.it&&(d.remove(H.it),p.remove(H.it),H.it=null),H.level>=0&&(b[H.kind][H.level]=null,H.level=-1),y.carry===H&&(y.carry=null),ie(H),Y(H),O(H.turn,pc(H.call,H.kind)),J(H)}let K=H=>b[H].indexOf(null);function q(H,me){let be=e.byKind[H.kind];b[H.kind][me]=H,H.level=me,H.stage="station",H.arriveT=P,H.mesh||(H.mesh=s.create("raw"),r.add(H.mesh)),H.mesh.position.set(be.port.x,Dn+me*zp,be.port.z)}function ae(){for(let H of m.values())ie(H);m.clear(),x.clear(),_.clear(),d.items.length=0,p.items.length=0;for(let H of Object.keys(b))b[H].fill(null);y.task=null,y.steps=[],y.cur=null,y.carry=null,n.robot.setBusy(!1),n.robot.setStatus&&n.robot.setStatus("idle"),z=null}function fe(H){w={},v=[];for(let me of H.calls){if(me.status!=="running")continue;let be=g(me);w[be]=(w[be]||0)+1,v.push(me)}S=H.turns.length?H.turns[H.turns.length-1].no:0}function ge(H){ae(),t.clear();for(let F of H.turns)Object.assign(I(F.no),{info:F,status:F.status});let me=H.turns.filter(F=>F.status!=="running");for(let F of me)I(F.no).shipped=!0;for(let F of me.slice(-xT))t.placeNest(F.no,F,ey(F,H.calls));let be=H.turns.find(F=>F.status==="running")||null;be?t.resetDock(be.no,be,ey(be,H.calls)):t.resetDock(null,null,[]);for(let F of H.calls){if(F.status!=="running"){x.add(F.id);continue}let ot=te(F),pt=K(ot.kind);pt>=0&&q(ot,pt),e.byKind[ot.kind].onStart(F)}fe(H)}function oe(H){if(!H)return;if(T||H.turnCount<D){T=!1,D=H.turnCount,ge(H);return}D=H.turnCount;for(let be of H.turns){let F=I(be.no);F.info=be,F.status=be.status,t.updateInfo(be.no,be)}let me=new Set;for(let be of H.calls){me.add(be.id);let F=m.get(be.id);F?F.call=be:x.has(be.id)||(te(be),e.byKind[g(be)].onStart(be))}for(let be of x)me.has(be)||x.delete(be);fe(H)}let Pe=(H,me)=>({yaw:H,reach:zo,lift:me,d:(be,F)=>Math.max(.18,Math.abs(rp(be.yaw,F.yaw))/4)});function Ye(H,me){let be=e.byKind[H.kind];b[H.kind][me]=H,H.level=me;let F=me*zp;return{type:"deliver",job:H,from:qt.lock.code,to:_i[H.kind].code,steps:[Pe(Bo,sh),{reach:Ns,d:.38},{lift:hc,d:.15,onStart(){d.remove(H.it),H.it=null,H.stage="carried",H.restY=Dn,y.carry=H},onEnd:()=>H.restY=0},{reach:zo,d:.32},Pe(be.theta,F+hc),{reach:Ns,d:.38},{lift:F+sh,d:.15,onStart:()=>H.restY=Dn+F,onEnd(){y.carry=null,q(H,me)}},{reach:zo,d:.32}]}}function Fe(H){let me=e.byKind[H.kind],be=H.level,F=be*zp;return H.reserved=!0,{type:"collect",job:H,from:_i[H.kind].code,to:qt.unload.code,steps:[Pe(me.theta,F+sh),{reach:Ns,d:.38},{lift:F+hc,d:.15,onStart(){b[H.kind][be]=null,H.level=-1,H.stage="carried",H.restY=Dn+F,y.carry=H},onEnd:()=>H.restY=0},{reach:zo,d:.32},Pe($a,hc),{reach:Ns,d:.38},{lift:sh,d:.15,onStart:()=>H.restY=Dn,onEnd(){y.carry=null,H.it=p.add(H),H.stage="out"}},{reach:zo,d:.32}]}}function Ze(){let H=null,me=d.head();if(d.atEnd(me)){let be=K(me.job.kind);be>=0&&(H={type:"deliver",job:me.job,k:be,ready:me.arrivedAt??P})}if(p.tailFree())for(let be of m.values())be.stage==="station"&&be.processed&&!be.reserved&&(!H||be.processedAt<H.ready)&&(H={type:"collect",job:be,ready:be.processedAt});return H?H.type==="deliver"?Ye(H.job,H.k):Fe(H.job):null}function $e(H){let me=n.robot;if(!y.task){let ot=Ze();ot?(y.task=ot,y.steps=ot.steps.slice(),y.cur=null,y.idle=0,y.homed=!1,me.setBusy(!0)):(y.idle+=H,y.idle>gT&&!y.homed&&!y.cur&&(y.steps=[Pe(Bo,0)],y.homed=!0))}let be=H,F=0;for(;be>0&&F++<32;){if(!y.cur){let Ie=y.steps.shift();if(!Ie)break;let A={yaw:me.pose.yaw,reach:me.pose.reach,lift:me.pose.lift},j={yaw:Ie.yaw??A.yaw,reach:Ie.reach??A.reach,lift:Ie.lift??A.lift},xe=typeof Ie.d=="function"?Ie.d(A,j):Ie.d;y.cur={st:Ie,from:A,to:j,d:xe/k,t:0},Ie.onStart&&Ie.onStart()}let ot=y.cur,pt=Math.min(be,ot.d-ot.t);ot.t+=pt,be-=pt;let vt=ot.d>0?cs(ot.t/ot.d):1;me.setPose(ot.from.yaw+rp(ot.from.yaw,ot.to.yaw)*vt,Zi(ot.from.reach,ot.to.reach,vt),Zi(ot.from.lift,ot.to.lift,vt)),ot.t>=ot.d-1e-6&&(y.cur=null,ot.st.onEnd&&ot.st.onEnd())}if(y.task&&!y.cur&&y.steps.length===0&&(y.task=null,y.idle=0,me.setBusy(!1)),me.setStatus){let ot=y.task,pt=!!y.cur||y.steps.length>0,vt=y.carry&&y.carry.mesh?y.carry.mesh.userData.look:null;ot?me.setStatus(ot.type,ot.from,ot.to,vt):me.setStatus(pt?"home":"idle",null,pt?qt.lock.code:null,null)}y.carry&&y.carry.mesh&&(me.carryPoint(a),a.y=Math.max(a.y,y.carry.restY),y.carry.mesh.position.copy(a))}function pe(){for(let H of m.values())H.stage!=="station"||H.processed||H.call.status==="running"||P<H.arriveT+dT/k||(H.processed=!0,H.processedAt=P,s.setLook(H.mesh,pc(H.call,H.kind)),Y(H))}function X(H,me){p.remove(me),H.it=null,H.stage="transfer",z={j:H,t:0,d:pT/k,from:H.mesh.position.clone(),to:t.slotPoint(t.dockCount(),new C)}}function U(H){if(!z)return;z.t+=H;let me=cs(z.t/z.d),be=z.j.mesh;if(be.position.lerpVectors(z.from,z.to,me),be.position.y+=Math.sin(Math.PI*me)*.025,z.t>=z.d){let F=z.j;z=null,ie(F),t.dockTurn()===F.turn?t.addWafer(pc(F.call,F.kind)):O(F.turn,pc(F.call,F.kind)),J(F)}}function se(H){if(t.dockReady()&&t.dockTurn()==null){let F=null;for(let ot of _.values())!ot.shipped&&(!F||ot.no<F.no)&&(F=ot);if(F){t.bindDock(F.no,F.info);for(let ot of F.pending.splice(0))t.addWafer(ot)}}let me=t.dockTurn();if(me!=null&&!z&&t.dockReady()){let F=I(me);!F.shipped&&V(F)&&!ne(me)&&t.ship(me)&&(F.shipped=!0)}let be=p.head();if(!z&&p.atEnd(be)){let F=be.job;I(F.turn).shipped?G(F):t.dockReady()&&t.dockTurn()===F.turn?X(F,be):(F.waitT+=H,F.waitT>mT&&me!=null&&me!==F.turn&&t.dockReady()&&t.ship(me)&&(I(me).shipped=!0))}}function $(){let H=m.size-fT;if(!(H<=0))for(let me of m.values()){if(H<=0)break;me.stage==="spawn"&&me.call.status!=="running"&&(G(me),H-=1)}}function Ce(){if(d.tailFree()){for(let H of m.values())if(H.stage==="spawn"){H.mesh=s.create("raw"),r.add(H.mesh),H.it=d.add(H),H.stage="in",d.path.at(0,H.mesh.position),i.pulseDispenser();return}}}function Re(H,me,be){H.emissive.copy(me?yT:vT),H.emissiveIntensity=me?1.6+Math.sin(be*10)*.8:.6}return t.resetDock(null,null,[]),{sync:oe,reset(){ae(),t.clear(),t.resetDock(null,null,[]),w={},v=[],S=0,D=0,T=!0},update(H,me){P=me,k=1+.35*Math.min(4,Math.max(0,m.size-2)/2),t.speed=k,$(),Ce(),d.update(H,k,P),p.update(H,k,P),n.lock.setDoors(d.doorIn,d.doorOut),n.unload.setDoors(p.doorOut,p.doorIn),Re(n.lock.led,d.cycling,me),Re(n.unload.led,p.cycling,me),n.trackLed.emissiveIntensity=d.moving||p.moving?1.8+Math.sin(me*8)*.4:1,pe(),$e(H),se(H),U(H);for(let be of d.items)d.path.at(be.s,be.job.mesh.position);for(let be of p.items)p.path.at(be.s,be.job.mesh.position);for(let be of e.list){let F=!1,ot=!1;for(let vt of b[be.kind])vt&&vt.stage==="station"&&(F=!0,vt.processed||(ot=!0));let pt=(w[be.kind]||0)>0||ot;be.active=pt,be.update(H,me,{working:pt,wafer:F})}t.update(H)},activity(){return M.inbound=d.items.length,M.outbound=p.items.length,M.robot=!!y.task||!!y.cur,M.stocker=!!z||t.busy(),M},focus(H){let me=null;for(let be of v)(!me||(be.startedAt||0)>=(me.startedAt||0))&&(me=be);if(me){let be=e.byKind[g(me)];return H.copy(be.anchor),`station:${be.kind}`}return y.task?(H.copy(n.anchors.robot),"robot"):z||t.busy()?(H.copy(t.anchors.stocker),"stocker"):null},busy(){return m.size>0||v.length>0||!!y.task||!!y.cur||y.steps.length>0||!!z||t.busy()},stats(){return{inflight:m.size,laneIn:d.items.length,laneOut:p.items.length,robot:y.task?y.task.type:"idle",transfer:!!z,dock:t.dockTurn(),rush:k,stages:[...m.values()].reduce((H,me)=>(H[me.stage]=(H[me.stage]||0)+1,H),{})}},dispose(){for(let H of m.values())ie(H);m.clear()}}}function ln(n){let e=Math.max(0,Number(n)||0);return e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${(e/1e3).toFixed(e>=1e4?0:1)}K`:String(Math.round(e))}function An(n,e="CNY"){let t=e==="USD"?"$":"¥",i=Number(n)||0,s=Math.abs(i)>=100?1:Math.abs(i)>=1?2:Math.abs(i)>=.01?3:4;return`${t}${i.toFixed(s)}`}function fs(n){let e=Math.max(0,Number(n)||0),t=Math.round(e*100);return t>=100&&e<1?`${(Math.floor(e*1e3)/10).toFixed(1)}%`:t<=0&&e>0?"<1%":`${t}%`}function ny(n){let e=Math.max(0,Math.round((Number(n)||0)/1e3));if(e<60)return`${e}s`;let t=Math.floor(e/60);return t<60?`${t}m ${String(e%60).padStart(2,"0")}s`:`${Math.floor(t/60)}h ${String(t%60).padStart(2,"0")}m`}function iy(n,e={}){return String(n).replace(/\{(\w+)\}/g,(t,i)=>i in e?String(e[i]):t)}var Hp={"deepseek-flash":{id:"deepseek-flash",hit:[.02,.04],miss:[1,2],output:[4,8]},"deepseek-v4-pro":{id:"deepseek-v4-pro",hit:[.15,.3],miss:[4.5,9],output:[13.5,27]}};function Qs(n,e){let t=String(n||"").toLowerCase(),i=String(e||"").toLowerCase();return t&&!t.includes("deepseek")?null:i?i.includes("pro")?Hp["deepseek-v4-pro"]:i.includes("flash")||i.includes("chat")||i.includes("reasoner")||i.includes("deepseek")?Hp["deepseek-flash"]:null:t?Hp["deepseek-flash"]:null}function Tr(n){let e=new Date(n),t=e.getUTCDay();if(t===0||t===6)return!1;let i=e.getUTCHours();return i>=1&&i<4||i>=6&&i<10}function mc(n){return typeof n=="number"&&Number.isFinite(n)&&n>0?n:0}function oh(n){if(!n||typeof n!="object")return null;let e={miss:mc(n.inputTokens),hit:mc(n.cacheReadTokens),write:mc(n.cacheWriteTokens),output:mc(n.outputTokens),reasoning:mc(n.reasoningTokens)};return e.miss+e.hit+e.write+e.output===0?null:e}function ah(n,e,t){if(!e||!n)return 0;let i=t?1:0;return((n.miss+n.write)*e.miss[i]+n.hit*e.hit[i]+n.output*e.output[i])/1e6}function sy(n,e,t){if(!e||!n)return 0;let i=t?1:0;return n.hit*(e.miss[i]-e.hit[i])/1e6}function lh(n,e,t){if(!e||!(n>0))return 0;let i=t?1:0,s=.8*e.hit[i]+.15*e.miss[i]+.05*e.output[i];return Math.floor(n/s*1e6)}var _T=60,cy=40,bT=200,MT=40,ST=24,wT=8,ET=250,TT=16,AT=5e3;function dh(){return{provider:"",model:"",effort:"",contextWindow:0,contextTokens:0,totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0,unpriced:0},sample:null,speed:{last:0,decodeTokens:0,decodeMs:0},tools:{calls:0,errors:0,running:0,byKind:{}},files:{count:0,added:0,removed:0,paths:[]},phase:"idle",turnCount:0,calls:[],turns:[],agents:[],workflows:[],firstAt:0,lastAt:0}}var Vi=n=>typeof n=="number"&&Number.isFinite(n),ry=n=>Vi(n)&&n>0?n:0,Li=(n,e=120)=>typeof n=="string"?n.slice(0,e):"",oo=n=>n&&typeof n=="object"&&!Array.isArray(n)?n:null;function uy(n){if(Vi(n))return n;if(typeof n=="string"){let e=Date.parse(n);if(Number.isFinite(e))return e}return NaN}function RT(n,e){let t=uy(n.time);return Number.isFinite(t)?t:e.lastAt}function ks(n,e){e>n.lastAt&&(n.lastAt=e),!n.firstAt&&e&&(n.firstAt=e)}function dy(n,e){if(!n.length)return n;let t=n.slice();return t[t.length-1]=e(t[t.length-1]),t}function gc(n,e,t){let i=n.slice();return i[e]=t,i}function Wp(n,e){return n.length>e?n.slice(n.length-e):n}function Xp(n,e,t){let i=[...n,e];for(;i.length>t;){let s=i.findIndex(r=>r.status!=="running");i.splice(s>=0?s:0,1)}return i}function hy(n,e,t){return{no:n,index:e,status:"running",startedAt:t,endedAt:0,miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,requests:0,calls:0,errors:0,files:[],fileCount:0,added:0,removed:0}}var hh=n=>n.turns[n.turns.length-1]||null,Go=n=>{let e=hh(n);return e&&e.status==="running"?e:null};function oy(n,e,t){let i=Go(n);if(!i)return;n.turns=dy(n.turns,r=>({...r,status:e,endedAt:t}));let s=0;n.calls.some(r=>r.status==="running"&&r.turn===i.no)&&(n.calls=n.calls.map(r=>r.status!=="running"||r.turn!==i.no?r:(s+=1,{...r,status:"error",endedAt:t}))),s&&(n.tools={...n.tools,running:Math.max(0,n.tools.running-s),errors:n.tools.errors+s})}function Gp(n,e,t){if(Go(n))return;let i=n.turnCount+1;n.turnCount=i,n.turns=Wp([...n.turns,hy(i,Vi(t)?t:i,e)],cy)}function CT(n,e){let t=n.files.findIndex(s=>s.path===e.path),i={...n,added:n.added+e.added,removed:n.removed+e.removed};if(t>=0){let s=n.files[t];i.files=gc(n.files,t,{path:s.path,added:s.added+e.added,removed:s.removed+e.removed})}else i.fileCount=n.fileCount+1,n.files.length<MT&&(i.files=[...n.files,{path:e.path,added:e.added,removed:e.removed}]);return i}function PT(n){if(!Array.isArray(n))return null;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t&&t.type==="chunk"&&t.chunk&&t.chunk.type==="usage"&&t.chunk.usage)return t.chunk.usage}return null}var IT=new Set(["text-delta","reasoning-delta","tool-call-delta"]);function LT(n){if(!Array.isArray(n))return null;let e=1/0,t=-1/0,i=s=>{Vi(s)&&(s<e&&(e=s),s>t&&(t=s))};for(let s of n)if(!(!s||typeof s!="object"))if(s.type==="text-chunks"||s.type==="reasoning-chunks"||s.type==="tool-call-chunks"){let r=Array.isArray(s.texts)?s.texts:Array.isArray(s.args)?s.args:[],o=Array.isArray(s.dt)?s.dt:[],a=s.time0;if(!Vi(a))continue;s.type==="tool-call-chunks"&&s.name&&i(a);for(let l=0;l<r.length;l++)l>0&&(a+=Vi(o[l-1])?o[l-1]:0),typeof r[l]=="string"&&r[l].length&&i(a)}else s.type==="chunk"&&s.chunk&&IT.has(s.chunk.type)&&i(s.time);return t>e?{first:e,last:t}:null}var DT={miss:0,hit:0,write:0,output:0,reasoning:0,cost:0,peak:!1,savings:0,priced:!0};function NT(n,e){return n.miss===e.miss&&n.hit===e.hit&&n.write===e.write&&n.output===e.output&&n.reasoning===e.reasoning&&n.cost===e.cost&&n.peak===e.peak&&n.priced===e.priced}function OT(n,e,t,i){let s=oo(t.message)&&oo(t.message.source),r=s&&typeof s.provider=="string"&&s.provider?s.provider:n.provider,o=s&&typeof s.model=="string"&&s.model?s.model:n.model,a=Qs(r,o),l=Tr(i),c=Vi(t.turn)?t.turn:-1,u=Vi(t.step)?t.step:-1,d=n.sample&&c>=0&&n.sample.turn===c&&n.sample.step===u?n.sample:null,h=Go(n)||hh(n),f={turn:c,step:u,no:d?d.no:h?h.no:0,miss:e.miss,hit:e.hit,write:e.write,output:e.output,reasoning:e.reasoning,cost:ah(e,a,l),peak:l,savings:sy(e,a,l),priced:!!a};if(d&&NT(d,f))return!1;let p=d||DT,g=d?0:1,m=n.totals;return n.totals={miss:m.miss-p.miss+f.miss,hit:m.hit-p.hit+f.hit,write:m.write-p.write+f.write,output:m.output-p.output+f.output,reasoning:m.reasoning-p.reasoning+f.reasoning,requests:m.requests+g,cost:Math.max(0,m.cost-p.cost+f.cost),costPeak:Math.max(0,m.costPeak-(p.peak?p.cost:0)+(l?f.cost:0)),costOffPeak:Math.max(0,m.costOffPeak-(p.peak?0:p.cost)+(l?0:f.cost)),savings:Math.max(0,m.savings-p.savings+f.savings),unpriced:m.unpriced-(d&&!d.priced?1:0)+(a?0:1)},n.sample=f,n.contextTokens=e.miss+e.hit+e.write+e.output,f.no&&(n.turns=n.turns.map(x=>x.no!==f.no?x:{...x,miss:x.miss-p.miss+f.miss,hit:x.hit-p.hit+f.hit,write:x.write-p.write+f.write,output:x.output-p.output+f.output,reasoning:x.reasoning-p.reasoning+f.reasoning,cost:Math.max(0,x.cost-p.cost+f.cost),requests:x.requests+g})),!0}function kT(n,e,t){if(e.output<TT)return;let i=LT(t);if(!i)return;let s=i.last-i.first;s<ET||(n.speed={last:Math.min(AT,e.output/(s/1e3)),decodeTokens:n.speed.decodeTokens+e.output,decodeMs:n.speed.decodeMs+s})}function Vp(n){return n==null||n==="completed"?"done":n==="aborted"||n==="cancelled"?"stopped":"error"}function FT(n){return{id:"",name:"",label:"",kind:"subagent",mode:"",runId:"",seq:-1,phase:"",status:"running",startedAt:0,endedAt:0,turn:0,...n}}function uh(n,e,t){let i=n.agents[e],s=!1;for(let r of Object.keys(t))i[r]!==t[r]&&(s=!0);return s?{...n,agents:gc(n.agents,e,{...i,...t})}:n}function ay(n,e,t){let i={...n},s=Go(i)||hh(i);return i.agents=Xp(i.agents,FT({turn:s?s.no:0,startedAt:t,...e}),ST),ks(i,t),i}function UT(n,e,t,i){let s=n.agents.findIndex(o=>o.id===e);if(s<0||n.agents[s].status!=="running")return n;let r=uh(n,s,{status:t,endedAt:i});return r!==n&&ks(r,i),r}function BT(n,e,t){if(typeof e!="string"||!e)return;let i=e.slice(e.lastIndexOf("/")+1),s=n.agents.findIndex(r=>r.kind==="subagent"&&r.status!=="running"&&(r.name&&(r.name===e||r.name===i)||r.label===e));s<0||(n.agents=gc(n.agents,s,{...n.agents[s],status:"running",endedAt:0,startedAt:t}))}function ch(n,e,t){let i=n.workflows.findIndex(o=>o.runId===e);if(i<0)return n;let s=n.workflows[i],r=t(s);return r===s?n:{...n,workflows:gc(n.workflows,i,r)}}var zT=new Set(["aborted","blocked","error","max-tokens","interrupted"]);function ly(n,{provider:e,model:t,effort:i,contextWindow:s}){let r={};return typeof e=="string"&&e&&e.slice(0,80)!==n.provider&&(r.provider=e.slice(0,80)),typeof t=="string"&&t&&t.slice(0,120)!==n.model&&(r.model=t.slice(0,120)),typeof i=="string"&&i.slice(0,40)!==n.effort&&(r.effort=i.slice(0,40)),Vi(s)&&s>0&&s!==n.contextWindow&&(r.contextWindow=s),Object.keys(r).length?{...n,...r}:n}function HT(n,e){if(!e||typeof e.type!="string")return n;let t=oo(e.data)||{},i=RT(e,n);switch(e.type){case"request/header":{let s=oo(oo(t.header)&&t.header.config);return s?ly(n,{provider:s.provider,model:s.model,effort:typeof s.reasoningEffort=="string"?s.reasoningEffort:""}):n}case"request/context":return ly(n,{provider:t.provider,model:t.model,contextWindow:t.contextWindow});case"turn/start":{let s={...n};oy(s,"ok",i);let r=s.turnCount+1;return s.turnCount=r,s.turns=Wp([...s.turns,hy(r,Vi(t.turn)?t.turn:r,i)],cy),s.phase="thinking",ks(s,i),s}case"step/start":{if(Go(n)&&n.phase==="thinking")return n;let s={...n};return Gp(s,i,t.turn),s.phase="thinking",ks(s,i),s}case"llm/retry-started":{let s=n.sample;return s&&s.turn===t.turn&&s.step===t.step?{...n,sample:null}:n}case"assistant/attempt":case"assistant/message":{let s=e.type==="assistant/message",r=oh(s&&t.usage||PT(t.stream)),o=n;if(s&&(!Go(n)||n.phase!=="idle")&&(o={...n},Gp(o,i,t.turn),o.phase="idle"),r){let a=o===n?{...n}:o;OT(a,r,t,i)&&(s&&kT(a,r,t.stream),o=a)}return o!==n&&ks(o,i),o}case"tool/call":{let s=t.callId??t.id,r=(typeof s=="string"||Vi(s)?String(s):"").slice(0,200)||`call-${Vi(e.seq)?e.seq:n.tools.calls+1}`;if(n.calls.some(f=>f.id===r))return n;let o={...n};Gp(o,i,t.turn);let a=Li(t.name,80)||"tool",l=wx(a),c=Jd(t.arguments),u=Va.has(l)?Tx(a,c):null,d=u?{path:Li(u.path,400),added:ry(u.added),removed:ry(u.removed)}:null,h={id:r,name:a,kind:l,label:Ex(a,c),turn:hh(o).no,startedAt:i,endedAt:0,status:"running",change:d&&d.path?d:null};return o.calls=Xp(o.calls,h,_T),o.tools={...o.tools,calls:o.tools.calls+1,running:o.tools.running+1,byKind:{...o.tools.byKind,[l]:(o.tools.byKind[l]||0)+1}},o.turns=dy(o.turns,f=>({...f,calls:f.calls+1})),o.phase="tool",a==="send_message"&&BT(o,c.agent,i),ks(o,i),o}case"tool/result":{let s=oo(t.message)||{},r=String(s.toolCallId??t.callId??""),o=n.calls.findIndex(h=>h.id===r);if(o<0||n.calls[o].status!=="running")return n;let a={...n},l=!!t.error||s.isError===!0,c={...a.calls[o],status:l?"error":"ok",endedAt:i};a.calls=gc(a.calls,o,c);let u=Math.max(0,a.tools.running-1);a.tools={...a.tools,running:u,errors:a.tools.errors+(l?1:0)};let d=!l&&c.change;if(d){let h=a.files.paths.includes(d.path);a.files={count:a.files.count+(h?0:1),added:a.files.added+d.added,removed:a.files.removed+d.removed,paths:h?a.files.paths:Wp([...a.files.paths,d.path],bT)}}return(l||d)&&(a.turns=a.turns.map(h=>{if(h.no!==c.turn)return h;let f=l?{...h,errors:h.errors+1}:h;return d?CT(f,d):f})),u===0&&a.phase==="tool"&&(a.phase="thinking"),ks(a,i),a}case"turn/end":{let s=oo(t.reason)?t.reason.kind:void 0;if(!Go(n)&&n.phase==="idle")return n;let r={...n};return oy(r,zT.has(s)?"rework":"ok",i),r.phase="idle",ks(r,i),r}case"subagent/catalog":{let s=Li(t.childId,200);if(!s)return n;let r=Li(t.name,80),o=Li(t.label,80),a=Li(t.mode,20),l=n.agents.findIndex(u=>u.id===s);if(l>=0){let u=n.agents[l];return uh(n,l,{name:r||u.name,label:o||u.label,mode:a||u.mode})}let c=uy(t.childCreatedAt);return ay(n,{id:s,name:r,label:o||r||"subagent",mode:a,startedAt:Number.isFinite(c)?c:i},i)}case"user/message":{let s=oo(t.source);return!s||s.kind!=="subagent-settled"?n:UT(n,Li(s.senderSessionId,200),Vp(s.stopReason),i)}case"tool-workflow/run-start":{let s=Li(t.runId,120);if(!s||n.workflows.some(a=>a.runId===s))return n;let r={...n},o={runId:s,name:Li(t.name,80)||"workflow",status:"running",startedAt:i,endedAt:0,agents:0,done:0,failed:0,phase:""};return r.workflows=Xp(r.workflows,o,wT),ks(r,i),r}case"tool-workflow/agent-start":{let s=Li(t.runId,120);if(!s)return n;let r=Vi(t.seq)?t.seq:-1,o=Li(t.childId,200)||`${s}#${r}`,a=Li(t.label,80)||"agent",l=Li(t.phase,60),c=n.agents.findIndex(d=>d.id===o),u=c>=0?uh(n,c,{kind:"workflow",runId:s,seq:r,phase:l,label:a}):ay(n,{id:o,label:a,kind:"workflow",runId:s,seq:r,phase:l},i);return c<0?u=ch(u,s,d=>({...d,agents:d.agents+1,phase:l||d.phase})):l&&(u=ch(u,s,d=>d.phase===l?d:{...d,phase:l})),u}case"tool-workflow/agent-end":{let s=Li(t.runId,120),r=Vi(t.seq)?t.seq:-1,o=n.agents.findIndex(c=>c.runId===s&&c.seq===r);if(o<0||n.agents[o].status!=="running")return n;let a=Vp(t.outcome==="failed"?"error":t.outcome),l=uh(n,o,{status:a,endedAt:i});return l=ch(l,s,c=>({...c,done:c.done+(a==="done"?1:0),failed:c.failed+(a==="error"?1:0)})),l!==n&&ks(l,i),l}case"tool-workflow/run-end":{let s=Li(t.runId,120),r=ch(n,s,o=>o.status!=="running"?o:{...o,status:Vp(t.stopReason),endedAt:i});return r.agents.some(o=>o.runId===s&&o.status==="running")&&(r===n&&(r={...n}),r.agents=r.agents.map(o=>o.runId===s&&o.status==="running"?{...o,status:"stopped",endedAt:i}:o)),r!==n&&ks(r,i),r}default:return n}}function $p(n,e){let t=n;for(let i of e)t=HT(t,i);return t}function fh(n){let e=n.totals,t=e.miss+e.hit+e.write,i=n.files.added+n.files.removed,s=t+e.output,r=n.turns.filter(a=>a.status!=="running"),o=n.tools.calls-n.tools.running;return{prompt:t,tokens:s,hitRate:t>0?e.hit/t:0,contextRatio:n.contextWindow>0?Math.min(1,n.contextTokens/n.contextWindow):0,toolSuccess:o>0?(o-n.tools.errors)/o:1,linesPerKTokens:e.output>0?i/e.output*1e3:0,costPerFile:n.files.count>0?e.cost/n.files.count:0,passRate:r.length?r.filter(a=>a.status==="ok").length/r.length:1,decodeRate:n.speed&&n.speed.decodeMs>0?n.speed.decodeTokens/(n.speed.decodeMs/1e3):0}}var xt={cyan:"#5ad1ff",blue:"#6f8cff",violet:"#a487ff",amber:"#ffb347",green:"#34d17a",red:"#ff5d5d",gold:"#e8c47c",text:"#e8f0ff",muted:"#8193b8",dim:"#4f5e80"},mh={idle:{zh:"空闲",en:"IDLE",color:"#8a93a6"},thinking:{zh:"思考",en:"THINKING",color:xt.violet},reasoning:{zh:"推理",en:"REASONING",color:xt.violet},generating:{zh:"生成",en:"GENERATING",color:xt.cyan},tool:{zh:"工具",en:"TOOL CALL",color:xt.amber}},qp=Xd(),fy=120,py=90,GT=[20,50,100,150,200,300,500,1e3,2e3],VT=[.01,.02,.05,.1,.2,.5,1,2,5,10,20,50,100,200,500,1e3,5e3],my=(n,e)=>e.find(t=>n<=t)||e[e.length-1];function yc(n,e,t){let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#081530"),i.addColorStop(1,"#030815"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(90,150,255,0.07)",n.lineWidth=1,n.beginPath();for(let s=32;s<e;s+=32)n.moveTo(s+.5,0),n.lineTo(s+.5,t);for(let s=32;s<t;s+=32)n.moveTo(0,s+.5),n.lineTo(e,s+.5);n.stroke()}function Yp(n,e,t,i){n.fillStyle="rgba(0,0,0,0.16)";for(let a=0;a<t;a+=4)n.fillRect(0,a,e,1);let s=n.createRadialGradient(e/2,t/2,Math.min(e,t)*.35,e/2,t/2,Math.max(e,t)*.72);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.38)"),n.fillStyle=s,n.fillRect(0,0,e,t),n.strokeStyle=i,n.lineWidth=4;let r=36,o=10;n.beginPath(),n.moveTo(o,o+r),n.lineTo(o,o),n.lineTo(o+r,o),n.moveTo(e-o-r,o),n.lineTo(e-o,o),n.lineTo(e-o,o+r),n.moveTo(e-o,t-o-r),n.lineTo(e-o,t-o),n.lineTo(e-o-r,t-o),n.moveTo(o+r,t-o),n.lineTo(o,t-o),n.lineTo(o,t-o-r),n.stroke()}function gy(n,e,t,i,s,r,o){n.fillStyle="rgba(77,107,254,0.10)",n.fillRect(0,0,e,72);let a=n.createLinearGradient(0,0,e,0);a.addColorStop(0,s),a.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=a,n.fillRect(0,70,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 34px ${Rt}`,n.fillStyle=xt.text,n.fillText(t,36,37);let l=n.measureText(t).width;n.font=`600 20px ${bt}`,n.fillStyle=xt.muted,n.fillText(i,36+l+18,39),r&&(n.textAlign="right",n.font=`700 22px ${bt}`,n.fillStyle=o||xt.muted,n.fillText(r,e-36,39))}function Ar(n,e,t,i,s,r="left"){n.textBaseline="alphabetic",n.textAlign=r,n.font=`600 22px ${Rt}`,n.fillStyle=xt.muted;let o=`${i}  `;n.fillText(o,e,t);let a=n.measureText(o).width;n.font=`600 16px ${bt}`,n.fillStyle=xt.dim,r==="left"&&n.fillText(s,e+a,t)}function xy(n,e,t,i,s,r=96,o="",a=xt.muted){if(n.textBaseline="alphabetic",n.textAlign="left",n.font=`700 ${r}px ${bt}`,n.fillStyle=s,n.shadowColor=s,n.shadowBlur=18,n.fillText(i,e,t),n.shadowBlur=0,o){let l=n.measureText(i).width;n.font=`600 ${Math.round(r*.3)}px ${bt}`,n.fillStyle=a,n.fillText(o,e+l+12,t)}}function yy(n,e,t,i,s,r,{color:o,fill:a,max:l,fmt:c,grid:u=4}){let d=r.length;n.save(),n.strokeStyle="rgba(120,160,255,0.13)",n.lineWidth=1,n.beginPath();for(let g=0;g<=u;g++){let m=Math.round(t+s*g/u)+.5;n.moveTo(e,m),n.lineTo(e+i,m)}n.stroke(),n.font=`600 17px ${bt}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="middle";for(let g=0;g<=u;g++)n.fillText(c(l*(1-g/u)),e-12,t+s*g/u);let h=g=>e+i*g/Math.max(1,d-1),f=g=>t+s-s*st(g/l,0,1);n.beginPath(),n.moveTo(h(0),t+s);for(let g=0;g<d;g++)n.lineTo(h(g),f(r[g]));n.lineTo(h(d-1),t+s),n.closePath();let p=n.createLinearGradient(0,t,0,t+s);p.addColorStop(0,a),p.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=p,n.fill(),n.beginPath();for(let g=0;g<d;g++)g?n.lineTo(h(g),f(r[g])):n.moveTo(h(g),f(r[g]));n.strokeStyle=o,n.lineWidth=3,n.shadowColor=o,n.shadowBlur=12,n.stroke(),n.restore()}function ph(n,e,t,i,s,r,o,a,l,c){n.fillStyle="rgba(40,70,140,0.18)",n.fillRect(e,t,i,s),n.fillStyle=c,n.fillRect(e,t,4,s),Ar(n,e+20,t+34,r,o),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 44px ${bt}`,n.fillStyle=xt.text,n.fillText(a,e+20,t+86),l&&(n.font=`600 18px ${bt}`,n.fillStyle=xt.muted,n.fillText(l,e+20,t+s-14))}function WT(n,e,t,i){yc(n,e,t);let s=mh[i.phase]||mh.idle;gy(n,e,"令牌流量","TOKEN FLOW",xt.cyan,`● ${s.zh} ${s.en}`,s.color),Ar(n,36,122,"实时速率","LIVE RATE"),xy(n,36,236,i.tps>=.5?i.tps.toFixed(i.tps<10?1:0):"0",xt.cyan,104,"tok/s"),Ar(n,36,300,"本会话峰值","PEAK"),n.font=`700 30px ${bt}`,n.fillStyle=xt.text,n.textAlign="left",n.fillText(`${Math.round(i.peakTps)} tok/s`,36,340);let r=my(Math.max(20,...i.tpsHist)*1.15,GT);yy(n,470,104,e-470-40,236,i.tpsHist,{color:xt.cyan,fill:"rgba(90,209,255,0.32)",max:r,fmt:u=>String(Math.round(u))}),n.font=`600 17px ${bt}`,n.fillStyle=xt.dim,n.textAlign="right",n.textBaseline="alphabetic",n.fillText("近 60 秒 · LAST 60 s",e-40,96);let o=(e-72-48)/4,a=372,l=128,c=i.totals;ph(n,36,a,o,l,"输入","INPUT",ln(c.miss+c.write),"未命中缓存 · MISS",xt.blue),ph(n,36+(o+16),a,o,l,"缓存命中","CACHE HIT",ln(c.hit),`命中率 ${fs(i.hitRate)}`,xt.green),ph(n,36+(o+16)*2,a,o,l,"输出","OUTPUT",ln(c.output),`请求 ${c.requests}`,xt.cyan),ph(n,36+(o+16)*3,a,o,l,"推理","REASONING",ln(c.reasoning),"思考链 · THINKING",xt.violet),Yp(n,e,t,xt.cyan)}function xc(n,e,t,i,s,r,o,a,l){Ar(n,e,t,s,r),n.textAlign="left",n.textBaseline="alphabetic",n.font=`700 64px ${bt}`,n.fillStyle=l,n.shadowColor=l,n.shadowBlur=14,n.fillText(o,e,t+76),n.shadowBlur=0,a&&(n.font=`600 20px ${bt}`,n.fillStyle=xt.muted,n.fillText(a,e,t+112))}function XT(n,e,t,i){yc(n,e,t),n.fillStyle="rgba(77,107,254,0.12)",n.fillRect(0,0,e,92);let s=n.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(90,209,255,0)"),s.addColorStop(.5,xt.cyan),s.addColorStop(1,"rgba(90,209,255,0)"),n.fillStyle=s,n.fillRect(0,90,e,3),n.textBaseline="middle",n.textAlign="left",n.font=`700 46px ${Rt}`,n.fillStyle=xt.text,n.shadowColor=xt.cyan,n.shadowBlur=16,n.fillText("DSH 工作进程",40,47),n.shadowBlur=0;let r=n.measureText("DSH 工作进程").width;if(n.font=`600 22px ${bt}`,n.fillStyle=xt.muted,n.fillText("WORK PROCESS · LIVE 3D",40+r+22,50),i.demo){let _="演示数据 · DEMO DATA";n.font=`700 22px ${Rt}`;let b=n.measureText(_).width+36,y=40+r+22+n.measureText("WORK PROCESS · LIVE 3D").width+60;n.fillStyle="rgba(255,179,71,0.16)",n.fillRect(y,28,b,40),n.strokeStyle=xt.amber,n.lineWidth=2,n.strokeRect(y+1,29,b-2,38),n.fillStyle=xt.amber,n.fillText(_,y+18,49)}i.model&&(n.textAlign="right",n.font=`700 24px ${bt}`,n.fillStyle=xt.blue,n.fillText(`${i.model}${i.effort?` · ${i.effort}`:""}`,e-40,50));let o=mh[i.phase]||mh.idle,a=(e-80)/5,l=148;xc(n,40,l,a,"阶段","PHASE",o.zh,o.en,o.color),xc(n,40+a,l,a,"轮次","TURN",i.turn?`T${i.turn}`:"—",`合格 ${i.ok} · 返工 ${i.rework}`,xt.text),xc(n,40+a*2,l,a,"工具调用","TOOL CALLS",String(i.calls),`成功率 ${fs(i.toolSuccess)}`,xt.cyan),xc(n,40+a*3,l,a,"产出文件","FILES",String(i.files),`+${i.added} / −${i.removed}`,xt.gold),xc(n,40+a*4,l,a,"模型请求","REQUESTS",String(i.requests),`运行中 ${i.running}`,xt.blue);let c=330;Ar(n,40,c,"最近工具调用","RECENT TOOL CALLS");let u=24,d=8,h=(e-80-d*(u-1))/u,f=116,p=c+22,g=i.recent.slice(-u),m=u-g.length;for(let _=0;_<u;_++){let b=40+_*(h+d),y=g[_-m];if(!y){n.strokeStyle="rgba(120,160,255,0.16)",n.lineWidth=2,n.strokeRect(b+1,p+1,h-2,f-2);continue}let M=y.status==="running"?xt.cyan:y.status==="error"?xt.red:Va.has(y.kind)?xt.gold:xt.blue,w=n.createLinearGradient(0,p,0,p+f);w.addColorStop(0,M),w.addColorStop(1,"rgba(10,20,40,0.6)"),n.globalAlpha=y.status==="running"?.95:.55,n.fillStyle=w,n.fillRect(b,p,h,f),n.globalAlpha=1,n.fillStyle=M,n.fillRect(b,p+f-6,h,6);let v=_i[y.kind]||_i.generic;n.textAlign="center",n.textBaseline="middle",n.font=`700 22px ${bt}`,n.fillStyle="#ffffff",n.fillText(v.code.replace("ST-",""),b+h/2,p+f/2-6)}let x=g[g.length-1];if(x){let _=_i[x.kind]||_i.generic,b=x.status==="running"?"加工中 RUN":x.status==="error"?"故障 FAULT":"完成 DONE";n.textAlign="left",n.textBaseline="alphabetic",n.font=`600 24px ${Rt}`,n.fillStyle=xt.text;let y=String(x.label||x.name||"").slice(0,60);n.fillText(`${_.code} ${_.zh} · ${y}`,40,p+f+52),n.textAlign="right",n.font=`700 22px ${bt}`,n.fillStyle=x.status==="running"?xt.cyan:x.status==="error"?xt.red:xt.green,n.fillText(b,e-40,p+f+52)}Yp(n,e,t,xt.cyan)}function $T(n,e,t,i){yc(n,e,t),gy(n,e,"成本与上下文","COST & CONTEXT",xt.gold,i.peak?"高峰 · 全价 PEAK":"低谷 · 半价 OFF-PEAK",i.peak?xt.amber:xt.green),Ar(n,36,122,"累计花费","TOTAL COST"),xy(n,36,226,i.priced?An(i.cost):"—",xt.gold,90),n.font=`600 22px ${bt}`,n.fillStyle=xt.muted,n.textAlign="left",n.fillText(`高峰 ${An(i.costPeak)} · 低谷 ${An(i.costOff)}`,36,274),n.fillText(`请求 ${i.requests} 次`,36,310);let s=my(Math.max(.01,...i.costHist)*1.15,VT);yy(n,480,104,e-480-40,200,i.costHist,{color:xt.gold,fill:"rgba(232,196,124,0.30)",max:s,fmt:d=>An(d)}),n.font=`600 17px ${bt}`,n.fillStyle=xt.dim,n.textAlign="right",n.fillText("近 3 分钟 · LAST 3 min",e-40,96);let r=372;Ar(n,36,r,"上下文","CONTEXT"),n.textAlign="right",n.font=`700 24px ${bt}`,n.fillStyle=xt.text,n.fillText(i.window?`${ln(i.ctx)} / ${ln(i.window)} · ${fs(i.ratio)}`:"—",e-36,r);let o=36,a=e-72,l=r+16;n.fillStyle="rgba(40,70,140,0.28)",n.fillRect(o,l,a,26);let c=i.ratio>=.8?xt.red:i.ratio>=.6?xt.amber:xt.blue;n.fillStyle=c,n.shadowColor=c,n.shadowBlur=14,n.fillRect(o,l,a*st(i.ratio,0,1),26),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.35)";for(let d of[.6,.8])n.fillRect(o+a*d,l-6,2,38);let u=476;Ar(n,36,u,"缓存节省","CACHE SAVED"),n.textAlign="left",n.font=`700 30px ${bt}`,n.fillStyle=xt.green,n.fillText(i.priced?An(i.savings):"—",330,u+2),Ar(n,e/2+60,u,"缓存命中率","HIT RATE"),n.textAlign="right",n.font=`700 30px ${bt}`,n.fillStyle=xt.text,n.fillText(fs(i.hitRate),e-36,u+2),Yp(n,e,t,xt.gold)}var qT={flow:WT,main:XT,cost:$T};function vy(n,e,{demo:t=!1}={}){let i=!!t,s=new Kt;s.name="screens";let r=[],o=new wt({color:1712176,metalness:.7,roughness:.3,name:"screen-bezel"}),a=rt.screenR;for(let y of qp){let[M,w]=y.px,v=It(M,w,(k,z,I)=>yc(k,z,I),{anisotropy:8}),S=new Dt({map:v.tex,name:`screen-${y.id}`,toneMapped:!1});S.color.setScalar(1.25);let D=new et(Ht(Xe.cx,Xe.cz,a,y.a0,y.a1,y.y0,y.y1,48,!0),S);D.name=`screen-${y.id}`,D.userData.screenId=y.id,s.add(D);let T=.05/a,P=new et(Ht(Xe.cx,Xe.cz,a+.015,y.a0-T,y.a1+T,y.y0-.05,y.y1+.05,48,!0),o);P.name=`screen-bezel-${y.id}`,P.layers.set(hn),s.add(P),D.userData.noHighlight=!0,r.push({def:y,tex:v,sig:"",draw:qT[y.id],panel:D,scale:1})}let l=null,c=(y,M)=>y.tex.redraw(w=>{y.scale!==1&&w.scale(y.scale,y.scale),y.draw(w,y.def.px[0],y.def.px[1],M)}),u=new Array(fy).fill(0),d=new Array(py).fill(0),h=0,f=0,p=0,g=0,m=0,x=!1;function _(y){let M=y.state,w=y.live||{},v=y.phase||(w.phase&&w.phase!=="idle"?w.phase:M?M.phase:"idle"),S=M?M.totals:{miss:0,hit:0,write:0,output:0,reasoning:0,requests:0,cost:0,costPeak:0,costOffPeak:0,savings:0},D=M?fh(M):{hitRate:0,toolSuccess:1,contextRatio:0},T=M?M.turns:[];return{demo:i,phase:v,tps:y.tps||0,peakTps:g,tpsHist:u,costHist:d,totals:S,hitRate:D.hitRate,toolSuccess:D.toolSuccess,model:M?M.model:"",effort:M?M.effort:"",turn:M?M.turnCount:0,ok:T.filter(P=>P.status==="ok").length,rework:T.filter(P=>P.status==="rework").length,calls:M?M.tools.calls:0,running:M?M.tools.running:0,files:M?M.files.count:0,added:M?M.files.added:0,removed:M?M.files.removed:0,requests:S.requests,recent:M?M.calls:[],peak:!!y.peak,priced:!M||!M.model||!!Qs(M.provider,M.model),cost:S.cost,costPeak:S.costPeak,costOff:S.costOffPeak,savings:S.savings,ctx:M?M.contextTokens:0,window:M?M.contextWindow:0,ratio:D.contextRatio||0}}function b(y,M){if(y==="flow"){let w=M.totals;return`${M.phase}|${Math.round(M.tps*2)}|${w.miss+w.write}|${w.hit}|${w.output}|${w.reasoning}|${w.requests}|${m>0?h:"flat"}|${Math.round(M.peakTps)}`}if(y==="main"){let w=M.recent[M.recent.length-1];return`${M.demo}|${M.model}|${M.effort}|${M.phase}|${M.turn}|${M.ok}|${M.rework}|${M.calls}|${M.running}|${M.files}|${M.added}|${M.removed}|${M.requests}|${M.recent.length}|${w?`${w.id}:${w.status}`:""}|${Math.round(M.toolSuccess*1e3)}`}return`${M.cost.toFixed(5)}|${M.costPeak.toFixed(5)}|${M.savings.toFixed(5)}|${M.ctx}|${M.window}|${M.peak}|${M.requests}|${d[py-1].toFixed(5)}|${Math.round(M.hitRate*1e3)}`}return{root:s,update(y,M,w){h+=y,f+=y,p+=y;let v=w.tps||0;g=Math.max(g,v),h>=.5&&(h=0,u.shift(),u.push(v),m=v>.5?fy:Math.max(0,m-1));let S=w.state?w.state.totals.cost:0;if(!x&&w.state&&(d.fill(S),x=!0),f>=2&&(f=0,d.shift(),d.push(S)),p<.5)return;p=0;let D=_(w);l=D;for(let T of r){let P=b(T.def.id,D);P!==T.sig&&(T.sig=P,c(T,D))}},hover:r.map(y=>({id:`screen:${y.def.id}`,object:y.panel})),setDetail(y,M=2){for(let w of r){let v=w.def.id===y?M:1;if(v===w.scale)continue;let[S,D]=w.def.px,T=w.tex;w.scale=v,w.tex=It(S*v,D*v,P=>{P.scale(v,v),yc(P,S,D)},{anisotropy:8}),w.panel.material.map=w.tex.tex,w.sig="",l&&(w.sig=b(w.def.id,l),c(w,l)),T.tex.dispose()}},setDemo(y){i=!!y;for(let M of r)M.sig=""},reset(){u.fill(0),d.fill(0),g=0,m=0,x=!1;for(let y of r)y.sig=""}}}var ao=16,YT=.004,Kp=.06,gh=new ke(4164863),_y=new ke(4641535),by=new ke(16762218),KT=`
attribute float aS;
attribute float aX;
attribute float aChan;
uniform float uLevel[${ao}];
uniform float uOffset[${ao}];
uniform vec3 uColor[${ao}];
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
}`,ZT=`
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
}`;function JT(n,e,t){let i=0;for(let s=0;s<n.length-1;s++){let r=n[s],o=n[s+1],a=o[0]-r[0],l=o[1]-r[1],c=Math.hypot(a,l);if(c<1e-6)continue;let u=a/c,d=l/c,h=Kp/2,f=r[0]-u*(s===0?0:h),p=r[1]-d*(s===0?0:h),g=o[0]+u*(s===n.length-2?0:h),m=o[1]+d*(s===n.length-2?0:h),x=-d*(Kp/2),_=u*(Kp/2),b=i-(s===0?0:h),y=i+c+(s===n.length-2?0:h),M=[[f-x,p-_,b,-1],[f+x,p+_,b,1],[g+x,m+_,y,1],[g-x,m-_,y,-1]];for(let w of[0,1,2,0,2,3]){let v=M[w];t.pos.push(v[0],YT,v[1]),t.s.push(v[2]),t.x.push(v[3]),t.chan.push(e)}i+=c}}var My=n=>[n.x,n.z];function Sy(){let n={},e=[],t=[],i=(m,x,_)=>{n[m]=t.length,e.push(x),t.push(_)},s=[Ds.x,Ds.z],r=(m,x,_)=>[My(Ii(m,x)),My(Ii(m,_))];i("fuel",_y,[[-7.45,-.7],[-4.6,-.7]]),i("feed",gh,[[-3.3,-.2],[-2.62,-.2],[-2.62,1.92],[.38,1.92]]);for(let m=0;m<10;m++)i(`spoke:${m}`,gh,r(Rp(m),.95,2.12));i("lock",_y,r(Bo,.95,2.1)),i("unload",by,r($a,.95,2.1)),i("out",by,[[4.82,1.92],[8.75,1.92],[8.75,1.2]]);let o=[];for(let m=0;m<=120;m++){let x=m/120*Ut;o.push([s[0]+Math.cos(x)*4.27,s[1]-Math.sin(x)*4.27])}i("ring",gh,o);let a={pos:[],s:[],x:[],chan:[]};t.forEach((m,x)=>JT(m,x,a));let l=new Vt;l.setAttribute("position",new ht(a.pos,3)),l.setAttribute("aS",new ht(a.s,1)),l.setAttribute("aX",new ht(a.x,1)),l.setAttribute("aChan",new ht(a.chan,1)),l.computeBoundingSphere();let c=new Float32Array(ao),u=new Float32Array(ao),d=new Float32Array(ao),h=new Float32Array(ao),f=[];for(let m=0;m<ao;m++)f.push((e[m]||gh).clone());let p=new dn({name:"floor-channels",vertexShader:KT,fragmentShader:ZT,uniforms:Ld.merge([tt.fog,{uLevel:{value:c},uOffset:{value:u},uColor:{value:f}}]),transparent:!0,blending:Na,blendSrc:Kr,blendDst:Zr,blendSrcAlpha:Gu,blendDstAlpha:Kr,depthWrite:!1,fog:!0});p.uniforms.uLevel.value=c,p.uniforms.uOffset.value=u,p.uniforms.uColor.value=f;let g=new et(l,p);return g.name="floor-channels",g.renderOrder=-1,g.frustumCulled=!1,g.layers.set(hn),d.fill(.8),{root:g,ids:n,set(m,x,_){let b=n[m];b!=null&&(h[b]=x,_!=null&&(d[b]=_))},update(m){for(let x=0;x<t.length;x++)c[x]+=(h[x]-c[x])*(1-Math.exp(-4*m)),u[x]=(u[x]+d[x]*m*(.25+c[x]))%1600}}}var Zp=new C(Xe.cx,0,Xe.cz-17),ns={x0:-5,x1:5,z0:-3.3,z1:3.3,h:.06},kt=ns.h,jT=[{id:"sofa",pose:"sit",p:[-1.2,kt+.44,.85],yaw:Math.PI},{id:"bed",pose:"sleep",p:[3.25,kt+.52,1.6],yaw:-Math.PI/2},{id:"counter",pose:"eat",p:[-3.75,kt+.69,1.92],yaw:0},{id:"desk",pose:"work",p:[3.4,kt+.5,-1.45],yaw:Math.PI},{id:"window",pose:"stand",p:[.2,kt,-3],yaw:Math.PI},{id:"aquarium",pose:"stand",p:[-3.2,kt,-1.4],yaw:Math.atan2(-.8,-.6)},{id:"entry",pose:"stand",p:[-5,0,3.6],yaw:Math.atan2(3.8,-2.7)}];function QT(n,e,t){let s=t/8,r=7,o=()=>(r=r*16807%2147483647,r/2147483647);for(let a=0;a<8;a++){let l=-o()*e*.5;for(;l<e;){let c=e*(.35+o()*.4),u=.9+o()*.18;n.fillStyle=`rgb(${Math.round(196*u)}, ${Math.round(152*u)}, ${Math.round(110*u)})`,n.fillRect(l,a*s,c,s),n.strokeStyle="rgba(90, 58, 30, 0.12)",n.lineWidth=1;for(let d=0;d<5;d++){let h=a*s+s*(.15+o()*.7);n.beginPath(),n.moveTo(l,h),n.bezierCurveTo(l+c*.3,h+(o()-.5)*4,l+c*.7,h+(o()-.5)*4,l+c,h),n.stroke()}n.fillStyle="rgba(60, 38, 20, 0.45)",n.fillRect(l+c-1,a*s,2,s),l+=c}n.fillStyle="rgba(60, 38, 20, 0.5)",n.fillRect(0,a*s,e,2)}}function eA(n,e,t){let i=e/2,s=t/2;n.fillStyle="#26345a",n.fillRect(0,0,e,t);let r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#34477a"),r.addColorStop(1,"#1d2846"),n.fillStyle=r,n.fillRect(0,0,e,t),n.strokeStyle="rgba(150, 215, 255, 0.55)";for(let[o,a]of[[.46,6],[.4,2],[.22,3],[.08,2]])n.lineWidth=a,n.beginPath(),n.arc(i,s,e*o,0,Ut),n.stroke();n.fillStyle="rgba(150, 215, 255, 0.4)";for(let o=0;o<48;o++){let a=o/48*Ut;n.beginPath(),n.arc(i+Math.cos(a)*e*.31,s+Math.sin(a)*e*.31,3,0,Ut),n.fill()}}function tA(n,e,t,i){n.clearRect(0,0,e,t),n.fillStyle="rgba(6, 18, 40, 0.78)",n.fillRect(0,0,e,t),n.strokeStyle="rgba(70, 210, 255, 0.9)",n.lineWidth=3,n.strokeRect(4,4,e-8,t-8),n.fillStyle="#7fe3ff",n.font=`700 26px ${Rt}`,n.textBaseline="top",n.fillText(`${qt.living.code} · ${qt.living.zh}`,22,18),n.fillStyle="rgba(200, 236, 255, 0.85)",n.font=`600 18px ${Rt}`,n.fillText("LIVING QUARTERS · STANDBY",22,54),n.fillStyle="#e8f6ff",n.font=`700 92px ${bt}`,n.fillText(i,22,96),n.fillStyle="rgba(70, 210, 255, 0.35)";for(let s=0;s<18;s++){let r=10+s*37%41;n.fillRect(e-26-s*14,t-22-r,9,r)}}function wy(n){let e=t=>String(t).padStart(2,"0");return`${e(n.getHours())}:${e(n.getMinutes())}`}function vc(n,e,t,i,s,r=0){let o=new Kt;o.name=`solid-${n}`,o.position.set(s[0],0,s[2]),o.rotation.y=r,o.userData.solid=`living:${n}`;let a=new et(new tn(e,t,i),Ey);return a.position.y=t/2,o.add(a),o}var Ey=new Dt({visible:!1});function Ty(n){let e=new Kt;e.name="living",e.position.copy(Zp);let t=It(512,512,QT,{repeat:[3,2],anisotropy:8}),i=It(512,512,eA,{anisotropy:8}),s={wood:new wt({name:"living-wood",color:16777215,map:t.tex,roughness:.52,metalness:0}),woodDark:new wt({name:"living-wood-dark",color:7227948,roughness:.55}),fabric:new wt({name:"living-fabric",color:15262940,roughness:.92}),fabricBlue:new wt({name:"living-fabric-blue",color:5205432,roughness:.88}),rug:new wt({name:"living-rug",map:i.tex,roughness:1}),leaf:new wt({name:"living-leaf",color:4161359,roughness:.75}),leaf2:new wt({name:"living-leaf-light",color:6793317,roughness:.75}),soil:new wt({name:"living-soil",color:3811870,roughness:1}),sand:new wt({name:"living-sand",color:14272931,roughness:.95}),rice:new wt({name:"living-rice",color:16513264,roughness:.7}),eye:new wt({name:"living-eye",color:1118999,roughness:.3}),bookA:new wt({name:"living-book-a",color:4020904,roughness:.7}),bookB:new wt({name:"living-book-b",color:13137466,roughness:.7}),bookC:new wt({name:"living-book-c",color:15327951,roughness:.7}),bookD:new wt({name:"living-book-d",color:3111538,roughness:.7}),warm:_p(16766624,2.8),cyan:_p(4641535,2.4),white:n.white,ceramic:n.ceramic,chrome:n.chrome,alu:n.alu,graphite:n.graphite,blue:n.blue,rubber:n.rubber},r=new ft,o=(O,G,K=[0,0,0],q=[0,0,0],ae=[1,1,1])=>r.add(O,N(G,K,q,ae)),a=ns.x1-ns.x0,l=ns.z1-ns.z0;o("wood",Le(a,ns.h,l,.02,2),[0,ns.h/2,0]),o("warm",Te(a-.1,.006,.012),[0,.004,ns.z0-.004]),o("warm",Te(a-.1,.006,.012),[0,.004,ns.z1+.004]),o("rug",new Hn(1.85,64),[-1.2,kt+.004,-.35],[-Math.PI/2,0,0]);{let O=[-1.2,kt,.9],G=(q,ae,fe)=>[O[0]+q,O[1]+ae,O[2]+fe];o("fabric",Le(3,.28,.95,.08,3),G(0,.22,0));for(let q of[-1,0,1])o("fabric",Le(.97,.16,.8,.07,3),G(q,.44,-.06)),o("fabric",Le(.97,.44,.2,.09,3),G(q,.68,.36),[-.14,0,0]);for(let q of[-1.6,1.6])o("fabric",Le(.2,.5,.95,.08,3),G(q,.33,0));o("fabricBlue",Le(.5,.36,.14,.06,3),G(-.95,.66,.2),[-.3,.25,0]),o("fabricBlue",Le(.5,.36,.14,.06,3),G(.35,.66,.2),[-.3,-.2,0]);for(let q of[-1.42,1.42])for(let ae of[-.38,.38])o("chrome",ce(.025,.02,.08,10),G(q,.04,ae));o("warm",Te(2.7,.004,.7),G(0,.002,0));let K=G(.92,.6,-.05);o("blue",Bi(1,20,14),K,[0,.3,0],[.24,.17,.16]),o("white",Bi(1,16,10),[K[0]+.02,K[1]-.05,K[2]-.03],[0,.3,0],[.18,.1,.12]),o("blue",Bi(1,12,8),[K[0]-.26,K[1]+.07,K[2]-.1],[0,.3,.6],[.08,.025,.12]),o("blue",Bi(1,10,8),[K[0]+.05,K[1]-.02,K[2]-.17],[.5,0,0],[.07,.02,.05]),o("eye",Bi(.016,10,8),[K[0]+.16,K[1]+.03,K[2]-.12]),o("eye",Bi(.016,10,8),[K[0]+.2,K[1]+.03,K[2]+.03])}{let O=[-1.2,kt,-.7];o("white",ce(.52,.52,.035,48),[O[0],O[1]+.4,O[2]]),o("chrome",ce(.05,.08,.36,20),[O[0],O[1]+.2,O[2]]),o("chrome",ce(.28,.3,.025,32),[O[0],O[1]+.012,O[2]]);let G=[O[0]+.16,O[1]+.418,O[2]+.08];o("white",hi([[0,0],[.045,.002],[.07,.02],[.082,.05],[.085,.056],[.078,.056],[.072,.03],[.04,.012],[0,.012]],28),G),o("rice",Bi(1,20,10),[G[0],G[1]+.05,G[2]],[0,0,0],[.072,.028,.072]),o("woodDark",Te(.22,.008,.008),[G[0]+.02,G[1]+.08,G[2]-.02],[0,.3,.12]),o("woodDark",Te(.22,.008,.008),[G[0]+.02,G[1]+.08,G[2]+.01],[0,.2,.12]),o("blue",ce(.038,.034,.09,20),[O[0]-.22,O[1]+.462,O[2]-.12])}{let O=[-3.15,kt,1.45];o("chrome",ce(.2,.22,.04,32),[O[0],O[1]+.02,O[2]]),r.add("chrome",fi([[O[0],O[1]+.04,O[2]],[O[0],O[1]+1.95,O[2]],[-2.3,kt+2.3,1.05],[-1.7,kt+2.05,.6]],.016,.35,10)),o("white",new Gn(.24,28,12,0,Ut,0,Math.PI/2),[-1.7,kt+1.86,.6]),o("warm",new Hn(.21,28),[-1.7,kt+1.862,.6],[Math.PI/2,0,0])}{for(let fe of[-3.35,.95])for(let ge of[-2,2])o("white",Le(.09,3,.09,.02),[fe,kt+3/2,ge]);for(let fe of[-2,2])o("white",Le(.95- -3.35+.09,.1,.1,.02),[(-3.35+.95)/2,kt+3,fe]);for(let fe of[-3.35,.95])o("white",Le(.1,.1,4,.02),[fe,kt+3,0]);for(let fe=1;fe<6;fe++){let ge=-3.35+4.3*fe/6;o("alu",Te(.05,.06,4-.1),[ge,kt+3+.02,0])}for(let fe of[-2+.06,2-.06])o("warm",Te(.95- -3.35-.1,.012,.025),[(-3.35+.95)/2,kt+3-.056,fe])}{let O=[3.35,kt,1.6],G=(q,ae,fe)=>[O[0]+q,O[1]+ae,O[2]+fe];o("white",Le(2.3,.26,1.4,.1,3),G(0,.23,0)),o("warm",Te(2.1,.004,1.2),G(0,.002,0)),o("fabric",Le(2.12,.17,1.26,.07,3),G(0,.44,0)),o("fabricBlue",Le(1.3,.05,1.28,.03,2),G(.36,.535,0)),o("fabric",Le(.44,.11,.82,.05,3),G(-.78,.58,0)),o("white",Le(.09,.56,1.36,.03,2),G(-1.13,.64,0));let K=new Fn(.74,.74,1.38,40,1,!0,Math.PI/2,Math.PI);o("ceramic",K,G(-.45,.36,0),[Math.PI/2,0,0]),o("warm",Te(.03,.012,1.22),G(-.45,.36+.725,0))}{o("white",Le(1.85,.86,.62,.03,2),[-3.8,kt+.45,2.62]),o("graphite",Te(1.8,.06,.56),[-3.8,kt+.03,2.62+.02]),o("wood",Le(1.92,.045,.68,.015,2),[-3.8,kt+.905,2.62]),o("ceramic",Le(.7,1.95,.64,.04,2),[-2.5,kt+.975,2.62]),o("chrome",Te(.02,.6,.03),[-2.2,kt+1.2,2.62-.33]),o("wood",Te(1.8,.04,.28),[-3.8,kt+1.72,2.62+.17]);for(let[K,q,ae]of[[-4.45,.18,"white"],[-4.25,.14,"ceramic"],[-4.07,.2,"white"]])o(ae,ce(.06,.06,q,18),[K,kt+1.74+q/2,2.62+.17]);o("soil",ce(.08,.06,.12,16),[-3.2,kt+1.8,2.62+.17]),o("leaf2",Bi(.14,12,8),[-3.2,kt+1.95,2.62+.17],[0,0,0],[1,.8,1]);let G=[-4,kt+.93,2.62-.04];o("white",ce(.16,.15,.2,36),[G[0],G[1]+.1,G[2]]),o("graphite",hi([[.155,0],[.16,.02],[.13,.06],[.06,.08],[0,.082]],36),[G[0],G[1]+.2,G[2]]),o("chrome",ce(.012,.012,.02,10),[G[0]+.05,G[1]+.29,G[2]]),o("graphite",Te(.08,.03,.03),[G[0],G[1]+.29,G[2]-.02]);for(let K of[-4.4,-3.75])o("fabricBlue",ce(.18,.18,.06,28),[K,kt+.66,1.92]),o("chrome",ce(.025,.025,.6,12),[K,kt+.33,1.92]),o("chrome",ce(.2,.22,.025,28),[K,kt+.012,1.92]),o("chrome",new Ci(.16,.012,8,28),[K,kt+.25,1.92],[Math.PI/2,0,0])}let c=$t(4641535,1.6),u=new et(Te(.035,.012,.006),c);u.position.set(-4,kt+1.07,2.42),e.add(u);{let O=[3.4,kt,-2.05];o("white",Le(1.6,.04,.72,.015,2),[O[0],O[1]+.74,O[2]]);for(let K of[-.76,.76])o("white",Le(.04,.72,.64,.015,2),[O[0]+K,O[1]+.36,O[2]]);o("cyan",Te(1.5,.006,.012),[O[0],O[1]+.718,O[2]-.35]),o("graphite",Le(.48,.02,.16,.008,2),[O[0]-.1,O[1]+.77,O[2]+.12]),o("chrome",ce(.012,.014,.3,10),[O[0],O[1]+.91,O[2]-.22]),o("chrome",ce(.07,.08,.012,20),[O[0],O[1]+.766,O[2]-.22]);let G=[O[0],O[1],O[2]+.62];o("fabricBlue",Le(.5,.08,.48,.04,2),[G[0],G[1]+.48,G[2]]),o("fabricBlue",Le(.5,.52,.07,.04,2),[G[0],G[1]+.82,G[2]+.24],[.1,0,0]),o("chrome",ce(.025,.025,.4,12),[G[0],G[1]+.24,G[2]]);for(let K=0;K<5;K++){let q=K/5*Ut;o("graphite",Te(.32,.03,.04),[G[0]+Math.cos(q)*.16,G[1]+.04,G[2]+Math.sin(q)*.16],[0,-q,0]),o("rubber",Bi(.025,10,8),[G[0]+Math.cos(q)*.31,G[1]+.025,G[2]+Math.sin(q)*.31])}}let d=wy(new Date),h=It(512,288,(O,G,K)=>tA(O,G,K,d),{anisotropy:8}),f=new Dt({name:"living-holo",map:h.tex,transparent:!0,depthWrite:!1,toneMapped:!1,side:jt});f.color.setScalar(1.3);let p=new et(new yt(.88,.495),f);p.position.set(3.4,kt+1.3,-2.27),p.rotation.x=-.08,p.renderOrder=3,e.add(p);let g=new C(-4,kt,-2.05);o("white",ce(.5,.53,.36,48),[g.x,g.y+.18,g.z]),o("chrome",ce(.48,.48,.03,48),[g.x,g.y+.375,g.z]),o("sand",ce(.44,.44,.07,40),[g.x,g.y+.425,g.z]),o("chrome",ce(.48,.48,.03,48),[g.x,g.y+1.52,g.z]),o("cyan",new Ci(.47,.008,6,64),[g.x,g.y+.4,g.z],[Math.PI/2,0,0]);for(let[O,G,K,q]of[[.18,.1,.42,"leaf"],[-.2,-.12,.3,"leaf2"],[.05,-.25,.36,"leaf"]])o(q,ce(.012,.03,K,6),[g.x+O,g.y+.46+K/2,g.z+G],[.15,0,.1]);let m=new et(ce(.445,.445,1.05,40),new wt({name:"living-water",color:7128319,emissive:1929168,emissiveIntensity:.55,roughness:.1,metalness:0,transparent:!0,opacity:.32,depthWrite:!1}));m.position.set(g.x,g.y+.97,g.z),m.renderOrder=1,e.add(m);let x=new et(ce(.47,.47,1.12,48,!0),n.glass);x.position.set(g.x,g.y+.96,g.z),x.renderOrder=2,e.add(x);let _=(()=>{let O=N(new Gn(1,12,8),[0,0,0],[0,0,0],[.05,.026,.018]),G=N(new Ws(.022,.04,6),[-.062,0,0],[0,0,Math.PI/2],[1,1,.35]),K=new Vt,q=[O,G].map(ge=>ge.toNonIndexed()),ae=[],fe=[];for(let ge of q)ae.push(...ge.attributes.position.array),fe.push(...ge.attributes.normal.array);K.setAttribute("position",new ht(ae,3)),K.setAttribute("normal",new ht(fe,3));for(let ge of q)ge.dispose();return O.dispose(),G.dispose(),K})(),b=[{r:.28,y:.75,s:.5,ph:0,c:16747069},{r:.2,y:1.05,s:-.65,ph:1.4,c:16777215},{r:.32,y:1.25,s:.42,ph:2.6,c:5082111},{r:.16,y:.9,s:.8,ph:3.9,c:16760909},{r:.25,y:1.38,s:-.48,ph:5.1,c:16738922},{r:.3,y:.62,s:-.38,ph:.7,c:10479871}],y=new qn(_,new wt({name:"living-fish",roughness:.4,metalness:.1}),b.length);y.name="aquarium-fish",y.frustumCulled=!1;let M=new ke;b.forEach((O,G)=>y.setColorAt(G,M.setHex(O.c))),e.add(y);let w=new _t,v=new mn,S=new C,D=new C(1,1,1),T=new $n;function P(O){b.forEach((G,K)=>{let q=G.ph+O*G.s;S.set(g.x+Math.cos(q)*G.r,g.y+G.y+Math.sin(O*.9+G.ph)*.03,g.z-Math.sin(q)*G.r),T.set(0,q+(G.s>0?Math.PI/2:-Math.PI/2),Math.sin(O*3+K)*.08),v.setFromEuler(T),w.compose(S,v,D),y.setMatrixAt(K,w)}),y.instanceMatrix.needsUpdate=!0}P(0);{let O=[.6,kt,3.02],G=3.6,K=.42;o("graphite",Te(G,.9,.03),[O[0],O[1]+.45,O[2]+K/2-.015]),o("white",Te(G,.04,K),[O[0],O[1]+.02,O[2]]),o("white",Te(G-.04,.03,K-.02),[O[0],O[1]+.45,O[2]]),o("white",Le(G+.02,.05,K+.02,.015,2),[O[0],O[1]+.9,O[2]]);for(let ge of[-G/2+.015,-.9,0,.9,G/2-.015])o("white",Te(.03,.88,K),[O[0]+ge,O[1]+.45,O[2]]);let q=["bookA","bookB","bookC","bookD"],ae=[-G/2+.03,-.885,.015,.915],fe=0;for(let ge=0;ge<2;ge++)ae.forEach((oe,Pe)=>{if((Pe+ge)%3===2)return;let Ye=O[0]+oe+.02,Fe=5+(Pe*3+ge)%5;for(let Ze=0;Ze<Fe;Ze++){let $e=.04+fe*7%5*.008,pe=(ge?.3:.32)-fe*11%4*.025;o(q[fe%4],Te($e,pe,.24),[Ye+$e/2,O[1]+(ge?.465:.04)+pe/2,O[2]+.02]),Ye+=$e+.004,fe+=1}});o("graphite",Le(.34,.26,.03,.01,2),[O[0]-.9,O[1]+1.055,O[2]+.05]),o("cyan",Te(.3,.22,.002),[O[0]-.9,O[1]+1.055,O[2]+.034]),o("white",ce(.09,.07,.14,18),[O[0]+1.1,O[1]+.97,O[2]]),o("leaf",Bi(.15,12,8),[O[0]+1.1,O[1]+1.15,O[2]],[0,0,0],[1,.9,1])}for(let[O,G,K]of[[-4.55,.4,1],[4.55,-.35,.85],[1.55,2.55,.7]])o("white",ce(.27*K,.21*K,.5*K,28),[O,kt+.25*K,G]),o("soil",ce(.25*K,.25*K,.02,24),[O,kt+.49*K,G]),[[0,.95,0,.36],[.16,1.2,.08,.28],[-.14,1.28,-.06,.3],[.02,1.5,.05,.24],[-.04,1.12,.18,.22]].forEach(([ae,fe,ge,oe],Pe)=>o(Pe%2?"leaf2":"leaf",Bi(oe*K,12,8),[O+ae*K,kt+fe*K,G+ge*K],[0,0,0],[1,.85,1])),o("woodDark",ce(.02*K,.03*K,.6*K,6),[O,kt+.75*K,G]);let k=[-5.35,0,3.4],z=Math.atan2(-.7,.7);o("white",Le(.5,1.4,.12,.03,2),[k[0],.7,k[2]],[0,z,0]),o("cyan",Te(.012,1.3,.13),[k[0]+Math.cos(z)*.26,.7,k[2]-Math.sin(z)*.26],[0,z,0]);let I=qt.living,V=es(I.zh,I.en,I.code),ne=new et(new yt(.46,.13),Jn(V.tex,.2));ne.position.set(k[0]+Math.sin(z)*.062,1.12,k[2]+Math.cos(z)*.062),ne.rotation.y=z,e.add(ne);let te=r.build(s,{castShadow:!1,receiveShadow:!0,name:"living"});e.add(te),e.add(vc("bed",2.4,1.15,1.45,[3.35,0,1.6]),vc("kitchen",2.6,1.98,.72,[-3.45,0,2.62]),vc("aquarium",1.08,1.56,1.08,[g.x,0,g.z]),vc("bookshelf",3.62,.95,.46,[.6,0,3.02]),vc("desk",1.62,1.6,.8,[3.4,0,-2.05]));let ie=new et(new tn(ns.x1-ns.x0,1.2,ns.z1-ns.z0),Ey);ie.position.set(0,.6,0),ie.name="living-hover",e.add(ie);let J=jT.map(O=>{let G=new gn;return G.name=`mascot-anchor:${O.id}`,G.position.fromArray(O.p),G.rotation.y=O.yaw,G.userData={mascotAnchor:O.id,pose:O.pose},e.add(G),{id:O.id,pose:O.pose,position:new C().fromArray(O.p).add(Zp),yaw:O.yaw}}),Y=0;return{root:e,anchors:J,hover:[{id:"living",object:ie}],labelAnchor:new C(0,3.55,0).add(Zp),update(O,G){if(P(G),c.emissiveIntensity=1.2+.6*(.5+.5*Math.sin(G*1.7)),Y-=O,Y<=0){Y=1;let K=wy(new Date);K!==d&&(d=K,h.redraw())}},dispose(){_.dispose(),y.dispose()}}}var Ay=Mr.find(n=>n.id==="dock"),Fs=new C(Ay.c[0],0,Ay.c[1]),Wi=8,lo=1.82,oi=.12,Rr=1.3,_c=.24,is=.42,nA=.074,co=1.96,iA=2.46,xh=[512,240],Ry=1.16,Jp=3,jp={inner:{r:1.1,y:2.66,speed:-.34},outer:{r:1.66,y:3.02,speed:.24}},Cy=3.4,sA=2.4,Py=8,er=.13,rA=.058,Vo=(n,e)=>new ke(n).multiplyScalar(e),Wn={standby:Vo(3829700,.55),reserved:Vo(4641535,.7),transit:Vo(8363263,2),running:Vo(4641535,2.4),done:Vo(3461498,2.3),error:Vo(16731486,2.3),stopped:Vo(10990018,1.3)},oA=new Set(["done","error","stopped"]),vh=n=>n/Wi*Ut+Math.PI/Wi;function aA(n,e,t=new C){let i=vh(n);return t.set(Fs.x+Math.cos(i)*Rr,e,Fs.z+Math.sin(i)*Rr)}function yh(n){let e=n.map(i=>{let s=i.index?i.toNonIndexed():i;for(let r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&s.deleteAttribute(r);return s});return e.length===1?e[0]:Hd(e,!1)}function lA(){let n=[N(Bi(.1,32,16),[0,0,0],[0,0,0],[1,.38,1.2])],e=[],t=[],i=[],s=[];for(let[r,o]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let a=Math.atan2(r,o);e.push(N(Te(.024,.014,Math.hypot(er,er)),[r*er/2,.004,o*er/2],[0,a,0])),t.push(N(ce(.019,.022,.03,20),[r*er,.012,o*er])),e.push(N(Te(.13,.003,.012),[r*er,.03,o*er],[0,a+.6,0])),s.push(new C(r*er,.032,o*er))}e.push(N(ce(.07,.062,.024,32),[0,-.03,0]));for(let r of[-1,1]){e.push(N(Te(.012,.01,.2),[r*.062,-.066,0]));for(let o of[-1,1])e.push(N(Te(.008,.036,.008),[r*.062,-.047,o*.06]))}for(let r of[-1,1])e.push(N(Te(.056,.012,.014),[0,.04,r*.042]));return i.push(N(Jt(.102,.0042,6,64),[0,-.004,0],[Math.PI/2,0,0],[1,1.2,1])),i.push(N(Te(.05,.008,.006),[0,.006,.121])),{shell:yh(n),under:yh(e),hub:yh(t),led:yh(i),rotor:N(new Hn(.075,32),[0,0,0],[-Math.PI/2,0,0]),capGlass:N(new Ea(.027,.085,6,16),[0,0,0],[Math.PI/2,0,0]),capCore:N(new Ea(.015,.07,4,12),[0,0,0],[Math.PI/2,0,0]),hubs:s}}function cA(){return It(64,64,(n,e,t)=>{let i=n.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.3,"rgba(255,255,255,0.06)"),i.addColorStop(.8,"rgba(255,255,255,0.45)"),i.addColorStop(.94,"rgba(255,255,255,0.18)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,t),n.fillStyle=i,n.fillRect(0,0,e,t)},{anisotropy:1})}function uA(n,e,t,i){n.clearRect(0,0,e,t),ji(n,3,3,e-6,t-6,18),n.fillStyle="rgba(5, 12, 24, 0.84)",n.fill(),n.lineWidth=2.5,n.strokeStyle="rgba(70, 210, 255, 0.75)",n.stroke();let s=qt.dock;n.textBaseline="alphabetic",n.textAlign="left",n.font=`600 22px ${Rt}`,n.fillStyle="#86a7c9",n.fillText(`${s.code} · ${s.zh}`,22,40),n.textAlign="right",n.font=`600 18px ${bt}`,n.fillText("SUBAGENT DOCK",e-22,40),n.textAlign="left";let r=String(i.running);n.font=`700 74px ${bt}`,n.fillStyle=i.running?"#e8f0ff":"#6f84a3",n.fillText(r,22,122);let o=n.measureText(r).width;n.font=`700 28px ${Rt}`,n.fillStyle=i.running?"#46d2ff":"#7d90ab",n.fillText(i.running?"运行中":"待命",36+o,92),n.font=`600 18px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(i.running?"AGENTS ACTIVE":"STANDBY",36+o,119),n.textAlign="right",n.font=`700 30px ${bt}`,n.fillStyle=i.done?"#34d17a":"#5d7391",n.fillText(`✓ ${i.done}`,e-22,86),n.fillStyle=i.failed?"#ff6b7a":"#5d7391",n.fillText(`✗ ${i.failed}`,e-22,122),n.textAlign="left";let a=172;if(i.wf){let{name:l,phase:c,done:u,failed:d,agents:h,status:f}=i.wf,p=`${f==="running"?"▶":"■"} ${l}${c?` · ${c}`:""}`;n.fillStyle="#e8f0ff",Qi(n,p,e-150,23,600,Rt),n.fillText(p,22,a),n.textAlign="right",n.font=`600 22px ${bt}`,n.fillStyle="#9fb7d3",n.fillText(`${u+d}/${h}`,e-22,a);let g=22,m=a+15,x=e-44,_=10;n.fillStyle="rgba(120, 150, 190, 0.25)",ji(n,g,m,x,_,5),n.fill();let b=h?st(u/h,0,1):0,y=h?st(d/h,0,1-b):0;b>0&&(n.fillStyle="#34d17a",n.fillRect(g,m,x*b,_)),y>0&&(n.fillStyle="#ff6b7a",n.fillRect(g+x*b,m,x*y,_))}else{let l=i.last?`最近 · ${i.last}`:"暂无子智能体任务 · NO AGENTS YET";n.fillStyle=i.last?"#c9d6ea":"#7d90ab",Qi(n,l,e-44,23,600,Rt),n.fillText(l,22,a)}i.overflow>0&&(n.textAlign="right",n.font=`700 20px ${bt}`,n.fillStyle="#ffc65c",n.fillText(`+${i.overflow} 排队 QUEUED`,e-22,t-18))}function dA(n,e){let t=new ft;t.add("rubber",N(ce(lo-.05,lo-.05,.02,96),[0,.01,0])),t.add("white",hi([[.001,.02],[lo-.02,.02],[lo,.04],[lo,oi-.025],[lo-.025,oi],[.001,oi]],128)),t.add("plastic",N(ce(.62,.62,.006,72),[0,oi+.003,0])),t.add("chrome",N(Jt(.62,.005,8,112),[0,oi+.003,0],[Math.PI/2,0,0]));for(let d=0;d<Wi;d++){let h=vh(d),f=Math.atan2(Math.cos(h),Math.sin(h)),p=(g,m)=>[Math.cos(h)*g,m,Math.sin(h)*g];t.add("plastic",N(Te(.012,.004,.36),p(.83,oi+.002),[0,f,0])),t.add("graphite",N(ce(.05,.065,is-oi-.03,24),p(Rr,(oi+is-.03)/2))),t.add("white",N(hi([[.001,is-.035],[_c-.012,is-.035],[_c,is-.024],[_c,is-.008],[_c-.012,is],[.001,is]],48),p(Rr,0))),t.add("plastic",N(ce(.15,.15,.003,40),p(Rr,is+.0015))),t.add("chrome",N(Jt(.15,.003,6,48),p(Rr,is+.002),[Math.PI/2,0,0]));for(let g of[-1,1]){let m=[-Math.sin(h)*.062*g,0,Math.cos(h)*.062*g],x=p(Rr,is+.005);t.add("chrome",N(ce(.012,.012,.008,12),[x[0]+m[0],x[1],x[2]+m[2]]))}}t.add("white",hi([[.001,oi],[.24,oi],[.24,oi+.05],[.2,oi+.075],[.095,oi+.11],[.085,1],[.072,co-.09],[.11,co-.05],[.11,co],[.001,co]],64)),t.add("chrome",N(Jt(.24,.005,8,72),[0,oi+.05,0],[Math.PI/2,0,0])),t.add("graphite",N(ce(.091,.093,.16,48),[0,.86,0])),t.add("chrome",N(Jt(.112,.006,8,64),[0,co-.05,0],[Math.PI/2,0,0])),t.add("glass",N(ce(.07,.07,.02,40),[0,co+.01,0]));let i=lo-.2;t.add("white",N(Le(.52,.26,.14,.03,2),[0,oi+.13,i],[-.32,0,0])),t.add("graphite",N(Te(.4,.08,.1),[0,oi+.04,i-.01]));let s=t.build(n,{name:"dock-deck"}),r=new ft;r.add("led",N(Jt(lo-.035,.005,6,192),[0,oi+.001,0],[Math.PI/2,0,0])),r.add("led",N(ce(.086,.086,.03,48,!0),[0,1.42,0])),r.add("led",N(ce(.06,.06,.012,32),[0,co+.002,0]));let o=r.build({led:e},{name:"dock-glow",castShadow:!1}),a=es(qt.dock.zh,qt.dock.en,qt.dock.code,"#2fa8d8"),l=new et(new yt(.44,.124),Jn(a.tex,.2)),c=.32,u=.072;return l.position.set(0,oi+.13+Math.sin(c)*u,i+Math.cos(c)*u),l.rotation.x=-c,l.name="dock-plate",{deck:s,glowMesh:o,plateMesh:l,plate:a}}function Wo(n,e,t,i){let s=new qn(n,e,t);return s.name=i,s.instanceMatrix.setUsage(Pd),s.castShadow=!1,s.receiveShadow=!1,s.frustumCulled=!1,s}function Iy(n,{pickup:e=null}={}){let t=new Kt;t.name="dock",t.position.copy(Fs);let i=$t(4641535,2),{deck:s,glowMesh:r,plateMesh:o,plate:a}=dA(n,i),l=new Kt;l.name="dock-base",l.userData.solid="dock",l.add(s,r,o),t.add(l);let c=new Dt({color:16777215,toneMapped:!1}),u=new qn(N(Jt(.205,.0065,6,64),[0,0,0],[Math.PI/2,0,0]),c,Wi);u.name="dock-pad-leds",u.castShadow=!1;let d=new _t;for(let A=0;A<Wi;A++){let j=vh(A);d.makeTranslation(Math.cos(j)*Rr,is+.004,Math.sin(j)*Rr),u.setMatrixAt(A,d),u.setColorAt(A,Wn.standby)}t.add(u);let h=It(xh[0],xh[1],null,{anisotropy:8}),f=new Dt({map:h.tex,transparent:!0,depthWrite:!1,side:jt,name:"dock-holo"});f.color.setScalar(1.25);let p=new et(new yt(Ry,Ry*xh[1]/xh[0]),f);p.position.set(0,iA,0),p.renderOrder=3,p.name="dock-holo",t.add(p);let g=lA(),m=cA(),x={rotor:new Dt({color:15134197,map:m.tex,transparent:!0,opacity:.55,depthWrite:!1,side:jt}),led:new Dt({color:16777215,toneMapped:!1}),capGlass:zi({color:14674421,opacity:.16,fresnel:.6}),capCore:new Dt({color:16777215,toneMapped:!1})},_=new Kt;_.name="dock-drones";let b={shell:Wo(g.shell,n.white,Wi,"drone-shell"),under:Wo(g.under,n.graphite,Wi,"drone-frame"),hub:Wo(g.hub,n.chrome,Wi,"drone-hubs"),led:Wo(g.led,x.led,Wi,"drone-leds"),rotor:Wo(g.rotor,x.rotor,Wi*4,"drone-rotors"),capGlass:Wo(g.capGlass,x.capGlass,Wi,"drone-capsule"),capCore:Wo(g.capCore,x.capCore,Wi,"drone-capsule-core")};b.rotor.renderOrder=2,b.capGlass.renderOrder=2;for(let A of Object.values(b))_.add(A);let y=new C(Fs.x,co+.03,Fs.z),M=new Float32Array(Wi*6),w=new Vt;w.setAttribute("position",new ii(M,3).setUsage(Pd));let v=new Vr({color:Wn.running.clone().multiplyScalar(.7),transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}),S=new So(w,v);S.name="dock-links",S.frustumCulled=!1,_.add(S);let D=Array.from({length:Wi},(A,j)=>{let xe=aA(j,is+nA),L=vh(j);return{i:j,park:xe,parkYaw:Math.atan2(Math.cos(L),Math.sin(L)),mode:"docked",t:0,agent:null,status:null,order:0,viaPickup:!1,snap:!1,p:xe.clone(),v:new C,acc:new C,target:new C,tv:new C,orbit:null,yaw:Math.atan2(Math.cos(L),Math.sin(L)),pitch:0,roll:0,spin:0,carry:0,carryTo:0,flash:0,capColor:Wn.running.clone(),freeSince:-j,landedAt:0}}),T=new et(new Fn(1.9,1.9,3.5,24),new Dt({visible:!1}));T.position.set(0,1.75,0),T.name="dock-hover",t.add(T);let P=!0,k=0,z=0,I=0,V=[],ne=[],te="",ie=1,J={inner:0,outer:.7};function Y(){let A=null;for(let j of D)j.mode==="docked"&&(!A||j.freeSince<A.freeSince)&&(A=j);if(A)return A;for(let j of D)j.mode==="result"&&(!A||j.landedAt<A.landedAt)&&(A=j);return A}function O(A,j,xe){A.agent={id:j.id,label:j.label||j.name||"",kind:j.kind,runId:j.runId||""},A.status="running",A.order=++z,A.capColor.copy(Wn.running),A.t=0,xe?(A.mode="work",A.snap=!0,A.carry=A.carryTo=1,A.spin=1):(A.mode="launch",A.viaPickup=!!e,A.carryTo=e?0:1,e||(A.carry=0))}function G(A,j,xe){if(A.status=oA.has(j)?j:"done",A.capColor.copy(Wn[A.status]),A.t=0,xe){q(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.spin=0;return}A.carryTo=1,A.mode=A.mode==="launch"&&A.p.y<A.park.y+.3?"land":"return"}function K(A){A.status="running",A.capColor.copy(Wn.running),A.carryTo=1,A.viaPickup=!1,A.t=0,A.mode=A.mode==="return"?"toWork":"launch"}function q(A){A.mode="docked",A.agent=null,A.status=null,A.carry=A.carryTo=0,A.freeSince=k}function ae(A,j){V=Array.isArray(A)?A:[],ne=Array.isArray(j)?j:[];let xe=P;P=!1;let L=new Map(V.map(E=>[E.id,E]));for(let E of D){if(!E.agent)continue;let Q=L.get(E.agent.id);if(Q&&Q.status==="running"){E.agent.label=Q.label||Q.name||E.agent.label,E.status!=="running"&&K(E);continue}E.status==="running"&&G(E,Q?Q.status:"done",xe)}fe(xe)}function fe(A){let j=new Set;for(let xe of D)xe.agent&&xe.status==="running"&&j.add(xe.agent.id);I=0;for(let xe of V){if(!xe||xe.status!=="running"||j.has(xe.id))continue;let L=Y();if(!L){I+=1;continue}L.agent&&q(L),O(L,xe,A),j.add(xe.id)}}function ge(){for(let A of D)q(A),A.p.copy(A.park),A.v.set(0,0,0),A.yaw=A.parkYaw,A.pitch=A.roll=0,A.spin=0,A.flash=0,A.landedAt=0,A.freeSince=-A.i;P=!0,I=0,V=[],ne=[],ie=1}function oe(){let A=0,j=0,xe=0,L=0;for(let ve of V)ve.status==="running"?A+=1:ve.status==="done"?j+=1:ve.status==="error"?xe+=1:ve.status==="stopped"&&(L+=1);let E=null;for(let ve=ne.length-1;ve>=0;ve--){let _e=ne[ve];if(_e.status==="running"){E=_e;break}E||(E=_e)}let Q="";for(let ve=V.length-1;ve>=0&&!Q;ve--)V[ve].status==="running"&&(Q=V[ve].label||V[ve].name||"");if(!Q&&V.length){let ve=V[V.length-1];Q=ve.label||ve.name||""}return{running:A,done:j,failed:xe,stopped:L,overflow:I,wf:E,last:Q}}function Pe(){let A=oe(),j=A.wf,xe=`${A.running}|${A.done}|${A.failed}|${A.overflow}|${A.last}|${j?`${j.runId}:${j.status}:${j.phase}:${j.done}:${j.failed}:${j.agents}`:""}`;xe!==te&&(te=xe,h.redraw((L,E,Q)=>uA(L,E,Q,A)))}let Ye=new C,Fe=new C,Ze=new C;function $e(A){for(let j of["inner","outer"]){let xe=jp[j],L=D.filter(Q=>(Q.mode==="work"||Q.mode==="toWork")&&(Q.agent&&Q.agent.kind==="workflow"?"inner":"outer")===j).sort((Q,ve)=>Q.agent.runId===ve.agent.runId?Q.order-ve.order:Q.agent.runId<ve.agent.runId?-1:1),E=L.length;L.forEach((Q,ve)=>{let _e=J[j]+Ut*ve/Math.max(1,E),Ne=A*1.5+Q.i*1.7,ze=xe.y+(ve%2?.12:0)+.05*Math.sin(Ne);Q.orbit=Q.orbit||new C,Q.orbit.set(Fs.x+Math.cos(_e)*xe.r,ze,Fs.z+Math.sin(_e)*xe.r),Q.tv.set(-Math.sin(_e)*xe.r*xe.speed,.075*Math.cos(Ne),Math.cos(_e)*xe.r*xe.speed)})}}function pe(A,j,xe){let L=Math.max(1,Math.ceil(j/.02)),E=j/L;A.acc.set(0,0,0);for(let Q=0;Q<L;Q++){Fe.subVectors(A.tv,A.v).multiplyScalar(2*xe),Ye.subVectors(A.target,A.p).multiplyScalar(xe*xe).add(Fe),A.v.addScaledVector(Ye,E);let ve=A.v.length();ve>Cy&&A.v.multiplyScalar(Cy/ve),A.p.addScaledVector(A.v,E),A.acc.add(Ye)}A.acc.multiplyScalar(1/L)}function X(A,j,xe){A.t+=j;let L=2.6;switch(A.mode!=="work"&&A.mode!=="toWork"&&A.tv.set(0,0,0),A.mode){case"docked":case"result":A.target.copy(A.park);break;case"launch":A.target.set(A.park.x,Jp,A.park.z),A.p.y>Jp-.3&&(A.mode=A.viaPickup?"toPickup":"toWork",A.t=0);break;case"toPickup":{let ze=Math.hypot(A.p.x-e.x,A.p.z-e.z)>.7;A.target.set(e.x,ze?Jp:e.y,e.z),!ze&&A.p.distanceTo(e)<.14&&(A.mode="pickup",A.t=0);break}case"pickup":A.target.copy(e),L=3.2,A.t>.25&&A.carryTo<1&&(A.carryTo=1,A.flash=1),A.t>.9&&(A.mode="toWork",A.t=0);break;case"toWork":case"work":A.orbit&&A.target.copy(A.orbit),L=A.mode==="work"?3:2.6,A.snap&&(A.p.copy(A.target),A.v.set(0,0,0),A.snap=!1),A.mode==="toWork"&&A.p.distanceTo(A.target)<.3&&(A.mode="work",A.t=0);break;case"return":A.target.set(A.park.x,A.park.y+.9,A.park.z),A.p.distanceTo(A.target)<.2&&(A.mode="land",A.t=0);break;case"land":A.target.copy(A.park),L=2.2,A.p.distanceTo(A.park)<.012&&A.v.length()<.08&&(A.mode="result",A.t=0,A.landedAt=k,A.p.copy(A.park),A.v.set(0,0,0));break;default:break}A.mode==="docked"||A.mode==="result"?(A.p.lerp(A.park,1-Math.exp(-10*j)),A.v.set(0,0,0),A.acc.set(0,0,0)):(pe(A,j,L),Math.hypot(A.p.x-A.park.x,A.p.z-A.park.z)<_c+.1&&A.p.y<A.park.y&&(A.p.y=A.park.y)),A.mode==="result"&&(A.t>sA&&(A.carryTo=0),A.t>Py&&q(A));let E=Math.hypot(A.v.x,A.v.z),Q=A.mode==="docked"||A.mode==="result"||A.mode==="land",ve=E>.25?Math.atan2(A.v.x,A.v.z):Q?A.parkYaw:A.yaw;A.yaw=oc(A.yaw,ve,1-Math.exp(-(Q?3:4.5)*j)),Ze.set(Math.sin(A.yaw),0,Math.cos(A.yaw));let _e=A.acc.x*Ze.x+A.acc.z*Ze.z,Ne=A.acc.x*Ze.z-A.acc.z*Ze.x;A.pitch=Zt(A.pitch,st(_e*.045,-.32,.32),6,j),A.roll=Zt(A.roll,st(-Ne*.045,-.32,.32),6,j),A.spin=Zt(A.spin,A.mode==="docked"||A.mode==="result"?0:1,4,j),A.carry=Zt(A.carry,A.carryTo,A.carryTo>A.carry?7:4,j),A.carry<.002&&A.carryTo===0&&(A.carry=0),A.flash=Math.max(0,A.flash-j*2.2)}let U=new mn,se=new mn,$=new $n(0,0,0,"YXZ"),Ce=new C(1,1,1),Re=new C,H=new C(0,rA,0),me=new _t,be=new _t,F=new ke;function ot(A,j,xe){switch(A.mode){case"docked":return xe.copy(Wn.standby);case"work":return xe.copy(Wn.running).multiplyScalar(.85+.25*Math.sin(j*4+A.i));case"launch":case"toPickup":case"pickup":case"toWork":return xe.copy(A.status==="running"?Wn.transit:Wn[A.status]||Wn.transit);default:return xe.copy(Wn[A.status]||Wn.standby)}}function pt(A,j,xe){if(A.mode==="result"){let L=st(1-A.t/Py,0,1);return xe.copy(Wn[A.status]||Wn.done).multiplyScalar(.35+.65*L)}return A.mode==="docked"?xe.copy(Wn.standby).multiplyScalar(.85+.15*Math.sin(j*.8+A.i*.7)):A.mode==="launch"&&A.t<1.2?xe.copy(Wn.running):xe.copy(Wn.reserved)}function vt(A){for(let j of D){$.set(j.pitch,j.yaw,j.roll,"YXZ"),U.setFromEuler($),be.compose(j.p,U,Ce),b.shell.setMatrixAt(j.i,be),b.under.setMatrixAt(j.i,be),b.hub.setMatrixAt(j.i,be),b.led.setMatrixAt(j.i,be);let xe=Math.max(1e-4,j.spin);for(let E=0;E<4;E++)me.compose(g.hubs[E],se,Re.set(xe,1,xe)),me.premultiply(be),b.rotor.setMatrixAt(j.i*4+E,me);me.compose(H,se,Re.setScalar(Math.max(1e-4,j.carry))),me.premultiply(be),b.capGlass.setMatrixAt(j.i,me),b.capCore.setMatrixAt(j.i,me),b.led.setColorAt(j.i,ot(j,A,F)),b.capCore.setColorAt(j.i,F.copy(j.capColor).multiplyScalar(1+2.5*j.flash)),u.setColorAt(j.i,pt(j,A,F));let L=j.i*6;if(j.mode==="work"||j.mode==="toWork")M[L]=y.x,M[L+1]=y.y,M[L+2]=y.z,M[L+3]=j.p.x,M[L+4]=j.p.y-.03,M[L+5]=j.p.z;else for(let E=0;E<6;E++)M[L+E]=y.getComponent(E%3)}for(let j of Object.values(b))j.instanceMatrix.needsUpdate=!0,j.instanceColor&&(j.instanceColor.needsUpdate=!0);u.instanceColor.needsUpdate=!0,w.attributes.position.needsUpdate=!0}for(let A of D)b.led.setColorAt(A.i,Wn.standby),b.capCore.setColorAt(A.i,Wn.running);vt(0);let Ie=()=>D.some(A=>A.mode!=="docked"&&!(A.mode==="result"&&A.carry===0&&A.carryTo===0));return{root:t,fleet:_,hover:[{id:"dock",object:T}],labelAnchor:new C(Fs.x,3.75,Fs.z),sync:ae,reset:ge,counts:oe,drones:()=>D.map(A=>({mode:A.mode,agent:A.agent?A.agent.id:null,status:A.status,position:A.p.clone(),carry:A.carry})),busy:()=>Ie(),update(A,j,xe){let L=Math.min(Math.max(A,0),.1);k+=L,J.inner+=jp.inner.speed*L,J.outer+=jp.outer.speed*L,I>0&&D.some(Q=>Q.mode==="docked"||Q.mode==="result")&&fe(!1),$e(j);for(let Q of D)X(Q,L,j);if(vt(j),ie+=L,ie>=.25&&(ie=0,Pe()),xe){let Q=Math.atan2(xe.position.x-Fs.x,xe.position.z-Fs.z);p.rotation.y=oc(p.rotation.y,Q,1-Math.exp(-5*L))}let E=.35+.1*Math.sin(j*3.1);v.opacity=E},dispose(){for(let A of Object.values(b))A.dispose();u.dispose();for(let A of[g.shell,g.under,g.hub,g.led,g.rotor,g.capGlass,g.capCore])A.dispose();for(let A of Object.values(x))A.dispose();m.tex.dispose(),h.tex.dispose(),a.tex.dispose(),w.dispose(),v.dispose(),i.dispose(),c.dispose()}}}var uo=.3,e0=.65,hA=Math.PI*2,qa=.16/rt.screenR,Qp=rt.top+.05,_h=rt.back+.05,Ly=.1;function bh(n,e,t,i,s,r,o){return{kind:"sector",block:"ray",id:n,r0:e,r1:t,a0:i,a1:s,y0:r,y1:o}}var Dy=[bh("media-wall",12.36,_h,rt.a0-qa,rt.a1+qa,0,Qp),bh("media-modules",11.78,_h,rt.a0-qa,rt.a1+qa,0,2.34),bh("media-cap-right",11.78,_h,rt.a0-qa,rt.a0,0,Qp),bh("media-cap-left",11.78,_h,rt.a1,rt.a1+qa,0,Qp)],t0=(n,e)=>{let t=Math.atan2(-e,n);return t<0?t+hA:t};function Mh(n,e,t){n.x=Xe.cx+t*Math.cos(e),n.z=Xe.cz-t*Math.sin(e)}var ei=new C,Ny=new C,Oy=new C,Qn=new C;function Xo(n,e,t){if(n.kind==="sector"){if(e.y<n.y0-t||e.y>n.y1+t)return!1;let i=e.x-Xe.cx,s=e.z-Xe.cz,r=Math.hypot(i,s);if(r<n.r0-t||r>n.r1+t)return!1;let o=t0(i,s),a=t/Math.max(r,.001);return o>=n.a0-a&&o<=n.a1+a}return ei.copy(e).applyMatrix4(n.inv),ei.x>=n.min.x-t&&ei.x<=n.max.x+t&&ei.z>=n.min.z-t&&ei.z<=n.max.z+t&&ei.y>=n.min.y-t&&ei.y<=n.max.y+t}function ky(n,e,t){if(n.kind==="sector"){let u=e.x-Xe.cx,d=e.z-Xe.cz,h=Math.max(.001,Math.hypot(u,d)),f=t0(u,d),p=t/h,g=h-(n.r0-t),m=n.r1+t-h,x=h*(f-(n.a0-p)),_=h*(n.a1+p-f),b=n.y1+t-e.y,y=Math.min(g,m,x,_,b);y===g?Mh(e,f,Math.max(0,n.r0-t-1e-4)):y===m?Mh(e,f,n.r1+t+1e-4):y===x?Mh(e,n.a0-(t+1e-4)/h,h):y===_?Mh(e,n.a1+(t+1e-4)/h,h):e.y=n.y1+t+1e-4;return}ei.copy(e).applyMatrix4(n.inv);let s=ei.x-(n.min.x-t),r=n.max.x+t-ei.x,o=ei.z-(n.min.z-t),a=n.max.z+t-ei.z,l=n.max.y+t-ei.y,c=Math.min(s,r,o,a,l);c===s?ei.x=n.min.x-t-1e-4:c===r?ei.x=n.max.x+t+1e-4:c===o?ei.z=n.min.z-t-1e-4:c===a?ei.z=n.max.z+t+1e-4:ei.y=n.max.y+t+1e-4,e.copy(ei).applyMatrix4(n.mat)}function fA(n,e,t,i,s){Ny.copy(e).applyMatrix4(n.inv),Oy.copy(t).transformDirection(n.inv);let r=0,o=i;for(let a of["x","y","z"]){let l=n.min[a]-s,c=n.max[a]+s,u=Ny[a],d=Oy[a];if(Math.abs(d)<1e-9){if(u<l||u>c)return 1/0;continue}let h=(l-u)/d,f=(c-u)/d;if(h>f&&([h,f]=[f,h]),r=Math.max(r,h),o=Math.min(o,f),r>o)return 1/0}return r}function Fy(n,e,t,i){let s=n.x-Xe.cx,r=n.z-Xe.cz,o=e.x*e.x+e.z*e.z;if(i.length=0,o<1e-12)return i;let a=2*(s*e.x+r*e.z),l=s*s+r*r-t*t,c=a*a-4*o*l;if(c<0)return i;let u=Math.sqrt(c),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return d>1e-6&&i.push(d),h>1e-6&&i.push(h),i}function Uy(n){let e=[];if(!n)return e;n.updateMatrixWorld(!0);let t=new _t,i=new Ri,s=r=>{if(r.userData&&r.userData.solid){let o=new _t().copy(r.matrixWorld).invert(),a=new Ri;if(r.traverse(l=>{!l.isMesh||!l.geometry||l.isInstancedMesh||l.userData.noSolid||l.material&&l.material.blending===Nn||(l.geometry.boundingBox||l.geometry.computeBoundingBox(),t.multiplyMatrices(o,l.matrixWorld),i.copy(l.geometry.boundingBox).applyMatrix4(t),a.union(i))}),!a.isEmpty()){let l=Number(r.userData.solidInset)||0;l&&a.expandByVector(Qn.set(-l,0,-l)),e.push({kind:"obb",block:"end",id:typeof r.userData.solid=="string"?r.userData.solid:r.name||"solid",mat:r.matrixWorld.clone(),inv:o,min:a.min.clone(),max:a.max.clone()})}return}for(let o of r.children)s(o)};return s(n),e}function By(n=[]){let e=[...Dy,...n],t=[];function i(u,d,h=null){for(let f of e)if(f!==h&&Xo(f,u,d))return f;return null}function s(u,d=null){up(u,d);for(let h=0;h<4;h++){let f=!1;for(let p of e)Xo(p,u,uo)&&(ky(p,u,uo),f=!0);if(!f)return u;up(u,d)}return d&&eo(d)&&!i(d,uo-.001)&&u.copy(d),u}function r(u,d=e0){for(let h=0;h<3;h++){let f=!1;for(let p of e)p.block==="ray"&&Xo(p,u,d)&&(ky(p,u,d),f=!0);if(!f)break}return u}function o(u,d){let h=1/0;Fy(u,d,ri.r,t);for(let f of t)h=Math.min(h,f);return d.y>1e-9?h=Math.min(h,(ri.yMax-u.y)/d.y):d.y<-1e-9&&(h=Math.min(h,(ri.yMin-u.y)/d.y)),Math.max(0,h)}function a(u,d,h,f=uo,p=!0){let g=h;if(!(g>0))return 0;let m=0;for(let x=Ly;m<g;x+=Ly){let _=Math.min(x,g);if(Qn.copy(u).addScaledVector(d,_),l(Qn,f,u)){let b=m,y=_;for(let M=0;M<7;M++){let w=(b+y)/2;Qn.copy(u).addScaledVector(d,w),l(Qn,f,u)?y=w:b=w}g=b;break}m=_}if(!p)return Math.max(0,g);Qn.copy(u).addScaledVector(d,g);for(let x of e){if(x.block!=="end"||!Xo(x,Qn,f)||Xo(x,u,0))continue;let _=fA(x,u,d,g,f);_<g&&(g=_)}return Math.max(0,g)}function l(u,d,h){for(let f of e)if(f.block==="ray"&&Xo(f,u,d)&&!Xo(f,h,d))return!0;return!1}function c(u,d,h=200){let f=h;if(d.y<-1e-6){let p=-u.y/d.y;p>0&&p<f&&(Qn.copy(u).addScaledVector(d,p),Vg(Qn.x,Qn.z)<0&&Gg(Qn.x,Qn.z)>0&&(p=(-Ot.depth-u.y)/d.y),p>0&&p<f&&(f=p))}if(d.y>1e-6){let p=(Xe.h-u.y)/d.y;p>0&&p<f&&(f=p)}for(let p of[Xe.r,rt.screenR,rt.back]){Fy(u,d,p,t);for(let g of t)if(!(g>=f)){if(Qn.copy(u).addScaledVector(d,g),p!==Xe.r){let m=t0(Qn.x-Xe.cx,Qn.z-Xe.cz);if(m<rt.a0||m>rt.a1||Qn.y<0||Qn.y>rt.top)continue}else if(Qn.y<0||Qn.y>Xe.h)continue;f=g}}return f<h?f:1/0}return{get solids(){return e},setObjects(u){e=[...Dy,...u||[]]},contains:(u,d=uo)=>!!i(u,d),resolve:s,keepClear:r,containerExit:o,armLength:a,surfaceHit:c}}var pA={overview:{pos:[.6,7,16.2],target:[.6,2,-1.5]},fuel:{pos:[-5.6,2.7,4.4],target:[-7.6,1.4,-.4]},engine:{pos:[-1.8,2.9,4.8],target:[-3.9,1.2,-.5]},stations:{pos:[2.6,6.2,6.6],target:[2.6,.9,-1.2]},dock:{pos:[-1,3.3,-6.6],target:[-5.3,1.8,-5]},products:{pos:[6.1,2.9,5.6],target:[8.3,1.1,.4]},balcony:{pos:[.5,1.7,23.4],target:[-7,-.4,41.8],mode:"look"},living:{pos:[5.6,3.3,-14.6],target:[.5,.9,-17.2]}},mA={low:null,medium:{scale:.3,strength:.62,blur:.7,every:2},high:{scale:.5,strength:.7,blur:.45,every:1},ultra:{scale:.65,strength:.72,blur:.3,every:1}},gA=.15;function xA(n,e){n.updateMatrixWorld(!0);let t=new ki,i=0;return n.traverse(s=>{!s.isMesh||s.isInstancedMesh||!(s.layers.mask&1)||!s.geometry.attributes.position||(s.geometry.boundingSphere||s.geometry.computeBoundingSphere(),t.copy(s.geometry.boundingSphere).applyMatrix4(s.matrixWorld),!(t.radius>=e)&&(s.layers.set(hn),i+=1))}),i}var yA=[10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4,1e5],zy={loading:"读取中 · loading","signed-out":"未登录账户 · not signed in","no-host":"重启 DSH 后显示 · restart DSH",failed:"查询失败 · query failed",unavailable:"余额不可用 · balance unavailable"};function Hy(n,e,{environment:t=!0,demo:i=!1,look:s=io,brightness:r=_n.initial}={}){let o=!!i,a=new Mo;a.background=null;let l=bp(s),c=st(r,_n.min,_n.max),u=t?n:null,d=mA[e]||null,h=u?d:null,f=h?Yg(u,h):null,{M:p,tex:g}=Fg(e),m=ux(p,g,e,{renderer:u,look:l,reflection:f,beamTarget:new C(bn.x,3,bn.z)});function x(){a.environment=m.envTexture,a.environmentIntensity=l.envIntensity}x();let _=Zx(g),b=Mx(p),y=Ix(p),M=zx(p),w=Xx(p,_),v=jx(p),S=Yx(p,v),D=vy(p,null,{demo:o}),T=Sy(),P=Ty(p),k=w.byKind.robot,z=Iy(p,{pickup:k?Ii(k.theta,Er+.55,2.45):null}),I=new Kt;I.name="wafers",a.add(m.root,T.root,D.root,b.root,y.root,M.root,w.root,S.root,P.root,z.root,z.fleet,_.root,I);let V=ty({cell:M,stations:w,stocker:S,engine:y,wafers:v,root:I}),ne=d?xA(a,gA):0,te={frame:0,matrix:new _t,proj:new _t,ready:!1},ie=Uy(a),J=[];for(let U of[...b.hover,...y.hover,...M.hover,...w.list.flatMap(se=>se.hover),...S.hover,...z.hover,...P.hover,...D.hover])U.object.userData.hoverId=U.id,J.push(U.object);let Y=[{id:"tank",anchor:b.anchors.tank},{id:"engine",anchor:y.anchors.engine},{id:"robot",anchor:M.anchors.robot.clone().setY(1.75)},...w.list.map(U=>({id:`station:${U.kind}`,anchor:U.anchor,accent:U.accent,near:6.5})),{id:"loadport",anchor:S.anchors.loadPort.clone().setY(1.55)},{id:"stocker",anchor:S.anchors.stocker.clone().setY(1.25)},{id:"dock",anchor:z.labelAnchor},{id:"living",anchor:P.labelAnchor}],O={phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"unavailable"},G={state:null,live:O,tps:0,peak:!1},K={activity:0,tps:0,model:"",phase:"idle"},q=null,ae=0,fe=!1,ge=0,oe=0,Pe=0,Ye=1,Fe=Tr(Date.now());function Ze(){Fe=Tr(Date.now());let U=q?Qs(q.provider,q.model):null,se=typeof O.balance=="number"?O.balance:null,$=O.currency==="USD"?"$":"¥",Ce=[o?{text:"燃料 · 示例余额   DEMO",size:30,color:"#ffc65c",weight:700,gap:50}:{text:"燃料 · 账户余额   FUEL",size:30,color:"#7f9cff",weight:700,gap:50}];if(se==null)Ce.push({text:"— —",size:88,color:"#8c97ad",weight:700,mono:!0,gap:108}),Ce.push({text:zy[O.balanceStatus]||zy.unavailable,size:28,color:"#8c97ad",gap:56});else{Ce.push({text:`${$} ${se.toFixed(2)}`,size:92,color:"#e9f0ff",weight:700,mono:!0,gap:108});let Re=O.currency==="USD"?0:lh(se,U,Fe);Ce.push({text:U&&Re?`≈ ${ln(Re)} tokens · ${U.id}`:"当前模型未计价 · unpriced",size:30,color:"#9fb2d8",gap:56})}Ce.push({text:Fe?"高峰 · 全价   PEAK":"低谷 · 半价   OFF-PEAK",size:34,color:Fe?"#ffb020":"#34d17a",weight:700,gap:72}),b.setReadout(Ce)}function $e(){let U=typeof O.balance=="number"?O.balance:null;if(U==null)return .5;ge=Math.max(ge,U);let se=yA.find($=>$>=ge*1.25)||ge*1.25;return st(U/se,0,1)}function pe(U,se,$){let Ce=V.activity();T.set("fuel",.1+.9*se,.7+oe/28),T.set("feed",Ce.inbound>0?1:.1+.55*se,1.5),T.set("lock",Ce.inbound>0?.9:.08,-1.4);for(let Re of w.list)T.set(`spoke:${Re.index}`,Re.active?1:.06,1.2);T.set("unload",Ce.outbound>0?.9:.08,1.4),T.set("out",Ce.outbound>0||Ce.stocker?.9:.08,1.4),T.set("ring",Ce.robot?.75:$!=="idle"?.4:.22,.8),T.update(U)}function X(U){return U==="reasoning"||U==="generating"||U==="thinking"?.35+.65*st(oe/70,0,1):U==="tool"?.2:0}return{scene:a,key:m.key,presets:pA,labelAnchors:Y,solids:ie,mascotAnchors:P.anchors,screenDefs:qp,setScreenDetail:(U,se=2)=>D.setDetail(U,se),get post(){return{...l.post,exposure:l.exposure*c}},getLook:()=>l.id,setLook(U){let se=bp(U);return se===l?!1:(l=se,m.setLook(l),x(),!0)},getBrightness:()=>c,setBrightness(U){c=st(Number(U)||_n.initial,_n.min,_n.max)},setState(U){U&&(q&&U.tools.errors>ae&&(fe=!0),ae=U.tools.errors,q=U,V.sync(U),z.sync(U.agents,U.workflows),w.setStats(U),Ye=Math.max(Ye,.45))},setLive(U){U&&Object.assign(O,U)},isDemo:()=>o,setDemo(U){o!==!!U&&(o=!!U,D.setDemo(o),Ye=1)},resetState(){q=null,ae=0,fe=!1,ge=0,V.reset(),z.reset(),w.setStats(null),D.reset(),Ye=1},labelState(U){if(U.startsWith("station:")){let se=w.byKind[U.slice(8)],$=se?se.status():"idle";return $==="idle"?"":$}return U==="dock"&&z.counts().running>0?"working":""},busy(){return V.busy()||z.busy()||_.busy()||O.phase&&O.phase!=="idle"||oe>1},dockInfo:()=>z.counts(),update(U,se,$){oe=Zt(oe,O.tps||0,6,U),Ye+=U,Ye>=.5&&(Ye=0,Ze());let Ce=q?q.totals:{miss:0,hit:0,output:0,reasoning:0,cost:0},Re=O.phase&&O.phase!=="idle"?O.phase:O.running===!1?"idle":q?q.phase:"idle",H=oe>.5?st(.2+oe/90,0,1):0;Pe=Zt(Pe,X(Re),1.6,U),K.activity=Pe,K.tps=oe,K.model=q?q.model:"",K.phase=Re,m.update(U,se,K),b.update(U,se,{level:$e(),flow:H,peak:Fe}),y.update(U,se,{phase:Re,tps:oe,ctx:q&&q.contextWindow>0?q.contextTokens/q.contextWindow:0,counters:{miss:Ce.miss,hit:Ce.hit,output:Ce.output,reasoning:Ce.reasoning,cost:Ce.cost},errorPulse:fe}),fe=!1,V.update(U,se),_.update(U),z.update(U,se,$),$&&w.face($),P.update(U,se),pe(U,H,Re),G.state=q,G.phase=Re,G.tps=oe,G.peak=Fe,D.update(U,se,G)},prerender(U){!f||(te.frame+=1,(te.ready&&te.matrix.equals(U.matrixWorld)&&te.proj.equals(U.projectionMatrix)||h.every>1)&&te.ready&&te.frame%2===1)||(f.update(a,U),te.matrix.copy(U.matrixWorld),te.proj.copy(U.projectionMatrix),te.ready=!0)},reflectionInfo:()=>d?{...d,trimmed:ne,active:!!f}:null,hoverTargets(){return S.hoverObjects(J.slice())},focus:U=>V.focus(U),stats:()=>V.stats(),dispose(){V.dispose(),S.dispose(),z.dispose(),P.dispose(),m.dispose(),Og(a),v.dispose(),f&&f.dispose();for(let U of Object.values(p))U&&U.dispose&&U.dispose();for(let U of Object.values(g))U&&U.dispose&&U.dispose()}}}var vA=new yr(-1,1,1,-1,0,1),n0=class extends Vt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},_A=new n0,Sh=class{constructor(e){this._mesh=new et(_A,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var bA=`
precision highp float;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,MA=`
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
}`,SA=`
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
}`,wA=`
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
}`,EA=`
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
}`;function Gy(n,e,t={}){let i=new ui(Math.max(1,n),Math.max(1,e),{type:Pi,minFilter:In,magFilter:In,depthBuffer:!1,stencilBuffer:!1,...t});return i.texture.generateMipmaps=!1,i}function wh(n,e,t={}){return new Ca({vertexShader:bA,fragmentShader:n,uniforms:e,depthTest:!1,depthWrite:!1,...t})}function Vy(n,{msaa:e=0,bloom:t=!0,levels:i=5}={}){let s=new Sh(null),r=Gy(2,2,{samples:e,depthBuffer:!0}),o=[];if(t)for(let h=0;h<i;h++)o.push(Gy(2,2));let a=wh(MA,{tSrc:{value:null},uTexel:{value:new Ae},uThreshold:{value:1},uKnee:{value:.45}}),l=wh(SA,{tSrc:{value:null},uTexel:{value:new Ae}}),c=wh(wA,{tSrc:{value:null},uTexel:{value:new Ae},uWeight:{value:1}},{blending:Nn,transparent:!0}),u=wh(EA,{tScene:{value:r.texture},tBloom:{value:t?o[0].texture:null},uBloom:{value:.16},uVignette:{value:.32},uGrain:{value:.012},uTime:{value:0},toneMappingExposure:{value:1}});t&&(u.defines={USE_BLOOM:""});function d(h,f){n.setRenderTarget(f),s.material=h,s.render(n)}return{sceneTarget:r,setSize(h,f){r.setSize(Math.max(1,h),Math.max(1,f));let p=Math.max(1,Math.floor(h/2)),g=Math.max(1,Math.floor(f/2));for(let m of o)m.setSize(p,g),p=Math.max(1,Math.floor(p/2)),g=Math.max(1,Math.floor(g/2))},set({bloomStrength:h,threshold:f,knee:p,vignette:g,grain:m,exposure:x}={}){h!=null&&(u.uniforms.uBloom.value=h),f!=null&&(a.uniforms.uThreshold.value=f),p!=null&&(a.uniforms.uKnee.value=p),g!=null&&(u.uniforms.uVignette.value=g),m!=null&&(u.uniforms.uGrain.value=m),x!=null&&(u.uniforms.toneMappingExposure.value=x)},render(h,f,p=0){let g=n.autoClear;if(n.autoClear=!1,n.setRenderTarget(r),n.clear(!0,!0,!1),n.render(h,f),o.length){a.uniforms.tSrc.value=r.texture,a.uniforms.uTexel.value.set(1/r.width,1/r.height),d(a,o[0]);for(let m=1;m<o.length;m++){let x=o[m-1];l.uniforms.tSrc.value=x.texture,l.uniforms.uTexel.value.set(1/x.width,1/x.height),d(l,o[m])}for(let m=o.length-2;m>=0;m--){let x=o[m+1];c.uniforms.tSrc.value=x.texture,c.uniforms.uTexel.value.set(1/x.width,1/x.height),d(c,o[m])}}u.uniforms.uTime.value=p,d(u,null),n.autoClear=g},dispose(){r.dispose();for(let h of o)h.dispose();a.dispose(),l.dispose(),c.dispose(),u.dispose(),s.dispose()}}}var Eh=1.6;function Wy(n,e){let t=Math.tan(jr.degToRad(n/2));return{tv:t,th:t*Math.max(.2,e)}}var i0=n=>Math.atan2(-Math.cos(n),Math.sin(n)),s0=(n,e)=>n.a-e/rt.screenR;function Xy(n,e,t){let{tv:i,th:s}=Wy(e,t),r=n.a1-n.a0,o=rt.screenR,a=2*o*Math.sin(r/2),l=o*(1-Math.cos(r/2)),c=n.y1-n.y0;return st(Math.max(l+a/2*1.08/s,l+c/2*1.22/i),Eh+.4,16)}function $y(n,e,t,i){let{tv:s,th:r}=Wy(t,i);return{u:Math.max(0,(n.a1-n.a0)*rt.screenR/2-e*r*.9),v:Math.max(0,(n.y1-n.y0)/2-e*s*.9)}}function qy(n,e,t,i,s=new C){return to(s0(n,e),rt.screenR-i,(n.y0+n.y1)/2+t,s)}var Th=85*Math.PI/180,TA=1.65,AA=3.2,RA=2.6,CA={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r",KeyE:"u",PageUp:"u",KeyQ:"d",PageDown:"d"};function Yy(n,e,t={}){let{keyTarget:i=null,clampPosition:s=oe=>oe,floorY:r=0,onStart:o=null,onChange:a=null,reducedMotion:l=()=>!1}=t,c=!1,u=0,d=0,h=new $n(0,0,0,"YXZ"),f=new Set,p=!1,g=new C,m=new C,x=0,_=null,b=null,y=0,M=new C,w=new C,v=new C,S=new C,D=new C,T=new Ao,P=new Ae;function k(){h.set(d,u,0,"YXZ"),n.quaternion.setFromEuler(h)}function z(){h.setFromQuaternion(n.quaternion,"YXZ"),u=h.y,d=st(h.x,-Th,Th),k()}function I(oe){return M.copy(n.position),D.copy(M).add(oe),n.position.copy(D),s(n.position,M),n.position.distanceTo(D)}let V=()=>{y=performance.now(),a&&a()},ne=()=>{o&&o(),V()};function te(oe){if(!c)return;if(i&&typeof document<"u"&&document.activeElement!==i)try{i.focus({preventScroll:!0})}catch{}let Pe=oe.button===2||oe.button===0&&oe.shiftKey?"pan":oe.button===0?"look":null;if(Pe){_={id:oe.pointerId,x:oe.clientX,y:oe.clientY,mode:Pe},b=null;try{e.setPointerCapture(oe.pointerId)}catch{}ne()}}function ie(oe){if(!c||!_||oe.pointerId!==_.id)return;let Pe=oe.clientX-_.x,Ye=oe.clientY-_.y;_.x=oe.clientX,_.y=oe.clientY;let Fe=Math.max(300,e.clientHeight||600);if(_.mode==="look"){let Ze=2.4/Fe;u+=Pe*Ze,d=st(d+Ye*Ze,-Th,Th),k()}else{let Ze=6/Fe;v.set(1,0,0).applyQuaternion(n.quaternion),S.copy(v).multiplyScalar(-Pe*Ze),S.y+=Ye*Ze,I(S)}V()}function J(oe){if(!(!_||oe.pointerId!==_.id)){_=null;try{e.releasePointerCapture(oe.pointerId)}catch{}V()}}function Y(oe){if(!c)return;oe.preventDefault();let Pe=oe.deltaMode===1?16:oe.deltaMode===2?400:1;x=st(x+st(-oe.deltaY*Pe*.006,-4,4),-8,8),b=null,ne()}function O(oe){if(!c)return;let Pe=e.getBoundingClientRect();P.set((oe.clientX-Pe.left)/Math.max(1,Pe.width)*2-1,-((oe.clientY-Pe.top)/Math.max(1,Pe.height))*2+1),n.updateMatrixWorld(),T.setFromCamera(P,n);let{origin:Ye,direction:Fe}=T.ray;if(Fe.y>-.02)return;let Ze=(r-Ye.y)/Fe.y;if(Ze<=0||Ze>60)return;let $e=new C().copy(Fe).multiplyScalar(Ze).add(Ye),pe=$e.x-n.position.x,X=$e.z-n.position.z,U=Math.hypot(pe,X);U>1.5&&($e.x-=pe/U*1.2,$e.z-=X/U*1.2),$e.y=r+TA;let se=$e.distanceTo(n.position);b={t:0,d:l()?.001:st(se/6,.45,1.6),p0:n.position.clone(),p1:$e},ne()}function G(oe,Pe){if(!c||oe.ctrlKey||oe.metaKey||oe.altKey)return;let Ye=oe.target;if(Ye&&(Ye.tagName==="INPUT"||Ye.tagName==="TEXTAREA"||Ye.tagName==="SELECT"||Ye.isContentEditable))return;p=!!oe.shiftKey;let Fe=CA[oe.code];Fe&&(oe.preventDefault(),oe.stopPropagation(),Pe?f.add(Fe):f.delete(Fe),Pe?(b=null,ne()):V())}let K=oe=>G(oe,!0),q=oe=>G(oe,!1),ae=()=>{f.clear(),p=!1},fe=oe=>{c&&oe.preventDefault()};e.addEventListener("pointerdown",te),e.addEventListener("pointermove",ie),e.addEventListener("pointerup",J),e.addEventListener("pointercancel",J),e.addEventListener("wheel",Y,{passive:!1}),e.addEventListener("dblclick",O),e.addEventListener("contextmenu",fe),i&&(i.addEventListener("keydown",K),i.addEventListener("keyup",q),i.addEventListener("blur",ae));function ge(oe){if(!c)return!1;let Pe=!1;if(b){b.t+=oe;let Ye=cs(Math.min(1,b.t/b.d));S.lerpVectors(b.p0,b.p1,Ye).sub(n.position),(I(S)>.02||b.t>=b.d)&&(b=null),Pe=!0}if(m.set(0,0,0),f.size&&(w.set(-Math.sin(u),0,-Math.cos(u)),v.set(Math.cos(u),0,-Math.sin(u)),f.has("f")&&m.add(w),f.has("b")&&m.sub(w),f.has("r")&&m.add(v),f.has("l")&&m.sub(v),f.has("u")&&(m.y+=1),f.has("d")&&(m.y-=1),m.lengthSq()>0&&m.normalize().multiplyScalar(AA*(p?RA:1))),g.set(Zt(g.x,m.x,9,oe),Zt(g.y,m.y,9,oe),Zt(g.z,m.z,9,oe)),g.lengthSq()>1e-6?(I(S.copy(g).multiplyScalar(oe)),Pe=!0):g.set(0,0,0),Math.abs(x)>.001){let Ye=x*(1-Math.exp(-9*oe));x-=Ye,n.getWorldDirection(w),I(S.copy(w).multiplyScalar(Ye))>.02&&(x=0),Pe=!0}else x=0;return Pe&&V(),Pe}return{get enabled(){return c},enable(){c=!0,z()},disable(){c=!1,_=null,b=null,f.clear(),g.set(0,0,0),x=0},sync:z,active(){return c&&(!!_||!!b||f.size>0||Math.abs(x)>.001||g.lengthSq()>1e-4||performance.now()-y<300)},update:ge,dispose(){e.removeEventListener("pointerdown",te),e.removeEventListener("pointermove",ie),e.removeEventListener("pointerup",J),e.removeEventListener("pointercancel",J),e.removeEventListener("wheel",Y),e.removeEventListener("dblclick",O),e.removeEventListener("contextmenu",fe),i&&(i.removeEventListener("keydown",K),i.removeEventListener("keyup",q),i.removeEventListener("blur",ae))}}}var r0=["orbit","look"],PA=12,IA=2,$o=["low","medium","high","ultra"],Ya=["auto",30,60,120,0],bc={low:{dpr:1,msaa:0,bloom:!1,minScale:.7},medium:{dpr:1,msaa:2,bloom:!0,minScale:.7},high:{dpr:1.25,msaa:4,bloom:!0,minScale:.7},ultra:{dpr:1.5,msaa:4,bloom:!0,minScale:.75}},LA=60,DA=30,Ky=150*(Math.PI/180),NA=.8,Zy=30,OA=.45,Jy=.0013,kA=14,FA=7,UA=.25,BA=/nvidia|geforce|quadro|rtx|gtx|radeon\s*(\(tm\)\s*)?(rx|pro)\b|arc\s*(\(tm\)\s*)?a\d|apple m\d+ (pro|max|ultra)/i,zA=/swiftshader|llvmpipe|softpipe|software|basic render/i;function HA(n){try{let e=n.getExtension("WEBGL_debug_renderer_info"),t=String(n.getParameter(e?e.UNMASKED_RENDERER_WEBGL:n.RENDERER)||"");if(zA.test(t))return"low";if(BA.test(t))return"high"}catch{}return"medium"}function GA(n=.24){let e=[];for(let i of[-.5,.5])for(let s of[-.5,.5])for(let r of[-.5,.5]){let o=[i,s,r];for(let a=0;a<3;a++){let l=o.slice();l[a]-=Math.sign(o[a])*n,e.push(o[0],o[1],o[2],l[0],l[1],l[2])}}let t=new Vt;return t.setAttribute("position",new ht(e,3)),t}function VA(n){let e=null;try{e=n.getExtension("EXT_disjoint_timer_query_webgl2")}catch{e=null}let t=[],i=[],s=null;return{supported:!!e,begin(){!e||s||t.length>4||(s=n.createQuery(),n.beginQuery(e.TIME_ELAPSED_EXT,s))},end(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),t.push(s),s=null)},poll(){if(!e)return;let r=n.getParameter(e.GPU_DISJOINT_EXT);for(;t.length;){let o=t[0];if(!n.getQueryParameter(o,n.QUERY_RESULT_AVAILABLE))break;let a=n.getQueryParameter(o,n.QUERY_RESULT);t.shift(),n.deleteQuery(o),r||i.push(a/1e6)}},take(){if(!i.length)return null;let r=i.reduce((o,a)=>o+a,0)/i.length;return i.length=0,r},dispose(){s&&(n.endQuery(e.TIME_ELAPSED_EXT),n.deleteQuery(s),s=null);for(let r of t)n.deleteQuery(r);t.length=0}}}function jy(n,e={}){let{onHover:t,onSelect:i,onPerf:s,onError:r,onFocus:o,onActive:a,onReady:l,onMode:c,onScreen:u,onUserCamera:d}=e,h=!!e.demo,f=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,p=!!(f&&f.matches),g=new Od({antialias:!1,powerPreference:"default",stencil:!1,alpha:!1}),m=HA(g.getContext()),x=bc[e.quality]?e.quality:m,_=Ya.includes(e.fps)?e.fps:"auto";g.setClearColor(cx,1),g.toneMapping=ql,g.toneMappingExposure=1,g.outputColorSpace=ci,g.shadowMap.type=Ro,g.shadowMap.autoUpdate=!1,g.info.autoReset=!1,g.debug.onShaderError=(B,Se,Oe,qe)=>{let Qe=B.getShaderSource(qe)||"",mt=/#define SHADER_NAME (.*)/.exec(Qe),Xt=mt&&mt[1].trim()||"shader",zs=[B.getShaderInfoLog(Oe),B.getShaderInfoLog(qe),B.getProgramInfoLog(Se)].map(Z=>(Z||"").trim()).filter(Boolean).join(`
`);console.error(`[dsh-work-process-3d] shader "${Xt}" failed to compile
${zs}`);let Jo=zs.split(`
`).find(Z=>/error/i.test(Z))||zs.split(`
`)[0]||"";r&&r("shader",`${Xt}: ${Jo}`.slice(0,220))};let b=VA(g.getContext()),y=!1,M=g.domElement;M.className="dwp3d-gl",M.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;outline:none;touch-action:none;cursor:grab;",M.setAttribute("aria-hidden","true"),n.appendChild(M);let w=document.createElement("div");w.className="dwp3d-labels",n.appendChild(w);let v=new ni(40,1,.2,9e3),S=new ni(40,1,.2,9e3);v.layers.enable(hn),S.layers.enable(hn);let D=By(),T=new Bd(v,M);T.enableDamping=!0,T.dampingFactor=.08,T.minDistance=.5,T.maxDistance=40,T.zoomToCursor=!1,T.maxPolarAngle=Ky,T.screenSpacePanning=!0,T.rotateSpeed=.7,T.zoomSpeed=.9,T.panSpeed=.8;let P=null,k=null,z=null,I=GA(),V=null,ne=null,te=0,ie=0,J=1,Y=1,O=null,G="orbit",K=!1,q,ae=0,fe=0,ge=0,oe=new C,Pe=new C,Ye=[],Fe=[],Ze=!0,$e=!1,pe=!1,X=!1,U=0,se=0,$=ko.includes(e.look)?e.look:io,Ce=st(Number(e.brightness)||_n.initial,_n.min,_n.max),Re={casters:new Map,next:0,pending:!1,lastBake:-100,bakes:0};function H(){Re.casters.clear(),Re.pending=!1,!(!P||!g.shadowMap.enabled)&&(P.scene.updateMatrixWorld(!0),P.scene.traverse(B=>{B.castShadow&&(B.isMesh||B.isPoints||B.isLine)&&Re.casters.set(B,{m:B.matrixWorld.clone(),v:B.isInstancedMesh?B.instanceMatrix.version:0})}),g.shadowMap.needsUpdate=!0,Re.lastBake=se,Re.bakes+=1)}function me(){if(!P||!g.shadowMap.enabled||se<Re.next)return;Re.next=se+.5;let B=!1;for(let[Oe,qe]of Re.casters){if(!Oe.castShadow||!Un(Oe)){Re.casters.delete(Oe),B=!0;continue}(!Oe.matrixWorld.equals(qe.m)||Oe.isInstancedMesh&&Oe.instanceMatrix.version!==qe.v)&&(Oe.castShadow=!1,Re.casters.delete(Oe),B=!0)}P.scene.traverse(Oe=>{Oe.castShadow&&!Re.casters.has(Oe)&&(Oe.castShadow=!1)}),B&&(Re.pending=!0);let Se=Re.bakes<4?.5:2;Re.pending&&se-Re.lastBake>=Se&&H()}function be(){k&&(k.dispose(),k=null),z&&(z.removeFromParent(),z.material.dispose(),z=null),P&&(P.dispose(),P=null),Re.casters.clear(),g.renderLists.dispose()}function F(){let B=bc[x];g.shadowMap.enabled=x!=="low",P=Hy(g,x,{demo:h,look:$,brightness:Ce}),z=new So(I,new Vr({color:3120127,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1,toneMapped:!1})),z.name="hover-highlight",z.matrixAutoUpdate=!1,z.frustumCulled=!1,z.renderOrder=20,z.visible=!1,z.layers.set(hn),P.scene.add(z),k=Vy(g,{msaa:B.msaa,bloom:B.bloom}),pt(),Y=1,Me(!0),V&&P.setState(V),ne&&P.setLive(ne),Xi(),D.setObjects(P.solids||[]),ge=0,Re.bakes=0,Re.next=se+.5,H(),ot()}function ot(){if(!(!P||typeof g.compileAsync!="function"))try{P.scene.updateMatrixWorld(!0);let B=g.compileAsync(P.scene,S);B&&typeof B.catch=="function"&&B.catch(()=>{})}catch{}}function pt(){!k||!P||(P.post&&k.set(P.post),k.set({grain:p?.006:.012}))}let vt=new Ae;function Ie(B,Se,Oe,qe){vt.set(B.x-Xe.cx,B.z-Xe.cz),vt.length()>Se&&(vt.setLength(Se),B.x=Xe.cx+vt.x,B.z=Xe.cz+vt.y),B.y=st(B.y,Oe,qe)}function A(B){return Ie(B,ri.targetR,ri.targetYMin,ri.targetYMax),D.keepClear(B,e0),Ie(B,ri.targetR,ri.targetYMin,ri.targetYMax),B}let j=new C;function xe(){let B=T.target;j.copy(B),A(B),(B.x!==j.x||B.y!==j.y||B.z!==j.z)&&v.position.add(j.subVectors(B,j))}function L(){let B=T.target,Se=Math.max(.001,v.position.distanceTo(B)),Oe=st((ri.yMin+.02-B.y)/Se,-1,1),qe=st((ri.yMax-.02-B.y)/Se,-1,1);T.maxPolarAngle=Math.min(Ky,Math.acos(Oe)),T.minPolarAngle=Math.min(Math.acos(qe),T.maxPolarAngle)}let E={len:0,pulled:!1,easing:!1},Q=new C;function ve(){E.len=0,E.pulled=!1,E.easing=!1}function _e(B){let Se=!1;if(G==="orbit"&&!O){let Oe=T.target;Q.subVectors(v.position,Oe);let qe=Q.length();if(qe>1e-4){Q.divideScalar(qe);let Qe=Math.min(qe,D.containerExit(Oe,Q)-.02);Qe=Math.min(Qe,D.armLength(Oe,Q,Qe,uo)),Qe=Math.max(Qe,Math.min(qe,UA)),!E.pulled||Qe<E.len?E.len=Qe:E.len=Math.min(Qe,Zt(E.len,Qe,FA,B)),E.len>qe-.001&&Qe>=qe-1e-4&&(E.len=qe),E.pulled=E.len<qe-1e-4,E.easing=E.pulled&&Qe>E.len+.001,S.position.copy(Oe).addScaledVector(Q,E.len),Se=!0}}Se||(S.position.copy(v.position),ve()),S.quaternion.copy(v.quaternion),S.updateMatrixWorld()}function Ne(){G==="orbit"&&!O&&E.pulled&&(v.position.copy(S.position),ve())}function ze(){k&&k.setSize(Math.round(te*J*Y),Math.round(ie*J*Y))}function Me(B=!1){let Se=Math.max(1,Math.floor(n.clientWidth)),Oe=Math.max(1,Math.floor(n.clientHeight)),qe=Math.min(typeof window<"u"&&window.devicePixelRatio||1,bc[x].dpr);if(!(!B&&Se===te&&Oe===ie&&qe===J)&&(te=Se,ie=Oe,J=qe,g.setPixelRatio(qe),g.setSize(Se,Oe,!1),ze(),v.aspect=S.aspect=Se/Oe,v.updateProjectionMatrix(),S.updateProjectionMatrix(),ge=0,re.def)){let Qe=Math.abs(re.td-re.fit)<.001;re.fit=Rn(re.def),Qe&&(re.td=re.fit),ai()}}function we(B){let Se=P?P.presets:null,Oe=Se&&(Se[B]||Se.overview)||{pos:[0,7,16],target:[0,2,-1]},qe=new C().fromArray(Oe.target),Qe=new C().fromArray(Oe.pos),mt=Oe.mode==="look"?"look":"orbit";if(mt==="orbit"){let Xt=st(1.7/Math.max(.3,v.aspect),1,2.3);Qe.sub(qe).multiplyScalar(Xt).add(qe),Ie(Qe,ri.r,ri.yMin,ri.yMax)}return{pos:Qe,target:qe,mode:mt}}function Ge(B,Se){let Oe=Se.x-B.x,qe=Se.y-B.y,Qe=Se.z-B.z;return{yaw:Math.atan2(-Oe,-Qe),pitch:Math.atan2(qe,Math.hypot(Oe,Qe))}}let W=new $n(0,0,0,"YXZ"),Ee=new C;function ye(B,Se){W.set(Se,B,0,"YXZ"),v.quaternion.setFromEuler(W)}function Be(B){if(B===G)return;Ne(),Ue.log=0;let Se=G==="screen";G=B,B==="look"?(K=!1,T.enabled=!1,li.enable()):B==="screen"?(K=!1,T.enabled=!1,li.disable()):(li.disable(),T.enabled=!0),w.style.visibility=B==="screen"?"hidden":"",Se&&qo(),c&&c(B)}function He(){let B=eo(v.position)==="hall";if(Be("orbit"),!B){ut("overview");return}v.getWorldDirection(Ee),A(T.target.copy(v.position).addScaledVector(Ee,6)),L(),T.update(),ve()}function Ve(B){let{pos:Se,target:Oe,mode:qe}=we(B);if(O=null,Be(qe),v.position.copy(Se),qe==="look"){let Qe=Ge(Se,Oe);ye(Qe.yaw,Qe.pitch),li.sync()}else A(T.target.copy(Oe)),L(),T.update();ve()}function ut(B,Se=1.2){if(p){Ve(B);return}Ne(),Ue.log=0;let{pos:Oe,target:qe,mode:Qe}=we(B);Be(Qe);let mt=Ge(Oe,qe);Ct(Oe,mt.yaw,mt.pitch,qe,Qe,Se)}function Ct(B,Se,Oe,qe,Qe,mt=1.2){W.setFromQuaternion(v.quaternion,"YXZ"),O={t:0,d:p?.001:mt,p0:v.position.clone(),p1:B.clone(),yaw0:W.y,pitch0:W.x,yaw1:Se,pitch1:Oe,target:qe,mode:Qe}}let re={id:null,def:null,u:0,v:0,d:0,tu:0,tv:0,td:0,fit:0,back:null,moving:!1},Je=new C,Mt=()=>P&&P.screenDefs||[],je=B=>Mt().find(Se=>Se.id===B)||null,Qt=()=>Math.tan(jr.degToRad(v.fov/2)),Rn=B=>Xy(B,v.fov,v.aspect);function ai(){let B=re.def;if(!B)return;re.td=st(re.td,Eh,re.fit*1.05);let Se=$y(B,re.td,v.fov,v.aspect);re.tu=st(re.tu,-Se.u,Se.u),re.tv=st(re.tv,-Se.v,Se.v)}let fo=(B,Se,Oe,qe)=>qy(re.def,Se,Oe,qe,B);function Bs(B){let Se=je(B);return!Se||!P?!1:(G!=="screen"&&(Ne(),re.back={mode:G,pos:v.position.clone(),quat:v.quaternion.clone(),target:T.target.clone()}),K=!1,Be("screen"),re.id=B,re.def=Se,re.fit=Rn(Se),re.u=re.tu=0,re.v=re.tv=0,re.d=re.td=re.fit,re.moving=!1,P.setScreenDetail(B,IA),Ct(fo(Je,0,0,re.fit),i0(Se.a),0,null,"screen",1),u&&u(B),En(),!0)}function qo(){re.id=null,re.def=null,re.back=null,re.moving=!1,P&&P.setScreenDetail&&P.setScreenDetail(null,1),u&&u(null)}function Pr(){if(G!=="screen")return;let B=re.back;if(Be(B?B.mode:"orbit"),!B){ut("overview");return}W.setFromQuaternion(B.quat,"YXZ"),Ct(B.pos,W.y,W.x,B.target,B.mode,1),En()}function Ir(B){let Se=Mt();if(!Se.length)return;let Oe=Math.max(0,Se.findIndex(Qe=>Qe.id===re.id)),qe=Se[(Oe+B+Se.length)%Se.length];Bs(qe.id)}function Di(B){let Se=1-Math.exp(-PA*B);re.u+=(re.tu-re.u)*Se,re.v+=(re.tv-re.v)*Se,re.d+=(re.td-re.d)*Se,re.moving=Math.abs(re.tu-re.u)+Math.abs(re.tv-re.v)+Math.abs(re.td-re.d)>.001,fo(v.position,re.u,re.v,re.d),ye(i0(s0(re.def,re.u)),0)}function ps(B,Se){let Oe=Qt(),qe=Oe*Math.max(.2,v.aspect),Qe=Se.x/te*2-1,mt=-(Se.y/ie)*2+1,Xt=re.tu+Qe*qe*re.td,zs=re.tv+mt*Oe*re.td,Jo=st(re.td*Math.exp(B),Eh,re.fit*1.05),Z=Jo/re.td;re.tu=Xt-(Xt-re.tu)*Z,re.tv=zs-(zs-re.tv)*Z,re.td=Jo,ai()}function Lr(B,Se){let Oe=2*re.td*Qt()/Math.max(1,ie);re.tu-=B*Oe,re.tv+=Se*Oe,ai()}let En=()=>{U=performance.now()},mi=()=>{d&&d()};function Xn(){let B=O;if(!B)return;if(O=null,G==="look"){li.sync();return}v.getWorldDirection(Ee);let Se=Math.max(1,v.position.distanceTo(B.target));A(T.target.copy(v.position).addScaledVector(Ee,Se)),ve()}T.addEventListener("start",()=>{Xn(),En(),mi()}),T.addEventListener("change",En),T.addEventListener("end",En);let li=Yy(v,M,{keyTarget:n,clampPosition:(B,Se)=>D.resolve(B,Se),floorY:0,reducedMotion:()=>p,onStart:()=>{Xn(),En(),mi()},onChange:En});function Xi(){for(let B of Ye)B.el.remove();if(Ye=[],!!P)for(let B of Fe){let Se=P.labelAnchors.find(Qe=>Qe.id===B.id);if(!Se)continue;let Oe=document.createElement("div");Oe.className="dwp3d-label";let qe=document.createElement("span");if(qe.className="dwp3d-label-title",qe.textContent=B.text,Oe.appendChild(qe),B.sub){let Qe=document.createElement("span");Qe.className="dwp3d-label-sub",Qe.textContent=B.sub,Oe.appendChild(Qe)}Se.accent&&Oe.style.setProperty("--dwp3d-accent",Se.accent),w.appendChild(Oe),Ye.push({id:B.id,el:Oe,anchor:Se.anchor,near:Se.near||2.5,state:"",shown:null,tf:"",w:0,h:0,sx:0,sy:0,dist:0})}}let ms=new C,Ni=[],tr=[];function gs(B){B.shown!==!1&&(B.el.style.opacity="0",B.shown=!1)}function Yo(){if(Ze){Ni.length=0;for(let B of Ye){if(ms.copy(B.anchor).project(S),!(ms.z<1&&Math.abs(ms.x)<1.05&&Math.abs(ms.y)<1.05)){gs(B);continue}if(B.sx=(ms.x*.5+.5)*te,B.sy=(-ms.y*.5+.5)*ie,B.dist=S.position.distanceTo(B.anchor),B.dist<B.near){gs(B);continue}Ni.push(B)}Ni.sort((B,Se)=>B.dist-Se.dist),tr.length=0;for(let B of Ni){B.w||(B.w=B.el.offsetWidth,B.h=B.el.offsetHeight);let Se={x0:B.sx-B.w/2-3,x1:B.sx+B.w/2+3,y0:B.sy-B.h-3,y1:B.sy+7};if(tr.some(mt=>Se.x0<mt.x1&&Se.x1>mt.x0&&Se.y0<mt.y1&&Se.y1>mt.y0)){gs(B);continue}tr.push(Se);let Oe=P&&P.labelState?P.labelState(B.id):"";Oe!==B.state&&(B.state=Oe,Oe?B.el.dataset.state=Oe:delete B.el.dataset.state);let qe=st(1.45-B.dist/24,.3,1).toFixed(2),Qe=`translate(${B.sx.toFixed(1)}px, ${B.sy.toFixed(1)}px) translate(-50%, -100%)`;Qe!==B.tf&&(B.el.style.transform=Qe,B.tf=Qe),B.shown!==qe&&(B.el.style.opacity=qe,B.shown=qe)}}}let Dr=new Ao;Dr.layers.enable(hn);let po=new Ae,R=null,ee=!1,he=0,le=null,ue=null,De=null,it=!1;function We(B){if(!P)return null;po.set(B.x/te*2-1,-(B.y/ie)*2+1),S.updateMatrixWorld(),Dr.setFromCamera(po,S);let Se=Dr.intersectObjects(P.hoverTargets(),!0);for(let Oe of Se)for(let qe=Oe.object;qe;qe=qe.parent)if(qe.userData&&qe.userData.hoverId)return{id:qe.userData.hoverId,obj:qe,distance:Oe.distance};return null}let Ue={log:0,anchor:new C,anchored:!1},ct=new C;function Tt(B){let Se=We(B),Oe=Dr.ray,qe=D.surfaceHit(Oe.origin,Oe.direction);return Se&&Se.distance<qe&&(qe=Se.distance),Number.isFinite(qe)?(Ue.anchor.copy(Oe.origin).addScaledVector(Oe.direction,qe),!0):!1}function Bt(B){if(!Ue.log)return;let Se=Ue.log*(1-Math.exp(-kA*B));Math.abs(Ue.log-Se)<.001&&(Se=Ue.log),Ue.log-=Se;let Oe=T.target,qe=v.position,Qe=Math.max(.001,qe.distanceTo(Oe)),mt=Math.exp(Se);if(Se<0){let Xt=Ue.anchored?Ue.anchor:Oe;if(mt=Math.max(mt,NA/Qe,OA/Math.max(.001,qe.distanceTo(Xt))),mt>=1){Ue.log=0;return}qe.sub(Xt).multiplyScalar(mt).add(Xt),Xt!==Oe&&Oe.sub(Xt).multiplyScalar(mt).add(Xt)}else{ct.subVectors(qe,Oe).divideScalar(Qe);let Xt=D.containerExit(Oe,ct)-.02,zs=D.armLength(Oe,ct,Math.min(Zy,Xt),uo,!1);if(mt=Math.min(mt,Zy/Qe,Math.max(1,(zs+.5)/Qe)),mt<=1){Ue.log=0;return}qe.sub(Oe).multiplyScalar(mt).add(Oe)}}let at=B=>{if(G==="screen"&&P){B.preventDefault(),B.stopPropagation();let qe=B.deltaMode===1?16:B.deltaMode===2?400:1,Qe=st(B.deltaY*qe*Jy,-.6,.6);Qe&&!O&&re.def&&ps(Qe,Lt(B)),En();return}if(G!=="orbit"||!P||!T.enabled)return;B.preventDefault(),B.stopPropagation();let Se=B.deltaMode===1?16:B.deltaMode===2?400:1,Oe=st(B.deltaY*Se*Jy,-.6,.6);Oe&&(Xn(),En(),mi(),Ue.log&&Math.sign(Oe)!==Math.sign(Ue.log)&&(Ue.log=0),Oe<0&&(Ne(),Ue.anchored=!K&&Tt(Lt(B))),Ue.log=st(Ue.log+Oe,-1.2,1.2))};n.addEventListener("wheel",at,{passive:!1,capture:!0});let Lt=B=>{let Se=M.getBoundingClientRect();return{x:B.clientX-Se.left,y:B.clientY-Se.top}},Mn=B=>{R=Lt(B),ee=!0,De&&Math.hypot(R.x-De.x,R.y-De.y)>5&&(it=!0),De&&G==="screen"&&!O&&re.def&&(Lr(R.x-De.lx,R.y-De.ly),En()),De&&(De.lx=R.x,De.ly=R.y)},on=()=>{R=null,ee=!0},en=B=>{let Se=Lt(B);De={...Se,lx:Se.x,ly:Se.y,t:performance.now()},it=!1,En(),M.style.cursor="grabbing"},On=B=>{let Se=Lt(B);if(De&&!it&&performance.now()-De.t<450&&!O){let qe=We(Se),Qe=qe&&String(qe.id).startsWith("screen:")?String(qe.id).slice(7):null;G==="screen"?Qe?Qe!==re.id&&Bs(Qe):Pr():Qe?Bs(Qe):G==="orbit"&&i&&i(qe?qe.id:null)}De=null,it=!1,ee=!0,En(),M.style.cursor=le?"pointer":"grab"};M.addEventListener("pointermove",Mn),M.addEventListener("pointerleave",on),M.addEventListener("pointerdown",en),M.addEventListener("pointerup",On);let lt=B=>{G!=="screen"||B.ctrlKey||B.metaKey||B.altKey||B.key!=="ArrowLeft"&&B.key!=="ArrowRight"||(B.preventDefault(),B.stopPropagation(),O||Ir(B.key==="ArrowLeft"?-1:1))};n.addEventListener("keydown",lt);function Un(B){let Se=B;for(;Se.parent;)Se=Se.parent;return!!P&&Se===P.scene}let Gt=new C,Oi=new C,kn=new mn,nr=new _t,wi=new Ri;function xs(B){if(!z)return;let Se=ue;if(!Se||Se.userData.noHighlight||!Un(Se)){z.visible=!1;return}Se.updateWorldMatrix(!0,!1),Se.geometry?(Se.geometry.boundingBox||Se.geometry.computeBoundingBox(),Se.geometry.boundingBox.getSize(Gt),Se.geometry.boundingBox.getCenter(Oi),Gt.multiplyScalar(1.06).addScalar(.03),nr.compose(Oi,kn.identity(),Gt),z.matrix.multiplyMatrices(Se.matrixWorld,nr)):(wi.setFromObject(Se),wi.getSize(Gt).multiplyScalar(1.06).addScalar(.03),wi.getCenter(Oi),z.matrix.compose(Oi,kn.identity(),Gt)),z.matrixWorldNeedsUpdate=!0,z.material.opacity=p?.85:.62+.28*(.5+.5*Math.sin(B*5)),z.visible=!0}function Wt(){return _!=="auto"?_:!!O||K||!!De||!!Ue.log||E.easing||li.active()||re.moving||performance.now()-U<900||P&&P.busy()?LA:DA}let Tn=0,Bn=!1,cn=0,dt=0,fn=0,At={frames:0,ticks:0,t:0,capTime:0,cpu:0,calls:0,tris:0,slow:0,good:0},Ko=!0,ja=typeof document>"u"||!document.hidden;function Nr(){At.frames=0,At.ticks=0,At.t=0,At.capTime=0,At.cpu=0}function Or(){let B=At.frames/At.t,Se=At.ticks/At.t,Oe=At.capTime/At.t,qe=Math.max(1,Math.min(Oe>0?Oe:Se,Se)),Qe=B<qe*.85,mt=bc[x];Qe?(At.good=0,At.slow+=1,At.slow>=2&&Y>mt.minScale&&(Y=Math.max(mt.minScale,Math.round((Y-.1)*100)/100),At.slow=0,ze())):(At.slow=0,B>=qe*.95&&(At.good+=1),At.good>=5&&Y<1&&(Y=Math.min(1,Math.round((Y+.05)*100)/100),At.good=0,ze())),b.poll(),s&&s({fps:B,target:qe,slow:Qe,scale:Y,minScale:mt.minScale,cpuMs:At.frames?At.cpu/At.frames:0,gpuMs:y?b.take():null,gpuTimer:b.supported,calls:At.calls,triangles:At.tris,width:Math.round(te*J*Y),height:Math.round(ie*J*Y),cap:_}),Nr()}function kr(B){if(!Bn)return;Tn=requestAnimationFrame(kr);let Se=Math.max(0,(B-cn)/1e3);cn=B,At.ticks+=1,At.t+=Se;let Oe=Wt();if(At.capTime+=Oe*Se,At.t>=1&&Or(),Oe>0){let mt=1e3/Oe,Xt=B-dt;if(Xt<mt-1.5)return;dt=Xt<mt*2?dt+mt:B}else dt=B;let qe=performance.now(),Qe=Math.min(.1,Math.max(0,(B-fn)/1e3));if(fn=B,se+=Qe,O){O.t+=Qe;let mt=cs(Math.min(1,O.t/O.d));if(v.position.lerpVectors(O.p0,O.p1,mt),ye(oc(O.yaw0,O.yaw1,mt),Zi(O.pitch0,O.pitch1,mt)),O.t>=O.d){let Xt=O;O=null,Xt.mode==="look"?li.sync():Xt.mode==="orbit"&&T.target.copy(Xt.target)}}else if(K&&P){if(ae-=Qe,ae<=0){ae=.4;let mt=P.focus(oe);mt||oe.fromArray(P.presets.overview.target),mt!==q&&(q=mt,fe=1.6,o&&o(mt))}if(Pe.subVectors(v.position,T.target),T.target.lerp(oe,p?1:1-Math.exp(-2.4*Qe)),fe>0){if(fe-=Qe,!ge){let Xt=we("overview");ge=Xt.pos.distanceTo(Xt.target)}let mt=q?6.8:ge;Pe.setLength(p?mt:Zt(Pe.length(),mt,2,Qe)),p&&(fe=0)}v.position.copy(T.target).add(Pe)}if(O||(G==="orbit"?(Bt(Qe),L(),T.update(),xe()):G==="screen"?re.def&&Di(Qe):li.update(Qe)),_e(Qe),P&&P.update(Qe,se,S),he-=Qe,ee&&he<=0){he=.08,ee=!1;let mt=R&&!De?We(R):null;mt&&G==="screen"&&mt.id===`screen:${re.id}`&&(mt=null);let Xt=mt?mt.id:null;ue=mt?mt.obj:null,De||(M.style.cursor=Xt?"pointer":"grab"),(Xt||le)&&(le=Xt,t&&t(Xt?{id:Xt,x:R.x,y:R.y}:null))}xs(se),me(),g.info.reset(),y&&b.begin(),k&&P&&(S.updateMatrixWorld(),P.prerender(S),k.render(P.scene,S,p?0:se)),y&&b.end(),At.calls=g.info.render.calls,At.tris=g.info.render.triangles,Yo(),At.frames+=1,At.cpu+=performance.now()-qe,X||(X=!0,l&&l())}function ir(){let B=!$e&&!pe&&Ko&&ja&&te>1&&ie>1;B&&!Bn?(Bn=!0,cn=dt=fn=performance.now(),Nr(),Tn=requestAnimationFrame(kr),a&&a(!0)):!B&&Bn&&(Bn=!1,cancelAnimationFrame(Tn),a&&a(!1))}let Zo=new ResizeObserver(()=>{Me(),ir()});Zo.observe(n);let mo=typeof IntersectionObserver=="function"?new IntersectionObserver(B=>{Ko=B.some(Se=>Se.isIntersecting),ir()}):null;mo&&mo.observe(n);let Ec=()=>{ja=!document.hidden,ir()};document.addEventListener("visibilitychange",Ec);let Tc=B=>{B.preventDefault(),pe=!0,ir(),r&&r("context-lost")},Qa=()=>{pe=!1,be(),F(),ir()};M.addEventListener("webglcontextlost",Tc),M.addEventListener("webglcontextrestored",Qa);let ys=B=>{p=!!B.matches,pt(),En()};f&&(typeof f.addEventListener=="function"?f.addEventListener("change",ys):typeof f.addListener=="function"&&f.addListener(ys));function el(){if(!$e){$e=!0,Bn=!1,cancelAnimationFrame(Tn),Zo.disconnect(),mo&&mo.disconnect(),document.removeEventListener("visibilitychange",Ec),M.removeEventListener("pointermove",Mn),M.removeEventListener("pointerleave",on),M.removeEventListener("pointerdown",en),M.removeEventListener("pointerup",On),M.removeEventListener("webglcontextlost",Tc),M.removeEventListener("webglcontextrestored",Qa),n.removeEventListener("wheel",at,{capture:!0}),n.removeEventListener("keydown",lt),f&&(typeof f.removeEventListener=="function"?f.removeEventListener("change",ys):typeof f.removeListener=="function"&&f.removeListener(ys)),T.dispose(),li.dispose();try{b.dispose(),be()}finally{I.dispose(),g.dispose(),g.forceContextLoss(),M.remove(),w.remove()}}}try{Me(!0),F(),Ve("overview")}catch(B){throw el(),B}return ir(),{setState(B){V=B,P&&P.setState(B)},setLive(B){ne={...ne||{},...B},P&&P.setLive(B)},setDemo(B){h=!!B,P&&P.setDemo(h)},resetState(){V=null,P&&P.resetState()},getQuality:()=>x,autoQuality:()=>m,setQuality(B){!bc[B]||B===x||(x=B,ue=null,be(),F())},getFrameCap:()=>_,setFrameCap(B){Ya.includes(B)&&(_=B)},getLook:()=>$,setLook(B){!ko.includes(B)||B===$||($=B,P&&P.setLook(B)&&(pt(),H()),En())},getBrightness:()=>Ce,setBrightness(B){Ce=st(Number(B)||_n.initial,_n.min,_n.max),P&&(P.setBrightness(Ce),pt()),En()},setPerfDetail(B){y=!!B&&b.supported},setCameraPreset(B){K=!1,ut(B),En()},getMode:()=>G,setMode(B){!r0.includes(B)||B===G||(O=null,B==="look"?Be("look"):He(),En())},screens:()=>Mt().map(B=>B.id),getScreen:()=>re.id,focusScreen:B=>Bs(B),stepScreen(B){G==="screen"&&!O&&Ir(B<0?-1:1)},exitScreen:Pr,setFollow(B){B&&G==="screen"&&(O=null,Be(re.back?re.back.mode:"orbit")),B&&G!=="orbit"&&(eo(v.position)==="hall"?He():Ve("overview")),K=!!B,q=void 0,ae=0,K&&(O=null)},getFollow:()=>K,setLabels(B){Fe=Array.isArray(B)?B:[],Xi()},setLabelsVisible(B){Ze=!!B,w.style.display=Ze?"":"none"},stats:()=>P?P.stats():null,dockInfo:()=>P?P.dockInfo():null,dispose:el}}var Cr=(n,e)=>Array.from({length:n},(t,i)=>`${e} ${i}`).join(`
`),WA=[{end:"completed",steps:[{r:520,o:140,tools:[["read",{file_path:"weather-board/src/api/forecast.ts"},.3],["glob",{pattern:"src/**/*.tsx"},.4],["grep",{pattern:"fetchForecast",path:"src"},.5]]},{r:380,o:620,tools:[["edit",{file_path:"src/api/forecast.ts",old_string:Cr(3,"a"),new_string:Cr(9,"a")},.6],["write",{file_path:"src/components/HourlyChart.tsx",content:Cr(132,"x")},.7]]},{r:160,o:240,tools:[["bash",{command:"npm run build"},3]]},{r:120,o:300,tools:[["bash",{command:"npm test"},2.4]]},{r:60,o:420}]},{end:"completed",steps:[{r:300,o:90,tools:[["web_search",{queries:["Open-Meteo hourly forecast parameters"]},2.2],["web_fetch",{url:"https://open-meteo.com/en/docs"},1.6]]},{r:260,o:200,tools:[["subagent",{description:"Review chart accessibility"},.6,!1,{agent:{name:"a11y-reviewer",label:"Review chart accessibility",after:16}}],["todo_write",{todos:[{content:"Add a units toggle"}]},.3]]},{r:200,o:160,tools:[["edit",{file_path:"src/styles/chart.css",old_string:Cr(6,"c"),new_string:Cr(10,"c")},.5],["edit",{file_path:"src/components/HourlyChart.tsx",old_string:Cr(4,"v"),new_string:Cr(12,"v")},.5]]},{r:100,o:120,tools:[["bash",{command:"npm run build"},2.6,!0]]},{r:420,o:380,tools:[["edit",{file_path:"tsconfig.json",old_string:Cr(2,"b"),new_string:Cr(5,"b")},.4],["bash",{command:"npm run build"},2.4]]},{r:80,o:360,tools:[["present",{files:[{path:"docs/forecast-report.md"}]},.5]]},{r:40,o:220}]},{end:"interrupted",steps:[{r:120,o:80,tools:[["compress",{content:"earlier steps …"},1.6]],compact:.42},{r:140,o:120,tools:[["workflow",{meta:{name:"verify-forecast"}},11,!1,{workflow:{name:"verify-forecast",agents:[["Check API error paths","Verify",6.5],["Check chart contrast","Verify",8],["Check unit conversions","Verify",9.5,"failed"],["Summarize findings","Report",10.6]]}}],["subagent",{description:"Draft release notes"},.6,!1,{agent:{name:"notes-writer",label:"Draft release notes",after:13}}]]},{r:200,o:140,tools:[["mcp__tracker__create_issue",{title:"Chart flickers on resize"},2.2],["read",{file_path:"src/components/HourlyChart.tsx"},.5],["mcp__docs__search",{query:"ResizeObserver loop limit"},1.8]]},{r:160,o:100,tools:[["ask_user_question",{questions:[{question:"Switch the default units to metric?"}]},4.5]]},{r:90,o:110,tools:[["bash",{command:"npm run deploy"},1.2,!0]]}]}],Sc={provider:"deepseek",model:"deepseek-flash",contextWindow:1e6};function o0(n,e,t){let i=n.clock+Math.max(0,e),s=n.later.length;for(;s>0&&n.later[s-1].at>i;)s--;n.later.splice(s,0,{at:i,item:t})}function*Mc(n,e){let t=e;for(;;){for(;n.later.length&&n.later[0].at<=n.clock+1e-9;)yield n.later.shift().item;if(t<=1e-9)return;let i=n.later.length?Math.min(t,n.later[0].at-n.clock):t;yield{wait:i},n.clock+=i,t-=i}}function*XA(n,e){let t=e.extra;if(t){if(t.agent){let i=`demo-agent-${n.agents++}`;yield{event:"subagent/catalog",data:{version:3,childId:i,mode:"one-shot",label:t.agent.label,name:t.agent.name}};let s=`${t.agent.label}: done`;o0(n,t.agent.after,{event:"user/message",data:{role:"user",content:[{type:"text",text:s}],source:{kind:"subagent-settled",form:"notice",summary:s,stopReason:t.agent.stop||"completed",senderSessionId:i}}})}if(t.workflow){let i=`demo-run-${n.runs++}`;e.runId=i,yield{event:"tool-workflow/run-start",data:{runId:i,name:t.workflow.name}},t.workflow.agents.forEach(([s,r,o,a],l)=>{o0(n,.3*(l+1),{event:"tool-workflow/agent-start",data:{runId:i,seq:l,label:s,phase:r,childId:`${i}-agent-${l}`}}),o0(n,o,{event:"tool-workflow/agent-end",data:{runId:i,seq:l,outcome:a||"completed"}})})}}}function*$A(n,e){let t=e.turn++;yield{event:"turn/start",data:{turn:t}},yield{event:"user/message",data:{turn:t}},yield{event:"request/header",data:{header:{config:{provider:Sc.provider,model:Sc.model,reasoningEffort:"high"}},reason:"initial"}},yield{event:"request/context",data:{...Sc}};let i=1600;for(let s=0;s<n.steps.length;s++){let r=n.steps[s];yield{event:"step/start",data:{turn:t,step:s}};for(let[c,u,d]of[["reasoning",r.r,62],["generating",r.o,54]]){if(!u)continue;let h=Math.min(5,Math.max(.6,u/d)),f=Math.max(3,Math.round(h/.12));for(let p=0;p<f;p++){let g=d*(.82+.36*Math.abs(Math.sin(p*1.7+s)));e.streamed+=u/f,yield{live:{phase:c,tps:g}},yield*Mc(e,h/f)}}let o=i+Math.round(300+400*Math.abs(Math.sin(t+s))),a={inputTokens:o,cacheReadTokens:e.ctx,cacheWriteTokens:0,outputTokens:r.r+r.o,reasoningTokens:r.r};e.ctx+=o+r.o,yield{live:{phase:"idle",tps:0}},yield{event:"assistant/message",data:{turn:t,step:s,message:{role:"assistant"},usage:a},usage:a};let l=r.tools||[];if(i=0,l.length){yield{live:{phase:"tool",tps:0}};let c=l.map(([h,f,p,g,m])=>({id:`demo-${t}-${s}-${e.call++}`,name:h,args:f,secs:p,fail:g,extra:m}));for(let h of c)yield{event:"tool/call",data:{turn:t,step:s,callId:h.id,name:h.name,arguments:h.args}},yield*XA(e,h),yield*Mc(e,.08);let u=c.slice().sort((h,f)=>h.secs-f.secs),d=.08*c.length;for(let h of u){let f=Math.max(0,h.secs-d);f>0&&(yield*Mc(e,f)),d=Math.max(d,h.secs),i+=h.fail?260:900+Math.round(2400*Math.abs(Math.cos(e.call+s))),h.runId&&(yield{event:"tool-workflow/run-end",data:{runId:h.runId,stopReason:"completed"}}),yield{event:"tool/result",data:{turn:t,step:s,message:{toolCallId:h.id,isError:!!h.fail},...h.fail?{error:{name:"ToolError",code:"exit-1"}}:{}}}}r.compact&&(e.ctx=Math.round(e.ctx*r.compact))}yield{event:"step/end",data:{turn:t,step:s}},yield*Mc(e,.35)}yield{event:"turn/end",data:{turn:t,reason:{kind:n.end}}},yield{live:{phase:"idle",tps:0}}}function*qA(n){for(;;)for(let e of WA)yield*$A(e,n),yield*Mc(n,2.8),n.ctx>9e5&&(n.ctx=42e4)}function Qy({onEvents:n,onLive:e,speed:t=1}={}){let i={turn:0,call:0,ctx:38e4,streamed:0,balance:52.8,seq:0,clock:0,later:[],agents:0,runs:0},s=Qs(Sc.provider,Sc.model),r=qA(i),o=null,a=!0,l=(u,d)=>{i.seq+=1;let h=u.usage&&oh(u.usage);return h&&(i.balance=Math.max(0,i.balance-ah(h,s,Tr(d)))),{type:u.event,seq:i.seq,time:d,data:u.data}},c=u=>({...u,balance:i.balance,currency:"CNY",streamed:Math.round(i.streamed)});return{prefill(u=2){let d=[],h=Date.now()-54e4,f=0;for(;f<u;){let{value:p}=r.next();p.wait?h+=p.wait*1e3*3:p.event&&(d.push(l(p,h)),p.event==="turn/end"&&f++)}return d},start(){if(!a)return;a=!1;let u=()=>{if(o=null,a)return;let d=[];for(let h=0;h<200;h++){let{value:f}=r.next();if(f.wait){d.length&&n?.(d),o=setTimeout(u,f.wait*1e3/t);return}f.event?d.push(l(f,Date.now())):f.live&&e?.(c(f.live))}d.length&&n?.(d),o=setTimeout(u,50)};e?.(c({phase:"idle",tps:0})),u()},stop(){a=!0,o&&clearTimeout(o),o=null},get balance(){return i.balance}}}var YA="/api/dsh-work-process-3d/balance";var KA=n=>n>=11904&&n<=40959||n>=44032&&n<=55215||n>=63744&&n<=64255||n>=65280&&n<=65519;function ZA(n){if(typeof n!="string"||!n)return 0;let e=0,t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<=32||(s>=55296&&s<=56319?(e++,i++):KA(s)?e++:t++)}return e*.6+t*.3}var ev=n=>n?n.kind==="tool-call"?n.argsRaw:n.kind==="text"||n.kind==="reasoning"?n.text:null:null;function tv({windowMs:n=2e3}={}){let e="",t=[],i=0,s="idle",r=[],o=0;function a(){e="",t=[],i=0,s="idle",r.length=0,o=0}function l(c){for(;r.length&&c-r[0][0]>n;)o-=r.shift()[1];if(!r.length)return o=0,0;let u=Math.max(500,Math.min(n,c-i));return o*1e3/u}return{push(c,u){let d=c&&Array.isArray(c.blocks)?c.blocks:null;if(!d)return a(),{phase:s,tps:0};let h=`${c.turn}:${c.step}`;h!==e&&(a(),e=h);let f=0;for(let g=0;g<d.length;g++){let m=ev(d[g]);if(typeof m!="string")continue;let x=t[g]||0;m.length>x&&(f+=ZA(m.slice(x))),t[g]=m.length}f>0&&(!r.length&&!i&&(i=u),r.push([u,f]),o+=f);let p=d.length?d[d.length-1]:null;return s=!p||ev(p)==null?"idle":p.kind==="reasoning"?"reasoning":"generating",{phase:s,tps:l(u)}},tick(c){return{phase:s,tps:e?l(c):0}},reset:a}}var Ka=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0?n:null;function nv(n,e){if(!n)return null;if(!e||typeof e!="object")return n;let t=Ka(e.projectedTokens),i=t??Ka(e.pressureTokens),s=Ka(e.contextWindow);return i==null&&!s?n:{...n,contextTokens:i??n.contextTokens,contextWindow:s||n.contextWindow}}var wc={balance:null,currency:"CNY",toppedUp:null,granted:null,source:null},JA=new Set(["ready","failed","signed-out","unavailable"]);function jA(n){if(!n||n.ok!==!0)return{status:"failed",...wc};let e=JA.has(n.status)?n.status:"failed",t=Array.isArray(n.wallets)?n.wallets.filter(s=>s&&typeof s.currency=="string"):[],i=t.find(s=>s.currency==="CNY")||t[0];return e!=="ready"||!i||Ka(i.total)==null?{status:e==="ready"?"unavailable":e,...wc}:{status:"ready",balance:i.total,currency:i.currency,toppedUp:Ka(i.toppedUp),granted:Ka(i.granted),source:n.source==="account"||n.source==="api-key"?n.source:null}}function QA(n=typeof window<"u"?window:void 0){let e=n&&n.__DSH_BOOT__,t=e&&e.release&&e.release.version;return typeof t=="string"?t:""}async function iv({lang:n="en",version:e=QA(),fetchImpl:t,signal:i}={}){let s=t||(typeof fetch=="function"?fetch:null);if(!s)return{status:"unavailable",...wc};let r={version:e,locale:n==="zh"?"zh-CN":"en-US",timezoneOffsetSeconds:-new Date().getTimezoneOffset()*60},o;try{o=await s(YA,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r),credentials:"same-origin",signal:i})}catch(l){if(i&&i.aborted)throw l;return{status:"failed",...wc}}if(o.status===404)return{status:"no-host",...wc};let a=null;try{a=await o.json()}catch{a=null}return jA(a)}var sv=`
.dwp3d-root{position:relative;width:100%;height:100%;min-height:320px;overflow:hidden;background:#0a0b0e;color:#e6e9ef;font:inherit;font-size:12px;line-height:1.4;container-type:size;container-name:dwp3d;isolation:isolate}
.dwp3d-root.fail{background:var(--dsw-alias-bg-base,#0a0b0e);color:var(--dsw-alias-label-primary,#e6e9ef)}
.dwp3d-root *{box-sizing:border-box}
.dwp3d-stage{position:absolute;inset:0;user-select:none;-webkit-user-select:none;outline:none}
.dwp3d-stage:focus-visible{box-shadow:inset 0 0 0 2px rgba(77,107,254,.85)}
.dwp3d-labels{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.dwp3d-label{position:absolute;left:0;top:0;display:flex;align-items:center;gap:6px;padding:3px 9px 3px 7px;border-radius:999px;background:rgba(12,16,24,.86);border:1px solid rgba(255,255,255,.13);box-shadow:0 1px 6px rgba(0,0,0,.2);white-space:nowrap;opacity:0;transition:opacity .25s;will-change:transform}
.dwp3d-label:before{content:"";flex:none;width:7px;height:7px;border-radius:50%;background:var(--dwp3d-accent,#4d6bfe);box-shadow:0 0 0 2px rgba(255,255,255,.08)}
.dwp3d-label[data-state=working]:before{background:#6f9bff;box-shadow:0 0 8px #6f9bff;animation:dwp3d-label-pulse 1.1s ease-in-out infinite}
.dwp3d-label[data-state=error]:before{background:#ff5a4f;box-shadow:0 0 8px #ff5a4f}
.dwp3d-label:after{content:"";position:absolute;left:50%;bottom:-6px;width:1px;height:6px;background:rgba(255,255,255,.35)}
.dwp3d-label-title{font-size:11.5px;font-weight:600;color:#eef2fa}
.dwp3d-label-sub{font-size:10px;letter-spacing:.06em;color:#b9c6e0;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace}
@keyframes dwp3d-label-pulse{50%{opacity:.4}}
.dwp3d-panel{background:linear-gradient(180deg,rgba(22,27,38,.9),rgba(12,14,20,.86));border:1px solid rgba(160,185,255,.11);border-radius:10px;backdrop-filter:blur(10px) saturate(1.15);-webkit-backdrop-filter:blur(10px) saturate(1.15);box-shadow:inset 0 1px 0 rgba(255,255,255,.07),0 8px 26px rgba(0,0,0,.3)}
.dwp3d-top{position:absolute;top:10px;left:10px;right:10px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;pointer-events:none;flex-wrap:wrap;z-index:2}
.dwp3d-top>*{pointer-events:auto}
.dwp3d-title{display:flex;flex-direction:column;gap:3px;padding:6px 10px;max-width:min(520px,100%)}
.dwp3d-title-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;min-height:22px}
.dwp3d-title h2{margin:0;font-size:13px;font-weight:650;letter-spacing:.02em;color:#f3f5fa;white-space:nowrap}
.dwp3d-note{margin:0;font-size:11.5px;color:#ffc65c;line-height:1.4}
.dwp3d-warn{color:#ffb8b8;max-width:520px;overflow-wrap:anywhere;user-select:text}
.dwp3d-chip{display:inline-flex;align-items:center;gap:5px;height:20px;padding:0 8px;border-radius:10px;font-size:11px;background:rgba(255,255,255,.07);color:#c9d2e3;white-space:nowrap}
.dwp3d-chip.demo{background:rgba(255,176,32,.18);color:#ffc65c;font-weight:600}
.dwp3d-chip.live{background:rgba(52,209,122,.16);color:#5fe39a;font-weight:600}
.dwp3d-link{background:none;border:0;padding:0;font:inherit;color:#8fb0ff;text-decoration:underline;cursor:pointer}
.dwp3d-link:focus-visible{outline:2px solid #4d6bfe;outline-offset:2px;border-radius:2px}
.dwp3d-note .dwp3d-link{margin-left:6px}
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
.dwp3d-ticker h3{margin:0 0 3px;font-size:11px;font-weight:600;color:#b4c0d8;letter-spacing:.04em}
.dwp3d-tick{display:flex;align-items:center;gap:7px;height:20px;font-size:12px;color:#d6deec;min-width:0}
.dwp3d-tick code{flex:none;font-family:ui-monospace,"Cascadia Mono",Consolas,monospace;font-size:11px;color:#b4c0d8}
.dwp3d-tick .l{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
.dwp3d-tick .st{flex:none;width:12px;text-align:center;font-size:11px}
.dwp3d-tick .st.run{animation:dwp3d-label-pulse 1.1s ease-in-out infinite}
.dwp3d-muted{color:#a8b3c8}
.dwp3d-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.dwp3d-legend{margin-left:auto;padding:6px 10px;display:flex;flex-direction:column;gap:4px;max-width:100%;font-size:11.5px;color:#c9d2e3}
.dwp3d-legend-row{display:flex;align-items:center;flex-wrap:wrap;gap:4px 10px}
.dwp3d-legend-k{color:#b4c0d8;font-weight:600}
.dwp3d-legend-item{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.dwp3d-sw{width:11px;height:11px;border-radius:50%;flex:none;border:1px solid rgba(255,255,255,.25)}
.dwp3d-sw.raw{background:radial-gradient(circle at 35% 35%,#f2f4f8,#9aa1ad 70%)}
.dwp3d-sw.normal{background:conic-gradient(from 30deg,#6f8cff,#b98cff,#5fd3c7,#6f8cff)}
.dwp3d-sw.gold{background:radial-gradient(circle at 35% 35%,#ffe7a8,#e3a72c 75%)}
.dwp3d-sw.bad{background:radial-gradient(circle at 35% 35%,#d76a6a,#7a2222 75%)}
.dwp3d-hint{display:flex;align-items:center;gap:6px;color:#b4c0d8}
.dwp3d-x{appearance:none;border:0;background:rgba(255,255,255,.06);color:#c9d2e3;width:18px;height:18px;line-height:16px;padding:0;border-radius:4px;cursor:pointer;font:inherit;font-size:13px;flex:none}
.dwp3d-x:hover{background:rgba(255,255,255,.14);color:#fff}
.dwp3d-x:disabled{opacity:.35;cursor:default;background:rgba(255,255,255,.06)}
.dwp3d-backdrop{position:absolute;inset:0;z-index:1}
.dwp3d-pop{display:flex;flex-direction:column;gap:8px;padding:10px 12px;min-width:260px}
.dwp3d-pop-row{display:flex;align-items:center;gap:10px}
.dwp3d-pop-k{flex:none;min-width:48px;color:#b4c0d8;font-size:11.5px}
.dwp3d-pop-row .dwp3d-select,.dwp3d-pop-row .dwp3d-seg{margin-left:auto}
.dwp3d-pop-v{flex:none;min-width:38px;text-align:right;font-weight:600;color:#eef2f8;font-size:11.5px;font-family:"Cascadia Mono",Consolas,monospace}
.dwp3d-range{flex:1;min-width:110px;margin:0;accent-color:#4d6bfe;cursor:pointer}
.dwp3d-range:focus-visible,.dwp3d-check input:focus-visible{outline:2px solid #8ea2ff;outline-offset:2px}
.dwp3d-check{gap:8px;cursor:pointer;color:#c9d2e3}
.dwp3d-check input{margin:0;accent-color:#4d6bfe;cursor:pointer}
.dwp3d-cards{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:6px;pointer-events:auto}
.dwp3d-card{position:relative;padding:7px 10px 8px;min-width:0;outline:none}
.dwp3d-card:focus-visible{box-shadow:0 0 0 2px #8ea2ff}
.dwp3d-card:before{content:"";position:absolute;left:10px;right:10px;top:-1px;height:1px;background:linear-gradient(90deg,var(--dwp3d-c,#4d6bfe),transparent 85%);opacity:.75}
.dwp3d-card .k{font-size:11px;color:#b4c0d8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-card .k:before{content:"";display:inline-block;width:6px;height:6px;border-radius:2px;margin-right:6px;vertical-align:1px;background:var(--dwp3d-c,#4d6bfe)}
.dwp3d-card .v{font-size:16px;font-weight:650;color:#f1f4fa;font-variant-numeric:tabular-nums;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-card .v[data-bump]{animation:dwp3d-bump .9s ease-out}
@keyframes dwp3d-bump{from{color:var(--dwp3d-c,#8fb0ff);text-shadow:0 0 10px var(--dwp3d-c,#8fb0ff)}to{color:#f1f4fa;text-shadow:0 0 0 transparent}}
.dwp3d-card .s{font-size:11px;color:#b4c0d8;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dwp3d-bar{height:3px;border-radius:2px;background:rgba(255,255,255,.09);margin-top:5px;overflow:hidden}
.dwp3d-bar>i{display:block;height:100%;border-radius:2px;background:var(--dwp3d-c,#4d6bfe);transition:width .4s}
.dwp3d-tip{position:absolute;z-index:4;width:max-content;max-width:300px;padding:9px 11px;pointer-events:none;font-size:12px;line-height:1.45}
.dwp3d-tip h4{margin:0 0 3px;font-size:12.5px;font-weight:650;color:#f3f5fa}
.dwp3d-tip p{margin:2px 0 0;color:#b8c3d8}
.dwp3d-tip .row{display:flex;justify-content:space-between;gap:14px;color:#cfd7e6;font-variant-numeric:tabular-nums}
.dwp3d-tip .row span:first-child{color:#b4c0d8;flex:none}
.dwp3d-tip .row span:last-child{text-align:right;overflow-wrap:anywhere;min-width:0}
.dwp3d-toast-wrap{position:absolute;top:54px;left:50%;transform:translateX(-50%);z-index:3;pointer-events:none}
.dwp3d-toast{padding:6px 12px;font-size:12px;white-space:nowrap}
.dwp3d-screenbar-wrap{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:6px;pointer-events:none;max-width:calc(100% - 20px)}
.dwp3d-screenbar{display:flex;align-items:center;gap:4px;padding:4px;pointer-events:auto}
.dwp3d-screenbar-name{display:flex;align-items:baseline;gap:8px;padding:0 10px;min-width:150px;justify-content:center;white-space:nowrap}
.dwp3d-screenbar-name b{font-size:12.5px;font-weight:650;color:#f3f5fa}
.dwp3d-screenbar-name span{font-size:11px;color:#b4c0d8;font-variant-numeric:tabular-nums}
.dwp3d-screenbar .sep{width:1px;height:18px;background:rgba(255,255,255,.12);margin:0 2px}
.dwp3d-screenbar-hint{margin:0;padding:3px 10px;border-radius:6px;background:rgba(12,14,19,.8);font-size:11px;color:#b8c3d8;text-align:center}
.dwp3d-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;z-index:5}
.dwp3d-center.dim{background:rgba(5,6,8,.55)}
.dwp3d-loading{display:flex;align-items:center;gap:10px;padding:12px 16px;font-size:12.5px;color:#d6deec}
.dwp3d-spin{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.18);border-top-color:#8ea2ff;animation:dwp3d-spin .9s linear infinite;flex:none}
@keyframes dwp3d-spin{to{transform:rotate(360deg)}}
.dwp3d-msg{padding:14px 18px;max-width:440px;text-align:center;color:#d6deec}
.dwp3d-msg p{margin:0}
.dwp3d-msg .dwp3d-btn{margin-top:12px}
.dwp3d-fail{max-width:460px;padding:18px 20px;border-radius:12px;background:var(--dsw-alias-bg-layer-1,#16191f);border:1px solid var(--dsw-alias-border-l1,rgba(255,255,255,.12));color:var(--dsw-alias-label-primary,#e6e9ef)}
.dwp3d-fail h3{margin:0 0 6px;font-size:14px;font-weight:650}
.dwp3d-fail p{margin:0 0 14px;color:var(--dsw-alias-label-secondary,#a3afc5);line-height:1.5}
.dwp3d-fail button{appearance:none;border:0;border-radius:6px;height:28px;padding:0 14px;font:inherit;font-size:12.5px;cursor:pointer;background:var(--dsw-alias-brand-primary,#4d6bfe);color:#fff}
.dwp3d-fail button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#4d6bfe);outline-offset:2px}
@media (prefers-reduced-motion: reduce){
  .dwp3d-spin{animation:none}
  .dwp3d-label,.dwp3d-bar>i{transition:none}
  .dwp3d-label[data-state=working]:before,.dwp3d-tick .st.run,.dwp3d-card .v[data-bump]{animation:none}
}
.dwp3d-viewsel{display:none}
@container dwp3d (max-width: 900px){
  .dwp3d-cards{grid-template-columns:repeat(4,minmax(0,1fr))}
}
@container dwp3d (max-width: 760px){
  .dwp3d-ticker{display:none}
  .dwp3d-card .v{font-size:15px}
  .dwp3d-viewsel{display:inline-block}
  .dwp3d-views{display:none}
}
@container dwp3d (max-width: 520px){
  .dwp3d-title h2{display:none}
  .dwp3d-btn{padding:0 7px}
  .dwp3d-screenbar-hint{display:none}
  .dwp3d-screenbar-name{min-width:0}
}
@container dwp3d (max-height: 560px){
  .dwp3d-ticker,.dwp3d-legend{display:none}
}
@container dwp3d (max-width: 420px){
  .dwp3d-cards{grid-template-columns:repeat(2,minmax(0,1fr))}
}
`;var{useEffect:Si,useLayoutEffect:e3,useRef:sn,useState:rn,useReducer:pv,useCallback:Mi}=de,t3="workProcess3d",mv="dwp3d.source",n3=5e3,i3=12e4,s3=4e3,r3=250,o3=5e3,d0="dwp3d.quality",a0="dwp3d.hint",l0="dwp3d.hint.look",c0=["overview","fuel","engine","stations","dock","products","living","balcony"],a3=["raw","normal","gold","bad"],rv={idle:"#8a93a6",thinking:"#a487ff",reasoning:"#a487ff",generating:"#6f8cff",tool:"#ffb347"},l3={balance:"#4fd6ff",context:"#5b8cff",input:"#8fa3c8",output:"#9b6bff",cost:"#ffc65c",tools:"#ffa21f",products:"#e9c77f",efficiency:"#34d17a"},ov={running:{icon:"●",color:"#6f8cff"},ok:{icon:"✓",color:"#34d17a"},error:{icon:"✕",color:"#ff5d5d"}},c3=200,u3=4,Ah=3,gv="dwp3d.fps",av="dwp3d.perf",xv="dwp3d.look",yv="dwp3d.brightness";function ho(n){try{return window.localStorage.getItem(n)}catch{return null}}function Us(n,e){try{e==null?window.localStorage.removeItem(n):window.localStorage.setItem(n,e)}catch{}}function lv(){let n=ho(d0);return $o.includes(n)?n:null}function d3(){let n=ho(gv),e=n==null?"auto":Number(n);return Ya.includes(e)?e:"auto"}function h3(){return typeof de.useId=="function"?de.useId():"dwp3d"}function f3(){let n=ho(xv);return ko.includes(n)?n:io}function p3(){let n=Number(ho(yv));return Number.isFinite(n)&&n>=_n.min&&n<=_n.max?n:_n.initial}function m3(){return ho(mv)==="demo"?"demo":"live"}var Ja=class extends de.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){this.props.onError&&this.props.onError(e)}render(){return this.state.failed?null:this.props.children}};function cv({use:n,name:e,onValue:t}){let i=n(e);return Si(()=>t(i),[i,t]),null}var g3=n=>n?`${n.running?1:0}${n.blank?1:0}`:"";function x3({use:n,onValue:e}){let t=n(g3);return Si(()=>e(t),[t,e]),null}var y3=n=>n&&n.legacy&&n.legacy.partial||null;function v3({use:n,onValue:e}){let t=n(y3);return Si(()=>e(t),[t,e]),null}function _3(n,e){return e==="auto"?n("fps.auto"):e===0?n("fps.unlimited"):n("fps.n",{n:e})}function b3({t:n,perf:e}){if(!e)return de.createElement("div",{className:"dwp3d-panel dwp3d-perf",role:"status"},de.createElement("span",{className:"dwp3d-muted"},n("perf.waiting")));let t=s=>typeof s=="number"&&s>0?`${s.toFixed(1)} ms`:"—",i=[[n("perf.fps"),`${e.fps.toFixed(0)} / ${e.target?e.target.toFixed(0):"∞"}`],[n("perf.cpu"),t(e.cpuMs)],[n("perf.gpu"),e.gpuTimer?t(e.gpuMs):n("perf.gpuNone")],[n("perf.calls"),String(e.calls)],[n("perf.tris"),ln(e.triangles)],[n("perf.res"),`${e.width}×${e.height} · ${Math.round(e.scale*100)}%`]];return de.createElement("div",{className:"dwp3d-panel dwp3d-perf","aria-label":n("perf.title")},i.map(([s,r])=>de.createElement("div",{key:s,className:"dwp3d-perf-row"},de.createElement("span",null,s),de.createElement("b",null,r))))}function M3(n){return n?n==="tank"?"fuel":n==="engine"||n==="console"||n==="dispenser"?"engine":n==="robot"||n==="lock"||n==="unload"||n.startsWith("station:")?"stations":n==="living"?"living":n==="dock"?"dock":"products":null}function S3(n){try{let e=n&&n.locale&&n.locale.getLocale(),t=e&&(e.active||e.locale)||"";return String(t).toLowerCase().startsWith("zh")?"zh":"en"}catch{return"en"}}function w3(n){let[e,t]=pv(i=>i+1,0);return Si(()=>{let i=n&&n.locale;if(!i||typeof i.subscribe!="function")return;let s=i.subscribe(()=>t());return()=>{typeof s=="function"?s():s&&typeof s.dispose=="function"&&s.dispose()}},[n]),e}var h0=(n,e)=>n&&(n[e]||n.en)||"",u0=(n,e)=>`${h0(n,e)} · ${n.code}`;function uv(n){let e=t=>({id:t,text:h0(qt[t],n),sub:qt[t].code});return[e("tank"),e("engine"),e("robot"),e("dock"),...Zd.map(t=>({id:`station:${t}`,text:h0(_i[t],n),sub:_i[t].code})),e("loadport"),e("stocker"),e("living")]}var E3=n=>n.status==="running"?"running":n.status==="ok"?"ok":"rework",T3={loading:"bal.loading","signed-out":"bal.signedOut","no-host":"bal.noHost",failed:"bal.failed",unavailable:"bal.unavailable"},A3={"signed-out":"bal.signedOutHelp","no-host":"bal.noHostHelp",failed:"bal.failedHelp",unavailable:"bal.unavailableHelp"},dv=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():Date.now();function vv(n,e,t,i){return e!=null?An(e,t):n(T3[i]||"bal.unavailable")}function _v(n,e,t,i){if(i||e!=null)return"";let s=A3[t];return s?n(s):""}function hv(n,e){let t=typeof e.fileCount=="number"?e.fileCount:e.files.length,i=[[n("status."+E3(e)),n("hover.batchBody",{calls:e.calls,errors:e.errors,files:t})]];for(let r of e.files.slice(0,6))i.push([wp(r.path),`+${r.added} −${r.removed}`]);t>6&&i.push(["…",`+${t-6}`]);let s=(e.endedAt||Date.now())-e.startedAt;return i.push(["",n("hover.batchCost",{cost:An(e.cost),time:ny(s)})]),i}function R3(n,e){let{t,s:i,live:s,lang:r,price:o,peak:a,m:l}=e,c=(d,h=[])=>({title:u0(qt[d],r),body:t("desc."+d),rows:h}),u=d=>t("unit.perM",{price:An(d)});switch(n){case"tank":{let d=[[e.demo?t("m.balanceDemo"):t("m.balance"),vv(t,e.balance,e.currency,s.balanceStatus)]];!e.demo&&e.balance!=null&&s.toppedUp!=null&&(d.push([t("m.toppedUp"),An(s.toppedUp,e.currency)]),d.push([t("m.granted"),An(s.granted||0,e.currency)])),!e.demo&&e.balance!=null&&s.balanceSource==="api-key"&&d.push(["",t("m.balanceViaKey")]);let h=_v(t,e.balance,s.balanceStatus,e.demo);return h&&d.push(["",h]),o&&(d.push([t("price.peak"),`${u(o.miss[1])} · ${u(o.output[1])}`]),d.push([t("price.off"),`${u(o.miss[0])} · ${u(o.output[0])}`])),d.push(["",t(a?"m.peakNow":"m.offNow")]),c("tank",d)}case"engine":return c("engine",[[t("hover.model"),i.model?`${i.model}${i.effort?` · ${i.effort}`:""}`:"—"],[t("phase."+e.phase),s.tps>.5?t("unit.tps",{n:Math.round(s.tps)}):"—"]]);case"console":{let d=[[t("row.context"),`${fs(l.contextRatio)} · ${ln(i.contextTokens)} / ${ln(i.contextWindow)}`],[t("row.miss"),ln(i.totals.miss)]];return i.totals.write>0&&d.push([t("row.write"),ln(i.totals.write)]),d.push([t("row.hit"),ln(i.totals.hit)],[t("row.output"),ln(i.totals.output)],[t("row.reasoning"),ln(i.totals.reasoning)],[t("row.cost"),An(i.totals.cost)]),c("console",d)}case"dispenser":case"robot":case"lock":case"unload":case"living":return c(n);case"dock":{let d=i.agents||[];if(!d.length)return c("dock",[["",t("dock.none")]]);let h=x=>d.filter(_=>_.status===x).length,f=d.filter(x=>x.status==="running"),p=[[t("dock.running"),String(f.length)],[t("dock.done"),String(h("done"))]];h("error")&&p.push([t("dock.failed"),String(h("error"))]),h("stopped")&&p.push([t("dock.stopped"),String(h("stopped"))]),e.dock&&e.dock.overflow&&p.push([t("dock.queued"),String(e.dock.overflow)]);let g=i.workflows||[],m=g.filter(x=>x.status==="running").pop()||g[g.length-1];m&&p.push([t("dock.workflow"),`${m.name||"—"}${m.phase?` · ${m.phase}`:""} · ${m.done+m.failed}/${m.agents}`]);for(let x of f.slice(-3))p.push(["",x.label||x.name||x.id]);return c("dock",p)}case"stocker":{let d=i.turns.filter(f=>f.status!=="running"),h=d.filter(f=>f.status==="ok").length;return c("stocker",[[t("status.ok"),`${h}/${d.length}`]])}case"loadport":{let d=i.turns[i.turns.length-1];return!d||d.status!=="running"?c("loadport"):{title:`${u0(qt.loadport,r)} · ${t("hover.batch",{no:d.no})}`,body:t("desc.loadport"),rows:hv(t,d)}}default:break}if(n.startsWith("screen:")){let d=n.slice(7),h={flow:"screen.descFlow",main:"screen.descMain",cost:"screen.descCost"}[d];return h?{title:t("screen."+d),body:t(h),rows:[["",t("screen.click")]]}:null}if(n.startsWith("station:")){let d=n.slice(8),h=_i[d];if(!h)return null;let f=i.calls.filter(_=>_.kind===d),p=f.filter(_=>_.status==="running").pop(),g=f[f.length-1],m=[];p?m.push([t("hover.working"),p.label||p.name]):g&&m.push([t("hover.lastCall"),g.label||g.name]),m.push([t("hover.calls"),String(i.tools.byKind&&i.tools.byKind[d]||0)]);let x=f.filter(_=>_.status==="error").length;return x&&m.push([t("status.error"),String(x)]),{title:u0(h,r),body:t("st."+d),rows:m}}if(n.startsWith("foup:")){let d=Number(n.slice(5)),h=i.turns.find(f=>f.no===d);return{title:t("hover.batch",{no:d}),body:"",rows:h?hv(t,h):[]}}if(n.startsWith("card:")){let d=(e.cards||[]).find(h=>h.id===n.slice(5));return d?{title:d.k,body:d.title||[d.v,d.s].filter(Boolean).join(" · "),rows:[]}:null}return null}var Za=8;function fv({hover:n,data:e,rootRef:t}){let i=R3(n.id,e),s=sn(null),[r,o]=rn(null);if(e3(()=>{let l=s.current,c=t.current;if(!l||!c)return;let u=c.clientWidth,d=c.clientHeight,h=l.offsetWidth,f=l.offsetHeight,p=n.x+16;p+h>u-Za&&(p=n.x-14-h);let g=n.y+18;g+f>d-Za&&(g=n.y-12-f),p=Math.round(Math.max(Za,Math.min(p,u-Za-h))),g=Math.round(Math.max(Za,Math.min(g,d-Za-f))),o(m=>m&&m.x===p&&m.y===g?m:{x:p,y:g})}),!i)return null;let a=r?{left:r.x,top:r.y}:{left:0,top:0,visibility:"hidden"};return de.createElement("div",{ref:s,className:"dwp3d-panel dwp3d-tip",style:a,role:"tooltip"},de.createElement("h4",null,i.title),i.body?de.createElement("p",null,i.body):null,i.rows.length?de.createElement("div",{style:{marginTop:6}},i.rows.map(([l,c],u)=>de.createElement("div",{className:"row",key:u},de.createElement("span",null,l),de.createElement("span",null,c)))):null)}var C3=n=>n.title||`${n.k} · ${n.v}${n.s?` · ${n.s}`:""}`,P3=n=>{try{return n.matches(":focus-visible")}catch{return!0}};function I3({card:n,uid:e,onTip:t}){let i=C3(n),s=sn(n.v),[r,o]=rn(0),a=sn(!1);Si(()=>{s.current!==n.v&&(s.current=n.v,o(u=>u+1))},[n.v]);let l=l3[n.id],c=`${e}-card-${n.id}`;return de.createElement("div",{className:"dwp3d-panel dwp3d-card",title:i,style:l?{"--dwp3d-c":l}:void 0,tabIndex:0,"aria-describedby":c,onPointerDown:u=>{a.current=u.pointerType!=="mouse"},onFocus:u=>{(a.current||P3(u.currentTarget))&&t(n.id,u.currentTarget)},onBlur:()=>t(null)},de.createElement("span",{id:c,className:"dwp3d-sr"},i),de.createElement("div",{className:"k"},n.k),de.createElement("div",{className:"v",key:r,"data-bump":r?"":void 0},n.v),n.s?de.createElement("div",{className:"s"},n.s):null,n.bar!=null?de.createElement("div",{className:"dwp3d-bar"},de.createElement("i",{style:{width:`${Math.round(Math.min(1,Math.max(0,n.bar))*100)}%`,background:n.barColor}})):null)}function L3({t:n,calls:e}){return de.createElement("div",{className:"dwp3d-panel dwp3d-ticker"},de.createElement("h3",null,n("ticker.title")),e.length?e.map(t=>{let i=ov[t.status]?t.status:"running",s=ov[i],r=_i[t.kind]||_i.generic,o=t.label?`${t.name} · ${t.label}`:t.name;return de.createElement("div",{className:"dwp3d-tick",key:t.id,title:`${r.code} · ${o}`},de.createElement("span",{className:i==="running"?"st run":"st",style:{color:s.color},"aria-hidden":"true"},s.icon),de.createElement("span",{className:"dwp3d-sr"},n("call."+i)),de.createElement("code",null,r.code),de.createElement("span",{className:"l"},o))}):de.createElement("div",{className:"dwp3d-tick dwp3d-muted"},n("ticker.empty")))}function D3({t:n,hintOn:e,hintKey:t,onDismiss:i}){return de.createElement("div",{className:"dwp3d-panel dwp3d-legend"},de.createElement("div",{className:"dwp3d-legend-row"},de.createElement("span",{className:"dwp3d-legend-k"},n("legend.title")),a3.map(s=>de.createElement("span",{className:"dwp3d-legend-item",key:s},de.createElement("i",{className:`dwp3d-sw ${s}`,"aria-hidden":"true"}),n("legend."+s)))),e?de.createElement("div",{className:"dwp3d-hint"},de.createElement("span",null,n(t)),de.createElement("button",{type:"button",className:"dwp3d-x","aria-label":n("hint.dismiss"),title:n("hint.dismiss"),onClick:i},"×")):null)}function N3({t:n,id:e,ids:t,onStep:i,onBack:s}){let r=Math.max(0,t.indexOf(e)),o=t.length>1;return de.createElement("div",{className:"dwp3d-screenbar-wrap"},de.createElement("div",{className:"dwp3d-panel dwp3d-screenbar",role:"toolbar","aria-label":n("screen.bar")},de.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.prev"),"aria-label":n("screen.prev"),onClick:()=>i(-1)},"◀"),de.createElement("div",{className:"dwp3d-screenbar-name","aria-live":"polite"},de.createElement("b",null,n("screen."+e)),de.createElement("span",null,n("screen.count",{i:r+1,n:t.length}))),de.createElement("button",{type:"button",className:"dwp3d-btn",disabled:!o,title:n("screen.next"),"aria-label":n("screen.next"),onClick:()=>i(1)},"▶"),de.createElement("span",{className:"sep","aria-hidden":"true"}),de.createElement("button",{type:"button",className:"dwp3d-btn",onClick:s},n("screen.back"))),de.createElement("p",{className:"dwp3d-screenbar-hint"},n("screen.hint")))}var O3=()=>typeof document<"u"&&document.fullscreenEnabled!==!1&&typeof HTMLElement<"u"&&typeof HTMLElement.prototype.requestFullscreen=="function";function bv(n){let{ctx:e}=n,t=w3(e),i=S3(e),s=n.tBound||n.t,r=Mi((Z,Ke)=>{let xn=typeof s=="function"?s(Z):Z,Cn=typeof xn=="string"&&xn?xn:Z;return Ke?iy(Cn,Ke):Cn},[s]),o=sn(r);o.current=r;let a=sn(i);a.current=i;let l=sn(null),c=sn(null),u=sn(null),d=sn(dh()),h=sn({phase:"idle",tps:0,balance:null,currency:"CNY",balanceStatus:"loading"}),f=sn(0),p=sn(!1),g=sn(!0),m=sn(0),x=sn({settle:Ah,low:0}),[,_]=pv(Z=>Z+1,0),[b,y]=rn(0),[M,w]=rn(()=>lv()!=null),v=sn(M),[S,D]=rn(()=>lv()||"medium"),T=sn(S),[P,k]=rn(d3),z=sn(P),[I,V]=rn(()=>ho(av)==="on"),ne=sn(I);ne.current=I;let[te,ie]=rn(null),[J,Y]=rn(f3),O=sn(J),[G,K]=rn(p3),q=sn(G),[ae,fe]=rn(!1),ge=h3(),[oe,Pe]=rn("overview"),[Ye,Fe]=rn(!1),[Ze,$e]=rn(!0),pe=sn(Ze);pe.current=Ze;let[X,U]=rn(!0),[se,$]=rn(()=>ho(a0)!=="off"),[Ce,Re]=rn(()=>ho(l0)!=="off"),[H,me]=rn("orbit"),[be,F]=rn(null),[ot,pt]=rn(!1),[vt,Ie]=rn(null),[A,j]=rn(!0),[xe,L]=rn(null),[E,Q]=rn(null),[ve,_e]=rn(null),[Ne,ze]=rn(null),[Me,we]=rn(!1),Ge=sn(null),W=sn(null),Ee=typeof n.useProjection=="function"?n.useProjection:null,ye=typeof n.useSession=="function"?n.useSession:null,Be=typeof n.useChat=="function"?n.useChat:null,[He,Ve]=rn(m3),[ut,Ct]=rn(!1),re=!!Ee&&!ut,Je=He==="demo"||!re,Mt=sn(Je);Mt.current=Je;let je=n.sessionId||"",[Qt,Rn]=rn(0),[ai,fo]=rn(!1),[Bs,qo]=rn(!1),Pr=sn(void 0),Ir=sn(void 0),Di=sn(""),ps=sn(null);ps.current||(ps.current=tv());let Lr=sn({status:"loading",balance:null,currency:"CNY",toppedUp:null,granted:null,source:null}),En=sn(0),mi=sn(null),Xn=Mi(()=>{f.current||(f.current=setTimeout(()=>{f.current=0,g.current?_():p.current=!0},c3))},[]),li=Mi(Z=>{_e(Z),clearTimeout(m.current),m.current=setTimeout(()=>_e(null),3500)},[]),Xi=Mi(Z=>{$o.includes(Z)&&(T.current=Z,D(Z),x.current={settle:Ah,low:0},u.current&&u.current.setQuality(Z))},[]),ms=sn({running:void 0,blank:!1}),Ni=Mi(()=>{Mt.current||(d.current=nv(Pr.current,Ir.current)||dh(),u.current&&u.current.setState(d.current),Xn())},[Xn]),tr=Mi(Z=>{Lr.current=Z,!Mt.current&&(Object.assign(h.current,{balance:Z.balance,currency:Z.currency,balanceStatus:Z.status,toppedUp:Z.toppedUp,granted:Z.granted,balanceSource:Z.source}),u.current&&u.current.setLive({balance:Z.balance,currency:Z.currency,balanceStatus:Z.status}),Xn())},[Xn]),gs=Mi(()=>{if(Mt.current)return;mi.current&&mi.current.abort();let Z=typeof AbortController=="function"?new AbortController:null;mi.current=Z,iv({lang:a.current,signal:Z?Z.signal:void 0}).then(Ke=>{Z&&Z.signal.aborted||(mi.current=null,!(Ke.status!=="ready"&&Ke.status!=="signed-out"&&Lr.current.balance!=null)&&tr(Ke))},()=>{})},[tr]),Yo=Mi(Z=>{clearTimeout(En.current),En.current=setTimeout(gs,Z)},[gs]),Dr=Mi(Z=>{Pr.current=Z,Z&&fo(!0),Ni();let Ke=Z&&Array.isArray(Z.turns)?Z.turns:[],xn=Ke.length?Ke[Ke.length-1]:null,Cn=xn?`${xn.no}:${xn.status}`:"";Di.current&&Cn!==Di.current&&xn&&xn.status!=="running"&&Yo(s3),Di.current=Cn},[Ni,Yo]),po=Mi(Z=>{Ir.current=Z,Ni()},[Ni]),R=Mi(Z=>{let Ke=Z?Z[0]==="1":void 0;ms.current={running:Ke,blank:Z?Z[1]==="1":!1},!Mt.current&&(h.current.running=Ke,u.current&&u.current.setLive({running:Ke}),Xn())},[Xn]),ee=Mi(Z=>{if(Mt.current)return;let Ke=h.current;Ke.phase===Z.phase&&Math.abs((Ke.tps||0)-Z.tps)<.05||(Ke.phase=Z.phase,Ke.tps=Z.tps,u.current&&u.current.setLive({phase:Z.phase,tps:Z.tps}),Xn())},[Xn]),he=Mi(Z=>{ee(ps.current.push(Z,dv()))},[ee]),le=Mi(Z=>{Ct(!0),typeof console<"u"&&console.warn("[dsh-work-process-3d] live data unavailable:",Z)},[]),ue=Mi((Z,Ke=!0)=>{Z!=="live"&&Z!=="demo"||(Ve(Z),Ke&&Us(mv,Z==="demo"?"demo":null))},[]);Si(()=>{let Z=c.current;if(!Z)return;let Ke=null,xn=!1,Cn=0;j(!0),L(null),Q(null),Ie(null),me("orbit"),F(null);let sr=yn=>{L(Ch=>Ch&&Ch.kind==="lost"?null:Ch),ne.current&&ie(yn);let ss=x.current;if(ss.settle>0){ss.settle-=1;return}if(v.current)return;let Rh=yn&&yn.scale<=yn.minScale+.001;if(ss.low=yn&&yn.slow&&Rh?ss.low+1:0,ss.low<u3)return;ss.low=0;let f0=$o.indexOf(T.current);if(f0<=0)return;let p0=$o[f0-1];Xi(p0),li(o.current("quality.downgraded",{q:o.current(`quality.${p0}`)}))},Sv=()=>{try{Ke=jy(Z,{quality:v.current?T.current:"auto",fps:z.current,look:O.current,brightness:q.current,demo:Mt.current,onHover:Ie,onSelect:yn=>{let ss=M3(yn);!ss||!Ke||(Ke.setCameraPreset(ss),Pe(ss),Fe(!1))},onPerf:sr,onError:(yn,ss)=>{if(yn==="shader"){Q(Rh=>Rh||String(ss||""));return}yn==="context-lost"&&(Ie(null),L({kind:"lost"}))},onActive:yn=>{g.current=yn,yn&&p.current&&(p.current=!1,_())},onReady:()=>j(!1),onMode:yn=>{me(yn),(yn==="look"||yn==="screen")&&Fe(!1)},onScreen:yn=>{F(yn),yn&&Ie(null)},onUserCamera:()=>Pe(null)})}catch(yn){for(;Z.firstChild;)Z.removeChild(Z.firstChild);j(!1),L({kind:"webgl",msg:String(yn&&yn.message||yn)});return}u.current=Ke,T.current=Ke.getQuality(),D(T.current),x.current={settle:Ah,low:0},Ke.setLabels(uv(a.current)),Ke.setLabelsVisible(pe.current),Ke.setPerfDetail(ne.current),Rn(yn=>yn+1),_()},wv=requestAnimationFrame(()=>{Cn=requestAnimationFrame(()=>{xn||Sv()})});return()=>{xn=!0,cancelAnimationFrame(wv),cancelAnimationFrame(Cn),Ke&&Ke.dispose(),u.current=null,clearTimeout(f.current),f.current=0}},[b,Xi,Xn,li]),Si(()=>{let Z=u.current;if(!Z)return;if(Z.resetState(),Z.setDemo(Je),ps.current.reset(),Je){let xn=()=>u.current===Z,Cn=Qy({onEvents:sr=>{xn()&&(d.current=$p(d.current,sr),Z.setState(d.current),Xn())},onLive:sr=>{xn()&&(Object.assign(h.current,sr),Z.setLive(sr),Xn())}});return d.current=$p(dh(),Cn.prefill(2)),h.current={phase:"idle",tps:0,balance:Cn.balance,currency:"CNY",balanceStatus:"ready",running:void 0},Z.setState(d.current),Z.setLive(h.current),Cn.start(),_(),()=>Cn.stop()}let Ke=Lr.current;h.current={phase:"idle",tps:0,balance:Ke.balance,currency:Ke.currency,balanceStatus:Ke.status,toppedUp:Ke.toppedUp,granted:Ke.granted,balanceSource:Ke.source,running:ms.current.running},Z.setLive(h.current),Di.current="",Ni(),_()},[Qt,Je,je,Xn,Ni]),Si(()=>{if(Je)return;gs();let Z=setInterval(()=>{let Ke=typeof document<"u"&&document.visibilityState==="hidden";g.current&&!Ke&&gs()},i3);return()=>{clearInterval(Z),clearTimeout(En.current),mi.current&&mi.current.abort(),mi.current=null}},[Je,gs]),Si(()=>{if(Je)return;let Z=setInterval(()=>ee(ps.current.tick(dv())),r3);return()=>clearInterval(Z)},[Je,ee]),Si(()=>{if(qo(!1),Je||ai)return;let Z=setTimeout(()=>qo(!0),n3);return()=>clearTimeout(Z)},[Je,ai]),Si(()=>()=>clearTimeout(m.current),[]),Si(()=>{u.current&&u.current.setLabels(uv(i))},[i,t]),Si(()=>{u.current&&u.current.setLabelsVisible(Ze)},[Ze]),Si(()=>{let Z=()=>pt(!!l.current&&document.fullscreenElement===l.current);return document.addEventListener("fullscreenchange",Z),()=>document.removeEventListener("fullscreenchange",Z)},[]),Si(()=>{if(!ae||!W.current)return;let Z=W.current.querySelector("button:not([disabled]), input:not([disabled]), select:not([disabled])");try{Z&&Z.focus({preventScroll:!0})}catch{}},[ae]);let De=!!xe&&xe.kind==="lost";Si(()=>{if(we(!1),!De)return;let Z=setTimeout(()=>we(!0),o3);return()=>clearTimeout(Z)},[De]);let it=()=>{try{c.current&&c.current.focus({preventScroll:!0})}catch{}},We=()=>{let Z=u.current,Ke=Z?Z.getMode():H;(Ke==="look"||Ke==="screen")&&it()},Ue=Z=>{let Ke=u.current;if(!Ke)return;let xn=Ke.getMode();Ke.setCameraPreset(Z),Pe(Z),Fe(!1);let Cn=Ke.getMode();Cn!==xn&&(Cn==="look"||Cn==="orbit")&&li(r(Cn==="look"?"mode.toLook":"mode.toOrbit")),Cn==="look"&&it()},ct=Z=>{Z==="screens"?Tt():c0.includes(Z)&&Ue(Z)},Tt=()=>{let Z=u.current;if(Z){if(Z.getScreen()){Z.exitScreen();return}Z.focusScreen("main")&&(Fe(!1),it())}},Bt=Z=>{u.current&&u.current.stepScreen(Z),it()},at=()=>{let Z=u.current;Z&&(Z.exitScreen(),We())},Lt=()=>{let Z=u.current,Ke=!Ye;Z&&Z.setFollow(Ke),Fe(Z&&typeof Z.getFollow=="function"?Z.getFollow():Ke)},Mn=()=>{$e(Z=>!Z),We()},on=()=>{U(Z=>!Z),We()},en=Z=>{if(fe(!1),!(!Z||!Ge.current))try{Ge.current.focus({preventScroll:!0})}catch{}},On=Z=>{if(!(Z.key!=="Escape"||Z.defaultPrevented||Z.ctrlKey||Z.metaKey||Z.altKey)){if(ae){Z.preventDefault(),Z.stopPropagation(),en(!0);return}be&&u.current&&(Z.preventDefault(),Z.stopPropagation(),at())}},lt=Mi((Z,Ke)=>{let xn=l.current;if(!Z||!Ke||!xn){ze(null);return}let Cn=Ke.getBoundingClientRect(),sr=xn.getBoundingClientRect();ze({id:Z,x:Cn.left-sr.left+Cn.width/2,y:Cn.top-sr.top})},[]),Un=()=>{let Z=l.current;if(!Z)return;let Ke=()=>li(o.current("error.fullscreen"));try{let xn=document.fullscreenElement?document.exitFullscreen():Z.requestFullscreen();xn&&typeof xn.catch=="function"&&xn.catch(Ke)}catch{Ke()}},Gt=Z=>{if(Z==="auto"){Us(d0,null),v.current=!1,w(!1),u.current&&Xi(u.current.autoQuality());return}$o.includes(Z)&&(Us(d0,Z),v.current=!0,w(!0),Xi(Z))},Oi=Z=>{let Ke=Z==="auto"?"auto":Number(Z);Ya.includes(Ke)&&(z.current=Ke,k(Ke),Us(gv,Ke==="auto"?null:String(Ke)),x.current={settle:Ah,low:0},u.current&&u.current.setFrameCap(Ke))},kn=()=>{let Z=!I;V(Z),Us(av,Z?"on":null),Z||ie(null),u.current&&u.current.setPerfDetail(Z)},nr=Z=>{ko.includes(Z)&&(O.current=Z,Y(Z),Us(xv,Z===io?null:Z),u.current&&u.current.setLook(Z))},wi=Z=>{let Ke=Math.min(_n.max,Math.max(_n.min,Number(Z)||_n.initial));q.current=Ke,K(Ke),Us(yv,Math.abs(Ke-_n.initial)<.001?null:String(Ke)),u.current&&u.current.setBrightness(Ke)},xs=()=>{H==="look"?(Us(l0,"off"),Re(!1)):(Us(a0,"off"),$(!1))},Wt=H==="look"?Ce:se,Tn=()=>{let Z=!Wt;Us(a0,Z?null:"off"),Us(l0,Z?null:"off"),$(Z),Re(Z)},Bn=Z=>{let Ke=u.current;Ke&&(Ke.setMode(Z),me(Ke.getMode()),Z==="look"&&(Fe(!1),it()))},cn=()=>y(Z=>Z+1),dt=d.current,fn=h.current,At=fh(dt),Ko=Qs(dt.provider,dt.model),ja=Tr(Date.now()),Nr=fn.phase&&fn.phase!=="idle"?fn.phase:fn.running===!1?"idle":dt.phase,Or=typeof fn.balance=="number"?fn.balance:null,kr=fn.currency||"CNY",ir=Or!=null&&Ko&&kr!=="USD"?lh(Or,Ko,ja):0,Zo=dt.turns.filter(Z=>Z.status!=="running"),mo=Zo.filter(Z=>Z.status==="ok").length,Ec=At.contextRatio>=.8?"#ff5d5d":At.contextRatio>=.6?"#ffb347":"#4d6bfe",Tc=fn.tps>.5&&(Nr==="generating"||Nr==="reasoning")?` · ${r("unit.tps",{n:Math.round(fn.tps)})}`:"",Qa=dt.totals.miss+dt.totals.write,ys=dt.files,el=[{id:"balance",k:r(Je?"m.balanceDemo":"m.balance"),v:vv(r,Or,kr,fn.balanceStatus),s:ir?r("m.balanceSub",{tokens:ln(ir)}):"",title:!Je&&Or!=null&&fn.toppedUp!=null?r("m.balanceTitle",{topped:An(fn.toppedUp,kr),granted:An(fn.granted||0,kr)}):_v(r,Or,fn.balanceStatus,Je)||void 0},{id:"context",k:r("m.context"),v:fs(At.contextRatio),s:`${ln(dt.contextTokens)} / ${ln(dt.contextWindow)}`,bar:At.contextRatio,barColor:Ec,title:r("m.contextTitle",{pct:fs(At.contextRatio),used:ln(dt.contextTokens),window:ln(dt.contextWindow)})},{id:"input",k:r("m.input"),v:ln(At.prompt),s:r("m.inputSub",{rate:fs(At.hitRate),miss:ln(Qa)}),title:r("m.inputTitle",{total:ln(At.prompt),hit:ln(dt.totals.hit),rate:fs(At.hitRate),miss:ln(Qa),write:dt.totals.write>0?r("m.writeNote",{n:ln(dt.totals.write)}):"",saved:An(dt.totals.savings)})},{id:"output",k:r("m.output"),v:ln(dt.totals.output),s:r("m.outputSub",{n:ln(dt.totals.reasoning)})},{id:"cost",k:r("m.cost"),v:An(dt.totals.cost),s:r("m.costSub",{peak:An(dt.totals.costPeak),off:An(dt.totals.costOffPeak)}),title:r("m.costTitle",{cost:An(dt.totals.cost),requests:dt.totals.requests,peak:An(dt.totals.costPeak),off:An(dt.totals.costOffPeak),saved:An(dt.totals.savings)})},{id:"tools",k:r("m.tools"),v:String(dt.tools.calls),s:r("m.toolsSub",{n:dt.tools.errors,rate:fs(At.toolSuccess)}),title:r("m.toolsTitle",{calls:dt.tools.calls,running:dt.tools.running,n:dt.tools.errors})},{id:"products",k:r("m.products"),v:`${ys.count} ${r("m.filesUnit")}`,s:r("m.productsSub",{a:ys.added,r:ys.removed,ok:mo,done:Zo.length}),title:r("m.productsTitle",{n:ys.count,a:ys.added,r:ys.removed,ok:mo,done:Zo.length})},{id:"efficiency",k:r("m.efficiency"),v:`${At.linesPerKTokens.toFixed(1)} ${r("m.linesUnit")}`,s:r("m.efficiencySub",{cpf:An(At.costPerFile)}),title:r("m.efficiencyHint")}],B=dt.calls.slice(-5).reverse(),Se=vt&&vt.id==="dock"&&u.current?u.current.dockInfo():null,Oe={t:r,s:dt,live:fn,lang:i,price:Ko,peak:ja,m:At,phase:Nr,balance:Or,currency:kr,demo:Je,dock:Se,cards:el},qe=!Je&&!ai&&Bs,Qe=!Je&&ai&&dt.turnCount===0&&!dt.calls.length,mt=!!xe&&xe.kind==="webgl",Xt=!A&&!mt,zs=be&&u.current?u.current.screens():[],Jo=M?r("quality.autoPlain"):r("quality.autoOpt",{q:r("quality."+S)});return de.createElement("div",{ref:l,className:`dwp3d-root${mt?" fail":""}`,onKeyDown:On},de.createElement("style",null,sv),Je?null:de.createElement(de.Fragment,null,de.createElement(Ja,{onError:le},de.createElement(cv,{use:Ee,name:t3,onValue:Dr})),de.createElement(Ja,null,de.createElement(cv,{use:Ee,name:"contextPressure",onValue:po})),ye?de.createElement(Ja,null,de.createElement(x3,{use:ye,onValue:R})):null,Be?de.createElement(Ja,null,de.createElement(v3,{use:Be,onValue:he})):null),de.createElement("div",{ref:c,className:"dwp3d-stage",tabIndex:0,role:"application","aria-label":r("stage.label")}),ae?de.createElement("div",{className:"dwp3d-backdrop",onPointerDown:()=>en(!1)}):null,Xt?de.createElement("div",{className:"dwp3d-top"},de.createElement("div",{className:"dwp3d-panel dwp3d-title"},de.createElement("div",{className:"dwp3d-title-row"},de.createElement("h2",null,r("title")),Je?de.createElement("span",{className:"dwp3d-chip demo",title:r("badge.demoHint")},r("badge.demo")):de.createElement("span",{className:"dwp3d-chip live",title:r("badge.liveHint")},r("badge.live")),dt.model?de.createElement("span",{className:"dwp3d-chip"},`${dt.model}${dt.effort?` · ${dt.effort}`:""}`):null,de.createElement("span",{className:"dwp3d-chip"},de.createElement("i",{className:"dwp3d-dot",style:{color:rv[Nr]||rv.idle},"aria-hidden":"true"}),`${r("phase."+Nr)}${Tc}`)),Je?de.createElement("p",{className:"dwp3d-note"},r(re?"badge.demoHint":ut?"live.failed":"live.unsupported"),re?de.createElement(de.Fragment,null," ",de.createElement("button",{type:"button",className:"dwp3d-link",onClick:()=>ue("live")},r("live.backToLive"))):null):null,qe?de.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"status"},r("live.missing")," ",de.createElement("button",{type:"button",className:"dwp3d-link",onClick:()=>ue("demo",!1)},r("live.showDemo"))):null,Qe?de.createElement("p",{className:"dwp3d-note"},r("live.idle")):null,E?de.createElement("p",{className:"dwp3d-note dwp3d-warn",role:"alert"},r("error.shader",{msg:E})):null),de.createElement("div",{className:"dwp3d-right"},de.createElement("div",{className:"dwp3d-panel dwp3d-tools"},de.createElement("select",{className:"dwp3d-select dwp3d-viewsel","aria-label":r("ctl.views"),value:be?"screens":!Ye&&oe?oe:"",onChange:Z=>ct(Z.target.value)},de.createElement("option",{value:"",disabled:!0},r("ctl.viewPick")),c0.map(Z=>de.createElement("option",{key:Z,value:Z},r("view."+Z))),de.createElement("option",{value:"screens"},r("view.screens"))),de.createElement("div",{className:"dwp3d-seg dwp3d-views",role:"group","aria-label":r("ctl.views")},c0.map(Z=>{let Ke=!Ye&&!be&&oe===Z;return de.createElement("button",{key:Z,type:"button",className:`dwp3d-btn${Ke?" on":""}`,"aria-pressed":Ke,title:Z==="balcony"?r("view.balconyHint"):void 0,onClick:()=>Ue(Z)},r("view."+Z))}),de.createElement("button",{type:"button",className:`dwp3d-btn${be?" on":""}`,title:r("view.screensHint"),"aria-pressed":!!be,onClick:Tt},r("view.screens"))),de.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("ctl.mode")},r0.map(Z=>de.createElement("button",{key:Z,type:"button",className:`dwp3d-btn${H===Z?" on":""}`,title:r(`mode.${Z}Hint`),"aria-pressed":H===Z,onClick:()=>Bn(Z)},r("mode."+Z)))),de.createElement("div",{className:"dwp3d-group",role:"group","aria-label":r("ctl.layers")},de.createElement("button",{type:"button",className:`dwp3d-btn${Ye?" on":""}`,title:r("ctl.followHint"),"aria-pressed":Ye,onClick:Lt},r("ctl.follow")),de.createElement("button",{type:"button",className:`dwp3d-btn${Ze?" on":""}`,title:r("ctl.labelsHint"),"aria-pressed":Ze,onClick:Mn},r("ctl.labels")),de.createElement("button",{type:"button",className:`dwp3d-btn${X?" on":""}`,title:r("ctl.panelsHint"),"aria-pressed":X,onClick:on},r("ctl.panels")),de.createElement("button",{ref:Ge,type:"button",className:`dwp3d-btn${ae?" on":""}`,title:r("ctl.displayHint"),"aria-expanded":ae,"aria-haspopup":"dialog",onClick:()=>ae?en(!1):fe(!0)},r("ctl.display")),O3()?de.createElement("button",{type:"button",className:"dwp3d-btn",onClick:Un},r(ot?"ctl.exitFullscreen":"ctl.fullscreen")):null)),ae?de.createElement("div",{ref:W,className:"dwp3d-panel dwp3d-pop",role:"dialog","aria-label":r("ctl.display")},de.createElement("div",{className:"dwp3d-pop-row"},de.createElement("span",{className:"dwp3d-pop-k"},r("source.label")),de.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("source.label")},["live","demo"].map(Z=>{let Ke=Z==="demo"?Je:!Je,xn=Z==="live"&&!re;return de.createElement("button",{key:Z,type:"button",className:`dwp3d-btn${Ke?" on":""}`,"aria-pressed":Ke,disabled:xn,title:r(xn?ut?"live.failed":"live.unsupported":"source."+Z+"Hint"),onClick:()=>ue(Z)},r("source."+Z))}))),de.createElement("div",{className:"dwp3d-pop-row"},de.createElement("span",{className:"dwp3d-pop-k"},r("look.label")),de.createElement("div",{className:"dwp3d-seg",role:"group","aria-label":r("look.label")},ko.map(Z=>de.createElement("button",{key:Z,type:"button",className:`dwp3d-btn${J===Z?" on":""}`,"aria-pressed":J===Z,onClick:()=>nr(Z)},r("look."+Z))))),de.createElement("div",{className:"dwp3d-pop-row"},de.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ge}-brightness`},r("ctl.brightness")),de.createElement("input",{id:`${ge}-brightness`,className:"dwp3d-range",type:"range",min:_n.min,max:_n.max,step:_n.step,value:G,"aria-valuetext":`${Math.round(G*100)}%`,onChange:Z=>wi(Z.target.value)}),de.createElement("b",{className:"dwp3d-pop-v"},`${Math.round(G*100)}%`),de.createElement("button",{type:"button",className:"dwp3d-x",title:r("ctl.brightnessReset"),"aria-label":r("ctl.brightnessReset"),disabled:Math.abs(G-_n.initial)<.001,onClick:()=>wi(_n.initial)},"↺")),de.createElement("div",{className:"dwp3d-pop-row"},de.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ge}-quality`},r("ctl.quality")),de.createElement("select",{id:`${ge}-quality`,className:"dwp3d-select",value:M?S:"auto",onChange:Z=>Gt(Z.target.value)},de.createElement("option",{value:"auto"},Jo),$o.map(Z=>de.createElement("option",{key:Z,value:Z},r("quality."+Z))))),de.createElement("div",{className:"dwp3d-pop-row"},de.createElement("label",{className:"dwp3d-pop-k",htmlFor:`${ge}-fps`,title:r("ctl.fpsHint")},r("ctl.fps")),de.createElement("select",{id:`${ge}-fps`,className:"dwp3d-select",value:String(P),title:r("ctl.fpsHint"),onChange:Z=>Oi(Z.target.value)},Ya.map(Z=>de.createElement("option",{key:String(Z),value:String(Z)},_3(r,Z))))),de.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.perfHint")},de.createElement("input",{type:"checkbox",checked:I,onChange:kn}),de.createElement("span",null,r("ctl.perfShow"))),de.createElement("label",{className:"dwp3d-pop-row dwp3d-check",title:r("ctl.hintsHint")},de.createElement("input",{type:"checkbox",checked:Wt,onChange:Tn}),de.createElement("span",null,r("ctl.hints")))):null,I?de.createElement(b3,{t:r,perf:te}):null)):null,de.createElement("div",{className:"dwp3d-toast-wrap",role:"status","aria-live":"polite"},ve?de.createElement("div",{className:"dwp3d-panel dwp3d-toast"},ve):null),Xt&&be?de.createElement(N3,{t:r,id:be,ids:zs,onStep:Bt,onBack:at}):null,Xt&&X&&!be?de.createElement("div",{className:"dwp3d-bottom"},de.createElement("div",{className:"dwp3d-mid"},de.createElement(L3,{t:r,calls:B}),de.createElement(D3,{t:r,hintOn:H==="look"?Ce:se,hintKey:H==="look"?"hint.look":"hint.controls",onDismiss:xs})),de.createElement("div",{className:"dwp3d-cards"},el.map(Z=>de.createElement(I3,{key:Z.id,card:Z,uid:ge,onTip:lt})))):null,Xt&&vt&&!be?de.createElement(fv,{hover:vt,data:Oe,rootRef:l}):null,Xt&&Ne&&!vt&&X&&!be?de.createElement(fv,{hover:{id:`card:${Ne.id}`,x:Ne.x,y:Ne.y},data:Oe,rootRef:l}):null,A&&!xe?de.createElement("div",{className:"dwp3d-center"},de.createElement("div",{className:"dwp3d-panel dwp3d-loading",role:"status"},de.createElement("span",{className:"dwp3d-spin","aria-hidden":"true"}),r("loading"))):null,mt?de.createElement("div",{className:"dwp3d-center"},de.createElement("div",{className:"dwp3d-fail",role:"alert"},de.createElement("h3",null,r("error.webglTitle")),de.createElement("p",null,r("error.webgl",{msg:xe.msg})),de.createElement("button",{type:"button",onClick:cn},r("error.retry")))):null,De?de.createElement("div",{className:"dwp3d-center dim",role:"alert"},de.createElement("div",{className:"dwp3d-panel dwp3d-msg"},de.createElement("p",null,r("error.lost")),Me?de.createElement("button",{type:"button",className:"dwp3d-btn on",onClick:cn},r("error.reload")):null)):null)}var k3="work-process-3d",F3={name:"dsh-work-process-3d",inject:["slots","locale"],apply(n){n.effect(()=>n.locale.register(Rc,x0),"dsh-work-process-3d: dictionaries");let e=n.locale.bind(Rc);n.slots.inject("conversation.view",()=>n.slots.register({name:"conversation.view",id:k3,order:15,locale:Rc,label:()=>e("tab.label")},t=>Mv.createElement(bv,{...t,ctx:n,tBound:e})))}};
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
