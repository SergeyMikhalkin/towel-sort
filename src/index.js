module.exports = function towelSort(matrix) {
  if(typeof matrix === "undefined") return [];
  let result = [];
  if(matrix.length == 0) return result;
  for(let i = 0; i < matrix.length; i++) {
      let currElem = i % 2 == 0 ? matrix[i] : matrix[i].reverse();
      currElem.forEach(element => result.push(element));
  }
  return result;
}
