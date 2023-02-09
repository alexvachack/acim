module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("sass")
      .test(/\.sass$/)
      .use("sass-loader")
      .loader("sass-loader")
      .loader("css-loader")
      .loader("style-loader")
      .end();
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "pdf/[name].[ext]",
      });
    config.plugin("html").tap((args) => {
      args[0].title =
        "CMI AUTOMATION MEXICO… “INNOVATING SOLUTIONS”... Somos tu mejor aliado para obtener cualquier requerimiento de la industria";
      return args;
    });
  },
};
