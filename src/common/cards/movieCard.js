import React from "react";
import "./movieCard.scss";
import notavail from "../../assets/images/No-image-Found.jpg";

export const MovieCard = ({ img, title, date, rating, subTitle }) => {
  return (
    <div className="cards-container">
      {img ? <img src={img} alt='cardImg'/> : <img src={notavail} alt='notAvailImg'/>}

      <h1>{title}</h1>
      <div className="flex justify-between align-center">
        <span>{date}</span>
      </div>

      {rating ? <div className="rating">{rating}</div> : null}

      {subTitle ? <div className="sub-title">{subTitle}</div> : null}
    </div>
  );
};
