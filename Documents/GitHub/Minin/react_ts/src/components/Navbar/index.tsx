import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper indigo">
      <div className="container">
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/">To do</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
