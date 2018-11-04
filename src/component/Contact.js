import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    render(props) {
        // object deconstruction 
        const {contact} = this.props;
        return (
            <div className="card my-2">
            <div className="card-body">
                <h4 className="card-title">{contact.name}</h4>
                <ul className="list-group">
                <li className="list-group-item">Email: {contact.email}</li>
                <li className="list-group-item">Phone Number: {contact.phone}</li>
                </ul>
            </div>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;