
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditableLabel from 'react-inline-editing'
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

    this._handleFocus = this._handleFocus.bind(this);
    this._handleFocusOut = this._handleFocusOut.bind(this);
}

_handleFocus(text) {
    console.log('Focused with text: ' + text);
}
 
_handleFocusOut(text) {
    console.log('Left editor with text: ' + text);
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
						<Link to={'/deals'}><input type="button" value="View Deals"/></Link>
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
	      	        <img src='https://seeklogo.com/images/O/organic-restaurant-logo-D34AC3E788-seeklogo.com.png' alt="profilePhoto" /> 
	            </div>
		    </div>
			<div className="edit-context">
				<strong>User Name:</strong>
				<EditableLabel text=' Avatar'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputMaxLength={50}
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            	/>
			</div>
			<div className="edit-context">
				<strong>Email: </strong>
				<EditableLabel text=' Avatar@gmail.com'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputMaxLength={50}
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            	/>
			</div>
			<div className="edit-context">
				<strong>Phone: </strong>
				<EditableLabel text=' 201-938-0483'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputMaxLength={50}
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            	/>
			</div>
			<div className="edit-context">
				<strong>Address: </strong>
				<EditableLabel text=' Wolf Ridge 1655'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputMaxLength={100}
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            	/>
			</div>
			<div className="edit-context">
				<strong>City/State/ZIP: </strong>
				<EditableLabel text='Raleigh/NC/27606'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputMaxLength={100}
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            	/>
			</div>
	        <div className="Profile-context">
		        <div className="btn-submit" >
						<input type="button" value="Order History"/>
				</div>
	        </div>	      		
	  </div>
	)
  }
}