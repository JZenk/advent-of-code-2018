var fs = require('fs')

function metaSum (license) {
  var count = license.shift()
  var meta = license.shift()

  var sum = 0
  for (var i = 0; i < count; i++) {
    sum += metaSum(license)
  }

  for (var j = 0; j < meta; j++) {
    sum += license.shift()
  }

  return sum
}

try {
  var data = fs.readFileSync('./input.txt').toString().trim().split(' ').map(x => +x)

  console.log(metaSum(data))
} catch (e) {
  console.log('ERROR! ' + e.stack)
}
