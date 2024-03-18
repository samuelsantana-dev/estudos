const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const pastaBase = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${pastaBase}/index.html`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
}) 