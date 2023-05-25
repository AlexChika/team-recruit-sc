import styled from "styled-components";
import ModalHeader from "./ModalHeader";

const Modal = () => {
  return (
    <Wrapper>
      <div>
        <ModalHeader />
      </div>

      <div></div>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;

  @media screen and (min-width: 1200px) {
    padding: 10px 30px;
  }
`;
