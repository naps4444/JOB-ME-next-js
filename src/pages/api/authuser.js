import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/Users";
import bcrypt from "bcryptjs"

export default async function handler(req, res) {
    if(req.method === "POST"){
        const {firstname, lastname, email, password} = req.body;

        try {

            console.log("connecting to database");
            await connectMongoDB()
            console.log("mongodb connected successfully");
            console.log("gooood");
            const existingUser = await User.findOne({email})
            if(existingUser){
                return res.status(409).json({message: "User already exists"})
            }

            console.log("creating new user...");
            const newUser = await User.create({firstname, lastname, email, password})
            console.log("New User Created", newUser);

            res.status(201).json({
                message: "User registered successfully",
                data: {newUser},
            })




            // res.status(200).json({
            //     message: "User Registered Successfully",
            //     data: {firstname, lastname, email, password},
            // })
            
        } catch (error) {
            console.error("Error details", error);
            res.status(500).json({
                message: "Internal server error",
                error: process.env.NODE_ENV === "development" ? "error.message" : undefined
            })
        }      
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}