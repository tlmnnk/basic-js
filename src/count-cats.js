module.exports = function countCats(arr) {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] == '^^') {
      result += 1;
    }
  }
}
  
  return result;
};
