import 'bulma/css/bulma.css';
import * as React from 'react';
import AutoSuggestCity from '../../../containers/autosuggest-city';
import AutoSuggestCountry from '../../../containers/autosuggest-country';
import CurrentlyWeather from '../../../containers/currently-weather';
import DailyWeather from '../../../containers/daily-weather';
import ToggleWeather from '../../../containers/toggle-weather';
import {Mode} from '../../../enums/mode';
import IHome from '../../../models/view/IHome';
import Loader from "../../loader-icon";

import { AutoSuggestWrapper, Credit, HomePage, SearchBar, ToggleWrapper, WeatherWrapper } from '../styles';

const Home: React.SFC<IHome> = ({mode , isForecastLoading}) => (
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

    <WeatherWrapper>
      { mode === Mode.daily_forecast ? <DailyWeather /> : <CurrentlyWeather />}
    </WeatherWrapper>
    { isForecastLoading ? <Loader /> : null }
    <Credit href="https://darksky.net/poweredby/" target="_new">Powered by Dark Sky</Credit>
  </HomePage>
);

export default Home;