import React, { useState } from 'react';
import './App.css';
// import { useForm } from "react-hook-form";
import ProfileContainer from './ProfileContainer'
// import LoginRegisterForm from './LoginRegisterForm'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import Header from './Header'
// import { Message } from 'semantic-ui-react'
// import Flash from './Flash'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserUsername, setLoggedInUserUsername] = useState('')
  // const [message, setMessage] = useState('')

  const register = async (registerInfo) => {
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
      const registerJson = await registerResponse.json()

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
          <Header 
            username={loggedInUserUsername}
            logout={logout}
          />
          <ProfileContainer />
        </React.Fragment>
        :
        <React.Fragment>
        <RegisterForm register={register}
        />
        <LoginForm login={login}/>
        </React.Fragment>
      }
        <div className="footer-style">
          <footer><small>built by jbi</small></footer>
        </div>
    </div>
  );    

}










  // const UserGreeting = async () => {
  //   try {
  //     const message = await return <h1>Welcome back!</h1> 
  //   } 
  //   catch(err) {
  //     console.error(err)
  //   }
  // }

  // const GuestGreeting = async () => {
  //   return <h1>Please sign up.</h1>
  // }

  // const Greeting = async () => {
  //     if (loggedIn) {
  //       return <UserGreeting />
  //     }
  //   return <GuestGreeting />
  // }

  // const [open, setOpen] = useState(false)

  // const profileFill = async (user) => {
  //   const moreInfo = ['name', 'clean_pref', 'fenced_pref', 'busy_pref', 'big_pref', 'note']
  //   for(let [key, value] of Object.entries(user)) {
  //     if(moreInfo.includes(key)) {
  //       if(value === '' || value === null) {
  //       setOpen(true)
  //       }
  //     }
  //   }
  // }
