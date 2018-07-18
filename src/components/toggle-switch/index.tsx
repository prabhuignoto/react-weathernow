import * as React from 'react';
import {
 Highlighter,
 LeftSwitch,
 RightSwitch,
 Wrapper,
} from './styles';


interface IToggle {
  leftSwitchLabel: string;
  rightSwitchLabel: string;
  leftEnabled: boolean;
  rightEnabled: boolean;
  onToggle: (ev: React.MouseEvent) => any;
}

const ToggleButton:React.SFC<IToggle> = ({
  leftSwitchLabel,
  rightSwitchLabel,
  leftEnabled,
  rightEnabled,
  onToggle
  }) => {
  return (
   <Wrapper onClick={onToggle}>
    <Highlighter leftEnabled={leftEnabled} rightEnabled={rightEnabled} />
    <LeftSwitch leftEnabled={leftEnabled}>{leftSwitchLabel}</LeftSwitch>
    <RightSwitch rightEnabled={rightEnabled}>{rightSwitchLabel}</RightSwitch>
   </Wrapper>
  )
}

export default ToggleButton
