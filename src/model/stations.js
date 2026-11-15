// Tool → station mapping and tool-call descriptions shared by the scene and the reducer.

export const STATION_ORDER = [
  'archive', 'engraver', 'terminal', 'satellite', 'robot',
  'press', 'kanban', 'beacon', 'labeler', 'generic',
];

export const STATION_INFO = {
  archive: { zh: '档案检索站', en: 'Archive scanner', code: 'ST-01' },
  engraver: { zh: '激光雕刻机', en: 'Laser engraver', code: 'ST-02' },
  terminal: { zh: '终端控制台', en: 'Terminal console', code: 'ST-03' },
  satellite: { zh: '卫星天线', en: 'Satellite uplink', code: 'ST-04' },
  robot: { zh: '协作机械臂', en: 'Cobot cell', code: 'ST-05' },
  press: { zh: '液压压缩机', en: 'Hydraulic press', code: 'ST-06' },
  kanban: { zh: '任务看板', en: 'Kanban board', code: 'ST-07' },
  beacon: { zh: '呼叫信标', en: 'Call beacon', code: 'ST-08' },
  labeler: { zh: '贴标包装机', en: 'Labeler', code: 'ST-09' },
  generic: { zh: '通用模块', en: 'Generic module', code: 'ST-10' },
};

/**
 * Names and codes of the machines that are not tool stations. The 3D nameplates,
 * the HTML labels and the tooltips all read this table so one machine has one name.
 */
export const MACHINE_INFO = {
  tank: { zh: '燃料罐', en: 'Fuel tank', code: 'TK-1' },
  engine: { zh: '主引擎', en: 'Main engine', code: 'EN-1' },
  console: { zh: '仪表台', en: 'Instrument console', code: 'CP-1' },
  dispenser: { zh: '晶圆供料器', en: 'Wafer dispenser', code: 'WD-1' },
  robot: { zh: '中央机械臂', en: 'Central robot', code: 'RB-1' },
  lock: { zh: '装载锁', en: 'Load lock', code: 'LL-1' },
  unload: { zh: '卸载锁', en: 'Unload lock', code: 'UL-1' },
  loadport: { zh: '装载端口', en: 'Load port', code: 'LP-1' },
  stocker: { zh: '成品库', en: 'Product stocker', code: 'STK-1' },
  gantry: { zh: '天车', en: 'Gantry crane', code: 'OHT-1' },
  dock: { zh: '子智能体坞站', en: 'Subagent dock', code: 'SA-1' },
  living: { zh: '生活区', en: 'Living quarters', code: 'LV-1' },
};

/** Kinds whose successful calls count as produced output. */
export const PRODUCTIVE_KINDS = new Set(['engraver', 'labeler']);

const RULES = [
  ['press', /^(compress|decompress|search_context|acp_status|acp_cache)$/],
  ['beacon', /^(ask_user_question|ask_user|request_user_input|exit_plan_mode)$/],
  ['labeler', /^(present|send_wechat|send_file|deliver)$/],
  ['kanban', /^(todo_write|todo_read|create_goal|update_goal|get_goal|team_task_[a-z_]+|schedule_[a-z_]+)$/],
  ['robot', /^(subagent|subagent_fork|workflow|send_message|wait_agent|list_agents|list_subagent_models|task|agent)$/],
  ['satellite', /^(web_search|web_fetch|fetch|browse|mcp__.*(web|search|fetch|browser).*)$/],
  ['terminal', /^(pwsh|bash|sh|shell|powershell|cmd|run_code|exec|execute|python|job_output|job_kill|job_list|restart_harness)$/],
  ['engraver', /^(write|edit|multi_edit|multiedit|apply_patch|str_replace|str_replace_editor|create_file|notebook_edit|insert)$/],
  ['archive', /^(read|read_image|grep|glob|ls|list|list_dir|view|find|cat|working_directory|read_mcp_resource|list_mcp_resources|list_mcp_resource_templates|cordis_inspect_[a-z_]+|skill|load_workspace_dependencies|acp_read_original_image)$/],
];

export function stationKindOf(name) {
  const n = String(name || '').trim().toLowerCase();
  for (const [kind, re] of RULES) if (re.test(n)) return kind;
  return 'generic';
}

export function parseArgs(args) {
  if (args && typeof args === 'object') return args;
  if (typeof args === 'string' && args.trim()) {
    try {
      const v = JSON.parse(args);
      return v && typeof v === 'object' ? v : {};
    } catch {
      return {};
    }
  }
  return {};
}

export function basename(p) {
  const s = String(p || '').replace(/[\\/]+$/, '');
  const i = Math.max(s.lastIndexOf('/'), s.lastIndexOf('\\'));
  return i >= 0 ? s.slice(i + 1) : s;
}

function clip(s, max = 48) {
  const one = String(s).replace(/\s+/g, ' ').trim();
  return one.length > max ? `${one.slice(0, max - 1)}…` : one;
}

function firstString(a, keys) {
  for (const k of keys) {
    const v = a[k];
    if (typeof v === 'string' && v.trim()) return v;
    if (Array.isArray(v) && v.length) {
      const f = v[0];
      if (typeof f === 'string' && f.trim()) return f;
      if (f && typeof f === 'object') {
        const inner = firstString(f, ['path', 'file_path', 'question', 'content', 'subject', 'description']);
        if (inner) return inner;
      }
    }
  }
  return '';
}

/** Short human label for a tool call: file name, command, query, URL host or description. */
export function describeToolCall(name, args) {
  const a = parseArgs(args);
  const path = firstString(a, ['file_path', 'path', 'filePath', 'files']);
  if (path) return clip(basename(path) || path);
  const cmd = firstString(a, ['command', 'cmd', 'script', 'code']);
  if (cmd) return clip(cmd.split('\n').find((l) => l.trim()) || cmd);
  const url = firstString(a, ['url']);
  if (url) {
    try {
      return clip(new URL(url).host || url);
    } catch {
      return clip(url);
    }
  }
  const text = firstString(a, [
    'queries', 'query', 'pattern', 'questions', 'question', 'objective', 'description',
    'prompt', 'subject', 'title', 'message', 'todos', 'content', 'action', 'target', 'blockId',
  ]);
  if (text) return clip(text);
  return '';
}

function lineList(s) {
  return typeof s === 'string' && s.length ? s.replace(/\r\n/g, '\n').split('\n') : [];
}

/** Approximate +/- lines of one replacement by trimming common leading/trailing lines. */
function replaceDelta(oldText, newText) {
  const a = lineList(oldText);
  const b = lineList(newText);
  let start = 0;
  while (start < a.length && start < b.length && a[start] === b[start]) start++;
  let endA = a.length - 1;
  let endB = b.length - 1;
  while (endA >= start && endB >= start && a[endA] === b[endB]) {
    endA--;
    endB--;
  }
  return { added: Math.max(0, endB - start + 1), removed: Math.max(0, endA - start + 1) };
}

/** Estimate the file a write/edit-style call touches, with approximate line deltas. */
export function estimateFileChange(name, args) {
  const n = String(name || '').toLowerCase();
  const a = parseArgs(args);
  const path = a.file_path || a.path || a.filePath;
  if (typeof path !== 'string' || !path) return null;
  if (n === 'write' || n === 'create_file') {
    return { path, added: lineList(a.content ?? a.text).length, removed: 0 };
  }
  if (Array.isArray(a.edits)) {
    let added = 0;
    let removed = 0;
    for (const e of a.edits) {
      if (!e || typeof e !== 'object') continue;
      const d = replaceDelta(e.old_string ?? e.oldText, e.new_string ?? e.newText);
      added += d.added;
      removed += d.removed;
    }
    return { path, added, removed };
  }
  if ('old_string' in a || 'new_string' in a || 'oldText' in a) {
    const d = replaceDelta(a.old_string ?? a.oldText, a.new_string ?? a.newText);
    return { path, ...d };
  }
  return { path, added: 0, removed: 0 };
}
