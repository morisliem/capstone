import {
  //   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";
import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   useEffect(() => {
  //     async function signInWithRedirect() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         await createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     signInWithRedirect();
  //   }, []);

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
