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
  return new Event(type, opts)
}
