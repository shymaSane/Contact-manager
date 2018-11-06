import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../Context'

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

    onDelete = (id, dispatch) => {
       dispatch({type: 'DELETE_CONTACT', payload: id})
    }
   
    render() {
        // object deconstruction 
        const {contact} = this.props;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    
                    return(
                        
                        <div className="card my-2">
                            <div className="card-body">
                                <h4 className="card-title" style={{cursor:'pointer'}} onClick={this.handleView}>{contact.name} </h4>
                                {this.state.isToggle?  <ul className="list-group">
                                <li className="list-group-item">Email: {contact.email}</li>
                                <li className="list-group-item">Phone Number: {contact.phone}</li>
                                <button className="btn btn-danger" onClick={this.onDelete.bind(this, contact.id, dispatch)}>Delete Contact</button> 
                                </ul>: null}
                            </div>
                        </div>
                    )
                    
                }}
            </Consumer>
            
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
   
}

export default Contact;