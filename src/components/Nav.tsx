import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Nav.css";

interface NavProps {
  mediaWidth: number;
}

const Nav: React.FC<NavProps> = ({ mediaWidth }) => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="nav__container">
      <header>
        <div className="nav__logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" />
        </div>
        <button
          className="nav__open desktop-hidden"
          aria-label="Open menu"
          aria-controls="nav-menu"
          aria-expanded={navActive}
          onClick={() => {
            setNavActive(true);
          }}
        >
          <VscMenu />
        </button>
        <nav
          id="nav-menu"
          className={`nav__menu ${navActive ? "active" : ""}`}
          aria-hidden={!navActive}
        >
          <ul className="nav__links">
            <li>
              <NavLink
                to="/"
                onClick={() => setNavActive(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ingredients"
                onClick={() => setNavActive(false)}
              >
                Ingredients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/areas"
                onClick={() => setNavActive(false)}
              >
                Areas
              </NavLink>
            </li>
          </ul>
          <button
            className="nav__close desktop-hidden"
            aria-label="Close menu"
            aria-controls="nav-menu"
            aria-expanded={navActive}
            onClick={() => setNavActive(false)}
          >
            <AiOutlineClose />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
