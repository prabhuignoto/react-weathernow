import { connect } from "react-redux";
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';
import { updateWeatherMode as UpdateWeatherMode } from '../actions/creators';
import ToggleSwitch from '../components/toggle-switch';
import { Mode } from '../enums/mode';


const initialState = ({ leftEnabled = false, rightEnabled = true, mode = Mode.daily_forecast }) => ({
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
    const [uLeftEnabled, uRightEnabled] = [!leftEnabled, !rightEnabled];
    const mode = uLeftEnabled ? Mode.current_weather : Mode.daily_forecast;
    updateWeatherMode(mode);
    return {
      leftEnabled: uLeftEnabled,
      rightEnabled: uRightEnabled,
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
    leftSwitchLabel: 'Current',
    rightSwitchLabel: 'Forecast'
  })
)(ToggleSwitch);