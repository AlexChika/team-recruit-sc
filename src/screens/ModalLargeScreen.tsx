import styled from "styled-components";
import Modal from "../components/Modal";

const ModalLargeScreen = () => {
  return (
    <Wrapper>
      <Modal />
    </Wrapper>
  );
};

export default ModalLargeScreen;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1000px;

  border: 2px solid red;
`;
