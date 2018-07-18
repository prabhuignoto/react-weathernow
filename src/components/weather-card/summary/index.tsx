import * as React from 'react'
import { ISummary } from "../../imports";
import SummaryWrapper from './styled-components';

const Summary: React.SFC<ISummary> = ({ summary }) => {
  return (
    <SummaryWrapper>
      {summary}
    </SummaryWrapper>
  )
}

export default Summary;
