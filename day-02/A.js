var fs = require('fs')

try {
  var text = fs.readFileSync('./input.txt')
  var textArray = text.toString().split('\n')

  const arr = textArray.reduce((a, c) => {
    const chars = [...c]
    let seen = {}
    for (let char of chars) {
      seen[char] = seen[char] ? seen[char] + 1 : 1
    }
    if (Object.keys(seen).some(k => seen[k] === 2)) a[0]++
    if (Object.keys(seen).some(k => seen[k] === 3)) a[1]++
    return a
  }, [0, 0])
  console.log('Checksum is: ' + arr[0] * arr[1])
} catch (e) {
  console.log('Error! ', e.stack)
}
