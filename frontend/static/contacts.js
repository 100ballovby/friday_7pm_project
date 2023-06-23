const express = require('express');
const fs = require('fs');
const path = require('path');

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


app.listen(8000, () => {
    console.log('Server running on port 8000');
})

