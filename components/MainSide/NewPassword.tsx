import React from "react";
import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
function NewPassword() {
  const CodeText1 = `JWT_SECRET_KEY="secret" //jwt random secret key for encryption and decryption permission`;
  const CodeText2 = ` const Provider = {
      NewPassword: {
        email,
        password,
        confirmpassword,
      },
    };`;
  const CodeText3 = `const response = await fetch(\`backendroute\`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Provider,
        }),
      });
      const res = await response.json();`;

  const CodeText4 = `import { Simplauth } from "simplauth";
//import prisma and add it to the Provider

 let Provider = {
      NewPassword: { ...data.Provider.NewPassword, prisma },
    };

const response = await Simplauth(Provider);`;
  const CodeText5 = `if (res.status == "success") {
        router.push("/home");  //redirect to home page or any page as per the website
      }`;

  return (
    <div
      className={`min-h-screen bg-white
       transition-all duration-300`}
    >
      <div className="flex-col justify-start items-start pl-4">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>New Password Creation</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

        <h2 className="text-start text-2xl font-bold text-white-900">
          Overview
        </h2>
        <br />

        <div className="flex flex-col gap-4 items-start justify-center">
          <div className="text-left text-md text-white-900">
            This page can be used after the Email + OTP sign-in page or any
            other method, depending on your requirements. The page must capture
            three inputs: email ID, password, and confirm password, which should
            be included in the Provider. The Provider is then sent to the
            backend, where Simplauth and Prisma (with the EmailPassPrisma
            module) are used. If everything is successful, the response will be:
            {` { message : ”Password has been updated successfully", status : "success" }`}{" "}
            . Once the new password is created, redirect the user to the home
            page or another page as needed.
          </div>

          {/* --------------------------------------------------------------------- */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            In the .env file of the project add the JWT_SECRET_KEY variable
            having a random secret string which can be used to encrypt and
            decrypt the JWT token.
            <CopyableText code={CodeText1} />
            You must create this Provider with the specified requirements, so
            please do not modify it. The email must be unique and not already
            exist in the database. Additionally, the password and confirm
            password must match.
            <CopyableText code={CodeText2} />
            Hit the backend route with this Provider in the body.
            <br />
            <CopyableText code={CodeText3} />
            In the backend route, import the Simplauth library and integrate
            Prisma into the Provider. Ensure that Prisma includes the
            EmailPassPrisma model in its schema. Then, pass the Provider as a
            parameter to Simplauth for authentication.
            <CopyableText code={CodeText4} />
            If the JWT_SECRET_KEY is not defined in the .env file, the response
            will be:
            {` { message: "Please define the environment variable JWT_SECRET_KEY", status: "failed" }`}
            . If the email, password, or confirm password is not in the correct
            format (i.e., not a string), the response will be:
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            password and confirm password do not match, the response will be:
            {` { message: "Password mismatch", status: "failed" }`}. If the
            email is not found in the database, the response will be:
            {` { message: "User not found", status: "failed" }`}. For any other
            errors, the catch block will handle them and return:
            {` catch (e: any) { throw new Error(e.toString());}`} .
            <CopyableText code={CodeText5} />
            <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
            <div className="flex flex-col gap-4 items-center justify-center">
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
    </div>
  );
}

export default NewPassword;
