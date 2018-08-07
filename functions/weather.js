 const fetch = require('node-fetch');
exports.handler = function handler(event, context, callback) {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=newcastle,au&units=metric&APPID=3cda5c2cff38ce5fcc6ae26fa96c69f5';
      
    fetch(endpoint)
      .then( res => res.json() )
      .then( body =>  {
        const response = {
          statusCode: 200,
          body: JSON.stringify({ temperature: body.main.temp })
        };
  
        callback(null, response);
      });
  }