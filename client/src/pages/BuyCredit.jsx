import React from "react";
import logo from "../assets/logo_icon.svg";
import {motion} from "framer-motion";
import Checkout from "../components/Checkout";
const BuyCredit = () => {
  const plans = [
    {
      id: 1,
      icon: logo,
      category: "Basic",
      description: " Best for personal use.",
      price: 10,
      outOf: 100,
    },
    {
      id: 2,
      icon: logo,
      category: "Advance",
      description: " Best for business use.",
      price: 50,
      outOf: 500,
    },
    {
      id: 3,
      icon: logo,
      category: "Business",
      description: " Best for enterprise use.",
      price: 250,
      outOf: 5000,
    },
  ];
  return (
    <>
      <div className="min-h-[90vh]">
      <motion.div 
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex justify-center items-center border p-2 px-6 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex gap-3 items-center justify-center">
              <p className="font-light">Our Plans</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.h1 
          className="text-center text-4xl my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Choose Our Plan
        </motion.h1>
        <div className="flex items-center flex-wrap justify-center gap-10 my-24">
         

        <div className=" flex items-center flex-wrap justify-center gap-10 my-16 p-3">
          {plans?.map((plan, index) => (
             <motion.div
             key={plan.id}
             className="bg-white px-16 py-6 rounded-lg shadow-md"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.2 }}
           >
              <div className="my-6">
                <img src={plan.icon} alt="" />
              </div>
              <h1>{plan.category}</h1>
              <p className="text-sm font-light mt-4 mb-8">{plan.description}</p>
              <div className="flex items-baseline">
                
                <h1 className="text-2xl ">${plan.price} </h1>
                <p className="text-sm font-extralight ml-2 my-12">
                  {" "}
                  / {plan.outOf} credits
                </p>
              </div>

             <Checkout plan={plan}/>
           
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default BuyCredit;
