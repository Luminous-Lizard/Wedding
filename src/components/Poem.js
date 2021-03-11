// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";

const Intro = () => {
  const poemText = [
    "Liefde is een wonder",
    "met elkaar, nooit meer zonder",
    "Voor nu en voor altijd",
    "Ik wil je nooit meer kwijt",
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  let destination = document.querySelector(".active");

  function type() {
    if (count === poemText.length) {
      // Make text disappear
      count = 0;
    }
    // Set text count and letter count
    currentText = poemText[count];
    letter = currentText.slice([0], ++index);
    // destination.textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 400);
  }

  return (
    <Poem>
      <h2 className="line1 active start"></h2>
      <h2 className="line2">{poemText[1]}</h2>
      <h2 className="line3">{poemText[2]}</h2>
      <h2 className="line4">{poemText[3]}</h2>
      <button onClick={type()}>Click</button>
    </Poem>
  );
};

const Poem = styled(motion.div)`
  font-family: 'Calligraffitti', cursive;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.7rem;
  padding: 2rem;
  letter-spacing: 2px;
  .active {
    position: relative;
    margin-left: 10px;
  }
  .active:after {
    content: "";
    position: absolute;
    right: -5px;
    width: 1px;
    height: 100%;
    border-right: 2px solid black;
    animation: blink 0.5s infinite ease;
  }


  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

export default Intro;
