import React from "react";
import "./usersList.css";
import { Link } from "react-router-dom";

const UsersList = ({ users, loading }) => {
  console.log(users);
  return (
    <section className="users-section">
      {
        <ul className="users-columnHeadings">
          <li className="account-heading">User Account Number</li>
          <li>User Name</li>
          <li>Delete</li>
        </ul>
      }
      {loading && users.length === 0
        ? "Loading"
        : users.map((user) => (
            <ul className="users-columns" key={user._id}>
              <li className="account-heading">
                <Link to={`/userDetails/${user._id}`}>{user._id}</Link>
              </li>
              <li>
                {user.firstname} {user.lastname}
              </li>
              <li>
                <ion-icon name="trash-outline"></ion-icon>
              </li>
            </ul>
          ))}
    </section>
  );
};

export default UsersList;
