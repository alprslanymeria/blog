import Link from "next/link";

export default async function Sidebar() {


    let data = await fetch("http://localhost:3000/api/blog/all");
    let categories = await data.json();

    const allBlogs = categories.flatMap(category => 
        category.blogPosts.map(blog => ({ 
            ...blog, 
            categoryName: category.name
        }))
    );

    function getRandomItems(arr, num) {
        let shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const randomBlogs = allBlogs.length > 0 ? getRandomItems(allBlogs, 5) : [];

    return (
        <div className="sidebar p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Rastgele Bloglar</h2>
            {randomBlogs.length > 0 ? (
                <ul className="space-y-3">
                    {randomBlogs.map((blog) => (
                        <li key={blog.id}>
                            <Link
                                href={`/${blog.categoryName}/${blog.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                <div>
                                    <p><strong>{blog.header || "Bilinmeyen Başlık"}</strong></p>
                                    <p className="text-sm text-gray-500">Kategori: {blog.categoryName || "Bilinmeyen Kategori"}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">Hiç blog bulunamadı.</p>
            )}
        </div>
    );
}


// GELEN VERİ YAPISI

/*

//categories
[
  //category
  {
    id: null,
    name: null,
    description: null,
    blogPosts: [
      [Object], [Object],[Object], [Object], [Object], [Object], [Object] ]
  },
  //category
  {
    id: null,
    name: null,
    description: null,
    blogPosts: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
  },
  //category
  {
    id: null,
    name: null,
    description: null,
    blogPosts: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
  },
  //category
  {
    id: null,
    name: null,
    description: null,
    blogPosts: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
  },
  //category
  {
    id: null,
    name: null,
    description: null,
    blogPosts: [ [Object], [Object], [Object], [Object], [Object], [Object] ]
  }
]
*/