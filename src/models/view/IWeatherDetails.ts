import {IWeatherDetail} from './IWeatherDetail';

export interface IWeatherDetails {
  details?: IWeatherDetail[];
  onClose?: () => void;
  open?: boolean;
};