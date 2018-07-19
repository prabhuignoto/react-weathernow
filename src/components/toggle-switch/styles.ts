import Styled, { keyframes, StyledFunction } from 'styled-components';
import StyledTS from 'styled-components-ts';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  min-width: 300px;
  width: 0;
  height: 50px;
  border: 1px solid rgba(34, 34, 59, 0.5);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  font-family: Montserrat, arial, sans-serif;
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.4);
  padding: 2px;
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
  text-align: center;
`;

export const LeftSwitch = StyledTS<{leftEnabled: boolean}>(Switch.extend)`
  left: 0;
  color: ${p => p.leftEnabled ? '#22223B' : 'rgba(255,255,255,0.45)'};
  font-weight: ${p => p.leftEnabled ? '700' : 'normal'}
`;

export const RightSwitch = StyledTS<{rightEnabled: boolean}>(Switch.extend)`
  right: 0;
  color: ${p => p.rightEnabled ? '#22223B' : 'rgba(255,255,255,0.45)'};
  font-weight: ${p => p.rightEnabled ? '700' : 'normal'}
`;

export const moveHighlightToLeft = keyframes`
  0% {
    right: 2%;
    left: 48%;
  }
  100% {
    left: 2%;
    right: 48%;
  }
`;
export const moveHighlightToRight = keyframes`
  100% {
    right: 2%;
    left: 48%;
  }
  0% {
    left: 2%;
    right: 48%;
  }
`;

export const Highlighter =  StyledDiv`
  width: 50%;
  height: 80%;
  display: block;
  position: absolute;
  z-index: 0;
  animation-duration: 500ms;
  animation-timing: linear;
  animation-name: ${p => p.leftEnabled ? moveHighlightToLeft : moveHighlightToRight};
  left: ${p => p.leftEnabled ? '2%' : '48%'};
  right: ${p => p.rightEnabled ? '2%' : '48%'};
  background: red;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  border-radius: 4px;
`

