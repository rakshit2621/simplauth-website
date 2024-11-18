// import CopyableText from "@/components/HelperComponents/CopyableText";
// import Link from "next/link";
// import { Link } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function ProjectStructure() {
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
    // Detect screen size on mount and set the mobile state
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the threshold (768px) as needed for mobile
    };

    checkIfMobile(); // Run on initial load
    window.addEventListener("resize", checkIfMobile); // Add resize listener to detect screen size changes
    return () => window.removeEventListener("resize", checkIfMobile); // Cleanup the listener
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
      <div className="flex-col justify-start items-start pl-6">
        <br />
        <h1 className="text-start text-3xl font-bold text-white-900">
          <b>Project Structure</b>
        </h1>
        <div className="w-11/12 border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

        <h2 className="text-start text-2xl font-bold text-white-900">
          What does Simplauth provide ?
        </h2>
        <br />
        {/* Overlay div (for closing when clicking outside) */}
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
            src="/project_structure1.png" // Ensure this path is correct
            alt="Expandable"
            width={900} // Increased width for a larger image on desktop
            height={600} // Increased height for a larger image on desktop
            className={`transition-transform ease-in-out duration-500 ${
              isExpanded ? "object-contain" : "rounded-lg w-10/12 h-3/5"
            }`}
            style={{
              maxWidth: isExpanded ? "100vw" : "auto", // 100vw for full screen width when expanded
              maxHeight: isExpanded ? "100vh" : "auto",
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
        <div className="flex flex-col gap-4 items-start justify-center">
          <br />
          <p className="text-left text-md text-white-900">
            Simplauth is a simple authentication library for your project. It
            provides an easy-to-use API for authentication and authorization. It
            has a variety of ready-to-use features like Google OAuth, GitHub
            OAuth, email authentication, password reset, email verification with
            OTP, auto-login with JWT from a cookie, and more.
            <br /> <br />
            The authentication process in Simplauth handles the user's
            credentials, checks their format and validity using Zod,
            automatically checks for JWT for auto-login, uses Prisma to store
            user data, Redis and Nodemailer for OTP management, and more.
            <br /> <br /> The usage of Simplauth is explained in the 'Building
            Your Application' section, so be sure to check it out. Currently,
            the documentation for Next.js is available, and documentation for
            other stacks like MERN will be coming soon.
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            {/* <CopyableText code={sampleCode} /> */}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
