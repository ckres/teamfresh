
import React, { Component } from 'react'
import EditableLabel from 'react-inline-editing'
import Menu from './Menu'
import './Profile.css'
import logo from '../assets/logo.png'

export default class Profile extends Component {
state = {

}

_handleFocus = (text) => {
}
 
_handleFocusOut = (text) => {
}

render() {
	return (
	    <div className="Profile-container">
				<Menu />
		    <div className="profile-wrapper">
					<div className="avatar">
						<img 
							src={logo}
							alt="profilePhoto"
							style={{ backgroundColor: '#fff' }}
						/> 
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
	  </div>
		)
  }
}