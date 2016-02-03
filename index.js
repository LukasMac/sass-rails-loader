var loaderUtils = require('loader-utils');

module.exports = function sassRailsLoader(source) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  var imagePath = query.imagePath;

  if (imagePath && imagePath.substr(-1) != '/') {
    imagePath += '/';
  }

  return source.replace(
    /(image|asset)-(url|path)\(['"](.*)['"]\)/ig,
    "url(\"" + imagePath + "$3\")"
  )
};
