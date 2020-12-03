import React from "react";
import Heading from "../../components/Heading";
import "./userDetail.css";

const UserDetail = ({ userIdData, balanceData }) => {
  console.log(userIdData);
  console.log(balanceData);
  return (
    <>
      <Heading
        className="user-topHeading"
        content={`Hello, ${userIdData.firstname}`}
      />
      <section className="user-section">
        <img
          src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
          alt="animated-girl"
        />
        <h3>
          {userIdData.firstname} {userIdData.lastname}
        </h3>
        <div className="user-list">
          <ul className="user-headings">
            <li>Accountid </li>
            <li>Account type </li>
            <li>Balance </li>
            <li>StreetAddress </li>
            <li>City </li>
            <li>Email </li>
            <li>Phonenumber </li>
          </ul>
          <ul>
            <li>{userIdData._id}</li>
            <li>{balanceData.alias}</li>
            <li>{balanceData.balance}</li>
            <li>{userIdData.streetAddress}</li>
            <li>{userIdData.city}</li>
            <li>{userIdData.email}</li>
            <li>{userIdData.phone}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default UserDetail;
