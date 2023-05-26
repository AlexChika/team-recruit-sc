import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HiCreditCard } from "react-icons/hi";
import getTime from "../../utils/helper";

const ModalHeader = () => {
  const HeaderTime = useRef<null | HTMLDivElement>(null);
  const [time, setTime] = useState({
    box1: "0",
    box3: "0",
    box2: "0",
    box4: "0",
  });

  // effect updates time every 10sec.
  useEffect(() => {
    function updateTime() {
      setTime(getTime());
    }

    updateTime(); //initial update onrender

    let interval = setInterval(() => {
      updateTime(); //this could be more than 10 sec
    }, 10000);

    return () => clearInterval(interval);
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

      <div ref={HeaderTime} className="header__time fcenter">
        <div className="fcenter">
          <span>{time.box1}</span>
          <span>{time.box2}</span>
        </div>

        <small>:</small>

        <div className="fcenter">
          <span>{time.box3}</span>
          <span>{time.box4}</span>
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
      font-size: clamp(1.5rem, 3.5vw, 2rem);
      color: var(--gray-color);

      span {
        font-weight: 700;
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
      padding: 8px;
      font-size: clamp(1.5rem, 3.5vw, 2rem);
      border-radius: 5px;
    }

    small {
      font-size: 2rem;
    }
  }
`;
