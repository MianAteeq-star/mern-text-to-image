import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        minLength: 3

    },
    email : {
        type : String,
        required : true,
        unique : true

    },
    password : {
        type : String,
        required : true,
      

    },
    buyCredits:{
        type:Number,
        default:5
    }
},{timestamps : true})



const User = mongoose.model('User',userSchema)

export default User