module.exports = {
    reactStrictMode: true,
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
          // Resolve a incompatibilidade com CSS global e módulos CSS
          // na compilação do webpack em ambiente de produção.
          // Para saber mais, consulte: https://github.com/vercel/next.js/issues/22596
          config.module.rules.push({
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          });
        }
        return config;
      },
  }
