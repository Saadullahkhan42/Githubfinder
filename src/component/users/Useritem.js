import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

const Useritem = (props) => {
  const { login, avatar_url } = props.users;
  return (
    <div className="user">
      <img src={avatar_url} alt="Profile" />
      <h2>{login}</h2>
      <Link to={`/user/${login}`}>Profile</Link>
    </div>
  );
};
export default Useritem;
