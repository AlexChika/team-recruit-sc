import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import MasterCardLogo from "../../assets/mastercardlogo.png";
import { useState, useRef, useEffect } from "react";
import { toggleClass } from "./utils";

const CardNumber = () => {
  const InputWrapper = useRef<null | HTMLDivElement>(null);
  const [inputVal, setInputVal] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });
  const [cardNumber, setCardNumber] = useState("");

  function focusInputBox(number: string) {
    if (!InputWrapper.current) return;
    const inputs = [...InputWrapper.current.querySelectorAll("input")];

    if (number.length < 4) {
      inputs[0].focus();
      inputs[0].click();
    }

    if (number.length >= 4 && !(number.length > 8)) {
      inputs[1].focus();
      inputs[1].click();
    }

    if (number.length >= 8 && !(number.length > 12)) {
      inputs[2].focus();
      inputs[2].click();
    }

    if (number.length >= 12) {
      inputs[3].focus();
      inputs[3].click();
    }
  }

  function getTotalNumber(inputVal: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
  }) {
    let number = Object.values(inputVal).join("");
    return number;
  }

  function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.currentTarget.value;

    let name = e.currentTarget.name;

    const newInputVal = {
      ...inputVal,
      [name]: val.split("").slice(0, 4).join(""),
    };

    setInputVal(newInputVal);
    setCardNumber(getTotalNumber(newInputVal));
  }

  function onDelete(name: string, id: string) {
    if (name === "input1") return;
    const prevBoxName = `input${Number(id) - 1}`;

    //  @ts-ignore
    const prevVal = inputVal[prevBoxName];
    let newVal = prevVal.split("");
    newVal = (newVal.pop(), newVal.join(""));

    const newInputVal = {
      ...inputVal,
      [prevBoxName]: newVal,
    };

    setTimeout(() => {
      setInputVal(newInputVal);
      setCardNumber(getTotalNumber(newInputVal));
    }, 200);
  }

  // effect toggles input error classes
  useEffect(() => {
    if (!InputWrapper.current) return;
    let el = InputWrapper.current.parentElement!;

    focusInputBox(cardNumber);
    toggleClass(!Number(cardNumber), el); //error class
    toggleClass(
      typeof Number(cardNumber) === "number" && cardNumber.length === 16,
      el,
      "valid"
    ); //valid class
  }, [cardNumber]);

  useEffect(() => {
    if (!InputWrapper.current) return;
    const inputs = [...InputWrapper.current.querySelectorAll("input")];

    function DeleteInput(e: KeyboardEvent) {
      const name = (e.currentTarget! as HTMLInputElement).name;
      const id = (e.currentTarget! as HTMLInputElement).id;

      // @ts-ignore
      const isDeleting = inputVal[name].length < 1;

      if ((e.key === "Delete" || e.key === "Backspace") && isDeleting) {
        console.log("deleting");
        onDelete(name, id);
      }
    }

    inputs.forEach((input: HTMLInputElement) => {
      input.addEventListener("keydown", DeleteInput);
    });

    return () => {
      inputs.forEach((input: HTMLInputElement) => {
        input.removeEventListener("keydown", DeleteInput);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);

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

      <div
        onClick={() => focusInputBox(cardNumber)}
        className="cardnumber__box"
      >
        <span className="logo__wrapper">
          <img src={MasterCardLogo} alt="" />
        </span>

        {/* number / inputs wrapper */}
        <article ref={InputWrapper}>
          <div>
            <input
              type="text"
              placeholder="0000"
              inputMode="numeric"
              value={inputVal.input1}
              id="1"
              onChange={inputOnChange}
              name="input1"
            />
          </div>

          <small>-</small>

          <div>
            <input
              value={inputVal.input2}
              onChange={inputOnChange}
              id="2"
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name="input2"
            />
          </div>

          <small>-</small>

          <div>
            <input
              value={inputVal.input3}
              onChange={inputOnChange}
              id="3"
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name="input3"
            />
          </div>

          <small>-</small>

          <div>
            <input
              value={inputVal.input4}
              onChange={inputOnChange}
              type="text"
              placeholder="0000"
              inputMode="numeric"
              name="input4"
              id="4"
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
        pointer-events: none;
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

  .cardnumber__box.error {
    border: 1px solid rgba(255, 0, 0, 1);
  }
  .cardnumber__box.valid {
    border: 2px solid rgba(0, 0, 255, 1);
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
