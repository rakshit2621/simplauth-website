import React from "react";
import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
function EmailSignin() {
  const CodeText1 = `JWT_SECRET_KEY="secretkey" //jwt random secret key for encryption and decryption permission`;
  const CodeText2 = `const mycookies = document.cookie;
const cookiePairs = mycookies.split(";");
let cookieValue = "";

for (let i = 0; i < cookiePairs.length; i++) {
    const pair = cookiePairs[i].trim();
    const parts = pair.split("=");

    if (parts[0] === "simplauthsignin") {
      cookieValue = parts[1];
      console.log(cookieValue); // Output: Cookie value
      break;
    }
}`;
  const CodeText3 = `useEffect(() => {
    async function calljwt() {
      if (cookieValue && cookieValuezest) {
        await jwtapi(cookieValue);
      }
    }
    calljwt();
  }, []);
  
  async function jwtapi(cookieValue: any) {
    try {
      const response = await fetch('backendroute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Provider: { JwtCheck: { cookie: cookieValue } } }),
      });
      const res = await response.json();
      setIsLoading(false);
  
      if (res.status === 'success') {
        cookies.set('simplauthsignin', res.newjwt);
        router.replace('/home');  //redirect to home page or any page as per the website
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error during JWT API call:', error);
    }
  }`;

  const CodeText4 = `model EmailPassPrisma{
  id        String @id @default(uuid())
  email     String @unique
  password  String @default("")
}`;
  const CodeText5 = `import { Simplauth } from "simplauth";
//import prisma and add it to the Provider

 let Provider = {
      EmailPassSignin: { ...data.Provider.EmailPassSignin, prisma },
    };

const response = await Simplauth(Provider);`;

  const CodeText6 = `const Provider = {
    EmailPassSignin: { email, password },
  };
  
const response = await fetch('backendroute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Provider }),
});
const res = await response.json();
`;

  const CodeText7 = `if (res.status == "success") {
        cookies.set("simplauthsignin", res.newjwt);
        router.push("/home");   //redirect to whichever page according to the website
  }`;

  return (
    <div
      className={`min-h-screen bg-white
      } transition-all duration-300`}
    >
      <div className="flex-col justify-start items-start pl-4">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>Email Login</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

        <h2 className="text-start text-2xl font-bold text-white-900">
          Overview
        </h2>
        <br />

        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="text-left text-md text-white-900">
            This has two parts, Autologin and Manual login. And both are
            necessary to be used.
          </p>
          <p className="text-left text-md text-white-900">
            In brief, the autologin feature allows you to automatically log in
            to your account when you visit the website. It works by sending a
            request to the server upon your visit, and if successful, you are
            automatically logged in. The manual login feature allows you to log
            in manually if autologin fails. It prompts you to enter your email
            and password when you visit the website.
          </p>
          {/* ---------------------------------Autologin------------------------------------ */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Autologin
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            <p>
              In the .env file of the project add the JWT_SECRET_KEY variable
              having a random secret string which can be used to encrypt and
              decrypt the JWT token.
            </p>
            <CopyableText code={CodeText1} />
            Extract the cookie named simplauthsignin.
            <CopyableText code={CodeText2} />
            For autologin, use the useEffect hook to access the cookie value and
            initiate autologin on page load. Pass the Provider in the request
            body exactly as shown in the example below.
            <br />
            <CopyableText code={CodeText3} />
            In the backend route, import the Simplauth library and add Prisma to
            the Provider. Ensure that EmailPassPrisma is defined in the Prisma
            schemas. Then pass the Provider as a parameter to the Simplauth
            library.
            <CopyableText code={CodeText4} />
            <CopyableText code={CodeText5} />
            <p>
              Simplauth will return {` { newjwt, status: "success" }`} if
              everything goes well. This response can then be used to store
              newjwt in a cookie named simplauthsignin, effectively updating or
              refreshing the JWT to extend its validity for the next 7 days.
              This completes the autologin process.
            </p>
          </div>
          {/* ----------------------------------------Manual login----------------------------------- */}
          <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Manual login
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            <p>
              If autologin fails due to reasons such as the simplauthsignin
              cookie being deleted, expired, or never created because the user
              hasn’t signed up, the user will need to log in manually by
              providing credentials. The user must supply two things: email and
              password within the Provider. Keep the Provider exactly as shown,
              and send a request to the backend as demonstrated below.
            </p>
            <CopyableText code={CodeText6} />
            Send the request to the same backend endpoint; everything in the
            backend will remain the same. If successful, the response will be{" "}
            {` { newjwt, status: "success" }`}. The newjwt should then be stored
            in a cookie named simplauthsignin.
            <CopyableText code={CodeText7} />
            If JWT_SECRET_KEY is not defined in the .env file, the response will
            be{" "}
            {` { message: "Please define the environment variable JWT_SECRET_KEY", status: "failed" }`}
            . The user credentials — email and password as string are not met,
            then the response will be{" "}
            {` { message: "Invalid credentials", status: "failed" }`}. If the
            email or username does not match then the response will be,
            {` { message: "Invalid email", status: "failed" }`}. If the password
            is incorrect then
            {` { message: "Invalid password", status: "failed" }`}. For any
            other error, the catch block will handle it and return{" "}
            {` { message: "Something went wrong", status: "failed", error: e }`}
            .
            <br />
            <br />
            <br />
            <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
            <p>
              If you would like to refer to the example code, check out this
              GitHub repository:
            </p>
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

export default EmailSignin;
