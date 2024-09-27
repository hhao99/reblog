
import { mongoose } from '~/services/db.server'

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: Date,
    updatedAt: Date
})
let Post
try {
    Post = mongoose.model('Post')
}
catch(err) {
    Post = mongoose.model('post', PostSchema)
}
export async function createPost(post) {
    return await Post.create(post)
}

export async function getPosts() {
    return  await Post.find()
}

export async function getPost(id: string) {
    const post = await Post.findOne({ id}).exec()
    return post
}