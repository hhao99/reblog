import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: "blog App" },
    { name: "description", content: "post starter" },
  ];
};
const posts = [
    { title: 'first blog', slug: 'first'},
    { title: 'second blog', slug: 'second'}
]

export const loader = ()=> {
    return posts;
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>blog index</h2>
      <div>
        <ul>
            {posts.map( post=> (
                <li key={post.slug}>
                    <Link to={post.slug}>{post.title}</Link>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
