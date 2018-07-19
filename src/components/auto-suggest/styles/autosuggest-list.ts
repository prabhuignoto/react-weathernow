import Styled from 'styled-components';

const AutoSuggestListWrapper = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgba(34, 34, 59, 1);
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
`;

export {
  AutoSuggestListWrapper,
};