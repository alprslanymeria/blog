import Container from "@/app/components/detail/container";
import Share from "@/app/components/detail/share";
import Comment from "@/app/components/detail/comment";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default async function Detail({ params }) {
    
    const id = (await params).id
    let data = await fetch(`http://localhost:3000/api/blog/id?id=${id}`)
    let post = await data.json()
    let imageUrl = post.imageUrl
    let header = post.header

    const jsxElements = [
        <nav className="hidden md:flex space-x-4" key="navbar">
          <Link href="#" className="hover:text-gray-500">
            DETAIL
          </Link>
        </nav>
      ]

    return (
        <>
            <div className="relative w-screen h-[500px]">
                <Image
                    src={imageUrl}
                    alt="Blog Görseli"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
                <div className="absolute top-0 left-0 right-0 z-10">
                    <Navbar elements={jsxElements}></Navbar>
                </div>
            </div>

            <div className="container mx-auto max-w-screen-xl px-4">
                <h1 className="text-center">{header}</h1>
                <Container />
                <Share />
                <Comment />
            </div>
        </>
    );
}
