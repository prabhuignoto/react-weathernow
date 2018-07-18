// import {IDate} from './IDate';
// import  { ILocation } from './ILocation';
// import  { ISummary } from './ISummary';
// import  { ITemperature } from './ITemperature';
import { IMomentDate } from '../data/IMomentDate';
import  { IWeatherDetail } from './IWeatherDetail';
// import  { IWeatherIcon } from './IWeatherIcon';

// export interface IWeatherCard {
//   date: IDate;
//   temperature: ITemperature;
//   summary: ISummary;
//   weatherIcon: IWeatherIcon;
//   weatherDetails: IWeatherDetail[];
//   location: ILocation;
// }

export interface IWeatherCard {
  date: IMomentDate;
  temperatureHigh: number;
  temperatureLow: number;
  icon: string;
  summary: string;
  weatherDetails: IWeatherDetail[];
}