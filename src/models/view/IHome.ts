import { Mode} from '../../enums/mode'

export default interface IHome {
  mode: Mode,
  isForecastLoading: boolean;
};