import React, { Component } from 'react';

export default class Event extends Component {
  render() {
    return (
      <li className="text-left my-5">
        <p><strong>{this.props.date}</strong> - {this.props.description}</p>
      </li>
    )
  }
}
