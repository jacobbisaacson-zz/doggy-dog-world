import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import LoginForm from './LoginForm'
import "../styles.css";

export default function TESTLoginRegisterForm(props) {
  const { register, errors, handleSubmit } = useForm();
  // const [action, setAction] = useState('Register')

  // const switchForm = () => {
  //   if(action === 'Login') {
  //     setAction('Register')
  //   } else {
  //     setAction('Login')
  //   }
  // }

  const onSubmit = data => {
    props.login(data)
    // alert("Congrats on registering for Doggy Dog World!");
    console.log("username and password data:", JSON.stringify(data));
  };
  console.log("errors with username / password", errors);
  // if error logging in because of validation stuff, show alert saying so
  // if works, show alert saying congrats!

  return (
    <React.Fragment>
      <h3 className="h2-register-form">Already Registered? Log In Here!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter a username"
            ref={register({ 
              required: 'A Username is Required', 
              minLength: {
                value: 3,
                message: 'Minimum username length is 3 characters',
              },
            })}
          />
          { errors.username && errors.username.message }
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            ref={register({ 
              required: 'A Password is Required', 
              minLength: {
                value: 3,
                message: 'Minimum password length is 3 characters',
              },
            })}
          />
          { errors.password && errors.password.message }
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}










