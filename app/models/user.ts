import mongoose, { Schema } from 'mongoose'

interface UserInterface extends mongoose.Document {
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
}
const userSchema = new Schema({
    useranme: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String
})

export default mongoose.model<UserInterface>("Post_User", userSchema)