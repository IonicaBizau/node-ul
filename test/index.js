var Ul = require("../lib");

var obj = {
        n: null
      , v: 1
    }
  , def = {
        n: 1
      , v: 10
      , a: 20
    }
  ;

console.log(Ul.merge(def, obj));
