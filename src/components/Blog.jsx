import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Blog() {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const getUsers = async () => {
    const response = await fetch("https://api.npoint.io/f89acb9ee900ca95b8dc");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  });
  (id) => {
    const newarr = users.filter((eleM) => {
      return eleM.id === id;
    });
    setUsers(newarr);
  };
  return (
    <Section id="recommend">
      <div className="title">
        <h2 className="recomnd">---Recommended places---</h2>
      </div>
      <div className="destinations">
        {users
          .filter((element) => element.featuredImage.id < 12000)
          .map((elem) => {
            const { title, id, date, featuredImage, meta, tags } = elem;
            return (
              <div key={id} className="destination">
                <img src={featuredImage.link} alt="" />
                <img src={title.categories} alt="" />
                <div className="destination2">
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
                {tags.map((eleM) => {
                  <div>{eleM.name}</div>;
                })}
                {modal && (
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <h1>Hello User,</h1>
                      <p>
                        You Really Have A Great Taste! This master-piece has
                        been added to your favourites. Have Fun.
                      </p>
                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                )}

                <button onClick={toggleModal}>AddToFav</button>
              </div>
            );
          })}
      </div>
    </Section>
  );
}

const Section = styled.section`
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
    background: whitesmoke;
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
  background-color: whitesmoke;
  padding: 10;
  margin: 10;
  gap: 5rem;
  active-modal {
    overflow-y: hidden;
  }
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
    margin-right: 220px;
    border-bottom-right-radius: 10px;
  }
  button:hover {
    background-color: #8338ec;
  }
  .destination2 {
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
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: var(--default-transition);
      &:hover {
        background-color: white;
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
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
