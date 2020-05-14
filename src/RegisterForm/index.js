import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function RegisterForm(props) {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    props.register(data)
    // alert("Congrats on registering for Doggy Dog World!");
    // console.log("username and password data:", JSON.stringify(data));
  };
  // console.log("errors with username / password", errors);
  // if error logging in because of validation stuff, show alert saying so
  // if works, show alert saying congrats!
  return (
    <React.Fragment>
      <h1 className="h1-register-form">It's a Doggy Dog World</h1>
      <h2 className="h2-register-form">Register Here!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            ref={register({ 
              required: 'A Username is Required', 
              minLength: {
                value: 3,
                message: 'Your username is too short!',
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
                message: 'Make a stronger password!',
              },
            })}
          />
          { errors.password && errors.password.message }
        <input type="submit"/>
      </form>
    </React.Fragment>
  );
}










