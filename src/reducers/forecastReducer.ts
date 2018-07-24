import Constants from '../actions/constants';
import { Mode } from '../enums/mode';

const defaultState = {
  currently: {},
  daily: {
    data: [],
  },
  history: [],
  loadingForecast: false,
  mode: Mode.daily_forecast,
  timezone: '',
};

export default function (state = defaultState, action: any) {
  switch (action.type) {
    case Constants.WEATHER_FORECAST_RECIEVED: {
      const { daily, currently, timezone, history } = action;

      return Object.assign({}, state, {
        currently,
        daily,  
        history,
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
    case Constants.HISTORY_LOADED: {
      return Object.assign({}, state, {
        history: action.items
      });
    }
    case Constants.RECENT_ITEMS_CLEARED: {
      return Object.assign({}, state, {
        history: []
      });
    }
    default:
      return state;
  }
}
