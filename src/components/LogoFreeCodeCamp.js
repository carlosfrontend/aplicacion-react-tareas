import React from "react";
import freeCodeCampLogo from '../images/fcc_logo.png'
import '../stylesheets/LogoFreeCodeCamp.css';

const LogoFreeCodeCamp = () => (
  <div className="freecodecamp-logo-contenedor">
    <img
      src={freeCodeCampLogo}
      className="freecodecamp-logo"
      alt="Logo de FreeCodeCamp"
    />
  </div>
);

export default LogoFreeCodeCamp;
