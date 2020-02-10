// vue.config.js
module.exports = {
  // options...

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
        `
      }
    }
  }
};
