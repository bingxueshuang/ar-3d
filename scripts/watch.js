import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";

esbuild
    .build({
        entryPoints: ["src/main.js"],
        mainFields: ["svelte", "browser", "module", "main"],
        bundle: true,
        outdir: "dist",
        plugins: [sveltePlugin()],
        logLevel: "info",
        watch: true
    })
    .catch(() => process.exit(1));

