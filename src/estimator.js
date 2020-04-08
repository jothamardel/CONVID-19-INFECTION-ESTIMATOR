

data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
}


const currentlyInfectedAndSevereImpact = (data, value) => data.reportedCases * value




const covid19ImpactEstimator = (data) => {
    const input = data;
    let currentlyInfectedWithConvid = currentlyInfectedAndSevereImpact(data, 10)
    let severeImpactWithConvid = currentlyInfectedAndSevereImpact(data, 50)
    
    return {
        data: input,
        impact: { 
            currentlyInfected: currentlyInfectedWithConvid, 
            infectionsByRequestedTime: currentlyInfectedWithConvid * 512 
        },
        severeImpact: { 
            currentlyInfected: severeImpactWithConvid, 
            infectionsByRequestedTime: severeImpactWithConvid * 512 
        } 
    }

}


// console.log(severeImpact())
console.log(covid19ImpactEstimator(data))

module.exports = { 
    covid19ImpactEstimator
};
