import React, { Component } from 'react';
import moonImage from '../assets/images/moon-image.jpeg';
import engagementImage from '../assets/images/engagement.jpeg';
import { Link } from "react-router-dom";
export default class Main extends Component {
  render() {
    return (
      <div className="main mb-5">
        <nav className="text-center mt-3">
          <h2>It was written in the stars...</h2>

          <Link to="/">Home</Link>
          <Link to="/timeline">Timeline</Link>
        </nav>
        <main>
          <img src={engagementImage} height="400rem" className="my-5"/>
          <div className="d-flex align-items-center my-5">
            <img src={moonImage} height="240rem" alt="moon"/>
            <h1 className="mb-1">Andraya Sanchez & Gabriel Talavera</h1>
          </div>
        </main>
        <p className="my-5">
          Huntington Beach, California
          <br/>
          August 6, 2022
        </p>
      </div>
    );
  }
};
