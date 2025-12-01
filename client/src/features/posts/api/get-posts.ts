export async function fetchPosts() {
    const res = await fetch("/api/post");
    const data = await res.json();
    return data;
}
