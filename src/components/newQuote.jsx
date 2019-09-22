import React, { Component } from "react";
import { getQuotes } from "../services/quotesService";

class NewQuote extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor rendered");
    this.state = {
      quotes: [],
      randomQuote: []
    };
    this.handleQuote = this.handleQuote.bind(this);
  }

  async componentDidMount() {
    const data = await getQuotes();
    console.log(data);
    this.setState({ quotes: data });
  }

  handleQuote() {
    const quotes = [...this.state.quotes];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({ randomQuote: randomQuote });
  }
  render() {
    const { quote, author } = this.state.randomQuote;
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card card-body">
              <h3 className="card-title">{quote}</h3>
              <h5 className="card-subtitle">{author}</h5>

              <button
                className="btn-primary btn-sm btn-block"
                onClick={this.handleQuote}
                type="button"
              >
                Get Random Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewQuote;
