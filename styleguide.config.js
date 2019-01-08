module.exports = {
  webpackConfig: require('./config/webpack.styleguide.config'),
  components: 'src/components/**/[A-Z]*.jsx',
  assetsDir: 'src/assets',
  styleguideDir: 'documentation',
};
