import React, { useState, useEffect } from 'react'
import AddUserForm from '../AddUserForm'
// import UserList from '../UserList'
// import edit user modal

export default function UserProfile() {
  const [users, setUsers] = useState([])
  // const [idOfUserToEdit, setIdOfUserToEdit] = useState(-1)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/"
      const usersResponse = await fetch(url, {
        credentials: 'include'
      })
      const usersJson = await usersResponse.json()
      setUsers(usersJson.data)
    } catch(err) {
      console.error("ERROR getting USERs DATA", err)
    }
  }

  const createUser = async (userToAdd) => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/"
      const createUserResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userToAdd)
      })
      const createUserJson = await createUserResponse.json()
      if(createUserResponse.status === 201) {
        setUsers([ ...users, createUserJson.data ])
      }
    } catch(err) {
      console.error("error adding user", err)
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