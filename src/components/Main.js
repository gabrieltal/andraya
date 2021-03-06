import React, { Component } from 'react';
import moonImage from '../assets/images/moon-image.png';
import engagementImage from '../assets/images/engagement.jpeg';
import Nav from './Nav';

export default class Main extends Component {
  render() {
    return (
      <div className="star-background">
        <Nav />
        <main className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="splash-container">
              <img src={engagementImage} alt="gabriel proposing to andraya" className="splash-photo y-5"/>
            </div>

            <div className="d-flex justify-content-center align-items-center mx-2 my-5">
              <img src={moonImage} height="240rem" alt="moon"/>
              <h1 className="mb-1">Andraya Sanchez & Gabriel Talavera</h1>
            </div>

            <div className="date-location text-center my-5">
              <p className="mb-3">Huntington Beach, California</p>
              <p className="mb-3">August 6, 2022</p>
            </div>
          </div>
        </main>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
    );
  }
};
