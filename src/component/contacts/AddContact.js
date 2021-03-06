import React, { Component } from 'react';
import {Consumer} from '../../Context';
//to generate ids:
import FormUi from '../ui/FormUi';
import axios from 'axios'

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

     onSubmit = async (dispatch, e) =>{
        e.preventDefault();
        //calling add function
        const {name, email, phone} = this.state;
        const user = {name, email, phone}
        //post the new user first to Json place holder ap first then post it to the ui
        const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
        dispatch({type: 'ADD_CONTACT', payload:{id: res.data.id, ...res.data.user}})
        //clear inputs
        this.setState({
            name: '',
            email: '',
            phone: ''
        })

        //redirect to home page
        this.props.history.push('/')

    }

  render() {
      const{name, email, phone} = this.state
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div>
                        <h3>Add New <span className="text-info">Contact</span></h3>
                        <div className="card">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <FormUi 
                                        label = "Name:"
                                        name= "name"
                                        placeholder= "Enter Your Name"
                                        value= {name}
                                        onChange= {this.handelChange}
                                    />
                                    <FormUi 
                                        label = "Email:"
                                        name= "email"
                                        type= "email"
                                        placeholder= "Enter Your Email"
                                        value= {email}
                                        onChange= {this.handelChange}
                                    />
                                    <FormUi 
                                        label = "Phone Number:"
                                        name= "phone"
                                        placeholder= "Enter Your Phone Number"
                                        value= {phone}
                                        onChange= {this.handelChange}
                                    />
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