import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import "./User.css";

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const {
      avatar_url,
      html_url,
      location,
      hireable,
      bio,
      company,
      blog,
      public_gits,
      public_repos,
      followers,
      following,
      name,
    } = this.props.user;
    const { loading, repos } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          <Link to="/" className="btn btn-secondary btn-sm" id="btn">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
            &nbsp; Back to the user
          </Link>
          <div className="grid card" id="grid">
            <div className="col-4 text-center" id="text-cenetr">
              <img src={avatar_url} alt="Profile" id="img" />
              <h3>{name}</h3>
              <h4>{location && location}</h4>
              <h5>
                Hireable:{" "}
                {hireable ? (
                  <i
                    className="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ color: "darkgreen" }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-times-circle"
                    style={{ color: "red" }}
                  ></i>
                )}
              </h5>
            </div>
            <div className="col-8">
              <Fragment>
                <h3>Bio</h3>
                {bio && <p>{bio}</p>}
                <a
                  href={html_url}
                  className="btn btn-secondary btn-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
                <ul>
                  <li>
                    {name && (
                      <Fragment>
                        Username: <b>{name}</b>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        Company: <b>{company}</b>
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        Website: <b>{blog}</b>
                      </Fragment>
                    )}
                  </li>
                </ul>
              </Fragment>
            </div>
          </div>
          {/* Grid close */}

          <button className="btn btn-success col-3">
            Followers: {followers}
          </button>
          <button className="btn btn-primary col-3">
            Following: {following}
          </button>
          <button className="btn btn-dark col-3">
            Public repo: {public_repos}
          </button>
          <button className="btn btn-secondary col-3">
            Public git: {public_gits}
          </button>

          {/* show repos */}
          <div className="repos">
            <h1>Repositories</h1>
            <Repos repos={repos} />
          </div>
        </div>
      );
    }
  }
}
