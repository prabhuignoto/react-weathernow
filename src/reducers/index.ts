import { combineReducers } from 'redux';
import dailyForecast from './forecastReducer';
import suggestions from './suggestionsReducer';

export default combineReducers({
  dailyForecast,
  suggestions,
});
