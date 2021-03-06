import React, { Component } from 'react';
import {Consumer} from '../../Context';
//to generate ids:
import FormUi from '../ui/FormUi';
import axios from 'axios'

 class EditContact extends Component {
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

    async componentDidMount() {
        const id = this.props.match.params.id
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const {name, phone, email} = res.data
        this.setState({
            name,
            email,
            phone
        })
        
    }

    onSubmit = async (dispatch, e) =>{
        e.preventDefault();
        //calling add function
        const {name, email, phone} = this.state;
        const user = {name, email, phone}
        const {id} = this.props.match.params
        //post the new user first to Json place holder ap first then post it to the ui
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {user})
        // const data = {id, ...res.data.user}
        // console.log(data)
        dispatch({type: 'UPDATE_CONTACT', payload: res.data})
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
                        <h3>Edit <span className="text-info">Contact</span></h3>
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
                                    <button type="submit" className="btn btn-block btn-light">Update Contact</button>
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

export default EditContact;