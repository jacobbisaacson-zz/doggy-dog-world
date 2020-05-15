import React, { useState, useEffect } from 'react'
import AddUserForm from '../AddUserForm'
import UserList from '../UserList'
import EditUserModal from '../EditUserModal'

// need logic for rendering the modals vs the profiles / add forms

export default function UserProfile(props) {
  const [users, setUsers] = useState([])
  const [idOfUserToEdit, setIdOfUserToEdit] = useState(-1)

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

  const editUser = (idOfUserToEdit) => setIdOfUserToEdit(idOfUserToEdit)
  
  const closeModal = () => setIdOfUserToEdit(-1)

  return(
    <React.Fragment>
      <h3>User Profile</h3>
        <UserList 
          users={props.userPrefs}
          deleteUser={deleteUser}
          editUser={editUser}
        />
        {
          idOfUserToEdit !== -1
          &&
          <EditUserModal
            key={idOfUserToEdit}
            userToEdit={props.userPrefs}
            updateUser={props.updateUser}
            closeModal={closeModal}
          />
        }
    </React.Fragment>
  )
}






