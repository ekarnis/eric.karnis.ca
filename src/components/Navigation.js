import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = props => {
  return (
    <nav>
      <div />
      <NavLink to="/" activeClassName="activePage" exact>
        Home
      </NavLink>
      <NavLink to="/Resume" activeClassName="activePage" exact>
        Resume
      </NavLink>
      <NavLink to="/Blog" activeClassName="activePage" exact>
        Blog
      </NavLink>
      <a href="https://www.flickr.com/erickarnis">Photography</a>
      <a href="https://github.com/ekarnis">Github</a>
      <a href="https://github.com/ekarnis/eric.karnis.ca">Source</a>
      <NavLink to="/Contact" activeClassName="activePage" exact>
        Contact
      </NavLink>
      <div />
    </nav>
  );
};
