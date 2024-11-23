import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/rakshitchopade",
    color: "#1DA1F2",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rakshit.chopade/",
    color: "#E4405F",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/rakshit2621",
    color: "#171515",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/rakshitchopade/",
    color: "#0A66C2",
  },
  {
    icon: <FaEnvelope />,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMgBVWqRDmxclJPPKJZkrMvGBMlkjLVKtLVdMLPtmcfPZzsbptrBCghZgbLrVbHcnkpDZxg",
    color: "#D44638",
  },
];

function Creator() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* "Let's Connect" text */}
      <motion.h1
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Let&apos;s Connect
      </motion.h1>
      <br />
      {/* Social Icons */}
      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: item.color }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              whileHover={{
                scale: 1.2, // Smooth expansion of the icon
              }}
              className="text-white text-2xl"
            >
              {item.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Creator;
