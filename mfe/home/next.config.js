// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Vamos adicionar esse output para não ter a necessidade de criar um servidor next, apenas seus estáticos.
  output: "export",
  nx: {
    svgr: false,
  },
  webpack: (config) => {
    /**
     * @type {import('@module-federation/nextjs-mf/utilities').ModuleFederationPluginOptions}
     **/
    const federationConfig = {
      // Nome da minha aplicação (Será importante para o remote utilizar).
      name: 'home',
      // Local que estára o arquivo de configuração do module federation.
      filename: 'static/chunks/remoteEntry.js',
      // Apps que iramos expor, por exemplo quero export minha página Example e será acessado via /example
      exposes: {
        './example': "./pages/example.tsx",
      }
    }

    // Adicionar o plugin com a configuração pré definida
    config.plugins.push(new NextFederationPlugin(federationConfig));
    return config;
  }
};

const plugins = [
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
