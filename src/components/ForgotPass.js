
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './ForgotPass.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

export default class ForgotPass extends Component {
  state = {

  }

  render() {
    return (
      <div className="Forgot-container">
				<div className="forgot-wrapper">
					<img src={logoTitle} alt="FreshSpire" className="img-format-forgot"/>
					<div className="forgot-pass-instructions">
						If you do not have an account, <Link to="/signup"><span className="link-to-sign">click here</span></Link> to set up
						a new account. Otherwise, type in your email and wait for your recovery details.
					</div>
					<div className="Forgot-context">
						<label>Email <input type="text"/></label>
					</div>
					<div className="btn-submit-forgot">
						<button>Submit</button>
					</div>
					<Link to="/login">
						<span className="link-back-to-login2">Back to Login</span>
					</Link>
				</div>	
      </div>
    )
  }
}