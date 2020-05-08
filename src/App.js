import React, { Component } from 'react';
import './App.css';
import ProfileContainer from './ProfileContainer'
import LoginRegisterForm from './LoginRegisterForm'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      loggedInUserEmail: ''
    }
  }


  register = async (registerInfo) => {
      console.log("register() in App.js called with the following info", registerInfo);    
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
      try {
        const registerResponse = await fetch(url, {
          credentials: 'include',
          method: 'POST',
          body: JSON.stringify(registerInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log("registerResponse", registerResponse);
        const registerJson = await registerResponse.json()
        console.log("registerJson", registerJson);
        if(registerResponse.status === 201) {
          this.setState({
            loggedIn: true,
            loggedInUserEmail: registerJson.data.email
          })
        }
      } catch(err) {
        console.error("Error trying to register with API")
        console.error(err)      
      }
    }

  login = async (loginInfo) => {
    console.log("login() in App.js called with the following info", loginInfo);    
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
    try {
      const loginResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("loginResponse", loginResponse);
      const loginJson = await loginResponse.json()
      console.log("loginJson", loginJson);
      if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUserEmail: loginJson.data.email
        })
      }
    } catch(error) {
      console.error("Error trying to log in")
      console.error(error)
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <ProfileContainer />
          :
          <LoginRegisterForm 
            login={this.login}
            register={this.register}
          />
        }
      </div>
    )
  }
}
