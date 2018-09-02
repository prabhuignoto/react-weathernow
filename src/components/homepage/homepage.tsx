import "bulma/css/bulma.css";
import * as React from "react";
import AutoSuggestCity from "../../containers/autosuggest-city";
import AutoSuggestCountry from "../../containers/autosuggest-country";
import CurrentlyWeather from "../../containers/currently-weather";
import DailyWeather from "../../containers/daily-weather";
import GeoLocation from "../../containers/geolocation";
import Geolocation from "../../containers/geolocation";
import RecentlyViewed from "../../containers/recently-viewed";
import Settings from "../../containers/settings";
import ToggleWeather from "../../containers/toggle-weather";
import { Mode } from "../../enums/mode";
import IHome from "../../models/view/IHome";
import { Footer } from "../footer/footer";
import Loader from "../loader-icon";
import AppLogo from "./assets/umbrella.svg";
import {
  Appheader,
  AppIcon,
  AppTitle,
  AutoSuggestWrapper,
  HomePage,
  SearchBar,
  ToggleWrapper,
  WeatherWrapper
} from "./styles";

const Home: React.SFC<IHome> = ({ mode, isForecastLoading }) => (
  <HomePage>
    <Appheader className="columns is-multiline">
      <div className="column is-12-mobile is-4-desktop is-4-tablet">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <AppTitle>
            <AppIcon className="is-hidden-mobile">
              <AppLogo />
            </AppIcon>
            Weather Now
          </AppTitle>
          <Geolocation />
        </div>
      </div>
      <div className="column is-hidden-mobile is-5-desktop"/>
      <div className="column is-3-desktop is-4-tablet is-12-mobile">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <RecentlyViewed />
          </div>
          <div style={{flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Settings />
          </div>
        </div>
      </div>
    </Appheader>
    <SearchBar className="columns is-multiline">
      <div className="column is-4-desktop is-6-tablet is-11-mobile">
        <ToggleWrapper>
          <ToggleWeather />
        </ToggleWrapper>
      </div>
      <div className="column is-12-tablet is-8-desktop">
        <AutoSuggestWrapper className="columns is-multiline is-gapless">
          <div className="column is-6-mobile">
            <AutoSuggestCountry />
          </div>
          <div className="column is-6-mobile">
            <AutoSuggestCity />
          </div>
        </AutoSuggestWrapper>
      </div>
    </SearchBar>

    <WeatherWrapper className="columns is-centered is-multiline">
      {mode === Mode.daily_forecast ? <DailyWeather /> : <CurrentlyWeather />}
    </WeatherWrapper>
    {isForecastLoading ? <Loader /> : null}
    <Footer />
  </HomePage>
);

export default Home;
