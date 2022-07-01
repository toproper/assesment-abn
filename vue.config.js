const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_vars.scss";
        `
      }
    }
  },
  transpileDependencies: true,
});
