import { auth } from "./firebase";

export const getTokenWithHeaders = async () => {
  const token = await auth().currentUser.getIdToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  return headers;
};
