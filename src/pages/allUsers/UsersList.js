import React from "react";
import "./usersList.css";

const UsersList = ({ users, loading }) => {
  console.log(users);
  return (
    <section>
      {
        <ul className="users-columnHeadings">
          <li className="account-heading">User Account Number</li>
          <li>User Name</li>
          <li>Add</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      }
      {loading && users.length === 0
        ? "Loading"
        : users.map((user) => (
            <ul className="users-columns" key={user._id}>
              <li className="account-heading">{user._id}</li>
              <li>
                {user.firstname} {user.lastname}
              </li>
              <li>
                <ion-icon name="add-outline"></ion-icon>
              </li>
              <li>
                <ion-icon name="create-outline"></ion-icon>
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
