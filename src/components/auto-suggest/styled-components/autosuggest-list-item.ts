import Styled from 'styled-components';

const AutoSuggestListItemWrapper = Styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  width: 100%;
  text-transform: capitalize;
  color: #fff;
  font-family: Montserrat, arial, sans-serif;
  justify-content: center;
  outline: none;
  cursor: pointer;
  &:hover {
    /* background: rgba(28, 37, 65, 0.4); */
    background: rgba(154, 140, 152, 0.45);
    /* color: rgba(34, 34, 59, 1); */
    color: #fff;
  }
`;

const AutoSuggestName = Styled.span`
  padding: 5px 8px;
`;

export {
 AutoSuggestListItemWrapper,
  AutoSuggestName,
};
