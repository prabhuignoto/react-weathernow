import { MouseEventHandler} from 'react'
import { connect } from "react-redux";
import { compose, StateHandler, StateHandlerMap, withStateHandlers } from "recompose";
import { Dispatch } from "../../node_modules/redux";
import { clearRecentlyViewedItems, setCurrentLocationAsDefault } from "../actions/creators";
import Settings from '../components/settings';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearRecentlyViewed: () => dispatch(clearRecentlyViewedItems()),
  setCurLocationAsDefault: () => dispatch(setCurrentLocationAsDefault()),
});

interface ILocalState {
  show: boolean;
}

interface IDispatchProps {
  clearRecentlyViewed: () => void;
  setCurLocationAsDefault: () => void;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  showMenu: StateHandler<T>;
  hideMenu: StateHandler<T>;
  setAsDefault: StateHandler<T>;
  clearRecentItems: StateHandler<T>;
  onRef: StateHandler<T>;
}

const initialState = ({show = false}: ILocalState) => ({
  show
});

let domNode: HTMLDivElement;

const stateHandlers = {
  clearRecentItems: (state: ILocalState, {clearRecentlyViewed}: IDispatchProps) => () => {
    clearRecentlyViewed();
    return {show: false};
  },
  hideMenu: ({show}: ILocalState) => (ev: MouseEventHandler<HTMLDivElement>) => {
    return {show: false}
  },
  onRef: () => (element: HTMLDivElement) => {
    domNode = element;
    return {};
  },
  setAsDefault: (state: ILocalState, {setCurLocationAsDefault}: IDispatchProps) => () => {
    setCurLocationAsDefault();
    return {show: false};
  },
  showMenu: ({show}: ILocalState) => (ev: MouseEventHandler<HTMLDivElement>) => {
    domNode.focus();
    return {show: true}
  },
}

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers)
)(Settings);