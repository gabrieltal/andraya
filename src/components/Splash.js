import React, { Component } from 'react';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash" onClick={this.props.handleClick}>
        <header>
          <h1>Andraya and Gabriel</h1>
          <p>August 07, 2022</p>
        </header>
      </div>
    );
  }
}
