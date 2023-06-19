const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  let description;
  let errorDescription;

  request(URL, (error, response, body) => {

    const data = JSON.parse(body);

    if (data.length > 0 && error === null) {
      description = data[0].description;
      errorDescription = null;
      callback(errorDescription, description);
    } else {
      description = null;
      errorDescription = body; //when set to "Error", even if you put in a bad breed name, it returns with code 200 + "null"
      callback(errorDescription, description);
    }

  });
};

module.exports = { fetchBreedDescription };