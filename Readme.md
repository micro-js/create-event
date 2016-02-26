
# create-event

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Create a DOM event

## Installation

    $ npm install @f/create-event

## Usage

You can use this library to trigger synthetic events on elements for testing or other purposes. E.g.s

```js
var createEvent = require('@f/create-event')

function triggerEvent (node, type, opts) {
  var e = createEvent(type, opts)
  node.dispatchEvent(e)
}
```

## API

### createEvent(type, opts)

- `type` - The name of the event. E.g. `mouseover` or `click`.
- `opts` - Optional. Object containing special properties you want to set on the event. These will be event-specific.

**Returns:** A DOM event object created by the appropriate event constructor.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/create-event.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/create-event
[git-image]: https://img.shields.io/github/tag/micro-js/create-event.svg?style=flat-square
[git-url]: https://github.com/micro-js/create-event
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/create-event.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/create-event
