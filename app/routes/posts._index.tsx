import type { MetaFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from '@remix-run/react'
import { getPosts } from '~/services/post.server'

export const meta: MetaFunction = () => {
  return [
    { title: "blog App" },
    { name: "description", content: "post starter" },
  ];
};


export async function loader() {
  const posts = await getPosts()
  console.log(json(posts))
 
  return json(posts)
}

export default async function Index() {
  const posts = await useLoaderData<typeof loader>()
  console.log(posts)
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>blog index</h2>
      <div>
        {/* <ul>
            {posts.map( post=> (
                <li key={post.__id}>
                    <Link to={post.__id}>{post.title}</Link>
                </li>
            ))}
        </ul> */}
      </div>
    </div>
  );
}
