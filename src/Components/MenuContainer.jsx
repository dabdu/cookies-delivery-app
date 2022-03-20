import React from "react";
import { Link } from "react-router-dom";

const MenuContainer = ({ link, icon }) => {
  return (
    <li>
      <Link className="menuLink" to={link}>
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
};

export default MenuContainer;
