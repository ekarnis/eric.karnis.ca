import React from "react";
import { Link } from "react-router-dom";

export const Navigation = props => {
  return (
    <nav>
      <div />
      <Link to="/">Home</Link>
      <Link to="/Resume">Resume</Link>
      <Link to="/Blog">Blog</Link>
      <a href="https://github.com/ekarnis">Github</a>
      <a href="https://github.com/ekarnis/eric.karnis.ca">Source</a>
      <Link to="/Contact">Contact</Link>
      <div />
    </nav>
  );
};
