export default function ShowComments({ comments }) {
    if (!comments || comments.length === 0) {
        return <p></p>;
    }

    return (
        <div className="space-y-6 px-6">
            <h2 className="text-2xl font-semibold mb-4">Yorumlar</h2>
            {comments.map((comment) => (
                <div
                    key={comment.commentId}
                    className="p-4 flex gap-4 items-start"
                >
                    <img
                        src={comment.avatar || "/images/default-avatar.jpg"}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full border object-cover overflow-hidden"
                    />

                    <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-2">
                            {new Date(comment.createdOn).toLocaleString()}
                        </p>
                        <p className="text-md font-medium">{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}