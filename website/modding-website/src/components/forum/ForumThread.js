export default function ForumThread({ thread }) {
    return (
        <div className="forum-thread">
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
            <div className="posts">
                {thread.posts.map(post => (
                    <div key={post.id} className="forum-post">
                        <h3>{post.author}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}