import Styled from 'styled-components';
import PartlyCloudyNight from '../assets/cloudy-night.svg';
import Cloudy from '../assets/cloudy.svg';
import PartlyCloudy from '../assets/partly-cloudy.svg';
import Rainy from '../assets/rain.svg';
import ClearDay from '../assets/sun.svg';
import Wind from '../assets/windy.svg';

export const IconWrapper =  Styled.div`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: #22223B;
  /* padding-top: 20px; */
`;

export const Icon = Styled.i`
  display: block;
  margin-left: auto;
  margin-right: auto;
  &.clear-day {
    background: url(${ClearDay});
    background-repeat: no-repeat; 
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
  &.partly-cloudy-day {
    background: url(${PartlyCloudy});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
  &.partly-cloudy-night {
    background: url(${PartlyCloudyNight});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
  &.wind {
    background: url(${Wind});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
  &.cloudy {
    background: url(${Cloudy});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
  &.rain {
    background: url(${Rainy});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 75%;
    width: 85px;
    height: 100%;
  }
`;