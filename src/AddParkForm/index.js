import React, { Component } from 'react'
import { Form, Button, Segment, Label } from 'semantic-ui-react'
import '../index.css'
// import '../styles.css'

export default class NewParkForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      clean: '',
      big: '',
      fenced: '',
      busy: '',
      image: '',
      location: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value);
    console.log(event.target.name);

    this.props.createPark(this.state)

    this.setState({
      name: '',
      clean: '',
      big: '',
      fenced: '',
      busy: '',
      image: '',
      location: ''
    })
  }

  render() {
    return (
      <Segment>
        <h4>Add New Park:</h4>
        <Form onSubmit={this.handleSubmit} className="this-form">
          <Label>Name:</Label>
          <Form.Input
            type='text'
            name='name'
            value={this.state.name}
            placeholder="Enter Park Name: "
            onChange={this.handleChange}
          />
          <Label>Location:</Label>
          <Form.Input
            name='location'
            value={this.state.location}
            placeholder="Enter Park Location: "
            onChange={this.handleChange}
          />
          <Form.Group>
            <Label>How Clean?:</Label>
            <Form.Input
              type='radio'
              name='clean'
              label='Very'
              value='3'
              checked={this.state.clean === '3'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='clean'
              label='Kinda'
              value='2'
              checked={this.state.clean === '2'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='clean'
              label='Meh...'
              value='1'
              checked={this.state.clean === '1'}
              onChange={this.handleChange}
            />
            <Label>How Big?:</Label>
            <Form.Input
              type='radio'
              name='big'
              label='Very'
              value='3'
              checked={this.state.big === '3'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='big'
              label='Kinda'
              value='2'
              checked={this.state.big === '2'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='big'
              label='Meh...'
              value='1'
              checked={this.state.big === '1'}
              onChange={this.handleChange}
            />
            <Label>How Fenced?:</Label>
            <Form.Input
              type='radio'
              name='fenced'
              label='Very'
              value='3'
              checked={this.state.fenced === '3'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='fenced'
              label='Kinda'
              value='2'
              checked={this.state.fenced === '2'}
              onChange={this.handleChange}
            />
            <Form.Input
              type='radio'
              name='fenced'
              label='Meh...'
              value='1'
              checked={this.state.fenced === '1'}
              onChange={this.handleChange}
            />
            <Label>How Busy?:</Label>
            <Form.Input
              type="radio"
              name='busy'
              label='Very'
              value='3'
              checked={this.state.busy === '3'}
              onChange={this.handleChange}
            />
            <Form.Input
              type="radio"
              name='busy'
              label='Kinda'
              value='2'
              checked={this.state.busy === '2'}
              onChange={this.handleChange}
            />
            <Form.Input
              type="radio"
              name='busy'
              label='Meh...'
              value='1'
              checked={this.state.busy === '1'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Label>Image:</Label>
          <Form.Input
            type='text'
            name='image'
            value={this.state.image}
            placeholder="Paste Image URL: "
            onChange={this.handleChange}
          />
          <Button type="Submit">Submit</Button>
        </Form>
      </Segment>
    )

  }

}


