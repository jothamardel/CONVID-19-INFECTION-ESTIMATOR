const inputData = require('./inputData');
const outputEstimatorData = require('./outputData');


const currentlyInfected = (data) => {
    let outputData = {...outputEstimatorData, impact: { currentlyInfected: data.data.reportedCases * 10}}
    return outputData
}

const severeImpact = (data) => {
    let outputData = {...outputEstimatorData, severeImpact: { currentlyInfected: data.data.reportedCases * 50}}
    return outputData
}

const covid19ImpactEstimator = (data) => {

    let severeImpactEstimator = severeImpact(data)
    let currentlyInfectedEstimator = currentlyInfected(data)
    
    return Object.assign(severeImpactEstimator, currentlyInfectedEstimator)

}


// console.log(severeImpact())
console.log(covid19ImpactEstimator(inputData))

module.exports = { 
    covid19ImpactEstimator
};
