const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
    return res.json(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
