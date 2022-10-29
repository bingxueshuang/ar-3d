import sveltePlugin from "esbuild-svelte";

const options = {
    entryPoints: ["src/main.js"],
    mainFields: ["svelte", "browser", "module", "main"],
    bundle: true,
    outdir: "dist",
    loader: {
        '.png': 'file',
        '.jpeg': 'file'
    },
    publicPath: './dist/',
    plugins: [sveltePlugin()],
};

export default options;
