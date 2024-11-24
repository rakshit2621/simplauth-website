import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
// import { Link } from "lucide-react";
import React from "react";
export default function EmailSignup() {
  const CodeText1 = `JWT_SECRET_KEY="secretkey" //jwt random secret key for encryption and decryption permission`;
  const CodeText2 = `const Provider = {
     EmailPassSignup: { email, password, otpneeded: false},
};`;
  const CodeText3 = `const response = await fetch(\`backendroute\`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Provider
    })
  });`;
  const CodeText4 = `model UserEmailPassPrisma{
  id        String @id @default(uuid())
  email     String @unique
  password  String
}`;
  const CodeText5 = `import { Simplauth } from "simplauth";

//import prisma and add it to the Provider
 let Provider = {
      EmailPassSignup: { ...data.Provider.EmailPassSignup, prisma },
    };

const response = await Simplauth(Provider);`;
  const CodeText6 = `if (response.status == "success") {
        cookies.set("simplauthsignin", data.newjwt);
        //redirect to home page or any page as per the website
 }`;

  const CodeText7 = `SENDER_EMAIL="xyz@gmail.com" // The email address used to send the OTP
SENDER_EMAIL_PASSWORD="asdasddwefeff" // Secret password generated from the Gmail platform to enable sending emails
JWT_SECRET_KEY="secretkey" // Random secret key used for JWT encryption and decryption
STATE_SECRET="sdfsdfsdfsdfsdfsd" // Secret random string used for OAuth
REDIS_HOST="redis-232434.fsdf3.3444.44-cloud.com" // Your Redis host URL
REDIS_PORT="324523" // Your Redis port
REDIS_PASSWORD="fsdfsdfsfwewegergerhr" // Your Redis password`;

  const CodeText8 = `const Provider = {
     EmailPassSignup: { email, password, otpneeded: true},
};`;
  const CodeText9 = `import React, { useState } from "react";

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
  const CodeText10 = `import useEmail from "./useEmail";

const { setEmailOnly, getEmail } = useEmail();
setEmailOnly(inputEmail);  // Call the hook's function to store email
const email = getEmail();  // Call the hook's function to get email`;

  const CodeText11 = `if (response.status == "success") {
setEmailOnly(inputEmail);
//redirect to otp page
}`;
  const CodeText12 = ` const Provider = { OtpVerify: { email, otp } };`;
  const CodeText13 = `model OtpVerifyPrisma{
  id        String @id @default(uuid())
  email  String @unique
  otp   String   @default("")
}`;

  return (
    <div
      className={`min-h-screen bg-white
       transition-all duration-300`}
    >
      <div className="flex-col justify-start items-start pl-4">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>Email Signup</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
        <h2 className="text-start text-2xl font-bold text-white-900">
          Overview
        </h2>
        <br />
        <div className="flex flex-col gap-4 items-start justify-center">
          <div className="text-left text-md text-white-900">
            If you are building a web application that requires adding a email
            and password to the database, this section is for you.
            <br /> <br />
            In brief, the credentials are sent from the frontend to the backend
            via a specific Provider. This provider is then passed to Simplauth
            as a parameter. If successful, Simplauth will return a response with
            a JWT and a success status. Additionally, the data will be stored in
            the database since the provider will integrate Prisma. Finally, the
            JWT from the response should be saved in the frontend cookies,
            completing the setup.
            <br />
            <br />
            It has 2 approaches ⇒ Without OTP and With OTP
          </div>
          {/* ---------------------------------without otp------------------------------------ */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className=" text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Without OTP
          </h3>
          <div className="flex flex-col gap-4 items-left justify-center">
            <br />
            In the .env file of the project add the JWT_SECRET_KEY variable
            having a random secret string which can be used to encrypt and
            decrypt the JWT token.
            <CopyableText code={CodeText1} />
            <CopyableText code={CodeText2} />
            You need to create this Provider with specific requirements, so
            please do not modify it. The email must be unique and should not
            already exist in the database. The password must follow a specific
            format to pass validation through Zod: it should be at least 8
            characters long and include at least one uppercase letter, one
            lowercase letter, one number, and one special character. The
            otpneeded field should be set to false if one does not want to
            verify the user by sending OTP. Then, send a POST request to the
            backend with this Provider included in the request body.
            <br />
            <CopyableText code={CodeText3} />
            EmailPassPrisma named Prisma schema has to be made in the backend
            Prisma schema file for the database named EmailPassPrisma.
            <br />
            <CopyableText code={CodeText4} />
            In the backend route, import the Simplauth library, and add Prisma
            to the Provider. Then, pass the Provider as a parameter to the
            Simplauth library.
            <br />
            <CopyableText code={CodeText5} />
            Simplauth will return {` { newjwt, status: "success" }`} if
            everything goes well. This response can then be used on the frontend
            to store the newjwt in a cookie named simplauthsignin. Example:
            <CopyableText code={CodeText6} />
            If JWT_SECRET_KEY is not available in the .env file, the response
            will be
            {` {message: "Please define environment variable with name JWT_SECRET_KEY", status: "failed"}`}
            . The user credentials — email in a valid email format and a
            password with at least 8 characters, including one lowercase, one
            uppercase, one special character, and one number — must match the
            required format. If any of these do not meet the specified format,
            the response will be
            {` { message: "Invalid credentials", status: "failed" }`}. If user
            already exists then the response would be{" "}
            {`{message: "User already exists", status: "failed"}`}. For any
            other error, the catch block will handle it as follows:{" "}
            {`catch (e: any) {throw new Error(e.toString());} `}.
          </div>
          {/* ----------------------------------------with otp----------------------------------- */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            With OTP
          </h3>
          <div className="flex flex-col gap-4 items-left justify-center">
            <br />
            In the .env file of the project add all these variables.
            <CopyableText code={CodeText7} />
            <CopyableText code={CodeText8} />
            You need to create this Provider with specific requirements, so
            please do not modify it. The email must be unique and should not
            already exist in the database. The password must follow a specific
            format to pass validation through Zod: it should be at least 8
            characters long and include at least one uppercase letter, one
            lowercase letter, one number, and one special character. The
            otpneeded field should be set to true if one wants to verify the
            user by sending OTP. Then, send a POST request to the backend with
            this Provider included in the request body.
            <br />
            <CopyableText code={CodeText3} />
            EmailPassPrisma named Prisma schema has to be made in the backend
            Prisma schema file for the database named EmailPassPrisma.
            <br />
            <CopyableText code={CodeText4} />
            In the backend route, import the Simplauth library, and add Prisma
            to the Provider. Then, pass the Provider as a parameter to the
            Simplauth library.
            <br />
            <CopyableText code={CodeText5} />
            If everything goes well, the response will be{" "}
            {` { message: "User has signed up; now check the OTP", status: "success" }`}
            . You’ll then need to store the user email input for further use on
            the OTP frontend page. One way to do this is by creating setter and
            getter methods within a custom hook function, which can be used on
            the OTP page. For example, create a custom hook component named
            useEmail.js with the following structure:
            <CopyableText code={CodeText9} />
            To use the getter and setter from the hook, see the example code
            below:
            <CopyableText code={CodeText10} />
            Returning to the main flow: after receiving the response, store the
            email ID for later use on the OTP page, and then redirect to the OTP
            page.
            <CopyableText code={CodeText11} />
            After redirecting to the OTP page, the Provider will need the email,
            which can be obtained from the custom hook getter function, and the
            OTP from the user input field. The format of the Provider is:
            <CopyableText code={CodeText12} />
            Then send a request to the backend route with this Provider included
            in the request body.
            <CopyableText code={CodeText3} />
            Add the following Prisma schema to the backend Prisma schema file
            for the database model OtpVerifyPrisma as shown below.
            <CopyableText code={CodeText13} />
            In the backend route, import the Simplauth library and add Prisma to
            the Provider. Then pass the Provider as a parameter to the Simplauth
            library.
            <CopyableText code={CodeText5} />
            If everything goes well, the response will be{" "}
            {` { newjwt, status: "success" }`}. Then store the JWT token in a
            cookie named simplauthsignin and redirect to the home page or
            another page, depending on the website design.
            <CopyableText code={CodeText6} />
            If JWT_SECRET_KEY is not defined in the .env file, the response will
            be{" "}
            {` { message: "Please define the environment variable JWT_SECRET_KEY", status: "failed" }`}
            . The user credentials — email in a valid format, and a password
            with at least 8 characters, including one lowercase letter, one
            uppercase letter, one special character, and one number—must meet
            the specified format. If any of these criteria are not met, the
            response will be{" "}
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            user already exists, the response will be{" "}
            {` { message: "User already exists", status: "failed" }`}. For any
            other error, the catch block will handle it and return{" "}
            {` { message: "Something went wrong", status: "failed", error: e }`}
            . If the OTP format is incorrect, the response will be{" "}
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            OTP is wrong or expired, the response will be{" "}
            {` { message: "Wrong OTP or OTP expired", status: "failed" }`}.
            <br />
            <br />
          </div>
        </div>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
        <div className="flex flex-col gap-4 items-center justify-center">
          Still if you want to refer the example code then checkout this gihub
          repo :{" "}
          <Link
            href="https://www.npmjs.com/package/simplauth"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 underline transition duration-200 ease-in-outrelative text-blue-600 font-semibold underline decoration-transparent underline-offset-4  hover:decoration-blue-600 hover:text-blue-700 hover:scale-105 transition duration-200 ease-in-out "
          >
            https://github.com/rakshit2621/simplauth-website
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
