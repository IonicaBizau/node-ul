<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# ul [![Donate now][donate-now]][paypal-donations]

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
console.log(tmp = Ul.merge(obj, def));
// => { n: null, v: 1, a: 20 }

// Clone the tmp object -- the clone will have a
// different reference
console.log(tmp === Ul.clone(tmp));
// => false

// Show the absolute path to the home directory
console.log(Ul.home()); // or `console.log(Ul.HOME_DIR);`
// => /home/ionicabizau

```

## Documentation

### `merge()`
Recursively merge the objects from arguments, returning a new object.

#### Return
- **Object** The merged objects.

obj1, obj2, obj3, ..., objn

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

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png