import { Link } from "react-router-dom";
import React from "react";

function BannerName({ name, discount, link }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>
        Get Free discount for every <span>N{discount}</span> Your Spent on this
        Platform
      </p>
      <Link to={link}>Learn More</Link>
    </div>
  );
}
export default BannerName;
