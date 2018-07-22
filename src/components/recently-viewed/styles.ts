import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #9A8C98;
  padding: 4px 6px;
  border-radius: 2px;
  height: 38px;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  color: #22223B;
  font-size: 0.9rem;
  font-family: Montserrat, arial, sans-serif;
  font-weight: 500;
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
`;

const ListItemWrapper = Styled.li`
  width: 100%;
  color: #fff;
  height: 35px;
  line-height: 35px;
  padding: 3px 8px;
  text-transform: capitalize;
  /* background: #4A4E69; */
  cursor: pointer;
  &:hover {
      background: rgba(74, 78, 105, 0.5);
  }
`;

const Label = Styled.div`
  width: 100%;
`;

export {
  Wrapper,
  List,
  ListItemWrapper,
  Label
}

