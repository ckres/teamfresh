
import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'


import './SignUp.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Mono.png';

export default class SignUp extends Component {
  state = {

  }

  render() {
    const { deals } = this.state
    return (
      <div className="SignUp-container">
          <img src={logoTitle} alt="FreshSpire" className="img-format"/>
          <p className="caption-content">Optimizing food distribution, one community at a time.</p>
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
		    <label> Phone # <input type="text"/></label>
		  </div>
		  <div className="SignUp-context">
		    <label>Address <input type="text"/></label>
		  </div>			  		  
		  <div className="btn-submit">
		    <input type="button" value="Sign Up"/>
		  </div>
        
      </div>
    )
  }
}