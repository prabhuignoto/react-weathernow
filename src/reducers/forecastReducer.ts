import Constants from '../actions/constants';
// import { IWeatherForecaseRecvdAction } from '../actions/creatorTypes';
import { Mode } from '../enums/mode';

const defaultState = {
  currently: {},
  daily: {
    data: [],
  },
  loadingForecast: false,
  mode: Mode.daily_forecast,
  timezone: '',
};

export default function (state = defaultState, action: any) {
  switch (action.type) {
    case Constants.WEATHER_FORECAST_RECIEVED: {
      // const weatherResponse: IWeatherForecaseRecvdAction = action.weatherResponse as IWeatherForecaseRecvdAction;
      const { daily, currently, timezone } = action;

      return Object.assign({}, state, {
        currently,
        daily,  
        timezone,
      });
    }
    case Constants.LOADING_FORECAST: {
      return Object.assign({}, state, {
        loadingForecast: true,
      })
    }
    case Constants.LOADED_FORECAST: {
      return Object.assign({}, state, {
        loadingForecast: false,
      })
    }
    case Constants.UPDATE_MODE: {
      return Object.assign({}, state, {
        mode: action.mode
      })
    }
    default:
      return state;
  }
}
