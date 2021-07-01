import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetail from "../pages/userDetail/UserDetail";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const userIntialState = {};
const userBalanceState = [];

const userIdreducer = (state, action) => {
  switch (action.type) {
    case "FETCH BY ID SUCCESS":
      return {
        userData: action.payload,
      };
    case "FETCH BY ID ERROR":
      return {
        userData: {},
      };
    default:
      return state;
  }
};

const userBalanceReducer = (state, action) => {
  switch (action.type) {
    case "FETCH BY CLIENTID SUCCESS":
      return {
        userBalanceData: action.payload,
      };
    case "FETCH BY CLIENTID ERROR":
      return {
        userBalanceData: {},
      };
    default:
      return state;
  }
};

const UserDetails = () => {
  const { userSlug } = useParams();
  const history = useHistory();
  console.log(userSlug);
  const [userState, userDispatch] = useReducer(userIdreducer, userIntialState);
  const [balanceState, userBalanceDispatch] = useReducer(
    userBalanceReducer,
    userBalanceState
  );

  useEffect(() => {
    (async () => {
      try {
        const specificUserDetails = await fetch(
          `https://bankingbackendapp.herokuapp.com/clients/${userSlug}`
        );
        const specificUserDetailsInJson = await specificUserDetails.json();
        userDispatch({
          type: "FETCH BY ID SUCCESS",
          payload: specificUserDetailsInJson,
        });
      } catch (err) {
        userDispatch({
          type: "FETCH BY ID ERROR",
        });
      }
    })();
  }, [userSlug]);
  console.log(userState);
  useEffect(() => {
    (async () => {
      try {
        const specificUserBalance = await fetch(
          `https://bankingbackendapp.herokuapp.com/accounts/account/${userSlug}`
        );
        const specificUserBalanceInJson = await specificUserBalance.json();

        userBalanceDispatch({
          type: "FETCH BY CLIENTID SUCCESS",
          payload: specificUserBalanceInJson,
        });
      } catch (err) {
        userBalanceDispatch({
          type: "FETCH BY CLIENTID ERROR",
        });
      }
    })();
  }, [userSlug]);

  const handleBackInUserDetail = () => {
    history.replace("/client");
  };

  return (
    <div>
      <Button text="back" type="button" handleClick={handleBackInUserDetail} />

      {userState.userData && balanceState.userBalanceData ? (
        <UserDetail
          userIdData={userState.userData}
          balanceData={balanceState.userBalanceData[0]}
        />
      ) : null}
    </div>
  );
};

export default UserDetails;
