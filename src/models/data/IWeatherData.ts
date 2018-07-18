import { ICurrently } from './ICurrently';
import { IDaily } from './IDaily';

export interface IWeatherData {
  latitude: number,
  longitude: number,
  timezone: string,
  currently: ICurrently,
  daily: IDaily,
}