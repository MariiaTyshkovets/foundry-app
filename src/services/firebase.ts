import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBILGjJuYlSDpvw93C0N830ziLI7QkZcDE",
    authDomain: "foundry-app-3sq06v.firebaseapp.com",
    projectId: "foundry-app-3sq06v",
    storageBucket: "foundry-app-3sq06v.appspot.com",
    messagingSenderId: "429942933212",
    appId: "1:429942933212:web:694e63c152b7a08f431619"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const firestore = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            sessionStorage.setItem("name", JSON.stringify(name).replaceAll('"',""));
            sessionStorage.setItem("email", JSON.stringify(email).replaceAll('"',""));
            sessionStorage.setItem("profilePic", JSON.stringify(profilePic).replaceAll('"',""));
        }).catch((error) => {
            console.log(error);
        })
}

export const logOut = (signInFunction: any) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("profilePic");
        signInFunction(true);
    }).catch((error) => {
        console.log(error)
    });
}

export default app;