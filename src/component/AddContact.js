import React, { Component } from 'react'

 class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone: ''
    }

  render() {
      const{name, email, phone} = this.state
    return (
      <div className="container">
        <div className="card">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" required value={name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter Your Email" required value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone number">Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Your Phone Number" required value={phone}/>
                </div>
                <button type="submit" className="btn btn-block btn-light">Submit</button>
            </div>
        </div>
      </div>
    )
  }
}

export default AddContact;