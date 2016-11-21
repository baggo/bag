module.exports = baggo

function baggo () {
  var infinitelyExpandingVoidOfEverything = []

  function bag (item) {
    infinitelyExpandingVoidOfEverything.push(item)
  }

  bag.get = function (index) {
    return infinitelyExpandingVoidOfEverything[index]
  }

  return bag
}
