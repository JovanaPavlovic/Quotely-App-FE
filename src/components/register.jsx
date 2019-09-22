import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { register } from "./../services/registerService";
import auth from "./../services/authService";

class Register extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    errors: {}
  };
  schema = {
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const user = {
      firstName: this.state.data.firstName,
      lastName: this.state.data.lastName,
      email: this.state.data.email,
      password: this.state.data.password
    };
    const response = await register(user);
    console.log(response);
    const jwtToken = await response.headers.get("x-auth-token");
    console.log(jwtToken);
    auth.loginWithToken(jwtToken);

    /*    const data = await fetch("http://localhost:3900/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }); */
    /* const response = await data.json();
    console.log(response); */

    /* const userToken = await data.text();
    localStorage.setItem("token", userToken); */
    /*  this.props.history.push("/"); */
    window.location = "/";
    console.log("registered");
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-xs-3">
            <form
              className="form-container bg-dark"
              onSubmit={this.handleSubmit}
            >
              <h5>Register</h5>
              {this.renderInput("firstName", "text", "First Name")}
              {this.renderInput("lastName", "text", "Last Name")}
              {this.renderInput("email", "text", "Email")}
              {this.renderInput("password", "password", "Password")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
