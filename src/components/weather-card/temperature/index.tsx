import 'bulma/css/bulma.css';
import * as React from 'react'
import { ITemperature } from '../../imports';
import { HighTemp, LowTemp, Temp, TemperatureWrapper, TempIcon } from './styled-components';

const Temperature: React.SFC<ITemperature> = ({ highTemp, lowTemp}) => {
  return (
    <TemperatureWrapper>
      <TempIcon className="is-hidden-mobile"/>
      <Temp>
        <HighTemp>
            <div>High: &nbsp;&nbsp;</div>
            <div>{highTemp}</div>
        </HighTemp>
        <LowTemp>
            <div>Low: &nbsp;&nbsp;</div>
            <div>{lowTemp}</div>
        </LowTemp>
      </Temp>
    </TemperatureWrapper>
  );
};

export default Temperature
