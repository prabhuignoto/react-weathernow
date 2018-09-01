import { compose, StateHandler, StateHandlerMap, withStateHandlers} from 'recompose';
import WeatherCard from '../components/weather-card';

interface IStateHandlers<T> extends StateHandlerMap<T> {
  showSciData: StateHandler<T>;
  hideSciData: StateHandler<T>;
}

interface ILocalState {
  sciDataOpen: boolean;  
}

const initialState =({sciDataOpen = false}) => ({
  sciDataOpen,
});

const stateHandlers = {
  hideSciData: ({sciDataOpen}: ILocalState, props: any) => () => ({
    sciDataOpen: false
  }),
  showSciData: ({sciDataOpen} : ILocalState, props: any) => () => ({
    sciDataOpen: true,
  }),
}

export default compose(
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
)(WeatherCard)