import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LogIn extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email({ minDomainSegments: 2 })
      .label("Email"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const user = {
      email: this.state.data.username,
      password: this.state.data.password
    };

    await auth.login(user);

    window.location = "/";
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
              <h5>Sign In</h5>
              {this.renderInput("username", "email", "Email")}
              {this.renderInput("password", "password", "Password")}

              <div className="form-check">
                <input className="check-input" type="checkbox" />
                <label className="checkLabel" htmlFor="gridCheck">
                  Remember Me
                </label>
              </div>
              {this.renderButton("Log in")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
