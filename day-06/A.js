var fs = require('fs')
var grid = Array(10).fill('.').map(() => Array(10).fill('.'))

function markGrid (left, top) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log('Yay?')
    }
  }
}
function distance (point1, point2) {
  return Math.abs(point2[0] - point1[0]) + Math.abs(point2[1] - point1[1])
}

try {
  // var data = 'aabAAB'.trim().split('')
  // var data = 'dabAcCaCBAcCcaDA'.trim().split('')
  // var data = fs.readFileSync('./input.txt').toString().split('')
  var data = fs.readFileSync('./test-input.txt').toString().split('\n')
  var coor = data
  
} catch (e) {
  console.log('Error! ' + e.stack)
}
