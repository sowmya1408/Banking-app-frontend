import React, { useReducer, useEffect } from "react";
import { getTokenWithHeaders } from "../firebase/getTokenWithHeaders";
import UserDetail from "../pages/userDetail/UserDetail";
import UserPageNavbar from "../components/UserPageNavbar";
import { signOutEmail } from "../firebase/emailSignIn";
import { useHistory } from "react-router-dom";

const IntialState = {
  singleUserState: {},
  singleUserBalanceState: {},
};

const singleUserIdreducer = (state, action) => {
  switch (action.type) {
    case "FETCH BY USERID SUCCESS":
      return {
        singleUserData: action.payload.singleUserDetailsInJson[0],
        singleUserBalanceData: action.payload.specificUserBalanceInJson[0],
      };
    case "FETCH BY USERID ERROR":
      return {
        singleUserData: {},
        singleUserBalanceData: {},
      };
    default:
      return state;
  }
};

const SingleUser = () => {
  const history = useHistory();
  const [singleUserState, singleUserDispatch] = useReducer(
    singleUserIdreducer,
    IntialState
  );

  useEffect(() => {
    (async () => {
      try {
        const headers = await getTokenWithHeaders();

        const singleUserDetails = await fetch(
          `https://bankingbackendapp.herokuapp.com/clients/userId/user`,
          {
            method: "GET",
            headers,
          }
        );
        const singleUserDetailsInJson = await singleUserDetails.json();
        console.log(singleUserDetailsInJson[0]._id);
        const specificUserBalance = await fetch(
          `https://bankingbackendapp.herokuapp.com/accounts/account/${singleUserDetailsInJson[0]._id}`
        );
        const specificUserBalanceInJson = await specificUserBalance.json();

        singleUserDispatch({
          type: "FETCH BY USERID SUCCESS",
          payload: { singleUserDetailsInJson, specificUserBalanceInJson },
        });
      } catch (err) {
        singleUserDispatch({
          type: "FETCH BY USERID ERROR",
        });
      }
    })();
  }, []);
  console.log(singleUserState);
  const handleClick = () => {
    signOutEmail();
    history.replace("/");
  };

  return (
    <>
      <div>
        {singleUserState.singleUserData ? (
          <UserPageNavbar
            navText={[
              { text: "Home", link: "/user" },
              {
                text: "Withdraw",
                link: `/withdraw/${singleUserState.singleUserData._id}`,
              },
              {
                text: "Deposit",
                link: `/deposit/${singleUserState.singleUserData._id}`,
              },
              {
                text: "Transfer",
                link: `/transfer/${singleUserState.singleUserData._id}`,
              },
            ]}
            handleLogout={handleClick}
          />
        ) : null}
      </div>
      <div className="single-user">
        {singleUserState.singleUserData &&
        singleUserState.singleUserBalanceData ? (
          <UserDetail
            userIdData={singleUserState.singleUserData}
            balanceData={singleUserState.singleUserBalanceData}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default SingleUser;
