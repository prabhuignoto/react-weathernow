import 'bulma/css/bulma.css';
import * as React from 'react';
import Styled from 'styled-components';
import './App.css';
import Home from './containers/homepage';

const AppWrapper = Styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
`;

class App extends React.Component {
  public render() {
    return (
      <AppWrapper className="container">
        <Home />
      </AppWrapper>
    );
  }
}

export default App;
