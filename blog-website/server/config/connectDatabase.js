import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();


if(!process.env.MONGODB_URI){
    throw new error("Please provide url")
}
async function connectDatabase(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected")
    } catch (error) {
        console.log("Database Connection error:",error)
        process.exit(1)
    }
}

export default connectDatabase