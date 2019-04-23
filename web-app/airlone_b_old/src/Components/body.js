import React from 'react';
import './body.css';
const body = (props) =>{
	
	const REQUEST = "REQUEST";
	const NOTIFICATIONS = "NOTIFICATIONS";
	console.log("Display in body.js: ", props.display);
	switch(props.display){
		case REQUEST:
			return(
				<div className="grid-container">
					  <div></div> 				  
					  <div className="grid-item">
					  	You cannot request at this moment!
					  </div>				  
					  <div></div>  
				</div>
			)
		break;
		case NOTIFICATIONS:
			return(
				<div className="grid-container">
					  <div></div> 				  
					  <div className="grid-item">
					  	No notification found!
					  </div>				  
					  <div></div>  
				</div>
			)
		break;
	}	
}
export default body;