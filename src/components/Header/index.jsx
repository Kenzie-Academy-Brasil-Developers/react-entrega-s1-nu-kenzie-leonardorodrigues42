import "./styles.css";
import React from "react";
import logo from "../../assets/nu-kenzie.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Logo kenzie" />
        <button>Construção</button>
      </div>
    </header>
  );
};

export default Header;
