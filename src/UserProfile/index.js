import React, { useState, useEffect } from 'react'
import AddUserForm from '../AddUserForm'
// import { useForm } from 'react-hook-form'
// import UserList from '../UserList'
// import edit user modal

// maybe needs to get user_prefs instead of user... and ...user_prefs

export default function UserProfile(props) {
  console.log("THIS IS THE USER'S PROFILE (props in USER PROFILE)", props);
  const [users, setUsers] = useState([])
  // const [idOfUserToEdit, setIdOfUserToEdit] = useState(-1)
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/show"
      const usersResponse = await fetch(url, {
        credentials: 'include'
      })
      const usersJson = await usersResponse.json()
      setUsers(usersJson.data)
    } catch(err) {
      console.error("ERROR getting USER's DATA", err)
    }
  }

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

  return(
    <React.Fragment>
      <h3>User Profile</h3>
        <AddUserForm
          createUser={createUser}
        />
    </React.Fragment>
  )
}

        // <UserList
          // users={users}
          
        // />

// in here conditinal logic for displaying either the new user form or the edit user modal