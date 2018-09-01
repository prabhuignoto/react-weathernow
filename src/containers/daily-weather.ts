import * as Moment from "moment";
import "moment-timezone";
import { connect } from "react-redux";
import { compose } from "recompose";
import DailyWeather from "../components/daily-weather";
import { IWeatherCard, IWeatherDetail } from "../components/imports";
import { IDaily } from "../models/data/IDaily";
import { IMomentDate } from "../models/data/IMomentDate";

interface IDailyForecast {
  forecast: {
    daily: IDaily;
    timezone: string;
    loadingForecast: boolean;
  };
}

const mapStateToProps = ({
  forecast: { daily, timezone, loadingForecast }
}: IDailyForecast) => {
  const getDate: (milliseconds: number) => IMomentDate = milliseconds => {
    const momentInstance = Moment.unix(milliseconds).tz(timezone);
    return {
      day: momentInstance.day(),
      formattedDate: momentInstance.format("dddd, MMMM D"),
      month: momentInstance.month(),
      unixTimeStamp: milliseconds,
      year: momentInstance.year()
    };
  };

  const weatherCardData: IWeatherCard[] = daily.data.map<IWeatherCard>(
    item => ({
      date: getDate(item.time),
      icon: item.icon,
      scientificData: [
        ["Sunrise", "sunriseTime"],
        ["Sunset", "sunsetTime"],
        ["Moon Phase", "moonPhase"],
        ["UV Index","uvIndex"],
        ["Ozone", "ozone"],
        ["Cloud Cover", "cloudCover"],
        ["Wind Speed", "windSpeed"],
        ["Wind Gust", "windGust"]
      ].map<IWeatherDetail>(
        (x: string[]): IWeatherDetail => ({
          displayName: x[0],
          name: x[1],
          value: x[1] === 'sunriseTime' || x[1] === 'sunsetTime' ? 
            Moment.unix(item[x[1]]).tz(timezone).format("hh:mm A") : item[x[1]]
        })
      ),
      summary: item.summary,
      temperatureHigh: item.temperatureHigh,
      temperatureLow: item.temperatureLow,
      weatherDetails: ["pressure", "visibility", "ozone", "humidity"].map<
        IWeatherDetail
      >(
        (x: string): IWeatherDetail => ({
          displayName: x,
          name: x,
          value: item[x]
        })
      )
    })
  );
  return {
    data: weatherCardData,
    isForecastLoading: loadingForecast,
  };
};

export default compose(
  connect(mapStateToProps,null),
)(DailyWeather);
