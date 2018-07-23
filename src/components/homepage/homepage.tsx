import 'bulma/css/bulma.css';
import * as React from 'react';
import AutoSuggestCity from '../../containers/autosuggest-city';
import AutoSuggestCountry from '../../containers/autosuggest-country';
import CurrentlyWeather from '../../containers/currently-weather';
import DailyWeather from '../../containers/daily-weather';
import GeoLocation from '../../containers/geolocation';
import RecentlyViewed from "../../containers/recently-viewed";
import ToggleWeather from '../../containers/toggle-weather';
import {Mode} from '../../enums/mode';
import IHome from '../../models/view/IHome';
import Loader from "../loader-icon";
import { Appheader, AppTitle, AutoSuggestWrapper, Credit, HomePage, SearchBar, ToggleWrapper, WeatherWrapper } from './styles';

const Home: React.SFC<IHome> = ({mode , isForecastLoading}) => (
  <HomePage>
    <Appheader className="columna">
      <AppTitle>Weather Now</AppTitle>
      <GeoLocation />
    </Appheader>
    <SearchBar className="columns is-multiline is-centered">
      <ToggleWrapper className="column is-three-quarters-mobile is-one-fifth-desktop">
        <ToggleWeather />
      </ToggleWrapper>
      <div className="column is-one-fifth-desktop">
        <RecentlyViewed />
      </div>
      <div className="column is-four-fifths-mobile">
        <AutoSuggestWrapper className="columns">
          <AutoSuggestCountry />
          <AutoSuggestCity />
        </AutoSuggestWrapper>
      </div>
      {/* <div className="column is-four-fifths-mobile is-one-fifth-desktop">React-Sky</div> */}
    </SearchBar>

    <WeatherWrapper className="columns is-centered is-multiline">
      { mode === Mode.daily_forecast ? <DailyWeather /> : <CurrentlyWeather />}
    </WeatherWrapper>
    { isForecastLoading ? <Loader /> : null }
    <Credit href="https://darksky.net/poweredby/" target="_new">Powered by Dark Sky</Credit>
  </HomePage>
);

export default Home;