
import { app } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { doc, getDoc, setDoc, setDocs } from "firebase/firestore";

export const db = getFirestore(app);

export function read(query = {}, collection = ""){
  
}

function write(){
  read()
}

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {

});

const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}