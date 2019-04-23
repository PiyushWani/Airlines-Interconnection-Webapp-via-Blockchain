import React from 'react';
import Button from './button.js'
import './header.css';
const header = (props) => {
	return(
		<div>

			<div className="header"> 
				<div className="left-margin-20  glow-red">
					Kingfisher Airlines
				</div>
				<div className="set-auto-margin">
					{props.lastname}, {props.firstname}
				</div>

				<div className="side-margin5">
					<Button buttonLabel={'Request Change'}
							buttonValue={'No value yet'}
							buttonClicked = {props.requestClicked}
					/>
				</div>
				<div className="side-margin5">
					<Button buttonLabel={'Notifications'}
							buttonValue={'No value yet'}
							buttonClicked = {props.notificationsClicked}
					/>
				</div>
				<div className="side-margin5">
					<Button buttonLabel={'Logout'}
							buttonValue={'No value yet'}
							buttonClicked = {props.logoutClicked}
					/>
				</div>
			</div>
		</div>
		);
}
export default header;