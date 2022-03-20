import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

// console.log(MenuItems);
// ${isActive ? "active" : ""}
export default function MenuCard({ menu }) {
  const { name, imgSrc } = menu;
  return (
    <div className={`rowMenuCard`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}
