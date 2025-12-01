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

module.exports = {
    getAllPosts,
};
