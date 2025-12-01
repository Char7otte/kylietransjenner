const PostModel = require("../models/PostModel");

async function getAllPosts(req, res) {
    const posts = await PostModel.getAllPosts();
    if (posts.length == 0) return res.status(404).json({ message: "There are no posts on the server." });
    return res.status(200).json(posts);
}

async function getPostByID(req, res) {
    const { postID } = req.params;
    const post = await PostModel.getPost(postID);
    if (!post) return res.status(404).json({ message: "PostID not found" });
    return res.status(200).json(post);
}

module.exports = {
    getAllPosts,
    getPostByID,
};
