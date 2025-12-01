const PostModel = require("../models/PostModel");

async function getAllPosts(req, res) {
    const data = await PostModel.getAllPosts();
    return res.status(200).json(data);
async function getPost(req, res) {
    const { postID } = req.params;
    const post = await PostModel.getPost(postID);
    if (!post) return res.status(404).json({ message: "PostID not found" });
    return res.status(200).json(post);
}

module.exports = {
    getAllPosts,
    getPost,
};
