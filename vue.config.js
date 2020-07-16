const path = require("path");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./main.js")
      .end();
    config.resolve.alias.set("noodle-flavour", path.join(__dirname, "./cte"));
  },
  // Impor
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~noodle-flavour/styles/include/_vars.scss";`
      }
    }
  }
};
