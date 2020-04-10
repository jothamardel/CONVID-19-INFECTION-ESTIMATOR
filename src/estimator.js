
import { currentlyInfectedAndSevereImpact, estimateNumberOfDays } from './estimator.utils';

// const {
//   currentlyInfectedAndSevereImpact,
//   // computeImpactOfInfection
//   estimateNumberOfDays
//   // powerOfFactor,
//   // computeInfectionsByRequestedTime
// } = require('./estimator.utils');

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

// const inputData = {
//   region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 4,
//     avgDailyIncomePopulation: 0.73
//   },
//   periodType: 'days',
//   timeToElapse: 28,
//   reportedCases: 2747,
//   population: 92931687,
//   totalHospitalBeds: 678874
// };

const covid19ImpactEstimator = (data) => {
  const input = data;
  // const {
  //   periodType, timeToElapse, totalHospitalBeds, region
  // } = data;
  const { periodType, timeToElapse } = data;
  // const { avgDailyIncomeInUSD, avgDailyIncomePopulation } = region;

  const currentlyInfectedWithConvid = currentlyInfectedAndSevereImpact(inputData, 10);
  const severeImpactWithConvid = currentlyInfectedAndSevereImpact(inputData, 50);

  // const computedInfectionsByRequestedTime = computeInfectionsByRequestedTime(
  //   currentlyInfectedWithConvid,
  //   powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
  // );
  // const computedInfectionsByRequestedTimeSevere = computeInfectionsByRequestedTime(
  //   severeImpactWithConvid,
  //   powerOfFactor(estimateNumberOfDays(periodType, timeToElapse))
  // );
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedWithConvid,
      infectionsByRequestedTime: 2 ** estimateNumberOfDays(periodType, timeToElapse)
      // infectionsByRequestedTime: currentlyInfectedWithConvid
      // * (2 ** estimateNumberOfDays(periodType, timeToElapse))
      // impactPerDay: currentlyInfectedWithConvid
      // * (2 ** Math.trunc(timeToElapse / 3)),
      // impactOver1Week: currentlyInfectedWithConvid
      // * (2 ** Math.trunc(timeToElapse / 3)) * 7,
      // impactOver1Month: currentlyInfectedWithConvid
      // * (2 ** Math.trunc(timeToElapse / 3)) * 30
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
      infectionsByRequestedTime: 2 ** estimateNumberOfDays(periodType, timeToElapse)
      // infectionsByRequestedTime: severeImpactWithConvid
      // * (2 ** estimateNumberOfDays(periodType, timeToElapse))
      // severeImpactPerDay: severeImpactWithConvid * (2 ** Math.trunc(timeToElapse / 3)),
      // severeImpactOver1Week: severeImpactWithConvid * (2 ** Math.trunc(timeToElapse / 3)) * 7,
      // severeImpactOver1Month: severeImpactWithConvid * (2 ** Math.trunc(timeToElapse / 3)) * 30
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

export default covid19ImpactEstimator;
// module.exports = {
//   covid19ImpactEstimator
// };
