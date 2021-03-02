import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Walkthrough from './Walkthrough.js';
import Form from './Form';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/walkthrough' component={Walkthrough}/>
        <Route path='/form' component={Form}/>
        <Route path='/locator' component={Main}/>
    <App />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
