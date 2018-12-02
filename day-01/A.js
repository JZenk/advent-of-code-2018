var fs = require('fs')

function getSum (total, num) {
  return total + parseInt(num)
}

try {
  var text = fs.readFileSync('./inputA.txt')
  var textArray = text.toString().split('\n')

  console.log('Array length: ' + textArray.length)

  var result = textArray.reduce(getSum, 0)

  console.log(result)
} catch (e) {
  console.log('Error! ', e.stack)
}
