const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello from the server');
});

const PORT = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
