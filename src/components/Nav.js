// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = ({ navbarStatus, setNavbarStatus }) => {
  return (
    <StyledNav>
      <div className={`circle ${navbarStatus ? "navbar-active" : ""}`}>
        <button
          onClick={() => setNavbarStatus(!navbarStatus)}
          className="close"
        >
          <i className="fa fa-close"></i>
        </button>
        <button onClick={() => setNavbarStatus(!navbarStatus)} className="open">
          <motion.i
            initial={{ scale: 0.8 }}
            animate={{
              scale: 1.5,
            }}
            transition={{
              ease: "easeOut",
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="fa fa-heart"
          ></motion.i>
        </button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  position: fixed;
  top: -150px;
  left: -150px;
  z-index: 10;
  display: block;
  .circle {
    background-color: #9db49a;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
  }
  .navbar-active {
    transform: rotate(-70deg);
  }
  button {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    height: 100px;
    background: transparent;
    border: 0;
    font-size: 26px;
    color: white;
  }
  button:focus {
    outline: none;
  }
  .close {
    top: 70%;
    left: 55%;
    transform: rotate(90deg);
    transform-origin: top left;
  }
  .open {
    left: 65%;
    top: 55%;
  }
`;

export default Nav;
