import React from "react";
import Input from "./Input";
import Button from "./Button";
import UserPageNavbar from "./UserPageNavbar";

const Withdraw = ({
  inputId,
  name,
  type,
  text,
  placeholder,
  handleChange,
  value,
  handleSubmit,
  message,
  withdarwSlug,
  handleClick,
}) => {
  return (
    <section className="login1">
      <div className="loginContainer1">
        <UserPageNavbar
          navText={[
            { text: "Home", link: "/user" },
            {
              text: "Withdraw",
              link: `/withdraw/${withdarwSlug}`,
            },
            {
              text: "Deposit",
              link: `/deposit/${withdarwSlug}`,
            },
            {
              text: "Transfer",
              link: `/transfer/${withdarwSlug}`,
            },
          ]}
          handleLogout={handleClick}
        />
        {message ? (
          <p>{message}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              type={type}
              text={text}
              inputId={inputId}
              placeholder={placeholder}
              value={value}
              name={name}
              handleChange={handleChange}
            />
            <Button type="submit" text="Submit" />
          </form>
        )}
      </div>
    </section>
  );
};

export default Withdraw;
