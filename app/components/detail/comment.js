import MakeComment from "../comment/makeComment";
import ShowComments from "../comment/showComments";

export default async function Comment({blogId}) {

    let comments = [];

    // Mevcut kategoriye ait yorumlar çekilir.
    let data = await fetch(`http://localhost:3000/api/comments?blogId=${blogId}`);

    if(data.status === 200)
    comments = await data.json()


    return (
        <>
            <ShowComments comments={comments}></ShowComments>
            <MakeComment blogId={blogId}></MakeComment>
        </>
    );
}