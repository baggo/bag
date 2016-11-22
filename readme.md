# baggo

> baggo bags, does not unbag

```js
var createBaggo = require('baggo')
var baggo = createBaggo()

baggo('item')

baggo.look(0) === 'item'
```

## Installation

```sh
$ npm install --save baggo
```

## Usage

### `createBaggo()`

create baggo

```js
var baggo = createBaggo()
```

### `baggo(item)`

put in baggo

**warning:** does not unbaggo

```js
baggo('$')

var index = baggo('$$$') // 1
```

### `baggo.look(i)`

look in baggo

```js
baggo('(❍ᴥ❍ʋ)')

baggo.look(0) === '(❍ᴥ❍ʋ)'
```

### `baggo.find(item)`

find in baggo

```js
baggo('(ノಠ益ಠ)ノ')

baggo.find('(ノಠ益ಠ)ノ') === 0
baggo.find(' つ ◕_◕ ༽つ') === -1 // (ಥ_ಥ)
```

## License

MIT © [Jamen Marz](https://git.io/jamen)

---

[![version](https://img.shields.io/npm/v/baggo.svg?style=flat-square)][package] [![travis](https://img.shields.io/travis/baggo/baggo.svg?style=flat-square)](https://travis-ci.org/jamen/baggo) [![downloads](https://img.shields.io/npm/dt/baggo.svg?style=flat-square)][package] [![license](https://img.shields.io/npm/l/express.svg?style=flat-square)][package] [![follow](https://img.shields.io/github/followers/baggo.svg?style=social&label=Follow)](https://github.com/baggo)

[package]: https://npmjs.org/package/baggo
