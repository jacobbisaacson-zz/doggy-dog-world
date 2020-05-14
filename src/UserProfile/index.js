import React, { useState, useEffect } from 'react'
import AddUserForm from '../AddUserForm'
// import { useForm } from 'react-hook-form'
import UserList from '../UserList'
import EditUserModal from '../EditUserModal'

// maybe needs to get user_prefs instead of user... and ...user_prefs

export default function UserProfile() {
  // console.log("THIS IS THE USER'S PROFILE (props in USER PROFILE)", props);
  const [users, setUsers] = useState([])
  const [idOfUserToEdit, setIdOfUserToEdit] = useState(-1)
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

  const deleteUser = async (idOfUserToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/" + idOfUserToDelete
    try {
      const deleteUserResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      if(deleteUserResponse.status === 200) {
        setUsers(users.filter(user => user.id !== idOfUserToDelete))
      }
    } catch(err) {
      console.error("Error deleting User's prefs:");
      console.error(err);
    }
  }

  // console.log("USERS IN UserProfile", users);

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

  const editUser = (idOfUserToEdit) => setIdOfUserToEdit(idOfUserToEdit)

  const updateUser = async (updatedUserInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/user_prefs/" + idOfUserToEdit
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
        const indexOfUserBeingUpdated = users.findIndex(user => user.id === idOfUserToEdit)
        users[indexOfUserBeingUpdated] = updateUserJson.data
        setUsers(users)
        setIdOfUserToEdit(-1)
      }

    } catch(err) {
      console.error("Error updating User Pref info")
      console.error(err)
    }
  }

  const closeModal = () => setIdOfUserToEdit(-1)

  return(
    <React.Fragment>
      <h3>User Profile</h3>
        <UserList 
          users={users}
          deleteUser={deleteUser}
          editUser={editUser}
        />
        <AddUserForm
          createUser={createUser}
        />
        {
          idOfUserToEdit !== -1
          &&
          <EditUserModal
            key={idOfUserToEdit}
            userToEdit={users.find((user) => user.id === idOfUserToEdit)}
            updateUser={updateUser}
            closeModal={closeModal}
          />
        }
    </React.Fragment>
  )
}

// edit or other crud in here?

// in here conditinal logic for displaying either the new user form or the edit user modal