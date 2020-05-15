import React, { useState, useEffect } from 'react'
import Header from '../Header'
import ParkContainer from '../ParkContainer'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'
import AddUserForm from '../AddUserForm'

export default function MainContainer(props) {
  const [prefs, setUserPrefs] = useState(null)
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserUsername, setLoggedInUserUsername] = useState('')

  useEffect(() => {
    getUserPrefs()
  }, [])

  const getUserPrefs = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/show"
      const usersResponse = await fetch(url, {
        credentials: 'include'
      })
      const usersJson = await usersResponse.json()
      console.log("users json data", usersJson);
      setUserPrefs(usersJson.data)

    } catch(err) {
      console.error("ERROR getting USER's PREFS DATA", err)
    }
  }

  const updateUser = async (updatedUserInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/"
    try {
      const updateUserResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updatedUserInfo), 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updateUserJson = await updateUserResponse.json()

      if(updateUserResponse.status === 200) {
        setUserPrefs(updateUserJson.data)
      }

    } catch(err) {
      console.error("Error updating User Pref info")
      console.error(err)
    }
  }

  const createUserPrefs = async (userToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/"
      const createUserPrefsResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(userToAdd),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const createUserPrefsJson = await createUserPrefsResponse.json()
      console.log("create user prefs json", createUserPrefsJson);
      if(createUserPrefsResponse.status === 201) {
        setUserPrefs(createUserPrefsJson.data)
      }
    } catch(err) {
      console.error("Error adding USER!! -- in CREATE USER in UserProfile", err)
    }
  }

  const showTheThing = () => {
    if (prefs === null) {
      return "Loading"
    } else {
      if(prefs.length === 0) {
        return( <AddUserForm createUserPrefs={createUserPrefs} /> )
      } else {
        return(
          <React.Fragment>
            <ParkContainer userPrefs={prefs} />
            <DogProfile />
            <UserProfile  
              userPrefs={prefs}
              createUserPrefs={createUserPrefs}
              updateUser={updateUser} 
            />
          </React.Fragment>
        )
      }
    }
  }

  return(
    <React.Fragment>
      <Header 
        username={loggedInUserUsername}
        logout={props.logout}
      />
      { showTheThing() }
    </React.Fragment>
  )
}


// this.showTheThing("hello")

    // if prefs is null return hello
    // if prefs is an empty array render the add user form
    // if its an array with something in it, render the other shit


  // put back {card color} in the description of the light color
  // add background color {card color} to the style
  // TONS OF STUFF INT HE PARK CONTAINER NEEDS TO BE ADDED BACK -- last commit







