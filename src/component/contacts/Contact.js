import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../Context'
import axios from 'axios';
import {Link} from 'react-router-dom';

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

    onDelete = async (id, dispatch) => {
        //delete from the server first then delete frm the dom
        //it wont delete the new added contact because they are not exist in the api 
        //so we ll only delete from the dom(added try and catch)
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type: 'DELETE_CONTACT', payload: id})
        } catch (e){
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }
        
       
    }
   
    render() {
        // object deconstruction //
        const {contact} = this.props;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className="card my-2">
                            <div className="card-body">
                                <div className="d-flex">
                                     <h4 className="card-title" style={{cursor:'pointer'}} onClick={this.handleView}>{contact.name} </h4>
                                     <h6 className=" ml-auto text-info d-inline" style={{cursor:'pointer'}}><Link to={`contact/edit/${contact.id}`}>Edit</Link></h6> 
                                </div>
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