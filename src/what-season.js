module.exports = function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if(typeof date != 'object') {
    throw new Error('Bang!');
  }

  switch(date.getMonth()) {
    case 0 || 1 || 11:
      return 'Winter';
    case 2 || 3 || 4:
      return 'Spring';
    case 5 || 6 || 7:
      return 'Summer';
    case 8 || 9 || 10:
        return 'Fall';
  }

  
};
