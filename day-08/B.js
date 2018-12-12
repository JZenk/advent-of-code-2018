var fs = require('fs')

function rootValue (license) {
  var count = license.shift()
  var meta = license.shift()

  if (count) {
    var characters = []
    for (var i = 0; i < count; i++) {
      characters.push(rootValue(license))
    }
    var meta2 = []
    for (var j = 0; j < meta; j++) {
      meta2.push(license.shift())
    }
    var sum = 0
    for (var k of meta2) {
      var l = k - 1
      if (l >= 0 && l < characters.length) {
        sum += characters[l]
      }
    }
    return sum
  } else {
    var sum = 0
    for (var i = 0; i < meta; i++) {
      sum += license.shift()
    }
    return sum
  }
}

try {
  var data = fs.readFileSync('./input.txt').toString().trim().split(' ').map(x => +x)

  console.log(rootValue(data))
} catch (e) {
  console.log('ERROR! ' + e.stack)
}
