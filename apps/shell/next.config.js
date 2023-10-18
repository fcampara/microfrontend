// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    /**
     * @type {import('@module-federation/nextjs-mf/utilities').ModuleFederationPluginOptions}
     **/
    const federationConfig = {
      // Nome da minha aplicação.
      name: 'shell',
      // Local que estára o arquivo de configuração do module federation.
      filename: 'static/chunks/remoteEntry.js',
      // Apps que iremos consumir. A chave desse objeto pode ser qualquer nome que você quiser.
      remotes: {
        '@microfrontend/home': `home@http://localhost:3000/home/.next/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      },
    }

    // Adicionar o plugin com a configuração pré definida
    config.plugins.push(new NextFederationPlugin(federationConfig));
    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
