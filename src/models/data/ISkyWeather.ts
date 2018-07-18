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
}