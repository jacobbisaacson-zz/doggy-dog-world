import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class AddDogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      breed: ''
      // img:
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createDog(this.state)
    this.setState({
      name: '',
      breed: ''
      // img:
    })

  }

  render() {
    return (
      <Segment>
        <h4>Add your dog!</h4>
        <Form onSubmit={this.handleSubmit} >
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}  
          />
          <Label>Breed:</Label>
          <Form.Input 
            type="text"
            name="breed"
            value={this.state.breed}  
            placeholder="Enter a breed"
            onChange={this.handleChange}
          />
          <Button type="Submit">Add Dog</Button>
        </Form>
      </Segment>
    )
  }
}