import Posed from 'react-pose';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  border-radius: 2px;
  color: #fff;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 1rem;
  font-family: Open Sans, arial, sans-serif;
  font-weight: 500;
  outline: none;
  user-select: none;
  height: 100%;

  &.disabled {
    pointer-events: none;
    cursor: default;
    color: rgba(255,255,255,0.25)
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

