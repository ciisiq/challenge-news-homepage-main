import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import './navbar.css';
import open from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-menu-close.svg';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="company logo with W format" />
      </div>
      <nav className={`links ${navbar ? 'open' : 'close'}`}>
        <div className="menu_buttom">
          <button id="menu_close" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <img src={close} alt="close icon for closing menu" />
            ) : (
              <img src={open} alt="open icon for opening menu" />
            )}
          </button>
        </div>

        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>

      {/* Hamburger Button for mobile */}
      <div className="menu_buttom">
        <button id="menu_btn" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <img src={close} alt="close icon for closing menu" />
          ) : (
            <img src={open} alt="open icon for opening menu" />
          )}
        </button>
      </div>
    </header>
  );
}
