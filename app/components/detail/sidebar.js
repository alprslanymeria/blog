"use client"

import Link from "next/link";

export default function Sidebar({articleHeight, categories}) {
    
    // let data = await fetch("http://localhost:3000/api/blog/all");
    // let categories = await data.json();

    const allBlogs = categories.flatMap(category => 
        category.blogPosts.map(blog => ({ 
            ...blog
        }))
    );

    const blogsToShow = Math.max(Math.floor(articleHeight / 200), 0);

    function getRandomItems(arr, num) {
        let shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const randomBlogs = allBlogs.length > 0 ? getRandomItems(allBlogs, blogsToShow) : [];

    return (
        <>
            <div className="sidebar p-4 rounded-md shadow-md md:hidden">
                {randomBlogs.length > 0 ? (
                    <>
                        <div className="carousel rounded-box flex space-x-4">
                            {randomBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="carousel-item flex-shrink-0 w-72 h-48 relative border p-2 rounded-lg shadow-md"
                                >
                                    <Link
                                        href={`/${blog.id}`}
                                        className="block hover:shadow-lg transition-shadow duration-200"
                                    >
                                        <p className="text-md text-center text-gray-800 mb-2">
                                            {blog.header || "Bilinmeyen Başlık"}
                                        </p>
                                        {blog.imageUrl && (
                                            <img
                                                src={blog.imageUrl}
                                                alt={blog.header || "Blog Resmi"}
                                                className="w-full h-32 object-cover rounded-md mb-2"
                                            />
                                        )}
                                        <hr className="border-gray-300" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>            
                ) : (
                    <p className="text-gray-600"></p>
                )}
            </div>

            <div className="sidebar p-4  rounded-md shadow-md hidden md:block">
                {randomBlogs.length > 0 ? (
                    <ul className="space-y-6">
                        {randomBlogs.map((blog) => (
                            <li key={blog.id}>
                                <Link
                                    href={`/${blog.id}`}
                                    className="block hover:shadow-lg transition-shadow duration-200"
                                >
                                    <p className="text-md text-center text-gray-800 mb-2">
                                        {blog.header || "Bilinmeyen Başlık"}
                                    </p>
                                    
                                    {blog.imageUrl && (
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.header || "Blog Resmi"}
                                            className="w-full h-40 object-cover mb-2"
                                        />
                                    )}

                                    <hr className="border-gray-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600"></p>
                )}
            </div>
        </>
        

    );
}