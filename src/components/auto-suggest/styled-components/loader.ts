import Styled from 'styled-components';
import Image from '../assets/spinner-2.svg';

const Loader = Styled.div`
  background: url(${Image});
  width: 28px;
  height: 28px;
  background-repeat: norepeat;
  background-position: 50% 50%;
  background-size: contain;
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
`

export {
  Loader,
};
