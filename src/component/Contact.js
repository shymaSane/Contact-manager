import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  {Consumer} from '../Context.js'




class Contact extends Component {
    constructor(props){
        super(props)
        this.state={isToggle: false};

        this.handleView = this.handleView.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleView(){
        this.setState((state) => ({
            isToggle: !state.isToggle
        }))
    }

    onDelete(){
        this.props.deleteClickHandler();
    }
   
    render() {
        // object deconstruction 
        const {contact} = this.props;
        return (
            <div className="card my-2">
            <div className="card-body">
                <h4 className="card-title" style={{cursor:'pointer'}} onClick={this.handleView}>{contact.name} </h4>
                
                {this.state.isToggle?  <ul className="list-group">
                <li className="list-group-item">Email: {contact.email}</li>
                <li className="list-group-item">Phone Number: {contact.phone}</li>
                <button className="btn btn-danger" onClick={this.onDelete}>Delete Contact</button> 
                </ul>: null}
                
            </div>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;