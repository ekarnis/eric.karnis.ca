import React from "react";
import { Link } from "react-router-dom";

export const Navigation = props => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Posts</Link>
      <a href="https://github.com/ekarnis">Github</a>
      <a href="https://github.com/ekarnis/eric.karnis.ca">Source</a>
    </nav>
  );
};
