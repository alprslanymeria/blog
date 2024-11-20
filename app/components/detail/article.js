import Link from "next/link";

export default function Article({ post }) {

    const { author, createdAt, tags, content } = post;

    return (
        <div className="article-container my-8">
            
            <div className="text-sm text-gray-600 mb-4">
                <span>Yazar: {author}</span> |{" "}
                <span>Tarih: {new Date(createdAt).toLocaleDateString()}</span>
            </div>

            <div className="tags mb-4">
                {tags && tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {tags.map(({ tag }) => (
                            <Link
                                key={tag.id}
                                href={`/tags/${tag.name}`}
                                className="text-blue-500 hover:underline text-sm"
                            >
                                #{tag.name}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <span>Etiket bulunamadı.</span>
                )}
            </div>

            <div className="content text-lg leading-relaxed">
                <p className="text-justify">{content}</p>
            </div>
        </div>
    );
}
