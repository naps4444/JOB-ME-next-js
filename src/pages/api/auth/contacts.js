import connectMongoDB from "../../../../lib/mongodb";
import Contact from "../../../../models/Contacts";

export default async function handler(req, res) {
    if(req.method === "POST"){
        const { name, email, phonenumber, subject, message } = req.body;

        try{
            console.log("connecting to database");
            await connectMongoDB();
            console.log("mongodb connected successfully");
            console.log("creating new message");
            const newContact = await Contact.create({ name, email, phonenumber, subject, message })
            console.log("New contact created", newContact);

            res.status(201).json({
                message: "Contact created successfully",
                data: {newContact},
            })
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