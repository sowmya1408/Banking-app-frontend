import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import "./newUser.css";

const CreateNewUserPage = ({
  firstname,
  lastname,
  streetAddress,
  city,
  phone,
  email,
  password,
  handleUserChange,
  handleUserSubmit,
}) => {
  return (
    <>
      <Heading content="ADD NEW USER" />
      <form onSubmit={handleUserSubmit} className="new-userform">
        <Input
          inputId="firstname"
          type="text"
          text="Firstname"
          placeholder="firstname"
          name="firstname"
          handleChange={handleUserChange}
          value={firstname}
        />
        <Input
          inputId="lastname"
          type="text"
          text="Lastname"
          placeholder="lastname"
          name="lastname"
          handleChange={handleUserChange}
          value={lastname}
        />
        <Input
          inputId="streetAddress"
          type="text"
          text="StreetAddress"
          placeholder="streetAddress"
          name="streetAddress"
          handleChange={handleUserChange}
          value={streetAddress}
        />
        <Input
          inputId="city"
          type="text"
          text="City"
          placeholder="city"
          name="city"
          handleChange={handleUserChange}
          value={city}
        />
        <Input
          inputId="phone"
          type="text"
          text="Phone"
          placeholder="phone"
          name="phone"
          handleChange={handleUserChange}
          value={phone}
        />
        <Input
          inputId="email"
          type="email"
          text="Email"
          placeholder="email"
          name="email"
          handleChange={handleUserChange}
          value={email}
        />
        <Input
          inputId="password"
          type="password"
          text="Password"
          placeholder="password"
          name="password"
          handleChange={handleUserChange}
          value={password}
        />
        <Button type="submit" text="CreateUser" />
      </form>
    </>
  );
};

export default CreateNewUserPage;
