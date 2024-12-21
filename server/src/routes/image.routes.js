import express from "express"
import { userAuth } from "../middleware/auth.middleware.js"
import { generateImageFormText } from "../controllers/image.controller.js"

const imageRouter = express.Router()

imageRouter.route("/generate-image").post(userAuth,generateImageFormText)



export default imageRouter