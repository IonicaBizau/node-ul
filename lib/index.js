// Constructor
var Ul = module.exports = {};

/**
 * merge
 * Merges two objects. The second parameter has higher priority.
 * That means the defaults will be passed in the first parameter.
 *
 * @name merge
 * @function
 * @param {Object} obj1 The first object.
 * @param {Object} obj2 The second object.
 * @return {Object} The merged objects.
 */
Ul.merge = function (obj1, obj2) {

    for (var p in obj2) {
        try {
            if (obj2[p].constructor == Object) {
                obj1[p] = Ul.merge(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            obj1[p] = obj2[p];
        }
    }

    return obj1;
};

/**
 * clone
 * Deep clone of the provided item.
 *
 * @name clone
 * @function
 * @param {Anything} item The item that should be cloned
 * @return {Anything} The cloned object
 */
Ul.clone = function (item) {

    if (!item) { return item; }
    var types = [Number, String, Boolean]
      , result
      , i
      ;

    types.forEach(function(type) {
        if (item instanceof type) {
            result = type(item);
        }
    });

    if (typeof result == "undefined") {
        if (Array.isArray(item)) {
            result = [];
            item.forEach(function(child, index) {
                result[index] = Ul.clone(child);
            });
        } else if (typeof item == "object") {
            if (!item.prototype) {
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    result = {};
                    for (i in item) {
                        result[i] = Ul.clone(item[i]);
                    }
                }
            } else {
                result = item;
            }
        } else {
            result = item;
        }
    }

    return result;
};

// Returns the absolute path to the user directory (`~/`)
Ul.USER_DIR = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
