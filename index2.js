const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    return passTimes;
  })
  .catch((error) => {
    console.log(`It didn't work: `, error.message);
  });