import 'bulma/css/bulma.css';
import * as React from 'react';
import { IDailyWeather } from '../../models/view/IDailyWeather';
import WeatherCard from "../weather-card";
import DailyWeatherWrapper from './styled-components/daily-weather';

const DailyWeather:React.SFC<IDailyWeather>  = ({ data, isForecastLoading }) => {
  return (
    <DailyWeatherWrapper className='container'>
      <div className="columns is-centered is-multiline" style={{width: '100%'}}>
        { data.map(item =>  <WeatherCard {...item} key={item.date.unixTimeStamp}/>)}
      </div>
    </DailyWeatherWrapper>
  )
};

export default DailyWeather;
