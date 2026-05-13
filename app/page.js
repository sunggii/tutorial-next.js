import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      This is the home page.
      <div className="flex items-center justify-center mt-4">
        <Link 
          href="/content"
          className="bg-gray-200 p-2 rounded-xl"
          > Content
        </Link> 

        <Link 
          href="/api/test/1"
          className="bg-gray-200 p-2 rounded-xl ml-4"
          > API
        </Link>

        <Link
          href="/blog/mike/1"
          className="bg-gray-200 p-2 rounded-xl ml-4"
        >
          Blog
        </Link>
      </div>
      
    </div>
  );
}

