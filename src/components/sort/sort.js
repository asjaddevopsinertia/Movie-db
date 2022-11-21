import React, { Fragment } from "react";
import "./sort.scss";

export const Sort = ({ onSortClick, checked }) => {
  const sortOptions = [
    {
      id: 1,
      title: "Popular",
      key: "popular",
    },
    {
      id: 2,
      title: "Now Playing",
      key: "now_playing",
    },
    {
      id: 3,
      title: "Top Rated",
      key: "top_rated",
    },
    {
      id: 4,
      title: "Upcoming",
      key: "upcoming",
    },
  ];

  return (
    <div className="sort-container flex align-center">
      <div>
        <h3 className="hide-mobile">Sort by :</h3>
      </div>
      <div className="flex options-container">
        {sortOptions.map((x) => {
          return (
            <Fragment key={x.id}>
              <div
                className={`sort-options flex ${
                  checked === x.key ? "option-active" : ""
                } `}
                onClick={() => onSortClick(x.key)}
              >
                {x.title}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
