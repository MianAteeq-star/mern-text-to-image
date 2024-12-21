import React from "react"
import { motion } from "framer-motion"
import profile1 from "../assets/profile_img_1.png"
import profile2 from "../assets/profile_img_2.png"
import profile3 from "../assets/profile_img_3.png"
import ratingStars from "../assets/star_ratings.png"
import doubleStar from "../assets/star_group.png"
import { useNavigate } from "react-router-dom"

const Testimonials = () => {
  const navigate = useNavigate()
  const testimonials = [
    {
      icon: profile1,
      name: "Donald Jackman",
      skill: "Graphic Designer",
      starRating: ratingStars,
      description:
        "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    },
    {
      icon: profile2,
      name: "Richard Nelson",
      skill: "Content Creator",
      starRating: ratingStars,
      description:
        "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    },
    {
      icon: profile3,
      name: "James Washington",
      skill: "Co-Founder",
      starRating: ratingStars,
      description:
        "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    },
  ]
  return (
    <>
      <div className="mt-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl">Customer Testimonials</h1>
          <p className="text-gray-500 my-4">What Our Users Are Saying</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              className="flex items-center rounded-xl shadow-md justify-center flex-row p-3 sm:flex-col"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={item.icon} alt="user Profile" />
              <div className="text-center">
                <h2>{item.name}</h2>
                <h3>{item.skill}</h3>
                <p className="flex items-center justify-center">
                  <img src={item.starRating} alt="user Profile" />
                </p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-24">
        <motion.div 
          className="flex items-center justify-center flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-4xl">See the magic. Try now</h1>
          <motion.div 
            className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-full my-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="font-extralight" onClick={() => navigate("/result")}>Generate Images</button>
            <img src={doubleStar} className="w-4 h-4" alt="star group" />
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Testimonials