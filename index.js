'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./build/reactLibraryTemplate');
} else {
  module.exports = require('./build/reactLibraryTemplate.dev');
}