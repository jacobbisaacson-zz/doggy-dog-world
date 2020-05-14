import React, { useState } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'
import '../index.css'

export default function AddDogForm({createDog}) {
  const [dog, setDog] = useState({
    name: '',
    breed: '',
    image: ''
  })

  const handleChange = event => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createDog(dog)
  }

  return (
    <Segment>
      <h4>Add new dog:</h4>
      <Form 
        onSubmit={handleSubmit}
        className="this-form"
      >
        <Label>Name:</Label>
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
        <Button type="Submit">Submit</Button>
      </Form>
    </Segment>
  )
}


