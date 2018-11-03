import React, { Component } from 'react';
import './App.css';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Contact Manager</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
