import express from "express"
import { loginController, registerController, userCredits } from "../controllers/user.controllers.js"
import { userAuth } from "../middleware/auth.middleware.js"

const router = express.Router()

router.route("/register").post(registerController)
router.route("/login").post(loginController)
router.route("/credits").get(userAuth,userCredits)

export default router