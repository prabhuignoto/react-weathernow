import Styled from 'styled-components';

const HomePage = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background: #4A4E69;
  align-items: center;
  justify-content: center;
`;

const SearchBar = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  height: 150px;
  margin-bottom: auto;
  margin-right: auto;
  /* border: 1px solid red; */
`;

const DailyWeatherWrapper = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 1080px;
  margin: 1rem;
`;

const ToggleWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 30%; */
`;

const AutoSuggestWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50%; */
`

export {
  HomePage,
  SearchBar,
  DailyWeatherWrapper,
  ToggleWrapper,
  AutoSuggestWrapper,
};
