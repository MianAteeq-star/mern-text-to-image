import React from "react"
import { motion } from "framer-motion"
import starIcon from "../assets/star_icon.png"
import doubleStar from "../assets/star_group.png"
import sampleImage from "../assets/sample_img1.png"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div>
      <motion.div 
        className="mt-24 flex justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center border p-2 px-6 rounded-full">
          <div className="flex gap-3 items-center justify-center">
            <p className="font-light text-gray-500">Best text to image generator</p>
            <img src={starIcon} className="w-4 h-4" alt="star icon" />
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-col items-center justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-7xl text-center sm:w-[590px] text-wrap"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Turn text to <span className="text-blue-600">image</span>, in seconds.
        </motion.h1>
        <motion.p 
          className="w-2/5 text-center mt-4 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds – just type, and watch the magic happen.
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full mt-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button className="font-extralight" onClick={() => navigate("/result")}>Generate Images</button>
          <img src={doubleStar} className="w-4 h-4" alt="star group" />
        </motion.div>
        <motion.div 
          className="flex flex-wrap gap-2 mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {Array(6)
            .fill()
            .map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={sampleImage}
                  className="w-20 h-20 rounded-xl"
                  alt=""
                />
              </motion.div>
            ))}
        </motion.div>
        <motion.p 
          className="mt-4 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Generated images from imagify
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Hero