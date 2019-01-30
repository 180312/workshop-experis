import React from "react";
import "./Filter.css";

const Filter = ({ filterKey, placeholder, value, onChange }) => (
  <input
    className="filter"
    type="search"
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(filterKey, e)}
  />
);

export default Filter;
