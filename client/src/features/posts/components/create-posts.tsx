import { type Post } from "@/types/api";

interface props {
    post: Post;
}

function CreatePosts({ post }: props) {
    return (
        <article>
            <p>Title: {post.title}</p>
            <p>Game: {post.game}</p>
            <p>Date: {post.date}</p>
        </article>
    );
}

export default CreatePosts;
