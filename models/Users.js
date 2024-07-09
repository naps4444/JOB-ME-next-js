import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
    firstname: {type: String, required: true, trim: true},
    lastname: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
}, {timestamps: true})


//checks if models.user exists, if it doesnt create a new model
const User = models.User || mongoose.model("User", userSchema)

export default User;