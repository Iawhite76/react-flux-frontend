let _ = require('lodash');

module.exports = {
  pickDeep: function pickDeep(collection, identity, thisArg) {
    if (!identity.length) {
      return collection;
    }

    var picked = _.pick(collection, identity, thisArg);
    var collections = _.pick(collection, _.isObject, thisArg);

    _.each(collections, function(item, key, collection) {
        var object;

        object = pickDeep(item, identity, thisArg);

        if (!_.isEmpty(object)) {
            picked[key] = object;
        }

    });

    return picked;
  }
}