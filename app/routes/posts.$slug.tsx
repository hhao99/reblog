import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "blog page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({params}: LoaderFunctionArgs) => {
    const post = { title: 'fake', slug: params.slug}
    return post
}
export default function Index() {
    const post = useLoaderData()
    console.log(post)
    
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>blog detail
        
      </h2>
      <h3>{post.slug}</h3>
    </div>
  );
}
