import React, { useState } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'
import '../index.css'

export default function AddDogForm(props) {
  const [addDogInfo, setAddDogInfo] = useState({
    name: '',
    breed: ''
    // img:
  })

  const handleChange = (event) => {
    setAddDogInfo({
      ...addDogInfo,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }
    // setAddDogInfo({


//   handleSubmit = (event) => {
//     event.preventDefault()
//     this.props.createDog(this.state)
//     this.setState({
//       name: '',
//       breed: ''
//       // img:
//     })

  return (
    <Segment>
      <h4>Add your dog!</h4>
      <Form>
        <Label>Name:</Label>
        <Form.Input 
          type="text"
          name="name"
          value={setAddDogInfo.name}
          placeholder="Enter a name"
          onChange={handleChange}  
        />
        <Label>Breed:</Label>
        <Form.Input 
          type="text"
          name="breed"
          value={setAddDogInfo.breed}  
          placeholder="Enter a breed"
          onChange={handleChange}
        />
        <Button type="Submit">Add Dog</Button>
      </Form>
    </Segment>
  )
}
