import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const registerController = async(req,res)=>{
    try {
        const {username,email,password} = req.body

        if(!username || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })
        await newUser.save()

        res.status(201).json({message:"User registered successfully",
            user: newUser
        })
        
    } catch (error) {
        console.log("Error occur in register controller ",error)
        res.status(500).json({message:"Error in registerController"})
    }

}



export const loginController = async(req,res)=>{
    try {


        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        res.cookie("token",token,{httpOnly:true})
        res.status(200).json({message:"User logged in successfully",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                buyCredits:user.buyCredits
            }
        })
    } catch (error) {
        console.log("error in login controller ", error)
        res.status(500).json({message:"Error in login controller"})
    }
}


export const userCredits = async(req,res)=>{
    try {
        
        const {userId} = req.body
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        res.status(200).json({message:"User credits fetched successfully",
           userCredits:user.buyCredits,
              user:{
                username: user.username
              }
        })
    } catch (error) {
       console.log("Error in userCredits controller ",error)
         res.status(500).json({message:"Error in userCredits controller"})
    }
}