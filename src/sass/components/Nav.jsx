import React, { useState } from 'react';
import menu from '../images/menu.png';
import close from '../images/close.jpg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="Nav">
      <div className="container">
        <div className="nav_box">
          <a href="#!" className="nav_logo">PROWEB</a>


          <div onClick={toggleMenu} className="nav_menu">
            <img src={isMenuOpen ? close : menu} alt="Menu Icon" />
          </div>


          <ul className={`nav_list ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#!" className="nav_link">Обо мне</a></li>
            <li><a href="#!" className="nav_link">Мои работы</a></li>
            <li><a href="#!" className="nav_link">Контакты</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
