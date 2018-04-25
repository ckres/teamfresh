import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { 
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'
import { ViewDealsRoute, SignUpRoute, LoginRoute, HistoryRoute } from './components/routes'
import PrivateRoute from './components/PrivateRoute'

import './App.css'
import UserStore from './stores/UserStore';

@inject('userStore')
@observer
class App extends Component {
  componentDidMount() {
    this.props.userStore.initUser()
  }

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
            component={ViewDealsRoute}
          />
          <Route
          	exact
          	path={'/history'}
          	render={() => {
          		return <HistoryRoute />
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
