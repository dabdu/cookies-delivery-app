import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
function ItemCard({ item }) {
  const { name, ratings, imgSrc, price } = item;
  const [isfavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard">
      <div
        onClick={() => setIsFavourite(!isfavourite)}
        className={`isfavourite ${isfavourite ? "active" : ""}`}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} className="itemImg" />
      </div>
      <div className="itemContent">
        <h3>{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "grey"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>N</span>
              {price}
            </h3>
          </div>
          <i className="addtoCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
