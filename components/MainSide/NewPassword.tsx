import React, { useState } from "react";
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

  const [isExpanded, setIsExpanded] = useState(false);
  const [scale, setScale] = useState(1); // State to track zoom level
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile view

  return (
    <div
      className={`min-h-screen ${
        isExpanded ? "bg-gray-500" : "bg-white"
      } transition-all duration-300`}
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
          <p className="text-left text-md text-white-900">
            This page can be used after Email + OTP signin page or any other way
            as per your requirement. Just that there is requirement to fulfill
            three things that is email id, password and confirm password into
            the Provider. Next the Provider should be sent to backend. Backend
            should import Simplauth and Prisma which has EmailPassPrisma module
            as given below. The response would be{" "}
            {` { message : ”Password has been updated successfully", status : "success" }`}{" "}
            if everything goes right. Thus the new password is created so
            redirect to the home page or any other page as per the website.
          </p>

          {/* --------------------------------------------------------------------- */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            <p>
              In the .env file of the project add the JWT_SECRET_KEY variable
              having a random secret string which can be used to encrypt and
              decrypt the JWT token.
            </p>
            <CopyableText code={CodeText1} />
            You need to create this Provider with specific requirements, so
            please do not modify it. The email must be unique and should not
            already exist in the database. Pass the password and confirmpassword
            should be same.
            <CopyableText code={CodeText2} />
            Hit the backedn route with this Provider in the body.
            <br />
            <CopyableText code={CodeText3} />
            In the backend route, import the Simplauth library and add Prisma to
            the Provider and make sure that Prisma has a EmailPassPrisma in its
            schema. Then pass the Provider as a parameter to Simplauth.
            <CopyableText code={CodeText4} />
            If JWT_SECRET_KEY is not defined in the .env file, the response will
            be{" "}
            {` { message: "Please define the environment variable JWT_SECRET_KEY", status: "failed" }`}
            . If the email, password, confirmpassword format is not in the
            proper format i.e., string then the response will be,
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            password and confirmpassword are not same then the response will be,
            {` { message: "Password mismatch", status: "failed" }`}. If the
            email is not in the database then the response will be,
            {` { message: "User not found", status: "failed" }`}. For any other
            error, the catch block will handle it and return i.e.,{" "}
            {` catch (e: any) { throw new Error(e.toString());}`} .
            <CopyableText code={CodeText5} />
            <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p>
                If you'd like to refer to the example code, check out this
                GitHub repository:
              </p>
              <Link
                href="https://www.npmjs.com/package/simplauth"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 underline transition duration-200 ease-in-outrelative text-blue-600 font-semibold underline decoration-transparent underline-offset-4  hover:decoration-blue-600 hover:text-blue-700 hover:scale-105 transition duration-200 ease-in-out "
              >
                https://www.npmjs.com/package/simplauth
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
