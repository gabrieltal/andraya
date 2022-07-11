import React, { Component } from 'react';
import Nav from './Nav';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main className="text-center mx-auto">
          <p>If you wish to send us a wedding gift, please visit <a className="page-link" target="_blank" href="https://plantperson.info" rel="noopener noreferrer nofollow">our registry here</a></p>
        </main>
      </div>
    );
  }
};
