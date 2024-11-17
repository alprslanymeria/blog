// kategoriye göre veri çekme işlemi burada yapılacak

import BlogContent from "../components/blogContent";
import Link from "next/link";
import Navbar from "@/app/components/navbar";

export default async function Category({params}) {

    const jsxElements = [
        <nav className="hidden md:flex space-x-4">
          <Link key="home" href="#" className="hover:text-gray-500">Ana sayfa</Link>
        </nav>
      ];

    const category = (await params).category

    let data = await fetch(`http://localhost:3000/api/blog?category=${category}`);
    let contents = await data.json()

    return (
        <div className="container mx-auto max-w-screen-xl">
            <Navbar elements={jsxElements}></Navbar>
            <BlogContent contents={contents}></BlogContent>
        </div>
    );
}