import { weatherOptions } from "../components/WeatherCard/WeatherCard";

const latitude = 45.5152;
const longitude = -122.6784;
const APIkey = "feb4c18ca4cffb957bfa4ba9d695abed";

export const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeather = (data) => {
  const weather = { temp: {} };
  weather.temp.main = Math.ceil(data.main.temp);
  weather.temp.F = `${Math.round(data.main.temp)}°F`;
  weather.temp.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
  weather.temp.weather = data.weather[0].main;
  return weather;
};
