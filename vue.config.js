/*module.exports = {
    loader: "sass-loader",
    options: {
        prependData: `@import "./styles/scss/config.scss";`
    }
}*/


module.exports = {
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
          sass: {
            prependData: `@import "@/styles/scss/config.scss";`,
            // minimize: true,
            sourceMap: false
          },
          css: {
            // minimize: true,
            import: true,
            sourceMap: false
          }
        }
      },
    
      configureWebpack: config => {
        config.optimization = {
          minimize: true
        }
      }
}