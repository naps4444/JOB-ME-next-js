import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/Users";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";



export default async function handler(req, res) {
    if(req.method === "POST"){
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
                message: "Email and Password are required"
            })
        }
    
        try {
            console.log("Attempting to connect to MongoDB");
            await connectMongoDB()
            console.log("mongoDB connected successfully");
            const user = await User.findOne({email});
            if (!user) {
                return res.status(401).json({
                    message: "Invalid credentials"
                })
            }
    
            const isPasswordvalid = await bcrypt.compare(password, user.password)
            if(!isPasswordvalid){
                return res.status(401).json({
                    message: "Invalid email or password"
                })
            }
    
    
            //generate token
            const token = jwt.sign({
                userId: user._id, email: user.email
            },
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );
    
            res.status(200).json({
                message: "Login Successfully",
                token,
                user: {id: user._id, email: user.email, firstname: user.firstname}
    
            })
        } catch (error) {
            console.error('Error details:', error);
            res.status(500).json({
                message: 'Internal Server Error',
            })
            
        }
    }
     else{
        res.setHeader("Allow", ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}