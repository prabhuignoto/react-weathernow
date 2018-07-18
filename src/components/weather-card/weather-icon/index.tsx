import * as React from 'react'
import { IWeatherIcon } from "../../imports";
import {Icon, IconWrapper} from './styled-components';

const WeatherIcon: React.SFC<IWeatherIcon> = ({ icon }) => {
  return (
    <IconWrapper>
      <Icon className={`icon ${icon}`} />
    </IconWrapper>
  )
}

export default WeatherIcon;
