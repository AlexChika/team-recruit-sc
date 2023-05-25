import styled from "styled-components";
import { useState, useEffect } from "react";
import bg from "./assets/bg.jpg";

// screens
import ModalLargeScreen from "./screens/ModalLargeScreen"; //large screen modal view

//NOTICE => Dear Reviewer, The mutiple screen is for aesthetics and Quick demonstration of responsiveness only, and in no way would be implemented in a live project.

function App() {
  return (
    <Wrapper>
      <ModalLargeScreen />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  padding: 10px;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    background-size: contain;
    background-position: right;
  }
`;
