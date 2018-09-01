export default interface ISkyWeather {
  time: number,
  summary: string,
  icon: string,
  temperatureHigh: number,
  temperatureLow: number,
  pressure: number,
  windSpeed: number,
  visibility: number,
  ozone: number,
  humidity: number,
  temperature: number;
  apparentTemperature: number;
  apparentTemperatureLow: number;
  apparentTemperatureHigh: number;
  sunriseTime: number;
  sunsetTime: number;
  uvIndex: number;
  windGust: number;
  windBearing: number;
  moonPhase: number;
  cloudCover: number;
  dewPoint: number;
}