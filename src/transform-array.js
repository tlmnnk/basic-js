module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error('Bang!');
    let result = [];
    arr.forEach((item, i ) => {
     
        switch (item) {
            case '--discard-next':

                break;
            case '--discard-prev':
                result.length !== 0 ? result.pop() : null;
                break;
            case '--double-next':
                i < arr.length - 1 ? result.push(arr[i + 1]) : null;
                break;
            case '--double-prev':
                i >= 1 ? result.push(arr[i - 1]) : null;
                break;
            default:
                 result.push(arr[i]);
                    if(arr[i - 1] === '--discard-next') {
                        result.pop();
                    }
                }

    });
    return result;
};
