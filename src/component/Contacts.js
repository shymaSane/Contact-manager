import React, { Component } from 'react';
import Contact from './Contact';
import  {Consumer} from '../Context'

class Contacts extends Component {
    deleteContact(id){
        const {contacts} = this.state;
        const newConacts = contacts.filter((contact) => id !== contact.id)
        this.setState({
            contacts: newConacts
        })
    }
  

  render() {
      return(
          <Consumer>
            { value => {
                const {contacts} = value;
                return(
                    <div>
                        {contacts.map((contact) => <Contact
                            key = {contact.id} 
                            contact = {contact} 
                            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />)}
                    </div>
                )
            }}
          </Consumer>
      )
  }
}

export default Contacts