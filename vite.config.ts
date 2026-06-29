// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying to GitHub Pages set DEPLOY_TARGET=github-pages — switches
// the Nitro preset to `github_pages` so the build emits prerendered static
// HTML to .output/public/ (with 404.html + .nojekyll). Inside Lovable
// sandbox builds this override is ignored (Lovable forces cloudflare).
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  vite: {
    base: "/hr-partner/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(isGithubPages
    ? {
        nitro: {
          preset: "github_pages",
        },
      }
    : {}),
});
