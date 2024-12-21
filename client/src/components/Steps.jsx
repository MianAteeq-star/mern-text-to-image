import React from "react"
import { motion } from "framer-motion"
import step1 from "../assets/step_icon_1.svg"
import step2 from "../assets/step_icon_2.svg"
import step3 from "../assets/step_icon_3.svg"

const Steps = () => {
  const steps = [
    {
      icon: step1,
      title: "Describe Your Vision",
      description:
        '"Type a phrase, sentence, or paragraph that describes the image you want to create."',
    },
    {
      icon: step2,
      title: "Watch the Magic",
      description:
        '"Our AI-powered engine will transform your text into a high-quality, unique image in seconds."',
    },
    {
      icon: step3,
      title: "Download & share",
      description:
        '"Instantly download your creation or share it with the world directly from our platform."',
    },
  ]
  return (
    <div className="mt-24">
      <motion.div 
        className="text-center item-center justify-center my-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl">How it works</h1>
        <p className="my-3 text-gray-500">
          Transform Words Into Stunning Images
        </p>
      </motion.div>
      {steps.map((step, index) => (
        <motion.div
          className="flex justify-center items-center mt-5"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 shadow-md rounded-md w-7/12 p-4 text-left items-center">
            <img src={step.icon} alt="step icon" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl mt-3">{step.title}</h1>
              <p className="text-center mt-3 text-light text-gray-500">
                {step.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Steps