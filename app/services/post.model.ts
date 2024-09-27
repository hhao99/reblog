import { mongoose } from './db.server'

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Post_User' },
    createdAt: Date,
    updatedAt: Date
})

export const Post = mongoose.model('Post',postSchema)
