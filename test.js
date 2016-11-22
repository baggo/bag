var test = require('tape')
var makeBaggo = require('./')

test('baggo bags', function (t) {
  t.plan(1)

  var baggo = makeBaggo()
  baggo('$$$')
  t.is(baggo.look(0), '$$$', 'bag it does')
})
