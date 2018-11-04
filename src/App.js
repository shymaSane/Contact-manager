import React, { Component } from 'react';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager1"/>
        <div className = "container">
            <Contact name="shyma al sane" email="shyma@gmail.com" phone="444-444-4444" />
            <Contact name="Jumana al sane" email="jumana@gmail.com" phone="342-544-4444" />
        </div>
      </div>
    );
  }
}

export default App;
