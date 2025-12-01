import { type Post } from "@/types/api";

import { useQuery, useQueryClient } from "@tanstack/react-query";

function Posts() {
    const queryClient = useQueryClient();

    async function fetchPosts() {
        const res = await fetch("/api/data");
        const data = await res.json();
        console.log(data);
        return data;
    }

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

export default Posts;
