import { weatherOptions } from "../components/WeatherCard/WeatherCard";
import processServerResponse from "./processServerResponse";

const latitude = 45.5152;
const longitude = -122.6784;
const APIkey = "feb4c18ca4cffb957bfa4ba9d695abed";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeather = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return Math.ceil(temperature);
};
