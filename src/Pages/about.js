// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";
// Images
import Ring from "../img/rings2.png";

const About = () => {
  return (
    <StyledAbout>
      <h1>
        Over Ons <div className="about-line"></div>
      </h1>

      <AboutContent className="about-content">
        <div className="about-image">
          <img src={Ring} alt="" />
        </div>
        <div className="text-container">
          <p>
            Op 9 Februari 2019 vierden we feest, samen werden wij 65 Jaar en dat
            mocht gevierd worden. Dit was de uitgelezen kans voor Ingrid om
            Jochem ten huwelijk te vragen. Ze was behoorlijk zenuwachtig, maar
            gelukkig zei hij JA!
          </p>
          <br />
          <p>
            De planning voor onze bruiloft begon. 28 mei 2020 zou onze datum
            worden. Helaas werden we gedwongen onze bruiloft te verzetten. Op
            dat moment was het een bittere pil voor ons... maar we hebben er ook
            veel voor terug gekregen.
          </p>
          <br />
          <p>
            Alle extra tijd gaf ons stof tot nadenken. Wat is er nu echt
            belangrijk voor de bezegeling van ons huwelijk? Alle plannen werden
            omgegooid, en we zijn absoluut van mening dat de invulling van onze
            trouwdag veel persoonlijker en intiemer zal zijn dan we in eerste
            instantie gepland hadden.
          </p>
          <br />
          <p>
            We verheugen ons waanzinning op onze bruiloft die 20 mei 2021 zal
            plaatsvinden, en we hopen deze dag met jullie te kunnen vieren.
          </p>
        </div>
      </AboutContent>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  margin-top: 60px;
  align-content: center;
  height: 100vh;
  h1 {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: lighter;
    font-family: "Calligraffitti", cursive;
  }

  .about-line {
    background: #9db49a;
    height: 0.2rem;
    width: 150px;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .about-image {
    width: 45vw;
    z-index: -1;
    opacity: 0.8;
    height: 70vh;
  }
  .text-container {
    line-height: 1.5;
    font-size: 1.2rem;
    padding: 5rem;
  }
`;

export default About;
