import Styled from 'styled-components';
import closeButton from '../assets/cross-out.svg';

const AutoSuggestContainer = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
  flex: 1;
`;

const AutoSuggestWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background: #22223B;
  border-radius: 4px;
`;

const Input = Styled.input`
  border: none;
  font-size: 1.2em;
  width: 100%;
  padding: 5px 15px;
  height: 100%;
  color: #fff;
  outline: none;
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.2);
  background: #22223B;
  border-radius: 4px;
  text-transform: capitalize;
  font-family: Montserrat, arial, sans-serif;
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  text-align: left;
`;

const Button = Styled.button`
  border: none;
  background: url(${closeButton});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  outline: none;
`;

const AutoSuggestListWrapper = Styled.div`
  position: absolute;
  top: 56px;
  left: 0px;
  width: 100%;
  z-index: 999;
`;

const Label = Styled.label`
    margin: 1rem;
    font-size: 1.2em;
    color: rgba(255,255,255,0.5);
    background: rgba(34,34,59,0.95);
    text-transform: uppercase;
    height: 30px;
    line-height: 30px;
    font-family: Montserrat, arial, sans-serif;
`
export {
  AutoSuggestWrapper,
  Input,
  Button,
  AutoSuggestContainer,
  AutoSuggestListWrapper,
  Label
};