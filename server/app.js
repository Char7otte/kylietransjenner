const express = require("express");

const sql = require("mssql");

require("dotenv").config();
const config = require("./dbConfig.js");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api/post", async (req, res) => {
    let connection;
    try {
        connection = await sql.connect(config);
        const query = `SELECT * FROM Post`;
        const request = connection.request();
        const result = await request.query(query);
        return res.json(result.recordset);
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
});

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
