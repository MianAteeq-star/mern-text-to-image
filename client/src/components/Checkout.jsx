import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51QJxNuId6qmZdeKrRo3P6uBmc3JkaSPxvuIKdDGEUDXaTFjB10GUMsXLgJ2yDprvmsKDDZHgFRq374yRcrDyhUaU00hyDsHMQv");

const Checkout = ({ plan }) => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/stripe/create-checkout-session`, {
        planId: plan.id,
        price: plan.price,
        category: plan.category,
        icon: plan.icon,
        description: plan.description,
        outOf: plan.outOf

      });

      const { id } = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button className="bg-black text-white rounded-md py-2 px-10" onClick={handleCheckout}>
      Get Started
    </button>
  );
};

export default Checkout;