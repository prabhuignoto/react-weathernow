import { connect } from "react-redux";
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';
import { updateWeatherMode as UpdateWeatherMode } from '../actions/creators';
import ToggleSwitch from '../components/toggle-switch';
import { Mode } from '../enums/mode';


const initialState = ({ leftEnabled = true, rightEnabled = false, mode = Mode.daily_forecast }) => ({
  leftEnabled,
  mode,
  rightEnabled
});

interface IToggleState {
  leftEnabled: boolean;
  rightEnabled: boolean;
  mode: Mode;
}

interface IDispatchProps {
  updateWeatherMode: (mode: Mode) => void;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>;
}

const stateHandlers = {
  onToggle: ({ leftEnabled, rightEnabled }: IToggleState, { updateWeatherMode }: IDispatchProps) => () => {
    const mode = !leftEnabled ? Mode.daily_forecast : Mode.current_weather;
    updateWeatherMode(mode);
    return {
      leftEnabled: !leftEnabled,
      rightEnabled: !rightEnabled,
    };
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateWeatherMode: (mode: Mode) => dispatch(UpdateWeatherMode(mode))
})

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers<IToggleState, IStateHandlers<IToggleState>>(initialState, stateHandlers),
  defaultProps({
    leftSwitchLabel: 'Current Weather',
    rightSwitchLabel: 'Daily Forecast'
  })
)(ToggleSwitch);