import React from 'react';
import Body from './components/Body';
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


function App() {
  return (
    <FlexContainer>
      <GlobalStyle/>
      <Header />
      <Body/>
      <Footer/>
    </FlexContainer>
  );
}

export default App;
