import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';
import Constants from "../actions/constants";
import { IGetWeatherForecastAction, ILoadedForecast, ILoadingForecast, IWeatherForecaseRecvdAction } from '../actions/creatorTypes';
import { IWeatherResponse } from "../models/data/IWeatherResponse";

export function* watchGetWeatherForecast() {
  yield takeEvery(Constants.GET_WEATHER_FORECAST, function* getWeatherForecast(action: IGetWeatherForecastAction) {
    const { lat, lng } = action.location;
    const weatherServiceEndpoint = process.env.REACT_APP_WEATHER_SERVICE_ENDPOINT;
    const url = `${weatherServiceEndpoint}/getWeatherInfo?lat=${lat}&lng=${lng}`;

    yield put<ILoadingForecast>({
      type: Constants.LOADING_FORECAST
    });
    
    const response = yield axios.get(url);
    const weatherResponse: IWeatherResponse = response.data.weatherData;

    yield put<ILoadedForecast>({
      type: Constants.LOADED_FORECAST
    });

    yield put<IWeatherForecaseRecvdAction>({
      currently: weatherResponse.weatherData.currently,
      daily: weatherResponse.weatherData.daily,
      timezone: weatherResponse.weatherData.timezone,
      type: Constants.WEATHER_FORECAST_RECIEVED,
    });
   
  });
}

