import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="text-center mt-5">
        <h2>It was written in the stars...</h2>
        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
      </nav>
    )
  }
}
