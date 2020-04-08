const inputData = require('./inputData');
const outputEstimatorData = require('./outputData');




const covid19ImpactEstimator = (data) => {
    let outputData = {...outputEstimatorData, impact: { currentlyInfected: data.data.reportedCases * 10}}
    return outputData

}



console.log(covid19ImpactEstimator(inputData))

module.exports = { 
    covid19ImpactEstimator
};
