import type { MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from '@remix-run/react'
import { Post } from '~/models/post'

export const meta: MetaFunction = () => {
  return [
    { title: "blog App" },
    { name: "description", content: "post starter" },
  ];
};

export const loader = async ()=> {
    const posts = await Post.find()
    return json(posts);
}

export default function Index() {
  const posts = useLoaderData<typeof loader>()
  // console.log(posts)
  return (
    <div className="flex flex-row h-screen items-center justify-center">
      <h2>blog index</h2>
      <div>
        <ul>
            {posts.map( post=> (
                <li key={post._id}>
                    <Link to={post._id}>{post.title}</Link>
                </li>
            ))}
        </ul>
      </div>
      <div>
        <Link to='/posts/new'>New Post</Link>
      </div>
    </div>
  );
}
