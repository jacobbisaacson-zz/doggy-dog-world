import React, { Component } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'

export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      username: '',
      action: 'Login'
    }
  }

  switchForm = () => {
    if(this.state.action === "Login") {
      this.setState({ action: "Register" })
    } else {
      this.setState({ action: "Login" })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.action} here</h2>
        <Form>
          {
            this.state.action === "Register"
            &&
            <React.Fragment>
              <Label>Username:</Label>
              <Form.Input 
                type="text"
                name="username"
                placeholder="Enter a username"
                value={this.state.username}
              />
            </React.Fragment>
          }
          <Label>Email:</Label>
          <Form.Input 
            type="text"
            name="email"
            placeholder="Enter a email"
            value={this.state.email}
          />
          <Label>Password:</Label>
          <Form.Input 
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
          />
          <Button type="Submit">
            {this.state.action === "Login" ? "Log In" : "Sign Up"}
          </Button>
        </Form>
        {
          this.state.action === "Login"
          ?
          <p>
            Want to Join? Sign up <span className="fake-link" onClick={this.switchForm}>here</span>
          </p>
          :
          <p>
            Already joined? Log in <span className="fake-link" onClick={this.switchForm}>here</span>
          </p>
        }
        
      </React.Fragment>      
    )
  }
} 


