"use strict";

import typpy from "typpy";
import Deffy from "deffy";

const Ul = {

    /**
     * merge
     * One-level merge. Faster than `deepMerge`.
     * @name merge
     * @function
     * @param {object} dst The destination object.
     * @param {object} src The source object (usually defaults).
     * @returns {object} The result object.
     */
    merge (dst, src) {
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
    },

    /**
     * deepMerge
     * Recursively merges the objects from the arguments, returning a new object.
     *
     * Usage: `Ul.deepMerge(obj1, obj2, obj3, obj4, ..., objN)`
     * @name deepMerge
     * @function
     * @returns {object} The merged objects.
     */
    deepMerge () {

        let dst = {};
        let src;
        let p = null;
        let args = [].splice.call(arguments, 0);


        while (args.length > 0) {
            src = args.splice(-1)[0];
            if (!typpy(src, Object)) { continue; }
            for (p in src) {
                if (!Object.prototype.hasOwnProperty.call(src, p)) { continue; }
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
    },

    /**
     * clone
     * Creates a deep clone of the provided item.
     * @name clone
     * @function
     * @param {object | Array} item The item that should be cloned
     * @returns {object | Array} The cloned object
     */
    clone (item) {

        if (!item) { return item; }

        let types = [Number, String, Boolean];
        let result = undefined;


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
    },

    HOME_DIR: process.env[(process.platform == "win32") ? "USERPROFILE" : "HOME"],

    /**
     * home
     * Gets the home directory path on any platform. The value can also be
     * accessed using `Ul.HOME_DIR`.
     * @name home
     * @function
     * @returns {string} The home directory path.
     */
    home () {
        return this.HOME_DIR;
    }
};

export default Ul;