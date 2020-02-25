module.exports = function repeater( str, options ) {

    if(typeof str !== 'string') {
        str = str + '';
      }

    let result = '';

    if(!options.repeatTimes) options.repeatTimes = 1;

    if(!options.separator) options.separator = '+';

    if(options.hasOwnProperty('addition')) {
        if(typeof options.addition !== 'string') {
            options.addition = options.addition + '';
          }
        if(!options.additionRepeatTimes)
          options.additionRepeatTimes = 1;
  
        if(!options.additionSeparator)
          options.additionSeparator = '|';
    } else options.addition = '';

    if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;

    if(!options.additionSeparator) options.additionSeparator = '|';

    

    if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    let i = 0;
    while(i < options.repeatTimes) {
        let j = 0;
        result += str;
        if(options.addition != '') {
            while(j < options.additionRepeatTimes) {
                result += options.addition;
                if( j + 1 !== options.additionRepeatTimes )
                result += options.additionSeparator;
                j++;
            }
        }
    if( i + 1 !== options.repeatTimes )
    result += options.separator;
    i++;
    }
    return result;
};
  