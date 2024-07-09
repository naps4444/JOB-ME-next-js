import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        console.log('attempting to connect to mongodb');
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        
    }
}

export default connectMongoDB