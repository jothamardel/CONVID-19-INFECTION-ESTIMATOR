const { currentlyInfectedAndSevereImpact } = require('./estimator.utils');
const { estimateNumberOfDays } = require('./estimator.utils');
const { powerOfFactor } = require('./estimator.utils');

const inputData = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const covid19ImpactEstimator = (data) => {
  const input = data;
  const { periodType, timeToElapse } = data;
  const currentlyInfectedWithConvid = currentlyInfectedAndSevereImpact(inputData, 10);
  const severeImpactWithConvid = currentlyInfectedAndSevereImpact(inputData, 50);

  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedWithConvid,
      infectionsByRequestedTime: currentlyInfectedWithConvid
      * powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
    },
    severeImpact: {
      currentlyInfected: severeImpactWithConvid,
      infectionsByRequestedTime: severeImpactWithConvid
      * powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
    }
  };
};


// console.log(estimateNumberOfDays(inputData.periodType, inputData.timeToElapse))
// console.log(powerOfFactor(inputData.timeToElapse))
// console.log(covid19ImpactEstimator(inputData));

module.exports = {
  covid19ImpactEstimator
};
