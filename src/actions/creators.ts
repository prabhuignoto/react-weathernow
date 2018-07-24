import {Mode} from '../enums/mode';
import {ILocation} from '../types';
import Constants from './constants';

import {
  IClearRecentlyViewedItems,
  IClearSuggestions,
  IGetHistoryAction,
  IGetSuggestions,
  IGetWeatherForecastAction,
  ISelectSuggestion,
  IsetCurLocationAsDefault,
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

const getWeatherForecast: (city:string, location: ILocation) => IGetWeatherForecastAction = (city, location) => ({
  city, 
  location,
  type: Constants.GET_WEATHER_FORECAST,
});

const updateWeatherMode: (mode: Mode) => IUpdateModeAction = mode => ({
    mode,
    type: Constants.UPDATE_MODE
});

const getHistory: () => IGetHistoryAction = () => ({
    type: Constants.GET_HISTORY
});

const clearRecentlyViewedItems: () => IClearRecentlyViewedItems = () => ({
    type: Constants.CLEAR_RECENTLY_VIEWED_ITEMS
});

const setCurrentLocationAsDefault: () => IsetCurLocationAsDefault = () => ({
    type: Constants.SET_CURRENT_LOCATION_AS_DEFAULT
});

export {
  selectCitySuggestion,
  selectCountrySuggestion,
  getCountrySuggestions,
  clearCountrySuggestions,
  getCitySuggestions,
  clearCitySuggestions,
  getWeatherForecast,
  updateWeatherMode,
  getHistory,
  clearRecentlyViewedItems,
  setCurrentLocationAsDefault
};
