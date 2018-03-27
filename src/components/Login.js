import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'

import './Login.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Logotype-Green.png';

export default class Login extends Component {
  state = {

  }

  render() {
    const { deals } = this.state
    return (
      <div className="login-container">
        <img src={logoTitle} alt="FreshSpire" className="img-format"/>
        <div className="login-credentials">
          <input type="text" placeholder="Username"/>
        </div>
        <div className="login-credentials">
          <input type="text" placeholder="Password"/>
        </div>
        <div className="btn-submit">
          <input type="button" value="Login" />
        </div>
        <div className="btn-submit">
          <input type="button" value="Sign Up"/>
        </div>
      </div>
    )
  }
}