import Styled from 'styled-components';
import IconMarker from './compass.svg';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 4rem;
`;

const Icon = Styled.i`
  display: block;
  background: url(${IconMarker});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: auto;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

const Text = Styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, arial, sans-serif;
  margin-left: 10px;
  color: #F2E9E4;
`;

const City = Styled.div`
  font-size: 1.25rem;
  text-transform: capitalize;
  font-weight: 500;
`;

const Location = Styled.div`
  font-size: 1.25rem;
  margin-left: 10px;
`;

const Anchor = Styled.a`
  display: flex;
  border: 1px solid transparent;
  &:hover {
    border: 1px dotted #F2E9E4;
  }
`;

export {
  Icon,
  Wrapper,
  Text,
  City,
  Location,
  Anchor
}
