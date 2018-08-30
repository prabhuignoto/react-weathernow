import Styled from 'styled-components';

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
  padding: 0.5rem 0.25rem;
  /* height: 40px; */
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
  height: 1.5rem;
  width: 1.5rem;
  flex: 1;
  position: relative;
  padding: 0.25rem;
  margin: 0.25rem;
`

export {
  DetailWrapper,
  DetailsWrapper,
  DetailValue,
  DetailName,
  Icon
}