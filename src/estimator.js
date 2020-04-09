const {
  currentlyInfectedAndSevereImpact,
  estimateNumberOfDays,
  powerOfFactor,
  computeInfectionsByRequestedTime
} = require('./estimator.utils');

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
  const {
    periodType, timeToElapse, totalHospitalBeds, region
  } = data;
  const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;

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
      infectionsByRequestedTime: currentlyInfectedWithConvid * 512,
      impactPerDay: Math.round((currentlyInfectedWithConvid * 512) / 28),
      impactOver1Week: Math.round((currentlyInfectedWithConvid * 512) / 28) * 7,
      impactOver1Month: Math.round((currentlyInfectedWithConvid * 512) / 28) * 30,
      // severeCasesByRequestedTime: computedInfectionsByRequestedTime * 0.15,
      // hospitalBedsByRequestedTime:
      // (totalHospitalBeds * 0.35) - (computedInfectionsByRequestedTime * 0.15),
      // casesForICUByRequestedTime: computedInfectionsByRequestedTime * 0.05,
      // casesForVentilatorsByRequestedTime: computedInfectionsByRequestedTime * 0.02,
      // dollarsInFlight:
      // (computedInfectionsByRequestedTime * 0.65
      //   * avgDailyIncomeInUSD
      //   * avgDailyIncomePopulation
      //   * powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))).toFixed(2)
    },
    severeImpact: {
      currentlyInfected: severeImpactWithConvid,
      infectionsByRequestedTime: severeImpactWithConvid * 512,
      severeImpactPerDay: Math.round((severeImpactWithConvid * 512) / 28),
      severeImpactOver1Week: Math.round((severeImpactWithConvid * 512) / 28) * 7,
      severeImpactOver1Month: Math.round((severeImpactWithConvid * 512) / 28) * 30,
      // severeCasesByRequestedTime: computedInfectionsByRequestedTimeSevere * 0.15,
      // hospitalBedsByRequestedTime:
      // (totalHospitalBeds * 0.35) - (computedInfectionsByRequestedTimeSevere * 0.15),
      // casesForICUByRequestedTime: computedInfectionsByRequestedTimeSevere * 0.05,
      // casesForVentilatorsByRequestedTime: computedInfectionsByRequestedTimeSevere * 0.02,
      // dollarsInFlight:
      // (computedInfectionsByRequestedTimeSevere * 0.65
      // * avgDailyIncomeInUSD
      // * avgDailyIncomePopulation
      // * powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))).toFixed(2)
    }
  };
};


// console.log(covid19ImpactEstimator(inputData));

module.exports = {
  covid19ImpactEstimator
};
