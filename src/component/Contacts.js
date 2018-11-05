import React, { Component } from 'react';
import Contact from './Contact.js'

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
            contacts:
            [
                {
                    id:1,
                    name: 'shyma al sane',
                    email: 'shyma@gmail.com',
                    phone: '444-444-444'
                },
                {
                    id:2,
                    name: 'jumana al sane',
                    email: 'jumana@gmail.com',
                    phone: '444-444-444'
                },
                {
                    id:3,
                    name: 'rahma al sane',
                    email: 'rahma@gmail.com',
                    phone: '444-444-444'
                }
            ]
        }
    }


    deleteContact(id){
        const {contacts} = this.state;
        const newConacts = contacts.filter((contact) => id !== contact.id)
        this.setState({
            contacts: newConacts
        })
    }
  

  render() {
      const {contacts} = this.state;
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

export default Contacts