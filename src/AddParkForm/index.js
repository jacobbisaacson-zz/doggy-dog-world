import React, { useState } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default function NewParkForm({ createPark }) {
  const [park, setPark] = useState({
    name: '',
    breed: '',
    image: ''
  })

  const handleChange = event => {
    setPark({
      ...park,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    createPark(park)
  }

  return (
    <Segment>
      <h4>Add New Park:</h4>
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
          // placeholder="Is this park CLEAN?"
          onChange={handleChange}
        />
        <Label>Is this park Big?:</Label>
        <Form.Input 
          type="checkbox"
          name="isBig"
          value={park.isBig}  
          // placeholder="Is this park BIG?"
          onChange={handleChange}
        />
        <Label>Is this park Fenced?:</Label>
        <Form.Input 
          type="checkbox"
          name="isFenced"
          value={park.isFenced}  
          // placeholder="Is this park FENCED?"
          onChange={handleChange}
        />
        <Label>Is this park Busy?:</Label>
        <Form.Input 
          type="checkbox"
          name="isBusy"
          value={park.isBusy}  
          // placeholder="Is this park BIG?"
          onChange={handleChange}
        />
        <Button type="Submit">Create Park</Button>
      </Form>
    </Segment>
  )
}


// NEED TO GET LOCATION IN HERE!
