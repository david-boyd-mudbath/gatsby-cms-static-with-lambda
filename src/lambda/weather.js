import fetch from "node-fetch";
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?q=newcastle,au&units=metric&APPID=3cda5c2cff38ce5fcc6ae26fa96c69f5';
exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      //body: JSON.stringify({  temperature: data.main.temp })
      body: JSON.stringify({  temperature: Math.floor(Math.random() * Math.floor(20)) })
      
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};  