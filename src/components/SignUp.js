
import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'


import './SignUp.css'
import logoTitle from '../assets/logo.png';

export default class SignUp extends Component {
  state = {

  }

  render() {
    const { deals } = this.state
    return (
      <div className="SignUp-container">
	      <div className="SignUp-context">
	      	<input type="text" placeholder="Username"/>
	      </div>
		  <div className="SignUp-context">
		    <input type="text" placeholder="Password"/>
		  </div>
		  <div className="SignUp-context">
		    <input type="text" placeholder="Email"/>
		  </div>
		  <div className="SignUp-context">
		    <input type="text" placeholder="Phone number"/>
		  </div>
		  <div className="SignUp-context">
		    <input type="text" placeholder="Address"/>
		  </div>			  		  
		  <div className="btn-submit">
		    <input type="button" value="Sign Up"/>
		  </div>
        
      </div>
    )
  }
}