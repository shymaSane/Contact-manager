import React, { Component } from 'react';
import {Consumer} from '../Context';
//ro generate ids:
import uuid from 'uuid';

 class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone: ''
    }
    //We didnt bind it since we use ES6
    handelChange = (e) =>{
        //to prevent it frm being read only form
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (dispatch, e) =>{
        e.preventDefault();
        //calling add function
        const {name, email, phone} = this.state;
        dispatch({type: 'ADD_CONTACT', payload:{id: uuid(), name, email, phone}})
        console.log(dispatch.payload)
        //clear inputs
        this.setState({
            name: '',
            email: '',
            phone: ''
        })

    }

  render() {
      const{name, email, phone} = this.state
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className="container">
                        <div className="card">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" name="name" placeholder="Enter Your Name" required value={name} onChange={this.handelChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" name="email" placeholder="Enter Your Email" required value={email} onChange={this.handelChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone number">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" placeholder="Enter Your Phone Number" required value={phone} onChange={this.handelChange}/>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-light">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
      
    )
  }
}

export default AddContact;