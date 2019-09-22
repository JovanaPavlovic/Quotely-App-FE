import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    menu: true
  };

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
        <Link className="navbar-brand text-info" to="/">
          Quotely
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={"navbar-collapse collapse" + show}
          id="collapsibleNavbar"
        >
          <div className="nav navbar-nav">
            {this.props.user && (
              <NavLink className="nav-link" to="/quotes">
                Quotes
              </NavLink>
            )}

            {!this.props.user && (
              <NavLink className="nav-link" to="/newQuote">
                Random Quote
              </NavLink>
            )}
            {this.props.user && (
              <NavLink className="nav-link" to="postQuote">
                Post Quote
              </NavLink>
            )}
            {!this.props.user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {this.props.user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/profile">
                  {this.props.user.firstName}
                </NavLink>
                <NavLink className="nav-link" to="/logout">
                  Log Out
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
