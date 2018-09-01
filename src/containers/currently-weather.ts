import * as _ from 'lodash';
import * as Moment from 'moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import DailyWeather from '../components/daily-weather';
import { IWeatherCard, IWeatherDetail } from '../components/imports';
import { Mode } from '../enums/mode';
import {ICurrently} from '../models/data/ICurrently';
import { IMomentDate } from '../models/data/IMomentDate';

interface ICurrentlyForecast {
  forecast: {
    currently: ICurrently,
    loadingForecast: boolean,
    mode: Mode,
    timezone: string,
  }
}

const mapStateToProps = ({forecast: {currently: cur, timezone, loadingForecast}}: ICurrentlyForecast) => {
  const getDate: (milliseconds: number) => IMomentDate = (milliseconds) => {
    const momentInstance = Moment.unix(milliseconds).tz(timezone);
    return {
      day: momentInstance.day(),
      formattedDate: momentInstance.format('dddd, MMMM Do YYYY'),
      month: momentInstance.month(),
      unixTimeStamp: milliseconds,
      year: momentInstance.year(),
    }
  };
  let weatherCardData: IWeatherCard[] = [];

  if(!_.isEmpty(cur)) {
   weatherCardData= [{
    date: getDate(cur.time),
    icon: cur.icon,
    scientificData: [
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
        Moment.unix(cur[x[1]]).tz(timezone).format("hh:mm A") : cur[x[1]]
      })
    ),
    summary: cur.summary,  
    temperature: cur.temperature,
    temperatureHigh: cur.temperatureHigh,
    temperatureLow: cur.temperatureLow,
    weatherDetails: [
      'pressure',
      'visibility',
      'ozone',
      'humidity',
    ].map<IWeatherDetail>((x: string):IWeatherDetail => ({
        displayName: x,
        name: x,
        value: cur[x],
      }))
    }];
  }

  return {
    data: weatherCardData,
    isForecastLoading: loadingForecast
  };
}

export default connect(mapStateToProps, null)(DailyWeather);
