import React, { Component } from 'react'
import { 
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import { ViewDealsRoute } from './components/routes'
import { LoginRoute } from './components/routes'

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
              //default go to homepage
              return <Redirect to={'/login'} />
            }}
          />
            <Route
            exact
            path={'/login'}
            render={() => {
              return <LoginRoute />
            }}
          />
            <Route
            exact
            path={'/deals'}
            render={() => {
              return <ViewDealsRoute />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App
