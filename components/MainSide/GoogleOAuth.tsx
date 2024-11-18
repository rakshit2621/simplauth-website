import React, { useState, useEffect } from "react";
import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
import Image from "next/image";
function GoogleOAuth() {
  const CodeText1 = `JWT_SECRET_KEY="secretkey" // Random secret key used for JWT encryption and decryption
GOOGLE_CLIENT_ID="612555997600-69ktpq8kii2ummmdi84uvl5pgnpc5hmp.apps.googleusercontent.com" // Client ID for the Google OAuth application
GOOGLE_CLIENT_SECRET="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" // Client secret for the Google OAuth application
GOOGLE_REDIRECT_URL="http://localhost:3000/OAuthCallbacks/Google" // Redirect URL for Google OAuth callback
STATE_SECRET="5Q7q6W3E8R4T9Y0U2I" // Secret key for securing the OAuth state parameter
`;
  const CodeText2 = `const response = await fetch(\`backendroute\`); //backend route to get the Google consent screen url
const url = await response.json();
router.push(url); // Redirect to the Google consent screen url`;
  const CodeText3 = `import { Simplauth } from "simplauth";
   let Provider = {
    GoogleOAuthURL: true,
  };
const response = await Simplauth(Provider);`;

  const CodeText4 = `useEffect(() => {
    const handleAuthCallback = async () => {
      if (typeof window === "undefined") return; // Ensure code only runs in the browser.

      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const error = urlParams.get("error");

      if (error) {
        setStatus(\`Authentication failed: \${error}\`);
        return;
      }

      if (!code) {
        setStatus("Error: No authorization code received");
        return;
      }

      try {
        const response = await fetch("backendroute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }

        const res = await response.json();
        console.log("Authentication successful:", data);

        cookies.set("simplauthsignin", res.newjwt); // Store the JWT in the cookie
       
        setStatus("Authentication successful! Redirecting...");
        router.push("/home"); //redirect to home or any page as per the website

      } catch (error) {
        console.error("Authentication error:", error);
        setStatus("Authentication failed. Please try again.");
      }
    };

    handleAuthCallback();
  }, [router]); // Add \`router\` as a dependency.
`;
  const CodeText5 = `model EmailPassPrisma{
  id        String @id @default(uuid())
  email     String @unique
  password  String @default("")
}`;

  const CodeText6 = `import { Simplauth } from "simplauth";
const { code } = await req.json();
if (!code) {
      console.error("No code provided in the request body");
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
}
let Provider = {
      GoogleOAuthCallback: { code, prisma },
};
const response = await Simplauth(Provider);`;

  const [isExpanded, setIsExpanded] = useState(false);
  const [scale, setScale] = useState(1); // State to track zoom level
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile view

  const handleExpand = () => {
    setIsExpanded(true);
    setScale(isMobile ? 0.8 : 1.2); // Set initial scale smaller on mobile (0.8) and larger on desktop (1.2)
  };

  const handleClose = () => {
    setIsExpanded(false);
    setScale(1); // Reset zoom on close
  };

  useEffect(() => {
    let isMounted = true;
    const checkIfMobile = () => {
      if (isMounted) setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      isMounted = false;
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Increase zoom level, but cap it at 2x
  const zoomIn = () => {
    if (scale < 2) {
      setScale((prev) => Math.min(prev + 0.2, 2)); // Increase zoom but don't go beyond 2x
    }
  };

  // Decrease zoom level with minimum 1x (original size)
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 1));

  return (
    <div
      className={`min-h-screen ${
        isExpanded ? "bg-gray-500" : "bg-white"
      } transition-all duration-300`}
    >
      <div className="flex-col justify-start items-start pl-4">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>Google OAuth</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

        <h2 className="text-start text-2xl font-bold text-white-900">
          Overview
        </h2>
        <br />
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="text-left text-md text-white-900">
              Google OAuth is a way to authenticate users using their Google
              account. It is a popular choice for many applications due to its
              ease of use and security. It is also a widely used method for
              authentication in web applications. Google OAuth can be used as
              both signin and signup. If it's a new email then it goes for
              signup else it does signin.
            </p>
            {isExpanded && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={handleClose}
              ></div>
            )}

            {/* Zoomable Image Container */}
            <div
              className={`${
                isExpanded
                  ? "fixed inset-0 flex items-center justify-center z-50"
                  : ""
              }`}
              style={{
                overflow: isExpanded ? "scroll" : "visible",
                cursor: isExpanded ? "move" : "pointer",
              }}
            >
              <Image
                src="/GoogleOAuthStructure.png" // Ensure this path is correct
                alt="Expandable"
                width={900} // Increased width for a larger image on desktop
                height={600} // Increased height for a larger image on desktop
                className={`transition-transform ease-in-out duration-500 ${
                  isExpanded ? "object-contain" : "rounded-lg w-10/12 h-3/5"
                }`}
                style={{
                  maxWidth: isExpanded ? "100vw" : "auto", // 100vw for full screen width when expanded
                  maxHeight: isExpanded ? "70vh" : "auto",
                  transform: `scale(${scale})`, // Apply zoom level
                  marginTop: isExpanded ? "80px" : "0", // Add space between navbar and image when expanded
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents overlay click when clicking on image
                  handleExpand();
                }}
              />
            </div>

            {/* Close button (only shows when expanded) */}
            {isExpanded && (
              <button
                onClick={handleClose}
                className="fixed top-4 right-4 bg-gray-800 text-white rounded-full p-6 z-50 flex items-center justify-center transition-transform hover:scale-105"
                style={{
                  width: "60px", // Increased width
                  height: "60px", // Increased height
                  borderRadius: "70% 70% 70% 70%",
                  fontSize: "2.5rem", // Increased font size
                }}
              >
                &times;
              </button>
            )}

            {/* Zoom Controls (only shows when expanded) */}
            {isExpanded && (
              <div className="fixed bottom-4 right-4 flex gap-2 z-50">
                <button
                  onClick={zoomIn}
                  className="bg-gray-800 text-white rounded-full p-2 flex items-center justify-center"
                  style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
                >
                  +
                </button>
                <button
                  onClick={zoomOut}
                  className="bg-gray-800 text-white rounded-full p-2 flex items-center justify-center"
                  style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
                >
                  -
                </button>
              </div>
            )}
            <p className="text-left text-md text-white-900">
              In brief, you first need to create a Google OAuth button in the
              frontend. That should hit the backend route where Simplauth can be
              used to get the Google consent screen url. Next redirect to the
              url where the end user can choose to login with whichever gmail he
              wants to use to login. Then after the user selects the email then
              a frontend page needs to be triggered where the code needs to be
              extracted from the url. Then hit the backed with the code in the
              body and use the Simplauth to get get the end user to login or
              signup if the email is not available in the database. Thus the
              authentication is done. Still if the you need the credentials in
              the frontend then you can use the response object.
            </p>
            <br />
          </div>
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
        <div>
          <br />
          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Get the Google Consent Screen URL
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            <p>In the .env file of the project add all these variables.</p>
            <CopyableText code={CodeText1} />
            In the frontend when the user clicks the Google OAuth button, then
            the backend route should be hit.
            <CopyableText code={CodeText2} />
            In the backend route, import the Simplauth library and get the
            Google consent screen url. The response will be the Google consent
            screen url. Then redirect the user to the Google consent screen url
            as shown above.
            <CopyableText code={CodeText3} />
            <br />
            <br />
          </div>
        </div>
        <div className="w-11/12 border-t-2 border-gray-300 mt-2 mb-2 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
        <div>
          <br />
          <h3 className="text-left text-xl font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:rounded">
            Hit the callback to complete the authentication
          </h3>
          <div className="flex flex-col gap-4 items-center justify-center">
            <br />
            <p>
              After the user selects the email then a frontend page needs to be
              triggered where the code needs to be extracted from the url. Then
              hit the backend route with the code in the body. So make a new
              frontend page just to extract the code and hit the callback
              function of Simplauth in the backend. So use useEffect hook as
              shown below.
            </p>
            <CopyableText code={CodeText4} />
            In the backend route, import the Simplauth library and send the
            Provider as shown below into Simplauth to complete the
            authentication. Remember to have the prisma schema called
            EmailPassPrisma as shown below.
            <CopyableText code={CodeText5} />
            <CopyableText code={CodeText6} />
            The response will have the user information object if useful in any
            way. Then further store the JWT token in the cookie named
            "simplauthsignin" and redirect the user to the home page or any
            other page as shown in the useEffect hook example.
            <br />
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

export default GoogleOAuth;
