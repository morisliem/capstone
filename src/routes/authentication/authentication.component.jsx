import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainerStyle} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainerStyle>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainerStyle>
  );
};

export default Authentication;
