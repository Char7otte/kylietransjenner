const sql = require("mssql");
const config = require("../dbConfig.js");

async function getAllPosts() {
    let connection;
    try {
        connection = await sql.connect(config);
        const query = `SELECT * FROM Post`;
        const request = connection.request();
        const result = await request.query(query);
        return result.recordset;
    } catch (error) {
        console.error("Database error:", error);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error("Error closing connection:", error);
            }
        }
    }
}

async function getPostByID(postID) {
    let connection;
    try {
        connection = await sql.connect(config);
        const query = `SELECT * FROM Post WHERE postID = @postID`;
        const request = connection.request();
        request.input("postID", postID);
        const result = await request.query(query);
        return result.recordset[0];
    } catch (error) {
        console.error("Database error:", error);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error("Error closing connection:", error);
            }
        }
    }
}

module.exports = {
    getAllPosts,
    getPostByID,
};
