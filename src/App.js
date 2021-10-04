import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main'
import Favourite from './components/Favourite'
import Header from './components/Header'
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';


class App extends Component {
  render() {
    return (
      <><Header /> {this.props.auth0.isAuthenticated?(<> <LogoutButton/><Router>

        <Switch>

          <Route path="/favourets">
            <Favourite />
          </Route>
          <Route path="/">
            <Main />
          </Route>

        </Switch>

      </Router></>):<LoginButton/>}
       </>

    )
  }
}

export default withAuth0(App)
