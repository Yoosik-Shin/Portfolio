import React from 'react'
import { motion } from "framer-motion";

export const FthMenu = () => {
  return(
    <>
      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          React | Spring Boot | TailwindCSS | JavaScript
        </motion.p>

        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-md transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-full shadow-md transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </>
  )
}