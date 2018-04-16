
import React, { Component } from 'react'


import './SignUp.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

export default class SignUp extends Component {
  state = {

  }

  render() {
    return (
      <div className="SignUp-container">
          <div className="sign-up-wrapper">
				<img src={logoTitle} alt="FreshSpire" className="img-format"/>
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
				<div className="btn-submit">
					<input type="button" value="Sign Up"/>
				</div>
			</div>	
      </div>
    )
  }
}