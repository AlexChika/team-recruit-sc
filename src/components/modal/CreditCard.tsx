import styled from "styled-components";
import { FcSimCardChip } from "react-icons/fc";
import { BiWifi } from "react-icons/bi";
import MasterCardLogo from "../../assets/mastercardlogo.png";

const CreditCard = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card__header">
          <span className="fcenter">
            <FcSimCardChip />
          </span>

          <span className="fcenter">
            <BiWifi />
          </span>
        </div>

        <div className="card__body">
          <h3>Jonathan Michael</h3>
          <p>.... .... .... {"3456"}</p>
        </div>

        <div className="card__footer">
          <p>{"09/22"}</p>

          <span>
            <img src={MasterCardLogo} alt="mastercard logo" />
          </span>
        </div>
      </div>

      {/* <div className="no__card">
        <span className="fcenter">
          <FcSimCardChip />
        </span>
        <span className="fcenter">
          <BiWifi />
        </span>
      </div> */}
    </Wrapper>
  );
};

export default CreditCard;
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 20px 20px;

  .card__header {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 4rem;
    }

    span:first-of-type {
      transform: rotate(90deg);
    }
  }

  .card__body {
    margin-top: 30px;

    p {
      font-size: 2rem;
    }
  }

  .card__footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    span {
      height: 30px;
      width: 40px;
    }
  }

  /* .............................. */

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    height: 250px;
    width: calc(100% - 50px);
    filter: drop-shadow(0px 1px 5px whitesmoke);
  }

  @media screen and (min-width: 1000px) {
    width: calc(100% - 60px);
  }
`;
