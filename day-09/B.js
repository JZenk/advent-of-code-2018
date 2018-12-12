var fs = require('fs')

function addAfter (value, marble) {
  var toAdd = {
    value,
    prev: marble,
    next: marble.next
  }
  marble.next.prev = toAdd
  marble.next = toAdd
  return toAdd
}

try {
  var data = fs.readFileSync('./input.txt').toString()
  var [playerCount, marbleCount] = data.match(/\d+/g).map(Number)

  var scores = {}

  for (var i = 0; i <= playerCount; i++) {
    scores[i] = 0
  }

  var currentPlayer = 1
  var current = {
    value: 0
  }
  current.next = current
  current.prev = current

  for (var j = 1; j <= marbleCount * 100; j++) {
    if (j % 23 === 0) {
      scores[currentPlayer] += j
      current = current.prev.prev.prev.prev.prev.prev
      scores[currentPlayer] += current.prev.value
      current.prev.prev.next = current
      current.prev = current.prev.prev
    } else {
      current = addAfter(j, current.next)
    }
    currentPlayer = currentPlayer % playerCount + 1
  }

  var answer = Math.max(...Object.values(scores))

  console.log(answer)
} catch (e) {
  console.log('ERROR! ' + e.stack)
}
