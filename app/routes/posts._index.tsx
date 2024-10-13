import { getPosts } from '~/models/post'
import { json } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'

export const loader = async ()=> {
    const posts = await getPosts()
    console.log(posts)
    return json({ posts })
}
export default function Index() {
    const { posts } = useLoaderData<typeof loader>()
    return (
        <div>
            <h1>Post Index</h1>
        </div>
    )
}