import React, { useState } from 'react'
import { Form, Button, Modal, Header, Input, Select, Label } from 'semantic-ui-react'
import '../index.css'

export default function EditUserModal({ userToEdit, updateUser, closeModal }) {
  const [userPrefs, setUserPrefs] = useState(userToEdit)
  console.log("****** EDIT USER MODAL USER PREFS *****", userPrefs);
  const handleChange = event => setUserPrefs({ ...userPrefs, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(setUserPrefs)
    // ASK IF THIS SHOULD JUST BE userPrefs
    closeModal()
  }


  return(
    <Modal open={true} closeIcon={true} onClose={closeModal}> 
      <Header>
        <h3>Edit Preferences</h3>
      </Header>
      <Modal.Content>
        <h3>{userPrefs.name}'s Preferences</h3>
        <Form onSubmit={handleSubmit} className="this-form">
          <div className="two-columns">
          <Label>How important is a clean dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Very'
            value='3'
            checked={userPrefs.clean_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Kinda'
            value='2'
            checked={userPrefs.clean_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Meh...'
            value='1'
            checked={userPrefs.clean_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a big dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Very'
            value='3'
            checked={userPrefs.big_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Kinda'
            value='2'
            checked={userPrefs.big_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Meh...'
            value='1'
            checked={userPrefs.big_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a fenced-in dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Very'
            value='3'
            checked={userPrefs.fenced_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Kinda'
            value='2'
            checked={userPrefs.fenced_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Meh...'
            value='1'
            checked={userPrefs.fenced_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a busy dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Very'
            value='3'
            checked={userPrefs.busy_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Kinda'
            value='2'
            checked={userPrefs.busy_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Meh...'
            value='1'
            checked={userPrefs.busy_pref === '1'}
            onChange={handleChange}
          />
          </div>
          <Modal.Actions>
            <Button type="Submit">Update Preferences</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}




