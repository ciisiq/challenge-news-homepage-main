import logo from '../../../public/assets/images/logo.svg';

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <div>
            <img src={logo} alt="company logo with W format" />
          </div>
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
      </header>
    </div>
  );
}
