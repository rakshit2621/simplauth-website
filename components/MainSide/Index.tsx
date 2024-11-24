import React from "react";
import InstallationPage from "@/components/MainSide/InstallationPage";
import ProjectStructure from "@/components/MainSide/ProjectStructure";
import UserEmailSignup from "@/components/MainSide/UserEmailSignup";
import EmailSignup from "@/components/MainSide/EmailSignup";
import UserEmailSignin from "@/components/MainSide/UserEmailLogin";
import EmailSignin from "@/components/MainSide/EmailLogin";
import EmailToOTP from "@/components/MainSide/EmailToOTP";
import NewPassword from "@/components/MainSide/NewPassword";
import GoogleOAuth from "@/components/MainSide/GoogleOAuth";
import GithubOAuth from "@/components/MainSide/GithubOAuth";
import Creator from "@/components/MainSide/Creator";

interface Props {
  number: number;
}
function Index(props: Props) {
  //get the number from props and assiign number type to it
  // const number = props as number;
  const { number } = props;
  if (number == 1) {
    return (
      <>
        <InstallationPage />
      </>
    );
  } else if (number == 2) {
    return (
      <>
        <ProjectStructure />
      </>
    );
  } else if (number == 3) {
    return (
      <>
        <EmailSignup />
      </>
    );
  } else if (number == 4) {
    return (
      <>
        <EmailSignin />
      </>
    );
  } else if (number == 5) {
    return (
      <>
        <UserEmailSignup />
      </>
    );
  } else if (number == 6) {
    return (
      <>
        <UserEmailSignin />
      </>
    );
  } else if (number == 7) {
    return (
      <>
        <EmailToOTP />
      </>
    );
  } else if (number == 8) {
    return (
      <>
        <NewPassword />
      </>
    );
  } else if (number == 9) {
    return (
      <>
        <GoogleOAuth />
      </>
    );
  } else if (number == 10) {
    return (
      <>
        <GithubOAuth />
      </>
    );
  } else if (number == 11) {
    return (
      <>
        <Creator />
      </>
    );
  }
}
export default Index;
