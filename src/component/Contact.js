import React, { Component } from 'react';
import PropTypes from 'prop-types';




class Contact extends Component {
    constructor(){
        super()
        this.state={isToggle: false};

        this.handleView = this.handleView.bind(this);
    }

    handleView(){
        this.setState((state) => ({
            isToggle: !state.isToggle
        }))
    }
   
    render(props) {
        // object deconstruction 
        const {contact} = this.props;
        return (
            <div className="card my-2">
            <div className="card-body">
                <h4 className="card-title" style={{cursor:'pointer'}} onClick={this.handleView}>{contact.name} </h4>
                {this.state.isToggle?  <ul className="list-group">
                <li className="list-group-item">Email: {contact.email}</li>
                <li className="list-group-item">Phone Number: {contact.phone}</li>
                </ul> : null}
               
            </div>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;