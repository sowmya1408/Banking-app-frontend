import { auth } from "./firebase";

export const signInWithEmail = async (email, password) => {
  try {
    const results = await auth().signInWithEmailAndPassword(email, password);
    console.log(results);
    //const idToken = results.credential.idToken;
    const cred = auth.EmailAuthProvider.credential(email, password);
    console.log(cred);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (email, password) => {
  try {
    const newUser = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(newUser);
    return newUser;
  } catch (err) {
    console.log(err.message);
  }
};

export const signOutEmail = async () => {
  await auth().signOut();
  console.log("Signed out");
};
