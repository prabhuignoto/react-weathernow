import * as React from 'react';
import { Fragment } from "react";
import { IRecentItem, IRecentlyViewed} from '../../models/view/IRecentlyViewed'
import { ILocation } from '../../types';
import {Icon, Label, List, ListItemWrapper, Wrapper} from './styles';

const onSelectHandler = function _onSelectHandler(onSelect:(location:ILocation, name: string) => void, location: ILocation, name: string) {
  return function oSelectHandler(ev: React.MouseEvent<HTMLLIElement>) {
    onSelect(location, name);
  }
};

const handler = function _handler(show: () => void) {
  return function oToggleHandler(ev: React.MouseEvent<HTMLDivElement>) {
    const target: HTMLElement = ev.target as HTMLElement;
    const listDOM: any = document.querySelector('.recently-viewed-list');

    if(listDOM) {
      if(!target.classList.contains('recently-viewed-list') && !listDOM.contains(target)) {
        show();
      }
    } else {
      show();
    }
    
  }
}

const ListItem: React.SFC<IRecentItem> = ({name, location, onSelect}) => (
  <ListItemWrapper key={name} onClick={onSelectHandler(onSelect, location, name)} role="button">
    <span>{name}</span>
  </ListItemWrapper>
)

const RecentlyViewed: React.SFC<IRecentlyViewed> = ({ items, onSelect, showMenu, hideMenu, showList, onRef }) => {
  return (
    <Fragment>
      <Wrapper
        onClick={handler(showMenu)}
        className={`${items.length < 1 ? 'disabled' : ''}`}>
        <Icon />
        <Label>Recently Viewed</Label>
        {/* <CaretIcon className={showList ? 'up' : ''}/> */}
        <div 
          ref={onRef}
          tabIndex={0}
          onBlur={hideMenu}>
          {showList ? <List className="recently-viewed-list">
              {items.map(m => <ListItem {...m} key={m.name} onSelect={onSelect} />)}
            </List> : null}  
        </div>
      </Wrapper>
    </Fragment>
  )
}

export default RecentlyViewed;
