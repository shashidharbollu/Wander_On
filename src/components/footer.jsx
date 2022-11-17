import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/download.png";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

export default function Footer() {
  const [modal, setModal] = useState(false);
  // const [input, setInput] = useState(" ");
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="photo" />
            </div>
            <p className="desciption">
              "Pessimism leads to weakness, optimism to power." - William James.
            </p>
          </div>
          <ul>
            <li>
              <span> +91-9870301533 </span>
            </li>
            <li>
              <span>hello@wanderon.in</span>
            </li>
            <li>
              <span>www.wander.on</span>
            </li>
          </ul>
        </div>
        {/* <div className="social">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div> */}
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Address</h2>
          <h3>
            3rd floor, Building No-750,Phase V, Udyog Vihar, Sector-19,Gurugram,
            Haryana-122022
          </h3>
          <h2>Feel Free To Reach Out To Us</h2>
          <div className="newsletter">
            <input
              type="text"
              placeholder="Your Email"
              // value={input}
              // name="input"
              // onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your Query"
              // value={input}
              // name="input"
              // onChange={handleChange}
            />
            {/* <Button text="Send" /> */}
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>Hello User!</h2>
                  <p>
                    We have received your request.We will get back to you as
                    early as possible.
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
                width: "400px",
                height: "40px",
              }}
              onClick={toggleModal}
              className="btn-modal"
              // color: var(--primary-color);
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <center>
          <span>
            Copyright &copy; Travel. Designed by{" "}
            <a href="#">Shashidhar Bollu</a>
          </span>
        </center>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  .upper-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 2rem;
    gap: 5rem;
    .col {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: var(--secondary-text);
      h2 {
        color: black;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          cursor: pointer;
          transition: var(--default-transition);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .newsletter {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        input {
          padding: 1rem 2rem;
          border: none;
          font-size: 1.1rem;
          color: var(--primary-color);
          cursor: pointer;
        }
        active-modal {
          overflow-y: hidden;
        }
        btn-modal {
          color: orange;
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
  .lower-footer {
    padding: 2rem 0;
    text-align: center;
    
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .upper-footer {
      grid-template-columns: 1fr;
    }
  }
`;
