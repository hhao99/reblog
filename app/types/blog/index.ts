export interface Blog {
    id: string
    title: string
    content: string
    author: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    viewed: { type: number, default: 0}
    likes: { type: number, default: 0}
    comments: Comment[]

}

export interface User {
    username: string
    firstname: string
    lastname: string
    email: string
}