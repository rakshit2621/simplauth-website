import CopyableText from "@/components/HelperComponents/CopyableText";
import Link from "next/link";
// import { Link } from "lucide-react";

export default function InstallationPage() {
  const CodeText1 = `npm i simplauth`;

  return (
    <div className="flex-col justify-center items-center min-h-screen bg-white-900 ">
      <br />
      <br />
      <br />
      <h1 className="text-center text-3xl font-bold text-white-900">
        <b>Installation of Simplauth </b>
      </h1>
      {/* <hr className="border-white-900 min-w-10 border-width-2" /> */}
      <div className="w-7/12 mx-auto border-t-2 border-gray-300 mt-8 mb-8 shadow-sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-center text-2xl font-bold text-white-900">
          Install the library
        </h2>
        <div className="text-center text-md text-white-900">
          Simplauth is available on npm.
          <br />
          Run the following command in your project terminal:
          <br /> <br />
          <CopyableText code={CodeText1} />
          <br />
        </div>
      </div>
      <br />

      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-center text-2xl font-bold text-white-900">
          Or checkout the library
        </h2>
        <Link
          href="https://www.npmjs.com/package/simplauth"
          target="_blank"
          className="text-blue-500 hover:text-blue-700 underline transition duration-200 ease-in-outrelative text-blue-600 font-semibold underline decoration-transparent underline-offset-4 hover:decoration-blue-600 hover:text-blue-700 hover:scale-105 transition duration-200 ease-in-out"
        >
          https://www.npmjs.com/package/simplauth
        </Link>
      </div>
    </div>
  );
}
