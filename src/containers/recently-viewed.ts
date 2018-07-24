import { connect } from 'react-redux';
import { compose, lifecycle, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import {Dispatch} from 'redux';
import { getHistory as GetHistory, getWeatherForecast as GetForecast, selectCitySuggestion } from "../actions/creators";
import RecentlyViewed from "../components/recently-viewed";
import { IHistory } from '../models/data/IHistory';
import { IGeoLocation } from '../models/view/IGeoLocation';
import { ILocation } from '../types';

interface IState {
  forecast: {
    history: IHistory[]
  }
}

interface IDispatchProps {
  getHistory: () => void;
  getForecast: (location: ILocation, name: string) => void;
  selectCity: (location: IGeoLocation) => void;
}

interface IStateProps {
  items: IHistory[];
}

const mapStateToProps: (i: IState) => IStateProps = ({ forecast: { history} }: IState) => ({
  items: history,
});

const mapDispatchToProps: (d: Dispatch) => IDispatchProps = (dispatch: Dispatch) => ({
  getForecast: (location: ILocation, name: string) => dispatch(GetForecast(name, location)),
  getHistory: () => dispatch(GetHistory()),
  selectCity: (location: IGeoLocation) => dispatch(selectCitySuggestion(location))
});

interface ILocalState {
  showList: boolean;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  showMenu: StateHandler<T>;
  hideMenu: StateHandler<T>;
  onSelect: StateHandler<T>;
  onRef: StateHandler<T>;
}

const initialState = ({ showList = false }: ILocalState) => ({
  showList,
});

let domNode: HTMLDivElement;

const stateHandlers = {
  hideMenu: ({showList}: {showList: boolean}) => () => {
    return {
      showList: false
    }
  },
  onRef: () => (element: HTMLDivElement) => {
    domNode = element;
    return {};
  },
  onSelect: (state:ILocalState, { getForecast, selectCity }: IDispatchProps) => (location: ILocation, name: string) => {
    selectCity({
      city: name,
      lat: location.lat,
      lng: location.lng
    })
    getForecast(location, name);
    return {
      showList: false
    };
  },
  showMenu: ({showList}: {showList: boolean}) => () => {
    domNode.focus();
    return {
      showList: true
    }
  }
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
