import React, { useState } from 'react'
import { Form, Button, Modal, Header, Input, Select, } from 'semantic-ui-react'
import '../index.css'

export default function EditUserModal({ userToEdit, updateUser, closeModal }) {
  const [user, setUser] = useState(userToEdit)
  const handleChange = event => setUser({ ...user, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(user)
  }

  return(
    <Modal open={true} closeIcon={true} onClose={closeModal}> 
      <Header>
        <h3>Enter new info</h3>
      </Header>
        <Button type="Submit">Submit</Button>
    </Modal>
  )
}




