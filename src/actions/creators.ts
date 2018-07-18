import {Mode} from '../enums/mode';
import {ILocation} from '../types';
import Constants from './constants';

import {
  IClearSuggestions,
  IGetSuggestions,
  IGetWeatherForecastAction,
  ISelectSuggestion,
  IUpdateModeAction
} from './creatorTypes';

const getCountrySuggestions: (input: string) => IGetSuggestions = (input) => ({
    input,
    type: Constants.GET_SUGGESTIONS_COUNTRY,
});

const clearCountrySuggestions: () => IClearSuggestions = () => ({
    type: Constants.CLEAR_SUGGESTIONS_COUNTRY,
});

const getCitySuggestions: (input: string, countryCode: string) => IGetSuggestions = (input, countryCode) => ({
    countryCode,
    input,
    type: Constants.GET_SUGGESTIONS_CITY,
});

const clearCitySuggestions: () => IClearSuggestions = () => ({
    type: Constants.CLEAR_SUGGESTIONS_CITY,
});

const selectCitySuggestion: (value: string | {lat: string, lng: string}) => ISelectSuggestion = (value) => ({
    type: Constants.SELECT_CITY_SUGGESTION,
    value,
});

const selectCountrySuggestion: (value: string) => ISelectSuggestion = (value) => ({
    type: Constants.SELECT_COUNTRY_SUGGESTION,
    value,
});

const getWeatherForecast: (location: ILocation) => IGetWeatherForecastAction = (location) => ({
  location,
  type: Constants.GET_WEATHER_FORECAST,
});

const updateWeatherMode: (mode: Mode) => IUpdateModeAction = mode => ({
    mode,
    type: Constants.UPDATE_MODE
});

export {
  selectCitySuggestion,
  selectCountrySuggestion,
  getCountrySuggestions,
  clearCountrySuggestions,
  getCitySuggestions,
  clearCitySuggestions,
  getWeatherForecast,
  updateWeatherMode
};
