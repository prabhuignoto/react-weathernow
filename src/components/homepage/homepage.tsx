import 'bulma/css/bulma.css';
import * as React from 'react';
import AutoSuggestCity from '../../containers/autosuggest-city';
import AutoSuggestCountry from '../../containers/autosuggest-country';
import CurrentlyWeather from '../../containers/currently-weather';
import DailyWeather from '../../containers/daily-weather';
import GeoLocation from '../../containers/geolocation';
import RecentlyViewed from "../../containers/recently-viewed";
import Settings from '../../containers/settings';
import ToggleWeather from '../../containers/toggle-weather';
import {Mode} from '../../enums/mode';
import IHome from '../../models/view/IHome';
import Loader from "../loader-icon";
import AppLogo from './assets/umbrella.svg';
import { 
  Appheader, AppIcon, AppTitle, AutoSuggestWrapper,
  Credit, HomePage, SearchBar, ToggleWrapper, WeatherWrapper
} from './styles';
import { Footer } from '../footer/footer';

const Home: React.SFC<IHome> = ({mode , isForecastLoading}) => (
  <HomePage>
    <Appheader className="columns">
      <AppTitle className="column">
        <AppIcon><AppLogo/></AppIcon>
        Weather Now
      </AppTitle>
      <GeoLocation />
    </Appheader>
    <SearchBar className="columns is-multiline is-centered">
      <ToggleWrapper className="column is-three-quarters-mobile is-one-fifth-desktop">
        <ToggleWeather />
      </ToggleWrapper>
      <div className="column is-four-fifths-mobile is-four-fifths-tablet is-half-desktop">
        <AutoSuggestWrapper className="columns is-gapless">
          <AutoSuggestCountry />
          <AutoSuggestCity />
        </AutoSuggestWrapper>
      </div>
      <div className="column is-one-quarter-desktop" style={{marginLeft:'auto', display: 'flex'}}>
        <RecentlyViewed />
        <Settings />
      </div>
    </SearchBar>

    <WeatherWrapper className="columns is-centered is-multiline">
      { mode === Mode.daily_forecast ? <DailyWeather /> : <CurrentlyWeather />}
    </WeatherWrapper>
    { isForecastLoading ? <Loader /> : null }
    <Footer />
  </HomePage>
);

export default Home;