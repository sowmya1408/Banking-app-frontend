import React, { useState } from "react";
import logo from "../images/bank-img.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./nav-bar.css";

const UserPageNavbar = ({ handleLogout, navText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/home">
              <img src={logo} alt="bank pic" />
            </Link>
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {navText
              ? navText.map((text) => (
                  <li>
                    <Link to={text.link}>{text.text}</Link>
                  </li>
                ))
              : null}
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </section>
  );
};
export default UserPageNavbar;
// <li>
//   <Link to="/admin">Create User</Link>
// </li>
