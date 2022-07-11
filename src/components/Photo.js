import React, { Component } from 'react';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    const BASEURL = 'https://raw.githubusercontent.com/gabrieltal/andraya/main/src/assets/images/';

    this.state = {
      openModal: false,
      imageSrc: BASEURL + this.props.filename,
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.closeModalOnOutsideClick = this.closeModalOnOutsideClick.bind(this);
  }

  toggleModal() {
    this.setState({
      openModal: this.state.openModal === true ? false : true,
    })
  }

  closeModalOnOutsideClick(e) {
    let classes = e.target.className.split(" ");
    if (classes.includes("modal") || classes.includes("modal-content") || classes.includes("modal-body")) {
      this.toggleModal();
    }
  }

  render() {
    const modalClass = this.state.openModal === true ? 'is-open' : 'is-closed';

    return (
      <div className="gallery-item">
        <img className="gallery-image" alt="the happy couple" onClick={this.toggleModal} src={this.state.imageSrc} />

        <div className={'modal ' + modalClass} onClick={this.closeModalOnOutsideClick}>
          <button className="close" onClick={this.toggleModal}>&times;<span className="visually-hidden">Close</span></button>

          <div className="modal-content text-center">
            <div className="modal-body mt-5">
              <a href={this.state.imageSrc} rel="noreferrer" target="_blank">
                <img className="modal-image mt-3" alt="the happy couple" src={this.state.imageSrc} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
