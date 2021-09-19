import React, { Component } from 'react';
import moonImage from '../assets/images/moon-sun.png';
import coupleImage from '../assets/images/cute-couple.JPG';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <main>
          <img src={moonImage} height="128px" width="176px" alt="moon"/>
          <h1 className="mt-3 mb-1">Andraya and Gabriel</h1>
          <p className="mt-1 mb-3">Date TBD</p>
          <div className="main-image mb-5">
            <img src={coupleImage} className="couple-image" alt="Andraya and Gabriel on one of our first dates to LACMA" />
          </div>
        </main>
      </div>
    );
  }
}
