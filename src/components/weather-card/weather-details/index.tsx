import 'bulma/css/bulma.css';
import * as React from 'react';
import { IWeatherDetail, IWeatherDetails } from "../../imports";
import {
  DetailName,
  DetailsWrapper,
  DetailValue,
  DetailWrapper,
  Icon
} from './styles';
import Humidity from '../assets/humidity.svg';
import OzoneImg from '../assets/ozone.svg';
import PressureImg from '../assets/pressure.svg';
import VisibilityImg from '../assets/visibility.svg';

const WeatherDetail: React.SFC<IWeatherDetail> = ( { displayName, name, value}) => (
    <DetailWrapper>
      <Icon className={name} title={name}>
        {name === 'pressure' ? <PressureImg /> : null}
        {name === 'ozone' ? <OzoneImg /> : null}
        {name === 'humidity' ? <Humidity /> : null}
        {name === 'visibility' ? <VisibilityImg /> : null}
      </Icon>
      <DetailName className="is-hidden-mobile">{displayName}</DetailName>
      <DetailValue>{value}</DetailValue>
    </DetailWrapper>
);

const WeatherDetails: React.SFC<IWeatherDetails> = ({ details }) => (
  <DetailsWrapper>
    {details.map(item => <WeatherDetail {...item} key={item.name} />)}
  </DetailsWrapper>
);

export default WeatherDetails;

