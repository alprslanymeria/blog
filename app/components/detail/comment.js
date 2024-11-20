import MakeComment from "../comment/makeComment";
import ShowComments from "../comment/showComments";

export default async function Comment({blogId}) {

    // Mevcut kategoriye ait yorumlar çekilir.
    let data = await fetch(`http://localhost:3000/api/comments?blogId=${blogId}`);
    let comments = await data.json()



    return (
        <>
            <ShowComments></ShowComments>
            <MakeComment blogId={blogId}></MakeComment>
        </>
    );
}