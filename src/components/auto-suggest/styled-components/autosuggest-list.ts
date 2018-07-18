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
`;

export {
  AutoSuggestListWrapper,
};