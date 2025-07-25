// 1.Transpose of a matrix 
let a = [
  [1, 2],
  [3, 4],
  [5, 6]
]

let t = [[], []];
for (let i = 0; i < a.length; i++) {
  t[0].push(a[i][0]);                       // first column
  t[1].push(a[i][1]);                       // second column
}
console.log(t);  
















// 2. Diagonal Sum of Square Matrix 
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let dsum = 0;
for (let i = 0; i < b.length; i++) {
  for (let j = 0; j < b[i].length; j++) {
    if (i == j || i + j == b.length - 1) {
      dsum += b[i][j];
    }
  }
}
console.log(dsum);  


















// 3. Spiral Print of Matrix
let c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] 

let sp = [];
sp.push(c[0][0], c[0][1], c[0][2]);                    // top row
sp.push(c[1][2], c[2][2]);                            // right column
sp.push(c[2][1], c[2][0]);                           // bottom row
sp.push(c[1][0], c[1][1]);                           // left side and middle
console.log(sp);  


















// 4. Search in 2D Matrix
let d = [
  [1, 2, 3],
  [4, 5, 6]
]

let num = 5;
let found = false;
for (let i = 0; i < d.length; i++) {
  if (d[i].includes(num)) {
    found = true;
    break;
  }
}
console.log(found);  



















// 5. Rotate Matrix by 90 Degrees Clockwise
let e = [
  [1, 2],
  [3, 4]
]

let r = [
  [e[1][0], e[0][0]],                              // first row after rotation
  [e[1][1], e[0][1]]                              // second row
];
console.log(r);  



















// 6. Count Zeros and Ones in a Matrix
let f = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 0, 1]
]

let zeros = 0, ones = 0;
for (let row of f) {
  for (let val of row) {
    if (val == 0) zeros++;
    else ones++;
  }
}
console.log("0s =", zeros, "1s =", ones);  




















// 7. Set Matrix Zerox
let g = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]

let zeroRows = [], zeroCols = [];
for (let i = 0; i < g.length; i++) {
  for (let j = 0; j < g[i].length; j++) {
    if (g[i][j] === 0) {
      zeroRows.push(i);
      zeroCols.push(j);
    }
  }
}
for (let i of zeroRows) {
  for (let j = 0; j < g[0].length; j++) {
    g[i][j] = 0;
  }
}
for (let j of zeroCols) {
  for (let i = 0; i < g.length; i++) {
    g[i][j] = 0;
  }
}
console.log(g); 




















// 8. Count Elements Greater than a Threshold
let h = [
  [2, 5, 7],
  [1, 8, 3]
]

let count = 0;
for (let i = 0; i < h.length; i++) {
  for (let j = 0; j < h[i].length; j++) {
    if (h[i][j] > 5) {
      count++;
    }
  }
}
console.log(count);  



















// 9. Find row with maximum sum
let i = [
  [1, 2, 3],
  [4, 5, 6],
  [0, 1, 1]
]

let max = 0;
let maxRow = [];
for (let row of i) {
  let sum = row[0] + row[1] + row[2];
  if (sum > max) {
    max = sum;
    maxRow = row;
  }
}
console.log(maxRow); 





















// 10. Boundary Elements of a matrix
let j = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let boundary = [];
for (let k = 0; k < 3; k++) boundary.push(j[0][k]);                        // top row
boundary.push(j[1][2], j[2][2]);                                          // right column
boundary.push(j[2][1], j[2][0]);                                         // bottom row
boundary.push(j[1][0]);                                                 // left column
console.log(boundary);  