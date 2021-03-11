// Styling & Anmation
import styled from "styled-components";
import { motion } from "framer-motion";
// Import Router
import { Link, useLocation } from "react-router-dom";

const Links = ({ navbarStatus, setNavbarStatus }) => {
  const { pathname } = useLocation();
  return (
    <Wrapper className={`links ${navbarStatus ? "active" : "not-active"}`}>
      <Second className={`second ${navbarStatus ? "active" : "not-active"}`}>
        <ul>
          <li>
            <Link
              className="nav-link"
              onClick={() => setNavbarStatus(!navbarStatus)}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              onClick={() => setNavbarStatus(!navbarStatus)}
              to="/over-ons"
            >
              Over Ons
            </Link>
          </li>
          <li className="nav-link contact">
            <Link onClick={() => setNavbarStatus(!navbarStatus)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </Second>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: fixed;
  width: 16vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #3b3b3a;
  transition: transform 0.3s ease-in-out;
`;

const Second = styled(motion.div)`
  width: 15.5vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #9db49a;
  display: flex;
  align-items: flex-end;
  transition: transform 1.7s ease;
  li {
    padding: 2rem;
    cursor: pointer;
    font-size: 2rem;
    color: whitesmoke;
  }
  a {
    text-decoration: none;
    color: #3b3b3a;
  }
`;

export default Links;
