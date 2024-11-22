"use client"

import { useState, useEffect, useRef } from "react";
import Article from "./article";
import Sidebar from "./sidebar";

export default function Container({ post , categories }) {
    const articleRef = useRef(null);
    const [articleHeight, setArticleHeight] = useState(0);

    useEffect(() => {
        if (articleRef.current) {
            setArticleHeight(articleRef.current.offsetHeight);
        }
    }, [post]);

    return (
        <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="md:flex-[3]" ref={articleRef}>
                <Article post={post} />
            </div>
            <div className="md:flex-[1]">
                <Sidebar categories={categories} articleHeight={articleHeight} />
            </div>
        </div>
    );
}
