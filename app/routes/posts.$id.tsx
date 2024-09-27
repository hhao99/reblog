import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "blog page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({params}: LoaderFunctionArgs) => {
    const { id } = params;
    const post = { title: 'fake', id }
    return post
}
export default function Index() {
    const post = useLoaderData()
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>{post.title}</h2>
      <h3>{post.id}</h3>
    </div>
  );
}
