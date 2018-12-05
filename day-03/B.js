var fs = require('fs')

var fabric = Array(1000).fill(0).map(() => Array(1000).fill(0))

function markFabric (left, top, cwidth, cheight, id) {


  for (let w = left; w < left + cwidth; w++) {
    for (let h = top; h < top + cheight; h++) {
      if (fabric[w][h] == 0) {
        fabric[w][h] = id
      } else {
        fabric[w][h] = -1
      }
    }
  }
}
try {
  var data = fs.readFileSync('./input.txt').toString().split('\n')

  var cuts = {}

  for (let d = 0; d < data.length; d++) {
  // for (let d = 660; d < 667; d++) {
    var claim = data[d].split(' ')

    var id = parseInt(claim[0].substring(1))

    var edges = claim[2]
    var left = parseInt(edges.substring(0, edges.indexOf(',')))
    var top = parseInt(edges.substring(edges.indexOf(',') + 1, edges.length - 1))
    var cut = claim[3].split('x')
    var cwidth = parseInt(cut[0])
    var cheight = parseInt(cut[1])
    cuts[id] = cwidth * cheight
    /*     console.log('Claim # ' + d)
    console.log(left)
    console.log(top)
    console.log(cut) */

    markFabric(left, top, cwidth, cheight, id)
  }
  var unique = []
  for (let i = 0; i < fabric.length; i++) {
    for (let j = 0; j < fabric[i].length; j++) {
      if (fabric[i][j] > 0) {
        unique.push(fabric[i][j])
      }
    }
  }
  // console.log('Unique length: ' + unique.length)
  var counts = {}

  for (var i = 0; i < unique.length; i++) {
    var num = unique[i]
    counts[num] = counts[num] ? counts[num] + 1 : 1
  }

  Object.entries(counts).forEach(([key, value]) => {
    if (cuts[key] == value) {
      console.log(key)
    }
  })
} catch (e) {
  console.log('Error! ', e.stack)
}
