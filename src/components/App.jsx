import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../store/configureStore'
import UserSubmit from './UserSubmit'
import Registration from './Registration';
import Login from './Login'
import Nav from './Nav';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/usersubmit" component={UserSubmit} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App
