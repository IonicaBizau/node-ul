"use strict";

const ul = require("..")
    , isThere = require("is-there")
    , tester = require("tester")
    ;

// Input objects
let obj = {
        n: null
      , v: 1
    }
  , def = {
        n: 1
      , v: 10
      , a: 20
    }
  , last = { c: 1 }
  , tmp = null
  ;

tester.describe("ul", t => {
    // One level objects
    t.should("merge one level objects", () => {
        tmp = ul.deepMerge(obj, def);
        t.expect(tmp).toEqual({
            n: null
          , v: 1
          , a: 20
        });
    });

    // Clones
    t.should("create object clones", () => {
        let clone = ul.clone(tmp);
        t.expect(clone).toNotBe(tmp);
        t.expect(clone).toEqual(tmp);
    });

    // Home directory
    t.should("get the correct path to the home directory", () => {
        t.expect(isThere(ul.home())).toBe(true);
        t.expect(isThere(ul.HOME_DIR)).toBe(true);
    });

    // Multiple objects merge
    t.should("merge more than two objects", () => {
        t.expect(ul.deepMerge({}, obj, def, last)).toEqual({
            c: 1
          , n: null
          , v: 1
          , a: 20
        });
    });

    // Deep merge
    t.should("merge objects deeply", () => {
        t.expect(ul.deepMerge({
            a: {
                c: {}
              , d: 3
            }
        }, {
            a: {
                d: undefined
              , c: {
                    s: {}
                }
            }
        })).toEqual({
            a: {
                c: {
                    s: {}
                }
              , d: 3
            }
        });
    });

    // Merge arrays
    t.should("merge arrays", () => {
        t.expect(ul.deepMerge({
            a: 4
          , b: 1
          , d: {
                a: {
                    b: [{ a: "foo" }]
                }
            }
        }, {
            b: 2
          , c: 3
          , d: {
                a: { b: [] }
            }
        })).toEqual({
            b: 1
          , c: 3
          , d: {
                a: {
                    b: [{ a: "foo" }]
                }
            }
          , a: 4
        });
    });

    // One level merge
    t.should("merge one level objects", () => {
        t.expect(ul.merge({
            foo: {
                bar: 42
            }
        }, {
            foo: {
                bar: 1
              , baz: 7
            }
        })).toEqual({
            foo: { bar: 42 }
        });
    });
});
