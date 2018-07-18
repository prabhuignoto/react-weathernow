import axios from 'axios';
import { delay } from 'redux-saga';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import Constants from '../actions/constants';
import {
  IClearSuggestions,
  IDBSuggestionCity,
  IDBSuggestionCountry,
  IGetSuggestions,
  ILoadingSuggestions,
  ISuggestionsLoaded,
} from '../actions/creatorTypes';
import { ISuggestionsRecvdCity, ISuggestionsRecvdCountry } from '../actions/creatorTypes';

export function* watchClearCountrySuggestions() {
  yield takeEvery(Constants.CLEAR_SUGGESTIONS_COUNTRY, function* (action: IClearSuggestions) {
    yield put<ISuggestionsRecvdCountry>({
      countries: [],
      type: Constants.CLEAR_SUGGESTIONS_RCVD_COUNTRY,
    });
  });
}

export function* watchClearCitySuggestions() {
  yield takeEvery(Constants.CLEAR_SUGGESTIONS_CITY, function* (action: IClearSuggestions) {
    yield put<ISuggestionsRecvdCountry>({
      countries: [],
      type: Constants.CLEAR_SUGGESTIONS_RCVD_CITY,
    });
  });
}

export function* watchGetCountrySuggestions() {
  yield takeLatest(Constants.GET_SUGGESTIONS_COUNTRY, function* (action: IGetSuggestions) {
    yield delay(500);
    const weatherSvcEndpoint = process.env.REACT_APP_WEATHER_SERVICE_ENDPOINT;
    const url = `${weatherSvcEndpoint}/autoSuggestCountries?country=${action.input}`;
    yield put<ILoadingSuggestions>({
      type: Constants.LOADING_COUNTRY_SUGGESTIONS
    });
    const response = yield axios.get(url);
    const countries = response.data.countries.map((x: IDBSuggestionCountry) => {
      return Object.assign({}, x, { value: x.code, displayName: x.name });
    });

    if(countries.length < 1) {
      countries.push( {
        code:'0',
        displayName: 'No Country found',
        value: 'NOT_FOUND',
      })
    }
    yield put<ISuggestionsLoaded>({
      type: Constants.COUNTRY_SUGGESTIONS_LOADED
    });
    yield put<ISuggestionsRecvdCountry>({
      countries,
      type: Constants.COUNTRY_SUGGESTIONS_RCVD,
    });
  });
}

export function* watchGetCitySuggestions() {
  yield takeLatest(Constants.GET_SUGGESTIONS_CITY, function* (action: IGetSuggestions) {
    yield delay(500);
    const weatherSvcEndpoint = process.env.REACT_APP_WEATHER_SERVICE_ENDPOINT;
    const url = `${weatherSvcEndpoint}/autoSuggestCities?city=${action.input}&countryCode=${action.countryCode}`;
    yield put<ILoadingSuggestions>({
      type: Constants.LOADING_CITY_SUGGESTIONS
    })
    const response = yield axios.get(url);
    const cities = response.data.cities.map((x: IDBSuggestionCity) => {
      return Object.assign({}, x, { value: {lat: x.lat, lng: x.lng}, displayName: x.name });
    });

    if(cities.length < 1) {
      cities.push({
        code: '0',
        displayName: 'No City found',
        value: 'NOT_FOUND'
      })
    }

    yield put<ISuggestionsLoaded>({
      type: Constants.CITY_SUGGESTIONS_LOADED
    })
    yield put<ISuggestionsRecvdCity>({
      cities,
      type: Constants.CITY_SUGGESTIONS_RCVD,
    });
  });
}
