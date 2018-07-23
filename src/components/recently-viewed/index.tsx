import * as React from 'react';
import { IRecentItem, IRecentlyViewed} from '../../models/view/IRecentlyViewed'
import { ILocation } from '../../types';
import {Icon, Label, List, ListItemWrapper, Wrapper} from './styles';

const onSelectHandler = function _onSelectHandler(onSelect:(location:ILocation, name: string) => void, location: ILocation, name: string) {
  return function oSelectHandler(ev: React.MouseEvent<HTMLLIElement>) {
    onSelect(location, name);
  }
};

const onToggleHandler = function _onToggleHandler(toggleList: () => void) {
  return function oToggleHandler(ev: React.MouseEvent<HTMLDivElement>) {
    toggleList();
  }
}

const ListItem: React.SFC<IRecentItem> = ({name, location, onSelect}) => (
  <ListItemWrapper key={name} onClick={onSelectHandler(onSelect, location, name)} role="button">
    <span>{name}</span>
  </ListItemWrapper>
)

const RecentlyViewed: React.SFC<IRecentlyViewed> = ({ items, onSelect, toggleList, showList }) => {
  return (
    <Wrapper onClick={onToggleHandler(toggleList)} className={`${items.length < 1 ? 'disabled' : ''}`}>
      <Icon />
      <Label>Recently Viewed</Label>
     {showList ? <List>
        {items.map(m => <ListItem {...m} key={m.name} onSelect={onSelect} />)}
      </List> : null}  
    </Wrapper>
  )
}

export default RecentlyViewed;
