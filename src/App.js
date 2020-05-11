import React, { useState } from 'react';
import './App.css';
import ProfileContainer from './ProfileContainer'
// import LoginRegisterForm from './LoginRegisterForm'
import TESTLoginRegisterForm from './TESTLoginRegisterForm'
import Header from './Header'


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserUsername, setLoggedInUserUsername] = useState('')

  const register = async (registerInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"

    try {
      const registerResponse = await fetch(url, {
        credentials: 'include', // sends the cookie
        method: 'POST',
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const registerJson = await registerResponse.json()

      // LOOK AT FORM VALIDATION

      if(registerResponse.status === 201) {
        setLoggedIn(true)
        setLoggedInUserUsername(registerJson.data.username)
      }

    } catch(err) {
      console.error("Error trying to register with API")
      console.error(err)      
    }

  }

  const login = async (loginInfo) => {
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
      const loginJson = await loginResponse.json()

      if(loginResponse.status === 200) {
        setLoggedIn(true)
        setLoggedInUserUsername(loginJson.data.username)
      }

    } catch(error) {
      console.error("Error trying to log in")
      console.error(error)
    }

  }

  const logout = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"

      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      // const logoutJson = await logoutResponse.json()
      if(logoutResponse.status === 200) {
        setLoggedIn(false)
        setLoggedInUserUsername('')
      }

    } catch(error) {
      console.error("Error logging out")
      console.error(error)
    }
  }

  return (
    <div className="App">
      {
        loggedIn
        ?
        <React.Fragment>
          <Header username={loggedInUserUsername} logout={logout} />
          <ProfileContainer />
        </React.Fragment>
        :
        <TESTLoginRegisterForm 
          login={login}
          register={register}
        />
      }
    </div>
  );    

} // App end
