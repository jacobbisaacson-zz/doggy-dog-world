import React, { useState } from 'react'
import { Form, Button, Label, Modal, Header } from 'semantic-ui-react'
import '../index.css'

export default function EditDogModal({dogToEdit, updateDog, closeModal}) {
  const [dog, setDog] = useState(dogToEdit)
  const handleChange = event => setDog({ ...dog, [event.target.name]: event.target.value })
  const handleSubmit = (event) => {
    event.preventDefault()
    updateDog(dog)
  }

  return(
    <Modal open={true} closeIcon={true} onClose={closeModal}> 
      <Header>
        <h3>Enter new info</h3>
      </Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input 
            type="text"
            name="name"
            value={dog.name}
            placeholder="Enter a name"
            onChange={handleChange}
          />
          <Label>Breed:</Label>
          <Form.Input 
            type="text"
            name="breed"
            value={dog.breed}  
            placeholder="Enter a breed"
            onChange={handleChange}
          />
          <Label>Picture:</Label>
          <Form.Input 
            type="text"
            name="image"
            value={dog.image}  
            placeholder="Paste image URL here: "
            onChange={handleChange}
          />
          <Modal.Actions>
            <Button type="Submit">Update Dog</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}




