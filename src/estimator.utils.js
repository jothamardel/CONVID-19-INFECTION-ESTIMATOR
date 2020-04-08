
const currentlyInfectedAndSevereImpact = (input, value) => input.reportedCases * value;

const estimateNumberOfDays = (periodType, time) => {
  const period = periodType.toLowerCase();

  switch (period) {
    case 'days':
      return time;
    case 'weeks':
      return time * 7;
    case 'months':
      return time * 30;
    default:
      return time;
  }
};

const powerOfFactor = (days) => (days > 2 ? (2 ** Math.floor(days / 3)) : days);


module.exports = {
  currentlyInfectedAndSevereImpact,
  estimateNumberOfDays,
  powerOfFactor
};
