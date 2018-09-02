import Posed from 'react-pose';
import Styled from 'styled-components';

export const IconWrapper = Styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
`;

const Wrapper = Styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 2px;
  color: rgba(201,173,167,1);
  white-space: nowrap;
  cursor: pointer;
  font-size: 1rem;
  font-family: M PLUS Rounded 1c, arial, sans-serif;
  font-weight: 500;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

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
  top: 3rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
  border: 1px solid rgba(154, 140, 152, 0.7);
  border-radius: 2px;
`;

const ListItemWrapper = Styled.li`
  width: 100%;
  color: #fff;
  padding: 1rem;
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

