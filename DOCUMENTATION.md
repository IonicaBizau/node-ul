## Documentation

You can see below the API reference of this module.

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

