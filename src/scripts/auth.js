
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { reauthenticateWithCredential } from "firebase/auth";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { updateProfile, updateEmail, updatePassword, deleteUser } from "firebase/auth";

const auth = getAuth();

window.addEventListener("load", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      window.location.replace("../auth");
    }
  });
});

function signUp(){

  let email = document.querySelector("input[type=`email`]");
  let password = document.querySelector("input[type=`password`]");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signIn(){
  let email = document.querySelector("input[type=`email`]");
  let password = document.querySelector("input[type=`password`]");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}