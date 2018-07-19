import { connect } from "react-redux";
import HomePage from '../components/homepage/views/homepage';
import { Mode } from "../enums/mode";
import { ICurrently } from "../models/data/ICurrently";

interface IState {
  forecast: {
    currently: ICurrently,
    loadingForecast: boolean,
    mode: Mode,
    timezone: string,
  }
}

const mapStateToProps = ({ forecast: {mode, loadingForecast}}: IState) => ({
  isForecastLoading: loadingForecast,
  mode,
});

export default connect(mapStateToProps, null)(HomePage);