import type { PluginOption } from "vite";

export default function viteIgnoreStaticImport(importKeys: string[]): PluginOption {
  return {
    name: "vite-plugin-ignore-static-import",
    enforce: "pre",
    config(config) {
      config.optimizeDeps = {
        ...(config.optimizeDeps ?? {}),
        exclude: [...(config.optimizeDeps?.exclude ?? []), ...importKeys],
      };
    },
    configResolved(resolvedConfig) {
      const VALID_ID_PREFIX = `/@id/`;
      const reg = new RegExp(
        `${VALID_ID_PREFIX}(${importKeys.join("|")})`,
        "g"
      );
      // @ts-expect-error Ignore only Readable variable
      resolvedConfig.plugins.push({
        name: "vite-plugin-ignore-static-import-replace-idprefix",
        transform: (code: string) =>
          reg.test(code) ? code.replace(reg, (_, s1) => s1) : code,
      });
    },
    resolveId: (id) => {
      if (importKeys.includes(id)) {
        return { id, external: true };
      }
    },
  };
}
