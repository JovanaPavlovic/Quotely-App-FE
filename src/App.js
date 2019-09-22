import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Quote from "./components/quotes";
import NewQuote from "./components/newQuote";
import PostQuote from "./components/postQuote";
import NavBar from "./components/common/navbar";
import Home from "./components/home";
import LogIn from "./components/login";
import Register from "./components/register";
import Footer from "./components/common/footer";
import LogOut from "./components/logout";
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getUser();
    this.setState({ user });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="content">
          <Switch>
            <Route path="/quotes" component={Quote} />
            <Route path="/newQuote" component={NewQuote} />
            <Route path="/postQuote" component={PostQuote} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={LogOut} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
