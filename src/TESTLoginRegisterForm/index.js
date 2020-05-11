import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function TESTLoginRegisterForm(props) {
  const { register, errors, handleSubmit } = useForm();
  const [action, setAction] = useState('Login')

  const switchForm = () => {
    if(action === 'Login') {
      setAction('Register')
    } else {
      setAction('Login')
    }
  }


  const onSubmit = data => {
    props.register(data)
    // alert("Congrats on registering for Doggy Dog World!");
    console.log("username and password data:", JSON.stringify(data));
  };
  console.log("errors with username / password", errors);
  // if error logging in because of validation stuff, show alert saying so
  // if works, show alert saying congrats!


  return (
    <React.Fragment>
      <h1 className="h1-register-form">It's a Doggy Dog World</h1>
      <h2 className="h2-register-form">{action} Here!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter a username"
            // value={userInfo.username}
            // onChange={handleChange}
            ref={register({ required: true, minLength: 5 })}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            // value={userInfo.password}
            // onChange={handleChange}
            ref={register({ required: true, minLength: 3 })}
          />
        <input type="submit" />
      </form>
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
  );
}

