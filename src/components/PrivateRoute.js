import React, { Component } from 'react'
import { observer, inject, useStaticRendering } from 'mobx-react'
import { Route } from 'react-router-dom'
import Login from './Login'

@inject('userStore')
@observer
export default class PrivateRoute extends React.Component {
  componentDidMount() {
    // TODO: this is a hack for not reacting to when user has already logged in
    // probably it's a mobx-react issue
    this.forceUpdate()
  }

  render() {
    const { component: Component, userStore, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={(props) => 
          userStore.hasLoggedIn ? (
            <Component {...props} />
          ) : (
            <Login
              from={props.location}
            />
          )
        }
      />
    )
  }
}
