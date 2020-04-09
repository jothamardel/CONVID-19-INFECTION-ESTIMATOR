
const currentlyInfectedAndSevereImpact = (input, value) => input.reportedCases * value;

const estimateNumberOfDays = (periodType, time) => {
  const period = periodType.toLowerCase();

  if (period === 'days') {
    return time;
  } if (period === 'weeks') {
    return time * time * 7;
  } if (period === 'months') {
    return time * time * 30;
  }
  return time;
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
