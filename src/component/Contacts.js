import React, { Component } from 'react';
import Contact from './Contact.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { GET_CONTACTS, DELETE_CONTACT } from '../actions/type';

class Contacts extends Component {
    
    componentDidMount (){
        this.props.getContacts()
    }

    deleteContact(id){
        this.props.deleteContact(id)
    }
  

  render() {
      
      const {contacts} = this.props;
      console.log(this.props)
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

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

// it maps the state variables from your store to the props that you specify
const mapStateToProps = (state) =>({
    //contact is what we called it rootReducers
    contacts: state.contact.contacts
})

//if you don't specify the second argument to connect(), you'll get dispatch injected as a prop in your component

const mapDispatchToProps = (dispatch) => ({
    getContacts: () => dispatch({type: GET_CONTACTS}),
    deleteContact: (id) => dispatch({type: DELETE_CONTACT, payload: id})
}) 

//in connect we put first any thing we want to map from store to this component, second anything we want to dispatch 
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);