var test = require('tape')
var createBaggo = require('./')

test('baggo bags', function (t) {
  t.plan(1)

  var baggo = createBaggo()
  baggo('$$$')
  t.is(baggo.look(0), '$$$', 'bag it does')
})
