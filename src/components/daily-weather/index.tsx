import 'bulma/css/bulma.css';
import * as React from 'react';
import { IDailyWeather } from '../../models/view/IDailyWeather';
import Loader from '../loader-icon';
import WeatherCard from "../weather-card";
import DailyWeatherWrapper from './styled-components/daily-weather';

const DailyWeather:React.SFC<IDailyWeather>  = ({ data, isForecastLoading }) => {
  return (
    <DailyWeatherWrapper className='container is-fluid'>
      <div className="columns is-multiline is-variable is-2" style={{width: '100%'}}>
        { data.map(item =>  <WeatherCard {...item} key={item.date.unixTimeStamp}/>)}
      </div>
      { isForecastLoading ? <Loader /> : null}
    </DailyWeatherWrapper>
  )
};

export default DailyWeather;
