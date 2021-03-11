// State
import { useState } from "react";
// id
import { v4 as uuidv4 } from "uuid";

// Styling & Anmation
import styled from "styled-components";

const Compose = ({ item, onChange, onAdd, list }) => {
  return (
    <Wrapper>
      <div className="compose">
        <textarea
          value={item}
          onChange={onChange}
          cols="30"
          rows="5"
          type="text"
        ></textarea>
        <button onClick={onAdd} type="button">
          Add
        </button>
        <div className="answer">
          {list
            .slice(0)
            .reverse()
            .map((item) => (
              <p key={item.id}>{item.newsItem}</p>
            ))}
        </div>
      </div>
      <div className="delete-section"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  .compose {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  textarea {
    border: none;
    padding: 2rem;
    border-radius: 4rem;
  }
  textarea:focus {
    outline: none;
  }
  li {
    padding: 1rem;
  }
  button {
    background-color: #9db49a;
    margin-top: 15px;
    padding: 5px;
    border: none;
    border-radius: 5rem;
    width: 25%;
  }
  button:hover {
    background-color: #98d490;
  }
`;

export default Compose;
