import React, { Component } from "react";
import { getQuotes } from "../services/quotesService";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  async populateQuotes() {
    const result = await getQuotes();
    this.setState({ quotes: result });
  }
  async componentDidMount() {
    await this.populateQuotes();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row card-row">
          {this.state.quotes.map(quote => (
            <div className="card col-sm-3 mb-2 mr-2">
              <div key={quote.u_id} className="card-body">
                <h5 className="text-dark">{quote.quote}</h5>
                <p className="text-warning">{quote.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Quote;
