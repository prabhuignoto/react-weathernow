import { combineReducers } from 'redux';
import forecast from './forecastReducer';
import suggestions from './suggestionsReducer';

export default combineReducers({
  forecast,
  suggestions,
});
