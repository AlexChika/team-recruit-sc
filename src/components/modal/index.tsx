import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import CardNumber from "./CardNumber";
import ExpiryDate from "./ExpiryDate";
import CvvNumber from "./CvvNumber";
import Password from "./Password";
import PayNowButton from "./PayNowButton";

const Modal = () => {
  return (
    <Wrapper>
      <section>
        <ModalHeader />
        <CardNumber />
        <CvvNumber />
        <ExpiryDate />
        <Password />
        <PayNowButton />
      </section>

      <section></section>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 900px;
  padding: 20px 10px;
  margin: 0 auto;

  section {
    width: 100%;
  }

  @media screen and (min-width: 500px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;

    section:nth-of-type(1) {
      width: 65%;
    }

    section:nth-of-type(2) {
      width: 35%;
      border: 2px solid gray;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 30px;
  }
`;
