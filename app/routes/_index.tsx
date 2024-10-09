import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react'
export const meta: MetaFunction = () => {
  return [
    { title: "blog starter Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h2>blog starter</h2>
    </div>
  );
}
