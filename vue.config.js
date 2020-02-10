// vue.config.js
module.exports = {
  // options... css: {
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
  }
};
