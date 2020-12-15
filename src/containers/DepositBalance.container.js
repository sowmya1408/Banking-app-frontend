import React from "react";
import Deposit from "../components/Deposit";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const DepositBalance = () => {
  const { accountSlug } = useParams();
  console.log(accountSlug);
  const history = useHistory();

  const handleBackInUserDetail = () => {
    history.replace("/user");
  };

  return (
    <div>
      <Button text="back" type="button" handleClick={handleBackInUserDetail} />

      <Deposit />
    </div>
  );
};

export default DepositBalance;
