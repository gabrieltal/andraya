import React, { Component } from 'react';
import HISTORY from '../library/history';
import Event from './Event';
import Nav from './Nav';

export default class Timeline extends Component {
  render() {
    const events = HISTORY.map((event, index) => {
      return <Event key={index} {...event} />;
    });

    return (
      <div className="star-background">
        <Nav />
        <main>
          <div className="history">
            {events}
          </div>
        </main>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
    );
  }
}
