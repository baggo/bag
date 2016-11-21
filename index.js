module.exports = function () {
  var baggo = []

  function bag (item) {
    baggo.push(item)
  }

  function look (i) {
    return baggo[i]
  }

  bag.look = look
  return bag
}
