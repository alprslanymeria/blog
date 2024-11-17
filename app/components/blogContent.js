import Image from "next/image";
import Link from "next/link";

export default function BlogContent({ contents }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {contents.blogPosts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.id}`}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
        >
          <div>
            <Image
              src={post.imageUrl}
              alt={post.header}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.header}</h2>
            <p className="text-gray-600 text-sm">{post.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
