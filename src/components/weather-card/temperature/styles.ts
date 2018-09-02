import Styled from 'styled-components';

export const TemperatureWrapper = Styled.div`
  border: 1px solid transparent;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: rgba(34, 34, 59, 0.5);
  color: #fff;
  font-family: M PLUS Rounded 1c, arial, sans-serif;
  font-size: 0.85em;
  font-weight: 500;
`;

export const HighTemp = Styled.div`
  border: 1px solid transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex:2;
  height: 100%;
`;

export const LowTemp = Styled.div`
  border: 1px solid transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex:2;
  height: 100%;
`;

export const TempCurrent = Styled.div`
  height: 100%;
  flex: 1;
  width: 100%;
`;

export const Temp = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  width: 100%;
  color: rgba(201,173,167,1)
`;

export const TempVal = Styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const TempIcon = Styled.i`
  height: 2rem;
  width: 2rem;
  position: relative;
  margin: 0.25rem;
  padding: 0.25rem;
`;