import { mongoose } from '~/services/db.server'
import { Schema } from 'mongoose'

interface PostInterface extends mongoose.Document {
    title: string
    content: string
    author: mongoose.Types.ObjectId
    createdAt: Date
    updatedAt: Date
}

const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'Post_User' },
    createdAt: Date,
    updatedAt: Date
})

export default mongoose.model<PostInterface>("Post", postSchema)