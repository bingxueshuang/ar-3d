import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";

esbuild
    .build({
        entryPoints: ["src/home.js"],
        mainFields: ["svelte", "browser", "module", "main"],
        bundle: true,
        minify: true,
        outdir: "dist",
        loader: {
            '.png': 'file',
            '.jpeg': 'file'
        },
        publicPath: '/dist/',
        plugins: [sveltePlugin()],
        logLevel: "error",
    })
    .catch(() => process.exit(1));

