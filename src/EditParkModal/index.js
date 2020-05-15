import React, { useState } from 'react'
import { Form, Button, Modal, Header, Input, Select,  } from 'semantic-ui-react'
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
        <Form 
        onSubmit={handleSubmit}
        className="this-form"
      >
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          value={park.name}
          label='Name'
          name='name'
          placeholder="Edit Park Name: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          value={park.location}
          label='Location'
          name='location'
          placeholder="Edit Park Location: "
          onChange={handleChange}
        />
        <Form.Field
          onSubmit={handleSubmit}
          control={Input}
          value={park.image}
          label='Image'
          name='image'
          placeholder="Paste Park's image URL here: "
          onChange={handleChange}
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </Modal.Content>
    </Modal>
  )
}




