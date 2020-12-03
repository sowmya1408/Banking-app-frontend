import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const TransferPage = ({
  toaccount,
  amount,
  handleChange,
  transferMessage,
  defaultFromAccountValue,
  handleSubmit,
}) => {
  console.log(toaccount);
  return (
    <section className="login1">
      <div className="loginContainer1">
        {transferMessage ? (
          <p>{transferMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              className="fromaccountInput"
              inputId="fromaccount"
              name="fromaccount"
              text="fromaccount"
              type="text"
              value={defaultFromAccountValue}
              handleChange={handleChange}
            />
            <Input
              inputId="toaccount"
              name="toaccount"
              type="text"
              text="toaccount"
              placeholder="toaccount"
              value={toaccount}
              handleChange={handleChange}
            />
            <Input
              inputId="amount"
              name="amount"
              text="amount to transfer"
              type="number"
              placeholder="amount to transfer"
              value={amount}
              handleChange={handleChange}
            />
            <Button type="submit" text="Submit" />
          </form>
        )}
      </div>
    </section>
  );
};

export default TransferPage;
