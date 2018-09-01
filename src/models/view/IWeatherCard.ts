import { IMomentDate } from '../data/IMomentDate';
import  { IWeatherDetail } from './IWeatherDetail';

export interface IWeatherCard {
  date: IMomentDate;
  temperatureHigh?: number;
  temperatureLow?: number;
  icon: string;
  summary: string;
  weatherDetails: IWeatherDetail[];
  scientificData?: IWeatherDetail[];
  showSciData?: () => void;
  sciDataOpen?: boolean;
  hideSciData?: () => void;
  temperature?: number;
}