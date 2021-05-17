import React from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle'

import styled from 'styled-components'

const FlexContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100%;
  min-height: 100vh;
  position: relative;
`


class App extends React.Component {

  render() {
    return (
      <FlexContainer>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </FlexContainer>
    );
  }
}

export default App;
