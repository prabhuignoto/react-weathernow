import 'bulma/css/bulma.css';
import * as React from 'react'
import { ITemperature } from '../../imports';
import { HighTemp, LowTemp, Temp, TempCurrent, TemperatureWrapper, TempVal } from './styles';
// import TempSvg from '../assets/thermometer.svg';

const Temperature: React.SFC<ITemperature> = ({ highTemp, lowTemp, temp}) => {
  return (
    <TemperatureWrapper>
      {/* <TempIcon className="is-hidden-mobile">
        <TempSvg />
      </TempIcon> */}
      <Temp>
        {
          highTemp && lowTemp ? <React.Fragment>
            <HighTemp>
            <div>High: &nbsp;&nbsp;</div>
            <TempVal>{highTemp ? `${highTemp}˚ F` : 'NA'}</TempVal>
            </HighTemp>
            <LowTemp>
                <div>Low: &nbsp;&nbsp;</div>
                <TempVal>{lowTemp ? `${lowTemp}˚ F` : 'NA'}</TempVal>
            </LowTemp>
          </React.Fragment> : 
          <TempCurrent>
            <TempVal>
              {`${temp}˚ F`}
            </TempVal>
          </TempCurrent>
        }
        
      </Temp>
    </TemperatureWrapper>
  );
};

export default Temperature;
