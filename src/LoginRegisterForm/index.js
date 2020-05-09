import React, { useState } from 'react'
import { Form, Button, Label } from 'semantic-ui-react'
import '../index.css'


export default function LoginRegisterForm({login, register}) {
  const [userInfo, setUserInfo] = useState({
    password: '',
    username: ''  
  })
  
  const [action, setAction] = useState('Login')

  const switchForm = () => {
    if(action === "Login") {
      setAction('Register')
    } else {
      setAction('Login')
    }
  }

  const handleChange = (event) => {
    setUserInfo({
      // BELOW IS SPREAD OPERATOR (takes the old info)
      ...userInfo,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // LOOK AT VALIDATING THIS FORM

    if(action === "Register") {
      register(userInfo)
    } else {
      login(userInfo)
    }
  }

  return (
    <React.Fragment>
      <h2>{action} here</h2>
      <Form onSubmit={handleSubmit}>
        { action === "Register" }
        <Label>Username:</Label>
        <Form.Input 
          type="text"
          name="username"
          placeholder="Enter a username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <Label>Password:</Label>
        <Form.Input 
          type="password"
          name="password"
          placeholder="Enter a password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <Button type="Submit">
          { action === "Login" ? "Log in" : "Sign up"}
        </Button>
      </Form>
      {
        action === "Login"
        ?
        <p>
          Need an account? Sign up <span className="fake-link" onClick={switchForm}>here</span>.
        </p>
        :
        <p>
          Already have an account? Log in <span className="fake-link" onClick={switchForm}>here</span>.
        </p>

      }

    </React.Fragment>      
  )

}


