export async function fetchPosts() {
    const res = await fetch("/api/data");
    const data = await res.json();
    return data;
}
