import React from "react";
import styled from "styled-components";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appleStore.png";

export default function DownloadApp() {
  return (
    <Section>
      <div className="info">
        <center>
          <h1>About Us</h1>
        </center>

        <p>
          We at WanderOn are a modern travel community that provides end to end
          travel packages in India and abroad. We design the best travel
          itineraries that encourage group traveling for like-minded people. Our
          services include road trips, trekking expeditions, corporate trips,
          and customized tour packages. On our trips, we ensure hassle-free
          traveling, top-notch accommodation and guided sightseeing that too in
          a budget that won’t burn a hole in your pocket. Just give us your
          dates and be ready to experience traveling like never before.
        </p>
        <div className="downloads">
          <img src={googlePlay} alt="google Play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 25rem;
  width: 100%;
  margin: 5rem 0;
  background: linear-gradient(to right, #a6f2f2, #ddf181);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  position: relative;
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    .downloads {
      display: flex;
      gap: 1rem;
      img {
        height: 3rem;
        cursor: pointer;
      }
    }
  }
  .screens {
    height: 22rem;
    position: absolute;
    bottom: -2rem;
    right: 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    gap: 4rem;
    padding: 2rem;
    .info {
      h1 {
        font-size: 2rem;
        width: 100%;
      }
    }
    .screens {
      position: initial;
      height: 15rem;
    }
  }
`;
