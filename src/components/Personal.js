import React, { Component } from 'react';
import Header from './Header';
import Terminal from './Terminal';
import Modal from './Modal';

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }

    this.handleBlur = this.handleBlur.bind(this);
    this.setModalRef = this.setModalRef.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleBlur)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleBlur)
  }

  handleBlur(event) {
    if (this.modalRef && !this.modalRef.contains(event.target)) {
      this.setState({modal: false});
    }
  }

  setModalRef(node) {
    this.modalRef = node;
  }

  toggleModal() {
    this.setState({modal: !this.state.modal});
  }

  displayModal() {
    if (this.state.modal) {
      return <Modal setModalRef={this.setModalRef} toggleModal={this.toggleModal} />;
    }
  }

  render() {
    return (
      <div className="personal">
        {this.displayModal()}
        <Header />
        <Terminal toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default Personal;
