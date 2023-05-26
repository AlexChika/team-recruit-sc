import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

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
        <span className="logo__wrapper">
          <img src={require("../../assets/mastercardlogo.png")} alt="" />
        </span>

        {/* number / inputs wrapper */}
        <article>
          <div>
            <input
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name=""
              id=""
            />
          </div>

          <small>-</small>

          <div>
            <input
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name=""
              id=""
            />
          </div>

          <small>-</small>

          <div>
            <input
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name=""
              id=""
            />
          </div>

          <small>-</small>

          <div>
            <input
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name=""
              id=""
            />
          </div>
        </article>

        <span className="checkicon__wrapper fcenter">
          <BsFillPatchCheckFill />
        </span>
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
    padding: 0px 5px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    /* inputs / card number inputs wrapper */
    article {
      display: flex;
      align-items: center;
      gap: 3px;

      div {
        width: 45px;
      }

      input {
        width: 100%;
        /* pointer-events: none; */
      }

      input::placeholder,
      input {
        font-weight: 600;
        font-size: clamp(1.6rem, 3.5vw, 2rem);
        letter-spacing: 1px;
        padding: 0px 2px;
      }

      input::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }

      small {
        font-size: 2rem;
        font-weight: 800;
        color: var(--gray-color);
      }
    }

    /* master-card logo wrapper */
    .logo__wrapper {
      display: block;
      min-width: 25px;
      height: 15px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .checkicon__wrapper {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 360px) {
    .cardnumber__box {
      padding: 0px 10px;
    }
  }

  @media screen and (min-width: 375px) {
    .cardnumber__box {
      /* inputs / card number inputs wrapper */
      article {
        gap: 5px;

        div {
          width: 50px;
        }
      }
    }
  }

  @media screen and (min-width: 400px) {
    .cardnumber__box {
      /* master-card logo wrapper */
      .logo__wrapper {
        min-width: 30px;
        height: 20px;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .cardnumber__box {
      /* inputs / card number inputs wrapper */
      article {
        div {
          width: 60px;
        }
      }
    }
  }
`;
