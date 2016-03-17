/**
 * Modules
 */

var constructors = require('@f/event-constructors')

/**
 * Expose createEvent
 */

module.exports = createEvent

/**
 * createEvent
 */

function createEvent (type, opts) {
  var Event = constructors[type]
  if (!Event) throw new Error('createEvent: unknown event type: ' + type)

  return Event === KeyboardEvent
    ? polyfillKeyboardEvent(type, opts)
    : new Event(type, opts)
}

/**
 * KeyboardEvent polyfill to make
 * keyCode/which work
 *
 * Note: this polyfill may only work in Chrome
 */

function polyfillKeyboardEvent (type, opts) {
  var evt = new KeyboardEvent(type, opts)

  if (opts && (opts.keyCode || opts.which)) {
    var code = opts.keyCode || opts.which

    Object.defineProperty(evt, 'keyCode', {
      get: function () { return code }
    })

    Object.defineProperty(evt, 'which', {
      get: function () { return code }
    })
  }

  return evt
}
