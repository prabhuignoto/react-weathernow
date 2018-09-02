import Posed from 'react-pose';
import Styled from 'styled-components';

export const IconWrapper = Styled.div`
  position: relative;
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 0.25rem;
`;

const Wrapper = Styled.div`
  cursor: pointer;
  font-family: Open Sans, Arial, sans-serif;
  font-size: 1rem;
  justify-content: center;
  position: relative;
  color: rgba(201,173,167,1);
  font-family: Open Sans, arial, sans-serif;
  padding: 1rem;
  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: 3rem;  
  z-index: 50;
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
  z-index: 999;
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