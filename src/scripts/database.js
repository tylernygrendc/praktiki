import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmzfuuomV1asVXpZbWSx8PfveRdLXMGgw",
    authDomain: "praktiki-7cc17.firebaseapp.com",
    projectId: "praktiki-7cc17",
    storageBucket: "praktiki-7cc17.appspot.com",
    messagingSenderId: "25413273869",
    appId: "1:25413273869:web:4494e5e4c0125e06310844",
    measurementId: "G-XJCE3G9Q55"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {

});

import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}