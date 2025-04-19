export default function ForumList() {
    const threads = [
        { id: 1, title: "First Thread", posts: 5 },
        { id: 2, title: "Second Thread", posts: 3 },
        { id: 3, title: "Third Thread", posts: 8 },
    ];

    return (
        <div className="forum-list">
            <h2>Forum Threads</h2>
            <ul>
                {threads.map(thread => (
                    <li key={thread.id}>
                        <a href={`/forum/thread/${thread.id}`}>
                            {thread.title} ({thread.posts} posts)
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}