import Styled from 'styled-components';
import TempSvg from '../assets/temperature.svg';

export const TemperatureWrapper = Styled.div`
  border: 1px solid transparent;
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: rgba(34, 34, 59, 0.75);
  color: #fff;
  font-family: Montserrat, arial, sans-serif;
  font-size: 1.1em;
  font-weight: 500;
`;

export const HighTemp = Styled.div`
  border: 1px solid transparent;
  display: flex;
  flex-wrap: wrap;
  flex:2;
  height: 100%;
`;

export const LowTemp = Styled.div`
  border: 1px solid transparent;
  display: flex;
  flex-wrap: wrap;
  flex:2;
  height: 100%;
`;

export const Temp = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 3;
`;

export const TempIcon = Styled.i`
  height: 50%;
  width: 20px;
  background: url(${TempSvg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  display: block;
  flex: 1;
  margin-right: 20px;
`