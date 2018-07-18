import ISkyWeather from './ISkyWeather';

export interface IDaily {
  summary: string;
  icon: string;
  data: ISkyWeather[];
}