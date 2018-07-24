import { all, fork } from 'redux-saga/effects';
 import {
  watchClearRecentItems,
  watchGetHistory,
  watchGetWeatherForecast
 } from './darkSkySaga';
import {
  watchClearCitySuggestions,
  watchClearCountrySuggestions,
  watchGetCitySuggestions,
  watchGetCountrySuggestions,
 } from './suggestionsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchClearCountrySuggestions),
    fork(watchGetCountrySuggestions),
    fork(watchGetCitySuggestions),
    fork(watchClearCitySuggestions),
    fork(watchGetWeatherForecast),
    fork(watchGetHistory),
    fork(watchClearRecentItems),
  ]);
}
