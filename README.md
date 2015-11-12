# ul [![Support this project][donate-now]][paypal-donations]

A minimalist utility library.

## Installation

```sh
$ npm i ul
```

## Example

```js
// Dependencies
var Ul = require("ul");

// Input data
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

// Merge the two objects and store the result in tmp
console.log(tmp = Ul.deepMerge(obj, def));
// => { n: null, v: 1, a: 20 }

// Clone the tmp object -- the clone will have a
// different reference
console.log(tmp === Ul.clone(tmp));
// => false

// Show the absolute path to the home directory
console.log(Ul.home()); // or `console.log(Ul.HOME_DIR);`
// => /home/ionicabizau

// One level merge
console.log(Ul.merge({
    foo: {
        bar: 42
    }
}, {
    foo: {
        bar: 1
      , baz: 7
    }
});
// => { { bar: 42 } }
```

## Documentation

### `merge(dst, src)`
One level merge. Faster than `deepMerge`.

#### Params
- **** `dst`: {Object} The destination object.
- **** `src`: {Object} The source object (usually defaults).

#### Return
- **Object** The result object.

### `deepMerge()`
Recursively merge the objects from arguments, returning a new object.

Usage: `Ul.deepMerge(obj1, obj2, obj3, obj4, ..., objN)`

#### Return
- **Object** The merged objects.

### `clone(item)`
Deep clone of the provided item.

#### Params
- **Anything** `item`: The item that should be cloned

#### Return
- **Anything** The cloned object

### `home()`
Get the home directory path on any platform. The value can be
accessed using `Ul.HOME_DIR` too.

#### Return
- **String** The home directory path.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`abs`](https://github.com/IonicaBizau/node-abs)

 - [`bible`](https://github.com/BibleJS/BibleApp)

 - [`bible.js`](https://github.com/BibleJS/bible.js)

 - [`birthday`](https://github.com/IonicaBizau/birthday)

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)

 - [`bloggify-social`](https://github.com/Bloggify/social)

 - [`bnotify`](https://github.com/IonicaBizau/bnotify)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`cli-box`](https://github.com/IonicaBizau/node-cli-box)

 - [`cli-circle`](https://github.com/IonicaBizau/node-cli-circle)

 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)

 - [`cli-graph`](https://github.com/IonicaBizau/node-cli-graph)

 - [`cli-pie`](https://github.com/IonicaBizau/node-cli-pie)

 - [`cli-snow`](https://github.com/IonicaBizau/cli-snow)

 - [`clp`](https://github.com/IonicaBizau/node-clp)

 - [`cobol`](https://github.com/IonicaBizau/node-cobol)

 - [`diable`](https://github.com/IonicaBizau/diable)

 - [`donate.js`](https://github.com/IonicaBizau/donate.js)

 - [`electronify`](https://github.com/IonicaBizau/electronify#readme)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`fwatcher`](https://github.com/IonicaBizau/node-fwatcher)

 - [`gh-contributions`](https://github.com/IonicaBizau/github-contributions)

 - [`gh.js`](https://github.com/IonicaBizau/gh.js)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`github-colors`](https://github.com/IonicaBizau/github-colors)

 - [`github-stats`](https://github.com/IonicaBizau/github-stats)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

 - [`gry`](https://github.com/IonicaBizau/node-gry)

 - [`idea`](https://github.com/IonicaBizau/idea)

 - [`jipics`](https://github.com/jillix/node-jipics) by jillix

 - [`jsonrequest`](https://github.com/IonicaBizau/node-jsonrequest)

 - [`le-table`](https://github.com/IonicaBizau/node-le-table)

 - [`markdown-templator`](https://github.com/grit96/markdown-templator#readme) by Geraint White

 - [`match`](https://github.com/IonicaBizau/match.js#readme)

 - [`mongof`](https://github.com/IonicaBizau/node-mongof)

 - [`npmreserve`](https://github.com/IonicaBizau/npmreserve)

 - [`oargv`](https://github.com/IonicaBizau/node-oargv)

 - [`page-changed`](https://github.com/IonicaBizau/node-page-changed)

 - [`parent-search`](https://github.com/IonicaBizau/node-parent-search)

 - [`regarde`](https://github.com/IonicaBizau/regarde)

 - [`share-term`](https://github.com/Share-Term/share-term#readme)

 - [`statique`](https://github.com/IonicaBizau/node-statique)

 - [`streamp`](https://github.com/IonicaBizau/node-streamp)

 - [`template-html`](https://github.com/grit96/template-html#readme) by Geraint White

 - [`tinyreq`](https://github.com/IonicaBizau/tinyreq)

 - [`tithe`](https://github.com/IonicaBizau/tithe)

 - [`web-term`](https://github.com/IonicaBizau/web-term)

 - [`wrabbit`](https://github.com/jillix/wrabbit) by jillix

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md