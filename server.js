const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})
app.get("/contacts", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "contacts.html"));
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "portfolio.html"));
})

app.listen(process.env.PORT || 8000, () => console.log('server running'));


