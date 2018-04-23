
import React, { Component } from 'react'


import './Profile.css'
import logo from '../assets/logo.png'

export default class Profile extends Component {
state = {

}

constructor(props){
    super(props);

    this.state = {
      show: false
    }
    this.doSomething = this.doSomething.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
}

doSomething(e){
	e.preventDefault();
	console.log(e.target.innerHTML);
}

toggleShow(){
	this.setState({show: !this.state.show});
}

hide(e){
	if(e && e.relatedTarget){
		e.relatedTarget.click();
	}
	this.setState({show: false});
}

render() {
	return (
	    <div className="Profile-container">

		  	<div className="top-logo" style={{zIndex:999}}>
		    	<button className="btn-primary" type="button" onClick={this.toggleShow} onBlur={this.hide}>
		    	<img src={logo} alt="logo" style={{zIndex:999}} />
		    	</button>
		    	<div className="dropdown-menu" >
     			{
        			this.state.show &&
     			(
				    <ul className="dropdown-menu" style={{display: 'block'}}>
				    <li><div className="btn-submit" style={{zIndex:200}}>
				    	<input type="button" value="Profile"/>
				    </div></li>
				    <li><div className="btn-submit" style={{zIndex:200}}>
						<input type="button" value="View Deals"/>
					</div></li>
				    <li><div className="btn-submit" style={{zIndex:200}}>
						<input type="button" value="Shopping Cart"/>
					</div></li>
					<li><div className="btn-submit" style={{zIndex:200}}>
						<input type="button" value="Log Out"/>
					</div></li>
					<div className="background-circle" style={{zIndex:-1}} ></div>
				    </ul>
      			)
      			}
        		</div>   
			</div>
		    <div className="profile-wrapper">
	            <div className="avatar">
	      	        <img src='http://lorempixel.com/500/500/people' alt="profilePhoto" /> 
	            </div>
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
	        </div>	
	        <div className="Profile-context">
		        <ul>
			        <li>Red Gala Apples</li>
			        <li>Ladyfinger Bananas</li>
			    </ul>
	        </div>		      		
			<div className="btn-submit">
				<input type="button" value="Edit Profile"/>
			</div>
			
	  </div>
	)
  }
}