
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
//   timeToElapse: 38,
//   reportedCases: 2747,
//   population: 92931687,
//   totalHospitalBeds: 678874
// };

const casesReported = (cases, value) => cases * value;
const infectionsByRequestedTime = (typeOfPeriod, elapseTime) => {
  const period = typeOfPeriod.toLowerCase();
  switch (period) {
    case 'weeks':
      return (
        Math.trunc(elapseTime / 3) * 7
      );
    case 'months':
      return (
        Math.trunc(elapseTime / 3) * 30
      );
    default:
      return Math.trunc(elapseTime / 3);
  }
};


const covid19ImpactEstimator = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const casesReportedForImpact = casesReported(reportedCases, 10);
  const casesReportedForSevereImpact = casesReported(reportedCases, 50);
  return {
    estimate: {
      imapct: {
        currentlyInfected: casesReportedForImpact,
        infectionsByRequestedTime: casesReportedForImpact
        * (2 ** infectionsByRequestedTime(periodType, timeToElapse))
      },
      severeImpact: {
        currentlyInfected: casesReportedForSevereImpact,
        infectionsByRequestedTime: casesReportedForSevereImpact
        * (2 ** infectionsByRequestedTime(periodType, timeToElapse))
      }
    }
  };
};

covid19ImpactEstimator(inputData);

// console.log(covid19ImpactEstimator(inputData));

export default covid19ImpactEstimator;
