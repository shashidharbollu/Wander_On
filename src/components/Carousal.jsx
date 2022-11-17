import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";

export default function Carousal() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
        </div>
        <div>
          <img src={Maldives} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}
const Section = styled.section`
  .carousel {
    width: 60%;
    height: 700px;
    background-color: black;
    margin: 2 rem;
    padding: 2rem 0;
  }

  .carousel img {
    margin: 2rem;
    height: 30vh;
    object-fit: cover;
  }

  .thumbs-wrapper,
  .carousel-status {
    display: grid;
  }
`;
