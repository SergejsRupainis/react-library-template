module.exports = {
    webpackConfig: require('./config/webpack.styleguide.config'),
    components: 'src/lib/components/**/[A-Z]*.js',
    assetsDir: 'src/lib/assets',
    styleguideDir: 'styleguide'
  }