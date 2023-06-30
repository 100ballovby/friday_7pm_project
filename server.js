const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;
    const data = `Name: ${name}\nEmail: ${email}\nSubject ${subject}\nSubject: ${message}\n\n`;

    fs.appendFile(path.resolve(__dirname, 'data.txt'), data, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log('Data saved successfully.');
            res.sendStatus(200);
        }
    });
});

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


