import React, { Component } from 'react';
import './App.css';
import {Provider} from './Context'
import Header from './component/ui/Header';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';



class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header title="Contact Manager"/>
          <AddContact />
          <div className = "container">
             <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
