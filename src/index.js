import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Actions from './components/Actions';
import Sources from './components/Sources';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/actions" component={Actions} />
        <Route path="/sources" component={Sources} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
