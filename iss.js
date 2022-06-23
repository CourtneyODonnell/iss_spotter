
const request = require('request');

/* -makes a single API request to retrieve the user's IP address. 
input: 
a callback to pass back an error or the IP string
returns via callback:
-an error, if any (nullable)
-the IP address as a string (null if error).
*/
const fetchMyIP = function(callback) {
  //use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error);
      return;
    } else {
      //turn json into object
      const ipData = JSON.stringify(body);
      console.log(ipData);
    }
  });
};
fetchMyIP();
/*
expected output of:
> node index.js
Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
Next pass at Fri Jun 01 2021 14:36:08 GMT-0700 (Pacific Daylight Time) for 632 seconds!
Next pass at Fri Jun 01 2021 16:12:35 GMT-0700 (Pacific Daylight Time) for 648 seconds!
Next pass at Fri Jun 01 2021 17:49:29 GMT-0700 (Pacific Daylight Time) for 648 seconds!
Next pass at Fri Jun 01 2021 19:26:12 GMT-0700 (Pacific Daylight Time) for 643 seconds!
*/

module.exports = { fetchMyIP };