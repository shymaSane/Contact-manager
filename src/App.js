import React, { Component } from 'react';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
      </div>
    );
  }
}

export default App;
