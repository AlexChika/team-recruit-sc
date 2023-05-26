import styled from "styled-components";
import CreditCard from "./CreditCard";
import { SiApple } from "react-icons/si";
import { MdOutlineReceiptLong } from "react-icons/md";

const OrderSummaryCard = () => {
  return (
    <Wrapper>
      <div className="creditcard__wrapper">
        <CreditCard />
      </div>

      <div className="order__wrapper">
        {/* order summarry  */}
        <div className="order__summary">
          <div className="detail">
            <h3>Company</h3>
            <p>
              <SiApple /> &nbsp; Apple
            </p>
          </div>

          <div className="detail">
            <h3>Order Number</h3>
            <p>123456</p>
          </div>

          <div className="detail">
            <h3>Product</h3>
            <p>MacBook Air</p>
          </div>

          <div className="detail">
            <h3>VAT (20%)</h3>
            <p>$100</p>
          </div>
        </div>

        {/* Order total */}
        <div className="order__total">
          <div>
            <h3>You have to pay</h3>
            <h2>
              549 <span>USD</span>
            </h2>
          </div>

          <span className="receipt__icon fcenter">
            <MdOutlineReceiptLong />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderSummaryCard;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #cce6e623;
  border-radius: inherit;

  /* start of General styled */
  h3 {
    color: var(--gray-color);
    font-weight: 500;
    font-size: 13px;
  }

  p {
    display: flex;
    align-items: center;
    color: var(--black-color);
    font-size: clamp(1.3rem, 3.5vw, 1.5rem);
    font-weight: 700;
  }
  /*end of  General styled */

  .order__wrapper {
    width: 100%;
  }

  .creditcard__wrapper {
    width: 100%;
  }

  .order__summary {
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 2px dotted var(--gray-color);
    position: relative;

    .detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
  }

  .order__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    h2 {
      color: var(--black-color);
      font-size: clamp(1.7rem, 3.5vw, 2rem);
      font-weight: 900;
      padding-top: 5px;

      span {
        color: var(--gray-color);
      }
    }
  }

  .receipt__icon {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  @media screen and (min-width: 768px) {
    display: block;
    padding: 0px 20px;
    height: calc(100% - 60px);
    margin-top: 70px;

    .order__summary {
      padding-top: calc(250px - 60px);
    }

    .order__summary:before,
    .order__summary:after {
      content: "";
      position: absolute;
      width: 50px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
    }

    .order__summary:before {
      right: -50px;
      bottom: -20px;
    }

    .order__summary:after {
      left: -50px;
      bottom: -20px;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 0px 25px;
  }
`;
