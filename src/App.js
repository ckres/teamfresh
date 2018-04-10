import React, { Component } from 'react'
import { 
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import { ViewDealsRoute } from './components/routes'
import { SignUpRoute } from './components/routes'

import logo from './assets/logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route
            exact
            path={'/'}
            render={() => {
              // default go to homepage
              return <Redirect to={'/deals'} />
            }}
          />
          <Route
            exact
            path={'/deals'}
            render={() => {
              // default go to homepage
              return <ViewDealsRoute />
            }}
          />
          <Route
            exact
            path={'/signup'}
            render={() => {
              // default go to homepage
              return <SignUpRoute />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App
