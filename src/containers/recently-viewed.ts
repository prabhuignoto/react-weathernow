import { connect } from 'react-redux';
import { compose, lifecycle, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import {Dispatch} from 'redux';
import { getHistory as GetHistory, getWeatherForecast as GetForecast } from "../actions/creators";
import RecentlyViewed from "../components/recently-viewed";
import { IHistory } from '../models/data/IHistory';
import { ILocation } from '../types';

interface IState {
  forecast: {
    history: IHistory[]
  }
}

interface IDispatchProps {
  getHistory: () => void;
  getForecast: (location: ILocation, name: string) => void;
}

interface IStateProps {
  items: IHistory[];
}

const mapStateToProps: (i: IState) => IStateProps = ({ forecast: { history} }: IState) => ({
  items: history,
});

const mapDispatchToProps: (d: Dispatch) => IDispatchProps = (dispatch: Dispatch) => ({
  getForecast: (location: ILocation, name: string) => dispatch(GetForecast(name, location)),
  getHistory: () => dispatch(GetHistory())
});

interface ILocalState {
  showList: boolean;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  toggleList: StateHandler<T>;
  onSelect: StateHandler<T>;
}

const initialState = ({ showList = false }: ILocalState) => ({
  showList,
});

const stateHandlers = {
  onSelect: (state:ILocalState, { getForecast }: IDispatchProps) => (location: ILocation, name: string) => {
    getForecast(location, name);
    return {};
  },
  toggleList: ({showList}: {showList: boolean}) => () => ({
    showList: !showList
  })
}

export default compose(
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps),
  lifecycle<IDispatchProps, IState>({
    componentDidMount() {
      this.props.getHistory();
    }
  }),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers)
)(RecentlyViewed);
