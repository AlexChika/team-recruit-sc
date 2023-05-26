import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

const CardNumber = () => {
  return (
    <Wrapper>
      <div className="cardnumber__header">
        <div>
          <h2>Card Number</h2>
          <div className="cardnumber__editbtn">
            <FaPencilAlt />
            <span>Edit</span>
          </div>
        </div>

        <p>Enter the 16-digit card number on the card</p>
      </div>

      <div className="cardnumber__box">
        <article>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <small>-</small>

          <div>
            <input type="text" inputMode="numeric" name="" id="" />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <small>-</small>

          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>

          <small>-</small>

          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </article>

        <span>O</span>
      </div>
    </Wrapper>
  );
};

export default CardNumber;

const Wrapper = styled.div`
  margin-top: 30px;
  color: var(--black-color);

  .cardnumber__header {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

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

    .cardnumber__editbtn {
      display: flex;
      align-items: center;
      gap: 7px;
      font-size: 14px;
      cursor: pointer;
      color: var(--blue-color);

      span {
        font-weight: 500;
        font-size: inherit;
      }
    }
  }

  .cardnumber__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    padding: 0px 10px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    article {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    div {
    }

    span {
      color: rgba(0, 0, 0, 0.3);
      font-weight: 600;
      font-size: 2rem;
    }

    small {
      font-size: 2rem;
      color: var(--gray-color);
    }
  }
`;
