module.exports = function createDreamTeam(arr) {
  return arr.map(item => {
    if(typeof item == 'string'){
            return item.slice(0, 1);
        }
    
}).sort().join('');
};