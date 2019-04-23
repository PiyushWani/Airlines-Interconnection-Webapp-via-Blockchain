import React, {Component} from 'react';
import Header from '../Components/header.js';
import Body from '../Components/body.js';

class Homepage extends Component{

	REQUEST = "REQUEST";
	NOTIFICATIONS = "NOTIFICATIONS";

	constructor(props){
		super(props);
		this.state = {
			display : this.REQUEST
		}
	}
	
	requestClicked = () =>{
		this.setState((prev) => ({display:this.REQUEST}));
	}

	notificationsClicked = () =>{
		this.setState((prev) => ({display:this.NOTIFICATIONS}))
	}

	render(){
	    const header = <Header 
	    					customerid = {this.props.memberDetails.customerid}
	    					firstname = {this.props.memberDetails.firstname}
	    					lastname = {this.props.memberDetails.lastname}
	    					logoutClicked = {this.props.logoutClicked}
	    					requestClicked	= {this.requestClicked}
	    					notificationsClicked = {this.notificationsClicked}
	    				/>
	    const body = <Body display={this.state.display}/>

		return(
					<div>
						{header}
						<div>SPACE</div>
						<div>SPACE</div>
						{body}
					</div>
				);
	}		
}

export default Homepage;