import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class AddUserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: ''
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
    this.props.createUser(this.state)
    this.setState({
      name: '',
      email: ''
      // img:
    })

  }

  render() {
    return (
      <Segment>
        <h4>Create a Profile!</h4>
        <Form onSubmit={this.handleSubmit} >
          <Label>Name:</Label>
          <Form.Input 
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter a name"
            onChange={this.handleChange}  
          />
          <Label>Email:</Label>
          <Form.Input 
            type="email"
            name="email"
            value={this.state.email}  
            placeholder="Enter a email"
            onChange={this.handleChange}
          />
          <Button type="Submit">Create Profile</Button>
        </Form>
      </Segment>
    )
  }
}