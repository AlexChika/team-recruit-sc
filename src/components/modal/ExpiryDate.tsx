import styled from "styled-components";

const ExpiryDate = () => {
  return (
    <Wrapper>
      <div className="expirydate__header">
        <h2>Expiry Date</h2>
        <p>Enter the expiration date f the card</p>
      </div>
      <div className="expirydate__box"></div>
    </Wrapper>
  );
};

export default ExpiryDate;

const Wrapper = styled.div``;
