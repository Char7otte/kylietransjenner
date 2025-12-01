const PostModel = require("../models/PostModel");

async function getAllPosts(req, res) {
    const data = await PostModel.getAllPosts();
    return res.status(200).json(data);
}

module.exports = {
    getAllPosts,
};
