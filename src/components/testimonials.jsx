import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import avatar from "../assets/avatar.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Testimonial() {
  return (
    <Section id="blog">
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="testimonials" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Shashidhar Bollu</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className="desrciption">
            It was fun travelling with WanderOn all the arrangements were
            perfect. Manish was our tour guide he was very carefull and
            cooperative throughout the trip.....
          </p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonials" />
        </div>
      </div>

      <div className="social">
        <h1>Find Us On</h1>
        <FaFacebook className="icon" style={{ color: "red" }} />
        <FaInstagram className="icon" style={{ color: "red" }} />
        <FaTwitter className="icon" style={{ color: "red" }} />
        <FaPinterest className="icon" style={{ color: "red" }} />
        <FaYoutube className="icon" style={{ color: "red" }} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .desrciption {
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
  .social1{
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 3rem;
    cursor: pointer;
  }
  .social {
    display: flex;
    
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 1400px;
    height: 3rem;
    cursor: pointer;
    fa-lg (33% increase)
  }
`;
