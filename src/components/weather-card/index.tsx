import 'bulma/css/bulma.css';
import * as React from 'react';
import { IWeatherCard } from '../imports';
import Date from './date';
import ScientificData from './scientific-data/scientific-data';
import { Container, ShowSciDetails,ShowSciDetailsWrapper, Wrapper } from './styles';
import Summary from './summary';
import Temperature from './temperature';
import WeatherDetails from "./weather-details";
import WeatherIcon from './weather-icon';

const WeatherCard: React.SFC<IWeatherCard> = ({
  temperatureHigh,
  temperatureLow,
  date,
  hideSciData,
  icon,
  summary,
  weatherDetails,
  scientificData,
  showSciData,
  sciDataOpen,
  temperature
}) => (
  <Wrapper className="column is-four-fifths-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen" pose="enter" initialPose="exit">
    <Container>
      <Date {...date}/>
      <WeatherIcon  icon={icon} />
      <Summary summary={summary}/>
      <Temperature highTemp={temperatureHigh} lowTemp={temperatureLow} temp={temperature}/>
      <WeatherDetails details={weatherDetails} />
      <ShowSciDetailsWrapper>
        <ShowSciDetails onClick={showSciData}>More...</ShowSciDetails>
      </ShowSciDetailsWrapper>
      <ScientificData details={scientificData}  onClose={hideSciData} open={sciDataOpen}/>
    </Container>
  </Wrapper>
);

export default WeatherCard; 