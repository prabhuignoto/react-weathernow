import { IWeatherCard } from "./IWeatherCard";

export interface IDailyWeather {
  data: IWeatherCard[];
  icon?: string,
  summary?: string,
  isForecastLoading: boolean;
}