import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="text-center my-5">
        <h2 className="mb-3">It was written in the stars...</h2>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        <NavLink className="nav-link" to="/Registry">Registry</NavLink>
        <NavLink className="nav-link" to="/timeline">Timeline</NavLink>
      </nav>
    )
  }
}
