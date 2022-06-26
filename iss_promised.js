const request = require('request-promise-native');

const fetchMyIP = function() {
  return request(`https://api.ipify.org?format=json`);
};

const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/json/?callback=test&apikey=Sib81NGbL21yRbSuaRHanHpQcSXNS46sqGMgn3iu&ip=${ip}`);
};

const fetchISSFlyoverTimes = function(body) {
  const { longitude, latitude } = JSON.parse(body);
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const printPassTimes = function(passTimes) {

  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass @ ${datetime} for ${duration} seconds!`);
  }

};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyoverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    })
    .then(printPassTimes);
};


module.exports = { nextISSTimesForMyLocation };