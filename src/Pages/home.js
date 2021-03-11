// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";
//  Components
import Intro from "../components/Poem";
import Info from "../components/Info";
// Images
import Sketch from "../img/trouwkaart de goede 2.png";
// Scroll top
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  return (
    <StyledHome>
      <div className="headline">
        <h1>20 Mei gaan wij Trouwen</h1>
      </div>
      <StyledLanding>
        <Section1 className="one">
          <div>
            <img src={Sketch} alt="the-couple" />
          </div>
          <div className="text">
            <Info />
          </div>
        </Section1>
      </StyledLanding>
      <ScrollTop />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  .headline {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 40px;
    text-align: center;
  }
  h1 {
    font-size: 4rem;
    font-weight: lighter;
  }
`;

const StyledLanding = styled(motion.div)``;

const Section1 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    max-height: 80vh;
    max-width: 65vw;
    padding: 10px;
  }

  .text {
    padding: 5px;
    line-height: 1.5;
  }
`;

export default Home;
