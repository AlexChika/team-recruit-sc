import styled from "styled-components";
import { BsGrid3X3GapFill } from "react-icons/bs";

const CvvNumber = () => {
  return (
    <Wrapper>
      <div className="cvv__header">
        <h2>Cvv Number</h2>
        <p>Enter the 3 or 4 digit number on the card</p>
      </div>

      <div className="cvv__box">
        <input type="text" inputMode="numeric" />

        <span className="menu__icon fcenter ">
          <BsGrid3X3GapFill />
        </span>
      </div>
    </Wrapper>
  );
};

export default CvvNumber;

const Wrapper = styled.div`
  margin-top: 20px;
  color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .cvv__header {
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

  .cvv__box {
    padding: 0px 10px 0px 0px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-width: 100px;

    /* responsible for collecting values */
    input {
      font-size: clamp(1.6rem, 3.5vw, 2rem);
      font-weight: 700;
      text-align: center;
      width: 40px;
      flex: 1;
    }

    /* The 3 grid menu icon */
    .menu__icon {
      color: rgba(0, 0, 0, 0.3);
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 360px) {
    .cvv__box {
      min-width: 120px;

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
    .cvv__box {
      /* height: 50px; */

      /* The 3 grid menu icon */
      .menu__icon {
        font-size: 2.5rem;
      }
    }
  }
`;