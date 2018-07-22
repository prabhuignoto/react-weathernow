import axios, { AxiosResponse } from "axios";
import * as _ from 'lodash';
import { put, takeEvery } from 'redux-saga/effects';
import * as Store from 'store';
import Constants from "../actions/constants";
import { IGetWeatherForecastAction, IHistoryLoaded, ILoadedForecast, ILoadingForecast, IWeatherForecaseRecvdAction, IWeatherForecastFailed } from '../actions/creatorTypes';
import { IHistory } from "../models/data/IHistory";
import { IWeatherResponse } from "../models/data/IWeatherResponse";

interface IHistoryItem {
  city: string;
  lat: string;
  lng: string;
  time: Date;
}

interface IStore {
  history: IHistoryItem[];
}

export function* watchGetWeatherForecast() {
  yield takeEvery(Constants.GET_WEATHER_FORECAST, function* getWeatherForecast(action: IGetWeatherForecastAction) {
    const { lat, lng } = action.location;
    const weatherServiceEndpoint = process.env.REACT_APP_WEATHER_SERVICE_ENDPOINT;
    const url = `${weatherServiceEndpoint}/getWeatherInfo?lat=${lat}&lng=${lng}`;

    yield put<ILoadingForecast>({
      type: Constants.LOADING_FORECAST
    }); 
    
    try {
      const response: AxiosResponse = yield axios.get(url, {
        timeout: 5000,
      });
      const weatherResponse: IWeatherResponse = response.data.weatherData;
  
      if(response.status === 200) {
        const localStore = Store.get('react-darksky-app') || { history: []};
        const historyItems: IHistoryItem[] = localStore.history.slice(0);
        const newHistory = {
          city: action.city,
          lat,
          lng,
          time: new Date()
        };

        if(_.findIndex<IHistoryItem>(historyItems, {city: action.city}) > -1) {
          const idx = _.findIndex(historyItems, {city: action.city});
          historyItems[idx] = newHistory;
        } else if(_.size(historyItems) > 10) {
          historyItems.shift();
          historyItems.push(newHistory);
        } else {
          historyItems.push(newHistory);
        }

        Store.set('react-darksky-app', {
          history: historyItems,
        });

        yield put<ILoadedForecast>({
          type: Constants.LOADED_FORECAST
        });
    
        yield put<IWeatherForecaseRecvdAction>({
          currently: weatherResponse.weatherData.currently,
          daily: weatherResponse.weatherData.daily,
          history: historyItems.map<IHistory>(item => ({
            location: {
              lat: item.lat,
              lng: item.lng
            },
            name: item.city,
          })),
          timezone: weatherResponse.weatherData.timezone,
          type: Constants.WEATHER_FORECAST_RECIEVED,
        });
      }
    } catch (error) {
      yield put<IWeatherForecastFailed>({
        data: 'failed to retrieve the response from the server',
        type: Constants.LOADED_FORECAST
      });
    }
  });
}

export function* watchGetHistory() {
  yield takeEvery(Constants.GET_HISTORY, function* getHistory() {
    const localStore: IStore = Store.get('react-darksky-app') || { history: [] };
    const items: IHistoryItem[] = localStore.history;
    const vItems: IHistory[] = items.map<IHistory>(item => ({
      location: {
        lat: item.lat,
        lng: item.lng
      },
      name: item.city,
    }))

    yield put<IHistoryLoaded>({
      items: vItems,
      type: Constants.HISTORY_LOADED,
    });
  });
}
