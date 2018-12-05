var fs = require('fs')

function polymerReducer (polymer) {
  var originalLength = polymer.length
  for (var i = 0; i < originalLength; i++) {
    for (var j = 0; j < polymer.length; j++) {
      if (j != polymer.length - 1) {
        if (polymer[j].toLowerCase() == polymer[j + 1].toLowerCase() && polymer[j] != polymer[j + 1]) {
          polymer.splice(j, 2)
        }
      }
    }
  }
  return polymer.length
}

function badUnit (polymer, unit) {
  return polymer.filter(function (el) {
    return el.toLowerCase() != unit
  })
}

try {
  // var data = 'aabAAB'.trim().split('')
  // var data = 'dabAcCaCBAcCcaDA'.trim().split('')
  var data = fs.readFileSync('./input.txt').toString().split('')
  var originalLength = data.length
  console.log('Original length: ' + originalLength)

  var alpha = 'abcdefghijklmnopqrstuvwxyz'.trim().split('')

  var shortestPolymer = originalLength

  for (var i = 0; i < alpha.length; i++) {
  var newlength = polymerReducer(badUnit(data, alpha[i]))
  console.log('Unit ' + alpha[i] + ' removed Polymer length: ' + newlength)
  if (newlength < shortestPolymer) {
    shortestPolymer = newlength
  }
  }
  console.log('Shortest: ' + shortestPolymer)

} catch (e) {
  console.log('Error! ' + e.stack)
}
