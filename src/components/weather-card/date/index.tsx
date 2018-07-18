import * as React from 'react';
import { IMomentDate } from '../../../models/data/IMomentDate';
import DateWrapper from './styled-components';

const date: React.SFC<IMomentDate> = ( { formattedDate }) => {
  return (
    <DateWrapper>
      {formattedDate}
    </DateWrapper>
  )
};

export default date;