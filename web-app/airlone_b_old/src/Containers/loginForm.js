import React, {Component} from 'react';
import Button from '../Components/button.js';

import './login-form.css';
class loginForm extends Component{

	loginClicked = () =>{
		const uname = this.refs.username.value;
		const password =this.refs.password.value;
		this.props.loginClicked(uname, password);
	}

	render(){
		const title = "Kingfisher...";
		return(
			<div>
				<div className="title-styling">
					{title}	
				</div>
				<div className="title-styling small-font">
					Travel Royal & Elegant	
				</div>
				<div className="login-form">
					<div>
						<input ref="username" type="text" placeholder="username"/>
					</div>
					<div>
						<input ref="password" type="password" placeholder="password"/>
					</div>	
					<div>	
						<h4>{this.props.message}</h4>
					</div>
					<div>
						{<Button buttonLabel={'Login'} buttonClicked={this.loginClicked}/>}
					</div>
				</div>
			</div>
			);
	};


} 

export default loginForm; 