import React from "react";

const Options = ({ name, updateItemCount }) => {
  return (
    <form>
      <input
        type="checkbox"
        onChange={(e) => {
          updateItemCount(name, e.target.checked ? 1 : 0);
        }}
        id={`${name} option`}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};

export default Options;
