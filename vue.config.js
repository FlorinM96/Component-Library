// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/styles/variables.scss"; 
        @import "~@/styles/responsiveness.scss"; 
        @import "~@/styles/fonts.scss";
        @import "~@/styles/globals.scss";`
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");

    svgRule
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }]
        }
      });
  }
};
