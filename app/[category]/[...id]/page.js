import Container from "@/app/components/detail/container";
import Share from "@/app/components/detail/share";
import Comment from "@/app/components/detail/comment";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default async function Detail({ params }) {
    
    // POST A AİT BİLGİLER BURADA ÇEKİLİYOR
    const id = (await params).id
    const category = (await params).category
    let data = await fetch(`http://localhost:3000/api/blog/id?id=${id}`)
    let post = await data.json()
    let imageUrl = post.imageUrl
    let header = post.header

    let response = await fetch("http://localhost:3000/api/blog/all");
    let categories = await response.json();

    const jsxElements = []

    return (
        <>
            <div className="relative w-full h-[500px]">
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
                <h1 className="text-center text-[#FFC96B] text-2xl mt-4 font-bold md:text-4xl">{header}</h1>
                <Container categories={categories} post={post}/>
                <Share />
                <Comment blogId={id} />
            </div>
        </>
    );
}
