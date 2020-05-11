import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function LoginForm(props) {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = data => {
    props.login(data)
    console.log("username and password data:", JSON.stringify(data));
  };
  console.log("errors with username / password", errors);

  return (
    <React.Fragment>
      <h4 className="h4-login-form">Already Registered? Log In Below</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
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
            placeholder="Enter your password"
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










