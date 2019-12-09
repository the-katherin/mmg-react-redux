import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from '../../store';
import WelcomeWindow from './WelcomeWindow';
import Form from './Form';
import Game from './Game';
import Results from './Results';
import NotFoundPage from './NotFoundPage/NotFoundPage'

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={WelcomeWindow} />
            <Route path="/form" component={Form} />
            <Route path="/game" component={Game} />
            <Route path="/results" component={Results} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
