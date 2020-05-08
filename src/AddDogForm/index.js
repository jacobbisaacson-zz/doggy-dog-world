import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class NewDogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      breed: ''
      // img:
    }
  }

  handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);

    // const state = this.state
    // state[event.target.name] = event.target.value
    // this.setState(state)

    // you can do the above using ES6 computed properties syntax
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // call a method passed down from the parent
    // to make state data from this component available
    // in the parent component (DogContainer)
    // THIS IS CALLED LIFTING UP STATE 
    this.props.createDog(this.state)
    // clear the form
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