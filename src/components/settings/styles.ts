import Posed from 'react-pose';
import Styled from 'styled-components';

const PosedWrapper = Posed.div({
  init: { scale: 1 },
  press: { scale: 0.95 },
  pressable: true,
})

const Wrapper = Styled(PosedWrapper)`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: Open Sans, Arial, sans-serif;
  font-size: 0.8rem;
  height: 40px;
  justify-content: center;
  position: relative;
  border: 1px solid #9A8C98;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  color: #22223B;
  font-family: Open Sans, arial, sans-serif;
  border-radius: 2px;
  padding: 1rem;
  min-width: 100px;
  outline: none;
  user-select: none;
`;

const Label = Styled.div`
  text-align: center;
`;

const Icon = Styled.i`
  background-size: contain;
  display: block;
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const ListWrapper = Styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  width: 220%;
  z-index: 100;
  margin-left: auto;
  margin-right: auto;
  outline: none;
`;

const PosedList = Posed.ul({
  close: {
    opacity: 0,
    scale: 0,
  },
  open: {
    opacity: 1,
    scale: 1,
  }
})

const List = Styled(PosedList)`
  background: #000;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
  list-style: none;
  padding: 0;
  border-radius: 2px;
  border: 1px solid rgba(154, 140, 152, 0.7);
`;

const ListItem = Styled.li`
  color: #fff;
  font-family: Open Sans, arial, sans-serif;
  font-size: 0.8rem;
  width: 100%;
  white-space: nowrap;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  line-height: 38px;
  text-align: center;
  &:hover {
      background-color: rgba(154, 140, 152, 1);
      /* color: #22223B; */
  }
`;

export {
  Wrapper,
  Label,
  Icon,
  List,
  ListItem,
  ListWrapper
}