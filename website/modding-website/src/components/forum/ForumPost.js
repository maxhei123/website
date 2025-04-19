export default function ForumPost({ post }) {
    return (
        <div className="forum-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-meta">
                <span>Posted by: {post.author}</span>
                <span>Date: {new Date(post.date).toLocaleDateString()}</span>
            </div>
        </div>
    );
}