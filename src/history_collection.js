import HISTORY from './history';
import HistoricalEvent from './historical_event';
import React, { Component } from 'react';

export default class HistoryCollection extends Component {
  render() {
    const events = HISTORY.map((event, index) => {
      return <HistoricalEvent key={index} {...event}></HistoricalEvent>;
    });

    return (
      <div className="history">
        {events}
      </div>
    );
  }
}
