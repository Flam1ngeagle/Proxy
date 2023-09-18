javascript
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Serve the proxy.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/proxy.html');
});

// Handle proxy requests
app.post('/proxy', (req, res) => {
    const { url, options } = req.body;

    fetch(url, options)
        .then(response => response.text())
        .then(responseText => {
            res.send(responseText);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

