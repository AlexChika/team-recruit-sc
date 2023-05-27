import styled from "styled-components";
import { useState } from "react";
import bg from "../../assets/bg.jpg";
import Modal from "../modal";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <Wrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <section className={`home__content ${showModal ? "" : "show"}`}>
        <div className="home__content__header">
          <h1>
            Dear <span>Team Recruit</span>,{" "}
          </h1>
          <p>It was an honour</p>
        </div>

        <div className="home__content__body">
          <div className="paragraph">
            <p>
              Oh Wow, Wow....This was definitely challenging. It was, really, it
              was.
            </p>

            <p>
              Now that I can finally hit the submit button, let me relax and
              fantasize about a job offer
            </p>

            <p>
              Even tho, this isn't that impressive, In the real world, we will
              strive to make magic. It definitely would make sense to work with
              your team.
            </p>

            <p>Oh oh Before I forget, Here is a project brief</p>
          </div>

          <div className="dependencies">
            <ul>
              <h1>Core Dependencies</h1>
              <div>
                <li>React</li>
                <li>React-dom</li>
                <li>React-scripts</li>
                <li>TypeScripts</li>
              </div>
            </ul>

            <ul>
              <h1>App Dependencies</h1>
              <div>
                <li>Styled components</li>
                <li>React icons</li>
              </div>
            </ul>

            <ul>
              <h1>External Resources</h1>

              <div>
                <li>windows 11 wallpaper</li>
                <li>Mastercard logo png</li>
              </div>
            </ul>
          </div>
        </div>

        <div className="home__content__footer">
          <button
            className="fcenter"
            onClick={() => setShowModal(!showModal)}
            type="button"
          >
            Open modal
          </button>

          <a
            className="fcenter"
            href="https://github.com/AlexChika/team-recruit-sc"
          >
            Source Code
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  padding: 10px 6px;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .home__content {
    opacity: 0;
    transform: scale(0);
    transition: all 0.7s linear;
    width: 100%;
    max-width: 900px;
    position: absolute;
    background-color: white;
    font-style: italic;

    .home__content__footer {
      display: flex;
      gap: 20px;
      margin-top: 20px;
      padding: 20px;

      button,
      a {
        background-color: var(--blue-color);
        color: white;
        padding: 10px 30px;
        border-radius: 10px;
        height: 45px;
        text-align: center;
        color: white;
        font-size: clamp(1.3rem, 3.5vw, 1.5rem);
        font-weight: 700;
      }
    }

    .home__content__body {
      text-align: center;
      font-weight: 600;

      .paragraph {
        margin-top: 20px;
        padding: 10px;

        p {
          margin-top: 10px;
          font-size: clamp(1.6rem, 2.5vw, 1.7rem);
        }
      }

      .dependencies {
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin-top: 30px;

        ul {
          width: 100%;
          max-width: 250px;
          display: flex;
          align-items: center;
          padding: 5px;

          h1 {
            font-size: clamp(1.6rem, 2.5vw, 1.7rem);
            font-weight: 700;
            color: var(--black-color);
            writing-mode: vertical-lr;
          }

          li {
            list-style: none;
          }
        }
      }
    }

    .home__content__header {
      padding: 20px;

      h1 {
        font-size: clamp(2rem, 3.5vw, 2.7rem);
        font-weight: 700;
        color: var(--black-color);
        font-style: italic;

        span {
          color: blue;
          font-weight: inherit;
          font-family: "Pacifico", cursive;
        }
      }

      p {
        font-size: clamp(1.5rem, 2vw, 1.7rem);
        color: var(--gray-color);
        margin-top: -5px;
      }
    }
  }

  .home__content.show {
    opacity: 1;
    transform: scale(1);
  }
`;
