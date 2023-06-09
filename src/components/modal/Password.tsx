import styled from "styled-components";
import { useEffect } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";
import { toggleClass } from "./utils";
import { Store } from ".";

const Password = () => {
  const [password, setPassword] = useState("");

  const { cards } = Store();

  function inputOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value.trim().split("").slice(0, 8).join("");
    setPassword(value);
    validator(value, e.currentTarget.parentElement!);
  }

  function validator(number: string, el: HTMLElement) {
    toggleClass(isNaN(Number(number)), el); //error class
    toggleClass(!isNaN(Number(number)) && number.length === 8, el, "valid"); //valid class
  } // simply toggles error classes

  useEffect(() => {
    setPassword("");
  }, [cards]);

  return (
    <Wrapper>
      <div className="password__header">
        <h2>Password</h2>
        <p>Enter your Dynamic password</p>
      </div>

      <div className="password__box">
        <input
          onChange={inputOnchange}
          value={password}
          type="text"
          inputMode="numeric"
        />

        <span className="menu__icon fcenter ">
          <BsGrid3X3GapFill />
        </span>
      </div>
    </Wrapper>
  );
};

export default Password;

const Wrapper = styled.div`
  margin-top: 30px;
  color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .password__header {
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

  .password__box {
    padding: 0px 10px;
    height: 45px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-width: 140px;
    max-width: 260px;

    /* responsible for collecting values */
    input {
      font-size: clamp(1.6rem, 3.5vw, 2rem);
      font-weight: 700;
      text-align: left;
      width: 40px;
      flex: 1;
    }

    /* The 3 grid menu icon */
    .menu__icon {
      color: rgba(0, 0, 0, 0.3);
      font-size: 2rem;
    }
  }

  .password__box.error {
    border: 1px solid rgba(255, 0, 0, 1);
  }
  .password__box.valid {
    border: 1px solid rgba(0, 0, 255, 1);
  }

  @media screen and (min-width: 360px) {
    .password__box {
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
    .password__box {
      /* The 3 grid menu icon */
      .menu__icon {
        font-size: 2.5rem;
      }
    }
  }
`;
