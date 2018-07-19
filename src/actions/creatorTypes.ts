import { Mode } from '../enums/mode';
import { ICurrently } from '../models/data/ICurrently';
import { IDaily } from '../models/data/IDaily';
// import { IWeatherResponse } from '../models/data/IWeatherResponse';
import {ILocation} from '../types';
import { IDBSuggestionCountry } from './creatorTypes';


export interface ISelectSuggestion {
  type: string;
  value: string | {lat: string, lng: string};
}

export interface IClearSuggestions {
  type: string;
}

export interface IClearSuggestionsRcvd {
  type: string;
  items: IDBSuggestionCountry[];
}

// -----

export interface IDBSuggestionCity {
  name: 'string';
  country: 'string';
  lat: 'number';
  lng: 'number';
}

export interface IDBSuggestionCountry {
  id: string;
  name: string;
  code: string;
}

export interface ISuggestionsRecvdCountry {
  type: string;
  countries: IDBSuggestionCountry[];
}

export interface ISuggestionsRecvdCity {
  type: string;
  cities: IDBSuggestionCity[];
}

export interface IGetSuggestions {
  input: string;
  type: string;
  countryCode?: string;
}

export interface ILoadingSuggestions {
  type: string
}

export interface ISuggestionsLoaded {
  type: string;
}

export interface IGetWeatherForecastAction {
  type: string;
  location: ILocation;
}

export interface ILoadingForecast {
  type: string;
}
export interface ILoadedForecast {
  type: string;
}

export interface IWeatherForecaseRecvdAction {
  type: string;
  daily: IDaily;
  currently: ICurrently;
  timezone: string;
}

export interface IUpdateModeAction {
  type: string;
  mode: Mode;
}