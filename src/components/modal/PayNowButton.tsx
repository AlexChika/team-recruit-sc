import styled from "styled-components";
import { Store } from ".";
import { createCardAction } from "./actions";

const PayNowButton = () => {
  const { dispatch, cardNumber, expiryMonth, expiryYear } = Store();

  function handleSubmit() {
    if (!cardNumber || !expiryMonth || !expiryYear) return;

    createCardAction(dispatch);
  }

  return <Wrapper onClick={handleSubmit}>Pay Now</Wrapper>;
};

export default PayNowButton;

const Wrapper = styled.button`
  margin-top: 30px;
  border-radius: 10px;
  height: 45px;
  width: 100%;
  background-color: var(--blue-color);
  text-align: center;
  color: white;
  font-size: clamp(1.3rem, 3.5vw, 1.5rem);
  font-weight: 700;
`;
