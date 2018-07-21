import * as React from 'react';
import Styled from 'styled-components';

const LoaderWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: -25%;
  margin-left: auto;
  margin-right: auto;
  background: rgba(34, 34, 59, 0.9);
  border-radius: 4px;
  z-index: 100;
  /* height: 100%; */
`;

const LoaderIcon = Styled.i`
  display: block;
  margin-right: 15px;
  &::after {
    animation: spinAround 600ms infinite linear;
    border: 3px solid #9A8C98;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1.5em;
    width: 1.5em;
    /* position: absolute; */
  }
`;

const LoaderText = Styled.span`
  font-size: 1em;
  white-space: nowrap;
  width: 400px;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top:30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderText><LoaderIcon /> Talking to the skies ...</LoaderText>
    </LoaderWrapper>
  );
};

export default Loader;
