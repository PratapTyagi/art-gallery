import "./Search.css";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="search_form">
      <div className="search_input">
        <BiSearchAlt2 className="icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
