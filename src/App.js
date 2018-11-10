import React, { Component } from 'react';
import {Provider} from './Context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './component/ui/Header';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';
import About from './component/about/About'



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header title="Contact Manager"/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/about/:id" component={About} />
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
