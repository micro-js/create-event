/**
 * Imports
 */

var createEvent = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  check(t, 'click')
  check(t, 'mouseover')
  check(t, 'animationend')
  check(t, 'wheel')
  check(t, 'resize', true)
})

test('should polyfill', function (t) {
  const which = createEvent('keypress', {which: 27})
  const keyCode = createEvent('keypress', {keyCode: 27})

  t.equal(keyCode.type, 'keypress')
  t.equal(keyCode.keyCode, 27)
  t.equal(keyCode.which, 27)

  t.equal(which.type, 'keypress')
  t.equal(which.keyCode, 27)
  t.equal(which.which, 27)

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHMTL = html
  return document.body.firstChild
}

function trigger (node, type) {
  var e = createEvent(type)
  node.dispatchEvent(e)
}

function check (t, type, last) {
  var node = $('<div></div>')

  node.addEventListener(type, function () {
    t.pass()
    last && t.end()
  })

  trigger(node, type)
}
