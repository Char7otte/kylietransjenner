import { type Post } from "@/types/api";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/get-posts";

function PostsList() {
    const { isPending, isError, data, error } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
    if (isPending) return <span>Loading...</span>;
    if (isError) return <span>Error: {error.message}</span>;

    return (
        <>
            {data.map((post: Post, index: number) => {
                return (
                    <article key={index}>
                        <h2>Title:{post.title}</h2>
                        <p>Game:{post.game}</p>
                        <p>Date:{post.date}</p>
                        <p>Content:{post.content}</p>
                    </article>
                );
            })}
        </>
    );
}

export default PostsList;
