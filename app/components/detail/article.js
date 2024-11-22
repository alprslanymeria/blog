"use client"

import Link from "next/link";

export default function Article({ post }) {
    const { author, createdAt, tags, content } = post;

    return (
        <div className="p-6 bg-white">
            {/* Yazar ve Tarih */}
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">🖊️ Yazar:</span>
                    <span className="text-gray-600">{author}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">📅 Tarih:</span>
                    <span className="text-gray-600">
                        {new Date(createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>

            <div className="tags mb-4">
                {tags && tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {tags.map(({ tag }) => (
                            <Link
                                key={tag.id}
                                href={`/tags/${tag.name}`}
                                className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200"
                            >
                                #{tag.name}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <span className="text-gray-500">Etiket bulunamadı.</span>
                )}
            </div>

            <div className="content text-lg leading-relaxed">
                <p className="text-justify text-gray-800">{content}</p>
            </div>
        </div>
    );
}
