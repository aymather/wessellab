const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const { PORT } = process.env;

// App Init
const app = express();

// Static files
app.use(express.static(path.join(process.cwd(), 'cdn')));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})