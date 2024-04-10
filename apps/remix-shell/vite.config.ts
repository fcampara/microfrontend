import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import viteIgnoreStaticImport from "./plugins/viteIgnoreStaticImport";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), viteIgnoreStaticImport(["example"])],
});
