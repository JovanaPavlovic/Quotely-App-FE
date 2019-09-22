import React from "react";
import TextArea from "./common/textQuote";
import { postQuote } from "../services/quotesService";
import auth from "../services/authService";

class PostQuote extends TextArea {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        quoteText: "",
        quoteAuthor: ""
      }
    };
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = {
      quote: this.state.data.quoteText,
      author: this.state.data.quoteAuthor
    };

    const token = await auth.getToken();
    await postQuote(data, token);
    console.log("Posted");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-xs-6">
            <form
              onSubmit={this.handleSubmit}
              className="form-container bg-dark"
            >
              {this.renderTextArea(
                "quoteText",
                "Quote",
                "3",
                "Please enter the Quote"
              )}
              {this.renderTextArea(
                "quoteAuthor",
                "Quote",
                "1",
                "Please enter Author Name"
              )}
              {this.renderButton("Post New Quote")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostQuote;
