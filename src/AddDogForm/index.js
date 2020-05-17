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
      <h4
        style={{ color: 'skyBlue', fontSize: 24, fontWeight: 'bold', padding: 10 }}>Add new dog:</h4>
      <Form 
        onSubmit={handleSubmit}
        className="this-form"
      >
        <Label
          style={{ color: 'skyBlue', fontSize: 14, fontWeight: 'bold' }}>Name:</Label>
        <Form.Input 
          type="text"
          name="name"
          value={dog.name}
          placeholder="Enter a name"
          onChange={handleChange}  
        />
        <Label
          style={{ color: 'skyBlue', fontSize: 14, fontWeight: 'bold' }}>Breed:</Label>
        <Form.Input 
          type="text"
          name="breed"
          value={dog.breed}  
          placeholder="Enter a breed"
          onChange={handleChange}
        />
        <Label
          style={{ color: 'skyBlue', fontSize: 14, fontWeight: 'bold' }}>Picture:</Label>
        <Form.Input 
          type="text"
          name="image"
          value={dog.image}  
          placeholder="Paste image URL here: "
          onChange={handleChange}
        />
        <Button
          style={{ color: 'skyBlue', fontSize: 20, fontWeight: 'bold' }} 
          type="Submit">Submit</Button>
      </Form>
    </Segment>
  )
}


