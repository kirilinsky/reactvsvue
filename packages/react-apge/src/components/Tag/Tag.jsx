import React from "react";

const Tag = ({ title, error }) => {
  return <div className={`${error && "error"} tag`}>{title}</div>;
};

export default Tag;
