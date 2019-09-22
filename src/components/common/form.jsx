import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = {
      abortEarly: false
    };

    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) {
      return null;
    }

    const obj = error.details;
    obj.map(item => {
      const errors = {};
      errors[item.path[0]] = item.message;
      return errors;
    });
  };

  validateProperty = input => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    if (error) errors[input.name] = error;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <div className="form-group">
        <button
          type="submit"
          disabled={this.validate()}
          className="btn-primary btn-sm btn-block"
        >
          {label}
        </button>
      </div>
    );
  }
  renderInput(name, type, placeholder) {
    const { data, errors } = this.state;
    return (
      <div className="form-group">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={data[name]}
          onChange={this.handleChange}
          className="form-control"
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  }
}

export default Form;
