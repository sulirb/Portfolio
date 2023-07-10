import "./header.scss";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../public/images/si-logo.jpg";
import { HiMenu } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <Link smooth to="/#start" className="header__logo">
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <div className="menu-toggle" onClick={handleDropdownToggle}>
          {showDropdown ? <GrClose /> : <HiMenu />}
        </div>
        <ul className={`nav-menu ${showDropdown ? "active" : ""}`}>
          <li>
            <Link smooth to="/#about" className="header__nav_link">
              A propos
            </Link>
          </li>
          <li>
            <Link smooth to="/#skills" className="header__nav_link">
              Compétences
            </Link>
          </li>
          <li>
            <Link smooth to="/#project" className="header__nav_link">
              Projets
            </Link>
          </li>
          <li>
            <Link smooth to="/#contact" className="header__nav_link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/lpo" className="header__nav_link">
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
