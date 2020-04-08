const { currentlyInfectedAndSevereImpact } = require('./estimator.utils');
const { estimateNumberOfDays } = require('./estimator.utils');
const { powerOfFactor } = require('./estimator.utils');
const { computeInfectionsByRequestedTime } = require('./estimator.utils');

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
  const { periodType, timeToElapse, totalHospitalBeds } = data;

  const currentlyInfectedWithConvid = currentlyInfectedAndSevereImpact(inputData, 10);
  const severeImpactWithConvid = currentlyInfectedAndSevereImpact(inputData, 50);

  const computedInfectionsByRequestedTime = computeInfectionsByRequestedTime(
    currentlyInfectedWithConvid,
    powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
  );
  const computedInfectionsByRequestedTimeSevere = computeInfectionsByRequestedTime(
    severeImpactWithConvid,
    powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
  );
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedWithConvid,
      infectionsByRequestedTime: computedInfectionsByRequestedTime,
      severeCasesByRequestedTime: computedInfectionsByRequestedTime * 0.15,
      hospitalBedsByRequestedTime:
      (totalHospitalBeds * 0.35) - (computedInfectionsByRequestedTime * 0.15)
    },
    severeImpact: {
      currentlyInfected: severeImpactWithConvid,
      infectionsByRequestedTime: computedInfectionsByRequestedTimeSevere,
      severeCasesByRequestedTime: computedInfectionsByRequestedTimeSevere * 0.15,
      hospitalBedsByRequestedTime:
      (totalHospitalBeds * 0.35) - (computedInfectionsByRequestedTimeSevere * 0.15)
    }
  };
};


// console.log(estimateNumberOfDays(inputData.periodType, inputData.timeToElapse))
// console.log(powerOfFactor(inputData.timeToElapse))
// console.log(covid19ImpactEstimator(inputData));

module.exports = {
  covid19ImpactEstimator
};
