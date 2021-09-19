import React, { Component } from 'react';
import moonImage from '../assets/images/moon-sun.png';
import coupleImage from '../assets/images/cute-couple.JPG';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <header>
          <img src={moonImage} height="128px" width="176px" />
          <h1 class="my-3">Andraya and Gabriel</h1>
          <img src={coupleImage} height="504px" width="384px" />
        </header>
      </div>
    );
  }
}
