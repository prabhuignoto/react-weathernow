import Posed from 'react-pose';
import Styled from 'styled-components';

const PosedWrapper = Posed.div({
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1
  }
});

const AutoSuggestListWrapper = Styled(PosedWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: rgb(28, 28, 49);
  /* background: rgba(34, 34, 59, 1); */
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
  border-radius: 3px;
`;

export {
  AutoSuggestListWrapper,
};