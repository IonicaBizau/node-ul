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
  , tmp = null
  ;

console.log(tmp = Ul.merge(def, obj));
console.log(tmp === Ul.clone(tmp));
console.log(Ul.USER_DIR);
