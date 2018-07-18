import 'bulma/css/bulma.css';
import * as React from 'react';
import AutoSuggestCity from '../../../containers/auto-suggest/autosuggest-city';
import AutoSuggestCountry from '../../../containers/auto-suggest/autosuggest-country';
import DailyWeather from '../../../containers/daily-weather';
import ToggleWeather from '../../../containers/toggle-weather';
import { AutoSuggestWrapper, DailyWeatherWrapper, HomePage, SearchBar, ToggleWrapper } from '../styles';

export default () => (
  <HomePage>
    
    <SearchBar className="columns is-multiline is-centered">
      <ToggleWrapper className="column is-quarter-desktop">
        <ToggleWeather />
      </ToggleWrapper>
      <AutoSuggestWrapper className="column is-half-desktop">
        <AutoSuggestCountry />
        <AutoSuggestCity />
      </AutoSuggestWrapper>
      <div className="column is-quarter-desktop">React-Sky</div>
    </SearchBar>

    <DailyWeatherWrapper>
      <DailyWeather />
    </DailyWeatherWrapper>
  </HomePage>
);
