import React, { Component } from 'react';
import Nav from './Nav';
import Photo from './Photo';
import PHOTOS from '../library/gallery';

export default class Gallery extends Component {
  render() {
    const photos = PHOTOS.map((photo, index) => {
      return <Photo key={index} {...photo} />;
    });

    return (
      <div>
        <Nav />
        <main className="gallery mx-auto">
          {photos}
        </main>
      </div>
    );
  }
};
