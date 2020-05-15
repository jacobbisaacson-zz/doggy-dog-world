import React, { useState } from 'react'
import { Form, Button, Modal, Header, Input, Select, Label } from 'semantic-ui-react'
import '../index.css'

export default function EditUserModal({ userToEdit, updateUser, closeModal }) {
  const [userPrefs, setUserPrefs] = useState(userToEdit)
  console.log(userPrefs, "******EDIT USER MODAL USERPREFS");
  console.log(userPrefs[0].big_pref, "big pref with brackets");
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
        <h3>{userPrefs[0].name}'s Preferences</h3>
        <Form onSubmit={handleSubmit} className="this-form">
          <div className="two-columns">
          <Label>How important is a clean dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Very'
            value='3'
            checked={userPrefs[0].clean_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Kinda'
            value='2'
            checked={userPrefs[0].clean_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="clean_pref"
            label='Meh...'
            value='1'
            checked={userPrefs[0].clean_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a big dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Very'
            value='3'
            checked={userPrefs[0].big_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Kinda'
            value='2'
            checked={userPrefs[0].big_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="big_pref"
            label='Meh...'
            value='1'
            checked={userPrefs[0].big_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a fenced-in dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Very'
            value='3'
            checked={userPrefs[0].fenced_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Kinda'
            value='2'
            checked={userPrefs[0].fenced_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="fenced_pref"
            label='Meh...'
            value='1'
            checked={userPrefs[0].fenced_pref === '1'}
            onChange={handleChange}
          />
          <Label>How important is a busy dog park to you?:</Label>
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Very'
            value='3'
            checked={userPrefs[0].busy_pref === '3'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Kinda'
            value='2'
            checked={userPrefs[0].busy_pref === '2'}
            onChange={handleChange}
          />
          <Form.Input 
            type="radio"
            name="busy_pref"
            label='Meh...'
            value='1'
            checked={userPrefs[0].busy_pref === '1'}
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




