import Posed from 'react-pose';
import Styled from 'styled-components';

export const IconWrapper =  Styled.div`
  border: 1px solid transparent;
  display: block;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  margin: 1rem 0;
`;

export const PosedIcon = Posed.i({
  close: {
    scale: 0,
  },
  open: {
    delay: 300,
    scale: 1,
  },
})

export const Icon = Styled(PosedIcon)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 6rem;
  position: relative;
  height: 6rem;
`;