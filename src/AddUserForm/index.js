import React, { Component } from 'react'
import { Form, Button, Segment, Label} from 'semantic-ui-react'
import '../index.css'

export default class AddUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      clean_pref: '',
      fenced_pref: '',
      busy_pref: '',
      big_pref: '',
      note: ''
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

    this.props.createUserPrefs(this.state)

    this.setState({
      name: '',
      clean_pref: '',
      fenced_pref: '',
      busy_pref: '',
      big_pref: '',
      note: ''
    })
  }

  render() {
    return (
      <Segment>
      <h4>Tell us your Park Preferences:</h4>
      <Form onSubmit={this.handleSubmit} className="this-form">
          <Label>Name:</Label>
          <Form.Input
            type='text'
            name='name'
            value={this.state.name}
            placeholder="What's your name, human?: "
            onChange={this.handleChange}
          />
          <div className="two-columns">
          <Label>How important is a clean dog park to you?:</Label>
          <Form.Input
            type="radio"
            name='clean_pref'
            label='Very'
            value='3'
            checked={this.state.clean_pref === '3'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='clean_pref'
            label='Kinda'
            value='2'
            checked={this.state.clean_pref === '2'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='clean_pref'
            label='Meh...'
            value='1'
            checked={this.state.clean_pref === '1'}
            onChange={this.handleChange}
          />
          <Label>How important is a big dog park to you?:</Label>
          <Form.Input
            type="radio"
            name='big_pref'
            label='Very'
            value='3'
            checked={this.state.big_pref === '3'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='big_pref'
            label='Kinda'
            value='2'
            checked={this.state.big_pref === '2'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='big_pref'
            label='Meh...'
            value='1'
            checked={this.state.big_pref === '1'}
            onChange={this.handleChange}
          />
          <Label>How important is a fenced-in dog park to you?:</Label>
          <Form.Input
            type="radio"
            name='fenced_pref'
            label='Very'
            value='3'
            checked={this.state.fenced_pref === '3'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='fenced_pref'
            label='Kinda'
            value='2'
            checked={this.state.fenced_pref === '2'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='fenced_pref'
            label='Meh...'
            value='1'
            checked={this.state.fenced_pref === '1'}
            onChange={this.handleChange}
          />
          <Label>How important is a busy dog park to you?:</Label>
          <Form.Input
            type="radio"
            name='busy_pref'
            label='Very'
            value='3'
            checked={this.state.busy_pref === '3'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='busy_pref'
            label='Kinda'
            value='2'
            checked={this.state.busy_pref === '2'}
            onChange={this.handleChange}
          />
          <Form.Input
            type="radio"
            name='busy_pref'
            label='Meh...'
            value='1'
            checked={this.state.busy_pref === '1'}
            onChange={this.handleChange}
          />
          </div>
          <Label>Anything Else?:</Label>
          <Form.Input
            type='text'
            name='note'
            value={this.state.note}
            placeholder="Anything else you'd like to let us know?: "
            onChange={this.handleChange}
          />
          <Button type="Submit">Submit</Button>
        </Form>
        </Segment>
      )
    }
  }



