import mongoose, {Schema, models} from "mongoose";

const ContactSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    phonenumber: {type: Number, required: true, trim: true},
    subject: {type: String, required: true, trim: true},
    message: {type: String, required: true, trim: true},
        
}, {timestamps: true})

const Contact = models.Contact || mongoose.model("Contact", ContactSchema)

export default Contact;