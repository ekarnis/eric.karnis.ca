import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = props => {
  return (
    <nav>
      <div />
      <NavLink to="/" activeClassName="activePage" exact>
        Home
      </NavLink>
      <NavLink to="/resume" activeClassName="activePage" exact>
        Resume
      </NavLink>
      <NavLink to="/blog" activeClassName="activePage" exact>
        Blog
      </NavLink>
      <a
        href="https://www.flickr.com/people/erickarnis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Photography
      </a>
      <a
        href="https://github.com/ekarnis"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://github.com/ekarnis/eric.karnis.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <NavLink to="/contact" activeClassName="activePage" exact>
        Contact
      </NavLink>
      <div />
    </nav>
  );
};
