const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It did not work!', error);
    return;
  }

  console.log('It worked! Returned IP: ', ip);
});