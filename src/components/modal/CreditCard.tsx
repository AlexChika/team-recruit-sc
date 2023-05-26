import React from "react";
import styled from "styled-components";

const CreditCard = () => {
  return (
    <Wrapper>
      <h1>Hello Star</h1>
    </Wrapper>
  );
};

export default CreditCard;
const Wrapper = styled.div`
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  filter: drop-shadow(0px 1px 5px whitesmoke);

  @media screen and (min-width: 768px) {
    width: calc(100% - 50px);
  }

  @media screen and (min-width: 1000px) {
    width: calc(100% - 60px);
  }
`;
