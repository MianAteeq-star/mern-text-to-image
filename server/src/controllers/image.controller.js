import User from "../models/user.model.js"
import formdata from "form-data"
import axios from "axios"



export const generateImageFormText = async(req,res)=>{
    try {
        const {prompt, userId} = req.body
        if(!prompt){
            return res.status(400).json({message:"Prompt is required"})
        }
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        const credits = user.buyCredits
        if(credits === 0 || credits <1){
            return res.status(400).json({message:"Insufficient credits Please buy credits" , credits})
        }
        // generate image api 
const formdata = new FormData()
formdata.append("prompt",prompt)
 const response = await axios.post("https://clipdrop-api.co/text-to-image/v1",formdata,{

     headers: {
         'x-api-key':process.env.CLIPDROP_API,
        },
        responseType : "arraybuffer"
  })
    const image = Buffer.from(response.data, 'binary').toString('base64')
    const imageSrc = `data:image/png;base64,${image}`
    await User.findByIdAndUpdate(userId,{buyCredits:credits-1})
    res.status(200).json({message:"Image generated successfully",
        buyCredits : credits-1,
        imageSrc})
        // deduct credits from user account
 
    } catch (error) {
        console.log("Error in generateImageFormText controller ",error)
        res.status(500).json({message:"Error in generateImageFormText controller"})
        
    }
}