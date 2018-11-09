import React, { Component } from 'react';
import Contact from './Contact';
import  {Consumer} from '../Context'

class Contacts extends Component {

  render() {
      return(
          <Consumer>
            { value => {
                const {contacts} = value;
                console.log(contacts)
                return(
                    <div>
                        {contacts.map((contact) => <Contact
                            key = {contact.id} 
                            contact = {contact} 
                        />)}
                    </div>
                )
            }}
          </Consumer>
      )
  }
}

export default Contacts