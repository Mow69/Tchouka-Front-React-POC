import React from "react";
import { Router, Switch, Link } from "react-router-dom";
//components
import Step1 from "../components/step1/Step1";

const Nav = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/rythme">Rythme</Link>
          </li>
          <li>
            <Link to="/percussions">Percussions</Link>
          </li>
          <li>
            <Link to="">Apprentissage</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Nav;
