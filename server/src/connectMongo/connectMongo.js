import mongoose from "mongoose"


const connectMongo = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (error) {
        console.log("Error in mongodb connection ", error)
    }
}

export default connectMongo