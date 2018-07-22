import * as _ from 'lodash';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';
import {
  clearCitySuggestions,
  getCitySuggestions,
  getWeatherForecast,
  selectCitySuggestion,
} from '../actions/creators';
import AutoSuggest  from '../components/auto-suggest/views/auto-suggest';
import {IAutoSuggest, IAutoSuggestState, ICity, IDispatchProps, ILocation, IStateHandlers, ISuggestions } from '../types';

const mapStateToProps = ({ suggestions } : { suggestions: ISuggestions }) => {
  return {
    isLoading: suggestions.loadingCitySuggestions,
    items: suggestions.cities.map(city => Object.assign({}, city, {
      value: {
        lat: city.value.lat,
        lng: city.value.lng
      }
    })),
    selectedCountry: suggestions.selectedCountry,
  };
};

interface IDispatchPropsCustom {
  getForeCast(city: string, location: ILocation): void,
}

const mapDispatchToProps: (dispatch: Dispatch) => IDispatchProps & IDispatchPropsCustom = (dispatch) => {
  return {
    clearSuggestions: _.debounce(() => dispatch(clearCitySuggestions()), 50),
    getForeCast: (city: string, location: ILocation) => dispatch(getWeatherForecast(city, location)),
    getSuggestions: _.debounce((input: string, countryCode: string) => dispatch(getCitySuggestions(input, countryCode)), 150),
    selectSuggestion: (value: string | ILocation) => dispatch(selectCitySuggestion(value)),
  };
};

const initialState = ({
  inputValue = '',
  suggestions= [],
  selectedItem= '',
  showSuggestions = false,
}: IAutoSuggestState<ICity>) => ({
  inputValue,
  selectedItem,
  showSuggestions,
  suggestions,
});



interface IDummy {
  selectedCountry: 'string';
};

const stateHandlers = {
  // clears the search results
  onClear: (
    state: IAutoSuggestState<ICity>,
    { clearSuggestions }: IDispatchProps,
  ) => (ev: ChangeEvent<HTMLButtonElement>) => {
    const parent: Element = ev.target.parentElement as Element;
    if(parent !== null) {
      const input: HTMLInputElement | null = parent.querySelector('input');
      if(input !== null) {
        input.focus();
      }
    }
    clearSuggestions();
    return {
      inputValue: '',
      showSuggestions: false,
    };
  },

  // invokes the suggestions api on user input
  onInput: (state: IAutoSuggestState<ICity>, { getSuggestions, clearSuggestions, selectedCountry }: IDispatchProps & IDummy,
  ) => (
    ev: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = ev.target;
    clearSuggestions();
    if (value && selectedCountry) {
      getSuggestions(value.toLowerCase(), selectedCountry);
    }

    return {
      inputValue: ev.target.value,
      showSuggestions: true,
    };
  },

  // invokes an action on selection of a result item
  onSelect: (state: IAutoSuggestState<ICity>, { selectSuggestion, getForeCast }: IDispatchProps & IDispatchPropsCustom) => 
  (displayName: string, value: ILocation) => {
    if(value.lat && value.lng) {
      selectSuggestion(value);
      getForeCast(displayName, value as ILocation);
      return {
        inputValue: displayName,
        selectedItem: value,
        showSuggestions: false,
      };
    } else {
      return {
        showSuggestions: false,
      }
    }
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<IAutoSuggestState<ICity>, IStateHandlers<IAutoSuggest<ICity>>>(initialState, stateHandlers),
  defaultProps({
    label: 'City',
    placeHolder: 'search your city...',
  }),
)(AutoSuggest);
