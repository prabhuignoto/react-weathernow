import * as React from 'react'
import { IWeatherIcon } from "../../imports";
import {Icon, IconWrapper} from './styled-components';
import PartlyCloudyNight from '../assets/cloudy-night.svg';
import Cloudy from '../assets/cloudy.svg';
import Fog from '../assets/fog.svg';
import PartlyCloudy from '../assets/partly-cloudy.svg';
import Rainy from '../assets/rain.svg';
import ClearDay from '../assets/sun.svg';
import Wind from '../assets/windy.svg';

const WeatherIcon: React.SFC<IWeatherIcon> = ({ icon }) => {
  return (
    <IconWrapper>
      <Icon className={`icon ${icon}`}>
          {icon === 'clear-day' ? <ClearDay/> : null}
          {icon === 'partly-cloudy-day' ? <PartlyCloudy/> : null}
          {icon === 'partly-cloudy-night' ? <PartlyCloudyNight/> : null}
          {icon === 'wind' ? <Wind/> : null}
          {icon === 'cloudy' ? <Cloudy/> : null}
          {icon === 'rain' ? <Rainy/> : null}
          {icon === 'Fog' ? <Fog/> : null}
      </Icon>
    </IconWrapper>
  )
}

export default WeatherIcon;
