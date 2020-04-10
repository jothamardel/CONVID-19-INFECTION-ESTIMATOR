
const currentlyInfectedAndSevereImpact = (input, value) => input.reportedCases * value;

const estimateNumberOfDays = (periodType, time) => {
  const period = periodType.toLowerCase();

  if (period === 'days') {
    return Math.trunc(time / 3);
  } if (period === 'weeks') {
    return Math.trunc(time / 3) * 7;
  } if (period === 'months') {
    return Math.trunc(time / 3) * 30;
  }
  return time;
};

const powerOfFactor = (days) => (days > 2 ? (2 ** Math.floor(days / 3)) : days);

const computeInfectionsByRequestedTime = (currentlyInfectedWithConvid, powerOfFactorValue) => (
  currentlyInfectedWithConvid * powerOfFactorValue
);

const computeImpactOfInfection = (
  dataCurrentlyInfected, data, value = 1
) => (dataCurrentlyInfected * (2 ** Math.trunc(data / 3)) * value);

module.exports = {
  currentlyInfectedAndSevereImpact,
  computeImpactOfInfection,
  estimateNumberOfDays,
  powerOfFactor,
  computeInfectionsByRequestedTime
};
