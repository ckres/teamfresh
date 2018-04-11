import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './Login.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';
import Background from '../assets/Cover.jpg';

var sectionStyle = {
  height: "100vh",
  width: "100vw",
  backgroundImage: "url(" + Background + ")",
  position: "fixed",
  margin: "-15px"
};
export default class Login extends Component {
  state = {
		  
  }
  
  render() {
    const { deals } = this.state
    return (
	<section style={ sectionStyle }>
      <div className="login-container">
      <ReactCSSTransitionGroup
      transitionName="example" transitionAppear={true}
      transitionAppearTimeout={3000}>
	      <img src={logoTitle} alt="FreshSpire" className="img-format"/>
	      <div className="login-credentials">
	      	<label>Username <input type="text"/></label>
	      </div>
		  <div className="login-credentials">
		    <label>Password <input type="password"/></label>
		  </div>
		  <div className="btn-submit">
		    <input type="button" value="Login" />
		  </div>
		  <div className="btn-submit">
		    <input type="button" value="Sign Up"/>
		  </div>
      </ReactCSSTransitionGroup>
        
      </div>
      </section>
    )
  }
}