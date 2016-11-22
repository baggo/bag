module.exports = function () {
  var baggo = []

  function bag (item) {
    return baggo.push(item)
  }

  function look (i) {
    return baggo[i]
  }

  function find (item) {
    return baggo.indexOf(item)
  }

  bag.look = look
  bag.find = find
  return bag
}
