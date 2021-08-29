import React, { Component } from 'react';

export default class Event extends Component {
  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
