import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

// components..........
import ModalHeader from "./ModalHeader";
import CardNumber from "./CardNumber";
import ExpiryDate from "./ExpiryDate";
import CvvNumber from "./CvvNumber";
import Password from "./Password";
import PayNowButton from "./PayNowButton";
import OrderSummaryCard from "./OrderSummaryCard";

// state
import {
  useReducer,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { reducer } from "./utils";
const initialState: StateType = {
  cards: [],
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  dispatch: "",
};
const ModalContext = createContext(initialState);

// modal prop type
type ModalProp = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

// app.....
const Modal = ({ showModal, setShowModal }: ModalProp) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      <Wrapper className={showModal ? "" : "close"}>
        <button
          onClick={() => setShowModal(!showModal)}
          className="close__button"
          type="button"
        >
          <MdOutlineClose />
        </button>

        {/* Card details form */}
        <section>
          <ModalHeader />
          <CardNumber />
          <CvvNumber />
          <ExpiryDate />
          <Password />
          <PayNowButton />
        </section>

        {/* purchase overview card */}
        <section>
          <OrderSummaryCard />
        </section>
      </Wrapper>
    </ModalContext.Provider>
  );
};

export default Modal;
export const Store = () => useContext(ModalContext);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 20px 10px;
  margin: 0 auto;
  transition: all 0.7s linear;

  &.close {
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .close__button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(173, 173, 173, 0.1);
    color: var(--gray-color);
    padding: 3px 10px;
    font-size: 2rem;
    font-weight: 700;
    animation: button 5s linear infinite;
  }

  @keyframes button {
    0%,
    95% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  section {
    width: 100%;
  }

  section:nth-of-type(1) {
    order: 2;
    padding-top: 50px;
  }

  section:nth-of-type(2) {
    order: 1;
    border-radius: 10px;
  }

  @media screen and (min-width: 400px) {
    padding: 20px 30px;
  }

  @media screen and (min-width: 500px) {
    padding: 50px;
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
    flex-direction: row;
    gap: 30px;

    section:nth-of-type(1) {
      order: 1;
      width: 60%;
      padding-top: 0px;
    }

    section:nth-of-type(2) {
      order: 2;
      width: 40%;
    }
  }

  @media screen and (min-width: 1000px) {
    section:nth-of-type(1) {
      width: 65%;
    }

    section:nth-of-type(2) {
      width: 35%;
    }
  }
`;
