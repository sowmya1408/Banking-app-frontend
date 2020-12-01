import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

const MakeAdmin = ({ handleAdminChange, userId, handleAdminSubmit }) => {
  return (
    <>
      <Heading content="ADD USER AS ADMIN" />
      <form onSubmit={handleAdminSubmit} className="new-userform">
        <Input
          inputId="userId"
          type="text"
          text="UserId"
          placeholder="userid"
          name="userId"
          handleChange={handleAdminChange}
          value={userId}
        />
        <Button type="submit" text="Make admin" />
      </form>
    </>
  );
};

export default MakeAdmin;
