import Styled from 'styled-components';
import Humidity from '../assets/humidity.svg';
import OzoneImg from '../assets/ozone.svg';
import PressureImg from '../assets/pressure.svg';
import VisibilityImg from '../assets/visibility.svg';

const DetailsWrapper = Styled.div`
  border: 1px solid transparent;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: auto;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: rgba(34, 34, 59, 0.3);
`;

const DetailWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 13px 5px;
  height: 40px;
  width: 100%;
  color: #fff;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 0.8em;
  font-weight: 500;
  background: rgba(74, 78, 105, 0.25)
`;

const DetailName = Styled.div`
  text-align: center;
  flex: 2;
  text-transform: capitalize;
`

const DetailValue = Styled.div`
  display: block;
  text-align: center;
  flex: 2;
`;

const Icon = Styled.i`
  display: block;
  height: 75%;
  flex: 1;
  &.pressure {
    background: url(${PressureImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }
  &.visibility {
    background: url(${VisibilityImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }
  &.ozone {
    background: url(${OzoneImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }
  &.humidity {
    background: url(${Humidity});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
  }

`

export {
  DetailWrapper,
  DetailsWrapper,
  DetailValue,
  DetailName,
  Icon
}