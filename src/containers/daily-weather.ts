import * as Moment from 'moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import DailyWeather from '../components/daily-weather';
import { IWeatherCard, IWeatherDetail } from '../components/imports';
import { IDaily } from '../models/data/IDaily';
import { IMomentDate } from '../models/data/IMomentDate';

interface IDailyForecast {
  dailyForecast: {
    daily: IDaily,
    timezone: string,
    loadingForecast: boolean;
  }
}

const mapStateToProps = ({dailyForecast: {daily, timezone, loadingForecast}}: IDailyForecast) => {
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

  const weatherCardData: IWeatherCard[] = daily.data.map<IWeatherCard>(item => ({
    date: getDate(item.time),
    icon: item.icon,
    summary: item.summary,  
    temperatureHigh: item.temperatureHigh,
    temperatureLow: item.temperatureLow,
    weatherDetails: ['pressure', 'visibility', 'ozone', 'humidity'].map<IWeatherDetail>(x => ({
      displayName: x,
      name: x,
      value: item[x],
    }))
  }));
  return {
    data: weatherCardData,
    isForecastLoading: loadingForecast
  };
};

export default connect(mapStateToProps, null)(DailyWeather);  