import React from "react"
import Nav from "./components/Nav/Nav"
import Main from "./components/Main"
import Fotter from "./components/Footer/Footer"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <Nav />
      <Main />
      <Fotter />
    </Container>
  );
}

export default App
