const express = require("express");

const sql = require("mssql");

require("dotenv").config();
const config = require("./dbConfig.js");

const app = express();
const port = process.env.PORT || 8080;

const PostController = require("./controllers/PostController.js");

app.get("/api/post", PostController.getAllPosts);
app.get("/api/post/:postID", PostController.getPostByID);

app.all("{*splat}", (req, res) => {
    return res.status(404).json({ message: "What are you doing here?" });
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});

process.on("SIGINT", async () => {
    console.log("Server is gracefully shutting down");
    await sql.close();
    console.log("Database connections closed");
    process.exit(0);
});
