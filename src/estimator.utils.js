
const currentlyInfectedAndSevereImpact = (input, value) => input.reportedCases * value;

const estimateNumberOfDays = (periodType, time) => {
  const period = periodType.toLowerCase();

  if (period === 'days') {
    return time;
    }
  else if(period === 'weeks'){
    return time * 7;
    }
  else if(period === 'months'){
    return time * 30;
  }
  
};

const powerOfFactor = (days) => (days > 2 ? (2 ** Math.floor(days / 3)) : days);

const computeInfectionsByRequestedTime = (currentlyInfectedWithConvid, powerOfFactorValue) => (
  currentlyInfectedWithConvid * powerOfFactorValue
);

module.exports = {
  currentlyInfectedAndSevereImpact,
  estimateNumberOfDays,
  powerOfFactor,
  computeInfectionsByRequestedTime
};
