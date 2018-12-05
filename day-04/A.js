var fs = require('fs')

function maxMinute (arr) {
  let minute = Math.max(...arr)
  let index = arr.findIndex(v => { return v == minute })
  return [minute, index]
}

try {
  var data = fs.readFileSync('./input.txt').toString().split('\n')
  data.sort()

  var stateRegex = /\[(\d+)-(\d+)-(\d+) (\d+):(\d+)\] (Guard #|)(\d+|wakes|falls)/

  var guards = []
  var guard
  var asleep

  for (let line of data) {
    var state, minute
    [/* match */, /* year */, /* month */, /* day */, /* hour */, minute, /* stuff */, state] = stateRegex.exec(line)

    if (state === 'wakes') {
      for (let i = asleep; i <= parseInt(minute); i++) {
        guards[guard][i]++
      }
    } else if (state === 'falls') {
      asleep = parseInt(minute)
    } else {
      guard = state
      if (!guards[guard]) guards[guard] = new Array(60).fill(0)
    }
  }

  var most = [-1, -1]
  guards.forEach((arr, id) => {
    let minutes = arr.reduce((a, b) => { return a + b }, 0);
    [, index] = maxMinute(arr)
    if (minutes > most[1]) most = [id, minutes, index]
  })

  console.log(`Guard #${most[0]} slept most with ${most[1]} minutes of sleep (@ 00:${most[2]})`)
  console.log(`Part 1 answer: ${most[0] * most[2]}`)

  most = [-1, -1]
  guards.forEach((arr, id) => {
    [minute, index] = maxMinute(arr)
    if (minute > most[1]) most = [id, minute, index]
  })

  console.log(`Guard #${most[0]}, ${most[1]} times at minute (@ 00:${most[2]})`)
  console.log(`Part 2 answer: ${most[0] * most[2]}`)
} catch (e) {
  console.log('Error! ' + e.stack)
}
