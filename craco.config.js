//CRACO - Create React App Configuration Overide. It's an hacky layer on top of Create React App (CRA)
// to customize it's configuration. This is achieved by overriding the cache of the require calls made
// by CRA to replace the exported content with our customized configuration
// in this case is used by tailwindcss to overriding the css code.
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }