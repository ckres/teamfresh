
import React, { Component } from 'react'


import './Profile.css'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

export default class Profile extends Component {
  state = {

  }

  render() {
    return (
      <div className="Profile-container">
          <div className="profile-wrapper">
				<img src={logoTitle} alt="FreshSpire" className="img-format"/>
	            <div className="avatar">
	      	        <img src='http://lorempixel.com/500/500/people' /> 
	            </div>
	            <div className="Profile-context">
					<p>User Name: <userData> Avatar</userData></p>
				</div>
				<div className="Profile-context">
					<p>Email: <userData> Avatar@gmail.com</userData></p>
				</div>
				<div className="Profile-context">
					<p>Phone: <userData> 201-938-0483</userData></p>
				</div>
				<div className="Profile-context">
					<p>Address:  <userData> Wolf Ridge 1655 Raleigh NC 27606</userData></p>
				</div>
		        <div className="Profile-context">
			        <p>Previous Order: </p>
		        </div>		
				<div className="btn-submit">
					<input type="button" value="Back to Menu"/>
					<input type="button" value="Change Profile"/>
				</div>
			</div>	
      </div>
    )
  }
}