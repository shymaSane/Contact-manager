import React, { Component } from 'react';
import Contact from './Contact.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Contacts extends Component {
  

    deleteContact(id){
        const {contacts} = this.state;
        const newConacts = contacts.filter((contact) => id !== contact.id)
        this.setState({
            contacts: newConacts
        })
    }
  

  render() {
      const {contacts} = this.props;
    return (
      <div>
          {
              contacts.map((contact) => <Contact
              key = {contact.id} 
              contact = {contact} 
              deleteClickHandler={this.deleteContact.bind(this, contact.id)}
               />)
          }
      </div>
    )
  }
}

// it maps the state variables from your store to the props that you specify
const mapStateToProps = (state) =>({
    //contact is what we called it rootReducers
    contacts: state.contact.contacts
})


//in connect we put first any thing we want to map from store to this component, second anything we want to dispatch 
export default connect(mapStateToProps)(Contacts);