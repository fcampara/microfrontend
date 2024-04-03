import * as esbuild from 'esbuild'
import pkg from "../package.json" assert { type: "json" };
import { join, dirname } from "path"
import { fileURLToPath } from 'url';

const [,name] = pkg.name.split("/")
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const bucketPath = join(__dirname, "..", "..", "..", "bucket", `${name}@${pkg.version}`, "index.js")

await esbuild.build({
  entryPoints: ['src/App.tsx'],
  external: ["react", "react-dom"],
  bundle: true,
  minify: true,
  outfile: bucketPath,
  format: "esm"
})
