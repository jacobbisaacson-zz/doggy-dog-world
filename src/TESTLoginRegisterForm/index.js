import React from "react";
import { useForm } from "react-hook-form";
import "../styles.css";

export default function Form() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    alert("Congrats on registering for Doggy Dog World!");
    console.log("username and password", JSON.stringify(data));
  };
  console.log("errors with username / password", errors);

  return (
    <React.Fragment>
      <h1 className="h1-register-form">It's a Doggy Dog World</h1>
      <h2 className="h2-register-form">Register Here!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input
            type="text"
            name="Username"
            placeholder="Enter a username"
            // value={userInfo.username}
            // onChange={handleChange}
            ref={register({ required: true, maxLength: 80 })}
          />
          <label>Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Enter a password"
            // value={userInfo.password}
            // onChange={handleChange}
            ref={register({ required: true, maxLength: 100 })}
          />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

