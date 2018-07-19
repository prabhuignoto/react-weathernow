import { IWeatherCard } from "./IWeatherCard";

export interface ICurrentlyWeather {
  data: IWeatherCard[];
  icon?: string,
  summary?: string,
  isForecastLoading: boolean;
}