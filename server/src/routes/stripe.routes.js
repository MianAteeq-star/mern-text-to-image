import express from 'express';
import { createCheckoutSession } from '../controllers/stripe.controller.js';

const stripeRouter = express.Router();

stripeRouter.post('/create-checkout-session', createCheckoutSession);

export default stripeRouter;