import Styled from 'styled-components';
import Posed from 'react-pose';

const PosedWrapper = Posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
})

export const Wrapper = Styled(PosedWrapper)`
  margin-bottom: 10px; 
`;

export const Container = Styled.div`
  border-radius: 4px;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
  background: linear-gradient(45deg, rgba(28,28,49,1) 0%, rgba(74,78,105,1) 100%);
`;