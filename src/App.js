import React, { Component } from 'react'
import { 
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import { ViewDealsRoute } from './components/routes'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route
            exact
            path={'/deals'}
            render={() => {
              // default go to homepage
              return <ViewDealsRoute />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App
