import React, { Component } from "react";

class TextArea extends Component {
  state = {
    data: {}
  };

  renderTextArea(name, label, rows, placeholder) {
    const { data } = this.state;

    return (
      <div className="form-group">
        <label className="postLabel" htmlFor={name}>
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          value={data[name]}
          onChange={this.handleChange}
          rows={rows}
          placeholder={placeholder}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
  renderButton(label) {
    return (
      <div className="form-group">
        <button className="btn-primary btn-sm btn-block" type="submit">
          {label}
        </button>
      </div>
    );
  }
}
export default TextArea;
