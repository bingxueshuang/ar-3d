import esbuild from "esbuild";
import options from "./base.js";

esbuild
    .build({
        ...options,
        logLevel: "info",
        watch: true
    })
    .catch(() => process.exit(1));

