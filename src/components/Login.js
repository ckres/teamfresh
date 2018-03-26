import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'

import './Login.css'

export default class Login extends Component {
  state = {

  }

  render() {
    const { deals } = this.state
    return (
      <div className="welcome">
      <br />
      <br />
      <br />
      <br />
        <div className="username">
          <input type="text" />
        </div>
          <div className="password">
          <input type="text" />
        </div>
          <button type="button">Login</button>
          <br />
          <button type="button">Sign Up</button>

      </div>
    )
  }
}