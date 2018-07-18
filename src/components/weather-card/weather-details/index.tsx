import 'bulma/css/bulma.css';
import * as React from 'react';
import { IWeatherDetail, IWeatherDetails } from "../../imports";
import {
  DetailName,
  DetailsWrapper,
  DetailValue,
  DetailWrapper,
  Icon
} from './styled-components';

const WeatherDetail: React.SFC<IWeatherDetail> = ( { displayName, name, value}) => (
    <DetailWrapper>
      <Icon className={name} title={name} />
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

