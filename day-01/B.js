var fs = require('fs')
var previousFreq = [0]

function getSum (total, num) {
  var temp = total + parseInt(num)
  previousFreq.push(temp)
  return temp
}
function findDupe (data) {
  var result = []

  data.forEach(function (element, index) {
    if (data.indexOf(element, index + 1) > -1) {
      if (result.indexOf(element) === -1) {
        result.push(element)
      }
    }
  })
  return result
}
try {
  var text = fs.readFileSync('./inputA.txt')
  var textArray = text.toString().split('\n')

  var result = textArray.reduce(getSum, 0)
  console.log(previousFreq.toString())
  var result2 = findDupe(previousFreq)

  console.log('Result: ' + result)
  console.log('Dupe: ' + result2.toString())
  var frequency = 0
  var savedFreq = []
  var done = false
  var result3 = -1

  while (done === false) {
    for (let i = 0; i < textArray.length; i++) {
      var sign = textArray[i][0]
      var number = parseInt(textArray[i].substring(1))
      if (sign === '+') { frequency += number } else { frequency -= number }
      // if frequency is in stored array, return that number
      if (savedFreq.indexOf(frequency) > -1) {
        done = true
        result3 = frequency
        break
      }
      // else push to array
      else { savedFreq.push(frequency) }
    }
  }
  console.log(result3)
} catch (e) {
  console.log('Error! ', e.stack)
}
