import Article from "./article";
import Sidebar from "./sidebar";

export default function Container({ post }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="md:flex-[3]">
                <Article post={post} />
            </div>
            <div className="md:flex-[1]">
                <Sidebar />
            </div>
        </div>
    );
}
