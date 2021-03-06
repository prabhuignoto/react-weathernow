import Styled from 'styled-components';

const AutoSuggestContainer = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AutoSuggestWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 3.25rem;
  width: 100%;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  border: 1px solid #9A8C98;
  border-radius: 2px;
`;

const Input = Styled.input`
  border: none;
  font-size: 1rem;
  width: 100%;
  padding: 5px 15px;
  height: 100%;
  color: #fff;
  outline: none;
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.2);
  background: rgb(28, 28, 49);
  border-radius: 2px;
  text-transform: capitalize;
  font-family: M PLUS Rounded 1c, arial, sans-serif;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
  text-align: left;
  &.label-visible {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

const Button = Styled.button`
  border: none;
  background: none;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 2rem;
  cursor: pointer;
  outline: none;
`;

const AutoSuggestListWrapper = Styled.div`
  position: absolute;
  top: 4.5rem;
  left: 0%;
  width: 100%;
  z-index: 999;
`;

const Label = Styled.label`
    margin: 1rem;
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(0,0,0,1);
    
    background: transparent;
    text-transform: uppercase;
    height: 30px;
    line-height: 30px;
    font-family: M PLUS Rounded 1c, arial, sans-serif;
`
export {
  AutoSuggestWrapper,
  Input,
  Button,
  AutoSuggestContainer,
  AutoSuggestListWrapper,
  Label
};