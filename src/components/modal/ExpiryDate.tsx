import styled from "styled-components";

const ExpiryDate = () => {
  return (
    <Wrapper>
      <div className="expirydate__header">
        <h2>Expiry Date</h2>
        <p>Enter the expiration date of the card</p>
      </div>

      <div className="expirydate__box">
        <div className="expirydate__month">
          <input type="text" inputMode="numeric" />
        </div>

        <small>/</small>

        <div className="expirydate__year">
          <input type="text" inputMode="numeric" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ExpiryDate;

const Wrapper = styled.div`
  margin-top: 20px;
  color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .expirydate__header {
    h2 {
      font-size: clamp(1.3rem, 3.5vw, 1.5rem);
      font-weight: 700;
    }

    p {
      color: var(--gray-color);
      font-weight: 500;
      font-size: 13px;
      margin-top: 7px;
    }
  }

  .expirydate__box {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 120px;
    max-width: 260px;

    /* min-width: 120px; */
    flex: 1;
    gap: 10px;

    .expirydate__year,
    .expirydate__month {
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 100%;

      /* responsible for collecting values */
      input {
        font-size: clamp(1.6rem, 3.5vw, 2rem);
        font-weight: 700;
        text-align: center;
        width: 100%;
        height: 100%;
        flex: 1;
        border-radius: inherit;
      }
    }

    small {
      font-weight: 800;
    }
  }

  @media screen and (min-width: 360px) {
    .expirydate__box {
      /* The 3 grid menu icon */
      .menu__icon {
        font-size: 2rem;
      }
    }
  }

  @media screen and (min-width: 400px) {
    gap: 15px;
  }

  @media screen and (min-width: 600px) {
    gap: 25px;

    .expirydate__box {
      gap: 20px;

      /* The 3 grid menu icon */
      .menu__icon {
        font-size: 2.5rem;
      }
    }
  }
`;
