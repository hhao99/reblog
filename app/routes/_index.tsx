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
    <div className="flex flex-col justify-center">
      <div className='text-center p-4 mx-auto'>
        <h2 className='text-3xl text-slate-400'>blog starter</h2>
      </div>
      <div className='text-end p-8'> 
        <Link className='text-blue-600 hover:text-3xl' to='/posts'>Our blog page</Link>
      </div>
    </div>
  );
}
