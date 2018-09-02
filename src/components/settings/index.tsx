import *  as React from 'react';
import SettingsSVG from './assets/cog.svg';
import {
  IconWrapper,
  Label,
  List,
  ListItem,
  ListWrapper,
  Wrapper
} from './styles';

interface ISettings {
  clearRecentItems: () => void;
  setAsDefault: () => void;
  showMenu: () => void;
  hideMenu: () => void;
  show: boolean;
  onRef: () => void;
}

const onSelectHandler = function _onSelectHandler(onSelect:() => void ) {
  return function oSelectHandler(ev: React.MouseEvent<HTMLLIElement>) {
    onSelect();
  }
};

interface IListItemWrapper {
  onSelect: () => void, name: string, label: string
}
const ListItemWrapper: React.SFC<IListItemWrapper> = ({onSelect, name, label}) => (
  <ListItem key={name} onClick={onSelectHandler(onSelect)} role="button">
    <span>{label}</span>
  </ListItem>
)


function handler(show: () => void) {
  return function oHandler(ev: React.MouseEvent<HTMLDivElement>) {
    const target: HTMLElement = ev.target as HTMLElement;
    const listDOM: any = document.querySelector('.settings-list');

    if(listDOM) {
      if(!target.classList.contains('settings-list') && !listDOM.contains(target)) {
        show();
      }
    } else {
      show();
    }
  }
}

const Settings: React.SFC<ISettings> = ({ clearRecentItems, setAsDefault, showMenu, show, onRef, hideMenu}) => {
  return (
    <Wrapper onClick={handler(showMenu)}>
      <IconWrapper>
        <SettingsSVG />
      </IconWrapper>
      <Label>Settings</Label>
      <ListWrapper tabIndex={0} onBlur={hideMenu} innerRef={onRef}>
        {show ? <List className="settings-list" pose="open" initialPose="close">
          <ListItemWrapper onSelect={clearRecentItems} name="crItems" label="Clear recent items"/>
          <ListItemWrapper onSelect={setAsDefault} name="sDefault" label="Set as Default"/>
        </List> : null}
      </ListWrapper>                                                                
    </Wrapper>
  )
}

export default Settings
