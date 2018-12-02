var fs = require('fs')

try {
  var text = fs.readFileSync('./input.txt')
  var textArray = text.toString().split('\n')

  for (var i = 0; i < textArray.length; i++) {
    for (let j = i + 1; j < textArray.length; j++) {
      var charsI = [...textArray[i]]
      var charsj = [...textArray[j]]

      var diff = charsI.reduce((a, c, i) => a + (c === charsj[i] ? 0 : 1), 0)

      if (diff === 1) {
        console.log('First box: ' + textArray[i])
        console.log('Second box: ' + textArray[j])
      }
    }
  }
} catch (e) {
  console.log('Error! ', e.stack)
}
