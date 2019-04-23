import React, { Component } from 'react';
import LoginForm from './Containers/loginForm.js'
import Homepage from './Containers/Homepage.js'

import './App.css';
class App extends Component {
  
  FRESH = "FRESH";
  VALID_USER = "VALID_USER";
  INVALID_USER = "INVALID_USER";

  constructor(){
    super();
    this.state = {
      display: 'FRESH'
    }
  }

  loginClicked = (uname, password) =>{
    console.log(uname, password);
    //Write fetch method here to validate if uname and password are correct
    if(uname === "abhav" && password === "pass"){
          this.setState((prev)=>({display:this.VALID_USER}));
    }
    else{
        this.setState((prev)=>({display:this.INVALID_USER}));
    }
  }

  logoutClicked = () =>{
    this.setState((prev)=>({display:this.FRESH}));
  }

  render() { 
    let message = '';
    console.log("Current display : "+this.state.display)
    switch(this.state.display){
      case this.FRESH:
        return (
          <div className='form-position'>
            {<LoginForm message={message} loginClicked={this.loginClicked}/>}
          </div>
        );
      break;

      case this.VALID_USER:
        console.log('You are in!');
        const memberDetails = {
                                customerid : 1001,
                                firstname  : 'Abhav',
                                lastname   : 'Luthra'
                              }
        return(
                <div>
                  {<Homepage memberDetails={memberDetails} logoutClicked={this.logoutClicked}/>}
                </div>
              );
        
      break;

      case this.INVALID_USER:
        message = "Incorrect Username or Password";
        return (
          <div className='form-position'>
          {<LoginForm message={message} loginClicked={this.loginClicked}/>}
          </div>
        );
      break;
    }
    
  }
}

export default App;
