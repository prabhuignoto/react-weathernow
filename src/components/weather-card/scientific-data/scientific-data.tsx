import * as React from 'react';
import { IWeatherDetails } from '../../../models/view/IWeatherDetails';
import CrossOutSVG from '../assets/close.svg';
import {Cell, CloseButton, CloseButtonWrapper, List, ListItem, Wrapper} from './styles';

const ScientificData: React.SFC<IWeatherDetails> = ({details, onClose, open}) => {
  return (
    <Wrapper show={open}>
      <CloseButtonWrapper>
        <CloseButton onClick={onClose}><CrossOutSVG /></CloseButton>
      </CloseButtonWrapper>
      <List pose={open ? "open" : "close"} initialPose="close">
        {
          details!.map(x => 
            <ListItem key={x.name}>
              <Cell type="name">{x.displayName}</Cell>
              <Cell type="value">{x.value}</Cell>
            </ListItem>
          )
        }
      </List>
    </Wrapper>
  )
}

export default ScientificData;