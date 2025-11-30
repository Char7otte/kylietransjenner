import CreatePosts from "./create-posts";

import { type Post } from "@/types/api";

interface props {
    posts: Post[];
}

function Posts({ posts }: props) {
    return (
        <>
            {posts.map((post) => (
                <CreatePosts post={post} />
            ))}
        </>
    );
}

export default Posts;
