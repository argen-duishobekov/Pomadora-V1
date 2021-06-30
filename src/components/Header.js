import React from "react";
import pic from '../images/tr.png'
import './Header.css'

const Header = () => {
  // Remove animation effects after user clicks on a widget

  return (
    <header className="logo-title">
      <img src={pic}></img>
      <i>Pomodora</i>
      <p>&copy; 2021 Argen Duishobekov</p>
    </header>
  );
};

export default Header;
