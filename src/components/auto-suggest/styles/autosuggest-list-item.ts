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

const AutoSuggestName = Styled.div`
  padding: 5px 8px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  > img {
    /* margin-right: auto; */
    min-width: 32px;
    min-height: 32px;
  }
  > span {
    margin-left: 20px;
    margin-right: auto;
  }
`;

export {
 AutoSuggestListItemWrapper,
  AutoSuggestName,
};
