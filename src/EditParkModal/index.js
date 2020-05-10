import React, { useState } from 'react'
import { Form, Button, Modal, Label, Header } from 'semantic-ui-react'
import '../index.css'

export default function EditParkModal({ parkToEdit, updatePark, closeModal }) {
  const [park, setPark] = useState(parkToEdit)
  const handleChange = event => setPark({ ...park, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    updatePark(park)
  }

  return(
    <Modal open={true} closeIcon={true} onClose={closeModal}> 
      <Header>
        <h3>Enter new info</h3>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Form.Input 
          type="text"
          name="name"
          value={park.name}
          placeholder="Enter a name"
          onChange={handleChange}  
        />
        <Label>Is this park Clean?:</Label>
        <Form.Input 
          type="checkbox"
          name="isClean"
          value={park.isClean}  
          placeholder="Is this park CLEAN?"
          onChange={handleChange}
        />
        <Label>Is this park Big?:</Label>
        <Form.Input 
          type="checkbox"
          name="isBig"
          value={park.isBig}  
          placeholder="Is this park BIG?"
          onChange={handleChange}
        />
        <Label>Is this park Fenced?:</Label>
        <Form.Input 
          type="checkbox"
          name="isFenced"
          value={park.isFenced}  
          placeholder="Is this park FENCED?"
          onChange={handleChange}
        />
        <Label>Is this park Busy?:</Label>
        <Form.Input 
          type="checkbox"
          name="isBusy"
          value={park.isBusy}  
          placeholder="Is this park BIG?"
          onChange={handleChange}
        />
          <Modal.Actions>
            <Button type="Submit">Update Park</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}




