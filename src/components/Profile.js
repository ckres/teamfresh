
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
	      	        <img src='http://lorempixel.com/500/500/people' alt="profilePhoto" /> 
	            </div>
				<div className="Profile-context">
					<p>User Name: Avatar</p>
				</div>
				<div className="Profile-context">
					<p>Email: Avatar@gmail.com</p>
				</div>
				<div className="Profile-context">
					<p>Phone: 201-938-0483</p>
				</div>
				<div className="Profile-context">
					<p>Address:  Wolf Ridge 1655 Raleigh NC 27606</p>
				</div>
		        <div className="Profile-context">
			        <p>Previous Order: </p>
			        <ul>
				        <li>Red Gala Apples</li>
				        <li>Ladyfinger Bananas</li>
				    </ul>
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