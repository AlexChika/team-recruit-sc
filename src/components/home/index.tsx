import styled from "styled-components";
import { useState, useEffect } from "react";
import bg from "../../assets/bg.jpg";
import Modal from "../modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* <section>
        <h1>Hello </h1>
      </section> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  padding: 10px 6px;
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
`;
