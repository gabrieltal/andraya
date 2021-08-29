import HISTORY from '../library/history';
import Event from './Event';
import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    const events = HISTORY.map((event, index) => {
      return <Event key={index} {...event}></Event>;
    });

    return (
      <div className="history">
        {events}
      </div>
    );
  }
}
