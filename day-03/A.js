var fs = require('fs')

var fabric = Array(1000).fill(0).map(() => Array(1000).fill(0))

function markFabric (left, top, cut) {
  var cwidth = parseInt(cut[0])
  var cheight = parseInt(cut[1])

  for (let w = left; w < left + cwidth; w++) {
    for (let h = top; h < top + cheight; h++) {
      fabric[w][h]++
    }
  }
}
try {
  var data = fs.readFileSync('./input.txt').toString().split('\n')

  for (let d = 0; d < data.length; d++) {
  // for (let d = 660; d < 667; d++) {
    var claim = data[d].split(' ')

    var edges = claim[2]
    var left = parseInt(edges.substring(0, edges.indexOf(',')))
    var top = parseInt(edges.substring(edges.indexOf(',') + 1, edges.length - 1))
    var cut = claim[3].split('x')
/*     console.log('Claim # ' + d)
    console.log(left)
    console.log(top)
    console.log(cut) */

    markFabric(left, top, cut)
  }
  var dupes = 0
  for (let i = 0; i < fabric.length; i++) {
    for (let j = 0; j < fabric[i].length; j++) {
      if (fabric[i][j] > 1) { dupes++ }
    }
  }
  console.log('Overlap: ' + dupes)
} catch (e) {
  console.log('Error! ', e.stack)
}
