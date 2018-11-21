import React, { Component } from 'react';
import './App.css';
// import Contact from './component/Contact';
import Header from './component/Header';
import './component/Contacts'
import Contacts from './component/Contacts';
import {Provider} from 'react-redux';
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="Contact Manager1"/>
          <div className = "container">
              <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
