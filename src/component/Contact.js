import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    render(props) {
        // object deconstruction 
        const {name, email, phone} = this.props;
        return (
            <div className="card my-2">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone Number: {phone}</li>
                </ul>
            </div>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default Contact;