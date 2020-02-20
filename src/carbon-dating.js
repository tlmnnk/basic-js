const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 return sampleActivity === `${sampleActivity}` &&
          !isNaN(parseFloat(sampleActivity)) && 
          parseFloat(sampleActivity) > 0 && 
          parseFloat(sampleActivity) <= 15 ? 
          Math.floor(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693) + 1 : false;
};
