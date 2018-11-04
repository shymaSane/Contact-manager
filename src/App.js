import React, { Component } from 'react';
import './App.css';
// import Contact from './component/Contact';
import Header from './component/Header';
import './component/Contacts'
import Contacts from './component/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager1"/>
        <div className = "container">
            {/* <Contact name="shyma al sane" email="shyma@gmail.com" phone="444-444-4444" />
            <Contact name="Jumana al sane" email="jumana@gmail.com" phone="342-544-4444" /> */}
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
