import Posed from 'react-pose';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #9A8C98;
  padding: 1rem;
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
  font-family: Open Sans, arial, sans-serif;
  font-weight: 500;
  outline: none;
  user-select: none;

  &.disabled {
    pointer-events: none;
    background: #d3d3d3;
    box-shadow: inset 0 0 20px 2px #939393;
    cursor: default;
    color: rgba(0,0,0,0.75)
  }
`;

const PosedList = Posed.ul({
  close: {
    opacity: 0,
    scale: 0
  },
  open: {
    opacity: 1,
    scale: 1,
  }
});

const List = Styled(PosedList)`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
  border: 1px solid rgba(154, 140, 152, 0.7);
  border-radius: 2px;
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
  background-color: #000;
  cursor: pointer;
  &:hover {
      background-color: #9A8C98;
      /* color: #22223B; */
  }
`;

const Label = Styled.div`
  width: 100%;
`;

const Icon = Styled.i`
  width: 40px;
  height: 40px;
  margin-right: 4px;
  display: block;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;
`;

const CaretIcon = Styled.i`
  margin-left: 4px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;

  &.up {
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: 50%;
  } 
`;  

export {
  Wrapper,
  List,
  ListItemWrapper,
  Label,
  Icon,
  CaretIcon
}

