import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect, Form, Link, useLoaderData } from "@remix-run/react";
import { Post } from '~/models/post'
export const meta: MetaFunction = () => {
  return [
    { title: "new post base" },
    { name: "description", content: "authorize the new blog" },
  ];
};

export const action = async ({request}) => {
    const formData = await request.formData()
    const post = {
        title: formData.get('title'),
        content: formData.get('content')
    }
    await Post.create(post)
    return redirect('/posts')
}


export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Form method='post'>
        <div>
            <label htmlFor='title'>Blog Title:
                <input type='text' name='title'  />
            </label>
        </div>
        <div>
            <label htmlFor='content'>Content:
                <input type='text' name='content'  />
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
