import Constants from '../actions/constants';

const defaultState = {
  cities: [],
  countries: [],
  loadingCitySuggestions: false,
  loadingCountrySuggestions: false,
  selectedCity: '',
  selectedCountry: '',

};

export default function (state = defaultState, action: any) {
  switch (action.type) {
    case Constants.SELECT_CITY_SUGGESTION: {
      return Object.assign({}, state, {
        selectedCity: action.value
      });
    }
    case Constants.SELECT_COUNTRY_SUGGESTION: {
      return Object.assign({}, state, {
        selectedCountry: action.value
      });
    }
    case Constants.GET_SUGGESTIONS_COUNTRY: {
      return Object.assign({}, state);
    }
    case Constants.COUNTRY_SUGGESTIONS_RCVD: {
      return Object.assign({}, state, {
        countries: action.countries,
      });
    }
    case Constants.CITY_SUGGESTIONS_RCVD: {
      return Object.assign({}, state, {
        cities: action.cities,
      });
    }
    case Constants.CLEAR_SUGGESTIONS_RCVD_COUNTRY: {
      return Object.assign({}, state, {
        countries: [],
        selectedCountry: '',
      });
    }
    case Constants.CLEAR_SUGGESTIONS_RCVD_CITY: {
      return Object.assign({}, state, {
        cities: [],
        selectedCity: '',
      });
    }
    case Constants.LOADING_COUNTRY_SUGGESTIONS: {
      return Object.assign({}, state, {
        loadingCountrySuggestions: true
      })
    }
    case Constants.COUNTRY_SUGGESTIONS_LOADED: {
      return Object.assign({}, state, {
        loadingCountrySuggestions: false
      })
    }
    case Constants.LOADING_CITY_SUGGESTIONS: {
      return Object.assign({}, state, {
        loadingCitySuggestions: true
      })
    }
    case Constants.CITY_SUGGESTIONS_LOADED: {
      return Object.assign({}, state, {
        loadingCitySuggestions: false
      })
    }
    default:
      return state;
  }
}
