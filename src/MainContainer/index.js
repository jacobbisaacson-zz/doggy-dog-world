import React, { useState } from 'react'
import Header from '../Header'
import ParkContainer from '../ParkContainer'
import DogProfile from '../DogProfile'
import UserProfile from '../UserProfile'
import AddUserForm from '../AddUserForm'

export default function MainContainer(props) {
  const [prefs, setPrefs] = useState(null)
  const [users, setUsers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserUsername, setLoggedInUserUsername] = useState('')

  const createUser = async (userToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/"
      const createUserResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(userToAdd),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const createUserJson = await createUserResponse.json()
      if(createUserResponse.status === 201) {
        setUsers([ ...users, createUserJson.data ])
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
        return( <AddUserForm /> )
      } else {
        return(
          <React.Fragment>
            <ParkContainer userPrefs={prefs} />
            <DogProfile />
            <UserProfile  
              userPrefs={prefs}
              createUser={createUser} />
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







