import Styled, { keyframes } from 'styled-components';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  width: 100%;
  height: 3.25rem;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  font-family: Open Sans, arial, sans-serif;
  box-shadow: inset 0 0 10px 1px rgba(0,0,0,0.4);
  padding: 2px;
  border: 1px solid #9A8C98;
`;

const Switch = Styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: transparent;
  padding: 2px 2px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export const LeftSwitch = Styled(Switch)<{leftEnabled: boolean}>`
  left: 0;
  color: ${p => p.leftEnabled ? '#22223B' : 'rgba(255,255,255,0.45)'};
  font-weight: ${p => p.leftEnabled ? '700' : 'normal'}
`;

export const RightSwitch = Styled(Switch)<{rightEnabled: boolean}>`
  right: 0;
  color: ${p => p.rightEnabled ? '#22223B' : 'rgba(255,255,255,0.45)'};
  font-weight: ${p => p.rightEnabled ? '700' : 'normal'}
`;

export const moveHighlightToLeft = keyframes`
  0% {
    right: 2%;
    left: 51%;
  }
  100% {
    left: 2%;
    right: 51%;
  }
`;
export const moveHighlightToRight = keyframes`
  100% {
    right: 2%;
    left: 51%;
  }
  0% {
    left: 2%;
    right: 51%;
  }
`;

export const Highlighter =  Styled.div<{leftEnabled: boolean, rightEnabled: boolean}>`
  width: 47%;
  height: 80%;
  display: block;
  position: absolute;
  z-index: 0;
  animation-duration: 500ms;
  animation-timing: linear;
  animation-name: ${p => p.leftEnabled ? moveHighlightToLeft : moveHighlightToRight};
  left: ${p => p.leftEnabled ? '2%' : '51%'};
  right: ${p => p.rightEnabled ? '2%' : '51%'};
  background: red;
  background: #C9ADA7;
  box-shadow: inset 0 0 20px 2px #9A8C98;
  border-radius: 2px;
`;
