import { useState } from 'react';
import logo from '../../../public/assets/images/logo.svg';
import './navbar.css';
import open from '../../../public/assets/images/icon-menu.svg';
import close from '../../../public/assets/images/icon-menu-close.svg';

export default function Navbar() {
  const [navbar, setnavbar] = useState(false);

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="company logo with W format" />
        </div>

        <div className="mobile-menu">
          {/* Hamburger Button for mobile */}
          <button className="menu-btn open" onClick={() => setnavbar(!navbar)}>
            {navbar ? (
              <img src={close} alt="open icon for to open menu" />
            ) : (
              <img src={open} alt="open icon for to close menu" />
            )}
          </button>
        </div>

        <div>
          <nav style={{ display: navbar ? 'block' : 'none' }}>
            <ul>
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
        </div>
      </header>
    </>
  );
}
