import React from "react";
import "./styles.scss";
import pokiIcon from "../../assets/icon/pokeball.png";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="navbar">
        <div className="nav-header">POKEDEX</div>
        <div>
          <img src={pokiIcon} alt="Logo" className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
