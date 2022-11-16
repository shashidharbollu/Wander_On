import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
export default function Tour() {
  const [Data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.npoint.io/f89acb9ee900ca95b8dc");
    setData(await response.json());
  };
  useEffect(() => {
    getData();
  });
  return (
    <Section id="explore">
      <div className="title">
        <h2 className="exploree">---Latest---</h2>
      </div>
      <div className="tours">
        {Data.filter(
          (element) =>
            element.featuredImage.id > 12000 && element.featuredImage.id < 15000
        ).map((elem) => {
          const { title, id, date, featuredImage, meta, tags } = elem;
          return (
            <div key={id} className="tour">
              <img src={featuredImage.link} alt="" />
              <img src={title.categories} alt="" />
              <div className="tour2">
                {" "}
                {meta.title} <p>{title.categories}</p>
              </div>
              <div>{meta.description}</div>
              <div>{tags.name}</div>
              <div className="info"></div>
              <div className="distance">
                <span>{featuredImage.caption}</span>
              </div>
              <div className="date">
                <b> {date}</b>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: whitesmoke;
  padding: 0;
  margin: 0;
  .title {
    text-align: center;
  }
  .date {
    border-radius: 8px;
    padding: 5px;
    margin-left: 180px;
    font-size: 10px;
  }
  button {
    background-color: aquamarine;
    border-radius: 80px;
    padding: 10px;
    border-bottom-right-radius: 10px;
  }
  button:hover {
    background-color: #8338ec;
  }
  .tour2 {
    color: blue;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .tours {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    margin-top: 10px;
    .tour {
      padding: 1rem;
      display: flex;
      margin-top: 15px;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;

            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .tours {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
