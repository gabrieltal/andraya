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
    this.toggleClickOutsideModalContent = this.toggleClickOutsideModalContent.bind(this);
  }

  toggleModal() {
    this.setState({
      openModal: this.state.openModal === true ? false : true,
    })
  }

  toggleClickOutsideModalContent(e) {
    let classes = e.target.className.split(" ");
    if (classes.includes("modal")) {
      this.toggleModal();
    }
  }

  render() {
    const modalClass = this.state.openModal === true ? 'is-open' : 'is-closed';

    return (
      <div className="gallery-item">
        <img className="gallery-image" onClick={this.toggleModal} src={this.state.imageSrc} />

        <div className={'modal ' + modalClass} onClick={this.toggleClickOutsideModalContent}>
          <div className="modal-content">
            <div className="modal-header">
              <button className="close">&times;<span className="visually-hidden">Close</span></button>
            </div>
            <div className="modal-body container">
              <a href={this.state.imageSrc} rel="noreferrer" target="_blank">
                <img className="modal-image" src={this.state.imageSrc} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
