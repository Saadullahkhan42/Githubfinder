import React from "react";
import Navbar from "./component/layout/Navbar";
import "./App.css";
import Users from "./component/users/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Search from "./component/users/Search";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import User from "./component/users/User";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount(props) {
  //   this.setState({ loading: true });
  //   const url = "https://api.github.com/users";
  //   const res = await axios.get(url);
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  //get Search
  searchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  //get users
  getUser = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ user: res.data, loading: false });
  };

  //get users_repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}/repos?per_page=5&created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ repos: res.data, loading: false });
  };

  //Clear user
  clearUserHandler = () => {
    this.setState({ users: [] });
  };

  alertHandler = (msg, style) => {
    this.setState({ alert: { msg, style } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 4000);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert onAlert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <Search
                      onSearchText={this.searchTextHandler}
                      onClearUsers={this.clearUserHandler}
                      showUsers={this.state.users.length > 0 ? true : false}
                      onAlert={this.alertHandler}
                    />
                    <Users
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </div>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/User/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={this.state.user}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
