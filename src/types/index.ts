import { StateHandler, StateHandlerMap } from 'recompose';

// =======|| TYPES FOR THE DATACONTAINERS ||========

// React-Redux dispatch props
export interface IDispatchProps {
  clearSuggestions: () => void;
  selectSuggestion: (value: string | ILocation) => void;
  getSuggestions(input: string, countryCode?: string): void;
}

// Recompose withState handlers
export interface IStateHandlers<T> extends StateHandlerMap<T> {
  onInput: StateHandler<T>;
  onClear: StateHandler<T>;
  onSelect: StateHandler<T>;
}

// Component State type
export interface IAutoSuggestState<T> {
  inputValue: string;
  suggestions: T[];
  selectedItem: string | ILocation;
  showSuggestions: boolean;
}

// ======|| Types concerning the View components ||===========

export interface ILocation {
  lat: string,
  lng: string
}

export interface IAutoSuggestList {
  items: IAutoSuggestListItem[];
  onSelect: (displayName: string, value: string | ILocation) => void;
}

export interface IAutoSuggestListItem {
  displayName: string,
  value: string | ILocation;
  code?: string;
  onSelect: (displayName: string, value: string | ILocation) => void;
};

export interface ICity extends IAutoSuggestListItem {
  country: string;
  value: ILocation;
};

export interface ICountry extends IAutoSuggestListItem {
  code: string,
};


export interface IAutoSuggest<T extends IAutoSuggestListItem> {
  placeHolder: string;
  inputValue: string;
  onInput: (event: React.FormEvent) => any;
  onClear: (event: React.MouseEvent) => void;
  onSelect: (displayName: string, value: string | ILocation) => void;
  showSuggestions: boolean,
  items: T[];
  isLoading: boolean;
  label: string;
}

export interface ISuggestions {
  countries: ICountry[];
  cities: ICity[];
  selectedCountry: 'string',
  selectedCity: 'string',
  loadingCountrySuggestions: boolean,
  loadingCitySuggestions: boolean,
};

