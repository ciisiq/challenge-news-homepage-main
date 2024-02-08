import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import './navbar.css';
import open from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-menu-close.svg';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="company logo with W format" />
        </div>

        {/* Hamburger Button for mobile */}
        <div className="toggle_btn">
          <button className="menu-btn" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <img src={close} alt="close icon for closing menu" />
            ) : (
              <img src={open} alt="open icon for opening menu" />
            )}
          </button>
        </div>

        <ul className={`links ${navbar ? 'open' : ''}`}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>New</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Trending</a>
          </li>
          <li>
            <a>Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
