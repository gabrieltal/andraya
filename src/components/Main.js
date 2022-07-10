import React, { Component } from 'react';
import moonImage from '../assets/images/moon-image.jpeg';
import engagementImage from '../assets/images/engagement.jpeg';
import Nav from './Nav';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="splash-container">
              <img src={engagementImage}  className="splash-photo y-5"/>
            </div>

            <div className="d-flex justify-content-center align-items-center my-5">
              <img src={moonImage} height="240rem" alt="moon"/>
              <h1 className="mb-1">Andraya Sanchez & Gabriel Talavera</h1>
            </div>

            <div className="date-location text-center my-5">
              <p className="mb-3">Huntington Beach, California</p>
              <p className="mb-3">August 6, 2022</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
};
