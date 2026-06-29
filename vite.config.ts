// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to GitHub Pages set DEPLOY_TARGET=github-pages — disables Nitro
// (no Cloudflare Worker) and switches TanStack Start to SPA mode with a
// prerendered shell so the build emits a static index.html into dist/client/.
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  vite: {
    base: "/hr-partner/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          spa: {
            enabled: true,
            prerender: {
              enabled: true,
              crawlLinks: true,
            },
          },
        }
      : {}),
  },
  ...(isGithubPages ? { nitro: false as const } : {}),
});
