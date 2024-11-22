import Link from "next/link";
import Navbar from "@/app/components/navbar";
import PaginationComponent from "../components/pagination";

export default async function Category({params}) {

  const category = (await params).category.toUpperCase();
  let contents = [];

  let data = await fetch(`http://localhost:3000/api/blog?category=${category}`);
  if(data.status === 200)
  contents = await data.json()

  const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500 text-2xl underline";

  const jsxElements = [
      <nav className="flex space-x-4">
        <Link key="home" href="#" className={linkClasses}>{category}</Link>
      </nav>
    ];

  return (
      <div className="container mx-auto max-w-screen-xl">
          <Navbar elements={jsxElements}></Navbar>
          <PaginationComponent category={category} contents={contents.categoryData.blogPosts}></PaginationComponent>
      </div>
  );
}