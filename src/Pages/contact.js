// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";

// images
import Bride from "../img/bride.jpg";
import Groom from "../img/groom.jpg";
import Romee from "../img/romee.jpg";
import Rikst from "../img/rikst.jpg";
import Babs from "../img/babs.jpg";
import Backdrop from "../img/sky.jpg";

// Scroll top
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <Wrapper>
      <StyledContact>
        <div className="contact">
          <div className="bride">
            <img className="profile" src={Bride} alt="" />
            <h2>Ingrid Siemonsma</h2>
            <p>De bruid</p>
          </div>
          <div className="bride info">
            <h4>Stuur mij een</h4>
            <a href="mailto:ingridsiemo@hotmail.com?subject=Bruiloft Ingrid & Jochem">
              <button className="btn">Email</button>
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="groom">
            <img className="profile" src={Groom} alt="" />
            <h2>Jochem Jellema</h2>
            <p>De bruidegom</p>
          </div>
          <div className="groom info">
            <h4>Stuur mij een</h4>
            <a href="mailto:jochemjellema@outlook.com?subject=Bruiloft Ingrid & Jochem">
              <button className="btn">Email</button>
            </a>
          </div>
        </div>

        <div className="contact">
          <div className="meester1">
            <img className="profile" src={Rikst} alt="" />
            <h2>Rikst Siemonsma</h2>
            <p>Ceremoniemeester</p>
          </div>
          <div className="meester1 info">
            <h4>Stuur mij een</h4>{" "}
            <a href="mailto:rikstsiemonsma@icloud.com?subject=Bruiloft Ingrid & Jochem">
              <button className="btn">Email</button>
            </a>
          </div>
        </div>

        <div className="contact">
          <div className="meester2">
            <img className="profile" src={Romee} alt="" />
            <h2>Romee Jellema</h2>
            <p>Ceremoniemeester</p>
          </div>
          <div className="meester2 info">
            <h4>Stuur mij een</h4>
            <a href="mailto:romeejellema@hotmail.com?subject=Bruiloft Ingrid & Jochem">
              <button className="btn">Email</button>
            </a>
          </div>
        </div>

        <div className="contact">
          <div className="babs">
            <img className="profile" src={Babs} alt="" />
            <h2>Hanneke van Dijk</h2>
            <p>Ambtenaar</p>
          </div>
          <div className="babs info">
            <h4>Stuur mij een</h4>
            <a href="mailto:hannekevandijk63@gmail.com?subject=Bruiloft Ingrid & Jochem">
              <button className="btn">Email</button>
            </a>
          </div>
        </div>
      </StyledContact>
      <ScrollTop />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  background-image: url(${Backdrop});
  width: 100vw;
  background-size: cover;
`;

const StyledContact = styled(motion.div)`
  width: 80vw;
  background-color: #f3e8e9;
  margin: 0rem 2rem;
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .bride {
    margin-top: 7rem;
  }
  .babs {
    margin-bottom: 7rem;
  }

  .profile {
    margin: 2rem;
    max-height: 150px;
    max-width: 150px;
    border-radius: 5rem;
  }
  h2 {
    font-size: 1.3rem;
  }

  button {
    border: none;
    height: 2rem;
    width: 4rem;
    border-radius: 5rem;
    background-color: #9db49a;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 1.2rem;
  }
  button:hover {
    background-color: #9ee295;
  }
  h4 {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: lighter;
  }
`;

export default Contact;
