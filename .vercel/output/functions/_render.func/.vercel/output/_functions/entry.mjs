import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DDvP_dzY.mjs';
import { manifest } from './manifest_C7NAIIOP.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.18_@types+node@20.17.30_rollup@4.39.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8a0fdcf4-002e-4386-bde3-9df2b0f226f4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
