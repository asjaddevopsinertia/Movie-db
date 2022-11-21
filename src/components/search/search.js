import React from "react";
import search from "../../assets/images/search.png";
import "./search.scss";

export const Search = ({ handleSearch, value }) => {
  return (
    <>
      <div className="page-width">
        <div className="search-container flex align-center">
          <img src={search} alt="search-img" />
          <input type="text" value={value} onChange={handleSearch} placeholder="Search"/>
        </div>
      </div>
    </>
  );
};
