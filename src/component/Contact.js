import React, { Component } from 'react';

class Contact extends Component {
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

export default Contact;