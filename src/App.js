// React State
import { useState, useReducer } from "react";
// id
import { v4 as uuidv4 } from "uuid";
// Components
import Home from "./Pages/home";
import Nav from "./components/Nav";
import Links from "./components/Links";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Compose from "./Pages/compose";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  // latest news state

  // Nav state
  const [navbarStatus, setNavbarStatus] = useState(false);
  // Router
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />
      <Links navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/over-ons" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/compose" exact>
          <Compose />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
