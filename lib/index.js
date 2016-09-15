const typpy = require("typpy")
    , Deffy = require("deffy")
    ;

const Ul = module.exports = {
    /**
     * merge
     * One level merge. Faster than `deepMerge`.
     *
     * @name merge
     * @function
     * @param dst {Object} The destination object.
     * @param src {Object} The source object (usually defaults).
     * @return {Object} The result object.
     */
    merge (dst, src, p) {
        let res = {};

        src = Deffy(src, {});
        dst = Deffy(dst, {});

        for (let k in src) { res[k] = src[k]; }
        for (let k in dst) {
            if (undefined === dst[k]) {
                continue;
            }
            res[k] = dst[k];
        }

        return res;
    }

    /**
     * deepMerge
     * Recursively merge the objects from arguments, returning a new object.
     *
     * Usage: `Ul.deepMerge(obj1, obj2, obj3, obj4, ..., objN)`
     *
     * @name deepMerge
     * @function
     * @return {Object} The merged objects.
     */
  , deepMerge () {

        let dst = {}
          , src = null
          , p = null
          , args = [].splice.call(arguments, 0)
          ;

        while (args.length > 0) {
            src = args.splice(-1)[0];
            if (!typpy(src, Object)) { continue; }
            for (p in src) {
                if (!src.hasOwnProperty(p)) { continue; }
                if (typpy(src[p], Object)) {
                    dst[p] = this.deepMerge(src[p], dst[p] || {});
                } else {
                    if (src[p] !== undefined) {
                        dst[p] = src[p];
                    }
                }
            }
        }

        return dst;
    }

    /**
     * clone
     * Deep clone of the provided item.
     *
     * @name clone
     * @function
     * @param {Anything} item The item that should be cloned
     * @return {Anything} The cloned object
     */
  , clone (item) {

        if (!item) { return item; }

        let types = [Number, String, Boolean]
          , result = null
          ;

        for (let i = 0; i < types.length; ++i) {
            let type = types[i];
            if (item instanceof type) {
                result = type(item);
            }
        }

        if (typeof result == "undefined") {
            if (Array.isArray(item)) {
                result = [];
                for (var i = 0; i < item.length; ++i) {
                    result[i] = this.clone(item[i]);
                }
            } else if (typeof item == "object") {
                if (!item.prototype) {
                    if (item instanceof Date) {
                        result = new Date(item);
                    } else {
                        result = {};
                        for (i in item) {
                            result[i] = this.clone(item[i]);
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
    }

  , HOME_DIR: process.env[(process.platform == "win32") ? "USERPROFILE" : "HOME"]

    /**
     * home
     * Get the home directory path on any platform. The value can be
     * accessed using `Ul.HOME_DIR` too.
     *
     * @name home
     * @function
     * @return {String} The home directory path.
     */
  , home () {
        return this.HOME_DIR;
    }
};
