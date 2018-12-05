var fs = require('fs')

try {
  // var data = 'aabAAB'.trim().split('')
  // var data = 'dabAcCaCBAcCcaDA'.trim().split('')
  var data = fs.readFileSync('./input.txt').toString().split('')
  var originalLength = data.length
  console.log('Original length: ' + originalLength)
  var removed = []

  for (var i = 0; i < originalLength; i++) {
    for (var j = 0; j < data.length; j++) {
      if (j != data.length - 1) {
        if (data[j].toLowerCase() == data[j + 1].toLowerCase() && data[j] != data[j + 1]) {
          removed.push(data[j])
          data.splice(j, 2)
        }
      }
    }
  }
  console.log('Polymer length: ' + data.length)
  console.log('Removed units: ' + removed)
} catch (e) {
  console.log('Error! ' + e.stack)
}
