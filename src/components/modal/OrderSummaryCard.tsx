import styled from "styled-components";
import CreditCard from "./CreditCard";

const OrderSummaryCard = () => {
  return (
    <Wrapper>
      <CreditCard />

      {/* summarry detaills */}
      <div className="order__summary">
        <h1>see ssee see see see see see see see</h1>
      </div>
    </Wrapper>
  );
};

export default OrderSummaryCard;

const Wrapper = styled.div`
  position: relative;
  height: calc(100% - 60px);
  margin-top: 70px;
  background-color: #cce6e623;
  border-radius: inherit;

  .order__summary {
    padding-top: calc(250px - 60px);
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 20px;
  }

  @media screen and (min-width: 1000px) {
    padding: 0px 25px;
  }
`;
