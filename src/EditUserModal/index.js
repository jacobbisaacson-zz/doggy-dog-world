import React, { useState } from 'react'
import { Form, Button, Modal, Header, Input, Select, Label } from 'semantic-ui-react'
import '../index.css'

export default function EditUserModal({ userToEdit, updateUser, closeModal }) {
  const [userPrefs, setUserPrefs] = useState(userToEdit)
  console.log(userPrefs, "******EDIT USER MODAL USERPREFS");
  const handleChange = event => setUserPrefs({ ...userPrefs, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(userPrefs)
    closeModal()
  }


  return(
    <Modal open={true} closeIcon={true} onClose={closeModal}> 
      <Header>
        <h3>Edit Preferences</h3>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <div className="two-columns">
          <Label>How important is a clean dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="clean_pref"
            value='3'
            checked={userPrefs.clean_pref === '3'}
            onChange={handleChange}
          />
          </div>
          <Modal.Actions>
            <Button type="Submit">Update Dog</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}




