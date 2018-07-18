import { IWeatherData } from "./IWeatherData";

export interface IWeatherResponse {
  createdAt: number,
  updatedAt: number,
  id: string,
  lat: number,
  lng: number,
  weatherData: IWeatherData
}