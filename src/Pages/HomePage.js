import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Modal from '../components/Modal';
import FormRegistration  from '../components/Form_registration';
import * as sandboxAPI from '../services/sandbox-api';
import { Button } from 'reactstrap';

class HomePage extends Component{

  state={
    posts: [],
    formSubmited: false,
    isOpen: false
  };

  componentDidMount(){
    sandboxAPI.fetchPosts().then(posts => this.setState({posts}));
  }

  handleSubmitForm = (data) =>{
    console.log(data);
    this.setState({
      formSubmited: !this.state.formSubmited,
      isOpen: !this.state.isOpen
    })
  };

  openModal = () => this.setState({isOpen: !this.state.isOpen});
  formSubmited = () => this.setState({formSubmited: !this.state.formSubmited});

  render(){
    const {formSubmited, isOpen} = this.state;

    return (
      <div>
        <Button color="success" onClick={this.openModal}>Open</Button>

        {isOpen && (
          <Modal isOpena={isOpen} onToggle={this.openModal}>
            <FormRegistration onSubmit={this.handleSubmitForm}/>
          </Modal>
        )}

        {formSubmited && (
          <Modal isOpena={formSubmited} onToggle={this.formSubmited}>
            CONGRATULATONS
          </Modal>
        )}

      </div>
    )
  }
}

export default HomePage;