import esbuild from "esbuild";
import options from "./base.js";

esbuild
    .build({
        ...options,
        minify: true,
        logLevel: "error",
    })
    .catch(() => process.exit(1));

