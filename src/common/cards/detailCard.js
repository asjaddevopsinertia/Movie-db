import React from "react";
import "./detailCard.scss";

export const DetailCard = ({
  img,
  title,
  genre,
  rating,
  language,
  tagline,
  release,
  revenue,
  description,
}) => {
  return (
    <div className="detail-container">
      <div>
        <img src={img} alt="detail-img" />
      </div>

      <div>
        <h1>{title}</h1>
        <p className="tagline special">{tagline}</p>

        <p className="desc">{description}</p>

        <h3>Release Date</h3>
        <p>{release}</p>

        <h3>Genre</h3>
        <p>{genre}</p>
        <h3>Rating</h3>
        <p>{rating}</p>
        <h3>Language</h3>
        <p>{language}</p>

        <h3>Revenue</h3>
        <p>${revenue}</p>
      </div>
    </div>
  );
};
