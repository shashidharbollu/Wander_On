import React from "react";
import styled from "styled-components";
import logo from "../assets/download.png";
import Button from "./Button";

export default function Footer() {
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
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Query" />
            <Button text="Send" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; Travel. Designed by <a href="#">Shashidhar Bollu</a>
        </span>
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
