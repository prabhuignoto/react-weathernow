import * as React from 'react';
import Styled from 'styled-components';

const LoaderWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  height: 110%; */
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(34, 34, 59, 0.9);
  border-radius: 4px;
  z-index: 100;
  height: 110%;
`;

const LoaderIcon = Styled.i`
  display: block;
  margin-right: 25px;
  &::after {
    animation: spinAround 600ms infinite linear;
    border: 3px solid #9A8C98;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 2em;
    width: 2em;
    /* position: absolute; */
  }
`;

const LoaderText = Styled.span`
  font-size: 1.5em;
  white-space: nowrap;
  width: 400px;
  color: #fff;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderIcon />
      <LoaderText>Talking to the skies ...</LoaderText>
    </LoaderWrapper>
  );
};

export default Loader;
