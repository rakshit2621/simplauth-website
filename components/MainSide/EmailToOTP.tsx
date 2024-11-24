import React from "react";
import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
function EmailToOTP() {
  const CodeText1 = `SENDER_EMAIL="xyz@gmail.com" // The email address used to send the OTP
SENDER_EMAIL_PASSWORD="asdasddwefeff" // Secret password generated from the Gmail platform to enable sending emails
JWT_SECRET_KEY="secretkey" // Random secret key used for JWT encryption and decryption
REDIS_HOST="redis-232434.fsdf3.3444.44-cloud.com" // Your Redis host URL
REDIS_PORT="322323" // Your Redis port
REDIS_PASSWORD="fsdfsefgfdggewegergerhr" // Your Redis password`;
  const CodeText2 = `const Provider = { EmailtoOtp: { email } };

const response = await fetch(\`backendroute\`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Provider,
        }),
});
const res = await response.json();`;
  const CodeText3 = `model EmailPassPrisma{
  id        String @id @default(uuid())
  email     String @unique
  password  String @default("")
}`;

  const CodeText4 = `import { Simplauth } from "simplauth";
//import prisma and add it to the Provider

 let Provider = {
      EmailPassSignin: { ...data.Provider.EmailPassSignin, prisma },
    };

const response = await Simplauth(Provider);`;
  const CodeText5 = `import React, { useState } from "react";

let arr: { email: string }[] = [];

function useEmail() {
  const [email, setEmail] = useState("");

  function setEmailOnly(e: string) {
    setEmail(e);
    arr.push({ email: e });
  }

  function getEmail() {
    return arr[0]?.email;
  }

  return { email, setEmailOnly, getEmail };
}

export default useEmail;
`;

  const CodeText6 = `import useEmail from "./useEmail";

const { setEmailOnly, getEmail } = useEmail();
setEmailOnly(inputEmail);  // Call the hook's function to store email
const email = getEmail();  // Call the hook's function to get email`;

  const CodeText7 = `if (data.status == "success") {
        setEmailOnly(email);
        router.push("/otp"); //redirecting to OTP page
}`;
  const CodeText8 = ` const Provider = { OtpVerify: { email, otp } };`;
  const CodeText9 = `const response = await fetch(\`backendroute\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Provider
    })
  });
  const res = await response.json();`;
  const CodeText10 = `model OtpVerifyPrisma{
  id        String @id @default(uuid())
  email  String @unique
  otp   String   @default("")
}`;
  const CodeText11 = `import { Simplauth } from "simplauth";
//import prisma and add it to the Provider

  let Provider = {
        OtpVerify: { ...data.Provider.OtpVerify },
      };

const response = await Simplauth(Provider);`;
  const CodeText12 = `if (res.status == "success") {
        cookies.set("simplauthsignin", res.newjwt);
        //redirect to home page or any page as per the website
 }`;

  return (
    <div className={`min-h-screen bg-white transition-all duration-300`}>
      <div className="flex-col justify-start items-start pl-4">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>Email to OTP Signin Verification</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

        <h2 className="text-start text-2xl font-bold text-white-900">
          Overview
        </h2>
        <br />

        <div className="flex flex-col gap-4 items-start justify-center">
          <div className="text-left text-md text-white-900">
            This is an optional feature where user can be verified by sending
            OTP to the email address.
          </div>
          <div className="text-left text-md text-white-900">
            In brief, the email credential is sent from the frontend to the
            backend via a specific Provider. This provider is then passed to
            Simplauth as a parameter in the backend. If successful, OTP will be
            sent to the user gmail address. Simplauth will return a response
            with a success status. Then redirect the user to the OTP page. Here
            OTP credential is used in the Provider and sent to the backend. The
            backedend will hit the Simplauth function and the response would
            have a JWT to be stored in the cookie named simplauthsignin.
          </div>
          {/* ---------------------------------email page------------------------------------ */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Frontend Email Field Page
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            In the .env file of the project add all these variables.
            <CopyableText code={CodeText1} />
            Have a frontend page where the user can enter their email address.
            The email will be used in the Provider and then this will be sent to
            the backend.
            <CopyableText code={CodeText2} />
            In the backend, import the Prisma having the schema named
            EmailPassPrisma as shown below.
            <br />
            <CopyableText code={CodeText3} />
            In the backend route, import the Simplauth library and add Prisma to
            the Provider. Then pass the Provider as a parameter to the Simplauth
            library.
            <CopyableText code={CodeText4} />
            The response will be
            {` { message: "OTP is sent to the email address", status: "success" }`}
            . The email has to be stored somewhere for further use in the OTP
            page. So you’ll then need to store the user email input for further
            use on the OTP frontend page. One way to do this is by creating
            setter and getter methods within a custom hook function, which can
            be used on the OTP page. For example, create a custom hook component
            named useEmail.js with the following structure:
            <CopyableText code={CodeText5} />
            To use the getter and setter from the hook, see the example code
            below:
            <CopyableText code={CodeText6} />
            Returning to the main flow: after receiving the response, store the
            email ID for later use on the OTP page, and then redirect to the OTP
            page. After redirecting to the OTP page, the Provider will need the
            email, which can be obtained from the custom hook getter function,
            and the OTP from the user input field. The format of the Provider
            is:
            <CopyableText code={CodeText7} />
          </div>
          {/* ----------------------------------------OTP Page----------------------------------- */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Frontend OTP page
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            After redirecting to the OTP page, the Provider will need the email,
            which can be obtained from the custom hook getter function, and the
            OTP from the user input field. The format of the Provider is:
            <CopyableText code={CodeText8} />
            Then send a request to the backend route with this Provider included
            in the request body.
            <CopyableText code={CodeText9} />
            Add the following Prisma schema to the backend Prisma schema file
            for the database model OtpVerifyPrisma as shown below.
            <CopyableText code={CodeText10} />
            In the backend route, import the Simplauth library and add Prisma to
            the Provider. Then pass the Provider as a parameter to the Simplauth
            library.
            <CopyableText code={CodeText11} />
            If everything goes well, the response will be{" "}
            {` { newjwt, status: "success" }`}. Then store the JWT token in a
            cookie named simplauthsignin and redirect to the home page or
            another page, depending on the website design.
            <CopyableText code={CodeText12} />
            If JWT_SECRET_KEY is not defined in the .env file, the response will
            be{" "}
            {` { message: "Please define the environment variable JWT_SECRET_KEY", status: "failed" }`}
            . For the Email page if the email format does not match then the
            response will be,
            {` { message: "Invalid email", tatus: "failed" }`}. For the OTP page
            if the email or OTP format does not match then the response will be,
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            OTP is wrong or expired then the response will be{" "}
            {` { message: "Wrong OTP or OTP expired", status: "failed" }`}. For
            any other error, the catch block will handle it and return{" "}
            {` { message: "Something went wrong", status: "failed", error: e }`}
            .
            <br />
            <br />
            <br />
            <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
            If you would like to refer to the example code, check out this
            GitHub repository:
            <Link
              href="https://www.npmjs.com/package/simplauth"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 underline transition duration-200 ease-in-outrelative text-blue-600 font-semibold underline decoration-transparent underline-offset-4  hover:decoration-blue-600 hover:text-blue-700 hover:scale-105 transition duration-200 ease-in-out "
            >
              https://github.com/rakshit2621/simplauth-website
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailToOTP;
