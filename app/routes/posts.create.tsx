import { json, redirect } from '@remix-run/node'
import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { createPost } from '~/services/post.server'

export async function action({request}: ActionFunctionArgs) {
    const body = await request.formData()
    
    const post = await createPost({
        title: body.get('title'),
        content: body.get('content')
    })
    return redirect(`/posts/${post._id}`)
}

export async function loader() {
    const post = {
        title: 'test01',
        content: 'test02'
    }
    return json(post)
}

export default function CreatePost() {
    const post = useLoaderData<typeof loader>()
    return (
        <div>
            <Form method='post'>
                <label htmlFor='title'>Post Title: 
                    <input type='text' name='title' value={post.title}/>
                </label>
                <label htmlFor='content'>Content:
                    <input type='textarea' name='content' value={post.content} />
                </label>
                <button type='submit'>submit</button>
            </Form>
        </div>
    )
}