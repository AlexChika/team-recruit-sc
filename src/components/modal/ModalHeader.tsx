import { useEffect } from "react";
import styled from "styled-components";
import { HiCreditCard } from "react-icons/hi";

const ModalHeader = () => {
  useEffect(() => {
    return () => {
      // second
    };
  }, []);

  return (
    <Wrapper>
      <div className="header__logo fcenter">
        <div className="header__logo__icon fcenter">
          <HiCreditCard />
          <span></span>
        </div>

        <h1 className="header__logo__name">
          <span>AceCoin</span>Pay
        </h1>
      </div>

      <div className="header__time fcenter">
        <div className="fcenter">
          <span>0</span>
          <span>1</span>
        </div>

        <small>:</small>

        <div className="fcenter">
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ModalHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__logo {
    gap: 1rem;

    .header__logo__icon {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      background-color: blue;
      position: relative;

      svg {
        position: absolute;
        color: white;
        font-size: 2.5rem;
        transform: rotate(330deg);
        z-index: 2;
      }

      /* below span serves as the shadow behind the svg card icon */
      span {
        position: absolute;
        filter: blur(1px);
        top: 8px;
        right: 8px;
        height: 1.7rem;
        width: 2rem;
        border-radius: 1px solid white;
        background-color: rgba(255, 255, 255, 0.6);
        transform: rotate(330deg);
      }
    }

    .header__logo__name {
      font-size: clamp(1.8rem, 3.5vw, 2rem);
      color: var(--gray-color);

      span {
        font-weight: 900;
        color: var(--black-color);
      }
    }
  }

  .header__time {
    gap: 5px;

    div {
      gap: 2px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--black-color);

      color: white;
      padding: 10px;
      font-size: clamp(1.8rem, 3.5vw, 2rem);
      border-radius: 5px;
    }
  }
`;
