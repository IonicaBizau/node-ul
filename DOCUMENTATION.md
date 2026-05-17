## Documentation

You can see below the API reference of this module.

### `merge(dst, src)`
One-level merge. Faster than `deepMerge`.

#### Params

- **object** `dst`: The destination object.
- **object** `src`: The source object (usually defaults).

#### Return
- **object** The result object.

### `deepMerge()`
Recursively merges the objects from the arguments, returning a new object.

Usage: `Ul.deepMerge(obj1, obj2, obj3, obj4, ..., objN)`

#### Return
- **object** The merged objects.

### `clone(item)`
Creates a deep clone of the provided item.

#### Params

- **object|Array** `item`: The item that should be cloned

#### Return
- **object|Array** The cloned object

### `home()`
Gets the home directory path on any platform. The value can also be
accessed using `Ul.HOME_DIR`.

#### Return
- **string** The home directory path.

