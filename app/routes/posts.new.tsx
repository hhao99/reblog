import type { MetaFunction } from "@remix-run/node";
import { json, redirect, Form, Link, useActionData } from "@remix-run/react";
import { Post } from '~/models/post'
import invariant from 'tiny-invariant'
export const meta: MetaFunction = () => {
  return [
    { title: "new post base" },
    { name: "description", content: "authorize the new blog" },
  ];
};

export const action = async ({request}) => {
    const formData = await request.formData()
    const title = formData.get('title')
    const content = formData.get('content')
    const errors = {}

    if(!title) errors.title = true
    if(!content) errors.content = true
    if(Object.keys(errors).length) {
        return json(errors)
    }

    invariant( typeof title === 'string')
    invariant( typeof content === 'string')
    const post = {
        title: formData.get('title'),
        content: formData.get('content')
    }
    await Post.create(post)
    return redirect('/posts')
}


export default function Index() {
    const errors = useActionData()
  return (
    <div className="flex h-screen items-center justify-center">
      <Form method='post' className='flex flex-col gap-4'>
        <div>
            <label htmlFor='title'>Blog Title: 
                {errors?.title ? <em>Title is required</em>: null}
                <input type='text' name='title'  />
            </label>
        </div>
        <div>
            <label htmlFor='content'>Content:
            {errors?.content ? <em>Content is required</em>: null}
                <input type='text' name='content'  
                    className='w-full h-128 border-slate-200'
                />
            </label>
        </div>
        <div>
            <button type='submit'>Save</button>   
        </div>
      </Form>
      <div>
        <Link to='/posts'>return Posts Index</Link>
      </div>
    </div>
  );
}
