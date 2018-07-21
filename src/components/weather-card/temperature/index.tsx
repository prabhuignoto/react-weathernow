import 'bulma/css/bulma.css';
import * as React from 'react'
import { ITemperature } from '../../imports';
import { HighTemp, LowTemp, Temp, TemperatureWrapper, TempIcon } from './styles';

const Temperature: React.SFC<ITemperature> = ({ highTemp, lowTemp}) => {
  return (
    <TemperatureWrapper>
      <TempIcon className="is-hidden-mobile"/>
      <Temp>
        <HighTemp>
            <div>High: &nbsp;&nbsp;</div>
            <div>{highTemp ? `${highTemp}˚` : 'NA'}</div>
        </HighTemp>
        <LowTemp>
            <div>Low: &nbsp;&nbsp;</div>
            <div>{lowTemp ? `${lowTemp}˚` : 'NA'}</div>
        </LowTemp>
      </Temp>
    </TemperatureWrapper>
  );
};

export default Temperature;

