import "bulma/css/bulma.css";
import * as React from "react";
import WeatherCard from "../../containers/weather-card";
import { IDailyWeather } from "../../models/view/IDailyWeather";
import DailyWeatherWrapper from "./styled-components/daily-weather";

const DailyWeather: React.SFC<IDailyWeather> = ({
  data,
  isForecastLoading
}) => {
  return (
    <div className="container">
      <DailyWeatherWrapper
        className="columns is-centered is-multiline"
        style={{ width: "100%" }}
      >
          {data.map(item => (
            <WeatherCard {...item} key={item.date.unixTimeStamp} />
          ))}
      </DailyWeatherWrapper>
    </div>
  );
};

export default DailyWeather;
