import React, { useReducer } from "react";
import Withdraw from "../components/Withdraw";
import Button from "../components/Button";
import { useHistory, useParams } from "react-router-dom";
import { getTokenWithHeaders } from "../firebase/getTokenWithHeaders";
import { signOutEmail } from "../firebase/emailSignIn";

const withdrawInitialState = {
  withdraw: 0,
};
const messageInitialState = {
  withdrawMessage: "",
};

const messageReducer = (state, action) => {
  return {
    ...state,
    withdrawMessage: action.payload,
  };
};

const withdrawReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const WithdrawBalance = () => {
  const history = useHistory();
  const { withdrawSlug } = useParams();
  console.log(withdrawSlug);
  const [withdrawState, withdrawDispatch] = useReducer(
    withdrawReducer,
    withdrawInitialState
  );
  const [messageState, withdrawMessageDispatch] = useReducer(
    messageReducer,
    messageInitialState
  );

  const handleBackInUserDetail = () => {
    history.replace("/user");
  };

  const handleChange = (e) => {
    withdrawDispatch({ field: e.target.name, value: e.target.value });
  };
  const { withdraw } = withdrawState;
  console.log(withdraw);

  const handleWithdrawSubmit = async (e) => {
    e.preventDefault();
    const headers = await getTokenWithHeaders();
    const withdrawAmount = await fetch(
      `https://bankingbackendapp.herokuapp.com/accounts/withdraw/${withdrawSlug}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          withdraw,
        }),
      }
    );
    withdrawDispatch({ field: "withdraw", value: 0 });
    const successMessage = await withdrawAmount.json();
    withdrawMessageDispatch({ payload: successMessage.message });
  };
  const { withdrawMessage } = messageState;
  console.log(withdrawMessage);
  const handleClick = () => {
    signOutEmail();
    history.replace("/");
  };
  return (
    <>
      <Button text="back" type="button" handleClick={handleBackInUserDetail} />
      <Withdraw
        inputId="withdraw"
        name="withdraw"
        type="number"
        withdarwSlug={withdrawSlug}
        text="Amount to withdraw"
        placeholder="withdraw amount"
        handleChange={handleChange}
        value={withdraw}
        handleSubmit={handleWithdrawSubmit}
        message={withdrawMessage}
        handleClick={handleClick}
      />
    </>
  );
};
export default WithdrawBalance;
