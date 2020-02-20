module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) {
    return false;
  }
  return arr.map(item => {
    if(typeof item == 'string'){
           return (/[a-zA-Z]/g.exec(item)[0].toUpperCase());
        }
    
}).sort().join('');
};