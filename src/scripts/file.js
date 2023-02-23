
import { getQueryObjectFrom } from "./utility";

// AUTH
import { auth, db, storage } from "./firebase";

// FIRESTORE
import { collection, query, where } from "firebase/firestore";
import { doc, getDoc, setDoc, setDocs } from "firebase/firestore";

let user = auth.currentUser();

onAuthStateChanged(auth, (signedIn) => {
    if (signedIn) {
        user = auth.currentUser();
    } else {
        window.location.replace("../auth");
    }
});

/*

    1. Setup workspace with user preferences.
    2. Get current patient file.
    3. Display patient profile.
    3. Display patient SOAP details.
    4. Display patient alerts.
    5. Display shortcut tools.
    6. Display visit history.

*/

window.addEventListener("load", async () => {

    let userPreferences = await getDoc(collection(db, "users"), user.uid),
        patientFile = await getDoc(collection(db, "patients"), patientId);

    showProgress(0, `Loading workspace settings...`);
});






