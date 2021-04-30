// Styling & Anmation
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import Toggle from "./Toggle";

const Info = () => {
  return (
    <StyledInfo className="info">
      <AnimateSharedLayout>
        <Toggle title="Locatie">
          <div className="answer">
            <p>Voorweg 67a, Schoorl</p>
            <p>In de tuin bij de ouders van de bruidegom!</p>
          </div>
        </Toggle>
        <Toggle title="The I Do's">
          <div className="answer">
            <p>
              Op 20-05-2021 om 14:00 uur zullen Ingrid & Jochem elkaar het
              ja-woord geven.
            </p>
            <p></p>
          </div>
        </Toggle>
        <Toggle title="Diner">
          <div className="answer">
            <p>Op dit moment is een diner niet mogelijk.</p>
            <p>
              Gelukkig denken we dat daar spoedig verandering in komt. Volg het
              laatste nieuws!
            </p>
          </div>
        </Toggle>
        <Toggle title="Laatste Nieuws">
          <div className="answer">
            <p>
              De aanvangstijd voor de bruiloft is om 13:30 en om 14:00 uur
              begint de ceremonie.
            </p>
            <p>
              Aan het einde van de dag staat er een verrukkelijk buffet klaar.
            </p>
            <p>
              Cadeautip: <i class="fa fa-envelope"></i>
            </p>

            <p>
              Lieve Dames, hier een tip van ons. Omdat de bruiloft in de tuin
              gevierd wordt, raden we jullie aan geen naaldhakken aan te
              trekken.
            </p>
            <p>Er is geen laatste nieuws meer</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledInfo>
  );
};

const StyledInfo = styled(motion.div)`
  width: 30vw;
  justify-content: space-between;
  h4 {
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: lighter;
    color: #3b3b3a;
  }
  .faq-line {
    background: #9db49a;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .answer {
    p {
      line-height: 2;
      padding-left: 1rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      font-weight: lighter;
      letter-spacing: 1px;
    }
    button {
      height: 50px;
      width: 50px;
    }
  }
`;

export default Info;
