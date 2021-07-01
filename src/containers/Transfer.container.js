import React, { useReducer } from "react";
import TransferPage from "../components/TransferPage";
import Button from "../components/Button";
import { useHistory, useParams } from "react-router-dom";
import { getTokenWithHeaders } from "../firebase/getTokenWithHeaders";
const transferInitailState = {
  toaccount: "",
  amount: 0,
};
const transferMessageInitialState = {
  transferMessage: "",
};

const transferMessageReducer = (state, action) => {
  return {
    ...state,
    transferMessage: action.payload,
  };
};

const transferReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const Transfer = () => {
  const history = useHistory();
  const { transferSlug } = useParams();
  const fromaccount = transferSlug;
  console.log(fromaccount);
  const [transferState, transferDispatch] = useReducer(
    transferReducer,
    transferInitailState
  );
  const [transferMessageState, transferMessageDispatch] = useReducer(
    transferMessageReducer,
    transferMessageInitialState
  );

  const handleBackInUserDetail = () => {
    history.replace("/user");
  };

  const handleChange = (e) => {
    transferDispatch({ field: e.target.name, value: e.target.value });
  };
  const { toaccount, amount } = transferState;
  console.log(transferState);

  const handleTransferSubmit = async (e) => {
    e.preventDefault();
    const headers = await getTokenWithHeaders();
    const transferAmount = await fetch(
      `https://bankingbackendapp.herokuapp.com/accounts//transfer/transaction`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          toaccount,
          amount,
          fromaccount,
        }),
      }
    );
    console.log(transferAmount);
    transferDispatch({ field: e.target.name, value: "" });
    const successMessage = await transferAmount.json();
    transferMessageDispatch({ payload: successMessage.message });
  };
  const { transferMessage } = transferMessageState;
  console.log(toaccount);
  return (
    <>
      <Button text="back" type="button" handleClick={handleBackInUserDetail} />
      <TransferPage
        handleChange={handleChange}
        defaultFromAccountValue={fromaccount}
        toaccount={toaccount}
        amount={amount}
        handleSubmit={handleTransferSubmit}
        transferMessage={transferMessage}
      />
    </>
  );
};
export default Transfer;
