module.exports = {
    pickDeep: function pickDeep(collection, identity, thisArg) {
        var picked = _.pick(collection, identity, thisArg);
        var collections = _.pick(collection, _.isObject, thisArg);

        _.each(collections, function(item, key, collection) {
            var object;
            if (_.isArray(item)) {
                object = _.reduce(item, function(result, value) {
                    var picked = pickDeep(value, identity, thisArg);
                    if (!_.isEmpty(picked)) {
                        result.push(picked);
                    }
                    return result;
                }, []);
            } else {
                object = pickDeep(item, identity, thisArg);
            }

            if (!_.isEmpty(object)) {
                picked[key] = object;
            }

        });

        return picked;
    }
}