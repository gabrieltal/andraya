import React, { Component } from 'react';

export default class Photo extends Component {
  render() {
    const BASEURL = 'https://raw.githubusercontent.com/gabrieltal/andraya/main/src/assets/images/';

    return (
      <div className="gallery-item">
        <img className="gallery-image" src={BASEURL + this.props.filename} />
      </div>
    )
  }
}
