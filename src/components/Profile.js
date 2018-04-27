
import React, { Component } from 'react'
import EditableLabel from 'react-inline-editing'
import Icon from 'react-icons-kit'
import { pencil } from 'react-icons-kit/icomoon/pencil'; 
import Menu from './Menu'
import './Profile.css'

export default class Profile extends Component {
state = {

}

_handleFocus = (text) => {
    console.log('Focused with text: ' + text);
}
 
_handleFocusOut = (text) => {
    console.log('Left editor with text: ' + text);
}

render() {
	return (
	    <div className="Profile-container">
				<Menu />
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
				<div><Icon icon={pencil}/></div>
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
				<div><Icon icon={pencil}/></div>
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
				<div><Icon icon={pencil}/></div>
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
				<div><Icon icon={pencil}/></div>
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
				<div><Icon size={16} icon={pencil}/></div>
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