import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    width: "30%",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem"
  },
  searchIcon: {
    height: 30,
    border: "none",
    cursor: "pointer"
  }
};

const SearchBar = ({ setValue, placeholder, classes }) => {
  const [query, setQuery] = useState("");
  const buttonClass = classNames({
    "btn btn-secondary": true,
    [classes.searchIcon]: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(query);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          className={classes.main}
        />
        <button className={buttonClass} type="button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default withStyles(styles)(SearchBar);
