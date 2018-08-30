import * as React from 'react';
import {Fragment} from 'react';
import { IGeoLocation } from '../../models/view/IGeoLocation';
import {
  Anchor,
  City,
  Icon,
  // Location,
  Text,
  Wrapper,
} from './styles';

import IconMarker from './map-marker-alt.svg';
const GeoLocation: React.SFC<IGeoLocation> = ({city, lat, lng}) => {
  return (
    <Wrapper>
      {lat ? <Fragment>
        <Anchor href={`https://www.openstreetmap.org/#map=10/${lat}/${lng}`} target="_new">
          <Icon>
            <IconMarker />
          </Icon>
          <Text>
            <City>{city}</City>
            {/* <Location>{lat}, {lng}</Location> */}
          </Text>
        </Anchor>
      </Fragment> : null}
    </Wrapper>
  )
}

export default GeoLocation
