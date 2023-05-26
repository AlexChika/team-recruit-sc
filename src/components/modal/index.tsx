import styled from "styled-components";
import ModalHeader from "./ModalHeader";
import CardNumber from "./CardNumber";
import ExpiryDate from "./ExpiryDate";
import CvvNumber from "./CvvNumber";
import Password from "./Password";
import PayNowButton from "./PayNowButton";
import OrderSummaryCard from "./OrderSummaryCard";

const Modal = () => {
  return (
    <Wrapper>
      {/* Card details form */}
      <section>
        <ModalHeader />
        <CardNumber />
        <CvvNumber />
        <ExpiryDate />
        <Password />
        <PayNowButton />
      </section>

      {/* purchase overview card */}
      <section>
        <OrderSummaryCard />
      </section>
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

  section:nth-of-type(2) {
    border-radius: 10px;
  }

  @media screen and (min-width: 400px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 500px) {
    padding: 50px;
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    flex-direction: row;
    gap: 30px;

    section:nth-of-type(1) {
      width: 57%;
    }

    section:nth-of-type(2) {
      width: 43%;
    }
  }

  @media screen and (min-width: 1000px) {
    section:nth-of-type(1) {
      width: 65%;
    }

    section:nth-of-type(2) {
      width: 35%;
    }
  }
`;
