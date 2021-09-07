import HISTORY from '../library/history';
import Event from './Event';
import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    const events = HISTORY.map((event, index) => {
      return <Event key={index} {...event} />;
    });

    return (
      <div className="timeline">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <header>
          <h1>Andraya and Gabriel</h1>
        </header>
        <main>
          <div className="history">
            {events}
          </div>
        </main>
      </div>
    );
  }
}
