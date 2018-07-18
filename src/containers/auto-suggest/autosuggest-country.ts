import * as _ from 'lodash';
import { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, withProps, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';
import {
  clearCountrySuggestions,
  getCountrySuggestions,
  selectCountrySuggestion,
} from '../../actions/creators';
import AutoSuggest  from '../../components/auto-suggest/views/auto-suggest';
import { IAutoSuggest, IAutoSuggestState, ICountry, IDispatchProps, IStateHandlers, ISuggestions } from '../../types';

const mapStateToProps = ({ suggestions } : { suggestions: ISuggestions }) => {
  return {
    isLoading: suggestions.loadingCountrySuggestions,
    items: suggestions.countries,
  };
};

const mapDispatchToProps: (dispatch: Dispatch) => IDispatchProps = (dispatch) => {
  return {
    clearSuggestions: _.debounce(() => dispatch(clearCountrySuggestions()), 50),
    getSuggestions: _.debounce((input: string) => dispatch(getCountrySuggestions(input)), 150),
    selectSuggestion: (value: string) => dispatch(selectCountrySuggestion(value)),
  };
};

const initialState = ({
  inputValue = '',
  suggestions= [],
  selectedItem= '',
  showSuggestions = false,
}: IAutoSuggestState<ICountry>) => ({
  inputValue,
  selectedItem,
  showSuggestions,
  suggestions,
});

const stateHandlers = {
  // clears the search results
  onClear: (
    state: IAutoSuggestState<ICountry>,
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
  onInput: (
    state: IAutoSuggestState<ICountry>, { getSuggestions, clearSuggestions }: IDispatchProps,
  ) => (
    ev: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = ev.target;
    clearSuggestions();
    if (value) {
      getSuggestions(value.toLowerCase());
    }
    return {
      inputValue: ev.target.value,
      showSuggestions: true,
    };
  },

  // invokes an action on selection of a result item
  onSelect: (state: IAutoSuggestState<ICountry>, { selectSuggestion }: IDispatchProps) => (displayName: string, value: string) => {
    if(value !== 'NOT_FOUND') {
      selectSuggestion(value);
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
  withStateHandlers<IAutoSuggestState<ICountry>, IStateHandlers<IAutoSuggest<ICountry>>>(initialState, stateHandlers),
  defaultProps({
    label: 'Country',
    placeHolder: 'search your country...',
  }),
  withProps(( { isLoading}: { isLoading: boolean }) => ({
    isLoading,
  }))
)(AutoSuggest);
