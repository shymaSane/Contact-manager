import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    //you can put the props type here but its better to have it down there alone
    static propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }
    render(props) {
        // object deconstruction 
        const {name, email, phone} = this.props;
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone Number: {phone}</li>
                </ul>
            </div>
        );
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
// }

export default Contact;