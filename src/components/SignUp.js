
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignUp.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

export default class SignUp extends Component {
  state = {

  }

  render() {
    return (
      <div className="SignUp-container">
          <div className="sign-up-wrapper">
				<img src={logoTitle} alt="FreshSpire" className="img-format-sign"/>
	            <div className="SignUp-context">
	      	        <label>Username <input type="text"/></label>
	            </div>
				<div className="SignUp-context">
					<label>Password <input type="password"/></label>
				</div>
				<div className="SignUp-context">
					<label>Repeat Password <input type="password"/></label>
				</div>
				<div className="SignUp-context">
					<label>Email <input type="text"/></label>
				</div>
				<div className="SignUp-context">
					<label> Phone # <input type="tel"/></label>
				</div>
				<div className="SignUp-context">
					<label>Street Address <input type="text"/></label>
				</div>
				<div className="SignUp-context">
				    <label>City <input type="text"/></label>
			    </div>
			    <div className="SignUp-context">
			        <label>State <input type="text"/></label>
		        </div>
		        <div className="SignUp-context">
			        <label>ZIP <input type="text"/></label>
		        </div>	
				<div className="btn-submit-sign">
					<button>Sign Up</button>
				</div>
				<Link to="/login">
				    <div className="link-back-to-login">Back to Login</div>
				</Link>
			</div>	
      </div>
    )
  }
}