import 'bulma/css/bulma.css';
import * as React from 'react'
import { ITemperature } from '../../imports';
import { HighTemp, LowTemp, Temp, TemperatureWrapper, TempVal } from './styles';
// import TempSvg from '../assets/thermometer.svg';

const Temperature: React.SFC<ITemperature> = ({ highTemp, lowTemp}) => {
  return (
    <TemperatureWrapper>
      {/* <TempIcon className="is-hidden-mobile">
        <TempSvg />
      </TempIcon> */}
      <Temp>
        <HighTemp>
            <div>High: &nbsp;&nbsp;</div>
            <TempVal>{highTemp ? `${highTemp}˚` : 'NA'}</TempVal>
        </HighTemp>
        <LowTemp>
            <div>Low: &nbsp;&nbsp;</div>
            <TempVal>{lowTemp ? `${lowTemp}˚` : 'NA'}</TempVal>
        </LowTemp>
      </Temp>
    </TemperatureWrapper>
  );
};

export default Temperature;
