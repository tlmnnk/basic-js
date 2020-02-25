module.exports = function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if(Object.keys(date).length > 0) {
    throw new Error('Bang!');
  }

  const month = date.getMonth() + 1;

    if(month === 12 || month < 3) return 'winter';
    if(month > 2 && month < 6) return 'spring';
    if(month > 5 && month < 9) return 'summer';
    if(month > 8 && month < 12) return 'fall';
  
};
