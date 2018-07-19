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

const WeatherWrapper = Styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(255,255,255,0.1);
  min-height: 100vh;
  margin: 1rem;
  padding-top: 2.5rem;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);
  /* background: linear-gradient(45deg, rgba(34,34,59,1) 0%, rgba(74,78,105,1) 59%, rgba(154,140,152,1) 100%); */
}
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
`;

const Credit = Styled.a`
  font-size: 1.25em;
  font-family: Montserrat, Arial, sans-serif;
  color: #fff;
  height: 50px;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export {
  HomePage,
  SearchBar,
  WeatherWrapper,
  ToggleWrapper,
  AutoSuggestWrapper,
  Credit
};
