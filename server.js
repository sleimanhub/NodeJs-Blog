const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}...`);
});

