import Styled from 'styled-components';
import HistoryIcon from './assets/history.svg';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #9A8C98;
  padding: 4px;
  border-radius: 2px;
  height: 38px;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  color: #22223B;
  max-width: 160px;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: Montserrat, arial, sans-serif;
  font-weight: 500;

  &.disabled {
    pointer-events: disabled;
    background: #d3d3d3;
    box-shadow: inset 0 0 20px 2px #939393;
    cursor: default;
  }
`;

const List = Styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  background: #4A4E69;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
`;

const ListItemWrapper = Styled.li`
  width: 100%;
  color: #fff;
  height: 35px;
  padding: 3px 8px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #4A4E69;
  cursor: pointer;
  &:hover {
      background-color: #9A8C98;
      color: #22223B;
  }
`;

const Label = Styled.div`
  width: 100%;
  text-align: center;
`;

const Icon = Styled.i`
  width: 40px;
  height: 40px;
  display: block;
  background: url(${HistoryIcon});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;
`;



export {
  Wrapper,
  List,
  ListItemWrapper,
  Label,
  Icon
}

