import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxEomXroB282I7x-PfrdTk4WegQUPSSgI",
  authDomain: "capstone-c7ea2.firebaseapp.com",
  projectId: "capstone-c7ea2",
  storageBucket: "capstone-c7ea2.appspot.com",
  messagingSenderId: "986622860097",
  appId: "1:986622860097:web:5dcf6d2af3d7c112039fc0",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error occured when creating user => ", err.message);
    }
  }

  return userDocRef;
};
