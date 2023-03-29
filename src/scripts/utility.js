

import { initializeApp } from "firebase/app";

// FIRESTORE IMPORTS
import { getFirestore } from "firebase/firestore";

// STORAGE IMPORTS
import { getStorage, ref } from "firebase/storage";

// AUTH IMPORTS
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { reauthenticateWithCredential } from "firebase/auth";
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { updateProfile, updateEmail, updatePassword, deleteUser } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDmzfuuomV1asVXpZbWSx8PfveRdLXMGgw",
    authDomain: "praktiki-7cc17.firebaseapp.com",
    projectId: "praktiki-7cc17",
    storageBucket: "praktiki-7cc17.appspot.com",
    messagingSenderId: "25413273869",
    appId: "1:25413273869:web:4494e5e4c0125e06310844",
    measurementId: "G-XJCE3G9Q55"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

class ui {
    constructor(element = {
        parent: "body",
        tag: "div",
        id: randomString(),
        classList: [],
        attr: {},
        text: String
    }){
        parent = element.parent,
        tag = element.tag,
        id = element.id,
        classList = element.classList,
        attr = element.attr,
        text = element.text
    }

    createNew(){
        let node = document.createElement(this.tag);
        node.append(document.createTextNode(this.text));
        node.id = this.id;
        this.classList.forEach(item => {
            node.classList.add(item);
        });
        for(const [key, val] of Object.entries(this.attr)) node.setAttribute(key, val);
    }

}

// AUTH FUNCTIONS

export function newSignUp(){

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
  
export function signIn(){

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

// BROWSER FUNCTIONS

export function getQueryFrom(url) {
    let obj = {};
    for(const [key, value] of new URLSearchParams(url).entries()) obj[key] = value;
    return obj;
}

export function randomString() {
    window.crypto.getRandomValues(new Uint32Array(1)).toString();
}

// USER FUNCTIONS

export async function applyPreferencesFor(user){
    
}