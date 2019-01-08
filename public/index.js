if (process.env.NODE_ENV === 'production') {
  module.exports = require('./reactLibraryTemplate');
} else {
  module.exports = require('./reactLibraryTemplate.dev');
}
