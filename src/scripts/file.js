
import { auth } from "./auth";

onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    } else {
    window.location.replace("../auth");
    }
});

