import Styled, { keyframes, StyledFunction } from 'styled-components';
import StyledTS from 'styled-components-ts';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  min-width: 280px;
  width: 0;
  height: 50px;
  border: 1px solid #C9ADA7;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  font-family: Montserrat, arial, sans-serif;
`;

interface ISwitch {
  leftEnabled: boolean;
  rightEnabled: boolean;
};

const StyledDiv: StyledFunction<ISwitch & React.HTMLProps<HTMLDivElement>> = Styled.div;

const Switch = StyledDiv`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: transparent;
  padding: 2px 2px;
  white-space: nowrap;
  font-size: 0.9em;
  font-weight: 700;
`;

export const LeftSwitch = StyledTS<{leftEnabled: boolean}>(Switch.extend)`
  left: 0;
  color: ${p => p.leftEnabled ? '#22223B' : 'rgba(255,255,255,0.25)'};
  font-weight: ${p => p.leftEnabled ? '700' : 'normal'}
`;

export const RightSwitch = StyledTS<{rightEnabled: boolean}>(Switch.extend)`
  right: 0;
  color: ${p => p.rightEnabled ? '#22223B' : 'rgba(255,255,255,0.25)'};
  font-weight: ${p => p.rightEnabled ? '700' : 'normal'}
`;

export const moveHighlightToLeft = keyframes`
  0% {
    right: 1%;
    left: 49%;
  }
  100% {
    left: 1%;
    right: 49%;
  }
`;
export const moveHighlightToRight = keyframes`
  100% {
    right: 1%;
    left: 49%;
  }
  0% {
    left: 1%;
    right: 49%;
  }
`;

export const Highlighter =  StyledDiv`
  width: 50%;
  height: 90%;
  display: block;
  position: absolute;
  z-index: 0;
  animation-duration: 500ms;
  animation-timing: linear;
  animation-name: ${p => p.leftEnabled ? moveHighlightToLeft : moveHighlightToRight};
  left: ${p => p.leftEnabled ? '1%' : '49%'};
  right: ${p => p.rightEnabled ? '1%' : '49%'};
  background: red;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  border-radius: 2px;
`

