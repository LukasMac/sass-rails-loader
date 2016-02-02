var loaderUtils = require('loader-utils');

module.exports = function sassRailsLoader(source) {
  var query = loaderUtils.parseQuery(this.query);

  return source;
};
