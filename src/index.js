
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return []
  };
  let arr = [];
for( let i = 0;  i < matrix.length; i++ ) {
  for( let j = 0;  j < matrix[i].length; j++ ) {
    let x = i % 2 === 0
    ? j
    : (matrix[i].length - j - 1);

    arr.push(matrix[i][x]);
  }
}
  return arr;
}
