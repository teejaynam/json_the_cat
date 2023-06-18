const request = require('request');
const breed = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, (error, response, body) => {
  
  if (response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].name);
      console.log(data[0].description);
    } else {
      console.log(`Breed ${breed} is not found`);
    }
  } else {
    console.log('Request failed. Error:',error);
  }

});