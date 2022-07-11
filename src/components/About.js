import React, { Component } from 'react';
import Nav from './Nav';
import Event from './Event';
import HISTORY from '../library/history';


export default class Main extends Component {
  render() {
    const events = HISTORY.map((event, index) => {
      return <Event key={index} {...event} />;
    });

    return (
      <div>
        <Nav />
        <main className="container text-center">
          <p className="mx-3">On August 6th 2022, Gabriel Talavera is going to marry Andraya Sanchez. They will marry in Andraya's hometown of Huntington Beach California. They first started speaking on August 6th 2018 and had their first date the very next day. 3 years exactly after their first date Gabriel asked Andraya to marry him. Now exactly 4 years after they initially started talking they will be married and expect to start their 4 year anniversary as a married couple.</p>
          <ul className="mx-5">
            {events}
          </ul>
        </main>
      </div>
    );
  }
};
