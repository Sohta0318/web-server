const request = require("request");
const forecast = (lon, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=81794ee4b0f74e5cd056d9a3b21ce10f&query=${encodeURIComponent(
    lat
  )},${encodeURIComponent(lon)}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
      // callback(body.error.info);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Also humidity is ${body.current.humidity} %`
      );
    }
  });
};
module.exports = forecast;
