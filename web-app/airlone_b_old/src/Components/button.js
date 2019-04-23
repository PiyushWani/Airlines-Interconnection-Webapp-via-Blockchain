import React from 'react';
import './button.css';
const button = (props)=>{
	console.log("In button, Value: "+props.buttonValue)
	return(
			<div >
				<button className="button" value={props.buttonValue} onClick={props.buttonClicked}>{props.buttonLabel}</button>
			</div>
		);
}

export default button;