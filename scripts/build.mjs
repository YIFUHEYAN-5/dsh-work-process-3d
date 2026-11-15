// Bundles both halves:
//  - dist/client.js in the DSH Client module format
//      window.__ModuleLoader__.load({ id: <package name>, factory(require) { ... } })
//    React comes from the host module table through `require`; three.js is bundled.
//  - dist/host.js, an ES module for the Host with zod bundled, so the plugin needs no
//    runtime dependencies.
import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const dev = process.argv.includes('--dev');

const result = await build({
  absWorkingDir: root,
  entryPoints: ['src/client/index.js'],
  bundle: true,
  write: false,
  format: 'cjs',
  platform: 'browser',
  target: ['es2022'],
  external: ['react'],
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  minify: !dev,
  sourcemap: false,
  legalComments: 'eof',
  charset: 'utf8',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
  metafile: true,
});

const body = result.outputFiles[0].text;
const banner = `/*! ${pkg.name} ${pkg.version} | MIT | bundles three.js (MIT, Copyright Three.js Authors) */`;
const code = `${banner}
window.__ModuleLoader__.load({
  id: ${JSON.stringify(pkg.name)},
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
${body}
    return module.exports && module.exports.default ? module.exports.default : module.exports;
  },
});
`;

// Fail the build if the wrapped artifact is not valid script syntax.
new vm.Script(code, { filename: 'dist/client.js' });

await mkdir(path.join(root, 'dist'), { recursive: true });
await writeFile(path.join(root, 'dist', 'client.js'), code, 'utf8');

const kb = (n) => `${(n / 1024).toFixed(0)} KiB`;
const inputs = Object.entries(result.metafile.inputs);
const threeBytes = inputs.filter(([f]) => f.includes('node_modules')).reduce((a, [, v]) => a + v.bytes, 0);
console.log(`dist/client.js ${kb(Buffer.byteLength(code))} (${inputs.length} inputs, ${kb(threeBytes)} of dependency source before minify)`);

// ── Host bundle ─────────────────────────────────────────────────
const host = await build({
  absWorkingDir: root,
  entryPoints: ['src/host/index.js'],
  bundle: true,
  write: false,
  format: 'esm',
  platform: 'node',
  target: ['node20'],
  minify: !dev,
  keepNames: true,
  sourcemap: false,
  legalComments: 'eof',
  charset: 'utf8',
  logLevel: 'warning',
  metafile: true,
});
const hostCode = `/*! ${pkg.name} ${pkg.version} host | MIT | bundles zod (MIT, Copyright Colin McDonnell) */\n${host.outputFiles[0].text}`;
await writeFile(path.join(root, 'dist', 'host.js'), hostCode, 'utf8');
const hostInputs = Object.keys(host.metafile.inputs).length;
console.log(`dist/host.js ${kb(Buffer.byteLength(hostCode))} (${hostInputs} inputs)`);
