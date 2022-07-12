import React, { Component } from 'react';
import Nav from './Nav';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <main className="container text-center">
          <p class="mx-3">If you wish to send us a wedding gift, please consider sending us money <a className="page-link" target="_blank" href="https://venmo.com/code?user_id=2468627513081856809&created=1657604297.381064&printed=1" rel="noopener noreferrer nofollow">via Venmo</a> as we work to save for a house!</p>
        </main>
      </div>
    );
  }
};
