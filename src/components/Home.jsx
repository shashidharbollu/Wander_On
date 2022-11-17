import React, { useState } from "react";
import styled from "styled-components";
import HeroImage from "../assets/hero.png";
import Button from "./Button";
export default function Home() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <Section>
      <div className="background">
        <img src={HeroImage} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>It's Time To</h1>
          <h1>Explore The World</h1>

          <Button text="Plan Your Trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Arab Egypt</option>
                <option>Hyderabad India</option>
                <option>Gurugram India</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Check Out</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Paymet Mode</label>
              <select>
                <option>Card</option>
                <option>Online Payment</option>
                <option>Net Banking</option>
              </select>
            </div>
            <div className="row">
              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content">
                    <h2>CONGRATULATIONS!YOUR BOOKING IS CONFIRMED.</h2>
                    <p>
                      Our Customer-Care Executive will get in touch with You.If
                      you have any questions please feel free to send a messege
                      in the query box, which is present at the bottom of this
                      page.Thank You! Stay safe.
                    </p>
                    <button className="close-modal" onClick={toggleModal}>
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
              <button
                style={{
                  background: "var(--primary-color)",
                  width: "150px",
                  height: "40px",
                }}
                onClick={toggleModal}
                className="row"
                // color: var(--primary-color);
              >
                Click here to BOOK your trip.
              </button>
              {/* <Button onClick={toggleModal} className="btn-modal" text="Send" /> */}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
// img.sticky {
//   position: -webkit-sticky; /* Safari */
//   position: sticky;
//   top: 0;
// }

const Section = styled.section`
  margin-top: 2rem;
  position: sticky;
  .background {
    img {
      sticky: -webkit-sticky;
      position: sticky;
      height: 90vh;
      width: 100%;
    }
  }

  .content {
    .info {
      position: absolute;
      top: 5rem;
      margin-left: 8rem;
      h1 {
        font-size: 5rem;
        margin-bottom: 2rem;
      }
      input {
        padding: 1rem 2rem;
        border: none;
        font-size: 1.1rem;
        color: var(--primary-color);
        cursor: pointer;
      }
    }
    .planner {
      position: absolute;
      bottom: -2rem;
      right: 0;
      background-color: white;
      padding: 2rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      form {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
        .row {
          display: flex;
          flex-direction: column;
          text-align: start;
          label {
            font-size: 0.7rem;
            color: var(--secondary-text);
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg)
              brightness(105%) contrast(101%);
          }
          input:focus {
            outline: none;
          }
          input,
          select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
          active-modal {
            overflow-y: hidden;
          }

          .btn-modal {
            padding: 10px 20px;
            display: block;
            margin: 100px auto 0;
            font-size: 18px;
          }

          .modal,
          .overlay {
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: fixed;
          }

          .overlay {
            background: rgba(49, 49, 49, 0.8);
          }
          .modal-content {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            line-height: 1.4;
            background: #f1f1f1;
            padding: 14px 28px;
            border-radius: 3px;
            max-width: 600px;
            min-width: 300px;
          }

          .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 7px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      img {
        height: 50vh;
      }
    }
    .content {
      .info {
        margin-left: 2rem;
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      }
      .planner {
        position: initial;
        margin: 2rem;
        form {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;
