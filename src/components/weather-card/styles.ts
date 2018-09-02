import Posed from 'react-pose';
import Styled from 'styled-components';

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
  position: relative;
`;

export const Container = Styled.div`
  border-radius: 4px;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.25);
  background: linear-gradient(45deg, rgba(28,28,49,1) 0%, rgba(74,78,105,1) 100%);
  position: relative;
`;

export const ShowSciDetailsWrapper = Styled.div`
  height: 2.5rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShowSciDetails = Styled.button`
  background: none;
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: rgba(201,173,167,1);
  outline: none;
`